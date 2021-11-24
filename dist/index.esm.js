import e, { useRef as t, useEffect as n } from "react";
var r = [],
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
                (n = a[l] && a[l][i] ? a[l][i] : (a[l][i] = s()));
        } else n = s();
        65279 === e.charCodeAt(0) && (e = e.substring(1)),
            n.styleSheet
                ? (n.styleSheet.cssText += e)
                : n.appendChild(document.createTextNode(e));
    }
    function s() {
        var e = document.createElement("style");
        if ((e.setAttribute("type", "text/css"), t.attributes))
            for (var n = Object.keys(t.attributes), r = 0; r < n.length; r++)
                e.setAttribute(n[r], t.attributes[n[r]]);
        var a = "prepend" === i ? "afterbegin" : "beforeend";
        return c.insertAdjacentElement(a, e), e;
    }
})(".mrl-container {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n", {});
var i = {
    MatrixRainingLetters: function (r) {
        var a = t(),
            i = "mrl-" + r.key,
            o = "mrl-container " + r.custom_class;
        return (
            n(function () {
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
                })(a);
            }),
            e.createElement(
                e.Fragment,
                null,
                e.createElement("canvas", { key: i, className: o, ref: a })
            )
        );
    },
};
export { i as default };
