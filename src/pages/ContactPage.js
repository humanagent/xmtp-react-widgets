import React from "react";
import { ContactPage as ContactPageWidget } from "../Components/ContactPage";
import { deepLinkApps } from "../deepLinkApps";

const styles = {
  HomePageWrapper: {
    textAlign: "center",
    height: "100%",
    minHeight: "100vh",
  },
};

const ContactPage = () => {
  const domain =
    window.location.pathname.split("/")[2].length > 0
      ? window.location.pathname.split("/")[2]
      : undefined;

  return (
    <div style={styles.HomePageWrapper}>
      <ContactPageWidget domain={domain} deepLinkApps={deepLinkApps} />
    </div>
  );
};

export default ContactPage;
