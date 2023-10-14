"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UButton = UButton;
var _react = _interopRequireWildcard(require("react"));
require("./UButton.css");
var _Logo = _interopRequireDefault(require("./Logo"));
var _CopyPasteIcon = _interopRequireDefault(require("./CopyPasteIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function UButton(_ref) {
  var domain = _ref.domain,
    walletAddress = _ref.walletAddress,
    defaultApp = _ref.defaultApp,
    deepLinkApps = _ref.deepLinkApps,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? "default" : _ref$theme,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$device = _ref.device,
    device = _ref$device === void 0 ? "All" : _ref$device;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    deviceSpecificApps = _useState2[0],
    setDeviceSpecificApps = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isCopied = _useState4[0],
    setIsCopied = _useState4[1];
  (0, _react.useEffect)(function () {
    var devicep = detectDevice(device);
    var deepLinkAppsArray = Object.values(deepLinkApps);
    var filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);
  var detectDevice = function detectDevice(device) {
    var userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    return device ? device : "Desktop";
  };
  var filterAppsByDevice = function filterAppsByDevice(apps, device) {
    return apps.filter(function (app) {
      return app.device.includes(device) || app.device.includes("All");
    });
  };
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showApps = _useState6[0],
    setShowApps = _useState6[1];
  var handleCopyClick = function handleCopyClick(event) {
    event.stopPropagation();
    navigator.clipboard.writeText(walletAddress).then(function () {
      setIsCopied(true); // Set the copied state to true

      // Revert to false after 2 seconds (or your preferred duration)
      setTimeout(function () {
        setIsCopied(false);
      }, 2000);
    }, function (err) {
      console.error("Failed to copy wallet address:", err);
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ubutton-button-container ".concat(theme, " ").concat(size)
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ubutton-button ",
    onClick: function onClick() {
      return setShowApps(!showApps);
    }
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    className: "logo"
  }), "".concat(domain), /*#__PURE__*/_react.default.createElement("div", {
    className: "cp ".concat(isCopied ? "copied" : ""),
    onClick: function onClick(event) {
      return handleCopyClick(event);
    }
  }, /*#__PURE__*/_react.default.createElement(_CopyPasteIcon.default, {
    className: "cp"
  }), isCopied && /*#__PURE__*/_react.default.createElement("span", {
    className: "tooltip"
  }, "Address Copied!"))), showApps && /*#__PURE__*/_react.default.createElement("ul", {
    className: "ubutton-button-list"
  }, deviceSpecificApps.map(function (app, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: app.icon,
      alt: "".concat(app.name, " Icon"),
      className: "ubutton-button-icon"
    }), /*#__PURE__*/_react.default.createElement("a", {
      href: app.url,
      target: "_newtab",
      rel: "noopener noreferrer"
    }, "Message on ".concat(app.name)));
  })));
}