import React from "react";
import { Button } from "../Components/Button";
import { deepLinkApps } from "../deepLinkApps";

const styles = {
  HomePageWrapper: {
    textAlign: "center",
    marginTop: "2rem",
  },
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
  StyledBadge: {
    padding: "0.225rem",
    fontSize: "12px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    display: "inline-block",
    margin: "auto",
    marginRight: "10px",
  },
};

const ButtonPage = () => {
  return (
    <div style={styles.HomePageWrapper}>
      <h1>
        <button
          style={styles.backButton}
          onClick={() => {
            window.history.back();
          }}>
          ←
        </button>
        Buttons
      </h1>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>
          {`${"light"} `} | {`${"medium"}`}
        </span>
        <Button
          domain="shanemac.eth"
          walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
          theme={"light"}
          deepLinkApps={deepLinkApps}
          size={"medium"}
        />
      </div>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>
          {`${"dark"} `} | {`${"large"}`}
        </span>
        <Button
          domain="shanemac.eth"
          walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
          theme={"dark"}
          deepLinkApps={deepLinkApps}
          size={"large"}
        />
      </div>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>
          {`${"dark"} `} | {`${"small"}`}
        </span>
        <Button
          domain="shanemac.eth"
          walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
          theme={"default"}
          deepLinkApps={deepLinkApps}
          size={"medium"}
        />
      </div>
    </div>
  );
};

export default ButtonPage;
