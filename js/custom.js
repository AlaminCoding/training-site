!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, i) {
  "use strict";
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function s(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(i).filter(function (t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable;
          })
        )),
        n.forEach(function (e) {
          var n, s, o;
          (n = t),
            (o = i[(s = e)]),
            s in n
              ? Object.defineProperty(n, s, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[s] = o);
        });
    }
    return t;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (i = i && i.hasOwnProperty("default") ? i.default : i);
  var r,
    a,
    l,
    h,
    c,
    u,
    d,
    g,
    p,
    f,
    m,
    _,
    v,
    y,
    w,
    E,
    C,
    T,
    b,
    x,
    S,
    I,
    D,
    A,
    N,
    O,
    k,
    $,
    P,
    j,
    L,
    H,
    R,
    M,
    z,
    W,
    F,
    U,
    Q,
    B,
    K,
    V,
    Y,
    G,
    q,
    Z,
    X,
    J,
    tt,
    et,
    it,
    nt,
    st,
    ot,
    rt,
    at,
    lt,
    ht,
    ct,
    ut,
    dt,
    gt,
    pt,
    ft,
    mt,
    _t,
    vt,
    yt,
    wt,
    Et,
    Ct,
    Tt,
    bt,
    xt,
    St,
    It,
    Dt,
    At,
    Nt,
    Ot,
    kt,
    $t,
    Pt,
    jt,
    Lt,
    Ht,
    Rt,
    Mt,
    zt,
    Wt,
    Ft,
    Ut,
    Qt,
    Bt,
    Kt,
    Vt,
    Yt,
    Gt,
    qt,
    Zt,
    Xt,
    Jt,
    te,
    ee,
    ie,
    ne,
    se,
    oe,
    re,
    ae,
    le,
    he,
    ce,
    ue,
    de,
    ge,
    pe,
    fe,
    me,
    _e,
    ve,
    ye,
    we,
    Ee,
    Ce = (function (t) {
      var e = "transitionend";
      var i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (e) {
          var i = e.getAttribute("data-target");
          (i && "#" !== i) || (i = e.getAttribute("href") || "");
          try {
            return 0 < t(document).find(i).length ? i : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (e) {
          if (!e) return 0;
          var i = t(e).css("transition-duration");
          return parseFloat(i)
            ? ((i = i.split(",")[0]), 1e3 * parseFloat(i))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (i) {
          t(i).trigger(e);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var s in n)
            if (Object.prototype.hasOwnProperty.call(n, s)) {
              var o = n[s],
                r = e[s],
                a =
                  r && i.isElement(r)
                    ? "element"
                    : ((l = r),
                      {}.toString
                        .call(l)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(o).test(a))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    s +
                    '" provided type "' +
                    a +
                    '" but expected type "' +
                    o +
                    '".'
                );
            }
          var l;
        },
      };
      return (
        (t.fn.emulateTransitionEnd = function (e) {
          var n = this,
            s = !1;
          return (
            t(this).one(i.TRANSITION_END, function () {
              s = !0;
            }),
            setTimeout(function () {
              s || i.triggerTransitionEnd(n);
            }, e),
            this
          );
        }),
        (t.event.special[i.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (e) {
            if (t(e.target).is(this))
              return e.handleObj.handler.apply(this, arguments);
          },
        }),
        i
      );
    })(e),
    Te =
      ((a = "alert"),
      (h = "." + (l = "bs.alert")),
      (c = (r = e).fn[a]),
      (u = {
        CLOSE: "close" + h,
        CLOSED: "closed" + h,
        CLICK_DATA_API: "click" + h + ".data-api",
      }),
      "alert",
      "fade",
      "show",
      (d = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (e.dispose = function () {
            r.removeData(this._element, l), (this._element = null);
          }),
          (e._getRootElement = function (t) {
            var e = Ce.getSelectorFromElement(t),
              i = !1;
            return e && (i = r(e)[0]), i || (i = r(t).closest(".alert")[0]), i;
          }),
          (e._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e;
          }),
          (e._removeElement = function (t) {
            var e = this;
            if ((r(t).removeClass("show"), r(t).hasClass("fade"))) {
              var i = Ce.getTransitionDurationFromElement(t);
              r(t)
                .one(Ce.TRANSITION_END, function (i) {
                  return e._destroyElement(t, i);
                })
                .emulateTransitionEnd(i);
            } else this._destroyElement(t);
          }),
          (e._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove();
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = r(this),
                n = i.data(l);
              n || ((n = new t(this)), i.data(l, n)),
                "close" === e && n[e](this);
            });
          }),
          (t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          t
        );
      })()),
      r(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        d._handleDismiss(new d())
      ),
      (r.fn[a] = d._jQueryInterface),
      (r.fn[a].Constructor = d),
      (r.fn[a].noConflict = function () {
        return (r.fn[a] = c), d._jQueryInterface;
      }),
      d),
    be =
      ((p = "button"),
      (m = "." + (f = "bs.button")),
      (_ = ".data-api"),
      (v = (g = e).fn[p]),
      (y = "active"),
      "btn",
      (w = '[data-toggle^="button"]'),
      '[data-toggle="buttons"]',
      "input",
      ".active",
      (E = ".btn"),
      (C = {
        CLICK_DATA_API: "click" + m + _,
        FOCUS_BLUR_DATA_API: "focus" + m + _ + " blur" + m + _,
      }),
      (T = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.toggle = function () {
            var t = !0,
              e = !0,
              i = g(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var n = g(this._element).find("input")[0];
              if (n) {
                if ("radio" === n.type)
                  if (n.checked && g(this._element).hasClass(y)) t = !1;
                  else {
                    var s = g(i).find(".active")[0];
                    s && g(s).removeClass(y);
                  }
                if (t) {
                  if (
                    n.hasAttribute("disabled") ||
                    i.hasAttribute("disabled") ||
                    n.classList.contains("disabled") ||
                    i.classList.contains("disabled")
                  )
                    return;
                  (n.checked = !g(this._element).hasClass(y)),
                    g(n).trigger("change");
                }
                n.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !g(this._element).hasClass(y)
              ),
              t && g(this._element).toggleClass(y);
          }),
          (e.dispose = function () {
            g.removeData(this._element, f), (this._element = null);
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = g(this).data(f);
              i || ((i = new t(this)), g(this).data(f, i)),
                "toggle" === e && i[e]();
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          t
        );
      })()),
      g(document)
        .on(C.CLICK_DATA_API, w, function (t) {
          t.preventDefault();
          var e = t.target;
          g(e).hasClass("btn") || (e = g(e).closest(E)),
            T._jQueryInterface.call(g(e), "toggle");
        })
        .on(C.FOCUS_BLUR_DATA_API, w, function (t) {
          var e = g(t.target).closest(E)[0];
          g(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
        }),
      (g.fn[p] = T._jQueryInterface),
      (g.fn[p].Constructor = T),
      (g.fn[p].noConflict = function () {
        return (g.fn[p] = v), T._jQueryInterface;
      }),
      T),
    xe =
      ((x = "carousel"),
      (I = "." + (S = "bs.carousel")),
      (D = ".data-api"),
      (A = (b = e).fn[x]),
      (N = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
      }),
      (O = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
      }),
      (k = "next"),
      ($ = "prev"),
      "left",
      "right",
      (P = {
        SLIDE: "slide" + I,
        SLID: "slid" + I,
        KEYDOWN: "keydown" + I,
        MOUSEENTER: "mouseenter" + I,
        MOUSELEAVE: "mouseleave" + I,
        TOUCHEND: "touchend" + I,
        LOAD_DATA_API: "load" + I + D,
        CLICK_DATA_API: "click" + I + D,
      }),
      "carousel",
      (j = "active"),
      "slide",
      "carousel-item-right",
      "carousel-item-left",
      "carousel-item-next",
      "carousel-item-prev",
      (L = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]',
      }),
      (H = (function () {
        function t(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = b(t)[0]),
            (this._indicatorsElement = b(this._element).find(L.INDICATORS)[0]),
            this._addEventListeners();
        }
        var e = t.prototype;
        return (
          (e.next = function () {
            this._isSliding || this._slide(k);
          }),
          (e.nextWhenVisible = function () {
            !document.hidden &&
              b(this._element).is(":visible") &&
              "hidden" !== b(this._element).css("visibility") &&
              this.next();
          }),
          (e.prev = function () {
            this._isSliding || this._slide($);
          }),
          (e.pause = function (t) {
            t || (this._isPaused = !0),
              b(this._element).find(L.NEXT_PREV)[0] &&
                (Ce.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (e.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (e.to = function (t) {
            var e = this;
            this._activeElement = b(this._element).find(L.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                b(this._element).one(P.SLID, function () {
                  return e.to(t);
                });
              else {
                if (i === t) return this.pause(), void this.cycle();
                var n = i < t ? k : $;
                this._slide(n, this._items[t]);
              }
          }),
          (e.dispose = function () {
            b(this._element).off(I),
              b.removeData(this._element, S),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (e._getConfig = function (t) {
            return (t = o({}, N, t)), Ce.typeCheckConfig(x, t, O), t;
          }),
          (e._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              b(this._element).on(P.KEYDOWN, function (e) {
                return t._keydown(e);
              }),
              "hover" === this._config.pause &&
                (b(this._element)
                  .on(P.MOUSEENTER, function (e) {
                    return t.pause(e);
                  })
                  .on(P.MOUSELEAVE, function (e) {
                    return t.cycle(e);
                  }),
                "ontouchstart" in document.documentElement &&
                  b(this._element).on(P.TOUCHEND, function () {
                    t.pause(),
                      t.touchTimeout && clearTimeout(t.touchTimeout),
                      (t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e);
                      }, 500 + t._config.interval));
                  }));
          }),
          (e._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (e._getItemIndex = function (t) {
            return (
              (this._items = b.makeArray(b(t).parent().find(L.ITEM))),
              this._items.indexOf(t)
            );
          }),
          (e._getItemByDirection = function (t, e) {
            var i = t === k,
              n = t === $,
              s = this._getItemIndex(e),
              o = this._items.length - 1;
            if (((n && 0 === s) || (i && s === o)) && !this._config.wrap)
              return e;
            var r = (s + (t === $ ? -1 : 1)) % this._items.length;
            return -1 === r
              ? this._items[this._items.length - 1]
              : this._items[r];
          }),
          (e._triggerSlideEvent = function (t, e) {
            var i = this._getItemIndex(t),
              n = this._getItemIndex(b(this._element).find(L.ACTIVE_ITEM)[0]),
              s = b.Event(P.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i,
              });
            return b(this._element).trigger(s), s;
          }),
          (e._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              b(this._indicatorsElement).find(L.ACTIVE).removeClass(j);
              var e = this._indicatorsElement.children[this._getItemIndex(t)];
              e && b(e).addClass(j);
            }
          }),
          (e._slide = function (t, e) {
            var i,
              n,
              s,
              o = this,
              r = b(this._element).find(L.ACTIVE_ITEM)[0],
              a = this._getItemIndex(r),
              l = e || (r && this._getItemByDirection(t, r)),
              h = this._getItemIndex(l),
              c = Boolean(this._interval);
            if (
              (t === k
                ? ((i = "carousel-item-left"),
                  (n = "carousel-item-next"),
                  (s = "left"))
                : ((i = "carousel-item-right"),
                  (n = "carousel-item-prev"),
                  (s = "right")),
              l && b(l).hasClass(j))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, s).isDefaultPrevented() &&
              r &&
              l
            ) {
              (this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = b.Event(P.SLID, {
                relatedTarget: l,
                direction: s,
                from: a,
                to: h,
              });
              if (b(this._element).hasClass("slide")) {
                b(l).addClass(n),
                  Ce.reflow(l),
                  b(r).addClass(i),
                  b(l).addClass(i);
                var d = Ce.getTransitionDurationFromElement(r);
                b(r)
                  .one(Ce.TRANSITION_END, function () {
                    b(l)
                      .removeClass(i + " " + n)
                      .addClass(j),
                      b(r).removeClass(j + " " + n + " " + i),
                      (o._isSliding = !1),
                      setTimeout(function () {
                        return b(o._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(d);
              } else
                b(r).removeClass(j),
                  b(l).addClass(j),
                  (this._isSliding = !1),
                  b(this._element).trigger(u);
              c && this.cycle();
            }
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = b(this).data(S),
                n = o({}, N, b(this).data());
              "object" == typeof e && (n = o({}, n, e));
              var s = "string" == typeof e ? e : n.slide;
              if (
                (i || ((i = new t(this, n)), b(this).data(S, i)),
                "number" == typeof e)
              )
                i.to(e);
              else if ("string" == typeof s) {
                if (void 0 === i[s])
                  throw new TypeError('No method named "' + s + '"');
                i[s]();
              } else n.interval && (i.pause(), i.cycle());
            });
          }),
          (t._dataApiClickHandler = function (e) {
            var i = Ce.getSelectorFromElement(this);
            if (i) {
              var n = b(i)[0];
              if (n && b(n).hasClass("carousel")) {
                var s = o({}, b(n).data(), b(this).data()),
                  r = this.getAttribute("data-slide-to");
                r && (s.interval = !1),
                  t._jQueryInterface.call(b(n), s),
                  r && b(n).data(S).to(r),
                  e.preventDefault();
              }
            }
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return N;
              },
            },
          ]),
          t
        );
      })()),
      b(document).on(P.CLICK_DATA_API, L.DATA_SLIDE, H._dataApiClickHandler),
      b(window).on(P.LOAD_DATA_API, function () {
        b(L.DATA_RIDE).each(function () {
          var t = b(this);
          H._jQueryInterface.call(t, t.data());
        });
      }),
      (b.fn[x] = H._jQueryInterface),
      (b.fn[x].Constructor = H),
      (b.fn[x].noConflict = function () {
        return (b.fn[x] = A), H._jQueryInterface;
      }),
      H),
    Se =
      ((M = "collapse"),
      (W = "." + (z = "bs.collapse")),
      (F = (R = e).fn[M]),
      (U = { toggle: !0, parent: "" }),
      (Q = { toggle: "boolean", parent: "(string|element)" }),
      (B = {
        SHOW: "show" + W,
        SHOWN: "shown" + W,
        HIDE: "hide" + W,
        HIDDEN: "hidden" + W,
        CLICK_DATA_API: "click" + W + ".data-api",
      }),
      (K = "show"),
      (V = "collapse"),
      (Y = "collapsing"),
      (G = "collapsed"),
      "width",
      "height",
      (q = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]',
      }),
      (Z = (function () {
        function t(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = R.makeArray(
              R(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (var i = R(q.DATA_TOGGLE), n = 0; n < i.length; n++) {
            var s = i[n],
              o = Ce.getSelectorFromElement(s);
            null !== o &&
              0 < R(o).filter(t).length &&
              ((this._selector = o), this._triggerArray.push(s));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var e = t.prototype;
        return (
          (e.toggle = function () {
            R(this._element).hasClass(K) ? this.hide() : this.show();
          }),
          (e.show = function () {
            var e,
              i,
              n = this;
            if (
              !(
                this._isTransitioning ||
                R(this._element).hasClass(K) ||
                (this._parent &&
                  0 ===
                    (e = R.makeArray(
                      R(this._parent)
                        .find(q.ACTIVES)
                        .filter('[data-parent="' + this._config.parent + '"]')
                    )).length &&
                  (e = null),
                e &&
                  (i = R(e).not(this._selector).data(z)) &&
                  i._isTransitioning)
              )
            ) {
              var s = R.Event(B.SHOW);
              if ((R(this._element).trigger(s), !s.isDefaultPrevented())) {
                e &&
                  (t._jQueryInterface.call(R(e).not(this._selector), "hide"),
                  i || R(e).data(z, null));
                var o = this._getDimension();
                R(this._element).removeClass(V).addClass(Y),
                  (this._element.style[o] = 0) < this._triggerArray.length &&
                    R(this._triggerArray)
                      .removeClass(G)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                  a = Ce.getTransitionDurationFromElement(this._element);
                R(this._element)
                  .one(Ce.TRANSITION_END, function () {
                    R(n._element).removeClass(Y).addClass(V).addClass(K),
                      (n._element.style[o] = ""),
                      n.setTransitioning(!1),
                      R(n._element).trigger(B.SHOWN);
                  })
                  .emulateTransitionEnd(a),
                  (this._element.style[o] = this._element[r] + "px");
              }
            }
          }),
          (e.hide = function () {
            var t = this;
            if (!this._isTransitioning && R(this._element).hasClass(K)) {
              var e = R.Event(B.HIDE);
              if ((R(this._element).trigger(e), !e.isDefaultPrevented())) {
                var i = this._getDimension();
                if (
                  ((this._element.style[i] =
                    this._element.getBoundingClientRect()[i] + "px"),
                  Ce.reflow(this._element),
                  R(this._element).addClass(Y).removeClass(V).removeClass(K),
                  0 < this._triggerArray.length)
                )
                  for (var n = 0; n < this._triggerArray.length; n++) {
                    var s = this._triggerArray[n],
                      o = Ce.getSelectorFromElement(s);
                    null !== o &&
                      (R(o).hasClass(K) ||
                        R(s).addClass(G).attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0), (this._element.style[i] = "");
                var r = Ce.getTransitionDurationFromElement(this._element);
                R(this._element)
                  .one(Ce.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      R(t._element)
                        .removeClass(Y)
                        .addClass(V)
                        .trigger(B.HIDDEN);
                  })
                  .emulateTransitionEnd(r);
              }
            }
          }),
          (e.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (e.dispose = function () {
            R.removeData(this._element, z),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (e._getConfig = function (t) {
            return (
              ((t = o({}, U, t)).toggle = Boolean(t.toggle)),
              Ce.typeCheckConfig(M, t, Q),
              t
            );
          }),
          (e._getDimension = function () {
            return R(this._element).hasClass("width") ? "width" : "height";
          }),
          (e._getParent = function () {
            var e = this,
              i = null;
            Ce.isElement(this._config.parent)
              ? ((i = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (i = this._config.parent[0]))
              : (i = R(this._config.parent)[0]);
            var n =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]';
            return (
              R(i)
                .find(n)
                .each(function (i, n) {
                  e._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                }),
              i
            );
          }),
          (e._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
              var i = R(t).hasClass(K);
              0 < e.length && R(e).toggleClass(G, !i).attr("aria-expanded", i);
            }
          }),
          (t._getTargetFromElement = function (t) {
            var e = Ce.getSelectorFromElement(t);
            return e ? R(e)[0] : null;
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = R(this),
                n = i.data(z),
                s = o({}, U, i.data(), "object" == typeof e && e ? e : {});
              if (
                (!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
                n || ((n = new t(this, s)), i.data(z, n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return U;
              },
            },
          ]),
          t
        );
      })()),
      R(document).on(B.CLICK_DATA_API, q.DATA_TOGGLE, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = R(this),
          i = Ce.getSelectorFromElement(this);
        R(i).each(function () {
          var t = R(this),
            i = t.data(z) ? "toggle" : e.data();
          Z._jQueryInterface.call(t, i);
        });
      }),
      (R.fn[M] = Z._jQueryInterface),
      (R.fn[M].Constructor = Z),
      (R.fn[M].noConflict = function () {
        return (R.fn[M] = F), Z._jQueryInterface;
      }),
      Z),
    Ie =
      ((J = "dropdown"),
      (et = "." + (tt = "bs.dropdown")),
      (it = ".data-api"),
      (nt = (X = e).fn[J]),
      (st = new RegExp("38|40|27")),
      (ot = {
        HIDE: "hide" + et,
        HIDDEN: "hidden" + et,
        SHOW: "show" + et,
        SHOWN: "shown" + et,
        CLICK: "click" + et,
        CLICK_DATA_API: "click" + et + it,
        KEYDOWN_DATA_API: "keydown" + et + it,
        KEYUP_DATA_API: "keyup" + et + it,
      }),
      (rt = "disabled"),
      (at = "show"),
      "dropup",
      "dropright",
      "dropleft",
      (lt = "dropdown-menu-right"),
      "position-static",
      (ht = '[data-toggle="dropdown"]'),
      ".dropdown form",
      (ct = ".dropdown-menu"),
      ".navbar-nav",
      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      "top-start",
      "top-end",
      "bottom-start",
      "bottom-end",
      "right-start",
      "left-start",
      (ut = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (dt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (gt = (function () {
        function t(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = t.prototype;
        return (
          (e.toggle = function () {
            if (!this._element.disabled && !X(this._element).hasClass(rt)) {
              var e = t._getParentFromElement(this._element),
                n = X(this._menu).hasClass(at);
              if ((t._clearMenus(), !n)) {
                var s = { relatedTarget: this._element },
                  o = X.Event(ot.SHOW, s);
                if ((X(e).trigger(o), !o.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === i)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = e)
                      : Ce.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        X(e).addClass("position-static"),
                      (this._popper = new i(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === X(e).closest(".navbar-nav").length &&
                    X(document.body).children().on("mouseover", null, X.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    X(this._menu).toggleClass(at),
                    X(e).toggleClass(at).trigger(X.Event(ot.SHOWN, s));
                }
              }
            }
          }),
          (e.dispose = function () {
            X.removeData(this._element, tt),
              X(this._element).off(et),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function () {
            var t = this;
            X(this._element).on(ot.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function (t) {
            return (
              (t = o({}, this.constructor.Default, X(this._element).data(), t)),
              Ce.typeCheckConfig(J, t, this.constructor.DefaultType),
              t
            );
          }),
          (e._getMenuElement = function () {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element);
              this._menu = X(e).find(ct)[0];
            }
            return this._menu;
          }),
          (e._getPlacement = function () {
            var t = X(this._element).parent(),
              e = "bottom-start";
            return (
              t.hasClass("dropup")
                ? ((e = "top-start"),
                  X(this._menu).hasClass(lt) && (e = "top-end"))
                : t.hasClass("dropright")
                ? (e = "right-start")
                : t.hasClass("dropleft")
                ? (e = "left-start")
                : X(this._menu).hasClass(lt) && (e = "bottom-end"),
              e
            );
          }),
          (e._detectNavbar = function () {
            return 0 < X(this._element).closest(".navbar").length;
          }),
          (e._getPopperConfig = function () {
            var t = this,
              e = {};
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = o(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset);
            var i = {
              placement: this._getPlacement(),
              modifiers: {
                offset: e,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (i.modifiers.applyStyle = { enabled: !1 }),
              i
            );
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = X(this).data(tt);
              if (
                (i ||
                  ((i = new t(this, "object" == typeof e ? e : null)),
                  X(this).data(tt, i)),
                "string" == typeof e)
              ) {
                if (void 0 === i[e])
                  throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          (t._clearMenus = function (e) {
            if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
              for (var i = X.makeArray(X(ht)), n = 0; n < i.length; n++) {
                var s = t._getParentFromElement(i[n]),
                  o = X(i[n]).data(tt),
                  r = { relatedTarget: i[n] };
                if (o) {
                  var a = o._menu;
                  if (
                    X(s).hasClass(at) &&
                    !(
                      e &&
                      (("click" === e.type &&
                        /input|textarea/i.test(e.target.tagName)) ||
                        ("keyup" === e.type && 9 === e.which)) &&
                      X.contains(s, e.target)
                    )
                  ) {
                    var l = X.Event(ot.HIDE, r);
                    X(s).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          X(document.body)
                            .children()
                            .off("mouseover", null, X.noop),
                        i[n].setAttribute("aria-expanded", "false"),
                        X(a).removeClass(at),
                        X(s).removeClass(at).trigger(X.Event(ot.HIDDEN, r)));
                  }
                }
              }
          }),
          (t._getParentFromElement = function (t) {
            var e,
              i = Ce.getSelectorFromElement(t);
            return i && (e = X(i)[0]), e || t.parentNode;
          }),
          (t._dataApiKeydownHandler = function (e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        X(e.target).closest(ct).length))
                  )
                : st.test(e.which)) &&
              (e.preventDefault(),
              e.stopPropagation(),
              !this.disabled && !X(this).hasClass(rt))
            ) {
              var i = t._getParentFromElement(this),
                n = X(i).hasClass(at);
              if (
                (n || (27 === e.which && 32 === e.which)) &&
                (!n || (27 !== e.which && 32 !== e.which))
              ) {
                var s = X(i)
                  .find(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                  .get();
                if (0 !== s.length) {
                  var o = s.indexOf(e.target);
                  38 === e.which && 0 < o && o--,
                    40 === e.which && o < s.length - 1 && o++,
                    o < 0 && (o = 0),
                    s[o].focus();
                }
              } else {
                if (27 === e.which) {
                  var r = X(i).find(ht)[0];
                  X(r).trigger("focus");
                }
                X(this).trigger("click");
              }
            }
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ut;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return dt;
              },
            },
          ]),
          t
        );
      })()),
      X(document)
        .on(ot.KEYDOWN_DATA_API, ht, gt._dataApiKeydownHandler)
        .on(ot.KEYDOWN_DATA_API, ct, gt._dataApiKeydownHandler)
        .on(ot.CLICK_DATA_API + " " + ot.KEYUP_DATA_API, gt._clearMenus)
        .on(ot.CLICK_DATA_API, ht, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            gt._jQueryInterface.call(X(this), "toggle");
        })
        .on(ot.CLICK_DATA_API, ".dropdown form", function (t) {
          t.stopPropagation();
        }),
      (X.fn[J] = gt._jQueryInterface),
      (X.fn[J].Constructor = gt),
      (X.fn[J].noConflict = function () {
        return (X.fn[J] = nt), gt._jQueryInterface;
      }),
      gt),
    De =
      ((ft = "modal"),
      (_t = "." + (mt = "bs.modal")),
      (vt = (pt = e).fn[ft]),
      (yt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (wt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (Et = {
        HIDE: "hide" + _t,
        HIDDEN: "hidden" + _t,
        SHOW: "show" + _t,
        SHOWN: "shown" + _t,
        FOCUSIN: "focusin" + _t,
        RESIZE: "resize" + _t,
        CLICK_DISMISS: "click.dismiss" + _t,
        KEYDOWN_DISMISS: "keydown.dismiss" + _t,
        MOUSEUP_DISMISS: "mouseup.dismiss" + _t,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + _t,
        CLICK_DATA_API: "click" + _t + ".data-api",
      }),
      "modal-scrollbar-measure",
      "modal-backdrop",
      (Ct = "modal-open"),
      (Tt = "fade"),
      (bt = "show"),
      (xt = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler",
      }),
      (St = (function () {
        function t(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = pt(t).find(xt.DIALOG)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var e = t.prototype;
        return (
          (e.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (e.show = function (t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              pt(this._element).hasClass(Tt) && (this._isTransitioning = !0);
              var i = pt.Event(Et.SHOW, { relatedTarget: t });
              pt(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  pt(document.body).addClass(Ct),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  pt(this._element).on(
                    Et.CLICK_DISMISS,
                    xt.DATA_DISMISS,
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                  pt(this._dialog).on(Et.MOUSEDOWN_DISMISS, function () {
                    pt(e._element).one(Et.MOUSEUP_DISMISS, function (t) {
                      pt(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (e.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var i = pt.Event(Et.HIDE);
              if (
                (pt(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var n = pt(this._element).hasClass(Tt);
                if (
                  (n && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  pt(document).off(Et.FOCUSIN),
                  pt(this._element).removeClass(bt),
                  pt(this._element).off(Et.CLICK_DISMISS),
                  pt(this._dialog).off(Et.MOUSEDOWN_DISMISS),
                  n)
                ) {
                  var s = Ce.getTransitionDurationFromElement(this._element);
                  pt(this._element)
                    .one(Ce.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(s);
                } else this._hideModal();
              }
            }
          }),
          (e.dispose = function () {
            pt.removeData(this._element, mt),
              pt(window, document, this._element, this._backdrop).off(_t),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (t) {
            return (t = o({}, yt, t)), Ce.typeCheckConfig(ft, t, wt), t;
          }),
          (e._showElement = function (t) {
            var e = this,
              i = pt(this._element).hasClass(Tt);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              i && Ce.reflow(this._element),
              pt(this._element).addClass(bt),
              this._config.focus && this._enforceFocus();
            var n = pt.Event(Et.SHOWN, { relatedTarget: t }),
              s = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  pt(e._element).trigger(n);
              };
            if (i) {
              var o = Ce.getTransitionDurationFromElement(this._element);
              pt(this._dialog)
                .one(Ce.TRANSITION_END, s)
                .emulateTransitionEnd(o);
            } else s();
          }),
          (e._enforceFocus = function () {
            var t = this;
            pt(document)
              .off(Et.FOCUSIN)
              .on(Et.FOCUSIN, function (e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === pt(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var t = this;
            this._isShown && this._config.keyboard
              ? pt(this._element).on(Et.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                })
              : this._isShown || pt(this._element).off(Et.KEYDOWN_DISMISS);
          }),
          (e._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? pt(window).on(Et.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
              : pt(window).off(Et.RESIZE);
          }),
          (e._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                pt(document.body).removeClass(Ct),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  pt(t._element).trigger(Et.HIDDEN);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              (pt(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (t) {
            var e = this,
              i = pt(this._element).hasClass(Tt) ? Tt : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                i && pt(this._backdrop).addClass(i),
                pt(this._backdrop).appendTo(document.body),
                pt(this._element).on(Et.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                i && Ce.reflow(this._backdrop),
                pt(this._backdrop).addClass(bt),
                !t)
              )
                return;
              if (!i) return void t();
              var n = Ce.getTransitionDurationFromElement(this._backdrop);
              pt(this._backdrop)
                .one(Ce.TRANSITION_END, t)
                .emulateTransitionEnd(n);
            } else if (!this._isShown && this._backdrop) {
              pt(this._backdrop).removeClass(bt);
              var s = function () {
                e._removeBackdrop(), t && t();
              };
              if (pt(this._element).hasClass(Tt)) {
                var o = Ce.getTransitionDurationFromElement(this._backdrop);
                pt(this._backdrop)
                  .one(Ce.TRANSITION_END, s)
                  .emulateTransitionEnd(o);
              } else s();
            } else t && t();
          }),
          (e._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (e._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              pt(xt.FIXED_CONTENT).each(function (e, i) {
                var n = pt(i)[0].style.paddingRight,
                  s = pt(i).css("padding-right");
                pt(i)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(s) + t._scrollbarWidth + "px"
                  );
              }),
                pt(xt.STICKY_CONTENT).each(function (e, i) {
                  var n = pt(i)[0].style.marginRight,
                    s = pt(i).css("margin-right");
                  pt(i)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(s) - t._scrollbarWidth + "px"
                    );
                }),
                pt(xt.NAVBAR_TOGGLER).each(function (e, i) {
                  var n = pt(i)[0].style.marginRight,
                    s = pt(i).css("margin-right");
                  pt(i)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(s) + t._scrollbarWidth + "px"
                    );
                });
              var e = document.body.style.paddingRight,
                i = pt(document.body).css("padding-right");
              pt(document.body)
                .data("padding-right", e)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
          }),
          (e._resetScrollbar = function () {
            pt(xt.FIXED_CONTENT).each(function (t, e) {
              var i = pt(e).data("padding-right");
              void 0 !== i &&
                pt(e).css("padding-right", i).removeData("padding-right");
            }),
              pt(xt.STICKY_CONTENT + ", " + xt.NAVBAR_TOGGLER).each(function (
                t,
                e
              ) {
                var i = pt(e).data("margin-right");
                void 0 !== i &&
                  pt(e).css("margin-right", i).removeData("margin-right");
              });
            var t = pt(document.body).data("padding-right");
            void 0 !== t &&
              pt(document.body)
                .css("padding-right", t)
                .removeData("padding-right");
          }),
          (e._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (t._jQueryInterface = function (e, i) {
            return this.each(function () {
              var n = pt(this).data(mt),
                s = o(
                  {},
                  yt,
                  pt(this).data(),
                  "object" == typeof e && e ? e : {}
                );
              if (
                (n || ((n = new t(this, s)), pt(this).data(mt, n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e](i);
              } else s.show && n.show(i);
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return yt;
              },
            },
          ]),
          t
        );
      })()),
      pt(document).on(Et.CLICK_DATA_API, xt.DATA_TOGGLE, function (t) {
        var e,
          i = this,
          n = Ce.getSelectorFromElement(this);
        n && (e = pt(n)[0]);
        var s = pt(e).data(mt)
          ? "toggle"
          : o({}, pt(e).data(), pt(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var r = pt(e).one(Et.SHOW, function (t) {
          t.isDefaultPrevented() ||
            r.one(Et.HIDDEN, function () {
              pt(i).is(":visible") && i.focus();
            });
        });
        St._jQueryInterface.call(pt(e), s, this);
      }),
      (pt.fn[ft] = St._jQueryInterface),
      (pt.fn[ft].Constructor = St),
      (pt.fn[ft].noConflict = function () {
        return (pt.fn[ft] = vt), St._jQueryInterface;
      }),
      St),
    Ae =
      ((Dt = "tooltip"),
      (Nt = "." + (At = "bs.tooltip")),
      (Ot = (It = e).fn[Dt]),
      (kt = "bs-tooltip"),
      ($t = new RegExp("(^|\\s)" + kt + "\\S+", "g")),
      (Lt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(jt = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(Pt = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      "out",
      (Rt = {
        HIDE: "hide" + Nt,
        HIDDEN: "hidden" + Nt,
        SHOW: (Ht = "show") + Nt,
        SHOWN: "shown" + Nt,
        INSERTED: "inserted" + Nt,
        CLICK: "click" + Nt,
        FOCUSIN: "focusin" + Nt,
        FOCUSOUT: "focusout" + Nt,
        MOUSEENTER: "mouseenter" + Nt,
        MOUSELEAVE: "mouseleave" + Nt,
      }),
      (Mt = "fade"),
      (zt = "show"),
      ".tooltip-inner",
      ".arrow",
      (Wt = "hover"),
      (Ft = "focus"),
      "click",
      "manual",
      (Ut = (function () {
        function t(t, e) {
          if (void 0 === i)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var e = t.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  i = It(t.currentTarget).data(e);
                i ||
                  ((i = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  It(t.currentTarget).data(e, i)),
                  (i._activeTrigger.click = !i._activeTrigger.click),
                  i._isWithActiveTrigger()
                    ? i._enter(null, i)
                    : i._leave(null, i);
              } else {
                if (It(this.getTipElement()).hasClass(zt))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              It.removeData(this.element, this.constructor.DATA_KEY),
              It(this.element).off(this.constructor.EVENT_KEY),
              It(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && It(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            var t = this;
            if ("none" === It(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var e = It.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              It(this.element).trigger(e);
              var n = It.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (e.isDefaultPrevented() || !n) return;
              var s = this.getTipElement(),
                o = Ce.getUID(this.constructor.NAME);
              s.setAttribute("id", o),
                this.element.setAttribute("aria-describedby", o),
                this.setContent(),
                this.config.animation && It(s).addClass(Mt);
              var r =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, s, this.element)
                    : this.config.placement,
                a = this._getAttachment(r);
              this.addAttachmentClass(a);
              var l =
                !1 === this.config.container
                  ? document.body
                  : It(this.config.container);
              It(s).data(this.constructor.DATA_KEY, this),
                It.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || It(s).appendTo(l),
                It(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new i(this.element, s, {
                  placement: a,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: ".arrow" },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement &&
                      t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    t._handlePopperPlacementChange(e);
                  },
                })),
                It(s).addClass(zt),
                "ontouchstart" in document.documentElement &&
                  It(document.body).children().on("mouseover", null, It.noop);
              var h = function () {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                (t._hoverState = null),
                  It(t.element).trigger(t.constructor.Event.SHOWN),
                  "out" === e && t._leave(null, t);
              };
              if (It(this.tip).hasClass(Mt)) {
                var c = Ce.getTransitionDurationFromElement(this.tip);
                It(this.tip).one(Ce.TRANSITION_END, h).emulateTransitionEnd(c);
              } else h();
            }
          }),
          (e.hide = function (t) {
            var e = this,
              i = this.getTipElement(),
              n = It.Event(this.constructor.Event.HIDE),
              s = function () {
                e._hoverState !== Ht &&
                  i.parentNode &&
                  i.parentNode.removeChild(i),
                  e._cleanTipClass(),
                  e.element.removeAttribute("aria-describedby"),
                  It(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((It(this.element).trigger(n), !n.isDefaultPrevented())) {
              if (
                (It(i).removeClass(zt),
                "ontouchstart" in document.documentElement &&
                  It(document.body).children().off("mouseover", null, It.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Ft] = !1),
                (this._activeTrigger[Wt] = !1),
                It(this.tip).hasClass(Mt))
              ) {
                var o = Ce.getTransitionDurationFromElement(i);
                It(i).one(Ce.TRANSITION_END, s).emulateTransitionEnd(o);
              } else s();
              this._hoverState = "";
            }
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (t) {
            It(this.getTipElement()).addClass(kt + "-" + t);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || It(this.config.template)[0]), this.tip
            );
          }),
          (e.setContent = function () {
            var t = It(this.getTipElement());
            this.setElementContent(t.find(".tooltip-inner"), this.getTitle()),
              t.removeClass(Mt + " " + zt);
          }),
          (e.setElementContent = function (t, e) {
            var i = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? i
                ? It(e).parent().is(t) || t.empty().append(e)
                : t.text(It(e).text())
              : t[i ? "html" : "text"](e);
          }),
          (e.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            );
          }),
          (e._getAttachment = function (t) {
            return jt[t.toUpperCase()];
          }),
          (e._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach(function (e) {
              if ("click" === e)
                It(t.element).on(
                  t.constructor.Event.CLICK,
                  t.config.selector,
                  function (e) {
                    return t.toggle(e);
                  }
                );
              else if ("manual" !== e) {
                var i =
                    e === Wt
                      ? t.constructor.Event.MOUSEENTER
                      : t.constructor.Event.FOCUSIN,
                  n =
                    e === Wt
                      ? t.constructor.Event.MOUSELEAVE
                      : t.constructor.Event.FOCUSOUT;
                It(t.element)
                  .on(i, t.config.selector, function (e) {
                    return t._enter(e);
                  })
                  .on(n, t.config.selector, function (e) {
                    return t._leave(e);
                  });
              }
              It(t.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return t.hide();
                });
            }),
              this.config.selector
                ? (this.config = o({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (e._enter = function (t, e) {
            var i = this.constructor.DATA_KEY;
            (e = e || It(t.currentTarget).data(i)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              It(t.currentTarget).data(i, e)),
              t && (e._activeTrigger["focusin" === t.type ? Ft : Wt] = !0),
              It(e.getTipElement()).hasClass(zt) || e._hoverState === Ht
                ? (e._hoverState = Ht)
                : (clearTimeout(e._timeout),
                  (e._hoverState = Ht),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === Ht && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (e._leave = function (t, e) {
            var i = this.constructor.DATA_KEY;
            (e = e || It(t.currentTarget).data(i)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              It(t.currentTarget).data(i, e)),
              t && (e._activeTrigger["focusout" === t.type ? Ft : Wt] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = "out"),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      "out" === e._hoverState && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (e._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = o(
                  {},
                  this.constructor.Default,
                  It(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              Ce.typeCheckConfig(Dt, t, this.constructor.DefaultType),
              t
            );
          }),
          (e._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (e._cleanTipClass = function () {
            var t = It(this.getTipElement()),
              e = t.attr("class").match($t);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (e._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (e._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (It(t).removeClass(Mt),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = It(this).data(At),
                n = "object" == typeof e && e;
              if (
                (i || !/dispose|hide/.test(e)) &&
                (i || ((i = new t(this, n)), It(this).data(At, i)),
                "string" == typeof e)
              ) {
                if (void 0 === i[e])
                  throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Lt;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Dt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return At;
              },
            },
            {
              key: "Event",
              get: function () {
                return Rt;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Nt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Pt;
              },
            },
          ]),
          t
        );
      })()),
      (It.fn[Dt] = Ut._jQueryInterface),
      (It.fn[Dt].Constructor = Ut),
      (It.fn[Dt].noConflict = function () {
        return (It.fn[Dt] = Ot), Ut._jQueryInterface;
      }),
      Ut),
    Ne =
      ((Bt = "popover"),
      (Vt = "." + (Kt = "bs.popover")),
      (Yt = (Qt = e).fn[Bt]),
      (Gt = "bs-popover"),
      (qt = new RegExp("(^|\\s)" + Gt + "\\S+", "g")),
      (Zt = o({}, Ae.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (Xt = o({}, Ae.DefaultType, { content: "(string|element|function)" })),
      "fade",
      ".popover-header",
      ".popover-body",
      (Jt = {
        HIDE: "hide" + Vt,
        HIDDEN: "hidden" + Vt,
        SHOW: "show" + Vt,
        SHOWN: "shown" + Vt,
        INSERTED: "inserted" + Vt,
        CLICK: "click" + Vt,
        FOCUSIN: "focusin" + Vt,
        FOCUSOUT: "focusout" + Vt,
        MOUSEENTER: "mouseenter" + Vt,
        MOUSELEAVE: "mouseleave" + Vt,
      }),
      (te = (function (t) {
        var e, i;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (i = t),
          ((e = n).prototype = Object.create(i.prototype)),
          ((e.prototype.constructor = e).__proto__ = i);
        var o = n.prototype;
        return (
          (o.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (o.addAttachmentClass = function (t) {
            Qt(this.getTipElement()).addClass(Gt + "-" + t);
          }),
          (o.getTipElement = function () {
            return (
              (this.tip = this.tip || Qt(this.config.template)[0]), this.tip
            );
          }),
          (o.setContent = function () {
            var t = Qt(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(".popover-body"), e),
              t.removeClass("fade show");
          }),
          (o._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (o._cleanTipClass = function () {
            var t = Qt(this.getTipElement()),
              e = t.attr("class").match(qt);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var e = Qt(this).data(Kt),
                i = "object" == typeof t ? t : null;
              if (
                (e || !/destroy|hide/.test(t)) &&
                (e || ((e = new n(this, i)), Qt(this).data(Kt, e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Zt;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Bt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Kt;
              },
            },
            {
              key: "Event",
              get: function () {
                return Jt;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Vt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Xt;
              },
            },
          ]),
          n
        );
      })(Ae)),
      (Qt.fn[Bt] = te._jQueryInterface),
      (Qt.fn[Bt].Constructor = te),
      (Qt.fn[Bt].noConflict = function () {
        return (Qt.fn[Bt] = Yt), te._jQueryInterface;
      }),
      te),
    Oe =
      ((ie = "scrollspy"),
      (se = "." + (ne = "bs.scrollspy")),
      (oe = (ee = e).fn[ie]),
      (re = { offset: 10, method: "auto", target: "" }),
      (ae = { offset: "number", method: "string", target: "(string|element)" }),
      (le = {
        ACTIVATE: "activate" + se,
        SCROLL: "scroll" + se,
        LOAD_DATA_API: "load" + se + ".data-api",
      }),
      "dropdown-item",
      (he = "active"),
      (ce = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle",
      }),
      "offset",
      (ue = "position"),
      (de = (function () {
        function t(t, e) {
          var i = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              ce.NAV_LINKS +
              "," +
              this._config.target +
              " " +
              ce.LIST_ITEMS +
              "," +
              this._config.target +
              " " +
              ce.DROPDOWN_ITEMS),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            ee(this._scrollElement).on(le.SCROLL, function (t) {
              return i._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var e = t.prototype;
        return (
          (e.refresh = function () {
            var t = this,
              e =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : ue,
              i = "auto" === this._config.method ? e : this._config.method,
              n = i === ue ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              ee
                .makeArray(ee(this._selector))
                .map(function (t) {
                  var e,
                    s = Ce.getSelectorFromElement(t);
                  if ((s && (e = ee(s)[0]), e)) {
                    var o = e.getBoundingClientRect();
                    if (o.width || o.height) return [ee(e)[i]().top + n, s];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function () {
            ee.removeData(this._element, ne),
              ee(this._scrollElement).off(se),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = o({}, re, "object" == typeof t && t ? t : {})).target
            ) {
              var e = ee(t.target).attr("id");
              e || ((e = Ce.getUID(ie)), ee(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return Ce.typeCheckConfig(ie, t, ae), t;
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
              var n = this._targets[this._targets.length - 1];
              this._activeTarget !== n && this._activate(n);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var s = this._offsets.length; s--; )
                this._activeTarget !== this._targets[s] &&
                  t >= this._offsets[s] &&
                  (void 0 === this._offsets[s + 1] ||
                    t < this._offsets[s + 1]) &&
                  this._activate(this._targets[s]);
            }
          }),
          (e._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",");
            e = e.map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            });
            var i = ee(e.join(","));
            i.hasClass("dropdown-item")
              ? (i.closest(ce.DROPDOWN).find(ce.DROPDOWN_TOGGLE).addClass(he),
                i.addClass(he))
              : (i.addClass(he),
                i
                  .parents(ce.NAV_LIST_GROUP)
                  .prev(ce.NAV_LINKS + ", " + ce.LIST_ITEMS)
                  .addClass(he),
                i
                  .parents(ce.NAV_LIST_GROUP)
                  .prev(ce.NAV_ITEMS)
                  .children(ce.NAV_LINKS)
                  .addClass(he)),
              ee(this._scrollElement).trigger(le.ACTIVATE, {
                relatedTarget: t,
              });
          }),
          (e._clear = function () {
            ee(this._selector).filter(ce.ACTIVE).removeClass(he);
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = ee(this).data(ne);
              if (
                (i ||
                  ((i = new t(this, "object" == typeof e && e)),
                  ee(this).data(ne, i)),
                "string" == typeof e)
              ) {
                if (void 0 === i[e])
                  throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return re;
              },
            },
          ]),
          t
        );
      })()),
      ee(window).on(le.LOAD_DATA_API, function () {
        for (var t = ee.makeArray(ee(ce.DATA_SPY)), e = t.length; e--; ) {
          var i = ee(t[e]);
          de._jQueryInterface.call(i, i.data());
        }
      }),
      (ee.fn[ie] = de._jQueryInterface),
      (ee.fn[ie].Constructor = de),
      (ee.fn[ie].noConflict = function () {
        return (ee.fn[ie] = oe), de._jQueryInterface;
      }),
      de),
    ke =
      ((fe = "." + (pe = "bs.tab")),
      (me = (ge = e).fn.tab),
      (_e = {
        HIDE: "hide" + fe,
        HIDDEN: "hidden" + fe,
        SHOW: "show" + fe,
        SHOWN: "shown" + fe,
        CLICK_DATA_API: "click" + fe + ".data-api",
      }),
      "dropdown-menu",
      (ve = "active"),
      "disabled",
      "fade",
      "show",
      ".dropdown",
      ".nav, .list-group",
      (ye = ".active"),
      (we = "> li > .active"),
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      ".dropdown-toggle",
      "> .dropdown-menu .active",
      (Ee = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.show = function () {
            var t = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  ge(this._element).hasClass(ve)) ||
                ge(this._element).hasClass("disabled")
              )
            ) {
              var e,
                i,
                n = ge(this._element).closest(".nav, .list-group")[0],
                s = Ce.getSelectorFromElement(this._element);
              if (n) {
                var o = "UL" === n.nodeName ? we : ye;
                i = (i = ge.makeArray(ge(n).find(o)))[i.length - 1];
              }
              var r = ge.Event(_e.HIDE, { relatedTarget: this._element }),
                a = ge.Event(_e.SHOW, { relatedTarget: i });
              if (
                (i && ge(i).trigger(r),
                ge(this._element).trigger(a),
                !a.isDefaultPrevented() && !r.isDefaultPrevented())
              ) {
                s && (e = ge(s)[0]), this._activate(this._element, n);
                var l = function () {
                  var e = ge.Event(_e.HIDDEN, { relatedTarget: t._element }),
                    n = ge.Event(_e.SHOWN, { relatedTarget: i });
                  ge(i).trigger(e), ge(t._element).trigger(n);
                };
                e ? this._activate(e, e.parentNode, l) : l();
              }
            }
          }),
          (e.dispose = function () {
            ge.removeData(this._element, pe), (this._element = null);
          }),
          (e._activate = function (t, e, i) {
            var n = this,
              s = ("UL" === e.nodeName
                ? ge(e).find(we)
                : ge(e).children(ye))[0],
              o = i && s && ge(s).hasClass("fade"),
              r = function () {
                return n._transitionComplete(t, s, i);
              };
            if (s && o) {
              var a = Ce.getTransitionDurationFromElement(s);
              ge(s).one(Ce.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
          }),
          (e._transitionComplete = function (t, e, i) {
            if (e) {
              ge(e).removeClass("show " + ve);
              var n = ge(e.parentNode).find("> .dropdown-menu .active")[0];
              n && ge(n).removeClass(ve),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (ge(t).addClass(ve),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              Ce.reflow(t),
              ge(t).addClass("show"),
              t.parentNode && ge(t.parentNode).hasClass("dropdown-menu"))
            ) {
              var s = ge(t).closest(".dropdown")[0];
              s && ge(s).find(".dropdown-toggle").addClass(ve),
                t.setAttribute("aria-expanded", !0);
            }
            i && i();
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var i = ge(this),
                n = i.data(pe);
              if (
                (n || ((n = new t(this)), i.data(pe, n)), "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          t
        );
      })()),
      ge(document).on(
        _e.CLICK_DATA_API,
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (t) {
          t.preventDefault(), Ee._jQueryInterface.call(ge(this), "show");
        }
      ),
      (ge.fn.tab = Ee._jQueryInterface),
      (ge.fn.tab.Constructor = Ee),
      (ge.fn.tab.noConflict = function () {
        return (ge.fn.tab = me), Ee._jQueryInterface;
      }),
      Ee);
  !(function (t) {
    if (void 0 === t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = Ce),
    (t.Alert = Te),
    (t.Button = be),
    (t.Carousel = xe),
    (t.Collapse = Se),
    (t.Dropdown = Ie),
    (t.Modal = De),
    (t.Popover = Ne),
    (t.Scrollspy = Oe),
    (t.Tab = ke),
    (t.Tooltip = Ae),
    Object.defineProperty(t, "__esModule", { value: !0 });
}),
  (function (t, e, i, n) {
    function s(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, s.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          s.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          s.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (s.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (s.Type = { Event: "event", State: "state" }),
      (s.Plugins = {}),
      (s.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              i = !this.settings.autoWidth,
              n = this.settings.rtl,
              s = {
                width: "auto",
                "margin-left": n ? e : "",
                "margin-right": n ? "" : e,
              };
            !i && this.$stage.children().css(s), (t.css = s);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              i = null,
              n = this._items.length,
              s = !this.settings.autoWidth,
              o = [];
            for (t.items = { merge: !1, width: e }; n--; )
              (i = this._mergers[n]),
                (i =
                  (this.settings.mergeFit &&
                    Math.min(i, this.settings.items)) ||
                  i),
                (t.items.merge = i > 1 || t.items.merge),
                (o[n] = s ? e * i : this._items[n].width());
            this._widths = o;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              i = this._items,
              n = this.settings,
              s = Math.max(2 * n.items, 4),
              o = 2 * Math.ceil(i.length / 2),
              r = n.loop && i.length ? (n.rewind ? s : Math.max(s, o)) : 0,
              a = "",
              l = "";
            for (r /= 2; r--; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                n = 0,
                s = 0,
                o = [];
              ++i < e;

            )
              (n = o[i - 1] || 0),
                (s = this._widths[this.relative(i)] + this.settings.margin),
                o.push(n + s * t);
            this._coordinates = o;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(i);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              n = this.$stage.children();
            if (i && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  n.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), n.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              i,
              n,
              s = this.settings.rtl ? 1 : -1,
              o = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + o,
              a = r + this.width() * s,
              l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + o * s),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(i);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.settings.center &&
                (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"));
          },
        },
      ]),
      (s.prototype.initialize = function () {
        var e, i, s;
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) &&
          ((e = this.$element.find("img")),
          (i = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : n),
          (s = this.$element.children(i).width()),
          e.length && s <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass),
          (this.$stage = t(
            "<" +
              this.settings.stageElement +
              ' class="' +
              this.settings.stageClass +
              '"/>'
          ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible")
            ? this.refresh()
            : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (s.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          n = -1,
          s = null;
        i
          ? (t.each(i, function (t) {
              t <= e && t > n && (n = Number(t));
            }),
            "function" ==
              typeof (s = t.extend({}, this.options, i[n])).stagePadding &&
              (s.stagePadding = s.stagePadding()),
            delete s.responsive,
            s.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + n
                  )
              ))
          : (s = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: s } }),
          (this._breakpoint = n),
          (this.settings = s),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (s.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (s.prototype.prepare = function (e) {
        var i = this.trigger("prepare", { content: e });
        return (
          i.data ||
            (i.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: i.data }),
          i.data
        );
      }),
      (s.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            n = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            s = {};
          e < i;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, n).length > 0) &&
            this._pipe[e].run(s),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (s.prototype.width = function (t) {
        switch ((t = t || s.Width.Default)) {
          case s.Width.Inner:
          case s.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (s.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (s.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (s.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.$element.is(":visible") &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (s.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which &&
          (t.support.transform
            ? (n = {
                x: (n = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5],
              })
            : ((n = this.$stage.position()),
              (n = {
                x: this.settings.rtl
                  ? n.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : n.left,
                y: n.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = n),
          (this._drag.stage.current = n),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var n = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (s.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          n = null,
          s = this.difference(this._drag.pointer, this.pointer(t)),
          o = this.difference(this._drag.stage.start, s);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (o.x = ((((o.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
              (o.x = Math.max(Math.min(o.x, e + n), i + n))),
          (this._drag.stage.current = o),
          this.animate(o.x));
      }),
      (s.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
          s = this._drag.stage.current,
          o = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(s.x, 0 !== n.x ? o : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = o),
            (Math.abs(n.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (s.prototype.closest = function (e, i) {
        var n = -1,
          s = this.width(),
          o = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              o,
              t.proxy(function (t, r) {
                return (
                  "left" === i && e > r - 30 && e < r + 30
                    ? (n = t)
                    : "right" === i && e > r - s - 30 && e < r - s + 30
                    ? (n = t + 1)
                    : this.op(e, "<", r) &&
                      this.op(e, ">", o[t + 1] || r - s) &&
                      (n = "left" === i ? t + 1 : t),
                  -1 === n
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", o[this.minimum()])
              ? (n = e = this.minimum())
              : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())),
          n
        );
      }),
      (s.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s",
              })
            : i
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (s.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (s.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: { name: "position", value: t },
          });
          e.data !== n && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (s.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (s.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (s.prototype.normalize = function (t, e) {
        var i = this._items.length,
          s = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1
            ? (t = n)
            : (t < 0 || t >= i + s) &&
              (t = ((((t - s / 2) % i) + i) % i) + s / 2),
          t
        );
      }),
      (s.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (s.prototype.maximum = function (t) {
        var e,
          i,
          n,
          s = this.settings,
          o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
          for (
            e = this._items.length,
              i = this._items[--e].width(),
              n = this.$element.width();
            e-- && !((i += this._items[e].width() + this.settings.margin) > n);

          );
          o = e + 1;
        } else
          o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0);
      }),
      (s.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (s.prototype.items = function (t) {
        return t === n
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (s.prototype.mergers = function (t) {
        return t === n
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (s.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          s = i + this._items.length,
          o = function (t) {
            return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2;
          };
        return e === n
          ? t.map(this._clones, function (t, e) {
              return o(e);
            })
          : t.map(this._clones, function (t, i) {
              return t === e ? o(i) : null;
            });
      }),
      (s.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed;
      }),
      (s.prototype.coordinates = function (e) {
        var i,
          s = 1,
          o = e - 1;
        return e === n
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((s = -1), (o = e + 1)),
                (i = this._coordinates[e]),
                (i +=
                  ((this.width() - i + (this._coordinates[o] || 0)) / 2) * s))
              : (i = this._coordinates[o] || 0),
            (i = Math.ceil(i)));
      }),
      (s.prototype.duration = function (t, e, i) {
        return 0 === i
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(i || this.settings.smartSpeed);
      }),
      (s.prototype.to = function (t, e) {
        var i = this.current(),
          n = null,
          s = t - this.relative(i),
          o = (s > 0) - (s < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r),
            (n = (((((t = i + s) - a) % r) + r) % r) + a) !== t &&
              n - s <= l &&
              n - s > 0 &&
              ((i = n - s), (t = n), this.reset(i)))
          : this.settings.rewind
          ? (t = ((t % (l += 1)) + l) % l)
          : (t = Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.$element.is(":visible") && this.update();
      }),
      (s.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (s.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (s.prototype.onTransitionEnd = function (t) {
        if (
          t !== n &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (s.prototype.viewport = function () {
        var n;
        return (
          this.options.responsiveBaseElement !== e
            ? (n = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (n = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (n = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          n
        );
      }),
      (s.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (s.prototype.add = function (e, i) {
        var s = this.relative(this._current);
        (i = i === n ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: i }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(
                i,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[s] && this.reset(this._items[s].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: i });
      }),
      (s.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (s.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter("pre-loading"),
              (i = t(i)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    i.attr("src", t.target.src),
                      i.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  i.attr("src") ||
                    i.attr("data-src") ||
                    i.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (s.prototype.destroy = function () {
        for (var n in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (s.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
          case "<":
            return n ? t > i : t < i;
          case ">":
            return n ? t < i : t > i;
          case ">=":
            return n ? t <= i : t >= i;
          case "<=":
            return n ? t >= i : t <= i;
        }
      }),
      (s.prototype.on = function (t, e, i, n) {
        t.addEventListener
          ? t.addEventListener(e, i, n)
          : t.attachEvent && t.attachEvent("on" + e, i);
      }),
      (s.prototype.off = function (t, e, i, n) {
        t.removeEventListener
          ? t.removeEventListener(e, i, n)
          : t.detachEvent && t.detachEvent("on" + e, i);
      }),
      (s.prototype.trigger = function (e, i, n, o, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, n], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          h = t.Event(
            [e, "owl", n || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, i)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(h);
            }),
            this.register({ type: s.Type.Event, name: e }),
            this.$element.trigger(h),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, h)),
          h
        );
      }),
      (s.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (s.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (s.prototype.register = function (e) {
        if (e.type === s.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !i ||
                !i.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : i.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === s.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n;
              }, this)
            )));
      }),
      (s.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (s.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (s.prototype.pointer = function (t) {
        var i = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (s.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (s.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var n = t(this),
            o = n.data("owl.carousel");
          o ||
            ((o = new s(this, "object" == typeof e && e)),
            n.data("owl.carousel", o),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, i) {
                o.register({ type: s.Type.Event, name: i }),
                  o.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                        o[i].apply(this, [].slice.call(arguments, 1)),
                        this.release([i]));
                    }, o)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (s.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (s.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (s.prototype.destroy = function () {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(
            function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              )
                for (
                  var i = this._core.settings,
                    n = (i.center && Math.ceil(i.items / 2)) || i.items,
                    s = (i.center && -1 * n) || 0,
                    o =
                      (e.property && void 0 !== e.property.value
                        ? e.property.value
                        : this._core.current()) + s,
                    r = this._core.clones().length,
                    a = t.proxy(function (t, e) {
                      this.load(e);
                    }, this);
                  s++ < n;

                )
                  this.load(r / 2 + this._core.relative(o)),
                    r && t.each(this._core.clones(this._core.relative(o)), a),
                    o++;
            },
            this
          ),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { lazyLoad: !1 }),
      (s.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i),
          s = n && n.find(".owl-lazy");
        !s ||
          t.inArray(n.get(0), this._loaded) > -1 ||
          (s.each(
            t.proxy(function (i, n) {
              var s,
                o = t(n),
                r =
                  (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                  o.attr("data-src");
              this._core.trigger("load", { element: o, url: r }, "lazy"),
                o.is("img")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          o.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: o, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : (((s = new Image()).onload = t.proxy(function () {
                      o.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: o, url: r },
                          "lazy"
                        );
                    }, this)),
                    (s.src = r));
            }, this)
          ),
          this._loaded.push(n.get(0)));
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (s.prototype.update = function () {
        var e,
          i = this._core._current,
          n = i + this._core.settings.items,
          s = this._core.$stage.children().toArray().slice(i, n),
          o = [];
        t.each(s, function (e, i) {
          o.push(t(i).height());
        }),
          (e = Math.max.apply(null, o)),
          this._core.$stage
            .parent()
            .height(e)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          n =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          s = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          (n = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(n[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (n = n[6]),
          (this._videos[r] = { type: i, id: n, width: s, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (s.prototype.thumbnail = function (e, i) {
        var n,
          s,
          o =
            i.width && i.height
              ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
              : "",
          r = e.find("img"),
          a = "src",
          l = "",
          h = this._core.settings,
          c = function (t) {
            '<div class="owl-video-play-icon"></div>',
              (n = h.lazyLoad
                ? '<div class="owl-video-tn ' +
                  l +
                  '" ' +
                  a +
                  '="' +
                  t +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  t +
                  ')"></div>'),
              e.after(n),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"),
          this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")),
          r.length)
        )
          return c(r.attr(a)), r.remove(), !1;
        "youtube" === i.type
          ? ((s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), c(s))
          : "vimeo" === i.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t[0].thumbnail_large), c(s);
              },
            })
          : "vzaar" === i.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t.framegrab_url), c(s);
              },
            });
      }),
      (s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (s.prototype.play = function (e) {
        var i,
          n = t(e.target).closest("." + this._core.settings.itemClass),
          s = this._videos[n.attr("data-video")],
          o = s.width || "100%",
          r = s.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          "youtube" === s.type
            ? (i =
                '<iframe width="' +
                o +
                '" height="' +
                r +
                '" src="//www.youtube.com/embed/' +
                s.id +
                "?autoplay=1&rel=0&v=" +
                s.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === s.type
            ? (i =
                '<iframe src="//player.vimeo.com/video/' +
                s.id +
                '?autoplay=1" width="' +
                o +
                '" height="' +
                r +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === s.type &&
              (i =
                '<iframe frameborder="0"height="' +
                r +
                '"width="' +
                o +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                s.id +
                '/player?autoplay=true"></iframe>'),
          t('<div class="owl-video-frame">' + i + "</div>").insertAfter(
            n.find(".owl-video")
          ),
          (this._playing = n.addClass("owl-video-playing")));
      }),
      (s.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, s.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = n),
        (this.next = n),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(
            function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            },
            this
          ),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (s.Defaults = { animateOut: !1, animateIn: !1 }),
      (s.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            n = this.core.$stage.children().eq(this.previous),
            s = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              n
                .one(t.support.animation.end, i)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            o &&
              s
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(o));
        }
      }),
      (s.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, s.Defaults, this._core.options));
    };
    (s.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (s.prototype.play = function (t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (s.prototype._getNextTimeout = function (n, s) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                i.hidden ||
                this._core.next(s || this._core.settings.autoplaySpeed);
            }, this),
            n || this._core.settings.autoplayTimeout
          )
        );
      }),
      (s.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (s.prototype.stop = function () {
        this._core.is("rotating") &&
          (e.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (s.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (s.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (s.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (i.navContainer
          ? t(i.navContainer)
          : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            t("<div>")
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (i.dotsContainer
          ? t(i.dotsContainer)
          : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "div",
          t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (s.prototype.destroy = function () {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (s.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          n = i + this._core.items().length,
          s = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if (
          ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || "page" == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
            if (e >= r || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(s, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(s, t - i) === s)
              )
                break;
              (e = 0), 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (s.prototype.draw = function () {
        var e,
          i = this._core.settings,
          n = this._core.items().length <= i.items,
          s = this._core.relative(this._core.current()),
          o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !o && s <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !o && s >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || n),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (s.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (s.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (s.prototype.getPosition = function (e) {
        var i,
          n,
          s = this._core.settings;
        return (
          "page" == s.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (n = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % n) + n) % n].start))
            : ((i = this._core.relative(this._core.current())),
              (n = this._core.items().length),
              e ? (i += s.slideBy) : (i -= s.slideBy)),
          i
        );
      }),
      (s.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (s.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (s.prototype.to = function (e, i, n) {
        var s;
        !n && this._pages.length
          ? ((s = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % s) + s) % s].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var n = this._core.items(
                  this._core.relative(this._core.current())
                ),
                s = t
                  .map(this._hashes, function (t, e) {
                    return t === n ? e : null;
                  })
                  .join();
              if (!s || e.location.hash.slice(1) === s) return;
              e.location.hash = s;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              n = this._core.$stage.children(),
              s = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== s &&
              s !== this._core.current() &&
              this._core.to(this._core.relative(s), !1, !0);
          }, this)
        );
    };
    (s.Defaults = { URLhashListener: !1 }),
      (s.prototype.destroy = function () {
        var i, n;
        for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    function s(e, i) {
      var s = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
          if (r[e] !== n) return (s = !i || e), !1;
        }),
        s
      );
    }
    function o(t) {
      return s(t, !0);
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      h = function () {
        return !!s("transform");
      },
      c = function () {
        return !!s("perspective");
      },
      u = function () {
        return !!s("animation");
      };
    (function () {
      return !!s("transition");
    })() &&
      ((t.support.transition = new String(o("transition"))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      u() &&
        ((t.support.animation = new String(o("animation"))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      h() &&
        ((t.support.transform = new String(o("transform"))),
        (t.support.transform3d = c()));
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define([], e(t))
      : "object" == typeof exports
      ? (module.exports = e(t))
      : (t.smoothScroll = e(t));
  })(
    "undefined" != typeof global ? global : this.window || this.global,
    function (t) {
      "use strict";
      var e,
        i,
        n,
        s,
        o,
        r,
        a,
        l = {},
        h = "querySelector" in document && "addEventListener" in t,
        c = {
          selector: "[data-scroll]",
          selectorHeader: null,
          speed: 500,
          easing: "easeInOutQuart",
          offset: 0,
          callback: function () {},
        },
        u = function () {
          var t = {},
            e = !1,
            i = 0,
            n = arguments.length;
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
            ((e = arguments[0]), i++);
          for (
            var s = function (i) {
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) &&
                  (e &&
                  "[object Object]" === Object.prototype.toString.call(i[n])
                    ? (t[n] = u(!0, t[n], i[n]))
                    : (t[n] = i[n]));
            };
            i < n;
            i++
          )
            s(arguments[i]);
          return t;
        },
        d = function () {
          return Math.max(
            document.documentElement.clientHeight,
            t.innerHeight || 0
          );
        },
        g = function () {
          return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
        },
        p = function (t) {
          return t
            ? ((e = t),
              Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight) +
                t.offsetTop)
            : 0;
          var e;
        };
      l.animateScroll = function (i, n, r) {
        var l = (function (t) {
            return t &&
              "object" == typeof JSON &&
              "function" == typeof JSON.parse
              ? JSON.parse(t)
              : {};
          })(n ? n.getAttribute("data-options") : null),
          h = u(e || c, r || {}, l),
          f = "[object Number]" === Object.prototype.toString.call(i),
          m = f || !i.tagName ? null : i;
        if (f || m) {
          var _ = t.pageYOffset;
          h.selectorHeader &&
            !s &&
            (s = document.querySelector(h.selectorHeader)),
            o || (o = p(s));
          var v,
            y,
            w = f
              ? i
              : (function (t, e, i) {
                  var n = 0;
                  if (t.offsetParent)
                    do {
                      (n += t.offsetTop), (t = t.offsetParent);
                    } while (t);
                  return (n = Math.max(n - e - i, 0)), Math.min(n, g() - d());
                })(m, o, parseInt(h.offset, 10)),
            E = w - _,
            C = g(),
            T = 0,
            b = function (e, s, o) {
              var r = t.pageYOffset;
              (e == s || r == s || t.innerHeight + r >= C) &&
                (clearInterval(o),
                (function (e, i, n) {
                  f ||
                    (e.focus(),
                    document.activeElement.id !== e.id &&
                      (e.setAttribute("tabindex", "-1"),
                      e.focus(),
                      (e.style.outline = "none")),
                    t.scrollTo(0, i));
                })(i, s),
                h.callback(i, n));
            };
          0 === t.pageYOffset && t.scrollTo(0, 0),
            clearInterval(a),
            (a = setInterval(function () {
              var e, i, n;
              (v = (v = (T += 16) / parseInt(h.speed, 10)) > 1 ? 1 : v),
                (y =
                  _ +
                  E *
                    ((e = h.easing),
                    (i = v),
                    "easeInQuad" === e && (n = i * i),
                    "easeOutQuad" === e && (n = i * (2 - i)),
                    "easeInOutQuad" === e &&
                      (n = i < 0.5 ? 2 * i * i : (4 - 2 * i) * i - 1),
                    "easeInCubic" === e && (n = i * i * i),
                    "easeOutCubic" === e && (n = --i * i * i + 1),
                    "easeInOutCubic" === e &&
                      (n =
                        i < 0.5
                          ? 4 * i * i * i
                          : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1),
                    "easeInQuart" === e && (n = i * i * i * i),
                    "easeOutQuart" === e && (n = 1 - --i * i * i * i),
                    "easeInOutQuart" === e &&
                      (n =
                        i < 0.5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i),
                    "easeInQuint" === e && (n = i * i * i * i * i),
                    "easeOutQuint" === e && (n = 1 + --i * i * i * i * i),
                    "easeInOutQuint" === e &&
                      (n =
                        i < 0.5
                          ? 16 * i * i * i * i * i
                          : 1 + 16 * --i * i * i * i * i),
                    n || i)),
                t.scrollTo(0, Math.floor(y)),
                b(y, w, a);
            }, 16));
        }
      };
      var f = function (e) {
          t.location.hash,
            i &&
              ((i.id = i.getAttribute("data-scroll-id")),
              l.animateScroll(i, n),
              (i = null),
              (n = null));
        },
        m = function (s) {
          if (
            0 === s.button &&
            !s.metaKey &&
            !s.ctrlKey &&
            (n = (function (t, e) {
              var i,
                n,
                s = e.charAt(0),
                o = "classList" in document.documentElement;
              for (
                "[" === s &&
                (i = (e = e.substr(1, e.length - 2)).split("=")).length > 1 &&
                ((n = !0), (i[1] = i[1].replace(/"/g, "").replace(/'/g, "")));
                t && t !== document && 1 === t.nodeType;
                t = t.parentNode
              ) {
                if ("." === s)
                  if (o) {
                    if (t.classList.contains(e.substr(1))) return t;
                  } else if (
                    new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(
                      t.className
                    )
                  )
                    return t;
                if ("#" === s && t.id === e.substr(1)) return t;
                if ("[" === s && t.hasAttribute(i[0])) {
                  if (!n) return t;
                  if (t.getAttribute(i[0]) === i[1]) return t;
                }
                if (t.tagName.toLowerCase() === e) return t;
              }
              return null;
            })(s.target, e.selector)) &&
            "a" === n.tagName.toLowerCase() &&
            n.hostname === t.location.hostname &&
            n.pathname === t.location.pathname &&
            /#/.test(n.href)
          ) {
            var o = (function (t) {
              "#" === t.charAt(0) && (t = t.substr(1));
              for (
                var e,
                  i = String(t),
                  n = i.length,
                  s = -1,
                  o = "",
                  r = i.charCodeAt(0);
                ++s < n;

              ) {
                if (0 === (e = i.charCodeAt(s)))
                  throw new InvalidCharacterError(
                    "Invalid character: the input contains U+0000."
                  );
                o +=
                  (e >= 1 && e <= 31) ||
                  127 == e ||
                  (0 === s && e >= 48 && e <= 57) ||
                  (1 === s && e >= 48 && e <= 57 && 45 === r)
                    ? "\\" + e.toString(16) + " "
                    : e >= 128 ||
                      45 === e ||
                      95 === e ||
                      (e >= 48 && e <= 57) ||
                      (e >= 65 && e <= 90) ||
                      (e >= 97 && e <= 122)
                    ? i.charAt(s)
                    : "\\" + i.charAt(s);
              }
              return "#" + o;
            })(n.hash);
            if ("#" === o) {
              s.preventDefault();
              var r = (i = document.body).id ? i.id : "smooth-scroll-top";
              return (
                i.setAttribute("data-scroll-id", r),
                (i.id = ""),
                void (t.location.hash.substring(1) === r
                  ? f()
                  : (t.location.hash = r))
              );
            }
            (i = document.querySelector(o)) &&
              (i.setAttribute("data-scroll-id", i.id),
              (i.id = ""),
              n.hash === t.location.hash && (s.preventDefault(), f()));
          }
        },
        _ = function (t) {
          r ||
            (r = setTimeout(function () {
              (r = null), (o = p(s));
            }, 66));
        };
      return (
        (l.destroy = function () {
          e &&
            (document.removeEventListener("click", m, !1),
            t.removeEventListener("resize", _, !1),
            (e = null),
            (i = null),
            (n = null),
            (s = null),
            (o = null),
            (r = null),
            (a = null));
        }),
        (l.init = function (i) {
          h &&
            (l.destroy(),
            (e = u(c, i || {})),
            (s = e.selectorHeader
              ? document.querySelector(e.selectorHeader)
              : null),
            (o = p(s)),
            document.addEventListener("click", m, !1),
            t.addEventListener("hashchange", f, !1),
            s && t.addEventListener("resize", _, !1));
        }),
        l
      );
    }
  ),
  (function () {
    "use strict";
    for (var t = document.querySelectorAll(".llyv"), e = 0; e < t.length; e++) {
      var i = document.createElement("div");
      (i.className = "llyv-play-btn"), t[e].appendChild(i);
      var n = document.createElement("img");
      (n.src = "images/desktop/What-will-learn-image.png"),
        t[e].appendChild(n),
        t[e].addEventListener("click", function () {
          var t = document.createElement("iframe");
          for (
            t.setAttribute(
              "src",
              "https://www.youtube.com/embed/" +
                this.dataset.id +
                "?rel=0&showinfo=0&autoplay=1"
            ),
              t.setAttribute("frameborder", "0"),
              t.setAttribute("allowfullscreen", "");
            this.firstChild;

          )
            this.removeChild(this.firstChild);
          this.appendChild(t);
        });
    }
  })(),
  $(".team_slider").each(function () {
    var t = $(this),
      e = t.data("items") ? t.data("items") : 2,
      i = !t.data("loop") || t.data("loop"),
      n = !t.data("nav-dots") || t.data("nav-dots"),
      s = !t.data("nav-arrow") || t.data("nav-arrow"),
      o = !!t.attr("data-autoplay") && t.data("autoplay"),
      r = t.attr("data-space") ? t.data("space") : 0;
    $(this).owlCarousel({
      loop: i,
      items: e,
      responsive: {
        0: { items: t.data("xx-items") ? t.data("xx-items") : 1 },
        600: { items: t.data("xs-items") ? t.data("xs-items") : 1 },
        991: { items: t.data("sm-items") ? t.data("sm-items") : 1 },
        992: { items: t.data("md-items") ? t.data("md-items") : 1 },
        1190: { items: t.data("lg-items") ? t.data("lg-items") : 2 },
        1200: { items: t.data("lg-items") ? t.data("lg-items") : 2 },
      },
      center: !1,
      dots: n,
      margin: r,
      animateOut: "fadeOut",
      nav: s,
      navText: [
        "<img src='images/desktop/right-arrow-(1)-min.png'>",
        "<img src='images/desktop/right-arrow-(1)-min.png'>",
      ],
      autoplay: o,
      autoplayHoverPause: !0,
    });
  }),
  $(".about_slider").each(function () {
    var t = $(this),
      e = t.data("items") ? t.data("items") : 1,
      i = !t.data("loop") || t.data("loop"),
      n = !!t.data("nav-dots") && t.data("nav-dots"),
      s = !t.data("nav-arrow") || t.data("nav-arrow"),
      o = !!t.attr("data-autoplay") && t.data("autoplay"),
      r = t.attr("data-space") ? t.data("space") : 0;
    $(this).owlCarousel({
      loop: i,
      items: e,
      responsive: {
        0: { items: t.data("xx-items") ? t.data("xx-items") : 1 },
        600: { items: t.data("xs-items") ? t.data("xs-items") : 1 },
        767: { items: t.data("sm-items") ? t.data("sm-items") : 1 },
        992: { items: t.data("md-items") ? t.data("md-items") : 1 },
        1190: { items: t.data("lg-items") ? t.data("lg-items") : 1 },
        1200: { items: t.data("lg-items") ? t.data("lg-items") : 1 },
      },
      center: !1,
      dots: n,
      margin: r,
      nav: s,
      navText: [
        "<i class='fa fa-caret-left fa-2x'></i>",
        "<i class='fa fa-caret-right fa-2x'></i>",
      ],
      autoplay: o,
      autoplayHoverPause: !0,
    });
  }),
  smoothScroll.init(),
  $(document).ready(function () {
    $("#togglemore").click(function () {
      "See more" == $("#togglemore").text()
        ? ($("#togglemore").text("See Less"), $("#moretext").slideDown())
        : ($("#togglemore").text("See more"), $("#moretext").slideUp());
    }),
      $("#toggleNext").click(function () {
        "See more" == $("#toggleNext").text()
          ? ($("#toggleNext").text("See Less"), $("#TextNext").slideDown())
          : ($("#toggleNext").text("See more"), $("#TextNext").slideUp());
      }),
      $("#toggleNextTwo").click(function () {
        "See more" == $("#toggleNextTwo").text()
          ? ($("#toggleNextTwo").text("See Less"),
            $("#TextNextTwo").slideDown())
          : ($("#toggleNextTwo").text("See more"), $("#TextNextTwo").slideUp());
      }),
      $("#toggleNextThree").click(function () {
        "See more" == $("#toggleNextThree").text()
          ? ($("#toggleNextThree").text("See Less"),
            $("#TextNextThree").slideDown())
          : ($("#toggleNextThree").text("See more"),
            $("#TextNextThree").slideUp());
      });
  }),
  $(".about_team .owl-nav").on("click", function () {
    $(".about_team .owl-prev").css("display", "block");
  }),
  $(".meet_section .owl-nav").on("click", function () {
    $(".meet_section .owl-prev").css("display", "block");
  }),
  $("#toggleNextFour").click(function () {
    "See more" == $("#toggleNextFour").text()
      ? ($("#toggleNextFour").text("See Less"), $("#TextNexFour").slideDown())
      : ($("#toggleNextFour").text("See more"), $("#TextNexFour").slideUp());
  }),
  $("#toggleNextFive").click(function () {
    "See more" == $("#toggleNextFive").text()
      ? ($("#toggleNextFive").text("See Less"), $("#TextNexFive").slideDown())
      : ($("#toggleNextFive").text("See more"), $("#TextNexFive").slideUp());
  }),
  $("#togglemoreSix").click(function () {
    "See more" == $("#togglemoreSix").text()
      ? ($("#togglemoreSix").text("See Less"), $("#TextNexSix").slideDown())
      : ($("#togglemoreSix").text("See more"), $("#TextNexSix").slideUp());
  }),
  $("#toggleNextSeven").click(function () {
    "See more" == $("#toggleNextSeven").text()
      ? ($("#toggleNextSeven").text("See Less"), $("#TextNexSeven").slideDown())
      : ($("#toggleNextSeven").text("See more"), $("#TextNexSeven").slideUp());
  });

!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (i) {
        t(i, window, document);
      })
    : t(jQuery, window, document);
})(function (t, i, e, n) {
  "use strict";
  var a = "intlTelInput",
    s = 1,
    o = {
      autoFormat: !0,
      autoHideDialCode: !0,
      defaultCountry: "",
      ipinfoToken: "",
      nationalMode: !0,
      numberType: "MOBILE",
      onlyCountries: [],
      preferredCountries: ["bd", "bh"],
      preventInvalidNumbers: !1,
      preventInvalidDialCodes: !1,
      utilsScript: "",
    },
    r = 38,
    l = 40,
    u = 13,
    h = 27,
    d = 43,
    c = 65,
    p = 90,
    f = 48,
    g = 57,
    m = 32,
    y = 8,
    v = 46,
    C = 17,
    I = 91,
    _ = 224,
    b = !1;
  function w(i, e) {
    (this.element = i),
      (this.options = t.extend({}, o, e)),
      (this._defaults = o),
      (this.ns = "." + a + s++),
      (this.isGoodBrowser = Boolean(i.setSelectionRange)),
      (this.hadInitialPlaceholder = Boolean(t(i).attr("placeholder"))),
      (this._name = a),
      this.init();
  }
  t(i).load(function () {
    b = !0;
  }),
    (w.prototype = {
      init: function () {
        var i = this;
        if ("auto" == this.options.defaultCountry) {
          this.options.defaultCountry = "";
          var e = "//ipinfo.io";
          this.options.ipinfoToken &&
            (e += "?token=" + this.options.ipinfoToken),
            t
              .get(
                e,
                function (t) {
                  t &&
                    t.country &&
                    (i.options.defaultCountry = t.country.toLowerCase());
                },
                "jsonp"
              )
              .always(function () {
                i._ready();
              });
        } else this._ready();
      },
      _ready: function () {
        this.options.nationalMode && (this.options.autoHideDialCode = !1),
          navigator.userAgent.match(/IEMobile/i) &&
            (this.options.autoFormat = !1),
          this._processCountryData(),
          this._generateMarkup(),
          this._setInitialState(),
          this._initListeners();
      },
      _processCountryData: function () {
        this._setInstanceCountryData(), this._setPreferredCountries();
      },
      _addCountryCode: function (t, i, e) {
        i in this.countryCodes || (this.countryCodes[i] = []);
        var n = e || 0;
        this.countryCodes[i][n] = t;
      },
      _setInstanceCountryData: function () {
        var i;
        if (this.options.onlyCountries.length)
          for (this.countries = [], i = 0; i < D.length; i++)
            -1 != t.inArray(D[i].iso2, this.options.onlyCountries) &&
              this.countries.push(D[i]);
        else this.countries = D;
        for (
          this.countryCodes = {}, this.pcc = {}, i = 0;
          i < this.countries.length;
          i++
        ) {
          var e = this.countries[i];
          if (
            (this._addCountryCode(e.iso2, e.dialCode, e.priority),
            this._addPotentialCountryCode(e.dialCode, this.pcc, 0),
            e.areaCodes)
          )
            for (var n = 0; n < e.areaCodes.length; n++)
              this._addCountryCode(e.iso2, e.dialCode + e.areaCodes[n]);
        }
      },
      _addPotentialCountryCode: function (t, i, e) {
        var n = t.charAt(e);
        i[n] || (i[n] = t.length == e + 1 || {}),
          t.length > e + 1 && this._addPotentialCountryCode(t, i[n], e + 1);
      },
      _setPreferredCountries: function () {
        this.preferredCountries = [];
        for (var t = 0; t < this.options.preferredCountries.length; t++) {
          var i = this.options.preferredCountries[t],
            e = this._getCountryData(i, !1, !0);
          e && this.preferredCountries.push(e);
        }
      },
      _generateMarkup: function () {
        (this.telInput = t(this.element)),
          this.telInput.attr("autocomplete", "off"),
          this.telInput.wrap(t("<div>", { class: "intl-tel-input" }));
        var e = t("<div>", { class: "flag-dropdown" }).insertAfter(
            this.telInput
          ),
          n = t("<div>", { class: "selected-flag" }).appendTo(e);
        (this.selectedFlagInner = t("<div>", { class: "iti-flag" }).appendTo(
          n
        )),
          t("<div>", { class: "arrow" }).appendTo(this.selectedFlagInner),
          (this.countryList = t("<ul>", {
            class: "country-list v-hide",
          }).appendTo(e)),
          this.preferredCountries.length &&
            (this._appendListItems(this.preferredCountries, "preferred"),
            t("<li>", { class: "divider" }).appendTo(this.countryList)),
          this._appendListItems(this.countries, ""),
          (this.dropdownHeight = this.countryList.outerHeight()),
          this.countryList.removeClass("v-hide").addClass("hide"),
          i.innerWidth < 500 &&
            this.countryList.outerWidth(this.telInput.outerWidth()),
          (this.countryListItems = this.countryList.children(".country"));
      },
      _appendListItems: function (t, i) {
        for (var e = "", n = 0; n < t.length; n++) {
          var a = t[n];
          (e +=
            "<li class='country " +
            i +
            "' data-dial-code='" +
            a.dialCode +
            "' data-country-code='" +
            a.iso2 +
            "'>"),
            (e += "<div class='iti-flag " + a.iso2 + "'></div>"),
            (e += "<span class='country-name'>" + a.name + "</span>"),
            (e += "<span class='dial-code'>+" + a.dialCode + "</span>"),
            (e += "</li>");
        }
        this.countryList.append(e);
      },
      _setInitialState: function () {
        var t = this.telInput.val();
        this._getDialCode(t)
          ? this._updateFlagFromNumber(t)
          : (this.options.defaultCountry
              ? (this.options.defaultCountry = this._getCountryData(
                  this.options.defaultCountry,
                  !1,
                  !1
                ))
              : (this.options.defaultCountry = this.preferredCountries.length
                  ? this.preferredCountries[0]
                  : this.countries[0]),
            this._selectFlag(this.options.defaultCountry.iso2),
            t ||
              this._updateDialCode(this.options.defaultCountry.dialCode, !1)),
          t && this._updateVal(t, !1);
      },
      _initListeners: function () {
        var e = this;
        this._initKeyListeners(),
          (this.options.autoHideDialCode || this.options.autoFormat) &&
            this._initFocusListeners();
        var n = this.telInput.closest("label");
        n.length &&
          n.on("click" + this.ns, function (t) {
            e.countryList.hasClass("hide")
              ? e.telInput.focus()
              : t.preventDefault();
          }),
          this.selectedFlagInner.parent().on("click" + this.ns, function (t) {
            !e.countryList.hasClass("hide") ||
              e.telInput.prop("disabled") ||
              e.telInput.prop("readonly") ||
              e._showDropdown();
          }),
          this.options.utilsScript &&
            (b
              ? this.loadUtils()
              : t(i).load(function () {
                  e.loadUtils();
                }));
      },
      _initKeyListeners: function () {
        var t = this;
        this.options.autoFormat &&
          this.telInput.on("keypress" + this.ns, function (e) {
            if (
              e.which >= m &&
              !e.metaKey &&
              i.intlTelInputUtils &&
              !t.telInput.prop("readonly")
            ) {
              e.preventDefault();
              var n = (e.which >= f && e.which <= g) || e.which == d,
                a = t.telInput[0],
                s = t.isGoodBrowser && a.selectionStart == a.selectionEnd,
                o = t.telInput.attr("maxlength"),
                r = t.telInput.val();
              if ((!o || r.length < o) && (n || s)) {
                var l = n ? String.fromCharCode(e.which) : null;
                t._handleInputKey(l, !0),
                  r != t.telInput.val() && t.telInput.trigger("input");
              }
              n || t._handleInvalidKey();
            }
          }),
          this.telInput.on("keyup" + this.ns, function (e) {
            if (e.which == u || t.telInput.prop("readonly"));
            else if (t.options.autoFormat && i.intlTelInputUtils) {
              var n = e.which == C || e.which == I || e.which == _,
                a = t.telInput[0],
                s = t.isGoodBrowser && a.selectionStart == a.selectionEnd,
                o =
                  t.isGoodBrowser &&
                  a.selectionStart == t.telInput.val().length;
              if (
                (((e.which == v && !o) || e.which == y || (n && s)) &&
                  t._handleInputKey(null, n && o),
                !t.options.nationalMode)
              ) {
                var r = t.telInput.val();
                if ("+" != r.substr(0, 1)) {
                  var l = t.isGoodBrowser ? a.selectionStart + 1 : 0;
                  t.telInput.val("+" + r),
                    t.isGoodBrowser && a.setSelectionRange(l, l);
                }
              }
            } else t._updateFlagFromNumber(t.telInput.val());
          });
      },
      _handleInvalidKey: function () {
        var t = this;
        this.telInput.trigger("invalidkey").addClass("iti-invalid-key"),
          setTimeout(function () {
            t.telInput.removeClass("iti-invalid-key");
          }, 100);
      },
      _handleInputKey: function (t, i) {
        var e,
          n = this.telInput.val(),
          a = this._getNumeric(n),
          s = this.telInput[0],
          o = 0;
        this.isGoodBrowser
          ? ((o = this._getDigitsOnRight(n, s.selectionEnd)),
            t
              ? (n =
                  n.substr(0, s.selectionStart) +
                  t +
                  n.substring(s.selectionEnd, n.length))
              : (e = n.charAt(s.selectionStart - 1)))
          : t && (n += t);
        var r = this._getNumeric(n);
        if (
          this.options.preventInvalidDialCodes &&
          "+" == n.charAt(0) &&
          r.length &&
          !this._hasPotentialDialCode(r, this.pcc, 0)
        )
          this._handleInvalidKey();
        else {
          this.setNumber(n, i), (n = this.telInput.val());
          var l,
            u = this._getNumeric(n),
            h = a == u;
          if (
            (this.options.preventInvalidNumbers &&
              t &&
              (h ? this._handleInvalidKey() : a.length == u.length && o--),
            this.isGoodBrowser)
          )
            o
              ? ((l = this._getCursorFromDigitsOnRight(n, o)),
                t || (l = this._getCursorFromLeftChar(n, l, e)))
              : (l = n.length),
              s.setSelectionRange(l, l);
        }
      },
      _hasPotentialDialCode: function (t, i, e) {
        var n = i[t.charAt(e)];
        return (
          !!n &&
          (!0 === n ||
            ("object" == typeof n
              ? t.length == e + 1 || this._hasPotentialDialCode(t, n, e + 1)
              : void 0))
        );
      },
      _getCursorFromLeftChar: function (i, e, n) {
        for (var a = e; a > 0; a--) {
          var s = i.charAt(a - 1);
          if (s == n || t.isNumeric(s)) return a;
        }
        return 0;
      },
      _getCursorFromDigitsOnRight: function (i, e) {
        for (var n = i.length - 1; n >= 0; n--)
          if (t.isNumeric(i.charAt(n)) && 0 == --e) return n;
        return 0;
      },
      _getDigitsOnRight: function (i, e) {
        for (var n = 0, a = e; a < i.length; a++)
          t.isNumeric(i.charAt(a)) && n++;
        return n;
      },
      _initFocusListeners: function () {
        var t = this;
        this.options.autoHideDialCode &&
          this.telInput.on("mousedown" + this.ns, function (i) {
            t.telInput.is(":focus") ||
              t.telInput.val() ||
              (i.preventDefault(), t.telInput.focus());
          }),
          this.telInput.on("focus" + this.ns, function (e) {
            var n = t.telInput.val();
            t.telInput.data("focusVal", n),
              t.options.autoHideDialCode &&
                !n &&
                !t.telInput.prop("readonly") &&
                t.selectedCountryData.dialCode &&
                (t._updateVal("+" + t.selectedCountryData.dialCode, !0),
                t.telInput.one("keypress.plus" + t.ns, function (e) {
                  if (e.which == d) {
                    var n =
                      t.options.autoFormat && i.intlTelInputUtils ? "+" : "";
                    t.telInput.val(n);
                  }
                }),
                setTimeout(function () {
                  var i = t.telInput[0];
                  if (t.isGoodBrowser) {
                    var e = t.telInput.val().length;
                    i.setSelectionRange(e, e);
                  }
                }));
          }),
          this.telInput.on("blur" + this.ns, function () {
            if (t.options.autoHideDialCode) {
              var e = t.telInput.val();
              if ("+" == e.substr(0, 1)) {
                var n = t._getNumeric(e);
                (n && t.selectedCountryData.dialCode != n) ||
                  t.telInput.val("");
              }
              t.telInput.off("keypress.plus" + t.ns);
            }
            t.options.autoFormat &&
              i.intlTelInputUtils &&
              t.telInput.val() != t.telInput.data("focusVal") &&
              t.telInput.trigger("change");
          });
      },
      _getNumeric: function (t) {
        return t.replace(/\D/g, "");
      },
      _showDropdown: function () {
        this._setDropdownPosition();
        var t = this.countryList.children(".active");
        t.length && this._highlightListItem(t),
          this.countryList.removeClass("hide"),
          t.length && this._scrollTo(t),
          this._bindDropdownListeners(),
          this.selectedFlagInner.children(".arrow").addClass("up");
      },
      _setDropdownPosition: function () {
        var e = this.telInput.offset().top,
          n = t(i).scrollTop(),
          a =
            e + this.telInput.outerHeight() + this.dropdownHeight <
            n + t(i).height(),
          s = e - this.dropdownHeight > n,
          o = !a && s ? "-" + (this.dropdownHeight - 1) + "px" : "";
        this.countryList.css("top", o);
      },
      _bindDropdownListeners: function () {
        var i = this;
        this.countryList.on("mouseover" + this.ns, ".country", function (e) {
          i._highlightListItem(t(this));
        }),
          this.countryList.on("click" + this.ns, ".country", function (e) {
            i._selectListItem(t(this));
          });
        var n = !0;
        t("html").on("click" + this.ns, function (t) {
          n || i._closeDropdown(), (n = !1);
        });
        var a = "",
          s = null;
        t(e).on("keydown" + this.ns, function (t) {
          t.preventDefault(),
            t.which == r || t.which == l
              ? i._handleUpDownKey(t.which)
              : t.which == u
              ? i._handleEnterKey()
              : t.which == h
              ? i._closeDropdown()
              : ((t.which >= c && t.which <= p) || t.which == m) &&
                (s && clearTimeout(s),
                (a += String.fromCharCode(t.which)),
                i._searchForCountry(a),
                (s = setTimeout(function () {
                  a = "";
                }, 1e3)));
        });
      },
      _handleUpDownKey: function (t) {
        var i = this.countryList.children(".highlight").first(),
          e = t == r ? i.prev() : i.next();
        e.length &&
          (e.hasClass("divider") && (e = t == r ? e.prev() : e.next()),
          this._highlightListItem(e),
          this._scrollTo(e));
      },
      _handleEnterKey: function () {
        var t = this.countryList.children(".highlight").first();
        t.length && this._selectListItem(t);
      },
      _searchForCountry: function (t) {
        for (var i = 0; i < this.countries.length; i++)
          if (this._startsWith(this.countries[i].name, t)) {
            var e = this.countryList
              .children("[data-country-code=" + this.countries[i].iso2 + "]")
              .not(".preferred");
            this._highlightListItem(e), this._scrollTo(e, !0);
            break;
          }
      },
      _startsWith: function (t, i) {
        return t.substr(0, i.length).toUpperCase() == i;
      },
      _updateVal: function (t, e) {
        var n;
        if (this.options.autoFormat && i.intlTelInputUtils) {
          n = intlTelInputUtils.formatNumber(
            t,
            this.selectedCountryData.iso2,
            e,
            this.options.preventInvalidNumbers
          );
          var a = this.telInput.attr("maxlength");
          a && n.length > a && (n = n.substr(0, a));
        } else n = t;
        this.telInput.val(n);
      },
      _updateFlagFromNumber: function (i) {
        this.options.nationalMode &&
          this.selectedCountryData &&
          "1" == this.selectedCountryData.dialCode &&
          "+" != i.substr(0, 1) &&
          (i = "+1" + i);
        var e = this._getDialCode(i);
        if (e) {
          var n = this.countryCodes[this._getNumeric(e)];
          if (
            !(
              this.selectedCountryData &&
              -1 != t.inArray(this.selectedCountryData.iso2, n)
            ) ||
            this._isUnknownNanp(i, e)
          )
            for (var a = 0; a < n.length; a++)
              if (n[a]) {
                this._selectFlag(n[a]);
                break;
              }
        } else
          "+" == i.charAt(0) &&
            (i.length > 1
              ? this._selectFlag("")
              : this.selectedCountryData.iso2 ||
                this._selectFlag(this.options.defaultCountry.iso2));
      },
      _isUnknownNanp: function (t, i) {
        return "+1" == i && this._getNumeric(t).length >= 4;
      },
      _highlightListItem: function (t) {
        this.countryListItems.removeClass("highlight"), t.addClass("highlight");
      },
      _getCountryData: function (t, i, e) {
        for (var n = i ? D : this.countries, a = 0; a < n.length; a++)
          if (n[a].iso2 == t) return n[a];
        if (e) return null;
        throw new Error("No country data for '" + t + "'");
      },
      _selectFlag: function (t) {
        (this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}),
          this.selectedFlagInner.attr("class", "iti-flag " + t);
        var i = t
          ? this.selectedCountryData.name +
            ": +" +
            this.selectedCountryData.dialCode
          : "Unknown";
        this.selectedFlagInner.parent().attr("title", i),
          this._updatePlaceholder(),
          this.countryListItems.removeClass("active"),
          t &&
            this.countryListItems
              .children(".iti-flag." + t)
              .first()
              .parent()
              .addClass("active");
      },
      _updatePlaceholder: function () {
        if (i.intlTelInputUtils && !this.hadInitialPlaceholder) {
          var t = this.selectedCountryData.iso2,
            e =
              intlTelInputUtils.numberType[
                this.options.numberType || "FIXED_LINE"
              ],
            n = t
              ? intlTelInputUtils.getExampleNumber(
                  t,
                  this.options.nationalMode,
                  e
                )
              : "";
          this.telInput.attr("placeholder", n);
        }
      },
      _selectListItem: function (t) {
        var i = t.attr("data-country-code");
        this._selectFlag(i),
          this._closeDropdown(),
          this._updateDialCode(t.attr("data-dial-code"), !0),
          this.telInput.trigger("change"),
          this.telInput.focus();
      },
      _closeDropdown: function () {
        this.countryList.addClass("hide"),
          this.selectedFlagInner.children(".arrow").removeClass("up"),
          t(e).off(this.ns),
          t("html").off(this.ns),
          this.countryList.off(this.ns);
      },
      _scrollTo: function (t, i) {
        var e = this.countryList,
          n = e.height(),
          a = e.offset().top,
          s = a + n,
          o = t.outerHeight(),
          r = t.offset().top,
          l = r + o,
          u = r - a + e.scrollTop(),
          h = n / 2 - o / 2;
        if (r < a) i && (u -= h), e.scrollTop(u);
        else if (l > s) {
          i && (u += h);
          var d = n - o;
          e.scrollTop(u - d);
        }
      },
      _updateDialCode: function (i, e) {
        var n,
          a = this.telInput.val();
        if (((i = "+" + i), this.options.nationalMode && "+" != a.substr(0, 1)))
          n = a;
        else if (a) {
          var s = this._getDialCode(a);
          if (s.length > 1) n = a.replace(s, i);
          else n = i + ("+" != a.substr(0, 1) ? t.trim(a) : "");
        } else n = !this.options.autoHideDialCode || e ? i : "";
        this._updateVal(n, e);
      },
      _getDialCode: function (i) {
        var e = "";
        if ("+" == i.charAt(0))
          for (var n = "", a = 0; a < i.length; a++) {
            var s = i.charAt(a);
            if (
              t.isNumeric(s) &&
              ((n += s),
              this.countryCodes[n] && (e = i.substr(0, a + 1)),
              4 == n.length)
            )
              break;
          }
        return e;
      },
      destroy: function () {
        this._closeDropdown(),
          this.telInput.off(this.ns),
          this.selectedFlagInner.parent().off(this.ns),
          this.telInput.closest("label").off(this.ns),
          this.telInput.parent().before(this.telInput).remove();
      },
      getNumber: function (t) {
        return i.intlTelInputUtils
          ? intlTelInputUtils.formatNumberByType(
              this.telInput.val(),
              this.selectedCountryData.iso2,
              t
            )
          : "";
      },
      getNumberType: function () {
        return i.intlTelInputUtils
          ? intlTelInputUtils.getNumberType(
              this.telInput.val(),
              this.selectedCountryData.iso2
            )
          : -99;
      },
      getSelectedCountryData: function () {
        return this.selectedCountryData || {};
      },
      getValidationError: function () {
        return i.intlTelInputUtils
          ? intlTelInputUtils.getValidationError(
              this.telInput.val(),
              this.selectedCountryData.iso2
            )
          : -99;
      },
      isValidNumber: function () {
        var e = t.trim(this.telInput.val()),
          n = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
        return (
          !(/[a-zA-Z]/.test(e) || !i.intlTelInputUtils) &&
          intlTelInputUtils.isValidNumber(e, n)
        );
      },
      loadUtils: function (i) {
        var e = i || this.options.utilsScript;
        !t.fn[a].loadedUtilsScript &&
          e &&
          ((t.fn[a].loadedUtilsScript = !0),
          t.ajax({
            url: e,
            success: function () {
              t(".intl-tel-input input").intlTelInput("utilsLoaded");
            },
            dataType: "script",
            cache: !0,
          }));
      },
      selectCountry: function (t) {
        this.selectedFlagInner.hasClass(t) ||
          (this._selectFlag(t),
          this._updateDialCode(this.selectedCountryData.dialCode, !1));
      },
      setNumber: function (t, i) {
        this.options.nationalMode || "+" == t.substr(0, 1) || (t = "+" + t),
          this._updateFlagFromNumber(t),
          this._updateVal(t, i);
      },
      utilsLoaded: function () {
        this.options.autoFormat &&
          this.telInput.val() &&
          this._updateVal(this.telInput.val()),
          this._updatePlaceholder();
      },
    }),
    (t.fn[a] = function (i) {
      var e,
        s = arguments;
      return i === n || "object" == typeof i
        ? this.each(function () {
            t.data(this, "plugin_" + a) ||
              t.data(this, "plugin_" + a, new w(this, i));
          })
        : "string" == typeof i && "_" !== i[0] && "init" !== i
        ? (this.each(function () {
            var n = t.data(this, "plugin_" + a);
            n instanceof w &&
              "function" == typeof n[i] &&
              (e = n[i].apply(n, Array.prototype.slice.call(s, 1))),
              "destroy" === i && t.data(this, "plugin_" + a, null);
          }),
          e !== n ? e : this)
        : void 0;
    }),
    (t.fn[a].getCountryData = function () {
      return D;
    });
  for (
    var D = [
        ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
        ["Albania (Shqipëri)", "al", "355"],
        ["Algeria (‫الجزائر‬‎)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (Հայաստան)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61"],
        ["Austria (Österreich)", "at", "43"],
        ["Azerbaijan (Azərbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (‫البحرين‬‎)", "bh", "973"],
        ["Bangladesh (বাংলাদেশ)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (Беларусь)", "by", "375"],
        ["Belgium (België)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (Bénin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (འབྲུག)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (България)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (កម្ពុជា)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        [
          "Canada",
          "ca",
          "1",
          1,
          [
            "204",
            "226",
            "236",
            "249",
            "250",
            "289",
            "306",
            "343",
            "365",
            "387",
            "403",
            "416",
            "418",
            "431",
            "437",
            "438",
            "450",
            "506",
            "514",
            "519",
            "548",
            "579",
            "581",
            "587",
            "604",
            "613",
            "639",
            "647",
            "672",
            "705",
            "709",
            "742",
            "778",
            "780",
            "782",
            "807",
            "819",
            "825",
            "867",
            "873",
            "902",
            "905",
          ],
        ],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (République centrafricaine)", "cf", "236"],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (中国)", "cn", "86"],
        ["Colombia", "co", "57"],
        ["Comoros (‫جزر القمر‬‎)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["Côte d’Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["Curaçao", "cw", "599", 0],
        ["Cyprus (Κύπρος)", "cy", "357"],
        ["Czech Republic (Česká republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        [
          "Dominican Republic (República Dominicana)",
          "do",
          "1",
          2,
          ["809", "829", "849"],
        ],
        ["Ecuador", "ec", "593"],
        ["Egypt (‫مصر‬‎)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (Føroyar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358"],
        ["France", "fr", "33"],
        ["French Guiana (Guyane française)", "gf", "594"],
        ["French Polynesia (Polynésie française)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (საქართველო)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (Ελλάδα)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guinea (Guinée)", "gn", "224"],
        ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (香港)", "hk", "852"],
        ["Hungary (Magyarország)", "hu", "36"],
        ["Iceland (Ísland)", "is", "354"],
        ["India (भारत)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (‫ایران‬‎)", "ir", "98"],
        ["Iraq (‫العراق‬‎)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Israel (‫ישראל‬‎)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (日本)", "jp", "81"],
        ["Jordan (‫الأردن‬‎)", "jo", "962"],
        ["Kazakhstan (Казахстан)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kuwait (‫الكويت‬‎)", "kw", "965"],
        ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
        ["Laos (ລາວ)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (‫لبنان‬‎)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (‫ليبيا‬‎)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (澳門)", "mo", "853"],
        ["Macedonia (FYROM) (Македонија)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mexico (México)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (Монгол)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (‫المغرب‬‎)", "ma", "212"],
        ["Mozambique (Moçambique)", "mz", "258"],
        ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
        ["Namibia (Namibië)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (नेपाल)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47"],
        ["Oman (‫عُمان‬‎)", "om", "968"],
        ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (‫فلسطين‬‎)", "ps", "970"],
        ["Panama (Panamá)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (Perú)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (‫قطر‬‎)", "qa", "974"],
        ["Réunion (La Réunion)", "re", "262"],
        ["Romania (România)", "ro", "40"],
        ["Russia (Россия)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
        ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
        ["Senegal (Sénégal)", "sn", "221"],
        ["Serbia (Србија)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (대한민국)", "kr", "82"],
        ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
        ["Spain (España)", "es", "34"],
        ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
        ["Sudan (‫السودان‬‎)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (‫سوريا‬‎)", "sy", "963"],
        ["Taiwan (台灣)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (ไทย)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (‫تونس‬‎)", "tn", "216"],
        ["Turkey (Türkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (Україна)", "ua", "380"],
        ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
        ["United Kingdom", "gb", "44"],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (Città del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (Việt Nam)", "vn", "84"],
        ["Wallis and Futuna", "wf", "681"],
        ["Yemen (‫اليمن‬‎)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
      ],
      k = 0;
    k < D.length;
    k++
  ) {
    var S = D[k];
    D[k] = {
      name: S[0],
      iso2: S[1],
      dialCode: S[2],
      priority: S[3] || 0,
      areaCodes: S[4] || null,
    };
  }
}),
  $(".tel input").intlTelInput({
    nationalMode: !1,
    preventInvalidDialCodes: !0,
  });
