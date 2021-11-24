!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t(require("react")))
        : "function" == typeof define && define.amd
        ? define(["react"], t)
        : ((e = "undefined" != typeof globalThis ? globalThis : e || self)[
              "react-mdr"
          ] = t(e.React));
})(this, function (e) {
    "use strict";
    function t(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var n = t(e),
        r = [],
        a = [];
    !(function (e, t) {
        if (e && "undefined" != typeof document) {
            var n,
                i = !0 === t.prepend ? "prepend" : "append",
                o = !0 === t.singleTag,
                f =
                    "string" == typeof t.container
                        ? document.querySelector(t.container)
                        : document.getElementsByTagName("head")[0];
            if (o) {
                var c = r.indexOf(f);
                -1 === c && ((c = r.push(f) - 1), (a[c] = {})),
                    (n = a[c] && a[c][i] ? a[c][i] : (a[c][i] = l()));
            } else n = l();
            65279 === e.charCodeAt(0) && (e = e.substring(1)),
                n.styleSheet
                    ? (n.styleSheet.cssText += e)
                    : n.appendChild(document.createTextNode(e));
        }
        function l() {
            var e = document.createElement("style");
            if ((e.setAttribute("type", "text/css"), t.attributes))
                for (
                    var n = Object.keys(t.attributes), r = 0;
                    r < n.length;
                    r++
                )
                    e.setAttribute(n[r], t.attributes[n[r]]);
            var a = "prepend" === i ? "afterbegin" : "beforeend";
            return f.insertAdjacentElement(a, e), e;
        }
    })(".mrl-container {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n", {});
    return {
        MatrixRainingLetters: function (t) {
            var r = e.useRef(),
                a = "mrl-" + t.key,
                i = "mrl-container " + t.custom_class;
            return (
                e.useEffect(function () {
                    return (function (e) {
                        var t = e.current,
                            n = t.getContext("2d");
                        (t.width = window.innerWidth),
                            (t.height = window.innerHeight);
                        for (
                            var r =
                                    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                                a = t.width / 16,
                                i = [],
                                o = 0;
                            o < a;
                            o++
                        )
                            i[o] = 1;
                        var f = function () {
                            (n.fillStyle = "rgba(0, 0, 0, 0.05)"),
                                n.fillRect(0, 0, t.width, t.height),
                                (n.fillStyle = "#0F0"),
                                (n.font = "16px monospace");
                            for (var e = 0; e < i.length; e++) {
                                var a = r.charAt(
                                    Math.floor(Math.random() * r.length)
                                );
                                n.fillText(a, 16 * e, 16 * i[e]),
                                    16 * i[e] > t.height &&
                                        Math.random() > 0.975 &&
                                        (i[e] = 0),
                                    i[e]++;
                            }
                        };
                        return function () {
                            setInterval(f, 30);
                        };
                    })(r);
                }),
                n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement("canvas", {
                        key: a,
                        className: i,
                        ref: r,
                    })
                )
            );
        },
    };
});
