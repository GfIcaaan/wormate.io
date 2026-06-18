"use strict";
function _typeof(a) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    }
    : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }
    )(a)
}
var zE;
var GoogleAuth;
!function() {
    var a = {}
      , t = {}
      , e = {}
      , f = {};
    e.a = function(a) {
        for (var t = new String, e = parseInt(a.substring(0, 2), 16), f = 2; f < a.length; f += 2) {
            var c = parseInt(a.substring(f, f + 2), 16);
            e = 3793 + 4513 * e & 255,
            t += String.fromCharCode(c ^ e)
        }
        return t
    }
    ,
    e.b = function(a) {
        return new Function("return ".concat(a, ";"))()
    }
    ,
    a.c = e.b("window"),
    a.d = a.c["document"],
    e.e = function() {
        var t = a.c["devicePixelRatio"];
        return t || 1
    }
    ,
    a.c.addEventListener("load", function() {
        if (a.d["getElementById"]("game-wrap")["style"]["display"] = "block",
        !function() {
            return function(a, t, f) {
                function c(a, t) {
                    return _typeof(a) === t
                }
                function i() {
                    return "function" != _typeof(t.createElement) ? t.createElement(arguments[0]) : s ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
                }
                var n = []
                  , h = []
                  , o = {
                    _version: "3.3.1",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(a, t) {
                        var e = this;
                        setTimeout(function() {
                            t(e[a])
                        }, 0)
                    },
                    addTest: function(a, t, e) {
                        h.push({
                            name: a,
                            fn: t,
                            options: e
                        })
                    },
                    addAsyncTest: function(a) {
                        h.push({
                            name: null,
                            fn: a
                        })
                    }
                }
                  , d = function() {};
                d.prototype = o,
                d = new d;
                var b = !1;
                try {
                    b = "WebSocket"in a && 2 === a.WebSocket.CLOSING
                } catch (a) {}
                d.addTest("websockets", b);
                var r = t.documentElement
                  , s = "svg" === r.nodeName.toLowerCase();
                d.addTest("canvas", function() {
                    var a = i("canvas");
                    return !(!a.getContext || !a.getContext("2d"))
                }),
                d.addTest("canvastext", function() {
                    return !1 !== d.canvas && "function" == _typeof(i("canvas").getContext("2d").fillText)
                }),
                function() {
                    var a, t, f, i, o, b, r;
                    for (var s in h)
                        if (h.hasOwnProperty(s)) {
                            if (a = [],
                            t = h[s],
                            t.name && (a.push(t.name.toLowerCase()),
                            t.options && t.options.aliases && t.options.aliases.length))
                                for (f = 0; f < t.options.aliases.length; f++)
                                    a.push(t.options.aliases[f].toLowerCase());
                            for (i = c(t.fn, "function") ? t.fn() : t.fn,
                            o = 0; o < a.length; o++)
                                b = a[o],
                                r = b.split("."),
                                1 === r.length ? d[r[0]] = i : (!d[r[0]] || d[r[0]]instanceof Boolean || (d[r[0]] = new Boolean(d[r[0]])),
                                d[r[0]][r[1]] = i),
                                n.push((i ? "" : "no-") + r.join("-"))
                        }
                }(),
                function(a) {
                    var t = r.className
                      , f = d._config.classPrefix || "";
                    if (s && (t = t.baseVal),
                    d._config.enableJSClass) {
                        var c = new RegExp("(^|\\s)" + f + "no-js(\\s|$)");
                        t = t.replace(c, "$1" + f + "js$2")
                    }
                    d._config.enableClasses && (t += " " + f + a.join(" " + f),
                    s ? r.className.baseVal = t : r.className = t)
                }(n),
                delete o.addTest,
                delete o.addAsyncTest;
                for (var u = 0; u < d._q.length; u++)
                    d._q[u]();
                a.Modernizr = d
            }(window, document),
            Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
        }())
            return void (a.d["getElementById"]("error-view")["style"]["display"] = "block");
        f.f = {
            g: function(a, t, f) {
                a["stop"](),
                a["fadeIn"](t, f)
            },
            h: function(a, t, f) {
                a["stop"](),
                a["fadeOut"](t, f)
            }
        },
        f.i = e.b("WebSocket"),
        f.j = e.b("Float32Array"),
        f.k = e.b("PIXI"),
        e.l = function(a) {
            var t = a["parent"];
            null != t && t["removeChild"](a)
        }
        ,
        t.m = {
            n: a.c["runtimeHash"],
            o: "https://gateway.wormate.io",
            p: "http://localhost:8080",
            q: "/images/linelogo-" + "valday2025" + ".png",
            r: "/images/guest-avatar-" + "valday2025" + ".png",
            s: "/images/confetti-" + "valday2025" + ".png",
            t: "/images/bg-event-pattern-" + "valday2025" + ".png"
        },
        t.m.u = function() {
            var t = a.c["I18N_LANG"];
            return t || (t = "en"),
            t
        }(),
        t.m.v = function() {
            var a;
            switch (t.m.u) {
            case "uk":
                a = "uk_UA";
                break;
            case "de":
                a = "de_DE";
                break;
            case "fr":
                a = "fr_FR";
                break;
            case "es":
                a = "es_ES";
                break;
            default:
                a = "en_US"
            }
            return a
        }(),
        moment.locale(t.m.v),
        t.w = null,
        t.z = 6.283185307179586,
        t.A = 3.141592653589793,
        function() {
            var t = a.c["I18N_MESSAGES"];
            e.B = function(a) {
                return t[a]
            }
        }(),
        e.C = function(a) {
            return a[t.m.u] ? a[t.m.u] : a["en"] ? a["en"] : a["x"]
        }
        ,
        e.D = function(a) {
            return encodeURI(a)
        }
        ,
        e.F = function(a, t) {
            return setInterval(a, t)
        }
        ,
        e.G = function(a, t) {
            return setTimeout(a, t)
        }
        ,
        e.H = function(a) {
            clearTimeout(a)
        }
        ,
        e.I = function(a) {
            var t = (e.J(a) % 60).toString()
              , f = (e.J(a / 60) % 60).toString()
              , c = (e.J(a / 3600) % 24).toString()
              , i = e.J(a / 86400).toString()
              , n = e.B("util.time.days")
              , h = e.B("util.time.hours")
              , o = e.B("util.time.min")
              , d = e.B("util.time.sec");
            return i > 0 ? i + " " + n + " " + c + " " + h + " " + f + " " + o + " " + t + " " + d : c > 0 ? c + " " + h + " " + f + " " + o + " " + t + " " + d : f > 0 ? f + " " + o + " " + t + " " + d : t + " " + d
        }
        ,
        e.K = function(a) {
            return a.includes("href") ? a.replaceAll("href", "target=\"_black\" href") : a
        }
        ,
        e.L = function(t, f, c) {
            var i = a.d["createElement"]("script")
              , n = !0;
            "undefined" !== _typeof(f) && null !== f && ("undefined" !== _typeof(f["id"]) && (i["id"] = f["id"]),
            "undefined" !== _typeof(f["async"]) && f["async"] && (i["async"] = "async"),
            "undefined" !== _typeof(f["defer"]) && f["defer"] && (i["defer"] = "defer"),
            "undefined" !== _typeof(f["crossorigin"]) && (i["crossorigin"] = f["crossorigin"])),
            i["type"] = "text/javascript",
            i["src"] = t,
            c && (i["onload"] = i["onreadystatechange"] = function() {
                n = !1;
                try {
                    c()
                } catch (a) {}
                i["onload"] = i["onreadystatechange"] = null
            }
            ),
            (a.d["head"] || a.d["getElementsByTagName"]("head")[0])["appendChild"](i)
        }
        ,
        e.M = function(a, t) {
            var e = t;
            return e.prototype = Object.create(a.prototype),
            e.prototype.constructor = e,
            e.parent = a,
            e
        }
        ,
        e.N = function(a) {
            return a %= t.z,
            a < 0 ? a + t.z : a
        }
        ,
        e.O = function(a, t, f) {
            return e.P(f, a, t)
        }
        ,
        e.P = function(a, t, e) {
            return a > e ? e : a < t ? t : Number.isFinite(a) ? a : .5 * (t + e)
        }
        ,
        e.Q = function(a, t, f, c) {
            return t > a ? e.R(t, a + f * c) : e.S(t, a - f * c)
        }
        ,
        e.T = function(a, t, e, f, c) {
            return t + (a - t) * Math.pow(1 - f, e / c)
        }
        ,
        e.U = function(a, t, e) {
            return a - (a - t) * e
        }
        ,
        e.V = function(a, t, f) {
            return [e.U(a[0], t[0], f), e.U(a[1], t[1], f)]
        }
        ,
        e.W = function(a, t, f) {
            return [e.U(a[0], t[0], f), e.U(a[1], t[1], f), e.U(a[2], t[2], f), e.U(a[3], t[3], f)]
        }
        ,
        e.X = function(a) {
            return e.Y(a[1], a[0])
        }
        ,
        e.Z = function(a, t) {
            return Math.sqrt(a * a + t * t)
        }
        ,
        e.$ = function() {
            return Math.random()
        }
        ,
        e.J = function(a) {
            return Math.floor(a)
        }
        ,
        e._ = function(a) {
            return Math.abs(a)
        }
        ,
        e.R = function(a, t) {
            return Math.min(a, t)
        }
        ,
        e.S = function(a, t) {
            return Math.max(a, t)
        }
        ,
        e.aa = function(a) {
            return Math.sin(a)
        }
        ,
        e.ba = function(a) {
            return Math.cos(a)
        }
        ,
        e.ca = function(a) {
            return Math.sqrt(a)
        }
        ,
        e.da = function(a, t) {
            return Math.pow(a, t)
        }
        ,
        e.ea = function(a) {
            return Math.atan(a)
        }
        ,
        e.Y = function(a, t) {
            return Math.atan2(a, t)
        }
        ,
        e.fa = function(a, t, e, f) {
            var c = e
              , i = t
              , n = t + f;
            if (null == a)
                throw new TypeError;
            var h = a.length >>> 0
              , o = c >> 0
              , d = o < 0 ? Math.max(h + o, 0) : Math.min(o, h)
              , b = i >> 0
              , r = b < 0 ? Math.max(h + b, 0) : Math.min(b, h)
              , s = void 0 === n ? h : n >> 0
              , u = s < 0 ? Math.max(h + s, 0) : Math.min(s, h)
              , p = Math.min(u - r, h - d)
              , l = 1;
            for (r < d && d < r + p && (l = -1,
            r += p - 1,
            d += p - 1); p > 0; )
                r in a ? a[d] = a[r] : delete a[d],
                r += l,
                d += l,
                p--;
            return a
        }
        ,
        e.ga = function(a, f, c, i) {
            var n = t.z * e.$()
              , h = Math.sqrt(c * c + e.$() * (i - c) * (i + c));
            return [a + h * Math.cos(n), f + h * Math.sin(n)]
        }
        ,
        e.ha = function(a, t) {
            return a + (t - a) * e.$()
        }
        ,
        e.ia = function(a) {
            return a[parseInt(e.$() * a.length)]
        }
        ,
        e.ja = function() {
            var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function(a) {
                return a.charCodeAt(0)
            });
            return function(t) {
                "undefined" == _typeof(t) && (t = 16);
                for (var f = "", c = 0; c < t; c++)
                    f += String.fromCharCode(a[e.J(e.$() * a.length)]);
                return f
            }
        }(),
        e.ka = function(a) {
            return null == a || "number" !== _typeof(a) ? "" : Math.floor(a).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }
        ,
        e.la = function(a, t, f, c) {
            var i = f * (1 - .5 * t)
              , n = Math.min(i, 1 - i);
            return e.ma(a, n ? (f - i) / n : 0, i, c)
        }
        ,
        e.ma = function(a, t, f, c) {
            var i = (1 - e._(2 * f - 1)) * t
              , n = i * (1 - e._(a / 60 % 2 - 1))
              , h = f - i / 2;
            return 0 <= a && a < 60 ? [h + i, h + n, h, c] : 60 <= a && a < 120 ? [h + n, h + i, h, c] : 120 <= a && a < 180 ? [h, h + i, h + n, c] : 180 <= a && a < 240 ? [h, h + n, h + i, c] : 240 <= a && a < 300 ? [h + n, h, h + i, c] : [h + i, h, h + n, c]
        }
        ,
        e.na = function(a, t, f) {
            $["get"](a)["fail"](t)["done"](f)
        }
        ,
        e.oa = function(a, t, f, c) {
            var i = {};
            i["type"] = "GET",
            i["url"] = a;
            var n = {};
            n["responseType"] = "arraybuffer",
            n["onprogress"] = function(a) {
                a["lengthComputable"] && c(a["loaded"] / a["total"] * 100)
            }
            ,
            i["xhrFields"] = n,
            $["ajax"](i)["fail"](t)["done"](f)
        }
        ,
        e.pa = function() {
            return Date.now()
        }
        ,
        e.qa = function(a, t) {
            for (var e in a)
                a.hasOwnProperty(e) && t(e, a[e])
        }
        ,
        e.ra = function(a) {
            for (var t = a.length - 1; t > 0; t--) {
                var f = e.J(e.$() * (t + 1))
                  , c = a[t];
                a[t] = a[f],
                a[f] = c
            }
            return a
        }
        ,
        a.sa = e.b("ArrayBuffer"),
        a.ta = e.b("DataView"),
        a.ua = function() {
            function a(a) {
                this.va = a,
                this.wa = 0
            }
            var t = "getInt8";
            a.prototype.xa = function() {
                var a = this.va[t](this.wa);
                return this.wa += 1,
                a
            }
            ;
            var f = "getInt16";
            a.prototype.ya = function() {
                var a = this.va[f](this.wa);
                return this.wa += 2,
                a
            }
            ;
            var c = "getInt32";
            a.prototype.za = function() {
                var a = this.va[c](this.wa);
                return this.wa += 4,
                a
            }
            ;
            var i = "getFloat32";
            return a.prototype.Aa = function() {
                var a = this.va[i](this.wa);
                return this.wa += 4,
                a
            }
            ,
            a
        }(),
        a.Ba = function() {
            function a(a) {
                this.va = a,
                this.wa = 0
            }
            var t = "setInt8";
            a.prototype.Ca = function(a) {
                this.va[t](this.wa, a),
                this.wa += 1
            }
            ;
            var f = "setInt16";
            return a.prototype.Da = function(a) {
                this.va[f](this.wa, a),
                this.wa += 2
            }
            ,
            a
        }(),
        a.Ea = function() {
            function a() {}
            return a.Fa = function(a, t) {
                return t[0] * (1 - a) + t[1] * a
            }
            ,
            a.Ga = function(a, t) {
                var e = 1 - a
                  , f = a;
                return [t[0][0] * e + t[1][0] * f, t[0][1] * e + t[1][1] * f]
            }
            ,
            a.Ha = function(a, t) {
                var e = a * a;
                return t[0] * (1 - 2 * a + e) + t[1] * (2 * (a - e)) + t[2] * e
            }
            ,
            a.Ia = function(a, t) {
                var e = a * a
                  , f = 1 - 2 * a + e
                  , c = 2 * (a - e)
                  , i = e;
                return [t[0][0] * f + t[1][0] * c + t[2][0] * i, t[0][1] * f + t[1][1] * c + t[2][1] * i]
            }
            ,
            a.Ja = function(a, t) {
                var e = a * a
                  , f = e * a;
                return t[0] * (1 + 3 * (e - a) - f) + t[1] * (3 * (a - 2 * e + f)) + t[2] * (3 * (e - f)) + t[3] * f
            }
            ,
            a.Ka = function(a, t) {
                var e = a * a
                  , f = e * a
                  , c = 1 + 3 * (e - a) - f
                  , i = 3 * (a - 2 * e + f)
                  , n = 3 * (e - f)
                  , h = f;
                return [t[0][0] * c + t[1][0] * i + t[2][0] * n + t[3][0] * h, t[0][1] * c + t[1][1] * i + t[2][1] * n + t[3][1] * h]
            }
            ,
            a.La = function(a, t) {
                return t[1] - t[0]
            }
            ,
            a.Ma = function(a, t) {
                return [t[1][0] - t[0][0], t[1][1] - t[0][1]]
            }
            ,
            a.Na = function(a, t) {
                return 2 * t[0] * (-1 + a) + 2 * t[1] * (1 - 2 * a) + 2 * t[2] * a
            }
            ,
            a.Oa = function(a, t) {
                var e = 2 * (-1 + a)
                  , f = 2 * (1 - 2 * a)
                  , c = 2 * a;
                return [t[0][0] * e + t[1][0] * f + t[2][0] * c, t[0][1] * e + t[1][1] * f + t[2][1] * c]
            }
            ,
            a.Pa = function(a, t) {
                var e = a * a;
                return 3 * t[0] * (2 * a - 1 - e) + 3 * t[1] * (1 - 4 * a + 3 * e) + 3 * t[2] * (2 * a - 3 * e) + 3 * t[3] * e
            }
            ,
            a.Qa = function(a, t) {
                var e = a * a
                  , f = 3 * (2 * a - 1 - e)
                  , c = 3 * (1 - 4 * a + 3 * e)
                  , i = 3 * (2 * a - 3 * e)
                  , n = 3 * e;
                return [t[0][0] * f + t[1][0] * c + t[2][0] * i + t[3][0] * n, t[0][1] * f + t[1][1] * c + t[2][1] * i + t[3][1] * n]
            }
            ,
            a
        }(),
        e.Ra = function() {
            function c() {
                $("#adbl-1").text(e.B("index.game.antiadblocker.msg1")),
                $("#adbl-2").text(e.B("index.game.antiadblocker.msg2")),
                $("#adbl-3").text(e.B("index.game.antiadblocker.msg3")),
                $("#adbl-4").text(e.B("index.game.antiadblocker.msg4").replace("{0}", 10)),
                $("#adbl-continue span").text(e.B("index.game.antiadblocker.continue")),
                f.f.h($("#adbl-continue"), 1),
                f.f.g(r, 500);
                for (var a = 10, c = 0; c < 10; c++)
                    e.G(function() {
                        if (a--,
                        $("#adbl-4").text(e.B("index.game.antiadblocker.msg4").replace("{0}", a)),
                        0 === a) {
                            
                            f.f.g($("#adbl-continue"), 200)
                        }
                    }, 1e3 * (c + 1))
            }
            var i = !1
              , n = function() {}
              , h = {}
              , o = "1eaom01c3pxu9wd3"
              , d = $("#" + o)
              , b = "JDHnkHtYwyXyVgG9"
              , r = $("#" + b);
            return $("#adbl-continue").click(function() {
                r["fadeOut"](500),
                n(!1)
            }),
            h.Sa = function(c) {
                if (n = c,
                !i)
                    try { /* aiptag init removed */ i = true; } catch (a) {}
            }
            ,
            h.Ta = function() { c(); }
            ,
            h
        }
        ,
        e.Ua = function(a, f) {
            var c = $("#" + a)
              , i = f
              , n = {}
              , h = !1;
            return n.Sa = function() { if (!h) { h = true; } }
            ,
            n.Va = function() { }
            ,
            n
        }
        ,
        a.Wa = function() {
            function a(a, t, f, c, i, n, h, o, d, b) {
                this.Xa = a,
                this.Ya = t,
                this["Texture"] = null,
                this.Za = !1,
                this.$a = f,
                this._a = c,
                this.ab = i,
                this.bb = n,
                this.cb = h || (d || i) / 2,
                this.db = o || (b || n) / 2,
                this.eb = d || i,
                this.fb = b || n,
                this.gb = .5 - (this.cb - .5 * this.eb) / this.ab,
                this.hb = .5 - (this.db - .5 * this.fb) / this.bb,
                this.ib = this.ab / this.eb,
                this.jb = this.bb / this.fb
            }
            return a.kb = function() {
                return new a("",null,0,0,0,0,0,0,0,0)
            }
            ,
            a.lb = function(t, f, c) {
                return new a(t,f,c["x"],c["y"],c["w"],c["h"],c["px"],c["py"],c["pw"],c["ph"])
            }
            ,
            a.prototype.mb = function() {
                return this.Za ? this["Texture"] : (null != this.Ya && (this["Texture"] = new (f.k["Texture"])(this.Ya,new (f.k["Rectangle"])(this.$a,this._a,this.ab,this.bb))),
                this.Za = !0,
                this["Texture"])
            }
            ,
            a.prototype.nb = function() {
                null != this["Texture"] && this["Texture"].destroy()
            }
            ,
            a
        }(),
        a.ob = function() {
            function t(a, t, e, f, c, i, n, h, o, d, b, r, s, u, p, l, k, w) {
                this.pb = a,
                this.qb = t,
                this.rb = e,
                this.sb = f,
                this.tb = c,
                this.ub = i,
                this.vb = n,
                this.wb = h,
                this.xb = o,
                this.yb = d,
                this.zb = b,
                this.Ab = r,
                this.Bb = s,
                this.Cb = u,
                this.Db = p,
                this.Eb = l,
                this.Fb = k,
                this.Gb = w
            }
            return t.prototype.nb = function() {
                for (var a = 0; a < this.pb.length; a++)
                    this.pb[a].dispose(),
                    this.pb[a].destroy();
                this.pb = [];
                for (var t = 0; t < this.qb.length; t++)
                    this.qb[t].nb();
                this.qb = []
            }
            ,
            t.kb = function() {
                var f = new t.Hb(a.Jb.Ib,a.Jb.Ib)
                  , c = new t.Kb("#ffffff",[a.Jb.Ib],[a.Jb.Ib]);
                return new t([],[],{},f,{},new t.Lb(a.Jb.Ib),{},c,{},new t.Mb("",c,f),{},new t.Nb([a.Jb.Ib]),{},new t.Nb([a.Jb.Ib]),{},new t.Nb([a.Jb.Ib]),{},new t.Nb([a.Jb.Ib]))
            }
            ,
            t.Ob = function(f, c, i, n) {
                var h = new t.Hb(a.Jb.Ib,a.Jb.Ib)
                  , o = new t.Kb("#ffffff",[f],[c]);
                return new t([],[],{},h,{},new t.Lb(a.Jb.Ib),{},o,{},new t.Mb("",o,h),{},new t.Nb([i]),{},new t.Nb([n]),{},new t.Nb([a.Jb.Ib]),{},new t.Nb([a.Jb.Ib]))
            }
            ,
            t.Pb = function(a, f, c, i) {
                var n = {};
                e.qa(a["colorDict"], function(a, t) {
                    n[a] = "#" + t
                });
                for (var h = {}, o = 0; o < a["skinArrayDict"].length; o++) {
                    var d = a["skinArrayDict"][o];
                    h[d["id"]] = new t.Kb(n[d["prime"]],d["base"].map(function(a) {
                        return f[a]
                    }),d["glow"].map(function(a) {
                        return f[a]
                    }))
                }
                var b, r = a["skinUnknown"];
                b = new t.Kb(n[r["prime"]],r["base"].map(function(a) {
                    return f[a]
                }),r["glow"].map(function(a) {
                    return f[a]
                }));
                var s = {};
                e.qa(a["eyesDict"], function(a, c) {
                    var i = parseInt(a);
                    s[i] = new t.Nb(c["base"].map(function(a) {
                        return f[a["region"]]
                    }))
                });
                var u = new t.Nb(a["eyesUnknown"]["base"].map(function(a) {
                    return f[a["region"]]
                }))
                  , p = {};
                e.qa(a["mouthDict"], function(a, c) {
                    var i = parseInt(a);
                    p[i] = new t.Nb(c["base"].map(function(a) {
                        return f[a["region"]]
                    }))
                });
                var l = new t.Nb(a["mouthUnknown"]["base"].map(function(a) {
                    return f[a["region"]]
                }))
                  , k = {};
                e.qa(a["hatDict"], function(a, c) {
                    var i = parseInt(a);
                    k[i] = new t.Nb(c["base"].map(function(a) {
                        return f[a["region"]]
                    }))
                });
                var w = new t.Nb(a["hatUnknown"]["base"].map(function(a) {
                    return f[a["region"]]
                }))
                  , g = {};
                e.qa(a["glassesDict"], function(a, c) {
                    var i = parseInt(a);
                    g[i] = new t.Nb(c["base"].map(function(a) {
                        return f[a["region"]]
                    }))
                });
                var v = new t.Nb(a["glassesUnknown"]["base"].map(function(a) {
                    return f[a["region"]]
                }))
                  , y = {};
                e.qa(a["portionDict"], function(a, c) {
                    a = parseInt(a),
                    y[a] = new t.Hb(f[c["base"]],f[c["glow"]])
                });
                var j, m = a["portionUnknown"];
                j = new t.Hb(f[m["base"]],f[m["glow"]]);
                var q = {};
                e.qa(a["abilityDict"], function(a, c) {
                    a = parseInt(a),
                    q[a] = new t.Lb(f[c["base"]])
                });
                var S, $ = a["abilityUnknown"];
                S = new t.Lb(f[$["base"]]);
                var V = {};
                e.qa(a["teamDict"], function(a, c) {
                    a = parseInt(a),
                    V[a] = new t.Mb(c["title"],new t.Kb(n[c["skin"]["prime"]],null,c["skin"]["glow"].map(function(a) {
                        return f[a]
                    })),new t.Hb(null,f[c["portion"]["glow"]]))
                });
                var x = new t.Mb({},b,j);
                return new t(c,i,y,j,q,S,h,b,V,x,s,u,p,l,k,w,g,v)
            }
            ,
            t.prototype.Qb = function(t) {
                for (var f = e.ra(Object.keys(this.vb)).slice(0, t), c = e.ra(Object.keys(this.zb)).slice(0, t), i = e.ra(Object.keys(this.Bb)).slice(0, t), n = e.ra(Object.keys(this.Db)).slice(0, t), h = e.ra(Object.keys(this.Fb)).slice(0, t), o = [], d = 0; d < t; d++) {
                    var b = f.length > 0 ? f[d % f.length] : 0
                      , r = c.length > 0 ? c[d % c.length] : 0
                      , s = i.length > 0 ? i[d % i.length] : 0
                      , u = n.length > 0 ? n[d % n.length] : 0
                      , p = h.length > 0 ? h[d % h.length] : 0;
                    o.push(new a.Rb(b,r,s,u,p))
                }
                return o
            }
            ,
            t.prototype.Sb = function(a) {
                return this.vb.hasOwnProperty(a) ? this.vb[a] : this.wb
            }
            ,
            t.prototype.Tb = function(a) {
                return this.xb.hasOwnProperty(a) ? this.xb[a] : this.yb
            }
            ,
            t.prototype.Ub = function(a) {
                return this.zb.hasOwnProperty(a) ? this.zb[a] : this.Ab
            }
            ,
            t.prototype.Vb = function(a) {
                return this.Bb.hasOwnProperty(a) ? this.Bb[a] : this.Cb
            }
            ,
            t.prototype.Wb = function(a) {
                return this.Db.hasOwnProperty(a) ? this.Db[a] : this.Eb
            }
            ,
            t.prototype.Xb = function(a) {
                return this.Fb.hasOwnProperty(a) ? this.Fb[a] : this.Gb
            }
            ,
            t.prototype.Yb = function(a) {
                return this.rb.hasOwnProperty(a) ? this.rb[a] : this.sb
            }
            ,
            t.prototype.Zb = function(a) {
                return this.tb.hasOwnProperty(a) ? this.tb[a] : this.ub
            }
            ,
            t.Mb = function() {
                function a(a, t, e) {
                    this.$b = a,
                    this._b = t,
                    this.ac = e
                }
                return a
            }(),
            t.Kb = function() {
                function a(a, t, e) {
                    this.bc = a,
                    this.cc = t,
                    this.dc = e
                }
                return a
            }(),
            t.Nb = function() {
                function a(a) {
                    this.cc = a
                }
                return a
            }(),
            t.Hb = function() {
                function a(a, t) {
                    this.cc = a,
                    this.dc = t
                }
                return a
            }(),
            t.Lb = function() {
                function a(a) {
                    this.cc = a
                }
                return a
            }(),
            t
        }(),
        a.Jb = function() {
            function t() {
                var t = f.k["BaseTexture"]["from"]("/images/wear-ability.png");
                this.ec = new a.Wa("magnet_ability",t,158,86,67,124,148,63.5,128,128),
                this.fc = new a.Wa("velocity_ability",t,158,4,87,74,203,63.5,128,128),
                this.gc = new a.Wa("flex_ability",t,4,4,146,146,63.5,63.5,128,128);
                var c = f.k["BaseTexture"]["from"]("/images/def-look.png")
                  , i = new a.Wa("def_eyes",c,0,0,42,80,75,64,128,128)
                  , n = new a.Wa("def_mouth",c,46,0,20,48,109,63,128,128)
                  , h = new a.Wa("def_skin_glow",c,70,0,32,32,0,0,0,0)
                  , o = new a.Wa("def_skin_base",c,46,52,64,64,0,0,0,0)
                  , d = a.ob.Ob(o, h, i, n);
                this.hc = new a.ic({},d),
                this.jc = -1e4,
                this.kc = -1e4,
                this.lc = function() {
                    var t = a.c.document.createElement("canvas");
                    return t.width = 80,
                    t.height = 80,
                    {
                        mc: t,
                        nc: t.getContext("2d"),
                        oc: new (f.k["Texture"])(f.k["BaseTexture"]["from"](t))
                    }
                }(),
                this.pc = null,
                this.qc = []
            }
            return t.Ib = a.Wa.kb(),
            t.prototype.Sa = function() {}
            ,
            t.prototype.rc = function(t, f, c) {
                var i = this
                  , n = this.hc.sc();
                if (n > 0 && e.pa() - this.jc < 12e5)
                    return void (null != t && t());
                if (null != this.pc && !this.pc.tc()) {
                    if (e.pa() - this.jc < 3e5)
                        return void (null != t && t());
                    this.pc.uc(),
                    this.pc = null
                }
                var h = new a.vc(n);
                h.wc(function(a, t) {
                    h === i.pc && null != c && c(a, t)
                }),
                h.xc(function(a) {
                    h === i.pc && null != f && f(a)
                }),
                h.yc(function() {
                    h === i.pc && null != f && f(new Error)
                }),
                h.zc(function() {
                    h === i.pc && null != t && t()
                }),
                h.Ac(function(a) {
                    if (h === i.pc)
                        return i.kc = e.pa(),
                        i.pc = null,
                        i.Bc(),
                        i.hc.Cc().nb(),
                        i.hc = a,
                        null != t && t(),
                        void i.Dc();
                    try {
                        a.Cc().nb()
                    } catch (a) {}
                }),
                h.Ec(),
                this.jc = e.pa(),
                this.pc = h
            }
            ,
            t.prototype.Bc = function() {}
            ,
            t.prototype.Fc = function() {
                return this.hc.sc() > 0
            }
            ,
            t.prototype.Gc = function() {
                return this.hc.Hc()
            }
            ,
            t.prototype.Ic = function() {
                return this.lc
            }
            ,
            t.prototype.Jc = function(a) {
                this.qc.push(a)
            }
            ,
            t.prototype.Dc = function() {
                for (var a = 0; a < this.qc.length; a++)
                    this.qc[a]()
            }
            ,
            t.prototype.Cc = function() {
                return this.hc.Cc()
            }
            ,
            t
        }(),
        a.Kc = function() {
            function a(a) {
                this.Lc = a
            }
            return a.prototype.Mc = function(a) {
                return this.Lc[a]
            }
            ,
            a.Nc = function() {
                function t() {
                    this.Oc = []
                }
                return t.prototype.Pc = function(t, e) {
                    for (var f = 0; f < this.Oc.length; f++)
                        if (this.Oc[f].Qc === t)
                            throw new Error;
                    return this.Oc.push(new a.Rc(t,e)),
                    this
                }
                ,
                t.prototype.Sc = function() {
                    for (var t = 0, e = 0; e < this.Oc.length; e++)
                        t += this.Oc[e].Tc;
                    for (var f = {}, c = 0, i = 0; i < this.Oc.length; i++) {
                        var n = this.Oc[i];
                        n.Tc = n.Tc / t,
                        n.Uc = c,
                        n.Vc = c + n.Tc,
                        c = n.Vc,
                        f[n.Qc] = n
                    }
                    return new a(f)
                }
                ,
                t
            }(),
            a.Rc = function() {
                function a(a, t) {
                    this.Qc = a,
                    this.Tc = t,
                    this.Uc = 0,
                    this.Vc = 0
                }
                return a.prototype.Wc = function(a) {
                    return this.Uc + (this.Vc - this.Uc) * a
                }
                ,
                a
            }(),
            a
        }(),
        a.Xc = function() {
            function c() {
                this.Yc = new (f.k["Container"]),
                this.Yc["sortableChildren"] = !0,
                this.Zc = new q,
                this.Zc["zIndex"] = i * (2 * (n + 1) + 1 + 3),
                this.$c = 0,
                this._c = new Array(n),
                this._c[0] = this.ad(0, new a.bd, new a.bd);
                for (var t = 1; t < n; t++)
                    this._c[t] = this.ad(t, new a.bd, new a.bd);
                this.cd = 0,
                this.dd = 0,
                this.ed = 0
            }
            var i = .001
              , n = 797
              , h = .1 * t.A
              , o = -.06640625
              , d = .84375
              , b = .2578125
              , r = -.03515625
              , s = -.0625
              , u = .5625
              , p = 3 * o + d
              , l = b - 3 * o
              , k = o + r
              , w = .375
              , g = .75
              , v = s + s
              , y = 3 * r + b
              , j = d - 3 * r
              , m = r + o;
            c.fd = n,
            c.prototype.ad = function(a, t, f) {
                var c = new S(t,f);
                return t.gd["zIndex"] = i * (2 * (n - a) + 1 + 3),
                f.gd["zIndex"] = i * (2 * (n - a) - 2 + 3),
                c
            }
            ,
            c.prototype.hd = function(t, e, f, c, i, n, h, o) {
                var d = f.cc
                  , b = t === a.jd.id ? e._b.dc : f.dc;
                if (d.length > 0 && b.length > 0)
                    for (var r = 0; r < this._c.length; r++)
                        this._c[r].ld.kd(d[r % d.length]),
                        this._c[r].md.kd(b[r % b.length]),
                        this._c[r].ld.nd(o),
                        this._c[r].md.nd(o);
                this.Zc.hd(c, i, n, h)
            }
            ;
            var q = function() {
                var c = e.M(f.k["Container"], function() {
                    f.k["Container"].call(this),
                    this["sortableChildren"] = !0,
                    this.od = [],
                    this.pd = [],
                    this.qd = [],
                    this.rd = [],
                    this.sd = new (f.k["Container"]),
                    this.td = [];
                    for (var c = 0; c < 4; c++) {
                        var i = new a.bd;
                        i.kd(t.w.ud.ec),
                        this.sd["addChild"](i.gd),
                        this.td.push(i)
                    }
                    this.sd["zIndex"] = .0011,
                    this["addChild"](this.sd),
                    this.vd(),
                    this.wd = new a.bd,
                    this.wd.kd(t.w.ud.fc),
                    this.wd.gd["zIndex"] = .001,
                    this["addChild"](this.wd.gd),
                    this.xd()
                });
                return c.prototype.hd = function(a, t, e, f) {
                    this.yd(.002, this.od, a.cc),
                    this.yd(.003, this.pd, t.cc),
                    this.yd(.004, this.qd, e.cc),
                    this.yd(.005, this.rd, f.cc)
                }
                ,
                c.prototype.yd = function(t, f, c) {
                    for (; c.length > f.length; ) {
                        var i = new a.bd;
                        f.push(i),
                        this["addChild"](i.zd())
                    }
                    for (; c.length < f.length; ) {
                        f.pop().Ad()
                    }
                    for (var n = t, h = 0; h < c.length; h++) {
                        n += 1e-4;
                        var o = f[h];
                        o.kd(c[h]),
                        o.gd["zIndex"] = n
                    }
                }
                ,
                c.prototype.Bd = function(a, t, f, c) {
                    this["visible"] = !0,
                    this["position"]["set"](a, t),
                    this["rotation"] = c;
                    for (var i = 0; i < this.od.length; i++)
                        this.od[i].Cd(f);
                    for (var n = 0; n < this.pd.length; n++)
                        this.pd[n].Cd(f);
                    for (var h = 0; h < this.qd.length; h++)
                        this.qd[h].Cd(f);
                    for (var o = 0; o < this.rd.length; o++)
                        this.rd[o].Cd(f)
                }
                ,
                c.prototype.Dd = function() {
                    this["visible"] = !1
                }
                ,
                c.prototype.Ed = function(a, t, f, c) {
                    this.sd["visible"] = !0;
                    for (var i = f / 1e3, n = 1 / this.td.length, h = 0; h < this.td.length; h++) {
                        var o = 1 - (i + n * h) % 1;
                        this.td[h].gd["alpha"] = 1 - o,
                        this.td[h].Cd(t * (.5 + 4.5 * o))
                    }
                }
                ,
                c.prototype.vd = function() {
                    this.sd["visible"] = !1
                }
                ,
                c.prototype.Fd = function(a, t, f, c) {
                    this.wd.gd["visible"] = !0,
                    this.wd.gd["alpha"] = e.Q(this.wd.gd["alpha"], a.Gd ? .9 : .2, c, .0025),
                    this.wd.Cd(t)
                }
                ,
                c.prototype.xd = function() {
                    this.wd.gd["visible"] = !1
                }
                ,
                c
            }();
            c.prototype.Hd = function(a) {
                return this.dd + this.ed * e.aa(a * h - this.cd)
            }
            ,
            c.prototype.Id = function(f, c, i, n) {
                var h = 2 * f.Jd
                  , q = f.Kd
                  , $ = f.Ld
                  , V = 4 * $ - 3
                  , x = V;
                this.cd = c / 400 * t.A,
                this.dd = 1.5 * h,
                this.ed = .15 * h * f.Md;
                var _, D, Z, L, G, X, B, C;
                if (D = q[0],
                X = q[1],
                n(D, X)) {
                    Z = q[2],
                    B = q[3],
                    L = q[4],
                    C = q[5];
                    var J = e.Y(C + 2 * X - 3 * B, L + 2 * D - 3 * Z);
                    this.Zc.Bd(D, X, h, J),
                    this._c[0].Bd(D, X, h, this.Hd(0), J),
                    this._c[1].Bd(p * D + l * Z + k * L, p * X + l * B + k * C, h, this.Hd(1), S.Nd(this._c[0], this._c[2])),
                    this._c[2].Bd(w * D + g * Z + v * L, w * X + g * B + v * C, h, this.Hd(2), S.Nd(this._c[1], this._c[3])),
                    this._c[3].Bd(y * D + j * Z + m * L, y * X + j * B + m * C, h, this.Hd(3), S.Nd(this._c[2], this._c[4]))
                } else
                    this.Zc.Dd(),
                    this._c[0].Dd(),
                    this._c[1].Dd(),
                    this._c[2].Dd(),
                    this._c[3].Dd();
                for (var E = 4, U = 2, K = 2 * $ - 4; U < K; U += 2)
                    D = q[U],
                    X = q[U + 1],
                    n(D, X) ? (_ = q[U - 2],
                    G = q[U - 1],
                    Z = q[U + 2],
                    B = q[U + 3],
                    L = q[U + 4],
                    C = q[U + 5],
                    this._c[E].Bd(D, X, h, this.Hd(E), S.Nd(this._c[E - 1], this._c[E + 1])),
                    E++,
                    this._c[E].Bd(o * _ + d * D + b * Z + r * L, o * G + d * X + b * B + r * C, h, this.Hd(E), S.Nd(this._c[E - 1], this._c[E + 1])),
                    E++,
                    this._c[E].Bd(s * _ + u * D + u * Z + s * L, s * G + u * X + u * B + s * C, h, this.Hd(E), S.Nd(this._c[E - 1], this._c[E + 1])),
                    E++,
                    this._c[E].Bd(r * _ + b * D + d * Z + o * L, r * G + b * X + d * B + o * C, h, this.Hd(E), S.Nd(this._c[E - 1], this._c[E + 1])),
                    E++) : (this._c[E].Dd(),
                    E++,
                    this._c[E].Dd(),
                    E++,
                    this._c[E].Dd(),
                    E++,
                    this._c[E].Dd(),
                    E++);
                for (D = q[2 * $ - 4],
                X = q[2 * $ - 3],
                n(D, X) ? (_ = q[2 * $ - 6],
                G = q[2 * $ - 5],
                Z = q[2 * $ - 2],
                B = q[2 * $ - 1],
                this._c[V - 5].Bd(D, X, h, this.Hd(V - 5), S.Nd(this._c[V - 6], this._c[V - 4])),
                this._c[V - 4].Bd(m * _ + j * D + y * Z, m * G + j * X + y * B, h, this.Hd(V - 4), S.Nd(this._c[V - 5], this._c[V - 3])),
                this._c[V - 3].Bd(v * _ + g * D + w * Z, v * G + g * X + w * B, h, this.Hd(V - 3), S.Nd(this._c[V - 4], this._c[V - 2])),
                this._c[V - 2].Bd(k * _ + l * D + p * Z, k * G + l * X + p * B, h, this.Hd(V - 2), S.Nd(this._c[V - 3], this._c[V - 1])),
                this._c[V - 1].Bd(Z, B, h, this.Hd(V - 1), S.Nd(this._c[V - 2], this._c[V - 1]))) : (this._c[V - 5].Dd(),
                this._c[V - 4].Dd(),
                this._c[V - 3].Dd(),
                this._c[V - 2].Dd(),
                this._c[V - 1].Dd()),
                0 === this.$c && x > 0 && this.Yc["addChild"](this.Zc),
                this.$c > 0 && 0 === x && e.l(this.Zc); this.$c < x; )
                    this.Yc["addChild"](this._c[this.$c].ld.zd()),
                    this.Yc["addChild"](this._c[this.$c].md.zd()),
                    this.$c += 1;
                for (; this.$c > x; )
                    this.$c -= 1,
                    this._c[this.$c].md.Ad(),
                    this._c[this.$c].ld.Ad();
                var z = f.Od[a.Qd.Pd];
                this._c[0].Rd() && null != z && z.Sd ? this.Zc.Ed(f, h, c, i) : this.Zc.vd();
                var M = f.Od[a.Qd.Td];
                this._c[0].Rd() && null != M && M.Sd ? this.Zc.Fd(f, h, c, i) : this.Zc.xd()
            }
            ;
            var S = function() {
                function a(a, t) {
                    this.ld = a,
                    this.ld.Ud(!1),
                    this.md = t,
                    this.md.Ud(!1)
                }
                return a.prototype.Bd = function(a, t, e, f, c) {
                    this.ld.Ud(!0),
                    this.ld.Vd(a, t),
                    this.ld.Cd(e),
                    this.ld.Wd(c),
                    this.md.Ud(!0),
                    this.md.Vd(a, t),
                    this.md.Cd(f),
                    this.md.Wd(c)
                }
                ,
                a.prototype.Dd = function() {
                    this.ld.Ud(!1),
                    this.md.Ud(!1)
                }
                ,
                a.prototype.Rd = function() {
                    return this.ld.Rd()
                }
                ,
                a.Nd = function(a, t) {
                    return e.Y(a.ld.gd["position"]["y"] - t.ld.gd["position"]["y"], a.ld.gd["position"]["x"] - t.ld.gd["position"]["x"])
                }
                ,
                a
            }();
            return c
        }(),
        a.Qd = function() {
            function a(a) {
                this.Xd = a,
                this.Sd = !1,
                this.Yd = 1
            }
            return a.Td = 0,
            a.Zd = 1,
            a.Pd = 2,
            a.$d = 6,
            a._d = 3,
            a.ae = 4,
            a.be = 5,
            a
        }(),
        a.ic = function() {
            function t(a, t) {
                this.ce = a,
                this.de = t
            }
            return t.ee = new t({},a.ob.kb()),
            t.prototype.sc = function() {
                return this.ce["revision"]
            }
            ,
            t.prototype.Hc = function() {
                return this.ce
            }
            ,
            t.prototype.Cc = function() {
                return this.de
            }
            ,
            t
        }(),
        a.vc = function() {
            function c(a) {
                this.fe = function() {
                    ++c.ge;
                    return function(a, t) {}
                }(),
                this.he = a,
                this.ie = null,
                this.je = null,
                this.ke = null,
                this.le = null,
                this.me = null,
                this.ne = !1,
                this.oe = !1,
                this.pe = !1
            }
            return c.qe = {
                re: "0x0",
                se: "0x1",
                te: "0x2",
                ue: "0x3",
                ve: "0x4"
            },
            c.ge = 1e5,
            c.we = (new a.Kc.Nc).Pc(c.qe.re, 1).Pc(c.qe.se, 10).Pc(c.qe.te, 50).Pc(c.qe.ue, 15).Pc(c.qe.ve, 5).Sc(),
            c.prototype.Ac = function(a) {
                this.ie = a
            }
            ,
            c.prototype.zc = function(a) {
                this.je = a
            }
            ,
            c.prototype.xc = function(a) {
                this.ke = a
            }
            ,
            c.prototype.yc = function(a) {
                this.le = a
            }
            ,
            c.prototype.wc = function(a) {
                this.me = a
            }
            ,
            c.prototype.tc = function() {
                return this.pe
            }
            ,
            c.prototype.uc = function() {
                this.ne = !0
            }
            ,
            c.prototype.Ec = function() {
                if (!this.oe) {
                    if (this.oe = !0,
                    this.ne)
                        return void this.xe();
                    this.ye()
                }
            }
            ,
            c.prototype.ye = function() {
                function a(a) {
                    var t = c.qe.re;
                    f.ze(t, c.we.Mc(t).Wc(a))
                }
                var f = this;
                if (this.ne)
                    return void this.xe();
                $.ajax({
                    type: "GET",
                    url: t.m.p + "/dynamic/assets/revision.json",
                    xhrFields: {
                        onprogress: function(t) {
                            t.lengthComputable && a(t.loaded / t.total)
                        }
                    }
                }).fail(function() {
                    f.Ae(new Error)
                }).done(function(a) {
                    if (a <= f.he)
                        return void f.Be();
                    f.Ce()
                })
            }
            ,
            c.prototype.Ce = function() {
                function a(a) {
                    var t = c.qe.se;
                    f.ze(t, c.we.Mc(t).Wc(a))
                }
                var f = this;
                if (this.ne)
                    return void this.xe();
                $.ajax({
                    type: "GET",
                    url: t.m.p + "/dynamic/assets/registry.json",
                    xhrFields: {
                        onprogress: function(t) {
                            t.lengthComputable && a(t.loaded / t.total)
                        }
                    }
                }).fail(function() {
                    f.Ae(new Error)
                }).done(function(a) {
                    if (a["revision"] <= f.he)
                        return void f.Be();
                    f.De(a)
                })
            }
            ,
            c.prototype.De = function(f) {
                function i(a) {
                    var t = c.qe.te;
                    n.ze(t, c.we.Mc(t).Wc(a))
                }
                var n = this;
                if (this.ne)
                    return void this.xe();
                var h = []
                  , o = []
                  , d = 0;
                for (var b in f["textureDict"])
                    if (f["textureDict"].hasOwnProperty(b)) {
                        var r = f["textureDict"][b]
                          , s = t.m.p + r["relativePath"]
                          , u = r["fileSize"]
                          , p = r["sha256"]
                          , l = new c.Ee(b,s,u,p);
                        h.push(l);
                        o.push(l),
                        d += u
                    }
                var k, w = 0, g = function(t) {
                    for (var e = 0; e < o.length; e++)
                        try {
                            a.c.URL.revokeObjectURL(o[e].Fe)
                        } catch (a) {}
                    n.Ae(t)
                }, v = function(a) {
                    var t = e.J(k.Ge * a);
                    i((w + t) / d)
                }, y = function(t) {
                    var e = new Blob([t]);
                    k.Fe = a.c.URL.createObjectURL(e),
                    w += k.Ge,
                    j()
                }, j = function() {
                    if (m < o.length)
                        return k = o[m++],
                        void n.He(k, g, y, v);
                    e.G(function() {
                        return n.Ie(f, h)
                    }, 0)
                }, m = 0;
                j()
            }
            ,
            c.prototype.He = function(a, t, f, c) {
                $.ajax({
                    type: "GET",
                    url: a.Je,
                    xhrFields: {
                        responseType: "arraybuffer",
                        onprogress: function(a) {
                            a.lengthComputable && c(a.loaded / a.total)
                        }
                    }
                }).fail(function() {
                    t(new Error)
                }).done(function(a) {
                    f(a)
                })
            }
            ,
            c.prototype.Ie = function(t, i) {
                function n(a) {
                    var t = c.qe.ue;
                    h.ze(t, c.we.Mc(t).Wc(a))
                }
                var h = this;
                if (this.ne)
                    return void this.xe();
                var o, d, b = {}, r = function() {
                    for (var t = 0; t < i.length; t++)
                        try {
                            a.c.URL.revokeObjectURL(i[t].Fe)
                        } catch (a) {}
                    h.Ae(new Error)
                }, s = function() {
                    n(p / i.length),
                    b[o.Ke] = new a.Le(o.Fe,d),
                    u()
                }, u = function() {
                    if (p < i.length)
                        return o = i[p++],
                        d = f.k["BaseTexture"]["from"](o.Fe),
                        d["on"]("error", r),
                        void d["on"]("loaded", s);
                    e.G(function() {
                        return h.Me(t, b)
                    }, 0)
                }, p = 0;
                u()
            }
            ,
            c.prototype.Me = function(t, f) {
                function i(a) {
                    var t = c.qe.ve;
                    n.ze(t, c.we.Mc(t).Wc(a))
                }
                var n = this
                  , h = {}
                  , o = 0
                  , d = Object.values(t["regionDict"]).length;
                e.qa(t["regionDict"], function(t, c) {
                    var n = a.Wa.lb(c["texture"] + ":" + t, f[c["texture"]].oc, c);
                    h[t] = n,
                    ++o % 10 == 0 && i(o / d)
                });
                var b = Object.values(f).map(function(a) {
                    return a.oc
                })
                  , r = Object.values(h)
                  , s = new a.ic(t,a.ob.Pb(t, h, b, r));
                e.G(function() {
                    return n.Ne(s)
                }, 0)
            }
            ,
            c.Ee = function() {
                function a(a, t, e, f) {
                    this.Ke = a,
                    this.Je = t,
                    this.Ge = e,
                    this.Oe = f,
                    this.Fe = ""
                }
                return a
            }(),
            c.prototype.Ne = function(a) {
                if (this.pe)
                    return void a.Cc().nb();
                this.pe = !0;
                var t = this;
                e.G(function() {
                    return t.ie(a)
                }, 0)
            }
            ,
            c.prototype.Be = function() {
                if (!this.pe) {
                    this.pe = !0;
                    var a = this;
                    e.G(function() {
                        return a.je()
                    }, 0)
                }
            }
            ,
            c.prototype.Ae = function(a) {
                if (!this.pe) {
                    this.pe = !0;
                    var t = this;
                    e.G(function() {
                        return t.ke(a)
                    }, 0)
                }
            }
            ,
            c.prototype.xe = function() {
                if (!this.pe) {
                    this.pe = !0;
                    var a = this;
                    e.G(function() {
                        return a.le()
                    }, 0)
                }
            }
            ,
            c.prototype.ze = function(a, t) {
                if (!this.pe && !this.ne) {
                    var f = this;
                    e.G(function() {
                        return f.me(a, t)
                    }, 0)
                }
            }
            ,
            c
        }(),
        a.Pe = function() {
            return {}
        }(),
        a.Qe = function() {
            function f() {
                this.Re = a.Qe.Te.Se,
                this.Ue = !1,
                this.Ve = !1,
                this.We = null,
                this.Xe = null
            }
            return f.prototype.Sa = function() {}
            ,
            f.prototype.Ye = function(a) {
                this.Ve = a
            }
            ,
            f.prototype.Ze = function(a) {
                this.Re = a,
                this.$e()
            }
            ,
            f.prototype._e = function(a) {
                this.Ue = a,
                this.$e()
            }
            ,
            f.prototype.$e = function() {}
            ,
            f.prototype.af = function(a, f) {
                if (!t.w.ud.Fc())
                    return null;
                var c = a[f];
                return null == c || 0 === c.length ? null : c[e.J(e.$() * c.length)].cloneNode()
            }
            ,
            f.prototype.bf = function(a, t, f) {
                if (this.Ve && !(f <= 0)) {
                    var c = this.af(a, t);
                    null != c && (c.volume = e.R(1, f),
                    c.play())
                }
            }
            ,
            f.prototype.cf = function(a, t) {
                this.Re.df && this.bf(app.ff.ef, a, t)
            }
            ,
            f.prototype.gf = function(a, t) {
                this.Re.hf && this.bf(app.ff.if, a, t)
            }
            ,
            f.prototype.jf = function() {}
            ,
            f.prototype.kf = function() {}
            ,
            f.prototype.lf = function() {}
            ,
            f.prototype.mf = function() {}
            ,
            f.prototype.nf = function() {}
            ,
            f.prototype.pf = function() {}
            ,
            f.prototype.qf = function(a, t, e) {}
            ,
            f.prototype.rf = function(a) {}
            ,
            f.prototype.sf = function(a) {}
            ,
            f.prototype.tf = function(a) {}
            ,
            f.prototype.uf = function(a) {}
            ,
            f.prototype.vf = function(a) {}
            ,
            f.prototype.wf = function(a) {}
            ,
            f.prototype.xf = function(a) {}
            ,
            f.prototype.yf = function(a) {}
            ,
            f.prototype.zf = function(a) {}
            ,
            f.prototype.Af = function(a) {}
            ,
            f.prototype.Bf = function(a) {}
            ,
            f.prototype.Cf = function(a) {}
            ,
            f.prototype.Df = function(a) {}
            ,
            f.prototype.Ef = function(a) {}
            ,
            f.prototype.Ff = function(a, t) {}
            ,
            f.prototype.Gf = function(a) {}
            ,
            f.prototype.Hf = function(a, t, e) {}
            ,
            f.Te = {
                Se: {
                    If: !1,
                    Jf: !1,
                    hf: !0,
                    df: !1
                },
                Kf: {
                    If: !1,
                    Jf: !0,
                    hf: !0,
                    df: !1
                },
                Lf: {
                    If: !0,
                    Jf: !1,
                    hf: !1,
                    df: !0
                },
                Mf: {
                    If: !1,
                    Jf: !1,
                    hf: !0,
                    df: !1
                },
                Nf: {
                    If: !1,
                    Jf: !1,
                    hf: !1,
                    df: !1
                }
            },
            f
        }(),
        a.Of = function() {
            function c(c) {
                var o = this;
                this.Pf = c,
                this.mc = c.get()[0],
                this.Qf = 1,
                this.Rf = 1,
                this.Sf = new a.Tf(n,h,a.Vf.Uf),
                this.Wf = function() {
                    var a = {};
                    return a["view"] = o.mc,
                    a["backgroundColor"] = i,
                    a["antialias"] = !0,
                    new (f.k["Renderer"])(a)
                }(),
                this.Xf = new (f.k["Container"]),
                this.Xf["sortableChildren"] = !0,
                this.Yf = new (f.k["Container"]),
                this.Yf["zIndex"] = 0,
                this.Xf["addChild"](this.Yf),
                this.Zf = new a.$f(t.w.ff._f),
                this.Zf.ag["zIndex"] = 1,
                this.Xf["addChild"](this.Zf.ag);
                var d = this.Sf.bg();
                d["zIndex"] = 2,
                this.Xf["addChild"](d),
                this.cg = new (f.k["Container"]),
                this.cg["zIndex"] = 3,
                this.Xf["addChild"](this.cg),
                this.dg = [],
                this.eg = [],
                this.fg = [],
                this.Sa()
            }
            var i = 0
              , n = 5
              , h = 40
              , o = [e.la(0, .7, .8, 1), e.la(30 / 360, .7, .8, 1), e.la(60 / 360, .7, .8, 1), e.la(.25, .7, .8, 1), e.la(120 / 360, .7, .8, 1), e.la(150 / 360, .7, .8, 1), e.la(.5, .7, .8, 1), e.la(210 / 360, .7, .8, 1), e.la(240 / 360, .7, .8, 1), e.la(.75, .7, .8, 1), e.la(300 / 360, .7, .8, 1), e.la(330 / 360, .7, .8, 1)];
            c.prototype.Sa = function() {
                this.Wf.backgroundColor = i,
                this.dg = new Array(o.length);
                for (var c = 0; c < this.dg.length; c++)
                    this.dg[c] = new (f.k["Sprite"]),
                    this.dg[c]["texture"] = t.w.ff.gg,
                    this.dg[c]["anchor"]["set"](.5),
                    this.Yf["addChild"](this.dg[c]);
                this.eg = new Array(t.w.ff.hg.length);
                for (var n = 0; n < this.eg.length; n++)
                    this.eg[n] = new a.ig(t.w.ff.hg[n]),
                    this.cg["addChild"](this.eg[n].ag);
                this.fg = new Array(this.eg.length);
                for (var h = 0; h < this.fg.length; h++)
                    this.fg[h] = new b(h < 24 ? function() {
                        var f = new Array(3);
                        f[0] = e.ga(.5, .5, .3, .5),
                        f[1] = e.ga(f[0][0], f[0][1], .05, .1),
                        f[2] = e.ga(f[1][0], f[1][1], .05, .1);
                        var c = (356 + 8 * e.ha(0, 1)) / 360 % 1
                          , i = t.z * e.ha(0, 1);
                        return new s(e.ha(12, 16),function(n) {
                            return new r(n,e.la(360 * c, 1 - .5 * e.da(.5 * (1 - e.ba(i + t.z * n)), 2), 1, .8 * e.P(1 - e.ba(t.z * n), 0, 1)),.45 + .6 * e.da(.5 * (1 - e.ba(i + t.z * n)), 2),a.Ea.Ia(n, f),0)
                        }
                        )
                    }
                    : function() {
                        var a = e.ga(.5, .5, .2, .5)
                          , f = [.5 + 1.2 * (a[0] - .5), .5 + 1.2 * (a[1] - .5)]
                          , c = e.ha(0, 1)
                          , i = t.z * e.ha(0, 1)
                          , n = .1 + .15 * e.ha(0, 1)
                          , h = 5 * n;
                        return new s(e.ha(20, 24) / 6,function(o) {
                            return new r(o,e.la(360 * c, 1 - .5 * e.da(.5 * (1 - e.ba(i + t.z * o)), 2), .91, .8 * e.P(1 - e.ba(t.z * o), 0, 1)),e.U(n, h, e.da(o, 8)),e.V(a, f, o),0)
                        }
                        )
                    }
                    );
                this.jg(),
                this.kg()
            }
            ,
            c.Sd = !1,
            c.lg = function(a) {
                c.Sd = a
            }
            ,
            c.prototype.mg = function(a) {
                this.Sf.lg(a)
            }
            ,
            c.prototype.kg = function() {
                var a = e.e();
                this.Qf = this.Pf["width"](),
                this.Rf = this.Pf["height"](),
                this.Wf.resize(this.Qf, this.Rf),
                this.Wf.resolution = a,
                this.mc.width = a * this.Qf,
                this.mc.height = a * this.Rf;
                for (var t = .6 * e.S(this.Qf, this.Rf), f = 0; f < this.dg.length; f++) {
                    var c = this.dg[f];
                    c["width"] = t,
                    c["height"] = t
                }
                for (var i = .1 * e.S(this.Qf, this.Rf), n = 0; n < this.eg.length; n++) {
                    var h = this.eg[n]
                      , o = h.ng() / h.og();
                    h.pg(i, i * o)
                }
                this.Zf.pg(this.Qf, this.Rf),
                this.Sf.kg()
            }
            ,
            c.prototype.qg = function(a, f) {
                if (c.Sd) {
                    for (var i = a / 1e3, n = this.Pf["width"](), h = this.Pf["height"](), d = 0; d < this.dg.length; d++) {
                        var b = o[d % o.length]
                          , r = this.dg[d]
                          , s = d / this.dg.length * t.A
                          , u = .5 * i * .12
                          , p = e.ba(3 * (u + s)) * e.ba(s) - e.aa(5 * (u + s)) * e.aa(s)
                          , l = e.ba(3 * (u + s)) * e.aa(s) + e.aa(5 * (u + s)) * e.ba(s)
                          , k = .2 + .2 * e.ba(s + .075 * i);
                        r["tint"] = 16711680 & 255 * b[0] << 16 | 65280 & 255 * b[1] << 8 | 255 & 255 * b[2],
                        r["alpha"] = b[3] * k,
                        r["position"]["set"](n * (.2 + .5 * (p + 1) * .6), h * (.1 + .5 * (l + 1) * .8))
                    }
                    for (var w = 0; w < this.eg.length; w++) {
                        var g = this.fg[w];
                        g.rg(a, f);
                        var v = g.sg()
                          , y = this.eg[w]
                          , j = v.tg;
                        y.nd(j[0], j[1], j[2], j[3]);
                        var m = v.ug;
                        y.Cd(m);
                        var q = v.vg;
                        y.Vd(n * q[0], h * q[1]),
                        y.Wd(t.z / 360 * v.wg)
                    }
                    this.xg(),
                    this.Wf.render(this.Xf, null, !0)
                }
            }
            ,
            c.prototype.yg = function() {
                if (t.w.ud.Fc())
                    for (var a = t.w.ud.Cc().Qb(n), f = 0; f < n; f++)
                        this.Sf.zg(f, a[f]);
                else
                    for (var c = e.ha(0, 1), i = 0; i < n; i++) {
                        var h = (c + i / n) % 1
                          , o = e.ma(e.J(360 * h), .85, .5)
                          , d = 255 & 255 * o[0] | 65280 & 255 * o[1] << 8 | 16711680 & 255 * o[2] << 16
                          , b = "000000" + d.toString(16);
                        b = "#" + b.substring(b.length - 6, b.length),
                        this.Sf.Ag(i, b)
                    }
            }
            ,
            c.prototype.jg = function() {
                for (var a = e.R(this.Qf, this.Rf), f = e.pa(), c = 0; c < n; c++) {
                    var i = c / n * t.z
                      , h = d(f, .12, i);
                    h.$a = 4 * h.$a,
                    h._a = 4 * h._a,
                    this.Sf.Bg(c, .5 * (this.Qf + h.$a * a), .5 * (this.Rf + h._a * a))
                }
            }
            ,
            c.prototype.xg = function() {
                for (var a = e.R(this.Qf, this.Rf), f = e.pa(), c = 0; c < n; c++) {
                    var i = c / n * t.z
                      , h = d(f, .12, i);
                    this.Sf.Cg(c, .5 * (this.Qf + h.$a * a), .5 * (this.Rf + h._a * a))
                }
                this.Sf.rg()
            }
            ;
            var d = function(a, t, f) {
                var c = a / 1e3;
                return {
                    $a: .8 * (e.ba(t * c + f) + .4 * e.ba(-32 * t * c + f) + .7 * e.ba(7 * t * c + f)),
                    _a: .8 * (e.aa(t * c + f) + .4 * e.aa(-32 * t * c + f) + .7 * e.aa(7 * t * c + f))
                }
            }
              , b = function() {
                function a(a) {
                    this.Dg = a,
                    this.Eg = a(),
                    this.Fg = e.ha(0, 1),
                    this.Gg = this.Eg.Hg(this.Fg)
                }
                return a.prototype.rg = function(a, t) {
                    var e = this.Fg + t / 1e3 / this.Eg.Ig;
                    e < 1 ? this.Fg = e : (this.Fg = 0,
                    this.Eg = this.Dg()),
                    this.Gg = this.Eg.Hg(this.Fg)
                }
                ,
                a.prototype.sg = function() {
                    return this.Gg
                }
                ,
                a
            }()
              , r = (function() {
                function a(a) {
                    this.Jg = a,
                    this.Gg = null
                }
                a.prototype.rg = function(a, t) {
                    this.Gg = this.Jg()
                }
                ,
                a.prototype.sg = function() {
                    return this.Gg
                }
            }(),
            function() {
                function a(a, t, e, f, c) {
                    this.Kg = a,
                    this.tg = t,
                    this.ug = e,
                    this.vg = f,
                    this.wg = c
                }
                return a
            }())
              , s = function() {
                function a(a, t) {
                    this.Ig = a,
                    this.Hg = t
                }
                return a
            }();
            return c
        }(),
        a.Lg = function() {
            function a() {}
            return a.Mg = "wm_consent_state",
            a.Ng = "wm_show_player_names",
            a.Og = "wm_music_enabled",
            a.Pg = "wm_sfx_enabled",
            a.Qg = "wm_account_type",
            a.Rg = "wm_game_mode",
            a.Sg = "wm_nickname",
            a.Tg = "wm_skin",
            a.Ug = "eYQdvZijwSX5WnP1kMov5qUUvsG0kNj04l4Z1IL5B7LKogw7cipYkblCASSY7f7F",
            a.Vg = "wm_shared",
            a.Wg = function(a, t) {
                try {
                    localStorage.setItem(a, t)
                } catch (a) {}
            }
            ,
            a.Xg = function(a) {
                try {
                    return localStorage.getItem(a)
                } catch (a) {
                    return ""
                }
            }
            ,
            a
        }(),
        t.Yg = function() {
            function a(a, t, e) {
                for (var f = !1, c = e.length, i = 0, n = c - 1; i < c; n = i++)
                    e[i][1] > t != e[n][1] > t && a < (e[n][0] - e[i][0]) * (t - e[i][1]) / (e[n][1] - e[i][1]) + e[i][0] && (f = !f);
                return f
            }
            var t = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
                Zg: function(e, f) {
                    return a(f, e, t)
                }
            }
        }(),
        a.$g = function() {
            function a(a) {
                var t;
                t = a > 0 ? "+" + e.J(a) : a < 0 ? "-" + e.J(a) : "0";
                var f, c = e.R(1.5, .5 + a / 600);
                if (a < 1)
                    f = "0xFFFFFF";
                else if (a < 30) {
                    var n = (a - 1) / 29;
                    f = i(1 * (1 - n) + .96 * n, 1 * (1 - n) + .82 * n, 1 * (1 - n) + 0 * n)
                } else if (a < 300) {
                    var o = (a - 30) / 270;
                    f = i(.96 * (1 - o) + .93 * o, .82 * (1 - o) + .34 * o, 0 * (1 - o) + .25 * o)
                } else if (a < 700) {
                    var d = (a - 300) / 400;
                    f = i(.93 * (1 - d) + .98 * d, .34 * (1 - d) + 0 * d, .25 * (1 - d) + .98 * d)
                } else
                    f = i(.98, 0, .98);
                var b = e.$()
                  , r = 1 + .5 * e.$();
                return new h(t,f,!0,.5,c,b,r)
            }
            function c(a, t) {
                var e, f;
                return t ? (e = 1.3,
                f = i(.93, .34, .25)) : (e = 1.1,
                f = i(.96, .82, 0)),
                new h(a,f,!0,.5,e,.5,.7)
            }
            function i(a, t, e) {
                return ((255 * a & 255) << 16) + ((255 * t & 255) << 8) + (255 * e & 255)
            }
            var n = e.M(f.k["Container"], function() {
                f.k["Container"].call(this),
                this._g = [],
                this.ah = 0
            });
            n.prototype.bh = function(t) {
                if (this.ah += t,
                this.ah >= 1) {
                    var f = e.J(this.ah);
                    this.ah -= f;
                    var c = a(f);
                    this["addChild"](c),
                    this._g.push(c)
                }
            }
            ,
            n.prototype.ch = function(a) {
                if (a) {
                    var t = c(e.B("index.game.floating.headshot"), !0);
                    this["addChild"](t),
                    this._g.push(t)
                } else {
                    var f = c(e.B("index.game.floating.wellDone"), !1);
                    this["addChild"](f),
                    this._g.push(f)
                }
            }
            ,
            n.prototype.rg = function(a, f) {
                for (var c = t.w.eh.Lf.dh, i = c.Wf.width / c.Wf.resolution, n = c.Wf.height / c.Wf.resolution, h = 0; h < this._g.length; ) {
                    var o = this._g[h];
                    o.fh = o.fh + f / 2e3 * o.gh,
                    o.hh = o.hh + f / 2e3 * o.ih,
                    o["alpha"] = .5 * e.aa(t.A * o.hh),
                    o["scale"]["set"](o.fh),
                    o["position"]["x"] = i * (.25 + .5 * o.jh),
                    o["position"]["y"] = o.kh ? n * (1 - .5 * (1 + o.hh)) : n * (1 - .5 * (0 + o.hh)),
                    o.hh > 1 && (e.l(o),
                    this._g.splice(h, 1),
                    h--),
                    h++
                }
            }
            ;
            var h = function() {
                return e.M(f.k["Text"], function(a, t, c, i, n, h, o) {
                    f.k["Text"].call(this, a, function() {
                        var a = {};
                        return a["fill"] = t,
                        a["fontFamily"] = "PTSans",
                        a["fontSize"] = 36,
                        a
                    }()),
                    this["anchor"]["set"](.5),
                    this.kh = c,
                    this.fh = i,
                    this.gh = n,
                    this.jh = h,
                    this.hh = 0,
                    this.ih = o
                })
            }();
            return n
        }(),
        a.Le = function() {
            function a(a, t) {
                this.Fe = a,
                this.oc = t
            }
            return a
        }(),
        a.jd = {
            lh: 0,
            id: 16
        },
        a.mh = function() {
            function t() {
                this.nh = a.jd.lh,
                this.oh = 0,
                this.ph = 500,
                this.qh = 4e3,
                this.rh = 7e3
            }
            return t.sh = 0,
            t.prototype.th = function() {
                return 1.02 * this.ph
            }
            ,
            t
        }(),
        a.uh = function() {
            function c(t) {
                var c = this;
                this.Pf = t,
                this.mc = t.get()[0],
                this.Wf = function() {
                    var a = {};
                    return a["view"] = c.mc,
                    a["backgroundColor"] = i,
                    a["antialias"] = !0,
                    new (f.k["Renderer"])(a)
                }(),
                this.Xf = new (f.k["Container"]),
                this.Xf["sortableChildren"] = !0,
                this.vh = e.J(e.$()),
                this.wh = 0,
                this.xh = 0,
                this.yh = 15,
                this.zh = .5,
                this.Ah = 0,
                this.Bh = new a.Ch,
                this.Dh = new (f.k["Graphics"]),
                this.Eh = new (f.k["Container"]),
                this.Fh = new (f.k["Container"]),
                this.Fh["sortableChildren"] = !0,
                this.Gh = new (f.k["Container"]),
                this.Hh = new (f.k["Container"]),
                this.Hh["sortableChildren"] = !0,
                this.Ih = new (f.k["Container"]),
                this.Jh = new n,
                this.Kh = new h,
                this.Lh = new o,
                this.Mh = new a.$g,
                this.Nh = new (f.k["Sprite"]),
                this.Oh = {
                    x: 0,
                    y: 0
                },
                this.Sa()
            }
            var i = 0;
            c.prototype.Sa = function() {
                this.Wf.backgroundColor = i,
                this.Bh.ag["zIndex"] = 10,
                this.Xf["addChild"](this.Bh.ag),
                this.Dh["zIndex"] = 20,
                this.Xf["addChild"](this.Dh),
                this.Eh["zIndex"] = 5e3,
                this.Xf["addChild"](this.Eh),
                this.Fh["zIndex"] = 5100,
                this.Xf["addChild"](this.Fh),
                this.Gh["zIndex"] = 1e4,
                this.Xf["addChild"](this.Gh),
                this.Nh["texture"] = t.w.ff.Ph,
                this.Nh["anchor"]["set"](.5),
                this.Nh["zIndex"] = 1,
                this.Hh["addChild"](this.Nh),
                this.Ih["alpha"] = .6,
                this.Ih["zIndex"] = 2,
                this.Hh["addChild"](this.Ih),
                this.Mh["zIndex"] = 3,
                this.Hh["addChild"](this.Mh),
                this.Jh["alpha"] = .8,
                this.Jh["zIndex"] = 4,
                this.Hh["addChild"](this.Jh),
                this.Kh["zIndex"] = 5,
                this.Hh["addChild"](this.Kh),
                this.Lh["zIndex"] = 6,
                this.Hh["addChild"](this.Lh),
                this.kg()
            }
            ,
            c.prototype.kg = function() {
                var a = e.e()
                  , t = this.Pf["width"]()
                  , f = this.Pf["height"]();
                this.Wf["resize"](t, f),
                this.Wf["resolution"] = a,
                this.mc["width"] = a * t,
                this.mc["height"] = a * f,
                this.zh = e.R(e.R(t, f), .625 * e.S(t, f)),
                this.Nh["position"]["x"] = t / 2,
                this.Nh["position"]["y"] = f / 2,
                this.Nh["width"] = t,
                this.Nh["height"] = f,
                this.Jh["position"]["x"] = 60,
                this.Jh["position"]["y"] = 60,
                this.Kh["position"]["x"] = 110,
                this.Kh["position"]["y"] = 10,
                this.Lh["position"]["x"] = t - 225,
                this.Lh["position"]["y"] = 1
            }
            ,
            c.prototype.rg = function(f, c) {
                this.yh = 15,
                this.Eh["removeChildren"](),
                this.Fh["removeChildren"](),
                this.Gh["removeChildren"](),
                this.Ih["removeChildren"](),
                this.Bh.Qh(f.nh === a.jd.lh ? t.w.ff.Rh : t.w.ff.Sh);
                var i = this.Dh;
                i["clear"](),
                i["lineStyle"](.2, 16711680, .3),
                i["drawCircle"](0, 0, f.ph),
                i["endFill"](),
                this.Lh.Th = c,
                this.Ih["visible"] = c
            }
            ,
            c.prototype.qg = function(f, c) {
                if (!(this.Wf.width <= 5)) {
                    var i = t.w.Vh.Uh
                      , n = this.Wf["width"] / this.Wf["resolution"]
                      , h = this.Wf["height"] / this.Wf["resolution"];
                    this.yh = e.Q(this.yh, t.w.Vh.Wh, c, .002);
                    var o = this.zh / this.yh
                      , d = t.w.Vh.Uh.Od[a.Qd.$d]
                      , b = null != d && d.Sd;
                    this.Ah = e.P(this.Ah + c / 1e3 * (.1 * (b ? 1 : 0) - this.Ah), 0, 1),
                    this.Nh["alpha"] = this.Ah,
                    this.vh = this.vh + .01 * c,
                    this.vh > 360 && (this.vh = this.vh % 360),
                    this.wh = e.aa(f / 1200 * t.z);
                    var r = i.Xh();
                    this.Oh.x = e.T(this.Oh.x, r.$a, c, .5, 33.333),
                    this.Oh.y = e.T(this.Oh.y, r._a, c, .5, 33.333);
                    var s = n / o / 2
                      , u = h / o / 2;
                    t.w.Vh.Yh(this.Oh.x - 1.3 * s, this.Oh.x + 1.3 * s, this.Oh.y - 1.3 * u, this.Oh.y + 1.3 * u),
                    this.Bh.rg(this.Oh.x, this.Oh.y, 2 * s, 2 * u);
                    var p = t.w.Vh.Zh.ph;
                    this.Xf["scale"]["x"] = o,
                    this.Xf["scale"]["y"] = o,
                    this.Xf["position"]["x"] = n / 2 - this.Oh.x * o,
                    this.Xf["position"]["y"] = h / 2 - this.Oh.y * o;
                    var l = e.Z(r.$a, r._a);
                    if (l > p - 10) {
                        this.xh = e.P(1 + (l - p) / 10, 0, 1);
                        var k = e.ba(this.vh * t.z / 360) * (1 - this.xh) + 1 * this.xh
                          , w = e.aa(this.vh * t.z / 360) * (1 - this.xh)
                          , g = (e.Y(w, k) + t.z) % t.z * 360 / t.z
                          , v = this.xh * (.5 + .5 * this.wh)
                          , y = e.ma(e.J(g), 1, .75 - .25 * this.xh);
                        this.Bh.nd(y[0], y[1], y[2], .1 + .2 * v)
                    } else {
                        this.xh = 0;
                        var j = e.ma(e.J(this.vh), 1, .75);
                        this.Bh.nd(j[0], j[1], j[2], .1)
                    }
                    for (var m = 0; m < this.Ih.children.length; m++) {
                        var q = this.Ih.children[m];
                        q["position"]["x"] = n / 2 - (this.Oh.x - q.$h.x) * o,
                        q["position"]["y"] = h / 2 - (this.Oh.y - q.$h.y) * o
                    }
                    this.Jh._h["position"]["x"] = r.$a / p * this.Jh.ai,
                    this.Jh._h["position"]["y"] = r._a / p * this.Jh.ai,
                    this.Kh.bi(f),
                    this.Mh.rg(f, c),
                    this.Wf["render"](this.Xf, null, !0),
                    this.Wf["render"](this.Hh, null, !1)
                }
            }
            ,
            c.prototype.ci = function(a, t) {
                t.di.ld.zd()["zIndex"] = (a + 2147483648) / 4294967296 * 5e3,
                this.Eh["addChild"](t.di.md.zd()),
                this.Fh["addChild"](t.di.ld.zd())
            }
            ,
            c.prototype.ei = function(a, f, c) {
                f.Yc["zIndex"] = t.w.Vh.Zh.oh ? 0 : 10 + (a + 32768) / 65536 * 5e3,
                this.Gh["addChild"](f.Yc),
                a !== t.w.Vh.Zh.oh && this.Ih["addChild"](c)
            }
            ;
            var n = function() {
                return e.M(f.k["Container"], function() {
                    f.k["Container"].call(this),
                    this.ai = 40,
                    this.fi = new (f.k["Sprite"]),
                    this.fi["anchor"]["set"](.5),
                    this._h = new (f.k["Graphics"]);
                    var a = new (f.k["Graphics"]);
                    a["beginFill"]("black", .4),
                    a["drawCircle"](0, 0, this.ai),
                    a["endFill"](),
                    a["lineStyle"](2, 16225317),
                    a["drawCircle"](0, 0, this.ai),
                    a["moveTo"](0, -this.ai),
                    a["lineTo"](0, +this.ai),
                    a["moveTo"](-this.ai, 0),
                    a["lineTo"](+this.ai, 0),
                    a["endFill"](),
                    this.fi["alpha"] = .5,
                    this._h["zIndex"] = 2,
                    this._h["alpha"] = .9,
                    this._h["beginFill"](16225317),
                    this._h["drawCircle"](0, 0, .06 * this.ai),
                    this._h["endFill"](),
                    this._h["lineStyle"](1, "black"),
                    this._h["drawCircle"](0, 0, .06 * this.ai),
                    this._h["endFill"](),
                    this["addChild"](a),
                    this["addChild"](this.fi),
                    this["addChild"](this._h)
                })
            }()
              , h = function() {
                var a = e.M(f.k["Container"], function() {
                    f.k["Container"].call(this),
                    this.gi = {}
                });
                a.prototype.bi = function(a) {
                    var f = .5 + .5 * e.ba(t.z * (a / 1e3 / 1.6));
                    for (var c in this.gi) {
                        var i = this.gi[c]
                          , n = i.hi;
                        i["alpha"] = 1 - n + n * f
                    }
                }
                ,
                a.prototype.rg = function(a) {
                    for (var f in this.gi)
                        null != a[f] && a[f].Sd || (e.l(this.gi[f]),
                        delete this.gi[f]);
                    var i = 0;
                    for (var n in a) {
                        var h = a[n];
                        if (h.Sd) {
                            var o = this.gi[n];
                            if (!o) {
                                var d = t.w.ud.Cc().Zb(h.Xd).cc;
                                o = new c,
                                o["texture"] = d.mb(),
                                o["width"] = 40,
                                o["height"] = 40,
                                this.gi[n] = o,
                                this["addChild"](o)
                            }
                            o.hi = h.Yd,
                            o["position"]["x"] = i,
                            i += 40
                        }
                    }
                }
                ;
                var c = function() {
                    return e.M(f.k["Sprite"], function() {
                        f.k["Sprite"].call(this),
                        this.hi = 0
                    })
                }();
                return a
            }()
              , o = function() {
                var c = e.M(f.k["Container"], function() {
                    f.k["Container"].call(this),
                    this.Th = !0,
                    this.ii = 12,
                    this.ji = 9,
                    this._g = [];
                    for (var a = 0; a < 14; a++)
                        this.ki()
                });
                c.prototype.rg = function(f) {
                    var c = t.w.Vh.Zh.nh === a.jd.id
                      , i = 0
                      , n = 0;
                    n >= this._g.length && this.ki(),
                    this._g[n].li(1, "white"),
                    this._g[n].mi("", e.B("index.game.leader.top10"), "(".concat(t.w.Vh.ni, " online)")),
                    this._g[n]["position"]["y"] = i,
                    i += this.ii,
                    n += 1,
                    f.oi.length > 0 && (i += this.ji);
                    for (var h = 0; h < f.oi.length; h++) {
                        var o = f.oi[h]
                          , d = t.w.ud.Cc().Tb(o.pi)
                          , b = ""
                          , r = t.w.ud.Gc()["textDict"][d.$b];
                        null != r && (b = e.C(r)),
                        n >= this._g.length && this.ki(),
                        this._g[n].li(.8, d._b.bc),
                        this._g[n].mi("".concat(h + 1), b, e.ka(o.qi)),
                        this._g[n]["position"]["y"] = i,
                        i += this.ii,
                        n += 1
                    }
                    f.ri.length > 0 && (i += this.ji);
                    for (var s = 0; s < f.ri.length; s++) {
                        var u = f.ri[s]
                          , p = t.w.Vh.Zh.oh === u.si
                          , l = void 0
                          , k = void 0;
                        if (p)
                            l = "white",
                            k = t.w.Vh.Uh.ti.Xa;
                        else {
                            var w = t.w.Vh.vi[u.si];
                            null != w ? (l = c ? t.w.ud.Cc().Tb(w.ti.wi)._b.bc : t.w.ud.Cc().Sb(w.ti.xi).bc,
                            k = this.Th ? w.ti.Xa : "---") : (l = "gray",
                            k = "?")
                        }
                        p && (i += this.ji),
                        n >= this._g.length && this.ki(),
                        this._g[n].li(p ? 1 : .8, l),
                        this._g[n].mi("".concat(s + 1), k, e.ka(u.qi)),
                        this._g[n]["position"]["y"] = i,
                        i += this.ii,
                        n += 1,
                        p && (i += this.ji)
                    }
                    for (t.w.Vh.yi > f.ri.length && (i += this.ji,
                    n >= this._g.length && this.ki(),
                    this._g[n].li(1, "white"),
                    this._g[n].mi("".concat(t.w.Vh.yi), t.w.Vh.Uh.ti.Xa, e.ka(t.w.Vh.Uh.qi)),
                    this._g[n]["position"]["y"] = i,
                    i += this.ii,
                    n += 1,
                    i += this.ji); this._g.length > n; )
                        e.l(this._g.pop())
                }
                ,
                c.prototype.ki = function() {
                    var a = new i;
                    a["position"]["y"] = 0,
                    this._g.length > 0 && (a["position"]["y"] = this._g[this._g.length - 1]["position"]["y"] + this.ii),
                    this._g.push(a),
                    this["addChild"](a)
                }
                ;
                var i = function() {
                    var a = e.M(f.k["Container"], function() {
                        f.k["Container"].call(this),
                        this.zi = new (f.k["Text"])("",function() {
                            var a = {};
                            return a["fontFamily"] = "PTSans",
                            a["fontSize"] = 12,
                            a["fill"] = "white",
                            a
                        }()),
                        this.zi["anchor"]["x"] = 1,
                        this.zi["position"]["x"] = 30,
                        this["addChild"](this.zi),
                        this.Ai = new (f.k["Text"])("",function() {
                            var a = {};
                            return a["fontFamily"] = "PTSans",
                            a["fontSize"] = 12,
                            a["fill"] = "white",
                            a
                        }()),
                        this.Ai["anchor"]["x"] = 0,
                        this.Ai["position"]["x"] = 35,
                        this["addChild"](this.Ai),
                        this.Bi = new (f.k["Text"])("",function() {
                            var a = {};
                            return a["fontFamily"] = "PTSans",
                            a["fontSize"] = 12,
                            a["fill"] = "white",
                            a
                        }()),
                        this.Bi["anchor"]["x"] = 1,
                        this.Bi["position"]["x"] = 220,
                        this["addChild"](this.Bi)
                    });
                    return a.prototype.mi = function(a, t, f) {
                        this.zi["text"] = a,
                        this.Bi["text"] = f;
                        var c = t;
                        for (this.Ai["text"] = c; this.Ai["width"] > 100; )
                            c = c.substring(0, c.length - 1),
                            this.Ai["text"] = c + ".."
                    }
                    ,
                    a.prototype.li = function(a, t) {
                        this.zi["alpha"] = a,
                        this.zi["style"]["fill"] = t,
                        this.Ai["alpha"] = a,
                        this.Ai["style"]["fill"] = t,
                        this.Bi["alpha"] = a,
                        this.Bi["style"]["fill"] = t
                    }
                    ,
                    a
                }();
                return c
            }();
            return c
        }(),
        a.Ci = function() {
            function f(a) {
                this.Vh = a,
                this.Di = [],
                this.Ei = 0
            }
            f.prototype.Fi = function(t) {
                this.Di.push(new a.ua(new a.ta(t)))
            }
            ,
            f.prototype.Gi = function() {
                this.Di = [],
                this.Ei = 0
            }
            ,
            f.prototype.Hi = function() {
                for (var a = 0; a < 10; a++) {
                    if (0 === this.Di.length)
                        return;
                    var t = this.Di.shift();
                    try {
                        this.Ii(t)
                    } catch (a) {
                        throw a
                    }
                }
            }
            ,
            f.prototype.Ii = function(a) {
                switch (255 & a.xa(0)) {
                case 0:
                    return void this.Ji(a);
                case 1:
                    return void this.Ki(a);
                case 2:
                    return void this.Li(a);
                case 3:
                    return void this.Mi(a);
                case 4:
                    return void this.Ni(a);
                case 5:
                    return void this.Oi(a)
                }
            }
            ,
            f.prototype.Ji = function(a) {
                this.Vh.Zh.nh = a.xa();
                var e = a.ya();
                this.Vh.Zh.oh = e,
                this.Vh.Uh.ti.Ke = e,
                this.Vh.Zh.ph = a.Aa(),
                this.Vh.Zh.qh = a.Aa(),
                this.Vh.Zh.rh = a.Aa(),
                t.w.eh.Lf.dh.rg(this.Vh.Zh, t.w.eh.Qi.Pi())
            }
            ,
            f.prototype.Ki = function(a) {
                var t, e = this.Ei++, f = a.ya();
                t = this.Ri(a);
                for (var c = 0; c < t; c++)
                    this.Si(a);
                t = this.Ri(a);
                for (var i = 0; i < t; i++)
                    this.Ti(a);
                t = this.Ri(a);
                for (var n = 0; n < t; n++)
                    this.Ui(a);
                t = this.Ri(a);
                for (var h = 0; h < t; h++)
                    this.Vi(a);
                t = this.Ri(a);
                for (var o = 0; o < t; o++)
                    this.Wi(a);
                t = this.Ri(a);
                for (var d = 0; d < t; d++)
                    this.Xi(a);
                t = this.Ri(a);
                for (var b = 0; b < t; b++)
                    this.Yi(a);
                t = this.Ri(a);
                for (var r = 0; r < t; r++)
                    this.Zi(a);
                e > 0 && this.$i(a),
                this.Vh._i(e, f)
            }
            ,
            f.prototype.Vi = function(e) {
                var f = new a.bj.aj;
                f.Ke = e.ya(),
                f.wi = this.Vh.Zh.nh === a.jd.id ? e.xa() : a.mh.sh,
                f.xi = e.ya(),
                f.cj = e.ya(),
                f.dj = e.ya(),
                f.ej = e.ya(),
                f.fj = e.ya();
                for (var c = e.xa(), i = "", n = 0; n < c; n++)
                    i += String.fromCharCode(e.ya());
                if (f.Xa = i,
                this.Vh.Zh.oh === f.Ke)
                    this.Vh.Uh.gj(f);
                else {
                    var h = this.Vh.vi[f.Ke];
                    null != h && h.hj();
                    var o = new a.bj(this.Vh.Zh);
                    o.ij(t.w.eh.Lf.dh),
                    this.Vh.vi[f.Ke] = o,
                    o.gj(f)
                }
            }
            ,
            f.prototype.Wi = function(a) {
                var f = a.ya()
                  , c = a.xa()
                  , i = !!(1 & c)
                  , n = !!(2 & c)
                  , h = 0;
                i && (h = a.ya());
                var o = this.jj(f);
                if (_typeof(o) !== "undefined" && (o.kj = !1,
                o.lj)) {
                    var d = this.jj(f);
                    if (i && _typeof(d) !== "undefined" && d.lj)
                        if (h === this.Vh.Zh.oh) {
                            var b = this.Vh.Uh.Xh()
                              , r = o.mj(b.$a, b._a);
                            e.S(0, 1 - r.nj / (.5 * this.Vh.Wh));
                            r.nj < .5 * this.Vh.Wh && t.w.eh.Lf.dh.Mh.ch(n)
                        } else if (f === this.Vh.Zh.oh)
                            ;
                        else {
                            var s = this.Vh.Uh.Xh()
                              , u = o.mj(s.$a, s._a);
                            e.S(0, 1 - u.nj / (.5 * this.Vh.Wh))
                        }
                    else if (f === this.Vh.Zh.oh)
                        ;
                    else {
                        var p = this.Vh.Uh.Xh()
                          , l = o.mj(p.$a, p._a);
                        e.S(0, 1 - l.nj / (.5 * this.Vh.Wh))
                    }
                }
            }
            ,
            f.prototype.Zi = function(f) {
                var c = f.ya()
                  , i = c === this.Vh.Zh.oh ? null : this.Vh.vi[c]
                  , n = f.xa()
                  , h = !!(1 & n);
                if (!!(2 & n)) {
                    var o = f.Aa();
                    i && i.oj(o)
                }
                var d = this.pj(f.xa(), f.xa(), f.xa())
                  , b = this.pj(f.xa(), f.xa(), f.xa());
                if (i) {
                    i.qj(d, b, h);
                    var r = this.Vh.Uh.Xh()
                      , s = i.Xh()
                      , u = e.S(0, 1 - e.Z(r.$a - s.$a, r._a - s._a) / (.5 * this.Vh.Wh));
                    t.w.rj.Hf(u, c, h)
                }
                var p = this.Ri(f);
                if (i)
                    for (var l in i.Od) {
                        var k = i.Od[l];
                        k && (k.Sd = !1)
                    }
                for (var w = 0; w < p; w++) {
                    var g = f.xa()
                      , v = f.xa();
                    if (i) {
                        var y = i.Od[g];
                        y || (y = i.Od[g] = new a.Qd(g)),
                        y.Sd = !0,
                        y.Yd = e.R(1, e.S(0, v / 100))
                    }
                }
            }
            ,
            f.prototype.$i = function(f) {
                var c = this.Vh.Uh
                  , i = f.xa()
                  , n = !!(1 & i)
                  , h = !!(2 & i)
                  , o = !!(4 & i);
                if (h) {
                    var d = c.qi;
                    c.oj(f.Aa()),
                    d = c.qi - d,
                    d > 0 && t.w.eh.Lf.dh.Mh.bh(d)
                }
                o && (this.Vh.sj = f.Aa());
                var b = this.pj(f.xa(), f.xa(), f.xa())
                  , r = this.pj(f.xa(), f.xa(), f.xa());
                c.qj(b, r, n),
                t.w.rj.Hf(.5, this.Vh.Zh.oh, n);
                var s = this.Ri(f);
                for (var u in c.Od) {
                    var p = c.Od[u];
                    p && (p.Sd = !1)
                }
                for (var l = 0; l < s; l++) {
                    var k = f.xa()
                      , w = f.xa()
                      , g = c.Od[k];
                    g || (g = new a.Qd(k),
                    c.Od[k] = g),
                    g.Sd = !0,
                    g.Yd = e.R(1, e.S(0, w / 100))
                }
                t.w.eh.Lf.dh.Kh.rg(c.Od)
            }
            ,
            f.prototype.Xi = function(a) {
                var f = this
                  , c = a.ya()
                  , i = this.jj(c)
                  , n = a.Aa()
                  , h = this.Ri(a);
                if (i) {
                    i.oj(n),
                    i.tj(function() {
                        return f.pj(a.xa(), a.xa(), a.xa())
                    }, h),
                    i.Ud(!0);
                    var o = this.Vh.Uh.Xh()
                      , d = i.Xh()
                      , b = e.S(0, 1 - e.Z(o.$a - d.$a, o._a - d._a) / (.5 * this.Vh.Wh));
                    t.w.rj.Ff(b, c)
                } else
                    for (var r = 0; r < 6 * h; r++)
                        a.xa()
            }
            ,
            f.prototype.Yi = function(a) {
                var e = a.ya()
                  , f = this.Vh.vi[e];
                f && f.kj && f.Ud(!1),
                t.w.rj.Gf(e)
            }
            ,
            f.prototype.Si = function(e) {
                var f = new a.uj.aj;
                f.Ke = e.za(),
                f.wi = this.Vh.Zh.nh === a.jd.id ? e.xa() : a.mh.sh,
                f.vj = this.pj(e.xa(), e.xa(), e.xa()),
                f.xi = e.xa();
                var c = this.Vh.wj[f.Ke];
                null != c && c.hj();
                var i = new a.uj(f,t.w.eh.Lf.dh);
                i.xj(this.yj(f.Ke), this.zj(f.Ke), !0),
                this.Vh.wj[f.Ke] = i
            }
            ,
            f.prototype.Ti = function(a) {
                var t = a.za()
                  , e = this.Vh.wj[t];
                e && (e.Aj = 0,
                e.Bj = 1.5 * e.Bj,
                e.Cj = !0)
            }
            ,
            f.prototype.Ui = function(a) {
                var t = a.za()
                  , e = a.ya()
                  , f = this.Vh.wj[t];
                if (f) {
                    f.Aj = 0,
                    f.Bj = .1 * f.Bj,
                    f.Cj = !0;
                    var c = this.jj(e);
                    if (c && c.lj) {
                        var i = (this.Vh.Zh.oh,
                        c.Xh());
                        f.xj(i.$a, i._a, !1)
                    }
                }
            }
            ;
            var c = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            return f.prototype.Li = function(a) {
                for (var f = t.w.ud.Ic().nc, i = f["getImageData"](0, 0, 80, 80), n = c[0], h = 80 - n, o = 0, d = 0; d < 628; d++)
                    for (var b = a.xa(), r = 0; r < 8; r++) {
                        var s = 0 != (b >> r & 1)
                          , u = 4 * (n + 80 * o);
                        s ? (i["data"][u] = 255,
                        i["data"][u + 1] = 255,
                        i["data"][u + 2] = 255,
                        i["data"][u + 3] = 255) : i["data"][u + 3] = 0,
                        ++n >= h && ++o < 80 && (n = c[o],
                        h = 80 - n)
                    }
                f["putImageData"](i, 0, 0);
                var p = t.w.eh.Lf.dh.Jh.fi;
                p["texture"] = t.w.ud.Ic().oc,
                p["texture"]["update"]()
            }
            ,
            f.prototype.Ni = function(a) {
                a.za()
            }
            ,
            f.prototype.Oi = function(a) {
                this.Vh.Dj()
            }
            ,
            f.prototype.Mi = function(e) {
                this.Vh.ni = e.ya(),
                this.Vh.yi = e.ya();
                var f = new a.Ej;
                f.ri = [];
                for (var c = e.xa(), i = 0; i < c; i++) {
                    var n = e.ya()
                      , h = e.Aa();
                    f.ri.push(a.Ej.Fj(n, h))
                }
                if (f.oi = [],
                this.Vh.Zh.nh === a.jd.id)
                    for (var o = e.xa(), d = 0; d < o; d++) {
                        var b = e.xa()
                          , r = e.Aa();
                        f.oi.push(a.Ej.Gj(b, r))
                    }
                t.w.eh.Lf.dh.Lh.rg(f)
            }
            ,
            f.prototype.jj = function(a) {
                return a === this.Vh.Zh.oh ? this.Vh.Uh : this.Vh.vi[a]
            }
            ,
            f.prototype.pj = function(a, t, e) {
                return 1e4 * ((16777215 & (255 & e | t << 8 & 65280 | a << 16 & 16711680)) / 8388608 - 1)
            }
            ,
            f.prototype.yj = function(a) {
                return ((65535 & a) / 32768 - 1) * this.Vh.Zh.th()
            }
            ,
            f.prototype.zj = function(a) {
                return ((a >> 16 & 65535) / 32768 - 1) * this.Vh.Zh.th()
            }
            ,
            f.prototype.Ri = function(a) {
                var t = a.xa();
                if (0 == (128 & t))
                    return t;
                var e = a.xa();
                if (0 == (128 & e))
                    return e | t << 7 & 16256;
                var f = a.xa();
                if (0 == (128 & f))
                    return f | e << 7 & 16256 | t << 14 & 2080768;
                var c = a.xa();
                return 0 == (128 & c) ? c | f << 7 & 16256 | e << 14 & 2080768 | t << 21 & 266338304 : void 0
            }
            ,
            f
        }(),
        a.Hj = function() {
            function t(a) {
                this.Ij = a
            }
            return t.Jj = function() {
                return new a.Hj(null)
            }
            ,
            t.Kj = function(t) {
                return new a.Hj(t)
            }
            ,
            t.prototype.Mc = function() {
                return this.Ij
            }
            ,
            t.prototype.Lj = function() {
                return null != this.Ij
            }
            ,
            t.prototype.Mj = function(a) {
                null != this.Ij && a(this.Ij)
            }
            ,
            t
        }(),
        a.uj = function() {
            function f(f, c) {
                this.ti = f,
                this.Nj = f.xi >= 80,
                this.Oj = 0,
                this.Pj = 0,
                this.Qj = 0,
                this.Rj = 0,
                this.Bj = this.Nj ? 1 : f.vj,
                this.Aj = 1,
                this.Cj = !1,
                this.Sj = 0,
                this.Tj = 0,
                this.Uj = 1,
                this.Vj = t.z * e.$(),
                this.Wj = new a.Xj,
                this.Wj.hd(t.w.Vh.Zh.nh, this.ti.wi === a.mh.sh ? null : t.w.ud.Cc().Tb(this.ti.wi), t.w.ud.Cc().Yb(this.ti.xi)),
                c.ci(f.Ke, this.Wj)
            }
            return f.prototype.hj = function() {
                this.Wj.di.md.Ad(),
                this.Wj.di.ld.Ad()
            }
            ,
            f.prototype.xj = function(a, t, e) {
                this.Oj = a,
                this.Pj = t,
                e && (this.Qj = a,
                this.Rj = t)
            }
            ,
            f.prototype.Yj = function(a, t) {
                var f = e.R(.5, 1 * this.Bj)
                  , c = e.R(2.5, 1.5 * this.Bj);
                this.Sj = e.Q(this.Sj, f, t, .0025),
                this.Tj = e.Q(this.Tj, c, t, .0025),
                this.Uj = e.Q(this.Uj, this.Aj, t, .0025)
            }
            ,
            f.prototype.Zj = function(a, t, f) {
                this.Qj = e.Q(this.Qj, this.Oj, t, .0025),
                this.Rj = e.Q(this.Rj, this.Pj, t, .0025),
                this.Wj.rg(this, a, t, f)
            }
            ,
            f.aj = function() {
                function t() {
                    this.Ke = 0,
                    this.wi = a.mh.sh,
                    this.vj = 0,
                    this.xi = 0
                }
                return t
            }(),
            f
        }(),
        a.Xj = function() {
            function t() {
                this.di = new n(new a.bd,new a.bd),
                this.di.md.gd["blendMode"] = f.k["BLEND_MODES"]["ADD"],
                this.di.md.gd["zIndex"] = i,
                this.di.ld.gd["zIndex"] = c
            }
            var c = 500
              , i = 100;
            t.prototype.hd = function(t, e, f) {
                var c = f.cc;
                null != c && this.di.ld.kd(c);
                var i = t === a.jd.id && null != e ? e.ac.dc : f.dc;
                null != i && this.di.md.kd(i)
            }
            ,
            t.prototype.rg = function(a, t, f, c) {
                if (!c(a.Qj, a.Rj))
                    return void this.di.Dd();
                var i = a.Tj * (1 + .3 * e.ba(a.Vj + t / 200));
                a.Nj ? this.di.Bd(a.Qj, a.Rj, 2 * a.Sj, 1 * a.Uj, 1.2 * i, .8 * a.Uj) : this.di.Bd(a.Qj, a.Rj, 2 * a.Sj, 1 * a.Uj, 2 * i, .3 * a.Uj)
            }
            ;
            var n = function() {
                function a(a, t) {
                    this.ld = a,
                    this.md = t
                }
                return a.prototype.Bd = function(a, t, e, f, c, i) {
                    this.ld.Ud(!0),
                    this.ld.Vd(a, t),
                    this.ld.Cd(e),
                    this.ld.$j(f),
                    this.md.Ud(!0),
                    this.md.Vd(a, t),
                    this.md.Cd(c),
                    this.md.$j(i)
                }
                ,
                a.prototype.Dd = function() {
                    this.ld.Ud(!1),
                    this.md.Ud(!1)
                }
                ,
                a
            }();
            return t
        }(),
        a._j = function() {
            function f() {
                this.ak = 0,
                this.bk = 0,
                this.ck = 0,
                this.dk = 0,
                this.ek = 0,
                this.fk = []
            }
            function c(a, t) {
                for (var f = 0; f < a.length; f++)
                    if (parseInt(a[f]["id"]) === t)
                        return f;
                return -1
            }
            return f.prototype.Sa = function() {}
            ,
            f.prototype.gk = function(t) {
                switch (t) {
                case a.ik.hk:
                    return this.ak;
                case a.ik.jk:
                    return this.bk;
                case a.ik.kk:
                    return this.ck;
                case a.ik.lk:
                    return this.dk;
                case a.ik.mk:
                    return this.ek
                }
                return 0
            }
            ,
            f.prototype.nk = function() {
                return new a.Rb(this.ak,this.bk,this.ck,this.dk,this.ek)
            }
            ,
            f.prototype.ok = function(a) {
                this.fk.push(a),
                this.pk()
            }
            ,
            f.prototype.qk = function() {
                if (!t.w.ud.Fc())
                    return e.ia([32, 33, 34, 35]);
                for (var f = [], c = t.w.ud.Gc()["skinArrayDict"], i = 0; i < c.length; i++) {
                    var n = c[i];
                    this.rk(n["id"], a.ik.hk) && f.push(n)
                }
                return 0 === f.length ? 0 : f[parseInt(f.length * e.$())]["id"]
            }
            ,
            f.prototype.sk = function() {
                if (t.w.ud.Fc()) {
                    var f = t.w.ud.Gc()["skinArrayDict"]
                      , i = c(f, this.ak);
                    if (!(i < 0)) {
                        for (var n = i + 1; n < f.length; n++)
                            if (this.rk(f[n]["id"], a.ik.hk))
                                return this.ak = f[n]["id"],
                                void this.pk();
                        for (var h = 0; h < i; h++)
                            if (this.rk(f[h]["id"], a.ik.hk))
                                return this.ak = f[h]["id"],
                                void this.pk()
                    }
                }
            }
            ,
            f.prototype.tk = function() {
                if (t.w.ud.Fc) {
                    var f = t.w.ud.Gc()["skinArrayDict"]
                      , i = c(f, this.ak);
                    if (!(i < 0)) {
                        for (var n = i - 1; n >= 0; n--)
                            if (this.rk(f[n]["id"], a.ik.hk))
                                return this.ak = f[n]["id"],
                                void this.pk();
                        for (var h = f.length - 1; h > i; h--)
                            if (this.rk(f[h]["id"], a.ik.hk))
                                return this.ak = f[h]["id"],
                                void this.pk()
                    }
                }
            }
            ,
            f.prototype.uk = function(e, f) {
                if (!t.w.ud.Fc() || this.rk(e, f))
                    switch (f) {
                    case a.ik.hk:
                        return void (this.ak !== e && (this.ak = e,
                        this.pk()));
                    case a.ik.jk:
                        return void (this.bk !== e && (this.bk = e,
                        this.pk()));
                    case a.ik.kk:
                        return void (this.ck !== e && (this.ck = e,
                        this.pk()));
                    case a.ik.lk:
                        return void (this.dk !== e && (this.dk = e,
                        this.pk()));
                    case a.ik.mk:
                        return void (this.ek !== e && (this.ek = e,
                        this.pk()))
                    }
            }
            ,
            f.prototype.rk = function(a, e) {
                var f = this.vk(a, e);
                return null != f && (t.w.xk.wk() ? 0 === f.yk() && !f.zk() || t.w.xk.Ak(a, e) : f.Bk())
            }
            ,
            f.prototype.vk = function(f, i) {
                if (!t.w.ud.Fc())
                    return null;
                var n = t.w.ud.Gc();
                if (i === a.ik.hk) {
                    var h = c(n["skinArrayDict"], f);
                    return h < 0 ? null : a.Dk.Ck(n["skinArrayDict"][h])
                }
                var o = null;
                switch (i) {
                case a.ik.jk:
                    o = n["eyesDict"][f];
                    break;
                case a.ik.kk:
                    o = n["mouthDict"][f];
                    break;
                case a.ik.lk:
                    o = n["hatDict"][f];
                    break;
                case a.ik.mk:
                    o = n["glassesDict"][f]
                }
                return null != o ? a.Dk.Ek(o) : null
            }
            ,
            f.prototype.pk = function() {
                for (var a = 0; a < this.fk.length; a++)
                    this.fk[a]()
            }
            ,
            f
        }(),
        a.ik = function() {
            function a() {}
            return a.hk = "SKIN",
            a.jk = "EYES",
            a.kk = "MOUTH",
            a.lk = "HAT",
            a.mk = "GLASSES",
            a
        }(),
        a.Fk = function() {
            function c() {
                this.gg = new (f.k["Texture"])(f.k["BaseTexture"]["from"]("/images/bg-obstacle.png"));
                var c = f.k["BaseTexture"]["from"](t.m.s)
                  , i = new (f.k["Texture"])(c,new (f.k["Rectangle"])(0,0,256,256),null,null,null,new (f.k["Point"])(.5,.5))
                  , n = new (f.k["Texture"])(c,new (f.k["Rectangle"])(352,96,64,64),null,null,null,new (f.k["Point"])(.5,.5));
                this.hg = [i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
                this.Rh = new (f.k["Texture"])(function() {
                    var a = f.k["BaseTexture"]["from"]("/images/bg-pattern-pow2-ARENA.png");
                    return a["wrapMode"] = f.k["WRAP_MODES"]["REPEAT"],
                    a
                }()),
                this.Sh = new (f.k["Texture"])(function() {
                    var a = f.k["BaseTexture"]["from"]("/images/bg-pattern-pow2-TEAM2.png");
                    return a["wrapMode"] = f.k["WRAP_MODES"]["REPEAT"],
                    a
                }()),
                this.Ph = new (f.k["Texture"])(f.k["BaseTexture"]["from"]("/images/lens.png")),
                this._f = new (f.k["Texture"])(function() {
                    var a = f.k["BaseTexture"]["from"](t.m.t);
                    return a["wrapMode"] = f.k["WRAP_MODES"]["REPEAT"],
                    a
                }()),
                this.lc = function() {
                    var t = a.d.createElement("canvas");
                    return t.width = 80,
                    t.height = 80,
                    {
                        mc: t,
                        nc: t["getContext"]("2d"),
                        oc: new (f.k["Texture"])(f.k["BaseTexture"]["from"](t))
                    }
                }(),
                this.if = {},
                this.ef = {},
                this.Gk = [],
                this.Hk = null
            }
            return c.prototype.Sa = function(a) {
                function t() {
                    0 == --e && a()
                }
                var e = 4;
                this.if = {},
                t(),
                this.ef = {},
                t(),
                this.Gk = [],
                t(),
                this.Hk = null,
                t()
            }
            ,
            c
        }(),
        a.Ik = function() {
            function t() {
                this.Jk = null,
                this.Lf = new a.Kk,
                this.Kf = new a.Lk,
                this.Mk = new a.Nk,
                this.Ok = new a.Pk,
                this.Qk = new a.Rk,
                this.Sk = new a.Tk,
                this.Uk = new a.Vk,
                this.Wk = new a.Xk,
                this.Qi = new a.Yk,
                this.Zk = new a.$k,
                this._k = new a.al,
                this.bl = new a.cl,
                this.dl = new a.el,
                this.fl = new a.gl,
                this.Se = new a.hl,
                this.il = new a.jl,
                this.kl = new a.ll,
                this.ml = new a.nl,
                this.ol = []
            }
            function f(a, t) {
                if (0 !== t) {
                    var f = a[t];
                    e.fa(a, 0, 1, t),
                    a[0] = f
                }
            }
            function c(a, t) {
                if (t !== a.length + 1) {
                    var f = a[t];
                    e.fa(a, t + 1, t, a.length - t - 1),
                    a[a.length - 1] = f
                }
            }
            function i(a, t) {
                for (var e = 0; e < a.length; e++)
                    if (a[e] === t)
                        return e;
                return -1
            }
            return t.prototype.Sa = function() {
                this.Jk = new a.Of(a.Vf.Uf),
                this.ol = [this.Lf, this.Kf, this.Mk, this.Ok, this.Qk, this.Sk, this.Uk, this.Wk, this.Qi, this.Zk, this._k, this.bl, this.dl, this.fl, this.Se, this.il, this.kl, this.ml];
                for (var t = 0; t < this.ol.length; t++)
                    this.ol[t].Sa()
            }
            ,
            t.prototype.bi = function(a, t) {
                for (var e = this.ol.length - 1; e >= 0; e--)
                    this.ol[e].qg(a, t);
                this.ol[0] !== this.Lf && this.ol[0] !== this.ml && null != this.Jk && this.Jk.qg(a, t)
            }
            ,
            t.prototype.kg = function() {
                for (var a = this.ol.length - 1; a >= 0; a--)
                    this.ol[a].kg();
                null != this.Jk && this.Jk.kg()
            }
            ,
            t.prototype.pl = function(a) {
                var t = i(this.ol, a);
                if (!(t < 0)) {
                    this.ol[0].ql(),
                    f(this.ol, t),
                    this.rl()
                }
            }
            ,
            t.prototype.sl = function() {
                this.ol[0].ql();
                do {
                    c(this.ol, 0)
                } while (this.ol[0].Xd !== a.ul.tl);
                this.rl()
            }
            ,
            t.prototype.rl = function() {
                var a = this.ol[0];
                a.vl(),
                a.wl(),
                this.xl()
            }
            ,
            t.prototype.yl = function() {
                return 0 !== this.ol.length && (this.ol[0].Xd === a.ul.tl && this.fl.zl())
            }
            ,
            t.prototype.Al = function() {
                return 0 === this.ol.length ? null : this.ol[0]
            }
            ,
            t.prototype.xl = function() {
                this.yl() && this.pl(this.fl)
            }
            ,
            t
        }(),
        a.Ej = function() {
            function a() {
                this.ri = [],
                this.oi = []
            }
            return a.Fj = function(a, t) {
                return {
                    si: a,
                    qi: t
                }
            }
            ,
            a.Gj = function(a, t) {
                return {
                    pi: a,
                    qi: t
                }
            }
            ,
            a
        }(),
        a.Bl = function() {
            function f() {
                this.Cl = [],
                this.Dl = [],
                this.El = !1,
                this.Fl = c,
                this.Gl = {}
            }
            var c = "guest"
              , i = "guest"
              , n = "fb"
              , h = "gg";
            return f.Hl = new (function() {
                function a() {}
                return a.Il = function() {
                    function a(a) {
                        this.Jl = a
                    }
                    return a
                }(),
                a.prototype.Kl = function() {
                    return "undefined" != ("undefined" == typeof FB ? "undefined" : _typeof(FB))
                }
                ,
                a.prototype.Ll = function(a, t, f) {
                    var c = "https://graph.facebook.com/me" + "?access_token=" + a;
                    $.get(c).fail(function() {
                        t()
                    }).done(function() {
                        f()
                    })
                }
                ,
                a.prototype.Ml = function(t, f) {
                    if (!this.Kl())
                        return void t();
                    this.Nl(function() {
                        e.b("FB")["login"](function(c) {
                            if (c["status"] !== "connected")
                                return void t();
                            var i = c["authResponse"]["accessToken"];
                            f(new a.Il(i))
                        })
                    }, function(a) {
                        f(a)
                    })
                }
                ,
                a.prototype.Nl = function(t, f) {
                    var c = this;
                    if (!this.Kl())
                        return void t();
                    e.b("FB")["getLoginStatus"](function(i) {
                        if (i.status !== "connected")
                            return void t();
                        var n = i["authResponse"]["accessToken"];
                        c.Ll(n, function() {
                            t()
                        }, function() {
                            f(new a.Il(n))
                        })
                    })
                }
                ,
                a.prototype.Ol = function() {
                    // FB logout disabled
                }
                ,
                a
            }()),
            f.Pl = new (function() {
                function a() {}
                return a.Ql = function() {
                    function a(a, t) {
                        this.Jl = a,
                        this.Rl = t
                    }
                    return a
                }(),
                a.prototype.Kl = function() {
                    return "undefined" != typeof GoogleAuth
                }
                ,
                a.prototype.Ml = function(t, f) {
                    if ("undefined" == typeof GoogleAuth)
                        return void t();
                    var c = GoogleAuth.lastToken;
                    if (c && (new Date).getTime() < c.Rl)
                        return void f(c);
                    GoogleAuth.pendingFail = t,
                    GoogleAuth.pendingSuccess = function(c) {
                        var i = c["credential"]
                          , n = (new Date).getTime() + 36e5
                          , h = new a.Ql(i,n);
                        GoogleAuth.lastToken = h,
                        f(h)
                    }
                }
                ,
                a.prototype.Nl = function(t, f) {
                    if ("undefined" == typeof GoogleAuth)
                        return void t();
                    var a = GoogleAuth.lastToken;
                    a && (new Date).getTime() < a.Rl ? f(a) : t()
                }
                ,
                a.prototype.Ol = function() {
                    "undefined" != typeof GoogleAuth && (e.b("google")["accounts"]["id"]["disableAutoSelect"](),
                    GoogleAuth.lastToken = null)
                }
                ,
                a
            }()),
            f.prototype.Sa = function() {
                this.Sl()
            }
            ,
            f.prototype.Tl = function() {
                return this.El ? this.Gl["userId"] : ""
            }
            ,
            f.prototype.Ul = function() {
                return this.El ? this.Gl["username"] : ""
            }
            ,
            f.prototype.Vl = function() {
                return this.El ? this.Gl["nickname"] : ""
            }
            ,
            f.prototype.Wl = function() {
                return this.El ? this.Gl["avatarUrl"] : t.m.r
            }
            ,
            f.prototype.Xl = function() {
                return this.El && this.Gl["isBuyer"]
            }
            ,
            f.prototype.Yl = function() {
                return this.El && this.Gl["isConsentGiven"]
            }
            ,
            f.prototype.Zl = function() {
                return this.El ? this.Gl["coins"] : 0
            }
            ,
            f.prototype.$l = function() {
                return this.El ? this.Gl["level"] : 1
            }
            ,
            f.prototype._l = function() {
                return this.El ? this.Gl["expOnLevel"] : 0
            }
            ,
            f.prototype.am = function() {
                return this.El ? this.Gl["expToNext"] : 50
            }
            ,
            f.prototype.bm = function() {
                return this.El ? this.Gl["skinId"] : 0
            }
            ,
            f.prototype.cm = function() {
                return this.El ? this.Gl["eyesId"] : 0
            }
            ,
            f.prototype.dm = function() {
                return this.El ? this.Gl["mouthId"] : 0
            }
            ,
            f.prototype.em = function() {
                return this.El ? this.Gl["hatId"] : 0
            }
            ,
            f.prototype.fm = function() {
                return this.El ? this.Gl["glassesId"] : 0
            }
            ,
            f.prototype.gm = function() {
                return this.El ? this.Gl["highScore"] : 0
            }
            ,
            f.prototype.hm = function() {
                return this.El ? this.Gl["bestSurvivalTimeSec"] : 0
            }
            ,
            f.prototype.im = function() {
                return this.El ? this.Gl["kills"] : 0
            }
            ,
            f.prototype.jm = function() {
                return this.El ? this.Gl["headShots"] : 0
            }
            ,
            f.prototype.km = function() {
                return this.El ? this.Gl["sessionsPlayed"] : 0
            }
            ,
            f.prototype.lm = function() {
                return this.El ? this.Gl["totalPlayTimeSec"] : 0
            }
            ,
            f.prototype.mm = function() {
                return this.El ? this.Gl["regDate"] : {}
            }
            ,
            f.prototype.nm = function(a) {
                this.Cl.push(a),
                a()
            }
            ,
            f.prototype.om = function(a) {
                this.Dl.push(a),
                a()
            }
            ,
            f.prototype.Ak = function(a, t) {
                var f = this.Gl["propertyList"];
                if (null == f)
                    return !1;
                for (var c = a.toString(), i = 0; i < f.length; i++) {
                    var n = f[i];
                    if (n["id"] === c && n["type"] === t)
                        return !0
                }
                return !1
            }
            ,
            f.prototype.wk = function() {
                return this.El
            }
            ,
            f.prototype.pm = function() {
                return this.Fl
            }
            ,
            f.prototype.qm = function(f) {
                var c = this
                  , i = this.Tl()
                  , n = this.Zl()
                  , h = this.$l();
                this.rm(function() {
                    null != f && f()
                }, function(o) {
                    c.Gl = o["user_data"],
                    c.sm();
                    var d = c.Tl()
                      , b = c.Zl()
                      , r = c.$l();
                    if (i === d) {
                        r > 1 && r !== h && t.w.eh.fl.tm(new a.um(r));
                        var s = b - n;
                        s >= 20 && t.w.eh.fl.tm(new a.vm(s))
                    }
                    null != f && f()
                })
            }
            ,
            f.prototype.rm = function(a, f) {
                var c = t.m.o + "/pub/wuid/" + this.Fl + "/getUserData";
                e.na(c, a, function(t) {
                    1200 !== t["code"] ? a() : f(t)
                })
            }
            ,
            f.prototype.wm = function(a, f, c, i) {
                var n = t.m.o + "/pub/wuid/" + this.Fl + "/buyProperty" + "?id=" + a + "&type=" + f;
                e.na(n, function() {
                    c()
                }, function(a) {
                    1200 !== a["code"] ? c() : i()
                })
            }
            ,
            f.prototype.xm = function(a, f) {
                var c = t.m.o + "/pub/wuid/" + this.Fl + "/deleteAccount";
                e.na(c, a, function(t) {
                    1200 !== t["code"] ? a() : f()
                })
            }
            ,
            f.prototype.ym = function(a) {
                var t = this;
                this.El && this.zm(),
                f.Hl.Ml(function() {
                    a()
                }, function(e) {
                    t.Am(n, e.Jl, a)
                })
            }
            ,
            f.prototype.Bm = function(a) {
                var t = this;
                this.El && this.zm(),
                f.Pl.Ml(function() {
                    a()
                }, function(e) {
                    t.Am(h, e.Jl, a)
                })
            }
            ,
            f.prototype.Am = function(a, f, c) {
                var i = this
                  , n = a + "_" + f
                  , h = t.m.o + "/pub/wuid/" + n + "/login";
                e.na(h, function() {
                    i.Cm()
                }, function(t) {
                    1200 !== t["code"] ? i.Cm() : (i.Dm(a, f, t["user_data"]),
                    null != c && c())
                })
            }
            ,
            f.prototype.zm = function() {
                try {
                    this.Em(),
                    this.Fm()
                } catch (a) {}
                this.Gm()
            }
            ,
            f.prototype.Hm = function() {
                this.El && this.xm(function() {}, function() {})
            }
            ,
            f.prototype.Cm = function() {
                t.w.eh.pl(t.w.eh.il)
            }
            ,
            f.prototype.Dm = function(t, f, c) {
                var n = this.El ? this.Gl["userId"] : i;
                this.El = !0,
                this.Fl = t + "_" + f,
                this.Gl = c,
                a.Lg.Wg(a.Lg.Qg, t),
                n !== this.Gl["userId"] ? this.Im() : this.sm()
            }
            ,
            f.prototype.Gm = function() {
                var t = this.El ? this.Gl["userId"] : i;
                this.El = !1,
                this.Fl = c,
                this.Gl = {},
                a.Lg.Wg(a.Lg.Qg, ""),
                t !== this.Gl["userId"] ? this.Im() : this.sm()
            }
            ,
            f.prototype.Sl = function() {
                var t = a.Lg.Xg(a.Lg.Qg)
                  , c = this;
                if (n === t) {
                    var i = 1;
                    !function a() {
                        if (!f.Hl.Kl() && i++ < 5)
                            return void e.G(a, 1e3);
                        f.Hl.Nl(function() {}, function(a) {
                            c.Am(n, a.Jl)
                        })
                    }()
                } else if (h === t) {
                    var o = 1;
                    !function a() {
                        if (!f.Pl.Kl() && o++ < 5)
                            return void e.G(a, 1e3);
                        f.Pl.Nl(function() {}, function(a) {
                            c.Am(h, a.Jl)
                        })
                    }()
                }
            }
            ,
            f.prototype.Im = function() {
                for (var a = 0; a < this.Cl.length; a++)
                    this.Cl[a]();
                this.sm()
            }
            ,
            f.prototype.sm = function() {
                for (var a = 0; a < this.Dl.length; a++)
                    this.Dl[a]()
            }
            ,
            f.prototype.Em = function() {
                f.Hl.Ol()
            }
            ,
            f.prototype.Fm = function() {
                f.Pl.Ol()
            }
            ,
            f
        }(),
        a.Tf = function() {
            function t(t, c, i) {
                this.Pf = i,
                this.Sd = !1,
                this.Yc = new (f.k["Container"]),
                this.Yc.visible = !1,
                this.Jm = new Array(t);
                for (var n = 0; n < this.Jm.length; n++) {
                    var h = new a.Km(new f.j(3 * c));
                    h.Lm(c),
                    this.Jm[n] = h,
                    this.Yc["addChild"](h.bg())
                }
                this.Qf = 1,
                this.Rf = 1,
                this.kg()
            }
            return t.prototype.bg = function() {
                return this.Yc
            }
            ,
            t.prototype.lg = function(a) {
                this.Sd = a,
                this.Yc.visible = a
            }
            ,
            t.prototype.kg = function() {
                this.Qf = this.Pf["width"](),
                this.Rf = this.Pf["height"]();
                for (var a = this.Rf / 30, t = 0; t < this.Jm.length; t++)
                    this.Jm[t].Mm(a)
            }
            ,
            t.prototype.rg = function() {
                if (this.Sd)
                    for (var a = 0; a < this.Jm.length; a++)
                        this.Jm[a].rg(this.Wf)
            }
            ,
            t.prototype.Nm = function() {
                return this.Qf
            }
            ,
            t.prototype.Om = function() {
                return this.Rf
            }
            ,
            t.prototype.zg = function(a, t) {
                this.Jm[a].Pm(t)
            }
            ,
            t.prototype.Ag = function(a, t) {
                this.Jm[a].Qm(t)
            }
            ,
            t.prototype.Bg = function(a, t, e) {
                for (var f = this.Jm[a], c = f.Rm(), i = f.Sm, n = 0; n < c; n++)
                    i[3 * n] = t,
                    i[3 * n + 1] = e,
                    i[3 * n + 2] = 0
            }
            ,
            t.prototype.Cg = function(a, t, f) {
                var c, i, n = this.Jm[a], h = n.Rm(), o = n.Sm, d = n.Tm(), b = o[0], r = o[1], s = t - b, u = f - r, p = e.Z(s, u);
                if (p > 0) {
                    o[0] = t,
                    o[1] = f,
                    o[2] = e.Y(u, s);
                    for (var l = .25 * d / (.25 * d + p), k = 1 - 2 * l, w = 1, g = h; w < g; w++)
                        c = o[3 * w],
                        o[3 * w] = o[3 * w - 3] * k + (c + b) * l,
                        b = c,
                        i = o[3 * w + 1],
                        o[3 * w + 1] = o[3 * w - 2] * k + (i + r) * l,
                        r = i,
                        o[3 * w + 2] = e.Y(o[3 * w - 2] - o[3 * w + 1], o[3 * w - 3] - o[3 * w])
                }
            }
            ,
            t
        }(),
        a.Um = function() {
            function c(c) {
                var h = this;
                this.Pf = c,
                this.mc = c.get()[0],
                this.Wf = function() {
                    var a = {};
                    return a["view"] = h.mc,
                    a["transparent"] = !0,
                    new (f.k["Renderer"])(a)
                }(),
                this.Sd = !1,
                this.Vm = new a.Km(new f.j(3 * i)),
                this.Qf = 1,
                this.Rf = 1,
                this.Wm = n.Xm,
                this.Ym = n.Xm,
                this.Zm = n.Xm,
                this.$m = n.Xm,
                this._m = n.Xm,
                this.kg(),
                t.w.ud.Jc(function() {
                    h.Vm.an()
                })
            }
            var i = e.R(100, a.Xc.fd)
              , n = {
                Xm: "0lt0",
                bn: "0lt1",
                cn: "0lt2"
            };
            return c.prototype.lg = function(a) {
                this.Sd = a
            }
            ,
            c.prototype.kg = function() {
                var a = e.e();
                this.Qf = this.Pf["width"](),
                this.Rf = this.Pf["height"](),
                this.Wf.resize(this.Qf, this.Rf),
                this.Wf.resolution = a,
                this.mc.width = a * this.Qf,
                this.mc.height = a * this.Rf;
                var t = this.Rf / 4;
                this.Vm.Mm(t);
                var f = e.P(2 * e.J(this.Qf / t) - 5, 1, i);
                this.Vm.Lm(f)
            }
            ,
            c.prototype.qg = function() {
                if (this.Sd) {
                    var a = e.pa()
                      , f = a / 200
                      , c = e.aa(f);
                    this.Vm.dn(this.en(this.Wm, c), this.gn(this.Wm, c)),
                    this.Vm.hn(this.in(this.Ym, c), this.in(this.Zm, c), this.in(this.$m, c), this.in(this._m, c));
                    for (var i = this.Vm.Tm(), n = this.Vm.Rm(), h = this.Vm.Sm, o = this.Qf - .5 * (this.Qf - .5 * i * (n - 1)), d = .5 * this.Rf, b = 0, r = 0, s = -1; s < n; s++) {
                        var u = s
                          , p = e.ba(u / 12 * t.A - f) * (1 - e.da(16, -u / 12));
                        s >= 0 && (h[3 * s] = o - .5 * i * u,
                        h[3 * s + 1] = d + .5 * i * p,
                        h[3 * s + 2] = e.Y(r - p, u - b)),
                        b = u,
                        r = p
                    }
                    this.Vm.rg(),
                    this.Vm.jn(this.Wf)
                }
            }
            ,
            c.prototype.Pm = function(a) {
                this.Vm.Pm(a)
            }
            ,
            c.prototype.kn = function(a) {
                this.Wm = a ? n.cn : n.bn,
                this.Ym = n.Xm,
                this.Zm = n.Xm,
                this.$m = n.Xm,
                this._m = n.Xm
            }
            ,
            c.prototype.ln = function(a) {
                this.Wm = n.Xm,
                this.Ym = a ? n.cn : n.bn,
                this.Zm = n.Xm,
                this.$m = n.Xm,
                this._m = n.Xm
            }
            ,
            c.prototype.mn = function(a) {
                this.Wm = n.Xm,
                this.Ym = n.Xm,
                this.Zm = a ? n.cn : n.bn,
                this.$m = n.Xm,
                this._m = n.Xm
            }
            ,
            c.prototype.nn = function(a) {
                this.Wm = n.Xm,
                this.Ym = n.Xm,
                this.Zm = n.Xm,
                this.$m = a ? n.cn : n.bn,
                this._m = n.Xm
            }
            ,
            c.prototype.pn = function(a) {
                this.Wm = n.Xm,
                this.Ym = n.Xm,
                this.Zm = n.Xm,
                this.$m = n.Xm,
                this._m = a ? n.cn : n.bn
            }
            ,
            c.prototype.en = function(a, t) {
                switch (a) {
                case n.bn:
                    return .9 + .1 * t;
                case n.cn:
                    return .4 + .3 * t
                }
                return 1
            }
            ,
            c.prototype.gn = function(a, t) {
                switch (a) {
                case n.bn:
                    return .6 + .5 * t;
                case n.cn:
                    return .3 + .3 * t
                }
                return 1
            }
            ,
            c.prototype.in = function(a, t) {
                switch (a) {
                case n.bn:
                    return .9 + .1 * t;
                case n.cn:
                    return .6 + .4 * t
                }
                return 1
            }
            ,
            c
        }(),
        a.Dk = function() {
            function a(a, t, e, f, c) {
                this.qn = a,
                this.rn = t,
                this.sn = e,
                this.tn = f,
                this.un = c
            }
            return a.Ck = function(t) {
                return new a(t["price"],t["guest"],t["nonbuyable"],t["nonbuyableCause"],t["description"])
            }
            ,
            a.Ek = function(t) {
                return new a(t["price"],t["guest"],t["nonbuyable"],t["nonbuyableCause"],t["description"])
            }
            ,
            a.prototype.yk = function() {
                return this.qn
            }
            ,
            a.prototype.Bk = function() {
                return this.rn
            }
            ,
            a.prototype.zk = function() {
                return this.sn
            }
            ,
            a.prototype.vn = function() {
                return this.tn
            }
            ,
            a.prototype.wn = function() {
                return this.un
            }
            ,
            a
        }(),
        a.$f = function() {
            function a(a) {
                this.xn = {},
                this.xn[h] = a;
                var t = f.k["Shader"]["from"](r, s, this.xn);
                this.ag = new (f.k["Mesh"])(b,t),
                this.ag["blendMode"] = f.k["BLEND_MODES"]["MULTIPLY"]
            }
            var t = "a1_" + e.ja()
              , c = "a2_" + e.ja()
              , i = "translationMatrix"
              , n = "projectionMatrix"
              , h = "u3_" + e.ja()
              , o = "u4_" + e.ja()
              , d = "v1_" + e.ja()
              , b = (new (f.k["Geometry"]))["addAttribute"](t, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2)["addAttribute"](c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2)
              , r = "precision mediump float;attribute vec2 ".concat(t, ";attribute vec2 ").concat(c, ";uniform mat3 ").concat(i, ";uniform mat3 ").concat(n, ";uniform vec4 ").concat(o, ";varying vec2 ").concat(d, ";const float ROT_ANGLE=0.261799387799149;const float ROT_COS=cos(ROT_ANGLE);const float ROT_SIN=sin(ROT_ANGLE);void main(){gl_Position=vec4((").concat(n, "*").concat(i, "*vec3(").concat(t, ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=").concat(o, ";vec2 uv=(").concat(c, "-0.5)*(_ScreenParams.xy*(_ScreenParams.wz-1.0)+1.0)*0.625;uv=vec2(1.0*(uv.y*ROT_SIN+uv.x*ROT_COS),2.0*(uv.y*ROT_COS-uv.x*ROT_SIN));").concat(d, "=uv;}")
              , s = "precision highp float;varying vec2 ".concat(d, ";uniform sampler2D ").concat(h, ";void main(){gl_FragColor=texture2D(").concat(h, ", ").concat(d, ");}");
            return a.prototype.pg = function(a, t) {
                this.ag["scale"]["x"] = a,
                this.ag["scale"]["y"] = t,
                this.xn[o] = [a, t, 1 / a + 1, 1 / t + 1]
            }
            ,
            a
        }(),
        a.ig = function() {
            function a(a) {
                var n = this;
                this.oc = a,
                this.yn = [1, 1],
                this.xn = {},
                this.xn[o] = a,
                this.xn[d] = [1, .5, .25, .5];
                var h = f.k["Shader"]["from"](r, s, this.xn);
                this.zn = (new (f.k["Geometry"]))["addAttribute"](c, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)["addAttribute"](i, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2),
                this.ag = new (f.k["Mesh"])(this.zn,h),
                a["baseTexture"]["valid"] ? t(this) : a["baseTexture"]["once"]("loaded", function() {
                    return t(n)
                }),
                this.ag["blendMode"] = f.k["BLEND_MODES"]["NORMAL_NPM"]
            }
            function t(a) {
                var t, f, n = a.zn, h = a.oc, o = a.yn, d = h["baseTexture"], b = d["width"], r = d["height"], s = h["frame"], u = s["x"], p = s["y"], l = s["width"], k = s["height"], w = h["defaultAnchor"], g = w["x"], v = w["y"];
                l <= k ? (f = e.R(o[0], o[1]),
                t = f * l / k) : (t = e.R(o[0], o[1]),
                f = t * k / l);
                var y = -g * t
                  , j = (1 - g) * t
                  , m = -v * f
                  , q = (1 - v) * f
                  , S = n["getBuffer"](c);
                S["data"]["set"]([y, m, j, m, j, q, y, m, j, q, y, q]),
                S["update"]();
                var $ = u / b
                  , V = (u + l) / b
                  , x = p / r
                  , _ = (p + k) / r
                  , D = n["getBuffer"](i);
                D["data"]["set"]([$, x, V, x, V, _, $, x, V, _, $, _]),
                D["update"]()
            }
            var c = "a1_" + e.ja()
              , i = "a2_" + e.ja()
              , n = "translationMatrix"
              , h = "projectionMatrix"
              , o = "u3_" + e.ja()
              , d = "u4_" + e.ja()
              , b = "v1_" + e.ja()
              , r = "precision mediump float;attribute vec2 ".concat(c, ";attribute vec2 ").concat(i, ";uniform mat3 ").concat(n, ";uniform mat3 ").concat(h, ";varying vec2 ").concat(b, ";void main(){gl_Position=vec4((").concat(h, "*").concat(n, "*vec3(").concat(c, ",1.0)).xy,0.0,1.0);").concat(b, "=").concat(i, ";}")
              , s = "precision highp float;varying vec2 ".concat(b, ";uniform sampler2D ").concat(o, ";uniform vec4 ").concat(d, ";void main(){vec4 sample=texture2D(").concat(o, ",").concat(b, ");vec3 step=step(0.5,sample.rgb);gl_FragColor=vec4(mix(step,").concat(d, ".rgb,2.0*(sample.rgb+(1.0-2.0*sample.rgb)*step)),sample.a*").concat(d, ".a);}");
            return a.prototype.nd = function(a, t, e, f) {
                var c = this.xn[d];
                c[0] = a,
                c[1] = t,
                c[2] = e,
                c[3] = f
            }
            ,
            a.prototype.Cd = function(a) {
                this.ag["scale"]["x"] = a,
                this.ag["scale"]["y"] = a
            }
            ,
            a.prototype.Vd = function(a, t) {
                this.ag["position"]["x"] = a,
                this.ag["position"]["y"] = t
            }
            ,
            a.prototype.Wd = function(a) {
                this.ag["rotation"] = a
            }
            ,
            a.prototype.pg = function(a, e) {
                this.yn = [a, e],
                t(this)
            }
            ,
            a.prototype.ng = function() {
                return this.oc["frame"]["width"]
            }
            ,
            a.prototype.og = function() {
                return this.oc["frame"]["height"]
            }
            ,
            a
        }(),
        a.Ch = function() {
            function a() {
                this.xn = {},
                this.xn[h] = [1, .5, .25, .5],
                this.xn[o] = f.k["Texture"]["WHITE"],
                this.xn[d] = [0, 0],
                this.xn[b] = [0, 0];
                var a = f.k["Shader"]["from"](u, p, this.xn);
                this.ag = new (f.k["Mesh"])(s,a)
            }
            var t = "a1_" + e.ja()
              , c = "a2_" + e.ja()
              , i = "translationMatrix"
              , n = "projectionMatrix"
              , h = "u3_" + e.ja()
              , o = "u4_" + e.ja()
              , d = "u5_" + e.ja()
              , b = "u6_" + e.ja()
              , r = "v1_" + e.ja()
              , s = (new (f.k["Geometry"]))["addAttribute"](t, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)["addAttribute"](c, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)
              , u = "precision mediump float;attribute vec2 ".concat(t, ";attribute vec2 ").concat(c, ";uniform mat3 ").concat(i, ";uniform mat3 ").concat(n, ";varying vec2 ").concat(r, ";void main(){").concat(r, "=").concat(c, ";gl_Position=vec4((").concat(n, "*").concat(i, "*vec3(").concat(t, ",1.0)).xy,0.0,1.0);}")
              , p = "precision highp float;varying vec2 ".concat(r, ";uniform vec4 ").concat(h, ";uniform sampler2D ").concat(o, ";uniform vec2 ").concat(d, ";uniform vec2 ").concat(b, ";void main(){gl_FragColor=texture2D(").concat(o, ",").concat(r, "*").concat(d, "+").concat(b, ")*0.3+").concat(h, ".a*vec4(").concat(h, ".rgb,0.0);}");
            return a.prototype.nd = function(a, t, e, f) {
                var c = this.xn[h];
                c[0] = a,
                c[1] = t,
                c[2] = e,
                c[3] = f
            }
            ,
            a.prototype.Qh = function(a) {
                this.xn[o] = a
            }
            ,
            a.prototype.rg = function(a, t, f, c) {
                this.ag["position"]["x"] = a,
                this.ag["position"]["y"] = t,
                this.ag["scale"]["x"] = f,
                this.ag["scale"]["y"] = c;
                var i = this.xn[d];
                i[0] = .2520615384615385 * f,
                i[1] = .4357063736263738 * c;
                var n = this.xn[b];
                n[0] = .2520615384615385 * a,
                n[1] = .4357063736263738 * t
            }
            ,
            a
        }(),
        a.bd = function() {
            function a() {
                this.gd = new (f.k["Sprite"]),
                this.An = 0,
                this.Bn = 0
            }
            return a.prototype.kd = function(a) {
                this.gd["texture"] = a.mb(),
                this.gd["anchor"]["set"](a.gb, a.hb),
                this.An = a.ib,
                this.Bn = a.jb
            }
            ,
            a.prototype.nd = function(a) {
                this.gd["tint"] = parseInt(a.substring(1), 16)
            }
            ,
            a.prototype.Cd = function(a) {
                this.gd["width"] = a * this.An,
                this.gd["height"] = a * this.Bn
            }
            ,
            a.prototype.Wd = function(a) {
                this.gd["rotation"] = a
            }
            ,
            a.prototype.Vd = function(a, t) {
                this.gd["position"]["set"](a, t)
            }
            ,
            a.prototype.Ud = function(a) {
                this.gd["visible"] = a
            }
            ,
            a.prototype.Rd = function() {
                return this.gd["visible"]
            }
            ,
            a.prototype.$j = function(a) {
                this.gd["alpha"] = a
            }
            ,
            a.prototype.zd = function() {
                return this.gd
            }
            ,
            a.prototype.Ad = function() {
                e.l(this.gd)
            }
            ,
            a
        }(),
        a.bj = function() {
            function c(t) {
                this.Zh = t,
                this.ti = new a.bj.aj,
                this.lj = !1,
                this.kj = !0,
                this.Gd = !1,
                this.Jd = 0,
                this.Cn = 0,
                this.Uj = 1,
                this.Md = 0,
                this.qi = 0,
                this.Od = {},
                this.Ld = 0,
                this.Dn = new f.j(2 * i),
                this.En = new f.j(2 * i),
                this.Kd = new f.j(2 * i),
                this.Fn = null,
                this.Gn = null,
                this.Hn = null,
                this.In()
            }
            var i = 200;
            return c.prototype.hj = function() {
                null != this.Gn && e.l(this.Gn.Yc),
                null != this.Hn && e.l(this.Hn)
            }
            ,
            c.prototype.In = function() {
                this.oj(.25),
                this.ti.Xa = "",
                this.kj = !0,
                this.Od = {},
                this.Ud(!1)
            }
            ,
            c.prototype.gj = function(a) {
                this.ti = a,
                this.Jn(this.lj)
            }
            ,
            c.prototype.Ud = function(a) {
                var t = this.lj;
                this.lj = a,
                this.Jn(t)
            }
            ,
            c.prototype.oj = function(a) {
                this.qi = 50 * a;
                var t = a;
                a > this.Zh.qh && (t = e.ea((a - this.Zh.qh) / this.Zh.rh) * this.Zh.rh + this.Zh.qh);
                var f = e.ca(4 * e.da(5 * t, .707106781186548) + 25)
                  , c = e.R(i, e.S(3, 5 * (f - 5) + 1))
                  , n = this.Ld;
                if (this.Jd = .025 * (5 + .9 * f),
                this.Ld = e.J(c),
                this.Cn = c - this.Ld,
                n > 0 && n < this.Ld)
                    for (var h = this.Dn[2 * n - 2], o = this.Dn[2 * n - 1], d = this.En[2 * n - 2], b = this.En[2 * n - 1], r = this.Kd[2 * n - 2], s = this.Kd[2 * n - 1], u = n; u < this.Ld; u++)
                        this.Dn[2 * u] = h,
                        this.Dn[2 * u + 1] = o,
                        this.En[2 * u] = d,
                        this.En[2 * u + 1] = b,
                        this.Kd[2 * u] = r,
                        this.Kd[2 * u + 1] = s
            }
            ,
            c.prototype.tj = function(a, t) {
                this.Ld = t;
                for (var e = 0; e < this.Ld; e++)
                    this.Dn[2 * e] = this.En[2 * e] = this.Kd[2 * e] = a(),
                    this.Dn[2 * e + 1] = this.En[2 * e + 1] = this.Kd[2 * e + 1] = a()
            }
            ,
            c.prototype.qj = function(a, t, e) {
                this.Gd = e;
                for (var f = 0; f < this.Ld; f++)
                    this.Dn[2 * f] = this.En[2 * f],
                    this.Dn[2 * f + 1] = this.En[2 * f + 1];
                var c = a - this.En[0]
                  , i = t - this.En[1];
                this.Kn(c, i, this.Ld, this.En)
            }
            ,
            c.prototype.Kn = function(a, t, f, c) {
                var i = e.Z(a, t);
                if (!(i <= 0)) {
                    var n, h = c[0];
                    c[0] += a;
                    var o, d = c[1];
                    c[1] += t;
                    for (var b = this.Jd / (this.Jd + i), r = 1 - 2 * b, s = 1, u = f - 1; s < u; s++)
                        n = c[2 * s],
                        c[2 * s] = c[2 * s - 2] * r + (n + h) * b,
                        h = n,
                        o = c[2 * s + 1],
                        c[2 * s + 1] = c[2 * s - 1] * r + (o + d) * b,
                        d = o;
                    b = this.Cn * this.Jd / (this.Cn * this.Jd + i),
                    r = 1 - 2 * b,
                    c[2 * f - 2] = c[2 * f - 4] * r + (c[2 * f - 2] + h) * b,
                    c[2 * f - 1] = c[2 * f - 3] * r + (c[2 * f - 1] + d) * b
                }
            }
            ,
            c.prototype.Xh = function() {
                return {
                    $a: this.Kd[0],
                    _a: this.Kd[1]
                }
            }
            ,
            c.prototype.mj = function(a, t) {
                for (var f = 1e6, c = a, i = t, n = 0; n < this.Ld; n++) {
                    var h = this.Kd[2 * n]
                      , o = this.Kd[2 * n + 1]
                      , d = e.Z(a - h, t - o);
                    d < f && (f = d,
                    c = h,
                    i = o)
                }
                return {
                    $a: c,
                    _a: i,
                    nj: f
                }
            }
            ,
            c.prototype.ij = function(a) {
                this.Fn = a
            }
            ,
            c.prototype.Yj = function(a, f) {
                this.Uj = e.Q(this.Uj, this.kj ? this.Gd ? .9 + .1 * e.ba(a / 400 * t.A) : 1 : 0, f, 1 / 800),
                this.Md = e.Q(this.Md, this.kj ? this.Gd ? 1 : 0 : 1, f, .0025),
                null != this.Gn && (this.Gn.Yc["alpha"] = this.Uj),
                null != this.Hn && (this.Hn["alpha"] = this.Uj)
            }
            ,
            c.prototype.Zj = function(a, t, f, c) {
                if (this.lj && this.kj)
                    for (var i = e.da(.11112, t / 95), n = 0; n < this.Ld; n++) {
                        var h = e.U(this.Dn[2 * n], this.En[2 * n], f)
                          , o = e.U(this.Dn[2 * n + 1], this.En[2 * n + 1], f);
                        this.Kd[2 * n] = e.U(h, this.Kd[2 * n], i),
                        this.Kd[2 * n + 1] = e.U(o, this.Kd[2 * n + 1], i)
                    }
                null != this.Gn && this.lj && this.Gn.Id(this, a, t, c),
                null != this.Hn && (this.Hn.$h.x = this.Kd[0],
                this.Hn.$h.y = this.Kd[1] - 3 * this.Jd)
            }
            ,
            c.prototype.Jn = function(a) {
                this.lj ? a || this.Ln() : (null != this.Gn && e.l(this.Gn.Yc),
                null != this.Hn && e.l(this.Hn))
            }
            ,
            c.prototype.Ln = function() {
                null == this.Gn ? this.Gn = new a.Xc : e.l(this.Gn.Yc),
                this.Gn.hd(t.w.Vh.Zh.nh, t.w.ud.Cc().Tb(this.ti.wi), t.w.ud.Cc().Sb(this.ti.xi), t.w.ud.Cc().Ub(this.ti.cj), t.w.ud.Cc().Vb(this.ti.dj), t.w.ud.Cc().Wb(this.ti.fj), t.w.ud.Cc().Xb(this.ti.ej), "#ffffff"),
                null == this.Hn ? (this.Hn = new a.Mn(""),
                this.Hn["style"]["fontFamily"] = "PTSans",
                this.Hn["anchor"]["set"](.5)) : e.l(this.Hn),
                this.Hn["style"]["fontSize"] = 14,
                this.Hn["style"]["fill"] = t.w.ud.Cc().Sb(this.ti.xi).bc,
                this.Hn["text"] = this.ti.Xa,
                this.Fn.ei(this.ti.Ke, this.Gn, this.Hn)
            }
            ,
            c.aj = function() {
                function t() {
                    this.Ke = 0,
                    this.wi = a.mh.sh,
                    this.xi = 0,
                    this.cj = 0,
                    this.dj = 0,
                    this.fj = 0,
                    this.ej = 0,
                    this.Xa = ""
                }
                return t
            }(),
            c
        }(),
        a.Mn = function() {
            return e.M(f.k["Text"], function(a, t, c) {
                f.k["Text"].call(this, a, t, c),
                this.$h = {
                    x: 0,
                    y: 0
                }
            })
        }(),
        a.Rb = function() {
            function a(a, t, e, f, c) {
                this.ak = a,
                this.bk = t,
                this.ck = e,
                this.dk = f,
                this.ek = c
            }
            return a.prototype.Nn = function(t) {
                return new a(t,this.bk,this.ck,this.dk,this.ek)
            }
            ,
            a.prototype.On = function(t) {
                return new a(this.ak,t,this.ck,this.dk,this.ek)
            }
            ,
            a.prototype.Pn = function(t) {
                return new a(this.ak,this.bk,t,this.dk,this.ek)
            }
            ,
            a.prototype.Qn = function(t) {
                return new a(this.ak,this.bk,this.ck,t,this.ek)
            }
            ,
            a.prototype.Rn = function(t) {
                return new a(this.ak,this.bk,this.ck,this.dk,t)
            }
            ,
            a
        }(),
        a.Km = function() {
            function f(t) {
                this.Sn = new a.Xc,
                this.Sn.Yc["addChild"](this.Sn.Zc),
                this.Tn = null,
                this.Un = null,
                this.Sm = t,
                this.$c = 0,
                this.vj = 1,
                this.Vn = 1,
                this.Wn = 1,
                this.Xn = 1,
                this.Yn = 1,
                this.Zn = 1,
                this.$n = 1,
                this.Qm("#ffffff")
            }
            var c = new a.Rb(0,0,0,0,0);
            return f.prototype.bg = function() {
                return this.Sn.Yc
            }
            ,
            f.prototype.Lm = function(a) {
                if (this.$c = a,
                this.Sn.$c !== a) {
                    for (var t = a; t < this.Sn._c.length; t++)
                        this.Sn._c[t].Dd();
                    for (; this.Sn.$c > a; ) {
                        this.Sn.$c -= 1;
                        var f = this.Sn._c[this.Sn.$c];
                        f.md.Ad(),
                        f.ld.Ad()
                    }
                    for (; this.Sn.$c < a; ) {
                        var c = this.Sn._c[this.Sn.$c];
                        this.Sn.$c += 1,
                        this.Sn.Yc["addChild"](c.ld.zd()),
                        this.Sn.Yc["addChild"](c.md.zd()),
                        c.ld.$j(this.Vn),
                        c.md.$j(this.Wn)
                    }
                    for (var i = 0; i < this.Sn.Zc.od.length; i++)
                        this.Sn.Zc.od[i].$j(this.Xn);
                    for (var n = 0; n < this.Sn.Zc.pd.length; n++)
                        this.Sn.Zc.pd[n].$j(this.Yn);
                    for (var h = 0; h < this.Sn.Zc.qd.length; h++)
                        this.Sn.Zc.qd[h].$j(this.Zn);
                    for (var o = 0; o < this.Sn.Zc.rd.length; o++)
                        this.Sn.Zc.rd[o].$j(this.$n)
                }
            }
            ,
            f.prototype.Rm = function() {
                return this.$c
            }
            ,
            f.prototype.Pm = function(a) {
                this.Tn = a,
                this.Un = "#ffffff",
                this.an()
            }
            ,
            f.prototype.Qm = function(a) {
                this.Tn = c,
                this.Un = a,
                this.an()
            }
            ,
            f.prototype.an = function() {
                this.Sn.hd(a.jd.lh, null, t.w.ud.Cc().Sb(this.Tn.ak), t.w.ud.Cc().Ub(this.Tn.bk), t.w.ud.Cc().Vb(this.Tn.ck), t.w.ud.Cc().Wb(this.Tn.dk), t.w.ud.Cc().Xb(this.Tn.ek), this.Un)
            }
            ,
            f.prototype.Mm = function(a) {
                this.vj = a
            }
            ,
            f.prototype.Tm = function() {
                return this.vj
            }
            ,
            f.prototype.dn = function(a, t) {
                this.Vn = a,
                this.Wn = t;
                for (var e = 0; e < this.$c; e++) {
                    var f = this.Sn._c[e];
                    f.ld.$j(this.Vn),
                    f.md.$j(this.Wn)
                }
            }
            ,
            f.prototype.hn = function(a, t, e, f) {
                this.Xn = a,
                this.Yn = t,
                this.Zn = e,
                this.$n = f;
                for (var c = 0; c < this.Sn.Zc.od.length; c++)
                    this.Sn.Zc.od[c].$j(this.Xn);
                for (var i = 0; i < this.Sn.Zc.pd.length; i++)
                    this.Sn.Zc.pd[i].$j(this.Yn);
                for (var n = 0; n < this.Sn.Zc.qd.length; n++)
                    this.Sn.Zc.qd[n].$j(this.Zn);
                for (var h = 0; h < this.Sn.Zc.rd.length; h++)
                    this.Sn.Zc.rd[h].$j(this.$n)
            }
            ,
            f.prototype.rg = function() {
                var a = 2 * this.vj
                  , t = 2 * this.vj * 1.5;
                if (this.$c > 0) {
                    var e = this.Sm[0]
                      , f = this.Sm[1]
                      , c = this.Sm[2];
                    this.Sn._c[0].Bd(e, f, a, t, c),
                    this.Sn.Zc.Bd(e, f, a, c)
                }
                for (var i = 1; i < this.$c; i++) {
                    var n = this.Sm[3 * i]
                      , h = this.Sm[3 * i + 1]
                      , o = this.Sm[3 * i + 2];
                    this.Sn._c[i].Bd(n, h, a, t, o)
                }
            }
            ,
            f.prototype.jn = function(a) {
                a.render(this.Sn.Yc)
            }
            ,
            f
        }(),
        a.Vf = function() {
            function a(a) {
                this.Xd = a
            }
            return a.Uf = $("#background-canvas"),
            a._n = $("#stretch-box"),
            a.ao = $("#social-buttons"),
            a.bo = $("#markup-wrap"),
            a.co = $("#game-view"),
            a.do = $("#results-view"),
            a.eo = $("#main-menu-view"),
            a.fo = $("#popup-view"),
            a.go = $("#toaster-view"),
            a.ho = $("#loading-view"),
            a.io = $("#restricted-view"),
            a.jo = $("#error-gateway-connection-view"),
            a.ko = $("#error-game-connection-view"),
            a.prototype.Sa = function() {}
            ,
            a.prototype.vl = function() {}
            ,
            a.prototype.wl = function() {}
            ,
            a.prototype.ql = function() {}
            ,
            a.prototype.kg = function() {}
            ,
            a.prototype.qg = function(a, t) {}
            ,
            a
        }(),
        a.Kk = function() {
            function c(a, t, f, c, i, n) {
                var h = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\">" + "<rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg>" + "<span>" + a + "</span></div>"
                  , o = $(h);
                return o.click(function() {
                    "undefined" !== ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && "undefined" != _typeof(FB.ui) && FB.ui({
                        method: "feed",
                        display: "popup",
                        link: t,
                        name: f,
                        caption: c,
                        description: i,
                        picture: n
                    }, function() {})
                }),
                o
            }
            var i = $("#final-caption")
              , n = $("#final-continue")
              , h = $("#congrats-bg")
              , o = $("#unl6wj4czdl84o9b")
              , d = $("#final-share-fb")
              , b = $("#final-message")
              , r = $("#final-score")
              , s = $("#final-place")
              , u = $("#final-board")
              , p = $("#game-canvas")
              , l = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo);
                var f = this
                  , c = p.get()[0];
                d.toggle(t.no.mo),
                i.text(e.B("index.game.result.title")),
                n.text(e.B("index.game.result.continue")),
                n.click(function() {
                    t.w.rj.jf(),
                    t.no.oo.Va(),
                    t.w.rj.Ze(a.Qe.Te.Kf),
                    t.w.eh.pl(t.w.eh.Kf)
                }),
                $("html").keydown(function(a) {
                    32 === a.keyCode && (f.po = !0)
                }).keyup(function(a) {
                    32 === a.keyCode && (f.po = !1)
                }),
                c.addEventListener("touchmove", function(t) {
                    (t = t || a.c["event"]) && (t = t.touches[0],
                    "undefined" != _typeof(t.clientX) ? f.qo = e.Y(t.clientY - .5 * c.offsetHeight, t.clientX - .5 * c.offsetWidth) : f.qo = e.Y(t.pageY - .5 * c.offsetHeight, t.pageX - .5 * c.offsetWidth))
                }, !0),
                c.addEventListener("touchstart", function(t) {
                    (t = t || a.c["event"]) && (f.po = t.touches.length >= 2),
                    t.preventDefault()
                }, !0),
                c.addEventListener("touchend", function(t) {
                    (t = t || a.c["event"]) && (f.po = t.touches.length >= 2)
                }, !0),
                c.addEventListener("mousemove", function(t) {
                    (t = t || a.c["event"] && "undefined" != _typeof(t.clientX)) && (f.qo = e.Y(t.clientY - .5 * c.offsetHeight, t.clientX - .5 * c.offsetWidth))
                }, !0),
                c.addEventListener("mousedown", function(a) {
                    f.po = !0
                }, !0),
                c.addEventListener("mouseup", function(a) {
                    f.po = !1
                }, !0),
                this.dh = new a.uh(p),
                this.ro = k.so,
                this.qo = 0,
                this.po = !1
            });
            l.prototype.Sa = function() {}
            ,
            l.prototype.vl = function() {
                a.Of.lg(!1),
                f.f.h(a.Vf.Uf, 50),
                f.f.h(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.h(a.Vf.bo, 50),
                f.f.g(a.Vf.co, 500),
                this.ro === k.so ? f.f.h(a.Vf.do, 1) : f.f.g(a.Vf.do, 500),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.h(a.Vf.ho, 50),
                f.f.h(a.Vf.io, 50),
                f.f.h(a.Vf.jo, 50),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            l.prototype.so = function() {
                return this.ro = k.so,
                this
            }
            ,
            l.prototype.to = function() {
                return f.f.h(h, 1),
                e.G(function() {
                    f.f.g(h, 500)
                }, 3e3),
                f.f.h(o, 1),
                e.G(function() {
                    f.f.g(o, 500)
                }, 500),
                this.ro = k.to,
                this
            }
            ,
            l.prototype.wl = function() {
                this.po = !1,
                this.dh.kg(),
                this.ro === k.to && t.w.rj.nf()
            }
            ,
            l.prototype.kg = function() {
                this.dh.kg()
            }
            ,
            l.prototype.qg = function(a, t) {
                this.dh.qg(a, t)
            }
            ,
            l.prototype.uo = function(a, f, i) {
                var n, h, o;
                if (f >= 1 && f <= 10 ? (n = e.B("index.game.result.place.i" + f),
                h = e.B("index.game.result.placeInBoard"),
                o = e.B("index.game.social.shareResult.messGood").replace("{0}", i).replace("{1}", a).replace("{2}", n)) : (n = "",
                h = e.B("index.game.result.tryHit"),
                o = e.B("index.game.social.shareResult.messNorm").replace("{0}", i).replace("{1}", a)),
                b.html(e.B("index.game.result.your")),
                r.html(a),
                s.html(n),
                u.html(h),
                t.no.mo) {
                    var p = e.B("index.game.result.share");
                    e.B("index.game.social.shareResult.caption");
                    d.empty().append(c(p, "https://wormate.io", "wormate.io", o, o, "https://wormate.io/images/og-share-img-new.jpg"))
                }
            }
            ,
            l.prototype.vo = function() {
                return this.qo
            }
            ,
            l.prototype.wo = function() {
                return this.po
            }
            ;
            var k = {
                so: 0,
                to: 1
            };
            return l
        }(),
        a.hl = function() {
            var c = $("#loading-progress-cont")
              , i = $("#loading-progress-bar")
              , n = $("#loading-progress-text")
              , h = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo),
                this.xo = -1,
                this.yo = ""
            });
            return h.prototype.Sa = function() {}
            ,
            h.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 500),
                f.f.g(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.h(a.Vf.bo, 50),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.g(a.Vf.ho, 500),
                f.f.h(a.Vf.io, 50),
                f.f.h(a.Vf.jo, 50),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            h.prototype.wl = function() {
                t.w.rj.Ze(a.Qe.Te.Se),
                t.w.eh.Jk.yg(),
                t.w.eh.Jk.mg(!0)
            }
            ,
            h.prototype.ql = function() {
                t.w.eh.Jk.mg(!1)
            }
            ,
            h.prototype.zo = function() {
                this.Ao("", 0),
                f.f.g(c, 100)
            }
            ,
            h.prototype.Bo = function() {
                f.f.h(c, 100)
            }
            ,
            h.prototype.Ao = function(a, t) {
                this.yo !== a && (this.yo = a);
                var f = e.P(e.J(100 * t), 0, 100);
                this.xo !== f && (i.css("width", f + "%"),
                n.html(f + " %"))
            }
            ,
            h
        }(),
        a.Lk = function() {
            var c = $("#mm-line-top")
              , i = ($("#mm-line-center"),
            $("#mm-line-bottom"),
            $("#mm-bottom-buttons"))
              , n = $("#mm-menu-cont")
              , h = $("#mm-loading")
              , o = $("#mm-loading-progress-bar")
              , d = $("#mm-loading-progress-text")
              , b = ($("#mm-event-text"),
            $("#mm-skin-canv"))
              , r = $("#mm-skin-prev")
              , s = $("#mm-skin-next")
              , u = $("#mm-skin-over")
              , p = $("#mm-skin-over-button-list")
              , l = $("#mm-params-nickname")
              , k = $("#mm-params-game-mode")
              , w = $("#mm-action-play")
              , g = $("#mm-action-guest")
              , v = $("#mm-action-login")
              , y = $("#mm-player-info")
              , j = $("#mm-store")
              , m = $("#mm-leaders")
              , q = $("#mm-settings")
              , S = $("#mm-coins-box")
              , V = $("#mm-player-avatar")
              , x = $("#mm-player-username")
              , _ = $("#mm-coins-val")
              , D = $("#mm-player-exp-bar")
              , Z = $("#mm-player-exp-val")
              , L = $("#mm-player-level")
              , G = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.tl),
                this.xo = -1,
                this.yo = "",
                this.Co = new a.Um(b),
                k.click(function() {
                    t.w.rj.jf()
                }),
                b.click(function() {
                    t.w.xk.wk() && (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Zk))
                }),
                r.click(function() {
                    t.w.rj.jf(),
                    t.w.Do.tk()
                }),
                s.click(function() {
                    t.w.rj.jf(),
                    t.w.Do.sk()
                }),
                l.keypress(function(a) {
                    13 === a.keyCode && t.w.Eo()
                }),
                w.click(function() {
                    t.w.rj.jf(),
                    t.w.Eo()
                }),
                g.click(function() {
                    t.w.rj.jf(),
                    t.w.Eo()
                }),
                v.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Wk)
                }),
                q.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Qi)
                }),
                y.click(function() {
                    t.w.xk.wk() && (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Uk))
                }),
                m.click(function() {
                    t.w.xk.wk() && (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Sk))
                }),
                j.click(function() {
                    t.w.xk.wk() && (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh._k))
                }),
                S.click(function() {
                    t.w.xk.wk() && (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Qk))
                }),
                this.Fo(),
                this.Go();
                var f = a.Lg.Xg(a.Lg.Rg);
                f !== "ARENA" && f !== "TEAM2" && (f = "ARENA"),
                k.val(f)
            });
            return G.prototype.Sa = function() {
                var f = this;
                t.w.xk.om(function() {
                    t.w.xk.wk() ? (t.w.Do.uk(t.w.xk.bm(), a.ik.hk),
                    t.w.Do.uk(t.w.xk.cm(), a.ik.jk),
                    t.w.Do.uk(t.w.xk.dm(), a.ik.kk),
                    t.w.Do.uk(t.w.xk.em(), a.ik.lk),
                    t.w.Do.uk(t.w.xk.fm(), a.ik.mk)) : (t.w.Do.uk(t.w.Ho(), a.ik.hk),
                    t.w.Do.uk(0, a.ik.jk),
                    t.w.Do.uk(0, a.ik.kk),
                    t.w.Do.uk(0, a.ik.lk),
                    t.w.Do.uk(0, a.ik.mk))
                }),
                t.w.xk.om(function() {
                    w.toggle(t.w.xk.wk()),
                    v.toggle(!t.w.xk.wk()),
                    g.toggle(!t.w.xk.wk()),
                    m.toggle(t.w.xk.wk()),
                    j.toggle(t.w.xk.wk()),
                    S.toggle(t.w.xk.wk()),
                    y.toggle(!0),
                    q.toggle(!0),
                    t.w.xk.wk() ? (u.hide(),
                    x.html(t.w.xk.Ul()),
                    V.attr("src", t.w.xk.Wl()),
                    _.html(e.ka(t.w.xk.Zl())),
                    D.width(100 * t.w.xk._l() / t.w.xk.am() + "%"),
                    Z.html(t.w.xk._l() + " / " + t.w.xk.am()),
                    L.html(t.w.xk.$l()),
                    l.val(t.w.xk.Vl())) : (u.toggle(t.no.mo && !t.w.Io()),
                    x.html(x.data("guest")),
                    V.attr("src", t.m.r),
                    _.html("10"),
                    D.width("0"),
                    Z.html(""),
                    L.html(1),
                    l.val(a.Lg.Xg(a.Lg.Sg)))
                }),
                t.w.Do.ok(function() {
                    f.Co.Pm(t.w.Do.nk())
                })
            }
            ,
            G.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 500),
                f.f.g(a.Vf._n, 1),
                f.f.g(a.Vf.ao, 500),
                f.f.g(a.Vf.bo, 500),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.g(a.Vf.eo, 500),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.h(a.Vf.ho, 50),
                f.f.h(a.Vf.io, 50),
                f.f.h(a.Vf.jo, 50),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            G.prototype.Jo = function() {
                f.f.g(c, 500),
                f.f.g(i, 500),
                f.f.g(n, 500),
                f.f.h(h, 100)
            }
            ,
            G.prototype.Ko = function() {
                f.f.h(c, 100),
                f.f.h(i, 100),
                f.f.h(n, 100),
                f.f.g(h, 500)
            }
            ,
            G.prototype.Ao = function(a, t) {
                this.yo !== a && (this.yo = a);
                var f = e.P(e.J(100 * t), 0, 100);
                this.xo !== f && (o.css("width", f + "%"),
                d.html(f + " %"))
            }
            ,
            G.prototype.wl = function() {
                t.w.rj.kf(),
                this.Co.lg(!0)
            }
            ,
            G.prototype.ql = function() {
                this.Co.lg(!1)
            }
            ,
            G.prototype.kg = function() {
                this.Co.kg()
            }
            ,
            G.prototype.qg = function(a, t) {
                this.Co.qg()
            }
            ,
            G.prototype.Vl = function() {
                return l.val()
            }
            ,
            G.prototype.Lo = function() {
                return k.val()
            }
            ,
            G.prototype.Fo = function() {
                var a = $("#mm-advice-cont").children()
                  , t = 0;
                e.F(function() {
                    a.eq(t).fadeOut(500, function() {
                        ++t >= a.length && (t = 0),
                        a.eq(t).fadeIn(500).css("display", "inline-block")
                    })
                }, 3e3)
            }
            ,
            G.prototype.Go = function() {
                function a() {
                    t.w.Mo(!0),
                    e.G(function() {
                        u.hide()
                    }, 3e3)
                }
                if (t.no.mo && !t.w.Io()) {
                    u.show();
                    var f = e.B("index.game.main.menu.unlockSkins.share")
                      , c = encodeURIComponent(e.B("index.game.main.menu.unlockSkins.comeAndPlay"));
                    p.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + c + "\">" + "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/>" + "<span>" + f + "</span></a>").click(a))
                }
            }
            ,
            G
        }(),
        a.nl = function() {
            var t = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo)
            });
            return t.prototype.Sa = function() {}
            ,
            t.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.h(a.Vf.Uf, 50),
                f.f.h(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.h(a.Vf.bo, 50),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.h(a.Vf.ho, 50),
                f.f.h(a.Vf.io, 50),
                f.f.h(a.Vf.jo, 50),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            t
        }(),
        a.el = function() {
            var t = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo)
            });
            return t.prototype.Sa = function() {}
            ,
            t.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 500),
                f.f.g(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.h(a.Vf.bo, 50),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.h(a.Vf.ho, 50),
                f.f.g(a.Vf.io, 500),
                f.f.h(a.Vf.jo, 50),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            t.prototype.wl = function() {}
            ,
            t
        }(),
        a.gl = function() {
            var c = $("#toaster-stack")
              , i = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo),
                this.No = [],
                this.Oo = null
            });
            return i.prototype.Sa = function() {}
            ,
            i.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 500),
                f.f.g(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.g(a.Vf.bo, 500),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.g(a.Vf.go, 500),
                f.f.h(a.Vf.ho, 50),
                f.f.h(a.Vf.io, 50),
                f.f.h(a.Vf.jo, 50),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            i.prototype.wl = function() {
                this.Po()
            }
            ,
            i.prototype.zl = function() {
                return null != this.Oo || this.No.length > 0
            }
            ,
            i.prototype.Qo = function(a) {
                this.No.unshift(a),
                e.G(function() {
                    t.w.eh.xl()
                }, 0)
            }
            ,
            i.prototype.tm = function(a) {
                this.No.push(a),
                e.G(function() {
                    t.w.eh.xl()
                }, 0)
            }
            ,
            i.prototype.Po = function() {
                var a = this;
                if (null == this.Oo) {
                    if (0 === this.No.length)
                        return void t.w.eh.sl();
                    var i = this.No.shift();
                    this.Oo = i;
                    var n = i.bg();
                    f.f.g(n, 300),
                    c.append(n),
                    i.Ro = function() {
                        n.fadeOut(300),
                        e.G(function() {
                            n.remove()
                        }, 300),
                        a.Oo === i && (a.Oo = null),
                        a.Po()
                    }
                    ,
                    i.wl()
                }
            }
            ,
            i
        }(),
        a.ul = {
            lo: 0,
            tl: 1
        },
        a.So = function() {
            var i = $("#popup-menu-label")
              , n = $("#popup-menu-coins-box")
              , h = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function() {
                t.w.rj.jf(),
                t.w.eh.sl()
            }),
            n.click(function() {
                t.w.xk.wk() && (t.w.rj.jf(),
                t.w.eh.pl(t.w.eh.Qk))
            });
            var o = e.M(a.Vf, function(t, e) {
                a.Vf.call(this, a.ul.tl),
                this.Xa = t,
                this.To = e,
                this.Uo = []
            });
            return o.prototype.Sa = function() {
                o.parent.prototype.Sa.call(this),
                o.Vo || (o.Vo = !0,
                t.w.xk.om(function() {
                    t.w.xk.wk() ? h.html(e.ka(t.w.xk.Zl())) : h.html("0")
                })),
                f.f.h(a.So.Wo, 100)
            }
            ,
            o.Xo = $("#coins-view"),
            o.Yo = $("#leaders-view"),
            o.Zo = $("#profile-view"),
            o.$o = $("#login-view"),
            o._o = $("#settings-view"),
            o.ap = $("#skins-view"),
            o.bp = $("#store-view"),
            o.cp = $("#wear-view"),
            o.dp = $("#withdraw-consent-view"),
            o.ep = $("#delete-account-view"),
            o.Wo = $("#please-wait-view"),
            o.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 1),
                f.f.g(a.Vf._n, 500),
                f.f.g(a.Vf.ao, 200),
                f.f.g(a.Vf.bo, 200),
                f.f.h(a.Vf.co, 200),
                f.f.h(a.Vf.do, 200),
                f.f.h(a.Vf.eo, 200),
                f.f.g(a.Vf.fo, 200),
                f.f.h(a.Vf.go, 200),
                f.f.h(a.Vf.ho, 200),
                f.f.h(a.Vf.io, 200),
                f.f.h(a.Vf.jo, 200),
                f.f.h(a.Vf.ko, 200),
                i.html(this.Xa),
                n.toggle(this.To),
                this.fp()
            }
            ,
            o.prototype.fp = function() {}
            ,
            o.prototype.gp = function(t) {
                var i = this
                  , n = 2147483647 & e.ha(0, 2147483647);
                return this.Uo.push(n),
                f.f.g(a.So.Wo, 100),
                e.G(function() {
                    i.hp(n)
                }, t),
                new c(this,n)
            }
            ,
            o.prototype.hp = function(t) {
                var e = this.Uo.indexOf(t);
                e < 0 || (this.Uo.splice(e, 1),
                0 === this.Uo.length && f.f.h(a.So.Wo, 100))
            }
            ,
            o
        }();
        var c = function() {
            function a(a, t) {
                this.ip = a,
                this.jp = t
            }
            return a.prototype.kp = function() {
                this.ip.hp(this.jp)
            }
            ,
            a
        }();
        a.Rk = function() {
            var c = $("#store-buy-coins_125000")
              , i = $("#store-buy-coins_50000")
              , n = $("#store-buy-coins_16000")
              , h = $("#store-buy-coins_7000")
              , o = $("#store-buy-coins_3250")
              , d = $("#store-buy-coins_1250")
              , b = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.coins.tab"), !1);
                var f = this;
                c.click(function() {
                    t.w.rj.jf(),
                    f.lp("coins_125000")
                }),
                i.click(function() {
                    t.w.rj.jf(),
                    f.lp("coins_50000")
                }),
                n.click(function() {
                    t.w.rj.jf(),
                    f.lp("coins_16000")
                }),
                h.click(function() {
                    t.w.rj.jf(),
                    f.lp("coins_7000")
                }),
                o.click(function() {
                    t.w.rj.jf(),
                    f.lp("coins_3250")
                }),
                d.click(function() {
                    t.w.rj.jf(),
                    f.lp("coins_1250")
                })
            });
            return b.prototype.Sa = function() {
                b.parent.prototype.Sa.call(this)
            }
            ,
            b.prototype.fp = function() {
                f.f.g(a.So.Xo, 200),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            b.prototype.wl = function() {
                t.w.rj.kf()
            }
            ,
            b.prototype.lp = function(a) {}
            ,
            b
        }(),
        a.Tk = function() {
            var c = $("#highscore-table")
              , i = $("#leaders-button-level")
              , n = $("#leaders-button-highscore")
              , h = $("#leaders-button-kills")
              , o = "byLevel"
              , d = "byHighScore"
              , b = "byKillsAndHeadShots"
              , r = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.leaders.tab"), !0);
                var f = this;
                this.mp = {},
                this.np = {
                    op: {
                        pp: i,
                        qp: o
                    },
                    rp: {
                        pp: n,
                        qp: d
                    },
                    sp: {
                        pp: h,
                        qp: b
                    }
                },
                i.click(function() {
                    t.w.rj.jf(),
                    f.tp(f.np.op)
                }),
                n.click(function() {
                    t.w.rj.jf(),
                    f.tp(f.np.rp)
                }),
                h.click(function() {
                    t.w.rj.jf(),
                    f.tp(f.np.sp)
                })
            });
            return r.prototype.Sa = function() {
                r.parent.prototype.Sa.call(this)
            }
            ,
            r.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.g(a.So.Yo, 200),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            r.prototype.wl = function() {
                var a = this;
                t.w.rj.kf();
                var f = this.gp(5e3)
                  , c = t.m.o + "/pub/leaders";
                e.na(c, function() {
                    var t = {};
                    t[o] = [],
                    t[d] = [],
                    t[b] = [],
                    a.mp = t,
                    a.tp(null != a.up ? a.up : a.np.op),
                    f.kp()
                }, function(t) {
                    a.mp = t,
                    a.tp(null != a.up ? a.up : a.np.op),
                    f.kp()
                })
            }
            ,
            r.prototype.tp = function(a) {
                this.up = a;
                for (var t in this.np)
                    if (this.np.hasOwnProperty(t)) {
                        var f = this.np[t];
                        f.pp.removeClass("pressed")
                    }
                this.up.pp.addClass("pressed");
                for (var i = this.mp[this.up.qp], n = "", h = 0; h < i.length; h++) {
                    var o = i[h];
                    n += "<div class=\"table-row\">" + "<span>".concat(h + 1, "</span>") + "<span><img src=\"".concat(o["avatarUrl"], "\" alt=\"avatar of user ").concat(o["username"], "\"/></span>") + "<span>".concat(o["username"], "</span>") + "<span>".concat(o["level"], "</span>") + "<span>".concat(e.ka(o["highScore"]), "</span>") + "<span>".concat(e.ka(o["headShots"]), " / ").concat(e.ka(o["kills"]), "</span>") + "</div>"
                }
                c.empty(),
                c.append(n)
            }
            ,
            r
        }(),
        a.Xk = function() {
            var c = $("#popup-login-gg")
              , i = $("#popup-login-fb")
              , n = e.M(a.So, function() {
                var f = this;
                a.So.call(this, e.B("index.game.popup.menu.login.tab"), !1),
                c.click(function() {
                    t.w.rj.jf();
                    var a = f.gp(1e4);
                    e.G(function() {
                        t.w.xk.Bm(function() {
                            t.w.xk.wk() && t.w.rj.nf(),
                            a.kp()
                        })
                    }, 500)
                }),
                i.click(function() {
                    t.w.rj.jf();
                    var a = f.gp(1e4);
                    e.G(function() {
                        t.w.xk.ym(function() {
                            t.w.xk.wk() && t.w.rj.nf(),
                            a.kp()
                        })
                    }, 500)
                })
            });
            return n.prototype.Sa = function() {
                n.parent.prototype.Sa.call(this)
            }
            ,
            n.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.g(a.So.$o, 200),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            n.prototype.wl = function() {
                t.w.rj.kf()
            }
            ,
            n
        }(),
        a.Vk = function() {
            var c = $("#profile-avatar")
              , i = $("#profile-username")
              , n = $("#profile-experience-bar")
              , h = $("#profile-experience-val")
              , o = $("#profile-level")
              , d = $("#profile-stat-highScore")
              , b = $("#profile-stat-bestSurvivalTime")
              , r = $("#profile-stat-kills")
              , s = $("#profile-stat-headshots")
              , u = $("#profile-stat-gamesPlayed")
              , p = $("#profile-stat-totalTimeSpent")
              , l = $("#profile-stat-registrationDate")
              , k = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.profile.tab"), !0)
            });
            return k.prototype.Sa = function() {
                k.parent.prototype.Sa.call(this)
            }
            ,
            k.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.g(a.So.Zo, 200),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            k.prototype.wl = function() {
                t.w.rj.kf();
                var a = t.w.xk.mm()
                  , f = moment([a.year, a.month - 1, a.day]).format("LL");
                i.html(t.w.xk.Ul()),
                c.attr("src", t.w.xk.Wl()),
                n.width(100 * t.w.xk._l() / t.w.xk.am() + "%"),
                h.html(t.w.xk._l() + " / " + t.w.xk.am()),
                o.html(t.w.xk.$l()),
                d.html(t.w.xk.gm()),
                b.html(e.I(t.w.xk.hm())),
                r.html(t.w.xk.im()),
                s.html(t.w.xk.jm()),
                u.html(t.w.xk.km()),
                p.html(e.I(t.w.xk.lm())),
                l.html(f)
            }
            ,
            k
        }(),
        a.Yk = function() {
            var c = $("#settings-music-enabled-switch")
              , i = $("#settings-sfx-enabled-switch")
              , n = $("#settings-show-names-switch")
              , h = $("#popup-logout")
              , o = $("#popup-logout-container")
              , d = $("#popup-delete-account")
              , b = $("#popup-delete-account-container")
              , r = $("#popup-withdraw-consent")
              , s = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.settings.tab"), !1);
                var f = this;
                c.click(function() {
                    var f = !!c.prop("checked");
                    a.Lg.Wg(a.Lg.Og, f),
                    t.w.rj._e(f),
                    t.w.rj.jf()
                }),
                i.click(function() {
                    var f = !!i.prop("checked");
                    a.Lg.Wg(a.Lg.Pg, f),
                    t.w.rj.Ye(f),
                    t.w.rj.jf()
                }),
                n.click(function() {
                    t.w.rj.jf()
                }),
                h.click(function() {
                    t.w.rj.jf(),
                    f.gp(500),
                    t.w.xk.zm()
                }),
                d.click(function() {
                    t.w.xk.wk() ? (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Ok)) : t.w.rj.pf()
                }),
                r.click(function() {
                    t.w.vp() ? (t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Mk)) : t.w.rj.pf()
                })
            });
            return s.prototype.Sa = function() {
                s.parent.prototype.Sa.call(this);
                var f;
                switch (a.Lg.Xg(a.Lg.Og)) {
                case "false":
                    f = !1;
                    break;
                default:
                    f = !0
                }
                c.prop("checked", f),
                t.w.rj._e(f);
                var h;
                switch (a.Lg.Xg(a.Lg.Pg)) {
                case "false":
                    h = !1;
                    break;
                default:
                    h = !0
                }
                i.prop("checked", h),
                t.w.rj.Ye(h);
                var d;
                switch (a.Lg.Xg(a.Lg.Ng)) {
                case "false":
                    d = !1;
                    break;
                default:
                    d = !0
                }
                n.prop("checked", d),
                t.w.xk.nm(function() {
                    o.toggle(t.w.xk.wk()),
                    b.toggle(t.w.xk.wk())
                })
            }
            ,
            s.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.g(a.So._o, 200),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            s.prototype.wl = function() {
                t.w.rj.kf(),
                t.w.vp() ? r.show() : r.hide()
            }
            ,
            s.prototype.Pi = function() {
                return n.prop("checked")
            }
            ,
            s
        }(),
        a.$k = function() {
            var c = $("#store-view-canv")
              , i = $("#skin-description-text")
              , n = $("#skin-group-description-text")
              , h = $("#store-locked-bar")
              , o = $("#store-locked-bar-text")
              , d = $("#store-buy-button")
              , b = $("#store-item-price")
              , r = $("#store-groups")
              , s = $("#store-view-prev")
              , u = $("#store-view-next")
              , p = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.skins.tab"), !0);
                var f = this;
                this.wp = null,
                this.xp = [],
                this.yp = {},
                this.zp = new a.Um(c),
                d.click(function() {
                    t.w.rj.jf(),
                    f.Ap()
                }),
                s.click(function() {
                    t.w.rj.jf(),
                    f.wp.Bp()
                }),
                u.click(function() {
                    t.w.rj.jf(),
                    f.wp.Cp()
                })
            });
            p.prototype.Sa = function() {
                p.parent.prototype.Sa.call(this);
                var a = this;
                t.w.ud.Jc(function() {
                    var f = t.w.ud.Gc();
                    a.xp = [];
                    for (var c = 0; c < f["skinGroupArrayDict"].length; c++)
                        a.xp.push(new l(a,f["skinGroupArrayDict"][c]));
                    a.yp = {};
                    for (var i = 0; i < f["skinArrayDict"].length; i++) {
                        var n = f["skinArrayDict"][i];
                        a.yp[n["id"]] = n
                    }
                    a.Dp()
                }),
                this.Ep(!1),
                t.w.Do.ok(function() {
                    a.Ep(!1)
                })
            }
            ,
            p.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.g(a.So.ap, 200),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            p.prototype.wl = function() {
                t.w.rj.Ze(a.Qe.Te.Kf),
                t.w.rj.kf(),
                this.Dp(),
                this.zp.lg(!0)
            }
            ,
            p.prototype.ql = function() {
                this.zp.lg(!1)
            }
            ,
            p.prototype.kg = function() {
                this.zp.kg()
            }
            ,
            p.prototype.qg = function(a, t) {
                this.zp.qg()
            }
            ,
            p.prototype.Dp = function() {
                var f = this
                  , c = this;
                r.empty();
                for (var i = 0; i < this.xp.length; i++)
                    !function(i) {
                        var n = f.xp[i]
                          , h = a.d.createElement("li");
                        r.append(h);
                        var o = $(h);
                        o.html(n.Fp()),
                        o.click(function() {
                            t.w.rj.jf(),
                            c.Gp(n)
                        }),
                        n.Hp = o
                    }(i);
                if (this.xp.length > 0) {
                    for (var n = t.w.Do.gk(a.ik.hk), h = 0; h < this.xp.length; h++)
                        for (var o = this.xp[h], d = o.Ip.list, b = 0; b < d.length; b++)
                            if (d[b] === n)
                                return o.Jp = b,
                                void this.Gp(o);
                    this.Gp(this.xp[0])
                }
            }
            ,
            p.prototype.Gp = function(a) {
                if (this.wp !== a) {
                    if (this.wp = a,
                    r.children().removeClass("pressed"),
                    this.wp.Hp && this.wp.Hp.addClass("pressed"),
                    n.html(""),
                    null != a.Ip) {
                        var f = t.w.ud.Gc()["textDict"][a.Ip["description"]];
                        null != f && n.html(e.K(e.C(f)))
                    }
                    this.Ep(!0)
                }
            }
            ,
            p.prototype.Kp = function() {
                return null == this.wp ? a.Hj.Jj() : this.wp.Lp()
            }
            ,
            p.prototype.Ap = function() {
                var a = this
                  , t = this.Kp();
                if (t.Lj()) {
                    var e = t.Mc();
                    a.Mp(e)
                }
            }
            ,
            p.prototype.Mp = function(e) {
                var f = t.w.Do.vk(e, a.ik.hk);
                if (null != f) {
                    var c = f.yk();
                    if (!(t.w.xk.Zl() < c)) {
                        var i = t.w.Do.gk(a.ik.hk)
                          , n = t.w.Do.gk(a.ik.jk)
                          , h = t.w.Do.gk(a.ik.kk)
                          , o = t.w.Do.gk(a.ik.lk)
                          , d = t.w.Do.gk(a.ik.mk)
                          , b = this.gp(5e3);
                        t.w.xk.wm(e, a.ik.hk, function() {
                            b.kp(),
                            t.w.eh.pl(t.w.eh.il)
                        }, function() {
                            t.w.xk.qm(function() {
                                t.w.Do.uk(i, a.ik.hk),
                                t.w.Do.uk(n, a.ik.jk),
                                t.w.Do.uk(h, a.ik.kk),
                                t.w.Do.uk(o, a.ik.lk),
                                t.w.Do.uk(d, a.ik.mk),
                                t.w.Do.uk(e, a.ik.hk),
                                b.kp()
                            })
                        })
                    }
                }
            }
            ,
            p.prototype.Ep = function(f) {
                var c = t.w.Do.nk()
                  , n = this.Kp();
                if (n.Lj()) {
                    var r = n.Mc()
                      , s = t.w.Do.vk(r, a.ik.hk)
                      , u = !1;
                    if (t.w.Do.rk(r, a.ik.hk))
                        h.hide(),
                        d.hide();
                    else if (null == s || s.zk()) {
                        if (u = !0,
                        h.show(),
                        d.hide(),
                        o.text(e.B("index.game.popup.menu.store.locked")),
                        null != s && s.zk()) {
                            var p = t.w.ud.Gc()["textDict"][s.vn()];
                            null != p && o.text(e.C(p))
                        }
                    } else
                        h.hide(),
                        d.show(),
                        b.html(e.ka(s.yk()));
                    if (i.html(""),
                    null != s && null != s.wn()) {
                        var l = t.w.ud.Gc()["textDict"][s.wn()];
                        null != l && i.html(e.K(e.C(l)))
                    }
                    this.zp.Pm(c.Nn(r)),
                    this.zp.kn(u),
                    f && t.w.Do.uk(r, a.ik.hk)
                }
            }
            ;
            var l = function() {
                function t(a, t) {
                    this.Np = a,
                    this.Jp = 0,
                    this.Ip = t
                }
                return t.prototype.Bp = function() {
                    --this.Jp < 0 && (this.Jp = this.Ip.list.length - 1),
                    this.Np.Ep(!0)
                }
                ,
                t.prototype.Cp = function() {
                    ++this.Jp >= this.Ip.list.length && (this.Jp = 0),
                    this.Np.Ep(!0)
                }
                ,
                t.prototype.Fp = function() {
                    return e.C(this.Ip.name)
                }
                ,
                t.prototype.Lp = function() {
                    return this.Jp >= this.Ip.list.length ? a.Hj.Jj() : a.Hj.Kj(this.Ip.list[this.Jp])
                }
                ,
                t
            }();
            return p
        }(),
        a.al = function() {
            var c = $("#store-go-coins-button")
              , i = $("#store-go-skins-button")
              , n = $("#store-go-wear-button")
              , h = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.store.tab"), !0),
                c.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Qk)
                }),
                i.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Zk)
                }),
                n.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.bl)
                })
            });
            return h.prototype.Sa = function() {
                h.parent.prototype.Sa.call(this)
            }
            ,
            h.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.g(a.So.bp, 200),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            h.prototype.wl = function() {
                t.w.rj.kf()
            }
            ,
            h
        }(),
        a.cl = function() {
            var c = $("#wear-view-canv")
              , i = $("#wear-description-text")
              , n = $("#wear-locked-bar")
              , h = $("#wear-locked-bar-text")
              , o = $("#wear-buy-button")
              , d = $("#wear-item-price")
              , b = $("#wear-eyes-button")
              , r = $("#wear-mouths-button")
              , s = $("#wear-hats-button")
              , u = $("#wear-glasses-button")
              , p = $("#wear-tint-chooser")
              , l = $("#wear-view-prev")
              , k = $("#wear-view-next")
              , w = e.M(a.So, function() {
                var f = this;
                a.So.call(this, e.B("index.game.popup.menu.wear.tab"), !0);
                var i = this;
                this.Op = [],
                this.jk = new g(this,a.ik.jk,b),
                this.kk = new g(this,a.ik.kk,r),
                this.lk = new g(this,a.ik.lk,s),
                this.mk = new g(this,a.ik.mk,u),
                this.Pp = null,
                this.Qp = null,
                this.Rp = null,
                this.Sp = null,
                this.Tp = null,
                this.Up = null,
                this.zp = new a.Um(c),
                o.click(function() {
                    t.w.rj.jf(),
                    i.Vp()
                }),
                l.click(function() {
                    t.w.rj.jf(),
                    i.Pp.Wp()
                }),
                k.click(function() {
                    t.w.rj.jf(),
                    i.Pp.Xp()
                }),
                b.click(function() {
                    t.w.rj.jf(),
                    i.Yp(f.jk)
                }),
                r.click(function() {
                    t.w.rj.jf(),
                    i.Yp(f.kk)
                }),
                s.click(function() {
                    t.w.rj.jf(),
                    i.Yp(f.lk)
                }),
                u.click(function() {
                    t.w.rj.jf(),
                    i.Yp(f.mk)
                }),
                this.Op.push(this.jk),
                this.Op.push(this.kk),
                this.Op.push(this.lk),
                this.Op.push(this.mk)
            });
            w.prototype.Sa = function() {
                w.parent.prototype.Sa.call(this);
                var a = this;
                t.w.ud.Jc(function() {
                    var f = t.w.ud.Gc();
                    a.Qp = f["eyesDict"],
                    a.Rp = f["mouthDict"],
                    a.Sp = f["hatDict"],
                    a.Tp = f["glassesDict"],
                    a.Up = f["colorDict"],
                    a.jk.Zp(f["eyesVariantArray"]),
                    a.jk.$p(a.Qp),
                    a.kk.Zp(f["mouthVariantArray"]),
                    a.kk.$p(a.Rp),
                    a.lk.Zp(f["hatVariantArray"]),
                    a.lk.$p(a.Sp),
                    a.mk.Zp(f["glassesVariantArray"]),
                    a.mk.$p(a.Tp)
                }),
                this.Ep(!1),
                t.w.Do.ok(function() {
                    a.Ep(!1)
                })
            }
            ,
            w.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.g(a.So.cp, 200),
                f.f.h(a.So.dp, 50),
                f.f.h(a.So.ep, 50)
            }
            ,
            w.prototype.wl = function() {
                t.w.rj.Ze(a.Qe.Te.Kf),
                t.w.rj.kf(),
                this.Yp(null != this.Pp ? this.Pp : this.jk),
                this.zp.lg(!0)
            }
            ,
            w.prototype.ql = function() {
                this.zp.lg(!1)
            }
            ,
            w.prototype.kg = function() {
                this.zp.kg()
            }
            ,
            w.prototype.qg = function(a, t) {
                this.zp.qg()
            }
            ,
            w.prototype.Yp = function(a) {
                this.Pp = a;
                for (var t = 0; t < this.Op.length; t++)
                    this.Op[t].pp.removeClass("pressed");
                this.Pp.pp.addClass("pressed"),
                this.Pp.vl()
            }
            ,
            w.prototype._p = function() {
                return null == this.Pp ? a.Hj.Jj() : a.Hj.Kj({
                    Ke: this.Pp.Lp(),
                    Xd: this.Pp.Xd
                })
            }
            ,
            w.prototype.Vp = function() {
                var a = this
                  , t = this._p();
                if (t.Lj()) {
                    var e = t.Mc();
                    a.aq(e.Ke, e.Xd)
                }
            }
            ,
            w.prototype.aq = function(e, f) {
                var c = t.w.Do.vk(e, f);
                if (null != c) {
                    var i = c.yk();
                    if (!(t.w.xk.Zl() < i)) {
                        var n = t.w.Do.gk(a.ik.hk)
                          , h = t.w.Do.gk(a.ik.jk)
                          , o = t.w.Do.gk(a.ik.kk)
                          , d = t.w.Do.gk(a.ik.lk)
                          , b = t.w.Do.gk(a.ik.mk)
                          , r = this.gp(5e3);
                        t.w.xk.wm(e, f, function() {
                            r.kp(),
                            t.w.eh.pl(t.w.eh.il)
                        }, function() {
                            t.w.xk.qm(function() {
                                t.w.Do.uk(n, a.ik.hk),
                                t.w.Do.uk(h, a.ik.jk),
                                t.w.Do.uk(o, a.ik.kk),
                                t.w.Do.uk(d, a.ik.lk),
                                t.w.Do.uk(b, a.ik.mk),
                                t.w.Do.uk(e, f),
                                r.kp()
                            })
                        })
                    }
                }
            }
            ,
            w.prototype.Ep = function(f) {
                var c = t.w.Do.nk()
                  , b = this._p();
                if (b.Lj()) {
                    var r = b.Mc()
                      , s = t.w.Do.vk(r.Ke, r.Xd)
                      , u = !1;
                    if (t.w.Do.rk(r.Ke, r.Xd))
                        n.hide(),
                        o.hide();
                    else if (null == s || s.zk()) {
                        if (u = !0,
                        n.show(),
                        o.hide(),
                        h.text(e.B("index.game.popup.menu.store.locked")),
                        null != s && s.zk()) {
                            var p = t.w.ud.Gc()["textDict"][s.vn()];
                            null != p && h.text(e.C(p))
                        }
                    } else
                        n.hide(),
                        o.show(),
                        d.html(e.ka(s.yk()));
                    if (i.html(""),
                    null != s && null != s.wn()) {
                        var l = t.w.ud.Gc()["textDict"][s.wn()];
                        null != l && i.html(e.K(e.C(l)))
                    }
                    var k = this.zp;
                    switch (r.Xd) {
                    case a.ik.jk:
                        k.Pm(c.On(r.Ke)),
                        k.ln(u);
                        break;
                    case a.ik.kk:
                        k.Pm(c.Pn(r.Ke)),
                        k.mn(u);
                        break;
                    case a.ik.lk:
                        k.Pm(c.Qn(r.Ke)),
                        k.nn(u);
                        break;
                    case a.ik.mk:
                        k.Pm(c.Rn(r.Ke)),
                        k.pn(u)
                    }
                    f && t.w.Do.uk(r.Ke, r.Xd)
                }
            }
            ;
            var g = function() {
                function a(a, t, e) {
                    this.Np = a,
                    this.Xd = t,
                    this.pp = e,
                    this.Lc = {},
                    this.bq = [[]],
                    this.cq = -10,
                    this.dq = -10
                }
                return a.prototype.Zp = function(a) {
                    this.bq = a
                }
                ,
                a.prototype.$p = function(a) {
                    this.Lc = a
                }
                ,
                a.prototype.vl = function() {
                    for (var a = t.w.Do.gk(this.Xd), e = 0; e < this.bq.length; e++)
                        for (var f = 0; f < this.bq[e].length; f++)
                            if (this.bq[e][f] === a)
                                return this.fq(e),
                                void this.gq(f);
                    this.fq(0),
                    this.gq(0)
                }
                ,
                a.prototype.Wp = function() {
                    var a = this.cq - 1;
                    a < 0 && (a = this.bq.length - 1),
                    this.fq(a),
                    this.gq(this.dq % this.bq[a].length)
                }
                ,
                a.prototype.Xp = function() {
                    var a = this.cq + 1;
                    a >= this.bq.length && (a = 0),
                    this.fq(a),
                    this.gq(this.dq % this.bq[a].length)
                }
                ,
                a.prototype.fq = function(a) {
                    var f = this;
                    if (!(a < 0 || a >= this.bq.length)) {
                        this.cq = a,
                        p.empty();
                        var c = this.bq[this.cq];
                        if (c.length > 1)
                            for (var i = 0; i < c.length; i++)
                                !function(a) {
                                    var i = c[a]
                                      , n = f.Lc[i]
                                      , h = "#" + f.Np.Up[n["prime"]]
                                      , o = $("<div style=\"border-color:" + h + "\"></div>");
                                    o.click(function() {
                                        t.w.rj.jf(),
                                        f.gq(a)
                                    }),
                                    p.append(o)
                                }(i)
                    }
                }
                ,
                a.prototype.gq = function(a) {
                    if (!(a < 0 || a >= this.bq[this.cq].length)) {
                        this.dq = a,
                        p.children().css("background-color", "transparent");
                        var t = p.children(":nth-child(" + (1 + a) + ")");
                        t.css("background-color", t.css("border-color")),
                        this.Np.Ep(!0)
                    }
                }
                ,
                a.prototype.Lp = function() {
                    return this.bq[this.cq][this.dq]
                }
                ,
                a
            }();
            return w
        }(),
        a.Nk = function() {
            var c = $("#withdraw-consent-yes")
              , i = $("#withdraw-consent-no")
              , n = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.consent.tab"), !1),
                c.click(function() {
                    t.w.rj.jf(),
                    t.w.vp() ? (t.w.eh.pl(t.w.eh.Kf),
                    t.w.hq(!1, !0),
                    t.w.eh.fl.Qo(new a.iq)) : t.w.eh.sl()
                }),
                i.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.sl()
                })
            });
            return n.prototype.Sa = function() {
                n.parent.prototype.Sa.call(this)
            }
            ,
            n.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.g(a.So.dp, 200),
                f.f.h(a.So.ep, 50)
            }
            ,
            n.prototype.wl = function() {
                t.w.rj.kf()
            }
            ,
            n
        }(),
        a.Pk = function() {
            var c = $("#delete-account-timer")
              , i = $("#delete-account-yes")
              , n = $("#delete-account-no")
              , h = e.M(a.So, function() {
                a.So.call(this, e.B("index.game.popup.menu.delete.tab"), !1),
                i.click(function() {
                    t.w.rj.jf(),
                    t.w.xk.wk() ? (t.w.xk.Hm(),
                    t.w.xk.zm()) : t.w.eh.sl()
                }),
                n.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.sl()
                }),
                this.jq = []
            });
            return h.prototype.Sa = function() {
                h.parent.prototype.Sa.call(this)
            }
            ,
            h.prototype.fp = function() {
                f.f.h(a.So.Xo, 50),
                f.f.h(a.So.Yo, 50),
                f.f.h(a.So.Zo, 50),
                f.f.h(a.So.$o, 50),
                f.f.h(a.So._o, 50),
                f.f.h(a.So.ap, 50),
                f.f.h(a.So.bp, 50),
                f.f.h(a.So.cp, 50),
                f.f.h(a.So.dp, 50),
                f.f.g(a.So.ep, 200)
            }
            ,
            h.prototype.wl = function() {
                t.w.rj.pf(),
                f.f.h(i, 1),
                f.f.g(c, 1),
                c.text(".. 10 .."),
                this.kq(),
                this.lq(function() {
                    c.text(".. 9 ..")
                }, 1e3),
                this.lq(function() {
                    c.text(".. 8 ..")
                }, 2e3),
                this.lq(function() {
                    c.text(".. 7 ..")
                }, 3e3),
                this.lq(function() {
                    c.text(".. 6 ..")
                }, 4e3),
                this.lq(function() {
                    c.text(".. 5 ..")
                }, 5e3),
                this.lq(function() {
                    c.text(".. 4 ..")
                }, 6e3),
                this.lq(function() {
                    c.text(".. 3 ..")
                }, 7e3),
                this.lq(function() {
                    c.text(".. 2 ..")
                }, 8e3),
                this.lq(function() {
                    c.text(".. 1 ..")
                }, 9e3),
                this.lq(function() {
                    f.f.g(i, 300),
                    f.f.h(c, 1)
                }, 1e4)
            }
            ,
            h.prototype.lq = function(a, t) {
                var f = e.G(a, t);
                this.jq.push(f)
            }
            ,
            h.prototype.kq = function() {
                for (var a = 0; a < this.jq.length; a++)
                    e.H(this.jq[a]);
                this.jq = []
            }
            ,
            h
        }(),
        a.mq = function() {
            function a() {
                this.Ro = function() {}
            }
            return a.prototype.bg = function() {}
            ,
            a.prototype.wl = function() {}
            ,
            a
        }(),
        a.vm = function() {
            var f = e.M(a.mq, function(f) {
                a.mq.call(this);
                var c = e.pa() + "_" + e.J(1e3 + 8999 * e.$());
                this.nq = $("\n            <div id=\"".concat(c, "\" class=\"toaster toaster-coins\">\n                <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />\n                <div class=\"toaster-coins-val\">").concat(e.ka(f), "</div>\n                <div class=\"toaster-coins-close\">").concat(e.B("index.game.toaster.continue"), "</div>\n            </div>"));
                var i = this;
                this.nq.find(".toaster-coins-close").click(function() {
                    t.w.rj.jf(),
                    i.Ro()
                })
            });
            return f.prototype.bg = function() {
                return this.nq
            }
            ,
            f.prototype.wl = function() {
                t.w.rj.mf()
            }
            ,
            f
        }(),
        a.um = function() {
            var f = e.M(a.mq, function(f) {
                a.mq.call(this);
                var c = e.pa() + "_" + e.J(1e3 + 8999 * e.$());
                this.nq = $("\n            <div id=\"".concat(c, "\" class=\"toaster toaster-levelup\">\n                <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />\n                <div class=\"toaster-levelup-val\">").concat(f, "</div>\n                <div class=\"toaster-levelup-text\">").concat(e.B("index.game.toaster.levelup"), "</div>\n                <div class=\"toaster-levelup-close\">").concat(e.B("index.game.toaster.continue"), "</div>\n            </div>"));
                var i = this;
                this.nq.find(".toaster-levelup-close").click(function() {
                    t.w.rj.jf(),
                    i.Ro()
                })
            });
            return f.prototype.bg = function() {
                return this.nq
            }
            ,
            f.prototype.wl = function() {
                t.w.rj.lf()
            }
            ,
            f
        }(),
        a.iq = function() {
            var f = e.M(a.mq, function() {
                a.mq.call(this);
                var f = this
                  , c = e.pa() + "_" + e.J(1e3 + 8999 * e.$());
                this.nq = $("" + "<div id=\"" + c + "\" class=\"toaster toaster-consent-accepted\">" + "    <img class=\"toaster-consent-accepted-logo\" src=\"" + t.m.q + "\" alt=\"Wormate.io logo\"/>" + "    <div class=\"toaster-consent-accepted-container\">" + "        <span class=\"toaster-consent-accepted-text\">" + e.B("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>" + "        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + e.B("index.game.toaster.consent.link") + "</a>" + "    </div>" + "    <div class=\"toaster-consent-close\">" + e.B("index.game.toaster.consent.iAccept") + "</div>" + "</div>"),
                this.oq = this.nq.find(".toaster-consent-close"),
                this.oq.hide(),
                this.oq.click(function() {
                    t.w.rj.jf(),
                    t.w.vp() && t.w.hq(!0, !0),
                    f.Ro()
                })
            });
            return f.prototype.bg = function() {
                return this.nq
            }
            ,
            f.prototype.wl = function() {
                var a = this;
                t.w.vp() && !t.w.Yl() ? (t.w.rj.pf(),
                e.G(function() {
                    a.oq.fadeIn(300)
                }, 2e3)) : e.G(function() {
                    a.Ro()
                }, 0)
            }
            ,
            f
        }(),
        a.jl = function() {
            var c = $("#error-gateway-connection-retry")
              , i = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo),
                c.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.Se.Bo(),
                    t.w.eh.pl(t.w.eh.Se),
                    e.G(function() {
                        var a = t.m.o + "/pub/healthCheck/ping";
                        e.na(a, function() {
                            t.w.eh.pl(t.w.eh.il)
                        }, function(a) {
                            t.w.eh.Se.zo(),
                            t.w.ud.rc(function() {
                                t.w.eh.pl(t.w.eh.Kf)
                            }, function(a) {
                                t.w.eh.pl(t.w.eh.il)
                            }, function(a, e) {
                                var f = a;
                                t.w.eh.Se.Ao(f, e)
                            })
                        })
                    }, 2e3)
                })
            });
            return i.prototype.Sa = function() {}
            ,
            i.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 500),
                f.f.g(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.h(a.Vf.bo, 50),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.h(a.Vf.ho, 50),
                f.f.h(a.Vf.io, 50),
                f.f.g(a.Vf.jo, 500),
                f.f.h(a.Vf.ko, 50)
            }
            ,
            i.prototype.wl = function() {
                t.w.rj.Ze(a.Qe.Te.Kf),
                t.w.rj.pf()
            }
            ,
            i
        }(),
        a.ll = function() {
            var c = $("#error-game-connection-retry")
              , i = e.M(a.Vf, function() {
                a.Vf.call(this, a.ul.lo),
                c.click(function() {
                    t.w.rj.jf(),
                    t.w.eh.pl(t.w.eh.Kf)
                })
            });
            return i.prototype.Sa = function() {}
            ,
            i.prototype.vl = function() {
                a.Of.lg(!0),
                f.f.g(a.Vf.Uf, 500),
                f.f.g(a.Vf._n, 1),
                f.f.h(a.Vf.ao, 50),
                f.f.h(a.Vf.bo, 50),
                f.f.h(a.Vf.co, 50),
                f.f.h(a.Vf.do, 50),
                f.f.h(a.Vf.eo, 50),
                f.f.h(a.Vf.fo, 50),
                f.f.h(a.Vf.go, 50),
                f.f.h(a.Vf.ho, 50),
                f.f.h(a.Vf.io, 50),
                f.f.h(a.Vf.jo, 50),
                f.f.g(a.Vf.ko, 500)
            }
            ,
            i.prototype.wl = function() {
                t.w.rj.Ze(a.Qe.Te.Kf),
                t.w.rj.pf()
            }
            ,
            i
        }(),
        e.pq = function() {
            function f(t) {
                var f = t + 37 * e.J(65535 * e.$());
                a.Lg.Wg(a.Lg.Ug, f)
            }
            function c() {
                return parseInt(a.Lg.Xg(a.Lg.Ug)) % 37
            }
            return function() {
                var i = c();
                i >= 0 && i < t.no.qq || (i = e.S(0, t.no.qq - 2));
                var n = {};
                n.rq = !1,
                n.sq = e.pa(),
                n.tq = 0,
                n.uq = 0,
                n.vq = null,
                n.wq = t.m.v,
                n.xq = t.m.u,
                n.Vh = null,
                n.ud = null,
                n.ff = null,
                n.rj = null,
                n.eh = null,
                n.Do = null,
                n.xk = null;
                try {
                    var h = navigator;
                    if (h) {
                        var o = h["geolocation"];
                        o && o.getCurrentPosition(function(a) {
                            var t = a["coords"];
                            "undefined" != _typeof(t) && "undefined" != _typeof(t["latitude"]) && "undefined" != _typeof(t["longitude"]) && (n.vq = a)
                        }, function(a) {})
                    }
                } catch (a) {}
                return n.Sa = function() {
                    n.Vh = new a.yq,
                    n.Vh.zq = new a.Ci(n.Vh),
                    n.ud = new a.Jb,
                    n.ff = new a.Fk,
                    n.rj = new a.Qe,
                    n.eh = new a.Ik,
                    n.Do = new a._j,
                    n.xk = new a.Bl;
                    
                    n.Vh.Aq = function() {
                        n.eh.pl(n.eh.kl)
                    }
                    ,
                    n.Vh.Bq = function() {
                        var f = n.eh.Kf.Lo();
                        
                        n.rj.Ze(a.Qe.Te.Lf),
                        n.eh.pl(n.eh.Lf.so())
                    }
                    ,
                    n.Vh.Cq = function() {
                        
                        $("body")["height"]() >= 430 && t.no.Dq.Va(),
                        n.ud.rc(null, null, null),
                        function() {
                            var a = e.J(n.Vh.Uh.qi)
                              , t = n.Vh.yi;
                            n.xk.wk() ? n.xk.qm(function() {
                                n.Eq(a, t)
                            }) : n.Eq(a, t)
                        }()
                    }
                    ,
                    n.Vh.Fq = function(a) {
                        a(n.eh.Lf.vo(), n.eh.Lf.wo())
                    }
                    ,
                    n.xk.nm(function() {
                        var t = n.eh.Al();
                        if (null != t && t.Xd === a.ul.tl && (n.rj.Ze(a.Qe.Te.Kf),
                        n.eh.pl(n.eh.Kf)),
                        n.xk.wk()) {
                            var f = n.xk.Tl();
                        }
                        n.vp() && n.xk.wk() && !n.xk.Yl() ? (n.hq(!1, !1),
                        n.eh.fl.Qo(new a.iq)) : n.Gq(!0)
                    }),
                    n.Vh.Sa(),
                    n.eh.Sa(),
                    n.Do.Sa(),
                    n.ud.Sa(),
                    n.eh.Kf.Ko(),
                    n.eh.pl(n.eh.Kf),
                    n.ff.Sa(function() {
                        n.rj.Sa(),
                        n.xk.Sa(),
                        n.ud.rc(function() {
                            n.eh.Kf.Jo(),
                            n.eh.pl(n.eh.Kf)
                        }, function(a) {
                            n.eh.Kf.Jo(),
                            n.eh.pl(n.eh.il)
                        }, function(a, t) {
                            var e = a;
                            n.eh.Se.Ao(e, t),
                            n.eh.Kf.Ao(e, t)
                        }),
                        n.vp() && !n.Yl() ? n.eh.fl.Qo(new a.iq) : n.Gq(!0)
                    })
                }
                ,
                n.Hq = function(a) {
                    if (n.xk.wk()) {
                        var f = n.xk.pm()
                          , c = t.m.o + "/pub/wuid/" + f + "/consent/change" + "?value=" + e.D(a);
                        e.na(c, function() {}, function(a) {})
                    }
                }
                ,
                n.Eo = function() {
                    i++,
                    !t.no.Iq && i >= t.no.qq ? (n.eh.pl(n.eh.ml),
                    n.rj.Ze(a.Qe.Te.Nf),
                    t.no.Jq.Ta()) : (f(i),
                    n.Kq())
                }
                ,
                n.Kq = function() {
                    if (n.Vh.Lq()) {
                        n.eh.Se.Bo(),
                        n.eh.pl(n.eh.Se);
                        var t = n.eh.Kf.Lo();
                        a.Lg.Wg(a.Lg.Rg, t);
                        var f = n.eh.Qi.Pi();
                        a.Lg.Wg(a.Lg.Ng, f);
                        var c = 0;
                        if (null != n.vq) {
                            var i = n.vq["coords"]["latitude"]
                              , h = n.vq["coords"]["longitude"];
                            c = 1 | e.S(0, e.R(32767, (i + 90) / 180 * 32768)) << 1 | e.S(0, e.R(65535, (h + 180) / 360 * 65536)) << 16
                        }
                        if (n.xk.wk())
                            n.Mq(t, c);
                        else {
                            var o = n.eh.Kf.Vl();
                            a.Lg.Wg(a.Lg.Sg, o);
                            var d = n.Do.gk(a.ik.hk);
                            a.Lg.Wg(a.Lg.Tg, d),
                            n.Nq(t, c)
                        }
                    }
                }
                ,
                n.Mq = function(f, c) {
                    var i = n.xk.pm()
                      , h = n.eh.Kf.Vl()
                      , o = n.Do.gk(a.ik.hk)
                      , d = n.Do.gk(a.ik.jk)
                      , b = n.Do.gk(a.ik.kk)
                      , r = n.Do.gk(a.ik.lk)
                      , s = n.Do.gk(a.ik.mk)
                      , u = t.m.o + "/pub/wuid/" + i + "/start" + "?gameMode=" + e.D(f) + "&gh=" + c + "&nickname=" + e.D(h) + "&skinId=" + e.D(o) + "&eyesId=" + e.D(d) + "&mouthId=" + e.D(b) + "&hatId=" + e.D(r) + "&glassesId=" + e.D(s);
                    e.na(u, function() {
                        n.eh.pl(n.eh.il)
                    }, function(a) {
                        if (1460 === a["code"]) {
                            n.eh.pl(n.eh.dl);
                            
                        } else if (1200 !== a["code"])
                            n.eh.pl(n.eh.il);
                        else {
                            var f = a["server_url"];
                            n.Vh.Oq(f, i)
                        }
                    })
                }
                ,
                n.Nq = function(f, c) {
                    var i = n.eh.Kf.Vl()
                      , h = n.Do.gk(a.ik.hk)
                      , o = t.m.o + "/pub/wuid/" + "guest" + "/start" + "?gameMode=" + e.D(f) + "&gh=" + c + "&nickname=" + e.D(i) + "&skinId=" + e.D(h);
                    e.na(o, function() {
                        n.eh.pl(n.eh.il)
                    }, function(a) {
                        if (1460 === a["code"]) {
                            n.eh.pl(n.eh.dl);
                            
                        } else if (1200 !== a["code"])
                            n.eh.pl(n.eh.il);
                        else {
                            var f = a["server_url"];
                            n.Vh.Pq(f, i, h)
                        }
                    })
                }
                ,
                n.Eq = function(t, e) {
                    var f = n.eh.Kf.Vl();
                    n.eh.Lf.uo(t, e, f),
                    n.rj.Ze(a.Qe.Te.Mf),
                    n.eh.pl(n.eh.Lf.to())
                }
                ,
                n.Ho = function() {
                    if (!n.Io())
                        return n.Do.qk();
                    var t = parseInt(a.Lg.Xg(a.Lg.Tg));
                    return null != t && n.Do.rk(t, a.ik.hk) ? t : n.Do.qk()
                }
                ,
                n.Mo = function(t) {
                    a.Lg.Wg(a.Lg.Vg, t ? "true" : "false")
                }
                ,
                n.Io = function() {
                    return a.Lg.Xg(a.Lg.Vg) === "true"
                }
                ,
                n.Gq = function(a) {
                    if (a !== n.rq) {
                        n.rq = a;
                        var c = c || {};
                        c["consented"] = a,
                        c["gdprConsent"] = a,
                        t.no.oo.Sa(),
                        t.no.Dq.Sa(),
                        t.no.Jq.Sa(function(a) {
                            a && f(i = 0),
                            n.Kq()
                        })
                    }
                }
                ,
                n.hq = function(t, f) {
                    a.Lg.Wg(a.Lg.Mg, t ? "true" : "false"),
                    f && n.Hq(t),
                    n.Gq(t)
                }
                ,
                n.Yl = function() {
                    switch (a.Lg.Xg(a.Lg.Mg)) {
                    case "true":
                        return !0;
                    default:
                        return !1
                    }
                }
                ,
                n.vp = function() {
                    try {
                        return !!a.c["isIPInEEA"] || !(null == n.vq || !t.Yg.Zg(n.vq["coords"]["latitude"], n.vq["coords"]["longitude"]))
                    } catch (a) {
                        return !0
                    }
                }
                ,
                n.qg = function() {
                    n.tq = e.pa(),
                    n.uq = n.tq - n.sq,
                    n.Vh.bi(n.tq, n.uq),
                    n.eh.bi(n.tq, n.uq),
                    n.sq = n.tq
                }
                ,
                n.kg = function() {
                    n.eh.kg()
                }
                ,
                n
            }()
        }
        ,
        a.yq = function() {
            "use strict";
            var c = {
                Qq: 0,
                Rq: 1,
                Sq: 2,
                Tq: 3
            }
              , i = {};
            return i.Uq = 30,
            i.Vq = new f.j(100),
            i.Wq = 0,
            i.Xq = 0,
            i.Yq = 0,
            i.Zq = 0,
            i.$q = 0,
            i.ar = 0,
            i.ro = c.Qq,
            i.br = null,
            i.cr = 300,
            i.Bq = function() {}
            ,
            i.Cq = function() {}
            ,
            i.Fq = function() {}
            ,
            i.Aq = function() {}
            ,
            i.Zh = new a.mh,
            i.zq = null,
            i.Uh = null,
            i.wj = {},
            i.vi = {},
            i.sj = 12.5,
            i.Wh = 40,
            i.dr = 1,
            i.er = -1,
            i.fr = 1,
            i.gr = 1,
            i.hr = -1,
            i.ir = -1,
            i.jr = 1,
            i.kr = 1,
            i.lr = -1,
            i.yi = 500,
            i.ni = 500,
            i.Zh.ph = 500,
            i.Uh = new a.bj(i.Zh),
            i.Sa = function() {
                i.Uh.ij(t.w.eh.Lf.dh),
                e.F(function() {
                    i.Fq(function(a, t) {
                        i.mr(a, t)
                    })
                }, 100)
            }
            ,
            i.Yh = function(a, t, e, f) {
                i.er = a,
                i.fr = t,
                i.gr = e,
                i.hr = f,
                i.nr()
            }
            ,
            i.or = function(a) {
                i.dr = a,
                i.nr()
            }
            ,
            i.nr = function() {
                i.ir = i.er - i.dr,
                i.jr = i.fr + i.dr,
                i.kr = i.gr - i.dr,
                i.lr = i.hr + i.dr
            }
            ,
            i.bi = function(a, t) {
                i.Yq += t,
                i.Xq -= .2 * i.Wq * t,
                i.zq.Hi(),
                null == i.br || i.ro !== c.Sq && i.ro !== c.Tq || (i.pr(a, t),
                i.Wh = 4 + i.sj * i.Uh.Jd);
                for (var f = 1e3 / e.S(1, t), n = 0, h = 0; h < i.Vq.length - 1; h++)
                    n += i.Vq[h],
                    i.Vq[h] = i.Vq[h + 1];
                i.Vq[i.Vq.length - 1] = f,
                i.Uq = (n + f) / i.Vq.length
            }
            ,
            i.qr = function(a, t) {
                return a > i.ir && a < i.jr && t > i.kr && t < i.lr
            }
            ,
            i.pr = function(a, t) {
                var e = i.Yq + i.Xq
                  , f = (e - i.Zq) / (i.$q - i.Zq);
                i.Uh.Yj(a, t),
                i.Uh.Zj(a, t, f, i.qr);
                var c = 0;
                for (var n in i.vi) {
                    var h = i.vi[n];
                    h.Yj(a, t),
                    h.Zj(a, t, f, i.qr),
                    h.lj && h.Jd > c && (c = h.Jd),
                    h.kj || !(h.Uj < .005) && h.lj || (h.hj(),
                    delete i.vi[h.ti.Ke])
                }
                i.or(3 * c);
                for (var o in i.wj) {
                    var d = i.wj[o];
                    d.Yj(a, t),
                    d.Zj(a, t, i.qr),
                    d.Cj && (d.Uj < .005 || !i.qr(d.Oj, d.Pj)) && (d.hj(),
                    delete i.wj[d.ti.Ke])
                }
            }
            ,
            i._i = function(a, e) {
                i.ro === c.Rq && (i.ro = c.Sq,
                i.Bq());
                var f = t.w.tq;
                i.ar = a,
                0 === a ? (i.Zq = f - 95,
                i.$q = f,
                i.Yq = i.Zq,
                i.Xq = 0) : (i.Zq = i.$q,
                i.$q = i.$q + e);
                var n = i.Yq + i.Xq;
                i.Wq = (n - i.Zq) / (i.$q - i.Zq)
            }
            ,
            i.Dj = function() {
                if (i.ro === c.Rq || i.ro === c.Sq) {
                    i.ro = c.Tq;
                    var a = i.br;
                    e.G(function() {
                        i.ro === c.Tq && (i.ro = c.Qq),
                        null != a && a === i.br && (i.br["close"](),
                        i.br = null)
                    }, 5e3),
                    i.Cq()
                }
            }
            ,
            i.Lq = function() {
                return i.ro !== c.Sq && (i.ro = c.Rq,
                i.zq.Gi(),
                i.wj = {},
                i.vi = {},
                i.Uh.In(),
                null != i.br && (i.br["close"](),
                i.br = null),
                !0)
            }
            ,
            i.rr = function() {
                i.br = null,
                i.zq.Gi(),
                i.ro !== c.Tq && i.Aq(),
                i.ro = c.Qq
            }
            ,
            i.Oq = function(t, f) {
                i.sr(t, function() {
                    var t = e.R(2048, f.length)
                      , c = new a.sa(6 + 2 * t)
                      , n = new a.Ba(new a.ta(c));
                    n.Ca(129),
                    n.Da(2800),
                    n.Ca(1),
                    n.Da(t);
                    for (var h = 0; h < t; h++)
                        n.Da(f.charCodeAt(h));
                    i.tr(c)
                })
            }
            ,
            i.Pq = function(t, f, c) {
                i.sr(t, function() {
                    var t = e.R(32, f.length)
                      , n = new a.sa(7 + 2 * t)
                      , h = new a.Ba(new a.ta(n));
                    h.Ca(129),
                    h.Da(2800),
                    h.Ca(0),
                    h.Da(c),
                    h.Ca(t);
                    for (var o = 0; o < t; o++)
                        h.Da(f.charCodeAt(o));
                    i.tr(n)
                })
            }
            ,
            i.tr = function(a) {
                try {
                    null != i.br && i.br["readyState"] === f.i["OPEN"] && i.br["send"](a)
                } catch (a) {
                    i.rr()
                }
            }
            ,
            i.mr = function(f, c) {
                var n = c ? 128 : 0
                  , h = e.N(f) / t.z * 128 & 127
                  , o = 255 & (n | h);
                if (i.cr !== o) {
                    var d = new a.sa(1);
                    new a.Ba(new a.ta(d)).Ca(o),
                    i.tr(d),
                    i.cr = o
                }
            }
            ,
            i.sr = function(a, t) {
                var c = i.br = new f.i(a);
                c["binaryType"] = "arraybuffer",
                c["onopen"] = function() {
                    i.br === c && t()
                }
                ,
                c["onclose"] = function() {
                    i.br === c && i.rr()
                }
                ,
                c["onerror"] = function(a) {
                    i.br === c && i.rr()
                }
                ,
                c["onmessage"] = function(a) {
                    i.br === c && i.zq.Fi(a.data)
                }
            }
            ,
            i
        }
        ,
        t.no = function(a) {
            var t = {};
            t["main"] = {
                oo: e.Ua("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
                Dq: e.Ua("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
                Jq: e.Ra(),
                qq: 4,
                Iq: !1,
                mo: !0
            },
            t["miniclip"] = {
                oo: e.Ua("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
                Dq: e.Ua("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
                Jq: e.Ra(),
                qq: 4,
                Iq: !1,
                mo: !1
            };
            var f = t[a];
            return f || (f = t["main"]),
            f
        }(a.c["ENV"]),
        addEventListener("contextmenu", function(a) {
            return a.preventDefault(),
            a.stopPropagation(),
            !1
        }),
        e.L("https://accounts.google.com/gsi/client", null, function() {
            var c = e.b("google")["accounts"]["id"];
            c["initialize"]({
                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com",
                callback: function(a) {
                    GoogleAuth.pendingSuccess && GoogleAuth.pendingSuccess(a)
                },
                auto_select: !1
            });
            var n = $("#popup-login-gg");
            n["css"]("position", "relative");
            var i = a.d["createElement"]("div");
            i["id"] = "gg-real-btn",
            i["style"]["cssText"] = "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.0001;overflow:hidden;z-index:9999;",
            n["append"](i),
            c["renderButton"](i, {
                width: 240
            }),
            GoogleAuth = {
                lastToken: null
            }
        }),
        function() {
            t.w = e.pq(),
            t.w.Sa()
        }(),
        function() {
            function a() {
                requestAnimationFrame(a),
                t.w.qg()
            }
            a()
        }(),
        function() {
            function f() {
                var f = c["width"]()
                  , o = c["height"]()
                  , d = i["outerWidth"]()
                  , b = i["outerHeight"]()
                  , r = n["outerHeight"]()
                  , s = h["outerHeight"]()
                  , u = e.R(1, e.R((o - s - r) / b, f / d))
                  , p = "translate(-50%, -50%) scale(".concat(u, ")");
                i["css"]("-webkit-transform", p),
                i["css"]("-moz-transform", p),
                i["css"]("-ms-transform", p),
                i["css"]("-o-transform", p),
                i["css"]("transform", p),
                t.w.kg(),
                a.c["scrollTo"](0, 1)
            }
            var c = $("body")
              , i = $("#stretch-box")
              , n = $("#markup-header")
              , h = $("#markup-footer");
            f(),
            $(a.c)["resize"](f)
        }()
    })
}();