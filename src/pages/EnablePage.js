import React, { useState, useEffect } from "react";
import { Subscribe } from "../Components/Subscribe";
import { ethers } from "ethers";

const styles = {
  StyledBadge: {
    padding: "0.225rem",
    fontSize: "12px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    display: "inline-block",
    margin: "auto",
    marginRight: "10px",
  },
  backButton: {
    border: "0px",
    background: "transparent",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  HomePageWrapper: {
    textAlign: "center",
    marginTop: "2rem",
  },
  WidgetContainer: {
    marginTop: "20px",
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
};

const EnablePage = () => {
  const [signer, setSigner] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false); // Add state for wallet connection

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
        <button
          className="home-button"
          style={{ ...styles.ButtonStyled, marginLeft: 10 }}
          onClick={() => connectWallet()}>
          {walletConnected ? "Connected" : "Connect Wallet"}
        </button>
        {walletConnected && (
          <button
            className="home-button"
            style={{ ...styles.ButtonStyled, marginLeft: 10 }}
            onClick={() => disconnectWallet()}>
            Logout
          </button>
        )}
      </section>
      <h1>
        <button
          style={styles.backButton}
          onClick={() => {
            window.history.back();
          }}>
          ←
        </button>
        Enable
      </h1>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>
          {`${"default"}`} | {`${"small"}`}
        </span>
        <Subscribe
          theme={"default"}
          size={"small"}
          wallet={signer}
          env={process.env.REACT_APP_XMTP_ENV}
          labels={{
            loading: "Loading...",
            subscribed:
              "Identity enabled. You can now message other XMTP users.",
            default: "Enable your XMTP identity",
          }}
        />
      </div>
    </div>
  );
};

export default EnablePage;
