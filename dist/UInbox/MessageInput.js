"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageInput = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MessageInput = function MessageInput(_ref) {
  var onSendMessage = _ref.onSendMessage,
    onFileUpload = _ref.onFileUpload,
    isLoadingUpload = _ref.isLoadingUpload,
    loadingText = _ref.loadingText;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    newMessage = _useState2[0],
    setNewMessage = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    image = _useState4[0],
    setImage = _useState4[1];
  var handleDragOver = function handleDragOver(event) {
    event.preventDefault();
  };
  var handleFileDrop = function handleFileDrop(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    setNewMessage(file.name);
    setImage(file);
    onFileUpload(file);
  };
  var handleInputChange = function handleInputChange(event) {
    if (event.key === "Enter") {
      onSendMessage(newMessage, image);
      setNewMessage("");
      setImage(null);
    } else {
      setNewMessage(event.target.value);
      setImage(null);
    }
  };
  var handleFileInputChange = function handleFileInputChange(event) {
    var _event$target;
    var file = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files[0];
    setNewMessage(file.name);
    setImage(file);
    onFileUpload(file);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "new-message",
    onDrop: handleFileDrop,
    onDragOver: handleDragOver
  }, isLoadingUpload ? /*#__PURE__*/_react.default.createElement("small", {
    className: "message-input"
  }, loadingText) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: newMessage,
    onKeyPress: handleInputChange,
    onChange: handleInputChange,
    placeholder: "Type your message or upload an image...",
    className: "message-input"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    onChange: handleFileInputChange,
    style: {
      display: "none"
    },
    id: "image-upload"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "image-upload",
    className: "send-button-upload"
  }, "\uD83D\uDCE4"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      onSendMessage(newMessage, image);
      setNewMessage("");
    },
    className: "send-button"
  }, "Send")));
};
exports.MessageInput = MessageInput;