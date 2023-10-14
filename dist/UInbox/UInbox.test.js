"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _index = require("./index");
require("@testing-library/jest-dom/extend-expect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Update the path based on your folder structure

jest.mock("@xmtp/react-sdk", function () {
  return {
    Client: {
      create: jest.fn()
    }
  };
});
describe("<UInbox />", function () {
  it("opens when window.uinbox.open() is called", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UInbox, null));
    (0, _react2.act)(function () {
      // Simulate the calling of the open method
      window.uinbox.open();
    });

    // Your assertion code to check if UInbox has opened
    // This may vary depending on how the open state is handled in your component
  });

  it("closes when window.uinbox.close() is called", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UInbox, null));
    (0, _react2.act)(function () {
      // Simulate the calling of the close method
      window.uinbox.close();
    });

    // Your assertion code to check if UInbox has closed
    // This may vary depending on how the close state is handled in your component
  });
});