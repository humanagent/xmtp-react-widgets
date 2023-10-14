"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageContainer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _contentTypeRemoteAttachment = require("@xmtp/content-type-remote-attachment");
var _MessageInput = require("./MessageInput");
var _MessageItem = _interopRequireDefault(require("./MessageItem"));
var _contentTypeReaction = require("@xmtp/content-type-reaction");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(r) { var n = this.s.return; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, throw: function _throw(r) { var n = this.s.return; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
var MessageContainer = function MessageContainer(_ref) {
  var _ref2, _ref3, _ref5, _ref6, _ref7, _ref8;
  var conversation = _ref.conversation,
    client = _ref.client,
    searchTerm = _ref.searchTerm,
    selectConversation = _ref.selectConversation;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    imageSources = _useState2[0],
    setImageSources = _useState2[1];
  var messagesEndRef = (0, _react.useRef)(null);
  var isFirstLoad = (0, _react.useRef)(true);
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    messages = _useState4[0],
    setMessages = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingText = _useState6[0],
    setLoadingText = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadingUpload = _useState8[0],
    setIsLoadingUpload = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    image = _useState12[0],
    setImage = _useState12[1];
  var handleReply = function handleReply(_x) {
    return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("Reply to:", message.id);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))).apply(this, arguments);
  };
  var handleReaction = function handleReaction(_x2, _x3) {
    return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message, emoji) {
      var reaction;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log(message);
            console.log("Reacting to:", message.id, emoji);
            reaction = {
              reference: message.id,
              schema: "unicode",
              action: "added",
              content: ":smile:"
            };
            console.log(reaction, _contentTypeReaction.ContentTypeReaction);
            _context2.next = 6;
            return conversation.send(reaction, {
              contentType: _contentTypeReaction.ContentTypeReaction
            });
          case 6:
            console.log("reation sent");
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))).apply(this, arguments);
  };
  (0, _react.useEffect)(function () {
    var _ref4;
    var fetchMessages = function fetchMessages() {
      return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var initialMessages;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(conversation && conversation.peerAddress && isFirstLoad.current)) {
                _context3.next = 8;
                break;
              }
              setIsLoading(true);
              _context3.next = 4;
              return conversation === null || conversation === void 0 ? void 0 : conversation.messages();
            case 4:
              initialMessages = _context3.sent;
              setMessages(initialMessages);
              setIsLoading(false);
              isFirstLoad.current = false;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))).apply(this, arguments);
    };
    fetchMessages();
  }, [conversation]);
  var startMessageStream = function startMessageStream() {
    return (_ref5 = _ref5 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var stream, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return conversation.streamMessages();
          case 2:
            stream = _context5.sent;
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context5.prev = 5;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var message;
              return _regeneratorRuntime().wrap(function _loop$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    message = _step.value;
                    setMessages(function (prevMessages) {
                      // Check if message with same id is already present
                      var doesMessageExist = prevMessages.some(function (existingMessage) {
                        return existingMessage.id === message.id;
                      });
                      if (!doesMessageExist) {
                        return [].concat(_toConsumableArray(prevMessages), [message]);
                      }
                      return prevMessages;
                    });
                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }, _loop);
            });
            _iterator = _asyncIterator(stream);
          case 8:
            _context5.next = 10;
            return _iterator.next();
          case 10:
            if (!(_iteratorAbruptCompletion = !(_step = _context5.sent).done)) {
              _context5.next = 15;
              break;
            }
            return _context5.delegateYield(_loop(), "t0", 12);
          case 12:
            _iteratorAbruptCompletion = false;
            _context5.next = 8;
            break;
          case 15:
            _context5.next = 21;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t1 = _context5["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context5.t1;
          case 21:
            _context5.prev = 21;
            _context5.prev = 22;
            if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
              _context5.next = 26;
              break;
            }
            _context5.next = 26;
            return _iterator.return();
          case 26:
            _context5.prev = 26;
            if (!_didIteratorError) {
              _context5.next = 29;
              break;
            }
            throw _iteratorError;
          case 29:
            return _context5.finish(26);
          case 30:
            return _context5.finish(21);
          case 31:
          case "end":
            return _context5.stop();
        }
      }, _callee4, null, [[5, 17, 21, 31], [22,, 26, 30]]);
    }))).apply(this, arguments);
  };
  (0, _react.useEffect)(function () {
    if (conversation && conversation.peerAddress) {
      startMessageStream();
    }
    return function () {
      // Cleanup code if needed
    };
  }, [conversation]);
  var handleSendMessage = function handleSendMessage(_x4, _x5) {
    return (_ref6 = _ref6 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(newMessage, image) {
      var conv;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!newMessage.trim() && !image)) {
              _context6.next = 3;
              break;
            }
            alert("empty message");
            return _context6.abrupt("return");
          case 3:
            if (!image) {
              _context6.next = 8;
              break;
            }
            _context6.next = 6;
            return handleLargeFile(image);
          case 6:
            _context6.next = 20;
            break;
          case 8:
            if (!(conversation && conversation.peerAddress)) {
              _context6.next = 13;
              break;
            }
            _context6.next = 11;
            return conversation.send(newMessage);
          case 11:
            _context6.next = 20;
            break;
          case 13:
            if (!conversation) {
              _context6.next = 20;
              break;
            }
            _context6.next = 16;
            return client.conversations.newConversation(searchTerm);
          case 16:
            conv = _context6.sent;
            selectConversation(conv);
            _context6.next = 20;
            return conv.send(newMessage);
          case 20:
            setImage(null);
          case 21:
          case "end":
            return _context6.stop();
        }
      }, _callee5);
    }))).apply(this, arguments);
  };
  var handleLargeFile = function handleLargeFile(_x6) {
    return (_ref7 = _ref7 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(image) {
      var data, attachment, encryptedEncoded, Upload, upload, _require, Web3Storage, web3Storage, cid, url, remoteAttachment;
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setIsLoadingUpload(true);
            setLoadingText("Uploading...");
            _context7.prev = 2;
            _context7.next = 5;
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onload = function () {
                if (reader.result instanceof ArrayBuffer) {
                  resolve(reader.result);
                } else {
                  reject(new Error("Not an ArrayBuffer"));
                }
              };
              reader.readAsArrayBuffer(image);
            });
          case 5:
            data = _context7.sent;
            attachment = {
              filename: image === null || image === void 0 ? void 0 : image.name,
              mimeType: image === null || image === void 0 ? void 0 : image.type,
              data: new Uint8Array(data)
            };
            _context7.next = 9;
            return _contentTypeRemoteAttachment.RemoteAttachmentCodec.encodeEncrypted(attachment, new _contentTypeRemoteAttachment.AttachmentCodec());
          case 9:
            encryptedEncoded = _context7.sent;
            Upload = /*#__PURE__*/function () {
              function Upload(name, data) {
                _classCallCheck(this, Upload);
                this.name = name;
                this.data = data;
              }
              _createClass(Upload, [{
                key: "stream",
                value: function stream() {
                  var self = this;
                  return new ReadableStream({
                    start: function start(controller) {
                      controller.enqueue(Buffer.from(self.data));
                      controller.close();
                    }
                  });
                }
              }]);
              return Upload;
            }();
            upload = new Upload(attachment.filename, encryptedEncoded.payload);
            _require = require("web3.storage"), Web3Storage = _require.Web3Storage;
            web3Storage = new Web3Storage({
              token: process.env.REACT_APP_WEB3STORAGE_KEY
            });
            _context7.next = 16;
            return web3Storage.put([upload]);
          case 16:
            cid = _context7.sent;
            url = "https://".concat(cid, ".ipfs.w3s.link/") + attachment.filename;
            setLoadingText(url);
            remoteAttachment = {
              url: url,
              contentDigest: encryptedEncoded.digest,
              salt: encryptedEncoded.salt,
              nonce: encryptedEncoded.nonce,
              secret: encryptedEncoded.secret,
              scheme: "https://",
              filename: attachment.filename,
              contentLength: attachment.data.byteLength
            };
            setLoadingText("Sending...");
            _context7.next = 23;
            return conversation.send(remoteAttachment, {
              contentType: _contentTypeRemoteAttachment.ContentTypeRemoteAttachment
            });
          case 23:
            _context7.next = 28;
            break;
          case 25:
            _context7.prev = 25;
            _context7.t0 = _context7["catch"](2);
            console.error(_context7.t0);
          case 28:
            _context7.prev = 28;
            setIsLoadingUpload(false);
            return _context7.finish(28);
          case 31:
          case "end":
            return _context7.stop();
        }
      }, _callee6, null, [[2, 25, 28, 31]]);
    }))).apply(this, arguments);
  };
  var handleFileUpload = function handleFileUpload(event) {
    var _event$target;
    var file = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files[0];
    setImage(file);
  };
  var scrollToLatestMessage = function scrollToLatestMessage() {
    var element = messagesEndRef.current;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  var getImageSrcFromMessage = function getImageSrcFromMessage(_x7, _x8) {
    return (_ref8 = _ref8 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(message, client) {
      var attachment, objectURL;
      return _regeneratorRuntime().wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _contentTypeRemoteAttachment.RemoteAttachmentCodec.load(message.content, client);
          case 3:
            attachment = _context8.sent;
            if (!(attachment && attachment.data)) {
              _context8.next = 7;
              break;
            }
            objectURL = URL.createObjectURL(new Blob([Buffer.from(attachment.data)], {
              type: attachment.mimeType
            }));
            return _context8.abrupt("return", objectURL);
          case 7:
            _context8.next = 12;
            break;
          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            console.error("Failed to load and render attachment:", _context8.t0);
          case 12:
            return _context8.abrupt("return", null);
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee7, null, [[0, 9]]);
    }))).apply(this, arguments);
  };
  (0, _react.useEffect)(scrollToLatestMessage, [messages]);
  (0, _react.useEffect)(function () {
    var _ref9;
    var fetchImageSources = function fetchImageSources() {
      return (_ref9 = _ref9 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var newImageSources, _iterator2, _step2, message;
        return _regeneratorRuntime().wrap(function _callee8$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              newImageSources = {};
              _iterator2 = _createForOfIteratorHelper(messages);
              _context9.prev = 2;
              _iterator2.s();
            case 4:
              if ((_step2 = _iterator2.n()).done) {
                _context9.next = 12;
                break;
              }
              message = _step2.value;
              if (!message.contentType.sameAs(_contentTypeRemoteAttachment.ContentTypeRemoteAttachment)) {
                _context9.next = 10;
                break;
              }
              _context9.next = 9;
              return getImageSrcFromMessage(message, client);
            case 9:
              newImageSources[message.id] = _context9.sent;
            case 10:
              _context9.next = 4;
              break;
            case 12:
              _context9.next = 17;
              break;
            case 14:
              _context9.prev = 14;
              _context9.t0 = _context9["catch"](2);
              _iterator2.e(_context9.t0);
            case 17:
              _context9.prev = 17;
              _iterator2.f();
              return _context9.finish(17);
            case 20:
              setImageSources(newImageSources);
            case 21:
            case "end":
              return _context9.stop();
          }
        }, _callee8, null, [[2, 14, 17, 20]]);
      }))).apply(this, arguments);
    };
    fetchImageSources();
  }, [messages, client]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "messages"
  }, isLoading ? /*#__PURE__*/_react.default.createElement("small", {
    className: "loading"
  }, "Loading messages...") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "messages-list"
  }, messages.map(function (message) {
    return /*#__PURE__*/_react.default.createElement(_MessageItem.default, {
      key: message.id || message.content,
      message: message,
      imgSrc: imageSources[message.id],
      senderAddress: message.senderAddress,
      client: client,
      onReply: handleReply,
      onReaction: handleReaction
    });
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: messagesEndRef
  })), /*#__PURE__*/_react.default.createElement(_MessageInput.MessageInput, {
    isLoadingUpload: isLoadingUpload,
    loadingText: loadingText,
    onSendMessage: handleSendMessage,
    onFileUpload: handleFileUpload
  })));
};
exports.MessageContainer = MessageContainer;