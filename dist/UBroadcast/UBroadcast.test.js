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
describe("<UBroadcast />", function () {
  it("opens when window.ubroadcast.open() is called", function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UBroadcast, null)),
      container = _render.container;
    expect(container).toBeEmpty(); // Assuming the component returns null when closed

    (0, _react2.act)(function () {
      // Simulate the calling of the open method
      window.ubroadcast.open();
    });
    expect(container).not.toBeEmpty(); // Assuming the component renders content when open
  });

  it("closes when window.ubroadcast.close() is called", function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.UBroadcast, null)),
      container = _render2.container;
    (0, _react2.act)(function () {
      // Simulate the calling of the open method
      window.ubroadcast.open();
    });
    expect(container).not.toBeEmpty(); // Assuming the component renders content when open

    (0, _react2.act)(function () {
      // Simulate the calling of the close method
      window.ubroadcast.close();
    });
    expect(container).toBeEmpty(); // Assuming the component returns null when closed
  });
});