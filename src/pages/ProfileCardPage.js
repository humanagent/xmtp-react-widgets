import React from "react";
import { ProfileCard } from "../Components/ProfileCard";

const styles = {
  StyledBadge: {
    padding: "0.225rem",
    backgroundColor: "lightgrey",
    fontSize: "12px",
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
  WidgetContainer: {
    marginTop: "20px",
  },
  HomePageWrapper: {
    textAlign: "center",
    marginTop: "2rem",
  },
};

const ProfileCardPage = () => {
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
        ProfileCard
      </h1>
      <div style={styles.WidgetContainer}>
        <span style={styles.StyledBadge}>{`${"medium"} `}</span>
        <ProfileCard
          image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
          description="Hi, I'm Shane, Co-Founder of XMTP."
          domain="shanemac.eth"
          theme="default"
          size="medium"
        />
      </div>
    </div>
  );
};

export default ProfileCardPage;
