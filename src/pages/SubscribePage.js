import React, { useState, useEffect } from "react";
import { Subscribe } from "../Components/Subscribe";
import { ethers } from "ethers";
import {
  addSubscriber,
  removeSubscriber,
  checkSubscriptionStatus,
} from "../utils";

const styles = {
  WidgetContainer: {
    marginTop: "20px",
  },
  backButton: {
    border: "0px",
    background: "transparent",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  ButtonStyled: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    borderRadius: "5px",
    marginBottom: "2px",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    color: "#333333",
    backgroundColor: "#ededed",
    fontSize: "12px",
  },
  StyledBadge: {
    padding: "0.225rem",
    fontSize: "12px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    display: "inline-block",
    margin: "auto",
    marginRight: "10px",
  },
  HomePageWrapper: {
    textAlign: "center",
    marginTop: "2rem",
  },
};

const SubscribePage = () => {
  const [signer, setSigner] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false); // Add state for wallet connection
  const [subscriberCount, setSubscriberCount] = useState(0);

  const disconnectWallet = () => {
    localStorage.removeItem("walletConnected");
    localStorage.removeItem("signerAddress");
    setSigner(null);
    setWalletConnected(false);
  };

  const getAddress = async (signer) => {
    try {
      return await signer?.getAddress();
    } catch (e) {
      console.log(e);
      console.log("entra2");
    }
  };
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        setWalletConnected(true);
        console.log("entra6");
        let address = await getAddress(signer);
        localStorage.setItem("walletConnected", JSON.stringify(true)); // Save connection status in local storage
        localStorage.setItem("signerAddress", JSON.stringify(address)); // Save signer address in local storage
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  useEffect(() => {
    let initialCount = 0;
    const subscribers = localStorage.getItem("subscribers");
    if (subscribers) {
      initialCount = JSON.parse(subscribers).length;
    }
    setSubscriberCount(initialCount);
    const storedWalletConnected = localStorage.getItem("walletConnected");
    const storedSignerAddress = JSON.parse(
      localStorage.getItem("signerAddress"),
    );
    if (storedWalletConnected && storedSignerAddress) {
      setWalletConnected(JSON.parse(storedWalletConnected));
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setSigner(signer);
    }
  }, []);

  return (
    <div style={styles.HomePageWrapper}>
      <section>
        <button style={styles.ButtonStyled} onClick={() => connectWallet()}>
          {walletConnected ? "Connected" : "Connect Wallet"}
        </button>
        {walletConnected && (
          <button
            style={styles.ButtonStyled}
            onClick={() => disconnectWallet()}>
            Logout
          </button>
        )}
      </section>
      <section>
        <h1>
          <button
            style={styles.backButton}
            onClick={() => {
              window.history.back();
            }}>
            ←
          </button>
          Subscribe
        </h1>
        <small>Subscriber count: {subscriberCount}</small>
      </section>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>
          {`${"dark"}`} | {`${"medium"}`}
        </span>
        <Subscribe
          theme="dark"
          size="medium"
          wallet={signer}
          env={process.env.REACT_APP_XMTP_ENV}
          checkSubscriptionStatus={(address) => {
            return checkSubscriptionStatus(address);
          }}
          onSubscribe={(address) => {
            console.log("New subscriber: " + address);
            const count = addSubscriber(address);
            setSubscriberCount(count);
          }}
          onUnsubscribe={(address) => {
            console.log("Unsubscribed: " + address);
            const count = removeSubscriber(address);
            setSubscriberCount(count);
          }}
          onError={(address) => {
            console.log("Error subscribing: " + address);
          }}
        />
      </div>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>
          {`${"default"}`} | {`${"small"}`}
        </span>
        <Subscribe
          theme="default"
          size="small"
          wallet={signer}
          env={process.env.REACT_APP_XMTP_ENV}
          checkSubscriptionStatus={(address) => {
            return checkSubscriptionStatus(address);
          }}
          onSubscribe={(address) => {
            console.log("New subscriber: " + address);
            const count = addSubscriber(address);
            setSubscriberCount(count);
          }}
          onUnsubscribe={(address) => {
            console.log("Unsubscribed: " + address);
            const count = removeSubscriber(address);
            setSubscriberCount(count);
          }}
          onError={(address) => {
            console.log("Error subscribing: " + address);
          }}
        />
      </div>
    </div>
  );
};

export default SubscribePage;
