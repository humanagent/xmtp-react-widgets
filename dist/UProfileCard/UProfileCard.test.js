"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _index = require("./index");
require("@testing-library/jest-dom/extend-expect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("<UProfileCard />", function () {
  var defaultProps = {
    image: "test-image.png",
    name: "Test Name",
    description: "Test Description",
    defaultApp: "xmtp",
    domain: "test.eth",
    walletAddress: "0xTestWalletAddress"
  };
  it("renders without crashing", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UProfileCard, defaultProps));
    expect(_react2.screen.getByText("test.eth")).toBeInTheDocument();
  });
  it("shows profile card on hover", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UProfileCard, defaultProps));
    var button = _react2.screen.getByText("test.eth");
    _react2.fireEvent.mouseEnter(button);
    expect(_react2.screen.getByText("Test Description")).toBeInTheDocument();
    _react2.fireEvent.mouseLeave(button);
    expect(_react2.screen.queryByText("Test Description")).toBeNull();
  });
  it("uses correct messaging URL", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UProfileCard, defaultProps));
    var button = _react2.screen.getByText("test.eth");
    _react2.fireEvent.mouseEnter(button);
    var contactLink = _react2.screen.getByText("xmtp");
    expect(contactLink).toHaveAttribute("href", "https://xmtp.chat/dm/0xTestWalletAddress");
  });
});