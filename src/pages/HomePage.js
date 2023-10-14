import React from "react";
import { Link } from "react-router-dom";

const styles = {
  HomePageWrapper: {
    textAlign: "center",
    marginTop: "2rem",
  },
  Headings: {
    textAlign: "left",
    paddingLeft: "2rem",
  },
  FeatureList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  FeatureItem: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "grey",
    borderRadius: "0.5rem",
    margin: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    padding: "1rem",
    width: "250px",
    color: "black",
    textAlign: "left",
    background:
      "radial-gradient(at right top, rgba(239, 68, 68, 0.4), transparent)",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "0.15s",
  },
  StyledTitle: {
    margin: "0px",
  },
};

const HomePage = () => {
  return (
    <div style={styles.HomePageWrapper}>
      <h1 style={styles.Headings}>XMTP Prototypes </h1>
      <div style={styles.FeatureList}>
        <Link to="/subscribe" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Subscribe</h3>
          <p>Subscribe to a another wallet, newsletter, company or campaign.</p>
        </Link>
        <Link to="/enable" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Enable</h3>
          <p>Button for enabling XMTP identity for the first time.</p>
        </Link>
        <Link to="/button" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Buttons</h3>
          <p>Styled buttons with a dropdown showcasing different clients.</p>
        </Link>
        <Link to="/profile-card" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Profile Card</h3>
          <p>Displays a user's profile card with a link to message directly.</p>
        </Link>
        <Link to="/connect" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Contact Link</h3>
          <p>Linked logo to put on footers, headers, navbars, profiles, etc.</p>
        </Link>
        <Link to="/inbox" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Floating Inbox</h3>
          <p>Embedable floating chat widget with content types. (xmtp-js)</p>
        </Link>
        <Link to="/inbox-text" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Floating Inbox (Text)</h3>
          <p>Embedable floating chat widget with only text. (xmtp-js)</p>
        </Link>
        <Link to="/inbox-hooks" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Floating Inbox (Hooks)</h3>
          <p>Inbox built with the react sdk hooks and only text.</p>
        </Link>
        <Link to="/inbox-hooks-pwa" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Floating Inbox (Hooks) PWA</h3>
          <p>Inbox built with the react sdk and hooks in PWA mode.</p>
        </Link>
        <Link to="/broadcast" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Broadcast</h3>
          <p>Broadcast widgets for sending a message to multiple wallets.</p>
        </Link>
        <Link to="/link/cryptocornerstore.eth" style={styles.FeatureItem}>
          <h3 style={styles.StyledTitle}>Contact Page</h3>
          <p>Standalone page with deeplinking and ENS avatar</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
