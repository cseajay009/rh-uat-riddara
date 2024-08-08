"use strict";
$(function() {
    $(window).height();
    var e = $(window).width(),
        o = 0,
        a = $("html, body"),
        n = (0 < $("#scroll_top").length && $("#scroll_top").on("click", function() {
            return a.animate({
                scrollTop: 0
            }, 600), !1
        }), 0 < $(".header-collapse").length && e < 1024 && ($(".header-collapse").on("click", function() {
            $("body").addClass("show-mobile")
        }), $(".header-mobile-close").on("click", function() {
            $("body").hasClass("show-mobile") && $("body").removeClass("show-mobile")
        })), 0 < $(".header-language-switcher").length && 1023 < e && ($(".header-language-switcher").parents(".header-right-container").on("mouseover", function() {
            $(this).children(".header-language-list").addClass("show"), $(this).children(".header-language-switcher").children(".language-arrow").addClass("show")
        }), $(".header-language-switcher").parents(".header-right-container").on("mouseout", function() {
            $(this).children(".header-language-list").hasClass("show") && ($(this).children(".header-language-list").removeClass("show"), $(this).children(".header-language-switcher").children(".language-arrow").hasClass("show")) && $(this).children(".header-language-switcher").children(".language-arrow").removeClass("show")
        })), function() {
            $(".scrollBox").each(function() {
                var e = $(window).height();
                $(this).offset().top - e <= o ? $(this).addClass("on") : $(this).removeClass("on")
            }), $(window).resize(function() {
                $(window).height(), e = $(window).width(), o = $(window).scrollTop()
            }), $(window).scroll(function() {
                o = $(window).scrollTop(), 0 < $(".header-language-switcher").length && $(".header-language-list").hasClass("show") && $(".header-language-list").removeClass("show"), e < 1024 && (o > $($(".site-main").children()[0]).eq(0).height() / 2 ? $("#scroll_top").show() : $("#scroll_top").hide()), $(".scrollBox").each(function() {
                    var e = .7 * $(window).height();
                    $(this).offset().top - e <= o ? $(this).addClass("on") : $(this).removeClass("on")
                })
            }), 0 < $(".network_s1").length && $(".network_s1").addClass("on"), $(".header").addClass("on")
        });

    function s() {
        n()
    }
    var t, l = $(".load_img img[data-src!='']"),
        i = function(e, o, a, n) {
            $(n).attr("src", a).remove("data-src");
            n = Math.round(e / o * 100);
            $(".load .heng").css({
                width: n + "%"
            }), o - 1 <= e && s()
        },
        h = void 0,
        r = void 0,
        d = 0,
        c = 0,
        g = "[object Object]" === Object.prototype.toString.call(l);
    for (t in l = g ? l.get() : l) ! function(e, o) {
        var a = new Image;
        a.onload = function() {
            d++, i && i(d, l.length, e, o), h && d == l.length && h(c), a.onload = null
        }, a.onerror = function() {
            d++, c++, r && r(d, l.length, e, o)
        }, a.src = e
    }(g ? $(l[t]).attr("data-src") : l[t], l[t]);
    setTimeout(function() {
        s()
    }, 1200), s()
});