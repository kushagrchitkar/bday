(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [42], {
        611: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 845))
        },
        845: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s(7437),
                r = s(2265),
                l = s(9405),
                a = s(1396),
                i = s.n(a);

            function c(e) {
                let {
                    data: t
                } = e;
                return (0, n.jsxs)("div", {
                    className: "row-complete-wrapper level-" + t.level,
                    children: [(0, n.jsx)("div", {
                        className: "complete-header",
                        children: (0, n.jsx)("h3", {
                            children: t.title
                        })
                    }), (0, n.jsx)("p", {
                        children: t.members.join(", ")
                    })]
                })
            }

            function o(e) {
                let {
                    items: t,
                    itemSelected: s
                } = e;
                return (0, n.jsx)("div", {
                    className: "row-wrapper",
                    children: t.map(e => (0, n.jsx)(u, {
                        data: e,
                        onSelect: () => s(e.id)
                    }, e.id))
                })
            }

            function u(e) {
                let {
                    data: t,
                    onSelect: s
                } = e;
                return (0, n.jsx)("div", {
                    className: "item" + (t.selected ? " selected" : "") + (t.mistake ? " invalid-shake" : ""),
                    onClick: e => {
                        s()
                    },
                    children: t.title
                })
            }

            function d(e) {
                let {
                    state: t,
                    mistakes: s,
                    title: l,
                    history: a,
                    slug: i,
                    popup: c,
                    setPopup: o
                } = e, [u, d] = (0, r.useState)(0), h = ["yellow", "green", "blue", "purple"], m = ["\uD83D\uDFE8", "\uD83D\uDFE9", "\uD83D\uDFE6", "\uD83D\uDFEA"];
                return (0, n.jsx)("div", {
                    id: "popup",
                    className: c ? "show" : "",
                    children: (0, n.jsxs)("div", {
                        id: "popup-content",
                        children: [(0, n.jsx)("div", {
                            className: "close-x",
                            onClick: () => o(!1)
                        }), 2 === t ? (0, n.jsx)(n.Fragment, {
                            children: 4 === s ? (0, n.jsx)("h2", {
                                children: "Perfect!"
                            }) : (0, n.jsx)("h2", {
                                children: "Great!"
                            })
                        }) : (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("h2", {
                                children: "Next Time!"
                            })
                        }), (0, n.jsxs)("h3", {
                            children: ["Connections: ", l]
                        }), (0, n.jsx)("div", {
                            id: "emoji-recap",
                            children: a.map((e, t) => (0, n.jsx)("div", {
                                className: "emoji-row",
                                children: e.map((e, t) => (0, n.jsx)("div", {
                                    className: "emoji " + h[e.level]
                                }, t))
                            }, t))
                        }), (0, n.jsx)("button", {
                            onClick: () => {
                                let e = "Connections: " + l + "\n";
                                for (let t of a) {
                                    for (let s of t) e += m[s.level];
                                    e += "\n"
                                }
                                e += "https://custom-connections-game.vercel.app/" + i, navigator.share && navigator.canShare({
                                    text: e
                                }) ? navigator.share({
                                    text: e
                                }) : (navigator.clipboard.writeText(e), d(1), setTimeout(() => d(0), 1e3))
                            },
                            children: 0 === u ? "Share Your Results" : "Copied to Clipboard"
                        })]
                    })
                })
            }

            function h(e) {
                let t = e.length,
                    s;
                for (; t > 0;) s = Math.floor(Math.random() * t), t--, [e[t], e[s]] = [e[s], e[t]];
                return e
            }
            s(7714);
            var m = function(e) {
                    let {
                        gameData: t,
                        slug: s
                    } = e, [l, a] = (0, r.useState)([]), [u, m] = (0, r.useState)([]), [f, p] = (0, r.useState)([]), [j, x] = (0, r.useState)(0), [v, g] = (0, r.useState)(4), [b, k] = (0, r.useState)(0), [N, w] = (0, r.useState)(!1), [S, C] = (0, r.useState)(""), [E, D] = (0, r.useState)(!1), [F, y] = (0, r.useState)(0);
                    (0, r.useEffect)(() => {
                        a(T(t.categories))
                    }, [t]);
                    let T = e => {
                            let t = [],
                                s = 0;
                            return e.forEach(e => {
                                e.members.forEach(n => {
                                    let r = {};
                                    r.level = e.level, r.title = n, r.selected = !1, r.id = s, t.push(r), s++
                                })
                            }), h(t), t
                        },
                        _ = e => {
                            let t = [...l],
                                s = t.find(t => t.id === e);
                            s && (!(j >= 4) || s.selected) && (s.selected ? x(j - 1) : x(j + 1), s.selected = !s.selected, a(t))
                        },
                        I = () => {
                            a([...l].map(e => (e.mistake = !1, e))), v <= 1 && (k(1), A(F)), g(v - 1), C(""), w(!1)
                        };
                    (0, r.useEffect)(() => {
                        u.length >= 4 ? O() : 1 === b && setTimeout(() => A(F), 1e3)
                    }, [u]);
                    let A = e => {
                            if (y(F + 1), 0 > u.findIndex(t => t.level === e)) {
                                let s = [...l];
                                s.sort((t, s) => t.level === e ? -1 : s.level === e ? 1 : 0);
                                for (let e = 0; e < 4; e++) s.shift();
                                m([...u, t.categories[e]]), a(s)
                            } else A(e + 1)
                        },
                        O = () => {
                            0 === b && k(2), setTimeout(() => {
                                D(!0)
                            }, 1e3)
                        };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            id: "toast",
                            className: S.length > 0 ? "show" : "",
                            children: (0, n.jsx)("p", {
                                children: S
                            })
                        }), (0, n.jsx)(d, {
                            state: b,
                            mistakes: v,
                            title: t.title,
                            history: f,
                            slug: s,
                            popup: E,
                            setPopup: D
                        }), (0, n.jsxs)("div", {
                            className: "header",
                            children: [(0, n.jsx)("div", {
                                className: "title",
                                children: (0, n.jsx)("h1", {
                                    children: "Connections"
                                })
                            }), (0, n.jsx)("div", {
                                className: "nav-button",
                                children: (0, n.jsx)(i(), {
                                    href: "/",
                                    children: "New game"
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "game-title",
                            children: [(0, n.jsx)("h2", {
                                children: t.title
                            }), (0, n.jsx)("h3", {
                                children: t.author ? (0, n.jsxs)(n.Fragment, {
                                    children: ["by ", t.author.link ? (0, n.jsx)("a", {
                                        href: t.author.link,
                                        target: "_blank",
                                        children: t.author.name
                                    }) : t.author.name]
                                }) : ""
                            })]
                        }), (0, n.jsx)("p", {
                            children: "Create four groups of four!"
                        }), (0, n.jsxs)("div", {
                            className: "connections-wrapper",
                            children: [u.map((e, t) => (0, n.jsx)(c, {
                                data: e
                            }, t)), (() => {
                                let e = [];
                                for (let t = 0; t < l.length; t += 4) e.push({
                                    items: l.slice(t, t + 4)
                                });
                                return e
                            })().map((e, t) => (0, n.jsx)(o, {
                                items: e.items,
                                itemSelected: _
                            }, t))]
                        }), 0 === b ? (0, n.jsxs)("div", {
                            className: "mistakes-container",
                            children: [(0, n.jsx)("p", {
                                children: "Mistakes remaining:"
                            }), (0, n.jsx)("div", {
                                className: "bubbles-container",
                                children: (() => {
                                    let e = [];
                                    for (let t = 0; t < v; t++) e.push("bubble");
                                    return e
                                })().map((e, t) => (0, n.jsx)("div", {
                                    className: "bubble"
                                }, t))
                            })]
                        }) : (0, n.jsx)(n.Fragment, {}), (0, n.jsx)("div", {
                            className: "buttons-wrapper",
                            children: 0 === b ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("button", {
                                    onClick: () => {
                                        a(h([...l]))
                                    },
                                    children: "Shuffle"
                                }), (0, n.jsx)("button", {
                                    id: "deselect-all-button",
                                    onClick: () => {
                                        let e = [...l];
                                        e.forEach(e => e.selected = !1), a(e), x(0)
                                    },
                                    children: "Deselect All"
                                }), (0, n.jsx)("button", {
                                    id: "submit-button",
                                    disabled: 4 !== j,
                                    onClick: () => {
                                        if (N) return;
                                        w(!0);
                                        let e = [],
                                            s = [0, 0, 0, 0],
                                            n = !0,
                                            r = -1,
                                            i = [...l];
                                        if (i.forEach(t => {
                                            t.selected && (r < 0 ? r = t.level : t.level !== r && (n = !1), s[t.level]++, e.push(t))
                                        }), n) {
                                            m([...u, t.categories[r]]), i.sort((e, t) => e.selected ? -1 : t.selected ? 1 : 0);
                                            for (let e = 0; e < 4; e++) i.shift();
                                            a(i), x(0), w(!1)
                                        } else {
                                            let e = !1;
                                            s.forEach(t => {
                                                3 === t && (e = !0)
                                            }), i.forEach(e => {
                                                e.selected && (e.mistake = !0)
                                            }), a(i), e && C("One away!"), setTimeout(() => I(), 1e3)
                                        }
                                        p([...f, e])
                                    },
                                    children: "Submit"
                                })]
                            }) : (0, n.jsx)("button", {
                                onClick: () => D(!0),
                                children: "View Results"
                            })
                        })]
                    })
                },
                f = function(e) {
                    let {
                        params: {
                            slug: t
                        }
                    } = e, [s, a] = (0, r.useState)(!0), [c, o] = (0, r.useState)(null);
                    (0, r.useEffect)(() => {
                        u()
                    }, [o]);
                    let u = async () => {
                        let e = await (0, l.yO)(t);
                        e.result && (console.log(e.result), o(e.result), document.title = "Connections: " + e.result.title), a(!1)
                    };
                    return (0, n.jsx)("div", {
                        className: "App",
                        children: s ? (0, n.jsx)("div", {
                            className: "page-wrapper",
                            children: (0, n.jsx)("p", {
                                children: "Loading..."
                            })
                        }) : (0, n.jsx)(n.Fragment, {
                            children: c ? (0, n.jsx)(m, {
                                gameData: c,
                                slug: t
                            }) : (0, n.jsx)("div", {
                                className: "page-wrapper",
                                children: (0, n.jsxs)("div", {
                                    className: "error-page",
                                    children: [(0, n.jsx)("h1", {
                                        children: "Sorry, that game could not be found."
                                    }), (0, n.jsx)("div", {
                                        className: "nav-button",
                                        children: (0, n.jsx)(i(), {
                                            href: "/",
                                            children: "Create a game"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        9405: function(e, t, s) {
            "use strict";
            s.d(t, {
                s2: function() {
                    return c
                },
                yO: function() {
                    return u
                },
                Bi: function() {
                    return o
                }
            });
            var n = s(4086),
                r = s(994);
            let l = (0, r.ZF)({
                    apiKey: "AIzaSyBvrQH0JPqTgPmnpUDCfAKvkNs3rS3wfk4",
                    authDomain: "custom-connections-77f94.firebaseapp.com",
                    projectId: "custom-connections-77f94",
                    storageBucket: "custom-connections-77f94.appspot.com",
                    messagingSenderId: "945333365190",
                    appId: "1:945333365190:web:1f1d9c778e59e8b2ccaac7",
                    measurementId: "G-1ZCXY945VC"
                }),
                a = (0, n.ad)(l),
                i = (0, n.hJ)(a, "connections");
            async function c(e) {
                let t, s;
                return t = await (0, n.ET)(i, e).catch(e => s = e), s && console.log(s), {
                    result: t,
                    error: s
                }
            }
            async function o(e, t) {
                await (0, n.pl)((0, n.JU)(a, "connections", e), t)
            }
            async function u(e) {
                let t = (0, n.JU)(a, "connections", e).withConverter(d),
                    s = await (0, n.QT)(t),
                    r = s.data();
                return r ? {
                    result: r,
                    error: ""
                } : {
                    result: null,
                    error: "Error."
                }
            }
            let d = {
                toFirestore: e => {
                    let t = {
                        categories: e.categories,
                        title: e.title
                    };
                    return e.author && (t.author = {
                        name: e.author.name,
                        link: e.author.link
                    }), t
                },
                fromFirestore: (e, t) => {
                    let s = e.data(t),
                        n = {
                            categories: s.categories,
                            title: s.title,
                            author: s.author
                        };
                    if (s.author) {
                        let e = {
                            name: s.author.name
                        };
                        s.author.link && (e.link = s.author.link), n.author = e
                    }
                    return n
                }
            }
        },
        7714: function() {}
    },
    function(e) {
        e.O(0, [358, 92, 396, 971, 472, 744], function() {
            return e(e.s = 611)
        }), _N_E = e.O()
    }
]);