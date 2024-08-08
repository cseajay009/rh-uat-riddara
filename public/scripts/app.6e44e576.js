(function(e) {
	function t(t) {
		for (var o, a, s = t[0], c = t[1], l = t[2], u = 0, d = []; u < s.length; u++) a = s[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]), r[a] = 0;
		for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
		f && f(t);
		while (d.length) d.shift()();
		return i.push.apply(i, l || []), n()
	}

	function n() {
		for (var e, t = 0; t < i.length; t++) {
			for (var n = i[t], o = !0, a = 1; a < n.length; a++) {
				var s = n[a];
				0 !== r[s] && (o = !1)
			}
			o && (i.splice(t--, 1), e = c(c.s = n[0]))
		}
		return e
	}
	var o = {},
		a = {
			app: 0
		},
		r = (a = {
			app: 0
		}, {
			app: 0
		}),
		i = [];

	function s(e) {
		return c.p + "static/js/" + ({} [e] || e) + "." + {
			"chunk-2d354ce6": "c7dfa611",
			"chunk-628b8d12": "7456cb36"
		} [e] + ".js"
	}

	function c(t) {
		if (o[t]) return o[t].exports;
		var n = o[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
	}
	c.e = function(e) {
		var t = [],
			n = {
				"chunk-2d354ce6": 1,
				"chunk-628b8d12": 1
			};
		a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
			for (var o = "static/css/" + ({} [e] || e) + "." + {
					"chunk-2d354ce6": "c1d70fda",
					"chunk-628b8d12": "a988de93"
				} [e] + ".css", r = c.p + o, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
				var l = i[s],
					u = l.getAttribute("data-href") || l.getAttribute("href");
				if ("stylesheet" === l.rel && (u === o || u === r)) return t()
			}
			var d = document.getElementsByTagName("style");
			for (s = 0; s < d.length; s++) {
				l = d[s], u = l.getAttribute("data-href");
				if (u === o || u === r) return t()
			}
			var f = document.createElement("link");
			f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
				var o = t && t.target && t.target.src || r,
					i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
				i.code = "CSS_CHUNK_LOAD_FAILED", i.request = o, delete a[e], f.parentNode.removeChild(f), n(i)
			}, f.href = r;
			var g = document.getElementsByTagName("head")[0];
			g.appendChild(f)
		})).then((function() {
			a[e] = 0
		})));
		n = {
			"chunk-2d354ce6": 1,
			"chunk-628b8d12": 1
		};
		a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
			for (var o = "static/css/" + ({} [e] || e) + "." + {
					"chunk-2d354ce6": "c1d7",
					"chunk-628b8d12": "a988"
				} [e] + ".css", r = c.p + o, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
				var l = i[s],
					u = l.getAttribute("data-href") || l.getAttribute("href");
				if ("stylesheet" === l.rel && (u === o || u === r)) return t()
			}
			var d = document.getElementsByTagName("style");
			for (s = 0; s < d.length; s++) {
				l = d[s], u = l.getAttribute("data-href");
				if (u === o || u === r) return t()
			}
			var f = document.createElement("link");
			f.rel = "stylesheet", f.type = "text/css";
			var g = function(o) {
				if (f.onerror = f.onload = null, "load" === o.type) t();
				else {
					var i = o && ("load" === o.type ? "missing" : o.type),
						s = o && o.target && o.target.href || r,
						c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
					c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = s, delete a[e], f.parentNode.removeChild(f), n(c)
				}
			};
			f.onerror = f.onload = g, f.href = r, document.head.appendChild(f)
		})).then((function() {
			a[e] = 0
		})));
		var o = r[e];
		if (0 !== o)
			if (o) t.push(o[2]);
			else {
				var i = new Promise((function(t, n) {
					o = r[e] = [t, n]
				}));
				t.push(o[2] = i);
				var l, u = document.createElement("script");
				u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = s(e);
				var d = new Error;
				l = function(t) {
					u.onerror = u.onload = null, clearTimeout(f);
					var n = r[e];
					if (0 !== n) {
						if (n) {
							var o = t && ("load" === t.type ? "missing" : t.type),
								a = t && t.target && t.target.src;
							d.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", d.name = "ChunkLoadError", d.type = o, d.request = a, n[1](d)
						}
						r[e] = void 0
					}
				};
				var f = setTimeout((function() {
					l({
						type: "timeout",
						target: u
					})
				}), 12e4);
				u.onerror = u.onload = l, document.head.appendChild(u)
			} return Promise.all(t)
	}, c.m = e, c.c = o, c.d = function(e, t, n) {
		c.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, c.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, c.t = function(e, t) {
		if (1 & t && (e = c(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (c.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) c.d(n, o, function(t) {
				return e[t]
			}.bind(null, o));
		return n
	}, c.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return c.d(t, "a", t), t
	}, c.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, c.p = "/", c.oe = function(e) {
		throw console.error(e), e
	};
	var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
		u = l.push.bind(l);
	l.push = t, l = l.slice();
	for (var d = 0; d < l.length; d++) t(l[d]);
	var f = u;
	i.push([0, "vendor"]), n()
})({
	0: function(e, t, n) {
		e.exports = n("56d7")
	},
	"1a0e": function(e, t, n) {
		"use strict";
		n("c8bc")
	},
	"2c2c": function(e, t, n) {
		"use strict";
		n("54f3")
	},
	"427f": function(e, t, n) {},
	4360: function(e, t, n) {
		"use strict";
		var o = n("2b0e"),
			a = n("2f62"),
			r = n("fa7d");
		o["default"].use(a["a"]);
		const i = new a["a"].Store({
			state: {
				device: "pc",
				language: "th-TH"
			},
			getters: {
				device: e => e.device,
				language: e => e.language,
				isApp: e => Object(r["i"])()
			},
			mutations: {
				SET_DEVICE: (e, t) => {
					e.device = t
				},
				SET_LANGUAGE: (e, t) => {
					e.language = t
				}
			},
			actions: {
				setDevice({
					commit: e
				}, t) {
					e("SET_DEVICE", t)
				},
				setLanguage({
					commit: e
				}, t) {
					e("SET_LANGUAGE", t), localStorage.setItem("locale", t)
				}
			}
		});
		t["a"] = i
	},
	"54f3": function(e, t, n) {},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t);
		var o = n("2b0e"),
			a = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					class: ["layout", "pc" === e.device ? "pc-layout" : "app-layout"],
					attrs: {
						id: "app"
					}
				}, ["pc" === e.device ? [e.$route.meta.showHeader && "Login" !== e.$route.name ? t("page-header", {
					attrs: {
						theme: e.theme,
						showMenu: e.$route.meta.showMenu
					}
				}) : e._e()] : [e.isShowHeader && e.$route.meta.showHeader ? t("page-header", {
					attrs: {
						theme: e.theme
					}
				}) : e._e()], t("div", {
					class: ["pc" === e.device ? "pc-content" : "app-content", e.isShowHeader ? "content-wrap" : ""]
				}, [t("keep-alive", [e.$route.meta.keepAlive ? t("router-view", {
					attrs: {
						id: "pageContent"
					}
				}) : e._e()], 1), e.$route.meta.keepAlive ? e._e() : t("router-view", {
					attrs: {
						id: "pageContent"
					}
				})], 1), e.isShowHeader && e.$route.meta.showFooter ? t("page-footer") : e._e()], 2)
			},
			r = [],
			i = n("2f62"),
			s = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					class: "pc" === e.device ? "page-header-pc" : "page-header-app"
				}, [t("div", {
					class: {
						"black-theme": "black" === e.theme, "page-header": !0, "page-header-scrolled": e.isScrolled
					}
				}, [t("div", {
					staticClass: "page-header-container"
				}, [t("div", {
					staticClass: "logo",
					on: {
						click: e.goHome
					}
				}), t("div", {
					staticClass: "menu"
				}, [t("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: "pc" === e.device && e.showMenu,
						expression: "device === 'pc' && showMenu"
					}],
					staticClass: "menu-item",
					attrs: {
						href: "#testDrive"
					}
				}, [e._v(e._s(e.$t("menu.driveTest")))]), t("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: "pc" === e.device && e.showMenu,
						expression: "device === 'pc' && showMenu"
					}],
					staticClass: "menu-item",
					attrs: {
						href: "#contact"
					}
				}, [e._v(e._s(e.$t("menu.contactUs")))]), t("change-lang", {
					attrs: {
						theme: e.theme,
						isScrolled: e.isScrolled
					}
				})], 1)])])])
			},
			c = [],
			l = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					class: [e.isScrolled ? "header-scrolled" : "", "pc" === e.device ? "language-switch-pc" : "language-switch-app"]
				}, [t("div", {
					class: {
						language: !0, ["language-" + e.language]: !0, "black-theme": "black" === e.theme
					}
				}, [t("el-select", {
					attrs: {
						value: e.language,
						placeholder: "",
						"popper-append-to-body": !1,
						"popper-class": "language-dropdown"
					},
					on: {
						change: e.languageSelect
					}
				}, e._l(e.languages, (function(e) {
					return t("el-option", {
						key: e.value,
						attrs: {
							label: e.label,
							value: e.value
						}
					})
				})), 1)], 1)])
			},
			u = [],
			d = {
				props: {
					theme: {
						type: String,
						default: "light"
					},
					isScrolled: {
						type: Boolean,
						default: !1
					}
				},
				data() {
					return {
						languages: [{
							value: "th-TH",
							label: "ภาษาไทย"
						}, {
							value: "en-US",
							label: "English"
						}, {
							value: "zh-CN",
							label: "中文"
						}]
					}
				},
				computed: {
					...Object(i["c"])(["device", "language"])
				},
				methods: {
					languageSelect(e) {
						this.$store.dispatch("setLanguage", e), this.$i18n.locale = e
					}
				}
			},
			f = d,
			g = (n("fcea"), n("2877")),
			p = Object(g["a"])(f, l, u, !1, null, null, null),
			h = p.exports,
			v = n("2ef0"),
			m = {
				name: "PageFooter",
				components: {
					ChangeLang: h
				},
				props: {
					theme: {
						type: String,
						default: "light"
					},
					showMenu: {
						type: Boolean,
						default: !1
					}
				},
				data() {
					return {
						language: "",
						isScrolled: !1
					}
				},
				computed: {
					...Object(i["c"])(["device"])
				},
				created() {
					this.throttledHandleScroll = Object(v["throttle"])(this.handleScroll.bind(this), 200)
				},
				mounted() {
					this.navlinkClick(), window.addEventListener("scroll", this.throttledHandleScroll)
				},
				beforeDestroy() {
					document.removeEventListener("scroll", this.throttledHandleScroll)
				},
				methods: {
					navlinkClick() {
						console.log("navlinkClick"), document.querySelectorAll(".menu-item").forEach(e => {
							e.addEventListener("click", (function(e) {
								e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({
									behavior: "smooth"
								})
							}))
						})
					},
					handleScroll() {
						this.isScrolled = window.scrollY > 50
					},
					goHome() {
						this.$router.push({
							path: "/"
						})
					}
				}
			},
			w = m,
			b = (n("2c2c"), Object(g["a"])(w, s, c, !1, null, "0df84af6", null)),
			y = b.exports,
			A = n("fa7d"),
			C = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					class: "pc" === e.device ? "page-footer-pc" : "page-footer-app"
				}, [t("div", {
					staticClass: "page-footer"
				}, [t("div", {
					staticClass: "page-footer-container"
				}, [t("img", {
					staticClass: "logo",
					attrs: {
						src: n("9d64"),
						alt: ""
					}
				}), t("div", {
					staticClass: "page-footer-nav"
				}, [t("div", {
					staticClass: "nav-item",
					on: {
						click: e.gotoPrivacy
					}
				}, [e._v(e._s(e.$t("footer.privacy")))]), "pc" === e.device ? t("div", {
					staticClass: "nav-item contact-us",
					on: {
						click: e.openEmail
					}
				}, [t("el-tooltip", {
					attrs: {
						"popper-class": "contact-us-tootip",
						effect: "dark",
						content: "riddara.th.service@geely.com",
						placement: "top-end"
					}
				}, [t("span", [e._v(e._s(e.$t("footer.contactUs")))])])], 1) : t("div", {
					staticClass: "nav-item contact-us",
					on: {
						click: e.openEmail
					}
				}, [t("span", {
					staticClass: "contact-btn"
				}, [e._v(" " + e._s(e.$t("footer.contactUs")))]), e._v(" "), t("span", {
					staticClass: "email-adress"
				}, [e._v(" riddara.th.service@geely.com")])])])])])])
			},
			I = [],
			S = {
				name: "PageFooter",
				data() {
					return {}
				},
				computed: {
					...Object(i["c"])(["device"])
				},
				methods: {
					gotoPrivacy() {
						this.$router.push({
							name: "Agreement",
							query: {
								code: "PRIVACY"
							}
						})
					},
					openEmail() {
						Object(A["n"])({
							email: "riddara.th.service@geely.com"
						})
					}
				}
			},
			x = S,
			P = (n("8b2d"), Object(g["a"])(x, C, I, !1, null, "7ef10762", null)),
			O = P.exports,
			D = {
				name: "App",
				components: {
					PageHeader: y,
					PageFooter: O
				},
				data() {
					return {
						isShowHeader: !0
					}
				},
				async created() {
					(Object(A["k"])() || Object(A["i"])()) && (this.isShowHeader = !1), Object(A["j"])() || Object(A["h"])() || (this.resizeChange = Object(A["p"])(this.resizeChange, 200), window.addEventListener("resize", this.resizeChange, !1)), this.setDevice(), this.setLanguage(Object(A["d"])()), document.body.addEventListener("scroll", (function(e) {
						var t = e.target.scrollTop,
							n = e.target.scrollHeight,
							o = e.target.clientHeight;
						(0 === t || t + o === n) && e.preventDefault()
					}))
				},
				destroyed() {
					this.resizeChange && window.removeEventListener("resize", this.resizeChange, !1)
				},
				computed: {
					...Object(i["c"])(["device"]),
					theme() {
						var e;
						return (null === (e = this.$route) || void 0 === e || null === (e = e.meta) || void 0 === e ? void 0 : e.theme) || "light"
					}
				},
				mounted() {
					this.updateLanguage()
				},
				methods: {
					...Object(i["b"])(["setLanguage"]),
					resizeChange() {
						this.setDevice()
					},
					setDevice() {
						const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform);
						document.documentElement.clientWidth < 750 || e ? this.$store.dispatch("setDevice", "m") : this.$store.dispatch("setDevice", "pc")
					},
					updateLanguage() {
						window.updateLanguage = async e => {
							await this.$router.replace({
								path: this.$route.path,
								query: {
									...this.$route.query,
									language: e
								}
							}), setTimeout(() => {
								window.location.reload()
							}, 500)
						}
					}
				}
			},
			T = D,
			E = (n("1a0e"), Object(g["a"])(T, a, r, !1, null, null, null)),
			H = E.exports,
			M = n("4360"),
			N = n("a925"),
			L = n("4897"),
			k = n.n(L),
			B = {
				menu: {
					driveTest: "预约试驾",
					contactUs: "联系我们",
					language: "中文"
				},
				testDrive: {
					floor1_title_1: "新能源智能汽车，专注于户外生态",
					floor1_title_2: "",
					floor1_buttonText: "探索更多",
					floor3_title: "成为我们的经销商！",
					floor3_subtitle_1: "请通过下面的邮箱与我们联系riddara.th.business@geely.com，",
					floor3_subtitle_2: "无论您有任何关于合作的咨询或需求。",
					floor3_buttonText: "发送邮件",
					floor2_form: {
						title: "您将有机会成为首批电动皮卡的体验者，感受与众不同！登记试驾 RIDDARA产品，赢取 5 个独家首批试驾名额（每位可携带一名同伴）",
						subtitle: "今年 10 月，与 RIDDARA 产品专家见面，并与知名 KOL/汽车达人现场互动",
						subtitle_2: "报名时间：2024年7月25日 - 8月24日 ",
						subtitle_3: "获奖名单公布时间：2024年9月1日，通过 Facebook 官方页面 “RIDDARA THAILAND”",
						name: "名*",
						surname: "姓*",
						mobile: "手机号*",
						varifyCode: "验证码*",
						email: "电子邮箱",
						readme: "我已阅读并同意",
						privacyText: "隐私政策",
						buttonText: "登记报名",
						captchaDefaultText: "获取验证码",
						captchaCountdownText: "验证码（{sec}s）",
						nameInvalidMsg: "请输入有效的信息",
						surnameInvalidMsg: "请输入有效的信息",
						mobileInvalidMsg: "请输入有效的手机号",
						emailInvalidMsg: "请输入有效的邮箱",
						varifyCodeInvalidMsg: "请输入有效的验证码",
						privacyInvalidMsg: "请先阅读隐私协议",
						getCaptchaSuccessMsg: "验证码已发送"
					}
				},
				footer: {
					contactUs: "联系我们",
					privacy: "隐私政策"
				},
				agreement: {
					privacyTitle: "隐私政策"
				},
				dialog: {
					submitSuccessDialogTitle: "您已预约成功！",
					submitSuccessDialogInfo_1: "您将有机会率先体验到来自中国的纯电动皮卡！",
					submitSuccessDialogInfo_2: ""
				}
			},
			F = {
				menu: {
					driveTest: "Test Drive",
					contactUs: "Contact Us",
					language: "English"
				},
				testDrive: {
					floor1_title_1: "An intelligent EV brand ",
					floor1_title_2: "focusing on the outdoor ecosystem",
					floor1_buttonText: "Explore more",
					floor3_title: "Become our distributor!",
					floor3_subtitle_1: "Register to apply or inquire for more information at the email address below. ",
					floor3_subtitle_2: "riddara.th.business@geely.com",
					floor3_buttonText: "Click",
					floor2_form: {
						title: "Register to test drive with RIDDARA for a chance to win 5 exclusive test drive spots (for 2 people each)",
						subtitle: "Meet RIDDARA experts and Famous Car Guru and KOLS this October",
						subtitle_2: "Registration period: July 25 - August 24, 2024 ",
						subtitle_3: 'Announcement of winners: September 1, 2024 via the Facebook Official Page "RIDDARA THAILAND"',
						name: "First Name*",
						surname: "Last Name*",
						mobile: "Phone Number*",
						varifyCode: "Verification Code*",
						email: "Email Address",
						readme: "I have read and agree to the ",
						privacyText: "Privacy Policy.",
						buttonText: "Registration",
						captchaDefaultText: "Get verification code",
						captchaCountdownText: "Verification code({sec}S)",
						nameInvalidMsg: "Please enter valid information.",
						surnameInvalidMsg: "Please enter valid information.",
						mobileInvalidMsg: "Please enter a valid phone number.",
						emailInvalidMsg: "Please enter a valid email address.",
						varifyCodeInvalidMsg: "Please enter a valid verification code.",
						privacyInvalidMsg: "Please read the privacy agreement first",
						getCaptchaSuccessMsg: "Verification code has been sent."
					}
				},
				footer: {
					contactUs: "Contact Us",
					privacy: "Privacy Policy"
				},
				agreement: {
					privacyTitle: "Privacy Policy"
				},
				dialog: {
					submitSuccessDialogTitle: "Thank you for joining us!",
					submitSuccessDialogInfo_1: "You may be one of the lucky ones to test drive the first EV Pickup in Thailand",
					submitSuccessDialogInfo_2: ""
				}
			},
			j = {
				menu: {
					driveTest: "จองทดลองขับ",
					contactUs: "ติดต่อเรา",
					language: "ไทย"
				},
				testDrive: {
					floor1_title_1: "รถยนต์พลังงานใหม่อัจฉริยะ ",
					floor1_title_2: "ให้ความสำคัญกับสิ่งแวดล้อม",
					floor1_buttonText: "สำรวจเพิ่มเติม",
					floor3_title: "มาร่วมเป็นส่วนหนึ่งกับเรา",
					floor3_subtitle_1: "ลงทะเบียนเพื่อสมัครหรือสามารถสอบถามข้อมูลเพิ่มเติมได้ที่อีเมลด้านล่างนี้",
					floor3_subtitle_2: "riddara.th.business@geely.com",
					floor3_buttonText: "คลิก",
					floor2_form: {
						title: "ลงทะเบียนเพื่อร่วมทดลองขับกับ RIDDARA ลุ้นรับสิทธิ์เข้าร่วมงาน Exclusive Test Drive จำนวน 5 รางวัล (รางวัลละ 2 ท่าน)!",
						subtitle: "พบปะผู้เชี่ยวชาญจาก RIDDARA และกระทบไหล่ KOLs / Car Guru ชื่อดังมากมาย ในเดือนตุลาคมนี้",
						subtitle_2: " ระยะเวลาเปิดรับลงทะเบียน ตั้งแต่วันที่ 25 กรกฎาคม - 24 สิงหาคม 2567",
						subtitle_3: " ประกาศรายชื่อผู้โชคดี วันที่ 1 กันยายน 2567 ผ่านทาง Facebook Official Page “RIDDARA THAILAND”",
						name: "ชื่อ*",
						surname: "นามสกุล*",
						mobile: "หมายเลขโทรศัพท์*",
						varifyCode: "รหัสยืนยัน*",
						email: "อีเมล",
						readme: "ฉันได้อ่านและยอมรับ",
						privacyText: "นโยบายความเป็นส่วนตัวแล้ว",
						buttonText: "ลงทะเบียน",
						captchaDefaultText: "รับรหัสยืนยัน",
						captchaCountdownText: "รหัสยืนยัน({sec}s)",
						nameInvalidMsg: "โปรดป้อนข้อมูลที่ถูกต้อง",
						surnameInvalidMsg: "โปรดป้อนข้อมูลที่ถูกต้อง",
						mobileInvalidMsg: "โปรดป้อนหมายเลขโทรศัพท์ที่ถูกต้อง",
						emailInvalidMsg: "โปรดป้อนที่อยู่อีเมลที่ถูกต้อง",
						varifyCodeInvalidMsg: "โปรดป้อนรหัสยืนยันที่ถูกต้อง",
						privacyInvalidMsg: "กรุณาอ่านข้อตกลงความเป็นส่วนตัวก่อน",
						getCaptchaSuccessMsg: "ส่งรหัสยืนยันแล้ว"
					}
				},
				footer: {
					contactUs: "ติดต่อเรา",
					privacy: "นโยบายความเป็นส่วนตัว"
				},
				agreement: {
					privacyTitle: "นโยบายความเป็นส่วนตัว"
				},
				dialog: {
					submitSuccessDialogTitle: "ขอขอบคุณที่ร่วมสนุกกับเรา!",
					submitSuccessDialogInfo_1: "ท่านอาจได้เป็นหนึ่งในผู้โชคดีได้ร่วมทดสอบรถยนต์กระบะไฟฟ้าคันแรกในประเทศไทย",
					submitSuccessDialogInfo_2: ""
				}
			},
			V = n("f0d9"),
			U = n.n(V),
			X = n("b2d6"),
			R = n.n(X);
		o["default"].use(N["a"]);
		const Q = {
				"en-US": {
					...F,
					...R.a
				},
				"zh-CN": {
					...B,
					...U.a
				},
				"th-TH": {
					...j
				}
			},
			q = new N["a"]({
				locale: Object(A["d"])(),
				messages: Q
			});
		k.a.i18n((e, t) => q.t(e, t));
		var W = n("9883"),
			z = (n("0fb7"), n("450d"), n("f529")),
			G = n.n(z),
			K = (n("0c67"), n("299c")),
			_ = n.n(K),
			Z = (n("fe07"), n("6ac5")),
			J = n.n(Z),
			Y = (n("b5d8"), n("f494")),
			$ = n.n(Y),
			ee = (n("acb6"), n("c673")),
			te = n.n(ee),
			ne = (n("6611"), n("e772")),
			oe = n.n(ne),
			ae = (n("560b"), n("dcdc")),
			re = n.n(ae),
			ie = (n("1951"), n("eedf")),
			se = n.n(ie),
			ce = (n("10cb"), n("f3ad")),
			le = n.n(ce),
			ue = (n("1f1a"), n("4e4b")),
			de = n.n(ue),
			fe = (n("eca7"), n("3787")),
			ge = n.n(fe),
			pe = (n("425f"), n("4105")),
			he = n.n(pe),
			ve = (n("a7cc"), n("df33")),
			me = n.n(ve);
		n("0fae");
		o["default"].use(me.a), o["default"].use(he.a), o["default"].use(ge.a), o["default"].use(de.a), o["default"].use(le.a), o["default"].use(se.a), o["default"].use(re.a), o["default"].use(oe.a), o["default"].use(te.a), o["default"].use($.a), o["default"].use(J.a), o["default"].use(_.a), o["default"].prototype.$message = G.a;
		var we = n("58ca"),
			be = (n("f266"), n("77ed")),
			ye = n.n(be),
			Ae = n("2b27"),
			Ce = n.n(Ae),
			Ie = n("bc3a"),
			Se = n.n(Ie),
			xe = n("fe3c"),
			Pe = n.n(xe);
		Pe.a.attach(document.body), o["default"].filter("img2webpFilter", (function(e) {
			return e.indexOf("x-oss-process=image") > -1 ? e : e + "?x-oss-process=image/format,webp"
		})), o["default"].use(ye.a), o["default"].use(Ce.a), o["default"].use(we["a"], {
			refreshOnceOnNavigation: !0
		}), o["default"].prototype.$http = Se.a, o["default"].config.productionTip = !1, new o["default"]({
			render: e => e(H),
			store: M["a"],
			router: W["a"],
			i18n: q
		}).$mount("#app"), o["default"].prototype.NumberSub = function(e, t) {
			var n, o, a, r;
			try {
				n = e.toString().split(".")[1].length
			} catch (i) {
				n = 0
			}
			try {
				o = t.toString().split(".")[1].length
			} catch (i) {
				o = 0
			}
			return a = Math.pow(10, Math.max(n, o)), r = n >= o ? n : o, ((e * a - t * a) / a).toFixed(r)
		}, o["default"].prototype.NumberAdd = function(e, t) {
			var n, o, a, r;
			try {
				n = e.toString().split(".")[1].length
			} catch (i) {
				n = 0
			}
			try {
				o = t.toString().split(".")[1].length
			} catch (i) {
				o = 0
			}
			return a = Math.pow(10, Math.max(n, o)), r = n >= o ? n : o, ((e * a + t * a) / a).toFixed(r)
		}, window.addEventListener("unmount", (function() {
			o["default"].$destroy()
		}))
	},
	"8b2d": function(e, t, n) {
		"use strict";
		n("f6d6")
	},
	9883: function(e, t, n) {
		"use strict";
		var o = n("2b0e"),
			a = n("8c4f"),
			r = n("323e"),
			i = n.n(r);
		i.a.inc(), o["default"].use(a["a"]);
		const s = [{
				path: "/",
				name: "Home",
				meta: {
					showHeader: !0,
					showMenu: !0,
					showFooter: !0
				},
				component: () => n.e("chunk-2d354ce6").then(n.bind(null, "168d"))
			}, {
				path: "/testDrive",
				name: "TestDrive",
				meta: {
					showHeader: !0,
					showMenu: !0,
					showFooter: !0
				},
				component: () => n.e("chunk-2d354ce6").then(n.bind(null, "168d"))
			}, {
				path: "/agreement",
				name: "Agreement",
				meta: {
					showHeader: !0,
					showFooter: !0,
					theme: "black"
				},
				component: () => n.e("chunk-628b8d12").then(n.bind(null, "9603"))
			}],
			c = new a["a"]({
				mode: "".includes("#") ? "hash" : "history",
				base: "",
				routes: s,
				scrollBehavior(e, t, n) {
					return n || (t.meta.keepAlive && (t.meta.savedPosition = document.body.scrollTop), {
						x: 0,
						y: e.meta.savedPosition || 0
					})
				}
			});
		c.beforeEach(async (e, t, n) => {
			if (e.query.title || e.meta.title) {
				const t = Array.isArray(e.query.title) ? e.query.title[0] : e.query.title;
				document.title = t || e.meta.title
			}
			const o = a["a"].prototype.push;
			a["a"].prototype.push = function(e) {
				return o.call(this, e).catch(e => e)
			}, i.a.start(), e.meta && e.meta.shareTitle, n()
		}), c.afterEach(() => {
			i.a.done(!0);
			let e = document.querySelector("#app > div");
			e && e.scrollTo(0, 0)
		}), t["a"] = c
	},
	"9d64": function(e, t) {
		e.exports = "data:image/png;base64,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"
	},
	ad7e: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return o
		})), n.d(t, "d", (function() {
			return a
		})), n.d(t, "e", (function() {
			return r
		})), n.d(t, "b", (function() {
			return i
		})), n.d(t, "c", (function() {
			return s
		}));
		n("fa7d");
		const o = () => {
				var e, t;
				window && (window.flutter_inappwebview ? null === (e = window.flutter_inappwebview) || void 0 === e || e.callHandler("AppLogin", "Login") : null === (t = window.AppLogin) || void 0 === t || t.postMessage("Login"))
			},
			a = e => {
				var t, n;
				window && (window.flutter_inappwebview ? null === (t = window.flutter_inappwebview) || void 0 === t || t.callHandler("JumpWebView", e) : null === (n = window.JumpWebView) || void 0 === n || n.postMessage(e))
			},
			r = e => {
				var t, n;
				window && (window.flutter_inappwebview ? null === (t = window.flutter_inappwebview) || void 0 === t || t.callHandler("JumpWebViewFull", e) : null === (n = window.JumpWebViewFull) || void 0 === n || n.postMessage(e))
			},
			i = () => {
				var e, t;
				window && (window.flutter_inappwebview ? null === (e = window.flutter_inappwebview) || void 0 === e || e.callHandler("JSCallGetLoginInfo", "") : null === (t = window.JSCallGetLoginInfo) || void 0 === t || t.postMessage(""))
			},
			s = e => {
				var t, n;
				window && (window.flutter_inappwebview ? null === (t = window.flutter_inappwebview) || void 0 === t || t.callHandler("sendEmail", e) : null === (n = window.JSCallNativePage) || void 0 === n || n.postMessage(e))
			}
	},
	c8bc: function(e, t, n) {},
	f266: function(e, t, n) {},
	f6d6: function(e, t, n) {},
	fa7d: function(e, t, n) {
		"use strict";
		n.d(t, "g", (function() {
			return l
		})), n.d(t, "p", (function() {
			return u
		})), n.d(t, "k", (function() {
			return d
		})), n.d(t, "e", (function() {
			return f
		})), n.d(t, "l", (function() {
			return g
		})), n.d(t, "j", (function() {
			return p
		})), n.d(t, "h", (function() {
			return h
		})), n.d(t, "i", (function() {
			return v
		})), n.d(t, "f", (function() {
			return b
		})), n.d(t, "m", (function() {
			return A
		})), n.d(t, "b", (function() {
			return C
		})), n.d(t, "c", (function() {
			return I
		})), n.d(t, "a", (function() {
			return S
		})), n.d(t, "d", (function() {
			return x
		})), n.d(t, "n", (function() {
			return P
		})), n.d(t, "o", (function() {
			return O
		}));
		n("0fb7"), n("450d");
		var o = n("f529"),
			a = n.n(o),
			r = n("c6c6"),
			i = n.n(r),
			s = (n("bc3a"), n("4360")),
			c = n("ad7e");

		function l({
			router: e = "",
			link: t = ""
		} = {}) {
			let n;
			if (t) n = t;
			else {
				if (!e) return console.error("L ~~ 🚀🚀🚀🚀🚀 ~ goExternalLink ->", "缺少 router");
				n = location.origin + "" + e
			}
			const o = m("leadSourceCode"),
				a = m("activityCode"),
				r = m("leadSanSourceCode");
			(a || o || r) && (n += n.indexOf("?") > -1 ? "&" : `?activityCode=${a}&leadSourceCode=${o}&leadSanSourceCode=${r}`), location.href = n
		}
		const u = (e, t, n) => {
			let o, a, r, i = null,
				s = 0;
			n || (n = {});
			var c = function() {
				s = !1 === n.leading ? 0 : (new Date).getTime(), i = null, r = e.apply(o, a), i || (o = a = null)
			};
			return function() {
				let l = (new Date).getTime();
				s || !1 !== n.leading || (s = l);
				let u = t - (l - s);
				return o = this, a = arguments, u <= 0 || u > t ? (i && (clearTimeout(i), i = null), s = l, r = e.apply(o, a), i || (o = a = null)) : i || !1 === n.trailing || (i = setTimeout(c, u)), r
			}
		};

		function d() {
			const e = navigator.userAgent,
				t = /miniProgram/g.test(e),
				n = /MiniProgram/g.test(e),
				o = /swan\//g.test(e),
				a = /toutiaomicroapp/i.test(e),
				r = t || n || o || a;
			return console.log("agent", e), !!r
		}

		function f() {
			const e = navigator.userAgent,
				t = /miniProgram/g.test(e),
				n = /MiniProgram/g.test(e),
				o = /swan\//.test(e),
				a = /toutiaomicroapp/i.test(e);
			return {
				isWxapp: t,
				isAliapp: n,
				isBdapp: o,
				isDyapp: a
			}
		}

		function g(e) {
			return window.mpx.redirectTo(e)
		}

		function p() {
			let e = navigator.userAgent.toLowerCase(),
				t = !!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
			return t
		}

		function h() {
			let e = navigator.userAgent.toLowerCase(),
				t = e.indexOf("Android") > -1 || e.indexOf("android") > -1 || e.indexOf("Adr") > -1;
			return t
		}
		const v = () => {
			let e = navigator.userAgent;
			return e.indexOf("App/RIDDARA") > -1
		};

		function m(e) {
			let t = w(window.location.href, e);
			return t
		}

		function w(e, t) {
			let n = e;
			null != n && "" != n || (n = window.location.href);
			let o = "";
			if (-1 != n.toString().indexOf("?")) {
				let e = n.split("?"),
					o = e[1].split("&");
				for (let n = 0; n < o.length; n++)
					if (o[n].split("=")[0].toLowerCase() == t.toLowerCase()) return unescape("null" == o[n].split("=")[1] ? "" : o[n].split("=")[1])
			}
			return o
		}

		function b() {
			const e = navigator.userAgent;
			return -1 !== e.indexOf("Windows NT 10.0") ? "Windows 10" : -1 !== e.indexOf("Windows NT 6.2") ? "Windows 8" : -1 !== e.indexOf("Windows NT 6.1") ? "Windows 7" : -1 !== e.indexOf("Windows NT 6.0") ? "Windows Vista" : -1 !== e.indexOf("Windows NT 5.1") ? "Windows XP" : -1 !== e.indexOf("Windows NT 5.0") ? "Windows 2000" : -1 !== e.indexOf("Mac") ? "Mac" : -1 !== e.indexOf("X11") ? "UNIX" : -1 !== e.indexOf("Linux") ? "Linux" : "Other"
		}
		const y = e => {
			const t = e.match(/(?:\b|;)(\w+-\w+)(?:;|$)/);
			return t ? t[1] : null
		};

		function A() {
			const e = navigator.userAgent;
			var t = new i.a(e),
				n = t.os();
			let o, a;
			if ("iOS" == n)
				if (o = t.mobile(), "iPhone" == o) {
					let e = [
						["430,932,3", "A15", "iPhone 14 Pro Max"],
						["393,852,3", "A15", "iPhone 14 Pro"],
						["375,812,3", "A15", "iPhone 13(12) min"],
						["428,926,3", "A14", "iPhone 14(12/13) Plus"],
						["390,844,3", "A14", "iPhone 14(12/13)"],
						["414,896,3", "A13", "iPhone 11 Pro Max(Xs Max)"],
						["375,812,3", "A13", "iPhone 11 Pro(X/Xs)"],
						["414,896,2", "A13", "iPhone 11(XR)"],
						["414,736,3", "A12", "iPhone 8(7/6s) Plus"],
						["375,667,2", "A11", "iPhone 8(7/6)"],
						["320,568,2", "A11", "iPhone 5(s/se)"],
						["320,480,2", "A10", "iPhone 4(s)"]
					];
					var r = document.createElement("canvas"),
						s = r.getContext("experimental-webgl"),
						c = s.getExtension("WEBGL_debug_renderer_info");
					let t = s.getParameter(c.UNMASKED_RENDERER_WEBGL),
						n = window.screen.width,
						i = window.screen.height,
						l = window.devicePixelRatio;
					console.log(n, i, l);
					let u = n + "," + i + "," + l;
					e.some(e => {
						e[0] === u && (o = e[2], console.log("iphoneGPU", t == e[1]))
					}), a = o
				} else o = "iPad";
			else if ("AndroidOS" == n) {
				for (var l, u = e.split(";"), d = 0; d < u.length; d++)
					if (u[d].indexOf("Build/") > 0) {
						l = d;
						break
					} l > -1 && (o = u[l].substring(0, u[l].indexOf("Build/"))), !o && e.indexOf("HuaweiBrowser") > -1 && (o = y(e))
			}
			return a = o ? o.trim() : "", a || "other"
		}

		function C() {
			var e = navigator.platform,
				t = navigator.userAgent;
			return "Win32" == e || "Windows" == e ? t.indexOf("Win64") > -1 ? "X64" : "X32" : ""
		}

		function I() {
			var e = navigator.userAgent.toLowerCase(),
				t = {},
				n = {
					IE: window.ActiveXObject || "ActiveXObject" in window,
					Chrome: e.indexOf("chrome") > -1 && e.indexOf("safari") > -1 && e.indexOf("edg") < 0,
					Firefox: e.indexOf("firefox") > -1,
					Opera: e.indexOf("opera") > -1,
					Safari: e.indexOf("safari") > -1 && -1 == e.indexOf("chrome"),
					Edge: e.indexOf("edge") > -1,
					Edg: e.indexOf("edg") > -1,
					QQBrowser: /qqbrowser/.test(e),
					WeixinBrowser: /MicroMessenger/i.test(e),
					UCBrowser: /ucbrowser/.test(e)
				};
			for (var o in n)
				if (n[o]) {
					var a = "";
					if ("IE" === o) a = e.match(/(msie\s|trident.*rv:)([\w.]+)/)[2];
					else if ("Chrome" === o) {
						for (var r in navigator.mimeTypes) navigator.mimeTypes[r] && "application/360softmgrplugin" == navigator.mimeTypes[r]["type"] && (o = "360");
						a = e.match(/chrome\/([\d.]+)/)[1]
					} else "Firefox" === o ? a = e.match(/firefox\/([\d.]+)/)[1] : "Opera" === o ? a = e.match(/opera\/([\d.]+)/)[1] : "Safari" === o ? a = e.match(/version\/([\d.]+)/)[1] : "Edge" === o ? a = e.match(/edge\/([\d.]+)/)[1] : "Edg" === o ? a = e.match(/edg\/([\d.]+)/)[1] : "QQBrowser" === o ? a = e.match(/qqbrowser\/([\d.]+)/)[1] : "UCBrowser" === o && (a = e.match(/ucbrowser\/([\d.]+)/)[1]);
					t.type = o, t.versions = a
				} return t
		}

		function S(...e) {
			function t() {
				window && window.flutter_inappwebview && "function" === typeof window.flutter_inappwebview.callHandler ? window.flutter_inappwebview.callHandler(...e) : setTimeout(t, 100)
			}
			t()
		}

		function x() {
			const e = m("language") || "";
			return e || localStorage.getItem("locale") || "th-TH"
		}

		function P({
			email: e
		}) {
			const t = encodeURIComponent(e),
				n = "mailto:" + t;
			try {
				v() ? Object(c["c"])(n) : window.location.href = n
			} catch (o) {
				console.error("Failed to open the email client:", o)
			}
		}

		function O(e) {
			const t = s["a"].getters.device,
				n = "pc" === t ? "pc-msg" : "app-msg",
				o = {
					...e,
					customClass: n
				};
			a()(o)
		}
	},
	fcea: function(e, t, n) {
		"use strict";
		n("427f")
	}
});