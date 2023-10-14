"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _contentTypeRemoteAttachment = require("@xmtp/content-type-remote-attachment");
var _contentTypeReaction = require("@xmtp/content-type-reaction");
var _contentTypeReply = require("@xmtp/content-type-reply");
var _contentTypeReadReceipt = require("@xmtp/content-type-read-receipt");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var emojis = ["❤️", "😍", "💪🏻", "🫡"];
var EmojiPicker = function EmojiPicker(_ref) {
  var onEmojiSelect = _ref.onEmojiSelect,
    onReply = _ref.onReply;
  var pickerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        onEmojiSelect(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return function () {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onEmojiSelect]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "emoji-picker",
    ref: pickerRef
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "reply-button",
    onClick: onReply
  }, "Reply"), emojis.map(function (emoji, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      className: "emoji-item",
      onClick: function onClick() {
        return onEmojiSelect(emoji);
      },
      role: "img",
      "aria-label": "emoji-".concat(index)
    }, emoji);
  }));
};
var MessageItem = function MessageItem(_ref2) {
  var message = _ref2.message,
    senderAddress = _ref2.senderAddress,
    client = _ref2.client,
    imgSrc = _ref2.imgSrc,
    _onReply = _ref2.onReply,
    onReaction = _ref2.onReaction;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showEmojiPicker = _useState2[0],
    setShowEmojiPicker = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    reactions = _useState4[0],
    setReactions = _useState4[1];
  var isSender = senderAddress === (client === null || client === void 0 ? void 0 : client.address);
  var handleEmojiPick = function handleEmojiPick(emoji) {
    if (emoji) {
      setReactions(function (prevReactions) {
        if (prevReactions.includes(emoji)) {
          return prevReactions.filter(function (r) {
            return r !== emoji;
          });
        }
        return [].concat(_toConsumableArray(prevReactions), [emoji]);
      });
      onReaction(message, emoji); // Send the message and emoji to the parent component
    }

    setShowEmojiPicker(false);
  };
  var handleLeftClick = function handleLeftClick(event) {
    event.stopPropagation(); // Stops the event from bubbling up
    setShowEmojiPicker(!showEmojiPicker);
  };

  /*const handleRightClick = (event) => {
    event.preventDefault(); // Prevents the default right-click menu
    event.stopPropagation(); // Stops the event from bubbling up
    setShowEmojiPicker(!showEmojiPicker);
  };*/

  var getCodecForContent = function getCodecForContent(content) {
    var codec = client.codecFor(content.contentType);
    if (!codec) {
      var fallback = "missing codec for content type \"".concat(content.contentType.toString(), "\"");
      throw new Error(fallback);
    }
    return codec;
  };
  var renderMessage = function renderMessage(message) {
    var codec = getCodecForContent(message);
    if (!codec) return null;
    if (message.contentType.sameAs(_contentTypeRemoteAttachment.ContentTypeRemoteAttachment)) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, imgSrc ? /*#__PURE__*/_react.default.createElement("img", {
        src: imgSrc,
        alt: "Attachment",
        style: {
          maxWidth: "100%"
        }
      }) : "Downloading attachment...");
    } else if (message.contentType.sameAs(_contentTypeReaction.ContentTypeReaction)) {
      //No render reactions
    } else if (message.contentType.sameAs(_contentTypeReply.ContentTypeReply)) {
      //No render reactions
    } else if (message.contentType.sameAs(_contentTypeReadReceipt.ContentTypeReadReceipt)) {
      //No render reactions
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.content);
    }
  };
  return /*#__PURE__*/_react.default.createElement("li", {
    className: isSender ? "sender" : "receiver",
    key: message.id,
    onClick: handleLeftClick
  }, renderMessage(message), /*#__PURE__*/_react.default.createElement("div", {
    className: "reactions"
  }, reactions.map(function (emoji, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      className: "emoji-reaction",
      onClick: function onClick() {
        return handleEmojiPick(emoji);
      },
      role: "img",
      "aria-label": "emoji-reaction-".concat(index)
    }, emoji);
  })), showEmojiPicker && /*#__PURE__*/_react.default.createElement(EmojiPicker, {
    onEmojiSelect: handleEmojiPick,
    onReply: function onReply() {
      return _onReply(message);
    }
  }));
};
var _default = MessageItem;
exports.default = _default;