"use strict";
var e = require("react");
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
            c =
                "string" == typeof t.container
                    ? document.querySelector(t.container)
                    : document.getElementsByTagName("head")[0];
        if (o) {
            var l = r.indexOf(c);
            -1 === l && ((l = r.push(c) - 1), (a[l] = {})),
                (n = a[l] && a[l][i] ? a[l][i] : (a[l][i] = u()));
        } else n = u();
        65279 === e.charCodeAt(0) && (e = e.substring(1)),
            n.styleSheet
                ? (n.styleSheet.cssText += e)
                : n.appendChild(document.createTextNode(e));
    }
    function u() {
        var e = document.createElement("style");
        if ((e.setAttribute("type", "text/css"), t.attributes))
            for (var n = Object.keys(t.attributes), r = 0; r < n.length; r++)
                e.setAttribute(n[r], t.attributes[n[r]]);
        var a = "prepend" === i ? "afterbegin" : "beforeend";
        return c.insertAdjacentElement(a, e), e;
    }
})(".mrl-container {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n", {});
var i = {
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
                    var c = function () {
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
                        setInterval(c, 30);
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
module.exports = i;
