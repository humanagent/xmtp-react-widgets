import React, { useState, useEffect } from "react";
import { FloatingInbox } from "../Components/FloatingInbox-hooks";
import { ethers } from "ethers";

const styles = {
  HomePageWrapper: {
    textAlign: "center",
    marginTop: "2rem",
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
    marginLeft: "10px",
    fontSize: "12px",
  },
};

const InboxPage = () => {
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
      <button
        style={styles.ButtonStyled}
        className="home-button"
        onClick={() => connectWallet()}>
        {walletConnected ? "Connected" : "Connect Wallet"}
      </button>
      {walletConnected && (
        <button
          style={styles.ButtonStyled}
          className="home-button"
          onClick={() => disconnectWallet()}>
          Logout
        </button>
      )}
      <h1>
        <button
          style={styles.backButton}
          onClick={() => {
            window.history.back();
          }}>
          ←
        </button>
        FloatingInbox Hooks
      </h1>
      <section className="App-section">
        <button
          style={styles.ButtonStyled}
          className="home-button"
          onClick={() => window.FloatingInbox.open()}>
          Open
        </button>
        <button
          style={styles.ButtonStyled}
          className="home-button"
          onClick={() => window.FloatingInbox.close()}>
          Close
        </button>
      </section>

      <FloatingInbox
        env={process.env.REACT_APP_XMTP_ENV}
        wallet={signer}
        isPWA={false}
      />
    </div>
  );
};

export default InboxPage;
