! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (e.document) return t(e);
      throw new Error("jQuery requires a window with a document")
  } : t(e)
}("undefined" != typeof window ? window : this, function(x, j) {
  "use strict";

  function y(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
  }

  function H(e) {
      return null != e && e === e.window
  }
  var t = [],
      q = Object.getPrototypeOf,
      o = t.slice,
      R = t.flat ? function(e) {
          return t.flat.call(e)
      } : function(e) {
          return t.concat.apply([], e)
      },
      $ = t.push,
      b = t.indexOf,
      B = {},
      F = B.toString,
      G = B.hasOwnProperty,
      X = G.toString,
      W = X.call(Object),
      m = {},
      E = x.document,
      _ = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
      };

  function Y(e, t, r) {
      var i, a, s = (r = r || E).createElement("script");
      if (s.text = e, t)
          for (i in _)(a = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, a);
      r.head.appendChild(s).parentNode.removeChild(s)
  }

  function V(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[F.call(e)] || "object" : typeof e
  }
  var e = "3.7.1",
      U = /HTML$/i,
      T = function(e, t) {
          return new T.fn.init(e, t)
      };

  function K(e) {
      var t = !!e && "length" in e && e.length,
          r = V(e);
      return !y(e) && !H(e) && ("array" === r || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  function w(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  T.fn = T.prototype = {
      jquery: e,
      constructor: T,
      length: 0,
      toArray: function() {
          return o.call(this)
      },
      get: function(e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          e = T.merge(this.constructor(), e);
          return e.prevObject = this, e
      },
      each: function(e) {
          return T.each(this, e)
      },
      map: function(r) {
          return this.pushStack(T.map(this, function(e, t) {
              return r.call(e, t, e)
          }))
      },
      slice: function() {
          return this.pushStack(o.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      even: function() {
          return this.pushStack(T.grep(this, function(e, t) {
              return (t + 1) % 2
          }))
      },
      odd: function() {
          return this.pushStack(T.grep(this, function(e, t) {
              return t % 2
          }))
      },
      eq: function(e) {
          var t = this.length,
              e = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= e && e < t ? [this[e]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: $,
      sort: t.sort,
      splice: t.splice
  }, T.extend = T.fn.extend = function() {
      var e, t, r, i, a, s = arguments[0] || {},
          n = 1,
          o = arguments.length,
          l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[n] || {}, n++), "object" == typeof s || y(s) || (s = {}), n === o && (s = this, n--); n < o; n++)
          if (null != (e = arguments[n]))
              for (t in e) r = e[t], "__proto__" !== t && s !== r && (l && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (a = s[t], a = i && !Array.isArray(a) ? [] : i || T.isPlainObject(a) ? a : {}, i = !1, s[t] = T.extend(l, a, r)) : void 0 !== r && (s[t] = r));
      return s
  }, T.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          return !(!e || "[object Object]" !== F.call(e) || (e = q(e)) && ("function" != typeof(e = G.call(e, "constructor") && e.constructor) || X.call(e) !== W))
      },
      isEmptyObject: function(e) {
          for (var t in e) return !1;
          return !0
      },
      globalEval: function(e, t, r) {
          Y(e, {
              nonce: t && t.nonce
          }, r)
      },
      each: function(e, t) {
          var r, i = 0;
          if (K(e))
              for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++);
          else
              for (i in e)
                  if (!1 === t.call(e[i], i, e[i])) break;
          return e
      },
      text: function(e) {
          var t, r = "",
              i = 0,
              a = e.nodeType;
          if (!a)
              for (; t = e[i++];) r += T.text(t);
          return 1 === a || 11 === a ? e.textContent : 9 === a ? e.documentElement.textContent : 3 === a || 4 === a ? e.nodeValue : r
      },
      makeArray: function(e, t) {
          t = t || [];
          return null != e && (K(Object(e)) ? T.merge(t, "string" == typeof e ? [e] : e) : $.call(t, e)), t
      },
      inArray: function(e, t, r) {
          return null == t ? -1 : b.call(t, e, r)
      },
      isXMLDoc: function(e) {
          var t = e && e.namespaceURI,
              e = e && (e.ownerDocument || e).documentElement;
          return !U.test(t || e && e.nodeName || "HTML")
      },
      merge: function(e, t) {
          for (var r = +t.length, i = 0, a = e.length; i < r; i++) e[a++] = t[i];
          return e.length = a, e
      },
      grep: function(e, t, r) {
          for (var i = [], a = 0, s = e.length, n = !r; a < s; a++) !t(e[a], a) != n && i.push(e[a]);
          return i
      },
      map: function(e, t, r) {
          var i, a, s = 0,
              n = [];
          if (K(e))
              for (i = e.length; s < i; s++) null != (a = t(e[s], s, r)) && n.push(a);
          else
              for (s in e) null != (a = t(e[s], s, r)) && n.push(a);
          return R(n)
      },
      guid: 1,
      support: m
  }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      B["[object " + t + "]"] = t.toLowerCase()
  });
  var Q = t.pop,
      J = t.sort,
      Z = t.splice,
      r = "[\\x20\\t\\r\\n\\f]",
      ee = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
      te = (T.contains = function(e, t) {
          t = t && t.parentNode;
          return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
      }, /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);

  function re(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
  }
  T.escapeSelector = function(e) {
      return (e + "").replace(te, re)
  };
  var ie, S, ae, se, ne, C, i, M, u, oe, a = E,
      le = $,
      L = le,
      k = T.expando,
      A = 0,
      de = 0,
      ce = Ae(),
      pe = Ae(),
      ue = Ae(),
      fe = Ae(),
      he = function(e, t) {
          return e === t && (ne = !0), 0
      },
      me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      e = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      s = "\\[" + r + "*(" + e + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + r + "*\\]",
      n = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + s + ")*)|.*)\\)|)",
      ve = new RegExp(r + "+", "g"),
      ge = new RegExp("^" + r + "*," + r + "*"),
      ye = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
      be = new RegExp(r + "|>"),
      we = new RegExp(n),
      xe = new RegExp("^" + e + "$"),
      Ee = {
          ID: new RegExp("^#(" + e + ")"),
          CLASS: new RegExp("^\\.(" + e + ")"),
          TAG: new RegExp("^(" + e + "|[*])"),
          ATTR: new RegExp("^" + s),
          PSEUDO: new RegExp("^" + n),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + me + ")$", "i"),
          needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
      },
      Te = /^(?:input|select|textarea|button)$/i,
      Se = /^h\d$/i,
      Ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Me = /[+~]/,
      p = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
      f = function(e, t) {
          e = "0x" + e.slice(1) - 65536;
          return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
      },
      Le = function() {
          ze()
      },
      ke = qe(function(e) {
          return !0 === e.disabled && w(e, "fieldset")
      }, {
          dir: "parentNode",
          next: "legend"
      });
  try {
      L.apply(t = o.call(a.childNodes), a.childNodes), t[a.childNodes.length].nodeType
  } catch (e) {
      L = {
          apply: function(e, t) {
              le.apply(e, o.call(t))
          },
          call: function(e) {
              le.apply(e, o.call(arguments, 1))
          }
      }
  }

  function P(t, e, r, i) {
      var a, s, n, o, l, d, c = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (r = r || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return r;
      if (!i && (ze(e), e = e || C, M)) {
          if (11 !== p && (o = Ce.exec(t)))
              if (a = o[1]) {
                  if (9 === p) {
                      if (!(d = e.getElementById(a))) return r;
                      if (d.id === a) return L.call(r, d), r
                  } else if (c && (d = c.getElementById(a)) && P.contains(e, d) && d.id === a) return L.call(r, d), r
              } else {
                  if (o[2]) return L.apply(r, e.getElementsByTagName(t)), r;
                  if ((a = o[3]) && e.getElementsByClassName) return L.apply(r, e.getElementsByClassName(a)), r
              } if (!(fe[t + " "] || u && u.test(t))) {
              if (d = t, c = e, 1 === p && (be.test(t) || ye.test(t))) {
                  for ((c = Me.test(t) && Oe(e.parentNode) || e) == e && m.scope || ((n = e.getAttribute("id")) ? n = T.escapeSelector(n) : e.setAttribute("id", n = k)), s = (l = je(t)).length; s--;) l[s] = (n ? "#" + n : ":scope") + " " + He(l[s]);
                  d = l.join(",")
              }
              try {
                  return L.apply(r, c.querySelectorAll(d)), r
              } catch (e) {
                  fe(t, !0)
              } finally {
                  n === k && e.removeAttribute("id")
              }
          }
      }
      return Xe(t.replace(ee, "$1"), e, r, i)
  }

  function Ae() {
      var r = [];

      function i(e, t) {
          return r.push(e + " ") > S.cacheLength && delete i[r.shift()], i[e + " "] = t
      }
      return i
  }

  function l(e) {
      return e[k] = !0, e
  }

  function Pe(e) {
      var t = C.createElement("fieldset");
      try {
          return !!e(t)
      } catch (e) {
          return !1
      } finally {
          t.parentNode && t.parentNode.removeChild(t)
      }
  }

  function De(t) {
      return function(e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ke(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
  }

  function Ie(n) {
      return l(function(s) {
          return s = +s, l(function(e, t) {
              for (var r, i = n([], e.length, s), a = i.length; a--;) e[r = i[a]] && (e[r] = !(t[r] = e[r]))
          })
      })
  }

  function Oe(e) {
      return e && void 0 !== e.getElementsByTagName && e
  }

  function ze(e) {
      var e = e ? e.ownerDocument || e : a;
      return e != C && 9 === e.nodeType && e.documentElement && (i = (C = e).documentElement, M = !T.isXMLDoc(C), oe = i.matches || i.webkitMatchesSelector || i.msMatchesSelector, i.msMatchesSelector && a != C && (e = C.defaultView) && e.top !== e && e.addEventListener("unload", Le), m.getById = Pe(function(e) {
          return i.appendChild(e).id = T.expando, !C.getElementsByName || !C.getElementsByName(T.expando).length
      }), m.disconnectedMatch = Pe(function(e) {
          return oe.call(e, "*")
      }), m.scope = Pe(function() {
          return C.querySelectorAll(":scope")
      }), m.cssHas = Pe(function() {
          try {
              C.querySelector(":has(*,:jqfake)")
          } catch (e) {
              return 1
          }
      }), m.getById ? (S.filter.ID = function(e) {
          var t = e.replace(p, f);
          return function(e) {
              return e.getAttribute("id") === t
          }
      }, S.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && M) return (t = t.getElementById(e)) ? [t] : []
      }) : (S.filter.ID = function(e) {
          var t = e.replace(p, f);
          return function(e) {
              e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return e && e.value === t
          }
      }, S.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && M) {
              var r, i, a, s = t.getElementById(e);
              if (s) {
                  if ((r = s.getAttributeNode("id")) && r.value === e) return [s];
                  for (a = t.getElementsByName(e), i = 0; s = a[i++];)
                      if ((r = s.getAttributeNode("id")) && r.value === e) return [s]
              }
              return []
          }
      }), S.find.TAG = function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
      }, S.find.CLASS = function(e, t) {
          if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
      }, u = [], Pe(function(e) {
          var t;
          i.appendChild(e).innerHTML = "<a id='" + k + "' href='' disabled='disabled'></a><select id='" + k + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || u.push("\\[" + r + "*(?:value|" + me + ")"), e.querySelectorAll("[id~=" + k + "-]").length || u.push("~="), e.querySelectorAll("a#" + k + "+*").length || u.push(".#.+[+~]"), e.querySelectorAll(":checked").length || u.push(":checked"), (t = C.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), i.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && u.push(":enabled", ":disabled"), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || u.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")")
      }), m.cssHas || u.push(":has"), u = u.length && new RegExp(u.join("|")), he = function(e, t) {
          var r;
          return e === t ? (ne = !0, 0) : (r = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === r ? e === C || e.ownerDocument == a && P.contains(a, e) ? -1 : t === C || t.ownerDocument == a && P.contains(a, t) ? 1 : se ? b.call(se, e) - b.call(se, t) : 0 : 4 & r ? -1 : 1)
      }), C
  }
  for (ie in P.matches = function(e, t) {
          return P(e, null, null, t)
      }, P.matchesSelector = function(e, t) {
          if (ze(e), M && !fe[t + " "] && (!u || !u.test(t))) try {
              var r = oe.call(e, t);
              if (r || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {
              fe(t, !0)
          }
          return 0 < P(t, C, null, [e]).length
      }, P.contains = function(e, t) {
          return (e.ownerDocument || e) != C && ze(e), T.contains(e, t)
      }, P.attr = function(e, t) {
          (e.ownerDocument || e) != C && ze(e);
          var r = S.attrHandle[t.toLowerCase()],
              r = r && G.call(S.attrHandle, t.toLowerCase()) ? r(e, t, !M) : void 0;
          return void 0 !== r ? r : e.getAttribute(t)
      }, P.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }, T.uniqueSort = function(e) {
          var t, r = [],
              i = 0,
              a = 0;
          if (ne = !m.sortStable, se = !m.sortStable && o.call(e, 0), J.call(e, he), ne) {
              for (; t = e[a++];) t === e[a] && (i = r.push(a));
              for (; i--;) Z.call(e, r[i], 1)
          }
          return se = null, e
      }, T.fn.uniqueSort = function() {
          return this.pushStack(T.uniqueSort(o.apply(this)))
      }, (S = T.expr = {
          cacheLength: 50,
          createPseudo: l,
          match: Ee,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(p, f), e[3] = (e[3] || e[4] || e[5] || "").replace(p, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || P.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && P.error(e[0]), e
              },
              PSEUDO: function(e) {
                  var t, r = !e[6] && e[2];
                  return Ee.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : r && we.test(r) && (t = (t = je(r, !0)) && r.indexOf(")", r.length - t) - r.length) && (e[0] = e[0].slice(0, t), e[2] = r.slice(0, t)), e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(p, f).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  } : function(e) {
                      return w(e, t)
                  }
              },
              CLASS: function(e) {
                  var t = ce[e + " "];
                  return t || (t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) && ce(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(t, r, i) {
                  return function(e) {
                      e = P.attr(e, t);
                      return null == e ? "!=" === r : !r || (e += "", "=" === r ? e === i : "!=" === r ? e !== i : "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice(-i.length) === i : "~=" === r ? -1 < (" " + e.replace(ve, " ") + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-"))
                  }
              },
              CHILD: function(f, e, t, h, m) {
                  var v = "nth" !== f.slice(0, 3),
                      g = "last" !== f.slice(-4),
                      y = "of-type" === e;
                  return 1 === h && 0 === m ? function(e) {
                      return !!e.parentNode
                  } : function(e, t, r) {
                      var i, a, s, n, o, l = v != g ? "nextSibling" : "previousSibling",
                          d = e.parentNode,
                          c = y && e.nodeName.toLowerCase(),
                          p = !r && !y,
                          u = !1;
                      if (d) {
                          if (v) {
                              for (; l;) {
                                  for (s = e; s = s[l];)
                                      if (y ? w(s, c) : 1 === s.nodeType) return !1;
                                  o = l = "only" === f && !o && "nextSibling"
                              }
                              return !0
                          }
                          if (o = [g ? d.firstChild : d.lastChild], g && p) {
                              for (u = (n = (i = (a = d[k] || (d[k] = {}))[f] || [])[0] === A && i[1]) && i[2], s = n && d.childNodes[n]; s = ++n && s && s[l] || (u = n = 0, o.pop());)
                                  if (1 === s.nodeType && ++u && s === e) {
                                      a[f] = [A, n, u];
                                      break
                                  }
                          } else if (!1 === (u = p ? n = (i = (a = e[k] || (e[k] = {}))[f] || [])[0] === A && i[1] : u))
                              for (;
                                  (s = ++n && s && s[l] || (u = n = 0, o.pop())) && ((y ? !w(s, c) : 1 !== s.nodeType) || !++u || (p && ((a = s[k] || (s[k] = {}))[f] = [A, u]), s !== e)););
                          return (u -= m) === h || u % h == 0 && 0 <= u / h
                      }
                  }
              },
              PSEUDO: function(e, s) {
                  var t, n = S.pseudos[e] || S.setFilters[e.toLowerCase()] || P.error("unsupported pseudo: " + e);
                  return n[k] ? n(s) : 1 < n.length ? (t = [e, e, "", s], S.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                      for (var r, i = n(e, s), a = i.length; a--;) e[r = b.call(e, i[a])] = !(t[r] = i[a])
                  }) : function(e) {
                      return n(e, 0, t)
                  }) : n
              }
          },
          pseudos: {
              not: l(function(e) {
                  var i = [],
                      a = [],
                      o = Ge(e.replace(ee, "$1"));
                  return o[k] ? l(function(e, t, r, i) {
                      for (var a, s = o(e, null, i, []), n = e.length; n--;)(a = s[n]) && (e[n] = !(t[n] = a))
                  }) : function(e, t, r) {
                      return i[0] = e, o(i, null, r, a), i[0] = null, !a.pop()
                  }
              }),
              has: l(function(t) {
                  return function(e) {
                      return 0 < P(t, e).length
                  }
              }),
              contains: l(function(t) {
                  return t = t.replace(p, f),
                      function(e) {
                          return -1 < (e.textContent || T.text(e)).indexOf(t)
                      }
              }),
              lang: l(function(r) {
                  return xe.test(r || "") || P.error("unsupported lang: " + r), r = r.replace(p, f).toLowerCase(),
                      function(e) {
                          var t;
                          do {
                              if (t = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === r || 0 === t.indexOf(r + "-")
                          } while ((e = e.parentNode) && 1 === e.nodeType);
                          return !1
                      }
              }),
              target: function(e) {
                  var t = x.location && x.location.hash;
                  return t && t.slice(1) === e.id
              },
              root: function(e) {
                  return e === i
              },
              focus: function(e) {
                  return e === function() {
                      try {
                          return C.activeElement
                      } catch (e) {}
                  }() && C.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: De(!1),
              disabled: De(!0),
              checked: function(e) {
                  return w(e, "input") && !!e.checked || w(e, "option") && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                  return !0
              },
              parent: function(e) {
                  return !S.pseudos.empty(e)
              },
              header: function(e) {
                  return Se.test(e.nodeName)
              },
              input: function(e) {
                  return Te.test(e.nodeName)
              },
              button: function(e) {
                  return w(e, "input") && "button" === e.type || w(e, "button")
              },
              text: function(e) {
                  return w(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
              },
              first: Ie(function() {
                  return [0]
              }),
              last: Ie(function(e, t) {
                  return [t - 1]
              }),
              eq: Ie(function(e, t, r) {
                  return [r < 0 ? r + t : r]
              }),
              even: Ie(function(e, t) {
                  for (var r = 0; r < t; r += 2) e.push(r);
                  return e
              }),
              odd: Ie(function(e, t) {
                  for (var r = 1; r < t; r += 2) e.push(r);
                  return e
              }),
              lt: Ie(function(e, t, r) {
                  for (var i = r < 0 ? r + t : t < r ? t : r; 0 <= --i;) e.push(i);
                  return e
              }),
              gt: Ie(function(e, t, r) {
                  for (var i = r < 0 ? r + t : r; ++i < t;) e.push(i);
                  return e
              })
          }
      }).pseudos.nth = S.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      }) S.pseudos[ie] = function(t) {
      return function(e) {
          return w(e, "input") && e.type === t
      }
  }(ie);
  for (ie in {
          submit: !0,
          reset: !0
      }) S.pseudos[ie] = function(t) {
      return function(e) {
          return (w(e, "input") || w(e, "button")) && e.type === t
      }
  }(ie);

  function Ne() {}

  function je(e, t) {
      var r, i, a, s, n, o, l, d = pe[e + " "];
      if (d) return t ? 0 : d.slice(0);
      for (n = e, o = [], l = S.preFilter; n;) {
          for (s in r && !(i = ge.exec(n)) || (i && (n = n.slice(i[0].length) || n), o.push(a = [])), r = !1, (i = ye.exec(n)) && (r = i.shift(), a.push({
                  value: r,
                  type: i[0].replace(ee, " ")
              }), n = n.slice(r.length)), S.filter) !(i = Ee[s].exec(n)) || l[s] && !(i = l[s](i)) || (r = i.shift(), a.push({
              value: r,
              type: s,
              matches: i
          }), n = n.slice(r.length));
          if (!r) break
      }
      return t ? n.length : n ? P.error(e) : pe(e, o).slice(0)
  }

  function He(e) {
      for (var t = 0, r = e.length, i = ""; t < r; t++) i += e[t].value;
      return i
  }

  function qe(n, e, t) {
      var o = e.dir,
          l = e.next,
          d = l || o,
          c = t && "parentNode" === d,
          p = de++;
      return e.first ? function(e, t, r) {
          for (; e = e[o];)
              if (1 === e.nodeType || c) return n(e, t, r);
          return !1
      } : function(e, t, r) {
          var i, a, s = [A, p];
          if (r) {
              for (; e = e[o];)
                  if ((1 === e.nodeType || c) && n(e, t, r)) return !0
          } else
              for (; e = e[o];)
                  if (1 === e.nodeType || c)
                      if (a = e[k] || (e[k] = {}), l && w(e, l)) e = e[o] || e;
                      else {
                          if ((i = a[d]) && i[0] === A && i[1] === p) return s[2] = i[2];
                          if ((a[d] = s)[2] = n(e, t, r)) return !0
                      } return !1
      }
  }

  function Re(a) {
      return 1 < a.length ? function(e, t, r) {
          for (var i = a.length; i--;)
              if (!a[i](e, t, r)) return !1;
          return !0
      } : a[0]
  }

  function $e(e, t, r, i, a) {
      for (var s, n = [], o = 0, l = e.length, d = null != t; o < l; o++) !(s = e[o]) || r && !r(s, i, a) || (n.push(s), d && t.push(o));
      return n
  }

  function Be(f, h, m, v, g, e) {
      return v && !v[k] && (v = Be(v)), g && !g[k] && (g = Be(g, e)), l(function(e, t, r, i) {
          var a, s, n, o, l = [],
              d = [],
              c = t.length,
              p = e || function(e, t, r) {
                  for (var i = 0, a = t.length; i < a; i++) P(e, t[i], r);
                  return r
              }(h || "*", r.nodeType ? [r] : r, []),
              u = !f || !e && h ? p : $e(p, l, f, r, i);
          if (m ? m(u, o = g || (e ? f : c || v) ? [] : t, r, i) : o = u, v)
              for (a = $e(o, d), v(a, [], r, i), s = a.length; s--;)(n = a[s]) && (o[d[s]] = !(u[d[s]] = n));
          if (e) {
              if (g || f) {
                  if (g) {
                      for (a = [], s = o.length; s--;)(n = o[s]) && a.push(u[s] = n);
                      g(null, o = [], a, i)
                  }
                  for (s = o.length; s--;)(n = o[s]) && -1 < (a = g ? b.call(e, n) : l[s]) && (e[a] = !(t[a] = n))
              }
          } else o = $e(o === t ? o.splice(c, o.length) : o), g ? g(null, t, o, i) : L.apply(t, o)
      })
  }

  function Fe(v, g) {
      function e(e, t, r, i, a) {
          var s, n, o, l = 0,
              d = "0",
              c = e && [],
              p = [],
              u = ae,
              f = e || b && S.find.TAG("*", a),
              h = A += null == u ? 1 : Math.random() || .1,
              m = f.length;
          for (a && (ae = t == C || t || a); d !== m && null != (s = f[d]); d++) {
              if (b && s) {
                  for (n = 0, t || s.ownerDocument == C || (ze(s), r = !M); o = v[n++];)
                      if (o(s, t || C, r)) {
                          L.call(i, s);
                          break
                      } a && (A = h)
              }
              y && ((s = !o && s) && l--, e) && c.push(s)
          }
          if (l += d, y && d !== l) {
              for (n = 0; o = g[n++];) o(c, p, t, r);
              if (e) {
                  if (0 < l)
                      for (; d--;) c[d] || p[d] || (p[d] = Q.call(i));
                  p = $e(p)
              }
              L.apply(i, p), a && !e && 0 < p.length && 1 < l + g.length && T.uniqueSort(i)
          }
          return a && (A = h, ae = u), c
      }
      var y = 0 < g.length,
          b = 0 < v.length;
      return y ? l(e) : e
  }

  function Ge(e, t) {
      var r, i = [],
          a = [],
          s = ue[e + " "];
      if (!s) {
          for (r = (t = t || je(e)).length; r--;)((s = function e(t) {
              for (var i, r, a, s = t.length, n = S.relative[t[0].type], o = n || S.relative[" "], l = n ? 1 : 0, d = qe(function(e) {
                      return e === i
                  }, o, !0), c = qe(function(e) {
                      return -1 < b.call(i, e)
                  }, o, !0), p = [function(e, t, r) {
                      return e = !n && (r || t != ae) || ((i = t).nodeType ? d : c)(e, t, r), i = null, e
                  }]; l < s; l++)
                  if (r = S.relative[t[l].type]) p = [qe(Re(p), r)];
                  else {
                      if ((r = S.filter[t[l].type].apply(null, t[l].matches))[k]) {
                          for (a = ++l; a < s && !S.relative[t[a].type]; a++);
                          return Be(1 < l && Re(p), 1 < l && He(t.slice(0, l - 1).concat({
                              value: " " === t[l - 2].type ? "*" : ""
                          })).replace(ee, "$1"), r, l < a && e(t.slice(l, a)), a < s && e(t = t.slice(a)), a < s && He(t))
                      }
                      p.push(r)
                  } return Re(p)
          }(t[r]))[k] ? i : a).push(s);
          (s = ue(e, Fe(a, i))).selector = e
      }
      return s
  }

  function Xe(e, t, r, i) {
      var a, s, n, o, l, d = "function" == typeof e && e,
          c = !i && je(e = d.selector || e);
      if (r = r || [], 1 === c.length) {
          if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (n = s[0]).type && 9 === t.nodeType && M && S.relative[s[1].type]) {
              if (!(t = (S.find.ID(n.matches[0].replace(p, f), t) || [])[0])) return r;
              d && (t = t.parentNode), e = e.slice(s.shift().value.length)
          }
          for (a = Ee.needsContext.test(e) ? 0 : s.length; a-- && (n = s[a], !S.relative[o = n.type]);)
              if ((l = S.find[o]) && (i = l(n.matches[0].replace(p, f), Me.test(s[0].type) && Oe(t.parentNode) || t))) {
                  if (s.splice(a, 1), e = i.length && He(s)) break;
                  return L.apply(r, i), r
              }
      }
      return (d || Ge(e, c))(i, t, !M, r, !t || Me.test(e) && Oe(t.parentNode) || t), r
  }
  Ne.prototype = S.filters = S.pseudos, S.setFilters = new Ne, m.sortStable = k.split("").sort(he).join("") === k, ze(), m.sortDetached = Pe(function(e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
  }), T.find = P, T.expr[":"] = T.expr.pseudos, T.unique = T.uniqueSort, P.compile = Ge, P.select = Xe, P.setDocument = ze, P.tokenize = je, P.escape = T.escapeSelector, P.getText = T.text, P.isXML = T.isXMLDoc, P.selectors = T.expr, P.support = T.support, P.uniqueSort = T.uniqueSort;

  function We(e, t, r) {
      for (var i = [], a = void 0 !== r;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
              if (a && T(e).is(r)) break;
              i.push(e)
          } return i
  }

  function _e(e, t) {
      for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
      return r
  }
  var Ye = T.expr.match.needsContext,
      Ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function Ue(e, r, i) {
      return y(r) ? T.grep(e, function(e, t) {
          return !!r.call(e, t, e) !== i
      }) : r.nodeType ? T.grep(e, function(e) {
          return e === r !== i
      }) : "string" != typeof r ? T.grep(e, function(e) {
          return -1 < b.call(r, e) !== i
      }) : T.filter(r, e, i)
  }
  T.filter = function(e, t, r) {
      var i = t[0];
      return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, T.fn.extend({
      find: function(e) {
          var t, r, i = this.length,
              a = this;
          if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
              for (t = 0; t < i; t++)
                  if (T.contains(a[t], this)) return !0
          }));
          for (r = this.pushStack([]), t = 0; t < i; t++) T.find(e, a[t], r);
          return 1 < i ? T.uniqueSort(r) : r
      },
      filter: function(e) {
          return this.pushStack(Ue(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(Ue(this, e || [], !0))
      },
      is: function(e) {
          return !!Ue(this, "string" == typeof e && Ye.test(e) ? T(e) : e || [], !1).length
      }
  });
  var Ke, Qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Je = ((T.fn.init = function(e, t, r) {
          if (e) {
              if (r = r || Ke, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== r.ready ? r.ready(e) : e(T) : T.makeArray(e, this);
              if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Qe.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || r : this.constructor(t)).find(e);
              if (i[1]) {
                  if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), Ve.test(i[1]) && T.isPlainObject(t))
                      for (var i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
              } else(r = E.getElementById(i[2])) && (this[0] = r, this.length = 1)
          }
          return this
      }).prototype = T.fn, Ke = T(E), /^(?:parents|prev(?:Until|All))/),
      Ze = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };

  function et(e, t) {
      for (;
          (e = e[t]) && 1 !== e.nodeType;);
      return e
  }
  T.fn.extend({
      has: function(e) {
          var t = T(e, this),
              r = t.length;
          return this.filter(function() {
              for (var e = 0; e < r; e++)
                  if (T.contains(this, t[e])) return !0
          })
      },
      closest: function(e, t) {
          var r, i = 0,
              a = this.length,
              s = [],
              n = "string" != typeof e && T(e);
          if (!Ye.test(e))
              for (; i < a; i++)
                  for (r = this[i]; r && r !== t; r = r.parentNode)
                      if (r.nodeType < 11 && (n ? -1 < n.index(r) : 1 === r.nodeType && T.find.matchesSelector(r, e))) {
                          s.push(r);
                          break
                      } return this.pushStack(1 < s.length ? T.uniqueSort(s) : s)
      },
      index: function(e) {
          return e ? "string" == typeof e ? b.call(T(e), this[0]) : b.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), T.each({
      parent: function(e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null
      },
      parents: function(e) {
          return We(e, "parentNode")
      },
      parentsUntil: function(e, t, r) {
          return We(e, "parentNode", r)
      },
      next: function(e) {
          return et(e, "nextSibling")
      },
      prev: function(e) {
          return et(e, "previousSibling")
      },
      nextAll: function(e) {
          return We(e, "nextSibling")
      },
      prevAll: function(e) {
          return We(e, "previousSibling")
      },
      nextUntil: function(e, t, r) {
          return We(e, "nextSibling", r)
      },
      prevUntil: function(e, t, r) {
          return We(e, "previousSibling", r)
      },
      siblings: function(e) {
          return _e((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return _e(e.firstChild)
      },
      contents: function(e) {
          return null != e.contentDocument && q(e.contentDocument) ? e.contentDocument : (w(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
      }
  }, function(i, a) {
      T.fn[i] = function(e, t) {
          var r = T.map(this, a, e);
          return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (r = T.filter(t, r)), 1 < this.length && (Ze[i] || T.uniqueSort(r), Je.test(i)) && r.reverse(), this.pushStack(r)
      }
  });
  var D = /[^\x20\t\r\n\f]+/g;

  function tt(e) {
      return e
  }

  function rt(e) {
      throw e
  }

  function it(e, t, r, i) {
      var a;
      try {
          e && y(a = e.promise) ? a.call(e).done(t).fail(r) : e && y(a = e.then) ? a.call(e, t, r) : t.apply(void 0, [e].slice(i))
      } catch (e) {
          r.apply(void 0, [e])
      }
  }
  T.Callbacks = function(i) {
      var e, r;
      i = "string" == typeof i ? (e = i, r = {}, T.each(e.match(D) || [], function(e, t) {
          r[t] = !0
      }), r) : T.extend({}, i);

      function a() {
          for (o = o || i.once, n = s = !0; d.length; c = -1)
              for (t = d.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
          i.memory || (t = !1), s = !1, o && (l = t ? [] : "")
      }
      var s, t, n, o, l = [],
          d = [],
          c = -1,
          p = {
              add: function() {
                  return l && (t && !s && (c = l.length - 1, d.push(t)), function r(e) {
                      T.each(e, function(e, t) {
                          y(t) ? i.unique && p.has(t) || l.push(t) : t && t.length && "string" !== V(t) && r(t)
                      })
                  }(arguments), t) && !s && a(), this
              },
              remove: function() {
                  return T.each(arguments, function(e, t) {
                      for (var r; - 1 < (r = T.inArray(t, l, r));) l.splice(r, 1), r <= c && c--
                  }), this
              },
              has: function(e) {
                  return e ? -1 < T.inArray(e, l) : 0 < l.length
              },
              empty: function() {
                  return l = l && [], this
              },
              disable: function() {
                  return o = d = [], l = t = "", this
              },
              disabled: function() {
                  return !l
              },
              lock: function() {
                  return o = d = [], t || s || (l = t = ""), this
              },
              locked: function() {
                  return !!o
              },
              fireWith: function(e, t) {
                  return o || (t = [e, (t = t || []).slice ? t.slice() : t], d.push(t), s) || a(), this
              },
              fire: function() {
                  return p.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!n
              }
          };
      return p
  }, T.extend({
      Deferred: function(e) {
          var s = [
                  ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                  ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
              ],
              a = "pending",
              n = {
                  state: function() {
                      return a
                  },
                  always: function() {
                      return o.done(arguments).fail(arguments), this
                  },
                  catch: function(e) {
                      return n.then(null, e)
                  },
                  pipe: function() {
                      var a = arguments;
                      return T.Deferred(function(i) {
                          T.each(s, function(e, t) {
                              var r = y(a[t[4]]) && a[t[4]];
                              o[t[1]](function() {
                                  var e = r && r.apply(this, arguments);
                                  e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, r ? [e] : arguments)
                              })
                          }), a = null
                      }).promise()
                  },
                  then: function(t, r, i) {
                      var l = 0;

                      function d(a, s, n, o) {
                          return function() {
                              function e() {
                                  var e, t;
                                  if (!(a < l)) {
                                      if ((e = n.apply(r, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? o ? t.call(e, d(l, s, tt, o), d(l, s, rt, o)) : (l++, t.call(e, d(l, s, tt, o), d(l, s, rt, o), d(l, s, tt, s.notifyWith))) : (n !== tt && (r = void 0, i = [e]), (o || s.resolveWith)(r, i))
                                  }
                              }
                              var r = this,
                                  i = arguments,
                                  t = o ? e : function() {
                                      try {
                                          e()
                                      } catch (e) {
                                          T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.error), l <= a + 1 && (n !== rt && (r = void 0, i = [e]), s.rejectWith(r, i))
                                      }
                                  };
                              a ? t() : (T.Deferred.getErrorHook ? t.error = T.Deferred.getErrorHook() : T.Deferred.getStackHook && (t.error = T.Deferred.getStackHook()), x.setTimeout(t))
                          }
                      }
                      return T.Deferred(function(e) {
                          s[0][3].add(d(0, e, y(i) ? i : tt, e.notifyWith)), s[1][3].add(d(0, e, y(t) ? t : tt)), s[2][3].add(d(0, e, y(r) ? r : rt))
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? T.extend(e, n) : n
                  }
              },
              o = {};
          return T.each(s, function(e, t) {
              var r = t[2],
                  i = t[5];
              n[t[1]] = r.add, i && r.add(function() {
                  a = i
              }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), r.add(t[3].fire), o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              }, o[t[0] + "With"] = r.fireWith
          }), n.promise(o), e && e.call(o, o), o
      },
      when: function(e) {
          function t(t) {
              return function(e) {
                  a[t] = this, s[t] = 1 < arguments.length ? o.call(arguments) : e, --r || n.resolveWith(a, s)
              }
          }
          var r = arguments.length,
              i = r,
              a = Array(i),
              s = o.call(arguments),
              n = T.Deferred();
          if (r <= 1 && (it(e, n.done(t(i)).resolve, n.reject, !r), "pending" === n.state() || y(s[i] && s[i].then))) return n.then();
          for (; i--;) it(s[i], t(i), n.reject);
          return n.promise()
      }
  });
  var at = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
      st = (T.Deferred.exceptionHook = function(e, t) {
          x.console && x.console.warn && e && at.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
      }, T.readyException = function(e) {
          x.setTimeout(function() {
              throw e
          })
      }, T.Deferred());

  function nt() {
      E.removeEventListener("DOMContentLoaded", nt), x.removeEventListener("load", nt), T.ready()
  }
  T.fn.ready = function(e) {
      return st.then(e).catch(function(e) {
          T.readyException(e)
      }), this
  }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || st.resolveWith(E, [T])
      }
  }), T.ready.then = st.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? x.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", nt), x.addEventListener("load", nt));

  function c(e, t, r, i, a, s, n) {
      var o = 0,
          l = e.length,
          d = null == r;
      if ("object" === V(r))
          for (o in a = !0, r) c(e, t, o, r[o], !0, s, n);
      else if (void 0 !== i && (a = !0, y(i) || (n = !0), t = d ? n ? (t.call(e, i), null) : (d = t, function(e, t, r) {
              return d.call(T(e), r)
          }) : t))
          for (; o < l; o++) t(e[o], r, n ? i : i.call(e[o], o, t(e[o], r)));
      return a ? e : d ? t.call(e) : l ? t(e[0], r) : s
  }
  var ot = /^-ms-/,
      lt = /-([a-z])/g;

  function dt(e, t) {
      return t.toUpperCase()
  }

  function I(e) {
      return e.replace(ot, "ms-").replace(lt, dt)
  }

  function ct(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }

  function pt() {
      this.expando = T.expando + pt.uid++
  }
  pt.uid = 1, pt.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, ct(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))), t
      },
      set: function(e, t, r) {
          var i, a = this.cache(e);
          if ("string" == typeof t) a[I(t)] = r;
          else
              for (i in t) a[I(i)] = t[i];
          return a
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][I(t)]
      },
      access: function(e, t, r) {
          return void 0 === t || t && "string" == typeof t && void 0 === r ? this.get(e, t) : (this.set(e, t, r), void 0 !== r ? r : t)
      },
      remove: function(e, t) {
          var r, i = e[this.expando];
          if (void 0 !== i) {
              if (void 0 !== t) {
                  r = (t = Array.isArray(t) ? t.map(I) : (t = I(t)) in i ? [t] : t.match(D) || []).length;
                  for (; r--;) delete i[t[r]]
              }
              void 0 !== t && !T.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          e = e[this.expando];
          return void 0 !== e && !T.isEmptyObject(e)
      }
  };
  var g = new pt,
      d = new pt,
      ut = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ft = /[A-Z]/g;

  function ht(e, t, r) {
      var i, a;
      if (void 0 === r && 1 === e.nodeType)
          if (i = "data-" + t.replace(ft, "-$&").toLowerCase(), "string" == typeof(r = e.getAttribute(i))) {
              try {
                  r = "true" === (a = r) || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : ut.test(a) ? JSON.parse(a) : a)
              } catch (e) {}
              d.set(e, t, r)
          } else r = void 0;
      return r
  }
  T.extend({
      hasData: function(e) {
          return d.hasData(e) || g.hasData(e)
      },
      data: function(e, t, r) {
          return d.access(e, t, r)
      },
      removeData: function(e, t) {
          d.remove(e, t)
      },
      _data: function(e, t, r) {
          return g.access(e, t, r)
      },
      _removeData: function(e, t) {
          g.remove(e, t)
      }
  }), T.fn.extend({
      data: function(r, e) {
          var t, i, a, s = this[0],
              n = s && s.attributes;
          if (void 0 !== r) return "object" == typeof r ? this.each(function() {
              d.set(this, r)
          }) : c(this, function(e) {
              var t;
              if (s && void 0 === e) return void 0 !== (t = d.get(s, r)) || void 0 !== (t = ht(s, r)) ? t : void 0;
              this.each(function() {
                  d.set(this, r, e)
              })
          }, null, e, 1 < arguments.length, null, !0);
          if (this.length && (a = d.get(s), 1 === s.nodeType) && !g.get(s, "hasDataAttrs")) {
              for (t = n.length; t--;) n[t] && 0 === (i = n[t].name).indexOf("data-") && (i = I(i.slice(5)), ht(s, i, a[i]));
              g.set(s, "hasDataAttrs", !0)
          }
          return a
      },
      removeData: function(e) {
          return this.each(function() {
              d.remove(this, e)
          })
      }
  }), T.extend({
      queue: function(e, t, r) {
          var i;
          if (e) return i = g.get(e, t = (t || "fx") + "queue"), r && (!i || Array.isArray(r) ? i = g.access(e, t, T.makeArray(r)) : i.push(r)), i || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var r = T.queue(e, t),
              i = r.length,
              a = r.shift(),
              s = T._queueHooks(e, t);
          "inprogress" === a && (a = r.shift(), i--), a && ("fx" === t && r.unshift("inprogress"), delete s.stop, a.call(e, function() {
              T.dequeue(e, t)
          }, s)), !i && s && s.empty.fire()
      },
      _queueHooks: function(e, t) {
          var r = t + "queueHooks";
          return g.get(e, r) || g.access(e, r, {
              empty: T.Callbacks("once memory").add(function() {
                  g.remove(e, [t + "queue", r])
              })
          })
      }
  }), T.fn.extend({
      queue: function(t, r) {
          var e = 2;
          return "string" != typeof t && (r = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === r ? this : this.each(function() {
              var e = T.queue(this, t, r);
              T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              T.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          function r() {
              --a || s.resolveWith(n, [n])
          }
          var i, a = 1,
              s = T.Deferred(),
              n = this,
              o = this.length;
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(i = g.get(n[o], e + "queueHooks")) && i.empty && (a++, i.empty.add(r));
          return r(), s.promise(t)
      }
  });

  function mt(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && bt(e) && "none" === T.css(e, "display")
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      vt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
      gt = ["Top", "Right", "Bottom", "Left"],
      yt = E.documentElement,
      bt = function(e) {
          return T.contains(e.ownerDocument, e)
      },
      wt = {
          composed: !0
      };
  yt.getRootNode && (bt = function(e) {
      return T.contains(e.ownerDocument, e) || e.getRootNode(wt) === e.ownerDocument
  });

  function xt(e, t, r, i) {
      var a, s, n = 20,
          o = i ? function() {
              return i.cur()
          } : function() {
              return T.css(e, t, "")
          },
          l = o(),
          d = r && r[3] || (T.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (T.cssNumber[t] || "px" !== d && +l) && vt.exec(T.css(e, t));
      if (c && c[3] !== d) {
          for (d = d || c[3], c = +(l /= 2) || 1; n--;) T.style(e, t, c + d), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (n = 0), c /= s;
          T.style(e, t, (c *= 2) + d), r = r || []
      }
      return r && (c = +c || +l || 0, a = r[1] ? c + (r[1] + 1) * r[2] : +r[2], i) && (i.unit = d, i.start = c, i.end = a), a
  }
  var Et = {};

  function Tt(e, t) {
      for (var r, i, a, s, n, o = [], l = 0, d = e.length; l < d; l++)(i = e[l]).style && (r = i.style.display, t ? ("none" === r && (o[l] = g.get(i, "display") || null, o[l] || (i.style.display = "")), "" === i.style.display && mt(i) && (o[l] = (n = s = void 0, s = (a = i).ownerDocument, a = a.nodeName, (n = Et[a]) || (s = s.body.appendChild(s.createElement(a)), n = T.css(s, "display"), s.parentNode.removeChild(s), Et[a] = n = "none" === n ? "block" : n), n))) : "none" !== r && (o[l] = "none", g.set(i, "display", r)));
      for (l = 0; l < d; l++) null != o[l] && (e[l].style.display = o[l]);
      return e
  }
  T.fn.extend({
      show: function() {
          return Tt(this, !0)
      },
      hide: function() {
          return Tt(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              mt(this) ? T(this).show() : T(this).hide()
          })
      }
  });
  var St = /^(?:checkbox|radio)$/i,
      Ct = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      Mt = /^$|^module$|\/(?:java|ecma)script/i,
      h = (s = E.createDocumentFragment().appendChild(E.createElement("div")), (n = E.createElement("input")).setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), s.appendChild(n), m.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", m.option = !!s.lastChild, {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      });

  function v(e, t) {
      var r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && w(e, t) ? T.merge([e], r) : r
  }

  function Lt(e, t) {
      for (var r = 0, i = e.length; r < i; r++) g.set(e[r], "globalEval", !t || g.get(t[r], "globalEval"))
  }
  h.tbody = h.tfoot = h.colgroup = h.caption = h.thead, h.th = h.td, m.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "</select>"]);
  var kt = /<|&#?\w+;/;

  function At(e, t, r, i, a) {
      for (var s, n, o, l, d, c = t.createDocumentFragment(), p = [], u = 0, f = e.length; u < f; u++)
          if ((s = e[u]) || 0 === s)
              if ("object" === V(s)) T.merge(p, s.nodeType ? [s] : s);
              else if (kt.test(s)) {
          for (n = n || c.appendChild(t.createElement("div")), o = (Ct.exec(s) || ["", ""])[1].toLowerCase(), o = h[o] || h._default, n.innerHTML = o[1] + T.htmlPrefilter(s) + o[2], d = o[0]; d--;) n = n.lastChild;
          T.merge(p, n.childNodes), (n = c.firstChild).textContent = ""
      } else p.push(t.createTextNode(s));
      for (c.textContent = "", u = 0; s = p[u++];)
          if (i && -1 < T.inArray(s, i)) a && a.push(s);
          else if (l = bt(s), n = v(c.appendChild(s), "script"), l && Lt(n), r)
          for (d = 0; s = n[d++];) Mt.test(s.type || "") && r.push(s);
      return c
  }
  var Pt = /^([^.]*)(?:\.(.+)|)/;

  function Dt() {
      return !0
  }

  function It() {
      return !1
  }

  function Ot(e, t, r, i, a, s) {
      var n, o;
      if ("object" == typeof t) {
          for (o in "string" != typeof r && (i = i || r, r = void 0), t) Ot(e, o, r, i, t[o], s);
          return e
      }
      if (null == i && null == a ? (a = r, i = r = void 0) : null == a && ("string" == typeof r ? (a = i, i = void 0) : (a = i, i = r, r = void 0)), !1 === a) a = It;
      else if (!a) return e;
      return 1 === s && (n = a, (a = function(e) {
          return T().off(e), n.apply(this, arguments)
      }).guid = n.guid || (n.guid = T.guid++)), e.each(function() {
          T.event.add(this, t, a, i, r)
      })
  }

  function zt(e, i, t) {
      t ? (g.set(e, i, !1), T.event.add(e, i, {
          namespace: !1,
          handler: function(e) {
              var t, r = g.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                  if (r)(T.event.special[i] || {}).delegateType && e.stopPropagation();
                  else if (r = o.call(arguments), g.set(this, i, r), this[i](), t = g.get(this, i), g.set(this, i, !1), r !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
              } else r && (g.set(this, i, T.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Dt)
          }
      })) : void 0 === g.get(e, i) && T.event.add(e, i, Dt)
  }
  T.event = {
      global: {},
      add: function(t, e, r, i, a) {
          var s, n, o, l, d, c, p, u, f, h = g.get(t);
          if (ct(t))
              for (r.handler && (r = (s = r).handler, a = s.selector), a && T.find.matchesSelector(yt, a), r.guid || (r.guid = T.guid++), o = (o = h.events) || (h.events = Object.create(null)), n = (n = h.handle) || (h.handle = function(e) {
                      return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                  }), l = (e = (e || "").match(D) || [""]).length; l--;) p = f = (u = Pt.exec(e[l]) || [])[1], u = (u[2] || "").split(".").sort(), p && (d = T.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, d = T.event.special[p] || {}, f = T.extend({
                  type: p,
                  origType: f,
                  data: i,
                  handler: r,
                  guid: r.guid,
                  selector: a,
                  needsContext: a && T.expr.match.needsContext.test(a),
                  namespace: u.join(".")
              }, s), (c = o[p]) || ((c = o[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, u, n)) || t.addEventListener && t.addEventListener(p, n), d.add && (d.add.call(t, f), f.handler.guid || (f.handler.guid = r.guid)), a ? c.splice(c.delegateCount++, 0, f) : c.push(f), T.event.global[p] = !0)
      },
      remove: function(e, t, r, i, a) {
          var s, n, o, l, d, c, p, u, f, h, m, v = g.hasData(e) && g.get(e);
          if (v && (l = v.events)) {
              for (d = (t = (t || "").match(D) || [""]).length; d--;)
                  if (f = m = (o = Pt.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), f) {
                      for (p = T.event.special[f] || {}, u = l[f = (i ? p.delegateType : p.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), n = s = u.length; s--;) c = u[s], !a && m !== c.origType || r && r.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (u.splice(s, 1), c.selector && u.delegateCount--, p.remove && p.remove.call(e, c));
                      n && !u.length && (p.teardown && !1 !== p.teardown.call(e, h, v.handle) || T.removeEvent(e, f, v.handle), delete l[f])
                  } else
                      for (f in l) T.event.remove(e, f + t[d], r, i, !0);
              T.isEmptyObject(l) && g.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t, r, i, a, s, n = new Array(arguments.length),
              o = T.event.fix(e),
              e = (g.get(this, "events") || Object.create(null))[o.type] || [],
              l = T.event.special[o.type] || {};
          for (n[0] = o, t = 1; t < arguments.length; t++) n[t] = arguments[t];
          if (o.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, o)) {
              for (s = T.event.handlers.call(this, o, e), t = 0;
                  (i = s[t++]) && !o.isPropagationStopped();)
                  for (o.currentTarget = i.elem, r = 0;
                      (a = i.handlers[r++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== a.namespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (a = ((T.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, n)) && !1 === (o.result = a) && (o.preventDefault(), o.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, o), o.result
          }
      },
      handlers: function(e, t) {
          var r, i, a, s, n, o = [],
              l = t.delegateCount,
              d = e.target;
          if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
              for (; d !== this; d = d.parentNode || this)
                  if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                      for (s = [], n = {}, r = 0; r < l; r++) void 0 === n[a = (i = t[r]).selector + " "] && (n[a] = i.needsContext ? -1 < T(a, this).index(d) : T.find(a, this, null, [d]).length), n[a] && s.push(i);
                      s.length && o.push({
                          elem: d,
                          handlers: s
                      })
                  } return d = this, l < t.length && o.push({
              elem: d,
              handlers: t.slice(l)
          }), o
      },
      addProp: function(t, e) {
          Object.defineProperty(T.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: y(e) ? function() {
                  if (this.originalEvent) return e(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[t]
              },
              set: function(e) {
                  Object.defineProperty(this, t, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: e
                  })
              }
          })
      },
      fix: function(e) {
          return e[T.expando] ? e : new T.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          click: {
              setup: function(e) {
                  e = this || e;
                  return St.test(e.type) && e.click && w(e, "input") && zt(e, "click", !0), !1
              },
              trigger: function(e) {
                  e = this || e;
                  return St.test(e.type) && e.click && w(e, "input") && zt(e, "click"), !0
              },
              _default: function(e) {
                  e = e.target;
                  return St.test(e.type) && e.click && w(e, "input") && g.get(e, "click") || w(e, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  }, T.removeEvent = function(e, t, r) {
      e.removeEventListener && e.removeEventListener(t, r)
  }, T.Event = function(e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Dt : It, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
  }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: It,
      isPropagationStopped: It,
      isImmediatePropagationStopped: It,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Dt, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Dt, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Dt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
  }, T.event.addProp), T.each({
      focus: "focusin",
      blur: "focusout"
  }, function(i, a) {
      function s(e) {
          var t, r;
          E.documentMode ? (t = g.get(this, "handle"), (r = T.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, t(e), r.target === r.currentTarget && t(r)) : T.event.simulate(a, e.target, T.event.fix(e))
      }
      T.event.special[i] = {
          setup: function() {
              var e;
              if (zt(this, i, !0), !E.documentMode) return !1;
              (e = g.get(this, a)) || this.addEventListener(a, s), g.set(this, a, (e || 0) + 1)
          },
          trigger: function() {
              return zt(this, i), !0
          },
          teardown: function() {
              var e;
              if (!E.documentMode) return !1;
              (e = g.get(this, a) - 1) ? g.set(this, a, e): (this.removeEventListener(a, s), g.remove(this, a))
          },
          _default: function(e) {
              return g.get(e.target, i)
          },
          delegateType: a
      }, T.event.special[a] = {
          setup: function() {
              var e = this.ownerDocument || this.document || this,
                  t = E.documentMode ? this : e,
                  r = g.get(t, a);
              r || (E.documentMode ? this.addEventListener(a, s) : e.addEventListener(i, s, !0)), g.set(t, a, (r || 0) + 1)
          },
          teardown: function() {
              var e = this.ownerDocument || this.document || this,
                  t = E.documentMode ? this : e,
                  r = g.get(t, a) - 1;
              r ? g.set(t, a, r) : (E.documentMode ? this.removeEventListener(a, s) : e.removeEventListener(i, s, !0), g.remove(t, a))
          }
      }
  }), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, a) {
      T.event.special[e] = {
          delegateType: a,
          bindType: a,
          handle: function(e) {
              var t, r = e.relatedTarget,
                  i = e.handleObj;
              return r && (r === this || T.contains(this, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = a), t
          }
      }
  }), T.fn.extend({
      on: function(e, t, r, i) {
          return Ot(this, e, t, r, i)
      },
      one: function(e, t, r, i) {
          return Ot(this, e, t, r, i, 1)
      },
      off: function(e, t, r) {
          var i, a;
          if (e && e.preventDefault && e.handleObj) i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
          else {
              if ("object" != typeof e) return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = It), this.each(function() {
                  T.event.remove(this, e, r, t)
              });
              for (a in e) this.off(a, t, e[a])
          }
          return this
      }
  });
  var Nt = /<script|<style|<link/i,
      jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ht = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

  function qt(e, t) {
      return w(e, "table") && w(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
  }

  function Rt(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function $t(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Bt(e, t) {
      var r, i, a, s;
      if (1 === t.nodeType) {
          if (g.hasData(e) && (s = g.get(e).events))
              for (a in g.remove(t, "handle events"), s)
                  for (r = 0, i = s[a].length; r < i; r++) T.event.add(t, a, s[a][r]);
          d.hasData(e) && (e = d.access(e), e = T.extend({}, e), d.set(t, e))
      }
  }

  function Ft(r, i, a, s) {
      i = R(i);
      var e, t, n, o, l, d, c = 0,
          p = r.length,
          u = p - 1,
          f = i[0],
          h = y(f);
      if (h || 1 < p && "string" == typeof f && !m.checkClone && jt.test(f)) return r.each(function(e) {
          var t = r.eq(e);
          h && (i[0] = f.call(this, e, t.html())), Ft(t, i, a, s)
      });
      if (p && (t = (e = At(i, r[0].ownerDocument, !1, r, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
          for (o = (n = T.map(v(e, "script"), Rt)).length; c < p; c++) l = e, c !== u && (l = T.clone(l, !0, !0), o) && T.merge(n, v(l, "script")), a.call(r[c], l, c);
          if (o)
              for (d = n[n.length - 1].ownerDocument, T.map(n, $t), c = 0; c < o; c++) l = n[c], Mt.test(l.type || "") && !g.access(l, "globalEval") && T.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                  nonce: l.nonce || l.getAttribute("nonce")
              }, d) : Y(l.textContent.replace(Ht, ""), l, d))
      }
      return r
  }

  function Gt(e, t, r) {
      for (var i, a = t ? T.filter(t, e) : e, s = 0; null != (i = a[s]); s++) r || 1 !== i.nodeType || T.cleanData(v(i)), i.parentNode && (r && bt(i) && Lt(v(i, "script")), i.parentNode.removeChild(i));
      return e
  }
  T.extend({
      htmlPrefilter: function(e) {
          return e
      },
      clone: function(e, t, r) {
          var i, a, s, n, o, l, d, c = e.cloneNode(!0),
              p = bt(e);
          if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
              for (n = v(c), i = 0, a = (s = v(e)).length; i < a; i++) o = s[i], l = n[i], d = void 0, "input" === (d = l.nodeName.toLowerCase()) && St.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
          if (t)
              if (r)
                  for (s = s || v(e), n = n || v(c), i = 0, a = s.length; i < a; i++) Bt(s[i], n[i]);
              else Bt(e, c);
          return 0 < (n = v(c, "script")).length && Lt(n, !p && v(e, "script")), c
      },
      cleanData: function(e) {
          for (var t, r, i, a = T.event.special, s = 0; void 0 !== (r = e[s]); s++)
              if (ct(r)) {
                  if (t = r[g.expando]) {
                      if (t.events)
                          for (i in t.events) a[i] ? T.event.remove(r, i) : T.removeEvent(r, i, t.handle);
                      r[g.expando] = void 0
                  }
                  r[d.expando] && (r[d.expando] = void 0)
              }
      }
  }), T.fn.extend({
      detach: function(e) {
          return Gt(this, e, !0)
      },
      remove: function(e) {
          return Gt(this, e)
      },
      text: function(e) {
          return c(this, function(e) {
              return void 0 === e ? T.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return Ft(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qt(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return Ft(this, arguments, function(e) {
              var t;
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = qt(this, e)).insertBefore(e, t.firstChild)
          })
      },
      before: function() {
          return Ft(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return Ft(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(v(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
              return T.clone(this, e, t)
          })
      },
      html: function(e) {
          return c(this, function(e) {
              var t = this[0] || {},
                  r = 0,
                  i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !Nt.test(e) && !h[(Ct.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = T.htmlPrefilter(e);
                  try {
                      for (; r < i; r++) 1 === (t = this[r] || {}).nodeType && (T.cleanData(v(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var r = [];
          return Ft(this, arguments, function(e) {
              var t = this.parentNode;
              T.inArray(this, r) < 0 && (T.cleanData(v(this)), t) && t.replaceChild(e, this)
          }, r)
      }
  }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, n) {
      T.fn[e] = function(e) {
          for (var t, r = [], i = T(e), a = i.length - 1, s = 0; s <= a; s++) t = s === a ? this : this.clone(!0), T(i[s])[n](t), $.apply(r, t.get());
          return this.pushStack(r)
      }
  });

  function Xt(e) {
      var t = e.ownerDocument.defaultView;
      return (t = t && t.opener ? t : x).getComputedStyle(e)
  }

  function Wt(e, t, r) {
      var i, a = {};
      for (i in t) a[i] = e.style[i], e.style[i] = t[i];
      for (i in r = r.call(e), t) e.style[i] = a[i];
      return r
  }
  var _t, Yt, Vt, Ut, Kt, Qt, Jt, O, Zt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
      er = /^--/,
      tr = new RegExp(gt.join("|"), "i");

  function rr() {
      var e;
      O && (Jt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", O.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", yt.appendChild(Jt).appendChild(O), e = x.getComputedStyle(O), _t = "1%" !== e.top, Qt = 12 === ir(e.marginLeft), O.style.right = "60%", Ut = 36 === ir(e.right), Yt = 36 === ir(e.width), O.style.position = "absolute", Vt = 12 === ir(O.offsetWidth / 3), yt.removeChild(Jt), O = null)
  }

  function ir(e) {
      return Math.round(parseFloat(e))
  }

  function ar(e, t, r) {
      var i, a = er.test(t),
          s = e.style;
      return (r = r || Xt(e)) && (i = r.getPropertyValue(t) || r[t], "" !== (i = a ? i && (i.replace(ee, "$1") || void 0) : i) || bt(e) || (i = T.style(e, t)), !m.pixelBoxStyles()) && Zt.test(i) && tr.test(t) && (a = s.width, e = s.minWidth, t = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = r.width, s.width = a, s.minWidth = e, s.maxWidth = t), void 0 !== i ? i + "" : i
  }

  function sr(e, t) {
      return {
          get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  Jt = E.createElement("div"), (O = E.createElement("div")).style && (O.style.backgroundClip = "content-box", O.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === O.style.backgroundClip, T.extend(m, {
      boxSizingReliable: function() {
          return rr(), Yt
      },
      pixelBoxStyles: function() {
          return rr(), Ut
      },
      pixelPosition: function() {
          return rr(), _t
      },
      reliableMarginLeft: function() {
          return rr(), Qt
      },
      scrollboxSize: function() {
          return rr(), Vt
      },
      reliableTrDimensions: function() {
          var e, t, r;
          return null == Kt && (e = E.createElement("table"), t = E.createElement("tr"), r = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", yt.appendChild(e).appendChild(t).appendChild(r), r = x.getComputedStyle(t), Kt = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, yt.removeChild(e)), Kt
      }
  }));
  var nr = ["Webkit", "Moz", "ms"],
      or = E.createElement("div").style,
      lr = {};

  function dr(e) {
      var t = T.cssProps[e] || lr[e];
      return t || (e in or ? e : lr[e] = function(e) {
          for (var t = e[0].toUpperCase() + e.slice(1), r = nr.length; r--;)
              if ((e = nr[r] + t) in or) return e
      }(e) || e)
  }
  var cr = /^(none|table(?!-c[ea]).+)/,
      pr = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      ur = {
          letterSpacing: "0",
          fontWeight: "400"
      };

  function fr(e, t, r) {
      var i = vt.exec(t);
      return i ? Math.max(0, i[2] - (r || 0)) + (i[3] || "px") : t
  }

  function hr(e, t, r, i, a, s) {
      var n = "width" === t ? 1 : 0,
          o = 0,
          l = 0,
          d = 0;
      if (r === (i ? "border" : "content")) return 0;
      for (; n < 4; n += 2) "margin" === r && (d += T.css(e, r + gt[n], !0, a)), i ? ("content" === r && (l -= T.css(e, "padding" + gt[n], !0, a)), "margin" !== r && (l -= T.css(e, "border" + gt[n] + "Width", !0, a))) : (l += T.css(e, "padding" + gt[n], !0, a), "padding" !== r ? l += T.css(e, "border" + gt[n] + "Width", !0, a) : o += T.css(e, "border" + gt[n] + "Width", !0, a));
      return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5)) || 0), l + d
  }

  function mr(e, t, r) {
      var i = Xt(e),
          a = (!m.boxSizingReliable() || r) && "border-box" === T.css(e, "boxSizing", !1, i),
          s = a,
          n = ar(e, t, i),
          o = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Zt.test(n)) {
          if (!r) return n;
          n = "auto"
      }
      return (!m.boxSizingReliable() && a || !m.reliableTrDimensions() && w(e, "tr") || "auto" === n || !parseFloat(n) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (a = "border-box" === T.css(e, "boxSizing", !1, i), s = o in e) && (n = e[o]), (n = parseFloat(n) || 0) + hr(e, t, r || (a ? "border" : "content"), s, i, n) + "px"
  }

  function z(e, t, r, i, a) {
      return new z.prototype.init(e, t, r, i, a)
  }
  T.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) return "" === (t = ar(e, "opacity")) ? "1" : t
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0
      },
      cssProps: {},
      style: function(e, t, r, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var a, s, n, o = I(t),
                  l = er.test(t),
                  d = e.style;
              if (l || (t = dr(o)), n = T.cssHooks[t] || T.cssHooks[o], void 0 === r) return n && "get" in n && void 0 !== (a = n.get(e, !1, i)) ? a : d[t];
              "string" === (s = typeof r) && (a = vt.exec(r)) && a[1] && (r = xt(e, t, a), s = "number"), null == r || r != r || ("number" !== s || l || (r += a && a[3] || (T.cssNumber[o] ? "" : "px")), m.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (d[t] = "inherit"), n && "set" in n && void 0 === (r = n.set(e, r, i))) || (l ? d.setProperty(t, r) : d[t] = r)
          }
      },
      css: function(e, t, r, i) {
          var a, s = I(t);
          return er.test(t) || (t = dr(s)), "normal" === (a = void 0 === (a = (s = T.cssHooks[t] || T.cssHooks[s]) && "get" in s ? s.get(e, !0, r) : a) ? ar(e, t, i) : a) && t in ur && (a = ur[t]), ("" === r || r) && (s = parseFloat(a), !0 === r || isFinite(s)) ? s || 0 : a
      }
  }), T.each(["height", "width"], function(e, n) {
      T.cssHooks[n] = {
          get: function(e, t, r) {
              if (t) return !cr.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? mr(e, n, r) : Wt(e, pr, function() {
                  return mr(e, n, r)
              })
          },
          set: function(e, t, r) {
              var i = Xt(e),
                  a = !m.scrollboxSize() && "absolute" === i.position,
                  s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, i),
                  r = r ? hr(e, n, r, s, i) : 0;
              return s && a && (r -= Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(i[n]) - hr(e, n, "border", !1, i) - .5)), r && (s = vt.exec(t)) && "px" !== (s[3] || "px") && (e.style[n] = t, t = T.css(e, n)), fr(0, t, r)
          }
      }
  }), T.cssHooks.marginLeft = sr(m.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(ar(e, "marginLeft")) || e.getBoundingClientRect().left - Wt(e, {
          marginLeft: 0
      }, function() {
          return e.getBoundingClientRect().left
      })) + "px"
  }), T.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(a, s) {
      T.cssHooks[a + s] = {
          expand: function(e) {
              for (var t = 0, r = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) r[a + gt[t] + s] = i[t] || i[t - 2] || i[0];
              return r
          }
      }, "margin" !== a && (T.cssHooks[a + s].set = fr)
  }), T.fn.extend({
      css: function(e, t) {
          return c(this, function(e, t, r) {
              var i, a, s = {},
                  n = 0;
              if (Array.isArray(t)) {
                  for (i = Xt(e), a = t.length; n < a; n++) s[t[n]] = T.css(e, t[n], !1, i);
                  return s
              }
              return void 0 !== r ? T.style(e, t, r) : T.css(e, t)
          }, e, t, 1 < arguments.length)
      }
  }), ((T.Tween = z).prototype = {
      constructor: z,
      init: function(e, t, r, i, a, s) {
          this.elem = e, this.prop = r, this.easing = a || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (T.cssNumber[r] ? "" : "px")
      },
      cur: function() {
          var e = z.propHooks[this.prop];
          return (e && e.get ? e : z.propHooks._default).get(this)
      },
      run: function(e) {
          var t, r = z.propHooks[this.prop];
          return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (r && r.set ? r : z.propHooks._default).set(this), this
      }
  }).init.prototype = z.prototype, (z.propHooks = {
      _default: {
          get: function(e) {
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = T.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
          },
          set: function(e) {
              T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[dr(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  }).scrollTop = z.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, T.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  }, T.fx = z.prototype.init, T.fx.step = {};
  var vr, gr, yr = /^(?:toggle|show|hide)$/,
      br = /queueHooks$/;

  function wr() {
      gr && (!1 === E.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(wr) : x.setTimeout(wr, T.fx.interval), T.fx.tick())
  }

  function xr() {
      return x.setTimeout(function() {
          vr = void 0
      }), vr = Date.now()
  }

  function Er(e, t) {
      var r, i = 0,
          a = {
              height: e
          };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) a["margin" + (r = gt[i])] = a["padding" + r] = e;
      return t && (a.opacity = a.width = e), a
  }

  function Tr(e, t, r) {
      for (var i, a = (N.tweeners[t] || []).concat(N.tweeners["*"]), s = 0, n = a.length; s < n; s++)
          if (i = a[s].call(r, t, e)) return i
  }

  function N(a, e, t) {
      var r, s, i, n, o, l, d, c = 0,
          p = N.prefilters.length,
          u = T.Deferred().always(function() {
              delete f.elem
          }),
          f = function() {
              if (!s) {
                  for (var e = vr || xr(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), r = 0, i = h.tweens.length; r < i; r++) h.tweens[r].run(t);
                  if (u.notifyWith(a, [h, t, e]), t < 1 && i) return e;
                  i || u.notifyWith(a, [h, 1, 0]), u.resolveWith(a, [h])
              }
              return !1
          },
          h = u.promise({
              elem: a,
              props: T.extend({}, e),
              opts: T.extend(!0, {
                  specialEasing: {},
                  easing: T.easing._default
              }, t),
              originalProperties: e,
              originalOptions: t,
              startTime: vr || xr(),
              duration: t.duration,
              tweens: [],
              createTween: function(e, t) {
                  t = T.Tween(a, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                  return h.tweens.push(t), t
              },
              stop: function(e) {
                  var t = 0,
                      r = e ? h.tweens.length : 0;
                  if (!s) {
                      for (s = !0; t < r; t++) h.tweens[t].run(1);
                      e ? (u.notifyWith(a, [h, 1, 0]), u.resolveWith(a, [h, e])) : u.rejectWith(a, [h, e])
                  }
                  return this
              }
          }),
          m = h.props,
          v = m,
          g = h.opts.specialEasing;
      for (i in v)
          if (o = g[n = I(i)], l = v[i], Array.isArray(l) && (o = l[1], l = v[i] = l[0]), i !== n && (v[n] = l, delete v[i]), (d = T.cssHooks[n]) && "expand" in d)
              for (i in l = d.expand(l), delete v[n], l) i in v || (v[i] = l[i], g[i] = o);
          else g[n] = o;
      for (; c < p; c++)
          if (r = N.prefilters[c].call(h, a, m, h.opts)) return y(r.stop) && (T._queueHooks(h.elem, h.opts.queue).stop = r.stop.bind(r)), r;
      return T.map(m, Tr, h), y(h.opts.start) && h.opts.start.call(a, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), T.fx.timer(T.extend(f, {
          elem: a,
          anim: h,
          queue: h.opts.queue
      })), h
  }
  T.Animation = T.extend(N, {
      tweeners: {
          "*": [function(e, t) {
              var r = this.createTween(e, t);
              return xt(r.elem, e, vt.exec(t), r), r
          }]
      },
      tweener: function(e, t) {
          for (var r, i = 0, a = (e = y(e) ? (t = e, ["*"]) : e.match(D)).length; i < a; i++) r = e[i], N.tweeners[r] = N.tweeners[r] || [], N.tweeners[r].unshift(t)
      },
      prefilters: [function(e, t, r) {
          var i, a, s, n, o, l, d, c = "width" in t || "height" in t,
              p = this,
              u = {},
              f = e.style,
              h = e.nodeType && mt(e),
              m = g.get(e, "fxshow");
          for (i in r.queue || (null == (n = T._queueHooks(e, "fx")).unqueued && (n.unqueued = 0, o = n.empty.fire, n.empty.fire = function() {
                  n.unqueued || o()
              }), n.unqueued++, p.always(function() {
                  p.always(function() {
                      n.unqueued--, T.queue(e, "fx").length || n.empty.fire()
                  })
              })), t)
              if (a = t[i], yr.test(a)) {
                  if (delete t[i], s = s || "toggle" === a, a === (h ? "hide" : "show")) {
                      if ("show" !== a || !m || void 0 === m[i]) continue;
                      h = !0
                  }
                  u[i] = m && m[i] || T.style(e, i)
              } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(u))
              for (i in c && 1 === e.nodeType && (r.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = m && m.display) && (d = g.get(e, "display")), "none" === (c = T.css(e, "display")) && (d ? c = d : (Tt([e], !0), d = e.style.display || d, c = T.css(e, "display"), Tt([e]))), "inline" === c || "inline-block" === c && null != d) && "none" === T.css(e, "float") && (l || (p.done(function() {
                      f.display = d
                  }), null == d && (c = f.display, d = "none" === c ? "" : c)), f.display = "inline-block"), r.overflow && (f.overflow = "hidden", p.always(function() {
                      f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2]
                  })), l = !1, u) l || (m ? "hidden" in m && (h = m.hidden) : m = g.access(e, "fxshow", {
                  display: d
              }), s && (m.hidden = !h), h && Tt([e], !0), p.done(function() {
                  for (i in h || Tt([e]), g.remove(e, "fxshow"), u) T.style(e, i, u[i])
              })), l = Tr(h ? m[i] : 0, i, p), i in m || (m[i] = l.start, h && (l.end = l.start, l.start = 0))
      }],
      prefilter: function(e, t) {
          t ? N.prefilters.unshift(e) : N.prefilters.push(e)
      }
  }), T.speed = function(e, t, r) {
      var i = e && "object" == typeof e ? T.extend({}, e) : {
          complete: r || !r && t || y(e) && e,
          duration: e,
          easing: r && t || t && !y(t) && t
      };
      return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
      }, i
  }, T.fn.extend({
      fadeTo: function(e, t, r, i) {
          return this.filter(mt).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, r, i)
      },
      animate: function(t, e, r, i) {
          function a() {
              var e = N(this, T.extend({}, t), n);
              (s || g.get(this, "finish")) && e.stop(!0)
          }
          var s = T.isEmptyObject(t),
              n = T.speed(e, r, i);
          return a.finish = a, s || !1 === n.queue ? this.each(a) : this.queue(n.queue, a)
      },
      stop: function(a, e, s) {
          function n(e) {
              var t = e.stop;
              delete e.stop, t(s)
          }
          return "string" != typeof a && (s = e, e = a, a = void 0), e && this.queue(a || "fx", []), this.each(function() {
              var e = !0,
                  t = null != a && a + "queueHooks",
                  r = T.timers,
                  i = g.get(this);
              if (t) i[t] && i[t].stop && n(i[t]);
              else
                  for (t in i) i[t] && i[t].stop && br.test(t) && n(i[t]);
              for (t = r.length; t--;) r[t].elem !== this || null != a && r[t].queue !== a || (r[t].anim.stop(s), e = !1, r.splice(t, 1));
              !e && s || T.dequeue(this, a)
          })
      },
      finish: function(n) {
          return !1 !== n && (n = n || "fx"), this.each(function() {
              var e, t = g.get(this),
                  r = t[n + "queue"],
                  i = t[n + "queueHooks"],
                  a = T.timers,
                  s = r ? r.length : 0;
              for (t.finish = !0, T.queue(this, n, []), i && i.stop && i.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === n && (a[e].anim.stop(!0), a.splice(e, 1));
              for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
              delete t.finish
          })
      }
  }), T.each(["toggle", "show", "hide"], function(e, i) {
      var a = T.fn[i];
      T.fn[i] = function(e, t, r) {
          return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(Er(i, !0), e, t, r)
      }
  }), T.each({
      slideDown: Er("show"),
      slideUp: Er("hide"),
      slideToggle: Er("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, i) {
      T.fn[e] = function(e, t, r) {
          return this.animate(i, e, t, r)
      }
  }), T.timers = [], T.fx.tick = function() {
      var e, t = 0,
          r = T.timers;
      for (vr = Date.now(); t < r.length; t++)(e = r[t])() || r[t] !== e || r.splice(t--, 1);
      r.length || T.fx.stop(), vr = void 0
  }, T.fx.timer = function(e) {
      T.timers.push(e), T.fx.start()
  }, T.fx.interval = 13, T.fx.start = function() {
      gr || (gr = !0, wr())
  }, T.fx.stop = function() {
      gr = null
  }, T.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  }, T.fn.delay = function(i, e) {
      return i = T.fx && T.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
          var r = x.setTimeout(e, i);
          t.stop = function() {
              x.clearTimeout(r)
          }
      })
  }, n = E.createElement("input"), s = E.createElement("select").appendChild(E.createElement("option")), n.type = "checkbox", m.checkOn = "" !== n.value, m.optSelected = s.selected, (n = E.createElement("input")).value = "t", n.type = "radio", m.radioValue = "t" === n.value;
  var Sr, Cr = T.expr.attrHandle,
      Mr = (T.fn.extend({
          attr: function(e, t) {
              return c(this, T.attr, e, t, 1 < arguments.length)
          },
          removeAttr: function(e) {
              return this.each(function() {
                  T.removeAttr(this, e)
              })
          }
      }), T.extend({
          attr: function(e, t, r) {
              var i, a, s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? T.prop(e, t, r) : (1 === s && T.isXMLDoc(e) || (a = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? Sr : void 0)), void 0 !== r ? null === r ? void T.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, r, t)) ? i : (e.setAttribute(t, r + ""), r) : !(a && "get" in a && null !== (i = a.get(e, t))) && null == (i = T.find.attr(e, t)) ? void 0 : i)
          },
          attrHooks: {
              type: {
                  set: function(e, t) {
                      var r;
                      if (!m.radioValue && "radio" === t && w(e, "input")) return r = e.value, e.setAttribute("type", t), r && (e.value = r), t
                  }
              }
          },
          removeAttr: function(e, t) {
              var r, i = 0,
                  a = t && t.match(D);
              if (a && 1 === e.nodeType)
                  for (; r = a[i++];) e.removeAttribute(r)
          }
      }), Sr = {
          set: function(e, t, r) {
              return !1 === t ? T.removeAttr(e, r) : e.setAttribute(r, r), r
          }
      }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = Cr[t] || T.find.attr;
          Cr[t] = function(e, t, r) {
              var i, a, s = t.toLowerCase();
              return r || (a = Cr[s], Cr[s] = i, i = null != n(e, t, r) ? s : null, Cr[s] = a), i
          }
      }), /^(?:input|select|textarea|button)$/i),
      Lr = /^(?:a|area)$/i;

  function kr(e) {
      return (e.match(D) || []).join(" ")
  }

  function Ar(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }

  function Pr(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
  }
  T.fn.extend({
      prop: function(e, t) {
          return c(this, T.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[T.propFix[e] || e]
          })
      }
  }), T.extend({
      prop: function(e, t, r) {
          var i, a, s = e.nodeType;
          if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(e) || (t = T.propFix[t] || t, a = T.propHooks[t]), void 0 !== r ? a && "set" in a && void 0 !== (i = a.set(e, r, t)) ? i : e[t] = r : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = T.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : Mr.test(e.nodeName) || Lr.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          for: "htmlFor",
          class: "className"
      }
  }), m.optSelected || (T.propHooks.selected = {
      get: function(e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null
      },
      set: function(e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
      }
  }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      T.propFix[this.toLowerCase()] = this
  }), T.fn.extend({
      addClass: function(t) {
          var e, r, i, a, s, n;
          return y(t) ? this.each(function(e) {
              T(this).addClass(t.call(this, e, Ar(this)))
          }) : (e = Pr(t)).length ? this.each(function() {
              if (i = Ar(this), r = 1 === this.nodeType && " " + kr(i) + " ") {
                  for (s = 0; s < e.length; s++) a = e[s], r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                  n = kr(r), i !== n && this.setAttribute("class", n)
              }
          }) : this
      },
      removeClass: function(t) {
          var e, r, i, a, s, n;
          return y(t) ? this.each(function(e) {
              T(this).removeClass(t.call(this, e, Ar(this)))
          }) : arguments.length ? (e = Pr(t)).length ? this.each(function() {
              if (i = Ar(this), r = 1 === this.nodeType && " " + kr(i) + " ") {
                  for (s = 0; s < e.length; s++)
                      for (a = e[s]; - 1 < r.indexOf(" " + a + " ");) r = r.replace(" " + a + " ", " ");
                  n = kr(r), i !== n && this.setAttribute("class", n)
              }
          }) : this : this.attr("class", "")
      },
      toggleClass: function(t, r) {
          var e, i, a, s, n = typeof t,
              o = "string" == n || Array.isArray(t);
          return y(t) ? this.each(function(e) {
              T(this).toggleClass(t.call(this, e, Ar(this), r), r)
          }) : "boolean" == typeof r && o ? r ? this.addClass(t) : this.removeClass(t) : (e = Pr(t), this.each(function() {
              if (o)
                  for (s = T(this), a = 0; a < e.length; a++) i = e[a], s.hasClass(i) ? s.removeClass(i) : s.addClass(i);
              else void 0 !== t && "boolean" != n || ((i = Ar(this)) && g.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", !i && !1 !== t && g.get(this, "__className__") || ""))
          }))
      },
      hasClass: function(e) {
          for (var t, r = 0, i = " " + e + " "; t = this[r++];)
              if (1 === t.nodeType && -1 < (" " + kr(Ar(t)) + " ").indexOf(i)) return !0;
          return !1
      }
  });

  function Dr(e) {
      e.stopPropagation()
  }
  var Ir = /\r/g,
      Or = (T.fn.extend({
          val: function(t) {
              var r, e, i, a = this[0];
              return arguments.length ? (i = y(t), this.each(function(e) {
                  1 !== this.nodeType || (null == (e = i ? t.call(this, e, T(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function(e) {
                      return null == e ? "" : e + ""
                  })), (r = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, e, "value")) || (this.value = e)
              })) : a ? (r = T.valHooks[a.type] || T.valHooks[a.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(a, "value")) ? e : "string" == typeof(e = a.value) ? e.replace(Ir, "") : null == e ? "" : e : void 0
          }
      }), T.extend({
          valHooks: {
              option: {
                  get: function(e) {
                      var t = T.find.attr(e, "value");
                      return null != t ? t : kr(T.text(e))
                  }
              },
              select: {
                  get: function(e) {
                      for (var t, r = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], n = a ? i + 1 : r.length, o = i < 0 ? n : a ? i : 0; o < n; o++)
                          if (((t = r[o]).selected || o === i) && !t.disabled && (!t.parentNode.disabled || !w(t.parentNode, "optgroup"))) {
                              if (t = T(t).val(), a) return t;
                              s.push(t)
                          } return s
                  },
                  set: function(e, t) {
                      for (var r, i, a = e.options, s = T.makeArray(t), n = a.length; n--;)((i = a[n]).selected = -1 < T.inArray(T.valHooks.option.get(i), s)) && (r = !0);
                      return r || (e.selectedIndex = -1), s
                  }
              }
          }
      }), T.each(["radio", "checkbox"], function() {
          T.valHooks[this] = {
              set: function(e, t) {
                  if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
              }
          }, m.checkOn || (T.valHooks[this].get = function(e) {
              return null === e.getAttribute("value") ? "on" : e.value
          })
      }), x.location),
      zr = {
          guid: Date.now()
      },
      Nr = /\?/,
      jr = (T.parseXML = function(e) {
          var t, r;
          if (!e || "string" != typeof e) return null;
          try {
              t = (new x.DOMParser).parseFromString(e, "text/xml")
          } catch (e) {}
          return r = t && t.getElementsByTagName("parsererror")[0], t && !r || T.error("Invalid XML: " + (r ? T.map(r.childNodes, function(e) {
              return e.textContent
          }).join("\n") : e)), t
      }, /^(?:focusinfocus|focusoutblur)$/),
      Hr = (T.extend(T.event, {
          trigger: function(e, t, r, i) {
              var a, s, n, o, l, d, c, p = [r || E],
                  u = G.call(e, "type") ? e.type : e,
                  f = G.call(e, "namespace") ? e.namespace.split(".") : [],
                  h = c = s = r = r || E;
              if (3 !== r.nodeType && 8 !== r.nodeType && !jr.test(u + T.event.triggered) && (-1 < u.indexOf(".") && (u = (f = u.split(".")).shift(), f.sort()), o = u.indexOf(":") < 0 && "on" + u, (e = e[T.expando] ? e : new T.Event(u, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[u] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                  if (!i && !d.noBubble && !H(r)) {
                      for (n = d.delegateType || u, jr.test(n + u) || (h = h.parentNode); h; h = h.parentNode) p.push(h), s = h;
                      s === (r.ownerDocument || E) && p.push(s.defaultView || s.parentWindow || x)
                  }
                  for (a = 0;
                      (h = p[a++]) && !e.isPropagationStopped();) c = h, e.type = 1 < a ? n : d.bindType || u, (l = (g.get(h, "events") || Object.create(null))[e.type] && g.get(h, "handle")) && l.apply(h, t), (l = o && h[o]) && l.apply && ct(h) && (e.result = l.apply(h, t), !1 === e.result) && e.preventDefault();
                  return e.type = u, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !ct(r) || o && y(r[u]) && !H(r) && ((s = r[o]) && (r[o] = null), T.event.triggered = u, e.isPropagationStopped() && c.addEventListener(u, Dr), r[u](), e.isPropagationStopped() && c.removeEventListener(u, Dr), T.event.triggered = void 0, s) && (r[o] = s), e.result
              }
          },
          simulate: function(e, t, r) {
              r = T.extend(new T.Event, r, {
                  type: e,
                  isSimulated: !0
              });
              T.event.trigger(r, null, t)
          }
      }), T.fn.extend({
          trigger: function(e, t) {
              return this.each(function() {
                  T.event.trigger(e, t, this)
              })
          },
          triggerHandler: function(e, t) {
              var r = this[0];
              if (r) return T.event.trigger(e, t, r, !0)
          }
      }), /\[\]$/),
      qr = /\r?\n/g,
      Rr = /^(?:submit|button|image|reset|file)$/i,
      $r = /^(?:input|select|textarea|keygen)/i;
  T.param = function(e, t) {
      function r(e, t) {
          t = y(t) ? t() : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
      }
      var i, a = [];
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
          r(this.name, this.value)
      });
      else
          for (i in e) ! function r(i, e, a, s) {
              if (Array.isArray(e)) T.each(e, function(e, t) {
                  a || Hr.test(i) ? s(i, t) : r(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, a, s)
              });
              else if (a || "object" !== V(e)) s(i, e);
              else
                  for (var t in e) r(i + "[" + t + "]", e[t], a, s)
          }(i, e[i], t, r);
      return a.join("&")
  }, T.fn.extend({
      serialize: function() {
          return T.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !T(this).is(":disabled") && $r.test(this.nodeName) && !Rr.test(e) && (this.checked || !St.test(e))
          }).map(function(e, t) {
              var r = T(this).val();
              return null == r ? null : Array.isArray(r) ? T.map(r, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(qr, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: r.replace(qr, "\r\n")
              }
          }).get()
      }
  });
  var Br = /%20/g,
      Fr = /#.*$/,
      Gr = /([?&])_=[^&]*/,
      Xr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Wr = /^(?:GET|HEAD)$/,
      _r = /^\/\//,
      Yr = {},
      Vr = {},
      Ur = "*/".concat("*"),
      Kr = E.createElement("a");

  function Qr(s) {
      return function(e, t) {
          "string" != typeof e && (t = e, e = "*");
          var r, i = 0,
              a = e.toLowerCase().match(D) || [];
          if (y(t))
              for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (s[r] = s[r] || []).unshift(t)) : (s[r] = s[r] || []).push(t)
      }
  }

  function Jr(t, i, a, s) {
      var n = {},
          o = t === Vr;

      function l(e) {
          var r;
          return n[e] = !0, T.each(t[e] || [], function(e, t) {
              t = t(i, a, s);
              return "string" != typeof t || o || n[t] ? o ? !(r = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
          }), r
      }
      return l(i.dataTypes[0]) || !n["*"] && l("*")
  }

  function Zr(e, t) {
      var r, i, a = T.ajaxSettings.flatOptions || {};
      for (r in t) void 0 !== t[r] && ((a[r] ? e : i = i || {})[r] = t[r]);
      return i && T.extend(!0, e, i), e
  }
  Kr.href = Or.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Or.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Or.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Ur,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? Zr(Zr(e, T.ajaxSettings), t) : Zr(T.ajaxSettings, e)
      },
      ajaxPrefilter: Qr(Yr),
      ajaxTransport: Qr(Vr),
      ajax: function(e, t) {
          "object" == typeof e && (t = e, e = void 0);
          var l, d, c, r, p, u, f, i, h = T.ajaxSetup({}, t = t || {}),
              m = h.context || h,
              v = h.context && (m.nodeType || m.jquery) ? T(m) : T.event,
              g = T.Deferred(),
              y = T.Callbacks("once memory"),
              b = h.statusCode || {},
              a = {},
              s = {},
              n = "canceled",
              w = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (u) {
                          if (!r)
                              for (r = {}; t = Xr.exec(c);) r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                          t = r[e.toLowerCase() + " "]
                      }
                      return null == t ? null : t.join(", ")
                  },
                  getAllResponseHeaders: function() {
                      return u ? c : null
                  },
                  setRequestHeader: function(e, t) {
                      return null == u && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return null == u && (h.mimeType = e), this
                  },
                  statusCode: function(e) {
                      if (e)
                          if (u) w.always(e[w.status]);
                          else
                              for (var t in e) b[t] = [b[t], e[t]];
                      return this
                  },
                  abort: function(e) {
                      e = e || n;
                      return l && l.abort(e), o(0, e), this
                  }
              };
          if (g.promise(w), h.url = ((e || h.url || Or.href) + "").replace(_r, Or.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(D) || [""], null == h.crossDomain) {
              e = E.createElement("a");
              try {
                  e.href = h.url, e.href = e.href, h.crossDomain = Kr.protocol + "//" + Kr.host != e.protocol + "//" + e.host
              } catch (e) {
                  h.crossDomain = !0
              }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Jr(Yr, h, t, w), !u) {
              for (i in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Wr.test(h.type), d = h.url.replace(Fr, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Br, "+")) : (e = h.url.slice(d.length), h.data && (h.processData || "string" == typeof h.data) && (d += (Nr.test(d) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (d = d.replace(Gr, "$1"), e = (Nr.test(d) ? "&" : "?") + "_=" + zr.guid++ + e), h.url = d + e), h.ifModified && (T.lastModified[d] && w.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d]) && w.setRequestHeader("If-None-Match", T.etag[d]), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ur + "; q=0.01" : "") : h.accepts["*"]), h.headers) w.setRequestHeader(i, h.headers[i]);
              if (h.beforeSend && (!1 === h.beforeSend.call(m, w, h) || u)) return w.abort();
              if (n = "abort", y.add(h.complete), w.done(h.success), w.fail(h.error), l = Jr(Vr, h, t, w)) {
                  if (w.readyState = 1, f && v.trigger("ajaxSend", [w, h]), u) return w;
                  h.async && 0 < h.timeout && (p = x.setTimeout(function() {
                      w.abort("timeout")
                  }, h.timeout));
                  try {
                      u = !1, l.send(a, o)
                  } catch (e) {
                      if (u) throw e;
                      o(-1, e)
                  }
              } else o(-1, "No Transport")
          }
          return w;

          function o(e, t, r, i) {
              var a, s, n, o = t;
              u || (u = !0, p && x.clearTimeout(p), l = void 0, c = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, r && (n = function(e, t, r) {
                  for (var i, a, s, n, o = e.contents, l = e.dataTypes;
                      "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                      for (a in o)
                          if (o[a] && o[a].test(i)) {
                              l.unshift(a);
                              break
                          } if (l[0] in r) s = l[0];
                  else {
                      for (a in r) {
                          if (!l[0] || e.converters[a + " " + l[0]]) {
                              s = a;
                              break
                          }
                          n = n || a
                      }
                      s = s || n
                  }
                  if (s) return s !== l[0] && l.unshift(s), r[s]
              }(h, w, r)), !i && -1 < T.inArray("script", h.dataTypes) && T.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), n = function(e, t, r, i) {
                  var a, s, n, o, l, d = {},
                      c = e.dataTypes.slice();
                  if (c[1])
                      for (n in e.converters) d[n.toLowerCase()] = e.converters[n];
                  for (s = c.shift(); s;)
                      if (e.responseFields[s] && (r[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                          if ("*" === s) s = l;
                          else if ("*" !== l && l !== s) {
                      if (!(n = d[l + " " + s] || d["* " + s]))
                          for (a in d)
                              if ((o = a.split(" "))[1] === s && (n = d[l + " " + o[0]] || d["* " + o[0]])) {
                                  !0 === n ? n = d[a] : !0 !== d[a] && (s = o[0], c.unshift(o[1]));
                                  break
                              } if (!0 !== n)
                          if (n && e.throws) t = n(t);
                          else try {
                              t = n(t)
                          } catch (e) {
                              return {
                                  state: "parsererror",
                                  error: n ? e : "No conversion from " + l + " to " + s
                              }
                          }
                  }
                  return {
                      state: "success",
                      data: t
                  }
              }(h, n, w, i), i ? (h.ifModified && ((r = w.getResponseHeader("Last-Modified")) && (T.lastModified[d] = r), r = w.getResponseHeader("etag")) && (T.etag[d] = r), 204 === e || "HEAD" === h.type ? o = "nocontent" : 304 === e ? o = "notmodified" : (o = n.state, a = n.data, i = !(s = n.error))) : (s = o, !e && o || (o = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || o) + "", i ? g.resolveWith(m, [a, o, w]) : g.rejectWith(m, [w, o, s]), w.statusCode(b), b = void 0, f && v.trigger(i ? "ajaxSuccess" : "ajaxError", [w, h, i ? a : s]), y.fireWith(m, [w, o]), f && (v.trigger("ajaxComplete", [w, h]), --T.active || T.event.trigger("ajaxStop")))
          }
      },
      getJSON: function(e, t, r) {
          return T.get(e, t, r, "json")
      },
      getScript: function(e, t) {
          return T.get(e, void 0, t, "script")
      }
  }), T.each(["get", "post"], function(e, a) {
      T[a] = function(e, t, r, i) {
          return y(t) && (i = i || r, r = t, t = void 0), T.ajax(T.extend({
              url: e,
              type: a,
              dataType: i,
              data: t,
              success: r
          }, T.isPlainObject(e) && e))
      }
  }), T.ajaxPrefilter(function(e) {
      for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }), T._evalUrl = function(e, t, r) {
      return T.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
              "text script": function() {}
          },
          dataFilter: function(e) {
              T.globalEval(e, t, r)
          }
      })
  }, T.fn.extend({
      wrapAll: function(e) {
          return this[0] && (y(e) && (e = e.call(this[0])), e = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
          }).append(this)), this
      },
      wrapInner: function(r) {
          return y(r) ? this.each(function(e) {
              T(this).wrapInner(r.call(this, e))
          }) : this.each(function() {
              var e = T(this),
                  t = e.contents();
              t.length ? t.wrapAll(r) : e.append(r)
          })
      },
      wrap: function(t) {
          var r = y(t);
          return this.each(function(e) {
              T(this).wrapAll(r ? t.call(this, e) : t)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              T(this).replaceWith(this.childNodes)
          }), this
      }
  }), T.expr.pseudos.hidden = function(e) {
      return !T.expr.pseudos.visible(e)
  }, T.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, T.ajaxSettings.xhr = function() {
      try {
          return new x.XMLHttpRequest
      } catch (e) {}
  };
  var ei = {
          0: 200,
          1223: 204
      },
      ti = T.ajaxSettings.xhr(),
      ri = (m.cors = !!ti && "withCredentials" in ti, m.ajax = ti = !!ti, T.ajaxTransport(function(a) {
          var s, n;
          if (m.cors || ti && !a.crossDomain) return {
              send: function(e, t) {
                  var r, i = a.xhr();
                  if (i.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                      for (r in a.xhrFields) i[r] = a.xhrFields[r];
                  for (r in a.mimeType && i.overrideMimeType && i.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(r, e[r]);
                  s = function(e) {
                      return function() {
                          s && (s = n = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(ei[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                              binary: i.response
                          } : {
                              text: i.responseText
                          }, i.getAllResponseHeaders()))
                      }
                  }, i.onload = s(), n = i.onerror = i.ontimeout = s("error"), void 0 !== i.onabort ? i.onabort = n : i.onreadystatechange = function() {
                      4 === i.readyState && x.setTimeout(function() {
                          s && n()
                      })
                  }, s = s("abort");
                  try {
                      i.send(a.hasContent && a.data || null)
                  } catch (e) {
                      if (s) throw e
                  }
              },
              abort: function() {
                  s && s()
              }
          }
      }), T.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1)
      }), T.ajaxSetup({
          accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
              script: /\b(?:java|ecma)script\b/
          },
          converters: {
              "text script": function(e) {
                  return T.globalEval(e), e
              }
          }
      }), T.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), T.ajaxTransport("script", function(r) {
          var i, a;
          if (r.crossDomain || r.scriptAttrs) return {
              send: function(e, t) {
                  i = T("<script>").attr(r.scriptAttrs || {}).prop({
                      charset: r.scriptCharset,
                      src: r.url
                  }).on("load error", a = function(e) {
                      i.remove(), a = null, e && t("error" === e.type ? 404 : 200, e.type)
                  }), E.head.appendChild(i[0])
              },
              abort: function() {
                  a && a()
              }
          }
      }), []),
      ii = /(=)\?(?=&|$)|\?\?/,
      ai = (T.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
              var e = ri.pop() || T.expando + "_" + zr.guid++;
              return this[e] = !0, e
          }
      }), T.ajaxPrefilter("json jsonp", function(e, t, r) {
          var i, a, s, n = !1 !== e.jsonp && (ii.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
          if (n || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, n ? e[n] = e[n].replace(ii, "$1" + i) : !1 !== e.jsonp && (e.url += (Nr.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
              return s || T.error(i + " was not called"), s[0]
          }, e.dataTypes[0] = "json", a = x[i], x[i] = function() {
              s = arguments
          }, r.always(function() {
              void 0 === a ? T(x).removeProp(i) : x[i] = a, e[i] && (e.jsonpCallback = t.jsonpCallback, ri.push(i)), s && y(a) && a(s[0]), s = a = void 0
          }), "script"
      }), m.createHTMLDocument = ((e = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), T.parseHTML = function(e, t, r) {
          var i;
          return "string" != typeof e ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(i)) : t = E), i = !r && [], (r = Ve.exec(e)) ? [t.createElement(r[1])] : (r = At([e], t, i), i && i.length && T(i).remove(), T.merge([], r.childNodes)))
      }, T.fn.load = function(e, t, r) {
          var i, a, s, n = this,
              o = e.indexOf(" ");
          return -1 < o && (i = kr(e.slice(o)), e = e.slice(0, o)), y(t) ? (r = t, t = void 0) : t && "object" == typeof t && (a = "POST"), 0 < n.length && T.ajax({
              url: e,
              type: a || "GET",
              dataType: "html",
              data: t
          }).done(function(e) {
              s = arguments, n.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
          }).always(r && function(e, t) {
              n.each(function() {
                  r.apply(this, s || [e.responseText, t, e])
              })
          }), this
      }, T.expr.pseudos.animated = function(t) {
          return T.grep(T.timers, function(e) {
              return t === e.elem
          }).length
      }, T.offset = {
          setOffset: function(e, t, r) {
              var i, a, s, n, o = T.css(e, "position"),
                  l = T(e),
                  d = {};
              "static" === o && (e.style.position = "relative"), s = l.offset(), i = T.css(e, "top"), n = T.css(e, "left"), o = ("absolute" === o || "fixed" === o) && -1 < (i + n).indexOf("auto") ? (a = (o = l.position()).top, o.left) : (a = parseFloat(i) || 0, parseFloat(n) || 0), null != (t = y(t) ? t.call(e, r, T.extend({}, s)) : t).top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : l.css(d)
          }
      }, T.fn.extend({
          offset: function(t) {
              var e, r;
              return arguments.length ? void 0 === t ? this : this.each(function(e) {
                  T.offset.setOffset(this, t, e)
              }) : (r = this[0]) ? r.getClientRects().length ? (e = r.getBoundingClientRect(), r = r.ownerDocument.defaultView, {
                  top: e.top + r.pageYOffset,
                  left: e.left + r.pageXOffset
              }) : {
                  top: 0,
                  left: 0
              } : void 0
          },
          position: function() {
              if (this[0]) {
                  var e, t, r, i = this[0],
                      a = {
                          top: 0,
                          left: 0
                      };
                  if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                  else {
                      for (t = this.offset(), r = i.ownerDocument, e = i.offsetParent || r.documentElement; e && (e === r.body || e === r.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                      e && e !== i && 1 === e.nodeType && ((a = T(e).offset()).top += T.css(e, "borderTopWidth", !0), a.left += T.css(e, "borderLeftWidth", !0))
                  }
                  return {
                      top: t.top - a.top - T.css(i, "marginTop", !0),
                      left: t.left - a.left - T.css(i, "marginLeft", !0)
                  }
              }
          },
          offsetParent: function() {
              return this.map(function() {
                  for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                  return e || yt
              })
          }
      }), T.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
      }, function(t, a) {
          var s = "pageYOffset" === a;
          T.fn[t] = function(e) {
              return c(this, function(e, t, r) {
                  var i;
                  if (H(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r) return i ? i[a] : e[t];
                  i ? i.scrollTo(s ? i.pageXOffset : r, s ? r : i.pageYOffset) : e[t] = r
              }, t, e, arguments.length)
          }
      }), T.each(["top", "left"], function(e, r) {
          T.cssHooks[r] = sr(m.pixelPosition, function(e, t) {
              if (t) return t = ar(e, r), Zt.test(t) ? T(e).position()[r] + "px" : t
          })
      }), T.each({
          Height: "height",
          Width: "width"
      }, function(n, o) {
          T.each({
              padding: "inner" + n,
              content: o,
              "": "outer" + n
          }, function(i, s) {
              T.fn[s] = function(e, t) {
                  var r = arguments.length && (i || "boolean" != typeof e),
                      a = i || (!0 === e || !0 === t ? "margin" : "border");
                  return c(this, function(e, t, r) {
                      var i;
                      return H(e) ? 0 === s.indexOf("outer") ? e["inner" + n] : e.document.documentElement["client" + n] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + n], i["scroll" + n], e.body["offset" + n], i["offset" + n], i["client" + n])) : void 0 === r ? T.css(e, t, a) : T.style(e, t, r, a)
                  }, o, r ? e : void 0, r)
              }
          })
      }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
          T.fn[t] = function(e) {
              return this.on(t, e)
          }
      }), T.fn.extend({
          bind: function(e, t, r) {
              return this.on(e, null, t, r)
          },
          unbind: function(e, t) {
              return this.off(e, null, t)
          },
          delegate: function(e, t, r, i) {
              return this.on(t, e, r, i)
          },
          undelegate: function(e, t, r) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
          },
          hover: function(e, t) {
              return this.on("mouseenter", e).on("mouseleave", t || e)
          }
      }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
          T.fn[r] = function(e, t) {
              return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
          }
      }), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
      si = (T.proxy = function(e, t) {
          var r, i;
          if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return r = o.call(arguments, 2), (i = function() {
              return e.apply(t || this, r.concat(o.call(arguments)))
          }).guid = e.guid = e.guid || T.guid++, i
      }, T.holdReady = function(e) {
          e ? T.readyWait++ : T.ready(!0)
      }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = w, T.isFunction = y, T.isWindow = H, T.camelCase = I, T.type = V, T.now = Date.now, T.isNumeric = function(e) {
          var t = T.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, T.trim = function(e) {
          return null == e ? "" : (e + "").replace(ai, "$1")
      }, "function" == typeof define && define.amd && define("jquery", [], function() {
          return T
      }), x.jQuery),
      ni = x.$;
  return T.noConflict = function(e) {
      return x.$ === T && (x.$ = ni), e && x.jQuery === T && (x.jQuery = si), T
  }, void 0 === j && (x.jQuery = x.$ = T), T
});
var Swiper = function() {
  "use strict";

  function i(e) {
      return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
  }

  function a(t, r) {
      void 0 === t && (t = {}), void 0 === r && (r = {}), Object.keys(r).forEach(e => {
          void 0 === t[e] ? t[e] = r[e] : i(r[e]) && i(t[e]) && 0 < Object.keys(r[e]).length && a(t[e], r[e])
      })
  }
  const t = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
          blur() {},
          nodeName: ""
      },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({
          initEvent() {}
      }),
      createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
      }
  };

  function A() {
      var e = "undefined" != typeof document ? document : {};
      return a(e, t), e
  }
  const b = {
      document: t,
      navigator: {
          userAgent: ""
      },
      location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
      },
      history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
      },
      CustomEvent: function() {
          return this
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({
          getPropertyValue: () => ""
      }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
      }
  };

  function k() {
      var e = "undefined" != typeof window ? window : {};
      return a(e, b), e
  }

  function S(e) {
      return (e = void 0 === e ? "" : e).trim().split(" ").filter(e => !!e.trim())
  }

  function C(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t)
  }

  function g() {
      return Date.now()
  }

  function P(e, t) {
      void 0 === t && (t = "x");
      var r = k();
      let i, a, s;
      e = function(e) {
          var t = k();
          let r;
          return r = (r = !(r = t.getComputedStyle ? t.getComputedStyle(e, null) : r) && e.currentStyle ? e.currentStyle : r) || e.style
      }(e);
      return r.WebKitCSSMatrix ? (6 < (a = e.transform || e.webkitTransform).split(",").length && (a = a.split(", ").map(e => e.replace(",", ".")).join(", ")), s = new r.WebKitCSSMatrix("none" === a ? "" : a)) : (s = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === t && (a = r.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), (a = "y" === t ? r.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5]) : a) || 0
  }

  function d(e) {
      return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
  }

  function m(e) {
      const r = Object(arguments.length <= 0 ? void 0 : e),
          t = ["__proto__", "constructor", "prototype"];
      for (let e = 1; e < arguments.length; e += 1) {
          var i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
          if (null != i && (n = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
              const n = Object.keys(Object(i)).filter(e => t.indexOf(e) < 0);
              for (let e = 0, t = n.length; e < t; e += 1) {
                  var a = n[e],
                      s = Object.getOwnPropertyDescriptor(i, a);
                  void 0 !== s && s.enumerable && (d(r[a]) && d(i[a]) ? i[a].__swiper__ ? r[a] = i[a] : m(r[a], i[a]) : d(r[a]) || !d(i[a]) || (r[a] = {}, i[a].__swiper__) ? r[a] = i[a] : m(r[a], i[a]))
              }
          }
      }
      var n;
      return r
  }

  function L(e, t, r) {
      e.style.setProperty(t, r)
  }

  function y(e) {
      let {
          swiper: r,
          targetPosition: i,
          side: a
      } = e;
      const s = k(),
          n = -r.translate;
      let o, l = null;
      const d = r.params.speed,
          c = (r.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(r.cssModeFrameID), i > n ? "next" : "prev"),
          p = (e, t) => "next" === c && t <= e || "prev" === c && e <= t,
          u = () => {
              o = (new Date).getTime(), null === l && (l = o);
              var e = Math.max(Math.min((o - l) / d, 1), 0),
                  e = .5 - Math.cos(e * Math.PI) / 2;
              let t = n + e * (i - n);
              p(t, i) && (t = i), r.wrapperEl.scrollTo({
                  [a]: t
              }), p(t, i) ? (r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                  r.wrapperEl.style.overflow = "", r.wrapperEl.scrollTo({
                      [a]: t
                  })
              }), s.cancelAnimationFrame(r.cssModeFrameID)) : r.cssModeFrameID = s.requestAnimationFrame(u)
          };
      u()
  }

  function s(e) {
      return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
  }

  function D(e, t) {
      return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
  }

  function I(e) {
      try {
          console.warn(e)
      } catch (e) {}
  }

  function O(e, t) {
      void 0 === t && (t = []);
      e = document.createElement(e);
      return e.classList.add(...Array.isArray(t) ? t : S(t)), e
  }

  function z(e) {
      var t = k(),
          r = A(),
          i = e.getBoundingClientRect(),
          r = r.body,
          a = e.clientTop || r.clientTop || 0,
          r = e.clientLeft || r.clientLeft || 0,
          s = e === t ? t.scrollY : e.scrollTop,
          t = e === t ? t.scrollX : e.scrollLeft;
      return {
          top: i.top + s - a,
          left: i.left + t - r
      }
  }

  function M(e, t) {
      return k().getComputedStyle(e, null).getPropertyValue(t)
  }

  function E(e) {
      let t, r = e;
      if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
      }
  }

  function N(e, t) {
      var r = [];
      let i = e.parentElement;
      for (; i;) t && !i.matches(t) || r.push(i), i = i.parentElement;
      return r
  }

  function v(r, i) {
      i && r.addEventListener("transitionend", function e(t) {
          t.target === r && (i.call(r, t), r.removeEventListener("transitionend", e))
      })
  }

  function j(e, t, r) {
      var i = k();
      return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
  }
  let r, w, R;

  function $() {
      return r = r || (e = k(), {
          smoothScroll: (t = A()).documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      });
      var e, t
  }
  const n = (t, e) => {
          if (t && !t.destroyed && t.params) {
              const r = e.closest(t.isElement ? "swiper-slide" : "." + t.params.slideClass);
              if (r) {
                  let e = r.querySelector("." + t.params.lazyPreloaderClass);
                  !e && t.isElement && (r.shadowRoot ? e = r.shadowRoot.querySelector("." + t.params.lazyPreloaderClass) : requestAnimationFrame(() => {
                      r.shadowRoot && (e = r.shadowRoot.querySelector("." + t.params.lazyPreloaderClass)) && e.remove()
                  })), e && e.remove()
              }
          }
      },
      l = (e, t) => {
          e.slides[t] && (e = e.slides[t].querySelector('[loading="lazy"]')) && e.removeAttribute("loading")
      },
      p = i => {
          if (i && !i.destroyed && i.params) {
              let r = i.params.lazyPreloadPrevNext;
              const a = i.slides.length;
              if (a && r && !(r < 0)) {
                  r = Math.min(r, a);
                  const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
                      n = i.activeIndex;
                  if (i.params.grid && 1 < i.params.grid.rows) {
                      const a = n,
                          o = [a - r];
                      o.push(...Array.from({
                          length: r
                      }).map((e, t) => a + s + t)), void i.slides.forEach((e, t) => {
                          o.includes(e.column) && l(i, t)
                      })
                  } else {
                      const o = n + s - 1;
                      if (i.params.rewind || i.params.loop)
                          for (let t = n - r; t <= o + r; t += 1) {
                              const e = (t % a + a) % a;
                              (e < n || e > o) && l(i, e)
                          } else
                              for (let e = Math.max(n - r, 0); e <= Math.min(o + r, a - 1); e += 1) e !== n && (e > o || e < n) && l(i, e)
                  }
              }
          }
      };

  function B(e) {
      var {
          swiper: e,
          runCallbacks: t,
          direction: r,
          step: i
      } = e, {
          activeIndex: a,
          previousIndex: s
      } = e;
      let n = r;
      if (n = n || (s < a ? "next" : a < s ? "prev" : "reset"), e.emit("transition" + i), t && a !== s) {
          if ("reset" === n) return e.emit("slideResetTransition" + i);
          e.emit("slideChangeTransition" + i), "next" === n ? e.emit("slideNextTransition" + i) : e.emit("slidePrevTransition" + i)
      }
  }

  function F(e, t, r) {
      var i = k(),
          e = e["params"],
          a = e.edgeSwipeDetection,
          e = e.edgeSwipeThreshold;
      return !a || !(r <= e || r >= i.innerWidth - e) || "prevent" === a && (t.preventDefault(), !0)
  }

  function G() {
      const e = this,
          {
              params: t,
              el: r
          } = e;
      var i, a, s, n, o;
      r && 0 === r.offsetWidth || (t.breakpoints && e.setBreakpoint(), {
          allowSlideNext: i,
          allowSlidePrev: a,
          snapGrid: s
      } = e, n = e.virtual && e.params.virtual.enabled, e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), o = n && t.loop, !("auto" === t.slidesPerView || 1 < t.slidesPerView) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
      }, 500)), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow())
  }
  const X = (e, t) => {
          var r = A(),
              {
                  params: i,
                  el: a,
                  wrapperEl: s,
                  device: n
              } = e,
              o = !!i.nested,
              l = "on" === t ? "addEventListener" : "removeEventListener";
          r[l]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o
          }), a[l]("touchstart", e.onTouchStart, {
              passive: !1
          }), a[l]("pointerdown", e.onTouchStart, {
              passive: !1
          }), r[l]("touchmove", e.onTouchMove, {
              passive: !1,
              capture: o
          }), r[l]("pointermove", e.onTouchMove, {
              passive: !1,
              capture: o
          }), r[l]("touchend", e.onTouchEnd, {
              passive: !0
          }), r[l]("pointerup", e.onTouchEnd, {
              passive: !0
          }), r[l]("pointercancel", e.onTouchEnd, {
              passive: !0
          }), r[l]("touchcancel", e.onTouchEnd, {
              passive: !0
          }), r[l]("pointerout", e.onTouchEnd, {
              passive: !0
          }), r[l]("pointerleave", e.onTouchEnd, {
              passive: !0
          }), r[l]("contextmenu", e.onTouchEnd, {
              passive: !0
          }), (i.preventClicks || i.preventClicksPropagation) && a[l]("click", e.onClick, !0), i.cssMode && s[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : e[t]("observerUpdate", G, !0), a[l]("load", e.onLoad, {
              capture: !0
          })
      },
      W = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
  var _ = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1
  };
  const o = {
          eventsEmitter: {
              on(e, t, r) {
                  const i = this;
                  if (i.eventsListeners && !i.destroyed && "function" == typeof t) {
                      const a = r ? "unshift" : "push";
                      e.split(" ").forEach(e => {
                          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t)
                      })
                  }
                  return i
              },
              once(i, a, e) {
                  const s = this;
                  return !s.eventsListeners || s.destroyed || "function" != typeof a ? s : (n.__emitterProxy = a, s.on(i, n, e));

                  function n() {
                      s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
                      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                      a.apply(s, t)
                  }
              },
              onAny(e, t) {
                  var r = this;
                  return r.eventsListeners && !r.destroyed && "function" == typeof e && (t = t ? "unshift" : "push", r.eventsAnyListeners.indexOf(e) < 0) && r.eventsAnyListeners[t](e), r
              },
              offAny(e) {
                  var t = this;
                  return t.eventsListeners && !t.destroyed && t.eventsAnyListeners && 0 <= (e = t.eventsAnyListeners.indexOf(e)) && t.eventsAnyListeners.splice(e, 1), t
              },
              off(e, i) {
                  const a = this;
                  return !a.eventsListeners || a.destroyed || a.eventsListeners && e.split(" ").forEach(r => {
                      void 0 === i ? a.eventsListeners[r] = [] : a.eventsListeners[r] && a.eventsListeners[r].forEach((e, t) => {
                          (e === i || e.__emitterProxy && e.__emitterProxy === i) && a.eventsListeners[r].splice(t, 1)
                      })
                  }), a
              },
              emit() {
                  const a = this;
                  if (a.eventsListeners && !a.destroyed && a.eventsListeners) {
                      let e, r, i;
                      for (var t = arguments.length, s = new Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                      i = "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], r = s.slice(1, s.length), a) : (e = s[0].events, r = s[0].data, s[0].context || a), r.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(t => {
                          a.eventsAnyListeners && a.eventsAnyListeners.length && a.eventsAnyListeners.forEach(e => {
                              e.apply(i, [t, ...r])
                          }), a.eventsListeners && a.eventsListeners[t] && a.eventsListeners[t].forEach(e => {
                              e.apply(i, r)
                          })
                      })
                  }
                  return a
              }
          },
          update: {
              updateSize: function() {
                  var e = this;
                  let t, r;
                  var i = e.el;
                  t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(M(i, "padding-left") || 0, 10) - parseInt(M(i, "padding-right") || 0, 10), r = r - parseInt(M(i, "padding-top") || 0, 10) - parseInt(M(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
                      width: t,
                      height: r,
                      size: e.isHorizontal() ? t : r
                  }))
              },
              updateSlides: function() {
                  const i = this;

                  function a(e, t) {
                      return parseFloat(e.getPropertyValue(i.getDirectionLabel(t)) || 0)
                  }
                  const s = i.params,
                      {
                          wrapperEl: n,
                          slidesEl: t,
                          size: o,
                          rtlTranslate: l,
                          wrongRTL: d
                      } = i,
                      c = i.virtual && s.virtual.enabled,
                      e = (c ? i.virtual : i).slides.length,
                      p = D(t, `.${i.params.slideClass}, swiper-slide`),
                      u = (c ? i.virtual.slides : p).length;
                  let f = [];
                  const h = [],
                      m = [];
                  let v = s.slidesOffsetBefore,
                      g = ("function" == typeof v && (v = s.slidesOffsetBefore.call(i)), s.slidesOffsetAfter);
                  "function" == typeof g && (g = s.slidesOffsetAfter.call(i));
                  var y = i.snapGrid.length,
                      b = i.slidesGrid.length;
                  let w = s.spaceBetween,
                      x = -v,
                      E = 0,
                      T = 0;
                  if (void 0 !== o) {
                      "string" == typeof w && 0 <= w.indexOf("%") ? w = parseFloat(w.replace("%", "")) / 100 * o : "string" == typeof w && (w = parseFloat(w)), i.virtualSize = -w, p.forEach(e => {
                          l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                      }), s.centeredSlides && s.cssMode && (L(n, "--swiper-centered-offset-before", ""), L(n, "--swiper-centered-offset-after", ""));
                      var S = s.grid && 1 < s.grid.rows && i.grid;
                      let r;
                      S ? i.grid.initSlides(p) : i.grid && i.grid.unsetSlides();
                      var C = "auto" === s.slidesPerView && s.breakpoints && 0 < Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length;
                      for (let t = 0; t < u; t += 1) {
                          let e;
                          if (r = 0, p[t] && (e = p[t]), S && i.grid.updateSlide(t, e, p), !p[t] || "none" !== M(e, "display")) {
                              if ("auto" === s.slidesPerView) {
                                  C && (p[t].style[i.getDirectionLabel("width")] = "");
                                  const o = getComputedStyle(e),
                                      l = e.style.transform,
                                      d = e.style.webkitTransform;
                                  if (l && (e.style.transform = "none"), d && (e.style.webkitTransform = "none"), s.roundLengths) r = i.isHorizontal() ? j(e, "width", !0) : j(e, "height", !0);
                                  else {
                                      const i = a(o, "width"),
                                          s = a(o, "padding-left"),
                                          n = a(o, "padding-right"),
                                          l = a(o, "margin-left"),
                                          d = a(o, "margin-right"),
                                          c = o.getPropertyValue("box-sizing");
                                      if (c && "border-box" === c) r = i + l + d;
                                      else {
                                          const {
                                              clientWidth: a,
                                              offsetWidth: o
                                          } = e;
                                          r = i + s + n + l + d + (o - a)
                                      }
                                  }
                                  l && (e.style.transform = l), d && (e.style.webkitTransform = d), s.roundLengths && (r = Math.floor(r))
                              } else r = (o - (s.slidesPerView - 1) * w) / s.slidesPerView, s.roundLengths && (r = Math.floor(r)), p[t] && (p[t].style[i.getDirectionLabel("width")] = r + "px");
                              p[t] && (p[t].swiperSlideSize = r), m.push(r), s.centeredSlides ? (x = x + r / 2 + E / 2 + w, 0 === E && 0 !== t && (x = x - o / 2 - w), 0 === t && (x = x - o / 2 - w), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), T % s.slidesPerGroup == 0 && f.push(x), h.push(x)) : (s.roundLengths && (x = Math.floor(x)), (T - Math.min(i.params.slidesPerGroupSkip, T)) % i.params.slidesPerGroup == 0 && f.push(x), h.push(x), x = x + r + w), i.virtualSize += r + w, E = r, T += 1
                          }
                      }
                      if (i.virtualSize = Math.max(i.virtualSize, o) + g, l && d && ("slide" === s.effect || "coverflow" === s.effect) && (n.style.width = i.virtualSize + w + "px"), s.setWrapperSize && (n.style[i.getDirectionLabel("width")] = i.virtualSize + w + "px"), S && i.grid.updateWrapperSize(r, f), !s.centeredSlides) {
                          const a = [];
                          for (let t = 0; t < f.length; t += 1) {
                              let e = f[t];
                              s.roundLengths && (e = Math.floor(e)), f[t] <= i.virtualSize - o && a.push(e)
                          }
                          f = a, 1 < Math.floor(i.virtualSize - o) - Math.floor(f[f.length - 1]) && f.push(i.virtualSize - o)
                      }
                      if (c && s.loop) {
                          const a = m[0] + w;
                          if (1 < s.slidesPerGroup) {
                              const n = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / s.slidesPerGroup),
                                  t = a * s.slidesPerGroup;
                              for (let e = 0; e < n; e += 1) f.push(f[f.length - 1] + t)
                          }
                          for (let e = 0; e < i.virtual.slidesBefore + i.virtual.slidesAfter; e += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + a), h.push(h[h.length - 1] + a), i.virtualSize += a
                      }
                      if (0 === f.length && (f = [0]), 0 !== w) {
                          const a = i.isHorizontal() && l ? "marginLeft" : i.getDirectionLabel("marginRight");
                          p.filter((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1).forEach(e => {
                              e.style[a] = w + "px"
                          })
                      }
                      if (s.centeredSlides && s.centeredSlidesBounds) {
                          let t = 0;
                          m.forEach(e => {
                              t += e + (w || 0)
                          });
                          const a = (t -= w) - o;
                          f = f.map(e => e <= 0 ? -v : e > a ? a + g : e)
                      }
                      if (s.centerInsufficientSlides) {
                          let t = 0;
                          if (m.forEach(e => {
                                  t += e + (w || 0)
                              }), (t -= w) < o) {
                              const a = (o - t) / 2;
                              f.forEach((e, t) => {
                                  f[t] = e - a
                              }), h.forEach((e, t) => {
                                  h[t] = e + a
                              })
                          }
                      }
                      if (Object.assign(i, {
                              slides: p,
                              snapGrid: f,
                              slidesGrid: h,
                              slidesSizesGrid: m
                          }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                          L(n, "--swiper-centered-offset-before", -f[0] + "px"), L(n, "--swiper-centered-offset-after", i.size / 2 - m[m.length - 1] / 2 + "px");
                          const a = -i.snapGrid[0],
                              s = -i.slidesGrid[0];
                          i.snapGrid = i.snapGrid.map(e => e + a), i.slidesGrid = i.slidesGrid.map(e => e + s)
                      }
                      if (u !== e && i.emit("slidesLengthChange"), f.length !== y && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== b && i.emit("slidesGridLengthChange"), s.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !(c || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                          const a = s.containerModifierClass + "backface-hidden",
                              n = i.el.classList.contains(a);
                          u <= s.maxBackfaceHiddenSlides ? n || i.el.classList.add(a) : n && i.el.classList.remove(a)
                      }
                  }
              },
              updateAutoHeight: function(e) {
                  const t = this,
                      r = [],
                      i = t.virtual && t.params.virtual.enabled;
                  let a, s = 0;
                  "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                  var n = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                  if ("auto" !== t.params.slidesPerView && 1 < t.params.slidesPerView)
                      if (t.params.centeredSlides)(t.visibleSlides || []).forEach(e => {
                          r.push(e)
                      });
                      else
                          for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                              const e = t.activeIndex + a;
                              if (e > t.slides.length && !i) break;
                              r.push(n(e))
                          } else r.push(n(t.activeIndex));
                  for (a = 0; a < r.length; a += 1)
                      if (void 0 !== r[a]) {
                          const e = r[a].offsetHeight;
                          s = e > s ? e : s
                      }! s && 0 !== s || (t.wrapperEl.style.height = s + "px")
              },
              updateSlidesOffset: function() {
                  var t = this,
                      r = t.slides,
                      i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
                  for (let e = 0; e < r.length; e += 1) r[e].swiperSlideOffset = (t.isHorizontal() ? r[e].offsetLeft : r[e].offsetTop) - i - t.cssOverflowAdjustment()
              },
              updateSlidesProgress: function(e) {
                  void 0 === e && (e = this && this.translate || 0);
                  const a = this,
                      s = a.params,
                      {
                          slides: n,
                          rtlTranslate: o,
                          snapGrid: l
                      } = a;
                  if (0 !== n.length) {
                      void 0 === n[0].swiperSlideOffset && a.updateSlidesOffset();
                      let r = o ? e : -e,
                          i = (n.forEach(e => {
                              e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
                          }), a.visibleSlidesIndexes = [], a.visibleSlides = [], s.spaceBetween);
                      "string" == typeof i && 0 <= i.indexOf("%") ? i = parseFloat(i.replace("%", "")) / 100 * a.size : "string" == typeof i && (i = parseFloat(i));
                      for (let t = 0; t < n.length; t += 1) {
                          var d = n[t];
                          let e = d.swiperSlideOffset;
                          s.cssMode && s.centeredSlides && (e -= n[0].swiperSlideOffset);
                          var c = (r + (s.centeredSlides ? a.minTranslate() : 0) - e) / (d.swiperSlideSize + i),
                              p = (r - l[0] + (s.centeredSlides ? a.minTranslate() : 0) - e) / (d.swiperSlideSize + i),
                              u = -(r - e),
                              f = u + a.slidesSizesGrid[t],
                              h = 0 <= u && u <= a.size - a.slidesSizesGrid[t];
                          (0 <= u && u < a.size - 1 || 1 < f && f <= a.size || u <= 0 && f >= a.size) && (a.visibleSlides.push(d), a.visibleSlidesIndexes.push(t), n[t].classList.add(s.slideVisibleClass)), h && n[t].classList.add(s.slideFullyVisibleClass), d.progress = o ? -c : c, d.originalProgress = o ? -p : p
                      }
                  }
              },
              updateProgress: function(e) {
                  var t = this;
                  if (void 0 === e) {
                      const r = t.rtlTranslate ? -1 : 1;
                      e = t && t.translate && t.translate * r || 0
                  }
                  const r = t.params,
                      i = t.maxTranslate() - t.minTranslate();
                  let {
                      progress: a,
                      isBeginning: s,
                      isEnd: n,
                      progressLoop: o
                  } = t;
                  const l = s,
                      d = n;
                  if (0 === i) a = 0, s = !0, n = !0;
                  else {
                      a = (e - t.minTranslate()) / i;
                      const r = Math.abs(e - t.minTranslate()) < 1,
                          o = Math.abs(e - t.maxTranslate()) < 1;
                      s = r || a <= 0, n = o || 1 <= a, r && (a = 0), o && (a = 1)
                  }
                  if (r.loop) {
                      const r = t.getSlideIndexByData(0),
                          i = t.getSlideIndexByData(t.slides.length - 1),
                          a = t.slidesGrid[r],
                          s = t.slidesGrid[i],
                          n = t.slidesGrid[t.slidesGrid.length - 1],
                          l = Math.abs(e);
                      1 < (o = l >= a ? (l - a) / n : (l + n - s) / n) && --o
                  }
                  Object.assign(t, {
                      progress: a,
                      progressLoop: o,
                      isBeginning: s,
                      isEnd: n
                  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (l && !s || d && !n) && t.emit("fromEdge"), t.emit("progress", a)
              },
              updateSlidesClasses: function() {
                  const t = this,
                      {
                          slides: e,
                          params: r,
                          slidesEl: i,
                          activeIndex: a
                      } = t,
                      s = t.virtual && r.virtual.enabled,
                      n = t.grid && r.grid && 1 < r.grid.rows,
                      o = e => D(i, `.${r.slideClass}${e}, swiper-slide` + e)[0];
                  let l, d, c;
                  if (e.forEach(e => {
                          e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
                      }), s)
                      if (r.loop) {
                          let e = a - t.virtual.slidesBefore;
                          (e = e < 0 ? t.virtual.slides.length + e : e) >= t.virtual.slides.length && (e -= t.virtual.slides.length), l = o(`[data-swiper-slide-index="${e}"]`)
                      } else l = o(`[data-swiper-slide-index="${a}"]`);
                  else n ? (l = e.filter(e => e.column === a)[0], c = e.filter(e => e.column === a + 1)[0], d = e.filter(e => e.column === a - 1)[0]) : l = e[a];
                  l && (l.classList.add(r.slideActiveClass), n ? c && c.classList.add(r.slideNextClass) : (c = function(e, t) {
                      for (var r = []; e.nextElementSibling;) {
                          var i = e.nextElementSibling;
                          t && !i.matches(t) || r.push(i), e = i
                      }
                      return r
                  }(l, `.${r.slideClass}, swiper-slide`)[0], (c = r.loop && !c ? e[0] : c) && c.classList.add(r.slideNextClass), d = function(e, t) {
                      for (var r = []; e.previousElementSibling;) {
                          var i = e.previousElementSibling;
                          t && !i.matches(t) || r.push(i), e = i
                      }
                      return r
                  }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !d && (d = e[e.length - 1])), d) && d.classList.add(r.slidePrevClass), t.emitSlidesClasses()
              },
              updateActiveIndex: function(r) {
                  const i = this,
                      e = i.rtlTranslate ? i.translate : -i.translate,
                      {
                          snapGrid: t,
                          params: a,
                          activeIndex: s,
                          realIndex: n,
                          snapIndex: o
                      } = i;
                  let l, d = r;
                  r = e => {
                      let t = e - i.virtual.slidesBefore;
                      return (t = t < 0 ? i.virtual.slides.length + t : t) >= i.virtual.slides.length && (t -= i.virtual.slides.length), t
                  };
                  if (void 0 === d && (d = function(e) {
                          var {
                              slidesGrid: t,
                              params: r
                          } = e, i = e.rtlTranslate ? e.translate : -e.translate;
                          let a;
                          for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? a = e : i >= t[e] && i < t[e + 1] && (a = e + 1) : i >= t[e] && (a = e);
                          return a = r.normalizeSlideIndex && (a < 0 || void 0 === a) ? 0 : a
                      }(i)), 0 <= t.indexOf(e)) l = t.indexOf(e);
                  else {
                      const r = Math.min(a.slidesPerGroupSkip, d);
                      l = r + Math.floor((d - r) / a.slidesPerGroup)
                  }
                  if (l >= t.length && (l = t.length - 1), d !== s || i.params.loop)
                      if (d === s && i.params.loop && i.virtual && i.params.virtual.enabled) i.realIndex = r(d);
                      else {
                          var c = i.grid && a.grid && 1 < a.grid.rows;
                          let t;
                          if (i.virtual && a.virtual.enabled && a.loop) t = r(d);
                          else if (c) {
                              const r = i.slides.filter(e => e.column === d)[0];
                              let e = parseInt(r.getAttribute("data-swiper-slide-index"), 10);
                              Number.isNaN(e) && (e = Math.max(i.slides.indexOf(r), 0)), t = Math.floor(e / a.grid.rows)
                          } else if (i.slides[d]) {
                              const r = i.slides[d].getAttribute("data-swiper-slide-index");
                              t = r ? parseInt(r, 10) : d
                          } else t = d;
                          Object.assign(i, {
                              previousSnapIndex: o,
                              snapIndex: l,
                              previousRealIndex: n,
                              realIndex: t,
                              previousIndex: s,
                              activeIndex: d
                          }), i.initialized && p(i), i.emit("activeIndexChange"), i.emit("snapIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && (n !== t && i.emit("realIndexChange"), i.emit("slideChange"))
                      }
                  else l !== o && (i.snapIndex = l, i.emit("snapIndexChange"))
              },
              updateClickedSlide: function(e, t) {
                  const r = this,
                      i = r.params;
                  let a = e.closest(`.${i.slideClass}, swiper-slide`);
                  !a && r.isElement && t && 1 < t.length && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                      !a && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (a = e)
                  });
                  let s, n = !1;
                  if (a)
                      for (let e = 0; e < r.slides.length; e += 1)
                          if (r.slides[e] === a) {
                              n = !0, s = e;
                              break
                          } a && n ? (r.clickedSlide = a, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, i.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()) : (r.clickedSlide = void 0, r.clickedIndex = void 0)
              }
          },
          translate: {
              getTranslate: function(e) {
                  void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                  var {
                      params: t,
                      rtlTranslate: r,
                      translate: i,
                      wrapperEl: a
                  } = this;
                  if (t.virtualTranslate) return r ? -i : i;
                  if (t.cssMode) return i;
                  let s = P(a, e);
                  return s += this.cssOverflowAdjustment(), (s = r ? -s : s) || 0
              },
              setTranslate: function(e, t) {
                  var r = this,
                      {
                          rtlTranslate: i,
                          params: a,
                          wrapperEl: s,
                          progress: n
                      } = r;
                  let o = 0,
                      l = 0;
                  r.isHorizontal() ? o = i ? -e : e : l = e, a.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? o : l, a.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -o : -l : a.virtualTranslate || (r.isHorizontal() ? o -= r.cssOverflowAdjustment() : l -= r.cssOverflowAdjustment(), s.style.transform = `translate3d(${o}px, ${l}px, 0px)`);
                  i = r.maxTranslate() - r.minTranslate();
                  (0 == i ? 0 : (e - r.minTranslate()) / i) !== n && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
              },
              minTranslate: function() {
                  return -this.snapGrid[0]
              },
              maxTranslate: function() {
                  return -this.snapGrid[this.snapGrid.length - 1]
              },
              translateTo: function(e, t, r, i, a) {
                  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
                  const s = this,
                      {
                          params: n,
                          wrapperEl: o
                      } = s;
                  if (s.animating && n.preventInteractionOnTransition) return !1;
                  var l = s.minTranslate(),
                      d = s.maxTranslate(),
                      l = i && l < e ? l : i && e < d ? d : e;
                  if (s.updateProgress(l), n.cssMode) {
                      const e = s.isHorizontal();
                      if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
                      else {
                          if (!s.support.smoothScroll) return y({
                              swiper: s,
                              targetPosition: -l,
                              side: e ? "left" : "top"
                          }), !0;
                          o.scrollTo({
                              [e ? "left" : "top"]: -l,
                              behavior: "smooth"
                          })
                      }
                  } else 0 === t ? (s.setTransition(0), s.setTranslate(l), r && (s.emit("beforeTransitionStart", t, a), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(l), r && (s.emit("beforeTransitionStart", t, a), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                      s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r) && s.emit("transitionEnd")
                  }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd)));
                  return !0
              }
          },
          transition: {
              setTransition: function(e, t) {
                  this.params.cssMode || (this.wrapperEl.style.transitionDuration = e + "ms", this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
              },
              transitionStart: function(e, t) {
                  void 0 === e && (e = !0);
                  var r = this["params"];
                  r.cssMode || (r.autoHeight && this.updateAutoHeight(), B({
                      swiper: this,
                      runCallbacks: e,
                      direction: t,
                      step: "Start"
                  }))
              },
              transitionEnd: function(e, t) {
                  void 0 === e && (e = !0);
                  var r = this["params"];
                  this.animating = !1, r.cssMode || (this.setTransition(0), B({
                      swiper: this,
                      runCallbacks: e,
                      direction: t,
                      step: "End"
                  }))
              }
          },
          slide: {
              slideTo: function(e, t, r, i, a) {
                  void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof(e = void 0 === e ? 0 : e) && (e = parseInt(e, 10));
                  const s = this;
                  let n = e;
                  n < 0 && (n = 0);
                  const {
                      params: o,
                      snapGrid: l,
                      slidesGrid: d,
                      previousIndex: c,
                      activeIndex: p,
                      rtlTranslate: u,
                      wrapperEl: f,
                      enabled: h
                  } = s;
                  if (s.animating && o.preventInteractionOnTransition || !h && !i && !a) return !1;
                  e = Math.min(s.params.slidesPerGroupSkip, n);
                  let m = e + Math.floor((n - e) / s.params.slidesPerGroup);
                  var v = -l[m = m >= l.length ? l.length - 1 : m];
                  if (o.normalizeSlideIndex)
                      for (let e = 0; e < d.length; e += 1) {
                          const t = -Math.floor(100 * v),
                              r = Math.floor(100 * d[e]),
                              i = Math.floor(100 * d[e + 1]);
                          void 0 !== d[e + 1] ? t >= r && t < i - (i - r) / 2 ? n = e : t >= r && t < i && (n = e + 1) : t >= r && (n = e)
                      }
                  if (s.initialized && n !== p) {
                      if (!s.allowSlideNext && (u ? v > s.translate && v > s.minTranslate() : v < s.translate && v < s.minTranslate())) return !1;
                      if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== n) return !1
                  }
                  let g;
                  if (n !== (c || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(v), g = n > p ? "next" : n < p ? "prev" : "reset", u && -v === s.translate || !u && v === s.translate) return s.updateActiveIndex(n), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(v), "reset" != g && (s.transitionStart(r, g), s.transitionEnd(r, g)), !1;
                  if (o.cssMode) {
                      const e = s.isHorizontal(),
                          r = u ? v : -v;
                      if (0 === t) {
                          const t = s.virtual && s.params.virtual.enabled;
                          t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), t && !s._cssModeVirtualInitialSet && 0 < s.params.initialSlide ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                              f[e ? "scrollLeft" : "scrollTop"] = r
                          })) : f[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame(() => {
                              s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                          })
                      } else {
                          if (!s.support.smoothScroll) return y({
                              swiper: s,
                              targetPosition: r,
                              side: e ? "left" : "top"
                          }), !0;
                          f.scrollTo({
                              [e ? "left" : "top"]: r,
                              behavior: "smooth"
                          })
                      }
                  } else s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(n), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(r, g), 0 === t ? s.transitionEnd(r, g) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                      s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, g))
                  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd));
                  return !0
              },
              slideToLoop: function(i, a, s, n) {
                  void 0 === a && (a = this.params.speed), void 0 === s && (s = !0), "string" == typeof(i = void 0 === i ? 0 : i) && (i = parseInt(i, 10));
                  const o = this,
                      l = o.grid && o.params.grid && 1 < o.params.grid.rows;
                  let d = i;
                  if (o.params.loop)
                      if (o.virtual && o.params.virtual.enabled) d += o.virtual.slidesBefore;
                      else {
                          let e;
                          if (l) {
                              const a = d * o.params.grid.rows;
                              e = o.slides.filter(e => +e.getAttribute("data-swiper-slide-index") == a)[0].column
                          } else e = o.getSlideIndexByData(d);
                          const a = l ? Math.ceil(o.slides.length / o.params.grid.rows) : o.slides.length,
                              s = o.params["centeredSlides"];
                          let t = o.params.slidesPerView,
                              r = ("auto" === t ? t = o.slidesPerViewDynamic() : (t = Math.ceil(parseFloat(o.params.slidesPerView, 10)), s && t % 2 == 0 && (t += 1)), a - e < t);
                          if (r = s ? r || e < Math.ceil(t / 2) : r) {
                              const n = s ? e < o.activeIndex ? "prev" : "next" : e - o.activeIndex - 1 < o.params.slidesPerView ? "next" : "prev";
                              o.loopFix({
                                  direction: n,
                                  slideTo: !0,
                                  activeSlideIndex: "next" == n ? e + 1 : e - a + 1,
                                  slideRealIndex: "next" == n ? o.realIndex : void 0
                              })
                          }
                          if (l) {
                              const i = d * o.params.grid.rows;
                              d = o.slides.filter(e => +e.getAttribute("data-swiper-slide-index") == i)[0].column
                          } else d = o.getSlideIndexByData(d)
                      } return requestAnimationFrame(() => {
                      o.slideTo(d, a, s, n)
                  }), o
              },
              slideNext: function(e, t, r) {
                  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                  const i = this,
                      {
                          enabled: a,
                          params: s,
                          animating: n
                      } = i;
                  if (!a) return i;
                  let o = s.slidesPerGroup;
                  "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                  const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                      d = i.virtual && s.virtual.enabled;
                  if (s.loop) {
                      if (n && !d && s.loopPreventsSliding) return !1;
                      if (i.loopFix({
                              direction: "next"
                          }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && s.cssMode) return requestAnimationFrame(() => {
                          i.slideTo(i.activeIndex + l, e, t, r)
                      }), !0
                  }
                  return s.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
              },
              slidePrev: function(e, t, r) {
                  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                  const i = this,
                      {
                          params: a,
                          snapGrid: s,
                          slidesGrid: n,
                          rtlTranslate: o,
                          enabled: l,
                          animating: d
                      } = i;
                  if (!l) return i;
                  var c = i.virtual && a.virtual.enabled;
                  if (a.loop) {
                      if (d && !c && a.loopPreventsSliding) return !1;
                      i.loopFix({
                          direction: "prev"
                      }), i._clientLeft = i.wrapperEl.clientLeft
                  }

                  function p(e) {
                      return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                  }
                  const u = p(o ? i.translate : -i.translate),
                      f = s.map(e => p(e));
                  let h = s[f.indexOf(u) - 1];
                  if (void 0 === h && a.cssMode) {
                      let r;
                      s.forEach((e, t) => {
                          u >= e && (r = t)
                      }), void 0 !== r && (h = s[0 < r ? r - 1 : r])
                  }
                  let m = 0;
                  if (void 0 !== h && ((m = n.indexOf(h)) < 0 && (m = i.activeIndex - 1), "auto" === a.slidesPerView) && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0)), a.rewind && i.isBeginning) {
                      const a = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                      return i.slideTo(a, e, t, r)
                  }
                  return a.loop && 0 === i.activeIndex && a.cssMode ? (requestAnimationFrame(() => {
                      i.slideTo(m, e, t, r)
                  }), !0) : i.slideTo(m, e, t, r)
              },
              slideReset: function(e, t, r) {
                  return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, r)
              },
              slideToClosest: function(e, t, r, i) {
                  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                  var a = this;
                  let s = a.activeIndex;
                  var n = Math.min(a.params.slidesPerGroupSkip, s),
                      n = n + Math.floor((s - n) / a.params.slidesPerGroup),
                      o = a.rtlTranslate ? a.translate : -a.translate;
                  if (o >= a.snapGrid[n]) {
                      const e = a.snapGrid[n];
                      o - e > (a.snapGrid[n + 1] - e) * i && (s += a.params.slidesPerGroup)
                  } else {
                      const e = a.snapGrid[n - 1];
                      o - e <= (a.snapGrid[n] - e) * i && (s -= a.params.slidesPerGroup)
                  }
                  return s = Math.max(s, 0), s = Math.min(s, a.slidesGrid.length - 1), a.slideTo(s, e, t, r)
              },
              slideToClickedSlide: function() {
                  const e = this,
                      {
                          params: t,
                          slidesEl: r
                      } = e,
                      i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                  let a, s = e.clickedIndex;
                  var n = e.isElement ? "swiper-slide" : "." + t.slideClass;
                  t.loop ? e.animating || (a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex(D(r, n + `[data-swiper-slide-index="${a}"]`)[0]), C(() => {
                      e.slideTo(s)
                  })) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex(D(r, n + `[data-swiper-slide-index="${a}"]`)[0]), C(() => {
                      e.slideTo(s)
                  })) : e.slideTo(s)) : e.slideTo(s)
              }
          },
          loop: {
              loopCreate: function(e) {
                  const r = this,
                      {
                          params: i,
                          slidesEl: t
                      } = r;
                  var a, s, n, o, l;
                  !i.loop || r.virtual && r.params.virtual.enabled || (a = () => {
                      D(t, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                          e.setAttribute("data-swiper-slide-index", t)
                      })
                  }, o = r.grid && i.grid && 1 < i.grid.rows, s = i.slidesPerGroup * (o ? i.grid.rows : 1), n = r.slides.length % s != 0, o = o && r.slides.length % i.grid.rows != 0, l = t => {
                      for (let e = 0; e < t; e += 1) {
                          const t = r.isElement ? O("swiper-slide", [i.slideBlankClass]) : O("div", [i.slideClass, i.slideBlankClass]);
                          r.slidesEl.append(t)
                      }
                  }, n ? i.loopAddBlankSlides ? (l(s - r.slides.length % s), r.recalcSlides(), r.updateSlides()) : I("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : o && (i.loopAddBlankSlides ? (l(i.grid.rows - r.slides.length % i.grid.rows), r.recalcSlides(), r.updateSlides()) : I("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), a(), r.loopFix({
                      slideRealIndex: e,
                      direction: i.centeredSlides ? void 0 : "next"
                  }))
              },
              loopFix: function(s) {
                  let {
                      slideRealIndex: n,
                      slideTo: o = !0,
                      direction: l,
                      setTranslate: d,
                      activeSlideIndex: c,
                      byController: p,
                      byMousewheel: u
                  } = void 0 === s ? {} : s;
                  const f = this;
                  if (f.params.loop) {
                      f.emit("beforeLoopFix");
                      const {
                          slides: b,
                          allowSlidePrev: w,
                          allowSlideNext: x,
                          slidesEl: E,
                          params: T
                      } = f, S = T["centeredSlides"];
                      if (f.allowSlidePrev = !0, f.allowSlideNext = !0, f.virtual && T.virtual.enabled) o && (T.centeredSlides || 0 !== f.snapIndex ? T.centeredSlides && f.snapIndex < T.slidesPerView ? f.slideTo(f.virtual.slides.length + f.snapIndex, 0, !1, !0) : f.snapIndex === f.snapGrid.length - 1 && f.slideTo(f.virtual.slidesBefore, 0, !1, !0) : f.slideTo(f.virtual.slides.length, 0, !1, !0)), f.allowSlidePrev = w, f.allowSlideNext = x;
                      else {
                          let e = T.slidesPerView;
                          "auto" === e ? e = f.slidesPerViewDynamic() : (e = Math.ceil(parseFloat(T.slidesPerView, 10)), S && e % 2 == 0 && (e += 1));
                          s = T.slidesPerGroupAuto ? e : T.slidesPerGroup;
                          let t = s;
                          t % s != 0 && (t += s - t % s), t += T.loopAdditionalSlides, f.loopedSlides = t;
                          var h = f.grid && T.grid && 1 < T.grid.rows;
                          b.length < e + t ? I("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : h && "row" === T.grid.fill && I("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                          const C = [],
                              M = [];
                          let r = f.activeIndex;
                          void 0 === c ? c = f.getSlideIndex(b.filter(e => e.classList.contains(T.slideActiveClass))[0]) : r = c;
                          var m = "next" === l || !l,
                              v = "prev" === l || !l;
                          let i = 0,
                              a = 0;
                          var g = h ? Math.ceil(b.length / T.grid.rows) : b.length,
                              y = (h ? b[c].column : c) + (S && void 0 === d ? -e / 2 + .5 : 0);
                          if (y < t) {
                              i = Math.max(t - y, s);
                              for (let e = 0; e < t - y; e += 1) {
                                  const n = e - Math.floor(e / g) * g;
                                  if (h) {
                                      const s = g - n - 1;
                                      for (let e = b.length - 1; 0 <= e; --e) b[e].column === s && C.push(e)
                                  } else C.push(g - n - 1)
                              }
                          } else if (y + e > g - t) {
                              a = Math.max(y - (g - 2 * t), s);
                              for (let e = 0; e < a; e += 1) {
                                  const n = e - Math.floor(e / g) * g;
                                  h ? b.forEach((e, t) => {
                                      e.column === n && M.push(t)
                                  }) : M.push(n)
                              }
                          }
                          if (f.__preventObserver__ = !0, requestAnimationFrame(() => {
                                  f.__preventObserver__ = !1
                              }), v && C.forEach(e => {
                                  b[e].swiperLoopMoveDOM = !0, E.prepend(b[e]), b[e].swiperLoopMoveDOM = !1
                              }), m && M.forEach(e => {
                                  b[e].swiperLoopMoveDOM = !0, E.append(b[e]), b[e].swiperLoopMoveDOM = !1
                              }), f.recalcSlides(), "auto" === T.slidesPerView ? f.updateSlides() : h && (0 < C.length && v || 0 < M.length && m) && f.slides.forEach((e, t) => {
                                  f.grid.updateSlide(t, e, f.slides)
                              }), T.watchSlidesProgress && f.updateSlidesOffset(), o)
                              if (0 < C.length && v) {
                                  if (void 0 === n) {
                                      const s = f.slidesGrid[r],
                                          n = f.slidesGrid[r + i] - s;
                                      u ? f.setTranslate(f.translate - n) : (f.slideTo(r + i, 0, !1, !0), d && (f.touchEventsData.startTranslate = f.touchEventsData.startTranslate - n, f.touchEventsData.currentTranslate = f.touchEventsData.currentTranslate - n))
                                  } else if (d) {
                                      const s = h ? C.length / T.grid.rows : C.length;
                                      f.slideTo(f.activeIndex + s, 0, !1, !0), f.touchEventsData.currentTranslate = f.translate
                                  }
                              } else if (0 < M.length && m)
                              if (void 0 === n) {
                                  const s = f.slidesGrid[r],
                                      n = f.slidesGrid[r - a] - s;
                                  u ? f.setTranslate(f.translate - n) : (f.slideTo(r - a, 0, !1, !0), d && (f.touchEventsData.startTranslate = f.touchEventsData.startTranslate - n, f.touchEventsData.currentTranslate = f.touchEventsData.currentTranslate - n))
                              } else {
                                  const s = h ? M.length / T.grid.rows : M.length;
                                  f.slideTo(f.activeIndex - s, 0, !1, !0)
                              } if (f.allowSlidePrev = w, f.allowSlideNext = x, f.controller && f.controller.control && !p) {
                              const s = {
                                  slideRealIndex: n,
                                  direction: l,
                                  setTranslate: d,
                                  activeSlideIndex: c,
                                  byController: !0
                              };
                              Array.isArray(f.controller.control) ? f.controller.control.forEach(e => {
                                  !e.destroyed && e.params.loop && e.loopFix({
                                      ...s,
                                      slideTo: e.params.slidesPerView === T.slidesPerView && o
                                  })
                              }) : f.controller.control instanceof f.constructor && f.controller.control.params.loop && f.controller.control.loopFix({
                                  ...s,
                                  slideTo: f.controller.control.params.slidesPerView === T.slidesPerView && o
                              })
                          }
                      }
                      f.emit("loopFix")
                  }
              },
              loopDestroy: function() {
                  const e = this,
                      {
                          params: t,
                          slidesEl: r
                      } = e;
                  if (!(!t.loop || e.virtual && e.params.virtual.enabled)) {
                      e.recalcSlides();
                      const i = [];
                      e.slides.forEach(e => {
                          var t = void 0 === e.swiperSlideIndex ? +e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                          i[t] = e
                      }), e.slides.forEach(e => {
                          e.removeAttribute("data-swiper-slide-index")
                      }), i.forEach(e => {
                          r.append(e)
                      }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                  }
              }
          },
          grabCursor: {
              setGrabCursor: function(e) {
                  const t = this;
                  var r;
                  !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl, t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                      t.__preventObserver__ = !1
                  }))
              },
              unsetGrabCursor: function() {
                  const e = this;
                  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                      e.__preventObserver__ = !1
                  }))
              }
          },
          events: {
              attachEvents: function() {
                  var e = this,
                      t = e["params"];
                  e.onTouchStart = function(r) {
                      var i = this,
                          a = A();
                      let s = r;
                      if (s.originalEvent && (s = s.originalEvent), r = i.touchEventsData, "pointerdown" === s.type) {
                          if (null !== r.pointerId && r.pointerId !== s.pointerId) return;
                          r.pointerId = s.pointerId
                      } else "touchstart" === s.type && 1 === s.targetTouches.length && (r.touchId = s.targetTouches[0].identifier);
                      if ("touchstart" === s.type) F(i, s, s.targetTouches[0].pageX);
                      else {
                          var {
                              params: n,
                              touches: o,
                              enabled: l
                          } = i;
                          if (l && (n.simulateTouch || "mouse" !== s.pointerType) && (!i.animating || !n.preventInteractionOnTransition)) {
                              !i.animating && n.cssMode && n.loop && i.loopFix();
                              let t = s.target;
                              if (("wrapper" !== n.touchEventsTarget || i.wrapperEl.contains(t)) && !("which" in s && 3 === s.which || "button" in s && 0 < s.button || r.isTouched && r.isMoved)) {
                                  var l = !!n.noSwipingClass && "" !== n.noSwipingClass,
                                      d = s.composedPath ? s.composedPath() : s.path,
                                      l = (l && s.target && s.target.shadowRoot && d && (t = d[0]), n.noSwipingSelector || "." + n.noSwipingClass),
                                      d = !(!s.target || !s.target.shadowRoot);
                                  if (n.noSwiping && (d ? function(i, e) {
                                          return function e(t) {
                                              var r;
                                              return t && t !== A() && t !== k() && ((r = (t = t.assignedSlot ? t.assignedSlot : t).closest(i)) || t.getRootNode) ? r || e(t.getRootNode().host) : null
                                          }(e = void 0 === t ? this : e)
                                      }(l, t) : t.closest(l))) i.allowClick = !0;
                                  else if (!n.swipeHandler || t.closest(n.swipeHandler)) {
                                      o.currentX = s.pageX, o.currentY = s.pageY;
                                      d = o.currentX, l = o.currentY;
                                      if (F(i, s, d)) {
                                          Object.assign(r, {
                                              isTouched: !0,
                                              isMoved: !1,
                                              allowTouchCallbacks: !0,
                                              isScrolling: void 0,
                                              startMoving: void 0
                                          }), o.startX = d, o.startY = l, r.touchStartTime = g(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, 0 < n.threshold && (r.allowThresholdMove = !1);
                                          let e = !0;
                                          t.matches(r.focusableElements) && (e = !1, "SELECT" === t.nodeName) && (r.isTouched = !1), a.activeElement && a.activeElement.matches(r.focusableElements) && a.activeElement !== t && a.activeElement.blur();
                                          d = e && i.allowTouchMove && n.touchStartPreventDefault;
                                          !n.touchStartForcePreventDefault && !d || t.isContentEditable || s.preventDefault(), n.freeMode && n.freeMode.enabled && i.freeMode && i.animating && !n.cssMode && i.freeMode.onTouchStart(), i.emit("touchStart", s)
                                      }
                                  }
                              }
                          }
                      }
                  }.bind(e), e.onTouchMove = function(t) {
                      const r = A(),
                          a = this,
                          s = a.touchEventsData,
                          {
                              params: n,
                              touches: o,
                              rtlTranslate: l,
                              enabled: e
                          } = a;
                      if (e && (n.simulateTouch || "mouse" !== t.pointerType)) {
                          let e, i = t;
                          if ("pointermove" === (i = i.originalEvent ? i.originalEvent : i).type) {
                              if (null !== s.touchId) return;
                              if (i.pointerId !== s.pointerId) return
                          }
                          if ("touchmove" === i.type) {
                              if (!(e = [...i.changedTouches].filter(e => e.identifier === s.touchId)[0]) || e.identifier !== s.touchId) return
                          } else e = i;
                          if (s.isTouched) {
                              var t = e.pageX,
                                  d = e.pageY;
                              if (i.preventedByNestedSwiper) o.startX = t, o.startY = d;
                              else if (a.allowTouchMove) {
                                  if (n.touchReleaseOnEdges && !n.loop)
                                      if (a.isVertical()) {
                                          if (d < o.startY && a.translate <= a.maxTranslate() || d > o.startY && a.translate >= a.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                                      } else if (t < o.startX && a.translate <= a.maxTranslate() || t > o.startX && a.translate >= a.minTranslate()) return;
                                  if (r.activeElement && i.target === r.activeElement && i.target.matches(s.focusableElements)) s.isMoved = !0, a.allowClick = !1;
                                  else {
                                      s.allowTouchCallbacks && a.emit("touchMove", i), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = t, o.currentY = d;
                                      var c = o.currentX - o.startX,
                                          p = o.currentY - o.startY;
                                      if (!(a.params.threshold && Math.sqrt(c ** 2 + p ** 2) < a.params.threshold))
                                          if (void 0 === s.isScrolling && (a.isHorizontal() && o.currentY === o.startY || a.isVertical() && o.currentX === o.startX ? s.isScrolling = !1 : 25 <= c * c + p * p && (u = 180 * Math.atan2(Math.abs(p), Math.abs(c)) / Math.PI, s.isScrolling = a.isHorizontal() ? u > n.touchAngle : 90 - u > n.touchAngle)), s.isScrolling && a.emit("touchMoveOpposite", i), void 0 !== s.startMoving || o.currentX === o.startX && o.currentY === o.startY || (s.startMoving = !0), s.isScrolling) s.isTouched = !1;
                                          else if (s.startMoving) {
                                          a.allowClick = !1, !n.cssMode && i.cancelable && i.preventDefault(), n.touchMoveStopPropagation && !n.nested && i.stopPropagation();
                                          let r = a.isHorizontal() ? c : p,
                                              e = a.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
                                          n.oneWayMovement && (r = Math.abs(r) * (l ? 1 : -1), e = Math.abs(e) * (l ? 1 : -1)), o.diff = r, r *= n.touchRatio, l && (r = -r, e = -e);
                                          var u = a.touchesDirection,
                                              c = (a.swipeDirection = 0 < r ? "prev" : "next", a.touchesDirection = 0 < e ? "prev" : "next", a.params.loop && !n.cssMode),
                                              p = "next" === a.touchesDirection && a.allowSlideNext || "prev" === a.touchesDirection && a.allowSlidePrev;
                                          if (!s.isMoved) {
                                              if (c && p && a.loopFix({
                                                      direction: a.swipeDirection
                                                  }), s.startTranslate = a.getTranslate(), a.setTransition(0), a.animating) {
                                                  const t = new window.CustomEvent("transitionend", {
                                                      bubbles: !0,
                                                      cancelable: !0
                                                  });
                                                  a.wrapperEl.dispatchEvent(t)
                                              }
                                              s.allowMomentumBounce = !1, !n.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", i)
                                          }
                                          if ((new Date).getTime(), s.isMoved && s.allowThresholdMove && u !== a.touchesDirection && c && p && 1 <= Math.abs(r)) Object.assign(o, {
                                              startX: t,
                                              startY: d,
                                              currentX: t,
                                              currentY: d,
                                              startTranslate: s.currentTranslate
                                          }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
                                          else {
                                              a.emit("sliderMove", i), s.isMoved = !0, s.currentTranslate = r + s.startTranslate;
                                              let e = !0,
                                                  t = n.resistanceRatio;
                                              if (n.touchReleaseOnEdges && (t = 0), 0 < r ? (c && p && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? a.minTranslate() - a.slidesSizesGrid[a.activeIndex + 1] : a.minTranslate()) && a.loopFix({
                                                      direction: "prev",
                                                      setTranslate: !0,
                                                      activeSlideIndex: 0
                                                  }), s.currentTranslate > a.minTranslate() && (e = !1, n.resistance) && (s.currentTranslate = a.minTranslate() - 1 + (-a.minTranslate() + s.startTranslate + r) ** t)) : r < 0 && (c && p && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? a.maxTranslate() + a.slidesSizesGrid[a.slidesSizesGrid.length - 1] : a.maxTranslate()) && a.loopFix({
                                                      direction: "next",
                                                      setTranslate: !0,
                                                      activeSlideIndex: a.slides.length - ("auto" === n.slidesPerView ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
                                                  }), s.currentTranslate < a.maxTranslate()) && (e = !1, n.resistance) && (s.currentTranslate = a.maxTranslate() + 1 - (a.maxTranslate() - s.startTranslate - r) ** t), e && (i.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), a.allowSlidePrev || a.allowSlideNext || (s.currentTranslate = s.startTranslate), 0 < n.threshold) {
                                                  if (!(Math.abs(r) > n.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                                                  if (!s.allowThresholdMove) return s.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, s.currentTranslate = s.startTranslate, void(o.diff = a.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
                                              }
                                              n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && a.freeMode || n.watchSlidesProgress) && (a.updateActiveIndex(), a.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(), a.updateProgress(s.currentTranslate), a.setTranslate(s.currentTranslate))
                                          }
                                      }
                                  }
                              } else i.target.matches(s.focusableElements) || (a.allowClick = !1), s.isTouched && (Object.assign(o, {
                                  startX: t,
                                  startY: d,
                                  currentX: t,
                                  currentY: d
                              }), s.touchStartTime = g())
                          } else s.startMoving && s.isScrolling && a.emit("touchMoveOpposite", i)
                      }
                  }.bind(e), e.onTouchEnd = function(a) {
                      const s = this,
                          t = s.touchEventsData;
                      let e, n = a;
                      if ("touchend" === (n = n.originalEvent ? n.originalEvent : n).type || "touchcancel" === n.type) {
                          if (!(e = [...n.changedTouches].filter(e => e.identifier === t.touchId)[0]) || e.identifier !== t.touchId) return
                      } else {
                          if (null !== t.touchId) return;
                          if (n.pointerId !== t.pointerId) return;
                          e = n
                      }
                      if (!["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) || ["pointercancel", "contextmenu"].includes(n.type) && (s.browser.isSafari || s.browser.isWebView)) {
                          t.pointerId = null, t.touchId = null;
                          var {
                              params: o,
                              touches: a,
                              rtlTranslate: r,
                              slidesGrid: l,
                              enabled: d
                          } = s;
                          if (d && (o.simulateTouch || "mouse" !== n.pointerType))
                              if (t.allowTouchCallbacks && s.emit("touchEnd", n), t.allowTouchCallbacks = !1, t.isTouched) {
                                  o.grabCursor && t.isMoved && t.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                                  var c, d = g(),
                                      p = d - t.touchStartTime;
                                  if (s.allowClick) {
                                      const a = n.path || n.composedPath && n.composedPath();
                                      s.updateClickedSlide(a && a[0] || n.target, a), s.emit("tap click", n), p < 300 && d - t.lastClickTime < 300 && s.emit("doubleTap doubleClick", n)
                                  }
                                  if (t.lastClickTime = g(), C(() => {
                                          s.destroyed || (s.allowClick = !0)
                                      }), t.isTouched && t.isMoved && s.swipeDirection && (0 !== a.diff || t.loopSwapReset) && (t.currentTranslate !== t.startTranslate || t.loopSwapReset)) {
                                      if (t.isTouched = !1, t.isMoved = !1, t.startMoving = !1, c = o.followFinger ? r ? s.translate : -s.translate : -t.currentTranslate, !o.cssMode)
                                          if (o.freeMode && o.freeMode.enabled) s.freeMode.onTouchEnd({
                                              currentPos: c
                                          });
                                          else {
                                              var u = c >= -s.maxTranslate() && !s.params.loop;
                                              let t = 0,
                                                  r = s.slidesSizesGrid[0];
                                              for (let e = 0; e < l.length; e += e < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
                                                  const s = e < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                                                  void 0 !== l[e + s] ? (u || c >= l[e] && c < l[e + s]) && (t = e, r = l[e + s] - l[e]) : (u || c >= l[e]) && (t = e, r = l[l.length - 1] - l[l.length - 2])
                                              }
                                              let e = null,
                                                  i = null;
                                              o.rewind && (s.isBeginning ? i = o.virtual && o.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (e = 0));
                                              d = (c - l[t]) / r, a = t < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                                              p > o.longSwipesMs ? o.longSwipes ? ("next" === s.swipeDirection && (d >= o.longSwipesRatio ? s.slideTo(o.rewind && s.isEnd ? e : t + a) : s.slideTo(t)), "prev" === s.swipeDirection && (d > 1 - o.longSwipesRatio ? s.slideTo(t + a) : null !== i && d < 0 && Math.abs(d) > o.longSwipesRatio ? s.slideTo(i) : s.slideTo(t))) : s.slideTo(s.activeIndex) : o.shortSwipes ? !s.navigation || n.target !== s.navigation.nextEl && n.target !== s.navigation.prevEl ? ("next" === s.swipeDirection && s.slideTo(null !== e ? e : t + a), "prev" === s.swipeDirection && s.slideTo(null !== i ? i : t)) : n.target === s.navigation.nextEl ? s.slideTo(t + a) : s.slideTo(t) : s.slideTo(s.activeIndex)
                                          }
                                  } else t.isTouched = !1, t.isMoved = !1, t.startMoving = !1
                              } else t.isMoved && o.grabCursor && s.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1
                      }
                  }.bind(e), e.onDocumentTouchStart = function() {
                      this.documentTouchHandlerProceeded || (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
                  }.bind(e), t.cssMode && (e.onScroll = function() {
                      var e = this,
                          {
                              wrapperEl: t,
                              rtlTranslate: r,
                              enabled: i
                          } = e;
                      i && (e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(), (0 == (i = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1))
                  }.bind(e)), e.onClick = function(e) {
                      var t = this;
                      t.enabled && !t.allowClick && (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation) && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())
                  }.bind(e), e.onLoad = function(e) {
                      var t = this;
                      n(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
                  }.bind(e), X(e, "on")
              },
              detachEvents: function() {
                  X(this, "off")
              }
          },
          breakpoints: {
              setBreakpoint: function() {
                  const i = this,
                      {
                          realIndex: e,
                          initialized: t,
                          params: a,
                          el: r
                      } = i,
                      s = a.breakpoints;
                  if (s && 0 !== Object.keys(s).length) {
                      var n = i.getBreakpoint(s, i.params.breakpointsBase, i.el);
                      if (n && i.currentBreakpoint !== n) {
                          const p = (n in s ? s[n] : void 0) || i.originalParams,
                              u = W(i, a),
                              f = W(i, p),
                              h = a.enabled;
                          u && !f ? (r.classList.remove(a.containerModifierClass + "grid", a.containerModifierClass + "grid-column"), i.emitContainerClasses()) : !u && f && (r.classList.add(a.containerModifierClass + "grid"), (p.grid.fill && "column" === p.grid.fill || !p.grid.fill && "column" === a.grid.fill) && r.classList.add(a.containerModifierClass + "grid-column"), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(e => {
                              var t, r;
                              void 0 !== p[e] && (t = a[e] && a[e].enabled, r = p[e] && p[e].enabled, t && !r && i[e].disable(), !t) && r && i[e].enable()
                          });
                          var o = p.direction && p.direction !== a.direction,
                              l = a.loop && (p.slidesPerView !== a.slidesPerView || o),
                              d = a.loop,
                              o = (o && t && i.changeDirection(), m(i.params, p), i.params.enabled),
                              c = i.params.loop;
                          Object.assign(i, {
                              allowTouchMove: i.params.allowTouchMove,
                              allowSlideNext: i.params.allowSlideNext,
                              allowSlidePrev: i.params.allowSlidePrev
                          }), h && !o ? i.disable() : !h && o && i.enable(), i.currentBreakpoint = n, i.emit("_beforeBreakpoint", p), t && (l ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !d && c ? (i.loopCreate(e), i.updateSlides()) : d && !c && i.loopDestroy()), i.emit("breakpoint", p)
                      }
                  }
              },
              getBreakpoint: function(e, r, i) {
                  if (void 0 === r && (r = "window"), e && ("container" !== r || i)) {
                      let t = !1;
                      const a = k(),
                          s = "window" === r ? a.innerHeight : i.clientHeight,
                          n = Object.keys(e).map(e => {
                              var t;
                              return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)), {
                                  value: s * t,
                                  point: e
                              }) : {
                                  value: e,
                                  point: e
                              }
                          });
                      n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                      for (let e = 0; e < n.length; e += 1) {
                          const {
                              point: k,
                              value: s
                          } = n[e];
                          "window" === r ? a.matchMedia(`(min-width: ${s}px)`).matches && (t = k) : s <= i.clientWidth && (t = k)
                      }
                      return t || "max"
                  }
              }
          },
          checkOverflow: {
              checkOverflow: function() {
                  const e = this,
                      {
                          isLocked: t,
                          params: r
                      } = e,
                      i = r["slidesOffsetBefore"];
                  if (i) {
                      const t = e.slides.length - 1,
                          r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                      e.isLocked = e.size > r
                  } else e.isLocked = 1 === e.snapGrid.length;
                  !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
              }
          },
          classes: {
              addClasses: function() {
                  var {
                      classNames: e,
                      params: t,
                      rtl: r,
                      el: i,
                      device: a
                  } = this, r = function(e, r) {
                      const i = [];
                      return e.forEach(t => {
                          "object" == typeof t ? Object.keys(t).forEach(e => {
                              t[e] && i.push(r + e)
                          }) : "string" == typeof t && i.push(r + t)
                      }), i
                  }(["initialized", t.direction, {
                      "free-mode": this.params.freeMode && t.freeMode.enabled
                  }, {
                      autoheight: t.autoHeight
                  }, {
                      rtl: r
                  }, {
                      grid: t.grid && 1 < t.grid.rows
                  }, {
                      "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill
                  }, {
                      android: a.android
                  }, {
                      ios: a.ios
                  }, {
                      "css-mode": t.cssMode
                  }, {
                      centered: t.cssMode && t.centeredSlides
                  }, {
                      "watch-progress": t.watchSlidesProgress
                  }], t.containerModifierClass);
                  e.push(...r), i.classList.add(...e), this.emitContainerClasses()
              },
              removeClasses: function() {
                  var {
                      el: e,
                      classNames: t
                  } = this;
                  e.classList.remove(...t), this.emitContainerClasses()
              }
          }
      },
      c = {};
  class u {
      constructor() {
          let t, r;
          for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? r = i[0] : [t, r] = i, r = m({}, r = r || {}), t && !r.el && (r.el = t);
          var p, s = A();
          if (r.el && "string" == typeof r.el && 1 < s.querySelectorAll(r.el).length) {
              const t = [];
              return s.querySelectorAll(r.el).forEach(e => {
                  e = m({}, r, {
                      el: e
                  });
                  t.push(new u(e))
              }), t
          }
          const n = this,
              o = (n.__swiper__ = !0, n.support = $(), n.device = (void 0 === (p = {
                  userAgent: r.userAgent
              }) && (p = {}), w = w || function() {
                  var e = (void 0 === p ? {} : p)["userAgent"],
                      t = $(),
                      r = k(),
                      i = r.navigator.platform,
                      e = e || r.navigator.userAgent,
                      a = {
                          ios: !1,
                          android: !1
                      },
                      s = r.screen.width,
                      r = r.screen.height,
                      n = e.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let o = e.match(/(iPad).*OS\s([\d_]+)/);
                  var l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                      d = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      c = "Win32" === i,
                      i = "MacIntel" === i;
                  return !o && i && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(s + "x" + r) && (o = (o = e.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]), n && !c && (a.os = "android", a.android = !0), (o || d || l) && (a.os = "ios", a.ios = !0), a
              }()), n.browser = R = R || function() {
                  const t = k();
                  let e = !1;

                  function r() {
                      var e = t.navigator.userAgent.toLowerCase();
                      return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                  }
                  if (r()) {
                      const r = String(t.navigator.userAgent);
                      if (r.includes("Version/")) {
                          const [t, i] = r.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                          e = t < 16 || 16 === t && i < 2
                      }
                  }
                  return {
                      isSafari: e || r(),
                      needPerspectiveFix: e,
                      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                  }
              }(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], r.modules && Array.isArray(r.modules) && n.modules.push(...r.modules), {});
          n.modules.forEach(e => {
              var i, a;
              e({
                  params: r,
                  swiper: n,
                  extendParams: (i = r, a = o, function(e) {
                      void 0 === e && (e = {});
                      var t = Object.keys(e)[0],
                          r = e[t];
                      "object" == typeof r && null !== r && (!0 === i[t] && (i[t] = {
                          enabled: !0
                      }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), 0 <= ["pagination", "scrollbar"].indexOf(t) && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), t in i) && "enabled" in r && ("object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                          enabled: !1
                      })), m(a, e)
                  }),
                  on: n.on.bind(n),
                  once: n.once.bind(n),
                  off: n.off.bind(n),
                  emit: n.emit.bind(n)
              })
          });
          s = m({}, _, o);
          return n.params = m({}, s, c, r), n.originalParams = m({}, n.params), n.passedParams = m({}, r), n.params && n.params.on && Object.keys(n.params.on).forEach(e => {
              n.on(e, n.params.on[e])
          }), n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
              enabled: n.params.enabled,
              el: t,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === n.params.direction,
              isVertical: () => "vertical" === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                  return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
              },
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: n.params.focusableElements,
                  lastClickTime: 0,
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  startMoving: void 0,
                  pointerId: null,
                  touchId: null
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
          }), n.emit("_swiper"), n.params.init && n.init(), n
      }
      getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
          } [e]
      }
      getSlideIndex(e) {
          var {
              slidesEl: t,
              params: r
          } = this, t = E(D(t, `.${r.slideClass}, swiper-slide`)[0]);
          return E(e) - t
      }
      getSlideIndexByData(t) {
          return this.getSlideIndex(this.slides.filter(e => +e.getAttribute("data-swiper-slide-index") === t)[0])
      }
      recalcSlides() {
          var {
              slidesEl: e,
              params: t
          } = this;
          this.slides = D(e, `.${t.slideClass}, swiper-slide`)
      }
      enable() {
          var e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
      }
      disable() {
          var e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
      }
      setProgress(e, t) {
          var r = this,
              i = (e = Math.min(Math.max(e, 0), 1), r.minTranslate()),
              e = (r.maxTranslate() - i) * e + i;
          r.translateTo(e, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
      }
      emitContainerClasses() {
          const t = this;
          var e;
          t.params._emitClasses && t.el && (e = t.el.className.split(" ").filter(e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)), t.emit("_containerClasses", e.join(" ")))
      }
      getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
      }
      emitSlidesClasses() {
          const r = this;
          if (r.params._emitClasses && r.el) {
              const i = [];
              r.slides.forEach(e => {
                  var t = r.getSlideClasses(e);
                  i.push({
                      slideEl: e,
                      classNames: t
                  }), r.emit("_slideClass", e, t)
              }), r.emit("_slideClasses", i)
          }
      }
      slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          var {
              params: r,
              slides: i,
              slidesGrid: a,
              slidesSizesGrid: s,
              size: n,
              activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
              let t, r = i[o] ? i[o].swiperSlideSize : 0;
              for (let e = o + 1; e < i.length; e += 1) i[e] && !t && (r += i[e].swiperSlideSize, l += 1, r > n) && (t = !0);
              for (let e = o - 1; 0 <= e; --e) i[e] && !t && (r += i[e].swiperSlideSize, l += 1, r > n) && (t = !0)
          } else if ("current" === e)
              for (let e = o + 1; e < i.length; e += 1)(t ? a[e] + s[e] - a[o] < n : a[e] - a[o] < n) && (l += 1);
          else
              for (let e = o - 1; 0 <= e; --e) a[o] - a[e] < n && (l += 1);
          return l
      }
      update() {
          const t = this;
          if (t && !t.destroyed) {
              const {
                  snapGrid: i,
                  params: a
              } = t;
              let e;
              if (a.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                      e.complete && n(t, e)
                  }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), a.freeMode && a.freeMode.enabled && !a.cssMode) r(), a.autoHeight && t.updateAutoHeight();
              else {
                  if (("auto" === a.slidesPerView || 1 < a.slidesPerView) && t.isEnd && !a.centeredSlides) {
                      const i = (t.virtual && a.virtual.enabled ? t.virtual : t).slides;
                      e = t.slideTo(i.length - 1, 0, !1, !0)
                  } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                  e || r()
              }

              function r() {
                  var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                      e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                  t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
              }
              a.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
          }
      }
      changeDirection(t, e) {
          void 0 === e && (e = !0);
          var r = this,
              i = r.params.direction;
          return (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== t && "vertical" !== t || (r.el.classList.remove("" + r.params.containerModifierClass + i), r.el.classList.add("" + r.params.containerModifierClass + t), r.emitContainerClasses(), r.params.direction = t, r.slides.forEach(e => {
              "vertical" === t ? e.style.width = "" : e.style.height = ""
          }), r.emit("changeDirection"), e && r.update()), r
      }
      changeLanguageDirection(e) {
          var t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(t.params.containerModifierClass + "rtl"), t.el.dir = "rtl") : (t.el.classList.remove(t.params.containerModifierClass + "rtl"), t.el.dir = "ltr"), t.update())
      }
      mount(r) {
          const i = this;
          if (!i.mounted) {
              let e = r || i.params.el;
              if (!(e = "string" == typeof e ? document.querySelector(e) : e)) return !1;
              e.swiper = i, e.parentNode && e.parentNode.host && "SWIPER-CONTAINER" === e.parentNode.host.nodeName && (i.isElement = !0);
              const a = () => "." + (i.params.wrapperClass || "").trim().split(" ").join(".");
              let t = e && e.shadowRoot && e.shadowRoot.querySelector ? e.shadowRoot.querySelector(a()) : D(e, a())[0];
              !t && i.params.createElements && (t = O("div", i.params.wrapperClass), e.append(t), D(e, "." + i.params.slideClass).forEach(e => {
                  t.append(e)
              })), Object.assign(i, {
                  el: e,
                  wrapperEl: t,
                  slidesEl: i.isElement && !e.parentNode.host.slideSlots ? e.parentNode.host : t,
                  hostEl: i.isElement ? e.parentNode.host : e,
                  mounted: !0,
                  rtl: "rtl" === e.dir.toLowerCase() || "rtl" === M(e, "direction"),
                  rtlTranslate: "horizontal" === i.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === M(e, "direction")),
                  wrongRTL: "-webkit-box" === M(t, "display")
              })
          }
          return !0
      }
      init(e) {
          const t = this;
          return t.initialized || !1 !== t.mount(e) && (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), e = [...t.el.querySelectorAll('[loading="lazy"]')], t.isElement && e.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), e.forEach(e => {
              e.complete ? n(t, e) : e.addEventListener("load", e => {
                  n(t, e.target)
              })
          }), p(t), t.initialized = !0, p(t), t.emit("init"), t.emit("afterInit")), t
      }
      destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
              {
                  params: i,
                  el: a,
                  wrapperEl: s,
                  slides: n
              } = r;
          if (void 0 !== r.params && !r.destroyed) {
              if (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), a.removeAttribute("style"), s.removeAttribute("style"), n) && n.length && n.forEach(e => {
                      e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                  }), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(e => {
                      r.off(e)
                  }), !1 !== e) {
                  r.el.swiper = null;
                  {
                      const o = r;
                      Object.keys(o).forEach(e => {
                          try {
                              o[e] = null
                          } catch (e) {}
                          try {
                              delete o[e]
                          } catch (e) {}
                      })
                  }
              }
              r.destroyed = !0
          }
          return null
      }
      static extendDefaults(e) {
          m(c, e)
      }
      static get extendedDefaults() {
          return c
      }
      static get defaults() {
          return _
      }
      static installModule(e) {
          u.prototype.__modules__ || (u.prototype.__modules__ = []);
          var t = u.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
      }
      static use(e) {
          return Array.isArray(e) ? e.forEach(e => u.installModule(e)) : u.installModule(e), u
      }
  }

  function H(r, i, a, s) {
      return r.params.createElements && Object.keys(s).forEach(t => {
          if (!a[t] && !0 === a.auto) {
              let e = D(r.el, "." + s[t])[0];
              e || ((e = O("div", s[t])).className = s[t], r.el.append(e)), a[t] = e, i[t] = e
          }
      }), a
  }

  function q(e) {
      return "." + (e = void 0 === e ? "" : e).trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")
  }

  function f(e) {
      const {
          effect: r,
          swiper: i,
          on: t,
          setTranslate: a,
          setTransition: s,
          overwriteParams: n,
          perspective: o,
          recreateShadows: l,
          getEffectParams: d
      } = e;
      let c;
      t("beforeInit", () => {
          var e;
          i.params.effect === r && (i.classNames.push("" + i.params.containerModifierClass + r), o && o() && i.classNames.push(i.params.containerModifierClass + "3d"), e = n ? n() : {}, Object.assign(i.params, e), Object.assign(i.originalParams, e))
      }), t("setTranslate", () => {
          i.params.effect === r && a()
      }), t("setTransition", (e, t) => {
          i.params.effect === r && s(t)
      }), t("transitionEnd", () => {
          i.params.effect === r && l && d && d().slideShadows && (i.slides.forEach(e => {
              e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
          }), l())
      }), t("virtualUpdate", () => {
          i.params.effect === r && (i.slides.length || (c = !0), requestAnimationFrame(() => {
              c && i.slides && i.slides.length && (a(), c = !1)
          }))
      })
  }

  function x(e, t) {
      var r = s(t);
      return r !== t && (r.style.backfaceVisibility = "hidden", r.style["-webkit-backface-visibility"] = "hidden"), r
  }

  function h(e) {
      let {
          swiper: r,
          duration: t,
          transformElements: i,
          allSlides: a
      } = e;
      const s = r["activeIndex"];
      if (r.params.virtualTranslate && 0 !== t) {
          let t = !1;
          (a ? i : i.filter(e => {
              var t, e = e.classList.contains("swiper-slide-transform") ? (t = e).parentElement || r.slides.filter(e => e.shadowRoot && e.shadowRoot === t.parentNode)[0] : e;
              return r.getSlideIndex(e) === s
          })).forEach(e => {
              v(e, () => {
                  var e;
                  t || r && !r.destroyed && (t = !0, r.animating = !1, e = new window.CustomEvent("transitionend", {
                      bubbles: !0,
                      cancelable: !0
                  }), r.wrapperEl.dispatchEvent(e))
              })
          })
      }
  }

  function T(e, t, r) {
      r = "swiper-slide-shadow" + (r ? "-" + r : "") + (e ? " swiper-slide-shadow-" + e : ""), e = s(t);
      let i = e.querySelector("." + r.split(" ").join("."));
      return i || (i = O("div", r.split(" ")), e.append(i)), i
  }
  return Object.keys(o).forEach(t => {
      Object.keys(o[t]).forEach(e => {
          u.prototype[e] = o[t][e]
      })
  }), u.use([function(e) {
      let {
          swiper: s,
          on: t,
          emit: r
      } = e;
      const i = k();
      let a = null,
          n = null;
      const o = () => {
              s && !s.destroyed && s.initialized && (r("beforeResize"), r("resize"))
          },
          l = () => {
              s && !s.destroyed && s.initialized && r("orientationchange")
          };
      t("init", () => {
          s.params.resizeObserver && void 0 !== i.ResizeObserver ? s && !s.destroyed && s.initialized && (a = new ResizeObserver(r => {
              n = i.requestAnimationFrame(() => {
                  var {
                      width: e,
                      height: t
                  } = s;
                  let i = e,
                      a = t;
                  r.forEach(e => {
                      var {
                          contentBoxSize: e,
                          contentRect: t,
                          target: r
                      } = e;
                      r && r !== s.el || (i = t ? t.width : (e[0] || e).inlineSize, a = t ? t.height : (e[0] || e).blockSize)
                  }), i === e && a === t || o()
              })
          })).observe(s.el) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", l))
      }), t("destroy", () => {
          n && i.cancelAnimationFrame(n), a && a.unobserve && s.el && (a.unobserve(s.el), a = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", l)
      })
  }, function(e) {
      let {
          swiper: i,
          extendParams: t,
          on: r,
          emit: a
      } = e;

      function s(e, t) {
          void 0 === t && (t = {});
          var r = new(o.MutationObserver || o.WebkitMutationObserver)(e => {
              var t;
              i.__preventObserver__ || (1 === e.length ? a("observerUpdate", e[0]) : (t = function() {
                  a("observerUpdate", e[0])
              }, o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)))
          });
          r.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
          }), n.push(r)
      }
      const n = [],
          o = k();
      t({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
      }), r("init", () => {
          if (i.params.observer) {
              if (i.params.observeParents) {
                  var t = N(i.hostEl);
                  for (let e = 0; e < t.length; e += 1) s(t[e])
              }
              s(i.hostEl, {
                  childList: i.params.observeSlideChildren
              }), s(i.wrapperEl, {
                  attributes: !1
              })
          }
      }), r("destroy", () => {
          n.forEach(e => {
              e.disconnect()
          }), n.splice(0, n.length)
      })
  }]), u.use([function(e) {
      let t, {
          swiper: S,
          extendParams: r,
          on: i,
          emit: C
      } = e;
      r({
          virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0
          }
      });
      e = A();
      S.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: []
      };
      const a = e.createElement("div");

      function M(e, t) {
          var r = S.params.virtual;
          if (r.cache && S.virtual.cache[t]) return S.virtual.cache[t];
          let i;
          return r.renderSlide ? "string" == typeof(i = r.renderSlide.call(S, e, t)) && (a.innerHTML = i, i = a.children[0]) : i = S.isElement ? O("swiper-slide") : O("div", S.params.slideClass), i.setAttribute("data-swiper-slide-index", t), r.renderSlide || (i.innerHTML = e), r.cache && (S.virtual.cache[t] = i), i
      }

      function n(t) {
          const {
              slidesPerView: r,
              slidesPerGroup: e,
              centeredSlides: i,
              loop: a
          } = S.params, {
              addSlidesBefore: s,
              addSlidesAfter: n
          } = S.params.virtual, {
              from: o,
              to: l,
              slides: d,
              slidesGrid: c,
              offset: p
          } = S.virtual;
          S.params.cssMode || S.updateActiveIndex();
          var u = S.activeIndex || 0;
          let f, h, m, v = (f = S.rtlTranslate ? "right" : S.isHorizontal() ? "left" : "top", u - (m = i ? (h = Math.floor(r / 2) + e + n, Math.floor(r / 2) + e + s) : (h = r + (e - 1) + n, (a ? r : e) + s))),
              g = u + h,
              y = (a || (v = Math.max(v, 0), g = Math.min(g, d.length - 1)), (S.slidesGrid[v] || 0) - (S.slidesGrid[0] || 0));

          function b() {
              S.updateSlides(), S.updateProgress(), S.updateSlidesClasses(), C("virtualUpdate")
          }
          if (a && u >= m ? (v -= m, i || (y += S.slidesGrid[0])) : a && u < m && (v = -m, i) && (y += S.slidesGrid[0]), Object.assign(S.virtual, {
                  from: v,
                  to: g,
                  offset: y,
                  slidesGrid: S.slidesGrid,
                  slidesBefore: m,
                  slidesAfter: h
              }), o !== v || l !== g || t)
              if (S.params.virtual.renderExternal) S.params.virtual.renderExternal.call(S, {
                  offset: y,
                  from: v,
                  to: g,
                  slides: function() {
                      var t = [];
                      for (let e = v; e <= g; e += 1) t.push(d[e]);
                      return t
                  }()
              }), S.params.virtual.renderExternalUpdate ? b() : C("virtualUpdate");
              else {
                  var w = [],
                      x = [],
                      E = e => {
                          let t = e;
                          return e < 0 ? t = d.length + e : t >= d.length && (t -= d.length), t
                      };
                  if (t) S.slides.filter(e => e.matches(`.${S.params.slideClass}, swiper-slide`)).forEach(e => {
                      e.remove()
                  });
                  else
                      for (let e = o; e <= l; e += 1)
                          if (e < v || e > g) {
                              const r = E(e);
                              S.slides.filter(e => e.matches(`.${S.params.slideClass}[data-swiper-slide-index="${r}"], swiper-slide[data-swiper-slide-index="${r}"]`)).forEach(e => {
                                  e.remove()
                              })
                          } var u = a ? -d.length : 0,
                      T = a ? 2 * d.length : d.length;
                  for (let e = u; e < T; e += 1)
                      if (e >= v && e <= g) {
                          const S = E(e);
                          void 0 === l || t ? x.push(S) : (e > l && x.push(S), e < o && w.push(S))
                      } if (x.forEach(e => {
                          S.slidesEl.append(M(d[e], e))
                      }), a)
                      for (let e = w.length - 1; 0 <= e; --e) {
                          const r = w[e];
                          S.slidesEl.prepend(M(d[r], r))
                      } else w.sort((e, t) => t - e), w.forEach(e => {
                          S.slidesEl.prepend(M(d[e], e))
                      });
                  D(S.slidesEl, ".swiper-slide, swiper-slide").forEach(e => {
                      e.style[f] = y - Math.abs(S.cssOverflowAdjustment()) + "px"
                  }), b()
              }
          else S.slidesGrid !== c && y !== p && S.slides.forEach(e => {
              e.style[f] = y - Math.abs(S.cssOverflowAdjustment()) + "px"
          }), S.updateProgress(), C("virtualUpdate")
      }
      i("beforeInit", () => {
          if (S.params.virtual.enabled) {
              let e;
              var t;
              void 0 === S.passedParams.virtual.slides && (t = [...S.slidesEl.children].filter(e => e.matches(`.${S.params.slideClass}, swiper-slide`))) && t.length && (S.virtual.slides = [...t], e = !0, t.forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t), (S.virtual.cache[t] = e).remove()
              })), e || (S.virtual.slides = S.params.virtual.slides), S.classNames.push(S.params.containerModifierClass + "virtual"), S.params.watchSlidesProgress = !0, S.originalParams.watchSlidesProgress = !0, n()
          }
      }), i("setTranslate", () => {
          S.params.virtual.enabled && (S.params.cssMode && !S._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
              n()
          }, 100)) : n())
      }), i("init update resize", () => {
          S.params.virtual.enabled && S.params.cssMode && L(S.wrapperEl, "--swiper-virtual-size", S.virtualSize + "px")
      }), Object.assign(S.virtual, {
          appendSlide: function(t) {
              if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1) t[e] && S.virtual.slides.push(t[e]);
              else S.virtual.slides.push(t);
              n(!0)
          },
          prependSlide: function(i) {
              const a = S.activeIndex;
              let e = a + 1,
                  s = 1;
              if (Array.isArray(i)) {
                  for (let e = 0; e < i.length; e += 1) i[e] && S.virtual.slides.unshift(i[e]);
                  e = a + i.length, s = i.length
              } else S.virtual.slides.unshift(i);
              if (S.params.virtual.cache) {
                  const i = S.virtual.cache,
                      a = {};
                  Object.keys(i).forEach(e => {
                      var t = i[e],
                          r = t.getAttribute("data-swiper-slide-index");
                      r && t.setAttribute("data-swiper-slide-index", parseInt(r, 10) + s), a[parseInt(e, 10) + s] = t
                  }), S.virtual.cache = a
              }
              n(!0), S.slideTo(e, 0)
          },
          removeSlide: function(r) {
              if (null != r) {
                  let t = S.activeIndex;
                  if (Array.isArray(r))
                      for (let e = r.length - 1; 0 <= e; --e) S.params.virtual.cache && (delete S.virtual.cache[r[e]], Object.keys(S.virtual.cache).forEach(e => {
                          r < e && (S.virtual.cache[e - 1] = S.virtual.cache[e], S.virtual.cache[e - 1].setAttribute("data-swiper-slide-index", e - 1), delete S.virtual.cache[e])
                      })), S.virtual.slides.splice(r[e], 1), r[e] < t && --t, t = Math.max(t, 0);
                  else S.params.virtual.cache && (delete S.virtual.cache[r], Object.keys(S.virtual.cache).forEach(e => {
                      r < e && (S.virtual.cache[e - 1] = S.virtual.cache[e], S.virtual.cache[e - 1].setAttribute("data-swiper-slide-index", e - 1), delete S.virtual.cache[e])
                  })), S.virtual.slides.splice(r, 1), r < t && --t, t = Math.max(t, 0);
                  n(!0), S.slideTo(t, 0)
              }
          },
          removeAllSlides: function() {
              S.virtual.slides = [], S.params.virtual.cache && (S.virtual.cache = {}), n(!0), S.slideTo(0, 0)
          },
          update: n
      })
  }, function(e) {
      let {
          swiper: p,
          extendParams: t,
          on: r,
          emit: u
      } = e;
      const f = A(),
          h = k();

      function i(t) {
          if (p.enabled) {
              const r = p["rtlTranslate"];
              let e = t;
              const i = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode,
                  a = p.params.keyboard.pageUpDown,
                  s = a && 33 === i,
                  n = a && 34 === i,
                  o = 37 === i,
                  l = 39 === i,
                  d = 38 === i,
                  c = 40 === i;
              if (!p.allowSlideNext && (p.isHorizontal() && l || p.isVertical() && c || n)) return !1;
              if (!p.allowSlidePrev && (p.isHorizontal() && o || p.isVertical() && d || s)) return !1;
              if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                  if (p.params.keyboard.onlyInViewport && (s || n || o || l || d || c)) {
                      let t = !1;
                      if (0 < N(p.el, `.${p.params.slideClass}, swiper-slide`).length && 0 === N(p.el, "." + p.params.slideActiveClass).length) return;
                      const e = p.el,
                          i = e.clientWidth,
                          a = e.clientHeight,
                          u = h.innerWidth,
                          f = h.innerHeight,
                          s = z(e),
                          n = (r && (s.left -= e.scrollLeft), [
                              [s.left, s.top],
                              [s.left + i, s.top],
                              [s.left, s.top + a],
                              [s.left + i, s.top + a]
                          ]);
                      for (let e = 0; e < n.length; e += 1) {
                          const r = n[e];
                          0 <= r[0] && r[0] <= u && 0 <= r[1] && r[1] <= f && (0 === r[0] && 0 === r[1] || (t = !0))
                      }
                      if (!t) return
                  }
                  p.isHorizontal() ? ((s || n || o || l) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), ((n || l) && !r || (s || o) && r) && p.slideNext(), ((s || o) && !r || (n || l) && r) && p.slidePrev()) : ((s || n || d || c) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (n || c) && p.slideNext(), (s || d) && p.slidePrev()), u("keyPress", i)
              }
          }
      }

      function a() {
          p.keyboard.enabled || (f.addEventListener("keydown", i), p.keyboard.enabled = !0)
      }

      function s() {
          p.keyboard.enabled && (f.removeEventListener("keydown", i), p.keyboard.enabled = !1)
      }
      p.keyboard = {
          enabled: !1
      }, t({
          keyboard: {
              enabled: !1,
              onlyInViewport: !0,
              pageUpDown: !0
          }
      }), r("init", () => {
          p.params.keyboard.enabled && a()
      }), r("destroy", () => {
          p.keyboard.enabled && s()
      }), Object.assign(p.keyboard, {
          enable: a,
          disable: s
      })
  }, function(e) {
      let {
          swiper: c,
          extendParams: t,
          on: r,
          emit: p
      } = e;
      const i = k();
      let u;
      t({
          mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
              noMousewheelClass: "swiper-no-mousewheel"
          }
      }), c.mousewheel = {
          enabled: !1
      };
      let f, a = g();
      const h = [];

      function s() {
          c.enabled && (c.mouseEntered = !0)
      }

      function n() {
          c.enabled && (c.mouseEntered = !1)
      }

      function m(e) {
          c.params.mousewheel.thresholdDelta && e.delta < c.params.mousewheel.thresholdDelta || c.params.mousewheel.thresholdTime && g() - a < c.params.mousewheel.thresholdTime || 6 <= e.delta && g() - a < 60 || (e.direction < 0 ? c.isEnd && !c.params.loop || c.animating || (c.slideNext(), p("scroll", e.raw)) : c.isBeginning && !c.params.loop || c.animating || (c.slidePrev(), p("scroll", e.raw)), a = (new i.Date).getTime())
      }

      function o(i) {
          let a = i,
              s = !0;
          if (c.enabled && !i.target.closest("." + c.params.mousewheel.noMousewheelClass)) {
              var n = c.params.mousewheel;
              c.params.cssMode && a.preventDefault();
              let e = c.el;
              const d = (e = "container" !== c.params.mousewheel.eventsTarget ? document.querySelector(c.params.mousewheel.eventsTarget) : e) && e.contains(a.target);
              if (!c.mouseEntered && !d && !n.releaseOnEdges) return !0;
              a.originalEvent && (a = a.originalEvent);
              let t = 0;
              var o = c.rtlTranslate ? -1 : 1,
                  l = function(e) {
                      let t = 0,
                          r = 0,
                          i = 0,
                          a = 0;
                      return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = r, r = 0), i = 10 * t, a = 10 * r, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = a, a = 0), (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, a *= 40) : (i *= 800, a *= 800)), i && !t && (t = i < 1 ? -1 : 1), a && !r && (r = a < 1 ? -1 : 1), {
                          spinX: t,
                          spinY: r,
                          pixelX: i,
                          pixelY: a
                      }
                  }(a);
              if (n.forceToAxis)
                  if (c.isHorizontal()) {
                      if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                      t = -l.pixelX * o
                  } else {
                      if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                      t = -l.pixelY
                  }
              else t = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
              if (0 === t) return !0;
              n.invert && (t = -t);
              let r = c.getTranslate() + t * n.sensitivity;
              if ((r = r >= c.minTranslate() ? c.minTranslate() : r) <= c.maxTranslate() && (r = c.maxTranslate()), (s = !!c.params.loop || !(r === c.minTranslate() || r === c.maxTranslate())) && c.params.nested && a.stopPropagation(), c.params.freeMode && c.params.freeMode.enabled) {
                  const i = {
                          time: g(),
                          delta: Math.abs(t),
                          direction: Math.sign(t)
                      },
                      s = f && i.time < f.time + 500 && i.delta <= f.delta && i.direction === f.direction;
                  if (!s) {
                      f = void 0;
                      let e = c.getTranslate() + t * n.sensitivity;
                      const g = c.isBeginning,
                          d = c.isEnd;
                      if ((e = e >= c.minTranslate() ? c.minTranslate() : e) <= c.maxTranslate() && (e = c.maxTranslate()), c.setTransition(0), c.setTranslate(e), c.updateProgress(), c.updateActiveIndex(), c.updateSlidesClasses(), (!g && c.isBeginning || !d && c.isEnd) && c.updateSlidesClasses(), c.params.loop && c.loopFix({
                              direction: i.direction < 0 ? "next" : "prev",
                              byMousewheel: !0
                          }), c.params.freeMode.sticky) {
                          clearTimeout(u), u = void 0, 15 <= h.length && h.shift();
                          const a = h.length ? h[h.length - 1] : void 0,
                              s = h[0];
                          if (h.push(i), a && (i.delta > a.delta || i.direction !== a.direction)) h.splice(0);
                          else if (15 <= h.length && i.time - s.time < 500 && 1 <= s.delta - i.delta && i.delta <= 6) {
                              const a = 0 < t ? .8 : .2;
                              f = i, h.splice(0), u = C(() => {
                                  c.slideToClosest(c.params.speed, !0, void 0, a)
                              }, 0)
                          }
                          u = u || C(() => {
                              f = i, h.splice(0), c.slideToClosest(c.params.speed, !0, void 0, .5)
                          }, 500)
                      }
                      if (s || p("scroll", a), c.params.autoplay && c.params.autoplayDisableOnInteraction && c.autoplay.stop(), n.releaseOnEdges && (e === c.minTranslate() || e === c.maxTranslate())) return !0
                  }
              } else {
                  const a = {
                          time: g(),
                          delta: Math.abs(t),
                          direction: Math.sign(t),
                          raw: i
                      },
                      s = (2 <= h.length && h.shift(), h.length ? h[h.length - 1] : void 0);
                  if (h.push(a), (!s || a.direction !== s.direction || a.delta > s.delta || a.time > s.time + 150) && m(a), function(e) {
                          var t = c.params.mousewheel;
                          if (e.direction < 0) {
                              if (c.isEnd && !c.params.loop && t.releaseOnEdges) return 1
                          } else if (c.isBeginning && !c.params.loop && t.releaseOnEdges) return 1
                      }(a)) return !0
              }
              return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
          }
      }

      function l(e) {
          let t = c.el;
          (t = "container" !== c.params.mousewheel.eventsTarget ? document.querySelector(c.params.mousewheel.eventsTarget) : t)[e]("mouseenter", s), t[e]("mouseleave", n), t[e]("wheel", o)
      }

      function d() {
          return c.params.cssMode ? (c.wrapperEl.removeEventListener("wheel", o), !0) : !c.mousewheel.enabled && (l("addEventListener"), c.mousewheel.enabled = !0)
      }

      function v() {
          return c.params.cssMode ? (c.wrapperEl.addEventListener(event, o), !0) : !!c.mousewheel.enabled && (l("removeEventListener"), !(c.mousewheel.enabled = !1))
      }
      r("init", () => {
          !c.params.mousewheel.enabled && c.params.cssMode && v(), c.params.mousewheel.enabled && d()
      }), r("destroy", () => {
          c.params.cssMode && d(), c.mousewheel.enabled && v()
      }), Object.assign(c.mousewheel, {
          enable: d,
          disable: v
      })
  }, function(e) {
      let {
          swiper: a,
          extendParams: t,
          on: r,
          emit: s
      } = e;
      t({
          navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
              navigationDisabledClass: "swiper-navigation-disabled"
          }
      }), a.navigation = {
          nextEl: null,
          prevEl: null
      };
      const n = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

      function o(e) {
          let t;
          return !(e && "string" == typeof e && a.isElement && (t = a.el.querySelector(e))) && (e && ("string" == typeof e && (t = [...document.querySelectorAll(e)]), a.params.uniqueNavElements) && "string" == typeof e && 1 < t.length && 1 === a.el.querySelectorAll(e).length && (t = a.el.querySelector(e)), e) && !t ? e : t
      }

      function i(e, t) {
          const r = a.params.navigation;
          (e = n(e)).forEach(e => {
              e && (e.classList[t ? "add" : "remove"](...r.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = t), a.params.watchOverflow) && a.enabled && e.classList[a.isLocked ? "add" : "remove"](r.lockClass)
          })
      }

      function l() {
          var {
              nextEl: e,
              prevEl: t
          } = a.navigation;
          a.params.loop ? (i(t, !1), i(e, !1)) : (i(t, a.isBeginning && !a.params.rewind), i(e, a.isEnd && !a.params.rewind))
      }

      function d(e) {
          e.preventDefault(), a.isBeginning && !a.params.loop && !a.params.rewind || (a.slidePrev(), s("navigationPrev"))
      }

      function c(e) {
          e.preventDefault(), a.isEnd && !a.params.loop && !a.params.rewind || (a.slideNext(), s("navigationNext"))
      }

      function p() {
          const r = a.params.navigation;
          if (a.params.navigation = H(a, a.originalParams.navigation, a.params.navigation, {
                  nextEl: "swiper-button-next",
                  prevEl: "swiper-button-prev"
              }), r.nextEl || r.prevEl) {
              var e = o(r.nextEl),
                  t = o(r.prevEl);
              Object.assign(a.navigation, {
                  nextEl: e,
                  prevEl: t
              }), e = n(e), t = n(t);
              const i = (e, t) => {
                  e && e.addEventListener("click", "next" === t ? c : d), !a.enabled && e && e.classList.add(...r.lockClass.split(" "))
              };
              e.forEach(e => i(e, "next")), t.forEach(e => i(e, "prev"))
          }
      }

      function u() {
          var {
              nextEl: e,
              prevEl: t
          } = a.navigation, e = n(e), t = n(t);
          const r = (e, t) => {
              e.removeEventListener("click", "next" === t ? c : d), e.classList.remove(...a.params.navigation.disabledClass.split(" "))
          };
          e.forEach(e => r(e, "next")), t.forEach(e => r(e, "prev"))
      }
      r("init", () => {
          (!1 === a.params.navigation.enabled ? f : (p(), l))()
      }), r("toEdge fromEdge lock unlock", () => {
          l()
      }), r("destroy", () => {
          u()
      }), r("enable disable", () => {
          var {
              nextEl: e,
              prevEl: t
          } = a.navigation, e = n(e), t = n(t);
          a.enabled ? l() : [...e, ...t].filter(e => !!e).forEach(e => e.classList.add(a.params.navigation.lockClass))
      }), r("click", (e, t) => {
          var {
              nextEl: r,
              prevEl: i
          } = a.navigation, r = n(r), i = n(i), t = t.target;
          if (a.params.navigation.hideOnClick && !i.includes(t) && !r.includes(t) && (!(a.pagination && a.params.pagination && a.params.pagination.clickable) || a.pagination.el !== t && !a.pagination.el.contains(t))) {
              let e;
              r.length ? e = r[0].classList.contains(a.params.navigation.hiddenClass) : i.length && (e = i[0].classList.contains(a.params.navigation.hiddenClass)), s(!0 === e ? "navigationShow" : "navigationHide"), [...r, ...i].filter(e => !!e).forEach(e => e.classList.toggle(a.params.navigation.hiddenClass))
          }
      });
      const f = () => {
          a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")), u()
      };
      Object.assign(a.navigation, {
          enable: () => {
              a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")), p(), l()
          },
          disable: f,
          update: l,
          init: p,
          destroy: u
      })
  }, function(e) {
      let {
          swiper: d,
          extendParams: t,
          on: r,
          emit: c
      } = e;
      e = "swiper-pagination";
      let p, u = (t({
          pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: e => e,
              formatFractionTotal: e => e,
              bulletClass: e + "-bullet",
              bulletActiveClass: e + "-bullet-active",
              modifierClass: e + "-",
              currentClass: e + "-current",
              totalClass: e + "-total",
              hiddenClass: e + "-hidden",
              progressbarFillClass: e + "-progressbar-fill",
              progressbarOppositeClass: e + "-progressbar-opposite",
              clickableClass: e + "-clickable",
              lockClass: e + "-lock",
              horizontalClass: e + "-horizontal",
              verticalClass: e + "-vertical",
              paginationDisabledClass: e + "-disabled"
          }
      }), d.pagination = {
          el: null,
          bullets: []
      }, 0);
      const a = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

      function s() {
          return !d.params.pagination.el || !d.pagination.el || Array.isArray(d.pagination.el) && 0 === d.pagination.el.length
      }

      function f(e, t) {
          var r = d.params.pagination["bulletActiveClass"];
          (e = e && e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(r + "-" + t), e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(r + `-${t}-` + t)
      }

      function i(e) {
          var t = e.target.closest(q(d.params.pagination.bulletClass));
          t && (e.preventDefault(), e = E(t) * d.params.slidesPerGroup, d.params.loop ? d.realIndex !== e && d.slideToLoop(e) : d.slideTo(e))
      }

      function n() {
          const n = d.rtl,
              o = d.params.pagination;
          if (!s()) {
              let s, e, t = d.pagination.el;
              t = a(t);
              const r = (d.virtual && d.params.virtual.enabled ? d.virtual : d).slides.length,
                  l = d.params.loop ? Math.ceil(r / d.params.slidesPerGroup) : d.snapGrid.length;
              if (d.params.loop ? (e = d.previousRealIndex || 0, s = 1 < d.params.slidesPerGroup ? Math.floor(d.realIndex / d.params.slidesPerGroup) : d.realIndex) : void 0 !== d.snapIndex ? (s = d.snapIndex, e = d.previousSnapIndex) : (e = d.previousIndex || 0, s = d.activeIndex || 0), "bullets" === o.type && d.pagination.bullets && 0 < d.pagination.bullets.length) {
                  const c = d.pagination.bullets;
                  let r, i, a;
                  if (o.dynamicBullets && (p = j(c[0], d.isHorizontal() ? "width" : "height", !0), t.forEach(e => {
                          e.style[d.isHorizontal() ? "width" : "height"] = p * (o.dynamicMainBullets + 4) + "px"
                      }), 1 < o.dynamicMainBullets && void 0 !== e && ((u += s - (e || 0)) > o.dynamicMainBullets - 1 ? u = o.dynamicMainBullets - 1 : u < 0 && (u = 0)), r = Math.max(s - u, 0), i = r + (Math.min(c.length, o.dynamicMainBullets) - 1), a = (i + r) / 2), c.forEach(e => {
                          var t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => "" + o.bulletActiveClass + e)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                          e.classList.remove(...t)
                      }), 1 < t.length) c.forEach(e => {
                      var t = E(e);
                      t === s ? e.classList.add(...o.bulletActiveClass.split(" ")) : d.isElement && e.setAttribute("part", "bullet"), o.dynamicBullets && (t >= r && t <= i && e.classList.add(...(o.bulletActiveClass + "-main").split(" ")), t === r && f(e, "prev"), t === i) && f(e, "next")
                  });
                  else {
                      const n = c[s];
                      if (n && n.classList.add(...o.bulletActiveClass.split(" ")), d.isElement && c.forEach((e, t) => {
                              e.setAttribute("part", t === s ? "bullet-active" : "bullet")
                          }), o.dynamicBullets) {
                          const n = c[r],
                              d = c[i];
                          for (let e = r; e <= i; e += 1) c[e] && c[e].classList.add(...(o.bulletActiveClass + "-main").split(" "));
                          f(n, "prev"), f(d, "next")
                      }
                  }
                  if (o.dynamicBullets) {
                      const e = Math.min(c.length, o.dynamicMainBullets + 4),
                          t = (p * e - p) / 2 - a * p,
                          u = n ? "right" : "left";
                      c.forEach(e => {
                          e.style[d.isHorizontal() ? u : "top"] = t + "px"
                      })
                  }
              }
              t.forEach((e, i) => {
                  if ("fraction" === o.type && (e.querySelectorAll(q(o.currentClass)).forEach(e => {
                          e.textContent = o.formatFractionCurrent(s + 1)
                      }), e.querySelectorAll(q(o.totalClass)).forEach(e => {
                          e.textContent = o.formatFractionTotal(l)
                      })), "progressbar" === o.type) {
                      var a = o.progressbarOpposite ? d.isHorizontal() ? "vertical" : "horizontal" : d.isHorizontal() ? "horizontal" : "vertical";
                      const i = (s + 1) / l;
                      let t = 1,
                          r = 1;
                      "horizontal" == a ? t = i : r = i, e.querySelectorAll(q(o.progressbarFillClass)).forEach(e => {
                          e.style.transform = `translate3d(0,0,0) scaleX(${t}) scaleY(${r})`, e.style.transitionDuration = d.params.speed + "ms"
                      })
                  }
                  "custom" === o.type && o.renderCustom ? (e.innerHTML = o.renderCustom(d, s + 1, l), 0 === i && c("paginationRender", e)) : (0 === i && c("paginationRender", e), c("paginationUpdate", e)), d.params.watchOverflow && d.enabled && e.classList[d.isLocked ? "add" : "remove"](o.lockClass)
              })
          }
      }

      function o() {
          const i = d.params.pagination;
          if (!s()) {
              var e = d.virtual && d.params.virtual.enabled ? d.virtual.slides.length : d.grid && 1 < d.params.grid.rows ? d.slides.length / Math.ceil(d.params.grid.rows) : d.slides.length,
                  t = d.pagination.el,
                  t = a(t);
              let r = "";
              if ("bullets" === i.type) {
                  let t = d.params.loop ? Math.ceil(e / d.params.slidesPerGroup) : d.snapGrid.length;
                  d.params.freeMode && d.params.freeMode.enabled && t > e && (t = e);
                  for (let e = 0; e < t; e += 1) i.renderBullet ? r += i.renderBullet.call(d, e, i.bulletClass) : r += `<${i.bulletElement} ${d.isElement?'part="bullet"':""} class="${i.bulletClass}"></${i.bulletElement}>`
              }
              "fraction" === i.type && (r = i.renderFraction ? i.renderFraction.call(d, i.currentClass, i.totalClass) : `<span class="${i.currentClass}"></span> / <span class="${i.totalClass}"></span>`), "progressbar" === i.type && (r = i.renderProgressbar ? i.renderProgressbar.call(d, i.progressbarFillClass) : `<span class="${i.progressbarFillClass}"></span>`), d.pagination.bullets = [], t.forEach(e => {
                  "custom" !== i.type && (e.innerHTML = r || ""), "bullets" === i.type && d.pagination.bullets.push(...e.querySelectorAll(q(i.bulletClass)))
              }), "custom" !== i.type && c("paginationRender", t[0])
          }
      }

      function l() {
          d.params.pagination = H(d, d.originalParams.pagination, d.params.pagination, {
              el: "swiper-pagination"
          });
          const t = d.params.pagination;
          if (t.el) {
              let e;
              (e = (e = (e = "string" == typeof t.el && d.isElement ? d.el.querySelector(t.el) : e) || "string" != typeof t.el ? e : [...document.querySelectorAll(t.el)]) || t.el) && 0 !== e.length && (d.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(e) && 1 < e.length && 1 < (e = [...d.el.querySelectorAll(t.el)]).length && (e = e.filter(e => N(e, ".swiper")[0] === d.el)[0]), Array.isArray(e) && 1 === e.length && (e = e[0]), Object.assign(d.pagination, {
                  el: e
              }), (e = a(e)).forEach(e => {
                  "bullets" === t.type && t.clickable && e.classList.add(...(t.clickableClass || "").split(" ")), e.classList.add(t.modifierClass + t.type), e.classList.add(d.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (e.classList.add("" + t.modifierClass + t.type + "-dynamic"), u = 0, t.dynamicMainBullets < 1) && (t.dynamicMainBullets = 1), "progressbar" === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass), t.clickable && e.addEventListener("click", i), d.enabled || e.classList.add(t.lockClass)
              }))
          }
      }

      function h() {
          const t = d.params.pagination;
          var e;
          s() || ((e = d.pagination.el) && (e = a(e)).forEach(e => {
              e.classList.remove(t.hiddenClass), e.classList.remove(t.modifierClass + t.type), e.classList.remove(d.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (e.classList.remove(...(t.clickableClass || "").split(" ")), e.removeEventListener("click", i))
          }), d.pagination.bullets && d.pagination.bullets.forEach(e => e.classList.remove(...t.bulletActiveClass.split(" "))))
      }
      r("changeDirection", () => {
          if (d.pagination && d.pagination.el) {
              const t = d.params.pagination;
              var e = d.pagination["el"];
              (e = a(e)).forEach(e => {
                  e.classList.remove(t.horizontalClass, t.verticalClass), e.classList.add(d.isHorizontal() ? t.horizontalClass : t.verticalClass)
              })
          }
      }), r("init", () => {
          (!1 === d.params.pagination.enabled ? m : (l(), o(), n))()
      }), r("activeIndexChange", () => {
          void 0 === d.snapIndex && n()
      }), r("snapIndexChange", () => {
          n()
      }), r("snapGridLengthChange", () => {
          o(), n()
      }), r("destroy", () => {
          h()
      }), r("enable disable", () => {
          var e = d.pagination["el"];
          e && (e = a(e)).forEach(e => e.classList[d.enabled ? "remove" : "add"](d.params.pagination.lockClass))
      }), r("lock unlock", () => {
          n()
      }), r("click", (e, t) => {
          var t = t.target,
              r = a(d.pagination.el);
          if (d.params.pagination.el && d.params.pagination.hideOnClick && r && 0 < r.length && !t.classList.contains(d.params.pagination.bulletClass) && (!d.navigation || !(d.navigation.nextEl && t === d.navigation.nextEl || d.navigation.prevEl && t === d.navigation.prevEl))) {
              const e = r[0].classList.contains(d.params.pagination.hiddenClass);
              c(!0 === e ? "paginationShow" : "paginationHide"), r.forEach(e => e.classList.toggle(d.params.pagination.hiddenClass))
          }
      });
      const m = () => {
          d.el.classList.add(d.params.pagination.paginationDisabledClass);
          var e = d.pagination["el"];
          e && (e = a(e)).forEach(e => e.classList.add(d.params.pagination.paginationDisabledClass)), h()
      };
      Object.assign(d.pagination, {
          enable: () => {
              d.el.classList.remove(d.params.pagination.paginationDisabledClass);
              var e = d.pagination["el"];
              e && (e = a(e)).forEach(e => e.classList.remove(d.params.pagination.paginationDisabledClass)), l(), o(), n()
          },
          disable: m,
          render: o,
          update: n,
          init: l,
          destroy: h
      })
  }, function(e) {
      let {
          swiper: l,
          extendParams: t,
          on: r,
          emit: s
      } = e;
      const n = A();
      let o, d, c, i, p = !1,
          u = null,
          f = null;

      function a() {
          if (l.params.scrollbar.el && l.scrollbar.el) {
              const {
                  scrollbar: r,
                  rtlTranslate: i
              } = l, {
                  dragEl: a,
                  el: s
              } = r, n = l.params.scrollbar, o = l.params.loop ? l.progressLoop : l.progress;
              let e = d,
                  t = (c - d) * o;
              i ? 0 < (t = -t) ? (e = d - t, t = 0) : -t + d > c && (e = c + t) : t < 0 ? (e = d + t, t = 0) : t + d > c && (e = c - t), l.isHorizontal() ? (a.style.transform = `translate3d(${t}px, 0, 0)`, a.style.width = e + "px") : (a.style.transform = `translate3d(0px, ${t}px, 0)`, a.style.height = e + "px"), n.hide && (clearTimeout(u), s.style.opacity = 1, u = setTimeout(() => {
                  s.style.opacity = 0, s.style.transitionDuration = "400ms"
              }, 1e3))
          }
      }

      function h() {
          var e, t, r;
          l.params.scrollbar.el && l.scrollbar.el && (e = l["scrollbar"], {
              dragEl: t,
              el: r
          } = e, t.style.width = "", t.style.height = "", c = l.isHorizontal() ? r.offsetWidth : r.offsetHeight, i = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)), d = "auto" === l.params.scrollbar.dragSize ? c * i : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? t.style.width = d + "px" : t.style.height = d + "px", r.style.display = 1 <= i ? "none" : "", l.params.scrollbar.hide && (r.style.opacity = 0), l.params.watchOverflow) && l.enabled && e.el.classList[l.isLocked ? "add" : "remove"](l.params.scrollbar.lockClass)
      }

      function m(e) {
          return l.isHorizontal() ? e.clientX : e.clientY
      }

      function v(e) {
          var {
              scrollbar: t,
              rtlTranslate: r
          } = l, t = t["el"];
          let i;
          i = (m(e) - z(t)[l.isHorizontal() ? "left" : "top"] - (null !== o ? o : d / 2)) / (c - d), i = Math.max(Math.min(i, 1), 0), r && (i = 1 - i);
          e = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * i;
          l.updateProgress(e), l.setTranslate(e), l.updateActiveIndex(), l.updateSlidesClasses()
      }

      function g(e) {
          var t = l.params.scrollbar,
              {
                  scrollbar: r,
                  wrapperEl: i
              } = l,
              {
                  el: r,
                  dragEl: a
              } = r;
          p = !0, o = e.target === a ? m(e) - e.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", a.style.transitionDuration = "100ms", v(e), clearTimeout(f), r.style.transitionDuration = "0ms", t.hide && (r.style.opacity = 1), l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "none"), s("scrollbarDragStart", e)
      }

      function y(e) {
          var {
              scrollbar: t,
              wrapperEl: r
          } = l, {
              el: t,
              dragEl: i
          } = t;
          p && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, v(e), r.style.transitionDuration = "0ms", t.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", s("scrollbarDragMove", e))
      }

      function b(e) {
          const t = l.params.scrollbar,
              {
                  scrollbar: r,
                  wrapperEl: i
              } = l,
              a = r["el"];
          p && (p = !1, l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), t.hide && (clearTimeout(f), f = C(() => {
              a.style.opacity = 0, a.style.transitionDuration = "400ms"
          }, 1e3)), s("scrollbarDragEnd", e), t.snapOnRelease) && l.slideToClosest()
      }

      function w(e) {
          var t, {
                  scrollbar: r,
                  params: i
              } = l,
              r = r.el;
          r && (t = !!i.passiveListeners && {
              passive: !1,
              capture: !1
          }, i = !!i.passiveListeners && {
              passive: !0,
              capture: !1
          }, r = r) && (r[r = "on" === e ? "addEventListener" : "removeEventListener"]("pointerdown", g, t), n[r]("pointermove", y, t), n[r]("pointerup", b, i))
      }

      function x() {
          var {
              scrollbar: r,
              el: i
          } = l, a = (l.params.scrollbar = H(l, l.originalParams.scrollbar, l.params.scrollbar, {
              el: "swiper-scrollbar"
          }), l.params.scrollbar);
          if (a.el) {
              let e, t;
              if ((e = "string" == typeof a.el && l.isElement ? l.el.querySelector(a.el) : e) || "string" != typeof a.el) e = e || a.el;
              else if (!(e = n.querySelectorAll(a.el)).length) return;
              (e = 0 < (e = l.params.uniqueNavElements && "string" == typeof a.el && 1 < e.length && 1 === i.querySelectorAll(a.el).length ? i.querySelector(a.el) : e).length ? e[0] : e).classList.add(l.isHorizontal() ? a.horizontalClass : a.verticalClass), e && ((t = e.querySelector(q(l.params.scrollbar.dragClass))) || (t = O("div", l.params.scrollbar.dragClass), e.append(t))), Object.assign(r, {
                  el: e,
                  dragEl: t
              }), a.draggable && l.params.scrollbar.el && l.scrollbar.el && w("on"), e && e.classList[l.enabled ? "remove" : "add"](...S(l.params.scrollbar.lockClass))
          }
      }

      function E() {
          var e = l.params.scrollbar,
              t = l.scrollbar.el;
          t && t.classList.remove(...S(l.isHorizontal() ? e.horizontalClass : e.verticalClass)), l.params.scrollbar.el && l.scrollbar.el && w("off")
      }
      t({
          scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
              scrollbarDisabledClass: "swiper-scrollbar-disabled",
              horizontalClass: "swiper-scrollbar-horizontal",
              verticalClass: "swiper-scrollbar-vertical"
          }
      }), l.scrollbar = {
          el: null,
          dragEl: null
      }, r("init", () => {
          (!1 === l.params.scrollbar.enabled ? T : (x(), h(), a))()
      }), r("update resize observerUpdate lock unlock", () => {
          h()
      }), r("setTranslate", () => {
          a()
      }), r("setTransition", (e, t) => {
          t = t, l.params.scrollbar.el && l.scrollbar.el && (l.scrollbar.dragEl.style.transitionDuration = t + "ms")
      }), r("enable disable", () => {
          var e = l.scrollbar["el"];
          e && e.classList[l.enabled ? "remove" : "add"](...S(l.params.scrollbar.lockClass))
      }), r("destroy", () => {
          E()
      });
      const T = () => {
          l.el.classList.add(...S(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.add(...S(l.params.scrollbar.scrollbarDisabledClass)), E()
      };
      Object.assign(l.scrollbar, {
          enable: () => {
              l.el.classList.remove(...S(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.remove(...S(l.params.scrollbar.scrollbarDisabledClass)), x(), h(), a()
          },
          disable: T,
          updateSize: h,
          setTranslate: a,
          init: x,
          destroy: E
      })
  }, function(e) {
      let {
          swiper: c,
          extendParams: t,
          on: r
      } = e;
      t({
          parallax: {
              enabled: !1
          }
      });
      const s = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
          n = (e, t) => {
              var r = c["rtl"],
                  r = r ? -1 : 1,
                  i = e.getAttribute("data-swiper-parallax") || "0";
              let a = e.getAttribute("data-swiper-parallax-x"),
                  s = e.getAttribute("data-swiper-parallax-y");
              var n = e.getAttribute("data-swiper-parallax-scale"),
                  o = e.getAttribute("data-swiper-parallax-opacity"),
                  l = e.getAttribute("data-swiper-parallax-rotate");
              if (a || s ? (a = a || "0", s = s || "0") : c.isHorizontal() ? (a = i, s = "0") : (s = i, a = "0"), a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t * r + "%" : a * t * r + "px", s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t + "%" : s * t + "px", null != o) {
                  const c = o - (o - 1) * (1 - Math.abs(t));
                  e.style.opacity = c
              }
              let d = `translate3d(${a}, ${s}, 0px)`;
              null != n && (d += ` scale(${n-(n-1)*(1-Math.abs(t))})`), l && null != l && (d += ` rotate(${l*t*-1}deg)`), e.style.transform = d
          },
          i = () => {
              const {
                  el: e,
                  slides: t,
                  progress: i,
                  snapGrid: a
              } = c, r = D(e, s);
              c.isElement && r.push(...D(c.hostEl, s)), r.forEach(e => {
                  n(e, i)
              }), t.forEach((e, t) => {
                  let r = e.progress;
                  1 < c.params.slidesPerGroup && "auto" !== c.params.slidesPerView && (r += Math.ceil(t / 2) - i * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), e.querySelectorAll(s + ", [data-swiper-parallax-rotate]").forEach(e => {
                      n(e, r)
                  })
              })
          };
      r("beforeInit", () => {
          c.params.parallax.enabled && (c.params.watchSlidesProgress = !0, c.originalParams.watchSlidesProgress = !0)
      }), r("init", () => {
          c.params.parallax.enabled && i()
      }), r("setTranslate", () => {
          c.params.parallax.enabled && i()
      }), r("setTransition", (e, t) => {
          var r, i;
          c.params.parallax.enabled && ({
              el: t,
              hostEl: i
          } = (void 0 === (r = t) && (r = c.params.speed), c), t = [...t.querySelectorAll(s)], c.isElement && t.push(...i.querySelectorAll(s)), t.forEach(e => {
              let t = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || r;
              0 === r && (t = 0), e.style.transitionDuration = t + "ms"
          }))
      })
  }, function(e) {
      let {
          swiper: E,
          extendParams: t,
          on: r,
          emit: i
      } = e;
      const T = k();
      t({
          zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed"
          }
      }), E.zoom = {
          enabled: !1
      };
      let a, s, S = 1,
          n = !1;
      const o = [],
          C = {
              originX: 0,
              originY: 0,
              slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              imageEl: void 0,
              imageWrapEl: void 0,
              maxRatio: 3
          },
          M = {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
          },
          l = {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
          };
      let d = 1;

      function c() {
          var e, t, r, i;
          return o.length < 2 ? 1 : (e = o[0].pageX, t = o[0].pageY, r = o[1].pageX, i = o[1].pageY, Math.sqrt((r - e) ** 2 + (i - t) ** 2))
      }

      function p(t) {
          var e = E.isElement ? "swiper-slide" : "." + E.params.slideClass;
          return t.target.matches(e) || 0 < E.slides.filter(e => e.contains(t.target)).length
      }

      function u(t) {
          if ("mouse" === t.pointerType && o.splice(0, o.length), p(t)) {
              var r = E.params.zoom;
              if (a = !1, s = !1, o.push(t), !(o.length < 2)) {
                  if (a = !0, C.scaleStart = c(), !C.slideEl) {
                      C.slideEl = t.target.closest(`.${E.params.slideClass}, swiper-slide`), C.slideEl || (C.slideEl = E.slides[E.activeIndex]);
                      let e = C.slideEl.querySelector("." + r.containerClass);
                      if (e = e && e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0], C.imageEl = e, C.imageWrapEl = e ? N(C.imageEl, "." + r.containerClass)[0] : void 0, !C.imageWrapEl) return void(C.imageEl = void 0);
                      C.maxRatio = C.imageWrapEl.getAttribute("data-swiper-zoom") || r.maxRatio
                  }
                  if (C.imageEl) {
                      const [t, E] = o.length < 2 ? {
                          x: null,
                          y: null
                      } : (r = C.imageEl.getBoundingClientRect(), [(o[0].pageX + (o[1].pageX - o[0].pageX) / 2 - r.x - T.scrollX) / S, (o[0].pageY + (o[1].pageY - o[0].pageY) / 2 - r.y - T.scrollY) / S]);
                      C.originX = t, C.originY = E, C.imageEl.style.transitionDuration = "0ms"
                  }
                  n = !0
              }
          }
      }

      function f(t) {
          var e, r, i;
          p(t) && (e = E.params.zoom, r = E.zoom, 0 <= (i = o.findIndex(e => e.pointerId === t.pointerId)) && (o[i] = t), o.length < 2 || (s = !0, C.scaleMove = c(), C.imageEl && (r.scale = C.scaleMove / C.scaleStart * S, r.scale > C.maxRatio && (r.scale = C.maxRatio - 1 + (r.scale - C.maxRatio + 1) ** .5), r.scale < e.minRatio && (r.scale = e.minRatio + 1 - (e.minRatio - r.scale + 1) ** .5), C.imageEl.style.transform = `translate3d(0,0,0) scale(${r.scale})`)))
      }

      function h(t) {
          var e, r, i;
          !p(t) || "mouse" === t.pointerType && "pointerout" === t.type || (e = E.params.zoom, r = E.zoom, 0 <= (i = o.findIndex(e => e.pointerId === t.pointerId)) && o.splice(i, 1), a && s && (a = !1, s = !1, C.imageEl) && (r.scale = Math.max(Math.min(r.scale, C.maxRatio), e.minRatio), C.imageEl.style.transitionDuration = E.params.speed + "ms", C.imageEl.style.transform = `translate3d(0,0,0) scale(${r.scale})`, S = r.scale, n = !1, 1 < r.scale && C.slideEl ? C.slideEl.classList.add("" + e.zoomedSlideClass) : r.scale <= 1 && C.slideEl && C.slideEl.classList.remove("" + e.zoomedSlideClass), 1 === r.scale) && (C.originX = 0, C.originY = 0, C.slideEl = void 0))
      }

      function m(e) {
          if (p(e) && (t = e, r = "." + E.params.zoom.containerClass, t.target.matches(r) || 0 < [...E.hostEl.querySelectorAll(r)].filter(e => e.contains(t.target)).length)) {
              var t, r = E.zoom;
              if (C.imageEl && M.isTouched && C.slideEl) {
                  M.isMoved || (M.width = C.imageEl.offsetWidth, M.height = C.imageEl.offsetHeight, M.startX = P(C.imageWrapEl, "x") || 0, M.startY = P(C.imageWrapEl, "y") || 0, C.slideWidth = C.slideEl.offsetWidth, C.slideHeight = C.slideEl.offsetHeight, C.imageWrapEl.style.transitionDuration = "0ms");
                  var i = M.width * r.scale,
                      a = M.height * r.scale;
                  if (!(i < C.slideWidth && a < C.slideHeight)) {
                      if (M.minX = Math.min(C.slideWidth / 2 - i / 2, 0), M.maxX = -M.minX, M.minY = Math.min(C.slideHeight / 2 - a / 2, 0), M.maxY = -M.minY, M.touchesCurrent.x = (0 < o.length ? o[0] : e).pageX, M.touchesCurrent.y = (0 < o.length ? o[0] : e).pageY, 5 < Math.max(Math.abs(M.touchesCurrent.x - M.touchesStart.x), Math.abs(M.touchesCurrent.y - M.touchesStart.y)) && (E.allowClick = !1), !M.isMoved && !n) {
                          if (E.isHorizontal() && (Math.floor(M.minX) === Math.floor(M.startX) && M.touchesCurrent.x < M.touchesStart.x || Math.floor(M.maxX) === Math.floor(M.startX) && M.touchesCurrent.x > M.touchesStart.x)) return void(M.isTouched = !1);
                          if (!E.isHorizontal() && (Math.floor(M.minY) === Math.floor(M.startY) && M.touchesCurrent.y < M.touchesStart.y || Math.floor(M.maxY) === Math.floor(M.startY) && M.touchesCurrent.y > M.touchesStart.y)) return void(M.isTouched = !1)
                      }
                      e.cancelable && e.preventDefault(), e.stopPropagation(), M.isMoved = !0;
                      var i = (r.scale - S) / (C.maxRatio - E.params.zoom.minRatio),
                          {
                              originX: a,
                              originY: e
                          } = C;
                      M.currentX = M.touchesCurrent.x - M.touchesStart.x + M.startX + i * (M.width - 2 * a), M.currentY = M.touchesCurrent.y - M.touchesStart.y + M.startY + i * (M.height - 2 * e), M.currentX < M.minX && (M.currentX = M.minX + 1 - (M.minX - M.currentX + 1) ** .8), M.currentX > M.maxX && (M.currentX = M.maxX - 1 + (M.currentX - M.maxX + 1) ** .8), M.currentY < M.minY && (M.currentY = M.minY + 1 - (M.minY - M.currentY + 1) ** .8), M.currentY > M.maxY && (M.currentY = M.maxY - 1 + (M.currentY - M.maxY + 1) ** .8), l.prevPositionX || (l.prevPositionX = M.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = M.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (M.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (M.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(M.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(M.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = M.touchesCurrent.x, l.prevPositionY = M.touchesCurrent.y, l.prevTime = Date.now(), C.imageWrapEl.style.transform = `translate3d(${M.currentX}px, ${M.currentY}px,0)`
                  }
              }
          }
      }

      function v() {
          var e = E.zoom;
          C.slideEl && E.activeIndex !== E.slides.indexOf(C.slideEl) && (C.imageEl && (C.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), C.imageWrapEl && (C.imageWrapEl.style.transform = "translate3d(0,0,0)"), C.slideEl.classList.remove("" + E.params.zoom.zoomedSlideClass), e.scale = 1, S = 1, C.slideEl = void 0, C.imageEl = void 0, C.imageWrapEl = void 0, C.originX = 0, C.originY = 0)
      }

      function g(y) {
          var b = E.zoom,
              w = E.params.zoom;
          if (!C.slideEl) {
              y && y.target && (C.slideEl = y.target.closest(`.${E.params.slideClass}, swiper-slide`)), C.slideEl || (E.params.virtual && E.params.virtual.enabled && E.virtual ? C.slideEl = D(E.slidesEl, "." + E.params.slideActiveClass)[0] : C.slideEl = E.slides[E.activeIndex]);
              let e = C.slideEl.querySelector("." + w.containerClass);
              e = e && e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0], C.imageEl = e, C.imageWrapEl = e ? N(C.imageEl, "." + w.containerClass)[0] : void 0
          }
          if (C.imageEl && C.imageWrapEl) {
              let e, t, r, i, a, s, n, o, l, d, c, p, u, f, h, m, v, g;
              E.params.cssMode && (E.wrapperEl.style.overflow = "hidden", E.wrapperEl.style.touchAction = "none"), C.slideEl.classList.add("" + w.zoomedSlideClass), t = void 0 === M.touchesStart.x && y ? (e = y.pageX, y.pageY) : (e = M.touchesStart.x, M.touchesStart.y);
              var x = "number" == typeof y ? y : null;
              1 === S && x && (e = void 0, t = void 0), b.scale = x || C.imageWrapEl.getAttribute("data-swiper-zoom") || w.maxRatio, S = x || C.imageWrapEl.getAttribute("data-swiper-zoom") || w.maxRatio, !y || 1 === S && x ? (n = 0, o = 0) : (v = C.slideEl.offsetWidth, g = C.slideEl.offsetHeight, r = z(C.slideEl).left + T.scrollX, i = z(C.slideEl).top + T.scrollY, a = r + v / 2 - e, s = i + g / 2 - t, l = C.imageEl.offsetWidth, d = C.imageEl.offsetHeight, c = l * b.scale, p = d * b.scale, h = -(u = Math.min(v / 2 - c / 2, 0)), m = -(f = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = s * b.scale, (n = n < u ? u : n) > h && (n = h), (o = o < f ? f : o) > m && (o = m)), x && 1 === b.scale && (C.originX = 0, C.originY = 0), C.imageWrapEl.style.transitionDuration = "300ms", C.imageWrapEl.style.transform = `translate3d(${n}px, ${o}px,0)`, C.imageEl.style.transitionDuration = "300ms", C.imageEl.style.transform = `translate3d(0,0,0) scale(${b.scale})`
          }
      }

      function y() {
          var e = E.zoom,
              t = E.params.zoom;
          if (!C.slideEl) {
              E.params.virtual && E.params.virtual.enabled && E.virtual ? C.slideEl = D(E.slidesEl, "." + E.params.slideActiveClass)[0] : C.slideEl = E.slides[E.activeIndex];
              let e = C.slideEl.querySelector("." + t.containerClass);
              e = e && e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0], C.imageEl = e, C.imageWrapEl = e ? N(C.imageEl, "." + t.containerClass)[0] : void 0
          }
          C.imageEl && C.imageWrapEl && (E.params.cssMode && (E.wrapperEl.style.overflow = "", E.wrapperEl.style.touchAction = ""), e.scale = 1, S = 1, C.imageWrapEl.style.transitionDuration = "300ms", C.imageWrapEl.style.transform = "translate3d(0,0,0)", C.imageEl.style.transitionDuration = "300ms", C.imageEl.style.transform = "translate3d(0,0,0) scale(1)", C.slideEl.classList.remove("" + t.zoomedSlideClass), C.slideEl = void 0, C.originX = 0, C.originY = 0)
      }

      function b(e) {
          var t = E.zoom;
          t.scale && 1 !== t.scale ? y() : g(e)
      }

      function w() {
          return {
              passiveListener: !!E.params.passiveListeners && {
                  passive: !0,
                  capture: !1
              },
              activeListenerWithCapture: !E.params.passiveListeners || {
                  passive: !1,
                  capture: !0
              }
          }
      }

      function x() {
          var e = E.zoom;
          if (!e.enabled) {
              e.enabled = !0;
              const {
                  passiveListener: t,
                  activeListenerWithCapture: r
              } = w();
              E.wrapperEl.addEventListener("pointerdown", u, t), E.wrapperEl.addEventListener("pointermove", f, r), ["pointerup", "pointercancel", "pointerout"].forEach(e => {
                  E.wrapperEl.addEventListener(e, h, t)
              }), E.wrapperEl.addEventListener("pointermove", m, r)
          }
      }

      function L() {
          var e = E.zoom;
          if (e.enabled) {
              e.enabled = !1;
              const {
                  passiveListener: t,
                  activeListenerWithCapture: r
              } = w();
              E.wrapperEl.removeEventListener("pointerdown", u, t), E.wrapperEl.removeEventListener("pointermove", f, r), ["pointerup", "pointercancel", "pointerout"].forEach(e => {
                  E.wrapperEl.removeEventListener(e, h, t)
              }), E.wrapperEl.removeEventListener("pointermove", m, r)
          }
      }
      Object.defineProperty(E.zoom, "scale", {
          get: () => d,
          set(e) {
              var t, r;
              d !== e && (t = C.imageEl, r = C.slideEl, i("zoomChange", e, t, r)), d = e
          }
      }), r("init", () => {
          E.params.zoom.enabled && x()
      }), r("destroy", () => {
          L()
      }), r("touchStart", (e, t) => {
          var r;
          E.zoom.enabled && (t = t, r = E.device, C.imageEl) && !M.isTouched && (r.android && t.cancelable && t.preventDefault(), M.isTouched = !0, r = 0 < o.length ? o[0] : t, M.touchesStart.x = r.pageX, M.touchesStart.y = r.pageY)
      }), r("touchEnd", (e, t) => {
          if (E.zoom.enabled) {
              var r = E.zoom;
              if (C.imageEl) {
                  if (!M.isTouched || !M.isMoved) return void(M.isTouched = !1, M.isMoved = !1);
                  M.isTouched = !1, M.isMoved = !1;
                  let e = 300,
                      t = 300;
                  var i = l.x * e,
                      i = M.currentX + i,
                      a = l.y * t,
                      a = M.currentY + a,
                      s = (0 !== l.x && (e = Math.abs((i - M.currentX) / l.x)), 0 !== l.y && (t = Math.abs((a - M.currentY) / l.y)), Math.max(e, t)),
                      i = (M.currentX = i, M.currentY = a, M.width * r.scale),
                      a = M.height * r.scale;
                  M.minX = Math.min(C.slideWidth / 2 - i / 2, 0), M.maxX = -M.minX, M.minY = Math.min(C.slideHeight / 2 - a / 2, 0), M.maxY = -M.minY, M.currentX = Math.max(Math.min(M.currentX, M.maxX), M.minX), M.currentY = Math.max(Math.min(M.currentY, M.maxY), M.minY), C.imageWrapEl.style.transitionDuration = s + "ms", C.imageWrapEl.style.transform = `translate3d(${M.currentX}px, ${M.currentY}px,0)`
              }
          }
      }), r("doubleTap", (e, t) => {
          !E.animating && E.params.zoom.enabled && E.zoom.enabled && E.params.zoom.toggle && b(t)
      }), r("transitionEnd", () => {
          E.zoom.enabled && E.params.zoom.enabled && v()
      }), r("slideChange", () => {
          E.zoom.enabled && E.params.zoom.enabled && E.params.cssMode && v()
      }), Object.assign(E.zoom, {
          enable: x,
          disable: L,
          in: g,
          out: y,
          toggle: b
      })
  }, function(e) {
      let {
          swiper: o,
          extendParams: t,
          on: r
      } = e;

      function l(e, t) {
          const r = function() {
              let r, i, a;
              return (e, t) => {
                  for (i = -1, r = e.length; 1 < r - i;) e[a = r + i >> 1] <= t ? i = a : r = a;
                  return r
              }
          }();
          let i, a;
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
              return e ? (a = r(this.x, e), i = a - 1, (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
          }, this
      }

      function i() {
          o.controller.control && o.controller.spline && (o.controller.spline = void 0, delete o.controller.spline)
      }
      t({
          controller: {
              control: void 0,
              inverse: !1,
              by: "slide"
          }
      }), o.controller = {
          control: void 0
      }, r("beforeInit", () => {
          if ("undefined" != typeof window && ("string" == typeof o.params.controller.control || o.params.controller.control instanceof HTMLElement)) {
              const t = document.querySelector(o.params.controller.control);
              if (t && t.swiper) o.controller.control = t.swiper;
              else if (t) {
                  const r = e => {
                      o.controller.control = e.detail[0], o.update(), t.removeEventListener("init", r)
                  };
                  t.addEventListener("init", r)
              }
          } else o.controller.control = o.params.controller.control
      }), r("update", () => {
          i()
      }), r("resize", () => {
          i()
      }), r("observerUpdate", () => {
          i()
      }), r("setTranslate", (e, t, r) => {
          o.controller.control && !o.controller.control.destroyed && o.controller.setTranslate(t, r)
      }), r("setTransition", (e, t, r) => {
          o.controller.control && !o.controller.control.destroyed && o.controller.setTransition(t, r)
      }), Object.assign(o.controller, {
          setTranslate: function(e, t) {
              var r = o.controller.control;
              let i, a;
              var s = o.constructor;

              function n(e) {
                  var t, r;
                  e.destroyed || (t = o.rtlTranslate ? -o.translate : o.translate, "slide" === o.params.controller.by && (r = e, o.controller.spline = o.params.loop ? new l(o.slidesGrid, r.slidesGrid) : new l(o.snapGrid, r.snapGrid), a = -o.controller.spline.interpolate(-t)), a && "container" !== o.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), !Number.isNaN(i) && Number.isFinite(i) || (i = 1), a = (t - o.minTranslate()) * i + e.minTranslate()), o.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, o), e.updateActiveIndex(), e.updateSlidesClasses())
              }
              if (Array.isArray(r))
                  for (let e = 0; e < r.length; e += 1) r[e] !== t && r[e] instanceof s && n(r[e]);
              else r instanceof s && t !== r && n(r)
          },
          setTransition: function(t, e) {
              const r = o.constructor,
                  i = o.controller.control;
              let a;

              function s(e) {
                  e.destroyed || (e.setTransition(t, o), 0 !== t && (e.transitionStart(), e.params.autoHeight && C(() => {
                      e.updateAutoHeight()
                  }), v(e.wrapperEl, () => {
                      i && e.transitionEnd()
                  })))
              }
              if (Array.isArray(i))
                  for (a = 0; a < i.length; a += 1) i[a] !== e && i[a] instanceof r && s(i[a]);
              else i instanceof r && e !== i && s(i)
          }
      })
  }, function(e) {
      let {
          swiper: o,
          extendParams: t,
          on: r
      } = e, l = (t({
          a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              slideLabelMessage: "{{index}} / {{slidesLength}}",
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: "group",
              id: null
          }
      }), o.a11y = {
          clicked: !1
      }, null);

      function i(e) {
          var t = l;
          0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
      }
      const d = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

      function a(e) {
          (e = d(e)).forEach(e => {
              e.setAttribute("tabIndex", "0")
          })
      }

      function s(e) {
          (e = d(e)).forEach(e => {
              e.setAttribute("tabIndex", "-1")
          })
      }

      function n(e, t) {
          (e = d(e)).forEach(e => {
              e.setAttribute("role", t)
          })
      }

      function c(e, t) {
          (e = d(e)).forEach(e => {
              e.setAttribute("aria-roledescription", t)
          })
      }

      function p(e, t) {
          (e = d(e)).forEach(e => {
              e.setAttribute("aria-label", t)
          })
      }

      function u(e) {
          (e = d(e)).forEach(e => {
              e.setAttribute("aria-disabled", !0)
          })
      }

      function f(e) {
          (e = d(e)).forEach(e => {
              e.setAttribute("aria-disabled", !1)
          })
      }

      function h(e) {
          var t, r;
          13 !== e.keyCode && 32 !== e.keyCode || (t = o.params.a11y, r = e.target, o.pagination && o.pagination.el && (r === o.pagination.el || o.pagination.el.contains(e.target)) && !e.target.matches(q(o.params.pagination.bulletClass))) || (o.navigation && o.navigation.nextEl && r === o.navigation.nextEl && (o.isEnd && !o.params.loop || o.slideNext(), o.isEnd ? i(t.lastSlideMessage) : i(t.nextSlideMessage)), o.navigation && o.navigation.prevEl && r === o.navigation.prevEl && (o.isBeginning && !o.params.loop || o.slidePrev(), o.isBeginning ? i(t.firstSlideMessage) : i(t.prevSlideMessage)), o.pagination && r.matches(q(o.params.pagination.bulletClass)) && r.click())
      }

      function m() {
          return o.pagination && o.pagination.bullets && o.pagination.bullets.length
      }

      function v() {
          return m() && o.params.pagination.clickable
      }
      const g = (e, t, r) => {
              var i;
              a(e), "BUTTON" !== e.tagName && (n(e, "button"), e.addEventListener("keydown", h)), p(e, r), r = e, i = t, (r = d(r)).forEach(e => {
                  e.setAttribute("aria-controls", i)
              })
          },
          y = () => {
              o.a11y.clicked = !0
          },
          b = () => {
              requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                      o.destroyed || (o.a11y.clicked = !1)
                  })
              })
          },
          w = e => {
              var t, r, i;
              o.a11y.clicked || (t = e.target.closest(`.${o.params.slideClass}, swiper-slide`)) && o.slides.includes(t) && (r = o.slides.indexOf(t) === o.activeIndex, i = o.params.watchSlidesProgress && o.visibleSlides && o.visibleSlides.includes(t), r || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (o.isHorizontal() ? o.el.scrollLeft = 0 : o.el.scrollTop = 0, o.slideTo(o.slides.indexOf(t), 0)))
          },
          x = () => {
              const r = o.params.a11y,
                  i = (r.itemRoleDescriptionMessage && c(o.slides, r.itemRoleDescriptionMessage), r.slideRole && n(o.slides, r.slideRole), o.slides.length);
              r.slideLabelMessage && o.slides.forEach((e, t) => {
                  t = o.params.loop ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : t;
                  p(e, r.slideLabelMessage.replace(/\{\{index\}\}/, t + 1).replace(/\{\{slidesLength\}\}/, i))
              })
          };
      r("beforeInit", () => {
          (l = O("span", o.params.a11y.notificationClass)).setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true")
      }), r("afterInit", () => {
          if (o.params.a11y.enabled) {
              const a = o.params.a11y;
              o.el.append(l);
              var e = o.el;
              a.containerRoleDescriptionMessage && c(e, a.containerRoleDescriptionMessage), a.containerMessage && p(e, a.containerMessage);
              const s = o.wrapperEl,
                  n = a.id || s.getAttribute("id") || "swiper-wrapper-" + "x".repeat(e = void 0 === (e = 16) ? 16 : e).replace(/x/g, () => Math.round(16 * Math.random()).toString(16));
              var t, e = o.params.autoplay && o.params.autoplay.enabled ? "off" : "polite",
                  r = n,
                  {
                      nextEl: e,
                      prevEl: i
                  } = (d(s).forEach(e => {
                      e.setAttribute("id", r)
                  }), i = s, t = e, (i = d(i)).forEach(e => {
                      e.setAttribute("aria-live", t)
                  }), x(), o.navigation || {}),
                  e = d(e),
                  i = d(i);
              e && e.forEach(e => g(e, n, a.nextSlideMessage)), i && i.forEach(e => g(e, n, a.prevSlideMessage)), v() && d(o.pagination.el).forEach(e => {
                  e.addEventListener("keydown", h)
              }), o.el.addEventListener("focus", w, !0), o.el.addEventListener("pointerdown", y, !0), o.el.addEventListener("pointerup", b, !0)
          }
      }), r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          o.params.a11y.enabled && x()
      }), r("fromEdge toEdge afterInit lock unlock", () => {
          var e, t;
          o.params.a11y.enabled && !o.params.loop && !o.params.rewind && o.navigation && ({
              nextEl: e,
              prevEl: t
          } = o.navigation, t && (o.isBeginning ? (u(t), s) : (f(t), a))(t), e) && (o.isEnd ? (u(e), s) : (f(e), a))(e)
      }), r("paginationUpdate", () => {
          if (o.params.a11y.enabled) {
              const t = o.params.a11y;
              m() && o.pagination.bullets.forEach(e => {
                  o.params.pagination.clickable && (a(e), o.params.pagination.renderBullet || (n(e, "button"), p(e, t.paginationBulletMessage.replace(/\{\{index\}\}/, E(e) + 1)))), e.matches(q(o.params.pagination.bulletActiveClass)) ? e.setAttribute("aria-current", "true") : e.removeAttribute("aria-current")
              })
          }
      }), r("destroy", () => {
          var e, t;
          o.params.a11y.enabled && (l && l.remove(), {
              nextEl: e,
              prevEl: t
          } = o.navigation || {}, e = d(e), t = d(t), e && e.forEach(e => e.removeEventListener("keydown", h)), t && t.forEach(e => e.removeEventListener("keydown", h)), v() && d(o.pagination.el).forEach(e => {
              e.removeEventListener("keydown", h)
          }), o.el.removeEventListener("focus", w, !0), o.el.removeEventListener("pointerdown", y, !0), o.el.removeEventListener("pointerup", b, !0))
      })
  }, function(e) {
      let {
          swiper: n,
          extendParams: t,
          on: r
      } = e, s = (t({
          history: {
              enabled: !1,
              root: "",
              replaceState: !1,
              key: "slides",
              keepQuery: !1
          }
      }), !1), i = {};
      const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
          a = e => {
              var t = k(),
                  e = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(e => "" !== e),
                  t = e.length;
              return {
                  key: e[t - 2],
                  value: e[t - 1]
              }
          },
          l = (r, e) => {
              var i = k();
              if (s && n.params.history.enabled) {
                  var a = n.params.url ? new URL(n.params.url) : i.location,
                      e = n.slides[e];
                  let t = o(e.getAttribute("data-history"));
                  if (0 < n.params.history.root.length) {
                      let e = n.params.history.root;
                      "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), t = e + "/" + (r ? r + "/" : "") + t
                  } else a.pathname.includes(r) || (t = (r ? r + "/" : "") + t);
                  n.params.history.keepQuery && (t += a.search);
                  e = i.history.state;
                  e && e.value === t || (n.params.history.replaceState ? i.history.replaceState({
                      value: t
                  }, null, t) : i.history.pushState({
                      value: t
                  }, null, t))
              }
          },
          d = (r, i, a) => {
              if (i)
                  for (let e = 0, t = n.slides.length; e < t; e += 1) {
                      var s = n.slides[e];
                      if (o(s.getAttribute("data-history")) === i) {
                          const i = n.getSlideIndex(s);
                          n.slideTo(i, r, a)
                      }
                  } else n.slideTo(0, r, a)
          },
          c = () => {
              i = a(n.params.url), d(n.params.speed, i.value, !1)
          };
      r("init", () => {
          var e;
          n.params.history.enabled && (e = k(), n.params.history) && (e.history && e.history.pushState ? (s = !0, ((i = a(n.params.url)).key || i.value) && d(0, i.value, n.params.runCallbacksOnInit), n.params.history.replaceState || e.addEventListener("popstate", c)) : (n.params.history.enabled = !1, n.params.hashNavigation.enabled = !0))
      }), r("destroy", () => {
          var e;
          n.params.history.enabled && (e = k(), n.params.history.replaceState || e.removeEventListener("popstate", c))
      }), r("transitionEnd _freeModeNoMomentumRelease", () => {
          s && l(n.params.history.key, n.activeIndex)
      }), r("slideChange", () => {
          s && n.params.cssMode && l(n.params.history.key, n.activeIndex)
      })
  }, function(e) {
      let {
          swiper: r,
          extendParams: t,
          emit: i,
          on: a
      } = e, s = !1;
      const n = A(),
          o = k(),
          l = (t({
              hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1,
                  getSlideIndex(e, t) {
                      if (r.virtual && r.params.virtual.enabled) {
                          const e = r.slides.filter(e => e.getAttribute("data-hash") === t)[0];
                          return e ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : 0
                      }
                      return r.getSlideIndex(D(r.slidesEl, `.${r.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`)[0])
                  }
              }
          }), () => {
              i("hashChange");
              const e = n.location.hash.replace("#", ""),
                  t = r.virtual && r.params.virtual.enabled ? r.slidesEl.querySelector(`[data-swiper-slide-index="${r.activeIndex}"]`) : r.slides[r.activeIndex];
              if (e !== (t ? t.getAttribute("data-hash") : "")) {
                  const t = r.params.hashNavigation.getSlideIndex(r, e);
                  void 0 === t || Number.isNaN(t) || r.slideTo(t)
              }
          }),
          d = () => {
              var e;
              s && r.params.hashNavigation.enabled && (e = (e = r.virtual && r.params.virtual.enabled ? r.slidesEl.querySelector(`[data-swiper-slide-index="${r.activeIndex}"]`) : r.slides[r.activeIndex]) ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "", r.params.hashNavigation.replaceState && o.history && o.history.replaceState ? o.history.replaceState(null, null, "#" + e || "") : n.location.hash = e || "", i("hashSet"))
          };
      a("init", () => {
          var e;
          !r.params.hashNavigation.enabled || !r.params.hashNavigation.enabled || r.params.history && r.params.history.enabled || (s = !0, (e = n.location.hash.replace("#", "")) && (e = r.params.hashNavigation.getSlideIndex(r, e), r.slideTo(e || 0, 0, r.params.runCallbacksOnInit, !0)), r.params.hashNavigation.watchState && o.addEventListener("hashchange", l))
      }), a("destroy", () => {
          r.params.hashNavigation.enabled && r.params.hashNavigation.watchState && o.removeEventListener("hashchange", l)
      }), a("transitionEnd _freeModeNoMomentumRelease", () => {
          s && d()
      }), a("slideChange", () => {
          s && r.params.cssMode && d()
      })
  }, function(e) {
      let s, n, {
          swiper: o,
          extendParams: t,
          on: r,
          emit: l,
          params: i
      } = e;
      o.autoplay = {
          running: !1,
          paused: !1,
          timeLeft: 0
      }, t({
          autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1
          }
      });
      let d, a, c, p, u, f, h, m, v = i && i.autoplay ? i.autoplay.delay : 3e3,
          g = i && i.autoplay ? i.autoplay.delay : 3e3,
          y = (new Date).getTime();

      function b(e) {
          o && !o.destroyed && o.wrapperEl && e.target === o.wrapperEl && (o.wrapperEl.removeEventListener("transitionend", b), m || C())
      }
      const w = () => {
              var e;
              !o.destroyed && o.autoplay.running && (o.autoplay.paused ? a = !0 : a && (g = d, a = !1), e = o.autoplay.paused ? d : y + g - (new Date).getTime(), o.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), n = requestAnimationFrame(() => {
                  w()
              }))
          },
          x = t => {
              if (!o.destroyed && o.autoplay.running) {
                  cancelAnimationFrame(n), w();
                  let e = void 0 === t ? o.params.autoplay.delay : t;
                  v = o.params.autoplay.delay, g = o.params.autoplay.delay;
                  var r = (() => {
                      var e = o.virtual && o.params.virtual.enabled ? o.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : o.slides[o.activeIndex];
                      if (e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                  })();
                  !Number.isNaN(r) && 0 < r && void 0 === t && (e = r, v = r, g = r), d = e;
                  const i = o.params.speed,
                      a = () => {
                          o && !o.destroyed && (o.params.autoplay.reverseDirection ? !o.isBeginning || o.params.loop || o.params.rewind ? (o.slidePrev(i, !0, !0), l("autoplay")) : o.params.autoplay.stopOnLastSlide || (o.slideTo(o.slides.length - 1, i, !0, !0), l("autoplay")) : !o.isEnd || o.params.loop || o.params.rewind ? (o.slideNext(i, !0, !0), l("autoplay")) : o.params.autoplay.stopOnLastSlide || (o.slideTo(0, i, !0, !0), l("autoplay")), o.params.cssMode) && (y = (new Date).getTime(), requestAnimationFrame(() => {
                              x()
                          }))
                      };
                  return 0 < e ? (clearTimeout(s), s = setTimeout(() => {
                      a()
                  }, e)) : requestAnimationFrame(() => {
                      a()
                  }), e
              }
          },
          E = () => {
              y = (new Date).getTime(), o.autoplay.running = !0, x(), l("autoplayStart")
          },
          T = () => {
              o.autoplay.running = !1, clearTimeout(s), cancelAnimationFrame(n), l("autoplayStop")
          },
          S = (e, t) => {
              !o.destroyed && o.autoplay.running && (clearTimeout(s), e || (h = !0), e = () => {
                  l("autoplayPause"), o.params.autoplay.waitForTransition ? o.wrapperEl.addEventListener("transitionend", b) : C()
              }, o.autoplay.paused = !0, t ? (f && (d = o.params.autoplay.delay), f = !1, e()) : (t = d || o.params.autoplay.delay, d = t - ((new Date).getTime() - y), o.isEnd && d < 0 && !o.params.loop || (d < 0 && (d = 0), e())))
          },
          C = () => {
              o.isEnd && d < 0 && !o.params.loop || o.destroyed || !o.autoplay.running || (y = (new Date).getTime(), h ? (h = !1, x(d)) : x(), o.autoplay.paused = !1, l("autoplayResume"))
          },
          M = () => {
              var e;
              !o.destroyed && o.autoplay.running && ("hidden" === (e = A()).visibilityState && (h = !0, S(!0)), "visible" === e.visibilityState) && C()
          },
          L = e => {
              "mouse" === e.pointerType && (h = !0, m = !0, o.animating || o.autoplay.paused || S(!0))
          },
          k = e => {
              "mouse" === e.pointerType && (m = !1, o.autoplay.paused) && C()
          };
      r("init", () => {
          o.params.autoplay.enabled && (o.params.autoplay.pauseOnMouseEnter && (o.el.addEventListener("pointerenter", L), o.el.addEventListener("pointerleave", k)), A().addEventListener("visibilitychange", M), E())
      }), r("destroy", () => {
          o.el.removeEventListener("pointerenter", L), o.el.removeEventListener("pointerleave", k), A().removeEventListener("visibilitychange", M), o.autoplay.running && T()
      }), r("_freeModeStaticRelease", () => {
          (p || h) && C()
      }), r("_freeModeNoMomentumRelease", () => {
          o.params.autoplay.disableOnInteraction ? T() : S(!0, !0)
      }), r("beforeTransitionStart", (e, t, r) => {
          !o.destroyed && o.autoplay.running && (r || !o.params.autoplay.disableOnInteraction ? S(!0, !0) : T())
      }), r("sliderFirstMove", () => {
          !o.destroyed && o.autoplay.running && (o.params.autoplay.disableOnInteraction ? T() : (c = !0, p = !1, h = !1, u = setTimeout(() => {
              h = !0, p = !0, S(!0)
          }, 200)))
      }), r("touchEnd", () => {
          !o.destroyed && o.autoplay.running && c && (clearTimeout(u), clearTimeout(s), c = (p = (o.params.autoplay.disableOnInteraction || p && o.params.cssMode && C(), !1), !1))
      }), r("slideChange", () => {
          !o.destroyed && o.autoplay.running && (f = !0)
      }), Object.assign(o.autoplay, {
          start: E,
          stop: T,
          pause: S,
          resume: C
      })
  }, function(e) {
      let {
          swiper: l,
          extendParams: t,
          on: r
      } = e, i = (t({
          thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-thumbs"
          }
      }), !1), a = !1;

      function s() {
          var e, t, r = l.thumbs.swiper;
          !r || r.destroyed || (e = r.clickedIndex, (t = r.clickedSlide) && t.classList.contains(l.params.thumbs.slideThumbActiveClass)) || null != e && (t = r.params.loop ? parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : e, l.params.loop ? l.slideToLoop(t) : l.slideTo(t))
      }

      function n() {
          var e = l.params["thumbs"];
          if (i) return !1;
          i = !0;
          var t = l.constructor;
          return e.swiper instanceof t ? (l.thumbs.swiper = e.swiper, Object.assign(l.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
          }), Object.assign(l.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
          }), l.thumbs.swiper.update()) : d(e.swiper) && (e = Object.assign({}, e.swiper), Object.assign(e, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
          }), l.thumbs.swiper = new t(e), a = !0), l.thumbs.swiper.el.classList.add(l.params.thumbs.thumbsContainerClass), l.thumbs.swiper.on("tap", s), !0
      }

      function o(i) {
          var a = l.thumbs.swiper;
          if (a && !a.destroyed) {
              var s = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
              let t = 1;
              const r = l.params.thumbs.slideThumbActiveClass;
              if (1 < l.params.slidesPerView && !l.params.centeredSlides && (t = l.params.slidesPerView), l.params.thumbs.multipleActiveThumbs || (t = 1), t = Math.floor(t), a.slides.forEach(e => e.classList.remove(r)), a.params.loop || a.params.virtual && a.params.virtual.enabled)
                  for (let e = 0; e < t; e += 1) D(a.slidesEl, `[data-swiper-slide-index="${l.realIndex+e}"]`).forEach(e => {
                      e.classList.add(r)
                  });
              else
                  for (let e = 0; e < t; e += 1) a.slides[l.realIndex + e] && a.slides[l.realIndex + e].classList.add(r);
              var n = l.params.thumbs.autoScrollOffset,
                  o = n && !a.params.loop;
              if (l.realIndex !== a.realIndex || o) {
                  const e = a.activeIndex;
                  let t, r;
                  if (a.params.loop) {
                      const i = a.slides.filter(e => e.getAttribute("data-swiper-slide-index") === "" + l.realIndex)[0];
                      t = a.slides.indexOf(i), r = l.activeIndex > l.previousIndex ? "next" : "prev"
                  } else t = l.realIndex, r = t > l.previousIndex ? "next" : "prev";
                  o && (t += "next" === r ? n : -1 * n), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(t) < 0 && (a.params.centeredSlides ? t = t > e ? t - Math.floor(s / 2) + 1 : t + Math.floor(s / 2) - 1 : t > e && a.params.slidesPerGroup, a.slideTo(t, i ? 0 : void 0))
              }
          }
      }
      l.thumbs = {
          swiper: null
      }, r("beforeInit", () => {
          const r = l.params["thumbs"];
          if (r && r.swiper)
              if ("string" == typeof r.swiper || r.swiper instanceof HTMLElement) {
                  const i = A(),
                      e = () => {
                          l.destroyed || (() => {
                              const t = "string" == typeof r.swiper ? i.querySelector(r.swiper) : r.swiper;
                              if (t && t.swiper) r.swiper = t.swiper, n(), o(!0);
                              else if (t) {
                                  const i = e => {
                                      r.swiper = e.detail[0], t.removeEventListener("init", i), n(), o(!0), r.swiper.update(), l.update()
                                  };
                                  t.addEventListener("init", i)
                              }
                              return t
                          })() || requestAnimationFrame(e)
                      };
                  requestAnimationFrame(e)
              } else n(), o(!0)
      }), r("slideChange update resize observerUpdate", () => {
          o()
      }), r("setTransition", (e, t) => {
          var r = l.thumbs.swiper;
          r && !r.destroyed && r.setTransition(t)
      }), r("beforeDestroy", () => {
          var e = l.thumbs.swiper;
          e && !e.destroyed && a && e.destroy()
      }), Object.assign(l.thumbs, {
          init: n,
          update: o
      })
  }, function(e) {
      let {
          swiper: u,
          extendParams: t,
          emit: f,
          once: h
      } = e;
      t({
          freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: .02
          }
      }), Object.assign(u, {
          freeMode: {
              onTouchStart: function() {
                  var e;
                  u.params.cssMode || (e = u.getTranslate(), u.setTranslate(e), u.setTransition(0), u.touchEventsData.velocities.length = 0, u.freeMode.onTouchEnd({
                      currentPos: u.rtl ? u.translate : -u.translate
                  }))
              },
              onTouchMove: function() {
                  var e, t;
                  u.params.cssMode || ({
                      touchEventsData: e,
                      touches: t
                  } = u, 0 === e.velocities.length && e.velocities.push({
                      position: t[u.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime
                  }), e.velocities.push({
                      position: t[u.isHorizontal() ? "currentX" : "currentY"],
                      time: g()
                  }))
              },
              onTouchEnd: function(s) {
                  let n = s["currentPos"];
                  if (!u.params.cssMode) {
                      const {
                          params: o,
                          wrapperEl: l,
                          rtlTranslate: d,
                          snapGrid: c,
                          touchEventsData: p
                      } = u, e = g() - p.touchStartTime;
                      if (n < -u.minTranslate()) u.slideTo(u.activeIndex);
                      else if (n > -u.maxTranslate()) u.slides.length < c.length ? u.slideTo(c.length - 1) : u.slideTo(u.slides.length - 1);
                      else {
                          if (o.freeMode.momentum) {
                              if (1 < p.velocities.length) {
                                  const s = p.velocities.pop(),
                                      n = p.velocities.pop(),
                                      f = s.position - n.position,
                                      h = s.time - n.time;
                                  u.velocity = f / h, u.velocity /= 2, Math.abs(u.velocity) < o.freeMode.minimumVelocity && (u.velocity = 0), (150 < h || 300 < g() - s.time) && (u.velocity = 0)
                              } else u.velocity = 0;
                              u.velocity *= o.freeMode.momentumVelocityRatio, p.velocities.length = 0;
                              let e = 1e3 * o.freeMode.momentumRatio;
                              const n = u.velocity * e;
                              let r = u.translate + n;
                              d && (r = -r);
                              let t, i = !1;
                              s = 20 * Math.abs(u.velocity) * o.freeMode.momentumBounceRatio;
                              let a;
                              if (r < u.maxTranslate()) o.freeMode.momentumBounce ? (r + u.maxTranslate() < -s && (r = u.maxTranslate() - s), t = u.maxTranslate(), i = !0, p.allowMomentumBounce = !0) : r = u.maxTranslate(), o.loop && o.centeredSlides && (a = !0);
                              else if (r > u.minTranslate()) o.freeMode.momentumBounce ? (r - u.minTranslate() > s && (r = u.minTranslate() + s), t = u.minTranslate(), i = !0, p.allowMomentumBounce = !0) : r = u.minTranslate(), o.loop && o.centeredSlides && (a = !0);
                              else if (o.freeMode.sticky) {
                                  let t;
                                  for (let e = 0; e < c.length; e += 1)
                                      if (c[e] > -r) {
                                          t = e;
                                          break
                                      } r = -(r = Math.abs(c[t] - r) < Math.abs(c[t - 1] - r) || "next" === u.swipeDirection ? c[t] : c[t - 1])
                              }
                              if (a && h("transitionEnd", () => {
                                      u.loopFix()
                                  }), 0 !== u.velocity) {
                                  if (e = d ? Math.abs((-r - u.translate) / u.velocity) : Math.abs((r - u.translate) / u.velocity), o.freeMode.sticky) {
                                      const n = Math.abs((d ? -r : r) - u.translate),
                                          f = u.slidesSizesGrid[u.activeIndex];
                                      e = n < f ? o.speed : n < 2 * f ? 1.5 * o.speed : 2.5 * o.speed
                                  }
                              } else if (o.freeMode.sticky) return void u.slideToClosest();
                              o.freeMode.momentumBounce && i ? (u.updateProgress(t), u.setTransition(e), u.setTranslate(r), u.transitionStart(!0, u.swipeDirection), u.animating = !0, v(l, () => {
                                  u && !u.destroyed && p.allowMomentumBounce && (f("momentumBounce"), u.setTransition(o.speed), setTimeout(() => {
                                      u.setTranslate(t), v(l, () => {
                                          u && !u.destroyed && u.transitionEnd()
                                      })
                                  }, 0))
                              })) : u.velocity ? (f("_freeModeNoMomentumRelease"), u.updateProgress(r), u.setTransition(e), u.setTranslate(r), u.transitionStart(!0, u.swipeDirection), u.animating || (u.animating = !0, v(l, () => {
                                  u && !u.destroyed && u.transitionEnd()
                              }))) : u.updateProgress(r), u.updateActiveIndex(), u.updateSlidesClasses()
                          } else {
                              if (o.freeMode.sticky) return void u.slideToClosest();
                              o.freeMode && f("_freeModeNoMomentumRelease")
                          }(!o.freeMode.momentum || e >= o.longSwipesMs) && (f("_freeModeStaticRelease"), u.updateProgress(), u.updateActiveIndex(), u.updateSlidesClasses())
                      }
                  }
              }
          }
      })
  }, function(e) {
      let c, p, u, i, {
          swiper: f,
          extendParams: t,
          on: r
      } = e;
      t({
          grid: {
              rows: 1,
              fill: "column"
          }
      });
      const h = () => {
          let e = f.params.spaceBetween;
          return "string" == typeof e && 0 <= e.indexOf("%") ? e = parseFloat(e.replace("%", "")) / 100 * f.size : "string" == typeof e && (e = parseFloat(e)), e
      };
      r("init", () => {
          i = f.params.grid && 1 < f.params.grid.rows
      }), r("update", () => {
          var {
              params: e,
              el: t
          } = f, r = e.grid && 1 < e.grid.rows;
          i && !r ? (t.classList.remove(e.containerModifierClass + "grid", e.containerModifierClass + "grid-column"), u = 1, f.emitContainerClasses()) : !i && r && (t.classList.add(e.containerModifierClass + "grid"), "column" === e.grid.fill && t.classList.add(e.containerModifierClass + "grid-column"), f.emitContainerClasses()), i = r
      }), f.grid = {
          initSlides: e => {
              var t = f.params["slidesPerView"],
                  {
                      rows: r,
                      fill: i
                  } = f.params.grid,
                  e = (f.virtual && f.params.virtual.enabled ? f.virtual.slides : e).length;
              u = Math.floor(e / r), c = Math.floor(e / r) === e / r ? e : Math.ceil(e / r) * r, "auto" !== t && "row" === i && (c = Math.max(c, t * r)), p = c / r
          },
          unsetSlides: () => {
              f.slides && f.slides.forEach(e => {
                  e.swiperSlideGridSet && (e.style.height = "", e.style[f.getDirectionLabel("margin-top")] = "")
              })
          },
          updateSlide: (e, t, r) => {
              var i = f.params["slidesPerGroup"],
                  a = h(),
                  {
                      rows: s,
                      fill: n
                  } = f.params.grid,
                  r = (f.virtual && f.params.virtual.enabled ? f.virtual.slides : r).length;
              let o, l, d;
              if ("row" === n && 1 < i) {
                  const p = Math.floor(e / (i * s)),
                      u = e - s * i * p,
                      f = 0 === p ? i : Math.min(Math.ceil((r - p * s * i) / s), i);
                  d = Math.floor(u / f), o = (l = u - d * f + p * i) + d * c / s, t.style.order = o
              } else "column" === n ? (l = Math.floor(e / s), d = e - l * s, (l > u || l === u && d === s - 1) && (d += 1) >= s && (d = 0, l += 1)) : (d = Math.floor(e / p), l = e - d * p);
              t.row = d, t.column = l, t.style.height = `calc((100% - ${(s-1)*a}px) / ${s})`, t.style[f.getDirectionLabel("margin-top")] = 0 !== d ? a && a + "px" : "", t.swiperSlideGridSet = !0
          },
          updateWrapperSize: (r, i) => {
              var {
                  centeredSlides: e,
                  roundLengths: a
              } = f.params, t = h(), s = f.params.grid["rows"];
              if (f.virtualSize = (r + t) * c, f.virtualSize = Math.ceil(f.virtualSize / s) - t, f.params.cssMode || (f.wrapperEl.style[f.getDirectionLabel("width")] = f.virtualSize + t + "px"), e) {
                  const r = [];
                  for (let t = 0; t < i.length; t += 1) {
                      let e = i[t];
                      a && (e = Math.floor(e)), i[t] < f.virtualSize + i[0] && r.push(e)
                  }
                  i.splice(0, i.length), i.push(...r)
              }
          }
      }
  }, function(e) {
      e = e.swiper;
      Object.assign(e, {
          appendSlide: function(t) {
              const e = this,
                  {
                      params: r,
                      slidesEl: i
                  } = e;
              r.loop && e.loopDestroy();
              var a = e => {
                  var t;
                  "string" == typeof e ? ((t = document.createElement("div")).innerHTML = e, i.append(t.children[0]), t.innerHTML = "") : i.append(e)
              };
              if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1) t[e] && a(t[e]);
              else a(t);
              e.recalcSlides(), r.loop && e.loopCreate(), r.observer && !e.isElement || e.update()
          }.bind(e),
          prependSlide: function(t) {
              const e = this,
                  {
                      params: r,
                      activeIndex: i,
                      slidesEl: a
                  } = e;
              r.loop && e.loopDestroy();
              let s = i + 1;
              var n = e => {
                  var t;
                  "string" == typeof e ? ((t = document.createElement("div")).innerHTML = e, a.prepend(t.children[0]), t.innerHTML = "") : a.prepend(e)
              };
              if ("object" == typeof t && "length" in t) {
                  for (let e = 0; e < t.length; e += 1) t[e] && n(t[e]);
                  s = i + t.length
              } else n(t);
              e.recalcSlides(), r.loop && e.loopCreate(), r.observer && !e.isElement || e.update(), e.slideTo(s, 0, !1)
          }.bind(e),
          addSlide: function(t, r) {
              var i = this,
                  {
                      params: a,
                      activeIndex: s,
                      slidesEl: n
                  } = i;
              let o = s;
              if (a.loop && (o -= i.loopedSlides, i.loopDestroy(), i.recalcSlides()), s = i.slides.length, t <= 0) i.prependSlide(r);
              else if (s <= t) i.appendSlide(r);
              else {
                  let e = o > t ? o + 1 : o;
                  var l = [];
                  for (let e = s - 1; e >= t; --e) {
                      const t = i.slides[e];
                      t.remove(), l.unshift(t)
                  }
                  if ("object" == typeof r && "length" in r) {
                      for (let e = 0; e < r.length; e += 1) r[e] && n.append(r[e]);
                      e = o > t ? o + r.length : o
                  } else n.append(r);
                  for (let e = 0; e < l.length; e += 1) n.append(l[e]);
                  i.recalcSlides(), a.loop && i.loopCreate(), a.observer && !i.isElement || i.update(), a.loop ? i.slideTo(e + i.loopedSlides, 0, !1) : i.slideTo(e, 0, !1)
              }
          }.bind(e),
          removeSlide: function(t) {
              var r = this,
                  {
                      params: e,
                      activeIndex: i
                  } = r;
              let a = i;
              e.loop && (a -= r.loopedSlides, r.loopDestroy());
              let s, n = a;
              if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1) s = t[e], r.slides[s] && r.slides[s].remove(), s < n && --n;
              else s = t, r.slides[s] && r.slides[s].remove(), s < n && --n;
              n = Math.max(n, 0), r.recalcSlides(), e.loop && r.loopCreate(), e.observer && !r.isElement || r.update(), e.loop ? r.slideTo(n + r.loopedSlides, 0, !1) : r.slideTo(n, 0, !1)
          }.bind(e),
          removeAllSlides: function() {
              var t = [];
              for (let e = 0; e < this.slides.length; e += 1) t.push(e);
              this.removeSlide(t)
          }.bind(e)
      })
  }, function(e) {
      let {
          swiper: n,
          extendParams: t,
          on: r
      } = e;
      t({
          fadeEffect: {
              crossFade: !1
          }
      }), f({
          effect: "fade",
          swiper: n,
          on: r,
          setTranslate: () => {
              const i = n["slides"];
              n.params.fadeEffect;
              for (let r = 0; r < i.length; r += 1) {
                  const i = n.slides[r];
                  let e = -i.swiperSlideOffset,
                      t = (n.params.virtualTranslate || (e -= n.translate), 0);
                  n.isHorizontal() || (t = e, e = 0);
                  var a = n.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i.progress), 0) : 1 + Math.min(Math.max(i.progress, -1), 0),
                      s = x(0, i);
                  s.style.opacity = a, s.style.transform = `translate3d(${e}px, ${t}px, 0px)`
              }
          },
          setTransition: t => {
              var e = n.slides.map(e => s(e));
              e.forEach(e => {
                  e.style.transitionDuration = t + "ms"
              }), h({
                  swiper: n,
                  duration: t,
                  transformElements: e,
                  allSlides: !0
              })
          },
          overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !n.params.cssMode
          })
      })
  }, function(e) {
      let {
          swiper: g,
          extendParams: t,
          on: r
      } = e;
      t({
          cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: .94
          }
      });
      const y = (e, t, r) => {
          let i = r ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
              a = r ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
          i || (i = O("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (r ? "left" : "top")).split(" ")), e.append(i)), a || (a = O("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (r ? "right" : "bottom")).split(" ")), e.append(a)), i && (i.style.opacity = Math.max(-t, 0)), a && (a.style.opacity = Math.max(t, 0))
      };
      f({
          effect: "cube",
          swiper: g,
          on: r,
          setTranslate: () => {
              const {
                  el: e,
                  wrapperEl: o,
                  slides: l,
                  width: t,
                  height: r,
                  rtlTranslate: d,
                  size: c,
                  browser: i
              } = g, p = g.params.cubeEffect, u = g.isHorizontal(), f = g.virtual && g.params.virtual.enabled;
              let h, m = 0;
              p.shadow && (u ? ((h = g.wrapperEl.querySelector(".swiper-cube-shadow")) || (h = O("div", "swiper-cube-shadow"), g.wrapperEl.append(h)), h.style.height = t + "px") : (h = e.querySelector(".swiper-cube-shadow")) || (h = O("div", "swiper-cube-shadow"), e.append(h)));
              for (let n = 0; n < l.length; n += 1) {
                  const o = l[n];
                  let e = n,
                      t = 90 * (e = f ? parseInt(o.getAttribute("data-swiper-slide-index"), 10) : e),
                      r = Math.floor(t / 360);
                  d && (t = -t, r = Math.floor(-t / 360));
                  const h = Math.max(Math.min(o.progress, 1), -1);
                  let i = 0,
                      a = 0,
                      s = 0;
                  e % 4 == 0 ? (i = 4 * -r * c, s = 0) : (e - 1) % 4 == 0 ? (i = 0, s = 4 * -r * c) : (e - 2) % 4 == 0 ? (i = c + 4 * r * c, s = c) : (e - 3) % 4 == 0 && (i = -c, s = 3 * c + 4 * c * r), d && (i = -i), u || (a = i, i = 0);
                  var v = `rotateX(${u?0:-t}deg) rotateY(${u?t:0}deg) translate3d(${i}px, ${a}px, ${s}px)`;
                  h <= 1 && -1 < h && (m = 90 * e + 90 * h, d && (m = 90 * -e - 90 * h), g.browser) && g.browser.isSafari && Math.abs(m) / 90 % 2 == 1 && (m += .001), o.style.transform = v, p.slideShadows && y(o, h, u)
              }
              if (o.style.transformOrigin = `50% 50% -${c/2}px`, o.style["-webkit-transform-origin"] = `50% 50% -${c/2}px`, p.shadow)
                  if (u) h.style.transform = `translate3d(0px, ${t/2+p.shadowOffset}px, ${-t/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;
                  else {
                      const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                          g = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                          o = p.shadowScale,
                          l = p.shadowScale / g,
                          y = p.shadowOffset;
                      h.style.transform = `scale3d(${o}, 1, ${l}) translate3d(0px, ${r/2+y}px, ${-r/2/l}px) rotateX(-89.99deg)`
                  } var a = (i.isSafari || i.isWebView) && i.needPerspectiveFix ? -c / 2 : 0;
              o.style.transform = `translate3d(0px,0,${a}px) rotateX(${g.isHorizontal()?0:m}deg) rotateY(${g.isHorizontal()?-m:0}deg)`, o.style.setProperty("--swiper-cube-translate-z", a + "px")
          },
          setTransition: t => {
              var {
                  el: e,
                  slides: r
              } = g;
              if (r.forEach(e => {
                      e.style.transitionDuration = t + "ms", e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => {
                          e.style.transitionDuration = t + "ms"
                      })
                  }), g.params.cubeEffect.shadow && !g.isHorizontal()) {
                  const g = e.querySelector(".swiper-cube-shadow");
                  g && (g.style.transitionDuration = t + "ms")
              }
          },
          recreateShadows: () => {
              const r = g.isHorizontal();
              g.slides.forEach(e => {
                  var t = Math.max(Math.min(e.progress, 1), -1);
                  y(e, t, r)
              })
          },
          getEffectParams: () => g.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
          })
      })
  }, function(e) {
      let {
          swiper: p,
          extendParams: t,
          on: r
      } = e;
      t({
          flipEffect: {
              slideShadows: !0,
              limitRotation: !0
          }
      });
      const u = (e, t) => {
          let r = p.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
              i = p.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
          r = r || T("flip", e, p.isHorizontal() ? "left" : "top"), i = i || T("flip", e, p.isHorizontal() ? "right" : "bottom"), r && (r.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
      };
      f({
          effect: "flip",
          swiper: p,
          on: r,
          setTranslate: () => {
              var {
                  slides: n,
                  rtlTranslate: o
              } = p, l = p.params.flipEffect;
              for (let s = 0; s < n.length; s += 1) {
                  var d = n[s];
                  let e = d.progress;
                  p.params.flipEffect.limitRotation && (e = Math.max(Math.min(d.progress, 1), -1));
                  var c = d.swiperSlideOffset;
                  let t = -180 * e,
                      r = 0,
                      i = p.params.cssMode ? -c - p.translate : -c,
                      a = 0;
                  p.isHorizontal() ? o && (t = -t) : (a = i, i = 0, r = -t, t = 0), p.browser && p.browser.isSafari && (Math.abs(t) / 90 % 2 == 1 && (t += .001), Math.abs(r) / 90 % 2 == 1) && (r += .001), d.style.zIndex = -Math.abs(Math.round(e)) + n.length, l.slideShadows && u(d, e);
                  c = `translate3d(${i}px, ${a}px, 0px) rotateX(${r}deg) rotateY(${t}deg)`;
                  x(0, d).style.transform = c
              }
          },
          setTransition: t => {
              var e = p.slides.map(e => s(e));
              e.forEach(e => {
                  e.style.transitionDuration = t + "ms", e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => {
                      e.style.transitionDuration = t + "ms"
                  })
              }), h({
                  swiper: p,
                  duration: t,
                  transformElements: e
              })
          },
          recreateShadows: () => {
              p.params.flipEffect, p.slides.forEach(e => {
                  let t = e.progress;
                  p.params.flipEffect.limitRotation && (t = Math.max(Math.min(e.progress, 1), -1)), u(e, t)
              })
          },
          getEffectParams: () => p.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !p.params.cssMode
          })
      })
  }, function(e) {
      let {
          swiper: w,
          extendParams: t,
          on: r
      } = e;
      t({
          coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0
          }
      }), f({
          effect: "coverflow",
          swiper: w,
          on: r,
          setTranslate: () => {
              const {
                  width: e,
                  height: l,
                  slides: d,
                  slidesSizesGrid: c
              } = w, p = w.params.coverflowEffect, u = w.isHorizontal(), f = w.translate, h = u ? e / 2 - f : l / 2 - f, m = u ? p.rotate : -p.rotate, v = p.depth;
              for (let o = 0, e = d.length; o < e; o += 1) {
                  const l = d[o],
                      f = c[o],
                      y = (h - l.swiperSlideOffset - f / 2) / f,
                      b = "function" == typeof p.modifier ? p.modifier(y) : y * p.modifier;
                  let e = u ? m * b : 0,
                      t = u ? 0 : m * b,
                      r = -v * Math.abs(b),
                      i = p.stretch,
                      a = ("string" == typeof i && -1 !== i.indexOf("%") && (i = parseFloat(p.stretch) / 100 * f), u ? 0 : i * b),
                      s = u ? i * b : 0,
                      n = 1 - (1 - p.scale) * Math.abs(b);
                  Math.abs(s) < .001 && (s = 0), Math.abs(a) < .001 && (a = 0), Math.abs(r) < .001 && (r = 0), Math.abs(e) < .001 && (e = 0), Math.abs(t) < .001 && (t = 0), Math.abs(n) < .001 && (n = 0), w.browser && w.browser.isSafari && (Math.abs(e) / 90 % 2 == 1 && (e += .001), Math.abs(t) / 90 % 2 == 1) && (t += .001);
                  var g = `translate3d(${s}px,${a}px,${r}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${n})`;
                  if (x(0, l).style.transform = g, l.style.zIndex = 1 - Math.abs(Math.round(b)), p.slideShadows) {
                      let e = u ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top"),
                          t = u ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
                      e = e || T("coverflow", l, u ? "left" : "top"), t = t || T("coverflow", l, u ? "right" : "bottom"), e && (e.style.opacity = 0 < b ? b : 0), t && (t.style.opacity = 0 < -b ? -b : 0)
                  }
              }
          },
          setTransition: t => {
              w.slides.map(e => s(e)).forEach(e => {
                  e.style.transitionDuration = t + "ms", e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => {
                      e.style.transitionDuration = t + "ms"
                  })
              })
          },
          perspective: () => !0,
          overwriteParams: () => ({
              watchSlidesProgress: !0
          })
      })
  }, function(e) {
      let {
          swiper: y,
          extendParams: t,
          on: r
      } = e;
      t({
          creativeEffect: {
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1
              },
              next: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1
              }
          }
      });
      f({
          effect: "creative",
          swiper: y,
          on: r,
          setTranslate: () => {
              const {
                  slides: a,
                  wrapperEl: e,
                  slidesSizesGrid: s
              } = y, n = y.params.creativeEffect, o = n["progressMultiplier"], l = y.params.centeredSlides;
              if (l) {
                  const a = s[0] / 2 - y.params.slidesOffsetBefore || 0;
                  e.style.transform = `translateX(calc(50% - ${a}px))`
              }
              for (let r = 0; r < a.length; r += 1) {
                  const s = a[r],
                      f = s.progress,
                      h = Math.min(Math.max(s.progress, -n.limitProgress), n.limitProgress);
                  let e = h;
                  l || (e = Math.min(Math.max(s.originalProgress, -n.limitProgress), n.limitProgress));
                  const m = s.swiperSlideOffset,
                      v = [y.params.cssMode ? -m - y.translate : -m, 0, 0],
                      g = [0, 0, 0];
                  let t = !1,
                      i = (y.isHorizontal() || (v[1] = v[0], v[0] = 0), {
                          translate: [0, 0, 0],
                          rotate: [0, 0, 0],
                          scale: 1,
                          opacity: 1
                      });
                  h < 0 ? (i = n.next, t = !0) : 0 < h && (i = n.prev, t = !0), v.forEach((e, t) => {
                      v[t] = `calc(${e}px + (${e=i.translate[t],"string"==typeof e?e:e+"px"} * ${Math.abs(h*o)}))`
                  }), g.forEach((e, t) => {
                      let r = i.rotate[t] * Math.abs(h * o);
                      y.browser && y.browser.isSafari && Math.abs(r) / 90 % 2 == 1 && (r += .001), g[t] = r
                  }), s.style.zIndex = -Math.abs(Math.round(f)) + a.length;
                  var d = v.join(", "),
                      c = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                      p = e < 0 ? `scale(${1+(1-i.scale)*e*o})` : `scale(${1-(1-i.scale)*e*o})`,
                      u = e < 0 ? 1 + (1 - i.opacity) * e * o : 1 - (1 - i.opacity) * e * o,
                      d = `translate3d(${d}) ${c} ` + p;
                  if (t && i.shadow || !t) {
                      let e = s.querySelector(".swiper-slide-shadow");
                      if (e = !e && i.shadow ? T("creative", s) : e) {
                          const y = n.shadowPerProgress ? h * (1 / n.limitProgress) : h;
                          e.style.opacity = Math.min(Math.max(Math.abs(y), 0), 1)
                      }
                  }
                  c = x(0, s);
                  c.style.transform = d, c.style.opacity = u, i.origin && (c.style.transformOrigin = i.origin)
              }
          },
          setTransition: t => {
              var e = y.slides.map(e => s(e));
              e.forEach(e => {
                  e.style.transitionDuration = t + "ms", e.querySelectorAll(".swiper-slide-shadow").forEach(e => {
                      e.style.transitionDuration = t + "ms"
                  })
              }), h({
                  swiper: y,
                  duration: t,
                  transformElements: e,
                  allSlides: !0
              })
          },
          perspective: () => y.params.creativeEffect.perspective,
          overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !y.params.cssMode
          })
      })
  }, function(e) {
      let {
          swiper: w,
          extendParams: t,
          on: r
      } = e;
      t({
          cardsEffect: {
              slideShadows: !0,
              rotate: !0,
              perSlideRotate: 2,
              perSlideOffset: 8
          }
      }), f({
          effect: "cards",
          swiper: w,
          on: r,
          setTranslate: () => {
              const {
                  slides: o,
                  activeIndex: l,
                  rtlTranslate: d
              } = w, c = w.params.cardsEffect, {
                  startTranslate: p,
                  isTouched: u
              } = w.touchEventsData, f = d ? -w.translate : w.translate;
              for (let n = 0; n < o.length; n += 1) {
                  var h = o[n],
                      m = h.progress,
                      v = Math.min(Math.max(m, -4), 4);
                  let e = h.swiperSlideOffset,
                      t = (w.params.centeredSlides && !w.params.cssMode && (w.wrapperEl.style.transform = `translateX(${w.minTranslate()}px)`), w.params.centeredSlides && w.params.cssMode && (e -= o[0].swiperSlideOffset), w.params.cssMode ? -e - w.translate : -e),
                      r = 0;
                  var g = -100 * Math.abs(v);
                  let i = 1,
                      a = -c.perSlideRotate * v,
                      s = c.perSlideOffset - .75 * Math.abs(v);
                  var y = w.virtual && w.params.virtual.enabled ? w.virtual.from + n : n,
                      b = (y === l || y === l - 1) && 0 < v && v < 1 && (u || w.params.cssMode) && f < p,
                      y = (y === l || y === l + 1) && v < 0 && -1 < v && (u || w.params.cssMode) && p < f;
                  if (b || y) {
                      const o = (1 - Math.abs((Math.abs(v) - .5) / .5)) ** .5;
                      a += -28 * v * o, i += -.5 * o, s += 96 * o, r = -25 * o * Math.abs(v) + "%"
                  }
                  if (t = v < 0 ? `calc(${t}px ${d?"-":"+"} (${s*Math.abs(v)}%))` : 0 < v ? `calc(${t}px ${d?"-":"+"} (-${s*Math.abs(v)}%))` : t + "px", !w.isHorizontal()) {
                      const o = r;
                      r = t, t = o
                  }
                  b = v < 0 ? "" + (1 + (1 - i) * v) : "" + (1 - (1 - i) * v), y = `
      translate3d(${t}, ${r}, ${g}px)
      rotateZ(${c.rotate?d?-a:a:0}deg)
      scale(${b})
    `;
                  if (c.slideShadows) {
                      let e = h.querySelector(".swiper-slide-shadow");
                      (e = e || T("cards", h)) && (e.style.opacity = Math.min(Math.max((Math.abs(v) - .5) / .5, 0), 1))
                  }
                  h.style.zIndex = -Math.abs(Math.round(m)) + o.length, x(0, h).style.transform = y
              }
          },
          setTransition: t => {
              var e = w.slides.map(e => s(e));
              e.forEach(e => {
                  e.style.transitionDuration = t + "ms", e.querySelectorAll(".swiper-slide-shadow").forEach(e => {
                      e.style.transitionDuration = t + "ms"
                  })
              }), h({
                  swiper: w,
                  duration: t,
                  transformElements: e
              })
          },
          perspective: () => !0,
          overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !w.params.cssMode
          })
      })
  }]), u
}();