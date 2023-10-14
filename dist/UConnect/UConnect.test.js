"use strict";

var _react = _interopRequireDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
var _react2 = require("@testing-library/react");
var _index = require("./index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("<UConnect />", function () {
  it("renders without crashing", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UConnect, {
      domain: "xmtp.eth",
      walletAddress: "0xUserWalletAddress"
    }));
  });
  it("applies the dark theme correctly", function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UConnect, {
        domain: "xmtp.eth",
        walletAddress: "0xUserWalletAddress",
        theme: "dark"
      })),
      container = _render.container;
    expect(container.firstChild).toHaveClass("dark");
  });
  it("generates the correct xmtp URL", function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UConnect, {
        domain: "xmtp.eth",
        walletAddress: "0xUserWalletAddress"
      })),
      getByText = _render2.getByText;
    expect(getByText("xmtp.eth")).toHaveAttribute("href", "https://xmtp.chat/dm/0xUserWalletAddress");
  });
  it("generates the correct xmtp URL", function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UConnect, {
        domain: "xmtp.eth",
        walletAddress: "0xUserWalletAddress"
      })),
      getByText = _render3.getByText;
    expect(getByText("xmtp.eth")).toHaveAttribute("href", "https://xmtp.chat/dm/0xUserWalletAddress");
  });
  it("generates the correct xmtp URL", function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UConnect, {
        domain: "xmtp.eth",
        walletAddress: "0xUserWalletAddress"
      })),
      getByText = _render4.getByText;
    expect(getByText("xmtp.eth")).toHaveAttribute("href", "https://xmtp.chat/dm/0xUserWalletAddress");
  });
});