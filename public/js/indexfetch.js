(() => {
  // <stdin>
  (() => {
    var Ce = false, Me = false, R = [];
    function Pr(e) {
      $r(e);
    }
    function $r(e) {
      R.includes(e) || R.push(e), Ir();
    }
    function _t(e) {
      let t = R.indexOf(e);
      t !== -1 && R.splice(t, 1);
    }
    function Ir() {
      !Me && !Ce && (Ce = true, queueMicrotask(Lr));
    }
    function Lr() {
      Ce = false, Me = true;
      for (let e = 0; e < R.length; e++)
        R[e]();
      R.length = 0, Me = false;
    }
    var k, G, se, ht, Te = true;
    function Nr(e) {
      Te = false, e(), Te = true;
    }
    function jr(e) {
      k = e.reactive, se = e.release, G = (t) => e.effect(t, {
        scheduler: (r) => {
          Te ? Pr(r) : r();
        }
      }), ht = e.raw;
    }
    function st(e) {
      G = e;
    }
    function Fr(e) {
      let t = () => {
      };
      return [(n) => {
        let i = G(n);
        return e._x_effects || (e._x_effects = /* @__PURE__ */ new Set(), e._x_runEffects = () => {
          e._x_effects.forEach((o) => o());
        }), e._x_effects.add(i), t = () => {
          i !== void 0 && (e._x_effects.delete(i), se(i));
        }, i;
      }, () => {
        t();
      }];
    }
    var gt = [], vt = [], yt = [];
    function Kr(e) {
      yt.push(e);
    }
    function xt(e, t) {
      typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, vt.push(t));
    }
    function Dr(e) {
      gt.push(e);
    }
    function mt(e, t, r) {
      e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r);
    }
    function bt(e, t) {
      !e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
        (t === void 0 || t.includes(r)) && (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
      });
    }
    var qe = new MutationObserver(Ue), ze = false;
    function wt() {
      qe.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
      }), ze = true;
    }
    function Et() {
      kr(), qe.disconnect(), ze = false;
    }
    var W = [], Ee = false;
    function kr() {
      W = W.concat(qe.takeRecords()), W.length && !Ee && (Ee = true, queueMicrotask(() => {
        Br(), Ee = false;
      }));
    }
    function Br() {
      Ue(W), W.length = 0;
    }
    function y(e) {
      if (!ze)
        return e();
      Et();
      let t = e();
      return wt(), t;
    }
    var We = false, ie = [];
    function Hr() {
      We = true;
    }
    function qr() {
      We = false, Ue(ie), ie = [];
    }
    function Ue(e) {
      if (We) {
        ie = ie.concat(e);
        return;
      }
      let t = [], r = [], n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let o = 0; o < e.length; o++)
        if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach((a) => a.nodeType === 1 && t.push(a)), e[o].removedNodes.forEach((a) => a.nodeType === 1 && r.push(a))), e[o].type === "attributes")) {
          let a = e[o].target, s = e[o].attributeName, u = e[o].oldValue, c = () => {
            n.has(a) || n.set(a, []), n.get(a).push({
              name: s,
              value: a.getAttribute(s)
            });
          }, l = () => {
            i.has(a) || i.set(a, []), i.get(a).push(s);
          };
          a.hasAttribute(s) && u === null ? c() : a.hasAttribute(s) ? (l(), c()) : l();
        }
      i.forEach((o, a) => {
        bt(a, o);
      }), n.forEach((o, a) => {
        gt.forEach((s) => s(a, o));
      });
      for (let o of r)
        if (!t.includes(o) && (vt.forEach((a) => a(o)), o._x_cleanups))
          for (; o._x_cleanups.length; )
            o._x_cleanups.pop()();
      t.forEach((o) => {
        o._x_ignoreSelf = true, o._x_ignore = true;
      });
      for (let o of t)
        r.includes(o) || !o.isConnected || (delete o._x_ignoreSelf, delete o._x_ignore, yt.forEach((a) => a(o)), o._x_ignore = true, o._x_ignoreSelf = true);
      t.forEach((o) => {
        delete o._x_ignoreSelf, delete o._x_ignore;
      }), t = null, r = null, n = null, i = null;
    }
    function At(e) {
      return X(F(e));
    }
    function J(e, t, r) {
      return e._x_dataStack = [t, ...F(r || e)], () => {
        e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
      };
    }
    function ut(e, t) {
      let r = e._x_dataStack[0];
      Object.entries(t).forEach(([n, i]) => {
        r[n] = i;
      });
    }
    function F(e) {
      return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? F(e.host) : e.parentNode ? F(e.parentNode) : [];
    }
    function X(e) {
      let t = new Proxy({}, {
        ownKeys: () => Array.from(new Set(e.flatMap((r) => Object.keys(r)))),
        has: (r, n) => e.some((i) => i.hasOwnProperty(n)),
        get: (r, n) => (e.find((i) => {
          if (i.hasOwnProperty(n)) {
            let o = Object.getOwnPropertyDescriptor(i, n);
            if (o.get && o.get._x_alreadyBound || o.set && o.set._x_alreadyBound)
              return true;
            if ((o.get || o.set) && o.enumerable) {
              let a = o.get, s = o.set, u = o;
              a = a && a.bind(t), s = s && s.bind(t), a && (a._x_alreadyBound = true), s && (s._x_alreadyBound = true), Object.defineProperty(i, n, {
                ...u,
                get: a,
                set: s
              });
            }
            return true;
          }
          return false;
        }) || {})[n],
        set: (r, n, i) => {
          let o = e.find((a) => a.hasOwnProperty(n));
          return o ? o[n] = i : e[e.length - 1][n] = i, true;
        }
      });
      return t;
    }
    function St(e) {
      let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null, r = (n, i = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o, {
          value: a,
          enumerable: s
        }]) => {
          if (s === false || a === void 0)
            return;
          let u = i === "" ? o : `${i}.${o}`;
          typeof a == "object" && a !== null && a._x_interceptor ? n[o] = a.initialize(e, u, o) : t(a) && a !== n && !(a instanceof Element) && r(a, u);
        });
      };
      return r(e);
    }
    function Ot(e, t = () => {
    }) {
      let r = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize(n, i, o) {
          return e(this.initialValue, () => zr(n, i), (a) => Re(n, i, a), i, o);
        }
      };
      return t(r), (n) => {
        if (typeof n == "object" && n !== null && n._x_interceptor) {
          let i = r.initialize.bind(r);
          r.initialize = (o, a, s) => {
            let u = n.initialize(o, a, s);
            return r.initialValue = u, i(o, a, s);
          };
        } else
          r.initialValue = n;
        return r;
      };
    }
    function zr(e, t) {
      return t.split(".").reduce((r, n) => r[n], e);
    }
    function Re(e, t, r) {
      if (typeof t == "string" && (t = t.split(".")), t.length === 1)
        e[t[0]] = r;
      else {
        if (t.length === 0)
          throw error;
        return e[t[0]] || (e[t[0]] = {}), Re(e[t[0]], t.slice(1), r);
      }
    }
    var Ct = {};
    function E(e, t) {
      Ct[e] = t;
    }
    function Pe(e, t) {
      return Object.entries(Ct).forEach(([r, n]) => {
        Object.defineProperty(e, `$${r}`, {
          get() {
            let [i, o] = $t(t);
            return i = {
              interceptor: Ot,
              ...i
            }, xt(t, o), n(t, i);
          },
          enumerable: false
        });
      }), {
        obj: e,
        cleanup: () => {
          t = null;
        }
      };
    }
    function Wr(e, t, r, ...n) {
      try {
        return r(...n);
      } catch (i) {
        Y(i, e, t);
      }
    }
    function Y(e, t, r = void 0) {
      Object.assign(e, {
        el: t,
        expression: r
      }), console.warn(`Alpine Expression Error: ${e.message}

${r ? 'Expression: "' + r + `"

` : ""}`, t), setTimeout(() => {
        throw e;
      }, 0);
    }
    var ne = true;
    function Ur(e) {
      let t = ne;
      ne = false, e(), ne = t;
    }
    function j(e, t, r = {}) {
      let n;
      return m(e, t)((i) => n = i, r), n;
    }
    function m(...e) {
      return Mt(...e);
    }
    var Mt = Tt;
    function Vr(e) {
      Mt = e;
    }
    function Tt(e, t) {
      let r = {}, n = Pe(r, e).cleanup;
      mt(e, "evaluator", n);
      let i = [r, ...F(e)];
      if (typeof t == "function")
        return Yr(i, t);
      let o = Jr(i, t, e);
      return Wr.bind(null, e, t, o);
    }
    function Yr(e, t) {
      return (r = () => {
      }, {
        scope: n = {},
        params: i = []
      } = {}) => {
        let o = t.apply(X([n, ...e]), i);
        oe(r, o);
      };
    }
    var Ae = {};
    function Gr(e, t) {
      if (Ae[e])
        return Ae[e];
      let r = Object.getPrototypeOf(async function() {
      }).constructor, n = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(() => { ${e} })()` : e, o = (() => {
        try {
          return new r(["__self", "scope"], `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);
        } catch (a) {
          return Y(a, t, e), Promise.resolve();
        }
      })();
      return Ae[e] = o, o;
    }
    function Jr(e, t, r) {
      let n = Gr(t, r);
      return (i = () => {
      }, {
        scope: o = {},
        params: a = []
      } = {}) => {
        n.result = void 0, n.finished = false;
        let s = X([o, ...e]);
        if (typeof n == "function") {
          let u = n(n, s).catch((c) => Y(c, r, t));
          n.finished ? (oe(i, n.result, s, a, r), n.result = void 0) : u.then((c) => {
            oe(i, c, s, a, r);
          }).catch((c) => Y(c, r, t)).finally(() => n.result = void 0);
        }
      };
    }
    function oe(e, t, r, n, i) {
      if (ne && typeof t == "function") {
        let o = t.apply(r, n);
        o instanceof Promise ? o.then((a) => oe(e, a, r, n)).catch((a) => Y(a, i, t)) : e(o);
      } else
        e(t);
    }
    var Ve = "x-";
    function B(e = "") {
      return Ve + e;
    }
    function Xr(e) {
      Ve = e;
    }
    var Rt = {};
    function g(e, t) {
      Rt[e] = t;
    }
    function Ye(e, t, r) {
      let n = {};
      return Array.from(t).map(Nt((o, a) => n[o] = a)).filter(Ft).map(tn(n, r)).sort(rn).map((o) => en(e, o));
    }
    function Zr(e) {
      return Array.from(e).map(Nt()).filter((t) => !Ft(t));
    }
    var $e = false, z = /* @__PURE__ */ new Map(), Pt = Symbol();
    function Qr(e) {
      $e = true;
      let t = Symbol();
      Pt = t, z.set(t, []);
      let r = () => {
        for (; z.get(t).length; )
          z.get(t).shift()();
        z.delete(t);
      }, n = () => {
        $e = false, r();
      };
      e(r), n();
    }
    function $t(e) {
      let t = [], r = (s) => t.push(s), [n, i] = Fr(e);
      return t.push(i), [{
        Alpine: Z,
        effect: n,
        cleanup: r,
        evaluateLater: m.bind(m, e),
        evaluate: j.bind(j, e)
      }, () => t.forEach((s) => s())];
    }
    function en(e, t) {
      let r = () => {
      }, n = Rt[t.type] || r, [i, o] = $t(e);
      mt(e, t.original, o);
      let a = () => {
        e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, i), n = n.bind(n, e, t, i), $e ? z.get(Pt).push(n) : n());
      };
      return a.runCleanups = o, a;
    }
    var It = (e, t) => ({
      name: r,
      value: n
    }) => (r.startsWith(e) && (r = r.replace(e, t)), {
      name: r,
      value: n
    }), Lt = (e) => e;
    function Nt(e = () => {
    }) {
      return ({
        name: t,
        value: r
      }) => {
        let {
          name: n,
          value: i
        } = jt.reduce((o, a) => a(o), {
          name: t,
          value: r
        });
        return n !== t && e(n, t), {
          name: n,
          value: i
        };
      };
    }
    var jt = [];
    function Ge(e) {
      jt.push(e);
    }
    function Ft({
      name: e
    }) {
      return Kt().test(e);
    }
    var Kt = () => new RegExp(`^${Ve}([^:^.]+)\\b`);
    function tn(e, t) {
      return ({
        name: r,
        value: n
      }) => {
        let i = r.match(Kt()), o = r.match(/:([a-zA-Z0-9\-:]+)/), a = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], s = t || e[r] || r;
        return {
          type: i ? i[1] : null,
          value: o ? o[1] : null,
          modifiers: a.map((u) => u.replace(".", "")),
          expression: n,
          original: s
        };
      };
    }
    var Ie = "DEFAULT", te = ["ignore", "ref", "data", "id", "bind", "init", "for", "mask", "model", "modelable", "transition", "show", "if", Ie, "teleport", "element"];
    function rn(e, t) {
      let r = te.indexOf(e.type) === -1 ? Ie : e.type, n = te.indexOf(t.type) === -1 ? Ie : t.type;
      return te.indexOf(r) - te.indexOf(n);
    }
    function U(e, t, r = {}) {
      e.dispatchEvent(new CustomEvent(t, {
        detail: r,
        bubbles: true,
        composed: true,
        cancelable: true
      }));
    }
    var Le = [], Je = false;
    function Dt(e = () => {
    }) {
      return queueMicrotask(() => {
        Je || setTimeout(() => {
          Ne();
        });
      }), new Promise((t) => {
        Le.push(() => {
          e(), t();
        });
      });
    }
    function Ne() {
      for (Je = false; Le.length; )
        Le.shift()();
    }
    function nn() {
      Je = true;
    }
    function I(e, t) {
      if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach((i) => I(i, t));
        return;
      }
      let r = false;
      if (t(e, () => r = true), r)
        return;
      let n = e.firstElementChild;
      for (; n; )
        I(n, t, false), n = n.nextElementSibling;
    }
    function K(e, ...t) {
      console.warn(`Alpine Warning: ${e}`, ...t);
    }
    function on() {
      document.body || K("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), U(document, "alpine:init"), U(document, "alpine:initializing"), wt(), Kr((t) => C(t, I)), xt((t) => Wt(t)), Dr((t, r) => {
        Ye(t, r).forEach((n) => n());
      });
      let e = (t) => !ue(t.parentElement, true);
      Array.from(document.querySelectorAll(Ht())).filter(e).forEach((t) => {
        C(t);
      }), U(document, "alpine:initialized");
    }
    var Xe = [], kt = [];
    function Bt() {
      return Xe.map((e) => e());
    }
    function Ht() {
      return Xe.concat(kt).map((e) => e());
    }
    function qt(e) {
      Xe.push(e);
    }
    function zt(e) {
      kt.push(e);
    }
    function ue(e, t = false) {
      return ce(e, (r) => {
        if ((t ? Ht() : Bt()).some((i) => r.matches(i)))
          return true;
      });
    }
    function ce(e, t) {
      if (!!e) {
        if (t(e))
          return e;
        if (e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement)
          return ce(e.parentElement, t);
      }
    }
    function an(e) {
      return Bt().some((t) => e.matches(t));
    }
    function C(e, t = I) {
      Qr(() => {
        t(e, (r, n) => {
          Ye(r, r.attributes).forEach((i) => i()), r._x_ignore && n();
        });
      });
    }
    function Wt(e) {
      I(e, (t) => bt(t));
    }
    function Ze(e, t) {
      return Array.isArray(t) ? ct(e, t.join(" ")) : typeof t == "object" && t !== null ? sn(e, t) : typeof t == "function" ? Ze(e, t()) : ct(e, t);
    }
    function ct(e, t) {
      let r = (o) => o.split(" ").filter(Boolean), n = (o) => o.split(" ").filter((a) => !e.classList.contains(a)).filter(Boolean), i = (o) => (e.classList.add(...o), () => {
        e.classList.remove(...o);
      });
      return t = t === true ? t = "" : t || "", i(n(t));
    }
    function sn(e, t) {
      let r = (s) => s.split(" ").filter(Boolean), n = Object.entries(t).flatMap(([s, u]) => u ? r(s) : false).filter(Boolean), i = Object.entries(t).flatMap(([s, u]) => u ? false : r(s)).filter(Boolean), o = [], a = [];
      return i.forEach((s) => {
        e.classList.contains(s) && (e.classList.remove(s), a.push(s));
      }), n.forEach((s) => {
        e.classList.contains(s) || (e.classList.add(s), o.push(s));
      }), () => {
        a.forEach((s) => e.classList.add(s)), o.forEach((s) => e.classList.remove(s));
      };
    }
    function le(e, t) {
      return typeof t == "object" && t !== null ? un(e, t) : cn(e, t);
    }
    function un(e, t) {
      let r = {};
      return Object.entries(t).forEach(([n, i]) => {
        r[n] = e.style[n], n.startsWith("--") || (n = ln(n)), e.style.setProperty(n, i);
      }), setTimeout(() => {
        e.style.length === 0 && e.removeAttribute("style");
      }), () => {
        le(e, r);
      };
    }
    function cn(e, t) {
      let r = e.getAttribute("style", t);
      return e.setAttribute("style", t), () => {
        e.setAttribute("style", r || "");
      };
    }
    function ln(e) {
      return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function je(e, t = () => {
    }) {
      let r = false;
      return function() {
        r ? t.apply(this, arguments) : (r = true, e.apply(this, arguments));
      };
    }
    g("transition", (e, {
      value: t,
      modifiers: r,
      expression: n
    }, {
      evaluate: i
    }) => {
      typeof n == "function" && (n = i(n)), n ? fn(e, n, t) : dn(e, r, t);
    });
    function fn(e, t, r) {
      Ut(e, Ze, ""), {
        enter: (i) => {
          e._x_transition.enter.during = i;
        },
        "enter-start": (i) => {
          e._x_transition.enter.start = i;
        },
        "enter-end": (i) => {
          e._x_transition.enter.end = i;
        },
        leave: (i) => {
          e._x_transition.leave.during = i;
        },
        "leave-start": (i) => {
          e._x_transition.leave.start = i;
        },
        "leave-end": (i) => {
          e._x_transition.leave.end = i;
        }
      }[r](t);
    }
    function dn(e, t, r) {
      Ut(e, le);
      let n = !t.includes("in") && !t.includes("out") && !r, i = n || t.includes("in") || ["enter"].includes(r), o = n || t.includes("out") || ["leave"].includes(r);
      t.includes("in") && !n && (t = t.filter((p, v) => v < t.indexOf("out"))), t.includes("out") && !n && (t = t.filter((p, v) => v > t.indexOf("out")));
      let a = !t.includes("opacity") && !t.includes("scale"), s = a || t.includes("opacity"), u = a || t.includes("scale"), c = s ? 0 : 1, l = u ? H(t, "scale", 95) / 100 : 1, d = H(t, "delay", 0), h = H(t, "origin", "center"), S = "opacity, transform", L = H(t, "duration", 150) / 1e3, Q = H(t, "duration", 75) / 1e3, f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
      i && (e._x_transition.enter.during = {
        transformOrigin: h,
        transitionDelay: d,
        transitionProperty: S,
        transitionDuration: `${L}s`,
        transitionTimingFunction: f
      }, e._x_transition.enter.start = {
        opacity: c,
        transform: `scale(${l})`
      }, e._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
      }), o && (e._x_transition.leave.during = {
        transformOrigin: h,
        transitionDelay: d,
        transitionProperty: S,
        transitionDuration: `${Q}s`,
        transitionTimingFunction: f
      }, e._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
      }, e._x_transition.leave.end = {
        opacity: c,
        transform: `scale(${l})`
      });
    }
    function Ut(e, t, r = {}) {
      e._x_transition || (e._x_transition = {
        enter: {
          during: r,
          start: r,
          end: r
        },
        leave: {
          during: r,
          start: r,
          end: r
        },
        in(n = () => {
        }, i = () => {
        }) {
          Fe(e, t, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, n, i);
        },
        out(n = () => {
        }, i = () => {
        }) {
          Fe(e, t, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, n, i);
        }
      });
    }
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, r, n) {
      let i = () => {
        document.visibilityState === "visible" ? requestAnimationFrame(r) : setTimeout(r);
      };
      if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(r) : i() : e._x_transition ? e._x_transition.in(r) : i();
        return;
      }
      e._x_hidePromise = e._x_transition ? new Promise((o, a) => {
        e._x_transition.out(() => {
        }, () => o(n)), e._x_transitioning.beforeCancel(() => a({
          isFromCancelledTransition: true
        }));
      }) : Promise.resolve(n), queueMicrotask(() => {
        let o = Vt(e);
        o ? (o._x_hideChildren || (o._x_hideChildren = []), o._x_hideChildren.push(e)) : queueMicrotask(() => {
          let a = (s) => {
            let u = Promise.all([s._x_hidePromise, ...(s._x_hideChildren || []).map(a)]).then(([c]) => c());
            return delete s._x_hidePromise, delete s._x_hideChildren, u;
          };
          a(e).catch((s) => {
            if (!s.isFromCancelledTransition)
              throw s;
          });
        });
      });
    };
    function Vt(e) {
      let t = e.parentNode;
      if (!!t)
        return t._x_hidePromise ? t : Vt(t);
    }
    function Fe(e, t, {
      during: r,
      start: n,
      end: i
    } = {}, o = () => {
    }, a = () => {
    }) {
      if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(i).length === 0) {
        o(), a();
        return;
      }
      let s, u, c;
      pn(e, {
        start() {
          s = t(e, n);
        },
        during() {
          u = t(e, r);
        },
        before: o,
        end() {
          s(), c = t(e, i);
        },
        after: a,
        cleanup() {
          u(), c();
        }
      });
    }
    function pn(e, t) {
      let r, n, i, o = je(() => {
        y(() => {
          r = true, n || t.before(), i || (t.end(), Ne()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
        });
      });
      e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(a) {
          this.beforeCancels.push(a);
        },
        cancel: je(function() {
          for (; this.beforeCancels.length; )
            this.beforeCancels.shift()();
          o();
        }),
        finish: o
      }, y(() => {
        t.start(), t.during();
      }), nn(), requestAnimationFrame(() => {
        if (r)
          return;
        let a = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3, s = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        a === 0 && (a = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), y(() => {
          t.before();
        }), n = true, requestAnimationFrame(() => {
          r || (y(() => {
            t.end();
          }), Ne(), setTimeout(e._x_transitioning.finish, a + s), i = true);
        });
      });
    }
    function H(e, t, r) {
      if (e.indexOf(t) === -1)
        return r;
      let n = e[e.indexOf(t) + 1];
      if (!n || t === "scale" && isNaN(n))
        return r;
      if (t === "duration") {
        let i = n.match(/([0-9]+)ms/);
        if (i)
          return i[1];
      }
      return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n;
    }
    var Ke = false;
    function fe(e, t = () => {
    }) {
      return (...r) => Ke ? t(...r) : e(...r);
    }
    function _n(e, t) {
      t._x_dataStack || (t._x_dataStack = e._x_dataStack), Ke = true, gn(() => {
        hn(t);
      }), Ke = false;
    }
    function hn(e) {
      let t = false;
      C(e, (n, i) => {
        I(n, (o, a) => {
          if (t && an(o))
            return a();
          t = true, i(o, a);
        });
      });
    }
    function gn(e) {
      let t = G;
      st((r, n) => {
        let i = t(r);
        return se(i), () => {
        };
      }), e(), st(t);
    }
    function Yt(e, t, r, n = []) {
      switch (e._x_bindings || (e._x_bindings = k({})), e._x_bindings[t] = r, t = n.includes("camel") ? En(t) : t, t) {
        case "value":
          vn(e, r);
          break;
        case "style":
          xn(e, r);
          break;
        case "class":
          yn(e, r);
          break;
        default:
          mn(e, t, r);
          break;
      }
    }
    function vn(e, t) {
      if (e.type === "radio")
        e.attributes.value === void 0 && (e.value = t), window.fromModel && (e.checked = lt(e.value, t));
      else if (e.type === "checkbox")
        Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some((r) => lt(r, e.value)) : e.checked = !!t;
      else if (e.tagName === "SELECT")
        wn(e, t);
      else {
        if (e.value === t)
          return;
        e.value = t;
      }
    }
    function yn(e, t) {
      e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = Ze(e, t);
    }
    function xn(e, t) {
      e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = le(e, t);
    }
    function mn(e, t, r) {
      [null, void 0, false].includes(r) && An(t) ? e.removeAttribute(t) : (Gt(t) && (r = t), bn(e, t, r));
    }
    function bn(e, t, r) {
      e.getAttribute(t) != r && e.setAttribute(t, r);
    }
    function wn(e, t) {
      let r = [].concat(t).map((n) => n + "");
      Array.from(e.options).forEach((n) => {
        n.selected = r.includes(n.value);
      });
    }
    function En(e) {
      return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
    }
    function lt(e, t) {
      return e == t;
    }
    function Gt(e) {
      return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e);
    }
    function An(e) {
      return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
    }
    function Sn(e, t, r) {
      if (e._x_bindings && e._x_bindings[t] !== void 0)
        return e._x_bindings[t];
      let n = e.getAttribute(t);
      return n === null ? typeof r == "function" ? r() : r : Gt(t) ? !![t, "true"].includes(n) : n === "" ? true : n;
    }
    function Jt(e, t) {
      var r;
      return function() {
        var n = this, i = arguments, o = function() {
          r = null, e.apply(n, i);
        };
        clearTimeout(r), r = setTimeout(o, t);
      };
    }
    function Xt(e, t) {
      let r;
      return function() {
        let n = this, i = arguments;
        r || (e.apply(n, i), r = true, setTimeout(() => r = false, t));
      };
    }
    function On(e) {
      e(Z);
    }
    var T = {}, ft = false;
    function Cn(e, t) {
      if (ft || (T = k(T), ft = true), t === void 0)
        return T[e];
      T[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && T[e].init(), St(T[e]);
    }
    function Mn() {
      return T;
    }
    var Zt = {};
    function Tn(e, t) {
      Zt[e] = typeof t != "function" ? () => t : t;
    }
    function Rn(e) {
      return Object.entries(Zt).forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            return (...n) => r(...n);
          }
        });
      }), e;
    }
    var Qt = {};
    function Pn(e, t) {
      Qt[e] = t;
    }
    function $n(e, t) {
      return Object.entries(Qt).forEach(([r, n]) => {
        Object.defineProperty(e, r, {
          get() {
            return (...i) => n.bind(t)(...i);
          },
          enumerable: false
        });
      }), e;
    }
    var In = {
      get reactive() {
        return k;
      },
      get release() {
        return se;
      },
      get effect() {
        return G;
      },
      get raw() {
        return ht;
      },
      version: "3.10.2",
      flushAndStopDeferringMutations: qr,
      dontAutoEvaluateFunctions: Ur,
      disableEffectScheduling: Nr,
      stopObservingMutations: Et,
      destroyTree: Wt,
      setReactivityEngine: jr,
      closestDataStack: F,
      skipDuringClone: fe,
      addRootSelector: qt,
      addInitSelector: zt,
      addScopeToNode: J,
      deferMutations: Hr,
      mapAttributes: Ge,
      evaluateLater: m,
      setEvaluator: Vr,
      mergeProxies: X,
      findClosest: ce,
      closestRoot: ue,
      interceptor: Ot,
      transition: Fe,
      setStyles: le,
      mutateDom: y,
      directive: g,
      throttle: Xt,
      debounce: Jt,
      evaluate: j,
      initTree: C,
      nextTick: Dt,
      prefixed: B,
      prefix: Xr,
      plugin: On,
      magic: E,
      store: Cn,
      start: on,
      clone: _n,
      bound: Sn,
      $data: At,
      data: Pn,
      bind: Tn
    }, Z = In;
    function er(e, t) {
      let r = /* @__PURE__ */ Object.create(null), n = e.split(",");
      for (let i = 0; i < n.length; i++)
        r[n[i]] = true;
      return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
    }
    var Ln = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pi = er(Ln + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"), Nn = Object.freeze({}), $i = Object.freeze([]), tr = Object.assign, jn = Object.prototype.hasOwnProperty, de = (e, t) => jn.call(e, t), P = Array.isArray, V = (e) => rr(e) === "[object Map]", Fn = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", pe = (e) => e !== null && typeof e == "object", Kn = Object.prototype.toString, rr = (e) => Kn.call(e), nr = (e) => rr(e).slice(8, -1), et = (e) => Fn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _e = (e) => {
      let t = /* @__PURE__ */ Object.create(null);
      return (r) => t[r] || (t[r] = e(r));
    }, Dn = /-(\w)/g, Ii = _e((e) => e.replace(Dn, (t, r) => r ? r.toUpperCase() : "")), kn = /\B([A-Z])/g, Li = _e((e) => e.replace(kn, "-$1").toLowerCase()), ir = _e((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ni = _e((e) => e ? `on${ir(e)}` : ""), or = (e, t) => e !== t && (e === e || t === t), De = /* @__PURE__ */ new WeakMap(), q = [], A, $ = Symbol("iterate"), ke = Symbol("Map key iterate");
    function Bn(e) {
      return e && e._isEffect === true;
    }
    function Hn(e, t = Nn) {
      Bn(e) && (e = e.raw);
      let r = Wn(e, t);
      return t.lazy || r(), r;
    }
    function qn(e) {
      e.active && (ar(e), e.options.onStop && e.options.onStop(), e.active = false);
    }
    var zn = 0;
    function Wn(e, t) {
      let r = function() {
        if (!r.active)
          return e();
        if (!q.includes(r)) {
          ar(r);
          try {
            return Vn(), q.push(r), A = r, e();
          } finally {
            q.pop(), sr(), A = q[q.length - 1];
          }
        }
      };
      return r.id = zn++, r.allowRecurse = !!t.allowRecurse, r._isEffect = true, r.active = true, r.raw = e, r.deps = [], r.options = t, r;
    }
    function ar(e) {
      let {
        deps: t
      } = e;
      if (t.length) {
        for (let r = 0; r < t.length; r++)
          t[r].delete(e);
        t.length = 0;
      }
    }
    var D = true, tt = [];
    function Un() {
      tt.push(D), D = false;
    }
    function Vn() {
      tt.push(D), D = true;
    }
    function sr() {
      let e = tt.pop();
      D = e === void 0 ? true : e;
    }
    function w(e, t, r) {
      if (!D || A === void 0)
        return;
      let n = De.get(e);
      n || De.set(e, n = /* @__PURE__ */ new Map());
      let i = n.get(r);
      i || n.set(r, i = /* @__PURE__ */ new Set()), i.has(A) || (i.add(A), A.deps.push(i), A.options.onTrack && A.options.onTrack({
        effect: A,
        target: e,
        type: t,
        key: r
      }));
    }
    function M(e, t, r, n, i, o) {
      let a = De.get(e);
      if (!a)
        return;
      let s = /* @__PURE__ */ new Set(), u = (l) => {
        l && l.forEach((d) => {
          (d !== A || d.allowRecurse) && s.add(d);
        });
      };
      if (t === "clear")
        a.forEach(u);
      else if (r === "length" && P(e))
        a.forEach((l, d) => {
          (d === "length" || d >= n) && u(l);
        });
      else
        switch (r !== void 0 && u(a.get(r)), t) {
          case "add":
            P(e) ? et(r) && u(a.get("length")) : (u(a.get($)), V(e) && u(a.get(ke)));
            break;
          case "delete":
            P(e) || (u(a.get($)), V(e) && u(a.get(ke)));
            break;
          case "set":
            V(e) && u(a.get($));
            break;
        }
      let c = (l) => {
        l.options.onTrigger && l.options.onTrigger({
          effect: l,
          target: e,
          key: r,
          type: t,
          newValue: n,
          oldValue: i,
          oldTarget: o
        }), l.options.scheduler ? l.options.scheduler(l) : l();
      };
      s.forEach(c);
    }
    var Yn = er("__proto__,__v_isRef,__isVue"), ur = new Set(Object.getOwnPropertyNames(Symbol).map((e) => Symbol[e]).filter(Qe)), Gn = he(), Jn = he(false, true), Xn = he(true), Zn = he(true, true), ae = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      let t = Array.prototype[e];
      ae[e] = function(...r) {
        let n = _(this);
        for (let o = 0, a = this.length; o < a; o++)
          w(n, "get", o + "");
        let i = t.apply(n, r);
        return i === -1 || i === false ? t.apply(n, r.map(_)) : i;
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      let t = Array.prototype[e];
      ae[e] = function(...r) {
        Un();
        let n = t.apply(this, r);
        return sr(), n;
      };
    });
    function he(e = false, t = false) {
      return function(n, i, o) {
        if (i === "__v_isReactive")
          return !e;
        if (i === "__v_isReadonly")
          return e;
        if (i === "__v_raw" && o === (e ? t ? ui : wr : t ? si : br).get(n))
          return n;
        let a = P(n);
        if (!e && a && de(ae, i))
          return Reflect.get(ae, i, o);
        let s = Reflect.get(n, i, o);
        return (Qe(i) ? ur.has(i) : Yn(i)) || (e || w(n, "get", i), t) ? s : Be(s) ? !a || !et(i) ? s.value : s : pe(s) ? e ? Er(s) : ot(s) : s;
      };
    }
    var Qn = cr(), ei = cr(true);
    function cr(e = false) {
      return function(r, n, i, o) {
        let a = r[n];
        if (!e && (i = _(i), a = _(a), !P(r) && Be(a) && !Be(i)))
          return a.value = i, true;
        let s = P(r) && et(n) ? Number(n) < r.length : de(r, n), u = Reflect.set(r, n, i, o);
        return r === _(o) && (s ? or(i, a) && M(r, "set", n, i, a) : M(r, "add", n, i)), u;
      };
    }
    function ti(e, t) {
      let r = de(e, t), n = e[t], i = Reflect.deleteProperty(e, t);
      return i && r && M(e, "delete", t, void 0, n), i;
    }
    function ri(e, t) {
      let r = Reflect.has(e, t);
      return (!Qe(t) || !ur.has(t)) && w(e, "has", t), r;
    }
    function ni(e) {
      return w(e, "iterate", P(e) ? "length" : $), Reflect.ownKeys(e);
    }
    var lr = {
      get: Gn,
      set: Qn,
      deleteProperty: ti,
      has: ri,
      ownKeys: ni
    }, fr = {
      get: Xn,
      set(e, t) {
        return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), true;
      },
      deleteProperty(e, t) {
        return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), true;
      }
    }, ji = tr({}, lr, {
      get: Jn,
      set: ei
    }), Fi = tr({}, fr, {
      get: Zn
    }), rt = (e) => pe(e) ? ot(e) : e, nt = (e) => pe(e) ? Er(e) : e, it = (e) => e, ge = (e) => Reflect.getPrototypeOf(e);
    function ve(e, t, r = false, n = false) {
      e = e.__v_raw;
      let i = _(e), o = _(t);
      t !== o && !r && w(i, "get", t), !r && w(i, "get", o);
      let {
        has: a
      } = ge(i), s = n ? it : r ? nt : rt;
      if (a.call(i, t))
        return s(e.get(t));
      if (a.call(i, o))
        return s(e.get(o));
      e !== i && e.get(t);
    }
    function ye(e, t = false) {
      let r = this.__v_raw, n = _(r), i = _(e);
      return e !== i && !t && w(n, "has", e), !t && w(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i);
    }
    function xe(e, t = false) {
      return e = e.__v_raw, !t && w(_(e), "iterate", $), Reflect.get(e, "size", e);
    }
    function dr(e) {
      e = _(e);
      let t = _(this);
      return ge(t).has.call(t, e) || (t.add(e), M(t, "add", e, e)), this;
    }
    function pr(e, t) {
      t = _(t);
      let r = _(this), {
        has: n,
        get: i
      } = ge(r), o = n.call(r, e);
      o ? mr(r, n, e) : (e = _(e), o = n.call(r, e));
      let a = i.call(r, e);
      return r.set(e, t), o ? or(t, a) && M(r, "set", e, t, a) : M(r, "add", e, t), this;
    }
    function _r(e) {
      let t = _(this), {
        has: r,
        get: n
      } = ge(t), i = r.call(t, e);
      i ? mr(t, r, e) : (e = _(e), i = r.call(t, e));
      let o = n ? n.call(t, e) : void 0, a = t.delete(e);
      return i && M(t, "delete", e, void 0, o), a;
    }
    function hr() {
      let e = _(this), t = e.size !== 0, r = V(e) ? new Map(e) : new Set(e), n = e.clear();
      return t && M(e, "clear", void 0, void 0, r), n;
    }
    function me(e, t) {
      return function(n, i) {
        let o = this, a = o.__v_raw, s = _(a), u = t ? it : e ? nt : rt;
        return !e && w(s, "iterate", $), a.forEach((c, l) => n.call(i, u(c), u(l), o));
      };
    }
    function re(e, t, r) {
      return function(...n) {
        let i = this.__v_raw, o = _(i), a = V(o), s = e === "entries" || e === Symbol.iterator && a, u = e === "keys" && a, c = i[e](...n), l = r ? it : t ? nt : rt;
        return !t && w(o, "iterate", u ? ke : $), {
          next() {
            let {
              value: d,
              done: h
            } = c.next();
            return h ? {
              value: d,
              done: h
            } : {
              value: s ? [l(d[0]), l(d[1])] : l(d),
              done: h
            };
          },
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function O(e) {
      return function(...t) {
        {
          let r = t[0] ? `on key "${t[0]}" ` : "";
          console.warn(`${ir(e)} operation ${r}failed: target is readonly.`, _(this));
        }
        return e === "delete" ? false : this;
      };
    }
    var gr = {
      get(e) {
        return ve(this, e);
      },
      get size() {
        return xe(this);
      },
      has: ye,
      add: dr,
      set: pr,
      delete: _r,
      clear: hr,
      forEach: me(false, false)
    }, vr = {
      get(e) {
        return ve(this, e, false, true);
      },
      get size() {
        return xe(this);
      },
      has: ye,
      add: dr,
      set: pr,
      delete: _r,
      clear: hr,
      forEach: me(false, true)
    }, yr = {
      get(e) {
        return ve(this, e, true);
      },
      get size() {
        return xe(this, true);
      },
      has(e) {
        return ye.call(this, e, true);
      },
      add: O("add"),
      set: O("set"),
      delete: O("delete"),
      clear: O("clear"),
      forEach: me(true, false)
    }, xr = {
      get(e) {
        return ve(this, e, true, true);
      },
      get size() {
        return xe(this, true);
      },
      has(e) {
        return ye.call(this, e, true);
      },
      add: O("add"),
      set: O("set"),
      delete: O("delete"),
      clear: O("clear"),
      forEach: me(true, true)
    }, ii = ["keys", "values", "entries", Symbol.iterator];
    ii.forEach((e) => {
      gr[e] = re(e, false, false), yr[e] = re(e, true, false), vr[e] = re(e, false, true), xr[e] = re(e, true, true);
    });
    function be(e, t) {
      let r = t ? e ? xr : vr : e ? yr : gr;
      return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(de(r, i) && i in n ? r : n, i, o);
    }
    var oi = {
      get: be(false, false)
    }, Ki = {
      get: be(false, true)
    }, ai = {
      get: be(true, false)
    }, Di = {
      get: be(true, true)
    };
    function mr(e, t, r) {
      let n = _(r);
      if (n !== r && t.call(e, n)) {
        let i = nr(e);
        console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
      }
    }
    var br = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap();
    function ci(e) {
      switch (e) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function li(e) {
      return e.__v_skip || !Object.isExtensible(e) ? 0 : ci(nr(e));
    }
    function ot(e) {
      return e && e.__v_isReadonly ? e : Ar(e, false, lr, oi, br);
    }
    function Er(e) {
      return Ar(e, true, fr, ai, wr);
    }
    function Ar(e, t, r, n, i) {
      if (!pe(e))
        return console.warn(`value cannot be made reactive: ${String(e)}`), e;
      if (e.__v_raw && !(t && e.__v_isReactive))
        return e;
      let o = i.get(e);
      if (o)
        return o;
      let a = li(e);
      if (a === 0)
        return e;
      let s = new Proxy(e, a === 2 ? n : r);
      return i.set(e, s), s;
    }
    function _(e) {
      return e && _(e.__v_raw) || e;
    }
    function Be(e) {
      return Boolean(e && e.__v_isRef === true);
    }
    E("nextTick", () => Dt);
    E("dispatch", (e) => U.bind(U, e));
    E("watch", (e, {
      evaluateLater: t,
      effect: r
    }) => (n, i) => {
      let o = t(n), a = true, s, u = r(() => o((c) => {
        JSON.stringify(c), a ? s = c : queueMicrotask(() => {
          i(c, s), s = c;
        }), a = false;
      }));
      e._x_effects.delete(u);
    });
    E("store", Mn);
    E("data", (e) => At(e));
    E("root", (e) => ue(e));
    E("refs", (e) => (e._x_refs_proxy || (e._x_refs_proxy = X(fi(e))), e._x_refs_proxy));
    function fi(e) {
      let t = [], r = e;
      for (; r; )
        r._x_refs && t.push(r._x_refs), r = r.parentNode;
      return t;
    }
    var Se = {};
    function Sr(e) {
      return Se[e] || (Se[e] = 0), ++Se[e];
    }
    function di(e, t) {
      return ce(e, (r) => {
        if (r._x_ids && r._x_ids[t])
          return true;
      });
    }
    function pi(e, t) {
      e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Sr(t));
    }
    E("id", (e) => (t, r = null) => {
      let n = di(e, t), i = n ? n._x_ids[t] : Sr(t);
      return r ? `${t}-${i}-${r}` : `${t}-${i}`;
    });
    E("el", (e) => e);
    Or("Focus", "focus", "focus");
    Or("Persist", "persist", "persist");
    function Or(e, t, r) {
      E(t, (n) => K(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, n));
    }
    g("modelable", (e, {
      expression: t
    }, {
      effect: r,
      evaluateLater: n
    }) => {
      let i = n(t), o = () => {
        let c;
        return i((l) => c = l), c;
      }, a = n(`${t} = __placeholder`), s = (c) => a(() => {
      }, {
        scope: {
          __placeholder: c
        }
      }), u = o();
      s(u), queueMicrotask(() => {
        if (!e._x_model)
          return;
        e._x_removeModelListeners.default();
        let c = e._x_model.get, l = e._x_model.set;
        r(() => s(c())), r(() => l(o()));
      });
    });
    g("teleport", (e, {
      expression: t
    }, {
      cleanup: r
    }) => {
      e.tagName.toLowerCase() !== "template" && K("x-teleport can only be used on a <template> tag", e);
      let n = document.querySelector(t);
      n || K(`Cannot find x-teleport element for selector: "${t}"`);
      let i = e.content.cloneNode(true).firstElementChild;
      e._x_teleport = i, i._x_teleportBack = e, e._x_forwardEvents && e._x_forwardEvents.forEach((o) => {
        i.addEventListener(o, (a) => {
          a.stopPropagation(), e.dispatchEvent(new a.constructor(a.type, a));
        });
      }), J(i, {}, e), y(() => {
        n.appendChild(i), C(i), i._x_ignore = true;
      }), r(() => i.remove());
    });
    var Cr = () => {
    };
    Cr.inline = (e, {
      modifiers: t
    }, {
      cleanup: r
    }) => {
      t.includes("self") ? e._x_ignoreSelf = true : e._x_ignore = true, r(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
    };
    g("ignore", Cr);
    g("effect", (e, {
      expression: t
    }, {
      effect: r
    }) => r(m(e, t)));
    function Mr(e, t, r, n) {
      let i = e, o = (u) => n(u), a = {}, s = (u, c) => (l) => c(u, l);
      if (r.includes("dot") && (t = _i(t)), r.includes("camel") && (t = hi(t)), r.includes("passive") && (a.passive = true), r.includes("capture") && (a.capture = true), r.includes("window") && (i = window), r.includes("document") && (i = document), r.includes("prevent") && (o = s(o, (u, c) => {
        c.preventDefault(), u(c);
      })), r.includes("stop") && (o = s(o, (u, c) => {
        c.stopPropagation(), u(c);
      })), r.includes("self") && (o = s(o, (u, c) => {
        c.target === e && u(c);
      })), (r.includes("away") || r.includes("outside")) && (i = document, o = s(o, (u, c) => {
        e.contains(c.target) || c.target.isConnected !== false && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== false && u(c));
      })), r.includes("once") && (o = s(o, (u, c) => {
        u(c), i.removeEventListener(t, o, a);
      })), o = s(o, (u, c) => {
        vi(t) && yi(c, r) || u(c);
      }), r.includes("debounce")) {
        let u = r[r.indexOf("debounce") + 1] || "invalid-wait", c = He(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
        o = Jt(o, c);
      }
      if (r.includes("throttle")) {
        let u = r[r.indexOf("throttle") + 1] || "invalid-wait", c = He(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
        o = Xt(o, c);
      }
      return i.addEventListener(t, o, a), () => {
        i.removeEventListener(t, o, a);
      };
    }
    function _i(e) {
      return e.replace(/-/g, ".");
    }
    function hi(e) {
      return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
    }
    function He(e) {
      return !Array.isArray(e) && !isNaN(e);
    }
    function gi(e) {
      return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    }
    function vi(e) {
      return ["keydown", "keyup"].includes(e);
    }
    function yi(e, t) {
      let r = t.filter((o) => !["window", "document", "prevent", "stop", "once"].includes(o));
      if (r.includes("debounce")) {
        let o = r.indexOf("debounce");
        r.splice(o, He((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
      }
      if (r.length === 0 || r.length === 1 && dt(e.key).includes(r[0]))
        return false;
      let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) => r.includes(o));
      return r = r.filter((o) => !i.includes(o)), !(i.length > 0 && i.filter((a) => ((a === "cmd" || a === "super") && (a = "meta"), e[`${a}Key`])).length === i.length && dt(e.key).includes(r[0]));
    }
    function dt(e) {
      if (!e)
        return [];
      e = gi(e);
      let t = {
        ctrl: "control",
        slash: "/",
        space: "-",
        spacebar: "-",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "="
      };
      return t[e] = e, Object.keys(t).map((r) => {
        if (t[r] === e)
          return r;
      }).filter((r) => r);
    }
    g("model", (e, {
      modifiers: t,
      expression: r
    }, {
      effect: n,
      cleanup: i
    }) => {
      let o = m(e, r), a = `${r} = rightSideOfExpression($event, ${r})`, s = m(e, a);
      var u = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
      let c = xi(e, t, r), l = Mr(e, u, t, (h) => {
        s(() => {
        }, {
          scope: {
            $event: h,
            rightSideOfExpression: c
          }
        });
      });
      e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = l, i(() => e._x_removeModelListeners.default());
      let d = m(e, `${r} = __placeholder`);
      e._x_model = {
        get() {
          let h;
          return o((S) => h = S), h;
        },
        set(h) {
          d(() => {
          }, {
            scope: {
              __placeholder: h
            }
          });
        }
      }, e._x_forceModelUpdate = () => {
        o((h) => {
          h === void 0 && r.match(/\./) && (h = ""), window.fromModel = true, y(() => Yt(e, "value", h)), delete window.fromModel;
        });
      }, n(() => {
        t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate();
      });
    });
    function xi(e, t, r) {
      return e.type === "radio" && y(() => {
        e.hasAttribute("name") || e.setAttribute("name", r);
      }), (n, i) => y(() => {
        if (n instanceof CustomEvent && n.detail !== void 0)
          return n.detail || n.target.value;
        if (e.type === "checkbox")
          if (Array.isArray(i)) {
            let o = t.includes("number") ? Oe(n.target.value) : n.target.value;
            return n.target.checked ? i.concat([o]) : i.filter((a) => !mi(a, o));
          } else
            return n.target.checked;
        else {
          if (e.tagName.toLowerCase() === "select" && e.multiple)
            return t.includes("number") ? Array.from(n.target.selectedOptions).map((o) => {
              let a = o.value || o.text;
              return Oe(a);
            }) : Array.from(n.target.selectedOptions).map((o) => o.value || o.text);
          {
            let o = n.target.value;
            return t.includes("number") ? Oe(o) : t.includes("trim") ? o.trim() : o;
          }
        }
      });
    }
    function Oe(e) {
      let t = e ? parseFloat(e) : null;
      return bi(t) ? t : e;
    }
    function mi(e, t) {
      return e == t;
    }
    function bi(e) {
      return !Array.isArray(e) && !isNaN(e);
    }
    g("cloak", (e) => queueMicrotask(() => y(() => e.removeAttribute(B("cloak")))));
    zt(() => `[${B("init")}]`);
    g("init", fe((e, {
      expression: t
    }, {
      evaluate: r
    }) => typeof t == "string" ? !!t.trim() && r(t, {}, false) : r(t, {}, false)));
    g("text", (e, {
      expression: t
    }, {
      effect: r,
      evaluateLater: n
    }) => {
      let i = n(t);
      r(() => {
        i((o) => {
          y(() => {
            e.textContent = o;
          });
        });
      });
    });
    g("html", (e, {
      expression: t
    }, {
      effect: r,
      evaluateLater: n
    }) => {
      let i = n(t);
      r(() => {
        i((o) => {
          y(() => {
            e.innerHTML = o, e._x_ignoreSelf = true, C(e), delete e._x_ignoreSelf;
          });
        });
      });
    });
    Ge(It(":", Lt(B("bind:"))));
    g("bind", (e, {
      value: t,
      modifiers: r,
      expression: n,
      original: i
    }, {
      effect: o
    }) => {
      if (!t)
        return wi(e, n, i, o);
      if (t === "key")
        return Ei(e, n);
      let a = m(e, n);
      o(() => a((s) => {
        s === void 0 && n.match(/\./) && (s = ""), y(() => Yt(e, t, s, r));
      }));
    });
    function wi(e, t, r, n) {
      let i = {};
      Rn(i);
      let o = m(e, t), a = [];
      for (; a.length; )
        a.pop()();
      o((s) => {
        let u = Object.entries(s).map(([l, d]) => ({
          name: l,
          value: d
        })), c = Zr(u);
        u = u.map((l) => c.find((d) => d.name === l.name) ? {
          name: `x-bind:${l.name}`,
          value: `"${l.value}"`
        } : l), Ye(e, u, r).map((l) => {
          a.push(l.runCleanups), l();
        });
      }, {
        scope: i
      });
    }
    function Ei(e, t) {
      e._x_keyExpression = t;
    }
    qt(() => `[${B("data")}]`);
    g("data", fe((e, {
      expression: t
    }, {
      cleanup: r
    }) => {
      t = t === "" ? "{}" : t;
      let n = {}, i = Pe(n, e).cleanup, o = {};
      $n(o, n);
      let a = j(e, t, {
        scope: o
      });
      a === void 0 && (a = {});
      let s = Pe(a, e).cleanup, u = k(a);
      St(u);
      let c = J(e, u);
      u.init && j(e, u.init), r(() => {
        c(), i(), s(), u.destroy && j(e, u.destroy), c();
      });
    }));
    g("show", (e, {
      modifiers: t,
      expression: r
    }, {
      effect: n
    }) => {
      let i = m(e, r);
      e._x_doHide || (e._x_doHide = () => {
        y(() => e.style.display = "none");
      }), e._x_doShow || (e._x_doShow = () => {
        y(() => {
          e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display");
        });
      });
      let o = () => {
        e._x_doHide(), e._x_isShown = false;
      }, a = () => {
        e._x_doShow(), e._x_isShown = true;
      }, s = () => setTimeout(a), u = je((d) => d ? a() : o(), (d) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, d, a, o) : d ? s() : o();
      }), c, l = true;
      n(() => i((d) => {
        !l && d === c || (t.includes("immediate") && (d ? s() : o()), u(d), c = d, l = false);
      }));
    });
    g("for", (e, {
      expression: t
    }, {
      effect: r,
      cleanup: n
    }) => {
      let i = Si(t), o = m(e, i.items), a = m(e, e._x_keyExpression || "index");
      e._x_prevKeys = [], e._x_lookup = {}, r(() => Ai(e, i, o, a)), n(() => {
        Object.values(e._x_lookup).forEach((s) => s.remove()), delete e._x_prevKeys, delete e._x_lookup;
      });
    });
    function Ai(e, t, r, n) {
      let i = (a) => typeof a == "object" && !Array.isArray(a), o = e;
      r((a) => {
        Oi(a) && a >= 0 && (a = Array.from(Array(a).keys(), (f) => f + 1)), a === void 0 && (a = []);
        let s = e._x_lookup, u = e._x_prevKeys, c = [], l = [];
        if (i(a))
          a = Object.entries(a).map(([f, p]) => {
            let v = pt(t, p, f, a);
            n((x) => l.push(x), {
              scope: {
                index: f,
                ...v
              }
            }), c.push(v);
          });
        else
          for (let f = 0; f < a.length; f++) {
            let p = pt(t, a[f], f, a);
            n((v) => l.push(v), {
              scope: {
                index: f,
                ...p
              }
            }), c.push(p);
          }
        let d = [], h = [], S = [], L = [];
        for (let f = 0; f < u.length; f++) {
          let p = u[f];
          l.indexOf(p) === -1 && S.push(p);
        }
        u = u.filter((f) => !S.includes(f));
        let Q = "template";
        for (let f = 0; f < l.length; f++) {
          let p = l[f], v = u.indexOf(p);
          if (v === -1)
            u.splice(f, 0, p), d.push([Q, f]);
          else if (v !== f) {
            let x = u.splice(f, 1)[0], b = u.splice(v - 1, 1)[0];
            u.splice(f, 0, b), u.splice(v, 0, x), h.push([x, b]);
          } else
            L.push(p);
          Q = p;
        }
        for (let f = 0; f < S.length; f++) {
          let p = S[f];
          s[p]._x_effects && s[p]._x_effects.forEach(_t), s[p].remove(), s[p] = null, delete s[p];
        }
        for (let f = 0; f < h.length; f++) {
          let [p, v] = h[f], x = s[p], b = s[v], N = document.createElement("div");
          y(() => {
            b.after(N), x.after(b), b._x_currentIfEl && b.after(b._x_currentIfEl), N.before(x), x._x_currentIfEl && x.after(x._x_currentIfEl), N.remove();
          }), ut(b, c[l.indexOf(v)]);
        }
        for (let f = 0; f < d.length; f++) {
          let [p, v] = d[f], x = p === "template" ? o : s[p];
          x._x_currentIfEl && (x = x._x_currentIfEl);
          let b = c[v], N = l[v], ee = document.importNode(o.content, true).firstElementChild;
          J(ee, k(b), o), y(() => {
            x.after(ee), C(ee);
          }), typeof N == "object" && K("x-for key cannot be an object, it must be a string or an integer", o), s[N] = ee;
        }
        for (let f = 0; f < L.length; f++)
          ut(s[L[f]], c[l.indexOf(L[f])]);
        o._x_prevKeys = l;
      });
    }
    function Si(e) {
      let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, r = /^\s*\(|\)\s*$/g, n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, i = e.match(n);
      if (!i)
        return;
      let o = {};
      o.items = i[2].trim();
      let a = i[1].replace(r, "").trim(), s = a.match(t);
      return s ? (o.item = a.replace(t, "").trim(), o.index = s[1].trim(), s[2] && (o.collection = s[2].trim())) : o.item = a, o;
    }
    function pt(e, t, r, n) {
      let i = {};
      return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map((a) => a.trim()).forEach((a, s) => {
        i[a] = t[s];
      }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map((a) => a.trim()).forEach((a) => {
        i[a] = t[a];
      }) : i[e.item] = t, e.index && (i[e.index] = r), e.collection && (i[e.collection] = n), i;
    }
    function Oi(e) {
      return !Array.isArray(e) && !isNaN(e);
    }
    function Tr() {
    }
    Tr.inline = (e, {
      expression: t
    }, {
      cleanup: r
    }) => {
      let n = ue(e);
      n._x_refs || (n._x_refs = {}), n._x_refs[t] = e, r(() => delete n._x_refs[t]);
    };
    g("ref", Tr);
    g("if", (e, {
      expression: t
    }, {
      effect: r,
      cleanup: n
    }) => {
      let i = m(e, t), o = () => {
        if (e._x_currentIfEl)
          return e._x_currentIfEl;
        let s = e.content.cloneNode(true).firstElementChild;
        return J(s, {}, e), y(() => {
          e.after(s), C(s);
        }), e._x_currentIfEl = s, e._x_undoIf = () => {
          I(s, (u) => {
            u._x_effects && u._x_effects.forEach(_t);
          }), s.remove(), delete e._x_currentIfEl;
        }, s;
      }, a = () => {
        !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
      };
      r(() => i((s) => {
        s ? o() : a();
      })), n(() => e._x_undoIf && e._x_undoIf());
    });
    g("id", (e, {
      expression: t
    }, {
      evaluate: r
    }) => {
      r(t).forEach((i) => pi(e, i));
    });
    Ge(It("@", Lt(B("on:"))));
    g("on", fe((e, {
      value: t,
      modifiers: r,
      expression: n
    }, {
      cleanup: i
    }) => {
      let o = n ? m(e, n) : () => {
      };
      e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
      let a = Mr(e, t, r, (s) => {
        o(() => {
        }, {
          scope: {
            $event: s
          },
          params: [s]
        });
      });
      i(() => a());
    }));
    we("Collapse", "collapse", "collapse");
    we("Intersect", "intersect", "intersect");
    we("Focus", "trap", "focus");
    we("Mask", "mask", "mask");
    function we(e, t, r) {
      g(t, (n) => K(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, n));
    }
    Z.setEvaluator(Tt);
    Z.setReactivityEngine({
      reactive: ot,
      effect: Hn,
      release: qn,
      raw: _
    });
    var Ci = Z, at = Ci;
    var Rr = {
      api_key: "c5e765ed4c29c7e9aec5f19ad8c1667b",
      app_id: "04ALMXMGLU",
      index: "link4"
    };
    (function() {
      let e = Rr;
      at.data("searchController", () => Ri(e)), at.start();
    })();
    function Ri(e) {
      return {
        query: "",
        result: {
          hits: []
        },
        init: function() {
          return this.$nextTick(() => {
            this.$watch("query", () => {
              this.search();
            });
          });
        },
        search: function() {
          var t = {
            requests: [{
              indexName: e.index,
              facets: ["genre"],
              params: `query=${encodeURIComponent(this.query)}`
            }]
          };
          let n = `${`https://${e.app_id}-dsn.algolia.net`}/1/indexes/*/queries`;
          fetch(n, {
            method: "POST",
            headers: {
              "X-Algolia-Application-Id": e.app_id,
              "X-Algolia-API-Key": e.api_key
            },
            body: JSON.stringify(t)
          }).then((i) => i.json()).then((i) => {
            if (i.results) {
              this.result = i.results[0];
              console.log(this.result);
              let o = this.result.facets.genre;
              this.result.genre = o ? Object.keys(o).map((a) => ({
                k: a,
                v: o[a]
              })) : [];
            }
          });
        }
      };
    }
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKCgpID0+IHtcbiAgICB2YXIgQ2UgPSAhMSxcbiAgICAgICAgTWUgPSAhMSxcbiAgICAgICAgUiA9IFtdO1xuXG4gICAgZnVuY3Rpb24gUHIoZSkge1xuICAgICAgICAkcihlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICRyKGUpIHtcbiAgICAgICAgUi5pbmNsdWRlcyhlKSB8fCBSLnB1c2goZSksIElyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdChlKSB7XG4gICAgICAgIGxldCB0ID0gUi5pbmRleE9mKGUpO1xuICAgICAgICB0ICE9PSAtMSAmJiBSLnNwbGljZSh0LCAxKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIElyKCkge1xuICAgICAgICAhTWUgJiYgIUNlICYmIChDZSA9ICEwLCBxdWV1ZU1pY3JvdGFzayhMcikpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTHIoKSB7XG4gICAgICAgIENlID0gITEsIE1lID0gITA7XG4gICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgUi5sZW5ndGg7IGUrKykgUltlXSgpO1xuICAgICAgICBSLmxlbmd0aCA9IDAsIE1lID0gITFcbiAgICB9XG4gICAgdmFyIGssIEcsIHNlLCBodCwgVGUgPSAhMDtcblxuICAgIGZ1bmN0aW9uIE5yKGUpIHtcbiAgICAgICAgVGUgPSAhMSwgZSgpLCBUZSA9ICEwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24ganIoZSkge1xuICAgICAgICBrID0gZS5yZWFjdGl2ZSwgc2UgPSBlLnJlbGVhc2UsIEcgPSB0ID0+IGUuZWZmZWN0KHQsIHtcbiAgICAgICAgICAgIHNjaGVkdWxlcjogciA9PiB7XG4gICAgICAgICAgICAgICAgVGUgPyBQcihyKSA6IHIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgaHQgPSBlLnJhd1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0KGUpIHtcbiAgICAgICAgRyA9IGVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBGcihlKSB7XG4gICAgICAgIGxldCB0ID0gKCkgPT4ge307XG4gICAgICAgIHJldHVybiBbbiA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IEcobik7XG4gICAgICAgICAgICByZXR1cm4gZS5feF9lZmZlY3RzIHx8IChlLl94X2VmZmVjdHMgPSBuZXcgU2V0LCBlLl94X3J1bkVmZmVjdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5feF9lZmZlY3RzLmZvckVhY2gobyA9PiBvKCkpXG4gICAgICAgICAgICB9KSwgZS5feF9lZmZlY3RzLmFkZChpKSwgdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpICE9PSB2b2lkIDAgJiYgKGUuX3hfZWZmZWN0cy5kZWxldGUoaSksIHNlKGkpKVxuICAgICAgICAgICAgfSwgaVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0KClcbiAgICAgICAgfV1cbiAgICB9XG4gICAgdmFyIGd0ID0gW10sXG4gICAgICAgIHZ0ID0gW10sXG4gICAgICAgIHl0ID0gW107XG5cbiAgICBmdW5jdGlvbiBLcihlKSB7XG4gICAgICAgIHl0LnB1c2goZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB4dChlLCB0KSB7XG4gICAgICAgIHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IChlLl94X2NsZWFudXBzIHx8IChlLl94X2NsZWFudXBzID0gW10pLCBlLl94X2NsZWFudXBzLnB1c2godCkpIDogKHQgPSBlLCB2dC5wdXNoKHQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERyKGUpIHtcbiAgICAgICAgZ3QucHVzaChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG10KGUsIHQsIHIpIHtcbiAgICAgICAgZS5feF9hdHRyaWJ1dGVDbGVhbnVwcyB8fCAoZS5feF9hdHRyaWJ1dGVDbGVhbnVwcyA9IHt9KSwgZS5feF9hdHRyaWJ1dGVDbGVhbnVwc1t0XSB8fCAoZS5feF9hdHRyaWJ1dGVDbGVhbnVwc1t0XSA9IFtdKSwgZS5feF9hdHRyaWJ1dGVDbGVhbnVwc1t0XS5wdXNoKHIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnQoZSwgdCkge1xuICAgICAgICAhZS5feF9hdHRyaWJ1dGVDbGVhbnVwcyB8fCBPYmplY3QuZW50cmllcyhlLl94X2F0dHJpYnV0ZUNsZWFudXBzKS5mb3JFYWNoKChbciwgbl0pID0+IHtcbiAgICAgICAgICAgICh0ID09PSB2b2lkIDAgfHwgdC5pbmNsdWRlcyhyKSkgJiYgKG4uZm9yRWFjaChpID0+IGkoKSksIGRlbGV0ZSBlLl94X2F0dHJpYnV0ZUNsZWFudXBzW3JdKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB2YXIgcWUgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihVZSksXG4gICAgICAgIHplID0gITE7XG5cbiAgICBmdW5jdGlvbiB3dCgpIHtcbiAgICAgICAgcWUub2JzZXJ2ZShkb2N1bWVudCwge1xuICAgICAgICAgICAgc3VidHJlZTogITAsXG4gICAgICAgICAgICBjaGlsZExpc3Q6ICEwLFxuICAgICAgICAgICAgYXR0cmlidXRlczogITAsXG4gICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogITBcbiAgICAgICAgfSksIHplID0gITBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBFdCgpIHtcbiAgICAgICAga3IoKSwgcWUuZGlzY29ubmVjdCgpLCB6ZSA9ICExXG4gICAgfVxuICAgIHZhciBXID0gW10sXG4gICAgICAgIEVlID0gITE7XG5cbiAgICBmdW5jdGlvbiBrcigpIHtcbiAgICAgICAgVyA9IFcuY29uY2F0KHFlLnRha2VSZWNvcmRzKCkpLCBXLmxlbmd0aCAmJiAhRWUgJiYgKEVlID0gITAsIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgIEJyKCksIEVlID0gITFcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQnIoKSB7XG4gICAgICAgIFVlKFcpLCBXLmxlbmd0aCA9IDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB5KGUpIHtcbiAgICAgICAgaWYgKCF6ZSkgcmV0dXJuIGUoKTtcbiAgICAgICAgRXQoKTtcbiAgICAgICAgbGV0IHQgPSBlKCk7XG4gICAgICAgIHJldHVybiB3dCgpLCB0XG4gICAgfVxuICAgIHZhciBXZSA9ICExLFxuICAgICAgICBpZSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gSHIoKSB7XG4gICAgICAgIFdlID0gITBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxcigpIHtcbiAgICAgICAgV2UgPSAhMSwgVWUoaWUpLCBpZSA9IFtdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gVWUoZSkge1xuICAgICAgICBpZiAoV2UpIHtcbiAgICAgICAgICAgIGllID0gaWUuY29uY2F0KGUpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHQgPSBbXSxcbiAgICAgICAgICAgIHIgPSBbXSxcbiAgICAgICAgICAgIG4gPSBuZXcgTWFwLFxuICAgICAgICAgICAgaSA9IG5ldyBNYXA7XG4gICAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKylcbiAgICAgICAgICAgIGlmICghZVtvXS50YXJnZXQuX3hfaWdub3JlTXV0YXRpb25PYnNlcnZlciAmJiAoZVtvXS50eXBlID09PSBcImNoaWxkTGlzdFwiICYmIChlW29dLmFkZGVkTm9kZXMuZm9yRWFjaChhID0+IGEubm9kZVR5cGUgPT09IDEgJiYgdC5wdXNoKGEpKSwgZVtvXS5yZW1vdmVkTm9kZXMuZm9yRWFjaChhID0+IGEubm9kZVR5cGUgPT09IDEgJiYgci5wdXNoKGEpKSksIGVbb10udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBlW29dLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgcyA9IGVbb10uYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdSA9IGVbb10ub2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhhcyhhKSB8fCBuLnNldChhLCBbXSksIG4uZ2V0KGEpLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGEuZ2V0QXR0cmlidXRlKHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5oYXMoYSkgfHwgaS5zZXQoYSwgW10pLCBpLmdldChhKS5wdXNoKHMpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYS5oYXNBdHRyaWJ1dGUocykgJiYgdSA9PT0gbnVsbCA/IGMoKSA6IGEuaGFzQXR0cmlidXRlKHMpID8gKGwoKSwgYygpKSA6IGwoKVxuICAgICAgICAgICAgfSBpLmZvckVhY2goKG8sIGEpID0+IHtcbiAgICAgICAgICAgIGJ0KGEsIG8pXG4gICAgICAgIH0pLCBuLmZvckVhY2goKG8sIGEpID0+IHtcbiAgICAgICAgICAgIGd0LmZvckVhY2gocyA9PiBzKGEsIG8pKVxuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgbyBvZiByKVxuICAgICAgICAgICAgaWYgKCF0LmluY2x1ZGVzKG8pICYmICh2dC5mb3JFYWNoKGEgPT4gYShvKSksIG8uX3hfY2xlYW51cHMpKVxuICAgICAgICAgICAgICAgIGZvciAoOyBvLl94X2NsZWFudXBzLmxlbmd0aDspIG8uX3hfY2xlYW51cHMucG9wKCkoKTtcbiAgICAgICAgdC5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgby5feF9pZ25vcmVTZWxmID0gITAsIG8uX3hfaWdub3JlID0gITBcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IG8gb2YgdCkgci5pbmNsdWRlcyhvKSB8fCAhby5pc0Nvbm5lY3RlZCB8fCAoZGVsZXRlIG8uX3hfaWdub3JlU2VsZiwgZGVsZXRlIG8uX3hfaWdub3JlLCB5dC5mb3JFYWNoKGEgPT4gYShvKSksIG8uX3hfaWdub3JlID0gITAsIG8uX3hfaWdub3JlU2VsZiA9ICEwKTtcbiAgICAgICAgdC5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgZGVsZXRlIG8uX3hfaWdub3JlU2VsZiwgZGVsZXRlIG8uX3hfaWdub3JlXG4gICAgICAgIH0pLCB0ID0gbnVsbCwgciA9IG51bGwsIG4gPSBudWxsLCBpID0gbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEF0KGUpIHtcbiAgICAgICAgcmV0dXJuIFgoRihlKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBKKGUsIHQsIHIpIHtcbiAgICAgICAgcmV0dXJuIGUuX3hfZGF0YVN0YWNrID0gW3QsIC4uLkYociB8fCBlKV0sICgpID0+IHtcbiAgICAgICAgICAgIGUuX3hfZGF0YVN0YWNrID0gZS5feF9kYXRhU3RhY2suZmlsdGVyKG4gPT4gbiAhPT0gdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHV0KGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSBlLl94X2RhdGFTdGFja1swXTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModCkuZm9yRWFjaCgoW24sIGldKSA9PiB7XG4gICAgICAgICAgICByW25dID0gaVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEYoZSkge1xuICAgICAgICByZXR1cm4gZS5feF9kYXRhU3RhY2sgPyBlLl94X2RhdGFTdGFjayA6IHR5cGVvZiBTaGFkb3dSb290ID09IFwiZnVuY3Rpb25cIiAmJiBlIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IEYoZS5ob3N0KSA6IGUucGFyZW50Tm9kZSA/IEYoZS5wYXJlbnROb2RlKSA6IFtdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gWChlKSB7XG4gICAgICAgIGxldCB0ID0gbmV3IFByb3h5KHt9LCB7XG4gICAgICAgICAgICBvd25LZXlzOiAoKSA9PiBBcnJheS5mcm9tKG5ldyBTZXQoZS5mbGF0TWFwKHIgPT4gT2JqZWN0LmtleXMocikpKSksXG4gICAgICAgICAgICBoYXM6IChyLCBuKSA9PiBlLnNvbWUoaSA9PiBpLmhhc093blByb3BlcnR5KG4pKSxcbiAgICAgICAgICAgIGdldDogKHIsIG4pID0+IChlLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkuaGFzT3duUHJvcGVydHkobikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGksIG4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoby5nZXQgJiYgby5nZXQuX3hfYWxyZWFkeUJvdW5kIHx8IG8uc2V0ICYmIG8uc2V0Ll94X2FscmVhZHlCb3VuZCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKG8uZ2V0IHx8IG8uc2V0KSAmJiBvLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhID0gby5nZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG8uc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEgJiYgYS5iaW5kKHQpLCBzID0gcyAmJiBzLmJpbmQodCksIGEgJiYgKGEuX3hfYWxyZWFkeUJvdW5kID0gITApLCBzICYmIChzLl94X2FscmVhZHlCb3VuZCA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGksIG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhMVxuICAgICAgICAgICAgfSkgfHwge30pW25dLFxuICAgICAgICAgICAgc2V0OiAociwgbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvID0gZS5maW5kKGEgPT4gYS5oYXNPd25Qcm9wZXJ0eShuKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gPyBvW25dID0gaSA6IGVbZS5sZW5ndGggLSAxXVtuXSA9IGksICEwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFN0KGUpIHtcbiAgICAgICAgbGV0IHQgPSBuID0+IHR5cGVvZiBuID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkobikgJiYgbiAhPT0gbnVsbCxcbiAgICAgICAgICAgIHIgPSAobiwgaSA9IFwiXCIpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSkuZm9yRWFjaCgoW28sIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGEsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHNcbiAgICAgICAgICAgICAgICB9XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocyA9PT0gITEgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGxldCB1ID0gaSA9PT0gXCJcIiA/IG8gOiBgJHtpfS4ke299YDtcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGEgPT0gXCJvYmplY3RcIiAmJiBhICE9PSBudWxsICYmIGEuX3hfaW50ZXJjZXB0b3IgPyBuW29dID0gYS5pbml0aWFsaXplKGUsIHUsIG8pIDogdChhKSAmJiBhICE9PSBuICYmICEoYSBpbnN0YW5jZW9mIEVsZW1lbnQpICYmIHIoYSwgdSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIoZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPdChlLCB0ID0gKCkgPT4ge30pIHtcbiAgICAgICAgbGV0IHIgPSB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IHZvaWQgMCxcbiAgICAgICAgICAgIF94X2ludGVyY2VwdG9yOiAhMCxcbiAgICAgICAgICAgIGluaXRpYWxpemUobiwgaSwgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlKHRoaXMuaW5pdGlhbFZhbHVlLCAoKSA9PiB6cihuLCBpKSwgYSA9PiBSZShuLCBpLCBhKSwgaSwgbylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHQociksIG4gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuID09IFwib2JqZWN0XCIgJiYgbiAhPT0gbnVsbCAmJiBuLl94X2ludGVyY2VwdG9yKSB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSByLmluaXRpYWxpemUuYmluZChyKTtcbiAgICAgICAgICAgICAgICByLmluaXRpYWxpemUgPSAobywgYSwgcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdSA9IG4uaW5pdGlhbGl6ZShvLCBhLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIuaW5pdGlhbFZhbHVlID0gdSwgaShvLCBhLCBzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSByLmluaXRpYWxWYWx1ZSA9IG47XG4gICAgICAgICAgICByZXR1cm4gclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24genIoZSwgdCkge1xuICAgICAgICByZXR1cm4gdC5zcGxpdChcIi5cIikucmVkdWNlKChyLCBuKSA9PiByW25dLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFJlKGUsIHQsIHIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB0LnNwbGl0KFwiLlwiKSksIHQubGVuZ3RoID09PSAxKSBlW3RbMF1dID0gcjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodC5sZW5ndGggPT09IDApIHRocm93IGVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIGVbdFswXV0gfHwgKGVbdFswXV0gPSB7fSksIFJlKGVbdFswXV0sIHQuc2xpY2UoMSksIHIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIEN0ID0ge307XG5cbiAgICBmdW5jdGlvbiBFKGUsIHQpIHtcbiAgICAgICAgQ3RbZV0gPSB0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUGUoZSwgdCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoQ3QpLmZvckVhY2goKFtyLCBuXSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGAkJHtyfWAsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbaSwgb10gPSAkdCh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmNlcHRvcjogT3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pXG4gICAgICAgICAgICAgICAgICAgIH0sIHh0KHQsIG8pLCBuKHQsIGkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIG9iajogZSxcbiAgICAgICAgICAgIGNsZWFudXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0ID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3IoZSwgdCwgciwgLi4ubikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHIoLi4ubilcbiAgICAgICAgfSBjYXRjaCAoaSkge1xuICAgICAgICAgICAgWShpLCBlLCB0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gWShlLCB0LCByID0gdm9pZCAwKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZSwge1xuICAgICAgICAgICAgZWw6IHQsXG4gICAgICAgICAgICBleHByZXNzaW9uOiByXG4gICAgICAgIH0pLCBjb25zb2xlLndhcm4oYEFscGluZSBFeHByZXNzaW9uIEVycm9yOiAke2UubWVzc2FnZX1cblxuJHtyPydFeHByZXNzaW9uOiBcIicrcitgXCJcblxuYDpcIlwifWAsIHQpLCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IGVcbiAgICAgICAgfSwgMClcbiAgICB9XG4gICAgdmFyIG5lID0gITA7XG5cbiAgICBmdW5jdGlvbiBVcihlKSB7XG4gICAgICAgIGxldCB0ID0gbmU7XG4gICAgICAgIG5lID0gITEsIGUoKSwgbmUgPSB0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaihlLCB0LCByID0ge30pIHtcbiAgICAgICAgbGV0IG47XG4gICAgICAgIHJldHVybiBtKGUsIHQpKGkgPT4gbiA9IGksIHIpLCBuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbSguLi5lKSB7XG4gICAgICAgIHJldHVybiBNdCguLi5lKVxuICAgIH1cbiAgICB2YXIgTXQgPSBUdDtcblxuICAgIGZ1bmN0aW9uIFZyKGUpIHtcbiAgICAgICAgTXQgPSBlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gVHQoZSwgdCkge1xuICAgICAgICBsZXQgciA9IHt9LFxuICAgICAgICAgICAgbiA9IFBlKHIsIGUpLmNsZWFudXA7XG4gICAgICAgIG10KGUsIFwiZXZhbHVhdG9yXCIsIG4pO1xuICAgICAgICBsZXQgaSA9IFtyLCAuLi5GKGUpXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFlyKGksIHQpO1xuICAgICAgICBsZXQgbyA9IEpyKGksIHQsIGUpO1xuICAgICAgICByZXR1cm4gV3IuYmluZChudWxsLCBlLCB0LCBvKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFlyKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIChyID0gKCkgPT4ge30sIHtcbiAgICAgICAgICAgIHNjb3BlOiBuID0ge30sXG4gICAgICAgICAgICBwYXJhbXM6IGkgPSBbXVxuICAgICAgICB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIGxldCBvID0gdC5hcHBseShYKFtuLCAuLi5lXSksIGkpO1xuICAgICAgICAgICAgb2UociwgbylcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgQWUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIEdyKGUsIHQpIHtcbiAgICAgICAgaWYgKEFlW2VdKSByZXR1cm4gQWVbZV07XG4gICAgICAgIGxldCByID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCkge30pLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgbiA9IC9eW1xcblxcc10qaWYuKlxcKC4qXFwpLy50ZXN0KGUpIHx8IC9eKGxldHxjb25zdClcXHMvLnRlc3QoZSkgPyBgKCgpID0+IHsgJHtlfSB9KSgpYCA6IGUsXG4gICAgICAgICAgICBvID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHIoW1wiX19zZWxmXCIsIFwic2NvcGVcIl0sIGB3aXRoIChzY29wZSkgeyBfX3NlbGYucmVzdWx0ID0gJHtufSB9OyBfX3NlbGYuZmluaXNoZWQgPSB0cnVlOyByZXR1cm4gX19zZWxmLnJlc3VsdDtgKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFkoYSwgdCwgZSksIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIEFlW2VdID0gbywgb1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEpyKGUsIHQsIHIpIHtcbiAgICAgICAgbGV0IG4gPSBHcih0LCByKTtcbiAgICAgICAgcmV0dXJuIChpID0gKCkgPT4ge30sIHtcbiAgICAgICAgICAgIHNjb3BlOiBvID0ge30sXG4gICAgICAgICAgICBwYXJhbXM6IGEgPSBbXVxuICAgICAgICB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG4ucmVzdWx0ID0gdm9pZCAwLCBuLmZpbmlzaGVkID0gITE7XG4gICAgICAgICAgICBsZXQgcyA9IFgoW28sIC4uLmVdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbiA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdSA9IG4obiwgcykuY2F0Y2goYyA9PiBZKGMsIHIsIHQpKTtcbiAgICAgICAgICAgICAgICBuLmZpbmlzaGVkID8gKG9lKGksIG4ucmVzdWx0LCBzLCBhLCByKSwgbi5yZXN1bHQgPSB2b2lkIDApIDogdS50aGVuKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvZShpLCBjLCBzLCBhLCByKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGMgPT4gWShjLCByLCB0KSkuZmluYWxseSgoKSA9PiBuLnJlc3VsdCA9IHZvaWQgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9lKGUsIHQsIHIsIG4sIGkpIHtcbiAgICAgICAgaWYgKG5lICYmIHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IG8gPSB0LmFwcGx5KHIsIG4pO1xuICAgICAgICAgICAgbyBpbnN0YW5jZW9mIFByb21pc2UgPyBvLnRoZW4oYSA9PiBvZShlLCBhLCByLCBuKSkuY2F0Y2goYSA9PiBZKGEsIGksIHQpKSA6IGUobylcbiAgICAgICAgfSBlbHNlIGUodClcbiAgICB9XG4gICAgdmFyIFZlID0gXCJ4LVwiO1xuXG4gICAgZnVuY3Rpb24gQihlID0gXCJcIikge1xuICAgICAgICByZXR1cm4gVmUgKyBlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gWHIoZSkge1xuICAgICAgICBWZSA9IGVcbiAgICB9XG4gICAgdmFyIFJ0ID0ge307XG5cbiAgICBmdW5jdGlvbiBnKGUsIHQpIHtcbiAgICAgICAgUnRbZV0gPSB0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gWWUoZSwgdCwgcikge1xuICAgICAgICBsZXQgbiA9IHt9O1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0KS5tYXAoTnQoKG8sIGEpID0+IG5bb10gPSBhKSkuZmlsdGVyKEZ0KS5tYXAodG4obiwgcikpLnNvcnQocm4pLm1hcChvID0+IGVuKGUsIG8pKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFpyKGUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZSkubWFwKE50KCkpLmZpbHRlcih0ID0+ICFGdCh0KSlcbiAgICB9XG4gICAgdmFyICRlID0gITEsXG4gICAgICAgIHogPSBuZXcgTWFwLFxuICAgICAgICBQdCA9IFN5bWJvbCgpO1xuXG4gICAgZnVuY3Rpb24gUXIoZSkge1xuICAgICAgICAkZSA9ICEwO1xuICAgICAgICBsZXQgdCA9IFN5bWJvbCgpO1xuICAgICAgICBQdCA9IHQsIHouc2V0KHQsIFtdKTtcbiAgICAgICAgbGV0IHIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yICg7IHouZ2V0KHQpLmxlbmd0aDspIHouZ2V0KHQpLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgICAgICB6LmRlbGV0ZSh0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGUgPSAhMSwgcigpXG4gICAgICAgICAgICB9O1xuICAgICAgICBlKHIpLCBuKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkdChlKSB7XG4gICAgICAgIGxldCB0ID0gW10sXG4gICAgICAgICAgICByID0gcyA9PiB0LnB1c2gocyksXG4gICAgICAgICAgICBbbiwgaV0gPSBGcihlKTtcbiAgICAgICAgcmV0dXJuIHQucHVzaChpKSwgW3tcbiAgICAgICAgICAgIEFscGluZTogWixcbiAgICAgICAgICAgIGVmZmVjdDogbixcbiAgICAgICAgICAgIGNsZWFudXA6IHIsXG4gICAgICAgICAgICBldmFsdWF0ZUxhdGVyOiBtLmJpbmQobSwgZSksXG4gICAgICAgICAgICBldmFsdWF0ZTogai5iaW5kKGosIGUpXG4gICAgICAgIH0sICgpID0+IHQuZm9yRWFjaChzID0+IHMoKSldXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW4oZSwgdCkge1xuICAgICAgICBsZXQgciA9ICgpID0+IHt9LFxuICAgICAgICAgICAgbiA9IFJ0W3QudHlwZV0gfHwgcixcbiAgICAgICAgICAgIFtpLCBvXSA9ICR0KGUpO1xuICAgICAgICBtdChlLCB0Lm9yaWdpbmFsLCBvKTtcbiAgICAgICAgbGV0IGEgPSAoKSA9PiB7XG4gICAgICAgICAgICBlLl94X2lnbm9yZSB8fCBlLl94X2lnbm9yZVNlbGYgfHwgKG4uaW5saW5lICYmIG4uaW5saW5lKGUsIHQsIGkpLCBuID0gbi5iaW5kKG4sIGUsIHQsIGkpLCAkZSA/IHouZ2V0KFB0KS5wdXNoKG4pIDogbigpKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYS5ydW5DbGVhbnVwcyA9IG8sIGFcbiAgICB9XG4gICAgdmFyIEl0ID0gKGUsIHQpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiByLFxuICAgICAgICAgICAgdmFsdWU6IG5cbiAgICAgICAgfSkgPT4gKHIuc3RhcnRzV2l0aChlKSAmJiAociA9IHIucmVwbGFjZShlLCB0KSksIHtcbiAgICAgICAgICAgIG5hbWU6IHIsXG4gICAgICAgICAgICB2YWx1ZTogblxuICAgICAgICB9KSxcbiAgICAgICAgTHQgPSBlID0+IGU7XG5cbiAgICBmdW5jdGlvbiBOdChlID0gKCkgPT4ge30pIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBuYW1lOiB0LFxuICAgICAgICAgICAgdmFsdWU6IHJcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpXG4gICAgICAgICAgICB9ID0ganQucmVkdWNlKChvLCBhKSA9PiBhKG8pLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogdCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbiAhPT0gdCAmJiBlKG4sIHQpLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBqdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gR2UoZSkge1xuICAgICAgICBqdC5wdXNoKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRnQoe1xuICAgICAgICBuYW1lOiBlXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gS3QoKS50ZXN0KGUpXG4gICAgfVxuICAgIHZhciBLdCA9ICgpID0+IG5ldyBSZWdFeHAoYF4ke1ZlfShbXjpeLl0rKVxcXFxiYCk7XG5cbiAgICBmdW5jdGlvbiB0bihlLCB0KSB7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgbmFtZTogcixcbiAgICAgICAgICAgIHZhbHVlOiBuXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIGxldCBpID0gci5tYXRjaChLdCgpKSxcbiAgICAgICAgICAgICAgICBvID0gci5tYXRjaCgvOihbYS16QS1aMC05XFwtOl0rKS8pLFxuICAgICAgICAgICAgICAgIGEgPSByLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXSxcbiAgICAgICAgICAgICAgICBzID0gdCB8fCBlW3JdIHx8IHI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGkgPyBpWzFdIDogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbyA/IG9bMV0gOiBudWxsLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogYS5tYXAodSA9PiB1LnJlcGxhY2UoXCIuXCIsIFwiXCIpKSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBuLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIEllID0gXCJERUZBVUxUXCIsXG4gICAgICAgIHRlID0gW1wiaWdub3JlXCIsIFwicmVmXCIsIFwiZGF0YVwiLCBcImlkXCIsIFwiYmluZFwiLCBcImluaXRcIiwgXCJmb3JcIiwgXCJtYXNrXCIsIFwibW9kZWxcIiwgXCJtb2RlbGFibGVcIiwgXCJ0cmFuc2l0aW9uXCIsIFwic2hvd1wiLCBcImlmXCIsIEllLCBcInRlbGVwb3J0XCIsIFwiZWxlbWVudFwiXTtcblxuICAgIGZ1bmN0aW9uIHJuKGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSB0ZS5pbmRleE9mKGUudHlwZSkgPT09IC0xID8gSWUgOiBlLnR5cGUsXG4gICAgICAgICAgICBuID0gdGUuaW5kZXhPZih0LnR5cGUpID09PSAtMSA/IEllIDogdC50eXBlO1xuICAgICAgICByZXR1cm4gdGUuaW5kZXhPZihyKSAtIHRlLmluZGV4T2YobilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBVKGUsIHQsIHIgPSB7fSkge1xuICAgICAgICBlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHQsIHtcbiAgICAgICAgICAgIGRldGFpbDogcixcbiAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgY29tcG9zZWQ6ICEwLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogITBcbiAgICAgICAgfSkpXG4gICAgfVxuICAgIHZhciBMZSA9IFtdLFxuICAgICAgICBKZSA9ICExO1xuXG4gICAgZnVuY3Rpb24gRHQoZSA9ICgpID0+IHt9KSB7XG4gICAgICAgIHJldHVybiBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICBKZSB8fCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSwgbmV3IFByb21pc2UodCA9PiB7XG4gICAgICAgICAgICBMZS5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlKCksIHQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBOZSgpIHtcbiAgICAgICAgZm9yIChKZSA9ICExOyBMZS5sZW5ndGg7KSBMZS5zaGlmdCgpKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBubigpIHtcbiAgICAgICAgSmUgPSAhMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEkoZSwgdCkge1xuICAgICAgICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT0gXCJmdW5jdGlvblwiICYmIGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGUuY2hpbGRyZW4pLmZvckVhY2goaSA9PiBJKGksIHQpKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCByID0gITE7XG4gICAgICAgIGlmICh0KGUsICgpID0+IHIgPSAhMCksIHIpIHJldHVybjtcbiAgICAgICAgbGV0IG4gPSBlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBmb3IgKDsgbjspIEkobiwgdCwgITEpLCBuID0gbi5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBLKGUsIC4uLnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBBbHBpbmUgV2FybmluZzogJHtlfWAsIC4uLnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkgfHwgSyhcIlVuYWJsZSB0byBpbml0aWFsaXplLiBUcnlpbmcgdG8gbG9hZCBBbHBpbmUgYmVmb3JlIGA8Ym9keT5gIGlzIGF2YWlsYWJsZS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGBkZWZlcmAgaW4gQWxwaW5lJ3MgYDxzY3JpcHQ+YCB0YWc/XCIpLCBVKGRvY3VtZW50LCBcImFscGluZTppbml0XCIpLCBVKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXppbmdcIiksIHd0KCksIEtyKHQgPT4gQyh0LCBJKSksIHh0KHQgPT4gV3QodCkpLCBEcigodCwgcikgPT4ge1xuICAgICAgICAgICAgWWUodCwgcikuZm9yRWFjaChuID0+IG4oKSlcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBlID0gdCA9PiAhdWUodC5wYXJlbnRFbGVtZW50LCAhMCk7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChIdCgpKSkuZmlsdGVyKGUpLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBDKHQpXG4gICAgICAgIH0pLCBVKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXplZFwiKVxuICAgIH1cbiAgICB2YXIgWGUgPSBbXSxcbiAgICAgICAga3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJ0KCkge1xuICAgICAgICByZXR1cm4gWGUubWFwKGUgPT4gZSgpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEh0KCkge1xuICAgICAgICByZXR1cm4gWGUuY29uY2F0KGt0KS5tYXAoZSA9PiBlKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXQoZSkge1xuICAgICAgICBYZS5wdXNoKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24genQoZSkge1xuICAgICAgICBrdC5wdXNoKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdWUoZSwgdCA9ICExKSB7XG4gICAgICAgIHJldHVybiBjZShlLCByID0+IHtcbiAgICAgICAgICAgIGlmICgodCA/IEh0KCkgOiBCdCgpKS5zb21lKGkgPT4gci5tYXRjaGVzKGkpKSkgcmV0dXJuICEwXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2UoZSwgdCkge1xuICAgICAgICBpZiAoISFlKSB7XG4gICAgICAgICAgICBpZiAodChlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICBpZiAoZS5feF90ZWxlcG9ydEJhY2sgJiYgKGUgPSBlLl94X3RlbGVwb3J0QmFjayksICEhZS5wYXJlbnRFbGVtZW50KSByZXR1cm4gY2UoZS5wYXJlbnRFbGVtZW50LCB0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW4oZSkge1xuICAgICAgICByZXR1cm4gQnQoKS5zb21lKHQgPT4gZS5tYXRjaGVzKHQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEMoZSwgdCA9IEkpIHtcbiAgICAgICAgUXIoKCkgPT4ge1xuICAgICAgICAgICAgdChlLCAociwgbikgPT4ge1xuICAgICAgICAgICAgICAgIFllKHIsIHIuYXR0cmlidXRlcykuZm9yRWFjaChpID0+IGkoKSksIHIuX3hfaWdub3JlICYmIG4oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXdChlKSB7XG4gICAgICAgIEkoZSwgdCA9PiBidCh0KSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBaZShlLCB0KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHQpID8gY3QoZSwgdC5qb2luKFwiIFwiKSkgOiB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIHQgIT09IG51bGwgPyBzbihlLCB0KSA6IHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IFplKGUsIHQoKSkgOiBjdChlLCB0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN0KGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSBvID0+IG8uc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgIG4gPSBvID0+IG8uc3BsaXQoXCIgXCIpLmZpbHRlcihhID0+ICFlLmNsYXNzTGlzdC5jb250YWlucyhhKSkuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgaSA9IG8gPT4gKGUuY2xhc3NMaXN0LmFkZCguLi5vKSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSguLi5vKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0ID0gdCA9PT0gITAgPyB0ID0gXCJcIiA6IHQgfHwgXCJcIiwgaShuKHQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNuKGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSBzID0+IHMuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgIG4gPSBPYmplY3QuZW50cmllcyh0KS5mbGF0TWFwKChbcywgdV0pID0+IHUgPyByKHMpIDogITEpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgIGkgPSBPYmplY3QuZW50cmllcyh0KS5mbGF0TWFwKChbcywgdV0pID0+IHUgPyAhMSA6IHIocykpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgIG8gPSBbXSxcbiAgICAgICAgICAgIGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGkuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmNvbnRhaW5zKHMpICYmIChlLmNsYXNzTGlzdC5yZW1vdmUocyksIGEucHVzaChzKSlcbiAgICAgICAgfSksIG4uZm9yRWFjaChzID0+IHtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmNvbnRhaW5zKHMpIHx8IChlLmNsYXNzTGlzdC5hZGQocyksIG8ucHVzaChzKSlcbiAgICAgICAgfSksICgpID0+IHtcbiAgICAgICAgICAgIGEuZm9yRWFjaChzID0+IGUuY2xhc3NMaXN0LmFkZChzKSksIG8uZm9yRWFjaChzID0+IGUuY2xhc3NMaXN0LnJlbW92ZShzKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgdCAhPT0gbnVsbCA/IHVuKGUsIHQpIDogY24oZSwgdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bihlLCB0KSB7XG4gICAgICAgIGxldCByID0ge307XG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0KS5mb3JFYWNoKChbbiwgaV0pID0+IHtcbiAgICAgICAgICAgIHJbbl0gPSBlLnN0eWxlW25dLCBuLnN0YXJ0c1dpdGgoXCItLVwiKSB8fCAobiA9IGxuKG4pKSwgZS5zdHlsZS5zZXRQcm9wZXJ0eShuLCBpKVxuICAgICAgICB9KSwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLmxlbmd0aCA9PT0gMCAmJiBlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpXG4gICAgICAgIH0pLCAoKSA9PiB7XG4gICAgICAgICAgICBsZShlLCByKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY24oZSwgdCkge1xuICAgICAgICBsZXQgciA9IGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdCk7XG4gICAgICAgIHJldHVybiBlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHQpLCAoKSA9PiB7XG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHIgfHwgXCJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxuKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gamUoZSwgdCA9ICgpID0+IHt9KSB7XG4gICAgICAgIGxldCByID0gITE7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHIgPyB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAociA9ICEwLCBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZyhcInRyYW5zaXRpb25cIiwgKGUsIHtcbiAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgIG1vZGlmaWVyczogcixcbiAgICAgICAgZXhwcmVzc2lvbjogblxuICAgIH0sIHtcbiAgICAgICAgZXZhbHVhdGU6IGlcbiAgICB9KSA9PiB7XG4gICAgICAgIHR5cGVvZiBuID09IFwiZnVuY3Rpb25cIiAmJiAobiA9IGkobikpLCBuID8gZm4oZSwgbiwgdCkgOiBkbihlLCByLCB0KVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZm4oZSwgdCwgcikge1xuICAgICAgICBVdChlLCBaZSwgXCJcIiksIHtcbiAgICAgICAgICAgIGVudGVyOiBpID0+IHtcbiAgICAgICAgICAgICAgICBlLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0gaVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW50ZXItc3RhcnRcIjogaSA9PiB7XG4gICAgICAgICAgICAgICAgZS5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0gaVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW50ZXItZW5kXCI6IGkgPT4ge1xuICAgICAgICAgICAgICAgIGUuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQgPSBpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhdmU6IGkgPT4ge1xuICAgICAgICAgICAgICAgIGUuX3hfdHJhbnNpdGlvbi5sZWF2ZS5kdXJpbmcgPSBpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWF2ZS1zdGFydFwiOiBpID0+IHtcbiAgICAgICAgICAgICAgICBlLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSBpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWF2ZS1lbmRcIjogaSA9PiB7XG4gICAgICAgICAgICAgICAgZS5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBbcl0odClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkbihlLCB0LCByKSB7XG4gICAgICAgIFV0KGUsIGxlKTtcbiAgICAgICAgbGV0IG4gPSAhdC5pbmNsdWRlcyhcImluXCIpICYmICF0LmluY2x1ZGVzKFwib3V0XCIpICYmICFyLFxuICAgICAgICAgICAgaSA9IG4gfHwgdC5pbmNsdWRlcyhcImluXCIpIHx8IFtcImVudGVyXCJdLmluY2x1ZGVzKHIpLFxuICAgICAgICAgICAgbyA9IG4gfHwgdC5pbmNsdWRlcyhcIm91dFwiKSB8fCBbXCJsZWF2ZVwiXS5pbmNsdWRlcyhyKTtcbiAgICAgICAgdC5pbmNsdWRlcyhcImluXCIpICYmICFuICYmICh0ID0gdC5maWx0ZXIoKHAsIHYpID0+IHYgPCB0LmluZGV4T2YoXCJvdXRcIikpKSwgdC5pbmNsdWRlcyhcIm91dFwiKSAmJiAhbiAmJiAodCA9IHQuZmlsdGVyKChwLCB2KSA9PiB2ID4gdC5pbmRleE9mKFwib3V0XCIpKSk7XG4gICAgICAgIGxldCBhID0gIXQuaW5jbHVkZXMoXCJvcGFjaXR5XCIpICYmICF0LmluY2x1ZGVzKFwic2NhbGVcIiksXG4gICAgICAgICAgICBzID0gYSB8fCB0LmluY2x1ZGVzKFwib3BhY2l0eVwiKSxcbiAgICAgICAgICAgIHUgPSBhIHx8IHQuaW5jbHVkZXMoXCJzY2FsZVwiKSxcbiAgICAgICAgICAgIGMgPSBzID8gMCA6IDEsXG4gICAgICAgICAgICBsID0gdSA/IEgodCwgXCJzY2FsZVwiLCA5NSkgLyAxMDAgOiAxLFxuICAgICAgICAgICAgZCA9IEgodCwgXCJkZWxheVwiLCAwKSxcbiAgICAgICAgICAgIGggPSBIKHQsIFwib3JpZ2luXCIsIFwiY2VudGVyXCIpLFxuICAgICAgICAgICAgUyA9IFwib3BhY2l0eSwgdHJhbnNmb3JtXCIsXG4gICAgICAgICAgICBMID0gSCh0LCBcImR1cmF0aW9uXCIsIDE1MCkgLyAxZTMsXG4gICAgICAgICAgICBRID0gSCh0LCBcImR1cmF0aW9uXCIsIDc1KSAvIDFlMyxcbiAgICAgICAgICAgIGYgPSBcImN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKVwiO1xuICAgICAgICBpICYmIChlLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBoLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiBkLFxuICAgICAgICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBTLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtMfXNgLFxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmXG4gICAgICAgIH0sIGUuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCA9IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IGMsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke2x9KWBcbiAgICAgICAgfSwgZS5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIlxuICAgICAgICB9KSwgbyAmJiAoZS5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogaCxcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheTogZCxcbiAgICAgICAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogUyxcbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7UX1zYCxcbiAgICAgICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZlxuICAgICAgICB9LCBlLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCJcbiAgICAgICAgfSwgZS5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IGMsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke2x9KWBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBVdChlLCB0LCByID0ge30pIHtcbiAgICAgICAgZS5feF90cmFuc2l0aW9uIHx8IChlLl94X3RyYW5zaXRpb24gPSB7XG4gICAgICAgICAgICBlbnRlcjoge1xuICAgICAgICAgICAgICAgIGR1cmluZzogcixcbiAgICAgICAgICAgICAgICBzdGFydDogcixcbiAgICAgICAgICAgICAgICBlbmQ6IHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWF2ZToge1xuICAgICAgICAgICAgICAgIGR1cmluZzogcixcbiAgICAgICAgICAgICAgICBzdGFydDogcixcbiAgICAgICAgICAgICAgICBlbmQ6IHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbihuID0gKCkgPT4ge30sIGkgPSAoKSA9PiB7fSkge1xuICAgICAgICAgICAgICAgIEZlKGUsIHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyaW5nOiB0aGlzLmVudGVyLmR1cmluZyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuZW50ZXIuc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdGhpcy5lbnRlci5lbmRcbiAgICAgICAgICAgICAgICB9LCBuLCBpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dChuID0gKCkgPT4ge30sIGkgPSAoKSA9PiB7fSkge1xuICAgICAgICAgICAgICAgIEZlKGUsIHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyaW5nOiB0aGlzLmxlYXZlLmR1cmluZyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMubGVhdmUuc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdGhpcy5sZWF2ZS5lbmRcbiAgICAgICAgICAgICAgICB9LCBuLCBpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGUsIHQsIHIsIG4pIHtcbiAgICAgICAgbGV0IGkgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpIDogc2V0VGltZW91dChyKVxuICAgICAgICB9O1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgZS5feF90cmFuc2l0aW9uICYmIChlLl94X3RyYW5zaXRpb24uZW50ZXIgfHwgZS5feF90cmFuc2l0aW9uLmxlYXZlKSA/IGUuX3hfdHJhbnNpdGlvbi5lbnRlciAmJiAoT2JqZWN0LmVudHJpZXMoZS5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZykubGVuZ3RoIHx8IE9iamVjdC5lbnRyaWVzKGUuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCkubGVuZ3RoIHx8IE9iamVjdC5lbnRyaWVzKGUuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQpLmxlbmd0aCkgPyBlLl94X3RyYW5zaXRpb24uaW4ocikgOiBpKCkgOiBlLl94X3RyYW5zaXRpb24gPyBlLl94X3RyYW5zaXRpb24uaW4ocikgOiBpKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlLl94X2hpZGVQcm9taXNlID0gZS5feF90cmFuc2l0aW9uID8gbmV3IFByb21pc2UoKG8sIGEpID0+IHtcbiAgICAgICAgICAgIGUuX3hfdHJhbnNpdGlvbi5vdXQoKCkgPT4ge30sICgpID0+IG8obikpLCBlLl94X3RyYW5zaXRpb25pbmcuYmVmb3JlQ2FuY2VsKCgpID0+IGEoe1xuICAgICAgICAgICAgICAgIGlzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb246ICEwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSkgOiBQcm9taXNlLnJlc29sdmUobiksIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvID0gVnQoZSk7XG4gICAgICAgICAgICBvID8gKG8uX3hfaGlkZUNoaWxkcmVuIHx8IChvLl94X2hpZGVDaGlsZHJlbiA9IFtdKSwgby5feF9oaWRlQ2hpbGRyZW4ucHVzaChlKSkgOiBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHUgPSBQcm9taXNlLmFsbChbcy5feF9oaWRlUHJvbWlzZSwgLi4uKHMuX3hfaGlkZUNoaWxkcmVuIHx8IFtdKS5tYXAoYSldKS50aGVuKChbY10pID0+IGMoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGUgcy5feF9oaWRlUHJvbWlzZSwgZGVsZXRlIHMuX3hfaGlkZUNoaWxkcmVuLCB1XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhKGUpLmNhdGNoKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbikgdGhyb3cgc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBWdChlKSB7XG4gICAgICAgIGxldCB0ID0gZS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoISF0KSByZXR1cm4gdC5feF9oaWRlUHJvbWlzZSA/IHQgOiBWdCh0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEZlKGUsIHQsIHtcbiAgICAgICAgZHVyaW5nOiByLFxuICAgICAgICBzdGFydDogbixcbiAgICAgICAgZW5kOiBpXG4gICAgfSA9IHt9LCBvID0gKCkgPT4ge30sIGEgPSAoKSA9PiB7fSkge1xuICAgICAgICBpZiAoZS5feF90cmFuc2l0aW9uaW5nICYmIGUuX3hfdHJhbnNpdGlvbmluZy5jYW5jZWwoKSwgT2JqZWN0LmtleXMocikubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKG4pLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhpKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG8oKSwgYSgpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHMsIHUsIGM7XG4gICAgICAgIHBuKGUsIHtcbiAgICAgICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHMgPSB0KGUsIG4pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVyaW5nKCkge1xuICAgICAgICAgICAgICAgIHUgPSB0KGUsIHIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlOiBvLFxuICAgICAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgICAgIHMoKSwgYyA9IHQoZSwgaSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZnRlcjogYSxcbiAgICAgICAgICAgIGNsZWFudXAoKSB7XG4gICAgICAgICAgICAgICAgdSgpLCBjKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbihlLCB0KSB7XG4gICAgICAgIGxldCByLCBuLCBpLCBvID0gamUoKCkgPT4ge1xuICAgICAgICAgICAgeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9ICEwLCBuIHx8IHQuYmVmb3JlKCksIGkgfHwgKHQuZW5kKCksIE5lKCkpLCB0LmFmdGVyKCksIGUuaXNDb25uZWN0ZWQgJiYgdC5jbGVhbnVwKCksIGRlbGV0ZSBlLl94X3RyYW5zaXRpb25pbmdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBlLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgICAgICAgICBiZWZvcmVDYW5jZWxzOiBbXSxcbiAgICAgICAgICAgIGJlZm9yZUNhbmNlbChhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWZvcmVDYW5jZWxzLnB1c2goYSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWw6IGplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZvciAoOyB0aGlzLmJlZm9yZUNhbmNlbHMubGVuZ3RoOykgdGhpcy5iZWZvcmVDYW5jZWxzLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgICAgICBvKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmluaXNoOiBvXG4gICAgICAgIH0sIHkoKCkgPT4ge1xuICAgICAgICAgICAgdC5zdGFydCgpLCB0LmR1cmluZygpXG4gICAgICAgIH0pLCBubigpLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHIpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBhID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZSkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMyxcbiAgICAgICAgICAgICAgICBzID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZSkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICAgICAgICAgIGEgPT09IDAgJiYgKGEgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTMpLCB5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0LmJlZm9yZSgpXG4gICAgICAgICAgICB9KSwgbiA9ICEwLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHIgfHwgKHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0LmVuZCgpXG4gICAgICAgICAgICAgICAgfSksIE5lKCksIHNldFRpbWVvdXQoZS5feF90cmFuc2l0aW9uaW5nLmZpbmlzaCwgYSArIHMpLCBpID0gITApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEgoZSwgdCwgcikge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHQpID09PSAtMSkgcmV0dXJuIHI7XG4gICAgICAgIGxldCBuID0gZVtlLmluZGV4T2YodCkgKyAxXTtcbiAgICAgICAgaWYgKCFuIHx8IHQgPT09IFwic2NhbGVcIiAmJiBpc05hTihuKSkgcmV0dXJuIHI7XG4gICAgICAgIGlmICh0ID09PSBcImR1cmF0aW9uXCIpIHtcbiAgICAgICAgICAgIGxldCBpID0gbi5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgICAgICAgICAgaWYgKGkpIHJldHVybiBpWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQgPT09IFwib3JpZ2luXCIgJiYgW1widG9wXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKGVbZS5pbmRleE9mKHQpICsgMl0pID8gW24sIGVbZS5pbmRleE9mKHQpICsgMl1dLmpvaW4oXCIgXCIpIDogblxuICAgIH1cbiAgICB2YXIgS2UgPSAhMTtcblxuICAgIGZ1bmN0aW9uIGZlKGUsIHQgPSAoKSA9PiB7fSkge1xuICAgICAgICByZXR1cm4gKC4uLnIpID0+IEtlID8gdCguLi5yKSA6IGUoLi4ucilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfbihlLCB0KSB7XG4gICAgICAgIHQuX3hfZGF0YVN0YWNrIHx8ICh0Ll94X2RhdGFTdGFjayA9IGUuX3hfZGF0YVN0YWNrKSwgS2UgPSAhMCwgZ24oKCkgPT4ge1xuICAgICAgICAgICAgaG4odClcbiAgICAgICAgfSksIEtlID0gITFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBobihlKSB7XG4gICAgICAgIGxldCB0ID0gITE7XG4gICAgICAgIEMoZSwgKG4sIGkpID0+IHtcbiAgICAgICAgICAgIEkobiwgKG8sIGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodCAmJiBhbihvKSkgcmV0dXJuIGEoKTtcbiAgICAgICAgICAgICAgICB0ID0gITAsIGkobywgYSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ24oZSkge1xuICAgICAgICBsZXQgdCA9IEc7XG4gICAgICAgIHN0KChyLCBuKSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHQocik7XG4gICAgICAgICAgICByZXR1cm4gc2UoaSksICgpID0+IHt9XG4gICAgICAgIH0pLCBlKCksIHN0KHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gWXQoZSwgdCwgciwgbiA9IFtdKSB7XG4gICAgICAgIHN3aXRjaCAoZS5feF9iaW5kaW5ncyB8fCAoZS5feF9iaW5kaW5ncyA9IGsoe30pKSwgZS5feF9iaW5kaW5nc1t0XSA9IHIsIHQgPSBuLmluY2x1ZGVzKFwiY2FtZWxcIikgPyBFbih0KSA6IHQsIHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgICAgICAgICAgIHZuKGUsIHIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0eWxlXCI6XG4gICAgICAgICAgICAgICAgeG4oZSwgcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICAgICAgICAgICAgICB5bihlLCByKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbW4oZSwgdCwgcik7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZuKGUsIHQpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJyYWRpb1wiKSBlLmF0dHJpYnV0ZXMudmFsdWUgPT09IHZvaWQgMCAmJiAoZS52YWx1ZSA9IHQpLCB3aW5kb3cuZnJvbU1vZGVsICYmIChlLmNoZWNrZWQgPSBsdChlLnZhbHVlLCB0KSk7XG4gICAgICAgIGVsc2UgaWYgKGUudHlwZSA9PT0gXCJjaGVja2JveFwiKSBOdW1iZXIuaXNJbnRlZ2VyKHQpID8gZS52YWx1ZSA9IHQgOiAhTnVtYmVyLmlzSW50ZWdlcih0KSAmJiAhQXJyYXkuaXNBcnJheSh0KSAmJiB0eXBlb2YgdCAhPSBcImJvb2xlYW5cIiAmJiAhW251bGwsIHZvaWQgMF0uaW5jbHVkZXModCkgPyBlLnZhbHVlID0gU3RyaW5nKHQpIDogQXJyYXkuaXNBcnJheSh0KSA/IGUuY2hlY2tlZCA9IHQuc29tZShyID0+IGx0KHIsIGUudmFsdWUpKSA6IGUuY2hlY2tlZCA9ICEhdDtcbiAgICAgICAgZWxzZSBpZiAoZS50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB3bihlLCB0KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZS52YWx1ZSA9PT0gdCkgcmV0dXJuO1xuICAgICAgICAgICAgZS52YWx1ZSA9IHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHluKGUsIHQpIHtcbiAgICAgICAgZS5feF91bmRvQWRkZWRDbGFzc2VzICYmIGUuX3hfdW5kb0FkZGVkQ2xhc3NlcygpLCBlLl94X3VuZG9BZGRlZENsYXNzZXMgPSBaZShlLCB0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHhuKGUsIHQpIHtcbiAgICAgICAgZS5feF91bmRvQWRkZWRTdHlsZXMgJiYgZS5feF91bmRvQWRkZWRTdHlsZXMoKSwgZS5feF91bmRvQWRkZWRTdHlsZXMgPSBsZShlLCB0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1uKGUsIHQsIHIpIHtcbiAgICAgICAgW251bGwsIHZvaWQgMCwgITFdLmluY2x1ZGVzKHIpICYmIEFuKHQpID8gZS5yZW1vdmVBdHRyaWJ1dGUodCkgOiAoR3QodCkgJiYgKHIgPSB0KSwgYm4oZSwgdCwgcikpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm4oZSwgdCwgcikge1xuICAgICAgICBlLmdldEF0dHJpYnV0ZSh0KSAhPSByICYmIGUuc2V0QXR0cmlidXRlKHQsIHIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd24oZSwgdCkge1xuICAgICAgICBsZXQgciA9IFtdLmNvbmNhdCh0KS5tYXAobiA9PiBuICsgXCJcIik7XG4gICAgICAgIEFycmF5LmZyb20oZS5vcHRpb25zKS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgbi5zZWxlY3RlZCA9IHIuaW5jbHVkZXMobi52YWx1ZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBFbihlKSB7XG4gICAgICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csICh0LCByKSA9PiByLnRvVXBwZXJDYXNlKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbHQoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSA9PSB0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gR3QoZSkge1xuICAgICAgICByZXR1cm4gW1wiZGlzYWJsZWRcIiwgXCJjaGVja2VkXCIsIFwicmVxdWlyZWRcIiwgXCJyZWFkb25seVwiLCBcImhpZGRlblwiLCBcIm9wZW5cIiwgXCJzZWxlY3RlZFwiLCBcImF1dG9mb2N1c1wiLCBcIml0ZW1zY29wZVwiLCBcIm11bHRpcGxlXCIsIFwibm92YWxpZGF0ZVwiLCBcImFsbG93ZnVsbHNjcmVlblwiLCBcImFsbG93cGF5bWVudHJlcXVlc3RcIiwgXCJmb3Jtbm92YWxpZGF0ZVwiLCBcImF1dG9wbGF5XCIsIFwiY29udHJvbHNcIiwgXCJsb29wXCIsIFwibXV0ZWRcIiwgXCJwbGF5c2lubGluZVwiLCBcImRlZmF1bHRcIiwgXCJpc21hcFwiLCBcInJldmVyc2VkXCIsIFwiYXN5bmNcIiwgXCJkZWZlclwiLCBcIm5vbW9kdWxlXCJdLmluY2x1ZGVzKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQW4oZSkge1xuICAgICAgICByZXR1cm4gIVtcImFyaWEtcHJlc3NlZFwiLCBcImFyaWEtY2hlY2tlZFwiLCBcImFyaWEtZXhwYW5kZWRcIiwgXCJhcmlhLXNlbGVjdGVkXCJdLmluY2x1ZGVzKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU24oZSwgdCwgcikge1xuICAgICAgICBpZiAoZS5feF9iaW5kaW5ncyAmJiBlLl94X2JpbmRpbmdzW3RdICE9PSB2b2lkIDApIHJldHVybiBlLl94X2JpbmRpbmdzW3RdO1xuICAgICAgICBsZXQgbiA9IGUuZ2V0QXR0cmlidXRlKHQpO1xuICAgICAgICByZXR1cm4gbiA9PT0gbnVsbCA/IHR5cGVvZiByID09IFwiZnVuY3Rpb25cIiA/IHIoKSA6IHIgOiBHdCh0KSA/ICEhW3QsIFwidHJ1ZVwiXS5pbmNsdWRlcyhuKSA6IG4gPT09IFwiXCIgPyAhMCA6IG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBKdChlLCB0KSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaSA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICBvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBudWxsLCBlLmFwcGx5KG4sIGkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyKSwgciA9IHNldFRpbWVvdXQobywgdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFh0KGUsIHQpIHtcbiAgICAgICAgbGV0IHI7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBuID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgciB8fCAoZS5hcHBseShuLCBpKSwgciA9ICEwLCBzZXRUaW1lb3V0KCgpID0+IHIgPSAhMSwgdCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPbihlKSB7XG4gICAgICAgIGUoWilcbiAgICB9XG4gICAgdmFyIFQgPSB7fSxcbiAgICAgICAgZnQgPSAhMTtcblxuICAgIGZ1bmN0aW9uIENuKGUsIHQpIHtcbiAgICAgICAgaWYgKGZ0IHx8IChUID0gayhUKSwgZnQgPSAhMCksIHQgPT09IHZvaWQgMCkgcmV0dXJuIFRbZV07XG4gICAgICAgIFRbZV0gPSB0LCB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIHQgIT09IG51bGwgJiYgdC5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHQuaW5pdCA9PSBcImZ1bmN0aW9uXCIgJiYgVFtlXS5pbml0KCksIFN0KFRbZV0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW4oKSB7XG4gICAgICAgIHJldHVybiBUXG4gICAgfVxuICAgIHZhciBadCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gVG4oZSwgdCkge1xuICAgICAgICBadFtlXSA9IHR5cGVvZiB0ICE9IFwiZnVuY3Rpb25cIiA/ICgpID0+IHQgOiB0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUm4oZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoWnQpLmZvckVhY2goKFt0LCByXSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoLi4ubikgPT4gciguLi5uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLCBlXG4gICAgfVxuICAgIHZhciBRdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gUG4oZSwgdCkge1xuICAgICAgICBRdFtlXSA9IHRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkbihlLCB0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhRdCkuZm9yRWFjaCgoW3IsIG5dKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5pKSA9PiBuLmJpbmQodCkoLi4uaSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICExXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSwgZVxuICAgIH1cbiAgICB2YXIgSW4gPSB7XG4gICAgICAgICAgICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcmVsZWFzZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgZWZmZWN0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBHXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHJhdygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjMuMTAuMlwiLFxuICAgICAgICAgICAgZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zOiBxcixcbiAgICAgICAgICAgIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnM6IFVyLFxuICAgICAgICAgICAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmc6IE5yLFxuICAgICAgICAgICAgc3RvcE9ic2VydmluZ011dGF0aW9uczogRXQsXG4gICAgICAgICAgICBkZXN0cm95VHJlZTogV3QsXG4gICAgICAgICAgICBzZXRSZWFjdGl2aXR5RW5naW5lOiBqcixcbiAgICAgICAgICAgIGNsb3Nlc3REYXRhU3RhY2s6IEYsXG4gICAgICAgICAgICBza2lwRHVyaW5nQ2xvbmU6IGZlLFxuICAgICAgICAgICAgYWRkUm9vdFNlbGVjdG9yOiBxdCxcbiAgICAgICAgICAgIGFkZEluaXRTZWxlY3RvcjogenQsXG4gICAgICAgICAgICBhZGRTY29wZVRvTm9kZTogSixcbiAgICAgICAgICAgIGRlZmVyTXV0YXRpb25zOiBIcixcbiAgICAgICAgICAgIG1hcEF0dHJpYnV0ZXM6IEdlLFxuICAgICAgICAgICAgZXZhbHVhdGVMYXRlcjogbSxcbiAgICAgICAgICAgIHNldEV2YWx1YXRvcjogVnIsXG4gICAgICAgICAgICBtZXJnZVByb3hpZXM6IFgsXG4gICAgICAgICAgICBmaW5kQ2xvc2VzdDogY2UsXG4gICAgICAgICAgICBjbG9zZXN0Um9vdDogdWUsXG4gICAgICAgICAgICBpbnRlcmNlcHRvcjogT3QsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBGZSxcbiAgICAgICAgICAgIHNldFN0eWxlczogbGUsXG4gICAgICAgICAgICBtdXRhdGVEb206IHksXG4gICAgICAgICAgICBkaXJlY3RpdmU6IGcsXG4gICAgICAgICAgICB0aHJvdHRsZTogWHQsXG4gICAgICAgICAgICBkZWJvdW5jZTogSnQsXG4gICAgICAgICAgICBldmFsdWF0ZTogaixcbiAgICAgICAgICAgIGluaXRUcmVlOiBDLFxuICAgICAgICAgICAgbmV4dFRpY2s6IER0LFxuICAgICAgICAgICAgcHJlZml4ZWQ6IEIsXG4gICAgICAgICAgICBwcmVmaXg6IFhyLFxuICAgICAgICAgICAgcGx1Z2luOiBPbixcbiAgICAgICAgICAgIG1hZ2ljOiBFLFxuICAgICAgICAgICAgc3RvcmU6IENuLFxuICAgICAgICAgICAgc3RhcnQ6IG9uLFxuICAgICAgICAgICAgY2xvbmU6IF9uLFxuICAgICAgICAgICAgYm91bmQ6IFNuLFxuICAgICAgICAgICAgJGRhdGE6IEF0LFxuICAgICAgICAgICAgZGF0YTogUG4sXG4gICAgICAgICAgICBiaW5kOiBUblxuICAgICAgICB9LFxuICAgICAgICBaID0gSW47XG5cbiAgICBmdW5jdGlvbiBlcihlLCB0KSB7XG4gICAgICAgIGxldCByID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG4gPSBlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSByW25baV1dID0gITA7XG4gICAgICAgIHJldHVybiB0ID8gaSA9PiAhIXJbaS50b0xvd2VyQ2FzZSgpXSA6IGkgPT4gISFyW2ldXG4gICAgfVxuICAgIHZhciBMbiA9IFwiaXRlbXNjb3BlLGFsbG93ZnVsbHNjcmVlbixmb3Jtbm92YWxpZGF0ZSxpc21hcCxub21vZHVsZSxub3ZhbGlkYXRlLHJlYWRvbmx5XCIsXG4gICAgICAgIFBpID0gZXIoTG4gKyBcIixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY29udHJvbHMsZGVmYXVsdCxkZWZlcixkaXNhYmxlZCxoaWRkZW4sbG9vcCxvcGVuLHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxjaGVja2VkLG11dGVkLG11bHRpcGxlLHNlbGVjdGVkXCIpLFxuICAgICAgICBObiA9IE9iamVjdC5mcmVlemUoe30pLFxuICAgICAgICAkaSA9IE9iamVjdC5mcmVlemUoW10pLFxuICAgICAgICB0ciA9IE9iamVjdC5hc3NpZ24sXG4gICAgICAgIGpuID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgZGUgPSAoZSwgdCkgPT4gam4uY2FsbChlLCB0KSxcbiAgICAgICAgUCA9IEFycmF5LmlzQXJyYXksXG4gICAgICAgIFYgPSBlID0+IHJyKGUpID09PSBcIltvYmplY3QgTWFwXVwiLFxuICAgICAgICBGbiA9IGUgPT4gdHlwZW9mIGUgPT0gXCJzdHJpbmdcIixcbiAgICAgICAgUWUgPSBlID0+IHR5cGVvZiBlID09IFwic3ltYm9sXCIsXG4gICAgICAgIHBlID0gZSA9PiBlICE9PSBudWxsICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIsXG4gICAgICAgIEtuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICAgICAgcnIgPSBlID0+IEtuLmNhbGwoZSksXG4gICAgICAgIG5yID0gZSA9PiBycihlKS5zbGljZSg4LCAtMSksXG4gICAgICAgIGV0ID0gZSA9PiBGbihlKSAmJiBlICE9PSBcIk5hTlwiICYmIGVbMF0gIT09IFwiLVwiICYmIFwiXCIgKyBwYXJzZUludChlLCAxMCkgPT09IGUsXG4gICAgICAgIF9lID0gZSA9PiB7XG4gICAgICAgICAgICBsZXQgdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gciA9PiB0W3JdIHx8ICh0W3JdID0gZShyKSlcbiAgICAgICAgfSxcbiAgICAgICAgRG4gPSAvLShcXHcpL2csXG4gICAgICAgIElpID0gX2UoZSA9PiBlLnJlcGxhY2UoRG4sICh0LCByKSA9PiByID8gci50b1VwcGVyQ2FzZSgpIDogXCJcIikpLFxuICAgICAgICBrbiA9IC9cXEIoW0EtWl0pL2csXG4gICAgICAgIExpID0gX2UoZSA9PiBlLnJlcGxhY2Uoa24sIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICBpciA9IF9lKGUgPT4gZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGUuc2xpY2UoMSkpLFxuICAgICAgICBOaSA9IF9lKGUgPT4gZSA/IGBvbiR7aXIoZSl9YCA6IFwiXCIpLFxuICAgICAgICBvciA9IChlLCB0KSA9PiBlICE9PSB0ICYmIChlID09PSBlIHx8IHQgPT09IHQpLFxuICAgICAgICBEZSA9IG5ldyBXZWFrTWFwLFxuICAgICAgICBxID0gW10sXG4gICAgICAgIEEsICQgPSBTeW1ib2woXCJpdGVyYXRlXCIpLFxuICAgICAgICBrZSA9IFN5bWJvbChcIk1hcCBrZXkgaXRlcmF0ZVwiKTtcblxuICAgIGZ1bmN0aW9uIEJuKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5faXNFZmZlY3QgPT09ICEwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gSG4oZSwgdCA9IE5uKSB7XG4gICAgICAgIEJuKGUpICYmIChlID0gZS5yYXcpO1xuICAgICAgICBsZXQgciA9IFduKGUsIHQpO1xuICAgICAgICByZXR1cm4gdC5sYXp5IHx8IHIoKSwgclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHFuKGUpIHtcbiAgICAgICAgZS5hY3RpdmUgJiYgKGFyKGUpLCBlLm9wdGlvbnMub25TdG9wICYmIGUub3B0aW9ucy5vblN0b3AoKSwgZS5hY3RpdmUgPSAhMSlcbiAgICB9XG4gICAgdmFyIHpuID0gMDtcblxuICAgIGZ1bmN0aW9uIFduKGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghci5hY3RpdmUpIHJldHVybiBlKCk7XG4gICAgICAgICAgICBpZiAoIXEuaW5jbHVkZXMocikpIHtcbiAgICAgICAgICAgICAgICBhcihyKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVm4oKSwgcS5wdXNoKHIpLCBBID0gciwgZSgpXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcS5wb3AoKSwgc3IoKSwgQSA9IHFbcS5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIuaWQgPSB6bisrLCByLmFsbG93UmVjdXJzZSA9ICEhdC5hbGxvd1JlY3Vyc2UsIHIuX2lzRWZmZWN0ID0gITAsIHIuYWN0aXZlID0gITAsIHIucmF3ID0gZSwgci5kZXBzID0gW10sIHIub3B0aW9ucyA9IHQsIHJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcihlKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBkZXBzOiB0XG4gICAgICAgIH0gPSBlO1xuICAgICAgICBpZiAodC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykgdFtyXS5kZWxldGUoZSk7XG4gICAgICAgICAgICB0Lmxlbmd0aCA9IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgRCA9ICEwLFxuICAgICAgICB0dCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gVW4oKSB7XG4gICAgICAgIHR0LnB1c2goRCksIEQgPSAhMVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFZuKCkge1xuICAgICAgICB0dC5wdXNoKEQpLCBEID0gITBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcigpIHtcbiAgICAgICAgbGV0IGUgPSB0dC5wb3AoKTtcbiAgICAgICAgRCA9IGUgPT09IHZvaWQgMCA/ICEwIDogZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHcoZSwgdCwgcikge1xuICAgICAgICBpZiAoIUQgfHwgQSA9PT0gdm9pZCAwKSByZXR1cm47XG4gICAgICAgIGxldCBuID0gRGUuZ2V0KGUpO1xuICAgICAgICBuIHx8IERlLnNldChlLCBuID0gbmV3IE1hcCk7XG4gICAgICAgIGxldCBpID0gbi5nZXQocik7XG4gICAgICAgIGkgfHwgbi5zZXQociwgaSA9IG5ldyBTZXQpLCBpLmhhcyhBKSB8fCAoaS5hZGQoQSksIEEuZGVwcy5wdXNoKGkpLCBBLm9wdGlvbnMub25UcmFjayAmJiBBLm9wdGlvbnMub25UcmFjayh7XG4gICAgICAgICAgICBlZmZlY3Q6IEEsXG4gICAgICAgICAgICB0YXJnZXQ6IGUsXG4gICAgICAgICAgICB0eXBlOiB0LFxuICAgICAgICAgICAga2V5OiByXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIE0oZSwgdCwgciwgbiwgaSwgbykge1xuICAgICAgICBsZXQgYSA9IERlLmdldChlKTtcbiAgICAgICAgaWYgKCFhKSByZXR1cm47XG4gICAgICAgIGxldCBzID0gbmV3IFNldCxcbiAgICAgICAgICAgIHUgPSBsID0+IHtcbiAgICAgICAgICAgICAgICBsICYmIGwuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKGQgIT09IEEgfHwgZC5hbGxvd1JlY3Vyc2UpICYmIHMuYWRkKGQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmICh0ID09PSBcImNsZWFyXCIpIGEuZm9yRWFjaCh1KTtcbiAgICAgICAgZWxzZSBpZiAociA9PT0gXCJsZW5ndGhcIiAmJiBQKGUpKSBhLmZvckVhY2goKGwsIGQpID0+IHtcbiAgICAgICAgICAgIChkID09PSBcImxlbmd0aFwiIHx8IGQgPj0gbikgJiYgdShsKVxuICAgICAgICB9KTtcbiAgICAgICAgZWxzZSBzd2l0Y2ggKHIgIT09IHZvaWQgMCAmJiB1KGEuZ2V0KHIpKSwgdCkge1xuICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgIFAoZSkgPyBldChyKSAmJiB1KGEuZ2V0KFwibGVuZ3RoXCIpKSA6ICh1KGEuZ2V0KCQpKSwgVihlKSAmJiB1KGEuZ2V0KGtlKSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgICAgIFAoZSkgfHwgKHUoYS5nZXQoJCkpLCBWKGUpICYmIHUoYS5nZXQoa2UpKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgICAgICAgICAgVihlKSAmJiB1KGEuZ2V0KCQpKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGxldCBjID0gbCA9PiB7XG4gICAgICAgICAgICBsLm9wdGlvbnMub25UcmlnZ2VyICYmIGwub3B0aW9ucy5vblRyaWdnZXIoe1xuICAgICAgICAgICAgICAgIGVmZmVjdDogbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGUsXG4gICAgICAgICAgICAgICAga2V5OiByLFxuICAgICAgICAgICAgICAgIHR5cGU6IHQsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG4sXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IGksXG4gICAgICAgICAgICAgICAgb2xkVGFyZ2V0OiBvXG4gICAgICAgICAgICB9KSwgbC5vcHRpb25zLnNjaGVkdWxlciA/IGwub3B0aW9ucy5zY2hlZHVsZXIobCkgOiBsKClcbiAgICAgICAgfTtcbiAgICAgICAgcy5mb3JFYWNoKGMpXG4gICAgfVxuICAgIHZhciBZbiA9IGVyKFwiX19wcm90b19fLF9fdl9pc1JlZixfX2lzVnVlXCIpLFxuICAgICAgICB1ciA9IG5ldyBTZXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoU3ltYm9sKS5tYXAoZSA9PiBTeW1ib2xbZV0pLmZpbHRlcihRZSkpLFxuICAgICAgICBHbiA9IGhlKCksXG4gICAgICAgIEpuID0gaGUoITEsICEwKSxcbiAgICAgICAgWG4gPSBoZSghMCksXG4gICAgICAgIFpuID0gaGUoITAsICEwKSxcbiAgICAgICAgYWUgPSB7fTtcbiAgICBbXCJpbmNsdWRlc1wiLCBcImluZGV4T2ZcIiwgXCJsYXN0SW5kZXhPZlwiXS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBsZXQgdCA9IEFycmF5LnByb3RvdHlwZVtlXTtcbiAgICAgICAgYWVbZV0gPSBmdW5jdGlvbiguLi5yKSB7XG4gICAgICAgICAgICBsZXQgbiA9IF8odGhpcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBvID0gMCwgYSA9IHRoaXMubGVuZ3RoOyBvIDwgYTsgbysrKSB3KG4sIFwiZ2V0XCIsIG8gKyBcIlwiKTtcbiAgICAgICAgICAgIGxldCBpID0gdC5hcHBseShuLCByKTtcbiAgICAgICAgICAgIHJldHVybiBpID09PSAtMSB8fCBpID09PSAhMSA/IHQuYXBwbHkobiwgci5tYXAoXykpIDogaVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgW1wicHVzaFwiLCBcInBvcFwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiLCBcInNwbGljZVwiXS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBsZXQgdCA9IEFycmF5LnByb3RvdHlwZVtlXTtcbiAgICAgICAgYWVbZV0gPSBmdW5jdGlvbiguLi5yKSB7XG4gICAgICAgICAgICBVbigpO1xuICAgICAgICAgICAgbGV0IG4gPSB0LmFwcGx5KHRoaXMsIHIpO1xuICAgICAgICAgICAgcmV0dXJuIHNyKCksIG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaGUoZSA9ICExLCB0ID0gITEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4sIGksIG8pIHtcbiAgICAgICAgICAgIGlmIChpID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHJldHVybiAhZTtcbiAgICAgICAgICAgIGlmIChpID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHJldHVybiBlO1xuICAgICAgICAgICAgaWYgKGkgPT09IFwiX192X3Jhd1wiICYmIG8gPT09IChlID8gdCA/IHVpIDogd3IgOiB0ID8gc2kgOiBicikuZ2V0KG4pKSByZXR1cm4gbjtcbiAgICAgICAgICAgIGxldCBhID0gUChuKTtcbiAgICAgICAgICAgIGlmICghZSAmJiBhICYmIGRlKGFlLCBpKSkgcmV0dXJuIFJlZmxlY3QuZ2V0KGFlLCBpLCBvKTtcbiAgICAgICAgICAgIGxldCBzID0gUmVmbGVjdC5nZXQobiwgaSwgbyk7XG4gICAgICAgICAgICByZXR1cm4gKFFlKGkpID8gdXIuaGFzKGkpIDogWW4oaSkpIHx8IChlIHx8IHcobiwgXCJnZXRcIiwgaSksIHQpID8gcyA6IEJlKHMpID8gIWEgfHwgIWV0KGkpID8gcy52YWx1ZSA6IHMgOiBwZShzKSA/IGUgPyBFcihzKSA6IG90KHMpIDogc1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBRbiA9IGNyKCksXG4gICAgICAgIGVpID0gY3IoITApO1xuXG4gICAgZnVuY3Rpb24gY3IoZSA9ICExKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihyLCBuLCBpLCBvKSB7XG4gICAgICAgICAgICBsZXQgYSA9IHJbbl07XG4gICAgICAgICAgICBpZiAoIWUgJiYgKGkgPSBfKGkpLCBhID0gXyhhKSwgIVAocikgJiYgQmUoYSkgJiYgIUJlKGkpKSkgcmV0dXJuIGEudmFsdWUgPSBpLCAhMDtcbiAgICAgICAgICAgIGxldCBzID0gUChyKSAmJiBldChuKSA/IE51bWJlcihuKSA8IHIubGVuZ3RoIDogZGUociwgbiksXG4gICAgICAgICAgICAgICAgdSA9IFJlZmxlY3Quc2V0KHIsIG4sIGksIG8pO1xuICAgICAgICAgICAgcmV0dXJuIHIgPT09IF8obykgJiYgKHMgPyBvcihpLCBhKSAmJiBNKHIsIFwic2V0XCIsIG4sIGksIGEpIDogTShyLCBcImFkZFwiLCBuLCBpKSksIHVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpKGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSBkZShlLCB0KSxcbiAgICAgICAgICAgIG4gPSBlW3RdLFxuICAgICAgICAgICAgaSA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZSwgdCk7XG4gICAgICAgIHJldHVybiBpICYmIHIgJiYgTShlLCBcImRlbGV0ZVwiLCB0LCB2b2lkIDAsIG4pLCBpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmkoZSwgdCkge1xuICAgICAgICBsZXQgciA9IFJlZmxlY3QuaGFzKGUsIHQpO1xuICAgICAgICByZXR1cm4gKCFRZSh0KSB8fCAhdXIuaGFzKHQpKSAmJiB3KGUsIFwiaGFzXCIsIHQpLCByXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmkoZSkge1xuICAgICAgICByZXR1cm4gdyhlLCBcIml0ZXJhdGVcIiwgUChlKSA/IFwibGVuZ3RoXCIgOiAkKSwgUmVmbGVjdC5vd25LZXlzKGUpXG4gICAgfVxuICAgIHZhciBsciA9IHtcbiAgICAgICAgICAgIGdldDogR24sXG4gICAgICAgICAgICBzZXQ6IFFuLFxuICAgICAgICAgICAgZGVsZXRlUHJvcGVydHk6IHRpLFxuICAgICAgICAgICAgaGFzOiByaSxcbiAgICAgICAgICAgIG93bktleXM6IG5pXG4gICAgICAgIH0sXG4gICAgICAgIGZyID0ge1xuICAgICAgICAgICAgZ2V0OiBYbixcbiAgICAgICAgICAgIHNldChlLCB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgU2V0IG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyh0KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCBlKSwgITBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQcm9wZXJ0eShlLCB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgRGVsZXRlIG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyh0KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCBlKSwgITBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgamkgPSB0cih7fSwgbHIsIHtcbiAgICAgICAgICAgIGdldDogSm4sXG4gICAgICAgICAgICBzZXQ6IGVpXG4gICAgICAgIH0pLFxuICAgICAgICBGaSA9IHRyKHt9LCBmciwge1xuICAgICAgICAgICAgZ2V0OiBablxuICAgICAgICB9KSxcbiAgICAgICAgcnQgPSBlID0+IHBlKGUpID8gb3QoZSkgOiBlLFxuICAgICAgICBudCA9IGUgPT4gcGUoZSkgPyBFcihlKSA6IGUsXG4gICAgICAgIGl0ID0gZSA9PiBlLFxuICAgICAgICBnZSA9IGUgPT4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZihlKTtcblxuICAgIGZ1bmN0aW9uIHZlKGUsIHQsIHIgPSAhMSwgbiA9ICExKSB7XG4gICAgICAgIGUgPSBlLl9fdl9yYXc7XG4gICAgICAgIGxldCBpID0gXyhlKSxcbiAgICAgICAgICAgIG8gPSBfKHQpO1xuICAgICAgICB0ICE9PSBvICYmICFyICYmIHcoaSwgXCJnZXRcIiwgdCksICFyICYmIHcoaSwgXCJnZXRcIiwgbyk7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBoYXM6IGFcbiAgICAgICAgfSA9IGdlKGkpLCBzID0gbiA/IGl0IDogciA/IG50IDogcnQ7XG4gICAgICAgIGlmIChhLmNhbGwoaSwgdCkpIHJldHVybiBzKGUuZ2V0KHQpKTtcbiAgICAgICAgaWYgKGEuY2FsbChpLCBvKSkgcmV0dXJuIHMoZS5nZXQobykpO1xuICAgICAgICBlICE9PSBpICYmIGUuZ2V0KHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24geWUoZSwgdCA9ICExKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5fX3ZfcmF3LFxuICAgICAgICAgICAgbiA9IF8ociksXG4gICAgICAgICAgICBpID0gXyhlKTtcbiAgICAgICAgcmV0dXJuIGUgIT09IGkgJiYgIXQgJiYgdyhuLCBcImhhc1wiLCBlKSwgIXQgJiYgdyhuLCBcImhhc1wiLCBpKSwgZSA9PT0gaSA/IHIuaGFzKGUpIDogci5oYXMoZSkgfHwgci5oYXMoaSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB4ZShlLCB0ID0gITEpIHtcbiAgICAgICAgcmV0dXJuIGUgPSBlLl9fdl9yYXcsICF0ICYmIHcoXyhlKSwgXCJpdGVyYXRlXCIsICQpLCBSZWZsZWN0LmdldChlLCBcInNpemVcIiwgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcihlKSB7XG4gICAgICAgIGUgPSBfKGUpO1xuICAgICAgICBsZXQgdCA9IF8odGhpcyk7XG4gICAgICAgIHJldHVybiBnZSh0KS5oYXMuY2FsbCh0LCBlKSB8fCAodC5hZGQoZSksIE0odCwgXCJhZGRcIiwgZSwgZSkpLCB0aGlzXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHIoZSwgdCkge1xuICAgICAgICB0ID0gXyh0KTtcbiAgICAgICAgbGV0IHIgPSBfKHRoaXMpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhczogbixcbiAgICAgICAgICAgICAgICBnZXQ6IGlcbiAgICAgICAgICAgIH0gPSBnZShyKSxcbiAgICAgICAgICAgIG8gPSBuLmNhbGwociwgZSk7XG4gICAgICAgIG8gPyBtcihyLCBuLCBlKSA6IChlID0gXyhlKSwgbyA9IG4uY2FsbChyLCBlKSk7XG4gICAgICAgIGxldCBhID0gaS5jYWxsKHIsIGUpO1xuICAgICAgICByZXR1cm4gci5zZXQoZSwgdCksIG8gPyBvcih0LCBhKSAmJiBNKHIsIFwic2V0XCIsIGUsIHQsIGEpIDogTShyLCBcImFkZFwiLCBlLCB0KSwgdGhpc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yKGUpIHtcbiAgICAgICAgbGV0IHQgPSBfKHRoaXMpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhczogcixcbiAgICAgICAgICAgICAgICBnZXQ6IG5cbiAgICAgICAgICAgIH0gPSBnZSh0KSxcbiAgICAgICAgICAgIGkgPSByLmNhbGwodCwgZSk7XG4gICAgICAgIGkgPyBtcih0LCByLCBlKSA6IChlID0gXyhlKSwgaSA9IHIuY2FsbCh0LCBlKSk7XG4gICAgICAgIGxldCBvID0gbiA/IG4uY2FsbCh0LCBlKSA6IHZvaWQgMCxcbiAgICAgICAgICAgIGEgPSB0LmRlbGV0ZShlKTtcbiAgICAgICAgcmV0dXJuIGkgJiYgTSh0LCBcImRlbGV0ZVwiLCBlLCB2b2lkIDAsIG8pLCBhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaHIoKSB7XG4gICAgICAgIGxldCBlID0gXyh0aGlzKSxcbiAgICAgICAgICAgIHQgPSBlLnNpemUgIT09IDAsXG4gICAgICAgICAgICByID0gVihlKSA/IG5ldyBNYXAoZSkgOiBuZXcgU2V0KGUpLFxuICAgICAgICAgICAgbiA9IGUuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHQgJiYgTShlLCBcImNsZWFyXCIsIHZvaWQgMCwgdm9pZCAwLCByKSwgblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4sIGkpIHtcbiAgICAgICAgICAgIGxldCBvID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhID0gby5fX3ZfcmF3LFxuICAgICAgICAgICAgICAgIHMgPSBfKGEpLFxuICAgICAgICAgICAgICAgIHUgPSB0ID8gaXQgOiBlID8gbnQgOiBydDtcbiAgICAgICAgICAgIHJldHVybiAhZSAmJiB3KHMsIFwiaXRlcmF0ZVwiLCAkKSwgYS5mb3JFYWNoKChjLCBsKSA9PiBuLmNhbGwoaSwgdShjKSwgdShsKSwgbykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZShlLCB0LCByKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiguLi5uKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMuX192X3JhdyxcbiAgICAgICAgICAgICAgICBvID0gXyhpKSxcbiAgICAgICAgICAgICAgICBhID0gVihvKSxcbiAgICAgICAgICAgICAgICBzID0gZSA9PT0gXCJlbnRyaWVzXCIgfHwgZSA9PT0gU3ltYm9sLml0ZXJhdG9yICYmIGEsXG4gICAgICAgICAgICAgICAgdSA9IGUgPT09IFwia2V5c1wiICYmIGEsXG4gICAgICAgICAgICAgICAgYyA9IGlbZV0oLi4ubiksXG4gICAgICAgICAgICAgICAgbCA9IHIgPyBpdCA6IHQgPyBudCA6IHJ0O1xuICAgICAgICAgICAgcmV0dXJuICF0ICYmIHcobywgXCJpdGVyYXRlXCIsIHUgPyBrZSA6ICQpLCB7XG4gICAgICAgICAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogaFxuICAgICAgICAgICAgICAgICAgICB9ID0gYy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBoXG4gICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcyA/IFtsKGRbMF0pLCBsKGRbMV0pXSA6IGwoZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBoXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIE8oZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oLi4udCkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCByID0gdFswXSA/IGBvbiBrZXkgXCIke3RbMF19XCIgYCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2lyKGUpfSBvcGVyYXRpb24gJHtyfWZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIF8odGhpcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gXCJkZWxldGVcIiA/ICExIDogdGhpc1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBnciA9IHtcbiAgICAgICAgICAgIGdldChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlKHRoaXMsIGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhlKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzOiB5ZSxcbiAgICAgICAgICAgIGFkZDogZHIsXG4gICAgICAgICAgICBzZXQ6IHByLFxuICAgICAgICAgICAgZGVsZXRlOiBfcixcbiAgICAgICAgICAgIGNsZWFyOiBocixcbiAgICAgICAgICAgIGZvckVhY2g6IG1lKCExLCAhMSlcbiAgICAgICAgfSxcbiAgICAgICAgdnIgPSB7XG4gICAgICAgICAgICBnZXQoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZSh0aGlzLCBlLCAhMSwgITApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhlKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzOiB5ZSxcbiAgICAgICAgICAgIGFkZDogZHIsXG4gICAgICAgICAgICBzZXQ6IHByLFxuICAgICAgICAgICAgZGVsZXRlOiBfcixcbiAgICAgICAgICAgIGNsZWFyOiBocixcbiAgICAgICAgICAgIGZvckVhY2g6IG1lKCExLCAhMClcbiAgICAgICAgfSxcbiAgICAgICAgeXIgPSB7XG4gICAgICAgICAgICBnZXQoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZSh0aGlzLCBlLCAhMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geGUodGhpcywgITApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWUuY2FsbCh0aGlzLCBlLCAhMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGQ6IE8oXCJhZGRcIiksXG4gICAgICAgICAgICBzZXQ6IE8oXCJzZXRcIiksXG4gICAgICAgICAgICBkZWxldGU6IE8oXCJkZWxldGVcIiksXG4gICAgICAgICAgICBjbGVhcjogTyhcImNsZWFyXCIpLFxuICAgICAgICAgICAgZm9yRWFjaDogbWUoITAsICExKVxuICAgICAgICB9LFxuICAgICAgICB4ciA9IHtcbiAgICAgICAgICAgIGdldChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlKHRoaXMsIGUsICEwLCAhMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geGUodGhpcywgITApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWUuY2FsbCh0aGlzLCBlLCAhMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGQ6IE8oXCJhZGRcIiksXG4gICAgICAgICAgICBzZXQ6IE8oXCJzZXRcIiksXG4gICAgICAgICAgICBkZWxldGU6IE8oXCJkZWxldGVcIiksXG4gICAgICAgICAgICBjbGVhcjogTyhcImNsZWFyXCIpLFxuICAgICAgICAgICAgZm9yRWFjaDogbWUoITAsICEwKVxuICAgICAgICB9LFxuICAgICAgICBpaSA9IFtcImtleXNcIiwgXCJ2YWx1ZXNcIiwgXCJlbnRyaWVzXCIsIFN5bWJvbC5pdGVyYXRvcl07XG4gICAgaWkuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZ3JbZV0gPSByZShlLCAhMSwgITEpLCB5cltlXSA9IHJlKGUsICEwLCAhMSksIHZyW2VdID0gcmUoZSwgITEsICEwKSwgeHJbZV0gPSByZShlLCAhMCwgITApXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBiZShlLCB0KSB7XG4gICAgICAgIGxldCByID0gdCA/IGUgPyB4ciA6IHZyIDogZSA/IHlyIDogZ3I7XG4gICAgICAgIHJldHVybiAobiwgaSwgbykgPT4gaSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiID8gIWUgOiBpID09PSBcIl9fdl9pc1JlYWRvbmx5XCIgPyBlIDogaSA9PT0gXCJfX3ZfcmF3XCIgPyBuIDogUmVmbGVjdC5nZXQoZGUociwgaSkgJiYgaSBpbiBuID8gciA6IG4sIGksIG8pXG4gICAgfVxuICAgIHZhciBvaSA9IHtcbiAgICAgICAgICAgIGdldDogYmUoITEsICExKVxuICAgICAgICB9LFxuICAgICAgICBLaSA9IHtcbiAgICAgICAgICAgIGdldDogYmUoITEsICEwKVxuICAgICAgICB9LFxuICAgICAgICBhaSA9IHtcbiAgICAgICAgICAgIGdldDogYmUoITAsICExKVxuICAgICAgICB9LFxuICAgICAgICBEaSA9IHtcbiAgICAgICAgICAgIGdldDogYmUoITAsICEwKVxuICAgICAgICB9O1xuXG4gICAgZnVuY3Rpb24gbXIoZSwgdCwgcikge1xuICAgICAgICBsZXQgbiA9IF8ocik7XG4gICAgICAgIGlmIChuICE9PSByICYmIHQuY2FsbChlLCBuKSkge1xuICAgICAgICAgICAgbGV0IGkgPSBucihlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3RpdmUgJHtpfSBjb250YWlucyBib3RoIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIHRoZSBzYW1lIG9iamVjdCR7aT09PVwiTWFwXCI/XCIgYXMga2V5c1wiOlwiXCJ9LCB3aGljaCBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbmNpZXMuIEF2b2lkIGRpZmZlcmVudGlhdGluZyBiZXR3ZWVuIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIGFuIG9iamVjdCBhbmQgb25seSB1c2UgdGhlIHJlYWN0aXZlIHZlcnNpb24gaWYgcG9zc2libGUuYClcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYnIgPSBuZXcgV2Vha01hcCxcbiAgICAgICAgc2kgPSBuZXcgV2Vha01hcCxcbiAgICAgICAgd3IgPSBuZXcgV2Vha01hcCxcbiAgICAgICAgdWkgPSBuZXcgV2Vha01hcDtcblxuICAgIGZ1bmN0aW9uIGNpKGUpIHtcbiAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGNhc2UgXCJNYXBcIjpcbiAgICAgICAgICAgIGNhc2UgXCJTZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJXZWFrTWFwXCI6XG4gICAgICAgICAgICBjYXNlIFwiV2Vha1NldFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGkoZSkge1xuICAgICAgICByZXR1cm4gZS5fX3Zfc2tpcCB8fCAhT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSA/IDAgOiBjaShucihlKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX192X2lzUmVhZG9ubHkgPyBlIDogQXIoZSwgITEsIGxyLCBvaSwgYnIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRXIoZSkge1xuICAgICAgICByZXR1cm4gQXIoZSwgITAsIGZyLCBhaSwgd3IpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQXIoZSwgdCwgciwgbiwgaSkge1xuICAgICAgICBpZiAoIXBlKGUpKSByZXR1cm4gY29uc29sZS53YXJuKGB2YWx1ZSBjYW5ub3QgYmUgbWFkZSByZWFjdGl2ZTogJHtTdHJpbmcoZSl9YCksIGU7XG4gICAgICAgIGlmIChlLl9fdl9yYXcgJiYgISh0ICYmIGUuX192X2lzUmVhY3RpdmUpKSByZXR1cm4gZTtcbiAgICAgICAgbGV0IG8gPSBpLmdldChlKTtcbiAgICAgICAgaWYgKG8pIHJldHVybiBvO1xuICAgICAgICBsZXQgYSA9IGxpKGUpO1xuICAgICAgICBpZiAoYSA9PT0gMCkgcmV0dXJuIGU7XG4gICAgICAgIGxldCBzID0gbmV3IFByb3h5KGUsIGEgPT09IDIgPyBuIDogcik7XG4gICAgICAgIHJldHVybiBpLnNldChlLCBzKSwgc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF8oZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBfKGUuX192X3JhdykgfHwgZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEJlKGUpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZSAmJiBlLl9fdl9pc1JlZiA9PT0gITApXG4gICAgfVxuICAgIEUoXCJuZXh0VGlja1wiLCAoKSA9PiBEdCk7XG4gICAgRShcImRpc3BhdGNoXCIsIGUgPT4gVS5iaW5kKFUsIGUpKTtcbiAgICBFKFwid2F0Y2hcIiwgKGUsIHtcbiAgICAgICAgZXZhbHVhdGVMYXRlcjogdCxcbiAgICAgICAgZWZmZWN0OiByXG4gICAgfSkgPT4gKG4sIGkpID0+IHtcbiAgICAgICAgbGV0IG8gPSB0KG4pLFxuICAgICAgICAgICAgYSA9ICEwLFxuICAgICAgICAgICAgcywgdSA9IHIoKCkgPT4gbyhjID0+IHtcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjKSwgYSA/IHMgPSBjIDogcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpKGMsIHMpLCBzID0gY1xuICAgICAgICAgICAgICAgIH0pLCBhID0gITFcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgZS5feF9lZmZlY3RzLmRlbGV0ZSh1KVxuICAgIH0pO1xuICAgIEUoXCJzdG9yZVwiLCBNbik7XG4gICAgRShcImRhdGFcIiwgZSA9PiBBdChlKSk7XG4gICAgRShcInJvb3RcIiwgZSA9PiB1ZShlKSk7XG4gICAgRShcInJlZnNcIiwgZSA9PiAoZS5feF9yZWZzX3Byb3h5IHx8IChlLl94X3JlZnNfcHJveHkgPSBYKGZpKGUpKSksIGUuX3hfcmVmc19wcm94eSkpO1xuXG4gICAgZnVuY3Rpb24gZmkoZSkge1xuICAgICAgICBsZXQgdCA9IFtdLFxuICAgICAgICAgICAgciA9IGU7XG4gICAgICAgIGZvciAoOyByOykgci5feF9yZWZzICYmIHQucHVzaChyLl94X3JlZnMpLCByID0gci5wYXJlbnROb2RlO1xuICAgICAgICByZXR1cm4gdFxuICAgIH1cbiAgICB2YXIgU2UgPSB7fTtcblxuICAgIGZ1bmN0aW9uIFNyKGUpIHtcbiAgICAgICAgcmV0dXJuIFNlW2VdIHx8IChTZVtlXSA9IDApLCArK1NlW2VdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGkoZSwgdCkge1xuICAgICAgICByZXR1cm4gY2UoZSwgciA9PiB7XG4gICAgICAgICAgICBpZiAoci5feF9pZHMgJiYgci5feF9pZHNbdF0pIHJldHVybiAhMFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBpKGUsIHQpIHtcbiAgICAgICAgZS5feF9pZHMgfHwgKGUuX3hfaWRzID0ge30pLCBlLl94X2lkc1t0XSB8fCAoZS5feF9pZHNbdF0gPSBTcih0KSlcbiAgICB9XG4gICAgRShcImlkXCIsIGUgPT4gKHQsIHIgPSBudWxsKSA9PiB7XG4gICAgICAgIGxldCBuID0gZGkoZSwgdCksXG4gICAgICAgICAgICBpID0gbiA/IG4uX3hfaWRzW3RdIDogU3IodCk7XG4gICAgICAgIHJldHVybiByID8gYCR7dH0tJHtpfS0ke3J9YCA6IGAke3R9LSR7aX1gXG4gICAgfSk7XG4gICAgRShcImVsXCIsIGUgPT4gZSk7XG4gICAgT3IoXCJGb2N1c1wiLCBcImZvY3VzXCIsIFwiZm9jdXNcIik7XG4gICAgT3IoXCJQZXJzaXN0XCIsIFwicGVyc2lzdFwiLCBcInBlcnNpc3RcIik7XG5cbiAgICBmdW5jdGlvbiBPcihlLCB0LCByKSB7XG4gICAgICAgIEUodCwgbiA9PiBLKGBZb3UgY2FuJ3QgdXNlIFskJHtkaXJlY3RpdmVOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7ZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3J9YCwgbikpXG4gICAgfVxuICAgIGcoXCJtb2RlbGFibGVcIiwgKGUsIHtcbiAgICAgICAgZXhwcmVzc2lvbjogdFxuICAgIH0sIHtcbiAgICAgICAgZWZmZWN0OiByLFxuICAgICAgICBldmFsdWF0ZUxhdGVyOiBuXG4gICAgfSkgPT4ge1xuICAgICAgICBsZXQgaSA9IG4odCksXG4gICAgICAgICAgICBvID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjO1xuICAgICAgICAgICAgICAgIHJldHVybiBpKGwgPT4gYyA9IGwpLCBjXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYSA9IG4oYCR7dH0gPSBfX3BsYWNlaG9sZGVyYCksXG4gICAgICAgICAgICBzID0gYyA9PiBhKCgpID0+IHt9LCB7XG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgX19wbGFjZWhvbGRlcjogY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdSA9IG8oKTtcbiAgICAgICAgcyh1KSwgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLl94X21vZGVsKSByZXR1cm47XG4gICAgICAgICAgICBlLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBjID0gZS5feF9tb2RlbC5nZXQsXG4gICAgICAgICAgICAgICAgbCA9IGUuX3hfbW9kZWwuc2V0O1xuICAgICAgICAgICAgcigoKSA9PiBzKGMoKSkpLCByKCgpID0+IGwobygpKSlcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBnKFwidGVsZXBvcnRcIiwgKGUsIHtcbiAgICAgICAgZXhwcmVzc2lvbjogdFxuICAgIH0sIHtcbiAgICAgICAgY2xlYW51cDogclxuICAgIH0pID0+IHtcbiAgICAgICAgZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwidGVtcGxhdGVcIiAmJiBLKFwieC10ZWxlcG9ydCBjYW4gb25seSBiZSB1c2VkIG9uIGEgPHRlbXBsYXRlPiB0YWdcIiwgZSk7XG4gICAgICAgIGxldCBuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtcbiAgICAgICAgbiB8fCBLKGBDYW5ub3QgZmluZCB4LXRlbGVwb3J0IGVsZW1lbnQgZm9yIHNlbGVjdG9yOiBcIiR7dH1cImApO1xuICAgICAgICBsZXQgaSA9IGUuY29udGVudC5jbG9uZU5vZGUoITApLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBlLl94X3RlbGVwb3J0ID0gaSwgaS5feF90ZWxlcG9ydEJhY2sgPSBlLCBlLl94X2ZvcndhcmRFdmVudHMgJiYgZS5feF9mb3J3YXJkRXZlbnRzLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIobywgYSA9PiB7XG4gICAgICAgICAgICAgICAgYS5zdG9wUHJvcGFnYXRpb24oKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBhLmNvbnN0cnVjdG9yKGEudHlwZSwgYSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSwgSihpLCB7fSwgZSksIHkoKCkgPT4ge1xuICAgICAgICAgICAgbi5hcHBlbmRDaGlsZChpKSwgQyhpKSwgaS5feF9pZ25vcmUgPSAhMFxuICAgICAgICB9KSwgcigoKSA9PiBpLnJlbW92ZSgpKVxuICAgIH0pO1xuICAgIHZhciBDciA9ICgpID0+IHt9O1xuICAgIENyLmlubGluZSA9IChlLCB7XG4gICAgICAgIG1vZGlmaWVyczogdFxuICAgIH0sIHtcbiAgICAgICAgY2xlYW51cDogclxuICAgIH0pID0+IHtcbiAgICAgICAgdC5pbmNsdWRlcyhcInNlbGZcIikgPyBlLl94X2lnbm9yZVNlbGYgPSAhMCA6IGUuX3hfaWdub3JlID0gITAsIHIoKCkgPT4ge1xuICAgICAgICAgICAgdC5pbmNsdWRlcyhcInNlbGZcIikgPyBkZWxldGUgZS5feF9pZ25vcmVTZWxmIDogZGVsZXRlIGUuX3hfaWdub3JlXG4gICAgICAgIH0pXG4gICAgfTtcbiAgICBnKFwiaWdub3JlXCIsIENyKTtcbiAgICBnKFwiZWZmZWN0XCIsIChlLCB7XG4gICAgICAgIGV4cHJlc3Npb246IHRcbiAgICB9LCB7XG4gICAgICAgIGVmZmVjdDogclxuICAgIH0pID0+IHIobShlLCB0KSkpO1xuXG4gICAgZnVuY3Rpb24gTXIoZSwgdCwgciwgbikge1xuICAgICAgICBsZXQgaSA9IGUsXG4gICAgICAgICAgICBvID0gdSA9PiBuKHUpLFxuICAgICAgICAgICAgYSA9IHt9LFxuICAgICAgICAgICAgcyA9ICh1LCBjKSA9PiBsID0+IGModSwgbCk7XG4gICAgICAgIGlmIChyLmluY2x1ZGVzKFwiZG90XCIpICYmICh0ID0gX2kodCkpLCByLmluY2x1ZGVzKFwiY2FtZWxcIikgJiYgKHQgPSBoaSh0KSksIHIuaW5jbHVkZXMoXCJwYXNzaXZlXCIpICYmIChhLnBhc3NpdmUgPSAhMCksIHIuaW5jbHVkZXMoXCJjYXB0dXJlXCIpICYmIChhLmNhcHR1cmUgPSAhMCksIHIuaW5jbHVkZXMoXCJ3aW5kb3dcIikgJiYgKGkgPSB3aW5kb3cpLCByLmluY2x1ZGVzKFwiZG9jdW1lbnRcIikgJiYgKGkgPSBkb2N1bWVudCksIHIuaW5jbHVkZXMoXCJwcmV2ZW50XCIpICYmIChvID0gcyhvLCAodSwgYykgPT4ge1xuICAgICAgICAgICAgICAgIGMucHJldmVudERlZmF1bHQoKSwgdShjKVxuICAgICAgICAgICAgfSkpLCByLmluY2x1ZGVzKFwic3RvcFwiKSAmJiAobyA9IHMobywgKHUsIGMpID0+IHtcbiAgICAgICAgICAgICAgICBjLnN0b3BQcm9wYWdhdGlvbigpLCB1KGMpXG4gICAgICAgICAgICB9KSksIHIuaW5jbHVkZXMoXCJzZWxmXCIpICYmIChvID0gcyhvLCAodSwgYykgPT4ge1xuICAgICAgICAgICAgICAgIGMudGFyZ2V0ID09PSBlICYmIHUoYylcbiAgICAgICAgICAgIH0pKSwgKHIuaW5jbHVkZXMoXCJhd2F5XCIpIHx8IHIuaW5jbHVkZXMoXCJvdXRzaWRlXCIpKSAmJiAoaSA9IGRvY3VtZW50LCBvID0gcyhvLCAodSwgYykgPT4ge1xuICAgICAgICAgICAgICAgIGUuY29udGFpbnMoYy50YXJnZXQpIHx8IGMudGFyZ2V0LmlzQ29ubmVjdGVkICE9PSAhMSAmJiAoZS5vZmZzZXRXaWR0aCA8IDEgJiYgZS5vZmZzZXRIZWlnaHQgPCAxIHx8IGUuX3hfaXNTaG93biAhPT0gITEgJiYgdShjKSlcbiAgICAgICAgICAgIH0pKSwgci5pbmNsdWRlcyhcIm9uY2VcIikgJiYgKG8gPSBzKG8sICh1LCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgdShjKSwgaS5yZW1vdmVFdmVudExpc3RlbmVyKHQsIG8sIGEpXG4gICAgICAgICAgICB9KSksIG8gPSBzKG8sICh1LCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgdmkodCkgJiYgeWkoYywgcikgfHwgdShjKVxuICAgICAgICAgICAgfSksIHIuaW5jbHVkZXMoXCJkZWJvdW5jZVwiKSkge1xuICAgICAgICAgICAgbGV0IHUgPSByW3IuaW5kZXhPZihcImRlYm91bmNlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIixcbiAgICAgICAgICAgICAgICBjID0gSGUodS5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcih1LnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgICAgICAgICAgbyA9IEp0KG8sIGMpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgICAgICAgICAgbGV0IHUgPSByW3IuaW5kZXhPZihcInRocm90dGxlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIixcbiAgICAgICAgICAgICAgICBjID0gSGUodS5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcih1LnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgICAgICAgICAgbyA9IFh0KG8sIGMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkuYWRkRXZlbnRMaXN0ZW5lcih0LCBvLCBhKSwgKCkgPT4ge1xuICAgICAgICAgICAgaS5yZW1vdmVFdmVudExpc3RlbmVyKHQsIG8sIGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaShlKSB7XG4gICAgICAgIHJldHVybiBlLnJlcGxhY2UoLy0vZywgXCIuXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGkoZSkge1xuICAgICAgICByZXR1cm4gZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAodCwgcikgPT4gci50b1VwcGVyQ2FzZSgpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEhlKGUpIHtcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KGUpICYmICFpc05hTihlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdpKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS5yZXBsYWNlKC9bX1xcc10vLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpKGUpIHtcbiAgICAgICAgcmV0dXJuIFtcImtleWRvd25cIiwgXCJrZXl1cFwiXS5pbmNsdWRlcyhlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHlpKGUsIHQpIHtcbiAgICAgICAgbGV0IHIgPSB0LmZpbHRlcihvID0+ICFbXCJ3aW5kb3dcIiwgXCJkb2N1bWVudFwiLCBcInByZXZlbnRcIiwgXCJzdG9wXCIsIFwib25jZVwiXS5pbmNsdWRlcyhvKSk7XG4gICAgICAgIGlmIChyLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICAgICAgICAgIGxldCBvID0gci5pbmRleE9mKFwiZGVib3VuY2VcIik7XG4gICAgICAgICAgICByLnNwbGljZShvLCBIZSgocltvICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIikuc3BsaXQoXCJtc1wiKVswXSkgPyAyIDogMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoci5sZW5ndGggPT09IDAgfHwgci5sZW5ndGggPT09IDEgJiYgZHQoZS5rZXkpLmluY2x1ZGVzKHJbMF0pKSByZXR1cm4gITE7XG4gICAgICAgIGxldCBpID0gW1wiY3RybFwiLCBcInNoaWZ0XCIsIFwiYWx0XCIsIFwibWV0YVwiLCBcImNtZFwiLCBcInN1cGVyXCJdLmZpbHRlcihvID0+IHIuaW5jbHVkZXMobykpO1xuICAgICAgICByZXR1cm4gciA9IHIuZmlsdGVyKG8gPT4gIWkuaW5jbHVkZXMobykpLCAhKGkubGVuZ3RoID4gMCAmJiBpLmZpbHRlcihhID0+ICgoYSA9PT0gXCJjbWRcIiB8fCBhID09PSBcInN1cGVyXCIpICYmIChhID0gXCJtZXRhXCIpLCBlW2Ake2F9S2V5YF0pKS5sZW5ndGggPT09IGkubGVuZ3RoICYmIGR0KGUua2V5KS5pbmNsdWRlcyhyWzBdKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkdChlKSB7XG4gICAgICAgIGlmICghZSkgcmV0dXJuIFtdO1xuICAgICAgICBlID0gZ2koZSk7XG4gICAgICAgIGxldCB0ID0ge1xuICAgICAgICAgICAgY3RybDogXCJjb250cm9sXCIsXG4gICAgICAgICAgICBzbGFzaDogXCIvXCIsXG4gICAgICAgICAgICBzcGFjZTogXCItXCIsXG4gICAgICAgICAgICBzcGFjZWJhcjogXCItXCIsXG4gICAgICAgICAgICBjbWQ6IFwibWV0YVwiLFxuICAgICAgICAgICAgZXNjOiBcImVzY2FwZVwiLFxuICAgICAgICAgICAgdXA6IFwiYXJyb3ctdXBcIixcbiAgICAgICAgICAgIGRvd246IFwiYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgbGVmdDogXCJhcnJvdy1sZWZ0XCIsXG4gICAgICAgICAgICByaWdodDogXCJhcnJvdy1yaWdodFwiLFxuICAgICAgICAgICAgcGVyaW9kOiBcIi5cIixcbiAgICAgICAgICAgIGVxdWFsOiBcIj1cIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdFtlXSA9IGUsIE9iamVjdC5rZXlzKHQpLm1hcChyID0+IHtcbiAgICAgICAgICAgIGlmICh0W3JdID09PSBlKSByZXR1cm4gclxuICAgICAgICB9KS5maWx0ZXIociA9PiByKVxuICAgIH1cbiAgICBnKFwibW9kZWxcIiwgKGUsIHtcbiAgICAgICAgbW9kaWZpZXJzOiB0LFxuICAgICAgICBleHByZXNzaW9uOiByXG4gICAgfSwge1xuICAgICAgICBlZmZlY3Q6IG4sXG4gICAgICAgIGNsZWFudXA6IGlcbiAgICB9KSA9PiB7XG4gICAgICAgIGxldCBvID0gbShlLCByKSxcbiAgICAgICAgICAgIGEgPSBgJHtyfSA9IHJpZ2h0U2lkZU9mRXhwcmVzc2lvbigkZXZlbnQsICR7cn0pYCxcbiAgICAgICAgICAgIHMgPSBtKGUsIGEpO1xuICAgICAgICB2YXIgdSA9IGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiIHx8IFtcImNoZWNrYm94XCIsIFwicmFkaW9cIl0uaW5jbHVkZXMoZS50eXBlKSB8fCB0LmluY2x1ZGVzKFwibGF6eVwiKSA/IFwiY2hhbmdlXCIgOiBcImlucHV0XCI7XG4gICAgICAgIGxldCBjID0geGkoZSwgdCwgciksXG4gICAgICAgICAgICBsID0gTXIoZSwgdSwgdCwgaCA9PiB7XG4gICAgICAgICAgICAgICAgcygoKSA9PiB7fSwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTaWRlT2ZFeHByZXNzaW9uOiBjXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGUuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMgfHwgKGUuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMgPSB7fSksIGUuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMuZGVmYXVsdCA9IGwsIGkoKCkgPT4gZS5feF9yZW1vdmVNb2RlbExpc3RlbmVycy5kZWZhdWx0KCkpO1xuICAgICAgICBsZXQgZCA9IG0oZSwgYCR7cn0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gICAgICAgIGUuX3hfbW9kZWwgPSB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8oUyA9PiBoID0gUyksIGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQoaCkge1xuICAgICAgICAgICAgICAgIGQoKCkgPT4ge30sIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fcGxhY2Vob2xkZXI6IGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGUuX3hfZm9yY2VNb2RlbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG8oaCA9PiB7XG4gICAgICAgICAgICAgICAgaCA9PT0gdm9pZCAwICYmIHIubWF0Y2goL1xcLi8pICYmIChoID0gXCJcIiksIHdpbmRvdy5mcm9tTW9kZWwgPSAhMCwgeSgoKSA9PiBZdChlLCBcInZhbHVlXCIsIGgpKSwgZGVsZXRlIHdpbmRvdy5mcm9tTW9kZWxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIG4oKCkgPT4ge1xuICAgICAgICAgICAgdC5pbmNsdWRlcyhcInVuaW50cnVzaXZlXCIpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaXNTYW1lTm9kZShlKSB8fCBlLl94X2ZvcmNlTW9kZWxVcGRhdGUoKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24geGkoZSwgdCwgcikge1xuICAgICAgICByZXR1cm4gZS50eXBlID09PSBcInJhZGlvXCIgJiYgeSgoKSA9PiB7XG4gICAgICAgICAgICBlLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikgfHwgZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHIpXG4gICAgICAgIH0pLCAobiwgaSkgPT4geSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50ICYmIG4uZGV0YWlsICE9PSB2b2lkIDApIHJldHVybiBuLmRldGFpbCB8fCBuLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiY2hlY2tib3hcIilcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbyA9IHQuaW5jbHVkZXMoXCJudW1iZXJcIikgPyBPZShuLnRhcmdldC52YWx1ZSkgOiBuLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4udGFyZ2V0LmNoZWNrZWQgPyBpLmNvbmNhdChbb10pIDogaS5maWx0ZXIoYSA9PiAhbWkoYSwgbykpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBuLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiICYmIGUubXVsdGlwbGUpIHJldHVybiB0LmluY2x1ZGVzKFwibnVtYmVyXCIpID8gQXJyYXkuZnJvbShuLnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcChvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBvLnZhbHVlIHx8IG8udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9lKGEpXG4gICAgICAgICAgICAgICAgfSkgOiBBcnJheS5mcm9tKG4udGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKG8gPT4gby52YWx1ZSB8fCBvLnRleHQpOyB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvID0gbi50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmluY2x1ZGVzKFwibnVtYmVyXCIpID8gT2UobykgOiB0LmluY2x1ZGVzKFwidHJpbVwiKSA/IG8udHJpbSgpIDogb1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPZShlKSB7XG4gICAgICAgIGxldCB0ID0gZSA/IHBhcnNlRmxvYXQoZSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gYmkodCkgPyB0IDogZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1pKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUgPT0gdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpKGUpIHtcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KGUpICYmICFpc05hTihlKVxuICAgIH1cbiAgICBnKFwiY2xvYWtcIiwgZSA9PiBxdWV1ZU1pY3JvdGFzaygoKSA9PiB5KCgpID0+IGUucmVtb3ZlQXR0cmlidXRlKEIoXCJjbG9ha1wiKSkpKSk7XG4gICAgenQoKCkgPT4gYFske0IoXCJpbml0XCIpfV1gKTtcbiAgICBnKFwiaW5pdFwiLCBmZSgoZSwge1xuICAgICAgICBleHByZXNzaW9uOiB0XG4gICAgfSwge1xuICAgICAgICBldmFsdWF0ZTogclxuICAgIH0pID0+IHR5cGVvZiB0ID09IFwic3RyaW5nXCIgPyAhIXQudHJpbSgpICYmIHIodCwge30sICExKSA6IHIodCwge30sICExKSkpO1xuICAgIGcoXCJ0ZXh0XCIsIChlLCB7XG4gICAgICAgIGV4cHJlc3Npb246IHRcbiAgICB9LCB7XG4gICAgICAgIGVmZmVjdDogcixcbiAgICAgICAgZXZhbHVhdGVMYXRlcjogblxuICAgIH0pID0+IHtcbiAgICAgICAgbGV0IGkgPSBuKHQpO1xuICAgICAgICByKCgpID0+IHtcbiAgICAgICAgICAgIGkobyA9PiB7XG4gICAgICAgICAgICAgICAgeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBvXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgZyhcImh0bWxcIiwgKGUsIHtcbiAgICAgICAgZXhwcmVzc2lvbjogdFxuICAgIH0sIHtcbiAgICAgICAgZWZmZWN0OiByLFxuICAgICAgICBldmFsdWF0ZUxhdGVyOiBuXG4gICAgfSkgPT4ge1xuICAgICAgICBsZXQgaSA9IG4odCk7XG4gICAgICAgIHIoKCkgPT4ge1xuICAgICAgICAgICAgaShvID0+IHtcbiAgICAgICAgICAgICAgICB5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBvLCBlLl94X2lnbm9yZVNlbGYgPSAhMCwgQyhlKSwgZGVsZXRlIGUuX3hfaWdub3JlU2VsZlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIEdlKEl0KFwiOlwiLCBMdChCKFwiYmluZDpcIikpKSk7XG4gICAgZyhcImJpbmRcIiwgKGUsIHtcbiAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgIG1vZGlmaWVyczogcixcbiAgICAgICAgZXhwcmVzc2lvbjogbixcbiAgICAgICAgb3JpZ2luYWw6IGlcbiAgICB9LCB7XG4gICAgICAgIGVmZmVjdDogb1xuICAgIH0pID0+IHtcbiAgICAgICAgaWYgKCF0KSByZXR1cm4gd2koZSwgbiwgaSwgbyk7XG4gICAgICAgIGlmICh0ID09PSBcImtleVwiKSByZXR1cm4gRWkoZSwgbik7XG4gICAgICAgIGxldCBhID0gbShlLCBuKTtcbiAgICAgICAgbygoKSA9PiBhKHMgPT4ge1xuICAgICAgICAgICAgcyA9PT0gdm9pZCAwICYmIG4ubWF0Y2goL1xcLi8pICYmIChzID0gXCJcIiksIHkoKCkgPT4gWXQoZSwgdCwgcywgcikpXG4gICAgICAgIH0pKVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gd2koZSwgdCwgciwgbikge1xuICAgICAgICBsZXQgaSA9IHt9O1xuICAgICAgICBSbihpKTtcbiAgICAgICAgbGV0IG8gPSBtKGUsIHQpLFxuICAgICAgICAgICAgYSA9IFtdO1xuICAgICAgICBmb3IgKDsgYS5sZW5ndGg7KSBhLnBvcCgpKCk7XG4gICAgICAgIG8ocyA9PiB7XG4gICAgICAgICAgICBsZXQgdSA9IE9iamVjdC5lbnRyaWVzKHMpLm1hcCgoW2wsIGRdKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBsLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICBjID0gWnIodSk7XG4gICAgICAgICAgICB1ID0gdS5tYXAobCA9PiBjLmZpbmQoZCA9PiBkLm5hbWUgPT09IGwubmFtZSkgPyB7XG4gICAgICAgICAgICAgICAgbmFtZTogYHgtYmluZDoke2wubmFtZX1gLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBgXCIke2wudmFsdWV9XCJgXG4gICAgICAgICAgICB9IDogbCksIFllKGUsIHUsIHIpLm1hcChsID0+IHtcbiAgICAgICAgICAgICAgICBhLnB1c2gobC5ydW5DbGVhbnVwcyksIGwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2NvcGU6IGlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBFaShlLCB0KSB7XG4gICAgICAgIGUuX3hfa2V5RXhwcmVzc2lvbiA9IHRcbiAgICB9XG4gICAgcXQoKCkgPT4gYFske0IoXCJkYXRhXCIpfV1gKTtcbiAgICBnKFwiZGF0YVwiLCBmZSgoZSwge1xuICAgICAgICBleHByZXNzaW9uOiB0XG4gICAgfSwge1xuICAgICAgICBjbGVhbnVwOiByXG4gICAgfSkgPT4ge1xuICAgICAgICB0ID0gdCA9PT0gXCJcIiA/IFwie31cIiA6IHQ7XG4gICAgICAgIGxldCBuID0ge30sXG4gICAgICAgICAgICBpID0gUGUobiwgZSkuY2xlYW51cCxcbiAgICAgICAgICAgIG8gPSB7fTtcbiAgICAgICAgJG4obywgbik7XG4gICAgICAgIGxldCBhID0gaihlLCB0LCB7XG4gICAgICAgICAgICBzY29wZTogb1xuICAgICAgICB9KTtcbiAgICAgICAgYSA9PT0gdm9pZCAwICYmIChhID0ge30pO1xuICAgICAgICBsZXQgcyA9IFBlKGEsIGUpLmNsZWFudXAsXG4gICAgICAgICAgICB1ID0gayhhKTtcbiAgICAgICAgU3QodSk7XG4gICAgICAgIGxldCBjID0gSihlLCB1KTtcbiAgICAgICAgdS5pbml0ICYmIGooZSwgdS5pbml0KSwgcigoKSA9PiB7XG4gICAgICAgICAgICBjKCksIGkoKSwgcygpLCB1LmRlc3Ryb3kgJiYgaihlLCB1LmRlc3Ryb3kpLCBjKClcbiAgICAgICAgfSlcbiAgICB9KSk7XG4gICAgZyhcInNob3dcIiwgKGUsIHtcbiAgICAgICAgbW9kaWZpZXJzOiB0LFxuICAgICAgICBleHByZXNzaW9uOiByXG4gICAgfSwge1xuICAgICAgICBlZmZlY3Q6IG5cbiAgICB9KSA9PiB7XG4gICAgICAgIGxldCBpID0gbShlLCByKTtcbiAgICAgICAgZS5feF9kb0hpZGUgfHwgKGUuX3hfZG9IaWRlID0gKCkgPT4ge1xuICAgICAgICAgICAgeSgoKSA9PiBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcbiAgICAgICAgfSksIGUuX3hfZG9TaG93IHx8IChlLl94X2RvU2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3R5bGUubGVuZ3RoID09PSAxICYmIGUuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpIDogZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBlLl94X2RvSGlkZSgpLCBlLl94X2lzU2hvd24gPSAhMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGEgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5feF9kb1Nob3coKSwgZS5feF9pc1Nob3duID0gITBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzID0gKCkgPT4gc2V0VGltZW91dChhKSxcbiAgICAgICAgICAgIHUgPSBqZShkID0+IGQgPyBhKCkgOiBvKCksIGQgPT4ge1xuICAgICAgICAgICAgICAgIHR5cGVvZiBlLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPT0gXCJmdW5jdGlvblwiID8gZS5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGUsIGQsIGEsIG8pIDogZCA/IHMoKSA6IG8oKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjLCBsID0gITA7XG4gICAgICAgIG4oKCkgPT4gaShkID0+IHtcbiAgICAgICAgICAgICFsICYmIGQgPT09IGMgfHwgKHQuaW5jbHVkZXMoXCJpbW1lZGlhdGVcIikgJiYgKGQgPyBzKCkgOiBvKCkpLCB1KGQpLCBjID0gZCwgbCA9ICExKVxuICAgICAgICB9KSlcbiAgICB9KTtcbiAgICBnKFwiZm9yXCIsIChlLCB7XG4gICAgICAgIGV4cHJlc3Npb246IHRcbiAgICB9LCB7XG4gICAgICAgIGVmZmVjdDogcixcbiAgICAgICAgY2xlYW51cDogblxuICAgIH0pID0+IHtcbiAgICAgICAgbGV0IGkgPSBTaSh0KSxcbiAgICAgICAgICAgIG8gPSBtKGUsIGkuaXRlbXMpLFxuICAgICAgICAgICAgYSA9IG0oZSwgZS5feF9rZXlFeHByZXNzaW9uIHx8IFwiaW5kZXhcIik7XG4gICAgICAgIGUuX3hfcHJldktleXMgPSBbXSwgZS5feF9sb29rdXAgPSB7fSwgcigoKSA9PiBBaShlLCBpLCBvLCBhKSksIG4oKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlLl94X2xvb2t1cCkuZm9yRWFjaChzID0+IHMucmVtb3ZlKCkpLCBkZWxldGUgZS5feF9wcmV2S2V5cywgZGVsZXRlIGUuX3hfbG9va3VwXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBBaShlLCB0LCByLCBuKSB7XG4gICAgICAgIGxldCBpID0gYSA9PiB0eXBlb2YgYSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGEpLFxuICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgIHIoYSA9PiB7XG4gICAgICAgICAgICBPaShhKSAmJiBhID49IDAgJiYgKGEgPSBBcnJheS5mcm9tKEFycmF5KGEpLmtleXMoKSwgZiA9PiBmICsgMSkpLCBhID09PSB2b2lkIDAgJiYgKGEgPSBbXSk7XG4gICAgICAgICAgICBsZXQgcyA9IGUuX3hfbG9va3VwLFxuICAgICAgICAgICAgICAgIHUgPSBlLl94X3ByZXZLZXlzLFxuICAgICAgICAgICAgICAgIGMgPSBbXSxcbiAgICAgICAgICAgICAgICBsID0gW107XG4gICAgICAgICAgICBpZiAoaShhKSkgYSA9IE9iamVjdC5lbnRyaWVzKGEpLm1hcCgoW2YsIHBdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHYgPSBwdCh0LCBwLCBmLCBhKTtcbiAgICAgICAgICAgICAgICBuKHggPT4gbC5wdXNoKHgpLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZixcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLCBjLnB1c2godilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgYS5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHB0KHQsIGFbZl0sIGYsIGEpO1xuICAgICAgICAgICAgICAgICAgICBuKHYgPT4gbC5wdXNoKHYpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksIGMucHVzaChwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkID0gW10sXG4gICAgICAgICAgICAgICAgaCA9IFtdLFxuICAgICAgICAgICAgICAgIFMgPSBbXSxcbiAgICAgICAgICAgICAgICBMID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IHUubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHVbZl07XG4gICAgICAgICAgICAgICAgbC5pbmRleE9mKHApID09PSAtMSAmJiBTLnB1c2gocClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHUgPSB1LmZpbHRlcihmID0+ICFTLmluY2x1ZGVzKGYpKTtcbiAgICAgICAgICAgIGxldCBRID0gXCJ0ZW1wbGF0ZVwiO1xuICAgICAgICAgICAgZm9yIChsZXQgZiA9IDA7IGYgPCBsLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBsW2ZdLFxuICAgICAgICAgICAgICAgICAgICB2ID0gdS5pbmRleE9mKHApO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSAtMSkgdS5zcGxpY2UoZiwgMCwgcCksIGQucHVzaChbUSwgZl0pO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgIT09IGYpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSB1LnNwbGljZShmLCAxKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSB1LnNwbGljZSh2IC0gMSwgMSlbMF07XG4gICAgICAgICAgICAgICAgICAgIHUuc3BsaWNlKGYsIDAsIGIpLCB1LnNwbGljZSh2LCAwLCB4KSwgaC5wdXNoKFt4LCBiXSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgTC5wdXNoKHApO1xuICAgICAgICAgICAgICAgIFEgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IFMubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IFNbZl07XG4gICAgICAgICAgICAgICAgc1twXS5feF9lZmZlY3RzICYmIHNbcF0uX3hfZWZmZWN0cy5mb3JFYWNoKF90KSwgc1twXS5yZW1vdmUoKSwgc1twXSA9IG51bGwsIGRlbGV0ZSBzW3BdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IGgubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgW3AsIHZdID0gaFtmXSwgeCA9IHNbcF0sIGIgPSBzW3ZdLCBOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYi5hZnRlcihOKSwgeC5hZnRlcihiKSwgYi5feF9jdXJyZW50SWZFbCAmJiBiLmFmdGVyKGIuX3hfY3VycmVudElmRWwpLCBOLmJlZm9yZSh4KSwgeC5feF9jdXJyZW50SWZFbCAmJiB4LmFmdGVyKHguX3hfY3VycmVudElmRWwpLCBOLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgfSksIHV0KGIsIGNbbC5pbmRleE9mKHYpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgZC5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgIGxldCBbcCwgdl0gPSBkW2ZdLCB4ID0gcCA9PT0gXCJ0ZW1wbGF0ZVwiID8gbyA6IHNbcF07XG4gICAgICAgICAgICAgICAgeC5feF9jdXJyZW50SWZFbCAmJiAoeCA9IHguX3hfY3VycmVudElmRWwpO1xuICAgICAgICAgICAgICAgIGxldCBiID0gY1t2XSxcbiAgICAgICAgICAgICAgICAgICAgTiA9IGxbdl0sXG4gICAgICAgICAgICAgICAgICAgIGVlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShvLmNvbnRlbnQsICEwKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICBKKGVlLCBrKGIpLCBvKSwgeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHguYWZ0ZXIoZWUpLCBDKGVlKVxuICAgICAgICAgICAgICAgIH0pLCB0eXBlb2YgTiA9PSBcIm9iamVjdFwiICYmIEsoXCJ4LWZvciBrZXkgY2Fubm90IGJlIGFuIG9iamVjdCwgaXQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBpbnRlZ2VyXCIsIG8pLCBzW05dID0gZWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgTC5sZW5ndGg7IGYrKykgdXQoc1tMW2ZdXSwgY1tsLmluZGV4T2YoTFtmXSldKTtcbiAgICAgICAgICAgIG8uX3hfcHJldktleXMgPSBsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2koZSkge1xuICAgICAgICBsZXQgdCA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLyxcbiAgICAgICAgICAgIHIgPSAvXlxccypcXCh8XFwpXFxzKiQvZyxcbiAgICAgICAgICAgIG4gPSAvKFtcXHNcXFNdKj8pXFxzKyg/OmlufG9mKVxccysoW1xcc1xcU10qKS8sXG4gICAgICAgICAgICBpID0gZS5tYXRjaChuKTtcbiAgICAgICAgaWYgKCFpKSByZXR1cm47XG4gICAgICAgIGxldCBvID0ge307XG4gICAgICAgIG8uaXRlbXMgPSBpWzJdLnRyaW0oKTtcbiAgICAgICAgbGV0IGEgPSBpWzFdLnJlcGxhY2UociwgXCJcIikudHJpbSgpLFxuICAgICAgICAgICAgcyA9IGEubWF0Y2godCk7XG4gICAgICAgIHJldHVybiBzID8gKG8uaXRlbSA9IGEucmVwbGFjZSh0LCBcIlwiKS50cmltKCksIG8uaW5kZXggPSBzWzFdLnRyaW0oKSwgc1syXSAmJiAoby5jb2xsZWN0aW9uID0gc1syXS50cmltKCkpKSA6IG8uaXRlbSA9IGEsIG9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdChlLCB0LCByLCBuKSB7XG4gICAgICAgIGxldCBpID0ge307XG4gICAgICAgIHJldHVybiAvXlxcWy4qXFxdJC8udGVzdChlLml0ZW0pICYmIEFycmF5LmlzQXJyYXkodCkgPyBlLml0ZW0ucmVwbGFjZShcIltcIiwgXCJcIikucmVwbGFjZShcIl1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcChhID0+IGEudHJpbSgpKS5mb3JFYWNoKChhLCBzKSA9PiB7XG4gICAgICAgICAgICBpW2FdID0gdFtzXVxuICAgICAgICB9KSA6IC9eXFx7LipcXH0kLy50ZXN0KGUuaXRlbSkgJiYgIUFycmF5LmlzQXJyYXkodCkgJiYgdHlwZW9mIHQgPT0gXCJvYmplY3RcIiA/IGUuaXRlbS5yZXBsYWNlKFwie1wiLCBcIlwiKS5yZXBsYWNlKFwifVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKGEgPT4gYS50cmltKCkpLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBpW2FdID0gdFthXVxuICAgICAgICB9KSA6IGlbZS5pdGVtXSA9IHQsIGUuaW5kZXggJiYgKGlbZS5pbmRleF0gPSByKSwgZS5jb2xsZWN0aW9uICYmIChpW2UuY29sbGVjdGlvbl0gPSBuKSwgaVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIE9pKGUpIHtcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KGUpICYmICFpc05hTihlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFRyKCkge31cbiAgICBUci5pbmxpbmUgPSAoZSwge1xuICAgICAgICBleHByZXNzaW9uOiB0XG4gICAgfSwge1xuICAgICAgICBjbGVhbnVwOiByXG4gICAgfSkgPT4ge1xuICAgICAgICBsZXQgbiA9IHVlKGUpO1xuICAgICAgICBuLl94X3JlZnMgfHwgKG4uX3hfcmVmcyA9IHt9KSwgbi5feF9yZWZzW3RdID0gZSwgcigoKSA9PiBkZWxldGUgbi5feF9yZWZzW3RdKVxuICAgIH07XG4gICAgZyhcInJlZlwiLCBUcik7XG4gICAgZyhcImlmXCIsIChlLCB7XG4gICAgICAgIGV4cHJlc3Npb246IHRcbiAgICB9LCB7XG4gICAgICAgIGVmZmVjdDogcixcbiAgICAgICAgY2xlYW51cDogblxuICAgIH0pID0+IHtcbiAgICAgICAgbGV0IGkgPSBtKGUsIHQpLFxuICAgICAgICAgICAgbyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5feF9jdXJyZW50SWZFbCkgcmV0dXJuIGUuX3hfY3VycmVudElmRWw7XG4gICAgICAgICAgICAgICAgbGV0IHMgPSBlLmNvbnRlbnQuY2xvbmVOb2RlKCEwKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gSihzLCB7fSwgZSksIHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLmFmdGVyKHMpLCBDKHMpXG4gICAgICAgICAgICAgICAgfSksIGUuX3hfY3VycmVudElmRWwgPSBzLCBlLl94X3VuZG9JZiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgSShzLCB1ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuX3hfZWZmZWN0cyAmJiB1Ll94X2VmZmVjdHMuZm9yRWFjaChfdClcbiAgICAgICAgICAgICAgICAgICAgfSksIHMucmVtb3ZlKCksIGRlbGV0ZSBlLl94X2N1cnJlbnRJZkVsXG4gICAgICAgICAgICAgICAgfSwgc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGEgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgIWUuX3hfdW5kb0lmIHx8IChlLl94X3VuZG9JZigpLCBkZWxldGUgZS5feF91bmRvSWYpXG4gICAgICAgICAgICB9O1xuICAgICAgICByKCgpID0+IGkocyA9PiB7XG4gICAgICAgICAgICBzID8gbygpIDogYSgpXG4gICAgICAgIH0pKSwgbigoKSA9PiBlLl94X3VuZG9JZiAmJiBlLl94X3VuZG9JZigpKVxuICAgIH0pO1xuICAgIGcoXCJpZFwiLCAoZSwge1xuICAgICAgICBleHByZXNzaW9uOiB0XG4gICAgfSwge1xuICAgICAgICBldmFsdWF0ZTogclxuICAgIH0pID0+IHtcbiAgICAgICAgcih0KS5mb3JFYWNoKGkgPT4gcGkoZSwgaSkpXG4gICAgfSk7XG4gICAgR2UoSXQoXCJAXCIsIEx0KEIoXCJvbjpcIikpKSk7XG4gICAgZyhcIm9uXCIsIGZlKChlLCB7XG4gICAgICAgIHZhbHVlOiB0LFxuICAgICAgICBtb2RpZmllcnM6IHIsXG4gICAgICAgIGV4cHJlc3Npb246IG5cbiAgICB9LCB7XG4gICAgICAgIGNsZWFudXA6IGlcbiAgICB9KSA9PiB7XG4gICAgICAgIGxldCBvID0gbiA/IG0oZSwgbikgOiAoKSA9PiB7fTtcbiAgICAgICAgZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidGVtcGxhdGVcIiAmJiAoZS5feF9mb3J3YXJkRXZlbnRzIHx8IChlLl94X2ZvcndhcmRFdmVudHMgPSBbXSksIGUuX3hfZm9yd2FyZEV2ZW50cy5pbmNsdWRlcyh0KSB8fCBlLl94X2ZvcndhcmRFdmVudHMucHVzaCh0KSk7XG4gICAgICAgIGxldCBhID0gTXIoZSwgdCwgciwgcyA9PiB7XG4gICAgICAgICAgICBvKCgpID0+IHt9LCB7XG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFtzXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIGkoKCkgPT4gYSgpKVxuICAgIH0pKTtcbiAgICB3ZShcIkNvbGxhcHNlXCIsIFwiY29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiKTtcbiAgICB3ZShcIkludGVyc2VjdFwiLCBcImludGVyc2VjdFwiLCBcImludGVyc2VjdFwiKTtcbiAgICB3ZShcIkZvY3VzXCIsIFwidHJhcFwiLCBcImZvY3VzXCIpO1xuICAgIHdlKFwiTWFza1wiLCBcIm1hc2tcIiwgXCJtYXNrXCIpO1xuXG4gICAgZnVuY3Rpb24gd2UoZSwgdCwgcikge1xuICAgICAgICBnKHQsIG4gPT4gSyhgWW91IGNhbid0IHVzZSBbeC0ke3R9XSB3aXRob3V0IGZpcnN0IGluc3RhbGxpbmcgdGhlIFwiJHtlfVwiIHBsdWdpbiBoZXJlOiBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zLyR7cn1gLCBuKSlcbiAgICB9XG4gICAgWi5zZXRFdmFsdWF0b3IoVHQpO1xuICAgIFouc2V0UmVhY3Rpdml0eUVuZ2luZSh7XG4gICAgICAgIHJlYWN0aXZlOiBvdCxcbiAgICAgICAgZWZmZWN0OiBIbixcbiAgICAgICAgcmVsZWFzZTogcW4sXG4gICAgICAgIHJhdzogX1xuICAgIH0pO1xuICAgIHZhciBDaSA9IFosXG4gICAgICAgIGF0ID0gQ2k7XG4gICAgdmFyIFJyID0ge1xuICAgICAgICBhcGlfa2V5OiBcImM1ZTc2NWVkNGMyOWM3ZTlhZWM1ZjE5YWQ4YzE2NjdiXCIsXG4gICAgICAgIGFwcF9pZDogXCIwNEFMTVhNR0xVXCIsXG4gICAgICAgIGluZGV4OiBcImxpbms0XCJcbiAgICB9O1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGUgPSBScjtcbiAgICAgICAgYXQuZGF0YShcInNlYXJjaENvbnRyb2xsZXJcIiwgKCkgPT4gUmkoZSkpLCBhdC5zdGFydCgpXG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIFJpKGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBcIlwiLFxuICAgICAgICAgICAgcmVzdWx0OiB7XG4gICAgICAgICAgICAgICAgaGl0czogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR3YXRjaChcInF1ZXJ5XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOYW1lOiBlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRzOiBbXCJnZW5yZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogYHF1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucXVlcnkpfWBcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBuID0gYCR7YGh0dHBzOi8vJHtlLmFwcF9pZH0tZHNuLmFsZ29saWEubmV0YH0vMS9pbmRleGVzLyovcXVlcmllc2A7XG4gICAgICAgICAgICAgICAgZmV0Y2gobiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlgtQWxnb2xpYS1BcHBsaWNhdGlvbi1JZFwiOiBlLmFwcF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWC1BbGdvbGlhLUFQSS1LZXlcIjogZS5hcGlfa2V5XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHQpXG4gICAgICAgICAgICAgICAgfSkudGhlbihpID0+IGkuanNvbigpKS50aGVuKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaS5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGkucmVzdWx0c1swXTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG8gPSB0aGlzLnJlc3VsdC5mYWNldHMuZ2VucmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5nZW5yZSA9IG8gPyBPYmplY3Qua2V5cyhvKS5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGs6IGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdjogb1thXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpIDogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSgpOyJdLAogICJtYXBwaW5ncyI6ICI7O0FBQUEsR0FBQyxNQUFNO0FBQ0gsUUFBSSxLQUFLLE9BQ0wsS0FBSyxPQUNMLElBQUksQ0FBQztBQUVULGFBQVMsR0FBRyxHQUFHO0FBQ1gsU0FBRyxDQUFDO0FBQUEsSUFDUjtBQUVBLGFBQVMsR0FBRyxHQUFHO0FBQ1gsUUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUc7QUFBQSxJQUNuQztBQUVBLGFBQVMsR0FBRyxHQUFHO0FBQ1gsVUFBSSxJQUFJLEVBQUUsUUFBUSxDQUFDO0FBQ25CLFlBQU0sTUFBTSxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQUEsSUFDN0I7QUFFQSxhQUFTLEtBQUs7QUFDVixPQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssTUFBSSxlQUFlLEVBQUU7QUFBQSxJQUM3QztBQUVBLGFBQVMsS0FBSztBQUNWLFdBQUssT0FBSSxLQUFL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
