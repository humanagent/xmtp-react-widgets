"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationContainer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MessageContainer = require("./MessageContainer");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(r) { var n = this.s.return; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, throw: function _throw(r) { var n = this.s.return; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); } // Import MessageContainer
var ConversationContainer = function ConversationContainer(_ref) {
  var _ref3, _ref4, _ref5;
  var client = _ref.client,
    selectedConversation = _ref.selectedConversation,
    setSelectedConversation = _ref.setSelectedConversation;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    peerAddress = _useState4[0],
    setPeerAddress = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loadingResolve = _useState10[0],
    setLoadingResolve = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    canMessage = _useState12[0],
    setCanMessage = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    conversations = _useState14[0],
    setConversations = _useState14[1];
  var isValidEthereumAddress = function isValidEthereumAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };
  (0, _react.useEffect)(function () {
    var _ref2;
    var isMounted = true; // This flag is used to prevent state updates on an unmounted component
    var stream; // Define stream here

    var fetchAndStreamConversations = function fetchAndStreamConversations() {
      return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var allConversations, sortedConversations, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Fetch the conversations
              setLoading(true);
              _context2.next = 3;
              return client.conversations.list();
            case 3:
              allConversations = _context2.sent;
              sortedConversations = allConversations.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              if (isMounted) {
                setConversations(sortedConversations);
              }
              setLoading(false);

              // Start the stream
              _context2.next = 9;
              return client.conversations.stream();
            case 9:
              stream = _context2.sent;
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context2.prev = 12;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var conversation;
                return _regeneratorRuntime().wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      conversation = _step.value;
                      console.log("New conversation started with ".concat(conversation.peerAddress));
                      if (isMounted) {
                        setConversations(function (prevConversations) {
                          var newConversations = [].concat(_toConsumableArray(prevConversations), [conversation]);
                          return newConversations.sort(function (a, b) {
                            return new Date(b.createdAt) - new Date(a.createdAt);
                          });
                        });
                      }
                      return _context.abrupt("return", 1);
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _loop);
              });
              _iterator = _asyncIterator(stream);
            case 15:
              _context2.next = 17;
              return _iterator.next();
            case 17:
              if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                _context2.next = 24;
                break;
              }
              return _context2.delegateYield(_loop(), "t0", 19);
            case 19:
              if (!_context2.t0) {
                _context2.next = 21;
                break;
              }
              return _context2.abrupt("break", 24);
            case 21:
              _iteratorAbruptCompletion = false;
              _context2.next = 15;
              break;
            case 24:
              _context2.next = 30;
              break;
            case 26:
              _context2.prev = 26;
              _context2.t1 = _context2["catch"](12);
              _didIteratorError = true;
              _iteratorError = _context2.t1;
            case 30:
              _context2.prev = 30;
              _context2.prev = 31;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context2.next = 35;
                break;
              }
              _context2.next = 35;
              return _iterator.return();
            case 35:
              _context2.prev = 35;
              if (!_didIteratorError) {
                _context2.next = 38;
                break;
              }
              throw _iteratorError;
            case 38:
              return _context2.finish(35);
            case 39:
              return _context2.finish(30);
            case 40:
            case "end":
              return _context2.stop();
          }
        }, _callee, null, [[12, 26, 30, 40], [31,, 35, 39]]);
      }))).apply(this, arguments);
    };
    fetchAndStreamConversations();
    return function () {
      isMounted = false; // Prevent state updates after the component has unmounted
      if (stream) {
        stream.return(); // End the stream when the component unmounts
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount

  var filteredConversations = conversations.filter(function (conversation) {
    return (conversation === null || conversation === void 0 ? void 0 : conversation.peerAddress.toLowerCase().includes(searchTerm.toLowerCase())) && (conversation === null || conversation === void 0 ? void 0 : conversation.peerAddress) !== client.address;
  });
  var selectConversation = function selectConversation(_x) {
    return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(conversation) {
      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setSelectedConversation(conversation);
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee2);
    }))).apply(this, arguments);
  };
  var getRelativeTimeLabel = function getRelativeTimeLabel(dateString) {
    var date = new Date(dateString);
    var now = new Date();
    var diff = now.getTime() - date.getTime();
    var diffSeconds = Math.floor(diff / 1000);
    var diffMinutes = Math.floor(diff / 1000 / 60);
    var diffHours = Math.floor(diff / 1000 / 60 / 60);
    var diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    var diffWeeks = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);
    if (diffSeconds < 60) {
      return "now";
    } else if (diffMinutes < 60) {
      return "".concat(diffMinutes, " minute").concat(diffMinutes > 1 ? "s" : "", " ago");
    } else if (diffHours < 24) {
      return "".concat(diffHours, " hour").concat(diffHours > 1 ? "s" : "", " ago");
    } else if (diffDays < 7) {
      return "".concat(diffDays, " day").concat(diffDays > 1 ? "s" : "", " ago");
    } else {
      return "".concat(diffWeeks, " week").concat(diffWeeks > 1 ? "s" : "", " ago");
    }
  };
  var handleSearchChange = function handleSearchChange(_x2) {
    return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var addressInput, config, response, resolvedAddress;
      return _regeneratorRuntime().wrap(function _callee3$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setSearchTerm(e.target.value);
            addressInput = e.target.value; // Check if it's already a valid Ethereum address first
            if (!isValidEthereumAddress(addressInput)) {
              _context4.next = 5;
              break;
            }
            processEthereumAddress(addressInput);
            return _context4.abrupt("return");
          case 5:
            setLoadingResolve(true); // Set loading to true here
            _context4.prev = 6;
            config = {
              method: "get",
              maxBodyLength: Infinity,
              url: "https://api.everyname.xyz/forward?domain=".concat(addressInput),
              headers: {
                Accept: "application/json",
                "api-key": process.env.REACT_APP_EVERYNAME_KEY
              }
            };
            _context4.next = 10;
            return _axios.default.request(config);
          case 10:
            response = _context4.sent;
            resolvedAddress = response.data.address; // Assuming the API returns the address with key "address"
            if (resolvedAddress && isValidEthereumAddress(resolvedAddress)) {
              processEthereumAddress(resolvedAddress);
              setSearchTerm(resolvedAddress); // <-- Add this line
            } else {
              setMessage("Invalid Ethereum address");
              setPeerAddress(null);
              setCanMessage(false);
            }
            _context4.next = 19;
            break;
          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](6);
            console.log(_context4.t0);
            setMessage("Error resolving address");
          case 19:
            _context4.prev = 19;
            setLoadingResolve(false); // Set loading to false whether it's successful or there's an error
            return _context4.finish(19);
          case 22:
          case "end":
            return _context4.stop();
        }
      }, _callee3, null, [[6, 15, 19, 22]]);
    }))).apply(this, arguments);
  };
  var processEthereumAddress = function processEthereumAddress(_x3) {
    return (_ref5 = _ref5 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(address) {
      var canMessageStatus;
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setPeerAddress(address);
            if (!(address === client.address)) {
              _context5.next = 6;
              break;
            }
            setMessage("No self messaging allowed");
            setCanMessage(false);
            _context5.next = 10;
            break;
          case 6:
            _context5.next = 8;
            return client === null || client === void 0 ? void 0 : client.canMessage(address);
          case 8:
            canMessageStatus = _context5.sent;
            if (canMessageStatus) {
              setPeerAddress(address);
              setCanMessage(true);
              setMessage("Address is on the network ✅");
            } else {
              setCanMessage(false);
              setMessage("Address is not on the network ❌");
            }
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee4);
    }))).apply(this, arguments);
  };
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "conversations"
  }, !selectedConversation && /*#__PURE__*/_react.default.createElement("ul", {
    className: "conversation-list"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Enter a 0x wallet, ENS, or UNS address",
    className: "peer-address-input",
    value: searchTerm,
    onChange: handleSearchChange
  }), loadingResolve && searchTerm && /*#__PURE__*/_react.default.createElement("small", null, "Resolving address..."), " ", filteredConversations.length > 0 ? filteredConversations.map(function (conversation, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      onClick: function onClick() {
        selectConversation(conversation);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "conversation-details"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, conversation.peerAddress.substring(0, 6) + "..." + conversation.peerAddress.substring(conversation.peerAddress.length - 4)), /*#__PURE__*/_react.default.createElement("span", {
      className: "message-preview"
    }, "...")), /*#__PURE__*/_react.default.createElement("div", {
      className: "conversation-timestamp"
    }, getRelativeTimeLabel(conversation.createdAt)));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message && /*#__PURE__*/_react.default.createElement("small", null, message), peerAddress && canMessage && /*#__PURE__*/_react.default.createElement("button", {
    className: "create-new-button",
    onClick: function onClick() {
      setSelectedConversation({
        messages: []
      });
    }
  }, "Create new conversation"))), selectedConversation && /*#__PURE__*/_react.default.createElement(_MessageContainer.MessageContainer, {
    client: client,
    conversation: selectedConversation,
    searchTerm: searchTerm,
    selectConversation: selectConversation
  }));
};
exports.ConversationContainer = ConversationContainer;