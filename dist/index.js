import Pe, { useId as J, useEffect as Er, useRef as gr } from "react";
import { createPortal as Rr } from "react-dom";
var ne = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function xr() {
  if (Ce) return L;
  Ce = 1;
  var o = Pe, a = Symbol.for("react.element"), l = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(b, d, m) {
    var u, g = {}, R = null, T = null;
    m !== void 0 && (R = "" + m), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (T = d.ref);
    for (u in d) h.call(d, u) && !p.hasOwnProperty(u) && (g[u] = d[u]);
    if (b && b.defaultProps) for (u in d = b.defaultProps, d) g[u] === void 0 && (g[u] = d[u]);
    return { $$typeof: a, type: b, key: R, ref: T, props: g, _owner: j.current };
  }
  return L.Fragment = l, L.jsx = _, L.jsxs = _, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function jr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Pe, a = Symbol.for("react.element"), l = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), P = Symbol.iterator, D = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[D];
      return typeof r == "function" ? r : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        Ye("error", e, n);
      }
    }
    function Ye(e, r, n) {
      {
        var t = k.ReactDebugCurrentFrame, f = t.getStackAddendum();
        f !== "" && (r += "%s", n = n.concat([f]));
        var v = n.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Le = !1, Me = !1, Be = !1, Ve = !1, Ue = !1, te;
    te = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === p || Ue || e === j || e === m || e === u || Ve || e === T || Le || Me || Be || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === g || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function qe(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var f = r.displayName || r.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case l:
          return "Portal";
        case p:
          return "Profiler";
        case j:
          return "StrictMode";
        case m:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ae(r) + ".Consumer";
          case _:
            var n = e;
            return ae(n._context) + ".Provider";
          case d:
            return qe(e, e.render, "ForwardRef");
          case g:
            var t = e.displayName || null;
            return t !== null ? t : N(e.type) || "Memo";
          case R: {
            var f = e, v = f._payload, c = f._init;
            try {
              return N(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, ie, oe, ue, se, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Je() {
      {
        if (W === 0) {
          ie = console.log, oe = console.info, ue = console.warn, se = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function He() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ie
            }),
            info: F({}, e, {
              value: oe
            }),
            warn: F({}, e, {
              value: ue
            }),
            error: F({}, e, {
              value: se
            }),
            group: F({}, e, {
              value: le
            }),
            groupCollapsed: F({}, e, {
              value: ce
            }),
            groupEnd: F({}, e, {
              value: fe
            })
          });
        }
        W < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = k.ReactCurrentDispatcher, z;
    function V(e, r, n) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (f) {
            var t = f.stack.trim().match(/\n( *(at )?)/);
            z = t && t[1] || "";
          }
        return `
` + z + e;
      }
    }
    var G = !1, U;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ze();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var n = U.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = H.current, H.current = null, Je();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (O) {
              t = O;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (O) {
              t = O;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            t = O;
          }
          e();
        }
      } catch (O) {
        if (O && t && typeof O.stack == "string") {
          for (var s = O.stack.split(`
`), w = t.stack.split(`
`), y = s.length - 1, E = w.length - 1; y >= 1 && E >= 0 && s[y] !== w[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (s[y] !== w[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || s[y] !== w[E]) {
                    var C = `
` + s[y].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        G = !1, H.current = v, He(), Error.prepareStackTrace = f;
      }
      var $ = e ? e.displayName || e.name : "", I = $ ? V($) : "";
      return typeof e == "function" && U.set(e, I), I;
    }
    function Ge(e, r, n) {
      return ve(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Xe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case m:
          return V("Suspense");
        case u:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ge(e.render);
          case g:
            return K(e.type, r, n);
          case R: {
            var t = e, f = t._payload, v = t._init;
            try {
              return K(v(f), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, pe = {}, me = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, n = K(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Ze(e, r, n, t, f) {
      {
        var v = Function.call.bind(Y);
        for (var c in e)
          if (v(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var w = Error((t || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[c](r, c, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              s = y;
            }
            s && !(s instanceof Error) && (q(f), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, c, typeof s), q(null)), s instanceof Error && !(s.message in pe) && (pe[s.message] = !0, q(f), x("Failed %s type: %s", n, s.message), q(null));
          }
      }
    }
    var Qe = Array.isArray;
    function X(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function rr(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function _e(e) {
      if (rr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), he(e);
    }
    var be = k.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ee;
    function tr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function or(e, r) {
      {
        var n = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var n = function() {
          Ee || (Ee = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, n, t, f, v, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, n, t, f) {
      {
        var v, c = {}, s = null, w = null;
        n !== void 0 && (_e(n), s = "" + n), ar(r) && (_e(r.key), s = "" + r.key), tr(r) && (w = r.ref, ir(r, f));
        for (v in r)
          Y.call(r, v) && !nr.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            c[v] === void 0 && (c[v] = y[v]);
        }
        if (s || w) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && or(c, E), w && ur(c, E);
        }
        return sr(e, s, w, f, t, be.current, c);
      }
    }
    var Z = k.ReactCurrentOwner, ge = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, n = K(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(n);
      } else
        ge.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Re() {
      {
        if (Z.current) {
          var e = N(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var xe = {};
    function fr(e) {
      {
        var r = Re();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = fr(r);
        if (xe[n])
          return;
        xe[n] = !0;
        var t = "";
        e && e._owner && e._owner !== Z.current && (t = " It was passed a child from " + N(e._owner.type) + "."), A(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), A(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            ee(t) && je(t, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = B(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), c; !(c = v.next()).done; )
              ee(c.value) && je(c.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = N(r);
          Ze(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var f = N(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            A(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Te = {};
    function Oe(e, r, n, t, f, v) {
      {
        var c = Ke(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = cr();
          w ? s += w : s += Re();
          var y;
          e === null ? y = "null" : X(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (N(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, s);
        }
        var E = lr(e, r, n, f, v);
        if (E == null)
          return E;
        if (c) {
          var C = r.children;
          if (C !== void 0)
            if (t)
              if (X(C)) {
                for (var $ = 0; $ < C.length; $++)
                  we(C[$], e);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(C, e);
        }
        if (Y.call(r, "key")) {
          var I = N(e), O = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), re = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[I + re]) {
            var br = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, I, br, I), Te[I + re] = !0;
          }
        }
        return e === h ? vr(E) : dr(E), E;
      }
    }
    function pr(e, r, n) {
      return Oe(e, r, n, !0);
    }
    function mr(e, r, n) {
      return Oe(e, r, n, !1);
    }
    var hr = mr, _r = pr;
    M.Fragment = h, M.jsx = hr, M.jsxs = _r;
  }()), M;
}
process.env.NODE_ENV === "production" ? ne.exports = xr() : ne.exports = jr();
var i = ne.exports;
const S = (...o) => o.filter(Boolean).join(" "), wr = ({
  children: o,
  className: a = "",
  variant: l = "primary",
  appearance: h = "solid",
  size: j = "md",
  type: p = "button",
  disabled: _ = !1,
  leadingIcon: b = null,
  trailingIcon: d = null,
  loading: m = !1,
  color: u = void 0,
  ...g
}) => {
  const R = u ?? l, T = _ || m;
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: p,
      className: S(
        "ui-button",
        `ui-button--appearance-${h}`,
        `ui-button--variant-${R}`,
        `ui-button--${j}`,
        m && "ui-button--loading",
        a
      ),
      disabled: T,
      "aria-busy": m || void 0,
      ...g,
      children: [
        m && /* @__PURE__ */ i.jsx("span", { className: "ui-button__spinner", "aria-hidden": "true" }),
        b && /* @__PURE__ */ i.jsx("span", { className: "ui-button__icon", "aria-hidden": "true", children: b }),
        /* @__PURE__ */ i.jsx("span", { className: "ui-button__content", children: m ? "Carregando..." : o }),
        d && /* @__PURE__ */ i.jsx("span", { className: "ui-button__icon", "aria-hidden": "true", children: d })
      ]
    }
  );
}, Dr = ({
  label: o = null,
  helperText: a = null,
  errorMessage: l = null,
  size: h = "md",
  variant: j = "neutral",
  appearance: p = "outline",
  id: _ = void 0,
  className: b = "",
  disabled: d = !1,
  startAdornment: m = null,
  endAdornment: u = null,
  invalid: g = !1,
  ...R
}) => {
  const T = J(), P = _ ?? T, D = !!(g || l), B = a && !D ? `${P}-helper` : void 0, k = D && l ? `${P}-error` : void 0, x = [B, k].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: S(
        "ui-input",
        `ui-input--${h}`,
        `ui-input--variant-${j}`,
        `ui-input--appearance-${p}`,
        D && "ui-input--invalid",
        d && "ui-input--disabled",
        b
      ),
      children: [
        o && // D13: Semantica Estrutural
        // `label` associado com `htmlFor` melhora clique, leitura por tecnologia assistiva e formulario.
        /* @__PURE__ */ i.jsx("label", { className: "ui-input__label", htmlFor: P, children: o }),
        /* @__PURE__ */ i.jsxs("div", { className: "ui-input__control", children: [
          m && /* @__PURE__ */ i.jsx("span", { className: "ui-input__adornment", "aria-hidden": "true", children: m }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: P,
              className: "ui-input__field",
              disabled: d,
              "aria-invalid": D ? !0 : void 0,
              "aria-describedby": x,
              ...R
            }
          ),
          u && /* @__PURE__ */ i.jsx("span", { className: "ui-input__adornment", "aria-hidden": "true", children: u })
        ] }),
        a && !D && /* @__PURE__ */ i.jsx("p", { className: "ui-input__helper", id: B, children: a }),
        D && l && // D15: Estados Visuais
        // O estado de erro possui representacao explicita na UI e na documentacao.
        /* @__PURE__ */ i.jsx("p", { className: "ui-input__error", id: k, children: l })
      ]
    }
  );
}, ke = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("header", { className: S("ui-card__header", a), ...l, children: o }), De = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("div", { className: S("ui-card__body", a), ...l, children: o }), Ne = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("footer", { className: S("ui-card__footer", a), ...l, children: o }), Fe = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("h3", { className: S("ui-card__title", a), ...l, children: o }), Ie = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("p", { className: S("ui-card__description", a), ...l, children: o }), Tr = ({
  title: o = null,
  description: a = null,
  children: l = null,
  footer: h = null,
  className: j = "",
  variant: p = "neutral",
  size: _ = "md",
  interactive: b = !1,
  ...d
}) => {
  const m = J();
  return (
    // D13: Semantica Estrutural
    // `section` com `aria-labelledby` preserva significado estrutural sem depender de wrappers genericos.
    /* @__PURE__ */ i.jsxs(
      "section",
      {
        className: S(
          "ui-card",
          `ui-card--variant-${p}`,
          `ui-card--${_}`,
          b && "ui-card--interactive",
          j
        ),
        "aria-labelledby": o ? m : void 0,
        ...d,
        children: [
          (o || a) && /* @__PURE__ */ i.jsxs(ke, { children: [
            o && /* @__PURE__ */ i.jsx(Fe, { id: m, children: o }),
            a && /* @__PURE__ */ i.jsx(Ie, { children: a })
          ] }),
          l && /* @__PURE__ */ i.jsx(De, { children: l }),
          h && /* @__PURE__ */ i.jsx(Ne, { children: h })
        ]
      }
    )
  );
}, Nr = Object.assign(Tr, {
  Header: ke,
  Body: De,
  Footer: Ne,
  Title: Fe,
  Description: Ie
}), Or = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", "), Cr = ({ dialogRef: o, open: a, onClose: l }) => {
  Er(() => {
    if (!a) return;
    const h = o.current;
    if (!h) return;
    const j = document.activeElement instanceof HTMLElement ? document.activeElement : null, p = Array.from(h.querySelectorAll(Or)), _ = p[0], b = p[p.length - 1], d = document.body.style.overflow;
    document.body.style.overflow = "hidden", (_ ?? h).focus();
    const m = (u) => {
      var g, R;
      if (u.key === "Escape") {
        u.preventDefault(), l();
        return;
      }
      if (p.length === 0) {
        u.key === "Tab" && (u.preventDefault(), h.focus());
        return;
      }
      if (u.key === "ArrowRight" || u.key === "ArrowDown") {
        u.preventDefault();
        const T = p.indexOf(document.activeElement), P = T >= 0 ? (T + 1) % p.length : 0;
        (g = p[P]) == null || g.focus();
        return;
      }
      if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const T = p.indexOf(document.activeElement), P = T >= 0 ? (T - 1 + p.length) % p.length : 0;
        (R = p[P]) == null || R.focus();
        return;
      }
      if (u.key === "Tab") {
        if (u.shiftKey && document.activeElement === _) {
          u.preventDefault(), b == null || b.focus();
          return;
        }
        !u.shiftKey && document.activeElement === b && (u.preventDefault(), _ == null || _.focus());
      }
    };
    return window.addEventListener("keydown", m), () => {
      document.body.style.overflow = d, window.removeEventListener("keydown", m), j == null || j.focus();
    };
  }, [o, l, a]);
}, Ae = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("div", { className: S("ui-modal__header", a), ...l, children: o }), $e = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("div", { className: S("ui-modal__body", a), ...l, children: o }), We = ({ children: o = null, className: a = "", ...l }) => /* @__PURE__ */ i.jsx("div", { className: S("ui-modal__footer", a), ...l, children: o }), Sr = ({
  open: o,
  title: a = null,
  ariaLabel: l = void 0,
  description: h = null,
  children: j = null,
  footer: p = null,
  onClose: _,
  closeLabel: b = "Fechar modal",
  className: d = "",
  closeOnBackdrop: m = !0
}) => {
  const u = gr(null), g = J(), R = J();
  return Cr({ dialogRef: u, open: o, onClose: _ }), o ? Rr(
    /* @__PURE__ */ i.jsxs("div", { className: "ui-modal", role: "presentation", children: [
      /* @__PURE__ */ i.jsx("div", { className: "ui-modal__backdrop", onClick: m ? _ : void 0, "aria-hidden": "true" }),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: S("ui-modal__dialog", d),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": l,
          "aria-labelledby": a ? g : void 0,
          "aria-describedby": h ? R : void 0,
          tabIndex: -1,
          ref: u,
          children: [
            /* @__PURE__ */ i.jsxs(Ae, { children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                a && /* @__PURE__ */ i.jsx("h2", { className: "ui-modal__title", id: g, children: a }),
                h && /* @__PURE__ */ i.jsx("p", { className: "ui-modal__description", id: R, children: h })
              ] }),
              /* @__PURE__ */ i.jsx(
                wr,
                {
                  variant: "neutral",
                  appearance: "ghost",
                  size: "sm",
                  className: "ui-modal__close",
                  "aria-label": b,
                  onClick: _,
                  children: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "×" })
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx($e, { children: j }),
            p && /* @__PURE__ */ i.jsx(We, { children: p })
          ]
        }
      )
    ] }),
    document.body
  ) : null;
}, Fr = Object.assign(Sr, {
  Header: Ae,
  Body: $e,
  Footer: We
});
export {
  wr as Button,
  Nr as Card,
  Dr as Input,
  Fr as Modal,
  S as classNames
};
