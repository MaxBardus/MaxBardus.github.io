

function main() {
   
    
}! function t(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("Barba", [], n) : "object" == typeof exports ? exports.Barba = n() : e.Barba = n()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "http://localhost:8080/dist", e(0)
    }([function(t, e, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        var i = {
            version: "1.0.0",
            BaseTransition: n(4),
            BaseView: n(6),
            BaseCache: n(8),
            Dispatcher: n(7),
            HistoryManager: n(9),
            Pjax: n(10),
            Prefetch: n(13),
            Utils: n(5)
        };
        t.exports = i
    }, function(t, e, n) {
        (function(e) {
            ! function(n) {
                function i() {}

                function o(t, e) {
                    return function() {
                        t.apply(e, arguments)
                    }
                }


           

              
                function l(t, e) {
                    t._state = 2, t._value = e, c(t)
                }

                function c(t) {
                    2 === t._state && 0 === t._deferreds.length && f(function() {
                        t._handled || p(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++) s(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function u(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function h(t, e) {
                    var n = !1;
                    try {
                        t(function(t) {
                            n || (n = !0, a(e, t))
                        }, function(t) {
                            n || (n = !0, l(e, t))
                        })
                    } catch (t) {
                        if (n) return;
                        n = !0, l(e, t)
                    }
                }
                var d = setTimeout,
                    f = "function" == typeof e && e || function(t) {
                        d(t, 0)
                    },
                    p = function t(e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    };
                r.prototype.catch = function(t) {
                    return this.then(null, t)
                }, r.prototype.then = function(t, e) {
                    var n = new this.constructor(i);
                    return s(this, new u(t, e, n)), n
                }, r.all = function(t) {
                    var e = Array.prototype.slice.call(t);
                    return new r(function(t, n) {
                        function i(r, s) {
                            try {
                                if (s && ("object" == typeof s || "function" == typeof s)) {
                                    var a = s.then;
                                    if ("function" == typeof a) return void a.call(s, function(t) {
                                        i(r, t)
                                    }, n)
                                }
                                e[r] = s, 0 == --o && t(e)
                            } catch (t) {
                                n(t)
                            }
                        }
                        if (0 === e.length) return t([]);
                        for (var o = e.length, r = 0; r < e.length; r++) i(r, e[r])
                    })
                }, r.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
                        e(t)
                    })
                }, r.reject = function(t) {
                    return new r(function(e, n) {
                        n(t)
                    })
                }, r.race = function(t) {
                    return new r(function(e, n) {
                        for (var i = 0, o = t.length; i < o; i++) t[i].then(e, n)
                    })
                }, r._setImmediateFn = function t(e) {
                    f = e
                }, r._setUnhandledRejectionFn = function t(e) {
                    p = e
                }, void 0 !== t && t.exports ? t.exports = r : n.Promise || (n.Promise = r)
            }(this)
        }).call(e, n(2).setImmediate)
    }, function(t, e, n) {
        (function(t, i) {
            function o(t, e) {
                this._id = t, this._clearFn = e
            }
            var r = n(3).nextTick,
                s = Function.prototype.apply,
                a = Array.prototype.slice,
                l = {},
                c = 0;
            e.setTimeout = function() {
                return new o(s.call(setTimeout, window, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new o(s.call(setInterval, window, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function e() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, e.setImmediate = "function" == typeof t ? t : function(t) {
                var n = c++,
                    i = !(arguments.length < 2) && a.call(arguments, 1);
                return l[n] = !0, r(function o() {
                    l[n] && (i ? t.apply(null, i) : t.call(null), e.clearImmediate(n))
                }), n
            }, e.clearImmediate = "function" == typeof i ? i : function(t) {
                delete l[t]
            }
        }).call(e, n(2).setImmediate, n(2).clearImmediate)
    }, function(t, e) {
        function n() {
            u && h && (u = !1, h.length ? c = h.concat(c) : d = -1, c.length && i())
        }


    

        
        var c = [],
            u = !1,
            h, d = -1;
        s.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new o(t, e)), 1 !== c.length || u || a(i, 0)
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = r, s.addListener = r, s.once = r, s.off = r, s.removeListener = r, s.removeAllListeners = r, s.emit = r, s.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function() {
            return "/"
        }, s.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        var i = n(5),
            o = {
                oldContainer: void 0,
                newContainer: void 0,
                newContainerLoading: void 0,
                extend: function(t) {
                    return i.extend(this, t)
                },
                init: function(t, e) {
                    var n = this;
                    return this.oldContainer = t, this._newContainerPromise = e, this.deferred = i.deferred(), this.newContainerReady = i.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(t) {
                        n.newContainer = t, n.newContainerReady.resolve()
                    }), this.deferred.promise
                },
                done: function() {
                    this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                },
                start: function() {}
            };
        t.exports = o
    }, function(t, e) {
        var n = {
            getCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function(t) {
                return t.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function(t) {
                var e = this.deferred(),
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function() {
                    if (4 === n.readyState) return 200 === n.status ? e.resolve(n.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                }, n.ontimeout = function() {
                    return e.reject(new Error("xhr: Timeout exceeded"))
                }, n.open("GET", t), n.timeout = this.xhrTimeout, n.setRequestHeader("x-barba", "yes"), n.send(), e.promise
            },
            extend: function(t, e) {
                var n = Object.create(t);
                for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                return n
            },
            deferred: function() {
                return new function() {
                    this.resolve = null, this.reject = null, this.promise = new Promise(function(t, e) {
                        this.resolve = t, this.reject = e
                    }.bind(this))
                }
            },
            getPort: function(t) {
                var e = void 0 !== t ? t : window.location.port,
                    n = window.location.protocol;
                return "" != e ? parseInt(e) : "http:" === n ? 80 : "https:" === n ? 443 : void 0
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var i = n(7),
            o = n(5),
            r = {
                namespace: null,
                extend: function(t) {
                    return o.extend(this, t)
                },
                init: function() {
                    var t = this;
                    i.on("initStateChange", function(e, n) {
                        n && n.namespace === t.namespace && t.onLeave()
                    }), i.on("newPageReady", function(e, n, i) {
                        t.container = i, e.namespace === t.namespace && t.onEnter()
                    }), i.on("transitionCompleted", function(e, n) {
                        e.namespace === t.namespace && t.onEnterCompleted(), n && n.namespace === t.namespace && t.onLeaveCompleted()
                    })
                },
                onEnter: function() {},
                onEnterCompleted: function() {},
                onLeave: function() {},
                onLeaveCompleted: function() {}
            };
        t.exports = r
    }, function(t, e) {
        var n = {
            events: {},
            on: function(t, e) {
                this.events[t] = this.events[t] || [], this.events[t].push(e)
            },
            off: function(t, e) {
                t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
            },
            trigger: function(t) {
                if (t in this.events != !1)
                    for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var i = n(5),
            o = {
                data: {},
                extend: function(t) {
                    return i.extend(this, t)
                },
                set: function(t, e) {
                    this.data[t] = e
                },
                get: function(t) {
                    return this.data[t]
                },
                reset: function() {
                    this.data = {}
                }
            };
        t.exports = o
    }, function(t, e) {
        var n = {
            history: [],
            add: function(t, e) {
                e || (e = void 0), this.history.push({
                    url: t,
                    namespace: e
                })
            },
            currentStatus: function() {
                return this.history[this.history.length - 1]
            },
            prevStatus: function() {
                var t = this.history;
                return t.length < 2 ? null : t[t.length - 2]
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var i = n(5),
            o = n(7),
            r = n(11),
            s = n(8),
            a = n(9),
            l = n(12),
            c = {
                Dom: l,
                History: a,
                Cache: s,
                cacheEnabled: !0,
                transitionProgress: !1,
                ignoreClassLink: "no-barba",
                start: function() {
                    this.init()
                },
                init: function() {
                    var t = this.Dom.getContainer();
                    this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), o.trigger("initStateChange", this.History.currentStatus()), o.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML), o.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                },
                bindEvents: function() {
                    document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                },
                getCurrentUrl: function() {
                    return i.cleanLink(i.getCurrentUrl())
                },
                goTo: function(t) {
                    window.history.pushState(null, null, t), this.onStateChange()
                },
                forceGoTo: function(t) {
                    window.location = t
                },
                load: function(t) {
                    var e = i.deferred(),
                        n = this,
                        o;
                    return o = this.Cache.get(t), o || (o = i.xhr(t), this.Cache.set(t, o)), o.then(function(t) {
                        var i = n.Dom.parseResponse(t);
                        n.Dom.putContainer(i), n.cacheEnabled || n.Cache.reset(), e.resolve(i)
                    }, function() {
                        n.forceGoTo(t), e.reject()
                    }), e.promise
                },
                getHref: function(t) {
                    if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
                },
                onLinkClick: function(t) {
                    for (var e = t.target; e && !this.getHref(e);) e = e.parentNode;
                    if (this.preventCheck(t, e)) {
                        t.stopPropagation(), t.preventDefault(), o.trigger("linkClicked", e, t);
                        var n = this.getHref(e);
                        this.goTo(n)
                    }
                },
                preventCheck: function(t, e) {
                    if (!window.history.pushState) return !1;
                    var n = this.getHref(e);
                    return !(!e || !n) && (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) && ((!e.target || "_blank" !== e.target) && (window.location.protocol === e.protocol && window.location.hostname === e.hostname && (i.getPort() === i.getPort(e.port) && (!(n.indexOf("#") > -1) && ((!e.getAttribute || "string" != typeof e.getAttribute("download")) && (i.cleanLink(n) != i.cleanLink(location.href) && !e.classList.contains(this.ignoreClassLink))))))))
                },
                getTransition: function() {
                    return r
                },
                onStateChange: function() {
                    var t = this.getCurrentUrl();
                    if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                    this.History.add(t);
                    var e = this.load(t),
                        n = Object.create(this.getTransition());
                    this.transitionProgress = !0, o.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                    var i = n.init(this.Dom.getContainer(), e);
                    e.then(this.onNewContainerLoaded.bind(this)), i.then(this.onTransitionEnd.bind(this))
                },
                onNewContainerLoaded: function(t) {
                    this.History.currentStatus().namespace = this.Dom.getNamespace(t), o.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
                },
                onTransitionEnd: function() {
                    this.transitionProgress = !1, o.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                }
            };
        t.exports = c
    }, function(t, e, n) {
        var i = n(4),
            o = i.extend({
                start: function() {
                    this.newContainerLoading.then(this.finish.bind(this))
                },
                finish: function() {
                    document.body.scrollTop = 0, this.done()
                }
            });
        t.exports = o
    }, function(t, e) {
        var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function(t) {
                this.currentHTML = t;
                var e = document.createElement("div");
                e.innerHTML = t;
                var n = e.querySelector("title");
                return n && (document.title = n.textContent), this.getContainer(e)
            },
            getWrapper: function() {
                var t = document.getElementById(this.wrapperId);
                if (!t) throw new Error("Barba.js: wrapper not found!");
                return t
            },
            getContainer: function(t) {
                if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                var e = this.parseContainer(t);
                if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function(t) {
                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function(t) {
                t.style.visibility = "hidden", this.getWrapper().appendChild(t)
            },
            parseContainer: function(t) {
                return t.querySelector("." + this.containerClass)
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var i = n(5),
            o = n(10),
            r = {
                ignoreClassLink: "no-barba-prefetch",
                init: function() {
                    if (!window.history.pushState) return !1;
                    document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))
                },
                onLinkEnter: function(t) {
                    for (var e = t.target; e && !o.getHref(e);) e = e.parentNode;
                    if (e && !e.classList.contains(this.ignoreClassLink)) {
                        var n = o.getHref(e);
                        if (o.preventCheck(t, e) && !o.Cache.get(n)) {
                            var r = i.xhr(n);
                            o.Cache.set(n, r)
                        }
                    }
                }
            };
        t.exports = r
    }])
}),

function($) {
    $ && ($.fn.headroom = function(t) {
        return this.each(function() {
            var e = $(this),
                n = e.data("headroom"),
                i = "object" == typeof t && t;
            i = $.extend(!0, {}, Headroom.options, i), n || (n = new Headroom(this, i), n.init(), e.data("headroom", n)), "string" == typeof t && (n[t](), "destroy" === t && e.removeData("headroom"))
        })
    }, $("[data-headroom]").each(function() {
        var t = $(this);
        t.headroom(t.data())
    }))
}
(window.Zepto || window.jQuery),
function($) {   

}(jQuery);






var faqView = Barba.BaseView.extend({
    namespace: "faq",
    onEnterCompleted: function() {
        faq()
    }
});
faqView.init(), $(".header").clone().appendTo("#headroom"), $("#headroom").headroom({
    offset: 600,
    tolerance: {
        up: 20,
        down: 0
    }
}), $(".mobile-menu-button").click(function() {
    $("body").addClass("menu-open"), $(".mobile-menu").fadeIn(300).addClass("in")
}), $(".mobile-menu-close").click(function() {
    $("body").removeClass("menu-open"), $(".mobile-menu").fadeOut(300).removeClass("in")
}), $("[data-expand]").click(function() {
    var t = $(this).attr("data-expand");
    $(this).toggleClass("collapsed"), $(t).slideToggle(300).toggleClass("expand")
});
