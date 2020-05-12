/*! For license information please see index.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "/0+H": function(t, e, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(n("q1tI")),
        o = n("lwAK");
      function u() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.ampFirst,
          n = void 0 !== e && e,
          i = t.hybrid,
          r = void 0 !== i && i,
          o = t.hasQuery;
        return n || (r && void 0 !== o && o);
      }
      (e.isInAmpMode = u),
        (e.useAmp = function() {
          return u(r.default.useContext(o.AmpStateContext));
        });
    },
    "3V8y": function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/portfolio-7f66499615a3b9dc27ae6dd37e4b7814.png";
    },
    "46R2": function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/apex-109507a8a69ba9ad2bddc95d483fb1aa.png";
    },
    "49ov": function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/CountDown-a6f34d4abe0d74364cea275362877e16.png";
    },
    "7W2i": function(t, e, n) {
      var i = n("SksO");
      t.exports = function(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && i(t, e);
      };
    },
    "8//2": function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = s(n("q1tI")),
        r = n("ueNE"),
        o = s(n("pIsd")),
        u = s(n("BBPU")),
        a = n("x9Za");
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c(t) {
        return (c =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function A() {
        return (A =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(n, !0).forEach(function(e) {
                N(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : M(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function L(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function d(t) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function g(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function j(t, e) {
        return (j =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function N(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var y = (0, a.canUseDOM)() && n("jpXb"),
        f = (function(t) {
          function e(t) {
            var n;
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (n = (function(t, e) {
                return !e || ("object" !== c(e) && "function" !== typeof e)
                  ? g(t)
                  : e;
              })(this, d(e).call(this, t))),
              N(g(n), "innerSliderRefHandler", function(t) {
                return (n.innerSlider = t);
              }),
              N(g(n), "slickPrev", function() {
                return n.innerSlider.slickPrev();
              }),
              N(g(n), "slickNext", function() {
                return n.innerSlider.slickNext();
              }),
              N(g(n), "slickGoTo", function(t) {
                var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return n.innerSlider.slickGoTo(t, e);
              }),
              N(g(n), "slickPause", function() {
                return n.innerSlider.pause("paused");
              }),
              N(g(n), "slickPlay", function() {
                return n.innerSlider.autoPlay("play");
              }),
              (n.state = { breakpoint: null }),
              (n._responsiveMediaHandlers = []),
              n
            );
          }
          var n, s, M;
          return (
            (function(t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && j(t, e);
            })(e, t),
            (n = e),
            (s = [
              {
                key: "media",
                value: function(t, e) {
                  y.register(t, e),
                    this._responsiveMediaHandlers.push({
                      query: t,
                      handler: e
                    });
                }
              },
              {
                key: "UNSAFE_componentWillMount",
                value: function() {
                  var t = this;
                  if (this.props.responsive) {
                    var e = this.props.responsive.map(function(t) {
                      return t.breakpoint;
                    });
                    e.sort(function(t, e) {
                      return t - e;
                    }),
                      e.forEach(function(n, i) {
                        var r;
                        (r =
                          0 === i
                            ? (0, o.default)({ minWidth: 0, maxWidth: n })
                            : (0, o.default)({
                                minWidth: e[i - 1] + 1,
                                maxWidth: n
                              })),
                          (0, a.canUseDOM)() &&
                            t.media(r, function() {
                              t.setState({ breakpoint: n });
                            });
                      });
                    var n = (0, o.default)({ minWidth: e.slice(-1)[0] });
                    (0, a.canUseDOM)() &&
                      this.media(n, function() {
                        t.setState({ breakpoint: null });
                      });
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this._responsiveMediaHandlers.forEach(function(t) {
                    y.unregister(t.query, t.handler);
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var t,
                    e,
                    n = this;
                  (t = this.state.breakpoint
                    ? "unslick" ===
                      (e = this.props.responsive.filter(function(t) {
                        return t.breakpoint === n.state.breakpoint;
                      }))[0].settings
                      ? "unslick"
                      : l({}, u.default, {}, this.props, {}, e[0].settings)
                    : l({}, u.default, {}, this.props)).centerMode &&
                    (t.slidesToScroll, (t.slidesToScroll = 1)),
                    t.fade &&
                      (t.slidesToShow,
                      t.slidesToScroll,
                      (t.slidesToShow = 1),
                      (t.slidesToScroll = 1));
                  var o = i.default.Children.toArray(this.props.children);
                  (o = o.filter(function(t) {
                    return "string" === typeof t ? !!t.trim() : !!t;
                  })),
                    t.variableWidth &&
                      (t.rows > 1 || t.slidesPerRow > 1) &&
                      (console.warn(
                        "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                      ),
                      (t.variableWidth = !1));
                  for (
                    var a = [], s = null, c = 0;
                    c < o.length;
                    c += t.rows * t.slidesPerRow
                  ) {
                    for (
                      var M = [], L = c;
                      L < c + t.rows * t.slidesPerRow;
                      L += t.slidesPerRow
                    ) {
                      for (
                        var d = [], g = L;
                        g < L + t.slidesPerRow &&
                        (t.variableWidth &&
                          o[g].props.style &&
                          (s = o[g].props.style.width),
                        !(g >= o.length));
                        g += 1
                      )
                        d.push(
                          i.default.cloneElement(o[g], {
                            key: 100 * c + 10 * L + g,
                            tabIndex: -1,
                            style: {
                              width: "".concat(100 / t.slidesPerRow, "%"),
                              display: "inline-block"
                            }
                          })
                        );
                      M.push(
                        i.default.createElement("div", { key: 10 * c + L }, d)
                      );
                    }
                    t.variableWidth
                      ? a.push(
                          i.default.createElement(
                            "div",
                            { key: c, style: { width: s } },
                            M
                          )
                        )
                      : a.push(i.default.createElement("div", { key: c }, M));
                  }
                  if ("unslick" === t) {
                    var j = "regular slider " + (this.props.className || "");
                    return i.default.createElement("div", { className: j }, a);
                  }
                  return (
                    a.length <= t.slidesToShow && (t.unslick = !0),
                    i.default.createElement(
                      r.InnerSlider,
                      A(
                        {
                          style: this.props.style,
                          ref: this.innerSliderRefHandler
                        },
                        t
                      ),
                      a
                    )
                  );
                }
              }
            ]) && L(n.prototype, s),
            M && L(n, M),
            e
          );
        })(i.default.Component);
      e.default = f;
    },
    "8Kt/": function(t, e, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(n("q1tI")),
        o = i(n("Xuae")),
        u = n("lwAK"),
        a = n("FYa8"),
        s = n("/0+H");
      function c() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [r.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              r.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
              })
            ),
          e
        );
      }
      function A(t, e) {
        return "string" === typeof e || "number" === typeof e
          ? t
          : e.type === r.default.Fragment
          ? t.concat(
              r.default.Children.toArray(e.props.children).reduce(function(
                t,
                e
              ) {
                return "string" === typeof e || "number" === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      e.defaultHead = c;
      var M = ["name", "httpEquiv", "charSet", "itemProp"];
      function l(t, e) {
        return t
          .reduce(function(t, e) {
            var n = r.default.Children.toArray(e.props.children);
            return t.concat(n);
          }, [])
          .reduce(A, [])
          .reverse()
          .concat(c(e.inAmpMode))
          .filter(
            (function() {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                i = {};
              return function(r) {
                var o = !0;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  var u = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(u) ? (o = !1) : t.add(u);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (o = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (var a = 0, s = M.length; a < s; a++) {
                      var c = M[a];
                      if (r.props.hasOwnProperty(c))
                        if ("charSet" === c) n.has(c) ? (o = !1) : n.add(c);
                        else {
                          var A = r.props[c],
                            l = i[c] || new Set();
                          l.has(A) ? (o = !1) : (l.add(A), (i[c] = l));
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function(t, e) {
            var n = t.key || e;
            return r.default.cloneElement(t, { key: n });
          });
      }
      var L = o.default();
      function d(t) {
        var e = t.children;
        return r.default.createElement(
          u.AmpStateContext.Consumer,
          null,
          function(t) {
            return r.default.createElement(
              a.HeadManagerContext.Consumer,
              null,
              function(n) {
                return r.default.createElement(
                  L,
                  {
                    reduceComponentsToState: l,
                    handleStateChange: n,
                    inAmpMode: s.isInAmpMode(t)
                  },
                  e
                );
              }
            );
          }
        );
      }
      (d.rewind = L.rewind), (e.default = d);
    },
    "9/5/": function(t, e, n) {
      (function(e) {
        var n = "Expected a function",
          i = NaN,
          r = "[object Symbol]",
          o = /^\s+|\s+$/g,
          u = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt,
          A = "object" == typeof e && e && e.Object === Object && e,
          M = "object" == typeof self && self && self.Object === Object && self,
          l = A || M || Function("return this")(),
          L = Object.prototype.toString,
          d = Math.max,
          g = Math.min,
          j = function() {
            return l.Date.now();
          };
        function N(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function y(t) {
          if ("number" == typeof t) return t;
          if (
            (function(t) {
              return (
                "symbol" == typeof t ||
                ((function(t) {
                  return !!t && "object" == typeof t;
                })(t) &&
                  L.call(t) == r)
              );
            })(t)
          )
            return i;
          if (N(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = N(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(o, "");
          var n = a.test(t);
          return n || s.test(t) ? c(t.slice(2), n ? 2 : 8) : u.test(t) ? i : +t;
        }
        t.exports = function(t, e, i) {
          var r,
            o,
            u,
            a,
            s,
            c,
            A = 0,
            M = !1,
            l = !1,
            L = !0;
          if ("function" != typeof t) throw new TypeError(n);
          function f(e) {
            var n = r,
              i = o;
            return (r = o = void 0), (A = e), (a = t.apply(i, n));
          }
          function p(t) {
            var n = t - c;
            return void 0 === c || n >= e || n < 0 || (l && t - A >= u);
          }
          function T() {
            var t = j();
            if (p(t)) return I(t);
            s = setTimeout(
              T,
              (function(t) {
                var n = e - (t - c);
                return l ? g(n, u - (t - A)) : n;
              })(t)
            );
          }
          function I(t) {
            return (s = void 0), L && r ? f(t) : ((r = o = void 0), a);
          }
          function D() {
            var t = j(),
              n = p(t);
            if (((r = arguments), (o = this), (c = t), n)) {
              if (void 0 === s)
                return (function(t) {
                  return (A = t), (s = setTimeout(T, e)), M ? f(t) : a;
                })(c);
              if (l) return (s = setTimeout(T, e)), f(c);
            }
            return void 0 === s && (s = setTimeout(T, e)), a;
          }
          return (
            (e = y(e) || 0),
            N(i) &&
              ((M = !!i.leading),
              (u = (l = "maxWait" in i) ? d(y(i.maxWait) || 0, e) : u),
              (L = "trailing" in i ? !!i.trailing : L)),
            (D.cancel = function() {
              void 0 !== s && clearTimeout(s),
                (A = 0),
                (r = c = o = s = void 0);
            }),
            (D.flush = function() {
              return void 0 === s ? a : I(j());
            }),
            D
          );
        };
      }.call(this, n("yLpj")));
    },
    "93bO": function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/merk-dfe614ebc6c0fe8c873e7ef2525b6e9d.png";
    },
    BBPU: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i,
        r = (i = n("q1tI")) && i.__esModule ? i : { default: i };
      var o = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(t) {
          return r.default.createElement(
            "ul",
            { style: { display: "block" } },
            t
          );
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(t) {
          return r.default.createElement("button", null, t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0
      };
      e.default = o;
    },
    BJfS: function(t, e) {
      t.exports = function(t) {
        return t
          .replace(/[A-Z]/g, function(t) {
            return "-" + t.toLowerCase();
          })
          .toLowerCase();
      };
    },
    Bf30: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/favicon-bb662ccc6090b3e7a359efc649fce03c.ico";
    },
    Bnag: function(t, e) {
      t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    "CQ4/": function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/NEXT-d63f6cca7640c930107f3b5153804921.png";
    },
    EbDI: function(t, e) {
      t.exports = function(t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      };
    },
    EcXA: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/about me-b8a39519f3d59104873439a64d2d70a4.png";
    },
    FYa8: function(t, e, n) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(n("q1tI"));
      e.HeadManagerContext = r.createContext(null);
    },
    FdRN: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/jwt-e4d5c53d1dbb3e7f7e51a466b74654d4.png";
    },
    IX3V: function(t, e) {
      t.exports = {
        isFunction: function(t) {
          return "function" === typeof t;
        },
        isArray: function(t) {
          return "[object Array]" === Object.prototype.toString.apply(t);
        },
        each: function(t, e) {
          for (var n = 0, i = t.length; n < i && !1 !== e(t[n], n); n++);
        }
      };
    },
    Ijbi: function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      };
    },
    KOnL: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NextArrow = e.PrevArrow = void 0);
      var i = u(n("q1tI")),
        r = u(n("TSYQ")),
        o = n("x9Za");
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t) {
        return (a =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s() {
        return (s =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(n, !0).forEach(function(e) {
                M(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function M(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function L(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function d(t, e, n) {
        return e && L(t.prototype, e), n && L(t, n), t;
      }
      function g(t, e) {
        return !e || ("object" !== a(e) && "function" !== typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function j(t) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function N(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && y(t, e);
      }
      function y(t, e) {
        return (y =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var f = (function(t) {
        function e() {
          return l(this, e), g(this, j(e).apply(this, arguments));
        }
        return (
          N(e, t),
          d(e, [
            {
              key: "clickHandler",
              value: function(t, e) {
                e && e.preventDefault(), this.props.clickHandler(t, e);
              }
            },
            {
              key: "render",
              value: function() {
                var t = { "slick-arrow": !0, "slick-prev": !0 },
                  e = this.clickHandler.bind(this, { message: "previous" });
                !this.props.infinite &&
                  (0 === this.props.currentSlide ||
                    this.props.slideCount <= this.props.slidesToShow) &&
                  ((t["slick-disabled"] = !0), (e = null));
                var n = {
                    key: "0",
                    "data-role": "none",
                    className: (0, r.default)(t),
                    style: { display: "block" },
                    onClick: e
                  },
                  o = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                return this.props.prevArrow
                  ? i.default.cloneElement(
                      this.props.prevArrow,
                      A({}, n, {}, o)
                    )
                  : i.default.createElement(
                      "button",
                      s({ key: "0", type: "button" }, n),
                      " ",
                      "Previous"
                    );
              }
            }
          ]),
          e
        );
      })(i.default.PureComponent);
      e.PrevArrow = f;
      var p = (function(t) {
        function e() {
          return l(this, e), g(this, j(e).apply(this, arguments));
        }
        return (
          N(e, t),
          d(e, [
            {
              key: "clickHandler",
              value: function(t, e) {
                e && e.preventDefault(), this.props.clickHandler(t, e);
              }
            },
            {
              key: "render",
              value: function() {
                var t = { "slick-arrow": !0, "slick-next": !0 },
                  e = this.clickHandler.bind(this, { message: "next" });
                (0, o.canGoNext)(this.props) ||
                  ((t["slick-disabled"] = !0), (e = null));
                var n = {
                    key: "1",
                    "data-role": "none",
                    className: (0, r.default)(t),
                    style: { display: "block" },
                    onClick: e
                  },
                  u = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                return this.props.nextArrow
                  ? i.default.cloneElement(
                      this.props.nextArrow,
                      A({}, n, {}, u)
                    )
                  : i.default.createElement(
                      "button",
                      s({ key: "1", type: "button" }, n),
                      " ",
                      "Next"
                    );
              }
            }
          ]),
          e
        );
      })(i.default.PureComponent);
      e.NextArrow = p;
    },
    NOMV: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/dnd-6093c7d03ef79bff5810fc25b8d1d88b.png";
    },
    Nsbk: function(t, e) {
      function n(e) {
        return (
          (t.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          n(e)
        );
      }
      t.exports = n;
    },
    OS56: function(t, e, n) {
      "use strict";
      var i;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = ((i = n("8//2")) && i.__esModule ? i : { default: i }).default;
      e.default = r;
    },
    OeEU: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/pok-0adc3b3cbb7ce06ee0cfe89930d7d806.png";
    },
    PGfF: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/graph-75072cf905b739c68cbdd076abc354ef.png";
    },
    PJYZ: function(t, e) {
      t.exports = function(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      };
    },
    QT9W: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/express-ffc4ebe122f8f00bc9f35cf41d8fba6d.png";
    },
    QXmM: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/Javascript_badge.svg-520403fd8816c6286b1263c6856f33aa.png";
    },
    Qetd: function(t, e, n) {
      "use strict";
      var i = Object.assign.bind(Object);
      (t.exports = i), (t.exports.default = t.exports);
    },
    RIqP: function(t, e, n) {
      var i = n("Ijbi"),
        r = n("EbDI"),
        o = n("Bnag");
      t.exports = function(t) {
        return i(t) || r(t) || o();
      };
    },
    RNiq: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("q1tI"),
        r = n.n(i),
        o = n("8Kt/"),
        u = n.n(o),
        a =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/sAAAAKCAMAAADcgL4pAAAAPFBMVEXq6OP////q6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPq6OPX0GwbAAAAE3RSTlMAAAMGEhshTl2Eip/AxsnM3u35NKUv7QAAAJRJREFUaN7t00kSg0AMBMEWA2Zf9f+/+kDgGJYPWFQdM1pHSXtVO6/r3FbKwjDs/82ycttXRbe5u7tvXTouMQyLYcfnn02SVA7+ayiFYVgo21//YpKURs8aE4ZhsczM7GnX+6kew7BYZmb2sKv9Uo1hWCwzu5lULFdbCgzDopvU+K0Gw7DoJk333YRhWHTTx4nohX0BmBsuPmJPLpAAAAAASUVORK5CYII=",
        s = r.a.createElement,
        c = [
          { name: "HOME" },
          { name: "ABOUT" },
          { name: "PORTFOLIO" },
          { name: "CONTACTS" }
        ],
        A = function() {
          return s(
            "section",
            { className: "Menu" },
            s(
              "div",
              { className: "head" },
              c.map(function(t) {
                var e = t.name;
                return s(
                  "div",
                  { key: e + e },
                  s(
                    "a",
                    { href: "#" + e },
                    s("div", { className: "button" }, e)
                  )
                );
              })
            ),
            s(
              "div",
              { className: "icons" },
              s(
                "div",
                { className: "icon" },
                s(
                  "a",
                  { href: "https://github.com/Automedon" },
                  s("i", {
                    className: "fa fa-github display-4 text-white",
                    "aria-hidden": "true"
                  })
                )
              ),
              s(
                "div",
                { className: "icon" },
                s(
                  "a",
                  { href: "https://www.linkedin.com/in/frontreactdeveloper/" },
                  s("i", {
                    className: "fa fa-linkedin display-4 text-white",
                    "aria-hidden": "true"
                  })
                )
              ),
              s(
                "div",
                { className: "icon" },
                s(
                  "a",
                  { href: "https://www.codewars.com/users/Valefar" },
                  s("img", {
                    src:
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTQzOS40NzMuMzJINDAuMTEzYy0yMiAwLTQwIDE4LTQwIDQwdjM5OS4zNmMwIDIyIDE4IDQwIDQwIDQwaDM5OS4zNmMyMiAwIDQwLTE4IDQwLTQwVjQwLjMyYzAtMjItMTgtNDAtNDAtNDB6bTkuMDg3IDI4NC44NzNjLTEuOTczIDEuOTQ0LTMuODUzIDMuOTg0LTYuNTI3IDYuNzU0IDMuODUgMjMuMTMzLTExLjMgMzYuODU2LTI3LjkxNiA0OS42ODYtMTcuMzA3IDEzLjM2NC0zNC42MiAyNi43MjQtNTIuMTQgMzkuODA3LTMuOTEgMi45Mi04LjY4NyA0LjY3Ny0xMy4xMDQgNi45ODctMTAuOTEzIDMwLjEzNi0xNS4wMyAzMy44NC0zOC4xNTMgMzMuMzEzLTUuNTMzIDE0Ljg3My0xNi41MiAyMC43OTctMzIuNTAzIDE2LjU5Ny0xLjA2LS4yNzctMi43MDctMS4yMTQtMy4wNi0uODU0LTE1LjU0NCAxNS45ODctMzMuMzggMy42NjctNDkuNTc0IDIuNjE0LTExLjk2Ni0uNzc3LTI0LjA5My04LjQ2LTM0Ljg3Ni0xNS4xMjctOS4xMS01LjYzMy0xNS41NTctMTUuOTktMjguNTA3LTEyLjk5My0uNDkzLjExMy0xLjItLjAxNC0xLjYwNy0uMzA3LTEyLjQ4My05LjAzNy0yNy41NzMtMy40ODctNDAuMjM2LTYuODktMTYuNDI3LTQuNDEtMzEuMDMtMTUuODktNDYuMDY3LTI0LjkwNy0yLjI2My0xLjM1Ni0yLjcxLTUuODQzLTMuODUzLTguOTMzLS43NjctMi4wNy0uNzc0LTUuNzItMS45ODctNi4xMzMtMTYuNDItNS42MDQtMTUuOC0yMS4yMTctMjEuMjMzLTMzLjcxLTUuMDU3LTExLjYyNC04LjU2Ny0yMi4wMTQtMi4xNi0zNC4wODQgMS41MTMtMi44NSAxLjQ0Ni03LjYyMy4xNjMtMTAuNjk2LTguMjgzLTE5Ljc5LTguNDYtMTkuNzI0LTYuNDI3LTM5LjQwNC0xNi45ODYtMTQuNDc2LTE5LjQ4My0yNS40Ny01LjY4LTQyLjkxLTUuNTMzLTEyLjUyMy04LjMxNi0yNS4xOCA2Ljc5LTM0LjIzMyAxLjEzLS42NzcgMS41MDctMi44OCAxLjkwNy00LjQ1MyA0LjkyNy0xOS4zMzcgMTkuNTQtMzEuNDk3IDM0Ljg3LTQxLjAwNyAxNC4wNTctOC43MTcgMzEuMTctMTAuODk3IDQwLjQzMy0yOC40ODMgMy40NjQtNi41NzcgMTQuMjA0LTEwLjQyNyAxNi4zNjQtMjAuNDM0LjUxLTIuMzYzIDMuMTM2LTQuNjkzIDUuMzYzLTYuMTgzIDExLjA3LTcuNDEgMjQtMTEuMjIgMzQuMTE3LTIxLjIyIDQuMjUtNC4xOTcgMTYuMTA2LS42OTcgMjcuMzYtLjY5NyAxNC45NS0xOC42NzMgMzUuNDgzLTMuNDkzIDU0LjQ0My0xLjA3IDguOTcgMS4xNDQgMTYuOTkgOS4xMyAyNS42NDMgMTMuNjI0IDMuODA0IDEuOTc2IDguMDQ3IDMuMjYgMTIuMjMgNC4yOTMgMi42MzQuNjUgNS44OC0uNTYzIDguMjQ0LjQ2MyAxMy4yOTMgNS43NyAyNi41MzYgOS41MyA0MS4wMSAzLjk0NyAxLjk4My0uNzYzIDYuNDMuNzQzIDcuNTY2IDIuNTU3IDkuMyAxNC44NjMgMjguMTM0IDEwLjA2MyAzOS41MiAxOS43MiAzLjI3NCAyLjc3NiAzLjc5NyA4Ljc5MyA2LjAyNCAxNC40NCAxMC44ODMgMy41NTYgMjIuNzYzIDcuODQ2IDE5Ljg5IDI0LjE1IDExLjY2MyA3LjE5NiA0LjAzIDIyLjM3MyAxMi43MzMgMzAuNzkzLTkuMTg3IDIwLjA3NyAxMi4yMyAzNi44MSA2LjIxMyA1Ny44OCAyLjg1IDEuOTczIDcuMTUgMy43OCA5LjY3NyA2Ljk4MyAzLjYyNyA0LjYwNCA5Ljc0IDEyLjU5NCA4LjIxNyAxNS4wMjQtOS4zMTQgMTQuODg2IDEwLjg3MyAzMS4yNjYtMy4xNjcgNDUuMDk2em0tMjEzLjQ0Ny0xODEuOTRjLTIyLjEyNiA4LjE5NC0yMi4zOTMgOC41ODctMTcuNDUgMjguNDI3LTEwLjc1NiA0Ljc4My0xNy4yNiAxMi41NzMtMTEuNTggMjUuNjQuNzIgMS42Ni4yOSA0Ljc2Ny0uODcgNi4xMy01LjA5IDUuOTY3LTQuMTIgMTEuNDkzLTEuNDkgMTguNDAzIDEuNDUgMy44MS0xLjQgOS4yNTctMi4zIDEzLjkgNC43MjcgNi41MDQgOS44NSAxMi43MSAxMy44OSAxOS41NTcgMS41MTcgMi41NjcgMS44OTcgOC4zNjMuMzQ0IDkuNTk3LTIuMzk3IDEuOS03LjUwNyAyLjUyNi0xMC40MSAxLjI2My0xMS41ODctNS4wMzMtMjMuNzU3LTkuNjYtMzMuNzc0LTE3LjA2LTcuODM2LTUuNzktMTMuMzIzLTE1LjExMy0xOC45MDMtMjMuNDk3LTQuMDczLTYuMTItNi42MDMtMTMuMjY2LTExLjMyNy0yMy4wODYgMS4wNS0yLjA4NyAzLjc5Ny03LjI0NyA2LjI1Ny0xMi41NCAxLjczMy0zLjcyNyA1LjI2LTguNDQ0IDQuMTkzLTExLjMwNy0zLjE0LTguNDE3IDIuODctMTQuODk3IDMuMDA0LTIxLjc1My4zNC0xNy43NTcgMTkuOTYzLTIxLjM1NCAyMy41MzYtMzUuOTMgMTguOTg0LTguMzY0IDM2LjUzNy0yMi4xMjcgNTkuNDk3LTE1LjMxNyAzLjU2IDEuMDU3IDcuNDUzLjk4NyAxMC43MDcgMS4zOCA0LjEzMyA4LjM3LS4zMTcgMTIuOTk3LTQuNTEgMTguNS0zLjgzNCA1LjAzMy01LjgyIDExLjQ3Ny04LjgxNCAxNy42OTN6bTEzNy40OTQgMTUuNDc3YzguMzg2IDcuNDI3IDE0Ljg0MyAxMy4xNDcgMjIuMTUgMTkuNjE3IDEuNzg2IDcuOTAzIDMuODMzIDE2Ljk0MyA1Ljg3NiAyNS45OGwtMy4zNzYgMi42NDZjLTE0Ljc0LTkuNjEtMzMuNDU3IDEuMDU0LTQ3LjcxLTExLjQzNi0xLjA4NC0uOTUtMy4yNDQtMS4yNDQtNC43NzctMS4wMS0xNC4yNzcgMi4xNzYtMjkuMjYgMi40ODMtNDIuNjIgNy4yOC0yNS4xOTcgOS4wNC00OC4yNSAyMi4zODMtNjQuMzIgNDguMjc2LTExLjAyMy0xMS42ODMtMTAuOTA3LTIzLjY4LTguMzg3LTM1LjU1MyAyLjQzNC0xMS40NjcgNi41MTQtMjIuNTgzIDEwLjE2LTM0LjgyNyAxMy45MzQuMTU3IDEzLjMxNC0xMi45MTYgMTcuMTE3LTIwLjY0NiAzMS0xMS45MTQgNjAuODE3LTI0LjkwNyA5NS44OS0xMi41NTQgMy4zMiA3LjcwNyA5Ljc1NyAxNS42OCAxOS45OTcgMTIuMjI3em0tMTM0LjEgMTM1Ljc1YzEyLjM3IDI2Ljc3IDMuNDIgNTAuMjQ3LTcuNzQgNzIuMzY3LTQuNzcgNi4yODMtOS41NjcgMTIuNTQzLTE0LjI5IDE4Ljg2LTEuMzE3IDEuNzYtMi40MiA1LjI5LTMuNjE3IDUuMjg2LTE2LjY4LS4wMzYtMjYuNjQgMTYuNTU0LTQ0LjIgMTYuMzc3LTE0LjA4My0uMTQtMjcuNDk3IDIuNTMtNDEuOTEtMi4zNzctMTYuODUzLTUuNzQtMzAuMzEtMTQuNDYtNDIuODgzLTI2Ljg4LTEwLjI4NC0xMC4xNTYtMTIuOTg3LTIwLjA3LTkuMjc3LTMzLjI4aDMzLjc3N2M4LjA4NiA5Ljg3NCAxOS41NCAxNS4yNjQgMzQuMzIzIDYuNDY0IDIuNDMzLTEuNDUgNi4zMTMtLjMyIDkuNDgzLS43MTcgNi40MS0uODAzIDEyLjg3Ny0xLjQ1MyAxOS4xNTQtMi44ODMgNi4yMDMtMS40MSAxMi4yMDMtMy43MTcgMTguMjk2LTUuNjEgMi4wOTctLjY1IDQuODE3LS42MTcgNi4yMTctMS45NjcgOC44MzctOC41MTMgMTcuNTM3LTE3LjE4MyAyNS45Ny0yNi4wOTcgNS4zLTUuNjA2IDEwLjA1Ny0xMS43MjYgMTYuNjk3LTE5LjU0M3pNMTAxLjg4IDEzNi4wNGMtMS41NzMgMTMuODU3LjEzNyAyNC43MTMgMTMuMTYgMzEuNDU3LTUuMTEzIDE0LjM4LTYuMDc3IDI3LjAyMyAxMS42MjcgMzIuMTU2Ljk4My4yODQgMi41MTMgMS4xMiAyLjU3IDEuOCAxLjMxMyAxNS43OTQgMTUuMTYgMTcuNDUgMjUuMjg2IDI0LjQyNyAxNi4xOTcgMTEuMTYzIDMyLjM1NyAxOC4yOSA1Mi4yMiAxNS45MyAzLjI1LS4zODcgNi43NDQgMS4yNTMgMTAuNDQgMi4wMi0yLjAwNiAxNS45MzctMTQuMTA2IDIzLjQyMy0yMy45NSAyNi45MzctMTguNjczIDYuNjYzLTM3LjYzNiAxOC44ODMtNTkuNTE2IDguMjEtNC4xODctMi4wNC0xMC42NjcuNjE2LTE0LjM1NC45NS0yMi44MzMtMTAuNjEtMzMuODAzLTMyLjU5NC01Mi45NS00Ni43MzQuOTE0LTkuOTA2IDguMjctMjEuNTItNC4yODMtMjguMjA2IDMuMDgzLTMwLjIyNCAxMy45MDMtNTMuODggMzkuNzUtNjguOTQ3em0yNzguMDggMjAzLjJjLTIuMTM3LTUuNzEzLTUuNDgtMTAuMDgzLTQuNzktMTMuNjc3IDIuMTEtMTAuOTkzLTIuMjEzLTE4LjI3LTExLjY5Ny0yNC4yOTMgNC4zNjQtMTMuNDItLjIzMy0yMy4yNi0xMi4yNS0zMC40MDMtMi43MS0xLjYxLTUuMDA2LTUuODMtNS4zODYtOS4wOTQtMS4wODctOS4yOTYtNS45NjctMTMuNzgtMTQuOTE3LTE0Ljg5Ni0yLjY1My0uMzMtNi4zMi0uNzc3LTcuNjA3LTIuNTU3LTEyLjkxMy0xNy44NDctMzIuOTM2LTE3LjUyNy01MS41OC0yMC43NjctNC40OTMtLjc4LTkuMDEzLTEuMzk2LTEzLjk4My0yLjE1NiAxLjM3My0xNi4wMyAxNC4yNDMtMjAuNjcgMjIuNjEzLTIzLjc1IDE5LjE0NC03LjA0NCA0MC4wMS0xNi42NDQgNjAuNTA0LTcuOTEgMTYuMzIgNi45NTYgMzYuMzk2IDguMTMzIDQ3LjE3IDI2LjQyIDMuMzA2IDUuNjE2IDEwLjkyNiA4LjY5IDE2LjU1IDEyLjkxbDEwLjI3NiAzMS42MDZ2MzIuODVjLTguNzYgMTMuMjQ3LTE1LjQzNiAzMS41ODQtMzQuOTAzIDQ1LjcxN3ptLTE4OS44NyA1Ni4wM2MzMS4yNDMuNDIgMzQuNTgzLTEuNjE3IDQxLjYwMy0yNC42MTMgMTMuMzEtNC40MyAyNC43NDQtMTEuMzc0IDI0LjkxLTI4LjQxNy4wMi0yLjA4IDMuMjMtNC4xMjMgNC45Ni02LjE5IDIuMDk3LTIuNTA3IDUuNzE0LTQuODMgNi4wNDQtNy41NTMgMi40NTMtMjAuMzA0IDYuODMzLTQwLjcyNy0uMjgtNjAuOTgtMi44Mi04LjAzLTUuOTc0LTE1Ljk0NC0xMC4xODQtMjcuMTIgOC4xOC44MjMgMTMuNjE3LjMxNiAxOC4yNDQgMi4wMTYgMTkuNjczIDcuMjIgMzUuNDI2IDIwLjQyNyA0Ny43NCAzNi43ODQgNS43OTMgNy42OTYgNy4zMjYgMTguNTk2IDExLjcyMyAzMC42LTQuODQgNy4xMjMtNy4wOTcgMTcuNDQ2IDEuODcgMjcuOTItMTEuODA3IDkuNTY2LTE3Ljk0IDIwLjgyLTE2LjAzNyAzMy44NjYtOS4zNTMgOC45NzctMTcuODM2IDE3LjEyNC0yOC43NyAyNy42Mi02LjA5MyAyLjcxNC0xNS44NSA3LjA1NC0yNS4wMzMgMTEuMTM3LTcuOTEzIDEuNDktMTUuNjQ3IDMuNjU3LTIzLjQ5MyA0LjIxNy03LjU1NC41MzYtMTYuNzEgMS45MDMtMjIuNTEtMS41NS05LjYzNC01Ljc0LTI1LjA5Ny0xLjQxLTMwLjc4Ny0xNy43Mzd6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
                    style: { width: "48px" },
                    alt: "CodeWars"
                  })
                )
              )
            ),
            s("img", { className: "ReverseRibbon", src: a, alt: "Ribbon" })
          );
        },
        M = n("OS56"),
        l = n.n(M),
        L = n("lwkB"),
        d = n.n(L),
        g = n("CQ4/"),
        j = n.n(g),
        N = n("46R2"),
        y = n.n(N),
        f = n("kLO9"),
        p = n.n(f),
        T = n("lUHi"),
        I = n.n(T),
        D = n("VG8Z"),
        E = n.n(D),
        S = n("ge9v"),
        h = n.n(S),
        z = n("NOMV"),
        O = n.n(z),
        C = n("OeEU"),
        x = n.n(C),
        w = n("93bO"),
        v = n.n(w),
        b = n("49ov"),
        m = n.n(b),
        k =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/wAAAAKCAMAAAA+XKVQAAAAOVBMVEUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxUgFxX9Jw0uAAAAEnRSTlMAAwYSGyFOXYSKn8DGycze7fnFJ6NfAAAAb0lEQVRo3u3Ixw2AMBREwbXJGbb/YjkgIUIH/m+OI13qft33ta/1wHFc8ZeGw7btY8gcx8W5avJtqjiOi3J59sOcOY6LcRr9MnIcF+Naf7Qcx0W4tH1zSxzHFX9S55+O47jiT1r+uXAcV/ypMYCITt5JDbrPPMvmAAAAAElFTkSuQmCC",
        Q = r.a.createElement,
        P = [
          {
            img: d.a,
            href: "https://automedon.github.io/Startuprr/",
            name: "Startuprr"
          },
          {
            img: j.a,
            href: "https://resort-with-nextjs.inzhenerintellect.now.sh/",
            name: "Hotel Rooms"
          },
          {
            img: y.a,
            href: "https://dry-crag-95171.herokuapp.com/",
            name: "Apex tracker"
          },
          {
            img: h.a,
            href: "https://automedon.github.io/Tetris/",
            name: "Tetris"
          },
          {
            img: p.a,
            href: "https://automedon.github.io/MultiTodo/",
            name: "MultiTodo"
          },
          {
            img: I.a,
            href: "https://netflix-clone.inzhenerintellect.now.sh/",
            name: "Netflix"
          },
          {
            img:
              "data:image/png;base64,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506Y6b1vRuyNmPb1LVLxtmdakK1Yv2qd0HjZ2adl6y/0WWOqvIRY2THFwbslO/GoiXXrjHFtS2IDQsVCTyFal6xM9J59IDHTZ88h+87LEgIPoHfOHXvrLocsv1jpxxrox3se8HG46yE3HDjxPJEhQD9QQKowpx5SyAwkILOQUk+5mBtIwEXB5aPnLGSGEZCac657ToHA/5WAxnvPrV2N/sfaNTW6c1sd2e1I1+jbG890vYp2+faF9DvezVKRaqH/cJMlAr0U8LGTNc9tjBY7/TSN817cOX2fekyT8N7dlD+9bUdju7d9u/QFy+x0y+YxDpbL1V7j860b2x2mWooxkXuaGg+n2bmqb457XpGvnrNCikDvBHz9xN7J5VNjXp4xu2Dy7imvLPRZNlYcSs6a9lL65JZlb+6aGb8/w7cs7Y2z8x1ybWeNLjmZNCc/aJZml9/J/ZPnTevY6/tL3+czpj33i9FZCPROQJ3tqY71ahztdSMmtmN3pDredXa6sLOPGTvWc6zdpBsHd7Tapu2z7ZjkMCVykd2rnuu9PKdkZmSK6TtmvnhauNod3blzkvULk7zealuCQC/vxK7PCI25zEWkmksP6EfM1VObxDChsRh+IFUxvPOxQSFzFRZdx1rorzQuslRz0XXF6XDQj7gKmX7HwkVjwX3gQa2FZPe6RJIOYy3EavQhF1CIYdRDouvqa5A3c9RzhnozRw8sBBBAAAEEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEECAEEEAAAQQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQIAQQoB9L4OnIId0b8BN9Q/UNGjTojqkhjw0ZeGuuc3LoY0N/+si3DdRP9q4B3X7pgAEDv/v7Q/WT/bvIp78GKt/lxDetsNMAAAAASUVORK5CYII=",
            href: "https://aqueous-river-29369.herokuapp.com/",
            name: "Authorization"
          },
          {
            img: E.a,
            href: "https://automedon.github.io/simpleChat/",
            name: "Chat"
          },
          {
            img:
              "data:image/png;base64,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",
            href: "https://automedon.github.io/rockpaperscissors/",
            name: "RockPaper"
          },
          {
            img:
              "data:image/png;base64,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R4Z4rXziie4jcK3dC726cuTIESNXDuk+90IEe1xDDTz06soRI0aMGDFiyO+6y3oAD/M1JODv/973/tV73WZNrCQgASUBCSgJSEBJQAJKAhJQEpCAulYFtljy033AbbGvg7KI7Di7lZLP51qOwZqUuo4/kC6cTkZ8BTarfUBW7FznsgwJdF3GoOiyyAaCUyf61htNqczNz0oNL7SvCohxO2spzQewTA952xjrIH+FZ73LlF7blCOBLiwhwuYda7CmEDE9udwPV+XgehuOHGJWzAgImLIOOLbQkG4lekVIPGWuQURk6yzUpVnszHAQMYnNFKUTZSeyiJB60oNGBbGmBSA93TnFn/qy7IVERzE01S2BLm1GfFSdPybXCnxrtwCkzCXaZXXYKEqtBkhMrXAnk7UAXKVATbyuxF1aRkpUPPjUT4SKWF/grrBE39jNx6AuPgCA3BiAoGiodMVBUaQEurT4JuLrWFZO46g4lx+DsDuY3gDgqiLSBwhqKptEcq2xMZqYChpj/SXQla2xw5aFbT6WlugcoqyRzhwHxQ1xAIVNE5uAmWET0+vX1GRTErRsHUxv0XqgS4szAskBGFcNBgL8cNuwdfyPV9qKAfwTweDpBtwlkOiDBJQEJKAkIAElAQkoCUhASUACSgISUBKQgJKABJQEJKAkIAElAQkoCUhASUACSgISUBKQgJKABJQEJKAkIAEJSEACEtCHIAEJKAlIQElAAkoCElASkICSgASUBCSgJCABJQEJKAlIQElAAkoCElASkICSgASUBCSgJCABJQEJKAlIQElAAkoCElASkICSgASUBCSgJCABJQEJKAlIQElAAkoCElASkICSgASUBCSgJCABJQEJKAlIQElAAkoCElASkICSgASUBCSgJCABJQEJKAlIQElAAkoCElASkICSgASUBCSgJCABJQEJKAlIQElAAkoCElASkICSgASUBCSgJCABJYGrTODmAX061+vGG2+8sW/fvn179+59yVSfG/pc3zHXt3fv3n1v6Pudr7u+zw19/rt6dXrRXr2u//r9+/bp1ad7N+DmfwKzO1Tdt8l6IgAAAABJRU5ErkJggg==",
            href: "https://automedon.github.io/Startuprr/",
            name: "Recipes"
          },
          {
            img: O.a,
            href: "https://automedon.github.io/HugeDnDList/",
            name: "Huge DND List"
          },
          {
            img: x.a,
            href: "https://automedon.github.io/Pokedx/",
            name: "Pokedx"
          },
          {
            img:
              "data:image/png;base64,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",
            href: "https://github.com/Automedon/ExampleOfCode",
            name: "Code"
          },
          {
            img: m.a,
            href: "https://automedon.github.io/CountDown/",
            name: "CountDown"
          },
          {
            img: v.a,
            href: "https://automedon.github.io/Merkury/",
            name: "Merkury"
          }
        ],
        U = Q(
          "div",
          { className: "slider" },
          Q(
            l.a,
            {
              infinite: !0,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              accessibility: !0,
              arrows: !0,
              autoplay: !0,
              autoplaySpeed: 3e3
            },
            P.map(function(t) {
              var e = t.img,
                n = t.href;
              return Q(
                "div",
                { className: "slide", key: e + n },
                Q("a", { href: n }, Q("img", { src: e, alt: "" }))
              );
            })
          )
        ),
        Y = function() {
          return Q(
            r.a.Fragment,
            null,
            Q(
              "section",
              { className: "Header" },
              Q(
                "div",
                { className: "textWrapper", id: "HOME" },
                Q(
                  "div",
                  { className: "text" },
                  Q("h1", { className: "Welcome" }, "Welcome"),
                  Q("h1", { className: "My" }, "My name is"),
                  Q("h1", { className: "Automedon" }, "Automedon"),
                  Q("h1", { className: "AND" }, "AND I'm"),
                  Q("h1", { className: "Frontend" }, "Frontend"),
                  Q("h1", { className: "Developer" }, "Developer")
                ),
                Q("div", { className: "image" }, U)
              )
            ),
            Q("img", { className: "Ribbon", src: k, alt: "Ribbon" })
          );
        },
        B = n("3V8y"),
        G = n.n(B),
        Z = n("s7m3"),
        R = n.n(Z),
        H = r.a.createElement,
        X = function() {
          var t = Object(i.useState)(!1),
            e = t[0],
            n = t[1],
            r = H(
              "div",
              { className: "grid" },
              P.slice(0, e ? P.length : 6).map(function(t) {
                var e = t.name,
                  n = t.img,
                  i = t.href;
                return H(
                  "div",
                  { className: "oneGrid", key: e + n + i },
                  H("h1", null, e),
                  H(
                    "div",
                    { className: "img" },
                    H("a", { href: i }, H("img", { src: n, alt: e }))
                  )
                );
              })
            );
          return H(
            "section",
            { className: "Portfolio" },
            H(
              "div",
              { className: "bg", id: "PORTFOLIO" },
              H("img", { src: G.a, alt: "Port" }),
              H("img", { className: "Stars", src: R.a, alt: "Stars" })
            ),
            r,
            H(
              "div",
              {
                className: "button",
                onClick: function() {
                  return n(!e);
                }
              },
              e
                ? H("a", { href: "#PORTFOLIO" }, "Close")
                : H("a", { href: "#ABOUT" }, "View more")
            ),
            H("img", { className: "ReverseRibbon", src: a, alt: "" })
          );
        },
        W = n("EcXA"),
        q = n.n(W),
        K = n("kEZy"),
        V = n.n(K),
        F = n("QXmM"),
        J = n.n(F),
        _ = n("aeMd"),
        $ = n.n(_),
        tt =
          "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0MzAiIHZpZXdCb3g9IjI2LjY5IDI4LjkgMTE3My45IDExNDQuMSIgd2lkdGg9IjI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5OS40OSAyOS43Yy0yLjIuMS0xMC41LjgtMTguNSAxLjQtMTAwIDcuNC0yMDEuNCA0NC40LTI4NC41IDEwMy44LTI3LjUgMTkuNi00OS4yIDM4LTczLjQgNjIuMkM4My45OSAzMzYuMyAyNi42OSA1MzUuNSA3MC4xOSA3MjljMTcuOCA3OS40IDU1LjggMTU5LjMgMTA2LjIgMjIzLjUgNzkuMSAxMDAuOSAxODcuNSAxNzIgMzA5LjEgMjAyLjggNDkuNSAxMi42IDkwLjYgMTcuNyAxNDIuNSAxNy43IDUxLjIgMCA4OC45LTQuNiAxMzcuNy0xNi41IDcwLjEtMTcuMiAxMzEuNy00NS41IDE5My4zLTg4LjYgNTktNDEuNCAxMTMuOS05OS40IDE1My4zLTE2MS45IDUwLjgtODAuOCA3OS43LTE3MCA4Ni44LTI2Ny45IDEuNS0yMC42LjYtNzEuNi0xLjYtOTIuNi00LjQtNDEuNy0xNS42LTk2LjctMjIuMS0xMDguMi0yLjYtNC41LTkuOS0xMC4zLTE1LjMtMTIuMi0xLjktLjYtNi4xLTEuMS05LjUtMS4xLTE1IDAtMjcuNiAxMi41LTI3LjYgMjcuMiAwIDMuNSAxLjYgMTEuOSAzLjkgMjEgMTkuOCA3NyAyMS40IDE2MS42IDQuNSAyMzguOC0yMS42IDk4LjktNjkuOCAxODYuMS0xNDIuNSAyNTcuNi0zMy45IDMzLjMtNjYuNiA1Ny45LTEwOC45IDgyLjEtOTguNyA1Ni41LTIyMS40IDc3LjktMzM2LjUgNTguNy04Ny40LTE0LjUtMTYzLjMtNDguMS0yMzUuNC0xMDQuMi0zMy45LTI2LjQtNzUuMi02OS45LTEwMC44LTEwNi4zLTQ0LjItNjIuOC03Mi0xMjktODYuNC0yMDUuOS03LjMtMzkuMi05LjgtOTEuMi02LjQtMTMzLjUgNS4yLTY0LjIgMjEuMy0xMjMuOCA0OC42LTE4MC4zIDEyLjYtMjYuMyAyMC40LTQwIDM1LjUtNjIuNyAzMC44LTQ2LjYgNzEuNi05MC4yIDExNi43LTEyNC44IDUyLjktNDAuNyAxMTUuNy03MS42IDE3OS4yLTg4LjIgMzQuMy05IDYxLjctMTMuNSA5Ni41LTE2IDEyNS45LTkgMjQ4LjMgMjcuMiAzNDggMTAzLjEgNy40IDUuNiAxNS4yIDExLjcgMTcuMyAxMy42bDMuOCAzLjMtMS41IDQuMmMtNy43IDIxLjYtMiA0OC41IDE0LjIgNjcuMyA4LjMgOS42IDIzLjMgMTguNiAzNiAyMS42IDguNyAyLjEgMjMuOCAyLjEgMzIuNiAwIDIyLjMtNS4zIDQzLjEtMjQuNCA0OS43LTQ1LjYgNy40LTIzLjcgMy4xLTQ3LjEtMTIuMS02Ni4xLTE2LjgtMjEtNDUuNy0zMC40LTcyLjQtMjMuNGwtNS44IDEuNS04LjItNi44Yy0zMy4zLTI3LjktNzMuNi01My43LTExNi03NC4yLTY4LjgtMzMuMy0xMzcuOS01MS4yLTIxNi42LTU2LTE1LjEtLjktNTAuOC0xLjEtNjAuNS0uM3oiLz48cGF0aCBkPSJNNTQwLjI5IDM1OC43Yy0xMC42IDI3LjQtMzMuNiA4Ny40LTUxLjMgMTMzLjNzLTU0IDE0MC4yLTgwLjcgMjA5LjVjLTI2LjYgNjkuMy00OC43IDEyNi4zLTQ4LjkgMTI2LjctLjMuNSAyNy44LjggNjIuMy44aDYyLjlsMy43LTEwLjNjMi4xLTUuNiA5LjUtMjUuNCAxNi40LTQ0bDEyLjYtMzMuN2g5NC40Yzc1LjIgMCA5NC40LS4zIDk0LjEtMS4zLTEtMi43LTE2LjQtNDYuNy0yNC42LTcwLjJsLTguOC0yNS02Mi41LS41LTYyLjQtLjUgNDAuNi0xMTEuOWMyNC40LTY3LjIgNDAuOS0xMTEuMiA0MS4yLTExMC4yLjQuOSAxNi42IDQ3IDM2LjEgMTAyLjRzNTEuNyAxNDYuNiA3MS41IDIwMi43bDM1LjkgMTAyIDYyLjYuM2MzNC40LjEgNjIuNiAwIDYyLjYtLjJzLTguMS0yMS41LTE4LjEtNDcuMmMtMTAtMjUuOC0zMS40LTgxLjMtNDcuNi0xMjMuNHMtMzQuNC04OS4zLTQwLjUtMTA1Yy02LTE1LjctMTYuNS00Mi45LTIzLjMtNjAuNXMtMjQuNS02My43LTM5LjUtMTAyLjUtMjguMS03Mi45LTI5LjItNzUuOGwtMS45LTUuMmgtMTM4LjV6Ii8+PC9zdmc+",
        et = n("PGfF"),
        nt = n.n(et),
        it = n("um7M"),
        rt = n.n(it),
        ot = n("bgVT"),
        ut = n.n(ot),
        at = n("TGyC"),
        st = n.n(at),
        ct = n("QT9W"),
        At = n.n(ct),
        Mt = n("FdRN"),
        lt = n.n(Mt),
        Lt = r.a.createElement,
        dt = [
          "Create a mobile responsive SPA with React",
          "Use all modern components libraries (e.g Ant Desing,Bootstrap4, Material Design)",
          "Create an architecture with Redux/MobX/GraphQL",
          "Optimize the count of renders on the page",
          "Use module bundlers (e.g Webpack4,Parcel)",
          "Wrap React components with Styled Components",
          "Route on the page with react-router-dom",
          "Make a Backend with Express.js+Mongoose",
          "Write unit tests with Jest",
          "Also, I am open to new offers and opportunities"
        ].map(function(t, e) {
          return Lt("h3", { key: t + e }, e + 1, ". ", t);
        }),
        gt = [
          {
            href: "https://www.w3.org/html/",
            img:
              "data:image/png;base64,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",
            name: "HTML5"
          },
          {
            href: "https://www.w3.org/css/",
            img:
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU2IiBoZWlnaHQ9IjY0MCIgdmlld0JveD0iMCAwIDM0MiA0ODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY4LjM3Ljk2YzIxLS4yNiA0Mi0uMDggNjMtLjA5LjA1IDYuNTcuMTUgMTMuMTQtLjA5IDE5LjcxLTE0LjU1LS4xLTI5LjA5IDAtNDMuNjMuMDktLjEgOS41NC0uMjkgMTkuMDgtLjIgMjguNjIgMTQuNi4wOSAyOS4yMS4yMyA0My44MS4xNy4xNyA1LjQuMTEgMTAuODItLjA1IDE2LjIzLTIwLjk0LS4xNC00MS44OC0uMDgtNjIuODItLjA2LjA1LTIxLjU2LjA5LTQzLjExLS4wMi02NC42N3ptNzAuNDktLjA3YzIxLjI2LS4wNCA0Mi41Mi0uMTcgNjMuNzkuMDctLjA4IDYuMjEtLjAyIDEyLjQxLS4wMiAxOC42Mi0xNS40Ny0uMDUtMzAuOTUuMDItNDYuNDIuMi4wMiAyLjQ0LjAyIDQuODggMCA3LjMyIDE1LjQ1LjI1IDMwLjg5LjI4IDQ2LjMzLjM3LjA2IDEyLjczLjAzIDI1LjQ1LjExIDM4LjE3LTIxLjI3LS4wNC00Mi41NC0uMDItNjMuODEuMDgtLjExLTUuMTQtLjEyLTEwLjI3LjAzLTE1LjQxIDE0Ljc0LjA0IDI5LjQ5LjA2IDQ0LjIzLS4wNi4wOS0zLjMxLjEzLTYuNjMuMTItOS45NC0xNC44MSAwLTI5LjYzLjA1LTQ0LjQ0LS4wNSAwLTEzLjEyIDAtMjYuMjUuMDgtMzkuMzd6bTcwLjkxLjExaDYzLjY3Yy4wOSA2LjI0LjE4IDEyLjQ4LS4wMiAxOC43MS0xNS41NC0uMDEtMzEuMDguMDgtNDYuNjIuMTEuMDQgMi41NS4xIDUuMS4yMyA3LjY1IDE1LjQ1LS4wNyAzMC45LjEyIDQ2LjM0LjI4LjE0IDEyLjY3LjI0IDI1LjM0LjA2IDM4LjAxLTIxLjI3LS4wNi00Mi41NC0uMDYtNjMuODEuMDQtLjEzLTUuMTItLjE3LTEwLjI2LjA1LTE1LjM4IDE0LjcxLjExIDI5LjQzLjA5IDQ0LjE1LS4wNS4wNC0zLjMyLjExLTYuNjQuMDgtOS45NS0xNC43Ny4xNC0yOS41NS4wNi00NC4zMy4wMSAwLTEzLjE0LjEtMjYuMjkuMi0zOS40M3oiLz48cGF0aCBmaWxsPSIjMDE3MGJhIiBkPSJNMCA5Mi40NmMxMTMuOTItLjAxIDIyNy44My0uMDIgMzQxLjc1IDAtNi4yNyA3MC44NS0xMi40NCAxNDEuNy0xOC45NyAyMTIuNTMtMy44OCA0NS4yNy03Ljg4IDkwLjU0LTEyLjEgMTM1Ljc4LTI0LjMxIDYuNDQtNDguMzggMTMuNzgtNzIuNjggMjAuMjUtMjIuMzIgNi41NS00NC44MiAxMi40OC02Ny4xNSAxOC45OGgtLjY2Yy0yMS4yNS02LjMyLTQyLjcxLTExLjg4LTYzLjk2LTE4LjItMjUuMDgtNi43Ni00OS45NC0xNC4zLTc1LjAzLTIxLjAzLTMuMjctMzMuOTEtNi4yMi02Ny44NC05LjEzLTEwMS43Ny01LjQ5LTYyLjY5LTExLjQ2LTEyNS4zNC0xNi43NC0xODguMDRDMy41IDEzMi4wOSAyLjE5IDExMy4xNiAwIDk0LjMzdi0xLjg3bTE3MS40MSAyNy45NWMtLjI0IDEzLjYxLjE4IDI3LjIzLS4yNCA0MC44My0zOS4wOC0uMTQtNzguMTctLjAzLTExNy4yNS4wMS42NyAxMy4yMSAyLjQ0IDI2LjMzIDQuMjYgMzkuNDMgMzYuMzYgMS4zNSA3Mi43Ny0uMDUgMTA5LjEzIDEuMDQtMzEuODEgMTQuMjctNjQuMDEgMjcuNzEtOTUuOTYgNDEuNjgtMi43NCAxLjIyLTUuNjcgMi4xNC04LjEyIDMuOTIuMjcgMTQuNTEgMi42MSAyOC45NCAzLjY0IDQzLjQyIDE5LjM4LS4wNyAzOC43NS0uMzggNTguMTMtLjQxIDE1LjUzLS4wOCAzMS4wNy4yMyA0Ni42LS4xMS0uNzQgMjMuODYuMjMgNDcuNzUtLjUgNzEuNjEtMTAuNDUtMS41NS0yMC43Ny0zLjg4LTMxLjE4LTUuNzMtOC4yMS0xLjc5LTE2LjYyLTIuNzItMjQuNzEtNS4wNy0xLjE1LTExLjQ1LTEuOTUtMjIuOTQtMi45Ny0zNC40LTIuMzQtLjcyLTQuODItLjY1LTcuMjQtLjY5LTExLjc0LjA3LTIzLjQ5LS4wNC0zNS4yNC4xNCAxLjE1IDIyLjAzIDMuMTMgNDQuMDMgNi41IDY1Ljg1IDExLjU4IDMuMDIgMjMuMTggNS45OCAzNC43NCA5LjEzIDE3LjcxIDQuODIgMzUuNjQgOC44MyA1My4zOCAxMy41NyAyLjExLjQ1IDQuMjQgMS4yMyA2LjQzIDEuMDUgMS4xOCAxNC40OS4yNyAyOS4wNy40OSA0My42IDQuMDktLjY2IDguMTEtMS42NyAxMi4wNi0yLjg5IDMzLjU4LTkuMTIgNjcuMTItMTguNDEgMTAwLjY4LTI3LjYyIDEuNjctMTMuMiAyLjQ1LTI2LjQ5IDMuNzctMzkuNzIgMy40OS00MC4yMiA3LjAxLTgwLjQ0IDEwLjY3LTEyMC42NSA0LjI5LTQ2IDgtOTIuMDUgMTIuMzItMTM4LjA1LTQ2LjQ3LjA0LTkyLjkzLS4wOS0xMzkuMzkuMDZ6Ii8+PGcgZmlsbD0iIzI5YTlkZiI+PHBhdGggZD0iTTE3MS40MSAxMjAuNDFjNDYuNDYtLjE1IDkyLjkyLS4wMiAxMzkuMzktLjA2LTQuMzIgNDYtOC4wMyA5Mi4wNS0xMi4zMiAxMzguMDUtMy42NiA0MC4yMS03LjE4IDgwLjQzLTEwLjY3IDEyMC42NS0xLjMyIDEzLjIzLTIuMSAyNi41Mi0zLjc3IDM5LjcyLTMzLjU2IDkuMjEtNjcuMSAxOC41LTEwMC42OCAyNy42Mi0zLjk1IDEuMjItNy45NyAyLjIzLTEyLjA2IDIuODktLjIyLTE0LjUzLjY5LTI5LjExLS40OS00My42bDEuMjEtLjI0YzMxLjIzLTcuODQgNjIuMjUtMTYuNDcgOTMuNDEtMjQuNTkgMy45NC00NC4yIDguMzEtODguMzggMTEuMDgtMTMyLjY3LTI2LjUuMTQtNTMuMDEuMDYtNzkuNTEuMTctMy44Ni4wMi03LjcyIDAtMTEuNTYtLjI4IDE0LjI2LTcuMzQgMjkuMjYtMTMuMTYgNDMuOS0xOS43MSAxNC4wNS02LjM3IDI4LjI3LTEyLjM0IDQyLjM3LTE4LjU5IDIuNzItMS4yNSA1LjYyLTIuMjkgOC4wMS00LjE1Ljk0LTMuNDUuODktNy4wNiAxLjI2LTEwLjU5LjgxLTExLjIgMi4yNS0yMi4zNCAyLjc5LTMzLjU1LTM3LjUzLS4zLTc1LjA2LS4wNC0xMTIuNi0uMjQuNDItMTMuNiAwLTI3LjIyLjI0LTQwLjgzeiIvPjxwYXRoIGQ9Ik0xNzEuNiAyOTAuMjJjMTguMTItLjMxIDM2LjI1LjE4IDU0LjM4LjA2LTEuMDEgMTguNTMtMi41NSAzNy4wMy0zLjUxIDU1LjU2LTExLjExIDMuNjMtMjIuMzkgNi43LTMzLjU5IDEwLjA2LTUuOTcgMS44Mi0xMi4xIDMuMjYtMTcuNzggNS45My43My0yMy44Ni0uMjQtNDcuNzUuNS03MS42MXoiLz48L2c+PHBhdGggZD0iTTUzLjkyIDE2MS4yNWMzOS4wOC0uMDQgNzguMTctLjE1IDExNy4yNS0uMDEuNTEgNDMtLjEzIDg2IC40MyAxMjguOTgtMTUuNTMuMzQtMzEuMDcuMDMtNDYuNi4xMS0xOS4zOC4wMy0zOC43NS4zNC01OC4xMy40MS0xLjAzLTE0LjQ4LTMuMzctMjguOTEtMy42NC00My40MiAyLjQ1LTEuNzggNS4zOC0yLjcgOC4xMi0zLjkyIDMxLjk1LTEzLjk3IDY0LjE1LTI3LjQxIDk1Ljk2LTQxLjY4LTM2LjM2LTEuMDktNzIuNzcuMzEtMTA5LjEzLTEuMDQtMS44Mi0xMy4xLTMuNTktMjYuMjItNC4yNi0zOS40M3ptMTUuODQgMTU0LjgzYzExLjc1LS4xOCAyMy41LS4wNyAzNS4yNC0uMTQgMi40Mi4wNCA0LjktLjAzIDcuMjQuNjkgMS4wMiAxMS40NiAxLjgyIDIyLjk1IDIuOTcgMzQuNCA4LjA5IDIuMzUgMTYuNSAzLjI4IDI0LjcxIDUuMDcgMTAuNDEgMS44NSAyMC43MyA0LjE4IDMxLjE4IDUuNzMgMSAxNC41Mi0uNzUgMjkuMTQuOTIgNDMuNjFsLTEuMjEuMjRjLTIuMTkuMTgtNC4zMi0uNi02LjQzLTEuMDUtMTcuNzQtNC43NC0zNS42Ny04Ljc1LTUzLjM4LTEzLjU3LTExLjU2LTMuMTUtMjMuMTYtNi4xMS0zNC43NC05LjEzLTMuMzctMjEuODItNS4zNS00My44Mi02LjUtNjUuODV6IiBmaWxsPSIjY2ZjZmNmIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3MS4xNyAxNjEuMjRjMzcuNTQuMiA3NS4wNy0uMDYgMTEyLjYuMjQtLjU0IDExLjIxLTEuOTggMjIuMzUtMi43OSAzMy41NS0uMzcgMy41My0uMzIgNy4xNC0xLjI2IDEwLjU5LTIuMzkgMS44Ni01LjI5IDIuOS04LjAxIDQuMTUtMTQuMSA2LjI1LTI4LjMyIDEyLjIyLTQyLjM3IDE4LjU5LTE0LjY0IDYuNTUtMjkuNjQgMTIuMzctNDMuOSAxOS43MSAzLjg0LjI4IDcuNy4zIDExLjU2LjI4IDI2LjUtLjExIDUzLjAxLS4wMyA3OS41MS0uMTctMi43NyA0NC4yOS03LjE0IDg4LjQ3LTExLjA4IDEzMi42Ny0zMS4xNiA4LjEyLTYyLjE4IDE2Ljc1LTkzLjQxIDI0LjU5LTEuNjctMTQuNDcuMDgtMjkuMDktLjkyLTQzLjYxIDUuNjgtMi42NyAxMS44MS00LjExIDE3Ljc4LTUuOTMgMTEuMi0zLjM2IDIyLjQ4LTYuNDMgMzMuNTktMTAuMDYuOTYtMTguNTMgMi41LTM3LjAzIDMuNTEtNTUuNTYtMTguMTMuMTItMzYuMjYtLjM3LTU0LjM4LS4wNi0uNTYtNDIuOTguMDgtODUuOTgtLjQzLTEyOC45OHoiLz48L3N2Zz4=",
            name: "CSS3"
          },
          {
            href: "https://www.w3schools.com/js/",
            img: J.a,
            name: "JavaScript"
          },
          {
            href: "https://www.typescriptlang.org/",
            img:
              "data:image/png;base64,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",
            name: "TypeScript"
          },
          {
            href: "https://reactjs.org",
            img:
              "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1Ni4yMTEgMzg0LjA4NWMtMTcuMjg4LTYuNjA3LTM2LjIwNy0xMi44MTgtNTYuMjg0LTE4LjQ3NiA1LjE0NC0yMC4yMjUgOS4yMjctMzkuNzIgMTIuMTQzLTU3Ljk4MiAxNi41My0xMDMuNDM3LTEuNjgtMTc2LjE3My01MS4yNy0yMDQuODAzLTE0LjQ3Mi04LjM1Ny0zMS4wNjQtMTIuNTk2LTQ5LjMwNC0xMi41OTYtNDMuNjc2IDAtOTYuODIyIDI0LjQxMy0xNTMuNjkgNzAuNi0xNC4zNjMgMTEuNjY0LTI5LjIwNCAyNC45NDMtNDQuMTQxIDM5LjUwMS0xNC45NTUtMTQuNTcxLTI5Ljc5Ni0yNy44NTUtNDQuMTQyLTM5LjUwNi01Ni44NzItNDYuMTgyLTExMC4wMjItNzAuNTk1LTE1My42OTQtNzAuNTk1LTE4LjI0IDAtMzQuODMxIDQuMjQtNDkuMzEyIDEyLjU5Ni00OS41OSAyOC42My02Ny43OTYgMTAxLjM2Ni01MS4yNjEgMjA0Ljc5OSAyLjkxNiAxOC4yNjIgNi45OTggMzcuNzYgMTIuMTM4IDU3Ljk4Ni0yMC4wODEgNS42NTgtMzkuMDA1IDExLjg3My01Ni4yOTMgMTguNDgtOTcuODQgMzcuNDA0LTE1MS43MjcgODkuNTM2LTE1MS43MjcgMTQ2LjggMCA1Ny4yNiA1My44ODcgMTA5LjM5NiAxNTEuNzMyIDE0Ni44IDE3LjI3OCA2LjYwNyAzNi4yMDcgMTIuODE4IDU2LjI4OCAxOC40OC01LjEzNSAyMC4xOTUtOS4yMTggMzkuNjg5LTEyLjEzOCA1Ny45NzgtMTYuNTQgMTAzLjQ0MSAxLjY2NyAxNzYuMTczIDUxLjI2MSAyMDQuODA3IDE0LjQ3MiA4LjM1NyAzMS4wNjMgMTIuNTkyIDQ5LjMwNCAxMi41OTIgNDMuNjc1IDAgOTYuODIyLTI0LjQwOCAxNTMuNjk0LTcwLjU5NSAxNC4zNTgtMTEuNjYgMjkuMi0yNC45NDMgNDQuMTUtMzkuNTEgMTQuOTM3IDE0LjU1OCAyOS43NzggMjcuODM3IDQ0LjE0NiAzOS41MDUgNTYuODY3IDQ2LjE4MyAxMTAuMDEzIDcwLjYgMTUzLjY5NCA3MC42IDE4LjI0IDAgMzQuODI3LTQuMjQgNDkuMzAzLTEyLjU5NiA0OS41OS0yOC42MyA2Ny43OTYtMTAxLjM2NiA1MS4yNjYtMjA0LjgwMy0yLjkyLTE4LjI4NS03LjAwMy0zNy43ODctMTIuMTM5LTU3Ljk4MiAyMC4wNTYtNS42NTQgMzguOTgtMTEuODY1IDU2LjI4LTE4LjQ3NiA5Ny44NDUtMzcuNDA0IDE1MS43MzEtODkuNTM2IDE1MS43MzEtMTQ2LjgtLjAwNC01Ny4yNjgtNTMuODktMTA5LjQwNS0xNTEuNzM1LTE0Ni44MDR6bS0xNDQuOTktMjU0LjA5YzExLjM2OSAwIDIxLjM2NiAyLjQ0MiAyOS43MDUgNy4yNTYgNDEuMTYgMjMuNzY0IDQ5LjA5OSAxMDcuNDE2IDIwLjg0IDIxOC42MDktNDEuODg4LTkuNjE0LTg3LjI0OC0xNi43LTEzNC44ODgtMjEuMDctMjcuNTk4LTM5LjA3LTU2LjQxNS03NC44MTItODUuNjktMTA2LjI4OCA2NC4yOC02Mi42MyAxMjYuMTY2LTk4LjUwNiAxNzAuMDM0LTk4LjUwNnpNMzM5LjM5NCA2MzEuNDk0YTEyNzQuMjA3IDEyNzQuMjA3IDAgMDAzMi4xNzIgNTIuNjgxYy0zMy4zMjEtMy45OTUtNjUuMzM3LTkuNDQtOTUuMjgtMTYuMjEyIDkuMS0yOS4zMDUgMjAuMzktNTkuNzU0IDMzLjYtOTAuNjJhMTI3MC4yOTkgMTI3MC4yOTkgMCAwMDI5LjUwOCA1NC4xNTF6bS02My4xMDUtMjM3LjY4NWMyOS45NTMtNi43NzIgNjEuOTY5LTEyLjIyMSA5NS4yNzctMTYuMjA4YTEyNzIuMTE0IDEyNzIuMTE0IDAgMDAtMzIuMTc2IDUyLjY3NiAxMjcxLjU3IDEyNzEuNTcgMCAwMC0yOS41MDUgNTQuMTUyYy0xMy4xOTYtMzAuODU0LTI0LjQ4Ni02MS4yOTgtMzMuNTk2LTkwLjYyem01NC43NjYgMTM3LjA2OGExMjQ4LjUwMiAxMjQ4LjUwMiAwIDAxNDIuNzctODAuNzI3IDEyNDguOTQ2IDEyNDguOTQ2IDAgMDE0OC41NTUtNzcuNDQxIDEyNTEuMzYyIDEyNTEuMzYyIDAgMDE5MS4yODEtMy4yOTVjMzAuODEgMCA2MS41MTYgMS4xMSA5MS4yOSAzLjNhMTI0Ny41MzIgMTI0Ny41MzIgMCAwMTQ4LjU1IDc3LjQzNiAxMjQ5LjY1MSAxMjQ5LjY1MSAwIDAxNDIuNzc2IDgwLjczNiAxMjQ3LjcyNyAxMjQ3LjcyNyAwIDAxLTQyLjc3NSA4MC43NCAxMjQ3LjQxNCAxMjQ3LjQxNCAwIDAxLTQ4LjU1NSA3Ny40NDFjLTI5Ljc3IDIuMTktNjAuNDc1IDMuMjk1LTkxLjI4NiAzLjI5NS0zMC44MDUgMC02MS41MDctMS4xMDYtOTEuMjc3LTMuMjk1YTEyNTAuMDM0IDEyNTAuMDM0IDAgMDEtNDguNTU0LTc3LjQ0MSAxMjQ3LjQyMyAxMjQ3LjQyMyAwIDAxLTQyLjc3NS04MC43NDl6bTM1Ni44NyAxMDAuNjE3YTEyNjMuMDQ4IDEyNjMuMDQ4IDAgMDAyOS41MTMtNTQuMTU2YzEzLjIxIDMwLjg3MSAyNC41MDMgNjEuMzI1IDMzLjYwNCA5MC42MjUtMjkuOTQ0IDYuNzcyLTYxLjk2IDEyLjIxNy05NS4yODYgMTYuMjEyYTEyNzIuNDc1IDEyNzIuNDc1IDAgMDAzMi4xNjktNTIuNjh6bS4wMDQtMjAxLjIyMUExMjcxLjk3IDEyNzEuOTcgMCAwMDY1NS43NiAzNzcuNmMzMy4zMTMgMy45OTEgNjUuMzI4IDkuNDQgOTUuMjgxIDE2LjIxMi05LjExNCAyOS4zMjYtMjAuNDA0IDU5Ljc3NS0zMy42MDQgOTAuNjJhMTI2OC44ODQgMTI2OC44ODQgMCAwMC0yOS41MS01NC4xNnptLTExMi42MDQtOTkuMDlhMTI3MS41NjUgMTI3MS41NjUgMCAwMC02MS42NjQtMS41MjNjLTIwLjIyNSAwLTQwLjk0Mi41MTMtNjEuNjU1IDEuNTIzIDIwLjEzLTI2Ljg3MSA0MC44NDctNTEuODY3IDYxLjY2LTc0LjM4MSAyMC44MTcgMjIuNTI4IDQxLjUzNCA0Ny41MTkgNjEuNjYgNzQuMzgxem0tMjg4LjkzLTE5My45MjdjOC4zNC00LjgxMyAxOC4zMzMtNy4yNTUgMjkuNzA1LTcuMjU1IDQzLjg2NyAwIDEwNS43NjIgMzUuODc2IDE3MC4wMzcgOTguNTEtMjkuMjcgMzEuNDY4LTU4LjA4NiA2Ny4yMS04NS42ODkgMTA2LjI4NS00Ny42NDUgNC4zNy05My4wMDUgMTEuNDU1LTEzNC44ODMgMjEuMDY1LTI4LjI2NC0xMTEuMTkzLTIwLjMzLTE5NC44NDEgMjAuODMtMjE4LjYwNXpNNTkuMTMgNTMwLjg4NWMwLTQ3LjU4NCA2OC40Ny05Ni4zIDE3OC44OS0xMjcuNDA2IDEyLjYxNyA0MS4xMDMgMjkuMTY5IDgzLjk1MiA0OS4yMTYgMTI3LjQwNi0yMC4wNDMgNDMuNDUzLTM2LjU5NSA4Ni4zMDItNDkuMjE3IDEyNy40MDYtMTEwLjQxOC0zMS4xMDYtMTc4Ljg5LTc5LjgyMi0xNzguODktMTI3LjQwNnpNMzE2LjA5NSA5MzEuNzdjLTExLjM2OCAwLTIxLjM2MS0yLjQ0Mi0yOS43LTcuMjU2LTQxLjE2NS0yMy43NjMtNDkuMS0xMDcuNDE1LTIwLjg0LTIxOC42MDkgNDEuODk2IDkuNjE5IDg3LjI2IDE2LjcwNCAxMzQuODkyIDIxLjA3IDI3LjU5NCAzOS4wNjIgNTYuNDExIDc0LjgwOCA4NS42OSAxMDYuMjgtNjQuMjggNjIuNjM4LTEyNi4xNyA5OC41MTUtMTcwLjA0MiA5OC41MTV6TTQ1Mi4wMSA3MzAuNTg3YzIwLjcxMiAxLjAxIDQxLjQyNSAxLjUyOCA2MS42NSAxLjUyOCAyMC4yMyAwIDQwLjk0Ny0uNTE0IDYxLjY2LTEuNTI4LTIwLjExMiAyNi44NS00MC44MyA1MS44NDUtNjEuNjU1IDc0LjM4Mi0yMC44MjItMjIuNTI4LTQxLjUzNS00Ny41Mi02MS42NTUtNzQuMzgyem0yODguOTEyIDE5My45MjdjLTguMzQgNC44MTQtMTguMzMyIDcuMjU2LTI5LjcgNy4yNTYtNDMuODY4IDAtMTA1Ljc1OC0zNS44NzctMTcwLjAzNy05OC41MTUgMjkuMjc4LTMxLjQ3MiA1OC4wOTUtNjcuMjE4IDg1LjY4OC0xMDYuMjggNDcuNjQ1LTQuMzY2IDkzLjAxLTExLjQ1NSAxMzQuODkyLTIxLjA3NCAyOC4yNjQgMTExLjIwMiAyMC4zMjYgMTk0Ljg1LTIwLjg0MyAyMTguNjEzem00OC4zOS0yNjYuMjIzYy0xMi42MjctNDEuMTI2LTI5LjE4My04My45NzQtNDkuMjI2LTEyNy40MDYgMjAuMDUyLTQzLjQ2NyAzNi42MDMtODYuMzE2IDQ5LjIyLTEyNy40MDJDODk5LjcwOSA0MzQuNTkgOTY4LjE4OSA0ODMuMzEgOTY4LjE4OSA1MzAuODljLS4wMDUgNDcuNTcxLTY4LjQ4IDk2LjI5MS0xNzguODc3IDEyNy40MDJ6IiBmaWxsPSIjMDBCREZGIi8+PHBhdGggZD0iTTQyMy41MDEgNTMwLjgwMmE4OC40NCA4OC40NCAwIDEwMTc2Ljg4IDAgODguNDQgODguNDQgMCAxMC0xNzYuODggMHoiIGZpbGw9IiMwMEJERkYiLz48L3N2Zz4=",
            name: "React"
          },
          {
            href: "https://redux.js.org",
            img:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSIjNzY0QUJDIj48cGF0aCBkPSJNNjUuNiA2NS40YzIuOS0uMyA1LjEtMi44IDUtNS44LS4xLTMtMi42LTUuNC01LjYtNS40aC0uMmMtMy4xLjEtNS41IDIuNy01LjQgNS44LjEgMS41LjcgMi44IDEuNiAzLjctMy40IDYuNy04LjYgMTEuNi0xNi40IDE1LjctNS4zIDIuOC0xMC44IDMuOC0xNi4zIDMuMS00LjUtLjYtOC0yLjYtMTAuMi01LjktMy4yLTQuOS0zLjUtMTAuMi0uOC0xNS41IDEuOS0zLjggNC45LTYuNiA2LjgtOC0uNC0xLjMtMS0zLjUtMS4zLTUuMS0xNC41IDEwLjUtMTMgMjQuNy04LjYgMzEuNCAzLjMgNSAxMCA4LjEgMTcuNCA4LjEgMiAwIDQtLjIgNi0uNyAxMi44LTIuNSAyMi41LTEwLjEgMjgtMjEuNHoiLz48cGF0aCBkPSJNODMuMiA1M2MtNy42LTguOS0xOC44LTEzLjgtMzEuNi0xMy44SDUwYy0uOS0xLjgtMi44LTMtNC45LTNoLS4yYy0zLjEuMS01LjUgMi43LTUuNCA1LjguMSAzIDIuNiA1LjQgNS42IDUuNGguMmMyLjItLjEgNC4xLTEuNSA0LjktMy40SDUyYzcuNiAwIDE0LjggMi4yIDIxLjMgNi41IDUgMy4zIDguNiA3LjYgMTAuNiAxMi44IDEuNyA0LjIgMS42IDguMy0uMiAxMS44LTIuOCA1LjMtNy41IDguMi0xMy43IDguMi00IDAtNy44LTEuMi05LjgtMi4xLTEuMSAxLTMuMSAyLjYtNC41IDMuNiA0LjMgMiA4LjcgMy4xIDEyLjkgMy4xIDkuNiAwIDE2LjctNS4zIDE5LjQtMTAuNiAyLjktNS44IDIuNy0xNS44LTQuOC0yNC4zeiIvPjxwYXRoIGQ9Ik0zMi40IDY3LjFjLjEgMyAyLjYgNS40IDUuNiA1LjRoLjJjMy4xLS4xIDUuNS0yLjcgNS40LTUuOC0uMS0zLTIuNi01LjQtNS42LTUuNGgtLjJjLS4yIDAtLjUgMC0uNy4xLTQuMS02LjgtNS44LTE0LjItNS4yLTIyLjIuNC02IDIuNC0xMS4yIDUuOS0xNS41IDIuOS0zLjcgOC41LTUuNSAxMi4zLTUuNiAxMC42LS4yIDE1LjEgMTMgMTUuNCAxOC4zIDEuMy4zIDMuNSAxIDUgMS41LTEuMi0xNi4yLTExLjItMjQuNi0yMC44LTI0LjYtOSAwLTE3LjMgNi41LTIwLjYgMTYuMS00LjYgMTIuOC0xLjYgMjUuMSA0IDM0LjgtLjUuNy0uOCAxLjgtLjcgMi45eiIvPjwvZz48L3N2Zz4=",
            name: "Redux"
          },
          {
            href: "https://ant.design/",
            img:
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjYyLjEwMiUiIHkxPSIwJSIgeDI9IjEwOC4xOTclIiB5Mj0iMzcuODY0JSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiM0Mjg1RUIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMkVDN0ZGIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjQ0JSIgeTE9IjAlIiB4Mj0iNTQuMDQzJSIgeTI9IjEwOC40NTclIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iIzI5Q0RGRiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNDhFRkYiIG9mZnNldD0iMzcuODYlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzBBNjBGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjY5LjY5MSUiIHkxPSItMTIuOTc0JSIgeDI9IjE2LjcyMyUiIHkyPSIxMTcuMzkxJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjQxLjQ3MyUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjUxRDJDIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNjguMTI4JSIgeTE9Ii0zNS42OTElIiB4Mj0iMzAuNDQlIiB5Mj0iMTE0Ljk0MyUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjRkE4RTdEIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI1MS4yNjQlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y1MUQyQyIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik05MS41ODggNC4xNzdMNC4xOCA5MS41MTNhMTEuOTgxIDExLjk4MSAwIDAwMCAxNi45NzRsODcuNDA4IDg3LjMzNmExMi4wMDUgMTIuMDA1IDAgMDAxNi45ODkgMGwzNi42NDgtMzYuNjE4YzQuMjA5LTQuMjA1IDQuMjA5LTExLjAyMyAwLTE1LjIyOC00LjIwOC00LjIwNS0xMS4wMzEtNC4yMDUtMTUuMjQgMGwtMjcuNzgzIDI3Ljc2Yy0xLjE3IDEuMTY5LTIuOTQ1IDEuMTY5LTQuMTE0IDBsLTY5LjgwMi02OS43NDRjLTEuMTctMS4xNjktMS4xNy0yLjk0MiAwLTQuMTFsNjkuODAyLTY5Ljc0NWMxLjE3LTEuMTY5IDIuOTQ0LTEuMTY5IDQuMTE0IDBsMjcuNzgzIDI3Ljc2YzQuMjA5IDQuMjA1IDExLjAzMiA0LjIwNSAxNS4yNCAwIDQuMjA5LTQuMjA1IDQuMjA5LTExLjAyMiAwLTE1LjIyN0wxMDguNTgxIDQuMDU2Yy00LjcxOS00LjU5NC0xMi4zMTItNC41NTctMTYuOTkzLjEyeiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik05MS41ODggNC4xNzdMNC4xOCA5MS41MTNhMTEuOTgxIDExLjk4MSAwIDAwMCAxNi45NzRsODcuNDA4IDg3LjMzNmExMi4wMDUgMTIuMDA1IDAgMDAxNi45ODkgMGwzNi42NDgtMzYuNjE4YzQuMjA5LTQuMjA1IDQuMjA5LTExLjAyMyAwLTE1LjIyOC00LjIwOC00LjIwNS0xMS4wMzEtNC4yMDUtMTUuMjQgMGwtMjcuNzgzIDI3Ljc2Yy0xLjE3IDEuMTY5LTIuOTQ1IDEuMTY5LTQuMTE0IDBsLTY5LjgwMi02OS43NDRjLTEuMTctMS4xNjktMS4xNy0yLjk0MiAwLTQuMTFsNjkuODAyLTY5Ljc0NWMyLjkxMi0yLjUxIDcuNjY0LTcuNTk2IDE0LjY0Mi04Ljc4NiA1LjE4Ni0uODgzIDEwLjg1NSAxLjA2MiAxNy4wMDkgNS44MzdMMTA4LjU4IDQuMDU2Yy00LjcxOS00LjU5NC0xMi4zMTItNC41NTctMTYuOTkzLjEyeiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Ik0xNTMuNjg2IDEzNS44NTVjNC4yMDggNC4yMDUgMTEuMDMxIDQuMjA1IDE1LjI0IDBsMjcuMDM0LTI3LjAxMmExMS45OCAxMS45OCAwIDAwMC0xNi45NzRsLTI3LjI3LTI3LjE1Yy00LjIxOC00LjItMTEuMDQzLTQuMTk1LTE1LjI1NC4wMTMtNC4yMDkgNC4yMDUtNC4yMDkgMTEuMDIyIDAgMTUuMjI3bDE4LjQxOCAxOC40MDNjMS4xNyAxLjE2OSAxLjE3IDIuOTQzIDAgNC4xMTFsLTE4LjE2OCAxOC4xNTRjLTQuMjA5IDQuMjA1LTQuMjA5IDExLjAyMyAwIDE1LjIyOHoiIGZpbGw9InVybCgjYykiLz48L2c+PGVsbGlwc2UgZmlsbD0idXJsKCNkKSIgY3g9IjEwMC41MTkiIGN5PSIxMDAuNDM3IiByeD0iMjMuNiIgcnk9IjIzLjU4MSIvPjwvZz48L3N2Zz4=",
            name: "Antd"
          },
          { href: "https://getbootstrap.com", img: $.a, name: "Bootstrap" },
          {
            href: "https://jestjs.io",
            img:
              "data:image/png;base64,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",
            name: "Jest"
          },
          {
            href: "https://webpack.js.org",
            img:
              "data:image/png;base64,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",
            name: "Webpack"
          },
          {
            href: "https://www.restapitutorial.com/lessons/httpmethods.html",
            img: rt.a,
            name: "RESTAPI"
          },
          {
            href: "https://www.apollographql.com/docs/react/v3.0-beta",
            img: tt,
            name: "Apollo-Client"
          },
          { href: "https://nextjs.org", img: ut.a, name: "NEXT.js" }
        ],
        jt = [
          { href: "https://nodejs.org/en/", img: st.a, name: "Node.js" },
          { href: "hhttp://expressjs.com/", img: At.a, name: "Express.js" },
          {
            href: "https://mongoosejs.com",
            img:
              "data:image/jpeg;base64,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",
            name: "Mongoose"
          },
          {
            href: "https://www.mongodb.com",
            img:
              "data:image/png;base64,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",
            name: "MongoDB"
          },
          { href: "https://www.jwt.io", img: lt.a, name: "JWT" },
          {
            href: "https://www.apollographql.com/docs/apollo-server/",
            img: tt,
            name: "Apollo-Server"
          },
          { href: "https://graphql.org/", img: nt.a, name: "GraphQL" }
        ],
        Nt = gt.map(function(t) {
          var e = t.href,
            n = t.img,
            i = t.name;
          return Lt(
            "div",
            { className: "img", key: e + i + n },
            Lt(
              "a",
              { href: e },
              Lt("img", { src: n, alt: n }),
              Lt("h5", null, i)
            )
          );
        }),
        yt = jt.map(function(t) {
          var e = t.href,
            n = t.img,
            i = t.name;
          return Lt(
            "div",
            { className: "img", key: e + i + n + e },
            Lt(
              "a",
              { href: e },
              Lt("img", { src: n, alt: n }),
              Lt("h5", null, i)
            )
          );
        }),
        ft = function() {
          return Lt(
            "section",
            { className: "AboutMe" },
            Lt(
              "div",
              { className: "head", id: "ABOUT" },
              Lt(
                "div",
                { className: "about" },
                Lt("img", { src: q.a, alt: "about" })
              ),
              Lt(
                "div",
                { className: "star2" },
                Lt("img", { src: V.a, alt: "star2" })
              )
            ),
            Lt(
              "div",
              { className: "text" },
              Lt("h1", null, "I am a Middle Frontend Developer"),
              Lt("div", { className: "h1" }, Lt("h1", null, "I can:")),
              dt
            ),
            Lt(
              "div",
              { className: "stack" },
              Lt("h1", null, "My Frontend Stack"),
              Lt("div", { className: "front" }, Nt),
              Lt("h1", null, "My Backend Stack"),
              Lt("div", { className: "back" }, yt)
            )
          );
        },
        pt = n("ze6v"),
        Tt = n.n(pt),
        It = r.a.createElement,
        Dt = function() {
          return It(
            r.a.Fragment,
            null,
            It("img", { className: "Ribbon", src: k, alt: "Ribbon" }),
            It(
              "section",
              { className: "Contacts", id: "CONTACTS" },
              It(
                "div",
                { className: "bg" },
                It("img", { src: Tt.a, alt: "contacts" })
              ),
              It(
                "div",
                { className: "mail" },
                It("h1", null, "Gmail"),
                It("h2", null, "inzhener.intellect@gmail.com")
              )
            )
          );
        },
        Et = n("Bf30"),
        St = n.n(Et),
        ht = r.a.createElement;
      e.default = function() {
        return ht(
          r.a.Fragment,
          null,
          ht(
            u.a,
            null,
            ht("link", { rel: "icon", type: "image/x-icon", href: St.a }),
            ht("title", null, "Automedon Portfolio")
          ),
          ht(
            "section",
            { className: "index" },
            ht(A, null),
            ht(Y, null),
            ht(X, null),
            ht(ft, null),
            ht(Dt, null)
          )
        );
      };
    },
    SksO: function(t, e) {
      function n(e, i) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          n(e, i)
        );
      }
      t.exports = n;
    },
    TGyC: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/node_js-068c87a1c805533af9fc7a7e2809b304.png";
    },
    TSYQ: function(t, e, n) {
      var i;
      !(function() {
        "use strict";
        var n = {}.hasOwnProperty;
        function r() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            if (i) {
              var o = typeof i;
              if ("string" === o || "number" === o) t.push(i);
              else if (Array.isArray(i) && i.length) {
                var u = r.apply(null, i);
                u && t.push(u);
              } else if ("object" === o)
                for (var a in i) n.call(i, a) && i[a] && t.push(a);
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((r.default = r), (t.exports = r))
          : void 0 ===
              (i = function() {
                return r;
              }.apply(e, [])) || (t.exports = i);
      })();
    },
    "UZv/": function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Track = void 0);
      var i = u(n("q1tI")),
        r = u(n("TSYQ")),
        o = n("x9Za");
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t) {
        return (a =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s() {
        return (s =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function A(t, e) {
        return !e || ("object" !== a(e) && "function" !== typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function M(t) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function L(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(n, !0).forEach(function(e) {
                g(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : L(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function g(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var j = function(t) {
          var e, n, i, r, o;
          return (
            (i =
              (o = t.rtl ? t.slideCount - 1 - t.index : t.index) < 0 ||
              o >= t.slideCount),
            t.centerMode
              ? ((r = Math.floor(t.slidesToShow / 2)),
                (n = (o - t.currentSlide) % t.slideCount === 0),
                o > t.currentSlide - r - 1 &&
                  o <= t.currentSlide + r &&
                  (e = !0))
              : (e =
                  t.currentSlide <= o && o < t.currentSlide + t.slidesToShow),
            {
              "slick-slide": !0,
              "slick-active": e,
              "slick-center": n,
              "slick-cloned": i,
              "slick-current": o === t.currentSlide
            }
          );
        },
        N = function(t, e) {
          return t.key || e;
        },
        y = function(t) {
          var e,
            n = [],
            u = [],
            a = [],
            s = i.default.Children.count(t.children),
            c = (0, o.lazyStartIndex)(t),
            A = (0, o.lazyEndIndex)(t);
          return (
            i.default.Children.forEach(t.children, function(M, l) {
              var L,
                g = {
                  message: "children",
                  index: l,
                  slidesToScroll: t.slidesToScroll,
                  currentSlide: t.currentSlide
                };
              L =
                !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(l) >= 0)
                  ? M
                  : i.default.createElement("div", null);
              var y = (function(t) {
                  var e = {};
                  return (
                    (void 0 !== t.variableWidth && !1 !== t.variableWidth) ||
                      (e.width = t.slideWidth),
                    t.fade &&
                      ((e.position = "relative"),
                      t.vertical
                        ? (e.top = -t.index * parseInt(t.slideHeight))
                        : (e.left = -t.index * parseInt(t.slideWidth)),
                      (e.opacity = t.currentSlide === t.index ? 1 : 0),
                      (e.transition =
                        "opacity " +
                        t.speed +
                        "ms " +
                        t.cssEase +
                        ", visibility " +
                        t.speed +
                        "ms " +
                        t.cssEase),
                      (e.WebkitTransition =
                        "opacity " +
                        t.speed +
                        "ms " +
                        t.cssEase +
                        ", visibility " +
                        t.speed +
                        "ms " +
                        t.cssEase)),
                    e
                  );
                })(d({}, t, { index: l })),
                f = L.props.className || "",
                p = j(d({}, t, { index: l }));
              if (
                (n.push(
                  i.default.cloneElement(L, {
                    key: "original" + N(L, l),
                    "data-index": l,
                    className: (0, r.default)(p, f),
                    tabIndex: "-1",
                    "aria-hidden": !p["slick-active"],
                    style: d({ outline: "none" }, L.props.style || {}, {}, y),
                    onClick: function(e) {
                      L.props && L.props.onClick && L.props.onClick(e),
                        t.focusOnSelect && t.focusOnSelect(g);
                    }
                  })
                ),
                t.infinite && !1 === t.fade)
              ) {
                var T = s - l;
                T <= (0, o.getPreClones)(t) &&
                  s !== t.slidesToShow &&
                  ((e = -T) >= c && (L = M),
                  (p = j(d({}, t, { index: e }))),
                  u.push(
                    i.default.cloneElement(L, {
                      key: "precloned" + N(L, e),
                      "data-index": e,
                      tabIndex: "-1",
                      className: (0, r.default)(p, f),
                      "aria-hidden": !p["slick-active"],
                      style: d({}, L.props.style || {}, {}, y),
                      onClick: function(e) {
                        L.props && L.props.onClick && L.props.onClick(e),
                          t.focusOnSelect && t.focusOnSelect(g);
                      }
                    })
                  )),
                  s !== t.slidesToShow &&
                    ((e = s + l) < A && (L = M),
                    (p = j(d({}, t, { index: e }))),
                    a.push(
                      i.default.cloneElement(L, {
                        key: "postcloned" + N(L, e),
                        "data-index": e,
                        tabIndex: "-1",
                        className: (0, r.default)(p, f),
                        "aria-hidden": !p["slick-active"],
                        style: d({}, L.props.style || {}, {}, y),
                        onClick: function(e) {
                          L.props && L.props.onClick && L.props.onClick(e),
                            t.focusOnSelect && t.focusOnSelect(g);
                        }
                      })
                    ));
              }
            }),
            t.rtl ? u.concat(n, a).reverse() : u.concat(n, a)
          );
        },
        f = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              A(this, M(e).apply(this, arguments))
            );
          }
          var n, r, o;
          return (
            (function(t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && l(t, e);
            })(e, t),
            (n = e),
            (r = [
              {
                key: "render",
                value: function() {
                  var t = y(this.props),
                    e = this.props,
                    n = {
                      onMouseEnter: e.onMouseEnter,
                      onMouseOver: e.onMouseOver,
                      onMouseLeave: e.onMouseLeave
                    };
                  return i.default.createElement(
                    "div",
                    s(
                      {
                        className: "slick-track",
                        style: this.props.trackStyle
                      },
                      n
                    ),
                    t
                  );
                }
              }
            ]) && c(n.prototype, r),
            o && c(n, o),
            e
          );
        })(i.default.PureComponent);
      e.Track = f;
    },
    VG8Z: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/chat-74835ef41b51cf144368e69551c2528d.png";
    },
    W8MJ: function(t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      t.exports = function(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
      };
    },
    Xuae: function(t, e, n) {
      "use strict";
      var i = n("lwsE"),
        r = n("PJYZ"),
        o = n("W8MJ"),
        u = n("7W2i"),
        a = n("a1gu"),
        s = n("Nsbk"),
        c = n("RIqP");
      function A(t) {
        var e = (function() {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var n,
            i = s(t);
          if (e) {
            var r = s(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return a(this, n);
        };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var M = n("q1tI"),
        l = !1;
      e.default = function() {
        var t,
          e = new Set();
        function n(n) {
          (t = n.props.reduceComponentsToState(c(e), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(t);
        }
        return (function(a) {
          u(c, a);
          var s = A(c);
          function c(t) {
            var o;
            return (
              i(this, c), (o = s.call(this, t)), l && (e.add(r(o)), n(r(o))), o
            );
          }
          return (
            o(c, null, [
              {
                key: "rewind",
                value: function() {
                  var n = t;
                  return (t = void 0), e.clear(), n;
                }
              }
            ]),
            o(c, [
              {
                key: "componentDidMount",
                value: function() {
                  e.add(this), n(this);
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  n(this);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  e.delete(this), n(this);
                }
              },
              {
                key: "render",
                value: function() {
                  return null;
                }
              }
            ]),
            c
          );
        })(M.Component);
      };
    },
    a1gu: function(t, e, n) {
      var i = n("cDf5"),
        r = n("PJYZ");
      t.exports = function(t, e) {
        return !e || ("object" !== i(e) && "function" !== typeof e) ? r(t) : e;
      };
    },
    aaW0: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Dots = void 0);
      var i = o(n("q1tI")),
        r = o(n("TSYQ"));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u(t) {
        return (u =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function s(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function A(t, e) {
        return !e || ("object" !== u(e) && "function" !== typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function M(t) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var L = (function(t) {
        function e() {
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            A(this, M(e).apply(this, arguments))
          );
        }
        var n, o, u;
        return (
          (function(t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              e && l(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: "clickHandler",
              value: function(t, e) {
                e.preventDefault(), this.props.clickHandler(t);
              }
            },
            {
              key: "render",
              value: function() {
                var t,
                  e = this,
                  n = (t = {
                    slideCount: this.props.slideCount,
                    slidesToScroll: this.props.slidesToScroll,
                    slidesToShow: this.props.slidesToShow,
                    infinite: this.props.infinite
                  }).infinite
                    ? Math.ceil(t.slideCount / t.slidesToScroll)
                    : Math.ceil(
                        (t.slideCount - t.slidesToShow) / t.slidesToScroll
                      ) + 1,
                  o = this.props,
                  u = {
                    onMouseEnter: o.onMouseEnter,
                    onMouseOver: o.onMouseOver,
                    onMouseLeave: o.onMouseLeave
                  },
                  c = Array.apply(
                    null,
                    Array(n + 1)
                      .join("0")
                      .split("")
                  ).map(function(t, n) {
                    var o = n * e.props.slidesToScroll,
                      u =
                        n * e.props.slidesToScroll +
                        (e.props.slidesToScroll - 1),
                      a = (0, r.default)({
                        "slick-active":
                          e.props.currentSlide >= o && e.props.currentSlide <= u
                      }),
                      s = {
                        message: "dots",
                        index: n,
                        slidesToScroll: e.props.slidesToScroll,
                        currentSlide: e.props.currentSlide
                      },
                      c = e.clickHandler.bind(e, s);
                    return i.default.createElement(
                      "li",
                      { key: n, className: a },
                      i.default.cloneElement(e.props.customPaging(n), {
                        onClick: c
                      })
                    );
                  });
                return i.default.cloneElement(
                  this.props.appendDots(c),
                  (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? a(n, !0).forEach(function(e) {
                            s(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : a(n).forEach(function(e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({ className: this.props.dotsClass }, u)
                );
              }
            }
          ]) && c(n.prototype, o),
          u && c(n, u),
          e
        );
      })(i.default.PureComponent);
      e.Dots = L;
    },
    aeMd: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/bootstrap-7384412324c769e447d3c4f86e9ff068.png";
    },
    bdgK: function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          var n = (function() {
              if ("undefined" !== typeof Map) return Map;
              function t(t, e) {
                var n = -1;
                return (
                  t.some(function(t, i) {
                    return t[0] === e && ((n = i), !0);
                  }),
                  n
                );
              }
              return (function() {
                function e() {
                  this.__entries__ = [];
                }
                return (
                  Object.defineProperty(e.prototype, "size", {
                    get: function() {
                      return this.__entries__.length;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.get = function(e) {
                    var n = t(this.__entries__, e),
                      i = this.__entries__[n];
                    return i && i[1];
                  }),
                  (e.prototype.set = function(e, n) {
                    var i = t(this.__entries__, e);
                    ~i
                      ? (this.__entries__[i][1] = n)
                      : this.__entries__.push([e, n]);
                  }),
                  (e.prototype.delete = function(e) {
                    var n = this.__entries__,
                      i = t(n, e);
                    ~i && n.splice(i, 1);
                  }),
                  (e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e);
                  }),
                  (e.prototype.clear = function() {
                    this.__entries__.splice(0);
                  }),
                  (e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var n = 0, i = this.__entries__; n < i.length; n++) {
                      var r = i[n];
                      t.call(e, r[1], r[0]);
                    }
                  }),
                  e
                );
              })();
            })(),
            i =
              "undefined" !== typeof window &&
              "undefined" !== typeof document &&
              window.document === document,
            r =
              "undefined" !== typeof t && t.Math === Math
                ? t
                : "undefined" !== typeof self && self.Math === Math
                ? self
                : "undefined" !== typeof window && window.Math === Math
                ? window
                : Function("return this")(),
            o =
              "function" === typeof requestAnimationFrame
                ? requestAnimationFrame.bind(r)
                : function(t) {
                    return setTimeout(function() {
                      return t(Date.now());
                    }, 1e3 / 60);
                  },
            u = 2;
          var a = 20,
            s = [
              "top",
              "right",
              "bottom",
              "left",
              "width",
              "height",
              "size",
              "weight"
            ],
            c = "undefined" !== typeof MutationObserver,
            A = (function() {
              function t() {
                (this.connected_ = !1),
                  (this.mutationEventsAdded_ = !1),
                  (this.mutationsObserver_ = null),
                  (this.observers_ = []),
                  (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                  (this.refresh = (function(t, e) {
                    var n = !1,
                      i = !1,
                      r = 0;
                    function a() {
                      n && ((n = !1), t()), i && c();
                    }
                    function s() {
                      o(a);
                    }
                    function c() {
                      var t = Date.now();
                      if (n) {
                        if (t - r < u) return;
                        i = !0;
                      } else (n = !0), (i = !1), setTimeout(s, e);
                      r = t;
                    }
                    return c;
                  })(this.refresh.bind(this), a));
              }
              return (
                (t.prototype.addObserver = function(t) {
                  ~this.observers_.indexOf(t) || this.observers_.push(t),
                    this.connected_ || this.connect_();
                }),
                (t.prototype.removeObserver = function(t) {
                  var e = this.observers_,
                    n = e.indexOf(t);
                  ~n && e.splice(n, 1),
                    !e.length && this.connected_ && this.disconnect_();
                }),
                (t.prototype.refresh = function() {
                  this.updateObservers_() && this.refresh();
                }),
                (t.prototype.updateObservers_ = function() {
                  var t = this.observers_.filter(function(t) {
                    return t.gatherActive(), t.hasActive();
                  });
                  return (
                    t.forEach(function(t) {
                      return t.broadcastActive();
                    }),
                    t.length > 0
                  );
                }),
                (t.prototype.connect_ = function() {
                  i &&
                    !this.connected_ &&
                    (document.addEventListener(
                      "transitionend",
                      this.onTransitionEnd_
                    ),
                    window.addEventListener("resize", this.refresh),
                    c
                      ? ((this.mutationsObserver_ = new MutationObserver(
                          this.refresh
                        )),
                        this.mutationsObserver_.observe(document, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0
                        }))
                      : (document.addEventListener(
                          "DOMSubtreeModified",
                          this.refresh
                        ),
                        (this.mutationEventsAdded_ = !0)),
                    (this.connected_ = !0));
                }),
                (t.prototype.disconnect_ = function() {
                  i &&
                    this.connected_ &&
                    (document.removeEventListener(
                      "transitionend",
                      this.onTransitionEnd_
                    ),
                    window.removeEventListener("resize", this.refresh),
                    this.mutationsObserver_ &&
                      this.mutationsObserver_.disconnect(),
                    this.mutationEventsAdded_ &&
                      document.removeEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                    (this.mutationsObserver_ = null),
                    (this.mutationEventsAdded_ = !1),
                    (this.connected_ = !1));
                }),
                (t.prototype.onTransitionEnd_ = function(t) {
                  var e = t.propertyName,
                    n = void 0 === e ? "" : e;
                  s.some(function(t) {
                    return !!~n.indexOf(t);
                  }) && this.refresh();
                }),
                (t.getInstance = function() {
                  return (
                    this.instance_ || (this.instance_ = new t()), this.instance_
                  );
                }),
                (t.instance_ = null),
                t
              );
            })(),
            M = function(t, e) {
              for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                var r = i[n];
                Object.defineProperty(t, r, {
                  value: e[r],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0
                });
              }
              return t;
            },
            l = function(t) {
              return (t && t.ownerDocument && t.ownerDocument.defaultView) || r;
            },
            L = f(0, 0, 0, 0);
          function d(t) {
            return parseFloat(t) || 0;
          }
          function g(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            return e.reduce(function(e, n) {
              return e + d(t["border-" + n + "-width"]);
            }, 0);
          }
          function j(t) {
            var e = t.clientWidth,
              n = t.clientHeight;
            if (!e && !n) return L;
            var i = l(t).getComputedStyle(t),
              r = (function(t) {
                for (
                  var e = {}, n = 0, i = ["top", "right", "bottom", "left"];
                  n < i.length;
                  n++
                ) {
                  var r = i[n],
                    o = t["padding-" + r];
                  e[r] = d(o);
                }
                return e;
              })(i),
              o = r.left + r.right,
              u = r.top + r.bottom,
              a = d(i.width),
              s = d(i.height);
            if (
              ("border-box" === i.boxSizing &&
                (Math.round(a + o) !== e && (a -= g(i, "left", "right") + o),
                Math.round(s + u) !== n && (s -= g(i, "top", "bottom") + u)),
              !(function(t) {
                return t === l(t).document.documentElement;
              })(t))
            ) {
              var c = Math.round(a + o) - e,
                A = Math.round(s + u) - n;
              1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(A) && (s -= A);
            }
            return f(r.left, r.top, a, s);
          }
          var N =
            "undefined" !== typeof SVGGraphicsElement
              ? function(t) {
                  return t instanceof l(t).SVGGraphicsElement;
                }
              : function(t) {
                  return (
                    t instanceof l(t).SVGElement &&
                    "function" === typeof t.getBBox
                  );
                };
          function y(t) {
            return i
              ? N(t)
                ? (function(t) {
                    var e = t.getBBox();
                    return f(0, 0, e.width, e.height);
                  })(t)
                : j(t)
              : L;
          }
          function f(t, e, n, i) {
            return { x: t, y: e, width: n, height: i };
          }
          var p = (function() {
              function t(t) {
                (this.broadcastWidth = 0),
                  (this.broadcastHeight = 0),
                  (this.contentRect_ = f(0, 0, 0, 0)),
                  (this.target = t);
              }
              return (
                (t.prototype.isActive = function() {
                  var t = y(this.target);
                  return (
                    (this.contentRect_ = t),
                    t.width !== this.broadcastWidth ||
                      t.height !== this.broadcastHeight
                  );
                }),
                (t.prototype.broadcastRect = function() {
                  var t = this.contentRect_;
                  return (
                    (this.broadcastWidth = t.width),
                    (this.broadcastHeight = t.height),
                    t
                  );
                }),
                t
              );
            })(),
            T = function(t, e) {
              var n = (function(t) {
                var e = t.x,
                  n = t.y,
                  i = t.width,
                  r = t.height,
                  o =
                    "undefined" !== typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object,
                  u = Object.create(o.prototype);
                return (
                  M(u, {
                    x: e,
                    y: n,
                    width: i,
                    height: r,
                    top: n,
                    right: e + i,
                    bottom: r + n,
                    left: e
                  }),
                  u
                );
              })(e);
              M(this, { target: t, contentRect: n });
            },
            I = (function() {
              function t(t, e, i) {
                if (
                  ((this.activeObservations_ = []),
                  (this.observations_ = new n()),
                  "function" !== typeof t)
                )
                  throw new TypeError(
                    "The callback provided as parameter 1 is not a function."
                  );
                (this.callback_ = t),
                  (this.controller_ = e),
                  (this.callbackCtx_ = i);
              }
              return (
                (t.prototype.observe = function(t) {
                  if (!arguments.length)
                    throw new TypeError(
                      "1 argument required, but only 0 present."
                    );
                  if (
                    "undefined" !== typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(t instanceof l(t).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var e = this.observations_;
                    e.has(t) ||
                      (e.set(t, new p(t)),
                      this.controller_.addObserver(this),
                      this.controller_.refresh());
                  }
                }),
                (t.prototype.unobserve = function(t) {
                  if (!arguments.length)
                    throw new TypeError(
                      "1 argument required, but only 0 present."
                    );
                  if (
                    "undefined" !== typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(t instanceof l(t).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var e = this.observations_;
                    e.has(t) &&
                      (e.delete(t),
                      e.size || this.controller_.removeObserver(this));
                  }
                }),
                (t.prototype.disconnect = function() {
                  this.clearActive(),
                    this.observations_.clear(),
                    this.controller_.removeObserver(this);
                }),
                (t.prototype.gatherActive = function() {
                  var t = this;
                  this.clearActive(),
                    this.observations_.forEach(function(e) {
                      e.isActive() && t.activeObservations_.push(e);
                    });
                }),
                (t.prototype.broadcastActive = function() {
                  if (this.hasActive()) {
                    var t = this.callbackCtx_,
                      e = this.activeObservations_.map(function(t) {
                        return new T(t.target, t.broadcastRect());
                      });
                    this.callback_.call(t, e, t), this.clearActive();
                  }
                }),
                (t.prototype.clearActive = function() {
                  this.activeObservations_.splice(0);
                }),
                (t.prototype.hasActive = function() {
                  return this.activeObservations_.length > 0;
                }),
                t
              );
            })(),
            D = "undefined" !== typeof WeakMap ? new WeakMap() : new n(),
            E = function t(e) {
              if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              var n = A.getInstance(),
                i = new I(e, n, this);
              D.set(this, i);
            };
          ["observe", "unobserve", "disconnect"].forEach(function(t) {
            E.prototype[t] = function() {
              var e;
              return (e = D.get(this))[t].apply(e, arguments);
            };
          });
          var S =
            "undefined" !== typeof r.ResizeObserver ? r.ResizeObserver : E;
          e.default = S;
        }.call(this, n("yLpj"));
    },
    bgVT: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/nextjs-27c8fb0797f591e57d027b2a42ab8153.png";
    },
    cDf5: function(t, e) {
      function n(t) {
        return (n =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(e) {
        return (
          "function" === typeof Symbol && "symbol" === n(Symbol.iterator)
            ? (t.exports = i = function(t) {
                return n(t);
              })
            : (t.exports = i = function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : n(t);
              }),
          i(e)
        );
      }
      t.exports = i;
    },
    ge9v: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/tetris-4b4eab45ab6253fd12e10d52d438eced.png";
    },
    jpXb: function(t, e, n) {
      var i = n("wZXL");
      t.exports = new i();
    },
    kCCV: function(t, e) {
      function n(t) {
        (this.options = t), !t.deferSetup && this.setup();
      }
      (n.prototype = {
        constructor: n,
        setup: function() {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function() {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function() {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function() {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function(t) {
          return this.options === t || this.options.match === t;
        }
      }),
        (t.exports = n);
    },
    kEZy: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/star2-4dba04c2588daefed6bb9758f17e586e.png";
    },
    kLO9: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/multiTodo-52e77beec07b5b4576c8d4061a045e55.png";
    },
    lUHi: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/netflix-d7ed90dfc24c02232399599f299e3731.png";
    },
    lwAK: function(t, e, n) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(n("q1tI"));
      e.AmpStateContext = r.createContext({});
    },
    lwkB: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/start-fb9c40549393dee9695ee91efb750693.png";
    },
    lwsE: function(t, e) {
      t.exports = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    "m0L+": function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function() {
          return n("RNiq");
        }
      ]);
    },
    pIsd: function(t, e, n) {
      var i = n("BJfS"),
        r = function(t) {
          var e = "",
            n = Object.keys(t);
          return (
            n.forEach(function(r, o) {
              var u = t[r];
              (function(t) {
                return /[height|width]$/.test(t);
              })((r = i(r))) &&
                "number" === typeof u &&
                (u += "px"),
                (e +=
                  !0 === u
                    ? r
                    : !1 === u
                    ? "not " + r
                    : "(" + r + ": " + u + ")"),
                o < n.length - 1 && (e += " and ");
            }),
            e
          );
        };
      t.exports = function(t) {
        var e = "";
        return "string" === typeof t
          ? t
          : t instanceof Array
          ? (t.forEach(function(n, i) {
              (e += r(n)), i < t.length - 1 && (e += ", ");
            }),
            e)
          : r(t);
      };
    },
    rxal: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
        trackStyle: {},
        trackWidth: 0
      };
      e.default = i;
    },
    s7m3: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/stars-d297f3c80d72435a11b7e8d35e786e6a.png";
    },
    ueNE: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InnerSlider = void 0);
      var i = L(n("q1tI")),
        r = L(n("i8i4")),
        o = L(n("rxal")),
        u = L(n("9/5/")),
        a = L(n("TSYQ")),
        s = n("x9Za"),
        c = n("UZv/"),
        A = n("aaW0"),
        M = n("KOnL"),
        l = L(n("bdgK"));
      function L(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function d() {
        return (d =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function g(t, e) {
        if (null == t) return {};
        var n,
          i,
          r = (function(t, e) {
            if (null == t) return {};
            var n,
              i,
              r = {},
              o = Object.keys(t);
            for (i = 0; i < o.length; i++)
              (n = o[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (r[n] = t[n]));
        }
        return r;
      }
      function j(t) {
        return (j =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function N(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(n, !0).forEach(function(e) {
                I(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : N(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function T(t, e) {
        return (T =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function I(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var D = (function(t) {
        function e(t) {
          var n;
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (n = (function(t, e) {
              return !e || ("object" !== j(e) && "function" !== typeof e)
                ? p(t)
                : e;
            })(this, f(e).call(this, t))),
            I(p(n), "listRefHandler", function(t) {
              return (n.list = t);
            }),
            I(p(n), "trackRefHandler", function(t) {
              return (n.track = t);
            }),
            I(p(n), "adaptHeight", function() {
              if (n.props.adaptiveHeight && n.list) {
                var t = n.list.querySelector(
                  '[data-index="'.concat(n.state.currentSlide, '"]')
                );
                n.list.style.height = (0, s.getHeight)(t) + "px";
              }
            }),
            I(p(n), "UNSAFE_componentWillMount", function() {
              if (
                (n.ssrInit(),
                n.props.onInit && n.props.onInit(),
                n.props.lazyLoad)
              ) {
                var t = (0, s.getOnDemandLazySlides)(
                  y({}, n.props, {}, n.state)
                );
                t.length > 0 &&
                  (n.setState(function(e) {
                    return { lazyLoadedList: e.lazyLoadedList.concat(t) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(t));
              }
            }),
            I(p(n), "componentDidMount", function() {
              var t = y({ listRef: n.list, trackRef: n.track }, n.props);
              n.updateState(t, !0, function() {
                n.adaptHeight(), n.props.autoplay && n.autoPlay("update");
              }),
                "progressive" === n.props.lazyLoad &&
                  (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)),
                (n.ro = new l.default(function() {
                  n.state.animating
                    ? (n.onWindowResized(!1),
                      n.callbackTimers.push(
                        setTimeout(function() {
                          return n.onWindowResized();
                        }, n.props.speed)
                      ))
                    : n.onWindowResized();
                })),
                n.ro.observe(n.list),
                Array.prototype.forEach.call(
                  document.querySelectorAll(".slick-slide"),
                  function(t) {
                    (t.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null),
                      (t.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null);
                  }
                ),
                window &&
                  (window.addEventListener
                    ? window.addEventListener("resize", n.onWindowResized)
                    : window.attachEvent("onresize", n.onWindowResized));
            }),
            I(p(n), "componentWillUnmount", function() {
              n.animationEndCallback && clearTimeout(n.animationEndCallback),
                n.lazyLoadTimer && clearInterval(n.lazyLoadTimer),
                n.callbackTimers.length &&
                  (n.callbackTimers.forEach(function(t) {
                    return clearTimeout(t);
                  }),
                  (n.callbackTimers = [])),
                window.addEventListener
                  ? window.removeEventListener("resize", n.onWindowResized)
                  : window.detachEvent("onresize", n.onWindowResized),
                n.autoplayTimer && clearInterval(n.autoplayTimer);
            }),
            I(p(n), "UNSAFE_componentWillReceiveProps", function(t) {
              for (
                var e = y(
                    { listRef: n.list, trackRef: n.track },
                    t,
                    {},
                    n.state
                  ),
                  r = !1,
                  o = 0,
                  u = Object.keys(n.props);
                o < u.length;
                o++
              ) {
                var a = u[o];
                if (!t.hasOwnProperty(a)) {
                  r = !0;
                  break;
                }
                if (
                  "object" !== j(t[a]) &&
                  "function" !== typeof t[a] &&
                  t[a] !== n.props[a]
                ) {
                  r = !0;
                  break;
                }
              }
              n.updateState(e, r, function() {
                n.state.currentSlide >= i.default.Children.count(t.children) &&
                  n.changeSlide({
                    message: "index",
                    index:
                      i.default.Children.count(t.children) - t.slidesToShow,
                    currentSlide: n.state.currentSlide
                  }),
                  t.autoplay ? n.autoPlay("update") : n.pause("paused");
              });
            }),
            I(p(n), "componentDidUpdate", function() {
              if (
                (n.checkImagesLoad(),
                n.props.onReInit && n.props.onReInit(),
                n.props.lazyLoad)
              ) {
                var t = (0, s.getOnDemandLazySlides)(
                  y({}, n.props, {}, n.state)
                );
                t.length > 0 &&
                  (n.setState(function(e) {
                    return { lazyLoadedList: e.lazyLoadedList.concat(t) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(t));
              }
              n.adaptHeight();
            }),
            I(p(n), "onWindowResized", function(t) {
              n.debouncedResize && n.debouncedResize.cancel(),
                (n.debouncedResize = (0, u.default)(function() {
                  return n.resizeWindow(t);
                }, 50)),
                n.debouncedResize();
            }),
            I(p(n), "resizeWindow", function() {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              if (r.default.findDOMNode(n.track)) {
                var e = y(
                  { listRef: n.list, trackRef: n.track },
                  n.props,
                  {},
                  n.state
                );
                n.updateState(e, t, function() {
                  n.props.autoplay ? n.autoPlay("update") : n.pause("paused");
                }),
                  n.setState({ animating: !1 }),
                  clearTimeout(n.animationEndCallback),
                  delete n.animationEndCallback;
              }
            }),
            I(p(n), "updateState", function(t, e, r) {
              var o = (0, s.initializedState)(t);
              (t = y({}, t, {}, o, { slideIndex: o.currentSlide })),
                (t = y({}, t, { left: (0, s.getTrackLeft)(t) }));
              var u = (0, s.getTrackCSS)(t);
              (e ||
                i.default.Children.count(n.props.children) !==
                  i.default.Children.count(t.children)) &&
                (o.trackStyle = u),
                n.setState(o, r);
            }),
            I(p(n), "ssrInit", function() {
              if (n.props.variableWidth) {
                var t = 0,
                  e = 0,
                  r = [],
                  o = (0, s.getPreClones)(
                    y({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length
                    })
                  ),
                  u = (0, s.getPostClones)(
                    y({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length
                    })
                  );
                n.props.children.forEach(function(e) {
                  r.push(e.props.style.width), (t += e.props.style.width);
                });
                for (var a = 0; a < o; a++)
                  (e += r[r.length - 1 - a]), (t += r[r.length - 1 - a]);
                for (var c = 0; c < u; c++) t += r[c];
                for (var A = 0; A < n.state.currentSlide; A++) e += r[A];
                var M = { width: t + "px", left: -e + "px" };
                if (n.props.centerMode) {
                  var l = "".concat(r[n.state.currentSlide], "px");
                  M.left = "calc("
                    .concat(M.left, " + (100% - ")
                    .concat(l, ") / 2 ) ");
                }
                n.setState({ trackStyle: M });
              } else {
                var L = i.default.Children.count(n.props.children),
                  d = y({}, n.props, {}, n.state, { slideCount: L }),
                  g = (0, s.getPreClones)(d) + (0, s.getPostClones)(d) + L,
                  j = (100 / n.props.slidesToShow) * g,
                  N = 100 / g,
                  f =
                    (-N * ((0, s.getPreClones)(d) + n.state.currentSlide) * j) /
                    100;
                n.props.centerMode && (f += (100 - (N * j) / 100) / 2);
                var p = { width: j + "%", left: f + "%" };
                n.setState({ slideWidth: N + "%", trackStyle: p });
              }
            }),
            I(p(n), "checkImagesLoad", function() {
              var t = document.querySelectorAll(".slick-slide img"),
                e = t.length,
                i = 0;
              Array.prototype.forEach.call(t, function(t) {
                var r = function() {
                  return ++i && i >= e && n.onWindowResized();
                };
                if (t.onclick) {
                  var o = t.onclick;
                  t.onclick = function() {
                    o(), t.parentNode.focus();
                  };
                } else
                  t.onclick = function() {
                    return t.parentNode.focus();
                  };
                t.onload ||
                  (n.props.lazyLoad
                    ? (t.onload = function() {
                        n.adaptHeight(),
                          n.callbackTimers.push(
                            setTimeout(n.onWindowResized, n.props.speed)
                          );
                      })
                    : ((t.onload = r),
                      (t.onerror = function() {
                        r(),
                          n.props.onLazyLoadError && n.props.onLazyLoadError();
                      })));
              });
            }),
            I(p(n), "progressiveLazyLoad", function() {
              for (
                var t = [],
                  e = y({}, n.props, {}, n.state),
                  i = n.state.currentSlide;
                i < n.state.slideCount + (0, s.getPostClones)(e);
                i++
              )
                if (n.state.lazyLoadedList.indexOf(i) < 0) {
                  t.push(i);
                  break;
                }
              for (
                var r = n.state.currentSlide - 1;
                r >= -(0, s.getPreClones)(e);
                r--
              )
                if (n.state.lazyLoadedList.indexOf(r) < 0) {
                  t.push(r);
                  break;
                }
              t.length > 0
                ? (n.setState(function(e) {
                    return { lazyLoadedList: e.lazyLoadedList.concat(t) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(t))
                : n.lazyLoadTimer &&
                  (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer);
            }),
            I(p(n), "slideHandler", function(t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = n.props,
                r = i.asNavFor,
                o = i.beforeChange,
                u = i.onLazyLoad,
                a = i.speed,
                c = i.afterChange,
                A = n.state.currentSlide,
                M = (0, s.slideHandler)(
                  y({ index: t }, n.props, {}, n.state, {
                    trackRef: n.track,
                    useCSS: n.props.useCSS && !e
                  })
                ),
                l = M.state,
                L = M.nextState;
              if (l) {
                o && o(A, l.currentSlide);
                var d = l.lazyLoadedList.filter(function(t) {
                  return n.state.lazyLoadedList.indexOf(t) < 0;
                });
                u && d.length > 0 && u(d),
                  n.setState(l, function() {
                    r && r.innerSlider.slideHandler(t),
                      L &&
                        (n.animationEndCallback = setTimeout(function() {
                          var t = L.animating,
                            e = g(L, ["animating"]);
                          n.setState(e, function() {
                            n.callbackTimers.push(
                              setTimeout(function() {
                                return n.setState({ animating: t });
                              }, 10)
                            ),
                              c && c(l.currentSlide),
                              delete n.animationEndCallback;
                          });
                        }, a));
                  });
              }
            }),
            I(p(n), "changeSlide", function(t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = y({}, n.props, {}, n.state),
                r = (0, s.changeSlide)(i, t);
              (0 === r || r) &&
                (!0 === e ? n.slideHandler(r, e) : n.slideHandler(r));
            }),
            I(p(n), "clickHandler", function(t) {
              !1 === n.clickable && (t.stopPropagation(), t.preventDefault()),
                (n.clickable = !0);
            }),
            I(p(n), "keyHandler", function(t) {
              var e = (0, s.keyHandler)(t, n.props.accessibility, n.props.rtl);
              "" !== e && n.changeSlide({ message: e });
            }),
            I(p(n), "selectHandler", function(t) {
              n.changeSlide(t);
            }),
            I(p(n), "disableBodyScroll", function() {
              window.ontouchmove = function(t) {
                (t = t || window.event).preventDefault && t.preventDefault(),
                  (t.returnValue = !1);
              };
            }),
            I(p(n), "enableBodyScroll", function() {
              window.ontouchmove = null;
            }),
            I(p(n), "swipeStart", function(t) {
              n.props.verticalSwiping && n.disableBodyScroll();
              var e = (0, s.swipeStart)(t, n.props.swipe, n.props.draggable);
              "" !== e && n.setState(e);
            }),
            I(p(n), "swipeMove", function(t) {
              var e = (0, s.swipeMove)(
                t,
                y({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide
                })
              );
              e && (e.swiping && (n.clickable = !1), n.setState(e));
            }),
            I(p(n), "swipeEnd", function(t) {
              var e = (0, s.swipeEnd)(
                t,
                y({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide
                })
              );
              if (e) {
                var i = e.triggerSlideHandler;
                delete e.triggerSlideHandler,
                  n.setState(e),
                  void 0 !== i &&
                    (n.slideHandler(i),
                    n.props.verticalSwiping && n.enableBodyScroll());
              }
            }),
            I(p(n), "slickPrev", function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({ message: "previous" });
                }, 0)
              );
            }),
            I(p(n), "slickNext", function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({ message: "next" });
                }, 0)
              );
            }),
            I(p(n), "slickGoTo", function(t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (((t = Number(t)), isNaN(t))) return "";
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide(
                    {
                      message: "index",
                      index: t,
                      currentSlide: n.state.currentSlide
                    },
                    e
                  );
                }, 0)
              );
            }),
            I(p(n), "play", function() {
              var t;
              if (n.props.rtl)
                t = n.state.currentSlide - n.props.slidesToScroll;
              else {
                if (!(0, s.canGoNext)(y({}, n.props, {}, n.state))) return !1;
                t = n.state.currentSlide + n.props.slidesToScroll;
              }
              n.slideHandler(t);
            }),
            I(p(n), "autoPlay", function(t) {
              n.autoplayTimer && clearInterval(n.autoplayTimer);
              var e = n.state.autoplaying;
              if ("update" === t) {
                if ("hovered" === e || "focused" === e || "paused" === e)
                  return;
              } else if ("leave" === t) {
                if ("paused" === e || "focused" === e) return;
              } else if ("blur" === t && ("paused" === e || "hovered" === e))
                return;
              (n.autoplayTimer = setInterval(
                n.play,
                n.props.autoplaySpeed + 50
              )),
                n.setState({ autoplaying: "playing" });
            }),
            I(p(n), "pause", function(t) {
              n.autoplayTimer &&
                (clearInterval(n.autoplayTimer), (n.autoplayTimer = null));
              var e = n.state.autoplaying;
              "paused" === t
                ? n.setState({ autoplaying: "paused" })
                : "focused" === t
                ? ("hovered" !== e && "playing" !== e) ||
                  n.setState({ autoplaying: "focused" })
                : "playing" === e && n.setState({ autoplaying: "hovered" });
            }),
            I(p(n), "onDotsOver", function() {
              return n.props.autoplay && n.pause("hovered");
            }),
            I(p(n), "onDotsLeave", function() {
              return (
                n.props.autoplay &&
                "hovered" === n.state.autoplaying &&
                n.autoPlay("leave")
              );
            }),
            I(p(n), "onTrackOver", function() {
              return n.props.autoplay && n.pause("hovered");
            }),
            I(p(n), "onTrackLeave", function() {
              return (
                n.props.autoplay &&
                "hovered" === n.state.autoplaying &&
                n.autoPlay("leave")
              );
            }),
            I(p(n), "onSlideFocus", function() {
              return n.props.autoplay && n.pause("focused");
            }),
            I(p(n), "onSlideBlur", function() {
              return (
                n.props.autoplay &&
                "focused" === n.state.autoplaying &&
                n.autoPlay("blur")
              );
            }),
            I(p(n), "render", function() {
              var t,
                e,
                r,
                o = (0, a.default)("slick-slider", n.props.className, {
                  "slick-vertical": n.props.vertical,
                  "slick-initialized": !0
                }),
                u = y({}, n.props, {}, n.state),
                l = (0, s.extractObject)(u, [
                  "fade",
                  "cssEase",
                  "speed",
                  "infinite",
                  "centerMode",
                  "focusOnSelect",
                  "currentSlide",
                  "lazyLoad",
                  "lazyLoadedList",
                  "rtl",
                  "slideWidth",
                  "slideHeight",
                  "listHeight",
                  "vertical",
                  "slidesToShow",
                  "slidesToScroll",
                  "slideCount",
                  "trackStyle",
                  "variableWidth",
                  "unslick",
                  "centerPadding"
                ]),
                L = n.props.pauseOnHover;
              if (
                ((l = y({}, l, {
                  onMouseEnter: L ? n.onTrackOver : null,
                  onMouseLeave: L ? n.onTrackLeave : null,
                  onMouseOver: L ? n.onTrackOver : null,
                  focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                })),
                !0 === n.props.dots &&
                  n.state.slideCount >= n.props.slidesToShow)
              ) {
                var g = (0, s.extractObject)(u, [
                    "dotsClass",
                    "slideCount",
                    "slidesToShow",
                    "currentSlide",
                    "slidesToScroll",
                    "clickHandler",
                    "children",
                    "customPaging",
                    "infinite",
                    "appendDots"
                  ]),
                  j = n.props.pauseOnDotsHover;
                (g = y({}, g, {
                  clickHandler: n.changeSlide,
                  onMouseEnter: j ? n.onDotsLeave : null,
                  onMouseOver: j ? n.onDotsOver : null,
                  onMouseLeave: j ? n.onDotsLeave : null
                })),
                  (t = i.default.createElement(A.Dots, g));
              }
              var N = (0, s.extractObject)(u, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow"
              ]);
              (N.clickHandler = n.changeSlide),
                n.props.arrows &&
                  ((e = i.default.createElement(M.PrevArrow, N)),
                  (r = i.default.createElement(M.NextArrow, N)));
              var f = null;
              n.props.vertical && (f = { height: n.state.listHeight });
              var p = null;
              !1 === n.props.vertical
                ? !0 === n.props.centerMode &&
                  (p = { padding: "0px " + n.props.centerPadding })
                : !0 === n.props.centerMode &&
                  (p = { padding: n.props.centerPadding + " 0px" });
              var T = y({}, f, {}, p),
                I = n.props.touchMove,
                D = {
                  className: "slick-list",
                  style: T,
                  onClick: n.clickHandler,
                  onMouseDown: I ? n.swipeStart : null,
                  onMouseMove: n.state.dragging && I ? n.swipeMove : null,
                  onMouseUp: I ? n.swipeEnd : null,
                  onMouseLeave: n.state.dragging && I ? n.swipeEnd : null,
                  onTouchStart: I ? n.swipeStart : null,
                  onTouchMove: n.state.dragging && I ? n.swipeMove : null,
                  onTouchEnd: I ? n.swipeEnd : null,
                  onTouchCancel: n.state.dragging && I ? n.swipeEnd : null,
                  onKeyDown: n.props.accessibility ? n.keyHandler : null
                },
                E = { className: o, dir: "ltr", style: n.props.style };
              return (
                n.props.unslick &&
                  ((D = { className: "slick-list" }), (E = { className: o })),
                i.default.createElement(
                  "div",
                  E,
                  n.props.unslick ? "" : e,
                  i.default.createElement(
                    "div",
                    d({ ref: n.listRefHandler }, D),
                    i.default.createElement(
                      c.Track,
                      d({ ref: n.trackRefHandler }, l),
                      n.props.children
                    )
                  ),
                  n.props.unslick ? "" : r,
                  n.props.unslick ? "" : t
                )
              );
            }),
            (n.list = null),
            (n.track = null),
            (n.state = y({}, o.default, {
              currentSlide: n.props.initialSlide,
              slideCount: i.default.Children.count(n.props.children)
            })),
            (n.callbackTimers = []),
            (n.clickable = !0),
            (n.debouncedResize = null),
            n
          );
        }
        return (
          (function(t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              e && T(t, e);
          })(e, t),
          e
        );
      })(i.default.Component);
      e.InnerSlider = D;
    },
    um7M: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/RESTAPI-de8ce67aec8eb99e5a427d05eb74074f.png";
    },
    "vPd/": function(t, e, n) {
      var i = n("kCCV"),
        r = n("IX3V").each;
      function o(t, e) {
        (this.query = t),
          (this.isUnconditional = e),
          (this.handlers = []),
          (this.mql = window.matchMedia(t));
        var n = this;
        (this.listener = function(t) {
          (n.mql = t.currentTarget || t), n.assess();
        }),
          this.mql.addListener(this.listener);
      }
      (o.prototype = {
        constuctor: o,
        addHandler: function(t) {
          var e = new i(t);
          this.handlers.push(e), this.matches() && e.on();
        },
        removeHandler: function(t) {
          var e = this.handlers;
          r(e, function(n, i) {
            if (n.equals(t)) return n.destroy(), !e.splice(i, 1);
          });
        },
        matches: function() {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function() {
          r(this.handlers, function(t) {
            t.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function() {
          var t = this.matches() ? "on" : "off";
          r(this.handlers, function(e) {
            e[t]();
          });
        }
      }),
        (t.exports = o);
    },
    wZXL: function(t, e, n) {
      var i = n("vPd/"),
        r = n("IX3V"),
        o = r.each,
        u = r.isFunction,
        a = r.isArray;
      function s() {
        if (!window.matchMedia)
          throw new Error(
            "matchMedia not present, legacy browsers require a polyfill"
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia("only all").matches);
      }
      (s.prototype = {
        constructor: s,
        register: function(t, e, n) {
          var r = this.queries,
            s = n && this.browserIsIncapable;
          return (
            r[t] || (r[t] = new i(t, s)),
            u(e) && (e = { match: e }),
            a(e) || (e = [e]),
            o(e, function(e) {
              u(e) && (e = { match: e }), r[t].addHandler(e);
            }),
            this
          );
        },
        unregister: function(t, e) {
          var n = this.queries[t];
          return (
            n && (e ? n.removeHandler(e) : (n.clear(), delete this.queries[t])),
            this
          );
        }
      }),
        (t.exports = s);
    },
    x9Za: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.canUseDOM = e.slidesOnLeft = e.slidesOnRight = e.siblingDirection = e.getTotalSlides = e.getPostClones = e.getPreClones = e.getTrackLeft = e.getTrackAnimateCSS = e.getTrackCSS = e.checkSpecKeys = e.getSlideCount = e.checkNavigable = e.getNavigableIndexes = e.swipeEnd = e.swipeMove = e.swipeStart = e.keyHandler = e.changeSlide = e.slideHandler = e.initializedState = e.extractObject = e.canGoNext = e.getSwipeDirection = e.getHeight = e.getWidth = e.lazySlidesOnRight = e.lazySlidesOnLeft = e.lazyEndIndex = e.lazyStartIndex = e.getRequiredLazySlides = e.getOnDemandLazySlides = void 0);
      var i = o(n("q1tI")),
        r = o(n("i8i4"));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(n, !0).forEach(function(e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var c = function(t) {
        for (var e = [], n = A(t), i = M(t), r = n; r < i; r++)
          t.lazyLoadedList.indexOf(r) < 0 && e.push(r);
        return e;
      };
      e.getOnDemandLazySlides = c;
      e.getRequiredLazySlides = function(t) {
        for (var e = [], n = A(t), i = M(t), r = n; r < i; r++) e.push(r);
        return e;
      };
      var A = function(t) {
        return t.currentSlide - l(t);
      };
      e.lazyStartIndex = A;
      var M = function(t) {
        return t.currentSlide + L(t);
      };
      e.lazyEndIndex = M;
      var l = function(t) {
        return t.centerMode
          ? Math.floor(t.slidesToShow / 2) +
              (parseInt(t.centerPadding) > 0 ? 1 : 0)
          : 0;
      };
      e.lazySlidesOnLeft = l;
      var L = function(t) {
        return t.centerMode
          ? Math.floor((t.slidesToShow - 1) / 2) +
              1 +
              (parseInt(t.centerPadding) > 0 ? 1 : 0)
          : t.slidesToShow;
      };
      e.lazySlidesOnRight = L;
      var d = function(t) {
        return (t && t.offsetWidth) || 0;
      };
      e.getWidth = d;
      var g = function(t) {
        return (t && t.offsetHeight) || 0;
      };
      e.getHeight = g;
      var j = function(t) {
        var e,
          n,
          i,
          r,
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (e = t.startX - t.curX),
          (n = t.startY - t.curY),
          (i = Math.atan2(n, e)),
          (r = Math.round((180 * i) / Math.PI)) < 0 && (r = 360 - Math.abs(r)),
          (r <= 45 && r >= 0) || (r <= 360 && r >= 315)
            ? "left"
            : r >= 135 && r <= 225
            ? "right"
            : !0 === o
            ? r >= 35 && r <= 135
              ? "up"
              : "down"
            : "vertical"
        );
      };
      e.getSwipeDirection = j;
      var N = function(t) {
        var e = !0;
        return (
          t.infinite ||
            (t.centerMode && t.currentSlide >= t.slideCount - 1
              ? (e = !1)
              : (t.slideCount <= t.slidesToShow ||
                  t.currentSlide >= t.slideCount - t.slidesToShow) &&
                (e = !1)),
          e
        );
      };
      e.canGoNext = N;
      e.extractObject = function(t, e) {
        var n = {};
        return (
          e.forEach(function(e) {
            return (n[e] = t[e]);
          }),
          n
        );
      };
      e.initializedState = function(t) {
        var e,
          n = i.default.Children.count(t.children),
          o = Math.ceil(d(r.default.findDOMNode(t.listRef))),
          u = Math.ceil(d(r.default.findDOMNode(t.trackRef)));
        if (t.vertical) e = o;
        else {
          var a = t.centerMode && 2 * parseInt(t.centerPadding);
          "string" === typeof t.centerPadding &&
            "%" === t.centerPadding.slice(-1) &&
            (a *= o / 100),
            (e = Math.ceil((o - a) / t.slidesToShow));
        }
        var s =
            r.default.findDOMNode(t.listRef) &&
            g(
              r.default.findDOMNode(t.listRef).querySelector('[data-index="0"]')
            ),
          A = s * t.slidesToShow,
          M = void 0 === t.currentSlide ? t.initialSlide : t.currentSlide;
        t.rtl && void 0 === t.currentSlide && (M = n - 1 - t.initialSlide);
        var l = t.lazyLoadedList || [],
          L = c({ currentSlide: M, lazyLoadedList: l });
        l.concat(L);
        var j = {
          slideCount: n,
          slideWidth: e,
          listWidth: o,
          trackWidth: u,
          currentSlide: M,
          slideHeight: s,
          listHeight: A,
          lazyLoadedList: l
        };
        return (
          null === t.autoplaying && t.autoplay && (j.autoplaying = "playing"), j
        );
      };
      e.slideHandler = function(t) {
        var e = t.waitForAnimate,
          n = t.animating,
          i = t.fade,
          r = t.infinite,
          o = t.index,
          u = t.slideCount,
          s = t.lazyLoadedList,
          A = t.lazyLoad,
          M = t.currentSlide,
          l = t.centerMode,
          L = t.slidesToScroll,
          d = t.slidesToShow,
          g = t.useCSS;
        if (e && n) return {};
        var j,
          y,
          f,
          p = o,
          T = {},
          S = {};
        if (i) {
          if (!r && (o < 0 || o >= u)) return {};
          o < 0 ? (p = o + u) : o >= u && (p = o - u),
            A && s.indexOf(p) < 0 && s.push(p),
            (T = { animating: !0, currentSlide: p, lazyLoadedList: s }),
            (S = { animating: !1 });
        } else
          (j = p),
            p < 0
              ? ((j = p + u), r ? u % L !== 0 && (j = u - (u % L)) : (j = 0))
              : !N(t) && p > M
              ? (p = j = M)
              : l && p >= u
              ? ((p = r ? u : u - 1), (j = r ? 0 : u - 1))
              : p >= u &&
                ((j = p - u), r ? u % L !== 0 && (j = 0) : (j = u - d)),
            (y = E(a({}, t, { slideIndex: p }))),
            (f = E(a({}, t, { slideIndex: j }))),
            r || (y === f && (p = j), (y = f)),
            A && s.concat(c(a({}, t, { currentSlide: p }))),
            g
              ? ((T = {
                  animating: !0,
                  currentSlide: j,
                  trackStyle: D(a({}, t, { left: y })),
                  lazyLoadedList: s
                }),
                (S = {
                  animating: !1,
                  currentSlide: j,
                  trackStyle: I(a({}, t, { left: f })),
                  swipeLeft: null
                }))
              : (T = {
                  currentSlide: j,
                  trackStyle: I(a({}, t, { left: f })),
                  lazyLoadedList: s
                });
        return { state: T, nextState: S };
      };
      e.changeSlide = function(t, e) {
        var n,
          i,
          r,
          o,
          u = t.slidesToScroll,
          s = t.slidesToShow,
          c = t.slideCount,
          A = t.currentSlide,
          M = t.lazyLoad,
          l = t.infinite;
        if (((n = c % u !== 0 ? 0 : (c - A) % u), "previous" === e.message))
          (o = A - (r = 0 === n ? u : s - n)),
            M && !l && (o = -1 === (i = A - r) ? c - 1 : i);
        else if ("next" === e.message)
          (o = A + (r = 0 === n ? u : n)), M && !l && (o = ((A + u) % c) + n);
        else if ("dots" === e.message) {
          if ((o = e.index * e.slidesToScroll) === e.currentSlide) return null;
        } else if ("children" === e.message) {
          if ((o = e.index) === e.currentSlide) return null;
          if (l) {
            var L = O(a({}, t, { targetSlide: o }));
            o > e.currentSlide && "left" === L
              ? (o -= c)
              : o < e.currentSlide && "right" === L && (o += c);
          }
        } else if (
          "index" === e.message &&
          (o = Number(e.index)) === e.currentSlide
        )
          return null;
        return o;
      };
      e.keyHandler = function(t, e, n) {
        return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !e
          ? ""
          : 37 === t.keyCode
          ? n
            ? "next"
            : "previous"
          : 39 === t.keyCode
          ? n
            ? "previous"
            : "next"
          : "";
      };
      e.swipeStart = function(t, e, n) {
        return (
          "IMG" === t.target.tagName && t.preventDefault(),
          !e || (!n && -1 !== t.type.indexOf("mouse"))
            ? ""
            : {
                dragging: !0,
                touchObject: {
                  startX: t.touches ? t.touches[0].pageX : t.clientX,
                  startY: t.touches ? t.touches[0].pageY : t.clientY,
                  curX: t.touches ? t.touches[0].pageX : t.clientX,
                  curY: t.touches ? t.touches[0].pageY : t.clientY
                }
              }
        );
      };
      e.swipeMove = function(t, e) {
        var n = e.scrolling,
          i = e.animating,
          r = e.vertical,
          o = e.swipeToSlide,
          u = e.verticalSwiping,
          s = e.rtl,
          c = e.currentSlide,
          A = e.edgeFriction,
          M = e.edgeDragged,
          l = e.onEdge,
          L = e.swiped,
          d = e.swiping,
          g = e.slideCount,
          y = e.slidesToScroll,
          f = e.infinite,
          p = e.touchObject,
          T = e.swipeEvent,
          D = e.listHeight,
          S = e.listWidth;
        if (!n) {
          if (i) return t.preventDefault();
          r && o && u && t.preventDefault();
          var h,
            z = {},
            O = E(e);
          (p.curX = t.touches ? t.touches[0].pageX : t.clientX),
            (p.curY = t.touches ? t.touches[0].pageY : t.clientY),
            (p.swipeLength = Math.round(
              Math.sqrt(Math.pow(p.curX - p.startX, 2))
            ));
          var C = Math.round(Math.sqrt(Math.pow(p.curY - p.startY, 2)));
          if (!u && !d && C > 10) return { scrolling: !0 };
          u && (p.swipeLength = C);
          var x = (s ? -1 : 1) * (p.curX > p.startX ? 1 : -1);
          u && (x = p.curY > p.startY ? 1 : -1);
          var w = Math.ceil(g / y),
            v = j(e.touchObject, u),
            b = p.swipeLength;
          return (
            f ||
              (((0 === c && "right" === v) ||
                (c + 1 >= w && "left" === v) ||
                (!N(e) && "left" === v)) &&
                ((b = p.swipeLength * A),
                !1 === M && l && (l(v), (z.edgeDragged = !0)))),
            !L && T && (T(v), (z.swiped = !0)),
            (h = r ? O + b * (D / S) * x : s ? O - b * x : O + b * x),
            u && (h = O + b * x),
            (z = a({}, z, {
              touchObject: p,
              swipeLeft: h,
              trackStyle: I(a({}, e, { left: h }))
            })),
            Math.abs(p.curX - p.startX) < 0.8 * Math.abs(p.curY - p.startY)
              ? z
              : (p.swipeLength > 10 && ((z.swiping = !0), t.preventDefault()),
                z)
          );
        }
      };
      e.swipeEnd = function(t, e) {
        var n = e.dragging,
          i = e.swipe,
          r = e.touchObject,
          o = e.listWidth,
          u = e.touchThreshold,
          s = e.verticalSwiping,
          c = e.listHeight,
          A = e.currentSlide,
          M = e.swipeToSlide,
          l = e.scrolling,
          L = e.onSwipe;
        if (!n) return i && t.preventDefault(), {};
        var d = s ? c / u : o / u,
          g = j(r, s),
          N = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {}
          };
        if (l) return N;
        if (!r.swipeLength) return N;
        if (r.swipeLength > d) {
          var y, T;
          switch ((t.preventDefault(), L && L(g), g)) {
            case "left":
            case "up":
              (T = A + p(e)), (y = M ? f(e, T) : T), (N.currentDirection = 0);
              break;
            case "right":
            case "down":
              (T = A - p(e)), (y = M ? f(e, T) : T), (N.currentDirection = 1);
              break;
            default:
              y = A;
          }
          N.triggerSlideHandler = y;
        } else {
          var I = E(e);
          N.trackStyle = D(a({}, e, { left: I }));
        }
        return N;
      };
      var y = function(t) {
        for (
          var e = t.infinite ? 2 * t.slideCount : t.slideCount,
            n = t.infinite ? -1 * t.slidesToShow : 0,
            i = t.infinite ? -1 * t.slidesToShow : 0,
            r = [];
          n < e;

        )
          r.push(n),
            (n = i + t.slidesToScroll),
            (i += Math.min(t.slidesToScroll, t.slidesToShow));
        return r;
      };
      e.getNavigableIndexes = y;
      var f = function(t, e) {
        var n = y(t),
          i = 0;
        if (e > n[n.length - 1]) e = n[n.length - 1];
        else
          for (var r in n) {
            if (e < n[r]) {
              e = i;
              break;
            }
            i = n[r];
          }
        return e;
      };
      e.checkNavigable = f;
      var p = function(t) {
        var e = t.centerMode
          ? t.slideWidth * Math.floor(t.slidesToShow / 2)
          : 0;
        if (t.swipeToSlide) {
          var n,
            i = r.default
              .findDOMNode(t.listRef)
              .querySelectorAll(".slick-slide");
          if (
            (Array.from(i).every(function(i) {
              if (t.vertical) {
                if (i.offsetTop + g(i) / 2 > -1 * t.swipeLeft)
                  return (n = i), !1;
              } else if (i.offsetLeft - e + d(i) / 2 > -1 * t.swipeLeft) return (n = i), !1;
              return !0;
            }),
            !n)
          )
            return 0;
          var o = !0 === t.rtl ? t.slideCount - t.currentSlide : t.currentSlide;
          return Math.abs(n.dataset.index - o) || 1;
        }
        return t.slidesToScroll;
      };
      e.getSlideCount = p;
      var T = function(t, e) {
        return e.reduce(function(e, n) {
          return e && t.hasOwnProperty(n);
        }, !0)
          ? null
          : console.error("Keys Missing:", t);
      };
      e.checkSpecKeys = T;
      var I = function(t) {
        var e, n;
        T(t, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth"
        ]);
        var i = t.slideCount + 2 * t.slidesToShow;
        t.vertical ? (n = i * t.slideHeight) : (e = z(t) * t.slideWidth);
        var r = { opacity: 1, transition: "", WebkitTransition: "" };
        t.useTransform
          ? (r = a({}, r, {
              WebkitTransform: t.vertical
                ? "translate3d(0px, " + t.left + "px, 0px)"
                : "translate3d(" + t.left + "px, 0px, 0px)",
              transform: t.vertical
                ? "translate3d(0px, " + t.left + "px, 0px)"
                : "translate3d(" + t.left + "px, 0px, 0px)",
              msTransform: t.vertical
                ? "translateY(" + t.left + "px)"
                : "translateX(" + t.left + "px)"
            }))
          : t.vertical
          ? (r.top = t.left)
          : (r.left = t.left);
        return (
          t.fade && (r = { opacity: 1 }),
          e && (r.width = e),
          n && (r.height = n),
          window &&
            !window.addEventListener &&
            window.attachEvent &&
            (t.vertical
              ? (r.marginTop = t.left + "px")
              : (r.marginLeft = t.left + "px")),
          r
        );
      };
      e.getTrackCSS = I;
      var D = function(t) {
        T(t, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth",
          "speed",
          "cssEase"
        ]);
        var e = I(t);
        return (
          t.useTransform
            ? ((e.WebkitTransition =
                "-webkit-transform " + t.speed + "ms " + t.cssEase),
              (e.transition = "transform " + t.speed + "ms " + t.cssEase))
            : t.vertical
            ? (e.transition = "top " + t.speed + "ms " + t.cssEase)
            : (e.transition = "left " + t.speed + "ms " + t.cssEase),
          e
        );
      };
      e.getTrackAnimateCSS = D;
      var E = function(t) {
        if (t.unslick) return 0;
        T(t, [
          "slideIndex",
          "trackRef",
          "infinite",
          "centerMode",
          "slideCount",
          "slidesToShow",
          "slidesToScroll",
          "slideWidth",
          "listWidth",
          "variableWidth",
          "slideHeight"
        ]);
        var e,
          n,
          i = t.slideIndex,
          o = t.trackRef,
          u = t.infinite,
          a = t.centerMode,
          s = t.slideCount,
          c = t.slidesToShow,
          A = t.slidesToScroll,
          M = t.slideWidth,
          l = t.listWidth,
          L = t.variableWidth,
          d = t.slideHeight,
          g = t.fade,
          j = t.vertical;
        if (g || 1 === t.slideCount) return 0;
        var N = 0;
        if (
          (u
            ? ((N = -S(t)),
              s % A !== 0 && i + A > s && (N = -(i > s ? c - (i - s) : s % A)),
              a && (N += parseInt(c / 2)))
            : (s % A !== 0 && i + A > s && (N = c - (s % A)),
              a && (N = parseInt(c / 2))),
          (e = j ? i * d * -1 + N * d : i * M * -1 + N * M),
          !0 === L)
        ) {
          var y,
            f = r.default.findDOMNode(o);
          if (
            ((y = i + S(t)),
            (e = (n = f && f.childNodes[y]) ? -1 * n.offsetLeft : 0),
            !0 === a)
          ) {
            (y = u ? i + S(t) : i), (n = f && f.children[y]), (e = 0);
            for (var p = 0; p < y; p++)
              e -= f && f.children[p] && f.children[p].offsetWidth;
            (e -= parseInt(t.centerPadding)),
              (e += n && (l - n.offsetWidth) / 2);
          }
        }
        return e;
      };
      e.getTrackLeft = E;
      var S = function(t) {
        return t.unslick || !t.infinite
          ? 0
          : t.variableWidth
          ? t.slideCount
          : t.slidesToShow + (t.centerMode ? 1 : 0);
      };
      e.getPreClones = S;
      var h = function(t) {
        return t.unslick || !t.infinite ? 0 : t.slideCount;
      };
      e.getPostClones = h;
      var z = function(t) {
        return 1 === t.slideCount ? 1 : S(t) + t.slideCount + h(t);
      };
      e.getTotalSlides = z;
      var O = function(t) {
        return t.targetSlide > t.currentSlide
          ? t.targetSlide > t.currentSlide + C(t)
            ? "left"
            : "right"
          : t.targetSlide < t.currentSlide - x(t)
          ? "right"
          : "left";
      };
      e.siblingDirection = O;
      var C = function(t) {
        var e = t.slidesToShow,
          n = t.centerMode,
          i = t.rtl,
          r = t.centerPadding;
        if (n) {
          var o = (e - 1) / 2 + 1;
          return parseInt(r) > 0 && (o += 1), i && e % 2 === 0 && (o += 1), o;
        }
        return i ? 0 : e - 1;
      };
      e.slidesOnRight = C;
      var x = function(t) {
        var e = t.slidesToShow,
          n = t.centerMode,
          i = t.rtl,
          r = t.centerPadding;
        if (n) {
          var o = (e - 1) / 2 + 1;
          return parseInt(r) > 0 && (o += 1), i || e % 2 !== 0 || (o += 1), o;
        }
        return i ? e - 1 : 0;
      };
      e.slidesOnLeft = x;
      e.canUseDOM = function() {
        return !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      };
    },
    yLpj: function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (i) {
        "object" === typeof window && (n = window);
      }
      t.exports = n;
    },
    ze6v: function(t, e) {
      t.exports =
        "https://automedon.github.io/Portfolio2/_next/static/images/contacts-2839b872a39d8780693e83e680721c92.png";
    }
  },
  [["m0L+", 0, 1]]
]);
