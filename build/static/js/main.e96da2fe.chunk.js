(this['webpackJsonpserum-dex-ui'] =
  this['webpackJsonpserum-dex-ui'] || []).push([
  [0],
  {
    347: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'b', function () {
          return d;
        }),
          n.d(t, 'a', function () {
            return b;
          });
        var r = n(1),
          a = n.n(r),
          o = n(2),
          i = n(24);
        function c(e, t, n, r) {
          return s.apply(this, arguments);
        }
        function s() {
          return (s = Object(o.a)(
            a.a.mark(function e(t, n, r, o) {
              var i, c, s, l, u;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((i = 0), (c = 0), !(o.length > 255))) {
                        e.next = 15;
                        break;
                      }
                    case 3:
                      if (!(o.length - c > 255)) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (s = o.slice(c, c + 255)),
                        (c += 255),
                        console.log(
                          'send',
                          (2 | i).toString(16),
                          s.length.toString(16),
                          s,
                        ),
                        (e.next = 9),
                        t.send(224, n, r, 2 | i, s)
                      );
                    case 9:
                      if (2 === e.sent.length) {
                        e.next = 12;
                        break;
                      }
                      throw new Error('Received unexpected reply payload');
                    case 12:
                      (i |= 1), (e.next = 3);
                      break;
                    case 15:
                      return (
                        (l = o.slice(c)),
                        console.log(
                          'send',
                          i.toString(16),
                          l.length.toString(16),
                          l,
                        ),
                        (e.next = 19),
                        t.send(224, n, r, i, l)
                      );
                    case 19:
                      return (
                        (u = e.sent),
                        e.abrupt('return', u.slice(0, u.length - 2))
                      );
                    case 21:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function l() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return (e | ((1 << 31) >>> 0)) >>> 0;
        }
        function u(t, n) {
          var r;
          r = void 0 !== t ? (void 0 !== n ? 4 : 3) : 2;
          var a = e.alloc(1 + 4 * r),
            o = 0;
          return (
            (o = a.writeUInt8(r, o)),
            (o = a.writeUInt32BE(l(44), o)),
            (o = a.writeUInt32BE(l(501), o)),
            r > 2 &&
              ((o = a.writeUInt32BE(l(t), o)),
              4 === r && (o = a.writeUInt32BE(l(n), o))),
            a
          );
        }
        function d(e, t) {
          return p.apply(this, arguments);
        }
        function p() {
          return (p = Object(o.a)(
            a.a.mark(function e(t, n) {
              var r,
                o,
                i = arguments;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = i.length > 2 && void 0 !== i[2] ? i[2] : u()),
                        (o = n.serializeMessage()),
                        e.abrupt('return', m(t, o, r))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function m(e, t) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = Object(o.a)(
            a.a.mark(function t(n, r) {
              var o,
                i,
                s,
                l = arguments;
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = l.length > 2 && void 0 !== l[2] ? l[2] : u()),
                        (i = e.alloc(1)).writeUInt8(1, 0),
                        (s = e.concat([i, o, r])),
                        t.abrupt('return', c(n, 6, 1, s))
                      );
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )).apply(this, arguments);
        }
        function b(e) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = Object(o.a)(
            a.a.mark(function e(t) {
              var n,
                r,
                o = arguments;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = o.length > 1 && void 0 !== o[1] ? o[1] : u()),
                        (e.next = 3),
                        c(t, 5, 0, n)
                      );
                    case 3:
                      return (
                        (r = e.sent), e.abrupt('return', new i.PublicKey(r))
                      );
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
      }.call(this, n(9).Buffer));
    },
    473: function (e, t, n) {
      e.exports = n.p + 'static/media/logo.9de37014.svg';
    },
    490: function (e, t, n) {
      e.exports = n(789);
    },
    495: function (e, t, n) {},
    496: function (e, t, n) {},
    497: function (e, t) {},
    499: function (e, t) {},
    523: function (e, t) {},
    524: function (e, t) {},
    668: function (e, t) {},
    670: function (e, t) {},
    679: function (e, t) {},
    681: function (e, t) {},
    708: function (e, t) {},
    710: function (e, t) {},
    715: function (e, t) {},
    717: function (e, t) {},
    724: function (e, t) {},
    736: function (e, t) {},
    739: function (e, t) {},
    754: function (e, t, n) {},
    789: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, 'getAllCharts', function () {
          return ia;
        }),
        n.d(r, 'removeChart', function () {
          return ca;
        }),
        n.d(r, 'saveChart', function () {
          return sa;
        }),
        n.d(r, 'getChartContent', function () {
          return la;
        }),
        n.d(r, 'getAllStudyTemplates', function () {
          return ua;
        }),
        n.d(r, 'removeStudyTemplate', function () {
          return da;
        }),
        n.d(r, 'saveStudyTemplate', function () {
          return pa;
        }),
        n.d(r, 'getStudyTemplateContent', function () {
          return ma;
        });
      var a = n(0),
        o = n.n(a),
        i = n(63),
        c = n.n(i),
        s = (n(495), n(496), n(1)),
        l = n.n(s),
        u = n(2),
        d = n(10),
        p = n(16),
        m = n(24),
        f = n(33),
        b = n.n(f);
      function v(e) {
        if (!e) return !1;
        try {
          return new m.PublicKey(e), !0;
        } catch (t) {
          return !1;
        }
      }
      function h(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(u.a)(
          l.a.mark(function e(t) {
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise(function (e) {
                        return setTimeout(e, t);
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var y = new Intl.NumberFormat(void 0, {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      function k(e, t) {
        return t
          ? Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)
          : Math.floor(e);
      }
      function E(e, t) {
        return t ? Math.round(e * Math.pow(10, t)) / Math.pow(10, t) : e;
      }
      function w(e) {
        return !isNaN(e) && Math.floor(e) !== e && e.toString().includes('.')
          ? e.toString().split('.')[1].length || 0
          : !isNaN(e) && Math.floor(e) !== e && e.toString().includes('e')
          ? parseInt(e.toString().split('e-')[1] || '0')
          : 0;
      }
      function O(e, t) {
        var n = e.div(t).toNumber(),
          r = e.umod(t),
          a = r.gcd(t);
        return n + r.div(a).toNumber() / t.div(a).toNumber();
      }
      function x(e) {
        return new b.a(10).pow(new b.a(e));
      }
      var S = {};
      function j(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = localStorage.getItem(e) || t,
          r = Object(a.useState)(e + '\n' + n),
          o = Object(d.a)(r, 2),
          i = o[1];
        Object(a.useEffect)(
          function () {
            return (
              S[e] || (S[e] = []),
              S[e].push(i),
              function () {
                (S[e] = S[e].filter(function (e) {
                  return e !== i;
                })),
                  0 === S[e].length && delete S[e];
              }
            );
          },
          [e],
        );
        var c = Object(a.useCallback)(
          function (t) {
            var r;
            n !== t &&
              (null === t
                ? localStorage.removeItem(e)
                : localStorage.setItem(e, t),
              null === (r = S[e]) ||
                void 0 === r ||
                r.forEach(function (n) {
                  return n(e + '\n' + t);
                }));
          },
          [n, e],
        );
        return [n, c];
      }
      function _(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = j(e, JSON.stringify(t)),
          r = Object(d.a)(n, 2),
          o = r[0],
          i = r[1];
        return [
          Object(a.useMemo)(
            function () {
              return o && JSON.parse(o);
            },
            [o],
          ),
          function (e) {
            return i(JSON.stringify(e));
          },
        ];
      }
      function T(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n = e.toBase58();
        return n.slice(0, t) + '\u2026' + n.slice(-t);
      }
      function C(e, t, n) {
        if (!n && Object.keys(e).length !== Object.keys(t).length) return !1;
        n = n || Object.keys(e);
        var r,
          a = Object(p.a)(n);
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var o = r.value;
            if (e[o] !== t[o]) return !1;
          }
        } catch (i) {
          a.e(i);
        } finally {
          a.f();
        }
        return !0;
      }
      var A = n(22),
        I = n(18),
        P = n(15),
        M = n(26),
        F = n.n(M),
        R = new Date(),
        B = new Map(),
        K = function e(t, n, r, a, o, i) {
          Object(P.a)(this, e),
            (this.cacheKey = void 0),
            (this.fn = void 0),
            (this.refreshInterval = void 0),
            (this.refreshIntervalOnError = void 0),
            (this.callback = void 0),
            (this.cacheNullValues = !0),
            (this.cacheKey = t),
            (this.fn = n),
            (this.refreshInterval = r),
            (this.refreshIntervalOnError = a),
            (this.callback = o),
            (this.cacheNullValues = i);
        },
        N = (function () {
          function e(t, n, r) {
            var a = this;
            Object(P.a)(this, e),
              (this.cacheKey = void 0),
              (this.fn = void 0),
              (this.timeoutId = void 0),
              (this.listeners = void 0),
              (this.errors = void 0),
              (this.cacheNullValues = !0),
              (this.refresh = Object(u.a)(
                l.a.mark(function e() {
                  var t, n, r, o;
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (a.timeoutId &&
                                (clearTimeout(a.timeoutId),
                                (a.timeoutId = null)),
                              !a.stopped)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            return (t = !1), (e.prev = 4), (e.next = 7), a.fn();
                          case 7:
                            if (
                              ((n = e.sent), a.cacheNullValues || null !== n)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              console.log(
                                'Not caching null value for '.concat(
                                  a.cacheKey,
                                ),
                              ),
                              (a.errors = 0),
                              e.abrupt('return', n)
                            );
                          case 14:
                            return (
                              B.set(a.cacheKey, n),
                              (a.errors = 0),
                              a.notifyListeners(),
                              e.abrupt('return', n)
                            );
                          case 18:
                            e.next = 25;
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e.catch(4)),
                              ++a.errors,
                              console.warn(e.t0),
                              (t = !0);
                          case 25:
                            return (
                              (e.prev = 25),
                              a.timeoutId ||
                                a.stopped ||
                                ((r = a.refreshInterval),
                                t &&
                                  a.refreshIntervalOnError &&
                                  a.refreshIntervalOnError > 0 &&
                                  (r = a.refreshIntervalOnError),
                                a.errors > 0 &&
                                  (r = Math.min(
                                    1e3 * Math.pow(2, a.errors - 1),
                                    6e4,
                                  )),
                                (o = +new Date() - +R) < 5e3 &&
                                  (r += 5e3 - o / 2),
                                'hidden' === document.visibilityState
                                  ? (r = 6e4)
                                  : document.hasFocus() || (r *= 1.5),
                                (r *= 0.8 + 0.4 * Math.random()),
                                (a.timeoutId = setTimeout(a.refresh, r))),
                              e.finish(25)
                            );
                          case 28:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 20, 25, 28]],
                  );
                }),
              )),
              (this.cacheKey = t),
              (this.fn = n),
              (this.timeoutId = null),
              (this.listeners = new Set()),
              (this.errors = 0),
              (this.cacheNullValues = r);
          }
          return (
            Object(I.a)(e, [
              {
                key: 'refreshInterval',
                get: function () {
                  return Math.min.apply(
                    Math,
                    Object(A.a)(
                      Object(A.a)(this.listeners).map(function (e) {
                        return e.refreshInterval;
                      }),
                    ),
                  );
                },
              },
              {
                key: 'refreshIntervalOnError',
                get: function () {
                  var e = Object(A.a)(this.listeners)
                    .map(function (e) {
                      return e.refreshIntervalOnError;
                    })
                    .filter(function (e) {
                      return null !== e;
                    });
                  return 0 === e.length
                    ? null
                    : Math.min.apply(Math, Object(A.a)(e));
                },
              },
              {
                key: 'stopped',
                get: function () {
                  return 0 === this.listeners.size;
                },
              },
              {
                key: 'addListener',
                value: function (e) {
                  var t = this.refreshInterval;
                  this.listeners.add(e),
                    this.refreshInterval < t && this.refresh();
                },
              },
              {
                key: 'removeListener',
                value: function (e) {
                  F()(this.listeners.delete(e)),
                    this.stopped &&
                      this.timeoutId &&
                      (clearTimeout(this.timeoutId), (this.timeoutId = null));
                },
              },
              {
                key: 'notifyListeners',
                value: function () {
                  this.listeners.forEach(function (e) {
                    return e.callback();
                  });
                },
              },
            ]),
            e
          );
        })(),
        z = new ((function () {
          function e() {
            Object(P.a)(this, e), (this.loops = new Map());
          }
          return (
            Object(I.a)(e, [
              {
                key: 'addListener',
                value: function (e) {
                  this.loops.has(e.cacheKey) ||
                    this.loops.set(
                      e.cacheKey,
                      new N(e.cacheKey, e.fn, e.cacheNullValues),
                    ),
                    this.loops.get(e.cacheKey).addListener(e);
                },
              },
              {
                key: 'removeListener',
                value: function (e) {
                  var t = this.loops.get(e.cacheKey);
                  t.removeListener(e),
                    t.stopped &&
                      (this.loops.delete(e.cacheKey), B.delete(e.cacheKey));
                },
              },
              {
                key: 'refresh',
                value: function (e) {
                  this.loops.has(e) && this.loops.get(e).refresh();
                },
              },
              {
                key: 'refreshAll',
                value: function () {
                  return Promise.all(
                    Object(A.a)(this.loops.values()).map(function (e) {
                      return e.refresh();
                    }),
                  );
                },
              },
            ]),
            e
          );
        })())();
      function D(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.refreshInterval,
          o = void 0 === r ? 6e4 : r,
          i = n.refreshIntervalOnError,
          c = void 0 === i ? null : i,
          s =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          l = Object(a.useReducer)(function (e) {
            return e + 1;
          }, 0),
          u = Object(d.a)(l, 2),
          p = u[1];
        if (
          (Object(a.useEffect)(
            function () {
              if (!t) return function () {};
              var n = new K(t, e, o, c, p, s);
              return (
                z.addListener(n),
                function () {
                  return z.removeListener(n);
                }
              );
            },
            [t, o],
          ),
          !t)
        )
          return [null, !1];
        var m = B.has(t),
          f = m ? B.get(t) : void 0;
        return [f, m];
      }
      function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t && B.delete(e);
        var n = z.loops.get(e);
        n && (n.refresh(), t && n.notifyListeners());
      }
      function q() {
        var e,
          t = Object(p.a)(z.loops.values());
        try {
          for (t.s(); !(e = t.n()).done; ) {
            e.value.refresh();
          }
        } catch (n) {
          t.e(n);
        } finally {
          t.f();
        }
      }
      var W = n(71),
        U = [
          {
            name: 'mainnet-beta',
            endpoint: 'https://solana-api.projectserum.com',
            custom: !1,
          },
          { name: 'localnet', endpoint: 'http://127.0.0.1:8899', custom: !1 },
        ],
        H = new Map(),
        J = o.a.createContext(null);
      function V(e) {
        var t = e.children,
          n = _('connectionEndpts', U[0].endpoint),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = _('customConnectionEndpoints', []),
          l = Object(d.a)(s, 2),
          u = l[0],
          p = l[1],
          f = U.concat(u),
          b = Object(a.useMemo)(
            function () {
              return new m.Connection(i, 'recent');
            },
            [i],
          ),
          v = Object(a.useMemo)(
            function () {
              return new m.Connection(i, 'recent');
            },
            [i],
          );
        return (
          Object(a.useEffect)(
            function () {
              var e = b.onAccountChange(
                new m.Account().publicKey,
                function () {},
              );
              return function () {
                b.removeAccountChangeListener(e);
              };
            },
            [b],
          ),
          Object(a.useEffect)(
            function () {
              var e = b.onSlotChange(function () {
                return null;
              });
              return function () {
                b.removeSlotChangeListener(e);
              };
            },
            [b],
          ),
          Object(a.useEffect)(
            function () {
              var e = v.onAccountChange(
                new m.Account().publicKey,
                function () {},
              );
              return function () {
                v.removeAccountChangeListener(e);
              };
            },
            [v],
          ),
          Object(a.useEffect)(
            function () {
              var e = v.onSlotChange(function () {
                return null;
              });
              return function () {
                v.removeSlotChangeListener(e);
              };
            },
            [v],
          ),
          o.a.createElement(
            J.Provider,
            {
              value: {
                endpoint: i,
                setEndpoint: c,
                connection: b,
                sendConnection: v,
                availableEndpoints: f,
                setCustomEndpoints: p,
              },
            },
            t,
          )
        );
      }
      function G() {
        var e = Object(a.useContext)(J);
        if (!e) throw new Error('Missing connection context');
        return e.connection;
      }
      function Q() {
        var e = Object(a.useContext)(J);
        if (!e) throw new Error('Missing connection context');
        return e.sendConnection;
      }
      function Y() {
        var e = Object(a.useContext)(J);
        if (!e) throw new Error('Missing connection context');
        return {
          endpoint: e.endpoint,
          endpointInfo: e.availableEndpoints.find(function (t) {
            return t.endpoint === e.endpoint;
          }),
          setEndpoint: e.setEndpoint,
          availableEndpoints: e.availableEndpoints,
          setCustomEndpoints: e.setCustomEndpoints,
        };
      }
      function X(e) {
        var t = G(),
          n = Object(W.a)(
            t,
            null === e || void 0 === e ? void 0 : e.toBase58(),
          ),
          r = D(
            Object(u.a)(
              l.a.mark(function n() {
                return l.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          'return',
                          e ? t.getAccountInfo(e) : null,
                        );
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              }),
            ),
            n,
            { refreshInterval: 6e4 },
          ),
          o = Object(d.a)(r, 2),
          i = o[0],
          c = o[1];
        Object(a.useEffect)(
          function () {
            if (e) {
              if (H.has(n)) {
                ++H.get(n).count;
              } else {
                var r = null,
                  a = t.onAccountChange(e, function (e) {
                    (r && r.data.equals(e.data) && r.lamports === e.lamports) ||
                      ((r = e),
                      (function (e, t) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r = n.initializeOnly,
                          a = void 0 !== r && r;
                        if (!a || !B.has(e)) {
                          B.set(e, t);
                          var o = z.loops.get(e);
                          o && o.notifyListeners();
                        }
                      })(n, e));
                  });
                H.set(n, { count: 1, subscriptionId: a });
              }
              return function () {
                var e = H.get(n);
                e.count - 1 <= 0
                  ? (t.removeAccountChangeListener(e.subscriptionId),
                    H.delete(n))
                  : --e.count;
              };
            }
          },
          [n],
        );
        var s = Object(a.useRef)(null);
        return (
          (i &&
            s.current &&
            s.current.data.equals(i.data) &&
            s.current.lamports === i.lamports) ||
            (s.current = i),
          [s.current, c]
        );
      }
      function Z(e) {
        var t = X(e),
          n = Object(d.a)(t, 1)[0];
        return n && n.data;
      }
      var $ = n(255),
        ee = n(485),
        te = n(88),
        ne = n(124);
      function re(e) {
        var t = e.external,
          n = void 0 !== t && t,
          r = Object(te.a)(e, ['external']),
          a = r.to,
          i = r.children,
          c = Object(te.a)(r, ['to', 'children']);
        return n
          ? o.a.createElement(
              'a',
              Object.assign(
                { href: a, target: '_blank', rel: 'noopener noreferrer' },
                c,
              ),
              i,
            )
          : o.a.createElement(ne.b, Object.assign({ to: a }, c), i);
      }
      function ae(e) {
        var t = e.message,
          n = e.description,
          r = e.txid,
          a = e.type,
          i = void 0 === a ? 'info' : a,
          c = e.placement,
          s = void 0 === c ? 'bottomLeft' : c;
        r &&
          (n = o.a.createElement(
            re,
            {
              external: !0,
              to: 'https://solscan.io/tx/' + r,
              style: { color: '#0000ff' },
            },
            'View transaction ',
            r.slice(0, 8),
            '...',
            r.slice(r.length - 8),
          )),
          ee.a[i]({
            message: o.a.createElement(
              'span',
              { style: { color: 'black' } },
              t,
            ),
            description: o.a.createElement(
              'span',
              { style: { color: 'black', opacity: 0.5 } },
              n,
            ),
            placement: s,
            style: { backgroundColor: 'white' },
          });
      }
      var oe = n(802),
        ie = n(95),
        ce = n(45),
        se = n(46),
        le = n(86),
        ue = n.n(le),
        de = n(458),
        pe = n(347),
        me = new m.PublicKey('11111111111111111111111111111111'),
        fe = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(se.a)(n);
          function n() {
            var e;
            return (
              Object(P.a)(this, n),
              ((e = t.call(this))._connecting = void 0),
              (e._publicKey = void 0),
              (e._transport = void 0),
              (e._connecting = !1),
              (e._publicKey = null),
              (e._transport = null),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: 'publicKey',
                get: function () {
                  return this._publicKey || me;
                },
              },
              {
                key: 'connected',
                get: function () {
                  return null !== this._publicKey;
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  return !1;
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      var n, r, a, o;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (n = []), (r = 0);
                              case 2:
                                if (!(r < t.length)) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (a = t[r]),
                                  (e.next = 6),
                                  this.signTransaction(a)
                                );
                              case 6:
                                (o = e.sent), n.push(o);
                              case 8:
                                r++, (e.next = 2);
                                break;
                              case 11:
                                return e.abrupt('return', n);
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      var n;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._transport && this._publicKey) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error('Not connected to Ledger');
                              case 2:
                                return (
                                  (e.next = 4), Object(pe.b)(this._transport, t)
                                );
                              case 4:
                                return (
                                  (n = e.sent),
                                  t.addSignature(this._publicKey, n),
                                  e.abrupt('return', t)
                                );
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._connecting) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return');
                              case 2:
                                return (
                                  (this._connecting = !0),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  de.a.create()
                                );
                              case 6:
                                return (
                                  (this._transport = e.sent),
                                  (e.next = 9),
                                  Object(pe.a)(this._transport)
                                );
                              case 9:
                                (this._publicKey = e.sent),
                                  this.emit('connect', this._publicKey),
                                  (e.next = 18);
                                break;
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.t0 = e.catch(3)),
                                  ae({
                                    message: 'Ledger Error',
                                    description: e.t0.message,
                                  }),
                                  (e.next = 18),
                                  this.disconnect()
                                );
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (this._connecting = !1),
                                  e.finish(18)
                                );
                              case 21:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 13, 18, 21]],
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'disconnect',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      var t;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((t = !1), !this._transport)) {
                                  e.next = 6;
                                  break;
                                }
                                return (e.next = 4), this._transport.close();
                              case 4:
                                (this._transport = null), (t = !0);
                              case 6:
                                (this._connecting = !1),
                                  (this._publicKey = null),
                                  t && this.emit('disconnect');
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(ue.a),
        be = n(49),
        ve = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(se.a)(n);
          function n() {
            var e;
            return (
              Object(P.a)(this, n),
              ((e = t.call(this))._handleConnect = function () {
                for (
                  var t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                (t = e).emit.apply(t, ['connect'].concat(r));
              }),
              (e._handleDisconnect = function () {
                for (
                  var t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                (t = e).emit.apply(t, ['disconnect'].concat(r));
              }),
              (e.connect = e.connect.bind(Object(be.a)(e))),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: '_provider',
                get: function () {
                  var e, t;
                  if (
                    null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.solana) ||
                    void 0 === t
                      ? void 0
                      : t.isPhantom
                  )
                    return window.solana;
                },
              },
              {
                key: 'connected',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.isConnected) || !1
                  );
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.autoApprove) || !1
                  );
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signAllTransactions(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'publicKey',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.publicKey) || me
                  );
                },
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signTransaction(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: function () {
                  var e, t, n;
                  if (!this._provider)
                    return (
                      window.open('https://phantom.app/', '_blank'),
                      void ae({
                        message: 'Connection Error',
                        description: 'Please install Phantom wallet',
                      })
                    );
                  this._provider.listeners('connect').length ||
                    null === (t = this._provider) ||
                    void 0 === t ||
                    t.on('connect', this._handleConnect);
                  this._provider.listeners('disconnect').length ||
                    null === (n = this._provider) ||
                    void 0 === n ||
                    n.on('disconnect', this._handleDisconnect);
                  return null === (e = this._provider) || void 0 === e
                    ? void 0
                    : e.connect();
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this._provider && this._provider.disconnect();
                },
              },
            ]),
            n
          );
        })(ue.a);
      var he = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(se.a)(n);
          function n() {
            var e;
            return (
              Object(P.a)(this, n),
              ((e = t.call(this))._publicKey = void 0),
              (e._onProcess = void 0),
              (e._connected = void 0),
              (e._onProcess = !1),
              (e._connected = !1),
              (e.connect = e.connect.bind(Object(be.a)(e))),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: 'connected',
                get: function () {
                  return this._connected;
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  return !1;
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signAllTransactions(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: '_provider',
                get: function () {
                  var e, t;
                  if (
                    null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.solana) ||
                    void 0 === t
                      ? void 0
                      : t.isMathWallet
                  )
                    return window.solana;
                },
              },
              {
                key: 'publicKey',
                get: function () {
                  return this._publicKey || me;
                },
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signTransaction(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: function () {
                  var e = this;
                  if (!this._onProcess) {
                    if (!this._provider)
                      return (
                        window.open('https://mathwallet.org/', '_blank'),
                        void ae({
                          message: 'Math Wallet Error',
                          description: 'Please install mathwallet',
                        })
                      );
                    (this._onProcess = !0),
                      this._provider
                        .getAccount()
                        .then(function (t) {
                          (e._publicKey = new m.PublicKey(t)),
                            (e._connected = !0),
                            e.emit('connect', e._publicKey);
                        })
                        .catch(function () {
                          e.disconnect();
                        })
                        .finally(function () {
                          e._onProcess = !1;
                        });
                  }
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this._publicKey &&
                    ((this._publicKey = void 0),
                    (this._connected = !1),
                    this.emit('disconnect'));
                },
              },
            ]),
            n
          );
        })(ue.a),
        ge = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(se.a)(n);
          function n() {
            var e;
            return (
              Object(P.a)(this, n),
              ((e = t.call(this))._handleConnect = function () {
                for (
                  var t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                (t = e).emit.apply(t, ['connect'].concat(r));
              }),
              (e._handleDisconnect = function () {
                var t, n, r;
                null === (t = e._provider) ||
                  void 0 === t ||
                  t.off('connect', e._handleConnect),
                  null === (n = e._provider) ||
                    void 0 === n ||
                    n.off('disconnect', e._handleDisconnect);
                for (
                  var a = arguments.length, o = new Array(a), i = 0;
                  i < a;
                  i++
                )
                  o[i] = arguments[i];
                (r = e).emit.apply(r, ['disconnect'].concat(o));
              }),
              (e.connect = e.connect.bind(Object(be.a)(e))),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: '_provider',
                get: function () {
                  var e, t;
                  if (
                    null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.solflare) ||
                    void 0 === t
                      ? void 0
                      : t.isSolflare
                  )
                    return window.solflare;
                },
              },
              {
                key: 'connected',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.isConnected) || !1
                  );
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.autoApprove) || !1
                  );
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signAllTransactions(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'publicKey',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.publicKey) || me
                  );
                },
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signTransaction(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      var t, n, r;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  window.open(
                                    'https://solflare.com/',
                                    '_blank',
                                  ),
                                  ae({
                                    message: 'Connection Error',
                                    description:
                                      'Please install Solflare extension',
                                  }),
                                  e.abrupt('return')
                                );
                              case 4:
                                return (
                                  null === (t = this._provider) ||
                                    void 0 === t ||
                                    t.on('connect', this._handleConnect),
                                  null === (n = this._provider) ||
                                    void 0 === n ||
                                    n.on('disconnect', this._handleDisconnect),
                                  e.abrupt(
                                    'return',
                                    null === (r = this._provider) ||
                                      void 0 === r
                                      ? void 0
                                      : r.connect(),
                                  )
                                );
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'disconnect',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._provider && this._provider.disconnect();
                              case 1:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(ue.a),
        ye =
          'https://cdn.jsdelivr.net/gh/solana-labs/oyster@main/assets/wallets',
        ke = [
          {
            name: 'sollet.io',
            url: 'https://www.sollet.io',
            icon: ''.concat(ye, '/sollet.svg'),
          },
          {
            name: 'Sollet Extension',
            url: 'https://www.sollet.io/extension',
            icon: ''.concat(ye, '/sollet.svg'),
            adapter: function (e, t) {
              var n = window.sollet;
              return n
                ? new $.a(n, t)
                : {
                    on: function () {},
                    connect: function () {
                      ae({
                        message: 'Sollet Extension Error',
                        description:
                          'Please install the Sollet Extension for Chrome',
                      });
                    },
                  };
            },
          },
          {
            name: 'Ledger',
            url: 'https://www.ledger.com',
            icon: ''.concat(ye, '/ledger.svg'),
            adapter: fe,
          },
          {
            name: 'Solflare',
            url: 'https://solflare.com/access-wallet',
            icon: ''.concat(ye, '/solflare.svg'),
          },
          {
            name: 'Solflare Extension',
            url: 'https://solflare.com',
            icon: ''.concat(ye, '/solflare.svg'),
            adapter: ge,
          },
          {
            name: 'Phantom',
            url: 'https://www.phantom.app',
            icon: 'https://www.phantom.app/img/logo.png',
            adapter: ve,
          },
          {
            name: 'MathWallet',
            url: 'https://www.mathwallet.org',
            icon: ''.concat(ye, '/mathwallet.svg'),
            adapter: he,
          },
        ],
        Ee = o.a.createContext(null);
      function we(e) {
        var t,
          n,
          r = e.children,
          i = Y().endpoint,
          c = Object(a.useState)(!1),
          s = Object(d.a)(c, 2),
          l = s[0],
          u = s[1],
          p = _('walletProvider'),
          m = Object(d.a)(p, 2),
          f = m[0],
          b = m[1],
          v = Object(a.useMemo)(
            function () {
              return ke.find(function (e) {
                return e.url === f;
              });
            },
            [f],
          ),
          h = Object(a.useState)(void 0),
          g = Object(d.a)(h, 2),
          y = g[0],
          k = g[1];
        Object(a.useEffect)(
          function () {
            if (v) {
              var e = function () {
                (y = new (v.adapter || $.a)(f, i)), k(y);
              };
              if ('complete' !== document.readyState) {
                var t = function t() {
                  e(), window.removeEventListener('load', t);
                };
                return (
                  window.addEventListener('load', t),
                  function () {
                    return window.removeEventListener('load', t);
                  }
                );
              }
              e();
            }
          },
          [v, f, i],
        );
        var E = Object(a.useState)(!1),
          w = Object(d.a)(E, 2),
          O = w[0],
          x = w[1];
        Object(a.useEffect)(
          function () {
            return (
              y &&
                (y.on('connect', function () {
                  var e;
                  if (null === (e = y) || void 0 === e ? void 0 : e.publicKey) {
                    console.log('connected'),
                      localStorage.removeItem('feeDiscountKey'),
                      x(!0);
                    var t = y.publicKey.toBase58();
                    ae({
                      message: 'Wallet update',
                      description:
                        'Connected to wallet ' +
                        (t.length > 20
                          ? ''
                              .concat(t.substring(0, 7), '.....')
                              .concat(t.substring(t.length - 7, t.length))
                          : t),
                    });
                  }
                }),
                y.on('disconnect', function () {
                  x(!1),
                    ae({
                      message: 'Wallet update',
                      description: 'Disconnected from wallet',
                    }),
                    localStorage.removeItem('feeDiscountKey');
                })),
              function () {
                x(!1), y && y.connected && (y.disconnect(), x(!1));
              }
            );
          },
          [y],
        ),
          Object(a.useEffect)(
            function () {
              return y && l && (y.connect(), u(!1)), function () {};
            },
            [y, l],
          );
        var S = Object(a.useState)(!1),
          j = Object(d.a)(S, 2),
          T = j[0],
          C = j[1],
          A = Object(a.useCallback)(function () {
            return C(!0);
          }, []),
          I = Object(a.useCallback)(function () {
            return C(!1);
          }, []);
        return o.a.createElement(
          Ee.Provider,
          {
            value: {
              wallet: y,
              connected: O,
              select: A,
              providerUrl: f,
              setProviderUrl: b,
              providerName:
                null !==
                  (t =
                    null ===
                      (n = ke.find(function (e) {
                        return e.url === f;
                      })) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== t
                  ? t
                  : f,
            },
          },
          r,
          o.a.createElement(
            oe.a,
            {
              title: 'Select Wallet',
              okText: 'Connect',
              visible: T,
              okButtonProps: { style: { display: 'none' } },
              onCancel: I,
              width: 400,
            },
            ke.map(function (e) {
              return o.a.createElement(
                ie.a,
                {
                  size: 'large',
                  type: f === e.url ? 'primary' : 'ghost',
                  onClick: function () {
                    b(e.url), u(!0), I();
                  },
                  icon: o.a.createElement('img', {
                    alt: ''.concat(e.name),
                    width: 20,
                    height: 20,
                    src: e.icon,
                    style: { marginRight: 8 },
                  }),
                  style: {
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: 8,
                  },
                },
                e.name,
              );
            }),
          ),
        );
      }
      function Oe() {
        var e = Object(a.useContext)(Ee);
        if (!e) throw new Error('Missing wallet context');
        var t = e.wallet;
        return {
          connected: e.connected,
          wallet: t,
          providerUrl: e.providerUrl,
          setProvider: e.setProviderUrl,
          providerName: e.providerName,
          select: e.select,
          connect: function () {
            t ? t.connect() : e.select();
          },
          disconnect: function () {
            null === t || void 0 === t || t.disconnect();
          },
        };
      }
      var xe,
        Se = n(52),
        je = n(53),
        _e = Object(je.a)(
          xe ||
            (xe = Object(Se.a)([
              '\nhtml,body{\n  background: #11161D;\n}\ninput[type=number]::-webkit-inner-spin-button {\n  opacity: 0;\n}\ninput[type=number]:hover::-webkit-inner-spin-button,\ninput[type=number]:focus::-webkit-inner-spin-button {\n  opacity: 0.25;\n}\n/* width */\n::-webkit-scrollbar {\n  width: 15px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #2d313c;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #5b5f67;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #5b5f67;\n}\n.ant-slider-track, .ant-slider:hover .ant-slider-track {\n  background-color: #2abdd2;\n  opacity: 0.75;\n}\n.ant-slider-track,\n.ant-slider ant-slider-track:hover {\n  background-color: #2abdd2;\n  opacity: 0.75;\n}\n.ant-slider-dot-active,\n.ant-slider-handle,\n.ant-slider-handle-click-focused,\n.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {\n  border: 2px solid #2abdd2; \n}\n.ant-table-tbody > tr.ant-table-row:hover > td {\n  background: #273043;\n}\n.ant-table-tbody > tr > td {\n  border-bottom: 8px solid #1A2029;\n}\n.ant-table-container table > thead > tr:first-child th {\n  border-bottom: none;\n}\n.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {\n  border-top: 1px solid #434a59 !important;\n}\n.ant-layout {\n    background: #11161D\n  }\n  .ant-table {\n    background: #212734;\n  }\n  .ant-table-thead > tr > th {\n    background: #1A2029;\n  }\n.ant-select-item-option-content {\n  img {\n    margin-right: 4px;\n  }\n}\n.ant-modal-content {\n  background-color: #212734;\n}\n\n@-webkit-keyframes highlight {\n  from { background-color: #2abdd2;}\n  to {background-color: #1A2029;}\n}\n@-moz-keyframes highlight {\n  from { background-color: #2abdd2;}\n  to {background-color: #1A2029;}\n}\n@-keyframes highlight {\n  from { background-color: #2abdd2;}\n  to {background-color: #1A2029;}\n}\n.flash {\n  -moz-animation: highlight 0.5s ease 0s 1 alternate ;\n  -webkit-animation: highlight 0.5s ease 0s 1 alternate;\n  animation: highlight 0.5s ease 0s 1 alternate;\n}',
            ])),
        ),
        Te = n(469),
        Ce = n(800),
        Ae = Ce.a.Title,
        Ie = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(se.a)(n);
          function n() {
            var e;
            Object(P.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                hasError: !1,
              }),
              e
            );
          }
          return (
            Object(I.a)(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    return this.state.hasError
                      ? o.a.createElement(
                          'div',
                          null,
                          o.a.createElement(
                            'div',
                            null,
                            o.a.createElement(
                              Ae,
                              { level: 2 },
                              'Something went wrong.',
                            ),
                            o.a.createElement(
                              Ae,
                              { level: 4 },
                              'Please try again later.',
                            ),
                          ),
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ],
            ),
            n
          );
        })(a.Component),
        Pe = n(68),
        Me = n(140),
        Fe = n(791),
        Re = n(792),
        Be = n(486),
        Ke = n(13),
        Ne = n(37),
        ze = n(5),
        De = n(113),
        Le = n(141),
        qe = n(9),
        We = n(144);
      function Ue(e) {
        return He.apply(this, arguments);
      }
      function He() {
        return (He = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.connection,
                      (n = t.wallet),
                      (r = t.mintPublicKey),
                      (e.next = 3),
                      Le.c.getAssociatedTokenAddress(Le.a, Le.b, r, n.publicKey)
                    );
                  case 3:
                    return (
                      (a = e.sent),
                      (o = new m.Transaction()).add(
                        Le.c.createAssociatedTokenAccountInstruction(
                          Le.a,
                          Le.b,
                          r,
                          a,
                          n.publicKey,
                          n.publicKey,
                        ),
                      ),
                      e.abrupt('return', {
                        transaction: o,
                        newAccountPubkey: a,
                      })
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Je(e) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = Object(u.a)(
          l.a.mark(function e(t) {
            var n,
              r,
              a,
              o,
              i,
              c,
              s,
              u,
              d,
              p,
              m,
              f,
              b,
              v,
              h,
              g,
              y,
              k,
              E,
              w,
              O,
              x,
              S,
              j;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.market),
                      (r = t.openOrders),
                      (a = t.connection),
                      (o = t.wallet),
                      (i = t.baseCurrencyAccount),
                      (c = t.quoteCurrencyAccount),
                      (s = t.sendNotification),
                      (u = void 0 === s || s),
                      (d = t.usdcRef),
                      (p = void 0 === d ? void 0 : d),
                      (m = t.usdtRef),
                      (f = void 0 === m ? void 0 : m),
                      n && o && a && r && (i || c))
                    ) {
                      e.next = 4;
                      break;
                    }
                    return (
                      u && ae({ message: 'Not connected' }), e.abrupt('return')
                    );
                  case 4:
                    if (
                      ((v = null === i || void 0 === i ? void 0 : i.pubkey),
                      (h = null === c || void 0 === c ? void 0 : c.pubkey),
                      v)
                    ) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (e.next = 9),
                      Ue({
                        connection: a,
                        wallet: o,
                        mintPublicKey: n.baseMintAddress,
                      })
                    );
                  case 9:
                    (g = e.sent),
                      (v =
                        null === g || void 0 === g
                          ? void 0
                          : g.newAccountPubkey),
                      (b = null === g || void 0 === g ? void 0 : g.transaction);
                  case 12:
                    if (h) {
                      e.next = 18;
                      break;
                    }
                    return (
                      (e.next = 15),
                      Ue({
                        connection: a,
                        wallet: o,
                        mintPublicKey: n.quoteMintAddress,
                      })
                    );
                  case 15:
                    (y = e.sent),
                      (h =
                        null === y || void 0 === y
                          ? void 0
                          : y.newAccountPubkey),
                      (b = null === y || void 0 === y ? void 0 : y.transaction);
                  case 18:
                    return (
                      (k = null),
                      n.supportsReferralFees &&
                        ((E = Ne.TOKEN_MINTS.find(function (e) {
                          return 'USDT' === e.name;
                        })),
                        (w = Ne.TOKEN_MINTS.find(function (e) {
                          return 'USDC' === e.name;
                        })),
                        f && E && n.quoteMintAddress.equals(E.address)
                          ? (k = f)
                          : p &&
                            w &&
                            n.quoteMintAddress.equals(w.address) &&
                            (k = p)),
                      (e.next = 22),
                      n.makeSettleFundsTransaction(a, r, v, h, k)
                    );
                  case 22:
                    return (
                      (O = e.sent),
                      (x = O.transaction),
                      (S = O.signers),
                      (j = bt([b, x])),
                      (e.next = 28),
                      ot({
                        transaction: j,
                        signers: S,
                        wallet: o,
                        connection: a,
                        sendingMessage: 'Settling funds...',
                        sendNotification: u,
                      })
                    );
                  case 28:
                    return e.abrupt('return', e.sent);
                  case 29:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ge(e) {
        return Qe.apply(this, arguments);
      }
      function Qe() {
        return (Qe = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, i, c, s, d, p, m, f, b, v;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.connection),
                      (r = t.wallet),
                      (a = t.tokenAccounts),
                      (o = t.markets),
                      (i = t.selectedTokenAccounts),
                      o && r && n && a)
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return');
                  case 3:
                    return (
                      (c = []),
                      o
                        .reduce(function (e, t) {
                          return e.push(t._programId), e;
                        }, [])
                        .forEach(function (e) {
                          c.find(function (t) {
                            return t.equals(e);
                          }) || c.push(e);
                        }),
                      (s = (function () {
                        var e = Object(u.a)(
                          l.a.mark(function e(t) {
                            var a;
                            return l.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      Ne.OpenOrders.findForOwner(
                                        n,
                                        r.publicKey,
                                        t,
                                      )
                                    );
                                  case 2:
                                    return (
                                      (a = e.sent),
                                      e.abrupt(
                                        'return',
                                        a.filter(function (e) {
                                          return (
                                            e.baseTokenFree.toNumber() ||
                                            e.quoteTokenFree.toNumber()
                                          );
                                        }),
                                      )
                                    );
                                  case 4:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()),
                      (e.next = 8),
                      Promise.all(
                        c.map(function (e) {
                          return s(e);
                        }),
                      )
                    );
                  case 8:
                    return (
                      (d = e.sent),
                      (p = d.reduce(function (e, t) {
                        return e.concat(t);
                      }, [])),
                      (e.next = 12),
                      Promise.all(
                        p.map(function (e) {
                          var t,
                            r,
                            c = o.find(function (t) {
                              var n, r;
                              return null === (n = t._decoded) ||
                                void 0 === n ||
                                null === (r = n.ownAddress) ||
                                void 0 === r
                                ? void 0
                                : r.equals(e.market);
                            });
                          if (
                            e.baseTokenFree.isZero() &&
                            e.quoteTokenFree.isZero()
                          )
                            return null;
                          var s =
                              null === c || void 0 === c
                                ? void 0
                                : c.baseMintAddress,
                            l =
                              null === c || void 0 === c
                                ? void 0
                                : c.quoteMintAddress,
                            u =
                              null ===
                                (t = tn(a, s, s && i && i[s.toBase58()])) ||
                              void 0 === t
                                ? void 0
                                : t.pubkey,
                            d =
                              null ===
                                (r = tn(a, l, l && i && i[l.toBase58()])) ||
                              void 0 === r
                                ? void 0
                                : r.pubkey;
                          return u && d
                            ? c && c.makeSettleFundsTransaction(n, e, u, d)
                            : null;
                        }),
                      )
                    );
                  case 12:
                    if (
                      (m = e.sent.filter(function (e) {
                        return !!e;
                      })) &&
                      0 !== m.length
                    ) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt('return');
                  case 15:
                    return (
                      (f = m.slice(0, 4).map(function (e) {
                        return e.transaction;
                      })),
                      (b = []),
                      m
                        .reduce(function (e, t) {
                          return e.concat(t.signers);
                        }, [])
                        .forEach(function (e) {
                          b.find(function (t) {
                            return t.publicKey.equals(e.publicKey);
                          }) || b.push(e);
                        }),
                      (v = bt(f)),
                      (e.next = 21),
                      ot({
                        transaction: v,
                        signers: b,
                        wallet: r,
                        connection: n,
                      })
                    );
                  case 21:
                    return e.abrupt('return', e.sent);
                  case 22:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ye(e) {
        return Xe.apply(this, arguments);
      }
      function Xe() {
        return (Xe = Object(u.a)(
          l.a.mark(function e(t) {
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Ze(
                        Object(Ke.a)(
                          Object(Ke.a)({}, t),
                          {},
                          { orders: [t.order] },
                        ),
                      ),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ze(e) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, i;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.market),
                      (r = t.wallet),
                      (a = t.connection),
                      (o = t.orders),
                      (i = n.makeMatchOrdersTransaction(5)),
                      o.forEach(function (e) {
                        i.add(n.makeCancelOrderInstruction(a, r.publicKey, e));
                      }),
                      i.add(n.makeMatchOrdersTransaction(5)),
                      (e.next = 6),
                      ot({
                        transaction: i,
                        wallet: r,
                        connection: a,
                        sendingMessage: 'Sending cancel...',
                      })
                    );
                  case 6:
                    return e.abrupt('return', e.sent);
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function et(e) {
        return tt.apply(this, arguments);
      }
      function tt() {
        return (tt = Object(u.a)(
          l.a.mark(function e(t) {
            var n,
              r,
              a,
              o,
              i,
              c,
              s,
              u,
              d,
              p,
              f,
              b,
              v,
              h,
              g,
              y,
              k,
              E,
              O,
              x,
              S,
              j,
              _,
              T,
              C,
              I,
              P,
              M,
              F,
              R,
              B,
              K,
              N;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((a = t.side),
                      (o = t.price),
                      (i = t.size),
                      (c = t.orderType),
                      (s = t.market),
                      (u = t.connection),
                      (d = t.wallet),
                      (p = t.baseCurrencyAccount),
                      (f = t.quoteCurrencyAccount),
                      (b = t.feeDiscountPubkey),
                      (v = void 0 === b ? void 0 : b),
                      (h =
                        (null === s ||
                        void 0 === s ||
                        null === (n = s.minOrderSize) ||
                        void 0 === n
                          ? void 0
                          : n.toFixed(w(s.minOrderSize))) ||
                        (null === s || void 0 === s ? void 0 : s.minOrderSize)),
                      (g =
                        (null === s ||
                        void 0 === s ||
                        null === (r = s.tickSize) ||
                        void 0 === r
                          ? void 0
                          : r.toFixed(w(s.tickSize))) ||
                        (null === s || void 0 === s ? void 0 : s.tickSize)),
                      (y = function (e, t) {
                        return (
                          Math.abs((e / t) % 1) < 1e-5 ||
                          Math.abs(((e / t) % 1) - 1) < 1e-5
                        );
                      }),
                      !isNaN(o))
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (
                      ae({ message: 'Invalid price', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 7:
                    if (!isNaN(i)) {
                      e.next = 10;
                      break;
                    }
                    return (
                      ae({ message: 'Invalid size', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 10:
                    if (d && d.publicKey) {
                      e.next = 13;
                      break;
                    }
                    return (
                      ae({ message: 'Connect wallet', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 13:
                    if (s) {
                      e.next = 16;
                      break;
                    }
                    return (
                      ae({ message: 'Invalid  market', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 16:
                    if (y(i, s.minOrderSize)) {
                      e.next = 19;
                      break;
                    }
                    return (
                      ae({
                        message: 'Size must be an increment of '.concat(h),
                        type: 'error',
                      }),
                      e.abrupt('return')
                    );
                  case 19:
                    if (!(i < s.minOrderSize)) {
                      e.next = 22;
                      break;
                    }
                    return (
                      ae({ message: 'Size too small', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 22:
                    if (y(o, s.tickSize)) {
                      e.next = 25;
                      break;
                    }
                    return (
                      ae({
                        message: 'Price must be an increment of '.concat(g),
                        type: 'error',
                      }),
                      e.abrupt('return')
                    );
                  case 25:
                    if (!(o < s.tickSize)) {
                      e.next = 28;
                      break;
                    }
                    return (
                      ae({ message: 'Price under tick size', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 28:
                    if (
                      ((k = d.publicKey),
                      (E = new m.Transaction()),
                      (O = []),
                      p)
                    ) {
                      e.next = 39;
                      break;
                    }
                    return (
                      (e.next = 34),
                      Ue({
                        connection: u,
                        wallet: d,
                        mintPublicKey: s.baseMintAddress,
                      })
                    );
                  case 34:
                    (x = e.sent),
                      (S = x.transaction),
                      (j = x.newAccountPubkey),
                      E.add(S),
                      (p = j);
                  case 39:
                    if (f) {
                      e.next = 47;
                      break;
                    }
                    return (
                      (e.next = 42),
                      Ue({
                        connection: u,
                        wallet: d,
                        mintPublicKey: s.quoteMintAddress,
                      })
                    );
                  case 42:
                    (_ = e.sent),
                      (T = _.transaction),
                      (C = _.newAccountPubkey),
                      E.add(T),
                      (f = C);
                  case 47:
                    if ((I = 'sell' === a ? p : f)) {
                      e.next = 51;
                      break;
                    }
                    return (
                      ae({
                        message: 'Need an SPL token account for cost currency',
                        type: 'error',
                      }),
                      e.abrupt('return')
                    );
                  case 51:
                    return (
                      (P = {
                        owner: k,
                        payer: I,
                        side: a,
                        price: o,
                        size: i,
                        orderType: c,
                        feeDiscountPubkey: v || null,
                      }),
                      console.log(P),
                      (M = s.makeMatchOrdersTransaction(5)),
                      E.add(M),
                      (F = at()),
                      (e.next = 58),
                      s.makePlaceOrderTransaction(u, P, 12e4, 12e4)
                    );
                  case 58:
                    return (
                      (R = e.sent),
                      (B = R.transaction),
                      (K = R.signers),
                      (N = at()),
                      console.log(
                        'Creating order transaction took '.concat(N - F),
                      ),
                      E.add(B),
                      E.add(s.makeMatchOrdersTransaction(5)),
                      O.push.apply(O, Object(A.a)(K)),
                      (e.next = 68),
                      ot({
                        transaction: E,
                        wallet: d,
                        connection: u,
                        signers: O,
                        sendingMessage: 'Sending order...',
                      })
                    );
                  case 68:
                    return e.abrupt('return', e.sent);
                  case 69:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function nt(e) {
        return rt.apply(this, arguments);
      }
      function rt() {
        return (rt = Object(u.a)(
          l.a.mark(function e(t) {
            var n,
              r,
              a,
              o,
              i,
              c,
              s,
              f,
              v,
              h,
              g,
              y,
              k,
              E,
              w,
              O,
              x,
              S,
              j,
              _,
              T,
              C,
              A,
              I,
              P,
              M,
              F,
              R;
            return l.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (S = function () {
                          return (S = Object(u.a)(
                            l.a.mark(function e() {
                              var t, n;
                              return l.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        t = new b.a(0);
                                      case 1:
                                        return (
                                          (e.prev = 2),
                                          (e.next = 5),
                                          m.PublicKey.createProgramAddress(
                                            [
                                              f.publicKey.toBuffer(),
                                              t.toArrayLike(qe.Buffer, 'le', 8),
                                            ],
                                            s,
                                          )
                                        );
                                      case 5:
                                        return (
                                          (n = e.sent),
                                          e.abrupt('return', [n, t])
                                        );
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(2)),
                                          t.iaddn(1);
                                      case 12:
                                        e.next = 1;
                                        break;
                                      case 14:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[2, 9]],
                              );
                            }),
                          )).apply(this, arguments);
                        }),
                        (x = function () {
                          return S.apply(this, arguments);
                        }),
                        (n = t.connection),
                        (r = t.wallet),
                        (a = t.baseMint),
                        (o = t.quoteMint),
                        (i = t.baseLotSize),
                        (c = t.quoteLotSize),
                        (s = t.dexProgramId),
                        (f = new m.Account()),
                        (v = new m.Account()),
                        (h = new m.Account()),
                        (g = new m.Account()),
                        (y = new m.Account()),
                        (k = new m.Account()),
                        (E = new m.Account()),
                        (w = 0),
                        (O = new b.a(100)),
                        (e.next = 14),
                        x()
                      );
                    case 14:
                      return (
                        (j = e.sent),
                        (_ = Object(d.a)(j, 2)),
                        (T = _[0]),
                        (C = _[1]),
                        (A = new m.Transaction()),
                        (e.t0 = A),
                        (e.t1 = m.SystemProgram),
                        (e.t2 = r.publicKey),
                        (e.t3 = k.publicKey),
                        (e.next = 25),
                        n.getMinimumBalanceForRentExemption(165)
                      );
                    case 25:
                      return (
                        (e.t4 = e.sent),
                        (e.t5 = Ne.TokenInstructions.TOKEN_PROGRAM_ID),
                        (e.t6 = {
                          fromPubkey: e.t2,
                          newAccountPubkey: e.t3,
                          lamports: e.t4,
                          space: 165,
                          programId: e.t5,
                        }),
                        (e.t7 = e.t1.createAccount.call(e.t1, e.t6)),
                        (e.t8 = m.SystemProgram),
                        (e.t9 = r.publicKey),
                        (e.t10 = E.publicKey),
                        (e.next = 34),
                        n.getMinimumBalanceForRentExemption(165)
                      );
                    case 34:
                      return (
                        (e.t11 = e.sent),
                        (e.t12 = Ne.TokenInstructions.TOKEN_PROGRAM_ID),
                        (e.t13 = {
                          fromPubkey: e.t9,
                          newAccountPubkey: e.t10,
                          lamports: e.t11,
                          space: 165,
                          programId: e.t12,
                        }),
                        (e.t14 = e.t8.createAccount.call(e.t8, e.t13)),
                        (e.t15 = Ne.TokenInstructions.initializeAccount({
                          account: k.publicKey,
                          mint: a,
                          owner: T,
                        })),
                        (e.t16 = Ne.TokenInstructions.initializeAccount({
                          account: E.publicKey,
                          mint: o,
                          owner: T,
                        })),
                        e.t0.add.call(e.t0, e.t7, e.t14, e.t15, e.t16),
                        (I = new m.Transaction()),
                        (e.t17 = I),
                        (e.t18 = m.SystemProgram),
                        (e.t19 = r.publicKey),
                        (e.t20 = f.publicKey),
                        (e.next = 48),
                        n.getMinimumBalanceForRentExemption(
                          Ne.Market.getLayout(s).span,
                        )
                      );
                    case 48:
                      return (
                        (e.t21 = e.sent),
                        (e.t22 = Ne.Market.getLayout(s).span),
                        (e.t23 = s),
                        (e.t24 = {
                          fromPubkey: e.t19,
                          newAccountPubkey: e.t20,
                          lamports: e.t21,
                          space: e.t22,
                          programId: e.t23,
                        }),
                        (e.t25 = e.t18.createAccount.call(e.t18, e.t24)),
                        (e.t26 = m.SystemProgram),
                        (e.t27 = r.publicKey),
                        (e.t28 = v.publicKey),
                        (e.next = 58),
                        n.getMinimumBalanceForRentExemption(5132)
                      );
                    case 58:
                      return (
                        (e.t29 = e.sent),
                        (e.t30 = 5132),
                        (e.t31 = s),
                        (e.t32 = {
                          fromPubkey: e.t27,
                          newAccountPubkey: e.t28,
                          lamports: e.t29,
                          space: e.t30,
                          programId: e.t31,
                        }),
                        (e.t33 = e.t26.createAccount.call(e.t26, e.t32)),
                        (e.t34 = m.SystemProgram),
                        (e.t35 = r.publicKey),
                        (e.t36 = h.publicKey),
                        (e.next = 68),
                        n.getMinimumBalanceForRentExemption(262156)
                      );
                    case 68:
                      return (
                        (e.t37 = e.sent),
                        (e.t38 = 262156),
                        (e.t39 = s),
                        (e.t40 = {
                          fromPubkey: e.t35,
                          newAccountPubkey: e.t36,
                          lamports: e.t37,
                          space: e.t38,
                          programId: e.t39,
                        }),
                        (e.t41 = e.t34.createAccount.call(e.t34, e.t40)),
                        (e.t42 = m.SystemProgram),
                        (e.t43 = r.publicKey),
                        (e.t44 = g.publicKey),
                        (e.next = 78),
                        n.getMinimumBalanceForRentExemption(65548)
                      );
                    case 78:
                      return (
                        (e.t45 = e.sent),
                        (e.t46 = 65548),
                        (e.t47 = s),
                        (e.t48 = {
                          fromPubkey: e.t43,
                          newAccountPubkey: e.t44,
                          lamports: e.t45,
                          space: e.t46,
                          programId: e.t47,
                        }),
                        (e.t49 = e.t42.createAccount.call(e.t42, e.t48)),
                        (e.t50 = m.SystemProgram),
                        (e.t51 = r.publicKey),
                        (e.t52 = y.publicKey),
                        (e.next = 88),
                        n.getMinimumBalanceForRentExemption(65548)
                      );
                    case 88:
                      return (
                        (e.t53 = e.sent),
                        (e.t54 = 65548),
                        (e.t55 = s),
                        (e.t56 = {
                          fromPubkey: e.t51,
                          newAccountPubkey: e.t52,
                          lamports: e.t53,
                          space: e.t54,
                          programId: e.t55,
                        }),
                        (e.t57 = e.t50.createAccount.call(e.t50, e.t56)),
                        (e.t58 = Ne.DexInstructions.initializeMarket({
                          market: f.publicKey,
                          requestQueue: v.publicKey,
                          eventQueue: h.publicKey,
                          bids: g.publicKey,
                          asks: y.publicKey,
                          baseVault: k.publicKey,
                          quoteVault: E.publicKey,
                          baseMint: a,
                          quoteMint: o,
                          baseLotSize: new b.a(i),
                          quoteLotSize: new b.a(c),
                          feeRateBps: w,
                          vaultSignerNonce: C,
                          quoteDustThreshold: O,
                          programId: s,
                          authority: void 0,
                        })),
                        e.t17.add.call(
                          e.t17,
                          e.t25,
                          e.t33,
                          e.t41,
                          e.t49,
                          e.t57,
                          e.t58,
                        ),
                        (e.next = 97),
                        lt({
                          transactionsAndSigners: [
                            { transaction: A, signers: [k, E] },
                            { transaction: I, signers: [f, v, h, g, y] },
                          ],
                          wallet: r,
                          connection: n,
                        })
                      );
                    case 97:
                      (P = e.sent), (M = Object(p.a)(P)), (e.prev = 99), M.s();
                    case 101:
                      if ((F = M.n()).done) {
                        e.next = 107;
                        break;
                      }
                      return (
                        (R = F.value),
                        (e.next = 105),
                        dt({ signedTransaction: R, connection: n })
                      );
                    case 105:
                      e.next = 101;
                      break;
                    case 107:
                      e.next = 112;
                      break;
                    case 109:
                      (e.prev = 109), (e.t59 = e.catch(99)), M.e(e.t59);
                    case 112:
                      return (e.prev = 112), M.f(), e.finish(112);
                    case 115:
                      return e.abrupt('return', f.publicKey);
                    case 116:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[99, 109, 112, 115]],
            );
          }),
        )).apply(this, arguments);
      }
      var at = function () {
        return new Date().getTime() / 1e3;
      };
      function ot(e) {
        return it.apply(this, arguments);
      }
      function it() {
        return (it = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, i, c, s, u, d, p, m, f, b, v, h, g;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.transaction),
                      (r = t.wallet),
                      (a = t.signers),
                      (o = void 0 === a ? [] : a),
                      (i = t.connection),
                      (c = t.sendingMessage),
                      (s = void 0 === c ? 'Sending transaction...' : c),
                      (u = t.sentMessage),
                      (d = void 0 === u ? 'Transaction sent' : u),
                      (p = t.successMessage),
                      (m = void 0 === p ? 'Transaction confirmed' : p),
                      (f = t.timeout),
                      (b = void 0 === f ? 15e3 : f),
                      (v = t.sendNotification),
                      (h = void 0 === v || v),
                      (e.next = 3),
                      ct({
                        transaction: n,
                        wallet: r,
                        signers: o,
                        connection: i,
                      })
                    );
                  case 3:
                    return (
                      (g = e.sent),
                      (e.next = 6),
                      dt({
                        signedTransaction: g,
                        connection: i,
                        sendingMessage: s,
                        sentMessage: d,
                        successMessage: m,
                        timeout: b,
                        sendNotification: h,
                      })
                    );
                  case 6:
                    return e.abrupt('return', e.sent);
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function ct(e) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, i;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.transaction),
                      (r = t.wallet),
                      (a = t.signers),
                      (o = void 0 === a ? [] : a),
                      (i = t.connection),
                      (e.next = 3),
                      i.getRecentBlockhash('max')
                    );
                  case 3:
                    return (
                      (n.recentBlockhash = e.sent.blockhash),
                      n.setSigners.apply(
                        n,
                        [r.publicKey].concat(
                          Object(A.a)(
                            o.map(function (e) {
                              return e.publicKey;
                            }),
                          ),
                        ),
                      ),
                      o.length > 0 && n.partialSign.apply(n, Object(A.a)(o)),
                      (e.next = 8),
                      r.signTransaction(n)
                    );
                  case 8:
                    return e.abrupt('return', e.sent);
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function lt(e) {
        return ut.apply(this, arguments);
      }
      function ut() {
        return (ut = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.transactionsAndSigners),
                      (r = t.wallet),
                      (a = t.connection),
                      (e.next = 3),
                      a.getRecentBlockhash('max')
                    );
                  case 3:
                    return (
                      (o = e.sent.blockhash),
                      n.forEach(function (e) {
                        var t = e.transaction,
                          n = e.signers,
                          a = void 0 === n ? [] : n;
                        (t.recentBlockhash = o),
                          t.setSigners.apply(
                            t,
                            [r.publicKey].concat(
                              Object(A.a)(
                                a.map(function (e) {
                                  return e.publicKey;
                                }),
                              ),
                            ),
                          ),
                          (null === a || void 0 === a ? void 0 : a.length) >
                            0 && t.partialSign.apply(t, Object(A.a)(a));
                      }),
                      (e.next = 7),
                      r.signAllTransactions(
                        n.map(function (e) {
                          return e.transaction;
                        }),
                      )
                    );
                  case 7:
                    return e.abrupt('return', e.sent);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function dt(e) {
        return pt.apply(this, arguments);
      }
      function pt() {
        return (pt = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, i, c, s, d, p, m, f, b, v, g, y, k, E, w, O, x, S;
            return l.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.signedTransaction),
                        (r = t.connection),
                        (a = t.sendingMessage),
                        (o = void 0 === a ? 'Sending transaction...' : a),
                        (i = t.sentMessage),
                        (c = void 0 === i ? 'Transaction sent' : i),
                        (s = t.successMessage),
                        (d = void 0 === s ? 'Transaction confirmed' : s),
                        (p = t.timeout),
                        (m = void 0 === p ? 15e3 : p),
                        (f = t.sendNotification),
                        (b = void 0 === f || f),
                        (v = n.serialize()),
                        (g = at()),
                        b && ae({ message: o }),
                        (e.next = 6),
                        r.sendRawTransaction(v, { skipPreflight: !0 })
                      );
                    case 6:
                      return (
                        (y = e.sent),
                        b && ae({ message: c, type: 'success', txid: y }),
                        console.log('Started awaiting confirmation for', y),
                        (k = !1),
                        Object(u.a)(
                          l.a.mark(function e() {
                            return l.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (k || !(at() - g < m)) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (
                                      r.sendRawTransaction(v, {
                                        skipPreflight: !0,
                                      }),
                                      (e.next = 4),
                                      h(300)
                                    );
                                  case 4:
                                    e.next = 0;
                                    break;
                                  case 6:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          }),
                        )(),
                        (e.prev = 11),
                        (e.next = 14),
                        mt(y, m, r)
                      );
                    case 14:
                      e.next = 42;
                      break;
                    case 16:
                      if (
                        ((e.prev = 16), (e.t0 = e.catch(11)), !e.t0.timeout)
                      ) {
                        e.next = 20;
                        break;
                      }
                      throw new Error(
                        'Timed out awaiting confirmation on transaction',
                      );
                    case 20:
                      return (
                        (E = null),
                        (e.prev = 21),
                        (e.next = 24),
                        Et(r, n, 'single')
                      );
                    case 24:
                      (E = e.sent.value), (e.next = 29);
                      break;
                    case 27:
                      (e.prev = 27), (e.t1 = e.catch(21));
                    case 29:
                      if (!E || !E.err) {
                        e.next = 41;
                        break;
                      }
                      if (!E.logs) {
                        e.next = 39;
                        break;
                      }
                      w = E.logs.length - 1;
                    case 32:
                      if (!(w >= 0)) {
                        e.next = 39;
                        break;
                      }
                      if (!(O = E.logs[w]).startsWith('Program log: ')) {
                        e.next = 36;
                        break;
                      }
                      throw new Error(
                        'Transaction failed: ' +
                          O.slice('Program log: '.length),
                      );
                    case 36:
                      --w, (e.next = 32);
                      break;
                    case 39:
                      throw (
                        ('object' == typeof E.err && 'InstructionError' in E.err
                          ? ((S = Object(Ne.parseInstructionErrorResponse)(
                              n,
                              E.err.InstructionError,
                            )),
                            (x = S.error))
                          : (x = JSON.stringify(E.err)),
                        new Error(x))
                      );
                    case 41:
                      throw new Error('Transaction failed');
                    case 42:
                      return (e.prev = 42), (k = !0), e.finish(42);
                    case 45:
                      return (
                        b && ae({ message: d, type: 'success', txid: y }),
                        console.log('Latency', y, at() - g),
                        e.abrupt('return', y)
                      );
                    case 48:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [11, 16, 42, 45],
                [21, 27],
              ],
            );
          }),
        )).apply(this, arguments);
      }
      function mt(e, t, n) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = Object(u.a)(
          l.a.mark(function e(t, n, r) {
            var a, o;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = !1),
                      (e.next = 3),
                      new Promise(function (e, o) {
                        Object(u.a)(
                          l.a.mark(function i() {
                            return l.a.wrap(function (i) {
                              for (;;)
                                switch ((i.prev = i.next)) {
                                  case 0:
                                    setTimeout(function () {
                                      a ||
                                        ((a = !0),
                                        console.log('Timed out for txid', t),
                                        o({ timeout: !0 }));
                                    }, n);
                                    try {
                                      r.onSignature(
                                        t,
                                        function (n) {
                                          console.log('WS confirmed', t, n),
                                            (a = !0),
                                            n.err ? o(n.err) : e(n);
                                        },
                                        'recent',
                                      ),
                                        console.log('Set up WS connection', t);
                                    } catch (c) {
                                      (a = !0),
                                        console.log('WS error in setup', t, c);
                                    }
                                  case 2:
                                    if (a) {
                                      i.next = 8;
                                      break;
                                    }
                                    return (
                                      Object(u.a)(
                                        l.a.mark(function n() {
                                          var i, c;
                                          return l.a.wrap(
                                            function (n) {
                                              for (;;)
                                                switch ((n.prev = n.next)) {
                                                  case 0:
                                                    return (
                                                      (n.prev = 0),
                                                      (n.next = 3),
                                                      r.getSignatureStatuses([
                                                        t,
                                                      ])
                                                    );
                                                  case 3:
                                                    (i = n.sent),
                                                      (c = i && i.value[0]),
                                                      a ||
                                                        (c
                                                          ? c.err
                                                            ? (console.log(
                                                                'REST error for',
                                                                t,
                                                                c,
                                                              ),
                                                              (a = !0),
                                                              o(c.err))
                                                            : c.confirmations
                                                            ? (console.log(
                                                                'REST confirmation for',
                                                                t,
                                                                c,
                                                              ),
                                                              (a = !0),
                                                              e(c))
                                                            : console.log(
                                                                'REST no confirmations for',
                                                                t,
                                                                c,
                                                              )
                                                          : console.log(
                                                              'REST null result for',
                                                              t,
                                                              c,
                                                            )),
                                                      (n.next = 11);
                                                    break;
                                                  case 8:
                                                    (n.prev = 8),
                                                      (n.t0 = n.catch(0)),
                                                      a ||
                                                        console.log(
                                                          'REST connection error: txid',
                                                          t,
                                                          n.t0,
                                                        );
                                                  case 11:
                                                  case 'end':
                                                    return n.stop();
                                                }
                                            },
                                            n,
                                            null,
                                            [[0, 8]],
                                          );
                                        }),
                                      )(),
                                      (i.next = 6),
                                      h(300)
                                    );
                                  case 6:
                                    i.next = 2;
                                    break;
                                  case 8:
                                  case 'end':
                                    return i.stop();
                                }
                            }, i);
                          }),
                        )();
                      })
                    );
                  case 3:
                    return (o = e.sent), (a = !0), e.abrupt('return', o);
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function bt(e) {
        var t = new m.Transaction();
        return (
          e
            .filter(function (e) {
              return void 0 !== e;
            })
            .forEach(function (e) {
              t.add(e);
            }),
          t
        );
      }
      var vt,
        ht = Object(We.a)({
          executable: 'boolean',
          owner: 'string',
          lamports: 'number',
          data: 'any',
          rentEpoch: 'number?',
        }),
        gt =
          ((vt = We.a.array([We.a.union(['null', ht])])),
          (function (e) {
            var t = We.a.literal('2.0');
            return We.a.union([
              Object(We.a)({ jsonrpc: t, id: 'string', error: 'any' }),
              Object(We.a)({
                jsonrpc: t,
                id: 'string',
                error: 'null?',
                result: e,
              }),
            ]);
          })({ context: Object(We.a)({ slot: 'number' }), value: vt }));
      function yt(e, t) {
        return kt.apply(this, arguments);
      }
      function kt() {
        return (kt = Object(u.a)(
          l.a.mark(function e(t, n) {
            var r, a, o, i, c, s, u, d, f, b, v, h;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = [
                        n.map(function (e) {
                          return e.toBase58();
                        }),
                        { commitment: 'recent' },
                      ]),
                      (e.next = 3),
                      t._rpcRequest('getMultipleAccounts', r)
                    );
                  case 3:
                    if (((a = e.sent), !(o = gt(a)).error)) {
                      e.next = 7;
                      break;
                    }
                    throw new Error(
                      'failed to get info about accounts ' +
                        n
                          .map(function (e) {
                            return e.toBase58();
                          })
                          .join(', ') +
                        ': ' +
                        o.error.message,
                    );
                  case 7:
                    F()('undefined' !== typeof o.result),
                      (i = []),
                      (c = Object(p.a)(o.result.value));
                    try {
                      for (c.s(); !(s = c.n()).done; )
                        (u = s.value),
                          (d = null),
                          o.result.value &&
                            ((f = u.executable),
                            (b = u.owner),
                            (v = u.lamports),
                            (h = u.data),
                            F()('base64' === h[1]),
                            (d = {
                              executable: f,
                              owner: new m.PublicKey(b),
                              lamports: v,
                              data: qe.Buffer.from(h[0], 'base64'),
                            })),
                          i.push(d);
                    } catch (l) {
                      c.e(l);
                    } finally {
                      c.f();
                    }
                    return e.abrupt('return', {
                      context: { slot: o.result.context.slot },
                      value: Object.fromEntries(
                        i.map(function (e, t) {
                          return [n[t].toBase58(), e];
                        }),
                      ),
                    });
                  case 12:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Et(e, t, n) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = Object(u.a)(
          l.a.mark(function e(t, n, r) {
            var a, o, i, c, s;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      t._recentBlockhash(t._disableBlockhashCaching)
                    );
                  case 2:
                    return (
                      (n.recentBlockhash = e.sent),
                      (a = n.serializeMessage()),
                      (o = n._serialize(a)),
                      (i = o.toString('base64')),
                      (c = [i, { encoding: 'base64', commitment: r }]),
                      (e.next = 10),
                      t._rpcRequest('simulateTransaction', c)
                    );
                  case 10:
                    if (!(s = e.sent).error) {
                      e.next = 13;
                      break;
                    }
                    throw new Error(
                      'failed to simulate transaction: ' + s.error.message,
                    );
                  case 13:
                    return e.abrupt('return', s.result);
                  case 14:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var Ot = ze.struct([
          ze.blob(32, 'mint'),
          ze.blob(32, 'owner'),
          ze.nu64('amount'),
          ze.blob(93),
        ]),
        xt = ze.struct([
          ze.blob(36),
          ze.blob(8, 'supply'),
          ze.u8('decimals'),
          ze.u8('initialized'),
          ze.blob(36),
        ]);
      function St(e) {
        var t = Ot.decode(e),
          n = t.mint,
          r = t.owner,
          a = t.amount;
        return {
          mint: new m.PublicKey(n),
          owner: new m.PublicKey(r),
          amount: a,
        };
      }
      function jt(e) {
        var t = xt.decode(e),
          n = t.decimals,
          r = t.initialized,
          a = t.supply;
        return { decimals: n, initialized: !!r, supply: new b.a(a, 10, 'le') };
      }
      function _t(e) {
        return [
          { memcmp: { offset: Ot.offsetOf('owner'), bytes: e.toBase58() } },
          { dataSize: Ot.span },
        ];
      }
      var Tt = new m.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
      function Ct(e, t) {
        return At.apply(this, arguments);
      }
      function At() {
        return (At = Object(u.a)(
          l.a.mark(function e(t, n) {
            var r, a;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = _t(n)),
                      (e.next = 3),
                      t.getProgramAccounts(Tt, { filters: r })
                    );
                  case 3:
                    return (
                      (a = e.sent),
                      e.abrupt(
                        'return',
                        a.map(function (e) {
                          var t = e.pubkey,
                            n = e.account,
                            r = n.data,
                            a = n.executable,
                            o = n.owner,
                            i = n.lamports;
                          return {
                            publicKey: new m.PublicKey(t),
                            accountInfo: {
                              data: r,
                              executable: a,
                              owner: new m.PublicKey(o),
                              lamports: i,
                            },
                          };
                        }),
                      )
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function It(e, t) {
        return Pt.apply(this, arguments);
      }
      function Pt() {
        return (Pt = Object(u.a)(
          l.a.mark(function e(t, n) {
            var r, a, o, i, c;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), Promise.all([Ct(t, n), t.getAccountInfo(n)])
                    );
                  case 2:
                    return (
                      (r = e.sent),
                      (a = Object(d.a)(r, 2)),
                      (o = a[0]),
                      (i = a[1]),
                      (c = o.map(function (e) {
                        var t = e.publicKey,
                          n = e.accountInfo;
                        return {
                          pubkey: t,
                          account: n,
                          effectiveMint: St(n.data).mint,
                        };
                      })),
                      e.abrupt(
                        'return',
                        c.concat({
                          pubkey: n,
                          account: i,
                          effectiveMint: De.WRAPPED_SOL_MINT,
                        }),
                      )
                    );
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Mt() {
        var e = Wt().customMarkets;
        return Object(a.useMemo)(
          function () {
            return Object.fromEntries(
              Ne.TOKEN_MINTS.map(function (e) {
                return [e.address.toBase58(), e.name];
              }),
            );
          },
          [e.length],
        );
      }
      function Ft() {
        var e = G(),
          t = en(),
          n = Object(d.a)(t, 1)[0],
          r = Kt(),
          a = Object(d.a)(r, 1)[0],
          o = (n || [])
            .map(function (e) {
              return e.effectiveMint;
            })
            .concat(
              (a || []).map(function (e) {
                return e.market.baseMintAddress;
              }),
            )
            .concat(
              (a || []).map(function (e) {
                return e.market.quoteMintAddress;
              }),
            ),
          i = Object(A.a)(
            new Set(
              o.map(function (e) {
                return e.toBase58();
              }),
            ),
          ).map(function (e) {
            return new m.PublicKey(e);
          });
        return D(
          (function () {
            var t = Object(u.a)(
              l.a.mark(function t() {
                var n;
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), yt(e, i);
                      case 2:
                        return (
                          (n = t.sent),
                          t.abrupt(
                            'return',
                            Object.fromEntries(
                              Object.entries(n.value).map(function (e) {
                                var t = Object(d.a)(e, 2),
                                  n = t[0],
                                  r = t[1];
                                return [n, r && jt(r.data)];
                              }),
                            ),
                          )
                        );
                      case 4:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          Object(W.a)('getAllMintInfo', e, (n || []).length, (a || []).length),
          { refreshInterval: 5e6 },
        );
      }
      var Rt = (function () {
        function e() {
          Object(P.a)(this, e);
        }
        return (
          Object(I.a)(e, null, [
            {
              key: 'get',
              value: (function () {
                var e = Object(u.a)(
                  l.a.mark(function e(t) {
                    var n, r;
                    return l.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), fetch(this.URL + t)
                              );
                            case 3:
                              if (!(n = e.sent).ok) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 7), n.json();
                            case 7:
                              return (
                                (r = e.sent),
                                e.abrupt('return', r.success ? r.data : null)
                              );
                            case 9:
                              e.next = 14;
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  'Error fetching from Bonfida API '
                                    .concat(t, ': ')
                                    .concat(e.t0),
                                );
                            case 14:
                              return e.abrupt('return', null);
                            case 15:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 11]],
                    );
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'getRecentTrades',
              value: (function () {
                var t = Object(u.a)(
                  l.a.mark(function t(n) {
                    return l.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              'return',
                              e.get('trades/address/'.concat(n)),
                            );
                          case 1:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
      Rt.URL = 'https://serum-api.bonfida.com/';
      var Bt = Ne.MARKETS;
      function Kt() {
        var e = G(),
          t = Wt().customMarkets;
        return D(
          (function () {
            var n = Object(u.a)(
              l.a.mark(function n() {
                var r;
                return l.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          Promise.all(
                            mn(t).map(
                              (function () {
                                var t = Object(u.a)(
                                  l.a.mark(function t(n) {
                                    var r;
                                    return l.a.wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.prev = 0),
                                                (t.next = 3),
                                                Ne.Market.load(
                                                  e,
                                                  n.address,
                                                  {},
                                                  n.programId,
                                                )
                                              );
                                            case 3:
                                              return (
                                                (r = t.sent),
                                                t.abrupt('return', {
                                                  market: r,
                                                  marketName: n.name,
                                                  programId: n.programId,
                                                })
                                              );
                                            case 7:
                                              return (
                                                (t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                ae({
                                                  message:
                                                    'Error loading all market',
                                                  description: t.t0.message,
                                                  type: 'error',
                                                }),
                                                t.abrupt('return', null)
                                              );
                                            case 11:
                                            case 'end':
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      null,
                                      [[0, 7]],
                                    );
                                  }),
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })(),
                            ),
                          )
                        );
                      case 2:
                        return (
                          (r = n.sent),
                          n.abrupt(
                            'return',
                            r.filter(function (e) {
                              return !!e;
                            }),
                          )
                        );
                      case 4:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          Object(W.a)('getAllMarkets', t.length, e),
          { refreshInterval: Dt },
        );
      }
      function Nt() {
        var e,
          t = G(),
          n = Oe().wallet;
        function r() {
          return (r = Object(u.a)(
            l.a.mark(function e() {
              var r, a, o, i, c, s, u;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (n && t && n.publicKey) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return', []);
                      case 2:
                        console.log(
                          'refreshing useUnmigratedOpenOrdersAccounts',
                        ),
                          (r = []),
                          (a = Array.from(
                            new Set(
                              Bt.filter(function (e) {
                                return e.deprecated;
                              }).map(function (e) {
                                return e.programId.toBase58();
                              }),
                            ),
                          ).map(function (e) {
                            return new m.PublicKey(e);
                          })),
                          (i = Object(p.a)(a)),
                          (e.prev = 6),
                          i.s();
                      case 8:
                        if ((c = i.n()).done) {
                          e.next = 22;
                          break;
                        }
                        return (
                          (o = c.value),
                          (e.prev = 10),
                          (e.next = 13),
                          Ne.OpenOrders.findForOwner(t, n.publicKey, o)
                        );
                      case 13:
                        (s = e.sent),
                          (r = r.concat(
                            s
                              .filter(function (e) {
                                return (
                                  e.baseTokenTotal.toNumber() ||
                                  e.quoteTokenTotal.toNumber()
                                );
                              })
                              .filter(function (e) {
                                return Bt.some(function (t) {
                                  return (
                                    t.deprecated && t.address.equals(e.market)
                                  );
                                });
                              }),
                          )),
                          (e.next = 20);
                        break;
                      case 17:
                        (e.prev = 17),
                          (e.t0 = e.catch(10)),
                          console.log(
                            'Error loading deprecated markets',
                            null === (u = o) || void 0 === u
                              ? void 0
                              : u.toBase58(),
                            e.t0.message,
                          );
                      case 20:
                        e.next = 8;
                        break;
                      case 22:
                        e.next = 27;
                        break;
                      case 24:
                        (e.prev = 24), (e.t1 = e.catch(6)), i.e(e.t1);
                      case 27:
                        return (e.prev = 27), i.f(), e.finish(27);
                      case 30:
                        return e.abrupt('return', r);
                      case 31:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [6, 24, 27, 30],
                  [10, 17],
                ],
              );
            }),
          )).apply(this, arguments);
        }
        var a = Object(W.a)(
            'getUnmigratedOpenOrdersAccounts',
            t,
            null === n ||
              void 0 === n ||
              null === (e = n.publicKey) ||
              void 0 === e
              ? void 0
              : e.toBase58(),
          ),
          o = D(
            function () {
              return r.apply(this, arguments);
            },
            a,
            { refreshInterval: Dt },
          );
        return {
          accounts: Object(d.a)(o, 1)[0],
          refresh: function (e) {
            return L(a, e);
          },
        };
      }
      var zt = o.a.createContext(null),
        Dt = 5e6,
        Lt = Bt.find(function (e) {
          var t = e.name,
            n = e.deprecated;
          return 'SRM/USDT' === t && !n;
        });
      function qt(e, t) {
        var n, r;
        if (!e) return {};
        var a = mn(t).find(function (t) {
            return t.address.equals(e.address);
          }),
          o =
            ((null === e || void 0 === e ? void 0 : e.baseMintAddress) &&
              (null ===
                (n = Ne.TOKEN_MINTS.find(function (t) {
                  return t.address.equals(e.baseMintAddress);
                })) || void 0 === n
                ? void 0
                : n.name)) ||
            ((null === a || void 0 === a ? void 0 : a.baseLabel) &&
              ''.concat(
                null === a || void 0 === a ? void 0 : a.baseLabel,
                '*',
              )) ||
            'UNKNOWN',
          i =
            ((null === e || void 0 === e ? void 0 : e.quoteMintAddress) &&
              (null ===
                (r = Ne.TOKEN_MINTS.find(function (t) {
                  return t.address.equals(e.quoteMintAddress);
                })) || void 0 === r
                ? void 0
                : r.name)) ||
            ((null === a || void 0 === a ? void 0 : a.quoteLabel) &&
              ''.concat(
                null === a || void 0 === a ? void 0 : a.quoteLabel,
                '*',
              )) ||
            'UNKNOWN';
        return Object(Ke.a)(
          Object(Ke.a)({}, a),
          {},
          {
            marketName: null === a || void 0 === a ? void 0 : a.name,
            baseCurrency: o,
            quoteCurrency: i,
            marketInfo: a,
          },
        );
      }
      function Wt() {
        var e = _('customMarkets', []),
          t = Object(d.a)(e, 2);
        return { customMarkets: t[0], setCustomMarkets: t[1] };
      }
      function Ut(e) {
        var t = e.marketAddress,
          n = e.setMarketAddress,
          r = e.children,
          i = Wt(),
          c = i.customMarkets,
          s = i.setCustomMarkets,
          l = t && new m.PublicKey(t),
          u = G(),
          p = mn(c),
          f =
            l &&
            p.find(function (e) {
              return e.address.equals(l);
            });
        Object(a.useEffect)(function () {
          f &&
            f.deprecated &&
            (console.log('Switching markets from deprecated', f),
            Lt && n(Lt.address.toBase58()));
        }, []);
        var b = Object(a.useState)(),
          v = Object(d.a)(b, 2),
          h = v[0],
          g = v[1];
        return (
          Object(a.useEffect)(
            function () {
              var e;
              (h &&
                f &&
                (null === (e = h._decoded.ownAddress) || void 0 === e
                  ? void 0
                  : e.equals(
                      null === f || void 0 === f ? void 0 : f.address,
                    ))) ||
                (g(null),
                f && f.address
                  ? Ne.Market.load(u, f.address, {}, f.programId)
                      .then(g)
                      .catch(function (e) {
                        return ae({
                          message: 'Error loading market',
                          description: e.message,
                          type: 'error',
                        });
                      })
                  : ae({
                      message: 'Error loading market',
                      description: 'Please select a market from the dropdown',
                      type: 'error',
                    }));
            },
            [u, f],
          ),
          o.a.createElement(
            zt.Provider,
            {
              value: Object(Ke.a)(
                Object(Ke.a)({ market: h }, qt(h, c)),
                {},
                { setMarketAddress: n, customMarkets: c, setCustomMarkets: s },
              ),
            },
            r,
          )
        );
      }
      function Ht(e) {
        if (!e) {
          var t = localStorage.getItem('marketAddress');
          t && (e = JSON.parse(t)),
            (e =
              e ||
              (null === Lt || void 0 === Lt ? void 0 : Lt.address.toBase58()) ||
              '');
        }
        return '/market/'.concat(e);
      }
      function Jt() {
        var e = _('selectedTokenAccounts', {}),
          t = Object(d.a)(e, 2);
        return [t[0], t[1]];
      }
      function Vt() {
        var e = Object(a.useContext)(zt);
        if (!e) throw new Error('Missing market context');
        return e;
      }
      function Gt() {
        var e = Object(a.useState)(null),
          t = Object(d.a)(e, 2),
          n = t[0],
          r = t[1],
          o = Xt(),
          i = Object(d.a)(o, 1)[0],
          c = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 100,
              t = Qt(e);
            if (!t) return null;
            return t
              .filter(function (e) {
                return e.eventFlags.maker;
              })
              .map(function (e) {
                return Object(Ke.a)(
                  Object(Ke.a)({}, e),
                  {},
                  { side: 'buy' === e.side ? 'sell' : 'buy' },
                );
              });
          })();
        return (
          Object(a.useEffect)(
            function () {
              var e,
                t,
                n =
                  (null === i ||
                  void 0 === i ||
                  null === (e = i.bids) ||
                  void 0 === e
                    ? void 0
                    : e.length) > 0 && Number(i.bids[0][0]),
                a =
                  (null === i ||
                  void 0 === i ||
                  null === (t = i.asks) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 0 && Number(i.asks[0][0]),
                o = c && c.length > 0 && c[0].price,
                s =
                  n && a
                    ? o
                      ? [n, a, o].sort(function (e, t) {
                          return e - t;
                        })[1]
                      : (n + a) / 2
                    : null;
              r(s);
            },
            [i, c],
          ),
          n
        );
      }
      function Qt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1e4,
          t = Vt(),
          n = t.market,
          r = G();
        function a() {
          return o.apply(this, arguments);
        }
        function o() {
          return (o = Object(u.a)(
            l.a.mark(function t() {
              return l.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (n && r) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt('return', null);
                    case 2:
                      return (t.next = 4), n.loadFills(r, e);
                    case 4:
                      return t.abrupt('return', t.sent);
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )).apply(this, arguments);
        }
        var i = D(a, Object(W.a)('getUnfilteredTrades', n, r), {
            refreshInterval: 5e3,
          }),
          c = Object(d.a)(i, 1),
          s = c[0];
        return s;
      }
      function Yt() {
        var e = Vt().market,
          t = Z(e && e._decoded.bids),
          n = Z(e && e._decoded.asks);
        return {
          bidOrderbook: e && t ? Ne.Orderbook.decode(e, t) : null,
          askOrderbook: e && n ? Ne.Orderbook.decode(e, n) : null,
        };
      }
      function Xt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
          t = Yt(),
          n = t.bidOrderbook,
          r = t.askOrderbook,
          a = Vt(),
          o = a.market,
          i =
            n && o
              ? n.getL2(e).map(function (e) {
                  var t = Object(d.a)(e, 2);
                  return [t[0], t[1]];
                })
              : [],
          c =
            r && o
              ? r.getL2(e).map(function (e) {
                  var t = Object(d.a)(e, 2);
                  return [t[0], t[1]];
                })
              : [];
        return [{ bids: i, asks: c }, !!i || !!c];
      }
      function Zt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Vt(),
          n = t.market,
          r = Oe(),
          a = r.connected,
          o = r.wallet,
          i = G();
        function c() {
          return s.apply(this, arguments);
        }
        function s() {
          return (s = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (a && o) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', null);
                    case 2:
                      if (n) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt('return', null);
                    case 4:
                      return (
                        (e.next = 6),
                        n.findOpenOrdersAccountsForOwner(i, o.publicKey)
                      );
                    case 6:
                      return e.abrupt('return', e.sent);
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return D(c, Object(W.a)('getOpenOrdersAccounts', o, n, a), {
          refreshInterval: e ? 1e3 : 5e3,
        });
      }
      function $t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Zt(e),
          n = Object(d.a)(t, 1),
          r = n[0];
        return r ? r[0] : null;
      }
      function en() {
        var e = Oe(),
          t = e.connected,
          n = e.wallet,
          r = G();
        function a() {
          return (a = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', null);
                    case 2:
                      return (e.next = 4), It(r, n.publicKey);
                    case 4:
                      return e.abrupt('return', e.sent);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return D(
          function () {
            return a.apply(this, arguments);
          },
          Object(W.a)('getTokenAccounts', n, t),
          { refreshInterval: 5e3 },
        );
      }
      function tn(e, t, n) {
        if (!e || !t) return null;
        var r = e.filter(function (e) {
          var r = e.effectiveMint,
            a = e.pubkey;
          return (
            t.equals(r) &&
            (!n || ('string' === typeof n ? n : n.toBase58()) === a.toBase58())
          );
        });
        return r && r[0];
      }
      function nn() {
        var e = en(),
          t = Object(d.a)(e, 1)[0],
          n = Vt().market,
          r = Jt(),
          a = Object(d.a)(r, 1)[0],
          o = null === n || void 0 === n ? void 0 : n.quoteMintAddress;
        return tn(t, o, o && a[o.toBase58()]);
      }
      function rn() {
        var e = en(),
          t = Object(d.a)(e, 1)[0],
          n = Vt().market,
          r = Jt(),
          a = Object(d.a)(r, 1)[0],
          o = null === n || void 0 === n ? void 0 : n.baseMintAddress;
        return tn(t, o, o && a[o.toBase58()]);
      }
      function an() {
        var e,
          t = nn(),
          n = Vt().market,
          r = X(null === t || void 0 === t ? void 0 : t.pubkey),
          a = Object(d.a)(r, 2),
          o = a[0],
          i = a[1];
        return n && t && i && o
          ? n.quoteMintAddress.equals(Ne.TokenInstructions.WRAPPED_SOL_MINT)
            ? null !==
                (e =
                  (null === o || void 0 === o ? void 0 : o.lamports) / 1e9) &&
              void 0 !== e
              ? e
              : 0
            : n.quoteSplSizeToNumber(new b.a(o.data.slice(64, 72), 10, 'le'))
          : null;
      }
      function on() {
        var e,
          t = rn(),
          n = Vt().market,
          r = X(null === t || void 0 === t ? void 0 : t.pubkey),
          a = Object(d.a)(r, 2),
          o = a[0],
          i = a[1];
        return n && t && i && o
          ? n.baseMintAddress.equals(Ne.TokenInstructions.WRAPPED_SOL_MINT)
            ? null !==
                (e =
                  (null === o || void 0 === o ? void 0 : o.lamports) / 1e9) &&
              void 0 !== e
              ? e
              : 0
            : n.baseSplSizeToNumber(new b.a(o.data.slice(64, 72), 10, 'le'))
          : null;
      }
      function cn() {
        var e = _('feeDiscountKey', void 0),
          t = Object(d.a)(e, 2),
          n = t[0],
          r = t[1];
        return {
          storedFeeDiscountKey: n ? new m.PublicKey(n) : void 0,
          setStoredFeeDiscountKey: r,
        };
      }
      function sn() {
        var e = Vt().market,
          t = Oe(),
          n = t.connected,
          r = t.wallet,
          a = G(),
          o = cn().setStoredFeeDiscountKey;
        return D(
          (function () {
            var t = Object(u.a)(
              l.a.mark(function t() {
                var i;
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (n && r) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return', null);
                      case 2:
                        if (e) {
                          t.next = 4;
                          break;
                        }
                        return t.abrupt('return', null);
                      case 4:
                        return (
                          (t.next = 6), e.findFeeDiscountKeys(a, r.publicKey)
                        );
                      case 6:
                        return (
                          (i = t.sent) && o(i[0].pubkey.toBase58()),
                          t.abrupt('return', i)
                        );
                      case 9:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          Object(W.a)('getFeeDiscountKeys', r, e, n),
          { refreshInterval: 5e3 },
        );
      }
      function ln() {
        var e = (function () {
            var e,
              t = Oe(),
              n = t.wallet,
              r = t.connected,
              a = G(),
              o = fn(),
              i = Object(A.a)(
                new Set(
                  o.map(function (e) {
                    return e.programId.toBase58();
                  }),
                ),
              ).map(function (e) {
                return new m.PublicKey(e);
              });
            return D(
              (function () {
                var e = Object(u.a)(
                  l.a.mark(function e() {
                    return l.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (r && n) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return', []);
                          case 2:
                            return (
                              (e.next = 4),
                              Promise.all(
                                i.map(function (e) {
                                  return Ne.OpenOrders.findForOwner(
                                    a,
                                    n.publicKey,
                                    e,
                                  );
                                }),
                              )
                            );
                          case 4:
                            return e.abrupt('return', e.sent.flat());
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              Object(W.a)(
                'getAllOpenOrdersAccounts',
                a,
                r,
                null === n ||
                  void 0 === n ||
                  null === (e = n.publicKey) ||
                  void 0 === e
                  ? void 0
                  : e.toBase58(),
                o.length,
                (i || []).length,
              ),
              { refreshInterval: 5e3 },
            );
          })(),
          t = Object(d.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Ft(),
          o = Object(d.a)(a, 2),
          i = o[0],
          c = o[1],
          s = Kt(),
          f = Object(d.a)(s, 1)[0];
        if (!r || !c) return {};
        var v,
          h = Object.fromEntries(
            (f || []).map(function (e) {
              return [e.market.address.toBase58(), e];
            }),
          ),
          g = {},
          y = Object(p.a)(n || []);
        try {
          for (y.s(); !(v = y.n()).done; ) {
            var k = v.value,
              E = h[k.market.toBase58()],
              w =
                null === E || void 0 === E
                  ? void 0
                  : E.market.baseMintAddress.toBase58(),
              S =
                null === E || void 0 === E
                  ? void 0
                  : E.market.quoteMintAddress.toBase58();
            w in g || (g[w] = []), S in g || (g[S] = []);
            var j = i && i[w],
              _ = O(
                new b.a(k.baseTokenFree),
                x((null === j || void 0 === j ? void 0 : j.decimals) || 0),
              ),
              T = O(
                new b.a(k.baseTokenTotal),
                x((null === j || void 0 === j ? void 0 : j.decimals) || 0),
              ),
              C = i && i[S],
              I = O(
                new b.a(k.quoteTokenFree),
                x((null === C || void 0 === C ? void 0 : C.decimals) || 0),
              ),
              P = O(
                new b.a(k.quoteTokenTotal),
                x((null === C || void 0 === C ? void 0 : C.decimals) || 0),
              );
            g[w].push({ market: k.market, free: _, total: T }),
              g[S].push({ market: k.market, free: I, total: P });
          }
        } catch (M) {
          y.e(M);
        } finally {
          y.f();
        }
        return g;
      }
      var un;
      function dn() {
        var e = on(),
          t = an(),
          n = $t(!0),
          r = Vt(),
          a = r.baseCurrency,
          o = r.quoteCurrency,
          i = r.market,
          c = n && n.baseTokenTotal && n.baseTokenFree,
          s = n && n.quoteTokenTotal && n.quoteTokenFree;
        return 'UNKNOWN' !== a && 'UNKNOWN' !== o && a && o
          ? [
              {
                market: i,
                key: ''.concat(a).concat(o).concat(a),
                coin: a,
                wallet: e,
                orders:
                  c && i && n
                    ? i.baseSplSizeToNumber(
                        n.baseTokenTotal.sub(n.baseTokenFree),
                      )
                    : null,
                openOrders: n,
                unsettled:
                  c && i && n ? i.baseSplSizeToNumber(n.baseTokenFree) : null,
              },
              {
                market: i,
                key: ''.concat(o).concat(a).concat(o),
                coin: o,
                wallet: t,
                openOrders: n,
                orders:
                  s && i && n
                    ? i.quoteSplSizeToNumber(
                        n.quoteTokenTotal.sub(n.quoteTokenFree),
                      )
                    : null,
                unsettled:
                  s && i && n ? i.quoteSplSizeToNumber(n.quoteTokenFree) : null,
              },
            ]
          : [];
      }
      function pn() {
        var e = G(),
          t = Nt().accounts,
          n =
            t &&
            Array.from(
              new Set(
                t.map(function (e) {
                  return e.market;
                }),
              ),
            ),
          r =
            n &&
            n.map(function (e) {
              return e.toBase58();
            }),
          a = D(
            (function () {
              var t = Object(u.a)(
                l.a.mark(function t() {
                  var r;
                  return l.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (n) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt('return', null);
                        case 2:
                          return (
                            (r = (function () {
                              var t = Object(u.a)(
                                l.a.mark(function t(n) {
                                  var r;
                                  return l.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (
                                              (r = Bt.find(function (e) {
                                                return e.address.equals(n);
                                              }))
                                            ) {
                                              t.next = 5;
                                              break;
                                            }
                                            return (
                                              console.log(
                                                'Failed loading market',
                                              ),
                                              ae({
                                                message: 'Error loading market',
                                                type: 'error',
                                              }),
                                              t.abrupt('return', null)
                                            );
                                          case 5:
                                            return (
                                              (t.prev = 5),
                                              console.log(
                                                'Loading market',
                                                r.name,
                                              ),
                                              (t.next = 9),
                                              Ne.Market.load(
                                                e,
                                                r.address,
                                                {},
                                                r.programId,
                                              )
                                            );
                                          case 9:
                                            return t.abrupt('return', t.sent);
                                          case 12:
                                            return (
                                              (t.prev = 12),
                                              (t.t0 = t.catch(5)),
                                              console.log(
                                                'Failed loading market',
                                                r.name,
                                                t.t0,
                                              ),
                                              ae({
                                                message: 'Error loading market',
                                                description: t.t0.message,
                                                type: 'error',
                                              }),
                                              t.abrupt('return', null)
                                            );
                                          case 17:
                                          case 'end':
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[5, 12]],
                                  );
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()),
                            (t.next = 5),
                            Promise.all(n.map(r))
                          );
                        case 5:
                          return t.abrupt(
                            'return',
                            t.sent.filter(function (e) {
                              return e;
                            }),
                          );
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            Object(W.a)(
              'useUnmigratedDeprecatedMarketsInner',
              e,
              r && r.toString(),
            ),
            { refreshInterval: Dt },
          ),
          o = Object(d.a)(a, 1)[0];
        return o
          ? o.map(function (e) {
              return {
                market: e,
                openOrdersList:
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function (t) {
                        return e && t.market.equals(e.address);
                      }),
              };
            })
          : null;
      }
      function mn(e) {
        var t = e.map(function (e) {
          return Object(Ke.a)(
            Object(Ke.a)({}, e),
            {},
            {
              address: new m.PublicKey(e.address),
              programId: new m.PublicKey(e.programId),
              deprecated: !1,
            },
          );
        });
        return [].concat(Object(A.a)(t), Object(A.a)(Bt));
      }
      function fn() {
        return mn(Wt().customMarkets);
      }
      function bn(e, t, n) {
        if (e.isBids) return e.market.tickSize;
        var r,
          a,
          o,
          i = 0,
          c = e.getL2(1e3),
          s = Object(p.a)(c);
        try {
          for (s.s(); !(o = s.n()).done; ) {
            var l = Object(d.a)(o.value, 2);
            if (i + (a = (r = l[0]) * l[1]) > t) break;
            i += a;
          }
        } catch (m) {
          s.e(m);
        } finally {
          s.f();
        }
        var u = Math.min(1.02 * r, 1.05 * c[0][0]);
        return n ? k(u, n) : u;
      }
      function vn(e, t, n) {
        var r,
          a,
          o,
          i,
          c = 0,
          s = 0,
          l = Object(p.a)(e.getL2(1e3));
        try {
          for (l.s(); !(i = l.n()).done; ) {
            var u = Object(d.a)(i.value, 2);
            if (
              ((r = u[0]), (a = u[1]), c + (o = (e.isBids ? 1 : r) * a) > t)
            ) {
              (s += (t - c) * r), (c = t);
              break;
            }
            (s += o * r), (c += o);
          }
        } catch (f) {
          l.e(f);
        } finally {
          l.f();
        }
        var m = s / Math.min(t, c);
        return n ? k(m, n) : m;
      }
      function hn(e, t) {
        var n = Object(a.useRef)();
        Object(a.useEffect)(
          function () {
            n.current = e;
          },
          [e],
        ),
          Object(a.useEffect)(
            function () {
              if (null !== t) {
                var e = setInterval(function () {
                  n.current && n.current();
                }, t);
                return function () {
                  clearInterval(e);
                };
              }
            },
            [t],
          );
      }
      var gn = je.c.div(
        un ||
          (un = Object(Se.a)([
            '\n  margin: 5px;\n  padding: 20px;\n  background-color: #1a2029;\n',
          ])),
      );
      function yn(e) {
        var t = e.style,
          n = void 0 === t ? void 0 : t,
          r = e.children,
          a = e.stretchVertical,
          i = void 0 !== a && a;
        return o.a.createElement(
          gn,
          {
            style: Object(Ke.a)(
              { height: i ? 'calc(100% - 10px)' : void 0 },
              n,
            ),
          },
          r,
        );
      }
      var kn,
        En,
        wn,
        On,
        xn,
        Sn,
        jn,
        _n = n(806),
        Tn = n(807),
        Cn = je.c.div(
          kn || (kn = Object(Se.a)(['\n  color: rgba(255, 255, 255, 1);\n'])),
        ),
        An = Object(je.c)(Fe.a)(
          En ||
            (En = Object(Se.a)([
              '\n  padding: 20px 0 14px;\n  color: #434a59;\n',
            ])),
        ),
        In = Object(je.c)(Fe.a)(
          wn ||
            (wn = Object(Se.a)([
              '\n  padding: 20px 0 14px;\n  font-weight: 700;\n',
            ])),
        ),
        Pn = je.c.div(
          On ||
            (On = Object(Se.a)([
              '\n  text-align: right;\n  float: right;\n  height: 100%;\n  ',
              '\n  ',
              '\n',
            ])),
          function (e) {
            return (
              e['data-width'] &&
              Object(je.b)(
                xn || (xn = Object(Se.a)(['\n      width: ', ';\n    '])),
                e['data-width'],
              )
            );
          },
          function (e) {
            return (
              e['data-bgcolor'] &&
              Object(je.b)(
                Sn ||
                  (Sn = Object(Se.a)([
                    '\n      background-color: ',
                    ';\n    ',
                  ])),
                e['data-bgcolor'],
              )
            );
          },
        ),
        Mn = je.c.div(
          jn ||
            (jn = Object(Se.a)([
              '\n  position: absolute;\n  right: 5px;\n  color: white;\n',
            ])),
        );
      function Fn(e) {
        var t = e.smallScreen,
          n = e.depth,
          r = void 0 === n ? 7 : n,
          i = e.onPrice,
          c = e.onSize,
          s = Gt(),
          l = Xt(),
          u = Object(d.a)(l, 1)[0],
          p = Vt(),
          m = p.baseCurrency,
          f = p.quoteCurrency,
          b = Object(a.useRef)(null),
          v = Object(a.useRef)(null),
          h = Object(a.useState)(null),
          g = Object(d.a)(h, 2),
          y = g[0],
          k = g[1];
        function E(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = e.slice(0, r).reduce(function (e, n, r) {
              var a,
                o = Object(d.a)(n, 2),
                i = o[0],
                c = o[1],
                s =
                  ((null === (a = e[r - 1]) || void 0 === a
                    ? void 0
                    : a.cumulativeSize) || 0) + c;
              return (
                e.push({
                  price: i,
                  size: c,
                  cumulativeSize: s,
                  sizePercent: Math.round((s / (t || 1)) * 100),
                }),
                e
              );
            }, []);
          return n && (a = a.reverse()), a;
        }
        return (
          hn(function () {
            if (
              !b.current ||
              JSON.stringify(b.current) !== JSON.stringify(v.current)
            ) {
              var e = (null === u || void 0 === u ? void 0 : u.bids) || [],
                t = (null === u || void 0 === u ? void 0 : u.asks) || [],
                n = function (e, t, n) {
                  var a = Object(d.a)(t, 2)[1];
                  return n < r ? e + a : e;
                },
                a = e.reduce(n, 0) + t.reduce(n, 0),
                o = E(e, a, !1),
                i = E(t, a, !0);
              (b.current = {
                bids: null === u || void 0 === u ? void 0 : u.bids,
                asks: null === u || void 0 === u ? void 0 : u.asks,
              }),
                k({ bids: o, asks: i });
            }
          }, 250),
          Object(a.useEffect)(
            function () {
              v.current = {
                bids: null === u || void 0 === u ? void 0 : u.bids,
                asks: null === u || void 0 === u ? void 0 : u.asks,
              };
            },
            [u],
          ),
          o.a.createElement(
            yn,
            {
              style: t ? { flex: 1 } : { height: '500px', overflow: 'hidden' },
            },
            o.a.createElement(Cn, null, 'Orderbook'),
            o.a.createElement(
              An,
              null,
              o.a.createElement(
                Re.a,
                { span: 12, style: { textAlign: 'left' } },
                'Size (',
                m,
                ')',
              ),
              o.a.createElement(
                Re.a,
                { span: 12, style: { textAlign: 'right' } },
                'Price (',
                f,
                ')',
              ),
            ),
            null === y || void 0 === y
              ? void 0
              : y.asks.map(function (e) {
                  var t = e.price,
                    n = e.size,
                    r = e.sizePercent;
                  return o.a.createElement(Rn, {
                    key: t + '',
                    price: t,
                    size: n,
                    side: 'sell',
                    sizePercent: r,
                    onPriceClick: function () {
                      return i(t);
                    },
                    onSizeClick: function () {
                      return c(n);
                    },
                  });
                }),
            o.a.createElement(Bn, { markPrice: s }),
            null === y || void 0 === y
              ? void 0
              : y.bids.map(function (e) {
                  var t = e.price,
                    n = e.size,
                    r = e.sizePercent;
                  return o.a.createElement(Rn, {
                    key: t + '',
                    price: t,
                    size: n,
                    side: 'buy',
                    sizePercent: r,
                    onPriceClick: function () {
                      return i(t);
                    },
                    onSizeClick: function () {
                      return c(n);
                    },
                  });
                }),
          )
        );
      }
      var Rn = o.a.memo(
          function (e) {
            var t = e.side,
              n = e.price,
              r = e.size,
              i = e.sizePercent,
              c = e.onSizeClick,
              s = e.onPriceClick,
              l = Object(a.useRef)(),
              u = Vt().market;
            Object(a.useEffect)(
              function () {
                var e, t;
                !(null === (e = l.current) || void 0 === e
                  ? void 0
                  : e.classList.contains('flash')) &&
                  (null === (t = l.current) ||
                    void 0 === t ||
                    t.classList.add('flash'));
                var n = setTimeout(function () {
                  var e, t;
                  return (
                    (null === (e = l.current) || void 0 === e
                      ? void 0
                      : e.classList.contains('flash')) &&
                    (null === (t = l.current) || void 0 === t
                      ? void 0
                      : t.classList.remove('flash'))
                  );
                }, 250);
                return function () {
                  return clearTimeout(n);
                };
              },
              [n, r],
            );
            var d =
                (null === u || void 0 === u ? void 0 : u.minOrderSize) &&
                !isNaN(r)
                  ? Number(r).toFixed(w(u.minOrderSize) + 1)
                  : r,
              p =
                (null === u || void 0 === u ? void 0 : u.tickSize) && !isNaN(n)
                  ? Number(n).toFixed(w(u.tickSize) + 1)
                  : n;
            return o.a.createElement(
              Fe.a,
              { ref: l, style: { marginBottom: 1 }, onClick: c },
              o.a.createElement(
                Re.a,
                { span: 12, style: { textAlign: 'left' } },
                d,
              ),
              o.a.createElement(
                Re.a,
                { span: 12, style: { textAlign: 'right' } },
                o.a.createElement(Pn, {
                  'data-width': i + '%',
                  'data-bgcolor':
                    'buy' === t
                      ? 'rgba(65, 199, 122, 0.6)'
                      : 'rgba(242, 60, 105, 0.6)',
                }),
                o.a.createElement(Mn, { onClick: s }, p),
              ),
            );
          },
          function (e, t) {
            return C(e, t, ['price', 'size', 'sizePercent']);
          },
        ),
        Bn = o.a.memo(
          function (e) {
            var t = e.markPrice,
              n = Vt().market,
              r = (function (e) {
                var t = Object(a.useRef)();
                return (
                  Object(a.useEffect)(
                    function () {
                      t.current = e;
                    },
                    [e],
                  ),
                  t.current
                );
              })(t),
              i = t > r ? '#41C77A' : t < r ? '#F23B69' : 'white',
              c =
                t &&
                (null === n || void 0 === n ? void 0 : n.tickSize) &&
                t.toFixed(w(n.tickSize));
            return o.a.createElement(
              In,
              { justify: 'center' },
              o.a.createElement(
                Re.a,
                { style: { color: i } },
                t > r && o.a.createElement(_n.a, { style: { marginRight: 5 } }),
                t < r && o.a.createElement(Tn.a, { style: { marginRight: 5 } }),
                c || '----',
              ),
            );
          },
          function (e, t) {
            return C(e, t, ['markPrice']);
          },
        ),
        Kn = n(44),
        Nn = n(796);
      function zn(e) {
        var t = e.dataSource,
          n = e.columns,
          r = e.emptyLabel,
          a = void 0 === r ? 'No data' : r,
          i = e.pagination,
          c = void 0 !== i && i,
          s = e.loading,
          l = void 0 !== s && s,
          u = e.pageSize,
          d = void 0 === u ? 10 : u;
        return o.a.createElement(
          Kn.b,
          {
            renderEmpty: function () {
              return o.a.createElement(
                'div',
                {
                  style: {
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                },
                a,
              );
            },
          },
          o.a.createElement(Nn.a, {
            dataSource: t,
            columns: n,
            pagination: !!c && { pagination: !0, pageSize: d },
            loading: l,
          }),
        );
      }
      var Dn = n(223),
        Ln = o.a.createContext(null),
        qn = new m.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'),
        Wn = new m.PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        Un = new m.PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');
      function Hn(e, t) {
        return Jn.apply(this, arguments);
      }
      function Jn() {
        return (Jn = Object(u.a)(
          l.a.mark(function e(t, n) {
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      m.PublicKey.findProgramAddress(
                        [t.toBuffer(), Le.b.toBuffer(), n.toBuffer()],
                        qn,
                      )
                    );
                  case 2:
                    return e.abrupt('return', e.sent[0]);
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var Vn = new m.PublicKey('58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx'),
        Gn = (function () {
          var e = Object(u.a)(
            l.a.mark(function e(t) {
              var n, r;
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(Dn.getHashedName)(t);
                    case 2:
                      return (
                        (n = e.sent),
                        (e.next = 5),
                        Object(Dn.getNameAccountKey)(n, void 0, Vn)
                      );
                    case 5:
                      return (
                        (r = e.sent),
                        e.abrupt('return', {
                          inputDomainKey: r,
                          hashedInputName: n,
                        })
                      );
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Qn = function (e) {
          var t = e.children,
            n =
              'true' ===
              Object({
                NODE_ENV: 'production',
                PUBLIC_URL: '',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
              }).REACT_APP_ALLOW_REF_LINK,
            r = _('refCode'),
            i = Object(d.a)(r, 2),
            c = i[0],
            s = i[1],
            p = (function (e) {
              var t = G(),
                n = Object(a.useState)(void 0),
                r = Object(d.a)(n, 2),
                o = r[0],
                i = r[1],
                c = Object(a.useState)(void 0),
                s = Object(d.a)(c, 2),
                p = s[0],
                f = s[1];
              return (
                Object(a.useEffect)(
                  function () {
                    (function () {
                      var n = Object(u.a)(
                        l.a.mark(function n() {
                          var r, a, o, c, s, u, d;
                          return l.a.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (((r = void 0), (a = void 0), e)) {
                                      n.next = 6;
                                      break;
                                    }
                                    return (
                                      i(
                                        Object({
                                          NODE_ENV: 'production',
                                          PUBLIC_URL: '',
                                          WDS_SOCKET_HOST: void 0,
                                          WDS_SOCKET_PATH: void 0,
                                          WDS_SOCKET_PORT: void 0,
                                        }).REACT_APP_USDC_REFERRAL_FEES_ADDRESS
                                          ? new m.PublicKey(
                                              Object({
                                                NODE_ENV: 'production',
                                                PUBLIC_URL: '',
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0,
                                              }).REACT_APP_USDC_REFERRAL_FEES_ADDRESS,
                                            )
                                          : void 0,
                                      ),
                                      f(
                                        Object({
                                          NODE_ENV: 'production',
                                          PUBLIC_URL: '',
                                          WDS_SOCKET_HOST: void 0,
                                          WDS_SOCKET_PATH: void 0,
                                          WDS_SOCKET_PORT: void 0,
                                        }).REACT_APP_USDT_REFERRAL_FEES_ADDRESS
                                          ? new m.PublicKey(
                                              Object({
                                                NODE_ENV: 'production',
                                                PUBLIC_URL: '',
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0,
                                              }).REACT_APP_USDT_REFERRAL_FEES_ADDRESS,
                                            )
                                          : void 0,
                                      ),
                                      n.abrupt('return')
                                    );
                                  case 6:
                                    if (((n.prev = 6), !e.includes('.sol'))) {
                                      n.next = 17;
                                      break;
                                    }
                                    return (
                                      (n.next = 10), Gn(e.replace('.sol', ''))
                                    );
                                  case 10:
                                    return (
                                      (c = n.sent),
                                      (s = c.inputDomainKey),
                                      (n.next = 14),
                                      Dn.NameRegistryState.retrieve(t, s)
                                    );
                                  case 14:
                                    (o = n.sent), (n.next = 20);
                                    break;
                                  case 17:
                                    return (
                                      (n.next = 19),
                                      Object(Dn.getTwitterRegistry)(t, e)
                                    );
                                  case 19:
                                    o = n.sent;
                                  case 20:
                                    return (n.next = 22), Hn(o.owner, Wn);
                                  case 22:
                                    return (
                                      (r = n.sent),
                                      (n.next = 25),
                                      Hn(o.owner, Un)
                                    );
                                  case 25:
                                    return (
                                      (a = n.sent),
                                      (n.next = 28),
                                      t.getAccountInfo(r)
                                    );
                                  case 28:
                                    return (
                                      (u = n.sent),
                                      (n.next = 31),
                                      t.getAccountInfo(a)
                                    );
                                  case 31:
                                    (d = n.sent),
                                      (null === u || void 0 === u
                                        ? void 0
                                        : u.data) && i(r),
                                      (null === d || void 0 === d
                                        ? void 0
                                        : d.data) && f(a),
                                      (n.next = 39);
                                    break;
                                  case 36:
                                    (n.prev = 36),
                                      (n.t0 = n.catch(6)),
                                      console.warn(
                                        'Error getting refcode '.concat(n.t0),
                                      );
                                  case 39:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[6, 36]],
                          );
                        }),
                      );
                      return function () {
                        return n.apply(this, arguments);
                      };
                    })()();
                  },
                  [t, e],
                ),
                { usdcRef: o, usdtRef: p }
              );
            })(n ? c : void 0),
            f = p.usdcRef,
            b = p.usdtRef;
          return (
            Object(a.useEffect)(
              function () {
                n || s(null);
              },
              [n, s],
            ),
            o.a.createElement(
              Ln.Provider,
              {
                value: {
                  usdcRef: f,
                  usdtRef: b,
                  setRefCode: s,
                  refCode: c,
                  allowRefLink: n,
                },
              },
              t,
            )
          );
        },
        Yn = function () {
          var e = Object(a.useContext)(Ln);
          if (!e) throw new Error('Missing referrer context');
          return {
            usdcRef: e.usdcRef,
            usdtRef: e.usdtRef,
            setRefCode: e.setRefCode,
            refCode: e.refCode,
            allowRefLink: e.allowRefLink,
          };
        };
      function Xn(e) {
        var t = e.balances,
          n = e.showMarket,
          r = e.hideWalletBalance,
          a = e.onSettleSuccess,
          i = en(),
          c = Object(d.a)(i, 1)[0],
          s = Q(),
          p = Oe().wallet,
          m = Yn(),
          f = m.usdcRef,
          b = m.usdtRef;
        function v() {
          return (v = Object(u.a)(
            l.a.mark(function e(t, n) {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Je({
                            market: t,
                            openOrders: n,
                            connection: s,
                            wallet: p,
                            baseCurrencyAccount: tn(
                              c,
                              null === t || void 0 === t
                                ? void 0
                                : t.baseMintAddress,
                            ),
                            quoteCurrencyAccount: tn(
                              c,
                              null === t || void 0 === t
                                ? void 0
                                : t.quoteMintAddress,
                            ),
                            usdcRef: f,
                            usdtRef: b,
                          })
                        );
                      case 3:
                        e.next = 9;
                        break;
                      case 5:
                        return (
                          (e.prev = 5),
                          (e.t0 = e.catch(0)),
                          ae({
                            message: 'Error settling funds',
                            description: e.t0.message,
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 9:
                        a && a();
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 5]],
              );
            }),
          )).apply(this, arguments);
        }
        var h = [
          n
            ? { title: 'Market', dataIndex: 'marketName', key: 'marketName' }
            : null,
          { title: 'Coin', dataIndex: 'coin', key: 'coin' },
          r
            ? null
            : { title: 'Wallet Balance', dataIndex: 'wallet', key: 'wallet' },
          { title: 'Orders', dataIndex: 'orders', key: 'orders' },
          { title: 'Unsettled', dataIndex: 'unsettled', key: 'unsettled' },
          {
            key: 'action',
            render: function (e) {
              var t = e.market,
                n = e.openOrders,
                r = e.marketName;
              return o.a.createElement(
                'div',
                { style: { textAlign: 'right' } },
                o.a.createElement(
                  ie.a,
                  {
                    ghost: !0,
                    style: { marginRight: 12 },
                    onClick: function () {
                      return (function (e, t) {
                        return v.apply(this, arguments);
                      })(t, n);
                    },
                  },
                  'Settle ',
                  r,
                ),
              );
            },
          },
        ].filter(function (e) {
          return e;
        });
        return o.a.createElement(zn, {
          emptyLabel: 'No balances',
          dataSource: t,
          columns: h,
          pagination: !1,
        });
      }
      var Zn,
        $n = n(804),
        er = n(808),
        tr = Object(je.c)(ie.a)(
          Zn ||
            (Zn = Object(Se.a)([
              '\n  color: #f23b69;\n  border: 1px solid #f23b69;\n',
            ])),
        );
      function nr(e) {
        var t = e.openOrders,
          n = e.onCancelSuccess,
          r = e.pageSize,
          i = e.loading,
          c = e.marketFilter,
          s = Oe().wallet,
          p = Q(),
          m = Object(a.useState)(null),
          f = Object(d.a)(m, 2),
          b = f[0],
          v = f[1];
        function h() {
          return (h = Object(u.a)(
            l.a.mark(function e(t) {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (v(null === t || void 0 === t ? void 0 : t.orderId),
                          (e.prev = 1),
                          s)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 4:
                        return (
                          (e.next = 6),
                          Ye({
                            order: t,
                            market: t.market,
                            connection: p,
                            wallet: s,
                          })
                        );
                      case 6:
                        e.next = 12;
                        break;
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          ae({
                            message: 'Error cancelling order',
                            description: e.t0.message,
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 12:
                        return (e.prev = 12), v(null), e.finish(12);
                      case 15:
                        n && n();
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8, 12, 15]],
              );
            }),
          )).apply(this, arguments);
        }
        var g = Object(A.a)(
            new Set(
              (t || []).map(function (e) {
                return e.marketName;
              }),
            ),
          ).map(function (e) {
            return { text: e, value: e };
          }),
          y = [
            {
              title: 'Market',
              dataIndex: 'marketName',
              key: 'marketName',
              filters: c ? g : void 0,
              onFilter: function (e, t) {
                return 0 === t.marketName.indexOf(e);
              },
            },
            {
              title: 'Side',
              dataIndex: 'side',
              key: 'side',
              render: function (e) {
                return o.a.createElement(
                  $n.a,
                  {
                    color: 'buy' === e ? '#41C77A' : '#F23B69',
                    style: { fontWeight: 700 },
                  },
                  e.charAt(0).toUpperCase() + e.slice(1),
                );
              },
              sorter: function (e, t) {
                return e.side === t.side ? 0 : 'buy' === e.side ? 1 : -1;
              },
              showSorterTooltip: !1,
            },
            {
              title: 'Size',
              dataIndex: 'size',
              key: 'size',
              sorter: function (e, t) {
                return t.size - e.size;
              },
              showSorterTooltip: !1,
            },
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
              sorter: function (e, t) {
                return t.price - e.price;
              },
              showSorterTooltip: !1,
            },
            {
              key: 'orderId',
              render: function (e) {
                return o.a.createElement(
                  'div',
                  { style: { textAlign: 'right' } },
                  o.a.createElement(
                    tr,
                    {
                      icon: o.a.createElement(er.a, null),
                      onClick: function () {
                        return (function (e) {
                          return h.apply(this, arguments);
                        })(e);
                      },
                      loading:
                        b + '' ===
                        (null === e || void 0 === e ? void 0 : e.orderId) + '',
                    },
                    'Cancel',
                  ),
                );
              },
            },
          ],
          k = (t || []).map(function (e) {
            return Object(Ke.a)(Object(Ke.a)({}, e), {}, { key: e.orderId });
          });
        return o.a.createElement(
          Fe.a,
          null,
          o.a.createElement(
            Re.a,
            { span: 24 },
            o.a.createElement(zn, {
              emptyLabel: 'No open orders',
              dataSource: k,
              columns: y,
              pagination: !0,
              pageSize: r || 5,
              loading: void 0 !== i && i,
            }),
          ),
        );
      }
      var rr = n(797);
      function ar() {
        var e = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 100,
              t = Vt(),
              n = t.marketName,
              r = Qt(e),
              a = Zt(),
              o = Object(d.a)(a, 1),
              i = o[0];
            return i && 0 !== i.length && r
              ? r
                  .filter(function (e) {
                    return i.some(function (t) {
                      return e.openOrders.equals(t.publicKey);
                    });
                  })
                  .map(function (e) {
                    return Object(Ke.a)(
                      Object(Ke.a)({}, e),
                      {},
                      { marketName: n },
                    );
                  })
              : null;
          })(),
          t = Vt().quoteCurrency,
          n = [
            { title: 'Market', dataIndex: 'marketName', key: 'marketName' },
            {
              title: 'Side',
              dataIndex: 'side',
              key: 'side',
              render: function (e) {
                return o.a.createElement(
                  $n.a,
                  {
                    color: 'buy' === e ? '#41C77A' : '#F23B69',
                    style: { fontWeight: 700 },
                  },
                  e.charAt(0).toUpperCase() + e.slice(1),
                );
              },
            },
            { title: 'Size', dataIndex: 'size', key: 'size' },
            { title: 'Price', dataIndex: 'price', key: 'price' },
            { title: 'Liquidity', dataIndex: 'liquidity', key: 'liquidity' },
            {
              title: t ? 'Fees ('.concat(t, ')') : 'Fees',
              dataIndex: 'feeCost',
              key: 'feeCost',
            },
          ],
          r = (e || []).map(function (e) {
            return Object(Ke.a)(
              Object(Ke.a)({}, e),
              {},
              {
                key: ''.concat(e.orderId).concat(e.side),
                liquidity: e.eventFlags.maker ? 'Maker' : 'Taker',
              },
            );
          });
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            Fe.a,
            null,
            o.a.createElement(
              Re.a,
              { span: 24 },
              o.a.createElement(zn, {
                dataSource: r,
                columns: n,
                pagination: !0,
                pageSize: 5,
                emptyLabel: 'No fills',
              }),
            ),
          ),
        );
      }
      function or() {
        var e = sn(),
          t = [
            {
              title: 'Fee Tier',
              dataIndex: 'feeTier',
              key: 'feeTier',
              render: function (e, t) {
                return o.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  o.a.createElement(Ce.a, null, e),
                  0 === t.index
                    ? o.a.createElement(
                        'div',
                        { style: { marginLeft: 10 } },
                        o.a.createElement(
                          $n.a,
                          { color: '#41C77A', style: { fontWeight: 700 } },
                          'Selected',
                        ),
                      )
                    : null,
                );
              },
            },
            {
              title: 'Taker',
              dataIndex: 'taker',
              key: 'taker',
              render: function (e, t) {
                return y.format(Object(Ne.getFeeRates)(t.feeTier).taker);
              },
            },
            {
              title: 'Maker',
              dataIndex: 'maker',
              key: 'maker',
              render: function (e, t) {
                return y.format(Object(Ne.getFeeRates)(t.feeTier).maker);
              },
            },
            {
              title: 'Public Key',
              dataIndex: 'pubkey',
              key: 'pubkey',
              render: function (e) {
                return e.toBase58();
              },
            },
            { title: 'Balance', dataIndex: 'balance', key: 'balance' },
            {
              title: 'Mint',
              dataIndex: 'mint',
              key: 'mint',
              render: function (e, t) {
                return t.mint.equals(Ne.TokenInstructions.SRM_MINT)
                  ? 'SRM'
                  : t.mint.equals(Ne.TokenInstructions.MSRM_MINT)
                  ? 'MSRM'
                  : 'UNKNOWN';
              },
            },
          ],
          n = (Object(d.a)(e, 1)[0] || []).map(function (e, t) {
            return Object(Ke.a)(
              Object(Ke.a)({}, e),
              {},
              { index: t, key: e.pubkey.toBase58() },
            );
          });
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            Fe.a,
            null,
            o.a.createElement(
              Re.a,
              { span: 24 },
              o.a.createElement(zn, {
                dataSource: n,
                columns: t,
                pagination: !0,
                pageSize: 5,
                emptyLabel: 'No (M)SRM accounts',
              }),
            ),
          ),
          o.a.createElement(
            Fe.a,
            { style: { marginTop: 8 } },
            o.a.createElement(
              Re.a,
              null,
              o.a.createElement(
                Ce.a,
                null,
                'Holding SRM or MSRM makes you eligible for fee discounts:',
              ),
              o.a.createElement(ir, null),
            ),
          ),
        );
      }
      function ir() {
        var e = [
          { title: 'Fee Tier', dataIndex: 'feeTier', key: 'feeTier' },
          {
            title: 'Taker',
            dataIndex: 'taker',
            key: 'taker',
            render: function (e, t) {
              return y.format(Object(Ne.getFeeRates)(t.feeTier).taker);
            },
          },
          {
            title: 'Maker',
            dataIndex: 'maker',
            key: 'maker',
            render: function (e, t) {
              return y.format(Object(Ne.getFeeRates)(t.feeTier).maker);
            },
          },
          {
            title: 'Requirements',
            dataIndex: 'requirements',
            key: 'requirements',
            render: function (e, t) {
              return o.a.createElement(
                Ce.a,
                null,
                t.balance
                  ? '\u2265 '.concat(t.balance, ' ').concat(t.token)
                  : 'None',
              );
            },
          },
        ];
        return o.a.createElement(zn, {
          dataSource: [
            { feeTier: 0, taker: 0.0022, maker: -3e-4, token: '', balance: '' },
            {
              feeTier: 1,
              taker: 0.002,
              maker: -3e-4,
              token: 'SRM',
              balance: 100,
            },
            {
              feeTier: 2,
              taker: 0.0018,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e3,
            },
            {
              feeTier: 3,
              taker: 0.0016,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e4,
            },
            {
              feeTier: 4,
              taker: 0.0014,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e5,
            },
            {
              feeTier: 5,
              taker: 0.0012,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e6,
            },
            {
              feeTier: 6,
              taker: 0.001,
              maker: -5e-4,
              token: 'MSRM',
              balance: 1,
            },
          ].map(function (e) {
            return Object(Ke.a)(Object(Ke.a)({}, e), {}, { key: e.feeTier });
          }),
          columns: e,
        });
      }
      var cr = Ce.a.Paragraph,
        sr = rr.a.TabPane;
      function lr() {
        var e = Vt().market;
        return o.a.createElement(
          yn,
          { style: { flex: 1, paddingTop: 20 } },
          o.a.createElement(
            Ce.a,
            null,
            o.a.createElement(
              cr,
              { style: { color: 'rgba(255,255,255,0.5)' } },
              'Make sure to go to Balances and click Settle to send out your funds.',
            ),
            o.a.createElement(
              cr,
              { style: { color: 'rgba(255,255,255,0.5)' } },
              'To fund your wallet, ',
              o.a.createElement(
                'a',
                { href: 'https://www.sollet.io' },
                'sollet.io',
              ),
              '. You can get SOL from FTX, Binance, BitMax, and others. You can get other tokens from FTX.',
              ' ',
            ),
          ),
          o.a.createElement(
            rr.a,
            { defaultActiveKey: 'orders' },
            o.a.createElement(
              sr,
              { tab: 'Open Orders', key: 'orders' },
              o.a.createElement(ur, null),
            ),
            o.a.createElement(
              sr,
              { tab: 'Recent Trade History', key: 'fills' },
              o.a.createElement(ar, null),
            ),
            o.a.createElement(
              sr,
              { tab: 'Balances', key: 'balances' },
              o.a.createElement(dr, null),
            ),
            e && e.supportsSrmFeeDiscounts
              ? o.a.createElement(
                  sr,
                  { tab: 'Fee discounts', key: 'fees' },
                  o.a.createElement(or, null),
                )
              : null,
          ),
        );
      }
      var ur = function () {
          var e = (function () {
            var e = Vt(),
              t = e.market,
              n = e.marketName,
              r = $t(),
              a = Yt(),
              o = a.bidOrderbook,
              i = a.askOrderbook;
            return t && r && o && i
              ? t.filterForOpenOrders(o, i, [r]).map(function (e) {
                  return Object(Ke.a)(
                    Object(Ke.a)({}, e),
                    {},
                    { marketName: n, market: t },
                  );
                })
              : null;
          })();
          return o.a.createElement(nr, { openOrders: e });
        },
        dr = function () {
          var e = dn();
          return o.a.createElement(Xn, { balances: e });
        },
        pr = n(793);
      function mr(e) {
        var t,
          n,
          r,
          a = e.onClose,
          i = e.baseOrQuote,
          c = Vt(),
          s = c.market,
          l = c.baseCurrency,
          u = c.quoteCurrency,
          d = Oe(),
          p = d.providerName,
          m = d.providerUrl,
          f = rn(),
          b = nn();
        return (
          'base' === i
            ? ((t = null === s || void 0 === s ? void 0 : s.baseMintAddress),
              (n = f),
              (r = l))
            : 'quote' === i
            ? ((t = null === s || void 0 === s ? void 0 : s.quoteMintAddress),
              (n = b),
              (r = u))
            : (n = null),
          t
            ? o.a.createElement(
                oe.a,
                { title: r, visible: !!t, onOk: a, onCancel: a },
                o.a.createElement(
                  'div',
                  { style: { paddingTop: '20px' } },
                  o.a.createElement(
                    'p',
                    { style: { color: 'white' } },
                    'Mint address:',
                  ),
                  o.a.createElement(
                    'p',
                    { style: { color: 'rgba(255,255,255,0.5)' } },
                    t.toBase58(),
                  ),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(
                      'p',
                      { style: { color: 'white' } },
                      'SPL Deposit address:',
                    ),
                    o.a.createElement(
                      'p',
                      { style: { color: 'rgba(255,255,255,0.5)' } },
                      n
                        ? n.pubkey.toBase58()
                        : o.a.createElement(
                            o.a.Fragment,
                            null,
                            'Visit',
                            ' ',
                            o.a.createElement(re, { external: !0, to: m }, p),
                            ' ',
                            'to create an account for this mint',
                          ),
                    ),
                  ),
                ),
              )
            : null
        );
      }
      var fr = n(488);
      function br(e) {
        var t,
          n = e.accounts,
          r = e.mint,
          a = e.label,
          i = Jt(),
          c = Object(d.a)(i, 2),
          s = c[0],
          l = c[1];
        t =
          r && r in s
            ? s[r]
            : n && (null === n || void 0 === n ? void 0 : n.length) > 0
            ? n[0].pubkey.toBase58()
            : void 0;
        return o.a.createElement(
          o.a.Fragment,
          null,
          a && o.a.createElement(Re.a, { span: 8 }, 'Token account:'),
          o.a.createElement(
            Re.a,
            { span: a ? 13 : 21 },
            o.a.createElement(
              Me.a,
              {
                style: { width: '100%' },
                value: t,
                onSelect: function (e) {
                  if (r) {
                    var t = Object(Ke.a)({}, s);
                    (t[r] = e), l(t);
                  } else
                    ae({
                      message: 'Error selecting token account',
                      description: 'Mint is undefined',
                      type: 'error',
                    });
                },
              },
              null === n || void 0 === n
                ? void 0
                : n.map(function (e) {
                    return o.a.createElement(
                      Me.a.Option,
                      { key: e.pubkey.toBase58(), value: e.pubkey.toBase58() },
                      o.a.createElement(
                        Ce.a.Text,
                        { code: !0 },
                        a ? T(e.pubkey, 8) : e.pubkey.toBase58(),
                      ),
                    );
                  }),
            ),
          ),
          o.a.createElement(
            Re.a,
            { span: 2, offset: 1 },
            o.a.createElement(ie.a, {
              shape: 'round',
              icon: o.a.createElement(fr.a, null),
              size: 'small',
              onClick: function () {
                return t && navigator.clipboard.writeText(t);
              },
            }),
          ),
        );
      }
      var vr = n(809);
      function hr(e) {
        var t = e.title,
          n = e.address,
          r = e.shorten,
          a = void 0 !== r && r;
        return o.a.createElement(
          'div',
          null,
          t && o.a.createElement('p', { style: { color: 'white' } }, t),
          o.a.createElement(
            ie.a,
            {
              type: 'link',
              icon: o.a.createElement(vr.a, null),
              href: 'https://solscan.io/address/' + n,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { cursor: 'pointer' },
            },
            a ? ''.concat(n.slice(0, 4), '...').concat(n.slice(-4)) : n,
          ),
        );
      }
      var gr,
        yr,
        kr,
        Er = n(280),
        wr = o.a.createContext(null);
      function Or(e) {
        var t = e.children,
          n = _('autoSettleEnabled', !0),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = en(),
          m = Object(d.a)(s, 1)[0],
          f = Oe(),
          b = f.connected,
          v = f.wallet,
          g = fn(),
          y = Object(a.useState)(!1),
          k = Object(d.a)(y, 2),
          E = k[0],
          w = k[1],
          O = Object(a.useState)(new Map()),
          x = Object(d.a)(O, 2),
          S = x[0],
          j = x[1],
          T = function (e, t) {
            j(function (n) {
              return new Map(n).set(e, t);
            });
          },
          C = G();
        return (
          hn(function () {
            var e = (function () {
              var e = Object(u.a)(
                l.a.mark(function e() {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt('return');
                          case 2:
                            if (v) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt('return');
                          case 4:
                            return (
                              (e.prev = 4),
                              console.log('Settling funds...'),
                              (e.next = 8),
                              Ge({
                                connection: C,
                                wallet: v,
                                tokenAccounts: m || [],
                                markets: Object(A.a)(S.values()),
                              })
                            );
                          case 8:
                            e.next = 14;
                            break;
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(4)),
                              console.log(
                                'Error auto settling funds: ' + e.t0.message,
                              ),
                              e.abrupt('return')
                            );
                          case 14:
                            console.log('Finished settling funds.');
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 10]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            b &&
              (null === v || void 0 === v ? void 0 : v.autoApprove) &&
              i &&
              e();
          }, 2e4),
          hn(function () {
            var e = (function () {
              var e = Object(u.a)(
                l.a.mark(function e() {
                  var t, n, r, a;
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (v) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return');
                          case 2:
                            w(!0), (t = Object(p.a)(g)), (e.prev = 4), t.s();
                          case 6:
                            if ((n = t.n()).done) {
                              e.next = 24;
                              break;
                            }
                            if (((r = n.value), !S.has(r.address.toString()))) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt('continue', 22);
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.next = 13),
                              Ne.Market.load(C, r.address, {}, r.programId)
                            );
                          case 13:
                            return (
                              (a = e.sent),
                              T(r.address.toString(), a),
                              (e.next = 17),
                              h(1e3)
                            );
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(10)),
                              console.log(
                                'Error fetching market: ' + e.t0.message,
                              );
                          case 22:
                            e.next = 6;
                            break;
                          case 24:
                            e.next = 29;
                            break;
                          case 26:
                            (e.prev = 26), (e.t1 = e.catch(4)), t.e(e.t1);
                          case 29:
                            return (e.prev = 29), t.f(), e.finish(29);
                          case 32:
                            w(!1);
                          case 33:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [4, 26, 29, 32],
                      [10, 19],
                    ],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            b &&
              (null === v || void 0 === v ? void 0 : v.autoApprove) &&
              i &&
              !E &&
              e();
          }, 6e4),
          o.a.createElement(
            wr.Provider,
            { value: { autoSettleEnabled: i, setAutoSettleEnabled: c } },
            t,
          )
        );
      }
      var xr = Object(je.c)(Fe.a)(
          gr || (gr = Object(Se.a)(['\n  padding-bottom: 20px;\n'])),
        ),
        Sr = je.c.p(
          yr ||
            (yr = Object(Se.a)([
              '\n  font-size: 12px;\n  padding-top: 6px;\n',
            ])),
        ),
        jr = Object(je.c)(ie.a)(
          kr ||
            (kr = Object(Se.a)([
              '\n  color: #2abdd2;\n  background-color: #212734;\n  border-width: 0px;\n',
            ])),
        );
      function _r() {
        var e = Vt(),
          t = e.baseCurrency,
          n = e.quoteCurrency,
          r = e.market,
          i = dn(),
          c = $t(!0),
          s = Q(),
          p = Oe(),
          m = p.providerUrl,
          f = p.providerName,
          b = p.wallet,
          v = p.connected,
          h = Object(a.useState)(''),
          g = Object(d.a)(h, 2),
          y = g[0],
          k = g[1],
          E = rn(),
          w = nn(),
          O = en(),
          x = Object(d.a)(O, 1)[0],
          S =
            i &&
            i.find(function (e) {
              return e.coin === t;
            }),
          j =
            i &&
            i.find(function (e) {
              return e.coin === n;
            }),
          T = _('autoSettleEnabled', !0),
          C = Object(d.a)(T, 1)[0],
          A = Object(a.useState)(0),
          I = Object(d.a)(A, 2),
          P = I[0],
          M = I[1],
          F = Yn(),
          R = F.usdcRef,
          B = F.usdtRef;
        function K() {
          return N.apply(this, arguments);
        }
        function N() {
          return (N = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (b) {
                          e.next = 3;
                          break;
                        }
                        return (
                          ae({
                            message: 'Wallet not connected',
                            description: 'wallet is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 3:
                        if (r) {
                          e.next = 6;
                          break;
                        }
                        return (
                          ae({
                            message: 'Error settling funds',
                            description: 'market is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 6:
                        if (c) {
                          e.next = 9;
                          break;
                        }
                        return (
                          ae({
                            message: 'Error settling funds',
                            description: 'Open orders account is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 9:
                        if (E) {
                          e.next = 12;
                          break;
                        }
                        return (
                          ae({
                            message: 'Error settling funds',
                            description: 'Open orders account is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 12:
                        if (w) {
                          e.next = 15;
                          break;
                        }
                        return (
                          ae({
                            message: 'Error settling funds',
                            description: 'Open orders account is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.next = 18),
                          Je({
                            market: r,
                            openOrders: c,
                            connection: s,
                            wallet: b,
                            baseCurrencyAccount: E,
                            quoteCurrencyAccount: w,
                            usdcRef: R,
                            usdtRef: B,
                          })
                        );
                      case 18:
                        e.next = 23;
                        break;
                      case 20:
                        (e.prev = 20),
                          (e.t0 = e.catch(15)),
                          ae({
                            message: 'Error settling funds',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 23:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[15, 20]],
              );
            }),
          )).apply(this, arguments);
        }
        hn(function () {
          var e = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt('return');
                        case 2:
                          if (
                            (null === S || void 0 === S
                              ? void 0
                              : S.unsettled) ||
                            (null === j || void 0 === j ? void 0 : j.unsettled)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return');
                        case 4:
                          if (!(Date.now() - P < 15e3)) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt('return');
                        case 6:
                          return (
                            (e.prev = 6),
                            console.log('Settling funds...'),
                            M(Date.now()),
                            (e.next = 11),
                            Je({
                              market: r,
                              openOrders: c,
                              connection: s,
                              wallet: b,
                              baseCurrencyAccount: E,
                              quoteCurrencyAccount: w,
                              usdcRef: R,
                              usdtRef: B,
                            })
                          );
                        case 11:
                          e.next = 17;
                          break;
                        case 13:
                          return (
                            (e.prev = 13),
                            (e.t0 = e.catch(6)),
                            console.log(
                              'Error auto settling funds: ' + e.t0.message,
                            ),
                            e.abrupt('return')
                          );
                        case 17:
                          console.log('Finished settling funds.');
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[6, 13]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          v &&
            (null === b || void 0 === b ? void 0 : b.autoApprove) &&
            C &&
            e();
        }, 1e3);
        var z = [
          [
            t,
            S,
            'base',
            null === r || void 0 === r ? void 0 : r.baseMintAddress.toBase58(),
          ],
          [
            n,
            j,
            'quote',
            null === r || void 0 === r ? void 0 : r.quoteMintAddress.toBase58(),
          ],
        ];
        return o.a.createElement(
          yn,
          { style: { flex: 1, paddingTop: 10 } },
          z.map(function (e, t) {
            var n = Object(d.a)(e, 4),
              r = n[0],
              a = n[1],
              i = n[2],
              c = n[3];
            return o.a.createElement(
              o.a.Fragment,
              { key: t },
              o.a.createElement(
                pr.a,
                { style: { borderColor: 'white' } },
                r,
                ' ',
                c &&
                  o.a.createElement(
                    Be.a,
                    {
                      content: o.a.createElement(hr, { address: c }),
                      placement: 'bottomRight',
                      title: 'Token mint',
                      trigger: 'hover',
                    },
                    o.a.createElement(Er.a, { style: { color: '#2abdd2' } }),
                  ),
              ),
              v &&
                o.a.createElement(
                  xr,
                  { align: 'middle', style: { paddingBottom: 10 } },
                  o.a.createElement(br, {
                    accounts:
                      null === x || void 0 === x
                        ? void 0
                        : x.filter(function (e) {
                            return e.effectiveMint.toBase58() === c;
                          }),
                    mint: c,
                    label: !0,
                  }),
                ),
              o.a.createElement(
                xr,
                {
                  align: 'middle',
                  justify: 'space-between',
                  style: { paddingBottom: 12 },
                },
                o.a.createElement(Re.a, null, 'Wallet balance:'),
                o.a.createElement(Re.a, null, a && a.wallet),
              ),
              o.a.createElement(
                xr,
                {
                  align: 'middle',
                  justify: 'space-between',
                  style: { paddingBottom: 12 },
                },
                o.a.createElement(Re.a, null, 'Unsettled balance:'),
                o.a.createElement(Re.a, null, a && a.unsettled),
              ),
              o.a.createElement(
                xr,
                { align: 'middle', justify: 'space-around' },
                o.a.createElement(
                  Re.a,
                  { style: { width: 150 } },
                  o.a.createElement(
                    jr,
                    {
                      block: !0,
                      size: 'large',
                      onClick: function () {
                        return k(i);
                      },
                    },
                    'Deposit',
                  ),
                ),
                o.a.createElement(
                  Re.a,
                  { style: { width: 150 } },
                  o.a.createElement(
                    jr,
                    { block: !0, size: 'large', onClick: K },
                    'Settle',
                  ),
                ),
              ),
              o.a.createElement(
                Sr,
                null,
                'All deposits go to your',
                ' ',
                o.a.createElement(re, { external: !0, to: m }, f),
                ' ',
                'wallet',
              ),
            );
          }),
          o.a.createElement(mr, {
            baseOrQuote: y,
            onClose: function () {
              return k('');
            },
          }),
        );
      }
      var Tr,
        Cr,
        Ar,
        Ir,
        Pr = n(276),
        Mr = n(803),
        Fr = n(799),
        Rr = n(805),
        Br = Object(je.c)(ie.a)(
          Tr ||
            (Tr = Object(Se.a)([
              '\n  margin: 20px 0px 0px 0px;\n  background: #f23b69;\n  border-color: #f23b69;\n',
            ])),
        ),
        Kr = Object(je.c)(ie.a)(
          Cr ||
            (Cr = Object(Se.a)([
              '\n  margin: 20px 0px 0px 0px;\n  background: #02bf76;\n  border-color: #02bf76;\n',
            ])),
        ),
        Nr = { 0: '0%', 25: '25%', 50: '50%', 75: '75%', 100: '100%' };
      function zr(e) {
        var t = e.style,
          n = e.setChangeOrderRef,
          r = Object(a.useState)('buy'),
          i = Object(d.a)(r, 2),
          c = i[0],
          s = i[1],
          p = Vt(),
          m = p.baseCurrency,
          f = p.quoteCurrency,
          b = p.market,
          v = on(),
          h = an(),
          g = rn(),
          y = nn(),
          O = $t(!0),
          x = Oe(),
          S = x.wallet,
          j = x.connected,
          _ = Q(),
          T = Gt();
        sn();
        var C = cn().storedFeeDiscountKey,
          A = Object(a.useState)(!1),
          I = Object(d.a)(A, 2),
          P = I[0],
          M = I[1],
          F = Object(a.useState)(!1),
          R = Object(d.a)(F, 2),
          B = R[0],
          K = R[1],
          N = Object(a.useState)(void 0),
          z = Object(d.a)(N, 2),
          D = z[0],
          q = z[1],
          U = Object(a.useState)(void 0),
          H = Object(d.a)(U, 2),
          J = H[0],
          V = H[1],
          G = Object(a.useState)(void 0),
          Y = Object(d.a)(G, 2),
          X = Y[0],
          Z = Y[1],
          $ = Object(a.useState)(!1),
          ee = Object(d.a)($, 2),
          te = ee[0],
          ne = ee[1],
          re = Object(a.useState)(0),
          oe = Object(d.a)(re, 2),
          ie = oe[0],
          ce = oe[1],
          se =
            (h || 0) +
            ((O && b ? b.quoteSplSizeToNumber(O.quoteTokenFree) : 0) || 0),
          le = v || 0,
          ue =
            (null === b || void 0 === b ? void 0 : b.minOrderSize) &&
            w(b.minOrderSize),
          de =
            (null === b || void 0 === b ? void 0 : b.tickSize) && w(b.tickSize),
          pe = null === S || void 0 === S ? void 0 : S.publicKey;
        Object(a.useEffect)(
          function () {
            n && n(fe);
          },
          [n],
        ),
          Object(a.useEffect)(
            function () {
              D && X && ve(ie);
            },
            [c],
          ),
          Object(a.useEffect)(
            function () {
              be();
            },
            [X, D],
          ),
          Object(a.useEffect)(
            function () {
              var e = (function () {
                var e = Object(u.a)(
                  l.a.mark(function e() {
                    var t, n;
                    return l.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.prev = 0), S && pe && b)) {
                                e.next = 4;
                                break;
                              }
                              return (
                                console.log('Skipping refreshing accounts'),
                                e.abrupt('return')
                              );
                            case 4:
                              return (
                                (t = at()),
                                console.log(
                                  'Refreshing accounts for '.concat(b.address),
                                ),
                                (e.next = 8),
                                null === b || void 0 === b
                                  ? void 0
                                  : b.findOpenOrdersAccountsForOwner(_, pe)
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                null === b || void 0 === b
                                  ? void 0
                                  : b.findBestFeeDiscountKey(_, pe)
                              );
                            case 10:
                              (n = at()),
                                console.log(
                                  'Finished refreshing accounts for '
                                    .concat(b.address, ' after ')
                                    .concat(n - t),
                                ),
                                (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  'Encountered error when refreshing trading accounts: '.concat(
                                    e.t0,
                                  ),
                                );
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 14]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
              var t = setInterval(e, 3e4);
              return function () {
                return clearInterval(t);
              };
            },
            [b, _, S, pe],
          );
        var me = function (e) {
            if ((q(e), e)) {
              var t = X || T;
              if (t) {
                var n = e && E(e * t, ue);
                V(n);
              } else V(void 0);
            } else V(void 0);
          },
          fe = function (e) {
            var t = e.size,
              n = e.price,
              r = t && E(t, ue),
              a = n && E(n, de);
            r && me(r), a && Z(a);
          },
          be = function () {
            var e = k('buy' === c ? se / (X || T || 1) : le, ue),
              t = Math.min(((D || 0) / e) * 100, 100);
            ce(t);
          },
          ve = function (e) {
            if (!X && T) {
              var t = de ? T.toFixed(de) : T;
              Z('number' === typeof t ? t : parseFloat(t));
            }
            var n;
            'buy' === c
              ? (X || T) && (n = ((se / (X || T || 1)) * e) / 100)
              : (n = (le * e) / 100);
            var r = k(n, ue);
            me(r);
          };
        function he() {
          return ge.apply(this, arguments);
        }
        function ge() {
          return (ge = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (X) {
                          e.next = 6;
                          break;
                        }
                        return (
                          console.warn('Missing price'),
                          ae({ message: 'Missing price', type: 'error' }),
                          e.abrupt('return')
                        );
                      case 6:
                        if (D) {
                          e.next = 10;
                          break;
                        }
                        return (
                          console.warn('Missing size'),
                          ae({ message: 'Missing size', type: 'error' }),
                          e.abrupt('return')
                        );
                      case 10:
                        if ((ne(!0), (e.prev = 11), S)) {
                          e.next = 14;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 14:
                        return (
                          (e.next = 16),
                          et({
                            side: c,
                            price: X,
                            size: D,
                            orderType: B ? 'ioc' : P ? 'postOnly' : 'limit',
                            market: b,
                            connection: _,
                            wallet: S,
                            baseCurrencyAccount:
                              null === g || void 0 === g ? void 0 : g.pubkey,
                            quoteCurrencyAccount:
                              null === y || void 0 === y ? void 0 : y.pubkey,
                            feeDiscountPubkey: C,
                          })
                        );
                      case 16:
                        L(Object(W.a)('getTokenAccounts', S, j)),
                          Z(void 0),
                          me(void 0),
                          (e.next = 25);
                        break;
                      case 21:
                        (e.prev = 21),
                          (e.t0 = e.catch(11)),
                          console.warn(e.t0),
                          ae({
                            message: 'Error placing order',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 25:
                        return (e.prev = 25), ne(!1), e.finish(25);
                      case 28:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[11, 21, 25, 28]],
              );
            }),
          )).apply(this, arguments);
        }
        return o.a.createElement(
          yn,
          {
            style: Object(Ke.a)(
              { display: 'flex', flexDirection: 'column' },
              t,
            ),
          },
          o.a.createElement(
            'div',
            { style: { flex: 1 } },
            o.a.createElement(
              Pr.a.Group,
              {
                onChange: function (e) {
                  return s(e.target.value);
                },
                value: c,
                buttonStyle: 'solid',
                style: { marginBottom: 8, width: '100%' },
              },
              o.a.createElement(
                Pr.a.Button,
                {
                  value: 'buy',
                  style: {
                    width: '50%',
                    textAlign: 'center',
                    background: 'buy' === c ? '#02bf76' : '',
                    borderColor: 'buy' === c ? '#02bf76' : '',
                  },
                },
                'BUY',
              ),
              o.a.createElement(
                Pr.a.Button,
                {
                  value: 'sell',
                  style: {
                    width: '50%',
                    textAlign: 'center',
                    background: 'sell' === c ? '#F23B69' : '',
                    borderColor: 'sell' === c ? '#F23B69' : '',
                  },
                },
                'SELL',
              ),
            ),
            o.a.createElement(Mr.a, {
              style: { textAlign: 'right', paddingBottom: 8 },
              addonBefore: o.a.createElement(
                'div',
                { style: { width: '30px' } },
                'Price',
              ),
              suffix: o.a.createElement(
                'span',
                { style: { fontSize: 10, opacity: 0.5 } },
                f,
              ),
              value: X,
              type: 'number',
              step: (null === b || void 0 === b ? void 0 : b.tickSize) || 1,
              onChange: function (e) {
                return Z(parseFloat(e.target.value));
              },
            }),
            o.a.createElement(
              Mr.a.Group,
              { compact: !0, style: { paddingBottom: 8 } },
              o.a.createElement(Mr.a, {
                style: { width: 'calc(50% + 30px)', textAlign: 'right' },
                addonBefore: o.a.createElement(
                  'div',
                  { style: { width: '30px' } },
                  'Size',
                ),
                suffix: o.a.createElement(
                  'span',
                  { style: { fontSize: 10, opacity: 0.5 } },
                  m,
                ),
                value: D,
                type: 'number',
                step:
                  (null === b || void 0 === b ? void 0 : b.minOrderSize) || 1,
                onChange: function (e) {
                  return me(parseFloat(e.target.value));
                },
              }),
              o.a.createElement(Mr.a, {
                style: { width: 'calc(50% - 30px)', textAlign: 'right' },
                suffix: o.a.createElement(
                  'span',
                  { style: { fontSize: 10, opacity: 0.5 } },
                  f,
                ),
                value: J,
                type: 'number',
                step:
                  (null === b || void 0 === b ? void 0 : b.minOrderSize) || 1,
                onChange: function (e) {
                  return (function (e) {
                    if ((V(e), e)) {
                      var t = X || T;
                      if (t) {
                        var n = e && E(e / t, ue);
                        q(n);
                      } else q(void 0);
                    } else q(void 0);
                  })(parseFloat(e.target.value));
                },
              }),
            ),
            o.a.createElement(Fr.a, {
              value: ie,
              tipFormatter: function (e) {
                return ''.concat(e, '%');
              },
              marks: Nr,
              onChange: ve,
            }),
            o.a.createElement(
              'div',
              { style: { paddingTop: 18 } },
              'POST ',
              o.a.createElement(Rr.a, {
                checked: P,
                onChange: function (e) {
                  e && K(!1), M(e);
                },
                style: { marginRight: 40 },
              }),
              'IOC ',
              o.a.createElement(Rr.a, {
                checked: B,
                onChange: function (e) {
                  e && M(!1), K(e);
                },
              }),
            ),
          ),
          'buy' === c
            ? o.a.createElement(
                Kr,
                {
                  disabled: !X || !D,
                  onClick: he,
                  block: !0,
                  type: 'primary',
                  size: 'large',
                  loading: te,
                },
                'Buy ',
                m,
              )
            : o.a.createElement(
                Br,
                {
                  disabled: !X || !D,
                  onClick: he,
                  block: !0,
                  type: 'primary',
                  size: 'large',
                  loading: te,
                },
                'Sell ',
                m,
              ),
        );
      }
      var Dr = je.c.div(
          Ar || (Ar = Object(Se.a)(['\n  color: rgba(255, 255, 255, 1);\n'])),
        ),
        Lr = Object(je.c)(Fe.a)(
          Ir ||
            (Ir = Object(Se.a)([
              '\n  padding: 20px 0 14px;\n  color: #434a59;\n',
            ])),
        );
      function qr(e) {
        var t = e.smallScreen,
          n = Vt(),
          r = n.baseCurrency,
          a = n.quoteCurrency,
          i = n.market,
          c = (function () {
            var e = Vt().market,
              t = null === e || void 0 === e ? void 0 : e.address.toBase58();
            function n() {
              return (n = Object(u.a)(
                l.a.mark(function e() {
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 2:
                          return (e.next = 4), Rt.getRecentTrades(t);
                        case 4:
                          return e.abrupt('return', e.sent);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
            }
            return D(
              function () {
                return n.apply(this, arguments);
              },
              Object(W.a)('getBonfidaTrades', t),
              { refreshInterval: 5e3 },
              !1,
            );
          })(),
          s = Object(d.a)(c, 2),
          p = s[0],
          m = s[1];
        return o.a.createElement(
          yn,
          {
            style: t
              ? { flex: 1 }
              : {
                  marginTop: '10px',
                  minHeight: '270px',
                  maxHeight: 'calc(100vh - 700px)',
                },
          },
          o.a.createElement(Dr, null, 'Recent Market trades'),
          o.a.createElement(
            Lr,
            null,
            o.a.createElement(Re.a, { span: 8 }, 'Price (', a, ') '),
            o.a.createElement(
              Re.a,
              { span: 8, style: { textAlign: 'right' } },
              'Size (',
              r,
              ')',
            ),
            o.a.createElement(
              Re.a,
              { span: 8, style: { textAlign: 'right' } },
              'Time',
            ),
          ),
          !!p &&
            m &&
            o.a.createElement(
              'div',
              {
                style: {
                  marginRight: '-20px',
                  paddingRight: '5px',
                  overflowY: 'scroll',
                  maxHeight: t ? 'calc(100% - 75px)' : 'calc(100vh - 800px)',
                },
              },
              p.map(function (e, t) {
                return o.a.createElement(
                  Fe.a,
                  { key: t, style: { marginBottom: 4 } },
                  o.a.createElement(
                    Re.a,
                    {
                      span: 8,
                      style: {
                        color: 'buy' === e.side ? '#41C77A' : '#F23B69',
                      },
                    },
                    (null === i || void 0 === i ? void 0 : i.tickSize) &&
                      !isNaN(e.price)
                      ? Number(e.price).toFixed(w(i.tickSize))
                      : e.price,
                  ),
                  o.a.createElement(
                    Re.a,
                    { span: 8, style: { textAlign: 'right' } },
                    (null === i || void 0 === i ? void 0 : i.minOrderSize) &&
                      !isNaN(e.size)
                      ? Number(e.size).toFixed(w(i.minOrderSize))
                      : e.size,
                  ),
                  o.a.createElement(
                    Re.a,
                    {
                      span: 8,
                      style: { textAlign: 'right', color: '#434a59' },
                    },
                    e.time && new Date(e.time).toLocaleTimeString(),
                  ),
                );
              }),
            ),
        );
      }
      var Wr = n(352),
        Ur = n.n(Wr),
        Hr = n(472),
        Jr = n.n(Hr),
        Vr = Ce.a.Title;
      function Gr(e) {
        var t = e.switchToLiveMarkets,
          n = (function () {
            var e = pn(),
              t = _('customMarkets', []),
              n = Object(d.a)(t, 1)[0];
            if (!e) return null;
            var r = [];
            return (
              e.forEach(function (e) {
                var t = e.market,
                  a = e.openOrdersList,
                  o = qt(t, n),
                  i = o.baseCurrency,
                  c = o.quoteCurrency,
                  s = o.marketName;
                i &&
                  c &&
                  t &&
                  (a || []).forEach(function (e) {
                    var n =
                        (null === e || void 0 === e
                          ? void 0
                          : e.baseTokenTotal) &&
                        (null === e || void 0 === e
                          ? void 0
                          : e.baseTokenFree) &&
                        t.baseSplSizeToNumber(
                          e.baseTokenTotal.sub(e.baseTokenFree),
                        ),
                      a =
                        (null === e || void 0 === e
                          ? void 0
                          : e.quoteTokenTotal) &&
                        (null === e || void 0 === e
                          ? void 0
                          : e.quoteTokenFree) &&
                        t.baseSplSizeToNumber(
                          e.quoteTokenTotal.sub(e.quoteTokenFree),
                        ),
                      o =
                        (null === e || void 0 === e
                          ? void 0
                          : e.baseTokenFree) &&
                        t.baseSplSizeToNumber(e.baseTokenFree),
                      l =
                        (null === e || void 0 === e
                          ? void 0
                          : e.quoteTokenFree) &&
                        t.baseSplSizeToNumber(e.quoteTokenFree);
                    r.push({
                      marketName: s,
                      market: t,
                      coin: i,
                      key: ''.concat(s).concat(i),
                      orders: n,
                      unsettled: o,
                      openOrders: e,
                    }),
                      r.push({
                        marketName: s,
                        market: t,
                        coin: c,
                        key: ''.concat(s).concat(c),
                        orders: a,
                        unsettled: l,
                        openOrders: e,
                      });
                  });
              }),
              r
            );
          })(),
          r = (function () {
            var e = Oe(),
              t = e.connected,
              n = e.wallet,
              r = Wt().customMarkets,
              a = G(),
              o = pn(),
              i =
                o &&
                o.map(function (e) {
                  return e.market;
                }),
              c =
                i &&
                i
                  .filter(function (e) {
                    return !!e;
                  })
                  .map(function (e) {
                    return e.address.toBase58();
                  });
            function s() {
              return (s = Object(u.a)(
                l.a.mark(function e() {
                  var o;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t && n) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 2:
                          if (i) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 4:
                          return (
                            console.log(
                              'refreshing getOpenOrdersForDeprecatedMarkets',
                            ),
                            (o = (function () {
                              var e = Object(u.a)(
                                l.a.mark(function e(t) {
                                  var o, i;
                                  return l.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (t) {
                                              e.next = 2;
                                              break;
                                            }
                                            return e.abrupt('return', null);
                                          case 2:
                                            return (
                                              (o = qt(t, r)),
                                              (i = o.marketName),
                                              (e.prev = 3),
                                              console.log(
                                                'Fetching open orders for',
                                                i,
                                              ),
                                              (e.next = 7),
                                              t.loadOrdersForOwner(
                                                a,
                                                n.publicKey,
                                              )
                                            );
                                          case 7:
                                            return e.abrupt(
                                              'return',
                                              e.sent.map(function (e) {
                                                return Object(Ke.a)(
                                                  { marketName: i, market: t },
                                                  e,
                                                );
                                              }),
                                            );
                                          case 10:
                                            return (
                                              (e.prev = 10),
                                              (e.t0 = e.catch(3)),
                                              console.log(
                                                'Failed loading open orders',
                                                t.address.toBase58(),
                                                e.t0,
                                              ),
                                              ae({
                                                message: 'Error loading open orders for deprecated '.concat(
                                                  i,
                                                ),
                                                description: e.t0.message,
                                                type: 'error',
                                              }),
                                              e.abrupt('return', null)
                                            );
                                          case 15:
                                          case 'end':
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[3, 10]],
                                  );
                                }),
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()),
                            (e.next = 8),
                            Promise.all(i.map(o))
                          );
                        case 8:
                          return e.abrupt(
                            'return',
                            e.sent
                              .filter(function (e) {
                                return !!e;
                              })
                              .flat(),
                          );
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
            }
            var p = Object(W.a)(
                'getOpenOrdersForDeprecatedMarkets',
                t,
                a,
                n,
                c && c.toString(),
              ),
              m = D(
                function () {
                  return s.apply(this, arguments);
                },
                p,
                { refreshInterval: Dt },
              ),
              f = Object(d.a)(m, 2),
              b = f[0],
              v = f[1];
            return (
              console.log('openOrders', b),
              {
                openOrders: b,
                loaded: v,
                refreshOpenOrders: function () {
                  return L(p);
                },
              }
            );
          })(),
          a = r.openOrders,
          i = r.loaded,
          c = r.refreshOpenOrders,
          s = Nt().refresh,
          p = !a || a.length > 0,
          m =
            n &&
            n.filter(function (e) {
              var t = e.orders,
                n = e.unsettled;
              return t > 0 || n > 0;
            }),
          f = m && m.length > 0;
        return o.a.createElement(
          yn,
          null,
          o.a.createElement(
            Vr,
            { level: 4, style: { color: 'rgba(255, 255, 255, 1)' } },
            'Migrate new markets',
          ),
          o.a.createElement(
            Ce.a,
            null,
            'Markets on older versions of the DEX or using Wrapped USDT are now deprecated. To migrate over to the new markets, please cancel your orders and settle your funds on old markets. To convert from Wrapped USDT to Native USDT use sollet.io.',
          ),
          o.a.createElement(
            'div',
            {
              style: {
                marginTop: 20,
                display: 'flex',
                justifyContent: 'center',
              },
            },
            o.a.createElement(
              ie.a,
              {
                onClick: function () {
                  return s(!0);
                },
              },
              o.a.createElement(Jr.a, null),
              ' Refresh data',
            ),
          ),
          n
            ? o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  pr.a,
                  null,
                  !p && o.a.createElement(Ur.a, null),
                  ' Cancel your orders',
                ),
                p
                  ? i
                    ? o.a.createElement(nr, {
                        openOrders: a,
                        onCancelSuccess: function () {
                          setTimeout(function () {
                            s(), c();
                          }, 1e3);
                        },
                      })
                    : o.a.createElement(Te.a, { size: 'large' })
                  : null,
                o.a.createElement(
                  pr.a,
                  null,
                  !f && o.a.createElement(Ur.a, null),
                  ' Settle your funds',
                ),
                f &&
                  o.a.createElement(Xn, {
                    balances: m,
                    hideWalletBalance: !0,
                    showMarket: !0,
                    onSettleSuccess: function () {
                      setTimeout(s, 1e3);
                    },
                  }),
                o.a.createElement(pr.a, null, 'Switch to upgraded markets'),
                o.a.createElement(
                  'div',
                  { style: { display: 'flex', justifyContent: 'center' } },
                  o.a.createElement(
                    ie.a,
                    { onClick: t, disabled: f || p },
                    'Switch to new markets',
                  ),
                ),
              )
            : o.a.createElement(Te.a, { size: 'large' }),
        );
      }
      var Qr = n(810),
        Yr = n(117),
        Xr = Ce.a.Text;
      function Zr(e) {
        var t,
          n,
          r = e.visible,
          i = e.onAddCustomMarket,
          c = e.onClose,
          s = G(),
          l = Object(a.useState)(''),
          u = Object(d.a)(l, 2),
          p = u[0],
          f = u[1],
          b = Object(a.useState)(''),
          h = Object(d.a)(b, 2),
          g = h[0],
          y = h[1],
          k = Object(a.useState)(''),
          E = Object(d.a)(k, 2),
          w = E[0],
          O = E[1],
          x = Object(a.useState)(''),
          S = Object(d.a)(x, 2),
          j = S[0],
          _ = S[1],
          T = Object(a.useState)(null),
          C = Object(d.a)(T, 2),
          A = C[0],
          I = C[1],
          P = Object(a.useState)(!1),
          M = Object(d.a)(P, 2),
          F = M[0],
          R = M[1],
          B = v(p),
          K = X(B ? new m.PublicKey(p) : null),
          N = Object(d.a)(K, 1)[0],
          z = N
            ? N.owner.toBase58()
            : Ne.MARKETS.find(function (e) {
                return !e.deprecated;
              }).programId.toBase58();
        Object(a.useEffect)(
          function () {
            B && z
              ? (R(!0),
                Ne.Market.load(s, new m.PublicKey(p), {}, new m.PublicKey(z))
                  .then(function (e) {
                    I(e);
                  })
                  .catch(function () {
                    D(), I(null);
                  })
                  .finally(function () {
                    return R(!1);
                  }))
              : D();
          },
          [s, p, z],
        );
        var D = function () {
            y(null), O(null), _(null);
          },
          L = Ne.MARKETS.find(function (e) {
            return e.address.toBase58() === p && e.programId.toBase58() === z;
          }),
          q = Ne.MARKETS.find(function (e) {
            return e.programId.toBase58() === z;
          }),
          W =
            (null === A || void 0 === A ? void 0 : A.baseMintAddress) &&
            (null ===
              (t = Ne.TOKEN_MINTS.find(function (e) {
                return e.address.equals(A.baseMintAddress);
              })) || void 0 === t
              ? void 0
              : t.name),
          U =
            (null === A || void 0 === A ? void 0 : A.quoteMintAddress) &&
            (null ===
              (n = Ne.TOKEN_MINTS.find(function (e) {
                return e.address.equals(A.quoteMintAddress);
              })) || void 0 === n
              ? void 0
              : n.name),
          H =
            !F &&
            !!A &&
            A.publicKey.toBase58() === p &&
            p &&
            z &&
            g &&
            (W || w) &&
            (U || j) &&
            B,
          J = function () {
            D(), I(null), f(null), c();
          };
        return o.a.createElement(
          oe.a,
          {
            title: 'Add custom market',
            visible: r,
            onOk: function () {
              if (H) {
                var e = { address: p, programId: z, name: g };
                W || (e.baseLabel = w), U || (e.quoteLabel = j), i(e), J();
              } else
                ae({
                  message: 'Please fill in all fields with valid values',
                  type: 'error',
                });
            },
            okText: 'Add',
            onCancel: J,
            okButtonProps: { disabled: !H },
          },
          o.a.createElement(
            'div',
            null,
            B
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  !A &&
                    !F &&
                    o.a.createElement(
                      Fe.a,
                      { style: { marginBottom: 8 } },
                      o.a.createElement(
                        Xr,
                        { type: 'danger' },
                        'Not a valid market',
                      ),
                    ),
                  A &&
                    L &&
                    o.a.createElement(
                      Fe.a,
                      { style: { marginBottom: 8 } },
                      o.a.createElement(
                        Xr,
                        { type: 'warning' },
                        'Market known: ',
                        L.name,
                      ),
                    ),
                  A &&
                    !q &&
                    o.a.createElement(
                      Fe.a,
                      { style: { marginBottom: 8 } },
                      o.a.createElement(
                        Xr,
                        { type: 'danger' },
                        'Warning: unknown DEX program',
                      ),
                    ),
                  A &&
                    q &&
                    q.deprecated &&
                    o.a.createElement(
                      Fe.a,
                      { style: { marginBottom: 8 } },
                      o.a.createElement(
                        Xr,
                        { type: 'warning' },
                        'Warning: deprecated DEX program',
                      ),
                    ),
                )
              : o.a.createElement(
                  o.a.Fragment,
                  null,
                  p &&
                    !B &&
                    o.a.createElement(
                      Fe.a,
                      { style: { marginBottom: 8 } },
                      o.a.createElement(
                        Xr,
                        { type: 'danger' },
                        'Invalid market ID',
                      ),
                    ),
                ),
            o.a.createElement(
              Fe.a,
              { style: { marginBottom: 8 } },
              o.a.createElement(
                Re.a,
                { span: 24 },
                o.a.createElement(Mr.a, {
                  placeholder: 'Market Id',
                  value: p,
                  onChange: function (e) {
                    return f(e.target.value);
                  },
                  suffix: F ? o.a.createElement(Yr.a, null) : null,
                }),
              ),
            ),
            o.a.createElement(
              Fe.a,
              { style: { marginBottom: 8, marginTop: 8 } },
              o.a.createElement(
                Re.a,
                { span: 24 },
                o.a.createElement(Mr.a, {
                  placeholder: 'Market Label',
                  disabled: !A,
                  value: g,
                  onChange: function (e) {
                    return y(e.target.value);
                  },
                }),
              ),
            ),
            o.a.createElement(
              Fe.a,
              { gutter: [8], style: { marginBottom: 8 } },
              o.a.createElement(
                Re.a,
                { span: 12 },
                o.a.createElement(Mr.a, {
                  placeholder: 'Base label',
                  disabled: !A || W,
                  value: W || w,
                  onChange: function (e) {
                    return O(e.target.value);
                  },
                }),
                A &&
                  !W &&
                  o.a.createElement(
                    'div',
                    { style: { marginTop: 8 } },
                    o.a.createElement(
                      Xr,
                      { type: 'warning' },
                      'Warning: unknown token',
                    ),
                  ),
              ),
              o.a.createElement(
                Re.a,
                { span: 12 },
                o.a.createElement(Mr.a, {
                  placeholder: 'Quote label',
                  disabled: !A || U,
                  value: U || j,
                  onChange: function (e) {
                    return _(e.target.value);
                  },
                }),
                A &&
                  !U &&
                  o.a.createElement(
                    'div',
                    { style: { marginTop: 8 } },
                    o.a.createElement(
                      Xr,
                      { type: 'warning' },
                      'Warning: unknown token',
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      var $r = n(356);
      n(754);
      function ea(e, t) {
        var n = Object.assign({}, e);
        for (var r in t)
          'object' != typeof e[r] || null === e[r] || Array.isArray(e[r])
            ? void 0 !== t[r] && (n[r] = t[r])
            : (n[r] = ea(e[r], t[r]));
        return n;
      }
      var ta = {
          mobile: {
            disabled_features: [
              'left_toolbar',
              'header_widget',
              'timeframes_toolbar',
              'edit_buttons_in_legend',
              'context_menus',
              'control_bar',
              'border_around_the_chart',
            ],
            enabled_features: [],
          },
        },
        na = {
          width: 800,
          height: 500,
          interval: '1D',
          timezone: 'Etc/UTC',
          container: '',
          library_path: '',
          locale: 'en',
          widgetbar: {
            details: !1,
            watchlist: !1,
            watchlist_settings: { default_symbols: [] },
          },
          overrides: { 'mainSeriesProperties.showCountdown': !1 },
          studies_overrides: {},
          trading_customization: { position: {}, order: {} },
          brokerConfig: { configFlags: {} },
          fullscreen: !1,
          autosize: !1,
          disabled_features: [],
          enabled_features: [],
          debug: !1,
          logo: {},
          time_frames: [
            { text: '5y', resolution: '1W' },
            { text: '1y', resolution: '1W' },
            { text: '6m', resolution: '120' },
            { text: '3m', resolution: '60' },
            { text: '1m', resolution: '30' },
            { text: '5d', resolution: '5' },
            { text: '1d', resolution: '1' },
          ],
          client_id: '0',
          user_id: '0',
          charts_storage_api_version: '1.0',
          favorites: { intervals: [], chartTypes: [] },
        };
      var ra = (function () {
        function e(t) {
          if (
            (Object(P.a)(this, e),
            (this._id = 'tradingview_'.concat(
              ((1048576 * (1 + Math.random())) | 0).toString(16).substring(1),
            )),
            (this._ready = !1),
            (this._readyHandlers = []),
            (this._onWindowResize = this._autoResizeChart.bind(this)),
            !t.datafeed)
          )
            throw new Error('Datafeed is not defined');
          if (((this._options = ea(na, t)), t.preset)) {
            var n = ta[t.preset];
            n
              ? (void 0 !== this._options.disabled_features
                  ? (this._options.disabled_features = this._options.disabled_features.concat(
                      n.disabled_features,
                    ))
                  : (this._options.disabled_features = n.disabled_features),
                void 0 !== this._options.enabled_features
                  ? (this._options.enabled_features = this._options.enabled_features.concat(
                      n.enabled_features,
                    ))
                  : (this._options.enabled_features = n.enabled_features))
              : console.warn('Unknown preset: `' + t.preset + '`');
          }
          'Dark' === this._options.theme &&
            void 0 === this._options.loading_screen &&
            (this._options.loading_screen = { backgroundColor: '#131722' }),
            this._create();
        }
        return (
          Object(I.a)(e, [
            {
              key: 'onChartReady',
              value: function (e) {
                this._ready ? e.call(this) : this._readyHandlers.push(e);
              },
            },
            {
              key: 'headerReady',
              value: function () {
                var e = this;
                return this._innerWindowLoaded.then(function () {
                  return e._innerWindow().headerReady();
                });
              },
            },
            {
              key: 'onGrayedObjectClicked',
              value: function (e) {
                this._innerAPI().onGrayedObjectClicked(e);
              },
            },
            {
              key: 'onShortcut',
              value: function (e, t) {
                this._innerWindow().createShortcutAction(e, t);
              },
            },
            {
              key: 'subscribe',
              value: function (e, t) {
                this._innerAPI().subscribe(e, t);
              },
            },
            {
              key: 'unsubscribe',
              value: function (e, t) {
                this._innerAPI().unsubscribe(e, t);
              },
            },
            {
              key: 'chart',
              value: function (e) {
                return this._innerAPI().chart(e);
              },
            },
            {
              key: 'getLanguage',
              value: function () {
                return this._options.locale;
              },
            },
            {
              key: 'setSymbol',
              value: function (e, t, n) {
                this._innerAPI().changeSymbol(e, t, n);
              },
            },
            {
              key: 'remove',
              value: function () {
                window.removeEventListener('resize', this._onWindowResize),
                  this._readyHandlers.splice(0, this._readyHandlers.length),
                  delete window[this._id],
                  this._iFrame.parentNode &&
                    this._iFrame.parentNode.removeChild(this._iFrame);
              },
            },
            {
              key: 'closePopupsAndDialogs',
              value: function () {
                this._innerAPI().closePopupsAndDialogs();
              },
            },
            {
              key: 'selectLineTool',
              value: function (e) {
                this._innerAPI().selectLineTool(e);
              },
            },
            {
              key: 'selectedLineTool',
              value: function () {
                return this._innerAPI().selectedLineTool();
              },
            },
            {
              key: 'save',
              value: function (e) {
                this._innerAPI().saveChart(e);
              },
            },
            {
              key: 'load',
              value: function (e, t) {
                this._innerAPI().loadChart({ json: e, extendedData: t });
              },
            },
            {
              key: 'getSavedCharts',
              value: function (e) {
                this._innerAPI().getSavedCharts(e);
              },
            },
            {
              key: 'loadChartFromServer',
              value: function (e) {
                this._innerAPI().loadChartFromServer(e);
              },
            },
            {
              key: 'saveChartToServer',
              value: function (e, t, n) {
                this._innerAPI().saveChartToServer(e, t, n);
              },
            },
            {
              key: 'removeChartFromServer',
              value: function (e, t) {
                this._innerAPI().removeChartFromServer(e, t);
              },
            },
            {
              key: 'onContextMenu',
              value: function (e) {
                this._innerAPI().onContextMenu(e);
              },
            },
            {
              key: 'createButton',
              value: function (e) {
                return this._innerWindow().createButton(e);
              },
            },
            {
              key: 'showNoticeDialog',
              value: function (e) {
                this._innerAPI().showNoticeDialog(e);
              },
            },
            {
              key: 'showConfirmDialog',
              value: function (e) {
                this._innerAPI().showConfirmDialog(e);
              },
            },
            {
              key: 'showLoadChartDialog',
              value: function () {
                this._innerAPI().showLoadChartDialog();
              },
            },
            {
              key: 'showSaveAsChartDialog',
              value: function () {
                this._innerAPI().showSaveAsChartDialog();
              },
            },
            {
              key: 'symbolInterval',
              value: function () {
                return this._innerAPI().getSymbolInterval();
              },
            },
            {
              key: 'mainSeriesPriceFormatter',
              value: function () {
                return this._innerAPI().mainSeriesPriceFormatter();
              },
            },
            {
              key: 'getIntervals',
              value: function () {
                return this._innerAPI().getIntervals();
              },
            },
            {
              key: 'getStudiesList',
              value: function () {
                return this._innerAPI().getStudiesList();
              },
            },
            {
              key: 'addCustomCSSFile',
              value: function (e) {
                this._innerWindow().addCustomCSSFile(e);
              },
            },
            {
              key: 'applyOverrides',
              value: function (e) {
                (this._options = ea(this._options, { overrides: e })),
                  this._innerWindow().applyOverrides(e);
              },
            },
            {
              key: 'applyStudiesOverrides',
              value: function (e) {
                this._innerWindow().applyStudiesOverrides(e);
              },
            },
            {
              key: 'watchList',
              value: function () {
                return this._innerAPI().watchlist();
              },
            },
            {
              key: 'activeChart',
              value: function () {
                return this._innerAPI().activeChart();
              },
            },
            {
              key: 'chartsCount',
              value: function () {
                return this._innerAPI().chartsCount();
              },
            },
            {
              key: 'layout',
              value: function () {
                return this._innerAPI().layout();
              },
            },
            {
              key: 'setLayout',
              value: function (e) {
                this._innerAPI().setLayout(e);
              },
            },
            {
              key: 'layoutName',
              value: function () {
                return this._innerAPI().layoutName();
              },
            },
            {
              key: 'changeTheme',
              value: function (e, t) {
                this._innerWindow().changeTheme(e, t);
              },
            },
            {
              key: 'getTheme',
              value: function () {
                return this._innerWindow().getTheme();
              },
            },
            {
              key: 'takeScreenshot',
              value: function () {
                this._innerAPI().takeScreenshot();
              },
            },
            {
              key: 'lockAllDrawingTools',
              value: function () {
                return this._innerAPI().lockAllDrawingTools();
              },
            },
            {
              key: 'hideAllDrawingTools',
              value: function () {
                return this._innerAPI().hideAllDrawingTools();
              },
            },
            {
              key: 'drawOnAllCharts',
              value: function (e) {
                this._innerAPI().drawOnAllCharts(e);
              },
            },
            {
              key: 'magnetEnabled',
              value: function () {
                return this._innerAPI().magnetEnabled();
              },
            },
            {
              key: 'magnetMode',
              value: function () {
                return this._innerAPI().magnetMode();
              },
            },
            {
              key: 'undoRedoState',
              value: function () {
                return this._innerAPI().undoRedoState();
              },
            },
            {
              key: 'setIntervalLinkingEnabled',
              value: function (e) {
                this._innerAPI().setIntervalLinkingEnabled(e);
              },
            },
            {
              key: 'setTimeFrame',
              value: function (e) {
                this._innerAPI().setTimeFrame(e);
              },
            },
            {
              key: 'symbolSync',
              value: function () {
                return this._innerAPI().symbolSync();
              },
            },
            {
              key: 'intervalSync',
              value: function () {
                return this._innerAPI().intervalSync();
              },
            },
            {
              key: 'crosshairSync',
              value: function () {
                return this._innerAPI().crosshairSync();
              },
            },
            {
              key: 'timeSync',
              value: function () {
                return this._innerAPI().timeSync();
              },
            },
            {
              key: 'getAllFeatures',
              value: function () {
                return this._innerWindow().getAllFeatures();
              },
            },
            {
              key: 'clearUndoHistory',
              value: function () {
                return this._innerAPI().clearUndoHistory();
              },
            },
            {
              key: 'undo',
              value: function () {
                return this._innerAPI().undo();
              },
            },
            {
              key: 'redo',
              value: function () {
                return this._innerAPI().redo();
              },
            },
            {
              key: 'startFullscreen',
              value: function () {
                this._innerAPI().startFullscreen();
              },
            },
            {
              key: 'exitFullscreen',
              value: function () {
                this._innerAPI().exitFullscreen();
              },
            },
            {
              key: 'takeClientScreenshot',
              value: function (e) {
                return this._innerAPI().takeClientScreenshot(e);
              },
            },
            {
              key: '_innerAPI',
              value: function () {
                return this._innerWindow().tradingViewApi;
              },
            },
            {
              key: '_innerWindow',
              value: function () {
                return this._iFrame.contentWindow;
              },
            },
            {
              key: '_autoResizeChart',
              value: function () {
                this._options.fullscreen &&
                  (this._iFrame.style.height = window.innerHeight + 'px');
              },
            },
            {
              key: '_create',
              value: function () {
                var e = this,
                  t = this._render();
                this._options.container_id &&
                  console.warn(
                    '`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.',
                  );
                var n = this._options.container_id || this._options.container,
                  r = 'string' == typeof n ? document.getElementById(n) : n;
                if (null === r)
                  throw new Error(
                    'There is no such element - #'.concat(
                      this._options.container,
                    ),
                  );
                (r.innerHTML = t),
                  (this._iFrame = r.querySelector('#'.concat(this._id)));
                var a = this._iFrame;
                (this._options.autosize || this._options.fullscreen) &&
                  ((a.style.width = '100%'),
                  this._options.fullscreen || (a.style.height = '100%')),
                  window.addEventListener('resize', this._onWindowResize),
                  this._onWindowResize(),
                  (this._innerWindowLoaded = new Promise(function (e) {
                    a.addEventListener(
                      'load',
                      function t() {
                        a.removeEventListener('load', t, !1), e();
                      },
                      !1,
                    );
                  })),
                  this._innerWindowLoaded.then(function () {
                    e._innerWindow().widgetReady(function () {
                      e._ready = !0;
                      var n,
                        r = Object(p.a)(e._readyHandlers);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var a = n.value;
                          try {
                            a.call(e);
                          } catch (t) {
                            console.error(t);
                          }
                        }
                      } catch (o) {
                        r.e(o);
                      } finally {
                        r.f();
                      }
                      e._innerWindow().initializationFinished();
                    });
                  });
              },
            },
            {
              key: '_render',
              value: function () {
                var e = window;
                if (
                  ((e[this._id] = {
                    datafeed: this._options.datafeed,
                    customFormatters:
                      this._options.custom_formatters ||
                      this._options.customFormatters,
                    brokerFactory:
                      this._options.broker_factory ||
                      this._options.brokerFactory,
                    overrides: this._options.overrides,
                    studiesOverrides: this._options.studies_overrides,
                    tradingCustomization: this._options.trading_customization,
                    disabledFeatures: this._options.disabled_features,
                    enabledFeatures: this._options.enabled_features,
                    brokerConfig:
                      this._options.broker_config || this._options.brokerConfig,
                    restConfig: this._options.restConfig,
                    favorites: this._options.favorites,
                    logo: this._options.logo,
                    numeric_formatting: this._options.numeric_formatting,
                    rss_news_feed: this._options.rss_news_feed,
                    newsProvider: this._options.news_provider,
                    loadLastChart: this._options.load_last_chart,
                    saveLoadAdapter: this._options.save_load_adapter,
                    loading_screen: this._options.loading_screen,
                    settingsAdapter: this._options.settings_adapter,
                    getCustomIndicators: this._options.custom_indicators_getter,
                    additionalSymbolInfoFields: this._options
                      .additional_symbol_info_fields,
                    headerWidgetButtonsMode: this._options
                      .header_widget_buttons_mode,
                  }),
                  this._options.saved_data)
                )
                  (e[this._id].chartContent = {
                    json: this._options.saved_data,
                  }),
                    this._options.saved_data_meta_info &&
                      (e[
                        this._id
                      ].chartContentExtendedData = this._options.saved_data_meta_info);
                else if (
                  !this._options.load_last_chart &&
                  !this._options.symbol
                )
                  throw new Error(
                    "Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set",
                  );
                var t =
                  (this._options.library_path || '') +
                  ''.concat(
                    encodeURIComponent(this._options.locale),
                    '-tv-chart.ad2f4a55.html#symbol=',
                  ) +
                  encodeURIComponent(this._options.symbol || '') +
                  '&interval=' +
                  encodeURIComponent(this._options.interval) +
                  (this._options.timeframe
                    ? '&timeframe=' +
                      encodeURIComponent(this._options.timeframe)
                    : '') +
                  (this._options.toolbar_bg
                    ? '&toolbarbg=' +
                      encodeURIComponent(
                        this._options.toolbar_bg.replace('#', ''),
                      )
                    : '') +
                  (this._options.studies_access
                    ? '&studiesAccess=' +
                      encodeURIComponent(
                        JSON.stringify(this._options.studies_access),
                      )
                    : '') +
                  '&widgetbar=' +
                  encodeURIComponent(JSON.stringify(this._options.widgetbar)) +
                  (this._options.drawings_access
                    ? '&drawingsAccess=' +
                      encodeURIComponent(
                        JSON.stringify(this._options.drawings_access),
                      )
                    : '') +
                  '&timeFrames=' +
                  encodeURIComponent(
                    JSON.stringify(this._options.time_frames),
                  ) +
                  '&locale=' +
                  encodeURIComponent(this._options.locale) +
                  '&uid=' +
                  encodeURIComponent(this._id) +
                  '&clientId=' +
                  encodeURIComponent(String(this._options.client_id)) +
                  '&userId=' +
                  encodeURIComponent(String(this._options.user_id)) +
                  (this._options.charts_storage_url
                    ? '&chartsStorageUrl=' +
                      encodeURIComponent(this._options.charts_storage_url)
                    : '') +
                  (this._options.charts_storage_api_version
                    ? '&chartsStorageVer=' +
                      encodeURIComponent(
                        this._options.charts_storage_api_version,
                      )
                    : '') +
                  (this._options.custom_css_url
                    ? '&customCSS=' +
                      encodeURIComponent(this._options.custom_css_url)
                    : '') +
                  (this._options.auto_save_delay
                    ? '&autoSaveDelay=' +
                      encodeURIComponent(String(this._options.auto_save_delay))
                    : '') +
                  '&debug=' +
                  encodeURIComponent(String(this._options.debug)) +
                  (this._options.snapshot_url
                    ? '&snapshotUrl=' +
                      encodeURIComponent(this._options.snapshot_url)
                    : '') +
                  (this._options.timezone
                    ? '&timezone=' + encodeURIComponent(this._options.timezone)
                    : '') +
                  (this._options.study_count_limit
                    ? '&studyCountLimit=' +
                      encodeURIComponent(
                        String(this._options.study_count_limit),
                      )
                    : '') +
                  (this._options.symbol_search_request_delay
                    ? '&ssreqdelay=' +
                      encodeURIComponent(
                        String(this._options.symbol_search_request_delay),
                      )
                    : '') +
                  (this._options.compare_symbols
                    ? '&compareSymbols=' +
                      encodeURIComponent(
                        JSON.stringify(this._options.compare_symbols),
                      )
                    : '') +
                  (this._options.theme
                    ? '&theme=' +
                      encodeURIComponent(String(this._options.theme))
                    : '') +
                  (this._options.header_widget_buttons_mode
                    ? '&header_widget_buttons_mode=' +
                      encodeURIComponent(
                        String(this._options.header_widget_buttons_mode),
                      )
                    : '') +
                  (this._options.time_scale
                    ? '&time_scale=' +
                      encodeURIComponent(
                        JSON.stringify(this._options.time_scale),
                      )
                    : '');
                return (
                  '<iframe id="' +
                  this._id +
                  '" name="' +
                  this._id +
                  '"  src="' +
                  t +
                  '"' +
                  (this._options.autosize || this._options.fullscreen
                    ? ''
                    : ' width="' +
                      this._options.width +
                      '" height="' +
                      this._options.height +
                      '"') +
                  ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
                );
              },
            },
          ]),
          e
        );
      })();
      (window.TradingView = window.TradingView || {}),
        (window.TradingView.version = function () {
          return 'CL v20.032 (internal id ad2f4a55 @ 2021-10-28T12:29:15.152Z)';
        });
      var aa = 'tradingviewCharts',
        oa = 'tradingviewStudies';
      function ia() {
        var e = JSON.parse(localStorage.getItem(aa)) || [];
        return new Promise(function (t) {
          return t(e);
        });
      }
      function ca(e) {
        var t = JSON.parse(localStorage.getItem(aa)) || [];
        return (
          (t = t.filter(function (t) {
            return t.id !== e;
          })),
          localStorage.setItem(aa, JSON.stringify(t)),
          localStorage.removeItem(aa + '.' + e),
          new Promise(function (e) {
            return e();
          })
        );
      }
      function sa(e) {
        var t = e.content,
          n = Object(te.a)(e, ['content']);
        n.id || (n.id = 'chart' + Math.floor(1e8 * Math.random())),
          (n.timestamp = new Date() - 0),
          ((t = JSON.parse(t)).content = JSON.parse(t.content));
        try {
          for (var r = 0; r < t.content.charts[0].panes[0].sources.length; r++)
            'study_Overlay' === t.content.charts[0].panes[0].sources[r].type &&
              t.content.charts[0].panes[0].sources.splice(r, 1);
        } catch (o) {
          console.log(o);
        }
        (t.content = JSON.stringify(t.content)), (t = JSON.stringify(t));
        var a = JSON.parse(localStorage.getItem(aa)) || [];
        return (
          (a = a.filter(function (e) {
            return e.id !== n.id;
          })).push(n),
          localStorage.setItem(aa, JSON.stringify(a)),
          localStorage.setItem(aa + '.' + n.id, t),
          new Promise(function (e) {
            return e(n.id);
          })
        );
      }
      function la(e) {
        var t = localStorage.getItem(aa + '.' + e);
        return new Promise(function (e) {
          return e(t);
        });
      }
      function ua() {
        var e = JSON.parse(localStorage.getItem(oa)) || [];
        return new Promise(function (t) {
          return t(e);
        });
      }
      function da(e) {
        var t = e.name,
          n = JSON.parse(localStorage.getItem(oa)) || [];
        return (
          (n = n.filter(function (e) {
            return e.name !== t;
          })),
          localStorage.setItem(oa, JSON.stringify(n)),
          localStorage.removeItem(oa + '.' + t),
          new Promise(function (e) {
            return e();
          })
        );
      }
      function pa(e) {
        var t = e.content,
          n = Object(te.a)(e, ['content']),
          r = JSON.parse(localStorage.getItem(oa)) || [];
        return (
          (r = r.filter(function (e) {
            return e.name !== n.name;
          })).push(n),
          localStorage.setItem(oa, JSON.stringify(r)),
          localStorage.setItem(oa + '.' + n.name, t),
          new Promise(function (e) {
            return e();
          })
        );
      }
      function ma(e) {
        var t = e.name,
          n = localStorage.getItem(oa + '.' + t);
        return new Promise(function (e) {
          return e(n);
        });
      }
      var fa,
        ba = function () {
          var e = {
              symbol: 'BTC/USDC',
              interval: '60',
              auto_save_delay: 5,
              theme: 'Dark',
              containerId: 'tv_chart_container',
              libraryPath: '/charting_library/',
              chartsStorageApiVersion: '1.1',
              clientId: 'tradingview.com',
              userId: 'public_user_id',
              fullscreen: !1,
              autosize: !0,
              datafeedUrl: 'https://history.riskswap.com/tv',
              studiesOverrides: {},
            },
            t = a.useRef(null),
            n = Vt().market,
            o = JSON.parse(localStorage.getItem('chartproperties') || '{}');
          return (
            a.useEffect(
              function () {
                var a,
                  i = (function (e, t) {
                    var n = t.prefix,
                      r = void 0 === n ? '' : n,
                      a = t.restrictTo;
                    a &&
                      (a = a.filter(function (t) {
                        return e.hasOwnProperty(t);
                      }));
                    var o = {};
                    return (
                      (function e(t, n, r) {
                        (r || Object.keys(t)).forEach(function (r) {
                          var a = t[r],
                            i = n ? n + '.' + r : r;
                          a && 'object' === typeof a ? e(a, i) : (o[i] = a);
                        });
                      })(e, r, a),
                      o
                    );
                  })(o, {
                    restrictTo: [
                      'scalesProperties',
                      'paneProperties',
                      'tradingProperties',
                    ],
                  }),
                  c = {
                    symbol:
                      (null ===
                        (a = Bt.find(function (e) {
                          return (
                            e.address.toBase58() ===
                            (null === n || void 0 === n
                              ? void 0
                              : n.publicKey.toBase58())
                          );
                        })) || void 0 === a
                        ? void 0
                        : a.name) || 'SRM/USDC',
                    datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
                      e.datafeedUrl,
                    ),
                    interval: e.interval,
                    container_id: e.containerId,
                    library_path: e.libraryPath,
                    auto_save_delay: 5,
                    locale: 'en',
                    disabled_features: ['use_localstorage_for_settings'],
                    enabled_features: ['study_templates'],
                    load_last_chart: !0,
                    client_id: e.clientId,
                    user_id: e.userId,
                    fullscreen: e.fullscreen,
                    autosize: e.autosize,
                    studies_overrides: e.studiesOverrides,
                    theme: 'Dark' === e.theme ? 'Dark' : 'Light',
                    overrides: Object(Ke.a)(
                      Object(Ke.a)({}, i),
                      {},
                      {
                        'mainSeriesProperties.candleStyle.upColor': '#41C77A',
                        'mainSeriesProperties.candleStyle.downColor': '#F23B69',
                        'mainSeriesProperties.candleStyle.borderUpColor':
                          '#41C77A',
                        'mainSeriesProperties.candleStyle.borderDownColor':
                          '#F23B69',
                        'mainSeriesProperties.candleStyle.wickUpColor':
                          '#41C77A',
                        'mainSeriesProperties.candleStyle.wickDownColor':
                          '#F23B69',
                      },
                    ),
                    save_load_adapter: r,
                    settings_adapter: {
                      initialSettings: {
                        'trading.orderPanelSettingsBroker': JSON.stringify({
                          showRelativePriceControl: !1,
                          showCurrencyRiskInQty: !1,
                          showPercentRiskInQty: !1,
                          showBracketsInCurrency: !1,
                          showBracketsInPercent: !1,
                        }),
                        'trading.chart.proterty':
                          localStorage.getItem('trading.chart.proterty') ||
                          JSON.stringify({ hideFloatingPanel: 1 }),
                        'chart.favoriteDrawings':
                          localStorage.getItem('chart.favoriteDrawings') ||
                          JSON.stringify([]),
                        'chart.favoriteDrawingsPosition':
                          localStorage.getItem(
                            'chart.favoriteDrawingsPosition',
                          ) || JSON.stringify({}),
                      },
                      setValue: function (e, t) {
                        localStorage.setItem(e, t);
                      },
                      removeValue: function (e) {
                        localStorage.removeItem(e);
                      },
                    },
                  },
                  s = new ra(c);
                s.onChartReady(function () {
                  (t.current = s),
                    s.subscribe('onAutoSaveNeeded', function () {
                      return s.saveChartToServer();
                    });
                });
              },
              [n, t.current],
            ),
            a.createElement('div', {
              id: e.containerId,
              className: 'TVChartContainer',
            })
          );
        },
        va = Me.a.Option,
        ha = Me.a.OptGroup,
        ga = je.c.div(
          fa ||
            (fa = Object(Se.a)([
              '\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 16px;\n  .borderNone .ant-select-selector {\n    border: none !important;\n  }\n',
            ])),
        );
      function ya() {
        var e = Object(Pe.i)().marketAddress;
        Object(a.useEffect)(
          function () {
            e && localStorage.setItem('marketAddress', JSON.stringify(e));
          },
          [e],
        );
        var t = Object(Pe.g)();
        return o.a.createElement(
          Ut,
          {
            marketAddress: e,
            setMarketAddress: function (e) {
              t.push(Ht(e));
            },
          },
          o.a.createElement(ka, null),
        );
      }
      function ka() {
        var e = Vt(),
          t = e.market,
          n = e.marketName,
          r = e.customMarkets,
          i = e.setCustomMarkets,
          c = e.setMarketAddress,
          s = Bt.filter(function (e) {
            var t,
              n = e.name;
            return (
              !e.deprecated &&
              !(null ===
                (t = Object({
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                }).REACT_APP_EXCLUDE_MARKETS) || void 0 === t
                ? void 0
                : t.includes(n))
            );
          }),
          l = Object(a.useState)(!1),
          u = Object(d.a)(l, 2),
          p = u[0],
          m = u[1],
          f = Object(a.useState)(!1),
          b = Object(d.a)(f, 2),
          v = b[0],
          h = b[1],
          g = pn(),
          y = Object(a.useState)({
            height: window.innerHeight,
            width: window.innerWidth,
          }),
          k = Object(d.a)(y, 2),
          E = k[0],
          w = k[1];
        Object(a.useEffect)(
          function () {
            document.title = n ? ''.concat(n, ' \u2014 Serum') : 'Serum';
          },
          [n],
        );
        var O = Object(a.useRef)();
        Object(a.useEffect)(function () {
          var e = function () {
            w({ height: window.innerHeight, width: window.innerWidth });
          };
          return (
            window.addEventListener('resize', e),
            function () {
              return window.removeEventListener('resize', e);
            }
          );
        }, []);
        var x = null === E || void 0 === E ? void 0 : E.width,
          S = {
            onChangeOrderRef: function (e) {
              return (O.current = e);
            },
            onPrice: Object(a.useCallback)(function (e) {
              return O.current && O.current({ price: e });
            }, []),
            onSize: Object(a.useCallback)(function (e) {
              return O.current && O.current({ size: e });
            }, []),
          },
          j = p
            ? o.a.createElement(wa, {
                switchToLiveMarkets: function () {
                  return m(!1);
                },
              })
            : x < 1e3
            ? o.a.createElement(Sa, S)
            : x < 1450
            ? o.a.createElement(xa, S)
            : o.a.createElement(Oa, S);
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(Zr, {
            visible: v,
            onClose: function () {
              return h(!1);
            },
            onAddCustomMarket: function (e) {
              if (
                mn(r).some(function (t) {
                  return t.address.toBase58() === e.address;
                })
              )
                ae({
                  message: 'A market with the given ID already exists',
                  type: 'error',
                });
              else {
                var t = [].concat(Object(A.a)(r), [e]);
                i(t), c(e.address);
              }
            },
          }),
          o.a.createElement(
            ga,
            null,
            o.a.createElement(
              Fe.a,
              {
                align: 'middle',
                style: { paddingLeft: 5, paddingRight: 5 },
                gutter: 16,
              },
              o.a.createElement(
                Re.a,
                null,
                o.a.createElement(Ea, {
                  markets: s,
                  setHandleDeprecated: m,
                  placeholder: 'Select market',
                  customMarkets: r,
                  onDeleteCustomMarket: function (e) {
                    var t = r.filter(function (t) {
                      return t.address !== e;
                    });
                    i(t);
                  },
                }),
              ),
              t
                ? o.a.createElement(
                    Re.a,
                    null,
                    o.a.createElement(
                      Be.a,
                      {
                        content: o.a.createElement(hr, {
                          address: t.publicKey.toBase58(),
                        }),
                        placement: 'bottomRight',
                        title: 'Market address',
                        trigger: 'click',
                      },
                      o.a.createElement(Er.a, { style: { color: '#2abdd2' } }),
                    ),
                  )
                : null,
              o.a.createElement(
                Re.a,
                null,
                o.a.createElement(Qr.a, {
                  style: { color: '#2abdd2' },
                  onClick: function () {
                    return h(!0);
                  },
                }),
              ),
              g &&
                g.length > 0 &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    Re.a,
                    null,
                    o.a.createElement(
                      Ce.a,
                      null,
                      'You have unsettled funds on old markets! Please go through them to claim your funds.',
                    ),
                  ),
                  o.a.createElement(
                    Re.a,
                    null,
                    o.a.createElement(
                      ie.a,
                      {
                        onClick: function () {
                          return m(!p);
                        },
                      },
                      p ? 'View new markets' : 'Handle old markets',
                    ),
                  ),
                ),
            ),
            j,
          ),
        );
      }
      function Ea(e) {
        var t,
          n,
          r = e.markets,
          a = e.placeholder,
          i = e.setHandleDeprecated,
          c = e.customMarkets,
          s = e.onDeleteCustomMarket,
          l = Vt(),
          u = l.market,
          d = l.setMarketAddress,
          p = function (e) {
            return e.split('/')[0];
          },
          m = function (e) {
            return e.split('/')[1];
          },
          f =
            null ===
              (t = mn(c).find(function (e) {
                return (
                  (null === u || void 0 === u ? void 0 : u.address) &&
                  e.address.equals(u.address)
                );
              })) ||
            void 0 === t ||
            null === (n = t.address) ||
            void 0 === n
              ? void 0
              : n.toBase58();
        return o.a.createElement(
          Me.a,
          {
            showSearch: !0,
            size: 'large',
            style: { width: 200 },
            placeholder: a || 'Select a market',
            optionFilterProp: 'name',
            onSelect: function (e) {
              i(!1), d(e);
            },
            listHeight: 400,
            value: f,
            filterOption: function (e, t) {
              var n;
              return (
                (null === t ||
                void 0 === t ||
                null === (n = t.name) ||
                void 0 === n
                  ? void 0
                  : n.toLowerCase().indexOf(e.toLowerCase())) >= 0
              );
            },
          },
          c &&
            c.length > 0 &&
            o.a.createElement(
              ha,
              { label: 'Custom' },
              c.map(function (e, t) {
                var n = e.address,
                  r = e.name;
                return o.a.createElement(
                  va,
                  {
                    value: n,
                    key: Object($r.a)(),
                    name: r,
                    style: {
                      padding: '10px',
                      backgroundColor: t % 2 === 0 ? 'rgb(39, 44, 61)' : null,
                    },
                  },
                  o.a.createElement(
                    Fe.a,
                    null,
                    o.a.createElement(Re.a, { flex: 'auto' }, r),
                    f !== n &&
                      o.a.createElement(
                        Re.a,
                        null,
                        o.a.createElement(er.a, {
                          onClick: function (e) {
                            e.stopPropagation(),
                              e.nativeEvent.stopImmediatePropagation(),
                              s && s(n);
                          },
                        }),
                      ),
                  ),
                );
              }),
            ),
          o.a.createElement(
            ha,
            { label: 'Markets' },
            r
              .sort(function (e, t) {
                return 'USDT' === m(e.name) && 'USDT' !== m(t.name)
                  ? -1
                  : 'USDT' !== m(e.name) && 'USDT' === m(t.name)
                  ? 1
                  : 0;
              })
              .sort(function (e, t) {
                return p(e.name) < p(t.name)
                  ? -1
                  : p(e.name) > p(t.name)
                  ? 1
                  : 0;
              })
              .map(function (e, t) {
                var n = e.address,
                  r = e.name,
                  a = e.deprecated;
                return o.a.createElement(
                  va,
                  {
                    value: n.toBase58(),
                    key: Object($r.a)(),
                    name: r,
                    style: {
                      padding: '10px',
                      backgroundColor: t % 2 === 0 ? 'rgb(39, 44, 61)' : null,
                    },
                  },
                  r,
                  ' ',
                  a ? ' (Deprecated)' : null,
                );
              }),
          ),
        );
      }
      var wa = function (e) {
          var t = e.switchToLiveMarkets;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Fe.a,
              null,
              o.a.createElement(
                Re.a,
                { flex: 'auto' },
                o.a.createElement(Gr, { switchToLiveMarkets: t }),
              ),
            ),
          );
        },
        Oa = function (e) {
          var t = e.onChangeOrderRef,
            n = e.onPrice,
            r = e.onSize;
          return o.a.createElement(
            Fe.a,
            { style: { minHeight: '900px', flexWrap: 'nowrap' } },
            o.a.createElement(
              Re.a,
              { flex: 'auto', style: { height: '50vh' } },
              o.a.createElement(
                Fe.a,
                { style: { height: '100%' } },
                o.a.createElement(ba, null),
              ),
              o.a.createElement(
                Fe.a,
                { style: { height: '70%' } },
                o.a.createElement(lr, null),
              ),
            ),
            o.a.createElement(
              Re.a,
              { flex: '360px', style: { height: '100%' } },
              o.a.createElement(Fn, { smallScreen: !1, onPrice: n, onSize: r }),
              o.a.createElement(qr, { smallScreen: !1 }),
            ),
            o.a.createElement(
              Re.a,
              {
                flex: '400px',
                style: {
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                },
              },
              o.a.createElement(zr, { setChangeOrderRef: t }),
              o.a.createElement(_r, null),
            ),
          );
        },
        xa = function (e) {
          var t = e.onChangeOrderRef,
            n = e.onPrice,
            r = e.onSize;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Fe.a,
              { style: { height: '30vh' } },
              o.a.createElement(ba, null),
            ),
            o.a.createElement(
              Fe.a,
              { style: { height: '900px' } },
              o.a.createElement(
                Re.a,
                { flex: 'auto', style: { height: '100%', display: 'flex' } },
                o.a.createElement(Fn, {
                  smallScreen: !0,
                  depth: 13,
                  onPrice: n,
                  onSize: r,
                }),
              ),
              o.a.createElement(
                Re.a,
                { flex: 'auto', style: { height: '100%', display: 'flex' } },
                o.a.createElement(qr, { smallScreen: !0 }),
              ),
              o.a.createElement(
                Re.a,
                {
                  flex: '400px',
                  style: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  },
                },
                o.a.createElement(zr, { setChangeOrderRef: t }),
                o.a.createElement(_r, null),
              ),
            ),
            o.a.createElement(
              Fe.a,
              null,
              o.a.createElement(
                Re.a,
                { flex: 'auto' },
                o.a.createElement(lr, null),
              ),
            ),
          );
        },
        Sa = function (e) {
          var t = e.onChangeOrderRef,
            n = e.onPrice,
            r = e.onSize;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Fe.a,
              { style: { height: '50vh' } },
              o.a.createElement(ba, null),
            ),
            o.a.createElement(
              Fe.a,
              null,
              o.a.createElement(
                Re.a,
                { xs: 24, sm: 12, style: { height: '100%', display: 'flex' } },
                o.a.createElement(zr, {
                  style: { flex: 1 },
                  setChangeOrderRef: t,
                }),
              ),
              o.a.createElement(
                Re.a,
                { xs: 24, sm: 12 },
                o.a.createElement(_r, null),
              ),
            ),
            o.a.createElement(
              Fe.a,
              { style: { height: '500px' } },
              o.a.createElement(
                Re.a,
                { xs: 24, sm: 12, style: { height: '100%', display: 'flex' } },
                o.a.createElement(Fn, {
                  smallScreen: !0,
                  onPrice: n,
                  onSize: r,
                }),
              ),
              o.a.createElement(
                Re.a,
                { xs: 24, sm: 12, style: { height: '100%', display: 'flex' } },
                o.a.createElement(qr, { smallScreen: !0 }),
              ),
            ),
            o.a.createElement(
              Fe.a,
              null,
              o.a.createElement(
                Re.a,
                { flex: 'auto' },
                o.a.createElement(lr, null),
              ),
            ),
          );
        },
        ja = n(129),
        _a = n(274);
      function Ta() {
        var e,
          t = Oe(),
          n = t.connected,
          r = t.wallet,
          a = t.select,
          i = t.connect,
          c = t.disconnect,
          s =
            (n &&
              (null === r ||
              void 0 === r ||
              null === (e = r.publicKey) ||
              void 0 === e
                ? void 0
                : e.toBase58())) ||
            '',
          l = o.a.createElement(
            ja.a,
            null,
            n && o.a.createElement(hr, { shorten: !0, address: s }),
            o.a.createElement(
              ja.a.Item,
              { key: '3', onClick: a },
              'Change Wallet',
            ),
          );
        return o.a.createElement(
          _a.a.Button,
          { onClick: n ? c : i, overlay: l },
          n ? 'Disconnect' : 'Connect',
        );
      }
      function Ca() {
        var e = Oe().connected,
          t = (function () {
            var e = G(),
              t = Oe(),
              n = t.connected,
              r = t.wallet,
              o = Object(a.useState)(!1),
              i = Object(d.a)(o, 2),
              c = i[0],
              s = i[1],
              p = Object(a.useState)(0),
              m = Object(d.a)(p, 2),
              f = m[0],
              b = m[1],
              v = Object(a.useState)(null),
              g = Object(d.a)(v, 2),
              y = g[0],
              k = g[1],
              E = Object(a.useState)(0),
              w = Object(d.a)(E, 2),
              O = w[0],
              x = w[1];
            return (
              Object(a.useEffect)(
                function () {
                  n &&
                    r &&
                    (function () {
                      var t = Object(u.a)(
                        l.a.mark(function t() {
                          var n, a;
                          return l.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    s(!1),
                                    (n = []),
                                    (a = (function () {
                                      var t = Object(u.a)(
                                        l.a.mark(function t(a) {
                                          var o, i;
                                          return l.a.wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.next = 2),
                                                      h(1e3 * Math.random())
                                                    );
                                                  case 2:
                                                    return (
                                                      (t.prev = 2),
                                                      (t.next = 5),
                                                      Ne.Market.load(
                                                        e,
                                                        a.address,
                                                        void 0,
                                                        a.programId,
                                                      )
                                                    );
                                                  case 5:
                                                    return (
                                                      (o = t.sent),
                                                      (t.next = 8),
                                                      o.loadOrdersForOwner(
                                                        e,
                                                        null === r ||
                                                          void 0 === r
                                                          ? void 0
                                                          : r.publicKey,
                                                        3e4,
                                                      )
                                                    );
                                                  case 8:
                                                    (i = t.sent),
                                                      n.push({
                                                        orders: i,
                                                        marketAddress: a.address.toBase58(),
                                                      }),
                                                      (t.next = 15);
                                                    break;
                                                  case 12:
                                                    (t.prev = 12),
                                                      (t.t0 = t.catch(2)),
                                                      console.warn(
                                                        'Error loading open order '
                                                          .concat(a.name, ' - ')
                                                          .concat(t.t0),
                                                      );
                                                  case 15:
                                                  case 'end':
                                                    return t.stop();
                                                }
                                            },
                                            t,
                                            null,
                                            [[2, 12]],
                                          );
                                        }),
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments);
                                      };
                                    })()),
                                    (t.next = 5),
                                    Promise.all(
                                      Bt.map(function (e) {
                                        return a(e);
                                      }),
                                    )
                                  );
                                case 5:
                                  k(n), x(new Date().getTime()), s(!0);
                                case 8:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()();
                },
                [e, n, r, f],
              ),
              {
                openOrders: y,
                loaded: c,
                refreshOpenOrders: function () {
                  new Date().getTime() - O > 1e4
                    ? b(function (e) {
                        return e + 1;
                      })
                    : console.log('not refreshing');
                },
              }
            );
          })(),
          n = t.openOrders,
          r = t.loaded,
          i = t.refreshOpenOrders,
          c = fn(),
          s = Object.fromEntries(
            c.map(function (e) {
              return [e.address.toBase58(), e.name];
            }),
          ),
          p = Kt(),
          m = Object(d.a)(p, 1)[0],
          f = Object.fromEntries(
            (m || []).map(function (e) {
              return [e.market.address.toBase58(), e.market];
            }),
          ),
          b = (n || [])
            .map(function (e) {
              return e.orders.map(function (t) {
                return Object(Ke.a)(
                  {
                    marketName: s[e.marketAddress],
                    market: f[e.marketAddress],
                  },
                  t,
                );
              });
            })
            .flat();
        return e
          ? o.a.createElement(
              yn,
              { style: { flex: 1, paddingTop: 10 } },
              o.a.createElement(ie.a, { onClick: i, loading: !r }, 'Refresh'),
              o.a.createElement(nr, {
                openOrders: b,
                pageSize: 25,
                loading: !r,
                onCancelSuccess: i,
                marketFilter: !0,
              }),
            )
          : o.a.createElement(
              Fe.a,
              { justify: 'center', style: { marginTop: '10%' } },
              o.a.createElement(Ta, null),
            );
      }
      function Aa(e) {
        var t = e.walletBalances,
          n = G(),
          r = Oe(),
          i = r.wallet,
          c = r.connected,
          s = Jt(),
          p = Object(d.a)(s, 1)[0],
          f = en(),
          b = Object(d.a)(f, 2),
          v = b[0],
          h = b[1],
          g = Kt(),
          y = Object(d.a)(g, 2),
          k = y[0],
          E = y[1],
          w = Object(a.useState)(!1),
          O = Object(d.a)(w, 2),
          x = O[0],
          S = O[1];
        function j() {
          return (j = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((S(!0), (e.prev = 1), i)) {
                          e.next = 5;
                          break;
                        }
                        return (
                          ae({
                            message: 'Wallet not connected',
                            description: 'Wallet not connected',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 5:
                        if (v && h) {
                          e.next = 8;
                          break;
                        }
                        return (
                          ae({
                            message: 'Error settling funds',
                            description: 'TokenAccounts not connected',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 8:
                        if (k && E) {
                          e.next = 11;
                          break;
                        }
                        return (
                          ae({
                            message: 'Error settling funds',
                            description: 'Markets not connected',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 11:
                        return (
                          (e.next = 13),
                          Ge({
                            connection: n,
                            tokenAccounts: v,
                            selectedTokenAccounts: p,
                            wallet: i,
                            markets: k.map(function (e) {
                              return e.market;
                            }),
                          })
                        );
                      case 13:
                        e.next = 18;
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(1)),
                          ae({
                            message: 'Error settling funds',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 18:
                        return (e.prev = 18), S(!1), e.finish(18);
                      case 21:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 15, 18, 21]],
              );
            }),
          )).apply(this, arguments);
        }
        var _ = [
          {
            title: 'Coin',
            key: 'coin',
            width: '20%',
            render: function (e) {
              return o.a.createElement(
                Fe.a,
                { align: 'middle' },
                o.a.createElement(
                  'a',
                  {
                    href: 'https://solscan.io/address/'.concat(e.mint),
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  e.coin || T(new m.PublicKey(e.mint)),
                ),
              );
            },
          },
          {
            title: 'Wallet Balance',
            dataIndex: 'walletBalance',
            key: 'walletBalance',
            width: '20%',
          },
          {
            title: 'Open orders total balances',
            dataIndex: 'openOrdersTotal',
            key: 'openOrdersTotal',
            width: '20%',
          },
          {
            title: 'Unsettled balances',
            dataIndex: 'openOrdersFree',
            key: 'openOrdersFree',
            width: '20%',
          },
          {
            title: 'Selected token account',
            key: 'selectTokenAccount',
            width: '20%',
            render: function (e) {
              return o.a.createElement(
                Fe.a,
                { align: 'middle', style: { width: '430px' } },
                o.a.createElement(br, {
                  accounts:
                    null === v || void 0 === v
                      ? void 0
                      : v.filter(function (t) {
                          return t.effectiveMint.toBase58() === e.mint;
                        }),
                  mint: e.mint,
                }),
              );
            },
          },
        ];
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(zn, {
            emptyLabel: 'No balances',
            dataSource: t,
            columns: _,
            pagination: !1,
          }),
          c &&
            o.a.createElement(
              ie.a,
              {
                onClick: function () {
                  return j.apply(this, arguments);
                },
                loading: x,
              },
              'Settle all funds',
            ),
        );
      }
      var Ia = rr.a.TabPane;
      function Pa() {
        var e = (function () {
            var e = en(),
              t = Object(d.a)(e, 1)[0],
              n = Oe().connected,
              r = Ft(),
              a = Object(d.a)(r, 2),
              o = a[0],
              i = a[1];
            if (!n || !i) return [];
            var c,
              s = {},
              l = Object(p.a)(t || []);
            try {
              for (l.s(); !(c = l.n()).done; ) {
                var u = c.value;
                if (u.account) {
                  var m = void 0;
                  (m = u.effectiveMint.equals(De.WRAPPED_SOL_MINT)
                    ? {
                        mint: De.WRAPPED_SOL_MINT,
                        owner: u.pubkey,
                        amount: u.account.lamports,
                      }
                    : St(u.account.data)).mint.toBase58() in s ||
                    (s[m.mint.toBase58()] = 0);
                  var f = o && o[m.mint.toBase58()],
                    v = O(
                      new b.a(m.amount),
                      x(
                        (null === f || void 0 === f ? void 0 : f.decimals) || 0,
                      ),
                    );
                  s[m.mint.toBase58()] += v;
                }
              }
            } catch (h) {
              l.e(h);
            } finally {
              l.f();
            }
            return Object.entries(s).map(function (e) {
              var t = Object(d.a)(e, 2);
              return { mint: t[0], balance: t[1] };
            });
          })(),
          t = Mt(),
          n = ln(),
          r = (e || []).map(function (e) {
            var r,
              a = {
                coin: t[e.mint],
                mint: e.mint,
                walletBalance: e.balance,
                openOrdersFree: 0,
                openOrdersTotal: 0,
              },
              o = Object(p.a)(n[e.mint] || []);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var i = r.value;
                (a.openOrdersFree += i.free), (a.openOrdersTotal += i.total);
              }
            } catch (c) {
              o.e(c);
            } finally {
              o.f();
            }
            return a;
          });
        return o.a.createElement(
          yn,
          { style: { flex: 1, paddingTop: 10 } },
          o.a.createElement(
            rr.a,
            { defaultActiveKey: 'walletBalances' },
            o.a.createElement(
              Ia,
              { tab: 'Wallet Balances', key: 'walletBalances' },
              o.a.createElement(Aa, { walletBalances: r }),
            ),
          ),
        );
      }
      var Ma,
        Fa,
        Ra,
        Ba = n(811),
        Ka = Me.a.Option,
        Na = Ce.a.Title,
        za = Object(je.c)(ie.a)(
          Ma ||
            (Ma = Object(Se.a)([
              '\n  color: #2abdd2;\n  background-color: #212734;\n  border-width: 0px;\n',
            ])),
        ),
        Da = Object(je.c)(ie.a)(
          Fa ||
            (Fa = Object(Se.a)([
              '\n  background: #02bf76;\n  border-color: #02bf76;\n',
            ])),
        );
      function La() {
        var e = Oe(),
          t = e.connected,
          n = e.wallet,
          r = Wt().customMarkets,
          i = mn(r),
          c = Object(a.useState)(null),
          s = Object(d.a)(c, 2),
          l = s[0],
          u = s[1],
          p = Object(a.useState)(void 0),
          m = Object(d.a)(p, 2),
          f = m[0],
          b = m[1],
          v = Object(a.useState)(void 0),
          h = Object(d.a)(v, 2),
          g = h[0],
          y = h[1],
          k = Object(a.useState)(void 0),
          E = Object(d.a)(k, 2),
          w = E[0],
          O = E[1],
          x = Object.fromEntries(
            i.map(function (e) {
              return [e.name, e];
            }),
          ),
          S = new Map();
        Object.keys(x).forEach(function (e) {
          var t = e.split('/'),
            n = Object(d.a)(t, 2),
            r = n[0],
            a = n[1];
          S.has(r)
            ? S.set(r, new Set([].concat(Object(A.a)(S.get(r) || []), [a])))
            : S.set(r, new Set([a])),
            S.has(a)
              ? S.set(a, new Set([].concat(Object(A.a)(S.get(a) || []), [r])))
              : S.set(a, new Set([r]));
        });
        return o.a.createElement(
          yn,
          { style: { maxWidth: 500 } },
          o.a.createElement(Na, { level: 3 }, 'Convert'),
          !t &&
            o.a.createElement(
              Fe.a,
              { justify: 'center' },
              o.a.createElement(Re.a, null, o.a.createElement(Ta, null)),
            ),
          S &&
            t &&
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                Fe.a,
                { style: { marginBottom: 8 } },
                o.a.createElement(
                  Re.a,
                  null,
                  o.a.createElement(
                    Me.a,
                    {
                      style: { minWidth: 300 },
                      placeholder: 'Select a token',
                      value: f,
                      onChange: function (e) {
                        b(e), y(void 0);
                      },
                    },
                    Array.from(S.keys()).map(function (e) {
                      return o.a.createElement(Ka, { value: e, key: e }, e);
                    }),
                  ),
                ),
              ),
              f &&
                o.a.createElement(
                  Fe.a,
                  { style: { marginBottom: 8 } },
                  o.a.createElement(
                    Re.a,
                    null,
                    o.a.createElement(
                      Me.a,
                      {
                        style: { minWidth: 300 },
                        value: g,
                        onChange: function (e) {
                          var t = i
                            .filter(function (e) {
                              return !e.deprecated;
                            })
                            .find(function (t) {
                              return (
                                t.name === ''.concat(f, '/').concat(e) ||
                                t.name === ''.concat(e, '/').concat(f)
                              );
                            });
                          if (!t)
                            return (
                              console.warn(
                                'Could not find market info for market names '
                                  .concat(f, '/')
                                  .concat(e, ' or ')
                                  .concat(e, '/')
                                  .concat(f),
                              ),
                              void ae({
                                message: 'Invalid market',
                                type: 'error',
                              })
                            );
                          u(t.address.toBase58()), y(e);
                        },
                      },
                      Object(A.a)(S.get(f) || []).map(function (e) {
                        return o.a.createElement(Ka, { value: e, key: e }, e);
                      }),
                    ),
                  ),
                ),
              f &&
                g &&
                o.a.createElement(
                  Ut,
                  { marketAddress: l, setMarketAddress: u },
                  o.a.createElement(qa, {
                    size: w,
                    setSize: O,
                    fromToken: f,
                    toToken: g,
                    wallet: n,
                    customMarkets: r,
                  }),
                ),
            ),
        );
      }
      function qa(e) {
        var t = e.size,
          n = e.setSize,
          r = e.fromToken,
          i = e.toToken,
          c = e.wallet,
          s = e.customMarkets,
          p = Vt().market,
          m = en(),
          f = Object(d.a)(m, 1)[0],
          b = dn(),
          v = Object(a.useState)(),
          h = Object(d.a)(v, 2),
          g = h[0],
          y = h[1],
          E = Object(a.useState)(),
          O = Object(d.a)(E, 2),
          x = O[0],
          S = O[1],
          j = cn().storedFeeDiscountKey,
          _ = G(),
          T = Q(),
          C = Object(a.useState)(!1),
          A = Object(d.a)(C, 2),
          I = A[0],
          P = A[1],
          M = function (e) {
            var t = qt(e, s).marketName;
            if (!t)
              throw Error(
                'Cannot determine if coin is quote or base because marketName is missing',
              );
            var n = t.split('/'),
              a = Object(d.a)(n, 1)[0];
            return r === a;
          },
          F = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, i, s, u, m, b, v, h, g;
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (p) {
                            e.next = 4;
                            break;
                          }
                          return (
                            console.warn(
                              'Market is null when attempting convert.',
                            ),
                            ae({ message: 'Invalid market', type: 'error' }),
                            e.abrupt('return')
                          );
                        case 4:
                          (n = tn(
                            f,
                            null === p || void 0 === p
                              ? void 0
                              : p.baseMintAddress,
                          )),
                            (r = tn(
                              f,
                              null === p || void 0 === p
                                ? void 0
                                : p.quoteMintAddress,
                            )),
                            (e.prev = 6),
                            (a = M(p) ? 'sell' : 'buy'),
                            (e.next = 15);
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(6)),
                            console.warn(e.t0),
                            ae({
                              message: 'Error placing order',
                              description: e.t0.message,
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 15:
                          return (
                            (o =
                              'buy' === a ? p._decoded.asks : p._decoded.bids),
                            (e.next = 18),
                            _.getAccountInfo(o)
                          );
                        case 18:
                          if (
                            null === (i = e.sent) || void 0 === i
                              ? void 0
                              : i.data
                          ) {
                            e.next = 22;
                            break;
                          }
                          return (
                            ae({
                              message: 'Invalid orderbook data',
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 22:
                          if (
                            ((s = Ne.Orderbook.decode(p, i.data)),
                            (u =
                              s &&
                              s.getL2(1).map(function (e) {
                                return Object(d.a)(e, 1)[0];
                              })),
                            (m = Object(d.a)(u, 1)),
                            m[0])
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (
                            ae({
                              message: 'No best price found',
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 27:
                          if (t) {
                            e.next = 30;
                            break;
                          }
                          return (
                            ae({
                              message: 'Size not specified',
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 30:
                          if (
                            ((b = w(p.tickSize)),
                            (v = bn(s, t, b)),
                            (h = w(p.minOrderSize)),
                            (g = k('sell' === a ? t : t / v, h)),
                            P(!0),
                            (e.prev = 36),
                            c)
                          ) {
                            e.next = 39;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 39:
                          return (
                            (e.next = 41),
                            et({
                              side: a,
                              price: v,
                              size: g,
                              orderType: 'ioc',
                              market: p,
                              connection: T,
                              wallet: c,
                              baseCurrencyAccount:
                                null === n || void 0 === n ? void 0 : n.pubkey,
                              quoteCurrencyAccount:
                                null === r || void 0 === r ? void 0 : r.pubkey,
                              feeDiscountPubkey: j,
                            })
                          );
                        case 41:
                          e.next = 47;
                          break;
                        case 43:
                          (e.prev = 43),
                            (e.t1 = e.catch(36)),
                            console.warn(e.t1),
                            ae({
                              message: 'Error placing order',
                              description: e.t1.message,
                              type: 'error',
                            });
                        case 47:
                          return (e.prev = 47), P(!1), e.finish(47);
                        case 50:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [6, 10],
                    [36, 43, 47, 50],
                  ],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          R = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, i, c, s, u;
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (n = M(p) ? 'sell' : 'buy'),
                            (r =
                              'buy' === n ? p._decoded.asks : p._decoded.bids),
                            (e.next = 5),
                            _.getAccountInfo(r)
                          );
                        case 5:
                          if (
                            (null === (a = e.sent) || void 0 === a
                              ? void 0
                              : a.data) &&
                            p
                          ) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt('return', [null, null]);
                        case 8:
                          if (
                            ((o = Ne.Orderbook.decode(p, a.data)),
                            (i =
                              o &&
                              o.getL2(1).map(function (e) {
                                return Object(d.a)(e, 1)[0];
                              })),
                            (c = Object(d.a)(i, 1)),
                            c[0] && t)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt('return', [null, null]);
                        case 12:
                          if (
                            ((s = w(p.tickSize)),
                            (u = vn(o, t, s)),
                            'buy' !== n)
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt('return', [u.toFixed(6), 1]);
                        case 18:
                          return e.abrupt('return', [1, u.toFixed(6)]);
                        case 19:
                          e.next = 25;
                          break;
                        case 21:
                          return (
                            (e.prev = 21),
                            (e.t0 = e.catch(0)),
                            console.log('Got error '.concat(e.t0)),
                            e.abrupt('return', [null, null])
                          );
                        case 25:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 21]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(a.useEffect)(
          function () {
            R().then(function (e) {
              var t = Object(d.a)(e, 2),
                n = t[0],
                r = t[1];
              y(n || void 0), S(r || void 0);
            });
          },
          [null === p || void 0 === p ? void 0 : p.address.toBase58(), t],
        );
        var B = p && t && t > 0,
          K = b.find(function (e) {
            return e.coin === r;
          }),
          N =
            0.99 *
            (((null === K || void 0 === K ? void 0 : K.unsettled) || 0) +
              ((null === K || void 0 === K ? void 0 : K.wallet) || 0));
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            Fe.a,
            { style: { marginBottom: 8 } },
            o.a.createElement(
              Re.a,
              null,
              o.a.createElement(Mr.a, {
                style: { minWidth: 300 },
                addonBefore: 'Size ('.concat(r, ')'),
                placeholder: 'Size',
                value: null === t ? void 0 : t,
                type: 'number',
                onChange: function (e) {
                  return n(parseFloat(e.target.value) || void 0);
                },
              }),
            ),
          ),
          o.a.createElement(
            Fe.a,
            { gutter: 12, style: { marginBottom: 8 } },
            o.a.createElement(
              Re.a,
              { span: 12 },
              o.a.createElement(
                za,
                {
                  block: !0,
                  size: 'large',
                  onClick: function () {
                    return n(k(N, 4));
                  },
                },
                'Max: ',
                N.toFixed(4),
              ),
            ),
            o.a.createElement(
              Re.a,
              { span: 12 },
              o.a.createElement(
                Da,
                {
                  block: !0,
                  type: 'primary',
                  size: 'large',
                  loading: I,
                  onClick: F,
                  disabled: !B,
                },
                'Convert',
              ),
            ),
          ),
          B &&
            o.a.createElement(
              Fe.a,
              { align: 'middle', justify: 'center' },
              o.a.createElement(Re.a, null, g, ' ', r),
              o.a.createElement(
                Re.a,
                { offset: 1 },
                o.a.createElement(Ba.a, null),
              ),
              o.a.createElement(Re.a, { offset: 1 }, x, ' ', i),
            ),
        );
      }
      var Wa = je.c.div(
        Ra ||
          (Ra = Object(Se.a)([
            '\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 16px;\n  .borderNone .ant-select-selector {\n    border: none !important;\n  }\n',
          ])),
      );
      function Ua() {
        var e = _(
            'marketAddress',
            null === Lt || void 0 === Lt ? void 0 : Lt.address.toBase58(),
          ),
          t = Object(d.a)(e, 2),
          n = t[0],
          r = t[1];
        return o.a.createElement(
          Wa,
          { style: { flex: 1, paddingTop: 10 } },
          o.a.createElement(
            Fe.a,
            { justify: 'center' },
            o.a.createElement(
              Re.a,
              null,
              o.a.createElement(
                Ut,
                { marketAddress: n, setMarketAddress: r },
                o.a.createElement(La, null),
              ),
            ),
          ),
        );
      }
      var Ha = n(794),
        Ja = n(812),
        Va = n(473),
        Ga = n.n(Va),
        Qa = Ce.a.Paragraph;
      function Ya(e) {
        var t = e.autoApprove,
          n = (function () {
            var e = Object(a.useContext)(wr);
            if (!e) throw new Error('Missing preferences context');
            return {
              autoSettleEnabled: e.autoSettleEnabled,
              setAutoSettleEnabled: e.setAutoSettleEnabled,
            };
          })(),
          r = n.autoSettleEnabled,
          i = n.setAutoSettleEnabled;
        return o.a.createElement(
          'div',
          null,
          o.a.createElement(Rr.a, {
            style: { marginRight: 10 },
            disabled: !t,
            checked: t && r,
            onChange: i,
          }),
          ' ',
          'Auto settle',
          !t &&
            o.a.createElement(
              Qa,
              { style: { color: 'rgba(255,255,255,0.5)', marginTop: 10 } },
              'To use auto settle, first enable auto approval in your wallet',
            ),
        );
      }
      function Xa(e) {
        var t = e.visible,
          n = e.testingConnection,
          r = e.onAddCustomEndpoint,
          i = e.onClose,
          c = Object(a.useState)(''),
          s = Object(d.a)(c, 2),
          l = s[0],
          u = s[1],
          p = Object(a.useState)(''),
          m = Object(d.a)(p, 2),
          f = m[0],
          b = m[1],
          v = function () {
            u(''), b(''), i && i();
          },
          h = '' !== l && '' !== f;
        return o.a.createElement(
          oe.a,
          {
            title: 'Add custom endpoint',
            visible: t,
            onOk: function () {
              r({ name: f, endpoint: 'https://' + l, custom: !0 }), v();
            },
            okText: 'Add',
            onCancel: v,
            okButtonProps: { disabled: !h, loading: n },
          },
          o.a.createElement(
            Fe.a,
            { style: { marginBottom: 8 } },
            o.a.createElement(
              Re.a,
              { span: 24 },
              o.a.createElement(Mr.a, {
                placeholder: 'Cluster Name',
                value: f,
                onChange: function (e) {
                  return b(e.target.value);
                },
              }),
            ),
          ),
          o.a.createElement(
            Fe.a,
            { style: { marginBottom: 8 } },
            o.a.createElement(
              Re.a,
              { span: 24 },
              o.a.createElement(Mr.a, {
                placeholder: 'Cluster Endpoint',
                value: l,
                addonBefore: 'https://',
                onChange: function (e) {
                  return u(e.target.value);
                },
              }),
            ),
          ),
        );
      }
      var Za,
        $a,
        eo = n(287),
        to = n(474),
        no = n.n(to),
        ro = Me.a.Option,
        ao = no.a.concat(
          Ne.TOKEN_MINTS.map(function (e) {
            return {
              name: ''.concat(e.name, ' SPL'),
              url: 'https://solscan.io/address/'.concat(e.address.toBase58()),
              description: ''.concat(e.name, ' SPL token'),
              icon: '',
              tags: [
                'token',
                'blockchain',
                'solana',
                'spl',
                'solana',
                e.address.toBase58(),
              ],
            };
          }),
        );
      function oo(e) {
        var t = Object(a.useState)([]),
          n = Object(d.a)(t, 2),
          r = n[0],
          i = n[1],
          c = Object(a.useState)(void 0),
          s = Object(d.a)(c, 2),
          l = s[0],
          u = s[1],
          p = function () {
            i([]), u(void 0);
          },
          m = r.map(function (e) {
            return o.a.createElement(
              ro,
              { key: e.name, value: e.name, href: e.url },
              o.a.createElement('h3', null, e.name),
              o.a.createElement(
                Ce.a.Text,
                { type: 'secondary' },
                e.url.replace('https://', ''),
              ),
            );
          }),
          f = Object(a.useRef)();
        return o.a.createElement(
          Me.a,
          {
            ref: f,
            showSearch: !0,
            allowClear: !0,
            value: l,
            placeholder:
              e.focussed || void 0 === e.focussed
                ? 'Search for dex, swap, wallet, token...'
                : '',
            onSearch: function (e) {
              u('' === e ? void 0 : e);
              var t = ao.filter(function (t) {
                return (function (e, t) {
                  var n = e.toLowerCase();
                  return (
                    t.name.toLowerCase().includes(n) ||
                    t.tags.some(function (e) {
                      return (
                        e.toLowerCase().includes(n) ||
                        n.includes(e.toLowerCase())
                      );
                    })
                  );
                })(e, t);
              });
              i(t);
            },
            onClear: p,
            onSelect: function (e, t) {
              window.open(t.href, '_blank'), p();
            },
            onFocus: e.onFocus,
            onBlur: function () {
              e.onBlur(), p();
            },
            notFoundContent: null,
            style: {
              width: e.width || '300px',
              transition: e.focussed ? 'width 0.1s ease 0.1s' : '',
            },
            dropdownStyle: { width: e.width || '300px' },
            dropdownMatchSelectWidth: !1,
            suffixIcon: o.a.createElement(eo.a, {
              onClick: function () {
                return f.current && f.current.focus();
              },
            }),
            filterOption: !1,
          },
          m,
        );
      }
      var io = je.c.div(
          Za ||
            (Za = Object(Se.a)([
              '\n  background-color: #0d1017;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 0px 30px;\n  flex-wrap: wrap;\n',
            ])),
        ),
        co = je.c.div(
          $a ||
            ($a = Object(Se.a)([
              '\n  display: flex;\n  align-items: center;\n  color: #2abdd2;\n  font-weight: bold;\n  cursor: pointer;\n  img {\n    height: 30px;\n    margin-right: 8px;\n  }\n',
            ])),
        ),
        so = {
          '/learn':
            'https://docs.projectserum.com/trade-on-serum-dex/trade-on-serum-dex-1',
          '/add-market': 'https://serum-academy.com/en/add-market/',
          '/wallet-support': 'https://serum-academy.com/en/wallet-support',
          '/dex-list': 'https://serum-academy.com/en/dex-list/',
          '/developer-resources':
            'https://serum-academy.com/en/developer-resources/',
          '/explorer': 'https://solscan.io',
          '/srm-faq': 'https://projectserum.com/srm-faq',
          '/swap': 'https://swap.projectserum.com',
        };
      function lo() {
        var e = Oe(),
          t = e.connected,
          n = e.wallet,
          r = Y(),
          i = r.endpoint,
          c = r.endpointInfo,
          s = r.setEndpoint,
          l = r.availableEndpoints,
          u = r.setCustomEndpoints,
          p = Object(a.useState)(!1),
          f = Object(d.a)(p, 2),
          b = f[0],
          v = f[1],
          h = Object(a.useState)(!1),
          g = Object(d.a)(h, 2),
          y = g[0],
          k = g[1],
          E = Object(Pe.h)(),
          w = Object(Pe.g)(),
          O = Object(a.useState)(!1),
          x = Object(d.a)(O, 2),
          S = x[0],
          j = x[1],
          _ = Object(a.useCallback)(
            function (e) {
              e.key in so || w.push(e.key);
            },
            [w],
          ),
          T = c && c.custom;
        Object(a.useEffect)(
          function () {
            var e = function () {
              T && s(U[0].endpoint);
            };
            return (
              window.addEventListener('beforeunload', e),
              function () {
                return window.removeEventListener('beforeunload', e);
              }
            );
          },
          [T, s],
        );
        var C = E.pathname.startsWith('/market/') ? E.pathname : Ht();
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(Xa, {
            visible: b,
            testingConnection: y,
            onAddCustomEndpoint: function (e) {
              if (
                l.some(function (t) {
                  return t.endpoint === e.endpoint;
                })
              )
                ae({
                  message: 'An endpoint with the given url already exists',
                  type: 'error',
                });
              else {
                var t = function (t) {
                  console.log(
                    'Connection to '.concat(e.endpoint, ' failed: ').concat(t),
                  ),
                    ae({
                      message: 'Failed to connect to '.concat(e.endpoint),
                      type: 'error',
                    });
                };
                try {
                  new m.Connection(e.endpoint, 'recent')
                    .getBlockTime(0)
                    .then(function () {
                      k(!0),
                        console.log(
                          'testing connection to '.concat(e.endpoint),
                        );
                      var t = [].concat(
                        Object(A.a)(
                          l.filter(function (e) {
                            return e.custom;
                          }),
                        ),
                        [e],
                      );
                      s(e.endpoint), u(t);
                    })
                    .catch(t);
                } catch (n) {
                  t(n);
                } finally {
                  k(!1);
                }
              }
            },
            onClose: function () {
              return v(!1);
            },
          }),
          o.a.createElement(
            io,
            null,
            o.a.createElement(
              co,
              {
                onClick: function () {
                  return w.push(C);
                },
              },
              o.a.createElement('img', { src: Ga.a, alt: '' }),
            ),
            o.a.createElement(
              ja.a,
              {
                mode: 'horizontal',
                onClick: _,
                selectedKeys: [E.pathname],
                style: {
                  borderBottom: 'none',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'flex-end',
                  flex: 1,
                },
              },
              o.a.createElement(
                ja.a.Item,
                { key: C, style: { margin: '0 10px 0 20px' } },
                'TRADE',
              ),
              !S &&
                o.a.createElement(
                  ja.a.Item,
                  { key: '/swap', style: { margin: '0 10px' } },
                  o.a.createElement(
                    'a',
                    {
                      href: so['/swap'],
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    'SWAP',
                  ),
                ),
              t &&
                (!S || '/balances' === E.pathname) &&
                o.a.createElement(
                  ja.a.Item,
                  { key: '/balances', style: { margin: '0 10px' } },
                  'BALANCES',
                ),
              t &&
                (!S || '/orders' === E.pathname) &&
                o.a.createElement(
                  ja.a.Item,
                  { key: '/orders', style: { margin: '0 10px' } },
                  'ORDERS',
                ),
              t &&
                (!S || '/convert' === E.pathname) &&
                o.a.createElement(
                  ja.a.Item,
                  { key: '/convert', style: { margin: '0 10px' } },
                  'CONVERT',
                ),
              (!S || '/list-new-market' === E.pathname) &&
                o.a.createElement(
                  ja.a.Item,
                  { key: '/list-new-market', style: { margin: '0 10px' } },
                  'ADD MARKET',
                ),
              !S &&
                o.a.createElement(
                  ja.a.SubMenu,
                  {
                    title: 'LEARN',
                    onTitleClick: function () {
                      return window.open(so['/learn'], '_blank');
                    },
                    style: { margin: '0 0px 0 10px' },
                  },
                  o.a.createElement(
                    ja.a.Item,
                    { key: '/add-market' },
                    o.a.createElement(
                      'a',
                      {
                        href: so['/add-market'],
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Adding a market',
                    ),
                  ),
                  o.a.createElement(
                    ja.a.Item,
                    { key: '/wallet-support' },
                    o.a.createElement(
                      'a',
                      {
                        href: so['/wallet-support'],
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Supported wallets',
                    ),
                  ),
                  o.a.createElement(
                    ja.a.Item,
                    { key: '/dex-list' },
                    o.a.createElement(
                      'a',
                      {
                        href: so['/dex-list'],
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'DEX list',
                    ),
                  ),
                  o.a.createElement(
                    ja.a.Item,
                    { key: '/developer-resources' },
                    o.a.createElement(
                      'a',
                      {
                        href: so['/developer-resources'],
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Developer resources',
                    ),
                  ),
                  o.a.createElement(
                    ja.a.Item,
                    { key: '/explorer' },
                    o.a.createElement(
                      'a',
                      {
                        href: so['/explorer'],
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Solana block explorer',
                    ),
                  ),
                  o.a.createElement(
                    ja.a.Item,
                    { key: '/srm-faq' },
                    o.a.createElement(
                      'a',
                      {
                        href: so['/srm-faq'],
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'SRM FAQ',
                    ),
                  ),
                ),
            ),
            o.a.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: 5,
                },
              },
              o.a.createElement(oo, {
                onFocus: function () {
                  return j(!0);
                },
                onBlur: function () {
                  return j(!1);
                },
                focussed: S,
                width: S ? '350px' : '35px',
              }),
            ),
            o.a.createElement(
              'div',
              null,
              o.a.createElement(
                Fe.a,
                {
                  align: 'middle',
                  style: { paddingLeft: 5, paddingRight: 5 },
                  gutter: 16,
                },
                o.a.createElement(
                  Re.a,
                  null,
                  o.a.createElement(Qr.a, {
                    style: { color: '#2abdd2' },
                    onClick: function () {
                      return v(!0);
                    },
                  }),
                ),
                o.a.createElement(
                  Re.a,
                  null,
                  o.a.createElement(
                    Be.a,
                    {
                      content: i,
                      placement: 'bottomRight',
                      title: 'URL',
                      trigger: 'hover',
                    },
                    o.a.createElement(Er.a, { style: { color: '#2abdd2' } }),
                  ),
                ),
                o.a.createElement(
                  Re.a,
                  null,
                  o.a.createElement(
                    Me.a,
                    {
                      onSelect: s,
                      value: i,
                      style: { marginRight: 8, width: '150px' },
                    },
                    l.map(function (e) {
                      var t = e.name,
                        n = e.endpoint;
                      return o.a.createElement(
                        Me.a.Option,
                        { value: n, key: n },
                        t,
                      );
                    }),
                  ),
                ),
              ),
            ),
            t &&
              o.a.createElement(
                'div',
                null,
                o.a.createElement(
                  Be.a,
                  {
                    content: o.a.createElement(Ya, {
                      autoApprove:
                        null === n || void 0 === n ? void 0 : n.autoApprove,
                    }),
                    placement: 'bottomRight',
                    title: 'Settings',
                    trigger: 'click',
                  },
                  o.a.createElement(
                    ie.a,
                    { style: { marginRight: 8 } },
                    o.a.createElement(Ja.a, null),
                    'Settings',
                  ),
                ),
              ),
            o.a.createElement('div', null, o.a.createElement(Ta, null)),
          ),
        );
      }
      var uo = n(441),
        po = 'https://discord.gg/EDvudv6',
        mo = 'https://t.me/ProjectSerum',
        fo = 'https://github.com/project-serum',
        bo = 'https://projectserum.com/',
        vo = 'https://projectserum.com/developer-resources',
        ho = 'https://solanabeach.io',
        go = Ha.a.Footer,
        yo = uo.a.useBreakpoint,
        ko = [
          { description: 'Serum Developer Resources', link: vo },
          { description: 'Discord', link: po },
          { description: 'Telegram', link: mo },
          { description: 'GitHub', link: fo },
          { description: 'Project Serum', link: bo },
          { description: 'Solana Network', link: ho },
        ],
        Eo = function () {
          var e = !yo().lg,
            t = Yn(),
            n = t.refCode,
            r = t.allowRefLink;
          return o.a.createElement(
            go,
            { style: { height: '55px', paddingBottom: 10, paddingTop: 10 } },
            n &&
              r &&
              o.a.createElement(
                Fe.a,
                { justify: 'center' },
                'Your referrer is ',
                n,
              ),
            o.a.createElement(
              Fe.a,
              { align: 'middle', gutter: [16, 4] },
              !e &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(Re.a, { flex: 'auto' }),
                  ko.map(function (e, t) {
                    return o.a.createElement(
                      Re.a,
                      { key: t + '' },
                      o.a.createElement(
                        re,
                        { external: !0, to: e.link },
                        e.description,
                      ),
                    );
                  }),
                ),
              o.a.createElement(Re.a, { flex: 'auto' }),
            ),
          );
        },
        wo = n(475),
        Oo = n.n(wo),
        xo = Ha.a.Header,
        So = Ha.a.Content;
      function jo(e) {
        var t = e.children,
          n = Yn(),
          r = n.refCode,
          i = n.setRefCode,
          c = n.allowRefLink,
          s = Object(Pe.h)().search,
          l = Oo.a.parse(s);
        return (
          Object(a.useEffect)(
            function () {
              l.refCode &&
                l.refCode !== r &&
                c &&
                (ae({ message: 'New referrer '.concat(l.refCode, ' added') }),
                i(l.refCode));
            },
            [l, r, i, c],
          ),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Ha.a,
              {
                style: {
                  display: 'flex',
                  minHeight: '100vh',
                  flexDirection: 'column',
                },
              },
              o.a.createElement(
                xo,
                { style: { padding: 0, minHeight: 64, height: 'unset' } },
                o.a.createElement(lo, null),
              ),
              o.a.createElement(So, { style: { flex: 1 } }, t),
              o.a.createElement(Eo, null),
            ),
          )
        );
      }
      var _o,
        To = n(798),
        Co = n(94),
        Ao = n(795);
      function Io(e, t, n) {
        var r = Object(a.useState)(''),
          i = Object(d.a)(r, 2),
          c = i[0],
          s = i[1],
          l = X(v(c) ? new m.PublicKey(c) : null),
          u = Object(d.a)(l, 2),
          p = u[0],
          f = u[1],
          b = Mt(),
          h = Object(a.useMemo)(
            function () {
              return Object.entries(b)
                .filter(function (e) {
                  var t = Object(d.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return (
                    n.includes(c) || r.toLowerCase().includes(c.toLowerCase())
                  );
                })
                .map(function (e) {
                  var t = Object(d.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return {
                    value: n,
                    label: o.a.createElement(
                      o.a.Fragment,
                      null,
                      r,
                      ' (',
                      n,
                      ')',
                    ),
                  };
                });
            },
            [b, c],
          ),
          g = Object(a.useMemo)(
            function () {
              var e = '',
                t = !1,
                n = null,
                r = null;
              if (c)
                if (((t = !0), p))
                  if (
                    p.owner.equals(Ne.TokenInstructions.TOKEN_PROGRAM_ID) &&
                    82 === p.data.length
                  ) {
                    var a = jt(p.data);
                    a.initialized
                      ? ((e = 'success'),
                        (r = {
                          address: new m.PublicKey(c),
                          decimals: a.decimals,
                        }))
                      : ((e = 'error'), (n = 'Invalid SPL mint'));
                  } else (e = 'error'), (n = 'Invalid SPL mint address');
                else
                  v(c) && !f
                    ? (e = 'validating')
                    : ((e = 'error'), (n = 'Invalid Solana address'));
              return {
                validateStatus: e,
                hasFeedback: t,
                help: n,
                mintInfo: r,
              };
            },
            [c, p, f],
          ),
          y = g.validateStatus,
          k = g.hasFeedback,
          E = g.help,
          w = g.mintInfo;
        return [
          o.a.createElement(
            To.a.Item,
            {
              label: o.a.createElement(
                Co.a,
                {
                  title: o.a.createElement(
                    o.a.Fragment,
                    null,
                    n,
                    ' You can look up token mint addresses on',
                    ' ',
                    o.a.createElement(
                      re,
                      { external: !0, to: 'https://sollet.io' },
                      'sollet.io',
                    ),
                    '.',
                  ),
                },
                t,
              ),
              name: e,
              validateStatus: y,
              hasFeedback: k,
              help: E,
            },
            o.a.createElement(Ao.a, {
              options: h,
              value: c,
              onChange: function (e) {
                return s(e);
              },
            }),
          ),
          w,
        ];
      }
      var Po = Ce.a.Text,
        Mo = Ce.a.Title,
        Fo = je.c.div(
          _o ||
            (_o = Object(Se.a)([
              '\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  margin-bottom: 24px;\n',
            ])),
        );
      function Ro() {
        var e,
          t,
          n = G(),
          r = Oe(),
          i = r.wallet,
          c = r.connected,
          s = Io(
            'baseMint',
            o.a.createElement(
              Po,
              null,
              'Base Token Mint Address',
              ' ',
              o.a.createElement(
                Po,
                { type: 'secondary' },
                '(e.g. BTC solana address:',
                ' ',
                o.a.createElement(
                  Po,
                  { type: 'secondary', code: !0 },
                  '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
                ),
                ')',
              ),
            ),
            'The base token is the token being traded. For example, the base token of a BTC/USDT market is BTC.',
          ),
          p = Object(d.a)(s, 2),
          m = p[0],
          f = p[1],
          b = Io(
            'quoteMint',
            o.a.createElement(
              Po,
              null,
              'Quote Token Mint Address',
              ' ',
              o.a.createElement(
                Po,
                { type: 'secondary' },
                '(e.g. USDT solana address:',
                ' ',
                o.a.createElement(
                  Po,
                  { type: 'secondary', code: !0 },
                  'BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4',
                ),
                ')',
              ),
            ),
            'The quote token is the token used to price trades. For example, the quote token of a BTC/USDT market is USDT.',
          ),
          v = Object(d.a)(b, 2),
          h = v[0],
          g = v[1],
          y = Object(a.useState)('1'),
          k = Object(d.a)(y, 2),
          E = k[0],
          w = k[1],
          O = Object(a.useState)('0.01'),
          x = Object(d.a)(O, 2),
          S = x[0],
          j = x[1],
          _ = Ne.MARKETS.find(function (e) {
            return !e.deprecated;
          }).programId,
          T = Object(a.useState)(!1),
          C = Object(d.a)(T, 2),
          A = C[0],
          I = C[1],
          P = Object(a.useState)(null),
          M = Object(d.a)(P, 2),
          F = M[0],
          R = M[1];
        f &&
          parseFloat(E) > 0 &&
          ((e = Math.round(Math.pow(10, f.decimals) * parseFloat(E))),
          g &&
            parseFloat(S) > 0 &&
            (t = Math.round(
              parseFloat(E) * Math.pow(10, g.decimals) * parseFloat(S),
            )));
        var B = c && !!f && !!g && !!e && !!t;
        function K() {
          return (K = Object(u.a)(
            l.a.mark(function r() {
              var a;
              return l.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (B) {
                          r.next = 2;
                          break;
                        }
                        return r.abrupt('return');
                      case 2:
                        return (
                          I(!0),
                          (r.prev = 3),
                          (r.next = 6),
                          nt({
                            connection: n,
                            wallet: i,
                            baseMint: f.address,
                            quoteMint: g.address,
                            baseLotSize: e,
                            quoteLotSize: t,
                            dexProgramId: _,
                          })
                        );
                      case 6:
                        (a = r.sent), R(a), (r.next = 14);
                        break;
                      case 10:
                        (r.prev = 10),
                          (r.t0 = r.catch(3)),
                          console.warn(r.t0),
                          ae({
                            message: 'Error listing new market',
                            description: r.t0.message,
                            type: 'error',
                          });
                      case 14:
                        return (r.prev = 14), I(!1), r.finish(14);
                      case 17:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[3, 10, 14, 17]],
              );
            }),
          )).apply(this, arguments);
        }
        return o.a.createElement(
          Fo,
          null,
          o.a.createElement(
            yn,
            null,
            o.a.createElement(Mo, { level: 4 }, 'List New Market'),
            o.a.createElement(
              To.a,
              {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 },
                layout: 'vertical',
                onFinish: function () {
                  return K.apply(this, arguments);
                },
              },
              m,
              h,
              o.a.createElement(
                To.a.Item,
                {
                  label: o.a.createElement(
                    Co.a,
                    {
                      title:
                        'Smallest allowed order size. For a BTC/USDT market, this would be in units of BTC.',
                    },
                    'Minimum Order Size',
                    ' ',
                    o.a.createElement(
                      Po,
                      { type: 'secondary' },
                      '(Lot size in e.g. BTC)',
                    ),
                  ),
                  name: 'lotSize',
                  initialValue: '1',
                  validateStatus: f && g ? (e ? 'success' : 'error') : null,
                  hasFeedback: f && g,
                },
                o.a.createElement(Mr.a, {
                  value: E,
                  onChange: function (e) {
                    return w(e.target.value.trim());
                  },
                  type: 'number',
                  min: '0',
                  step: 'any',
                }),
              ),
              o.a.createElement(
                To.a.Item,
                {
                  label: o.a.createElement(
                    Co.a,
                    {
                      title:
                        'Smallest amount by which prices can move. For a BTC/USDT market, this would be in units of USDT.',
                    },
                    'Tick Size',
                    ' ',
                    o.a.createElement(
                      Po,
                      { type: 'secondary' },
                      '(Price increment in e.g. USDT)',
                    ),
                  ),
                  name: 'tickSize',
                  initialValue: '0.01',
                  validateStatus: f && g ? (t ? 'success' : 'error') : null,
                  hasFeedback: f && g,
                },
                o.a.createElement(Mr.a, {
                  value: S,
                  onChange: function (e) {
                    return j(e.target.value.trim());
                  },
                  type: 'number',
                  min: '0',
                  step: 'any',
                }),
              ),
              o.a.createElement(
                To.a.Item,
                { label: ' ', colon: !1 },
                o.a.createElement(
                  ie.a,
                  {
                    type: 'primary',
                    htmlType: 'submit',
                    disabled: !B,
                    loading: A,
                  },
                  c ? 'Submit' : 'Not connected to wallet',
                ),
              ),
            ),
          ),
          F
            ? o.a.createElement(
                yn,
                null,
                o.a.createElement(
                  Po,
                  null,
                  'New market address: ',
                  F.toBase58(),
                ),
              )
            : null,
        );
      }
      var Bo,
        Ko,
        No = n(78),
        zo = Ce.a.Text,
        Do = Ce.a.Title,
        Lo = je.c.div(
          Bo ||
            (Bo = Object(Se.a)([
              '\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  margin-bottom: 24px;\n',
            ])),
        ),
        qo = je.c.div(
          Ko ||
            (Ko = Object(Se.a)([
              '\n  margin-top: 16px;\n  margin-bottom: 16px;\n',
            ])),
        ),
        Wo = '71JS8f7y7ASMbuuSMCVG7a3qDdcVco2qYD6bMJeZqUCm',
        Uo = 'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6',
        Ho = [
          { label: 'Simple Pool ('.concat(Wo, ')'), value: Wo },
          {
            label: 'Admin-Controlled Pool ('.concat(
              'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6',
              ')',
            ),
            value: 'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6',
          },
        ];
      function Jo() {
        var e = G(),
          t = Oe(),
          n = t.wallet,
          r = t.connected,
          i = Object(a.useState)(''),
          c = Object(d.a)(i, 2),
          s = c[0],
          f = c[1],
          v = Object(a.useState)(Uo),
          h = Object(d.a)(v, 2),
          g = h[0],
          y = h[1],
          k = Object(a.useState)('1'),
          E = Object(d.a)(k, 2),
          w = E[0],
          O = E[1],
          x = Object(a.useState)([{ valid: !1 }, { valid: !1 }]),
          S = Object(d.a)(x, 2),
          j = S[0],
          _ = S[1],
          T = Object(a.useState)(!1),
          C = Object(d.a)(T, 2),
          A = C[0],
          I = C[1],
          P = Object(a.useState)(''),
          M = Object(d.a)(P, 2),
          F = M[0],
          R = M[1],
          B = en(),
          K = Object(d.a)(B, 1)[0],
          N = Object(a.useState)(!1),
          z = Object(d.a)(N, 2),
          D = z[0],
          L = z[1],
          q = Object(a.useState)(null),
          W = Object(d.a)(q, 2),
          U = W[0],
          H = W[1];
        Object(a.useEffect)(
          function () {
            g === Wo
              ? I(!1)
              : 'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6' === g && I(!0);
          },
          [g],
        ),
          Object(a.useEffect)(
            function () {
              r && n && R(n.publicKey.toBase58());
            },
            [n, r],
          );
        var J =
          r &&
          s.trim() &&
          g &&
          parseFloat(w) > 0 &&
          j.every(function (e) {
            return e.valid;
          }) &&
          K &&
          (F || !A);
        function V() {
          return (V = Object(u.a)(
            l.a.mark(function t() {
              var r, a, o, i, c, u, f, v, h;
              return l.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (J && n) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return');
                      case 2:
                        return (
                          L(!0),
                          (t.prev = 3),
                          (r = j),
                          (t.next = 7),
                          No.PoolTransactions.initializeSimplePool({
                            connection: e,
                            programId: new m.PublicKey(g),
                            poolName: s,
                            poolStateSpace: 1024,
                            poolMintDecimals: 6,
                            initialPoolMintSupply: new b.a(
                              Math.round(Math.pow(10, 6) * parseFloat(w)),
                            ),
                            assetMints: r.map(function (e) {
                              return e.mint;
                            }),
                            initialAssetQuantities: r.map(function (e) {
                              return new b.a(e.quantity);
                            }),
                            creator: n.publicKey,
                            creatorAssets: r.map(function (e) {
                              var t =
                                null === K || void 0 === K
                                  ? void 0
                                  : K.find(function (t) {
                                      return t.effectiveMint.equals(e.mint);
                                    });
                              if (!t)
                                throw new Error(
                                  'No token account for ' + e.mint.toBase58(),
                                );
                              return t.pubkey;
                            }),
                            additionalAccounts: A
                              ? [
                                  {
                                    pubkey: new m.PublicKey(F),
                                    isSigner: !1,
                                    isWritable: !1,
                                  },
                                ]
                              : [],
                          })
                        );
                      case 7:
                        return (
                          (a = t.sent),
                          (o = Object(d.a)(a, 2)),
                          (i = o[0]),
                          (c = o[1]),
                          (t.next = 13),
                          lt({
                            transactionsAndSigners: c,
                            wallet: n,
                            connection: e,
                          })
                        );
                      case 13:
                        (u = t.sent),
                          (f = Object(p.a)(u)),
                          (t.prev = 15),
                          f.s();
                      case 17:
                        if ((v = f.n()).done) {
                          t.next = 23;
                          break;
                        }
                        return (
                          (h = v.value),
                          (t.next = 21),
                          dt({ signedTransaction: h, connection: e })
                        );
                      case 21:
                        t.next = 17;
                        break;
                      case 23:
                        t.next = 28;
                        break;
                      case 25:
                        (t.prev = 25), (t.t0 = t.catch(15)), f.e(t.t0);
                      case 28:
                        return (t.prev = 28), f.f(), t.finish(28);
                      case 31:
                        H(i), (t.next = 38);
                        break;
                      case 34:
                        (t.prev = 34),
                          (t.t1 = t.catch(3)),
                          console.warn(t.t1),
                          ae({
                            message: 'Error creating new pool',
                            description: t.t1.message,
                            type: 'error',
                          });
                      case 38:
                        return (t.prev = 38), L(!1), t.finish(38);
                      case 41:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [
                  [3, 34, 38, 41],
                  [15, 25, 28, 31],
                ],
              );
            }),
          )).apply(this, arguments);
        }
        return o.a.createElement(
          Lo,
          null,
          o.a.createElement(
            yn,
            null,
            o.a.createElement(Do, { level: 4 }, 'Create new pool'),
            o.a.createElement(
              To.a,
              {
                layout: 'vertical',
                onFinish: function () {
                  return V.apply(this, arguments);
                },
              },
              o.a.createElement(
                To.a.Item,
                {
                  label: o.a.createElement(
                    Co.a,
                    { title: 'Public name of the pool.' },
                    'Pool Name',
                  ),
                  name: 'name',
                },
                o.a.createElement(Mr.a, {
                  value: s,
                  onChange: function (e) {
                    return f(e.target.value);
                  },
                }),
              ),
              o.a.createElement(
                To.a.Item,
                {
                  label: o.a.createElement(
                    Co.a,
                    { title: 'Address of the pool program.' },
                    'Program ID',
                    ' ',
                    o.a.createElement(
                      zo,
                      { type: 'secondary' },
                      '(e.g. ',
                      Uo,
                      ')',
                    ),
                  ),
                  name: 'programId',
                  initialValue: Uo,
                },
                o.a.createElement(Ao.a, {
                  value: g,
                  onChange: function (e) {
                    return y(e);
                  },
                  options: Ho,
                }),
              ),
              o.a.createElement(
                To.a.Item,
                {
                  label: o.a.createElement(
                    Co.a,
                    {
                      title:
                        'Initial number of pool tokens to mint to your account.',
                    },
                    'Initial Pool Token Supply',
                  ),
                  name: 'initialSupply',
                  initialValue: '1',
                },
                o.a.createElement(Mr.a, {
                  value: w,
                  onChange: function (e) {
                    return O(e.target.value.trim());
                  },
                  type: 'number',
                  min: '0',
                  step: 'any',
                }),
              ),
              o.a.createElement(
                qo,
                null,
                o.a.createElement(
                  ie.a,
                  {
                    onClick: function () {
                      return _(function (e) {
                        return e.concat({ valid: !1 });
                      });
                    },
                  },
                  'Add token',
                ),
                ' ',
                o.a.createElement(
                  ie.a,
                  {
                    onClick: function () {
                      return _(function (e) {
                        return e.slice(0, e.length - 1);
                      });
                    },
                    disabled: j.length <= 1,
                  },
                  'Remove token',
                ),
              ),
              j.map(function (e, t) {
                return o.a.createElement(Vo, {
                  setInitialAssets: _,
                  index: t,
                  key: t,
                });
              }),
              o.a.createElement(
                To.a.Item,
                {
                  label: o.a.createElement(
                    Co.a,
                    {
                      title:
                        'Whether the assets in the pool can be controlled by the pool admin.',
                    },
                    'Admin Controlled',
                  ),
                  name: 'adminControlled',
                },
                o.a.createElement(Rr.a, {
                  checked: A,
                  onChange: function (e) {
                    return I(e);
                  },
                  disabled:
                    g === Wo ||
                    'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6' === g,
                }),
              ),
              A
                ? o.a.createElement(
                    To.a.Item,
                    {
                      label: o.a.createElement(
                        Co.a,
                        { title: 'Address of the pool admin account.' },
                        'Admin Address',
                      ),
                    },
                    o.a.createElement(Mr.a, {
                      value: F,
                      onChange: function (e) {
                        return R(e.target.value.trim());
                      },
                    }),
                  )
                : null,
              o.a.createElement(
                To.a.Item,
                { label: ' ', colon: !1 },
                o.a.createElement(
                  ie.a,
                  {
                    type: 'primary',
                    htmlType: 'submit',
                    disabled: !J,
                    loading: D,
                  },
                  r ? 'Submit' : 'Not connected to wallet',
                ),
              ),
            ),
          ),
          U
            ? o.a.createElement(
                yn,
                null,
                o.a.createElement(
                  zo,
                  null,
                  'New pool address:',
                  ' ',
                  o.a.createElement(
                    re,
                    { to: '/pools/'.concat(U.toBase58()) },
                    U.toBase58(),
                  ),
                ),
              )
            : null,
        );
      }
      function Vo(e) {
        var t = e.setInitialAssets,
          n = e.index,
          r = Io(
            'mint'.concat(n),
            o.a.createElement(zo, null, 'Token ', n + 1, ' Mint Address'),
            o.a.createElement(
              o.a.Fragment,
              null,
              'Token mint address for token ',
              n + 1,
              '.',
            ),
          ),
          i = Object(d.a)(r, 2),
          c = i[0],
          s = i[1],
          l = Object(a.useState)(''),
          u = Object(d.a)(l, 2),
          p = u[0],
          m = u[1];
        return (
          Object(a.useEffect)(
            function () {
              var e;
              if (s && parseFloat(p) >= 0) {
                var r = Math.round(Math.pow(10, s.decimals) * parseFloat(p));
                e = { mint: s.address, quantity: r, valid: !0 };
              } else e = { valid: !1 };
              t(function (t) {
                return t.map(function (t, r) {
                  return r === n ? e : t;
                });
              });
            },
            [t, n, s, p],
          ),
          o.a.createElement(
            o.a.Fragment,
            null,
            c,
            o.a.createElement(
              To.a.Item,
              {
                label: o.a.createElement(
                  Co.a,
                  {
                    title: o.a.createElement(
                      o.a.Fragment,
                      null,
                      'Initial quantity of token ',
                      n + 1,
                      ' to deposit into the pool.',
                    ),
                  },
                  'Token ',
                  n + 1,
                  ' Initial Quantity',
                ),
                name: 'quantity'.concat(n),
                validateStatus: 'success',
              },
              o.a.createElement(Mr.a, {
                value: p,
                onChange: function (e) {
                  return m(e.target.value.trim());
                },
                type: 'number',
                min: '0',
                step: 'any',
              }),
            ),
          )
        );
      }
      var Go = n(801);
      function Qo(e) {
        var t,
          n = e.mint,
          r = e.showAddress,
          a = void 0 !== r && r,
          i = Mt();
        if (!n) return null;
        var c = 'string' === typeof n ? new m.PublicKey(n) : n,
          s = 'string' === typeof n ? n : n.toBase58(),
          l = null !== (t = i[s]) && void 0 !== t ? t : T(c);
        return o.a.createElement(
          o.a.Fragment,
          null,
          l,
          a
            ? o.a.createElement(
                o.a.Fragment,
                null,
                ' ',
                o.a.createElement(
                  Be.a,
                  {
                    content: o.a.createElement(hr, { address: s }),
                    placement: 'bottomRight',
                    title: 'Token mint',
                    trigger: 'hover',
                  },
                  o.a.createElement(Er.a, { style: { color: '#2abdd2' } }),
                ),
              )
            : null,
        );
      }
      function Yo(e) {
        var t = e.poolInfo,
          n = e.basket;
        return o.a.createElement(
          'ul',
          null,
          t.state.assets.map(function (e, t) {
            return o.a.createElement(Xo, {
              key: t,
              mint: e.mint,
              quantity: null === n || void 0 === n ? void 0 : n.quantities[t],
            });
          }),
        );
      }
      function Xo(e) {
        var t = e.mint,
          n = e.quantity,
          r = X(t),
          a = Object(d.a)(r, 1)[0],
          i = o.a.createElement(Te.a, { size: 'small' });
        if (a && n) {
          var c = jt(a.data);
          i = o.a.createElement(
            o.a.Fragment,
            null,
            n.toNumber() / Math.pow(10, c.decimals),
          );
        }
        return o.a.createElement(
          'li',
          null,
          i,
          ' ',
          o.a.createElement(Qo, { mint: t, showAddress: !0 }),
        );
      }
      var Zo = Ce.a.Text,
        $o = Ce.a.Paragraph,
        ei = new Intl.NumberFormat(void 0, {
          style: 'percent',
          minimumFractionDigits: 0,
          maximumFractionDigits: 6,
        });
      function ti(e) {
        var t = e.poolInfo,
          n = e.mintInfo,
          r = G(),
          a = D(function () {
            return Object(No.getPoolBasket)(r, t, { redeem: n.supply });
          }, Object(W.a)(No.getPoolBasket, r, t, 'total', n)),
          i = Object(d.a)(a, 1)[0];
        return o.a.createElement(
          yn,
          { stretchVertical: !0 },
          o.a.createElement($o, null, 'Name: ', t.state.name),
          o.a.createElement(
            $o,
            null,
            'Address: ',
            o.a.createElement(Zo, { copyable: !0 }, t.address.toBase58()),
          ),
          o.a.createElement(
            $o,
            null,
            'Pool token mint address:',
            ' ',
            o.a.createElement(
              Zo,
              { copyable: !0 },
              t.state.poolTokenMint.toBase58(),
            ),
          ),
          t.state.adminKey
            ? o.a.createElement(
                $o,
                null,
                'Pool admin: ',
                o.a.createElement(
                  Zo,
                  { copyable: !0 },
                  t.state.adminKey.toBase58(),
                ),
              )
            : null,
          o.a.createElement(
            $o,
            null,
            'Fee rate: ',
            ei.format(t.state.feeRate / 1e6),
          ),
          o.a.createElement(
            $o,
            null,
            'Total supply: ',
            n.supply.toNumber() / Math.pow(10, n.decimals),
          ),
          o.a.createElement(Zo, null, 'Total assets:'),
          o.a.createElement(
            'div',
            null,
            o.a.createElement(Yo, { poolInfo: t, basket: i }),
          ),
        );
      }
      var ni = Ce.a.Text,
        ri = rr.a.TabPane;
      function ai(e) {
        var t = e.poolInfo,
          n = e.mintInfo;
        return o.a.createElement(
          yn,
          { stretchVertical: !0 },
          o.a.createElement(
            rr.a,
            null,
            o.a.createElement(
              ri,
              { tab: 'Create', key: 'create' },
              o.a.createElement(oi, {
                poolInfo: t,
                mintInfo: n,
                tab: 'create',
              }),
            ),
            o.a.createElement(
              ri,
              { tab: 'Redeem', key: 'redeem' },
              o.a.createElement(oi, {
                poolInfo: t,
                mintInfo: n,
                tab: 'redeem',
              }),
            ),
          ),
        );
      }
      function oi(e) {
        var t = e.poolInfo,
          n = e.mintInfo,
          r = e.tab,
          i = G(),
          c = Oe(),
          s = c.wallet,
          p = c.connected,
          m = Object(a.useState)(''),
          f = Object(d.a)(m, 2),
          v = f[0],
          h = f[1],
          g = en(),
          y = Object(d.a)(g, 1)[0],
          k = Object(a.useState)(!1),
          E = Object(d.a)(k, 2),
          w = E[0],
          O = E[1],
          x = Object(a.useMemo)(
            function () {
              var e = Math.round(parseFloat(v) * Math.pow(10, n.decimals));
              return e > 0
                ? 'create' === r
                  ? { create: new b.a(e) }
                  : { redeem: new b.a(e) }
                : null;
            },
            [n.decimals, v, r],
          ),
          S = D(
            Object(u.a)(
              l.a.mark(function e() {
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!x) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 3), Object(No.getPoolBasket)(i, t, x);
                      case 3:
                        (e.t0 = e.sent), (e.next = 7);
                        break;
                      case 6:
                        e.t0 = null;
                      case 7:
                        return e.abrupt('return', e.t0);
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            Object(W.a)(No.getPoolBasket, i, t.address.toBase58(), x),
          ),
          j = Object(d.a)(S, 2),
          _ = j[0],
          T = j[1];
        function C(e) {
          var t =
            null === y || void 0 === y
              ? void 0
              : y.find(function (t) {
                  return t.effectiveMint.equals(e);
                });
          if (t) return t.pubkey;
          throw new Error('No token account for ' + e.toBase58());
        }
        var A = p && x && _;
        function I() {
          return (I = Object(u.a)(
            l.a.mark(function e(n) {
              var a, o, c;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((n.preventDefault(), x && _ && p && A && s)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return');
                      case 3:
                        return (
                          O(!0),
                          (e.prev = 4),
                          (a = No.PoolTransactions.execute(
                            t,
                            x,
                            {
                              owner: s.publicKey,
                              poolTokenAccount: C(t.state.poolTokenMint),
                              assetAccounts: t.state.assets.map(function (e) {
                                return C(e.mint);
                              }),
                            },
                            _,
                          )),
                          (o = a.transaction),
                          (c = a.signers),
                          (e.next = 8),
                          ot({
                            connection: i,
                            wallet: s,
                            transaction: o,
                            signers: c,
                          })
                        );
                      case 8:
                        e.next = 14;
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(4)),
                          console.warn(e.t0),
                          ae({
                            message:
                              'Error ' +
                              ('create' === r ? 'creating' : 'redeeming') +
                              ' pool tokens',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 14:
                        return (e.prev = 14), O(!1), e.finish(14);
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 10, 14, 17]],
              );
            }),
          )).apply(this, arguments);
        }
        return o.a.createElement(
          'form',
          {
            onSubmit: function (e) {
              return I.apply(this, arguments);
            },
          },
          o.a.createElement(Mr.a, {
            addonBefore: o.a.createElement(o.a.Fragment, null, 'Quantity'),
            value: v,
            onChange: function (e) {
              return h(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(
            'div',
            null,
            _
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    ni,
                    null,
                    'create' === r ? 'Cost' : 'Proceeds',
                    ': ',
                  ),
                  o.a.createElement(
                    ni,
                    { type: 'secondary' },
                    '(indicative only)',
                  ),
                  o.a.createElement(Yo, { poolInfo: t, basket: _ }),
                )
              : T
              ? null
              : o.a.createElement(Te.a, null),
          ),
          o.a.createElement(
            ie.a,
            { htmlType: 'submit', type: 'primary', disabled: !A || w },
            p ? 'Submit' : 'Wallet not connected',
          ),
        );
      }
      var ii = rr.a.TabPane;
      function ci(e) {
        var t = e.poolInfo;
        return o.a.createElement(
          yn,
          null,
          o.a.createElement(
            rr.a,
            null,
            o.a.createElement(
              ii,
              { tab: 'Wallet Balances', key: 'wallet' },
              o.a.createElement(si, { poolInfo: t }),
            ),
            o.a.createElement(
              ii,
              { tab: 'Pool Balances', key: 'pool' },
              o.a.createElement(li, { poolInfo: t }),
            ),
          ),
        );
      }
      function si(e) {
        var t = e.poolInfo,
          n = en(),
          r = Object(d.a)(n, 1)[0];
        return o.a.createElement(
          'ul',
          null,
          [t.state.poolTokenMint]
            .concat(
              Object(A.a)(
                t.state.assets.map(function (e) {
                  return e.mint;
                }),
              ),
            )
            .map(function (e, n) {
              var a =
                null === r || void 0 === r
                  ? void 0
                  : r.find(function (t) {
                      return t.effectiveMint.equals(e);
                    });
              return a
                ? o.a.createElement(ui, {
                    key: n,
                    mint: e,
                    publicKey: a.pubkey,
                    isPoolToken: e.equals(t.state.poolTokenMint),
                  })
                : null;
            }),
        );
      }
      function li(e) {
        var t = e.poolInfo;
        return o.a.createElement(
          'ul',
          null,
          t.state.assets.map(function (e, t) {
            return o.a.createElement(ui, {
              key: t,
              mint: e.mint,
              publicKey: e.vaultAddress,
            });
          }),
        );
      }
      function ui(e) {
        var t = e.mint,
          n = e.publicKey,
          r = e.isPoolToken,
          a = X(t),
          i = Object(d.a)(a, 1)[0],
          c = X(n),
          s = Object(d.a)(c, 1)[0],
          l = o.a.createElement(Te.a, { size: 'small' });
        if (i && s) {
          var u = jt(i.data);
          if (t.equals(De.WRAPPED_SOL_MINT))
            l = o.a.createElement(
              o.a.Fragment,
              null,
              s.lamports / Math.pow(10, u.decimals),
            );
          else {
            var p = St(s.data);
            l = o.a.createElement(
              o.a.Fragment,
              null,
              p.amount / Math.pow(10, u.decimals),
            );
          }
        }
        return o.a.createElement(
          'li',
          null,
          l,
          ' ',
          r
            ? o.a.createElement(
                o.a.Fragment,
                null,
                'Pool Token (',
                o.a.createElement(Qo, { mint: t }),
                ')',
              )
            : o.a.createElement(Qo, { mint: t }),
          ' ',
          o.a.createElement(ie.a, {
            type: 'link',
            icon: o.a.createElement(vr.a, null),
            href: 'https://solscan.io/address/' + n.toBase58(),
            target: '_blank',
            rel: 'noopener noreferrer',
          }),
        );
      }
      var di = n(354),
        pi = rr.a.TabPane,
        mi = Me.a.Option;
      function fi(e) {
        var t = e.poolInfo;
        return o.a.createElement(
          yn,
          null,
          o.a.createElement(
            rr.a,
            null,
            o.a.createElement(
              pi,
              { tab: 'Pause/Unpause', key: 'pause' },
              o.a.createElement(bi, { poolInfo: t }),
            ),
            o.a.createElement(
              pi,
              { tab: 'Add Token', key: 'addAsset' },
              o.a.createElement(vi, { poolInfo: t }),
            ),
            o.a.createElement(
              pi,
              { tab: 'Remove Token', key: 'removeAsset' },
              o.a.createElement(hi, { poolInfo: t }),
            ),
            o.a.createElement(
              pi,
              { tab: 'Deposit', key: 'deposit' },
              o.a.createElement(gi, { poolInfo: t }),
            ),
            o.a.createElement(
              pi,
              { tab: 'Withdraw', key: 'withdraw' },
              o.a.createElement(yi, { poolInfo: t }),
            ),
            o.a.createElement(
              pi,
              { tab: 'Modify Fee', key: 'updateFee' },
              o.a.createElement(ki, { poolInfo: t }),
            ),
          ),
        );
      }
      function bi(e) {
        var t = e.poolInfo,
          n = G(),
          r = Oe(),
          i = r.wallet,
          c = r.connected,
          s = Object(a.useState)(!1),
          p = Object(d.a)(s, 2),
          f = p[0],
          b = p[1];
        function v() {
          return (v = Object(u.a)(
            l.a.mark(function e() {
              var r;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (c && i) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return (
                          b(!0),
                          (e.prev = 3),
                          (r = new m.Transaction()).add(
                            No.AdminControlledPoolInstructions.pause(t),
                          ),
                          (e.next = 8),
                          ot({ connection: n, wallet: i, transaction: r })
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(3)),
                          ae({
                            message: 'Error pausing pool',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 13:
                        return (e.prev = 13), b(!1), e.finish(13);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 10, 13, 16]],
              );
            }),
          )).apply(this, arguments);
        }
        function h() {
          return (h = Object(u.a)(
            l.a.mark(function e() {
              var r;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (c && i) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return (
                          b(!0),
                          (e.prev = 3),
                          (r = new m.Transaction()).add(
                            No.AdminControlledPoolInstructions.unpause(t),
                          ),
                          (e.next = 8),
                          ot({ connection: n, wallet: i, transaction: r })
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(3)),
                          ae({
                            message: 'Error unpausing pool',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 13:
                        return (e.prev = 13), b(!1), e.finish(13);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 10, 13, 16]],
              );
            }),
          )).apply(this, arguments);
        }
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            ie.a,
            {
              onClick: function () {
                return v.apply(this, arguments);
              },
              disabled: f,
            },
            'Pause',
          ),
          ' ',
          o.a.createElement(
            ie.a,
            {
              onClick: function () {
                return h.apply(this, arguments);
              },
              disabled: f,
            },
            'Unpause',
          ),
        );
      }
      function vi(e) {
        var t = e.poolInfo,
          n = G(),
          r = Object(a.useState)(''),
          i = Object(d.a)(r, 2),
          c = i[0],
          s = i[1],
          p = Oe(),
          f = p.wallet,
          b = p.connected && c,
          v = Ei(
            'adding asset to pool',
            Object(u.a)(
              l.a.mark(function e() {
                var r, a, o;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = new m.PublicKey(c)),
                          (e.next = 3),
                          Object(di.getAssociatedTokenAddress)(
                            t.state.vaultSigner,
                            r,
                          )
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (o = new m.Transaction()),
                          (e.next = 7),
                          n.getAccountInfo(a)
                        );
                      case 7:
                        if (((e.t0 = !e.sent), !e.t0)) {
                          e.next = 10;
                          break;
                        }
                        e.t0 = f;
                      case 10:
                        if (!e.t0) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.t1 = o),
                          (e.next = 14),
                          Object(di.createAssociatedTokenAccount)(
                            f.publicKey,
                            t.state.vaultSigner,
                            r,
                          )
                        );
                      case 14:
                        (e.t2 = e.sent), e.t1.add.call(e.t1, e.t2);
                      case 16:
                        return (
                          o.add(
                            No.AdminControlledPoolInstructions.addAsset(t, a),
                          ),
                          e.abrupt('return', [o, []])
                        );
                      case 18:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          h = Object(d.a)(v, 2),
          g = h[0],
          y = h[1];
        return o.a.createElement(
          'form',
          { onSubmit: g },
          o.a.createElement(xi, {
            label: 'Token Mint Address',
            value: c,
            onChange: function (e) {
              return s(e);
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(wi, { canSubmit: b, submitting: y }),
        );
      }
      function hi(e) {
        var t = e.poolInfo,
          n = Object(a.useState)(''),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = Oe().connected && i,
          p = Ei(
            'removing asset from pool',
            Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = new m.PublicKey(i)),
                          (a =
                            null ===
                              (n = t.state.assets.find(function (e) {
                                return e.mint.equals(r);
                              })) || void 0 === n
                              ? void 0
                              : n.vaultAddress))
                        ) {
                          e.next = 4;
                          break;
                        }
                        throw new Error('Asset not in pool');
                      case 4:
                        return (
                          (o = new m.Transaction()).add(
                            No.AdminControlledPoolInstructions.removeAsset(
                              t,
                              a,
                            ),
                          ),
                          e.abrupt('return', [o, []])
                        );
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          f = Object(d.a)(p, 2),
          b = f[0],
          v = f[1];
        return o.a.createElement(
          'form',
          { onSubmit: b },
          o.a.createElement(Oi, {
            poolInfo: t,
            label: 'Token Mint Address',
            value: i,
            onChange: function (e) {
              return c(e);
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(wi, { canSubmit: s, submitting: v }),
        );
      }
      function gi(e) {
        var t = e.poolInfo,
          n = Object(a.useState)(''),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = Object(a.useState)(''),
          p = Object(d.a)(s, 2),
          f = p[0],
          b = p[1],
          v = G(),
          h = Oe(),
          g = h.wallet,
          y = h.connected,
          k = en(),
          E = Object(d.a)(k, 1)[0],
          w = y && i && E && parseFloat(f),
          O = Ei(
            'depositing to pool',
            Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, c, s, u, d, p, b;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (g) {
                          e.next = 2;
                          break;
                        }
                        throw new Error('Wallet is not connected');
                      case 2:
                        if (
                          ((r = new m.PublicKey(i)),
                          (a =
                            null ===
                              (n = t.state.assets.find(function (e) {
                                return e.mint.equals(r);
                              })) || void 0 === n
                              ? void 0
                              : n.vaultAddress))
                        ) {
                          e.next = 6;
                          break;
                        }
                        throw new Error('Asset not in pool');
                      case 6:
                        if ((o = tn(E, r))) {
                          e.next = 9;
                          break;
                        }
                        throw new Error('Asset not in wallet');
                      case 9:
                        return (e.next = 11), v.getAccountInfo(r);
                      case 11:
                        if ((c = e.sent)) {
                          e.next = 14;
                          break;
                        }
                        throw new Error('Mint not found');
                      case 14:
                        return (
                          (s = jt(c.data).decimals),
                          (u = Math.round(parseFloat(f) * Math.pow(10, s))),
                          (d =
                            r.equals(Ne.TokenInstructions.WRAPPED_SOL_MINT) &&
                            o.pubkey.equals(g.publicKey)
                              ? new m.Account()
                              : null),
                          (p = new m.Transaction()),
                          (b = []),
                          d
                            ? (p.add(
                                m.SystemProgram.createAccount({
                                  fromPubkey: g.publicKey,
                                  lamports: u + 204e4,
                                  newAccountPubkey: d.publicKey,
                                  programId:
                                    Ne.TokenInstructions.TOKEN_PROGRAM_ID,
                                  space: 165,
                                }),
                                Ne.TokenInstructions.initializeAccount({
                                  account: d.publicKey,
                                  mint: Ne.TokenInstructions.WRAPPED_SOL_MINT,
                                  owner: g.publicKey,
                                }),
                                Ne.TokenInstructions.transfer({
                                  source: d.publicKey,
                                  destination: a,
                                  amount: u,
                                  owner: g.publicKey,
                                }),
                                Ne.TokenInstructions.closeAccount({
                                  source: d.publicKey,
                                  destination: o.pubkey,
                                  owner: g.publicKey,
                                }),
                              ),
                              b.push(d))
                            : p.add(
                                Ne.TokenInstructions.transfer({
                                  source: o.pubkey,
                                  destination: a,
                                  amount: u,
                                  owner: g.publicKey,
                                }),
                              ),
                          e.abrupt('return', [p, b])
                        );
                      case 21:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            !0,
          ),
          x = Object(d.a)(O, 2),
          S = x[0],
          j = x[1];
        return o.a.createElement(
          'form',
          { onSubmit: S },
          o.a.createElement(Oi, {
            poolInfo: t,
            label: 'Token Mint Address',
            value: i,
            onChange: function (e) {
              return c(e);
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(Mr.a, {
            addonBefore: o.a.createElement(o.a.Fragment, null, 'Quantity'),
            value: f,
            onChange: function (e) {
              return b(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(wi, { canSubmit: w, submitting: j }),
        );
      }
      function yi(e) {
        var t = e.poolInfo,
          n = Object(a.useState)(''),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = Object(a.useState)(''),
          p = Object(d.a)(s, 2),
          f = p[0],
          v = p[1],
          h = G(),
          g = Oe(),
          y = g.wallet,
          k = g.connected,
          E = en(),
          w = Object(d.a)(E, 1)[0],
          O = k && i && w && parseFloat(f),
          x = Ei(
            'withdrawing from pool',
            Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, c, s, u, d, p, v;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (y) {
                          e.next = 2;
                          break;
                        }
                        throw new Error('Wallet is not connected');
                      case 2:
                        if (
                          ((r = new m.PublicKey(i)),
                          (a =
                            null ===
                              (n = t.state.assets.find(function (e) {
                                return e.mint.equals(r);
                              })) || void 0 === n
                              ? void 0
                              : n.vaultAddress))
                        ) {
                          e.next = 6;
                          break;
                        }
                        throw new Error('Asset not in pool');
                      case 6:
                        if ((o = tn(w, r))) {
                          e.next = 9;
                          break;
                        }
                        throw new Error('Asset not in wallet');
                      case 9:
                        return (e.next = 11), h.getAccountInfo(r);
                      case 11:
                        if ((c = e.sent)) {
                          e.next = 14;
                          break;
                        }
                        throw new Error('Mint not found');
                      case 14:
                        return (
                          (s = jt(c.data).decimals),
                          (u = Math.round(parseFloat(f) * Math.pow(10, s))),
                          (d =
                            r.equals(Ne.TokenInstructions.WRAPPED_SOL_MINT) &&
                            o.pubkey.equals(y.publicKey)
                              ? new m.Account()
                              : null),
                          (p = new m.Transaction()),
                          (v = []),
                          d &&
                            (p.add(
                              m.SystemProgram.createAccount({
                                fromPubkey: y.publicKey,
                                lamports: 204e4,
                                newAccountPubkey: d.publicKey,
                                programId:
                                  Ne.TokenInstructions.TOKEN_PROGRAM_ID,
                                space: 165,
                              }),
                              Ne.TokenInstructions.initializeAccount({
                                account: d.publicKey,
                                mint: Ne.TokenInstructions.WRAPPED_SOL_MINT,
                                owner: y.publicKey,
                              }),
                            ),
                            v.push(d)),
                          p.add(
                            No.AdminControlledPoolInstructions.approveDelegate(
                              t,
                              a,
                              y.publicKey,
                              new b.a(u),
                            ),
                          ),
                          d
                            ? p.add(
                                Ne.TokenInstructions.transfer({
                                  source: a,
                                  destination: d.publicKey,
                                  amount: u,
                                  owner: y.publicKey,
                                }),
                                Ne.TokenInstructions.closeAccount({
                                  source: d.publicKey,
                                  destination: o.pubkey,
                                  owner: y.publicKey,
                                }),
                              )
                            : p.add(
                                Ne.TokenInstructions.transfer({
                                  source: a,
                                  destination: o.pubkey,
                                  amount: u,
                                  owner: y.publicKey,
                                }),
                              ),
                          e.abrupt('return', [p, v])
                        );
                      case 23:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          S = Object(d.a)(x, 2),
          j = S[0],
          _ = S[1];
        return o.a.createElement(
          'form',
          { onSubmit: j },
          o.a.createElement(Oi, {
            poolInfo: t,
            label: 'Token Mint Address',
            value: i,
            onChange: function (e) {
              return c(e);
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(Mr.a, {
            addonBefore: o.a.createElement(o.a.Fragment, null, 'Quantity'),
            value: f,
            onChange: function (e) {
              return v(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(wi, { canSubmit: O, submitting: _ }),
        );
      }
      function ki(e) {
        var t = e.poolInfo,
          n = Object(a.useState)(''),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = Oe().connected,
          p = en(),
          f = Object(d.a)(p, 1)[0],
          b = s && f && parseFloat(i),
          v = Ei(
            'changing pool fee',
            Object(u.a)(
              l.a.mark(function e() {
                var n;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = new m.Transaction()).add(
                            No.AdminControlledPoolInstructions.updateFee(
                              t,
                              Math.round(1e6 * parseFloat(i)),
                            ),
                          ),
                          e.abrupt('return', [n, []])
                        );
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          h = Object(d.a)(v, 2),
          g = h[0],
          y = h[1];
        return o.a.createElement(
          'form',
          { onSubmit: g },
          o.a.createElement(Mr.a, {
            addonBefore: o.a.createElement(o.a.Fragment, null, 'Fee Rate'),
            value: i,
            onChange: function (e) {
              return c(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          o.a.createElement(wi, { canSubmit: b, submitting: y }),
        );
      }
      function Ei(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = G(),
          o = Oe(),
          i = o.wallet,
          c = o.connected,
          s = Object(a.useState)(!1),
          p = Object(d.a)(s, 2),
          m = p[0],
          f = p[1];
        function b(e) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = Object(u.a)(
            l.a.mark(function a(o) {
              var s, u, p, b;
              return l.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if ((o.preventDefault(), !m)) {
                          a.next = 3;
                          break;
                        }
                        return a.abrupt('return');
                      case 3:
                        if ((f(!0), (a.prev = 4), c && i)) {
                          a.next = 7;
                          break;
                        }
                        throw new Error('Wallet not connected');
                      case 7:
                        return (a.next = 9), t();
                      case 9:
                        return (
                          (s = a.sent),
                          (u = Object(d.a)(s, 2)),
                          (p = u[0]),
                          (b = u[1]),
                          (a.next = 15),
                          ot({
                            connection: r,
                            wallet: i,
                            transaction: p,
                            signers: b,
                          })
                        );
                      case 15:
                        n && q(), (a.next = 21);
                        break;
                      case 18:
                        (a.prev = 18),
                          (a.t0 = a.catch(4)),
                          ae({
                            message: 'Error '.concat(e),
                            description: a.t0.message,
                            type: 'error',
                          });
                      case 21:
                        return (a.prev = 21), f(!1), a.finish(21);
                      case 24:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[4, 18, 21, 24]],
              );
            }),
          )).apply(this, arguments);
        }
        return [b, m];
      }
      function wi(e) {
        var t = e.canSubmit,
          n = e.submitting,
          r = Oe().connected;
        return o.a.createElement(
          ie.a,
          { htmlType: 'submit', type: 'primary', disabled: !t || n },
          r ? 'Submit' : 'Wallet not connected',
        );
      }
      function Oi(e) {
        var t = e.poolInfo,
          n = e.label,
          r = e.value,
          a = e.onChange,
          i = e.style,
          c = Mt();
        return o.a.createElement(
          Mr.a.Group,
          { style: i },
          o.a.createElement('span', { className: 'ant-input-group-addon' }, n),
          o.a.createElement(
            Me.a,
            { onChange: a, value: r, style: { width: '100%' } },
            t.state.assets.map(function (e) {
              return o.a.createElement(
                mi,
                { value: e.mint.toBase58(), key: e.mint.toBase58() },
                c[e.mint.toBase58()]
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      c[e.mint.toBase58()],
                      ' (',
                      e.mint.toBase58(),
                      ')',
                    )
                  : e.mint.toBase58(),
              );
            }),
          ),
        );
      }
      function xi(e) {
        var t = e.label,
          n = e.style,
          r = e.value,
          i = e.onChange,
          c = Mt(),
          s = Object(a.useMemo)(
            function () {
              return Object.entries(c)
                .filter(function (e) {
                  var t = Object(d.a)(e, 2),
                    n = t[0],
                    a = t[1];
                  return (
                    n.includes(r) || a.toLowerCase().includes(r.toLowerCase())
                  );
                })
                .map(function (e) {
                  var t = Object(d.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return {
                    value: n,
                    label: o.a.createElement(
                      o.a.Fragment,
                      null,
                      r,
                      ' (',
                      n,
                      ')',
                    ),
                  };
                });
            },
            [c, r],
          );
        return o.a.createElement(
          Mr.a.Group,
          { style: n },
          o.a.createElement('span', { className: 'ant-input-group-addon' }, t),
          o.a.createElement(Ao.a, {
            options: s,
            value: r,
            onChange: function (e) {
              return i(e);
            },
            style: { width: '100%' },
          }),
        );
      }
      var Si,
        ji,
        _i = Ce.a.Text;
      function Ti() {
        var e,
          t = Object(Pe.i)().poolAddress,
          n = X(
            (function (e) {
              try {
                return new m.PublicKey(e), !0;
              } catch (t) {
                return !1;
              }
            })(t)
              ? new m.PublicKey(t)
              : null,
          ),
          r = Object(d.a)(n, 2),
          i = r[0],
          c = r[1],
          s = Object(Pe.g)(),
          l = Object(a.useMemo)(
            function () {
              if (!i) return null;
              try {
                return {
                  address: new m.PublicKey(t),
                  state: Object(No.decodePoolState)(i.data),
                  program: i.owner,
                };
              } catch (e) {
                return null;
              }
            },
            [t, i],
          ),
          u = X(null === l || void 0 === l ? void 0 : l.state.poolTokenMint),
          p = Object(d.a)(u, 2),
          f = p[0],
          b = p[1],
          v = Object(a.useMemo)(
            function () {
              return f ? jt(f.data) : null;
            },
            [f],
          ),
          h = Oe().wallet;
        return l && v && h
          ? o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(Go.a, {
                title: o.a.createElement(
                  o.a.Fragment,
                  null,
                  'Pool ',
                  l.address.toBase58(),
                ),
                onBack: function () {
                  return s.push('/pools');
                },
                subTitle: l.state.name,
              }),
              o.a.createElement(
                Fe.a,
                null,
                o.a.createElement(
                  Re.a,
                  { xs: 24, lg: 12 },
                  o.a.createElement(ti, { poolInfo: l, mintInfo: v }),
                ),
                o.a.createElement(
                  Re.a,
                  { xs: 24, lg: 12 },
                  o.a.createElement(ai, { poolInfo: l, mintInfo: v }),
                ),
                o.a.createElement(
                  Re.a,
                  { xs: 24 },
                  o.a.createElement(ci, { poolInfo: l }),
                ),
                h.connected &&
                  (null === (e = l.state.adminKey) || void 0 === e
                    ? void 0
                    : e.equals(h.publicKey)) &&
                  Object(No.isAdminControlledPool)(l)
                  ? o.a.createElement(
                      Re.a,
                      { xs: 24 },
                      o.a.createElement(fi, { poolInfo: l }),
                    )
                  : null,
              ),
            )
          : o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(Go.a, {
                title: o.a.createElement(o.a.Fragment, null, 'Pool ', t),
                onBack: function () {
                  return s.push('/pools');
                },
              }),
              o.a.createElement(
                yn,
                null,
                c && b
                  ? o.a.createElement(_i, null, 'Invalid pool')
                  : o.a.createElement(Te.a, null),
              ),
            );
      }
      var Ci = Ce.a.Title,
        Ai = je.c.div(
          Si ||
            (Si = Object(Se.a)([
              '\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  margin-bottom: 24px;\n',
            ])),
        ),
        Ii = je.c.form(
          ji ||
            (ji = Object(Se.a)([
              '\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 48px;\n',
            ])),
        );
      function Pi() {
        var e = Object(a.useState)(''),
          t = Object(d.a)(e, 2),
          n = t[0],
          r = t[1],
          i = Object(Pe.g)();
        return o.a.createElement(
          Ai,
          null,
          o.a.createElement(
            yn,
            null,
            o.a.createElement(Ci, { level: 3 }, 'Pools'),
            o.a.createElement(
              Ii,
              {
                onSubmit: function (e) {
                  e.preventDefault(), i.push('/pools/'.concat(n));
                },
              },
              o.a.createElement(Mr.a, {
                value: n,
                onChange: function (e) {
                  return r(e.target.value.trim());
                },
                placeholder: 'Pool address',
              }),
              o.a.createElement(
                ie.a,
                { type: 'primary', htmlType: 'submit' },
                'Go',
              ),
            ),
            o.a.createElement(re, { to: '/pools/new' }, 'Create new pool'),
          ),
        );
      }
      function Mi() {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            ne.a,
            { basename: '/' },
            o.a.createElement(
              jo,
              null,
              o.a.createElement(
                Pe.d,
                null,
                o.a.createElement(
                  Pe.b,
                  { exact: !0, path: '/' },
                  o.a.createElement(Pe.a, { to: Ht() }),
                ),
                o.a.createElement(
                  Pe.b,
                  { exact: !0, path: '/market/:marketAddress' },
                  o.a.createElement(ya, null),
                ),
                o.a.createElement(Pe.b, {
                  exact: !0,
                  path: '/orders',
                  component: Ca,
                }),
                o.a.createElement(Pe.b, {
                  exact: !0,
                  path: '/balances',
                  component: Pa,
                }),
                o.a.createElement(Pe.b, {
                  exact: !0,
                  path: '/convert',
                  component: Ua,
                }),
                o.a.createElement(Pe.b, {
                  exact: !0,
                  path: '/list-new-market',
                  component: Ro,
                }),
                o.a.createElement(
                  Pe.b,
                  { exact: !0, path: '/pools' },
                  o.a.createElement(Pi, null),
                ),
                o.a.createElement(
                  Pe.b,
                  { exact: !0, path: '/pools/new' },
                  o.a.createElement(Jo, null),
                ),
                o.a.createElement(
                  Pe.b,
                  { exact: !0, path: '/pools/:poolAddress' },
                  o.a.createElement(Ti, null),
                ),
              ),
            ),
          ),
        );
      }
      function Fi() {
        return o.a.createElement(
          a.Suspense,
          {
            fallback: function () {
              return o.a.createElement(Te.a, { size: 'large' });
            },
          },
          o.a.createElement(_e, null),
          o.a.createElement(
            Ie,
            null,
            o.a.createElement(
              V,
              null,
              o.a.createElement(
                Qn,
                null,
                o.a.createElement(
                  we,
                  null,
                  o.a.createElement(
                    Or,
                    null,
                    o.a.createElement(
                      a.Suspense,
                      {
                        fallback: function () {
                          return o.a.createElement(Te.a, { size: 'large' });
                        },
                      },
                      o.a.createElement(Mi, null),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      c.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(Fi, null)),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[490, 1, 2]],
]);
//# sourceMappingURL=main.e96da2fe.chunk.js.map
