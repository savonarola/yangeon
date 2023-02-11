(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/phoenix/priv/static/phoenix.js
  var require_phoenix = __commonJS({
    "node_modules/phoenix/priv/static/phoenix.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Phoenix = t() : e.Phoenix = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(i) {
            if (t[i])
              return t[i].exports;
            var o = t[i] = { i, l: false, exports: {} };
            return e[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var i = /* @__PURE__ */ Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var o in e2)
                n.d(i, o, function(t3) {
                  return e2[t3];
                }.bind(null, o));
            return i;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 0);
        }([function(e, t, n) {
          (function(t2) {
            e.exports = t2.Phoenix = n(2);
          }).call(this, n(1));
        }, function(e, t) {
          var n;
          n = function() {
            return this;
          }();
          try {
            n = n || new Function("return this")();
          } catch (e2) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          "use strict";
          function i(e2) {
            return function(e3) {
              if (Array.isArray(e3))
                return a(e3);
            }(e2) || function(e3) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
                return Array.from(e3);
            }(e2) || s(e2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function o(e2) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          function r(e2, t2) {
            return function(e3) {
              if (Array.isArray(e3))
                return e3;
            }(e2) || function(e3, t3) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e3)))
                return;
              var n2 = [], i2 = true, o2 = false, r2 = void 0;
              try {
                for (var s2, a2 = e3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (n2.push(s2.value), !t3 || n2.length !== t3); i2 = true)
                  ;
              } catch (e4) {
                o2 = true, r2 = e4;
              } finally {
                try {
                  i2 || null == a2.return || a2.return();
                } finally {
                  if (o2)
                    throw r2;
                }
              }
              return n2;
            }(e2, t2) || s(e2, t2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function s(e2, t2) {
            if (e2) {
              if ("string" == typeof e2)
                return a(e2, t2);
              var n2 = Object.prototype.toString.call(e2).slice(8, -1);
              return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(n2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a(e2, t2) : void 0;
            }
          }
          function a(e2, t2) {
            (null == t2 || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
              i2[n2] = e2[n2];
            return i2;
          }
          function c(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function h(e2, t2, n2) {
            return t2 && u(e2.prototype, t2), n2 && u(e2, n2), e2;
          }
          n.r(t), n.d(t, "Channel", function() {
            return A;
          }), n.d(t, "Serializer", function() {
            return M;
          }), n.d(t, "Socket", function() {
            return J;
          }), n.d(t, "LongPoll", function() {
            return H;
          }), n.d(t, "Ajax", function() {
            return D;
          }), n.d(t, "Presence", function() {
            return B;
          });
          var l = "undefined" != typeof self ? self : null, f = "undefined" != typeof window ? window : null, d = l || f || void 0, p = 0, v = 1, y = 2, m = 3, g = "closed", k = "errored", b = "joined", j = "joining", C = "leaving", R = "phx_close", S = "phx_error", T = "phx_join", w = "phx_reply", E = "phx_leave", x = [R, S, T, w, E], O = "longpoll", P = "websocket", L = function(e2) {
            if ("function" == typeof e2)
              return e2;
            return function() {
              return e2;
            };
          }, _ = function() {
            function e2(t2, n2, i2, o2) {
              c(this, e2), this.channel = t2, this.event = n2, this.payload = i2 || function() {
                return {};
              }, this.receivedResp = null, this.timeout = o2, this.timeoutTimer = null, this.recHooks = [], this.sent = false;
            }
            return h(e2, [{ key: "resend", value: function(e3) {
              this.timeout = e3, this.reset(), this.send();
            } }, { key: "send", value: function() {
              this.hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() }));
            } }, { key: "receive", value: function(e3, t2) {
              return this.hasReceived(e3) && t2(this.receivedResp.response), this.recHooks.push({ status: e3, callback: t2 }), this;
            } }, { key: "reset", value: function() {
              this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
            } }, { key: "matchReceive", value: function(e3) {
              var t2 = e3.status, n2 = e3.response;
              e3.ref;
              this.recHooks.filter(function(e4) {
                return e4.status === t2;
              }).forEach(function(e4) {
                return e4.callback(n2);
              });
            } }, { key: "cancelRefEvent", value: function() {
              this.refEvent && this.channel.off(this.refEvent);
            } }, { key: "cancelTimeout", value: function() {
              clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
            } }, { key: "startTimeout", value: function() {
              var e3 = this;
              this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function(t2) {
                e3.cancelRefEvent(), e3.cancelTimeout(), e3.receivedResp = t2, e3.matchReceive(t2);
              }), this.timeoutTimer = setTimeout(function() {
                e3.trigger("timeout", {});
              }, this.timeout);
            } }, { key: "hasReceived", value: function(e3) {
              return this.receivedResp && this.receivedResp.status === e3;
            } }, { key: "trigger", value: function(e3, t2) {
              this.channel.trigger(this.refEvent, { status: e3, response: t2 });
            } }]), e2;
          }(), A = function() {
            function e2(t2, n2, i2) {
              var o2 = this;
              c(this, e2), this.state = g, this.topic = t2, this.params = L(n2 || {}), this.socket = i2, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new _(this, T, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new I(function() {
                o2.socket.isConnected() && o2.rejoin();
              }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function() {
                return o2.rejoinTimer.reset();
              })), this.stateChangeRefs.push(this.socket.onOpen(function() {
                o2.rejoinTimer.reset(), o2.isErrored() && o2.rejoin();
              })), this.joinPush.receive("ok", function() {
                o2.state = b, o2.rejoinTimer.reset(), o2.pushBuffer.forEach(function(e3) {
                  return e3.send();
                }), o2.pushBuffer = [];
              }), this.joinPush.receive("error", function() {
                o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.onClose(function() {
                o2.rejoinTimer.reset(), o2.socket.hasLogger() && o2.socket.log("channel", "close ".concat(o2.topic, " ").concat(o2.joinRef())), o2.state = g, o2.socket.remove(o2);
              }), this.onError(function(e3) {
                o2.socket.hasLogger() && o2.socket.log("channel", "error ".concat(o2.topic), e3), o2.isJoining() && o2.joinPush.reset(), o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.joinPush.receive("timeout", function() {
                o2.socket.hasLogger() && o2.socket.log("channel", "timeout ".concat(o2.topic, " (").concat(o2.joinRef(), ")"), o2.joinPush.timeout), new _(o2, E, L({}), o2.timeout).send(), o2.state = k, o2.joinPush.reset(), o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.on(w, function(e3, t3) {
                o2.trigger(o2.replyEventName(t3), e3);
              });
            }
            return h(e2, [{ key: "join", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
              if (this.joinedOnce)
                throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
              return this.timeout = e3, this.joinedOnce = true, this.rejoin(), this.joinPush;
            } }, { key: "onClose", value: function(e3) {
              this.on(R, e3);
            } }, { key: "onError", value: function(e3) {
              return this.on(S, function(t2) {
                return e3(t2);
              });
            } }, { key: "on", value: function(e3, t2) {
              var n2 = this.bindingRef++;
              return this.bindings.push({ event: e3, ref: n2, callback: t2 }), n2;
            } }, { key: "off", value: function(e3, t2) {
              this.bindings = this.bindings.filter(function(n2) {
                return !(n2.event === e3 && (void 0 === t2 || t2 === n2.ref));
              });
            } }, { key: "canPush", value: function() {
              return this.socket.isConnected() && this.isJoined();
            } }, { key: "push", value: function(e3, t2) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout;
              if (!this.joinedOnce)
                throw new Error("tried to push '".concat(e3, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
              var i2 = new _(this, e3, function() {
                return t2;
              }, n2);
              return this.canPush() ? i2.send() : (i2.startTimeout(), this.pushBuffer.push(i2)), i2;
            } }, { key: "leave", value: function() {
              var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
              this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C;
              var n2 = function() {
                e3.socket.hasLogger() && e3.socket.log("channel", "leave ".concat(e3.topic)), e3.trigger(R, "leave");
              }, i2 = new _(this, E, L({}), t2);
              return i2.receive("ok", function() {
                return n2();
              }).receive("timeout", function() {
                return n2();
              }), i2.send(), this.canPush() || i2.trigger("ok", {}), i2;
            } }, { key: "onMessage", value: function(e3, t2, n2) {
              return t2;
            } }, { key: "isLifecycleEvent", value: function(e3) {
              return x.indexOf(e3) >= 0;
            } }, { key: "isMember", value: function(e3, t2, n2, i2) {
              return this.topic === e3 && (!i2 || i2 === this.joinRef() || !this.isLifecycleEvent(t2) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: e3, event: t2, payload: n2, joinRef: i2 }), false));
            } }, { key: "joinRef", value: function() {
              return this.joinPush.ref;
            } }, { key: "rejoin", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
              this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e3));
            } }, { key: "trigger", value: function(e3, t2, n2, i2) {
              var o2 = this.onMessage(e3, t2, n2, i2);
              if (t2 && !o2)
                throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
              for (var r2 = this.bindings.filter(function(t3) {
                return t3.event === e3;
              }), s2 = 0; s2 < r2.length; s2++) {
                r2[s2].callback(o2, n2, i2 || this.joinRef());
              }
            } }, { key: "replyEventName", value: function(e3) {
              return "chan_reply_".concat(e3);
            } }, { key: "isClosed", value: function() {
              return this.state === g;
            } }, { key: "isErrored", value: function() {
              return this.state === k;
            } }, { key: "isJoined", value: function() {
              return this.state === b;
            } }, { key: "isJoining", value: function() {
              return this.state === j;
            } }, { key: "isLeaving", value: function() {
              return this.state === C;
            } }]), e2;
          }(), M = { encode: function(e2, t2) {
            var n2 = [e2.join_ref, e2.ref, e2.topic, e2.event, e2.payload];
            return t2(JSON.stringify(n2));
          }, decode: function(e2, t2) {
            var n2 = r(JSON.parse(e2), 5);
            return t2({ join_ref: n2[0], ref: n2[1], topic: n2[2], event: n2[3], payload: n2[4] });
          } }, J = function() {
            function e2(t2) {
              var n2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              c(this, e2), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i2.timeout || 1e4, this.transport = i2.transport || d.WebSocket || H, this.defaultEncoder = M.encode, this.defaultDecoder = M.decode, this.closeWasClean = false, this.unloaded = false, this.binaryType = i2.binaryType || "arraybuffer", this.transport !== H ? (this.encode = i2.encode || this.defaultEncoder, this.decode = i2.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("unload", function(e3) {
                n2.conn && (n2.unloaded = true, n2.abnormalClose("unloaded"));
              }), this.heartbeatIntervalMs = i2.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(e3) {
                return i2.rejoinAfterMs ? i2.rejoinAfterMs(e3) : [1e3, 2e3, 5e3][e3 - 1] || 1e4;
              }, this.reconnectAfterMs = function(e3) {
                return n2.unloaded ? 100 : i2.reconnectAfterMs ? i2.reconnectAfterMs(e3) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e3 - 1] || 5e3;
              }, this.logger = i2.logger || null, this.longpollerTimeout = i2.longpollerTimeout || 2e4, this.params = L(i2.params || {}), this.endPoint = "".concat(t2, "/").concat(P), this.vsn = i2.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new I(function() {
                n2.teardown(function() {
                  return n2.connect();
                });
              }, this.reconnectAfterMs);
            }
            return h(e2, [{ key: "protocol", value: function() {
              return location.protocol.match(/^https/) ? "wss" : "ws";
            } }, { key: "endPointURL", value: function() {
              var e3 = D.appendParams(D.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
              return "/" !== e3.charAt(0) ? e3 : "/" === e3.charAt(1) ? "".concat(this.protocol(), ":").concat(e3) : "".concat(this.protocol(), "://").concat(location.host).concat(e3);
            } }, { key: "disconnect", value: function(e3, t2, n2) {
              this.closeWasClean = true, this.reconnectTimer.reset(), this.teardown(e3, t2, n2);
            } }, { key: "connect", value: function(e3) {
              var t2 = this;
              e3 && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = L(e3)), this.conn || (this.closeWasClean = false, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
                return t2.onConnOpen();
              }, this.conn.onerror = function(e4) {
                return t2.onConnError(e4);
              }, this.conn.onmessage = function(e4) {
                return t2.onConnMessage(e4);
              }, this.conn.onclose = function(e4) {
                return t2.onConnClose(e4);
              });
            } }, { key: "log", value: function(e3, t2, n2) {
              this.logger(e3, t2, n2);
            } }, { key: "hasLogger", value: function() {
              return null !== this.logger;
            } }, { key: "onOpen", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.open.push([t2, e3]), t2;
            } }, { key: "onClose", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.close.push([t2, e3]), t2;
            } }, { key: "onError", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.error.push([t2, e3]), t2;
            } }, { key: "onMessage", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.message.push([t2, e3]), t2;
            } }, { key: "onConnOpen", value: function() {
              this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = false, this.closeWasClean = false, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function(e3) {
                return (0, r(e3, 2)[1])();
              });
            } }, { key: "resetHeartbeat", value: function() {
              var e3 = this;
              this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function() {
                return e3.sendHeartbeat();
              }, this.heartbeatIntervalMs));
            } }, { key: "teardown", value: function(e3, t2, n2) {
              var i2 = this;
              if (!this.conn)
                return e3 && e3();
              this.waitForBufferDone(function() {
                i2.conn && (t2 ? i2.conn.close(t2, n2 || "") : i2.conn.close()), i2.waitForSocketClosed(function() {
                  i2.conn && (i2.conn.onclose = function() {
                  }, i2.conn = null), e3 && e3();
                });
              });
            } }, { key: "waitForBufferDone", value: function(e3) {
              var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
              5 === n2 || !this.conn || this.conn.bufferedAmount && 0 === this.conn.bufferedAmount ? e3() : setTimeout(function() {
                t2.waitForBufferDone(e3, n2 + 1);
              }, 150 * n2);
            } }, { key: "waitForSocketClosed", value: function(e3) {
              var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
              5 !== n2 && this.conn && this.conn.readyState !== m ? setTimeout(function() {
                t2.waitForSocketClosed(e3, n2 + 1);
              }, 150 * n2) : e3();
            } }, { key: "onConnClose", value: function(e3) {
              this.hasLogger() && this.log("transport", "close", e3), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function(t2) {
                return (0, r(t2, 2)[1])(e3);
              });
            } }, { key: "onConnError", value: function(e3) {
              this.hasLogger() && this.log("transport", e3), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function(t2) {
                return (0, r(t2, 2)[1])(e3);
              });
            } }, { key: "triggerChanError", value: function() {
              this.channels.forEach(function(e3) {
                e3.isErrored() || e3.isLeaving() || e3.isClosed() || e3.trigger(S);
              });
            } }, { key: "connectionState", value: function() {
              switch (this.conn && this.conn.readyState) {
                case p:
                  return "connecting";
                case v:
                  return "open";
                case y:
                  return "closing";
                default:
                  return "closed";
              }
            } }, { key: "isConnected", value: function() {
              return "open" === this.connectionState();
            } }, { key: "remove", value: function(e3) {
              this.off(e3.stateChangeRefs), this.channels = this.channels.filter(function(t2) {
                return t2.joinRef() !== e3.joinRef();
              });
            } }, { key: "off", value: function(e3) {
              for (var t2 in this.stateChangeCallbacks)
                this.stateChangeCallbacks[t2] = this.stateChangeCallbacks[t2].filter(function(t3) {
                  var n2 = r(t3, 1)[0];
                  return -1 === e3.indexOf(n2);
                });
            } }, { key: "channel", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = new A(e3, t2, this);
              return this.channels.push(n2), n2;
            } }, { key: "push", value: function(e3) {
              var t2 = this;
              if (this.hasLogger()) {
                var n2 = e3.topic, i2 = e3.event, o2 = e3.payload, r2 = e3.ref, s2 = e3.join_ref;
                this.log("push", "".concat(n2, " ").concat(i2, " (").concat(s2, ", ").concat(r2, ")"), o2);
              }
              this.isConnected() ? this.encode(e3, function(e4) {
                return t2.conn.send(e4);
              }) : this.sendBuffer.push(function() {
                return t2.encode(e3, function(e4) {
                  return t2.conn.send(e4);
                });
              });
            } }, { key: "makeRef", value: function() {
              var e3 = this.ref + 1;
              return e3 === this.ref ? this.ref = 0 : this.ref = e3, this.ref.toString();
            } }, { key: "sendHeartbeat", value: function() {
              if (this.isConnected()) {
                if (this.pendingHeartbeatRef)
                  return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
                this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
              }
            } }, { key: "abnormalClose", value: function(e3) {
              this.closeWasClean = false, this.conn.close(1e3, e3);
            } }, { key: "flushSendBuffer", value: function() {
              this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function(e3) {
                return e3();
              }), this.sendBuffer = []);
            } }, { key: "onConnMessage", value: function(e3) {
              var t2 = this;
              this.decode(e3.data, function(e4) {
                var n2 = e4.topic, i2 = e4.event, o2 = e4.payload, s2 = e4.ref, a2 = e4.join_ref;
                s2 && s2 === t2.pendingHeartbeatRef && (t2.pendingHeartbeatRef = null), t2.hasLogger() && t2.log("receive", "".concat(o2.status || "", " ").concat(n2, " ").concat(i2, " ").concat(s2 && "(" + s2 + ")" || ""), o2);
                for (var c2 = 0; c2 < t2.channels.length; c2++) {
                  var u2 = t2.channels[c2];
                  u2.isMember(n2, i2, o2, a2) && u2.trigger(i2, o2, s2, a2);
                }
                for (var h2 = 0; h2 < t2.stateChangeCallbacks.message.length; h2++) {
                  (0, r(t2.stateChangeCallbacks.message[h2], 2)[1])(e4);
                }
              });
            } }, { key: "leaveOpenTopic", value: function(e3) {
              var t2 = this.channels.find(function(t3) {
                return t3.topic === e3 && (t3.isJoined() || t3.isJoining());
              });
              t2 && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e3, '"')), t2.leave());
            } }]), e2;
          }(), H = function() {
            function e2(t2) {
              c(this, e2), this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.onopen = function() {
              }, this.onerror = function() {
              }, this.onmessage = function() {
              }, this.onclose = function() {
              }, this.pollEndpoint = this.normalizeEndpoint(t2), this.readyState = p, this.poll();
            }
            return h(e2, [{ key: "normalizeEndpoint", value: function(e3) {
              return e3.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + P), "$1/" + O);
            } }, { key: "endpointURL", value: function() {
              return D.appendParams(this.pollEndpoint, { token: this.token });
            } }, { key: "closeAndRetry", value: function() {
              this.close(), this.readyState = p;
            } }, { key: "ontimeout", value: function() {
              this.onerror("timeout"), this.closeAndRetry();
            } }, { key: "poll", value: function() {
              var e3 = this;
              this.readyState !== v && this.readyState !== p || D.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function(t2) {
                if (t2) {
                  var n2 = t2.status, i2 = t2.token, o2 = t2.messages;
                  e3.token = i2;
                } else
                  n2 = 0;
                switch (n2) {
                  case 200:
                    o2.forEach(function(t3) {
                      return e3.onmessage({ data: t3 });
                    }), e3.poll();
                    break;
                  case 204:
                    e3.poll();
                    break;
                  case 410:
                    e3.readyState = v, e3.onopen(), e3.poll();
                    break;
                  case 403:
                    e3.onerror(), e3.close();
                    break;
                  case 0:
                  case 500:
                    e3.onerror(), e3.closeAndRetry();
                    break;
                  default:
                    throw new Error("unhandled poll status ".concat(n2));
                }
              });
            } }, { key: "send", value: function(e3) {
              var t2 = this;
              D.request("POST", this.endpointURL(), "application/json", e3, this.timeout, this.onerror.bind(this, "timeout"), function(e4) {
                e4 && 200 === e4.status || (t2.onerror(e4 && e4.status), t2.closeAndRetry());
              });
            } }, { key: "close", value: function(e3, t2) {
              this.readyState = m, this.onclose();
            } }]), e2;
          }(), D = function() {
            function e2() {
              c(this, e2);
            }
            return h(e2, null, [{ key: "request", value: function(e3, t2, n2, i2, o2, r2, s2) {
              if (d.XDomainRequest) {
                var a2 = new XDomainRequest();
                this.xdomainRequest(a2, e3, t2, i2, o2, r2, s2);
              } else {
                var c2 = new d.XMLHttpRequest();
                this.xhrRequest(c2, e3, t2, n2, i2, o2, r2, s2);
              }
            } }, { key: "xdomainRequest", value: function(e3, t2, n2, i2, o2, r2, s2) {
              var a2 = this;
              e3.timeout = o2, e3.open(t2, n2), e3.onload = function() {
                var t3 = a2.parseJSON(e3.responseText);
                s2 && s2(t3);
              }, r2 && (e3.ontimeout = r2), e3.onprogress = function() {
              }, e3.send(i2);
            } }, { key: "xhrRequest", value: function(e3, t2, n2, i2, o2, r2, s2, a2) {
              var c2 = this;
              e3.open(t2, n2, true), e3.timeout = r2, e3.setRequestHeader("Content-Type", i2), e3.onerror = function() {
                a2 && a2(null);
              }, e3.onreadystatechange = function() {
                if (e3.readyState === c2.states.complete && a2) {
                  var t3 = c2.parseJSON(e3.responseText);
                  a2(t3);
                }
              }, s2 && (e3.ontimeout = s2), e3.send(o2);
            } }, { key: "parseJSON", value: function(e3) {
              if (!e3 || "" === e3)
                return null;
              try {
                return JSON.parse(e3);
              } catch (t2) {
                return console && console.log("failed to parse JSON response", e3), null;
              }
            } }, { key: "serialize", value: function(e3, t2) {
              var n2 = [];
              for (var i2 in e3)
                if (e3.hasOwnProperty(i2)) {
                  var r2 = t2 ? "".concat(t2, "[").concat(i2, "]") : i2, s2 = e3[i2];
                  "object" === o(s2) ? n2.push(this.serialize(s2, r2)) : n2.push(encodeURIComponent(r2) + "=" + encodeURIComponent(s2));
                }
              return n2.join("&");
            } }, { key: "appendParams", value: function(e3, t2) {
              if (0 === Object.keys(t2).length)
                return e3;
              var n2 = e3.match(/\?/) ? "&" : "?";
              return "".concat(e3).concat(n2).concat(this.serialize(t2));
            } }]), e2;
          }();
          D.states = { complete: 4 };
          var B = function() {
            function e2(t2) {
              var n2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              c(this, e2);
              var o2 = i2.events || { state: "presence_state", diff: "presence_diff" };
              this.state = {}, this.pendingDiffs = [], this.channel = t2, this.joinRef = null, this.caller = { onJoin: function() {
              }, onLeave: function() {
              }, onSync: function() {
              } }, this.channel.on(o2.state, function(t3) {
                var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
                n2.joinRef = n2.channel.joinRef(), n2.state = e2.syncState(n2.state, t3, o3, r2), n2.pendingDiffs.forEach(function(t4) {
                  n2.state = e2.syncDiff(n2.state, t4, o3, r2);
                }), n2.pendingDiffs = [], s2();
              }), this.channel.on(o2.diff, function(t3) {
                var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
                n2.inPendingSyncState() ? n2.pendingDiffs.push(t3) : (n2.state = e2.syncDiff(n2.state, t3, o3, r2), s2());
              });
            }
            return h(e2, [{ key: "onJoin", value: function(e3) {
              this.caller.onJoin = e3;
            } }, { key: "onLeave", value: function(e3) {
              this.caller.onLeave = e3;
            } }, { key: "onSync", value: function(e3) {
              this.caller.onSync = e3;
            } }, { key: "list", value: function(t2) {
              return e2.list(this.state, t2);
            } }, { key: "inPendingSyncState", value: function() {
              return !this.joinRef || this.joinRef !== this.channel.joinRef();
            } }], [{ key: "syncState", value: function(e3, t2, n2, i2) {
              var o2 = this, r2 = this.clone(e3), s2 = {}, a2 = {};
              return this.map(r2, function(e4, n3) {
                t2[e4] || (a2[e4] = n3);
              }), this.map(t2, function(e4, t3) {
                var n3 = r2[e4];
                if (n3) {
                  var i3 = t3.metas.map(function(e5) {
                    return e5.phx_ref;
                  }), c2 = n3.metas.map(function(e5) {
                    return e5.phx_ref;
                  }), u2 = t3.metas.filter(function(e5) {
                    return c2.indexOf(e5.phx_ref) < 0;
                  }), h2 = n3.metas.filter(function(e5) {
                    return i3.indexOf(e5.phx_ref) < 0;
                  });
                  u2.length > 0 && (s2[e4] = t3, s2[e4].metas = u2), h2.length > 0 && (a2[e4] = o2.clone(n3), a2[e4].metas = h2);
                } else
                  s2[e4] = t3;
              }), this.syncDiff(r2, { joins: s2, leaves: a2 }, n2, i2);
            } }, { key: "syncDiff", value: function(e3, t2, n2, o2) {
              var r2 = t2.joins, s2 = t2.leaves, a2 = this.clone(e3);
              return n2 || (n2 = function() {
              }), o2 || (o2 = function() {
              }), this.map(r2, function(e4, t3) {
                var o3 = a2[e4];
                if (a2[e4] = t3, o3) {
                  var r3, s3 = a2[e4].metas.map(function(e5) {
                    return e5.phx_ref;
                  }), c2 = o3.metas.filter(function(e5) {
                    return s3.indexOf(e5.phx_ref) < 0;
                  });
                  (r3 = a2[e4].metas).unshift.apply(r3, i(c2));
                }
                n2(e4, o3, t3);
              }), this.map(s2, function(e4, t3) {
                var n3 = a2[e4];
                if (n3) {
                  var i2 = t3.metas.map(function(e5) {
                    return e5.phx_ref;
                  });
                  n3.metas = n3.metas.filter(function(e5) {
                    return i2.indexOf(e5.phx_ref) < 0;
                  }), o2(e4, n3, t3), 0 === n3.metas.length && delete a2[e4];
                }
              }), a2;
            } }, { key: "list", value: function(e3, t2) {
              return t2 || (t2 = function(e4, t3) {
                return t3;
              }), this.map(e3, function(e4, n2) {
                return t2(e4, n2);
              });
            } }, { key: "map", value: function(e3, t2) {
              return Object.getOwnPropertyNames(e3).map(function(n2) {
                return t2(n2, e3[n2]);
              });
            } }, { key: "clone", value: function(e3) {
              return JSON.parse(JSON.stringify(e3));
            } }]), e2;
          }(), I = function() {
            function e2(t2, n2) {
              c(this, e2), this.callback = t2, this.timerCalc = n2, this.timer = null, this.tries = 0;
            }
            return h(e2, [{ key: "reset", value: function() {
              this.tries = 0, clearTimeout(this.timer);
            } }, { key: "scheduleTimeout", value: function() {
              var e3 = this;
              clearTimeout(this.timer), this.timer = setTimeout(function() {
                e3.tries = e3.tries + 1, e3.callback();
              }, this.timerCalc(this.tries + 1));
            } }]), e2;
          }();
        }]);
      });
    }
  });

  // node_modules/nprogress/nprogress.js
  var require_nprogress = __commonJS({
    "node_modules/nprogress/nprogress.js"(exports, module) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.NProgress = factory();
        }
      })(exports, function() {
        var NProgress2 = {};
        NProgress2.version = "0.2.0";
        var Settings = NProgress2.settings = {
          minimum: 0.08,
          easing: "ease",
          positionUsing: "",
          speed: 200,
          trickle: true,
          trickleRate: 0.02,
          trickleSpeed: 800,
          showSpinner: true,
          barSelector: '[role="bar"]',
          spinnerSelector: '[role="spinner"]',
          parent: "body",
          template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        NProgress2.configure = function(options) {
          var key, value;
          for (key in options) {
            value = options[key];
            if (value !== void 0 && options.hasOwnProperty(key))
              Settings[key] = value;
          }
          return this;
        };
        NProgress2.status = null;
        NProgress2.set = function(n) {
          var started = NProgress2.isStarted();
          n = clamp(n, Settings.minimum, 1);
          NProgress2.status = n === 1 ? null : n;
          var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
          progress.offsetWidth;
          queue(function(next) {
            if (Settings.positionUsing === "")
              Settings.positionUsing = NProgress2.getPositioningCSS();
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
              css(progress, {
                transition: "none",
                opacity: 1
              });
              progress.offsetWidth;
              setTimeout(function() {
                css(progress, {
                  transition: "all " + speed + "ms linear",
                  opacity: 0
                });
                setTimeout(function() {
                  NProgress2.remove();
                  next();
                }, speed);
              }, speed);
            } else {
              setTimeout(next, speed);
            }
          });
          return this;
        };
        NProgress2.isStarted = function() {
          return typeof NProgress2.status === "number";
        };
        NProgress2.start = function() {
          if (!NProgress2.status)
            NProgress2.set(0);
          var work = function() {
            setTimeout(function() {
              if (!NProgress2.status)
                return;
              NProgress2.trickle();
              work();
            }, Settings.trickleSpeed);
          };
          if (Settings.trickle)
            work();
          return this;
        };
        NProgress2.done = function(force) {
          if (!force && !NProgress2.status)
            return this;
          return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
        };
        NProgress2.inc = function(amount) {
          var n = NProgress2.status;
          if (!n) {
            return NProgress2.start();
          } else {
            if (typeof amount !== "number") {
              amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            }
            n = clamp(n + amount, 0, 0.994);
            return NProgress2.set(n);
          }
        };
        NProgress2.trickle = function() {
          return NProgress2.inc(Math.random() * Settings.trickleRate);
        };
        (function() {
          var initial = 0, current = 0;
          NProgress2.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") {
              return this;
            }
            if (current === 0) {
              NProgress2.start();
            }
            initial++;
            current++;
            $promise.always(function() {
              current--;
              if (current === 0) {
                initial = 0;
                NProgress2.done();
              } else {
                NProgress2.set((initial - current) / initial);
              }
            });
            return this;
          };
        })();
        NProgress2.render = function(fromStart) {
          if (NProgress2.isRendered())
            return document.getElementById("nprogress");
          addClass(document.documentElement, "nprogress-busy");
          var progress = document.createElement("div");
          progress.id = "nprogress";
          progress.innerHTML = Settings.template;
          var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
          css(bar, {
            transition: "all 0 linear",
            transform: "translate3d(" + perc + "%,0,0)"
          });
          if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
          }
          if (parent != document.body) {
            addClass(parent, "nprogress-custom-parent");
          }
          parent.appendChild(progress);
          return progress;
        };
        NProgress2.remove = function() {
          removeClass(document.documentElement, "nprogress-busy");
          removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
          var progress = document.getElementById("nprogress");
          progress && removeElement(progress);
        };
        NProgress2.isRendered = function() {
          return !!document.getElementById("nprogress");
        };
        NProgress2.getPositioningCSS = function() {
          var bodyStyle = document.body.style;
          var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
          if (vendorPrefix + "Perspective" in bodyStyle) {
            return "translate3d";
          } else if (vendorPrefix + "Transform" in bodyStyle) {
            return "translate";
          } else {
            return "margin";
          }
        };
        function clamp(n, min, max) {
          if (n < min)
            return min;
          if (n > max)
            return max;
          return n;
        }
        function toBarPerc(n) {
          return (-1 + n) * 100;
        }
        function barPositionCSS(n, speed, ease) {
          var barCSS;
          if (Settings.positionUsing === "translate3d") {
            barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
          } else if (Settings.positionUsing === "translate") {
            barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
          } else {
            barCSS = { "margin-left": toBarPerc(n) + "%" };
          }
          barCSS.transition = "all " + speed + "ms " + ease;
          return barCSS;
        }
        var queue = function() {
          var pending = [];
          function next() {
            var fn = pending.shift();
            if (fn) {
              fn(next);
            }
          }
          return function(fn) {
            pending.push(fn);
            if (pending.length == 1)
              next();
          };
        }();
        var css = function() {
          var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
          function camelCase(string) {
            return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
              return letter.toUpperCase();
            });
          }
          function getVendorProp(name) {
            var style = document.body.style;
            if (name in style)
              return name;
            var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
            while (i--) {
              vendorName = cssPrefixes[i] + capName;
              if (vendorName in style)
                return vendorName;
            }
            return name;
          }
          function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
          }
          function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
          }
          return function(element, properties) {
            var args = arguments, prop, value;
            if (args.length == 2) {
              for (prop in properties) {
                value = properties[prop];
                if (value !== void 0 && properties.hasOwnProperty(prop))
                  applyCss(element, prop, value);
              }
            } else {
              applyCss(element, args[1], args[2]);
            }
          };
        }();
        function hasClass(element, name) {
          var list = typeof element == "string" ? element : classList(element);
          return list.indexOf(" " + name + " ") >= 0;
        }
        function addClass(element, name) {
          var oldList = classList(element), newList = oldList + name;
          if (hasClass(oldList, name))
            return;
          element.className = newList.substring(1);
        }
        function removeClass(element, name) {
          var oldList = classList(element), newList;
          if (!hasClass(element, name))
            return;
          newList = oldList.replace(" " + name + " ", " ");
          element.className = newList.substring(1, newList.length - 1);
        }
        function classList(element) {
          return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
        }
        function removeElement(element) {
          element && element.parentNode && element.parentNode.removeChild(element);
        }
        return NProgress2;
      });
    }
  });

  // node_modules/phoenix_live_view/priv/static/phoenix_live_view.js
  var require_phoenix_live_view = __commonJS({
    "node_modules/phoenix_live_view/priv/static/phoenix_live_view.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.phoenix_live_view = t() : e.phoenix_live_view = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(i) {
            if (t[i])
              return t[i].exports;
            var r = t[i] = { i, l: false, exports: {} };
            return e[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { configurable: false, enumerable: true, get: i });
          }, n.r = function(e2) {
            Object.defineProperty(e2, "__esModule", { value: true });
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 2);
        }([function(e, t, n) {
          "use strict";
          n.r(t);
          var i, r = 11;
          var o = "http://www.w3.org/1999/xhtml", a = "undefined" == typeof document ? void 0 : document, u = !!a && "content" in a.createElement("template"), c = !!a && a.createRange && "createContextualFragment" in a.createRange();
          function s(e2) {
            return e2 = e2.trim(), u ? function(e3) {
              var t2 = a.createElement("template");
              return t2.innerHTML = e3, t2.content.childNodes[0];
            }(e2) : c ? function(e3) {
              return i || (i = a.createRange()).selectNode(a.body), i.createContextualFragment(e3).childNodes[0];
            }(e2) : function(e3) {
              var t2 = a.createElement("body");
              return t2.innerHTML = e3, t2.childNodes[0];
            }(e2);
          }
          function l(e2, t2) {
            var n2 = e2.nodeName, i2 = t2.nodeName;
            return n2 === i2 || !!(t2.actualize && n2.charCodeAt(0) < 91 && i2.charCodeAt(0) > 90) && n2 === i2.toUpperCase();
          }
          function d(e2, t2, n2) {
            e2[n2] !== t2[n2] && (e2[n2] = t2[n2], e2[n2] ? e2.setAttribute(n2, "") : e2.removeAttribute(n2));
          }
          var h = { OPTION: function(e2, t2) {
            var n2 = e2.parentNode;
            if (n2) {
              var i2 = n2.nodeName.toUpperCase();
              "OPTGROUP" === i2 && (i2 = (n2 = n2.parentNode) && n2.nodeName.toUpperCase()), "SELECT" !== i2 || n2.hasAttribute("multiple") || (e2.hasAttribute("selected") && !t2.selected && (e2.setAttribute("selected", "selected"), e2.removeAttribute("selected")), n2.selectedIndex = -1);
            }
            d(e2, t2, "selected");
          }, INPUT: function(e2, t2) {
            d(e2, t2, "checked"), d(e2, t2, "disabled"), e2.value !== t2.value && (e2.value = t2.value), t2.hasAttribute("value") || e2.removeAttribute("value");
          }, TEXTAREA: function(e2, t2) {
            var n2 = t2.value;
            e2.value !== n2 && (e2.value = n2);
            var i2 = e2.firstChild;
            if (i2) {
              var r2 = i2.nodeValue;
              if (r2 == n2 || !n2 && r2 == e2.placeholder)
                return;
              i2.nodeValue = n2;
            }
          }, SELECT: function(e2, t2) {
            if (!t2.hasAttribute("multiple")) {
              for (var n2, i2, r2 = -1, o2 = 0, a2 = e2.firstChild; a2; )
                if ("OPTGROUP" === (i2 = a2.nodeName && a2.nodeName.toUpperCase()))
                  a2 = (n2 = a2).firstChild;
                else {
                  if ("OPTION" === i2) {
                    if (a2.hasAttribute("selected")) {
                      r2 = o2;
                      break;
                    }
                    o2++;
                  }
                  !(a2 = a2.nextSibling) && n2 && (a2 = n2.nextSibling, n2 = null);
                }
              e2.selectedIndex = r2;
            }
          } }, f = 1, v = 11, p = 3, g = 8;
          function m() {
          }
          function y(e2) {
            if (e2)
              return e2.getAttribute && e2.getAttribute("id") || e2.id;
          }
          var k = function(e2) {
            return function(t2, n2, i2) {
              if (i2 || (i2 = {}), "string" == typeof n2)
                if ("#document" === t2.nodeName || "HTML" === t2.nodeName) {
                  var r2 = n2;
                  (n2 = a.createElement("html")).innerHTML = r2;
                } else
                  n2 = s(n2);
              var u2 = i2.getNodeKey || y, c2 = i2.onBeforeNodeAdded || m, d2 = i2.onNodeAdded || m, k2 = i2.onBeforeElUpdated || m, b2 = i2.onElUpdated || m, w2 = i2.onBeforeNodeDiscarded || m, x2 = i2.onNodeDiscarded || m, A2 = i2.onBeforeElChildrenUpdated || m, E2 = true === i2.childrenOnly, C2 = /* @__PURE__ */ Object.create(null), S2 = [];
              function P2(e3) {
                S2.push(e3);
              }
              function L2(e3, t3, n3) {
                false !== w2(e3) && (t3 && t3.removeChild(e3), x2(e3), function e4(t4, n4) {
                  if (t4.nodeType === f)
                    for (var i3 = t4.firstChild; i3; ) {
                      var r3 = void 0;
                      n4 && (r3 = u2(i3)) ? P2(r3) : (x2(i3), i3.firstChild && e4(i3, n4)), i3 = i3.nextSibling;
                    }
                }(e3, n3));
              }
              function T2(e3) {
                d2(e3);
                for (var t3 = e3.firstChild; t3; ) {
                  var n3 = t3.nextSibling, i3 = u2(t3);
                  if (i3) {
                    var r3 = C2[i3];
                    r3 && l(t3, r3) && (t3.parentNode.replaceChild(r3, t3), I2(r3, t3));
                  }
                  T2(t3), t3 = n3;
                }
              }
              function I2(t3, n3, i3) {
                var r3 = u2(n3);
                if (r3 && delete C2[r3], !i3) {
                  if (false === k2(t3, n3))
                    return;
                  if (e2(t3, n3), b2(t3), false === A2(t3, n3))
                    return;
                }
                "TEXTAREA" !== t3.nodeName ? function(e3, t4) {
                  var n4, i4, r4, o2, s2, d3 = t4.firstChild, v2 = e3.firstChild;
                  e:
                    for (; d3; ) {
                      for (o2 = d3.nextSibling, n4 = u2(d3); v2; ) {
                        if (r4 = v2.nextSibling, d3.isSameNode && d3.isSameNode(v2)) {
                          d3 = o2, v2 = r4;
                          continue e;
                        }
                        i4 = u2(v2);
                        var m2 = v2.nodeType, y2 = void 0;
                        if (m2 === d3.nodeType && (m2 === f ? (n4 ? n4 !== i4 && ((s2 = C2[n4]) ? r4 === s2 ? y2 = false : (e3.insertBefore(s2, v2), i4 ? P2(i4) : L2(v2, e3, true), v2 = s2) : y2 = false) : i4 && (y2 = false), (y2 = false !== y2 && l(v2, d3)) && I2(v2, d3)) : m2 !== p && m2 != g || (y2 = true, v2.nodeValue !== d3.nodeValue && (v2.nodeValue = d3.nodeValue))), y2) {
                          d3 = o2, v2 = r4;
                          continue e;
                        }
                        i4 ? P2(i4) : L2(v2, e3, true), v2 = r4;
                      }
                      if (n4 && (s2 = C2[n4]) && l(s2, d3))
                        e3.appendChild(s2), I2(s2, d3);
                      else {
                        var k3 = c2(d3);
                        false !== k3 && (k3 && (d3 = k3), d3.actualize && (d3 = d3.actualize(e3.ownerDocument || a)), e3.appendChild(d3), T2(d3));
                      }
                      d3 = o2, v2 = r4;
                    }
                  !function(e4, t5, n5) {
                    for (; t5; ) {
                      var i5 = t5.nextSibling;
                      (n5 = u2(t5)) ? P2(n5) : L2(t5, e4, true), t5 = i5;
                    }
                  }(e3, v2, i4);
                  var b3 = h[e3.nodeName];
                  b3 && b3(e3, t4);
                }(t3, n3) : h.TEXTAREA(t3, n3);
              }
              !function e3(t3) {
                if (t3.nodeType === f || t3.nodeType === v)
                  for (var n3 = t3.firstChild; n3; ) {
                    var i3 = u2(n3);
                    i3 && (C2[i3] = n3), e3(n3), n3 = n3.nextSibling;
                  }
              }(t2);
              var N2 = t2, D2 = N2.nodeType, R2 = n2.nodeType;
              if (!E2) {
                if (D2 === f)
                  R2 === f ? l(t2, n2) || (x2(t2), N2 = function(e3, t3) {
                    for (var n3 = e3.firstChild; n3; ) {
                      var i3 = n3.nextSibling;
                      t3.appendChild(n3), n3 = i3;
                    }
                    return t3;
                  }(t2, function(e3, t3) {
                    return t3 && t3 !== o ? a.createElementNS(t3, e3) : a.createElement(e3);
                  }(n2.nodeName, n2.namespaceURI))) : N2 = n2;
                else if (D2 === p || D2 === g) {
                  if (R2 === D2)
                    return N2.nodeValue !== n2.nodeValue && (N2.nodeValue = n2.nodeValue), N2;
                  N2 = n2;
                }
              }
              if (N2 === n2)
                x2(t2);
              else {
                if (n2.isSameNode && n2.isSameNode(N2))
                  return;
                if (I2(N2, n2, E2), S2)
                  for (var _2 = 0, O2 = S2.length; _2 < O2; _2++) {
                    var H2 = C2[S2[_2]];
                    H2 && L2(H2, H2.parentNode, false);
                  }
              }
              return !E2 && N2 !== t2 && t2.parentNode && (N2.actualize && (N2 = N2.actualize(t2.ownerDocument || a)), t2.parentNode.replaceChild(N2, t2)), N2;
            };
          }(function(e2, t2) {
            var n2, i2, o2, a2, u2 = t2.attributes;
            if (t2.nodeType !== r && e2.nodeType !== r) {
              for (var c2 = u2.length - 1; c2 >= 0; c2--)
                i2 = (n2 = u2[c2]).name, o2 = n2.namespaceURI, a2 = n2.value, o2 ? (i2 = n2.localName || i2, e2.getAttributeNS(o2, i2) !== a2 && ("xmlns" === n2.prefix && (i2 = n2.name), e2.setAttributeNS(o2, i2, a2))) : e2.getAttribute(i2) !== a2 && e2.setAttribute(i2, a2);
              for (var s2 = e2.attributes, l2 = s2.length - 1; l2 >= 0; l2--)
                i2 = (n2 = s2[l2]).name, (o2 = n2.namespaceURI) ? (i2 = n2.localName || i2, t2.hasAttributeNS(o2, i2) || e2.removeAttributeNS(o2, i2)) : t2.hasAttribute(i2) || e2.removeAttribute(i2);
            }
          });
          function b(e2) {
            return S(e2) || function(e3) {
              if (Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3))
                return Array.from(e3);
            }(e2) || C();
          }
          function w(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function A(e2, t2, n2) {
            return t2 && x(e2.prototype, t2), n2 && x(e2, n2), e2;
          }
          function E(e2, t2) {
            return S(e2) || function(e3, t3) {
              var n2 = [], i2 = true, r2 = false, o2 = void 0;
              try {
                for (var a2, u2 = e3[Symbol.iterator](); !(i2 = (a2 = u2.next()).done) && (n2.push(a2.value), !t3 || n2.length !== t3); i2 = true)
                  ;
              } catch (e4) {
                r2 = true, o2 = e4;
              } finally {
                try {
                  i2 || null == u2.return || u2.return();
                } finally {
                  if (r2)
                    throw o2;
                }
              }
              return n2;
            }(e2, t2) || C();
          }
          function C() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
          function S(e2) {
            if (Array.isArray(e2))
              return e2;
          }
          function P(e2) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          n.d(t, "debug", function() {
            return M;
          }), n.d(t, "Rendered", function() {
            return G;
          }), n.d(t, "LiveSocket", function() {
            return Y;
          }), n.d(t, "Browser", function() {
            return z;
          }), n.d(t, "DOM", function() {
            return $;
          }), n.d(t, "View", function() {
            return Z;
          });
          var L = [1e3, 3e3], T = "data-phx-view", I = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"], N = "data-phx-component", D = "data-phx-ref", R = "[".concat(T, "]"), _ = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"], O = ["checkbox", "radio"], H = 1, j = "phx-", B = { debounce: 300, throttle: 300 }, J = function(e2, t2) {
            return console.error && console.error(e2, t2);
          };
          var M = function(e2, t2, n2, i2) {
            e2.liveSocket.isDebugEnabled() && console.log("".concat(e2.id, " ").concat(t2, ": ").concat(n2, " - "), i2);
          }, F = function(e2) {
            return "function" == typeof e2 ? e2 : function() {
              return e2;
            };
          }, V = function(e2) {
            return JSON.parse(JSON.stringify(e2));
          }, U = function(e2, t2, n2) {
            do {
              if (e2.matches("[".concat(t2, "]")))
                return e2;
              e2 = e2.parentElement || e2.parentNode;
            } while (null !== e2 && 1 === e2.nodeType && !(n2 && n2.isSameNode(e2) || e2.matches(R)));
            return null;
          }, K = function(e2) {
            return null !== e2 && "object" === P(e2) && !(e2 instanceof Array);
          }, q = function(e2) {
            for (var t2 in e2)
              return false;
            return true;
          }, W = function(e2, t2) {
            return e2 && t2(e2);
          }, X = function(e2) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = new FormData(e2), i2 = new URLSearchParams(), r2 = true, o2 = false, a2 = void 0;
            try {
              for (var u2, c2 = n2.entries()[Symbol.iterator](); !(r2 = (u2 = c2.next()).done); r2 = true) {
                var s2 = E(u2.value, 2), l2 = s2[0], d2 = s2[1];
                i2.append(l2, d2);
              }
            } catch (e3) {
              o2 = true, a2 = e3;
            } finally {
              try {
                r2 || null == c2.return || c2.return();
              } finally {
                if (o2)
                  throw a2;
              }
            }
            for (var h2 in t2)
              i2.append(h2, t2[h2]);
            return i2.toString();
          }, G = function() {
            function e2(t2, n2) {
              w(this, e2), this.viewId = t2, this.replaceRendered(n2);
            }
            return A(e2, [{ key: "parentViewId", value: function() {
              return this.viewId;
            } }, { key: "toString", value: function(e3) {
              return this.recursiveToString(this.rendered, this.rendered.c, e3);
            } }, { key: "recursiveToString", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.c || {}, n2 = arguments.length > 2 ? arguments[2] : void 0, i2 = { buffer: "", components: t2, onlyCids: n2 = n2 ? new Set(n2) : null };
              return this.toOutputBuffer(e3, i2), i2.buffer;
            } }, { key: "componentCIDs", value: function(e3) {
              return Object.keys(e3.c || {}).map(function(e4) {
                return parseInt(e4);
              });
            } }, { key: "isComponentOnlyDiff", value: function(e3) {
              return !!e3.c && 0 === Object.keys(e3).filter(function(e4) {
                return "title" !== e4 && "c" !== e4;
              }).length;
            } }, { key: "mergeDiff", value: function(e3) {
              !e3.c && this.isNewFingerprint(e3) ? this.replaceRendered(e3) : this.recursiveMerge(this.rendered, e3);
            } }, { key: "recursiveMerge", value: function(e3, t2) {
              for (var n2 in t2) {
                var i2 = t2[n2], r2 = e3[n2];
                K(i2) && K(r2) ? (r2.d && !i2.d && delete r2.d, this.recursiveMerge(r2, i2)) : e3[n2] = i2;
              }
            } }, { key: "componentToString", value: function(e3) {
              return this.recursiveCIDToString(this.rendered.c, e3);
            } }, { key: "pruneCIDs", value: function(e3) {
              var t2 = this;
              e3.forEach(function(e4) {
                return delete t2.rendered.c[e4];
              });
            } }, { key: "get", value: function() {
              return this.rendered;
            } }, { key: "replaceRendered", value: function(e3) {
              this.rendered = e3, this.rendered.c = this.rendered.c || {};
            } }, { key: "isNewFingerprint", value: function() {
              return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).s;
            } }, { key: "toOutputBuffer", value: function(e3, t2) {
              if (e3.d)
                return this.comprehensionToBuffer(e3, t2);
              var n2 = e3.s;
              t2.buffer += n2[0];
              for (var i2 = 1; i2 < n2.length; i2++)
                this.dynamicToBuffer(e3[i2 - 1], t2), t2.buffer += n2[i2];
            } }, { key: "comprehensionToBuffer", value: function(e3, t2) {
              for (var n2 = e3.d, i2 = e3.s, r2 = 0; r2 < n2.length; r2++) {
                var o2 = n2[r2];
                t2.buffer += i2[0];
                for (var a2 = 1; a2 < i2.length; a2++)
                  this.dynamicToBuffer(o2[a2 - 1], t2), t2.buffer += i2[a2];
              }
            } }, { key: "dynamicToBuffer", value: function(e3, t2) {
              "number" == typeof e3 ? t2.buffer += this.recursiveCIDToString(t2.components, e3, t2.onlyCids) : K(e3) ? this.toOutputBuffer(e3, t2) : t2.buffer += e3;
            } }, { key: "recursiveCIDToString", value: function(e3, t2, n2) {
              var i2 = this, r2 = e3[t2] || J("no component for CID ".concat(t2), e3), o2 = document.createElement("template");
              o2.innerHTML = this.recursiveToString(r2, e3, n2);
              var a2 = o2.content, u2 = n2 && !n2.has(t2);
              return Array.from(a2.childNodes).forEach(function(e4, n3) {
                if (e4.nodeType === Node.ELEMENT_NODE)
                  e4.setAttribute(N, t2), e4.id || (e4.id = "".concat(i2.parentViewId(), "-").concat(t2, "-").concat(n3)), u2 && (e4.setAttribute("data-phx-skip", ""), e4.innerHTML = "");
                else if ("" !== e4.nodeValue.trim()) {
                  J("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(e4.nodeValue.trim(), '"\n\n') + "within:\n", o2.innerHTML.trim());
                  var r3 = document.createElement("span");
                  r3.innerText = e4.nodeValue, r3.setAttribute(N, t2), e4.replaceWith(r3);
                } else
                  e4.remove();
              }), o2.innerHTML;
            } }]), e2;
          }(), Y = function() {
            function e2(t2, n2) {
              var i2 = this, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (w(this, e2), this.unloaded = false, !n2 || "Object" === n2.constructor.name)
                throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
              this.socket = new n2(t2, r2), this.bindingPrefix = r2.bindingPrefix || j, this.opts = r2, this.params = F(r2.params || {}), this.viewLogger = r2.viewLogger, this.defaults = Object.assign(V(B), r2.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = false, this.main = null, this.linkRef = 0, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = V(window.location), this.hooks = r2.hooks || {}, this.loaderTimeout = r2.loaderTimeout || H, this.socket.onOpen(function() {
                i2.isUnloaded() && (i2.destroyAllViews(), i2.joinRootViews()), i2.unloaded = false;
              }), window.addEventListener("unload", function(e3) {
                i2.unloaded = true;
              });
            }
            return A(e2, [{ key: "isProfileEnabled", value: function() {
              return "true" === sessionStorage.getItem("phx:live-socket:profiling");
            } }, { key: "isDebugEnabled", value: function() {
              return "true" === sessionStorage.getItem("phx:live-socket:debug");
            } }, { key: "enableDebug", value: function() {
              sessionStorage.setItem("phx:live-socket:debug", "true");
            } }, { key: "enableProfiling", value: function() {
              sessionStorage.setItem("phx:live-socket:profiling", "true");
            } }, { key: "disableDebug", value: function() {
              sessionStorage.removeItem("phx:live-socket:debug");
            } }, { key: "disableProfiling", value: function() {
              sessionStorage.removeItem("phx:live-socket:profiling");
            } }, { key: "enableLatencySim", value: function(e3) {
              this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), sessionStorage.setItem("phx:live-socket:latency-sim", e3);
            } }, { key: "disableLatencySim", value: function() {
              sessionStorage.removeItem("phx:live-socket:latency-sim");
            } }, { key: "getLatencySim", value: function() {
              var e3 = sessionStorage.getItem("phx:live-socket:latency-sim");
              return e3 ? parseInt(e3) : null;
            } }, { key: "getSocket", value: function() {
              return this.socket;
            } }, { key: "connect", value: function() {
              var e3 = this, t2 = function() {
                e3.joinRootViews() && (e3.bindTopLevelEvents(), e3.socket.connect());
              };
              ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t2() : document.addEventListener("DOMContentLoaded", function() {
                return t2();
              });
            } }, { key: "disconnect", value: function() {
              this.socket.disconnect();
            } }, { key: "time", value: function(e3, t2) {
              if (!this.isProfileEnabled() || !console.time)
                return t2();
              console.time(e3);
              var n2 = t2();
              return console.timeEnd(e3), n2;
            } }, { key: "log", value: function(e3, t2, n2) {
              if (this.viewLogger) {
                var i2 = E(n2(), 2), r2 = i2[0], o2 = i2[1];
                this.viewLogger(e3, t2, r2, o2);
              } else if (this.isDebugEnabled()) {
                var a2 = E(n2(), 2), u2 = a2[0], c2 = a2[1];
                M(e3, t2, u2, c2);
              }
            } }, { key: "onChannel", value: function(e3, t2, n2) {
              var i2 = this;
              e3.on(t2, function(e4) {
                var t3 = i2.getLatencySim();
                t3 ? (console.log("simulating ".concat(t3, "ms of latency from server to client")), setTimeout(function() {
                  return n2(e4);
                }, t3)) : n2(e4);
              });
            } }, { key: "wrapPush", value: function(e3) {
              var t2 = this.getLatencySim();
              if (!t2)
                return e3();
              console.log("simulating ".concat(t2, "ms of latency from client to server"));
              var n2 = { receives: [], receive: function(e4, t3) {
                this.receives.push([e4, t3]);
              } };
              return setTimeout(function() {
                n2.receives.reduce(function(e4, t3) {
                  var n3 = E(t3, 2), i2 = n3[0], r2 = n3[1];
                  return e4.receive(i2, r2);
                }, e3());
              }, t2), n2;
            } }, { key: "reloadWithJitter", value: function(e3) {
              var t2 = this;
              this.disconnect();
              var n2 = L[0], i2 = L[1], r2 = Math.floor(Math.random() * (i2 - n2 + 1)) + n2, o2 = z.updateLocal(e3.name(), "consecutive-reloads", 0, function(e4) {
                return e4 + 1;
              });
              this.log(e3, "join", function() {
                return ["encountered ".concat(o2, " consecutive reloads")];
              }), o2 > 10 && (this.log(e3, "join", function() {
                return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")];
              }), r2 = 3e4), setTimeout(function() {
                t2.hasPendingLink() ? window.location = t2.pendingLink : window.location.reload();
              }, r2);
            } }, { key: "getHookCallbacks", value: function(e3) {
              return this.hooks[e3];
            } }, { key: "isUnloaded", value: function() {
              return this.unloaded;
            } }, { key: "isConnected", value: function() {
              return this.socket.isConnected();
            } }, { key: "getBindingPrefix", value: function() {
              return this.bindingPrefix;
            } }, { key: "binding", value: function(e3) {
              return "".concat(this.getBindingPrefix()).concat(e3);
            } }, { key: "channel", value: function(e3, t2) {
              return this.socket.channel(e3, t2);
            } }, { key: "joinRootViews", value: function() {
              var e3 = this, t2 = false;
              return $.all(document, "".concat(R, ":not([").concat("data-phx-parent-id", "])"), function(n2) {
                var i2 = e3.joinRootView(n2, e3.getHref());
                e3.root = e3.root || i2, n2.getAttribute("data-phx-main") && (e3.main = i2), t2 = true;
              }), t2;
            } }, { key: "redirect", value: function(e3, t2) {
              this.disconnect(), z.redirect(e3, t2);
            } }, { key: "replaceMain", value: function(e3, t2) {
              var n2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.setPendingLink(e3), o2 = this.main.el;
              this.main.destroy(), this.main.showLoader(this.loaderTimeout), z.fetchPage(e3, function(a2, u2) {
                if (200 !== a2)
                  return n2.redirect(e3);
                var c2 = document.createElement("template");
                c2.innerHTML = u2;
                var s2 = c2.content.childNodes[0];
                if (!s2 || !n2.isPhxView(s2))
                  return n2.redirect(e3);
                n2.joinRootView(s2, e3, t2, function(e4, t3) {
                  1 === t3 && (n2.commitPendingLink(r2) ? (o2.replaceWith(e4.el), n2.main = e4, i2 && i2()) : e4.destroy());
                });
              });
            } }, { key: "isPhxView", value: function(e3) {
              return e3.getAttribute && null !== e3.getAttribute(T);
            } }, { key: "joinRootView", value: function(e3, t2, n2, i2) {
              var r2 = new Z(e3, this, null, t2, n2);
              return this.roots[r2.id] = r2, r2.join(i2), r2;
            } }, { key: "owner", value: function(e3, t2) {
              var n2 = this, i2 = W(e3.closest(R), function(e4) {
                return n2.getViewByEl(e4);
              });
              i2 && t2(i2);
            } }, { key: "withinTargets", value: function(e3, t2, n2) {
              var i2 = this;
              if (/^(0|[1-9](\d?)+)$/.test(t2)) {
                var r2 = e3;
                if (!r2)
                  throw new Error("no phx-target's found matching @myself of ".concat(t2));
                this.owner(r2, function(e4) {
                  return n2(e4, r2);
                });
              } else {
                var o2 = Array.from(document.querySelectorAll(t2));
                if (0 === o2.length)
                  throw new Error(`no phx-target's found for selector "`.concat(t2, '"'));
                o2.forEach(function(e4) {
                  i2.owner(e4, function(t3) {
                    return n2(t3, e4);
                  });
                });
              }
            } }, { key: "withinOwners", value: function(e3, t2) {
              var n2 = e3.getAttribute(this.binding("target"));
              null === n2 ? this.owner(e3, function(n3) {
                return t2(n3, e3);
              }) : this.withinTargets(e3, n2, t2);
            } }, { key: "getViewByEl", value: function(e3) {
              var t2 = e3.getAttribute("data-phx-root-id");
              return this.getRootById(t2).getDescendentByEl(e3);
            } }, { key: "getRootById", value: function(e3) {
              return this.roots[e3];
            } }, { key: "onViewError", value: function(e3) {
              this.dropActiveElement(e3);
            } }, { key: "destroyAllViews", value: function() {
              for (var e3 in this.roots)
                this.roots[e3].destroy(), delete this.roots[e3];
            } }, { key: "destroyViewByEl", value: function(e3) {
              this.getRootById(e3.getAttribute("data-phx-root-id")).destroyDescendent(e3.id);
            } }, { key: "setActiveElement", value: function(e3) {
              var t2 = this;
              if (this.activeElement !== e3) {
                this.activeElement = e3;
                var n2 = function() {
                  e3 === t2.activeElement && (t2.activeElement = null), e3.removeEventListener("mouseup", t2), e3.removeEventListener("touchend", t2);
                };
                e3.addEventListener("mouseup", n2), e3.addEventListener("touchend", n2);
              }
            } }, { key: "getActiveElement", value: function() {
              return document.activeElement === document.body && this.activeElement || document.activeElement;
            } }, { key: "dropActiveElement", value: function(e3) {
              this.prevActive && e3.ownsElement(this.prevActive) && (this.prevActive = null);
            } }, { key: "restorePreviouslyActiveFocus", value: function() {
              this.prevActive && this.prevActive !== document.body && this.prevActive.focus();
            } }, { key: "blurActiveElement", value: function() {
              this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur();
            } }, { key: "bindTopLevelEvents", value: function() {
              var e3 = this;
              this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({ keyup: "keyup", keydown: "keydown" }, function(t2, n2, i2, r2, o2, a2, u2) {
                var c2 = r2.getAttribute(e3.binding("key"));
                c2 && c2.toLowerCase() !== t2.key.toLowerCase() || i2.pushKey(r2, o2, n2, a2, { altGraphKey: t2.altGraphKey, altKey: t2.altKey, code: t2.code, ctrlKey: t2.ctrlKey, key: t2.key, keyIdentifier: t2.keyIdentifier, keyLocation: t2.keyLocation, location: t2.location, metaKey: t2.metaKey, repeat: t2.repeat, shiftKey: t2.shiftKey });
              }), this.bind({ blur: "focusout", focus: "focusin" }, function(e4, t2, n2, i2, r2, o2, a2) {
                a2 || n2.pushEvent(t2, i2, r2, o2, { type: t2 });
              }), this.bind({ blur: "blur", focus: "focus" }, function(e4, t2, n2, i2, r2, o2, a2) {
                a2 && "window" !== !a2 && n2.pushEvent(t2, i2, r2, o2, { type: e4.type });
              });
            } }, { key: "setPendingLink", value: function(e3) {
              return this.linkRef++, this.pendingLink = e3, this.linkRef;
            } }, { key: "commitPendingLink", value: function(e3) {
              return this.linkRef === e3 && (this.href = this.pendingLink, this.pendingLink = null, true);
            } }, { key: "getHref", value: function() {
              return this.href;
            } }, { key: "hasPendingLink", value: function() {
              return !!this.pendingLink;
            } }, { key: "bind", value: function(e3, t2) {
              var n2 = this, i2 = function(i3) {
                var r3 = e3[i3];
                n2.on(r3, function(e4) {
                  var r4 = n2.binding(i3), o2 = n2.binding("window-".concat(i3)), a2 = e4.target.getAttribute && e4.target.getAttribute(r4);
                  a2 ? n2.debounce(e4.target, e4, function() {
                    n2.withinOwners(e4.target, function(n3, r5) {
                      t2(e4, i3, n3, e4.target, r5, a2, null);
                    });
                  }) : $.all(document, "[".concat(o2, "]"), function(r5) {
                    var a3 = r5.getAttribute(o2);
                    n2.debounce(r5, e4, function() {
                      n2.withinOwners(r5, function(n3, o3) {
                        t2(e4, i3, n3, r5, o3, a3, "window");
                      });
                    });
                  });
                });
              };
              for (var r2 in e3)
                i2(r2);
            } }, { key: "bindClicks", value: function() {
              var e3 = this;
              [true, false].forEach(function(t2) {
                var n2 = t2 ? e3.binding("capture-click") : e3.binding("click");
                window.addEventListener("click", function(i2) {
                  var r2 = null, o2 = (r2 = t2 ? i2.target.matches("[".concat(n2, "]")) ? i2.target : i2.target.querySelector("[".concat(n2, "]")) : U(i2.target, n2)) && r2.getAttribute(n2);
                  if (o2) {
                    "#" === r2.getAttribute("href") && i2.preventDefault();
                    var a2 = { altKey: i2.altKey, shiftKey: i2.shiftKey, ctrlKey: i2.ctrlKey, metaKey: i2.metaKey, x: i2.x || i2.clientX, y: i2.y || i2.clientY, pageX: i2.pageX, pageY: i2.pageY, screenX: i2.screenX, screenY: i2.screenY, offsetX: i2.offsetX, offsetY: i2.offsetY, detail: i2.detail || 1 };
                    e3.debounce(r2, i2, function() {
                      e3.withinOwners(r2, function(e4, t3) {
                        e4.pushEvent("click", r2, t3, o2, a2);
                      });
                    });
                  }
                }, t2);
              });
            } }, { key: "bindNav", value: function() {
              var e3 = this;
              z.canPushState() && (window.onpopstate = function(t2) {
                if (e3.registerNewLocation(window.location)) {
                  var n2 = t2.state || {}, i2 = n2.type, r2 = n2.id, o2 = n2.root, a2 = window.location.href;
                  e3.main.isConnected() && "patch" === i2 && r2 === e3.main.id ? e3.main.pushLinkPatch(a2, null) : e3.replaceMain(a2, null, function() {
                    o2 && e3.replaceRootHistory();
                  });
                }
              }, window.addEventListener("click", function(t2) {
                var n2 = U(t2.target, "data-phx-link"), i2 = n2 && n2.getAttribute("data-phx-link"), r2 = t2.metaKey || t2.ctrlKey || 1 === t2.button;
                if (i2 && e3.isConnected() && e3.main && !r2) {
                  var o2 = n2.href, a2 = n2.getAttribute("data-phx-link-state");
                  if (t2.preventDefault(), e3.pendingLink !== o2)
                    if ("patch" === i2)
                      e3.pushHistoryPatch(o2, a2, n2);
                    else {
                      if ("redirect" !== i2)
                        throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i2));
                      e3.historyRedirect(o2, a2);
                    }
                }
              }, false));
            } }, { key: "withPageLoading", value: function(e3, t2) {
              $.dispatchEvent(window, "phx:page-loading-start", e3);
              var n2 = function() {
                return $.dispatchEvent(window, "phx:page-loading-stop", e3);
              };
              return t2 ? t2(n2) : n2;
            } }, { key: "pushHistoryPatch", value: function(e3, t2, n2) {
              var i2 = this;
              this.withPageLoading({ to: e3, kind: "patch" }, function(r2) {
                i2.main.pushLinkPatch(e3, n2, function() {
                  i2.historyPatch(e3, t2), r2();
                });
              });
            } }, { key: "historyPatch", value: function(e3, t2) {
              z.pushState(t2, { type: "patch", id: this.main.id }, e3), this.registerNewLocation(window.location);
            } }, { key: "historyRedirect", value: function(e3, t2, n2) {
              var i2 = this;
              this.withPageLoading({ to: e3, kind: "redirect" }, function(r2) {
                i2.replaceMain(e3, n2, function() {
                  z.pushState(t2, { type: "redirect", id: i2.main.id }, e3), i2.registerNewLocation(window.location), r2();
                });
              });
            } }, { key: "replaceRootHistory", value: function() {
              z.pushState("replace", { root: true, type: "patch", id: this.main.id });
            } }, { key: "registerNewLocation", value: function(e3) {
              var t2 = this.currentLocation;
              return t2.pathname + t2.search !== e3.pathname + e3.search && (this.currentLocation = V(e3), true);
            } }, { key: "bindForms", value: function() {
              var e3 = this, t2 = 0;
              this.on("submit", function(t3) {
                var n3 = t3.target.getAttribute(e3.binding("submit"));
                n3 && (t3.preventDefault(), t3.target.disabled = true, e3.withinOwners(t3.target, function(e4, i3) {
                  return e4.submitForm(t3.target, i3, n3);
                }));
              }, false);
              for (var n2 = ["change", "input"], i2 = function() {
                var i3 = n2[r2];
                e3.on(i3, function(n3) {
                  var r3 = n3.target, o2 = r3.form && r3.form.getAttribute(e3.binding("change"));
                  if (o2 && ("number" !== r3.type || !r3.validity || !r3.validity.badInput)) {
                    var a2 = t2;
                    t2++;
                    var u2 = $.private(r3, "prev-iteration") || {}, c2 = u2.at, s2 = u2.type;
                    c2 === a2 - 1 && i3 !== s2 || ($.putPrivate(r3, "prev-iteration", { at: a2, type: i3 }), e3.debounce(r3, n3, function() {
                      e3.withinOwners(r3.form, function(t3, i4) {
                        $.isTextualInput(r3) ? $.putPrivate(r3, "phx-has-focused", true) : e3.setActiveElement(r3), t3.pushInput(r3, i4, o2, n3.target);
                      });
                    }));
                  }
                }, false);
              }, r2 = 0; r2 < n2.length; r2++)
                i2();
            } }, { key: "debounce", value: function(e3, t2, n2) {
              var i2 = this.binding("debounce"), r2 = this.binding("throttle"), o2 = this.defaults.debounce.toString(), a2 = this.defaults.throttle.toString();
              $.debounce(e3, t2, i2, o2, r2, a2, n2);
            } }, { key: "silenceEvents", value: function(e3) {
              this.silenced = true, e3(), this.silenced = false;
            } }, { key: "on", value: function(e3, t2) {
              var n2 = this;
              window.addEventListener(e3, function(e4) {
                n2.silenced || t2(e4);
              });
            } }]), e2;
          }(), z = { canPushState: function() {
            return void 0 !== history.pushState;
          }, dropLocal: function(e2, t2) {
            return window.localStorage.removeItem(this.localKey(e2, t2));
          }, updateLocal: function(e2, t2, n2, i2) {
            var r2 = this.getLocal(e2, t2), o2 = this.localKey(e2, t2), a2 = null === r2 ? n2 : i2(r2);
            return window.localStorage.setItem(o2, JSON.stringify(a2)), a2;
          }, getLocal: function(e2, t2) {
            return JSON.parse(window.localStorage.getItem(this.localKey(e2, t2)));
          }, fetchPage: function(e2, t2) {
            var n2 = new XMLHttpRequest();
            n2.open("GET", e2, true), n2.timeout = 3e4, n2.setRequestHeader("content-type", "text/html"), n2.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n2.setRequestHeader("x-requested-with", "live-link"), n2.onerror = function() {
              return t2(400);
            }, n2.ontimeout = function() {
              return t2(504);
            }, n2.onreadystatechange = function() {
              if (4 === n2.readyState)
                return "live-link" !== n2.getResponseHeader("x-requested-with") ? t2(400) : 200 !== n2.status ? t2(n2.status) : void t2(200, n2.responseText);
            }, n2.send();
          }, pushState: function(e2, t2, n2) {
            if (this.canPushState()) {
              if (n2 !== window.location.href) {
                history[e2 + "State"](t2, "", n2 || null);
                var i2 = this.getHashTargetEl(window.location.hash);
                i2 ? i2.scrollIntoView() : "redirect" === t2.type && window.scroll(0, 0);
              }
            } else
              this.redirect(n2);
          }, setCookie: function(e2, t2) {
            document.cookie = "".concat(e2, "=").concat(t2);
          }, getCookie: function(e2) {
            return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e2, "s*=s*([^;]*).*$)|^.*$")), "$1");
          }, redirect: function(e2, t2) {
            t2 && z.setCookie("__phoenix_flash__", t2 + "; max-age=60000; path=/"), window.location = e2;
          }, localKey: function(e2, t2) {
            return "".concat(e2, "-").concat(t2);
          }, getHashTargetEl: function(e2) {
            if ("" !== e2.toString())
              return document.getElementById(e2) || document.querySelector('a[name="'.concat(e2.substring(1), '"]'));
          } }, $ = { byId: function(e2) {
            return document.getElementById(e2) || J("no id found for ".concat(e2));
          }, removeClass: function(e2, t2) {
            e2.classList.remove(t2), 0 === e2.classList.length && e2.removeAttribute("class");
          }, all: function(e2, t2, n2) {
            var i2 = Array.from(e2.querySelectorAll(t2));
            return n2 ? i2.forEach(n2) : i2;
          }, findFirstComponentNode: function(e2, t2) {
            return e2.querySelector("[".concat(N, '="').concat(t2, '"]'));
          }, findComponentNodeList: function(e2, t2) {
            return this.all(e2, "[".concat(N, '="').concat(t2, '"]'));
          }, findPhxChildrenInFragment: function(e2, t2) {
            var n2 = document.createElement("template");
            return n2.innerHTML = e2, this.findPhxChildren(n2.content, t2);
          }, isPhxUpdate: function(e2, t2, n2) {
            return e2.getAttribute && n2.indexOf(e2.getAttribute(t2)) >= 0;
          }, findPhxChildren: function(e2, t2) {
            return this.all(e2, "".concat(R, "[").concat("data-phx-parent-id", '="').concat(t2, '"]'));
          }, findParentCIDs: function(e2, t2) {
            var n2 = this, i2 = new Set(t2);
            return t2.reduce(function(t3, i3) {
              var r2 = "[".concat(N, '="').concat(i3, '"] [').concat(N, "]");
              return n2.all(e2, r2).map(function(e3) {
                return parseInt(e3.getAttribute(N));
              }).forEach(function(e3) {
                return t3.delete(e3);
              }), t3;
            }, i2);
          }, private: function(e2, t2) {
            return e2.phxPrivate && e2.phxPrivate[t2];
          }, deletePrivate: function(e2, t2) {
            e2.phxPrivate && delete e2.phxPrivate[t2];
          }, putPrivate: function(e2, t2, n2) {
            e2.phxPrivate || (e2.phxPrivate = {}), e2.phxPrivate[t2] = n2;
          }, copyPrivates: function(e2, t2) {
            t2.phxPrivate && (e2.phxPrivate = V(t2.phxPrivate));
          }, putTitle: function(e2) {
            var t2 = document.querySelector("title").dataset, n2 = t2.prefix, i2 = t2.suffix;
            document.title = "".concat(n2 || "").concat(e2).concat(i2 || "");
          }, debounce: function(e2, t2, n2, i2, r2, o2, a2) {
            var u2 = this, c2 = e2.getAttribute(n2), s2 = e2.getAttribute(r2);
            "" === c2 && (c2 = i2), "" === s2 && (s2 = o2);
            var l2 = c2 || s2;
            switch (l2) {
              case null:
                return a2();
              case "blur":
                if (this.private(e2, "debounce-blur"))
                  return;
                return e2.addEventListener("blur", function() {
                  return a2();
                }), void this.putPrivate(e2, "debounce-blur", l2);
              default:
                var d2 = parseInt(l2);
                if (isNaN(d2))
                  return J("invalid throttle/debounce value: ".concat(l2));
                if (s2 && "keydown" === t2.type) {
                  var h2 = this.private(e2, "debounce-prev-key");
                  if (this.putPrivate(e2, "debounce-prev-key", t2.which), h2 !== t2.which)
                    return a2();
                }
                if (this.private(e2, "debounce-timer"))
                  return;
                var f2 = function(t3) {
                  s2 && "phx-change" === t3.type && t3.detail.triggeredBy.name === e2.name || (clearTimeout(u2.private(e2, "debounce-timer")), u2.deletePrivate(e2, "debounce-timer"));
                }, v2 = function() {
                  e2.form && (e2.form.removeEventListener("phx-change", f2), e2.form.removeEventListener("submit", f2)), e2.removeEventListener("blur", u2.private(e2, "debounce-blur-timer")), u2.deletePrivate(e2, "debounce-blur-timer"), u2.deletePrivate(e2, "debounce-timer"), s2 || a2();
                }, p2 = function() {
                  clearTimeout(u2.private(e2, "debounce-timer")), v2();
                };
                this.putPrivate(e2, "debounce-timer", setTimeout(v2, d2)), e2.addEventListener("blur", p2), this.putPrivate(e2, "debounce-blur-timer", p2), e2.form && (e2.form.addEventListener("phx-change", f2), e2.form.addEventListener("submit", f2)), s2 && a2();
            }
          }, discardError: function(e2, t2, n2) {
            var i2 = t2.getAttribute && t2.getAttribute(n2), r2 = i2 && e2.querySelector("#".concat(i2));
            r2 && (this.private(r2, "phx-has-focused") || this.private(r2.form, "phx-has-submitted") || t2.classList.add("phx-no-feedback"));
          }, isPhxChild: function(e2) {
            return e2.getAttribute && e2.getAttribute("data-phx-parent-id");
          }, dispatchEvent: function(e2, t2) {
            var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = new CustomEvent(t2, { bubbles: true, cancelable: true, detail: n2 });
            e2.dispatchEvent(i2);
          }, cloneNode: function(e2, t2) {
            if (void 0 === t2)
              return e2.cloneNode(true);
            var n2 = e2.cloneNode(false);
            return n2.innerHTML = t2, n2;
          }, mergeAttrs: function(e2, t2) {
            for (var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], i2 = t2.attributes, r2 = i2.length - 1; r2 >= 0; r2--) {
              var o2 = i2[r2].name;
              n2.indexOf(o2) < 0 && e2.setAttribute(o2, t2.getAttribute(o2));
            }
            for (var a2 = e2.attributes, u2 = a2.length - 1; u2 >= 0; u2--) {
              var c2 = a2[u2].name;
              t2.hasAttribute(c2) || e2.removeAttribute(c2);
            }
          }, mergeFocusedInput: function(e2, t2) {
            e2 instanceof HTMLSelectElement || $.mergeAttrs(e2, t2, ["value"]), t2.readOnly ? e2.setAttribute("readonly", true) : e2.removeAttribute("readonly");
          }, restoreFocus: function(e2, t2, n2) {
            if ($.isTextualInput(e2)) {
              var i2 = e2.matches(":focus");
              e2.readOnly && e2.blur(), i2 || e2.focus(), (e2.setSelectionRange && "text" === e2.type || "textarea" === e2.type) && e2.setSelectionRange(t2, n2);
            }
          }, isFormInput: function(e2) {
            return /^(?:input|select|textarea)$/i.test(e2.tagName);
          }, syncAttrsToProps: function(e2) {
            e2 instanceof HTMLInputElement && O.indexOf(e2.type.toLocaleLowerCase()) >= 0 && (e2.checked = null !== e2.getAttribute("checked"));
          }, isTextualInput: function(e2) {
            return _.indexOf(e2.type) >= 0;
          }, isNowTriggerFormExternal: function(e2, t2) {
            return e2.getAttribute && null !== e2.getAttribute(t2);
          }, undoRefs: function(e2, t2) {
            var n2 = this;
            $.all(t2, "[".concat(D, "]"), function(t3) {
              return n2.syncPendingRef(e2, t3, t3);
            });
          }, syncPendingRef: function(e2, t2, n2) {
            var i2 = t2.getAttribute && t2.getAttribute(D);
            if (null === i2)
              return true;
            var r2 = parseInt(i2);
            return null !== e2 && e2 >= r2 ? ([t2, n2].forEach(function(e3) {
              e3.removeAttribute(D), null !== e3.getAttribute("data-phx-readonly") && (e3.readOnly = false, e3.removeAttribute("data-phx-readonly")), null !== e3.getAttribute("data-phx-disabled") && (e3.disabled = false, e3.removeAttribute("data-phx-disabled")), I.forEach(function(t4) {
                return $.removeClass(e3, t4);
              });
              var t3 = e3.getAttribute("data-phx-disable-with-restore");
              null !== t3 && (e3.innerText = t3, e3.removeAttribute("data-phx-disable-with-restore"));
            }), true) : (I.forEach(function(e3) {
              t2.classList.contains(e3) && n2.classList.add(e3);
            }), n2.setAttribute(D, t2.getAttribute(D)), !$.isFormInput(t2) && !/submit/i.test(t2.type));
          } }, Q = function() {
            function e2(t2, n2, i2, r2, o2, a2) {
              w(this, e2), this.view = t2, this.liveSocket = t2.liveSocket, this.container = n2, this.id = i2, this.rootID = t2.root.id, this.html = r2, this.targetCID = o2, this.ref = a2, this.cidPatch = "number" == typeof this.targetCID, this.callbacks = { beforeadded: [], beforeupdated: [], beforediscarded: [], beforephxChildAdded: [], afteradded: [], afterupdated: [], afterdiscarded: [], afterphxChildAdded: [] };
            }
            return A(e2, [{ key: "before", value: function(e3, t2) {
              this.callbacks["before".concat(e3)].push(t2);
            } }, { key: "after", value: function(e3, t2) {
              this.callbacks["after".concat(e3)].push(t2);
            } }, { key: "trackBefore", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
                n2[i2 - 1] = arguments[i2];
              this.callbacks["before".concat(e3)].forEach(function(e4) {
                return e4.apply(void 0, n2);
              });
            } }, { key: "trackAfter", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
                n2[i2 - 1] = arguments[i2];
              this.callbacks["after".concat(e3)].forEach(function(e4) {
                return e4.apply(void 0, n2);
              });
            } }, { key: "markPrunableContentForRemoval", value: function() {
              $.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function(e3) {
                e3.setAttribute("data-phx-remove", "");
              });
            } }, { key: "perform", value: function() {
              var e3 = this, t2 = this.view, n2 = this.liveSocket, i2 = this.container, r2 = this.html, o2 = this.isCIDPatch() ? this.targetCIDContainer() : i2;
              if (!this.isCIDPatch() || o2) {
                var a2 = n2.getActiveElement(), u2 = a2 && $.isTextualInput(a2) ? a2 : {}, c2 = u2.selectionStart, s2 = u2.selectionEnd, l2 = n2.binding("update"), d2 = n2.binding("feedback-for"), h2 = n2.binding("trigger-action"), f2 = [], v2 = [], p2 = [], g2 = n2.time("premorph container prep", function() {
                  return e3.buildDiffHTML(i2, r2, l2, o2);
                });
                return this.trackBefore("added", i2), this.trackBefore("updated", i2, i2), n2.time("morphdom", function() {
                  k(o2, g2, { childrenOnly: null === o2.getAttribute(N), onBeforeNodeAdded: function(t3) {
                    return $.discardError(o2, t3, d2), e3.trackBefore("added", t3), t3;
                  }, onNodeAdded: function(n3) {
                    $.isNowTriggerFormExternal(n3, h2) && n3.submit(), $.isPhxChild(n3) && t2.ownsElement(n3) && e3.trackAfter("phxChildAdded", n3), f2.push(n3);
                  }, onNodeDiscarded: function(t3) {
                    e3.trackAfter("discarded", t3);
                  }, onBeforeNodeDiscarded: function(t3) {
                    return !(!t3.getAttribute || null === t3.getAttribute("data-phx-remove")) || !$.isPhxUpdate(t3.parentNode, l2, ["append", "prepend"]) && (!e3.skipCIDSibling(t3) && (e3.trackBefore("discarded", t3), $.isPhxChild(t3) ? (n2.destroyViewByEl(t3), true) : void 0));
                  }, onElUpdated: function(e4) {
                    $.isNowTriggerFormExternal(e4, h2) && e4.submit(), v2.push(e4);
                  }, onBeforeElUpdated: function(t3, n3) {
                    if (e3.skipCIDSibling(n3))
                      return false;
                    if ("ignore" === t3.getAttribute(l2))
                      return e3.trackBefore("updated", t3, n3), $.mergeAttrs(t3, n3), v2.push(t3), false;
                    if ("number" === t3.type && t3.validity && t3.validity.badInput)
                      return false;
                    if (!$.syncPendingRef(e3.ref, t3, n3))
                      return false;
                    if ($.isPhxChild(n3)) {
                      var i3 = t3.getAttribute("data-phx-static");
                      return $.mergeAttrs(t3, n3), t3.setAttribute("data-phx-static", i3), t3.setAttribute("data-phx-root-id", e3.rootID), false;
                    }
                    if ($.copyPrivates(n3, t3), $.discardError(o2, n3, d2), a2 && t3.isSameNode(a2) && $.isFormInput(t3) && !e3.forceFocusedSelectUpdate(t3, n3))
                      return e3.trackBefore("updated", t3, n3), $.mergeFocusedInput(t3, n3), $.syncAttrsToProps(t3), v2.push(t3), false;
                    if ($.isPhxUpdate(n3, l2, ["append", "prepend"])) {
                      var r3 = "append" === n3.getAttribute(l2), u3 = Array.from(t3.children).map(function(e4) {
                        return e4.id;
                      }), c3 = Array.from(n3.children).map(function(e4) {
                        return e4.id;
                      });
                      r3 && !c3.find(function(e4) {
                        return u3.indexOf(e4) >= 0;
                      }) || p2.push([n3.id, u3]);
                    }
                    return $.syncAttrsToProps(n3), e3.trackBefore("updated", t3, n3), true;
                  } });
                }), n2.isDebugEnabled() && function() {
                  for (var e4 = /* @__PURE__ */ new Set(), t3 = document.querySelectorAll("*[id]"), n3 = 0, i3 = t3.length; n3 < i3; n3++)
                    e4.has(t3[n3].id) ? console.error("Multiple IDs detected: ".concat(t3[n3].id, ". Ensure unique element ids.")) : e4.add(t3[n3].id);
                }(), p2.length > 0 && n2.time("post-morph append/prepend restoration", function() {
                  p2.forEach(function(e4) {
                    var t3 = E(e4, 2), n3 = t3[0], i3 = t3[1], r3 = $.byId(n3);
                    "append" === r3.getAttribute(l2) ? i3.reverse().forEach(function(e5) {
                      W(document.getElementById(e5), function(e6) {
                        return r3.insertBefore(e6, r3.firstChild);
                      });
                    }) : i3.forEach(function(e5) {
                      W(document.getElementById(e5), function(e6) {
                        return r3.appendChild(e6);
                      });
                    });
                  });
                }), n2.silenceEvents(function() {
                  return $.restoreFocus(a2, c2, s2);
                }), $.dispatchEvent(document, "phx:update"), f2.forEach(function(t3) {
                  return e3.trackAfter("added", t3);
                }), v2.forEach(function(t3) {
                  return e3.trackAfter("updated", t3);
                }), true;
              }
            } }, { key: "forceFocusedSelectUpdate", value: function(e3, t2) {
              return true === e3.multiple || e3.innerHTML != t2.innerHTML;
            } }, { key: "isCIDPatch", value: function() {
              return this.cidPatch;
            } }, { key: "skipCIDSibling", value: function(e3) {
              return e3.nodeType === Node.ELEMENT_NODE && null !== e3.getAttribute("data-phx-skip");
            } }, { key: "targetCIDContainer", value: function() {
              if (this.isCIDPatch()) {
                var e3 = b($.findComponentNodeList(this.container, this.targetCID)), t2 = e3[0];
                return 0 === e3.slice(1).length ? t2 : t2 && t2.parentNode;
              }
            } }, { key: "buildDiffHTML", value: function(e3, t2, n2, i2) {
              var r2 = this, o2 = this.isCIDPatch(), a2 = o2 && i2.getAttribute(N) === this.targetCID.toString();
              if (!o2 || a2)
                return t2;
              var u2 = null, c2 = document.createElement("template");
              u2 = $.cloneNode(i2);
              var s2 = b($.findComponentNodeList(u2, this.targetCID)), l2 = s2[0], d2 = s2.slice(1);
              return c2.innerHTML = t2, d2.forEach(function(e4) {
                return e4.remove();
              }), Array.from(u2.childNodes).forEach(function(e4) {
                e4.nodeType === Node.ELEMENT_NODE && e4.getAttribute(N) !== r2.targetCID.toString() && (e4.setAttribute("data-phx-skip", ""), e4.innerHTML = "");
              }), Array.from(c2.content.childNodes).forEach(function(e4) {
                return u2.insertBefore(e4, l2);
              }), l2.remove(), u2.outerHTML;
            } }]), e2;
          }(), Z = function() {
            function e2(t2, n2, i2, r2, o2) {
              var a2 = this;
              w(this, e2), this.liveSocket = n2, this.flash = o2, this.parent = i2, this.root = i2 ? i2.root : this, this.gracefullyClosed = false, this.el = t2, this.id = this.el.id, this.view = this.el.getAttribute(T), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.href = r2, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = true, this.destroyed = false, this.joinCallback = function() {
              }, this.stopCallback = function() {
              }, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), function() {
                return { url: a2.href, params: a2.liveSocket.params(a2.view), session: a2.getSession(), static: a2.getStatic(), flash: a2.flash, joins: a2.joinCount };
              }), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel();
            }
            return A(e2, [{ key: "isMain", value: function() {
              return this.liveSocket.main === this;
            } }, { key: "name", value: function() {
              return this.view;
            } }, { key: "isConnected", value: function() {
              return this.channel.canPush();
            } }, { key: "getSession", value: function() {
              return this.el.getAttribute("data-phx-session");
            } }, { key: "getStatic", value: function() {
              var e3 = this.el.getAttribute("data-phx-static");
              return "" === e3 ? null : e3;
            } }, { key: "destroy", value: function() {
              var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
              };
              this.destroyAllChildren(), this.destroyed = true, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);
              var n2 = function() {
                for (var n3 in t2(), e3.viewHooks)
                  e3.destroyHook(e3.viewHooks[n3]);
              };
              this.hasGracefullyClosed() ? (this.log("destroyed", function() {
                return ["the server view has gracefully closed"];
              }), n2()) : (this.log("destroyed", function() {
                return ["the child has been removed from the parent"];
              }), this.channel.leave().receive("ok", n2).receive("error", n2).receive("timeout", n2));
            } }, { key: "setContainerClasses", value: function() {
              var e3;
              this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e3 = this.el.classList).add.apply(e3, arguments);
            } }, { key: "isLoading", value: function() {
              return this.el.classList.contains("phx-disconnected");
            } }, { key: "showLoader", value: function(e3) {
              var t2 = this;
              if (clearTimeout(this.loaderTimer), e3)
                this.loaderTimer = setTimeout(function() {
                  return t2.showLoader();
                }, e3);
              else {
                for (var n2 in this.viewHooks)
                  this.viewHooks[n2].__trigger__("disconnected");
                this.setContainerClasses("phx-disconnected");
              }
            } }, { key: "hideLoader", value: function() {
              clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected");
            } }, { key: "triggerReconnected", value: function() {
              for (var e3 in this.viewHooks)
                this.viewHooks[e3].__trigger__("reconnected");
            } }, { key: "log", value: function(e3, t2) {
              this.liveSocket.log(this, e3, t2);
            } }, { key: "onJoin", value: function(e3) {
              var t2 = this, n2 = e3.rendered;
              this.joinCount++, this.childJoins = 0, this.joinPending = true, this.flash = null, this.log("join", function() {
                return ["", n2];
              }), n2.title && $.putTitle(n2.title), z.dropLocal(this.name(), "consecutive-reloads"), this.rendered = new G(this.id, n2);
              var i2 = this.renderContainer(null, "join");
              this.dropPendingRefs();
              var r2 = this.formsForRecovery(i2);
              this.joinCount > 1 && r2.length > 0 ? r2.forEach(function(e4, n3) {
                t2.pushFormRecovery(e4, function(e5) {
                  n3 === r2.length - 1 && t2.onJoinComplete(e5, i2);
                });
              }) : this.onJoinComplete(e3, i2);
            } }, { key: "dropPendingRefs", value: function() {
              $.all(this.el, "[".concat(D, "]"), function(e3) {
                return e3.removeAttribute(D);
              });
            } }, { key: "formsForRecovery", value: function(e3) {
              var t2 = this, n2 = this.binding("change"), i2 = document.createElement("template");
              return i2.innerHTML = e3, $.all(this.el, "form[".concat(n2, "], form[").concat(this.binding("submit"), "]")).filter(function(e4) {
                return t2.ownsElement(e4);
              }).filter(function(e4) {
                return i2.content.querySelector("form[".concat(n2, '="').concat(e4.getAttribute(n2), '"]'));
              });
            } }, { key: "onJoinComplete", value: function(e3, t2) {
              var n2 = this, i2 = e3.live_patch;
              if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending())
                return this.applyJoinPatch(i2, t2);
              0 === $.findPhxChildrenInFragment(t2, this.id).filter(function(e4) {
                return n2.joinChild(e4);
              }).length ? this.parent ? (this.root.pendingJoinOps.push([this, function() {
                return n2.applyJoinPatch(i2, t2);
              }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(i2, t2)) : this.root.pendingJoinOps.push([this, function() {
                return n2.applyJoinPatch(i2, t2);
              }]);
            } }, { key: "attachTrueDocEl", value: function() {
              this.el = $.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id);
            } }, { key: "applyJoinPatch", value: function(e3, t2) {
              var n2 = this;
              this.attachTrueDocEl();
              var i2 = new Q(this, this.el, this.id, t2, null);
              if (i2.markPrunableContentForRemoval(), this.joinPending = false, this.performPatch(i2), this.joinNewChildren(), $.all(this.el, "[".concat(this.binding("hook"), "]"), function(e4) {
                var t3 = n2.addHook(e4);
                t3 && t3.__trigger__("mounted");
              }), this.applyPendingUpdates(), e3) {
                var r2 = e3.kind, o2 = e3.to;
                this.liveSocket.historyPatch(o2, r2);
              }
              this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback();
            } }, { key: "performPatch", value: function(e3) {
              var t2 = this, n2 = [], i2 = false, r2 = /* @__PURE__ */ new Set();
              return e3.after("added", function(e4) {
                var n3 = t2.addHook(e4);
                n3 && n3.__trigger__("mounted");
              }), e3.after("phxChildAdded", function(e4) {
                return i2 = true;
              }), e3.before("updated", function(e4, n3) {
                var i3 = t2.getHook(e4), o2 = i3 && "ignore" === e4.getAttribute(t2.binding("update"));
                !i3 || e4.isEqualNode(n3) || o2 && function(e5, t3) {
                  return JSON.stringify(e5) === JSON.stringify(t3);
                }(e4.dataset, n3.dataset) || (r2.add(e4.id), i3.__trigger__("beforeUpdate"));
              }), e3.after("updated", function(e4) {
                var n3 = t2.getHook(e4);
                n3 && r2.has(e4.id) && n3.__trigger__("updated");
              }), e3.before("discarded", function(e4) {
                var n3 = t2.getHook(e4);
                n3 && n3.__trigger__("beforeDestroy");
              }), e3.after("discarded", function(e4) {
                var i3 = t2.componentID(e4);
                "number" == typeof i3 && -1 === n2.indexOf(i3) && n2.push(i3);
                var r3 = t2.getHook(e4);
                r3 && t2.destroyHook(r3);
              }), e3.perform(), this.maybePushComponentsDestroyed(n2), i2;
            } }, { key: "joinNewChildren", value: function() {
              var e3 = this;
              $.findPhxChildren(this.el, this.id).forEach(function(t2) {
                return e3.joinChild(t2);
              });
            } }, { key: "getChildById", value: function(e3) {
              return this.root.children[this.id][e3];
            } }, { key: "getDescendentByEl", value: function(e3) {
              return e3.id === this.id ? this : this.children[e3.getAttribute("data-phx-parent-id")][e3.id];
            } }, { key: "destroyDescendent", value: function(e3) {
              for (var t2 in this.root.children)
                for (var n2 in this.root.children[t2])
                  if (n2 === e3)
                    return this.root.children[t2][n2].destroy();
            } }, { key: "joinChild", value: function(t2) {
              if (!this.getChildById(t2.id)) {
                var n2 = new e2(t2, this.liveSocket, this);
                return this.root.children[this.id][n2.id] = n2, n2.join(), this.childJoins++, true;
              }
            } }, { key: "isJoinPending", value: function() {
              return this.joinPending;
            } }, { key: "ackJoin", value: function(e3) {
              this.childJoins--, 0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete());
            } }, { key: "onAllChildJoinsComplete", value: function() {
              this.joinCallback(), this.pendingJoinOps.forEach(function(e3) {
                var t2 = E(e3, 2), n2 = t2[0], i2 = t2[1];
                n2.isDestroyed() || i2();
              }), this.pendingJoinOps = [];
            } }, { key: "update", value: function(e3, t2, n2) {
              var i2 = this;
              if (!q(e3) || null !== n2) {
                if (e3.title && $.putTitle(e3.title), this.isJoinPending() || this.liveSocket.hasPendingLink())
                  return this.pendingDiffs.push({ diff: e3, cid: t2, ref: n2 });
                this.log("update", function() {
                  return ["", e3];
                }), this.rendered.mergeDiff(e3);
                var r2 = false;
                "number" == typeof t2 ? this.liveSocket.time("component ack patch complete", function() {
                  i2.componentPatch(e3.c[t2], t2, n2) && (r2 = true);
                }) : this.rendered.isComponentOnlyDiff(e3) ? this.liveSocket.time("component patch complete", function() {
                  $.findParentCIDs(i2.el, i2.rendered.componentCIDs(e3)).forEach(function(t3) {
                    i2.componentPatch(e3.c[t3], t3, n2) && (r2 = true);
                  });
                }) : q(e3) || this.liveSocket.time("full patch complete", function() {
                  var t3 = i2.renderContainer(e3, "update"), o2 = new Q(i2, i2.el, i2.id, t3, null, n2);
                  r2 = i2.performPatch(o2);
                }), $.undoRefs(n2, this.el), r2 && this.joinNewChildren();
              }
            } }, { key: "renderContainer", value: function(e3, t2) {
              var n2 = this;
              return this.liveSocket.time("toString diff (".concat(t2, ")"), function() {
                var t3 = n2.el.tagName, i2 = e3 ? n2.rendered.componentCIDs(e3) : null, r2 = n2.rendered.toString(i2);
                return "<".concat(t3, ">").concat(r2, "</").concat(t3, ">");
              });
            } }, { key: "componentPatch", value: function(e3, t2, n2) {
              if (q(e3))
                return false;
              var i2 = this.rendered.componentToString(t2), r2 = new Q(this, this.el, this.id, i2, t2, n2);
              return this.performPatch(r2);
            } }, { key: "getHook", value: function(e3) {
              return this.viewHooks[te.elementID(e3)];
            } }, { key: "addHook", value: function(e3) {
              if (!te.elementID(e3) && e3.getAttribute) {
                var t2 = e3.getAttribute(this.binding("hook"));
                if (!t2 || this.ownsElement(e3)) {
                  var n2 = this.liveSocket.getHookCallbacks(t2);
                  if (n2) {
                    var i2 = new te(this, e3, n2);
                    return this.viewHooks[te.elementID(i2.el)] = i2, i2;
                  }
                  null !== t2 && J('unknown hook found for "'.concat(t2, '"'), e3);
                }
              }
            } }, { key: "destroyHook", value: function(e3) {
              e3.__trigger__("destroyed"), delete this.viewHooks[te.elementID(e3.el)];
            } }, { key: "applyPendingUpdates", value: function() {
              var e3 = this;
              this.pendingDiffs.forEach(function(t2) {
                var n2 = t2.diff, i2 = t2.cid, r2 = t2.ref;
                return e3.update(n2, i2, r2);
              }), this.pendingDiffs = [];
            } }, { key: "onChannel", value: function(e3, t2) {
              var n2 = this;
              this.liveSocket.onChannel(this.channel, e3, function(e4) {
                n2.isJoinPending() ? n2.root.pendingJoinOps.push([n2, function() {
                  return t2(e4);
                }]) : t2(e4);
              });
            } }, { key: "bindChannel", value: function() {
              var e3 = this;
              this.onChannel("diff", function(t2) {
                return e3.update(t2);
              }), this.onChannel("redirect", function(t2) {
                var n2 = t2.to, i2 = t2.flash;
                return e3.onRedirect({ to: n2, flash: i2 });
              }), this.onChannel("live_patch", function(t2) {
                return e3.onLivePatch(t2);
              }), this.onChannel("live_redirect", function(t2) {
                return e3.onLiveRedirect(t2);
              }), this.onChannel("session", function(t2) {
                var n2 = t2.token;
                return e3.el.setAttribute("data-phx-session", n2);
              }), this.channel.onError(function(t2) {
                return e3.onError(t2);
              }), this.channel.onClose(function() {
                return e3.onGracefulClose();
              });
            } }, { key: "destroyAllChildren", value: function() {
              for (var e3 in this.root.children[this.id])
                this.getChildById(e3).destroy();
            } }, { key: "onGracefulClose", value: function() {
              this.gracefullyClosed = true, this.destroyAllChildren();
            } }, { key: "onLiveRedirect", value: function(e3) {
              var t2 = e3.to, n2 = e3.kind, i2 = e3.flash, r2 = this.expandURL(t2);
              this.liveSocket.historyRedirect(r2, n2, i2);
            } }, { key: "onLivePatch", value: function(e3) {
              var t2 = e3.to, n2 = e3.kind;
              this.href = this.expandURL(t2), this.liveSocket.historyPatch(t2, n2);
            } }, { key: "expandURL", value: function(e3) {
              return e3.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e3) : e3;
            } }, { key: "onRedirect", value: function(e3) {
              var t2 = e3.to, n2 = e3.flash;
              this.liveSocket.redirect(t2, n2);
            } }, { key: "isDestroyed", value: function() {
              return this.destroyed;
            } }, { key: "hasGracefullyClosed", value: function() {
              return this.gracefullyClosed;
            } }, { key: "join", value: function(e3) {
              var t2 = this;
              this.parent || (this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" })), this.joinCallback = function() {
                return e3 && e3(t2, t2.joinCount);
              }, this.liveSocket.wrapPush(function() {
                return t2.channel.join().receive("ok", function(e4) {
                  return t2.onJoin(e4);
                }).receive("error", function(e4) {
                  return t2.onJoinError(e4);
                }).receive("timeout", function() {
                  return t2.onJoinError({ reason: "timeout" });
                });
              });
            } }, { key: "onJoinError", value: function(e3) {
              return "outdated" === e3.reason ? this.liveSocket.reloadWithJitter(this) : "join crashed" === e3.reason ? this.liveSocket.reloadWithJitter(this) : ((e3.redirect || e3.live_redirect) && this.channel.leave(), e3.redirect ? this.onRedirect(e3.redirect) : e3.live_redirect ? this.onLiveRedirect(e3.live_redirect) : (this.parent && this.parent.ackJoin(this), this.displayError(), void this.log("error", function() {
                return ["unable to join", e3];
              })));
            } }, { key: "onError", value: function(e3) {
              if (this.isJoinPending())
                return this.liveSocket.reloadWithJitter(this);
              this.destroyAllChildren(), this.log("error", function() {
                return ["view crashed", e3];
              }), this.liveSocket.onViewError(this), document.activeElement.blur(), this.liveSocket.isUnloaded() ? this.showLoader(200) : this.displayError();
            } }, { key: "displayError", value: function() {
              this.isMain() && $.dispatchEvent(window, "phx:page-loading-start", { to: this.href, kind: "error" }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error");
            } }, { key: "pushWithReply", value: function(e3, t2, n2) {
              var i2 = this, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
              }, o2 = E(e3 ? e3() : [null, []], 2), a2 = o2[0], u2 = E(o2[1], 1)[0], c2 = function() {
              };
              return u2 && null !== u2.getAttribute(this.binding("page-loading")) && (c2 = this.liveSocket.withPageLoading({ kind: "element", target: u2 })), "number" != typeof n2.cid && delete n2.cid, this.liveSocket.wrapPush(function() {
                return i2.channel.push(t2, n2, 3e4).receive("ok", function(e4) {
                  (e4.diff || null !== a2) && i2.update(e4.diff || {}, n2.cid, a2), e4.redirect && i2.onRedirect(e4.redirect), e4.live_patch && i2.onLivePatch(e4.live_patch), e4.live_redirect && i2.onLiveRedirect(e4.live_redirect), c2(), r2(e4);
                });
              });
            } }, { key: "putRef", value: function(e3, t2) {
              var n2 = this.ref++, i2 = this.binding("disable-with");
              return e3.forEach(function(e4) {
                e4.classList.add("phx-".concat(t2, "-loading")), e4.setAttribute(D, n2);
                var r2 = e4.getAttribute(i2);
                null !== r2 && (e4.getAttribute("data-phx-disable-with-restore") || e4.setAttribute("data-phx-disable-with-restore", e4.innerText), e4.innerText = r2);
              }), [n2, e3];
            } }, { key: "componentID", value: function(e3) {
              var t2 = e3.getAttribute && e3.getAttribute(N);
              return t2 ? parseInt(t2) : null;
            } }, { key: "targetComponentID", value: function(e3, t2) {
              return e3.getAttribute(this.binding("target")) ? this.closestComponentID(t2) : null;
            } }, { key: "closestComponentID", value: function(e3) {
              var t2 = this;
              return e3 ? W(e3.closest("[".concat(N, "]")), function(e4) {
                return t2.ownsElement(e4) && t2.componentID(e4);
              }) : null;
            } }, { key: "pushHookEvent", value: function(e3, t2, n2) {
              this.pushWithReply(null, "event", { type: "hook", event: t2, value: n2, cid: this.closestComponentID(e3) });
            } }, { key: "extractMeta", value: function(e3, t2) {
              for (var n2 = this.binding("value-"), i2 = 0; i2 < e3.attributes.length; i2++) {
                var r2 = e3.attributes[i2].name;
                r2.startsWith(n2) && (t2[r2.replace(n2, "")] = e3.getAttribute(r2));
              }
              return void 0 !== e3.value && (t2.value = e3.value, "INPUT" === e3.tagName && O.indexOf(e3.type) >= 0 && !e3.checked && delete t2.value), t2;
            } }, { key: "pushEvent", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              this.pushWithReply(function() {
                return o2.putRef([t2], e3);
              }, "event", { type: e3, event: i2, value: this.extractMeta(t2, r2), cid: this.targetComponentID(t2, n2) });
            } }, { key: "pushKey", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              this.pushWithReply(function() {
                return o2.putRef([e3], n2);
              }, "event", { type: n2, event: i2, value: this.extractMeta(e3, r2), cid: this.targetComponentID(e3, t2) });
            } }, { key: "pushInput", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              $.dispatchEvent(e3.form, "phx-change", { triggeredBy: e3 }), this.pushWithReply(function() {
                return o2.putRef([e3, e3.form], "change");
              }, "event", { type: "form", event: n2, value: X(e3.form, { _target: i2.name }), cid: this.targetComponentID(e3.form, t2) }, r2);
            } }, { key: "pushFormSubmit", value: function(e3, t2, n2, i2) {
              var r2 = this, o2 = function(e4) {
                return !U(e4, "".concat(r2.binding("update"), "=ignore"), e4.form);
              };
              this.pushWithReply(function() {
                var t3 = $.all(e3, "[".concat(r2.binding("disable-with"), "]")), n3 = $.all(e3, "button").filter(o2), i3 = $.all(e3, "input").filter(o2);
                return n3.forEach(function(e4) {
                  e4.setAttribute("data-phx-disabled", e4.disabled), e4.disabled = true;
                }), i3.forEach(function(e4) {
                  e4.setAttribute("data-phx-readonly", e4.readOnly), e4.readOnly = true;
                }), e3.setAttribute(r2.binding("page-loading"), ""), r2.putRef([e3].concat(t3).concat(n3).concat(i3), "submit");
              }, "event", { type: "form", event: n2, value: X(e3), cid: this.targetComponentID(e3, t2) }, i2);
            } }, { key: "pushFormRecovery", value: function(e3, t2) {
              var n2 = this;
              this.liveSocket.withinOwners(e3, function(i2, r2) {
                var o2 = e3.elements[0], a2 = e3.getAttribute(n2.binding("auto-recover")) || e3.getAttribute(n2.binding("change"));
                i2.pushInput(o2, r2, a2, o2, t2);
              });
            } }, { key: "pushLinkPatch", value: function(e3, t2, n2) {
              var i2 = this;
              this.isLoading() || this.showLoader(this.liveSocket.loaderTimeout);
              var r2 = this.liveSocket.setPendingLink(e3), o2 = t2 ? function() {
                return i2.putRef([t2], "click");
              } : null;
              this.pushWithReply(o2, "link", { url: e3 }, function(t3) {
                t3.link_redirect ? i2.liveSocket.replaceMain(e3, null, n2, r2) : i2.liveSocket.commitPendingLink(r2) && (i2.href = e3, i2.applyPendingUpdates(), i2.hideLoader(), i2.triggerReconnected(), n2 && n2());
              }).receive("timeout", function() {
                return i2.liveSocket.redirect(window.location.href);
              });
            } }, { key: "formsForRecovery", value: function(e3) {
              var t2 = this, n2 = this.binding("change"), i2 = document.createElement("template");
              return i2.innerHTML = e3, $.all(this.el, "form[".concat(n2, "]")).filter(function(e4) {
                return t2.ownsElement(e4);
              }).filter(function(e4) {
                return "ignore" !== e4.getAttribute(t2.binding("auto-recover"));
              }).filter(function(e4) {
                return i2.content.querySelector("form[".concat(n2, '="').concat(e4.getAttribute(n2), '"]'));
              });
            } }, { key: "maybePushComponentsDestroyed", value: function(e3) {
              var t2 = this, n2 = e3.filter(function(e4) {
                return 0 === $.findComponentNodeList(t2.el, e4).length;
              });
              n2.length > 0 && this.pushWithReply(null, "cids_destroyed", { cids: n2 }, function() {
                t2.rendered.pruneCIDs(n2);
              });
            } }, { key: "ownsElement", value: function(e3) {
              return e3.getAttribute("data-phx-parent-id") === this.id || W(e3.closest(R), function(e4) {
                return e4.id;
              }) === this.id;
            } }, { key: "submitForm", value: function(e3, t2, n2) {
              var i2 = this;
              $.putPrivate(e3, "phx-has-submitted", true), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e3, t2, n2, function() {
                i2.liveSocket.restorePreviouslyActiveFocus();
              });
            } }, { key: "binding", value: function(e3) {
              return this.liveSocket.binding(e3);
            } }]), e2;
          }(), ee = 1, te = function() {
            function e2(t2, n2, i2) {
              for (var r2 in w(this, e2), this.__view = t2, this.__liveSocket = t2.liveSocket, this.__callbacks = i2, this.el = n2, this.viewName = t2.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks)
                this[r2] = this.__callbacks[r2];
            }
            return A(e2, null, [{ key: "makeID", value: function() {
              return ee++;
            } }, { key: "elementID", value: function(e3) {
              return e3.phxHookId;
            } }]), A(e2, [{ key: "pushEvent", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.__view.pushHookEvent(null, e3, t2);
            } }, { key: "pushEventTo", value: function(e3, t2) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              this.__liveSocket.withinTargets(null, e3, function(e4, i2) {
                e4.pushHookEvent(i2, t2, n2);
              });
            } }, { key: "__trigger__", value: function(e3) {
              var t2 = this.__callbacks[e3];
              t2 && t2.call(this);
            } }]), e2;
          }();
          t.default = Y;
        }, function(e, t) {
          var n;
          n = function() {
            return this;
          }();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e2) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          (function(t2) {
            t2.Phoenix || (t2.Phoenix = {}), e.exports = t2.Phoenix.LiveView = n(0);
          }).call(this, n(1));
        }]);
      });
    }
  });

  // node_modules/phoenix_html/priv/static/phoenix_html.js
  (function() {
    var PolyfillEvent = eventConstructor();
    function eventConstructor() {
      if (typeof window.CustomEvent === "function")
        return window.CustomEvent;
      function CustomEvent2(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: void 0 };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
      CustomEvent2.prototype = window.Event.prototype;
      return CustomEvent2;
    }
    function buildHiddenInput(name, value) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      return input;
    }
    function handleClick(element) {
      var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), target = element.getAttribute("target");
      form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
      form.action = to;
      form.style.display = "hidden";
      if (target)
        form.target = target;
      form.appendChild(csrf);
      form.appendChild(method);
      document.body.appendChild(form);
      form.submit();
    }
    window.addEventListener("click", function(e) {
      var element = e.target;
      while (element && element.getAttribute) {
        var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
          "bubbles": true,
          "cancelable": true
        });
        if (!element.dispatchEvent(phoenixLinkEvent)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        }
        if (element.getAttribute("data-method")) {
          handleClick(element);
          e.preventDefault();
          return false;
        } else {
          element = element.parentNode;
        }
      }
    }, false);
    window.addEventListener("phoenix.link.click", function(e) {
      var message = e.target.getAttribute("data-confirm");
      if (message && !window.confirm(message)) {
        e.preventDefault();
      }
    }, false);
  })();

  // js/app.js
  var import_phoenix2 = __toESM(require_phoenix());
  var import_nprogress = __toESM(require_nprogress());
  var import_phoenix_live_view = __toESM(require_phoenix_live_view());
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var liveSocket = new import_phoenix_live_view.LiveSocket("/live", import_phoenix2.Socket, { params: { _csrf_token: csrfToken } });
  window.addEventListener("phx:page-loading-start", (info) => import_nprogress.default.start());
  window.addEventListener("phx:page-loading-stop", (info) => import_nprogress.default.done());
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
/*! Bundled license information:

nprogress/nprogress.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)
*/
