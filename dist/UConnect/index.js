"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UConnect = UConnect;
var _react = _interopRequireDefault(require("react"));
require("./UConnect.css");
var _Logo = _interopRequireDefault(require("./Logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function UConnect(_ref) {
  var domain = _ref.domain,
    walletAddress = _ref.walletAddress,
    _ref$defaultApp = _ref.defaultApp,
    defaultApp = _ref$defaultApp === void 0 ? "xmtp" : _ref$defaultApp,
    _ref$deepLinkApps = _ref.deepLinkApps,
    deepLinkApps = _ref$deepLinkApps === void 0 ? {
      xmtp: {
        url: "https://xmtp.chat/dm/".concat(walletAddress),
        icon: "https://xmtp.chat/favicon.ico",
        device: ["All"]
      }
    } : _ref$deepLinkApps,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? "default" : _ref$theme,
    _ref$showText = _ref.showText,
    showText = _ref$showText === void 0 ? true : _ref$showText;
  var selectedApp = deepLinkApps[defaultApp];
  return /*#__PURE__*/_react.default.createElement("a", {
    href: selectedApp.url,
    target: "_newtab",
    rel: "noopener noreferrer",
    className: "uconnect ".concat(theme)
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    className: "logo"
  }), showText && domain);
}