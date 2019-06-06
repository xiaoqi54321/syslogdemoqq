window.Q = function (t, i, n) {
	"use strict";
	function e(t, i, n) {
		if (t.hasChildren()) {
			var s = t._fm || t.getChildren();
			if (s) {
				s = s._jc || s;
				for (var r = 0, h = s[Wr]; h > r; r++)
					if (i[Xr](n, s[r]) === !1 || e(s[r], i, n) === !1)
						return !1;
				return !0
			}
		}
	}
	function s(t) {
		if (!t[Vr]())
			return t instanceof lU ? t : null;
		for (var i, n = t._fm._jc, e = n[Wr] - 1; e >= 0; ) {
			if (i = n[e], i = s(i))
				return i;
			e--
		}
		return null
	}
	function r(t, i, n, e) {
		return e ? h(t, i, n) : a(t, i, n)
	}
	function h(t, i, n) {
		t = t._jc || t;
		for (var e, s = 0, r = t[Wr]; r > s; s++)
			if (e = t[s], e[Vr]() && !h(e.children, i, n) || i.call(n, e) === !1)
				return !1;
		return !0
	}
	function a(t, i, n) {
		t = t._jc || t;
		for (var e, s = 0, r = t[Wr]; r > s; s++)
			if (e = t[s], i[Xr](n, e) === !1 || e[Vr]() && !a(e[Kr], i, n))
				return !1;
		return !0
	}
	function o(t, i, n, e) {
		return e ? f(t, i, n) : c(t, i, n)
	}
	function f(t, i, n) {
		t = t._jc || t;
		for (var e, s = t[Wr], r = s - 1; r >= 0; r--)
			if (e = t[r], e[Vr]() && !f(e[Kr], i, n) || i.call(n, e) === !1)
				return !1;
		return !0
	}
	function c(t, i, n) {
		t = t._jc || t;
		for (var e, s = t[Wr], r = s - 1; r >= 0; r--)
			if (e = t[r], i[Xr](n, e) === !1 || e.hasChildren() && !c(e[Kr], i, n))
				return !1;
		return !0
	}
	function u(t, i, n) {
		for (var e, s = (t._jc || t)[Zr](0); s.length; ) {
			e = s[0],
			s = s[Jr](1);
			var r = i[Xr](n, e);
			if (r === !1)
				return !1;
			if (e[Vr]()) {
				var h = e[Kr];
				h = h._jc || h,
				s = s[Qr](h)
			}
		}
		return !0
	}
	function _(t, i, n) {
		for (var e, s = (t._jc || t)[Zr](0); s[Wr]; ) {
			e = s[s[Wr] - 1],
			s = s[Jr](0, s[Wr] - 1);
			var r = i[Xr](n, e);
			if (r === !1)
				return !1;
			if (e[Vr]()) {
				var h = e[Kr];
				h = h._jc || h,
				s = s[Qr](h)
			}
		}
		return !0
	}
	function d(t, i) {
		function n(t, n) {
			for (var e = t.length, s = n[Wr], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; )
				h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
			return h
		}
		function e(t) {
			var i = t[Wr],
			s = Math[th](i / 2);
			return 1 >= i ? t : n(e(t[Zr](0, s)), e(t[Zr](s)))
		}
		return e(t)
	}
	function l(t, i, n, e) {
		t instanceof XG && (t = t._jc);
		for (var s = 0, r = (t._jc || t)[Wr]; r > s; s++) {
			var h = i[Xr](n, t[s], s, e);
			if (h === !1)
				return !1
		}
		return !0
	}
	function v(t, i, n) {
		for (var e = t instanceof XG, s = t._jc || t, r = 0, h = s[Wr]; h > r; r++) {
			var a = s[r];
			i[Xr](n, a) && (e ? t.remove(a) : t[Jr](r, 1), r--, h--)
		}
	}
	function b(t, i, n, e) {
		t instanceof XG && (t = t._jc);
		for (var s = (t._jc || t)[Wr] - 1; s >= 0; s--) {
			var r = i[Xr](n, t[s], s, e);
			if (r === !1)
				return !1
		}
		return !0
	}
	function y(t) {
		if (t[ih]instanceof Function)
			return t[ih](!0);
		var i,
		n = [];
		return l(t, function (t) {
			i = t && t[ih]instanceof Function ? t[ih]() : t,
			n[nh](i)
		}, this),
		n
	}
	function g(t, i, e) {
		e === n || 0 > e ? t[nh](i) : t[Jr](e, 0, i)
	}
	function m(t, i) {
		var n = t[eh](i);
		return 0 > n || n >= t.length ? !1 : t[Jr](n, 1)
	}
	function E(t, i) {
		var n = !1;
		return l(t, function (t) {
			return i == t ? (n = !0, !1) : void 0
		}),
		n
	}
	function x(t, i) {
		var n = t;
		for (var e in i)
			if (i.__lookupGetter__) {
				var s = i.__lookupGetter__(e),
				r = i.__lookupSetter__(e);
				s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
			} else
				n[e] = i[e];
		return n
	}
	function p(t, i, n) {
		if (!(t instanceof Function))
			throw new Error("subclass must be type of Function");
		var e = null;
		sh == typeof i && (e = i, i = t, t = function () {
			i[rh](this, arguments)
		});
		var s = t[hh],
		r = function () {};
		return r[hh] = i[hh],
		t.prototype = new r,
		t[ah] = i.prototype,
		t[ah].constructor = i,
		x(t[hh], s),
		e && x(t[hh], e),
		n && x(t.prototype, n),
		t[hh].class = t,
		t
	}
	function w(t, i, n) {
		return T(t, i, "constructor", n)
	}
	function T(t, i, n, e) {
		var s = i[ah];
		if (s) {
			var r = s[n];
			return r ? r.apply(t, e) : void 0
		}
	}
	function O(t, i, n, e) {
		if ("constructor" == n)
			return I(t, i, e);
		if (i[oh]instanceof Function) {
			var s = i[oh][hh][n];
			return s instanceof Function ? s[rh](t, e) : void 0
		}
	}
	function I(t, i, n) {
		return i[oh]instanceof Function ? i.super_[rh](t, n) : void 0
	}
	function M(t, i) {
		return t.super_ = i,
		t[hh] = Object.create(i.prototype, {
				super_: {
					value: i,
					enumerable: !1
				},
				constructor: {
					value: t,
					enumerable: !1
				}
			}),
		t
	}
	function k(t, i, n) {
		if (!(t instanceof Function) && t instanceof Object) {
			i = t[fh];
			var e;
			return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
				i[rh](this, arguments)
			}
			 : function () {},
			k(e, i, t)
		}
		if (i && !(i instanceof Function) && i instanceof Object)
			return k(t, i[fh], i);
		if (i && M(t, i), n) {
			var s = t[hh];
			for (var r in n)
				s[r] = n[r]
		}
		return t
	}
	function S(t, i, e, s, r) {
		if (s)
			return void Object[ch](t, i, {
				value: e,
				enumerable: !0
			});
		var h = {
			configurable: !0,
			enumerable: !0
		},
		a = uh + i;
		e !== n && (t[a] = e),
		h.get = function () {
			return this[a]
		},
		h.set = function (t) {
			var n = this[a];
			if (n == t)
				return !1;
			var e = new dH(this, i, t, n);
			return this[_h](e) ? (this[a] = t, r && r[Xr](this, t, n), this[dh](e), !0) : !1
		},
		Object[ch](t, i, h)
	}
	function A(t, i) {
		for (var n = 0, e = i.length; e > n; n++) {
			var s = i[n];
			S(t, s[lh] || s, s[vh] || s[bh], s[yh], s[gh])
		}
	}
	function C(t, i, n) {
		return i instanceof Object ? t = t[mh](i) : i && !n && (n = parseInt(i)),
		i && !n && (n = parseInt(i)),
		n ? setTimeout(t, n) : setTimeout(t)
	}
	function R(i, n) {
		return n && (i = i[mh](n)),
		t[Eh](i)
	}
	function L(t, i) {
		return t[xh] = i,
		t
	}
	function P(t, i) {
		if (!t.hasOwnProperty(ph)) {
			var n = t[wh](Th);
			if (!n)
				return L(t, i);
			for (var e = n[Oh](Ih), s = 0, r = e[Wr]; r > s; s++)
				if (e[s] == i)
					return;
			return n += Ih + i,
			L(t, n)
		}
		t[ph].add(i)
	}
	function D(t, i) {
		if (!t.hasOwnProperty(ph)) {
			var n = t[wh](Th);
			if (!n || !n[eh](i))
				return;
			for (var e = "", s = n.split(Ih), r = 0, h = s[Wr]; h > r; r++)
				s[r] != i && (e += s[r] + Ih);
			return L(t, e)
		}
		t[ph][Mh](i)
	}
	function j(t) {
		return !isNaN(t) && t instanceof Number || kh == typeof t
	}
	function N(t) {
		return t !== n && (t instanceof String || Sh == typeof t)
	}
	function B(t) {
		return t !== n && (t instanceof Boolean || Ah == typeof t)
	}
	function $(t) {
		return Array[Ch](t)
	}
	function z(i) {
		i || (i = t.event),
		i[Rh] ? i.preventDefault() : i.returnValue = !1
	}
	function F(i) {
		i || (i = t[Lh]),
		i[Ph] ? i.stopPropagation() : i.cancelBubble || (i[Dh] = !0)
	}
	function G(t) {
		z(t),
		F(t)
	}
	function H(t) {
		return Math.floor(Math[jh]() * t)
	}
	function q() {
		return Math[jh]() >= .5
	}
	function Y(t) {
		var i = !0;
		for (var n in t) {
			i = !1;
			break
		}
		return i
	}
	function U(t) {
		if (t && t > 0 && 1 > t) {
			var i = Math[Nh](16777215 * Math[jh]());
			return Bh + (i >> 16 & 255) + $h + (i >> 8 & 255) + $h + (255 & i) + $h + t.toFixed(2) + zh
		}
		return V(Math.floor(16777215 * Math[jh]()))
	}
	function W(t) {
		return t > 0 ? Math.floor(t) : Math[th](t)
	}
	function X(t) {
		return t > 0 ? Math[th](t) : Math[Nh](t)
	}
	function V(t) {
		return 16777216 > t ? Fh + (Gh + t.toString(16))[Zr](-6) : Bh + (t >> 16 & 255) + $h + (t >> 8 & 255) + $h + (255 & t) + $h + ((t >> 24 & 255) / 255).toFixed(2) + zh
	}
	function K(t, i, n) {
		sh != typeof n || n.hasOwnProperty(Hh) || (n.enumerable = !0),
		Object[ch](t, i, n)
	}
	function Z(t, i) {
		for (var n in i)
			if (qh != n[0]) {
				var e = i[n];
				sh != typeof e || e.hasOwnProperty(Hh) || (e[Hh] = !0)
			}
		Object[Yh](t, i)
	}
	function J(i, n) {
		n || (n = t);
		for (var e = i[Oh](Uh), s = 0, r = e[Wr]; r > s; s++) {
			var h = e[s];
			n = n[h]
		}
		return n
	}
	function Q(t) {
		return t instanceof MouseEvent || t instanceof Object && t[Wh] !== n
	}
	function ti() {
		t.console && console.log[rh](console, arguments)
	}
	function ii(i) {
		t[Xh] && console.trace(i)
	}
	function ni(i) {
		t[Xh] && console.error(i)
	}
	function ei(t, i, n) {
		var e,
		s,
		r;
		0 == t._n0 ? (e = -1, r = 0, s = i) : 0 == t._my ? (e = 0, r = 1, s = n) : (e = -1 / t._n0, s = (t._n0 - e) * i + t._mz, r = 1);
		var h = new QG;
		return h._n0 = e,
		h._mz = s,
		h._my = r,
		h._mt = i,
		h._mw = n,
		h._kw = Math[Vh](e, r),
		h[Kh] = Math.cos(h._kw),
		h[Zh] = Math.sin(h._kw),
		h
	}
	function si(t, i, n, e, s) {
		var r,
		h;
		i > e ? r = -1 : e > i && (r = 1),
		n > s ? h = -1 : s > n && (h = 1);
		var a,
		o;
		if (!r)
			return o = 0 > h ? t.y : t.bottom, {
				x: i,
				y: o
			};
		if (!h)
			return a = 0 > r ? t.x : t[Jh], {
				x: a,
				y: n
			};
		var f = (n - s) / (i - e),
		c = n - f * i,
		u = 0 > r ? i - t.x : i - t.right,
		_ = 0 > h ? n - t.y : n - t[Qh];
		return Math.abs(f) >= Math.abs(_ / u) ? (o = 0 > h ? t.y : t.bottom, a = (o - c) / f) : (a = 0 > r ? t.x : t[Jh], o = f * a + c), {
			x: a,
			y: o
		}
	}
	function ri(t, i, n, e, s, r, h, a) {
		return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
	}
	function hi(t, i, n, e, s, r) {
		return s >= t && t + n >= s && r >= i && i + e >= r
	}
	function ai(t, i, n, e, s, r, h, a, o) {
		return o && (t -= o, i -= o, n += o + o, e += o + o),
		s >= t && r >= i && t + n >= s + h && i + e >= r + a
	}
	function oi(t, i, n, e, s, r, h, a) {
		var o = t;
		o += n;
		var f = i;
		f += e;
		var c = s;
		c += h;
		var u = r;
		return u += a,
		s > t && (t = s),
		r > i && (i = r),
		o > c && (o = c),
		f > u && (f = u),
		o -= t,
		f -= i,
		0 > o || 0 > f ? null : new iH(t, i, o, f)
	}
	function fi(t) {
		return ta in t && ia in t
	}
	function ci(t, i, e) {
		if (N(t) && (t = eH[na](t)), !t)
			return {
				x: 0,
				y: 0
			};
		if (t.x !== n)
			return {
				x: t.x,
				y: t.y
			};
		var s,
		r,
		h = t[ea],
		a = t.verticalPosition;
		switch (h) {
		case sH:
			s = 0;
			break;
		case hH:
			s = i;
			break;
		default:
			s = i / 2
		}
		switch (a) {
		case aH:
			r = 0;
			break;
		case fH:
			r = e;
			break;
		default:
			r = e / 2
		}
		return {
			x: s,
			y: r
		}
	}
	function ui(t, i, n) {
		t[Kr].add(i, n),
		t[sa](i, n)
	}
	function _i(t, i) {
		t._fm && (t._fm[Mh](i), t.onChildRemove(i))
	}
	function di(t) {
		return t[ra](/^-ms-/, ha)[ra](/-([\da-z])/gi, function (t, i) {
			return i[aa]()
		})
	}
	function li(t) {
		return t.replace(/[A-Z]/g, function (t) {
			return oa + t.toLowerCase()
		}).replace(/^ms-/, fa)
	}
	function vi(t, i) {
		var n = t[ca];
		if (!n)
			return !1;
		var e,
		s;
		for (e in i)
			i.hasOwnProperty(e) && (s = SH(e)) && (n[s] = i[e]);
		return t
	}
	function bi(t) {
		var i,
		n,
		e = "";
		for (i in t)
			t.hasOwnProperty(i) && (n = SH(i)) && (e += li(n) + ua + t[i] + _a);
		return e ? e[da](0, e[Wr] - 1) : e
	}
	function yi(t, i, n) {
		(i = SH(i)) && (t.style[i] = n)
	}
	function gi(t, i) {
		return MH ? (i && !N(i) && (i = bi(i)), MH[la] ? void MH.insertRule(t + va + i + ba, 0) : void(MH[ya] && MH[ya](t, i, 0))) : !1
	}
	function mi(t, i) {
		var n = t[ga];
		return n ? (i = i || t[ma](), i.width / n) : 1
	}
	function Ei(i, n) {
		i[Wh] && (i = i[Ea] && i[Ea][Wr] ? i[Ea][0] : i.touches[0]);
		var e = n[ma](),
		s = i[xa] || 0,
		r = i[pa] || 0;
		YG && zG && (t[wa] && s == i[Ta] && (s -= t[wa]), t.pageYOffset && r == i.pageY && (r -= t[Oa])),
		s -= e.left,
		r -= e.top;
		var h = mi(n, e);
		return h && 1 !== h && (s /= h, r /= h), {
			x: s,
			y: r
		}
	}
	function xi(t, i) {
		var n,
		e;
		t.touches ? (n = t.cx, e = t.cy) : (n = t[xa], e = t[pa]);
		var s = mi(i);
		return s && 1 !== s && (n /= s, e /= s), {
			timeStamp: t[Ia],
			x: n,
			y: e
		}
	}
	function pi(t, i, n) {
		this._mc = t,
		this[Ma] = n,
		this[ka] = i,
		this[Sa] = new Ti,
		this[Aa]()
	}
	function wi(t) {
		return FG && t[Ca] || !FG && t[Ra]
	}
	function Ti() {
		this[La] = []
	}
	function Oi(t, i, n, e, s) {
		Mi(t, function (e) {
			if (i) {
				var s = e.responseXML;
				if (!s)
					return void(n || hq)(Pa + t + Da);
				i(s)
			}
		}, n, e, s)
	}
	function Ii(t, i, n, e, s) {
		Mi(t, function (e) {
			if (i) {
				var s,
				r = e[ja];
				if (!r)
					return (n || hq)(Pa + t + Na), s = new Error(Pa + t + Na), i(r, s);
				try {
					r = JSON[Ba](r)
				} catch (h) {
					(n || hq)(h),
					s = h
				}
				i(r, s)
			}
		}, n, e, s)
	}
	function Mi(t, i, n, e, s) {
		(n === !1 || e === !1) && (s = !1);
		try {
			var r = new XMLHttpRequest,
			h = encodeURI(t);
			if (s !== !1) {
				var a;
				a = h[eh]($a) > 0 ? "&" : $a,
				h += a + za + Date.now()
			}
			r[Fa](Ga, h),
			r[Ha] = function () {
				return 4 == r.readyState ? r[qa] && 200 != r.status ? void(n || hq)(Pa + t + Ya) : void(i && i(r)) : void 0
			},
			r[Ua](e)
		} catch (o) {
			(n || hq)(Pa + t + Ya, o)
		}
	}
	function ri(t, i, n, e, s, r, h, a) {
		return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
	}
	function ai(t, i, n, e, s, r, h, a) {
		return s >= t && r >= i && t + n >= s + h && i + e >= r + a
	}
	function ki(t, i, n) {
		return t instanceof Object && t.x ? Ai(t, i, 0, 0) : Si(t, i, n, 0, 0)
	}
	function Si(t, i, n, e, s) {
		var r = Math.sin(n),
		h = Math.cos(n),
		a = t - e,
		o = i - s;
		return t = a * h - o * r + e,
		i = a * r + o * h + s,
		new ZG(t, i, n)
	}
	function Ai(t, i, n, e) {
		n = n || 0,
		e = e || 0;
		var s = Math.sin(i),
		r = Math.cos(i),
		h = t.x - n,
		a = t.y - e;
		return t.x = h * r - a * s + n,
		t.y = h * s + a * r + e,
		t
	}
	function Ci(t, i, n) {
		return Ri(t, i, n, 0, 0)
	}
	function Ri(t, i, n, e, s) {
		var r = Si(t.x, t.y, i, e, s),
		h = Si(t.x + t.width, t.y, i, e, s),
		a = Si(t.x + t.width, t.y + t[Wa], i, e, s),
		o = Si(t.x, t.y + t[Wa], i, e, s);
		return n ? n[Xa]() : n = new iH,
		n.addPoint(r),
		n[Va](h),
		n[Va](a),
		n.addPoint(o),
		n
	}
	function Li(t, i) {
		var n = this.ratio || 1;
		this[ca].width = t + Ka,
		this.style[Wa] = i + Ka,
		this.width = t * n,
		this[Wa] = i * n
	}
	function Pi(t) {
		var i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t[Za] || t[Ja] || t.backingStorePixelRatio || 1;
		return fq / i
	}
	function Di(t, n, e) {
		var s = i[Qa](to);
		if (s.g = s[io](no), t !== !0 && !e)
			return t && n && (s.width = t, s[Wa] = n), s;
		var r = s.g;
		return r[eo] = s[eo] = Pi(r),
		s[so] = Li,
		r._l2 = function () {
			this[to][ro] = this[to][ro]
		},
		t && n && s[so](t, n),
		s
	}
	function ji(t, i) {
		return cq || (cq = Di()),
		t && i && (cq[ro] = t, cq[Wa] = i),
		cq.g
	}
	function Ni(t, i, n) {
		return (n || WG[ho]) + Ih + (i || WG[ao]) + oo + (t || WG[fo])
	}
	function Bi(t, i, n, e, s, r, h, a, o, f) {
		if (t[co](), t[uo](n, e), uq && _q > h) {
			var c = h / _q;
			t.scale(c, c),
			h = _q,
			f = null
		}
		o || (o = WG.LINE_HEIGHT),
		h || (h = WG.FONT_SIZE),
		o *= h,
		t[_o] = f || Ni(r, h, a),
		t[lo] = s,
		t[vo] = bo;
		for (var u = o / 2, _ = i[Oh](yo), d = 0, l = _[Wr]; l > d; d++) {
			var v = _[d];
			t.fillText(v, 0, u),
			u += o
		}
		t[go]()
	}
	function $i(t, i, n, e, s, r) {
		if (!t)
			return {
				width: 0,
				height: 0
			};
		if (i || (i = WG[ao]), uq && _q > i) {
			var h = i / _q,
			a = $i(t, _q, n, e, s);
			return a[ro] *= h,
			a[Wa] *= h,
			a
		}
		var o = ji();
		o[_o] = r || Ni(n, i, e),
		s || (s = WG[mo]);
		for (var f = i * s, c = 0, u = 0, _ = t.split(yo), d = 0, l = _[Wr]; l > d; d++) {
			var v = _[d];
			c = Math.max(o[Eo](v).width, c),
			u += f
		}
		return {
			width: c,
			height: u
		}
	}
	function zi(t, i, n, e, s) {
		var r;
		try {
			r = t.getImageData(i, n, e, s)
		} catch (h) {}
		return r
	}
	function Fi(t) {
		return Math.log(t + Math[xo](t * t + 1))
	}
	function Gi(t, i) {
		i = i || t(1);
		var n = 1 / i,
		e = .5 * n,
		s = Math.min(1, i / 100);
		return function (r) {
			if (0 >= r)
				return 0;
			if (r >= i)
				return 1;
			for (var h = r * n, a = 0; a++ < 10; ) {
				var o = t(h),
				f = r - o;
				if (Math.abs(f) <= s)
					return h;
				h += f * e
			}
			return h
		}
	}
	function Hi(t, i, n) {
		var e = 1 - t,
		s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
		r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
		if (n) {
			var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
			a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
			return {
				x: s,
				y: r,
				rotate: Math[Vh](a, h)
			}
		}
		return {
			t: t,
			x: s,
			y: r
		}
	}
	function qi(t, i, n) {
		var e = t - 2 * i + n;
		return 0 != e ? (t - i) / e : -1
	}
	function Yi(t, i) {
		i.add(t[4], t[5]);
		var n = qi(t[0], t[2], t[4]);
		if (n > 0 && 1 > n) {
			var e = Hi(n, t);
			i.add(e.x, e.y)
		}
		var s = qi(t[1], t[3], t[5]);
		if (s > 0 && 1 > s) {
			var e = Hi(s, t);
			i.add(e.x, e.y)
		}
		return i
	}
	function Ui(t, i) {
		return Math.abs(t - i) < 1e-7
	}
	function Wi(t, i) {
		return Ui(t[0], i[0]) && Ui(t[1], i[1])
	}
	function Xi(t) {
		if (Wi([t[0], t[1]], [t[2], t[3]])) {
			var i = t[0],
			n = t[1],
			e = t[4],
			s = t[5],
			r = Math.sqrt(dq(i, n, e, s));
			return function (t) {
				return r * t
			}
		}
		if (Wi([t[0], t[1]], [t[4], t[5]]) || Wi([t[2], t[3]], [t[4], t[5]])) {
			var i = t[0],
			n = t[1],
			e = t[2],
			s = t[3],
			r = Math.sqrt(dq(i, n, e, s));
			return function (t) {
				return r * t
			}
		}
		var h = t[0],
		a = t[2],
		o = t[4],
		f = h - 2 * a + o,
		c = 2 * a - 2 * h;
		h = t[1],
		a = t[3],
		o = t[5];
		var u = h - 2 * a + o,
		_ = 2 * a - 2 * h,
		d = 4 * (f * f + u * u),
		l = 4 * (f * c + u * _),
		v = c * c + _ * _,
		r = 4 * d * v - l * l,
		b = 1 / r,
		y = .125 * Math.pow(d, -1.5),
		g = 2 * Math[xo](d),
		m = (r * Fi(l / Math[xo](r)) + 2 * Math[xo](d) * l * Math.sqrt(v)) * y;
		return function (t) {
			var i = l + 2 * t * d,
			n = i / Math[xo](r),
			e = i * i * b;
			return (r * Math.log(n + Math[xo](e + 1)) + g * i * Math[xo](v + t * l + t * t * d)) * y - m
		}
	}
	function Vi(t, i, n) {
		var e = 1 - t,
		s = i[0],
		r = i[2],
		h = i[4],
		a = i[6],
		o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
		if (n)
			var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
		s = i[1],
		r = i[3],
		h = i[5],
		a = i[7];
		var c = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
		if (n) {
			var u = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
			return {
				x: o,
				y: c,
				rotate: Math.atan2(u, f)
			}
		}
		return {
			x: o,
			y: c
		}
	}
	function Ki(t, i, n, e) {
		var s = -t + 3 * i - 3 * n + e;
		if (0 == s)
			return [(t - i) / (2 * n - 4 * i + 2 * t)];
		var r = 2 * t - 4 * i + 2 * n,
		h = i - t,
		a = r * r - 4 * s * h;
		return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[xo](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
	}
	function Zi(t, i) {
		i.add(t[6], t[7]);
		var n = Ki(t[0], t[2], t[4], t[6]);
		if (n)
			for (var e = 0; e < n[Wr]; e++) {
				var s = n[e];
				if (!(0 >= s || s >= 1)) {
					var r = Vi(s, t);
					i.add(r.x, r.y)
				}
			}
		if (n = Ki(t[1], t[3], t[5], t[7]))
			for (var e = 0; e < n[Wr]; e++) {
				var s = n[e];
				if (!(0 >= s || s >= 1)) {
					var r = Vi(s, t);
					i.add(r.x, r.y)
				}
			}
	}
	function Ji(t) {
		var i = {
			x: t[0],
			y: t[1]
		},
		n = {
			x: t[2],
			y: t[3]
		},
		e = {
			x: t[4],
			y: t[5]
		},
		s = {
			x: t[6],
			y: t[7]
		},
		r = i.x - 0,
		h = i.y - 0,
		a = n.x - 0,
		o = n.y - 0,
		f = e.x - 0,
		c = e.y - 0,
		u = s.x - 0,
		_ = s.y - 0,
		d = 3 * (-r + 3 * a - 3 * f + u),
		l = 6 * (r - 2 * a + f),
		v = 3 * (-r + a),
		b = 3 * (-h + 3 * o - 3 * c + _),
		y = 6 * (h - 2 * o + c),
		g = 3 * (-h + o),
		m = function (t) {
			var i = d * t * t + l * t + v,
			n = b * t * t + y * t + g;
			return Math[xo](i * i + n * n)
		},
		E = (m(0) + 4 * m(.5) + m(1)) / 6;
		return E
	}
	function Qi(t, i) {
		function n(t, i, n, e) {
			var s = -t + 3 * i - 3 * n + e,
			r = 2 * t - 4 * i + 2 * n,
			h = i - t;
			return function (t) {
				return 3 * (s * t * t + r * t + h)
			}
		}
		function e(t, i) {
			var n = s(t),
			e = r(t);
			return Math.sqrt(n * n + e * e) * i
		}
		var s = n(t[0], t[2], t[4], t[6]),
		r = n(t[1], t[3], t[5], t[7]);
		i = i || 100;
		var h = 1 / i;
		return function (t) {
			if (!t)
				return 0;
			for (var i, n = 0, s = 0; ; ) {
				if (i = n + h, i >= t)
					return s += e(n, i - n);
				s += e(n, h),
				n = i
			}
		}
	}
	function tn(t, i, n) {
		return dq(i, n, t.cx, t.cy) <= t[po] + lq
	}
	function nn(t, i, n, e) {
		return n = n || en(t, i),
		new sn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
	}
	function en(t, i) {
		return JG(t.x, t.y, i.x, i.y)
	}
	function sn(t, i, n, e, s, r, h) {
		this.cx = t,
		this.cy = i,
		this.r = n,
		this[po] = n * n,
		this.p1 = e,
		this.p2 = s,
		this.p3 = r,
		this[wo] = h
	}
	function rn(t, i, n, e) {
		this.cx = t,
		this.cy = i,
		this[ro] = n,
		this.height = e
	}
	function hn(t) {
		var i = t[0],
		n = t[1],
		e = t[2],
		s = sn._jtCircle(i, n, e);
		return on(t, i, n, e, s)
	}
	function an(t, i) {
		i = i || fn(t);
		for (var n, e = i.width / i[Wa], s = [], r = t[Wr], h = 0; r > h; h++)
			n = t[h], s.push({
				x: n.x,
				y: n.y * e
			});
		var a = hn(s);
		return a ? new rn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
	}
	function on(t, i, n, e, s) {
		for (var r, h, a = t.length, o = s[po], f = 0; a > f; f++)
			if (r = t[f], r != i && r != n && r != e) {
				var c = dq(s.cx, s.cy, r.x, r.y);
				c - lq > o && (o = c, h = r)
			}
		if (!h)
			return s;
		var u,
		_ = sn[To](h, i, n),
		d = sn[To](h, i, e),
		l = sn[To](h, e, n);
		return tn(_, e.x, e.y) && (u = _),
		tn(d, n.x, n.y) && (!u || u.r > d.r) && (u = d),
		tn(l, i.x, i.y) && (!u || u.r > l.r) && (u = l),
		i = u.p1,
		n = u.p2,
		e = u.p3 || u[wo],
		on(t, i, n, e, u)
	}
	function fn(t) {
		for (var i, n = t[Wr], e = new iH, s = 0; n > s; s++)
			i = t[s], e.add(i.x, i.y);
		return e
	}
	function cn(t, i, n, e, s) {
		this._66 && this[Oo]();
		var r = s ? this[Io](s) : this[Mo],
		h = n / r[ro],
		a = t - h * r.x,
		o = e / r[Wa],
		f = i - o * r.y,
		c = this._fb,
		u = [];
		return l(c, function (t) {
			var i = t[ih](),
			n = i[La];
			if (n && n[Wr]) {
				for (var e = n[Wr], s = [], r = 0; e > r; r++) {
					var c = n[r];
					r++;
					var _ = n[r];
					c = h * c + a,
					_ = o * _ + f,
					s[nh](c),
					s[nh](_)
				}
				i[La] = s
			}
			u[nh](i)
		}, this),
		new Yq(u)
	}
	function un(t, i, n, e, s, r) {
		if (s = s || 0, n = n || 0, !s && !r)
			return !1;
		if (!e) {
			var h = this[Io](s);
			if (!h[ko](t, i, n))
				return !1
		}
		var a = Math[So](2 * n) || 1,
		o = ji(a, a),
		f = (o[to], -t + n),
		c = -i + n;
		if (o[Ao](1, 0, 0, 1, f, c), !o[Co]) {
			this._lm(o),
			s && o[Ro](),
			r && o.fill();
			var u = zi(o, 0, 0, a, a);
			if (!u)
				return !1;
			u = u[Lo];
			for (var _ = u.length / 4; _ > 0; ) {
				if (u[4 * _ - 1] > qq)
					return !0;
				--_
			}
			return !1
		}
		return o.lineWidth = (s || 0) + 2 * n,
		this._lm(o),
		s && o.isPointInStroke(n, n) ? !0 : r ? o.isPointInPath(n, n) : !1
	}
	function _n(t, i, n) {
		if (!this._j2)
			return null;
		var e = this._fb;
		if (e.length < 2)
			return null;
		n === !1 && (t += this._j2);
		var s = e[0];
		if (0 >= t)
			return Ys(s[La][0], s[La][1], e[1][La][0], e[1].points[1], t, i);
		if (t >= this._j2) {
			s = e[e[Wr] - 1];
			var r,
			h,
			a = s[La],
			o = a.length,
			f = a[o - 2],
			c = a[o - 1];
			if (o >= 4)
				r = a[o - 4], h = a[o - 3];
			else {
				s = e[e[Wr] - 2];
				var u = s[Po];
				r = u.x,
				h = u.y
			}
			return Ys(f, c, f + f - r, c + c - h, t - this._j2, i)
		}
		for (var _, d = 0, l = 1, o = e[Wr]; o > l; l++)
			if (_ = e[l], _._j2) {
				if (!(d + _._j2 < t)) {
					var v,
					u = s[Po];
					if (_[Do] == Fq) {
						var b = _[La];
						v = dn(t - d, _, u.x, u.y, b[0], b[1], b[2], b[3], _._r)
					} else {
						if (!_._lf)
							return Ys(u.x, u.y, _[La][0], _[La][1], t - d, i);
						var y = Gi(_._lf, _._j2)(t - d),
						b = _.points;
						v = _[Do] == zq && 6 == b[Wr] ? Vi(y, [u.x, u.y].concat(b), !0) : Hi(y, [u.x, u.y][Qr](b), !0)
					}
					return i && (v.x -= i * Math.sin(v.rotate || 0), v.y += i * Math.cos(v.rotate || 0)),
					v
				}
				d += _._j2,
				s = _
			} else
				s = _
	}
	function dn(t, i, n, e, s, r, h, a) {
		if (t <= i._l1)
			return Ys(n, e, s, r, t, t);
		if (t >= i._j2)
			return t -= i._j2, Ys(i[jo], i[No], h, a, t, t);
		if (t -= i._l1, i._o) {
			var o = t / i._r;
			i[Bo] && (o = -o);
			var f = Si(i[$o], i._p1y, o, i._o.x, i._o.y);
			return f[zo] += i[Fo] || 0,
			f[zo] += Math.PI,
			f
		}
		return Ys(i[$o], i[Go], i[jo], i[No], t, t)
	}
	function ei(t, i, n) {
		var e,
		s,
		r;
		0 == t._n0 ? (e = -1, r = 0, s = i) : 0 == t._my ? (e = 0, r = 1, s = n) : (e = -1 / t._n0, s = (t._n0 - e) * i + t._mz, r = 1);
		var h = new QG;
		return h._n0 = e,
		h._mz = s,
		h._my = r,
		h._mt = i,
		h._mw = n,
		h
	}
	function ln(t) {
		return t %= 2 * Math.PI,
		0 > t && (t += 2 * Math.PI),
		t
	}
	function vn(t, i, n, e, s, r, h, a) {
		var o = JG(i, n, e, s),
		f = JG(e, s, r, h);
		if (!o || !f)
			return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._j2 = 0;
		var c = yn(e, s, i, n),
		u = yn(e, s, r, h);
		t._n01 = c,
		t[Ho] = u;
		var _ = c - u;
		_ = ln(_),
		_ > Math.PI && (_ = 2 * Math.PI - _, t[Bo] = !0);
		var d = Math.PI - _,
		l = Math.tan(_ / 2),
		v = a / l,
		b = Math.min(o, f);
		v > b && (v = b, a = l * v);
		var y,
		g = e + Math.cos(c) * v,
		m = s + Math.sin(c) * v,
		E = e + Math.cos(u) * v,
		x = s + Math.sin(u) * v,
		p = new QG(i, n, e, s),
		w = new QG(e, s, r, h),
		T = ei(p, g, m),
		O = ei(w, E, x),
		I = T._32(O),
		M = Math[Vh](m - I.y, g - I.x),
		k = Math[Vh](x - I.y, E - I.x);
		y = t._CCW ? k : M;
		for (var S, A = 0; 4 > A; ) {
			var C = A * VG;
			if (ln(C - y) <= d) {
				var R,
				L;
				if (S ? S++ : S = 1, 0 == A ? (R = I.x + a, L = I.y) : 1 == A ? (R = I.x, L = I.y + a) : 2 == A ? (R = I.x - a, L = I.y) : (R = I.x, L = I.y - a), t[qo + S] = {
						x: R,
						y: L
					}, 2 == S)
					break
			}
			A++
		}
		return t[$o] = g,
		t[Go] = m,
		t[jo] = E,
		t[No] = x,
		t._o = I,
		t._d = v,
		t._r = a,
		t._l1 = o - v,
		t._l2 = f - v,
		t._j2 = t._l1 + d * a
	}
	function bn(t, i, n, e, s, r, h) {
		var a = yn(n, e, t, i),
		o = yn(n, e, s, r),
		f = a - o;
		return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
	}
	function yn(t, i, n, e) {
		return Math[Vh](e - i, n - t)
	}
	function gn(t) {
		var i = bq[Yo](t);
		if (i)
			return i[1];
		var n = t[Uo](Uh);
		return n >= 0 && n < t[Wr] - 1 ? t[da](n + 1) : void 0
	}
	function mn(t) {
		if (!t)
			return null;
		if (t instanceof Yq)
			return wq;
		if (t[Wo]instanceof Function)
			return pq;
		if (N(t)) {
			var i = gn(t);
			if (i) {
				if (!LG && yq.test(i))
					return xq;
				if (gq[Xo](i))
					return Eq
			}
			return mq
		}
	}
	function En(t, i, n) {
		if (this._lr = mn(t), !this._lr)
			throw new Error("the image format is not supported", t);
		this._lq = t,
		this[Vo] = i,
		this._8t = n,
		this[ro] = i || WG.IMAGE_WIDTH,
		this[Wa] = n || WG[Ko],
		this._jf = {}
	}
	function xn(t, i, n, e) {
		return i ? (Mq[t] = new En(i, n, e), t) : void delete Mq[t]
	}
	function pn(t) {
		if (t._kg)
			return t._kg;
		var i = N(t);
		if (!i && !t[lh])
			return t._kg = new En(t);
		var n = t.name || t;
		return n in Mq ? Mq[n] : Mq[n] = new En(t)
	}
	function wn(t) {
		return t in Mq
	}
	function Tn(t, i, n) {
		n = n || {};
		var e = t[Io](n[Zo]);
		if (!e[ro] || !e[Wa])
			return !1;
		var s = i.getContext(no),
		r = i[eo] || 1,
		h = n[Jo] || Qo,
		a = /full/i.test(h),
		o = /uniform/i[Xo](h),
		f = 1,
		c = 1;
		if (a) {
			var u = i[ro],
			_ = i[Wa],
			d = n.padding,
			l = 0,
			v = 0;
			if (d) {
				var b,
				y,
				g,
				m;
				j(d) ? b = y = g = m = d : (b = d.top || 0, y = d.bottom || 0, g = d[tf] || 0, m = d.right || 0),
				u -= g + m,
				_ -= b + y,
				l += g,
				v += b
			}
			f = u / e[ro],
			c = _ / e[Wa],
			o && (f > c ? (l += (u - c * e[ro]) / 2, f = c) : c > f && (v += (_ - f * e[Wa]) / 2, c = f)),
			(l || v) && s.translate(l, v)
		}
		s[uo](-e.x * f, -e.y * c),
		t[Wo](s, r, n, f, c, !0)
	}
	function On(t, i, n) {
		var e = pn(t);
		return e ? (e[Oo](), (e._lr == xq || e._67()) && e[nf](function (t) {
				t[ef] && (this[ro] = this[ro], Tn(t.source, this, n))
			}, i), void Tn(e, i, n)) : (aq.error(sf + t), !1)
	}
	function In(t, i, e, s) {
		var r = t[Wr];
		if (r && !(0 > r)) {
			s = s || 1;
			for (var h, a, o, f = [], c = 0; c++ < r; )
				if (h = t[rf](c, 0), h && JG(i, e, h.x, h.y) <= s) {
					a = c,
					o = h[zo];
					break
				}
			if (a !== n) {
				for (var u, _, d = 0, c = 0, l = t._fb.length; l > c; c++) {
					if (h = t._fb[c], !u && (d += h._j2 || 0, d > a))
						if (u = !0, h.type == Bq || h.type == Gq)
							f[nh](new Hq(Bq, [i, e]));
						else {
							var v = Math.max(10, h._j2 / 6),
							b = v * Math.sin(o),
							y = v * Math.cos(o);
							if (h[Do] == zq) {
								var g = h.points[0],
								m = h[La][1];
								if (_) {
									var E = new QG(i, e, i + y, e + b),
									x = E._32(new QG(_[Po].x, _[Po].y, h[La][0], h[La][1]));
									x.x !== n && (g = x.x, m = x.y)
								}
								f[nh](new Hq(zq, [g, m, i - y, e - b, i, e]))
							} else
								f[nh](new Hq($q, [i - y, e - b, i, e]));
							if (h[La])
								if (h[Do] == zq) {
									h[La][0] = i + y,
									h.points[1] = e + b;
									var E = new QG(i, e, i + y, e + b),
									x = E._32(new QG(h[La][2], h[La][3], h[La][4], h[La][5]));
									x.x !== n && (h[La][2] = x.x, h[La][3] = x.y)
								} else if (h.type == $q) {
									h[Do] = zq,
									h.points = [i + y, e + b].concat(h.points);
									var E = new QG(i, e, i + y, e + b),
									x = E._32(new QG(h[La][2], h[La][3], h.points[4], h.points[5]));
									x.x !== n && (h[La][2] = x.x, h[La][3] = x.y)
								} else
									h[Do] == Bq && (h[Do] = $q, h[La] = [i + y, e + b].concat(h[La]), c == l - 1 && (h[hf] = !0))
						}
					f[nh](h),
					_ = h
				}
				return f
			}
		}
	}
	function Mn(t) {
		var i = t[ro],
		n = t[Wa],
		e = zi(t.g, 0, 0, i, n);
		return e ? Sn(e[Lo], i, n) : void 0
	}
	function kn(t, i, n) {
		this._$z(t, i, n)
	}
	function Sn(t, i, n) {
		return new kn(t, i, n)
	}
	function An(t) {
		if (Fh == t[0]) {
			if (t = t.substring(1), 3 == t[Wr])
				t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
			else if (6 != t[Wr])
				return;
			return t = parseInt(t, 16),
			[t >> 16 & 255, t >> 8 & 255, 255 & t]
		}
		if (/^rgb/i[Xo](t)) {
			var i = t[eh](af),
			n = t.indexOf(zh);
			if (0 > i || i > n)
				return;
			if (t = t[da](i + 1, n), t = t[Oh]($h), t[Wr] < 3)
				return;
			var e = parseInt(t[0]),
			s = parseInt(t[1]),
			r = parseInt(t[2]),
			h = 3 == t[Wr] ? 255 : parseInt(t[3]);
			return [e, s, r, h]
		}
		aq[of]("color format error, [" + t + ff)
	}
	function Cn(t, i, n) {
		return n || (n = WG[cf]),
		n == oq[uf] ? t * i : n == oq.BLEND_MODE_DARKEN ? Math.min(t, i) : n == oq.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : n == oq.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == oq[_f] ? Math.max(t, i) : n == oq[df] ? t + i - t * i : i
	}
	function Rn(t, i, n) {
		var e = zi(t.g, 0, 0, t.width, t.height);
		if (e) {
			var s = e[Lo];
			if (n instanceof Function)
				s = n(t, s, i) || s;
			else {
				var r = i[0] / 255,
				h = i[1] / 255,
				a = i[2] / 255;
				if (n == oq[lf])
					for (var o = 0, f = s.length; f > o; o += 4) {
						var c = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
						s[o] = c * r | 0,
						s[o + 1] = c * h | 0,
						s[o + 2] = c * a | 0
					}
				else
					for (var o = 0, f = s[Wr]; f > o; o += 4)
						s[o] = 255 * Cn(r, s[o] / 255, n) | 0, s[o + 1] = 255 * Cn(h, s[o + 1] / 255, n) | 0, s[o + 2] = 255 * Cn(a, s[o + 2] / 255, n) | 0
			}
			var t = Di(t.width, t[Wa]);
			return t.g.putImageData(e, 0, 0),
			t
		}
	}
	function Ln(t, i, n, e) {
		return 1 > n && (n = 1),
		Pn(t - n, i - n, 2 * n, 2 * n, e)
	}
	function Pn(t, i, n, e, s) {
		n = Math[So](n) || 1,
		e = Math[So](e) || 1;
		var r = ji(n, e);
		r[Ao](1, 0, 0, 1, -t, -i),
		s[Wo](r);
		var h = zi(r, 0, 0, n, e);
		if (!h)
			return !1;
		h = h[Lo];
		for (var a = h.length / 4; a-- > 0; )
			if (h[4 * a - 1] > qq)
				return !0;
		return !1
	}
	function Dn(t, i, n, e, s, r) {
		t -= s.$x,
		i -= s.$y;
		var h = s._fo[vf](t, i, n, e);
		if (!h)
			return !1;
		t = h.x * r,
		i = h.y * r,
		n = h[ro] * r,
		e = h[Wa] * r,
		n = Math.round(n) || 1,
		e = Math[So](e) || 1;
		var a = ji(),
		o = a[to];
		o.width < n || o[Wa] < e ? (o[ro] = n, o.height = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, e)),
		a[Ao](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r),
		a.scale(r, r),
		s._k0(a, 1);
		var f = zi(a, 0, 0, n, e);
		if (!f)
			return !1;
		f = f[Lo];
		for (var c = f.length / 4; c-- > 0; )
			if (f[4 * c - 1] > qq)
				return !0;
		return !1
	}
	function jn(t, i, n, e, s, r, h, a, o) {
		if (hi(t, i, n, e, a, o))
			return null;
		var f,
		c,
		u,
		_ = new Hq(Bq, [t + n - s, i]),
		d = new Hq($q, [t + n, i, t + n, i + r]),
		l = new Hq(Bq, [t + n, i + e - r]),
		v = new Hq($q, [t + n, i + e, t + n - s, i + e]),
		b = new Hq(Bq, [t + s, i + e]),
		y = new Hq($q, [t, i + e, t, i + e - r]),
		g = new Hq(Bq, [t, i + r]),
		m = new Hq($q, [t, i, t + s, i]),
		E = (new Hq(Gq), [_, d, l, v, b, y, g, m]),
		x = new iH(t + s, i + r, n - s - s, e - r - r);
		t > a ? (f = sH, u = 5) : a > t + n ? (f = hH, u = 1) : (f = rH, u = 0),
		i > o ? (c = aH, f == sH && (u = 7)) : o > i + e ? (c = fH, f == hH ? u = 3 : f == rH && (u = 4)) : (c = oH, f == sH ? u = 6 : f == hH && (u = 2));
		var p = Gn(u, t, i, n, e, s, r, h, a, o, x),
		w = p[0],
		T = p[1],
		O = new Yq,
		I = O._fb;
		I[nh](new Hq(Nq, [w.x, w.y])),
		I[nh](new Hq(Bq, [a, o])),
		I[nh](new Hq(Bq, [T.x, T.y])),
		T._mb && (I[nh](T._mb), T[bf]++);
		for (var M = T._mbNO % 8, k = w[bf]; I[nh](E[M]), ++M, M %= 8, M != k; );
		return w._mb && I[nh](w._mb),
		O[yf](),
		O
	}
	function Nn(t, i, e, s, r, h, a, o, f, c, u, _, d, l) {
		var v = new QG(_, d, e, s),
		b = new QG(i[0], i[1], i[4], i[5]),
		y = b._32(v, u),
		g = y[0],
		m = y[1];
		if (g._rest !== n) {
			g[bf] = (t - 1) % 8,
			m._mbNO = (t + 1) % 8;
			var E = g[gf];
			7 == t ? (g.y = h + c + Math.min(l.height, E), m.x = r + f + Math.min(l[ro], E)) : 5 == t ? (g.x = r + f + Math.min(l.width, E), m.y = h + o - c - Math.min(l.height, E)) : 3 == t ? (g.y = h + o - c - Math.min(l[Wa], E), m.x = r + a - f - Math.min(l.width, E)) : 1 == t && (g.x = r + a - f - Math.min(l[ro], E), m.y = h + c + Math.min(l.height, E))
		} else {
			v._mp(v._mt, v._mw, g.x, g.y),
			g = v._$c(i),
			v._mp(v._mt, v._mw, m.x, m.y),
			m = v._$c(i);
			var x = Hn(i, [g, m]),
			p = x[0],
			w = x[2];
			g[bf] = t,
			m[bf] = t,
			g._mb = new Hq($q, p[Zr](2)),
			m._mb = new Hq($q, w.slice(2))
		}
		return [g, m]
	}
	function Bn(t, i, n, e, s, r, h, a, o, f) {
		var c,
		u;
		if (o - a >= i + r)
			c = {
				y: n,
				x: o - a
			},
		c._mbNO = 0;
		else {
			c = {
				y: n + h,
				x: Math.max(i, o - a)
			};
			var _ = [i, n + h, i, n, i + r, n],
			d = new QG(o, f, c.x, c.y);
			if (c = d._$c(_)) {
				$(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
				var l = Hn(_, [c]);
				l = l[0],
				l && (c._mb = new Hq($q, l.slice(2))),
				c[bf] = 7
			} else
				c = {
					y: n,
					x: i + r
				},
			c._mbNO = 0
		}
		if (i + e - r >= o + a)
			u = {
				y: n,
				x: o + a
			},
		u[bf] = 0;
		else {
			u = {
				y: n + h,
				x: Math.min(i + e, o + a)
			};
			var v = [i + e - r, n, i + e, n, i + e, n + h],
			d = new QG(o, f, u.x, u.y);
			if (u = d._$c(v)) {
				$(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
				var l = Hn(v, [u]);
				l && l[l[Wr] - 1] && (u._mb = new Hq($q, l[l[Wr] - 1][Zr](2))),
				u[bf] = 1
			} else
				u = {
					y: n,
					x: i + e - r
				},
			u[bf] = 0
		}
		return [c, u]
	}
	function $n(t, i, n, e, s, r, h, a, o, f) {
		var c,
		u;
		if (f - a >= n + h)
			c = {
				x: i + e,
				y: f - a
			},
		c[bf] = 2;
		else {
			c = {
				x: i + e - r,
				y: Math.max(n, f - a)
			};
			var _ = [i + e - r, n, i + e, n, i + e, n + h],
			d = new QG(o, f, c.x, c.y);
			if (c = d._$c(_)) {
				$(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
				var l = Hn(_, [c]);
				l = l[0],
				l && (c._mb = new Hq($q, l[Zr](2))),
				c[bf] = 1
			} else
				c = {
					x: i + e,
					y: n + h
				},
			c._mbNO = 2
		}
		if (n + s - h >= f + a)
			u = {
				x: i + e,
				y: f + a
			},
		u._mbNO = 2;
		else {
			u = {
				x: i + e - r,
				y: Math.min(n + s, f + a)
			};
			var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
			d = new QG(o, f, u.x, u.y);
			if (u = d._$c(v)) {
				$(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
				var l = Hn(v, [u]);
				l[1] && (u._mb = new Hq($q, l[1][Zr](2))),
				u[bf] = 3
			} else
				u = {
					x: i + e,
					y: n + s - h
				},
			u[bf] = 2
		}
		return [c, u]
	}
	function zn(t, i, n, e, s, r, h, a, o, f) {
		var c,
		u;
		if (o - a >= i + r)
			u = {
				y: n + s,
				x: o - a
			},
		u._mbNO = 4;
		else {
			u = {
				y: n + s - h,
				x: Math.max(i, o - a)
			};
			var _ = [i + r, n + s, i, n + s, i, n + s - h],
			d = new QG(o, f, u.x, u.y);
			if (u = d._$c(_)) {
				$(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
				var l = Hn(_, [u]);
				l = l[l[Wr] - 1],
				l && (u._mb = new Hq($q, l[Zr](2))),
				u[bf] = 5
			} else
				u = {
					y: n + s,
					x: i + r
				},
			u[bf] = 4
		}
		if (i + e - r >= o + a)
			c = {
				y: n + s,
				x: o + a
			},
		c[bf] = 4;
		else {
			c = {
				y: n + s - h,
				x: Math.min(i + e, o + a)
			};
			var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
			d = new QG(o, f, c.x, c.y);
			if (c = d._$c(v)) {
				$(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
				var l = Hn(v, [c]);
				l[0] && (c._mb = new Hq($q, l[0][Zr](2))),
				c[bf] = 3
			} else
				c = {
					y: n + s,
					x: i + e - r
				},
			c[bf] = 4
		}
		return [c, u]
	}
	function Fn(t, i, n, e, s, r, h, a, o, f) {
		var c,
		u;
		if (f - a >= n + h)
			u = {
				x: i,
				y: f - a
			},
		u[bf] = 6;
		else {
			u = {
				x: i + r,
				y: Math.max(n, f - a)
			};
			var _ = [i, n + h, i, n, i + r, n],
			d = new QG(o, f, u.x, u.y);
			if (u = d._$c(_)) {
				$(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
				var l = Hn(_, [u]);
				l = l[l[Wr] - 1],
				l && (u._mb = new Hq($q, l[Zr](2)))
			} else
				u = {
					x: i,
					y: n + h
				};
			u._mbNO = 7
		}
		if (n + s - h >= f + a)
			c = {
				x: i,
				y: f + a
			},
		c[bf] = 6;
		else {
			c = {
				x: i + r,
				y: Math.min(n + s, f + a)
			};
			var v = [i + r, n + s, i, n + s, i, n + s - h],
			d = new QG(o, f, c.x, c.y);
			if (c = d._$c(v)) {
				$(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
				var l = Hn(v, [c]);
				l[0] && (c._mb = new Hq($q, l[0][Zr](2))),
				c[bf] = 5
			} else
				c = {
					x: i,
					y: n + s - h
				},
			c[bf] = 6
		}
		return [c, u]
	}
	function Gn(t, i, n, e, s, r, h, a, o, f, c) {
		var u = a / 2;
		switch (r = r || 1e-4, h = h || 1e-4, t) {
		case 7:
			var _ = [i, n + h, i, n, i + r, n],
			d = i + r,
			l = n + h;
			return Nn(t, _, d, l, i, n, e, s, r, h, a, o, f, c);
		case 5:
			return _ = [i + r, n + s, i, n + s, i, n + s - h],
			d = i + r,
			l = n + s - h,
			Nn(t, _, d, l, i, n, e, s, r, h, a, o, f, c);
		case 3:
			return _ = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
			d = i + e - r,
			l = n + s - h,
			Nn(t, _, d, l, i, n, e, s, r, h, a, o, f, c);
		case 1:
			return _ = [i + e - r, n, i + e, n, i + e, n + h],
			d = i + e - r,
			l = n + h,
			Nn(t, _, d, l, i, n, e, s, r, h, a, o, f, c);
		case 0:
			return Bn(t, i, n, e, s, r, h, u, o, f, c);
		case 2:
			return $n(t, i, n, e, s, r, h, u, o, f, c);
		case 4:
			return zn(t, i, n, e, s, r, h, u, o, f, c);
		case 6:
			return Fn(t, i, n, e, s, r, h, u, o, f, c)
		}
	}
	function Hn(t, i) {
		for (var e, s, r, h, a, o, f = t[0], c = t[1], u = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++)
			a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (u - f) * o, s = c + (_ - c) * o, r = u + (d - u) * o, h = _ + (l - _) * o, v[nh]([f, c, e, s, a.x, a.y]), f = a.x, c = a.y, u = r, _ = h) : v[nh](null);
		return r !== n && v.push([a.x, a.y, r, h, d, l]),
		v
	}
	function qn(t) {
		return this[mf] && this[Ef] && (t.x -= this[Ef].x, t.y -= this._n0j.y),
		this[xf] && Ai(t, this[xf]),
		t.x += this[pf] || 0,
		t.y += this[wf] || 0,
		this[Tf] && this.$_hostRotate ? Ai(t, this[Of]) : t
	}
	function Yn(t) {
		return this.$rotatable && this[Of] && Ai(t, -this[Of]),
		t.x -= this[pf] || 0,
		t.y -= this[wf] || 0,
		this[xf] && Ai(t, -this[xf]),
		this[mf] && this._n0j && (t.x += this[Ef].x, t.y += this._n0j.y),
		t
	}
	function Un() {
		var t = this[If];
		this[If] && (this[If] = !1, this.$invalidateAnchorPoint = !0, this._7z[Mf](this._jg), this.$padding && this._7z[kf](this[Sf]), this[Af] && this._7z[kf](this[Af]));
		var i = this._$q();
		if (i)
			var n = this.showPointer && this.$pointerWidth;
		return this[Cf] && this[mf] && (this[Cf] = !1, n && (t = !0), this._n0j = ci(this.$anchorPosition, this._7z.width, this._7z[Wa]), this[Ef].x += this._7z.x, this[Ef].y += this._7z.y),
		i ? (t && (this[Rf] = !0, Wn[Xr](this, n)), this[Rf] && (this[Rf] = !1, this._mzackgroundGradient = this[Lf] && this[Pf] && this[Pf][Mo] ? kq[hh][Df][Xr](this[Lf], this[Pf][Mo]) : null), t) : (this.__mePointer = !1, t)
	}
	function Wn(t) {
		var i = this._7z.x + this.$border / 2,
		n = this._7z.y + this.$border / 2,
		e = this._7z.width - this.$border,
		s = this._7z[Wa] - this.$border,
		r = 0,
		h = 0;
		if (this.$borderRadius && (j(this[jf]) ? r = h = this.$borderRadius : (r = this.$borderRadius.x || 0, h = this[jf].y || 0), r = Math.min(r, e / 2), h = Math.min(h, s / 2)), t && (this._pointerX = this[Ef].x - this.$offsetX + this.$pointerX, this._pointerY = this._n0j.y - this[wf] + this.$pointerY, !this._7z.intersectsPoint(this._pointerX, this._pointerY))) {
			var a = new Wq(i, n, e, s, r, h, this[Nf], this[Bf], this[$f]);
			return this[Pf] = a._mb,
			this[Pf][Mo].set(i, n, e, s),
			void(this[zf] = !0)
		}
		this[Pf] && this[Pf][Xa](),
		this[Pf] = bU[Ff](i, n, e, s, r, h, this[Pf]),
		this[Pf][Mo].set(i, n, e, s)
	}
	function Xn(t, i, n, e) {
		return e && (t[ro] < 0 || t[Wa] < 0) ? (t.x = i, t.y = n, void(t[ro] = t[Wa] = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t[ro] && (t[ro] = i - t.x), void(n < t.y ? (t[Wa] += t.y - n, t.y = n) : n > t.y + t[Wa] && (t.height = n - t.y)))
	}
	function Vn(t, i, e) {
		var s,
		r = t[Gf],
		h = t[Hf] === n ? this[Hf] : t.layoutByPath;
		return this[qf]instanceof Yq && h ? (s = vq[Yf](r, this.$data, this[Zo], i, e), s.x *= this._j5, s.y *= this._j7) : (s = ci(r, this._7z[ro], this._7z[Wa]), s.x += this._7z.x, s.y += this._7z.y),
		qn[Xr](this, s)
	}
	function Kn(t, i) {
		if (i)
			if (i._7z[Uf]())
				t.$x = i.$x, t.$y = i.$y;
			else {
				var n = Vn.call(i, t);
				t.$x = n.x,
				t.$y = n.y,
				t._hostRotate = n[zo]
			}
		else
			t.$x = 0, t.$y = 0;
		t[Wf] && Kq[Xr](t)
	}
	function Zn(t) {
		if (t[Xf] === n) {
			var i,
			e;
			if (t.setLineDash)
				i = t[Vf], e = t[Kf];
			else {
				var s;
				if (t.mozDash !== n)
					s = Zf;
				else {
					if (t.webkitLineDash === n)
						return !1;
					s = Jf
				}
				e = function (t) {
					this[s] = t
				},
				i = function () {
					return this[s]
				}
			}
			K(t, Xf, {
				get: function () {
					return i[Xr](this)
				},
				set: function (t) {
					e.call(this, t)
				}
			})
		}
		if (t.lineDashOffset === n) {
			var r;
			if (t.mozDashOffset !== n)
				r = Qf;
			else {
				if (t[tc] === n)
					return;
				r = tc
			}
			K(t, ic, {
				get: function () {
					return this[r]
				},
				set: function (t) {
					this[r] = t
				}
			})
		}
	}
	function Jn(t, i, n, e, s) {
		var r,
		h,
		a,
		o,
		f,
		c,
		u,
		_,
		d = function (t) {
			return function (i) {
				t(i)
			}
		},
		l = function () {
			h = null,
			a = null,
			o = f,
			f = null,
			c = null
		},
		v = function (t) {
			r = t,
			u || (u = Di()),
			u.width = r[ro],
			u.height = r.height,
			i[ro] = r.width,
			i[Wa] = r[Wa]
		},
		b = function (t) {
			y(),
			l(),
			h = t[nc] ? t[ec] : null,
			a = 10 * t.delayTime,
			f = t[sc]
		},
		y = function () {
			if (c) {
				var t = c[rc](0, 0, r.width, r.height),
				n = {
					data: t,
					_pixels: Sn(t[Lo], r[ro], r.height),
					delay: a
				};
				s.call(i, n)
			}
		},
		g = function (t) {
			c || (c = u.getContext(no));
			var i = t[hc] ? t.lct : r.gct,
			n = c.getImageData(t[ac], t[oc], t[ro], t[Wa]);
			t.pixels.forEach(function (t, e) {
				h !== t ? (n[Lo][4 * e + 0] = i[t][0], n.data[4 * e + 1] = i[t][1], n[Lo][4 * e + 2] = i[t][2], n[Lo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[Lo][4 * e + 3] = 0)
			}),
			c[fc](n, t[ac], t.topPos)
		},
		m = function () {},
		E = {
			hdr: d(v),
			gce: d(b),
			com: d(m),
			app: {
				NETSCAPE: d(m)
			},
			img: d(g, !0),
			eof: function () {
				y(),
				n.call(i)
			}
		},
		x = new XMLHttpRequest;
		LG || x[cc]("text/plain; charset=x-user-defined"),
		x[uc] = function () {
			_ = new iY(x[ja]);
			try {
				eY(_, E)
			} catch (t) {
				e.call(i, Ba)
			}
		},
		x[_c] = function () {
			e.call(i, dc)
		},
		x[Fa](Ga, t, !0),
		x[Ua]()
	}
	function Qn(t) {
		var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
		return i[lc](function (n, e) {
			i[e] = t(n)
		}),
		i.join("")
	}
	function te(t, i) {
		try {
			if (null == t || t.length < 8)
				return;
			if (null == i || i[Wr] <= 0)
				return;
			for (var n = "", e = 0; e < i[Wr]; e++)
				n += i[vc](e).toString();
			var s = Math[Nh](n[Wr] / 5),
			r = parseInt(n[bc](s) + n[bc](2 * s) + n[bc](3 * s) + n.charAt(4 * s) + n[bc](5 * s), 10),
			h = Math[So](i[Wr] / 2),
			a = Math.pow(2, 31) - 1,
			o = parseInt(t[da](t[Wr] - 8, t[Wr]), 16);
			for (t = t[da](0, t.length - 8), n += o; n[Wr] > 10; )
				n = (parseInt(n[da](0, 10), 10) + parseInt(n.substring(10, n[Wr]), 10)).toString();
			n = (r * n + h) % a;
			for (var f = "", c = "", e = 0; e < t[Wr]; e += 2)
				f = parseInt(parseInt(t[da](e, e + 2), 16) ^ Math[Nh](n / a * 255), 10), c += String[yc](f), n = (r * n + h) % a;
			return 0 | c[0] ? PY = fY[gc + _Y + mc](c) : null
		} catch (u) {}
	}
	function ie() {
		var t = rY;
		if (!t)
			return void(zY = !0);
		LY = t;
		var i;
		t = t[Oh]($h);
		for (var n = 0; n < t.length && (i = te(t[n], aY), !(i && i[Oh](yo)[Wr] >= 8)); )
			1 == t[Wr] && (i = te(t[n], Ec)), n++;
		if (!i || i[Oh](yo)[Wr] < 8)
			return NY = !0, "" === aY || aY == xc + bY + pc + yY + wc || aY == Tc + vY + Oc ? (BY = HY, zY = !1, void(RY = !1)) : (BY = HY, void(zY = !0));
		RY = i.split(yo);
		var e = RY[3];
		if (e != qW)
			return void(NY = !0);
		zY = !1;
		var s = RY[0];
		(Ic == s || Mc == s) && (NY = !1);
		var r = RY[5];
		$Y = r;
		var h = RY[6];
		BY = h
	}
	function ne() {
		var t = LY;
		if (t) {
			var i;
			t = t[Oh]($h);
			for (var n = 0; n < t[Wr] && (i = qY(t[n], aY), !(i && i[Oh](yo).length >= 8)); )
				1 == t.length && (i = qY(t[n], Ec)), n++;
			if (i[Oh](yo)[Wr] >= 8)
				return void(FY = !1)
		}
		return aY && aY != xc + bY + pc + yY + wc && aY != Tc + vY + Oc ? void(FY = !0) : void(FY = !1)
	}
	function ee() {
		if (NY) {
			var t = _r[pY + Do]._k0,
			i = jY;
			_r[pY + Do]._k0 = function () {
				t[rh](this, arguments),
				i[Xr](this._mzaseCanvas, this.g)
			};
			var n = sU[pY + Do]._fg;
			sU[pY + Do]._fg = function (t) {
				n.apply(this, arguments),
				i[Xr](this, t)
			}
		}
	}
	function se() {
		if ($Y !== !0 && $Y) {
			var t = $Y[Oh](Uh);
			if (3 != t[Wr])
				return void(gU[hh]._k0 = null);
			var i = parseInt(t[0], 10),
			n = parseInt(t[1], 10),
			e = parseInt(t[2], 10),
			s = 3,
			r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
			hY > r && (gU.prototype._k0 = null)
		}
	}
	function re() {
		var t = 0 | BY;
		if (t) {
			var i = OH.prototype._kp;
			OH[pY + Do]._kp = function () {
				return this._jc.length > t ? !1 : i[rh](this, arguments)
			}
		}
	}
	function he() {
		zY && (XG[pY + Do]._kp = XG[pY + Do]._gm)
	}
	function ae() {
		if (FY) {
			var t = jY,
			i = sU[pY + Do]._fg;
			sU[pY + Do]._fg = function (n) {
				i[rh](this, arguments),
				t[Xr](this, n)
			}
		}
	}
	function oe() {
		if (GY) {
			var t = _r[pY + Do]._k0,
			i = jY;
			_r[pY + Do]._k0 = function () {
				t[rh](this, arguments),
				i[Xr](this._mzaseCanvas, this.g)
			}
		}
	}
	function fe() {
		RY === n && (sU[pY + Do]._j4 = iH.equals)
	}
	function ce(t) {
		var i = Di(!0);
		return Zn(i.g),
		i[kc] = function () {
			return !1
		},
		t.appendChild(i),
		i[xh] = VY,
		i
	}
	function d(t, i) {
		function n(t, n) {
			for (var e = t[Wr], s = n[Wr], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; )
				h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
			return h
		}
		function e(t) {
			var i = t.length,
			s = Math[th](i / 2);
			return 1 >= i ? t : n(e(t[Zr](0, s)), e(t.slice(s)))
		}
		return e(t)
	}
	function ue(t) {
		t.width = t.width
	}
	function _e(t) {
		iU || (iU = "imageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D[hh] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[hh] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[hh] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"),
		t[iU] = !1
	}
	function de(t, i, n, e, s) {
		e = X(i + e) - (i = W(i)),
		s = X(n + s) - (n = W(n)),
		t[Sc](i, n, e, s),
		t[Ac](i, n, e, s)
	}
	function W(t) {
		return Math[Nh](t)
	}
	function X(t) {
		return Math.ceil(t)
	}
	function le(t) {
		var i = [];
		return t[lc](function (t) {
			i[nh](-t)
		}),
		i
	}
	function ve(t) {
		return t %= hU,
		0 > t && (t += hU),
		t
	}
	function be(t, i, n, e, s, r, h, a) {
		var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h)),
		f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
		if (isNaN(o) || isNaN(f))
			return !1;
		if (t >= n) {
			if (!(o >= n && t >= o))
				return !1
		} else if (!(o >= t && n >= o))
			return !1;
		if (i >= e) {
			if (!(f >= e && i >= f))
				return !1
		} else if (!(f >= i && e >= f))
			return !1;
		if (s >= h) {
			if (!(o >= h && s >= o))
				return !1
		} else if (!(o >= s && h >= o))
			return !1;
		if (r >= a) {
			if (!(f >= a && r >= f))
				return !1
		} else if (!(f >= r && a >= f))
			return !1;
		return !0
	}
	function ye(t, i) {
		for (var n = 0, e = t[Wr]; e > n; ) {
			for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h; ) {
				var a = i[h],
				o = i[(h + 1) % e];
				if (be(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1]))
					return !0;
				h++
			}
			n++
		}
		return !1
	}
	function ge(t, i, n, e) {
		return [t * e - i * n, t * n + i * e]
	}
	function me(t) {
		return t[Cc] ? (t = t[Cc], t._eu ? t._eu : t instanceof yU && t._he === !1 ? t : null) : null
	}
	function Ee(t, i, n) {
		if (n = n || i[Rc], n == t)
			return !1;
		var e = t[Lc](n);
		return e || (e = new LW(t, n), t[Pc][n.id] = e),
		e._i9(i, t)
	}
	function xe(t, i, n) {
		if (n = n || i[Rc], n == t)
			return !1;
		var e = t[Lc](n);
		return e ? e._d8(i, t) : void 0
	}
	function pe(t, i, e) {
		return e === n && (e = i.toAgent),
		e != t ? (t._7r || (t._7r = new XG), t._7r.add(i) === !1 ? !1 : void t._8y++) : void 0
	}
	function we(t, i, n) {
		return t._7r && t._7r[Mh](i) !== !1 ? (t._8y--, void xe(t, i, n)) : !1
	}
	function Te(t, i) {
		return i[Dc] != t ? (t._8x || (t._8x = new XG), t._8x.add(i) === !1 ? !1 : void t._mzo++) : void 0
	}
	function Oe(t, i) {
		return t._8x && t._8x[Mh](i) !== !1 ? (t._mzo--, void xe(i[Dc], i, t)) : !1
	}
	function Ie(t, i) {
		if (i === n && (i = t instanceof dU), i) {
			if (t[jc]())
				return null;
			var e = Ie(t[Nc], !1);
			if (t.isLooped())
				return e;
			for (var s = Ie(t.to, !1); null != e && null != s; ) {
				if (e == s)
					return e;
				if (e[Bc](s))
					return s;
				if (s[Bc](e))
					return e;
				e = Ie(e, !1),
				s = Ie(s, !1)
			}
			return null
		}
		for (var r = t[Cc]; null != r; ) {
			if (r._ig())
				return r;
			r = r.parent
		}
		return null
	}
	function Me(t, i, n) {
		t._ig() && t.hasChildren() && t[Kr][lc](function (t) {
			t instanceof lU && i.add(t) && Me(t, i, n)
		}, this),
		t[$c]() && t._f0.forEach(function (t) {
			(null == n || n.accept(t)) && i.add(t) && Me(t, i, n)
		})
	}
	function ke(t, i) {
		i.parent ? i[Cc][zc](i, i[Cc][Fc] - 1) : t[Gc].setIndex(i, t.roots.length - 1)
	}
	function Se(t, i) {
		i[Cc] ? i[Cc][zc](i, 0) : t.roots.setIndex(i, 0)
	}
	function Ae(t, i) {
		if (i instanceof dU)
			return void(i[jc]() || Re(t, i));
		for (ke(t, i); i = i[Cc]; )
			ke(t, i)
	}
	function Ce(t, i) {
		if (i instanceof dU)
			return void(i[jc]() || Le(t, i));
		for (Se(t, i); i = i[Cc]; )
			Se(t, i)
	}
	function Re(t, i) {
		var n = i.fromAgent;
		if (i[Hc]())
			ke(t, n);
		else {
			var e = i.toAgent;
			ke(t, n),
			ke(t, e)
		}
	}
	function Le(t, i) {
		var n = i[Dc];
		if (i[Hc]())
			Se(t, n);
		else {
			var e = i.toAgent;
			Se(t, n),
			Se(t, e)
		}
	}
	function Pe(t, i) {
		return t._8y++,
		t._fr ? (i._ih = t._ib, t._ib._il = i, void(t._ib = i)) : (t._fr = i, void(t._ib = i))
	}
	function De(t, i) {
		t._8y--,
		t._ib == i && (t._ib = i._ih),
		i._ih ? i._ih._il = i._il : t._fr = i._il,
		i._il && (i._il._ih = i._ih),
		i._ih = null,
		i._il = null,
		xe(t, i, i.$to)
	}
	function je(t, i) {
		return t._mzo++,
		t._ia ? (i._k4 = t._j9, t._j9._k6 = i, void(t._j9 = i)) : (t._ia = i, void(t._j9 = i))
	}
	function Ne(t, i) {
		t[qc]--,
		t._j9 == i && (t._j9 = i._k4),
		i._k4 ? i._k4._k6 = i._k6 : t._ia = i._k6,
		i._k6 && (i._k6._k4 = i._k4),
		i._k4 = null,
		i._k6 = null
	}
	function Be(t, i) {
		return i = i || new XG,
		t[Yc](function (t) {
			i.add({
				id: t.id,
				edge: t,
				fromAgent: t[Uc]._eu,
				toAgent: t.$to._eu
			})
		}),
		t.forEachChild(function (t) {
			t instanceof lU && Be(t, i)
		}),
		i
	}
	function $e(t, i, n) {
		return Fe(t, i, n) === !1 ? !1 : ze(t, i, n)
	}
	function ze(t, i, n) {
		if (t._fr)
			for (var e = t._fr; e; ) {
				if (i.call(n, e) === !1)
					return !1;
				e = e._il
			}
	}
	function Fe(t, i, n) {
		if (t._ia)
			for (var e = t._ia; e; ) {
				if (i[Xr](n, e) === !1)
					return !1;
				e = e._k6
			}
	}
	function Ge(t, i, e, s, r, h, a) {
		return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t[Wc](i + h, e), t[Xc](i + s - h, e), t.quadTo(i + s, e, i + s, e + a), t[Xc](i + s, e + r - a), t[Vc](i + s, e + r, i + s - h, e + r), t[Xc](i + h, e + r), t[Vc](i, e + r, i, e + r - a), t[Xc](i, e + a), t[Vc](i, e, i + h, e), t[yf](), t) : (t[Wc](i, e), t.lineTo(i + s, e), t[Xc](i + s, e + r), t[Xc](i, e + r), t.closePath(), t)
	}
	function He(t, i) {
		var n = i.r || 1,
		e = i.cx || 0,
		s = i.cy || 0,
		r = n * Math.tan(Math.PI / 8),
		h = n * Math.sin(Math.PI / 4);
		t[Wc](e + n, s),
		t[Vc](e + n, s + r, e + h, s + h),
		t.quadTo(e + r, s + n, e, s + n),
		t[Vc](e - r, s + n, e - h, s + h),
		t[Vc](e - n, s + r, e - n, s),
		t.quadTo(e - n, s - r, e - h, s - h),
		t[Vc](e - r, s - n, e, s - n),
		t[Vc](e + r, s - n, e + h, s - h),
		t[Vc](e + n, s - r, e + n, s)
	}
	function qe(t, i, n, e, s) {
		i instanceof rn && (e = i.width, s = i[Wa], n = i.cy - s / 2, i = i.cx - e / 2);
		var r = .5522848,
		h = e / 2 * r,
		a = s / 2 * r,
		o = i + e,
		f = n + s,
		c = i + e / 2,
		u = n + s / 2;
		return t[Wc](i, u),
		t.curveTo(i, u - a, c - h, n, c, n),
		t[Kc](c + h, n, o, u - a, o, u),
		t[Kc](o, u + a, c + h, f, c, f),
		t[Kc](c - h, f, i, u + a, i, u),
		t
	}
	function Ye(t, i, n, e, s) {
		var r = 2 * e,
		h = 2 * s,
		a = i + e / 2,
		o = n + s / 2;
		return t[Wc](a - r / 4, o - h / 12),
		t[Xc](i + .306 * e, n + .579 * s),
		t[Xc](a - r / 6, o + h / 4),
		t[Xc](i + e / 2, n + .733 * s),
		t[Xc](a + r / 6, o + h / 4),
		t.lineTo(i + .693 * e, n + .579 * s),
		t[Xc](a + r / 4, o - h / 12),
		t[Xc](i + .611 * e, n + .332 * s),
		t[Xc](a + 0, o - h / 4),
		t[Xc](i + .388 * e, n + .332 * s),
		t[yf](),
		t
	}
	function Ue(t, i, n, e, s) {
		return t[Wc](i, n),
		t[Xc](i + e, n + s / 2),
		t[Xc](i, n + s),
		t.closePath(),
		t
	}
	function We(t, i, n, e, s) {
		return t[Wc](i, n + s / 2),
		t[Xc](i + e / 2, n),
		t[Xc](i + e, n + s / 2),
		t[Xc](i + e / 2, n + s),
		t[yf](),
		t
	}
	function Xe(t, i, n, e, s, r) {
		return t.moveTo(i, n),
		t[Xc](i + e, n + s / 2),
		t.lineTo(i, n + s),
		r || (t[Xc](i + .25 * e, n + s / 2), t[yf]()),
		t
	}
	function Ve(t, i, n, e, s) {
		if (!t || 3 > t)
			throw new Error("edge number must greater than 2");
		t = 0 | t,
		e = e || 50,
		s = s || 0,
		i = i || 0,
		n = n || 0;
		for (var r, h, a = 0, o = 2 * Math.PI / t, f = new Yq; t > a; )
			r = i + e * Math.cos(s), h = n + e * Math.sin(s), a ? f[Xc](r, h) : f[Wc](r, h), ++a, s += o;
		return f.closePath(),
		f
	}
	function Ke() {
		var t = new Yq;
		return t.moveTo(75, 40),
		t[Kc](75, 37, 70, 25, 50, 25),
		t[Kc](20, 25, 20, 62.5, 20, 62.5),
		t.curveTo(20, 80, 40, 102, 75, 120),
		t[Kc](110, 102, 130, 80, 130, 62.5),
		t[Kc](130, 62.5, 130, 25, 100, 25),
		t.curveTo(85, 25, 75, 37, 75, 40),
		t
	}
	function Ze() {
		var t = new Yq;
		return t.moveTo(20, 0),
		t[Xc](80, 0),
		t.lineTo(100, 100),
		t[Xc](0, 100),
		t[yf](),
		t
	}
	function Je() {
		var t = new Yq;
		return t[Wc](100, 0),
		t[Xc](100, 80),
		t[Xc](0, 100),
		t.lineTo(0, 20),
		t[yf](),
		t
	}
	function Qe() {
		var t = new Yq;
		return t[Wc](20, 0),
		t[Xc](100, 0),
		t[Xc](80, 100),
		t.lineTo(0, 100),
		t[yf](),
		t
	}
	function ts() {
		var t = new Yq;
		return t.moveTo(43, 23),
		t[Xc](28, 10),
		t.lineTo(37, 2),
		t[Xc](63, 31),
		t.lineTo(37, 59),
		t[Xc](28, 52),
		t[Xc](44, 38),
		t.lineTo(3, 38),
		t[Xc](3, 23),
		t.closePath(),
		t
	}
	function is() {
		var t = new Yq;
		return t.moveTo(1, 8),
		t.lineTo(7, 2),
		t[Xc](32, 26),
		t[Xc](7, 50),
		t.lineTo(1, 44),
		t[Xc](18, 26),
		t[yf](),
		t.moveTo(27, 8),
		t[Xc](33, 2),
		t[Xc](57, 26),
		t[Xc](33, 50),
		t.lineTo(27, 44),
		t[Xc](44, 26),
		t[yf](),
		t
	}
	function ns() {
		var t = new Yq;
		return t[Wc](0, 15),
		t[Xc](23, 15),
		t[Xc](23, 1),
		t[Xc](47, 23),
		t[Xc](23, 43),
		t[Xc](23, 29),
		t[Xc](0, 29),
		t.closePath(),
		t
	}
	function es() {
		var t = new Yq;
		return t[Wc](0, 21),
		t.lineTo(30, 21),
		t[Xc](19, 0),
		t[Xc](25, 0),
		t.lineTo(47, 25),
		t[Xc](25, 48),
		t[Xc](19, 48),
		t[Xc](30, 28),
		t[Xc](0, 28),
		t[yf](),
		t
	}
	function ss() {
		var t = new Yq;
		return t[Wc](0, 0),
		t[Xc](34, 24),
		t.lineTo(0, 48),
		t[Xc](14, 24),
		t.closePath(),
		t
	}
	function rs() {
		var t = new Yq;
		return t[Wc](20, 0),
		t[Xc](34, 14),
		t[Xc](20, 28),
		t.lineTo(22, 18),
		t[Xc](1, 25),
		t.lineTo(10, 14),
		t[Xc](1, 3),
		t[Xc](22, 10),
		t[yf](),
		t
	}
	function hs() {
		var t = new Yq;
		return t[Wc](4, 18),
		t[Xc](45, 18),
		t[Xc](37, 4),
		t.lineTo(83, 25),
		t.lineTo(37, 46),
		t.lineTo(45, 32),
		t[Xc](4, 32),
		t.closePath(),
		t
	}
	function as() {
		var t = new Yq;
		return t[Wc](17, 11),
		t.lineTo(27, 11),
		t[Xc](42, 27),
		t.lineTo(27, 42),
		t.lineTo(17, 42),
		t[Xc](28, 30),
		t.lineTo(4, 30),
		t[Xc](4, 23),
		t.lineTo(28, 23),
		t[yf](),
		t
	}
	function os() {
		bU[Zc](oq[Jc], qe(new Yq, 0, 0, 100, 100)),
		bU[Zc](oq[Qc], Ge(new Yq, 0, 0, 100, 100)),
		bU[Zc](oq.SHAPE_ROUNDRECT, Ge(new Yq, 0, 0, 100, 100, 20, 20)),
		bU[Zc](oq[tu], Ye(new Yq, 0, 0, 100, 100)),
		bU[Zc](oq[iu], Ue(new Yq, 0, 0, 100, 100)),
		bU[Zc](oq[nu], Ve(5)),
		bU[Zc](oq.SHAPE_HEXAGON, Ve(6)),
		bU[Zc](oq[eu], We(new Yq, 0, 0, 100, 100)),
		bU[Zc](oq[su], Ke()),
		bU[Zc](oq[ru], Ze()),
		bU.register(oq[hu], Je()),
		bU[Zc](oq[au], Qe());
		var t = new Yq;
		t[Wc](20, 0),
		t[Xc](40, 0),
		t[Xc](40, 20),
		t[Xc](60, 20),
		t[Xc](60, 40),
		t.lineTo(40, 40),
		t[Xc](40, 60),
		t[Xc](20, 60),
		t.lineTo(20, 40),
		t[Xc](0, 40),
		t.lineTo(0, 20),
		t.lineTo(20, 20),
		t[yf](),
		bU[Zc](oq.SHAPE_CROSS, t),
		bU[Zc](oq[ou], Xe(new Yq, 0, 0, 100, 100)),
		bU[Zc](oq.SHAPE_ARROW_1, ts()),
		bU.register(oq[fu], is()),
		bU.register(oq[cu], ns()),
		bU.register(oq[uu], es()),
		bU[Zc](oq.SHAPE_ARROW_5, ss()),
		bU[Zc](oq.SHAPE_ARROW_6, rs()),
		bU.register(oq.SHAPE_ARROW_7, hs()),
		bU.register(oq[_u], as()),
		bU.register(oq.SHAPE_ARROW_OPEN, Xe(new Yq, 0, 0, 100, 100, !0))
	}
	function fs() {
		w(this, fs, arguments),
		this[du] = !0
	}
	function cs() {
		w(this, cs),
		this._$r = new mH
	}
	function us() {
		if (this._he === !0) {
			var t = this._7r,
			i = this._8x;
			if (t)
				for (t = t._jc; t.length; ) {
					var n = t[0];
					we(this, n, n.toAgent)
				}
			if (i)
				for (i = i._jc; i[Wr]; ) {
					var n = i[0];
					Oe(this, n, n.fromAgent)
				}
			return void this[lu](function (t) {
				t._ig() && us[Xr](t)
			})
		}
		var e = Be(this);
		e[lc](function (t) {
			t = t[vu];
			var i = t[Uc],
			n = t.$to,
			e = i[Bc](this),
			s = n[Bc](this);
			e && !s ? (pe(this, t), Ee(this, t)) : s && !e && (Te(this, t), Ee(t[Dc], t, this))
		}, this)
	}
	function _s() {
		w(this, _s, arguments),
		this.$image = null
	}
	function ds(t, i, n, e) {
		return t[i] = n,
		e ? {
			get: function () {
				return this[i]
			},
			set: function (t) {
				if (t !== this[i]) {
					this[i] = t,
					!this[bu],
					this._18 = !0;
					for (var n = e.length; --n >= 0; )
						this[e[n]] = !0
				}
			}
		}
		 : {
			get: function () {
				return this[i]
			},
			set: function (t) {
				t !== this[i] && (this[i] = t)
			}
		}
	}
	function ls(t, i) {
		var n = {},
		e = {};
		for (var s in i) {
			var r = i[s];
			r.validateFlags && r.validateFlags.forEach(function (t, i, n) {
				n[i] = yu + t,
				e[t] = !0
			}),
			n[s] = ds(t, uh + s, r[bh], r.validateFlags)
		}
		for (var h in e)
			t[yu + h] = !0;
		Object[Yh](t, n)
	}
	function vs(t, i, n, e) {
		if (Array[Ch](i))
			for (var s = i.length; --s >= 0; )
				vs(t, i[s], n, e);
		else {
			var r = i.target;
			if (r) {
				if (r instanceof gU || (r = t[r]), !r)
					return
			} else
				r = t;
			if (e || (e = t[gu](i.property, n)), i.bindingProperty && (r[i[mu]] = e), i[Eu]) {
				var h = i[Eu];
				h instanceof Function || (h = t[h]),
				h instanceof Function && h[Xr](t, e, r)
			}
		}
	}
	function bs() {
		mU.forEach(function (t) {
			this[t] = {}
		}, this)
	}
	function ys(t, i, n, e) {
		return e == oq[xu] ? void(t[n] = i) : e == oq[pu] ? void t.set(n, i) : e == oq[wu] ? void t[Tu](n, i) : !1
	}
	function gs() {
		w(this, gs, arguments)
	}
	function ms() {
		w(this, ms, arguments)
	}
	function Es(t, i, n, e) {
		var s = xs(t, i, n, e),
		r = [];
		if (Os(t))
			ps(s, i, n, r, e[Ou](EU.EDGE_EXTEND));
		else {
			Ds(t, i, n, r, s, e);
			var h = ws(t, e),
			a = h ? As(t, s, i, n, e[Ou](EU[Iu])) : e[Ou](EU.EDGE_SPLIT_VALUE);
			0 == a && (s = !s)
		}
		return r
	}
	function xs(t, i, n) {
		if (null != t) {
			if (t == oq[Mu] || t == oq.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == oq[ku] || t == oq[Su] || t == oq[Au])
				return !0;
			if (t == oq[Cu] || t == oq[Ru] || t == oq.EDGE_TYPE_VERTICAL_HORIZONTAL || t == oq[Lu] || t == oq.EDGE_TYPE_EXTEND_BOTTOM)
				return !1
		}
		var e = ks(i, n),
		s = Ss(i, n);
		return e >= s
	}
	function ps(t, i, n, e, s) {
		t ? zs(i, n, e, s) : Fs(i, n, e, s)
	}
	function ws(t, i) {
		return i.getStyle(EU[Pu])
	}
	function Ts(t) {
		return null != t && (t == oq[Lu] || t == oq[Su] || t == oq[Du] || t == oq[Au])
	}
	function Os(t) {
		return t && (t == oq[ju] || t == oq.EDGE_TYPE_ELBOW_HORIZONTAL || t == oq[Cu])
	}
	function Is(t, i, n, e, s) {
		if (t == oq[ku] || t == oq[Nu])
			return new ZG(e.x + e[ro] / 2, e.y + e[Wa] / 2);
		var r;
		if (Ts(t)) {
			var h = Math.min(n.y, e.y),
			a = Math.min(n.x, e.x),
			o = Math.max(n[Qh], e[Qh]),
			f = Math.max(n[Jh], e[Jh]);
			if (r = s[Ou](EU[Bu]), t == oq.EDGE_TYPE_EXTEND_TOP)
				return new ZG((a + f) / 2, h - r);
			if (t == oq[Su])
				return new ZG(a - r, (h + o) / 2);
			if (t == oq.EDGE_TYPE_EXTEND_BOTTOM)
				return new ZG((a + f) / 2, o + r);
			if (t == oq.EDGE_TYPE_EXTEND_RIGHT)
				return new ZG(f + r, (h + o) / 2)
		}
		var c = ws(t, s);
		if (r = c ? As(t, i, n, e, s.getStyle(EU[Iu])) : s[Ou](EU.EDGE_SPLIT_VALUE), r == Number.NEGATIVE_INFINITY || r == Number[$u])
			return new ZG(e.x + e.width / 2, e.y + e.height / 2);
		if (0 == r)
			return new ZG(n.x + n[ro] / 2, n.y + n[Wa] / 2);
		if (i) {
			var u = n.x + n.right < e.x + e[Jh];
			return new ZG(Ls(u, r, n.x, n[ro]), n.y + n.height / 2)
		}
		var _ = n.y + n[Qh] < e.y + e[Qh];
		return new ZG(n.x + n.width / 2, Ls(_, r, n.y, n[Wa]))
	}
	function Ms(t, i, n, e) {
		var s = Math.max(i, e) - Math.min(t, n);
		return s - (i - t + e - n)
	}
	function ks(t, i) {
		var n = Math.max(t.x + t[ro], i.x + i[ro]) - Math.min(t.x, i.x);
		return n - t[ro] - i[ro]
	}
	function Ss(t, i) {
		var n = Math.max(t.y + t[Wa], i.y + i[Wa]) - Math.min(t.y, i.y);
		return n - t.height - i[Wa]
	}
	function As(t, i, n, e, s) {
		var r = Cs(s, i, n, e, null);
		return r * s
	}
	function Cs(t, i, n, e) {
		return i ? Rs(t, n.x, n[Jh], e.x, e.right) : Rs(t, n.y, n[Qh], e.y, e[Qh])
	}
	function Rs(t, i, n, e, s) {
		var r = Ms(i, n, e, s),
		h = e + s > i + n;
		if (r > 0) {
			if (1 == t)
				return r + (s - e) / 2;
			if (t >= 0 && 1 > t)
				return r;
			if (0 > t)
				return h ? e - i : n - s
		}
		return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
	}
	function Ls(t, i, n, e) {
		return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
	}
	function Ps(t, i) {
		var n = t[Wr];
		if (!(3 > n)) {
			var e = i.getStyle(EU.EDGE_CORNER);
			if (e != oq[zu]) {
				var s = i[Ou](EU[Fu]),
				r = 0,
				h = 0;
				s && (j(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
				for (var a, o, f, c, u = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
					var v = t[l],
					b = _.x - u.x,
					y = _.y - u.y,
					E = v.x - _.x,
					x = v.y - _.y,
					p = !b || b > -lq && lq > b,
					w = !y || y > -lq && lq > y,
					T = !E || E > -lq && lq > E,
					O = !x || x > -lq && lq > x,
					I = w;
					(p && O || w && T) && (I ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, h), f = new ZG(_.x - (b > 0 ? a : -a), _.y), c = new ZG(_.x, _.y + (x > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(E) : Math.abs(E) / 2, r), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, h), f = new ZG(_.x, _.y - (y > 0 ? o : -o)), c = new ZG(_.x + (E > 0 ? a : -a), _.y)), m(t, _), l--, n--, (f.x != u.x || f.y != u.y) && (g(t, f, l), l++, n++), e == oq[Gu] ? (g(t, c, l), l++, n++) : e == oq[Hu] && (g(t, [_, c], l), l++, n++)),
					u = _,
					_ = v
				}
				null != d && c.x == _.x && c.y == _.y && m(t, _)
			}
		}
	}
	function Ds(t, i, n, e, s, r) {
		var h = r[Ou](EU[qu]),
		a = null == h;
		if (null != h) {
			var o = (new iH)[Yu](i)[Yu](n);
			o[Uu](h) || (s = js(h.x, h.y, o.y, o.x, o.bottom, o[Jh]))
		} else
			h = Is(t, s, i, n, r);
		s ? $s(i, n, h, e, a) : Bs(i, n, h, e, a)
	}
	function js(t, i, n, e, s, r) {
		return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
	}
	function Ns(t, i, n) {
		return i >= t.x && i <= t[Jh] && n >= t.y && n <= t.bottom
	}
	function Bs(t, i, n, e, s) {
		var r = Math.max(t.y, i.y),
		h = Math.min(t.y + t.height, i.y + i[Wa]),
		a = null != n ? n.y : h + (r - h) / 2,
		o = t.x + t.width / 2,
		f = i.x + i[ro] / 2;
		if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[ro] && (o = n.x), n.x >= i.x && n.x <= i.x + i[ro] && (f = n.x)), Ns(i, o, a) || Ns(t, o, a) || e[nh](new ZG(o, a)), Ns(i, f, a) || Ns(t, f, a) || e.push(new ZG(f, a)), 0 == e[Wr])
			if (null != n)
				Ns(i, n.x, a) || Ns(t, n.x, a) || e[nh](new ZG(n.x, a));
			else {
				var c = Math.max(t.x, i.x),
				u = Math.min(t.x + t[ro], i.x + i[ro]);
				e[nh](new ZG(c + (u - c) / 2, a))
			}
	}
	function $s(t, i, n, e, s) {
		var r = Math.max(t.x, i.x),
		h = Math.min(t.x + t[ro], i.x + i[ro]),
		a = null != n ? n.x : h + (r - h) / 2,
		o = t.y + t[Wa] / 2,
		f = i.y + i.height / 2;
		if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[Wa] && (o = n.y), n.y >= i.y && n.y <= i.y + i[Wa] && (f = n.y)), Ns(i, a, o) || Ns(t, a, o) || e.push(new ZG(a, o)), Ns(i, a, f) || Ns(t, a, f) || e[nh](new ZG(a, f)), 0 == e[Wr])
			if (null != n)
				Ns(i, a, n.y) || Ns(t, a, n.y) || e.push(new ZG(a, n.y));
			else {
				var c = Math.max(t.y, i.y),
				u = Math.min(t.y + t[Wa], i.y + i[Wa]);
				e[nh](new ZG(a, c + (u - c) / 2))
			}
	}
	function zs(t, i, n, e) {
		var s = i.x + i[ro] < t.x,
		r = t.x + t[ro] < i.x,
		h = s ? t.x : t.x + t.width,
		a = t.y + t[Wa] / 2,
		o = r ? i.x : i.x + i.width,
		f = i.y + i[Wa] / 2,
		c = e,
		u = s ? -c : c,
		_ = new ZG(h + u, a);
		u = r ? -c : c;
		var d = new ZG(o + u, f);
		if (s == r) {
			var l = s ? Math.min(h, o) - e : Math.max(h, o) + e;
			n[nh](new ZG(l, a)),
			n.push(new ZG(l, f))
		} else if (_.x < d.x == s) {
			var v = a + (f - a) / 2;
			n.push(_),
			n.push(new ZG(_.x, v)),
			n.push(new ZG(d.x, v)),
			n.push(d)
		} else
			n[nh](_), n[nh](d)
	}
	function Fs(t, i, n, e) {
		var s = i.y + i[Wa] < t.y,
		r = t.y + t[Wa] < i.y,
		h = t.x + t[ro] / 2,
		a = s ? t.y : t.y + t[Wa],
		o = i.x + i[ro] / 2,
		f = r ? i.y : i.y + i[Wa],
		c = e,
		u = s ? -c : c,
		_ = new ZG(h, a + u);
		u = r ? -c : c;
		var d = new ZG(o, f + u);
		if (s == r) {
			var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
			n.push(new ZG(h, l)),
			n[nh](new ZG(o, l))
		} else if (_.y < d.y == s) {
			var v = h + (o - h) / 2;
			n[nh](_),
			n[nh](new ZG(v, _.y)),
			n.push(new ZG(v, d.y)),
			n[nh](d)
		} else
			n[nh](_), n.push(d)
	}
	function Gs(t) {
		return t == oq[Wu] || t == oq[Xu] || t == oq[ku] || t == oq[Ru] || t == oq[Nu] || t == oq[Lu] || t == oq[Su] || t == oq[Du] || t == oq[Au] || t == oq[ju] || t == oq[Mu] || t == oq[Cu]
	}
	function Hs(t, i) {
		var n,
		e;
		i && i[ro] && i[Wa] ? (n = i.width, e = i[Wa]) : n = e = isNaN(i) ? WG.ARROW_SIZE : i;
		var s = bU[Vu](t, -n, -e / 2, n, e);
		return s || (s = new Yq, s[Wc](-n, -e / 2), s.lineTo(0, 0), s[Xc](-n, e / 2)),
		s
	}
	function qs(t, i) {
		var n = Math.sin(i),
		e = Math.cos(i),
		s = t.x,
		r = t.y;
		return t.x = s * e - r * n,
		t.y = s * n + r * e,
		t
	}
	function Ys(t, i, n, e, s, r) {
		var h = Math[Vh](e - i, n - t),
		a = new ZG(s, r);
		return a.rotate = h,
		qs(a, h),
		a.x += t,
		a.y += i,
		a
	}
	function Us(t, i, e, s, r) {
		i = si(s, i.x, i.y, e.x, e.y),
		e = si(r, e.x, e.y, i.x, i.y);
		var h = Math.PI / 2 + Math[Vh](e.y - i.y, e.x - i.x),
		a = t * Math.cos(h),
		o = t * Math.sin(h),
		f = e.x - i.x,
		c = e.y - i.y,
		u = i.x + .25 * f,
		_ = i.y + .25 * c,
		d = i.x + .75 * f,
		l = i.y + .75 * c;
		return [new Hq(zq, [u + a, _ + o, d + a, l + o, n, n])]
	}
	function Ws(t, i, e) {
		if (g(t, new Hq(Nq, [i.x, i.y]), 0), e) {
			if (t[Wr] > 1) {
				var s = t[t[Wr] - 1];
				if ($q == s.type && (s.invalidTerminal || s.points[2] === n || null === s[La][2]))
					return s.points[2] = e.x, s[La][3] = e.y, void(s[hf] = !0);
				if (zq == s[Do] && (s.invalidTerminal || s[La][4] === n || null === s[La][4]))
					return s[La][4] = e.x, s.points[5] = e.y, void(s.invalidTerminal = !0)
			}
			t[nh](new Hq(Bq, [e.x, e.y]))
		}
	}
	function Xs(t, i, n, e, s) {
		var r = e == s,
		h = t[Ku].getUI(e),
		a = r ? h : t[Ku].getUI(s);
		if (h && a) {
			var o = i[Zu],
			f = t[Ju](h),
			c = r ? f : t[Ju](a),
			u = t.getStyle(EU.EDGE_FROM_OFFSET),
			_ = t[Ou](EU[Qu]);
			u && (f.x += u.x || 0, f.y += u.y || 0),
			_ && (c.x += _.x || 0, c.y += _.y || 0);
			var d = i[t_]();
			if (!r && !o && !d) {
				var l = e[du],
				v = s[du];
				if (l != v) {
					var b,
					y,
					g,
					m,
					E = i[i_];
					l ? (b = h, y = f, g = a, m = c) : (b = a, y = c, g = h, m = f);
					var x = tr(y, b, l, g, m, E);
					if (x && 2 == x.length) {
						var p = x[0],
						w = x[1];
						return n[Wc](p.x, p.y),
						w.x == p.x && w.y == p.y && (w.y += .01),
						n[Xc](w.x, w.y),
						void(n._66 = !0)
					}
				}
			}
			t._39(i, n, h, a, o, f, c),
			(!r || d) && Vs(t, i, n, h, a, o, f, c),
			n._66 = !0
		}
	}
	function Vs(t, i, e, s, r, h, a, o) {
		var f = a[n_],
		c = o[n_],
		u = t.fromAtEdge,
		_ = t.toAtEdge;
		if (!u && !_)
			return void Ws(e._fb, f, c);
		var d = e._fb;
		if (d[Wr]) {
			if (u) {
				var l = d[0],
				v = l[e_];
				Ks(s, a, v, f, n, n)
			}
			if (_) {
				var b,
				y = d[d[Wr] - 1],
				g = y[Po],
				m = y.points[Wr],
				E = g.x === n || g.y === n;
				m >= 4 && (E || o[s_](g.x, g.y)) && (E || (c = g), b = !0, g = {
						x: y[La][m - 4],
						y: y.points[m - 3]
					}, o[s_](g.x, g.y) && (c = g, m >= 6 ? (g = {
								x: y[La][m - 6],
								y: y.points[m - 5]
							}, y[La] = y.points[Zr](0, 4), y[Do] = $q) : 1 == d[Wr] ? (g = {
								x: f.x,
								y: f.y
							}, y[La] = y.points[Zr](0, 2), y[Do] = Bq) : (y = d[d.length - 2], g = y.lastPoint))),
				Ks(r, o, g, c, n, n),
				b && (m = y[La][Wr], y[La][m - 2] = c.x, y[La][m - 1] = c.y, c = null)
			}
		} else {
			var x = Math.atan2(c.y - f.y, c.x - f.x),
			p = Math.cos(x),
			w = Math.sin(x);
			u && Ks(s, a, c, f, p, w),
			_ && Ks(r, o, f, c, -p, -w)
		}
		Ws(e._fb, f, c)
	}
	function Ks(t, i, e, s, r, h) {
		if (r === n) {
			var a = Math[Vh](e.y - s.y, e.x - s.x);
			r = Math.cos(a),
			h = Math.sin(a)
		}
		for (e = {
				x: e.x,
				y: e.y
			}, i.contains(e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ; ) {
			if (!i[s_](e.x, e.y))
				return s;
			if (t[r_](e.x - r, e.y - h, WG[h_])) {
				s.x = e.x - r / 2,
				s.y = e.y - h / 2;
				break
			}
			e.x -= r,
			e.y -= h
		}
		return s
	}
	function Zs(t, i, n, e, s, r, h, a) {
		if (i.hasPathSegments())
			return i._9l;
		var o = i.edgeType;
		if (Gs(o)) {
			var f = Es(o, n, e, t, s, r);
			if (!f || !f.length)
				return null;
			g(f, h, 0),
			f[nh](a),
			o != oq[ju] && Ps(f, t);
			for (var c = [], u = f[Wr], _ = 1; u - 1 > _; _++) {
				var d = f[_];
				c[nh]($(d) ? new Hq($q, [d[0].x, d[0].y, d[1].x, d[1].y]) : new Hq(Bq, [d.x, d.y]))
			}
			return c
		}
		if (i[a_]) {
			var l = t._26();
			if (!l)
				return;
			return Us(l, h, a, n, e)
		}
	}
	function Js(t, i, n) {
		var e = t[Ou](EU[o_]),
		s = t._26(),
		r = e + .2 * s,
		h = i.x + i[ro] - r,
		a = i.y,
		o = i.x + i[ro],
		f = i.y + r;
		e += s;
		var c = .707,
		u =  - .707,
		_ = i.x + i.width,
		d = i.y,
		l = _ + c * e,
		v = d + u * e,
		b = {
			x: h,
			y: a
		},
		y = {
			x: l,
			y: v
		},
		g = {
			x: o,
			y: f
		},
		m = b.x,
		E = y.x,
		x = g.x,
		p = b.y,
		w = y.y,
		T = g.y,
		O = ((T - p) * (w * w - p * p + E * E - m * m) + (w - p) * (p * p - T * T + m * m - x * x)) / (2 * (E - m) * (T - p) - 2 * (x - m) * (w - p)),
		I = ((x - m) * (E * E - m * m + w * w - p * p) + (E - m) * (m * m - x * x + p * p - T * T)) / (2 * (w - p) * (x - m) - 2 * (T - p) * (E - m)),
		r = Math.sqrt((m - O) * (m - O) + (p - I) * (p - I)),
		M = Math[Vh](b.y - I, b.x - O),
		k = Math[Vh](g.y - I, g.x - O),
		S = k - M;
		return 0 > S && (S += 2 * Math.PI),
		Qs(O, I, M, S, r, r, !0, n)
	}
	function Qs(t, i, n, e, s, r, h, a) {
		var o,
		f,
		c,
		u,
		_,
		d,
		l,
		v,
		b,
		y,
		g;
		if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[th](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, c = n, _ > 0) {
			d = t + Math.cos(c) * s,
			l = i + Math.sin(c) * r,
			moveTo ? a[Wc](d, l) : a.lineTo(d, l);
			for (var m = 0; _ > m; m++)
				c += f, u = c - f / 2, v = t + Math.cos(c) * s, b = i + Math.sin(c) * r, y = t + Math.cos(u) * (s / Math.cos(f / 2)), g = i + Math.sin(u) * (r / Math.cos(f / 2)), a.quadTo(y, g, v, b)
		}
	}
	function tr(t, i, e, s, r, h) {
		var a = r.cx,
		o = r.cy,
		f = a < t.x,
		c = a > t[Jh],
		u = o < t.y,
		_ = o > t[Qh],
		d = t.cx,
		l = t.cy,
		v = f || c,
		b = u || _,
		y = h === n || null === h;
		y && (h = Math.atan2(o - l, a - d), v || b || (h += Math.PI));
		var g = Math.cos(h),
		m = Math.sin(h),
		E = nr(i, t, {
				x: a,
				y: o
			}, -g, -m);
		E || (h = Math[Vh](o - l, a - d), v || b || (h += Math.PI), g = Math.cos(h), m = Math.sin(h), E = nr(i, t, {
					x: a,
					y: o
				}, -g, -m) || {
				x: d,
				y: l
			});
		var x = nr(s, r, {
				x: E.x,
				y: E.y
			}, -E[f_] || g, -E.perY || m, !1) || {
			x: a,
			y: o
		};
		return e ? [E, x] : [x, E]
	}
	function ir(t, i, n, e, s, r) {
		var h = i < t.x,
		a = i > t.right,
		o = n < t.y,
		f = n > t.bottom;
		if (h && e > 0) {
			var c = t.x - i,
			u = n + c * s / e;
			if (u >= t.y && u <= t.bottom)
				return {
					x: t.x,
					y: u,
					perX: e,
					perY: s
				}
		}
		if (a && 0 > e) {
			var c = t.right - i,
			u = n + c * s / e;
			if (u >= t.y && u <= t.bottom)
				return {
					x: t[Jh],
					y: u,
					perX: e,
					perY: s
				}
		}
		if (o && s > 0) {
			var _ = t.y - n,
			d = i + _ * e / s;
			if (d >= t.x && d <= t[Jh])
				return {
					x: d,
					y: t.y,
					perX: e,
					perY: s
				}
		}
		if (f && 0 > s) {
			var _ = t[Qh] - n,
			d = i + _ * e / s;
			if (d >= t.x && d <= t[Jh])
				return {
					x: d,
					y: t[Qh],
					perX: e,
					perY: s
				}
		}
		return r !== !1 ? ir(t, i, n, -e, -s, !1) : void 0
	}
	function nr(t, i, n, e, s, r) {
		if (!i[s_](n.x, n.y)) {
			if (n = ir(i, n.x, n.y, e, s, r), !n)
				return;
			return er(t, i, n, n[f_], n[c_])
		}
		return r === !1 ? er(t, i, n, e, s) : er(t, i, {
			x: n.x,
			y: n.y,
			perX: e,
			perY: s
		}, e, s) || er(t, i, n, -e, -s)
	}
	function er(t, i, n, e, s) {
		for (; ; ) {
			if (!i[s_](n.x, n.y))
				return;
			if (t.hitTest(n.x + e, n.y + s))
				break;
			n.x += e,
			n.y += s
		}
		return n
	}
	function sr(t) {
		return wn(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i[Xo](t) ? t : (t = J(t), t instanceof Object && t.draw ? t : void 0)
	}
	function rr(t) {
		for (var i = t[Cc]; i; ) {
			if (i[u_])
				return i;
			i = i[Cc]
		}
		return null
	}
	function hr() {
		w(this, hr, arguments)
	}
	function ar(t, n, e, s, r, h, a) {
		var o = i[Qa](__);
		o.className = d_,
		vi(o, BU),
		n && vi(o, n);
		var f = i[Qa](l_);
		return h && (YG && (f[v_] = h), jH || (f[b_] = h)),
		f[lh] = a,
		f.src = e,
		vi(f, $U),
		r && vi(f, r),
		s && yi(f, y_, g_),
		o[m_] = f,
		o[E_](f),
		t[E_](o),
		o
	}
	function or(t, n) {
		this[x_] = i[Qa](__),
		this[x_].className = p_,
		vi(this._navPane, {
			"background-color": w_,
			overflow: T_,
			"user-select": O_,
			position: I_
		}),
		this[M_] = ar(this[x_], {
				width: k_
			}, WG.NAVIGATION_IMAGE_TOP, !1, null, n, S_),
		this[A_] = ar(this[x_], {
				height: k_
			}, WG[C_], !1, zU, n, tf),
		this[R_] = ar(this[x_], {
				height: k_,
				right: L_
			}, WG[C_], !0, zU, n, Jh),
		this[P_] = ar(this[x_], {
				width: k_,
				bottom: L_
			}, WG[D_], !0, null, n, Qh),
		t[E_](this[x_])
	}
	function fr(t, i) {
		if (!WG.NAVIGATION_IMAGE_LEFT) {
			var n = Di(20, 40),
			e = n.g;
			e[j_](e[eo], e[eo]),
			e.moveTo(16, 4),
			e[Xc](4, 20),
			e[Xc](16, 36),
			e[Zo] = 3,
			e.lineCap = So,
			e[N_] = So,
			e[B_] = $_,
			e[z_] = F_,
			e.shadowBlur = 5,
			e.stroke(),
			WG[C_] = n[G_]();
			var s = Di(n[Wa], n[ro], !1);
			s.g[uo](s.width, 0),
			s.g[zo](Math.PI / 2),
			s.g[H_](n, 0, 0),
			WG[D_] = s.toDataURL()
		}
		this[q_] = t;
		var r = function (i) {
			G(i);
			var n,
			e,
			s = i[Y_],
			r = s[lh];
			if (tf == r)
				n = 1;
			else if (Jh == r)
				n = -1;
			else if (S_ == r)
				e = 1;
			else {
				if (Qh != r)
					return;
				e = -1
			}
			YG && (s[xh] = U_, setTimeout(function () {
					s[xh] = ""
				}, 100)),
			G(i),
			t._kr._9c(n, e)
		};
		or.call(this, i, r),
		this._3g(i[ga], i.clientHeight)
	}
	function cr(t, i) {
		this[q_] = t,
		this.init(i, t)
	}
	function ur() {
		w(this, ur, arguments)
	}
	function _r(t, i) {
		this._mzaseCanvas = t,
		this._je = ce(i),
		this.g = this._je.g,
		this._n03 = new XG
	}
	function dr(t) {
		var i = t.selectionModel,
		n = [];
		return t.graphModel[lc](function (i) {
			t.isVisible(i) && t.isSelectable(i) && n[nh](i)
		}),
		i.set(n)
	}
	function lr(t, i, n, e) {
		var s = t[Mo];
		n = n || s,
		i = i || 1;
		var r = null;
		r && n[ro] * n[Wa] * i * i > r && (i = Math.sqrt(r / n[ro] / n[Wa]));
		var h = Di();
		Zn(h.g),
		h[ro] = n[ro] * i,
		h[Wa] = n[Wa] * i,
		t._8m._fg(h.g, i, n);
		var a = null;
		try {
			a = h[G_](e || W_)
		} catch (o) {
			aq.error(o)
		}
		return {
			canvas: h,
			data: a,
			width: h.width,
			height: h[Wa]
		}
	}
	function vr(t) {
		this[Ku] = t,
		this[X_] = t[X_]
	}
	function br(t, i) {
		this.interactions = t,
		this.defaultCursor = i || V_
	}
	function yr() {
		w(this, yr, arguments)
	}
	function gr(t, i) {
		if (!t)
			return i;
		var e = {};
		for (var s in t)
			e[s] = t[s];
		for (var s in i)
			e[s] === n && (e[s] = i[s]);
		return e
	}
	function mr() {
		w(this, mr, arguments)
	}
	function Er() {
		w(this, Er, arguments)
	}
	function xr() {
		w(this, xr, arguments)
	}
	function pr() {
		w(this, pr, arguments)
	}
	function wr(i, n, e) {
		i += t.pageXOffset,
		n += t.pageYOffset;
		var s = e.getBoundingClientRect();
		return {
			x: i + s[tf],
			y: n + s.top
		}
	}
	function Tr(t, i, n) {
		var e = t[K_],
		s = t[Z_];
		t[ca][tf] = i - e / 2 + Ka,
		t[ca].top = n - s / 2 + Ka
	}
	function Or(t) {
		var n = i.createElement(to),
		e = n[io](no),
		s = getComputedStyle(t, null),
		r = s[_o];
		r || (r = s[J_] + Ih + s[Q_] + Ih + s[td]),
		e[_o] = r;
		var h = t[bh],
		a = h[Oh](yo),
		o = parseInt(s[Q_]),
		f = 0,
		c = 0;
		return aq[lc](a, function (t) {
			var i = e[Eo](t)[ro];
			i > f && (f = i),
			c += 1.2 * o
		}), {
			width: f,
			height: c
		}
	}
	function Ir(t, n) {
		if (kh == typeof t.selectionStart && kh == typeof t[id]) {
			var e = t[bh],
			s = t[nd];
			t[bh] = e[Zr](0, s) + n + e[Zr](t[id]),
			t.selectionEnd = t[nd] = s + n[Wr]
		} else if (ed != typeof i[sd]) {
			var r = i[sd][rd]();
			r[hd] = n,
			r[ad](!1),
			r[od]()
		}
	}
	function Mr(i) {
		if (LG) {
			var n = t[fd] || t[wa],
			e = t[cd] || t.pageYOffset;
			return i.select(),
			void t.scrollTo(n, e)
		}
		i[od]()
	}
	function kr() {}
	function Sr(t) {
		this[Ku] = t,
		this.topCanvas = t.topCanvas,
		this.handlerSize = YG ? 8 : 5
	}
	function Ar(t) {
		return t[Do] == $q || t.type == zq
	}
	function Cr(t) {
		this.graph = t,
		this[X_] = t[X_],
		this.handlerSize = YG ? 8 : 4,
		this._rotateHandleLength = YG ? 30 : 20
	}
	function Rr(t, i) {
		var n = new iH;
		return n[Va](qn.call(t, {
				x: i.x,
				y: i.y
			})),
		n[Va](qn.call(t, {
				x: i.x + i.width,
				y: i.y
			})),
		n.addPoint(qn[Xr](t, {
				x: i.x + i[ro],
				y: i.y + i.height
			})),
		n[Va](qn.call(t, {
				x: i.x,
				y: i.y + i[Wa]
			})),
		n
	}
	function Lr(t) {
		t %= 2 * Math.PI;
		var i = Math.round(t / HU);
		return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : ud
	}
	function Pr() {}
	function Dr(n, e, s) {
		var r = i.documentElement,
		h = new iH(t[wa], t[Oa], r[ga] - 2, r.clientHeight - 2),
		a = n[K_],
		o = n[Z_];
		e + a > h.x + h[ro] && (e = h.x + h[ro] - a),
		s + o > h.y + h[Wa] && (s = h.y + h[Wa] - o),
		e < h.x && (e = h.x),
		s < h.y && (s = h.y),
		n.style[tf] = e + Ka,
		n.style.top = s + Ka
	}
	function jr(t) {
		this[_d] = t,
		this[dd] = function (t) {
			return this._kq && (this[ld] ? (cancelAnimationFrame(this._kq), this._isFrameTimer = null) : clearTimeout(this._kq), this._kq = null),
			t === !0 || t === !1 ? void this._n0ction() : t ? void(this._kq = setTimeout(function () {
						this[_d](),
						this._kq = null
					}
						.bind(this), t)) : (this._isFrameTimer = !0, void(this._kq = requestAnimationFrame(function () {
							this._n0ction(),
							this._kq = null,
							this._isFrameTimer = null
						}
							[mh](this))))
		}
	}
	function Nr(t, i, n, e, s) {
		this.source = t,
		this.type = vd,
		this[bd] = i,
		this.event = n,
		this.data = e,
		this[yd] = s
	}
	function Br(t) {
		this._3z = {},
		this._kr = t,
		this._kr._19.addListener(this._9w, this),
		this[gd] = oq[md]
	}
	function $r(t) {
		return t >= 100 && 200 > t
	}
	function zr(t) {
		return t == rW || t == dW || t == _W || t == oW || t == bW || t == yW
	}
	function Fr() {
		var t,
		i,
		n = {},
		e = [],
		s = 0,
		r = {},
		h = 0;
		this[Ku][lc](function (a) {
			if (this.isLayoutable(a))
				if (a instanceof lU) {
					var o = {
						node: a,
						id: a.id,
						x: a.x,
						y: a.y
					};
					for (this.appendNodeInfo && this.appendNodeInfo(a, o), n[a.id] = o, e[nh](o), s++, i = a[Cc]; i instanceof yU; ) {
						t || (t = {});
						var f = t[i.id];
						f || (f = t[i.id] = {
								id: i.id,
								children: []
							}),
						f[Kr][nh](o),
						i = i[Cc]
					}
				} else if (a instanceof dU && !a.isLooped() && a[Dc] && a[Rc]) {
					var o = {
						edge: a
					};
					r[a.id] = o,
					h++
				}
		}, this);
		var a = {};
		for (var o in r) {
			var f = r[o],
			c = f[vu],
			u = c.fromAgent,
			_ = c[Rc],
			d = u.id + oa + _.id,
			l = _.id + oa + u.id;
			if (n[u.id] && n[_.id] && !a[d] && !a[l]) {
				var v = n[u.id],
				b = n[_.id];
				f[Nc] = v,
				f.to = b,
				a[d] = f,
				this[Ed] && this[Ed](c, f)
			} else
				delete r[o], h--
		}
		return {
			groups: t,
			nodesArray: e,
			nodes: n,
			nodeCount: s,
			edges: r,
			edgeCount: h,
			minEnergy: this[xd](s, h)
		}
	}
	function Gr(t) {
		this.graph = t,
		this[pd] = {}
	}
	function Hr() {
		w(this, Hr, arguments)
	}
	function qr(t, i, n, e, s) {
		e ? t[Yc](function (e) {
			var r = e[wd](t);
			r != n && r[Td] != s && i(r, t)
		}, this, !0) : t[Od](function (e) {
			var r = e[Rc];
			r != n && r[Td] != s && i(r, t)
		})
	}
	var Yr = "3c6a2cb6ce240a9b3c5f7dfa5c11f92231ee4c9dd44c36eab7fc00ae57563e3f3482058c5985b84bda75db5016a4bf0f6b2f913ccd779e99c21514cfbcf729bd44ffd1eab2ad529bcefacc5ebeaa0b4ecdcb3acc29bb718f7738624c881c8b37fb9587dbc488efadfa6e54bc3aaac628bda5f132c98a6ef99fa2964d602c8451d4c9bfee45c68d7e4df84b7027b0e2d54160e4168fdc69a137c1b9d41b8589349c192db4fd158c5a26a53d30e936ed401b13bc5d282947663159d73aa527dcc271cecea53bb3bd0c31fbfaf1cd7483256dc8ee7c601b297901db00602969e9c01d77528ff0fd4e313a709284f9688f8f0e3419e76f0647990a6951a6133123e49693d95055c9fe09655a3e576681fc46e8a13234f1005872f716582f6a9a2148fe02929767814d7f1439b05f10f2f5c703856b48b141872d96b336d9efe7d528a010979d70ce00d58a480b3189e1fdae443e8c43064d6497dc024ebad08dd0242b6ab6fdb5280e6c1bc8415f939235bd4dc1fa9ce01608e8348664e74270e0708a336b47933b5153e4a8f1e2ccb1bffba2f52773f47e6a69061610bb50eca1fb52abe72599de90787a9e04a0e4635e3b1bcbc736921de2f15cb5f29dbb96eb9ee45cc3a3fb42a390d50556b732e6bd2b93fa2612d135375f1c5039e7a9bb8569882d74b933f9581b81840fe9e16fdc11eea8e2aae77f83670f098e6b377fd042e3a35c785a60f2b497e0eebffee0b5c47782d475a2dfb984e7b33b6756b879948be9718f04598e3c184b9b9e90342e941f88afc66b95a3bc61238f0081333c8b9529a1f7fa4b67b3e250b88f4c55041ff4397a9f099b75d619ca37f8f4a01e911c5383e9724d80f838ef92f4a98971b57142dc81b0215cff2a7dd06ae3de28f08023eb447765a6781b4abf75156c51fe28f599be8ba58e071d749decef3d5b20a2f553e6c642f100bcea62848a119fc2fd12dbea9be15710e9017cf7058bbcb42a274d5975a5e81ec06938a77cbcd8ad89f5abb3e7a2a342db6daac5e7a4fc66577b3b036df19741da6605b698f6531160764f73798700bbae4b77b065be24c5a70e5c4e73710915883d889cd1da603b8f33222c5beccc6b4520616d125ffc1c68de3f26dbd176216b538814c7042a87c6c311882712dd574304230d76a622795639fb1e2a4d5ef376fd59fa302fa577429c633c382345c95fe9095c5f048c6414310aee9ff45994ee3b05c211b345391c1a3f9fbf33e01b6057b349a53f154855342cb304ae2af83e9a8365cea07f1f5f905bd9d611225a99663adbbcca643f69b7388ea58ba2867f883c06abcc83fee76d9b6e7d564b67d4711f0c61235286e36c6ebede48e3da73b84659822f6dcb8cb37c9c1337c7184468436ba37c6924c7700d6510fd66e6943b49beaafe165a78ae331bc3b6863243a74b07a464905a7efc7106768c85c3186fc37e14634d66f85863ca7688d8fc9821400092b5b7cca3467be81661f8ded55a5d3b9cea759051a525b6c299b563976ae998074c76b078e95f52ecaca631f01508266ff1e9899d35a115ead13d4f05194081577d9dc013ca27270925ad6faf97b2a81472189687171e4ff9e5eed03b7f7e0feaf0e082f04ce3725536b81a10d4d4caab13a4a45490bb5e2b8fadd3437711da6e72298c58b83ea46719d3a9a999fa584548d7a465adcfe4904d389eb4f951ca09dd909b41f2eeaeab2ab805b8f5e4a677a57609bc4d46162ddbfb66ff00a233341e4ca6f0e387846a2ef497101be75be99ad534798d53126513866e196d01fb6d1da531d26b50159cffbcd504dcfe04d39358f4899a79596fbf8a1306f596a62e635075eb1ad367da10fee8474fd38325c17a8ff5f2882957f4516333806a7d287fa4ebea3ccef1d9b3a477edbadb8c2a6a1aaee924cdc003eb818d681aa5987dcdcdb377de609f5c2ffc3ad797d8033be722d8360b9d44572bb5719e7979bf52af8927313359458d9a0289fc27dfa6e57d12689eb3611b4c7562adaaec3337668634dad49a0adb3792fc3408a3f699e0d5ddfeb927e919b72600ec4359eb4a611411eaf79da050d6b9e4366f6247e02b5f5e90dc9223adcd4f2d48398322597580a92a4113706c0c2cc2d7a47b583ac9fd3a4531e37b644171ea9e427a60cb0bb98e745827b2712bba3ad5373cf4a37f408b611c89a1adcef62ceb30d28fab241c2ec1d30ad7c5e1dd55567e9fefa11bd4237be6b50b0547df36b6dfa800297a30866d07c54b31f325699df6531dc02255583cf54d01f1e5c5e2458be91afe75f6e7ee6b606e95bf3b4da2d381a2dc6194f55610b4d8b6fbaf4a45c0b7460703c6f4e824fbcbd9150395bf4500bbfad45212438cc82c8f4362d3c134a513938930a072bb63b40bf624c9c6aca2a65e780632fdf742d87f62a4397fe195f07b8a0322455e7293ed8a1f4961536e77191b7f79a5a6a9ee98bdfc80c000aea3cfc835c5e7686af76338524b5ff041e4788988ac522daf8a97f344798ded6774a546639d83e97eed37a6925fb2d14be790c9e938be5e667602531e31cbf526cfdd5c9cd6081858a54177eec40a106c5668a1b5a021bac01d16bc3c487cf205303c65c11ab18a63d6d0145d07f42251396a12f36055267d2b18a328f31f817dca965b4d2c431718ba4b98d22a5b6a5648e46bb5d02ecdb8512b88a0092f0eb2e48bd058317067af49187975738b841db30db3affeb05eecda25790eedc61ada5153dcf67ff465a41fa6bee23ac99ded0121247d7ce0b094a9dfbc707b58dbb39b606bc20cf43f0180a564a743c0907125076ccd4edffd7dbdbbc13c6a6a7eec6f817f20c4514cb8c0aac2c783a02fb6445f45fbb4757e28ffa130d6bb98682e5c6558bc75b9d2d19250755a0da89c2d3311b132dd0295f1c9926612fd34a277323c90cf1fef21ac0c0f0a08bc840ad340f29fdef3f361414910a0e0c01a6d06328fc83a4d3d6db4cf13e20c60484960e4c9825aa49eee9f1738b9c937b96bb66418aabc6b96210aec4bda218ff0f6636180b93173d8595c84d381c90f6b9b13d189bc844ad9fd8a2c161120cb39e6ac5f501b8a7d9bc0a0f06316a3869a43ea65ac346668abecfd697608d9a73ea9c490f2067a5dc6379bccb3c5d8f32d8e8cb2781da00d8992e22f375a31a13c28691193f306eb61fd749a9669fab697a32f5d3e04bee6fe8b0c2e8bd11d572c25ca451a1f5740448eda129191567bcacf6024144d6b34690d6d6561abeed2dcab98b879e64f89a81e3c2b15c927a39f2832b50c154e6990117aba81db3315ca34a468855907a805ea853b4abc838731387f4949aba8b3e062dd24f43eefa5929ac32646fbf16eb5664247690dbd6614503ca1a73ab646acfd9222ced3c784e6d0b6a198d319c7824909b7fbd6266617a2ae18f7b98736ab033f183d914d9113d2d90f1591f0f784e711316a023caea2bbfd909c02630a6da8f7f38d2a441f4b5182c0c40c6d156190d28dd813bc7a34a93f59fa4a9c45a6c3b48146f802ddee08d0f0e6f9f9bf4a65da36841409f19a6408ae5b838afac7c6b65e0bb770bc294ddef01790cd3279bbc6eb19a21ad7e45e94a910c4f26b4d64857eb7854f1c2b3c76b74502c44f28b95ba25030fc812ee85cb618f2550f6cf184e948854e12115c70cb227dd580fc5d116aef5ae580a903c2eadd88ba27d5a6341e98d3fc1d79f64d7637301f4b8e5685fc337e5333b813495222c63504b87f499819fbe5d39c4207bae6ff7429699bdc178abf73f4fc1a2b5a6d6cf1bda2ae1e9f8c5287611a0e6025db71e02a312d7d019d94f7926de94b00afac4d92d9cc57f130c4fa8c43d623c2991a3d391dabf49b35e98fef67214580a1f7fce64f2e9e81646a4d052687d7bc4b1b9c9ce826cae21f9d61ab5a7cd260dce3eb3011c33b6013513e287e4d173342bd678169a1e1aaa785b5a34d001ef571efe8009df588c5ae208c1e6648772a68fd29a21b299d31cffc8554a9067f2de6a85521d8c8204721f40b81be997f73c8730da7563de119bb5016b28d9dbbc7487d7a8988d68943ff50c661b9fc03b31b4ce8515707f1ec1be2104f35442a47eb0259d731cad822ecfe1ac8471fdd040ac66b7016a375c4083f18ac7ada744780074dfab0664152cba8773f6cbcb5b54e6ae5e04ca981e201476090d34e7424023af685832b02668a39c4cd79a72ad265727a2b6cd3127a98202b167d0b665ecc04f71ee44f75d765dd108ecd30e62aa7fc0d85e7e84016ebaeb1c393b0d1256cad8c5c7ffaaa853aa9b5084b00f9fe3f67c188ab1df68106482d9ee0dfde33e62fe81c9ec39f318074c5f2cb5648d75886429427ee91f8f871742c12207a667b73df81607331f634b1212845ab84809b0db3ebfe80a5bd95f9677cc588a1e712ab9ac70874ada6cf82d15a82be64678e7ae4dcffa9eb76b178045ba3ffeee22f78079a5447ca2944f4151bbdd9fc2e611aaf53ff71c583b82b3c36463dae91228da2d0545464c92edea813456295464f38effe6cb10ceb7098a0d163427b1479421c2bf0882a87023fdc11552d39e899aa71d708917cba33dff050f77df2176a0ea5e8e55fc663e33b9bea8ea6d75a6b554cdb57bdc95faa6581f4d8b0ceedae122f02118706642cbd24672827e0bf56d93b4a8acdf7f820e95f33c205c3f668ad00856f61d05ed0d9bb0c4d43ee83e531ae72f79e5c29916c04ecb1c1e78fba123cd192567c1aed67ca865a54404e6ebb783d5b0b87af62c2da2d6e476a92a97badd597d84943eaf28d5a7d7f28c67c9564776d8bcd04a99d1a11c0e375446aa6e81aa01fbfc64de0eac8ff150e99f33d022fc61e14d47ce822ac686179a748c4e4cf6aad76f9c02cf1c66c26ae9ea32eea082bac36b474833c0bfb8413b6147c69637604d5cf1d941af57a17128188f42539cee4c474a9c295ea309406f16141381cb0bb4cc057ab745d3342c249ed94613e7696752a7cf0af4dd79ad39437a9d45c1d92dc48b56e0fa1f07d4ec9c160d2f151cfd87e56775bc130dc6d01ddf675d5ae9dc894241e3c4133bbf33f7fc2565fb481c36d3d75df1eda17329e696283c30408abba9595ea92db28e8ca72bce4634f39f1c8aa7efcbe27abdbd57df0f5e788e4a30afbcc722ce8b1b71ee7b84d5114cb8a60b97df22989424fdc38b14c85adab861d3c83d9c1430199159a4f27194c177bad752066fa28ffbf44367cca7c3d791444b4317f23a8586aec00781d31ac3b29b619677a704bdbb1e6fc52a4987fbc29490872d4b35da9235f0f10dd6b9f6fe99042e05257b4cfda2529b507511862aeb8ce4d7304e0feac8440de8eb9b0a92a1e3327bd5bd72e922a4fc98ecb4b464e039f05f131d5e56789705b4cca472ad5f1f99cb7e5c26ba459e8377248f477b017c36310f254bb6f8c39450d7defe4cfbccbe2bc10aac3cc90255e5d0fff9f3e260b67d70723397e47c3e9924af5c5c715b9fd49dd3a1ef9f7203e29fc045826d2b14a39e6a2cf90123036724895438ad09fda045aa30266e6e92b7e358cd623cd9ebce51442c8a19dddd9de8fd7f3d593fec8a48cb88440c401e12990afd4883a31bbe60c1d674a3eaf5ae058a5dfbfc9923ae0c01b04ec32850da12e8a8afe1afcafd9ac557cd071e7a8d670b03257375da885e9b3a0926dbac0fe17cf3d56fa32fbc4c2f956a0dcb2951b797a65aa6b60528418c5b0b8d9502855a46d452a79b5e4003ef4f349ee5513efca55e046577cfbaa08da4b9bda5fbc11b4dffcbab2346e099b4d25567f08ee42fdf4222a997ecd9acdf63889c8bc1f4bb17c6450fb10d78448a67ad822368b87a167f5e460bdc46d0c5f426c9d40c73a6d3beefb534aa0ece01b27dec81f3bf09cd33b72215afa03e76059adac01176ccd3640abe6caddf256b7db2a0f0071d15a96e6e15473e36de52fa47f4a666be0645360ca5d512ed617859449e0e4db9cffec21e66635f6202efc5d47eda77553866dd33c7361d2b8db5d8a35eaaf3b3eb7b0f9852915bc34233012a1de6c5ea4c9cc934737b127c7b529314b961b2c09d063cebc1b5363954563fc592bf9fee87a5a0218dbb5b53cb1a7aacb14edc4d4a14a1e9c2b38a7eb83419dad6fa9bfe4de26fc362490353989a3d95496abea4ff181e8ac508bc993eadab47e2d6e2b719d3033dbcdeef341cb00025cce9fe664e594c631bd65bdfffea2f66fd3437bf032cae951f4608fe8b525e751c315f97441d3c360231ced934eb1e4ab9e1c073c425370d9dd0472b1cf86a51a822e9eb36610859c45b18db7f26b3387a75b8e5e7b0b48af2df457706779746ad89ef094333e2e012c1ee91327876ca317cbc08c2433c16635623ca65a231536d49452c6c66c18fe157bc061462d6513cc79bac168be15b3234036a291e9eba4d389ecb23dd06dcb8c4b30308e50581a5390a10a07be172d4f59898aece403d2e3b92dde09b98af2671d31e01cf90789e61f59031b7d693a4b4e2f7909aaf008839706483c49143c7e2407fb9f0bf68547f3da57cdff31b79ded3dc1e7cbb0e9000e7f4ee19142408cdaf5241b599c0c785e5435a8501019e6695d631b3c489bcc5d51f1578c4eb5924b763731eea251ef18e68f06cb9d4416eb2ed619ed339e51dfb941500686546041a9300de3e629a20ce75c5db0d3c4320b8a714f7bbaa3eb73ce799d874fd227373467d01bb32b2787cca30666471a6c8abcc0c5b0cfb7cbb0026e748d710892b92994a3086013204c0bb4c5c6cf67f45b3f065b13048cd4b353e15f824ba1599f08e44d91a872b3c94e9527060e69c366580d4bdab29e7bd9dbf44fb3b6caa17f52940fecf57e9b992d6bb041330db08cbae7543fbac51856a17b98174aeea556361b0b2468e90a88d46106552d0baf834adb9dab62fbe869dec5a9eaf23b8980fbe11e6f13968072a2ce2c214fcf5c6bb847ae011dac2944946d1cb9db60c29cfb82f7c914c106dfc3491cf1f1d68241a2b8ccb33ca929a6f481e1e830e1578d6cde5ab116e703674868f4725ef40b795da42c65d34124fc5a4fd19166cf4b441be33d751d68e7d8d17c0e6f50f2b7897b3ce623449f3f67aa02bcb8cd10bcbded02e66934de14a5109c5ea73aed4a60031f8f487026223832c96cf9c5f4271d6584974530f9ac96bd1d1ca67b36fcac25030d86b0e758fa81e559f3d4d6f67cf64677ef9ead96b7d9daa19b0c2dc6af11e0987db1674bca797101fdd405327a4df7dfc65ca741d4af2407b10c11a1cd609583d76c1e4c9c4196abe6f95c87e2ebe7e04d8d0698467111af566388ca5fce123500eaea0fb04fd62a0140959ebd6150a65dae5e9229d2e8190e98d3392e4a7132dee322161669bc604d91efd39c521ccb48b1578e659e296398420a238896dc75c4184bb213d2e2a5850d4fb3423845a6a42e10393ad203c9ac2489fd3dd2fb299d1d55763061644d0465c2f8aba5e49fa49ebf3252deec37b92ee60bfb17d2a2668a67b1e8f6df955d226802322b1b95d05f471b716da01a1d626150923ece9deddba838af7efe96a38e949ed428c8fa2946895f3ce8e36b76a2fa7a974ceb639310f128b80ca374a7fecc1e0c89e3914b218f33687543c8a762d4181ead912e4b338d15a1d7135f21cf637cddf0d41bb3884e0de682efb8033bc2d22388f7408191ba849d435947b7702bb4f4109792520d71b3c59b60d471b2ef926a58395df22a9d897fd38c9dd69add8ad28e07945604c531d85a8764f51e305f8885703f81f3c6f74ce57bfa9162282a12b327b61c0fcfe322da00b27ff9db1f16ccb274032caab0da3b53803a75f3d42717d19ae45b2869184da06125a495fb3345aa7617f5df14a123e53b4f569bd2d2f69c8a5bac0c451123e1b0eb38a2f4d788ad6f065ef1dae20f80cc04f476f583e4e4fb940f69d73f970dbcc099a7ff87cc6ee4f4ceb3b731df1ca769d7949f615344e470fc912edb2d76903467911d7f5adc7a6beedc7de603fc7f2c6d3baea0524454ee30f6510e1441d88be5fb757153e0183f4f8d3718345b571b80a12c4596d530ec981c6916946fac97f37df9427c3df39822d09aa2682630e66a7200c87ec403d9ebafd207705ca7e2cbfb572b0043b0ed0f1ce0d5b6f77e31adccda1d76b503baf09449effe9335073760bc489ab02f2ff5621dc915ecacbd99b63c37fe43cab9bf383ce21101be21f1dbb63f33ed292ae848fb6a7304331f16d8b1d5cf86bf3a033d0bbee1f85eb76dbcd97a8e8fd54664ed7c610bdb327a69f80be9f51b7139f42f697bb5f1f5754761a56bf706e54a8f87eb19ff5fd03df5f09b6e3824af466588b355f9eb12ff107b66610a62057f73871d5cec582d9051fb1e401d4a1cc1011c8155d1ba0ebf951fcbcb34e52376a60fb9f16a77abe58ec1c38805f86b893bc7e127b0f8b3119786a4073b91e313d514579253ceb69117d9c5c32a266e7e641d7e5ddb83932a7deeb4037231769010ac742d1ff5dcc4b54b0d0e6850bc84010784b51bcf849986623ffc5dd59e51f02c99101366fa87059932064349f7573fb030ee4fdc1172096fc356d30fa3d41ab8440a8c8aa524917f0e3e9a35dd7b6cca93b910bcd7bd7d6acd1b8d60b490df1169aa60ae3d8e069a922738dc62f6e13143b134b2c27a34b38a43a26dd0a37876ffb2861d953d4cdbf79fdbccdfcc0910d654380e7dd93d36fdcccb86b85e4a1b5c1b52eb320e0a01ad1986e760610ca4c2bc7e3ac799c0c56764f7c559a6695d5d505ecf0f791f1f52c6bcebb0a023c76a72bb30f60af7b71e39e79f4748d136b5228611bf97eed8de4764d07b637359b7ce632e4149391903b3e486a19b596ca429c660fbaff887447da85fe7fc2d917f9fec2d06bd49ec5fbb1f17a3505bcea71988e5ad774b0853315a0c3cf361f36033402ae3bbb53399a6006a3d6ec728dd271675b212a16db0b9d51f35c611ead2b6e564743d76c2bca9f90d0ae58107e41ef0aa3061c17340ff24b80161cb5c76b4b3dae45c5ddae6fc21c3f1eb464f9070b1febe5964cde100a7bd44fa78a6935b86a19536a7ed1d9c71f728126bf908449af1ca567b4678a68a6ab6c4f808cc6302bb9aeb8497f257ff776eaf82d7454e19ec94c00d0de96651b63caf9cae3bed2cc81ea1291bcdfcb2cdf6b998c721034c16cb407c8c3d1cc3d767ea4977d2239549dd57cd0c14bcf38ac7c12f9792ae6942afb5601c940e1e510c055d017ef14ec8e59ec7f5ed92c8961ecd18840a33b6ed5a6dc625104d4c77f9a4c7bd46026eaf6fa75a86059ddbbcc10017b19e8b29dd9181b00a08338274d4e062a2e01021e470bbc3b05e529d8a9375b491a7c31035f2df5c8384c3cad12068a782fb3a5ac0ab7e52552b1f82db67b50858b40951c54ed0e4441db406f1a97aff735dad2a82a05810d95ca9a0b637bf7ce142a3c7edfead23f7f316b43fd1e48a5bb060ac8e048c1d4ba06b9b87ed969f6eca99551820807dbcb9cef8c6baf246e56d88156e0178e9872f5ef952a07805a62709fd33ab274727af544b472de9fdb21fcd235ab985dd694709cd32a8d2ba1e633a1f1d7752c8c615e224956d26e77dcdf19058196f1c0794ab04fdfe78e5e3e9f969d4d899589cae928539e43be9bc5e3c32b0df1a95f2b1568ac793dd3d450ca8948f71b3b36a955d16f6118d620f35e38fc001b387673b5e00bf10e4aed570d89bb8457a0098474ace788cd8bb033faaec3de8eadde627a4f5052b51368bc3aac9cdc03dcff159f315e3683ef1883f416660891c6fc46016000e546cb13d85e8cf797e963dd4ddaba4f91a87f2916228a9891afe92b3cc53131cda763d4c4996221363ac77d6f45121ea082f964a4e8eb030b7f235cdc29ec90444a72201973da93922843854d5ec0ff66972676c4bbf48bf6fa3cf45a67caad5361c00780162d1fabcc8ff78574f2b41b9f2c50fd9e7c21e8643c6636955b4b51c52b8a780c37472d8ae47b04c9de38212d403a3327aa2f0b108aee718103d204c7459b1c38326d568bfef727698c36c7a2de4ef3e18c5a27952d12c0d991a0c4d2a90931399e4d94fd686122ca9b33879aca9f9f35137175fc48b831bcc786b6bcc64d6d01ba2a11904457c2fc0d27e75b28a3109ecf098a511816b13f0874529f62fa3596228fa1791ad4faa30198f71502ac9c8f9d5a691da172b99d3f8fea2f6b6dffdae3e32860d9f13c5b7c30f2d438bf7d5bd0117a57405646f634b3c3e50ef5c5e78336fe255eeaa696318305cc57dc9df48f0de2343612314c3003df2454f7a6acb79ef50ab6a55882403f9781932bfce8c22c30c8c020246d0ccd4892d7e21b2026b47b02ce64d477df22339d5b282f4382d841cdb9c8794da47d551a25a7e5d553868fd1a4087709ef58a855ea8ef67f18960f0a3707be9be444fe539d35e44a6e02117b32e3a1c16720801fae215f7fdcd1325295abf8b16c35b2740f54f4031e2efdc4c700aed01f961bb342e08cf1d3b7cf0410775bcfbd59fa80bd749300c4e70cc9704eeff88358551a71f09ffa17b5407d8e1b3f3643ec7637b647bcee5c15b1b912a1269a82b627fecbe977cf364a0f83cae7992824c40e44fe515d0b9c52dd67232ed9080a054b0aef8ebb728dfe824f147beca87bb93cacf68eaca9b7fec061165694a8b181dabd2b97d3a5dc8950246554cc4050410135c389cd6d12369caa7100a83c07f8c8a58c3ce3bc45c02353cc4e836ec843ebdf6fa847fb5832aade964bf4f2f585ec66b96ab887e5879d55838e2ab1028c009743a2c8feaf6ac7b54038d1d8390fb8dd3b821228670cd184460a9f9036aa9335a251fc80cec6010ab252a1245ea76fe89ee45a41c3230af1e356f3db90d89f9eab1d31436c54700869677dc98c4044650aeb8135cd00e96eafb6d16b63e76048cc0acb6dda0708db910ea9603af93f7a093a7b609619c3a0dae74946e214dc4aca0f6870ebb77a0d9ee5b510fb7fcdb7770d9685cf4a86f17cab10e8d768604009c334efee191663c00b9489211b80b7f8b383c627d69c276ce4cce92d04ff26b40e7879f90214eba65e3b8b1ec03e798a8415f54ff886260e45db9c9343e43e56c637d2c5c1f076d2feb3dd5094eef2e9979cfcf1d19dbbb36dcc3db111791510568e7128a5a32095ee32063846194aeec99a75926f2ed0f7de12c7dbfa7b644e444f6ea88a57dbe6ca26d9f2f35cf94f0864d16e646d803caeef39aaf703250e8c253aad67c93b1050f7c15c165d8ca90c56f70b1cff48fa9784a659465a011387b01e55281b333319365f8e81a19241b7c5d4b1594e243535c52868b757c3d51b9f59ae1169119d08bd8e6d9e3f00c5872854b788c0b24291fe714216b5b8419690b91c2ce337ee97d08125027c3d5ce3e1ecd41a97295ab6c953af5f251836abcb0a5e84b9241b19b270741b17e2f6b4a1b02fcfbf81bc9ba9221c373ec8032797ead6b039f2559b20946567d99ea15611fe233efb433727b2ff77f44a0cdd81851fedb5ccc59328375dd71c157e0f7345cd2219199d74b622ec90bac22226e766339fead5dee54cb6c8b9281263299429781ea350c67506688de7c08c54c6e001d3734cc0cc70a0fd643853464979a035779d2d78170cfab2e85c2a93542fdb4ae859f9599847ba9c76fffd97d3bc9f9dd4ac0f13d07961285c23f16582ffe518f4de08ea613db9d021f0fec5c20e77e8da1965e7b4b3301108558913db113a7c4d13532d8621e4aa606268ad55ff2353ee9bb94fe385ef1e676631bc52c79b55fe7fa4b101d40d50590fe17e47cb19d24bb3ef6f98b488a22c743231f01554d3e9347cee9656101383c2033b1b216a873cb669a86d09dd97d16e5cd242acfe6b068cd469686d036cb902bd40741f692b0ac47d6ece3eb930478b2927799aa9c9ac48a1bf81fb60b167ddf316714253e1caaf74d4dd3014563a35ccbce78bd47ec9ce0d666a679dd15538e5afb9155cbdcb49fa093644b79df3cb8e650587500af6511e9039fe98746efdc05623f1de4cfd9550e35c9dbe5b895067e1a5f7fb9468b16a3ca77777964b740628203be576aab3c758e76205945c8202c4b170cb57bee8c3f1a8c9b37a09af616cde0188f425163c13c49d698c618602674cf0e8de39a106fe5098ebdfef64a62cdb9bdca24fffe5235d317d3bc70a74f77a592e55bd3314f09e4517149e83b957e0a26a6663b90a166b9eeeed0d89398f1b52da143a4d0879aa2f627bbcda2114dc5c0a8a5313a849ed83cbb84b5c04ee0b0ef8c736eb0e9c059c663570d800accc11fedc55816561de6af136594878898c2ef946e4e7b03cf1a569d34c150d5a8f307fbbd1aafa05dd8b527f72d0c55ab86a7067abf7634b74e9688b89287aee008dc23077ab7f112ce79b87969408135816d67e0531ee29f94165b971072edfb6b05af00081528af661cb44fb6830486f4f14697b4d17e96c1ba4d7921bfc52c5f1b82668977d645ea660ba8321644b5418003ce9916f0b4f1924f86e3751288fddb39ad94f9282b20bc9af538dd7396dedb6505a5d2818453372ffd31ee4b4b0e429f16cff611ec17c050cb10aae49f239d3574a38b895a70fe27e203ec4f20d65150165c727f14bf377f7046bd2e480c34fc4deb95d82c10cc7b9bf03645e1b039dc170aa831cebe8f0d6f2e789eee17ca96c292bdd21d44c85b8cf76eb46f76624ae6e6a0369724e712f6a43bfb5124546562cad011988608211b1d2f7a3fc833fcb12b460adbea5e2adb38e4ee610fcce46ae0f3f73283d729602eeae2fd181b3ef013ddf72a2a27aee55440a35d157534de7bd1e7a47843120843d2a94def9fb3c24dd9806249f898a03cf7cfe3c0c921c2d340e2a4974d46a2d69aac893a015ff10f65fcc5cad97e12608f0c19dcf50a7ba9579a225e19d7b08ead51844548d33a65cb67df60bd84031cb66a27ef6bff9a80eb37244fbd63d81eea029cfd61596cff90a619c6a65fb1808b8438857ccf618d2275fe24805d625c763c1614ab73cef81b99892f34d1d5c67d70bb534ff2b57b36ffe0a3fac10841138f1f61ac4f1d31a3fddf6d7084d04ee714c6ba817412356639761a6f425fe599598d245a05dac41c11cf714b76811056f48f63d0354bd077912a51f05704ae594e31fa8feb133f4988a156b86ce6892de77eb15a9d79a0e8dd1dd579cdd3ac94eb17327ac820bf8f3c4cdba93de8cc8234fff56099a2974a77e29cd3008bc3c803fb473c03aba836fb7f31c835664fb554618ca60be11fb94f153ed3df47e3c2428c204165a46d79a453ff6f80bdc5586515f95bb007b36bb7fc4558f9a18382815fcdc89fb63b07bbaa6177803eddc09c1d75bbeb1c876f4ae87114b276947c2f6f37d9aa64fd92eb82afbcdb13f284abf9028cde34153974903639c4f84df932e0ad400ecdfd03d35ab17ced3867c2a98fa143d9ca8a34d02ad168d90e02811a4ea9537c7444835d6bc96edf0a9922899e8d81fcca79a3609707312e809cc6ebdceb322ef023714a757316427b9e3619c52a5dd1aea30014f988e6d268067a1d3582437a7b08baed529ecf81fe2ba20b8ee60fc499843d0c8149981bc7fda81c85e8fbc7024123ec29a36a21ce02d5ca3071758f9bfcf818368a7b6890dc3e350b88b8ca3fc487c4f32323a1b6479e4b3a9acdaf56086f986c31c3eb9cbab49e37091364ed00796708c55d82712d6b487b8cb7eb8a62c5ba055306a61ae76c0725c397c53b8b0474750fc4170266d23a563b263376f1f197ecec5fd9526393562f80bbf8fa47ba49d7f8df96f5c4d9ab7556c2c789cfd418b440c59c6f3aa605cd2a1d16bdd330f3ba9a2cf685ae041e1caac821ce8ee5f684257789d65aca428576f988f1c729df39d053e07f3ce4ca9616ee4418a27cb309e8a2beec0151285a73e036733adea6f71c186d2411996d6beb8c7426a46ae1a25c7aadab7e61def415b9df4ee817e91358a45e0de4e379bf769e4e581e89afe62dd9ab881a005a45c26b952d2d4102f3b3ca8848c88dcef5af5f10d7ca2d2f2a08048112681e4c8f46b143923fc3bcffc4730a1c5ad3d0fd753c8b2d3b6d0f02f1c207f683a2f168522503d35949ba7d02c55da69f478da2e6c0e8e5da8ed74d3e499026c66714d99cf6ba813a1923788516ccf5f5b45a066ee1399f3cb40c738787544583a43b13de5b041992e5ca118ab9cb9c914188103fc42d4c66db29e94f11db118c0f7b45fa50e6deb1a8b2b52b0a9f88bd87c5c24dee1547f52edba1fe696619255e1d9983754df1af8ef9c61486b157cb922ef21f931c9ee5970f79cd58b2a9b96c7f534c63989afb8c5eae1724032b7d40728326bae32bed59d4f7091634251708ea10e692caed0046a024bf935f8abb806e5b2155d300ee042faae8f055e4f8f9fe14154724f9666f17f1aea11dec5af63c7510ff54de467e68e0bb84cde048cb95bc6488ba41f953c200ac19cb62bc642a2214987cb42e7cc19f72927883401f15de90879003f5f54ac1f86e029fd7faedcc6e3ba3416f73b6355146293ab1225e8505a74eff344006e08e615d039be457336da98d00d408615545bc4d13697a5daca663768f14caf594c12c47f83dfc070f7f6c44a7e29b22d18b1f858db50cb3db8e3a9ccef3524c5fbd8010fbffa48639dfbc53dea2977d0fd17222800a93cc4b6040ac236e3785bb5b1d3f09e66e8da98f776e59a92adf344ec44db76ae51ee9ba23f92e0e9e0a9cbbf2f19758e8885dba77330f4211983a079ebd87cdfba726fa9e6abe513cb14a6bf17dd8128b60f655cb6268df2d58a30bc69a84c93a0f3ce4b9b98729ea6e54dafc3b451a315343869bb0f692f122623a02fd91af2893a9c537fdf18a61fd2b0ed1755384becee5140ae57f6e48d717ba98f0dca48eb274a98629fc54ef09158af25c6fd2a411dbe97ba2efa8fa5f7e477c7f580c63d8e5993f902e1dcd8315f006a6b3444342bea6abf32291a31d211e5b6d3066060acd449eaebb65a9ac1403d170751c6043ea335b24b1ea3c35095b836dbcc6334a9e069959b944d3e737fa92aa60ca82e973a16101fb078628aa3bac47c50838e3445edfc817d99614e54905897a83251b76c5eef736608381eb11f6cc64ed3f67d1e761407bb57a04f7a6b544422465eec6d7714a27c3cd8226e64caa6b1c6f151a251004aaf4d31771912b5753046918c0d0696237da35b50187c59933f210d83b2851668971fb6e8c1b5fa191f0c67b3e0b583467e11507df56c7162edf1d6981805ec85d5e79e487b61baef8a114210d6fdd9ed49cb1653d7e394f69af5b3f71e958dfb8e5caaf7f09f137aeef65dc988b07ac2000cbefbd8f9e3130edc2284080911db92387902d1caa7b9fc4eaa7cb23c2215fc28e9ad7b30fc422f9def533b889b407fb8046ad293ca43c29686c40b9b17bf9896c1586bd12891fa08aeccd6c74be0ea70417ca441d77d17951e8dba152942a072b2c0b5bbbc50b65ecad0f626222d9053e9cdbb5fea6e65f6111b57c08509958ab7b06f111e0fd75bb82c58e94ad6198cb714c2da16b111d2bd50e17026716cb0322aca71909595d48b404a8c8c965eccc98eb5e10dc6809f36ff4d9fbb1722adf11476a42e20d12292c32c68f480ae4170d407728b739d3449be54db1c9905b642a245ccad302761909d1690408a19250f9e230f03a7718e1266f7839d95105ea73be5b4ccad1f8c43436539ba61a5f72259e2eeed12cf0475e797c9527515748f9a2e702e4512579ab7a46430399a93fec534e08f1169d7750e096b7895acf1dd5af61205ee38a926e11a9552958d22ec5640fdbcee671a8ba814abbd8a547ea05ef24742a7c4efe98622e1ae6baf9fd69b687cef25d45550ab2f82b995744299af6c6970cea24928f47f8b6d535d4e1bacfc2a4554c0254fd6e928d1c33cef38e59c8d881c1c3d00c68cd977850864e32caa94b7ae99c3186802de516c2479c007d3b324463cdb9268adb2b38b7340359c3e117f03fb0743db2ef3e98a5c3dbaafb8ff6f5789db10f6aaef621202f83c3a8fbb65899408fabe507815bfa91060babf4ceaf0ac746eef4b70384389721ce1fd971d3ee2ddb1dce97e1a37a8a2b5a70994a2bcb8b09782148cb7eb6a494ec6fb1073bbbd7687e8b4062ee31119e517f9302212f08",
	Ur = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
	!function (t) {
		function i(t, i) {
			for (var n = "", e = 0; e < i.length; e++)
				n += i.charCodeAt(e).toString();
			var s = Math.floor(n.length / 5),
			r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
			h = Math.round(i.length / 2),
			a = Math.pow(2, 31) - 1,
			o = parseInt(t.substring(t.length - 8, t.length), 16);
			for (t = t.substring(0, t.length - 8), n += o; n.length > 10; )
				n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
			n = (r * n + h) % a;
			for (var f = "", c = "", e = 0; e < t.length; e += 2)
				f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), c += String.fromCharCode(f), n = (r * n + h) % a;
			return c
		}
		t = i(t, "QUNEE"),
		Ur = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
	}
	(Yr);
	var Wr = Ur[0],
	Xr = Ur[1],
	Vr = Ur[2] + Ur[3] + Ur[4],
	Kr = Ur[5],
	Zr = Ur[6],
	Jr = Ur[7],
	Qr = Ur[8],
	th = Ur[9],
	ih = Ur[10],
	nh = Ur[11],
	eh = Ur[12] + Ur[13] + Ur[14],
	sh = Ur[15],
	rh = Ur[16],
	hh = Ur[17],
	ah = Ur[18],
	oh = Ur[19] + Ur[20],
	fh = Ur[19],
	ch = Ur[21] + Ur[22] + Ur[23],
	uh = Ur[24],
	_h = Ur[25] + Ur[26] + Ur[27],
	dh = Ur[28] + Ur[26] + Ur[27],
	lh = Ur[29],
	vh = Ur[30] + Ur[31] + Ur[32],
	bh = Ur[33],
	yh = Ur[34] + Ur[13] + Ur[35],
	gh = Ur[28] + Ur[36] + Ur[37],
	mh = Ur[38],
	Eh = Ur[39] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	xh = Ur[44] + Ur[45] + Ur[46],
	ph = Ur[44] + Ur[47] + Ur[48],
	wh = Ur[49] + Ur[40] + Ur[50],
	Th = Ur[44],
	Oh = Ur[51],
	Ih = Ur[52],
	Mh = Ur[53],
	kh = Ur[54],
	Sh = Ur[55],
	Ah = Ur[56],
	Ch = Ur[57] + Ur[40] + Ur[58],
	Rh = Ur[59] + Ur[60] + Ur[61],
	Lh = Ur[62],
	Ph = Ur[63] + Ur[22] + Ur[64],
	Dh = Ur[65] + Ur[66] + Ur[67],
	jh = Ur[68],
	Nh = Ur[69],
	Bh = Ur[70] + Ur[71],
	$h = Ur[72],
	zh = Ur[73],
	Fh = Ur[74],
	Gh = Ur[75],
	Hh = Ur[76],
	qh = Ur[20],
	Yh = Ur[21] + Ur[22] + Ur[77],
	Uh = Ur[78],
	Wh = Ur[79],
	Xh = Ur[80],
	Vh = Ur[81] + Ur[82],
	Kh = Ur[20] + Ur[83],
	Zh = Ur[20] + Ur[84],
	Jh = Ur[85],
	Qh = Ur[86],
	ta = Ur[87],
	ia = Ur[88],
	na = Ur[89] + Ur[36] + Ur[90],
	ea = Ur[91] + Ur[22] + Ur[92],
	sa = Ur[28] + Ur[3] + Ur[93] + Ur[40] + Ur[94],
	ra = Ur[95],
	ha = Ur[96] + Ur[97],
	aa = Ur[98] + Ur[99] + Ur[100] + Ur[3] + Ur[101],
	oa = Ur[97],
	fa = Ur[97] + Ur[96] + Ur[97],
	ca = Ur[102],
	ua = Ur[103],
	_a = Ur[104],
	da = Ur[105],
	la = Ur[106] + Ur[107] + Ur[108],
	va = Ur[109],
	ba = Ur[110],
	ya = Ur[111] + Ur[107] + Ur[108],
	ga = Ur[112] + Ur[113] + Ur[114],
	ma = Ur[49] + Ur[66] + Ur[115] + Ur[3] + Ur[116] + Ur[107] + Ur[117],
	Ea = Ur[118] + Ur[119] + Ur[120],
	xa = Ur[112] + Ur[121],
	pa = Ur[112] + Ur[122],
	wa = Ur[123] + Ur[124] + Ur[125],
	Ta = Ur[123] + Ur[121],
	Oa = Ur[123] + Ur[126] + Ur[125],
	Ia = Ur[127] + Ur[36] + Ur[128],
	Ma = Ur[20] + Ur[129],
	ka = Ur[20] + Ur[130],
	Sa = Ur[20] + Ur[131] + Ur[22] + Ur[132],
	Aa = Ur[20] + Ur[133],
	Ca = Ur[134] + Ur[135] + Ur[136],
	Ra = Ur[137] + Ur[135] + Ur[136],
	La = Ur[138],
	Pa = Ur[139],
	Da = Ur[140] + Ur[141] + Ur[52] + Ur[142] + Ur[52] + Ur[143] + Ur[78],
	ja = Ur[144] + Ur[119] + Ur[145],
	Na = Ur[140] + Ur[146] + Ur[52] + Ur[142] + Ur[52] + Ur[143] + Ur[78],
	Ba = Ur[147],
	$a = Ur[148],
	za = Ur[149] + Ur[127] + Ur[150],
	Fa = Ur[151],
	Ga = Ur[152],
	Ha = Ur[153],
	qa = Ur[154],
	Ya = Ur[140] + Ur[155] + Ur[52] + Ur[143],
	Ua = Ur[156],
	Wa = Ur[157],
	Xa = Ur[158],
	Va = Ur[111] + Ur[22] + Ur[159],
	Ka = Ur[160],
	Za = Ur[96] + Ur[66] + Ur[161] + Ur[36] + Ur[162] + Ur[22] + Ur[163] + Ur[107] + Ur[164],
	Ja = Ur[165] + Ur[66] + Ur[161] + Ur[36] + Ur[162] + Ur[22] + Ur[163] + Ur[107] + Ur[164],
	Qa = Ur[166] + Ur[26] + Ur[167],
	to = Ur[168],
	io = Ur[49] + Ur[3] + Ur[169],
	no = Ur[82] + Ur[170],
	eo = Ur[171],
	so = Ur[172] + Ur[36] + Ur[173],
	ro = Ur[174],
	ho = Ur[175] + Ur[20] + Ur[176],
	ao = Ur[175] + Ur[20] + Ur[177],
	oo = Ur[160] + Ur[52],
	fo = Ur[175] + Ur[20] + Ur[178],
	co = Ur[179],
	uo = Ur[180],
	_o = Ur[181],
	lo = Ur[182] + Ur[40] + Ur[183],
	vo = Ur[182] + Ur[66] + Ur[184],
	bo = Ur[185],
	yo = Ur[186],
	go = Ur[187],
	mo = Ur[188] + Ur[20] + Ur[189],
	Eo = Ur[190] + Ur[119] + Ur[145],
	xo = Ur[191],
	po = Ur[20] + Ur[192] + Ur[107],
	wo = Ur[20] + Ur[193] + Ur[22] + Ur[159],
	To = Ur[20] + Ur[194] + Ur[3] + Ur[195],
	Oo = Ur[196],
	Io = Ur[49] + Ur[66] + Ur[197],
	Mo = Ur[198],
	ko = Ur[199] + Ur[22] + Ur[159],
	So = Ur[200],
	Ao = Ur[172] + Ur[119] + Ur[201],
	Co = Ur[57] + Ur[22] + Ur[159] + Ur[202] + Ur[203] + Ur[36] + Ur[204],
	Ro = Ur[205],
	Lo = Ur[206],
	Po = Ur[207] + Ur[22] + Ur[159],
	Do = Ur[208],
	jo = Ur[20] + Ur[209] + Ur[82] + Ur[87],
	No = Ur[20] + Ur[209] + Ur[82] + Ur[88],
	Bo = Ur[20] + Ur[210],
	$o = Ur[20] + Ur[209] + Ur[211] + Ur[87],
	zo = Ur[212],
	Fo = Ur[20] + Ur[203] + Ur[213],
	Go = Ur[20] + Ur[209] + Ur[211] + Ur[88],
	Ho = Ur[20] + Ur[203] + Ur[214],
	qo = Ur[24] + Ur[215] + Ur[22] + Ur[159],
	Yo = Ur[216],
	Uo = Ur[207] + Ur[202] + Ur[217] + Ur[13] + Ur[14],
	Wo = Ur[218],
	Xo = Ur[219],
	Vo = Ur[20] + Ur[220],
	Ko = Ur[221] + Ur[20] + Ur[189],
	Zo = Ur[222] + Ur[113] + Ur[114],
	Jo = Ur[223] + Ur[224] + Ur[225],
	Qo = Ur[226] + Ur[78] + Ur[227],
	tf = Ur[228],
	nf = Ur[20] + Ur[229],
	ef = Ur[230],
	sf = Ur[218] + Ur[52] + Ur[231] + Ur[52] + Ur[143] + Ur[232],
	rf = Ur[49] + Ur[47] + Ur[233],
	hf = Ur[234] + Ur[119] + Ur[235],
	af = Ur[71],
	of = Ur[143],
	ff = Ur[236],
	cf = Ur[237] + Ur[20] + Ur[238],
	uf = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[239],
	_f = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[240],
	df = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[241],
	lf = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[242],
	vf = Ur[243],
	bf = Ur[20] + Ur[244] + Ur[245],
	yf = Ur[246] + Ur[22] + Ur[247],
	gf = Ur[20] + Ur[248],
	mf = Ur[24] + Ur[249] + Ur[66] + Ur[88] + Ur[40] + Ur[250] + Ur[22] + Ur[159],
	Ef = Ur[20] + Ur[203] + Ur[251] + Ur[252],
	xf = Ur[24] + Ur[212],
	pf = Ur[24] + Ur[253] + Ur[121],
	wf = Ur[24] + Ur[253] + Ur[122],
	Tf = Ur[24] + Ur[254],
	Of = Ur[255] + Ur[256] + Ur[107] + Ur[257],
	If = Ur[24] + Ur[258] + Ur[36] + Ur[173],
	Mf = Ur[172] + Ur[66] + Ur[88] + Ur[107] + Ur[117],
	kf = Ur[259],
	Sf = Ur[24] + Ur[260],
	Af = Ur[24] + Ur[261],
	Cf = Ur[24] + Ur[258] + Ur[40] + Ur[250] + Ur[22] + Ur[159],
	Rf = Ur[20] + Ur[262] + Ur[263] + Ur[264] + Ur[202] + Ur[265] + Ur[42] + Ur[266],
	Lf = Ur[267] + Ur[263] + Ur[264],
	Pf = Ur[20] + Ur[268] + Ur[36] + Ur[269],
	Df = Ur[270] + Ur[263] + Ur[264],
	jf = Ur[24] + Ur[261] + Ur[107] + Ur[271],
	Nf = Ur[24] + Ur[272] + Ur[113] + Ur[114],
	Bf = Ur[20] + Ur[272] + Ur[121],
	$f = Ur[20] + Ur[272] + Ur[122],
	zf = Ur[149] + Ur[273] + Ur[22] + Ur[274],
	Ff = Ur[49] + Ur[107] + Ur[117],
	Gf = Ur[275],
	Hf = Ur[249] + Ur[66] + Ur[88] + Ur[22] + Ur[247],
	qf = Ur[24] + Ur[206],
	Yf = Ur[20] + Ur[276] + Ur[277],
	Uf = Ur[57] + Ur[26] + Ur[278],
	Wf = Ur[24] + Ur[258] + Ur[107] + Ur[257],
	Xf = Ur[222] + Ur[60] + Ur[279],
	Vf = Ur[49] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	Kf = Ur[172] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	Zf = Ur[281] + Ur[60] + Ur[279],
	Jf = Ur[282] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	Qf = Ur[281] + Ur[60] + Ur[279] + Ur[13] + Ur[125],
	tc = Ur[282] + Ur[47] + Ur[280] + Ur[60] + Ur[279] + Ur[13] + Ur[125],
	ic = Ur[222] + Ur[60] + Ur[279] + Ur[13] + Ur[125],
	nc = Ur[283] + Ur[263] + Ur[284],
	ec = Ur[283] + Ur[202] + Ur[217],
	sc = Ur[285] + Ur[224] + Ur[286],
	rc = Ur[49] + Ur[202] + Ur[287] + Ur[60] + Ur[288],
	hc = Ur[289] + Ur[42] + Ur[266],
	ac = Ur[228] + Ur[22] + Ur[290],
	oc = Ur[291] + Ur[22] + Ur[290],
	fc = Ur[292] + Ur[202] + Ur[287] + Ur[60] + Ur[288],
	cc = Ur[293] + Ur[224] + Ur[294] + Ur[119] + Ur[295],
	uc = Ur[296],
	_c = Ur[297],
	dc = Ur[298],
	lc = Ur[299] + Ur[26] + Ur[300],
	vc = Ur[301] + Ur[3] + Ur[225] + Ur[40] + Ur[302],
	bc = Ur[301] + Ur[40] + Ur[302],
	yc = Ur[89] + Ur[3] + Ur[303] + Ur[3] + Ur[225],
	gc = Ur[304] + Ur[99],
	mc = Ur[305],
	Ec = Ur[306],
	xc = Ur[307],
	pc = Ur[308],
	wc = Ur[302],
	Tc = Ur[309],
	Oc = Ur[251] + Ur[78] + Ur[251] + Ur[78] + Ur[211],
	Ic = Ur[82],
	Mc = Ur[310],
	kc = Ur[311],
	Sc = Ur[158] + Ur[107] + Ur[117],
	Ac = Ur[312],
	Cc = Ur[313],
	Rc = Ur[98] + Ur[40] + Ur[314],
	Lc = Ur[49] + Ur[26] + Ur[315] + Ur[66] + Ur[316],
	Pc = Ur[20] + Ur[317] + Ur[45] + Ur[318],
	Dc = Ur[89] + Ur[40] + Ur[314],
	jc = Ur[57] + Ur[202] + Ur[319],
	Nc = Ur[89],
	Bc = Ur[57] + Ur[60] + Ur[320] + Ur[13] + Ur[14],
	$c = Ur[2] + Ur[42] + Ur[321],
	zc = Ur[172] + Ur[3] + Ur[93] + Ur[202] + Ur[217],
	Fc = Ur[5] + Ur[3] + Ur[322],
	Gc = Ur[323],
	Hc = Ur[57] + Ur[47] + Ur[324],
	qc = Ur[20] + Ur[325],
	Yc = Ur[299] + Ur[26] + Ur[300] + Ur[26] + Ur[315],
	Uc = Ur[24] + Ur[89],
	Wc = Ur[326] + Ur[119] + Ur[165],
	Xc = Ur[222] + Ur[119] + Ur[165],
	Vc = Ur[327] + Ur[119] + Ur[165],
	Kc = Ur[328] + Ur[119] + Ur[165],
	Zc = Ur[329],
	Jc = Ur[330] + Ur[20] + Ur[331],
	Qc = Ur[330] + Ur[20] + Ur[332],
	tu = Ur[330] + Ur[20] + Ur[333],
	iu = Ur[330] + Ur[20] + Ur[334],
	nu = Ur[330] + Ur[20] + Ur[335],
	eu = Ur[330] + Ur[20] + Ur[336],
	su = Ur[330] + Ur[20] + Ur[337],
	ru = Ur[330] + Ur[20] + Ur[338],
	hu = Ur[330] + Ur[20] + Ur[339],
	au = Ur[330] + Ur[20] + Ur[340],
	ou = Ur[330] + Ur[20] + Ur[341] + Ur[20] + Ur[342],
	fu = Ur[330] + Ur[20] + Ur[341] + Ur[20] + Ur[82],
	cu = Ur[330] + Ur[20] + Ur[341] + Ur[20] + Ur[310],
	uu = Ur[330] + Ur[20] + Ur[341] + Ur[20] + Ur[343],
	_u = Ur[330] + Ur[20] + Ur[341] + Ur[20] + Ur[344],
	du = Ur[345] + Ur[47] + Ur[346],
	lu = Ur[299] + Ur[26] + Ur[300] + Ur[3] + Ur[93],
	vu = Ur[347],
	bu = Ur[20] + Ur[203] + Ur[251] + Ur[348],
	yu = Ur[24] + Ur[258],
	gu = Ur[49] + Ur[22] + Ur[23],
	mu = Ur[349] + Ur[22] + Ur[23],
	Eu = Ur[350],
	xu = Ur[351] + Ur[20] + Ur[352] + Ur[20] + Ur[353],
	pu = Ur[351] + Ur[20] + Ur[352] + Ur[20] + Ur[354],
	wu = Ur[351] + Ur[20] + Ur[352] + Ur[20] + Ur[176],
	Tu = Ur[172] + Ur[36] + Ur[355],
	Ou = Ur[49] + Ur[36] + Ur[355],
	Iu = Ur[356] + Ur[20] + Ur[357] + Ur[20] + Ur[358],
	Mu = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[359] + Ur[20] + Ur[360],
	ku = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[360] + Ur[20] + Ur[361],
	Su = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[362] + Ur[20] + Ur[363],
	Au = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[362] + Ur[20] + Ur[364],
	Cu = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[359] + Ur[20] + Ur[361],
	Ru = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[365] + Ur[20] + Ur[361],
	Lu = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[362] + Ur[20] + Ur[366],
	Pu = Ur[356] + Ur[20] + Ur[357] + Ur[20] + Ur[367] + Ur[20] + Ur[358],
	Du = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[362] + Ur[20] + Ur[368],
	ju = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[359],
	Nu = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[361] + Ur[20] + Ur[360],
	Bu = Ur[356] + Ur[20] + Ur[362],
	$u = Ur[369] + Ur[20] + Ur[370],
	zu = Ur[356] + Ur[20] + Ur[371] + Ur[20] + Ur[372],
	Fu = Ur[356] + Ur[20] + Ur[371] + Ur[20] + Ur[373],
	Gu = Ur[356] + Ur[20] + Ur[371] + Ur[20] + Ur[374],
	Hu = Ur[356] + Ur[20] + Ur[371] + Ur[20] + Ur[375],
	qu = Ur[356] + Ur[20] + Ur[376] + Ur[20] + Ur[377],
	Yu = Ur[378],
	Uu = Ur[199],
	Wu = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[365],
	Xu = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[365] + Ur[20] + Ur[360],
	Vu = Ur[49] + Ur[36] + Ur[269],
	Ku = Ur[379],
	Zu = Ur[347] + Ur[119] + Ur[295],
	Ju = Ur[49] + Ur[26] + Ur[380] + Ur[22] + Ur[159] + Ur[66] + Ur[197],
	Qu = Ur[356] + Ur[20] + Ur[381] + Ur[20] + Ur[382],
	t_ = Ur[2] + Ur[22] + Ur[247] + Ur[36] + Ur[383],
	i_ = Ur[384],
	n_ = Ur[385],
	e_ = Ur[386] + Ur[22] + Ur[159],
	s_ = Ur[387],
	r_ = Ur[388] + Ur[119] + Ur[389],
	h_ = Ur[390] + Ur[20] + Ur[356] + Ur[20] + Ur[391] + Ur[20] + Ur[392],
	a_ = Ur[24] + Ur[393] + Ur[26] + Ur[394],
	o_ = Ur[356] + Ur[20] + Ur[395] + Ur[20] + Ur[396],
	f_ = Ur[397] + Ur[121],
	c_ = Ur[397] + Ur[122],
	u_ = Ur[398] + Ur[36] + Ur[399] + Ur[45] + Ur[400],
	__ = Ur[401],
	d_ = Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[45] + Ur[404] + Ur[97] + Ur[66] + Ur[405],
	l_ = Ur[406],
	v_ = Ur[407],
	b_ = Ur[408],
	y_ = Ur[409],
	g_ = Ur[212] + Ur[71] + Ur[410] + Ur[411] + Ur[73],
	m_ = Ur[20] + Ur[406],
	E_ = Ur[412] + Ur[3] + Ur[93],
	x_ = Ur[20] + Ur[413] + Ur[22] + Ur[414],
	p_ = Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[45] + Ur[404],
	w_ = Ur[70] + Ur[71] + Ur[251] + Ur[415] + Ur[251] + Ur[415] + Ur[251] + Ur[415] + Ur[251] + Ur[73],
	T_ = Ur[416],
	O_ = Ur[417],
	I_ = Ur[418],
	M_ = Ur[20] + Ur[291],
	k_ = Ur[419] + Ur[420],
	S_ = Ur[291],
	A_ = Ur[20] + Ur[228],
	C_ = Ur[421] + Ur[20] + Ur[221] + Ur[20] + Ur[363],
	R_ = Ur[20] + Ur[85],
	L_ = Ur[251] + Ur[160],
	P_ = Ur[20] + Ur[422],
	D_ = Ur[421] + Ur[20] + Ur[221] + Ur[20] + Ur[366],
	j_ = Ur[223],
	N_ = Ur[222] + Ur[423] + Ur[424],
	B_ = Ur[205] + Ur[36] + Ur[355],
	$_ = Ur[74] + Ur[425],
	z_ = Ur[426] + Ur[3] + Ur[427],
	F_ = Ur[74] + Ur[428],
	G_ = Ur[98] + Ur[60] + Ur[288] + Ur[429],
	H_ = Ur[218] + Ur[202] + Ur[287],
	q_ = Ur[20] + Ur[430] + Ur[3] + Ur[431],
	Y_ = Ur[432],
	U_ = Ur[433],
	W_ = Ur[231] + Ur[434] + Ur[435],
	X_ = Ur[291] + Ur[3] + Ur[431],
	V_ = Ur[30],
	K_ = Ur[253] + Ur[113] + Ur[114],
	Z_ = Ur[253] + Ur[436] + Ur[437],
	J_ = Ur[181] + Ur[36] + Ur[355],
	Q_ = Ur[181] + Ur[36] + Ur[173],
	td = Ur[181] + Ur[42] + Ur[438],
	id = Ur[439] + Ur[26] + Ur[380],
	nd = Ur[439] + Ur[36] + Ur[440],
	ed = Ur[441],
	sd = Ur[439],
	rd = Ur[166] + Ur[107] + Ur[442],
	hd = Ur[182],
	ad = Ur[443],
	od = Ur[444],
	fd = Ur[445] + Ur[121],
	cd = Ur[445] + Ur[122],
	ud = Ur[446] + Ur[97] + Ur[447],
	_d = Ur[20] + Ur[203] + Ur[251] + Ur[448],
	dd = Ur[449],
	ld = Ur[20] + Ur[57] + Ur[42] + Ur[43] + Ur[119] + Ur[450],
	vd = Ur[451],
	bd = Ur[452],
	yd = Ur[453],
	gd = Ur[454] + Ur[224] + Ur[225],
	md = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[456],
	Ed = Ur[412] + Ur[26] + Ur[315] + Ur[202] + Ur[457],
	xd = Ur[458] + Ur[26] + Ur[459] + Ur[42] + Ur[460],
	pd = Ur[454] + Ur[224] + Ur[461] + Ur[45] + Ur[318],
	wd = Ur[193] + Ur[45] + Ur[225],
	Td = Ur[20] + Ur[462],
	Od = Ur[299] + Ur[26] + Ur[300] + Ur[13] + Ur[463] + Ur[26] + Ur[315],
	Id = Ur[464],
	Md = Ur[465] + Ur[40] + Ur[314],
	kd = Ur[281] + Ur[107] + Ur[466] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	Sd = Ur[172] + Ur[119] + Ur[467],
	Ad = Ur[65] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	Cd = Ur[282] + Ur[3] + Ur[468] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	Rd = Ur[281] + Ur[3] + Ur[468] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	Ld = Ur[165] + Ur[3] + Ur[468] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	Pd = Ur[96] + Ur[3] + Ur[468] + Ur[40] + Ur[41] + Ur[42] + Ur[43],
	Dd = Ur[74] + Ur[469],
	jd = Ur[20] + Ur[181] + Ur[36] + Ur[355],
	Nd = Ur[470],
	Bd = Ur[20] + Ur[181] + Ur[36] + Ur[173],
	$d = Ur[20] + Ur[181] + Ur[3] + Ur[471],
	zd = Ur[20] + Ur[181] + Ur[42] + Ur[438],
	Fd = Ur[20] + Ur[181],
	Gd = Ur[49] + Ur[66] + Ur[88] + Ur[202] + Ur[217],
	Hd = Ur[387] + Ur[66] + Ur[88] + Ur[202] + Ur[170],
	qd = Ur[140] + Ur[472] + Ur[52] + Ur[473],
	Yd = Ur[49] + Ur[66] + Ur[88] + Ur[202] + Ur[170],
	Ud = Ur[20] + Ur[276] + Ur[82],
	Wd = Ur[53] + Ur[66] + Ur[88] + Ur[202] + Ur[170],
	Xd = Ur[98] + Ur[60] + Ur[474],
	Vd = Ur[386] + Ur[3] + Ur[93],
	Kd = Ur[386] + Ur[26] + Ur[167] + Ur[3] + Ur[93],
	Zd = Ur[475] + Ur[119] + Ur[295],
	Jd = Ur[476] + Ur[45] + Ur[46],
	Qd = Ur[477] + Ur[36] + Ur[478],
	tl = Ur[477] + Ur[26] + Ur[167] + Ur[36] + Ur[478],
	il = Ur[22] + Ur[159] + Ur[71],
	nl = Ur[415],
	el = Ur[479],
	sl = Ur[36] + Ur[173] + Ur[71],
	rl = Ur[480] + Ur[52] + Ur[143],
	hl = Ur[111] + Ur[107] + Ur[117],
	al = Ur[481] + Ur[20] + Ur[482],
	ol = Ur[483],
	fl = Ur[484],
	cl = Ur[485] + Ur[22] + Ur[92],
	ul = Ur[486] + Ur[45] + Ur[46],
	_l = Ur[487],
	dl = Ur[488],
	ll = Ur[489],
	vl = Ur[490],
	bl = Ur[491],
	yl = Ur[363] + Ur[20] + Ur[366],
	gl = Ur[363] + Ur[20] + Ur[492],
	ml = Ur[493] + Ur[20] + Ur[492],
	El = Ur[493] + Ur[20] + Ur[368],
	xl = Ur[364] + Ur[20] + Ur[368],
	pl = Ur[363] + Ur[20] + Ur[368],
	wl = Ur[364] + Ur[20] + Ur[366],
	Tl = Ur[364] + Ur[20] + Ur[492],
	Ol = Ur[494],
	Il = Ur[199] + Ur[107] + Ur[117],
	Ml = Ur[495],
	kl = Ur[230] + Ur[496],
	Sl = Ur[415] + Ur[208] + Ur[496],
	Al = Ur[415] + Ur[452] + Ur[496],
	Cl = Ur[497] + Ur[31] + Ur[32],
	Rl = Ur[498] + Ur[78] + Ur[499],
	Ll = Ur[415] + Ur[498] + Ur[45] + Ur[46] + Ur[496],
	Pl = Ur[415] + Ur[497] + Ur[31] + Ur[32] + Ur[496],
	Dl = Ur[415] + Ur[33] + Ur[496],
	jl = Ur[498] + Ur[45] + Ur[46],
	Nl = Ur[500] + Ur[202] + Ur[217],
	Bl = Ur[49] + Ur[3] + Ur[93] + Ur[202] + Ur[217],
	$l = Ur[501] + Ur[78] + Ur[111],
	zl = Ur[501] + Ur[78] + Ur[53],
	Fl = Ur[501] + Ur[78] + Ur[12],
	Gl = Ur[502],
	Hl = Ur[503],
	ql = Ur[504],
	Yl = Ur[129],
	Ul = Ur[111] + Ur[47] + Ur[505],
	Wl = Ur[506],
	Xl = Ur[415] + Ur[206] + Ur[496],
	Vl = Ur[415] + Ur[12] + Ur[496],
	Kl = Ur[12],
	Zl = Ur[415] + Ur[497] + Ur[202] + Ur[217] + Ur[496],
	Jl = Ur[497] + Ur[202] + Ur[217],
	Ql = Ur[507] + Ur[20] + Ur[508],
	tv = Ur[111],
	iv = Ur[507] + Ur[20] + Ur[509],
	nv = Ur[507] + Ur[20] + Ur[510],
	ev = Ur[12] + Ur[78] + Ur[499],
	sv = Ur[20] + Ur[511],
	rv = Ur[498] + Ur[119] + Ur[295],
	hv = Ur[20] + Ur[512],
	av = Ur[28] + Ur[3] + Ur[93] + Ur[107] + Ur[513],
	ov = Ur[28] + Ur[3] + Ur[4] + Ur[3] + Ur[514],
	fv = Ur[507] + Ur[20] + Ur[515] + Ur[20] + Ur[516],
	cv = Ur[20] + Ur[517],
	uv = Ur[20] + Ur[518],
	_v = Ur[519],
	dv = Ur[506] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	lv = Ur[439] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	vv = Ur[20] + Ur[439] + Ur[224] + Ur[522],
	bv = Ur[206] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	yv = Ur[25] + Ur[60] + Ur[288] + Ur[22] + Ur[23] + Ur[3] + Ur[520],
	gv = Ur[28] + Ur[60] + Ur[288] + Ur[22] + Ur[23] + Ur[3] + Ur[471],
	mv = Ur[501] + Ur[202] + Ur[217] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	Ev = Ur[24] + Ur[323],
	xv = Ur[172] + Ur[202] + Ur[217],
	pv = Ur[20] + Ur[523] + Ur[202] + Ur[217] + Ur[42] + Ur[266],
	wv = Ur[49] + Ur[26] + Ur[524],
	Tv = Ur[53] + Ur[3] + Ur[93],
	Ov = Ur[149] + Ur[525],
	Iv = Ur[98] + Ur[3] + Ur[4],
	Mv = Ur[313] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	kv = Ur[206] + Ur[526],
	Sv = Ur[20] + Ur[527] + Ur[3] + Ur[520] + Ur[47] + Ur[505],
	Av = Ur[528],
	Cv = Ur[119] + Ur[201],
	Rv = Ur[98] + Ur[47] + Ur[529] + Ur[3] + Ur[101],
	Lv = Ur[166] + Ur[22] + Ur[530],
	Pv = Ur[182] + Ur[434] + Ur[531],
	Dv = Ur[306] + Ur[97] + Ur[532],
	jv = Ur[533],
	Nv = Ur[534],
	Bv = Ur[535],
	$v = Ur[111] + Ur[26] + Ur[27] + Ur[47] + Ur[505],
	zv = Ur[536] + Ur[20] + Ur[537] + Ur[20] + Ur[538] + Ur[20] + Ur[539],
	Fv = Ur[540] + Ur[20] + Ur[541] + Ur[20] + Ur[538],
	Gv = Ur[542] + Ur[72] + Ur[543] + Ur[72] + Ur[544] + Ur[72] + Ur[545],
	Hv = Ur[546],
	qv = Ur[547] + Ur[548] + Ur[36] + Ur[549],
	Yv = Ur[550] + Ur[72] + Ur[551] + Ur[72] + Ur[552] + Ur[72] + Ur[553] + Ur[72] + Ur[554] + Ur[72] + Ur[555] + Ur[72] + Ur[556] + Ur[72] + Ur[557] + Ur[72],
	Uv = Ur[72] + Ur[542] + Ur[72] + Ur[543] + Ur[72] + Ur[544] + Ur[72] + Ur[545],
	Wv = Ur[119] + Ur[558] + Ur[26] + Ur[27],
	Xv = Ur[559] + Ur[31] + Ur[32],
	Vv = Ur[30] + Ur[22] + Ur[560],
	Kv = Ur[20] + Ur[561] + Ur[202] + Ur[562],
	Zv = Ur[20] + Ur[28] + Ur[113] + Ur[563] + Ur[224] + Ur[548] + Ur[224] + Ur[564],
	Jv = Ur[555],
	Qv = Ur[552],
	tb = Ur[53] + Ur[26] + Ur[27] + Ur[47] + Ur[505],
	ib = Ur[149] + Ur[203] + Ur[251] + Ur[448],
	nb = Ur[20] + Ur[98] + Ur[565] + Ur[27],
	eb = Ur[20] + Ur[535] + Ur[26] + Ur[27],
	sb = Ur[28],
	rb = Ur[149] + Ur[566] + Ur[22] + Ur[567] + Ur[119] + Ur[450],
	hb = Ur[149] + Ur[28] + Ur[47] + Ur[568] + Ur[22] + Ur[567] + Ur[42] + Ur[460],
	ab = Ur[20] + Ur[487] + Ur[251] + Ur[26] + Ur[27],
	ob = Ur[149] + Ur[569] + Ur[3] + Ur[570],
	fb = Ur[571],
	cb = Ur[20] + Ur[28] + Ur[26] + Ur[27],
	ub = Ur[572] + Ur[82],
	_b = Ur[572],
	db = Ur[149] + Ur[573] + Ur[119] + Ur[558] + Ur[26] + Ur[27],
	lb = Ur[149] + Ur[574] + Ur[3] + Ur[322] + Ur[3] + Ur[520],
	vb = Ur[20] + Ur[575],
	bb = Ur[149] + Ur[487] + Ur[251] + Ur[224] + Ur[576] + Ur[119] + Ur[558] + Ur[26] + Ur[27],
	yb = Ur[170] + Ur[36] + Ur[577],
	gb = Ur[578] + Ur[36] + Ur[577],
	mb = Ur[20] + Ur[223],
	Eb = Ur[149] + Ur[579],
	xb = Ur[580],
	pb = Ur[149] + Ur[581],
	wb = Ur[20] + Ur[487] + Ur[251] + Ur[131],
	Tb = Ur[20] + Ur[582],
	Ob = Ur[583],
	Ib = Ur[584],
	Mb = Ur[551],
	kb = Ur[149] + Ur[487] + Ur[251] + Ur[47] + Ur[568] + Ur[22] + Ur[567],
	Sb = Ur[553],
	Ab = Ur[20] + Ur[57] + Ur[60] + Ur[585] + Ur[3] + Ur[570],
	Cb = Ur[554],
	Rb = Ur[550],
	Lb = Ur[586],
	Pb = Ur[587] + Ur[60] + Ur[588],
	Db = Ur[589],
	jb = Ur[590],
	Nb = Ur[591],
	Bb = Ur[20] + Ur[592],
	$b = Ur[593],
	zb = Ur[594] + Ur[121],
	Fb = Ur[594] + Ur[122],
	Gb = Ur[20] + Ur[487] + Ur[251] + Ur[60] + Ur[595] + Ur[60] + Ur[596],
	Hb = Ur[597] + Ur[20] + Ur[537],
	qb = Ur[149] + Ur[598] + Ur[119] + Ur[450],
	Yb = Ur[149] + Ur[599],
	Ub = Ur[600],
	Wb = Ur[575] + Ur[82],
	Xb = Ur[575],
	Vb = Ur[20] + Ur[569] + Ur[47] + Ur[568] + Ur[22] + Ur[567] + Ur[119] + Ur[450],
	Kb = Ur[592] + Ur[82],
	Zb = Ur[592],
	Jb = Ur[601] + Ur[82],
	Qb = Ur[601],
	ty = Ur[20] + Ur[203] + Ur[251] + Ur[602] + Ur[60] + Ur[595] + Ur[202] + Ur[457],
	iy = Ur[582] + Ur[82],
	ny = Ur[582],
	ey = Ur[49] + Ur[3] + Ur[603] + Ur[36] + Ur[604],
	sy = Ur[605] + Ur[82],
	ry = Ur[605],
	hy = Ur[20] + Ur[487] + Ur[82] + Ur[36] + Ur[606],
	ay = Ur[49] + Ur[60] + Ur[288],
	oy = Ur[168] + Ur[22] + Ur[607],
	fy = Ur[49] + Ur[26] + Ur[167] + Ur[66] + Ur[88] + Ur[224] + Ur[548] + Ur[26] + Ur[27],
	cy = Ur[49] + Ur[608] + Ur[88] + Ur[224] + Ur[548] + Ur[26] + Ur[27],
	uy = Ur[49] + Ur[609],
	_y = Ur[20] + Ur[610] + Ur[47] + Ur[611],
	dy = Ur[28] + Ur[26] + Ur[167] + Ur[107] + Ur[612],
	ly = Ur[28] + Ur[3] + Ur[514],
	vy = Ur[20] + Ur[211] + Ur[613],
	by = Ur[20] + Ur[614] + Ur[202] + Ur[615],
	yy = Ur[20] + Ur[616] + Ur[202] + Ur[617] + Ur[47] + Ur[611],
	gy = Ur[149] + Ur[28] + Ur[26] + Ur[27],
	my = Ur[149] + Ur[535] + Ur[26] + Ur[27],
	Ey = Ur[618],
	xy = Ur[20] + Ur[614] + Ur[202] + Ur[617],
	py = Ur[20] + Ur[487] + Ur[251] + Ur[122],
	wy = Ur[619] + Ur[121],
	Ty = Ur[20] + Ur[487] + Ur[251] + Ur[121],
	Oy = Ur[619] + Ur[122],
	Iy = Ur[620] + Ur[3] + Ur[322],
	My = Ur[621],
	ky = Ur[97] + Ur[282] + Ur[97] + Ur[622] + Ur[97] + Ur[623],
	Sy = Ur[97] + Ur[282] + Ur[97] + Ur[622] + Ur[97] + Ur[624],
	Ay = Ur[97] + Ur[282] + Ur[97] + Ur[625],
	Cy = Ur[97] + Ur[282] + Ur[97] + Ur[626],
	Ry = Ur[97] + Ur[281] + Ur[97] + Ur[622] + Ur[97] + Ur[623],
	Ly = Ur[97] + Ur[281] + Ur[97] + Ur[622] + Ur[97] + Ur[624],
	Py = Ur[97] + Ur[281] + Ur[97] + Ur[625],
	Dy = Ur[97] + Ur[281] + Ur[97] + Ur[626],
	jy = Ur[627],
	Ny = Ur[326],
	By = Ur[628] + Ur[71] + Ur[206] + Ur[103] + Ur[231] + Ur[434] + Ur[629] + Ur[104] + Ur[630] + Ur[631] + Ur[72] + Ur[632] + Ur[633] + Ur[634] + Ur[251] + Ur[635] + Ur[636] + Ur[637] + Ur[638] + Ur[639] + Ur[640] + Ur[641] + Ur[14] + Ur[344] + Ur[434] + Ur[642] + Ur[638] + Ur[643] + Ur[491] + Ur[82] + Ur[644] + Ur[251] + Ur[170] + Ur[82] + Ur[42] + Ur[88] + Ur[645] + Ur[642] + Ur[632] + Ur[646] + Ur[491] + Ur[647] + Ur[203] + Ur[648] + Ur[487] + Ur[649] + Ur[277] + Ur[650] + Ur[651] + Ur[348] + Ur[45] + Ur[652] + Ur[434] + Ur[22] + Ur[653] + Ur[22] + Ur[634] + Ur[224] + Ur[654] + Ur[655] + Ur[14] + Ur[656] + Ur[88] + Ur[657] + Ur[203] + Ur[434] + Ur[252] + Ur[658] + Ur[659] + Ur[660] + Ur[348] + Ur[40] + Ur[661] + Ur[263] + Ur[640] + Ur[121] + Ur[343] + Ur[662] + Ur[663] + Ur[664] + Ur[490] + Ur[665] + Ur[634] + Ur[211] + Ur[3] + Ur[666] + Ur[667] + Ur[487] + Ur[40] + Ur[211] + Ur[88] + Ur[40] + Ur[343] + Ur[668] + Ur[135] + Ur[638] + Ur[122] + Ur[634] + Ur[66] + Ur[669] + Ur[670] + Ur[671] + Ur[672] + Ur[673] + Ur[674] + Ur[640] + Ur[675] + Ur[640] + Ur[676] + Ur[344] + Ur[638] + Ur[434] + Ur[343] + Ur[677] + Ur[678] + Ur[679] + Ur[680] + Ur[277] + Ur[681] + Ur[682] + Ur[344] + Ur[52] + Ur[344] + Ur[72] + Ur[627],
	$y = Ur[683] + Ur[13] + Ur[463],
	zy = Ur[683] + Ur[202] + Ur[203],
	Fy = Ur[20] + Ur[684],
	Gy = Ur[20] + Ur[39] + Ur[685],
	Hy = Ur[20] + Ur[28] + Ur[36] + Ur[686],
	qy = Ur[20] + Ur[687] + Ur[343],
	Yy = Ur[20] + Ur[654],
	Uy = Ur[251] + Ur[78] + Ur[251],
	Wy = Ur[57] + Ur[119] + Ur[558] + Ur[36] + Ur[688],
	Xy = Ur[57] + Ur[689],
	Vy = Ur[36] + Ur[173],
	Ky = Ur[22] + Ur[159],
	Zy = Ur[202] + Ur[690],
	Jy = Ur[26] + Ur[27],
	Qy = Ur[22] + Ur[23] + Ur[3] + Ur[520] + Ur[26] + Ur[27],
	tg = Ur[47] + Ur[48] + Ur[26] + Ur[27],
	ig = Ur[436] + Ur[691],
	ng = Ur[60] + Ur[521],
	eg = Ur[22] + Ur[92],
	sg = Ur[60] + Ur[288],
	rg = Ur[36] + Ur[692] + Ur[224] + Ur[522],
	hg = Ur[60] + Ur[288] + Ur[224] + Ur[522],
	ag = Ur[693] + Ur[505],
	og = Ur[155] + Ur[429],
	fg = Ur[155] + Ur[141],
	cg = Ur[155] + Ur[146],
	ug = Ur[57] + Ur[224] + Ur[694] + Ur[135] + Ur[136],
	_g = Ur[695] + Ur[60] + Ur[596],
	dg = Ur[436] + Ur[279] + Ur[47] + Ur[48],
	lg = Ur[60] + Ur[595] + Ur[36] + Ur[688],
	vg = Ur[696],
	bg = Ur[697],
	yg = Ur[698],
	gg = Ur[699],
	mg = Ur[261] + Ur[78] + Ur[312],
	Eg = Ur[261],
	xg = Ur[426],
	pg = Ur[700],
	wg = Ur[700] + Ur[78] + Ur[436],
	Tg = Ur[700] + Ur[78] + Ur[31],
	Og = Ur[701],
	Ig = Ur[701] + Ur[78] + Ur[436],
	Mg = Ur[701] + Ur[78] + Ur[31],
	kg = Ur[701] + Ur[78] + Ur[436] + Ur[78] + Ur[31],
	Sg = Ur[701] + Ur[78] + Ur[31] + Ur[78] + Ur[436],
	Ag = Ur[702] + Ur[78] + Ur[291],
	Cg = Ur[702] + Ur[78] + Ur[228],
	Rg = Ur[702] + Ur[78] + Ur[86],
	Lg = Ur[702] + Ur[78] + Ur[85],
	Pg = Ur[703],
	Dg = Ur[704],
	jg = Ur[705],
	Ng = Ur[706],
	Bg = Ur[707],
	$g = Ur[708],
	zg = Ur[709],
	Fg = Ur[710],
	Gg = Ur[711],
	Hg = Ur[712],
	qg = Ur[713],
	Yg = Ur[714],
	Ug = Ur[715],
	Wg = Ur[716],
	Xg = Ur[717],
	Vg = Ur[718],
	Kg = Ur[719] + Ur[78] + Ur[720],
	Zg = Ur[719] + Ur[78] + Ur[211],
	Jg = Ur[719] + Ur[78] + Ur[82],
	Qg = Ur[719] + Ur[78] + Ur[310],
	tm = Ur[719] + Ur[78] + Ur[343],
	im = Ur[719] + Ur[78] + Ur[277],
	nm = Ur[719] + Ur[78] + Ur[721],
	em = Ur[719] + Ur[78] + Ur[722],
	sm = Ur[719] + Ur[78] + Ur[344],
	rm = Ur[719] + Ur[78] + Ur[151],
	hm = Ur[188] + Ur[20] + Ur[723] + Ur[20] + Ur[352] + Ur[20] + Ur[724],
	am = Ur[725],
	om = Ur[188] + Ur[20] + Ur[723] + Ur[20] + Ur[352] + Ur[20] + Ur[375],
	fm = Ur[188] + Ur[20] + Ur[723] + Ur[20] + Ur[352] + Ur[20] + Ur[726],
	cm = Ur[192],
	um = Ur[188] + Ur[20] + Ur[727] + Ur[20] + Ur[352] + Ur[20] + Ur[728],
	_m = Ur[729],
	dm = Ur[730] + Ur[20] + Ur[352],
	lm = Ur[730] + Ur[20] + Ur[352] + Ur[20] + Ur[731],
	vm = Ur[730] + Ur[20] + Ur[392],
	bm = Ur[730] + Ur[20] + Ur[732],
	ym = Ur[730] + Ur[20] + Ur[731] + Ur[20] + Ur[733],
	gm = Ur[732] + Ur[20] + Ur[373],
	mm = Ur[734] + Ur[20] + Ur[735],
	Em = Ur[341] + Ur[20] + Ur[177],
	xm = Ur[221] + Ur[20] + Ur[481] + Ur[20] + Ur[177],
	pm = Ur[736] + Ur[22] + Ur[163] + Ur[107] + Ur[164],
	wm = Ur[253],
	Tm = Ur[737] + Ur[3] + Ur[738] + Ur[119] + Ur[165],
	Om = Ur[24] + Ur[215] + Ur[22] + Ur[159] + Ur[211],
	Im = Ur[24] + Ur[215] + Ur[22] + Ur[159] + Ur[82],
	Mm = Ur[221] + Ur[20] + Ur[735],
	km = Ur[20] + Ur[739],
	Sm = Ur[313] + Ur[45] + Ur[225],
	Am = Ur[202] + Ur[287] + Ur[52] + Ur[155] + Ur[52] + Ur[143] + Ur[232],
	Cm = Ur[718] + Ur[13] + Ur[740],
	Rm = Ur[40] + Ur[741],
	Lm = Ur[742],
	Pm = Ur[743],
	Dm = Ur[20] + Ur[744],
	jm = Ur[745],
	Nm = Ur[746] + Ur[36] + Ur[355],
	Bm = Ur[74] + Ur[747],
	$m = Ur[746],
	zm = Ur[470] + Ur[52],
	Fm = Ur[74] + Ur[748],
	Gm = Ur[205] + Ur[119] + Ur[145],
	Hm = Ur[746] + Ur[119] + Ur[145],
	qm = Ur[426] + Ur[66] + Ur[749],
	Ym = Ur[426] + Ur[13] + Ur[125] + Ur[121],
	Um = Ur[426] + Ur[13] + Ur[125] + Ur[122],
	Wm = Ur[47] + Ur[750] + Ur[751],
	Xm = Ur[752] + Ur[3] + Ur[427],
	Vm = Ur[26] + Ur[753] + Ur[751],
	Km = Ur[20] + Ur[30] + Ur[3] + Ur[754],
	Zm = Ur[755] + Ur[36] + Ur[577],
	Jm = Ur[481] + Ur[20] + Ur[756] + Ur[20] + Ur[757],
	Qm = Ur[231],
	tE = Ur[155],
	iE = Ur[53] + Ur[47] + Ur[505],
	nE = Ur[49] + Ur[40] + Ur[758] + Ur[202] + Ur[759],
	eE = Ur[760],
	sE = Ur[761] + Ur[20] + Ur[352] + Ur[20] + Ur[762],
	rE = Ur[761] + Ur[20] + Ur[352] + Ur[20] + Ur[763],
	hE = Ur[764],
	aE = Ur[111] + Ur[3] + Ur[427] + Ur[36] + Ur[291],
	oE = Ur[763] + Ur[20] + Ur[761] + Ur[20] + Ur[361],
	fE = Ur[763] + Ur[20] + Ur[761] + Ur[20] + Ur[360],
	cE = Ur[762] + Ur[20] + Ur[761],
	uE = Ur[765] + Ur[20] + Ur[763] + Ur[20] + Ur[761],
	_E = Ur[765] + Ur[20] + Ur[762] + Ur[20] + Ur[761],
	dE = Ur[666],
	lE = Ur[766],
	vE = Ur[663],
	bE = Ur[767] + Ur[20] + Ur[768] + Ur[20] + Ur[381],
	yE = Ur[767] + Ur[20] + Ur[769] + Ur[20] + Ur[381],
	gE = Ur[767] + Ur[20] + Ur[770] + Ur[20] + Ur[381],
	mE = Ur[767] + Ur[20] + Ur[771],
	EE = Ur[57] + Ur[45] + Ur[772],
	xE = Ur[98] + Ur[146],
	pE = Ur[439] + Ur[3] + Ur[427],
	wE = Ur[439] + Ur[36] + Ur[773] + Ur[66] + Ur[749],
	TE = Ur[439] + Ur[36] + Ur[773] + Ur[13] + Ur[125] + Ur[121],
	OE = Ur[439] + Ur[36] + Ur[773] + Ur[13] + Ur[125] + Ur[122],
	IE = Ur[730] + Ur[20] + Ur[352] + Ur[20] + Ur[732],
	ME = Ur[439] + Ur[66] + Ur[774],
	kE = Ur[222] + Ur[3] + Ur[775],
	SE = Ur[439] + Ur[119] + Ur[295],
	AE = Ur[776] + Ur[36] + Ur[355],
	CE = Ur[776],
	RE = Ur[70] + Ur[71] + Ur[251] + Ur[72] + Ur[251] + Ur[72] + Ur[251] + Ur[72] + Ur[251] + Ur[73],
	LE = Ur[746] + Ur[3] + Ur[427],
	PE = Ur[746] + Ur[263] + Ur[264],
	DE = Ur[20] + Ur[746] + Ur[263] + Ur[264],
	jE = Ur[222] + Ur[42] + Ur[777] + Ur[3] + Ur[427],
	NE = Ur[222] + Ur[60] + Ur[279] + Ur[3] + Ur[775],
	BE = Ur[222] + Ur[60] + Ur[279] + Ur[423] + Ur[424],
	$E = Ur[778] + Ur[22] + Ur[247],
	zE = Ur[20] + Ur[157],
	FE = Ur[20] + Ur[174],
	GE = Ur[20] + Ur[779] + Ur[36] + Ur[173],
	HE = Ur[20] + Ur[780] + Ur[22] + Ur[781] + Ur[113] + Ur[114],
	qE = Ur[20] + Ur[780] + Ur[22] + Ur[781],
	YE = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[782],
	UE = Ur[783],
	WE = Ur[784],
	XE = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[785] + Ur[20] + Ur[786],
	VE = Ur[787] + Ur[78] + Ur[788],
	KE = Ur[789] + Ur[78] + Ur[788],
	ZE = Ur[790],
	JE = Ur[594],
	QE = Ur[791],
	tx = Ur[237] + Ur[20] + Ur[238] + Ur[20] + Ur[763] + Ur[20] + Ur[786],
	ix = Ur[729] + Ur[47] + Ur[792],
	nx = Ur[74] + Ur[211] + Ur[3] + Ur[721] + Ur[66] + Ur[642] + Ur[60],
	ex = Ur[74] + Ur[793],
	sx = Ur[74] + Ur[794] + Ur[26] + Ur[344] + Ur[66],
	rx = Ur[74] + Ur[795] + Ur[66] + Ur[796],
	hx = Ur[74] + Ur[795] + Ur[40] + Ur[797],
	ax = Ur[74] + Ur[798] + Ur[3] + Ur[799],
	ox = Ur[74] + Ur[800],
	fx = Ur[74] + Ur[211] + Ur[60] + Ur[721] + Ur[3] + Ur[642] + Ur[42],
	cx = Ur[74] + Ur[801] + Ur[66] + Ur[251],
	ux = Ur[74] + Ur[802] + Ur[803],
	_x = Ur[74] + Ur[211] + Ur[42] + Ur[721] + Ur[804] + Ur[82],
	dx = Ur[74] + Ur[795] + Ur[40] + Ur[805],
	lx = Ur[74] + Ur[806],
	vx = Ur[74] + Ur[82] + Ur[348] + Ur[344] + Ur[807],
	bx = Ur[74] + Ur[808],
	yx = Ur[809],
	gx = Ur[74] + Ur[810] + Ur[60] + Ur[799],
	mx = Ur[74] + Ur[811],
	Ex = Ur[74] + Ur[211] + Ur[42] + Ur[812] + Ur[40] + Ur[343],
	xx = Ur[74] + Ur[813] + Ur[814] + Ur[82],
	px = Ur[74] + Ur[815] + Ur[816],
	wx = Ur[74] + Ur[211] + Ur[26] + Ur[721] + Ur[817] + Ur[251],
	Tx = Ur[74] + Ur[818],
	Ox = Ur[74] + Ur[14] + Ur[722] + Ur[14] + Ur[344] + Ur[14] + Ur[344],
	Ix = Ur[74] + Ur[721] + Ur[40] + Ur[819],
	Mx = Ur[74] + Ur[343] + Ur[42] + Ur[343] + Ur[3] + Ur[343] + Ur[66],
	kx = Ur[74] + Ur[820],
	Sx = Ur[74] + Ur[821],
	Ax = Ur[74] + Ur[721] + Ur[42] + Ur[721] + Ur[26] + Ur[721] + Ur[42],
	Cx = Ur[74] + Ur[343] + Ur[3] + Ur[822],
	Rx = Ur[74] + Ur[823],
	Lx = Ur[74] + Ur[722] + Ur[60] + Ur[722] + Ur[60] + Ur[722] + Ur[60],
	Px = Ur[74] + Ur[824],
	Dx = Ur[74] + Ur[825],
	jx = Ur[74] + Ur[826],
	Nx = Ur[74] + Ur[642] + Ur[26] + Ur[642] + Ur[60] + Ur[642] + Ur[60],
	Bx = Ur[74] + Ur[40] + Ur[722] + Ur[40] + Ur[277] + Ur[40] + Ur[343],
	$x = Ur[74] + Ur[40] + Ur[642] + Ur[40] + Ur[721] + Ur[40] + Ur[277],
	zx = Ur[74] + Ur[40] + Ur[722] + Ur[40] + Ur[343] + Ur[40] + Ur[310],
	Fx = Ur[74] + Ur[827],
	Gx = Ur[166] + Ur[47] + Ur[828] + Ur[263] + Ur[264],
	Hx = Ur[74] + Ur[26] + Ur[642] + Ur[829],
	qx = Ur[74] + Ur[642] + Ur[830] + Ur[251] + Ur[766] + Ur[251],
	Yx = Ur[831] + Ur[3] + Ur[738] + Ur[119] + Ur[165],
	Ux = Ur[74] + Ur[488] + Ur[642] + Ur[832],
	Wx = Ur[74] + Ur[310] + Ur[348] + Ur[310] + Ur[766] + Ur[833],
	Xx = Ur[74] + Ur[66] + Ur[82] + Ur[834],
	Vx = Ur[74] + Ur[82] + Ur[26] + Ur[344] + Ur[835],
	Kx = Ur[836] + Ur[40] + Ur[837],
	Zx = Ur[74] + Ur[838],
	Jx = Ur[74] + Ur[491] + Ur[277] + Ur[491] + Ur[277] + Ur[491] + Ur[721],
	Qx = Ur[402] + Ur[97],
	tp = Ur[839],
	ip = Ur[20] + Ur[840],
	np = Ur[20] + Ur[841] + Ur[202] + Ur[287],
	ep = Ur[34] + Ur[66] + Ur[842],
	sp = Ur[34] + Ur[66] + Ur[843],
	rp = Ur[34] + Ur[99] + Ur[844],
	hp = Ur[202] + Ur[319] + Ur[52] + Ur[845] + Ur[52] + Ur[846] + Ur[78],
	ap = Ur[34],
	op = Ur[847],
	fp = Ur[45] + Ur[848] + Ur[52] + Ur[766] + Ur[52] + Ur[847] + Ur[52] + Ur[849] + Ur[78],
	cp = Ur[850] + Ur[42] + Ur[266],
	up = Ur[851],
	_p = Ur[787] + Ur[107] + Ur[852],
	dp = Ur[853],
	lp = Ur[854] + Ur[3] + Ur[427],
	vp = Ur[779] + Ur[40] + Ur[855] + Ur[107] + Ur[164],
	bp = Ur[850] + Ur[36] + Ur[173],
	yp = Ur[839] + Ur[119] + Ur[294],
	gp = Ur[856],
	mp = Ur[857],
	Ep = Ur[858] + Ur[436] + Ur[859],
	xp = Ur[858] + Ur[60] + Ur[288],
	pp = Ur[860],
	wp = Ur[861],
	Tp = Ur[862] + Ur[60] + Ur[288],
	Op = Ur[863],
	Ip = Ur[864] + Ur[3] + Ur[225],
	Mp = Ur[865],
	kp = Ur[145] + Ur[119] + Ur[295],
	Sp = Ur[866],
	Ap = Ur[867],
	Cp = Ur[868],
	Rp = Ur[862],
	Lp = Ur[869],
	Pp = Ur[870],
	Dp = Ur[289] + Ur[36] + Ur[173],
	jp = Ur[871] + Ur[224] + Ur[623] + Ur[3] + Ur[225] + Ur[36] + Ur[173],
	Np = Ur[744],
	Bp = Ur[872],
	$p = Ur[145],
	zp = Ur[873],
	Fp = Ur[99] + Ur[874] + Ur[52] + Ur[875] + Ur[496] + Ur[251] + Ur[87],
	Gp = Ur[556],
	Hp = Ur[851] + Ur[135] + Ur[136],
	qp = Ur[876] + Ur[135] + Ur[136],
	Yp = Ur[186] + Ur[31] + Ur[877] + Ur[232],
	Up = Ur[186] + Ur[22] + Ur[878] + Ur[52] + Ur[60] + Ur[879] + Ur[232],
	Wp = Ur[880],
	Xp = Ur[881],
	Vp = Ur[14] + Ur[882] + Ur[491] + Ur[343] + Ur[348] + Ur[883] + Ur[884] + Ur[722] + Ur[766] + Ur[885] + Ur[348] + Ur[886] + Ur[488] + Ur[310] + Ur[887] + Ur[642] + Ur[888] + Ur[889] + Ur[890] + Ur[891] + Ur[892] + Ur[251] + Ur[491] + Ur[277] + Ur[14] + Ur[893] + Ur[766] + Ur[894] + Ur[895] + Ur[896] + Ur[488] + Ur[897] + Ur[898] + Ur[310] + Ur[899] + Ur[251] + Ur[900] + Ur[901] + Ur[491] + Ur[902] + Ur[903] + Ur[904] + Ur[905] + Ur[310] + Ur[348] + Ur[906] + Ur[14] + Ur[907] + Ur[908] + Ur[721] + Ur[491] + Ur[909] + Ur[14] + Ur[910] + Ur[911] + Ur[642] + Ur[912] + Ur[913] + Ur[14] + Ur[642] + Ur[488] + Ur[277] + Ur[170] + Ur[211] + Ur[348] + Ur[343] + Ur[348] + Ur[914] + Ur[491] + Ur[82] + Ur[170] + Ur[896] + Ur[915] + Ur[344] + Ur[170] + Ur[310] + Ur[348] + Ur[72] + Ur[916] + Ur[211] + Ur[766] + Ur[917] + Ur[170] + Ur[918] + Ur[766] + Ur[919] + Ur[14] + Ur[920] + Ur[895] + Ur[921] + Ur[922] + Ur[923] + Ur[924] + Ur[343] + Ur[925] + Ur[926] + Ur[927] + Ur[928] + Ur[766] + Ur[722] + Ur[929] + Ur[310] + Ur[488] + Ur[251] + Ur[930] + Ur[931] + Ur[932] + Ur[933] + Ur[348] + Ur[934] + Ur[935] + Ur[251] + Ur[488] + Ur[936] + Ur[937] + Ur[938] + Ur[916] + Ur[939] + Ur[940] + Ur[941] + Ur[488] + Ur[251] + Ur[942] + Ur[943] + Ur[944] + Ur[945] + Ur[488] + Ur[946] + Ur[947] + Ur[642] + Ur[491] + Ur[948] + Ur[488] + Ur[949] + Ur[950] + Ur[721] + Ur[951] + Ur[952] + Ur[766] + Ur[953] + Ur[348] + Ur[211] + Ur[954] + Ur[955] + Ur[956] + Ur[344] + Ur[488] + Ur[957] + Ur[348] + Ur[958] + Ur[950] + Ur[72] + Ur[344] + Ur[959] + Ur[642] + Ur[14] + Ur[82] + Ur[14] + Ur[960] + Ur[348] + Ur[961] + Ur[905] + Ur[962] + Ur[903] + Ur[211] + Ur[488] + Ur[963] + Ur[348] + Ur[343] + Ur[964] + Ur[965] + Ur[170] + Ur[966] + Ur[967] + Ur[968] + Ur[969] + Ur[970] + Ur[971] + Ur[972] + Ur[491] + Ur[642] + Ur[915] + Ur[833] + Ur[488] + Ur[973] + Ur[14] + Ur[974] + Ur[491] + Ur[277] + Ur[94] + Ur[975] + Ur[348] + Ur[976] + Ur[14] + Ur[977] + Ur[766] + Ur[310] + Ur[488] + Ur[642] + Ur[766] + Ur[978] + Ur[979] + Ur[980] + Ur[766] + Ur[981] + Ur[766] + Ur[982] + Ur[983] + Ur[984] + Ur[985] + Ur[986] + Ur[488] + Ur[987] + Ur[488] + Ur[988] + Ur[491] + Ur[344] + Ur[491] + Ur[989] + Ur[898] + Ur[990] + Ur[488] + Ur[310] + Ur[170] + Ur[991] + Ur[912] + Ur[955] + Ur[14],
	Kp = Ur[186] + Ur[47] + Ur[992] + Ur[52] + Ur[98] + Ur[496],
	Zp = Ur[420] + Ur[993] + Ur[994] + Ur[420] + Ur[310] + Ur[40] + Ur[420] + Ur[993] + Ur[995] + Ur[78] + Ur[306] + Ur[78] + Ur[867] + Ur[420] + Ur[82] + Ur[3] + Ur[996] + Ur[78] + Ur[306] + Ur[78] + Ur[867] + Ur[420] + Ur[82] + Ur[3] + Ur[997] + Ur[78] + Ur[306] + Ur[78] + Ur[867],
	Jp = Ur[998],
	Qp = Ur[999],
	tw = Ur[1e3],
	iw = Ur[172] + Ur[119],
	nw = Ur[1001],
	ew = Ur[722] + Ur[78],
	sw = Ur[956],
	rw = Ur[290],
	hw = Ur[1002],
	aw = Ur[3] + Ur[431],
	ow = Ur[107] + Ur[1003],
	fw = Ur[3] + Ur[1004],
	cw = Ur[1005],
	uw = Ur[1006],
	_w = Ur[166],
	dw = Ur[1007],
	lw = Ur[1008],
	vw = Ur[1009],
	bw = Ur[1010],
	yw = Ur[1011],
	gw = Ur[1012],
	mw = Ur[467],
	Ew = Ur[1013],
	xw = Ur[1014],
	pw = Ur[402] + Ur[1015],
	ww = Ur[52] + Ur[299] + Ur[52] + Ur[1016] + Ur[277],
	Tw = Ur[1017],
	Ow = Ur[1018],
	Iw = Ur[1019] + Ur[113] + Ur[563],
	Mw = Ur[1020],
	kw = Ur[1021] + Ur[78] + Ur[896] + Ur[78] + Ur[211],
	Sw = Ur[36] + Ur[90],
	Aw = Ur[1022],
	Cw = Ur[1023] + Ur[26] + Ur[167],
	Rw = Ur[26] + Ur[167],
	Lw = Ur[46],
	Pw = Ur[1024],
	Dw = Ur[1025] + Ur[113] + Ur[563],
	jw = Ur[60] + Ur[879],
	Nw = Ur[1026],
	Bw = Ur[145] + Ur[82] + Ur[60],
	$w = Ur[487] + Ur[119] + Ur[145],
	zw = Ur[1027],
	Fw = Ur[251] + Ur[52] + Ur[251],
	Gw = Ur[402] + Ur[97] + Ur[3] + Ur[431],
	Hw = Ur[402] + Ur[97] + Ur[3] + Ur[431] + Ur[22] + Ur[607],
	qw = Ur[402] + Ur[97] + Ur[263] + Ur[403],
	Yw = Ur[20] + Ur[203] + Ur[251] + Ur[634],
	Uw = Ur[20] + Ur[1028],
	Ww = Ur[20] + Ur[1029] + Ur[47] + Ur[48],
	Xw = Ur[20] + Ur[1030],
	Vw = Ur[20] + Ur[525] + Ur[1031],
	Kw = Ur[258],
	Zw = Ur[20] + Ur[523],
	Jw = Ur[1032],
	Qw = Ur[1030],
	tT = Ur[20] + Ur[1033] + Ur[251] + Ur[1034] + Ur[685],
	iT = Ur[20] + Ur[1035],
	nT = Ur[20] + Ur[1036],
	eT = Ur[1037],
	sT = Ur[149] + Ur[1038],
	rT = Ur[20] + Ur[203] + Ur[251] + Ur[88],
	hT = Ur[486],
	aT = Ur[663] + Ur[202] + Ur[217],
	oT = Ur[1039] + Ur[66] + Ur[1040],
	fT = Ur[752],
	cT = Ur[20] + Ur[1041],
	uT = Ur[20] + Ur[1042],
	_T = Ur[20] + Ur[523] + Ur[3] + Ur[431] + Ur[36] + Ur[173] + Ur[42] + Ur[266],
	dT = Ur[1043] + Ur[119] + Ur[201],
	lT = Ur[20] + Ur[561] + Ur[224] + Ur[1044],
	vT = Ur[1045],
	bT = Ur[149] + Ur[1046] + Ur[224] + Ur[1044],
	yT = Ur[1037] + Ur[71],
	gT = Ur[1047],
	mT = Ur[20] + Ur[276] + Ur[251],
	ET = Ur[1048] + Ur[26] + Ur[167],
	xT = Ur[1049] + Ur[202] + Ur[217],
	pT = Ur[98] + Ur[47] + Ur[1050],
	wT = Ur[1051] + Ur[202] + Ur[170],
	TT = Ur[149] + Ur[1052],
	OT = Ur[1053],
	IT = Ur[20] + Ur[523] + Ur[66] + Ur[197] + Ur[42] + Ur[266],
	MT = Ur[20] + Ur[1054],
	kT = Ur[299] + Ur[26] + Ur[300] + Ur[107] + Ur[1055],
	ST = Ur[180] + Ur[119] + Ur[165],
	AT = Ur[20] + Ur[1056] + Ur[3] + Ur[431],
	CT = Ur[20] + Ur[1030] + Ur[3] + Ur[1057],
	RT = Ur[20] + Ur[98] + Ur[202] + Ur[1058] + Ur[107] + Ur[117],
	LT = Ur[421] + Ur[20] + Ur[1059],
	PT = Ur[1060] + Ur[78] + Ur[571],
	DT = Ur[1060] + Ur[78] + Ur[1061],
	jT = Ur[421] + Ur[20] + Ur[352],
	NT = Ur[20] + Ur[1033] + Ur[251],
	BT = Ur[20] + Ur[291] + Ur[3] + Ur[431],
	$T = Ur[49] + Ur[26] + Ur[167] + Ur[66] + Ur[88] + Ur[202] + Ur[170],
	zT = Ur[20] + Ur[343] + Ur[663],
	FT = Ur[20] + Ur[1038] + Ur[42] + Ur[1062],
	GT = Ur[57] + Ur[66] + Ur[316] + Ur[26] + Ur[394],
	HT = Ur[1051] + Ur[66] + Ur[197],
	qT = Ur[20] + Ur[1063],
	YT = Ur[20] + Ur[310] + Ur[640],
	UT = Ur[20] + Ur[1064] + Ur[40] + Ur[1065],
	WT = Ur[1064] + Ur[40] + Ur[302] + Ur[3] + Ur[1066],
	XT = Ur[258] + Ur[31] + Ur[1067],
	VT = Ur[20] + Ur[929],
	KT = Ur[20] + Ur[344] + Ur[209] + Ur[3] + Ur[471],
	ZT = Ur[1068] + Ur[78] + Ur[198],
	JT = Ur[149] + Ur[310] + Ur[634],
	QT = Ur[752] + Ur[36] + Ur[577],
	tO = Ur[1069],
	iO = Ur[258] + Ur[107] + Ur[1070],
	nO = Ur[1051] + Ur[3] + Ur[1071],
	eO = Ur[1072],
	sO = Ur[28] + Ur[22] + Ur[23] + Ur[3] + Ur[520],
	rO = Ur[20] + Ur[1073],
	hO = Ur[20] + Ur[203] + Ur[251] + Ur[165],
	aO = Ur[20] + Ur[347] + Ur[66] + Ur[316] + Ur[202] + Ur[265] + Ur[42] + Ur[266],
	oO = Ur[196] + Ur[26] + Ur[315] + Ur[66] + Ur[316],
	fO = Ur[379] + Ur[224] + Ur[522],
	cO = Ur[299] + Ur[26] + Ur[300] + Ur[66] + Ur[88] + Ur[60] + Ur[1074] + Ur[42] + Ur[1075],
	uO = Ur[149] + Ur[1076],
	_O = Ur[49] + Ur[202] + Ur[217] + Ur[66] + Ur[88] + Ur[202] + Ur[170],
	dO = Ur[609] + Ur[526],
	lO = Ur[140] + Ur[472] + Ur[52] + Ur[1077],
	vO = Ur[421] + Ur[20] + Ur[1078],
	bO = Ur[20] + Ur[1079] + Ur[224] + Ur[522],
	yO = Ur[20] + Ur[1056] + Ur[224],
	gO = Ur[20] + Ur[836] + Ur[66] + Ur[197],
	mO = Ur[49] + Ur[263] + Ur[1080] + Ur[66] + Ur[197],
	EO = Ur[168] + Ur[66] + Ur[197],
	xO = Ur[2] + Ur[26] + Ur[315],
	pO = Ur[1051],
	wO = Ur[20] + Ur[1081],
	TO = Ur[402] + Ur[78] + Ur[26] + Ur[167],
	OO = Ur[1082],
	IO = Ur[1083] + Ur[263] + Ur[1084],
	MO = Ur[402] + Ur[78] + Ur[26] + Ur[315],
	kO = Ur[1085],
	SO = Ur[1086] + Ur[78] + Ur[1087],
	AO = Ur[1088] + Ur[22] + Ur[247] + Ur[3] + Ur[520],
	CO = Ur[111] + Ur[22] + Ur[247] + Ur[36] + Ur[1089],
	RO = Ur[98],
	LO = Ur[1090],
	PO = Ur[1091],
	DO = Ur[393] + Ur[26] + Ur[394],
	jO = Ur[24] + Ur[231],
	NO = Ur[402] + Ur[97] + Ur[475],
	BO = Ur[24] + Ur[1092] + Ur[22] + Ur[92],
	$O = Ur[2] + Ur[47] + Ur[1093],
	zO = Ur[1094] + Ur[36] + Ur[1095],
	FO = Ur[28] + Ur[22] + Ur[1096] + Ur[3] + Ur[471],
	GO = Ur[20] + Ur[687] + Ur[310],
	HO = Ur[24] + Ur[1097],
	qO = Ur[1097],
	YO = Ur[256],
	UO = Ur[98] + Ur[42] + Ur[321],
	WO = Ur[20] + Ur[256],
	XO = Ur[402] + Ur[78] + Ur[45] + Ur[225],
	VO = Ur[1098] + Ur[78] + Ur[111],
	KO = Ur[1098] + Ur[78] + Ur[53],
	ZO = Ur[1092] + Ur[22] + Ur[92],
	JO = Ur[1099] + Ur[20] + Ur[1100],
	QO = Ur[292] + Ur[36] + Ur[1101],
	tI = Ur[402] + Ur[78] + Ur[36] + Ur[269] + Ur[45] + Ur[225],
	iI = Ur[1086],
	nI = Ur[1102] + Ur[119] + Ur[165],
	eI = Ur[53] + Ur[22] + Ur[247] + Ur[36] + Ur[1089],
	sI = Ur[36] + Ur[269] + Ur[45] + Ur[225],
	rI = Ur[270],
	hI = Ur[402] + Ur[78] + Ur[66] + Ur[1103],
	aI = Ur[454] + Ur[36] + Ur[399] + Ur[45] + Ur[400],
	oI = Ur[1104] + Ur[20] + Ur[352] + Ur[20] + Ur[332],
	fI = Ur[1104] + Ur[20] + Ur[1105],
	cI = Ur[1104] + Ur[20] + Ur[1106],
	uI = Ur[258] + Ur[42] + Ur[266],
	_I = Ur[24] + Ur[1107] + Ur[119] + Ur[295],
	dI = Ur[1104] + Ur[20] + Ur[352],
	lI = Ur[1107],
	vI = Ur[24] + Ur[458] + Ur[36] + Ur[173],
	bI = Ur[1104] + Ur[20] + Ur[1108] + Ur[20] + Ur[177],
	yI = Ur[402] + Ur[78] + Ur[263] + Ur[1084],
	gI = Ur[20] + Ur[203] + Ur[896],
	mI = Ur[458] + Ur[36] + Ur[173],
	EI = Ur[1107] + Ur[119] + Ur[295],
	xI = Ur[260],
	pI = Ur[1107] + Ur[202] + Ur[287],
	wI = Ur[263] + Ur[1084],
	TI = Ur[402] + Ur[78] + Ur[119] + Ur[145],
	OI = Ur[119] + Ur[145],
	II = Ur[258] + Ur[60] + Ur[288],
	MI = Ur[74] + Ur[1109],
	kI = Ur[24] + Ur[1092] + Ur[22] + Ur[159],
	SI = Ur[439] + Ur[66] + Ur[1110] + Ur[3] + Ur[427],
	AI = Ur[746] + Ur[107] + Ur[117],
	CI = Ur[205] + Ur[107] + Ur[117],
	RI = Ur[1111] + Ur[36] + Ur[692],
	LI = Ur[1111] + Ur[36] + Ur[692] + Ur[36] + Ur[1101],
	PI = Ur[24] + Ur[1112],
	DI = Ur[253] + Ur[121],
	jI = Ur[253] + Ur[122],
	NI = Ur[730] + Ur[20] + Ur[352] + Ur[20] + Ur[732] + Ur[20] + Ur[332],
	BI = Ur[20] + Ur[1113],
	$I = Ur[261] + Ur[3] + Ur[427],
	zI = Ur[261] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	FI = Ur[261] + Ur[47] + Ur[280] + Ur[60] + Ur[279] + Ur[13] + Ur[125],
	GI = Ur[20] + Ur[262] + Ur[263] + Ur[264],
	HI = Ur[24] + Ur[258] + Ur[60] + Ur[288],
	qI = Ur[24] + Ur[267] + Ur[3] + Ur[427],
	YI = Ur[24] + Ur[267] + Ur[263] + Ur[264],
	UI = Ur[190],
	WI = Ur[196] + Ur[36] + Ur[173],
	XI = Ur[28] + Ur[66] + Ur[197] + Ur[3] + Ur[471],
	VI = Ur[24] + Ur[258] + Ur[47] + Ur[233],
	KI = Ur[24] + Ur[258] + Ur[31] + Ur[1067],
	ZI = Ur[24] + Ur[1114] + Ur[26] + Ur[278],
	JI = Ur[1115],
	QI = Ur[20] + Ur[203] + Ur[251] + Ur[1033],
	tM = Ur[31] + Ur[1067],
	iM = Ur[47] + Ur[233],
	nM = Ur[40] + Ur[250] + Ur[22] + Ur[159],
	eM = Ur[66] + Ur[1110] + Ur[263] + Ur[264],
	sM = Ur[730] + Ur[20] + Ur[785],
	rM = Ur[107] + Ur[257],
	hM = Ur[498],
	aM = Ur[439] + Ur[78] + Ur[787],
	oM = Ur[439] + Ur[78] + Ur[261],
	fM = Ur[439] + Ur[78] + Ur[208],
	cM = Ur[752] + Ur[78] + Ur[787],
	uM = Ur[1112],
	_M = Ur[426] + Ur[78] + Ur[1116],
	dM = Ur[426] + Ur[78] + Ur[787],
	lM = Ur[426] + Ur[78] + Ur[253] + Ur[78] + Ur[87],
	vM = Ur[426] + Ur[78] + Ur[253] + Ur[78] + Ur[88],
	bM = Ur[1117] + Ur[78] + Ur[205],
	yM = Ur[330] + Ur[20] + Ur[1118] + Ur[20] + Ur[176],
	gM = Ur[1117] + Ur[78] + Ur[205] + Ur[78] + Ur[102],
	mM = Ur[330] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	EM = Ur[1117] + Ur[78] + Ur[222] + Ur[78] + Ur[1120],
	xM = Ur[330] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	pM = Ur[330] + Ur[20] + Ur[1121] + Ur[20] + Ur[785],
	wM = Ur[1117] + Ur[78] + Ur[746] + Ur[78] + Ur[787],
	TM = Ur[330] + Ur[20] + Ur[1121] + Ur[20] + Ur[761],
	OM = Ur[1117] + Ur[78] + Ur[746] + Ur[78] + Ur[1122],
	IM = Ur[1117] + Ur[78] + Ur[776],
	MM = Ur[330] + Ur[20] + Ur[1123] + Ur[20] + Ur[176],
	kM = Ur[1117] + Ur[78] + Ur[776] + Ur[78] + Ur[102],
	SM = Ur[1124] + Ur[20] + Ur[367] + Ur[20] + Ur[1125],
	AM = Ur[249] + Ur[78] + Ur[1126] + Ur[78] + Ur[1086],
	CM = Ur[267] + Ur[78] + Ur[787],
	RM = Ur[1127] + Ur[20] + Ur[761],
	LM = Ur[267] + Ur[78] + Ur[1122],
	PM = Ur[732],
	DM = Ur[261] + Ur[78] + Ur[174],
	jM = Ur[261] + Ur[78] + Ur[787],
	NM = Ur[261] + Ur[78] + Ur[222] + Ur[78] + Ur[1120],
	BM = Ur[261] + Ur[78] + Ur[494],
	$M = Ur[1105],
	zM = Ur[222] + Ur[78] + Ur[1128],
	FM = Ur[188] + Ur[20] + Ur[727],
	GM = Ur[222] + Ur[78] + Ur[1047],
	HM = Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[723],
	qM = Ur[222] + Ur[78] + Ur[1120] + Ur[78] + Ur[1128],
	YM = Ur[222] + Ur[78] + Ur[1120] + Ur[78] + Ur[1047],
	UM = Ur[221] + Ur[20] + Ur[1127] + Ur[20] + Ur[785],
	WM = Ur[221] + Ur[20] + Ur[1127] + Ur[20] + Ur[761],
	XM = Ur[221] + Ur[20] + Ur[732],
	VM = Ur[231] + Ur[78] + Ur[261] + Ur[78] + Ur[174],
	KM = Ur[231] + Ur[78] + Ur[261] + Ur[78] + Ur[102],
	ZM = Ur[221] + Ur[20] + Ur[732] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	JM = Ur[221] + Ur[20] + Ur[732] + Ur[20] + Ur[373],
	QM = Ur[231] + Ur[78] + Ur[494],
	tk = Ur[221] + Ur[20] + Ur[1105],
	ik = Ur[231] + Ur[78] + Ur[260],
	nk = Ur[231] + Ur[78] + Ur[663] + Ur[78] + Ur[12],
	ek = Ur[221] + Ur[20] + Ur[1129],
	sk = Ur[231] + Ur[78] + Ur[1130],
	rk = Ur[231] + Ur[78] + Ur[1112],
	hk = Ur[865] + Ur[78] + Ur[212],
	ak = Ur[865] + Ur[78] + Ur[275],
	ok = Ur[1131] + Ur[20] + Ur[1132],
	fk = Ur[865] + Ur[78] + Ur[1053],
	ck = Ur[1131] + Ur[20] + Ur[1133] + Ur[20] + Ur[1134],
	uk = Ur[865] + Ur[78] + Ur[787],
	_k = Ur[1131] + Ur[20] + Ur[175] + Ur[20] + Ur[177],
	dk = Ur[865] + Ur[78] + Ur[181] + Ur[78] + Ur[1032],
	lk = Ur[1131] + Ur[20] + Ur[175] + Ur[20] + Ur[178],
	vk = Ur[865] + Ur[78] + Ur[181] + Ur[78] + Ur[1135],
	bk = Ur[1131] + Ur[20] + Ur[175] + Ur[20] + Ur[176],
	yk = Ur[865] + Ur[78] + Ur[181] + Ur[78] + Ur[102],
	gk = Ur[865] + Ur[78] + Ur[260],
	mk = Ur[865] + Ur[78] + Ur[272] + Ur[78] + Ur[174],
	Ek = Ur[1131] + Ur[20] + Ur[734],
	xk = Ur[865] + Ur[78] + Ur[272],
	pk = Ur[865] + Ur[78] + Ur[494],
	wk = Ur[865] + Ur[78] + Ur[253] + Ur[78] + Ur[87],
	Tk = Ur[1131] + Ur[20] + Ur[382] + Ur[20] + Ur[122],
	Ok = Ur[865] + Ur[78] + Ur[253] + Ur[78] + Ur[88],
	Ik = Ur[1131] + Ur[20] + Ur[177],
	Mk = Ur[865] + Ur[78] + Ur[1032],
	kk = Ur[1131] + Ur[20] + Ur[1136] + Ur[20] + Ur[1134],
	Sk = Ur[865] + Ur[78] + Ur[1137] + Ur[78] + Ur[275],
	Ak = Ur[1131] + Ur[20] + Ur[732],
	Ck = Ur[865] + Ur[78] + Ur[261],
	Rk = Ur[1131] + Ur[20] + Ur[732] + Ur[20] + Ur[176],
	Lk = Ur[865] + Ur[78] + Ur[261] + Ur[78] + Ur[102],
	Pk = Ur[1131] + Ur[20] + Ur[1127] + Ur[20] + Ur[785],
	Dk = Ur[1131] + Ur[20] + Ur[1127] + Ur[20] + Ur[761],
	jk = Ur[1131] + Ur[20] + Ur[1138],
	Nk = Ur[865] + Ur[78] + Ur[254],
	Bk = Ur[1131] + Ur[20] + Ur[731] + Ur[20] + Ur[733],
	$k = Ur[865] + Ur[78] + Ur[426] + Ur[78] + Ur[1116],
	zk = Ur[1131] + Ur[20] + Ur[731] + Ur[20] + Ur[785],
	Fk = Ur[865] + Ur[78] + Ur[426] + Ur[78] + Ur[787],
	Gk = Ur[1131] + Ur[20] + Ur[731] + Ur[20] + Ur[382] + Ur[20] + Ur[121],
	Hk = Ur[1131] + Ur[20] + Ur[644] + Ur[20] + Ur[515],
	qk = Ur[865] + Ur[78] + Ur[663] + Ur[78] + Ur[12],
	Yk = Ur[865] + Ur[78] + Ur[28] + Ur[78] + Ur[291],
	Uk = Ur[1104] + Ur[20] + Ur[1118],
	Wk = Ur[1107] + Ur[78] + Ur[205],
	Xk = Ur[1104] + Ur[20] + Ur[1118] + Ur[20] + Ur[176],
	Vk = Ur[1107] + Ur[78] + Ur[205] + Ur[78] + Ur[787],
	Kk = Ur[1104] + Ur[20] + Ur[1118] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	Zk = Ur[1104] + Ur[20] + Ur[1118] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	Jk = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[1140],
	Qk = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[1133] + Ur[20] + Ur[1134],
	tS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[785],
	iS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[175] + Ur[20] + Ur[177],
	nS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[175] + Ur[20] + Ur[178],
	eS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[373],
	sS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[382] + Ur[20] + Ur[121],
	rS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[382] + Ur[20] + Ur[122],
	hS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[732],
	aS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[1127] + Ur[20] + Ur[785],
	oS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[1127] + Ur[20] + Ur[761],
	fS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[1138],
	cS = Ur[356] + Ur[20] + Ur[735],
	uS = Ur[347] + Ur[78] + Ur[174],
	_S = Ur[347] + Ur[78] + Ur[787],
	dS = Ur[356] + Ur[20] + Ur[1123],
	lS = Ur[347] + Ur[78] + Ur[776],
	vS = Ur[356] + Ur[20] + Ur[1123] + Ur[20] + Ur[176],
	bS = Ur[347] + Ur[78] + Ur[776] + Ur[78] + Ur[102],
	yS = Ur[356] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	gS = Ur[347] + Ur[78] + Ur[222] + Ur[78] + Ur[1120],
	mS = Ur[356] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	ES = Ur[356] + Ur[20] + Ur[1141] + Ur[20] + Ur[382],
	xS = Ur[347] + Ur[78] + Ur[89] + Ur[78] + Ur[253],
	pS = Ur[347] + Ur[78] + Ur[98] + Ur[78] + Ur[253],
	wS = Ur[356] + Ur[20] + Ur[1121] + Ur[20] + Ur[785],
	TS = Ur[347] + Ur[78] + Ur[746] + Ur[78] + Ur[787],
	OS = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1142],
	IS = Ur[347] + Ur[78] + Ur[393] + Ur[78] + Ur[1143],
	MS = Ur[347] + Ur[78] + Ur[1144] + Ur[78] + Ur[1145],
	kS = Ur[347] + Ur[78] + Ur[702],
	SS = Ur[347] + Ur[78] + Ur[1146] + Ur[78] + Ur[1147],
	AS = Ur[347] + Ur[78] + Ur[51] + Ur[78] + Ur[1148],
	CS = Ur[356] + Ur[20] + Ur[357] + Ur[20] + Ur[482],
	RS = Ur[347] + Ur[78] + Ur[51] + Ur[78] + Ur[33],
	LS = Ur[356] + Ur[20] + Ur[371],
	PS = Ur[347] + Ur[78] + Ur[1149],
	DS = Ur[347] + Ur[78] + Ur[1149] + Ur[78] + Ur[494],
	jS = Ur[356] + Ur[20] + Ur[1141] + Ur[20] + Ur[1150] + Ur[20] + Ur[356],
	NS = Ur[347] + Ur[78] + Ur[89] + Ur[78] + Ur[1151] + Ur[78] + Ur[347],
	BS = Ur[356] + Ur[20] + Ur[381] + Ur[20] + Ur[1150] + Ur[20] + Ur[356],
	$S = Ur[347] + Ur[78] + Ur[98] + Ur[78] + Ur[1151] + Ur[78] + Ur[347],
	zS = Ur[719] + Ur[78] + Ur[89],
	FS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[177],
	GS = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[1032],
	HS = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[253],
	qS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[1118],
	YS = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[205],
	US = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[1118] + Ur[20] + Ur[176],
	WS = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[776],
	XS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[1123] + Ur[20] + Ur[176],
	VS = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[222] + Ur[78] + Ur[1120],
	KS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	ZS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[1121] + Ur[20] + Ur[785],
	JS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[1121] + Ur[20] + Ur[761],
	QS = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[188] + Ur[20] + Ur[723],
	tA = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[222] + Ur[78] + Ur[1128],
	iA = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[188] + Ur[20] + Ur[727],
	nA = Ur[719] + Ur[78] + Ur[89] + Ur[78] + Ur[222] + Ur[78] + Ur[1047],
	eA = Ur[719] + Ur[78] + Ur[98],
	sA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[177],
	rA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[1032],
	hA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[382],
	aA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[253],
	oA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[1118],
	fA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[205],
	cA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[1118] + Ur[20] + Ur[176],
	uA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[776],
	_A = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	dA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[222] + Ur[78] + Ur[1120],
	lA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	vA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[1121] + Ur[20] + Ur[785],
	bA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[746] + Ur[78] + Ur[787],
	yA = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[188] + Ur[20] + Ur[723],
	gA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[222] + Ur[78] + Ur[1128],
	mA = Ur[719] + Ur[78] + Ur[98] + Ur[78] + Ur[222] + Ur[78] + Ur[1047],
	EA = Ur[730] + Ur[20] + Ur[731] + Ur[20] + Ur[382] + Ur[20] + Ur[122],
	xA = Ur[1131] + Ur[20] + Ur[1134],
	pA = Ur[1131] + Ur[20] + Ur[785],
	wA = Ur[787],
	TA = Ur[267] + Ur[3] + Ur[427],
	OA = Ur[1131] + Ur[20] + Ur[1152] + Ur[20] + Ur[366],
	IA = Ur[1114] + Ur[13] + Ur[203] + Ur[119] + Ur[1153],
	MA = Ur[731] + Ur[20] + Ur[733],
	kA = Ur[731] + Ur[20] + Ur[382] + Ur[20] + Ur[121],
	SA = Ur[731] + Ur[20] + Ur[382] + Ur[20] + Ur[122],
	AA = Ur[1137] + Ur[22] + Ur[92],
	CA = Ur[1131] + Ur[20] + Ur[1140],
	RA = Ur[1131] + Ur[20] + Ur[734] + Ur[20] + Ur[735],
	LA = Ur[272] + Ur[113] + Ur[114],
	PA = Ur[1114] + Ur[22] + Ur[274],
	DA = Ur[1131] + Ur[20] + Ur[373],
	jA = Ur[261] + Ur[107] + Ur[271],
	NA = Ur[1131] + Ur[20] + Ur[382] + Ur[20] + Ur[121],
	BA = Ur[254],
	$A = Ur[1131] + Ur[20] + Ur[731] + Ur[20] + Ur[382] + Ur[20] + Ur[122],
	zA = Ur[1154] + Ur[20] + Ur[785] + Ur[20] + Ur[237] + Ur[20] + Ur[238],
	FA = Ur[752] + Ur[3] + Ur[427] + Ur[66] + Ur[1155] + Ur[224] + Ur[225],
	GA = Ur[1156],
	HA = Ur[20] + Ur[82] + Ur[14],
	qA = Ur[20] + Ur[1157],
	YA = Ur[1130] + Ur[119] + Ur[295],
	UA = Ur[330] + Ur[20] + Ur[1123],
	WA = Ur[221] + Ur[20] + Ur[732] + Ur[20] + Ur[785],
	XA = Ur[221] + Ur[20] + Ur[732] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	VA = Ur[221] + Ur[20] + Ur[644] + Ur[20] + Ur[515],
	KA = Ur[221] + Ur[20] + Ur[1156],
	ZA = Ur[1158] + Ur[66] + Ur[1159],
	JA = Ur[20] + Ur[938],
	QA = Ur[1117],
	tC = Ur[1104] + Ur[20] + Ur[1127] + Ur[20] + Ur[761],
	iC = Ur[20] + Ur[310] + Ur[634],
	nC = Ur[89] + Ur[40] + Ur[1160],
	eC = Ur[98] + Ur[40] + Ur[1160],
	sC = Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[727],
	rC = Ur[89] + Ur[40] + Ur[302] + Ur[26] + Ur[315],
	hC = Ur[98] + Ur[40] + Ur[302] + Ur[26] + Ur[315],
	aC = Ur[188] + Ur[20] + Ur[723],
	oC = Ur[89] + Ur[40] + Ur[1160] + Ur[36] + Ur[173],
	fC = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[382],
	cC = Ur[89] + Ur[40] + Ur[1160] + Ur[13] + Ur[125],
	uC = Ur[89] + Ur[40] + Ur[1160] + Ur[36] + Ur[204],
	_C = Ur[89] + Ur[40] + Ur[1160] + Ur[36] + Ur[204] + Ur[36] + Ur[355],
	dC = Ur[89] + Ur[40] + Ur[1160] + Ur[13] + Ur[1161],
	lC = Ur[89] + Ur[40] + Ur[1160] + Ur[42] + Ur[777] + Ur[3] + Ur[427],
	vC = Ur[341] + Ur[20] + Ur[1141] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	bC = Ur[89] + Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	yC = Ur[89] + Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[423] + Ur[424],
	gC = Ur[89] + Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[3] + Ur[775],
	mC = Ur[98] + Ur[40] + Ur[1160] + Ur[36] + Ur[173],
	EC = Ur[98] + Ur[40] + Ur[1160] + Ur[13] + Ur[125],
	xC = Ur[98] + Ur[40] + Ur[1160] + Ur[36] + Ur[204],
	pC = Ur[98] + Ur[40] + Ur[1160] + Ur[36] + Ur[204] + Ur[36] + Ur[355],
	wC = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[1123],
	TC = Ur[98] + Ur[40] + Ur[1160] + Ur[13] + Ur[1161],
	OC = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[1123] + Ur[20] + Ur[176],
	IC = Ur[98] + Ur[40] + Ur[1160] + Ur[13] + Ur[1161] + Ur[36] + Ur[355],
	MC = Ur[98] + Ur[40] + Ur[1160] + Ur[42] + Ur[777] + Ur[3] + Ur[427],
	kC = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[1121] + Ur[20] + Ur[761],
	SC = Ur[98] + Ur[40] + Ur[1160] + Ur[42] + Ur[777] + Ur[263] + Ur[264],
	AC = Ur[98] + Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	CC = Ur[341] + Ur[20] + Ur[381] + Ur[20] + Ur[188] + Ur[20] + Ur[727],
	RC = Ur[98] + Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[423] + Ur[424],
	LC = Ur[98] + Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[3] + Ur[775],
	PC = Ur[393] + Ur[47] + Ur[1162],
	DC = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[1134],
	jC = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[175] + Ur[20] + Ur[176],
	NC = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[734] + Ur[20] + Ur[735],
	BC = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[734],
	$C = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1131] + Ur[20] + Ur[732] + Ur[20] + Ur[176],
	zC = Ur[1127] + Ur[20] + Ur[785],
	FC = Ur[732] + Ur[20] + Ur[785],
	GC = Ur[732] + Ur[20] + Ur[188] + Ur[20] + Ur[1119],
	HC = Ur[732] + Ur[20] + Ur[188] + Ur[20] + Ur[1119] + Ur[20] + Ur[382],
	qC = Ur[258] + Ur[36] + Ur[269],
	YC = Ur[330] + Ur[20] + Ur[1118],
	UC = Ur[330] + Ur[20] + Ur[188] + Ur[20] + Ur[1121] + Ur[20] + Ur[785],
	WC = Ur[341] + Ur[20] + Ur[1141],
	XC = Ur[258] + Ur[36] + Ur[173],
	VC = Ur[24] + Ur[258] + Ur[3] + Ur[93],
	KC = Ur[20] + Ur[687] + Ur[721],
	ZC = Ur[111] + Ur[3] + Ur[93],
	JC = Ur[1163] + Ur[66] + Ur[1164] + Ur[22] + Ur[77],
	QC = Ur[349] + Ur[22] + Ur[77],
	tR = Ur[111] + Ur[66] + Ur[1164],
	iR = Ur[1094] + Ur[31] + Ur[1165],
	nR = Ur[24] + Ur[439] + Ur[66] + Ur[774],
	eR = Ur[24] + Ur[426] + Ur[13] + Ur[125] + Ur[121],
	sR = Ur[24] + Ur[439] + Ur[36] + Ur[773] + Ur[13] + Ur[125] + Ur[122],
	rR = Ur[24] + Ur[426] + Ur[66] + Ur[749],
	hR = Ur[24] + Ur[439] + Ur[36] + Ur[773] + Ur[66] + Ur[749],
	aR = Ur[609] + Ur[20] + Ur[1166] + Ur[20] + Ur[1167],
	oR = Ur[24] + Ur[258] + Ur[66] + Ur[197],
	fR = Ur[743] + Ur[3] + Ur[471],
	cR = Ur[24] + Ur[752] + Ur[3] + Ur[427],
	uR = Ur[24] + Ur[752] + Ur[3] + Ur[427] + Ur[66] + Ur[1155] + Ur[224] + Ur[225],
	_R = Ur[24] + Ur[426] + Ur[3] + Ur[427],
	dR = Ur[24] + Ur[426] + Ur[13] + Ur[125] + Ur[122],
	lR = Ur[388] + Ur[119] + Ur[389] + Ur[3] + Ur[4],
	vR = Ur[20] + Ur[1168],
	bR = Ur[28] + Ur[60] + Ur[288] + Ur[3] + Ur[471],
	yR = Ur[24] + Ur[258] + Ur[36] + Ur[577],
	gR = Ur[172] + Ur[224] + Ur[1169] + Ur[66] + Ur[197],
	mR = Ur[24] + Ur[258] + Ur[42] + Ur[777] + Ur[263] + Ur[264],
	ER = Ur[24] + Ur[746] + Ur[263] + Ur[264],
	xR = Ur[24] + Ur[1130] + Ur[119] + Ur[295],
	pR = Ur[36] + Ur[577],
	wR = Ur[42] + Ur[777] + Ur[263] + Ur[264],
	TR = Ur[20] + Ur[780] + Ur[66] + Ur[197],
	OR = Ur[24] + Ur[181] + Ur[42] + Ur[438],
	IR = Ur[24] + Ur[181] + Ur[36] + Ur[355],
	MR = Ur[24] + Ur[181],
	kR = Ur[24] + Ur[1032],
	SR = Ur[24] + Ur[181] + Ur[36] + Ur[173],
	AR = Ur[42] + Ur[1004],
	CR = Ur[24] + Ur[258] + Ur[42] + Ur[1004],
	RR = Ur[24] + Ur[258] + Ur[42] + Ur[1170] + Ur[40] + Ur[1160],
	LR = Ur[24] + Ur[258] + Ur[119] + Ur[165] + Ur[40] + Ur[1160],
	PR = Ur[24] + Ur[776],
	DR = Ur[1086] + Ur[66] + Ur[197],
	jR = Ur[196] + Ur[119] + Ur[165] + Ur[40] + Ur[1160],
	NR = Ur[24] + Ur[89] + Ur[40] + Ur[1160],
	BR = Ur[24] + Ur[89] + Ur[40] + Ur[1160] + Ur[36] + Ur[269],
	$R = Ur[89] + Ur[40] + Ur[1160] + Ur[47] + Ur[233],
	zR = Ur[24] + Ur[89] + Ur[40] + Ur[1160] + Ur[36] + Ur[173],
	FR = Ur[89] + Ur[40] + Ur[1160] + Ur[36] + Ur[1101],
	GR = Ur[89] + Ur[40] + Ur[1160] + Ur[42] + Ur[777] + Ur[263] + Ur[264],
	HR = Ur[263] + Ur[264],
	qR = Ur[24] + Ur[98] + Ur[40] + Ur[1160],
	YR = Ur[24] + Ur[98] + Ur[40] + Ur[1160] + Ur[36] + Ur[269],
	UR = Ur[98] + Ur[40] + Ur[1160] + Ur[47] + Ur[233],
	WR = Ur[24] + Ur[98] + Ur[40] + Ur[1160] + Ur[36] + Ur[173],
	XR = Ur[98] + Ur[40] + Ur[1160] + Ur[36] + Ur[1101],
	VR = Ur[40] + Ur[1160] + Ur[36] + Ur[204],
	KR = Ur[24] + Ur[222] + Ur[113] + Ur[114],
	ZR = Ur[40] + Ur[1160] + Ur[36] + Ur[204] + Ur[36] + Ur[355],
	JR = Ur[40] + Ur[1160] + Ur[36] + Ur[1101],
	QR = Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[60] + Ur[279],
	tL = Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[60] + Ur[279] + Ur[13] + Ur[125],
	iL = Ur[40] + Ur[1160] + Ur[42] + Ur[777] + Ur[3] + Ur[427],
	nL = Ur[40] + Ur[1160] + Ur[42] + Ur[777] + Ur[263] + Ur[264],
	eL = Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[3] + Ur[775],
	sL = Ur[40] + Ur[1160] + Ur[47] + Ur[280] + Ur[423] + Ur[424],
	rL = Ur[40] + Ur[1160] + Ur[13] + Ur[1161],
	hL = Ur[40] + Ur[1160] + Ur[13] + Ur[1161] + Ur[36] + Ur[355],
	aL = Ur[218] + Ur[40] + Ur[1160],
	oL = Ur[24] + Ur[746] + Ur[3] + Ur[427],
	fL = Ur[42] + Ur[1170] + Ur[40] + Ur[1160],
	cL = Ur[119] + Ur[165] + Ur[40] + Ur[1160],
	uL = Ur[743] + Ur[66] + Ur[197],
	_L = Ur[1171],
	dL = Ur[218] + Ur[26] + Ur[315],
	lL = Ur[49] + Ur[126] + Ur[125],
	vL = Ur[57] + Ur[22] + Ur[1172] + Ur[13] + Ur[1173],
	bL = Ur[49] + Ur[66] + Ur[316] + Ur[47] + Ur[1162],
	yL = Ur[166] + Ur[66] + Ur[316] + Ur[47] + Ur[1162],
	gL = Ur[1174],
	mL = Ur[196] + Ur[22] + Ur[132],
	EL = Ur[28] + Ur[66] + Ur[1164] + Ur[22] + Ur[23] + Ur[3] + Ur[520],
	xL = Ur[218] + Ur[107] + Ur[1175] + Ur[47] + Ur[280],
	pL = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[456],
	wL = Ur[702] + Ur[78],
	TL = Ur[356] + Ur[20] + Ur[352] + Ur[20] + Ur[1176],
	OL = Ur[1086] + Ur[36] + Ur[383],
	IL = Ur[730] + Ur[20] + Ur[731] + Ur[20] + Ur[382] + Ur[20] + Ur[121],
	ML = Ur[493] + Ur[20] + Ur[366],
	kL = Ur[1131] + Ur[20] + Ur[1105],
	SL = Ur[356] + Ur[20] + Ur[785],
	AL = Ur[74] + Ur[1177],
	CL = Ur[1104] + Ur[20] + Ur[1127] + Ur[20] + Ur[785],
	RL = Ur[341] + Ur[20] + Ur[381],
	LL = Ur[74] + Ur[1178] + Ur[1179] + Ur[277],
	PL = Ur[74] + Ur[1180] + Ur[26] + Ur[251],
	DL = Ur[20] + Ur[1181],
	jL = Ur[447],
	NL = Ur[1182] + Ur[31] + Ur[1183],
	BL = Ur[1184],
	$L = Ur[1185],
	zL = Ur[63] + Ur[26] + Ur[27],
	FL = Ur[206] + Ur[119] + Ur[1186],
	GL = Ur[49] + Ur[60] + Ur[1187] + Ur[202] + Ur[457],
	HL = Ur[836] + Ur[119] + Ur[165] + Ur[47] + Ur[1188],
	qL = Ur[1189] + Ur[40] + Ur[448],
	YL = Ur[45] + Ur[225],
	UL = Ur[166] + Ur[36] + Ur[269] + Ur[45] + Ur[225],
	WL = Ur[166] + Ur[263] + Ur[1084],
	XL = Ur[166] + Ur[45] + Ur[225],
	VL = Ur[20] + Ur[203] + Ur[251] + Ur[14],
	KL = Ur[1190],
	ZL = Ur[112] + Ur[22] + Ur[77],
	JL = Ur[532],
	QL = Ur[28] + Ur[26] + Ur[167] + Ur[3] + Ur[1191],
	tP = Ur[28] + Ur[202] + Ur[617] + Ur[26] + Ur[27],
	iP = Ur[1158] + Ur[47] + Ur[1192] + Ur[66] + Ur[197],
	nP = Ur[1193],
	eP = Ur[1194],
	sP = Ur[1195],
	rP = Ur[1196] + Ur[47] + Ur[1197] + Ur[42] + Ur[1170],
	hP = Ur[24] + Ur[29],
	aP = Ur[111] + Ur[26] + Ur[167],
	oP = Ur[49] + Ur[60] + Ur[61] + Ur[36] + Ur[355],
	fP = Ur[1030] + Ur[66] + Ur[197],
	cP = Ur[63] + Ur[40] + Ur[41],
	uP = Ur[1198] + Ur[66] + Ur[197],
	_P = Ur[20] + Ur[1199] + Ur[66] + Ur[197],
	dP = Ur[1] + Ur[47] + Ur[1200],
	lP = Ur[622] + Ur[40] + Ur[302],
	vP = Ur[622] + Ur[202] + Ur[203],
	bP = Ur[622] + Ur[13] + Ur[463],
	yP = Ur[20] + Ur[276] + Ur[722],
	gP = Ur[57] + Ur[202] + Ur[265],
	mP = Ur[385] + Ur[119] + Ur[165],
	EP = Ur[326] + Ur[119] + Ur[165] + Ur[3] + Ur[1066],
	xP = Ur[622] + Ur[119] + Ur[165] + Ur[13] + Ur[1201],
	pP = Ur[622] + Ur[40] + Ur[41],
	wP = Ur[1202] + Ur[20] + Ur[1203],
	TP = Ur[223] + Ur[36] + Ur[686],
	OP = Ur[20] + Ur[1204] + Ur[40] + Ur[41],
	IP = Ur[1205],
	MP = Ur[1206],
	kP = Ur[439] + Ur[224] + Ur[522],
	SP = Ur[172] + Ur[47] + Ur[233],
	AP = Ur[57] + Ur[224] + Ur[1207],
	CP = Ur[20] + Ur[1193] + Ur[42] + Ur[1062],
	RP = Ur[1208],
	LP = Ur[1209] + Ur[1016],
	PP = Ur[60] + Ur[1210] + Ur[52] + Ur[26] + Ur[1211] + Ur[232],
	DP = Ur[1212] + Ur[20] + Ur[1213],
	jP = Ur[36] + Ur[269],
	NP = Ur[47] + Ur[280],
	BP = Ur[36] + Ur[1101],
	$P = Ur[1212] + Ur[20] + Ur[1214],
	zP = Ur[166] + Ur[26] + Ur[315],
	FP = Ur[26] + Ur[315],
	GP = Ur[451] + Ur[22] + Ur[77],
	HP = Ur[47] + Ur[1162] + Ur[52] + Ur[3] + Ur[1215] + Ur[139] + Ur[302] + Ur[52] + Ur[26] + Ur[278],
	qP = Ur[258] + Ur[26] + Ur[167],
	YP = Ur[451] + Ur[224] + Ur[225],
	UP = Ur[1216] + Ur[26] + Ur[315],
	WP = Ur[1217],
	XP = Ur[1218] + Ur[26] + Ur[524],
	VP = Ur[1219] + Ur[107] + Ur[1220],
	KP = Ur[1221],
	ZP = Ur[20] + Ur[561] + Ur[224] + Ur[225],
	JP = Ur[498] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	QP = Ur[112] + Ur[436] + Ur[437],
	tD = Ur[20] + Ur[1030] + Ur[66] + Ur[197],
	iD = Ur[20] + Ur[1198] + Ur[66] + Ur[197],
	nD = Ur[1222] + Ur[20] + Ur[1223],
	eD = Ur[1224] + Ur[107] + Ur[1220],
	sD = Ur[226] + Ur[107] + Ur[1225],
	rD = Ur[20] + Ur[1226],
	hD = Ur[1104] + Ur[20] + Ur[352] + Ur[20] + Ur[331],
	aD = Ur[1104] + Ur[20] + Ur[352] + Ur[20] + Ur[706],
	oD = Ur[1227] + Ur[1015],
	fD = Ur[1228] + Ur[160],
	cD = Ur[1229] + Ur[52] + Ur[251] + Ur[78] + Ur[82] + Ur[1031] + Ur[52] + Ur[1230] + Ur[97] + Ur[623],
	uD = Ur[875],
	_D = Ur[78] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[45] + Ur[404] + Ur[52] + Ur[406],
	dD = Ur[1229] + Ur[103] + Ur[211] + Ur[104] + Ur[267] + Ur[97] + Ur[787] + Ur[496] + Ur[70] + Ur[71] + Ur[251] + Ur[415] + Ur[251] + Ur[415] + Ur[251] + Ur[415] + Ur[251] + Ur[78] + Ur[277] + Ur[73],
	lD = Ur[78] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[45] + Ur[404],
	vD = Ur[1229] + Ur[103] + Ur[251] + Ur[104],
	bD = Ur[1231],
	yD = Ur[103] + Ur[1229] + Ur[52] + Ur[310] + Ur[1031] + Ur[52] + Ur[1232] + Ur[97] + Ur[737] + Ur[71] + Ur[251] + Ur[78] + Ur[344] + Ur[415] + Ur[251] + Ur[415] + Ur[251] + Ur[78] + Ur[344] + Ur[415] + Ur[211] + Ur[73],
	gD = Ur[78] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[45] + Ur[404] + Ur[103] + Ur[433],
	mD = Ur[1229] + Ur[103] + Ur[211] + Ur[104],
	ED = Ur[103] + Ur[1229] + Ur[52] + Ur[251] + Ur[78] + Ur[310] + Ur[1031] + Ur[52] + Ur[789],
	xD = Ur[20] + Ur[1233],
	pD = Ur[20] + Ur[203] + Ur[1234],
	wD = Ur[78] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[36] + Ur[549] + Ur[66] + Ur[1235],
	TD = Ur[1236] + Ur[496] + Ur[82] + Ur[160] + Ur[1237] + Ur[275] + Ur[496] + Ur[1027] + Ur[104] + Ur[1238] + Ur[97] + Ur[1239] + Ur[496] + Ur[261] + Ur[97] + Ur[1238] + Ur[104] + Ur[1238] + Ur[97] + Ur[426] + Ur[1240] + Ur[425] + Ur[52] + Ur[251] + Ur[160] + Ur[52] + Ur[251] + Ur[160] + Ur[52] + Ur[211] + Ur[160] + Ur[1237] + Ur[267] + Ur[97] + Ur[787] + Ur[496] + Ur[70] + Ur[71] + Ur[1241] + Ur[72] + Ur[1241] + Ur[72] + Ur[1241] + Ur[72] + Ur[251] + Ur[78] + Ur[310] + Ur[1242] + Ur[261] + Ur[97] + Ur[494] + Ur[496] + Ur[343] + Ur[160] + Ur[104] + Ur[1236] + Ur[496] + Ur[211] + Ur[160] + Ur[104],
	OD = Ur[78] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[36] + Ur[549] + Ur[66] + Ur[1235] + Ur[78] + Ur[433] + Ur[1243] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[36] + Ur[549] + Ur[66] + Ur[1235] + Ur[103] + Ur[433],
	ID = Ur[1236] + Ur[97] + Ur[86] + Ur[496] + Ur[344] + Ur[160] + Ur[104],
	MD = Ur[1236] + Ur[97] + Ur[85] + Ur[496] + Ur[344] + Ur[160] + Ur[104],
	kD = Ur[78] + Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[36] + Ur[549] + Ur[22] + Ur[414],
	SD = Ur[103] + Ur[1229] + Ur[52] + Ur[310] + Ur[1031] + Ur[52] + Ur[1232] + Ur[97] + Ur[737] + Ur[71] + Ur[251] + Ur[78] + Ur[344] + Ur[415] + Ur[251] + Ur[415] + Ur[251] + Ur[78] + Ur[344] + Ur[415] + Ur[211] + Ur[1242],
	AD = Ur[20] + Ur[485] + Ur[60] + Ur[595] + Ur[36] + Ur[688],
	CD = Ur[20] + Ur[91] + Ur[60] + Ur[595] + Ur[36] + Ur[688],
	RD = Ur[402] + Ur[97] + Ur[263] + Ur[403] + Ur[97] + Ur[36] + Ur[549] + Ur[22] + Ur[414],
	LD = Ur[398] + Ur[202] + Ur[1244],
	PD = Ur[66] + Ur[1245],
	DD = Ur[20] + Ur[203] + Ur[251] + Ur[1015],
	jD = Ur[20] + Ur[203] + Ur[251] + Ur[1031],
	ND = Ur[20] + Ur[203] + Ur[1246],
	BD = Ur[1247],
	$D = Ur[1248] + Ur[20] + Ur[352],
	zD = Ur[1230] + Ur[13] + Ur[463],
	FD = Ur[28] + Ur[40] + Ur[41] + Ur[36] + Ur[440],
	GD = Ur[149] + Ur[839] + Ur[107] + Ur[1070],
	HD = Ur[28] + Ur[40] + Ur[41] + Ur[26] + Ur[380],
	qD = Ur[20] + Ur[89] + Ur[1249],
	YD = Ur[20] + Ur[98] + Ur[1249],
	UD = Ur[20] + Ur[89] + Ur[1250],
	WD = Ur[20] + Ur[89] + Ur[36] + Ur[577],
	XD = Ur[98] + Ur[202] + Ur[1058],
	VD = Ur[755] + Ur[119] + Ur[294],
	KD = Ur[1251] + Ur[119] + Ur[295],
	ZD = Ur[1248] + Ur[20] + Ur[1252],
	JD = Ur[20] + Ur[98] + Ur[1250],
	QD = Ur[455] + Ur[20] + Ur[1140] + Ur[20] + Ur[1253] + Ur[20] + Ur[177] + Ur[20] + Ur[1254],
	tj = Ur[1068],
	ij = Ur[20] + Ur[1255] + Ur[202] + Ur[170],
	nj = Ur[53] + Ur[60] + Ur[1256],
	ej = Ur[1094] + Ur[60] + Ur[1257],
	sj = Ur[1258],
	rj = Ur[1259] + Ur[3] + Ur[225],
	hj = Ur[60] + Ur[1256] + Ur[202] + Ur[617],
	aj = Ur[1260],
	oj = Ur[218] + Ur[22] + Ur[159],
	fj = Ur[57] + Ur[3] + Ur[1261] + Ur[22] + Ur[247],
	cj = Ur[102] + Ur[60] + Ur[1257],
	uj = Ur[49] + Ur[60] + Ur[61] + Ur[60] + Ur[1257] + Ur[36] + Ur[1101],
	_j = Ur[454] + Ur[22] + Ur[159],
	dj = Ur[111] + Ur[60] + Ur[1256],
	lj = Ur[60] + Ur[1257] + Ur[22] + Ur[247] + Ur[202] + Ur[617],
	vj = Ur[1196] + Ur[47] + Ur[1197] + Ur[119] + Ur[165],
	bj = Ur[619],
	yj = Ur[98] + Ur[47] + Ur[1050] + Ur[22] + Ur[159],
	gj = Ur[1262],
	mj = Ur[20] + Ur[276] + Ur[642],
	Ej = Ur[1263],
	xj = Ur[767] + Ur[20] + Ur[188] + Ur[20] + Ur[381],
	pj = Ur[1264],
	wj = Ur[3] + Ur[1265] + Ur[36] + Ur[269] + Ur[202] + Ur[617],
	Tj = Ur[166] + Ur[47] + Ur[280] + Ur[66] + Ur[88] + Ur[202] + Ur[617],
	Oj = Ur[3] + Ur[1265] + Ur[47] + Ur[280] + Ur[202] + Ur[617],
	Ij = Ur[26] + Ur[315] + Ur[609],
	Mj = Ur[166] + Ur[26] + Ur[315] + Ur[66] + Ur[88] + Ur[202] + Ur[617],
	kj = Ur[3] + Ur[1265] + Ur[36] + Ur[1266] + Ur[26] + Ur[315] + Ur[202] + Ur[617],
	Sj = Ur[1131] + Ur[20] + Ur[1267] + Ur[20] + Ur[1268] + Ur[20] + Ur[1269] + Ur[20] + Ur[1270] + Ur[20] + Ur[1271],
	Aj = Ur[1272],
	Cj = Ur[402] + Ur[97] + Ur[47] + Ur[1162] + Ur[26] + Ur[1273],
	Rj = Ur[1274] + Ur[1275] + Ur[1276] + Ur[26] + Ur[52] + Ur[211] + Ur[160],
	Lj = Ur[277] + Ur[160],
	Pj = Ur[1238] + Ur[36] + Ur[773],
	Dj = Ur[28] + Ur[31] + Ur[32] + Ur[3] + Ur[520],
	jj = Ur[1277],
	Nj = Ur[65] + Ur[26] + Ur[1278],
	Bj = Ur[28] + Ur[36] + Ur[173] + Ur[3] + Ur[520],
	$j = Ur[63] + Ur[26] + Ur[1278],
	zj = Ur[166] + Ur[1016],
	Fj = Ur[63] + Ur[26] + Ur[1278] + Ur[113] + Ur[1279] + Ur[3] + Ur[570] + Ur[13] + Ur[203] + Ur[113] + Ur[563],
	Gj = Ur[28] + Ur[3] + Ur[570] + Ur[13] + Ur[203] + Ur[113] + Ur[563],
	Hj = Ur[172] + Ur[119] + Ur[145],
	qj = Ur[57] + Ur[26] + Ur[1280],
	Yj = Ur[47] + Ur[1162] + Ur[26] + Ur[1273],
	Uj = Ur[1281],
	Wj = Ur[57] + Ur[26] + Ur[1282],
	Xj = Ur[865] + Ur[26] + Ur[1273],
	Vj = Ur[98] + Ur[3] + Ur[431],
	Kj = Ur[619] + Ur[47] + Ur[1162] + Ur[26] + Ur[1278],
	Zj = Ur[2] + Ur[26] + Ur[315] + Ur[66] + Ur[316],
	Jj = Ur[1043] + Ur[26] + Ur[1283],
	Qj = Ur[356] + Ur[20] + Ur[1139],
	tN = Ur[1284] + Ur[36] + Ur[399] + Ur[45] + Ur[400],
	iN = Ur[398] + Ur[60] + Ur[1285] + Ur[3] + Ur[570] + Ur[119] + Ur[165] + Ur[13] + Ur[1201],
	nN = Ur[1286] + Ur[36] + Ur[577],
	eN = Ur[1023],
	sN = Ur[1287],
	rN = Ur[1288] + Ur[52] + Ur[231] + Ur[232],
	hN = Ur[52] + Ur[87] + Ur[52],
	aN = Ur[581] + Ur[26] + Ur[1211],
	oN = Ur[454] + Ur[60] + Ur[1289] + Ur[26] + Ur[167],
	fN = Ur[57] + Ur[31] + Ur[1290],
	cN = Ur[57] + Ur[36] + Ur[1291],
	uN = Ur[1212] + Ur[20] + Ur[768] + Ur[20] + Ur[1292],
	_N = Ur[25] + Ur[202] + Ur[617] + Ur[26] + Ur[27],
	dN = Ur[1212] + Ur[20] + Ur[1293],
	lN = Ur[326] + Ur[26] + Ur[1211],
	vN = Ur[299] + Ur[26] + Ur[300] + Ur[107] + Ur[1055] + Ur[31] + Ur[1290] + Ur[609],
	bN = Ur[317] + Ur[113] + Ur[1294],
	yN = Ur[1295],
	gN = Ur[1212] + Ur[20] + Ur[768] + Ur[20] + Ur[1296],
	mN = Ur[1297] + Ur[20] + Ur[1296],
	EN = Ur[20] + Ur[1298] + Ur[22] + Ur[23] + Ur[3] + Ur[520] + Ur[47] + Ur[1299],
	xN = Ur[206] + Ur[22] + Ur[23] + Ur[3] + Ur[520] + Ur[60] + Ur[521],
	pN = Ur[20] + Ur[1300],
	wN = Ur[20] + Ur[1301] + Ur[26] + Ur[1278],
	TN = Ur[218] + Ur[47] + Ur[280] + Ur[202] + Ur[170],
	ON = Ur[57] + Ur[26] + Ur[380] + Ur[22] + Ur[159] + Ur[26] + Ur[1282],
	IN = Ur[57] + Ur[26] + Ur[380] + Ur[22] + Ur[159],
	MN = Ur[57] + Ur[3] + Ur[1302] + Ur[22] + Ur[159],
	kN = Ur[130] + Ur[36] + Ur[173],
	SN = Ur[57] + Ur[42] + Ur[1170],
	AN = Ur[74] + Ur[1303],
	CN = Ur[20] + Ur[1304],
	RN = Ur[22] + Ur[247] + Ur[36] + Ur[1089],
	LN = Ur[53] + Ur[22] + Ur[247] + Ur[36] + Ur[1089] + Ur[66] + Ur[88] + Ur[202] + Ur[217],
	PN = Ur[20] + Ur[1305] + Ur[22] + Ur[1306],
	DN = Ur[497] + Ur[22] + Ur[132],
	jN = Ur[578] + Ur[36] + Ur[1089],
	NN = Ur[477] + Ur[36] + Ur[1089],
	BN = Ur[497] + Ur[45] + Ur[145] + Ur[22] + Ur[132],
	$N = Ur[377] + Ur[20] + Ur[768] + Ur[20] + Ur[1292],
	zN = Ur[1307],
	FN = Ur[1087],
	GN = Ur[377] + Ur[20] + Ur[1293],
	HN = Ur[1147],
	qN = Ur[1308] + Ur[60] + Ur[588] + Ur[122],
	YN = Ur[20] + Ur[1309],
	UN = Ur[730] + Ur[20] + Ur[1310] + Ur[20] + Ur[1118],
	WN = Ur[730] + Ur[20] + Ur[1310] + Ur[20] + Ur[1118] + Ur[20] + Ur[785],
	XN = Ur[730] + Ur[20] + Ur[1310] + Ur[20] + Ur[1121] + Ur[20] + Ur[785],
	VN = Ur[1311],
	KN = Ur[1310] + Ur[20] + Ur[730] + Ur[20] + Ur[238] + Ur[20] + Ur[1312],
	ZN = Ur[1313],
	JN = Ur[20] + Ur[1003],
	QN = Ur[1314] + Ur[20] + Ur[1292],
	tB = Ur[20] + Ur[929] + Ur[119] + Ur[450],
	iB = Ur[299] + Ur[26] + Ur[300] + Ur[31] + Ur[1290] + Ur[609],
	nB = Ur[57] + Ur[36] + Ur[1315],
	eB = Ur[623] + Ur[107] + Ur[1316],
	sB = Ur[1314] + Ur[20] + Ur[1317],
	rB = Ur[1310] + Ur[20] + Ur[730] + Ur[20] + Ur[238],
	hB = Ur[20] + Ur[309] + Ur[202] + Ur[170],
	aB = Ur[398] + Ur[107] + Ur[1316] + Ur[36] + Ur[692] + Ur[66] + Ur[88] + Ur[107] + Ur[1318] + Ur[66] + Ur[405],
	oB = Ur[1319],
	fB = Ur[1320],
	cB = Ur[20] + Ur[203] + Ur[251] + Ur[766],
	uB = Ur[20] + Ur[212] + Ur[22] + Ur[159],
	_B = Ur[20] + Ur[1321],
	dB = Ur[1322] + Ur[97] + Ur[447],
	lB = Ur[1323] + Ur[97] + Ur[447],
	vB = Ur[1324] + Ur[97] + Ur[447],
	bB = Ur[70] + Ur[71] + Ur[251] + Ur[415] + Ur[1325] + Ur[415] + Ur[251] + Ur[415] + Ur[211] + Ur[73],
	yB = Ur[74] + Ur[1326] + Ur[251],
	gB = Ur[20] + Ur[212] + Ur[436] + Ur[1327] + Ur[47] + Ur[1328],
	mB = Ur[57] + Ur[107] + Ur[1329],
	EB = Ur[57] + Ur[107] + Ur[1330],
	xB = Ur[20] + Ur[1331],
	pB = Ur[780] + Ur[66] + Ur[197],
	wB = Ur[1332],
	TB = Ur[1333],
	OB = Ur[107] + Ur[1334] + Ur[202] + Ur[617],
	IB = Ur[1043] + Ur[36] + Ur[1335],
	MB = Ur[172] + Ur[36] + Ur[692],
	kB = Ur[1314],
	SB = Ur[1336] + Ur[36] + Ur[1335] + Ur[40] + Ur[758],
	AB = Ur[444] + Ur[40] + Ur[758],
	CB = Ur[1337] + Ur[20] + Ur[1338],
	RB = Ur[1337] + Ur[20] + Ur[597],
	LB = Ur[402] + Ur[97] + Ur[119] + Ur[1339],
	PB = Ur[1340] + Ur[20] + Ur[382] + Ur[20] + Ur[122],
	DB = Ur[74] + Ur[1341],
	jB = Ur[211] + Ur[160] + Ur[52] + Ur[1274] + Ur[1275] + Ur[60] + Ur[642] + Ur[60] + Ur[642] + Ur[60] + Ur[642],
	NB = Ur[82] + Ur[160] + Ur[52] + Ur[343] + Ur[160],
	BB = Ur[49] + Ur[202] + Ur[1342],
	$B = Ur[1343],
	zB = Ur[1114],
	FB = Ur[1344] + Ur[20] + Ur[1345],
	GB = Ur[57] + Ur[36] + Ur[1346],
	HB = Ur[1347] + Ur[1348] + Ur[1349],
	qB = Ur[49] + Ur[119] + Ur[1339] + Ur[26] + Ur[167],
	YB = Ur[182] + Ur[3] + Ur[1350],
	UB = Ur[20] + Ur[1351],
	WB = Ur[1019],
	XB = Ur[1182],
	VB = Ur[619] + Ur[119] + Ur[450],
	KB = Ur[172] + Ur[119] + Ur[1339],
	ZB = Ur[63] + Ur[119] + Ur[450],
	JB = Ur[49] + Ur[119] + Ur[1339],
	QB = Ur[1082] + Ur[119] + Ur[295],
	t$ = Ur[123] + Ur[122],
	i$ = Ur[1082] + Ur[60] + Ur[1352],
	n$ = Ur[839] + Ur[40] + Ur[448],
	e$ = Ur[398] + Ur[113] + Ur[1353] + Ur[644] + Ur[1354],
	s$ = Ur[622] + Ur[66] + Ur[88] + Ur[224] + Ur[548] + Ur[26] + Ur[27],
	r$ = Ur[1068] + Ur[78] + Ur[326] + Ur[78] + Ur[619],
	h$ = Ur[1068] + Ur[78] + Ur[1355],
	a$ = Ur[1068] + Ur[78] + Ur[326] + Ur[78] + Ur[1003],
	o$ = Ur[1068] + Ur[78] + Ur[1356],
	f$ = Ur[1068] + Ur[78] + Ur[1357],
	c$ = Ur[1147] + Ur[78] + Ur[326] + Ur[78] + Ur[619],
	u$ = Ur[1147] + Ur[78] + Ur[1355],
	_$ = Ur[377] + Ur[20] + Ur[768] + Ur[20] + Ur[1296],
	d$ = Ur[1147] + Ur[78] + Ur[326] + Ur[78] + Ur[1003],
	l$ = Ur[447] + Ur[78] + Ur[619],
	v$ = Ur[1358],
	b$ = Ur[1359] + Ur[20] + Ur[1296],
	y$ = Ur[447] + Ur[78] + Ur[1003],
	g$ = Ur[1360],
	m$ = Ur[1140] + Ur[20] + Ur[1296],
	E$ = Ur[212] + Ur[78] + Ur[1003],
	x$ = Ur[1297] + Ur[20] + Ur[1292],
	p$ = Ur[1204] + Ur[78] + Ur[619],
	w$ = Ur[1204] + Ur[78] + Ur[1003],
	T$ = Ur[1107] + Ur[78] + Ur[1072],
	O$ = Ur[347] + Ur[78] + Ur[393],
	I$ = Ur[444] + Ur[78] + Ur[619],
	M$ = Ur[444] + Ur[78] + Ur[1361],
	k$ = Ur[1314] + Ur[20] + Ur[1296],
	S$ = Ur[444] + Ur[78] + Ur[1003],
	A$ = Ur[540] + Ur[20] + Ur[537],
	C$ = Ur[566] + Ur[78] + Ur[553],
	R$ = Ur[20] + Ur[451] + Ur[36] + Ur[688],
	L$ = Ur[20] + Ur[28] + Ur[26] + Ur[167] + Ur[107] + Ur[612],
	P$ = Ur[20] + Ur[28] + Ur[26] + Ur[167] + Ur[3] + Ur[514],
	D$ = Ur[20] + Ur[1362] + Ur[202] + Ur[617],
	j$ = Ur[20] + Ur[1363] + Ur[3] + Ur[1364] + Ur[202] + Ur[617] + Ur[47] + Ur[505],
	N$ = Ur[20] + Ur[1033] + Ur[642] + Ur[3] + Ur[1364] + Ur[202] + Ur[617] + Ur[47] + Ur[505],
	B$ = Ur[454] + Ur[202] + Ur[617] + Ur[224] + Ur[225],
	$$ = Ur[49] + Ur[202] + Ur[617] + Ur[202] + Ur[1365],
	z$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1366],
	F$ = Ur[1367],
	G$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[730],
	H$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1368],
	q$ = Ur[1369],
	Y$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1370],
	U$ = Ur[1371],
	W$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1372] + Ur[20] + Ur[1373] + Ur[20] + Ur[356],
	X$ = Ur[166] + Ur[78] + Ur[1374] + Ur[78] + Ur[347],
	V$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1372] + Ur[20] + Ur[356],
	K$ = Ur[166] + Ur[78] + Ur[347],
	Z$ = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1372] + Ur[20] + Ur[330],
	J$ = Ur[166] + Ur[78] + Ur[1117],
	Q$ = Ur[166] + Ur[78] + Ur[222],
	tz = Ur[329] + Ur[202] + Ur[615],
	iz = Ur[455] + Ur[20] + Ur[238] + Ur[20] + Ur[1372] + Ur[20] + Ur[188],
	nz = Ur[22] + Ur[1215] + Ur[202] + Ur[617],
	ez = Ur[36] + Ur[692] + Ur[202] + Ur[617],
	sz = Ur[26] + Ur[1375] + Ur[202] + Ur[617],
	rz = Ur[119] + Ur[1339] + Ur[202] + Ur[617],
	hz = Ur[22] + Ur[132] + Ur[202] + Ur[617],
	az = Ur[47] + Ur[1376],
	oz = Ur[49] + Ur[608] + Ur[197],
	fz = Ur[1377],
	cz = Ur[1378],
	uz = Ur[1379],
	_z = Ur[1380],
	dz = Ur[475],
	lz = Ur[1126] + Ur[40] + Ur[1381],
	vz = Ur[1182] + Ur[47] + Ur[1382],
	bz = Ur[1383] + Ur[20] + Ur[363],
	yz = Ur[1383] + Ur[20] + Ur[493],
	gz = Ur[1383] + Ur[20] + Ur[368],
	mz = Ur[1383] + Ur[20] + Ur[492],
	Ez = Ur[1383] + Ur[20] + Ur[368] + Ur[20] + Ur[363],
	xz = Ur[1383] + Ur[20] + Ur[368] + Ur[20] + Ur[364],
	pz = Ur[1383] + Ur[20] + Ur[366] + Ur[20] + Ur[363],
	wz = Ur[1384],
	Tz = Ur[1385] + Ur[78] + Ur[1386],
	Oz = Ur[1384] + Ur[78] + Ur[638],
	Iz = Ur[1384] + Ur[78] + Ur[1387],
	Mz = Ur[1124] + Ur[20] + Ur[352] + Ur[20] + Ur[1388] + Ur[20] + Ur[360],
	kz = Ur[1124] + Ur[20] + Ur[352] + Ur[20] + Ur[1389] + Ur[20] + Ur[1390],
	Sz = Ur[30] + Ur[36] + Ur[173],
	Az = Ur[49] + Ur[45] + Ur[225] + Ur[36] + Ur[173],
	Cz = Ur[20] + Ur[203] + Ur[251] + Ur[488],
	Rz = Ur[49] + Ur[1391] + Ur[775],
	Lz = Ur[49] + Ur[47] + Ur[346] + Ur[119] + Ur[295],
	Pz = Ur[313] + Ur[3] + Ur[4] + Ur[60] + Ur[1392],
	Dz = Ur[638] + Ur[263] + Ur[775],
	jz = Ur[249] + Ur[119] + Ur[295],
	Nz = Ur[1393],
	Bz = Ur[1394],
	$z = Ur[1387] + Ur[263] + Ur[775],
	zz = Ur[20] + Ur[1395],
	Fz = Ur[1094] + Ur[47] + Ur[346],
	Gz = Ur[313] + Ur[66] + Ur[197],
	Hz = Ur[20] + Ur[1396],
	qz = Ur[20] + Ur[203] + Ur[251] + Ur[250] + Ur[47] + Ur[233],
	Yz = Ur[20] + Ur[14] + Ur[722],
	Uz = Ur[256] + Ur[1397],
	Wz = Ur[256] + Ur[1398],
	Xz = Ur[475] + Ur[121],
	Vz = Ur[475] + Ur[122],
	Kz = Ur[20] + Ur[1399],
	Zz = Ur[20] + Ur[1400],
	Jz = Ur[20] + Ur[1401],
	Qz = Ur[249] + Ur[60] + Ur[474],
	tF = Ur[1402],
	iF = Ur[63],
	nF = Ur[1286] + Ur[47] + Ur[346] + Ur[60] + Ur[474],
	eF = Ur[49] + Ur[224] + Ur[1403] + Ur[202] + Ur[1404],
	sF = Ur[475] + Ur[3] + Ur[322],
	rF = Ur[347] + Ur[3] + Ur[322],
	hF = Ur[1405],
	aF = Ur[1406],
	oF = Ur[20] + Ur[1033] + Ur[82] + Ur[489],
	fF = Ur[258] + Ur[47] + Ur[346] + Ur[60] + Ur[474],
	cF = Ur[66] + Ur[1407] + Ur[47] + Ur[1376],
	uF = Ur[1408],
	_F = Ur[1409],
	dF = Ur[227],
	lF = Ur[1410],
	vF = Ur[373] + Ur[20] + Ur[238] + Ur[20] + Ur[1411],
	bF = Ur[373] + Ur[20] + Ur[238] + Ur[20] + Ur[1412],
	yF = Ur[57] + Ur[47] + Ur[1413],
	gF = Ur[49] + Ur[263] + Ur[775],
	mF = Ur[1414],
	EF = Ur[494] + Ur[224] + Ur[225],
	xF = Ur[475] + Ur[82],
	pF = Ur[356] + Ur[20] + Ur[1139] + Ur[20] + Ur[1106],
	wF = Ur[475] + Ur[211],
	TF = Ur[20] + Ur[523] + Ur[66] + Ur[1415] + Ur[42] + Ur[266],
	OF = Ur[1196] + Ur[66] + Ur[1416],
	IF = Ur[20] + Ur[203] + Ur[251] + Ur[1387],
	MF = Ur[20] + Ur[1038] + Ur[202] + Ur[203] + Ur[66] + Ur[316],
	kF = Ur[1417] + Ur[202] + Ur[1418],
	SF = Ur[1419],
	AF = Ur[1420],
	CF = Ur[1421],
	RF = Ur[1421] + Ur[122],
	LF = Ur[57] + Ur[202] + Ur[1422],
	PF = Ur[1286],
	DF = Ur[1421] + Ur[121],
	jF = Ur[1108] + Ur[20] + Ur[482],
	NF = Ur[1423],
	BF = Ur[249] + Ur[224] + Ur[1424],
	$F = Ur[249] + Ur[26] + Ur[1425],
	zF = Ur[1426],
	FF = Ur[20] + Ur[1427] + Ur[42] + Ur[1428],
	GF = Ur[1163],
	HF = Ur[1429],
	qF = Ur[1430],
	YF = Ur[458] + Ur[26] + Ur[459],
	UF = Ur[454] + Ur[26] + Ur[459],
	WF = Ur[127] + Ur[36] + Ur[686],
	XF = Ur[36] + Ur[1431] + Ur[47] + Ur[1376],
	VF = Ur[1230] + Ur[13] + Ur[463] + Ur[36] + Ur[1432],
	KF = Ur[497] + Ur[47] + Ur[1382],
	ZF = Ur[20] + Ur[203] + Ur[251] + Ur[1381],
	JF = Ur[20] + Ur[348] + Ur[343] + Ur[119] + Ur[295],
	QF = Ur[20] + Ur[1433],
	tG = Ur[323] + Ur[52] + Ur[143],
	iG = Ur[299] + Ur[26] + Ur[300] + Ur[66] + Ur[88] + Ur[119] + Ur[1434] + Ur[60] + Ur[1074] + Ur[42] + Ur[1075] + Ur[36] + Ur[1435],
	nG = Ur[299] + Ur[26] + Ur[300] + Ur[66] + Ur[88] + Ur[119] + Ur[1434] + Ur[66] + Ur[1436] + Ur[42] + Ur[1075] + Ur[36] + Ur[1435],
	eG = Ur[20] + Ur[89],
	sG = Ur[98] + Ur[3] + Ur[427],
	rG = Ur[1437],
	hG = Ur[57] + Ur[1438],
	aG = Ur[57] + Ur[263] + Ur[1439],
	oG = Ur[57] + Ur[42] + Ur[1440],
	fG = Ur[57] + Ur[36] + Ur[1441],
	cG = Ur[60] + Ur[61] + Ur[36] + Ur[1101],
	uG = Ur[60] + Ur[1442],
	_G = Ur[263] + Ur[1443],
	dG = Ur[66] + Ur[101] + Ur[609],
	lG = Ur[26] + Ur[167] + Ur[609],
	vG = Ur[45] + Ur[225] + Ur[609],
	bG = Ur[47] + Ur[1162] + Ur[609],
	yG = Ur[36] + Ur[1444],
	gG = Ur[22] + Ur[247],
	mG = Ur[263] + Ur[403] + Ur[224] + Ur[522],
	EG = Ur[26] + Ur[315] + Ur[66] + Ur[316],
	xG = Ur[119] + Ur[1445] + Ur[47] + Ur[1376],
	pG = Ur[402] + Ur[1446] + Ur[52] + Ur[299] + Ur[52] + Ur[1016] + Ur[277],
	wG = Ur[82] + Ur[78] + Ur[251],
	TG = Ur[1447],
	OG = Ur[82] + Ur[78] + Ur[721] + Ur[78] + Ur[82],
	IG = Ur[402] + Ur[1446] + Ur[232] + Ur[60] + Ur[1448] + Ur[52] + Ur[3] + Ur[1449] + Ur[52] + Ur[299] + Ur[52] + Ur[1016] + Ur[277] + Ur[434] + Ur[3] + Ur[431],
	MG = Ur[685] + Ur[1256],
	kG = Ur[1450] + Ur[60] + Ur[879],
	SG = Ur[722] + Ur[434] + Ur[344] + Ur[434] + Ur[1451],
	AG = 0;
	if (t[Id]) {
		var CG = navigator[Md],
		RG = /opera/i.test(CG),
		LG = !RG && /msie/i[Xo](CG),
		PG = /rv:11.0/i[Xo](CG),
		DG = /MSIE 10./i.test(CG);
		if (PG && (LG = !0), /msie\s[6,7,8]/i[Xo](CG))
			throw new Error("your browser is not supported");
		var jG = /webkit|khtml/i[Xo](CG),
		NG = !jG && /gecko/i[Xo](CG),
		BG = /firefox\//i[Xo](CG),
		$G = /Chrome\//i[Xo](CG),
		zG = !$G && /Safari\//i.test(CG),
		FG = /Macintosh;/i[Xo](CG),
		GG = /(iPad|iPhone|iPod)/g[Xo](CG),
		HG = /Android/g[Xo](CG),
		qG = /Windows Phone/g[Xo](CG),
		YG = (GG || HG || qG) && v_ in t,
		UG = CG.match(/AppleWebKit\/([0-9\.]*)/);
		if (UG && UG[Wr] > 1) {
			parseFloat(UG[1])
		}
		HG && parseFloat(CG.match(/Android\s([0-9\.]*)/)[1])
	}
	t[Eh] || (t[Eh] = t.webkitRequestAnimationFrame || t[kd] || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
		return t[Sd](function () {
			i()
		}, 1e3 / 60)
	}),
	t[Ad] || (t[Ad] = t[Cd] || t[Rd] || t[Ld] || t[Pd] || function (i) {
		return t.clearTimeout(i)
	});
	var WG = {
		SELECTION_TOLERANCE: YG ? 5 : 2,
		LABEL_COLOR: Dd
	};
	Z(WG, {
		FONT_STYLE: {
			get: function () {
				return this[jd] || (this[jd] = Nd)
			},
			set: function (t) {
				this[jd] != t && (this[jd] = t, this._fontChanged = !0)
			}
		},
		FONT_SIZE: {
			get: function () {
				return this[Bd] || (this._fontSize = 12)
			},
			set: function (t) {
				this[Bd] != t && (this[Bd] = t, this[$d] = !0)
			}
		},
		FONT_FAMILY: {
			get: function () {
				return this[zd] || (this[zd] = "Verdana,helvetica,arial,sans-serif")
			},
			set: function (t) {
				this._fontFamily != t && (this[zd] = t, this[$d] = !0)
			}
		},
		FONT: {
			get: function () {
				return (this[$d] || this[$d] === n) && (this._fontChanged = !1, this[Fd] = this[ho] + Ih + this.FONT_SIZE + oo + this[fo]),
				this[Fd]
			}
		}
	});
	var XG = function (t) {
		this._jc = [],
		this._m5 = {},
		t && this.add(t)
	};
	XG[hh] = {
		_jc: null,
		_m5: null,
		get: function (t) {
			return this[Gd](t)
		},
		getById: function (t) {
			return this._m5[t]
		},
		getByIndex: function (t) {
			return this._jc[t]
		},
		forEach: function (t, i, n) {
			return l(this._jc, t, i, n)
		},
		forEachReverse: function (t, i, n) {
			return b(this._jc, t, i, n)
		},
		size: function () {
			return this._jc[Wr]
		},
		contains: function (t) {
			return this[Hd](t.id)
		},
		containsById: function (t) {
			return this._m5.hasOwnProperty(t)
		},
		setIndex: function (t, i) {
			var n = this._jc[eh](t);
			if (0 > n)
				throw new Error(Pa + t.id + qd);
			return n == i ? !1 : (this._jc[Jr](n, 1), this._jc[Jr](i, 0, t), !0)
		},
		setIndexAfter: function (t, i) {
			var n = this._jc[eh](t);
			if (0 > n)
				throw new Error(Pa + t.id + qd);
			return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jc.splice(n, 1), this._jc[Jr](i, 0, t), i)
		},
		setIndexBefore: function (t, i) {
			var n = this._jc[eh](t);
			if (0 > n)
				throw new Error(Pa + t.id + qd);
			return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jc[Jr](n, 1), this._jc[Jr](i, 0, t), i)
		},
		indexOf: function (t) {
			return this._jc[eh](t)
		},
		getIndexById: function (t) {
			var i = this[Yd](t);
			return i ? this._jc.indexOf(i) : -1
		},
		add: function (t, i) {
			return $(t) ? this._gg(t, i) : this._kp(t, i)
		},
		addFirst: function (t) {
			return this.add(t, 0)
		},
		_gg: function (t, i) {
			if (0 == t.length)
				return !1;
			var e = !1,
			s = i >= 0;
			t = t._jc || t;
			for (var r = 0, h = t[Wr]; h > r; r++) {
				var a = t[r];
				null !== a && a !== n && this._kp(a, i, !0) && (e = !0, s && i++)
			}
			return e
		},
		_kp: function (t, i) {
			var e = t.id;
			return e === n || this[Hd](e) ? !1 : (g(this._jc, t, i), this._m5[e] = t, t)
		},
		remove: function (t) {
			return $(t) ? this[Ud](t) : t.id ? this._gm(t.id, t) : this[Wd](t)
		},
		_mz2: function (t) {
			if (0 == t.length)
				return !1;
			var i = !1;
			t = t._jc || t;
			for (var e = 0, s = t[Wr]; s > e; e++) {
				var r = t[e];
				if (null !== r && r !== n) {
					r.id === n && (r = this._m5[r]);
					var h = r.id;
					this._gm(h, r, !0) && (i = !0)
				}
			}
			return i
		},
		_gm: function (t, i) {
			return t !== n && this[Hd](t) ? ((null === i || i === n) && (i = this[Yd](t)), delete this._m5[t], m(this._jc, i), !0) : !1
		},
		removeById: function (t) {
			var i = this._m5[t];
			return i ? this._gm(t, i) : !1
		},
		set: function (t) {
			if (!t || 0 == t)
				return void this[Xa]();
			if (this.isEmpty() || !$(t))
				return this.clear(), this.add(t);
			var i = [],
			n = {},
			e = 0;
			if (l(t, function (t) {
					this._m5[t.id] ? (n[t.id] = t, e++) : i[nh](t)
				}, this), e != this[Wr]) {
				var s = [];
				this[lc](function (t) {
					n[t.id] || s[nh](t)
				}, this),
				s.length && this[Ud](s)
			}
			return i[Wr] && this._gg(i),
			!0
		},
		clear: function () {
			return this[Uf]() ? !1 : (this._jc[Wr] = 0, this._m5 = {}, !0)
		},
		toDatas: function () {
			return this._jc[Zr](0)
		},
		isEmpty: function () {
			return 0 == this._jc[Wr]
		},
		valueOf: function () {
			return this._jc[Wr]
		},
		clone: function (t) {
			var i = new XG;
			return i.add(t ? y(this._jc) : this[Xd]()),
			i
		}
	},
	Z(XG.prototype, {
		datas: {
			get: function () {
				return this._jc
			}
		},
		random: {
			get: function () {
				return this._jc && this._jc[Wr] ? this._jc[H(this._jc[Wr])] : null
			}
		},
		length: {
			get: function () {
				return this._jc ? this._jc.length : 0
			}
		}
	});
	var VG = (2 * Math.PI, .5 * Math.PI),
	KG = function (t, i) {
		i = i[aa]();
		for (var n = LG ? t[Vd] : t[Kd]; n && (1 != n[Zd] || n.tagName && n[Jd].toUpperCase() != i); )
			n = LG ? n[Qd] : n[tl];
		return n && 1 == n[Zd] && n[Jd] && n.tagName.toUpperCase() == i ? n : null
	},
	ZG = function (t, i, n) {
		t instanceof ZG && (i = t.y, t = t.x, n = t.rotate),
		this.set(t, i, n)
	},
	JG = function (t, i, n, e) {
		var s = t - n,
		r = i - e;
		return Math[xo](s * s + r * r)
	};
	ZG[hh] = {
		x: 0,
		y: 0,
		rotate: n,
		set: function (t, i, n) {
			this.x = t || 0,
			this.y = i || 0,
			this.rotate = n || 0
		},
		negate: function () {
			this.x = -this.x,
			this.y = -this.y
		},
		offset: function (t, i) {
			this.x += t,
			this.y += i
		},
		equals: function (t) {
			return this.x == t.x && this.y == t.y
		},
		distanceTo: function (t) {
			return JG(this.x, this.y, t.x, t.y)
		},
		toString: function () {
			return il + this.x + nl + this.y + zh
		},
		clone: function () {
			return new ZG(this.x, this.y)
		}
	},
	Object.defineProperty(ZG[hh], el, {
		get: function () {
			return Math[xo](this.x * this.x + this.y * this.y)
		}
	});
	var QG = function (t, i, e, s) {
		t !== n && this._mp(t, i, e, s)
	};
	QG[hh] = {
		_mt: null,
		_mw: null,
		_mv: null,
		_mu: null,
		_n0: null,
		_mz: null,
		_my: 1,
		_mp: function (t, i, n, e) {
			this._mt = t,
			this._mw = i,
			this._mv = n,
			this._mu = e,
			t == n ? (this._n0 = -1, this._my = 0, this._mz = t) : (this._n0 = (i - e) / (t - n), this._mz = i - this._n0 * t, this._my = 1),
			this._kw = Math[Vh](this._mu - this._mw, this._mv - this._mt),
			this[Kh] = Math.cos(this._kw),
			this[Zh] = Math.sin(this._kw)
		},
		_my2: function (t) {
			return 0 == this._my ? Number.NaN : this._n0 * t + this._mz
		},
		_my1: function (t) {
			return 0 == this._n0 ? Number.NaN : (t - this._mz) / this._n0
		},
		_$c: function (t) {
			var i,
			n,
			e,
			s,
			r,
			h = t[0],
			a = t[2],
			o = t[4],
			f = t[1],
			c = t[3],
			u = t[5],
			_ = this._n0,
			d = this._mz,
			l = this._my;
			if (0 == l ? (e = Math[xo]((-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -_ * a + _ * h, r = _ * o - 2 * _ * a + _ * h) : (e = Math.sqrt((-f + _ * h + d) * u + c * c + (-2 * _ * a - 2 * d) * c + (_ * o + d) * f + (-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -c + f + _ * a - _ * h, r = u - 2 * c + f - _ * o + 2 * _ * a - _ * h), 0 != r) {
				i = (e + s) / r,
				n = (-e + s) / r;
				var v,
				b;
				return i >= 0 && 1 >= i && (v = Hi(i, t)),
				n >= 0 && 1 >= n && (b = Hi(n, t)),
				v && b ? [v, b] : v ? v : b ? b : void 0
			}
		},
		_32: function (t, i, n) {
			if (this._n0 == t._n0 || 0 == this._my && 0 == t._my)
				return null;
			var e,
			s;
			if (e = 0 == this._my ? this._mz : 0 == t._my ? t._mz : (t._mz - this._mz) / (this._n0 - t._n0), s = 0 == this._n0 ? this._mz : 0 == t._n0 ? t._mz : this._my ? this._n0 * e + this._mz : t._n0 * e + t._mz, !i)
				return {
					x: e,
					y: s
				};
			var r,
			h,
			a;
			if (n)
				r = -i / 2, h = -r;
			else {
				r = -JG(this._mt, this._mw, e, s),
				h = JG(this._mv, this._mu, e, s);
				var o = -r + h;
				if (o > i) {
					var f = i / o;
					r *= f,
					h *= f
				} else
					a = (i - o) / 2
			}
			var c = this._69(e, s, r),
			u = this._69(e, s, h);
			return a && (c[gf] = a, u._rest = a),
			[c, u]
		},
		_69: function (t, i, n) {
			return 0 == this._my ? {
				x: t,
				y: i + n
			}
			 : {
				x: t + n * this[Kh],
				y: i + n * this._sin
			}
		}
	};
	var tH = function (t, i) {
		this[ro] = t,
		this[Wa] = i
	};
	tH.prototype = {
		width: 0,
		height: 0,
		isEmpty: function () {
			return this.width <= 0 || this.height <= 0
		},
		clone: function () {
			return new tH(this[ro], this.height)
		},
		toString: function () {
			return sl + this[ro] + nl + this.height + zh
		}
	};
	var iH = function (t, i, e, s) {
		t instanceof Object && !j(t) && (i = t.y, e = t[ro], s = t[Wa], t = t.x),
		e === n && (e = -1),
		s === n && (s = -1),
		this.x = t || 0,
		this.y = i || 0,
		this.width = e,
		this.height = s
	};
	iH[hh] = {
		x: 0,
		y: 0,
		width: -1,
		height: -1,
		setByRect: function (t) {
			this.x = t.x || 0,
			this.y = t.y || 0,
			this.width = t[ro] || 0,
			this[Wa] = t[Wa] || 0
		},
		set: function (t, i, n, e) {
			this.x = t || 0,
			this.y = i || 0,
			this[ro] = n || 0,
			this[Wa] = e || 0
		},
		offset: function (t, i) {
			return this.x += t,
			this.y += i,
			this
		},
		contains: function (t, i, n, e) {
			if (1 == arguments.length) {
				if (sh == typeof t && fi(t))
					return this.contains(t.x, t.y, t[ro], t.height);
				throw {
					message: rl
				}
			}
			return 2 == arguments[Wr] ? t >= this.x && t <= this.x + this[ro] && i >= this.y && i <= this.y + this.height : ai(this.x, this.y, this.width, this[Wa], t, i, n || 0, e || 0)
		},
		intersectsPoint: function (t, i, n) {
			return this[ro] <= 0 && this[Wa] <= 0 ? !1 : n ? this.intersectsRect(t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[Wa]
		},
		intersectsRect: function (t, i, n, e) {
			return ri(this.x, this.y, this.width, this.height, t, i, n, e)
		},
		intersects: function (t, i) {
			return j(t[ro]) ? this.intersectsRect(t.x, t.y, t.width, t.height) : this[ko](t, i)
		},
		intersection: function (t, i, n, e) {
			var s = this.x,
			r = this.y,
			h = s;
			h += this[ro];
			var a = r;
			a += this.height;
			var o = t;
			o += n;
			var f = i;
			return f += e,
			t > s && (s = t),
			i > r && (r = i),
			h > o && (h = o),
			a > f && (a = f),
			h -= s,
			a -= r,
			0 > h || 0 > a ? null : new iH(s, r, h, a)
		},
		addPoint: function (t) {
			this.add(t.x, t.y)
		},
		add: function (t, i) {
			if (j(t.width))
				return this[hl](t.x, t.y, t[ro], t[Wa]);
			if (j(t.x) && (i = t.y, t = t.x), this[ro] < 0 || this[Wa] < 0)
				return this.x = t, this.y = i, void(this[ro] = this.height = 0);
			var n = this.x,
			e = this.y,
			s = this[ro],
			r = this[Wa];
			s += n,
			r += e,
			n > t && (n = t),
			e > i && (e = i),
			t > s && (s = t),
			i > r && (r = i),
			s -= n,
			r -= e,
			s > Number[al] && (s = Number[al]),
			r > Number[al] && (r = Number[al]),
			this.set(n, e, s, r)
		},
		addRect: function (t, i, n, e) {
			var s = this[ro],
			r = this[Wa];
			(0 > s || 0 > r) && this.set(t, i, n, e);
			var h = n,
			a = e;
			if (!(0 > h || 0 > a)) {
				var o = this.x,
				f = this.y;
				s += o,
				r += f;
				var c = t,
				u = i;
				h += c,
				a += u,
				o > c && (o = c),
				f > u && (f = u),
				h > s && (s = h),
				a > r && (r = a),
				s -= o,
				r -= f,
				s > Number[al] && (s = Number[al]),
				r > Number[al] && (r = Number[al]),
				this.set(o, f, s, r)
			}
		},
		shrink: function (t, i, n, e) {
			return j(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[Wr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[tf] || 0, n = t[Qh] || 0, e = t[Jh] || 0, t = t.top || 0),
			this.x += i,
			this.y += t,
			this[ro] -= i + e,
			this[Wa] -= t + n,
			this
		},
		grow: function (t, i, n, e) {
			return j(t) ? 1 == arguments[Wr] ? e = i = n = t || 0 : 2 == arguments[Wr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[tf] || 0, n = t[Qh] || 0, e = t[Jh] || 0, t = t.top || 0),
			this.x -= i,
			this.y -= t,
			this[ro] += i + e,
			this[Wa] += t + n,
			this
		},
		scale: function (t) {
			return this.x *= t,
			this.y *= t,
			this.width *= t,
			this[Wa] *= t,
			this
		},
		isEmpty: function () {
			return this[ro] <= 0 && this[Wa] <= 0
		},
		toString: function () {
			return this.x + ol + this.y + ol + this[ro] + ol + this[Wa]
		},
		union: function (t) {
			var i = this.width,
			n = this[Wa];
			if (0 > i || 0 > n)
				return new iH(t.x, t.y, t[ro], t[Wa]);
			var e = t.width,
			s = t[Wa];
			if (0 > e || 0 > s)
				return new iH(this.x, this.y, this[ro], this.height);
			var r = this.x,
			h = this.y;
			i += r,
			n += h;
			var a = t.x,
			o = t.y;
			return e += a,
			s += o,
			r > a && (r = a),
			h > o && (h = o),
			e > i && (i = e),
			s > n && (n = s),
			i -= r,
			n -= h,
			i > Number[al] && (i = Number[al]),
			n > Number[al] && (n = Number.MAX_VALUE),
			new iH(r, h, i, n)
		},
		clear: function () {
			this.set(0, 0, -1, -1)
		},
		equals: function (t) {
			return t && this.x == t.x && this.y == t.y && this.width == t.width && this[Wa] == t[Wa]
		},
		clone: function (t, i) {
			return new iH(this.x + (t || 0), this.y + (i || 0), this[ro], this[Wa])
		},
		toArray: function () {
			return [this.x, this.y, this[ro], this[Wa]]
		},
		getIntersectionPoint: function (t, i, n, e) {
			return si(this, t, i, n, e)
		}
	},
	p(iH, tH),
	iH[fl] = function (t, i) {
		return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i[ro] && t[Wa] == i[Wa]
	},
	Z(iH[hh], {
		left: {
			get: function () {
				return this.x
			}
		},
		top: {
			get: function () {
				return this.y
			}
		},
		bottom: {
			get: function () {
				return this.y + this[Wa]
			}
		},
		right: {
			get: function () {
				return this.x + this[ro]
			}
		},
		cx: {
			get: function () {
				return this.x + this.width / 2
			}
		},
		cy: {
			get: function () {
				return this.y + this[Wa] / 2
			}
		},
		center: {
			get: function () {
				return new ZG(this.cx, this.cy)
			}
		}
	}),
	iH.intersects = ri,
	iH[vf] = oi,
	iH.intersectsPoint = hi;
	var nH = function (t, i, n, e) {
		1 == arguments.length ? i = n = e = t : 2 == arguments.length && (n = t, e = i),
		this.set(t, i, n, e)
	};
	nH.prototype = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		set: function (t, i, n, e) {
			this.top = t || 0,
			this[tf] = i || 0,
			this.bottom = n || 0,
			this.right = e || 0
		},
		clone: function () {
			return new nH(this.top, this.left, this.bottom, this[Jh])
		},
		equals: function (t) {
			return t && this.top == t.top && this[Qh] == t[Qh] && this[tf] == t[tf] && this[Jh] == t[Jh]
		}
	};
	var eH = function (t, i) {
		this[ea] = t,
		this[cl] = i
	};
	eH.prototype = {
		verticalPosition: !1,
		horizontalPosition: !1,
		toString: function () {
			return (this[ea] || "") + (this[cl] || "")
		}
	},
	K(eH.prototype, ul, {
		get: function () {
			return (this[ea] || "") + (this.verticalPosition || "")
		}
	});
	var sH = _l,
	rH = dl,
	hH = ll,
	aH = wc,
	oH = vl,
	fH = bl;
	eH[yl] = new eH(sH, aH),
	eH[gl] = new eH(sH, oH),
	eH.LEFT_BOTTOM = new eH(sH, fH),
	eH.CENTER_TOP = new eH(rH, aH),
	eH[ml] = new eH(rH, oH),
	eH[El] = new eH(rH, fH),
	eH.RIGHT_TOP = new eH(hH, aH),
	eH.RIGHT_MIDDLE = new eH(hH, oH),
	eH[xl] = new eH(hH, fH);
	var cH = [eH[yl], eH[gl], eH[pl], eH.CENTER_TOP, eH.CENTER_MIDDLE, eH[El], eH[wl], eH[Tl], eH[xl]];
	K(eH, jh, {
		get: function () {
			return cH[H(cH[Wr])]
		}
	}),
	eH[na] = function (t) {
		for (var i in eH) {
			var n = eH[i];
			if (n && jh != i && n instanceof eH && n.toString() == t)
				return n
		}
	};
	var uH = function (t, i, n, e, s) {
		this.set(t, i, n, e),
		this[Ol] = s
	};
	uH[hh] = {
		radius: 0,
		classify: function (t, i, n, e) {
			return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
		},
		intersectsRect: function (t, i, n, e) {
			if (T(this, uH, Il, arguments) === !1)
				return !1;
			var s = this.x,
			r = this.y,
			h = s + this[ro],
			a = r + this[Wa],
			o = 2 * radius,
			f = 2 * radius,
			c = Math.min(this.width, Math.abs(o)) / 2,
			u = Math.min(this[Wa], Math.abs(f)) / 2,
			_ = this[Ml](t, s, h, c),
			d = this.classify(t + n, s, h, c),
			l = this[Ml](i, r, a, u),
			v = this[Ml](i + e, r, a, u);
			return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + c) : t -= h - c, i = 1 == v ? i = i + e - (r + u) : i -= a - u, t /= c, i /= u, 1 >= t * t + i * i)
		},
		intersectsPoint: function (t, i) {
			if (T(this, uH, ko, arguments) === !1)
				return !1;
			var n = this.x,
			e = this.y,
			s = n + this[ro],
			r = e + this[Wa];
			if (n > t || e > i || t >= s || i >= r)
				return !1;
			var h = 2 * radius,
			a = 2 * radius,
			o = Math.min(this[ro], Math.abs(h)) / 2,
			f = Math.min(this[Wa], Math.abs(a)) / 2;
			return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
		},
		clone: function () {
			return new uH(this.x, this.y, this[ro], this[Wa], this.radius)
		}
	},
	p(uH, iH);
	var _H = function (t, i, n, e) {
		this[ef] = t,
		this.type = i,
		this[bd] = n,
		this[bh] = e
	};
	_H.prototype = {
		source: null,
		type: null,
		kind: null,
		value: null,
		toString: function () {
			return kl + this[ef] + Sl + this[Do] + Al + this.kind
		}
	};
	var dH = function (t, i, n, e, s) {
		this.source = t,
		this.kind = i,
		this[Cl] = e,
		this[bh] = n,
		this.propertyType = s
	};
	dH[hh] = {
		type: Rl,
		propertyType: null,
		toString: function () {
			return kl + this[ef] + Sl + this[Do] + Ll + this[bd] + Pl + this[Cl] + Dl + this[bh]
		}
	},
	p(dH, _H),
	K(dH.prototype, jl, {
		get: function () {
			return this.kind
		},
		set: function (t) {
			this[bd] = t
		}
	});
	var lH = function (t, i, n) {
		this[ef] = t,
		this[Cl] = t[Cc],
		this[bh] = i,
		this[Nl] = n,
		this[Cl] && (this.oldIndex = this[Cl][Bl](t))
	};
	lH.prototype = {
		kind: Cc
	},
	p(lH, dH);
	var vH = function (t, i) {
		this[ef] = t,
		this[bh] = i
	};
	vH[hh].kind = $l,
	p(vH, dH);
	var bH = function (t, i) {
		this[ef] = t,
		this[bh] = i
	};
	bH[hh][bd] = zl,
	p(bH, dH);
	var yH = function (t, i, n, e) {
		this[ef] = i,
		this[Cl] = n,
		this[bh] = e,
		this[Cc] = t,
		this.child = i,
		this.oldIndex = n,
		this[Nl] = e
	};
	yH[hh][bd] = Fl,
	p(yH, dH);
	var gH = function () {};
	gH.prototype = {
		listener: null,
		beforeEvent: function (t) {
			return null != this[Gl] && this[Gl][_h] ? this[Gl][_h](t) : !0
		},
		onEvent: function (t) {
			null != this[Gl] && this.listener.onEvent && this.listener.onEvent(t)
		}
	};
	var mH = function () {
		w(this, mH, arguments),
		this[Hl] = {},
		this[ql] = []
	},
	EH = function (t, i) {
		this[Gl] = t,
		this[Yl] = i,
		t instanceof Function ? this.onEvent = t : (this[dh] = t[dh], this.beforeEvent = t[_h]),
		this[fl] = function (t) {
			return t && this[Gl] == t.listener && this[Yl] == t[Yl]
		}
	};
	EH.prototype = {
		equals: function (t) {
			return t && this[Gl] == t.listener && this[Yl] == t[Yl]
		},
		destroy: function () {
			delete this[Yl],
			delete this[Gl]
		}
	},
	mH.prototype = {
		listeners: null,
		_mzh: function () {
			return this[ql] && this[ql][Wr] > 0
		},
		_68: function (t, i) {
			return t instanceof mH ? t : new EH(t, i)
		},
		_8v: function (t, i) {
			if (t instanceof mH)
				return this[ql][eh](t);
			for (var n = this.listeners, e = 0, s = n[Wr]; s > e; e++) {
				var r = n[e];
				if (r[Gl] == t && r[Yl] == i)
					return e
			}
			return -1
		},
		contains: function (t, i) {
			return this._8v(t, i) >= 0
		},
		addListener: function (t, i) {
			return this[s_](t, i) ? !1 : void this.listeners[nh](this._68(t, i))
		},
		removeListener: function (t, i) {
			var n = this._8v(t, i);
			n >= 0 && this[ql][Jr](n, 1)
		},
		on: function (t, i) {
			this[Ul](t, i)
		},
		un: function (t, i, n) {
			this.removeListener(t, i, n)
		},
		onEvent: function (t) {
			return this[ql] ? void l(this[ql], function (i) {
				i.onEvent && (i[Yl] ? i.onEvent[Xr](i[Yl], t) : i[dh](t))
			}, this) : !1
		},
		beforeEvent: function (t) {
			return this[ql] ? l(this.listeners, function (i) {
				return i.beforeEvent ? i[Yl] ? i[_h][Xr](i[Yl], t) : i[_h](t) : !0
			}, this) : !0
		},
		_e3: function (t) {
			return this[_h](t) === !1 ? !1 : (this[dh](t), !0)
		},
		clear: function () {
			this[ql] = []
		},
		destroy: function () {
			this.clear()
		}
	},
	p(mH, gH);
	var xH = {
		onEvent: function () {},
		beforeEvent: function () {}
	},
	pH = function (t, i, n, e, s) {
		this[ef] = t,
		this[Do] = Wl,
		this[bd] = i,
		this[Lo] = n,
		this.index = e,
		this.oldIndex = s
	};
	pH.prototype = {
		index: -1,
		oldIndex: -1,
		toString: function () {
			return kl + this[ef] + Sl + this[Do] + Al + this[bd] + Xl + this.data + Vl + this[Kl] + Zl + this[Jl]
		}
	},
	p(pH, _H),
	pH[Ql] = tv,
	pH[iv] = Mh,
	pH[nv] = Xa,
	pH.KIND_INDEX_CHANGE = ev;
	var wH = function () {
		this.id = ++AG,
		this[sv] = {}
	};
	wH[hh] = {
		_myd: null,
		id: null,
		get: function (t) {
			return this[sv][t]
		},
		set: function (t, i) {
			var n = this.get(t);
			if (n === i)
				return !1;
			var e = new dH(this, t, i, n);
			return e[rv] = oq.PROPERTY_TYPE_CLIENT,
			this[hv](t, i, e, this[sv])
		},
		_mzb: function (t, i, e, s) {
			return this.beforeEvent(e) === !1 ? !1 : (s || (s = this[sv]), i === n ? delete s[t] : s[t] = i, this.onEvent(e), !0)
		},
		remove: function (t) {
			this.set(t, null)
		},
		valueOf: function () {
			return this.id
		},
		toString: function () {
			return this.id
		},
		_eh: function (t, i) {
			if (i === n && (i = -1), this == t || t == this._jk)
				return !1;
			if (t && this == t._jk && !t._eh(null))
				return !1;
			var e = new lH(this, t, i);
			if (!this[_h](e))
				return !1;
			var s,
			r,
			h = this._jk;
			return t && (s = new vH(t, this), !t[_h](s)) ? !1 : null == h || (r = new bH(h, this), h[_h](r)) ? (this._jk = t, null != t && ui(t, this, i), null != h && _i(h, this), this[dh](e), null != t && t[dh](s), null != h && h.onEvent(r), this.onParentChanged(h, t), !0) : !1
		},
		addChild: function (t, i) {
			var n = t._eh(this, i);
			return n && this[sa](t, i),
			n
		},
		removeChild: function (t) {
			if (!this._fm || !this._fm.contains(t))
				return !1;
			var i = t._eh(null);
			return this[av](t),
			i
		},
		toChildren: function () {
			return this._fm ? this._fm.toDatas() : null
		},
		clearChildren: function () {
			if (this._fm && this._fm.length) {
				var t = this.toChildren();
				l(t, function (t) {
					t._eh(null)
				}, this),
				this[ov](t)
			}
		},
		forEachChild: function (t, i) {
			return this.hasChildren() ? this._fm[lc](t, i) : !1
		},
		onChildAdd: function () {},
		onChildRemove: function () {},
		onChildrenClear: function () {},
		onParentChanged: function () {},
		getChildIndex: function (t) {
			return this._fm && this._fm[Wr] ? this._fm[eh](t) : -1
		},
		setChildIndex: function (t, i) {
			if (!this._fm || !this._fm[Wr])
				return !1;
			var n = this._fm[eh](t);
			if (0 > n || n == i)
				return !1;
			var e = new yH(this, t, n, i);
			return this[_h](e) === !1 ? !1 : (this._fm.remove(t) && this._fm.add(t, i), this[dh](e), !0)
		},
		hasChildren: function () {
			return this._fm && this._fm.length > 0
		},
		getChildAt: function (t) {
			return null == this._fm ? null : this._fm._jc[t]
		},
		isDescendantOf: function (t) {
			if (!t[Vr]())
				return !1;
			for (var i = this.parent; null != i; ) {
				if (t == i)
					return !0;
				i = i[Cc]
			}
			return !1
		},
		firePropertyChangeEvent: function (t, i, n, e) {
			this.onEvent(new dH(this, t, i, n, e))
		}
	},
	p(wH, gH),
	Z(wH[hh], {
		childrenCount: {
			get: function () {
				return this._fm ? this._fm[Wr] : 0
			}
		},
		children: {
			get: function () {
				return this._fm || (this._fm = new XG),
				this._fm
			}
		},
		parent: {
			get: function () {
				return this._jk
			},
			set: function (t) {
				this._eh(t, -1)
			}
		},
		properties: {
			get: function () {
				return this._myd
			},
			set: function (t) {
				this[sv] != t && (this[sv] = t)
			}
		}
	});
	var TH = function () {
		this._jc = [],
		this._m5 = {},
		this._19 = new mH
	};
	TH.prototype = {
		beforeEvent: function (t) {
			return null != this._19 && this._19.beforeEvent ? this._19[_h](t) : !0
		},
		onEvent: function (t) {
			return this._19 instanceof Function ? void this._19(t) : void(null != this._19 && this._19.onEvent && this._19[dh](t))
		},
		_19: null,
		setIndex: function (t, i) {
			if (!this.contains(t))
				throw new Error(Pa + t.getId() + qd);
			var n = this.indexOf(t);
			if (n == i)
				return !1;
			var e = new pH(this, pH[fv], t, i, n);
			return this.beforeEvent(e) === !1 ? !1 : (this._jc.remove(t) >= 0 && this._jc.add(i, t), this[dh](e), !0)
		},
		_gg: function (t, i) {
			if (0 == t.length)
				return !1;
			var e = !1,
			s = i >= 0,
			r = new pH(this, pH.KIND_ADD, t, i);
			if (this.beforeEvent(r) === !1)
				return !1;
			var h = [];
			t = t._jc || t;
			for (var a = 0, o = t[Wr]; o > a; a++) {
				var f = t[a];
				null !== f && f !== n && this._kp(f, i, !0) && (h[nh](f), e = !0, s && i++)
			}
			return r.data = h,
			this[dh](r),
			e
		},
		_kp: function (t, i, n) {
			if (this.accept(t) === !1)
				return !1;
			if (n)
				return T(this, TH, cv, arguments);
			var e = new pH(this, pH.KIND_ADD, t, i);
			return this[_h](e) === !1 ? !1 : T(this, TH, cv, arguments) ? (this._ko(t, e), t) : !1
		},
		_ko: function (t, i) {
			this.onEvent(i)
		},
		_mz2: function (t) {
			if (0 == t[Wr])
				return !1;
			var i = new pH(this, pH.KIND_REMOVE, t);
			if (this[_h](i) === !1)
				return !1;
			var e = [],
			s = !1;
			t = t._jc || t;
			for (var r = 0, h = t.length; h > r; r++) {
				var a = t[r];
				if (null !== a && a !== n) {
					var o = a.id || a;
					a.id === n && (a = null),
					this._gm(o, a, !0) && (e[nh](a), s = !0)
				}
			}
			return i.data = e,
			this[dh](i),
			s
		},
		_gm: function (t, i, n) {
			if (n)
				return T(this, TH, uv, arguments);
			var e = new pH(this, pH[iv], i);
			return this.beforeEvent(e) === !1 ? !1 : T(this, TH, uv, arguments) ? (this[dh](e), !0) : !1
		},
		clear: function () {
			if (this[Uf]())
				return !1;
			var t = new pH(this, pH.KIND_CLEAR, this[Xd]());
			return this.beforeEvent(t) === !1 ? !1 : T(this, TH, Xa) ? (this[dh](t), !0) : !1
		},
		accept: function (t) {
			return this[_v] && this.filter(t) === !1 ? !1 : !0
		}
	},
	p(TH, XG),
	K(TH[hh], dv, {
		get: function () {
			return this._19
		}
	});
	var OH = function () {
		w(this, OH, arguments),
		this[lv] = new mH,
		this[vv] = new IH(this),
		this[vv]._19 = this[lv],
		this[bv] = new mH,
		this[bv][Ul]({
			beforeEvent: this[yv],
			onEvent: this[gv]
		}, this),
		this.parentChangeDispatcher = new mH,
		this[mv] = new mH,
		this.$roots = new XG;
		var t = this;
		this[Ev][xv] = function (i, n) {
			if (!t[Ev].contains(i))
				throw new Error(Pa + i.id + qd);
			var e = t[Ev]._jc[eh](i);
			if (e == n)
				return !1;
			t.$roots._jc[Jr](e, 1),
			t.$roots._jc[Jr](n, 0, i),
			t[pv] = !0;
			var s = new yH(t, i, e, n);
			return t._27(s),
			!0
		}
	};
	OH[hh] = {
		selectionModel: null,
		selectionChangeDispatcher: null,
		dataChangeDispatcher: null,
		parentChangeDispatcher: null,
		roots: null,
		_ko: function (t, i) {
			t[Gl] = this[bv],
			t.parent || this.$roots.add(t),
			this[dh](i)
		},
		_gm: function (t, i) {
			if (T(this, OH, uv, arguments)) {
				if (i instanceof dU)
					i.disconnect();
				else if (i instanceof lU) {
					var n = i[wv]();
					this[Mh](n)
				}
				var e = i.parent;
				return null == e ? this.$roots[Mh](i) : (e[Tv](i), e[Ov] = !0),
				i.hasChildren() && this[Mh](i[Iv]()),
				i[Gl] = null,
				!0
			}
			return !1
		},
		_5i: function (t) {
			var i = t.source;
			this[s_](i) && (null == i.parent ? this.$roots.add(i) : null == t.oldValue && this.$roots[Mh](i), this.parentChangeDispatcher[dh](t))
		},
		_27: function (t) {
			this.childIndexChangeDispatcher[dh](t)
		},
		beforeDataPropertyChange: function (t) {
			return t instanceof lH ? this[Mv][_h](t) : !0
		},
		onDataPropertyChanged: function (t) {
			return t instanceof lH ? (this[pv] = !0, t[ef][pv] = !0, void this._5i(t)) : void(t instanceof yH && (this._mysIndexFlag = !0, t[ef][pv] = !0, this._27(t)))
		},
		toRoots: function () {
			return this[Ev][Xd]()
		},
		_gk: function (t) {
			var i,
			n = t._jk;
			i = n ? n._fm : this[Ev];
			var e = i.indexOf(t);
			if (0 > e)
				throw new Error(kv + t + "' not exist in the box");
			return 0 == e ? n : i[Gd](e - 1)
		},
		_gi: function (t) {
			var i,
			n = t._jk;
			i = n ? n._fm : this.$roots;
			var e = i.indexOf(t);
			if (0 > e)
				throw new Error(kv + t + "' not exist in the box");
			return e == i[Wr] - 1 ? n ? this._gi(n) : null : i[Gd](e + 1)
		},
		forEachByDepthFirst: function (t, i, n) {
			return this.$roots.length ? r(this[Ev], t, i, n) : !1
		},
		forEachByDepthFirstReverse: function (t, i, n) {
			return this[Ev][Wr] ? o(this.$roots, t, i, n) : !1
		},
		forEachByBreadthFirst: function (t, i) {
			return this[Ev][Wr] ? u(this[Ev], t, i) : !1
		},
		forEachByBreadthFirstReverse: function (t, i) {
			return this[Ev][Wr] ? _(this.$roots, t, i) : !1
		},
		clear: function () {
			return T(this, OH, Xa) ? (this[Ev][Xa](), this.selectionModel[Xa](), !0) : !1
		}
	},
	p(OH, TH),
	Z(OH.prototype, {
		selectionModel: {
			get: function () {
				return this[vv]
			}
		},
		roots: {
			get: function () {
				return this[Ev]
			}
		}
	});
	var IH = function (t) {
		w(this, IH),
		this.box = t,
		this[Sv] = {
			onEvent: function (t) {
				pH.KIND_REMOVE == t[bd] ? null != t.data ? this.remove(t.data) : null != t.datas && this[Mh](t[yd]) : pH[nv] == t[bd] && this[Xa]()
			}
		},
		this.box.listChangeDispatcher[Ul](this._mzoxChangeListener, this)
	};
	IH.prototype = {
		box: null,
		isSelected: function (t) {
			return this.containsById(t.id || t)
		},
		select: function (t) {
			return this.add(t)
		},
		unselect: function (t) {
			return this[Mh](t)
		},
		reverseSelect: function (t) {
			return this[s_](t) ? this[Mh](t) : this.add(t)
		},
		accept: function (t) {
			return this.box[s_](t)
		}
	},
	p(IH, TH);
	var MH = null,
	kH = null,
	SH = function () {
		if (!i[Qa])
			return function (t) {
				return t
			};
		var t = i[Qa](__),
		e = t[ca],
		s = {};
		return function (t) {
			if (s[t])
				return s[t];
			var i = di(t);
			return e[i] !== n || kH && e[i = di(kH + i)] !== n ? (s[t] = i, i) : t
		}
	}
	(),
	AH = {};
	!function () {
		if (!i[Av])
			return !1;
		for (var e = i[Av], s = "Webkit Moz O ms Khtml"[Oh](Ih), r = 0; r < s.length; r++)
			if (e[ca][s[r] + Cv] !== n) {
				kH = oa + s[r][Rv]() + oa;
				break
			}
		var h = i[Qa](ca);
		t[Lv] || h[E_](i.createTextNode("")),
		h[Do] = Pv,
		h.id = Dv,
		e[E_](h),
		MH = h[jv];
		var a,
		o;
		for (var f in AH) {
			var c = AH[f];
			a = f,
			o = "";
			for (var u in c)
				o += SH(u) + ua + c[u] + Nv;
			gi(a, o)
		}
	}
	();
	var CH = function (t, i, n, e, s) {
		if (s) {
			var r = function (t) {
				r[Bv][Xr](r[Yl], t)
			};
			return r[Yl] = s,
			r.handle = n,
			t[$v](i, r, e),
			r
		}
		return t[$v](i, n, e),
		n
	},
	RH = function (t, i, n) {
		t.removeEventListener(i, n)
	};
	if (WG[zv] = 200, WG[Fv] = 800, WG.DELAY_CLICK = !0, t[Id] && navigator[Md]) {
		var LH,
		PH = /mobile|tablet|ip(ad|hone|od)|android/i,
		DH = v_ in t,
		jH = DH && PH[Xo](navigator[Md]);
		if (jH)
			LH = Gv;
		else {
			var NH = Hv in t ? "mousewheel" : qv;
			LH = Yv + NH,
			DH && (LH += Uv)
		}
		LH = LH[Oh](/[\s,]+/);
		var BH = function (i) {
			return t[Wv] && i instanceof t[Wv]
		},
		$H = function () {
			return WG[zv]
		},
		zH = function () {
			return WG.LONG_PRESS_INTERVAL
		},
		z = function (t) {
			t[Rh] ? t.preventDefault() : t[Xv] = !1
		},
		F = function (t) {
			t[Ph] && t[Ph](),
			t[Dh] = !0
		},
		G = function (t) {
			z(t),
			F(t)
		},
		FH = function (t) {
			return t[Vv] || t[Xv] === !1
		},
		GH = function (t) {
			WH[Kv] && WH._myurrentItem[Zv](t)
		},
		HH = function (t) {
			if (WH[Kv]) {
				var i = WH[Kv];
				i._onWindowMouseUp(t),
				qH(null)
			}
		},
		qH = function (t) {
			WH._myurrentItem != t && (WH[Kv] && (WH[Kv].__dragging = !1), WH._myurrentItem = t)
		},
		YH = function (i, n) {
			LH.forEach(function (t) {
				i[$v](t, n, !1)
			}),
			YG || WH[bu] || (WH[bu] = !0, t[$v](Jv, GH, !0), t[$v](Qv, HH, !0))
		},
		UH = function (t, i) {
			LH.forEach(function (n) {
				t[tb](n, i, !1)
			})
		};
		pi[hh] = {
			_install: function () {
				this.__n0ction || (this[ib] = function (t) {
					this._n0ction(t)
				}
					[mh](this), YH(this._mc, this[ib]))
			},
			_uninstall: function () {
				this[ib] && UH(this._mc, this[ib])
			},
			_n0ction: function (t) {
				t = this[nb](t);
				var i = t[Do];
				this[eb](t, i) === !1 && this._onEvent(t, sb + i)
			},
			_myancelLongPressTimer: function () {
				this[rb] && (clearTimeout(this[rb]), this[rb] = null)
			},
			__l0LongPress: function (t) {
				this[hb] || (this[hb] = function () {
					this[ab] && (this[ob] = !0, this[ab][fb] ? this[cb](this[ab], ub) : this[cb](this._l0Event, _b))
				}
					[mh](this)),
				this._myancelLongPressTimer(),
				this[rb] = setTimeout(this[hb], zH(t))
			},
			__fixTouchEvent: function (t) {
				for (var i, n, e = 0, s = 0, r = t[Wh][Wr], h = 0; r > h; ) {
					var a = t[Wh][h++],
					o = a[xa],
					f = a.clientY;
					if (2 == h) {
						var c = n[0] - o,
						u = n[1] - f;
						i = Math[xo](c * c + u * u)
					}
					n = [o, f],
					e += o,
					s += f
				}
				t.cx = e / r,
				t.cy = s / r,
				t.center = {
					x: t.cx,
					y: t.cy,
					clientX: t.cx,
					clientY: t.cy
				},
				t[el] = i
			},
			__touchCountChange: function (t) {
				this._dragPoints.clear(),
				this._9g = xi(t, this._mc)
			},
			_handleTouchEvent: function (t, i) {
				switch (i) {
				case "touchstart":
					F(t),
					this[db](t),
					this[lb](t);
					var n = t[Wh][Wr];
					this[ab] || (this._l0Event = t, this[vb](t), this[ob] = !1, this.__l0LongPress(t)),
					1 == n && (this.__l0MulTouchEvent = null),
					n >= 2 && !this[bb] && (this.__l0MulTouchEvent = {
							cx: t.cx,
							cy: t.cy,
							distance: t.distance
						});
					break;
				case "touchmove":
					G(t),
					this[db](t);
					var n = t.touches[Wr];
					if (n >= 2 && this[bb]) {
						var e = this.__l0MulTouchEvent[el];
						t._scale = t[el] / e,
						t[yb] = this[bb][gb] ? t._scale / this.__l0MulTouchEvent.prevScale : t[mb],
						this[bb][gb] = t[mb],
						this.__pinching || (this[Eb] = !0, this._onEvent(t, xb))
					}
					this[pb] || (this.__dragging = !0, this[wb](t)),
					this[Tb](t),
					this[Eb] && this._onEvent(t, Ob);
					break;
				case "touchend":
					G(t);
					var n = t[Wh][Wr];
					n && (this[db](t), this[lb](t)),
					1 >= n && (this.__pinching && (this[Eb] = !1, this[cb](t, Ib)), this.__l0MulTouchEvent = null),
					0 == n && (this[pb] ? (this._enddrag(t), this[pb] = !1) : t.timeStamp - this[ab][Ia] < .8 * $H(t) && this.__onclick(this[ab]), this._onrelease(t));
					break;
				case "touchcancel":
					this[pb] = !1,
					this[Eb] = !1,
					this[bb] = null
				}
				return !1
			},
			_handleEvent: function (t, i) {
				if (BH(t))
					return this._handleTouchEvent(t, i);
				if (Mb == i)
					F(t), qH(this), this._9g = xi(t, this._mc), this[ab] || (this[ab] = t, this[vb](t)), this[ob] = !1, this[kb](t);
				else if (Qv == i)
					qH(), this._onrelease(t);
				else if (Sb == i) {
					if (this[ob])
						return !0;
					if (this[Ab]())
						return this.__onclick(t), !0
				} else if (Cb == i) {
					if (this[Ab]())
						return !0
				} else {
					if (Rb == i)
						return this[cb](t, Lb), this[ab] && FH(t) && qH(this), !0;
					if (i == NH) {
						var e = t[Pb];
						if (e !== n ? e /= 120 : e = -t[Db], !e)
							return;
						return t.delta = e,
						this._onEvent(t, Hv)
					}
				}
				return !1
			},
			_onEvent: function (t, i) {
				if (this[ka]) {
					var n = this[ka];
					if (i = i || t[Do], n instanceof Function)
						return n(t, i);
					if (!(n[jb]instanceof Function && n.accept(i, t) === !1))
						return n.onevent instanceof Function && n[Nb](i, t, this._scope || this._mc), n[i]instanceof Function ? n[i].call(n, t, this[Ma] || this._mc) : void 0
				}
			},
			_toQEvent: function (t) {
				return t
			},
			_onWindowMouseUp: function (t) {
				this[pb] && (G(t), this[pb] = !1, t = this[nb](t), this._enddrag(t), this[Bb](t), this[cb](t, $b))
			},
			_l0DragDistance: 4,
			_onWindowMouseMove: function (t) {
				if (this[ab]) {
					if (G(t), !this.__dragging) {
						var i = this[ab][zb] - t[zb],
						n = this[ab][Fb] - t.screenY;
						if (i * i + n * n < this[Gb])
							return;
						this[pb] = !0,
						this[wb](t)
					}
					this._ondrag(this[nb](t))
				}
			},
			_isDelayClick: function () {
				return WG[Hb]
			},
			__onclick: function (t) {
				if (!this[ob]) {
					var i = $H(t);
					this[qb] ? this[Yb] || (clearTimeout(this.__mylickTimer), this[qb] = null, this[cb](t, Ub), this[Yb] = !0) : (this[Yb] = !1, this.__mylickTimer = setTimeout(function (t) {
								this[qb] = null,
								this[Yb] || this[cb](t, b_)
							}
								[mh](this, t, i), i))
				}
			},
			_onstart: function (t) {
				t[fb] ? this[cb](t, Wb) : this._onEvent(t, Xb)
			},
			_onrelease: function (t) {
				this[ab] && (this[Vb](), t.button ? this[cb](t, Kb) : this[cb](t, Zb), this._l0Event = null, this._9g = null)
			},
			_n0ppendDragInfo: function (t) {
				var i = this._9g;
				this._9g = xi(t, this._mc),
				this[Sa].add(i, this._9g, t)
			},
			_l0drag: function () {
				this[ob] = !0,
				this[Vb](),
				this[ab][fb] ? this[cb](this[ab], Jb) : this._onEvent(this[ab], Qb)
			},
			_ondrag: function (t) {
				this[ty](t),
				this[ab][fb] ? this[cb](t, iy) : this[cb](t, ny)
			},
			_enddrag: function (t) {
				if (t.timeStamp - this._9g[Ia] < 100) {
					var i = this._dragPoints[ey]();
					i && (t.vx = i.x, t.vy = i.y)
				}
				this[ab][fb] ? this._onEvent(t, sy) : this[cb](t, ry),
				this._dragPoints[Xa]()
			},
			_hn: function () {
				this[hy]()
			},
			_l2Status: function () {
				WH[Kv] == this && delete WH[Kv],
				this[Vb](),
				delete this._9g,
				this[ab] && (delete this[ab][ay], delete this._l0Event.getUI, delete this[ab])
			}
		};
		var WH = k(function (t) {
				this._kr = t,
				pi.apply(this, [t[oy], null, t])
			}, {
				"super": pi,
				_mlData: function (t) {
					return this._kr[fy](t)
				},
				_l4: function (t) {
					return this._kr[cy](t)
				},
				_toQEvent: function (i) {
					return (i instanceof MouseEvent || t[Wv] && i instanceof t.TouchEvent) && (i.getData = this._mlData[mh](this, i), i[uy] = this._l4[mh](this, i)),
					i
				},
				_onElementRemoved: function (t) {
					this[_y](function (i) {
						i[dy]instanceof Function && i.onElementRemoved(t, this._kr)
					})
				},
				_onElementClear: function () {
					this[_y](function (t) {
						t[ly]instanceof Function && t[ly](this._kr)
					})
				},
				_hn: function (t) {
					this[vy] && this._hnInteractions(this[vy], t),
					this._myustomInteractionListeners && this[by](this[yy], t),
					this[hy]()
				},
				_kr: null,
				_1ps: null,
				_myustomInteractionListeners: null,
				_mpInteraction: function (t) {
					return this._1ps == t ? !1 : (this[vy] && this._1ps[Wr] && this._hnInteractions(this[vy]), void(this._1ps = t))
				},
				_mmCustomInteractionListener: function (t) {
					this[yy] || (this[yy] = []),
					this._myustomInteractionListeners.push(t)
				},
				_k9CustomInteractionListener: function (t) {
					this[yy] && 0 != this[yy][Wr] && m(this[yy], t)
				},
				_onEvent: function (t, i, n) {
					this._kr[i]instanceof Function && this._kr[i][Xr](this._kr, t, n),
					this[vy] && this[gy](t, i, this._1ps, n),
					this._myustomInteractionListeners && this[gy](t, i, this[yy], n)
				},
				_iyListeners: function (t) {
					this[vy] && l(this[vy], t, this),
					this._myustomInteractionListeners && l(this[yy], t, this)
				},
				__onEvent: function (t, i, n, e) {
					if (!$(n))
						return void this[my](t, i, n, e);
					for (var s = 0; s < n[Wr]; s++) {
						var r = n[s];
						this[my](t, i, r, e)
					}
				},
				__handleEvent: function (t, i, n, e) {
					if (!(n[jb]instanceof Function && n[jb](i, t, this._kr, e) === !1)) {
						n.onevent instanceof Function && n[Nb](i, t, this._kr, e);
						var s = n[i];
						s instanceof Function && s.call(n, t, this._kr, e)
					}
				},
				_hnInteraction: function (t) {
					t[Ey]instanceof Function && t[Ey].call(t, this._kr)
				},
				_hnInteractions: function (t, i) {
					if (!$(t))
						return void this[xy](t, i);
					for (var n = 0; n < t[Wr]; n++) {
						var e = t[n];
						e && this[xy](e, i)
					}
				}
			})
	}
	Ti[hh] = {
		limitCount: 10,
		points: null,
		add: function (t, i, n) {
			0 == this[La].length && (this._l0X = t.x, this[py] = t.y);
			var e = i[Ia] - t[Ia] || 1;
			n.interval = e;
			var s = i.x - t.x,
			r = i.y - t.y;
			n.dx = s,
			n.dy = r,
			n[wy] = this[Ty],
			n[Oy] = this[py],
			n.totalDeltaX = i.x - this._l0X,
			n.totalDeltaY = i.y - this[py],
			this[La].splice(0, 0, {
				interval: e,
				dx: s,
				dy: r
			}),
			this[La].length > this[Iy] && this[La].pop()
		},
		getCurrentSpeed: function () {
			if (!this[La].length)
				return null;
			for (var t = 0, i = 0, n = 0, e = 0, s = this[La][Wr]; s > e; e++) {
				var r = this[La][e],
				h = r[My];
				if (h > 150) {
					t = 0;
					break
				}
				if (t += h, i += r.dx, n += r.dy, t > 300)
					break
			}
			return 0 == t || 0 == i && 0 == n ? null : {
				x: i / t,
				y: n / t
			}
		},
		clear: function () {
			this[La] = []
		}
	};
	var XH,
	VH,
	KH,
	ZH;
	jG ? (XH = ky, VH = Sy, KH = Ay, ZH = Cy) : NG ? (XH = Ry, VH = Ly, KH = Py, ZH = Dy) : (XH = jy, VH = jy, KH = V_, ZH = Ny);
	var JH = By,
	QH = Math.PI,
	tq = Math.pow,
	iq = Math.sin,
	nq = 1.70158,
	eq = {
		swing: function (t) {
			return -Math.cos(t * QH) / 2 + .5
		},
		easeNone: function (t) {
			return t
		},
		easeIn: function (t) {
			return t * t
		},
		easeOut: function (t) {
			return (2 - t) * t
		},
		easeBoth: function (t) {
			return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
		},
		easeInStrong: function (t) {
			return t * t * t * t
		},
		easeOutStrong: function (t) {
			return 1 - --t * t * t * t
		},
		easeBothStrong: function (t) {
			return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
		},
		elasticIn: function (t) {
			var i = .3,
			n = i / 4;
			return 0 === t || 1 === t ? t :  - (tq(2, 10 * (t -= 1)) * iq(2 * (t - n) * QH / i))
		},
		elasticOut: function (t) {
			var i = .3,
			n = i / 4;
			return 0 === t || 1 === t ? t : tq(2, -10 * t) * iq(2 * (t - n) * QH / i) + 1
		},
		elasticBoth: function (t) {
			var i = .45,
			n = i / 4;
			return 0 === t || 2 === (t *= 2) ? t : 1 > t ?  - .5 * tq(2, 10 * (t -= 1)) * iq(2 * (t - n) * QH / i) : tq(2, -10 * (t -= 1)) * iq(2 * (t - n) * QH / i) * .5 + 1
		},
		backIn: function (t) {
			return 1 === t && (t -= .001),
			t * t * ((nq + 1) * t - nq)
		},
		backOut: function (t) {
			return (t -= 1) * t * ((nq + 1) * t + nq) + 1
		},
		backBoth: function (t) {
			return (t *= 2) < 1 ? .5 * t * t * (((nq *= 1.525) + 1) * t - nq) : .5 * ((t -= 2) * t * (((nq *= 1.525) + 1) * t + nq) + 2)
		},
		bounceIn: function (t) {
			return 1 - eq[$y](1 - t)
		},
		bounceOut: function (t) {
			var i,
			n = 7.5625;
			return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
		},
		bounceBoth: function (t) {
			return .5 > t ? .5 * eq[zy](2 * t) : .5 * eq.bounceOut(2 * t - 1) + .5
		}
	},
	sq = function (t) {
		this._k2 = t
	};
	sq[hh] = {
		_k2: null,
		_7q: function () {
			this[Fy]instanceof Function && (this[Fy](), this[Fy] = null)
		},
		_l0: function (t) {
			var i = Date.now();
			this._lg(),
			this[Fy] = t,
			this[Gy] = requestAnimationFrame(function n() {
					var t = Date.now(),
					e = t - i;
					return !e || this._k2 && this._k2(e) !== !1 ? (i = t, void(this[Gy] = requestAnimationFrame(n.bind(this)))) : void this._lg()
				}
					[mh](this))
		},
		_62: function () {},
		_lg: function () {
			return this[Gy] ? (this._62(), this._7q(), t.cancelAnimationFrame(this[Gy]), void delete this[Gy]) : !1
		},
		_dh: function () {
			return null != this._requestID
		}
	};
	var rq = function (t, i, n, e) {
		this[Hy] = t,
		this[Ma] = i || this,
		this._3k = e,
		n && n > 0 && (this._it = n)
	};
	rq[hh] = {
		_it: 1e3,
		_3k: null,
		_dp: 0,
		_lg: function () {
			return this._dp = 0,
			this[qy] = 0,
			T(this, rq, Yy)
		},
		_my4: 0,
		_k2: function (t) {
			if (this._dp += t, this._dp >= this._it)
				return this._onStep[Xr](this._scope, 1, (1 - this[qy]) * this._it, t, this._it), !1;
			var i = this._dp / this._it;
			return this._3k && (i = this._3k(i)),
			this[Hy][Xr](this[Ma], i, (i - this[qy]) * this._it, t, this._it) === !1 ? !1 : void(this._my4 = i)
		}
	},
	p(rq, sq);
	var hq = function (t) {
		ni(t)
	},
	aq = {
		version: Uy,
		extend: p,
		doSuperConstructor: w,
		doSuper: T,
		createFunction: function (t, i) {
			return i[mh](t)
		},
		setClass: L,
		appendClass: P,
		removeClass: D,
		forEach: l,
		forEachReverse: b,
		isNumber: j,
		isString: N,
		isBoolean: B,
		isArray: $,
		eventPreventDefault: z,
		eventStopPropagation: F,
		stopEvent: G,
		callLater: C,
		nextFrame: R,
		forEachChild: e,
		forEachByDepthFirst: r,
		forEachByDepthFirstReverse: o,
		forEachByBreadthFirst: u,
		randomInt: H,
		randomBool: q,
		randomColor: U,
		addEventListener: CH,
		getFirstElementChildByTagName: KG
	};
	aq[Wy] = YG,
	aq[Xy] = GG,
	aq[ko] = hi,
	aq.containsRect = ai,
	aq.Rect = iH,
	aq[Vy] = tH,
	aq[Ky] = ZG,
	aq[Zy] = nH,
	aq[Jy] = _H,
	aq[Qy] = dH,
	aq[tg] = pH,
	aq[ig] = gH,
	aq[ng] = mH,
	aq[eg] = eH,
	aq[sg] = wH,
	aq[rg] = IH,
	aq[hg] = OH,
	aq[ag] = xH,
	aq[og] = Mi,
	aq[fg] = Oi,
	aq[cg] = Ii,
	aq[ug] = wi,
	aq[_g] = JG,
	aq[dg] = XG,
	aq[lg] = pi,
	aq[vg] = function (t) {
		alert(t)
	},
	aq.prompt = function (t, i, n, e) {
		var s = prompt(t, i);
		return s != i && n ? n[Xr](e, s) : s
	},
	aq[bg] = function (t, i, n) {
		var e = confirm(t);
		return e && i ? i[Xr](n) : e
	},
	aq.addCSSRule = gi;
	var oq = {
		IMAGE_ADJUST_FLIP: yg,
		IMAGE_ADJUST_MIRROR: gg,
		SELECTION_TYPE_BORDER_RECT: mg,
		SELECTION_TYPE_BORDER: Eg,
		SELECTION_TYPE_SHADOW: xg,
		NS_SVG: "http://www.w3.org/2000/svg",
		PROPERTY_TYPE_ACCESSOR: 0,
		PROPERTY_TYPE_STYLE: 1,
		PROPERTY_TYPE_CLIENT: 2,
		EDGE_TYPE_DEFAULT: null,
		EDGE_TYPE_ELBOW: pg,
		EDGE_TYPE_ELBOW_HORIZONTAL: wg,
		EDGE_TYPE_ELBOW_VERTICAL: Tg,
		EDGE_TYPE_ORTHOGONAL: Og,
		EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Ig,
		EDGE_TYPE_ORTHOGONAL_VERTICAL: Mg,
		EDGE_TYPE_HORIZONTAL_VERTICAL: kg,
		EDGE_TYPE_VERTICAL_HORIZONTAL: Sg,
		EDGE_TYPE_EXTEND_TOP: Ag,
		EDGE_TYPE_EXTEND_LEFT: Cg,
		EDGE_TYPE_EXTEND_BOTTOM: Rg,
		EDGE_TYPE_EXTEND_RIGHT: Lg,
		EDGE_TYPE_ZIGZAG: Pg,
		EDGE_CORNER_NONE: O_,
		EDGE_CORNER_ROUND: So,
		EDGE_CORNER_BEVEL: Dg,
		GROUP_TYPE_RECT: Ac,
		GROUP_TYPE_CIRCLE: jg,
		GROUP_TYPE_ELLIPSE: Ng,
		SHAPE_CIRCLE: Bg,
		SHAPE_RECT: Ac,
		SHAPE_ROUNDRECT: $g,
		SHAPE_STAR: zg,
		SHAPE_TRIANGLE: Fg,
		SHAPE_HEXAGON: Gg,
		SHAPE_PENTAGON: Hg,
		SHAPE_TRAPEZIUM: qg,
		SHAPE_RHOMBUS: Yg,
		SHAPE_PARALLELOGRAM: Ug,
		SHAPE_HEART: Wg,
		SHAPE_DIAMOND: Xg,
		SHAPE_CROSS: Vg,
		SHAPE_ARROW_STANDARD: Kg,
		SHAPE_ARROW_1: Zg,
		SHAPE_ARROW_2: Jg,
		SHAPE_ARROW_3: Qg,
		SHAPE_ARROW_4: tm,
		SHAPE_ARROW_5: im,
		SHAPE_ARROW_6: nm,
		SHAPE_ARROW_7: em,
		SHAPE_ARROW_8: sm,
		SHAPE_ARROW_OPEN: rm
	};
	oq[hm] = am,
	oq[om] = So,
	oq[fm] = cm,
	oq.LINE_JOIN_TYPE_BEVEL = Dg,
	oq.LINE_JOIN_TYPE_ROUND = So,
	oq[um] = _m,
	WG[dm] = oq[lm],
	WG[vm] = jH ? 8 : 3,
	WG[bm] = 2,
	WG[ym] = 7,
	WG.SELECTION_COLOR = V(3422561023),
	WG[dm] = oq[lm],
	WG[gm] = 10,
	WG[mm] = 10,
	WG[Em] = 10,
	WG[xm] = 200,
	WG[mo] = 1.2;
	var fq = t[pm] || 1;
	1 > fq && (fq = 1);
	var cq;
	aq.createCanvas = Di;
	var uq = $G && !YG,
	_q = 9,
	dq = function (t, i, n, e) {
		var s = t - n,
		r = i - e;
		return s * s + r * r
	};
	sn[hh] = {
		equals: function (t) {
			return this.cx == t.cx && this.cy == t.cy && this.r == t.r
		}
	},
	sn[To] = function (t, i, n) {
		if (!n)
			return nn(t, i);
		var e = dq(t.x, t.y, i.x, i.y),
		s = dq(t.x, t.y, n.x, n.y),
		r = dq(n.x, n.y, i.x, i.y);
		if (e + lq >= s + r)
			return nn(t, i, 0, n);
		if (s + lq >= e + r)
			return nn(t, n, 0, i);
		if (r + lq >= e + s)
			return nn(i, n, 0, t);
		var h;
		Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h),
		h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
		var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
		o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
		return new sn(a, o, JG(a, o, t.x, t.y), t, i, n)
	};
	var lq = .01,
	vq = {
		_mz5: function (t, i, e, s, r) {
			if (N(t) && (t = eH[na](t)), !t)
				return {
					x: 0,
					y: 0
				};
			var h = 0,
			a = 0,
			o = i._j2;
			if (e = e || 0, t.x === n) {
				var f = t[ea],
				c = t[cl],
				u = !0;
				switch (f) {
				case hH:
					u = !1;
					break;
				case rH:
					h += o / 2
				}
				switch (c) {
				case aH:
					a -= e / 2;
					break;
				case fH:
					a += e / 2
				}
			} else
				h = t.x, a = t.y, Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
			r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
			var _ = _n[Xr](i, h, a, u);
			return _ ? (r || null == s || _[wm](s), _) : {
				x: 0,
				y: 0
			}
		},
		_lm: function (t, i) {
			var n = i[Do],
			e = i.points;
			switch (n) {
			case Fq:
				t.arcTo(e[0], e[1], e[2], e[3], i._r);
				break;
			case Nq:
				t[Wc](e[0], e[1]);
				break;
			case Bq:
				t[Xc](e[0], e[1]);
				break;
			case $q:
				t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
				break;
			case zq:
				t[Tm](e[0], e[1], e[2], e[3], e[4], e[5]);
				break;
			case Gq:
				t.closePath()
			}
		},
		_5o: function (t, i, n, e) {
			var s = i[Do];
			if (s != Nq && s != Gq) {
				var r = n[Po],
				h = i[La];
				switch (n[Do] == Nq && t.add(r.x, r.y), s) {
				case Fq:
					vn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]),
					t.add(h[0], h[1]),
					t.add(i[$o], i[Go]),
					t.add(i[jo], i[No]),
					i[Om] && t.add(i.$boundaryPoint1.x, i.$boundaryPoint1.y),
					i[Im] && t.add(i[Im].x, i.$boundaryPoint2.y);
					break;
				case Bq:
					t.add(h[0], h[1]);
					break;
				case $q:
					Yi([r.x, r.y].concat(h), t);
					break;
				case zq:
					Zi([r.x, r.y].concat(h), t);
					break;
				case Gq:
					e && t.add(e[La][0], e.points[1])
				}
			}
		},
		_5m: function (t, i, n) {
			var e = t[Do];
			if (e == Nq)
				return 0;
			var s = i[Po],
			r = t[La];
			switch (e == zq && 4 == r[Wr] && (e = $q), e) {
			case Bq:
				return JG(r[0], r[1], s.x, s.y);
			case Fq:
				return t._j2;
			case $q:
				var h = Xi([s.x, s.y][Qr](r));
				return t._lf = h,
				h(1);
			case zq:
				var h = Qi([s.x, s.y].concat(r));
				return t._lf = h,
				h(1) || Ji([s.x, s.y][Qr](r));
			case Gq:
				if (s && n)
					return t.points = n[La], JG(n.points[0], n.points[1], s.x, s.y)
			}
			return 0
		}
	},
	bq = /^data:image\/(\w+);base64,/i,
	yq = /^gif/i,
	gq = /^svg/i,
	mq = 10,
	Eq = 11,
	xq = 12,
	pq = 20,
	wq = 30;
	WG[Mm] = 50,
	WG.IMAGE_HEIGHT = 30,
	WG.MAX_CACHE_PIXELS = 1e6;
	var Tq = 1,
	Oq = 2,
	Iq = 3;
	En[hh] = {
		_ji: 0,
		_66: !0,
		_kg: null,
		_je: null,
		_lq: null,
		_lr: null,
		_mzf: n,
		_8t: n,
		_67: function () {
			return this._ji == Tq
		},
		getBounds: function (t) {
			return this._lr == wq ? this._lq[Io](t) : (this._66 && this._fd(), this)
		},
		validate: function () {
			this._66 && this._fd()
		},
		_fd: function () {
			if (this._66 = !1, this._lr == wq)
				return this._lq.validate(), void this[Mf](this._lq.bounds);
			if (this._lr == pq)
				return void this._90();
			if (this._ji != Tq)
				try {
					this._e6()
				} catch (t) {
					this._ji = Iq,
					aq[of](t)
				}
		},
		_53: function () {
			this._e3(),
			this[km].clear(),
			delete this._dispatcher
		},
		_hp: function (t) {
			this._kg && this._kg.parentNode && this._kg[Sm][Tv](this._kg),
			this._ji = Iq,
			aq[of](Am + this._lq),
			this._pixels = null,
			this._je = null,
			this._kg = null,
			t !== !1 && this._53()
		},
		_e6: function () {
			var t = this._lq;
			if (this._ji = Tq, this[km] = new mH, this._lr == xq) {
				for (var n in Jq)
					this[n] = Jq[n];
				return void Jn(this._lq, this, this._d9, this._hp, this._dk)
			}
			this._kg || (this._kg = i[Qa](l_), this._kg[Cm] = Rm, LG && (this._kg.style[Lm] = T_, i[Pm][E_](this._kg))),
			this._kg.src = t,
			this._kg[ro] && (this.width = this._kg[ro], this.height = this._kg[Wa]),
			this._kg[uc] = LG ? function (t) {
				setTimeout(this._7t.bind(this, t), 100)
			}
			.bind(this) : this._7t[mh](this),
			this._kg[_c] = this._hp[mh](this)
		},
		_7t: function () {
			this._ji = Oq;
			var t = this._kg.width,
			i = this._kg[Wa];
			if (this._kg[Sm] && this._kg[Sm][Tv](this._kg), !t || !i)
				return void this._hp();
			this[ro] = t,
			this.height = i;
			var n = this._e5();
			n[ro] = t,
			n[Wa] = i,
			n.g[H_](this._kg, 0, 0, t, i),
			this[Dm] = LG && this._lr == Eq ? null : Mn(n),
			this._53()
		},
		_90: function () {
			var t = this._lq;
			if (!(t.draw instanceof Function))
				return void this._hp(!1);
			if (t[jm] === !1 && t[ro] && t[Wa])
				return this.width = t[ro], void(this[Wa] = t[Wa]);
			var i = t.width || WG[xm],
			n = t[Wa] || WG.IMAGE_MAX_SIZE,
			e = this._e5();
			e[ro] = i,
			e[Wa] = n;
			var s = e.g;
			t[Wo](s);
			var r = zi(s, 0, 0, i, n);
			if (r) {
				var h = Sn(r[Lo], i, n);
				this.x = h._x,
				this.y = h._y,
				this[ro] = h._width,
				this[Wa] = h._height,
				e[ro] = this[ro],
				e.height = this[Wa],
				s[fc](r, -this.x, -this.y),
				this._pixels = h
			}
		},
		_e5: function () {
			return this._je || (this._je = Di())
		},
		_6a: function (t, i, n, e, s, r) {
			i[co](),
			i[Ac](0, 0, e, s),
			i[Nm] = r || Bm,
			i[$m](),
			i.clip(),
			i.textAlign = n_,
			i[vo] = bo,
			i[Nm] = F_;
			var h = 6 * (i.canvas[eo] || 1);
			i[_o] = zm + h + "px Verdana,helvetica,arial,sans-serif",
			i[B_] = $_,
			i[Zo] = 1,
			i.strokeText(t, e / 2 + .5, s / 2 + .5),
			i[B_] = Fm,
			i[Gm](t, e / 2 - .5, s / 2 - .5),
			i[Hm](t, e / 2, s / 2),
			i[go]()
		},
		draw: function (t, i, n, e, s, r) {
			if (this.width && this.height) {
				i = i || 1,
				e = e || 1,
				s = s || 1;
				var h = this[ro] * e,
				a = this[Wa] * s;
				if (r && n.shadowColor && (t[z_] = n[z_], t.shadowBlur = (n[qm] || 0) * i, t[Ym] = (n[Ym] || 0) * i, t.shadowOffsetY = (n[Um] || 0) * i), this._ji == Tq)
					return this._6a(Wm, t, i, h, a, n[Xm]);
				if (this._ji == Iq)
					return this._6a(Vm, t, i, h, a, n[Xm]);
				if (this._lr == wq)
					return t[j_](e, s), void this._lq.draw(t, i, n);
				var o = this._fw(i, e, s);
				return o ? ((this.x || this.y) && t[uo](this.x * e, this.y * s), t[j_](e / o.scale, s / o[j_]), void o._lm(t, n[Xm], n.renderColorBlendMode)) : void this._j4(t, i, e, s, this[ro] * e, this[Wa] * s, n)
			}
		},
		_j4: function (t, i, n, e, s, r, h) {
			if (this._lr == pq)
				return 1 != n && 1 != e && t.scale(n, e), void this._lq[Wo](t, h);
			if (this._kg) {
				if (!BG)
					return void t[H_](this._kg, 0, 0, s, r);
				var n = i * s / this.width,
				e = i * r / this[Wa];
				t.scale(1 / n, 1 / e),
				t.drawImage(this._kg, 0, 0, s * n, r * e)
			}
		},
		_jf: null,
		_fw: function (t, i, n) {
			if (this._lr == pq && this._lq[jm] === !1)
				return null;
			if (this._lr == mq || (t *= Math.max(i, n)) <= 1)
				return this[Km] || (this[Km] = this._fz(this._je || this._kg, 1)), this[Km];
			var e = this._jf[Zm] || 0;
			if (t = Math.ceil(t), e >= t) {
				for (var s = t, r = this._jf[s]; !r && ++s <= e; )
					r = this._jf[s];
				if (r)
					return r
			}
			t % 2 && t++;
			var h = this.width * t,
			a = this[Wa] * t;
			if (h * a > WG[Jm])
				return null;
			var o = Di(h, a);
			return (this.x || this.y) && o.g[uo](-this.x * t, -this.y * t),
			this._j4(o.g, 1, t, t, h, a),
			this._fz(o, t)
		},
		_fz: function (t, i) {
			var n = new Uq(t, i);
			return this._jf[i] = n,
			this._jf[Zm] = i,
			n
		},
		hitTest: function (t, i, n) {
			if (this._lr == wq)
				return this._lq.hitTest[rh](this._lq, arguments);
			if (!(this[Dm] || this._kg && this._kg[Dm]))
				return !0;
			var e = this._pixels || this._kg[Dm];
			return e._i1(t, i, n)
		},
		_e3: function () {
			this._dispatcher && this._dispatcher.onEvent(new _H(this, Qm, tE, this._kg))
		},
		_mzj: function (t, i) {
			this[km] && this[km][Ul](t, i)
		},
		_6c: function (t, i) {
			this[km] && this._dispatcher[iE](t, i)
		},
		_my0: function (t) {
			this._jf = {},
			(t || this.width * this[Wa] > 1e5) && (this._kg = null, this._je = null)
		}
	},
	p(En, iH);
	var Mq = {};
	aq.drawImage = On,
	aq.registerImage = xn,
	aq.hasImage = wn,
	aq[nE] = function () {
		var t = [];
		for (var i in Mq)
			t[nh](i);
		return t
	};
	var kq = function (t, i, n, e, s, r) {
		this.type = t,
		this[eE] = i,
		this.positions = n,
		this[i_] = e || 0,
		this.tx = s || 0,
		this.ty = r || 0
	};
	oq[sE] = ll,
	oq[rE] = _l,
	kq[hh] = {
		type: null,
		colors: null,
		positions: null,
		angle: null,
		tx: 0,
		ty: 0,
		position: eH[ml],
		isEmpty: function () {
			return null == this.colors || 0 == this.colors[Wr]
		},
		_6u: function () {
			var t = this[eE].length;
			if (1 == t)
				return [0];
			for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++)
				i.push(n * e);
			return this[hE] || (this.positions = i),
			i
		},
		generatorGradient: function (t) {
			if (null == this[eE] || 0 == this[eE][Wr])
				return null;
			var i,
			n = ji();
			if (this.type == oq[rE]) {
				var e = this.angle;
				e > Math.PI && (e -= Math.PI);
				var s;
				if (e <= Math.PI / 2) {
					var r = Math[Vh](t[Wa], t[ro]),
					h = Math[xo](t[ro] * t[ro] + t.height * t[Wa]),
					a = r - e;
					s = Math.cos(a) * h
				} else {
					var r = Math[Vh](t[ro], t[Wa]),
					h = Math[xo](t[ro] * t[ro] + t.height * t[Wa]),
					a = r - (e - Math.PI / 2);
					s = Math.cos(a) * h
				}
				var o = s / 2,
				f = o * Math.cos(e),
				c = o * Math.sin(e),
				u = t.x + t.width / 2 - f,
				_ = t.y + t[Wa] / 2 - c,
				d = t.x + t[ro] / 2 + f,
				l = t.y + t.height / 2 + c;
				i = n.createLinearGradient(u, _, d, l)
			} else {
				if (!(this.type = oq[sE]))
					return null;
				var v = ci(this[Gf], t[ro], t.height);
				v.x += t.x,
				v.y += t.y,
				this.tx && (v.x += Math.abs(this.tx) < 1 ? t[ro] * this.tx : this.tx),
				this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Wa] * this.ty : this.ty);
				var b = JG(v.x, v.y, t.x, t.y);
				b = Math.max(b, JG(v.x, v.y, t.x, t.y + t[Wa])),
				b = Math.max(b, JG(v.x, v.y, t.x + t.width, t.y + t.height)),
				b = Math.max(b, JG(v.x, v.y, t.x + t[ro], t.y)),
				i = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, b)
			}
			var y = this[eE],
			g = this[hE];
			g && g[Wr] == y[Wr] || (g = this._6u());
			for (var m = 0, E = y[Wr]; E > m; m++)
				i[aE](g[m], y[m]);
			return i
		}
	};
	var Sq = new kq(oq[rE], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
	Aq = new kq(oq[rE], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
	Cq = (new kq(oq[rE], [V(1154272460), V(1442840575)], [.1, .9], 0), new kq(oq[sE], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0,  - .3,  - .3)),
	Rq = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
	Lq = [0, .12, .28, .45, .6, .75, .8, 1],
	Pq = new kq(oq.GRADIENT_TYPE_LINEAR, Rq, Lq),
	Dq = new kq(oq.GRADIENT_TYPE_LINEAR, Rq, Lq, Math.PI / 2),
	jq = new kq(oq[sE], Rq, Lq);
	kq[oE] = Sq,
	kq[fE] = Aq,
	kq[cE] = Cq,
	kq[uE] = Pq,
	kq.RAINBOW_LINEAR_GRADIENT_VERTICAL = Dq,
	kq[_E] = jq;
	var Nq = vl,
	Bq = _l,
	$q = dE,
	zq = dl,
	Fq = lE,
	Gq = vE;
	oq[bE] = Nq,
	oq.SEGMENT_LINE_TO = Bq,
	oq[yE] = $q,
	oq.SEGMENT_CURVE_TO = zq,
	oq[gE] = Fq,
	oq[mE] = Gq;
	var Hq = function (t, i) {
		this.id = ++AG,
		$(t) ? this[La] = t : (this[Do] = t, this.points = i)
	};
	Hq[hh] = {
		toJSON: function () {
			var t = {
				type: this.type,
				points: this[La]
			};
			return this[hf] && (t[hf] = !0),
			t
		},
		parseJSON: function (t) {
			this[Do] = t[Do],
			this.points = t[La],
			this[hf] = t[hf]
		},
		points: null,
		type: Bq,
		clone: function () {
			return new Hq(this.type, this[La] ? y(this.points) : null)
		},
		move: function (t, i) {
			if (this[La])
				for (var n = 0, e = this[La].length; e > n; n++) {
					var s = this[La][n];
					aq[EE](s) && (this.points[n] += n % 2 == 0 ? t : i)
				}
		}
	},
	Z(Hq.prototype, {
		lastPoint: {
			get: function () {
				return this.type == Fq ? {
					x: this[jo],
					y: this[No]
				}
				 : {
					x: this[La][this.points[Wr] - 2],
					y: this[La][this.points.length - 1]
				}
			}
		},
		firstPoint: {
			get: function () {
				return {
					x: this[La][0],
					y: this[La][1]
				}
			}
		}
	}),
	aq.PathSegment = Hq;
	var qq = 0,
	Yq = function (t) {
		this.bounds = new iH,
		this._fb = t || []
	};
	Yq.prototype = {
		toJSON: function () {
			var t = [];
			return this._fb[lc](function (i) {
				t[nh](i[xE]())
			}),
			t
		},
		parseJSON: function (t) {
			var i = this._fb;
			t[lc](function (t) {
				i[nh](new Hq(t[Do], t[La]))
			})
		},
		clear: function () {
			this._fb.length = 0,
			this.bounds[Xa](),
			this._j2 = 0,
			this._66 = !0
		},
		_di: !0,
		_60: function (t, i) {
			this._di && 0 === this._fb[Wr] && t != Nq && this._fb.push(new Hq(Nq, [0, 0])),
			this._fb[nh](new Hq(t, i)),
			this._66 = !0
		},
		add: function (t, i) {
			g(this._fb, t, i),
			this._66 = !0
		},
		removePathSegment: function (t) {
			return t >= this._fb.length ? !1 : (this._fb.splice(t, 1), void(this._66 = !0))
		},
		moveTo: function (t, i) {
			this._60(Nq, [t, i])
		},
		lineTo: function (t, i) {
			this._60(Bq, [t, i])
		},
		quadTo: function (t, i, n, e) {
			this._60($q, [t, i, n, e])
		},
		curveTo: function (t, i, n, e, s, r) {
			this._60(zq, [t, i, n, e, s, r])
		},
		arcTo: function (t, i, n, e, s) {
			this._60(Fq, [t, i, n, e, s])
		},
		closePath: function () {
			this._60(Gq)
		},
		_7u: function (t, i, n, e, s) {
			if (e[pE]) {
				if (n == oq.SELECTION_TYPE_SHADOW) {
					if (!e[wE])
						return;
					return t[z_] = e[pE],
					t.shadowBlur = e[wE] * i,
					t.shadowOffsetX = (e[TE] || 0) * i,
					void(t.shadowOffsetY = (e[OE] || 0) * i)
				}
				if (n == oq[IE]) {
					if (!e[ME])
						return;
					t.strokeStyle = e[pE];
					var r = s.lineWidth || 0;
					s.outline && (r += 2 * s.outline),
					t[Zo] = e.selectionBorder + r,
					this._lm(t),
					t[Ro]()
				}
			}
		},
		_66: !0,
		_fb: null,
		_j2: 0,
		lineCap: am,
		lineJoin: So,
		draw: function (t, i, n, e, s) {
			t[kE] = n[kE] || this.lineCap,
			t.lineJoin = n[N_] || this[N_],
			e && (s || (s = n), this._7u(t, i, s[SE], s, n));
			var r = e && s[SE] == oq[lm];
			n[AE] && (this._lm(t), t[Zo] = n[Zo] + 2 * (n[CE] || 0), t[B_] = n[AE], t[Ro](), r && (r = !1, t.shadowColor = RE)),
			t.lineWidth = 0,
			this._lm(t),
			n[LE] && (t.fillStyle = n.renderColor || n[LE], t.fill()),
			n[PE] && (t.fillStyle = n[DE] || n[PE], t[$m]()),
			n[Zo] && (t[Zo] = n[Zo], n[Xf] && (n[jE] && (t[B_] = n[jE], t[Ro](), r && (t[z_] = RE)), t.lineCap = n[NE] || t[kE], t.lineJoin = n[BE] || t.lineJoin, t.lineDash = n[Xf], t[ic] = n.lineDashOffset), t[B_] = n[Xm] || n[B_], t[Ro](), t[Xf] = [])
		},
		_lm: function (t) {
			t[$E]();
			for (var i, n, e = 0, s = this._fb[Wr]; s > e; e++)
				i = this._fb[e], vq._lm(t, i, n), n = i
		},
		invalidate: function () {
			this._66 = !0
		},
		validate: function () {
			if (this._66 = !1, this.bounds.clear(), this._j2 = 0, 0 != this._fb[Wr])
				for (var t, i, n = this._fb, e = 1, s = n[0], r = s, h = n[Wr]; h > e; e++)
					t = n[e], t.type == Nq ? r = t : (vq._5o(this[Mo], t, s, r), i = vq._5m(t, s, r), t._j2 = i, this._j2 += i), s = t
		},
		getBounds: function (t, i) {
			if (this._66 && this[Oo](), i = i || new iH, t) {
				var n = t / 2;
				i.set(this[Mo].x - n, this[Mo].y - n, this[Mo][ro] + t, this.bounds[Wa] + t)
			} else
				i.set(this[Mo].x, this.bounds.y, this[Mo].width, this.bounds[Wa]);
			return i
		},
		hitTest: function (t, i, n, e, s, r) {
			return un[Xr](this, t, i, n, e, s, r)
		},
		toSegments: function () {
			return [][Qr](this._fb)
		},
		generator: function (t, i, n, e, s) {
			return cn[Xr](this, t, i, n, e, s)
		},
		getLocation: function (t, i) {
			return _n[Xr](this, t, i || 0)
		}
	},
	Z(Yq[hh], {
		segments: {
			get: function () {
				return this._fb
			},
			set: function (t) {
				this.clear(),
				this._fb = t
			}
		},
		length: {
			get: function () {
				return this._66 && this.validate(),
				this._j2
			}
		},
		_empty: {
			get: function () {
				return 0 == this._fb[Wr]
			}
		}
	}),
	kn[hh] = {
		_$z: function (t, i) {
			var n,
			e,
			s,
			r,
			h,
			a = t[Wr],
			o = 0,
			f = 0;
			for (h = 0; a > h; h += 4)
				if (t[h + 3] > 0) {
					n = (h + 4) / i / 4 | 0;
					break
				}
			for (h = a - 4; h >= 0; h -= 4)
				if (t[h + 3] > 0) {
					e = (h + 4) / i / 4 | 0;
					break
				}
			for (o = 0; i > o; o++) {
				for (f = n; e > f; f++)
					if (t[f * i * 4 + 4 * o + 3] > 0) {
						s = o;
						break
					}
				if (s >= 0)
					break
			}
			for (o = i - 1; o >= 0; o--) {
				for (f = n; e > f; f++)
					if (t[f * i * 4 + 4 * o + 3] > 0) {
						r = o;
						break
					}
				if (r >= 0)
					break
			}
			this._x = s,
			this._y = n,
			this._width = r - s + 1,
			this[zE] = e - n + 1,
			this._jg = new iH(s, n, this[FE], this[zE]),
			this[GE] = this._width * this[zE],
			this[HE] = i,
			this[qE] = t
		},
		_ep: function (t, i) {
			return this._originalPixels[4 * (t + this._x + (this._y + i) * this[HE]) + 3]
		},
		_i1: function (t, i, n) {
			(!n || 1 >= n) && (n = 1),
			n = 0 | n,
			t = Math.round(t - this._x) - n,
			i = Math[So](i - this._y) - n,
			n += n;
			for (var e = t, s = i; i + n > s; ) {
				for (var e = t; t + n > e; ) {
					if (this._ep(e, s))
						return !0;
					++e
				}
				++s
			}
			return !1
		}
	},
	oq[YE] = UE,
	oq.BLEND_MODE_MULTIPLY = WE,
	oq[XE] = VE,
	oq.BLEND_MODE_LINEAR_BURN = KE,
	oq[_f] = ZE,
	oq[df] = JE,
	oq[lf] = QE,
	WG[cf] = oq[tx];
	var Uq = function (t, i, n) {
		this._je = t,
		this[j_] = i || 1,
		t instanceof Image && (n = !1),
		this._is = n
	};
	Uq[hh] = {
		scale: 1,
		_je: null,
		_jf: null,
		_is: !0,
		_lm: function (t, i, n) {
			if (i && (i = An(i)), !i || this._is === !1)
				return void t[H_](this._je, 0, 0);
			this._jf || (this._jf = {});
			var e = i + n,
			s = this._jf[e];
			if (s || (s = Rn(this._je, i, n), s || (this._is = !1), this._jf[e] = s || this._je), s)
				if (LG)
					try {
						t[H_](s, 0, 0)
					} catch (r) {}
				else
					t[H_](s, 0, 0)
		}
	};
	var Wq = function (t, i, n, e, s, r, h, a, o) {
		this._mb = jn(t, i, n, e, s, r, h, a, o)
	},
	Xq = {
		server: {
			draw: function (t) {
				t.save(),
				t.translate(0, 0),
				t.beginPath(),
				t[Wc](0, 0),
				t[Xc](40, 0),
				t.lineTo(40, 40),
				t.lineTo(0, 40),
				t[yf](),
				t.clip(),
				t[uo](0, 0),
				t[uo](0, 0),
				t[j_](1, 1),
				t[uo](0, 0),
				t.strokeStyle = RE,
				t[kE] = am,
				t[N_] = _m,
				t[ix] = 4,
				t[co](),
				t[co](),
				t.restore(),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t.restore(),
				t[co]();
				var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
				i.addColorStop(.0493, nx),
				i[aE](.0689, ex),
				i[aE](.0939, sx),
				i[aE](.129, rx),
				i[aE](.2266, hx),
				i.addColorStop(.2556, ax),
				i[aE](.2869, ox),
				i[aE](.3194, fx),
				i.addColorStop(.3525, cx),
				i[aE](.3695, ux),
				i[aE](.5025, _x),
				i[aE](.9212, dx),
				i.addColorStop(1, lx),
				t.fillStyle = i,
				t.beginPath(),
				t[Wc](25.677, 4.113),
				t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
				t[Tm](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
				t[Tm](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
				t[Tm](9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
				t[Tm](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
				t[Tm](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
				t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
				t[Tm](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
				t[Tm](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
				t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
				t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
				t[Tm](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
				t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
				t[Tm](25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t[co](),
				t[Nm] = vx,
				t[$E](),
				t[Wc](19.763, 6.645),
				t[Tm](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
				t[Tm](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
				t[Tm](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
				t[Tm](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
				t[Xc](21.398, 36.253),
				t[Tm](21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
				t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
				t[Tm](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
				t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
				t[Xc](4.675, 37.877),
				t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
				t[Tm](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
				t[Tm](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
				t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
				t[Xc](2.924, 8.431),
				t[Tm](2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
				t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
				t[Tm](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
				t[Tm](4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
				t[Xc](19.763, 6.645),
				t.closePath(),
				t.fill(),
				t[Ro](),
				t[go](),
				t.restore(),
				t.save(),
				t[Nm] = bx,
				t.beginPath(),
				t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
				t.closePath(),
				t.fill(),
				t.stroke(),
				t[go](),
				t[co](),
				t[Nm] = vx,
				t.beginPath(),
				t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t[Nm] = bx,
				t[$E](),
				t[Wc](19.377, 17.247),
				t[Tm](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
				t[Xc](5.882, 18.108999999999998),
				t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
				t.lineTo(5.02, 11.144),
				t[Tm](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
				t[Xc](18.516, 10.281),
				t[Tm](18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
				t.lineTo(19.377, 17.247),
				t[yf](),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[co](),
				t.save(),
				t[Nm] = vx,
				t.beginPath(),
				t[Wc](18.536, 13.176),
				t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
				t.lineTo(6.479, 13.794),
				t[Tm](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
				t.lineTo(5.861, 11.84),
				t[Tm](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
				t[Xc](17.918, 11.221),
				t[Tm](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
				t[Xc](18.535, 13.176),
				t[yf](),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[co](),
				t[Nm] = vx,
				t[$E](),
				t[Wc](18.536, 16.551),
				t.bezierCurveTo(18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
				t[Xc](6.479, 17.168999999999997),
				t[Tm](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
				t[Xc](5.861, 15.215999999999998),
				t[Tm](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
				t.lineTo(17.918, 14.596999999999998),
				t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
				t.lineTo(18.535, 16.551),
				t[yf](),
				t.fill(),
				t[Ro](),
				t[go](),
				t[go](),
				t.restore()
			}
		},
		exchanger2: {
			draw: function (t) {
				t[co](),
				t[uo](0, 0),
				t[$E](),
				t.moveTo(0, 0),
				t[Xc](40, 0),
				t[Xc](40, 40),
				t[Xc](0, 40),
				t[yf](),
				t[yx](),
				t[uo](0, 0),
				t[uo](0, 0),
				t.scale(1, 1),
				t[uo](0, 0),
				t.strokeStyle = RE,
				t[kE] = am,
				t.lineJoin = _m,
				t.miterLimit = 4,
				t.save(),
				t.save(),
				t.restore(),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[go](),
				t[co]();
				var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
				i[aE](0, nx),
				i[aE](.0788, hx),
				i[aE](.2046, gx),
				i[aE](.3649, mx),
				i[aE](.5432, Ex),
				i[aE](.6798, xx),
				i.addColorStop(.7462, px),
				i[aE](.8508, wx),
				i.addColorStop(.98, ax),
				i[aE](1, Tx),
				t.fillStyle = i,
				t[$E](),
				t.moveTo(.41, 16.649),
				t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
				t[Tm](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
				t[Tm](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
				t[Tm](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
				t[Tm](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
				t[Tm](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
				t[Tm](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t.save(),
				t[co](),
				t.fillStyle = vx,
				t.beginPath(),
				t[Wc](16.4, 25.185),
				t[Tm](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
				t.bezierCurveTo(3.175999999999999, 21.450999999999997,  - .32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
				t[Tm](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
				t[Tm](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
				t[Tm](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
				t[Tm](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
				t[Tm](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
				t[Tm](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
				t[Tm](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
				t[Tm](13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
				t[yf](),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[go](),
				t.save(),
				t[co](),
				t.save(),
				t.save(),
				t[co](),
				t[Nm] = Ox,
				t[$E](),
				t[Wc](5.21, 21.754),
				t[Xc](8.188, 17.922),
				t[Xc](9.53, 18.75),
				t[Xc](15.956, 16.004),
				t[Xc](18.547, 17.523),
				t[Xc](12.074, 20.334),
				t[Xc](13.464, 21.204),
				t[Xc](5.21, 21.754),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t[go](),
				t.restore(),
				t[go](),
				t.save(),
				t[co](),
				t.save(),
				t[Nm] = Ox,
				t.beginPath(),
				t[Wc](17.88, 14.61),
				t[Xc](9.85, 13.522),
				t.lineTo(11.703, 12.757),
				t.lineTo(7.436, 10.285),
				t[Xc](10.783, 8.942),
				t[Xc](15.091, 11.357),
				t[Xc](16.88, 10.614),
				t[Xc](17.88, 14.61),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[go](),
				t[co](),
				t[co](),
				t.fillStyle = Ox,
				t[$E](),
				t[Wc](17.88, 14.61),
				t.lineTo(9.85, 13.522),
				t[Xc](11.703, 12.757),
				t[Xc](7.436, 10.285),
				t[Xc](10.783, 8.942),
				t[Xc](15.091, 11.357),
				t.lineTo(16.88, 10.614),
				t[Xc](17.88, 14.61),
				t[yf](),
				t.fill(),
				t[Ro](),
				t[go](),
				t[go](),
				t[go](),
				t.save(),
				t[co](),
				t[co](),
				t[Nm] = Ox,
				t[$E](),
				t[Wc](23.556, 15.339),
				t[Xc](20.93, 13.879),
				t[Xc](26.953, 11.304),
				t[Xc](25.559, 10.567),
				t[Xc](33.251, 9.909),
				t.lineTo(31.087, 13.467),
				t[Xc](29.619, 12.703),
				t[Xc](23.556, 15.339),
				t[yf](),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[go](),
				t[go](),
				t[co](),
				t[co](),
				t[co](),
				t[Nm] = Ox,
				t.beginPath(),
				t.moveTo(30.028, 23.383),
				t.lineTo(24.821, 20.366),
				t.lineTo(22.915, 21.227),
				t[Xc](21.669, 16.762),
				t[Xc](30.189, 17.942),
				t[Xc](28.33, 18.782),
				t[Xc](33.579, 21.725),
				t.lineTo(30.028, 23.383),
				t.closePath(),
				t[$m](),
				t.stroke(),
				t.restore(),
				t.restore(),
				t[co](),
				t[co](),
				t[Nm] = Ox,
				t.beginPath(),
				t.moveTo(30.028, 23.383),
				t[Xc](24.821, 20.366),
				t[Xc](22.915, 21.227),
				t[Xc](21.669, 16.762),
				t.lineTo(30.189, 17.942),
				t[Xc](28.33, 18.782),
				t.lineTo(33.579, 21.725),
				t[Xc](30.028, 23.383),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[go](),
				t[go](),
				t[go](),
				t[go](),
				t[go]()
			}
		},
		exchanger: {
			draw: function (t) {
				t[co](),
				t.translate(0, 0),
				t[$E](),
				t[Wc](0, 0),
				t[Xc](40, 0),
				t[Xc](40, 40),
				t[Xc](0, 40),
				t[yf](),
				t[yx](),
				t.translate(0, 0),
				t[uo](0, 0),
				t[j_](1, 1),
				t.translate(0, 0),
				t[B_] = RE,
				t[kE] = am,
				t.lineJoin = _m,
				t[ix] = 4,
				t.save(),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t.restore(),
				t.save();
				var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
				i[aE](0, Ix),
				i[aE](.0788, Mx),
				i[aE](.352, kx),
				i.addColorStop(.6967, Sx),
				i[aE](.8916, Ax),
				i.addColorStop(.9557, Cx),
				i[aE](1, Rx),
				t[Nm] = i,
				t.beginPath(),
				t[Wc](39.449, 12.417),
				t.lineTo(39.384, 9.424),
				t[Tm](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
				t[Tm]( - .026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
				t[Tm](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
				t[Tm](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
				t[Tm](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
				t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
				t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
				t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
				t[Xc](37.711, 30.316999999999997),
				t[Xc](39.281, 16.498999999999995),
				t[Tm](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
				t[Tm](39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
				t[yf](),
				t.fill(),
				t[Ro](),
				t[go](),
				t[co](),
				t[co](),
				t[co](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[co](),
				t.restore(),
				t.save(),
				t[go](),
				t.save(),
				t.restore(),
				t.save(),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t[go](),
				t[co](),
				t.restore(),
				t[go](),
				t[co]();
				var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
				i[aE](0, Lx),
				i[aE](.1455, Px),
				i[aE](.2975, Dx),
				i[aE](.4527, jx),
				i.addColorStop(.6099, Nx),
				i[aE](.7687, Bx),
				i[aE](.9268, $x),
				i[aE](.9754, zx),
				i[aE](1, Fx),
				t.fillStyle = i,
				t.beginPath(),
				t[Wc](33.591, 24.763),
				t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
				t[Tm](3.140000000000002, 24.737000000000002,  - .48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
				t[Tm](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
				t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
				t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
				t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
				t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
				t[Tm](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
				t[Tm](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
				t[Tm](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
				t[Tm](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
				t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
				t[Tm](37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[go](),
				t[go](),
				t[co](),
				t[co](),
				t.save(),
				t[Nm] = Ox,
				t.beginPath(),
				t[Wc](10.427, 19.292),
				t[Xc](5.735, 16.452),
				t[Xc](12.58, 13.8),
				t.lineTo(12.045, 15.07),
				t[Xc](20.482, 15.072),
				t.lineTo(19.667, 17.887),
				t[Xc](11.029, 17.851),
				t[Xc](10.427, 19.292),
				t[yf](),
				t[$m](),
				t[Ro](),
				t.restore(),
				t.restore(),
				t[co](),
				t[co](),
				t[Nm] = Ox,
				t.beginPath(),
				t[Wc](13.041, 13.042),
				t[Xc](8.641, 10.73),
				t[Xc](14.82, 8.474),
				t[Xc](14.373, 9.537),
				t[Xc](22.102, 9.479),
				t[Xc](21.425, 11.816),
				t.lineTo(13.54, 11.85),
				t.lineTo(13.041, 13.042),
				t[yf](),
				t[$m](),
				t.stroke(),
				t.restore(),
				t[go](),
				t[co](),
				t[co](),
				t[Nm] = Ox,
				t.beginPath(),
				t.moveTo(29.787, 16.049),
				t[Xc](29.979, 14.704),
				t[Xc](21.51, 14.706),
				t[Xc](22.214, 12.147),
				t[Xc](30.486, 12.116),
				t[Xc](30.653, 10.926),
				t[Xc](36.141, 13.4),
				t[Xc](29.787, 16.049),
				t[yf](),
				t.fill(),
				t.stroke(),
				t.restore(),
				t[go](),
				t[co](),
				t[co](),
				t[Nm] = Ox,
				t[$E](),
				t[Wc](28.775, 23.14),
				t[Xc](29.011, 21.49),
				t[Xc](19.668, 21.405),
				t[Xc](20.523, 18.295),
				t[Xc](29.613, 18.338),
				t.lineTo(29.815, 16.898),
				t[Xc](35.832, 19.964),
				t[Xc](28.775, 23.14),
				t[yf](),
				t[$m](),
				t.stroke(),
				t[go](),
				t[go](),
				t[go](),
				t[go]()
			}
		},
		cloud: {
			draw: function (t) {
				t.save(),
				t[$E](),
				t[Wc](0, 0),
				t[Xc](90.75, 0),
				t.lineTo(90.75, 62.125),
				t[Xc](0, 62.125),
				t[yf](),
				t[yx](),
				t.strokeStyle = RE,
				t[kE] = am,
				t[N_] = _m,
				t.miterLimit = 4,
				t[co]();
				var i = t[Gx](44.0054, 6.4116, 44.0054, 51.3674);
				i.addColorStop(0, "rgba(159, 160, 160, 0.7)"),
				i[aE](.9726, Hx),
				t.fillStyle = i,
				t.beginPath(),
				t[Wc](57.07, 20.354),
				t[Tm](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
				t[Tm](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
				t[Tm](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
				t[Tm](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
				t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
				t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
				t[Tm](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
				t[Tm](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
				t[Tm](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
				t[Tm](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
				t[Tm](73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[go]()
			}
		},
		node: {
			width: 60,
			height: 100,
			draw: function (t) {
				t.save(),
				t[uo](0, 0),
				t[$E](),
				t[Wc](0, 0),
				t[Xc](40, 0),
				t[Xc](40, 40),
				t[Xc](0, 40),
				t.closePath(),
				t[yx](),
				t[uo](0, 0),
				t[uo](0, 0),
				t[j_](1, 1),
				t[uo](0, 0),
				t.strokeStyle = RE,
				t.lineCap = am,
				t[N_] = _m,
				t[ix] = 4,
				t.save(),
				t[Nm] = qx,
				t.beginPath(),
				t[Wc](13.948, 31.075),
				t[Xc](25.914, 31.075),
				t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075),
				t[Xc](25.914, 34.862),
				t[Yx](25.914, 34.862, 25.914, 34.862),
				t.lineTo(13.948, 34.862),
				t[Yx](13.948, 34.862, 13.948, 34.862),
				t[Xc](13.948, 31.075),
				t[Yx](13.948, 31.075, 13.948, 31.075),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t[Nm] = Ux,
				t[$E](),
				t[Wc](29.679, 35.972),
				t[Tm](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
				t[Xc](11.456, 37.244),
				t[Tm](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
				t[Xc](10.183, 36.136),
				t[Tm](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
				t.lineTo(28.407, 34.863),
				t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
				t[Xc](29.678, 35.972),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t[Nm] = Ux,
				t[$E](),
				t[Wc](.196, 29.346),
				t[Tm](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
				t.lineTo(37.936, 31.075),
				t[Tm](38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
				t.lineTo(39.665, 27.174),
				t[Xc](.196, 27.174),
				t[Xc](.196, 29.346),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t.fillStyle = Wx,
				t[$E](),
				t[Wc](37.937, 3.884),
				t.lineTo(1.926, 3.884),
				t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
				t[Xc](.19699999999999984, 27.12),
				t.lineTo(39.666000000000004, 27.12),
				t.lineTo(39.666000000000004, 5.615),
				t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t[co](),
				t.restore(),
				t.save(),
				t[go](),
				t.restore(),
				t.save();
				var i = t[Gx](6.9609, 2.9341, 32.9008, 28.874);
				i[aE](0, Xx),
				i[aE](1, Vx),
				t[Nm] = i,
				t[$E](),
				t[Wc](35.788, 6.39),
				t[Xc](4.074, 6.39),
				t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
				t.lineTo(2.702, 24.616),
				t[Xc](37.159, 24.616),
				t[Xc](37.159, 7.763),
				t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[go]()
			}
		},
		group: {
			draw: function (t) {
				t[co](),
				t.translate(0, 0),
				t[$E](),
				t[Wc](0, 0),
				t.lineTo(47.75, 0),
				t[Xc](47.75, 40),
				t[Xc](0, 40),
				t[yf](),
				t[yx](),
				t.translate(0, 0),
				t[uo](0, 0),
				t[j_](1, 1),
				t.translate(0, 0),
				t[B_] = RE,
				t[kE] = am,
				t.lineJoin = _m,
				t[ix] = 4,
				t[co](),
				t[co](),
				t[Nm] = qx,
				t[$E](),
				t[Wc](10.447, 26.005),
				t[Xc](18.847, 26.005),
				t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005),
				t[Xc](18.847, 28.663),
				t[Yx](18.847, 28.663, 18.847, 28.663),
				t[Xc](10.447, 28.663),
				t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663),
				t[Xc](10.447, 26.005),
				t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t[go](),
				t.save(),
				t[Nm] = Ux,
				t.beginPath(),
				t.moveTo(21.491, 29.443),
				t[Tm](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
				t.lineTo(8.698, 30.338),
				t[Tm](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
				t[Xc](7.8020000000000005, 29.557000000000002),
				t[Tm](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
				t[Xc](20.597, 28.662000000000003),
				t[Tm](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
				t[Xc](21.491, 29.443),
				t[yf](),
				t[$m](),
				t.stroke(),
				t[go](),
				t.save(),
				t[Nm] = Ux,
				t.beginPath(),
				t[Wc](.789, 24.79),
				t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
				t[Xc](27.289, 26.005),
				t[Tm](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
				t.lineTo(28.504, 23.267),
				t.lineTo(.789, 23.267),
				t[Xc](.789, 24.79),
				t.closePath(),
				t.fill(),
				t[Ro](),
				t.restore(),
				t[co](),
				t[Nm] = Wx,
				t[$E](),
				t[Wc](27.289, 6.912),
				t[Xc](2.006, 6.912),
				t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
				t[Xc](.7889999999999997, 23.227),
				t[Xc](28.503999999999998, 23.227),
				t[Xc](28.503999999999998, 8.126),
				t[Tm](28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
				t.closePath(),
				t.fill(),
				t[Ro](),
				t[go](),
				t[co](),
				t[co](),
				t.restore(),
				t[co](),
				t[go](),
				t[go](),
				t[co]();
				var i = t[Gx](5.54, 6.2451, 23.7529, 24.458);
				i[aE](0, Xx),
				i.addColorStop(1, Vx),
				t[Nm] = i,
				t[$E](),
				t[Wc](25.78, 8.671),
				t.lineTo(3.514, 8.671),
				t[Tm](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
				t[Xc](2.549, 21.466),
				t.lineTo(26.743, 21.466),
				t[Xc](26.743, 9.636),
				t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[go](),
				t.save(),
				t.save(),
				t[Nm] = qx,
				t[$E](),
				t.moveTo(27.053, 33.602),
				t.lineTo(36.22, 33.602),
				t[Yx](36.22, 33.602, 36.22, 33.602),
				t[Xc](36.22, 36.501),
				t[Yx](36.22, 36.501, 36.22, 36.501),
				t[Xc](27.053, 36.501),
				t[Yx](27.053, 36.501, 27.053, 36.501),
				t[Xc](27.053, 33.602),
				t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602),
				t.closePath(),
				t[$m](),
				t.stroke(),
				t[go](),
				t[co](),
				t.fillStyle = Ux,
				t[$E](),
				t.moveTo(39.104, 37.352),
				t[Tm](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
				t[Xc](25.143, 38.327),
				t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
				t.lineTo(24.166, 37.477999999999994),
				t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
				t.lineTo(38.131, 36.501),
				t[Tm](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
				t[Xc](39.105, 37.352),
				t[yf](),
				t[$m](),
				t.stroke(),
				t[go](),
				t[co](),
				t[Nm] = Ux,
				t[$E](),
				t[Wc](16.514, 32.275),
				t[Tm](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
				t.lineTo(45.433, 33.601),
				t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
				t.lineTo(46.758, 30.607999999999997),
				t[Xc](16.514, 30.607999999999997),
				t[Xc](16.514, 32.275),
				t.closePath(),
				t[$m](),
				t.stroke(),
				t[go](),
				t.save(),
				t.fillStyle = Wx,
				t[$E](),
				t[Wc](45.433, 12.763),
				t.lineTo(17.839, 12.763),
				t.bezierCurveTo(17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
				t[Xc](16.514, 30.57),
				t[Xc](46.757999999999996, 30.57),
				t[Xc](46.757999999999996, 14.088),
				t[Tm](46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
				t[yf](),
				t[$m](),
				t.stroke(),
				t.restore(),
				t[co](),
				t.save(),
				t[go](),
				t.save(),
				t[go](),
				t[go](),
				t[co](),
				i = t[Gx](21.6973, 12.0352, 41.5743, 31.9122),
				i[aE](0, Xx),
				i[aE](1, Vx),
				t[Nm] = i,
				t[$E](),
				t.moveTo(43.785, 14.683),
				t[Xc](19.486, 14.683),
				t[Tm](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
				t.lineTo(18.433, 28.649),
				t[Xc](44.837, 28.649),
				t[Xc](44.837, 15.734),
				t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t[go](),
				t.restore(),
				t[co](),
				t[Kx] = .5,
				t[$E](),
				t[Wc](23.709, 36.33),
				t[Xc](4.232, 36.33),
				t[Xc](4.232, 27.199),
				t[Xc](5.304, 27.199),
				t[Xc](5.304, 35.259),
				t[Xc](23.709, 35.259),
				t[Xc](23.709, 36.33),
				t[yf](),
				t.fill(),
				t[Ro](),
				t[go](),
				t.restore()
			}
		},
		subnetwork: {
			draw: function (t) {
				t[co](),
				t[uo](0, 0),
				t[$E](),
				t[Wc](0, 0),
				t.lineTo(60.75, 0),
				t[Xc](60.75, 42.125),
				t.lineTo(0, 42.125),
				t[yf](),
				t[yx](),
				t[uo](0, .26859504132231393),
				t.scale(.6694214876033058, .6694214876033058),
				t[uo](0, 0),
				t[B_] = RE,
				t[kE] = am,
				t[N_] = _m,
				t[ix] = 4,
				t[co](),
				t[co](),
				t[go](),
				t[co](),
				t.restore(),
				t.restore(),
				t.save();
				var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
				i[aE](0, "rgba(159, 160, 160, 0.7)"),
				i[aE](.9726, Hx),
				t[Nm] = i,
				t.beginPath(),
				t[Wc](61.732, 16.509),
				t[Tm](61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
				t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
				t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
				t[Tm](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
				t[Tm](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
				t[Tm](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
				t[Tm](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
				t[Tm](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
				t[Tm](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
				t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
				t[Tm](85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
				t[yf](),
				t.fill(),
				t.stroke(),
				t[go](),
				t[co](),
				t[co](),
				t[Nm] = qx,
				t[$E](),
				t[Wc](34.966, 44.287),
				t.lineTo(45.112, 44.287),
				t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287),
				t[Xc](45.112, 47.497),
				t[Yx](45.112, 47.497, 45.112, 47.497),
				t[Xc](34.966, 47.497),
				t[Yx](34.966, 47.497, 34.966, 47.497),
				t.lineTo(34.966, 44.287),
				t[Yx](34.966, 44.287, 34.966, 44.287),
				t[yf](),
				t.fill(),
				t.stroke(),
				t[go](),
				t[co](),
				t.fillStyle = Zx,
				t[$E](),
				t[Wc](48.306, 48.439),
				t[Tm](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
				t[Xc](32.854, 49.52),
				t[Tm](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
				t.lineTo(31.771, 48.578),
				t[Tm](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
				t.lineTo(47.226, 47.497),
				t[Tm](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
				t.lineTo(48.306, 48.439),
				t[yf](),
				t[$m](),
				t[Ro](),
				t[go](),
				t[co](),
				t[Nm] = Jx,
				t[$E](),
				t[Wc](23.302, 42.82),
				t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
				t[Xc](55.308, 44.287),
				t[Tm](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
				t[Xc](56.775, 40.98),
				t[Xc](23.302, 40.98),
				t.lineTo(23.302, 42.82),
				t.closePath(),
				t[$m](),
				t.stroke(),
				t[go](),
				t.save(),
				t[Nm] = Wx,
				t[$E](),
				t[Wc](55.307, 21.229),
				t[Xc](24.771, 21.229),
				t[Tm](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
				t[Xc](23.301000000000002, 40.933),
				t[Xc](56.774, 40.933),
				t.lineTo(56.774, 22.695),
				t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
				t[yf](),
				t[$m](),
				t[Ro](),
				t.restore(),
				t[co](),
				t[co](),
				t[go](),
				t.save(),
				t[go](),
				t[go](),
				t[co](),
				i = t[Gx](29.04, 20.4219, 51.0363, 42.4181),
				i[aE](0, Xx),
				i.addColorStop(1, Vx),
				t[Nm] = i,
				t[$E](),
				t[Wc](53.485, 23.353),
				t[Xc](26.592, 23.353),
				t[Tm](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
				t[Xc](25.427, 38.807),
				t[Xc](54.647, 38.807),
				t.lineTo(54.647, 24.517000000000003),
				t[Tm](54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
				t.closePath(),
				t[$m](),
				t[Ro](),
				t[go](),
				t.restore(),
				t[go]()
			}
		}
	};
	for (var Vq in Xq)
		xn(Qx + Vq, Xq[Vq]);
	var Kq = function () {
		this.$invalidateRotate = !1;
		var t = this._fo;
		t.clear();
		var i = this[Af] || 0,
		n = this._7z.x + i / 2,
		e = this._7z.y + i / 2,
		s = this._7z[ro] - i,
		r = this._7z.height - i,
		h = qn[Xr](this, {
				x: n,
				y: e
			});
		Xn(t, h.x, h.y, !0),
		h = qn[Xr](this, {
				x: n + s,
				y: e
			}),
		Xn(t, h.x, h.y),
		h = qn[Xr](this, {
				x: n + s,
				y: e + r
			}),
		Xn(t, h.x, h.y),
		h = qn[Xr](this, {
				x: n,
				y: e + r
			}),
		Xn(t, h.x, h.y),
		this[zf] && (h = qn.call(this, {
					x: this._pointerX,
					y: this[$f]
				}), Xn(t, h.x, h.y)),
		i && t.grow(i / 2)
	},
	Zq = 20,
	Jq = {
		_fx: !1,
		_jh: null,
		_db: 0,
		_lb: -1,
		_kq: null,
		_dk: function (t) {
			this._jh || (this._jh = [], this._ji = Oq),
			this._jh.push(t),
			this._dn(),
			this._l0()
		},
		_l0: function () {
			if (!this._kq) {
				var t = this;
				this._kq = setTimeout(function i() {
						return t._dn() !== !1 ? void(t._kq = setTimeout(i, t._ff())) : void delete t._kq
					}, this._ff())
			}
		},
		_ff: function () {
			return Math.max(Zq, this._jh[this._lb][tp])
		},
		_dn: function () {
			return this._fq(this._lb + 1)
		},
		_fq: function (t) {
			if (this._fx)
				t %= this._db;
			else if (t >= this._jh.length)
				return !1;
			if (this._lb == t)
				return !1;
			this._lb = t;
			var i = this._jh[this._lb],
			n = i._myache;
			return n || (i._myache = n = Di(this[ro], this[Wa]), n.g[fc](i[Lo], 0, 0), n[Dm] = i._pixels),
			this._kg = n,
			this.$invalidateSize = !0,
			this._e3()
		},
		_d9: function () {
			return this._jh ? (this._fx = !0, this._db = this._jh.length, 1 == this._db ? this._e3() : void this._l0()) : void this._hp()
		},
		_lg: function () {
			this._kq && (clearTimeout(this._kq), delete this._kq)
		},
		_e3: function () {
			var t = this[km][ql];
			if (!t || !t[Wr])
				return !1;
			for (var i = new _H(this, Qm, tE, this._kg), n = 0, e = t[Wr]; e > n; n++) {
				var s = t[n];
				s[Yl]._jk && s.scope._jk[ip] ? (t.splice(n, 1), n--, e--) : s[dh][Xr](s[Yl], i)
			}
			return t.length > 0
		},
		_mzj: function (t, i) {
			this._dispatcher.addListener(t, i),
			this._fx && !this._kq && this._l0()
		},
		_6c: function (t, i) {
			this[km].removeListener(t, i),
			this[km]._mzh() || this._lg()
		},
		_hn: function () {
			this._lg(),
			this[km].clear()
		},
		_fw: function () {
			var t = this._kg[np];
			return t || (this._kg[np] = t = new Uq(this._kg, 1)),
			t
		}
	},
	Qq = function (t) {
		return t.reduce(function (t, i) {
			return 2 * t + i
		}, 0)
	},
	tY = function (t) {
		for (var i = [], n = 7; n >= 0; n--)
			i.push(!!(t & 1 << n));
		return i
	},
	iY = function (t) {
		this.data = t,
		this.len = this[Lo][Wr],
		this.pos = 0,
		this.readByte = function () {
			if (this.pos >= this.data[Wr])
				throw new Error("Attempted to read past end of stream.");
			return 255 & t[vc](this.pos++)
		},
		this[ep] = function (t) {
			for (var i = [], n = 0; t > n; n++)
				i[nh](this[sp]());
			return i
		},
		this.read = function (t) {
			for (var i = "", n = 0; t > n; n++)
				i += String.fromCharCode(this[sp]());
			return i
		},
		this[rp] = function () {
			var t = this.readBytes(2);
			return (t[1] << 8) + t[0]
		}
	},
	nY = function (t, i, n) {
		for (var e, s, r = 0, h = function (t) {
			for (var n = 0, e = 0; t > e; e++)
				i[vc](r >> 3)
					 & 1 << (7 & r) && (n |= 1 << e), r++;
				return n
			}, a = [], o = 1 << t, f = o + 1, c = t + 1, u = [], _ = function () {
				u = [],
				c = t + 1;
				for (var i = 0; o > i; i++)
					u[i] = [i];
				u[o] = [],
				u[f] = null
			}, d = 0; s = e, e = h(c), !(d++ > n); )if (e !== o) {
				if (e === f)
					break;
				if (e < u[Wr])
					s !== o && u.push(u[s][Qr](u[e][0]));
				else {
					if (e !== u[Wr])
						throw new Error(hp);
					u[nh](u[s][Qr](u[s][0]))
				}
				a[nh][rh](a, u[e]),
				u[Wr] === 1 << c && 12 > c && c++
			} else
				_();
		return a
	},
	eY = function (t, i) {
		i || (i = {});
		var n = function (i) {
			for (var n = [], e = 0; i > e; e++)
				n.push(t.readBytes(3));
			return n
		},
		e = function () {
			var i,
			n;
			n = "";
			do
				i = t[sp](), n += t[ap](i);
			while (0 !== i);
			return n
		},
		s = function () {
			var e = {};
			if (e.sig = t[ap](3), e.ver = t[ap](3), op !== e.sig)
				throw new Error(fp);
			e[ro] = t.readUnsigned(),
			e[Wa] = t.readUnsigned();
			var s = tY(t.readByte());
			e[cp] = s[up](),
			e[_p] = Qq(s.splice(0, 3)),
			e[dp] = s.shift(),
			e.gctSize = Qq(s.splice(0, 3)),
			e[lp] = t.readByte(),
			e[vp] = t[sp](),
			e[cp] && (e.gct = n(1 << e[bp] + 1)),
			i.hdr && i.hdr(e)
		},
		r = function (n) {
			var s = function (n) {
				var e = (t[sp](), tY(t.readByte()));
				n.reserved = e[Jr](0, 3),
				n.disposalMethod = Qq(e.splice(0, 3)),
				n.userInput = e[up](),
				n[nc] = e[up](),
				n[yp] = t.readUnsigned(),
				n[ec] = t[sp](),
				n[gp] = t[sp](),
				i.gce && i.gce(n)
			},
			r = function (t) {
				t[mp] = e(),
				i.com && i.com(t)
			},
			h = function (n) {
				t[sp](),
				n[Ep] = t[ep](12),
				n[xp] = e(),
				i.pte && i.pte(n)
			},
			a = function (n) {
				var s = function (n) {
					t[sp](),
					n[pp] = t.readByte(),
					n[wp] = t.readUnsigned(),
					n.terminator = t[sp](),
					i.app && i.app.NETSCAPE && i.app.NETSCAPE(n)
				},
				r = function (t) {
					t[Tp] = e(),
					i.app && i.app[t[Op]] && i.app[t[Op]](t)
				};
				switch (t[sp](), n.identifier = t[ap](8), n[Ip] = t[ap](3), n[Op]) {
				case "NETSCAPE":
					s(n);
					break;
				default:
					r(n)
				}
			},
			o = function (t) {
				t[Lo] = e(),
				i[pp] && i[pp](t)
			};
			switch (n[Mp] = t.readByte(), n.label) {
			case 249:
				n[kp] = Sp,
				s(n);
				break;
			case 254:
				n[kp] = Ap,
				r(n);
				break;
			case 1:
				n[kp] = Cp,
				h(n);
				break;
			case 255:
				n.extType = Rp,
				a(n);
				break;
			default:
				n.extType = pp,
				o(n)
			}
		},
		h = function (s) {
			var r = function (t, i) {
				for (var n = new Array(t.length), e = t[Wr] / i, s = function (e, s) {
					var r = t[Zr](s * i, (s + 1) * i);
					n[Jr][rh](n, [e * i, i].concat(r))
				}, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
					for (var f = r[o]; e > f; f += h[o])
						s(f, a), a++;
				return n
			};
			s.leftPos = t[rp](),
			s[oc] = t[rp](),
			s[ro] = t[rp](),
			s[Wa] = t.readUnsigned();
			var h = s.width * s[Wa],
			a = tY(t[sp]());
			s[hc] = a[up](),
			s[Lp] = a[up](),
			s[dp] = a[up](),
			s[Pp] = a[Jr](0, 2),
			s.lctSize = Qq(a[Jr](0, 3)),
			s[hc] && (s.lct = n(1 << s[Dp] + 1)),
			s.lzwMinCodeSize = t[sp]();
			var o = e();
			s.pixels = nY(s[jp], o, h),
			s[Lp] && (s[Np] = r(s[Np], s.width)),
			i.img && i.img(s)
		},
		a = function () {
			var n = {};
			switch (n.sentinel = t.readByte(), String[yc](n[Bp])) {
			case "!":
				n.type = $p,
				r(n);
				break;
			case ",":
				n.type = l_,
				h(n);
				break;
			case ";":
				n[Do] = zp,
				i.eof && i.eof(n);
				break;
			default:
				throw new Error(Fp + n[Bp].toString(16))
			}
			zp !== n.type && setTimeout(a, 0)
		},
		o = function () {
			s(),
			setTimeout(a, 0)
		};
		o()
	},
	sY = "";
	i[$v] && i[$v](Gp, function (t) {
		if (t[Ra] && t[Hp] && t[qp] && 73 == t.keyCode) {
			var i = aq[lh] + Yp + aq.version + Up + aq.publishDate + yo + aq[Wp] + yo + aq[Xp] + sY;
			aq[vg](i)
		}
	}, !1);
	var rY = Vp;
	sY = Kp + decodeURIComponent(Zp);
	var hY,
	aY,
	oY,
	fY = t,
	cY = Jp,
	uY = Qp,
	_Y = tw,
	dY = iw,
	lY = nw,
	vY = ew,
	bY = sw,
	yY = rw,
	gY = hw,
	mY = aw,
	EY = ow,
	xY = fw,
	pY = cw,
	wY = uw,
	TY = _w,
	OY = dw,
	IY = lw,
	MY = vw,
	kY = bw,
	SY = yw,
	AY = gw,
	CY = fY[dY + mw];
	CY && (aY = fY[wY + Ew][lY + xw], CY[Xr](fY, ie, OY), CY[Xr](fY, ne, kY), CY.call(fY, function () {
			LY && LY == rY && (GY = !1)
		}, IY));
	var RY,
	LY,
	PY,
	DY = 111,
	jY = function (t, i) {
		i || (i = pw + uY + ww);
		try {
			oY[Xr](t, i, 6 * DY, 1 * DY)
		} catch (n) {}
	},
	NY = !0,
	BY = !0,
	$Y = !0,
	zY = !0,
	FY = !0,
	GY = !0,
	HY = 2048,
	qY = function (t, i) {
		return te ? te(t, i) || "" : void 0
	};
	if (i.createElement) {
		var YY = i[Qa](Tw);
		YY[ca][Ow] = O_,
		YY.onload = function (t) {
			var i = t[Y_][Iw],
			n = aY;
			if ("" === n || Mw == n || kw == n)
				return void this[Sm].parentNode.removeChild(this[Sm]);
			var e = i[Sw][yc];
			i[dY + mw](function () {
				Qn(e) != RY && (gU.prototype._k0 = null)
			}, kY),
			this.parentNode[Sm][Tv](this[Sm])
		};
		var UY = i.createElement(__);
		UY[ca].width = L_,
		UY[ca][Wa] = L_,
		UY.style[Aw] = T_,
		UY[E_](YY),
		i[Cw][E_](UY)
	}
	if (i[TY + Rw]) {
		var WY = i[TY + Rw](gY + Lw);
		WY[ca][Ow] = O_,
		WY[uc] = function (t) {
			var i = Pw,
			n = t[Y_][i + Dw];
			hY = n[jw].now();
			var e = n[mY + EY + Nw + xY + Bw][pY + Do];
			oY = e[cY + $w],
			$G && (n = fY);
			var s = n[dY + mw];
			//s[Xr](fY, he, kY),//å¹²æ‰°å®¢æˆ·ç«¯æ“ä½œ
			//s[Xr](fY, ae, SY),//å¹²æ‰°å®¢æˆ·ç«¯æ“ä½œ
			//s[Xr](fY, fe, IY),//å¹²æ‰°å®¢æˆ·ç«¯æ“ä½œ
			//s[Xr](fY, ee, MY),//æ˜¾ç¤ºç‰ˆæƒæ ‡è¯†
			s.call(fY, re, AY),
			s.call(fY, oe, kY),
			s[Xr](fY, se, kY),
			this.parentNode.parentNode[Tv](this.parentNode)
		};
		var UY = i[Qa](__);
		UY.style[ro] = L_,
		UY[ca].height = L_,
		UY[ca].overflow = T_,
		UY[E_](WY),
		i.documentElement.appendChild(UY)
	}
	var XY = {
		position: zw,
		userSelect: O_,
		outline: O_,
		transformOrigin: Fw,
		"-webkit-tap-highlight-color": RE
	},
	VY = Gw;
	gi(Uh + VY, XY);
	var KY = {
		width: k_,
		height: k_,
		position: I_,
		overflow: T_,
		textAlign: tf,
		outline: O_,
		tapHighlightColor: RE,
		userSelect: O_
	},
	ZY = Hw;
	gi(Uh + ZY, KY);
	var JY = qw,
	QY = {
		overflow: T_,
		"text-align": tf,
		"-webkit-tap-highlight-color": RE,
		outline: O_
	};
	gi(Uh + JY, QY);
	var tU = k(function (t) {
			this[Yw] = new nU,
			this._mn = new XG,
			this._8g = [],
			this[Uw] = [],
			this[Ww] = [],
			this._8f = {},
			this[Mo] = new iH,
			this._jy = new oU,
			this[Xw] = new fU,
			this._jy[Gl] = function (t) {
				this._77(t)
			}
			[mh](this),
			this._myh(),
			this.setParent(t)
		}, {
			_mz0: null,
			_je: null,
			_mn: null,
			_myx: null,
			_jy: null,
			_mys: function (t) {
				return t ? (this._66s || (this[Vw] = {}), this._66s[t] ? !1 : (this[Vw][t] = !0, void this[Kw]())) : this.invalidate()
			},
			_9a: function (t) {
				return this[Vw] && this._66s[t]
			},
			isInvalidate: function () {
				return this._66
			},
			clear: function () {
				this._mn.clear(),
				this[Uw][Wr] = 0,
				this._8f = {},
				this[bu] = !1,
				this[Kw]()
			},
			_72: function () {
				this[Zw](Jw),
				this._2j()
			},
			_2j: function () {
				this._mys(Qw)
			},
			invalidate: function (t) {
				(t || !this._66) && (this._66 = !0, this._lg || (this[tT] = requestAnimationFrame(this._fd[mh](this))))
			},
			_73: function (t) {
				return this._lg = t,
				t ? void(this._k0ingID && (cancelAnimationFrame(this._k0ingID), this[tT] = null)) : void(this._66 && this.invalidate(!0))
			},
			_fd: function () {
				this[tT] = null,
				this._66 = !1;
				var t = this[bu];
				this._n0e || (this._myo(), this[bu] = !0),
				this[iT](!t),
				this._3e(),
				this._k0(),
				this._1u()
			},
			_myv: function (t) {
				this[nT] = t || this.fullRefresh,
				(t || this[Vw].size) && this._9k(),
				(t || this._66s[eT]) && this._79(),
				this._n0q(t),
				this._4h(t),
				this[Vw] = {}
			},
			_3e: function () {
				this[Uw][Wr] = 0;
				var t = this._viewport;
				if (this._mn[lc](function (i) {
						if (i[sT] !== !1) {
							var n = this[rT](i);
							t[Uu](n.x, n.y, n.width, n.height) && this._myx[nh](i)
						}
					}, this), this._myx = this._hx(this[Uw]), !this[nT]) {
					var i = this[Yw];
					this[Ww].length = 0,
					i._mz3(this[Xw]),
					i._i5() || this[Uw][lc](function (t) {
						var n = this[rT](t);
						i._e8(n.x, n.y, n[ro], n[Wa]) && this[Ww][nh](t)
					}, this)
				}
			},
			_hx: function (t) {
				return $G ? t = d(t, this._9i) : t[hT](this._9i),
				t
			},
			_9i: function (t, i) {
				return t = t[aT] || 0,
				i = i[aT] || 0,
				t - i
			},
			_n0y: function (t) {
				return t[oT]
			},
			_k0: function () {
				if (this[nT])
					return this._ee(), this._75(!0), void this[fT](this._mytx, this[Uw]);
				this._75(this[cT]);
				var t = this[Yw],
				i = this[uT];
				i.save(),
				this[cT] && (_e(i), i[H_](this[cT][to], this[cT].x, this[cT].y)),
				t._ka(i, this._ec[mh](this)),
				this._ee(),
				this[fT](i, this._lmingList),
				i.restore()
			},
			_75: function (t) {
				this._mysCanvasSizeFlag ? (this._mysCanvasSizeFlag = !1, this._je.setSize(this[FE], this[zE])) : t && ue(this._je)
			},
			_9k: function () {
				var t = this[ro],
				i = this[Wa];
				return this[FE] == t && this[zE] == i ? !1 : (this[FE] = t, this[zE] = i, void(this[_T] = !0))
			},
			_4h: function (t) {
				if (!t && !this._66s[Qw])
					return !1;
				var i = this._jy[dT]([0, 0]),
				n = this.scale,
				e = this._width / n,
				s = this[zE] / n,
				r = this.rotate,
				h = this._viewport;
				if (h.x == i[0] && h.y == i[1] && h[ro] == e && h.height == s && h.rotate == r)
					return !1;
				var a = h.toJSON();
				return this[Xw].set(i[0], i[1], e, s, r, n),
				this._3g(this._viewport, a, t),
				!0
			},
			_3g: function (t, i, n) {
				this[nT] || n || (this[cT] = this._hh(i, t))
			},
			_77: function () {
				if (this[bu]) {
					if (this._lg) {
						var t;
						this._myurrentMatrix ? this[lT].transMatrix = t = rU.mul([], this._jy.m, rU[vT]([], this[lT].m)) : t = this._jy.m,
						this._4z(t)
					}
					this._mys(eT),
					this._2j()
				}
			},
			_4z: function (t) {
				this[bT] = t,
				cU[Tu](this._je, y_, t ? yT + t[gT]($h) + ")" : "")
			},
			_79: function () {
				var t = this[lT];
				if (this[lT] = {
						tx: this._jy.m[4],
						ty: this._jy.m[5],
						m: this._jy.m[Zr](),
						scale: this._jy._h8(),
						rotate: this._jy._er()
					}, this.__myssMatrix && this._4z(null), !this[nT]) {
					if (this._2h(this[lT], t), !t || t[j_] != this[lT][j_])
						return this._7i(this._myurrentMatrix[j_], t ? t.scale : null), void(this._mzd = !0);
					if (!t || t.rotate != this[lT].rotate)
						return this._56(this[lT][zo], t ? t[zo] : null), void(this._mzd = !0);
					var i = t.m[4] - this._myurrentMatrix.m[4],
					n = t.m[5] - this._myurrentMatrix.m[5],
					e = this[eo];
					i *= e,
					n *= e;
					var s = 1e-4;
					(Math.abs(i - Math[So](i)) > s || Math.abs(n - Math[So](n)) > s) && (this[nT] = !0)
				}
			},
			_7a: function () {
				var t = this[Mo],
				i = t[ih]();
				t[Xa](),
				this._mn.forEach(function (i) {
					i[sT] !== !1 && t.add(this._n0y(i))
				}, this),
				t[fl](i) || this._3i(t, i)
			},
			_3i: function () {},
			_n0e: !1,
			_myo: function () {},
			_9o: function (t) {
				var i = t[eo];
				t[j_](i, i),
				t[y_].apply(t, this._jy.m)
			},
			render: function (t, i) {
				i && i[Wr] && (t[co](), this._9o(t), i.forEach(function (i) {
						if (t.save(), i.visible !== !1)
							try {
								i.render(t)
							} catch (n) {
								console[of](n)
							}
						t[go]()
					}, this), t.restore())
			},
			setParent: function (t) {
				N(t) && (t = i.getElementById(t)),
				this._mr != t && (this._mr && this[mT] && (D(this._mr, JY), this._mr[Tv](this[mT])), this._mr = t, this._mr && (P(this._mr, JY), this._mr[E_](this._7b()), this._72()))
			},
			_7b: function () {
				return this[mT] || this._myh(),
				this._mz0
			},
			_myh: function () {
				var t = Di(!0);
				Zn(t.g),
				t[xh] = VY;
				var n = i[Qa](__);
				return n[$v](Mb, function (t) {
					return i[ET] == this ? (t[Rh] && t.preventDefault(), !1) : void 0
				}
					[mh](n), !1),
				n[xh] = ZY,
				n[E_](t),
				n[xT] = 0,
				this._je = t,
				this[mT] = n,
				this[uT] = this._je[io](no),
				t
			},
			toLogical: function (t, i) {
				return t instanceof Object && (Q(t) && (t = this._8c(t)), Array[Ch](t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)),
				this._jy[dT]([t, i])
			},
			toCanvas: function (t, i) {
				return this._jy[y_]([t, i])
			},
			_8c: function (t) {
				return Ei(t, this._mz0)
			},
			_e2: function (t, i, n) {
				if (t[r_]instanceof Function)
					return t.hitTest(i, n);
				var e = this._n0y(t);
				return e ? n ? iH[Uu](e.x, e.y, e.width, e.height, i[0] - n, i[1] - n, n + n, n + n) : iH[Uu](e.x, e.y, e[ro], e[Wa], i[0], i[1]) : t
			},
			hitTest: function (t, i) {
				return this._8e(t, i)
			},
			_8e: function (t, i) {
				i = this._9p(i),
				t = this[pT](t);
				for (var n, e = this[Uw][Wr]; --e >= 0; )
					if (n = this[Uw][e], this._e2(n, t, i))
						return n
			},
			_9p: function (t) {
				return (t === n || null === t) && (t = WG.SELECTION_TOLERANCE),
				t ? t / this.scale : 0
			},
			getUIByMouseEvent: function (t, i) {
				if (t.uiId)
					return this._mn[Yd](t[wT]);
				var n = this._8e(t, i);
				return t[wT] = n ? n.id : -1,
				n
			},
			_8f: null,
			invalidateUI: function (t) {
				this._8f[t.id] = t,
				this[Kw]()
			},
			_9q: function (t) {
				t.validate instanceof Function && t[Oo](this)
			},
			_myk: function (t, i) {
				t[TT] && this._hd(t[TT]);
				var n = t[sT];
				if (t[sT] = this._df(t, i), !t[sT])
					return n;
				var e = t[TT];
				this._9q(t);
				var s = this._n0y(t);
				t.__jg = {
					x: s.x,
					y: s.y,
					width: s.width,
					height: s.height
				};
				var r = t[sT] !== n || !iH.equals(e, s);
				return r && t.__jg && this._hd(t.__jg),
				r
			},
			_df: function (t) {
				return t[OT] !== !1
			},
			_$p: function (t) {
				this._mn[lc](function (i) {
					this._myk(i, t)
				}, this),
				this._8f = {},
				this._7a()
			},
			_n0q: function (t) {
				var i = this[j_];
				if (t)
					return this._$p(i);
				var n = this[IT];
				this[IT] = !1;
				for (var e in this._8f) {
					var s = this._8f[e];
					n ? this[MT](s, i) : n = this[MT](s, i)
				}
				this._8f = {},
				n && this._7a()
			},
			_8g: null,
			_1u: function () {
				if (!this._8g.length)
					return !1;
				var t = this._8g;
				this._8g = [],
				t[lc](function (t) {
					try {
						var i = t[Xr],
						n = t[Yl],
						e = t[tp];
						n instanceof Object ? i = i[mh](n) : n && !e && (e = parseInt(n)),
						e ? setTimeout(i, e) : i()
					} catch (s) {}
				}, this),
				this._66 && this._fd()
			},
			_dt: function (t, i, n) {
				this._8g.push({
					call: t,
					scope: i,
					delay: n
				}),
				this._66 || this._1u()
			},
			_47: function (t, i) {
				for (var n = this[Uw], e = 0, s = n[Wr]; s > e; e++)
					if (t.call(i, n[e]) === !1)
						return !1
			},
			_dv: function (t, i) {
				this._mn[lc](t, i)
			},
			_$t: function (t, i) {
				for (var n = this[Uw], e = n.length - 1; e >= 0; e--)
					if (t[Xr](i, n[e]) === !1)
						return !1
			},
			_41: function (t, i) {
				this._mn[kT](t, i)
			},
			_4f: function () {
				return this.bounds
			},
			_g7: function (t, i, n) {
				t /= this[j_] || 1,
				this._jv(t, i, n)
			},
			_jv: function (t, i, e) {
				if (this._n0e && (i === n || null === i)) {
					var s = this[pT](this[ro] / 2, this[Wa] / 2);
					i = s[0] || 0,
					e = s[1] || 0
				}
				return this._jy.scale(t, [i || 0, e || 0])
			},
			_ef: function (t, i) {
				this._jy[uo]([t, i], !0)
			},
			_mz7: function (t, i, n, e) {
				if (n == this[j_] && e !== !1) {
					var s = this[eo];
					s != (0 | s) && (t = Math[So](t * s) / s, i = Math[So](i * s) / s)
				}
				this._jy[ST]([t, i], n)
			},
			_jx: function (t, i) {
				return this._jv(this._eg, t, i)
			},
			_id: function (t, i) {
				return this._jv(1 / this._eg, t, i)
			},
			_1j: function () {
				var t = this._4f();
				if (!t[Uf]()) {
					var i = this[ro] / t[ro],
					n = this[Wa] / t.height,
					e = Math.min(i, n);
					return e = Math.max(this._h5, Math.min(this._gz, e)), {
						scale: e,
						cx: t.cx,
						cy: t.cy
					}
				}
			},
			_eg: 1.3,
			_gz: 10,
			_h5: .1,
			_mzd: !1,
			_7i: function () {},
			_56: function () {},
			_2h: function () {},
			_ee: function () {
				this._mzuffer = null,
				this[Yw]._l2()
			},
			_ec: function (t) {
				var i = this._jy,
				n = this._je[eo],
				e = this.scale,
				s = i._er();
				if (!s) {
					var r = i.transform([t[0], t[1]]);
					return r[0] *= n,
					r[1] *= n,
					n *= e,
					r[2] = t[2] * n,
					r[3] = t[3] * n,
					r
				}
				var h = new iH,
				a = i[y_]([t[0], t[1]]);
				return h.add(a[0], a[1]),
				a = i[y_]([t[0] + t[2], t[1]]),
				h.add(a[0], a[1]),
				a = i.transform([t[0], t[1] + t[3]]),
				h.add(a[0], a[1]),
				a = i.transform([t[0] + t[2], t[1] + t[3]]),
				h.add(a[0], a[1]),
				[h.x * n, h.y * n, h[ro] * n, h[Wa] * n]
			},
			_hh: function (t, n) {
				var e = n._3c(t.x, t.y, t.width, t[Wa]);
				if (e) {
					var s = this._je,
					r = this.scale * this[eo],
					h = this[Yw],
					a = {},
					o = 1e-6;
					e.x > o && (a[tf] = n._4a(0, 0, e.x, n[Wa], r)),
					n[ro] - e[Jh] > o && (a.right = n._4a(e.right, 0, n[ro] - e[Jh], n[Wa], r)),
					e.y > o && (a.top = n._4a(e.x, 0, e[ro], e.y, r)),
					n[Wa] - e.bottom > o && (a[Qh] = n._4a(e.x, e[Qh], e.width, n[Wa] - e[Qh], r)),
					Y(a) || h._4c(a);
					var f = n._i2(t.x, t.y),
					c = (f[0] - e.x) * r,
					u = (f[1] - e.y) * r,
					_ = e[ro] * r,
					d = e.height * r;
					c = Math[So](c),
					u = Math[So](u),
					_ = Math[So](_),
					d = Math[So](d);
					var l = this[AT];
					return l || (l = this[AT] = i[Qa](to), l.g = l[io](no)),
					l[ro] = _,
					l[Wa] = d,
					_e(l.g),
					l.g[H_](s, c, u),
					c = f[0] * r - c,
					u = f[1] * r - u, {
						x: c,
						y: u,
						canvas: l
					}
				}
			},
			_lw: function (t, i, n, e) {
				this[Yw]._mm(t, i, n, e)
			},
			_hd: function (t) {
				this._n0w._i6(t)
			}
		});
	Object[Yh](tU[hh], {
		width: {
			get: function () {
				return this[mT][ga]
			}
		},
		height: {
			get: function () {
				return this[mT].clientHeight
			}
		},
		rotate: {
			get: function () {
				return this._jy._er()
			}
		},
		tx: {
			get: function () {
				return this._jy._8l()[0]
			}
		},
		ty: {
			get: function () {
				return this._jy._8l()[1]
			}
		},
		ratio: {
			get: function () {
				return this._je ? this._je[eo] : void 0
			}
		},
		scale: {
			get: function () {
				return this._jy._h8()
			},
			set: function (t) {
				this._g7(t)
			}
		},
		renderScale: {
			get: function () {
				return this[j_] * this.ratio
			}
		},
		uis: {
			get: function () {
				return this._mn
			}
		},
		length: {
			get: function () {
				return this._mn[Wr]
			}
		},
		viewportBounds: {
			get: function () {
				return this._viewport.getGlobalBounds()
			}
		}
	});
	var iU,
	nU = k({
			constructor: function () {
				this._h7 = [],
				this._jg = new iH,
				this._ha = LG ? 20 : 50
			},
			_ha: 20,
			_h7: null,
			_m1: !1,
			_jg: null,
			_l2: function () {
				this._m1 = !1,
				this._h7.length = 0,
				this[CT] = null,
				this._jg[Xa]()
			},
			_i5: function () {
				return 0 == this._h7.length && !this[CT]
			},
			_mm: function (t, i, n, e) {
				0 >= n || 0 >= e || this._h7[nh]([t, i, n, e])
			},
			_i6: function (t) {
				this._mm(t.x, t.y, t[ro], t[Wa])
			},
			_4c: function (t) {
				var i = this._jg;
				for (var n in t) {
					var e = t[n],
					s = e.getGlobalBounds();
					i.add(s)
				}
				this[CT] = t
			},
			_mz3: function (t, i) {
				for (var n = [], e = this._h7, s = 0, r = e[Wr]; r > s; s++) {
					var h = e[s];
					t.intersects(h[0], h[1], h[2], h[3]) && (n[nh](h), this._jg[hl](h[0], h[1], h[2], h[3]))
				}
				this._h7 = n,
				this._m1 = i || n[Wr] >= this._ha
			},
			_e8: function (t, i, n, e) {
				if (!this._jg[Il](t, i, n, e))
					return !1;
				if (this._m1)
					return !0;
				if (this._viewportClips) {
					var s = this._viewportClips;
					for (var r in s)
						if (s[r].intersects(t, i, n, e))
							return !0
				}
				for (var h, a = 0, o = this._h7.length; o > a; a++)
					if (h = this._h7[a], iH.intersects(t, i, n, e, h[0], h[1], h[2], h[3]))
						return !0;
				return !1
			},
			_ka: function (t, i) {
				if (this._i5())
					return !1;
				if (t[$E](), this._m1) {
					var n = i([this._jg.x, this._jg.y, this._jg[ro], this._jg.height]);
					return de(t, n[0], n[1], n[2], n[3]),
					void t[yx]()
				}
				if (this._viewportClips)
					for (var e in this[CT]) {
						var n = this._viewportClips[e].canvasBounds;
						de(t, n[0], n[1], n[2], n[3])
					}
				for (var s = this._h7, r = 0, h = s[Wr]; h > r; r++) {
					var n = i(s[r]);
					de(t, n[0], n[1], n[2], n[3])
				}
				t[yx]()
			}
		});
	nU[RT] = function (t, i, n, e) {
		return t instanceof Object && (i = t.y, n = t[ro], e = t[Wa], t = t.x),
		n = X(t + n) - (t = W(t)),
		e = X(i + e) - (i = W(i)),
		[t, i, n, e]
	},
	nU._d4 = W,
	nU._h4 = X,
	oq[LT] = PT,
	oq.NAVIGATION_SCROLLBAR = DT,
	WG[jT] = oq.NAVIGATION_SCROLLBAR;
	var eU = k({
			_k0: function () {
				O(this, eU, NT, arguments),
				this[BT]._k0()
			},
			_9i: function (t, i) {
				return t = t[qf][aT] || 0,
				i = i[qf][aT] || 0,
				t - i
			},
			"super": tU,
			constructor: function (t, n) {
				this._kr = t,
				N(n) && (n = i[$T](n)),
				n && n[Jd] || (n = i.createElement(__)),
				I(this, eU, [n]),
				this[BT] = new _r(this, this[mT]),
				this._fn = [],
				this._kr._7.addListener(this._1l, this),
				this._kr._19[Ul](this._9w, this),
				this._kr._10[Ul](this._7p, this),
				this._kr._$i[Ul](this._2d, this),
				this._kr._$n[Ul](this._3q, this),
				this._n0o = {},
				this._3l(WG.NAVIGATION_TYPE, !0)
			},
			_4z: function (t) {
				O(this, eU, zT, arguments),
				this[BT]._4z(t)
			},
			_gt: function (t) {
				return t.id || (t = this._mn[Yd](t)),
				t ? (this._mn.remove(t), t[Ey](), t.__jg && this._hd(t.__jg), void(this[IT] = !0)) : !1
			},
			_gr: function () {
				this._mn.forEach(function (t) {
					t[Ey]()
				}),
				this._mn[Xa]()
			},
			_df: function (t, i) {
				var n = t[Lo] || t;
				return n._$s && (n._$s = !1, n._hr = this._4x(n, i)),
				n._hr !== !1
			},
			_4x: function (t, i) {
				return this._3m(t, i) ? !this._kr[FT] || this._kr[FT](t, i) !== !1 : !1
			},
			_n02: function (t) {
				return this._kr._35 == rr(t)
			},
			_3m: function (t, i) {
				if (t.visible === !1)
					return !1;
				if (!(t instanceof dU))
					return this._kr._35 != rr(t) ? !1 : !t._eu;
				var n = t.fromAgent,
				e = t[Rc];
				if (!n || !e)
					return !1;
				if (n == e && !t.isLooped())
					return !1;
				if (t[GT]()) {
					var s = t[Lc](!0);
					if (s && !s._df(t, i))
						return !1
				}
				var r = this._df(n, i),
				h = this._df(e, i);
				return r && h ? !0 : !1
			},
			_n0y: function (t) {
				return t[bu] ? {
					x: t.$x + t[HT].x,
					y: t.$y + t[HT].y,
					width: t[HT].width,
					height: t.uiBounds[Wa]
				}
				 : void 0
			},
			_2r: function (t) {
				var i = this._l4(t);
				if (i) {
					var n = this[rT](i);
					if (n)
						return new iH(n)
				}
			},
			_e2: function (t, i, n) {
				return t[r_](i[0], i[1], n)
			},
			hitTest: function (t, i) {
				var n = O(this, eU, r_, arguments);
				if (n) {
					t = this[pT](t),
					i = this._9p(i);
					var e = n[r_](t[0], t[1], i, !0);
					if (e instanceof gU)
						return e
				}
				return n
			},
			_3n: function (t) {
				return this.getUIByMouseEvent(t)
			},
			_75: function () {
				O(this, eU, qT, arguments),
				this[BT]._ij(this.width, this.height)
			},
			_l6: 1,
			_myx: null,
			_8o: null,
			_8p: null,
			_mn: null,
			_mr: null,
			_je: null,
			_n0w: null,
			_66: !1,
			_n0e: !1,
			_jy: null,
			_47: function (t, i) {
				for (var n = this[Uw], e = 0, s = n[Wr]; s > e; e++)
					if (t[Xr](i, n[e]) === !1)
						return !1
			},
			_dv: function (t, i) {
				this._mn[lc](t, i)
			},
			_$t: function (t, i) {
				for (var n = this._myx, e = n[Wr] - 1; e >= 0; e--)
					if (t[Xr](i, n[e]) === !1)
						return !1
			},
			_41: function (t, i) {
				this._mn[kT](t, i)
			},
			_3g: function (t) {
				O(this, eU, YT, arguments),
				this._viewportChanged = {
					value: t
				}
			},
			_myo: function () {
				this._4h(!0),
				this[UT] || (this._originAdjusted = !0, this._kr && this._kr[WT] && this._jy[ST]([this[ro] / 2, this.height / 2]))
			},
			_fd: function () {
				if (!this[ip] && this._66) {
					if (this._k0ingID = null, this._66 = !1, this[bu] && this._kr && this._kr._$s && (this._kr._$s = !1, this._kr.forEach(function (t) {
								t[XT](!0)
							})), O(this, eU, VT, arguments), this._8pChanged) {
						this._7l && this._7l._jp();
						var t = this[KT][bh],
						i = this[KT].old;
						this[KT] = null,
						this._kr._3s(new dH(this._kr, ZT, t, i))
					}
					this._viewportChanged && (this._viewportChanged = !1, this._7l && this._7l._3g && this._7l._3g(this[Xw].width * this._viewport[j_], this[Xw][Wa] * this._viewport[j_]), this._kr._3s(new dH(this._kr, Qw, this[Xw])))
				}
			},
			_fn: null,
			_myk: function (t) {
				var i = t.$data;
				if (!t._18 && !i._66 && !i._$s)
					return !1;
				var n = t[If];
				return n = O(this, eU, MT, arguments) || n
			},
			_9q: function (t) {
				var i = t[qf];
				i[JT] && (i.__3w = !1, t._3w()),
				i.__66 && i._ig() && (t._57(), i[Ov] = !1),
				(t._18 || i._66) && (i._66 = !1, t[Oo]())
			},
			_gx: function (t, i) {
				var n = t[eo];
				t.scale(n, n),
				t[y_].apply(t, this._jy.m);
				for (var e = this[QT], s = [], r = 0, h = i[Wr]; h > r; r++) {
					var a = i[r];
					a._k0(t, e),
					a._ja && a._ja[Wr] && s[nh](a)
				}
				if (s[Wr])
					for (r = 0, h = s[Wr]; h > r; r++)
						s[r]._95(t, e)
			},
			render: function (t, i) {
				if (i.length) {
					if (t.save(), LG)
						try {
							this._gx(t, i)
						} catch (n) {}
					else
						this._gx(t, i);
					t[go]()
				}
			},
			_fg: function (t, i, n) {
				t[co](),
				t[uo](-n.x * i, -n.y * i),
				t.scale(i, i);
				var e,
				s,
				r = this._mn._jc[Zr]();
				r = this._hx(r);
				for (var h = [], a = 0, o = r.length; o > a; a++)
					e = r[a], e.__hr && (s = this._n0y(e), n[Il](s.x, s.y, s[ro], s.height) && (e._k0(t, i), e._ja && e._ja[Wr] && h[nh](e)));
				if (h[Wr])
					for (a = 0, o = h[Wr]; o > a; a++)
						h[a]._95(t, i);
				t[go]()
			},
			_$y: function () {},
			_1n: function () {
				for (var t, i, n = this._mn._jc, e = new iH, s = n.length - 1; s >= 0; s--)
					t = n[s], t._hr && (i = t[HT], e.addRect(t.$x + i.x, t.$y + i.y, i.width, i[Wa]));
				var r = this._8p;
				this._8p = e,
				e.equals(r) || this._$y(r, e)
			},
			_5u: function () {
				this._myx[Wr] = 0,
				this._8o = {}
			},
			_l5: function () {
				this._l2()
			},
			_hn: function () {
				this._l2(),
				this[ip] = !0,
				this._66 = !1,
				this[BT].clear(),
				this._8g[Wr] = 0,
				this._7l && (this._7l._hn(), delete this._7l)
			},
			_l4: function (t) {
				return this._mn[Yd](t.id || t)
			},
			_$h: function (t) {
				return this._dq(t)
			},
			_g0: function (t, i) {
				var n = this.toCanvas(t, i);
				return {
					x: n[0],
					y: n[1]
				}
			},
			_dq: function (t, i) {
				var n = this[pT](t, i);
				return {
					x: n[0],
					y: n[1]
				}
			},
			_$e: null,
			_3q: function (t) {
				var i = t[ef],
				n = t.data;
				if (n)
					if (this[bu]) {
						var e,
						s;
						if ($(n))
							for (var r = 0, h = n[Wr]; h > r; r++)
								s = n[r].id, e = this._mn[Yd](s), e && (e[tO] = i.containsById(s), e[iO]());
						else {
							if (s = n.id, e = this._mn.getById(s), !e)
								return;
							e.selected = i.containsById(s),
							e[iO]()
						}
						this._mys()
					} else {
						this._$e || (this._$e = {});
						var e,
						s;
						if ($(n))
							for (var r = 0, h = n[Wr]; h > r; r++)
								s = n[r].id, this._$e[s] = !0;
						else
							s = n.id, this._$e[s] = !0
					}
			},
			_kr: null,
			_myq: function (t) {
				var i = t[nO];
				return i ? new i(t, this._kr) : void 0
			},
			_1l: function (t) {
				if (!this[bu])
					return !1;
				var i = t.source,
				n = t[bd];
				u_ == n && this._kr[XT](),
				nO == n ? (this._gt(i.id), this._ko(i)) : eO == n && i._ig() && t[bh] && this._59(i);
				var e = this._mn[Yd](i.id);
				e && e._n0e && e[sO](t) && this[Zw]()
			},
			_36: function (t) {
				var i = this._l4(t);
				i && (i.invalidateData(), this[Zw]())
			},
			_9w: function (t) {
				if (!this[bu])
					return !1;
				switch (t[bd]) {
				case pH[Ql]:
					this._ko(t[Lo]);
					break;
				case pH[iv]:
					this._g6(t.data);
					break;
				case pH[nv]:
					this._iq(t[Lo])
				}
			},
			_l2: function () {
				this._n0o = {},
				this._gr(),
				this.clear()
			},
			_n0o: null,
			_ko: function (t) {
				var i = this[rO](t);
				i && (this._mn.add(i), this[bu] && (this[hO][t.id] = t), this._mys())
			},
			_g6: function (t) {
				if (Array.isArray(t)) {
					for (var i, n = [], e = 0, s = t.length; s > e; e++)
						i = t[e].id, n[nh](i), delete this[hO][i];
					t = n
				} else
					t = t.id, delete this[hO][t], t = [t];
				t.forEach(function (t) {
					this._gt(t)
				}, this),
				this._mys()
			},
			_iq: function () {
				this._l2()
			},
			_7p: function (t) {
				return this._n0e ? void(t[ef]instanceof lU && !this[hO][t.source.id] && (t[Cl] && (this._36(t[Cl]), t.oldValue.__66 = !0), t[bh] && (this._36(t.value), t.value.__66 = !0), this._59(t.source))) : !1
			},
			_2d: function (t) {
				return this._n0e ? void(t[ef]instanceof lU && !this[hO][t.source.id] && this._59(t.source)) : !1
			},
			_2n: function (t) {
				if (t[aO]) {
					var i = t[Lc](!0);
					if (!i)
						return t[aO] = !1, void t.validateEdgeBundle();
					i[Oo](this._kr),
					i._mzm(function (t) {
						t[oO]()
					})
				}
			},
			_$p: function (t) {
				var i,
				n = (this._kr, this._kr[fO]),
				e = this._mn,
				s = [],
				r = 1;
				if (n[cO](function (t) {
						return t instanceof dU ? (this._2n(t), void s.push(t)) : (i = this[rO](t), void(i && (e.add(i), t[uO] = r++)))
					}, this), e[Wr])
					for (var h = e._jc, r = h[Wr] - 1; r >= 0; r--)
						i = h[r], this._3o(i, i[qf], t);
				for (var a, r = 0, o = s[Wr]; o > r; r++)
					if (a = s[r], i = this[rO](a)) {
						this._3o(i, a, t),
						e.add(i);
						var f = a.fromAgent,
						c = a[Rc],
						u = f[uO] || 0;
						f != c && (u = Math.max(u, c.__lb || 0)),
						a[uO] = u
					}
				if (s[Wr] && e._jc.sort(function (t, i) {
						return t[qf][uO] - i[qf][uO]
					}), this._$e) {
					var _ = n.selectionModel;
					for (var d in this._$e)
						if (_[Hd](d)) {
							var i = e[Yd](d);
							i && (i[tO] = !0)
						}
					this._$e = null
				}
				this._7a()
			},
			_n0q: function (t, i) {
				if (t)
					return this._$p();
				var n = this._mysBoundsFlag;
				this._mysBoundsFlag = !1;
				for (var e in this._n0o) {
					var s = this[hO][e];
					s instanceof lU ? this._59(s) : this._58(s)
				}
				this._n0o = {};
				for (var r, h, a = this._mn._jc, o = [], f = a[Wr] - 1; f >= 0; f--)
					r = a[f], h = r.$data, h instanceof dU ? (this._2n(h), o[nh](r)) : this._3o(r, h, i) && !n && (n = !0);
				if (o[Wr])
					for (var f = 0, c = o[Wr]; c > f; f++)
						r = o[f], this._3o(r, r[qf], i) && !n && (n = !0);
				n && this._7a()
			},
			_3o: function (t, i, n) {
				if (i instanceof dU)
					return i.__3w && (i[JT] = !1, t._3w()), this[MT](t, n);
				if (i.__66 && i._ig() && (t._57(), i.__66 = !1), this._myk(t, n)) {
					var e = this._4o(i);
					return e && (e[Ov] = !0),
					i.hasEdge() && i[Yc](function (t) {
						t[JT] = !0
					}, this),
					!0
				}
			},
			_2i: function (t, i) {
				var n = t[Dc],
				e = t[Rc],
				s = i.getIndexById(n.id);
				if (n == e)
					return s;
				var r = i.getIndexById(e.id);
				return Math.max(s, r)
			},
			_2z: function (t, i) {
				var n = this[fO]._gn(t);
				return n ? i[_O](n.id) : 0
			},
			_59: function (t) {
				var i = this._mn,
				n = i.getById(t.id);
				if (!n)
					throw new Error(dO + t[lh] + lO);
				var s = this._2z(t, i),
				r = [n];
				t[Vr]() && e(t, function (t) {
					t instanceof lU && (n = i[Yd](t.id), n && r.push(n))
				}, this),
				this._4q(i, s, r)
			},
			_58: function (t) {
				var i = this._mn[Yd](t.id);
				if (i) {
					var n = this._2i(t, this._mn);
					this._mn.setIndexBefore(i, n)
				}
			},
			_4q: function (t, i, n) {
				function e(t) {
					s.add(t)
				}
				var s = new XG;
				l(n, function (n) {
					i = t.setIndexAfter(n, i),
					n[qf][Yc](e)
				}, this),
				0 != s.length && s[lc](this._58, this)
			},
			_8r: function (t) {
				return t[Lc](!0)
			},
			_4o: function (t) {
				var i = Ie(t);
				return i && i[eO] ? i : null
			},
			_7n: null,
			_7l: null,
			_3l: function (t, i) {
				return i || t != this._7n ? (this._7n = t, this._7l && (this._7l._hn(), delete this._7l), t == oq[vO] ? void(this._7l = new cr(this, this[mT])) : t == oq.NAVIGATION_BUTTON ? void(this._7l = new fr(this, this._mz0)) : void 0) : !1
			},
			_2h: function (t, i) {
				this._7l && this._7l._jp(),
				this._kr._3s(new dH(this._kr, y_, t, i))
			},
			_7i: function (t, i) {
				this._kr._3s(new dH(this._kr, j_, t, i))
			},
			_3i: function (t, i) {
				this[KT] = {
					value: t,
					old: i
				}
			},
			_7k: function () {
				this._72()
			}
		});
	Object[Yh](eU[hh], {
		_viewportBounds: {
			get: function () {
				return this.viewportBounds
			}
		},
		_scale: {
			get: function () {
				return this[j_]
			},
			set: function (t) {
				this._g7(t)
			}
		},
		_tx: {
			get: function () {
				return this.tx
			}
		},
		_ty: {
			get: function () {
				return this.ty
			}
		},
		graphModel: {
			get: function () {
				return this._kr[bO]
			}
		}
	});
	var sU = tU,
	rU = {};
	rU[_w] = function () {
		return [1, 0, 0, 1, 0, 0]
	},
	rU[vT] = function (t, i) {
		var n = i[0],
		e = i[1],
		s = i[2],
		r = i[3],
		h = i[4],
		a = i[5],
		o = n * r - e * s;
		return o ? (o = 1 / o, t[0] = r * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - r * h) * o, t[5] = (e * h - n * a) * o, t) : null
	},
	rU[WE] = function (t, i, n) {
		var e = i[0],
		s = i[1],
		r = i[2],
		h = i[3],
		a = i[4],
		o = i[5],
		f = n[0],
		c = n[1],
		u = n[2],
		_ = n[3],
		d = n[4],
		l = n[5];
		return t[0] = e * f + r * c,
		t[1] = s * f + h * c,
		t[2] = e * u + r * _,
		t[3] = s * u + h * _,
		t[4] = e * d + r * l + a,
		t[5] = s * d + h * l + o,
		t
	},
	rU.mul = rU.multiply,
	rU[zo] = function (t, i, n) {
		var e = i[0],
		s = i[1],
		r = i[2],
		h = i[3],
		a = i[4],
		o = i[5],
		f = Math.sin(n),
		c = Math.cos(n);
		return t[0] = e * c + r * f,
		t[1] = s * c + h * f,
		t[2] = e * -f + r * c,
		t[3] = s * -f + h * c,
		t[4] = a,
		t[5] = o,
		t
	},
	rU[j_] = function (t, i, n) {
		var e = i[0],
		s = i[1],
		r = i[2],
		h = i[3],
		a = i[4],
		o = i[5],
		f = n[0],
		c = n[1];
		return t[0] = e * f,
		t[1] = s * f,
		t[2] = r * c,
		t[3] = h * c,
		t[4] = a,
		t[5] = o,
		t
	},
	rU[uo] = function (t, i, n) {
		var e = i[0],
		s = i[1],
		r = i[2],
		h = i[3],
		a = i[4],
		o = i[5],
		f = n[0],
		c = n[1];
		return t[0] = e,
		t[1] = s,
		t[2] = r,
		t[3] = h,
		t[4] = e * f + r * c + a,
		t[5] = s * f + h * c + o,
		t
	},
	rU[y_] = function (t, i) {
		var n = i[0],
		e = i[1];
		return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
	},
	rU[dT] = function (t, i) {
		return rU.transform(rU[vT]([], t), i)
	};
	var hU = Math.PI + Math.PI,
	aU = j,
	oU = k({
			equals: function (t) {
				if (!t || !Array.isArray(t))
					return !1;
				for (var i = this.m, n = 0; n < i.length; ) {
					if (i[n] != t[n])
						return !1;
					++n
				}
				return !0
			},
			constructor: function (t) {
				this.m = t || rU[_w](),
				this.im = []
			},
			listener: null,
			_66: !0,
			invalidate: function () {
				return this._66 = !0,
				this[yO] && this[fl](this[yO]) ? !1 : (this[Gl] && this[Gl]({
						target: this,
						kind: Kw
					}), this[yO] = this.m[Zr](), this)
			},
			validate: function () {
				return this._66 = !1,
				rU.invert(this.im, this.m),
				this
			},
			translate: function (t, i) {
				return aU(t) && (t = [arguments[0], arguments[1]], i = arguments[2]),
				i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (rU.translate(this.m, this.m, t), this[Kw]())
			},
			translateTo: function (t, i) {
				return aU(t) && (t = [arguments[0], arguments[1]], i = arguments[2]),
				i && (i /= this._h8(), rU[j_](this.m, this.m, [i, i])),
				this.m[4] = t[0],
				this.m[5] = t[1],
				this.invalidate()
			},
			scale: function (t, i) {
				return kh == typeof t && (t = [t, t]),
				i ? (rU[uo](this.m, this.m, i), rU.scale(this.m, this.m, t), rU[uo](this.m, this.m, le(i))) : rU[j_](this.m, this.m, t),
				this.invalidate()
			},
			rotate: function (t, i) {
				return i ? (rU[uo](this.m, this.m, i), rU[zo](this.m, this.m, t), rU.translate(this.m, this.m, le(i))) : rU[zo](this.m, this.m, t),
				this.invalidate()
			},
			transform: function (t) {
				return rU.transform(this.m, t)
			},
			reverseTransform: function (t) {
				return rU.transform(this._4b(), t)
			},
			toString: function () {
				return yT + this.m[gT]($h) + zh
			},
			_4b: function () {
				return this._66 && this[Oo](),
				this.im
			},
			_el: function () {
				var t = this.m[0],
				i = this.m[1],
				n = this.m[2],
				e = this.m[3];
				return [Math[xo](t * t + n * n), Math[xo](i * i + e * e)]
			},
			_h8: function () {
				var t = this.m[0],
				i = this.m[2];
				return Math[xo](t * t + i * i)
			},
			_8l: function () {
				return [this.m[4], this.m[5]]
			},
			_mye: function () {
				var t = this.m[0],
				i = this.m[1],
				n = this.m[2],
				e = this.m[3];
				return [ve(Math.atan2(i, e)), ve(Math[Vh](-n, t))]
			},
			_er: function () {
				return ve(Math.atan2(this.m[1], this.m[3]))
			}
		}),
	fU = k({
			constructor: function () {},
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			rotate: 0,
			set: function (t, i, n, e, s, r) {
				return this.x = t,
				this.y = i,
				this[ro] = n,
				this[Wa] = e,
				this[zo] = s,
				this[Kh] = Math.cos(s),
				this[Zh] = Math.sin(s),
				this.scale = r,
				this[gO] = null,
				this
			},
			_i2: function (t, i) {
				return t -= this.x,
				i -= this.y,
				this[zo] ? ge(t, i, this[Zh], this._myos) : [t, i]
			},
			_8j: function (t) {
				var i = new iH;
				return i.add(this._i2(t.x, t.y)),
				i.add(this._i2(t.x + t[ro], t.y)),
				i.add(this._i2(t.x, t.y + t.height)),
				i.add(this._i2(t.x + t[ro], t.y + t[Wa])),
				i
			},
			_h3: function (t, i) {
				if (this[zo]) {
					var n = ge(t, i, Math.sin(-this[zo]), Math.cos(-this.rotate));
					t = n[0],
					i = n[1]
				}
				return [this.x + t, this.y + i]
			},
			_5t: function (t, i) {
				var n = this._i2(t, i);
				return t = n[0],
				i = n[1],
				t >= 0 && i >= 0 && t <= this[ro] && i <= this[Wa]
			},
			intersects: function (t, i, n, e) {
				if (!this[zo])
					return iH[Uu](this.x, this.y, this[ro], this.height, t, i, n, e);
				if (!n || !e)
					return this._5t(t, i);
				var s = this[mO]();
				if (!s[Uu](t, i, n, e))
					return !1;
				for (var r = s.points, h = 0; h < r[Wr]; ) {
					var a = r[h];
					if (iH[ko](t, i, n, e, a[0], a[1]))
						return !0;
					h++
				}
				var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
				for (h = 0; h < o[Wr]; ) {
					var a = o[h];
					if (this._5t(a[0], a[1]))
						return !0;
					h++
				}
				return ye(r, o)
			},
			getGlobalBounds: function () {
				return this[gO] || (this._globalBounds = this._7g(0, 0, this.width, this[Wa])),
				this[gO]
			},
			_7g: function (t, i, n, e) {
				if (!this[zo])
					return new iH(this.x + t, this.y + i, n, e);
				var s = [],
				r = new iH,
				h = this._h3(t, i);
				return s[nh](h),
				r.add(h[0], h[1]),
				h = this._h3(t + n, i),
				s[nh](h),
				r.add(h[0], h[1]),
				h = this._h3(t, i + e),
				s.push(h),
				r.add(h[0], h[1]),
				h = this._h3(t + n, i + e),
				s[nh](h),
				r.add(h[0], h[1]),
				r[La] = s,
				r
			},
			_4a: function (t, i, n, e, s) {
				var r;
				if (this[zo]) {
					var h = this._h3(t, i);
					r = (new fU).set(h[0], h[1], n, e, this[zo], this[j_])
				} else
					r = (new fU).set(this.x + t, this.y + i, n, e, 0, this.scale);
				return r[EO] = [Math.round(s * t), Math.round(s * i), Math[So](s * n), Math[So](s * e)],
				r
			},
			_3c: function (t, i, n, e) {
				if (!this[zo]) {
					var s = iH.intersection(this.x, this.y, this[ro], this[Wa], t, i, n, e);
					return s && s[wm](-this.x, -this.y),
					s
				}
				var r = this._i2(t, i);
				return t = r[0],
				i = r[1],
				iH[vf](0, 0, this[ro], this.height, r[0], r[1], n, e)
			},
			equals: function (t) {
				return this.x == t.x && this.y == t.y && this[ro] == t.width && this[Wa] == t[Wa] && this.rotate == t[zo]
			},
			toString: function () {
				return this.x + $h + this.y + $h + this[ro] + $h + this[Wa] + $h + this[zo]
			},
			toJSON: function () {
				return {
					x: this.x,
					y: this.y,
					width: this[ro],
					height: this[Wa],
					rotate: this[zo],
					scale: this[j_]
				}
			}
		}),
	cU = {
		setStyle: yi,
		setStyles: vi,
		addRule: gi,
		pre: SH
	},
	uU = function (t, i, n, e) {
		this.source = t,
		this[bd] = i,
		this.oldValue = e,
		this[bh] = n,
		this[rv] = oq.PROPERTY_TYPE_STYLE
	};
	p(uU, dH);
	var _U = function (t) {
		this.id = ++AG,
		this[sv] = {},
		this._jm = {},
		t && (this.$name = t)
	};
	_U[hh] = {
		_jm: null,
		getStyle: function (t) {
			return this._jm[t]
		},
		setStyle: function (t, i) {
			var n = this._jm[t];
			return n === i || n && i && n.equals && n[fl](i) ? !1 : this[hv](t, i, new uU(this, t, i, n), this._jm)
		},
		putStyles: function (t, i) {
			for (var n in t) {
				var e = t[n];
				i ? this._jm[n] = e : this.setStyle(n, e)
			}
		},
		_$s: !0,
		invalidateVisibility: function (t) {
			this._$s = !0,
			t || (this instanceof lU && this[xO]() && this[Yc](function (t) {
					t._$s = !0
				}), this._ig() && this[Vr]() && this[lu](function (t) {
					t.invalidateVisibility()
				}))
		},
		onParentChanged: function () {
			this[XT]()
		},
		_ig: function () {
			return !this._3x && this instanceof yU
		},
		invalidate: function () {
			this[dh](new _H(this, pO, Kw))
		},
		_myb: null,
		addUI: function (t, i) {
			if (this[wO] || (this._myb = new XG), t.id || (t.id = ++AG), this[wO].containsById(t.id))
				return !1;
			var n = {
				id: t.id,
				ui: t,
				bindingProperties: i
			};
			this._myb.add(n);
			var e = new _H(this, pO, tv, n);
			return this[dh](e)
		},
		removeUI: function (t) {
			if (!this[wO])
				return !1;
			var i = this[wO][Yd](t.id);
			return i ? (this._myb[Mh](i), void this[dh](new _H(this, pO, Mh, i))) : !1
		},
		toString: function () {
			return this.$name || this.id
		},
		type: TO,
		_3x: !1,
		_hr: !0,
		inGroup: function (t) {
			var i = Ie(this);
			return i == t || i && t instanceof yU && i.isDescendantOf(t)
		}
	},
	p(_U, wH),
	A(_U[hh], [nO, lh, aT, OO]),
	Z(_U[hh], {
		enableSubNetwork: {
			get: function () {
				return this._3x
			},
			set: function (t) {
				if (this._3x != t) {
					var i = this._3x;
					this._3x = t,
					this instanceof lU && this._$v(),
					this[dh](new dH(this, u_, t, i))
				}
			}
		},
		bindingUIs: {
			get: function () {
				return this[wO]
			}
		},
		styles: {
			get: function () {
				return this._jm
			},
			set: function (t) {
				if (this._jm != t) {
					for (var i in this._jm)
						i in t || (t[i] = n);
					this.putStyles(t),
					this._jm = t
				}
			}
		}
	}),
	aq[IO] = Ie;
	var dU = function (t, i, n) {
		this.id = ++AG,
		this._myd = {},
		this._jm = {},
		n && (this.$name = n),
		this[Uc] = t,
		this.$to = i,
		this.connect()
	};
	dU[hh] = {
		$uiClass: gs,
		_k4: null,
		_ih: null,
		_k6: null,
		_il: null,
		_ey: !1,
		type: MO,
		otherNode: function (t) {
			return t == this[Nc] ? this.to : t == this.to ? this.from : void 0
		},
		connect: function () {
			if (this._ey)
				return !1;
			if (!this[Uc] || !this.$to)
				return !1;
			if (this._ey = !0, this[Uc] == this.$to)
				return void this.$from._ie(this);
			je(this.$to, this),
			Pe(this[Uc], this),
			Ee(this[Uc], this, this.$to);
			var t = this.fromAgent,
			i = this[Rc];
			if (t != i) {
				var n;
				this.$from._eu && (pe(t, this, i), n = !0),
				this.$to._eu && (Te(i, this, t), n = !0),
				n && Ee(t, this, i)
			}
		},
		disconnect: function () {
			if (!this._ey)
				return !1;
			if (this._ey = !1, this[Uc] == this.$to)
				return void this[Uc]._myn(this);
			De(this[Uc], this),
			Ne(this.$to, this),
			xe(this[Uc], this, this.$to);
			var t = this.fromAgent,
			i = this[Rc];
			if (t != i) {
				var n;
				this[Uc]._eu && (we(t, this, i), n = !0),
				this.$to._eu && (Oe(i, this, t), n = !0),
				n && xe(t, this, i)
			}
		},
		isConnected: function () {
			return this._ey
		},
		isInvalid: function () {
			return !this.$from || !this.$to
		},
		isLooped: function () {
			return this.$from == this.$to
		},
		getEdgeBundle: function (t) {
			return t ? this._2c() : this.isLooped() ? this.$from._3u : this.$from.getEdgeBundle(this.$to)
		},
		hasEdgeBundle: function () {
			var t = this.getEdgeBundle(!0);
			return t && t[kO][Wr] > 1
		},
		_2c: function () {
			var t = this.fromAgent,
			i = this.toAgent;
			return t == i ? this[Uc]._eu || this.$to._eu ? null : this[Uc]._3u : this[Dc].getEdgeBundle(this.toAgent)
		},
		_9l: null,
		hasPathSegments: function () {
			return this._9l && !this._9l[Uf]()
		},
		isBundleEnabled: function () {
			return this.bundleEnabled && !this.hasPathSegments()
		},
		firePathChange: function (t) {
			this[dh](new dH(this, SO, t))
		},
		addPathSegment: function (t, i, n) {
			var e = new Hq(i || Bq, t);
			this._9l || (this._9l = new XG),
			this._9l.add(e, n),
			this[AO](e)
		},
		addPathSegement: function () {
			return aq.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'),
			this[CO][rh](this, arguments)
		},
		removePathSegmentByIndex: function (t) {
			if (!this._9l)
				return !1;
			var i = this._9l.getByIndex(t);
			i && (this._9l[Mh](i), this[AO](i))
		},
		removePathSegment: function (t) {
			return this._9l ? (this._9l[Mh](t), void this[AO](t)) : !1
		},
		movePathSegment: function (t, i, n) {
			if (!this._9l)
				return !1;
			if (t = t || 0, i = i || 0, aq.isNumber(n)) {
				var e = this._9l[Gd](n);
				return e ? (e[Ny](t, i), void this[AO]()) : !1
			}
			l(function (n) {
				n[Ny](t, i)
			}),
			this[AO]()
		},
		move: function (t, i) {
			return this._9l ? (this._9l.forEach(function (n) {
					n[Ny](t, i)
				}, this), void this[AO]()) : !1
		},
		validateEdgeBundle: function () {}
	},
	p(dU, _U),
	Z(dU[hh], {
		pathSegments: {
			get: function () {
				return this._9l
			},
			set: function (t) {
				aq[Ch](t) && (t = new XG(t)),
				this._9l = t,
				this[AO]()
			}
		},
		from: {
			get: function () {
				return this[Uc]
			},
			set: function (t) {
				if (this[Uc] != t) {
					var i = new dH(this, Nc, t, this[Uc]);
					this.beforeEvent(i) !== !1 && (this.disconnect(), this[Uc] = t, this.connect(), this.onEvent(i))
				}
			}
		},
		to: {
			get: function () {
				return this.$to
			},
			set: function (t) {
				if (this.$to != t) {
					var i = new dH(this, RO, t, this.$to);
					this.beforeEvent(i) !== !1 && (this[LO](), this.$to = t, this[PO](), this[dh](i))
				}
			}
		},
		fromAgent: {
			get: function () {
				return this[Uc] ? this[Uc]._eu || this[Uc] : null
			}
		},
		toAgent: {
			get: function () {
				return this.$to ? this.$to._eu || this.$to : null
			}
		}
	}),
	A(dU[hh], [Zu, {
				name: DO,
				value: !0
			}, i_]);
	var lU = function (t, i, n) {
		2 == arguments[Wr] && j(t) && (n = i, i = t, t = null),
		this.id = ++AG,
		this[sv] = {},
		this._jm = {},
		t && (this.$name = t),
		this[jO] = NO,
		this[BO] = eH[ml],
		this.$location = {
			x: i || 0,
			y: n || 0
		},
		this[Pc] = {}
	};
	lU[hh] = {
		$uiClass: ms,
		_eu: null,
		forEachEdge: function (t, i, n) {
			return !n && this._km && this._km[lc](t, i) === !1 ? !1 : $e(this, t, i)
		},
		forEachOutEdge: function (t, i) {
			return ze(this, t, i)
		},
		forEachInEdge: function (t, i) {
			return Fe(this, t, i)
		},
		getEdges: function () {
			var t = [];
			return this[Yc](function (i) {
				t[nh](i)
			}),
			t
		},
		_ia: null,
		_fr: null,
		_j9: null,
		_ib: null,
		_mzo: 0,
		_8y: 0,
		hasInEdge: function () {
			return null != this._ia
		},
		hasOutEdge: function () {
			return null != this._fr
		},
		hasEdge: function () {
			return null != this._ia || null != this._fr || this[$O]()
		},
		linkedWith: function (t) {
			return t[Nc] == this || t.to == this || t[Dc] == this || t.toAgent == this
		},
		hasEdgeWith: function (t) {
			var i = this.getEdgeBundle(t);
			return i && i[kO].length > 0
		},
		_km: null,
		_3u: null,
		hasLoops: function () {
			return this._km && this._km[Wr] > 0
		},
		_ie: function (t) {
			return this._km || (this._km = new XG, this._3u = new LW(this, this, this._km)),
			this._3u._i9(t)
		},
		_myn: function (t) {
			return this._3u ? this._3u._d8(t) : void 0
		},
		getEdgeBundle: function (t) {
			return t == this ? this._3u : this[Pc][t.id] || t[Pc][this.id]
		},
		_6j: function () {
			return this._8x && this._8x[Wr]
		},
		_54: function () {
			return this._7r && this._7r[Wr]
		},
		_98: function () {
			return this._6j() || this._54()
		},
		_7r: null,
		_8x: null,
		_my3: function () {
			var t = this._eu,
			i = me(this);
			if (t != i) {
				var n = Be(this);
				this._94(i),
				n.forEach(function (t) {
					var i = t[Dc],
					n = t[Rc],
					t = t.edge,
					e = t.$from._eu,
					s = t.$to._eu;
					i != n && (i && we(i, t, n || t.$to), n && Oe(n, t, i || t[Uc])),
					e != s && (e && pe(e, t, s || t.$to), s && Te(s, t, e || t[Uc]), Ee(e || t.$from, t, s || t.$to))
				}, this)
			}
		},
		onParentChanged: function () {
			aq[zO](this, lU, FO, arguments),
			this[GO]()
		},
		_7x: null,
		_$v: function () {
			var t;
			if (this._3x ? t = null : (t = this._eu, t || this._he !== !1 || (t = this)), this._7x == t)
				return !1;
			if (this._7x = t, this._fm && this._fm._jc.length)
				for (var i, n = this._fm._jc, e = 0, s = n[Wr]; s > e; e++)
					i = n[e], i instanceof lU && i._94(t)
		},
		setLocation: function (t, i) {
			if (this.$location && this[HO].x == t && this[HO].y == i)
				return !1;
			var n;
			n = this[HO] ? {
				x: this[HO].x,
				y: this[HO].y
			}
			 : this[HO];
			var e = new dH(this, qO, n, {
					x: t,
					y: i
				});
			return this[_h](e) === !1 ? !1 : (this.$location ? (this[HO].x = t, this[HO].y = i) : this[HO] = new ZG(t, i), this[dh](e), !0)
		},
		_f0: null,
		addFollower: function (t) {
			return null == t ? !1 : t.host = this
		},
		removeFollower: function (t) {
			return this._f0 && this._f0[s_](t) ? t[YO] = null : !1
		},
		hasFollowers: function () {
			return this._f0 && !this._f0.isEmpty()
		},
		toFollowers: function () {
			return this[$c]() ? this._f0.toDatas() : null
		},
		clearFollowers: function () {
			this[$c]() && (this[UO](), l(this[UO](), function (t) {
					t[YO] = null
				}))
		},
		getFollowerIndex: function (t) {
			return this._f0 && this._f0[s_](t) ? this._f0[eh](t) : -1
		},
		setFollowerIndex: function (t, i) {
			return this._f0 && this._f0.contains(t) ? void this._f0[xv](t, i) : -1
		},
		getFollowerCount: function () {
			return this._f0 ? this._f0[Wr] : 0
		},
		_92: function () {
			return this._f0 ? this._f0 : (this._f0 = new XG, this._f0)
		},
		isFollow: function (t) {
			if (!t || !this[WO])
				return !1;
			for (var i = this._host; i; ) {
				if (i == t)
					return !0;
				i = i[WO]
			}
			return !1
		},
		_94: function (t) {
			return t == this._eu ? !1 : (this._eu = t, this[XT](), void this._$v())
		},
		type: XO
	},
	p(lU, _U),
	Z(lU[hh], {
		loops: {
			get: function () {
				return this._km
			}
		},
		edgeCount: {
			get: function () {
				return this._mzo + this._8y
			}
		},
		agentNode: {
			get: function () {
				return this._eu || this
			}
		},
		host: {
			set: function (t) {
				if (this == t || t == this[WO])
					return !1;
				var i = new dH(this, YO, this[WO], t);
				if (!1 === this.beforeEvent(i))
					return !1;
				var n = null,
				e = null,
				s = this[WO];
				if (null != t && (n = new dH(t, VO, null, this), !1 === t[_h](n)))
					return !1;
				if (null != s && (e = new dH(s, KO, null, this), !1 === s.beforeEvent(e)))
					return !1;
				if (this[WO] = t, null != t) {
					var r = t._92();
					r.add(this)
				}
				if (null != s) {
					var r = s._92();
					r[Mh](this)
				}
				return this[dh](i),
				null != t && t[dh](n),
				null != s && s[dh](e),
				!0
			},
			get: function () {
				return this[WO]
			}
		}
	}),
	A(lU[hh], [qO, Jw, Qm, zo, ZO]),
	Z(lU.prototype, {
		x: {
			get: function () {
				return this[qO].x
			},
			set: function (t) {
				t != this[qO].x && (this[qO] = new ZG(t, this[qO].y))
			}
		},
		y: {
			get: function () {
				return this[qO].y
			},
			set: function (t) {
				t != this.location.y && (this[qO] = new ZG(this[qO].x, t))
			}
		}
	});
	var vU = function (t, i) {
		t instanceof Yq && (i = t, t = n),
		w(this, vU, [t]),
		this.path = i || new Yq,
		this[ZO] = null,
		this[nO] = ur,
		WG[JO] || (WG.SHAPENODE_STYLES = {}, WG.SHAPENODE_STYLES[EU.ARROW_TO] = !1),
		this[QO](WG[JO])
	};
	vU[hh] = {
		$uiClass: ur,
		type: tI,
		moveTo: function (t, i) {
			this.path.moveTo(t, i),
			this[AO]()
		},
		lineTo: function (t, i) {
			this[iI][Xc](t, i),
			this[AO]()
		},
		quadTo: function (t, i, n, e) {
			this[iI].quadTo(t, i, n, e),
			this.firePathChange()
		},
		curveTo: function (t, i, n, e, s, r) {
			this[iI][Kc](t, i, n, e, s, r),
			this[AO]()
		},
		arcTo: function (t, i, n, e, s) {
			this[iI][nI](t, i, n, e, s),
			this[AO]()
		},
		closePath: function () {
			this[iI].closePath(),
			this.firePathChange()
		},
		clear: function () {
			this[iI].clear(),
			this[AO]()
		},
		removePathSegmentByIndex: function (t) {
			this[iI][eI](t) !== !1 && this.firePathChange()
		},
		firePathChange: function () {
			this[iI]._66 = !0,
			this.onEvent(new dH(this, SO))
		},
		addPathSegment: function (t, i, n) {
			this[iI].add(new Hq(i || Bq, t), n),
			this[AO]()
		}
	},
	p(vU, lU),
	Z(vU[hh], {
		path: {
			get: function () {
				return this[Qm]
			},
			set: function (t) {
				this[Qm] = t
			}
		},
		pathSegments: {
			get: function () {
				return this[iI].segments
			},
			set: function (t) {
				this[iI].segments = t || [],
				this[AO]()
			}
		},
		length: {
			get: function () {
				return this[iI][Wr]
			}
		}
	}),
	aq[sI] = vU;
	var bU = {
		_kb: {},
		register: function (t, i) {
			bU._kb[t] = i
		},
		getShape: function (t, i, e, s, r, h) {
			s === n && (s = i, r = e, i = 0, e = 0),
			s || (s = 50),
			r || (r = 50);
			var a = bU._kb[t];
			return a ? a[rI]instanceof Function ? a.generator(i, e, s, r, h) : a : void 0
		},
		getRect: function (t, i, n, e, s, r, h) {
			return t instanceof Object && ro in t && (i = t.y, n = t[ro], e = t[Wa], s = t.rx, r = t.ry, h = t[iI], t = t.x),
			Ge(h || new Yq, t, i, n, e, s, r)
		},
		getAllShapes: function (t, i, n, e, s) {
			var r = {};
			for (var h in bU._kb) {
				var a = bU.getShape(h, t, i, n, e, s);
				a && (r[h] = a)
			}
			return r
		},
		createRegularShape: function (t, i, n, e, s) {
			return Ve(t, i, n, e, s)
		}
	};
	os(),
	fs[hh] = {
		type: hI
	},
	p(fs, vU),
	aq.Bus = fs,
	cs.prototype = {
		_gn: function (t) {
			var i,
			n = t._jk;
			i = n ? n._fm : this[Ev];
			var e = i[eh](t);
			if (0 > e)
				throw new Error(kv + t + "' not exist in the box");
			for (; e >= 0; ) {
				if (0 == e)
					return n instanceof lU ? n : null;
				e -= 1;
				var r = i[Gd](e);
				if (r = s(r))
					return r
			}
			return null
		},
		forEachNode: function (t, i) {
			this.forEach(function (n) {
				return n instanceof lU && t.call(i, n) === !1 ? !1 : void 0
			})
		},
		_35: null
	},
	p(cs, OH),
	Z(cs[hh], {
		propertyChangeDispatcher: {
			get: function () {
				return this._$r
			}
		},
		currentSubNetwork: {
			get: function () {
				return this._35
			},
			set: function (t) {
				if (t && !t[u_] && (t = null), this._35 != t) {
					var i = this._35;
					this._35 = t,
					this._$r[dh](new dH(this, aI, t, i))
				}
			}
		}
	}),
	WG.GROUP_TYPE = oq[oI],
	WG[fI] = 5,
	WG[cI] = !0,
	WG.GROUP_MIN_SIZE = {
		width: 60,
		height: 60
	};
	var yU = function (t, i, e) {
		w(this, yU, arguments),
		(i === n || e === n) && (this[HO][uI] = !0),
		this[_I] = WG[dI],
		this[Sf] = WG.GROUP_PADDING,
		this[jO] = Xq[lI],
		this[vI] = WG[bI],
		this[eO] = WG.GROUP_EXPANDED
	};
	yU[hh] = {
		type: yI,
		$uiClass: hr,
		_n00: function () {
			return !this._he && !this._eu
		},
		forEachOutEdge: function (t, i, n) {
			return ze(this, t, i) === !1 ? !1 : !n && this[gI]() && this._7r ? this._7r[lc](t, i) : void 0
		},
		forEachInEdge: function (t, i, n) {
			return Fe(this, t, i) === !1 ? !1 : !n && this[gI]() && this._8x ? this._8x[lc](t, i) : void 0
		},
		forEachEdge: function (t, i, n) {
			return T(this, yU, Yc, arguments) === !1 ? !1 : n || n || !this[gI]() ? void 0 : this._8x && this._8x.forEach(t, i) === !1 ? !1 : this._7r ? this._7r[lc](t, i) : void 0
		},
		hasInEdge: function (t) {
			return t ? null != this._ia : null != this._ia || this._6j()
		},
		hasOutEdge: function (t) {
			return t ? null != this._fr : null != this._fr || this._54()
		},
		hasEdge: function (t) {
			return t ? null != this._ia || null != this._fr : null != this._ia || null != this._fr || this._98()
		}
	},
	p(yU, lU),
	Z(yU.prototype, {
		expanded: {
			get: function () {
				return this._he
			},
			set: function (t) {
				if (this._he != t) {
					var i = new dH(this, eO, t, this._he);
					this[_h](i) !== !1 && (this._he = t, this._$v(), this[dh](i), this._eu || us[Xr](this))
				}
			}
		}
	}),
	A(yU[hh], [mI, EI, xI, pI]),
	aq[wI] = yU,
	_s[hh][Do] = TI,
	p(_s, lU),
	aq[OI] = _s;
	var gU = function (t) {
		this._jg = new iH,
		this._7z = new iH,
		this._fo = new iH,
		this.id = ++AG,
		t && (this[Lo] = t)
	};
	gU[hh] = {
		invalidate: function () {
			this[II]()
		},
		_18: !0,
		_jg: null,
		_7z: null,
		_fo: null,
		_n0e: !1,
		_j5: 1,
		_j7: 1,
		_hr: !0,
		_7y: 0,
		_61: 0,
		_jk: null,
		_n0j: null,
		borderColor: MI,
		borderLineDash: null,
		borderLineDashOffset: null,
		syncSelection: !0,
		syncSelectionStyles: !0,
		_15: function () {
			this[kI] = ci(this[ZO], this._7y, this._61)
		},
		setMeasuredBounds: function (t, i, n, e) {
			return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t.width),
			this._jg[ro] == t && this._jg.height == i && this._jg.x == n && this._jg.y == e ? !1 : void this._jg.set(n || 0, e || 0, t || 0, i || 0)
		},
		initialize: function () {},
		measure: function () {},
		draw: function () {},
		_7u: function (t, i, n) {
			n[SE] == oq[lm] ? (t[z_] = n[pE], t[qm] = n[wE] * i, t.shadowOffsetX = (n[TE] || 0) * i, t.shadowOffsetY = (n[OE] || 0) * i) : this._1r(t, i, n)
		},
		_1r: function (t, i, n) {
			var e = n.selectionBorder || 0;
			n[SI] && (t.fillStyle = n.selectionBackgroundColor, t[AI](this._7z.x - e / 2, this._7z.y - e / 2, this._7z[ro] + e, this._7z.height + e)),
			t[B_] = n[pE],
			t.lineWidth = e,
			t[CI](this._7z.x - e / 2, this._7z.y - e / 2, this._7z[ro] + e, this._7z[Wa] + e)
		},
		_k0: function (t, i, n, e) {
			if (!this._hr)
				return !1;
			if (this[RI] || (n = this.selected), (n && !this[LI] || !e) && (e = this), t.save(), 1 != this[PI] && (t.globalAlpha = this.$alpha), t.translate(this.$x, this.$y), this.$rotatable && this[Of] && t.rotate(this.$_hostRotate), (this[DI] || this[jI]) && t[uo](this[DI], this.offsetY), this[xf] && t[zo](this[xf]), this[mf] && this[Ef] && t[uo](-this._n0j.x, -this[Ef].y), this[z_] && (t.shadowColor = this[z_], t[qm] = this[qm] * i, t[Ym] = this[Ym] * i, t[Um] = this[Um] * i), n && e.selectionType == oq[NI] && (this._1r(t, i, e), n = !1), this._$q() && this[Pf] && !this[Pf][BI]) {
				this[Pf][Oo]();
				var s = {
					lineWidth: this[Af],
					strokeStyle: this[$I],
					lineDash: this[zI],
					lineDashOffset: this[FI],
					fillColor: this.$backgroundColor,
					fillGradient: this[GI],
					lineCap: am,
					lineJoin: So
				};
				this[Pf][Wo](t, i, s, n, e),
				n = !1,
				t.shadowColor = RE
			}
			t[$E](),
			this[Wo](t, i, n, e),
			t.restore()
		},
		invalidateData: function () {
			this[HI] = !0,
			this.$invalidateSize = !0,
			this._18 = !0
		},
		invalidateSize: function () {
			this.$invalidateSize = !0,
			this._18 = !0
		},
		invalidateRender: function () {
			this._18 = !0
		},
		_4x: function () {},
		_$q: function () {
			return this.$backgroundColor || this.$backgroundGradient || this[Af]
		},
		_45: function () {
			return this[qI] || this[YI]
		},
		doValidate: function () {
			return this[HI] && (this[HI] = !1, this[UI]() !== !1 && (this[If] = !0)),
			this[If] && this[WI] && this[WI](),
			Un.call(this) ? (this[Wf] = !0, this[XI] && this[XI](), !0) : this[VI] ? (this[Wf] = !0, this[VI] = !1, !0) : void 0
		},
		validate: function () {
			var t = this._hr;
			return this[KI] && (this[KI] = !1, this._hr = this.$visible, !this._hr || (this.$data || this[ZI]) && this._4x() !== !1 || (this._hr = !1)),
			this._hr ? (this._18 = !1, this[bu] || (this[JI](), this[bu] = !0), this.doValidate()) : t != this._hr
		},
		_i2: function (t, i) {
			return t -= this.$x,
			i -= this.$y,
			Yn[Xr](this, {
				x: t,
				y: i
			})
		},
		hitTest: function (t, i, n, e) {
			if (t -= this.$x, i -= this.$y, !this._fo[ko](t, i, n))
				return !1;
			var s = Yn[Xr](this, {
					x: t,
					y: i
				});
			return t = s.x,
			i = s.y,
			!e && this._$q() && this[Pf] && this[Pf][r_](t, i, n, !1, this[Af], this.$backgroundColor || this[YI]) ? !0 : this.doHitTest(t, i, n)
		},
		doHitTest: function (t, i, n) {
			return this._jg.intersectsPoint(t, i, n)
		},
		hitTestByBounds: function (t, i, n, e) {
			var s = this._i2(t, i);
			return !e && this._$q() && this._lwShape && this._lwShape[r_](t, i, n, !1, this[Af], this[qI] || this[YI]) ? !0 : this._jg[ko](s.x, s.y, n)
		},
		onDataChanged: function () {
			this[HI] = !0,
			this._18 = !0,
			this[KI] = !0
		},
		getBounds: function () {
			var t = this._fo[ih]();
			return t[wm](this.x, this.y),
			this.parent && (this[Cc][zo] && Ci(t, this.parent[zo], t), t[wm](this[Cc].x || 0, this[Cc].y || 0)),
			t
		},
		destroy: function () {
			this[ip] = !0
		},
		_ds: !1
	},
	Z(gU[hh], {
		originalBounds: {
			get: function () {
				return this._jg
			}
		},
		data: {
			get: function () {
				return this[qf]
			},
			set: function (t) {
				if (this[qf] != t) {
					var i = this[qf];
					this[qf] = t,
					this.onDataChanged(t, i)
				}
			}
		},
		parent: {
			get: function () {
				return this._jk
			}
		},
		showOnTop: {
			get: function () {
				return this._ds
			},
			set: function (t) {
				t != this._ds && (this._ds = t, this._18 = !0, this._jk && this._jk[QI] && this._jk[QI](this))
			}
		}
	}),
	ls(gU[hh], {
		visible: {
			value: !0,
			validateFlags: [tM, iM]
		},
		showEmpty: {
			validateFlags: [tM]
		},
		anchorPosition: {
			value: eH.CENTER_MIDDLE,
			validateFlags: [nM, iM]
		},
		position: {
			value: eH[ml],
			validateFlags: [iM]
		},
		offsetX: {
			value: 0,
			validateFlags: [iM]
		},
		offsetY: {
			value: 0,
			validateFlags: [iM]
		},
		layoutByAnchorPoint: {
			value: !0,
			validateFlags: [Vy, nM, iM]
		},
		padding: {
			value: 0,
			validateFlags: [Vy]
		},
		border: {
			value: 0,
			validateFlags: [Vy]
		},
		borderRadius: {
			value: WG[gm]
		},
		showPointer: {
			value: !1,
			validateFlags: [Vy]
		},
		pointerX: {
			value: 0,
			validateFlags: [Vy]
		},
		pointerY: {
			value: 0,
			validateFlags: [Vy]
		},
		pointerWidth: {
			value: WG.POINTER_WIDTH
		},
		backgroundColor: {
			validateFlags: [Vy]
		},
		backgroundGradient: {
			validateFlags: [Vy, eM]
		},
		selected: {
			value: !1,
			validateFlags: [Vy]
		},
		selectionBorder: {
			value: WG[bm],
			validateFlags: [Vy]
		},
		selectionShadowBlur: {
			value: WG[ym],
			validateFlags: [Vy]
		},
		selectionColor: {
			value: WG[sM],
			validateFlags: [Vy]
		},
		selectionType: {
			value: WG[dm],
			validateFlags: [Vy]
		},
		selectionShadowOffsetX: {
			value: 0,
			validateFlags: [Vy]
		},
		selectionShadowOffsetY: {
			value: 0,
			validateFlags: [Vy]
		},
		shadowBlur: {
			value: 0,
			validateFlags: [Vy]
		},
		shadowColor: {
			validateFlags: [Vy]
		},
		shadowOffsetX: {
			value: 0,
			validateFlags: [Vy]
		},
		shadowOffsetY: {
			value: 0,
			validateFlags: [Vy]
		},
		renderColorBlendMode: {},
		renderColor: {},
		x: {
			value: 0,
			validateFlags: [iM]
		},
		y: {
			value: 0,
			validateFlags: [iM]
		},
		rotatable: {
			value: !0,
			validateFlags: [rM, Vy]
		},
		rotate: {
			value: 0,
			validateFlags: [rM, Vy]
		},
		_hostRotate: {
			validateFlags: [rM]
		},
		lineWidth: {
			value: 0,
			validateFlags: [sg]
		},
		alpha: {
			value: 1
		}
	});
	var mU = [oq[xu], oq[wu], oq.PROPERTY_TYPE_CLIENT];
	bs.prototype = {
		removeBinding: function (t) {
			for (var i = mU.length; --i >= 0; ) {
				var n = mU[i],
				e = this[n];
				for (var s in e) {
					var r = e[s];
					Array.isArray(r) ? (v(r, function (i) {
							return i[Y_] == t
						}, this), r[Wr] || delete e[s]) : r[Y_] == t && delete e[s]
				}
			}
		},
		_1q: function (t, i, n) {
			if (!n && (n = this[i[rv] || oq[xu]], !n))
				return !1;
			var e = n[t];
			e ? (Array.isArray(e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
		},
		_29: function (t, i, n, e, s, r) {
			t = t || oq[xu];
			var h = this[t];
			if (!h)
				return !1;
			var a = {
				property: i,
				propertyType: t,
				bindingProperty: e,
				target: n,
				callback: s,
				invalidateSize: r
			};
			this._1q(i, a, h)
		},
		onBindingPropertyChange: function (t, i, n, e) {
			var s = this[n || oq[xu]];
			if (!s)
				return !1;
			var r = s[i];
			return r ? (t._18 = !0, vs(t, r, n, e), !0) : !1
		},
		initBindingProperties: function (t, i) {
			for (var e = mU.length; --e >= 0; ) {
				var s = mU[e],
				r = this[s];
				for (var h in r) {
					var a = r[h];
					if (a.bindingProperty) {
						var o = a.target;
						if (o) {
							if (!(o instanceof gU || (o = t[o])))
								continue
						} else
							o = t;
						var f;
						f = i === !1 ? t.getProperty(a[hM], s) : s == oq[wu] ? t[Ku].getStyle(t[qf], a[hM]) : t[qf][a[hM]],
						f !== n && (o[a[mu]] = f)
					}
				}
			}
		}
	};
	var EU = {};
	EU[sM] = aM,
	EU.SELECTION_BORDER = oM,
	EU[ym] = "selection.shadow.blur",
	EU.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x",
	EU.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y",
	EU[dm] = fM,
	EU.RENDER_COLOR = cM,
	EU.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode",
	EU.ALPHA = uM,
	EU.SHADOW_BLUR = _M,
	EU.SHADOW_COLOR = dM,
	EU.SHADOW_OFFSET_X = lM,
	EU.SHADOW_OFFSET_Y = vM,
	EU.SHAPE_STROKE = bM,
	EU[yM] = gM,
	EU.SHAPE_LINE_FILL_COLOR = "shape.stroke.fill.color",
	EU[mM] = EM,
	EU[xM] = "shape.line.dash.offset",
	EU[pM] = wM,
	EU[TM] = OM,
	EU.SHAPE_OUTLINE = IM,
	EU[MM] = kM,
	EU[SM] = AM,
	EU.BACKGROUND_COLOR = CM,
	EU[RM] = LM,
	EU[PM] = DM,
	EU.BORDER_COLOR = jM,
	EU.BORDER_LINE_DASH = NM,
	EU.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset",
	EU[gm] = BM,
	EU[$M] = xI,
	EU.LINE_CAP = zM,
	EU[FM] = GM,
	EU[HM] = qM,
	EU.LINE_DASH_JOIN = YM,
	EU[UM] = "image.background.color",
	EU[WM] = "image.background.gradient",
	EU[XM] = VM,
	EU.IMAGE_BORDER_STYLE = EU.IMAGE_BORDER_COLOR = KM,
	EU.IMAGE_BORDER_LINE_DASH = "image.border.line.dash",
	EU[ZM] = "image.border.line.dash.offset",
	EU.IMAGE_RADIUS = EU[JM] = QM,
	EU[tk] = ik,
	EU.IMAGE_Z_INDEX = nk,
	EU[ek] = sk,
	EU.IMAGE_ALPHA = rk,
	EU.LABEL_ROTATE = hk,
	EU.LABEL_POSITION = ak,
	EU[ok] = fk,
	EU[ck] = "label.anchor.position",
	EU.LABEL_COLOR = uk,
	EU[_k] = dk,
	EU[lk] = vk,
	EU[bk] = yk,
	EU.LABEL_PADDING = gk,
	EU.LABEL_POINTER_WIDTH = mk,
	EU[Ek] = xk,
	EU.LABEL_RADIUS = pk,
	EU.LABEL_OFFSET_X = wk,
	EU[Tk] = Ok,
	EU[Ik] = Mk,
	EU[kk] = Sk,
	EU[Ak] = Ck,
	EU[Rk] = Lk,
	EU[Pk] = "label.background.color",
	EU[Dk] = "label.background.gradient",
	EU[jk] = Nk,
	EU[Bk] = $k,
	EU[zk] = Fk,
	EU[Gk] = "label.shadow.offset.x",
	EU.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y",
	EU[Hk] = qk,
	EU.LABEL_ON_TOP = Yk,
	EU.GROUP_BACKGROUND_COLOR = "group.background.color",
	EU.GROUP_BACKGROUND_GRADIENT = "group.background.gradient",
	EU[Uk] = Wk,
	EU[Xk] = Vk,
	EU[Kk] = "group.stroke.line.dash",
	EU[Zk] = "group.stroke.line.dash.offset",
	EU[Jk] = "edge.bundle.label.rotate",
	EU.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position",
	EU[Qk] = "edge.bundle.label.anchor.position",
	EU[tS] = "edge.bundle.label.color",
	EU[iS] = "edge.bundle.label.font.size",
	EU[nS] = "edge.bundle.label.font.family",
	EU.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style",
	EU.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding",
	EU.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width",
	EU.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer",
	EU[eS] = "edge.bundle.label.radius",
	EU[sS] = "edge.bundle.label.offset.x",
	EU[rS] = "edge.bundle.label.offset.y",
	EU[hS] = "edge.bundle.label.border",
	EU.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color",
	EU[aS] = "edge.bundle.label.background.color",
	EU[oS] = "edge.bundle.label.background.gradient",
	EU[fS] = "edge.bundle.label.rotatable",
	EU[cS] = uS,
	EU.EDGE_COLOR = _S,
	EU[dS] = lS,
	EU[vS] = bS,
	EU[yS] = gS,
	EU[mS] = "edge.line.dash.offset",
	EU[ES] = xS,
	EU[Qu] = pS,
	EU[wS] = TS,
	EU[OS] = IS,
	EU[o_] = MS,
	EU[Bu] = kS,
	EU[qu] = SS,
	EU[Pu] = "edge.split.by.percent",
	EU[Iu] = AS,
	EU[CS] = RS,
	EU[LS] = PS,
	EU.EDGE_CORNER_RADIUS = DS,
	EU[jS] = NS,
	EU[BS] = $S,
	EU.ARROW_FROM = zS,
	EU[FS] = GS,
	EU.ARROW_FROM_OFFSET = HS,
	EU[qS] = YS,
	EU[US] = "arrow.from.stroke.style",
	EU.ARROW_FROM_OUTLINE = WS,
	EU[XS] = "arrow.from.outline.style",
	EU.ARROW_FROM_LINE_DASH = VS,
	EU[KS] = "arrow.from.line.dash.offset",
	EU[ZS] = "arrow.from.fill.color",
	EU[JS] = "arrow.from.fill.gradient",
	EU[QS] = tA,
	EU[iA] = nA,
	EU.ARROW_TO = eA,
	EU[sA] = rA,
	EU[hA] = aA,
	EU[oA] = fA,
	EU[cA] = "arrow.to.stroke.style",
	EU.ARROW_TO_OUTLINE = uA,
	EU.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",
	EU[_A] = dA,
	EU[lA] = "arrow.to.line.dash.offset",
	EU[vA] = bA,
	EU.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",
	EU[yA] = gA,
	EU.ARROW_TO_LINE_JOIN = mA;
	var xU = new bs,
	pU = oq[xu],
	wU = oq.PROPERTY_TYPE_STYLE,
	TU = !1;
	xU._29(wU, EU[dm], null, SE),
	xU._29(wU, EU[bm], null, ME),
	xU._29(wU, EU[ym], null, wE),
	xU._29(wU, EU[sM], null, pE),
	xU._29(wU, EU.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"),
	xU._29(wU, EU[EA], null, "selectionShadowOffsetY"),
	xU._29(pU, lh, Mp, Lo),
	xU._29(wU, EU[ok], Mp, OT),
	xU._29(wU, EU[xA], Mp, Gf),
	xU._29(wU, EU[ck], Mp, ZO),
	xU._29(wU, EU[pA], Mp, wA),
	xU._29(wU, EU.LABEL_FONT_SIZE, Mp, Q_),
	xU._29(wU, EU.LABEL_BORDER, Mp, Eg),
	xU._29(wU, EU.LABEL_BORDER_STYLE, Mp, $I),
	xU._29(wU, EU[Pk], Mp, TA),
	xU._29(wU, EU[OA], Mp, IA),
	TU || (xU._29(wU, EU[MA], null, qm), xU._29(wU, EU.SHADOW_COLOR, null, z_), xU._29(wU, EU[kA], null, Ym), xU._29(wU, EU[SA], null, Um), xU._29(wU, EU[lk], Mp, td), xU._29(wU, EU[bk], Mp, J_), xU._29(wU, EU[kk], Mp, AA), xU._29(wU, EU[CA], Mp, zo), xU._29(wU, EU.LABEL_PADDING, Mp, xI), xU._29(wU, EU[RA], Mp, LA), xU._29(wU, EU[Ek], Mp, PA), xU._29(wU, EU[DA], Mp, jA), xU._29(wU, EU[NA], Mp, DI), xU._29(wU, EU[Tk], Mp, jI), xU._29(wU, EU[jk], Mp, BA), xU._29(wU, EU.LABEL_BACKGROUND_GRADIENT, Mp, Lf), xU._29(wU, EU[Ik], Mp, Jw), xU._29(wU, EU[Bk], Mp, qm), xU._29(wU, EU.LABEL_SHADOW_COLOR, Mp, z_), xU._29(wU, EU[Gk], Mp, Ym), xU._29(wU, EU[$A], Mp, Um), xU._29(wU, EU[Hk], Mp, aT), xU._29(wU, EU.RENDER_COLOR, null, Xm), xU._29(wU, EU[zA], null, FA), xU._29(wU, EU[GA], null, uM));
	var OU = new bs;
	OU._29(pU, qO),
	OU._29(pU, ZO, null, HA),
	OU._29(pU, zo, null, zo),
	TU || (OU._29(wU, EU.BACKGROUND_COLOR, null, TA), OU._29(wU, EU[RM], null, Lf), OU._29(wU, EU[$M], null, xI), OU._29(wU, EU.BORDER, null, Eg), OU._29(wU, EU[gm], null, jA), OU._29(wU, EU.BORDER_COLOR, null, $I), OU._29(wU, EU.BORDER_LINE_DASH, null, zI), OU._29(wU, EU.BORDER_LINE_DASH_OFFSET, null, FI)),
	OU._29(pU, Qm, Qm, Lo, qA),
	OU._29(pU, Jw, Qm, Jw),
	OU._29(wU, EU.SHAPE_STROKE, Qm, Zo),
	OU._29(wU, EU[yM], Qm, B_),
	OU._29(wU, EU[pM], Qm, LE),
	OU._29(wU, EU.LAYOUT_BY_PATH, Qm, Hf),
	TU || (OU._29(wU, EU[ek], Qm, YA), OU._29(wU, EU[UA], Qm, CE), OU._29(wU, EU.SHAPE_OUTLINE_STYLE, Qm, AE), OU._29(wU, EU[TM], Qm, PE), OU._29(wU, EU.SHAPE_LINE_DASH, Qm, Xf), OU._29(wU, EU[xM], Qm, ic), OU._29(wU, EU.LINE_CAP, Qm, kE), OU._29(wU, EU.LINE_JOIN, Qm, N_), OU._29(wU, EU.IMAGE_BACKGROUND_COLOR, Qm, TA), OU._29(wU, EU[WM], Qm, Lf), OU._29(wU, EU[tk], Qm, xI), OU._29(wU, EU[XM], Qm, Eg), OU._29(wU, EU[JM], Qm, jA), OU._29(wU, EU[WA], Qm, $I), OU._29(wU, EU[XA], Qm, zI), OU._29(wU, EU[ZM], Qm, FI), OU._29(wU, EU[VA], Qm, aT), OU._29(wU, EU[KA], Qm, uM)),
	OU._29(pU, eO, null, null, ZA),
	OU._29(pU, u_, null, null, ZA);
	var IU = new bs;
	IU._29(pU, EI, null, null, JA),
	IU._29(pU, pI, null, null, JA),
	IU._29(pU, mI, null, null, JA),
	IU._29(pU, xI, null, null, JA),
	IU._29(wU, EU.GROUP_BACKGROUND_COLOR, QA, LE),
	IU._29(wU, EU[tC], QA, PE),
	IU._29(wU, EU.GROUP_STROKE, QA, Zo),
	IU._29(wU, EU[Xk], QA, B_),
	IU._29(wU, EU[Kk], QA, Xf),
	IU._29(wU, EU[Zk], QA, ic);
	var MU = new bs;
	MU._29(pU, Nc, QA, null, iC),
	MU._29(pU, RO, QA, null, iC),
	MU._29(pU, Zu, QA, null, iC),
	MU._29(wU, EU.EDGE_EXTEND, QA, null, iC),
	MU._29(wU, EU[cS], QA, Zo),
	MU._29(wU, EU.EDGE_COLOR, QA, B_),
	MU._29(wU, EU.ARROW_FROM, QA, nC),
	MU._29(wU, EU.ARROW_TO, QA, eC),
	TU || (MU._29(wU, EU[HM], QA, NE), MU._29(wU, EU[sC], QA, BE), MU._29(wU, EU[wS], QA, jE), MU._29(wU, EU.EDGE_FROM_AT_EDGE, null, rC, iC), MU._29(wU, EU[BS], null, hC, iC), MU._29(wU, EU[dS], QA, CE), MU._29(wU, EU[vS], QA, AE), MU._29(wU, EU.EDGE_LINE_DASH, QA, Xf), MU._29(wU, EU.EDGE_LINE_DASH_OFFSET, QA, ic), MU._29(wU, EU[qu], QA, null, iC), MU._29(wU, EU[ES], QA, null, iC), MU._29(wU, EU.EDGE_TO_OFFSET, QA, null, iC), MU._29(wU, EU[aC], QA, kE), MU._29(wU, EU[FM], QA, N_), MU._29(pU, SO, null, null, iC, !0), MU._29(pU, i_, null, null, iC, !0), MU._29(wU, EU.ARROW_FROM_SIZE, QA, oC), MU._29(wU, EU[fC], QA, cC), MU._29(wU, EU[qS], QA, uC), MU._29(wU, EU[US], QA, _C), MU._29(wU, EU.ARROW_FROM_OUTLINE, QA, dC), MU._29(wU, EU[XS], QA, "fromArrowOutlineStyle"), MU._29(wU, EU[ZS], QA, lC), MU._29(wU, EU[JS], QA, "fromArrowFillGradient"), MU._29(wU, EU[vC], QA, bC), MU._29(wU, EU[KS], QA, "fromArrowLineDashOffset"), MU._29(wU, EU[iA], QA, yC), MU._29(wU, EU.ARROW_FROM_LINE_CAP, QA, gC), MU._29(wU, EU.ARROW_TO_SIZE, QA, mC), MU._29(wU, EU[hA], QA, EC), MU._29(wU, EU[oA], QA, xC), MU._29(wU, EU[cA], QA, pC), MU._29(wU, EU[wC], QA, TC), MU._29(wU, EU[OC], QA, IC), MU._29(wU, EU.ARROW_TO_FILL_COLOR, QA, MC), MU._29(wU, EU[kC], QA, SC), MU._29(wU, EU[_A], QA, AC), MU._29(wU, EU[lA], QA, "toArrowLineDashOffset"), MU._29(wU, EU[CC], QA, RC), MU._29(wU, EU[yA], QA, LC));
	var kU = new bs;
	kU._29(wU, EU[tS], PC, wA),
	kU._29(wU, EU[DC], PC, Gf),
	kU._29(wU, EU[Qk], PC, ZO),
	kU._29(wU, EU[iS], PC, Q_),
	kU._29(wU, EU.EDGE_BUNDLE_LABEL_ROTATABLE, PC, BA),
	TU || (kU._29(wU, EU.EDGE_BUNDLE_LABEL_ROTATE, PC, zo), kU._29(wU, EU.EDGE_BUNDLE_LABEL_FONT_FAMILY, PC, td), kU._29(wU, EU[jC], PC, J_), kU._29(wU, EU.EDGE_BUNDLE_LABEL_PADDING, PC, xI), kU._29(wU, EU[NC], PC, LA), kU._29(wU, EU[BC], PC, PA), kU._29(wU, EU.EDGE_BUNDLE_LABEL_RADIUS, PC, jA), kU._29(wU, EU.EDGE_BUNDLE_LABEL_OFFSET_X, PC, DI), kU._29(wU, EU[rS], PC, jI), kU._29(wU, EU[hS], PC, Eg), kU._29(wU, EU[$C], PC, $I), kU._29(wU, EU[aS], PC, TA), kU._29(wU, EU.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, PC, Lf));
	var SU = new bs;
	SU._29(pU, qO),
	SU._29(wU, EU[zC], null, TA),
	SU._29(wU, EU[RM], null, Lf),
	SU._29(wU, EU[$M], null, xI),
	SU._29(wU, EU[PM], null, Eg),
	SU._29(wU, EU[gm], null, jA),
	SU._29(wU, EU[FC], null, $I),
	SU._29(wU, EU[GC], null, zI),
	SU._29(wU, EU[HC], null, FI),
	SU._29(pU, zo, null, zo),
	SU._29(pU, SO, null, null, qC),
	SU._29(pU, iI, Qm, Lo),
	SU._29(pU, Jw, Qm, Jw),
	SU._29(wU, EU[YC], Qm, Zo),
	SU._29(wU, EU[yM], Qm, B_),
	SU._29(wU, EU[pM], Qm, LE),
	SU._29(wU, EU.SHAPE_FILL_GRADIENT, Qm, PE),
	TU || (SU._29(wU, EU.LINE_DASH_CAP, Qm, NE), SU._29(wU, EU[sC], Qm, BE), SU._29(wU, EU[UC], Qm, jE), SU._29(wU, EU[UA], Qm, CE), SU._29(wU, EU.SHAPE_OUTLINE_STYLE, Qm, AE), SU._29(wU, EU[mM], Qm, Xf), SU._29(wU, EU[xM], Qm, ic), SU._29(wU, EU.LINE_CAP, Qm, kE), SU._29(wU, EU[FM], Qm, N_), SU._29(wU, EU[SM], Qm, Hf), SU._29(wU, EU[UM], Qm, TA), SU._29(wU, EU.IMAGE_BACKGROUND_GRADIENT, Qm, Lf), SU._29(wU, EU[tk], Qm, xI), SU._29(wU, EU.IMAGE_BORDER, Qm, Eg), SU._29(wU, EU[JM], Qm, jA), SU._29(wU, EU[WA], Qm, $I), SU._29(wU, EU[XA], Qm, zI), SU._29(wU, EU[ZM], Qm, FI), SU._29(wU, EU[WC], Qm, nC), SU._29(wU, EU[FS], Qm, oC), SU._29(wU, EU[fC], Qm, cC), SU._29(wU, EU.ARROW_FROM_STROKE, Qm, uC), SU._29(wU, EU[US], Qm, _C), SU._29(wU, EU[ZS], Qm, lC), SU._29(wU, EU.ARROW_FROM_FILL_GRADIENT, Qm, "fromArrowFillGradient"), SU._29(wU, EU[vC], Qm, bC), SU._29(wU, EU.ARROW_FROM_LINE_DASH_OFFSET, Qm, "fromArrowLineDashOffset"), SU._29(wU, EU.ARROW_FROM_LINE_JOIN, Qm, yC), SU._29(wU, EU[QS], Qm, gC), SU._29(wU, EU[sA], Qm, mC), SU._29(wU, EU[hA], Qm, EC), SU._29(wU, EU.ARROW_TO, Qm, eC), SU._29(wU, EU[oA], Qm, xC), SU._29(wU, EU.ARROW_TO_STROKE_STYLE, Qm, pC), SU._29(wU, EU[vA], Qm, MC), SU._29(wU, EU[kC], Qm, SC), SU._29(wU, EU.ARROW_TO_LINE_DASH, Qm, AC), SU._29(wU, EU[lA], Qm, "toArrowLineDashOffset"), SU._29(wU, EU[CC], Qm, RC), SU._29(wU, EU[yA], Qm, LC));
	var AU = function (t, i) {
		return t = t[aT],
		i = i[aT],
		t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
	},
	CU = function (t, i) {
		this[HT] = new iH,
		w(this, CU, arguments),
		this.id = this.$data.id,
		this[Ku] = i,
		this._fm = [],
		this._my6 = new bs
	};
	CU.prototype = {
		syncSelection: !1,
		graph: null,
		layoutByAnchorPoint: !1,
		_my6: null,
		_fm: null,
		addChild: function (t, i) {
			t._jk = this,
			i !== n ? g(this._fm, t, i) : this._fm.push(t),
			t._ds && this[QI](t),
			this.invalidateChildrenIndex(),
			this[XC](),
			this[VC] = !0
		},
		removeChild: function (t) {
			this[KC].removeBinding(t),
			t._jk = null,
			m(this._fm, t),
			this._ja && this._ja[Mh](t),
			this[XC](),
			this[VC] = !0
		},
		getProperty: function (t, i) {
			return i == oq[wu] ? this[Ku].getStyle(this[qf], t) : i == oq[pu] ? this[qf].get(t) : this[qf][t]
		},
		getStyle: function (t) {
			return this[Ku].getStyle(this[qf], t)
		},
		_$u: function (t, i, n) {
			var e = this[KC].onBindingPropertyChange(this, t, i, n);
			return xU.onBindingPropertyChange(this, t, i, n) || e
		},
		onPropertyChange: function (t) {
			if (aT == t[bd])
				return this[iO](), !0;
			if (pO == t[Do]) {
				if (Kw == t[bd])
					return this[Kw](), !0;
				var i = t[bh];
				return i && i.ui ? (tv == t[bd] ? this._97(i) : Mh == t[bd] && this[Tv](i.ui), !0) : !1
			}
			return this._$u(t[bd], t[rv] || pU, t[bh])
		},
		label: null,
		initLabel: function () {
			var t = new LU;
			t[lh] = Mp,
			this[ZC](t),
			this[Mp] = t
		},
		initialize: function () {
			this.initLabel(),
			this[qf]._myb && this.$data._myb.forEach(this._97, this),
			xU[JC](this),
			this[KC][JC](this, !1)
		},
		addBinding: function (t, i) {
			return i.property ? (i[Y_] = t, void this[KC]._1q(i[hM], i)) : !1
		},
		_fk: function (t, i) {
			var n = this[qf];
			if (!n._myb)
				return !1;
			var e = n._myb.getById(t.id);
			if (!e || !e.bindingProperties)
				return !1;
			var s = e[QC];
			if ($(s)) {
				var r = !1;
				return l(s, function (t) {
					return Lo == t[mu] ? (r = ys(n, i, t[hM], t.propertyType), !1) : void 0
				}, this),
				r
			}
			return Lo == s[mu] ? ys(n, i, s.property, s[rv]) : !1
		},
		_97: function (t) {
			var i = t.ui;
			if (i) {
				var n = t[QC];
				n && (Array.isArray(n) ? n[lc](function (t) {
						this[tR](i, t)
					}, this) : this[tR](i, n)),
				this[ZC](i)
			}
		},
		validate: function () {
			return this[bu] || (this[JI](), this._n0e = !0),
			this[iR]()
		},
		_$b: !0,
		invalidateChildrenIndex: function () {
			this._$b = !0
		},
		doValidate: function () {
			if (this._18 && (this._18 = !1, this.validateChildren() && (this[UI](), this[If] = !0), this._$b && (this._$b = !1, $G ? this._fm = d(this._fm, AU) : this._fm.sort(AU))), Un[Xr](this) && (this[Wf] = !0), this.$invalidateRotate) {
				Kq[Xr](this),
				this[HT].setByRect(this._fo);
				var t = this[nR] || 0,
				i = Math.max(this.$selectionBorder || 0, this[eR] || 0, this.$selectionShadowOffsetX || 0),
				n = Math.max(this.$shadowOffsetY || 0, this[sR] || 0),
				e = Math.max(2 * t, this[rR], this[hR]);
				e += WG[aR] || 0;
				var s = e - i,
				r = e + i,
				h = e - n,
				a = e + n;
				return 0 > s && (s = 0),
				0 > r && (r = 0),
				0 > h && (h = 0),
				0 > a && (a = 0),
				this.uiBounds[kf](h, s, a, r),
				this[XI] && this.onBoundsChanged(),
				this[oR] = !0,
				!0
			}
		},
		validateChildren: function () {
			var t = this[VC];
			this[VC] = !1;
			var i = this._mzody,
			n = this[fR];
			i && (i[cR] = this.$renderColor, i.$renderColorBlendMode = this[uR], i[_R] = this[_R], i[rR] = this.$shadowBlur, i[eR] = this[eR], i.$shadowOffsetY = this[dR]),
			this.bodyChanged = !1,
			i && i._18 && (n = i.validate() || n, i.$x = 0, i.$y = 0, i[Wf] && Kq.call(i), t = !0);
			for (var e = 0, s = this._fm[Wr]; s > e; e++) {
				var r = this._fm[e];
				if (r != i) {
					var h = r._18 && r[Oo]();
					(h || n) && r._hr && Kn(r, i, this),
					!t && h && (t = !0)
				}
			}
			return t
		},
		measure: function () {
			this._jg.clear();
			for (var t, i, n = 0, e = this._fm.length; e > n; n++)
				t = this._fm[n], t._hr && (i = t._fo, i.width <= 0 || i.height <= 0 || this._jg[hl](t.$x + i.x, t.$y + i.y, i[ro], i.height))
		},
		_ja: null,
		_n0k: function (t) {
			if (!this._ja) {
				if (!t[IA])
					return;
				return this._ja = new XG,
				this._ja.add(t)
			}
			return t.showOnTop ? this._ja.add(t) : this._ja.remove(t)
		},
		draw: function (t, i, n) {
			for (var e, s = 0, r = this._fm[Wr]; r > s; s++)
				e = this._fm[s], e._hr && !e.showOnTop && e._k0(t, i, n, this)
		},
		_95: function (t, i) {
			if (!this._hr || !this._ja || !this._ja[Wr])
				return !1;
			t[co](),
			t[uo](this.$x, this.$y),
			this.$rotatable && this[Of] && t[zo](this.$_hostRotate),
			(this[DI] || this[jI]) && t[uo](this[DI], this[jI]),
			this[xf] && t[zo](this[xf]),
			this[mf] && this[Ef] && t[uo](-this[Ef].x, -this._n0j.y),
			this[z_] && (t[z_] = this[z_], t[qm] = this.shadowBlur * i, t[Ym] = this.shadowOffsetX * i, t.shadowOffsetY = this.shadowOffsetY * i),
			t[$E]();
			for (var n, e = 0, s = this._fm[Wr]; s > e; e++)
				n = this._fm[e], n._hr && n[IA] && n._k0(t, i, this.selected, this);
			t[go]()
		},
		doHitTest: function (t, i, n) {
			if (n) {
				if (!this._jg[Il](t - n, i - n, 2 * n, 2 * n))
					return !1
			} else if (!this._jg.intersectsPoint(t, i))
				return !1;
			return this[lR](t, i, n)
		},
		hitTestChildren: function (t, i, n) {
			for (var e, s = this._fm.length - 1; s >= 0; s--)
				if (e = this._fm[s], e._hr && e[r_](t, i, n))
					return e;
			return !1
		},
		destroy: function () {
			this[ip] = !0;
			for (var t, i = this._fm[Wr] - 1; i >= 0; i--)
				t = this._fm[i], t[Ey]()
		}
	},
	p(CU, gU),
	Z(CU[hh], {
		renderColorBlendMode: {
			get: function () {
				return this[uR]
			},
			set: function (t) {
				this[uR] = t,
				this._18 = !0,
				this.body && (this[Pm][FA] = this[uR])
			}
		},
		renderColor: {
			get: function () {
				return this[cR]
			},
			set: function (t) {
				this[cR] = t,
				this._18 = !0,
				this[Pm] && (this[Pm][Xm] = this[cR])
			}
		},
		bodyBounds: {
			get: function () {
				if (this.$invalidateBounds) {
					this[oR] = !1;
					var t,
					i = this[Pm];
					t = i && i._hr && !this._$q() ? i._fo[ih]() : this._fo[ih](),
					this[zo] && Ci(t, this[zo], t),
					t.x += this.$x,
					t.y += this.$y,
					this._d2 = t
				}
				return this._d2
			}
		},
		bounds: {
			get: function () {
				return new iH((this.$x || 0) + this[HT].x, (this.$y || 0) + this[HT].y, this[HT].width, this.uiBounds[Wa])
			}
		},
		body: {
			get: function () {
				return this[vR]
			},
			set: function (t) {
				t && this._mzody != t && (this[vR] = t, this[fR] = !0, this[XC]())
			}
		}
	}),
	WG[aR] = 1;
	var RU = function () {
		w(this, RU, arguments)
	};
	RU[hh] = {
		strokeStyle: Fm,
		lineWidth: 0,
		fillColor: null,
		fillGradient: null,
		_j5: 1,
		_j7: 1,
		outline: 0,
		onDataChanged: function (t) {
			T(this, RU, bR, arguments),
			this._kg && this._7t && this._kg._6c(this._7t, this),
			t && this[qA](t)
		},
		_mya: function (t) {
			this._kg = pn(t),
			this._kg.validate(),
			(this._kg._lr == xq || this._kg._67()) && (this._7t || (this._7t = function () {
					this.invalidateData(),
					this._jk && this._jk[Ku] && (this._jk[XC](), this._jk.graph.invalidate())
				}), this._kg[nf](this._7t, this))
		},
		_kg: null,
		initialize: function () {
			this._mya(this[qf])
		},
		_4x: function () {
			return this._kg && this._kg[Wo]
		},
		_9k: function (t) {
			if (!t || t.width <= 0 || t[Wa] <= 0 || !this.$size || !(this[Jw]instanceof Object))
				return this._j5 = 1, void(this._j7 = 1);
			var i = this[Jw][ro],
			e = this.size.height;
			if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e)
				return this._j5 = 1, void(this._j7 = 1);
			var s,
			r,
			h = t[ro],
			a = t.height;
			i >= 0 && (s = i / h),
			e >= 0 && (r = e / a),
			0 > i ? s = r : 0 > e && (r = s),
			this._j5 = s,
			this._j7 = r
		},
		validateSize: function () {
			if (this[yR]) {
				this.$invalidateScale = !1;
				var t = this._originalBounds;
				this._j5,
				this._j7,
				this._9k(t),
				this[gR](t[ro] * this._j5, t[Wa] * this._j7, t.x * this._j5, t.y * this._j7)
			}
		},
		measure: function () {
			var t = this._kg[Io](this[Zo] + this[CE]);
			return t ? (this.$invalidateScale = !0, void(this._originalBounds = t[ih]())) : void this._jg.set(0, 0, 0, 0)
		},
		onBoundsChanged: function () {
			this[mR] = !0
		},
		_1a: function () {
			this[mR] = !1,
			this[DE] = this.fillGradient ? kq[hh][Df][Xr](this[ER], this._7z) : null
		},
		_kd: function (t) {
			var i,
			n;
			if (yg == this[xR])
				i = 1, n = -1;
			else {
				if (gg != this[xR])
					return;
				i = -1,
				n = 1
			}
			var e = this._jg.cx,
			s = this._jg.cy;
			t.translate(e, s),
			t.scale(i, n),
			t[uo](-e, -s)
		},
		draw: function (t, i, n, e) {
			if (this._j5 && this._j7) {
				if (this[mR] && this._1a(), t[co](), this[xR] && this._kd(t), this._kg._lr == wq)
					return t.scale(this._j5, this._j7), this._kg._lq.draw(t, i, this, n, e || this), void t[go]();
				n && this._7u(t, i, e),
				this._kg[Wo](t, i, this, this._j5, this._j7),
				t.restore()
			}
		},
		doHitTest: function (t, i, n) {
			if (this._kg[r_]) {
				if (yg == this[xR]) {
					var e = this._jg.cy;
					i = 2 * e - i
				} else if (gg == this[xR]) {
					var s = this._jg.cx;
					t = 2 * s - t
				}
				t /= this._j5,
				i /= this._j7;
				var r = (this._j5 + this._j7) / 2;
				return r > 1 && (n /= r, n = 0 | n),
				this._kg._lq instanceof Yq ? this._kg._lq[r_](t, i, n, !0, this.$lineWidth, this.$fillColor || this[ER]) : this._kg[r_](t, i, n)
			}
			return !0
		},
		$invalidateScale: !0,
		$invalidateFillGradient: !0
	},
	p(RU, gU),
	ls(RU[hh], {
		adjustType: {},
		fillColor: {},
		size: {
			validateFlags: [Vy, pR]
		},
		fillGradient: {
			validateFlags: [wR]
		}
	}),
	Z(RU[hh], {
		originalBounds: {
			get: function () {
				return this[TR]
			}
		}
	}),
	WG.ALIGN_POSITION = eH[ml];
	var LU = function () {
		w(this, LU, arguments),
		this[wA] = WG[pA]
	};
	LU[hh] = {
		color: WG[pA],
		showPointer: !0,
		fontSize: null,
		fontFamily: null,
		fontStyle: null,
		_go: null,
		alignPosition: null,
		measure: function () {
			this.font;
			var t = $i(this[qf], this.$fontSize, this[OR], this[IR], WG[mo], this[MR]);
			if (this._go = t, this[kR]) {
				var i = this[kR][ro] || 0,
				n = this[kR].height || 0;
				return this[gR](i > t[ro] ? i : t.width, n > t[Wa] ? n : t[Wa])
			}
			return this[gR](t[ro], t[Wa])
		},
		doHitTest: function (t, i, n) {
			return this[qf] ? Ln(t, i, n, this) : !1
		},
		draw: function (t, i, n, e) {
			if (n && this._7u(t, i, e), this[SR] || WG[ao], this[Tf] && this.$_hostRotate) {
				var s = ln(this[Of]);
				s > VG && 3 * VG > s && (t[uo](this._jg.width / 2, this._jg[Wa] / 2), t.rotate(Math.PI), t[uo](-this._jg.width / 2, -this._jg[Wa] / 2))
			}
			var r = this[AA] || WG.ALIGN_POSITION,
			h = r.horizontalPosition,
			a = r[cl],
			o = 0;
			h == rH ? (h = n_, o += this._jg[ro] / 2) : h == hH ? (h = Jh, o += this._jg[ro]) : h = tf;
			var f = 0;
			a == oH ? f = (this._jg[Wa] - this._go[Wa]) / 2 : a == fH && (f = this._jg[Wa] - this._go.height),
			t.fillStyle = this.color,
			Bi(t, this.$data, o, f, h, this[OR], this[SR], this[IR], WG[mo], this[MR])
		},
		_4x: function () {
			return null != this[qf] || this.$size
		},
		$invalidateFont: !0
	},
	p(LU, gU),
	ls(LU[hh], {
		size: {
			validateFlags: [sg]
		},
		fontStyle: {
			validateFlags: [sg, AR]
		},
		fontSize: {
			validateFlags: [sg, AR]
		},
		fontFamily: {
			validateFlags: [sg, AR]
		}
	}),
	Z(LU[hh], {
		font: {
			get: function () {
				return this.$invalidateFont && (this[CR] = !1, this.$font = (this[IR] || WG.FONT_STYLE) + Ih + (this[SR] || WG[ao]) + oo + (this[OR] || WG[fo])),
				this.$font
			}
		}
	});
	var PU = function (t) {
		t = t || new Yq,
		this.pathBounds = new iH,
		w(this, PU, [t])
	};
	PU.prototype = {
		layoutByPath: !0,
		layoutByAnchorPoint: !1,
		measure: function () {
			this[RR] = !0,
			this[LR] = !0,
			this[qf][Io](this.$lineWidth + this[PR], this.pathBounds),
			this[gR](this.pathBounds)
		},
		validateSize: function () {
			if (this[RR] || this.$invalidateToArrow) {
				var t = this[DR][ih]();
				if (this.$invalidateFromArrow) {
					this[RR] = !1;
					var i = this.validateFromArrow();
					i && t.add(i)
				}
				if (this.$invalidateToArrow) {
					this.$invalidateToArrow = !1;
					var i = this[jR]();
					i && t.add(i)
				}
				this.setMeasuredBounds(t)
			}
		},
		validateFromArrow: function () {
			if (!this.$data._j2 || !this[NR])
				return void(this[BR] = null);
			var t = this[qf],
			i = 0,
			n = 0,
			e = this.$fromArrowOffset;
			e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j2)),
			this.fromArrowLocation = t[rf](i, n),
			this.fromArrowLocation[zo] = Math.PI + this[$R].rotate || 0,
			this[BR] = Hs(this[NR], this[zR]);
			var s = this.$fromArrowShape.getBounds(this[FR].lineWidth + this[FR].outline);
			return this[GR]instanceof aq[HR] ? this.fromArrowStyles[DE] = kq[hh][Df][Xr](this[GR], s) : this.fromArrowStyles && (this[FR][DE] = null),
			s[wm](this[$R].x, this[$R].y),
			Ri(s, this[$R][zo], s, this.fromArrowLocation.x, this.fromArrowLocation.y),
			s
		},
		validateToArrow: function () {
			if (!this[qf]._j2 || !this[qR])
				return void(this[YR] = null);
			var t = this[qf],
			i = 0,
			n = 0,
			e = this.$toArrowOffset;
			e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0),
			0 > i && i > -1 && (i *= t._j2),
			i += t._j2,
			this[UR] = t[rf](i, n),
			this[YR] = Hs(this[qR], this[WR]);
			var s = this[YR][Io](this.toArrowStyles[Zo] + this[XR].outline);
			return this.toArrowFillGradient instanceof aq.Gradient ? this.toArrowStyles[DE] = kq[hh][Df][Xr](this[SC], s) : this[XR] && (this[XR][DE] = null),
			s[wm](this[UR].x, this.toArrowLocation.y),
			Ri(s, this[UR][zo], s, this.toArrowLocation.x, this.toArrowLocation.y),
			s
		},
		_1s: function (t) {
			var i = t ? "from" : RO,
			e = this[i + VR];
			e === n && (e = this[KR]);
			var s = this[i + ZR];
			s === n && (s = this[B_]);
			var r = this[i + JR];
			r || (this[i + JR] = r = {}),
			r[Zo] = e,
			r[B_] = s,
			r[Xf] = this[i + QR],
			r[ic] = this[i + tL],
			r[LE] = this[i + iL],
			r[PE] = this[i + nL],
			r[kE] = this[i + eL],
			r[N_] = this[i + sL],
			r[CE] = this[i + rL] || 0,
			r[AE] = this[i + hL]
		},
		doValidate: function () {
			return this.$fromArrow && this._1s(!0),
			this[qR] && this._1s(!1),
			T(this, PU, iR)
		},
		drawArrow: function (t, i, n, e) {
			if (this.$fromArrow && this.$fromArrowShape) {
				t.save();
				var s = this.fromArrowLocation,
				r = s.x,
				h = s.y,
				a = s[zo];
				t[uo](r, h),
				a && t[zo](a),
				this[BR].draw(t, i, this[FR], n, e),
				t[go]()
			}
			if (this[qR] && this.$toArrowShape) {
				t.save();
				var s = this[UR],
				r = s.x,
				h = s.y,
				a = s[zo];
				t[uo](r, h),
				a && t[zo](a),
				this[YR][Wo](t, i, this[XR], n, e),
				t[go]()
			}
		},
		outlineStyle: null,
		outline: 0,
		onBoundsChanged: function () {
			this[mR] = !0
		},
		_1a: function () {
			this[mR] = !1,
			this._fillGradient = this[ER] ? kq[hh][Df].call(this[ER], this._7z) : null
		},
		draw: function (t, i, n, e) {
			this[mR] && this._1a(),
			this[qf][Wo](t, i, this, n, e),
			this[aL](t, i, n, e)
		},
		doHitTest: function (t, i, n) {
			if (this[qf].hitTest(t, i, n, !0, this.$lineWidth + this[PR], this[oL] || this[ER]))
				return !0;
			if (this[qR] && this[YR]) {
				var e = t - this[UR].x,
				s = i - this[UR].y;
				if (this.toArrowLocation[zo]) {
					var r = ki(e, s, -this[UR][zo]);
					e = r.x,
					s = r.y
				}
				var h = this.toArrowStyles[LE] || this.toArrowStyles[PE];
				if (this[YR][r_](e, s, n, !0, this[XR].lineWidth, h))
					return !0
			}
			if (this.$fromArrow && this[BR]) {
				var e = t - this[$R].x,
				s = i - this[$R].y;
				if (this[$R][zo]) {
					var r = ki(e, s, -this[$R][zo]);
					e = r.x,
					s = r.y
				}
				var h = this[FR].fillColor || this[FR].fillGradient;
				if (this[BR].hitTest(e, s, n, !0, this[FR][Zo], h))
					return !0
			}
			return !1
		},
		$fromArrowOutline: 0,
		$toArrowOutline: 0,
		$invalidateFillGradient: !0,
		$invalidateFromArrow: !0,
		$invalidateToArrow: !0
	},
	p(PU, gU),
	ls(PU[hh], {
		strokeStyle: {
			validateFlags: [fL, cL]
		},
		fillColor: {},
		fillGradient: {
			validateFlags: [wR]
		},
		fromArrowOffset: {
			validateFlags: [fL, Vy]
		},
		fromArrowSize: {
			validateFlags: [fL, Vy]
		},
		fromArrow: {
			validateFlags: [fL, Vy]
		},
		fromArrowOutline: {
			validateFlags: [fL, Vy]
		},
		fromArrowStroke: {
			validateFlags: [fL, Vy]
		},
		fromArrowStrokeStyle: {
			validateFlags: [fL]
		},
		toArrowOffset: {
			validateFlags: [cL, Vy]
		},
		toArrowSize: {
			validateFlags: [cL, Vy]
		},
		toArrow: {
			validateFlags: [cL, Vy]
		},
		toArrowOutline: {
			validateFlags: [cL, Vy]
		},
		toArrowStroke: {
			validateFlags: [cL, Vy]
		},
		toArrowStrokeStyle: {
			validateFlags: [cL]
		},
		outline: {
			value: 0,
			validateFlags: [sg]
		}
	}),
	Z(PU[hh], {
		length: {
			get: function () {
				return this.data.length
			}
		}
	}),
	gs[hh] = {
		shape: null,
		path: null,
		initialize: function () {
			T(this, gs, JI),
			this[iI] = new Yq,
			this.path._di = !1,
			this.shape = new PU(this[iI]),
			this[ZC](this.shape, 0),
			this._mzody = this[QA],
			MU.initBindingProperties(this)
		},
		_1f: !0,
		_5x: null,
		_$q: function () {
			return !1
		},
		_45: function () {
			return !1
		},
		validatePoints: function () {
			this[QA][II]();
			var t = this.$data,
			i = this[iI];
			i[Xa]();
			var n = t[Dc],
			e = t[Rc];
			n && e && Xs(this, t, i, n, e)
		},
		getEndPointBounds: function (t) {
			return t[uL].clone()
		},
		_39: function (t, i, n, e, s, r, h) {
			return t[t_]() ? void(i[_L] = t.pathSegments[Xd]()) : n == e ? void this.drawLoopedEdge(i, n, s, r) : void this[dL](i, n, e, s, r, h)
		},
		drawLoopedEdge: function (t, i, n, e) {
			Js(this, e, t)
		},
		drawEdge: function (t, i, n, e, s, r) {
			var h = s.center,
			a = r[n_];
			if (e == oq.EDGE_TYPE_ZIGZAG) {
				var o = (h.x + a.x) / 2,
				f = (h.y + a.y) / 2,
				c = h.x - a.x,
				u = h.y - a.y,
				_ = Math[xo](c * c + u * u),
				d = Math[Vh](u, c);
				d += Math.PI / 6,
				_ *= .04,
				_ > 30 && (_ = 30);
				var l = Math.cos(d) * _,
				v = Math.sin(d) * _;
				return t[Xc](o - v, f + l),
				void t[Xc](o + v, f - l)
			}
			var b = Zs(this, this[Lo], s, r, i, n, h, a);
			b && (t._fb = b)
		},
		_26: function () {
			if (!this.$data.isBundleEnabled())
				return null;
			var t = this[Ku]._8m._8r(this[qf]);
			if (!t || !t.canBind(this[Ku]) || !t._he)
				return null;
			var i = t[lL](this);
			return t[vL](this[qf]) || (i = -i),
			i
		},
		checkBundleLabel: function () {
			var t = this[bL]();
			return t ? (this.bundleLabel || this[yL](), this[PC]._hr = !0, void(this.bundleLabel[Lo] = t)) : void(this[PC] && (this[PC]._hr = !1, this.bundleLabel[Lo] = null))
		},
		createBundleLabel: function () {
			var t = new LU;
			t[gL] = !1,
			this.bundleLabel = t,
			this[ZC](this[PC]),
			kU[JC](this)
		},
		getBundleLabel: function () {
			return this.graph[bL](this[Lo])
		},
		doValidate: function () {
			return this._1f && (this._1f = !1, this[mL]()),
			this.checkBundleLabel(),
			T(this, gs, iR)
		},
		_3w: function () {
			this._1f = !0,
			this[XC]()
		},
		_$u: function (t, i, n) {
			var e = this[KC][EL](this, t, i, n);
			return e = xU[EL](this, t, i, n) || e,
			this[PC] && this[PC][qf] && (e = kU[EL](this, t, i, n) || e),
			MU.onBindingPropertyChange(this, t, i, n) || e
		}
	},
	p(gs, CU),
	gs[xL] = function (t, i, n, e) {
		if (t.moveTo(i.x, i.y), !e || e == oq[pL])
			return void t[Xc](n.x, n.y);
		if (e == oq[Nu])
			t[Xc](i.x, n.y);
		else if (e == oq.EDGE_TYPE_HORIZONTAL_VERTICAL)
			t[Xc](n.x, i.y);
		else if (0 == e[eh](oq[Wu])) {
			var s;
			s = e == oq[Xu] ? !0 : e == oq[Ru] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
			var r = (i.x + n.x) / 2,
			h = (i.y + n.y) / 2;
			s ? (t[Xc](r, i.y), t[Xc](r, n.y)) : (t[Xc](i.x, h), t[Xc](n.x, h))
		} else if (0 == e[eh](oq.EDGE_TYPE_ELBOW)) {
			var s,
			a = DU[EU[Bu]] || 0;
			s = e == oq[Mu] ? !0 : e == oq[Cu] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y),
			s ? (t[Xc](i.x + a, i.y), t.lineTo(n.x - a, n.y)) : (t[Xc](i.x, i.y + a), t.lineTo(n.x, n.y - a))
		} else if (0 == e[eh](wL)) {
			var a = DU[EU.EDGE_EXTEND] || 0;
			if (e == oq.EDGE_TYPE_EXTEND_TOP) {
				var o = Math.min(i.y, n.y) - a;
				t[Xc](i.x, o),
				t[Xc](n.x, o)
			} else if (e == oq[Du]) {
				var o = Math.max(i.y, n.y) + a;
				t[Xc](i.x, o),
				t[Xc](n.x, o)
			} else if (e == oq.EDGE_TYPE_EXTEND_LEFT) {
				var f = Math.min(i.x, n.x) - a;
				t[Xc](f, i.y),
				t[Xc](f, n.y)
			} else if (e == oq[Au]) {
				var f = Math.max(i.x, n.x) + a;
				t[Xc](f, i.y),
				t[Xc](f, n.y)
			}
		} else if (e == oq[TL]) {
			var r = (i.x + n.x) / 2,
			h = (i.y + n.y) / 2,
			c = i.x - n.x,
			u = i.y - n.y,
			_ = Math[xo](c * c + u * u),
			d = Math[Vh](u, c);
			d += Math.PI / 6,
			_ *= .04,
			_ > 30 && (_ = 30);
			var l = Math.cos(d) * _,
			v = Math.sin(d) * _;
			t[Xc](r - v, h + l),
			t.lineTo(r + v, h - l)
		}
		t[Xc](n.x, n.y)
	},
	Z(gs.prototype, {
		length: {
			get: function () {
				return this.path ? this[iI][Wr] : 0
			}
		}
	}),
	gs[hh][Va] = function (t, i, n) {
		var e = In(this.path, t, i, n);
		if (e && e[Wr] > 2) {
			var s = this[Lo],
			r = e[e[Wr] - 1];
			s[OL] = r[Do] == Bq ? e[Jr](1, e[Wr] - 2) : e[Jr](1, e[Wr] - 1)
		}
	},
	ms[hh] = {
		_2f: null,
		image: null,
		initialize: function () {
			T(this, ms, JI),
			this._n0s(),
			OU[JC](this)
		},
		_mya: function () {
			this.data[Qm] ? this[Qm] && (this[Pm] = this[Qm]) : this.label && (this.body = this.label)
		},
		_n0s: function () {
			this[Qm] = new RU,
			this[ZC](this[Qm], 0),
			this._mya()
		},
		doValidate: function () {
			this.body && (this instanceof hr && !this[qf][pI] && this._51() ? this[Pm][mf] = !1 : (this[Pm][mf] = null != this._2f, this.body.anchorPosition = this._2f));
			var t = this[qf][HO],
			i = 0,
			n = 0;
			t && (i = t.x, n = t.y);
			var e = this.$x != i || this.$y != n;
			return e && (this[oR] = !0),
			this.$x = i,
			this.$y = n,
			CU[hh][iR][Xr](this) || e
		},
		_$u: function (t, i, n) {
			var e = this._my6[EL](this, t, i, n);
			return e = xU[EL](this, t, i, n) || e,
			OU[EL](this, t, i, n) || e
		}
	},
	p(ms, CU);
	var DU = {};
	DU[EU[sM]] = WG[sM],
	DU[EU[bm]] = WG[bm],
	DU[EU[ym]] = WG[ym],
	DU[EU.SELECTION_TYPE] = oq[lm],
	DU[EU[IL]] = 2,
	DU[EU.SELECTION_SHADOW_OFFSET_Y] = 2,
	DU[EU[pA]] = WG[pA],
	DU[EU.LABEL_POSITION] = eH[El],
	DU[EU[ck]] = eH[ML],
	DU[EU[kL]] = new nH(0, 2),
	DU[EU[RA]] = 8,
	DU[EU[DA]] = 8,
	DU[EU.LABEL_POINTER] = !0,
	DU[EU[Ak]] = 0,
	DU[EU[Rk]] = Fm,
	DU[EU.LABEL_ROTATABLE] = !0,
	DU[EU.LABEL_BACKGROUND_COLOR] = null,
	DU[EU[Dk]] = null,
	DU[EU[SL]] = AL,
	DU[EU.EDGE_WIDTH] = 1.5,
	DU[EU.EDGE_FROM_AT_EDGE] = !0,
	DU[EU[BS]] = !0,
	DU[EU[CL]] = V(3438210798),
	DU[EU[Uk]] = 1,
	DU[EU[Xk]] = Fm,
	DU[EU[RL]] = !0,
	DU[EU[FS]] = WG.ARROW_SIZE,
	DU[EU.ARROW_TO_SIZE] = WG[Em],
	DU[EU[o_]] = 10,
	DU[EU[Fu]] = 8,
	DU[EU.EDGE_CORNER] = oq[Hu],
	DU[EU.EDGE_SPLIT_BY_PERCENT] = !0,
	DU[EU[Bu]] = 20,
	DU[EU[Iu]] = .5,
	DU[EU[CS]] = 20,
	DU[EU[OS]] = 20,
	DU[EU[Qk]] = eH[El],
	DU[EU.EDGE_BUNDLE_LABEL_POSITION] = eH.CENTER_TOP,
	DU[EU[tS]] = LL,
	DU[EU.SHAPE_STROKE] = 1,
	DU[EU[yM]] = PL,
	DU[EU[zA]] = WG[cf],
	DU[EU.ALPHA] = 1,
	WG.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2;
	var jU = function (i, n) {
		this._$r = new mH,
		this._$r.on(function (t) {
			aI == t[bd] && this[XT]()
		}, this),
		this._19 = new mH,
		this._19.addListener(function (t) {
			!this[aI] || t[bd] != pH[nv] && t[bd] != pH[iv] || this[fO][s_](this.currentSubNetwork) || (this[aI] = null)
		}, this),
		this._7 = new mH,
		this._10 = new mH,
		this._$i = new mH,
		this._$n = new mH,
		this.graphModel = n || new cs,
		this._8m = new eU(this, i),
		this._2s = new Br(this),
		this._16 = new mH,
		this[DL] = CH(t, jL, function () {
				this[NL]()
			}, !1, this),
		this._8m._mz0[BL] = function (t) {
			this.ondrop(t)
		}
		[mh](this),
		this._8m[mT][$L] = function (t) {
			this.ondragover(t)
		}
		[mh](this)
	};
	jU[hh] = {
		originAtCenter: !0,
		editable: !1,
		ondragover: function (t) {
			aq[zL](t)
		},
		getDropInfo: function (t, i) {
			var n = null;
			if (i)
				try {
					n = JSON[Ba](i)
				} catch (e) {}
			return n
		},
		ondrop: function (t) {
			var i = t[FL];
			if (i) {
				var n = i[ay](hd),
				e = this[GL](t, n);
				e || (e = {}, e[Qm] = i.getData(Qm), e[Do] = i[ay](Do), e[Mp] = i[ay](Mp), e[pI] = i[ay](pI));
				var s = this[HL](t);
				if (s = this.toLogical(s.x, s.y), !(this[qL]instanceof Function && this[qL].call(this, t, s, e) === !1) && (e[Qm] || e[Mp] || e.type)) {
					var r = e.image,
					h = e.type,
					a = e[Mp],
					o = e[pI];
					aq[zL](t);
					var f;
					if (h && YL != h ? OI == h ? f = this.createText(a, s.x, s.y) : sI == h ? f = this[UL](a, s.x, s.y) : wI == h ? (f = this[WL](a, s.x, s.y), o && (o = sr(o), o && (f[pI] = o))) : (h = J(h), h instanceof Function && h[hh]instanceof lU && (f = new h, f[lh] = a, f.location = new ZG(s.x, s.y), this[bO].add(f))) : f = this[XL](a, s.x, s.y), f) {
						if (r && (r = sr(r), r && (f[Qm] = r)), t.shiftKey) {
							var c = this[fy](t);
							c && this[VL](c) && (f.parent = c)
						}
						if (e.properties)
							for (var u in e[KL])
								f[u] = e.properties[u];
						if (e[ZL])
							for (var u in e.clientProperties)
								f.set(u, e.clientProperties[u]);
						if (e[JL] && f[QO](e.styles), this[QL](f, t, e) === !1)
							return !1;
						var _ = new Nr(this, Nr.ELEMENT_CREATED, t, f);
						return this[tP](_),
						f
					}
				}
			}
		},
		_n0f: function (t) {
			return t[u_] || t instanceof yU || t.droppable
		},
		enableDoubleClickToOverview: !0,
		_8m: null,
		_$r: null,
		_19: null,
		_7: null,
		_$n: null,
		_10: null,
		_$i: null,
		_1g: function (t) {
			return this._$r[_h](t)
		},
		_3s: function (t) {
			this._$r.onEvent(t),
			Qw == t[bd] && this[iP]()
		},
		isVisible: function (t) {
			return this._8m._df(t)
		},
		isMovable: function (t) {
			return (t instanceof lU || t instanceof dU && t[t_]()) && t[nP] !== !1
		},
		isSelectable: function (t) {
			return t.selectable !== !1
		},
		isEditable: function (t) {
			return t.editable !== !1
		},
		isRotatable: function (t) {
			return t[BA] !== !1
		},
		isResizable: function (t) {
			return t[eP] !== !1
		},
		canLinkFrom: function (t) {
			return t[sP] !== !1 && t[rP] !== !1
		},
		canLinkTo: function (t) {
			return t[sP] !== !1 && t.canLinkTo !== !1
		},
		isEndPointEditable: function (t) {
			return t.endPointEditable !== !1
		},
		createNode: function (t, i, n) {
			var e = new lU(t, i, n);
			return this[bO].add(e),
			e
		},
		createText: function (t, i, n) {
			var e = new _s(t, i, n);
			return this[bO].add(e),
			e
		},
		createShapeNode: function (t, i, n, e) {
			j(i) && (e = n, n = i, i = null);
			var s = new vU(t, i);
			return s[HO] = new ZG(n, e),
			this[bO].add(s),
			s
		},
		createGroup: function (t, i, n) {
			var e = new yU(t, i, n);
			return this[bO].add(e),
			e
		},
		createEdge: function (t, i, n) {
			if (t instanceof lU) {
				var e = n;
				n = i,
				i = t,
				t = e
			}
			var s = new dU(i, n);
			return t && (s[hP] = t),
			this[bO].add(s),
			s
		},
		addElement: function (t, i) {
			this[bO].add(t),
			i && t[Vr]() && t.forEachChild(function (t) {
				this[aP](t, i)
			}, this)
		},
		removeElement: function (t) {
			this[bO].remove(t)
		},
		clear: function () {
			this._krModel.clear()
		},
		getStyle: function (t, i) {
			var e = t._jm[i];
			return e !== n ? e : this[oP](i)
		},
		getDefaultStyle: function (t) {
			if (this._jm) {
				var i = this._jm[t];
				if (i !== n)
					return i
			}
			return DU[t]
		},
		_2b: function (t, i) {
			if (!this.limitedBounds || this.limitedBounds[s_](this[fP]))
				return i && i(), !1;
			t = this._25(),
			this[cP]();
			var n,
			e,
			s,
			r = this[fP],
			h = this[uP],
			a = r.width / this.limitedBounds[ro],
			o = r[Wa] / this.limitedBounds[Wa];
			if (1 >= a && 1 >= o)
				return n = h.left > r[tf] ? h[tf] : h.right < r[Jh] ? r.left - (r[Jh] - h.right) : r.left, e = h.top > r.top ? h.top : h.bottom < r.bottom ? r.top - (r.bottom - h[Qh]) : r.top, void this[ST](-n * this[j_], -e * this[j_], this.scale, !1, i);
			var f = a > o;
			s = Math.max(a, o),
			f ? (n = h.x, e = h.y + (r.top - h.top) * (1 - s) / s, e >= h.y ? e = h.y : e < h.bottom - r[Wa] / s && (e = h[Qh] - r[Wa] / s)) : (e = h.y, n = h.x + (r[tf] - h[tf]) * (1 - s) / s, n >= h.x ? n = h.x : n < h[Jh] - r[ro] / s && (n = h.right - r[ro] / s)),
			s *= this[j_],
			n *= s,
			e *= s,
			this[ST](-n, -e, s, t, i)
		},
		checkLimitedBounds: function (t) {
			return this[_P] || !this[uP] || this[uP][s_](this.viewportBounds) ? !1 : (this._myheckingBounds = !0, void this[dP](function () {
					this._2b(t, function () {
						this[_P] = !1
					}
						[mh](this))
				}, this))
		},
		zoomByMouseEvent: function (t, i, n, e) {
			var s = this[HL](t);
			return kh == typeof i ? this[lP](Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[vP](s.x, s.y, n, e) : this[bP](s.x, s.y, n, e)
		},
		resetScale: 1,
		translate: function (t, i, n) {
			return this[ST](this.tx + t, this.ty + i, this[j_], n)
		},
		translateTo: function (t, i, n, e, s) {
			if (n && (n = Math.min(this[Zm], Math.max(this.minScale, n))), e) {
				var r = this._5r();
				return void r._ky(t, i, n, e, s)
			}
			var h = this._8m[yP](t, i, n);
			return s && s(),
			h
		},
		centerTo: function (t, i, e, s, r) {
			return (!e || 0 >= e) && (e = this[j_]),
			s === n && (s = this._25()),
			this[ST](this[ro] / 2 - t * e, this[Wa] / 2 - i * e, e, s, r)
		},
		moveToCenter: function (t, i) {
			if (arguments[2] === !1 || !this._8m[gP]()) {
				var n = this[Mo];
				return void this[mP](n.cx, n.cy, t, i)
			}
			return this._8m[bu] || (i = !1),
			this[dP](this[EP].bind(this, t, i, !1))
		},
		zoomToOverview: function (t, i) {
			if (arguments[2] === !1 || !this._8m[gP]()) {
				var n = this._8m._1j();
				return void(n && (i && (n[j_] = Math.min(n[j_], i)), this[mP](n.cx, n.cy, n[j_], t)))
			}
			return this._8m._n0e || (t = !1),
			this.callLater(this[xP].bind(this, t, i, !1))
		},
		_25: function () {
			return this._8m[bu] ? this[pP] === n || null === this.zoomAnimation ? WG[wP] : this.zoomAnimation : !1
		},
		zoomAt: function (t, i, e, s, r) {
			s === n && (s = this._25()),
			i === n && (i = this.width / 2),
			i = i || 0,
			e === n && (e = this[Wa] / 2),
			e = e || 0;
			var h = this[j_];
			return t = Math.min(this.maxScale, Math.max(this.minScale, h * t)),
			i = t * (this.tx - i) / h + i,
			e = t * (this.ty - e) / h + e,
			this[ST](i, e, t, s, r)
		},
		zoomOut: function (t, i, n, e) {
			return this[lP](1 / this[TP], t, i, n, e)
		},
		zoomIn: function (t, i, n, e) {
			return this[lP](this.scaleStep, t, i, n, e)
		},
		_5r: function () {
			return this[OP] || (this._panAnimation = new GU(this)),
			this._panAnimation
		},
		onAnimationStart: function () {},
		onAnimationEnd: function () {},
		isAnimating: function () {
			return this._panAnimation && this[OP]._dh()
		},
		enableInertia: !0,
		_9c: function (t, i) {
			var n = this._5r();
			return n._gc(t || 0, i || 0)
		},
		stopAnimation: function () {
			this._panAnimation && this[OP]._lg()
		},
		getUI: function (t) {
			return Q(t) ? this._8m._3n(t) : this._8m._l4(t)
		},
		getUIByMouseEvent: function (t) {
			return this._8m._3n(t)
		},
		hitTest: function (t) {
			return this._8m[r_](t)
		},
		globalToLocal: function (t) {
			return this._8m._8c(t)
		},
		toCanvas: function (t, i) {
			return this._8m._g0(t, i)
		},
		toLogical: function (t, i) {
			return Q(t) ? this._8m._$h(t) : this._8m._dq(t, i)
		},
		getElementByMouseEvent: function (t) {
			var i = this._8m._3n(t);
			return i ? i.$data : void 0
		},
		getElement: function (t) {
			if (Q(t)) {
				var i = this._8m._3n(t);
				return i ? i[qf] : null
			}
			return this[bO].getById(t)
		},
		invalidate: function () {
			this._8m._mys()
		},
		invalidateUI: function (t) {
			t[Kw](),
			this[Kw]()
		},
		invalidateElement: function (t) {
			this._8m._36(t)
		},
		getUIBounds: function (t) {
			return this._8m._2r(t)
		},
		forEachVisibleUI: function (t, i) {
			return this._8m._47(t, i)
		},
		forEachReverseVisibleUI: function (t, i) {
			return this._8m._$t(t, i)
		},
		forEachUI: function (t, i) {
			return this._8m._dv(t, i)
		},
		forEachReverseUI: function (t, i) {
			return this._8m._41(t, i)
		},
		forEach: function (t, i) {
			return this[bO][lc](t, i)
		},
		getElementByName: function (t) {
			var i;
			return this.forEach(function (n) {
				return n[lh] == t ? (i = n, !1) : void 0
			}),
			i
		},
		focus: function (i) {
			if (i) {
				var n = t[fd] || t[wa],
				e = t[cd] || t[Oa];
				return this[oy][IP](),
				void t.scrollTo(n, e)
			}
			this[oy].focus()
		},
		callLater: function (t, i, n) {
			this._8m._dt(t, i, n)
		},
		exportImage: function (t, i, n) {
			return lr(this, t, i, n)
		},
		setSelection: function (t) {
			return this[bO][vv].set(t)
		},
		select: function (t) {
			return this._krModel[vv][od](t)
		},
		unselect: function (t) {
			return this._krModel._selectionModel[MP](t)
		},
		reverseSelect: function (t) {
			return this[bO][vv].reverseSelect(t)
		},
		selectAll: function () {
			dr(this)
		},
		unSelectAll: function () {
			this[kP][Xa]()
		},
		unselectAll: function () {
			this.unSelectAll()
		},
		isSelected: function (t) {
			return this._krModel[vv][s_](t)
		},
		sendToTop: function (t) {
			Ae(this[bO], t)
		},
		sendToBottom: function (t) {
			Ce(this[bO], t)
		},
		moveElements: function (t, i, n) {
			var e = [],
			s = new XG;
			return l(t, function (t) {
				t instanceof lU ? e[nh](t) : t instanceof dU && s.add(t)
			}),
			this._do(e, i, n, s)
		},
		_do: function (t, i, n, e) {
			if (0 == i && 0 == n || 0 == t[Wr] && 0 == e[Wr])
				return !1;
			if (0 != t[Wr]) {
				var s = this._43(t);
				e = this._4g(s, e),
				l(s, function (t) {
					var e = t[HO];
					e ? t[SP](e.x + i, e.y + n) : t[SP](i, n)
				})
			}
			return e && e.length && this._dl(e, i, n),
			!0
		},
		_dl: function (t, i, n) {
			t[lc](function (t) {
				t[Ny](i, n)
			})
		},
		_4g: function (t, i) {
			return this[fO][lc](function (n) {
				n instanceof dU && this[AP](n) && t[s_](n[Dc]) && t[s_](n[Rc]) && i.add(n)
			}, this),
			i
		},
		_43: function (t) {
			var i = new XG;
			return l(t, function (t) {
				!this[AP](t),
				i.add(t),
				Me(t, i, this[CP])
			}, this),
			i
		},
		reverseExpanded: function (t) {
			if (!t[GT]())
				return !1;
			var i = t[Lc](!0);
			return i ? i.reverseExpanded() !== !1 ? (this[Kw](), !0) : void 0 : !1
		},
		_2s: null,
		_16: null,
		beforeInteractionEvent: function (t) {
			return this._16[_h](t)
		},
		onInteractionEvent: function (t) {
			this._16[dh](t)
		},
		addCustomInteraction: function (t) {
			this._2s.addCustomInteraction(t)
		},
		removeCustomInteraction: function (t) {
			this._2s.removeCustomInteraction(t)
		},
		enableWheelZoom: !0,
		enableTooltip: !0,
		getTooltip: function (t) {
			return t[OO] || t.name
		},
		updateViewport: function () {
			this._8m._7k()
		},
		destroy: function () {
			this._3s(new dH(this, Ey, !0, this[ip])),
			this[ip] = !0,
			RH(t, jL, this[DL]),
			this._2s[Ey](),
			this[fO] = new cs;
			var i = this[RP];
			this._8m._hn(),
			i && (i[LP] = "")
		},
		onPropertyChange: function (t, i, n) {
			this._$r[Ul](function (e) {
				e[bd] == t && i[Xr](n, e)
			})
		},
		removeSelection: function () {
			var t = this[kP]._jc;
			return t && 0 != t[Wr] ? (t = t[Zr](), this[bO][Mh](t), t) : !1
		},
		removeSelectionByInteraction: function (t) {
			var i = this.selectionModel[yd];
			return i && 0 != i[Wr] ? void aq[bg](PP + i.length, function () {
				var i = this.removeSelection();
				if (i) {
					var n = new Nr(this, Nr[DP], t, i);
					this.onInteractionEvent(n)
				}
			}, this) : !1
		},
		createShapeByInteraction: function (t, i, n, e) {
			var s = new Yq(i);
			i[Wr] > 2 && s[yf]();
			var r = this.createShapeNode(jP, s, n, e);
			this.onElementCreated(r, t);
			var h = new Nr(this, Nr.ELEMENT_CREATED, t, r);
			return this[tP](h),
			r
		},
		createLineByInteraction: function (t, i, n, e) {
			var s = new Yq(i),
			r = this[UL](NP, s, n, e);
			r.setStyle(aq[BP][pM], null),
			r[Tu](aq[BP][TM], null),
			r[Tu](aq[BP][SM], !0),
			this[QL](r, t);
			var h = new Nr(this, Nr[$P], t, r);
			return this[tP](h),
			r
		},
		createEdgeByInteraction: function (t, i, n, e) {
			var s = this[zP](FP, t, i);
			if (e)
				s._9l = e;
			else {
				var r = this.edgeUIClass,
				h = this[Zu];
				this[GP] && (r = this[GP][nO] || r, h = this[GP][Zu] || h),
				r && (s[nO] = r),
				h && (s[Zu] = h)
			}
			this.onElementCreated(s, n);
			var a = new Nr(this, Nr[$P], n, s);
			return this[tP](a),
			s
		},
		onElementCreated: function (t) {
			!t[Cc] && this[aI] && (t.parent = this[aI])
		},
		allowEmptyLabel: !1,
		startLabelEdit: function (t, i, n, e) {
			var s = this;
			n.startEdit(e.x, e.y, i.data, this[Ou](t, EU[_k]), function (n) {
				return s.onLabelEdit(t, i, n, i[Cc])
			})
		},
		onLabelEdit: function (t, i, n, e) {
			if (!n && !this.allowEmptyLabel)
				return aq[vg](HP), !1;
			if (Mp == i[lh]) {
				if (t[lh] == n)
					return !1;
				t.name = n
			} else
				e._fk(i, n) === !1 && (i.data = n, this[qP](t))
		},
		setInteractionMode: function (t, i) {
			this[YP] = t,
			this[GP] = i
		},
		upSubNetwork: function () {
			return this._35 ? this[aI] = rr(this._35) : !1
		},
		_$s: !1,
		invalidateVisibility: function () {
			this._$s = !0,
			this.invalidate()
		},
		getBundleLabel: function (t) {
			var i = t[Lc](!0);
			return i && i[UP] == t ? WP + i[XP][Wr] : null
		},
		zoomAnimation: null,
		pauseRendering: function (t, i) {
			(this[VP] || i) && this._8m._73(t)
		},
		_4d: n,
		enableRectangleSelectionByRightButton: !0
	},
	Z(jU.prototype, {
		center: {
			get: function () {
				return this[pT](this[RP][ga] / 2, this[RP].clientHeight / 2)
			}
		},
		visibleFilter: {
			get: function () {
				return this._hrFilter
			},
			set: function (t) {
				this[FT] = t,
				this.invalidateVisibility()
			}
		},
		topCanvas: {
			get: function () {
				return this._8m._topCanvas
			}
		},
		propertyChangeDispatcher: {
			get: function () {
				return this._$r
			}
		},
		listChangeDispatcher: {
			get: function () {
				return this._19
			}
		},
		dataPropertyChangeDispatcher: {
			get: function () {
				return this._7
			}
		},
		selectionChangeDispatcher: {
			get: function () {
				return this._$n
			}
		},
		parentChangeDispatcher: {
			get: function () {
				return this._10
			}
		},
		childIndexChangeDispatcher: {
			get: function () {
				return this._$i
			}
		},
		interactionDispatcher: {
			get: function () {
				return this._16
			}
		},
		cursor: {
			set: function (t) {
				this.canvasPanel[ca][KP] = t || this._2s.defaultCursor
			},
			get: function () {
				return this[oy][ca][KP]
			}
		},
		interactionMode: {
			get: function () {
				return this._2s[ZP]
			},
			set: function (t) {
				var i = this[YP];
				i != t && (this._2s[gd] = t, this._3s(new dH(this, YP, t, i)))
			}
		},
		scaleStep: {
			get: function () {
				return this._8m._eg
			},
			set: function (t) {
				this._8m._eg = t
			}
		},
		maxScale: {
			get: function () {
				return this._8m._gz
			},
			set: function (t) {
				this._8m._gz = t
			}
		},
		minScale: {
			get: function () {
				return this._8m._h5
			},
			set: function (t) {
				this._8m._h5 = t
			}
		},
		scale: {
			get: function () {
				return this._8m._scale
			},
			set: function (t) {
				return this._8m[mb] = t
			}
		},
		tx: {
			get: function () {
				return this._8m._tx
			}
		},
		ty: {
			get: function () {
				return this._8m._ty
			}
		},
		styles: {
			get: function () {
				return this._jm
			},
			set: function (t) {
				this._jm = t
			}
		},
		selectionModel: {
			get: function () {
				return this[bO]._selectionModel
			}
		},
		graphModel: {
			get: function () {
				return this._krModel
			},
			set: function (t) {
				if (this[bO] == t)
					return !1;
				var i = this[bO],
				n = new dH(this, fO, i, t);
				return this._1g(n) === !1 ? !1 : (null != i && (i[JP][iE](this._$r, this), i[dv][iE](this._19, this), i[bv][iE](this._7, this), i.parentChangeDispatcher[iE](this._10, this), i.childIndexChangeDispatcher[iE](this._$i, this), i[lv][iE](this._$n, this)), this._krModel = t, this[bO] && (this[bO][JP].addListener(this._$r, this), this[bO][dv][Ul](this._19, this), this._krModel[bv][Ul](this._7, this), this[bO].parentChangeDispatcher[Ul](this._10, this), this._krModel[mv][Ul](this._$i, this), this[bO].selectionChangeDispatcher.addListener(this._$n, this)), this._8m && this._8m._l5(), void this._3s(n))
			}
		},
		count: {
			get: function () {
				return this[bO].length
			}
		},
		width: {
			get: function () {
				return this[RP][ga]
			}
		},
		height: {
			get: function () {
				return this[RP][QP]
			}
		},
		viewportBounds: {
			get: function () {
				return this._8m[tD]
			}
		},
		bounds: {
			get: function () {
				return this._8m._4f()
			}
		},
		canvasPanel: {
			get: function () {
				return this._8m._mz0
			}
		},
		html: {
			get: function () {
				return this._8m[mT][Sm]
			}
		},
		navigationType: {
			get: function () {
				return this._8m._7n
			},
			set: function (t) {
				this._8m._3l(t)
			}
		},
		_35: {
			get: function () {
				return this[bO]._35
			}
		},
		currentSubNetwork: {
			get: function () {
				return this._krModel.currentSubNetwork
			},
			set: function (t) {
				this[bO].currentSubNetwork = t
			}
		},
		limitedBounds: {
			get: function () {
				return this._limitedBounds
			},
			set: function (t) {
				return iH[fl](t, this[iD]) ? !1 : t ? void(this[iD] = new iH(t)) : void(this[iD] = null)
			}
		},
		ratio: {
			get: function () {
				return this._8m[eo]
			}
		},
		delayedRendering: {
			get: function () {
				return this._4d === n ? WG[nD] : this._4d
			},
			set: function (t) {
				t != this.delayedRendering && (this._4d = t, this[eD](!1, !0))
			}
		},
		fullRefresh: {
			get: function () {
				return this._8m[sD]
			},
			set: function (t) {
				this._8m.fullRefresh = t
			}
		}
	}),
	WG.DELAYED_RENDERING = !0,
	WG.GROUP_MIN_WIDTH = 60,
	WG.GROUP_MIN_HEIGHT = 60,
	hr[hh] = {
		_mya: function () {
			return this._51() ? void 0 : T(this, hr, qA, arguments)
		},
		initialize: function () {
			T(this, hr, JI),
			this[ZA]()
		},
		_mzv: function () {
			this._mb = new Yq,
			this[QA] = new RU(this._mb),
			this.shape[Hf] = !1,
			this[ZC](this[QA], 0),
			this.body = this[QA]
		},
		checkBody: function () {
			return this._51() ? (this._20 = !0, this[QA] ? (this[QA][OT] = !0, this[Pm] = this[QA]) : (this[rD](), IU[JC](this)), void(this.image && (this[Qm][OT] = !1))) : (this[Qm] ? (this[Qm].visible = !0, this[Pm] = this.image) : this._n0s(), void(this[QA] && (this[QA][OT] = !1)))
		},
		_51: function () {
			return this[qf]._ig() && this[qf][eO]
		},
		_mb: null,
		_20: !0,
		_57: function () {
			this._18 = !0,
			this._20 = !0
		},
		doValidate: function () {
			if (this._20 && this._51()) {
				if (this._20 = !1, this[QA][II](), this.$data[pI]) {
					this[QA][Lo] = this.$data[pI];
					var t = this._1z();
					return this[QA][DI] = t.x + t[ro] / 2,
					this[QA].offsetY = t.y + t[Wa] / 2,
					this.shape[Jw] = {
						width: t[ro],
						height: t.height
					},
					ms[hh].doValidate[Xr](this)
				}
				this[QA][DI] = 0,
				this.shape[jI] = 0;
				var i = this._8h(this[qf][EI]);
				this._mb[Xa](),
				i instanceof iH ? Ge(this._mb, i.x, i.y, i.width, i.height, i.rx, i.ry) : i instanceof sn ? He(this._mb, i) : i instanceof rn && qe(this._mb, i),
				this._mb._66 = !0,
				this.shape[II]()
			}
			return ms[hh].doValidate[Xr](this)
		},
		_7f: function (t, i, n, e, s) {
			switch (kh != typeof e && (e = -i / 2), kh != typeof s && (s = -n / 2), t) {
			case oq[hD]:
				var r = Math.max(i, n) / 2;
				return new sn(e + i / 2, s + n / 2, r);
			case oq[aD]:
				return new rn(e + i / 2, s + n / 2, i, n);
			default:
				return new iH(e, s, i, n)
			}
		},
		_1z: function () {
			return this._8h(null)
		},
		_8h: function (t) {
			var i,
			e,
			s = this[Lo],
			r = s[xI],
			h = s[mI],
			a = WG.GROUP_MIN_WIDTH,
			o = WG.GROUP_MIN_HEIGHT;
			if (h && (kh == typeof h.width && (a = h.width), kh == typeof h[Wa] && (o = h[Wa]), i = h.x, e = h.y), !s.hasChildren())
				return this._7f(t, a, o, i, e);
			var f,
			c = this.$data._fm._jc;
			(t == oq.GROUP_TYPE_CIRCLE || t == oq.GROUP_TYPE_ELLIPSE) && (f = []);
			for (var u, _, d, l, v = new iH, b = 0, y = c[Wr]; y > b; b++) {
				var g = c[b];
				if (this[Ku].isVisible(g) && !(g instanceof dU)) {
					var m = this[Ku][uy](g);
					m && (u = m.$x + m._fo.x, _ = m.$y + m._fo.y, d = m._fo[ro], l = m._fo[Wa], v[hl](u, _, d, l), f && (f[nh]({
								x: u,
								y: _
							}), f.push({
								x: u + d,
								y: _
							}), f[nh]({
								x: u + d,
								y: _ + l
							}), f[nh]({
								x: u,
								y: _ + l
							})))
				}
			}
			if (v[Uf]())
				return this._7f(t, a, o, i, e);
			var E = this[qf][HO];
			E ? E[uI] && (E[uI] = !1, i === n && (E.x = v.cx), e === n && (E.y = v.cy)) : E = this[qf][HO] = {
				x: v.cx,
				y: v.cy
			},
			r && v.grow(r),
			kh == typeof i && i + E.x < v.x && (v[ro] += v.x - (i + E.x), v.x = i + E.x, f && f[nh]({
					x: v.x,
					y: v.cy
				})),
			kh == typeof e && e + E.y < v.y && (v[Wa] += v.y - (v.y, e + E.y), v.y = e + E.y, f && f[nh]({
					x: v.cx,
					y: v.y
				}));
			var x,
			i = E.x,
			e = E.y;
			if (t == oq[hD]) {
				x = hn(f),
				x.cx -= i,
				x.cy -= e;
				var p = Math.max(a, o) / 2;
				return x.r < p && (x.cx += p - x.r, x.cy += p - x.r, x.r = p),
				x
			}
			return t == oq[aD] ? (x = an(f, v), x.cx -= i, x.cy -= e, x.width < a && (x.cx += (a - x[ro]) / 2, x.width = a), x.height < o && (x.cy += (o - x[Wa]) / 2, x[Wa] = o), x) : (x = v, v[ro] < a && (v.width = a), v.height < o && (v.height = o), v[wm](-i, -e), x)
		},
		_$u: function (t, i, n) {
			if (!this._51())
				return T(this, hr, oD, arguments);
			var e = this[KC][EL](this, t, i, n);
			return e = xU.onBindingPropertyChange(this, t, i, n) || e,
			e = OU[EL](this, t, i, n) || e,
			IU.onBindingPropertyChange(this, t, i, n) || e
		}
	},
	p(hr, ms),
	aq.GroupUI = hr;
	var NU = {
		draw: function () {}
	};
	WG[C_] = null,
	WG[D_] = null;
	var BU = {
		position: zw,
		"text-align": n_
	},
	$U = {
		padding: fD,
		transition: cD
	},
	zU = {
		position: I_,
		display: uD
	};
	gi(_D, "opacity:0.7;vertical-align:middle;"),
	gi(".Q-Graph-Nav img:hover,img.hover", dD),
	YG || (gi(lD, vD + SH(bD) + yD), gi(gD, mD + SH(bD) + ED)),
	fr[hh] = {
		_myj: function (t, i) {
			return t._hr == i ? !1 : (t._hr = i, void(t[ca][Lm] = i ? "visible" : T_))
		},
		_3g: function (t, i) {
			var n = i / 2 - this._left._img[QP] / 2 + Ka;
			this[A_][m_][ca].top = n,
			this[R_][m_].style.top = n,
			this._navPane.style[ro] = t + Ka,
			this._navPane[ca].height = i + Ka
		},
		_n04: function (t, i, n, e) {
			this[xD](this[M_], t),
			this._myj(this[A_], i),
			this[xD](this[P_], n),
			this[xD](this[R_], e)
		},
		_hn: function () {
			var t = this[x_][Sm];
			t && t[Tv](this._navPane)
		},
		_jp: function () {
			var t = this._mzaseCanvas._kr;
			if (t) {
				var i = t.bounds;
				if (i.isEmpty())
					return void this[pD](!1, !1, !1, !1);
				var n = t[fP],
				e = n.y > i.y + 1,
				s = n.x > i.x + 1,
				r = n.bottom < i[Qh] - 1,
				h = n[Jh] < i.right - 1;
				this[pD](e, s, r, h)
			}
		}
	};
	var FU = 10;
	gi(wD, TD),
	gi(OD, "background-color: #7E7E7E;" + SH(bD) + ": background-color 0.2s linear;"),
	gi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
	gi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
	gi(".Q-Graph-ScrollBar--V.Both", ID),
	gi(".Q-Graph-ScrollBar--H.Both", MD),
	YG || (gi(kD, vD + SH(bD) + SD), gi(".Q-Graph:hover .Q-Graph-ScrollPane", mD + SH(bD) + ":opacity 0.3s linear;")),
	cr[hh] = {
		_hn: function () {
			this[AD]._hn(),
			this[CD]._hn(),
			delete this._verticalDragSupport,
			delete this[CD],
			this._mc[Sm] && this._mc.parentNode.removeChild(this._mc)
		},
		_mc: null,
		_n0u: null,
		_8s: null,
		init: function (t) {
			var n = i.createElement(__);
			n.className = RD,
			vi(n, {
				width: k_,
				height: k_,
				position: I_
			});
			var e = i[Qa](__);
			e[xh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
			var s = i[Qa](__);
			s[xh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
			n[E_](e),
			n[E_](s),
			t[E_](n),
			this._mc = n,
			this._8s = s,
			this._n0u = e,
			s.isH = !0;
			var r = this,
			h = {
				onstart: function (t, i) {
					i.classList.add(U_)
				},
				onrelease: function (t, i) {
					i[ph][Mh](U_)
				},
				ondrag: function (t, i) {
					var n = r[q_]._kr;
					if (n) {
						var e = i.isH,
						s = e ? t.dx : t.dy;
						if (s && i.scale) {
							var h = n[j_] / i[j_];
							e ? n[uo](-h * s, 0) : n[uo](0, -h * s),
							aq.stopEvent(t)
						}
					}
				},
				enddrag: function (t, i) {
					var n = r[q_]._kr;
					if (n && n[LD]) {
						var e = i.isH,
						s = e ? t.vx : t.vy;
						if (Math.abs(s) > .1) {
							var h = n[j_] / i[j_];
							s *= h,
							e ? n._9c(-s, 0) : n._9c(0, -s)
						}
					}
				}
			};
			this[AD] = new pi(e, h),
			this._horizontalDragSupport = new pi(s, h)
		},
		_3g: function () {
			var t = this[q_]._kr;
			t && t.callLater(this._jp[mh](this))
		},
		_jp: function () {
			var t = this[q_]._kr;
			if (t) {
				var i = t.bounds;
				if (i[Uf]())
					return this._4r(!1), void this._4t(!1);
				var n = t[fP],
				e = t[ro],
				s = t[Wa],
				r = t.scale,
				h = 1 / r,
				a = n.x > i.x + h || n[Jh] < i[Jh] - h,
				o = n.y > i.y + h || n[Qh] < i[Qh] - h,
				f = a && o;
				f ? (P(this._n0u, PD), P(this._8s, PD)) : (D(this[DD], PD), D(this._8s, PD)),
				this._4r(a, n, i, f ? e - FU : e),
				this._4t(o, n, i, f ? s - FU : s)
			}
		},
		_4r: function (t, i, n, e) {
			if (!t)
				return this._8s.style[Ow] = O_, void(this._8s.scale = 0);
			var s = Math.min(i.x, n.x),
			r = Math.max(i.right, n[Jh]),
			h = r - s,
			a = e / h;
			this._8s.scale = a,
			this._8s.style.left = parseInt((i.x - s) * a) + Ka,
			this._8s[ca][Jh] = parseInt((r - i.right) * a) + Ka,
			this._8s.style[Ow] = ""
		},
		_4t: function (t, i, n, e) {
			if (!t)
				return this[DD][ca][Ow] = O_, void(this[DD][j_] = 0);
			var s = Math.min(i.y, n.y),
			r = Math.max(i[Qh], n[Qh]),
			h = r - s,
			a = e / h;
			this._n0u[j_] = a,
			this[DD].style.top = parseInt((i.y - s) * a) + Ka,
			this[DD].style.bottom = parseInt((r - i[Qh]) * a) + Ka,
			this[DD].style.display = ""
		}
	},
	ur[hh] = {
		shape: null,
		initialize: function () {
			T(this, ur, JI),
			this[jD](),
			SU.initBindingProperties(this)
		},
		_n0s: function () {
			this[Qm] = new PU(this.$data[iI]),
			this[ZC](this[Qm], 0),
			this.body = this[Qm]
		},
		invalidateShape: function () {
			this.image.invalidateData(),
			this[iO]()
		},
		_$u: function (t, i, n) {
			var e = this[KC].onBindingPropertyChange(this, t, i, n);
			return e = xU[EL](this, t, i, n) || e,
			SU.onBindingPropertyChange(this, t, i, n) || e
		},
		doValidate: function () {
			this.body && (this.image[Lo] = this.data[iI], this.body[mf] = null != this._2f, this.body[ZO] = this._2f);
			var t = this[qf][HO],
			i = 0,
			n = 0;
			t && (i = t.x, n = t.y);
			var e = this.$x != i || this.$y != n;
			return e && (this[oR] = !0),
			this.$x = i,
			this.$y = n,
			CU[hh][iR].call(this) || e
		}
	},
	p(ur, CU),
	Z(ur[hh], {
		path: {
			get: function () {
				return this[Lo][iI]
			}
		},
		length: {
			get: function () {
				return this[Lo].length
			}
		}
	}),
	ur[hh].addPoint = function (t, i, n) {
		var e = this._i2(t, i),
		s = this[Lo],
		r = In(s[iI], e.x, e.y, n);
		r && (s[OL] = r)
	},
	_r.prototype = {
		_me: function () {
			this._je.style.visibility = OT
		},
		_k7: function () {
			this._je.style[Lm] = T_
		},
		clear: function () {
			this[ND][Xa](),
			this[Zw]()
		},
		contains: function (t) {
			return t instanceof Object && t.id && (t = t.id),
			this._n03.containsById(t)
		},
		_4z: function (t) {
			cU.setStyle(this._je, y_, t ? yT + t[gT]($h) + ")" : "")
		},
		addDrawable: function (t, i) {
			if (i) {
				var n = {
					id: ++AG,
					drawable: t,
					scope: i
				};
				return this[ND].add(n),
				n
			}
			return t.id || (t.id = ++AG),
			this[ND].add(t),
			t
		},
		removeDrawable: function (t) {
			return t.id ? void this[ND].remove(t) : this._n03[Wd](t)
		},
		_n03: null,
		invalidate: function () {
			this[Zw]()
		},
		_mys: function () {
			this._mzaseCanvas._66 || this._k0()
		},
		_ij: function (t, i) {
			this._je[so](t, i)
		},
		_k0: function () {
			var t = this[q_]._scale,
			i = this.g;
			i._l2(),
			i[co](),
			this._mzaseCanvas._9o(i);
			for (var n = this[ND]._jc, e = 0, s = n[Wr]; s > e; e++)
				i.save(), i.beginPath(), this._gv(i, n[e], t), i.restore();
			i.restore()
		},
		_gv: function (t, i, n) {
			return i instanceof Function ? void i(t, n) : void(i[BD]instanceof Function && i[Yl] && i.drawable.call(i[Yl], t, n))
		}
	},
	WG[wP] = !0;
	var GU = function (t) {
		this._kr = t
	};
	WG.ANIMATION_MAXTIME = 600,
	WG[$D] = eq[zD],
	GU.prototype = {
		_kr: null,
		_e4: null,
		_gc: function (t, i, n) {
			this._lg();
			var e = Math.abs(t / 2),
			s = Math.abs(i / 2),
			r = Math.min(WG.ANIMATION_MAXTIME, .6 * Math.max(e, s) * 1e3);
			if (10 > r)
				return !1;
			var h = function (t) {
				return  - (2 * Math.pow(t, 1.5) - 3 * t)
			},
			a = t * r / 3,
			o = i * r / 3;
			this._ky(this._kr.tx + a, this._kr.ty + o, 0, {
				duration: r,
				animationType: h
			}, n)
		},
		_6y: function (t, i, n, e, s) {
			this._e4 && this._e4._lg(),
			s && (this.__delayRender = !0, this._kr.pauseRendering(!0)),
			this._4j(),
			this._e4 = new rq(t, this, i, n),
			this._e4._62 = this._62[mh](this),
			this._e4._l0(e)
		},
		_4j: function () {
			this._kr[FD]()
		},
		_62: function () {
			this[GD] && (this._kr.pauseRendering(!1), delete this.__delayRender),
			this._kr[HD]()
		},
		_dh: function () {
			return this._e4 && this._e4._dh()
		},
		_lg: function () {
			this._e4 && this._e4._lg()
		},
		_in: function (t) {
			var i = this[qD] + (this[YD] - this[qD]) * t,
			n = this[UD] + (this._toTY - this._fromTY) * t,
			e = this[WD] + (this._toScale - this[WD]) * t;
			this._kr.translateTo(i, n, e, this[XD])
		},
		_ky: function (t, i, n, e, s) {
			this._lg();
			var r = this._kr,
			h = r[j_];
			if (0 >= n && (n = h), t != r.tx || i != r.ty || n != h) {
				var a,
				o,
				f;
				e instanceof Object && (a = e.duration, o = e[VD], f = e[KD]);
				var c = r.tx,
				u = r.ty;
				if (!a)
					if (n != h) {
						var _ = n > h ? n / h : h / n;
						_ = Math.log(_) / Math.log(1.3),
						a = 60 * _
					} else {
						var d = JG(t, i, c, u);
						a = d / 2
					}
				o = o || WG[ZD],
				f = f || WG.ANIMATION_TYPE,
				a = Math.min(o, a),
				this[qD] = c,
				this[UD] = u,
				this._fromScale = h,
				this._toTX = t,
				this[JD] = i,
				this._toScale = n,
				this._6y(this._in, a, f, s, n != h)
			}
		}
	},
	WG.INTERACTION_HANDLER_SIZE_TOUCH = 8,
	WG.INTERACTION_HANDLER_SIZE_DESKTOP = 4,
	WG.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30,
	WG[QD] = 20;
	var HU = Math.PI / 4;
	vr[hh] = {
		onElementRemoved: function (t, i) {
			this.element && (t == this.element || $(t) && E(t, this[tj])) && this[Ey](i)
		},
		onClear: function (t) {
			this.element && this[Ey](t)
		},
		destroy: function () {
			delete this[tj],
			this.removeDrawable()
		},
		invalidate: function () {
			this[X_][Kw]()
		},
		removeDrawable: function () {
			this[ij] && (this[X_][nj](this._fhId), delete this[ij], this[Kw]())
		},
		addDrawable: function () {
			this._fhId || (this[ij] = this[X_].addDrawable(this[ej], this).id, this.invalidate())
		},
		doDraw: function () {},
		escapable: !0,
		onkeydown: function (t, i) {
			this[sj] && 27 == t[rj] && (G(t), this[Ey](i))
		}
	},
	aq[hj] = vr,
	br.prototype = {
		defaultCursor: V_,
		getInteractionInstances: function (t) {
			if (!this.interactions)
				return null;
			for (var i = [], n = 0, e = this[aj][Wr]; e > n; n++) {
				var s = this[aj][n];
				s instanceof Function ? i[nh](new s(t)) : s instanceof Object && i[nh](s)
			}
			return i
		}
	},
	yr[hh] = {
		_e9: null,
		_j1: null,
		destroy: function () {
			T(this, yr, Ey, arguments),
			delete this._j1,
			delete this._9g,
			delete this._e9
		},
		doDraw: function (t) {
			var i = this[La];
			i && (i[lc](function (i) {
					this[oj](t, i)
				}, this), this[fj] && t[yf](), this[cj](t))
		},
		styleDraw: function (t) {
			var i = gr(this[Ku][GP], this[uj](this[Ku]));
			i[Zo] && (t[Zo] = i[Zo], i[kE] && (t.lineCap = i[kE]), i[N_] && (t[N_] = i[N_]), i[Xf] && (t.lineDash = i.lineDash, t.lineDashOffset = i[ic] || 0), t[B_] = i[B_], t.stroke()),
			i[Nm] && (t[Nm] = i.fillStyle, t[$m]())
		},
		drawPoint: function (t, i, n) {
			if (n)
				return void t.moveTo(i.x, i.y);
			if (aq.isArray(i)) {
				var e = i[0],
				s = i[1];
				t[Yx](e.x, e.y, s.x, s.y)
			} else
				t.lineTo(i.x, i.y)
		},
		setCurrentPoint: function (t) {
			this[_j] = t
		},
		addPoint: function (t) {
			this._j1 || (this._j1 = [], this[dj]()),
			this._j1.push(t),
			this[Kw]()
		}
	},
	p(yr, vr),
	Z(yr[hh], {
		currentPoint: {
			get: function () {
				return this._9g
			},
			set: function (t) {
				this._9g = t,
				this.invalidate()
			}
		},
		prevPoint: {
			get: function () {
				return this._j1 && this._j1[Wr] ? this._j1[this._j1.length - 1] : null
			}
		},
		points: {
			get: function () {
				return this._9g && this._j1 && this._j1.length ? this._j1.concat(this._9g) : void 0
			}
		}
	}),
	aq[lj] = yr,
	mr[hh] = {
		_mz9: function (t, i) {
			return t instanceof lU && i.canLinkFrom(t)
		},
		_ej: function (t, i) {
			return t instanceof lU && i[vj](t, this.start)
		},
		_9u: function (t, i) {
			var n = i[uy](t);
			return n && n[uL] ? n.bodyBounds[n_] : t[qO]
		},
		_dd: function (t) {
			this._kq && (clearTimeout(this._kq), delete this._kq),
			this._kq = setTimeout(function (t) {
					if (delete this._kq, this[bj] && this[_j]) {
						var i = t.x - this[_j].x,
						n = t.y - this[_j].y;
						Math[xo](i * i + n * n) * this[Ku][j_] <= 2 && this[Va](this.currentPoint)
					}
				}
					[mh](this, this[yj](t)), WG[Fv])
		},
		destroy: function () {
			T(this, mr, Ey, arguments),
			delete this.start,
			this._kq && (clearTimeout(this._kq), delete this._kq)
		},
		doDraw: function (t, i) {
			return this._j1 ? this._j1[Wr] <= 1 ? pr[hh][ej].call(this, t, i) : void T(this, mr, ej, arguments) : void 0
		},
		ondblclick: function (t, i) {
			this[Ey](i)
		},
		finish: function (t, i, n) {
			var e;
			this._j1 && this._j1[Wr] >= 2 && (this._j1.shift(), e = new XG, l(this._j1, function (t) {
					if (aq[Ch](t)) {
						var i = t[0],
						n = t[1];
						e.add(new Hq(oq[yE], [i.x, i.y, n.x, n.y]))
					} else
						e.add(new Hq(oq.SEGMENT_LINE_TO, [t.x, t.y]))
				}, this)),
			i.createEdgeByInteraction(this[bj], n, t, e),
			this[Ey](i)
		},
		onstart: function (t, i) {
			if (this[bj]) {
				var n = t[ay]();
				return this._ej(n, i) ? void this.finish(t, i, n) : void this[Va](this.toLogicalPoint(t))
			}
		},
		startdrag: function (t, i) {
			if (!this[bj] && !t[gj]) {
				var n = t.getData();
				n && this[mj](n, i) && (t[gj] = !0, this.start = n, this[Va](this._9u(n, i)))
			}
		},
		ondrag: function (t, i) {
			this[Ej](t, i)
		},
		enddrag: function (t, i) {
			if (this[bj]) {
				var n = t[ay]();
				this._ej(n, i) && this.finish(t, i, n)
			}
		},
		onrelease: function (t, i) {
			BH(t) && this[Ey](i)
		},
		onmousemove: function (t, i) {
			this[bj] && (this[_j] = this.toLogicalPoint(t), BH(t) && this._dd(t, i))
		},
		toLogicalPoint: function (t) {
			return this.graph.toLogical(t)
		},
		getDefaultDrawStyles: function () {
			return {
				lineWidth: this[Ku][oP](EU.EDGE_WIDTH),
				strokeStyle: this[Ku].getDefaultStyle(EU[SL]),
				lineDash: this[Ku][oP](EU.EDGE_LINE_DASH),
				lineDashOffset: this.graph[oP](EU.EDGE_LINE_DASH_OFFSET),
				lineCap: this.graph[oP](EU.LINE_CAP),
				lineJoin: this[Ku][oP](EU[FM])
			}
		}
	},
	p(mr, yr),
	aq.CreateEdgeInteraction = mr,
	Er[hh] = {
		getDefaultDrawStyles: function () {
			return {
				lineWidth: this[Ku][oP](EU.SHAPE_STROKE),
				strokeStyle: this[Ku].getDefaultStyle(EU[yM]),
				fillStyle: this[Ku][oP](EU[pM])
			}
		},
		finish: function (t, i) {
			if (this._j1 && this._j1[Wr]) {
				var n = this._j1,
				e = 0,
				s = 0,
				r = 0;
				n[lc](function (t) {
					return aq[Ch](t) ? void t.forEach(function () {
						e += t.x,
						s += t.y,
						r++
					}) : (e += t.x, s += t.y, void r++)
				}),
				e /= r,
				s /= r;
				var h = [];
				n[lc](function (t, i) {
					if (0 == i)
						return void h.push(new Hq(oq[bE], [t.x - e, t.y - s]));
					if (aq.isArray(t)) {
						var n = t[0],
						r = t[1];
						h.push(new Hq(oq[yE], [n.x - e, n.y - s, r.x - e, r.y - s]))
					} else
						h[nh](new Hq(oq[xj], [t.x - e, t.y - s]))
				}),
				this[Qa](t, h, e, s),
				this[Ey](i)
			}
		},
		startdrag: function (t) {
			t[gj] = !0
		},
		createElement: function (t, i, n, e) {
			return this[Ku].createShapeByInteraction(t, i, n, e)
		},
		onstart: function (t, i) {
			var n = i.toLogical(t);
			this._e9 = n,
			this[Va](n)
		},
		onmousemove: function (t, i) {
			this._e9 && (this[_j] = i.toLogical(t))
		},
		ondblclick: function (t, i) {
			if (this._e9) {
				if (this._j1[Wr] < 3)
					return void this[Ey](i);
				delete this._j1[this._j1[Wr] - 1],
				this[pj](t, i)
			}
		},
		isClosePath: !0
	},
	p(Er, yr),
	aq[wj] = Er,
	xr[hh] = {
		isClosePath: !1,
		createElement: function (t, i, n, e) {
			return this[Ku][Tj](t, i, n, e)
		},
		getDefaultDrawStyles: function () {
			return {
				lineWidth: DU[EU[YC]],
				strokeStyle: DU[EU.SHAPE_STROKE_STYLE],
				lineDash: this.graph.getDefaultStyle(EU[mM]),
				lineDashOffset: this[Ku].getDefaultStyle(EU[xM]),
				lineCap: this.graph[oP](EU.LINE_CAP),
				lineJoin: this.graph[oP](EU.LINE_JOIN)
			}
		}
	},
	p(xr, Er),
	aq[Oj] = xr,
	pr[hh] = {
		destroy: function (t) {
			T(this, pr, Ey, arguments),
			t[KP] = "",
			this.start = null
		},
		doDraw: function (t) {
			if (this[bj] && this.currentPoint) {
				var i,
				n;
				this[Ku].interactionProperties && (i = this[Ku][GP][nO], n = this[Ku].interactionProperties.edgeType),
				i = i || this[Ku].edgeUIClass || aq.EdgeUI,
				n = n || this[Ku].edgeType;
				var e = i[xL] || aq[Ij].drawReferenceLine,
				s = this[Ku][uy](this.start);
				s && s[uL] && (s = s.bodyBounds[n_], e(t, s, this[_j], n), this[cj](t))
			}
		},
		canLinkFrom: function (t, i) {
			return t instanceof lU && i.canLinkFrom(t)
		},
		canLinkTo: function (t, i) {
			return t instanceof lU && i[vj](t, this.start)
		},
		startdrag: function (t, i) {
			var n = t[ay]();
			this[rP](n, i) && (t.responded = !0, this.start = n, i.cursor = jy, this[dj]())
		},
		ondrag: function (t, i) {
			this[bj] && (aq[zL](t), this[_j] = i.toLogical(t), this.invalidate())
		},
		enddrag: function (t, i) {
			if (this[bj]) {
				this[Kw]();
				var n = t[ay]();
				this[vj](n, i) && i[Mj](this.start, n, t),
				this[Ey](i)
			}
		},
		getDefaultDrawStyles: function () {
			return {
				lineWidth: this[Ku].getDefaultStyle(EU.EDGE_WIDTH),
				strokeStyle: this[Ku][oP](EU[SL]),
				lineDash: this[Ku][oP](EU.EDGE_LINE_DASH),
				lineDashOffset: this[Ku][oP](EU[mS]),
				lineCap: this.graph[oP](EU[aC]),
				lineJoin: this[Ku].getDefaultStyle(EU[FM])
			}
		}
	},
	p(pr, yr),
	aq[kj] = pr,
	WG[Sj] = !1,
	kr.prototype = {
		html: null,
		createHTML: function () {
			var t = i[Qa](Aj);
			t[xh] = Cj,
			t[ca][Gf] = zw,
			t[ca][lo] = n_,
			t.style[Eg] = Rj,
			t[ca][xI] = Lj,
			t[ca][Pj] = "0px 0px 10px rgba(40, 85, 184, 0.75)",
			t[ca][Ow] = O_,
			t.style[Aw] = T_;
			var n = this;
			return t.oninput = function (t) {
				n[Dj](t)
			},
			t[jj] = function (t) {
				return 27 == t.keyCode ? void n[Nj]() : void 0
			},
			t.onkeypress = function (i) {
				if (13 == i[rj] || 10 == i[rj]) {
					if (i.preventDefault(), i[qp] || i[Ra] || i[Hp])
						return Ir(t, yo), void n[Dj](i);
					n.stopEdit()
				}
			},
			i.body.appendChild(t),
			t
		},
		setText: function (t, i) {
			this[RP].value = t || "",
			i && (this[RP].style[Q_] = i),
			Mr(this[RP]),
			this[Bj](this[RP])
		},
		onSizeChange: function (t) {
			var i = (t.offsetWidth, t[Z_], Or(t));
			return t[ca][ro] = i[ro] + 30 + Ka,
			t[ca].height = i[Wa] + 10 + Ka,
			i
		},
		onValueChange: function (t) {
			var i = t[Y_];
			this.onSizeChange(i),
			i[ca].left = i.x - i[K_] / 2 + Ka
		},
		onClickOnWindow: function (t) {
			t[Y_] != this[RP] && (WG[Sj] ? this[$j]() : this[Nj]())
		},
		startEdit: function (i, n, e, s, r) {
			this[RP] || (this.html = this[zj]()),
			this[Fj] || (this[Fj] = function (t) {
				this[Gj](t)
			}
				.bind(this)),
			t.addEventListener(Mb, this.stopEditWhenClickOnWindow, !0),
			this[Eu] = r,
			this[RP].x = i,
			this.html.y = n,
			this[RP][ca][Ow] = uD,
			Tr(this[RP], i, n),
			this[Hj](e, s || 10),
			Tr(this[RP], i, n)
		},
		isEditing: function () {
			return O_ != this.html.style.display
		},
		cancelEdit: function () {
			this.stopEdit(!0)
		},
		stopEdit: function (i) {
			if (this[qj]()) {
				t.removeEventListener(Mb, this[Fj]);
				var n = this[RP][bh];
				!i && this[Eu] && this.callback(n),
				this.html[ca][Ow] = O_,
				this[RP][bh] = null,
				this.callback = null
			}
		},
		destroy: function () {
			this[RP] && i.body[Tv](this[RP])
		}
	},
	aq[Yj] = kr;
	var qU = function (t) {
		this[Ku] = t
	};
	qU.prototype = {
		destroy: function (t) {
			t.labelEditor && (t.labelEditor[Ey](), delete t.labelEditor)
		},
		ondblclick: function (t, i) {
			var n = t[ay]();
			if (n) {
				if (n[Uj] !== !1) {
					if (i[gL] && i[Wj](n)) {
						var e = i.hitTest(t);
						if (e instanceof LU && e[gL] !== !1) {
							var s = i.labelEditor;
							s || (i[Xj] = s = new kr);
							var r = e[Io]();
							return r = i[Vj](r.x + r[ro] / 2, r.y + r.height / 2),
							r = wr(r.x, r.y, i[RP]),
							void i[Kj](n, e, s, r)
						}
					}
					var h = n instanceof yU,
					a = n instanceof dU && n[Zj]();
					return n._3x && (wi(t) || !h && !a) ? void(i.currentSubNetwork = n) : h ? (n[eO] = !n[eO], void this[Ku][tP](new Nr(this[Ku], Nr[cI], t, n))) : void(a && this[Ku][Jj](n) && this[Ku][tP](new Nr(this[Ku], Nr[Qj], t, n)))
				}
			} else {
				if (i[aI])
					return void i[tN]();
				if (i[iN]) {
					var o = i[nN] || 1;
					Math.abs(i[j_] - o) < 1e-4 ? i[xP]() : i[EP](o)
				}
			}
		}
	};
	var YU = function (t) {
		this.graph = t
	};
	YU.prototype = {
		onkeydown: function (t, i) {
			if (i[gL]) {
				var n = t[rj];
				if (8 == n || 46 == n || 127 == n)
					return i.removeSelectionByInteraction(t), void z(t);
				if (wi(t)) {
					if (67 == n);
					else if (86 == n);
					else if (90 == n);
					else if (89 != n)
						return;
					z(t)
				}
			}
		}
	},
	aq.EditInteraction = YU;
	var UU = function (t) {
		this.graph = t
	};
	UU.prototype = {
		onkeydown: function (i, n) {
			if (i[Ca] && 83 == i.keyCode) {
				var e = n.exportImage(n[j_], n[fP]),
				s = t.open(),
				r = s[eN];
				r[sN] = rN + e[ro] + hN + e[Wa];
				var h = r.createElement(l_);
				h.src = e[Lo],
				r[Pm].appendChild(h),
				z(i)
			}
		}
	};
	var WU = function (t) {
		this[Ku] = t
	};
	WU.prototype = {
		destroy: function () {
			delete this[aN],
			delete this[oN]
		},
		_22: function (t) {
			var i = new XG;
			return t[kP][lc](function (n) {
				t.isMovable(n) && t[fN](n) && i.add(n)
			}, this),
			i
		},
		onstart: function (t, i) {
			this[oN] && this.destroy(i)
		},
		startdrag: function (t, i) {
			if (!(t.responded || t.touches && 1 != t[Wh].length)) {
				var n = t[ay]();
				if (!n || !i[cN](n) || !i[AP](n))
					return void this[Ey](i);
				t[gj] = !0,
				this[oN] = n,
				this.draggingElements = this._22(i);
				var e = new Nr(i, Nr[uN], t, this[oN], this.draggingElements[yd]);
				return i[_N](e) === !1 ? void this.destroy(i) : void i.onInteractionEvent(e)
			}
		},
		ondrag: function (t, i) {
			if (this[oN]) {
				if (t.touches && 1 != t.touches.length)
					return void this[ry](t, i);
				G(t);
				var n = t.dx,
				e = t.dy,
				s = i.scale;
				n /= s,
				e /= s;
				var r = new Nr(i, Nr[dN], t, this[oN], this[aN][yd]);
				i[lN](this.draggingElements[yd], n, e),
				i.onInteractionEvent(r)
			}
		},
		enddrag: function (t, i) {
			if (this[oN]) {
				if (this.draggingElements && this.draggingElements.length) {
					if (t[Hp]) {
						var n,
						e = i[pT](t),
						s = e.x,
						r = e.y;
						i[vN](function (t) {
							var i = t.data;
							if (!this[aN][s_](i) && t[HT][ko](s - t.x, r - t.y) && t[r_](s, r, 1)) {
								if (i instanceof aq[FP]) {
									if (!i[u_])
										return;
									for (var e = this[aN].length; e-- > 0; ) {
										var h = this[aN].get(e);
										if (h instanceof aq.Node && h[bN](i))
											return
									}
									return n = i,
									!1
								}
								return (i[u_] || i._ig() && i.expanded) && (n = i),
								!1
							}
						}, this),
						n && this[aN][lc](function (t) {
							for (var i = t.parent; i; ) {
								if (this[aN][s_](i))
									return;
								i = i.parent
							}
							t[Cc] = n
						}, this)
					}
					var h = new Nr(i, Nr.ELEMENT_MOVE_END, t, this[oN], this[aN][yd]);
					i[tP](h)
				}
				this.destroy(i)
			}
		},
		onpinch: function (t, i) {
			this[oN] && this.enddrag(t, i)
		},
		step: 1,
		onkeydown: function (t, i) {
			if (wi(t)) {
				var n,
				e;
				if (37 == t.keyCode ? n = -1 : 39 == t.keyCode ? n = 1 : 38 == t[rj] ? e = -1 : 40 == t[rj] && (e = 1), n || e) {
					var s = this._22(i)[yd];
					if (0 != s[Wr]) {
						z(t),
						n = n || 0,
						e = e || 0;
						var r = this[yN] / i[j_],
						h = new Nr(i, Nr[gN], t, null, s);
						i[lN](s, n * r, e * r),
						i[tP](h)
					}
				}
			}
		}
	};
	var XU = function (t) {
		this.graph = t
	};
	XU.prototype = {
		onkeydown: function (t, i) {
			wi(t) || (37 == t[rj] ? (this._5p(i, 1, 0), z(t)) : 39 == t[rj] ? (this._5p(i, -1, 0), z(t)) : 38 == t[rj] ? (this._5p(i, 0, 1), z(t)) : 40 == t[rj] && (this._5p(i, 0, -1), z(t)))
		},
		_5p: function (t, i, n) {
			t._9c(i, n)
		},
		onstart: function (t, i) {
			this._l0 && this.destroy(i)
		},
		_l0: !1,
		startdrag: function (t, i) {
			if (!t[gj]) {
				t[gj] = !0,
				this._l0 = !0,
				i[KP] = ZH;
				var n = new Nr(i, Nr.PAN_START, t);
				i.onInteractionEvent(n)
			}
		},
		ondrag: function (t, i) {
			this._l0 && i.translate(t.dx || 0, t.dy || 0)
		},
		enddrag: function (t, i) {
			if (this._l0) {
				if (i[LD] !== !1) {
					var n = t.vx,
					e = t.vy;
					(Math.abs(n) > .1 || Math.abs(e) > .1) && i._9c(n, e)
				}
				this[Ey](i);
				var s = new Nr(i, Nr[mN], t);
				i.onInteractionEvent(s)
			}
		},
		startpinch: function (t, i) {
			i[eD](!0)
		},
		onpinch: function (t, i) {
			this._l0 = !0;
			var n = t[yb];
			if (n) {
				var e = i[HL](t[n_]);
				i[lP](n, e.x, e.y, !1)
			}
		},
		endpinch: function (t, i) {
			i[eD](!1)
		},
		destroy: function (t) {
			this._l0 = !1,
			t[KP] = null
		}
	},
	Sr.prototype = {
		_1l: function (t) {
			this[tj] && t.source == this[tj] && this[Ku][dP](function () {
				this._jp()
			}, this)
		},
		_5: function () {
			this[EN] || (this[EN] = !0, this[Ku][xN][Ul](this._1l, this))
		},
		_4: function () {
			this[EN] = !1,
			this[Ku].dataPropertyChangeDispatcher[iE](this._1l, this)
		},
		onElementRemoved: function (t, i) {
			this[tj] && (t == this[tj] || Array[Ch](t) && E(t, this[tj])) && this[Ey](i)
		},
		onClear: function (t) {
			this.element && this[Ey](t)
		},
		destroy: function () {
			this[Ku][KP] = null,
			this.element && delete this.element[pN],
			this._mousePressed = !1,
			delete this.element,
			delete this._9l,
			delete this._9g,
			delete this[wN],
			this._6z(),
			this._4()
		},
		_6z: function () {
			this[TN] && (this[X_][nj](this.drawLineId), delete this[TN], this[X_][Kw]())
		},
		_mzw: function () {
			this.drawLineId && this[X_][s_](this[TN]) || (this[TN] = this[X_][dj](this.drawLine, this).id, this[X_][Kw]())
		},
		_9l: null,
		_5g: function (t) {
			this._9l = t,
			this.invalidate()
		},
		isEndPointEditable: function (t, i) {
			return this[Ku][ON](t, i)
		},
		drawPoint: function (t, i, n) {
			(!i[IN] || this[ON](this[tj], i.isFrom)) && (t.beginPath(), i[MN] ? t.rect(i.x - this[kN] / n, i.y - this.handlerSize / n, this[kN] / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this.handlerSize / n, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t[Xf] = [], t[B_] = F_, t[Nm] = "rgba(255, 255, 0, 0.8)", t.stroke(), t[$m]())
		},
		_fh: function (t, i, n, e) {
			e ? t.moveTo(i, n) : t[Xc](i, n)
		},
		drawLine: function (t, i) {
			if (this._9l && this._9l[Wr]) {
				var n = this._9l;
				t.save();
				var e = this[tj]instanceof vU;
				e && (t[uo](this[tj].x, this[tj].y), this[tj][zo] && t.rotate(this[tj].rotate));
				var s,
				r = [];
				t[$E]();
				var h = n[Wr];
				n.forEach(function (i, n) {
					if (i[Do] != oq[mE])
						for (var e = !n || n == h - 1, a = 0, o = i[La]; a + 1 < o[Wr]; ) {
							var f = o[a],
							c = o[a + 1],
							u = {
								x: f,
								y: c,
								isControlPoint: this._70(i, a)
							};
							e && (u[IN] = !0, u[SN] = 0 == n),
							r[nh](u),
							this._fh(t, u.x, u.y, null == s),
							s = u,
							a += 2
						}
				}, this),
				t[Zo] = 1 / i,
				t[Xf] = [2 / i, 3 / i],
				t.strokeStyle = AN,
				t[Ro](),
				r[lc](function (n, e) {
					this.drawPoint(t, n, i, e)
				}, this),
				t.restore()
			}
		},
		invalidate: function () {
			this[X_][Kw]()
		},
		_3b: function (t) {
			if (this[tj] != t && (this.element && this[Ey](), t && this[Wj](t))) {
				var i = this._5k(t, this[Ku]);
				i && (this[tj] = t, t[pN] = !0, this[wN] = !0, this._5g(i), this._5(), this[CN]())
			}
		},
		_jp: function () {
			if (this.drawLineId && this[tj]) {
				var t = this._5k(this[tj], this[Ku]);
				return t ? void this._5g(t) : void this.destroy(this.graph)
			}
		},
		_5k: function (t, i) {
			if (i[Wj](t)) {
				var n = t[OL] || [];
				n instanceof XG && (n = n.toDatas());
				var e = i[uy](t);
				if (e instanceof aq[Ij]) {
					var s = e[Ju](i.getUI(t[Dc])),
					r = e.getEndPointBounds(i[uy](t[Rc])),
					h = s[n_],
					a = r[n_],
					o = e[Ou](EU.EDGE_FROM_OFFSET),
					f = e[Ou](EU[Qu]);
					o && (h.x += o.x || 0, h.y += o.y || 0),
					f && (a.x += f.x || 0, a.y += f.y || 0),
					n.splice(0, 0, new aq[RN](oq[bE], [h.x, h.y])),
					n[nh](new aq[RN](oq[bE], [a.x, a.y]))
				}
				return n
			}
		},
		_i2: function (t, i) {
			t -= this[tj].x,
			i -= this.element.y;
			var n = {
				x: t,
				y: i
			};
			return this[tj].rotate && qs(n, -this.element[zo]),
			n
		},
		onclick: function (t, i) {
			if (i.editable && t.altKey && this[tj]) {
				var n = this._g5(t, i);
				if (n && n[MN])
					return void(n[Kl] >= 0 && this.element[LN](n.index));
				if (this[tj] == t[ay]()) {
					var e = i[pT](t),
					s = i.getUI(this[tj]);
					s[Va](e.x, e.y, this[kN] || 2)
				}
			}
		},
		isEditable: function (t) {
			return this[Ku][Wj](t) && (t instanceof vU || t instanceof dU && (!t[Hc]() || t.hasPathSegments()))
		},
		ondblclick: function (t, i) {
			if (!i[gL])
				return void(this[tj] && this[Ey](i));
			var n = t[ay]();
			return !n || n == this.element || n._editting ? void this[Ey](i) : void this._3b(n)
		},
		onstart: function (t, i) {
			if (this[PN] = !0, !i[gL])
				return void(this[tj] && this[Ey](i));
			if (!t[gj]) {
				if (this.element && this._g5(t, i))
					return void(t[gj] = !0);
				var n = t[ay]();
				return n && i.isResizable(n) && n instanceof vU ? void(this.element && n != this.element && this[Ey]()) : void this._3b(n)
			}
		},
		onrelease: function () {
			this[PN] = !1,
			this.element && (this[wN] = !0)
		},
		_9g: null,
		_g5: function (t, i) {
			var n = i[pT](t);
			this[tj]instanceof vU && (n = this._i2(n.x, n.y));
			var e,
			s = i[j_],
			r = this.handlerSize / s,
			h = this._9l,
			a = h[Wr],
			o = this.element instanceof aq[FP];
			return h[lc](function (t, s) {
				for (var f = 0, c = t[La]; f + 1 < c[Wr]; ) {
					var u = c[f],
					_ = c[f + 1],
					d = JG(n.x, n.y, u, _);
					if (r > d) {
						if (e = {
								oldPoints: c.slice(0),
								segment: t,
								index: s,
								pointIndex: f
							}, o && (e[Kl] -= 1), o && !Ar(t) && (0 == s || s == h[Wr] - 1)) {
							e[IN] = !0;
							var l = 0 == s;
							e[SN] = l;
							var v = l ? aq.Styles[ES] : aq.Styles[Qu],
							b = i.getStyle(this.element, v) || {};
							e[DN] = [b.x || 0, b.y || 0]
						}
						return this._70(t, f) && (e.isControlPoint = !0, s > 0 && (e[jN] = h instanceof XG ? h[Gd](s - 1) : h[s - 1]), a > s + 1 && (e[NN] = h instanceof XG ? h.getByIndex(s + 1) : h[s + 1], e.nextSegment[La] && (e[BN] = e[NN].points.slice(0)))),
						!1
					}
					f += 2
				}
			}, this),
			e && e.isEndPoint && !this[ON](this[tj], e[SN]) ? void 0 : e
		},
		_70: function (t, i) {
			return i == t[La][Wr] - 2
		},
		startdrag: function (t, i) {
			if (this[tj] && this[wN] && (this._9g = this._g5(t, i), this._9g)) {
				this._6z(),
				t.responded = !0;
				var n = new Nr(i, Nr[$N], t, this[tj]);
				n.point = this._9g,
				i[tP](n)
			}
		},
		onkeyup: function (t, i) {
			this[PN] && 16 != !t.keyCode && this.element && this._9g && this._9g.delta && this._myy(this._9g.delta.x, this._9g.delta.y, i, t, !1)
		},
		onkeydown: function (t, i) {
			this[PN] && this[tj] && this._9g && t.shiftKey && this._9g[zN] && this._myy(this._9g[zN].x, this._9g[zN].y, i, t, !0)
		},
		_myy: function (t, i, n, e, s) {
			var r = this._9g,
			h = this[tj],
			a = r.oldPoints,
			o = r[FN];
			if (r[IN]) {
				var f = r[SN] ? aq[BP][ES] : aq[BP].EDGE_TO_OFFSET,
				c = {
					x: a[0] + t,
					y: a[1] + i
				};
				h[Tu](f, c);
				var u = new Nr(n, Nr[GN], e, h);
				return u[HN] = r,
				void n[tP](u)
			}
			if (s && r[MN]) {
				var _ = {
					x: a[a.length - 2] + t,
					y: a[a[Wr] - 1] + i
				},
				d = r[jN],
				l = r.nextSegment,
				v = 20 / n[j_],
				b = Number[al],
				y = b,
				g = b,
				m = b;
				d && (d = d[Po], b = Math.abs(_.x - d.x), g = Math.abs(_.y - d.y)),
				l && (l = l[Po], y = Math.abs(_.x - l.x), m = Math.abs(_.y - l.y)),
				v > b && y > b ? t += d.x - _.x : v > y && b > y && (t += l.x - _.x),
				v > g && m > g ? i += d.y - _.y : v > m && g > m && (i += l.y - _.y)
			}
			if (r[MN] && Ar(o)) {
				for (var E = o[La][Wr] - 4; E < o.points[Wr]; ) {
					var x = a[E] + t,
					p = a[E + 1] + i;
					o.points[E] = x,
					o[La][E + 1] = p,
					E += 2
				}
				if (r[NN] && Ar(r.nextSegment)) {
					var w = r[BN],
					x = w[0] + t,
					p = w[1] + i;
					r[NN][La][0] = x,
					r[NN][La][1] = p
				}
			} else {
				var E = r.pointIndex,
				x = a[E] + t,
				p = a[E + 1] + i;
				o[La][E] = x,
				o[La][E + 1] = p
			}
			h.firePathChange();
			var u = new Nr(n, Nr[GN], e, h);
			u[HN] = r,
			n[tP](u)
		},
		ondrag: function (t, i) {
			if (this[tj] && this._9g) {
				var n = this._9g,
				e = this.element,
				s = t.totalDeltaX,
				r = t[qN],
				h = i[j_];
				if (s /= h, r /= h, e[zo]) {
					var a = {
						x: s,
						y: r
					};
					qs(a, -e.rotate),
					s = a.x,
					r = a.y
				}
				n[zN] = {
					x: s,
					y: r
				},
				this[YN](s, r, i, t, t.shiftKey)
			}
		},
		enddrag: function (t, i) {
			if (this[tj] && this._9g) {
				this[CN](),
				this._jp();
				var n = new Nr(i, Nr.POINT_MOVE_END, t, this[tj]);
				n[HN] = this._9g,
				i.onInteractionEvent(n)
			}
		},
		onmousemove: function (t, i) {
			this[tj] && (i[KP] = t[qp] && (this._g5(t, i) || this.element == t[ay]()) ? "crosshair" : null)
		}
	},
	WG[UN] = 1,
	WG[WN] = V(3724541951),
	WG[XN] = V(1430753245),
	oq.RECTANGLE_SELECTION_MODE_INTERSECT = VN,
	oq[KN] = ZN,
	WG.RECTANGLE_SELECTION_MODE = oq.RECTANGLE_SELECTION_MODE_INTERSECT;
	var VU = function (t) {
		this[Ku] = t,
		this[X_] = t[X_]
	};
	VU[hh] = {
		onstart: function (t, i) {
			this._l0 && this.destroy(i)
		},
		startdrag: function (t, i) {
			t[gj] || (t[gj] = !0, this._l0 = i[pT](t), i[KP] = jy, this._12Id = this.topCanvas[dj](this._12, this).id)
		},
		ondrag: function (t, i) {
			if (this._l0) {
				G(t),
				this[JN] = i.toLogical(t),
				this[Kw]();
				var n = new Nr(i, Nr[QN], t, i[kP]);
				i.onInteractionEvent(n)
			}
		},
		enddrag: function (t, i) {
			if (this._l0) {
				this[tB] && (clearTimeout(this._fdTimer), this[tB] = null),
				this._fd(!0),
				this[Ey](i);
				var n = new Nr(i, Nr.SELECT_END, t, i[kP]);
				i.onInteractionEvent(n)
			}
		},
		onpinch: function (t, i) {
			this._l0 && this[ry](t, i)
		},
		_12: function (t, i) {
			t.strokeStyle = WG[WN],
			t[Nm] = WG.SELECTION_RECTANGLE_FILL_COLOR,
			t[Zo] = WG[UN] / i;
			var n = this._l0.x,
			e = this._l0.y;
			t.rect(n, e, this[JN].x - n, this[JN].y - e),
			t.fill(),
			t[Ro]()
		},
		invalidate: function () {
			return this[uI] ? void this[X_][Kw]() : (this[uI] = !0, void(this[tB] = setTimeout(this._fd[mh](this), 100)))
		},
		_fd: function (t) {
			if (this[uI] = !1, this._fdTimer = null, !this._l0 || DG && !t)
				return void this[X_].invalidate();
			var i = Math.min(this._l0.x, this[JN].x),
			n = Math.min(this._l0.y, this[JN].y),
			e = Math.abs(this._l0.x - this[JN].x),
			s = Math.abs(this._l0.y - this[JN].y);
			if (!e || !s)
				return void this[Ku].selectionModel[Xa]();
			var r = [],
			h = this[Ku].scale,
			a = this[Ku].rectangleSelectionMode;
			if (this[Ku][iB](function (t) {
					t._hr && this.graph[nB](t[qf]) && this[eB](i, n, e, s, t, h, a) && r[nh](t[Lo])
				}
					[mh](this)), this.graph.selectionModel.set(r), this.topCanvas[Kw](), !t) {
				var o = new Nr(this[Ku], Nr[sB], null, this.graph[kP]);
				this[Ku][tP](o)
			}
		},
		inRectangle: function (t, i, n, e, s, r, h) {
			var a = s[Io]();
			return ai(t, i, n, e, a.x, a.y, a[ro], a[Wa]) ? !0 : (h = h || WG[rB], h == oq.RECTANGLE_SELECTION_MODE_CONTAIN ? !1 : Dn(t, i, n, e, s, r))
		},
		destroy: function (t) {
			this._l0 = null,
			t[KP] = null,
			this[hB] && (this[X_][nj](this[hB]), delete this[hB], this[X_][Kw]())
		}
	};
	var KU = k({
			"super": VU,
			onstart: null,
			startdrag: null,
			ondrag: null,
			enddrag: null,
			accept: function (t, i, n) {
				return n[aB] !== !1
			},
			oncontextmenu: function (t, i) {
				i.popupmenu || G(t)
			},
			onstart2: function () {
				VU[hh][Xb][rh](this, arguments)
			},
			startdrag2: function (t, i) {
				t.responded || (i[oB] && i[oB].hide instanceof Function && i[oB][fB](), VU[hh].startdrag[rh](this, arguments))
			},
			ondrag2: function () {
				VU[hh][ny].apply(this, arguments)
			},
			enddrag2: function () {
				VU[hh][ry].apply(this, arguments)
			}
		}),
	HU = Math.PI / 4;
	Cr.prototype = {
		_f6: !1,
		_f4: !1,
		_1l: function (t) {
			this[tj] && t[ef] == this[tj] && this[Ku][dP](function () {
				this[cB]()
			}, this)
		},
		_5: function () {
			this._lqPropertyChangeListing || (this[EN] = !0, this[Ku].dataPropertyChangeDispatcher[Ul](this._1l, this))
		},
		_4: function () {
			this[EN] = !1,
			this[Ku][xN][iE](this._1l, this)
		},
		onElementRemoved: function (t, i) {
			this[tj] && (t == this.element || Array[Ch](t) && E(t, this.element)) && this[Ey](i)
		},
		onClear: function (t) {
			this[tj] && this[Ey](t)
		},
		ondblclick: function (t, i) {
			this.element && this[Ey](i)
		},
		destroy: function (t) {
			t[KP] = null,
			delete this.element,
			delete this._d2,
			delete this[vR],
			delete this._9g,
			delete this[wN],
			delete this._j1,
			delete this[uB],
			delete this._f4,
			delete this._f6,
			delete this[_B],
			this._6z(),
			this._4()
		},
		_6z: function () {
			this._fhId && (this[X_][nj](this._fhId), delete this[ij], this[X_][Kw]())
		},
		_mzw: function () {
			this[ij] && this[X_][s_](this[ij]) || (this[ij] = this[X_][dj](this._fh, this).id, this[X_][Kw]())
		},
		_d2: null,
		_j1: null,
		_8a: function (t) {
			this._d2 = t;
			var i = this._d2.x,
			n = this._d2.y,
			e = this._d2.width,
			s = this._d2[Wa];
			if (this[tj]instanceof yU && this[tj].expanded, this._f4) {
				var r = [];
				r[nh]({
					x: i,
					y: n,
					p: eH[yl],
					cursor: dB,
					rotate: 5 * HU
				}),
				r.push({
					x: i + e / 2,
					y: n,
					p: eH[ML],
					cursor: lB,
					rotate: 6 * HU
				}),
				r.push({
					x: i + e,
					y: n,
					p: eH[wl],
					cursor: ud,
					rotate: 7 * HU
				}),
				r.push({
					x: i,
					y: n + s / 2,
					p: eH.LEFT_MIDDLE,
					cursor: vB,
					rotate: 4 * HU
				}),
				r.push({
					x: i,
					y: n + s,
					p: eH[pl],
					cursor: ud,
					rotate: 3 * HU
				}),
				r.push({
					x: i + e,
					y: n + s / 2,
					p: eH[Tl],
					cursor: vB,
					rotate: 0
				}),
				r[nh]({
					x: i + e / 2,
					y: n + s,
					p: eH.CENTER_BOTTOM,
					cursor: lB,
					rotate: 2 * HU
				}),
				r[nh]({
					x: i + e,
					y: n + s,
					p: eH.RIGHT_BOTTOM,
					cursor: dB,
					rotate: HU
				}),
				this._j1 = r
			}
			this._rotatePoint = this._f6 ? {
				x: i + e / 2,
				y: n,
				cursor: JH
			}
			 : null,
			this._mys()
		},
		_ew: function (t, i, n, e) {
			t[$E]();
			var s = (this[kN] - 1) / e;
			t[Ac](i - s, n - s, 2 * s, 2 * s),
			t.lineWidth = 1 / e,
			t[Xf] = [],
			t[B_] = F_,
			t[Nm] = "rgba(255, 255, 255, 0.8)",
			t[Ro](),
			t.fill()
		},
		_5v: function (t, i, n, e, s, r) {
			s = s || this[kN],
			r = r || bB,
			t.beginPath(),
			s /= e,
			t.arc(i, n, s, 0, 2 * Math.PI, !1),
			t[Zo] = 1 / e,
			t.lineDash = [],
			t[B_] = F_,
			t[Nm] = r,
			t.stroke(),
			t[$m]()
		},
		_i2: function (t, i) {
			t -= this[tj].x,
			i -= this.element.y;
			var n = {
				x: t,
				y: i
			};
			return this[tj][zo] && qs(n, -this.element.rotate),
			n
		},
		_fh: function (t, i) {
			if (this._d2) {
				if (t.save(), t.translate(this[tj].x, this.element.y), this[tj][zo] && t[zo](this[tj][zo]), this._rotatePoint) {
					this._5v(t, 0, 0, i, 3, yB);
					var n = this[uB].x,
					e = this[uB].y - this[gB] / i;
					t[$E](),
					t.moveTo(n, this[uB].y),
					t[Xc](n, e),
					t[Zo] = 1 / i,
					t[B_] = AN,
					t[Ro](),
					this._5v(t, n, e, i)
				}
				if (this._j1) {
					var s = this._d2.x,
					r = this._d2.y,
					h = this._d2[ro],
					a = this._d2[Wa];
					t[$E](),
					t[Ac](s, r, h, a),
					t.lineWidth = 1 / i,
					t[Xf] = [2 / i, 3 / i],
					t[B_] = AN,
					t.stroke(),
					l(this._j1, function (n) {
						this._ew(t, n.x, n.y, i)
					}, this)
				}
				t.restore()
			}
		},
		_mys: function () {
			this[X_][Kw]()
		},
		_3b: function (t, i, n, e) {
			this.element = t,
			this[CN](),
			this._f4 = n,
			this._f6 = e,
			this[cB](),
			this._5()
		},
		_n0a: function () {
			if (this[ij] && this[tj]) {
				var t = this.graph[uy](this[tj]);
				this._mzody = t.body;
				var i = Rr(this._mzody, this[vR]._jg),
				n = Rr(this[vR], this[vR]._7z);
				this._insets = new nH(i.y - n.y, i.x - n.x, n.bottom - i[Qh], n.right - i[Jh]),
				this._8a(n)
			}
		},
		_mzy: function (t, i) {
			return i[mB](t)
		},
		_mzx: function (t, i) {
			return !(t instanceof yU && t[eO] || !i[EB](t))
		},
		_da: function (t, i) {
			return t instanceof lU && i[Wj](t)
		},
		onstart: function (t, i) {
			if (!i[gL])
				return void(this[tj] && this[Ey](i));
			if (!t[gj]) {
				var n = i[uy](t),
				e = t[ay]();
				if (e != this[tj]) {
					if (this[tj]) {
						if (this._g5(t, i))
							return void(t[gj] = !0);
						this.destroy(i)
					}
					if (e && !e[pN] && this._da(e, i)) {
						var s = this._mzy(e, i, n),
						r = this[xB](e, i, n);
						(s || r) && this._3b(e, i, s, r)
					}
				}
			}
		},
		onrelease: function (t, i) {
			this[tj] && (this[wN] = !0, this._mzw(), i.callLater(function () {
					this[cB]()
				}, this))
		},
		_9g: null,
		_g5: function (t, i) {
			var n = i[pT](t);
			n = this._i2(n.x, n.y);
			var e = i.scale,
			s = this[kN] / e;
			if (this[uB]) {
				var r = this[uB].x,
				h = this._rotatePoint.y - this._rotateHandleLength / e;
				if (JG(n.x, n.y, r, h) < s)
					return this._rotatePoint
			}
			if (this._j1 && this._j1[Wr]) {
				var a;
				return l(this._j1, function (t) {
					return JG(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
				}, this),
				a
			}
		},
		onmousemove: function (t, i) {
			if (this.element) {
				var n = this._g5(t, i);
				if (!n)
					return void(i.cursor = null);
				if (n != this._rotatePoint && this.element[zo]) {
					var e = n[zo] + this[tj][zo];
					return void(i[KP] = Lr(e))
				}
				i[KP] = n[KP]
			}
		},
		startdrag: function (t, i) {
			if (this[tj] && (this._6z(), this._myanEdit && (this._9g = this._g5(t, i), this._9g))) {
				if (t[gj] = !0, this._9g == this._rotatePoint)
					return this._9g[bj] = i[pT](t), void(this._9g[zo] = this[tj].rotate || 0);
				var n = new Nr(i, Nr.RESIZE_START, t, this.element);
				n[HN] = this._9g,
				i.onInteractionEvent(n)
			}
		},
		_6w: function (t, i, n, e, s, r) {
			var h = this._d2,
			a = h.x,
			o = h.y,
			f = h.width,
			c = h.height;
			if (r) {
				var u = e != f;
				u ? s = e * c / f : e = s * f / c
			}
			var _ = t[iI].segments,
			d = e / f,
			l = s / c,
			v = -a * d + i,
			b = -o * l + n;
			_.forEach(function (t) {
				if (t.type != oq.SEGMENT_CLOSE) {
					var e = t[La];
					if (e && e.length)
						for (var s = 0, r = e[Wr]; r > s; s += 2) {
							var h = e[s],
							f = e[s + 1];
							e[s] = (h - a) * d + i - v,
							e[s + 1] = (f - o) * l + n - b
						}
				}
			}),
			this._d2.set(i - v, n - b, e, s),
			t[SP](t.x + v, t.y + b),
			t.firePathChange()
		},
		_9z: function (t, i, n, e, s) {
			this._d2.set(i, n, e, s),
			t.minSize = {
				x: i,
				y: n,
				width: e,
				height: s
			}
		},
		_4v: function (t, i, n, e, s) {
			if (this[tj]instanceof yU)
				return this._9z(this.element, t, i, n, e, s);
			if (this[tj]instanceof vU)
				return this._6w(this[tj], t, i, n, e, s);
			var r = this[vR]instanceof LU;
			if (!r && s) {
				var h = this._d2,
				a = this[vR][pB],
				o = n != h[ro];
				o ? e = n * a[Wa] / a[ro] : n = e * a[ro] / a[Wa]
			}
			var f = this[tj][ZO],
			c = new tH(n - this[_B].left - this[_B].right, e - this[_B].top - this._insets.bottom);
			if (c[ro] < 1 && (n = this[_B][tf] + this[_B][Jh] + 1, c[ro] = 1), c[Wa] < 1 && (e = this[_B].top + this[_B][Qh] + 1, c[Wa] = 1), r ? this[tj][Tu](EU[Ik], c) : this[tj][Jw] = c, f) {
				var u = ci(f, n, e),
				_ = u.x + t - (this._mzody[DI] || 0),
				d = u.y + i - (this[vR][jI] || 0);
				if (this._d2.set(t - _, i - d, n, e), this[tj][zo]) {
					var u = qs({
							x: _,
							y: d
						}, this[tj][zo]);
					_ = u.x,
					d = u.y
				}
				this[tj].x += _,
				this[tj].y += d
			} else {
				var _ = this._d2.x * n / this._d2[ro] - t,
				d = this._d2.y * e / this._d2[Wa] - i;
				if (this._d2.set(t + _, i + d, n, e), this[tj][zo]) {
					var u = qs({
							x: _,
							y: d
						}, this[tj][zo]);
					_ = u.x,
					d = u.y
				}
				this[tj].x -= _,
				this[tj].y -= d
			}
		},
		ondrag: function (t, i) {
			if (this.element && this._9g)
				if (this._9g != this[uB]) {
					var n = t.dx,
					e = t.dy,
					s = i[j_];
					if (n /= s, e /= s, this.element[zo]) {
						var r = {
							x: n,
							y: e
						};
						qs(r, -this[tj][zo]),
						n = r.x,
						e = r.y
					}
					var h = this._9g.p,
					a = this._d2,
					o = a.x,
					f = a.y,
					c = a.width,
					u = a[Wa];
					h[ea] == sH ? n >= c ? (o += c, c = n - c || 1) : (o += n, c -= n) : h[ea] == hH && (-n >= c ? (c = -n - c || 1, o -= c) : c += n),
					h[cl] == aH ? e >= u ? (f += u, u = e - u || 1) : (f += e, u -= e) : h[cl] == fH && (-e >= u ? (u = -e - u || 1, f -= u) : u += e),
					this._4v(o, f, c, u, t[Hp]);
					var _ = new Nr(i, Nr[wB], t, this[tj]);
					_.point = this._9g,
					i[tP](_)
				} else {
					var r = i.toLogical(t),
					d = bn(r.x, r.y, this[tj].x, this.element.y, this._9g[bj].x, this._9g.start.y, !0);
					d += this._9g.rotate || 0,
					t[Hp] && (d = Math[So](d / Math.PI * 4) * Math.PI / 4),
					this.element[zo] = d % (2 * Math.PI);
					var _ = new Nr(i, Nr[TB], t, this.element)
				}
		},
		enddrag: function (t, i) {
			if (this[tj] && this._9g && this._9g != this[uB]) {
				var n = new Nr(i, Nr.RESIZE_END, t, this[tj]);
				n[HN] = this._9g,
				i[tP](n)
			}
		}
	},
	aq[OB] = Cr;
	var ZU = function (t) {
		this.graph = t
	};
	ZU.prototype = {
		onstart2: function (t, i) {
			this.onstart(t, i)
		},
		onstart: function (t, i) {
			if (!t[gj]) {
				var n = t.getData();
				if (n && !i[nB](n) && (n = null), n && wi(t)) {
					i[IB](n);
					var e = new Nr(i, Nr.SELECT, t, i[kP]);
					return void i.onInteractionEvent(e)
				}
				if (!n || !i.selectionModel[cN](n)) {
					n ? (i.setSelection(n), i.sendToTop(n)) : i[MB](null);
					var e = new Nr(i, Nr[kB], t, i.selectionModel);
					i[tP](e)
				}
			}
		},
		onkeydown: function (t, i) {
			return 27 == t[rj] ? void i[SB]() : void(wi(t) && 65 == t[rj] && (i[AB](), z(t)))
		}
	},
	WG[CB] = 3e3,
	WG[RB] = 1e3,
	Pr.CLASS_NAME = LB,
	Pr.CURSOR_OFFSET_X = 0,
	Pr[PB] = 15,
	gi(Uh + Pr.CLASS_NAME, {
		"user-select": O_,
		"background-color": DB,
		overflow: T_,
		"box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
		color: Fm,
		"pointer-events": O_,
		border: jB,
		padding: NB,
		display: uD,
		position: zw
	}),
	Pr[BB] = function () {
		var t = Pr[$B];
		return t || (t = Pr[$B] = new Pr),
		t
	},
	Pr[zB] = function (t, i, n) {
		Pr[BB]().show(t, i, n)
	},
	Pr.hide = function () {
		Pr[BB]()[fB]()
	},
	Pr.prototype = {
		getTooltipElement: function () {
			var t = this._mc;
			return t || (t = i[Qa](__), t.className = Pr[FB], this._mc = t, i[Pm][E_](t)),
			t
		},
		update: function (t, i) {
			if (this[GB]()) {
				var n = hd == i;
				t && !n && (t = t.replace(/\n/g, HB));
				var e = this[qB]();
				n ? e[YB] = t || "" : e[LP] = t || "",
				Dr(e, this[UB].x + Pr.CURSOR_OFFSET_X, this[UB].y + Pr.CURSOR_OFFSET_Y)
			}
		},
		setTooltip: function (t, i) {
			if (!t || !t[WB])
				return this._info = null, this._mc && (this._mc[ca][Ow] = O_), void(this._9y = Date.now());
			this._9y = null,
			this[UB] = t;
			var n = this[qB]();
			n.style[Ow] = "",
			this[XB](this._info.content, this[UB][Do]),
			isNaN(i) && (i = WG[CB]),
			i && this[VB](this[KB][mh](this, !1), i)
		},
		_9y: null,
		_kq: null,
		stopTimer: function () {
			this._kq && (clearTimeout(this._kq), this._kq = null)
		},
		startTimer: function (t, i) {
			this[ZB](),
			this._kq = setTimeout(function (t) {
					this._kq = null,
					t()
				}
					[mh](this, t), i)
		},
		show: function (t, i, n) {
			return this.isShowing() || this._9y && Date.now() - this._9y < 1e3 ? void this[KB](t, n) : (isNaN(i) && (i = WG.TOOLTIP_DELAY), void(i ? this[VB](this[KB][mh](this, t, n), i) : this[KB](t, n)))
		},
		isShowing: function () {
			return this._mc && O_ !== this._mc[ca].display
		},
		hide: function () {
			this[ZB](),
			this[GB]() && this[KB](!1)
		}
	};
	var JU = function (t) {
		this[Ku] = t
	};
	JU[hh] = {
		onstart: function (t, i) {
			this[Ey](i)
		},
		_hu: null,
		onmousemove: function (t, i) {
			if (i.enableTooltip) {
				var n = t[ay](),
				e = n ? i[JB](n) : null;
				return e ? void Pr.show({
					target: n,
					content: e,
					type: n[QB],
					x: t.pageX,
					y: t[t$]
				}, i.tooltipDelay, i[i$]) : void Pr.hide()
			}
		},
		destroy: function () {
			Pr[fB]()
		}
	};
	var QU = function (t) {
		this[Ku] = t
	};
	QU[hh] = {
		destroy: function () {
			this[n$] && (this.delayAction = null)
		},
		onmousewheel: function (t, i) {
			if (i[e$] !== !1 && t[zN]) {
				if (aq.stopEvent(t), i[VP]) {
					var n = this.delayAction;
					n || (n = this[n$] = new jr(function () {
								i[eD](!1)
							})),
					i[eD](!0),
					n.action(100)
				}
				i.zoomByMouseEvent(t, t[zN], !1)
			}
		}
	};
	var tW = function (t) {
		this[Ku] = t
	};
	tW[hh] = {
		onclick: function (t, i) {
			i[s$](t, !wi(t))
		}
	};
	var iW = function (t) {
		this[Ku] = t
	};
	iW.prototype = {
		onclick: function (t, i) {
			i[s$](t, wi(t))
		}
	},
	p(Nr, _H),
	Nr[uN] = r$,
	Nr[dN] = h$,
	Nr[gN] = a$,
	Nr[$P] = o$,
	Nr.ELEMENT_REMOVED = f$,
	Nr[$N] = c$,
	Nr.POINT_MOVING = u$,
	Nr[_$] = d$,
	Nr.RESIZE_START = l$,
	Nr[wB] = v$,
	Nr[b$] = y$,
	Nr[TB] = g$,
	Nr[m$] = E$,
	Nr[x$] = p$,
	Nr[mN] = w$,
	Nr[cI] = T$,
	Nr.EDGE_BUNDLE = O$,
	Nr.SELECT = od,
	Nr[QN] = I$,
	Nr[sB] = M$,
	Nr[k$] = S$,
	Nr[A$] = C$,
	Br[hh] = {
		_9w: function (t) {
			if (this[R$])
				switch (t[bd]) {
				case pH[iv]:
					this[R$][L$](t[Lo]);
					break;
				case pH[nv]:
					this[R$][P$](t.data)
				}
		},
		destroy: function () {
			delete this._kr,
			delete this._3z,
			this._interactionSupport && (this._interactionSupport._hn(), delete this._interactionSupport)
		},
		_kr: null,
		_3z: null,
		defaultMode: null,
		_h1: function (t, i, n) {
			this._3z[t] = new br(i, n),
			t == this[gd] && this[R$][D$](i)
		},
		addCustomInteraction: function (t) {
			this[R$][j$](t)
		},
		removeCustomInteraction: function (t) {
			this[R$][N$](t)
		},
		_ml: function (t) {
			var i = this._3z[t];
			return i ? i : nW[t]
		}
	},
	Z(Br.prototype, {
		defaultCursor: {
			get: function () {
				return this[B$] ? this.currentInteractionMode.defaultCursor : void 0
			}
		},
		currentMode: {
			get: function () {
				return this[ZP]
			},
			set: function (t) {
				this._myurrentMode != t && (this[ZP], this._interactionSupport || (this._interactionSupport = new WH(this._kr)), this[ZP] = t, this.currentInteractionMode = this._ml(this[ZP]), this._kr[KP] = this.defaultCursor, this[R$][D$](this[B$] ? this[B$][$$](this._kr) : []))
			}
		}
	});
	var nW = {};
	WG.registerInteractions = function (t, i, n) {
		var e = new br(i, n);
		nW[t] = e
	},
	oq[z$] = F$,
	oq.INTERACTION_MODE_DEFAULT = V_,
	oq[G$] = sd,
	oq[H$] = q$,
	oq[Y$] = U$,
	oq[W$] = X$,
	oq[V$] = K$,
	oq[Z$] = J$,
	oq.INTERACTION_MODE_CREATE_LINE = Q$,
	WG[tz](oq[z$], [ZU, XU, QU, UU, qU, JU, KU]),
	WG[tz](oq[W$], [YU, pr, ZU, XU, QU, UU, JU]),
	WG[tz](oq.INTERACTION_MODE_CREATE_EDGE, [YU, Sr, ZU, mr, XU, QU, UU, JU]),
	WG[tz](oq[Z$], [YU, Er, ZU, XU, QU, UU, JU]),
	WG[tz](oq[iz], [xr, ZU, XU, QU, UU, JU]),
	WG[tz](oq[md], [YU, Cr, Sr, ZU, WU, XU, QU, UU, qU, JU, KU]),
	WG[tz](oq.INTERACTION_MODE_SELECTION, [YU, Cr, Sr, ZU, WU, VU, XU, QU, UU, qU, JU]),
	WG[tz](oq[H$], [QU, UU, tW], XH),
	WG.registerInteractions(oq[Y$], [QU, UU, iW], VH),
	aq[nz] = XU,
	aq[ez] = ZU,
	aq.MoveInteraction = WU,
	aq.WheelZoomInteraction = QU,
	aq.DoubleClickInteraction = qU,
	aq[sz] = UU,
	aq[rz] = JU,
	aq.RectangleSelectionInteraction = VU,
	aq.RectangleSelectionInteractionByRightButton = KU,
	aq[hz] = Sr;
	var eW = function (t) {
		this[Ku] = t
	};
	aq[az] = eW,
	eW[hh] = {
		getNodeBounds: function (t) {
			return this.graph[oz](t)
		},
		isLayoutable: function (t) {
			return this[Ku].isVisible(t) && t[fz] !== !1
		},
		getLayoutResult: function () {},
		updateLocations: function (t, i, n, e, s) {
			if (i === !0) {
				if (this[cz] || (this[cz] = new NW), n && (this[cz][uz] = n), e && (this.animate[KD] = e), this.animate[_z] = t, s) {
					var r = s,
					h = this;
					s = function () {
						r[Xr](h, t)
					}
				}
				return void this[cz].start(s)
			}
			for (var a in t) {
				var o = t[a],
				f = o[dz];
				f[SP](o.x, o.y)
			}
			s && s.call(this, t)
		},
		_g3: function (t) {
			var i,
			n,
			e,
			s = null;
			t && (i = t[lz], s = t[Eu], n = t.duration, e = t[KD]);
			var r = this.getLayoutResult(t);
			return r ? (this[vz](r, i, n, e, s), r) : !1
		},
		doLayout: function (t, i) {
			return this[Ku] && i !== !0 ? void this.graph[dP](function () {
				this._g3(t)
			}, this) : this._g3(t)
		}
	};
	var sW = 110,
	rW = 120,
	hW = 130,
	aW = 210,
	oW = 220,
	fW = 230,
	cW = 111,
	uW = 112,
	_W = 121,
	dW = 122,
	lW = 211,
	vW = 212,
	bW = 221,
	yW = 222;
	oq.DIRECTION_RIGHT = sW,
	oq[bz] = rW,
	oq[yz] = hW,
	oq[gz] = aW,
	oq.DIRECTION_TOP = oW,
	oq[mz] = fW,
	oq.DIRECTION_RIGHT_TOP = cW,
	oq.DIRECTION_RIGHT_BOTTOM = uW,
	oq.DIRECTION_LEFT_TOP = _W,
	oq.DIRECTION_LEFT_BOTTOM = dW,
	oq[Ez] = lW,
	oq[xz] = vW,
	oq[pz] = bW,
	oq.DIRECTION_TOP_RIGHT = yW;
	var gW = wz,
	mW = Tz,
	EW = Oz,
	xW = Iz;
	oq.LAYOUT_TYPE_EVEN = gW,
	oq[Mz] = EW,
	oq.LAYOUT_TYPE_EVEN_VERTICAL = xW,
	oq[kz] = mW,
	aq.isHorizontalDirection = $r;
	var pW = function (t) {
		this[Ku] = t
	};
	pW[hh] = {
		hGap: 50,
		vGap: 50,
		parentChildrenDirection: aW,
		layoutType: gW,
		defaultSize: {
			width: 50,
			height: 60
		},
		getNodeSize: function (t) {
			if (this[Ku]._8m[bu]) {
				var i = this[Ku].getUI(t);
				if (i)
					return i._fo
			}
			return t[Qm] && t[Qm].bounds ? {
				width: t.image[Mo].width,
				height: t[Qm][Mo].height
			}
			 : this[Sz]
		},
		_myt: function (t, i) {
			var n = t.id;
			if (!(n in this._9m) && this.isLayoutable(t)) {
				var e,
				s = this[Az](t);
				e = s instanceof iH ? [-s.x, -s.y] : [s[ro] / 2, s[Wa] / 2];
				var r = (t.parentChildrenDirection, i ? this._9m[i.id] : this[Cz]);
				this._9m[n] = new wW(this.getHGap(t), this[Rz](t), this[Lz](t), t[Pz], r, t, s[ro], s[Wa], e)
			}
		},
		getHGap: function (t) {
			return t && j(t[Dz]) ? t.hGap : this[Dz]
		},
		getVGap: function (t) {
			return t && j(t.vGap) ? t.vGap : this.vGap
		},
		getLayoutType: function (t) {
			return t && t[jz] ? t.layoutType : this[jz]
		},
		_9m: null,
		_n0c: null,
		_l2: function () {
			this._9m = null,
			this[Cz] = null
		},
		getLayoutResult: function (t) {
			var i,
			n,
			e,
			s,
			r = this.graph;
			t instanceof Object && (i = t.x, n = t.y, r = t[Nz] || this.graph, e = t.bounds, s = t[Bz]),
			this._9m = {},
			this[Cz] = new wW,
			this[Cz]._mp(this.hGap, this[$z], this[Pz], this[jz]);
			var h = {},
			a = zW(r, this[zz], this, !1, s);
			return a && (this[Cz]._g3(i || 0, n || 0, h), e && e.set(this._n0c.x, this._n0c.y, this._n0c[ro], this[Cz].height)),
			this._l2(),
			h
		},
		doLayout: function (t, i) {
			if (j(t)) {
				var n = t,
				e = 0;
				j(i) && (e = i),
				t = {
					x: n,
					y: e
				},
				i = !0
			}
			return T(this, pW, Fz, [t, i])
		}
	},
	p(pW, eW);
	var wW = function (t, i, n, e, s, r, h, a, o) {
		this._lx = t || 0,
		this._lz = i || 0,
		this[jz] = n,
		this.parentChildrenDirection = e,
		this[Gz] = s,
		s && s._fi(this),
		this[dz] = r,
		this._f7 = h,
		this[Hz] = a,
		this[qz] = o
	};
	wW.prototype = {
		_mp: function (t, i, n, e) {
			this._lx = t,
			this._lz = i,
			this.parentChildrenDirection = n,
			this[jz] = e
		},
		_89: function () {
			this._fm = []
		},
		_lx: 0,
		_lz: 0,
		_fm: null,
		_f7: 0,
		_myr: 0,
		layoutType: null,
		parentChildrenDirection: null,
		_fi: function (t) {
			this._fm || (this._fm = []),
			this._fm[nh](t)
		},
		_mym: function (t, i, n, e) {
			var s = new iH;
			return n(this._fm, function (n) {
				n._30(t, i),
				s.add(n),
				e ? t += n[ro] + this._lx : i += n[Wa] + this._lz
			}, this),
			s
		},
		_7v: function (t, i, n, e, s) {
			var r,
			h = e ? this._lx : this._lz,
			a = e ? this._lz : this._lx,
			o = e ? "width" : Wa,
			f = e ? "height" : ro,
			c = e ? "_f7" : Hz,
			u = e ? "_myr" : Yz,
			_ = e ? "hostDX" : Uz,
			d = e ? "hostDY" : Wz,
			v = new iH,
			b = 0,
			y = 0,
			g = [],
			m = 0,
			E = 0;
			n(this._fm, function (n) {
				var s = E >= y;
				n._inheritedParentChildrenDirection = s ? e ? rW : oW : e ? sW : aW,
				n._30(t, i),
				s ? (g.push(n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[nh](n), m = Math.max(m, n[o]), E += n[f] + a)
			}, this),
			y -= a,
			E -= a;
			var x = Math.max(y, E),
			p = h,
			w = 0;
			this.node && (s && (p += this[c] + h, x > this[u] ? this[d] = (x - this[u]) / 2 : w = (this[u] - x) / 2), this[_] = b + p / 2 - this[c] / 2);
			var T = 0,
			O = w;
			return l(g, function (t) {
				e ? t[wm](b - t[o], O) : t.offset(O, b - t[o]),
				O += a + t[f],
				v.add(t)
			}, this),
			r ? (O = w, T = b + p, l(r, function (t) {
					e ? t.offset(T, O) : t[wm](O, T),
					O += a + t[f],
					v.add(t)
				}, this), v) : v
		},
		offset: function (t, i) {
			this.x += t,
			this.y += i,
			this[Xz] += t,
			this[Vz] += i,
			this._6o(t, i)
		},
		_mzu: function (t, i) {
			return 2 * this.cx - t - i - t
		},
		_mzs: function (t, i) {
			return 2 * this.cy - t - i - t
		},
		_m3: function (t) {
			if (this._fm && 0 != this._fm[Wr]) {
				if (t)
					return this[dz] && (this[Xz] += this._mzu(this[Xz], this._f7)), void l(this._fm, function (t) {
						t[wm](this[Kz](t.x, t[ro]), 0)
					}, this);
				this[dz] && (this[Vz] += this[Zz](this.nodeY, this._myr)),
				l(this._fm, function (t) {
					t[wm](0, this[Zz](t.y, t[Wa]))
				}, this)
			}
		},
		_6o: function (t, i) {
			this._fm && l(this._fm, function (n) {
				n[wm](t, i)
			}, this)
		},
		_30: function (t, i) {
			return this.x = t || 0,
			this.y = i || 0,
			this._fm && 0 != this._fm[Wr] ? void this._1i(this.x, this.y, this[jz]) : void(this.node && (this[ro] = this._f7, this[Wa] = this[Hz], this[Xz] = this.x, this[Vz] = this.y))
		},
		_6l: function (t) {
			if (this.node) {
				var i = this._n0nchorLocation,
				n = i[0],
				e = i[1];
				t[this[dz].id] = {
					node: this[dz],
					x: this[Xz] + n,
					y: this[Vz] + e,
					left: this[Xz],
					top: this[Vz],
					width: this._f7,
					height: this[Hz]
				}
			}
			this._fm && l(this._fm, function (i) {
				i._6l(t)
			}, this)
		},
		_g3: function (t, i, n) {
			this._30(t, i),
			this._6l(n)
		},
		_1i: function (t, i, e) {
			var s,
			r = t,
			h = i;
			!this[Pz] && this[Gz] && (this[Pz] = this._inheritedParentChildrenDirection || this[Gz][Pz]);
			var a = this.parentChildrenDirection,
			o = $r(a);
			if (this[dz]) {
				s = a == hW || a == fW;
				var f = zr(a);
				s || (o ? t += this._f7 + this._lx : i += this[Hz] + this._lz)
			}
			var c,
			u = this[dz] && this[dz].layoutReverse ? b : l;
			if (e == mW)
				c = this._7v(t, i, u, !o, s);
			else {
				var _;
				_ = e == gW ? !o : e == EW,
				c = this[Jz](t, i, u, _, s)
			}
			var d = 0,
			v = 0;
			if (c && !c[Uf]() && (d = c.width, v = c[Wa], this.add(c)), this[dz]) {
				if (this.nodeX = r, this.nodeY = h, this.hostDX !== n || this[Uz] !== n)
					this.nodeX += this[Wz] || 0, this[Vz] += this[Uz] || 0;
				else {
					var y;
					y = a == aW || a == oW || a == rW || a == sW ? 1 : a == vW || a == yW || a == dW || a == uW ? 0 : 2,
					o ? 1 == y ? this[Vz] += v / 2 - this[Hz] / 2 : 2 == y && (this.nodeY += v - this[Hz]) : 1 == y ? this[Xz] += d / 2 - this._f7 / 2 : 2 == y && (this[Xz] += d - this._f7)
				}
				this.addRect(this[Xz], this[Vz], this._f7, this._myr),
				f && this._m3(o)
			}
		},
		node: null,
		uiBounds: null
	},
	p(wW, iH),
	Gr[hh] = {
		layoutDatas: null,
		isMovable: function (t) {
			return !this[pd][t.id]
		},
		_6q: !1,
		_38: function () {
			this._6q = !0,
			this.graph._19.addListener(this._9e, this),
			this[Ku]._16[Ul](this._1p, this)
		},
		_1d: function () {
			this._6q = !1,
			this[Ku]._19.removeListener(this._9e, this),
			this[Ku]._16.removeListener(this._1p, this)
		},
		invalidateFlag: !0,
		invalidateLayoutDatas: function () {
			this[uI] = !0
		},
		resetLayoutDatas: function () {
			return this[uI] = !1,
			this[Qz] = Fr[Xr](this)
		},
		_1p: function (t) {
			Nr.ELEMENT_MOVE_START == t[bd] ? (this[pd] = {}, t[yd][lc](function (t) {
					this.currentMovingNodes[t.id] = t
				}, this)) : Nr.ELEMENT_MOVE_END == t.kind && (this[pd] = {})
		},
		_9e: function () {
			this.invalidateLayoutDatas()
		},
		isRunning: function () {
			return this[tF] && this.timer._dh()
		},
		getLayoutResult: function () {
			this[iF](),
			this[nF]();
			for (var t = this[eF](this.layoutDatas[sF] || 0, this.layoutDatas[rF] || 0), i = 0; t > i && this.step(!1) !== !1; i++);
			var n = this[Qz][hF];
			return this[aF](),
			n
		},
		_mi: function () {
			return !1
		},
		step: function (t) {
			if (t === !1)
				return this._mi(this.timeStep);
			(this[uI] || !this[Qz]) && this.resetLayoutDatas();
			var i = this._mi(t),
			n = this[Qz][hF];
			for (var e in n) {
				var s = n[e],
				r = s[dz];
				this[AP](r) ? r.setLocation(s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
			}
			return i
		},
		onstop: function () {
			delete this.layoutDatas
		},
		start: function (t) {
			if (this.isRunning())
				return !1;
			this._6q || this._38(),
			this._k2r || (this[oF] = function (t) {
				return this[yN](t)
			}
				[mh](this)),
			this[fF](),
			this[tF] = new sq(this[oF]);
			var i = this;
			return this[tF]._l0(function () {
				i[aF](),
				t && t()
			}),
			!0
		},
		stop: function () {
			this[tF] && (this[tF]._lg(), this.onstop())
		},
		getMaxIterations: function (t) {
			return Math.min(1e3, 3 * t + 10)
		},
		minEnergyFunction: function (t, i) {
			return 10 + Math.pow(t + i, 1.4)
		},
		resetGraph: function () {
			this._6q || this._38(),
			this[nF]()
		},
		destroy: function () {
			this[iF](),
			this._1d()
		}
	},
	p(Gr, eW);
	var TW = function (t, i, n, e) {
		this[Ku] = t,
		j(i) && (this[Ol] = i),
		j(n) && (this.gap = n),
		j(e) && (this.startAngle = e)
	};
	aq[cF] = TW;
	var OW = uF,
	IW = _F,
	MW = dF,
	kW = lF;
	oq.ANGLE_SPACING_PROPORTIONAL = OW,
	oq.ANGLE_SPACING_REGULAR = IW,
	oq[vF] = MW,
	oq[bF] = kW,
	TW[hh] = {
		angleSpacing: OW,
		radiusMode: kW,
		gap: 4,
		radius: 50,
		startAngle: 0,
		_9m: null,
		_n0c: null,
		_l2: function () {
			this._9m = null,
			this[Cz] = null
		},
		getLayoutResult: function (t) {
			var i,
			n = 0,
			e = 0,
			s = this.graph;
			t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this[Ku], i = t[Mo]),
			this._9m = {},
			this._n0c = new CW(this);
			var r = {},
			h = FW(s, this._myt, this);
			return h && (this._n0c._fm && 1 == this[Cz]._fm.length && (this[Cz] = this._n0c._fm[0]), this._n0c._ek(!0), this[Cz]._55(n, e, this.startAngle, r, i)),
			this._l2(),
			r
		},
		_myt: function (t, i) {
			if (this[yF](t)) {
				var n = i ? this._9m[i.id] : this[Cz];
				this._9m[t.id] = new CW(this, t, n)
			}
		},
		defaultSize: 40,
		getRadius: function () {
			return this[Ol]
		},
		getNodeSize: function (t) {
			if (this[Ku]._8m[bu]) {
				var i = this[Ku].getUI(t);
				if (i)
					return (i._fo[ro] + i._fo[Wa]) / 2
			}
			return this.defaultSize
		},
		getGap: function () {
			return this.gap
		},
		_2p: function (t, i, n) {
			return this[Az](t, i, n) + this[gF](t, i, n)
		}
	};
	var SW = function (t) {
		var i,
		n = this._fm[Wr],
		e = 0,
		s = 0;
		if (l(this._fm, function (t) {
				var n = t._ek();
				1 > n && (n = 1),
				s += n,
				n > e && (e = n, i = t)
			}, this), n > 1) {
			var r = 0,
			h = {},
			a = s / n / 3;
			s = 0,
			l(this._fm, function (t) {
				var i = t._m9;
				a > i && (i = a),
				h[t.id] = i,
				s += i
			}, this);
			var o = hU / s;
			l(this._fm, function (i, n) {
				var e = h[i.id],
				s = e * o;
				0 === n && (r = t ? -s / 2 : -s),
				i._kw = r + s / 2,
				i._kz = s,
				r += s
			}, this)
		}
		return [e, i._kz]
	},
	AW = function (t) {
		var i = this._82,
		n = 2 * Math.PI / i,
		e = 0,
		s = t ? 0 : i > 1 ? -n / 2 : 0;
		return l(this._fm, function (t) {
			t._kw = s % hU,
			s += n,
			t._kz = n;
			var i = t._ek();
			i > e && (e = i)
		}, this),
		[e, n]
	},
	CW = function (t, i, n) {
		this[mF] = t,
		i && (this._ma = i, this.id = i.id),
		n && (n._fi(this), n._m7 = !1, this._ku = n._ku + 1)
	},
	hU = 2 * Math.PI;
	CW[hh] = {
		_kz: 0,
		_kw: 0,
		_kf: 0,
		_eb: 0,
		_d0: 0,
		_ku: 0,
		_m7: !0,
		_m9: 0,
		_hm: 0,
		_fm: null,
		_ma: null,
		_fi: function (t) {
			this._fm || (this._fm = []),
			this._fm.push(t),
			t[Cc] = this
		},
		_hg: function (t) {
			if (this._kw = (this._kw + t) % hU, this._fm) {
				var i = this._fm[Wr];
				if (1 == i)
					return void this._fm[0]._hg(this._kw);
				t = this._kw + Math.PI,
				l(this._fm, function (i) {
					i._hg(t)
				}, this)
			}
		},
		_82: 0,
		_6e: function (t) {
			return this._ma && (this._hm = this.layouter._2p(this._ma, this._ku, this._m7) / 2),
			this._fm ? (this._hm, this._82 = this._fm[Wr], this._82 <= 2 || this.layouter.angleSpacing == IW ? AW.call(this, t) : SW[Xr](this, t)) : null
		},
		_ek: function (t) {
			var i = this._6e(t);
			if (!i)
				return this._m9 = this._hm;
			var n = i[0],
			e = i[1],
			s = this.layouter.getRadius(this._ma, this._ku);
			if (s < this._hm && (s = this._hm), this._eb = s, this._hm + n > s && (s = this._hm + n), n && this._82 > 1 && e < Math.PI) {
				var r = n / Math.sin(e / 2);
				r > s && (s = r)
			}
			return this._kf = s,
			this._m9 = s + n,
			this._ma && this._fm && this.layouter[EF] == kW && l(this._fm, function (t) {
				var i = t._m9;
				1 == t._82 && (i /= 2);
				var n = this._hm + i,
				e = t._kz;
				if (e && e < Math.PI) {
					var s = Math.sin(e / 2),
					r = i / s;
					r > i && (i = r)
				}
				n > i && (i = n),
				t._d0 = i
			}, this),
			(!this._ma || t) && this._hg(0),
			this._m9
		},
		_55: function (t, i, n, e, s) {
			if (this._ma && (e[this._ma.id] = {
						x: t,
						y: i,
						node: this._ma
					}, s && s.addRect(t - this._hm / 2, i - this._hm / 2, this._hm, this._hm)), this._fm) {
				if (!this._ma && 1 == this._fm[Wr])
					return void this._fm[0]._55(t, i, n, e, s);
				n = n || 0;
				var r = this._kf,
				h = this._eb;
				l(this._fm, function (a) {
					var o = r;
					a._d0 && (o = Math.max(h, a._d0));
					var f = a._kw + n,
					c = t + o * Math.cos(f),
					u = i + o * Math.sin(f);
					a._55(c, u, n, e, s)
				}, this)
			}
		}
	},
	p(TW, eW);
	var RW = function () {
		w(this, RW, arguments)
	};
	p(RW, Hr);
	var LW = function (t, i) {
		this.node1 = t,
		this[xF] = i,
		t == i ? (this.isLooped = !0, this._ks = t._km) : this._ks = new XG,
		this._85 = [],
		this._he = WG.EDGE_BUNDLE_EXPANDED
	};
	WG[pF] = !0,
	LW[hh] = {
		node1: null,
		node2: null,
		_ks: null,
		_he: WG[pF],
		_85: null,
		_h6: null,
		agentEdge: null,
		_mzm: function (t, i, n) {
			this._ks[lc](function (e) {
				return n && e[Uc] != n && e[Dc] != n ? void 0 : t[Xr](i, e)
			})
		},
		_5c: 0,
		_5a: 0,
		_i9: function (t, i) {
			return this._ks.add(t) === !1 ? !1 : (i == this[wF] ? this._5c++ : this._5a++, this[bu] ? void this._$x(t) : void(this[bu] = !0))
		},
		_d8: function (t, i) {
			return this._ks[Mh](t) === !1 ? !1 : (i == this.node1 ? this._5c-- : this._5a--, this._$x(t), void this._ks.forEach(function (t) {
					t[aO] = !0,
					t[JT] = !0
				}, this))
		},
		_$x: function (t) {
			this[TF] = !0,
			this._66 = !0,
			t[aO] = !0,
			t[JT] = !0
		},
		_mys: function () {
			this._66 || (this._66 = !0, this._ks[lc](function (t) {
					t._edgeBundleInvalidateFlag = !0
				}))
		},
		isEmpty: function () {
			return this._ks.isEmpty()
		},
		isPositiveOrder: function (t) {
			return this.node1 == t[Uc] || this[wF] == t[Dc]
		},
		canBind: function (t) {
			return t && this._66 && this[Oo](t),
			this._ks.length > 1 && this._85[Wr] > 1
		},
		_i4: function (t) {
			return this._85[eh](t)
		},
		getYOffset: function (t) {
			return this._h6[t.id]
		},
		_49: function (t) {
			if (!this[OF]())
				return void(this._h6 = {});
			var i = {},
			n = this._85[Wr];
			if (!(2 > n)) {
				var e = 0,
				s = this._85[0];
				i[s.id] = 0;
				for (var r = 1; n > r; r++) {
					s = this._85[r];
					var h = t[Ou](s, EU[OS]) || DU[EU[OS]];
					e += h,
					i[s.id] = e
				}
				if (!this[Hc])
					for (var a = e / 2, r = 0; n > r; r++)
						s = this._85[r], i[s.id] -= a;
				this._h6 = i
			}
		},
		_n0v: function (t) {
			return this._he == t ? !1 : (this._he = t, this._mys(), !0)
		},
		reverseExpanded: function () {
			return this[IF](!this._he)
		},
		_14: function () {
			this._mysBindableFlag = !1,
			this._85.length = 0;
			var t;
			this._ks.forEach(function (i) {
				if (i.isBundleEnabled()) {
					if (!this.isPositiveOrder(i))
						return t || (t = []), void t[nh](i);
					this._85.push(i)
				}
			}, this),
			t && (this._85 = t[Qr](this._85))
		},
		_df: function (t) {
			return t == this[UP] || !this[OF]() || this._he
		},
		validate: function (t) {
			this._66 = !1,
			this._ks.forEach(function (t) {
				t[aO] = !1
			}),
			this[TF] && this._14();
			var i = this._he,
			n = this[OF](),
			e = !n || i;
			l(this._85, function (t) {
				t._$s = !0,
				t[MF] = e,
				e && (t[JT] = !0)
			}, this),
			e ? this._9s(null, t) : (this._9s(this._85[0], t), this[UP][MF] = !0, this[UP][JT] = !0),
			e && this._49(t)
		},
		_9s: function (t, i) {
			if (t != this.agentEdge) {
				var n = this[UP];
				return this[UP] = t,
				i && i._3s(new dH(this, UP, t, n)),
				!0
			}
		}
	},
	Z(LW[hh], {
		bindableEdges: {
			get: function () {
				return this._85
			}
		},
		edges: {
			get: function () {
				return this._ks._jc
			}
		},
		length: {
			get: function () {
				return this._ks ? this._ks[Wr] : 1
			}
		},
		expanded: {
			get: function () {
				return this._he
			},
			set: function (t) {
				return this._he == t ? !1 : (this._he = t, void this[Zw]())
			}
		}
	});
	var PW = function () {
		function t(t, i) {
			this.node = t,
			this[Pm] = i
		}
		function i() {
			this.stack = [],
			this[kF] = 0
		}
		var n = -1e6,
		e = .8;
		i.prototype = {
			isEmpty: function () {
				return 0 === this.popIdx
			},
			push: function (i, n) {
				var e = this.stack[this.popIdx];
				e ? (e[dz] = i, e[Pm] = n) : this[SF][this[kF]] = new t(i, n),
				++this[kF]
			},
			pop: function () {
				return this[kF] > 0 ? this.stack[--this[kF]] : void 0
			},
			reset: function () {
				this[kF] = 0
			}
		};
		var s = [],
		r = new i,
		h = function () {
			this.body = null,
			this[AF] = [],
			this[CF] = 0,
			this.massX = 0,
			this[RF] = 0,
			this.left = 0,
			this.top = 0,
			this[Qh] = 0,
			this[Jh] = 0,
			this.isInternal = !1
		},
		a = [],
		o = 0,
		f = function () {
			var t;
			return a[o] ? (t = a[o], t[AF][0] = null, t.quads[1] = null, t.quads[2] = null, t[AF][3] = null, t.body = null, t[CF] = t.massX = t[RF] = 0, t[tf] = t[Jh] = t.top = t[Qh] = 0, t[LF] = !1) : (t = new h, a[o] = t),
			++o,
			t
		},
		c = f(),
		u = function (t, i) {
			var n = Math.abs(t.x - i.x),
			e = Math.abs(t.y - i.y);
			return 1e-8 > n && 1e-8 > e
		},
		_ = function (t) {
			for (r[PF](), r[nh](c, t); !r.isEmpty(); ) {
				var i = r.pop(),
				n = i.node,
				e = i[Pm];
				if (n.isInternal) {
					var s = e.x,
					h = e.y;
					n[CF] = n[CF] + e.mass,
					n.massX = n[DF] + e[CF] * s,
					n.massY = n[RF] + e[CF] * h;
					var a = 0,
					o = n[tf],
					_ = (n[Jh] + o) / 2,
					d = n.top,
					l = (n[Qh] + d) / 2;
					if (s > _) {
						a += 1;
						var v = o;
						o = _,
						_ += _ - v
					}
					if (h > l) {
						a += 2;
						var b = d;
						d = l,
						l += l - b
					}
					var y = n.quads[a];
					y || (y = f(), y[tf] = o, y.top = d, y.right = _, y[Qh] = l, n[AF][a] = y),
					r.push(y, e)
				} else if (n[Pm]) {
					var g = n[Pm];
					if (n[Pm] = null, n[LF] = !0, u(g, e)) {
						if (n.right - n.left < 1e-8)
							return;
						do {
							var m = Math[jh](),
							E = (n[Jh] - n[tf]) * m,
							x = (n.bottom - n.top) * m;
							g.x = n[tf] + E,
							g.y = n.top + x
						} while (u(g, e))
					}
					r[nh](n, g),
					r.push(n, e)
				} else
					n[Pm] = e
			}
		},
		d = function (t) {
			var i,
			r,
			h,
			a,
			o = s,
			f = 1,
			u = 0,
			_ = 1;
			for (o[0] = c; f; ) {
				var d = o[u],
				l = d.body;
				f -= 1,
				u += 1,
				l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[xo](r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math[jh]() - .5) / 50, a = Math[xo](r * r + h * h)), i = n * l[CF] * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d[DF] / d.mass - t.x, h = d.massY / d[CF] - t.y, a = Math[xo](r * r + h * h), 0 === a && (r = (Math[jh]() - .5) / 50, h = (Math[jh]() - .5) / 50, a = Math[xo](r * r + h * h)), (d.right - d.left) / a < e ? (i = n * d[CF] * t[CF] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d.quads[0] && (o[_] = d.quads[0], f += 1, _ += 1), d[AF][1] && (o[_] = d[AF][1], f += 1, _ += 1), d[AF][2] && (o[_] = d[AF][2], f += 1, _ += 1), d.quads[3] && (o[_] = d[AF][3], f += 1, _ += 1)))
			}
		},
		l = function (t, i) {
			n = i;
			var e,
			s = Number[al],
			r = Number[al],
			h = Number.MIN_VALUE,
			a = Number[jF],
			u = t,
			d = u[Wr];
			for (e = d; e--; ) {
				var l = u[e].x,
				v = u[e].y;
				s > l && (s = l),
				l > h && (h = l),
				r > v && (r = v),
				v > a && (a = v)
			}
			var b = h - s,
			y = a - r;
			for (b > y ? a = r + b : h = s + y, o = 0, c = f(), c[tf] = s, c.right = h, c.top = r, c.bottom = a, e = d; e--; )
				_(u[e], c)
		};
		return {
			init: l,
			update: d
		}
	},
	DW = function (t) {
		t.fx -= t.x * this[NF],
		t.fy -= t.y * this[NF]
	},
	jW = function (t) {
		if (0 != t.k) {
			var i = this._d7,
			n = t[Nc],
			e = t.to,
			s = e.x - n.x,
			r = e.y - n.y,
			h = s * s + r * r,
			a = Math[xo](h) || .1,
			o = (a - i) * t.k * this.elastic;
			o /= a;
			var f = o * s,
			c = o * r;
			e.fx -= f,
			e.fy -= c,
			n.fx += f,
			n.fy += c
		}
	};
	Hr.prototype = {
		appendNodeInfo: function (t, i) {
			i[CF] = t[BF] || 1,
			i.fx = 0,
			i.fy = 0,
			i.vx = 0,
			i.vy = 0
		},
		appendEdgeInfo: function (t, i) {
			i.k = t[$F] || 1
		},
		setMass: function (t, i) {
			t[BF] = i,
			this.layoutDatas && this[Qz][hF] && (t = this.layoutDatas.nodes[t.id], t && (t[CF] = i))
		},
		setElasticity: function (t, i) {
			t.layoutElasticity = i,
			this.layoutDatas && this[Qz][kO] && (t = this[Qz][kO][t.id], t && (t.k = i))
		},
		_d7: 50,
		_hs: .5,
		timeStep: .05,
		repulsion: 50,
		attractive: .1,
		elastic: 3,
		_mj: 1e3,
		_jn: function (t) {
			return this._mj + .3 * (t - this._mj)
		},
		_mi: function (t, i) {
			var n = (Date.now(), this[Qz].nodes);
			for (var e in n) {
				var s = n[e];
				i && (s.x += Math.random() - .5, s.y += Math[jh]() - .5),
				DW.call(this, s)
			}
			var r = this[Qz][zF];
			if (r)
				for (var e in r) {
					var h = r[e],
					a = h[Kr],
					o = 0,
					f = 0;
					a.forEach(function (t) {
						o += t.x,
						f += t.y
					}),
					o /= a[Wr],
					f /= a.length;
					var c = 10 * this[NF];
					a.forEach(function (t) {
						t.fx -= (t.x - o) * c,
						t.fy -= (t.y - f) * c
					})
				}
			var u = this[FF];
			u || (u = this._nbodyForce = PW()),
			u[GF](this[Qz].nodesArray, -this.repulsion * this[HF] * this.repulsion);
			for (var e in n)
				u[XB](n[e]);
			if (this[qF]) {
				var _ = this.layoutDatas.edges;
				for (var e in _)
					jW[Xr](this, _[e])
			}
			return this._mg(t)
		},
		_mg: function (t) {
			var i = this[Qz][YF],
			n = (this.layoutDatas[UF], this[Qz].nodes),
			t = this[WF],
			e = 0,
			s = this._hs;
			for (var r in n) {
				var h = n[r],
				a = h.fx / h.mass,
				o = h.fy / h[CF],
				f = h.vx += a * t,
				c = h.vy += o * t;
				h.x += f * t,
				h.y += c * t,
				i > e && (e += 2 * (f * f + c * c)),
				h.fx = 0,
				h.fy = 0,
				h.vx *= s,
				h.vy *= s
			}
			return this[Qz][UF] = e,
			e >= i
		}
	},
	p(Hr, Gr),
	aq[XF] = Hr;
	var NW = function (t) {
		this[_z] = t
	};
	NW[hh] = {
		oldLocations: null,
		_f2: null,
		duration: 700,
		animationType: eq[VF],
		_6m: function (t) {
			if (this._f2 = t, this[KF] = {}, t)
				for (var i in t) {
					var n = t[i],
					e = n[dz];
					this.oldLocations[i] = {
						x: e.x,
						y: e.y
					}
				}
		},
		setLocation: function (t, i, n) {
			t[SP](i, n)
		},
		forEach: function (t, i) {
			for (var n in this[_z]) {
				var e = this[KF][n],
				s = this[_z][n];
				t[Xr](i, e, s)
			}
		},
		_k5: function (t) {
			this[lc](function (i, n) {
				var e = n.node,
				s = i.x + (n.x - i.x) * t,
				r = i.y + (n.y - i.y) * t;
				this[SP](e, s, r)
			}, this)
		},
		stop: function () {
			this[ZF] && this[ZF]._lg()
		},
		start: function (t) {
			this[ZF] ? (this._n0nimate._lg(), this[ZF]._it = this[uz], this._n0nimate[JF] = this[KD], this[ZF][QF] = this[QF]) : this[ZF] = new rq(this._k5, this, this[uz], this[KD]),
			this[ZF]._l0(t)
		}
	},
	Z(NW.prototype, {
		locations: {
			get: function () {
				return this._f2
			},
			set: function (t) {
				this._f2 != t && this._6m(t)
			}
		}
	});
	var BW = function (t) {
		function i(i) {
			var n = !1;
			return i.forEachInEdge(function (i) {
				return t.contains(i) && !i.isLooped() ? (n = !0, !1) : void 0
			}),
			n
		}
		function n(i) {
			var n = !1;
			return i.forEachOutEdge(function (i) {
				return t.contains(i) && !i[Hc]() ? (n = !0, !1) : void 0
			}),
			n
		}
		var e,
		s = new XG;
		return t[lc](function (t) {
			t instanceof lU && (i(t) ? !e && n(t) && (e = t) : s.add(t))
		}),
		s[Uf]() && e && s.add(e),
		s
	},
	$W = function (t, i, n, e, s, r) {
		if (i instanceof wH)
			return t(i, n, e, s, r), i;
		if (i instanceof jU) {
			var h = new XG;
			i[bO][lc](function (t) {
				return i[fN](t) ? t._ig() && t._he && t[Vr]() ? void(t[HO] && (t[HO][uI] = !1)) : void h.add(t) : void 0
			}),
			i = h
		} else if (Array[Ch](i))
			i = new XG(i);
		else if (!(i instanceof XG))
			throw new Error(tG);
		return i = BW(i, e),
		i.forEach(function (i) {
			t(i, n, e, s, r)
		}),
		i
	},
	zW = function (t, i, n, e, s) {
		return $W(GW, t, i, n, e, s)
	},
	FW = function (t, i, n, e, s) {
		return $W(HW, t, i, n, e, s)
	};
	cs.prototype[iG] = function (t, i, n, e) {
		zW(this, t, i, n, e)
	},
	cs[hh][nG] = function (t, i, n, e) {
		t instanceof Object && 1 == arguments[Wr] && (i = t.scope),
		FW(this, t, i, n, e)
	},
	aq[iG] = zW,
	aq[nG] = FW;
	var GW = function (t, i, n, e, s) {
		function r(t, i, n, e, s, h, a, o) {
			t[Td] = h,
			e || i[Xr](n, t, o, a),
			qr(t, function (o) {
				r(o, i, n, e, s, h, a + 1, t)
			}, o, s, h, n),
			e && i[Xr](n, t, o, a)
		}
		r(t, i, n, e, s, {}, 0)
	},
	HW = function (t, i, n, e, s) {
		function r(t, i, n, e, s, h, a) {
			var o,
			f = t[Wr];
			t[lc](function (t, r) {
				var c = t.v;
				c[Td] = h,
				e || i[Xr](n, c, t[eG], a, r, f),
				qr(c, function (t) {
					o || (o = []),
					t[Td] = h,
					o[nh]({
						v: t,
						_from: c
					})
				}, c, s, h, n)
			}),
			o && r(o, i, n, e, s, h, a + 1),
			e && t[lc](function (t, e) {
				i[Xr](n, t.v, t[eG], a, e, f)
			})
		}
		r([{
					v: t
				}
			], i, n, e, s, {}, 0)
	};
	aq[sG] = V,
	aq.log = ti,
	aq[of] = ni,
	aq[rG] = ii,
	aq[hG] = LG,
	aq.isOpera = RG,
	aq.isWebkit = jG,
	aq[aG] = NG,
	aq[oG] = BG,
	aq[fG] = zG,
	aq.isChrome = $G,
	aq.isMac = FG,
	aq[cG] = DU,
	aq[uG] = WG,
	aq.Styles = EU,
	aq.Consts = oq,
	aq[_G] = Xq,
	aq.Graph = jU,
	aq[dG] = gU,
	aq[lG] = CU,
	aq[vG] = ms,
	aq[Ij] = gs,
	aq[bG] = LU,
	aq.ImageUI = RU,
	aq[yG] = bU,
	aq[gG] = Yq,
	aq[HR] = kq,
	aq.InteractionEvent = Nr,
	aq[Rw] = _U,
	aq[YL] = lU,
	aq[FP] = dU,
	aq[mG] = cs,
	aq[EG] = LW,
	aq[xG] = pW,
	aq[lh] = pG;
	var qW = wG;
	return aq[TG] = OG,
	aq[Wp] = IG,
	aq[Xp] = "Copyright Â© 2018 Qunee.com",
	aq.css = vi,
	aq[MG] = NU,
	ti = function () {},
	aq[kG] = SG,
	aq
}
(window, document);