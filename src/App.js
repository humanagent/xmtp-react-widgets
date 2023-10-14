import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SubscribePage from "./pages/SubscribePage";
import ButtonPage from "./pages/ButtonPage";
import ProfileCardPage from "./pages/ProfileCardPage";
import ConnectPage from "./pages/ConnectPage";
import InboxPage from "./pages/InboxPage";
import InboxPagetext from "./pages/InboxPage-text";
import InboxPagehooks from "./pages/InboxPage-hooks";
import BroadcastPage from "./pages/BroadcastPage";
import ContactPage from "./pages/ContactPage";
import EnablePage from "./pages/EnablePage";
import InboxPagehooksPWA from "./pages/InboxPage-hooks-pwa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/enable" element={<EnablePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/profile-card" element={<ProfileCardPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/inbox-text" element={<InboxPagetext />} />
        <Route path="/inbox-hooks" element={<InboxPagehooks />} />
        <Route path="/inbox-hooks-pwa" element={<InboxPagehooksPWA />} />
        <Route path="/link/:domain" element={<ContactPage />} />
        <Route path="/broadcast" element={<BroadcastPage />} />
        <Route path="/link" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
