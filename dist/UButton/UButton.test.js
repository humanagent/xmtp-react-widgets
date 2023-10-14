"use strict";

var _react = _interopRequireDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
var _react2 = require("@testing-library/react");
var _index = require("./index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("<UButton />", function () {
  it("shows the messaging apps when clicked", function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UButton, {
        domain: "fabri.eth",
        walletAddress: "0xUserWalletAddress"
      })),
      getByText = _render.getByText,
      queryByText = _render.queryByText;
    _react2.fireEvent.click(getByText("fabri.eth"));
    expect(queryByText("Message on xmtp Wallet")).toBeInTheDocument();
  });
});