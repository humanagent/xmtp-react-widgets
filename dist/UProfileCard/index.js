"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UProfileCard = UProfileCard;
var _react = _interopRequireWildcard(require("react"));
require("./UProfileCard.css");
var _Logo = _interopRequireDefault(require("./Logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function UProfileCard(_ref) {
  var image = _ref.image,
    name = _ref.name,
    description = _ref.description,
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
    domain = _ref.domain,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? "default" : _ref$theme,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showCard = _useState2[0],
    setShowCard = _useState2[1];
  var selectedApp = deepLinkApps[defaultApp];
  // Add a check to ensure selectedApp is defined before accessing its properties
  var appUrl = selectedApp ? selectedApp.url : "#";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "uprofilecard-container ".concat(theme, " ").concat(size),
    onMouseEnter: function onMouseEnter() {
      return setShowCard(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowCard(false);
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "uprofilecard-button"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    className: "logo"
  }), "".concat(domain)), showCard && /*#__PURE__*/_react.default.createElement("div", {
    className: "uprofilecard"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "".concat(name, " Icon"),
    className: "uprofilecard-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "uprofilecard-text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "title"
  }, "".concat(domain)), /*#__PURE__*/_react.default.createElement("p", {
    className: "desc"
  }, "".concat(description)), /*#__PURE__*/_react.default.createElement("p", {
    className: "contact"
  }, "Contact me at ", /*#__PURE__*/_react.default.createElement("a", {
    href: appUrl,
    target: "_newtab",
    className: "contact",
    rel: "noopener noreferrer"
  }, "".concat(defaultApp))))));
}