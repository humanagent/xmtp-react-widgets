import React from "react";
import { ContactLink } from "../Components/ContactLink";
import { deepLinkApps } from "../deepLinkApps";

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

const ConnectPage = () => {
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
        ContactLink
      </h1>

      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>{`${"light"} | text`}</span>
        <ContactLink
          domain="shanemac.eth"
          walletAddress="0xUserWalletAddress"
          defaultApp="xmtp"
          theme={"light"}
          size={"default"}
          showText={true}
        />
      </div>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>{`${"dark"} | notext`}</span>
        <ContactLink
          domain="shanemac.eth"
          walletAddress="0xUserWalletAddress"
          defaultApp="xmtp"
          deepLinkApps={deepLinkApps}
          theme={"dark"}
          size={"default"}
          showText={false}
        />
      </div>
    </div>
  );
};

export default ConnectPage;
