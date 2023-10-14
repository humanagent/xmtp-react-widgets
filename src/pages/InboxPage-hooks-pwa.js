import React from "react";
import { FloatingInbox } from "../Components/FloatingInbox-hooks";

const styles = {
  HomePageWrapper: {
    textAlign: "center",
  },
};

const InboxPage = () => {
  return (
    <div style={styles.HomePageWrapper}>
      <FloatingInbox isPWA={true} env={process.env.REACT_APP_XMTP_ENV} />
    </div>
  );
};

export default InboxPage;
