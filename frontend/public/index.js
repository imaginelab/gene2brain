(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var v = [];
  var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l5) {
    for (var u5 in l5) n2[u5] = l5[u5];
    return n2;
  }
  function w(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l5, u5, t4) {
    var i5, o4, r3, f5 = {};
    for (r3 in u5) "key" == r3 ? i5 = u5[r3] : "ref" == r3 ? o4 = u5[r3] : f5[r3] = u5[r3];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l5 && null != l5.defaultProps) for (r3 in l5.defaultProps) void 0 === f5[r3] && (f5[r3] = l5.defaultProps[r3]);
    return g(l5, f5, i5, o4, null);
  }
  function g(n2, t4, i5, o4, r3) {
    var f5 = { type: n2, props: t4, key: i5, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f5), f5;
  }
  function b(n2) {
    return n2.children;
  }
  function k(n2, l5) {
    this.props = n2, this.context = l5;
  }
  function x(n2, l5) {
    if (null == l5) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u5; l5 < n2.__k.length; l5++) if (null != (u5 = n2.__k[l5]) && null != u5.__e) return u5.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l5, u5;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l5 = 0; l5 < n2.__k.length; l5++) if (null != (u5 = n2.__k[l5]) && null != u5.__e) {
        n2.__e = n2.__c.base = u5.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u5, t4, o4, r3, e4, c4, s5;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u5 = i.length, o4 = void 0, e4 = (r3 = (t4 = n2).__v).__e, c4 = [], s5 = [], t4.__P && ((o4 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o4), O(t4.__P, o4, r3, t4.__n, t4.__P.namespaceURI, 32 & r3.__u ? [e4] : null, c4, null == e4 ? x(r3) : e4, !!(32 & r3.__u), s5), o4.__v = r3.__v, o4.__.__k[o4.__i] = o4, j(c4, o4, s5), o4.__e != e4 && C(o4)), i.length > u5 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l5, u5, t4, i5, o4, r3, f5, e4, c4, s5) {
    var a4, p4, y4, d5, w4, _4 = t4 && t4.__k || v, g3 = l5.length;
    for (u5.__d = e4, $(u5, l5, _4), e4 = u5.__d, a4 = 0; a4 < g3; a4++) null != (y4 = u5.__k[a4]) && (p4 = -1 === y4.__i ? h : _4[y4.__i] || h, y4.__i = a4, O(n2, y4, p4, i5, o4, r3, f5, e4, c4, s5), d5 = y4.__e, y4.ref && p4.ref != y4.ref && (p4.ref && N(p4.ref, null, y4), s5.push(y4.ref, y4.__c || d5, y4)), null == w4 && null != d5 && (w4 = d5), 65536 & y4.__u || p4.__k === y4.__k ? e4 = I(y4, e4, n2) : "function" == typeof y4.type && void 0 !== y4.__d ? e4 = y4.__d : d5 && (e4 = d5.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u5.__d = e4, u5.__e = w4;
  }
  function $(n2, l5, u5) {
    var t4, i5, o4, r3, f5, e4 = l5.length, c4 = u5.length, s5 = c4, a4 = 0;
    for (n2.__k = [], t4 = 0; t4 < e4; t4++) null != (i5 = l5[t4]) && "boolean" != typeof i5 && "function" != typeof i5 ? (r3 = t4 + a4, (i5 = n2.__k[t4] = "string" == typeof i5 || "number" == typeof i5 || "bigint" == typeof i5 || i5.constructor == String ? g(null, i5, null, null, null) : y(i5) ? g(b, { children: i5 }, null, null, null) : void 0 === i5.constructor && i5.__b > 0 ? g(i5.type, i5.props, i5.key, i5.ref ? i5.ref : null, i5.__v) : i5).__ = n2, i5.__b = n2.__b + 1, o4 = null, -1 !== (f5 = i5.__i = L(i5, u5, r3, s5)) && (s5--, (o4 = u5[f5]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f5 && a4--, "function" != typeof i5.type && (i5.__u |= 65536)) : f5 !== r3 && (f5 == r3 - 1 ? a4-- : f5 == r3 + 1 ? a4++ : (f5 > r3 ? a4-- : a4++, i5.__u |= 65536))) : i5 = n2.__k[t4] = null;
    if (s5) for (t4 = 0; t4 < c4; t4++) null != (o4 = u5[t4]) && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4));
  }
  function I(n2, l5, u5) {
    var t4, i5;
    if ("function" == typeof n2.type) {
      for (t4 = n2.__k, i5 = 0; t4 && i5 < t4.length; i5++) t4[i5] && (t4[i5].__ = n2, l5 = I(t4[i5], l5, u5));
      return l5;
    }
    n2.__e != l5 && (l5 && n2.type && !u5.contains(l5) && (l5 = x(n2)), u5.insertBefore(n2.__e, l5 || null), l5 = n2.__e);
    do {
      l5 = l5 && l5.nextSibling;
    } while (null != l5 && 8 === l5.nodeType);
    return l5;
  }
  function L(n2, l5, u5, t4) {
    var i5 = n2.key, o4 = n2.type, r3 = u5 - 1, f5 = u5 + 1, e4 = l5[u5];
    if (null === e4 || e4 && i5 == e4.key && o4 === e4.type && 0 == (131072 & e4.__u)) return u5;
    if (t4 > (null != e4 && 0 == (131072 & e4.__u) ? 1 : 0)) for (; r3 >= 0 || f5 < l5.length; ) {
      if (r3 >= 0) {
        if ((e4 = l5[r3]) && 0 == (131072 & e4.__u) && i5 == e4.key && o4 === e4.type) return r3;
        r3--;
      }
      if (f5 < l5.length) {
        if ((e4 = l5[f5]) && 0 == (131072 & e4.__u) && i5 == e4.key && o4 === e4.type) return f5;
        f5++;
      }
    }
    return -1;
  }
  function T(n2, l5, u5) {
    "-" === l5[0] ? n2.setProperty(l5, null == u5 ? "" : u5) : n2[l5] = null == u5 ? "" : "number" != typeof u5 || p.test(l5) ? u5 : u5 + "px";
  }
  function A(n2, l5, u5, t4, i5) {
    var o4;
    n: if ("style" === l5) if ("string" == typeof u5) n2.style.cssText = u5;
    else {
      if ("string" == typeof t4 && (n2.style.cssText = t4 = ""), t4) for (l5 in t4) u5 && l5 in u5 || T(n2.style, l5, "");
      if (u5) for (l5 in u5) t4 && u5[l5] === t4[l5] || T(n2.style, l5, u5[l5]);
    }
    else if ("o" === l5[0] && "n" === l5[1]) o4 = l5 !== (l5 = l5.replace(/(PointerCapture)$|Capture$/i, "$1")), l5 = l5.toLowerCase() in n2 || "onFocusOut" === l5 || "onFocusIn" === l5 ? l5.toLowerCase().slice(2) : l5.slice(2), n2.l || (n2.l = {}), n2.l[l5 + o4] = u5, u5 ? t4 ? u5.u = t4.u : (u5.u = e, n2.addEventListener(l5, o4 ? s : c, o4)) : n2.removeEventListener(l5, o4 ? s : c, o4);
    else {
      if ("http://www.w3.org/2000/svg" == i5) l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && "popover" != l5 && l5 in n2) try {
        n2[l5] = null == u5 ? "" : u5;
        break n;
      } catch (n3) {
      }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l5[4] ? n2.removeAttribute(l5) : n2.setAttribute(l5, "popover" == l5 && 1 == u5 ? "" : u5));
    }
  }
  function F(n2) {
    return function(u5) {
      if (this.l) {
        var t4 = this.l[u5.type + n2];
        if (null == u5.t) u5.t = e++;
        else if (u5.t < t4.u) return;
        return t4(l.event ? l.event(u5) : u5);
      }
    };
  }
  function O(n2, u5, t4, i5, o4, r3, f5, e4, c4, s5) {
    var a4, h3, v5, p4, w4, _4, g3, m2, x2, C3, M2, P2, $2, I2, H, L2, T3 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t4.__u && (c4 = !!(32 & t4.__u), r3 = [e4 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
    n: if ("function" == typeof T3) try {
      if (m2 = u5.props, x2 = "prototype" in T3 && T3.prototype.render, C3 = (a4 = T3.contextType) && i5[a4.__c], M2 = a4 ? C3 ? C3.props.value : a4.__ : i5, t4.__c ? g3 = (h3 = u5.__c = t4.__c).__ = h3.__E : (x2 ? u5.__c = h3 = new T3(m2, M2) : (u5.__c = h3 = new k(m2, M2), h3.constructor = T3, h3.render = q), C3 && C3.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i5, v5 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T3.getDerivedStateFromProps(m2, h3.__s))), p4 = h3.props, w4 = h3.state, h3.__v = u5, v5) x2 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x2 && null == T3.getDerivedStateFromProps && m2 !== p4 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, M2) || u5.__v === t4.__v)) {
          for (u5.__v !== t4.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n3) {
            n3 && (n3.__ = u5);
          }), P2 = 0; P2 < h3._sb.length; P2++) h3.__h.push(h3._sb[P2]);
          h3._sb = [], h3.__h.length && f5.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, M2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(p4, w4, _4);
        });
      }
      if (h3.context = M2, h3.props = m2, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x2) {
        for (h3.state = h3.__s, h3.__d = false, $2 && $2(u5), a4 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
        h3._sb = [];
      } else do {
        h3.__d = false, $2 && $2(u5), a4 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++I2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i5 = d(d({}, i5), h3.getChildContext())), x2 && !v5 && null != h3.getSnapshotBeforeUpdate && (_4 = h3.getSnapshotBeforeUpdate(p4, w4)), S(n2, y(L2 = null != a4 && a4.type === b && null == a4.key ? a4.props.children : a4) ? L2 : [L2], u5, t4, i5, o4, r3, f5, e4, c4, s5), h3.base = u5.__e, u5.__u &= -161, h3.__h.length && f5.push(h3), g3 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u5.__v = null, c4 || null != r3) {
        for (u5.__u |= c4 ? 160 : 32; e4 && 8 === e4.nodeType && e4.nextSibling; ) e4 = e4.nextSibling;
        r3[r3.indexOf(e4)] = null, u5.__e = e4;
      } else u5.__e = t4.__e, u5.__k = t4.__k;
      l.__e(n3, u5, t4);
    }
    else null == r3 && u5.__v === t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : u5.__e = z(t4.__e, u5, t4, i5, o4, r3, f5, c4, s5);
    (a4 = l.diffed) && a4(u5);
  }
  function j(n2, u5, t4) {
    u5.__d = void 0;
    for (var i5 = 0; i5 < t4.length; i5++) N(t4[i5], t4[++i5], t4[++i5]);
    l.__c && l.__c(u5, n2), n2.some(function(u6) {
      try {
        n2 = u6.__h, u6.__h = [], n2.some(function(n3) {
          n3.call(u6);
        });
      } catch (n3) {
        l.__e(n3, u6.__v);
      }
    });
  }
  function z(u5, t4, i5, o4, r3, f5, e4, c4, s5) {
    var a4, v5, p4, d5, _4, g3, m2, b3 = i5.props, k3 = t4.props, C3 = t4.type;
    if ("svg" === C3 ? r3 = "http://www.w3.org/2000/svg" : "math" === C3 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != f5) {
      for (a4 = 0; a4 < f5.length; a4++) if ((_4 = f5[a4]) && "setAttribute" in _4 == !!C3 && (C3 ? _4.localName === C3 : 3 === _4.nodeType)) {
        u5 = _4, f5[a4] = null;
        break;
      }
    }
    if (null == u5) {
      if (null === C3) return document.createTextNode(k3);
      u5 = document.createElementNS(r3, C3, k3.is && k3), c4 && (l.__m && l.__m(t4, f5), c4 = false), f5 = null;
    }
    if (null === C3) b3 === k3 || c4 && u5.data === k3 || (u5.data = k3);
    else {
      if (f5 = f5 && n.call(u5.childNodes), b3 = i5.props || h, !c4 && null != f5) for (b3 = {}, a4 = 0; a4 < u5.attributes.length; a4++) b3[(_4 = u5.attributes[a4]).name] = _4.value;
      for (a4 in b3) if (_4 = b3[a4], "children" == a4) ;
      else if ("dangerouslySetInnerHTML" == a4) p4 = _4;
      else if (!(a4 in k3)) {
        if ("value" == a4 && "defaultValue" in k3 || "checked" == a4 && "defaultChecked" in k3) continue;
        A(u5, a4, null, _4, r3);
      }
      for (a4 in k3) _4 = k3[a4], "children" == a4 ? d5 = _4 : "dangerouslySetInnerHTML" == a4 ? v5 = _4 : "value" == a4 ? g3 = _4 : "checked" == a4 ? m2 = _4 : c4 && "function" != typeof _4 || b3[a4] === _4 || A(u5, a4, _4, b3[a4], r3);
      if (v5) c4 || p4 && (v5.__html === p4.__html || v5.__html === u5.innerHTML) || (u5.innerHTML = v5.__html), t4.__k = [];
      else if (p4 && (u5.innerHTML = ""), S(u5, y(d5) ? d5 : [d5], t4, i5, o4, "foreignObject" === C3 ? "http://www.w3.org/1999/xhtml" : r3, f5, e4, f5 ? f5[0] : i5.__k && x(i5, 0), c4, s5), null != f5) for (a4 = f5.length; a4--; ) w(f5[a4]);
      c4 || (a4 = "value", "progress" === C3 && null == g3 ? u5.removeAttribute("value") : void 0 !== g3 && (g3 !== u5[a4] || "progress" === C3 && !g3 || "option" === C3 && g3 !== b3[a4]) && A(u5, a4, g3, b3[a4], r3), a4 = "checked", void 0 !== m2 && m2 !== u5[a4] && A(u5, a4, m2, b3[a4], r3));
    }
    return u5;
  }
  function N(n2, u5, t4) {
    try {
      if ("function" == typeof n2) {
        var i5 = "function" == typeof n2.__u;
        i5 && n2.__u(), i5 && null == u5 || (n2.__u = n2(u5));
      } else n2.current = u5;
    } catch (n3) {
      l.__e(n3, t4);
    }
  }
  function V(n2, u5, t4) {
    var i5, o4;
    if (l.unmount && l.unmount(n2), (i5 = n2.ref) && (i5.current && i5.current !== n2.__e || N(i5, null, u5)), null != (i5 = n2.__c)) {
      if (i5.componentWillUnmount) try {
        i5.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u5);
      }
      i5.base = i5.__P = null;
    }
    if (i5 = n2.__k) for (o4 = 0; o4 < i5.length; o4++) i5[o4] && V(i5[o4], u5, t4 || "function" != typeof n2.type);
    t4 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l5, u5) {
    return this.constructor(n2, u5);
  }
  function B(u5, t4, i5) {
    var o4, r3, f5, e4;
    l.__ && l.__(u5, t4), r3 = (o4 = "function" == typeof i5) ? null : i5 && i5.__k || t4.__k, f5 = [], e4 = [], O(t4, u5 = (!o4 && i5 || t4).__k = _(b, null, [u5]), r3 || h, h, t4.namespaceURI, !o4 && i5 ? [i5] : r3 ? null : t4.firstChild ? n.call(t4.childNodes) : null, f5, !o4 && i5 ? i5 : r3 ? r3.__e : t4.firstChild, o4, e4), j(f5, u5, e4);
  }
  n = v.slice, l = { __e: function(n2, l5, u5, t4) {
    for (var i5, o4, r3; l5 = l5.__; ) if ((i5 = l5.__c) && !i5.__) try {
      if ((o4 = i5.constructor) && null != o4.getDerivedStateFromError && (i5.setState(o4.getDerivedStateFromError(n2)), r3 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n2, t4 || {}), r3 = i5.__d), r3) return i5.__E = i5;
    } catch (l6) {
      n2 = l6;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, k.prototype.setState = function(n2, l5) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u5), this.props)), n2 && d(u5, n2), null != n2 && this.__v && (l5 && this._sb.push(l5), M(this));
  }, k.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l5) {
    return n2.__v.__b - l5.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m = c2.unmount;
  var s2 = c2.__;
  function d2(n2, t4) {
    c2.__h && c2.__h(r2, n2, o2 || t4), o2 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u5.__.length && u5.__.push({}), u5.__[n2];
  }
  function y2(n2, u5) {
    var i5 = d2(t2++, 3);
    !c2.__s && C2(i5.__H, u5) && (i5.__ = n2, i5.i = u5, r2.__H.__h.push(i5));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u5 = d2(t2++, 7);
    return C2(u5.__H, r3) && (u5.__ = n2(), u5.__H = r3, u5.__h = n2), u5.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t4) {
      n2.__H.__h = [], c2.__e(t4, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t4) {
    n2 && t4.__k && t4.__k.__m && (n2.__m = t4.__k.__m), s2 && s2(n2, t4);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i5 = (r2 = n2.__c).__H;
    i5 && (u2 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t4 = n2.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t4) {
    t4.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t4.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t4 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t4);
  }, c2.unmount = function(n2) {
    m && m(n2);
    var t4, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t4 = n4;
      }
    }), r3.__H = void 0, t4 && c2.__e(t4, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t4, r3 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, u5 = setTimeout(r3, 100);
    k2 && (t4 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t4 = r2, u5 = n2.__c;
    "function" == typeof u5 && (n2.__c = void 0, u5()), r2 = t4;
  }
  function B2(n2) {
    var t4 = r2;
    n2.__c = n2.__(), r2 = t4;
  }
  function C2(n2, t4) {
    return !n2 || n2.length !== t4.length || t4.some(function(t5, r3) {
      return t5 !== n2[r3];
    });
  }

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  var i3 = Symbol.for("preact-signals");
  function t3() {
    if (!(s3 > 1)) {
      var i5, t4 = false;
      while (void 0 !== h2) {
        var r3 = h2;
        h2 = void 0;
        f3++;
        while (void 0 !== r3) {
          var o4 = r3.o;
          r3.o = void 0;
          r3.f &= -3;
          if (!(8 & r3.f) && c3(r3)) try {
            r3.c();
          } catch (r4) {
            if (!t4) {
              i5 = r4;
              t4 = true;
            }
          }
          r3 = o4;
        }
      }
      f3 = 0;
      s3--;
      if (t4) throw i5;
    } else s3--;
  }
  var o3 = void 0;
  var h2 = void 0;
  var s3 = 0;
  var f3 = 0;
  var v3 = 0;
  function e3(i5) {
    if (void 0 !== o3) {
      var t4 = i5.n;
      if (void 0 === t4 || t4.t !== o3) {
        t4 = { i: 0, S: i5, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t4 };
        if (void 0 !== o3.s) o3.s.n = t4;
        o3.s = t4;
        i5.n = t4;
        if (32 & o3.f) i5.S(t4);
        return t4;
      } else if (-1 === t4.i) {
        t4.i = 0;
        if (void 0 !== t4.n) {
          t4.n.p = t4.p;
          if (void 0 !== t4.p) t4.p.n = t4.n;
          t4.p = o3.s;
          t4.n = void 0;
          o3.s.n = t4;
          o3.s = t4;
        }
        return t4;
      }
    }
  }
  function u3(i5) {
    this.v = i5;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
  }
  u3.prototype.brand = i3;
  u3.prototype.h = function() {
    return true;
  };
  u3.prototype.S = function(i5) {
    if (this.t !== i5 && void 0 === i5.e) {
      i5.x = this.t;
      if (void 0 !== this.t) this.t.e = i5;
      this.t = i5;
    }
  };
  u3.prototype.U = function(i5) {
    if (void 0 !== this.t) {
      var t4 = i5.e, r3 = i5.x;
      if (void 0 !== t4) {
        t4.x = r3;
        i5.e = void 0;
      }
      if (void 0 !== r3) {
        r3.e = t4;
        i5.x = void 0;
      }
      if (i5 === this.t) this.t = r3;
    }
  };
  u3.prototype.subscribe = function(i5) {
    var t4 = this;
    return E(function() {
      var r3 = t4.value, n2 = o3;
      o3 = void 0;
      try {
        i5(r3);
      } finally {
        o3 = n2;
      }
    });
  };
  u3.prototype.valueOf = function() {
    return this.value;
  };
  u3.prototype.toString = function() {
    return this.value + "";
  };
  u3.prototype.toJSON = function() {
    return this.value;
  };
  u3.prototype.peek = function() {
    var i5 = o3;
    o3 = void 0;
    try {
      return this.value;
    } finally {
      o3 = i5;
    }
  };
  Object.defineProperty(u3.prototype, "value", { get: function() {
    var i5 = e3(this);
    if (void 0 !== i5) i5.i = this.i;
    return this.v;
  }, set: function(i5) {
    if (i5 !== this.v) {
      if (f3 > 100) throw new Error("Cycle detected");
      this.v = i5;
      this.i++;
      v3++;
      s3++;
      try {
        for (var r3 = this.t; void 0 !== r3; r3 = r3.x) r3.t.N();
      } finally {
        t3();
      }
    }
  } });
  function d3(i5) {
    return new u3(i5);
  }
  function c3(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i) return true;
    return false;
  }
  function a3(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) {
      var r3 = t4.S.n;
      if (void 0 !== r3) t4.r = r3;
      t4.S.n = t4;
      t4.i = -1;
      if (void 0 === t4.n) {
        i5.s = t4;
        break;
      }
    }
  }
  function l3(i5) {
    var t4 = i5.s, r3 = void 0;
    while (void 0 !== t4) {
      var o4 = t4.p;
      if (-1 === t4.i) {
        t4.S.U(t4);
        if (void 0 !== o4) o4.n = t4.n;
        if (void 0 !== t4.n) t4.n.p = o4;
      } else r3 = t4;
      t4.S.n = t4.r;
      if (void 0 !== t4.r) t4.r = void 0;
      t4 = o4;
    }
    i5.s = r3;
  }
  function y3(i5) {
    u3.call(this, void 0);
    this.x = i5;
    this.s = void 0;
    this.g = v3 - 1;
    this.f = 4;
  }
  (y3.prototype = new u3()).h = function() {
    this.f &= -3;
    if (1 & this.f) return false;
    if (32 == (36 & this.f)) return true;
    this.f &= -5;
    if (this.g === v3) return true;
    this.g = v3;
    this.f |= 1;
    if (this.i > 0 && !c3(this)) {
      this.f &= -2;
      return true;
    }
    var i5 = o3;
    try {
      a3(this);
      o3 = this;
      var t4 = this.x();
      if (16 & this.f || this.v !== t4 || 0 === this.i) {
        this.v = t4;
        this.f &= -17;
        this.i++;
      }
    } catch (i6) {
      this.v = i6;
      this.f |= 16;
      this.i++;
    }
    o3 = i5;
    l3(this);
    this.f &= -2;
    return true;
  };
  y3.prototype.S = function(i5) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.S(t4);
    }
    u3.prototype.S.call(this, i5);
  };
  y3.prototype.U = function(i5) {
    if (void 0 !== this.t) {
      u3.prototype.U.call(this, i5);
      if (void 0 === this.t) {
        this.f &= -33;
        for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
      }
    }
  };
  y3.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
    }
  };
  Object.defineProperty(y3.prototype, "value", { get: function() {
    if (1 & this.f) throw new Error("Cycle detected");
    var i5 = e3(this);
    this.h();
    if (void 0 !== i5) i5.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  } });
  function w3(i5) {
    return new y3(i5);
  }
  function _2(i5) {
    var r3 = i5.u;
    i5.u = void 0;
    if ("function" == typeof r3) {
      s3++;
      var n2 = o3;
      o3 = void 0;
      try {
        r3();
      } catch (t4) {
        i5.f &= -2;
        i5.f |= 8;
        g2(i5);
        throw t4;
      } finally {
        o3 = n2;
        t3();
      }
    }
  }
  function g2(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
    i5.x = void 0;
    i5.s = void 0;
    _2(i5);
  }
  function p2(i5) {
    if (o3 !== this) throw new Error("Out-of-order effect");
    l3(this);
    o3 = i5;
    this.f &= -2;
    if (8 & this.f) g2(this);
    t3();
  }
  function b2(i5) {
    this.x = i5;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  b2.prototype.c = function() {
    var i5 = this.S();
    try {
      if (8 & this.f) return;
      if (void 0 === this.x) return;
      var t4 = this.x();
      if ("function" == typeof t4) this.u = t4;
    } finally {
      i5();
    }
  };
  b2.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _2(this);
    a3(this);
    s3++;
    var i5 = o3;
    o3 = this;
    return p2.bind(this, i5);
  };
  b2.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.o = h2;
      h2 = this;
    }
  };
  b2.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f)) g2(this);
  };
  function E(i5) {
    var t4 = new b2(i5);
    try {
      t4.c();
    } catch (i6) {
      t4.d();
      throw i6;
    }
    return t4.d.bind(t4);
  }

  // node_modules/@preact/signals/dist/signals.module.js
  var v4;
  var s4;
  function l4(n2, i5) {
    l[n2] = i5.bind(null, l[n2] || function() {
    });
  }
  function d4(n2) {
    if (s4) s4();
    s4 = n2 && n2.S();
  }
  function p3(n2) {
    var r3 = this, f5 = n2.data, o4 = useSignal(f5);
    o4.value = f5;
    var e4 = T2(function() {
      var n3 = r3.__v;
      while (n3 = n3.__) if (n3.__c) {
        n3.__c.__$f |= 4;
        break;
      }
      r3.__$u.c = function() {
        var n4;
        if (!t(e4.peek()) && 3 === (null == (n4 = r3.base) ? void 0 : n4.nodeType)) r3.base.data = e4.peek();
        else {
          r3.__$f |= 1;
          r3.setState({});
        }
      };
      return w3(function() {
        var n4 = o4.value.value;
        return 0 === n4 ? 0 : true === n4 ? "" : n4 || "";
      });
    }, []);
    return e4.value;
  }
  p3.displayName = "_st";
  Object.defineProperties(u3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: p3 }, props: { configurable: true, get: function() {
    return { data: this };
  } }, __b: { configurable: true, value: 1 } });
  l4("__b", function(n2, r3) {
    if ("string" == typeof r3.type) {
      var i5, t4 = r3.props;
      for (var f5 in t4) if ("children" !== f5) {
        var o4 = t4[f5];
        if (o4 instanceof u3) {
          if (!i5) r3.__np = i5 = {};
          i5[f5] = o4;
          t4[f5] = o4.peek();
        }
      }
    }
    n2(r3);
  });
  l4("__r", function(n2, r3) {
    d4();
    var i5, t4 = r3.__c;
    if (t4) {
      t4.__$f &= -2;
      if (void 0 === (i5 = t4.__$u)) t4.__$u = i5 = function(n3) {
        var r4;
        E(function() {
          r4 = this;
        });
        r4.c = function() {
          t4.__$f |= 1;
          t4.setState({});
        };
        return r4;
      }();
    }
    v4 = t4;
    d4(i5);
    n2(r3);
  });
  l4("__e", function(n2, r3, i5, t4) {
    d4();
    v4 = void 0;
    n2(r3, i5, t4);
  });
  l4("diffed", function(n2, r3) {
    d4();
    v4 = void 0;
    var i5;
    if ("string" == typeof r3.type && (i5 = r3.__e)) {
      var t4 = r3.__np, f5 = r3.props;
      if (t4) {
        var o4 = i5.U;
        if (o4) for (var e4 in o4) {
          var u5 = o4[e4];
          if (void 0 !== u5 && !(e4 in t4)) {
            u5.d();
            o4[e4] = void 0;
          }
        }
        else i5.U = o4 = {};
        for (var a4 in t4) {
          var c4 = o4[a4], s5 = t4[a4];
          if (void 0 === c4) {
            c4 = _3(i5, a4, s5, f5);
            o4[a4] = c4;
          } else c4.o(s5, f5);
        }
      }
    }
    n2(r3);
  });
  function _3(n2, r3, i5, t4) {
    var f5 = r3 in n2 && void 0 === n2.ownerSVGElement, o4 = d3(i5);
    return { o: function(n3, r4) {
      o4.value = n3;
      t4 = r4;
    }, d: E(function() {
      var i6 = o4.value.value;
      if (t4[r3] !== i6) {
        t4[r3] = i6;
        if (f5) n2[r3] = i6;
        else if (i6) n2.setAttribute(r3, i6);
        else n2.removeAttribute(r3);
      }
    }) };
  }
  l4("unmount", function(n2, r3) {
    if ("string" == typeof r3.type) {
      var i5 = r3.__e;
      if (i5) {
        var t4 = i5.U;
        if (t4) {
          i5.U = void 0;
          for (var f5 in t4) {
            var o4 = t4[f5];
            if (o4) o4.d();
          }
        }
      }
    } else {
      var e4 = r3.__c;
      if (e4) {
        var u5 = e4.__$u;
        if (u5) {
          e4.__$u = void 0;
          u5.d();
        }
      }
    }
    n2(r3);
  });
  l4("__h", function(n2, r3, i5, t4) {
    if (t4 < 3 || 9 === t4) r3.__$f |= 2;
    n2(r3, i5, t4);
  });
  k.prototype.shouldComponentUpdate = function(n2, r3) {
    var i5 = this.__$u;
    if (!(i5 && void 0 !== i5.s || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
    for (var t4 in r3) return true;
    for (var f5 in n2) if ("__source" !== f5 && n2[f5] !== this.props[f5]) return true;
    for (var o4 in this.props) if (!(o4 in n2)) return true;
    return false;
  };
  function useSignal(n2) {
    return T2(function() {
      return d3(n2);
    }, []);
  }
  function useComputed(n2) {
    var r3 = A2(n2);
    r3.current = n2;
    v4.__$f |= 4;
    return T2(function() {
      return w3(function() {
        return r3.current();
      });
    }, []);
  }
  function useSignalEffect(n2) {
    var r3 = A2(n2);
    r3.current = n2;
    y2(function() {
      return E(function() {
        return r3.current();
      });
    }, []);
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f4 = 0;
  var i4 = Array.isArray;
  function u4(e4, t4, n2, o4, i5, u5) {
    t4 || (t4 = {});
    var a4, c4, p4 = t4;
    if ("ref" in p4) for (c4 in p4 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p4[c4] = t4[c4];
    var l5 = { type: e4, props: p4, key: n2, ref: a4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i5, __self: u5 };
    if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p4[c4] && (p4[c4] = a4[c4]);
    return l.vnode && l.vnode(l5), l5;
  }

  // src/index.tsx
  var globalStyle = document.createElement("style");
  globalStyle.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  
  /* Ensure the entire page, including the body and html, is styled */
  html, body {
    margin: 0;
    padding: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
  document.head.appendChild(globalStyle);
  function App() {
    const geneNames = useSignal([]);
    const inputText = useSignal("");
    const selected = useComputed(() => geneNames.value.includes(inputText.value.toUpperCase()) && inputText.value);
    useSignalEffect(() => console.log(selected.value));
    const setInputText = (e4) => inputText.value = e4.target.value;
    useSignalEffect(() => {
      if (inputText.value && !geneNames.peek().find((g3) => g3.startsWith(inputText.value))) {
        fetch(`gene2brain?query=${inputText.value}`).then((res) => (console.log(res), res).json()).then((gene2brain) => geneNames.value = (console.log(gene2brain), geneNames).peek().concat(gene2brain));
      }
    });
    return /* @__PURE__ */ u4("div", { style: styles.container, children: [
      /* @__PURE__ */ u4("h1", { style: styles.title, children: "Gene2Brain" }),
      /* @__PURE__ */ u4(
        "input",
        {
          list: "gene2brain",
          value: inputText,
          oninput: setInputText,
          style: styles.searchBar,
          placeholder: "Search for genes..."
        }
      ),
      /* @__PURE__ */ u4("datalist", { id: "gene2brain", children: geneNames.value.map((name) => /* @__PURE__ */ u4("option", { value: name })) }),
      selected.value && /* @__PURE__ */ u4("div", { children: [
        /* @__PURE__ */ u4("img", { style: styles.image, src: `images/${selected}.jpg` }),
        /* @__PURE__ */ u4("a", { href: `csv/${selected}.csv`, style: styles.link, children: "Download data" })
      ] })
    ] });
  }
  var styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "black",
      color: "white",
      fontFamily: "'Lato', sans-serif"
    },
    title: {
      fontSize: "4rem",
      marginBottom: "20px",
      textAlign: "center",
      color: "white",
      fontWeight: "700"
      // Adjust font weight if needed
    },
    searchBar: {
      padding: "10px",
      fontSize: "1.2rem",
      width: "300px",
      textAlign: "center",
      borderRadius: "5px",
      border: "2px solid white",
      backgroundColor: "transparent",
      color: "white",
      outline: "none",
      fontFamily: "'Lato', sans-serif"
    },
    link: {
      color: "white",
      // Make the text white for better contrast
      padding: "10px",
      // Add some padding
      textDecoration: "underline",
      // Optionally underline the link
      fontSize: "1.2rem",
      // Increase the font size to make it more visible
      fontWeight: "bold",
      // Make the link bold
      cursor: "pointer"
      // Change the cursor to a pointer when hovered
    },
    image: {
      width: "100vw",
      marginTop: "20px",
      // Add margin on top to create a gap
      textAlign: "center"
    }
  };
  B(/* @__PURE__ */ u4(App, {}), document.body);
})();
