import {__esmMin as e} from "./rolldown-runtime.DIBZXYM-.mjs";
import {I as t, e as n, init_jsx_runtime as r, init_npm_react_18_2 as i, init_ssg_sandbox_shims as a, p as o, te as s, window as c} from "./react.BGOYdRaa.mjs";
import {Color as l, ControlType as u, RenderTarget as d, addPropertyControls as f, init_framer_6HDYDFRL as p} from "./framer.B1FS9TMt.mjs";
function m() {
    return h(ct(), 0, .9999999999999999)
}
function h(e, t, n) {
    return Math.min(Math.max(e, t), n)
}
function g(e, t, n, r) {
    return Math.floor((e * n + t * r) / (n + r))
}
function _(e) {
    let t = b(e)
      , n = y(e);
    return t === n && (n = 0),
    m() * (t - n) + n
}
function v(e) {
    return typeof e == `number` ? e : _(e)
}
function y(e) {
    return typeof e == `number` ? e : e.min
}
function b(e) {
    return typeof e == `number` ? e : e.max
}
function x(e, t) {
    if (e === t || t === void 0 && typeof e == `number`)
        return e;
    let n = y(e)
      , r = b(e);
    return t === void 0 ? x(n, r) : {
        min: Math.min(n, t),
        max: Math.max(r, t)
    }
}
function S(e) {
    let t = e.random
      , {enable: n, minimumValue: r} = typeof t == `boolean` ? {
        enable: t,
        minimumValue: 0
    } : t;
    return v(n ? x(e.value, r) : e.value)
}
function C(e, t) {
    let n = e.x - t.x
      , r = e.y - t.y;
    return {
        dx: n,
        dy: r,
        distance: Math.sqrt(n * n + r * r)
    }
}
function w(e, t) {
    return C(e, t).distance
}
function ee(e, t, n) {
    if (typeof e == `number`)
        return e * Math.PI / 180;
    switch (e) {
    case `top`:
        return -Math.PI / 2;
    case `top-right`:
        return -Math.PI / 4;
    case `right`:
        return 0;
    case `bottom-right`:
        return Math.PI / 4;
    case `bottom`:
        return Math.PI / 2;
    case `bottom-left`:
        return 3 * Math.PI / 4;
    case `left`:
        return Math.PI;
    case `top-left`:
        return -3 * Math.PI / 4;
    case `inside`:
        return Math.atan2(n.y - t.y, n.x - t.x);
    case `outside`:
        return Math.atan2(t.y - n.y, t.x - n.x);
    case `none`:
    default:
        return m() * Math.PI * 2
    }
}
function te(e) {
    let t = P.origin;
    return t.length = 1,
    t.angle = e,
    t
}
function ne(e, t, n, r) {
    return P.create(e.x * (n - r) / (n + r) + 2 * t.x * r / (n + r), e.y)
}
function re(e, t) {
    switch (t) {
    case `ease-out-quad`:
        return 1 - (1 - e) ** 2;
    case `ease-out-cubic`:
        return 1 - (1 - e) ** 3;
    case `ease-out-quart`:
        return 1 - (1 - e) ** 4;
    case `ease-out-quint`:
        return 1 - (1 - e) ** 5;
    case `ease-out-expo`:
        return e === 1 ? 1 : 1 - 2 ** (-10 * e);
    case `ease-out-sine`:
        return Math.sin(e * Math.PI / 2);
    case `ease-out-back`:
        {
            let t = 1.70158
              , n = t + 1;
            return 1 + n * (e - 1) ** 3 + t * (e - 1) ** 2
        }
    case `ease-out-circ`:
        return Math.sqrt(1 - (e - 1) ** 2);
    default:
        return e
    }
}
function ie(e) {
    var t, n;
    return (t = e.position)?.x !== void 0 && (n = e.position)?.y !== void 0 ? {
        x: e.position.x * e.size.width / 100,
        y: e.position.y * e.size.height / 100
    } : void 0
}
function ae(e) {
    var t, n, r, i;
    return {
        x: ((n = (t = e.position)?.x) ?? 100 * m()) * e.size.width / 100,
        y: ((i = (r = e.position)?.y) ?? 100 * m()) * e.size.height / 100
    }
}
function oe(e) {
    var t, n;
    let r = {
        x: (t = e.position)?.x === void 0 ? void 0 : v(e.position.x),
        y: (n = e.position)?.y === void 0 ? void 0 : v(e.position.y)
    };
    return ae({
        size: e.size,
        position: r
    })
}
function se(e) {
    var t, n, r, i;
    return {
        x: (n = (t = e.position)?.x) ?? m() * e.size.width,
        y: (i = (r = e.position)?.y) ?? m() * e.size.height
    }
}
function ce(e) {
    return e.endsWith(`%`) ? parseFloat(e) / 100 : parseFloat(e)
}
function le(e, t, n, r, i, a) {
    let o = {
        bounced: !1
    };
    return t.min < r.min || t.min > r.max || t.max < r.min || t.max > r.max || (e.max >= n.min && e.max <= (n.max + n.min) / 2 && i > 0 || e.min <= n.max && e.min > (n.max + n.min) / 2 && i < 0) && (o.velocity = i * -a,
    o.bounced = !0),
    o
}
function ue(e, t) {
    if (!(t instanceof Array))
        return e.matches(t);
    for (let n of t)
        if (e.matches(n))
            return !0;
    return !1
}
function T() {
    return c === void 0 || !c || c.document === void 0 || !c.document
}
function de() {
    return T() ? e => setTimeout(e) : e => (c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame || c.setTimeout)(e)
}
function fe() {
    return T() ? e => clearTimeout(e) : e => (c.cancelAnimationFrame || c.webkitCancelRequestAnimationFrame || c.mozCancelRequestAnimationFrame || c.oCancelRequestAnimationFrame || c.msCancelRequestAnimationFrame || c.clearTimeout)(e)
}
function E(e, t) {
    return e === t || t instanceof Array && t.indexOf(e) > -1
}
async function pe(e, t) {
    try {
        await document.fonts.load(`${t ?? `400`} 36px '${e ?? `Verdana`}'`)
    } catch {}
}
function me(e) {
    return Math.floor(m() * e.length)
}
function D(e, t, n=!0) {
    let r = t !== void 0 && n ? t % e.length : me(e);
    return e[r]
}
function he(e, t, n, r, i) {
    return ge(_e(e, r ?? 0), t, n, i)
}
function ge(e, t, n, r) {
    let i = !0;
    return r && r !== `bottom` || (i = e.top < t.height + n.x),
    !i || r && r !== `left` || (i = e.right > n.x),
    !i || r && r !== `right` || (i = e.left < t.width + n.y),
    !i || r && r !== `top` || (i = e.bottom > n.y),
    i
}
function _e(e, t) {
    return {
        bottom: e.y + t,
        left: e.x - t,
        right: e.x + t,
        top: e.y - t
    }
}
function O(e, ...t) {
    for (let n of t) {
        if (n == null)
            continue;
        if (typeof n != `object`) {
            e = n;
            continue
        }
        let t = Array.isArray(n);
        for (let r in !t || typeof e == `object` && e && Array.isArray(e) ? t || typeof e == `object` && e && !Array.isArray(e) || (e = {}) : e = [],
        n) {
            if (r === `__proto__`)
                continue;
            let t = n
              , i = t[r]
              , a = typeof i == `object`
              , o = e;
            o[r] = a && Array.isArray(i) ? i.map(e => O(o[r], e)) : O(o[r], i)
        }
    }
    return e
}
function ve(e, t) {
    return t instanceof Array ? !!t.find(t => t.enable && E(e, t.mode)) : E(e, t.mode)
}
function ye(e, t, n) {
    if (t instanceof Array)
        for (let r of t) {
            let t = r.mode
              , i = r.enable;
            i && E(e, t) && be(r, n)
        }
    else {
        let r = t.mode
          , i = t.enable;
        i && E(e, r) && be(t, n)
    }
}
function be(e, t) {
    let n = e.selectors;
    if (n instanceof Array)
        for (let r of n)
            t(r, e);
    else
        t(n, e)
}
function xe(e, t) {
    if (t && e)
        return e instanceof Array ? e.find(e => ue(t, e.selectors)) : ue(t, e.selectors) ? e : void 0
}
function Se(e) {
    return {
        position: e.getPosition(),
        radius: e.getRadius(),
        mass: e.getMass(),
        velocity: e.velocity,
        factor: P.create(S(e.options.bounce.horizontal), S(e.options.bounce.vertical))
    }
}
function Ce(e, t) {
    let {x: n, y: r} = e.velocity.sub(t.velocity)
      , [i,a] = [e.position, t.position]
      , {dx: o, dy: s} = C(a, i);
    if (n * o + r * s < 0)
        return;
    let c = -Math.atan2(s, o)
      , l = e.mass
      , u = t.mass
      , d = e.velocity.rotate(c)
      , f = t.velocity.rotate(c)
      , p = ne(d, f, l, u)
      , m = ne(f, d, l, u)
      , h = p.rotate(-c)
      , g = m.rotate(-c);
    e.velocity.x = h.x * e.factor.x,
    e.velocity.y = h.y * e.factor.y,
    t.velocity.x = g.x * t.factor.x,
    t.velocity.y = g.y * t.factor.y
}
function we(e, t) {
    let n = e.getPosition()
      , r = e.getRadius()
      , i = _e(n, r)
      , a = le({
        min: i.left,
        max: i.right
    }, {
        min: i.top,
        max: i.bottom
    }, {
        min: t.left,
        max: t.right
    }, {
        min: t.top,
        max: t.bottom
    }, e.velocity.x, S(e.options.bounce.horizontal));
    a.bounced && (a.velocity !== void 0 && (e.velocity.x = a.velocity),
    a.position !== void 0 && (e.position.x = a.position));
    let o = le({
        min: i.top,
        max: i.bottom
    }, {
        min: i.left,
        max: i.right
    }, {
        min: t.top,
        max: t.bottom
    }, {
        min: t.left,
        max: t.right
    }, e.velocity.y, S(e.options.bounce.vertical));
    o.bounced && (o.velocity !== void 0 && (e.velocity.y = o.velocity),
    o.position !== void 0 && (e.position.y = o.position))
}
function Te(e, t) {
    dt.set(e, t)
}
function Ee(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function De(e) {
    for (let[,t] of dt)
        if (e.startsWith(t.stringPrefix))
            return t.parseString(e);
    let t = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i
      , n = e.replace(t, (e, t, n, r, i) => t + t + n + n + r + r + (i === void 0 ? `` : i + i))
      , r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i
      , i = r.exec(n);
    return i ? {
        a: i[4] === void 0 ? 1 : parseInt(i[4], 16) / 255,
        b: parseInt(i[3], 16),
        g: parseInt(i[2], 16),
        r: parseInt(i[1], 16)
    } : void 0
}
function k(e, t, n=!0) {
    if (!e)
        return;
    let r = typeof e == `string` ? {
        value: e
    } : e;
    if (typeof r.value == `string`)
        return Oe(r.value, t, n);
    if (r.value instanceof Array)
        return k({
            value: D(r.value, t, n)
        });
    for (let[,e] of dt) {
        let t = e.handleRangeColor(r);
        if (t)
            return t
    }
}
function Oe(e, t, n=!0) {
    if (!e)
        return;
    let r = typeof e == `string` ? {
        value: e
    } : e;
    if (typeof r.value == `string`)
        return r.value === lt ? Fe() : Me(r.value);
    if (r.value instanceof Array)
        return Oe({
            value: D(r.value, t, n)
        });
    for (let[,e] of dt) {
        let t = e.handleColor(r);
        if (t)
            return t
    }
}
function ke(e, t, n=!0) {
    let r = k(e, t, n);
    return r ? Ae(r) : void 0
}
function Ae(e) {
    let t = e.r / 255
      , n = e.g / 255
      , r = e.b / 255
      , i = Math.max(t, n, r)
      , a = Math.min(t, n, r)
      , o = {
        h: 0,
        l: (i + a) / 2,
        s: 0
    };
    return i !== a && (o.s = o.l < .5 ? (i - a) / (i + a) : (i - a) / (2 - i - a),
    o.h = t === i ? (n - r) / (i - a) : o.h = n === i ? 2 + (r - t) / (i - a) : 4 + (t - n) / (i - a)),
    o.l *= 100,
    o.s *= 100,
    o.h *= 60,
    o.h < 0 && (o.h += 360),
    o.h >= 360 && (o.h -= 360),
    o
}
function je(e) {
    var t;
    return (t = De(e))?.a
}
function Me(e) {
    return De(e)
}
function Ne(e) {
    let t = {
        b: 0,
        g: 0,
        r: 0
    }
      , n = {
        h: e.h / 360,
        l: e.l / 100,
        s: e.s / 100
    };
    if (n.s) {
        let e = n.l < .5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s
          , r = 2 * n.l - e;
        t.r = Ee(r, e, n.h + 1 / 3),
        t.g = Ee(r, e, n.h),
        t.b = Ee(r, e, n.h - 1 / 3)
    } else
        t.b = n.l,
        t.g = n.l,
        t.r = n.l;
    return t.r = Math.floor(255 * t.r),
    t.g = Math.floor(255 * t.g),
    t.b = Math.floor(255 * t.b),
    t
}
function Pe(e) {
    let t = Ne(e);
    return {
        a: e.a,
        b: t.b,
        g: t.g,
        r: t.r
    }
}
function Fe(e) {
    let t = e ?? 0;
    return {
        b: Math.floor(_(x(t, 256))),
        g: Math.floor(_(x(t, 256))),
        r: Math.floor(_(x(t, 256)))
    }
}
function A(e, t) {
    return `rgba(${e.r}, ${e.g}, ${e.b}, ${t ?? 1})`
}
function Ie(e, t) {
    return `hsla(${e.h}, ${e.s}%, ${e.l}%, ${t ?? 1})`
}
function Le(e, t, n, r) {
    let i = e
      , a = t;
    return i.r === void 0 && (i = Ne(e)),
    a.r === void 0 && (a = Ne(t)),
    {
        b: g(i.b, a.b, n, r),
        g: g(i.g, a.g, n, r),
        r: g(i.r, a.r, n, r)
    }
}
function Re(e, t, n) {
    var r, i;
    if (n === lt)
        return Fe();
    if (n !== ut)
        return n;
    {
        let n = (r = e.getFillColor()) ?? e.getStrokeColor()
          , a = (i = t?.getFillColor()) ?? t?.getStrokeColor();
        if (n && a && t)
            return Le(n, a, e.getRadius(), t.getRadius());
        {
            let e = n ?? a;
            if (e)
                return Ne(e)
        }
    }
}
function ze(e, t, n) {
    let r = typeof e == `string` ? e : e.value;
    return r === lt ? n ? k({
        value: r
    }) : t ? lt : ut : k({
        value: r
    })
}
function Be(e) {
    return e === void 0 ? void 0 : {
        h: e.h.value,
        s: e.s.value,
        l: e.l.value
    }
}
function Ve(e, t, n) {
    let r = {
        h: {
            enable: !1,
            value: e.h
        },
        s: {
            enable: !1,
            value: e.s
        },
        l: {
            enable: !1,
            value: e.l
        }
    };
    return t && (He(r.h, t.h, n),
    He(r.s, t.s, n),
    He(r.l, t.l, n)),
    r
}
function He(e, t, n) {
    e.enable = t.enable,
    e.enable ? (e.velocity = v(t.speed) / 100 * n,
    e.decay = 1 - v(t.decay),
    e.status = 0,
    t.sync || (e.velocity *= m(),
    e.value *= m())) : e.velocity = 0
}
function Ue(e, t, n) {
    e.beginPath(),
    e.moveTo(t.x, t.y),
    e.lineTo(n.x, n.y),
    e.closePath()
}
function We(e, t, n, r) {
    e.beginPath(),
    e.moveTo(t.x, t.y),
    e.lineTo(n.x, n.y),
    e.lineTo(r.x, r.y),
    e.closePath()
}
function Ge(e, t, n) {
    e.save(),
    e.fillStyle = n ?? `rgba(0,0,0,0)`,
    e.fillRect(0, 0, t.width, t.height),
    e.restore()
}
function Ke(e, t) {
    e.clearRect(0, 0, t.width, t.height)
}
function qe(e) {
    var t, n, r, i, a, o, s, c, l, u;
    let {container: d, context: f, particle: p, delta: m, colorStyles: h, backgroundMask: g, composite: _, radius: v, opacity: y, shadow: b, transform: x} = e
      , S = p.getPosition();
    f.save(),
    x.a !== void 0 || x.b !== void 0 || x.c !== void 0 || x.d !== void 0 ? f.setTransform((t = x.a) ?? 1, (n = x.b) ?? 0, (r = x.c) ?? 0, (i = x.d) ?? 1, S.x, S.y) : f.translate(S.x, S.y),
    f.beginPath();
    let C = p.rotation + (p.options.rotate.path ? p.velocity.angle : 0);
    C !== 0 && f.rotate(C),
    g && (f.globalCompositeOperation = _);
    let w = p.shadowColor;
    b.enable && w && (f.shadowBlur = b.blur,
    f.shadowColor = A(w),
    f.shadowOffsetX = b.offset.x,
    f.shadowOffsetY = b.offset.y),
    h.fill && (f.fillStyle = h.fill);
    let ee = p.stroke;
    f.lineWidth = (a = p.strokeWidth) ?? 0,
    h.stroke && (f.strokeStyle = h.stroke),
    Je(d, f, p, v, y, m),
    ((o = ee?.width) ?? 0) > 0 && f.stroke(),
    p.close && f.closePath(),
    p.fill && f.fill(),
    f.restore(),
    f.save(),
    x.a !== void 0 || x.b !== void 0 || x.c !== void 0 || x.d !== void 0 ? f.setTransform((s = x.a) ?? 1, (c = x.b) ?? 0, (l = x.c) ?? 0, (u = x.d) ?? 1, S.x, S.y) : f.translate(S.x, S.y),
    p.rotation && f.rotate(p.rotation),
    g && (f.globalCompositeOperation = _),
    Ye(d, f, p, v, y, m),
    f.restore()
}
function Je(e, t, n, r, i, a) {
    if (!n.shape)
        return;
    let o = e.drawers.get(n.shape);
    o && o.draw(t, n, r, i, a, e.retina.pixelRatio)
}
function Ye(e, t, n, r, i, a) {
    if (!n.shape)
        return;
    let o = e.drawers.get(n.shape);
    o != null && o.afterEffect && o.afterEffect(t, n, r, i, a, e.retina.pixelRatio)
}
function Xe(e, t, n) {
    t.draw && (e.save(),
    t.draw(e, n),
    e.restore())
}
function Ze(e, t, n, r) {
    t.drawParticle && (e.save(),
    t.drawParticle(e, n, r),
    e.restore())
}
function Qe(e, t, n) {
    return {
        h: e.h,
        s: e.s,
        l: e.l + (t === `darken` ? -1 : 1) * n
    }
}
function $e(e, t, n) {
    var r;
    let i = t[n];
    i !== void 0 && (e[n] = ((r = e[n]) ?? 1) * i)
}
function j(e, t, n, r, i) {
    if (r) {
        let r = {
            passive: !0
        };
        typeof i == `boolean` ? r.capture = i : i !== void 0 && (r = i),
        e.addEventListener(t, n, r)
    } else {
        let r = i;
        e.removeEventListener(t, n, r)
    }
}
function et(e, ...t) {
    for (let n of t)
        e.load(n)
}
function tt(e, t, ...n) {
    let r = new Wn(e,t);
    return et(r, ...n),
    r
}
function M(e) {
    return e !== void 0 && !e.destroyed
}
function nt(e, t, ...n) {
    let r = new Xn(e,t);
    return et(r, ...n),
    r
}
function rt(e) {
    console.error(`tsParticles - Error ${e} while retrieving config file`)
}
async function it(e, t) {
    let n = e instanceof Array ? D(e, t) : e;
    if (!n)
        return;
    let r = await fetch(n);
    if (r.ok)
        return r.json();
    rt(r.status)
}
var at, ot, N, st, P, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, F, I, Et, Dt, Ot, kt, At, jt, Mt, Nt, L, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, R, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, z, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, B, V, ur, dr, fr, pr, H, mr, hr, gr, U, W, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, G, Mr, Nr, Pr, Fr, Ir, Lr, Rr, K, zr, Br, Vr, Hr, q = e( () => {
    a(),
    at = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    ot = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    st = class {
        constructor() {
            N.set(this, void 0),
            at(this, N, new Map, `f`)
        }
        addEventListener(e, t) {
            var n;
            this.removeEventListener(e, t),
            ot(this, N, `f`).get(e) || ot(this, N, `f`).set(e, []),
            (n = ot(this, N, `f`).get(e)) == null || n.push(t)
        }
        dispatchEvent(e, t) {
            var n;
            (n = ot(this, N, `f`).get(e)) == null || n.forEach(e => e(t))
        }
        hasEventListener(e) {
            return !!ot(this, N, `f`).get(e)
        }
        removeAllEventListeners(e) {
            e ? ot(this, N, `f`).delete(e) : at(this, N, new Map, `f`)
        }
        removeEventListener(e, t) {
            let n = ot(this, N, `f`).get(e);
            if (!n)
                return;
            let r = n.length
              , i = n.indexOf(t);
            i < 0 || (r === 1 ? ot(this, N, `f`).delete(e) : n.splice(i, 1))
        }
    }
    ,
    N = new WeakMap,
    P = class e {
        constructor(e, t) {
            if (typeof e != `number` && e)
                this.x = e.x,
                this.y = e.y;
            else {
                if (e === void 0 || t === void 0)
                    throw Error(`tsParticles - Vector not initialized correctly`);
                this.x = e,
                this.y = t
            }
        }
        static get origin() {
            return e.create(0, 0)
        }
        get angle() {
            return Math.atan2(this.y, this.x)
        }
        set angle(e) {
            this.updateFromAngle(e, this.length)
        }
        get length() {
            return Math.sqrt(this.getLengthSq())
        }
        set length(e) {
            this.updateFromAngle(this.angle, e)
        }
        static clone(t) {
            return e.create(t.x, t.y)
        }
        static create(t, n) {
            return new e(t,n)
        }
        add(t) {
            return e.create(this.x + t.x, this.y + t.y)
        }
        addTo(e) {
            this.x += e.x,
            this.y += e.y
        }
        copy() {
            return e.clone(this)
        }
        distanceTo(e) {
            return this.sub(e).length
        }
        distanceToSq(e) {
            return this.sub(e).getLengthSq()
        }
        div(t) {
            return e.create(this.x / t, this.y / t)
        }
        divTo(e) {
            this.x /= e,
            this.y /= e
        }
        getLengthSq() {
            return this.x ** 2 + this.y ** 2
        }
        manhattanDistanceTo(e) {
            return Math.abs(e.x - this.x) + Math.abs(e.y - this.y)
        }
        mult(t) {
            return e.create(this.x * t, this.y * t)
        }
        multTo(e) {
            this.x *= e,
            this.y *= e
        }
        rotate(t) {
            return e.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t))
        }
        setTo(e) {
            this.x = e.x,
            this.y = e.y
        }
        sub(t) {
            return e.create(this.x - t.x, this.y - t.y)
        }
        subFrom(e) {
            this.x -= e.x,
            this.y -= e.y
        }
        updateFromAngle(e, t) {
            this.x = Math.cos(e) * t,
            this.y = Math.sin(e) * t
        }
    }
    ,
    ct = Math.random,
    lt = `random`,
    ut = `mid`,
    dt = new Map,
    ft = `generated`,
    pt = `touchend`,
    mt = `pointerdown`,
    ht = `pointerup`,
    gt = `pointermove`,
    _t = `touchstart`,
    vt = `touchmove`,
    yt = `pointerleave`,
    bt = `pointerout`,
    xt = `touchcancel`,
    St = `resize`,
    Ct = `visibilitychange`,
    wt = `No polygon data loaded.`,
    Tt = `No polygon found, you need to specify SVG url in config.`,
    F = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    I = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    jt = class {
        constructor(e) {
            this.container = e,
            Et.set(this, void 0),
            Dt.set(this, void 0),
            Ot.set(this, void 0),
            kt.set(this, void 0),
            At.set(this, void 0),
            this.size = {
                height: 0,
                width: 0
            },
            F(this, Dt, null, `f`),
            this.generatedCanvas = !1,
            F(this, kt, [], `f`),
            F(this, Ot, [], `f`),
            F(this, At, [], `f`),
            F(this, Et, [], `f`)
        }
        clear() {
            let e = this.container.actualOptions
              , t = e.particles.move.trail;
            e.backgroundMask.enable ? this.paint() : t.enable && t.length > 0 && this.trailFillColor ? this.paintBase(A(this.trailFillColor, 1 / t.length)) : this.draw(e => {
                Ke(e, this.size)
            }
            )
        }
        destroy() {
            var e;
            this.generatedCanvas ? (e = this.element) == null || e.remove() : this.resetOriginalStyle(),
            this.draw(e => {
                Ke(e, this.size)
            }
            ),
            F(this, kt, [], `f`),
            F(this, Ot, [], `f`),
            F(this, At, [], `f`),
            F(this, Et, [], `f`)
        }
        draw(e) {
            if (I(this, Dt, `f`))
                return e(I(this, Dt, `f`))
        }
        drawParticle(e, t) {
            var n;
            if (e.spawning || e.destroyed)
                return;
            let r = e.getRadius();
            if (r <= 0)
                return;
            let i = e.getFillColor()
              , a = (n = e.getStrokeColor()) ?? i
              , [o,s] = this.getPluginParticleColors(e);
            o ||= i,
            s ||= a,
            (o || s) && this.draw(n => {
                var i, a, c, l, u;
                let d = this.container.actualOptions
                  , f = e.options.zIndex
                  , p = (1 - e.zIndexFactor) ** f.opacityRate
                  , m = (c = (i = e.bubble.opacity) ?? (a = e.opacity)?.value) ?? 1
                  , h = (u = (l = e.stroke)?.opacity) ?? m
                  , g = m * p
                  , _ = h * p
                  , v = {}
                  , y = {
                    fill: o ? Ie(o, g) : void 0
                };
                y.stroke = s ? Ie(s, _) : y.fill,
                this.applyPreDrawUpdaters(n, e, r, g, y, v),
                qe({
                    container: this.container,
                    context: n,
                    particle: e,
                    delta: t,
                    colorStyles: y,
                    backgroundMask: d.backgroundMask.enable,
                    composite: d.backgroundMask.composite,
                    radius: r * (1 - e.zIndexFactor) ** f.sizeRate,
                    opacity: g,
                    shadow: e.options.shadow,
                    transform: v
                }),
                this.applyPostDrawUpdaters(e)
            }
            )
        }
        drawParticlePlugin(e, t, n) {
            this.draw(r => {
                Ze(r, e, t, n)
            }
            )
        }
        drawPlugin(e, t) {
            this.draw(n => {
                Xe(n, e, t)
            }
            )
        }
        init() {
            this.resize(),
            this.initStyle(),
            this.initCover(),
            this.initTrail(),
            this.initBackground(),
            this.initUpdaters(),
            this.initPlugins(),
            this.paint()
        }
        initBackground() {
            let e = this.container.actualOptions
              , t = e.background
              , n = this.element
              , r = n?.style;
            if (r) {
                if (t.color) {
                    let e = k(t.color);
                    r.backgroundColor = e ? A(e, t.opacity) : ``
                } else
                    r.backgroundColor = ``;
                r.backgroundImage = t.image || ``,
                r.backgroundPosition = t.position || ``,
                r.backgroundRepeat = t.repeat || ``,
                r.backgroundSize = t.size || ``
            }
        }
        initPlugins() {
            F(this, At, [], `f`);
            for (let[,e] of this.container.plugins)
                e.resize && I(this, At, `f`).push(e),
                (e.particleFillColor || e.particleStrokeColor) && I(this, Et, `f`).push(e)
        }
        initUpdaters() {
            F(this, kt, [], `f`),
            F(this, Ot, [], `f`);
            for (let e of this.container.particles.updaters)
                e.afterDraw && I(this, Ot, `f`).push(e),
                (e.getColorStyles || e.getTransformValues || e.beforeDraw) && I(this, kt, `f`).push(e)
        }
        loadCanvas(e) {
            var t;
            this.generatedCanvas && ((t = this.element) == null || t.remove()),
            this.generatedCanvas = e.dataset && ft in e.dataset ? e.dataset[ft] === `true` : this.generatedCanvas,
            this.element = e,
            this.originalStyle = O({}, this.element.style),
            this.size.height = e.offsetHeight,
            this.size.width = e.offsetWidth,
            F(this, Dt, this.element.getContext(`2d`), `f`),
            this.container.retina.init(),
            this.initBackground()
        }
        paint() {
            let e = this.container.actualOptions;
            this.draw(t => {
                e.backgroundMask.enable && e.backgroundMask.cover ? (Ke(t, this.size),
                this.paintBase(this.coverColorStyle)) : this.paintBase()
            }
            )
        }
        resize() {
            if (!this.element)
                return;
            let e = this.container
              , t = e.retina.pixelRatio
              , n = e.canvas.size
              , r = {
                width: this.element.offsetWidth * t,
                height: this.element.offsetHeight * t
            };
            if (r.height === n.height && r.width === n.width && r.height === this.element.height && r.width === this.element.width)
                return;
            let i = Object.assign({}, n);
            this.element.width = n.width = this.element.offsetWidth * t,
            this.element.height = n.height = this.element.offsetHeight * t,
            this.container.started && (this.resizeFactor = {
                width: n.width / i.width,
                height: n.height / i.height
            })
        }
        async windowResize() {
            if (!this.element)
                return;
            this.resize();
            let e = this.container
              , t = e.updateActualOptions();
            e.particles.setDensity(),
            this.applyResizePlugins(),
            t && await e.refresh()
        }
        applyPostDrawUpdaters(e) {
            var t;
            for (let n of I(this, Ot, `f`))
                (t = n.afterDraw) == null || t.call(n, e)
        }
        applyPreDrawUpdaters(e, t, n, r, i, a) {
            var o;
            for (let s of I(this, kt, `f`)) {
                if (s.getColorStyles) {
                    let {fill: a, stroke: o} = s.getColorStyles(t, e, n, r);
                    a && (i.fill = a),
                    o && (i.stroke = o)
                }
                if (s.getTransformValues) {
                    let e = s.getTransformValues(t);
                    for (let t in e)
                        $e(a, e, t)
                }
                (o = s.beforeDraw) == null || o.call(s, t)
            }
        }
        applyResizePlugins() {
            var e;
            for (let t of I(this, At, `f`))
                (e = t.resize) == null || e.call(t)
        }
        getPluginParticleColors(e) {
            let t, n;
            for (let r of I(this, Et, `f`))
                if (!t && r.particleFillColor && (t = ke(r.particleFillColor(e))),
                !n && r.particleStrokeColor && (n = ke(r.particleStrokeColor(e))),
                t && n)
                    break;
            return [t, n]
        }
        initCover() {
            let e = this.container.actualOptions
              , t = e.backgroundMask.cover
              , n = t.color
              , r = k(n);
            if (r) {
                let e = {
                    r: r.r,
                    g: r.g,
                    b: r.b,
                    a: t.opacity
                };
                this.coverColorStyle = A(e, e.a)
            }
        }
        initStyle() {
            let e = this.element
              , t = this.container.actualOptions;
            if (e)
                for (let n in t.fullScreen.enable ? (this.originalStyle = O({}, e.style),
                e.style.setProperty(`position`, `fixed`, `important`),
                e.style.setProperty(`z-index`, t.fullScreen.zIndex.toString(10), `important`),
                e.style.setProperty(`top`, `0`, `important`),
                e.style.setProperty(`left`, `0`, `important`),
                e.style.setProperty(`width`, `100%`, `important`),
                e.style.setProperty(`height`, `100%`, `important`)) : this.resetOriginalStyle(),
                t.style) {
                    if (!n || !t.style)
                        continue;
                    let r = t.style[n];
                    r && e.style.setProperty(n, r, `important`)
                }
        }
        initTrail() {
            let e = this.container.actualOptions
              , t = e.particles.move.trail
              , n = k(t.fillColor);
            if (n) {
                let t = e.particles.move.trail;
                this.trailFillColor = {
                    r: n.r,
                    g: n.g,
                    b: n.b,
                    a: 1 / t.length
                }
            }
        }
        paintBase(e) {
            this.draw(t => {
                Ge(t, this.size, e)
            }
            )
        }
        resetOriginalStyle() {
            let e = this.element
              , t = this.originalStyle;
            e && t && (e.style.position = t.position,
            e.style.zIndex = t.zIndex,
            e.style.top = t.top,
            e.style.left = t.left,
            e.style.width = t.width,
            e.style.height = t.height)
        }
    }
    ,
    Et = new WeakMap,
    Dt = new WeakMap,
    Ot = new WeakMap,
    kt = new WeakMap,
    At = new WeakMap,
    Mt = class {
        constructor(e) {
            this.container = e,
            this.canPush = !0,
            this.mouseMoveHandler = e => this.mouseTouchMove(e),
            this.touchStartHandler = e => this.mouseTouchMove(e),
            this.touchMoveHandler = e => this.mouseTouchMove(e),
            this.touchEndHandler = () => this.mouseTouchFinish(),
            this.mouseLeaveHandler = () => this.mouseTouchFinish(),
            this.touchCancelHandler = () => this.mouseTouchFinish(),
            this.touchEndClickHandler = e => this.mouseTouchClick(e),
            this.mouseUpHandler = e => this.mouseTouchClick(e),
            this.mouseDownHandler = () => this.mouseDown(),
            this.visibilityChangeHandler = () => this.handleVisibilityChange(),
            this.themeChangeHandler = e => this.handleThemeChange(e),
            this.oldThemeChangeHandler = e => this.handleThemeChange(e),
            this.resizeHandler = () => this.handleWindowResize()
        }
        addListeners() {
            this.manageListeners(!0)
        }
        removeListeners() {
            this.manageListeners(!1)
        }
        doMouseTouchClick(e) {
            let t = this.container
              , n = t.actualOptions;
            if (this.canPush) {
                let e = t.interactivity.mouse.position;
                if (!e)
                    return;
                t.interactivity.mouse.clickPosition = {
                    x: e.x,
                    y: e.y
                },
                t.interactivity.mouse.clickTime = new Date().getTime();
                let r = n.interactivity.events.onClick;
                if (r.mode instanceof Array)
                    for (let e of r.mode)
                        this.handleClickMode(e);
                else
                    this.handleClickMode(r.mode)
            }
            e.type === `touchend` && setTimeout( () => this.mouseTouchFinish(), 500)
        }
        handleClickMode(e) {
            this.container.handleClickMode(e)
        }
        handleThemeChange(e) {
            let t = e
              , n = t.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme
              , r = this.container.options.themes.find(e => e.name === n);
            r && r.default.auto && this.container.loadTheme(n)
        }
        handleVisibilityChange() {
            let e = this.container
              , t = e.actualOptions;
            this.mouseTouchFinish(),
            t.pauseOnBlur && (document != null && document.hidden ? (e.pageHidden = !0,
            e.pause()) : (e.pageHidden = !1,
            e.getAnimationStatus() ? e.play(!0) : e.draw(!0)))
        }
        handleWindowResize() {
            this.resizeTimeout && (clearTimeout(this.resizeTimeout),
            delete this.resizeTimeout),
            this.resizeTimeout = setTimeout(async () => {
                var e;
                return (e = this.container.canvas)?.windowResize()
            }
            , 500)
        }
        manageListeners(e) {
            var t;
            let n = this.container
              , r = n.actualOptions
              , i = r.interactivity.detectsOn
              , a = yt;
            if (i === `window`)
                n.interactivity.element = c,
                a = bt;
            else if (i === `parent` && n.canvas.element) {
                let e = n.canvas.element;
                n.interactivity.element = (t = e.parentElement) ?? e.parentNode
            } else
                n.interactivity.element = n.canvas.element;
            let o = !T() && typeof matchMedia < `u` && matchMedia(`(prefers-color-scheme: dark)`);
            o && (o.addEventListener === void 0 ? o.addListener !== void 0 && (e ? o.addListener(this.oldThemeChangeHandler) : o.removeListener(this.oldThemeChangeHandler)) : j(o, `change`, this.themeChangeHandler, e));
            let s = n.interactivity.element;
            if (!s)
                return;
            let l = s;
            (r.interactivity.events.onHover.enable || r.interactivity.events.onClick.enable) && (j(s, gt, this.mouseMoveHandler, e),
            j(s, _t, this.touchStartHandler, e),
            j(s, vt, this.touchMoveHandler, e),
            r.interactivity.events.onClick.enable ? (j(s, pt, this.touchEndClickHandler, e),
            j(s, ht, this.mouseUpHandler, e),
            j(s, mt, this.mouseDownHandler, e)) : j(s, pt, this.touchEndHandler, e),
            j(s, a, this.mouseLeaveHandler, e),
            j(s, xt, this.touchCancelHandler, e)),
            n.canvas.element && (n.canvas.element.style.pointerEvents = l === n.canvas.element ? `initial` : `none`),
            r.interactivity.events.resize && (typeof ResizeObserver < `u` ? this.resizeObserver && !e ? (n.canvas.element && this.resizeObserver.unobserve(n.canvas.element),
            this.resizeObserver.disconnect(),
            delete this.resizeObserver) : !this.resizeObserver && e && n.canvas.element && (this.resizeObserver = new ResizeObserver(e => {
                let t = e.find(e => e.target === n.canvas.element);
                t && this.handleWindowResize()
            }
            ),
            this.resizeObserver.observe(n.canvas.element)) : j(c, St, this.resizeHandler, e)),
            document && j(document, Ct, this.visibilityChangeHandler, e, !1)
        }
        mouseDown() {
            let e = this.container.interactivity;
            if (e) {
                let t = e.mouse;
                t.clicking = !0,
                t.downPosition = t.position
            }
        }
        mouseTouchClick(e) {
            let t = this.container
              , n = t.actualOptions
              , r = t.interactivity.mouse;
            r.inside = !0;
            let i = !1
              , a = r.position;
            if (a && n.interactivity.events.onClick.enable) {
                for (let[,e] of t.plugins)
                    if (e.clickPositionValid && (i = e.clickPositionValid(a),
                    i))
                        break;
                i || this.doMouseTouchClick(e),
                r.clicking = !1
            }
        }
        mouseTouchFinish() {
            let e = this.container.interactivity;
            if (!e)
                return;
            let t = e.mouse;
            delete t.position,
            delete t.clickPosition,
            delete t.downPosition,
            e.status = yt,
            t.inside = !1,
            t.clicking = !1
        }
        mouseTouchMove(e) {
            var t, n, r, i, a, o, s;
            let l = this.container
              , u = l.actualOptions;
            if (!(t = l.interactivity)?.element)
                return;
            l.interactivity.mouse.inside = !0;
            let d, f = l.canvas.element;
            if (e.type.startsWith(`pointer`)) {
                this.canPush = !0;
                let t = e;
                if (l.interactivity.element === c) {
                    if (f) {
                        let e = f.getBoundingClientRect();
                        d = {
                            x: t.clientX - e.left,
                            y: t.clientY - e.top
                        }
                    }
                } else if (u.interactivity.detectsOn === `parent`) {
                    let e = t.target
                      , i = t.currentTarget
                      , a = l.canvas.element;
                    if (e && i && a) {
                        let n = e.getBoundingClientRect()
                          , r = i.getBoundingClientRect()
                          , o = a.getBoundingClientRect();
                        d = {
                            x: t.offsetX + 2 * n.left - (r.left + o.left),
                            y: t.offsetY + 2 * n.top - (r.top + o.top)
                        }
                    } else
                        d = {
                            x: (n = t.offsetX) ?? t.clientX,
                            y: (r = t.offsetY) ?? t.clientY
                        }
                } else
                    t.target === l.canvas.element && (d = {
                        x: (i = t.offsetX) ?? t.clientX,
                        y: (a = t.offsetY) ?? t.clientY
                    })
            } else {
                this.canPush = e.type !== `touchmove`;
                let t = e
                  , n = t.touches[t.touches.length - 1]
                  , r = f?.getBoundingClientRect();
                d = {
                    x: n.clientX - ((o = r?.left) ?? 0),
                    y: n.clientY - ((s = r?.top) ?? 0)
                }
            }
            let p = l.retina.pixelRatio;
            d && (d.x *= p,
            d.y *= p),
            l.interactivity.mouse.position = d,
            l.interactivity.status = gt
        }
    }
    ,
    Nt = class {
        constructor(e) {
            this.container = e
        }
        async nextFrame(e) {
            var t;
            try {
                let n = this.container;
                if (n.lastFrameTime !== void 0 && e < n.lastFrameTime + 1e3 / n.fpsLimit) {
                    n.draw(!1);
                    return
                }
                (t = n.lastFrameTime) ?? (n.lastFrameTime = e);
                let r = e - n.lastFrameTime
                  , i = {
                    value: r,
                    factor: 60 * r / 1e3
                };
                if (n.lifeTime += i.value,
                n.lastFrameTime = e,
                r > 1e3) {
                    n.draw(!1);
                    return
                }
                if (await n.particles.draw(i),
                n.duration > 0 && n.lifeTime > n.duration) {
                    n.destroy();
                    return
                }
                n.getAnimationStatus() && n.draw(!1)
            } catch (e) {
                console.error(`tsParticles error in animation loop`, e)
            }
        }
    }
    ,
    L = class e {
        constructor() {
            this.value = ``
        }
        static create(t, n) {
            let r = new e;
            return r.load(t),
            n !== void 0 && (typeof n == `string` || n instanceof Array ? r.load({
                value: n
            }) : r.load(n)),
            r
        }
        load(e) {
            e?.value !== void 0 && (this.value = e.value)
        }
    }
    ,
    Pt = class {
        constructor() {
            this.color = new L,
            this.color.value = ``,
            this.image = ``,
            this.position = ``,
            this.repeat = ``,
            this.size = ``,
            this.opacity = 1
        }
        load(e) {
            e && (e.color !== void 0 && (this.color = L.create(this.color, e.color)),
            e.image !== void 0 && (this.image = e.image),
            e.position !== void 0 && (this.position = e.position),
            e.repeat !== void 0 && (this.repeat = e.repeat),
            e.size !== void 0 && (this.size = e.size),
            e.opacity !== void 0 && (this.opacity = e.opacity))
        }
    }
    ,
    Ft = class {
        constructor() {
            this.color = new L,
            this.color.value = `#fff`,
            this.opacity = 1
        }
        load(e) {
            e && (e.color !== void 0 && (this.color = L.create(this.color, e.color)),
            e.opacity !== void 0 && (this.opacity = e.opacity))
        }
    }
    ,
    It = class {
        constructor() {
            this.composite = `destination-out`,
            this.cover = new Ft,
            this.enable = !1
        }
        load(e) {
            if (e) {
                if (e.composite !== void 0 && (this.composite = e.composite),
                e.cover !== void 0) {
                    let t = e.cover
                      , n = typeof e.cover == `string` ? {
                        color: e.cover
                    } : e.cover;
                    this.cover.load(t.color === void 0 ? {
                        color: n
                    } : t)
                }
                e.enable !== void 0 && (this.enable = e.enable)
            }
        }
    }
    ,
    Lt = class {
        constructor() {
            this.enable = !0,
            this.zIndex = 0
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.zIndex !== void 0 && (this.zIndex = e.zIndex))
        }
    }
    ,
    Rt = class {
        constructor() {
            this.enable = !1,
            this.mode = []
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.mode !== void 0 && (this.mode = e.mode))
        }
    }
    ,
    zt = class {
        constructor() {
            this.selectors = [],
            this.enable = !1,
            this.mode = [],
            this.type = `circle`
        }
        get el() {
            return this.elementId
        }
        set el(e) {
            this.elementId = e
        }
        get elementId() {
            return this.ids
        }
        set elementId(e) {
            this.ids = e
        }
        get ids() {
            return this.selectors instanceof Array ? this.selectors.map(e => e.replace(`#`, ``)) : this.selectors.replace(`#`, ``)
        }
        set ids(e) {
            this.selectors = e instanceof Array ? e.map(e => `#${e}`) : `#${e}`
        }
        load(e) {
            var t, n;
            if (!e)
                return;
            let r = (n = (t = e.ids) ?? e.elementId) ?? e.el;
            r !== void 0 && (this.ids = r),
            e.selectors !== void 0 && (this.selectors = e.selectors),
            e.enable !== void 0 && (this.enable = e.enable),
            e.mode !== void 0 && (this.mode = e.mode),
            e.type !== void 0 && (this.type = e.type)
        }
    }
    ,
    Bt = class {
        constructor() {
            this.enable = !1,
            this.force = 2,
            this.smooth = 10
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.force !== void 0 && (this.force = e.force),
            e.smooth !== void 0 && (this.smooth = e.smooth))
        }
    }
    ,
    Vt = class {
        constructor() {
            this.enable = !1,
            this.mode = [],
            this.parallax = new Bt
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.mode !== void 0 && (this.mode = e.mode),
            this.parallax.load(e.parallax))
        }
    }
    ,
    Ht = class {
        constructor() {
            this.onClick = new Rt,
            this.onDiv = new zt,
            this.onHover = new Vt,
            this.resize = !0
        }
        get onclick() {
            return this.onClick
        }
        set onclick(e) {
            this.onClick = e
        }
        get ondiv() {
            return this.onDiv
        }
        set ondiv(e) {
            this.onDiv = e
        }
        get onhover() {
            return this.onHover
        }
        set onhover(e) {
            this.onHover = e
        }
        load(e) {
            var t, n, r;
            if (!e)
                return;
            this.onClick.load((t = e.onClick) ?? e.onclick);
            let i = (n = e.onDiv) ?? e.ondiv;
            i !== void 0 && (i instanceof Array ? this.onDiv = i.map(e => {
                let t = new zt;
                return t.load(e),
                t
            }
            ) : (this.onDiv = new zt,
            this.onDiv.load(i))),
            this.onHover.load((r = e.onHover) ?? e.onhover),
            e.resize !== void 0 && (this.resize = e.resize)
        }
    }
    ,
    Ut = class {
        constructor() {
            this.factor = 3,
            this.radius = 200
        }
        load(e) {
            e && (e.factor !== void 0 && (this.factor = e.factor),
            e.radius !== void 0 && (this.radius = e.radius))
        }
    }
    ,
    Wt = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Gt = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Jt = class {
        constructor(e, t) {
            Kt.set(this, void 0),
            qt.set(this, void 0),
            Wt(this, qt, e, `f`),
            Wt(this, Kt, t, `f`),
            this.slow = new Ut
        }
        load(e) {
            if (e && (this.slow.load(e.slow),
            Gt(this, Kt, `f`))) {
                let t = Gt(this, qt, `f`).plugins.interactors.get(Gt(this, Kt, `f`));
                if (t)
                    for (let n of t)
                        n.loadModeOptions && n.loadModeOptions(this, e)
            }
        }
    }
    ,
    Kt = new WeakMap,
    qt = new WeakMap,
    Yt = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Qt = class {
        constructor(e, t) {
            Xt.set(this, void 0),
            Zt.set(this, void 0),
            Yt(this, Zt, e, `f`),
            Yt(this, Xt, t, `f`),
            this.detectsOn = `window`,
            this.events = new Ht,
            this.modes = new Jt(e,t)
        }
        get detect_on() {
            return this.detectsOn
        }
        set detect_on(e) {
            this.detectsOn = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            let n = (t = e.detectsOn) ?? e.detect_on;
            n !== void 0 && (this.detectsOn = n),
            this.events.load(e.events),
            this.modes.load(e.modes)
        }
    }
    ,
    Xt = new WeakMap,
    Zt = new WeakMap,
    $t = class {
        load(e) {
            var t, n;
            e && (e.position !== void 0 && (this.position = {
                x: (t = e.position.x) ?? 50,
                y: (n = e.position.y) ?? 50
            }),
            e.options !== void 0 && (this.options = O({}, e.options)))
        }
    }
    ,
    en = class {
        constructor() {
            this.factor = 4,
            this.value = !0
        }
        load(e) {
            e && (e.factor !== void 0 && (this.factor = e.factor),
            e.value !== void 0 && (this.value = e.value))
        }
    }
    ,
    tn = class {
        constructor() {
            this.disable = !1,
            this.reduce = new en
        }
        load(e) {
            e && (e.disable !== void 0 && (this.disable = e.disable),
            this.reduce.load(e.reduce))
        }
    }
    ,
    nn = class {
        constructor() {
            this.maxWidth = 1 / 0,
            this.options = {},
            this.mode = `canvas`
        }
        load(e) {
            e && (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
            e.mode !== void 0 && (e.mode === `screen` ? this.mode = `screen` : this.mode = `canvas`),
            e.options !== void 0 && (this.options = O({}, e.options)))
        }
    }
    ,
    rn = class {
        constructor() {
            this.auto = !1,
            this.mode = `any`,
            this.value = !1
        }
        load(e) {
            e && (e.auto !== void 0 && (this.auto = e.auto),
            e.mode !== void 0 && (this.mode = e.mode),
            e.value !== void 0 && (this.value = e.value))
        }
    }
    ,
    an = class {
        constructor() {
            this.name = ``,
            this.default = new rn
        }
        load(e) {
            e && (e.name !== void 0 && (this.name = e.name),
            this.default.load(e.default),
            e.options !== void 0 && (this.options = O({}, e.options)))
        }
    }
    ,
    on = class {
        constructor() {
            this.count = 0,
            this.enable = !1,
            this.offset = 0,
            this.speed = 1,
            this.decay = 0,
            this.sync = !0
        }
        load(e) {
            e && (e.count !== void 0 && (this.count = x(e.count)),
            e.enable !== void 0 && (this.enable = e.enable),
            e.offset !== void 0 && (this.offset = x(e.offset)),
            e.speed !== void 0 && (this.speed = x(e.speed)),
            e.decay !== void 0 && (this.decay = x(e.decay)),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    sn = class {
        constructor() {
            this.h = new on,
            this.s = new on,
            this.l = new on
        }
        load(e) {
            e && (this.h.load(e.h),
            this.s.load(e.s),
            this.l.load(e.l))
        }
    }
    ,
    cn = class e extends L {
        constructor() {
            super(),
            this.animation = new sn
        }
        static create(t, n) {
            let r = new e;
            return r.load(t),
            n !== void 0 && (typeof n == `string` || n instanceof Array ? r.load({
                value: n
            }) : r.load(n)),
            r
        }
        load(e) {
            if (super.load(e),
            !e)
                return;
            let t = e.animation;
            t !== void 0 && (t.enable === void 0 ? this.animation.load(e.animation) : this.animation.h.load(t))
        }
    }
    ,
    ln = class {
        constructor() {
            this.enable = !0,
            this.retries = 0
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.retries !== void 0 && (this.retries = e.retries))
        }
    }
    ,
    un = class {
        constructor() {
            this.enable = !1,
            this.minimumValue = 0
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue))
        }
    }
    ,
    R = class {
        constructor() {
            this.random = new un,
            this.value = 0
        }
        load(e) {
            e && (typeof e.random == `boolean` ? this.random.enable = e.random : this.random.load(e.random),
            e.value !== void 0 && (this.value = x(e.value, this.random.enable ? this.random.minimumValue : void 0)))
        }
    }
    ,
    dn = class extends R {
        constructor() {
            super(),
            this.random.minimumValue = .1,
            this.value = 1
        }
    }
    ,
    fn = class {
        constructor() {
            this.horizontal = new dn,
            this.vertical = new dn
        }
        load(e) {
            e && (this.horizontal.load(e.horizontal),
            this.vertical.load(e.vertical))
        }
    }
    ,
    pn = class {
        constructor() {
            this.bounce = new fn,
            this.enable = !1,
            this.mode = `bounce`,
            this.overlap = new ln
        }
        load(e) {
            e && (this.bounce.load(e.bounce),
            e.enable !== void 0 && (this.enable = e.enable),
            e.mode !== void 0 && (this.mode = e.mode),
            this.overlap.load(e.overlap))
        }
    }
    ,
    mn = class extends R {
        constructor() {
            super(),
            this.value = 3
        }
    }
    ,
    hn = class extends R {
        constructor() {
            super(),
            this.value = {
                min: 4,
                max: 9
            }
        }
    }
    ,
    gn = class {
        constructor() {
            this.count = 1,
            this.factor = new mn,
            this.rate = new hn,
            this.sizeOffset = !0
        }
        load(e) {
            e && (e.count !== void 0 && (this.count = e.count),
            this.factor.load(e.factor),
            this.rate.load(e.rate),
            e.particles !== void 0 && (e.particles instanceof Array ? this.particles = e.particles.map(e => O({}, e)) : this.particles = O({}, e.particles)),
            e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset))
        }
    }
    ,
    _n = class {
        constructor() {
            this.mode = `none`,
            this.split = new gn
        }
        load(e) {
            e && (e.mode !== void 0 && (this.mode = e.mode),
            this.split.load(e.split))
        }
    }
    ,
    vn = class {
        constructor() {
            this.offset = 0,
            this.value = 90
        }
        load(e) {
            e && (e.offset !== void 0 && (this.offset = x(e.offset)),
            e.value !== void 0 && (this.value = x(e.value)))
        }
    }
    ,
    yn = class {
        constructor() {
            this.distance = 200,
            this.enable = !1,
            this.rotate = {
                x: 3e3,
                y: 3e3
            }
        }
        get rotateX() {
            return this.rotate.x
        }
        set rotateX(e) {
            this.rotate.x = e
        }
        get rotateY() {
            return this.rotate.y
        }
        set rotateY(e) {
            this.rotate.y = e
        }
        load(e) {
            var t, n, r, i;
            if (!e)
                return;
            e.distance !== void 0 && (this.distance = x(e.distance)),
            e.enable !== void 0 && (this.enable = e.enable);
            let a = (n = (t = e.rotate)?.x) ?? e.rotateX;
            a !== void 0 && (this.rotate.x = a);
            let o = (i = (r = e.rotate)?.y) ?? e.rotateY;
            o !== void 0 && (this.rotate.y = o)
        }
    }
    ,
    bn = class {
        constructor() {
            this.acceleration = 9.81,
            this.enable = !1,
            this.inverse = !1,
            this.maxSpeed = 50
        }
        load(e) {
            e && (e.acceleration !== void 0 && (this.acceleration = x(e.acceleration)),
            e.enable !== void 0 && (this.enable = e.enable),
            e.inverse !== void 0 && (this.inverse = e.inverse),
            e.maxSpeed !== void 0 && (this.maxSpeed = x(e.maxSpeed)))
        }
    }
    ,
    xn = class extends R {
        constructor() {
            super()
        }
    }
    ,
    Sn = class {
        constructor() {
            this.clamp = !0,
            this.delay = new xn,
            this.enable = !1,
            this.options = {}
        }
        load(e) {
            e && (e.clamp !== void 0 && (this.clamp = e.clamp),
            this.delay.load(e.delay),
            e.enable !== void 0 && (this.enable = e.enable),
            this.generator = e.generator,
            e.options && (this.options = O(this.options, e.options)))
        }
    }
    ,
    Cn = class {
        constructor() {
            this.enable = !1,
            this.length = 10,
            this.fillColor = new L,
            this.fillColor.value = `#000000`
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            this.fillColor = L.create(this.fillColor, e.fillColor),
            e.length !== void 0 && (this.length = e.length))
        }
    }
    ,
    wn = class {
        constructor() {
            this.default = `out`
        }
        load(e) {
            var t, n, r, i;
            e && (e.default !== void 0 && (this.default = e.default),
            this.bottom = (t = e.bottom) ?? e.default,
            this.left = (n = e.left) ?? e.default,
            this.right = (r = e.right) ?? e.default,
            this.top = (i = e.top) ?? e.default)
        }
    }
    ,
    Tn = class {
        constructor() {
            this.acceleration = 0,
            this.enable = !1
        }
        load(e) {
            e && (e.acceleration !== void 0 && (this.acceleration = x(e.acceleration)),
            e.enable !== void 0 && (this.enable = e.enable),
            this.position = e.position ? O({}, e.position) : void 0)
        }
    }
    ,
    En = class {
        constructor() {
            this.angle = new vn,
            this.attract = new yn,
            this.center = {
                x: 50,
                y: 50,
                radius: 0
            },
            this.decay = 0,
            this.distance = {},
            this.direction = `none`,
            this.drift = 0,
            this.enable = !1,
            this.gravity = new bn,
            this.path = new Sn,
            this.outModes = new wn,
            this.random = !1,
            this.size = !1,
            this.speed = 2,
            this.spin = new Tn,
            this.straight = !1,
            this.trail = new Cn,
            this.vibrate = !1,
            this.warp = !1
        }
        get bounce() {
            return this.collisions
        }
        set bounce(e) {
            this.collisions = e
        }
        get collisions() {
            return !1
        }
        set collisions(e) {}
        get noise() {
            return this.path
        }
        set noise(e) {
            this.path = e
        }
        get outMode() {
            return this.outModes.default
        }
        set outMode(e) {
            this.outModes.default = e
        }
        get out_mode() {
            return this.outMode
        }
        set out_mode(e) {
            this.outMode = e
        }
        load(e) {
            var t, n, r;
            if (!e)
                return;
            e.angle !== void 0 && (typeof e.angle == `number` ? this.angle.value = e.angle : this.angle.load(e.angle)),
            this.attract.load(e.attract),
            this.center = O(this.center, e.center),
            e.decay !== void 0 && (this.decay = e.decay),
            e.direction !== void 0 && (this.direction = e.direction),
            e.distance !== void 0 && (this.distance = typeof e.distance == `number` ? {
                horizontal: e.distance,
                vertical: e.distance
            } : O({}, e.distance)),
            e.drift !== void 0 && (this.drift = x(e.drift)),
            e.enable !== void 0 && (this.enable = e.enable),
            this.gravity.load(e.gravity);
            let i = (t = e.outMode) ?? e.out_mode;
            e.outModes === void 0 && i === void 0 || (typeof e.outModes == `string` || e.outModes === void 0 && i !== void 0 ? this.outModes.load({
                default: (n = e.outModes) ?? i
            }) : this.outModes.load(e.outModes)),
            this.path.load((r = e.path) ?? e.noise),
            e.random !== void 0 && (this.random = e.random),
            e.size !== void 0 && (this.size = e.size),
            e.speed !== void 0 && (this.speed = x(e.speed)),
            this.spin.load(e.spin),
            e.straight !== void 0 && (this.straight = e.straight),
            this.trail.load(e.trail),
            e.vibrate !== void 0 && (this.vibrate = e.vibrate),
            e.warp !== void 0 && (this.warp = e.warp)
        }
    }
    ,
    Dn = class {
        constructor() {
            this.count = 0,
            this.enable = !1,
            this.speed = 1,
            this.decay = 0,
            this.sync = !1
        }
        load(e) {
            e && (e.count !== void 0 && (this.count = x(e.count)),
            e.enable !== void 0 && (this.enable = e.enable),
            e.speed !== void 0 && (this.speed = x(e.speed)),
            e.decay !== void 0 && (this.decay = x(e.decay)),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    On = class extends Dn {
        constructor() {
            super(),
            this.destroy = `none`,
            this.enable = !1,
            this.speed = 2,
            this.startValue = `random`,
            this.sync = !1
        }
        get opacity_min() {
            return this.minimumValue
        }
        set opacity_min(e) {
            this.minimumValue = e
        }
        load(e) {
            var t;
            e && (super.load(e),
            e.destroy !== void 0 && (this.destroy = e.destroy),
            e.enable !== void 0 && (this.enable = e.enable),
            this.minimumValue = (t = e.minimumValue) ?? e.opacity_min,
            e.speed !== void 0 && (this.speed = e.speed),
            e.startValue !== void 0 && (this.startValue = e.startValue),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    kn = class extends R {
        constructor() {
            super(),
            this.animation = new On,
            this.random.minimumValue = .1,
            this.value = 1
        }
        get anim() {
            return this.animation
        }
        set anim(e) {
            this.animation = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            super.load(e);
            let n = (t = e.animation) ?? e.anim;
            n !== void 0 && (this.animation.load(n),
            this.value = x(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
        }
    }
    ,
    An = class {
        constructor() {
            this.enable = !1,
            this.area = 800,
            this.factor = 1e3
        }
        get value_area() {
            return this.area
        }
        set value_area(e) {
            this.area = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            e.enable !== void 0 && (this.enable = e.enable);
            let n = (t = e.area) ?? e.value_area;
            n !== void 0 && (this.area = n),
            e.factor !== void 0 && (this.factor = e.factor)
        }
    }
    ,
    jn = class {
        constructor() {
            this.density = new An,
            this.limit = 0,
            this.value = 100
        }
        get max() {
            return this.limit
        }
        set max(e) {
            this.limit = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            this.density.load(e.density);
            let n = (t = e.limit) ?? e.max;
            n !== void 0 && (this.limit = n),
            e.value !== void 0 && (this.value = e.value)
        }
    }
    ,
    Mn = class {
        constructor() {
            this.enable = !1,
            this.speed = 0,
            this.decay = 0,
            this.sync = !1
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.speed !== void 0 && (this.speed = x(e.speed)),
            e.decay !== void 0 && (this.decay = x(e.decay)),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    Nn = class extends R {
        constructor() {
            super(),
            this.animation = new Mn,
            this.direction = `clockwise`,
            this.path = !1,
            this.value = 0
        }
        load(e) {
            e && (super.load(e),
            e.direction !== void 0 && (this.direction = e.direction),
            this.animation.load(e.animation),
            e.path !== void 0 && (this.path = e.path))
        }
    }
    ,
    Pn = class {
        constructor() {
            this.blur = 0,
            this.color = new L,
            this.enable = !1,
            this.offset = {
                x: 0,
                y: 0
            },
            this.color.value = `#000`
        }
        load(e) {
            e && (e.blur !== void 0 && (this.blur = e.blur),
            this.color = L.create(this.color, e.color),
            e.enable !== void 0 && (this.enable = e.enable),
            e.offset !== void 0 && (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
            e.offset.y !== void 0 && (this.offset.y = e.offset.y)))
        }
    }
    ,
    Fn = class {
        constructor() {
            this.options = {},
            this.type = `circle`
        }
        get character() {
            var e;
            return (e = this.options.character) ?? this.options.char
        }
        set character(e) {
            this.options.character = e,
            this.options.char = e
        }
        get custom() {
            return this.options
        }
        set custom(e) {
            this.options = e
        }
        get image() {
            var e;
            return (e = this.options.image) ?? this.options.images
        }
        set image(e) {
            this.options.image = e,
            this.options.images = e
        }
        get images() {
            return this.image
        }
        set images(e) {
            this.image = e
        }
        get polygon() {
            var e;
            return (e = this.options.polygon) ?? this.options.star
        }
        set polygon(e) {
            this.options.polygon = e,
            this.options.star = e
        }
        get stroke() {
            return []
        }
        set stroke(e) {}
        load(e) {
            var t, n, r;
            if (!e)
                return;
            let i = (t = e.options) ?? e.custom;
            if (i !== void 0)
                for (let e in i) {
                    let t = i[e];
                    t && (this.options[e] = O((n = this.options[e]) ?? {}, t))
                }
            this.loadShape(e.character, `character`, `char`, !0),
            this.loadShape(e.polygon, `polygon`, `star`, !1),
            this.loadShape((r = e.image) ?? e.images, `image`, `images`, !0),
            e.type !== void 0 && (this.type = e.type)
        }
        loadShape(e, t, n, r) {
            var i, a;
            if (!e)
                return;
            let o = e instanceof Array ? [] : {}
              , s = e instanceof Array != this.options[t]instanceof Array
              , c = e instanceof Array != this.options[n]instanceof Array;
            s && (this.options[t] = o),
            c && r && (this.options[n] = o),
            this.options[t] = O((i = this.options[t]) ?? o, e),
            this.options[n] && !r || (this.options[n] = O((a = this.options[n]) ?? o, e))
        }
    }
    ,
    In = class extends Dn {
        constructor() {
            super(),
            this.destroy = `none`,
            this.enable = !1,
            this.speed = 5,
            this.startValue = `random`,
            this.sync = !1
        }
        get size_min() {
            return this.minimumValue
        }
        set size_min(e) {
            this.minimumValue = e
        }
        load(e) {
            var t;
            super.load(e),
            e && (e.destroy !== void 0 && (this.destroy = e.destroy),
            e.enable !== void 0 && (this.enable = e.enable),
            this.minimumValue = (t = e.minimumValue) ?? e.size_min,
            e.speed !== void 0 && (this.speed = e.speed),
            e.startValue !== void 0 && (this.startValue = e.startValue),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    Ln = class extends R {
        constructor() {
            super(),
            this.animation = new In,
            this.random.minimumValue = 1,
            this.value = 3
        }
        get anim() {
            return this.animation
        }
        set anim(e) {
            this.animation = e
        }
        load(e) {
            var t;
            if (super.load(e),
            !e)
                return;
            let n = (t = e.animation) ?? e.anim;
            n !== void 0 && (this.animation.load(n),
            this.value = x(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
        }
    }
    ,
    Rn = class {
        constructor() {
            this.width = 0
        }
        load(e) {
            e && (e.color !== void 0 && (this.color = cn.create(this.color, e.color)),
            e.width !== void 0 && (this.width = e.width),
            e.opacity !== void 0 && (this.opacity = e.opacity))
        }
    }
    ,
    zn = class extends R {
        constructor() {
            super(),
            this.opacityRate = 1,
            this.sizeRate = 1,
            this.velocityRate = 1
        }
        load(e) {
            super.load(e),
            e && (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate),
            e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate),
            e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate))
        }
    }
    ,
    Bn = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Vn = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Wn = class {
        constructor(e, t) {
            Hn.set(this, void 0),
            Un.set(this, void 0),
            Bn(this, Un, e, `f`),
            Bn(this, Hn, t, `f`),
            this.bounce = new fn,
            this.collisions = new pn,
            this.color = new cn,
            this.color.value = `#fff`,
            this.destroy = new _n,
            this.groups = {},
            this.move = new En,
            this.number = new jn,
            this.opacity = new kn,
            this.reduceDuplicates = !1,
            this.rotate = new Nn,
            this.shadow = new Pn,
            this.shape = new Fn,
            this.size = new Ln,
            this.stroke = new Rn,
            this.zIndex = new zn
        }
        load(e) {
            var t, n, r, i, a, o;
            if (!e)
                return;
            if (this.bounce.load(e.bounce),
            this.color.load(cn.create(this.color, e.color)),
            this.destroy.load(e.destroy),
            e.groups !== void 0)
                for (let n in e.groups) {
                    let r = e.groups[n];
                    r !== void 0 && (this.groups[n] = O((t = this.groups[n]) ?? {}, r))
                }
            this.move.load(e.move),
            this.number.load(e.number),
            this.opacity.load(e.opacity),
            e.reduceDuplicates !== void 0 && (this.reduceDuplicates = e.reduceDuplicates),
            this.rotate.load(e.rotate),
            this.shape.load(e.shape),
            this.size.load(e.size),
            this.shadow.load(e.shadow),
            this.zIndex.load(e.zIndex);
            let s = (r = (n = e.move)?.collisions) ?? (i = e.move)?.bounce;
            s !== void 0 && (this.collisions.enable = s),
            this.collisions.load(e.collisions),
            e.interactivity !== void 0 && (this.interactivity = O({}, e.interactivity));
            let c = (a = e.stroke) ?? (o = e.shape)?.stroke;
            if (c && (c instanceof Array ? this.stroke = c.map(e => {
                let t = new Rn;
                return t.load(e),
                t
            }
            ) : (this.stroke instanceof Array && (this.stroke = new Rn),
            this.stroke.load(c))),
            Vn(this, Hn, `f`)) {
                let t = Vn(this, Un, `f`).plugins.updaters.get(Vn(this, Hn, `f`));
                if (t)
                    for (let n of t)
                        n.loadOptions && n.loadOptions(this, e);
                let n = Vn(this, Un, `f`).plugins.interactors.get(Vn(this, Hn, `f`));
                if (n)
                    for (let t of n)
                        t.loadParticlesOptions && t.loadParticlesOptions(this, e)
            }
        }
    }
    ,
    Hn = new WeakMap,
    Un = new WeakMap,
    Gn = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    z = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Xn = class {
        constructor(e, t) {
            Kn.add(this),
            qn.set(this, void 0),
            Jn.set(this, void 0),
            Gn(this, Jn, e, `f`),
            Gn(this, qn, t, `f`),
            this.autoPlay = !0,
            this.background = new Pt,
            this.backgroundMask = new It,
            this.fullScreen = new Lt,
            this.detectRetina = !0,
            this.duration = 0,
            this.fpsLimit = 120,
            this.interactivity = new Qt(e,t),
            this.manualParticles = [],
            this.motion = new tn,
            this.particles = tt(z(this, Jn, `f`), z(this, qn, `f`)),
            this.pauseOnBlur = !0,
            this.pauseOnOutsideViewport = !0,
            this.responsive = [],
            this.style = {},
            this.themes = [],
            this.zLayers = 100
        }
        get backgroundMode() {
            return this.fullScreen
        }
        set backgroundMode(e) {
            this.fullScreen.load(e)
        }
        get fps_limit() {
            return this.fpsLimit
        }
        set fps_limit(e) {
            this.fpsLimit = e
        }
        get retina_detect() {
            return this.detectRetina
        }
        set retina_detect(e) {
            this.detectRetina = e
        }
        load(e) {
            var t, n, r, i, a;
            if (!e)
                return;
            if (e.preset !== void 0)
                if (e.preset instanceof Array)
                    for (let t of e.preset)
                        this.importPreset(t);
                else
                    this.importPreset(e.preset);
            e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay);
            let o = (t = e.detectRetina) ?? e.retina_detect;
            o !== void 0 && (this.detectRetina = o),
            e.duration !== void 0 && (this.duration = e.duration);
            let s = (n = e.fpsLimit) ?? e.fps_limit;
            s !== void 0 && (this.fpsLimit = s),
            e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur),
            e.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
            e.zLayers !== void 0 && (this.zLayers = e.zLayers),
            this.background.load(e.background);
            let c = (r = e.fullScreen) ?? e.backgroundMode;
            typeof c == `boolean` ? this.fullScreen.enable = c : this.fullScreen.load(c),
            this.backgroundMask.load(e.backgroundMask),
            this.interactivity.load(e.interactivity),
            e.manualParticles !== void 0 && (this.manualParticles = e.manualParticles.map(e => {
                let t = new $t;
                return t.load(e),
                t
            }
            )),
            this.motion.load(e.motion),
            this.particles.load(e.particles),
            this.style = O(this.style, e.style),
            z(this, Jn, `f`).plugins.loadOptions(this, e);
            let l = z(this, Jn, `f`).plugins.interactors.get(z(this, qn, `f`));
            if (l)
                for (let t of l)
                    t.loadOptions && t.loadOptions(this, e);
            if (e.responsive !== void 0)
                for (let t of e.responsive) {
                    let e = new nn;
                    e.load(t),
                    this.responsive.push(e)
                }
            if (this.responsive.sort( (e, t) => e.maxWidth - t.maxWidth),
            e.themes !== void 0)
                for (let t of e.themes) {
                    let e = new an;
                    e.load(t),
                    this.themes.push(e)
                }
            this.defaultDarkTheme = (i = z(this, Kn, `m`, Yn).call(this, `dark`))?.name,
            this.defaultLightTheme = (a = z(this, Kn, `m`, Yn).call(this, `light`))?.name
        }
        setResponsive(e, t, n) {
            this.load(n);
            let r = this.responsive.find(n => n.mode === `screen` && screen ? n.maxWidth > screen.availWidth : n.maxWidth * t > e);
            return this.load(r?.options),
            r?.maxWidth
        }
        setTheme(e) {
            if (e) {
                let t = this.themes.find(t => t.name === e);
                t && this.load(t.options)
            } else {
                let e = typeof matchMedia < `u` && matchMedia(`(prefers-color-scheme: dark)`)
                  , t = e && e.matches
                  , n = z(this, Kn, `m`, Yn).call(this, t ? `dark` : `light`);
                n && this.load(n.options)
            }
        }
        importPreset(e) {
            this.load(z(this, Jn, `f`).plugins.getPreset(e))
        }
    }
    ,
    qn = new WeakMap,
    Jn = new WeakMap,
    Kn = new WeakSet,
    Yn = function(e) {
        var t;
        return (t = this.themes.find(t => t.default.value && t.default.mode === e)) ?? this.themes.find(e => e.default.value && e.default.mode === `any`)
    }
    ,
    Zn = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Qn = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    tr = class {
        constructor(e, t) {
            this.container = t,
            $n.set(this, void 0),
            er.set(this, void 0),
            Zn(this, $n, e, `f`),
            Zn(this, er, Qn(this, $n, `f`).plugins.getInteractors(this.container, !0), `f`),
            this.externalInteractors = [],
            this.particleInteractors = []
        }
        async externalInteract(e) {
            for (let t of this.externalInteractors)
                t.isEnabled() && await t.interact(e)
        }
        handleClickMode(e) {
            for (let t of this.externalInteractors)
                t.handleClickMode && t.handleClickMode(e)
        }
        init() {
            this.externalInteractors = [],
            this.particleInteractors = [];
            for (let e of Qn(this, er, `f`)) {
                switch (e.type) {
                case 0:
                    this.externalInteractors.push(e);
                    break;
                case 1:
                    this.particleInteractors.push(e);
                    break
                }
                e.init()
            }
        }
        async particlesInteract(e, t) {
            for (let t of this.externalInteractors)
                t.clear(e);
            for (let n of this.particleInteractors)
                n.isEnabled(e) && await n.interact(e, t)
        }
        async reset(e) {
            for (let t of this.externalInteractors)
                t.isEnabled() && await t.reset(e);
            for (let t of this.particleInteractors)
                t.isEnabled(e) && await t.reset(e)
        }
    }
    ,
    $n = new WeakMap,
    er = new WeakMap,
    nr = class e extends P {
        constructor(e, t, n) {
            if (super(e, t),
            typeof e != `number` && e)
                this.z = e.z;
            else {
                if (n === void 0)
                    throw Error(`tsParticles - Vector not initialized correctly`);
                this.z = n
            }
        }
        static get origin() {
            return e.create(0, 0, 0)
        }
        static clone(t) {
            return e.create(t.x, t.y, t.z)
        }
        static create(t, n, r) {
            return new e(t,n,r)
        }
        add(t) {
            return t instanceof e ? e.create(this.x + t.x, this.y + t.y, this.z + t.z) : super.add(t)
        }
        addTo(t) {
            super.addTo(t),
            t instanceof e && (this.z += t.z)
        }
        copy() {
            return e.clone(this)
        }
        div(t) {
            return e.create(this.x / t, this.y / t, this.z / t)
        }
        divTo(e) {
            super.divTo(e),
            this.z /= e
        }
        mult(t) {
            return e.create(this.x * t, this.y * t, this.z * t)
        }
        multTo(e) {
            super.multTo(e),
            this.z *= e
        }
        setTo(e) {
            super.setTo(e);
            let t = e;
            t.z !== void 0 && (this.z = t.z)
        }
        sub(t) {
            return t instanceof e ? e.create(this.x - t.x, this.y - t.y, this.z - t.z) : super.sub(t)
        }
        subFrom(t) {
            super.subFrom(t),
            t instanceof e && (this.z -= t.z)
        }
    }
    ,
    rr = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    ir = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    or = e => {
        (E(e.outMode, e.checkModes) || E(e.outMode, e.checkModes)) && (e.coord > e.maxCoord - 2 * e.radius ? e.setCb(-e.radius) : e.coord < 2 * e.radius && e.setCb(e.radius))
    }
    ,
    sr = class {
        constructor(e, t, n, r, i, a) {
            var o, s, c, l, u, d, f, p, g;
            this.id = t,
            this.container = n,
            this.group = a,
            ar.set(this, void 0),
            rr(this, ar, e, `f`),
            this.fill = !0,
            this.close = !0,
            this.lastPathTime = 0,
            this.destroyed = !1,
            this.unbreakable = !1,
            this.splitCount = 0,
            this.rotation = 0,
            this.misplaced = !1,
            this.retina = {
                maxDistance: {}
            },
            this.outType = `normal`,
            this.ignoresResizeRatio = !0;
            let x = n.retina.pixelRatio
              , C = n.actualOptions
              , w = tt(ir(this, ar, `f`), n, C.particles)
              , te = w.shape.type
              , ne = w.reduceDuplicates;
            if (this.shape = te instanceof Array ? D(te, this.id, ne) : te,
            i?.shape) {
                if (i.shape.type) {
                    let e = i.shape.type;
                    this.shape = e instanceof Array ? D(e, this.id, ne) : e
                }
                let e = new Fn;
                e.load(i.shape),
                this.shape && (this.shapeData = this.loadShapeData(e, ne))
            } else
                this.shapeData = this.loadShapeData(w.shape, ne);
            w.load(i),
            w.load((o = this.shapeData)?.particles),
            this.interactivity = new Qt(e,n),
            this.interactivity.load(n.actualOptions.interactivity),
            this.interactivity.load(w.interactivity),
            this.fill = (c = (s = this.shapeData)?.fill) ?? this.fill,
            this.close = (u = (l = this.shapeData)?.close) ?? this.close,
            this.options = w;
            let re = this.options.move.path;
            this.pathDelay = 1e3 * S(re.delay),
            re.generator && (this.pathGenerator = ir(this, ar, `f`).plugins.getPathGenerator(re.generator),
            this.pathGenerator && n.addPath(re.generator, this.pathGenerator) && this.pathGenerator.init(n));
            let ie = v(this.options.zIndex.value);
            n.retina.initParticle(this);
            let ae = this.options.size
              , oe = ae.value
              , se = ae.animation;
            if (this.size = {
                enable: ae.animation.enable,
                value: v(ae.value) * n.retina.pixelRatio,
                max: b(oe) * x,
                min: y(oe) * x,
                loops: 0,
                maxLoops: v(ae.animation.count)
            },
            se.enable) {
                switch (this.size.status = 0,
                this.size.decay = 1 - v(se.decay),
                se.startValue) {
                case `min`:
                    this.size.value = this.size.min,
                    this.size.status = 0;
                    break;
                case `random`:
                    this.size.value = _(this.size) * x,
                    this.size.status = m() >= .5 ? 0 : 1;
                    break;
                case `max`:
                default:
                    this.size.value = this.size.max,
                    this.size.status = 1;
                    break
                }
                this.size.velocity = ((d = this.retina.sizeAnimationSpeed) ?? n.retina.sizeAnimationSpeed) / 100 * n.retina.reduceFactor,
                se.sync || (this.size.velocity *= m())
            }
            this.bubble = {
                inRange: !1
            },
            this.position = this.calcPosition(n, r, h(ie, 0, n.zLayers)),
            this.initialPosition = this.position.copy();
            let ce = n.canvas.size
              , le = this.options.move.center;
            switch (this.moveCenter = {
                x: ce.width * le.x / 100,
                y: ce.height * le.y / 100,
                radius: this.options.move.center.radius
            },
            this.direction = ee(this.options.move.direction, this.position, this.moveCenter),
            this.options.move.direction) {
            case `inside`:
                this.outType = `inside`;
                break;
            case `outside`:
                this.outType = `outside`;
                break
            }
            this.initialVelocity = this.calculateVelocity(),
            this.velocity = this.initialVelocity.copy(),
            this.moveDecay = 1 - v(this.options.move.decay),
            this.offset = P.origin;
            let ue = n.particles;
            ue.needsSort = ue.needsSort || ue.lastZIndex < this.position.z,
            ue.lastZIndex = this.position.z,
            this.zIndexFactor = this.position.z / n.zLayers,
            this.sides = 24;
            let T = n.drawers.get(this.shape);
            T || (T = ir(this, ar, `f`).plugins.getShapeDrawer(this.shape),
            T && n.drawers.set(this.shape, T)),
            T != null && T.loadShape && T?.loadShape(this);
            let de = T?.getSidesCount;
            de && (this.sides = de(this)),
            this.spawning = !1,
            this.shadowColor = k(this.options.shadow.color);
            for (let e of n.particles.updaters)
                (f = e.init) == null || f.call(e, this);
            for (let e of n.particles.movers)
                (p = e.init) == null || p.call(e, this);
            T != null && T.particleInit && T.particleInit(n, this);
            for (let[,e] of n.plugins)
                (g = e.particleCreated) == null || g.call(e, this)
        }
        destroy(e) {
            if (this.unbreakable || this.destroyed)
                return;
            this.destroyed = !0,
            this.bubble.inRange = !1;
            for (let[,t] of this.container.plugins)
                t.particleDestroyed && t.particleDestroyed(this, e);
            if (e)
                return;
            let t = this.options.destroy;
            t.mode === `split` && this.split()
        }
        draw(e) {
            let t = this.container;
            for (let[,n] of t.plugins)
                t.canvas.drawParticlePlugin(n, this, e);
            t.canvas.drawParticle(this, e)
        }
        getFillColor() {
            var e, t;
            let n = (e = this.bubble.color) ?? Be(this.color);
            if (n && this.roll && (this.backColor || this.roll.alter)) {
                let e = this.roll.horizontal && this.roll.vertical ? 2 : 1
                  , r = this.roll.horizontal ? Math.PI / 2 : 0
                  , i = Math.floor((((t = this.roll.angle) ?? 0) + r) / (Math.PI / e)) % 2;
                if (i) {
                    if (this.backColor)
                        return this.backColor;
                    if (this.roll.alter)
                        return Qe(n, this.roll.alter.type, this.roll.alter.value)
                }
            }
            return n
        }
        getMass() {
            return this.getRadius() ** 2 * Math.PI / 2
        }
        getPosition() {
            return {
                x: this.position.x + this.offset.x,
                y: this.position.y + this.offset.y,
                z: this.position.z
            }
        }
        getRadius() {
            var e;
            return (e = this.bubble.radius) ?? this.size.value
        }
        getStrokeColor() {
            var e, t;
            return (t = (e = this.bubble.color) ?? Be(this.strokeColor)) ?? this.getFillColor()
        }
        isInsideCanvas() {
            let e = this.getRadius()
              , t = this.container.canvas.size;
            return this.position.x >= -e && this.position.y >= -e && this.position.y <= t.height + e && this.position.x <= t.width + e
        }
        isVisible() {
            return !this.destroyed && !this.spawning && this.isInsideCanvas()
        }
        reset() {
            this.opacity && (this.opacity.loops = 0),
            this.size.loops = 0
        }
        calcPosition(e, t, n, r=0) {
            var i, a, o, s;
            for (let[,r] of e.plugins) {
                let e = r.particlePosition === void 0 ? void 0 : r.particlePosition(t, this);
                if (e !== void 0)
                    return nr.create(e.x, e.y, n)
            }
            let c = e.canvas.size
              , l = se({
                size: c,
                position: t
            })
              , u = nr.create(l.x, l.y, n)
              , d = this.getRadius()
              , f = this.options.move.outModes
              , p = t => {
                or({
                    outMode: t,
                    checkModes: [`bounce`, `bounce-horizontal`],
                    coord: u.x,
                    maxCoord: e.canvas.size.width,
                    setCb: e => u.x += e,
                    radius: d
                })
            }
              , m = t => {
                or({
                    outMode: t,
                    checkModes: [`bounce`, `bounce-vertical`],
                    coord: u.y,
                    maxCoord: e.canvas.size.height,
                    setCb: e => u.y += e,
                    radius: d
                })
            }
            ;
            return p((i = f.left) ?? f.default),
            p((a = f.right) ?? f.default),
            m((o = f.top) ?? f.default),
            m((s = f.bottom) ?? f.default),
            this.checkOverlap(u, r) ? this.calcPosition(e, void 0, n, r + 1) : u
        }
        calculateVelocity() {
            let e = te(this.direction)
              , t = e.copy()
              , n = this.options.move;
            if (n.direction === `inside` || n.direction === `outside`)
                return t;
            let r = Math.PI / 180 * v(n.angle.value)
              , i = Math.PI / 180 * v(n.angle.offset)
              , a = {
                left: i - r / 2,
                right: i + r / 2
            };
            return n.straight || (t.angle += _(x(a.left, a.right))),
            n.random && typeof n.speed == `number` && (t.length *= m()),
            t
        }
        checkOverlap(e, t=0) {
            let n = this.options.collisions
              , r = this.getRadius();
            if (!n.enable)
                return !1;
            let i = n.overlap;
            if (i.enable)
                return !1;
            let a = i.retries;
            if (a >= 0 && t > a)
                throw Error(`Particle is overlapping and can't be placed`);
            let o = !1;
            for (let t of this.container.particles.array)
                if (w(e, t.position) < r + t.getRadius()) {
                    o = !0;
                    break
                }
            return o
        }
        loadShapeData(e, t) {
            let n = e.options[this.shape];
            if (n)
                return O({}, n instanceof Array ? D(n, this.id, t) : n)
        }
        split() {
            let e = this.options.destroy.split;
            if (e.count >= 0 && this.splitCount++ > e.count)
                return;
            let t = S(e.rate)
              , n = e.particles instanceof Array ? D(e.particles) : e.particles;
            for (let e = 0; e < t; e++)
                this.container.particles.addSplitParticle(this, n)
        }
    }
    ,
    ar = new WeakMap,
    cr = class {
        constructor(e, t) {
            this.position = e,
            this.particle = t
        }
    }
    ,
    lr = class {
        constructor(e, t) {
            this.position = {
                x: e,
                y: t
            }
        }
    }
    ,
    B = class extends lr {
        constructor(e, t, n) {
            super(e, t),
            this.radius = n
        }
        contains(e) {
            return w(e, this.position) <= this.radius
        }
        intersects(e) {
            let t = e
              , n = e
              , r = this.position
              , i = e.position
              , a = Math.abs(i.x - r.x)
              , o = Math.abs(i.y - r.y)
              , s = this.radius;
            if (n.radius !== void 0) {
                let e = s + n.radius
                  , t = Math.sqrt(a * a + o + o);
                return e > t
            }
            if (t.size !== void 0) {
                let e = t.size.width
                  , n = t.size.height
                  , r = (a - e) ** 2 + (o - n) ** 2;
                return !(a > s + e || o > s + n) && (a <= e || o <= n || r <= s * s)
            }
            return !1
        }
    }
    ,
    V = class extends lr {
        constructor(e, t, n, r) {
            super(e, t),
            this.size = {
                height: r,
                width: n
            }
        }
        contains(e) {
            let t = this.size.width
              , n = this.size.height
              , r = this.position;
            return e.x >= r.x && e.x <= r.x + t && e.y >= r.y && e.y <= r.y + n
        }
        intersects(e) {
            let t = e
              , n = e
              , r = this.size.width
              , i = this.size.height
              , a = this.position
              , o = e.position;
            if (n.radius !== void 0)
                return n.intersects(this);
            if (!t.size)
                return !1;
            let s = t.size
              , c = s.width
              , l = s.height;
            return o.x < a.x + r && o.x + c > a.x && o.y < a.y + i && o.y + l > a.y
        }
    }
    ,
    ur = class extends B {
        constructor(e, t, n, r) {
            super(e, t, n),
            this.canvasSize = r,
            this.canvasSize = Object.assign({}, r)
        }
        contains(e) {
            if (super.contains(e))
                return !0;
            let t = {
                x: e.x - this.canvasSize.width,
                y: e.y
            };
            if (super.contains(t))
                return !0;
            let n = {
                x: e.x - this.canvasSize.width,
                y: e.y - this.canvasSize.height
            };
            if (super.contains(n))
                return !0;
            let r = {
                x: e.x,
                y: e.y - this.canvasSize.height
            };
            return super.contains(r)
        }
        intersects(e) {
            if (super.intersects(e))
                return !0;
            let t = e
              , n = e
              , r = {
                x: e.position.x - this.canvasSize.width,
                y: e.position.y - this.canvasSize.height
            };
            if (n.radius !== void 0) {
                let e = new B(r.x,r.y,2 * n.radius);
                return super.intersects(e)
            }
            if (t.size !== void 0) {
                let e = new V(r.x,r.y,2 * t.size.width,2 * t.size.height);
                return super.intersects(e)
            }
            return !1
        }
    }
    ,
    dr = class e {
        constructor(e, t) {
            this.rectangle = e,
            this.capacity = t,
            this.points = [],
            this.divided = !1
        }
        insert(e) {
            var t, n, r, i, a;
            return this.rectangle.contains(e.position) ? this.points.length < this.capacity ? (this.points.push(e),
            !0) : (this.divided || this.subdivide(),
            (a = (t = this.northEast)?.insert(e) || (n = this.northWest)?.insert(e) || (r = this.southEast)?.insert(e) || (i = this.southWest)?.insert(e)) != null && a) : !1
        }
        query(e, t, n) {
            var r, i, a, o;
            let s = n ?? [];
            if (!e.intersects(this.rectangle))
                return [];
            for (let n of this.points)
                !e.contains(n.position) && w(e.position, n.position) > n.particle.getRadius() && (!t || t(n.particle)) || s.push(n.particle);
            return this.divided && ((r = this.northEast) == null || r.query(e, t, s),
            (i = this.northWest) == null || i.query(e, t, s),
            (a = this.southEast) == null || a.query(e, t, s),
            (o = this.southWest) == null || o.query(e, t, s)),
            s
        }
        queryCircle(e, t, n) {
            return this.query(new B(e.x,e.y,t), n)
        }
        queryCircleWarp(e, t, n, r) {
            let i = n
              , a = n;
            return this.query(new ur(e.x,e.y,t,i.canvas === void 0 ? a : i.canvas.size), r)
        }
        queryRectangle(e, t, n) {
            return this.query(new V(e.x,e.y,t.width,t.height), n)
        }
        subdivide() {
            let t = this.rectangle.position.x
              , n = this.rectangle.position.y
              , r = this.rectangle.size.width
              , i = this.rectangle.size.height
              , a = this.capacity;
            this.northEast = new e(new V(t,n,r / 2,i / 2),a),
            this.northWest = new e(new V(t + r / 2,n,r / 2,i / 2),a),
            this.southEast = new e(new V(t,n + i / 2,r / 2,i / 2),a),
            this.southWest = new e(new V(t + r / 2,n + i / 2,r / 2,i / 2),a),
            this.divided = !0
        }
    }
    ,
    fr = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    pr = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    mr = class {
        constructor(e, t) {
            this.container = t,
            H.set(this, void 0),
            fr(this, H, e, `f`),
            this.nextId = 0,
            this.array = [],
            this.zArray = [],
            this.limit = 0,
            this.needsSort = !1,
            this.lastZIndex = 0,
            this.freqs = {
                links: new Map,
                triangles: new Map
            },
            this.interactionManager = new tr(pr(this, H, `f`),t);
            let n = this.container.canvas.size;
            this.quadTree = new dr(new V(-n.width / 4,-n.height / 4,3 * n.width / 2,3 * n.height / 2),4),
            this.movers = pr(this, H, `f`).plugins.getMovers(t, !0),
            this.updaters = pr(this, H, `f`).plugins.getUpdaters(t, !0)
        }
        get count() {
            return this.array.length
        }
        addManualParticles() {
            let e = this.container
              , t = e.actualOptions;
            for (let n of t.manualParticles)
                this.addParticle(ie({
                    size: e.canvas.size,
                    position: n.position
                }), n.options)
        }
        addParticle(e, t, n) {
            let r = this.container
              , i = r.actualOptions
              , a = i.particles.number.limit;
            if (a > 0) {
                let e = this.count + 1 - a;
                e > 0 && this.removeQuantity(e)
            }
            return this.pushParticle(e, t, n)
        }
        addSplitParticle(e, t) {
            let n = e.options.destroy.split
              , r = tt(pr(this, H, `f`), this.container, e.options)
              , i = S(n.factor);
            r.color.load({
                value: {
                    hsl: e.getFillColor()
                }
            }),
            typeof r.size.value == `number` ? r.size.value /= i : (r.size.value.min /= i,
            r.size.value.max /= i),
            r.load(t);
            let a = n.sizeOffset ? x(-e.size.value, e.size.value) : 0
              , o = {
                x: e.position.x + _(a),
                y: e.position.y + _(a)
            };
            return this.pushParticle(o, r, e.group, t => t.size.value < .5 ? !1 : (t.velocity.length = _(x(e.velocity.length, t.velocity.length)),
            t.splitCount = e.splitCount + 1,
            t.unbreakable = !0,
            setTimeout( () => {
                t.unbreakable = !1
            }
            , 500),
            !0))
        }
        clear() {
            this.array = [],
            this.zArray = []
        }
        destroy() {
            this.array = [],
            this.zArray = [],
            this.movers = [],
            this.updaters = []
        }
        async draw(e) {
            let t = this.container
              , n = this.container.canvas.size;
            this.quadTree = new dr(new V(-n.width / 4,-n.height / 4,3 * n.width / 2,3 * n.height / 2),4),
            t.canvas.clear(),
            await this.update(e),
            this.needsSort && (this.zArray.sort( (e, t) => t.position.z - e.position.z || e.id - t.id),
            this.lastZIndex = this.zArray[this.zArray.length - 1].position.z,
            this.needsSort = !1);
            for (let[,n] of t.plugins)
                t.canvas.drawPlugin(n, e);
            for (let t of this.zArray)
                t.draw(e)
        }
        getLinkFrequency(e, t) {
            let n = x(e.id, t.id)
              , r = `${y(n)}_${b(n)}`
              , i = this.freqs.links.get(r);
            return i === void 0 && (i = m(),
            this.freqs.links.set(r, i)),
            i
        }
        getTriangleFrequency(e, t, n) {
            let[r,i,a] = [e.id, t.id, n.id];
            r > i && ([i,r] = [r, i]),
            i > a && ([a,i] = [i, a]),
            r > a && ([a,r] = [r, a]);
            let o = `${r}_${i}_${a}`
              , s = this.freqs.triangles.get(o);
            return s === void 0 && (s = m(),
            this.freqs.triangles.set(o, s)),
            s
        }
        handleClickMode(e) {
            this.interactionManager.handleClickMode(e)
        }
        init() {
            var e;
            let t = this.container
              , n = t.actualOptions;
            this.lastZIndex = 0,
            this.needsSort = !1,
            this.freqs.links = new Map,
            this.freqs.triangles = new Map;
            let r = !1;
            this.updaters = pr(this, H, `f`).plugins.getUpdaters(t, !0),
            this.interactionManager.init();
            for (let[,e] of t.plugins)
                if (e.particlesInitialization !== void 0 && (r = e.particlesInitialization()),
                r)
                    break;
            this.interactionManager.init();
            for (let[,e] of t.pathGenerators)
                e.init(t);
            if (this.addManualParticles(),
            !r) {
                for (let t in n.particles.groups) {
                    let r = n.particles.groups[t];
                    for (let i = this.count, a = 0; a < (e = r.number)?.value && i < n.particles.number.value; i++,
                    a++)
                        this.addParticle(void 0, r, t)
                }
                for (let e = this.count; e < n.particles.number.value; e++)
                    this.addParticle()
            }
        }
        push(e, t, n, r) {
            this.pushing = !0;
            for (let i = 0; i < e; i++)
                this.addParticle(t?.position, n, r);
            this.pushing = !1
        }
        async redraw() {
            this.clear(),
            this.init(),
            await this.draw({
                value: 0,
                factor: 0
            })
        }
        remove(e, t, n) {
            this.removeAt(this.array.indexOf(e), void 0, t, n)
        }
        removeAt(e, t=1, n, r) {
            if (!(e >= 0 && e <= this.count))
                return;
            let i = 0;
            for (let a = e; i < t && a < this.count; a++) {
                let e = this.array[a];
                if (!e || e.group !== n)
                    continue;
                e.destroy(r),
                this.array.splice(a--, 1);
                let t = this.zArray.indexOf(e);
                this.zArray.splice(t, 1),
                i++,
                pr(this, H, `f`).dispatchEvent(`particleRemoved`, {
                    container: this.container,
                    data: {
                        particle: e
                    }
                })
            }
        }
        removeQuantity(e, t) {
            this.removeAt(0, e, t)
        }
        setDensity() {
            let e = this.container.actualOptions;
            for (let t in e.particles.groups)
                this.applyDensity(e.particles.groups[t], 0, t);
            this.applyDensity(e.particles, e.manualParticles.length)
        }
        async update(e) {
            var t, n;
            let r = this.container
              , i = [];
            for (let[,e] of r.pathGenerators)
                e.update();
            for (let[,n] of r.plugins)
                (t = n.update) == null || t.call(n, e);
            for (let t of this.array) {
                let a = r.canvas.resizeFactor;
                a && !t.ignoresResizeRatio && (t.position.x *= a.width,
                t.position.y *= a.height),
                t.ignoresResizeRatio = !1,
                await this.interactionManager.reset(t);
                for (let[,r] of this.container.plugins) {
                    if (t.destroyed)
                        break;
                    (n = r.particleUpdate) == null || n.call(r, t, e)
                }
                for (let n of this.movers)
                    n.isEnabled(t) && n.move(t, e);
                t.destroyed ? i.push(t) : this.quadTree.insert(new cr(t.getPosition(),t))
            }
            for (let e of i)
                this.remove(e);
            await this.interactionManager.externalInteract(e);
            for (let t of r.particles.array) {
                for (let n of this.updaters)
                    n.update(t, e);
                t.destroyed || t.spawning || await this.interactionManager.particlesInteract(t, e)
            }
            delete r.canvas.resizeFactor
        }
        applyDensity(e, t, n) {
            var r;
            if (!(r = e.number.density)?.enable)
                return;
            let i = e.number
              , a = this.initDensityFactor(i.density)
              , o = i.value
              , s = i.limit > 0 ? i.limit : o
              , c = Math.min(o, s) * a + t
              , l = Math.min(this.count, this.array.filter(e => e.group === n).length);
            this.limit = i.limit * a,
            l < c ? this.push(Math.abs(c - l), void 0, e, n) : l > c && this.removeQuantity(l - c, n)
        }
        initDensityFactor(e) {
            let t = this.container;
            if (!t.canvas.element || !e.enable)
                return 1;
            let n = t.canvas.element
              , r = t.retina.pixelRatio;
            return n.width * n.height / (e.factor * r ** 2 * e.area)
        }
        pushParticle(e, t, n, r) {
            try {
                let i = new sr(pr(this, H, `f`),this.nextId,this.container,e,t,n)
                  , a = !0;
                return r && (a = r(i)),
                a ? (this.array.push(i),
                this.zArray.push(i),
                this.nextId++,
                pr(this, H, `f`).dispatchEvent(`particleAdded`, {
                    container: this.container,
                    data: {
                        particle: i
                    }
                }),
                i) : void 0
            } catch (e) {
                console.warn(`error adding particle: ${e}`);
                return
            }
        }
    }
    ,
    H = new WeakMap,
    hr = class {
        constructor(e) {
            this.container = e
        }
        init() {
            let e = this.container
              , t = e.actualOptions;
            this.pixelRatio = !t.detectRetina || T() ? 1 : c.devicePixelRatio;
            let n = this.container.actualOptions.motion;
            if (n && (n.disable || n.reduce.value))
                if (T() || typeof matchMedia > `u` || !matchMedia)
                    this.reduceFactor = 1;
                else {
                    let t = matchMedia(`(prefers-reduced-motion: reduce)`);
                    if (t) {
                        this.handleMotionChange(t);
                        let n = () => {
                            this.handleMotionChange(t),
                            e.refresh().catch( () => {}
                            )
                        }
                        ;
                        t.addEventListener === void 0 ? t.addListener !== void 0 && t.addListener(n) : t.addEventListener(`change`, n)
                    }
                }
            else
                this.reduceFactor = 1;
            let r = this.pixelRatio;
            if (e.canvas.element) {
                let t = e.canvas.element;
                e.canvas.size.width = t.offsetWidth * r,
                e.canvas.size.height = t.offsetHeight * r
            }
            let i = t.particles;
            this.attractDistance = v(i.move.attract.distance) * r,
            this.sizeAnimationSpeed = v(i.size.animation.speed) * r,
            this.maxSpeed = v(i.move.gravity.maxSpeed) * r;
            let a = t.interactivity.modes;
            this.slowModeRadius = a.slow.radius * r
        }
        initParticle(e) {
            let t = e.options
              , n = this.pixelRatio
              , r = t.move.distance
              , i = e.retina;
            i.attractDistance = v(t.move.attract.distance) * n,
            i.moveDrift = v(t.move.drift) * n,
            i.moveSpeed = v(t.move.speed) * n,
            i.sizeAnimationSpeed = v(t.size.animation.speed) * n;
            let a = i.maxDistance;
            a.horizontal = r.horizontal === void 0 ? void 0 : r.horizontal * n,
            a.vertical = r.vertical === void 0 ? void 0 : r.vertical * n,
            i.maxSpeed = v(t.move.gravity.maxSpeed) * n
        }
        handleMotionChange(e) {
            let t = this.container.actualOptions;
            if (e.matches) {
                let e = t.motion;
                this.reduceFactor = e.disable ? 0 : e.reduce.value ? 1 / e.reduce.factor : 1
            } else
                this.reduceFactor = 1
        }
    }
    ,
    gr = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    U = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    xr = `default`,
    Sr = {
        generate: e => {
            let t = e.velocity.copy();
            return t.angle += t.length * Math.PI / 180,
            t
        }
        ,
        init: () => {}
        ,
        update: () => {}
    },
    Cr = class {
        constructor(e, t, n) {
            this.id = t,
            W.set(this, void 0),
            _r.set(this, void 0),
            vr.set(this, void 0),
            yr.set(this, void 0),
            br.set(this, void 0),
            gr(this, W, e, `f`),
            this.fpsLimit = 120,
            this.duration = 0,
            this.lifeTime = 0,
            this.firstStart = !0,
            this.started = !1,
            this.destroyed = !1,
            this.paused = !0,
            this.lastFrameTime = 0,
            this.zLayers = 100,
            this.pageHidden = !1,
            gr(this, br, n, `f`),
            this._initialSourceOptions = n,
            this.retina = new hr(this),
            this.canvas = new jt(this),
            this.particles = new mr(U(this, W, `f`),this),
            this.frameManager = new Nt(this),
            this.pathGenerators = new Map,
            this.interactivity = {
                mouse: {
                    clicking: !1,
                    inside: !1
                }
            },
            this.plugins = new Map,
            this.drawers = new Map,
            gr(this, yr, nt(U(this, W, `f`), this), `f`),
            this.actualOptions = nt(U(this, W, `f`), this),
            gr(this, _r, new Mt(this), `f`),
            typeof IntersectionObserver < `u` && IntersectionObserver && gr(this, vr, new IntersectionObserver(e => this.intersectionManager(e)), `f`),
            U(this, W, `f`).dispatchEvent(`containerBuilt`, {
                container: this
            })
        }
        get options() {
            return U(this, yr, `f`)
        }
        get sourceOptions() {
            return U(this, br, `f`)
        }
        addClickHandler(e) {
            if (!M(this))
                return;
            let t = this.interactivity.element;
            if (!t)
                return;
            let n = (t, n, r) => {
                if (!M(this))
                    return;
                let i = this.retina.pixelRatio
                  , a = {
                    x: n.x * i,
                    y: n.y * i
                }
                  , o = this.particles.quadTree.queryCircle(a, r * i);
                e(t, o)
            }
              , r = e => {
                if (!M(this))
                    return;
                let t = e
                  , r = {
                    x: t.offsetX || t.clientX,
                    y: t.offsetY || t.clientY
                };
                n(e, r, 1)
            }
              , i = () => {
                M(this) && (c = !0,
                l = !1)
            }
              , a = () => {
                M(this) && (l = !0)
            }
              , o = e => {
                var t, r, i;
                if (M(this)) {
                    if (c && !l) {
                        let a = e
                          , o = a.touches[a.touches.length - 1];
                        if (!o && (o = a.changedTouches[a.changedTouches.length - 1],
                        !o))
                            return;
                        let s = (t = this.canvas.element)?.getBoundingClientRect()
                          , c = {
                            x: o.clientX - ((r = s?.left) ?? 0),
                            y: o.clientY - ((i = s?.top) ?? 0)
                        };
                        n(e, c, Math.max(o.radiusX, o.radiusY))
                    }
                    c = !1,
                    l = !1
                }
            }
              , s = () => {
                M(this) && (c = !1,
                l = !1)
            }
              , c = !1
              , l = !1;
            t.addEventListener(`click`, r),
            t.addEventListener(`touchstart`, i),
            t.addEventListener(`touchmove`, a),
            t.addEventListener(`touchend`, o),
            t.addEventListener(`touchcancel`, s)
        }
        addPath(e, t, n=!1) {
            return !M(this) || !n && this.pathGenerators.has(e) ? !1 : (this.pathGenerators.set(e, t ?? Sr),
            !0)
        }
        destroy() {
            if (!M(this))
                return;
            this.stop(),
            this.particles.destroy(),
            this.canvas.destroy();
            for (let[,e] of this.drawers)
                e.destroy && e.destroy(this);
            for (let e of this.drawers.keys())
                this.drawers.delete(e);
            U(this, W, `f`).plugins.destroy(this),
            this.destroyed = !0;
            let e = U(this, W, `f`).dom()
              , t = e.findIndex(e => e === this);
            t >= 0 && e.splice(t, 1),
            U(this, W, `f`).dispatchEvent(`containerDestroyed`, {
                container: this
            })
        }
        draw(e) {
            if (!M(this))
                return;
            let t = e;
            this.drawAnimationFrame = de()(async e => {
                t && (this.lastFrameTime = void 0,
                t = !1),
                await this.frameManager.nextFrame(e)
            }
            )
        }
        exportConfiguration() {
            return JSON.stringify(this.actualOptions, void 0, 2)
        }
        exportImage(e, t, n) {
            var r;
            return (r = this.canvas.element)?.toBlob(e, t ?? `image/png`, n)
        }
        exportImg(e) {
            this.exportImage(e)
        }
        getAnimationStatus() {
            return !this.paused && !this.pageHidden && M(this)
        }
        handleClickMode(e) {
            if (M(this)) {
                this.particles.handleClickMode(e);
                for (let[,t] of this.plugins)
                    t.handleClickMode && t.handleClickMode(e)
            }
        }
        async init() {
            if (!M(this))
                return;
            let e = U(this, W, `f`).plugins.getSupportedShapes();
            for (let t of e) {
                let e = U(this, W, `f`).plugins.getShapeDrawer(t);
                e && this.drawers.set(t, e)
            }
            gr(this, yr, nt(U(this, W, `f`), this, this._initialSourceOptions, this.sourceOptions), `f`),
            this.actualOptions = nt(U(this, W, `f`), this, U(this, yr, `f`)),
            this.retina.init(),
            this.canvas.init(),
            this.updateActualOptions(),
            this.canvas.initBackground(),
            this.canvas.resize(),
            this.zLayers = this.actualOptions.zLayers,
            this.duration = v(this.actualOptions.duration),
            this.lifeTime = 0,
            this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
            let t = U(this, W, `f`).plugins.getAvailablePlugins(this);
            for (let[e,n] of t)
                this.plugins.set(e, n);
            for (let[,e] of this.drawers)
                e.init && await e.init(this);
            for (let[,e] of this.plugins)
                e.init ? e.init(this.actualOptions) : e.initAsync !== void 0 && await e.initAsync(this.actualOptions);
            U(this, W, `f`).dispatchEvent(`containerInit`, {
                container: this
            }),
            this.particles.init(),
            this.particles.setDensity();
            for (let[,e] of this.plugins)
                e.particlesSetup !== void 0 && e.particlesSetup();
            U(this, W, `f`).dispatchEvent(`particlesSetup`, {
                container: this
            })
        }
        async loadTheme(e) {
            M(this) && (this.currentTheme = e,
            await this.refresh())
        }
        pause() {
            if (M(this) && (this.drawAnimationFrame !== void 0 && (fe()(this.drawAnimationFrame),
            delete this.drawAnimationFrame),
            !this.paused)) {
                for (let[,e] of this.plugins)
                    e.pause && e.pause();
                this.pageHidden || (this.paused = !0),
                U(this, W, `f`).dispatchEvent(`containerPaused`, {
                    container: this
                })
            }
        }
        play(e) {
            if (!M(this))
                return;
            let t = this.paused || e;
            if (!this.firstStart || this.actualOptions.autoPlay) {
                if (this.paused &&= !1,
                t)
                    for (let[,e] of this.plugins)
                        e.play && e.play();
                U(this, W, `f`).dispatchEvent(`containerPlay`, {
                    container: this
                }),
                this.draw(t || !1)
            } else
                this.firstStart = !1
        }
        async refresh() {
            if (M(this))
                return this.stop(),
                this.start()
        }
        async reset() {
            if (M(this))
                return gr(this, yr, nt(U(this, W, `f`), this), `f`),
                this.refresh()
        }
        setNoise(e, t, n) {
            M(this) && this.setPath(e, t, n)
        }
        setPath(e, t, n) {
            if (!e || !M(this))
                return;
            let r = Object.assign({}, Sr);
            if (typeof e == `function`)
                r.generate = e,
                t && (r.init = t),
                n && (r.update = n);
            else {
                let t = r;
                r.generate = e.generate || t.generate,
                r.init = e.init || t.init,
                r.update = e.update || t.update
            }
            this.addPath(xr, r, !0)
        }
        async start() {
            if (!this.started && M(this)) {
                await this.init(),
                this.started = !0,
                U(this, _r, `f`).addListeners(),
                this.interactivity.element instanceof HTMLElement && U(this, vr, `f`) && U(this, vr, `f`).observe(this.interactivity.element);
                for (let[,e] of this.plugins)
                    e.startAsync === void 0 ? e.start !== void 0 && e.start() : await e.startAsync();
                U(this, W, `f`).dispatchEvent(`containerStarted`, {
                    container: this
                }),
                this.play()
            }
        }
        stop() {
            var e;
            if (this.started && M(this)) {
                this.firstStart = !0,
                this.started = !1,
                U(this, _r, `f`).removeListeners(),
                this.pause(),
                this.particles.clear(),
                this.canvas.clear(),
                this.interactivity.element instanceof HTMLElement && U(this, vr, `f`) && U(this, vr, `f`).unobserve(this.interactivity.element);
                for (let[,t] of this.plugins)
                    (e = t.stop) == null || e.call(t);
                for (let e of this.plugins.keys())
                    this.plugins.delete(e);
                gr(this, br, U(this, yr, `f`), `f`),
                U(this, W, `f`).dispatchEvent(`containerStopped`, {
                    container: this
                })
            }
        }
        updateActualOptions() {
            this.actualOptions.responsive = [];
            let e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, U(this, yr, `f`));
            return this.actualOptions.setTheme(this.currentTheme),
            this.responsiveMaxWidth == e ? !1 : (this.responsiveMaxWidth = e,
            !0)
        }
        intersectionManager(e) {
            if (M(this) && this.actualOptions.pauseOnOutsideViewport)
                for (let t of e)
                    t.target === this.interactivity.element && (t.isIntersecting ? this.play : this.pause)()
        }
    }
    ,
    W = new WeakMap,
    _r = new WeakMap,
    vr = new WeakMap,
    yr = new WeakMap,
    br = new WeakMap,
    wr = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Tr = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Dr = class {
        constructor(e) {
            Er.set(this, void 0),
            wr(this, Er, e, `f`)
        }
        load(e, t, n) {
            let r = {
                index: n,
                remote: !1
            };
            return typeof e == `string` ? r.tagId = e : r.options = e,
            typeof t == `number` ? r.index = t : r.options = t ?? r.options,
            this.loadOptions(r)
        }
        async loadJSON(e, t, n) {
            let r, i;
            return typeof t == `number` || t === void 0 ? r = e : (i = e,
            r = t),
            this.loadRemoteOptions({
                tagId: i,
                url: r,
                index: n,
                remote: !0
            })
        }
        async loadOptions(e) {
            var t, n, r;
            let i = (t = e.tagId) ?? `tsparticles${Math.floor(1e4 * m())}`
              , {index: a, url: o, remote: s} = e
              , c = s ? await it(o, a) : e.options
              , l = (n = e.element) ?? document.getElementById(i);
            l || (l = document.createElement(`div`),
            l.id = i,
            (r = document.querySelector(`body`)) == null || r.append(l));
            let u = c instanceof Array ? D(c, a) : c
              , d = Tr(this, Er, `f`).dom()
              , f = d.findIndex(e => e.id === i);
            if (f >= 0) {
                let e = Tr(this, Er, `f`).domItem(f);
                e && !e.destroyed && (e.destroy(),
                d.splice(f, 1))
            }
            let p;
            if (l.tagName.toLowerCase() === `canvas`)
                p = l,
                p.dataset[ft] = `false`;
            else {
                let e = l.getElementsByTagName(`canvas`);
                e.length ? (p = e[0],
                p.dataset[ft] = `false`) : (p = document.createElement(`canvas`),
                p.dataset[ft] = `true`,
                l.appendChild(p))
            }
            p.style.width || (p.style.width = `100%`),
            p.style.height || (p.style.height = `100%`);
            let h = new Cr(Tr(this, Er, `f`),i,u);
            return f >= 0 ? d.splice(f, 0, h) : d.push(h),
            h.canvas.loadCanvas(p),
            await h.start(),
            h
        }
        async loadRemoteOptions(e) {
            return this.loadOptions(e)
        }
        async set(e, t, n, r) {
            let i = {
                index: r,
                remote: !1
            };
            return typeof e == `string` ? i.tagId = e : i.element = e,
            t instanceof HTMLElement ? i.element = t : i.options = t,
            typeof n == `number` ? i.index = n : i.options = n ?? i.options,
            this.loadOptions(i)
        }
        async setJSON(e, t, n, r) {
            let i, a, o, s;
            return e instanceof HTMLElement ? (s = e,
            i = t,
            o = n) : (a = e,
            s = t,
            i = n,
            o = r),
            this.loadRemoteOptions({
                tagId: a,
                url: i,
                index: o,
                element: s,
                remote: !0
            })
        }
    }
    ,
    Er = new WeakMap,
    Or = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Ar = class {
        constructor(e) {
            kr.set(this, void 0),
            Or(this, kr, e, `f`),
            this.plugins = [],
            this.interactorsInitializers = new Map,
            this.moversInitializers = new Map,
            this.updatersInitializers = new Map,
            this.interactors = new Map,
            this.movers = new Map,
            this.updaters = new Map,
            this.presets = new Map,
            this.drawers = new Map,
            this.pathGenerators = new Map
        }
        addInteractor(e, t) {
            this.interactorsInitializers.set(e, t)
        }
        addParticleMover(e, t) {
            this.moversInitializers.set(e, t)
        }
        addParticleUpdater(e, t) {
            this.updatersInitializers.set(e, t)
        }
        addPathGenerator(e, t) {
            this.getPathGenerator(e) || this.pathGenerators.set(e, t)
        }
        addPlugin(e) {
            this.getPlugin(e.id) || this.plugins.push(e)
        }
        addPreset(e, t, n=!1) {
            !n && this.getPreset(e) || this.presets.set(e, t)
        }
        addShapeDrawer(e, t) {
            this.getShapeDrawer(e) || this.drawers.set(e, t)
        }
        destroy(e) {
            this.updaters.delete(e),
            this.movers.delete(e),
            this.interactors.delete(e)
        }
        getAvailablePlugins(e) {
            let t = new Map;
            for (let n of this.plugins)
                n.needsPlugin(e.actualOptions) && t.set(n.id, n.getPlugin(e));
            return t
        }
        getInteractors(e, t=!1) {
            let n = this.interactors.get(e);
            return (!n || t) && (n = [...this.interactorsInitializers.values()].map(t => t(e)),
            this.interactors.set(e, n)),
            n
        }
        getMovers(e, t=!1) {
            let n = this.movers.get(e);
            return (!n || t) && (n = [...this.moversInitializers.values()].map(t => t(e)),
            this.movers.set(e, n)),
            n
        }
        getPathGenerator(e) {
            return this.pathGenerators.get(e)
        }
        getPlugin(e) {
            return this.plugins.find(t => t.id === e)
        }
        getPreset(e) {
            return this.presets.get(e)
        }
        getShapeDrawer(e) {
            return this.drawers.get(e)
        }
        getSupportedShapes() {
            return this.drawers.keys()
        }
        getUpdaters(e, t=!1) {
            let n = this.updaters.get(e);
            return (!n || t) && (n = [...this.updatersInitializers.values()].map(t => t(e)),
            this.updaters.set(e, n)),
            n
        }
        loadOptions(e, t) {
            for (let n of this.plugins)
                n.loadOptions(e, t)
        }
        loadParticlesOptions(e, t, ...n) {
            let r = this.updaters.get(e);
            if (r)
                for (let e of r)
                    e.loadOptions && e.loadOptions(t, ...n)
        }
    }
    ,
    kr = new WeakMap,
    jr = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    G = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Ir = class {
        constructor() {
            Mr.set(this, void 0),
            Nr.set(this, void 0),
            Pr.set(this, void 0),
            Fr.set(this, void 0),
            jr(this, Mr, [], `f`),
            jr(this, Nr, new st, `f`),
            jr(this, Pr, !1, `f`),
            jr(this, Fr, new Dr(this), `f`),
            this.plugins = new Ar(this)
        }
        addEventListener(e, t) {
            G(this, Nr, `f`).addEventListener(e, t)
        }
        async addInteractor(e, t) {
            this.plugins.addInteractor(e, t),
            await this.refresh()
        }
        async addMover(e, t) {
            this.plugins.addParticleMover(e, t),
            await this.refresh()
        }
        async addParticleUpdater(e, t) {
            this.plugins.addParticleUpdater(e, t),
            await this.refresh()
        }
        async addPathGenerator(e, t) {
            this.plugins.addPathGenerator(e, t),
            await this.refresh()
        }
        async addPlugin(e) {
            this.plugins.addPlugin(e),
            await this.refresh()
        }
        async addPreset(e, t, n=!1) {
            this.plugins.addPreset(e, t, n),
            await this.refresh()
        }
        async addShape(e, t, n, r, i) {
            let a;
            a = typeof t == `function` ? {
                afterEffect: r,
                destroy: i,
                draw: t,
                init: n
            } : t,
            this.plugins.addShapeDrawer(e, a),
            await this.refresh()
        }
        dispatchEvent(e, t) {
            G(this, Nr, `f`).dispatchEvent(e, t)
        }
        dom() {
            return G(this, Mr, `f`)
        }
        domItem(e) {
            let t = this.dom()
              , n = t[e];
            if (n && !n.destroyed)
                return n;
            t.splice(e, 1)
        }
        init() {
            G(this, Pr, `f`) || jr(this, Pr, !0, `f`)
        }
        async load(e, t) {
            return G(this, Fr, `f`).load(e, t)
        }
        async loadFromArray(e, t, n) {
            return G(this, Fr, `f`).load(e, t, n)
        }
        async loadJSON(e, t, n) {
            return G(this, Fr, `f`).loadJSON(e, t, n)
        }
        async refresh() {
            for (let e of this.dom())
                await e.refresh()
        }
        removeEventListener(e, t) {
            G(this, Nr, `f`).removeEventListener(e, t)
        }
        async set(e, t, n) {
            return G(this, Fr, `f`).set(e, t, n)
        }
        async setJSON(e, t, n, r) {
            return G(this, Fr, `f`).setJSON(e, t, n, r)
        }
        setOnClickHandler(e) {
            let t = this.dom();
            if (!t.length)
                throw Error(`Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()`);
            for (let n of t)
                n.addClickHandler(e)
        }
    }
    ,
    Mr = new WeakMap,
    Nr = new WeakMap,
    Pr = new WeakMap,
    Fr = new WeakMap,
    Lr = class {
        constructor() {
            this.stringPrefix = `hsl`
        }
        handleColor(e) {
            var t;
            let n = e.value
              , r = (t = n.hsl) ?? e.value;
            if (r.h !== void 0 && r.l !== void 0)
                return Ne(r)
        }
        handleRangeColor(e) {
            var t;
            let n = e.value
              , r = (t = n.hsl) ?? e.value;
            if (r.h !== void 0 && r.l !== void 0)
                return Ne({
                    h: v(r.h),
                    l: v(r.l),
                    s: v(r.s)
                })
        }
        parseString(e) {
            if (!e.startsWith(`hsl`))
                return;
            let t = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i
              , n = t.exec(e);
            return n ? Pe({
                a: n.length > 4 ? ce(n[5]) : 1,
                h: parseInt(n[1], 10),
                l: parseInt(n[3], 10),
                s: parseInt(n[2], 10)
            }) : void 0
        }
    }
    ,
    Rr = class {
        constructor() {
            this.stringPrefix = `rgb`
        }
        handleColor(e) {
            var t;
            let n = e.value
              , r = (t = n.rgb) ?? e.value;
            if (r.r !== void 0)
                return r
        }
        handleRangeColor(e) {
            var t;
            let n = e.value
              , r = (t = n.rgb) ?? e.value;
            if (r.r !== void 0)
                return {
                    r: v(r.r),
                    g: v(r.g),
                    b: v(r.b)
                }
        }
        parseString(e) {
            if (!e.startsWith(this.stringPrefix))
                return;
            let t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i
              , n = t.exec(e);
            return n ? {
                a: n.length > 4 ? ce(n[5]) : 1,
                b: parseInt(n[3], 10),
                g: parseInt(n[2], 10),
                r: parseInt(n[1], 10)
            } : void 0
        }
    }
    ,
    K = class {
        constructor(e) {
            this.container = e,
            this.type = 0
        }
    }
    ,
    zr = class {
        constructor(e) {
            this.container = e,
            this.type = 1
        }
    }
    ,
    Br = new Rr,
    Vr = new Lr,
    Te(`rgb`, Br),
    Te(`hsl`, Vr),
    Hr = new Ir,
    Hr.init()
}
), Ur, Wr, Gr, Kr = e( () => {
    Ur = {},
    Ur = function e(t, n) {
        if (t === n)
            return !0;
        if (t && n && typeof t == `object` && typeof n == `object`) {
            if (t.constructor !== n.constructor)
                return !1;
            var r, i, a;
            if (Array.isArray(t)) {
                if (r = t.length,
                r != n.length)
                    return !1;
                for (i = r; i-- !== 0; )
                    if (!e(t[i], n[i]))
                        return !1;
                return !0
            }
            if (t.constructor === RegExp)
                return t.source === n.source && t.flags === n.flags;
            if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
            if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
            if (a = Object.keys(t),
            r = a.length,
            r !== Object.keys(n).length)
                return !1;
            for (i = r; i-- !== 0; )
                if (!Object.prototype.hasOwnProperty.call(n, a[i]))
                    return !1;
            for (i = r; i-- !== 0; ) {
                var o = a[i];
                if ((o !== `_owner` || !t.$$typeof) && !e(t[o], n[o]))
                    return !1
            }
            return !0
        }
        return t !== t && n !== n
    }
    ,
    Wr = Ur,
    Gr = Wr
}
), qr, Jr, Yr = e( () => {
    i(),
    q(),
    Kr(),
    qr = `tsparticles`,
    Jr = class e extends t {
        constructor(e) {
            super(e),
            this.state = {
                init: !1,
                library: void 0
            }
        }
        destroy() {
            this.state.library && (this.state.library.destroy(),
            this.setState({
                library: void 0
            }))
        }
        shouldComponentUpdate(e) {
            return !Gr(e, this.props)
        }
        componentDidUpdate() {
            this.refresh()
        }
        forceUpdate() {
            this.refresh().then( () => {
                super.forceUpdate()
            }
            )
        }
        componentDidMount() {
            (async () => {
                this.props.init && await this.props.init(Hr),
                this.setState({
                    init: !0
                }, async () => {
                    await this.loadParticles()
                }
                )
            }
            )()
        }
        componentWillUnmount() {
            this.destroy()
        }
        render() {
            let {width: e, height: t, className: r, canvasClassName: i, id: a} = this.props;
            return n.createElement(`div`, {
                className: r,
                id: a
            }, n.createElement(`canvas`, {
                className: i,
                style: Object.assign(Object.assign({}, this.props.style), {
                    width: e,
                    height: t
                })
            }))
        }
        async refresh() {
            this.destroy(),
            await this.loadParticles()
        }
        async loadParticles() {
            var t, n, r;
            if (!this.state.init)
                return;
            let i = async e => {
                this.props.container && (this.props.container.current = e),
                this.setState({
                    library: e
                }),
                this.props.loaded && await this.props.loaded(e)
            }
              , a = (n = (t = this.props.id) ?? e.defaultProps.id) ?? qr
              , o = this.props.url ? await Hr.loadJSON(a, this.props.url) : await Hr.load(a, (r = this.props.params) ?? this.props.options);
            await i(o)
        }
    }
    ,
    Jr.defaultProps = {
        width: `100%`,
        height: `100%`,
        options: {},
        style: {},
        url: void 0,
        id: qr
    }
}
);
async function Xr(e) {
    let t = new ti;
    await e.addPlugin(t)
}
var Zr, Qr, J, $r, ei, ti, ni = e( () => {
    q(),
    Zr = class {
        constructor() {
            this.radius = 0,
            this.mass = 0
        }
        load(e) {
            e && (e.mass !== void 0 && (this.mass = e.mass),
            e.radius !== void 0 && (this.radius = e.radius))
        }
    }
    ,
    Qr = class extends R {
        constructor() {
            super(),
            this.density = 5,
            this.value = 50,
            this.limit = new Zr
        }
        load(e) {
            e && (super.load(e),
            e.density !== void 0 && (this.density = e.density),
            typeof e.limit == `number` ? this.limit.radius = e.limit : this.limit.load(e.limit))
        }
    }
    ,
    J = class {
        constructor() {
            this.color = new L,
            this.color.value = `#000000`,
            this.draggable = !1,
            this.opacity = 1,
            this.destroy = !0,
            this.orbits = !1,
            this.size = new Qr
        }
        load(e) {
            e !== void 0 && (e.color !== void 0 && (this.color = L.create(this.color, e.color)),
            e.draggable !== void 0 && (this.draggable = e.draggable),
            this.name = e.name,
            e.opacity !== void 0 && (this.opacity = e.opacity),
            e.position !== void 0 && (this.position = {},
            e.position.x !== void 0 && (this.position.x = x(e.position.x)),
            e.position.y !== void 0 && (this.position.y = x(e.position.y))),
            e.size !== void 0 && this.size.load(e.size),
            e.destroy !== void 0 && (this.destroy = e.destroy),
            e.orbits !== void 0 && (this.orbits = e.orbits))
        }
    }
    ,
    $r = class {
        constructor(e, t, n, r) {
            var i, a, o;
            this.absorbers = e,
            this.container = t,
            this.initialPosition = r ? P.create(r.x, r.y) : void 0,
            n instanceof J ? this.options = n : (this.options = new J,
            this.options.load(n)),
            this.dragging = !1,
            this.name = this.options.name,
            this.opacity = this.options.opacity,
            this.size = v(this.options.size.value) * t.retina.pixelRatio,
            this.mass = this.size * this.options.size.density * t.retina.reduceFactor;
            let s = this.options.size.limit;
            this.limit = {
                radius: s.radius * t.retina.pixelRatio * t.retina.reduceFactor,
                mass: s.mass
            },
            this.color = (i = k(this.options.color)) ?? {
                b: 0,
                g: 0,
                r: 0
            },
            this.position = (o = (a = this.initialPosition)?.copy()) ?? this.calcPosition()
        }
        attract(e) {
            let t = this.container
              , n = this.options;
            if (n.draggable) {
                let e = t.interactivity.mouse;
                if (e.clicking && e.downPosition) {
                    let t = w(this.position, e.downPosition);
                    t <= this.size && (this.dragging = !0)
                } else
                    this.dragging = !1;
                this.dragging && e.position && (this.position.x = e.position.x,
                this.position.y = e.position.y)
            }
            let r = e.getPosition()
              , {dx: i, dy: a, distance: o} = C(this.position, r)
              , s = P.create(i, a);
            if (s.length = this.mass / o ** 2 * t.retina.reduceFactor,
            o < this.size + e.getRadius()) {
                let r = .033 * e.getRadius() * t.retina.pixelRatio;
                this.size > e.getRadius() && o < this.size - e.getRadius() || e.absorberOrbit !== void 0 && e.absorberOrbit.length < 0 ? n.destroy ? e.destroy() : (e.needsNewPosition = !0,
                this.updateParticlePosition(e, s)) : (n.destroy && (e.size.value -= r),
                this.updateParticlePosition(e, s)),
                (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += r),
                (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += r * this.options.size.density * t.retina.reduceFactor)
            } else
                this.updateParticlePosition(e, s)
        }
        draw(e) {
            e.translate(this.position.x, this.position.y),
            e.beginPath(),
            e.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
            e.closePath(),
            e.fillStyle = A(this.color, this.opacity),
            e.fill()
        }
        resize() {
            let e = this.initialPosition;
            this.position = e && he(e, this.container.canvas.size, P.origin) ? e : this.calcPosition()
        }
        calcPosition() {
            let e = oe({
                size: this.container.canvas.size,
                position: this.options.position
            });
            return P.create(e.x, e.y)
        }
        updateParticlePosition(e, t) {
            var n;
            if (e.destroyed)
                return;
            let r = this.container
              , i = r.canvas.size;
            if (e.needsNewPosition) {
                let t = ae({
                    size: i
                });
                e.position.setTo(t),
                e.velocity.setTo(e.initialVelocity),
                e.absorberOrbit = void 0,
                e.needsNewPosition = !1
            }
            if (this.options.orbits) {
                if (e.absorberOrbit === void 0 && (e.absorberOrbit = P.create(0, 0),
                e.absorberOrbit.length = w(e.getPosition(), this.position),
                e.absorberOrbit.angle = m() * Math.PI * 2),
                e.absorberOrbit.length <= this.size && !this.options.destroy) {
                    let t = Math.min(i.width, i.height);
                    e.absorberOrbit.length = t * (.2 * m() - .1 + 1)
                }
                e.absorberOrbitDirection === void 0 && (e.absorberOrbitDirection = e.velocity.x >= 0 ? `clockwise` : `counter-clockwise`);
                let a = e.absorberOrbit.length
                  , o = e.absorberOrbit.angle
                  , s = e.absorberOrbitDirection;
                e.velocity.setTo(P.origin);
                let c = {
                    x: s === `clockwise` ? Math.cos : Math.sin,
                    y: s === `clockwise` ? Math.sin : Math.cos
                };
                e.position.x = this.position.x + a * c.x(o),
                e.position.y = this.position.y + a * c.y(o),
                e.absorberOrbit.length -= t.length,
                e.absorberOrbit.angle += ((n = e.retina.moveSpeed) ?? 0) * r.retina.pixelRatio / 100 * r.retina.reduceFactor
            } else {
                let n = P.origin;
                n.length = t.length,
                n.angle = t.angle,
                e.velocity.addTo(n)
            }
        }
    }
    ,
    ei = class {
        constructor(e) {
            this.container = e,
            this.array = [],
            this.absorbers = [],
            this.interactivityAbsorbers = [],
            e.getAbsorber = e => e === void 0 || typeof e == `number` ? this.array[e || 0] : this.array.find(t => t.name === e),
            e.addAbsorber = (e, t) => this.addAbsorber(e, t)
        }
        addAbsorber(e, t) {
            let n = new $r(this,this.container,e,t);
            return this.array.push(n),
            n
        }
        draw(e) {
            for (let t of this.array)
                e.save(),
                t.draw(e),
                e.restore()
        }
        handleClickMode(e) {
            let t = this.absorbers
              , n = this.interactivityAbsorbers;
            if (e === `absorber`) {
                let e;
                n instanceof Array ? n.length > 0 && (e = D(n)) : e = n;
                let r = e ?? (t instanceof Array ? D(t) : t)
                  , i = this.container.interactivity.mouse.clickPosition;
                this.addAbsorber(r, i)
            }
        }
        init(e) {
            var t, n;
            if (!e)
                return;
            e.absorbers && (e.absorbers instanceof Array ? this.absorbers = e.absorbers.map(e => {
                let t = new J;
                return t.load(e),
                t
            }
            ) : (this.absorbers instanceof Array && (this.absorbers = new J),
            this.absorbers.load(e.absorbers)));
            let r = (n = (t = e.interactivity)?.modes)?.absorbers;
            if (r && (r instanceof Array ? this.interactivityAbsorbers = r.map(e => {
                let t = new J;
                return t.load(e),
                t
            }
            ) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new J),
            this.interactivityAbsorbers.load(r))),
            this.absorbers instanceof Array)
                for (let e of this.absorbers)
                    this.addAbsorber(e);
            else
                this.addAbsorber(this.absorbers)
        }
        particleUpdate(e) {
            for (let t of this.array)
                if (t.attract(e),
                e.destroyed)
                    break
        }
        removeAbsorber(e) {
            let t = this.array.indexOf(e);
            t >= 0 && this.array.splice(t, 1)
        }
        resize() {
            for (let e of this.array)
                e.resize()
        }
        stop() {
            this.array = []
        }
    }
    ,
    ti = class {
        constructor() {
            this.id = `absorbers`
        }
        getPlugin(e) {
            return new ei(e)
        }
        loadOptions(e, t) {
            var n, r;
            if (!this.needsPlugin(e) && !this.needsPlugin(t))
                return;
            let i = e;
            if (t?.absorbers)
                if (t?.absorbers instanceof Array)
                    i.absorbers = t?.absorbers.map(e => {
                        let t = new J;
                        return t.load(e),
                        t
                    }
                    );
                else {
                    let e = i.absorbers;
                    e?.load === void 0 && (i.absorbers = e = new J),
                    e.load(t?.absorbers)
                }
            let a = (r = (n = t?.interactivity)?.modes)?.absorbers;
            if (a)
                if (a instanceof Array)
                    i.interactivity.modes.absorbers = a.map(e => {
                        let t = new J;
                        return t.load(e),
                        t
                    }
                    );
                else {
                    let e = i.interactivity.modes.absorbers;
                    e?.load === void 0 && (i.interactivity.modes.absorbers = e = new J),
                    e.load(a)
                }
        }
        needsPlugin(e) {
            var t, n, r;
            if (!e)
                return !1;
            let i = e.absorbers;
            return i instanceof Array ? !!i.length : !!i || !(!(r = (n = (t = e.interactivity)?.events)?.onClick)?.mode || !E(`absorber`, e.interactivity.events.onClick.mode))
        }
    }
}
);
function ri(e, t) {
    return e + t * (m() - .5)
}
async function ii(e) {
    e.emitterShapeManager ||= new Si(e),
    e.addEmitterShape ||= (t, n) => {
        var r;
        (r = e.emitterShapeManager) == null || r.addShape(t, n)
    }
    ;
    let t = new Di(e);
    await e.addPlugin(t),
    e.addEmitterShape(`circle`, new ai),
    e.addEmitterShape(`square`, new Ci)
}
var ai, oi, si, ci, Y, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi = e( () => {
    q(),
    ai = class {
        randomPosition(e, t, n) {
            let r = (e, t) => {
                let n = m() / 4
                  , r = Math.atan(t / e * Math.tan(2 * Math.PI * n))
                  , i = m();
                return i < .25 ? r : i < .5 ? Math.PI - r : i < .75 ? Math.PI + r : -r
            }
              , i = (e, t, n) => e * t / Math.sqrt((t * Math.cos(n)) ** 2 + (e * Math.sin(n)) ** 2)
              , [a,o] = [t.width / 2, t.height / 2]
              , s = r(a, o)
              , c = i(a, o, s)
              , l = n ? c * Math.sqrt(m()) : c;
            return {
                x: e.x + l * Math.cos(s),
                y: e.y + l * Math.sin(s)
            }
        }
    }
    ,
    oi = class {
        constructor() {
            this.wait = !1
        }
        load(e) {
            e !== void 0 && (e.count !== void 0 && (this.count = e.count),
            e.delay !== void 0 && (this.delay = e.delay),
            e.duration !== void 0 && (this.duration = e.duration),
            e.wait !== void 0 && (this.wait = e.wait))
        }
    }
    ,
    si = class {
        constructor() {
            this.quantity = 1,
            this.delay = .1
        }
        load(e) {
            e !== void 0 && (e.quantity !== void 0 && (this.quantity = x(e.quantity)),
            e.delay !== void 0 && (this.delay = x(e.delay)))
        }
    }
    ,
    ci = class {
        constructor() {
            this.mode = `percent`,
            this.height = 0,
            this.width = 0
        }
        load(e) {
            e !== void 0 && (e.mode !== void 0 && (this.mode = e.mode),
            e.height !== void 0 && (this.height = e.height),
            e.width !== void 0 && (this.width = e.width))
        }
    }
    ,
    Y = class {
        constructor() {
            this.autoPlay = !0,
            this.fill = !0,
            this.life = new oi,
            this.rate = new si,
            this.shape = `square`,
            this.startCount = 0
        }
        load(e) {
            e !== void 0 && (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
            e.size !== void 0 && (this.size === void 0 && (this.size = new ci),
            this.size.load(e.size)),
            e.direction !== void 0 && (this.direction = e.direction),
            this.domId = e.domId,
            e.fill !== void 0 && (this.fill = e.fill),
            this.life.load(e.life),
            this.name = e.name,
            e.particles !== void 0 && (e.particles instanceof Array ? this.particles = e.particles.map(e => O({}, e)) : this.particles = O({}, e.particles)),
            this.rate.load(e.rate),
            e.shape !== void 0 && (this.shape = e.shape),
            e.position !== void 0 && (this.position = {},
            e.position.x !== void 0 && (this.position.x = x(e.position.x)),
            e.position.y !== void 0 && (this.position.y = x(e.position.y))),
            e.spawnColor !== void 0 && (this.spawnColor === void 0 && (this.spawnColor = new cn),
            this.spawnColor.load(e.spawnColor)),
            e.startCount !== void 0 && (this.startCount = e.startCount))
        }
    }
    ,
    li = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    ui = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    mi = class {
        constructor(e, t, n, r, i) {
            var a, o, s, c, l, u, d, f;
            this.emitters = t,
            this.container = n,
            di.set(this, void 0),
            fi.set(this, void 0),
            pi.set(this, void 0),
            li(this, di, e, `f`),
            this.currentDuration = 0,
            this.currentEmitDelay = 0,
            this.currentSpawnDelay = 0,
            this.initialPosition = i,
            r instanceof Y ? this.options = r : (this.options = new Y,
            this.options.load(r)),
            this.spawnDelay = 1e3 * ((a = this.options.life.delay) ?? 0) / this.container.retina.reduceFactor,
            this.position = (o = this.initialPosition) ?? this.calcPosition(),
            this.name = this.options.name,
            this.shape = (s = ui(this, di, `f`).emitterShapeManager)?.getShape(this.options.shape),
            this.fill = this.options.fill,
            li(this, fi, !this.options.life.wait, `f`),
            li(this, pi, !1, `f`);
            let p = O({}, this.options.particles);
            p ??= {},
            (c = p.move) ?? (p.move = {}),
            (l = (f = p.move).direction) ?? (f.direction = this.options.direction),
            this.options.spawnColor && (this.spawnColor = ke(this.options.spawnColor)),
            this.paused = !this.options.autoPlay,
            this.particlesOptions = p,
            this.size = (u = this.options.size) ?? ( () => {
                let e = new ci;
                return e.load({
                    height: 0,
                    mode: `percent`,
                    width: 0
                }),
                e
            }
            )(),
            this.lifeCount = (d = this.options.life.count) ?? -1,
            this.immortal = this.lifeCount <= 0,
            ui(this, di, `f`).dispatchEvent(`emitterCreated`, {
                container: n,
                data: {
                    emitter: this
                }
            }),
            this.play()
        }
        externalPause() {
            this.paused = !0,
            this.pause()
        }
        externalPlay() {
            this.paused = !1,
            this.play()
        }
        getPosition() {
            if (this.options.domId) {
                let e = this.container
                  , t = document.getElementById(this.options.domId);
                if (t) {
                    let n = t.getBoundingClientRect();
                    return {
                        x: (n.x + n.width / 2) * e.retina.pixelRatio,
                        y: (n.y + n.height / 2) * e.retina.pixelRatio
                    }
                }
            }
            return this.position
        }
        getSize() {
            let e = this.container;
            if (this.options.domId) {
                let t = document.getElementById(this.options.domId);
                if (t) {
                    let n = t.getBoundingClientRect();
                    return {
                        width: n.width * e.retina.pixelRatio,
                        height: n.height * e.retina.pixelRatio
                    }
                }
            }
            return {
                width: this.size.mode === `percent` ? e.canvas.size.width * this.size.width / 100 : this.size.width,
                height: this.size.mode === `percent` ? e.canvas.size.height * this.size.height / 100 : this.size.height
            }
        }
        pause() {
            this.paused || delete this.emitDelay
        }
        play() {
            var e;
            if (!this.paused && this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.options.life.count) && (ui(this, fi, `f`) || this.currentSpawnDelay >= ((e = this.spawnDelay) ?? 0))) {
                if (this.emitDelay === void 0) {
                    let e = v(this.options.rate.delay);
                    this.emitDelay = 1e3 * e / this.container.retina.reduceFactor
                }
                (this.lifeCount > 0 || this.immortal) && this.prepareToDie()
            }
        }
        resize() {
            let e = this.initialPosition;
            this.position = e && he(e, this.container.canvas.size, P.origin) ? e : this.calcPosition()
        }
        update(e) {
            var t, n, r;
            this.paused || (ui(this, fi, `f`) && (li(this, fi, !1, `f`),
            this.currentSpawnDelay = (t = this.spawnDelay) ?? 0,
            this.currentEmitDelay = (n = this.emitDelay) ?? 0),
            ui(this, pi, `f`) || (li(this, pi, !0, `f`),
            this.emitParticles(this.options.startCount)),
            this.duration !== void 0 && (this.currentDuration += e.value,
            this.currentDuration >= this.duration && (this.pause(),
            this.spawnDelay !== void 0 && delete this.spawnDelay,
            this.immortal || this.lifeCount--,
            this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(),
            this.spawnDelay = 1e3 * ((r = this.options.life.delay) ?? 0) / this.container.retina.reduceFactor) : this.destroy(),
            this.currentDuration -= this.duration,
            delete this.duration)),
            this.spawnDelay !== void 0 && (this.currentSpawnDelay += e.value,
            this.currentSpawnDelay >= this.spawnDelay && (ui(this, di, `f`).dispatchEvent(`emitterPlay`, {
                container: this.container
            }),
            this.play(),
            this.currentSpawnDelay -= this.currentSpawnDelay,
            delete this.spawnDelay)),
            this.emitDelay !== void 0 && (this.currentEmitDelay += e.value,
            this.currentEmitDelay >= this.emitDelay && (this.emit(),
            this.currentEmitDelay -= this.emitDelay)))
        }
        calcPosition() {
            return oe({
                size: this.container.canvas.size,
                position: this.options.position
            })
        }
        destroy() {
            this.emitters.removeEmitter(this),
            ui(this, di, `f`).dispatchEvent(`emitterDestroyed`, {
                container: this.container,
                data: {
                    emitter: this
                }
            })
        }
        emit() {
            if (this.paused)
                return;
            let e = v(this.options.rate.quantity);
            this.emitParticles(e)
        }
        emitParticles(e) {
            var t, n, r;
            let i = this.getPosition()
              , a = this.getSize()
              , o = this.particlesOptions instanceof Array ? D(this.particlesOptions) : this.particlesOptions;
            for (let s = 0; s < e; s++) {
                let e = O({}, o);
                if (this.spawnColor) {
                    let n = (t = this.options.spawnColor)?.animation;
                    n && (this.spawnColor.h = this.setColorAnimation(n.h, this.spawnColor.h, 360),
                    this.spawnColor.s = this.setColorAnimation(n.s, this.spawnColor.s, 100),
                    this.spawnColor.l = this.setColorAnimation(n.l, this.spawnColor.l, 100)),
                    e.color ? e.color.value = this.spawnColor : e.color = {
                        value: this.spawnColor
                    }
                }
                if (!i)
                    return;
                let s = (r = (n = this.shape)?.randomPosition(i, a, this.fill)) ?? i;
                this.container.particles.addParticle(s, e)
            }
        }
        prepareToDie() {
            var e;
            if (this.paused)
                return;
            let t = (e = this.options.life)?.duration;
            this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && t !== void 0 && t > 0 && (this.duration = 1e3 * t)
        }
        setColorAnimation(e, t, n) {
            var r;
            let i = this.container;
            if (!e.enable)
                return t;
            let a = _(e.offset)
              , o = v(this.options.rate.delay)
              , s = 1e3 * o / i.retina.reduceFactor
              , c = v((r = e.speed) ?? 0);
            return (t + c * i.fpsLimit / s + 3.6 * a) % n
        }
    }
    ,
    di = new WeakMap,
    fi = new WeakMap,
    pi = new WeakMap,
    hi = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    gi = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    vi = class {
        constructor(e, t) {
            this.container = t,
            _i.set(this, void 0),
            hi(this, _i, e, `f`),
            this.array = [],
            this.emitters = [],
            this.interactivityEmitters = {
                random: {
                    count: 1,
                    enable: !1
                },
                value: []
            },
            t.getEmitter = e => e === void 0 || typeof e == `number` ? this.array[e || 0] : this.array.find(t => t.name === e),
            t.addEmitter = (e, t) => this.addEmitter(e, t),
            t.removeEmitter = e => {
                let n = t.getEmitter(e);
                n && this.removeEmitter(n)
            }
            ,
            t.playEmitter = e => {
                let n = t.getEmitter(e);
                n && n.externalPlay()
            }
            ,
            t.pauseEmitter = e => {
                let n = t.getEmitter(e);
                n && n.externalPause()
            }
        }
        addEmitter(e, t) {
            let n = new Y;
            n.load(e);
            let r = new mi(gi(this, _i, `f`),this,this.container,n,t);
            return this.array.push(r),
            r
        }
        handleClickMode(e) {
            let t = this.emitters
              , n = this.interactivityEmitters;
            if (e === `emitter`) {
                let e;
                if (n && n.value instanceof Array)
                    if (n.value.length > 0 && n.random.enable) {
                        e = [];
                        let t = [];
                        for (let r = 0; r < n.random.count; r++) {
                            let i = me(n.value);
                            t.includes(i) && t.length < n.value.length ? r-- : (t.push(i),
                            e.push(D(n.value, i)))
                        }
                    } else
                        e = n.value;
                else
                    e = n?.value;
                let r = e ?? t
                  , i = this.container.interactivity.mouse.clickPosition;
                if (r instanceof Array)
                    for (let e of r)
                        this.addEmitter(e, i);
                else
                    this.addEmitter(O({}, r), i)
            }
        }
        init(e) {
            var t, n, r, i, a, o, s, c;
            if (!e)
                return;
            e.emitters && (e.emitters instanceof Array ? this.emitters = e.emitters.map(e => {
                let t = new Y;
                return t.load(e),
                t
            }
            ) : (this.emitters instanceof Array && (this.emitters = new Y),
            this.emitters.load(e.emitters)));
            let l = (n = (t = e.interactivity)?.modes)?.emitters;
            if (l)
                if (l instanceof Array)
                    this.interactivityEmitters = {
                        random: {
                            count: 1,
                            enable: !0
                        },
                        value: l.map(e => {
                            let t = new Y;
                            return t.load(e),
                            t
                        }
                        )
                    };
                else {
                    let e = l;
                    if (e.value !== void 0)
                        if (e.value instanceof Array)
                            this.interactivityEmitters = {
                                random: {
                                    count: (r = this.interactivityEmitters.random.count) ?? 1,
                                    enable: (i = this.interactivityEmitters.random.enable) != null && i
                                },
                                value: e.value.map(e => {
                                    let t = new Y;
                                    return t.load(e),
                                    t
                                }
                                )
                            };
                        else {
                            let t = new Y;
                            t.load(e.value),
                            this.interactivityEmitters = {
                                random: {
                                    count: (a = this.interactivityEmitters.random.count) ?? 1,
                                    enable: (o = this.interactivityEmitters.random.enable) != null && o
                                },
                                value: t
                            }
                        }
                    else {
                        let e = new Y;
                        e.load(l),
                        this.interactivityEmitters = {
                            random: {
                                count: (s = this.interactivityEmitters.random.count) ?? 1,
                                enable: (c = this.interactivityEmitters.random.enable) != null && c
                            },
                            value: e
                        }
                    }
                }
            if (this.emitters instanceof Array)
                for (let e of this.emitters)
                    this.addEmitter(e);
            else
                this.addEmitter(this.emitters)
        }
        pause() {
            for (let e of this.array)
                e.pause()
        }
        play() {
            for (let e of this.array)
                e.play()
        }
        removeEmitter(e) {
            let t = this.array.indexOf(e);
            t >= 0 && this.array.splice(t, 1)
        }
        resize() {
            for (let e of this.array)
                e.resize()
        }
        stop() {
            this.array = []
        }
        update(e) {
            for (let t of this.array)
                t.update(e)
        }
    }
    ,
    _i = new WeakMap,
    yi = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    xi = new Map,
    Si = class {
        constructor(e) {
            bi.set(this, void 0),
            yi(this, bi, e, `f`)
        }
        addShape(e, t) {
            this.getShape(e) || xi.set(e, t)
        }
        getShape(e) {
            return xi.get(e)
        }
        getSupportedShapes() {
            return xi.keys()
        }
    }
    ,
    bi = new WeakMap,
    Ci = class {
        randomPosition(e, t, n) {
            if (n)
                return {
                    x: ri(e.x, t.width),
                    y: ri(e.y, t.height)
                };
            {
                let n = t.width / 2
                  , r = t.height / 2
                  , i = Math.floor(4 * m())
                  , a = 2 * (m() - .5);
                switch (i) {
                case 0:
                    return {
                        x: e.x + a * n,
                        y: e.y - r
                    };
                case 1:
                    return {
                        x: e.x - n,
                        y: e.y + a * r
                    };
                case 2:
                    return {
                        x: e.x + a * n,
                        y: e.y + r
                    };
                case 3:
                default:
                    return {
                        x: e.x + n,
                        y: e.y + a * r
                    }
                }
            }
        }
    }
    ,
    wi = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Ti = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Di = class {
        constructor(e) {
            Ei.set(this, void 0),
            wi(this, Ei, e, `f`),
            this.id = `emitters`
        }
        getPlugin(e) {
            return new vi(Ti(this, Ei, `f`),e)
        }
        loadOptions(e, t) {
            var n, r, i, a, o, s;
            if (!this.needsPlugin(e) && !this.needsPlugin(t))
                return;
            let c = e;
            if (t?.emitters)
                if (t?.emitters instanceof Array)
                    c.emitters = t?.emitters.map(e => {
                        let t = new Y;
                        return t.load(e),
                        t
                    }
                    );
                else {
                    let e = c.emitters;
                    e?.load === void 0 && (c.emitters = e = new Y),
                    e.load(t?.emitters)
                }
            let l = (r = (n = t?.interactivity)?.modes)?.emitters;
            if (l)
                if (l instanceof Array)
                    c.interactivity.modes.emitters = {
                        random: {
                            count: 1,
                            enable: !0
                        },
                        value: l.map(e => {
                            let t = new Y;
                            return t.load(e),
                            t
                        }
                        )
                    };
                else {
                    let e = l;
                    if (e.value !== void 0)
                        if (e.value instanceof Array)
                            c.interactivity.modes.emitters = {
                                random: {
                                    count: (i = e.random.count) ?? 1,
                                    enable: (a = e.random.enable) != null && a
                                },
                                value: e.value.map(e => {
                                    let t = new Y;
                                    return t.load(e),
                                    t
                                }
                                )
                            };
                        else {
                            let t = new Y;
                            t.load(e.value),
                            c.interactivity.modes.emitters = {
                                random: {
                                    count: (o = e.random.count) ?? 1,
                                    enable: (s = e.random.enable) != null && s
                                },
                                value: t
                            }
                        }
                    else {
                        let e = c.interactivity.modes.emitters = {
                            random: {
                                count: 1,
                                enable: !1
                            },
                            value: new Y
                        };
                        e.value.load(l)
                    }
                }
        }
        needsPlugin(e) {
            var t, n, r;
            if (!e)
                return !1;
            let i = e.emitters;
            return i instanceof Array && !!i.length || i !== void 0 || !!(r = (n = (t = e.interactivity)?.events)?.onClick)?.mode && E(`emitter`, e.interactivity.events.onClick.mode)
        }
    }
    ,
    Ei = new WeakMap
}
);
async function ki(e) {
    await e.addInteractor(`externalTrail`, e => new Pi(e))
}
var Ai, ji, Mi, Ni, Pi, Fi = e( () => {
    q(),
    Ai = class {
        constructor() {
            this.delay = 1,
            this.pauseOnStop = !1,
            this.quantity = 1
        }
        load(e) {
            e && (e.delay !== void 0 && (this.delay = e.delay),
            e.quantity !== void 0 && (this.quantity = e.quantity),
            e.particles !== void 0 && (this.particles = O({}, e.particles)),
            e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop))
        }
    }
    ,
    ji = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Mi = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Pi = class extends K {
        constructor(e) {
            super(e),
            Ni.set(this, void 0),
            ji(this, Ni, e, `f`),
            this.delay = 0
        }
        clear() {}
        init() {}
        async interact(e) {
            var t, n, r, i;
            if (!this.container.retina.reduceFactor)
                return;
            let a = Mi(this, Ni, `f`)
              , o = a.actualOptions
              , s = o.interactivity.modes.trail;
            if (!s)
                return;
            let c = 1e3 * s.delay / this.container.retina.reduceFactor;
            if (this.delay < c && (this.delay += e.value),
            this.delay < c)
                return;
            let l = !0;
            s.pauseOnStop && (a.interactivity.mouse.position === this.lastPosition || (t = a.interactivity.mouse.position)?.x === (n = this.lastPosition)?.x && (r = a.interactivity.mouse.position)?.y === (i = this.lastPosition)?.y) && (l = !1),
            a.interactivity.mouse.position ? this.lastPosition = {
                x: a.interactivity.mouse.position.x,
                y: a.interactivity.mouse.position.y
            } : delete this.lastPosition,
            l && a.particles.push(s.quantity, a.interactivity.mouse, s.particles),
            this.delay -= c
        }
        isEnabled(e) {
            var t;
            let n = this.container
              , r = n.actualOptions
              , i = n.interactivity.mouse
              , a = ((t = e?.interactivity) ?? r.interactivity).events;
            return i.clicking && i.inside && !!i.position && E(`trail`, a.onClick.mode) || i.inside && !!i.position && E(`trail`, a.onHover.mode)
        }
        loadModeOptions(e, ...t) {
            e.trail ||= new Ai;
            for (let n of t)
                e.trail.load(n?.trail)
        }
        reset() {}
    }
    ,
    Ni = new WeakMap
}
);
function Ii(e, t, n) {
    let r = k(n.color);
    if (r) {
        e.beginPath(),
        e.moveTo(t[0].x, t[0].y);
        for (let n of t)
            e.lineTo(n.x, n.y);
        e.closePath(),
        e.strokeStyle = A(r),
        e.lineWidth = n.width,
        e.stroke()
    }
}
function Li(e, t, n, r) {
    e.translate(r.x, r.y);
    let i = k(n.color);
    i && (e.strokeStyle = A(i, n.opacity),
    e.lineWidth = n.width,
    e.stroke(t))
}
function Ri(e, t, n) {
    var r;
    let i = [];
    for (let a of e) {
        let e = a.element.pathSegList
          , o = (r = e?.numberOfItems) ?? 0
          , s = {
            x: 0,
            y: 0
        };
        for (let r = 0; r < o; r++) {
            let a = e?.getItem(r)
              , o = c.SVGPathSeg;
            switch (a?.pathSegType) {
            case o.PATHSEG_MOVETO_ABS:
            case o.PATHSEG_LINETO_ABS:
            case o.PATHSEG_CURVETO_CUBIC_ABS:
            case o.PATHSEG_CURVETO_QUADRATIC_ABS:
            case o.PATHSEG_ARC_ABS:
            case o.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
            case o.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                {
                    let e = a;
                    s.x = e.x,
                    s.y = e.y;
                    break
                }
            case o.PATHSEG_LINETO_HORIZONTAL_ABS:
                s.x = a.x;
                break;
            case o.PATHSEG_LINETO_VERTICAL_ABS:
                s.y = a.y;
                break;
            case o.PATHSEG_LINETO_REL:
            case o.PATHSEG_MOVETO_REL:
            case o.PATHSEG_CURVETO_CUBIC_REL:
            case o.PATHSEG_CURVETO_QUADRATIC_REL:
            case o.PATHSEG_ARC_REL:
            case o.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
            case o.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                {
                    let e = a;
                    s.x += e.x,
                    s.y += e.y;
                    break
                }
            case o.PATHSEG_LINETO_HORIZONTAL_REL:
                s.x += a.x;
                break;
            case o.PATHSEG_LINETO_VERTICAL_REL:
                s.y += a.y;
                break;
            case o.PATHSEG_UNKNOWN:
            case o.PATHSEG_CLOSEPATH:
                continue
            }
            i.push({
                x: s.x * t + n.x,
                y: s.y * t + n.y
            })
        }
    }
    return i
}
function zi(e, t, n) {
    let {dx: r, dy: i} = C(n, e)
      , {dx: a, dy: o} = C(t, e)
      , s = (r * a + i * o) / (a ** 2 + o ** 2)
      , c = {
        x: e.x + a * s,
        y: e.x + o * s,
        isOnSegment: s >= 0 && s <= 1
    };
    return s < 0 ? (c.x = e.x,
    c.y = e.y) : s > 1 && (c.x = t.x,
    c.y = t.y),
    c
}
function Bi(e, t, n) {
    let {dx: r, dy: i} = C(e, t)
      , a = Math.atan2(i, r)
      , o = P.create(Math.sin(a), -Math.cos(a))
      , s = 2 * (n.x * o.x + n.y * o.y);
    o.multTo(s),
    n.subFrom(o)
}
async function Vi(e) {
    let t = new ta(e);
    await e.addPlugin(t)
}
var Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na = e( () => {
    a(),
    q(),
    function() {
        try {
            if (c === void 0)
                return;
            `SVGPathSeg`in c || (c.SVGPathSeg = function(e, t, n) {
                this.pathSegType = e,
                this.pathSegTypeAsLetter = t,
                this._owningPathSegList = n
            }
            ,
            c.SVGPathSeg.prototype.classname = `SVGPathSeg`,
            c.SVGPathSeg.PATHSEG_UNKNOWN = 0,
            c.SVGPathSeg.PATHSEG_CLOSEPATH = 1,
            c.SVGPathSeg.PATHSEG_MOVETO_ABS = 2,
            c.SVGPathSeg.PATHSEG_MOVETO_REL = 3,
            c.SVGPathSeg.PATHSEG_LINETO_ABS = 4,
            c.SVGPathSeg.PATHSEG_LINETO_REL = 5,
            c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6,
            c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7,
            c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8,
            c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9,
            c.SVGPathSeg.PATHSEG_ARC_ABS = 10,
            c.SVGPathSeg.PATHSEG_ARC_REL = 11,
            c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12,
            c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13,
            c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14,
            c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15,
            c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16,
            c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17,
            c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18,
            c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19,
            c.SVGPathSeg.prototype._segmentChanged = function() {
                this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
            }
            ,
            c.SVGPathSegClosePath = function(e) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CLOSEPATH, `z`, e)
            }
            ,
            c.SVGPathSegClosePath.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegClosePath.prototype.toString = function() {
                return `[object SVGPathSegClosePath]`
            }
            ,
            c.SVGPathSegClosePath.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter
            }
            ,
            c.SVGPathSegClosePath.prototype.clone = function() {
                return new c.SVGPathSegClosePath(void 0)
            }
            ,
            c.SVGPathSegMovetoAbs = function(e, t, n) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_MOVETO_ABS, `M`, e),
                this._x = t,
                this._y = n
            }
            ,
            c.SVGPathSegMovetoAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegMovetoAbs.prototype.toString = function() {
                return `[object SVGPathSegMovetoAbs]`
            }
            ,
            c.SVGPathSegMovetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegMovetoAbs.prototype.clone = function() {
                return new c.SVGPathSegMovetoAbs(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegMovetoAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegMovetoAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegMovetoRel = function(e, t, n) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_MOVETO_REL, `m`, e),
                this._x = t,
                this._y = n
            }
            ,
            c.SVGPathSegMovetoRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegMovetoRel.prototype.toString = function() {
                return `[object SVGPathSegMovetoRel]`
            }
            ,
            c.SVGPathSegMovetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegMovetoRel.prototype.clone = function() {
                return new c.SVGPathSegMovetoRel(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegMovetoRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegMovetoRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegLinetoAbs = function(e, t, n) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_ABS, `L`, e),
                this._x = t,
                this._y = n
            }
            ,
            c.SVGPathSegLinetoAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegLinetoAbs.prototype.toString = function() {
                return `[object SVGPathSegLinetoAbs]`
            }
            ,
            c.SVGPathSegLinetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegLinetoAbs.prototype.clone = function() {
                return new c.SVGPathSegLinetoAbs(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegLinetoAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegLinetoAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegLinetoRel = function(e, t, n) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_REL, `l`, e),
                this._x = t,
                this._y = n
            }
            ,
            c.SVGPathSegLinetoRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegLinetoRel.prototype.toString = function() {
                return `[object SVGPathSegLinetoRel]`
            }
            ,
            c.SVGPathSegLinetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegLinetoRel.prototype.clone = function() {
                return new c.SVGPathSegLinetoRel(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegLinetoRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegLinetoRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoCubicAbs = function(e, t, n, r, i, a, o) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, `C`, e),
                this._x = t,
                this._y = n,
                this._x1 = r,
                this._y1 = i,
                this._x2 = a,
                this._y2 = o
            }
            ,
            c.SVGPathSegCurvetoCubicAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
                return `[object SVGPathSegCurvetoCubicAbs]`
            }
            ,
            c.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x1 + ` ` + this._y1 + ` ` + this._x2 + ` ` + this._y2 + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
                return new c.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, `x1`, {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, `y1`, {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, `x2`, {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, `y2`, {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoCubicRel = function(e, t, n, r, i, a, o) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, `c`, e),
                this._x = t,
                this._y = n,
                this._x1 = r,
                this._y1 = i,
                this._x2 = a,
                this._y2 = o
            }
            ,
            c.SVGPathSegCurvetoCubicRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
                return `[object SVGPathSegCurvetoCubicRel]`
            }
            ,
            c.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x1 + ` ` + this._y1 + ` ` + this._x2 + ` ` + this._y2 + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
                return new c.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, `x1`, {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, `y1`, {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, `x2`, {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, `y2`, {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoQuadraticAbs = function(e, t, n, r, i) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, `Q`, e),
                this._x = t,
                this._y = n,
                this._x1 = r,
                this._y1 = i
            }
            ,
            c.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
                return `[object SVGPathSegCurvetoQuadraticAbs]`
            }
            ,
            c.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x1 + ` ` + this._y1 + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
                return new c.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, `x1`, {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, `y1`, {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoQuadraticRel = function(e, t, n, r, i) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, `q`, e),
                this._x = t,
                this._y = n,
                this._x1 = r,
                this._y1 = i
            }
            ,
            c.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
                return `[object SVGPathSegCurvetoQuadraticRel]`
            }
            ,
            c.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x1 + ` ` + this._y1 + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
                return new c.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, `x1`, {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, `y1`, {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegArcAbs = function(e, t, n, r, i, a, o, s) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_ARC_ABS, `A`, e),
                this._x = t,
                this._y = n,
                this._r1 = r,
                this._r2 = i,
                this._angle = a,
                this._largeArcFlag = o,
                this._sweepFlag = s
            }
            ,
            c.SVGPathSegArcAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegArcAbs.prototype.toString = function() {
                return `[object SVGPathSegArcAbs]`
            }
            ,
            c.SVGPathSegArcAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._r1 + ` ` + this._r2 + ` ` + this._angle + ` ` + (this._largeArcFlag ? `1` : `0`) + ` ` + (this._sweepFlag ? `1` : `0`) + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegArcAbs.prototype.clone = function() {
                return new c.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)
            }
            ,
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `r1`, {
                get: function() {
                    return this._r1
                },
                set: function(e) {
                    this._r1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `r2`, {
                get: function() {
                    return this._r2
                },
                set: function(e) {
                    this._r2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `angle`, {
                get: function() {
                    return this._angle
                },
                set: function(e) {
                    this._angle = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `largeArcFlag`, {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(e) {
                    this._largeArcFlag = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcAbs.prototype, `sweepFlag`, {
                get: function() {
                    return this._sweepFlag
                },
                set: function(e) {
                    this._sweepFlag = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegArcRel = function(e, t, n, r, i, a, o, s) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_ARC_REL, `a`, e),
                this._x = t,
                this._y = n,
                this._r1 = r,
                this._r2 = i,
                this._angle = a,
                this._largeArcFlag = o,
                this._sweepFlag = s
            }
            ,
            c.SVGPathSegArcRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegArcRel.prototype.toString = function() {
                return `[object SVGPathSegArcRel]`
            }
            ,
            c.SVGPathSegArcRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._r1 + ` ` + this._r2 + ` ` + this._angle + ` ` + (this._largeArcFlag ? `1` : `0`) + ` ` + (this._sweepFlag ? `1` : `0`) + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegArcRel.prototype.clone = function() {
                return new c.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)
            }
            ,
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `r1`, {
                get: function() {
                    return this._r1
                },
                set: function(e) {
                    this._r1 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `r2`, {
                get: function() {
                    return this._r2
                },
                set: function(e) {
                    this._r2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `angle`, {
                get: function() {
                    return this._angle
                },
                set: function(e) {
                    this._angle = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `largeArcFlag`, {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(e) {
                    this._largeArcFlag = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegArcRel.prototype, `sweepFlag`, {
                get: function() {
                    return this._sweepFlag
                },
                set: function(e) {
                    this._sweepFlag = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegLinetoHorizontalAbs = function(e, t) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, `H`, e),
                this._x = t
            }
            ,
            c.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
                return `[object SVGPathSegLinetoHorizontalAbs]`
            }
            ,
            c.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x
            }
            ,
            c.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
                return new c.SVGPathSegLinetoHorizontalAbs(void 0,this._x)
            }
            ,
            Object.defineProperty(c.SVGPathSegLinetoHorizontalAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegLinetoHorizontalRel = function(e, t) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, `h`, e),
                this._x = t
            }
            ,
            c.SVGPathSegLinetoHorizontalRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
                return `[object SVGPathSegLinetoHorizontalRel]`
            }
            ,
            c.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x
            }
            ,
            c.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
                return new c.SVGPathSegLinetoHorizontalRel(void 0,this._x)
            }
            ,
            Object.defineProperty(c.SVGPathSegLinetoHorizontalRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegLinetoVerticalAbs = function(e, t) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, `V`, e),
                this._y = t
            }
            ,
            c.SVGPathSegLinetoVerticalAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
                return `[object SVGPathSegLinetoVerticalAbs]`
            }
            ,
            c.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._y
            }
            ,
            c.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
                return new c.SVGPathSegLinetoVerticalAbs(void 0,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegLinetoVerticalAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegLinetoVerticalRel = function(e, t) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, `v`, e),
                this._y = t
            }
            ,
            c.SVGPathSegLinetoVerticalRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
                return `[object SVGPathSegLinetoVerticalRel]`
            }
            ,
            c.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._y
            }
            ,
            c.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
                return new c.SVGPathSegLinetoVerticalRel(void 0,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegLinetoVerticalRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoCubicSmoothAbs = function(e, t, n, r, i) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, `S`, e),
                this._x = t,
                this._y = n,
                this._x2 = r,
                this._y2 = i
            }
            ,
            c.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
                return `[object SVGPathSegCurvetoCubicSmoothAbs]`
            }
            ,
            c.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x2 + ` ` + this._y2 + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
                return new c.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, `x2`, {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, `y2`, {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoCubicSmoothRel = function(e, t, n, r, i) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, `s`, e),
                this._x = t,
                this._y = n,
                this._x2 = r,
                this._y2 = i
            }
            ,
            c.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
                return `[object SVGPathSegCurvetoCubicSmoothRel]`
            }
            ,
            c.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x2 + ` ` + this._y2 + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
                return new c.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, `x2`, {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, `y2`, {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoQuadraticSmoothAbs = function(e, t, n) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, `T`, e),
                this._x = t,
                this._y = n
            }
            ,
            c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
                return `[object SVGPathSegCurvetoQuadraticSmoothAbs]`
            }
            ,
            c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
                return new c.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathSegCurvetoQuadraticSmoothRel = function(e, t, n) {
                c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, `t`, e),
                this._x = t,
                this._y = n
            }
            ,
            c.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(c.SVGPathSeg.prototype),
            c.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
                return `[object SVGPathSegCurvetoQuadraticSmoothRel]`
            }
            ,
            c.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + ` ` + this._x + ` ` + this._y
            }
            ,
            c.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
                return new c.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothRel.prototype, `x`, {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothRel.prototype, `y`, {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            c.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
                return new c.SVGPathSegClosePath(void 0)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(e, t) {
                return new c.SVGPathSegMovetoAbs(void 0,e,t)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(e, t) {
                return new c.SVGPathSegMovetoRel(void 0,e,t)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(e, t) {
                return new c.SVGPathSegLinetoAbs(void 0,e,t)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(e, t) {
                return new c.SVGPathSegLinetoRel(void 0,e,t)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(e, t, n, r, i, a) {
                return new c.SVGPathSegCurvetoCubicAbs(void 0,e,t,n,r,i,a)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(e, t, n, r, i, a) {
                return new c.SVGPathSegCurvetoCubicRel(void 0,e,t,n,r,i,a)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(e, t, n, r) {
                return new c.SVGPathSegCurvetoQuadraticAbs(void 0,e,t,n,r)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(e, t, n, r) {
                return new c.SVGPathSegCurvetoQuadraticRel(void 0,e,t,n,r)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegArcAbs = function(e, t, n, r, i, a, o) {
                return new c.SVGPathSegArcAbs(void 0,e,t,n,r,i,a,o)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegArcRel = function(e, t, n, r, i, a, o) {
                return new c.SVGPathSegArcRel(void 0,e,t,n,r,i,a,o)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(e) {
                return new c.SVGPathSegLinetoHorizontalAbs(void 0,e)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(e) {
                return new c.SVGPathSegLinetoHorizontalRel(void 0,e)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(e) {
                return new c.SVGPathSegLinetoVerticalAbs(void 0,e)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(e) {
                return new c.SVGPathSegLinetoVerticalRel(void 0,e)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(e, t, n, r) {
                return new c.SVGPathSegCurvetoCubicSmoothAbs(void 0,e,t,n,r)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(e, t, n, r) {
                return new c.SVGPathSegCurvetoCubicSmoothRel(void 0,e,t,n,r)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(e, t) {
                return new c.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,e,t)
            }
            ,
            c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(e, t) {
                return new c.SVGPathSegCurvetoQuadraticSmoothRel(void 0,e,t)
            }
            ,
            `getPathSegAtLength`in c.SVGPathElement.prototype || (c.SVGPathElement.prototype.getPathSegAtLength = function(e) {
                if (e === void 0 || !isFinite(e))
                    throw `Invalid arguments.`;
                let t = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);
                t.setAttribute(`d`, this.getAttribute(`d`));
                let n = t.pathSegList.numberOfItems - 1;
                if (n <= 0)
                    return 0;
                do {
                    if (t.pathSegList.removeItem(n),
                    e > t.getTotalLength())
                        break;
                    n--
                } while (n > 0);
                return n
            }
            )),
            (!(`SVGPathSegList`in c) || !(`appendItem`in c.SVGPathSegList.prototype)) && (c.SVGPathSegList = function(e) {
                this._pathElement = e,
                this._list = this._parsePath(this._pathElement.getAttribute(`d`)),
                this._mutationObserverConfig = {
                    attributes: !0,
                    attributeFilter: [`d`]
                },
                this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)),
                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }
            ,
            c.SVGPathSegList.prototype.classname = `SVGPathSegList`,
            Object.defineProperty(c.SVGPathSegList.prototype, `numberOfItems`, {
                get: function() {
                    return this._checkPathSynchronizedToList(),
                    this._list.length
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathSegList.prototype, `length`, {
                get: function() {
                    return this._checkPathSynchronizedToList(),
                    this._list.length
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathElement.prototype, `pathSegList`, {
                get: function() {
                    return this._pathSegList ||= new c.SVGPathSegList(this),
                    this._pathSegList
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathElement.prototype, `normalizedPathSegList`, {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathElement.prototype, `animatedPathSegList`, {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }),
            Object.defineProperty(c.SVGPathElement.prototype, `animatedNormalizedPathSegList`, {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }),
            c.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
                this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
            }
            ,
            c.SVGPathSegList.prototype._updateListFromPathMutations = function(e) {
                if (!this._pathElement)
                    return;
                let t = !1;
                e.forEach(function(e) {
                    e.attributeName == `d` && (t = !0)
                }),
                t && (this._list = this._parsePath(this._pathElement.getAttribute(`d`)))
            }
            ,
            c.SVGPathSegList.prototype._writeListToPath = function() {
                this._pathElementMutationObserver.disconnect(),
                this._pathElement.setAttribute(`d`, c.SVGPathSegList._pathSegArrayAsString(this._list)),
                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }
            ,
            c.SVGPathSegList.prototype.segmentChanged = function(e) {
                this._writeListToPath()
            }
            ,
            c.SVGPathSegList.prototype.clear = function() {
                this._checkPathSynchronizedToList(),
                this._list.forEach(function(e) {
                    e._owningPathSegList = null
                }),
                this._list = [],
                this._writeListToPath()
            }
            ,
            c.SVGPathSegList.prototype.initialize = function(e) {
                return this._checkPathSynchronizedToList(),
                this._list = [e],
                e._owningPathSegList = this,
                this._writeListToPath(),
                e
            }
            ,
            c.SVGPathSegList.prototype._checkValidIndex = function(e) {
                if (isNaN(e) || e < 0 || e >= this.numberOfItems)
                    throw `INDEX_SIZE_ERR`
            }
            ,
            c.SVGPathSegList.prototype.getItem = function(e) {
                return this._checkPathSynchronizedToList(),
                this._checkValidIndex(e),
                this._list[e]
            }
            ,
            c.SVGPathSegList.prototype.insertItemBefore = function(e, t) {
                return this._checkPathSynchronizedToList(),
                t > this.numberOfItems && (t = this.numberOfItems),
                e._owningPathSegList && (e = e.clone()),
                this._list.splice(t, 0, e),
                e._owningPathSegList = this,
                this._writeListToPath(),
                e
            }
            ,
            c.SVGPathSegList.prototype.replaceItem = function(e, t) {
                return this._checkPathSynchronizedToList(),
                e._owningPathSegList && (e = e.clone()),
                this._checkValidIndex(t),
                this._list[t] = e,
                e._owningPathSegList = this,
                this._writeListToPath(),
                e
            }
            ,
            c.SVGPathSegList.prototype.removeItem = function(e) {
                this._checkPathSynchronizedToList(),
                this._checkValidIndex(e);
                let t = this._list[e];
                return this._list.splice(e, 1),
                this._writeListToPath(),
                t
            }
            ,
            c.SVGPathSegList.prototype.appendItem = function(e) {
                return this._checkPathSynchronizedToList(),
                e._owningPathSegList && (e = e.clone()),
                this._list.push(e),
                e._owningPathSegList = this,
                this._writeListToPath(),
                e
            }
            ,
            c.SVGPathSegList._pathSegArrayAsString = function(e) {
                let t = ``
                  , n = !0;
                return e.forEach(function(e) {
                    n ? (n = !1,
                    t += e._asPathString()) : t += ` ` + e._asPathString()
                }),
                t
            }
            ,
            c.SVGPathSegList.prototype._parsePath = function(e) {
                if (!e || e.length == 0)
                    return [];
                let t = this
                  , n = function() {
                    this.pathSegList = []
                };
                n.prototype.appendSegment = function(e) {
                    this.pathSegList.push(e)
                }
                ;
                let r = function(e) {
                    this._string = e,
                    this._currentIndex = 0,
                    this._endIndex = this._string.length,
                    this._previousCommand = c.SVGPathSeg.PATHSEG_UNKNOWN,
                    this._skipOptionalSpaces()
                };
                r.prototype._isCurrentSpace = function() {
                    let e = this._string[this._currentIndex];
                    return e <= ` ` && (e == ` ` || e == `
` || e == `	` || e == `\r` || e == `\f`)
                }
                ,
                r.prototype._skipOptionalSpaces = function() {
                    for (; this._currentIndex < this._endIndex && this._isCurrentSpace(); )
                        this._currentIndex++;
                    return this._currentIndex < this._endIndex
                }
                ,
                r.prototype._skipOptionalSpacesOrDelimiter = function() {
                    return this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != `,` ? !1 : (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == `,` && (this._currentIndex++,
                    this._skipOptionalSpaces()),
                    this._currentIndex < this._endIndex)
                }
                ,
                r.prototype.hasMoreData = function() {
                    return this._currentIndex < this._endIndex
                }
                ,
                r.prototype.peekSegmentType = function() {
                    let e = this._string[this._currentIndex];
                    return this._pathSegTypeFromChar(e)
                }
                ,
                r.prototype._pathSegTypeFromChar = function(e) {
                    switch (e) {
                    case `Z`:
                    case `z`:
                        return c.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case `M`:
                        return c.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case `m`:
                        return c.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case `L`:
                        return c.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case `l`:
                        return c.SVGPathSeg.PATHSEG_LINETO_REL;
                    case `C`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case `c`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case `Q`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case `q`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case `A`:
                        return c.SVGPathSeg.PATHSEG_ARC_ABS;
                    case `a`:
                        return c.SVGPathSeg.PATHSEG_ARC_REL;
                    case `H`:
                        return c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case `h`:
                        return c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case `V`:
                        return c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case `v`:
                        return c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case `S`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case `s`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case `T`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case `t`:
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return c.SVGPathSeg.PATHSEG_UNKNOWN
                    }
                }
                ,
                r.prototype._nextCommandHelper = function(e, t) {
                    return (e == `+` || e == `-` || e == `.` || e >= `0` && e <= `9`) && t != c.SVGPathSeg.PATHSEG_CLOSEPATH ? t == c.SVGPathSeg.PATHSEG_MOVETO_ABS ? c.SVGPathSeg.PATHSEG_LINETO_ABS : t == c.SVGPathSeg.PATHSEG_MOVETO_REL ? c.SVGPathSeg.PATHSEG_LINETO_REL : t : c.SVGPathSeg.PATHSEG_UNKNOWN
                }
                ,
                r.prototype.initialCommandIsMoveTo = function() {
                    if (!this.hasMoreData())
                        return !0;
                    let e = this.peekSegmentType();
                    return e == c.SVGPathSeg.PATHSEG_MOVETO_ABS || e == c.SVGPathSeg.PATHSEG_MOVETO_REL
                }
                ,
                r.prototype._parseNumber = function() {
                    let e = 0
                      , t = 0
                      , n = 1
                      , r = 0
                      , i = 1
                      , a = 1
                      , o = this._currentIndex;
                    if (this._skipOptionalSpaces(),
                    this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == `+` ? this._currentIndex++ : this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == `-` && (this._currentIndex++,
                    i = -1),
                    this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < `0` || this._string.charAt(this._currentIndex) > `9`) && this._string.charAt(this._currentIndex) != `.`)
                        return;
                    let s = this._currentIndex;
                    for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= `0` && this._string.charAt(this._currentIndex) <= `9`; )
                        this._currentIndex++;
                    if (this._currentIndex != s) {
                        let e = this._currentIndex - 1
                          , n = 1;
                        for (; e >= s; )
                            t += n * (this._string.charAt(e--) - `0`),
                            n *= 10
                    }
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == `.`) {
                        if (this._currentIndex++,
                        this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < `0` || this._string.charAt(this._currentIndex) > `9`)
                            return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= `0` && this._string.charAt(this._currentIndex) <= `9`; )
                            n *= 10,
                            r += (this._string.charAt(this._currentIndex) - `0`) / n,
                            this._currentIndex += 1
                    }
                    if (this._currentIndex != o && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == `e` || this._string.charAt(this._currentIndex) == `E`) && this._string.charAt(this._currentIndex + 1) != `x` && this._string.charAt(this._currentIndex + 1) != `m`) {
                        if (this._currentIndex++,
                        this._string.charAt(this._currentIndex) == `+` ? this._currentIndex++ : this._string.charAt(this._currentIndex) == `-` && (this._currentIndex++,
                        a = -1),
                        this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < `0` || this._string.charAt(this._currentIndex) > `9`)
                            return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= `0` && this._string.charAt(this._currentIndex) <= `9`; )
                            e *= 10,
                            e += this._string.charAt(this._currentIndex) - `0`,
                            this._currentIndex++
                    }
                    let c = t + r;
                    if (c *= i,
                    e && (c *= 10 ** (a * e)),
                    o != this._currentIndex)
                        return this._skipOptionalSpacesOrDelimiter(),
                        c
                }
                ,
                r.prototype._parseArcFlag = function() {
                    if (this._currentIndex >= this._endIndex)
                        return;
                    let e = !1
                      , t = this._string.charAt(this._currentIndex++);
                    if (t == `0`)
                        e = !1;
                    else {
                        if (t != `1`)
                            return;
                        e = !0
                    }
                    return this._skipOptionalSpacesOrDelimiter(),
                    e
                }
                ,
                r.prototype.parseSegment = function() {
                    let e = this._string[this._currentIndex]
                      , n = this._pathSegTypeFromChar(e);
                    if (n == c.SVGPathSeg.PATHSEG_UNKNOWN) {
                        if (this._previousCommand == c.SVGPathSeg.PATHSEG_UNKNOWN || (n = this._nextCommandHelper(e, this._previousCommand),
                        n == c.SVGPathSeg.PATHSEG_UNKNOWN))
                            return null
                    } else
                        this._currentIndex++;
                    this._previousCommand = n;
                    let r;
                    switch (n) {
                    case c.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new c.SVGPathSegMovetoRel(t,this._parseNumber(),this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new c.SVGPathSegMovetoAbs(t,this._parseNumber(),this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new c.SVGPathSegLinetoRel(t,this._parseNumber(),this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new c.SVGPathSegLinetoAbs(t,this._parseNumber(),this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new c.SVGPathSegLinetoHorizontalRel(t,this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new c.SVGPathSegLinetoHorizontalAbs(t,this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new c.SVGPathSegLinetoVerticalRel(t,this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new c.SVGPathSegLinetoVerticalAbs(t,this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return this._skipOptionalSpaces(),
                        new c.SVGPathSegClosePath(t);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegCurvetoCubicRel(t,r.x,r.y,r.x1,r.y1,r.x2,r.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegCurvetoCubicAbs(t,r.x,r.y,r.x1,r.y1,r.x2,r.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        return r = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegCurvetoCubicSmoothRel(t,r.x,r.y,r.x2,r.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        return r = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegCurvetoCubicSmoothAbs(t,r.x,r.y,r.x2,r.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegCurvetoQuadraticRel(t,r.x,r.y,r.x1,r.y1);
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegCurvetoQuadraticAbs(t,r.x,r.y,r.x1,r.y1);
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new c.SVGPathSegCurvetoQuadraticSmoothRel(t,this._parseNumber(),this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new c.SVGPathSegCurvetoQuadraticSmoothAbs(t,this._parseNumber(),this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_ARC_REL:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegArcRel(t,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep);
                    case c.SVGPathSeg.PATHSEG_ARC_ABS:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        },
                        new c.SVGPathSegArcAbs(t,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep);
                    default:
                        throw `Unknown path seg type.`
                    }
                }
                ;
                let i = new n
                  , a = new r(e);
                if (!a.initialCommandIsMoveTo())
                    return [];
                for (; a.hasMoreData(); ) {
                    let e = a.parseSegment();
                    if (!e)
                        return [];
                    i.appendSegment(e)
                }
                return i.pathSegList
            }
            )
        } catch (e) {
            console.warn(`An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles`, e)
        }
    }(),
    Hi = class {
        constructor() {
            this.color = new L,
            this.width = .5,
            this.opacity = 1
        }
        load(e) {
            var t;
            e && (this.color = L.create(this.color, e.color),
            typeof this.color.value == `string` && (this.opacity = (t = je(this.color.value)) ?? this.opacity),
            e.opacity !== void 0 && (this.opacity = e.opacity),
            e.width !== void 0 && (this.width = e.width))
        }
    }
    ,
    Ui = class {
        constructor() {
            this.enable = !1,
            this.stroke = new Hi
        }
        get lineColor() {
            return this.stroke.color
        }
        set lineColor(e) {
            this.stroke.color = L.create(this.stroke.color, e)
        }
        get lineWidth() {
            return this.stroke.width
        }
        set lineWidth(e) {
            this.stroke.width = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            e.enable !== void 0 && (this.enable = e.enable);
            let n = (t = e.stroke) ?? {
                color: e.lineColor,
                width: e.lineWidth
            };
            this.stroke.load(n)
        }
    }
    ,
    Wi = class {
        constructor() {
            this.arrangement = `one-per-point`
        }
        load(e) {
            e && e.arrangement !== void 0 && (this.arrangement = e.arrangement)
        }
    }
    ,
    Gi = class {
        constructor() {
            this.path = [],
            this.size = {
                height: 0,
                width: 0
            }
        }
        load(e) {
            e && (e.path !== void 0 && (this.path = e.path),
            e.size !== void 0 && (e.size.width !== void 0 && (this.size.width = e.size.width),
            e.size.height !== void 0 && (this.size.height = e.size.height)))
        }
    }
    ,
    Ki = class {
        constructor() {
            this.radius = 10,
            this.type = `path`
        }
        load(e) {
            e && (e.radius !== void 0 && (this.radius = e.radius),
            e.type !== void 0 && (this.type = e.type))
        }
    }
    ,
    qi = class {
        constructor() {
            this.draw = new Ui,
            this.enable = !1,
            this.inline = new Wi,
            this.move = new Ki,
            this.scale = 1,
            this.type = `none`
        }
        get inlineArrangement() {
            return this.inline.arrangement
        }
        set inlineArrangement(e) {
            this.inline.arrangement = e
        }
        load(e) {
            e && (this.draw.load(e.draw),
            this.inline.load(e.inline),
            this.move.load(e.move),
            e.scale !== void 0 && (this.scale = e.scale),
            e.type !== void 0 && (this.type = e.type),
            e.enable === void 0 ? this.enable = this.type !== `none` : this.enable = e.enable,
            e.url !== void 0 && (this.url = e.url),
            e.data !== void 0 && (typeof e.data == `string` ? this.data = e.data : (this.data = new Gi,
            this.data.load(e.data))),
            e.position !== void 0 && (this.position = O({}, e.position)))
        }
    }
    ,
    Ji = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Yi = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Zi = class {
        constructor(e, t) {
            this.container = e,
            Xi.set(this, void 0),
            Ji(this, Xi, t, `f`),
            this.dimension = {
                height: 0,
                width: 0
            },
            this.path2DSupported = !!c.Path2D,
            this.options = new qi,
            this.polygonMaskMoveRadius = this.options.move.radius * e.retina.pixelRatio
        }
        clickPositionValid(e) {
            let t = this.options;
            return t.enable && t.type !== `none` && t.type !== `inline` && this.checkInsidePolygon(e)
        }
        draw(e) {
            var t;
            if (!(t = this.paths)?.length)
                return;
            let n = this.options
              , r = n.draw;
            if (!n.enable || !r.enable)
                return;
            let i = this.raw;
            for (let t of this.paths) {
                let n = t.path2d
                  , a = this.path2DSupported;
                e && (a && n && this.offset ? Li(e, n, r.stroke, this.offset) : i && Ii(e, i, r.stroke))
            }
        }
        async initAsync(e) {
            this.options.load(e?.polygon);
            let t = this.options;
            this.polygonMaskMoveRadius = t.move.radius * this.container.retina.pixelRatio,
            t.enable && await this.initRawData()
        }
        particleBounce(e, t, n) {
            return this.polygonBounce(e, t, n)
        }
        particlePosition(e) {
            var t, n;
            let r = this.options;
            if (r.enable && ((n = (t = this.raw)?.length) ?? 0) > 0)
                return O({}, e || this.randomPoint())
        }
        particlesInitialization() {
            let e = this.options;
            return e.enable && e.type === `inline` && (e.inline.arrangement === `one-per-point` || e.inline.arrangement === `per-point`) ? (this.drawPoints(),
            !0) : !1
        }
        resize() {
            let e = this.container
              , t = this.options;
            t.enable && t.type !== `none` && (this.redrawTimeout && clearTimeout(this.redrawTimeout),
            this.redrawTimeout = c.setTimeout(async () => {
                await this.initRawData(!0),
                await e.particles.redraw()
            }
            , 250))
        }
        stop() {
            delete this.raw,
            delete this.paths
        }
        checkInsidePolygon(e) {
            var t, n;
            let r = this.container
              , i = this.options;
            if (!i.enable || i.type === `none` || i.type === `inline`)
                return !0;
            if (!this.raw)
                throw Error(Tt);
            let a = r.canvas.size
              , o = (t = e?.x) ?? m() * a.width
              , s = (n = e?.y) ?? m() * a.height
              , c = !1;
            for (let e = 0, t = this.raw.length - 1; e < this.raw.length; t = e++) {
                let n = this.raw[e]
                  , r = this.raw[t]
                  , i = n.y > s != r.y > s && o < (r.x - n.x) * (s - n.y) / (r.y - n.y) + n.x;
                i && (c = !c)
            }
            return i.type === `inside` ? c : i.type === `outside` && !c
        }
        createPath2D() {
            var e, t;
            let n = this.options;
            if (this.path2DSupported && (e = this.paths)?.length)
                for (let e of this.paths) {
                    let r = (t = e.element)?.getAttribute(`d`);
                    if (r) {
                        let t = new Path2D(r)
                          , i = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`).createSVGMatrix()
                          , a = new Path2D
                          , o = i.scale(n.scale);
                        a.addPath ? (a.addPath(t, o),
                        e.path2d = a) : delete e.path2d
                    } else
                        delete e.path2d;
                    !e.path2d && this.raw && (e.path2d = new Path2D,
                    e.path2d.moveTo(this.raw[0].x, this.raw[0].y),
                    this.raw.forEach( (t, n) => {
                        var r;
                        n > 0 && ((r = e.path2d) == null || r.lineTo(t.x, t.y))
                    }
                    ),
                    e.path2d.closePath())
                }
        }
        async downloadSvgPath(e, t) {
            let n = this.options
              , r = e || n.url
              , i = t != null && t;
            if (!r || this.paths !== void 0 && !i)
                return this.raw;
            let a = await fetch(r);
            if (!a.ok)
                throw Error(`tsParticles Error - Error occurred during polygon mask download`);
            return this.parseSvgPath(await a.text(), t)
        }
        drawPoints() {
            if (this.raw)
                for (let e of this.raw)
                    this.container.particles.addParticle({
                        x: e.x,
                        y: e.y
                    })
        }
        getEquidistantPointByIndex(e) {
            var t, n, r, i, a, o, s;
            let c = this.container.actualOptions
              , l = this.options;
            if (!this.raw || !this.raw.length || !(t = this.paths)?.length)
                throw Error(wt);
            let u, d = 0, f = this.paths.reduce( (e, t) => e + t.length, 0), p = f / c.particles.number.value;
            for (let t of this.paths) {
                let n = p * e - d;
                if (n <= t.length) {
                    u = t.element.getPointAtLength(n);
                    break
                }
                d += t.length
            }
            return {
                x: ((n = u?.x) ?? 0) * l.scale + ((i = (r = this.offset)?.x) ?? 0),
                y: ((a = u?.y) ?? 0) * l.scale + ((s = (o = this.offset)?.y) ?? 0)
            }
        }
        getPointByIndex(e) {
            if (!this.raw || !this.raw.length)
                throw Error(wt);
            let t = this.raw[e % this.raw.length];
            return {
                x: t.x,
                y: t.y
            }
        }
        getRandomPoint() {
            if (!this.raw || !this.raw.length)
                throw Error(wt);
            let e = D(this.raw);
            return {
                x: e.x,
                y: e.y
            }
        }
        getRandomPointByLength() {
            var e, t, n;
            let r = this.options;
            if (!this.raw || !this.raw.length || !(e = this.paths)?.length)
                throw Error(wt);
            let i = D(this.paths)
              , a = Math.floor(m() * i.length) + 1
              , o = i.element.getPointAtLength(a);
            return {
                x: o.x * r.scale + ((t = this.offset)?.x || 0),
                y: o.y * r.scale + ((n = this.offset)?.y || 0)
            }
        }
        async initRawData(e) {
            let t = this.options;
            if (t.url)
                this.raw = await this.downloadSvgPath(t.url, e);
            else if (t.data) {
                let n = t.data, r;
                if (typeof n != `string`) {
                    let e = n.path instanceof Array ? n.path.map(e => `<path d="${e}" />`).join(``) : `<path d="${n.path}" />`
                      , t = `xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"`;
                    r = `<svg ${t} width="${n.size.width}" height="${n.size.height}">${e}</svg>`
                } else
                    r = n;
                this.raw = this.parseSvgPath(r, e)
            }
            this.createPath2D(),
            Yi(this, Xi, `f`).dispatchEvent(`polygonMaskLoaded`, {
                container: this.container
            })
        }
        parseSvgPath(e, t) {
            var n, r, i;
            let a = t != null && t;
            if (this.paths !== void 0 && !a)
                return this.raw;
            let o = this.container
              , s = this.options
              , c = new DOMParser
              , l = c.parseFromString(e, `image/svg+xml`)
              , u = l.getElementsByTagName(`svg`)[0]
              , d = u.getElementsByTagName(`path`);
            d.length || (d = l.getElementsByTagName(`path`)),
            this.paths = [];
            for (let e = 0; e < d.length; e++) {
                let t = d.item(e);
                t && this.paths.push({
                    element: t,
                    length: t.getTotalLength()
                })
            }
            let f = o.retina.pixelRatio
              , p = s.scale / f;
            this.dimension.width = parseFloat((n = u.getAttribute(`width`)) ?? `0`) * p,
            this.dimension.height = parseFloat((r = u.getAttribute(`height`)) ?? `0`) * p;
            let m = (i = s.position) ?? {
                x: 50,
                y: 50
            };
            return this.offset = {
                x: o.canvas.size.width * m.x / (100 * f) - this.dimension.width / 2,
                y: o.canvas.size.height * m.y / (100 * f) - this.dimension.height / 2
            },
            Ri(this.paths, p, this.offset)
        }
        polygonBounce(e, t, n) {
            let r = this.options;
            if (!this.raw || !r.enable || n !== `top`)
                return !1;
            if (r.type === `inside` || r.type === `outside`) {
                let t, n, r, i = e.getPosition(), a = e.getRadius();
                for (let o = 0, s = this.raw.length - 1; o < this.raw.length; s = o++) {
                    let c = this.raw[o]
                      , l = this.raw[s];
                    t = zi(c, l, i);
                    let u = C(i, t);
                    if ([n,r] = [u.dx, u.dy],
                    u.distance < a)
                        return Bi(c, l, e.velocity),
                        !0
                }
                if (t && n !== void 0 && r !== void 0 && !this.checkInsidePolygon(i)) {
                    let n = {
                        x: 1,
                        y: 1
                    };
                    return e.position.x >= t.x && (n.x = -1),
                    e.position.y >= t.y && (n.y = -1),
                    e.position.x = t.x + 2 * a * n.x,
                    e.position.y = t.y + 2 * a * n.y,
                    e.velocity.mult(-1),
                    !0
                }
            } else if (r.type === `inline` && e.initialPosition) {
                let t = w(e.initialPosition, e.getPosition());
                if (t > this.polygonMaskMoveRadius)
                    return e.velocity.x = e.velocity.y / 2 - e.velocity.x,
                    e.velocity.y = e.velocity.x / 2 - e.velocity.y,
                    !0
            }
            return !1
        }
        randomPoint() {
            let e = this.container, t = this.options, n;
            if (t.type === `inline`)
                switch (t.inline.arrangement) {
                case `random-point`:
                    n = this.getRandomPoint();
                    break;
                case `random-length`:
                    n = this.getRandomPointByLength();
                    break;
                case `equidistant`:
                    n = this.getEquidistantPointByIndex(e.particles.count);
                    break;
                case `one-per-point`:
                case `per-point`:
                default:
                    n = this.getPointByIndex(e.particles.count)
                }
            else
                n = {
                    x: m() * e.canvas.size.width,
                    y: m() * e.canvas.size.height
                };
            return this.checkInsidePolygon(n) ? n : this.randomPoint()
        }
    }
    ,
    Xi = new WeakMap,
    Qi = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    $i = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    ta = class {
        constructor(e) {
            ea.set(this, void 0),
            this.id = `polygonMask`,
            Qi(this, ea, e, `f`)
        }
        getPlugin(e) {
            return new Zi(e,$i(this, ea, `f`))
        }
        loadOptions(e, t) {
            if (!this.needsPlugin(t))
                return;
            let n = e
              , r = n.polygon;
            r?.load === void 0 && (n.polygon = r = new qi),
            r.load(t?.polygon)
        }
        needsPlugin(e) {
            var t, n, r;
            return (n = (t = e?.polygon)?.enable) ?? ((r = e?.polygon)?.type !== void 0 && e.polygon.type !== `none`)
        }
    }
    ,
    ea = new WeakMap
}
);
function ra(e, t) {
    let n = e.options.roll;
    if (!e.roll || !n?.enable)
        return;
    let r = e.roll.speed * t.factor
      , i = 2 * Math.PI;
    e.roll.angle += r,
    e.roll.angle > i && (e.roll.angle -= i)
}
async function ia(e) {
    await e.addParticleUpdater(`roll`, () => new sa)
}
var aa, oa, sa, ca = e( () => {
    q(),
    aa = class {
        constructor() {
            this.enable = !1,
            this.value = 0
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.value !== void 0 && (this.value = x(e.value)))
        }
    }
    ,
    oa = class {
        constructor() {
            this.darken = new aa,
            this.enable = !1,
            this.enlighten = new aa,
            this.mode = `vertical`,
            this.speed = 25
        }
        load(e) {
            e && (e.backColor !== void 0 && (this.backColor = L.create(this.backColor, e.backColor)),
            this.darken.load(e.darken),
            e.enable !== void 0 && (this.enable = e.enable),
            this.enlighten.load(e.enlighten),
            e.mode !== void 0 && (this.mode = e.mode),
            e.speed !== void 0 && (this.speed = x(e.speed)))
        }
    }
    ,
    sa = class {
        getTransformValues(e) {
            var t;
            let n = (t = e.roll)?.enable && e.roll
              , r = n && n.horizontal
              , i = n && n.vertical;
            return {
                a: r ? Math.cos(n.angle) : void 0,
                d: i ? Math.sin(n.angle) : void 0
            }
        }
        init(e) {
            let t = e.options.roll;
            if (t?.enable)
                if (e.roll = {
                    enable: t.enable,
                    horizontal: t.mode === `horizontal` || t.mode === `both`,
                    vertical: t.mode === `vertical` || t.mode === `both`,
                    angle: m() * Math.PI * 2,
                    speed: v(t.speed) / 360
                },
                t.backColor)
                    e.backColor = ke(t.backColor);
                else if (t.darken.enable && t.enlighten.enable) {
                    let n = m() >= .5 ? `darken` : `enlighten`;
                    e.roll.alter = {
                        type: n,
                        value: v(n === `darken` ? t.darken.value : t.enlighten.value)
                    }
                } else
                    t.darken.enable ? e.roll.alter = {
                        type: `darken`,
                        value: v(t.darken.value)
                    } : t.enlighten.enable && (e.roll.alter = {
                        type: `enlighten`,
                        value: v(t.enlighten.value)
                    });
            else
                e.roll = {
                    enable: !1,
                    horizontal: !1,
                    vertical: !1,
                    angle: 0,
                    speed: 0
                }
        }
        isEnabled(e) {
            let t = e.options.roll;
            return !e.destroyed && !e.spawning && !!t?.enable
        }
        loadOptions(e, ...t) {
            e.roll ||= new oa;
            for (let n of t)
                e.roll.load(n?.roll)
        }
        update(e, t) {
            this.isEnabled(e) && ra(e, t)
        }
    }
}
), la, ua = e( () => {
    la = e => {
        let t = (t, n) => e.load(t, n);
        t.load = (t, n, r) => {
            e.loadJSON(t, n).then(e => {
                e && r(e)
            }
            ).catch( () => {
                r(void 0)
            }
            )
        }
        ,
        t.setOnClickHandler = t => {
            e.setOnClickHandler(t)
        }
        ;
        let n = e.dom();
        return {
            particlesJS: t,
            pJSDom: n
        }
    }
}
);
function da(e, t) {
    var n, r;
    let i = e.rotate;
    if (!i)
        return;
    let a = e.options.rotate
      , o = a.animation
      , s = ((n = i.velocity) ?? 0) * t.factor
      , c = 2 * Math.PI
      , l = (r = i.decay) ?? 1;
    if (o.enable) {
        switch (i.status) {
        case 0:
            i.value += s,
            i.value > c && (i.value -= c);
            break;
        case 1:
        default:
            i.value -= s,
            i.value < 0 && (i.value += c);
            break
        }
        i.velocity && l !== 1 && (i.velocity *= l)
    }
}
async function fa(e) {
    await e.addParticleUpdater(`angle`, e => new pa(e))
}
var pa, ma = e( () => {
    q(),
    pa = class {
        constructor(e) {
            this.container = e
        }
        init(e) {
            let t = e.options.rotate;
            e.rotate = {
                enable: t.animation.enable,
                value: v(t.value) * Math.PI / 180
            };
            let n = t.direction;
            if (n === `random`) {
                let e = Math.floor(2 * m());
                n = e > 0 ? `counter-clockwise` : `clockwise`
            }
            switch (n) {
            case `counter-clockwise`:
            case `counterClockwise`:
                e.rotate.status = 1;
                break;
            case `clockwise`:
                e.rotate.status = 0;
                break
            }
            let r = e.options.rotate.animation;
            r.enable && (e.rotate.decay = 1 - v(r.decay),
            e.rotate.velocity = v(r.speed) / 360 * this.container.retina.reduceFactor,
            r.sync || (e.rotate.velocity *= m())),
            e.rotation = e.rotate.value
        }
        isEnabled(e) {
            let t = e.options.rotate
              , n = t.animation;
            return !e.destroyed && !e.spawning && n.enable && !t.path
        }
        update(e, t) {
            var n, r;
            this.isEnabled(e) && (da(e, t),
            e.rotation = (r = (n = e.rotate)?.value) ?? 0)
        }
    }
}
);
function ha(e) {
    let t = e.initialPosition
      , {dx: n, dy: r} = C(t, e.position)
      , i = Math.abs(n)
      , a = Math.abs(r)
      , o = e.retina.maxDistance.horizontal
      , s = e.retina.maxDistance.vertical;
    if (o || s) {
        if ((o && i >= o || s && a >= s) && !e.misplaced)
            e.misplaced = !!o && i > o || !!s && a > s,
            o && (e.velocity.x = e.velocity.y / 2 - e.velocity.x),
            s && (e.velocity.y = e.velocity.x / 2 - e.velocity.y);
        else if ((!o || i < o) && (!s || a < s) && e.misplaced)
            e.misplaced = !1;
        else if (e.misplaced) {
            let n = e.position
              , r = e.velocity;
            o && (n.x < t.x && r.x < 0 || n.x > t.x && r.x > 0) && (r.x *= -m()),
            s && (n.y < t.y && r.y < 0 || n.y > t.y && r.y > 0) && (r.y *= -m())
        }
    }
}
function ga(e, t) {
    let n = e.container;
    if (!e.spin)
        return;
    let r = {
        x: e.spin.direction === `clockwise` ? Math.cos : Math.sin,
        y: e.spin.direction === `clockwise` ? Math.sin : Math.cos
    };
    e.position.x = e.spin.center.x + e.spin.radius * r.x(e.spin.angle),
    e.position.y = e.spin.center.y + e.spin.radius * r.y(e.spin.angle),
    e.spin.radius += e.spin.acceleration;
    let i = Math.max(n.canvas.size.width, n.canvas.size.height);
    e.spin.radius > i / 2 ? (e.spin.radius = i / 2,
    e.spin.acceleration *= -1) : e.spin.radius < 0 && (e.spin.radius = 0,
    e.spin.acceleration *= -1),
    e.spin.angle += t / 100 * (1 - e.spin.radius / i)
}
function _a(e, t) {
    var n;
    let r = e.options
      , i = r.move.path
      , a = i.enable;
    if (!a)
        return;
    if (e.lastPathTime <= e.pathDelay) {
        e.lastPathTime += t.value;
        return
    }
    let o = (n = e.pathGenerator)?.generate(e);
    o && e.velocity.addTo(o),
    i.clamp && (e.velocity.x = h(e.velocity.x, -1, 1),
    e.velocity.y = h(e.velocity.y, -1, 1)),
    e.lastPathTime -= e.pathDelay
}
function va(e) {
    let t = e.container
      , n = t.actualOptions
      , r = E(`slow`, n.interactivity.events.onHover.mode);
    if (!r)
        return 1;
    let i = e.container.interactivity.mouse.position;
    if (!i)
        return 1;
    let a = e.getPosition()
      , o = w(i, a)
      , s = t.retina.slowModeRadius;
    if (o > s)
        return 1;
    let c = o / s || 0
      , l = n.interactivity.modes.slow.factor;
    return c / l
}
async function ya(e) {
    e.addMover(`base`, () => new ba)
}
var ba, xa = e( () => {
    q(),
    ba = class {
        init(e) {
            var t;
            let n = e.container
              , r = e.options
              , i = r.move.gravity
              , a = r.move.spin;
            if (e.gravity = {
                enable: i.enable,
                acceleration: v(i.acceleration),
                inverse: i.inverse
            },
            a.enable) {
                let r = (t = a.position) ?? {
                    x: 50,
                    y: 50
                }
                  , i = {
                    x: r.x / 100 * n.canvas.size.width,
                    y: r.y / 100 * n.canvas.size.height
                }
                  , o = e.getPosition()
                  , s = w(o, i)
                  , c = v(a.acceleration);
                e.retina.spinAcceleration = c * n.retina.pixelRatio,
                e.spin = {
                    center: i,
                    direction: e.velocity.x >= 0 ? `clockwise` : `counter-clockwise`,
                    angle: e.velocity.angle,
                    radius: s,
                    acceleration: e.retina.spinAcceleration
                }
            }
        }
        isEnabled(e) {
            return !e.destroyed && e.options.move.enable
        }
        move(e, t) {
            var n, r, i, a, o;
            let s = e.options
              , c = s.move;
            if (!c.enable)
                return;
            let l = e.container
              , u = va(e)
              , d = ((n = (a = e.retina).moveSpeed) ?? (a.moveSpeed = v(c.speed) * l.retina.pixelRatio)) * l.retina.reduceFactor
              , f = (r = (o = e.retina).moveDrift) ?? (o.moveDrift = v(e.options.move.drift) * l.retina.pixelRatio)
              , p = b(s.size.value) * l.retina.pixelRatio
              , m = c.size ? e.getRadius() / p : 1
              , h = m * u * (t.factor || 1)
              , g = 2
              , _ = d * h / g;
            _a(e, t);
            let y = e.gravity
              , x = y?.enable && y.inverse ? -1 : 1;
            y != null && y.enable && _ && (e.velocity.y += x * (y.acceleration * t.factor) / (60 * _)),
            f && _ && (e.velocity.x += f * t.factor / (60 * _));
            let S = e.moveDecay;
            S != 1 && e.velocity.multTo(S);
            let C = e.velocity.mult(_)
              , w = (i = e.retina.maxSpeed) ?? l.retina.maxSpeed;
            y?.enable && w > 0 && (!y.inverse && C.y >= 0 && C.y >= w || y.inverse && C.y <= 0 && C.y <= -w) && (C.y = x * w,
            _ && (e.velocity.y = C.y / _));
            let ee = e.options.zIndex
              , te = (1 - e.zIndexFactor) ** ee.velocityRate;
            c.spin.enable ? ga(e, _) : (te != 1 && C.multTo(te),
            e.position.addTo(C),
            c.vibrate && (e.position.x += Math.sin(e.position.x * Math.cos(e.position.y)),
            e.position.y += Math.cos(e.position.y * Math.sin(e.position.x)))),
            ha(e)
        }
    }
}
);
async function Sa(e) {
    await e.addShape(`circle`, new Ca)
}
var Ca, wa = e( () => {
    Ca = class {
        draw(e, t, n) {
            e.arc(0, 0, n, 0, 2 * Math.PI, !1)
        }
        getSidesCount() {
            return 12
        }
    }
}
);
function Ta(e, t, n, r, i) {
    var a, o;
    let s = t;
    if (!s || !n.enable)
        return;
    let c = _(n.offset)
      , l = ((a = t.velocity) ?? 0) * e.factor + 3.6 * c
      , u = (o = t.decay) ?? 1;
    i && s.status !== 0 ? (s.value -= l,
    s.value < 0 && (s.status = 0,
    s.value += s.value)) : (s.value += l,
    i && s.value > r && (s.status = 1,
    s.value -= s.value % r)),
    s.velocity && u !== 1 && (s.velocity *= u),
    s.value > r && (s.value %= r)
}
function Ea(e, t) {
    var n, r, i;
    let a = e.options.color.animation;
    (n = e.color)?.h !== void 0 && Ta(t, e.color.h, a.h, 360, !1),
    (r = e.color)?.s !== void 0 && Ta(t, e.color.s, a.s, 100, !0),
    (i = e.color)?.l !== void 0 && Ta(t, e.color.l, a.l, 100, !0)
}
async function Da(e) {
    await e.addParticleUpdater(`color`, e => new Oa(e))
}
var Oa, ka = e( () => {
    q(),
    Oa = class {
        constructor(e) {
            this.container = e
        }
        init(e) {
            let t = ke(e.options.color, e.id, e.options.reduceDuplicates);
            t && (e.color = Ve(t, e.options.color.animation, this.container.retina.reduceFactor))
        }
        isEnabled(e) {
            var t, n, r;
            let i = e.options.color.animation;
            return !e.destroyed && !e.spawning && ((t = e.color)?.h.value !== void 0 && i.h.enable || (n = e.color)?.s.value !== void 0 && i.s.enable || (r = e.color)?.l.value !== void 0 && i.l.enable)
        }
        update(e, t) {
            Ea(e, t)
        }
    }
}
);
async function Aa(e) {
    await e.addInteractor(`externalAttract`, e => new Fa(e))
}
var ja, Ma, Na, Pa, Fa, Ia = e( () => {
    q(),
    ja = class {
        constructor() {
            this.distance = 200,
            this.duration = .4,
            this.easing = `ease-out-quad`,
            this.factor = 1,
            this.maxSpeed = 50,
            this.speed = 1
        }
        load(e) {
            e && (e.distance !== void 0 && (this.distance = e.distance),
            e.duration !== void 0 && (this.duration = e.duration),
            e.easing !== void 0 && (this.easing = e.easing),
            e.factor !== void 0 && (this.factor = e.factor),
            e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed),
            e.speed !== void 0 && (this.speed = e.speed))
        }
    }
    ,
    Ma = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Na = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Fa = class extends K {
        constructor(e) {
            super(e),
            Pa.set(this, void 0),
            Ma(this, Pa, e, `f`),
            e.attract ||= {
                particles: []
            },
            this.handleClickMode = t => {
                let n = Na(this, Pa, `f`).actualOptions
                  , r = n.interactivity.modes.attract;
                if (r && t === `attract`) {
                    e.attract ||= {
                        particles: []
                    },
                    e.attract.clicking = !0,
                    e.attract.count = 0;
                    for (let t of e.attract.particles)
                        this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                    e.attract.particles = [],
                    e.attract.finish = !1,
                    setTimeout( () => {
                        e.destroyed || (e.attract ||= {
                            particles: []
                        },
                        e.attract.clicking = !1)
                    }
                    , 1e3 * r.duration)
                }
            }
        }
        clear() {}
        init() {
            let e = Na(this, Pa, `f`)
              , t = e.actualOptions.interactivity.modes.attract;
            t && (e.retina.attractModeDistance = t.distance * e.retina.pixelRatio)
        }
        async interact() {
            let e = Na(this, Pa, `f`)
              , t = e.actualOptions
              , n = e.interactivity.status === gt
              , r = t.interactivity.events
              , i = r.onHover.enable
              , a = r.onHover.mode
              , o = r.onClick.enable
              , s = r.onClick.mode;
            n && i && E(`attract`, a) ? this.hoverAttract() : o && E(`attract`, s) && this.clickAttract()
        }
        isEnabled(e) {
            var t;
            let n = Na(this, Pa, `f`)
              , r = n.actualOptions
              , i = n.interactivity.mouse
              , a = ((t = e?.interactivity) ?? r.interactivity).events;
            if ((!i.position || !a.onHover.enable) && (!i.clickPosition || !a.onClick.enable))
                return !1;
            let o = a.onHover.mode
              , s = a.onClick.mode;
            return E(`attract`, o) || E(`attract`, s)
        }
        loadModeOptions(e, ...t) {
            e.attract ||= new ja;
            for (let n of t)
                e.attract.load(n?.attract)
        }
        reset() {}
        clickAttract() {
            let e = Na(this, Pa, `f`);
            if (e.attract ||= {
                particles: []
            },
            e.attract.finish || (e.attract.count || (e.attract.count = 0),
            e.attract.count++,
            e.attract.count === e.particles.count && (e.attract.finish = !0)),
            e.attract.clicking) {
                let t = e.interactivity.mouse.clickPosition
                  , n = e.retina.attractModeDistance;
                if (!n || n < 0 || !t)
                    return;
                this.processAttract(t, n, new B(t.x,t.y,n))
            } else
                e.attract.clicking === !1 && (e.attract.particles = [])
        }
        hoverAttract() {
            let e = Na(this, Pa, `f`)
              , t = e.interactivity.mouse.position
              , n = e.retina.attractModeDistance;
            !n || n < 0 || !t || this.processAttract(t, n, new B(t.x,t.y,n))
        }
        processAttract(e, t, n) {
            let r = Na(this, Pa, `f`)
              , i = r.actualOptions.interactivity.modes.attract;
            if (!i)
                return;
            let a = r.particles.quadTree.query(n, e => this.isEnabled(e));
            for (let n of a) {
                let {dx: r, dy: a, distance: o} = C(n.position, e)
                  , s = i.speed * i.factor
                  , c = h(re(1 - o / t, i.easing) * s, 0, i.maxSpeed)
                  , l = P.create(o === 0 ? s : r / o * c, o === 0 ? s : a / o * c);
                n.position.subFrom(l)
            }
        }
    }
    ,
    Pa = new WeakMap
}
);
async function La(e) {
    await e.addInteractor(`externalBounce`, e => new Ha(e))
}
var Ra, za, Ba, Va, Ha, Ua = e( () => {
    q(),
    Ra = class {
        constructor() {
            this.distance = 200
        }
        load(e) {
            e && e.distance !== void 0 && (this.distance = e.distance)
        }
    }
    ,
    za = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Ba = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Ha = class extends K {
        constructor(e) {
            super(e),
            Va.set(this, void 0),
            za(this, Va, e, `f`)
        }
        clear() {}
        init() {
            let e = Ba(this, Va, `f`)
              , t = e.actualOptions.interactivity.modes.bounce;
            t && (e.retina.bounceModeDistance = t.distance * e.retina.pixelRatio)
        }
        async interact() {
            let e = Ba(this, Va, `f`)
              , t = e.actualOptions
              , n = t.interactivity.events
              , r = e.interactivity.status === gt
              , i = n.onHover.enable
              , a = n.onHover.mode
              , o = n.onDiv;
            r && i && E(`bounce`, a) ? this.processMouseBounce() : ye(`bounce`, o, (e, t) => this.singleSelectorBounce(e, t))
        }
        isEnabled(e) {
            var t;
            let n = Ba(this, Va, `f`)
              , r = n.actualOptions
              , i = n.interactivity.mouse
              , a = ((t = e?.interactivity) ?? r.interactivity).events
              , o = a.onDiv;
            return i.position && a.onHover.enable && E(`bounce`, a.onHover.mode) || ve(`bounce`, o)
        }
        loadModeOptions(e, ...t) {
            e.bounce ||= new Ra;
            for (let n of t)
                e.bounce.load(n?.bounce)
        }
        reset() {}
        processBounce(e, t, n) {
            let r = Ba(this, Va, `f`).particles.quadTree.query(n, e => this.isEnabled(e));
            for (let i of r)
                n instanceof B ? Ce(Se(i), {
                    position: e,
                    radius: t,
                    mass: t ** 2 * Math.PI / 2,
                    velocity: P.origin,
                    factor: P.origin
                }) : n instanceof V && we(i, _e(e, t))
        }
        processMouseBounce() {
            let e = Ba(this, Va, `f`)
              , t = e.retina.pixelRatio
              , n = 10 * t
              , r = e.interactivity.mouse.position
              , i = e.retina.bounceModeDistance;
            !i || i < 0 || !r || this.processBounce(r, i, new B(r.x,r.y,i + n))
        }
        singleSelectorBounce(e, t) {
            let n = Ba(this, Va, `f`)
              , r = document.querySelectorAll(e);
            r.length && r.forEach(e => {
                let r = e
                  , i = n.retina.pixelRatio
                  , a = {
                    x: (r.offsetLeft + r.offsetWidth / 2) * i,
                    y: (r.offsetTop + r.offsetHeight / 2) * i
                }
                  , o = r.offsetWidth / 2 * i
                  , s = 10 * i
                  , c = t.type === `circle` ? new B(a.x,a.y,o + s) : new V(r.offsetLeft * i - s,r.offsetTop * i - s,r.offsetWidth * i + 2 * s,r.offsetHeight * i + 2 * s);
                this.processBounce(a, o, c)
            }
            )
        }
    }
    ,
    Va = new WeakMap
}
);
function Wa(e, t, n, r) {
    if (t >= n) {
        let i = e + (t - n) * r;
        return h(i, e, t)
    }
    if (t < n) {
        let i = e - (n - t) * r;
        return h(i, t, e)
    }
}
async function Ga(e) {
    await e.addInteractor(`externalBubble`, e => new Xa(e))
}
var Ka, qa, Ja, Ya, X, Z, Xa, Za = e( () => {
    q(),
    Ka = class {
        constructor() {
            this.distance = 200,
            this.duration = .4,
            this.mix = !1
        }
        load(e) {
            e && (e.distance !== void 0 && (this.distance = e.distance),
            e.duration !== void 0 && (this.duration = e.duration),
            e.mix !== void 0 && (this.mix = e.mix),
            e.opacity !== void 0 && (this.opacity = e.opacity),
            e.color !== void 0 && (e.color instanceof Array ? this.color = e.color.map(e => L.create(void 0, e)) : (this.color instanceof Array && (this.color = new L),
            this.color = L.create(this.color, e.color))),
            e.size !== void 0 && (this.size = e.size))
        }
    }
    ,
    qa = class extends Ka {
        constructor() {
            super(),
            this.selectors = []
        }
        get ids() {
            return this.selectors instanceof Array ? this.selectors.map(e => e.replace(`#`, ``)) : this.selectors.replace(`#`, ``)
        }
        set ids(e) {
            this.selectors = e instanceof Array ? e.map(e => `#${e}`) : `#${e}`
        }
        load(e) {
            super.load(e),
            e && (e.ids !== void 0 && (this.ids = e.ids),
            e.selectors !== void 0 && (this.selectors = e.selectors))
        }
    }
    ,
    Ja = class extends Ka {
        load(e) {
            super.load(e),
            e && (e.divs instanceof Array ? this.divs = e.divs.map(e => {
                let t = new qa;
                return t.load(e),
                t
            }
            ) : ((this.divs instanceof Array || !this.divs) && (this.divs = new qa),
            this.divs.load(e.divs)))
        }
    }
    ,
    Ya = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    X = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Xa = class extends K {
        constructor(e) {
            super(e),
            Z.set(this, void 0),
            Ya(this, Z, e, `f`),
            e.bubble ||= {},
            this.handleClickMode = t => {
                t === `bubble` && (e.bubble ||= {},
                e.bubble.clicking = !0)
            }
        }
        clear(e, t) {
            (!e.bubble.inRange || t) && (delete e.bubble.div,
            delete e.bubble.opacity,
            delete e.bubble.radius,
            delete e.bubble.color)
        }
        init() {
            let e = X(this, Z, `f`)
              , t = e.actualOptions.interactivity.modes.bubble;
            t && (e.retina.bubbleModeDistance = t.distance * e.retina.pixelRatio,
            t.size !== void 0 && (e.retina.bubbleModeSize = t.size * e.retina.pixelRatio))
        }
        async interact() {
            let e = X(this, Z, `f`).actualOptions
              , t = e.interactivity.events
              , n = t.onHover
              , r = t.onClick
              , i = n.enable
              , a = n.mode
              , o = r.enable
              , s = r.mode
              , c = t.onDiv;
            i && E(`bubble`, a) ? this.hoverBubble() : o && E(`bubble`, s) ? this.clickBubble() : ye(`bubble`, c, (e, t) => this.singleSelectorHover(e, t))
        }
        isEnabled(e) {
            var t;
            let n = X(this, Z, `f`)
              , r = n.actualOptions
              , i = n.interactivity.mouse
              , a = ((t = e?.interactivity) ?? r.interactivity).events
              , o = a.onDiv
              , s = ve(`bubble`, o);
            if (!(s || a.onHover.enable && i.position || a.onClick.enable && i.clickPosition))
                return !1;
            let c = a.onHover.mode
              , l = a.onClick.mode;
            return E(`bubble`, c) || E(`bubble`, l) || s
        }
        loadModeOptions(e, ...t) {
            e.bubble ||= new Ja;
            for (let n of t)
                e.bubble.load(n?.bubble)
        }
        reset(e) {
            e.bubble.inRange = !1
        }
        clickBubble() {
            var e, t;
            let n = X(this, Z, `f`)
              , r = n.actualOptions
              , i = n.interactivity.mouse.clickPosition
              , a = r.interactivity.modes.bubble;
            if (!a || !i)
                return;
            n.bubble ||= {};
            let o = n.retina.bubbleModeDistance;
            if (!o || o < 0)
                return;
            let s = n.particles.quadTree.queryCircle(i, o, e => this.isEnabled(e));
            for (let r of s) {
                if (!n.bubble.clicking)
                    continue;
                r.bubble.inRange = !n.bubble.durationEnd;
                let s = r.getPosition()
                  , c = w(s, i)
                  , l = (new Date().getTime() - (n.interactivity.mouse.clickTime || 0)) / 1e3;
                l > a.duration && (n.bubble.durationEnd = !0),
                l > 2 * a.duration && (n.bubble.clicking = !1,
                n.bubble.durationEnd = !1);
                let u = {
                    bubbleObj: {
                        optValue: n.retina.bubbleModeSize,
                        value: r.bubble.radius
                    },
                    particlesObj: {
                        optValue: b(r.options.size.value) * n.retina.pixelRatio,
                        value: r.size.value
                    },
                    type: `size`
                };
                this.process(r, c, l, u);
                let d = {
                    bubbleObj: {
                        optValue: a.opacity,
                        value: r.bubble.opacity
                    },
                    particlesObj: {
                        optValue: b(r.options.opacity.value),
                        value: (t = (e = r.opacity)?.value) ?? 1
                    },
                    type: `opacity`
                };
                this.process(r, c, l, d),
                n.bubble.durationEnd ? delete r.bubble.color : c <= o ? this.hoverBubbleColor(r, c) : delete r.bubble.color
            }
        }
        hoverBubble() {
            let e = X(this, Z, `f`)
              , t = e.interactivity.mouse.position
              , n = e.retina.bubbleModeDistance;
            if (!n || n < 0 || t === void 0)
                return;
            let r = e.particles.quadTree.queryCircle(t, n, e => this.isEnabled(e));
            for (let i of r) {
                i.bubble.inRange = !0;
                let r = i.getPosition()
                  , a = w(r, t)
                  , o = 1 - a / n;
                a <= n ? o >= 0 && e.interactivity.status === gt && (this.hoverBubbleSize(i, o),
                this.hoverBubbleOpacity(i, o),
                this.hoverBubbleColor(i, o)) : this.reset(i),
                e.interactivity.status === yt && this.reset(i)
            }
        }
        hoverBubbleColor(e, t, n) {
            let r = X(this, Z, `f`).actualOptions
              , i = n ?? r.interactivity.modes.bubble;
            if (i) {
                if (!e.bubble.finalColor) {
                    let t = i.color;
                    if (!t)
                        return;
                    let n = t instanceof Array ? D(t) : t;
                    e.bubble.finalColor = ke(n)
                }
                if (e.bubble.finalColor)
                    if (i.mix) {
                        e.bubble.color = void 0;
                        let n = e.getFillColor();
                        e.bubble.color = n ? Ae(Le(n, e.bubble.finalColor, 1 - t, t)) : e.bubble.finalColor
                    } else
                        e.bubble.color = e.bubble.finalColor
            }
        }
        hoverBubbleOpacity(e, t, n) {
            var r, i, a, o;
            let s = X(this, Z, `f`)
              , c = s.actualOptions
              , l = (r = n?.opacity) ?? (i = c.interactivity.modes.bubble)?.opacity;
            if (!l)
                return;
            let u = e.options.opacity.value
              , d = (o = (a = e.opacity)?.value) ?? 1
              , f = Wa(d, l, b(u), t);
            f !== void 0 && (e.bubble.opacity = f)
        }
        hoverBubbleSize(e, t, n) {
            let r = X(this, Z, `f`)
              , i = n?.size ? n.size * r.retina.pixelRatio : r.retina.bubbleModeSize;
            if (i === void 0)
                return;
            let a = b(e.options.size.value) * r.retina.pixelRatio
              , o = e.size.value
              , s = Wa(o, i, a, t);
            s !== void 0 && (e.bubble.radius = s)
        }
        process(e, t, n, r) {
            let i = X(this, Z, `f`)
              , a = r.bubbleObj.optValue
              , o = i.actualOptions
              , s = o.interactivity.modes.bubble;
            if (!s || a === void 0)
                return;
            let c = s.duration
              , l = i.retina.bubbleModeDistance
              , u = r.particlesObj.optValue
              , d = r.bubbleObj.value
              , f = r.particlesObj.value || 0
              , p = r.type;
            if (l && !(l < 0) && a !== u)
                if (i.bubble ||= {},
                i.bubble.durationEnd)
                    d && (p === `size` && delete e.bubble.radius,
                    p === `opacity` && delete e.bubble.opacity);
                else if (t <= l) {
                    let t = d ?? f;
                    if (t !== a) {
                        let t = f - n * (f - a) / c;
                        p === `size` && (e.bubble.radius = t),
                        p === `opacity` && (e.bubble.opacity = t)
                    }
                } else
                    p === `size` && delete e.bubble.radius,
                    p === `opacity` && delete e.bubble.opacity
        }
        singleSelectorHover(e, t) {
            let n = X(this, Z, `f`)
              , r = document.querySelectorAll(e)
              , i = n.actualOptions.interactivity.modes.bubble;
            i && r.length && r.forEach(e => {
                let r = e
                  , a = n.retina.pixelRatio
                  , o = {
                    x: (r.offsetLeft + r.offsetWidth / 2) * a,
                    y: (r.offsetTop + r.offsetHeight / 2) * a
                }
                  , s = r.offsetWidth / 2 * a
                  , c = t.type === `circle` ? new B(o.x,o.y,s) : new V(r.offsetLeft * a,r.offsetTop * a,r.offsetWidth * a,r.offsetHeight * a)
                  , l = n.particles.quadTree.query(c, e => this.isEnabled(e));
                for (let e of l) {
                    if (!c.contains(e.getPosition()))
                        continue;
                    e.bubble.inRange = !0;
                    let t = i.divs
                      , n = xe(t, r);
                    (!e.bubble.div || e.bubble.div !== r) && (this.clear(e, !0),
                    e.bubble.div = r),
                    this.hoverBubbleSize(e, 1, n),
                    this.hoverBubbleOpacity(e, 1, n),
                    this.hoverBubbleColor(e, 1, n)
                }
            }
            )
        }
    }
    ,
    Z = new WeakMap
}
);
function Qa(e, t, n, r) {
    let i = Math.floor(n.getRadius() / t.getRadius())
      , a = t.getFillColor()
      , o = n.getFillColor();
    if (!a || !o)
        return;
    let s = t.getPosition()
      , c = n.getPosition()
      , l = Le(a, o, t.getRadius(), n.getRadius())
      , u = e.createLinearGradient(s.x, s.y, c.x, c.y);
    return u.addColorStop(0, Ie(a, r)),
    u.addColorStop(i > 1 ? 1 : i, A(l, r)),
    u.addColorStop(1, Ie(o, r)),
    u
}
function $a(e, t, n, r, i) {
    e.save(),
    Ue(e, r, i),
    e.lineWidth = t,
    e.strokeStyle = n,
    e.stroke(),
    e.restore()
}
function eo(e, t, n, r) {
    let i = e.actualOptions
      , a = i.interactivity.modes.connect;
    if (a)
        return Qa(t, n, r, a.links.opacity)
}
function to(e, t, n) {
    e.canvas.draw(r => {
        var i;
        let a = eo(e, r, t, n);
        if (!a)
            return;
        let o = t.getPosition()
          , s = n.getPosition();
        $a(r, (i = t.retina.linksWidth) ?? 0, a, o, s)
    }
    )
}
async function no(e) {
    await e.addInteractor(`externalConnect`, e => new co(e))
}
var ro, io, ao, oo, so, co, lo = e( () => {
    q(),
    ro = class {
        constructor() {
            this.opacity = .5
        }
        load(e) {
            e && e.opacity !== void 0 && (this.opacity = e.opacity)
        }
    }
    ,
    io = class {
        constructor() {
            this.distance = 80,
            this.links = new ro,
            this.radius = 60
        }
        get lineLinked() {
            return this.links
        }
        set lineLinked(e) {
            this.links = e
        }
        get line_linked() {
            return this.links
        }
        set line_linked(e) {
            this.links = e
        }
        load(e) {
            var t, n;
            e && (e.distance !== void 0 && (this.distance = e.distance),
            this.links.load((n = (t = e.links) ?? e.lineLinked) ?? e.line_linked),
            e.radius !== void 0 && (this.radius = e.radius))
        }
    }
    ,
    ao = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    oo = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    co = class extends K {
        constructor(e) {
            super(e),
            so.set(this, void 0),
            ao(this, so, e, `f`)
        }
        clear() {}
        init() {
            let e = oo(this, so, `f`)
              , t = e.actualOptions.interactivity.modes.connect;
            t && (e.retina.connectModeDistance = t.distance * e.retina.pixelRatio,
            e.retina.connectModeRadius = t.radius * e.retina.pixelRatio)
        }
        async interact() {
            let e = oo(this, so, `f`)
              , t = e.actualOptions;
            if (t.interactivity.events.onHover.enable && e.interactivity.status === `pointermove`) {
                let t = e.interactivity.mouse.position;
                if (!e.retina.connectModeDistance || e.retina.connectModeDistance < 0 || !e.retina.connectModeRadius || e.retina.connectModeRadius < 0 || !t)
                    return;
                let n = Math.abs(e.retina.connectModeRadius)
                  , r = e.particles.quadTree.queryCircle(t, n, e => this.isEnabled(e))
                  , i = 0;
                for (let t of r) {
                    let n = t.getPosition();
                    for (let a of r.slice(i + 1)) {
                        let r = a.getPosition()
                          , i = Math.abs(e.retina.connectModeDistance)
                          , o = Math.abs(n.x - r.x)
                          , s = Math.abs(n.y - r.y);
                        o < i && s < i && to(e, t, a)
                    }
                    ++i
                }
            }
        }
        isEnabled(e) {
            var t;
            let n = this.container
              , r = n.interactivity.mouse
              , i = ((t = e?.interactivity) ?? n.actualOptions.interactivity).events;
            return !(!i.onHover.enable || !r.position) && E(`connect`, i.onHover.mode)
        }
        loadModeOptions(e, ...t) {
            e.connect ||= new io;
            for (let n of t)
                e.connect.load(n?.connect)
        }
        reset() {}
    }
    ,
    so = new WeakMap
}
);
function uo(e, t, n, r, i, a) {
    e.save(),
    Ue(e, n, r),
    e.strokeStyle = A(i, a),
    e.lineWidth = t,
    e.stroke(),
    e.restore()
}
function fo(e, t, n, r, i) {
    e.canvas.draw(e => {
        var a;
        let o = t.getPosition();
        uo(e, (a = t.retina.linksWidth) ?? 0, o, i, n, r)
    }
    )
}
async function po(e) {
    await e.addInteractor(`externalGrab`, e => new yo(e))
}
var mo, ho, go, _o, vo, yo, bo = e( () => {
    q(),
    mo = class {
        constructor() {
            this.blink = !1,
            this.consent = !1,
            this.opacity = 1
        }
        load(e) {
            e && (e.blink !== void 0 && (this.blink = e.blink),
            e.color !== void 0 && (this.color = L.create(this.color, e.color)),
            e.consent !== void 0 && (this.consent = e.consent),
            e.opacity !== void 0 && (this.opacity = e.opacity))
        }
    }
    ,
    ho = class {
        constructor() {
            this.distance = 100,
            this.links = new mo
        }
        get lineLinked() {
            return this.links
        }
        set lineLinked(e) {
            this.links = e
        }
        get line_linked() {
            return this.links
        }
        set line_linked(e) {
            this.links = e
        }
        load(e) {
            var t, n;
            e && (e.distance !== void 0 && (this.distance = e.distance),
            this.links.load((n = (t = e.links) ?? e.lineLinked) ?? e.line_linked))
        }
    }
    ,
    go = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    _o = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    yo = class extends K {
        constructor(e) {
            super(e),
            vo.set(this, void 0),
            go(this, vo, e, `f`)
        }
        clear() {}
        init() {
            let e = _o(this, vo, `f`)
              , t = e.actualOptions.interactivity.modes.grab;
            t && (e.retina.grabModeDistance = t.distance * e.retina.pixelRatio)
        }
        async interact() {
            var e, t;
            let n = _o(this, vo, `f`)
              , r = n.actualOptions
              , i = r.interactivity;
            if (!i.modes.grab || !i.events.onHover.enable || n.interactivity.status !== gt)
                return;
            let a = n.interactivity.mouse.position;
            if (!a)
                return;
            let o = n.retina.grabModeDistance;
            if (!o || o < 0)
                return;
            let s = n.particles.quadTree.queryCircle(a, o, e => this.isEnabled(e));
            for (let r of s) {
                let s = r.getPosition()
                  , c = w(s, a);
                if (c > o)
                    continue;
                let l = i.modes.grab.links
                  , u = l.opacity
                  , d = u - c * u / o;
                if (d <= 0)
                    continue;
                let f = (e = l.color) ?? (t = r.options.links)?.color;
                if (!n.particles.grabLineColor && f) {
                    let e = i.modes.grab.links;
                    n.particles.grabLineColor = ze(f, e.blink, e.consent)
                }
                let p = Re(r, void 0, n.particles.grabLineColor);
                if (!p)
                    return;
                fo(n, r, p, d, a)
            }
        }
        isEnabled(e) {
            var t;
            let n = this.container
              , r = n.interactivity.mouse
              , i = ((t = e?.interactivity) ?? n.actualOptions.interactivity).events;
            return i.onHover.enable && !!r.position && E(`grab`, i.onHover.mode)
        }
        loadModeOptions(e, ...t) {
            e.grab ||= new ho;
            for (let n of t)
                e.grab.load(n?.grab)
        }
        reset() {}
    }
    ,
    vo = new WeakMap
}
);
function xo(e) {
    e.addInteractor(`externalPause`, e => new So(e))
}
var So, Co = e( () => {
    q(),
    So = class extends K {
        constructor(e) {
            super(e),
            this.handleClickMode = e => {
                if (e !== `pause`)
                    return;
                let t = this.container;
                t.getAnimationStatus() ? t.pause() : t.play()
            }
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
            return !0
        }
        reset() {}
    }
}
);
async function wo(e) {
    await e.addInteractor(`externalPush`, e => new ko(e))
}
var To, Eo, Do, Oo, ko, Ao = e( () => {
    q(),
    To = class {
        constructor() {
            this.default = !0,
            this.groups = [],
            this.quantity = 4
        }
        get particles_nb() {
            return this.quantity
        }
        set particles_nb(e) {
            this.quantity = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            e.default !== void 0 && (this.default = e.default),
            e.groups !== void 0 && (this.groups = e.groups.map(e => e)),
            this.groups.length || (this.default = !0);
            let n = (t = e.quantity) ?? e.particles_nb;
            n !== void 0 && (this.quantity = n)
        }
    }
    ,
    Eo = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Do = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    ko = class extends K {
        constructor(e) {
            super(e),
            Oo.set(this, void 0),
            Eo(this, Oo, e, `f`),
            this.handleClickMode = e => {
                if (e !== `push`)
                    return;
                let t = Do(this, Oo, `f`)
                  , n = t.actualOptions
                  , r = n.interactivity.modes.push;
                if (!r)
                    return;
                let i = r.quantity;
                if (i <= 0)
                    return;
                let a = D([void 0, ...r.groups])
                  , o = a === void 0 ? void 0 : t.actualOptions.particles.groups[a];
                t.particles.push(i, t.interactivity.mouse, o, a)
            }
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
            return !0
        }
        loadModeOptions(e, ...t) {
            e.push ||= new To;
            for (let n of t)
                e.push.load(n?.push)
        }
        reset() {}
    }
    ,
    Oo = new WeakMap
}
);
function jo(e) {
    e.addInteractor(`externalRemove`, e => new Io(e))
}
var Mo, No, Po, Fo, Io, Lo = e( () => {
    q(),
    Mo = class {
        constructor() {
            this.quantity = 2
        }
        get particles_nb() {
            return this.quantity
        }
        set particles_nb(e) {
            this.quantity = e
        }
        load(e) {
            var t;
            if (!e)
                return;
            let n = (t = e.quantity) ?? e.particles_nb;
            n !== void 0 && (this.quantity = n)
        }
    }
    ,
    No = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Po = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Io = class extends K {
        constructor(e) {
            super(e),
            Fo.set(this, void 0),
            No(this, Fo, e, `f`),
            this.handleClickMode = e => {
                let t = Po(this, Fo, `f`)
                  , n = t.actualOptions;
                if (!n.interactivity.modes.remove || e !== `remove`)
                    return;
                let r = n.interactivity.modes.remove.quantity;
                t.particles.removeQuantity(r)
            }
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
            return !0
        }
        loadModeOptions(e, ...t) {
            e.remove ||= new Mo;
            for (let n of t)
                e.remove.load(n?.remove)
        }
        reset() {}
    }
    ,
    Fo = new WeakMap
}
);
async function Ro(e) {
    await e.addInteractor(`externalRepulse`, e => new Wo(e))
}
var zo, Bo, Vo, Ho, Uo, Q, Wo, Go = e( () => {
    q(),
    zo = class {
        constructor() {
            this.distance = 200,
            this.duration = .4,
            this.factor = 100,
            this.speed = 1,
            this.maxSpeed = 50,
            this.easing = `ease-out-quad`
        }
        load(e) {
            e && (e.distance !== void 0 && (this.distance = e.distance),
            e.duration !== void 0 && (this.duration = e.duration),
            e.easing !== void 0 && (this.easing = e.easing),
            e.factor !== void 0 && (this.factor = e.factor),
            e.speed !== void 0 && (this.speed = e.speed),
            e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed))
        }
    }
    ,
    Bo = class extends zo {
        constructor() {
            super(),
            this.selectors = []
        }
        get ids() {
            return this.selectors instanceof Array ? this.selectors.map(e => e.replace(`#`, ``)) : this.selectors.replace(`#`, ``)
        }
        set ids(e) {
            this.selectors = e instanceof Array ? e.map( () => `#${e}`) : `#${e}`
        }
        load(e) {
            super.load(e),
            e && (e.ids !== void 0 && (this.ids = e.ids),
            e.selectors !== void 0 && (this.selectors = e.selectors))
        }
    }
    ,
    Vo = class extends zo {
        load(e) {
            super.load(e),
            e && (e.divs instanceof Array ? this.divs = e.divs.map(e => {
                let t = new Bo;
                return t.load(e),
                t
            }
            ) : ((this.divs instanceof Array || !this.divs) && (this.divs = new Bo),
            this.divs.load(e.divs)))
        }
    }
    ,
    Ho = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    Uo = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    Wo = class extends K {
        constructor(e) {
            super(e),
            Q.set(this, void 0),
            Ho(this, Q, e, `f`),
            e.repulse ||= {
                particles: []
            },
            this.handleClickMode = t => {
                let n = Uo(this, Q, `f`).actualOptions
                  , r = n.interactivity.modes.repulse;
                if (r && t === `repulse`) {
                    e.repulse ||= {
                        particles: []
                    },
                    e.repulse.clicking = !0,
                    e.repulse.count = 0;
                    for (let t of e.repulse.particles)
                        this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                    e.repulse.particles = [],
                    e.repulse.finish = !1,
                    setTimeout( () => {
                        e.destroyed || (e.repulse ||= {
                            particles: []
                        },
                        e.repulse.clicking = !1)
                    }
                    , 1e3 * r.duration)
                }
            }
        }
        clear() {}
        init() {
            let e = Uo(this, Q, `f`)
              , t = e.actualOptions.interactivity.modes.repulse;
            t && (e.retina.repulseModeDistance = t.distance * e.retina.pixelRatio)
        }
        async interact() {
            let e = Uo(this, Q, `f`)
              , t = e.actualOptions
              , n = e.interactivity.status === gt
              , r = t.interactivity.events
              , i = r.onHover.enable
              , a = r.onHover.mode
              , o = r.onClick.enable
              , s = r.onClick.mode
              , c = r.onDiv;
            n && i && E(`repulse`, a) ? this.hoverRepulse() : o && E(`repulse`, s) ? this.clickRepulse() : ye(`repulse`, c, (e, t) => this.singleSelectorRepulse(e, t))
        }
        isEnabled(e) {
            var t;
            let n = Uo(this, Q, `f`)
              , r = n.actualOptions
              , i = n.interactivity.mouse
              , a = ((t = e?.interactivity) ?? r.interactivity).events
              , o = a.onDiv
              , s = ve(`repulse`, o);
            if (!(s || a.onHover.enable && i.position || a.onClick.enable && i.clickPosition))
                return !1;
            let c = a.onHover.mode
              , l = a.onClick.mode;
            return E(`repulse`, c) || E(`repulse`, l) || s
        }
        loadModeOptions(e, ...t) {
            e.repulse ||= new Vo;
            for (let n of t)
                e.repulse.load(n?.repulse)
        }
        reset() {}
        clickRepulse() {
            let e = Uo(this, Q, `f`)
              , t = e.actualOptions.interactivity.modes.repulse;
            if (t) {
                if (e.repulse ||= {
                    particles: []
                },
                e.repulse.finish || (e.repulse.count || (e.repulse.count = 0),
                e.repulse.count++,
                e.repulse.count === e.particles.count && (e.repulse.finish = !0)),
                e.repulse.clicking) {
                    let n = e.retina.repulseModeDistance;
                    if (!n || n < 0)
                        return;
                    let r = (n / 6) ** 3
                      , i = e.interactivity.mouse.clickPosition;
                    if (i === void 0)
                        return;
                    let a = new B(i.x,i.y,r)
                      , o = e.particles.quadTree.query(a, e => this.isEnabled(e));
                    for (let n of o) {
                        let {dx: a, dy: o, distance: s} = C(i, n.position)
                          , c = s ** 2
                          , l = t.speed
                          , u = -r * l / c;
                        if (c <= r) {
                            e.repulse.particles.push(n);
                            let t = P.create(a, o);
                            t.length = u,
                            n.velocity.setTo(t)
                        }
                    }
                } else if (e.repulse.clicking === !1) {
                    for (let t of e.repulse.particles)
                        t.velocity.setTo(t.initialVelocity);
                    e.repulse.particles = []
                }
            }
        }
        hoverRepulse() {
            let e = Uo(this, Q, `f`)
              , t = e.interactivity.mouse.position
              , n = e.retina.repulseModeDistance;
            !n || n < 0 || !t || this.processRepulse(t, n, new B(t.x,t.y,n))
        }
        processRepulse(e, t, n, r) {
            var i;
            let a = Uo(this, Q, `f`)
              , o = a.particles.quadTree.query(n, e => this.isEnabled(e))
              , s = a.actualOptions.interactivity.modes.repulse;
            if (s)
                for (let n of o) {
                    let {dx: a, dy: o, distance: c} = C(n.position, e)
                      , l = ((i = r?.speed) ?? s.speed) * s.factor
                      , u = h(re(1 - c / t, s.easing) * l, 0, s.maxSpeed)
                      , d = P.create(c === 0 ? l : a / c * u, c === 0 ? l : o / c * u);
                    n.position.addTo(d)
                }
        }
        singleSelectorRepulse(e, t) {
            let n = Uo(this, Q, `f`)
              , r = n.actualOptions.interactivity.modes.repulse;
            if (!r)
                return;
            let i = document.querySelectorAll(e);
            i.length && i.forEach(e => {
                let i = e
                  , a = n.retina.pixelRatio
                  , o = {
                    x: (i.offsetLeft + i.offsetWidth / 2) * a,
                    y: (i.offsetTop + i.offsetHeight / 2) * a
                }
                  , s = i.offsetWidth / 2 * a
                  , c = t.type === `circle` ? new B(o.x,o.y,s) : new V(i.offsetLeft * a,i.offsetTop * a,i.offsetWidth * a,i.offsetHeight * a)
                  , l = r.divs
                  , u = xe(l, i);
                this.processRepulse(o, s, c, u)
            }
            )
        }
    }
    ,
    Q = new WeakMap
}
);
function Ko(e, t, n) {
    let {svgData: r} = e;
    if (!r)
        return ``;
    let i = Ie(t, n);
    if (r.includes(`fill`))
        return r.replace(Zo, () => i);
    let a = r.indexOf(`>`);
    return `${r.substring(0, a)} fill="${i}"${r.substring(a)}`
}
async function qo(e) {
    return new Promise(t => {
        e.loading = !0;
        let n = new Image;
        e.element = n,
        n.addEventListener(`load`, () => {
            e.loading = !1,
            t()
        }
        ),
        n.addEventListener(`error`, () => {
            e.element = void 0,
            e.error = !0,
            e.loading = !1,
            console.error(`Error tsParticles - loading image: ${e.source}`),
            t()
        }
        ),
        n.src = e.source
    }
    )
}
async function Jo(e) {
    if (e.type !== `svg`) {
        await qo(e);
        return
    }
    e.loading = !0;
    let t = await fetch(e.source);
    t.ok || (console.error(`Error tsParticles - Image not found`),
    e.error = !0),
    e.error || (e.svgData = await t.text()),
    e.loading = !1
}
function Yo(e, t, n, r) {
    var i, a, o;
    let s = Ko(e, n, (a = (i = r.opacity)?.value) ?? 1)
      , l = {
        color: n,
        data: Object.assign(Object.assign({}, e), {
            svgData: s
        }),
        loaded: !1,
        ratio: t.width / t.height,
        replaceColor: (o = t.replaceColor) ?? t.replace_color,
        source: t.src
    };
    return new Promise(t => {
        let n = new Blob([s],{
            type: `image/svg+xml`
        })
          , r = URL || c.URL || c.webkitURL || c
          , i = r.createObjectURL(n)
          , a = new Image;
        a.addEventListener(`load`, () => {
            l.loaded = !0,
            l.element = a,
            t(l),
            r.revokeObjectURL(i)
        }
        ),
        a.addEventListener(`error`, async () => {
            r.revokeObjectURL(i);
            let n = Object.assign(Object.assign({}, e), {
                error: !1,
                loading: !0
            });
            await qo(n),
            l.loaded = !0,
            l.element = n.element,
            t(l)
        }
        ),
        a.src = i
    }
    )
}
async function Xo(e) {
    let t = new ts;
    await e.addShape(`image`, t),
    await e.addShape(`images`, t)
}
var Zo, Qo, $o, es, ts, ns = e( () => {
    a(),
    q(),
    Zo = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi,
    Qo = function(e, t, n, r, i) {
        if (r === `m`)
            throw TypeError(`Private method is not writable`);
        if (r === `a` && !i)
            throw TypeError(`Private accessor was defined without a setter`);
        if (typeof t == `function` ? e !== t || !i : !t.has(e))
            throw TypeError(`Cannot write private member to an object whose class did not declare it`);
        return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n),
        n
    }
    ,
    $o = function(e, t, n, r) {
        if (n === `a` && !r)
            throw TypeError(`Private accessor was defined without a getter`);
        if (typeof t == `function` ? e !== t || !r : !t.has(e))
            throw TypeError(`Cannot read private member from an object whose class did not declare it`);
        return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
    }
    ,
    ts = class {
        constructor() {
            es.set(this, void 0),
            Qo(this, es, [], `f`)
        }
        addImage(e, t) {
            let n = this.getImages(e);
            n?.images.push(t)
        }
        destroy() {
            Qo(this, es, [], `f`)
        }
        draw(e, t, n, r) {
            var i;
            let a = t.image
              , o = a?.element;
            if (!o)
                return;
            let s = (i = a?.ratio) ?? 1
              , c = {
                x: -n,
                y: -n
            };
            e.globalAlpha = r,
            e.drawImage(o, c.x, c.y, 2 * n, 2 * n / s),
            e.globalAlpha = 1
        }
        getImages(e) {
            let t = $o(this, es, `f`).find(t => t.id === e.id);
            return t || ($o(this, es, `f`).push({
                id: e.id,
                images: []
            }),
            this.getImages(e))
        }
        getSidesCount() {
            return 12
        }
        loadShape(e) {
            if (e.shape !== `image` && e.shape !== `images`)
                return;
            let t = e.container
              , n = this.getImages(t).images
              , r = e.shapeData
              , i = n.find(e => e.source === r.src);
            i ? i.error : this.loadImageShape(t, r).then( () => {
                this.loadShape(e)
            }
            )
        }
        particleInit(e, t) {
            var n;
            if (t.shape !== `image` && t.shape !== `images`)
                return;
            let r = this.getImages(e).images
              , i = t.shapeData
              , a = t.getFillColor()
              , o = (n = i.replaceColor) ?? i.replace_color
              , s = r.find(e => e.source === i.src);
            s && (s.loading ? setTimeout( () => {
                this.particleInit(e, t)
            }
            ) : (async () => {
                var e, n;
                let r;
                r = s.svgData && o && a ? await Yo(s, i, a, t) : {
                    color: a,
                    data: s,
                    element: s.element,
                    loaded: !0,
                    ratio: i.width / i.height,
                    replaceColor: o,
                    source: i.src
                },
                r.ratio ||= 1;
                let c = (e = i.fill) ?? t.fill
                  , l = (n = i.close) ?? t.close
                  , u = {
                    image: r,
                    fill: c,
                    close: l
                };
                t.image = u.image,
                t.fill = u.fill,
                t.close = u.close
            }
            )())
        }
        async loadImageShape(e, t) {
            var n;
            let r = t.src;
            if (!r)
                throw Error(`Error tsParticles - No image.src`);
            try {
                let i = {
                    source: r,
                    type: r.substring(r.length - 3),
                    error: !1,
                    loading: !0
                };
                this.addImage(e, i);
                let a = (n = t.replaceColor) ?? t.replace_color ? Jo : qo;
                await a(i)
            } catch {
                throw Error(`tsParticles error - ${t.src} not found`)
            }
        }
    }
    ,
    es = new WeakMap
}
);
async function rs(e) {
    await e.addParticleUpdater(`life`, e => new ls(e))
}
var os, ss, cs, ls, us = e( () => {
    q(),
    os = class extends R {
        constructor() {
            super(),
            this.sync = !1
        }
        load(e) {
            e && (super.load(e),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    ss = class extends R {
        constructor() {
            super(),
            this.random.minimumValue = 1e-4,
            this.sync = !1
        }
        load(e) {
            e && (super.load(e),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    cs = class {
        constructor() {
            this.count = 0,
            this.delay = new os,
            this.duration = new ss
        }
        load(e) {
            e && (e.count !== void 0 && (this.count = e.count),
            this.delay.load(e.delay),
            this.duration.load(e.duration))
        }
    }
    ,
    ls = class {
        constructor(e) {
            this.container = e
        }
        init(e) {
            let t = this.container
              , n = e.options
              , r = n.life;
            r && (e.life = {
                delay: t.retina.reduceFactor ? v(r.delay.value) * (r.delay.sync ? 1 : m()) / t.retina.reduceFactor * 1e3 : 0,
                delayTime: 0,
                duration: t.retina.reduceFactor ? v(r.duration.value) * (r.duration.sync ? 1 : m()) / t.retina.reduceFactor * 1e3 : 0,
                time: 0,
                count: r.count
            },
            e.life.duration <= 0 && (e.life.duration = -1),
            e.life.count <= 0 && (e.life.count = -1),
            e.life && (e.spawning = e.life.delay > 0))
        }
        isEnabled(e) {
            return !e.destroyed
        }
        loadOptions(e, ...t) {
            e.life ||= new cs;
            for (let n of t)
                e.life.load(n?.life)
        }
        update(e, t) {
            if (!this.isEnabled(e) || !e.life)
                return;
            let n = e.life
              , r = !1;
            if (e.spawning) {
                if (n.delayTime += t.value,
                !(n.delayTime >= e.life.delay))
                    return;
                r = !0,
                e.spawning = !1,
                n.delayTime = 0,
                n.time = 0
            }
            if (n.duration === -1 || e.spawning || (r ? n.time = 0 : n.time += t.value,
            n.time < n.duration))
                return;
            if (n.time = 0,
            e.life.count > 0 && e.life.count--,
            e.life.count === 0) {
                e.destroy();
                return
            }
            let i = this.container.canvas.size
              , a = x(0, i.width)
              , o = x(0, i.width);
            e.position.x = _(a),
            e.position.y = _(o),
            e.spawning = !0,
            n.delayTime = 0,
            n.time = 0,
            e.reset();
            let s = e.options.life;
            s && (n.delay = 1e3 * v(s.delay.value),
            n.duration = 1e3 * v(s.duration.value))
        }
    }
}
);
async function ds(e) {
    await e.addShape(`line`, new fs)
}
var fs, ps = e( () => {
    fs = class {
        draw(e, t, n) {
            e.moveTo(-n / 2, 0),
            e.lineTo(n / 2, 0)
        }
        getSidesCount() {
            return 1
        }
    }
}
);
function ms(e, t, n, r) {
    switch (e.options.opacity.animation.destroy) {
    case `max`:
        t >= r && e.destroy();
        break;
    case `min`:
        t <= n && e.destroy();
        break
    }
}
function hs(e, t) {
    var n, r, i, a, o, s;
    if (!e.opacity)
        return;
    let c = e.opacity.min
      , l = e.opacity.max
      , u = (n = e.opacity.decay) ?? 1;
    if (!(e.destroyed || !e.opacity.enable || ((r = e.opacity.maxLoops) ?? 0) > 0 && ((i = e.opacity.loops) ?? 0) > ((a = e.opacity.maxLoops) ?? 0))) {
        switch (e.opacity.status) {
        case 0:
            e.opacity.value >= l ? (e.opacity.status = 1,
            e.opacity.loops || (e.opacity.loops = 0),
            e.opacity.loops++) : e.opacity.value += ((o = e.opacity.velocity) ?? 0) * t.factor;
            break;
        case 1:
            e.opacity.value <= c ? (e.opacity.status = 0,
            e.opacity.loops || (e.opacity.loops = 0),
            e.opacity.loops++) : e.opacity.value -= ((s = e.opacity.velocity) ?? 0) * t.factor;
            break
        }
        e.opacity.velocity && e.opacity.decay !== 1 && (e.opacity.velocity *= u),
        ms(e, e.opacity.value, c, l),
        e.destroyed || (e.opacity.value = h(e.opacity.value, c, l))
    }
}
async function gs(e) {
    await e.addParticleUpdater(`opacity`, e => new _s(e))
}
var _s, vs = e( () => {
    q(),
    _s = class {
        constructor(e) {
            this.container = e
        }
        init(e) {
            let t = e.options.opacity;
            e.opacity = {
                enable: t.animation.enable,
                max: b(t.value),
                min: y(t.value),
                value: v(t.value),
                loops: 0,
                maxLoops: v(t.animation.count)
            };
            let n = t.animation;
            if (n.enable) {
                e.opacity.decay = 1 - v(n.decay),
                e.opacity.status = 0;
                let r = t.value;
                switch (e.opacity.min = y(r),
                e.opacity.max = b(r),
                n.startValue) {
                case `min`:
                    e.opacity.value = e.opacity.min,
                    e.opacity.status = 0;
                    break;
                case `random`:
                    e.opacity.value = _(e.opacity),
                    e.opacity.status = m() >= .5 ? 0 : 1;
                    break;
                case `max`:
                default:
                    e.opacity.value = e.opacity.max,
                    e.opacity.status = 1;
                    break
                }
                e.opacity.velocity = v(n.speed) / 100 * this.container.retina.reduceFactor,
                n.sync || (e.opacity.velocity *= m())
            }
        }
        isEnabled(e) {
            var t, n, r, i;
            return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && (((t = e.opacity.maxLoops) ?? 0) <= 0 || ((n = e.opacity.maxLoops) ?? 0) > 0 && ((r = e.opacity.loops) ?? 0) < ((i = e.opacity.maxLoops) ?? 0))
        }
        update(e, t) {
            this.isEnabled(e) && hs(e, t)
        }
    }
}
);
function ys(e) {
    if (e.outMode !== `bounce` && e.outMode !== `bounce-horizontal` && e.outMode !== `bounceHorizontal` && e.outMode !== `split`)
        return;
    e.bounds.right < 0 ? e.particle.position.x = e.size + e.offset.x : e.bounds.left > e.canvasSize.width && (e.particle.position.x = e.canvasSize.width - e.size - e.offset.x);
    let t = e.particle.velocity.x
      , n = !1;
    if (e.direction === `right` && e.bounds.right >= e.canvasSize.width && t > 0 || e.direction === `left` && e.bounds.left <= 0 && t < 0) {
        let t = S(e.particle.options.bounce.horizontal);
        e.particle.velocity.x *= -t,
        n = !0
    }
    if (!n)
        return;
    let r = e.offset.x + e.size;
    e.bounds.right >= e.canvasSize.width ? e.particle.position.x = e.canvasSize.width - r : e.bounds.left <= 0 && (e.particle.position.x = r),
    e.outMode === `split` && e.particle.destroy()
}
function bs(e) {
    if (e.outMode !== `bounce` && e.outMode !== `bounce-vertical` && e.outMode !== `bounceVertical` && e.outMode !== `split`)
        return;
    e.bounds.bottom < 0 ? e.particle.position.y = e.size + e.offset.y : e.bounds.top > e.canvasSize.height && (e.particle.position.y = e.canvasSize.height - e.size - e.offset.y);
    let t = e.particle.velocity.y
      , n = !1;
    if (e.direction === `bottom` && e.bounds.bottom >= e.canvasSize.height && t > 0 || e.direction === `top` && e.bounds.top <= 0 && t < 0) {
        let t = S(e.particle.options.bounce.vertical);
        e.particle.velocity.y *= -t,
        n = !0
    }
    if (!n)
        return;
    let r = e.offset.y + e.size;
    e.bounds.bottom >= e.canvasSize.height ? e.particle.position.y = e.canvasSize.height - r : e.bounds.top <= 0 && (e.particle.position.y = r),
    e.outMode === `split` && e.particle.destroy()
}
async function xs(e) {
    await e.addParticleUpdater(`outModes`, e => new Es(e))
}
var Ss, Cs, ws, Ts, Es, Ds = e( () => {
    q(),
    Ss = class {
        constructor(e) {
            this.container = e,
            this.modes = [`bounce`, `bounce-vertical`, `bounce-horizontal`, `bounceVertical`, `bounceHorizontal`, `split`]
        }
        update(e, t, n, r) {
            if (!this.modes.includes(r))
                return;
            let i = this.container
              , a = !1;
            for (let[,r] of i.plugins)
                if (r.particleBounce !== void 0 && (a = r.particleBounce(e, n, t)),
                a)
                    break;
            if (a)
                return;
            let o = e.getPosition()
              , s = e.offset
              , c = e.getRadius()
              , l = _e(o, c)
              , u = i.canvas.size;
            ys({
                particle: e,
                outMode: r,
                direction: t,
                bounds: l,
                canvasSize: u,
                offset: s,
                size: c
            }),
            bs({
                particle: e,
                outMode: r,
                direction: t,
                bounds: l,
                canvasSize: u,
                offset: s,
                size: c
            })
        }
    }
    ,
    Cs = class {
        constructor(e) {
            this.container = e,
            this.modes = [`destroy`]
        }
        update(e, t, n, r) {
            if (!this.modes.includes(r))
                return;
            let i = this.container;
            switch (e.outType) {
            case `normal`:
            case `outside`:
                if (he(e.position, i.canvas.size, P.origin, e.getRadius(), t))
                    return;
                break;
            case `inside`:
                {
                    let {dx: t, dy: n} = C(e.position, e.moveCenter)
                      , {x: r, y: i} = e.velocity;
                    if (r < 0 && t > e.moveCenter.radius || i < 0 && n > e.moveCenter.radius || r >= 0 && t < -e.moveCenter.radius || i >= 0 && n < -e.moveCenter.radius)
                        return;
                    break
                }
            }
            i.particles.remove(e, void 0, !0)
        }
    }
    ,
    ws = class {
        constructor(e) {
            this.container = e,
            this.modes = [`none`]
        }
        update(e, t, n, r) {
            if (!this.modes.includes(r) || e.options.move.distance.horizontal && (t === `left` || t === `right`) || e.options.move.distance.vertical && (t === `top` || t === `bottom`))
                return;
            let i = e.options.move.gravity
              , a = this.container
              , o = a.canvas.size
              , s = e.getRadius();
            if (i.enable) {
                let n = e.position;
                (!i.inverse && n.y > o.height + s && t === `bottom` || i.inverse && n.y < -s && t === `top`) && a.particles.remove(e)
            } else {
                if (e.velocity.y > 0 && e.position.y <= o.height + s || e.velocity.y < 0 && e.position.y >= -s || e.velocity.x > 0 && e.position.x <= o.width + s || e.velocity.x < 0 && e.position.x >= -s)
                    return;
                he(e.position, a.canvas.size, P.origin, s, t) || a.particles.remove(e)
            }
        }
    }
    ,
    Ts = class {
        constructor(e) {
            this.container = e,
            this.modes = [`out`]
        }
        update(e, t, n, r) {
            if (!this.modes.includes(r))
                return;
            let i = this.container;
            switch (e.outType) {
            case `inside`:
                {
                    let {x: t, y: n} = e.velocity
                      , r = P.origin;
                    r.length = e.moveCenter.radius,
                    r.angle = e.velocity.angle + Math.PI,
                    r.addTo(P.create(e.moveCenter));
                    let {dx: a, dy: o} = C(e.position, r);
                    if (t <= 0 && a >= 0 || n <= 0 && o >= 0 || t >= 0 && a <= 0 || n >= 0 && o <= 0)
                        return;
                    e.position.x = Math.floor(_({
                        min: 0,
                        max: i.canvas.size.width
                    })),
                    e.position.y = Math.floor(_({
                        min: 0,
                        max: i.canvas.size.height
                    }));
                    let {dx: s, dy: c} = C(e.position, e.moveCenter);
                    e.direction = Math.atan2(-c, -s),
                    e.velocity.angle = e.direction;
                    break
                }
            default:
                if (he(e.position, i.canvas.size, P.origin, e.getRadius(), t))
                    return;
                switch (e.outType) {
                case `outside`:
                    {
                        e.position.x = Math.floor(_({
                            min: -e.moveCenter.radius,
                            max: e.moveCenter.radius
                        })) + e.moveCenter.x,
                        e.position.y = Math.floor(_({
                            min: -e.moveCenter.radius,
                            max: e.moveCenter.radius
                        })) + e.moveCenter.y;
                        let {dx: t, dy: n} = C(e.position, e.moveCenter);
                        e.moveCenter.radius && (e.direction = Math.atan2(n, t),
                        e.velocity.angle = e.direction);
                        break
                    }
                case `normal`:
                    {
                        let n = e.options.move.warp
                          , r = i.canvas.size
                          , a = {
                            bottom: r.height + e.getRadius() + e.offset.y,
                            left: -e.getRadius() - e.offset.x,
                            right: r.width + e.getRadius() + e.offset.x,
                            top: -e.getRadius() - e.offset.y
                        }
                          , o = e.getRadius()
                          , s = _e(e.position, o);
                        t === `right` && s.left > r.width + e.offset.x ? (e.position.x = a.left,
                        e.initialPosition.x = e.position.x,
                        n || (e.position.y = m() * r.height,
                        e.initialPosition.y = e.position.y)) : t === `left` && s.right < -e.offset.x && (e.position.x = a.right,
                        e.initialPosition.x = e.position.x,
                        n || (e.position.y = m() * r.height,
                        e.initialPosition.y = e.position.y)),
                        t === `bottom` && s.top > r.height + e.offset.y ? (n || (e.position.x = m() * r.width,
                        e.initialPosition.x = e.position.x),
                        e.position.y = a.top,
                        e.initialPosition.y = e.position.y) : t === `top` && s.bottom < -e.offset.y && (n || (e.position.x = m() * r.width,
                        e.initialPosition.x = e.position.x),
                        e.position.y = a.bottom,
                        e.initialPosition.y = e.position.y);
                        break
                    }
                }
                break
            }
        }
    }
    ,
    Es = class {
        constructor(e) {
            this.container = e,
            this.updaters = [new Ss(e), new Cs(e), new Ts(e), new ws(e)]
        }
        init() {}
        isEnabled(e) {
            return !e.destroyed && !e.spawning
        }
        update(e, t) {
            var n, r, i, a;
            let o = e.options.move.outModes;
            this.updateOutMode(e, t, (n = o.bottom) ?? o.default, `bottom`),
            this.updateOutMode(e, t, (r = o.left) ?? o.default, `left`),
            this.updateOutMode(e, t, (i = o.right) ?? o.default, `right`),
            this.updateOutMode(e, t, (a = o.top) ?? o.default, `top`)
        }
        updateOutMode(e, t, n, r) {
            for (let i of this.updaters)
                i.update(e, r, t, n)
        }
    }
}
);
async function Os(e) {
    e.addMover(`parallax`, () => new ks)
}
var ks, As = e( () => {
    q(),
    ks = class {
        init() {}
        isEnabled(e) {
            return !T() && !e.destroyed && e.container.actualOptions.interactivity.events.onHover.parallax.enable
        }
        move(e) {
            let t = e.container
              , n = t.actualOptions;
            if (T() || !n.interactivity.events.onHover.parallax.enable)
                return;
            let r = n.interactivity.events.onHover.parallax.force
              , i = t.interactivity.mouse.position;
            if (!i)
                return;
            let a = {
                x: t.canvas.size.width / 2,
                y: t.canvas.size.height / 2
            }
              , o = n.interactivity.events.onHover.parallax.smooth
              , s = e.getRadius() / r
              , c = {
                x: (i.x - a.x) * s,
                y: (i.y - a.y) * s
            };
            e.offset.x += (c.x - e.offset.x) / o,
            e.offset.y += (c.y - e.offset.y) / o
        }
    }
}
);
async function js(e) {
    await e.addInteractor(`particlesAttract`, e => new Ms(e))
}
var Ms, Ns = e( () => {
    q(),
    Ms = class extends zr {
        constructor(e) {
            super(e)
        }
        clear() {}
        init() {}
        async interact(e) {
            var t;
            let n = this.container
              , r = (t = e.retina.attractDistance) ?? n.retina.attractDistance
              , i = e.getPosition()
              , a = n.particles.quadTree.queryCircle(i, r);
            for (let t of a) {
                if (e === t || !t.options.move.attract.enable || t.destroyed || t.spawning)
                    continue;
                let n = t.getPosition()
                  , {dx: r, dy: a} = C(i, n)
                  , o = e.options.move.attract.rotate
                  , s = r / (1e3 * o.x)
                  , c = a / (1e3 * o.y)
                  , l = t.size.value / e.size.value
                  , u = 1 / l;
                e.velocity.x -= s * l,
                e.velocity.y -= c * l,
                t.velocity.x += s * u,
                t.velocity.y += c * u
            }
        }
        isEnabled(e) {
            return e.options.move.attract.enable
        }
        reset() {}
    }
}
);
function Ps(e, t, n, r) {
    if (e.getRadius() === void 0 && t.getRadius() !== void 0)
        e.destroy();
    else if (e.getRadius() !== void 0 && t.getRadius() === void 0)
        t.destroy();
    else if (e.getRadius() !== void 0 && t.getRadius() !== void 0)
        if (e.getRadius() >= t.getRadius()) {
            let i = h(e.getRadius() / t.getRadius(), 0, t.getRadius()) * n;
            e.size.value += i,
            t.size.value -= i,
            t.getRadius() <= r && (t.size.value = 0,
            t.destroy())
        } else {
            let i = h(t.getRadius() / e.getRadius(), 0, e.getRadius()) * n;
            e.size.value -= i,
            t.size.value += i,
            e.getRadius() <= r && (e.size.value = 0,
            e.destroy())
        }
}
function Fs(e, t) {
    Ce(Se(e), Se(t))
}
function Is(e, t) {
    e.unbreakable || t.unbreakable || Fs(e, t),
    e.getRadius() === void 0 && t.getRadius() !== void 0 ? e.destroy() : e.getRadius() !== void 0 && t.getRadius() === void 0 ? t.destroy() : e.getRadius() !== void 0 && t.getRadius() !== void 0 && (e.getRadius() >= t.getRadius() ? t.destroy() : e.destroy())
}
function Ls(e, t, n, r) {
    switch (e.options.collisions.mode) {
    case `absorb`:
        Ps(e, t, n, r);
        break;
    case `bounce`:
        Fs(e, t);
        break;
    case `destroy`:
        Is(e, t);
        break
    }
}
async function Rs(e) {
    await e.addInteractor(`particlesCollisions`, e => new zs(e))
}
var zs, Bs = e( () => {
    q(),
    zs = class extends zr {
        constructor(e) {
            super(e)
        }
        clear() {}
        init() {}
        async interact(e) {
            let t = this.container
              , n = e.getPosition()
              , r = e.getRadius()
              , i = t.particles.quadTree.queryCircle(n, 2 * r);
            for (let a of i) {
                if (e === a || !a.options.collisions.enable || e.options.collisions.mode !== a.options.collisions.mode || a.destroyed || a.spawning)
                    continue;
                let i = a.getPosition()
                  , o = a.getRadius();
                if (Math.abs(Math.round(n.z) - Math.round(i.z)) > r + o)
                    continue;
                let s = w(n, i)
                  , c = r + o;
                s > c || Ls(e, a, t.fpsLimit / 1e3, t.retina.pixelRatio)
            }
        }
        isEnabled(e) {
            return e.options.collisions.enable
        }
        reset() {}
    }
}
);
function Vs(e, t, n, r, i) {
    let a = w(e, t);
    if (!i || a <= n)
        return a;
    let o = {
        x: t.x - r.width,
        y: t.y
    };
    if (a = w(e, o),
    a <= n)
        return a;
    let s = {
        x: t.x - r.width,
        y: t.y - r.height
    };
    if (a = w(e, s),
    a <= n)
        return a;
    let c = {
        x: t.x,
        y: t.y - r.height
    };
    return a = w(e, c),
    a
}
async function Hs(e) {
    await e.addInteractor(`particlesLinks`, e => new Xs(e))
}
function Us(e, t, n, r, i, a, o, s, c, l, u, d) {
    let f = !1;
    if (w(n, r) <= i)
        Ue(e, n, r),
        f = !0;
    else if (o) {
        let t, o, s = {
            x: r.x - a.width,
            y: r.y
        }, c = C(n, s);
        if (c.distance <= i) {
            let e = n.y - c.dy / c.dx * n.x;
            t = {
                x: 0,
                y: e
            },
            o = {
                x: a.width,
                y: e
            }
        } else {
            let e = {
                x: r.x,
                y: r.y - a.height
            }
              , s = C(n, e);
            if (s.distance <= i) {
                let e = n.y - s.dy / s.dx * n.x
                  , r = -e / (s.dy / s.dx);
                t = {
                    x: r,
                    y: 0
                },
                o = {
                    x: r,
                    y: a.height
                }
            } else {
                let e = {
                    x: r.x - a.width,
                    y: r.y - a.height
                }
                  , s = C(n, e);
                if (s.distance <= i) {
                    let e = n.y - s.dy / s.dx * n.x
                      , r = -e / (s.dy / s.dx);
                    t = {
                        x: r,
                        y: e
                    },
                    o = {
                        x: t.x + a.width,
                        y: t.y + a.height
                    }
                }
            }
        }
        t && o && (Ue(e, n, t),
        Ue(e, r, o),
        f = !0)
    }
    if (f) {
        if (e.lineWidth = t,
        s && (e.globalCompositeOperation = c),
        e.strokeStyle = A(l, u),
        d.enable) {
            let t = k(d.color);
            t && (e.shadowBlur = d.blur,
            e.shadowColor = A(t))
        }
        e.stroke()
    }
}
function Ws(e, t, n, r, i, a, o, s) {
    We(e, t, n, r),
    i && (e.globalCompositeOperation = a),
    e.fillStyle = A(o, s),
    e.fill()
}
async function Gs(e) {
    let t = new Qs;
    await e.addPlugin(t)
}
async function Ks(e) {
    await Hs(e),
    await Gs(e)
}
var qs, Js, Ys, Xs, Zs, Qs, $s = e( () => {
    q(),
    qs = class {
        constructor() {
            this.blur = 5,
            this.color = new L,
            this.color.value = `#000`,
            this.enable = !1
        }
        load(e) {
            e && (e.blur !== void 0 && (this.blur = e.blur),
            this.color = L.create(this.color, e.color),
            e.enable !== void 0 && (this.enable = e.enable))
        }
    }
    ,
    Js = class {
        constructor() {
            this.enable = !1,
            this.frequency = 1
        }
        load(e) {
            e && (e.color !== void 0 && (this.color = L.create(this.color, e.color)),
            e.enable !== void 0 && (this.enable = e.enable),
            e.frequency !== void 0 && (this.frequency = e.frequency),
            e.opacity !== void 0 && (this.opacity = e.opacity))
        }
    }
    ,
    Ys = class {
        constructor() {
            this.blink = !1,
            this.color = new L,
            this.color.value = `#fff`,
            this.consent = !1,
            this.distance = 100,
            this.enable = !1,
            this.frequency = 1,
            this.opacity = 1,
            this.shadow = new qs,
            this.triangles = new Js,
            this.width = 1,
            this.warp = !1
        }
        load(e) {
            e && (e.id !== void 0 && (this.id = e.id),
            e.blink !== void 0 && (this.blink = e.blink),
            this.color = L.create(this.color, e.color),
            e.consent !== void 0 && (this.consent = e.consent),
            e.distance !== void 0 && (this.distance = e.distance),
            e.enable !== void 0 && (this.enable = e.enable),
            e.frequency !== void 0 && (this.frequency = e.frequency),
            e.opacity !== void 0 && (this.opacity = e.opacity),
            this.shadow.load(e.shadow),
            this.triangles.load(e.triangles),
            e.width !== void 0 && (this.width = e.width),
            e.warp !== void 0 && (this.warp = e.warp))
        }
    }
    ,
    Xs = class extends zr {
        constructor(e) {
            super(e),
            this.linkContainer = e
        }
        clear() {}
        init() {
            this.linkContainer.particles.linksColors = new Map
        }
        async interact(e) {
            var t;
            if (!e.options.links)
                return;
            e.links = [];
            let n = e.getPosition()
              , r = this.container
              , i = r.canvas.size;
            if (n.x < 0 || n.y < 0 || n.x > i.width || n.y > i.height)
                return;
            let a = e.options.links
              , o = a.opacity
              , s = (t = e.retina.linksDistance) ?? 0
              , c = a.warp
              , l = c ? new ur(n.x,n.y,s,i) : new B(n.x,n.y,s)
              , u = r.particles.quadTree.query(l);
            for (let t of u) {
                let r = t.options.links;
                if (e === t || !r?.enable || a.id !== r.id || t.spawning || t.destroyed || !t.links || e.links.map(e => e.destination).indexOf(t) !== -1 || t.links.map(e => e.destination).indexOf(e) !== -1)
                    continue;
                let l = t.getPosition();
                if (l.x < 0 || l.y < 0 || l.x > i.width || l.y > i.height)
                    continue;
                let u = Vs(n, l, s, i, c && r.warp);
                if (u > s)
                    return;
                let d = (1 - u / s) * o;
                this.setColor(e),
                e.links.push({
                    destination: t,
                    opacity: d
                })
            }
        }
        isEnabled(e) {
            var t;
            return !!(t = e.options.links)?.enable
        }
        loadParticlesOptions(e, ...t) {
            var n, r;
            e.links ||= new Ys;
            for (let i of t)
                e.links.load((r = (n = i?.links) ?? i?.lineLinked) ?? i?.line_linked)
        }
        reset() {}
        setColor(e) {
            if (!e.options.links)
                return;
            let t = this.linkContainer
              , n = e.options.links
              , r = n.id === void 0 ? t.particles.linksColor : t.particles.linksColors.get(n.id);
            if (r)
                return;
            let i = n.color;
            r = ze(i, n.blink, n.consent),
            n.id === void 0 ? t.particles.linksColor = r : t.particles.linksColors.set(n.id, r)
        }
    }
    ,
    Zs = class {
        constructor(e) {
            this.container = e
        }
        drawParticle(e, t) {
            var n;
            let r = this.container
              , i = t.options;
            if (!t.links || t.links.length <= 0)
                return;
            e.save();
            let a = t.links.filter(e => i.links && r.particles.getLinkFrequency(t, e.destination) <= i.links.frequency);
            for (let e of a)
                this.drawTriangles(r, i, t, e, a),
                e.opacity > 0 && ((n = t.retina.linksWidth) ?? 0) > 0 && this.drawLinkLine(t, e);
            e.restore()
        }
        particleCreated(e) {
            if (e.links = [],
            !e.options.links)
                return;
            let t = this.container.retina.pixelRatio;
            e.retina.linksDistance = e.options.links.distance * t,
            e.retina.linksWidth = e.options.links.width * t
        }
        particleDestroyed(e) {
            e.links = []
        }
        drawLinkLine(e, t) {
            let n = this.container
              , r = n.actualOptions
              , i = t.destination
              , a = e.getPosition()
              , o = i.getPosition()
              , s = t.opacity;
            n.canvas.draw(t => {
                var c, l, u;
                if (!e.options.links)
                    return;
                let d, f = (c = e.options.twinkle)?.lines;
                if (f?.enable) {
                    let e = f.frequency
                      , t = k(f.color)
                      , n = m() < e;
                    n && t && (d = t,
                    s = v(f.opacity))
                }
                if (!d) {
                    let t = e.options.links
                      , r = t?.id === void 0 ? n.particles.linksColor : n.particles.linksColors.get(t.id);
                    d = Re(e, i, r)
                }
                if (!d)
                    return;
                let p = (l = e.retina.linksWidth) ?? 0
                  , h = (u = e.retina.linksDistance) ?? 0;
                Us(t, p, a, o, h, n.canvas.size, e.options.links.warp, r.backgroundMask.enable, r.backgroundMask.composite, d, s, e.options.links.shadow)
            }
            )
        }
        drawLinkTriangle(e, t, n) {
            var r;
            if (!e.options.links)
                return;
            let i = this.container
              , a = i.actualOptions
              , o = t.destination
              , s = n.destination
              , c = e.options.links.triangles
              , l = (r = c.opacity) ?? (t.opacity + n.opacity) / 2;
            l <= 0 || i.canvas.draw(t => {
                var n;
                let r = e.getPosition()
                  , u = o.getPosition()
                  , d = s.getPosition()
                  , f = (n = e.retina.linksDistance) ?? 0;
                if (w(r, u) > f || w(d, u) > f || w(d, r) > f)
                    return;
                let p = k(c.color);
                if (!p) {
                    let t = e.options.links
                      , n = t?.id === void 0 ? i.particles.linksColor : i.particles.linksColors.get(t.id);
                    p = Re(e, o, n)
                }
                p && Ws(t, r, u, d, a.backgroundMask.enable, a.backgroundMask.composite, p, l)
            }
            )
        }
        drawTriangles(e, t, n, r, i) {
            var a, o, s;
            let c = r.destination
              , l = e.particles;
            if (!((a = t.links)?.triangles.enable && (o = c.options.links)?.triangles.enable))
                return;
            let u = (s = c.links)?.filter(t => {
                let n = e.particles.getLinkFrequency(c, t.destination);
                return c.options.links && n <= c.options.links.frequency && i.findIndex(e => e.destination === t.destination) >= 0
            }
            );
            if (u?.length)
                for (let e of u) {
                    let i = e.destination
                      , a = l.getTriangleFrequency(n, c, i);
                    a > t.links.triangles.frequency || this.drawLinkTriangle(n, r, e)
                }
        }
    }
    ,
    Qs = class {
        constructor() {
            this.id = `links`
        }
        getPlugin(e) {
            return new Zs(e)
        }
        loadOptions() {}
        needsPlugin() {
            return !0
        }
    }
}
);
async function ec(e) {
    await e.addShape(`polygon`, new ic)
}
async function tc(e) {
    await e.addShape(`triangle`, new ac)
}
async function nc(e) {
    await ec(e),
    await tc(e)
}
var rc, ic, ac, oc = e( () => {
    rc = class {
        draw(e, t, n) {
            let r = this.getCenter(t, n)
              , i = this.getSidesData(t, n)
              , a = i.count.numerator * i.count.denominator
              , o = i.count.numerator / i.count.denominator
              , s = 180 * (o - 2) / o
              , c = Math.PI - Math.PI * s / 180;
            if (e) {
                e.beginPath(),
                e.translate(r.x, r.y),
                e.moveTo(0, 0);
                for (let t = 0; t < a; t++)
                    e.lineTo(i.length, 0),
                    e.translate(i.length, 0),
                    e.rotate(c)
            }
        }
        getSidesCount(e) {
            var t, n;
            let r = e.shapeData;
            return (n = (t = r?.sides) ?? r?.nb_sides) ?? 5
        }
    }
    ,
    ic = class extends rc {
        getCenter(e, t) {
            let n = this.getSidesCount(e);
            return {
                x: -t / (n / 3.5),
                y: -t / .76
            }
        }
        getSidesData(e, t) {
            var n, r;
            let i = e.shapeData
              , a = (r = (n = i?.sides) ?? i?.nb_sides) ?? 5;
            return {
                count: {
                    denominator: 1,
                    numerator: a
                },
                length: 2.66 * t / (a / 3)
            }
        }
    }
    ,
    ac = class extends rc {
        getCenter(e, t) {
            return {
                x: -t,
                y: t / 1.66
            }
        }
        getSidesCount() {
            return 3
        }
        getSidesData(e, t) {
            return {
                count: {
                    denominator: 2,
                    numerator: 3
                },
                length: 2 * t
            }
        }
    }
}
);
function sc(e, t, n, r) {
    switch (e.options.size.animation.destroy) {
    case `max`:
        t >= r && e.destroy();
        break;
    case `min`:
        t <= n && e.destroy();
        break
    }
}
function cc(e, t) {
    var n, r, i, a, o;
    let s = ((n = e.size.velocity) ?? 0) * t.factor
      , c = e.size.min
      , l = e.size.max
      , u = (r = e.size.decay) ?? 1;
    if (!(e.destroyed || !e.size.enable || ((i = e.size.maxLoops) ?? 0) > 0 && ((a = e.size.loops) ?? 0) > ((o = e.size.maxLoops) ?? 0))) {
        switch (e.size.status) {
        case 0:
            e.size.value >= l ? (e.size.status = 1,
            e.size.loops || (e.size.loops = 0),
            e.size.loops++) : e.size.value += s;
            break;
        case 1:
            e.size.value <= c ? (e.size.status = 0,
            e.size.loops || (e.size.loops = 0),
            e.size.loops++) : e.size.value -= s
        }
        e.size.velocity && u !== 1 && (e.size.velocity *= u),
        sc(e, e.size.value, c, l),
        e.destroyed || (e.size.value = h(e.size.value, c, l))
    }
}
async function lc(e) {
    await e.addParticleUpdater(`size`, () => new uc)
}
var uc, dc = e( () => {
    q(),
    uc = class {
        init() {}
        isEnabled(e) {
            var t, n, r, i;
            return !e.destroyed && !e.spawning && e.size.enable && (((t = e.size.maxLoops) ?? 0) <= 0 || ((n = e.size.maxLoops) ?? 0) > 0 && ((r = e.size.loops) ?? 0) < ((i = e.size.maxLoops) ?? 0))
        }
        update(e, t) {
            this.isEnabled(e) && cc(e, t)
        }
    }
}
);
async function fc(e) {
    let t = new mc;
    await e.addShape(`edge`, t),
    await e.addShape(`square`, t)
}
var pc, mc, hc = e( () => {
    pc = Math.sqrt(2),
    mc = class {
        draw(e, t, n) {
            e.rect(-n / pc, -n / pc, 2 * n / pc, 2 * n / pc)
        }
        getSidesCount() {
            return 4
        }
    }
}
);
async function gc(e) {
    await e.addShape(`star`, new _c)
}
var _c, vc = e( () => {
    _c = class {
        draw(e, t, n) {
            var r;
            let i = t.shapeData
              , a = this.getSidesCount(t)
              , o = (r = i?.inset) ?? 2;
            e.moveTo(0, 0 - n);
            for (let t = 0; t < a; t++)
                e.rotate(Math.PI / a),
                e.lineTo(0, 0 - n * o),
                e.rotate(Math.PI / a),
                e.lineTo(0, 0 - n)
        }
        getSidesCount(e) {
            var t, n;
            let r = e.shapeData;
            return (n = (t = r?.sides) ?? r?.nb_sides) ?? 5
        }
    }
}
);
function yc(e, t, n, r, i) {
    var a, o;
    let s = t;
    if (!s || !s.enable)
        return;
    let c = _(n.offset)
      , l = ((a = t.velocity) ?? 0) * e.factor + 3.6 * c
      , u = (o = t.decay) ?? 1;
    i && s.status !== 0 ? (s.value -= l,
    s.value < 0 && (s.status = 0,
    s.value += s.value)) : (s.value += l,
    i && s.value > r && (s.status = 1,
    s.value -= s.value % r)),
    s.velocity && u !== 1 && (s.velocity *= u),
    s.value > r && (s.value %= r)
}
function bc(e, t) {
    var n, r, i, a, o, s, c, l, u, d;
    if (!(n = e.stroke)?.color)
        return;
    let f = e.stroke.color.animation
      , p = (i = (r = e.strokeColor)?.h) ?? (a = e.color)?.h;
    p && yc(t, p, f.h, 360, !1);
    let m = (s = (o = e.strokeColor)?.s) ?? (c = e.color)?.s;
    m && yc(t, m, f.s, 100, !0);
    let h = (u = (l = e.strokeColor)?.l) ?? (d = e.color)?.l;
    h && yc(t, h, f.l, 100, !0)
}
async function xc(e) {
    await e.addParticleUpdater(`strokeColor`, e => new Sc(e))
}
var Sc, Cc = e( () => {
    q(),
    Sc = class {
        constructor(e) {
            this.container = e
        }
        init(e) {
            var t, n;
            let r = this.container;
            e.stroke = e.options.stroke instanceof Array ? D(e.options.stroke, e.id, e.options.reduceDuplicates) : e.options.stroke,
            e.strokeWidth = e.stroke.width * r.retina.pixelRatio;
            let i = (t = ke(e.stroke.color)) ?? e.getFillColor();
            i && (e.strokeColor = Ve(i, (n = e.stroke.color)?.animation, r.retina.reduceFactor))
        }
        isEnabled(e) {
            var t, n, r, i;
            let a = (t = e.stroke)?.color;
            return !e.destroyed && !e.spawning && !!a && ((n = e.strokeColor)?.h.value !== void 0 && a.animation.h.enable || (r = e.strokeColor)?.s.value !== void 0 && a.animation.s.enable || (i = e.strokeColor)?.l.value !== void 0 && a.animation.l.enable)
        }
        update(e, t) {
            this.isEnabled(e) && bc(e, t)
        }
    }
}
);
async function wc(e) {
    let t = new Ec;
    for (let n of Tc)
        await e.addShape(n, t)
}
var Tc, Ec, Dc = e( () => {
    q(),
    Tc = [`text`, `character`, `char`],
    Ec = class {
        draw(e, t, n, r) {
            var i, a, o;
            let s = t.shapeData;
            if (s === void 0)
                return;
            let c = s.value;
            if (c === void 0)
                return;
            let l = t;
            l.text === void 0 && (l.text = c instanceof Array ? D(c, t.randomIndexData) : c);
            let u = l.text
              , d = (i = s.style) ?? ``
              , f = (a = s.weight) ?? `400`
              , p = 2 * Math.round(n)
              , m = (o = s.font) ?? `Verdana`
              , h = t.fill
              , g = u.length * n / 2;
            e.font = `${d} ${f} ${p}px "${m}"`;
            let _ = {
                x: -g,
                y: n / 2
            };
            e.globalAlpha = r,
            h ? e.fillText(u, _.x, _.y) : e.strokeText(u, _.x, _.y),
            e.globalAlpha = 1
        }
        getSidesCount() {
            return 12
        }
        async init(e) {
            let t = e.actualOptions;
            if (Tc.find(e => E(e, t.particles.shape.type))) {
                let e = Tc.map(e => t.particles.shape.options[e]).find(e => !!e);
                if (e instanceof Array) {
                    let t = [];
                    for (let n of e) {
                        let e = n;
                        t.push(pe(e.font, e.weight))
                    }
                    await Promise.allSettled(t)
                } else if (e !== void 0) {
                    let t = e;
                    await pe(t.font, t.weight)
                }
            }
        }
    }
}
);
async function Oc(e) {
    await ya(e),
    await Os(e),
    await Aa(e),
    await La(e),
    await Ga(e),
    await no(e),
    await po(e),
    await xo(e),
    await wo(e),
    await jo(e),
    await Ro(e),
    await js(e),
    await Rs(e),
    await Ks(e),
    await Sa(e),
    await Xo(e),
    await ds(e),
    await nc(e),
    await fc(e),
    await gc(e),
    await wc(e),
    await rs(e),
    await gs(e),
    await lc(e),
    await fa(e),
    await Da(e),
    await xc(e),
    await xs(e),
    await la(e)
}
var kc = e( () => {
    ua(),
    ma(),
    xa(),
    wa(),
    ka(),
    Ia(),
    Ua(),
    Za(),
    lo(),
    bo(),
    Co(),
    Ao(),
    Lo(),
    Go(),
    ns(),
    us(),
    ps(),
    vs(),
    Ds(),
    As(),
    Ns(),
    Bs(),
    $s(),
    oc(),
    dc(),
    hc(),
    vc(),
    Cc(),
    Dc()
}
);
function Ac(e, t) {
    var n, r;
    if (!e.tilt || !e.options.tilt)
        return;
    let i = e.options.tilt
      , a = i.animation
      , o = ((n = e.tilt.velocity) ?? 0) * t.factor
      , s = 2 * Math.PI
      , c = (r = e.tilt.decay) ?? 1;
    if (a.enable) {
        switch (e.tilt.status) {
        case 0:
            e.tilt.value += o,
            e.tilt.value > s && (e.tilt.value -= s);
            break;
        case 1:
        default:
            e.tilt.value -= o,
            e.tilt.value < 0 && (e.tilt.value += s);
            break
        }
        e.tilt.velocity && c !== 1 && (e.tilt.velocity *= c)
    }
}
async function jc(e) {
    await e.addParticleUpdater(`tilt`, e => new Pc(e))
}
var Mc, Nc, Pc, Fc = e( () => {
    q(),
    Mc = class {
        constructor() {
            this.enable = !1,
            this.speed = 0,
            this.decay = 0,
            this.sync = !1
        }
        load(e) {
            e && (e.enable !== void 0 && (this.enable = e.enable),
            e.speed !== void 0 && (this.speed = x(e.speed)),
            e.decay !== void 0 && (this.decay = x(e.decay)),
            e.sync !== void 0 && (this.sync = e.sync))
        }
    }
    ,
    Nc = class extends R {
        constructor() {
            super(),
            this.animation = new Mc,
            this.direction = `clockwise`,
            this.enable = !1,
            this.value = 0
        }
        load(e) {
            super.load(e),
            e && (this.animation.load(e.animation),
            e.direction !== void 0 && (this.direction = e.direction),
            e.enable !== void 0 && (this.enable = e.enable))
        }
    }
    ,
    Pc = class {
        constructor(e) {
            this.container = e
        }
        getTransformValues(e) {
            var t;
            let n = (t = e.tilt)?.enable && e.tilt;
            return {
                b: n ? Math.cos(n.value) * n.cosDirection : void 0,
                c: n ? Math.sin(n.value) * n.sinDirection : void 0
            }
        }
        init(e) {
            var t;
            let n = e.options.tilt;
            if (!n)
                return;
            e.tilt = {
                enable: n.enable,
                value: v(n.value) * Math.PI / 180,
                sinDirection: m() >= .5 ? 1 : -1,
                cosDirection: m() >= .5 ? 1 : -1
            };
            let r = n.direction;
            if (r === `random`) {
                let e = Math.floor(2 * m());
                r = e > 0 ? `counter-clockwise` : `clockwise`
            }
            switch (r) {
            case `counter-clockwise`:
            case `counterClockwise`:
                e.tilt.status = 1;
                break;
            case `clockwise`:
                e.tilt.status = 0;
                break
            }
            let i = (t = e.options.tilt)?.animation;
            i?.enable && (e.tilt.decay = 1 - v(i.decay),
            e.tilt.velocity = v(i.speed) / 360 * this.container.retina.reduceFactor,
            i.sync || (e.tilt.velocity *= m()))
        }
        isEnabled(e) {
            var t;
            let n = (t = e.options.tilt)?.animation;
            return !e.destroyed && !e.spawning && !!n?.enable
        }
        loadOptions(e, ...t) {
            e.tilt ||= new Nc;
            for (let n of t)
                e.tilt.load(n?.tilt)
        }
        update(e, t) {
            this.isEnabled(e) && Ac(e, t)
        }
    }
}
);
async function Ic(e) {
    await e.addParticleUpdater(`twinkle`, () => new zc)
}
var Lc, Rc, zc, Bc = e( () => {
    q(),
    Lc = class {
        constructor() {
            this.enable = !1,
            this.frequency = .05,
            this.opacity = 1
        }
        load(e) {
            e && (e.color !== void 0 && (this.color = L.create(this.color, e.color)),
            e.enable !== void 0 && (this.enable = e.enable),
            e.frequency !== void 0 && (this.frequency = e.frequency),
            e.opacity !== void 0 && (this.opacity = x(e.opacity)))
        }
    }
    ,
    Rc = class {
        constructor() {
            this.lines = new Lc,
            this.particles = new Lc
        }
        load(e) {
            e && (this.lines.load(e.lines),
            this.particles.load(e.particles))
        }
    }
    ,
    zc = class {
        getColorStyles(e, t, n, r) {
            let i = e.options
              , a = i.twinkle;
            if (!a)
                return {};
            let o = a.particles
              , s = o.enable && m() < o.frequency
              , c = e.options.zIndex
              , l = (1 - e.zIndexFactor) ** c.opacityRate
              , u = s ? v(o.opacity) * l : r
              , d = ke(o.color)
              , f = d ? Ie(d, u) : void 0
              , p = {}
              , h = s && f;
            return p.fill = h ? f : void 0,
            p.stroke = h ? f : void 0,
            p
        }
        init() {}
        isEnabled(e) {
            let t = e.options
              , n = t.twinkle;
            return !!n && n.particles.enable
        }
        loadOptions(e, ...t) {
            e.twinkle ||= new Rc;
            for (let n of t)
                e.twinkle.load(n?.twinkle)
        }
        update() {}
    }
}
);
function Vc(e, t) {
    var n;
    let r = e.options.wobble;
    if (!r?.enable || !e.wobble)
        return;
    let i = e.wobble.angleSpeed * t.factor
      , a = e.wobble.moveSpeed * t.factor
      , o = a * (((n = e.retina.wobbleDistance) ?? 0) * t.factor) / (1e3 / 60)
      , s = 2 * Math.PI;
    e.wobble.angle += i,
    e.wobble.angle > s && (e.wobble.angle -= s),
    e.position.x += o * Math.cos(e.wobble.angle),
    e.position.y += o * Math.abs(Math.sin(e.wobble.angle))
}
async function Hc(e) {
    await e.addParticleUpdater(`wobble`, e => new Gc(e))
}
var Uc, Wc, Gc, Kc = e( () => {
    q(),
    Uc = class {
        constructor() {
            this.angle = 50,
            this.move = 10
        }
        load(e) {
            e && (e.angle !== void 0 && (this.angle = x(e.angle)),
            e.move !== void 0 && (this.move = x(e.move)))
        }
    }
    ,
    Wc = class {
        constructor() {
            this.distance = 5,
            this.enable = !1,
            this.speed = new Uc
        }
        load(e) {
            if (e && (e.distance !== void 0 && (this.distance = x(e.distance)),
            e.enable !== void 0 && (this.enable = e.enable),
            e.speed !== void 0))
                if (typeof e.speed == `number`)
                    this.speed.load({
                        angle: e.speed
                    });
                else {
                    let t = e.speed;
                    t.min === void 0 ? this.speed.load(e.speed) : this.speed.load({
                        angle: t
                    })
                }
        }
    }
    ,
    Gc = class {
        constructor(e) {
            this.container = e
        }
        init(e) {
            var t;
            let n = e.options.wobble;
            n?.enable ? e.wobble = {
                angle: m() * Math.PI * 2,
                angleSpeed: v(n.speed.angle) / 360,
                moveSpeed: v(n.speed.move) / 10
            } : e.wobble = {
                angle: 0,
                angleSpeed: 0,
                moveSpeed: 0
            },
            e.retina.wobbleDistance = v((t = n?.distance) ?? 0) * this.container.retina.pixelRatio
        }
        isEnabled(e) {
            var t;
            return !e.destroyed && !e.spawning && !!(t = e.options.wobble)?.enable
        }
        loadOptions(e, ...t) {
            e.wobble ||= new Wc;
            for (let n of t)
                e.wobble.load(n?.wobble)
        }
        update(e, t) {
            this.isEnabled(e) && Vc(e, t)
        }
    }
}
);
async function qc(e) {
    await Oc(e),
    await ia(e),
    await jc(e),
    await Ic(e),
    await Hc(e),
    await ki(e),
    await Xr(e),
    await ii(e),
    await Vi(e)
}
var Jc = e( () => {
    ni(),
    Oi(),
    Fi(),
    na(),
    ca(),
    kc(),
    Fc(),
    Bc(),
    Kc()
}
);
function $(e) {
    let {background: t, color: n, radius: r, number: i, densityOptions: a, sizeOptions: c, opacityOptions: l, linksOptions: u, modeOptions: f, moveOptions: p, shapeOptions: m, clickOptions: h, hoverOptions: g, rotateOptions: _, particlesID: v, fpsOptions: y, colors: b} = e
      , {densityEnable: x, densityArea: S, densityFactor: C} = a
      , {linksEnabled: w, linksColor: ee, linksOpacity: te, linksDistance: ne, linksWidth: re} = u
      , {size: ie, sizeType: ae, sizeMin: oe, sizeMax: se} = c
      , {opacity: ce, opacityType: le, opacityMin: ue, opacityMax: T} = l
      , {connectDistance: de, connectRadius: fe, connectLinksOpacity: E, grabDistance: pe, grabLinksOpacity: me, bubbleDistance: D, bubbleSize: he, bubbleDuration: ge, repulseDistance: _e, repulseDuration: O, pushQuantity: ve, removeQuantity: ye, trailQuantity: be, trailDelay: xe} = f
      , {moveEnabled: Se, moveDirection: Ce, moveSpeed: we, moveRandom: Te, moveStraight: Ee, moveOut: De, moveVibrate: k, moveGravityEnabled: Oe, moveGravityAcceleration: ke, moveGravityMaxSpeed: Ae, moveTrailEnabled: je, moveTrailAmount: Me, moveSpinEnabled: Ne, moveSpinAcceleration: Pe, moveAttractEnabled: Fe, moveAttractDistance: A} = p
      , {shapeType: Ie, characterType: Le, imageSource: Re, imageWidth: ze, imageHeight: Be} = m
      , {clickEnabled: Ve, clickModes: He} = h
      , {hoverEnabled: Ue, hoverModes: We, hoverParallax: Ge, hoverForce: Ke, hoverSmooth: qe} = g
      , {rotateDirection: Je, rotateValue: Ye, rotateAnimation: Xe, rotateSpeed: Ze, rotateSync: Qe} = _
      , $e = s(async e => {
        await qc(e)
    }
    , [])
      , j = d.current() === d.canvas
      , et = b.length > 0;
    return o(`div`, {
        style: {
            width: `100%`,
            height: `100%`,
            overflow: `hidden`,
            backgroundColor: t,
            transform: `translateZ(0)`,
            borderRadius: r,
            position: `relative`
        },
        children: o(Jr, {
            id: v,
            init: $e,
            style: {
                width: `100%`,
                height: `100%`,
                position: `absolute`
            },
            options: {
                background: {
                    color: {
                        value: `transparent`
                    }
                },
                fpsLimit: j ? 1 : y,
                fullScreen: !1,
                pauseOnBlur: !0,
                pauseOnOutsideViewport: !0,
                interactivity: j ? {} : {
                    events: {
                        resize: !0,
                        onClick: {
                            enable: j ? !1 : Ve,
                            mode: He
                        },
                        onHover: {
                            enable: j ? !1 : Ue,
                            mode: We,
                            parallax: {
                                enable: j ? !1 : Ue ? Ge : !1,
                                force: Ke,
                                smooth: Ke
                            }
                        }
                    },
                    modes: {
                        connect: {
                            distance: de,
                            radius: fe,
                            links: {
                                opacity: E
                            }
                        },
                        grab: {
                            distance: pe,
                            links: {
                                opacity: me
                            }
                        },
                        bubble: {
                            distance: D,
                            size: he,
                            duration: ge
                        },
                        repulse: {
                            distance: _e,
                            duration: O
                        },
                        push: {
                            quantity: ve
                        },
                        remove: {
                            quantity: ye
                        },
                        trail: {
                            delay: xe,
                            quantity: be
                        }
                    }
                },
                particles: {
                    color: {
                        value: et ? b.map(e => Yc(e)) : Yc(n)
                    },
                    collisions: {
                        enable: !1
                    },
                    rotate: {
                        direction: Je,
                        value: Ye,
                        animation: !j && {
                            enable: Xe,
                            speed: Ze
                        }
                    },
                    move: {
                        direction: Ce,
                        outMode: De,
                        enable: j ? !1 : Se,
                        random: Te,
                        speed: we,
                        straight: Ee,
                        trail: {
                            enable: je,
                            length: Me
                        },
                        spin: {
                            enable: Ne,
                            acceleration: Pe
                        },
                        attract: {
                            enable: Fe,
                            distance: A
                        },
                        gravity: {
                            enable: Oe,
                            acceleration: ke,
                            maxSpeed: Ae
                        },
                        vibrate: k
                    },
                    links: {
                        enable: w,
                        color: Yc(ee),
                        opacity: te,
                        distance: ne,
                        width: re
                    },
                    number: {
                        value: i,
                        density: {
                            enable: x,
                            area: x && S,
                            factor: x && C
                        }
                    },
                    opacity: {
                        value: le ? ce : {
                            min: ue,
                            max: T
                        }
                    },
                    shape: {
                        type: Ie,
                        character: {
                            value: Le
                        },
                        image: {
                            src: Re,
                            width: ze,
                            height: Be
                        }
                    },
                    size: {
                        value: ae ? ie : {
                            min: oe,
                            max: se
                        }
                    }
                },
                detectRetina: !0
            }
        })
    })
}
var Yc, Xc = e( () => {
    r(),
    p(),
    Yr(),
    Jc(),
    i(),
    $.defaultProps = {
        background: `#000000`,
        color: `#ffffff`,
        radius: 0,
        number: 100,
        densityOptions: {
            densityEnable: !1,
            densityArea: 5e3,
            densityFactor: 50
        },
        sizeOptions: {
            sizeType: !0,
            size: 1,
            sizeMin: 1,
            sizeMax: 10
        },
        opacityOptions: {
            opacityType: !0,
            opacity: 1,
            opacityMin: 0,
            opacityMax: 1
        },
        linksOptions: {
            linksEnabled: !1,
            linksColor: `#ffffff`,
            linksOpacity: .2,
            linksDistance: 100,
            linksWidth: 1
        },
        modeOptions: {
            connectDistance: 100,
            connectRadius: 50,
            connectLinksOpacity: .2,
            grabDistance: 100,
            grabLinksOpacity: .2,
            bubbleDistance: 100,
            bubbleSize: 40,
            bubbleDuration: .4,
            repulseDistance: 200,
            repulseDuration: 1.2,
            pushQuantity: 4,
            removeQuantity: 4,
            trailDelay: .1,
            trailQuantity: 10
        },
        moveOptions: {
            moveEnabled: !0,
            moveDirection: `none`,
            moveSpeed: 1,
            moveRandom: !1,
            moveStraight: !1,
            moveOut: `out`,
            moveVibrate: !1,
            moveGravityEnabled: !1,
            moveGravityAcceleration: 1,
            moveGravityMaxSpeed: 2,
            moveTrailEnabled: !1,
            moveTrailAmount: 100,
            moveSpinEnabled: !1,
            moveSpinAcceleration: 1,
            moveAttractEnabled: !1,
            moveAttractDistance: 100
        },
        shapeOptions: {
            shapeType: `circle`,
            characterType: `😎`,
            imageWidth: 100,
            imageHeight: 100
        },
        clickOptions: {
            clickEnabled: !1,
            clickModes: `push`
        },
        hoverOptions: {
            hoverEnabled: !0,
            hoverModes: `none`,
            hoverParallax: !0,
            hoverForce: 10,
            hoverSmooth: 10
        },
        rotateOptions: {
            rotateDirection: `random`,
            rotateValue: 0,
            rotateAnimation: !1,
            rotateSpeed: 5,
            rotateSync: !1
        },
        particlesID: `Unique ID`,
        colors: []
    },
    $.displayName = `Particles`,
    f($, {
        background: {
            type: u.Color,
            defaultValue: $.defaultProps.background,
            title: `Backdrop`
        },
        color: {
            type: u.Color,
            defaultValue: $.defaultProps.color,
            title: `Color`
        },
        colors: {
            type: u.Array,
            control: {
                type: u.Color
            },
            defaultValue: $.defaultProps.colors
        },
        fpsOptions: {
            type: u.Enum,
            title: `FPS`,
            options: [30, 60, 120],
            optionTitles: [`30`, `60`, `120`],
            defaultValue: 60,
            displaySegmentedControl: !0
        },
        number: {
            type: u.Number,
            title: `Amount`,
            min: 0,
            max: 1e3,
            step: 1,
            defaultValue: $.defaultProps.number
        },
        densityOptions: {
            type: u.Object,
            title: `Density`,
            controls: {
                densityEnable: {
                    type: u.Boolean,
                    title: `Enable`,
                    defaultValue: $.defaultProps.densityOptions.densityEnable
                },
                densityArea: {
                    type: u.Number,
                    title: `Area`,
                    min: 100,
                    max: 1e4,
                    step: 1,
                    defaultValue: $.defaultProps.densityOptions.densityArea,
                    hidden: e => !e.densityEnable
                },
                densityFactor: {
                    type: u.Number,
                    title: `Factor`,
                    min: 0,
                    max: 100,
                    step: .5,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.densityOptions.densityFactor,
                    description: `Decrease the amount property when using these, as too many particles in dense areas can cause slowdowns.`,
                    hidden: e => !e.densityEnable
                }
            }
        },
        sizeOptions: {
            type: u.Object,
            title: `Size`,
            controls: {
                sizeType: {
                    type: u.Boolean,
                    title: `Type`,
                    enabledTitle: `Value`,
                    disabledTitle: `Range`,
                    defaultValue: $.defaultProps.sizeOptions.sizeType
                },
                size: {
                    type: u.Number,
                    title: `Size`,
                    min: 0,
                    max: 1e3,
                    step: .5,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.sizeOptions.size,
                    hidden: e => !e.sizeType
                },
                sizeMin: {
                    type: u.Number,
                    title: `Min`,
                    min: 0,
                    max: 1e3,
                    step: .5,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.sizeOptions.sizeMin,
                    hidden: e => e.sizeType
                },
                sizeMax: {
                    type: u.Number,
                    title: `Max`,
                    min: 0,
                    max: 1e3,
                    step: .5,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.sizeOptions.sizeMax,
                    hidden: e => e.sizeType
                }
            }
        },
        opacityOptions: {
            type: u.Object,
            title: `Opacity`,
            controls: {
                opacityType: {
                    type: u.Boolean,
                    title: `Type`,
                    enabledTitle: `Value`,
                    disabledTitle: `Range`,
                    defaultValue: $.defaultProps.opacityOptions.opacityType
                },
                opacity: {
                    type: u.Number,
                    title: `Opacity`,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.opacityOptions.opacity,
                    hidden: e => !e.opacityType
                },
                opacityMin: {
                    type: u.Number,
                    title: `Min`,
                    min: 0,
                    max: 1,
                    step: .05,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.opacityOptions.opacityMin,
                    hidden: e => e.opacityType
                },
                opacityMax: {
                    type: u.Number,
                    title: `Max`,
                    min: 0,
                    max: 1,
                    step: .05,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.opacityOptions.opacityMax,
                    hidden: e => e.opacityType
                }
            }
        },
        linksOptions: {
            type: u.Object,
            title: `Links`,
            controls: {
                linksEnabled: {
                    type: u.Boolean,
                    title: `Enable`,
                    defaultValue: $.defaultProps.linksOptions.linksEnabled
                },
                linksColor: {
                    type: u.Color,
                    title: `Color`,
                    defaultValue: $.defaultProps.linksOptions.linksColor,
                    hidden: e => !e.linksEnabled
                },
                linksOpacity: {
                    type: u.Number,
                    title: `Opacity`,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.linksOptions.linksOpacity,
                    hidden: e => !e.linksEnabled
                },
                linksDistance: {
                    type: u.Number,
                    title: `Distance`,
                    min: 0,
                    max: 500,
                    step: 1,
                    defaultValue: $.defaultProps.linksOptions.linksDistance,
                    hidden: e => !e.linksEnabled
                },
                linksWidth: {
                    type: u.Number,
                    title: `Width`,
                    min: 0,
                    max: 10,
                    step: 1,
                    defaultValue: $.defaultProps.linksOptions.linksWidth,
                    hidden: e => !e.linksEnabled
                }
            }
        },
        modeOptions: {
            type: u.Object,
            title: `Modes`,
            controls: {
                connectDistance: {
                    type: u.Number,
                    title: `Connect`,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.connectDistance
                },
                connectRadius: {
                    type: u.Number,
                    title: `Connect Radius`,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.connectRadius
                },
                connectLinksOpacity: {
                    type: u.Number,
                    title: `Connect Links`,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.modeOptions.connectLinksOpacity
                },
                grabDistance: {
                    type: u.Number,
                    title: `Grab`,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.grabDistance
                },
                grabLinksOpacity: {
                    type: u.Number,
                    title: `Grab Links`,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.modeOptions.grabLinksOpacity
                },
                bubbleDistance: {
                    type: u.Number,
                    title: `Bubble`,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.bubbleDistance
                },
                bubbleSize: {
                    type: u.Number,
                    title: `Bubble Size`,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.bubbleSize
                },
                bubbleDuration: {
                    type: u.Number,
                    title: `Bubble Duration`,
                    min: 0,
                    max: 1,
                    step: .1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.modeOptions.bubbleDuration
                },
                repulseDistance: {
                    type: u.Number,
                    title: `Repulse`,
                    min: 0,
                    max: 1e3,
                    defaultValue: $.defaultProps.modeOptions.repulseDistance
                },
                repulseDuration: {
                    type: u.Number,
                    title: `Repulse Duration`,
                    min: 0,
                    max: 10,
                    step: .1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.modeOptions.repulseDuration
                },
                pushQuantity: {
                    type: u.Number,
                    title: `Push`,
                    min: 0,
                    max: 100,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.pushQuantity
                },
                removeQuantity: {
                    type: u.Number,
                    title: `Remove`,
                    min: 0,
                    max: 100,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.removeQuantity
                },
                trailQuantity: {
                    type: u.Number,
                    title: `Trail`,
                    min: 0,
                    max: 100,
                    step: 1,
                    defaultValue: $.defaultProps.modeOptions.trailQuantity
                },
                trailDelay: {
                    type: u.Number,
                    title: `Trail Delay`,
                    min: 0,
                    max: 10,
                    step: .1,
                    defaultValue: $.defaultProps.modeOptions.trailDelay
                }
            }
        },
        moveOptions: {
            type: u.Object,
            title: `Move`,
            controls: {
                moveEnabled: {
                    type: u.Boolean,
                    title: `Enable`,
                    defaultValue: $.defaultProps.moveOptions.moveEnabled
                },
                moveDirection: {
                    type: u.Enum,
                    title: `Direction`,
                    options: [`none`, `bottom`, `left`, `right`, `top`, `bottom-left`, `bottom-right`, `top-left`, `top-right`, `outside`, `inside`],
                    optionTitles: [`Random`, `Bottom`, `Left`, `Right`, `Top`, `Bottom Left`, `Bottom Right`, `Top Left`, `Top Right`, `Outside`, `Inside`],
                    defaultValue: $.defaultProps.moveOptions.moveDirection,
                    hidden: e => !e.moveEnabled
                },
                moveSpeed: {
                    type: u.Number,
                    title: `Speed`,
                    min: 0,
                    max: 100,
                    step: .1,
                    defaultValue: $.defaultProps.moveOptions.moveSpeed,
                    hidden: e => !e.moveEnabled
                },
                moveRandom: {
                    type: u.Boolean,
                    title: `Random`,
                    defaultValue: $.defaultProps.moveOptions.moveRandom,
                    hidden: e => !e.moveEnabled
                },
                moveStraight: {
                    type: u.Boolean,
                    title: `Straight`,
                    defaultValue: $.defaultProps.moveOptions.moveStraight,
                    hidden: e => !e.moveEnabled
                },
                moveOut: {
                    type: u.Enum,
                    title: `Out`,
                    options: [`none`, `split`, `bounce`, `destroy`, `out`, `bounceHorizontal`, `bounceVertical`],
                    optionTitles: [`None`, `Split`, `Bounce`, `Destroy`, `Out`, `Bounce Horizontal`, `Bounce Vertical`],
                    defaultValue: $.defaultProps.moveOptions.moveOut,
                    hidden: e => !e.moveEnabled
                },
                moveVibrate: {
                    type: u.Boolean,
                    title: `Vibrate`,
                    defaultValue: $.defaultProps.moveOptions.moveVibrate,
                    hidden: e => !e.moveEnabled
                },
                moveGravityEnabled: {
                    type: u.Boolean,
                    title: `Gravity`,
                    defaultValue: $.defaultProps.moveOptions.moveGravityEnabled,
                    hidden: e => !e.moveEnabled
                },
                moveGravityAcceleration: {
                    type: u.Number,
                    title: `Gravity Acceleration`,
                    min: 0,
                    max: 100,
                    step: .1,
                    defaultValue: $.defaultProps.moveOptions.moveGravityAcceleration,
                    hidden: e => !e.moveEnabled || !e.moveGravityEnabled
                },
                moveGravityMaxSpeed: {
                    type: u.Number,
                    title: `Gravity Max Speed`,
                    min: 0,
                    max: 100,
                    step: .1,
                    defaultValue: $.defaultProps.moveOptions.moveGravityAcceleration,
                    hidden: e => !e.moveEnabled || !e.moveGravityEnabled
                },
                moveTrailEnabled: {
                    type: u.Boolean,
                    title: `Trail`,
                    defaultValue: $.defaultProps.moveOptions.moveTrailEnabled,
                    hidden: e => !e.moveEnabled
                },
                moveTrailAmount: {
                    type: u.Number,
                    title: ` `,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.moveOptions.moveTrailAmount,
                    hidden: e => !e.moveEnabled || !e.moveTrailEnabled
                },
                moveSpinEnabled: {
                    type: u.Boolean,
                    title: `Spin`,
                    defaultValue: $.defaultProps.moveOptions.moveSpinEnabled,
                    hidden: e => !e.moveEnabled
                },
                moveSpinAcceleration: {
                    type: u.Number,
                    title: ` `,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.moveOptions.moveSpinAcceleration,
                    hidden: e => !e.moveEnabled || !e.moveSpinEnabled
                },
                moveAttractEnabled: {
                    type: u.Boolean,
                    title: `Attract`,
                    defaultValue: $.defaultProps.moveOptions.moveAttractEnabled,
                    hidden: e => !e.moveEnabled
                },
                moveAttractDistance: {
                    type: u.Number,
                    title: ` `,
                    min: 0,
                    max: 1e3,
                    step: 1,
                    defaultValue: $.defaultProps.moveOptions.moveAttractDistance,
                    hidden: e => !e.moveEnabled || !e.moveAttractEnabled
                }
            }
        },
        shapeOptions: {
            type: u.Object,
            title: `Shape`,
            controls: {
                shapeType: {
                    type: u.Enum,
                    title: `Shape`,
                    options: [`circle`, `edge`, `triangle`, `polygon`, `star`, `character`, `image`],
                    optionTitles: [`Circle`, `Square`, `Triangle`, `Polygon`, `Star`, `Character`, `Image`],
                    defaultValue: $.defaultProps.shapeOptions.characterType
                },
                characterType: {
                    type: u.String,
                    title: `Character`,
                    defaultValue: $.defaultProps.shapeOptions.characterType,
                    hidden: e => e.shapeType !== `character`
                },
                imageSource: {
                    type: u.Image,
                    title: `Image`,
                    hidden: e => e.shapeType !== `image`
                },
                imageWidth: {
                    type: u.Number,
                    title: `Width`,
                    min: 0,
                    max: 1e3,
                    defaultValue: $.defaultProps.shapeOptions.imageWidth,
                    hidden: e => e.shapeType !== `image`
                },
                imageHeight: {
                    type: u.Number,
                    title: `Height`,
                    min: 0,
                    max: 1e3,
                    defaultValue: $.defaultProps.shapeOptions.imageWidth,
                    hidden: e => e.shapeType !== `image`
                }
            }
        },
        clickOptions: {
            type: u.Object,
            title: `Click`,
            controls: {
                clickEnabled: {
                    type: u.Boolean,
                    title: `Enable`,
                    defaultValue: $.defaultProps.clickOptions.clickEnabled
                },
                clickModes: {
                    type: u.Enum,
                    title: `Mode`,
                    options: [`attract`, `bubble`, `push`, `remove`, `repulse`, `pause`, `trail`],
                    optionTitles: [`Attract`, `Bubble`, `Push`, `Remove`, `Repulse`, `Pause`, `Trail`],
                    defaultValue: $.defaultProps.clickOptions.clickModes,
                    hidden: e => !e.clickEnabled
                }
            }
        },
        hoverOptions: {
            type: u.Object,
            title: `Hover`,
            controls: {
                hoverEnabled: {
                    type: u.Boolean,
                    title: `Enable`,
                    defaultValue: $.defaultProps.hoverOptions.hoverEnabled
                },
                hoverModes: {
                    type: u.Enum,
                    title: `Mode`,
                    options: [`none`, `attract`, `bounce`, `bubble`, `connect`, `grab`, `light`, `repulse`, `slow`, `trail`],
                    optionTitles: [`None`, `Attract`, `Bounce`, `Bubble`, `Connect`, `Grab`, `Light`, `Repulse`, `Slow`, `Trail`],
                    defaultValue: $.defaultProps.hoverOptions.hoverModes,
                    hidden: e => !e.hoverEnabled
                },
                hoverParallax: {
                    type: u.Boolean,
                    title: `Parallax`,
                    defaultValue: $.defaultProps.hoverOptions.hoverParallax,
                    hidden: e => !e.hoverEnabled
                },
                hoverForce: {
                    type: u.Number,
                    min: 0,
                    max: 50,
                    step: 1,
                    displayStepper: !0,
                    title: `Force`,
                    defaultValue: $.defaultProps.hoverOptions.hoverForce,
                    hidden: e => !e.hoverParallax || !e.hoverEnabled
                },
                hoverSmooth: {
                    type: u.Number,
                    min: 0,
                    max: 50,
                    step: 1,
                    displayStepper: !0,
                    title: `Smooth`,
                    defaultValue: $.defaultProps.hoverOptions.hoverSmooth,
                    hidden: e => !e.hoverParallax || !e.hoverEnabled
                }
            }
        },
        rotateOptions: {
            type: u.Object,
            title: `Rotate`,
            controls: {
                rotateValue: {
                    type: u.Number,
                    title: `Value`,
                    min: -360,
                    max: 360,
                    step: 1,
                    displayStepper: !0,
                    defaultValue: $.defaultProps.rotateOptions.rotateValue
                },
                rotateDirection: {
                    type: u.Enum,
                    title: `Direction`,
                    options: [`clockwise`, `counter-clockwise`, `random`],
                    optionTitles: [`Clockwise`, `Counter Clockwise`, `Random`],
                    defaultValue: $.defaultProps.rotateOptions.rotateDirection
                },
                rotateAnimation: {
                    type: u.Boolean,
                    title: `Animate`,
                    defaultValue: $.defaultProps.rotateOptions.rotateAnimation
                },
                rotateSpeed: {
                    type: u.Number,
                    title: `Speed`,
                    min: 0,
                    max: 100,
                    step: 1,
                    defaultValue: $.defaultProps.rotateOptions.rotateSpeed,
                    hidden: e => !e.rotateAnimation
                },
                rotateSync: {
                    type: u.Boolean,
                    title: `Sync`,
                    defaultValue: $.defaultProps.rotateOptions.rotateSync,
                    hidden: e => !e.rotateAnimation
                }
            }
        },
        radius: {
            type: u.Number,
            min: 0,
            max: 1e3,
            step: 1,
            displayStepper: !0,
            defaultValue: $.defaultProps.radius
        },
        particlesID: {
            type: u.String,
            title: `ID`,
            defaultValue: `One`,
            placeholder: $.defaultProps.particlesID
        }
    }),
    Yc = e => l.toHexString(l(e))
}
);
export {$ as ParticleWrapper, Xc as init_Particles};
//# sourceMappingURL=Particles.CK3AA8UK.mjs.map
