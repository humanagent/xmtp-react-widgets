import React, { useState } from "react";
import { Broadcast } from "../Components/Broadcast";

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
};

const BroadcastPage = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleTextareaChange = (e) => {
    const lines = e.target.value.split("\n");

    // Ensure not more than 5 lines
    if (lines.length > 5) {
      setValidationMessage("You can enter up to 5 addresses.");
      return;
    }

    // Ensure every line is either a valid Ethereum address or an empty line
    if (
      lines.some(
        (line) => line.trim() !== "" && !ethers.utils.isAddress(line.trim()),
      )
    ) {
      setValidationMessage("Invalid Ethereum address detected.");
      return;
    }

    // If everything's good, update the textarea value and reset the validation message
    setTextareaValue(e.target.value);
    setValidationMessage("");
  };

  return (
    <div style={styles.HomePageWrapper}>
      <header className="App-header">
        <h1>
          <button
            style={styles.backButton}
            onClick={() => {
              window.history.back();
            }}>
            ←
          </button>
          Broadcast
        </h1>
        <div>
          <label
            style={{ display: "block", fontSize: "10px", marginBottom: "8px" }}>
            Enter one wallet address per line (up to 5 lines):
          </label>
          <textarea
            value={textareaValue}
            onChange={handleTextareaChange}
            placeholder="Enter wallet addresses, one per line"
            style={{ width: "400px", fontSize: "10px" }}
          />
          {validationMessage && (
            <small style={{ color: "red", marginTop: "8px" }}>
              {validationMessage}
            </small>
          )}
        </div>
      </header>
      <Broadcast
        env={process.env.REACT_APP_XMTP_ENV}
        walletAddresses={
          textareaValue.length > 0
            ? textareaValue.split("\n").map((address) => address.trim())
            : [
                "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
                "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
              ]
        }
        placeholderMessage="Enter a broadcast message here"
        theme="dark"
        size="medium"
      />
    </div>
  );
};

export default BroadcastPage;
