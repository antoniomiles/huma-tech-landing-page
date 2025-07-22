import {__esmMin as e} from "./rolldown-runtime.DIBZXYM-.mjs";
import {B as t, I as n, J as r, K as i, L as a, X as o, Y as s, Z as c, _e as l, ae as u, e as d, fe as f, ie as p, init_jsx_runtime as m, init_npm_react_18_2 as h, init_npm_react_dom_18_2 as g, init_ssg_sandbox_shims as _, j as v, l as y, navigator as b, p as x, pe as S, q as C, re as w, se as T, te as E, u as D, ue as O, window as k, x as A, ye as ee, z as j} from "./react.BGOYdRaa.mjs";
import {AnimatePresence as te, LayoutGroup as ne, MotionConfig as re, MotionGlobalConfig as ie, MotionValue as ae, PresenceContext as oe, SwitchLayoutGroupContext as se, WillChangeMotionValue as ce, __commonJS as le, __decorateElement as M, __decoratorMetadata as ue, __decoratorStart as de, __privateAdd as fe, __privateGet as N, __privateMethod as pe, __privateSet as me, __publicField as P, __runInitializers as he, __toESM as ge, addScaleCorrector as F, animate as _e, animateValue as ve, cancelFrame as ye, frame as be, inView as xe, init_chunk_BLFSVU7M as I, init_chunk_YNHG2PI6 as Se, interpolate as Ce, isMotionComponent as we, isMotionValue as Te, isValidMotionProp as Ee, motion as De, motionValue as Oe, optimizedAppearDataAttribute as ke, resolveMotionValue as Ae, scroll as je, spring as Me, stagger as Ne, transform as Pe, unwrapMotionComponent as Fe, useAnimation as Ie, useInstantLayoutTransition as Le, useInstantTransition as Re, useMotionValue as ze, usePresence as Be, useReducedMotionConfig as Ve, useResetProjection as He, useScroll as Ue, useSpring as We, useTransform as Ge, visualElementStore as Ke} from "./motion.Cp-kJPeu.mjs";
function qe(e) {
    return typeof e == `object` && !!e && !r(e) && hp in e
}
function Je(e) {
    let t = i(e), n, r, a = !1, o = s(function(e, n) {
        O( () => {
            a = !0
        }
        , []);
        let i = r ?? t;
        return x(i, {
            ref: n,
            ...e
        })
    });
    return o.preload = () => (n ||= e().then(e => (r = e.default,
    r)),
    n),
    o.getStatus = () => ({
        hasLoaded: r !== void 0,
        hasRendered: a
    }),
    o
}
function Ye(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function Xe(e) {
    return e === null || !(_p in e) ? !1 : typeof e.equals == `function`
}
function Ze(e, t) {
    return e === t ? !0 : e !== e && t !== t
}
function Qe(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!Ze(e[r], t[r]))
            return !1;
    return !0
}
function $e(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!at(e[r], t[r], !0))
            return !1;
    return !0
}
function et(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!Ze(r, t.get(n)))
            return !1;
    return !0
}
function tt(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!at(r, t.get(n), !0))
            return !1;
    return !0
}
function nt(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let n of e.keys())
        if (!t.has(n))
            return !1;
    return !0
}
function rt(e, t) {
    let n = gp(e);
    if (n.length !== gp(t).length)
        return !1;
    for (let r of n) {
        if (!Ye(t, r))
            return !1;
        if (r === `_owner` && Ye(e, `$$typeof`) && e.$$typeof)
            continue;
        if (!Ze(e[r], t[r]))
            return !1
    }
    return !0
}
function it(e, t) {
    let n = gp(e);
    if (n.length !== gp(t).length)
        return !1;
    for (let r of n) {
        if (!Ye(t, r))
            return !1;
        if (r === `_owner` && Ye(e, `$$typeof`) && e.$$typeof)
            continue;
        if (!at(e[r], t[r], !0))
            return !1
    }
    return !0
}
function at(e, t, n) {
    if (e === t)
        return !0;
    if (!e || !t)
        return e !== e && t !== t;
    let r = typeof e
      , i = typeof t;
    if (r !== i || r !== `object`)
        return !1;
    let a = Array.isArray(e)
      , o = Array.isArray(t);
    if (a && o)
        return n ? $e(e, t) : Qe(e, t);
    if (a !== o)
        return !1;
    let s = e instanceof Map
      , c = t instanceof Map;
    if (s && c)
        return n ? tt(e, t) : et(e, t);
    if (s !== c)
        return !1;
    let l = e instanceof Set
      , u = t instanceof Set;
    if (l && u)
        return nt(e, t);
    if (l !== u)
        return !1;
    let d = e instanceof Date
      , f = t instanceof Date;
    if (d && f)
        return e.getTime() === t.getTime();
    if (d !== f)
        return !1;
    let p = e instanceof RegExp
      , m = t instanceof RegExp;
    return p && m ? e.toString() === t.toString() : p === m ? Xe(e) && Xe(t) ? e.equals(t) : n ? it(e, t) : rt(e, t) : !1
}
function ot(e, t, n=!0) {
    try {
        return at(e, t, n)
    } catch (e) {
        if (e instanceof Error && /stack|recursion/iu.exec(e.message))
            return console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
            !1;
        throw e
    }
}
function st(e) {
    return d.useCallback(t => e[t], [e])
}
function ct({api: e, children: t}) {
    return x(vp.Provider, {
        value: e,
        children: t
    })
}
function lt() {
    return d.useContext(vp)
}
function ut({routes: e, children: t}) {
    let n = st(e)
      , r = T( () => ({
        getRoute: n
    }), [n]);
    return x(vp.Provider, {
        value: r,
        children: t
    })
}
function dt() {
    var e;
    let t = lt()
      , n = w(yp)
      , r = n?.routeId ?? t.currentRouteId
      , i = n?.routeId ? n.pathVariables : t.currentPathVariables
      , a = r ? (e = t.getRoute)?.call(t, r) : void 0;
    return T( () => {
        if (!(!r || !a))
            return {
                ...a,
                id: r,
                pathVariables: i
            }
    }
    , [r, i, a])
}
function ft() {
    let e = dt();
    if (e)
        return `${e.id}-${JSON.stringify(e.pathVariables)}`
}
function pt(e) {
    let t = dt()
      , n = d.useRef(t);
    ot(n.current, t) || !t || (n.current = t,
    e(t))
}
function mt(e) {
    var t;
    let n = lt();
    if (e)
        return (t = n.getRoute)?.call(n, e)
}
function ht(e, t) {
    if (t && e)
        return e.elements && t in e.elements ? e.elements[t] : t
}
function gt(e) {
    let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`]
      , n = e => {
        let n = e.type;
        t.includes(n) && performance.mark(`framer-navigation-input`, {
            detail: {
                type: n
            }
        })
    }
    ;
    for (let r = 0; r < t.length; r++)
        document.addEventListener(t[r], n, {
            signal: e
        });
    return () => {
        for (let e = 0; e < t.length; e++)
            document.removeEventListener(t[e], n)
    }
}
function _t(e, t) {
    let n = dt()
      , r = mt(t) ?? n;
    return d.useMemo( () => r ? ht(r, e) : e, [e, r])
}
function vt() {
    var e;
    return (e = dt())?.pathVariables
}
function yt(e) {
    return typeof e == `function`
}
function bt(e) {
    return typeof e == `boolean`
}
function L(e) {
    return typeof e == `string`
}
function R(e) {
    return Number.isFinite(e)
}
function xt(e) {
    return Array.isArray(e)
}
function z(e) {
    return typeof e == `object` && !!e && !xt(e)
}
function St(e) {
    return e === void 0
}
function Ct(e) {
    return e === null
}
function wt(e) {
    return e == null
}
function Tt(e) {
    return e instanceof Date && !Number.isNaN(e.getTime())
}
function Et(e) {
    return z(e) && yt(e.return)
}
function Dt(e) {
    return `url('data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`)}')`
}
function Ot() {
    for (let e of kp)
        e();
    kp.clear()
}
function kt(e) {
    return new Promise(t => {
        if (kp.add(t),
        document.hidden) {
            Ot();
            return
        }
        document.addEventListener(`visibilitychange`, Ot),
        document.addEventListener(`pagehide`, Ot),
        be.read( () => {
            let n = () => {
                var n;
                kp.delete(t),
                !(n = e?.signal)?.aborted && t()
            }
            ;
            jt(e).then(n)
        }
        )
    }
    )
}
function At(e) {
    return new Promise(t => {
        setTimeout(t, 100),
        be.read( () => {
            jt(e).then(t)
        }
        , !1, !0)
    }
    )
}
function jt(e) {
    let t = e?.priority
      , n = Dp || Op;
    return n ? t === `background` ? new Promise(e => {
        setTimeout(e, 1)
    }
    ) : Dp ? K.scheduler.yield(e).catch(xp) : K.scheduler.postTask( () => {}
    , e).catch(xp) : t === `user-blocking` ? Promise.resolve() : new Promise(e => {
        setTimeout(e, t === `background` ? 1 : 0)
    }
    )
}
function Mt(e) {
    let {continueAfter: t, ensureContinueBeforeUnload: n, ...r} = e ?? {};
    return n ? kt(r) : t === `paint` ? At(r) : jt(r)
}
function Nt(e, t=!0) {
    let {getRoute: n} = lt();
    O( () => {
        if (!(!n || !t || !Ap))
            for (let t of e)
                Pt(n(t))
    }
    , [e, n, t])
}
async function Pt(e) {
    if (!Ap || !e)
        return;
    let t = e.page;
    if (!(!t || !qe(t))) {
        await Mt();
        try {
            await t.preload()
        } catch {}
    }
}
function Ft() {
    let e = Intl.DateTimeFormat().resolvedOptions();
    jp = e.timeZone,
    Mp = e.locale
}
function It(e, t, n=`lazy`) {
    if (K.__framer_events)
        switch ((!jp || !Mp) && Ft(),
        K.__framer_events.push([e, {
            referrer: null,
            url: K.location.href,
            hostname: K.location.hostname || null,
            pathname: K.location.pathname || null,
            hash: K.location.hash || null,
            search: K.location.search || null,
            timezone: jp,
            locale: Mp,
            ...t
        }, n]),
        e) {
        case `published_site_click`:
            {
                let {trackingId: e, href: n} = t;
                e && document.dispatchEvent(new CustomEvent(`framer:click`,{
                    detail: {
                        trackingId: e,
                        href: n
                    }
                }));
                break
            }
        case `published_site_form_submit`:
            {
                let {trackingId: e} = t;
                e && document.dispatchEvent(new CustomEvent(`framer:formsubmit`,{
                    detail: {
                        trackingId: e
                    }
                }));
                break
            }
        case `published_site_pageview`:
            {
                let {framerLocale: e} = t;
                document.dispatchEvent(new CustomEvent(`framer:pageview`,{
                    detail: {
                        framerLocale: e
                    }
                }));
                break
            }
        }
}
function Lt(e, t) {
    if (!e.startsWith(`/`) || !t.startsWith(`/`))
        throw Error(`from/to paths are expected to be absolute`);
    let[n] = Rt(e)
      , [r,i] = Rt(t)
      , a = zt(n, r);
    return a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
}
function Rt(e) {
    let t = e.lastIndexOf(`/`);
    return [e.substring(0, t + 1), e.substring(t + 1)]
}
function zt(e, t) {
    if (e === t || (e = `/` + Bt(e),
    t = `/` + Bt(t),
    e === t))
        return ``;
    let n = 1
      , r = e.length
      , i = r - n
      , a = 1
      , o = t.length - a
      , s = i < o ? i : o
      , c = -1
      , l = 0;
    for (; l < s; l++) {
        let r = Fp(e, n + l);
        if (r !== Fp(t, a + l))
            break;
        r === Pp && (c = l)
    }
    if (l === s)
        if (o > s) {
            if (Fp(t, a + l) === Pp)
                return Lp(t, a + l + 1);
            if (l === 0)
                return Lp(t, a + l)
        } else
            i > s && (Fp(e, n + l) === Pp ? c = l : l === 0 && (c = 0));
    let u = ``;
    for (l = n + c + 1; l <= r; ++l)
        (l === r || Fp(e, l) === Pp) && (u += u.length === 0 ? `..` : `/..`);
    return `${u}${Lp(t, a + c)}`
}
function Bt(e) {
    let t = ``
      , n = 0
      , r = -1
      , i = 0
      , a = 0;
    for (let o = 0; o <= e.length; ++o) {
        if (o < e.length)
            a = Fp(e, o);
        else if (Bp(a))
            break;
        else
            a = Pp;
        if (Bp(a)) {
            if (!(r === o - 1 || i === 1))
                if (i === 2) {
                    if (t.length < 2 || n !== 2 || Fp(t, t.length - 1) !== Np || Fp(t, t.length - 2) !== Np) {
                        if (t.length > 2) {
                            let e = Ip(t, zp);
                            e === -1 ? (t = ``,
                            n = 0) : (t = Lp(t, 0, e),
                            n = t.length - 1 - Ip(t, zp)),
                            r = o,
                            i = 0;
                            continue
                        } else if (t.length !== 0) {
                            t = ``,
                            n = 0,
                            r = o,
                            i = 0;
                            continue
                        }
                    }
                    Rp && (t += t.length > 0 ? `${zp}..` : `..`,
                    n = 2)
                } else
                    t.length > 0 ? t += `${zp}${Lp(e, r + 1, o)}` : t = Lp(e, r + 1, o),
                    n = o - r - 1;
            r = o,
            i = 0
        } else
            a === Np && i !== -1 ? ++i : i = -1
    }
    return t
}
function Vt(e, t) {
    return e.replace(Up, (e, n) => {
        let r = t[n];
        return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r)
    }
    )
}
function Ht(e) {
    let t = k === void 0 ? `` : k.location.search;
    return t ? Ut(t, e) : e
}
function Ut(e, t) {
    let n = t.indexOf(`#`)
      , r = n === -1 ? t : t.substring(0, n)
      , i = n === -1 ? `` : t.substring(n)
      , a = r.indexOf(`?`);
    if (a === -1)
        return r + e + i;
    let o = new URLSearchParams(e)
      , s = r.substring(a + 1)
      , c = new URLSearchParams(s);
    for (let[e,t] of o)
        c.has(e) || c.append(e, t);
    return r.substring(0, a + 1) + c.toString() + i
}
async function Wt(e, t, n, r, i, a, o) {
    var s;
    let c = e
      , l = !1
      , u = {
        ...a
    }
      , d = Array.from(c.matchAll(Up))
      , f = await Promise.all(d.map(async e => {
        var s;
        let c = e?.[0]
          , d = e?.[1];
        if (!c || !d)
            throw Error(`Failed to replace path variables: unexpected regex match group`);
        let f = a[d];
        if (!f || !L(f))
            throw Error(`No slug found for path variable ${d}`);
        let p = await (s = o?.[i])?.call(o);
        if (!p || !t)
            return f;
        let m = await p.getRecordIdBySlug(f, t);
        if (!m)
            return f;
        let h = await p.getSlugByRecordId(m, n);
        if (!h) {
            l = !0;
            let e = await p.getSlugByRecordId(m, r);
            return e && (u[d] = e),
            e ?? f
        }
        return u[d] = h,
        h
    }
    ))
      , p = 0
      , m = ``
      , h = !1;
    for (let e = 0; e < d.length; e++) {
        let t = d[e]
          , n = f[e];
        !t || !n || (m += c.substring(p, t.index),
        p = (t.index ?? 0) + ((s = t[0])?.length ?? 0),
        m += f[e],
        h = !0)
    }
    return h && (m += c.substring(p),
    c = m),
    {
        path: c,
        pathVariables: u,
        isMissingInLocale: l
    }
}
async function Gt({currentLocale: e, nextLocale: t, defaultLocale: n, route: r, pathVariables: i, collectionUtils: a, preserveQueryParams: o}) {
    let {path: s} = r
      , c = {
        path: s,
        pathVariables: i,
        isMissingInLocale: !1
    };
    if (!s)
        return c;
    if (i && r.collectionId)
        try {
            let o = await Wt(s, e, t, n, r.collectionId, i, a);
            c = o
        } catch {}
    return t.slug && (c.path = `/` + t.slug + c.path),
    o && c.path && (c.path = Ht(c.path)),
    c
}
function Kt(e) {
    if (!e)
        return ``;
    let t;
    try {
        t = new URL(e)
    } catch {
        return ``
    }
    return t.pathname === `/` || k.location.origin !== t.origin ? `` : t.pathname.endsWith(`/`) ? t.pathname.slice(0, -1) : t.pathname
}
function qt({children: e, value: t}) {
    return x(Gp.Provider, {
        value: t,
        children: e
    })
}
function Jt() {
    return d.useContext(Gp)
}
function Yt(e, t, {global: n, routes: r}) {
    var i;
    return (i = r[e])?.[t] || n
}
function Xt(e) {
    let t = Kp
      , n = e.next(0)
      , r = [n.value];
    for (; !n.done && t < qp; )
        n = e.next(t),
        r.push(n.value),
        t += Kp;
    return r.length === 1 && r.push(n.value),
    {
        easing: `linear(${r.join(`,`)})`,
        duration: t - Kp
    }
}
function Zt(e) {
    return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`]
}
function Qt(e) {
    let {innerWidth: t, innerHeight: n} = k
      , [r,i] = Zt(e.x)
      , [a,o] = Zt(e.y);
    return {
        x: i === `px` ? r : t * (r / 100),
        y: o === `px` ? a : n * (a / 100)
    }
}
function $t(e, t, n, r) {
    var i;
    let a = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (a += (i = r?.makeKeyframe)?.call(r, e.mask, t, n) || ``),
    a
}
function en(e) {
    return e ? em[e] : void 0
}
function tn(e, {transition: t, ...n}) {
    var r;
    let i = `view-transition-` + e
      , a = {
        duration: `0s`,
        easing: `linear`
    };
    if (t.type === `tween`)
        a.duration = t.duration + `s`,
        a.easing = `cubic-bezier(${t.ease.join(`,`)})`;
    else if (nn(t)) {
        let {easing: e, duration: n} = Xt(Me({
            keyframes: [0, 1],
            ...rn(t),
            restDelta: .001,
            restSpeed: 1e-4
        }));
        a.duration = n + `ms`,
        a.easing = e
    }
    let o = en((r = n?.mask)?.type)
      , s = $t(n, `start`, e, o)
      , c = $t({
        ...tm,
        mask: n.mask
    }, `end`, e, o);
    return e === `exit` && ([s,c] = [c, s]),
    `
        ${n.mask && o?.makePropertyRules ? o.makePropertyRules(n.mask) : ``}

        @keyframes ${i} {
            0% {
                ${s}
            }

            100% {
                ${c}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${i};
            animation-duration: ${a.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${a.easing};
            animation-fill-mode: both;
            ${n.mask && o?.makeStyles ? o.makeStyles(n.mask, e) : ``}
        }
    `
}
function nn(e) {
    return e.type === `spring`
}
function rn(e) {
    return e.durationBasedSpring ? {
        duration: e.duration * 1e3,
        bounce: e.bounce
    } : {
        stiffness: e.stiffness,
        damping: e.damping,
        mass: e.mass
    }
}
function an({exit: e=rm, enter: t}) {
    let n = document.createElement(`style`);
    n.id = nm;
    let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `
      , i = e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay;
    i && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `,
    r += tn(`exit`, e),
    r += tn(`enter`, t),
    n.textContent = r,
    document.head.appendChild(n)
}
function on() {
    Tp( () => {
        be.render( () => {
            performance.mark(`framer-vt-remove`);
            let e = document.getElementById(nm);
            e && document.head.removeChild(e)
        }
        )
    }
    )
}
function sn() {
    return !!document.startViewTransition
}
function cn(e) {
    return new Promise(t => {
        be.render( () => {
            performance.mark(`framer-vt-style`),
            an(e),
            t()
        }
        )
    }
    )
}
async function ln(e, t, n) {
    if (!sn()) {
        e();
        return
    }
    if (await cn(t),
    n?.aborted)
        return;
    performance.mark(`framer-vt`);
    let r = document.startViewTransition(async () => {
        performance.mark(`framer-vt-freeze`),
        !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()),
        await e())
    }
    );
    return r.updateCallbackDone.then( () => {
        performance.mark(`framer-vt-unfreeze`)
    }
    ).catch(im),
    Promise.all([r.ready, r.finished]).then( () => {
        performance.mark(`framer-vt-finished`),
        on()
    }
    ).catch(im),
    r
}
function un() {
    let e = Jt()
      , t = S(void 0);
    return O( () => {
        t.current && (t.current(),
        t.current = void 0)
    }
    ),
    E( (n, r, i, a) => {
        let o = Yt(n, r, e);
        if (o) {
            let e = new Promise(e => {
                t.current = e
            }
            );
            return ln(async () => {
                i(),
                await e
            }
            , o, a)
        }
        i()
    }
    , [e])
}
function dn(e, t) {
    Tp( () => {
        let n = document.querySelector(`link[rel='canonical']`);
        if (!n)
            return;
        let r = new URL(e,t);
        r.search = ``,
        n.setAttribute(`href`, r.toString())
    }
    )
}
function fn(e, t, n, r=f) {
    r( () => {
        let t = async e => (await Mt({
            ...n,
            continueAfter: `paint`
        }),
        e())
          , r = t(e);
        return () => {
            (async () => {
                let e = await r;
                e && t(e)
            }
            )()
        }
    }
    , t)
}
function pn(e) {
    let t = S(void 0);
    return fn( () => {
        t.current && (t.current(),
        t.current = void 0)
    }
    , void 0, {
        priority: `user-blocking`
    }),
    E(n => {
        let r = new Promise(e => {
            t.current = e
        }
        );
        if (!e)
            return {
                promise: r,
                measureDetail: n,
                ignore: null
            };
        let i = `${e}-start`
          , a = `${e}-end`
          , o = !1;
        return performance.mark(i),
        r.finally( () => {
            o || (performance.mark(a),
            performance.measure(e, {
                start: i,
                end: a,
                detail: n
            }))
        }
        ).catch(e => {
            console.error(e)
        }
        ),
        {
            promise: r,
            measureDetail: n,
            ignore: () => {
                var e;
                o = !0,
                (e = t.current) == null || e.call(t),
                t.current = void 0
            }
        }
    }
    , [e])
}
async function mn(e, t, {currentRoutePath: n, currentPathVariables: r, hash: i, pathVariables: a, localeId: o, preserveQueryParams: s, siteCanonicalURL: c}, l=!1) {
    let {path: u} = t;
    if (!u)
        return;
    let d = xn(t, {
        currentRoutePath: n,
        currentPathVariables: r,
        hash: i,
        pathVariables: a,
        preserveQueryParams: s,
        siteCanonicalURL: c
    });
    try {
        return await _n({
            routeId: e,
            hash: i,
            pathVariables: a,
            localeId: o
        }, d, l)
    } catch {}
}
function hn(e) {
    let t = `routeId`;
    return z(e) && L(e[t])
}
function gn(e, t, n=!1) {
    performance.mark(`framer-history-replace`);
    let r = n ? k.history.__proto__.replaceState : k.history.replaceState;
    r.call(k.history, e, ``, t)
}
async function _n(e, t, n=!1) {
    if (performance.mark(`framer-history-push`),
    dn(t, k.location.href),
    !n) {
        k.history.pushState(e, ``, t);
        return
    }
    let r = !1, i;
    sm && (i = () => {
        if (r = !0,
        cm)
            return;
        let e = `Popstate called after intercept(). Please report this to the Framer team.`;
        console.error(e),
        It(`published_site_load_recoverable_error`, {
            message: e
        })
    }
    ,
    k.addEventListener(`popstate`, i, {
        once: !0
    })),
    cm && sm ? k.history.__proto__.pushState.call(k.history, e, ``, t) : k.history.pushState(e, ``, t),
    sm && queueMicrotask( () => {
        r || (sm = !1,
        k.removeEventListener(`popstate`, i))
    }
    )
}
function vn({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    f( () => {
        e || (performance.mark(`framer-history-set-initial-state`),
        gn({
            routeId: t,
            pathVariables: n,
            localeId: r
        }, void 0, !0))
    }
    , [])
}
function yn(e, t) {
    let n = un()
      , r = pn(`framer-route-change`)
      , i = S(void 0)
      , a = E(async ({state: a}) => {
        var o, s, c, l, u, d;
        if ((o = k.navigation)?.transition && (c = (s = k.navigation)?.transition)?.navigationType !== `traverse` || !z(a))
            return;
        let {routeId: f, hash: p, pathVariables: m, localeId: h} = a;
        if (!L(f))
            return;
        let g = r({
            popstate: !0
        })
          , _ = gt();
        g.promise.finally(_);
        let v = () => {
            t(f, L(h) ? h : void 0, L(p) ? p : void 0, z(m) ? m : void 0, !0, g, !1)
        }
          , y = await n(e.current, f, v)
          , b = (l = k.navigation)?.transition;
        await (y?.updateCallbackDone ?? Promise.resolve()).then((u = i.current)?.resolve).catch((d = i.current)?.reject),
        await g.promise;
        try {
            await b?.finished
        } catch (e) {
            console.warn(`Popstate transition failed`, e)
        }
        om(),
        dn(k.location.href)
    }
    , [e, r, t, n])
      , o = E(e => {
        e.navigationType === `traverse` && e.intercept({
            async handler() {
                await new Promise( (e, t) => {
                    i.current = {
                        resolve: e,
                        reject: t
                    }
                }
                ),
                i.current = void 0
            },
            scroll: `after-transition`
        })
    }
    , []);
    O( () => (k.addEventListener(`popstate`, a),
    lm && k.navigation.addEventListener(`navigate`, o),
    () => {
        k.removeEventListener(`popstate`, a),
        lm && k.navigation.removeEventListener(`navigate`, o)
    }
    ), [a, o])
}
function bn(e, t, n) {
    let r = ht(t, e);
    if (!r)
        return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace(Up, (e, t) => i[t] ?? e)
}
function xn(e, {currentRoutePath: t, currentPathVariables: n, hash: r, pathVariables: i, hashVariables: a, relative: o=!0, preserveQueryParams: s, onlyHash: c=!1, siteCanonicalURL: l}) {
    let u = bn(r, e, a);
    if (c)
        return u ?? ``;
    let d = t ?? `/`;
    n && (d = d.replace(Up, (e, t) => String(n[t] || e)));
    let f = e?.path ?? `/`
      , p = f;
    i && (p = p.replace(Up, (e, t) => String(i[t] || e)));
    let m = d === p && u;
    if (o)
        if (Vp.has(d) && k !== void 0) {
            let e = Kt(l);
            p = Lt(k.location.pathname, e + p)
        } else
            p = Lt(d, p);
    return (s || m) && (p = Ht(p)),
    u && (p = `${p}#${u}`),
    p
}
async function Sn(e, t, n) {
    if (!e.path || !t)
        return !1;
    let r = n.slug ? `/${n.slug}` : ``
      , i = `${r}${Vt(e.path, t)}`
      , a = await fetch(i, {
        method: `HEAD`,
        redirect: `manual`
    })
      , o = a.type === `opaqueredirect`;
    return o ? (k.location.href = k.location.origin + i,
    !0) : !1
}
async function Cn(e) {
    let t = await Gt(e);
    if (t) {
        try {
            localStorage.setItem(`preferredLocale`, e.nextLocale.code)
        } catch {}
        try {
            if (!L(t.path))
                throw Error(`Expected result.path to be a string`);
            if (t.isMissingInLocale) {
                let n = await Sn(e.route, t.pathVariables, e.nextLocale);
                if (n)
                    return
            }
        } catch {}
        return t
    }
}
function wn(e, t) {
    try {
        let n = k.history.state;
        if (!hn(n))
            return;
        let r = n?.paginationInfo === void 0 || n.paginationInfo[e] === void 0
          , i = {
            ...n.paginationInfo,
            [e]: t
        };
        gn({
            ...n,
            paginationInfo: i
        }, void 0, r)
    } catch {}
}
function Tn() {
    let e = S(Promise.resolve())
      , t = S()
      , n = E(n => {
        if (n.navigationType === `traverse`)
            return;
        let r = t.current;
        r?.signal.addEventListener(`abort`, () => {
            r.abort(`user aborted`)
        }
        ),
        n.intercept({
            handler: () => e.current
        })
    }
    , []);
    return E( (r, i, a) => {
        if (!lm) {
            i();
            return
        }
        e.current = r,
        t.current = a,
        k.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally( () => {
            k.navigation.removeEventListener(`navigate`, n)
        }
        )
    }
    , [n])
}
function En() {
    return d.useContext(fm)
}
function Dn() {
    var e;
    return (e = En().activeLocale)?.code ?? `en-US`
}
function On() {
    if (!pm)
        return;
    hm = !0,
    performance.mark(`framer-react-event-handling-start`);
    let e = {
        capture: !0
    }
      , t = document.body;
    pm.forEach(n => t.addEventListener(n, mm, e))
}
function kn() {
    return O( () => {
        if (!hm || !pm)
            return;
        let e = {
            capture: !0
        }
          , t = document.body;
        pm.forEach(n => t.removeEventListener(n, mm, e)),
        pm = void 0,
        performance.mark(`framer-react-event-handling-end`)
    }
    , []),
    null
}
function An(e) {
    let t = !1;
    return function(...n) {
        if (!t)
            return t = !0,
            e.apply(this, n)
    }
}
function jn(e, t, n) {
    try {
        performance.measure(e, t, n)
    } catch (t) {
        console.warn(`Could not measure ${e}`, t)
    }
}
function Mn() {
    Fm = new Pm,
    Fm.render.markStart()
}
function Nn() {
    p( () => {
        Fm?.useInsertionEffects.markRouterStart()
    }
    , []),
    f( () => {
        Fm?.useLayoutEffects.markRouterStart()
    }
    , []),
    O( () => {
        Fm?.useEffects.markRouterStart()
    }
    , [])
}
function Pn() {
    p( () => {
        Fm?.render.markEnd(),
        Fm?.useInsertionEffects.markStart()
    }
    , []),
    f( () => {
        if (Fm?.useLayoutEffects.markStart(),
        document.visibilityState !== `visible`) {
            Im = !0;
            return
        }
        be.read( () => {
            Fm?.browserRendering.requestAnimationFrame.markStart(),
            Fm?.unattributedHydrationOverhead.measure()
        }
        )
    }
    , []),
    O( () => {
        Fm?.useEffects.markStart(),
        Fm?.browserRendering.hasStarted || (Fm?.mutationEffects.measure(),
        Fm?.useEffects.markAreSynchronous())
    }
    , [])
}
function Fn() {
    p( () => {
        Fm?.useInsertionEffects.markEnd()
    }
    , []),
    f( () => {
        Fm?.useLayoutEffects.markEnd(),
        !(Im || document.visibilityState !== `visible`) && be.read( () => {
            Fm?.browserRendering.requestAnimationFrame.markEnd(),
            Mt().then( () => {
                Fm?.browserRendering.layoutStylePaint.markEnd()
            }
            )
        }
        )
    }
    , []),
    O( () => {
        Fm?.useEffects.markEnd()
    }
    , [])
}
function In() {
    return Pn(),
    null
}
function Ln() {
    return Fn(),
    null
}
function Rn(e, t) {
    let n = {
        style: t,
        "data-framer-root": ``
    };
    return d.isValidElement(e) ? d.cloneElement(e, n) : x(e, {
        ...n
    })
}
function zn(e) {
    if (Hm !== e) {
        Bm = {};
        for (let[t,{path: n}] of Object.entries(e))
            n && (Bm[n] = {
                path: n,
                depth: Vn(n),
                routeId: t
            });
        Vm = Object.values(Bm),
        Vm.sort( ({depth: e}, {depth: t}) => t - e),
        Hm = e
    }
    return [Bm, Vm]
}
function Bn(e, t, n=!0, r=[]) {
    let[i,a] = zn(e), o, s, c = t;
    if (r.length > 0) {
        let e = c.split(`/`).find(Boolean);
        if (e && (o = r.find( ({slug: t}) => t === e),
        o && (s = o.id,
        c = c.substring(o.slug.length + 1))),
        !s) {
            let e = r.find( ({slug: e}) => e === ``);
            e && (s = e.id)
        }
    }
    let l = i[c];
    if (l) {
        let e = Hn(c, l.path);
        if (e.isMatch)
            return {
                routeId: l.routeId,
                localeId: s,
                pathVariables: e.pathVariables
            }
    }
    for (let {path: e, routeId: t} of a) {
        let n = Hn(c, e);
        if (n.isMatch)
            return {
                routeId: t,
                localeId: s,
                pathVariables: n.pathVariables
            }
    }
    if (!n)
        throw Error(`No exact match found for path`);
    let u = i[`/`];
    if (u)
        return {
            routeId: u.routeId,
            localeId: s
        };
    let d = Object.keys(e)[0];
    if (!d)
        throw Error(`Router should not have undefined routes`);
    return {
        routeId: d,
        localeId: s
    }
}
function Vn(e) {
    let t = e.replace(/^\/|\/$/gu, ``);
    return t === `` ? 0 : t.split(`/`).length
}
function Hn(e, t) {
    let n = []
      , r = Un(t)
      , i = r.replace(Up, (e, t) => (n.push(t),
    `([^/]+)`))
      , a = RegExp(i + `$`)
      , o = e.match(a);
    if (!o)
        return {
            isMatch: !1
        };
    if (o.length === 1)
        return {
            isMatch: !0
        };
    let s = {}
      , c = o.slice(1);
    for (let e = 0; e < n.length; ++e) {
        let t = n[e];
        if (t === void 0)
            continue;
        let r = c[e]
          , i = s[t];
        if (i) {
            if (i !== r)
                return {
                    isMatch: !1
                };
            continue
        }
        if (r === void 0)
            throw Error(`Path variable values cannot be undefined`);
        s[t] = r
    }
    return {
        isMatch: !0,
        pathVariables: s
    }
}
function Un(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`)
}
function Wn() {
    var e;
    if (`PerformanceServerTiming`in k) {
        let t = (e = performance.getEntriesByType(`navigation`)[0])?.serverTiming;
        if (!t || t.length === 0)
            return new URLSearchParams;
        let n = t.find(e => e.name === `abtests`);
        return n ? new URLSearchParams(n.description) : new URLSearchParams
    }
    return new URLSearchParams
}
function Gn(e, t, n) {
    let r = e[n];
    if (!r)
        return;
    let i = r.abTestingParentId ?? n;
    if (!e[i])
        return;
    let {abTestingParentId: a, ...o} = r
      , s = e[i].elements || r.elements ? {
        ...e[i].elements,
        ...r.elements
    } : void 0;
    e[i] = {
        ...o,
        elements: s,
        abTestingVariantId: n,
        abTestId: t
    }
}
function Kn(e, t) {
    for (let[n,r] of t)
        Gn(e, n, r)
}
function qn(e) {
    var t;
    for (let n in e)
        (t = e[n])?.abTestingParentId && delete e[n]
}
function Jn(e, t) {
    var n, r;
    if (!e[t] || !e[t].abTestingParentId)
        return;
    let i = e[t].abTestingParentId
      , {abTestingParentId: a, ...o} = e[t]
      , s = (n = e[i])?.elements || o.elements ? {
        ...(r = e[i])?.elements,
        ...o.elements
    } : void 0;
    e[i] = {
        ...o,
        elements: s,
        abTestingVariantId: t
    }
}
function Yn(e, t) {
    var n;
    if (k === void 0)
        return t;
    let r = t;
    if (t) {
        Jn(e, t);
        let i = (n = e[t])?.abTestingParentId;
        i && (r = i)
    }
    return Kn(e, Wn()),
    qn(e),
    r
}
function B(e, ...t) {
    var n, r;
    if (e)
        return;
    let i = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
    if (i.stack)
        try {
            let e = i.stack.split(`
`);
            (n = e[1])?.includes(`assert`) ? (e.splice(1, 1),
            i.stack = e.join(`
`)) : (r = e[0])?.includes(`assert`) && (e.splice(0, 1),
            i.stack = e.join(`
`))
        } catch {}
    throw i
}
function V(e, t) {
    throw t || Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
}
async function Xn(e, t, n=`beforeend`) {
    let r, i;
    switch (n) {
    case `beforebegin`:
        B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        r = t.parentNode,
        i = t;
        break;
    case `afterend`:
        B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        r = t.parentNode,
        i = t.nextSibling;
        break;
    case `afterbegin`:
        r = t,
        i = t.firstChild;
        break;
    case `beforeend`:
        r = t,
        i = null;
        break;
    default:
        V(n)
    }
    let a = document.createRange();
    a.selectNodeContents(r);
    let o = a.createContextualFragment(e);
    await Zn(o, r, i)
}
async function Zn(e, t, n) {
    for (let r = e.firstChild; r; r = r.nextSibling) {
        if (r instanceof HTMLScriptElement) {
            let e = Qn(r, t, n);
            e !== void 0 && await e;
            continue
        }
        let e = r.cloneNode(!1);
        t.insertBefore(e, n),
        r.firstChild && await Zn(r, e, null)
    }
}
function Qn(e, t, n) {
    var r;
    let i = e.cloneNode(!0);
    if (!e.hasAttribute(`src`) || e.hasAttribute(`async`) || e.hasAttribute(`defer`) || (r = e.getAttribute(`type`))?.toLowerCase() === `module`)
        t.insertBefore(i, n);
    else
        return $n(i, t, n)
}
function $n(e, t, n) {
    return new Promise(r => {
        e.onload = e.onerror = r,
        t.insertBefore(e, n)
    }
    )
}
function er(e) {
    let {isInitialNavigation: t} = lt();
    O( () => {
        if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t ? t.setAttribute(`content`, e.robots) : (t = document.createElement(`meta`),
            t.setAttribute(`name`, `robots`),
            t.setAttribute(`content`, e.robots),
            document.head.appendChild(t))
        }
    }
    , [e.robots]),
    p( () => {
        var t;
        document.title = e.title || ``,
        e.viewport && ((t = document.querySelector(`meta[name="viewport"]`)) == null || t.setAttribute(`content`, e.viewport))
    }
    , [e.title, e.viewport]),
    O( () => {
        if (!t)
            return;
        let n = document.getElementById(Um)
          , r = n && n.dataset[Wm] !== void 0;
        r || tr(e.customHTMLHeadStart, e.customHTMLHeadEnd, e.customHTMLBodyStart, e.customHTMLBodyEnd)
    }
    , [])
}
async function tr(e, t, n, r) {
    let i, a, o, s;
    if (e || t) {
        let {start: n, end: r} = nr(document.head.childNodes, e ? qm : void 0, t ? Jm : void 0);
        i = n,
        a = r
    }
    if (n || r) {
        let {start: e, end: t} = nr(document.body.childNodes, n ? Ym : void 0, r ? Xm : void 0);
        o = e,
        s = t
    }
    e && i && await Xn(e, i, `beforebegin`),
    t && a && await Xn(t, a, `beforebegin`),
    n && o && await Xn(n, o, `beforebegin`),
    r && s && await Xn(r, s, `beforebegin`)
}
function nr(e, t, n) {
    if (!t && !n)
        return {
            start: void 0,
            end: void 0
        };
    let r, i, a = 0, o = e.length - 1;
    for (; a <= o; ) {
        let s = e[a]
          , c = e[o];
        if (!r && s?.nodeType === Node.COMMENT_NODE && t && `<!--${s.nodeValue}-->` === t && (r = s,
        !n) || !i && c?.nodeType === Node.COMMENT_NODE && n && `<!--${c.nodeValue}-->` === n && (i = c,
        !t) || r && i)
            break;
        a++,
        o--
    }
    return {
        start: r,
        end: i
    }
}
function rr(e, ...t) {
    Zm.has(e) || (Zm.add(e),
    console.warn(e, ...t))
}
function ir(e, t, n) {
    let r = n ? `, use ${n} instead` : ``
      , i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    rr(i)
}
function ar(e) {
    return typeof e == `object` && !!e && eh in e && e[eh]instanceof Function && th in e && e[th]instanceof Function
}
function or(e, t) {
    return {
        interpolate(e, n) {
            let r = e.get()
              , i = n.get()
              , a = $m(r);
            return e => {
                let n = t.interpolate(r, i)(e);
                return a.set(n),
                a
            }
        },
        difference(e, n) {
            let r = e.get();
            return t.difference(r, n.get())
        }
    }
}
function sr(e, t) {
    let n = Math.round(Math.abs(t))
      , r = 10 ** n;
    return Math.round(e * r) / r
}
function cr(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0,
    t < 0 && (t = 1 - t),
    Math.round(e - t) + t)
}
function lr(e) {
    return Math.round(e * 2) / 2
}
function ur(e, t) {
    return {
        x: e,
        y: t
    }
}
function dr(e, t, n, r=!1) {
    let[i,a] = t
      , [o,s] = n
      , c = a - i;
    if (c === 0)
        return (s + o) / 2;
    let l = s - o;
    if (l === 0)
        return o;
    let u = o + (e - i) / c * l;
    if (r === !0)
        if (o < s) {
            if (u < o)
                return o;
            if (u > s)
                return s
        } else {
            if (u > o)
                return o;
            if (u < s)
                return s
        }
    return u
}
function fr(e) {
    return !Number.isNaN(e) && Number.isFinite(e)
}
function pr(e) {
    let t = mr(e);
    return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t
}
function mr(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}
function hr(e, t, n) {
    return ah.rgb_r = e / 255,
    ah.rgb_g = t / 255,
    ah.rgb_b = n / 255,
    ah.rgbToHsluv(),
    {
        h: ah.hsluv_h,
        s: ah.hsluv_s,
        l: ah.hsluv_l
    }
}
function gr(e, t, n, r=1) {
    return ah.hsluv_h = e,
    ah.hsluv_s = t,
    ah.hsluv_l = n,
    ah.hsluvToRgb(),
    {
        r: ah.rgb_r * 255,
        g: ah.rgb_g * 255,
        b: ah.rgb_b * 255,
        a: r
    }
}
function _r(e, t, n, r) {
    let i = Math.round(e)
      , a = Math.round(t * 100)
      , o = Math.round(n * 100);
    return r === void 0 || r === 1 ? `hsv(` + i + `, ` + a + `%, ` + o + `%)` : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`
}
function vr(e, t, n) {
    return {
        r: fr(e) ? Tr(e, 255) * 255 : 0,
        g: fr(t) ? Tr(t, 255) * 255 : 0,
        b: fr(n) ? Tr(n, 255) * 255 : 0
    }
}
function yr(e, t, n, r) {
    let i = [Or(Math.round(e).toString(16)), Or(Math.round(t).toString(16)), Or(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join(``)
}
function br(e, t, n) {
    let r, i, a = Tr(e, 255), o = Tr(t, 255), s = Tr(n, 255), c = Math.max(a, o, s), l = Math.min(a, o, s), u = i = r = (c + l) / 2;
    if (c === l)
        u = i = 0;
    else {
        let e = c - l;
        switch (i = r > .5 ? e / (2 - c - l) : e / (c + l),
        c) {
        case a:
            u = (o - s) / e + (o < s ? 6 : 0);
            break;
        case o:
            u = (s - a) / e + 2;
            break;
        case s:
            u = (a - o) / e + 4;
            break
        }
        u /= 6
    }
    return {
        h: u * 360,
        s: i,
        l: r
    }
}
function xr(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Sr(e, t, n) {
    let r, i, a;
    if (e = Tr(e, 360),
    t = Tr(t * 100, 100),
    n = Tr(n * 100, 100),
    t === 0)
        r = i = a = n;
    else {
        let o = n < .5 ? n * (1 + t) : n + t - n * t
          , s = 2 * n - o;
        r = xr(s, o, e + 1 / 3),
        i = xr(s, o, e),
        a = xr(s, o, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: a * 255
    }
}
function Cr(e, t, n) {
    e = Tr(e, 255),
    t = Tr(t, 255),
    n = Tr(n, 255);
    let r = Math.max(e, t, n)
      , i = Math.min(e, t, n)
      , a = r - i
      , o = 0
      , s = r === 0 ? 0 : a / r
      , c = r;
    if (r === i)
        o = 0;
    else {
        switch (r) {
        case e:
            o = (t - n) / a + (t < n ? 6 : 0);
            break;
        case t:
            o = (n - e) / a + 2;
            break;
        case n:
            o = (e - t) / a + 4;
            break
        }
        o /= 6
    }
    return {
        h: o,
        s,
        v: c
    }
}
function wr(e, t, n) {
    e = Tr(e, 360) * 6,
    t = Tr(t * 100, 100),
    n = Tr(n * 100, 100);
    let r = Math.floor(e)
      , i = e - r
      , a = n * (1 - t)
      , o = n * (1 - i * t)
      , s = n * (1 - (1 - i) * t)
      , c = r % 6
      , l = [n, o, a, a, s, n][c]
      , u = [s, n, n, o, a, a][c]
      , d = [a, a, s, n, n, o][c];
    return {
        r: l * 255,
        g: u * 255,
        b: d * 255
    }
}
function Tr(e, t) {
    let n, r;
    if (n = typeof t == `string` ? parseFloat(t) : t,
    typeof e == `string`) {
        Er(e) && (e = `100%`);
        let t = Dr(e);
        r = Math.min(n, Math.max(0, parseFloat(e))),
        t && (r = Math.floor(r * n) / 100)
    } else
        r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}
function Er(e) {
    return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1
}
function Dr(e) {
    return typeof e == `string` && e.includes(`%`)
}
function Or(e) {
    return e.length === 1 ? `0` + e : `` + e
}
function kr(e) {
    if (e.includes(`gradient(`) || e.includes(`var(`))
        return !1;
    let t = /^[\s,#]+/u
      , n = e.replace(t, ``).trimEnd().toLowerCase()
      , r = rh[n];
    if (r && (n = r),
    n === `transparent`)
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: `name`
        };
    let i;
    return (i = oh.rgb.exec(n)) ? {
        r: parseInt(i[1] ?? ``),
        g: parseInt(i[2] ?? ``),
        b: parseInt(i[3] ?? ``),
        a: 1,
        format: `rgb`
    } : (i = oh.rgba.exec(n)) ? {
        r: parseInt(i[1] ?? ``),
        g: parseInt(i[2] ?? ``),
        b: parseInt(i[3] ?? ``),
        a: parseFloat(i[4] ?? ``),
        format: `rgb`
    } : (i = oh.hsl.exec(n)) ? {
        h: parseInt(i[1] ?? ``),
        s: pr(i[2] ?? ``),
        l: pr(i[3] ?? ``),
        a: 1,
        format: `hsl`
    } : (i = oh.hsla.exec(n)) ? {
        h: parseInt(i[1] ?? ``),
        s: pr(i[2] ?? ``),
        l: pr(i[3] ?? ``),
        a: parseFloat(i[4] ?? ``),
        format: `hsl`
    } : (i = oh.hsv.exec(n)) ? {
        h: parseInt(i[1] ?? ``),
        s: pr(i[2] ?? ``),
        v: pr(i[3] ?? ``),
        a: 1,
        format: `hsv`
    } : (i = oh.hsva.exec(n)) ? {
        h: parseInt(i[1] ?? ``),
        s: pr(i[2] ?? ``),
        v: pr(i[3] ?? ``),
        a: parseFloat(i[4] ?? ``),
        format: `hsv`
    } : (i = oh.hex8.exec(n)) ? {
        r: Ar(i[1] ?? ``),
        g: Ar(i[2] ?? ``),
        b: Ar(i[3] ?? ``),
        a: jr(i[4] ?? ``),
        format: r ? `name` : `hex`
    } : (i = oh.hex6.exec(n)) ? {
        r: Ar(i[1] ?? ``),
        g: Ar(i[2] ?? ``),
        b: Ar(i[3] ?? ``),
        a: 1,
        format: r ? `name` : `hex`
    } : (i = oh.hex4.exec(n)) ? {
        r: Ar(`${i[1]}${i[1]}`),
        g: Ar(`${i[2]}${i[2]}`),
        b: Ar(`${i[3]}${i[3]}`),
        a: jr(i[4] + `` + i[4]),
        format: r ? `name` : `hex`
    } : (i = oh.hex3.exec(n)) ? {
        r: Ar(`${i[1]}${i[1]}`),
        g: Ar(`${i[2]}${i[2]}`),
        b: Ar(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? `name` : `hex`
    } : !1
}
function Ar(e) {
    return parseInt(e, 16)
}
function jr(e) {
    return Ar(e) / 255
}
function Mr(e) {
    let t = sh.exec(e);
    if (!t)
        return null;
    let {r: n=`0`, g: r=`0`, b: i=`0`, a} = t.groups ?? {};
    return {
        r: parseFloat(n),
        g: parseFloat(r),
        b: parseFloat(i),
        a: a ? parseFloat(a) : 1
    }
}
function Nr(e=0) {
    let t = Math.abs(e);
    return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4
}
function Pr({r: e, g: t, b: n, a: r}) {
    return {
        r: Nr(e),
        g: Nr(t),
        b: Nr(n),
        a: r
    }
}
function Fr(e=0) {
    let t = Math.abs(e);
    return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92
}
function Ir({r: e, g: t, b: n, a: r}) {
    return {
        r: Fr(e),
        g: Fr(t),
        b: Fr(n),
        a: r
    }
}
function Lr({r: e, g: t, b: n, a: r}) {
    let i = Math.max(e, t, n)
      , a = Math.min(e, t, n)
      , o = {
        h: 0,
        s: i === 0 ? 0 : 1 - a / i,
        v: i,
        a: r
    };
    return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n ? 6 : 0) : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60),
    o
}
function Rr(e) {
    return (e %= 360) < 0 ? e + 360 : e
}
function zr({h: e=0, s: t=0, v: n=0, a: r=1}) {
    let i = Rr(e)
      , a = Math.abs(i / 60 % 2 - 1);
    switch (Math.floor(i / 60)) {
    case 0:
        return {
            r: n,
            g: n * (1 - t * a),
            b: n * (1 - t),
            a: r
        };
    case 1:
        return {
            r: n * (1 - t * a),
            g: n,
            b: n * (1 - t),
            a: r
        };
    case 2:
        return {
            r: n * (1 - t),
            g: n,
            b: n * (1 - t * a),
            a: r
        };
    case 3:
        return {
            r: n * (1 - t),
            g: n * (1 - t * a),
            b: n,
            a: r
        };
    case 4:
        return {
            r: n * (1 - t * a),
            g: n * (1 - t),
            b: n,
            a: r
        };
    case 5:
        return {
            r: n,
            g: n * (1 - t),
            b: n * (1 - t * a),
            a: r
        };
    default:
        return {
            r: n * (1 - t),
            g: n * (1 - t),
            b: n * (1 - t),
            a: r
        }
    }
}
function Br(e) {
    return dh(uh(e))
}
function Vr(e) {
    return lh(ch(e))
}
function Hr(e, t, n, r=1) {
    let i;
    if (typeof e == `number` && !Number.isNaN(e) && typeof t == `number` && !Number.isNaN(t) && typeof n == `number` && !Number.isNaN(n)) {
        let a = e
          , o = t
          , s = n
          , c = r;
        i = Gr({
            r: a,
            g: o,
            b: s,
            a: c
        })
    } else
        typeof e == `string` ? i = Ur(e) : typeof e == `object` && (i = e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`) ? Gr(e) : Kr(e));
    return i
}
function Ur(e) {
    let t = kr(e);
    if (t)
        return t.format === `hsl` ? Kr(t) : t.format === `hsv` ? Wr(t) : Gr(t)
}
function Wr(e) {
    let t = wr(e.h, e.s, e.v)
      , n = br(t.r, t.g, t.b);
    return {
        ...n,
        ...t,
        format: `rgb`,
        a: e.a === void 0 ? 1 : qr(e.a)
    }
}
function Gr(e) {
    let t = vr(e.r, e.g, e.b)
      , n = br(t.r, t.g, t.b);
    return {
        ...n,
        ...t,
        format: `rgb`,
        a: e.a === void 0 ? 1 : qr(e.a)
    }
}
function Kr(e) {
    let t, n, r, i = {
        r: 0,
        g: 0,
        b: 0
    }, a = {
        h: 0,
        s: 0,
        l: 0
    };
    return t = fr(e.h) ? e.h : 0,
    t = (t + 360) % 360,
    n = fr(e.s) ? e.s : 1,
    typeof e.s == `string` && (n = mr(e.s)),
    r = fr(e.l) ? e.l : .5,
    typeof e.l == `string` && (r = mr(e.l)),
    i = Sr(t, n, r),
    a = {
        h: t,
        s: n,
        l: r
    },
    {
        ...i,
        ...a,
        a: e.a === void 0 ? 1 : e.a,
        format: `hsl`
    }
}
function qr(e) {
    return e = parseFloat(e),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
}
function Jr({children: e}) {
    let t = w(Th);
    if (t.top)
        return x(y, {
            children: e
        });
    let n = S({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {},
        count: {
            byId: {},
            byName: {}
        }
    })
      , r = S({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {}
    })
      , i = S(new Set).current
      , a = E( ({id: e, name: t, duplicatedFrom: a}) => {
        if (!e)
            return null;
        let o = t ? `byName` : `byId`
          , s = n.current[o][e];
        if (s)
            return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
            return n.current.count[o][c] === void 0 && (n.current.count[o][c] = 0,
            n.current.byLayoutId[c] = c,
            r.current[o][e] = c),
            i.add(c),
            c;
        let l;
        if (a?.length)
            for (let s = a.length - 1; s >= 0; s--) {
                let c = a[s];
                B(!!c, `duplicatedId must be defined`);
                let u = n.current[o][c]
                  , d = n.current.byLastId[c];
                if (d && !l) {
                    let e = n.current.byLayoutId[d]
                      , r = !e || e === t;
                    d && !i.has(d) && (!t || r) && (l = [d, c])
                }
                let f = u ? n.current.byLayoutId[u] : void 0
                  , p = !f || f === t;
                if (u && !i.has(u) && (!t || p))
                    return r.current[o][e] = u,
                    r.current.byLastId[c] = u,
                    i.add(u),
                    u
            }
        let u = n.current.byLastId[e];
        if (u && !i.has(u))
            return i.add(u),
            r.current.byId[e] = u,
            u;
        if (l) {
            let[t,n] = l;
            return r.current[o][e] = t,
            r.current.byLastId[n] = t,
            i.add(t),
            t
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d))
            return i.add(d),
            r.current.byId[e] = d,
            d;
        let f = a?.[0]
          , p = t || f || e
          , m = (n.current.count[o][p] ?? -1) + 1
          , {layoutId: h, value: g} = Yr(p, m, i);
        if (n.current.count[o][p] = g,
        r.current[o][e] = h,
        a?.length && !t) {
            let e = a[a.length - 1];
            if (e && (r.current.byLastId[e] = h),
            a.length > 1)
                for (let e = 0; e < a.length - 1; e++) {
                    let t = a[e];
                    t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = h))
                }
        }
        return r.current.byLayoutId[h] = c,
        i.add(h),
        h
    }
    , [])
      , o = E( () => {
        n.current = {
            byId: {
                ...n.current.byId,
                ...r.current.byId
            },
            byLastId: {
                ...n.current.byLastId,
                ...r.current.byLastId
            },
            byPossibleId: {
                ...n.current.byPossibleId,
                ...r.current.byPossibleId
            },
            byName: {
                ...n.current.byName,
                ...r.current.byName
            },
            byLastName: {
                ...n.current.byLastName,
                ...r.current.byLastName
            },
            byLayoutId: {
                ...n.current.byLayoutId,
                ...r.current.byLayoutId
            },
            count: {
                ...n.current.count,
                byName: {}
            }
        },
        r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {}
        },
        i.clear()
    }
    , [])
      , s = S({
        getLayoutId: a,
        persistLayoutIdCache: o,
        top: !0,
        enabled: !0
    }).current;
    return x(Th.Provider, {
        value: s,
        children: e
    })
}
function Yr(e, t, n) {
    let r = t
      , i = r ? `${e}-${r}` : e;
    for (; n.has(i); )
        r++,
        i = `${e}-${r}`;
    return {
        layoutId: i,
        value: r
    }
}
function Xr({enabled: e=!0, ...t}) {
    let n = w(Th)
      , r = T( () => ({
        ...n,
        enabled: e
    }), [e]);
    return x(Th.Provider, {
        ...t,
        value: r
    })
}
function Zr(e) {
    let t = S(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Qr(e) {
    let {error: t, file: n} = e
      , r = n ? `Error in ${$r(n)}` : `Error`
      , i = t instanceof Error ? t.message : `` + t;
    return D(`div`, {
        style: Dh,
        children: [x(`div`, {
            className: `text`,
            style: kh,
            children: r
        }), i && x(`div`, {
            className: `text`,
            style: Ah,
            children: i
        })]
    })
}
function $r(e) {
    return e.startsWith(`./`) ? e.replace(`./`, ``) : e
}
function H(e) {
    return Number.isFinite(e)
}
function ei(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}
function ti(e) {
    return typeof e != `string` && typeof e != `number`
}
function ni(e) {
    return e != null && typeof e != `boolean` && !ei(e)
}
function ri(e) {
    return e * (Math.PI / 180)
}
function ii(e) {
    if (typeof e == `string`) {
        let t = e.trim();
        if (t === `auto`)
            return 2;
        if (t.endsWith(`fr`))
            return 3;
        if (t.endsWith(`%`))
            return 1;
        if (t.endsWith(`vw`) || t.endsWith(`vh`))
            return 4
    }
    return 0
}
function ai(e, t, n, r) {
    if (typeof t == `string`) {
        if (t.endsWith(`%`) && n)
            switch (e) {
            case `maxWidth`:
            case `minWidth`:
                return parseFloat(t) / 100 * n.width;
            case `maxHeight`:
            case `minHeight`:
                return parseFloat(t) / 100 * n.height;
            default:
                break
            }
        if (t.endsWith(`vh`)) {
            if (!r)
                return oi(e);
            switch (e) {
            case `maxWidth`:
            case `minWidth`:
                return parseFloat(t) / 100 * r.width;
            case `maxHeight`:
            case `minHeight`:
                return parseFloat(t) / 100 * r.height;
            default:
                break
            }
        }
        return parseFloat(t)
    }
    return t
}
function oi(e) {
    switch (e) {
    case `minWidth`:
    case `minHeight`:
        return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
        return 1 / 0;
    default:
        V(e, `unknown constraint key`)
    }
}
function si(e, t, n, r) {
    return t.minHeight && (e = Math.max(ai(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ai(`maxHeight`, t.maxHeight, n, r), e)),
    e
}
function ci(e, t, n, r) {
    return t.minWidth && (e = Math.max(ai(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ai(`maxWidth`, t.maxWidth, n, r), e)),
    e
}
function li(e, t, n, r, i) {
    let a = ci(H(e) ? e : Ph, n, r, i)
      , o = si(H(t) ? t : Fh, n, r, i);
    return H(n.aspectRatio) && n.aspectRatio > 0 && (H(n.left) && H(n.right) ? o = a / n.aspectRatio : H(n.top) && H(n.bottom) || n.widthType === 0 ? a = o * n.aspectRatio : o = a / n.aspectRatio),
    {
        width: a,
        height: o
    }
}
function ui(e, t) {
    return !H(e) || !H(t) ? null : e + t
}
function di(e) {
    return typeof e.right == `string` || typeof e.bottom == `string` || typeof e.left == `string` && (!e.center || e.center === `y`) || typeof e.top == `string` && (!e.center || e.center === `x`)
}
function fi(e) {
    return !e._constraints || di(e) ? !1 : e._constraints.enabled
}
function pi(e) {
    let {size: t} = e
      , {width: n, height: r} = e;
    return H(t) && (n === void 0 && (n = t),
    r === void 0 && (r = t)),
    H(n) && H(r) ? {
        width: n,
        height: r
    } : null
}
function mi(e) {
    let t = pi(e);
    if (t === null)
        return null;
    let {left: n, top: r} = e;
    return H(n) && H(r) ? {
        x: n,
        y: r,
        ...t
    } : null
}
function hi(e, t, n=!0) {
    if (e.positionFixed || e.positionAbsolute)
        return null;
    let r = t === 1 || t === 2;
    if (!fi(e) || r)
        return mi(e);
    let i = gi(e)
      , a = _i(t)
      , o = a ? {
        sizing: a,
        positioning: a,
        viewport: null
    } : null;
    return Nh.toRect(i, o, null, n, null)
}
function gi(e) {
    let {left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s} = e
      , {width: c, height: l} = e;
    c === void 0 && (c = s),
    l === void 0 && (l = s);
    let {aspectRatio: u, autoSize: d} = o
      , f = Mh.quickfix({
        left: H(t),
        right: H(n),
        top: H(r),
        bottom: H(i),
        widthType: ii(c),
        heightType: ii(l),
        aspectRatio: u || null,
        fixedSize: d === !0
    })
      , p = null
      , m = null
      , h = 0
      , g = 0;
    if (f.widthType !== 0 && typeof c == `string`) {
        let e = parseFloat(c);
        c.endsWith(`fr`) ? (h = 3,
        p = e) : c === `auto` ? h = 2 : (h = 1,
        p = e / 100)
    } else
        c !== void 0 && typeof c != `string` && (p = c);
    if (f.heightType !== 0 && typeof l == `string`) {
        let e = parseFloat(l);
        l.endsWith(`fr`) ? (g = 3,
        m = e) : l === `auto` ? g = 2 : (g = 1,
        m = parseFloat(l) / 100)
    } else
        l !== void 0 && typeof l != `string` && (m = l);
    let _ = .5
      , v = .5;
    return (a === !0 || a === `x`) && (f.left = !1,
    typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && (f.top = !1,
    typeof r == `string` && (v = parseFloat(r) / 100)),
    {
        left: f.left ? t : null,
        right: f.right ? n : null,
        top: f.top ? r : null,
        bottom: f.bottom ? i : null,
        widthType: h,
        heightType: g,
        width: p,
        height: m,
        aspectRatio: f.aspectRatio || null,
        centerAnchorX: _,
        centerAnchorY: v,
        minHeight: e.minHeight,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        maxWidth: e.maxWidth
    }
}
function _i(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}
function vi() {
    return d.useContext(Ih).parentSize
}
function yi(e) {
    return typeof e == `object`
}
function bi(e) {
    return yi(e) ? e.width : e
}
function xi(e) {
    return yi(e) ? e.height : e
}
function Si(e, t) {
    return x(Lh, {
        parentSize: t,
        children: e
    })
}
function Ci(e) {
    let t = vi()
      , n = hi(e, t, !0);
    return n
}
function wi({width: e, height: t}) {
    return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`
}
function Ti() {
    if (zh !== void 0)
        return zh;
    let e = document.createElement(`div`);
    Object.assign(e.style, {
        position: `absolute`,
        display: `flex`,
        flexDirection: `column`,
        rowGap: `1px`
    }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e);
    let t = e.scrollHeight === 1;
    return e.parentNode && e.parentNode.removeChild(e),
    zh = t,
    t
}
function Ei() {
    Vh || (Vh = !0,
    !Ti() && document.body.classList.add(Bh))
}
function Di(e) {
    return typeof e == `number` ? e : e.startsWith(`--`) ? U.variable(e) : e === `` ? `""` : e
}
function U(e, t) {
    let n = ` `;
    for (let e in t) {
        let r = t[e];
        n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Di(r)}; `
    }
    return e + ` {` + n + `}`
}
function Oi(e) {
    return e !== mg && e !== hg
}
function ki(e) {
    for (let t in e) {
        if (!Oi(t))
            continue;
        if (e?.[t] === !0)
            return !0
    }
    return !1
}
function Ai(e, t, n, r, i) {
    let a = d.useRef(null)
      , o = d.useCallback(e => {
        t && a.current !== !1 && (a.current = !1,
        e.currentTarget.setCustomValidity(` `),
        e.currentTarget.reportValidity(),
        t(e))
    }
    , [t])
      , s = d.useCallback(r => {
        if (n?.(r),
        !t && !e)
            return;
        let i = r.target.validity;
        a.current === !1 && !ki(i) && (r.currentTarget.setCustomValidity(``),
        r.target.reportValidity(),
        a.current = !0,
        e?.())
    }
    , [t, e, n])
      , c = d.useCallback(e => {
        if (!t) {
            r?.(e);
            return
        }
        if (a.current === !1)
            return;
        let n = e.currentTarget.validity;
        if (ki(n)) {
            o(e);
            return
        }
        r?.(e)
    }
    , [o, r, t]);
    return d.useMemo( () => ({
        onInvalid: o,
        onChange: s,
        onBlur: c,
        onFocus: i
    }), [o, s, c, i])
}
function ji(e, t) {
    return U.variable(...e.flatMap(e => [`${e}-rgb`, e]), t)
}
function Mi(e, t, n=bg) {
    if (!(!e || n.has(e) || typeof document > `u`)) {
        if (n.add(e),
        !t) {
            if (!xg) {
                let e = document.createElement(`style`);
                if (e.setAttribute(`type`, `text/css`),
                e.setAttribute(`data-framer-css`, `true`),
                !document.head) {
                    console.warn(`not injecting CSS: the document is missing a <head> element`);
                    return
                }
                if (document.head.appendChild(e),
                e.sheet)
                    xg = e.sheet;
                else {
                    console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
                    return
                }
            }
            t = xg
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {}
    }
}
function Ni() {
    if (i_)
        return;
    i_ = !0;
    let e = J.current() === J.preview ? r_ : n_;
    for (let t of e)
        Mi(t, void 0, void 0)
}
function Pi(e) {
    return z(e) || yt(e)
}
function Fi(e) {
    return !!e && a_ in e && e[a_] === !0
}
function Ii(e) {}
function Li(e) {
    try {
        switch (e.type) {
        case `string`:
        case `collectionreference`:
        case `multicollectionreference`:
        case `color`:
        case `date`:
        case `link`:
        case `boxshadow`:
        case `padding`:
        case `borderradius`:
        case `gap`:
            return L(e.defaultValue) ? e.defaultValue : void 0;
        case `boolean`:
            return bt(e.defaultValue) ? e.defaultValue : void 0;
        case `enum`:
            return St(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        case `fusednumber`:
        case `number`:
            return R(e.defaultValue) ? e.defaultValue : void 0;
        case `transition`:
            return z(e.defaultValue) ? e.defaultValue : void 0;
        case `border`:
            return z(e.defaultValue) ? e.defaultValue : void 0;
        case `font`:
            return z(e.defaultValue) ? e.defaultValue : void 0;
        case `linkrelvalues`:
            return xt(e.defaultValue) ? e.defaultValue : void 0;
        case `object`:
            {
                let t = z(e.defaultValue) ? e.defaultValue : {};
                return z(e.controls) && Ri(t, e.controls),
                t
            }
        case `array`:
            return xt(e.defaultValue) ? e.defaultValue : void 0;
        case `file`:
        case `image`:
        case `richtext`:
        case `pagescope`:
        case `eventhandler`:
        case `segmentedenum`:
        case `responsiveimage`:
        case `componentinstance`:
        case `slot`:
        case `scrollsectionref`:
        case `customcursor`:
        case `cursor`:
        case `trackingid`:
        case `vectorsetitem`:
            return;
        default:
            Ii(e);
            return
        }
    } catch {
        return
    }
}
function Ri(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r)
            continue;
        let i = e[n];
        if (!St(i) || Fi(r))
            continue;
        let a = Li(r);
        if (St(a))
            continue;
        e[n] = a
    }
}
function zi(e) {
    if (z(e.defaultProps))
        return e.defaultProps;
    let t = {};
    return e.defaultProps = t,
    t
}
function Bi(e, t) {
    if (!Pi(e))
        return;
    let n = zi(e);
    Ri(n, t)
}
function Vi(e, t) {
    Object.assign(e, {
        propertyControls: t
    }),
    Bi(e, t)
}
function Hi(e) {
    return e.propertyControls
}
function Ui() {
    let e = J.current();
    return e === J.canvas || e === J.export
}
function Wi() {
    let[e] = ee( () => Ui());
    return e
}
function Gi(e) {
    let t = Object.create(Object.prototype);
    return n => (t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
function Ki() {
    let e = {
        backgroundRepeat: `repeat`,
        backgroundPosition: `left top`,
        backgroundSize: `126px auto`,
        backgroundImage: Dt(`<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="#888" fill-rule="evenodd"/></svg>`),
        opacity: .2
    };
    return e
}
function qi(e) {
    switch (e) {
    case `fit`:
        return `contain`;
    case `stretch`:
        return `fill`;
    default:
        return `cover`
    }
}
function Ji(e, t) {
    let n = e ?? `center`
      , r = t ?? `center`;
    return n === `center` && r === `center` ? `center` : n + ` ` + r
}
function Yi(e) {
    return {
        display: `block`,
        width: `100%`,
        height: `100%`,
        borderRadius: `inherit`,
        objectPosition: Ji(e.positionX, e.positionY),
        objectFit: qi(e.fit)
    }
}
function Xi({image: e, containerSize: t, nodeId: n, alt: r, draggable: i, syncDecoding: a}) {
    let o = __.useImageSource(e, t, n)
      , s = Yi(e)
      , c = d.useRef(null);
    return x(`img`, {
        ref: c,
        decoding: a ? `sync` : `async`,
        fetchpriority: e.fetchPriority,
        loading: e.loading,
        width: e.pixelWidth,
        height: e.pixelHeight,
        sizes: e.sizes,
        srcSet: e.srcSet,
        src: o,
        alt: r ?? e.alt ?? ``,
        style: s,
        draggable: i
    })
}
function Zi({image: e, containerSize: t, nodeId: n}) {
    let r = d.useRef(null)
      , i = __.useImageElement(e, t, n)
      , a = Yi(e);
    return d.useLayoutEffect( () => {
        let e = r.current;
        if (e !== null)
            return e.appendChild(i),
            () => {
                e.removeChild(i)
            }
    }
    , [i]),
    Object.assign(i.style, a),
    x(`div`, {
        ref: r,
        style: {
            display: `contents`,
            borderRadius: `inherit`
        }
    })
}
function Qi({nodeId: e, image: t, containerSize: n}) {
    let r = d.useRef(null)
      , i = __.useImageSource(t, n, e);
    return d.useLayoutEffect( () => {
        let n = r.current;
        if (n === null)
            return;
        let a = Yi(t);
        __.renderOptimizedCanvasImage(n, i, a, e)
    }
    , [e, t, i]),
    x(`div`, {
        ref: r,
        style: {
            display: `contents`,
            borderRadius: `inherit`
        }
    })
}
function $i({layoutId: e, image: t, ...n}) {
    let {motionDivToDivBackgroundImage: r} = d_();
    e && (e += `-background`);
    let i = null
      , a = !!e
      , o = null;
    if (L(t.src))
        if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
            let e = R(t.backgroundSize) ? t.backgroundSize : 1
              , n = {
                width: Math.round(e * t.pixelWidth),
                height: Math.round(e * t.pixelHeight)
            }
              , r = lr(e * (t.pixelWidth / 2))
              , s = __.useImageSource(t, n);
            i = {
                ...v_,
                backgroundImage: `url(${s})`,
                backgroundRepeat: `repeat`,
                backgroundPosition: Ji(t.positionX, t.positionY),
                opacity: void 0,
                border: 0,
                backgroundSize: `${r}px auto`
            },
            o = null,
            a = !0
        } else
            o = J.current() === J.canvas ? __.canRenderOptimizedCanvasImage(__.useImageSource(t)) ? x(Qi, {
                image: t,
                ...n
            }) : x(Zi, {
                image: t,
                ...n
            }) : x(Xi, {
                image: t,
                syncDecoding: J.current() === J.export,
                ...n
            });
    let s = o ? v_ : i ?? {
        ...v_,
        ...Ki()
    };
    return a || !r ? x(De.div, {
        layoutId: e,
        style: s,
        "data-framer-background-image-wrapper": !0,
        children: o
    }) : x(`div`, {
        style: s,
        "data-framer-background-image-wrapper": !0,
        children: o
    })
}
function ea(e, t, n=!0) {
    let {borderWidth: r, borderStyle: i, borderColor: a} = e;
    if (!r)
        return;
    let o, s, c, l;
    if (typeof r == `number` ? o = s = c = l = r : (o = r.top || 0,
    s = r.bottom || 0,
    c = r.left || 0,
    l = r.right || 0),
    !(o === 0 && s === 0 && c === 0 && l === 0)) {
        if (n && o === s && o === c && o === l) {
            t.border = `${o}px ${i} ${a}`;
            return
        }
        t.borderStyle = e.borderStyle,
        t.borderColor = e.borderColor,
        t.borderTopWidth = `${o}px`,
        t.borderBottomWidth = `${s}px`,
        t.borderLeftWidth = `${c}px`,
        t.borderRightWidth = `${l}px`
    }
}
function ta(e) {
    let t = e.layoutId ? `${e.layoutId}-border` : void 0;
    if (!e.borderWidth)
        return null;
    let n = {
        position: `absolute`,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: `inherit`,
        pointerEvents: `none`
    };
    return e.border ? (n.border = e.border,
    x(De.div, {
        style: n
    })) : (ea(e, n, !1),
    x(De.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}
function na(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t
      , a = n ?? i
      , o = r && a ? r[a] : void 0;
    return o && typeof o == `string` && (e = {
        ...e,
        src: o
    }),
    e
}
function ra(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !b_.isImageObject(t))
        return;
    let r = null;
    if (r = L(n) ? {
        alt: ``,
        src: n
    } : $m.get(t, null),
    b_.isImageObject(r))
        return na(r, e)
}
function ia(e) {
    return e && e !== `search` && e !== `slot` && e !== `template` ? De[e] : De.div
}
function aa(e, t) {
    e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0,
    e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0
}
function oa(e) {
    let t = {};
    return !e || !M_ || J.current() !== J.canvas || aa(t, e),
    t
}
function sa(e) {
    return e.replace(/^id_/u, ``).replace(/\\/gu, ``)
}
function ca() {}
function la(e, t) {
    if (!t && (t = e.children,
    !t))
        return {
            props: e,
            children: t
        };
    let n = e._forwardedOverrides;
    return n && (t = d.Children.map(t, e => d.isValidElement(e) ? d.cloneElement(e, {
        _forwardedOverrides: n
    }) : e)),
    {
        props: e,
        children: t
    }
}
function ua(e) {
    return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === `x` ? `translateX(-50%) ${n}` : e === `y` ? `translateY(-50%) ${n}` : n || `none`
}
function da(e, {specificLayoutId: t, postfix: n}={}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o=!1, drag: s} = e
      , {getLayoutId: c, enabled: l} = w(Th);
    return T( () => {
        if (!l)
            return e.layoutId;
        let u = t || e.layoutId;
        if (!u && (s || !i || o))
            return;
        let d = u || c({
            id: i,
            name: r,
            duplicatedFrom: a
        });
        if (d)
            return n ? `${d}-${n}` : d
    }
    , [l])
}
function fa() {
    let[e,t] = d.useState(0);
    return d.useCallback( () => t(e => e + 1), [])
}
function pa(e) {
    let t = fa();
    O( () => {
        let n = e?.current;
        if (n)
            return I_?.observeElementWithCallback(e.current, t),
            () => {
                I_?.unobserve(n)
            }
    }
    , [e, t])
}
function ma(e) {
    let t = e.firstElementChild && e.firstElementChild.hasAttribute(L_) ? e.firstElementChild.children : e.children;
    return [...t].filter(ha).map(ga)
}
function ha(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}
function ga(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
        return e;
    let t = [...e.children].find(ha);
    return t ? ga(t) : e
}
function _a(e, t, n= () => [], r={}) {
    let {id: i, visible: a, _needsMeasure: o} = e
      , {skipHook: s=!1} = r
      , c = w(P_)
      , l = J.current() === J.canvas;
    N_( () => {
        !l || c || s || t.current && i && a && o && __.queueMeasureRequest(sa(i), t.current, n(t.current))
    }
    )
}
function va(e) {
    let t = e.closest(`[data-framer-component-container]`);
    t && __.queueMeasureRequest(sa(t.id), t, ma(t))
}
function ya(e) {
    e.willChange = `transform`;
    let t = J.current() === J.canvas;
    B_ && t && (e.translateZ = R_)
}
function ba(e) {
    e.willChange = `transform`,
    xa(e, !0)
}
function xa(e, t) {
    let n = J.current() === J.canvas;
    if (!B_ || !n)
        return;
    let r = L(e.transform) && e.transform || ``;
    if (t) {
        let t = r.includes(z_);
        t || (e.transform = r + z_)
    } else
        e.transform = r.replace(z_, ``)
}
function Sa(e, t, n, r=!0) {
    if (!e)
        return;
    let i = o_(e.style)
      , a = n || i[t]
      , o = () => {
        Ca(a) && (i[t] = a)
    }
    ;
    i[t] = null,
    r ? Promise.resolve().then(o) : setTimeout(o, 0)
}
function Ca(e) {
    return L(e) || R(e) || Ct(e)
}
function wa(e, t) {
    let n = e.size;
    if (n < t)
        return;
    let r = Math.round(Math.random());
    for (let t of e.keys()) {
        if ((++r & 1) == 1)
            continue;
        e.delete(t)
    }
}
function Ta(e, t, n, r) {
    let i = t.get(n);
    if (i)
        return i;
    wa(t, e);
    let a = r(n);
    return t.set(n, a),
    a
}
function Ea(e, t) {
    let n = [e, t];
    return W_.test(e) ? e : Ta(1e3, G_, n, () => U_.multiplyAlpha(e, t))
}
function Da(e, t=1) {
    let n;
    return n = `stops`in e ? e.stops : [{
        value: e.start,
        position: 0
    }, {
        value: e.end,
        position: 1
    }],
    t === 1 ? n : n.map(e => ({
        ...e,
        value: Ea(e.value, t)
    }))
}
function Oa(e, t) {
    let n = 0;
    return Da(e, t).forEach(e => {
        n ^= H_(e.value) ^ e.position
    }
    ),
    n
}
function ka(e) {
    return e && K_.every(t => t in e)
}
function Aa(e) {
    return e && q_.every(t => t in e)
}
function ja({background: e, backgroundColor: t}, n) {
    t ? typeof t == `string` || mh(t) ? n.backgroundColor = t : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)) : e && (e = $m.get(e, null),
    typeof e == `string` || mh(e) ? n.background = e : Y_.isLinearGradient(e) ? n.background = Y_.toCSS(e) : Z_.isRadialGradient(e) ? n.background = Z_.toCSS(e) : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)))
}
function W(e, t, n, r) {
    if (r === void 0 && (r = t),
    e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}
function Ma(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}
function Na(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}
function Pa(e) {
    if (!e)
        return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = `preserve-3d` : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0 ? t.backfaceVisibility = `visible` : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent || (e.center === !0 ? (t.left = `50%`,
    t.top = `50%`) : e.center === `x` ? t.left = `50%` : e.center === `y` && (t.top = `50%`)),
    W(e, `size`, t),
    W(e, `width`, t),
    W(e, `height`, t),
    W(e, `minWidth`, t),
    W(e, `minHeight`, t),
    W(e, `top`, t),
    W(e, `right`, t),
    W(e, `bottom`, t),
    W(e, `left`, t),
    W(e, `position`, t),
    W(e, `overflow`, t),
    W(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && W(e, `border`, t),
    W(e, `borderRadius`, t),
    W(e, `radius`, t, `borderRadius`),
    W(e, `color`, t),
    W(e, `shadow`, t, `boxShadow`),
    W(e, `x`, t),
    W(e, `y`, t),
    W(e, `z`, t),
    W(e, `rotate`, t),
    W(e, `rotateX`, t),
    W(e, `rotateY`, t),
    W(e, `rotateZ`, t),
    W(e, `scale`, t),
    W(e, `scaleX`, t),
    W(e, `scaleY`, t),
    W(e, `skew`, t),
    W(e, `skewX`, t),
    W(e, `skewY`, t),
    W(e, `originX`, t),
    W(e, `originY`, t),
    W(e, `originZ`, t),
    ja(e, t),
    t
}
function Fa(e) {
    for (let t in e)
        if (t === `drag` || t.startsWith(`while`) || typeof o_(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
            return !0;
    return !1
}
function Ia(e) {
    if (e.drag)
        return `grab`;
    for (let t in e)
        if ($_.has(t))
            return `pointer`
}
function La(e) {
    return Ra(e) ? !0 : e.style ? !!Ra(e.style) : !1
}
function Ra(e) {
    return ev in e && (e[ev] === `scroll` || e[ev] === `auto`)
}
function za(e) {
    let {left: t, top: n, bottom: r, right: i, width: a, height: o, center: s, _constraints: c, size: l, widthType: u, heightType: d, positionFixed: f, positionAbsolute: p} = e
      , m = Ae(e.minWidth)
      , h = Ae(e.minHeight)
      , g = Ae(e.maxWidth)
      , _ = Ae(e.maxHeight)
      , v = {
        top: Ae(n),
        left: Ae(t),
        bottom: Ae(r),
        right: Ae(i),
        width: Ae(a),
        height: Ae(o),
        size: Ae(l),
        center: s,
        _constraints: c,
        widthType: u,
        heightType: d,
        positionFixed: f,
        positionAbsolute: p,
        minWidth: m,
        minHeight: h,
        maxWidth: g,
        maxHeight: _
    };
    return v
}
function Ba(e) {
    d.useInsertionEffect( () => {
        Ni()
    }
    , []);
    let t = w(P_)
      , {style: n, _initialStyle: r, __fromCanvasComponent: i, size: a} = e
      , o = za(e)
      , s = Ci(o)
      , c = {
        display: `block`,
        flex: n?.flex ?? `0 0 auto`,
        userSelect: J.current() === J.preview ? void 0 : `none`
    };
    e.__fromCanvasComponent || (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
    let l = !Fa(e) && !e.__fromCanvasComponent && !La(e)
      , u = e.style ? !(`pointerEvents`in e.style) : !0;
    l && u && (c.pointerEvents = `none`);
    let f = d.Children.count(e.children) > 0 && d.Children.toArray(e.children).every(e => typeof e == `string` || typeof e == `number`)
      , p = f && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`
    }
      , m = Pa(e);
    a === void 0 && !i && (Ma(m) || (c.width = tv.width),
    Na(m) || (c.height = tv.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight);
    let h = {};
    fi(o) && s && !wi(e) && (h = {
        left: s.x,
        top: s.y,
        width: s.width,
        height: s.height,
        right: void 0,
        bottom: void 0
    }),
    Object.assign(c, p, r, m, h, n),
    Object.assign(c, {
        overflowX: c.overflowX ?? c.overflow,
        overflowY: c.overflowY ?? c.overflow,
        overflow: void 0
    }),
    V_.applyWillChange(e, c, !0);
    let g = c;
    c.transform || (g = {
        x: 0,
        y: 0,
        ...c
    });
    let _ = Ui();
    return e.positionSticky ? (!_ || t) && (g.position = `sticky`,
    g.willChange = `transform`,
    g.zIndex = 1,
    g.top = e.positionStickyTop,
    g.right = e.positionStickyRight,
    g.bottom = e.positionStickyBottom,
    g.left = e.positionStickyLeft) : _ && (e.positionFixed || e.positionAbsolute) && (g.position = `absolute`),
    `rotate`in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
}
function Va(e) {
    let t = {};
    for (let n in e) {
        let r = Ee(n) || c_(n);
        r && !nv.has(n) ? t[n] = o_(e)[n] : (n === `positionTransition` || n === `layoutTransition`) && (t.layout = !0,
        typeof o_(e)[n] != `boolean` && !e.transition && (t.transition = o_(e)[n]))
    }
    return t
}
function Ha(e) {
    return `data-framer-name`in e
}
function Ua(e, t, n, r) {
    if (r) {
        let e = n ? {
            width: n.width,
            height: n.height
        } : 1;
        return e
    }
    let {_usesDOMRect: i} = e
      , {widthType: a=0, heightType: o=0, width: s, height: c} = t;
    return n && !i ? n : a === 0 && o === 0 && typeof s == `number` && typeof c == `number` ? {
        width: s,
        height: c
    } : i || e.positionFixed || e.positionAbsolute ? 2 : 0
}
function Wa(e) {
    return x(De.div, {
        layoutId: av,
        style: cv,
        children: e.children
    })
}
function Ga(e, t) {
    let n = ee( () => ({
        inputs: t,
        result: e()
    }))[0]
      , r = S(!0)
      , i = S(n)
      , a = r.current || !!(t && i.current.inputs && ot(t, i.current.inputs, !1))
      , o = a ? i.current : {
        inputs: t,
        result: e()
    };
    return O( () => {
        r.current = !1,
        i.current = o
    }
    , [o]),
    o.result
}
function Ka(e, t) {
    yt(e) ? e(t) : qa(e) && (e.current = t)
}
function qa(e) {
    return z(e) && `current`in e
}
function Ja() {
    let e = Zr( () => new Set)
      , t = Zr( () => new Map);
    return Zr( () => (n, r) => ({
        get current() {
            return n.current
        },
        set current(i) {
            if (i !== n.current) {
                if (n.current = i,
                r && r(i),
                t.forEach( (e, t) => {
                    e ? e() : t(null)
                }
                ),
                i === null) {
                    t.clear(),
                    e.clear();
                    return
                }
                e.forEach(e => {
                    let n = e(i);
                    t.set(e, n)
                }
                )
            }
        },
        observe(r) {
            e.add(r);
            let i = n.current;
            if (i) {
                let e = r(i);
                t.set(r, e)
            }
        },
        unobserve(n) {
            if (!n || (e.delete(n),
            !t.has(n)))
                return;
            let r = t.get(n);
            r ? r() : n(null),
            t.delete(n)
        }
    }))
}
function Ya(e) {
    let t = S(null)
      , n = Ja();
    return Zr( () => qa(e) ? n(e) : yt(e) ? n(t, e) : n(t))
}
function Xa(e, t, n) {
    let r = S()
      , i = S();
    if (Ga( () => {
        i.current !== void 0 && (i.current = !0)
    }
    , n ?? [{}]),
    !e)
        return;
    let a = i.current;
    a !== !1 && (i.current = !1,
    e.unobserve(r.current),
    e.observe(t),
    r.current = t)
}
function Za(e, t, n, r, i, a, o) {
    let s = e.get(t);
    return (!s || s.root !== r?.current) && (s = new lv({
        root: r?.current,
        rootMargin: a,
        threshold: o
    }),
    e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
        s.unobserve(n)
    }
}
function Qa(e, t, n) {
    let r = Zr( () => `${n.rootMargin}`)
      , i = w(uv)
      , {enabled: a, root: o, rootMargin: s, threshold: c} = n;
    Xa(e, e => {
        if (a && e !== null)
            return Za(i, r, e, o, t, s, c)
    }
    , [a, t, o, s, c])
}
function $a(e, t, n) {
    let r = d.useRef({
        isInView: !1,
        hasAnimatedOnce: !1
    })
      , {enabled: i, animateOnce: a, threshold: o, rootMargin: s=`0px 0px 0px 0px`} = n
      , c = d.useCallback(e => {
        let {isInView: n, hasAnimatedOnce: i} = r.current
          , s = to(e, o?.y ?? 0);
        if (s && !n) {
            if (a && i)
                return;
            r.current.hasAnimatedOnce = !0,
            r.current.isInView = !0,
            t(!0);
            return
        }
        if (!s && n) {
            if (r.current.isInView = !1,
            a)
                return;
            t(!1);
            return
        }
    }
    , [a, o?.y, t]);
    dv(e, c, {
        threshold: fv,
        rootMargin: s,
        enabled: i ?? !0
    })
}
function eo(e, t) {
    return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight)
}
function to({boundingClientRect: e, intersectionRect: t, isIntersecting: n}, r) {
    return e.height === 0 ? n : n && eo(t, e) >= r
}
function no() {
    let e = w(gv);
    return e
}
function ro() {
    return new Map
}
function io() {
    return Zr(ro)
}
function ao(e, t=[]) {
    let {register: n, deregister: r} = w(_v);
    O( () => {
        if (e)
            return n(e),
            () => r(e)
    }
    , [n, r, ...t])
}
function oo(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}
function so(e, t, n) {
    let r = {
        ...e
    };
    return t && (H(t.originX) && (r.originX = t.originX),
    H(t.originY) && (r.originY = t.originY),
    H(t.originZ) && (r.originZ = t.originZ)),
    n && (H(n.originX) && (r.originX = n.originX),
    H(n.originY) && (r.originY = n.originY),
    H(n.originZ) && (r.originZ = n.originZ)),
    r
}
function co(e) {
    var t, n, r;
    if (!e)
        return !1;
    let i = `rotateX`in e || `rotateY`in e || `z`in e;
    if (!i)
        return !1;
    let a = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0
      , o = (t = e?.transition)?.rotateX.from !== 0 || (n = e?.transition)?.rotateY.from !== 0 || (r = e?.transition)?.z.from !== 0;
    return a || o
}
function lo(e) {
    let t = e && e.appearsFrom ? e.appearsFrom : `right`;
    switch (t) {
    case `right`:
        return wv.PushLeft;
    case `left`:
        return wv.PushRight;
    case `bottom`:
        return wv.PushUp;
    case `top`:
        return wv.PushDown
    }
}
function uo(e) {
    let t = e && e.appearsFrom ? e.appearsFrom : `bottom`;
    switch (t) {
    case `right`:
        return wv.OverlayLeft;
    case `left`:
        return wv.OverlayRight;
    case `bottom`:
        return wv.OverlayUp;
    case `top`:
        return wv.OverlayDown
    }
}
function fo(e) {
    let t = e && e.appearsFrom ? e.appearsFrom : `bottom`;
    switch (t) {
    case `right`:
        return wv.FlipLeft;
    case `left`:
        return wv.FlipRight;
    case `bottom`:
        return wv.FlipUp;
    case `top`:
        return wv.FlipDown
    }
}
function po(e, t) {
    switch (t.type) {
    case `addOverlay`:
        return ho(e, t.transition, t.component);
    case `removeOverlay`:
        return go(e);
    case `add`:
        return _o(e, t.key, t.transition, t.component);
    case `remove`:
        return bo(e);
    case `update`:
        return mo(e, t.key, t.component);
    case `back`:
        return vo(e);
    case `forward`:
        return yo(e);
    default:
        return
    }
}
function mo(e, t, n) {
    return {
        ...e,
        containers: {
            ...e.containers,
            [t]: n
        }
    }
}
function ho(e, t, n) {
    let r = e.overlayStack[e.currentOverlay];
    if (r && r.component === n)
        return;
    let i = e.overlayItemId + 1
      , a = [...e.overlayStack, {
        key: `stack-${i}`,
        component: n,
        transition: t
    }];
    return {
        ...e,
        overlayStack: a,
        overlayItemId: i,
        currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
        previousOverlay: e.currentOverlay
    }
}
function go(e) {
    return {
        ...e,
        overlayStack: [],
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    }
}
function _o(e, t, n, r) {
    e.containers[t] || (e.containers[t] = r),
    e.history = e.history.slice(0, e.current + 1),
    e.visualIndex = Math.max(e.history.length, 0);
    let i = e.history[e.history.length - 1]
      , a = i && i.key === t;
    if (e.overlayStack = [],
    a && e.currentOverlay > -1)
        return {
            ...e,
            currentOverlay: -1,
            previousOverlay: e.currentOverlay
        };
    if (a)
        return;
    let o = e.containerVisualIndex[t]
      , s = e.containerIsRemoved[t]
      , c = i?.key && n.withMagicMotion ? To(t, o, s, e.history) : !0;
    e.history.push({
        key: t,
        transition: n,
        visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]
    });
    let l = e.current + 1
      , u = e.current;
    for (let t in e.containerIndex)
        e.containerIndex[t] === l && (e.containerIndex[t] = Co(t, e.history));
    e.containerIndex[t] = l;
    let {containerVisualIndex: d, containerIsRemoved: f} = xo(e, t, c)
      , p = wo(l, u, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: l,
        previous: u,
        containerVisualIndex: d,
        containerIsRemoved: f,
        transitionForContainer: p,
        previousTransition: null,
        currentOverlay: -1,
        historyItemId: e.historyItemId + 1,
        previousOverlay: e.currentOverlay
    }
}
function vo(e) {
    let t = {
        ...e.containers
    }
      , n = bo(e);
    if (n)
        return n.containers = t,
        n
}
function yo(e) {
    let t = e.history[e.current + 1];
    if (!t)
        return;
    let {key: n, transition: r, component: i} = t
      , a = [...e.history]
      , o = _o(e, n, r, i);
    if (o)
        return o.history = a,
        o
}
function bo(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1)
        return;
    let n = t.pop();
    if (!n)
        return;
    let r = t[t.length - 1];
    B(r, `The navigation history must have at least one component`),
    e.containerIndex[r.key] = t.length - 1;
    let i = t.every(e => e.key !== n.key);
    i && delete e.containers[n.key];
    let a = e.current - 1
      , o = e.current
      , {containerIsRemoved: s, containerVisualIndex: c, previousTransition: l, visualIndex: u} = So(e, r, n)
      , d = wo(a, o, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: a,
        previous: o,
        containerIsRemoved: s,
        containerVisualIndex: c,
        previousTransition: l,
        visualIndex: u,
        transitionForContainer: d
    }
}
function xo(e, t, n) {
    let r = {
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        containerIsRemoved: {
            ...e.containerIsRemoved
        }
    };
    if (n)
        r.containerVisualIndex[t] = e.history.length - 1,
        r.containerIsRemoved[t] = !1;
    else {
        let n = e.containerVisualIndex[t];
        for (let[t,i] of Object.entries(e.containerVisualIndex))
            n !== void 0 && i > n && (r.containerIsRemoved[t] = !0)
    }
    return r
}
function So(e, t, n) {
    let r = [t.key, n.key]
      , i = e.history[e.history.length - 2]
      , a = e.previousTransition === null ? null : {
        ...e.previousTransition
    }
      , o = {
        containerIsRemoved: {
            ...e.containerIsRemoved
        },
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        previousTransition: a,
        visualIndex: e.visualIndex
    };
    i && r.push(i.key);
    let s = e.containerVisualIndex[t.key]
      , c = e.containerVisualIndex[n.key]
      , l = s !== void 0 && c !== void 0 && s <= c || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1
      , u = t.visualIndex;
    return l ? (o.containerIsRemoved[n.key] = !0,
    o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u) : (o.visualIndex = e.visualIndex + 1,
    o.containerVisualIndex[t.key] = e.visualIndex + 1),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    e.containerIsRemoved[t.key] = !1,
    o
}
function Co(e, t) {
    var n;
    for (let r = t.length; r > t.length; r--)
        if ((n = t[r])?.key === e)
            return r;
    return -1
}
function wo(e, t, n, r, i) {
    let a = {
        ...i
    };
    for (let[i,o] of Object.entries(r)) {
        let r = Eo(o, {
            current: e,
            previous: t,
            history: n
        });
        r && (a[i] = r)
    }
    return a
}
function To(e, t, n, r) {
    if (n || t === void 0)
        return !0;
    if (t === 0)
        return !1;
    let i = r.slice(t, r.length);
    if (i.findIndex(t => t.key === e) > -1)
        return !0;
    let a = r.slice(0, t - 1);
    return !(a.findIndex(t => t.key === e) > -1)
}
function Eo(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let t = i[e];
            return Do(`enter`, t?.transition.enter, t?.transition.animation)
        }
        if (e === r && n > r) {
            let t = i[e + 1];
            return Do(`exit`, t?.transition.exit, t?.transition.animation)
        }
        if (e === n && n < r) {
            let t = i[e + 1];
            return Do(`enter`, t?.transition.exit, t?.transition.animation)
        }
        if (e === r && n < r) {
            let t = i[e];
            return Do(`exit`, t?.transition.enter, t?.transition.animation)
        }
    }
}
function Do(e, t, n) {
    let r = {}
      , i = {};
    return Ev.forEach(e => {
        r[e] = bv[e],
        i[e] = {
            ...n,
            from: bv[e]
        }
    }
    ),
    t && Object.keys(t).forEach(a => {
        if (t[a] === void 0)
            return;
        let o = t[a]
          , s = typeof t[a] == `string` ? `${o_(bv)[a]}%` : o_(bv)[a];
        o_(r)[a] = e === `enter` ? s : o,
        i[a] = {
            ...n,
            from: e === `enter` ? o : s,
            velocity: 0
        }
    }
    ),
    {
        ...r,
        transition: {
            ...i
        }
    }
}
function Oo(e) {
    let t, n;
    return e.current === -1 ? n = e.history[e.previous] : t = e.history[e.current],
    {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}
function ko({currentOverlayItem: e}) {
    return e && e.transition.exit
}
function Ao({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : Av
}
function jo({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}
function Mo(e) {
    if (e.backdropColor)
        return e.backdropColor;
    if (e.overCurrentContext)
        return `rgba(4,4,15,.4)`
}
function No(e, t) {
    let {current: n, history: r} = t;
    if (e === n) {
        let t = r[e];
        return t && t.transition ? t.transition.backfaceVisible : !0
    } else if (e < n) {
        let t = r[e + 1];
        return t && t.transition ? t.transition.backfaceVisible : !0
    } else {
        let t = r[e];
        return t && t.transition ? t.transition.backfaceVisible : !0
    }
}
function Po(e, t) {
    let n = t.history[e];
    if (n)
        return n.transition.enter
}
function Fo(e, t) {
    var n, r, i, a;
    let {current: o, previous: s, history: c} = t;
    return e === s && o > s || e === o && o < s ? (r = (n = c[e + 1])?.transition)?.backfaceVisible : (a = (i = c[e])?.transition)?.backfaceVisible
}
function Io(e, t) {
    let {current: n, history: r} = t;
    if (e !== n)
        if (e < n) {
            let t = r[e + 1];
            if (t && t.transition)
                return t.transition.exit
        } else {
            let t = r[e];
            if (t && t.transition)
                return t.transition.enter
        }
}
function Lo(e, t) {
    let {current: n, previous: r, history: i} = t
      , a = r > n ? r : n;
    if (e < a) {
        let t = i[e + 1];
        if (t && t.transition.animation)
            return t.transition.animation
    } else if (e !== a) {
        let t = i[e];
        if (t && t.transition.animation)
            return t.transition.animation
    } else {
        let t = i[e];
        if (t?.transition.animation)
            return t.transition.animation
    }
    return Av
}
function Ro(e, t, n) {
    let {current: r, previous: i, history: a} = t;
    return !!(n && a.length > 1 || e !== i && e !== r || r === i)
}
function zo(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}
function Bo(e) {
    let t = d.Children.map(e.component, t => {
        var n;
        if (!ni(t) || !ti(t) || !t.props)
            return t;
        let r = {
            style: t.props.style ?? {}
        }
          , i = (n = e?.transition)?.position
          , a = !i || i.left !== void 0 && i.right !== void 0
          , o = !i || i.top !== void 0 && i.bottom !== void 0
          , s = `style`in t.props ? z(t.props.style) : !0;
        if (a) {
            let e = `width`in t.props;
            e && (r.width = `100%`),
            s && (r.style.width = `100%`)
        }
        if (o) {
            let e = `height`in t.props;
            e && (r.height = `100%`),
            s && (r.style.height = `100%`)
        }
        return d.cloneElement(t, r)
    }
    );
    return t
}
function Vo(e, t) {
    if (e.goBackOnTapOutside !== !1)
        return t
}
function Ho(e) {
    let t = He()
      , n = Le();
    return d.useInsertionEffect( () => {
        Ni()
    }
    , []),
    x(kv, {
        ...e,
        resetProjection: t,
        skipLayoutAnimation: n,
        children: e.children
    })
}
function Uo(e) {
    return zv in e
}
function Wo(e, t) {
    if (!Uo(e))
        return;
    let n = $m.getNumber(e.opacity);
    n !== 1 && (t.opacity = n)
}
function Go(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(e => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
        t.push(...n)
    }
    return t
}
function Ko(e, t) {
    if (!e.shadows || e.shadows.length === 0)
        return;
    let n = e.shadows.map(e => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
    n && (t.textShadow = n)
}
function qo(e, t) {
    let n = [];
    H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Go(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `))
}
function Jo(e, t) {
    H(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}
function Yo(e, t) {
    Jo(e, t),
    qo(e, t)
}
function Xo(e, t) {
    let n, r = (...r) => {
        K.clearTimeout(n),
        n = K.setTimeout(e, t, ...r)
    }
    , i = () => {
        K.clearTimeout(n)
    }
    ;
    return r.cancel = i,
    r
}
function Zo(...e) {
    return e.filter(Boolean).join(` `)
}
function Qo(e) {
    if (e.startsWith(Kv))
        return e.substr(qv)
}
function $o(e, t, n) {
    let i = v.map(e, e => r(e) ? C(e, t) : e);
    return n ? i : x(y, {
        children: i
    })
}
function es(e) {
    let t = Zr( () => ts(e));
    return t.useSetup(e),
    t.cloneAsElement
}
function ts(e) {
    let t = {
        forwardedRef: e,
        childRef: null,
        ref: null
    };
    t.ref = ns(t);
    let n = (e, n) => {
        if (!t.forwardedRef && t.forwardedRef === e) {
            t.ref = n;
            return
        }
        let r = !1;
        t.childRef !== n && (t.childRef = n,
        r = !0),
        t.forwardedRef !== e && (t.forwardedRef = e,
        r = !0),
        r && (t.ref = ns(t))
    }
      , i = !1;
    function a(a, o) {
        if (i)
            throw ReferenceError(`useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`);
        return i = !0,
        v.count(a) > 1 && e && (t.forwardedRef = void 0,
        t.ref = t.childRef),
        v.map(a, e => {
            if (r(e)) {
                let r = `ref`in e ? e.ref : void 0;
                n(t.forwardedRef, r);
                let i = yt(o) ? o(e.props) : o;
                return C(e, t.ref === r ? i : {
                    ...i,
                    ref: t.ref
                })
            }
            return e
        }
        )
    }
    let o = function(e, t) {
        return x(y, {
            children: a(e, t)
        })
    };
    return o.cloneAsArray = a,
    {
        useSetup: e => {
            i = !1,
            n(e, t.childRef)
        }
        ,
        cloneAsElement: o
    }
}
function ns(e) {
    if (!e.forwardedRef)
        return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return e => {
        Ka(n, e),
        Ka(t, e)
    }
}
function rs(e, t, n, r, i, a, o, s) {
    let c = d.Children.toArray(t)
      , l = c[0];
    if (c.length !== 1 || !d.isValidElement(l))
        return console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
        o(t, n);
    let u = []
      , f = [];
    for (let[t] of Object.entries(r)) {
        if (t === i)
            continue;
        let n = e[t];
        if (!n || !ls(l.props, n)) {
            f.push(t);
            continue
        }
        let r = cs([t], a);
        r.length && u.push({
            variants: r,
            propOverrides: n
        })
    }
    if (u.length === 0)
        return o(l, n);
    let p = [i, ...f]
      , m = cs(p, a);
    m.length && u.unshift({
        variants: m
    });
    let h = [];
    for (let {variants: e, propOverrides: t} of u) {
        if (s && !e.includes(s))
            continue;
        let c = e.join(`+`)
          , d = x(ey.Provider, {
            value: {
                primaryVariantId: i,
                variants: new Set(e)
            },
            children: o(l, t ? {
                ...n,
                ...t
            } : n)
        }, c)
          , f = ss(e, a, r);
        f.length ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        d = x(`div`, {
            className: `${ty} ${f.join(` `)}`,
            children: d
        }, c)) : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
        h.push(d)
    }
    return B(!s || h.length === 1, `Must render exactly one branch when activeVariantId is given`),
    h
}
function os(e) {
    return e.split(`-`)[2]
}
function ss(e, t, n) {
    let r = [];
    for (let[i,a] of Object.entries(n)) {
        let n = t && !t.has(i);
        if (e.includes(i) || n)
            continue;
        r.push(`hidden-${os(a)}`)
    }
    return r
}
function cs(e, t) {
    return t ? e.filter(e => t.has(e)) : e
}
function ls(e, t) {
    for (let n of Object.keys(t))
        if (!ot(e[n], t[n], !0))
            return !0;
    return !1
}
function us(e, t, n) {
    return !n || !e ? t : {
        ...t,
        ...n[e]
    }
}
function ds(e) {
    return d.forwardRef( ({optimized: t, ...n}, r) => {
        var i;
        let a = d.useContext(Jv)
          , o = (i = d.useContext(ey))?.variants
          , s = n[py];
        s && !S_() && dy.setAll(s, o, t ? n : null, a);
        let c = hy(n);
        return x(e, {
            ref: r,
            ...n,
            ...c
        })
    }
    )
}
function fs(e) {
    return L(e) || Array.isArray(e)
}
function ps(e) {
    return e in vy
}
function ms(e, t) {
    let n = Zr( () => ({
        values: _y(t ? e : void 0)
    }));
    return d.useEffect( () => {
        if (!t)
            for (let e of gy) {
                let t = vy[e];
                if (St(t))
                    continue;
                n.values[e].set(t)
            }
    }
    , [t]),
    n
}
function hs({loopEffectEnabled: e, loopRepeatDelay: t, loopTransition: n, loopRepeatType: r, loop: i, loopPauseOffscreen: a}, o) {
    let s = Ve()
      , l = Zr(_y)
      , u = S(!1)
      , d = Sy()
      , f = S(null)
      , p = E(async () => {
        if (!i)
            return;
        let e = n || void 0
          , t = u.current && r === `mirror`
          , a = t ? vy : i
          , o = t ? i : vy;
        return u.current = !u.current,
        f.current = Promise.all(gy.map(t => {
            if (!(s && t !== `opacity`))
                return l[t].jump(o[t] ?? vy[t]),
                new Promise(n => {
                    let r = {
                        ...e,
                        onComplete: () => n()
                    }
                      , i = a[t] ?? o[t];
                    typeof i == `number` && _e(l[t], i, r)
                }
                )
        }
        )),
        f.current
    }
    , [i, r, n, s])
      , [m,h] = ee(!1)
      , g = S(!1)
      , _ = E(async () => {
        !e || !g.current || (await p(),
        await d(t ?? 0),
        _())
    }
    , [p, d, e, t])
      , v = E( () => {
        g.current || (g.current = !0,
        c( () => h(!0)),
        _())
    }
    , [_])
      , y = E( (e=!0) => {
        gy.forEach(e => {
            l[e].stop()
        }
        ),
        gy.forEach(e => {
            l[e].set(vy[e])
        }
        ),
        u.current = !1,
        e && (g.current = !1,
        c( () => h(!1)))
    }
    , [])
      , b = e && i
      , x = E( () => {
        document.hidden ? y(!1) : g.current && (g.current = !1,
        v())
    }
    , [v, y]);
    O( () => {
        if (b)
            return document.addEventListener(`visibilitychange`, x),
            () => {
                document.removeEventListener(`visibilitychange`, x)
            }
    }
    , [b, x]),
    O( () => {
        b && a || (b ? v() : y())
    }
    , [v, y, a, b]),
    O( () => () => y(), [y]);
    let C = S(!1)
      , w = E(async () => {
        f.current && (await f.current,
        !C.current && y())
    }
    , [y])
      , D = E(e => {
        e.isIntersecting ? (C.current = !0,
        v()) : (C.current = !1,
        w())
    }
    , [v, w]);
    dv(o, D, {
        enabled: b && a
    });
    let k = m || !a;
    return T( () => ({
        values: l,
        style: b && k ? yy : by
    }), [b, k])
}
function gs(e, t, n, r, i) {
    let a = n / 100 - 1
      , o = i ? (t - r) * a : 0
      , s = -e * a;
    return o + s
}
function _s(e, t, n) {
    let {speed: r=100, offset: i=0, adjustPosition: a=!1, parallaxTransformEnabled: o} = e
      , s = d.useRef(null)
      , c = Ve()
      , l = d.useCallback(e => s.current === null || r === 100 ? 0 : gs(e, s.current, r, i, a), [r, i, a])
      , {scrollY: u} = Ue()
      , f = Ge(u, l)
      , p = ze(a && s.current === null ? `hidden` : n)
      , m = ze(0)
      , h = w(uv);
    return Xa(t, e => {
        if (e === null || !o)
            return;
        let t = Za(h, `undefined`, e, null, e => {
            s.current = e.boundingClientRect.top,
            be.update( () => {
                f.set(l(u.get())),
                a && p.set(n ?? `initial`)
            }
            ),
            t()
        }
        );
        return t
    }
    , [a, o]),
    pt( () => {
        o && f.set(0)
    }
    ),
    {
        values: {
            y: c || !o ? m : f
        },
        style: o ? {
            ...yy,
            visibility: p
        } : by
    }
}
function vs(e) {
    if (!(L(e) || !z(e)))
        return e?.transition
}
function ys(e, t, n, r, i, a) {
    let o = vs(e);
    return Promise.all(gy.map(s => new Promise(c => {
        if (n && s !== `opacity`)
            return c();
        let l = t.values[s];
        l.stop();
        let u = z(e) ? e?.[s] ?? vy[s] : vy[s];
        if (Te(u) && (u = u.get()),
        !R(u))
            return c();
        let d = Ke.get(r.current);
        d && d.setBaseTarget(s, u);
        let f;
        if (L(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, be);
            e && (f = e)
        }
        a ? l.set(u) : _e(l, u, {
            ...o,
            velocity: 0,
            startTime: f,
            onComplete: () => c()
        })
    }
    )))
}
function bs({initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a}, o, s, c, l) {
    let u = r ?? e
      , d = i ?? t
      , f = a ?? n
      , [p,m] = Be()
      , h = S({
        lastPresence: !1,
        lastAnimate: d,
        hasMounted: !1,
        running: !1
    })
      , g = Zr( () => {
        let e = u ?? c;
        if (!z(e))
            return {
                values: _y()
            };
        let t = {};
        for (let n in e) {
            let r = z(e) ? e[n] : void 0;
            if (!R(r))
                continue;
            t[n] = r
        }
        return {
            values: _y(t)
        }
    }
    );
    Xa(o, e => {
        let {hasMounted: t} = h.current;
        if (t && d)
            return;
        let n = Ke.get(e);
        if (n)
            for (let e in Object.assign(h.current, {
                hasMounted: !0
            }),
            g.values) {
                if (!ps(e))
                    continue;
                let t = c?.[e];
                n.setBaseTarget(e, R(t) ? t : vy[e])
            }
    }
    , [d]);
    let _ = Ve();
    Xa(o, e => {
        if (!s) {
            m?.();
            return
        }
        if (e === null)
            return;
        if (p !== h.current.lastPresence) {
            Object.assign(h.current, {
                lastPresence: p
            }),
            p ? u && d && (Object.assign(h.current, {
                running: !0
            }),
            ys(d, g, _, o, l).then( () => Object.assign(h.current, {
                running: !1
            }))) : f ? (Object.assign(h.current, {
                running: !0
            }),
            ys(f, g, _, o, l).then( () => Object.assign(h.current, {
                running: !1
            })).then( () => m())) : m();
            return
        }
        let {lastAnimate: t, running: n} = h.current
          , r = !ot(d, t);
        !r || !d || (Object.assign(h.current, {
            lastAnimate: d
        }),
        ys(d, g, _, o, l, !n).then( () => Object.assign(h.current, {
            running: !1
        })))
    }
    );
    let v = s && d;
    return T( () => ({
        values: g.values,
        style: v ? yy : by
    }), [v])
}
function xs(e, t) {
    let n = 0
      , r = e;
    for (; r && r !== t && r instanceof HTMLElement; )
        n += r.offsetTop,
        r = r.offsetParent;
    return n
}
function Ss(e, t=0, n) {
    var r;
    let i = []
      , a = [];
    for (let o = e.length; o >= 0; o--) {
        let {ref: s, offset: c} = e[o] ?? {};
        if (!s || !s.current)
            continue;
        let l = xs(s.current, document.documentElement)
          , u = l - Ty - (c ?? 0) - t
          , d = (r = s.current)?.clientHeight ?? 0
          , f = i[i.length - 1]
          , p = Math.max(u + d, 0);
        i.push(u),
        a.unshift(Math.max(u, 0), f === void 0 ? p : Math.min(p, Math.max(f - 1, 0))),
        n?.(o)
    }
    return a
}
function Cs(e, t=0) {
    return e < t ? `up` : `down`
}
function ws(e, t, n={}) {
    let {direction: r, target: i} = e ?? {}
      , {repeat: a=!0, enabled: o=!0} = n
      , s = ft();
    d.useEffect( () => {
        if (!r || !o)
            return;
        let e = s, n, c = 0, l, u;
        return je( (e, {y: o}) => {
            if (!a && u === i || o.current > o.scrollLength || o.current < 0)
                return;
            let s = Cs(o.current, n);
            n = o.current;
            let d = s !== l;
            if (l = s,
            d)
                c = o.current;
            else {
                let e = Math.abs(o.current - c);
                if (e < Ey)
                    return;
                let n = s === r ? i : void 0;
                n !== u && t(n),
                u = n
            }
        }
        )
    }
    , [s, r, a, i, o, t])
}
function Ts(e, t, n) {
    let r = Ss(e, t)
      , i = [...Oy]
      , a = r[0];
    if (!R(a))
        return ky;
    if (a > 1 && (r.unshift(0, a - 1),
    i.unshift(`initial`, `initial`)),
    n) {
        let e = r.length - 1
          , t = r[e];
        if (!R(t))
            return ky;
        r.push(t + 1),
        i.push(`exit`)
    }
    return {
        inputRange: r,
        outputRange: i
    }
}
function Es(e) {
    return {
        x: e?.x ?? vy.x,
        y: e?.y ?? vy.y,
        scale: e?.scale ?? vy.scale,
        opacity: e?.opacity ?? vy.opacity,
        transformPerspective: e?.transformPerspective ?? vy.transformPerspective,
        rotate: e?.rotate ?? vy.rotate,
        rotateX: e?.rotateX ?? vy.rotateX,
        rotateY: e?.rotateY ?? vy.rotateY,
        skewX: e?.skewX ?? vy.skewX,
        skewY: e?.skewY ?? vy.skewY,
        transition: e?.transition ?? void 0
    }
}
function Ds({opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o}) {
    return d.useMemo( () => ({
        initial: r ?? Es({
            ...o,
            opacity: e ?? t ?? 1,
            transformPerspective: n
        }),
        animate: a ?? Es({
            opacity: t
        }),
        exit: i ?? Es()
    }), [a, o, r, i, e, t, n])
}
function Os(e, t) {
    let n = Ve()
      , r = Ds(e)
      , i = e.styleAppearEffectEnabled
      , a = ms(i ? r.initial : r.animate, i)
      , o = d.useRef({
        isPlaying: !1,
        scheduledAppearState: void 0,
        lastAppearState: !e.styleAppearEffectEnabled
    })
      , s = ft()
      , c = d.useRef()
      , l = d.useCallback(async ({transition: i, ...o}, s) => {
        let l = i ?? r.animate.transition ?? e.transition;
        await c.current;
        let u = Ke.get(t.current);
        c.current = Promise.all(gy.map(e => {
            s && a.values[e].set(r.initial[e] ?? vy[e]);
            let t = o[e] ?? vy[e];
            return u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise(r => {
                if (n && e !== `opacity`)
                    R(t) && a.values[e].set(t),
                    r();
                else {
                    let n = {
                        restDelta: e === `scale` ? .001 : void 0,
                        ...l,
                        onComplete: () => r()
                    };
                    typeof t == `number` && _e(a.values[e], t, n)
                }
            }
            )
        }
        ))
    }
    , [])
      , u = e.animateOnce && o.current.lastAppearState === !0
      , f = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u;
    $a(t, e => {
        let {isPlaying: t, lastAppearState: n} = o.current;
        if (t) {
            o.current.scheduledAppearState = e;
            return
        }
        o.current.scheduledAppearState = void 0,
        o.current.lastAppearState = e,
        n !== e && l(e ? r.animate : r.exit, e)
    }
    , {
        enabled: f,
        animateOnce: !!e.animateOnce,
        threshold: {
            y: e.threshold
        }
    });
    let p = e.targets && i && !e.scrollDirection;
    return d.useEffect( () => {
        if (!p)
            return;
        let t = {
            initial: !0
        }
          , n = s
          , i = `initial`;
        return je( (n, {y: a}) => {
            let {targets: o} = e;
            if (!o || !o[0] || o[0].ref && !o[0].ref.current)
                return;
            let {inputRange: s, outputRange: c} = Ts(o, (e.threshold ?? 0) * a.containerLength, !!e.exit);
            if (s.length === 0 || s.length !== c.length)
                return;
            let u = Pe(a.current, s, c);
            if (e.animateOnce && t[u] || (t[u] = !0,
            i === u))
                return;
            i = u;
            let d = o_(r)[u];
            d && l(d)
        }
        )
    }
    , [s, p]),
    ws(e.scrollDirection, e => void l(e ?? r.animate), {
        enabled: i,
        repeat: !e.animateOnce
    }),
    pt( () => {
        var t;
        if (i && !(!e.targets && !e.scrollDirection))
            for (let e of gy)
                a.values[e].set((t = r.initial)?.[e] ?? vy[e])
    }
    ),
    T( () => ({
        values: a.values,
        style: i ? yy : by
    }), [i])
}
function ks(e, t) {
    let n = d.useRef({});
    d.useEffect( () => {
        if (t !== void 0)
            for (let i of gp(e)) {
                let a = function() {
                    let e = n.current[i];
                    e && e.stop(),
                    n.current[i] = ve({
                        keyframes: [o.get(), c],
                        velocity: o.getVelocity(),
                        ...t,
                        restDelta: .001,
                        onUpdate: s
                    })
                };
                var r = a;
                let o = e[i], s, c;
                o.attach( (e, t) => (c = e,
                s = t,
                be.postRender(a),
                o.get()))
            }
    }
    , [JSON.stringify(t)])
}
function As(e, t) {
    let n = My()
      , r = Ss(e, t, t => {
        var r, i, a;
        let o = (r = e[t - 1])?.target
          , s = (i = e[t])?.target;
        for (let e of gy)
            (a = n[e]) == null || a.unshift(o?.[e] ?? 0, s?.[e] ?? 0)
    }
    );
    return {
        inputRange: r,
        effectKeyOutputRange: n
    }
}
function js(e) {
    var t;
    let n = My();
    for (let {target: r} of e)
        for (let e of gy)
            (t = n[e]) == null || t.push(r[e]);
    return n
}
function Ms({transformTrigger: e, styleTransformEffectEnabled: t, transformTargets: n, spring: r, transformViewportThreshold: i=0}, a) {
    let o = Ve()
      , s = ms(jy(n, o), t)
      , c = !t || !n
      , l = e === `onScrollTarget`
      , u = ft();
    return f( () => {
        if (!(c || !l))
            return je( (e, {y: t}) => {
                if (!n[0] || n[0].ref && !n[0].ref.current)
                    return;
                let {inputRange: r, effectKeyOutputRange: a} = As(n, i * t.containerLength);
                if (r.length !== 0)
                    for (let e of gy) {
                        if (o && e !== `opacity` || r.length !== a[e].length || a[e][0] === void 0)
                            continue;
                        s.values[e].set(Pe(t.current, r, a[e]))
                    }
            }
            )
    }
    , [o, l, i, n, c]),
    Xa(a, t => {
        if (c || l || t === null)
            return;
        let r = u
          , i = js(n);
        return je( (e, {y: t}) => {
            for (let e of gy) {
                if (o && e !== `opacity` || Ny.length !== i[e].length || i[e][0] === void 0)
                    continue;
                s.values[e].set(Pe(t.progress, Ny, i[e]))
            }
        }
        , e === `onInView` ? {
            target: t ?? void 0,
            offset: [`start end`, `end end`]
        } : void 0)
    }
    , [u, o, e, l, n, c]),
    ks(s.values, r),
    pt( () => {
        if (c)
            return;
        let e = jy(n, o);
        for (let t of gy)
            s.values[t].set(e?.[t] ?? vy[t])
    }
    ),
    d.useMemo( () => ({
        values: s.values,
        style: t ? yy : by
    }), [t])
}
function Ns(e, t, n) {
    return !(e in n) && t in n || n[e] === !0
}
function Ps(e) {
    let t = {
        parallax: {},
        styleAppear: {},
        styleTransform: {},
        presence: {
            animate: e.animate,
            initial: e.initial,
            exit: e.exit
        },
        loop: {},
        forwardedProps: {},
        targetOpacityValue: e.__targetOpacity,
        withPerspective: e.__perspectiveFX,
        inSmartComponent: e.__smartComponentFX
    };
    for (let n in e) {
        if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`)
            continue;
        let r = Qo(n);
        if (r)
            for (let i of Fy) {
                let a = Py[i];
                if (a?.has(r)) {
                    t[i][r] = o_(e)[n];
                    break
                }
            }
        else
            t.forwardedProps[n] = o_(e)[n]
    }
    return t.parallax.parallaxTransformEnabled = Ns(`parallaxTransformEnabled`, `speed`, t.parallax),
    t.styleAppear.styleAppearEffectEnabled = Ns(`styleAppearEffectEnabled`, `animateOnce`, t.styleAppear),
    t
}
function Fs(e) {
    return z(e) && Ry in e
}
function Is(e, t) {
    if (!e || !z(e))
        return t;
    for (let n in e) {
        let r = e[n];
        if (!Te(r) || !ps(n) || !R(r.get()))
            continue;
        t[n].push(r)
    }
}
function Ls(e) {
    return L(e) || Array.isArray(e)
}
function Rs() {
    return d.useContext(Vy)
}
function zs(e) {
    let t = `A component suspended while responding to synchronous input.`
      , n = `Minified React error #426`;
    return e instanceof Error && (e.message.includes(t) || e.message.includes(n))
}
function Bs() {
    if (k === void 0 || Wy)
        return x(`div`, {
            hidden: !0,
            dangerouslySetInnerHTML: {
                __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`
            }
        });
    throw Ky
}
function Vs({children: e}) {
    let t = w(Jy);
    return t ? x(y, {
        children: e
    }) : x(a, {
        fallback: qy,
        children: e
    })
}
function Hs() {
    return x(`div`, {
        hidden: !0,
        dangerouslySetInnerHTML: {
            __html: `<!-- Code boundary fallback rendered -->`
        }
    })
}
function Us(e, t) {
    if (!Sp || Math.random() > .01)
        return;
    let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null
      , r = t?.componentStack;
    It(`published_site_load_recoverable_error`, {
        message: String(e),
        stack: n,
        componentStack: n ? void 0 : r
    })
}
function Ws(...e) {
    console.error(...e)
}
function Gs() {
    return J.current() !== J.canvas
}
function Ks({getErrorMessage: e, fallback: t, children: n}) {
    return Gs() ? x(qs, {
        fallback: t,
        children: x(Xy, {
            fallback: t,
            getErrorMessage: e,
            children: n
        })
    }) : n
}
function qs({children: e, fallback: t=Yy}) {
    return k === void 0 ? x(a, {
        fallback: t,
        children: e
    }) : x(Vs, {
        children: e
    })
}
function Js() {
    return d.useContext(Qy)
}
function Ys() {
    let e = Js()
      , t = d.useMemo( () => {
        if (!e)
            return;
        let t = e;
        for (; t.parent && t.parent.level > 0; )
            t = t.parent;
        return t
    }
    , [e]);
    return t
}
function Xs({children: e, scopeId: t, nodeId: n}) {
    let r = Js()
      , i = d.useMemo( () => ({
        level: (r?.level ?? 0) + 1,
        scopeId: t,
        nodeId: n,
        parent: r
    }), [t, n, r]);
    return x(Qy.Provider, {
        value: i,
        children: e
    })
}
function Zs(e, t) {
    return `${$y}${e}:${t}`
}
function Qs(e, t) {
    return ec(`component`, e, t)
}
function $s(e, t) {
    return ec(`override`, e, t)
}
function ec(e, t, n) {
    return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Zs(t, n)} \u2192 click \u201CShow Layer\u201D.`
}
function tc(e, t, n, r, i, a) {
    let o = rc(e, t, n, a);
    return o && !i && r || o && i
}
function nc(e, t, n, r) {
    return rc(e, t, n, r)
}
function rc(e, t, n, r) {
    if (St(n))
        return !0;
    let i = e === t;
    return !!(n === 1 && r && i)
}
function ic(e, t, n, r, i, a) {
    let o = Js();
    if (St(t) || St(n))
        return x(Zy, {
            children: e
        });
    let s = tc(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1);
    return s && (e = x(Ks, {
        getErrorMessage: Qs.bind(null, t, n),
        fallback: null,
        children: e
    })),
    i && (e = x(Xs, {
        scopeId: t,
        nodeId: n,
        children: e
    })),
    e
}
function ac(e, t, n) {
    let r = {};
    for (let[,i] of e)
        for (let e of i) {
            let i = r[e] ?? t[e] ?? n[e];
            i && (r[e] = i)
        }
    return r
}
function oc(e) {
    return !(!e || e.placement || e.alignment)
}
function sc(e) {
    switch (e) {
    case `start`:
        return `0%`;
    case `center`:
        return `-50%`;
    case `end`:
        return `-100%`;
    default:
        V(e)
    }
}
function cc(e, t=`center`) {
    switch (e) {
    case `top`:
        return `${sc(t)}, -100%`;
    case `right`:
        return `0%, ${sc(t)}`;
    case `bottom`:
        return `${sc(t)}, 0%`;
    case `left`:
        return `-100%, ${sc(t)}`;
    default:
        return `-50%, -50%`
    }
}
function lc(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n; ) {
        if (n === document.body)
            return;
        let e = n.getAttribute(`data-framer-cursor`);
        if (e)
            return e;
        if (n.hasAttribute(lb)) {
            let e = n.getAttribute(lb);
            n = n.parentElement,
            e && (n = document.getElementById(e) ?? n)
        } else
            n = n.parentElement
    }
}
function uc(e) {
    for (let t in e)
        return !1;
    return !0
}
function dc(e) {
    let {registerCursors: t} = w(rb)
      , n = Zr( () => e)
      , r = u();
    f( () => t(n, r), [t, r])
}
function fc(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : fc(e.parentElement, t) : null
}
function pc({children: e}) {
    return x(Vs, {
        children: e
    })
}
function mc(e) {
    return s(function(t, n) {
        return x(pc, {
            children: x(e, {
                ...t,
                ref: n
            })
        })
    })
}
function hc(e) {
    return !!(e && typeof e == `object` && mb in e)
}
function gc() {
    var e;
    let t = b.connection || b.mozConnection || b.webkitConnection || {}, n = b.deviceMemory && b.deviceMemory > _b, r, i, a;
    function o() {
        r = t.effectiveType || ``,
        i = t.saveData || r.includes(`2g`),
        a = r === `3g` || n ? vb : yb
    }
    (e = t.addEventListener) == null || e.call(t, `change`, o),
    o();
    let s = new IntersectionObserver(u,{
        threshold: gb
    })
      , c = 0;
    async function l(e, t) {
        if (i)
            return;
        let n = Sb.get(e);
        if (!n?.size || xb.has(e))
            return;
        ++c,
        xb.add(e);
        let r = Pt(e).catch( () => {}
        );
        s.unobserve(t),
        bb.delete(t);
        for (let e of n)
            s.unobserve(e),
            bb.delete(e);
        n.clear(),
        Sb.delete(e),
        await r,
        --c
    }
    function u(e) {
        var t;
        for (let n of e) {
            let e = n.target
              , r = bb.get(e);
            if (!r || xb.has(r)) {
                s.unobserve(e),
                bb.delete(e);
                continue
            }
            let i = Sb.get(r)
              , o = (t = Sb.get(r))?.size ?? 0;
            if (n.isIntersecting) {
                if (c >= a)
                    continue;
                i ? i.add(e) : Sb.set(r, new Set([e])),
                setTimeout(l.bind(void 0, r, e), hb)
            } else
                i && i.delete(e),
                o <= 1 && Sb.delete(r)
        }
    }
    return (e, t) => {
        if (!xb.has(e))
            return bb.set(t, e),
            s.observe(t),
            () => {
                bb.delete(t),
                s.unobserve(t)
            }
    }
}
function _c(e, t, n) {
    var r, i;
    let a = (i = (r = Tb?.get(n?.id ?? wb))?.get(e.collectionId))?.get(e.collectionItemId);
    if (a)
        return a;
    let o = Tb.get(n?.id ?? wb) ?? new Map;
    Tb.set(n?.id ?? wb, o);
    let s = o.get(e.collectionId) ?? new Map;
    o.set(e.collectionId, s);
    let c = new pb(async () => {
        try {
            let r = t[e.collectionId];
            if (!r)
                throw Error(`Key not found in collection utils for collection id: "${e.collectionId}"`);
            let i = await r();
            if (!i)
                throw Error(`Collection does not contain utility functions`);
            let a = await i.getSlugByRecordId(e.collectionItemId, n ?? void 0);
            return a
        } catch (e) {
            console.warn(`Failed to resolve slug: ${e instanceof Error ? e.message : `Unknown error`}`);
            return
        }
    }
    );
    return s.set(e.collectionItemId, c),
    c
}
async function vc(e, t, n, r) {
    async function i(e) {
        if (!e || !n)
            return {};
        let t = {};
        for (let i in e) {
            let a = e[i];
            B(a, `unresolvedSlug should be defined`);
            let o = _c(a, n, r);
            await o.preload();
            let s = o.read();
            s && (t[i] = s)
        }
        return t
    }
    let[a,o] = await Promise.allSettled([i(e), i(t)]);
    return {
        path: a.status === `fulfilled` ? a.value : void 0,
        hash: o.status === `fulfilled` ? o.value : void 0
    }
}
function yc(e, t, n, r) {
    let i = [];
    function a(e) {
        if (!e || !n)
            return;
        let t = {};
        for (let a in e) {
            let o = e[a];
            B(o, `unresolvedSlug should be defined`);
            let s = _c(o, n, r)
              , c = s.preload();
            if (c)
                i.push(c);
            else {
                let e = s.read();
                e && (t[a] = e)
            }
        }
        return t
    }
    let o = {
        path: a(e),
        hash: a(t)
    };
    if (i.length)
        throw Promise.allSettled(i);
    return o
}
function bc(e) {
    return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`))
}
function xc(e, t) {
    try {
        let t = new URL(e);
        return !!t.protocol
    } catch {}
    return t
}
async function Sc(e, t, n, r, i) {
    let {webPageId: a, hash: o, pathVariables: s, hashVariables: c, unresolvedHashSlugs: l, unresolvedPathSlugs: u} = n
      , d = await vc(u, l, e.collectionUtils, r);
    return Tc(e, t, a, o, i, s, c, d)
}
function Cc(e, t, n, r, i) {
    let {webPageId: a, hash: o, pathVariables: s, hashVariables: c, unresolvedHashSlugs: l, unresolvedPathSlugs: u} = n
      , d = yc(u, l, e.collectionUtils, r);
    return Tc(e, t, a, o, i, s, c, d)
}
function wc(e, t, n) {
    if (!e.routes || !e.getRoute)
        return;
    let r = bc(t);
    if (r)
        try {
            let[r,i] = t.split(`#`, 2);
            B(r !== void 0, `A href must have a defined pathname.`);
            let[a] = r.split(`?`, 2);
            B(a !== void 0, `A href must have a defined pathname.`);
            let {routeId: o, pathVariables: s} = Bn(e.routes, a)
              , c = e.getRoute(o);
            if (c) {
                let e = Object.assign({}, n, s);
                return {
                    routeId: o,
                    route: c,
                    href: t,
                    elementId: i,
                    pathVariables: e
                }
            }
        } catch {}
}
function Tc(e, t, n, r, i, a, o, s) {
    var c;
    let l = {
        ...i,
        ...a,
        ...s?.path
    }
      , u = {
        ...i,
        ...o,
        ...s?.hash
    }
      , d = (c = e.getRoute)?.call(e, n)
      , f = xn(d, {
        currentRoutePath: t?.path,
        currentPathVariables: t?.pathVariables,
        hash: r,
        pathVariables: l,
        hashVariables: u,
        preserveQueryParams: e.preserveQueryParams,
        siteCanonicalURL: e.siteCanonicalURL
    })
      , p = f.split(`#`, 2)[1];
    return {
        routeId: n,
        route: d,
        href: f,
        elementId: p,
        pathVariables: l
    }
}
function Ec(e, t, n) {
    var r;
    if (L(e)) {
        let r = bc(e);
        if (!t.routes || !t.getRoute || !n || !r)
            return;
        let[i] = e.split(`#`, 2);
        if (i === void 0)
            return;
        let[a] = i.split(`?`, 2);
        if (a === void 0)
            return;
        let {routeId: o} = Bn(t.routes, a);
        return t.getRoute(o)
    }
    let {webPageId: i} = e;
    return (r = t.getRoute)?.call(t, i)
}
function Dc(e) {
    return L(e) && e.startsWith(`data:${Ab}`)
}
function Oc(e) {
    if (Dc(e))
        try {
            let t = new URL(e), n = t.pathname.substring(Ab.length), r = t.searchParams, i = r.has(Eb) ? r.get(Eb) : void 0, a, o = r.get(Db), s = r.get(Ob), c = r.get(kb);
            if (o && s && c) {
                let e = Object.fromEntries(new URLSearchParams(c).entries());
                a = {
                    collection: o,
                    collectionItemId: s,
                    pathVariables: e
                }
            }
            return {
                target: n === `none` ? null : n,
                element: i === `none` ? void 0 : i,
                collectionItem: a
            }
        } catch {
            return
        }
}
function kc(e, t, n) {
    var r;
    let i = t.getAttribute(`data-framer-page-link-target`), a, o;
    if (i) {
        a = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
        let e = t.getAttribute(`data-framer-page-link-path-variables`);
        e && (o = Object.fromEntries(new URLSearchParams(e).entries()))
    } else {
        let e = t.getAttribute(`href`);
        if (!e)
            return !1;
        let n = Oc(e);
        if (!n || !n.target)
            return !1;
        i = n.target,
        a = n.element ?? void 0,
        o = (r = n.collectionItem)?.pathVariables
    }
    let s = a ? t.dataset.framerSmoothScroll !== void 0 : void 0;
    return e(i, a, Object.assign({}, n, o), s),
    !0
}
function Ac(e) {
    if (!Dc(e))
        return e;
    let t = Oc(e);
    if (!t)
        return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n)
        return {
            webPageId: n,
            hash: r ?? void 0,
            pathVariables: jc(i)
        }
}
function jc(e) {
    if (!e)
        return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}
function Mc() {
    var e;
    let t = w(Mb)
      , n = (e = dt())?.pathVariables
      , r = t || n;
    return r
}
function Nc(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n)
        return !1;
    if (e.path && e.pathVariables) {
        let t = Object.assign({}, i, r);
        for (let[,n] of e.path.matchAll(jb))
            if (!n || e.pathVariables[n] !== t[n])
                return !1
    }
    return !0
}
function Pc(e, t) {
    let n = bc(e)
      , r = {
        href: e === `` || xc(e, n) ? e : `https://${e}`,
        target: Fc(t?.openInNewTab, n),
        rel: n ? void 0 : Ic(`noopener`, t?.rel)
    };
    return t?.preserveParams && (r.href = Ht(r.href ?? e),
    r[`data-framer-preserve-params`] = !0),
    t?.trackLinkClick && (r.onClick = () => {
        t.trackLinkClick(e)
    }
    ),
    r
}
function Fc(e, t) {
    return e === void 0 ? t ? void 0 : `_blank` : e ? `_blank` : void 0
}
function Ic(e, t) {
    if (e && !t)
        return e;
    if (!e && t)
        return t;
    if (e && t)
        return `${e} ${t}`
}
function Lc(e) {
    var t, n;
    return `${e.scopeId}:${e.nodeId}:${(t = e.furthestExternalComponent)?.scopeId}:${(n = e.furthestExternalComponent)?.nodeId}`
}
function Rc() {
    return J.current() === J.canvas
}
function zc(e, n, r, i, a, o) {
    let s = w(Fb)
      , c = Ys()
      , l = T( () => ({
        scopeId: n,
        nodeId: r,
        furthestExternalComponent: c
    }), [n, r, c])
      , u = lt()
      , d = dt()
      , f = T( () => {
        let e = hc(i) ? i : Ac(i);
        if (e)
            return Ec(e, u, d)
    }
    , [d, i, u])
      , {replaceNestedLinks: p} = d_()
      , m = Rc()
      , h = !!(p && !m && s?.nodeId && l.nodeId)
      , g = E(e => {
        var t;
        if (!a.href)
            return;
        e.preventDefault(),
        e.stopPropagation();
        let n = /Mac|iPod|iPhone|iPad/u.test(b.userAgent);
        if (n ? e.metaKey : e.ctrlKey) {
            Hc(a.href, ``, `_blank`);
            return
        }
        f ? (t = a.navigate) == null || t.call(a) : Hc(a.href, a.rel, a.target)
    }
    , [a, f])
      , _ = E(e => {
        a.href && (e.preventDefault(),
        e.stopPropagation(),
        Hc(a.href, ``, `_blank`))
    }
    , [a])
      , y = E(e => {
        var t;
        a.href && e.key === `Enter` && (e.preventDefault(),
        e.stopPropagation(),
        f ? (t = a.navigate) == null || t.call(a) : Hc(a.href, a.rel, a.target))
    }
    , [a, f]);
    Xa(o, e => {
        e !== null && h && (e.dataset.hydrated = `true`)
    }
    , [h]);
    let S = e;
    return h && (v.forEach(e, e => {
        Vc(e) && (B(Bc(s), "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"),
        B(Bc(l), "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"),
        Pb.collectNestedLink(s, l))
    }
    ),
    S = v.map(e, e => {
        if (!Vc(e))
            return e;
        let n = Uc(e.type)
          , {children: r, ...i} = e.props
          , a = {
            ...i,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: _,
            onKeyDown: y,
            as: i.as && Uc(i.as)
        }
          , o = `ref`in e ? e.ref : void 0;
        return t(n, {
            ...a,
            ref: o
        }, r)
    }
    )),
    x(Fb.Provider, {
        value: l,
        children: S
    })
}
function Bc(e) {
    return !St(e?.nodeId)
}
function Vc(e) {
    return r(e) && (Uc(e.type) !== e.type || Uc(e.props.as) !== e.props.as)
}
function Hc(e, t, n) {
    let r = document.createElement(`a`);
    r.href = e,
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove()
}
function Uc(e) {
    return e === `a` ? `span` : we(e) && Fe(e) === `a` ? De.span : e
}
function Wc({nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i}) {
    return E(async a => {
        var o, s, c, l, u;
        if (!(o = n.pageviewEventData)?.current)
            return;
        let d = n.pageviewEventData.current
          , f = hc(r) ? r : Ac(r);
        if (!hc(f))
            return It(`published_site_click`, {
                ...d,
                href: a ? Gc(a) : null,
                nodeId: e ?? null,
                trackingId: t ?? null,
                targetRoutePath: null,
                targetWebPageId: null,
                targetCollectionItemId: null
            }, `eager`);
        let p = f.webPageId
          , m = (s = n?.getRoute)?.call(n, p)
          , h = m?.path ?? null
          , g = null;
        if (m?.collectionId && f.pathVariables && (c = n.collectionUtils)?.[m.collectionId]) {
            let e = await (u = (l = n.collectionUtils)[m.collectionId])?.call(l)
              , [t] = Object.values(f.pathVariables);
            e && typeof t == `string` && (g = await e.getRecordIdBySlug(t, i || void 0) ?? null)
        }
        return It(`published_site_click`, {
            ...d,
            href: a ? Gc(a) : null,
            nodeId: e ?? null,
            trackingId: t ?? null,
            targetRoutePath: h,
            targetWebPageId: p,
            targetCollectionItemId: g
        }, `eager`)
    }
    , [e, t, n, r, i])
}
function Gc(e) {
    try {
        let t = new URL(e,K.document.baseURI);
        return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href
    } catch {
        return e
    }
}
function Kc(e, t, n, r, i, a) {
    var o, s;
    let c = (o = e.getRoute)?.call(e, t);
    c && qe(c?.page) && c.page.preload(),
    (s = e.navigate) == null || s.call(e, t, n, r, i, a)
}
function qc(e, t, n, r, i, a, o) {
    return async s => {
        let c = s.metaKey
          , l = fc(s.target)
          , u = !l || l.getAttribute(`target`) === `_blank`
          , d = !c && !u
          , f = () => void r(n);
        if (!d) {
            await Mt({
                priority: `user-blocking`,
                ensureContinueBeforeUnload: !0,
                continueAfter: `paint`
            }),
            f();
            return
        }
        s.preventDefault(),
        Kc(e, t, i, a, o, f)
    }
}
function Jc(e, t, n, r, i) {
    if (!n)
        return Pc(e, r);
    let a = wc(t, e, i);
    if (!a)
        return Pc(e, r);
    let {routeId: o, route: s, elementId: c, pathVariables: l} = a;
    if (!s)
        return Pc(e, r);
    let u = xn(s, {
        currentRoutePath: n.path,
        currentPathVariables: n.pathVariables,
        hash: c,
        pathVariables: l,
        preserveQueryParams: t.preserveQueryParams && !Cp,
        siteCanonicalURL: t.siteCanonicalURL
    })
      , d = Fc(r.openInNewTab, !0);
    return {
        href: u,
        target: d,
        onClick: qc(t, o, u, r.trackLinkClick, c, l, r.smoothScroll),
        navigate: () => Kc(t, o, c, l, r.smoothScroll),
        "data-framer-page-link-current": !c && n.id === o || void 0
    }
}
function Yc(e, t, n) {
    let r = {
        ...e,
        ...t,
        ref: n
    }
      , {onTap: i, onClick: a} = t;
    if (!i && !a)
        return r;
    let {onClick: o, onTap: s} = e;
    return {
        ...r,
        onClick: a || o ? e => {
            yt(o) && o?.(e),
            a?.(e)
        }
        : void 0,
        onTap: i || s ? (e, t) => {
            yt(s) && s?.(e, t),
            i?.(e, t)
        }
        : void 0
    }
}
function Xc(e, t, n) {
    let r = !!(t && A_());
    if (!r)
        return e;
    let {onClick: i, ...a} = e;
    return i ? n ? {
        ...a,
        onTap: i,
        onClick: Zc
    } : {
        ...a,
        onTap: i
    } : e
}
function Zc(e) {
    let t = fc(e.target);
    !t || t.getAttribute(`target`) === `_blank` || e.preventDefault()
}
function Qc(e, t, n, r, i) {
    let a = hc(e) ? e : Ac(e);
    if (!hc(a))
        return L(e) ? Pc(e).href : void 0;
    if (!t.getRoute || !t.currentRouteId)
        return;
    let o = t.getRoute(t.currentRouteId)
      , {webPageId: s, hash: c, pathVariables: l, hashVariables: u, unresolvedHashSlugs: d, unresolvedPathSlugs: f} = a
      , p = t.getRoute(s)
      , m = f || d ? i?.(f, d) : void 0
      , h = Object.assign({}, t.currentPathVariables, n, l, m?.path)
      , g = Object.assign({}, t.currentPathVariables, n, u, m?.hash);
    return xn(p, {
        currentRoutePath: o?.path,
        currentPathVariables: t.currentPathVariables,
        hash: c,
        pathVariables: h,
        hashVariables: g,
        relative: !1,
        preserveQueryParams: t.preserveQueryParams,
        onlyHash: r,
        siteCanonicalURL: t.siteCanonicalURL
    })
}
function $c() {
    return function() {
        async function e(e) {
            let t = new TextEncoder().encode(e)
              , n = await crypto.subtle.digest(`SHA-256`, t);
            return Array.from(new Uint8Array(n)).map(e => e.toString(16).padStart(2, `0`)).join(``)
        }
        function t(e) {
            let t = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
              , n = ``
              , r = 62;
            for (let i = 0; i < e; i++)
                n += t.charAt(Math.floor(Math.random() * r));
            return n
        }
        addEventListener(`message`, async n => {
            let {salt: r, difficulty: i, tokenLength: a, maxTime: o} = n.data
              , s = `0`.repeat(i)
              , c = performance.now()
              , l = !0;
            for (; l; ) {
                let n = performance.now();
                if (n - c > o) {
                    l = !1,
                    postMessage({
                        success: !1
                    });
                    return
                }
                let i = t(a)
                  , u = `${Date.now()}:${i}`
                  , d = await e(r + u);
                if (d.startsWith(s)) {
                    postMessage({
                        success: !0,
                        secret: u,
                        hash: d
                    });
                    return
                }
            }
        }
        )
    }
    .toString()
}
async function el() {
    return new Promise( (e, t) => {
        let n = URL.createObjectURL(new Blob([`(`, $c(), `)()`],{
            type: `application/javascript`
        }))
          , r = new Worker(n);
        r.onmessage = t => {
            r.terminate(),
            URL.revokeObjectURL(n),
            t.data.success ? e({
                secret: t.data.secret,
                hash: t.data.hash
            }) : e(void 0)
        }
        ,
        r.onerror = e => {
            r.terminate(),
            URL.revokeObjectURL(n),
            t(e)
        }
        ,
        r.postMessage({
            salt: Rb,
            difficulty: zb,
            tokenLength: Bb,
            maxTime: Vb
        })
    }
    )
}
function tl(e) {
    return Array.from(e.keys()).map(encodeURIComponent).join(`,`)
}
function nl(e, t) {
    try {
        let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
        if (n !== null && n[2]) {
            let t = JSON.parse(decodeURIComponent(n[2]));
            if (!t || typeof t != `object`)
                return;
            [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(n => {
                typeof t[n] == `string` && e.append(n, t[n])
            }
            )
        }
    } catch {}
}
function rl({router: e, nodeId: t, submitTrackingId: n}) {
    var r;
    if (!(r = e?.pageviewEventData)?.current)
        return;
    let i = e.pageviewEventData.current
      , a = {
        ...i,
        nodeId: t ?? null,
        trackingId: n ?? null
    };
    return It(`published_site_form_submit`, a, `eager`)
}
function il({state: e}, {type: t}) {
    switch (t) {
    case `complete`:
        return e === `error` ? Kb : Gb;
    case `incomplete`:
        return e === `error` ? Kb : Wb;
    case `submit`:
        return Hb;
    case `success`:
        return Ub;
    case `error`:
        return Kb;
    default:
        V(t)
    }
}
function al({state: e}) {
    return e === `incomplete` || e === `complete`
}
function ol(e) {
    e.preventDefault()
}
function sl(e, t) {
    let n = xc(e, !1) ? e : `https://${e}`
      , r = document.createElement(`a`);
    r.href = n,
    r.target = `_self`,
    r.style.display = `none`,
    `current`in t && t.current && (t.current.appendChild(r),
    r.click(),
    r.remove())
}
function cl(e) {
    if (e.children.length === 0)
        return !1;
    for (let t of e.children)
        if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) {
            if (t.required && t.value === ``)
                return !0
        } else {
            let e = cl(t);
            if (e)
                return !0
        }
    return !1
}
async function ll(e, t, n) {
    let r = await el();
    if (!r)
        throw Error(`Failed to calculate proof of work`);
    let i = await fetch(e, {
        body: t,
        method: `POST`,
        headers: {
            "Framer-Site-Id": n,
            "Framer-POW": r.secret,
            "Framer-Form-Fields": tl(t)
        }
    });
    if (i.ok)
        return i;
    {
        let e = await i.json()
          , t = `Failed to submit form`;
        throw ul(e) ? Error(`${t} - ${e.error.message}`) : Error(t)
    }
}
function ul(e) {
    return typeof e == `object` && !!e && `error`in e && z(e.error) && `message`in e.error && typeof e.error.message == `string`
}
function dl(e, t) {
    if (e.routeId !== t.routeId)
        return !1;
    if (e.pathVariables === t.pathVariables)
        return !0;
    let n = e.pathVariables || {}
      , r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(e => n[e] === r[e])
}
function fl({abTestId: e, framerSiteId: t, routeId: n, routePath: r, collectionItemId: i, localeCode: a}) {
    return {
        abTestId: e,
        framerSiteId: t,
        routePath: r || `/`,
        collectionItemId: i,
        framerLocale: a,
        webPageId: n
    }
}
function pl() {
    let[e,t] = d.useState(0);
    return [e, d.useCallback( () => t(e => e + 1), [])]
}
function ml(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        bl(r, t);
        return
    }
    n || k.scrollTo(0, 0)
}
function hl(e) {
    let t = S([]);
    return f( () => {
        var e;
        (e = t.current)?.length && (t.current.forEach(e => e()),
        t.current = [])
    }
    , [e]),
    E(e => {
        t.current.push(e)
    }
    , [])
}
function gl(e) {
    if (!e)
        return xp;
    let t = !1;
    return () => {
        t || (t = !0,
        e?.())
    }
}
function _l() {
    let e = Tn()
      , t = S(void 0);
    return E(async (n, r, i, a=!0) => {
        var o, s;
        let c = i !== void 0;
        (o = t.current) == null || o.abort();
        let l = a ? new AbortController : void 0;
        t.current = l;
        let u = l?.signal
          , d = gt(u);
        if (r.promise.finally(d),
        !c)
            return t.current = void 0,
            n(u),
            r.promise;
        n(u);
        let f, p = new Promise( (e, t) => {
            f = e,
            u?.addEventListener(`abort`, t)
        }
        ).catch(xp);
        if (e(p, i, l),
        await r.promise,
        u?.aborted)
            return;
        let m = (s = k.navigation)?.transition;
        f();
        try {
            await m?.finished
        } catch (e) {
            console.error(`Navigation transition failed`, e)
        }
        u?.aborted || om()
    }
    , [e])
}
function vl({defaultPageStyle: e, disableHistory: t, initialPathVariables: n, initialRoute: r, notFoundPage: i, collectionUtils: a, routes: o, initialLocaleId: s, locales: l=bp, preserveQueryParams: u=!1, LayoutTemplate: d, editorBar: f, siteCanonicalURL: p}) {
    Nn(),
    vn({
        disabled: t,
        routeId: r,
        initialPathVariables: n,
        initialLocaleId: s
    });
    let m = un()
      , [h,g] = pl()
      , _ = hl(h)
      , v = _l()
      , y = pn(`framer-route-change`)
      , b = S(!0)
      , C = S(r)
      , w = S(n)
      , O = S(s)
      , ee = O.current
      , j = T( () => l.find( ({id: e}) => ee ? e === ee : e === Xb) ?? null, [ee, l])
      , te = T( () => ({
        activeLocale: j,
        locales: l,
        setLocale: async e => {
            let t = y({
                localized: !0
            });
            await Mt({
                priority: `user-blocking`,
                continueAfter: `paint`
            });
            let n;
            L(e) ? n = e : z(e) && (n = e.id);
            let r = l.find( ({id: e}) => e === Xb)
              , i = l.find( ({id: e}) => e === n);
            if (!i)
                return;
            let s = C.current
              , d = o[s];
            if (d)
                try {
                    let e = await Cn({
                        currentLocale: j,
                        nextLocale: i,
                        route: d,
                        routeId: s,
                        defaultLocale: r,
                        pathVariables: w.current,
                        collectionUtils: a,
                        preserveQueryParams: u
                    });
                    if (!e)
                        return;
                    let n = hn(k.history.state) ? k.history.state.paginationInfo : void 0
                      , o = e.path;
                    b.current = !1,
                    w.current = e.pathVariables,
                    O.current = i.id;
                    let l = async (t=!1) => {
                        if (o)
                            return _n({
                                routeId: s,
                                pathVariables: e.pathVariables,
                                localeId: i.id,
                                paginationInfo: n
                            }, o, t)
                    }
                    ;
                    v( () => {
                        m(s, s, () => c(g))
                    }
                    , t, l, !1)
                } catch {}
        }
    }), [j, a, g, l, u, o, v, m, y])
      , ne = E( (e, t, n, r, i, a, o=!1, s) => {
        b.current = !1;
        let l = C.current;
        if (C.current = e,
        w.current = r,
        O.current = t,
        _( () => {
            ml(n, o, i)
        }
        ),
        i) {
            c(g);
            return
        }
        v(t => {
            m(l, e, () => c(g), t)
        }
        , a, s, !0)
    }
    , [g, _, v, m]);
    yn(C, ne);
    let re = E(async (e, n, r, i, a) => {
        var s, c;
        let l = o[e]
          , d = qe(l?.page) ? l.page.getStatus() : void 0
          , f = d?.hasRendered
          , m = y({
            cached: f,
            preloaded: f ? void 0 : d?.hasLoaded
        })
          , h = gl(a);
        if (Mt({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`
        }).then(h),
        await Mt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        r) {
            let e = new Set
              , t = l?.path ?? `/`;
            for (let n of t.matchAll(Up)) {
                let t = n[1];
                if (t === void 0)
                    throw Error(`A matching path variable should not be undefined`);
                e.add(t)
            }
            r = Object.fromEntries(Object.entries(r).filter( ([t]) => e.has(t)))
        }
        let g = ht(l, n)
          , _ = w.current
          , v = O.current;
        if (dl({
            routeId: C.current,
            pathVariables: _
        }, {
            routeId: e,
            pathVariables: r
        })) {
            (s = m.ignore) == null || s.call(m);
            let a = o[e];
            (c = k.history.state)?.hash !== n && !t && a && (h(),
            await mn(e, a, {
                currentRoutePath: a.path,
                currentPathVariables: _,
                pathVariables: r,
                hash: n,
                localeId: v,
                preserveQueryParams: u,
                siteCanonicalURL: p
            })),
            ml(g, i, !1);
            return
        }
        if (!l)
            return;
        let b = o[C.current]
          , x = async (t=!1) => (h(),
        mn(e, l, {
            currentRoutePath: b?.path,
            currentPathVariables: _,
            hash: n,
            pathVariables: r,
            localeId: v,
            preserveQueryParams: u,
            siteCanonicalURL: p
        }, t));
        ne(e, v, g, r, !1, m, i, t ? void 0 : x)
    }
    , [o, ne, t, u, p, y])
      , ie = st(o)
      , ae = C.current
      , oe = w.current
      , se = o[ae]
      , ce = se?.path
      , le = Yb(se, ae, oe, a, j)
      , M = b.current
      , ue = T( () => ({
        navigate: re,
        getRoute: ie,
        currentRouteId: ae,
        currentPathVariables: oe,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: u,
        pageviewEventData: le,
        siteCanonicalURL: p,
        isInitialNavigation: M
    }), [re, ie, ae, oe, o, a, u, p, le, M]);
    if (!se)
        throw Error(`Router cannot find route for ${ae}`);
    let de = !j || !se.includedLocales || se.includedLocales.includes(j.id)
      , fe = ce && oe ? Vt(ce, oe) : ce
      , N = String(ee) + fe
      , pe = Zr( () => ({
        ...e,
        display: `contents`
    }));
    return x(ct, {
        api: ue,
        children: x(fm.Provider, {
            value: te,
            children: x(Gy, {
                children: D(Vs, {
                    children: [D(zm, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        forceUpdateKey: h,
                        children: [x(Lm.Start, {}), x(yl, {
                            LayoutTemplate: d,
                            routeId: ae,
                            style: e,
                            children: t => x(A, {
                                children: de ? Rn(se.page, t ? pe : e) : i && Rn(i, e)
                            }, N)
                        })]
                    }), f, x(kn, {}), x(Lm.End, {})]
                })
            })
        })
    })
}
function yl({LayoutTemplate: e, routeId: t, style: n, children: r}) {
    return e ? x(e, {
        routeId: t,
        style: n,
        children: r
    }) : r(!1)
}
function bl(e, t) {
    let n = t ? {
        behavior: `smooth`,
        block: `start`,
        inline: `nearest`
    } : void 0;
    e.scrollIntoView(n)
}
function xl(e) {
    return new Promise( (t, n) => {
        try {
            new URL(e);
            let r = new Image;
            r.onload = () => t(),
            r.onerror = n,
            r.src = e
        } catch (e) {
            n(e)
        }
    }
    )
}
function Sl(e) {
    return typeof e == `object` && !!e
}
function Cl(e, t) {
    if (t === ``)
        return e;
    let n = t.split(/[.[\]]+/u).filter(e => e.length > 0)
      , r = e;
    for (let e of n) {
        if (!Sl(r))
            return;
        r = r[e]
    }
    return r
}
function wl(e) {
    return `${e.credentials}:${e.url}`
}
function Tl(e) {
    return L(e) && !Number.isNaN(Number(e))
}
function El(e, t) {
    switch (e) {
    case `string`:
        return L(t) || R(t);
    case `color`:
        return L(t);
    case `boolean`:
        return bt(t);
    case `number`:
        return R(t) || Tl(t);
    case `link`:
    case `image`:
        return L(t) && xc(t, !1);
    default:
        {
            let t = e;
            return !1
        }
    }
}
function Dl(e, t) {
    if (e.status === `loading`)
        return t.fallbackValue;
    if (e.status === `error`)
        throw e.error;
    let n = Cl(e.data, t.resultKeyPath);
    if (St(n))
        throw Error(`Key '${t.resultKeyPath}' not found in response`);
    if (!El(t.resultOutputType, n))
        throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
    return n
}
function Ol(e, t) {
    if (J.current() === J.canvas)
        return !1;
    let n = t === 0 ? 500 : t * 1e3
      , r = Date.now()
      , i = e + n;
    return r >= i
}
function kl({RootComponent: e, isWebsite: t, routeId: n, framerSiteId: r, pathVariables: i, routes: a, collectionUtils: o, notFoundPage: s, isReducedMotion: c=!1, includeDataObserver: l=!1, localeId: u, locales: f, preserveQueryParams: p, EditorBar: m, defaultPageStyle: h, disableHistory: g, LayoutTemplate: _, siteCanonicalURL: v}) {
    if (d.useEffect( () => {
        t || Sh.start()
    }
    , []),
    t)
        return x(re, {
            reducedMotion: c ? `user` : `never`,
            children: x(lx, {
                children: x(sb, {
                    children: x(qb.Provider, {
                        value: r,
                        children: x(vl, {
                            initialRoute: n,
                            initialPathVariables: i,
                            initialLocaleId: u,
                            routes: a,
                            collectionUtils: o,
                            notFoundPage: s,
                            locales: f,
                            defaultPageStyle: h ?? {
                                minHeight: `100vh`,
                                width: `auto`
                            },
                            preserveQueryParams: p,
                            editorBar: x(Al, {
                                EditorBar: m
                            }),
                            disableHistory: g,
                            LayoutTemplate: _,
                            siteCanonicalURL: v
                        })
                    })
                })
            })
        });
    {
        let t = l ? Wv : d.Fragment;
        return x(t, {
            children: x(ut, {
                routes: a,
                children: x(Ho, {
                    children: d.isValidElement(e) ? e : d.createElement(e, {
                        key: n
                    })
                })
            })
        })
    }
}
function Al({EditorBar: e}) {
    let t = d_()
      , [n,r] = ee(!1)
      , i = w(qb)
      , o = T( () => {
        let e = {}, n;
        for (n in t)
            t.hasOwnProperty(n) && n.startsWith(`editorBar`) && (e[n] = t[n]);
        return e
    }
    , [t]);
    return O( () => {
        c( () => {
            r(!0)
        }
        )
    }
    , []),
    !e || !i || !n ? null : x(Lb, {
        children: x(a, {
            children: x(e, {
                framerSiteId: i,
                features: o
            })
        })
    })
}
function jl(e) {
    return {
        trace(...t) {
            var n;
            return (n = __.getLogger(e))?.trace(...t)
        },
        debug(...t) {
            var n;
            return (n = __.getLogger(e))?.debug(...t)
        },
        info(...t) {
            var n;
            return (n = __.getLogger(e))?.info(...t)
        },
        warn(...t) {
            var n;
            return (n = __.getLogger(e))?.warn(...t)
        },
        error(...t) {
            var n;
            return (n = __.getLogger(e))?.error(...t)
        }
    }
}
function Ml(e) {
    return Fl(e) || Rl(e)
}
function Nl(e) {
    return xt(e) && e.every(z)
}
function Pl(e) {
    return z(e) && yt(e.read) && yt(e.preload)
}
function Fl(e) {
    return Nl(e) || Pl(e)
}
function Il(e) {
    return z(e) && z(e.schema)
}
function Ll(e) {
    return z(e) && z(e.collectionByLocaleId)
}
function Rl(e) {
    return Il(e) || Ll(e)
}
async function zl(e, t) {
    return Pl(e) ? (await e.preload(t),
    e.read(t)) : e
}
function Bl(e, t, n) {
    let r = e.value.length
      , i = t.value.length;
    if (r < i)
        return -1;
    if (r > i)
        return 1;
    for (let i = 0; i < r; i++) {
        let r = e.value[i]
          , a = t.value[i]
          , o = hu(r, a, n);
        if (o !== 0)
            return o
    }
    return 0
}
function Vl(e, t) {
    switch (e?.type) {
    case `array`:
        {
            let n = e.value.map(e => Z.cast(e, t.definition));
            return {
                type: `array`,
                value: n
            }
        }
    }
    return null
}
function Hl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Ul(e) {
    switch (e?.type) {
    case `boolean`:
        return e;
    case `number`:
    case `string`:
        return {
            type: `boolean`,
            value: !!e.value
        }
    }
    return null
}
function Wl(e) {
    let t = Ul(e);
    return t?.value ?? !1
}
function Gl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Kl(e) {
    switch (e?.type) {
    case `color`:
        return e
    }
    return null
}
function ql(e, t) {
    let n = new Date(e.value)
      , r = new Date(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function Jl(e) {
    switch (e?.type) {
    case `date`:
        return e;
    case `number`:
    case `string`:
        {
            let t = new Date(e.value);
            return Tt(t) ? {
                type: `date`,
                value: t.toISOString()
            } : null
        }
    }
    return null
}
function Yl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Xl(e) {
    switch (e?.type) {
    case `enum`:
        return e;
    case `string`:
        return {
            type: `enum`,
            value: e.value
        }
    }
    return null
}
function Zl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Ql(e) {
    switch (e?.type) {
    case `file`:
        return e
    }
    return null
}
function $l(e, t) {
    let n = JSON.stringify(e.value)
      , r = JSON.stringify(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function eu(e) {
    switch (e?.type) {
    case `link`:
        return e;
    case `string`:
        try {
            let {protocol: t} = new URL(e.value);
            return t === `http:` || t === `https:` ? {
                type: `link`,
                value: e.value
            } : null
        } catch {
            return null
        }
    }
    return null
}
function tu(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function nu(e) {
    switch (e?.type) {
    case `number`:
    case `string`:
        {
            let t = Number(e.value);
            return Number.isFinite(t) ? {
                type: `number`,
                value: t
            } : null
        }
    }
    return null
}
function ru(e) {
    let t = nu(e);
    return t?.value ?? null
}
function iu(e, t, n) {
    let r = Object.keys(e.value).sort()
      , i = Object.keys(t.value).sort();
    if (r.length < i.length)
        return -1;
    if (r.length > i.length)
        return 1;
    for (let a = 0; a < r.length; a++) {
        let o = r[a]
          , s = i[a];
        if (o < s)
            return -1;
        if (o > s)
            return 1;
        let c = e.value[o] ?? null
          , l = t.value[s] ?? null
          , u = hu(c, l, n);
        if (u !== 0)
            return u
    }
    return 0
}
function au(e, t) {
    switch (e?.type) {
    case `object`:
        {
            let n = {}
              , r = Object.entries(t.definitions);
            for (let[t,i] of r) {
                let r = e.value[t] ?? null;
                n[t] = Z.cast(r, i)
            }
            return {
                type: `object`,
                value: n
            }
        }
    }
    return null
}
function ou(e, t) {
    let n = JSON.stringify(e.value)
      , r = JSON.stringify(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function su(e) {
    switch (e?.type) {
    case `responsiveimage`:
        return e
    }
    return null
}
function cu(e, t) {
    let n = e.value
      , r = t.value;
    return n < r ? -1 : n > r ? 1 : 0
}
function lu(e) {
    switch (e?.type) {
    case `richtext`:
        return e
    }
    return null
}
function uu(e, t) {
    let n = e.value
      , r = t.value;
    return n < r ? -1 : n > r ? 1 : 0
}
function du(e) {
    switch (e?.type) {
    case `vectorsetitem`:
        return e
    }
    return null
}
function fu(e, t, n) {
    let r = e.value
      , i = t.value;
    return n.type === 0 && (r = e.value.toLowerCase(),
    i = t.value.toLowerCase()),
    r < i ? -1 : r > i ? 1 : 0
}
function pu(e) {
    switch (e?.type) {
    case `string`:
        return e;
    case `number`:
        return {
            type: `string`,
            value: String(e.value)
        }
    }
    return null
}
function mu(e) {
    let t = pu(e);
    return t?.value ?? null
}
function hu(e, t, n) {
    if (Ct(e) || Ct(t))
        return B(e === t),
        0;
    switch (e.type) {
    case `array`:
        return B(e.type === t.type),
        Bl(e, t, n);
    case `boolean`:
        return B(e.type === t.type),
        Hl(e, t);
    case `color`:
        return B(e.type === t.type),
        Gl(e, t);
    case `date`:
        return B(e.type === t.type),
        ql(e, t);
    case `enum`:
        return B(e.type === t.type),
        Yl(e, t);
    case `file`:
        return B(e.type === t.type),
        Zl(e, t);
    case `link`:
        return B(e.type === t.type),
        $l(e, t);
    case `number`:
        return B(e.type === t.type),
        tu(e, t);
    case `object`:
        return B(e.type === t.type),
        iu(e, t, n);
    case `responsiveimage`:
        return B(e.type === t.type),
        ou(e, t);
    case `richtext`:
        return B(e.type === t.type),
        cu(e, t);
    case `vectorsetitem`:
        return B(e.type === t.type),
        uu(e, t);
    case `string`:
        return B(e.type === t.type),
        fu(e, t, n);
    default:
        V(e)
    }
}
function gu() {
    return 25
}
function _u() {
    return 100 * 125
}
function vu(e) {
    return e
}
function yu(e) {
    let t = e.next();
    return B(t.done, `Generator must not yield`),
    t.value
}
async function bu(e, t=e.next()) {
    for (; !t.done; ) {
        let n = await t.value;
        t = e.next(n)
    }
    return t.value
}
function *xu(e) {
    let t = {}
      , n = Object.keys(e)
      , r = [];
    for (let i of n) {
        let n = e[i];
        if (Et(n)) {
            let e = n.next();
            e.done ? t[i] = e.value : r.push(bu(n, e).then(e => {
                t[i] = e
            }
            ))
        } else
            t[i] = n
    }
    return r.length > 0 && (yield Promise.all(r)),
    t
}
function *Su(e) {
    let t = []
      , n = e.keys()
      , r = [];
    for (let i of n) {
        let n = e[i];
        if (Et(n)) {
            let e = n.next();
            e.done ? t[i] = e.value : r.push(bu(n, e).then(e => {
                t[i] = e
            }
            ))
        } else
            t[i] = n
    }
    return r.length > 0 && (yield Promise.all(r)),
    t
}
function Cu(e) {
    return e
}
function wu(e) {
    return z(e) && yt(e.getHash)
}
function G(e, ...t) {
    let n = t.map(e => {
        let t = e instanceof Dx;
        B(!t, `Pass CollectionMetadata.id instead`);
        let n = e instanceof Ax;
        B(!n, `Pass FieldMetadata.id instead`);
        let r = e instanceof Ox;
        B(!r, `Pass IndexMetadata.id instead`);
        let i = e instanceof Sx;
        B(!i, `Pass RelationalNode.group.id instead`);
        let a = e instanceof yx;
        return B(!a, `Pass Group.id instead`),
        wu(e) ? e.getHash() : JSON.stringify(e)
    }
    );
    return Cu(`${e}(${n.join(`, `)})`)
}
function Tu(e) {
    return e
}
function Eu(e) {
    return e
}
function Du(e) {
    return e
}
function Ou(e, t) {
    if (Fl(e))
        return new gx(e,t);
    if (Il(e))
        return e;
    if (Ll(e)) {
        for (; t; ) {
            let n = e.collectionByLocaleId[t.id];
            if (n)
                return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    V(e, `Unsupported collection type`)
}
function ku(e) {
    let t = {
        type: `All`
    };
    return Array(e).fill(t)
}
function Au(e) {
    return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`
}
function ju(e) {
    return typeof e.value == `string` ? `'${e.value}'` : e.value
}
function Mu(e) {
    return `${e.functionName}(${e.arguments.map(e => Lu(e)).join(`, `)})`
}
function Nu(e) {
    let t = `CASE`;
    e.value && (t += ` ${Lu(e.value)}`);
    for (let n of e.conditions)
        t += ` WHEN ${Lu(n.when)} THEN ${Lu(n.then)}`;
    return e.else && (t += ` ELSE ${Lu(e.else)}`),
    t += ` END`,
    t
}
function Pu(e) {
    let t = Lu(e.value)
      , n = e.operator.toUpperCase();
    return `${n} ${t}`
}
function Fu(e) {
    let t = Lu(e.left)
      , n = Lu(e.right)
      , r = e.operator.toUpperCase();
    return `${t} ${r} ${n}`
}
function Iu(e) {
    return `CAST(${Lu(e.value)} as ${e.dataType})`
}
function Lu(e) {
    switch (e.type) {
    case `Identifier`:
        return Au(e);
    case `LiteralValue`:
        return ju(e);
    case `FunctionCall`:
        return Mu(e);
    case `Case`:
        return Nu(e);
    case `UnaryOperation`:
        return Pu(e);
    case `BinaryOperation`:
        return Fu(e);
    case `TypeCast`:
        return Iu(e);
    case `Select`:
        return `${Hu(e)}`;
    default:
        V(e)
    }
}
function Ru(e) {
    return Il(e.data) ? `Collection` : e.alias ? `"${e.data.displayName}" AS "${e.alias}"` : `"${e.data.displayName}"`
}
function zu(e) {
    let t = `${Bu(e.left)} LEFT JOIN ${Bu(e.right)}`;
    return e.constraint && (t += ` ON ${Lu(e.constraint)}`),
    t
}
function Bu(e) {
    switch (e.type) {
    case `Collection`:
        return Ru(e);
    case `LeftJoin`:
        return zu(e);
    default:
        V(e)
    }
}
function Vu(e) {
    let t = ``
      , n = e.split(/\s+/u);
    return n.forEach(e => {
        e !== `` && ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e) ? t += `
${e}` : [`AND`, `OR`].includes(e) ? t += `
	${e}` : t += ` ${e}`)
    }
    ),
    t.trim()
}
function Hu(e) {
    let t = ``;
    return t += `SELECT ${e.select.map(e => {
        let t = Lu(e);
        return e.alias ? `${t} AS "${e.alias}"` : t
    }
    ).join(`, `)}`,
    t += ` FROM ${Bu(e.from)}`,
    e.where && (t += ` WHERE ${Lu(e.where)}`),
    e.orderBy && (t += ` ORDER BY ${e.orderBy.map(e => `${Lu(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Lu(e.limit)}`),
    e.offset && (t += ` OFFSET ${Lu(e.offset)}`),
    Vu(t)
}
function Uu(e) {
    let t = BS.get(e);
    if (t)
        return t;
    let n = Math.random().toString(16).slice(2);
    return BS.set(e, n),
    n
}
function Wu(e, t) {
    return z(t) && t.type === `Collection` && Ml(t.data) ? Uu(t.data) : t
}
function Gu(e, t) {
    let n = t?.id ?? `default`;
    return JSON.stringify(e, Wu) + n
}
function Ku(e, t) {
    e.forEach(e => clearTimeout(e)),
    e.clear(),
    t.forEach(e => e?.(`Callback cancelled by variant change`)),
    t.clear()
}
function qu() {
    return new Set
}
function Ju(e) {
    let t = Zr(qu)
      , n = Zr(qu);
    return ao( () => () => Ku(n, t)),
    O( () => () => Ku(n, t), []),
    O( () => {
        Ku(n, t)
    }
    , [e]),
    S({
        activeVariantCallback: e => async (...n) => new Promise( (r, i) => {
            t.add(i),
            e(...n).then(r)
        }
        ).catch( () => {}
        ),
        delay: async (e, t) => {
            await new Promise(e => {
                n.add(globalThis.setTimeout( () => e(!0), t))
            }
            ),
            e()
        }
    }).current
}
function Yu(e, t, n) {
    return d.useCallback(r => {
        var i, a, o;
        return !n || !e ? {} : t ? Object.assign({}, (i = n[e])?.[r], (a = n[t])?.[r]) : (o = n[e])?.[r] || {}
    }
    , [e, t, n])
}
function Xu(e) {
    for (let[t,n] of Object.entries(e)) {
        let e = K.matchMedia(n);
        if (e.matches)
            return t
    }
}
function Zu(e) {
    var t;
    let n = [];
    for (let {hash: t, mediaQuery: r} of e) {
        if (!r)
            continue;
        let e = K.matchMedia(r);
        e.matches && n.push(t)
    }
    if (n.length > 0)
        return n;
    let r = (t = e[0])?.hash;
    if (r)
        return [r]
}
function Qu(e, t, n=!0) {
    let r = w(Ov)
      , i = Wi()
      , a = !i && S_()
      , o = S(a ? Xu(t) ?? e : e)
      , s = S(n && r ? e : o.current)
      , l = fa()
      , u = Re()
      , d = E(e => {
        if (e !== o.current || e !== s.current) {
            let n = function() {
                o.current = s.current = e,
                c( () => {
                    l()
                }
                )
            };
            var t = n;
            i ? n() : u( () => {
                n()
            }
            )
        }
    }
    , [u, l, i]);
    return N_( () => {
        i && d(e)
    }
    , [e, i, d]),
    N_( () => {
        !n || r !== !0 || d(o.current)
    }
    , []),
    O( () => {
        let e = [];
        for (let[n,r] of Object.entries(t)) {
            let t = K.matchMedia(r)
              , i = e => {
                e.matches && d(n)
            }
            ;
            $u(t, i),
            e.push([t, i])
        }
        return () => e.forEach( ([e,t]) => ed(e, t))
    }
    , [t, d]),
    [o.current, s.current]
}
function $u(e, t) {
    e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t)
}
function ed(e, t) {
    e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t)
}
function td(e) {
    setTimeout(e, 1)
}
function nd(e) {
    var t, n, r, i;
    let a = new Set
      , o = Zu(e);
    if (o)
        for (let e of o)
            for (let n of document.querySelectorAll(`.hidden-` + e))
                rd(n.previousSibling) && a.add(n.previousSibling),
                (t = n.parentNode) == null || t.removeChild(n);
    let s = wp ? K.requestIdleCallback : td;
    s( () => {
        var e;
        (e = document.querySelector(VS)) == null || e.remove()
    }
    );
    for (let e of document.querySelectorAll(`.ssr-variant:empty`))
        rd(e.previousSibling) && a.add(e.previousSibling),
        (n = e.parentNode) == null || n.removeChild(e);
    for (let e of a)
        id(e.nextSibling) && ((r = e.parentNode) == null || r.removeChild(e.nextSibling),
        (i = e.parentNode) == null || i.removeChild(e))
}
function rd(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`
}
function id(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`
}
function ad(e, t) {
    if (e[t])
        return e[t];
    if (!(t in e))
        return e.default
}
function od(e, t) {
    let n = Ui();
    if (n)
        return;
    let r = d.useRef(!0)
      , i = d.useRef(t);
    ao( (t, n) => {
        let a = t && !n;
        if (!r.current && a) {
            let t = ad(i.current, e);
            t && t()
        }
        r.current = a
    }
    , []),
    d.useEffect( () => {
        if (r.current) {
            let t = ad(i.current, e);
            t && t()
        }
    }
    , [e])
}
function sd(e) {
    return z(e) && HS in e && e.page !== void 0
}
function cd(e) {
    throw e
}
function ld(e) {
    let {activeLocale: t} = En()
      , n = WS.get(e, t)
      , r = n.preload();
    return r && cd(r),
    n.read()
}
function ud(e) {
    let t = {
        ...e,
        select: []
    }
      , n = ld(t);
    return n.length
}
function dd(e, t) {
    let n = Object.entries(e ?? {}).filter( ([,e]) => !(St(e) || z(e)))
      , r = n.map( ([e,n]) => ({
        type: `BinaryOperation`,
        operator: `==`,
        left: {
            type: `TypeCast`,
            value: {
                type: `Identifier`,
                name: e,
                collection: t
            },
            dataType: `STRING`
        },
        right: {
            type: `LiteralValue`,
            value: String(n)
        }
    }));
    return r.length === 0 ? {
        type: `LiteralValue`,
        value: !1
    } : r.reduce( (e, t) => ({
        type: `BinaryOperation`,
        operator: `and`,
        left: e,
        right: t
    }))
}
function fd(e, t, n, r=!1) {
    var i, a, o, s;
    let[u,d] = l()
      , f = Math.ceil(e / t)
      , [p,m] = ee((s = (o = (a = (i = globalThis == null ? void 0 : globalThis.history)?.state)?.paginationInfo)?.[n])?.currentPage ?? 1)
      , h = S(p)
      , g = T( () => ({
        currentPage: p,
        totalPages: f,
        isLoading: u
    }), [p, f, u]);
    O( () => {
        wn(n, g)
    }
    , [n, g]);
    let _ = Rc()
      , v = E(async () => {
        if (_ || h.current >= f || (await Mt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        h.current >= f))
            return;
        let e = e => {
            e( () => {
                m(e => {
                    let t = Math.min(e + 1, f);
                    return h.current = t,
                    t
                }
                )
            }
            )
        }
        ;
        return e(r ? d : c)
    }
    , [f, r]);
    return {
        paginationInfo: g,
        loadMore: v
    }
}
function pd(e, t, n) {
    let r = ud(e)
      , {paginationInfo: i, loadMore: a} = fd(r, t, n, !0)
      , o = T( () => {
        let n = t * i.currentPage;
        if (e.limit) {
            if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
                throw Error(`Unexpected type for query limit`);
            n = Math.min(n, e.limit.value)
        }
        return {
            ...e,
            limit: {
                type: `LiteralValue`,
                value: n
            }
        }
    }
    , [e, t, i]);
    return {
        paginatedQuery: o,
        paginationInfo: i,
        loadMore: a
    }
}
function md(e, t) {
    return `${e}-${t}`
}
function hd(e, t) {
    let n = e.indexOf(t)
      , r = n + 1;
    r >= e.length && (r = 0);
    let i = e[r];
    return B(i !== void 0, `nextVariant should be defined`),
    i
}
function gd(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n)
                return n
        }
        return e.default
    }
}
function _d(e, t, n, r, i) {
    let {hover: a, pressed: o, loading: s, error: c} = e || {};
    if (c && i)
        return `error`;
    if (s && r)
        return `loading`;
    if (o && n)
        return `pressed`;
    if (a && t)
        return `hover`
}
function vd(e, t) {
    let n = t[e];
    return n || `framer-v-${e}`
}
function yd(e, t, n) {
    return e && n.has(e) ? e : t
}
function bd() {
    let e = S()
      , t = S()
      , n = E( () => {
        e.current && (document.removeEventListener(`visibilitychange`, e.current),
        e.current = void 0,
        t.current = void 0)
    }
    , []);
    return O( () => () => {
        n()
    }
    , [n]),
    E(r => {
        if (!document.hidden) {
            r(),
            n();
            return
        }
        if (t.current = r,
        e.current)
            return;
        let i = () => {
            var e;
            document.hidden || ((e = t.current) == null || e.call(t),
            n())
        }
        ;
        e.current = i,
        document.addEventListener(`visibilitychange`, i)
    }
    , [n])
}
function xd() {
    let e = S()
      , t = S(!1)
      , n = S()
      , r = w(uv);
    return O( () => () => {
        var t;
        (t = e.current) == null || t.call(e),
        n.current = void 0,
        e.current = void 0
    }
    , []),
    E( (i, a) => {
        if (!a?.current || t.current) {
            i();
            return
        }
        if (n.current = i,
        e.current)
            return;
        let o = !1
          , s = e => {
            t.current = e.isIntersecting,
            !o && (o = !0,
            queueMicrotask( () => {
                var e;
                o = !1,
                t.current && ((e = n.current) == null || e.call(n))
            }
            ))
        }
        ;
        e.current = Za(r, `undefined`, a.current, null, s)
    }
    , [r])
}
function Sd(e) {
    let t = bd()
      , n = xd();
    return E( (r, i=!1) => {
        if (Cp) {
            r();
            return
        }
        let a = i && e ? () => n(r, e) : r;
        t(a)
    }
    , [t, n, e])
}
async function Cd() {
    return new Promise(e => {
        let t = e;
        setTimeout( () => {
            t && (performance.mark(`wait-for-click-fallback`),
            t())
        }
        , 150),
        qS = () => {
            e(),
            t = void 0
        }
    }
    )
}
function wd(e) {
    e.button === 0 && (performance.mark(`pointerdown-listener`),
    KS = Cd())
}
function Td() {
    performance.mark(`click-received-listener`),
    KS = void 0,
    qS?.(),
    qS = void 0
}
function Ed(e=!1) {
    O( () => {
        e && (document.addEventListener(`pointerup`, wd, !0),
        document.__proto__.addEventListener.call(document, `click`, Td, !0))
    }
    , [e])
}
function Dd({variant: e, defaultVariant: t, transitions: n, enabledGestures: r, cycleOrder: i=[], variantProps: a={}, variantClassNames: o={}, ref: s}) {
    let l = fa()
      , u = Rc()
      , d = Zr( () => new Set(i))
      , {pauseOffscreen: f, yieldOnTap: p} = d_();
    Ed(p);
    let m = Sd(s)
      , h = S({
        isHovered: !1,
        isHoveredHasUpdated: !1,
        isPressed: !1,
        isPressedHasUpdated: !1,
        isError: !1,
        hasPressedVariants: !0,
        baseVariant: yd(e, t, d),
        lastVariant: e,
        gestureVariant: void 0,
        loadedBaseVariant: {},
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    })
      , g = E(e => {
        let {isHovered: t, isPressed: n, isError: r, enabledGestures: i, defaultVariant: a} = h.current
          , o = yd(e, a, d)
          , s = _d(i?.[o], t, n, !1, r)
          , c = s ? md(o, s) : void 0;
        return [o, c]
    }
    , [])
      , _ = E(async (e, t, n, r, i=!1, a=!1) => {
        let[o,s] = g(r);
        if (o === e && s === t)
            return;
        a && (h.current.isError = !1),
        h.current.baseVariant = o || n,
        h.current.gestureVariant = s;
        let u = p && h.current.isPressedHasUpdated;
        u && KS && (performance.mark(`wait-for-tap-start`),
        await KS,
        performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
        u && (performance.mark(`yield-on-tap-start`),
        await Mt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        performance.measure(`yield-on-tap`, `yield-on-tap-start`));
        let {isHovered: d, isPressed: _, isHoveredHasUpdated: v, isPressedHasUpdated: y} = h.current;
        if (d || v || _ || y) {
            c(l);
            return
        }
        m( () => c(l), f && i)
    }
    , [g, l, m, f, p])
      , v = E( ({isHovered: e, isPressed: t, isError: n}) => {
        let r = t !== h.current.isPressed
          , i = e !== h.current.isHovered;
        e !== void 0 && (h.current.isHovered = e),
        t !== void 0 && (h.current.isPressed = t),
        n !== void 0 && (h.current.isError = n);
        let {baseVariant: a, gestureVariant: o, defaultVariant: s} = h.current;
        h.current.isPressedHasUpdated = r,
        h.current.isHoveredHasUpdated = i,
        _(a, o, s, a, !1)
    }
    , [_])
      , y = E( (e, t=!1) => {
        let {defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a} = h.current
          , o = e === GS ? hd(r || [], i || n) : e;
        _(i, a, n, o, t, !0)
    }
    , [_])
      , b = E( () => {
        let {baseVariant: e} = h.current;
        h.current.loadedBaseVariant[e] = !0,
        m( () => c(l), !0)
    }
    , [l, m]);
    if (e !== h.current.lastVariant) {
        let[t,n] = g(e);
        h.current.lastVariant = t,
        (t !== h.current.baseVariant || n !== h.current.gestureVariant) && (h.current.baseVariant = t,
        h.current.gestureVariant = n)
    }
    let {baseVariant: x, gestureVariant: C, defaultVariant: w, enabledGestures: D, isHovered: O, isPressed: k, isError: A, loadedBaseVariant: ee} = h.current
      , j = Yu(h.current.baseVariant, h.current.gestureVariant, a);
    return T( () => {
        var e;
        let t = [];
        x !== w && t.push(x);
        let n = (e = D?.[x])?.loading
          , r = !A && !u && !!n && !ee[x]
          , i = r ? md(x, `loading`) : C;
        i && t.push(i);
        let a = D?.[x]
          , s = {
            onMouseEnter: () => v({
                isHovered: !0
            }),
            onMouseLeave: () => v({
                isHovered: !1
            })
        };
        return a?.pressed && Object.assign(s, {
            onTapStart: () => v({
                isPressed: !0
            }),
            onTapCancel: () => v({
                isPressed: !1
            }),
            onTap: () => v({
                isPressed: !1
            })
        }),
        {
            variants: t,
            baseVariant: x,
            gestureVariant: i,
            isLoading: r,
            transition: gd(h.current.transitions, x),
            setVariant: y,
            setGestureState: v,
            clearLoadingGesture: b,
            addVariantProps: j,
            gestureHandlers: s,
            classNames: Zo(vd(x, o), _d(a, O, k, r, A))
        }
    }
    , [x, C, O, k, ee, j, y, w, D, v, b, o])
}
function Od(e, {scopeId: t, nodeId: n, override: r, inComponentSlot: i}) {
    if (!Gs())
        return r(e);
    let a = kd(e, r)
      , o = !1;
    function s(r, s) {
        let c = Js()
          , l = nc(t, c?.scopeId, c?.level, i ?? !1);
        if (l)
            return a.status === `success` ? x(Ks, {
                getErrorMessage: $s.bind(null, t, n),
                fallback: x(e, {
                    ...r,
                    ref: s
                }),
                children: x(a.Component, {
                    ...r,
                    ref: s
                })
            }) : (o || (Ws(a.error),
            Ws($s(t, n)),
            Us(a.error),
            o = !0),
            x(e, {
                ...r,
                ref: s
            }));
        if (a.status === `success`)
            return x(a.Component, {
                ...r,
                ref: s
            });
        throw a.error
    }
    return d.forwardRef(s)
}
function kd(e, t) {
    try {
        let n = t(e);
        return {
            status: `success`,
            Component: n
        }
    } catch (e) {
        return {
            status: `error`,
            error: e
        }
    }
}
function Ad(e) {
    return e.weight !== void 0 && e.style !== void 0
}
function jd(e, t) {
    let n = t === `normal` ? `Regular` : `Italic`;
    return e === 400 ? n : t === `normal` ? `${tC[e]}` : `${tC[e]} ${n}`
}
function Md(e) {
    return !!e.variationAxes
}
function Nd(e) {
    return Md(e) && e.family.source !== `custom` ? Pd(e.family.name) : e.family.name
}
function Pd(e) {
    return `${e} Variable`
}
function Fd(e) {
    return !!(e && Array.isArray(e))
}
function Id(e) {
    if (!e || !Array.isArray(e))
        return;
    let t = [];
    for (let n of e) {
        if (!Rd(n))
            continue;
        t.push({
            tag: n.tag,
            name: n.name,
            minValue: n.minValue,
            maxValue: n.maxValue,
            defaultValue: n.defaultValue
        })
    }
    return t
}
function Ld(e) {
    return !(typeof e != `object` || !e || !(`tag`in e) || typeof e.tag != `string` || `coverage`in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
}
function Rd(e) {
    return !(typeof e != `object` || !e || !(`tag`in e) || typeof e.tag != `string` || `name`in e && typeof e.name != `string` || !(`minValue`in e) || typeof e.minValue != `number` || !(`maxValue`in e) || typeof e.maxValue != `number` || !(`defaultValue`in e) || typeof e.defaultValue != `number`)
}
function zd(e) {
    let t = Bd(e);
    return iC[t]
}
function Bd(e) {
    return e.toLowerCase().replace(/\s+/gu, `-`)
}
function Vd(e) {
    return e = e.toLowerCase(),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
}
function Hd(e, t) {
    if (!t)
        return e.substring(0, e.lastIndexOf(`.`));
    let {font: n} = t
      , r = n.preferredFamily || n.fontFamily
      , i = Array.isArray(n.variationAxes);
    if (i && r.toLowerCase().includes(`variable`))
        return r;
    let a = i ? `Variable` : (n.preferredSubFamily || n.fontSubFamily).trim();
    return a === `` ? r : `${r} ${a}`
}
function Ud(e, t) {
    return {
        ...Wd(e, t),
        ...Gd(e, t)
    }
}
function Wd(e, t) {
    if (t.length === 0)
        return {
            variantBold: void 0,
            variantBoldItalic: void 0,
            variantItalic: void 0
        };
    let {weight: n, style: r} = e
      , i = new Map
      , a = new Map;
    for (let r of t) {
        if (r.isVariable !== e.isVariable || (i.set(`${r.weight}-${r.style}`, r),
        r.weight <= n))
            continue;
        a.has(r.style) || a.set(r.style, r)
    }
    let o = a.get(r)
      , s = a.get(`italic`)
      , c = e.weight;
    c <= 300 ? (o = i.get(`400-${r}`) ?? o,
    s = i.get(`400-italic`) ?? s) : c <= 500 ? (o = i.get(`700-${r}`) ?? o,
    s = i.get(`700-italic`) ?? s) : (o = i.get(`900-${r}`) ?? o,
    s = i.get(`900-italic`) ?? s);
    let l = i.get(`${n}-italic`);
    return {
        variantBold: o,
        variantItalic: l,
        variantBoldItalic: s
    }
}
function Gd(e, t) {
    if (t.length === 0)
        return {
            variantVariable: void 0,
            variantVariableItalic: void 0
        };
    let n = new Map;
    for (let e of t) {
        if (!e.isVariable)
            continue;
        n.set(`${e.weight}-${e.style}`, e)
    }
    return {
        variantVariable: n.get(`${e.weight}-normal`) ?? n.get(`400-normal`) ?? void 0,
        variantVariableItalic: n.get(`${e.weight}-italic`) ?? n.get(`400-italic`) ?? void 0
    }
}
async function Kd(e) {
    switch (e) {
    case `google`:
        {
            let e = await import(`./google-LHIHIYDX.DfdVZfcV.mjs`);
            return e?.default
        }
    case `fontshare`:
        {
            let e = await import(`./fontshare-GSJIWLGZ.7ovEohFe.mjs`);
            return e?.default
        }
    default:
        throw Error(`Unknown font source: ${e}`)
    }
}
async function qd(e) {
    switch (e) {
    case `google`:
        {
            let e = await import(`./google-3GQMHAEU.Cu8gW8Wn.mjs`);
            return e?.default
        }
    case `fontshare`:
        {
            let e = await import(`./fontshare-SSHBFVID.CcZKgZGt.mjs`);
            return e?.default
        }
    case `framer`:
        {
            let e = await import(`./framer-font-TNC5DMGA.DA5fktCP.mjs`);
            return e?.default
        }
    default:
        throw Error(`Unknown font source: ${e}`)
    }
}
function Jd(e) {
    return e.split(`,`).map(e => e.trim().toLowerCase()).filter(Yd)
}
function Yd(e) {
    return sC.includes(e)
}
function Xd(e) {
    let t = {
        serif: `serif`,
        sans: `sans-serif`,
        slab: `slab`,
        display: `display`,
        handwritten: `handwriting`,
        script: `handwriting`
    }
      , n = Jd(e)[0];
    return n && t[n]
}
function Zd(e) {
    let t = {
        serif: `serif`,
        "sans-serif": `sans-serif`,
        display: `display`,
        handwriting: `handwriting`,
        monospace: `monospace`
    };
    if (e)
        return t[e]
}
function Qd(e, t) {
    return e.reduce( (e, n) => (e[t(n)] = n,
    e), {})
}
async function $d(e, t, n=0) {
    let {family: r, url: i, stretch: a, unicodeRange: o, isVariableFont: s} = e
      , c = s ? e.weight : e.weight || 500
      , l = e.style || `normal`
      , u = `${r}-${l}-${c}-${i}`;
    if (!CC.has(u) || n > 0) {
        let s = new FontFace(r,`url(${i})`,{
            weight: L(c) ? c : c?.toString(),
            style: l,
            stretch: a,
            unicodeRange: o
        })
          , d = s.load().then( () => (t.fonts.add(s),
        ef(r, l, c))).catch(s => {
            if (s.name !== `NetworkError`)
                throw s;
            if (n < xC)
                return $d(e, t, n + 1);
            throw new SC(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: l,
                weight: c,
                url: i,
                stretch: a,
                unicodeRange: o
            })}`)
        }
        );
        CC.set(u, d)
    }
    await CC.get(u)
}
async function ef(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!wC.has(r)) {
        let i = new yC.default(e,{
            style: t,
            weight: n
        })
          , a = i.load(null, bC);
        wC.set(r, a)
    }
    try {
        await wC.get(r)
    } catch {
        throw new SC(`Failed to check if font is ready (${bC}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}
function tf(e) {
    try {
        if (e === `framer`)
            return nf(EC) ? EC : void 0;
        {
            let t = (async () => {
                switch (e) {
                case `google`:
                    return (await import(`./google-42BCYVR5.BZ5aIy3N.mjs`)).default;
                case `fontshare`:
                    return (await import(`./fontshare-X6MCIXW5.CxDMKcD5.mjs`)).default;
                default:
                    V(e)
                }
            }
            )();
            return nf(t) ? t : void 0
        }
    } catch (e) {
        console.error(e);
        return
    }
}
function nf(e) {
    return z(e) && Object.values(e).every(af)
}
function rf(e) {
    return z(e) && L(e.tag)
}
function af(e) {
    return Array.isArray(e) && e.every(rf)
}
function sf(e) {
    return e.toLowerCase().replace(zC, `-`).replace(BC, ``)
}
function cf(e, t) {
    return HC && !t ? Document.parseHTMLUnsafe(e) : (VC ??= new DOMParser,
    VC.parseFromString(e, t ?? `text/html`))
}
function lf(e) {
    return e.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`).replaceAll(`"`, `&quot;`).replaceAll(`'`, `&#39;`)
}
function uf(e, t, n, r) {
    return e.replace(UC, (e, i, a, o, s, c, l) => {
        var u, d;
        if (a.toLowerCase() !== `a`)
            return e;
        let f = s || c
          , p = Oc(f.replace(/&amp;/gu, `&`));
        if (!p || !p.target)
            return e;
        let m = t(p.target);
        if (!sd(m) || !sd(n))
            return e;
        let h = m.path
          , g = n.path;
        if (!h || !g)
            return e;
        let _ = ` data-framer-page-link-target="${p.target}"`
          , v = ht(m, p.element ?? void 0);
        v && (_ += ` data-framer-page-link-element="${p.element}"`);
        let y = Ac(f);
        if (!y || L(y))
            return e;
        Nc(n, y, r) && (_ += ` data-framer-page-link-current`);
        let b = h
          , x = Object.assign({}, r, (u = p.collectionItem)?.pathVariables);
        if (Object.keys(x).length > 0 && (b = b.replace(jb, (e, t) => `` + x[t])),
        (d = p.collectionItem)?.pathVariables) {
            let e = new URLSearchParams(p.collectionItem.pathVariables);
            _ += ` data-framer-page-link-path-variables="${e}"`
        }
        return b = Lt(g, b),
        i + o + `"${lf(b + (v ? `#${v}` : ``))}"` + _ + l
    }
    )
}
function df(e, t) {
    return e.length === t.length && e.every( (e, n) => e === t[n])
}
function ff(e) {
    switch (e) {
    case `top`:
        return `flex-start`;
    case `center`:
        return `center`;
    case `bottom`:
        return `flex-end`
    }
}
function pf(e, t, n) {
    let r = S([]);
    df(r.current, e) || (r.current = e,
    OC.loadFonts(e).then( ({newlyLoadedFontCount: e}) => {
        !t || !n.current || J.current() !== J.canvas || e > 0 && va(n.current)
    }
    ))
}
function mf() {
    return {
        current: null
    }
}
async function hf(e, t) {
    let n = e.current;
    if (n)
        return n;
    let r, i = new Promise( (e, n) => {
        r = e,
        t.signal.addEventListener(`abort`, () => n())
    }
    );
    return Object.defineProperty(e, `current`, {
        get() {
            return n
        },
        set(e) {
            if (n = e,
            e === null) {
                t.abort();
                return
            }
            r(e)
        },
        configurable: !0
    }),
    i
}
function gf(e) {
    return e in qC
}
function _f(e) {
    let t = {};
    for (let n in e) {
        if (!gf(n))
            continue;
        let r = e[n]
          , i = qC[n];
        if (St(r) || St(i))
            continue;
        t[n] = [r, i]
    }
    return t
}
function vf(e, t=`character`, n, r) {
    switch (t) {
    case `character`:
    case `line`:
        {
            let t = e.split(` `)
              , i = t.length - 1;
            return t.map( (e, t) => {
                var a;
                let o = t === i
                  , s = e.length <= 12;
                return D(A, {
                    children: [x(`span`, {
                        style: {
                            whiteSpace: s ? `nowrap` : `unset`
                        },
                        children: (a = e.match(JC))?.map( (e, t) => {
                            let i = mf();
                            return n.add(i),
                            x(`span`, {
                                ref: i,
                                style: r,
                                children: e
                            }, e + t)
                        }
                        )
                    }), o ? null : ` `]
                }, e + t + o)
            }
            )
        }
    case `word`:
        {
            let t = e.split(` `)
              , i = t.length - 1;
            return t.map( (e, t) => {
                let a = t === i
                  , o = mf();
                return n.add(o),
                D(A, {
                    children: [x(`span`, {
                        ref: o,
                        style: r,
                        children: e
                    }), a ? null : ` `]
                }, e + t + a)
            }
            )
        }
    case `element`:
    default:
        return e
    }
}
function yf(e) {
    let t = e.type;
    switch (t) {
    case `appear`:
        return e.tokenization ?? `character`;
    default:
        V(t)
    }
}
function bf(e) {
    let t = [];
    return R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
}
function xf(e, t, n) {
    if (!n || !n.effect)
        return;
    let r = n.type;
    switch (r) {
    case `appear`:
        switch (n.tokenization) {
        case `element`:
            return !e || !t ? void 0 : {
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: bf(n.effect)
            };
        case `line`:
        case `word`:
        case `character`:
        default:
            return !e || !t ? {
                display: `inline-block`
            } : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: bf(n.effect)
            }
        }
    default:
        V(r)
    }
}
function Sf(e, t, n) {
    let r = Zr( () => new Set)
      , i = Ui()
      , a = n || !i
      , o = S({
        hasMounted: !1,
        hasAnimatedOnce: !1,
        isAnimating: !1,
        effect: e
    });
    o.current.effect = e;
    let s = e?.trigger ?? `onMount`
      , c = e?.target
      , l = e?.threshold;
    O( () => {
        if (!a || n)
            return;
        o.current.hasMounted = !0;
        function e() {
            let {effect: e} = o.current;
            if (!a || !e || e?.repeat !== !0 && o.current.hasAnimatedOnce || e?.type === `appear` && o.current.isAnimating)
                return;
            Object.assign(o.current, {
                hasAnimatedOnce: !0,
                isAnimating: !0
            });
            let t = e.type;
            switch (t) {
            case `appear`:
                {
                    let {transition: t, startDelay: n, repeat: i, tokenization: a} = e
                      , s = {
                        current: void 0
                    };
                    return wf(a, e.effect, r, t, n, i, () => {
                        Object.assign(o.current, {
                            isAnimating: !1
                        })
                    }
                    , s),
                    () => {
                        var e;
                        return (e = s.current)?.call(s)
                    }
                }
            default:
                V(t)
            }
        }
        switch (s) {
        case `onMount`:
            e();
            return;
        case `onInView`:
            {
                let n = t?.current;
                return n ? xe(n, e, {
                    amount: l ?? 0
                }) : void 0
            }
        case `onScrollTarget`:
            {
                let t = c?.ref.current;
                return t ? xe(t, e, {
                    amount: l ?? 0,
                    root: document,
                    margin: c?.offset ? `${c.offset}px 0px 0px 0px` : void 0
                }) : void 0
            }
        default:
            V(s)
        }
    }
    , [a, r, n, t, c, l, s]);
    let u = !!e
      , d = e ? yf(e) : void 0;
    return T( () => ({
        getTokenizer: () => {
            if (r.clear(),
            !u)
                return;
            let {hasMounted: e, hasAnimatedOnce: t, effect: i} = o.current
              , s = xf(a, n || Cf(e, t, i), o.current.effect);
            return {
                text: e => vf(e, d, r, s),
                props: e => {
                    if (i?.tokenization !== `element`)
                        return;
                    let t = mf();
                    return r.add(t),
                    {
                        ref: t,
                        style: {
                            ...e,
                            ...s
                        }
                    }
                }
            }
        }
        ,
        play: () => {
            let {effect: e} = o.current;
            if (!e)
                return;
            let t = e.type;
            switch (t) {
            case `appear`:
                {
                    let {transition: t, startDelay: n} = e;
                    wf(d, e.effect, r, t, n);
                    break
                }
            default:
                V(t)
            }
        }
    }), [a, u, r, n, d])
}
function Cf(e, t, n) {
    return !(e && n?.trigger === `onMount` || t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
}
async function wf(e=`character`, t, n, r, i=0, a=!1, o, s) {
    let c = _f(t)
      , l = new AbortController;
    switch (s && (s.current = () => l.abort()),
    e) {
    case `character`:
    case `element`:
    case `word`:
        {
            let e = await Tf(n, l);
            if (e === null || (_e(e, c, {
                ...r,
                restDelta: .001,
                delay: Ne(r?.delay ?? 0, {
                    startDelay: i
                })
            }).then( () => o?.()),
            !a || !s))
                return;
            s.current = () => void _e(e, t, {
                ...r,
                restDelta: .001,
                delay: Ne(r?.delay ?? 0, {
                    startDelay: i
                })
            });
            return
        }
    case `line`:
        {
            try {
                for (let e of n)
                    await hf(e, l)
            } catch {
                return
            }
            let e;
            if (be.read( () => {
                e = Ef(n),
                e.length !== 0 && be.update( () => {
                    let t = e.map( (e, t) => _e(e, c, {
                        ...r,
                        restDelta: .001,
                        delay: i + t * (r?.delay ?? 0)
                    }));
                    Promise.all(t).then( () => o?.())
                }
                )
            }
            ),
            !a || !s)
                return;
            s.current = () => {
                e.length !== 0 && e.forEach( (e, n) => {
                    _e(e, t, {
                        ...r,
                        restDelta: .001,
                        delay: i + n * (r?.delay ?? 0)
                    })
                }
                )
            }
            ;
            return
        }
    default:
        V(e)
    }
}
async function Tf(e, t) {
    if (e.size === 0)
        return null;
    let n = [];
    for (let r of e)
        try {
            let e = await hf(r, t);
            e && n.push(e)
        } catch {
            return null
        }
    return n
}
function Ef(e) {
    let t = []
      , n = []
      , r = null;
    for (let i of e) {
        if (!i.current)
            continue;
        let e = i.current.offsetTop
          , a = i.current.offsetHeight;
        !a || r === null || e === r ? n.push(i.current) : (t.push(n),
        n = [i.current]),
        a && (r = e)
    }
    return t.push(n),
    t
}
function Df(e) {
    return e.type === A
}
function Of(e) {
    return e.type === `br`
}
function kf(e, t, n, i, a={}, o, s=Df(e) ? -1 : 0) {
    let c = v.toArray(e.props.children);
    L(n) && (c = c.slice(0, 1));
    let l = !0;
    c = c.map(e => {
        if ((!r(e) || !Of(e)) && (l = !1),
        r(e))
            return kf(e, t, n, i, a, o, s + 1);
        let c = L(n) ? n : e;
        return L(c) && o ? o.text(c) : c
    }
    );
    let {"data-preset-tag": u, ...d} = e.props;
    if (L(e.type) || we(e.type)) {
        let n = Fe(e.type) || e.type
          , r = u || n
          , f = L(r) ? t?.[r] : void 0;
        d.className = Zo(`framer-text`, d.className, f),
        o && s === 0 && !l && Object.assign(d, o.props(d.style));
        let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`
          , m = t?.anchor;
        if (p && m) {
            let e = Af(c, a);
            d.id = e;
            let t = Zo(`framer-text`, m)
              , n = x(`a`, {
                href: `#${e}`,
                className: t,
                children: c
            });
            d.style = {
                ...d.style ?? {},
                scrollMarginTop: i
            },
            c = [n]
        }
    }
    return C(e, d, ...c)
}
function Af(e, t) {
    let n = e.map(jf).join(``)
      , r = sf(n)
      , i = t[r] ?? 0;
    return i > 0 && (r += `-${i}`),
    t[r] = i + 1,
    r
}
function jf(e) {
    return L(e) || R(e) ? e.toString() : r(e) ? jf(e.props.children) : Array.isArray(e) ? e.map(jf).join(``) : ``
}
function Mf(e) {
    var t, n;
    let r = e * Math.PI / 180
      , i = {
        x: -Math.sin(r) * 100,
        y: Math.cos(r) * 100
    }
      , a = ur(i.x, i.y)
      , o = jh(ur(.5, .5), a)
      , s = Y.points({
        x: 0,
        y: 0,
        width: 1,
        height: 1
    })
      , c = s.map(e => ({
        point: e,
        distance: ur.distance(a, e)
    })).sort( (e, t) => e.distance - t.distance)
      , l = (t = c[0])?.point
      , u = (n = c[1])?.point;
    B(l && u, `linearGradientLine: Must have 2 closest points.`);
    let[d,f] = s.filter(e => !ur.isEqual(e, l) && !ur.isEqual(e, u));
    B(d && f, `linearGradientLine: Must have 2 opposing points.`);
    let p = jh.intersection(o, jh(l, u))
      , m = jh.intersection(o, jh(d, f));
    return B(p && m, `linearGradientLine: Must have a start and end point.`),
    jh(p, m)
}
function Nf(e, t) {
    var n, r;
    let i = Mf(e.angle)
      , a = Da(e)
      , o = (n = a[0])?.position ?? 0
      , s = (r = a[a.length - 1])?.position ?? 1
      , c = jh.pointAtPercentDistance(i, o)
      , l = jh.pointAtPercentDistance(i, s)
      , u = Ce([o, s], [0, 1]);
    return {
        id: `id${t}g${Y_.hash(e)}`,
        x1: c.x,
        y1: c.y,
        x2: l.x,
        y2: l.y,
        stops: a.map(t => ({
            color: t.value,
            alpha: U_.getAlpha(t.value) * e.alpha,
            position: u(t.position)
        }))
    }
}
function Pf(e, t) {
    return {
        id: `id${t}g${Z_.hash(e)}`,
        widthFactor: e.widthFactor,
        heightFactor: e.heightFactor,
        centerAnchorX: e.centerAnchorX,
        centerAnchorY: e.centerAnchorY,
        stops: Da(e).map(t => ({
            color: t.value,
            alpha: U_.getAlpha(t.value) * e.alpha,
            position: t.position
        }))
    }
}
function Ff(e) {
    if (!L(e))
        return !1;
    let t = e.charAt(e.length - 1);
    if (t !== `%`)
        return !1;
    let n = e.slice(0, -1)
      , r = parseFloat(n);
    return R(r)
}
function If(e) {
    let t = e.slice(0, -1)
      , n = parseFloat(t);
    return R(n) ? n : 50
}
function Lf(e) {
    return Ff(e) ? If(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : .5
}
function Rf(e) {
    return Ff(e) ? If(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : .5
}
function zf(e, t, n, r) {
    if (e = $m.get(e, `#09F`),
    !b_.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
        return;
    let i = e.pixelWidth, a = e.pixelHeight, o, {fit: s} = e, c = 1, l = 1, u = 0, d = 0;
    if (s === `fill` || s === `fit` || s === `tile` || !s) {
        let n = 1
          , f = 1
          , p = i / a
          , m = t.height * p
          , h = t.width / p
          , g = m / t.width
          , _ = h / t.height;
        if (s === `tile`) {
            e.backgroundSize ??= 1,
            c = Math.round(e.backgroundSize * (i / 2)),
            l = Math.round(e.backgroundSize * (a / 2));
            let n = t.x ?? 0
              , s = t.y ?? 0
              , f = 0
              , p = 0;
            r && (f = n,
            p = s),
            u = (t.width - c) * Lf(e.positionX) + f,
            d = (t.height - l) * Rf(e.positionY) + p,
            o = `translate(${u + n}, ${d + s})`
        } else
            (s === `fill` || !s ? _ > g : _ < g) ? (f = _,
            d = (1 - _) * Rf(e.positionY)) : (n = g,
            u = (1 - g) * Lf(e.positionX)),
            o = `translate(${u}, ${d}) scale(${n}, ${f})`
    }
    let f = `id${n}g-fillImage`;
    return {
        id: f,
        path: e.src ?? ``,
        transform: o,
        width: c,
        height: l,
        offsetX: u,
        offsetY: d
    }
}
function Bf(e) {
    return e.startsWith(`data:${nw}`)
}
function Vf(e, t) {
    if (/^\w+:/u.test(e) && !Bf(e))
        return e;
    t = typeof t == `number` ? t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096 : void 0;
    let n = J.current() === J.export;
    return __.assetResolver(e, {
        pixelSize: t,
        isExport: n
    }) ?? ``
}
function Hf(e, t) {
    return O( () => cw.subscribeToTemplate(e), [e]),
    cw.template(e, t)
}
function Uf(e) {
    try {
        let t = cf(e)
          , n = t.getElementsByTagName(`svg`)[0];
        if (!n)
            throw Error(`no svg element found`);
        return n
    } catch {
        return
    }
}
function Wf(e, t) {
    let n = Gf(t);
    Kf(e, n)
}
function Gf(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``)
}
function Kf(e, t) {
    qf(e, t);
    let n = Array.from(e.children);
    n.forEach(e => {
        Kf(e, t)
    }
    )
}
function qf(e, t) {
    let n = e.getAttributeNames();
    n.forEach(n => {
        let r = e.getAttribute(n);
        if (!r)
            return;
        if (n === `id` && e.setAttribute(n, `${t}_${r}`),
        n === `href` || n === `xlink:href`) {
            let[i,a] = r.split(`#`);
            if (i)
                return;
            e.setAttribute(n, `#${t}_${a}`);
            return
        }
        let i = `url(#`;
        if (r.includes(i)) {
            let a = r.replace(i, `${i}${t}_`);
            e.setAttribute(n, a)
        }
    }
    )
}
function Jf(e) {
    var t;
    if (!e)
        return;
    let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
    if (!(n?.[1] === void 0 || n?.[2] === void 0) && !(t = n[2])?.startsWith(`%`))
        return Math.round(parseFloat(n[1]) * (lw[n[2]] || 1))
}
function Yf(e) {
    let t = Jf(e.getAttribute(`width`))
      , n = Jf(e.getAttribute(`height`));
    if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
        return {
            width: t,
            height: n
        }
}
function Xf(e) {
    return e.indexOf(`image`) >= 0
}
function Zf(e) {
    return e.indexOf(`var(--`) >= 0
}
function Qf(e) {
    return !!(e.borderRadius || e.borderBottomLeftRadius || e.borderBottomRightRadius || e.borderTopLeftRadius || e.borderTopRightRadius)
}
function $f(e, t) {
    var n, r;
    let i = e.current;
    if (!i)
        return;
    let a = t.providedWindow ?? K
      , o = i.firstElementChild;
    if (!o || !(o instanceof a.SVGSVGElement))
        return;
    if (!o.getAttribute(`viewBox`)) {
        let e = cw.getViewBox(t.svg);
        e && o.setAttribute(`viewBox`, e)
    }
    let {withExternalLayout: s, parentSize: c} = t
      , l = !s && fi(t) && c !== 1 && c !== 2;
    if (l)
        return;
    let {intrinsicWidth: u, intrinsicHeight: d, _constraints: f} = t;
    (n = o.viewBox.baseVal)?.width === 0 && (r = o.viewBox.baseVal)?.height === 0 && H(u) && H(d) && o.setAttribute(`viewBox`, `0 0 ${u} ${d}`),
    f && f.aspectRatio ? o.setAttribute(`preserveAspectRatio`, ``) : o.setAttribute(`preserveAspectRatio`, `none`),
    o.setAttribute(`width`, `100%`),
    o.setAttribute(`height`, `100%`)
}
function ep() {
    return d.useInsertionEffect( () => {
        Ni()
    }
    , []),
    null
}
function tp(e) {
    return e > pw ? `lazy` : void 0
}
function np(e, t, n) {
    let r = ap(t);
    !n?.supportsExplicitInterCodegen && !r.some(e => e.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }),
    Object.assign(e, {
        fonts: r
    })
}
function rp(e) {
    let t = e.fonts;
    return t ?? []
}
function ip(e) {
    return e.length === 0 ? [{
        explicitInter: !1,
        fonts: []
    }] : ap(e)
}
function ap(e) {
    let t = {
        explicitInter: !1,
        fonts: []
    }
      , n = [];
    for (let r of e)
        op(r) ? n.push(r) : t.fonts.push(sp(r));
    return t.fonts.length > 0 && n.push(t),
    n
}
function op(e) {
    return mw in e
}
function sp(e) {
    let t;
    return t = e.url.startsWith(`https://fonts.gstatic.com/s/`) ? `google` : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`) ? `fontshare` : `custom`,
    {
        ...e,
        source: t
    }
}
function cp(e, t) {
    let n = `${e}-start`;
    performance.mark(n),
    t();
    let r = `${e}-end`;
    performance.mark(r),
    performance.measure(e, n, r)
}
var lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, xp, Sp, Cp, wp, Tp, Ep, K, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up, Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm, Tm, Em, Dm, Om, km, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km, qm, Jm, Ym, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, q, mh, hh, gh, _h, vh, yh, bh, xh, Sh, Ch, J, wh, Th, Eh, Dh, Oh, kh, Ah, jh, Y, Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh, Vh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, X, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_, M_, N_, P_, F_, I_, L_, R_, z_, B_, V_, H_, U_, W_, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv, xv, Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, py, my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, Z, _x, vx, Q, yx, bx, xx, Sx, Cx, wx, Tx, Ex, Dx, Ox, kx, Ax, $, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC, PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC, YC, XC, ZC, QC, $C, ew, tw, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, pw, mw, hw = e( () => {
    _(//! Credit to Astro | MIT License
    /**
* @license Emotion v11.0.0
* MIT License
*
* Copyright (c) Emotion team and other contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
    /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
    ),
    I(),
    Se(),
    h(),
    m(),
    g(),
    lp = le({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(exports) {
            "use strict";
            Object.defineProperty(exports, `__esModule`, {
                value: !0
            }),
            exports.Hsluv = void 0;
            var t = class e {
                constructor() {
                    this.hex = `#000000`,
                    this.rgb_r = 0,
                    this.rgb_g = 0,
                    this.rgb_b = 0,
                    this.xyz_x = 0,
                    this.xyz_y = 0,
                    this.xyz_z = 0,
                    this.luv_l = 0,
                    this.luv_u = 0,
                    this.luv_v = 0,
                    this.lch_l = 0,
                    this.lch_c = 0,
                    this.lch_h = 0,
                    this.hsluv_h = 0,
                    this.hsluv_s = 0,
                    this.hsluv_l = 0,
                    this.hpluv_h = 0,
                    this.hpluv_p = 0,
                    this.hpluv_l = 0,
                    this.r0s = 0,
                    this.r0i = 0,
                    this.r1s = 0,
                    this.r1i = 0,
                    this.g0s = 0,
                    this.g0i = 0,
                    this.g1s = 0,
                    this.g1i = 0,
                    this.b0s = 0,
                    this.b0i = 0,
                    this.b1s = 0,
                    this.b1i = 0
                }
                static fromLinear(e) {
                    return e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055
                }
                static toLinear(e) {
                    return e > .04045 ? ((e + .055) / 1.055) ** 2.4 : e / 12.92
                }
                static yToL(t) {
                    return t <= e.epsilon ? t / e.refY * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16
                }
                static lToY(t) {
                    return t <= 8 ? e.refY * t / e.kappa : e.refY * ((t + 16) / 116) ** 3
                }
                static rgbChannelToHex(t) {
                    let n = Math.round(t * 255)
                      , r = n % 16
                      , i = (n - r) / 16 | 0;
                    return e.hexChars.charAt(i) + e.hexChars.charAt(r)
                }
                static hexToRgbChannel(t, n) {
                    let r = e.hexChars.indexOf(t.charAt(n))
                      , i = e.hexChars.indexOf(t.charAt(n + 1))
                      , a = r * 16 + i;
                    return a / 255
                }
                static distanceFromOriginAngle(e, t, n) {
                    let r = t / (Math.sin(n) - e * Math.cos(n));
                    return r < 0 ? 1 / 0 : r
                }
                static distanceFromOrigin(e, t) {
                    return Math.abs(t) / Math.sqrt(e ** 2 + 1)
                }
                static min6(e, t, n, r, i, a) {
                    return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))))
                }
                rgbToHex() {
                    this.hex = `#`,
                    this.hex += e.rgbChannelToHex(this.rgb_r),
                    this.hex += e.rgbChannelToHex(this.rgb_g),
                    this.hex += e.rgbChannelToHex(this.rgb_b)
                }
                hexToRgb() {
                    this.hex = this.hex.toLowerCase(),
                    this.rgb_r = e.hexToRgbChannel(this.hex, 1),
                    this.rgb_g = e.hexToRgbChannel(this.hex, 3),
                    this.rgb_b = e.hexToRgbChannel(this.hex, 5)
                }
                xyzToRgb() {
                    this.rgb_r = e.fromLinear(e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z),
                    this.rgb_g = e.fromLinear(e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z),
                    this.rgb_b = e.fromLinear(e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z)
                }
                rgbToXyz() {
                    let t = e.toLinear(this.rgb_r)
                      , n = e.toLinear(this.rgb_g)
                      , r = e.toLinear(this.rgb_b);
                    this.xyz_x = .41239079926595 * t + .35758433938387 * n + .18048078840183 * r,
                    this.xyz_y = .21263900587151 * t + .71516867876775 * n + .072192315360733 * r,
                    this.xyz_z = .019330818715591 * t + .11919477979462 * n + .95053215224966 * r
                }
                xyzToLuv() {
                    let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z
                      , n = 4 * this.xyz_x
                      , r = 9 * this.xyz_y;
                    t === 0 ? (n = NaN,
                    r = NaN) : (n /= t,
                    r /= t),
                    this.luv_l = e.yToL(this.xyz_y),
                    this.luv_l === 0 ? (this.luv_u = 0,
                    this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (n - e.refU),
                    this.luv_v = 13 * this.luv_l * (r - e.refV))
                }
                luvToXyz() {
                    if (this.luv_l === 0) {
                        this.xyz_x = 0,
                        this.xyz_y = 0,
                        this.xyz_z = 0;
                        return
                    }
                    let t = this.luv_u / (13 * this.luv_l) + e.refU
                      , n = this.luv_v / (13 * this.luv_l) + e.refV;
                    this.xyz_y = e.lToY(this.luv_l),
                    this.xyz_x = 0 - 9 * this.xyz_y * t / ((t - 4) * n - t * n),
                    this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)
                }
                luvToLch() {
                    if (this.lch_l = this.luv_l,
                    this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v),
                    this.lch_c < 1e-8)
                        this.lch_h = 0;
                    else {
                        let e = Math.atan2(this.luv_v, this.luv_u);
                        this.lch_h = e * 180 / Math.PI,
                        this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)
                    }
                }
                lchToLuv() {
                    let e = this.lch_h / 180 * Math.PI;
                    this.luv_l = this.lch_l,
                    this.luv_u = Math.cos(e) * this.lch_c,
                    this.luv_v = Math.sin(e) * this.lch_c
                }
                calculateBoundingLines(t) {
                    let n = (t + 16) ** 3 / 1560896
                      , r = n > e.epsilon ? n : t / e.kappa
                      , i = r * (284517 * e.m_r0 - 94839 * e.m_r2)
                      , a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0)
                      , o = r * (632260 * e.m_r2 - 126452 * e.m_r1)
                      , s = r * (284517 * e.m_g0 - 94839 * e.m_g2)
                      , c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0)
                      , l = r * (632260 * e.m_g2 - 126452 * e.m_g1)
                      , u = r * (284517 * e.m_b0 - 94839 * e.m_b2)
                      , d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0)
                      , f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
                    this.r0s = i / o,
                    this.r0i = a * t / o,
                    this.r1s = i / (o + 126452),
                    this.r1i = (a - 769860) * t / (o + 126452),
                    this.g0s = s / l,
                    this.g0i = c * t / l,
                    this.g1s = s / (l + 126452),
                    this.g1i = (c - 769860) * t / (l + 126452),
                    this.b0s = u / f,
                    this.b0i = d * t / f,
                    this.b1s = u / (f + 126452),
                    this.b1i = (d - 769860) * t / (f + 126452)
                }
                calcMaxChromaHpluv() {
                    let t = e.distanceFromOrigin(this.r0s, this.r0i)
                      , n = e.distanceFromOrigin(this.r1s, this.r1i)
                      , r = e.distanceFromOrigin(this.g0s, this.g0i)
                      , i = e.distanceFromOrigin(this.g1s, this.g1i)
                      , a = e.distanceFromOrigin(this.b0s, this.b0i)
                      , o = e.distanceFromOrigin(this.b1s, this.b1i);
                    return e.min6(t, n, r, i, a, o)
                }
                calcMaxChromaHsluv(t) {
                    let n = t / 360 * Math.PI * 2
                      , r = e.distanceFromOriginAngle(this.r0s, this.r0i, n)
                      , i = e.distanceFromOriginAngle(this.r1s, this.r1i, n)
                      , a = e.distanceFromOriginAngle(this.g0s, this.g0i, n)
                      , o = e.distanceFromOriginAngle(this.g1s, this.g1i, n)
                      , s = e.distanceFromOriginAngle(this.b0s, this.b0i, n)
                      , c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
                    return e.min6(r, i, a, o, s, c)
                }
                hsluvToLch() {
                    if (this.hsluv_l > 99.9999999)
                        this.lch_l = 100,
                        this.lch_c = 0;
                    else if (this.hsluv_l < 1e-8)
                        this.lch_l = 0,
                        this.lch_c = 0;
                    else {
                        this.lch_l = this.hsluv_l,
                        this.calculateBoundingLines(this.hsluv_l);
                        let e = this.calcMaxChromaHsluv(this.hsluv_h);
                        this.lch_c = e / 100 * this.hsluv_s
                    }
                    this.lch_h = this.hsluv_h
                }
                lchToHsluv() {
                    if (this.lch_l > 99.9999999)
                        this.hsluv_s = 0,
                        this.hsluv_l = 100;
                    else if (this.lch_l < 1e-8)
                        this.hsluv_s = 0,
                        this.hsluv_l = 0;
                    else {
                        this.calculateBoundingLines(this.lch_l);
                        let e = this.calcMaxChromaHsluv(this.lch_h);
                        this.hsluv_s = this.lch_c / e * 100,
                        this.hsluv_l = this.lch_l
                    }
                    this.hsluv_h = this.lch_h
                }
                hpluvToLch() {
                    if (this.hpluv_l > 99.9999999)
                        this.lch_l = 100,
                        this.lch_c = 0;
                    else if (this.hpluv_l < 1e-8)
                        this.lch_l = 0,
                        this.lch_c = 0;
                    else {
                        this.lch_l = this.hpluv_l,
                        this.calculateBoundingLines(this.hpluv_l);
                        let e = this.calcMaxChromaHpluv();
                        this.lch_c = e / 100 * this.hpluv_p
                    }
                    this.lch_h = this.hpluv_h
                }
                lchToHpluv() {
                    if (this.lch_l > 99.9999999)
                        this.hpluv_p = 0,
                        this.hpluv_l = 100;
                    else if (this.lch_l < 1e-8)
                        this.hpluv_p = 0,
                        this.hpluv_l = 0;
                    else {
                        this.calculateBoundingLines(this.lch_l);
                        let e = this.calcMaxChromaHpluv();
                        this.hpluv_p = this.lch_c / e * 100,
                        this.hpluv_l = this.lch_l
                    }
                    this.hpluv_h = this.lch_h
                }
                hsluvToRgb() {
                    this.hsluvToLch(),
                    this.lchToLuv(),
                    this.luvToXyz(),
                    this.xyzToRgb()
                }
                hpluvToRgb() {
                    this.hpluvToLch(),
                    this.lchToLuv(),
                    this.luvToXyz(),
                    this.xyzToRgb()
                }
                hsluvToHex() {
                    this.hsluvToRgb(),
                    this.rgbToHex()
                }
                hpluvToHex() {
                    this.hpluvToRgb(),
                    this.rgbToHex()
                }
                rgbToHsluv() {
                    this.rgbToXyz(),
                    this.xyzToLuv(),
                    this.luvToLch(),
                    this.lchToHpluv(),
                    this.lchToHsluv()
                }
                rgbToHpluv() {
                    this.rgbToXyz(),
                    this.xyzToLuv(),
                    this.luvToLch(),
                    this.lchToHpluv(),
                    this.lchToHpluv()
                }
                hexToHsluv() {
                    this.hexToRgb(),
                    this.rgbToHsluv()
                }
                hexToHpluv() {
                    this.hexToRgb(),
                    this.rgbToHpluv()
                }
            }
            ;
            exports.Hsluv = t,
            t.hexChars = `0123456789abcdef`,
            t.refY = 1,
            t.refU = .19783000664283,
            t.refV = .46831999493879,
            t.kappa = 903.2962962,
            t.epsilon = .0088564516,
            t.m_r0 = 3.240969941904521,
            t.m_r1 = -1.537383177570093,
            t.m_r2 = -.498610760293,
            t.m_g0 = -.96924363628087,
            t.m_g1 = 1.87596750150772,
            t.m_g2 = .041555057407175,
            t.m_b0 = .055630079696993,
            t.m_b1 = -.20397695888897,
            t.m_b2 = 1.056971514242878
        }
    }),
    up = le({
        "../../../node_modules/eventemitter3/index.js"(exports, t) {
            "use strict";
            var n = Object.prototype.hasOwnProperty
              , r = `~`;
            function i() {}
            Object.create && (i.prototype = Object.create(null),
            new i().__proto__ || (r = !1));
            function a(e, t, n) {
                this.fn = e,
                this.context = t,
                this.once = n || !1
            }
            function o(e, t, n, i, o) {
                if (typeof n != `function`)
                    throw TypeError(`The listener must be a function`);
                var s = new a(n,i || e,o)
                  , c = r ? r + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s,
                e._eventsCount++),
                e
            }
            function s(e, t) {
                --e._eventsCount === 0 ? e._events = new i : delete e._events[t]
            }
            function c() {
                this._events = new i,
                this._eventsCount = 0
            }
            c.prototype.eventNames = function() {
                var e = [], t, i;
                if (this._eventsCount === 0)
                    return e;
                for (i in t = this._events)
                    n.call(t, i) && e.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
            }
            ,
            c.prototype.listeners = function(e) {
                var t = r ? r + e : e
                  , n = this._events[t];
                if (!n)
                    return [];
                if (n.fn)
                    return [n.fn];
                for (var i = 0, a = n.length, o = Array(a); i < a; i++)
                    o[i] = n[i].fn;
                return o
            }
            ,
            c.prototype.listenerCount = function(e) {
                var t = r ? r + e : e
                  , n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }
            ,
            c.prototype.emit = function(e, t, n, i, a, o) {
                var s = r ? r + e : e;
                if (!this._events[s])
                    return !1;
                var c = this._events[s], l = arguments.length, u, d;
                if (c.fn) {
                    switch (c.once && this.removeListener(e, c.fn, void 0, !0),
                    l) {
                    case 1:
                        return c.fn.call(c.context),
                        !0;
                    case 2:
                        return c.fn.call(c.context, t),
                        !0;
                    case 3:
                        return c.fn.call(c.context, t, n),
                        !0;
                    case 4:
                        return c.fn.call(c.context, t, n, i),
                        !0;
                    case 5:
                        return c.fn.call(c.context, t, n, i, a),
                        !0;
                    case 6:
                        return c.fn.call(c.context, t, n, i, a, o),
                        !0
                    }
                    for (d = 1,
                    u = Array(l - 1); d < l; d++)
                        u[d - 1] = arguments[d];
                    c.fn.apply(c.context, u)
                } else {
                    var f = c.length, p;
                    for (d = 0; d < f; d++)
                        switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0),
                        l) {
                        case 1:
                            c[d].fn.call(c[d].context);
                            break;
                        case 2:
                            c[d].fn.call(c[d].context, t);
                            break;
                        case 3:
                            c[d].fn.call(c[d].context, t, n);
                            break;
                        case 4:
                            c[d].fn.call(c[d].context, t, n, i);
                            break;
                        default:
                            if (!u)
                                for (p = 1,
                                u = Array(l - 1); p < l; p++)
                                    u[p - 1] = arguments[p];
                            c[d].fn.apply(c[d].context, u)
                        }
                }
                return !0
            }
            ,
            c.prototype.on = function(e, t, n) {
                return o(this, e, t, n, !1)
            }
            ,
            c.prototype.once = function(e, t, n) {
                return o(this, e, t, n, !0)
            }
            ,
            c.prototype.removeListener = function(e, t, n, i) {
                var a = r ? r + e : e;
                if (!this._events[a])
                    return this;
                if (!t)
                    return s(this, a),
                    this;
                var o = this._events[a];
                if (o.fn)
                    o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
                else {
                    for (var c = 0, l = [], u = o.length; c < u; c++)
                        (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
                    l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a)
                }
                return this
            }
            ,
            c.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = r ? r + e : e,
                this._events[t] && s(this, t)) : (this._events = new i,
                this._eventsCount = 0),
                this
            }
            ,
            c.prototype.off = c.prototype.removeListener,
            c.prototype.addListener = c.prototype.on,
            c.prefixed = r,
            c.EventEmitter = c,
            t !== void 0 && (t.exports = c)
        }
    }),
    dp = le({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
            "use strict";
            var t = typeof Symbol == `function` && Symbol.for
              , n = t ? Symbol.for(`react.element`) : 60103
              , r = t ? Symbol.for(`react.portal`) : 60106
              , i = t ? Symbol.for(`react.fragment`) : 60107
              , a = t ? Symbol.for(`react.strict_mode`) : 60108
              , o = t ? Symbol.for(`react.profiler`) : 60114
              , s = t ? Symbol.for(`react.provider`) : 60109
              , c = t ? Symbol.for(`react.context`) : 60110
              , l = t ? Symbol.for(`react.async_mode`) : 60111
              , u = t ? Symbol.for(`react.concurrent_mode`) : 60111
              , d = t ? Symbol.for(`react.forward_ref`) : 60112
              , f = t ? Symbol.for(`react.suspense`) : 60113
              , p = t ? Symbol.for(`react.suspense_list`) : 60120
              , m = t ? Symbol.for(`react.memo`) : 60115
              , h = t ? Symbol.for(`react.lazy`) : 60116
              , g = t ? Symbol.for(`react.block`) : 60121
              , _ = t ? Symbol.for(`react.fundamental`) : 60117
              , v = t ? Symbol.for(`react.responder`) : 60118
              , y = t ? Symbol.for(`react.scope`) : 60119;
            function b(e) {
                if (typeof e == `object` && e) {
                    var t = e.$$typeof;
                    switch (t) {
                    case n:
                        switch (e = e.type,
                        e) {
                        case l:
                        case u:
                        case i:
                        case o:
                        case a:
                        case f:
                            return e;
                        default:
                            switch (e &&= e.$$typeof,
                            e) {
                            case c:
                            case d:
                            case h:
                            case m:
                            case s:
                                return e;
                            default:
                                return t
                            }
                        }
                    case r:
                        return t
                    }
                }
            }
            function x(e) {
                return b(e) === u
            }
            exports.AsyncMode = l,
            exports.ConcurrentMode = u,
            exports.ContextConsumer = c,
            exports.ContextProvider = s,
            exports.Element = n,
            exports.ForwardRef = d,
            exports.Fragment = i,
            exports.Lazy = h,
            exports.Memo = m,
            exports.Portal = r,
            exports.Profiler = o,
            exports.StrictMode = a,
            exports.Suspense = f,
            exports.isAsyncMode = function(e) {
                return x(e) || b(e) === l
            }
            ,
            exports.isConcurrentMode = x,
            exports.isContextConsumer = function(e) {
                return b(e) === c
            }
            ,
            exports.isContextProvider = function(e) {
                return b(e) === s
            }
            ,
            exports.isElement = function(e) {
                return typeof e == `object` && !!e && e.$$typeof === n
            }
            ,
            exports.isForwardRef = function(e) {
                return b(e) === d
            }
            ,
            exports.isFragment = function(e) {
                return b(e) === i
            }
            ,
            exports.isLazy = function(e) {
                return b(e) === h
            }
            ,
            exports.isMemo = function(e) {
                return b(e) === m
            }
            ,
            exports.isPortal = function(e) {
                return b(e) === r
            }
            ,
            exports.isProfiler = function(e) {
                return b(e) === o
            }
            ,
            exports.isStrictMode = function(e) {
                return b(e) === a
            }
            ,
            exports.isSuspense = function(e) {
                return b(e) === f
            }
            ,
            exports.isValidElementType = function(e) {
                return typeof e == `string` || typeof e == `function` || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == `object` && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g)
            }
            ,
            exports.typeOf = b
        }
    }),
    fp = le({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, t) {
            "use strict";
            t.exports = dp()
        }
    }),
    pp = le({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, t) {
            "use strict";
            var n = fp()
              , r = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
              , i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
              , a = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }
              , o = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
              , s = {};
            s[n.ForwardRef] = a,
            s[n.Memo] = o;
            function c(e) {
                return n.isMemo(e) ? o : s[e.$$typeof] || r
            }
            var l = Object.defineProperty
              , u = Object.getOwnPropertyNames
              , d = Object.getOwnPropertySymbols
              , f = Object.getOwnPropertyDescriptor
              , p = Object.getPrototypeOf
              , m = Object.prototype;
            function h(e, t, n) {
                if (typeof t != `string`) {
                    if (m) {
                        var r = p(t);
                        r && r !== m && h(e, r, n)
                    }
                    var a = u(t);
                    d && (a = a.concat(d(t)));
                    for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                        var _ = a[g];
                        if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                            var v = f(t, _);
                            try {
                                l(e, _, v)
                            } catch {}
                        }
                    }
                }
                return e
            }
            t.exports = h
        }
    }),
    mp = le({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(exports, t) {
            "use strict";
            (function() {
                function e(e, t) {
                    document.addEventListener ? e.addEventListener(`scroll`, t, !1) : e.attachEvent(`scroll`, t)
                }
                function n(e) {
                    document.body ? e() : document.addEventListener ? document.addEventListener(`DOMContentLoaded`, function t() {
                        document.removeEventListener(`DOMContentLoaded`, t),
                        e()
                    }) : document.attachEvent(`onreadystatechange`, function t() {
                        (document.readyState == `interactive` || document.readyState == `complete`) && (document.detachEvent(`onreadystatechange`, t),
                        e())
                    })
                }
                function r(e) {
                    this.g = document.createElement(`div`),
                    this.g.setAttribute(`aria-hidden`, `true`),
                    this.g.appendChild(document.createTextNode(e)),
                    this.h = document.createElement(`span`),
                    this.i = document.createElement(`span`),
                    this.m = document.createElement(`span`),
                    this.j = document.createElement(`span`),
                    this.l = -1,
                    this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`,
                    this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`,
                    this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`,
                    this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`,
                    this.h.appendChild(this.m),
                    this.i.appendChild(this.j),
                    this.g.appendChild(this.h),
                    this.g.appendChild(this.i)
                }
                function i(e, t) {
                    e.g.style.cssText = `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` + t + `;`
                }
                function a(e) {
                    var t = e.g.offsetWidth
                      , n = t + 100;
                    return e.j.style.width = n + `px`,
                    e.i.scrollLeft = n,
                    e.h.scrollLeft = e.h.scrollWidth + 100,
                    e.l === t ? !1 : (e.l = t,
                    !0)
                }
                function o(t, n) {
                    function r() {
                        var e = i;
                        a(e) && e.g.parentNode !== null && n(e.l)
                    }
                    var i = t;
                    e(t.h, r),
                    e(t.i, r),
                    a(t)
                }
                function s(e, t, n) {
                    t ||= {},
                    n ||= k,
                    this.family = e,
                    this.style = t.style || `normal`,
                    this.weight = t.weight || `normal`,
                    this.stretch = t.stretch || `normal`,
                    this.context = n
                }
                var c = null
                  , l = null
                  , u = null
                  , d = null;
                function f(e) {
                    return l === null && (p(e) && /Apple/.test(k.navigator.vendor) ? (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(k.navigator.userAgent),
                    l = !!e && 603 > parseInt(e[1], 10)) : l = !1),
                    l
                }
                function p(e) {
                    return d === null && (d = !!e.document.fonts),
                    d
                }
                function m(e, t) {
                    var n = e.style
                      , r = e.weight;
                    if (u === null) {
                        var i = document.createElement(`div`);
                        try {
                            i.style.font = `condensed 100px sans-serif`
                        } catch {}
                        u = i.style.font !== ``
                    }
                    return [n, r, u ? e.stretch : ``, `100px`, t].join(` `)
                }
                s.prototype.load = function(e, t) {
                    var a = this
                      , s = e || `BESbswy`
                      , l = 0
                      , u = t || 3e3
                      , d = new Date().getTime();
                    return new Promise(function(e, t) {
                        if (p(a.context) && !f(a.context)) {
                            var h = new Promise(function(e, t) {
                                function n() {
                                    new Date().getTime() - d >= u ? t(Error(`` + u + `ms timeout exceeded`)) : a.context.document.fonts.load(m(a, `"` + a.family + `"`), s).then(function(t) {
                                        1 <= t.length ? e() : setTimeout(n, 25)
                                    }, t)
                                }
                                n()
                            }
                            )
                              , g = new Promise(function(e, t) {
                                l = setTimeout(function() {
                                    t(Error(`` + u + `ms timeout exceeded`))
                                }, u)
                            }
                            );
                            Promise.race([g, h]).then(function() {
                                clearTimeout(l),
                                e(a)
                            }, t)
                        } else
                            n(function() {
                                function n() {
                                    var t;
                                    (t = _ != -1 && v != -1 || _ != -1 && y != -1 || v != -1 && y != -1) && ((t = _ != v && _ != y && v != y) || (c === null && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(k.navigator.userAgent),
                                    c = !!t && (536 > parseInt(t[1], 10) || parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))),
                                    t = c && (_ == b && v == b && y == b || _ == x && v == x && y == x || _ == S && v == S && y == S)),
                                    t = !t),
                                    t && (C.parentNode !== null && C.parentNode.removeChild(C),
                                    clearTimeout(l),
                                    e(a))
                                }
                                function f() {
                                    if (new Date().getTime() - d >= u)
                                        C.parentNode !== null && C.parentNode.removeChild(C),
                                        t(Error(`` + u + `ms timeout exceeded`));
                                    else {
                                        var e = a.context.document.hidden;
                                        (e === !0 || e === void 0) && (_ = p.g.offsetWidth,
                                        v = h.g.offsetWidth,
                                        y = g.g.offsetWidth,
                                        n()),
                                        l = setTimeout(f, 50)
                                    }
                                }
                                var p = new r(s)
                                  , h = new r(s)
                                  , g = new r(s)
                                  , _ = -1
                                  , v = -1
                                  , y = -1
                                  , b = -1
                                  , x = -1
                                  , S = -1
                                  , C = document.createElement(`div`);
                                C.dir = `ltr`,
                                i(p, m(a, `sans-serif`)),
                                i(h, m(a, `serif`)),
                                i(g, m(a, `monospace`)),
                                C.appendChild(p.g),
                                C.appendChild(h.g),
                                C.appendChild(g.g),
                                a.context.document.body.appendChild(C),
                                b = p.g.offsetWidth,
                                x = h.g.offsetWidth,
                                S = g.g.offsetWidth,
                                f(),
                                o(p, function(e) {
                                    _ = e,
                                    n()
                                }),
                                i(p, m(a, `"` + a.family + `",sans-serif`)),
                                o(h, function(e) {
                                    v = e,
                                    n()
                                }),
                                i(h, m(a, `"` + a.family + `",serif`)),
                                o(g, function(e) {
                                    y = e,
                                    n()
                                }),
                                i(g, m(a, `"` + a.family + `",monospace`))
                            })
                    }
                    )
                }
                ,
                typeof t == `object` ? t.exports = s : (k.FontFaceObserver = s,
                k.FontFaceObserver.prototype.load = s.prototype.load)
            }
            )()
        }
    }),
    hp = `preload`,
    gp = Object.keys,
    _p = `equals`,
    vp = ( () => d.createContext({}))(),
    yp = ( () => d.createContext({}))(),
    bp = [],
    xp = () => {}
    ,
    Sp = k !== void 0,
    Cp = ( () => Sp && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(b.userAgent))(),
    wp = Sp && typeof k.requestIdleCallback == `function`,
    Tp = ( () => wp ? k.requestIdleCallback : setTimeout)(),
    Ep = {
        addEventListener: () => {}
        ,
        removeEventListener: () => {}
        ,
        dispatchEvent: () => !1,
        ResizeObserver: void 0,
        onpointerdown: !1,
        onpointermove: !1,
        onpointerup: !1,
        ontouchstart: !1,
        ontouchmove: !1,
        ontouchend: !1,
        onmousedown: !1,
        onmousemove: !1,
        onmouseup: !1,
        devicePixelRatio: 1,
        scrollX: 0,
        scrollY: 0,
        location: {
            hash: ``,
            hostname: ``,
            href: ``,
            origin: ``,
            pathname: ``,
            search: ``
        },
        document: {
            baseURI: ``,
            cookie: ``,
            referrer: null
        },
        setTimeout: () => 0,
        clearTimeout: () => {}
        ,
        setInterval: () => 0,
        clearInterval: () => {}
        ,
        requestAnimationFrame: () => 0,
        cancelAnimationFrame: () => {}
        ,
        requestIdleCallback: () => 0,
        getSelection: () => null,
        matchMedia: e => ({
            matches: !1,
            media: e,
            onchange: () => {}
            ,
            addEventListener: () => {}
            ,
            removeEventListener: () => {}
            ,
            addListener: () => {}
            ,
            removeListener: () => {}
            ,
            dispatchEvent: () => !1
        }),
        innerHeight: 0,
        innerWidth: 0,
        SVGSVGElement: {},
        scheduler: void 0,
        open: function(e, t, n) {},
        __framer_events: []
    },
    K = Sp ? k : Ep,
    Dp = ( () => K.scheduler && `yield`in K.scheduler)(),
    Op = ( () => K.scheduler && `postTask`in K.scheduler)(),
    kp = new Set,
    Ap = !Cp,
    Tp(Ft),
    Np = 46,
    Pp = 47,
    Fp = (e, t) => e.charCodeAt(t),
    Ip = (e, t) => e.lastIndexOf(t),
    Lp = (e, t, n) => e.slice(t, n),
    Rp = !1,
    zp = `/`,
    Bp = e => e === Pp,
    Vp = new Set([`/404.html`, `/404`, `/404/`]),
    Hp = `:([a-z]\\w*)`,
    Up = new RegExp(Hp,`gi`),
    Wp = {
        global: void 0,
        routes: {}
    },
    Gp = d.createContext(Wp),
    Kp = 10,
    qp = 1e4,
    Jp = e => `--view-transition-${e}`,
    Yp = {
        makeKeyframe: (e, t, n) => {
            let r = 0;
            return (n === `exit` && e.angularDirection === `clockwise` && t === `start` || n === `exit` && e.angularDirection === `counter-clockwise` && t === `end` || n === `enter` && e.angularDirection === `counter-clockwise` && t === `start` || n === `enter` && e.angularDirection === `clockwise` && t === `end`) && (r = e.sweepAngle / 360 * 100),
            `${Jp(`conic-offset`)}: ${r}%;`
        }
        ,
        makeStyles: (e, t) => {
            let n = `var(${Jp(`conic-offset`)})`
              , r = t === `exit` && e.angularDirection === `clockwise` || t === `enter` && e.angularDirection === `counter-clockwise`
              , i = r ? `transparent` : `black`
              , a = r ? `black` : `transparent`
              , o = `conic-gradient(from `;
            return o += `${e.angle}deg at ${e.x} ${e.y}, `,
            o += `${i} 0%, ${i} ${n}, `,
            o += `${a} ${n}, ${a} 100%)`,
            `mask-image: ${o}; -webkit-mask-image: ${o};`
        }
        ,
        makePropertyRules: () => `
        @property ${Jp(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
    },
    Xp = {
        makeKeyframe: (e, t) => {
            let {x: n, y: r} = Qt(e);
            if (t === `start`)
                return `clip-path: circle(0 at ${n}px ${r}px);`;
            {
                let e = Math.hypot(Math.max(n, k.innerWidth - n), Math.max(r, k.innerHeight - r));
                return `clip-path: circle(${e}px at ${n}px ${r}px);`
            }
        }
    },
    Zp = {
        makeKeyframe: (e, t) => {
            let {x: n, y: r} = Qt(e)
              , i = k.innerHeight - r
              , a = k.innerWidth - n;
            return t === `start` ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);` : `clip-path: inset(0 round 0);`
        }
    },
    Qp = {
        makeKeyframe: (e, t, n) => {
            let[,r] = Zt(e.width)
              , i = `0${r}`;
            return (t === `start` && n === `exit` || t === `end` && n === `enter`) && (i = e.width),
            `${Jp(`blinds-width`)}: ${i};`
        }
        ,
        makeStyles: (e, t) => {
            let n = `var(${Jp(`blinds-width`)})`
              , r = t === `exit` ? `transparent` : `black`
              , i = t === `exit` ? `black` : `transparent`
              , a = `repeating-linear-gradient(`;
            return a += e.angle + 90 + `deg, `,
            a += `${r} 0px, ${r} ${n}, `,
            a += `${i} ${n}, ${i} ${e.width})`,
            `mask-image: ${a}; -webkit-mask-image: ${a};`
        }
        ,
        makePropertyRules: () => `
            @property ${Jp(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
    },
    $p = {
        makeKeyframe: (e, t, n) => {
            let r = t === `start` && n === `exit` || t === `end` && n === `enter` ? 1 : 0;
            return `${Jp(`wipe-offset`)}: ${r};`
        }
        ,
        makeStyles: (e, t) => {
            let n = `var(${Jp(`wipe-offset`)})`
              , r = t === `exit` ? `transparent` : `black`
              , i = t === `exit` ? `black` : `transparent`
              , a = `linear-gradient(`;
            return a += e.angle + 90 + `deg, `,
            a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `,
            a += `${i} calc(calc(100% + ${e.width}) * ${n}))`,
            `mask-image: ${a}; -webkit-mask-image: ${a};`
        }
        ,
        makePropertyRules: () => `
            @property ${Jp(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
    },
    em = {
        circle: Xp,
        conic: Yp,
        inset: Zp,
        blinds: Qp,
        wipe: $p
    },
    tm = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0
    },
    nm = `view-transition-styles`,
    rm = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
            type: `tween`,
            delay: 0,
            duration: .2,
            ease: [.27, 0, .51, 1],
            stiffness: 400,
            damping: 30,
            mass: 1
        }
    },
    im = () => {}
    ,
    om = () => {
        am || (am = document.createElement(`div`),
        am.setAttribute(`aria-live`, `assertive`),
        am.setAttribute(`aria-atomic`, `true`),
        am.style.position = `absolute`,
        am.style.transform = `scale(0)`,
        document.body.append(am)),
        setTimeout( () => {
            am.textContent = document.title
        }
        , 60)
    }
    ,
    sm = !0,
    cm = ( () => {
        if (b === void 0)
            return !1;
        let e = b.userAgent
          , t = e.indexOf(`Chrome/`)
          , n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128
    }
    )(),
    lm = ( () => {
        var e;
        return Sp && typeof (e = k.navigation)?.back == `function`
    }
    )(),
    um = async () => {}
    ,
    dm = {
        activeLocale: null,
        locales: [],
        setLocale: um
    },
    fm = d.createContext(dm),
    pm = `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(`.`),
    mm = e => {
        var t, n;
        (n = (t = e.target)?.closest)?.call(t, `#main`) && (e.stopPropagation(),
        performance.mark(`framer-react-event-handling-prevented`))
    }
    ,
    hm = !1,
    Mm = [An],
    jm = [An],
    Am = [An],
    km = [An],
    Om = [An],
    Dm = [An],
    Em = [An],
    Tm = [An],
    wm = [An],
    Cm = [An],
    Sm = [An],
    xm = [An],
    bm = [An],
    ym = [An],
    vm = [An],
    _m = [An],
    gm = [An],
    Pm = class {
        constructor() {
            he(Nm, 5, this),
            P(this, `render`, {
                markStart: () => this.markRenderStart(),
                markEnd: () => this.markRenderEnd()
            }),
            P(this, `mutationEffects`, {
                measure: () => this.measureMutationEffects()
            }),
            P(this, `useInsertionEffects`, {
                markStart: () => this.markUseInsertionEffectsStart(),
                markRouterStart: () => this.markUseInsertionEffectRouterStart(),
                markEnd: () => this.markUseInsertionEffectsEnd()
            }),
            P(this, `useLayoutEffects`, {
                markStart: () => this.markUseLayoutEffectsStart(),
                markRouterStart: () => this.markRouterUseLayoutEffectStart(),
                markEnd: () => this.markUseLayoutEffectsEnd()
            }),
            P(this, `useEffects`, {
                markStart: () => this.markUseEffectsStart(),
                markRouterStart: () => this.markUseEffectsRouterStart(),
                markEnd: () => this.markUseEffectsEnd(),
                markAreSynchronous: () => this.markUseEffectsAreSynchronous()
            }),
            P(this, `browserRendering`, {
                hasStarted: !1,
                requestAnimationFrame: {
                    markStart: () => this.markRafStart(),
                    markEnd: () => this.markRafEnd()
                },
                layoutStylePaint: {
                    markEnd: () => this.markLayoutStylePaintEnd()
                }
            }),
            P(this, `unattributedHydrationOverhead`, {
                measure: () => this.measureUnattributedHydrationOverhead()
            })
        }
        markRenderStart() {
            performance.mark(`framer-hydration-start`)
        }
        markRenderEnd() {
            performance.mark(`framer-hydration-render-end`),
            jn(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`)
        }
        markUseInsertionEffectsStart() {
            performance.mark(`framer-hydration-insertion-effects-start`)
        }
        markUseInsertionEffectRouterStart() {
            performance.mark(`framer-hydration-router-insertion-effect`)
        }
        markUseInsertionEffectsEnd() {
            performance.mark(`framer-hydration-insertion-effects-end`),
            jn(`framer-hydration-insertion-effects`, `framer-hydration-insertion-effects-start`, `framer-hydration-insertion-effects-end`)
        }
        markUseLayoutEffectsStart() {
            performance.mark(`framer-hydration-layout-effects-start`)
        }
        markRouterUseLayoutEffectStart() {
            performance.mark(`framer-hydration-router-layout-effect`)
        }
        markUseLayoutEffectsEnd() {
            performance.mark(`framer-hydration-layout-effects-end`),
            jn(`framer-hydration-layout-effects`, `framer-hydration-layout-effects-start`, `framer-hydration-layout-effects-end`)
        }
        markUseEffectsStart() {
            performance.mark(`framer-hydration-effects-start`)
        }
        markUseEffectsRouterStart() {
            performance.mark(`framer-hydration-router-effect`)
        }
        markUseEffectsAreSynchronous() {
            performance.mark(`framer-hydration-effects-sync`)
        }
        markUseEffectsEnd() {
            var e, t;
            performance.mark(`framer-hydration-effects-end`),
            jn(`framer-hydration-effects`, (e = performance.getEntriesByName(`framer-hydration-first-paint`)[0])?.name ?? (t = performance.getEntriesByName(`framer-hydration-effects-start`)[0])?.name, `framer-hydration-effects-end`)
        }
        markRafStart() {
            this.browserRendering.hasStarted = !0,
            performance.mark(`framer-hydration-browser-render-start`)
        }
        markRafEnd() {
            performance.mark(`framer-hydration-browser-raf-end`),
            jn(`framer-hydration-raf`, `framer-hydration-browser-render-start`, `framer-hydration-browser-raf-end`)
        }
        markLayoutStylePaintEnd() {
            performance.mark(`framer-hydration-first-paint`),
            jn(`framer-hydration-time-to-first-paint`, `framer-hydration-start`, `framer-hydration-first-paint`),
            jn(`framer-hydration-browser-render`, `framer-hydration-browser-raf-end`, `framer-hydration-first-paint`)
        }
        measureMutationEffects() {
            jn(`framer-hydration-commit`, `framer-hydration-layout-effects-end`, `framer-hydration-effects-start`)
        }
        measureUnattributedHydrationOverhead() {
            var e, t;
            jn(`framer-hydration-uho`, (e = performance.getEntriesByName(`framer-hydration-effects-end`)[0])?.name ?? (t = performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0])?.name, `framer-hydration-browser-render-start`)
        }
    }
    ,
    Nm = de(null),
    M(Nm, 1, `markRenderStart`, Mm, Pm),
    M(Nm, 1, `markRenderEnd`, jm, Pm),
    M(Nm, 1, `markUseInsertionEffectsStart`, Am, Pm),
    M(Nm, 1, `markUseInsertionEffectRouterStart`, km, Pm),
    M(Nm, 1, `markUseInsertionEffectsEnd`, Om, Pm),
    M(Nm, 1, `markUseLayoutEffectsStart`, Dm, Pm),
    M(Nm, 1, `markRouterUseLayoutEffectStart`, Em, Pm),
    M(Nm, 1, `markUseLayoutEffectsEnd`, Tm, Pm),
    M(Nm, 1, `markUseEffectsStart`, wm, Pm),
    M(Nm, 1, `markUseEffectsRouterStart`, Cm, Pm),
    M(Nm, 1, `markUseEffectsAreSynchronous`, Sm, Pm),
    M(Nm, 1, `markUseEffectsEnd`, xm, Pm),
    M(Nm, 1, `markRafStart`, bm, Pm),
    M(Nm, 1, `markRafEnd`, ym, Pm),
    M(Nm, 1, `markLayoutStylePaintEnd`, vm, Pm),
    M(Nm, 1, `measureMutationEffects`, _m, Pm),
    M(Nm, 1, `measureUnattributedHydrationOverhead`, gm, Pm),
    ue(Nm, Pm),
    Im = !1,
    Lm = {
        Start: In,
        End: Ln
    },
    Rm = class extends Error {
    }
    ,
    zm = class extends n {
        constructor(e) {
            super(e),
            this.state = {
                error: void 0,
                forceUpdateKey: e.forceUpdateKey
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            if (e.forceUpdateKey !== t.forceUpdateKey) {
                let n = {
                    forceUpdateKey: e.forceUpdateKey
                };
                return t.error && (n.error = void 0),
                n
            }
            return null
        }
        render() {
            if (this.state.error === void 0)
                return this.props.children;
            if (!(this.state.error instanceof Rm))
                throw this.state.error;
            let {notFoundPage: e, defaultPageStyle: t} = this.props;
            if (!e)
                throw this.state.error;
            return Rn(e, t)
        }
    }
    ,
    Um = `main`,
    Wm = `framerGeneratedPage`,
    Gm = `framer-search-index`,
    Km = `meta[name="${Gm}"]`,
    qm = `<!-- End of headStart -->`,
    Jm = `<!-- End of headEnd -->`,
    Ym = `<!-- End of bodyStart -->`,
    Xm = `<!-- End of bodyEnd -->`,
    Zm = new Set,
    Qm = class {
        constructor() {
            P(this, `observers`, new Set),
            P(this, `transactions`, {})
        }
        add(e) {
            this.observers.add(e);
            let t = !1;
            return () => {
                t || (t = !0,
                this.remove(e))
            }
        }
        remove(e) {
            this.observers.delete(e)
        }
        notify(e, t) {
            if (t) {
                let n = this.transactions[t] || e;
                n.value = e.value,
                this.transactions[t] = n
            } else
                this.callObservers(e)
        }
        finishTransaction(e) {
            let t = this.transactions[e];
            return delete this.transactions[e],
            this.callObservers(t, e)
        }
        callObservers(e, t) {
            let n = [];
            return new Set(this.observers).forEach(r => {
                typeof r == `function` ? r(e, t) : (r.update(e, t),
                n.push(r.finish))
            }
            ),
            n
        }
    }
    ,
    $m = ( () => {
        function e(e) {
            return ir(`Animatable()`, `2.0.0`, `the new animation API (https://www.framer.com/api/animation/)`),
            ar(e) ? e : new nh(e)
        }
        return e.transaction = e => {
            let t = Math.random()
              , n = new Set
              , r = (e, r) => {
                e.set(r, t),
                n.add(e)
            }
            ;
            e(r, t);
            let i = [];
            n.forEach(e => {
                i.push(...e.finishTransaction(t))
            }
            ),
            i.forEach(e => {
                e(t)
            }
            )
        }
        ,
        e.getNumber = (t, n=0) => e.get(t, n),
        e.get = (e, t) => e == null ? t : ar(e) ? e.get() : e,
        e.objectToValues = e => {
            if (!e)
                return e;
            let t = {};
            for (let n in e) {
                let r = e[n];
                ar(r) ? t[n] = r.get() : t[n] = r
            }
            return t
        }
        ,
        e
    }
    )(),
    eh = `onUpdate`,
    th = `finishTransaction`,
    nh = class {
        constructor(e) {
            this.value = e,
            P(this, `observers`, new Qm)
        }
        static interpolationFor(e, t) {
            if (ar(e))
                return or(e, t)
        }
        get() {
            return this.value
        }
        set(e, t) {
            let n = this.value;
            ar(e) && (e = e.get()),
            this.value = e;
            let r = {
                value: e,
                oldValue: n
            };
            this.observers.notify(r, t)
        }
        finishTransaction(e) {
            return this.observers.finishTransaction(e)
        }
        onUpdate(e) {
            return this.observers.add(e)
        }
    }
    ,
    (e => {
        e.isQuadrilateralPoints = e => e?.length === 4,
        e.add = (...e) => e.reduce( (e, t) => ({
            x: e.x + t.x,
            y: e.y + t.y
        }), {
            x: 0,
            y: 0
        }),
        e.subtract = (e, t) => ({
            x: e.x - t.x,
            y: e.y - t.y
        }),
        e.multiply = (e, t) => ({
            x: e.x * t,
            y: e.y * t
        }),
        e.divide = (e, t) => ({
            x: e.x / t,
            y: e.y / t
        }),
        e.absolute = e => ({
            x: Math.abs(e.x),
            y: Math.abs(e.y)
        }),
        e.reverse = e => ({
            x: e.x * -1,
            y: e.y * -1
        }),
        e.pixelAligned = (e, t={
            x: 0,
            y: 0
        }) => ({
            x: cr(e.x, t.x),
            y: cr(e.y, t.y)
        }),
        e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x)
              , r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r)
        }
        ,
        e.angle = (e, t) => Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI - 90,
        e.angleFromX = (e, t) => Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI,
        e.isEqual = (e, t) => e.x === t.x && e.y === t.y,
        e.rotationNormalizer = () => {
            let e;
            return t => {
                typeof e != `number` && (e = t);
                let n = e - t
                  , r = Math.abs(n) + 180
                  , i = Math.floor(r / 360);
                return n < 180 && (t -= i * 360),
                n > 180 && (t += i * 360),
                e = t,
                t
            }
        }
        ;
        function t(e, t) {
            return {
                x: (e.x + t.x) / 2,
                y: (e.y + t.y) / 2
            }
        }
        e.center = t;
        function n(e) {
            let t = 0
              , n = 0;
            e.forEach(e => {
                t += e.x,
                n += e.y
            }
            );
            let r = t / e.length
              , i = n / e.length;
            return {
                x: r,
                y: i
            }
        }
        e.centroid = n;
        function r(t) {
            let n = e.centroid(t)
              , r = new Map;
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x))
            }
            return t.sort( (e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0))
        }
        e.sortClockwise = r
    }
    )(ur ||= {}),
    rh = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`
    },
    ih = ( () => lp().Hsluv)(),
    ah = new ih,
    oh = ( () => {
        let e = `[-\\+]?\\d+%?`
          , t = `[-\\+]?\\d*\\.\\d+%?`
          , n = `(?:` + t + `)|(?:[-\\+]?\\d+%?)`
          , r = `[\\s|\\(]+(` + n + `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
          , i = `[\\s|\\(]+(` + n + `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
            rgb: RegExp(`rgb` + r),
            rgba: RegExp(`rgba` + i),
            hsl: RegExp(`hsl` + r),
            hsla: RegExp(`hsla` + i),
            hsv: RegExp(`hsv` + r),
            hsva: RegExp(`hsva` + i),
            hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
            hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
            hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
            hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu
        }
    }
    )(),
    sh = /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u,
    ch = e => {
        let {r: t, g: n, b: r, a: i} = Pr(e);
        return {
            x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
            y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
            z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r,
            a: i
        }
    }
    ,
    lh = ({x: e=0, y: t=0, z: n=0, a: r=1}) => Ir({
        r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
        g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
        b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n,
        a: r
    }),
    uh = e => {
        let {r: t, g: n, b: r, a: i} = Pr(e);
        return {
            x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
            y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
            z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r,
            a: i
        }
    }
    ,
    dh = ({x: e=0, y: t=0, z: n=0, a: r=1}) => Ir({
        r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
        g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
        b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n,
        a: r
    }),
    fh = class e {
        constructor(e) {
            P(this, `format`, `p3`),
            P(this, `r`),
            P(this, `g`),
            P(this, `b`),
            P(this, `a`),
            this.r = e.r ?? 0,
            this.g = e.g ?? 0,
            this.b = e.b ?? 0,
            this.a = e.a ?? 1
        }
        hsv() {
            return Lr(this)
        }
        rgb() {
            return Vr(this)
        }
        hsl() {
            return br(this.r, this.g, this.b)
        }
        toString(e=`p3`, t) {
            switch (e) {
            case `p3`:
                {
                    let e = t?.r ?? this.r
                      , n = t?.g ?? this.g
                      , r = t?.b ?? this.b
                      , i = t?.a ?? this.a;
                    return i === 1 ? `color(display-p3 ${e} ${n} ${r})` : `color(display-p3 ${e} ${n} ${r} / ${i})`
                }
            case `srgb`:
                {
                    let e = this.rgb()
                      , n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100
                      , r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100
                      , i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100
                      , a = t?.r ?? n * 255
                      , o = t?.g ?? r * 255
                      , s = t?.b ?? i * 255
                      , c = t?.a ?? e.a ?? 1;
                    return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`
                }
            }
        }
        static isP3String(e) {
            return e.startsWith(`color(display-p3`)
        }
        static fromHSV(t, n=`p3`) {
            switch (n) {
            case `p3`:
                return new e(zr(t));
            case `srgb`:
                return new e(Br(zr(t)))
            }
        }
        static fromRGB(t) {
            return new e(Br({
                r: Math.round(t.r / 255 * 1e4) / 1e4,
                g: Math.round(t.g / 255 * 1e4) / 1e4,
                b: Math.round(t.b / 255 * 1e4) / 1e4,
                a: t.a ?? 1
            }))
        }
        static fromRGBString(t) {
            let n = q(t);
            if (n)
                return e.fromRGB(n)
        }
        static fromString(t) {
            if (!e.isP3String(t))
                return;
            let n = Mr(t);
            if (n)
                return new e({
                    r: n.r,
                    g: n.g,
                    b: n.b,
                    a: n.a
                })
        }
        static srgbFromValue(t) {
            if (!L(t) || !q.isP3String(t))
                return t;
            let n = e.fromString(t);
            return n ? n.toString(`srgb`) : t
        }
    }
    ,
    ph = new Map,
    q = ( () => {
        function e(n, r, i, a) {
            if (typeof n == `string`) {
                let r = ph.get(n);
                return r || (r = t(n),
                r === void 0 ? {
                    ...e(`black`),
                    isValid: !1
                } : (ph.set(n, r),
                r))
            }
            let o = t(n, r, i, a);
            return o === void 0 ? {
                ...e(`black`),
                isValid: !1
            } : o
        }
        function t(t, n, r, i) {
            if (t === ``)
                return;
            let a = Hr(t, n, r, i);
            if (a) {
                let n = {
                    r: a.r,
                    g: a.g,
                    b: a.b,
                    a: a.a,
                    h: a.h,
                    s: a.s,
                    l: a.l,
                    initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
                    roundA: Math.round(100 * a.a) / 100,
                    format: a.format,
                    mix: e.mix,
                    toValue: () => e.toRgbString(n)
                };
                return n
            } else
                return
        }
        let n = {
            isRGB(e) {
                return e === `rgb` || e === `rgba`
            },
            isHSL(e) {
                return e === `hsl` || e === `hsla`
            }
        };
        e.inspect = (e, t) => e.format === `hsl` ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>` : e.format === `hex` || e.format === `name` ? `<${e.constructor.name} "${t}">` : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`,
        e.isColor = t => typeof t == `string` ? e.isColorString(t) : e.isColorObject(t),
        e.isColorString = e => typeof e == `string` ? kr(e) !== !1 : !1,
        e.isColorObject = e => z(e) && typeof e.r == `number` && typeof e.g == `number` && typeof e.b == `number` && typeof e.h == `number` && typeof e.s == `number` && typeof e.l == `number` && typeof e.a == `number` && typeof e.roundA == `number` && typeof e.format == `string`,
        e.toString = t => e.toRgbString(t),
        e.toHex = (e, t=!1) => yr(e.r, e.g, e.b, t),
        e.toHexString = (t, n=!1) => `#${e.toHex(t, n)}`,
        e.isP3String = e => typeof e == `string` ? fh.isP3String(e) : !1,
        e.toRgbString = e => e.a === 1 ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)` : `rgba(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `, ` + e.roundA + `)`,
        e.toHusl = e => ({
            ...hr(e.r, e.g, e.b),
            a: e.roundA
        }),
        e.toHslString = t => {
            let n = e.toHsl(t)
              , r = Math.round(n.h)
              , i = Math.round(n.s * 100)
              , a = Math.round(n.l * 100);
            return t.a === 1 ? `hsl(` + r + `, ` + i + `%, ` + a + `%)` : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`
        }
        ,
        e.toHsv = e => {
            let t = Cr(e.r, e.g, e.b);
            return {
                h: t.h * 360,
                s: t.s,
                v: t.v,
                a: e.a
            }
        }
        ,
        e.toHsvString = e => {
            let t = Cr(e.r, e.g, e.b)
              , n = Math.round(t.h * 360)
              , r = Math.round(t.s * 100)
              , i = Math.round(t.v * 100);
            return e.a === 1 ? `hsv(` + n + `, ` + r + `%, ` + i + `%)` : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`
        }
        ,
        e.toName = e => {
            if (e.a === 0)
                return `transparent`;
            if (e.a < 1)
                return !1;
            let t = yr(e.r, e.g, e.b, !0);
            for (let e of Object.keys(rh)) {
                let n = rh[e];
                if (n === t)
                    return e
            }
            return !1
        }
        ,
        e.toHsl = e => ({
            h: Math.round(e.h),
            s: e.s,
            l: e.l,
            a: e.a
        }),
        e.toRgb = e => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a
        }),
        e.brighten = (t, n=10) => {
            let r = e.toRgb(t);
            return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))),
            r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))),
            r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))),
            e(r)
        }
        ,
        e.lighten = (t, n=10) => {
            let r = e.toHsl(t);
            return r.l += n / 100,
            r.l = Math.min(1, Math.max(0, r.l)),
            e(r)
        }
        ,
        e.darken = (t, n=10) => {
            let r = e.toHsl(t);
            return r.l -= n / 100,
            r.l = Math.min(1, Math.max(0, r.l)),
            e(r)
        }
        ,
        e.saturate = (t, n=10) => {
            let r = e.toHsl(t);
            return r.s += n / 100,
            r.s = Math.min(1, Math.max(0, r.s)),
            e(r)
        }
        ,
        e.desaturate = (t, n=10) => {
            let r = e.toHsl(t);
            return r.s -= n / 100,
            r.s = Math.min(1, Math.max(0, r.s)),
            e(r)
        }
        ,
        e.grayscale = t => e.desaturate(t, 100),
        e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return r.h += n,
            r.h = r.h > 360 ? r.h - 360 : r.h,
            e(r)
        }
        ,
        e.alpha = (t, n=1) => e({
            r: t.r,
            g: t.g,
            b: t.b,
            a: n
        }),
        e.transparent = t => e.alpha(t, 0),
        e.multiplyAlpha = (t, n=1) => e({
            r: t.r,
            g: t.g,
            b: t.b,
            a: t.a * n
        }),
        e.interpolate = (t, n, r=`rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
                throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return i => {
                let a = e.mixAsColor(t, n, i, !1, r);
                return a
            }
        }
        ,
        e.mix = (t, n, {model: r=`rgb`}={}) => {
            let i = typeof t == `string` ? e(t) : t
              , a = e.interpolate(i, n, r);
            return t => e.toRgbString(a(t))
        }
        ,
        e.mixAsColor = (t, r, i=.5, a=!1, o=`rgb`) => {
            let s = null;
            if (n.isRGB(o))
                s = e({
                    r: dr(i, [0, 1], [t.r, r.r], a),
                    g: dr(i, [0, 1], [t.g, r.g], a),
                    b: dr(i, [0, 1], [t.b, r.b], a),
                    a: dr(i, [0, 1], [t.a, r.a], a)
                });
            else {
                let c, l;
                n.isHSL(o) ? (c = e.toHsl(t),
                l = e.toHsl(r)) : (c = e.toHusl(t),
                l = e.toHusl(r)),
                c.s === 0 ? c.h = l.h : l.s === 0 && (l.h = c.h);
                let u = c.h
                  , d = l.h
                  , f = d - u;
                f > 180 ? f = d - 360 - u : f < -180 && (f = d + 360 - u);
                let p = {
                    h: dr(i, [0, 1], [u, u + f], a),
                    s: dr(i, [0, 1], [c.s, l.s], a),
                    l: dr(i, [0, 1], [c.l, l.l], a),
                    a: dr(i, [0, 1], [t.a, r.a], a)
                };
                s = n.isHSL(o) ? e(p) : e(gr(p.h, p.s, p.l, p.a))
            }
            return s
        }
        ,
        e.random = (t=1) => {
            function n() {
                return Math.floor(Math.random() * 255)
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`)
        }
        ,
        e.grey = (t=.5, n=1) => (t = Math.floor(t * 255),
        e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)),
        e.gray = e.grey,
        e.rgbToHsl = (e, t, n) => br(e, t, n),
        e.isValidColorProperty = (t, n) => {
            let r = t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`;
            return !!(r && typeof n == `string` && e.isColorString(n))
        }
        ,
        e.difference = (e, t) => {
            let n = (e.r + t.r) / 2
              , r = e.r - t.r
              , i = e.g - t.g
              , a = e.b - t.b
              , o = r ** 2
              , s = i ** 2
              , c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + n * (o - c) / 256)
        }
        ,
        e.equal = (e, t, n=.1) => !(Math.abs(e.r - t.r) >= n || Math.abs(e.g - t.g) >= n || Math.abs(e.b - t.b) >= n || Math.abs(e.a - t.a) * 256 >= n);
        let r = Ce([0, 255], [0, 1]);
        function i(e) {
            e = r(e);
            let t = Math.abs(e);
            return t < .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4
        }
        return e.luminance = t => {
            let {r: n, g: r, b: a} = e.toRgb(t);
            return .2126 * i(n) + .7152 * i(r) + .0722 * i(a)
        }
        ,
        e.contrast = (t, n) => {
            let r = e.luminance(t)
              , i = e.luminance(n);
            return (Math.max(r, i) + .05) / (Math.min(r, i) + .05)
        }
        ,
        e
    }
    )(),
    mh = e => e instanceof ae,
    hh = ( () => up().EventEmitter)(),
    gh = class {
        constructor() {
            P(this, `_emitter`, new hh)
        }
        eventNames() {
            return this._emitter.eventNames()
        }
        eventListeners() {
            let e = {};
            for (let t of this._emitter.eventNames())
                e[t] = this._emitter.listeners(t);
            return e
        }
        on(e, t) {
            this.addEventListener(e, t, !1, !1, this)
        }
        off(e, t) {
            this.removeEventListeners(e, t)
        }
        once(e, t) {
            this.addEventListener(e, t, !0, !1, this)
        }
        unique(e, t) {
            this.addEventListener(e, t, !1, !0, this)
        }
        addEventListener(e, t, n, r, i) {
            if (r) {
                for (let e of this._emitter.eventNames())
                    if (t === this._emitter.listeners(e))
                        return
            }
            n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i)
        }
        removeEventListeners(e, t) {
            e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners()
        }
        removeAllEventListeners() {
            this._emitter.removeAllListeners()
        }
        countEventListeners(e) {
            if (e)
                return this._emitter.listeners(e).length;
            {
                let e = 0;
                for (let t of this._emitter.eventNames())
                    e += this._emitter.listeners(t).length;
                return e
            }
        }
        emit(e, ...t) {
            this._emitter.emit(e, ...t)
        }
    }
    ,
    _h = e => {
        setTimeout(e, 1 / 60)
    }
    ,
    vh = ( () => K.requestAnimationFrame || _h)(),
    yh = e => vh(e),
    bh = ( () => 1 / 60)(),
    xh = class extends gh {
        constructor(e=!1) {
            super(),
            P(this, `_started`, !1),
            P(this, `_frame`, 0),
            P(this, `_frameTasks`, []),
            P(this, `tick`, () => {
                this._started && (yh(this.tick),
                this.emit(`update`, this._frame, bh),
                this.emit(`render`, this._frame, bh),
                this._processFrameTasks(),
                this._frame++)
            }
            ),
            e && this.start()
        }
        addFrameTask(e) {
            this._frameTasks.push(e)
        }
        _processFrameTasks() {
            var e;
            let t = this._frameTasks
              , n = t.length;
            if (n !== 0) {
                for (let r = 0; r < n; r++)
                    (e = t[r]) == null || e.call(t);
                t.length = 0
            }
        }
        static set TimeStep(e) {
            bh = e
        }
        static get TimeStep() {
            return bh
        }
        start() {
            return this._started ? this : (this._frame = 0,
            this._started = !0,
            yh(this.tick),
            this)
        }
        stop() {
            return this._started = !1,
            this
        }
        get frame() {
            return this._frame
        }
        get time() {
            return this._frame * bh
        }
    }
    ,
    Sh = new xh,
    Ch = {
        target: K.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1
    },
    J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Ch.target,
        hasRestrictions: () => {
            let e = Ch.target;
            return e === `CANVAS` || e === `EXPORT`
        }
    },
    wh = e => ({
        correct: (t, {delta: n, treeScale: r}) => {
            if (typeof t == `string` && (t = parseFloat(t)),
            t === 0)
                return `0px`;
            let i = t;
            return n && r && (i = Math.round(t / n[e].scale / r[e]),
            i = Math.max(i, 1)),
            i + `px`
        }
    }),
    F({
        borderTopWidth: wh(`y`),
        borderLeftWidth: wh(`x`),
        borderRightWidth: wh(`x`),
        borderBottomWidth: wh(`y`)
    }),
    Th = d.createContext({
        getLayoutId: e => null,
        persistLayoutIdCache: () => {}
        ,
        top: !1,
        enabled: !0
    }),
    Eh = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`
    },
    Dh = ( () => ({
        ...Eh,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`
    }))(),
    Oh = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`
    },
    kh = ( () => ({
        ...Oh,
        fontWeight: 500
    }))(),
    Ah = ( () => ({
        ...Oh,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`
    }))(),
    jh = ( () => {
        function e(e, t) {
            return {
                a: e,
                b: t
            }
        }
        return e.offset = (t, n) => {
            let r = ur.angleFromX(t.a, t.b)
              , i = ri(r)
              , a = n * Math.sin(i)
              , o = n * Math.cos(i);
            return e({
                x: t.a.x + a,
                y: t.a.y - o
            }, {
                x: t.b.x + a,
                y: t.b.y - o
            })
        }
        ,
        e.intersection = (e, t, n) => {
            let r = e.a.x
              , i = e.a.y
              , a = e.b.x
              , o = e.b.y
              , s = t.a.x
              , c = t.a.y
              , l = t.b.x
              , u = t.b.y
              , d = (l - s) * (c - i) - (u - c) * (s - r)
              , f = (l - s) * (o - i) - (u - c) * (a - r)
              , p = (a - r) * (c - i) - (o - i) * (s - r);
            if (d === 0 && f === 0 || f === 0)
                return null;
            let m = d / f
              , h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1) ? null : {
                x: r + m * (a - r),
                y: i + m * (o - i)
            }
        }
        ,
        e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x
              , r = e.b.y - e.a.y
              , i = t.b.x - t.a.x
              , a = t.b.y - t.a.y
              , o = Math.atan2(n * a - r * i, n * i + r * a);
            return o * (180 / Math.PI)
        }
        ,
        e.isOrthogonal = e => e.a.x === e.b.x || e.a.y === e.b.y,
        e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x
              , i = t.a.y - t.b.y
              , a = ur(n.x - i, n.y + r);
            return e(a, n)
        }
        ,
        e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r)
        }
        ,
        e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t)
              , i = n * r / r;
            return {
                x: i * t.b.x + (1 - i) * t.a.x,
                y: i * t.b.y + (1 - i) * t.a.y
            }
        }
        ,
        e.distance = e => ur.distance(e.a, e.b),
        e
    }
    )(),
    Y = {
        equals: function(e, t) {
            return e === t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
        },
        from: e => ({
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height
        }),
        atOrigin: e => ({
            x: 0,
            y: 0,
            width: e.width,
            height: e.height
        }),
        fromTwoPoints: (e, t) => ({
            x: Math.min(e.x, t.x),
            y: Math.min(e.y, t.y),
            width: Math.abs(e.x - t.x),
            height: Math.abs(e.y - t.y)
        }),
        fromRect: e => ({
            x: e.left,
            y: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }),
        multiply: (e, t) => ({
            x: e.x * t,
            y: e.y * t,
            width: e.width * t,
            height: e.height * t
        }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
            let n = typeof t.x == `number` ? t.x : 0
              , r = typeof t.y == `number` ? t.y : 0;
            return {
                ...e,
                x: e.x + n,
                y: e.y + r
            }
        }
        ,
        inflate: (e, t) => {
            if (t === 0)
                return e;
            let n = 2 * t;
            return {
                x: e.x - t,
                y: e.y - t,
                width: e.width + n,
                height: e.height + n
            }
        }
        ,
        pixelAligned: e => {
            let t = Math.round(e.x)
              , n = Math.round(e.y)
              , r = Math.round(e.x + e.width)
              , i = Math.round(e.y + e.height)
              , a = Math.max(r - t, 0)
              , o = Math.max(i - n, 0);
            return {
                x: t,
                y: n,
                width: a,
                height: o
            }
        }
        ,
        halfPixelAligned: e => {
            let t = Math.round(e.x * 2) / 2
              , n = Math.round(e.y * 2) / 2
              , r = Math.round((e.x + e.width) * 2) / 2
              , i = Math.round((e.y + e.height) * 2) / 2
              , a = Math.max(r - t, 1)
              , o = Math.max(i - n, 1);
            return {
                x: t,
                y: n,
                width: a,
                height: o
            }
        }
        ,
        round: (e, t=0) => {
            let n = sr(e.x, t)
              , r = sr(e.y, t)
              , i = sr(e.width, t)
              , a = sr(e.height, t);
            return {
                x: n,
                y: r,
                width: i,
                height: a
            }
        }
        ,
        roundToOutside: e => {
            let t = Math.floor(e.x)
              , n = Math.floor(e.y)
              , r = Math.ceil(e.x + e.width)
              , i = Math.ceil(e.y + e.height)
              , a = Math.max(r - t, 0)
              , o = Math.max(i - n, 0);
            return {
                x: t,
                y: n,
                width: a,
                height: o
            }
        }
        ,
        minX: e => e.x,
        maxX: e => e.x + e.width,
        minY: e => e.y,
        maxY: e => e.y + e.height,
        positions: e => ({
            minX: e.x,
            midX: e.x + e.width / 2,
            maxX: Y.maxX(e),
            minY: e.y,
            midY: e.y + e.height / 2,
            maxY: Y.maxY(e)
        }),
        center: e => ({
            x: e.x + e.width / 2,
            y: e.y + e.height / 2
        }),
        boundingRectFromPoints: e => {
            let t = 1 / 0
              , n = -1 / 0
              , r = 1 / 0
              , i = -1 / 0;
            for (let a = 0; a < e.length; a++) {
                let o = e[a];
                t = Math.min(t, o.x),
                n = Math.max(n, o.x),
                r = Math.min(r, o.y),
                i = Math.max(i, o.y)
            }
            return {
                x: t,
                y: r,
                width: n - t,
                height: i - r
            }
        }
        ,
        fromPoints: e => {
            let[t,n,r,i] = e
              , {x: a, y: o} = t
              , s = ur.distance(t, n)
              , c = ur.distance(t, i);
            return {
                x: a,
                y: o,
                width: s,
                height: c
            }
        }
        ,
        merge: (...e) => {
            let t = {
                x: Math.min(...e.map(Y.minX)),
                y: Math.min(...e.map(Y.minY))
            }
              , n = {
                x: Math.max(...e.map(Y.maxX)),
                y: Math.max(...e.map(Y.maxY))
            };
            return Y.fromTwoPoints(t, n)
        }
        ,
        intersection: (e, t) => {
            let n = Math.max(e.x, t.x)
              , r = Math.min(e.x + e.width, t.x + t.width)
              , i = Math.max(e.y, t.y)
              , a = Math.min(e.y + e.height, t.y + t.height);
            return {
                x: n,
                y: i,
                width: r - n,
                height: a - i
            }
        }
        ,
        points: e => [{
            x: Y.minX(e),
            y: Y.minY(e)
        }, {
            x: Y.minX(e),
            y: Y.maxY(e)
        }, {
            x: Y.maxX(e),
            y: Y.minY(e)
        }, {
            x: Y.maxX(e),
            y: Y.maxY(e)
        }],
        pointsAtOrigin: e => [{
            x: 0,
            y: 0
        }, {
            x: e.width,
            y: 0
        }, {
            x: e.width,
            y: e.height
        }, {
            x: 0,
            y: e.height
        }],
        transform: (e, t) => {
            let {x: n, y: r} = t.transformPoint({
                x: e.x,
                y: e.y
            })
              , {x: i, y: a} = t.transformPoint({
                x: e.x + e.width,
                y: e.y
            })
              , {x: o, y: s} = t.transformPoint({
                x: e.x + e.width,
                y: e.y + e.height
            })
              , {x: c, y: l} = t.transformPoint({
                x: e.x,
                y: e.y + e.height
            })
              , u = Math.min(n, i, o, c)
              , d = Math.max(n, i, o, c) - u
              , f = Math.min(r, a, s, l)
              , p = Math.max(r, a, s, l) - f;
            return {
                x: u,
                y: f,
                width: d,
                height: p
            }
        }
        ,
        containsPoint: (e, t) => !(t.x < Y.minX(e) || t.x > Y.maxX(e) || t.y < Y.minY(e) || t.y > Y.maxY(e) || Number.isNaN(e.x) || Number.isNaN(e.y)),
        containsRect: (e, t) => {
            for (let n of Y.points(t))
                if (!Y.containsPoint(e, n))
                    return !1;
            return !0
        }
        ,
        toCSS: e => ({
            display: `block`,
            transform: `translate(${e.x}px, ${e.y}px)`,
            width: `${e.width}px`,
            height: `${e.height}px`
        }),
        inset: (e, t) => ({
            x: e.x + t,
            y: e.y + t,
            width: Math.max(0, e.width - 2 * t),
            height: Math.max(0, e.height - 2 * t)
        }),
        intersects: (e, t) => !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
            let n = Y.maxX(e)
              , r = Y.maxX(t);
            return n > t.x && r > e.x
        }
        ,
        overlapVertically: (e, t) => {
            let n = Y.maxY(e)
              , r = Y.maxY(t);
            return n > t.y && r > e.y
        }
        ,
        doesNotIntersect: (e, t) => t.find(t => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: e => {
            let t = e.x
              , n = e.x + e.width
              , r = e.y
              , i = e.y + e.height
              , a = {
                x: t,
                y: r
            }
              , o = {
                x: n,
                y: r
            }
              , s = {
                x: n,
                y: i
            }
              , c = {
                x: t,
                y: i
            };
            return [a, o, s, c]
        }
        ,
        midPoints: e => {
            let t = e.x
              , n = e.x + e.width / 2
              , r = e.x + e.width
              , i = e.y
              , a = e.y + e.height / 2
              , o = e.y + e.height
              , s = {
                x: n,
                y: i
            }
              , c = {
                x: r,
                y: a
            }
              , l = {
                x: n,
                y: o
            }
              , u = {
                x: t,
                y: a
            };
            return [s, c, l, u]
        }
        ,
        pointDistance: (e, t) => {
            let n = 0
              , r = 0;
            return t.x < e.x ? n = e.x - t.x : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? r = e.y - t.y : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            ur.distance({
                x: n,
                y: r
            }, {
                x: 0,
                y: 0
            })
        }
        ,
        delta: (e, t) => {
            let n = {
                x: Y.minX(e),
                y: Y.minY(e)
            }
              , r = {
                x: Y.minX(t),
                y: Y.minY(t)
            };
            return {
                x: n.x - r.x,
                y: n.y - r.y
            }
        }
        ,
        withMinSize: (e, t) => {
            let {width: n, height: r} = t
              , i = e.width - n
              , a = e.height - r;
            return {
                width: Math.max(e.width, n),
                height: Math.max(e.height, r),
                x: e.width < n ? e.x + i / 2 : e.x,
                y: e.height < r ? e.y + a / 2 : e.y
            }
        }
        ,
        anyPointsOutsideRect: (e, t) => {
            let n = Y.minX(e)
              , r = Y.minY(e)
              , i = Y.maxX(e)
              , a = Y.maxY(e);
            for (let e of t)
                if (e.x < n || e.x > i || e.y < r || e.y > a)
                    return !0;
            return !1
        }
        ,
        edges: e => {
            let[t,n,r,i] = Y.cornerPoints(e);
            return [jh(t, n), jh(n, r), jh(r, i), jh(i, t)]
        }
        ,
        rebaseRectOnto: (e, t, n, r) => {
            let i = {
                ...e
            };
            switch (n) {
            case `bottom`:
            case `top`:
                switch (r) {
                case `start`:
                    i.x = t.x;
                    break;
                case `center`:
                    i.x = t.x + t.width / 2 - e.width / 2;
                    break;
                case `end`:
                    i.x = t.x + t.width - e.width;
                    break;
                default:
                    V(r)
                }
                break;
            case `left`:
                i.x = t.x - e.width;
                break;
            case `right`:
                i.x = t.x + t.width;
                break;
            default:
                V(n)
            }
            switch (n) {
            case `left`:
            case `right`:
                switch (r) {
                case `start`:
                    i.y = t.y;
                    break;
                case `center`:
                    i.y = t.y + t.height / 2 - e.height / 2;
                    break;
                case `end`:
                    i.y = t.y + t.height - e.height;
                    break;
                default:
                    V(r)
                }
                break;
            case `top`:
                i.y = t.y - e.height;
                break;
            case `bottom`:
                i.y = t.y + t.height;
                break;
            default:
                V(n)
            }
            return i
        }
    },
    Mh = {
        quickfix: e => ((e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
        H(e.aspectRatio) && (e.left && e.right && (e.widthType = 0),
        e.top && e.bottom && (e.heightType = 0),
        e.left && e.right && e.top && e.bottom && (e.bottom = !1),
        e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
        e.left && e.right && ((e.fixedSize || e.widthType === 2 || H(e.maxWidth)) && (e.right = !1),
        e.widthType = 0),
        e.top && e.bottom && ((e.fixedSize || e.heightType === 2 || H(e.maxHeight)) && (e.bottom = !1),
        e.heightType = 0),
        e)
    },
    Nh = {
        fromProperties: e => {
            let {left: t, right: n, top: r, bottom: i, width: a, height: o, centerX: s, centerY: c, aspectRatio: l, autoSize: u} = e
              , d = Mh.quickfix({
                left: H(t) || ar(t),
                right: H(n) || ar(n),
                top: H(r) || ar(r),
                bottom: H(i) || ar(i),
                widthType: ii(a),
                heightType: ii(o),
                aspectRatio: l || null,
                fixedSize: u === !0
            })
              , f = null
              , p = null
              , m = 0
              , h = 0;
            if (d.widthType !== 0 && typeof a == `string`) {
                let e = parseFloat(a);
                a.endsWith(`fr`) ? (m = 3,
                f = e) : a === `auto` ? m = 2 : (m = 1,
                f = e / 100)
            } else
                a !== void 0 && typeof a != `string` && (f = $m.getNumber(a));
            if (d.heightType !== 0 && typeof o == `string`) {
                let e = parseFloat(o);
                o.endsWith(`fr`) ? (h = 3,
                p = e) : o === `auto` ? h = 2 : (h = 1,
                p = parseFloat(o) / 100)
            } else
                o !== void 0 && typeof o != `string` && (p = $m.getNumber(o));
            let g = .5
              , _ = .5;
            return s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
                left: d.left ? $m.getNumber(t) : null,
                right: d.right ? $m.getNumber(n) : null,
                top: d.top ? $m.getNumber(r) : null,
                bottom: d.bottom ? $m.getNumber(i) : null,
                widthType: m,
                heightType: h,
                width: f,
                height: p,
                aspectRatio: d.aspectRatio || null,
                centerAnchorX: g,
                centerAnchorY: _
            }
        }
        ,
        toSize: (e, t, n, r) => {
            let i = null
              , a = null
              , o = t?.sizing ? $m.getNumber(t?.sizing.width) : null
              , s = t?.sizing ? $m.getNumber(t?.sizing.height) : null
              , c = ui(e.left, e.right);
            if (o && H(c))
                i = o - c;
            else if (n && e.widthType === 2)
                i = n.width;
            else if (H(e.width))
                switch (e.widthType) {
                case 0:
                    i = e.width;
                    break;
                case 3:
                    i = r ? r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width * e.width : null;
                    break;
                case 1:
                case 4:
                    o && (i = o * e.width);
                    break;
                case 2:
                    break;
                default:
                    V(e.widthType)
                }
            let l = ui(e.top, e.bottom);
            if (s && H(l))
                a = s - l;
            else if (n && e.heightType === 2)
                a = n.height;
            else if (H(e.height))
                switch (e.heightType) {
                case 0:
                    a = e.height;
                    break;
                case 3:
                    a = r ? r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height * e.height : null;
                    break;
                case 1:
                case 4:
                    s && (a = s * e.height);
                    break;
                case 2:
                    break;
                default:
                    V(e.heightType)
                }
            return li(i, a, e, {
                height: s ?? 0,
                width: o ?? 0
            }, t?.viewport)
        }
        ,
        toRect: (e, t=null, n=null, r=!1, i=null) => {
            let a = e.left || 0
              , o = e.top || 0
              , {width: s, height: c} = Nh.toSize(e, t, n, i)
              , l = t?.positioning ?? null
              , u = l ? $m.getNumber(l.width) : null
              , d = l ? $m.getNumber(l.height) : null;
            e.left === null ? u && e.right !== null ? a = u - e.right - s : u && (a = e.centerAnchorX * u - s / 2) : a = e.left,
            e.top === null ? d && e.bottom !== null ? o = d - e.bottom - c : d && (o = e.centerAnchorY * d - c / 2) : o = e.top;
            let f = {
                x: a,
                y: o,
                width: s,
                height: c
            };
            return r ? Y.pixelAligned(f) : f
        }
    },
    Ph = 200,
    Fh = 200,
    Ih = d.createContext({
        parentSize: 0
    }),
    Lh = e => {
        let t = vi()
          , {parentSize: n, children: r} = e
          , i = d.useMemo( () => ({
            parentSize: n
        }), [bi(n), xi(n)]);
        return t === 1 ? r ? x(y, {
            children: r
        }) : null : x(Ih.Provider, {
            value: i,
            children: r
        })
    }
    ,
    Rh = (e => (e.Boolean = `boolean`,
    e.Number = `number`,
    e.String = `string`,
    e.RichText = `richtext`,
    e.FusedNumber = `fusednumber`,
    e.Enum = `enum`,
    e.SegmentedEnum = `segmentedenum`,
    e.Color = `color`,
    e.Image = `image`,
    e.ResponsiveImage = `responsiveimage`,
    e.File = `file`,
    e.ComponentInstance = `componentinstance`,
    e.Slot = `slot`,
    e.Array = `array`,
    e.EventHandler = `eventhandler`,
    e.Transition = `transition`,
    e.BoxShadow = `boxshadow`,
    e.Link = `link`,
    e.Date = `date`,
    e.Object = `object`,
    e.Font = `font`,
    e.PageScope = `pagescope`,
    e.ScrollSectionRef = `scrollsectionref`,
    e.CustomCursor = `customcursor`,
    e.Border = `border`,
    e.Cursor = `cursor`,
    e.Padding = `padding`,
    e.BorderRadius = `borderradius`,
    e.Gap = `gap`,
    e.CollectionReference = `collectionreference`,
    e.MultiCollectionReference = `multicollectionreference`,
    e.TrackingId = `trackingid`,
    e.VectorSetItem = `vectorsetitem`,
    e.LinkRelValues = `linkrelvalues`,
    e))(Rh || {}),
    Bh = `flexbox-gap-not-supported`,
    Vh = !1,
    Hh = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
    Uh = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
    Wh = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
    Gh = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
    Kh = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
    qh = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
    Jh = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
    Yh = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
    Xh = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
    Zh = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
    Qh = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
    $h = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
    eg = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
    tg = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
    ng = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
    rg = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
    ig = [`[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`, $h, Qh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, eg, tg, ng, rg],
    ag = (e => (e.Padding = `--framer-input-padding`,
    e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`,
    e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`,
    e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`,
    e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`,
    e.BorderColor = `--framer-input-border-color`,
    e.BorderTopWidth = `--framer-input-border-top-width`,
    e.BorderRightWidth = `--framer-input-border-right-width`,
    e.BorderBottomWidth = `--framer-input-border-bottom-width`,
    e.BorderLeftWidth = `--framer-input-border-left-width`,
    e.BorderStyle = `--framer-input-border-style`,
    e.Background = `--framer-input-background`,
    e.FontFamily = `--framer-input-font-family`,
    e.FontWeight = `--framer-input-font-weight`,
    e.FontSize = `--framer-input-font-size`,
    e.FontColor = `--framer-input-font-color`,
    e.FontStyle = `--framer-input-font-style`,
    e.FontLetterSpacing = `--framer-input-font-letter-spacing`,
    e.FontTextAlignment = `--framer-input-font-text-alignment`,
    e.FontLineHeight = `--framer-input-font-line-height`,
    e.FontOpenType = `--framer-input-font-open-type-features`,
    e.PlaceholderColor = `--framer-input-placeholder-color`,
    e.BoxShadow = `--framer-input-box-shadow`,
    e.FocusedBorderColor = `--framer-input-focused-border-color`,
    e.FocusedBorderWidth = `--framer-input-focused-border-width`,
    e.FocusedBorderStyle = `--framer-input-focused-border-style`,
    e.FocusedBackground = `--framer-input-focused-background`,
    e.FocusedBoxShadow = `--framer-input-focused-box-shadow`,
    e.FocusedTransition = `--framer-input-focused-transition`,
    e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`,
    e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`,
    e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`,
    e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`,
    e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`,
    e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`,
    e.InvalidTextColor = `--framer-input-invalid-text-color`,
    e.IconBackgroundImage = `--framer-input-icon-image`,
    e.IconMaskImage = `--framer-input-icon-mask-image`,
    e.IconColor = `--framer-input-icon-color`,
    e.WrapperHeight = `--framer-input-wrapper-height`,
    e))(ag || {}),
    X = ag,
    og = `framer-form-input`,
    sg = `framer-form-input-wrapper`,
    cg = `framer-form-input-empty`,
    lg = `framer-form-input-forced-focus`,
    (e => {
        function t(...e) {
            let t = e[e.length - 1]
              , n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) {
                let r = e[t];
                n = `var(${r}, ${n})`
            }
            return n
        }
        e.variable = t
    }
    )(U ||= {}),
    ug = [U(`.${og}`, {
        padding: U.variable(X.Padding),
        background: `transparent`,
        fontFamily: U.variable(X.FontFamily),
        fontWeight: U.variable(X.FontWeight),
        fontSize: U.variable(X.FontSize),
        fontStyle: U.variable(X.FontStyle),
        color: U.variable(X.FontColor),
        fontFeatureSettings: U.variable(X.FontOpenType),
        border: `none`,
        textOverflow: `ellipsis`,
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        width: `100%`,
        height: U.variable(X.WrapperHeight, `100%`),
        letterSpacing: U.variable(X.FontLetterSpacing),
        textAlign: U.variable(X.FontTextAlignment),
        lineHeight: U.variable(X.FontLineHeight)
    }), U(`.${og}:focus-visible`, {
        outline: `none`
    })],
    dg = ( () => [U(`.${sg}`, {
        overflow: `hidden`
    })])(),
    fg = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`,
    pg = [`.${sg}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`],
    mg = `customError`,
    hg = `valid`,
    gg = 10,
    _g = 16,
    vg = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${_g}px`,
        boxSizing: `content-box`,
        padding: U.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${_g}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${_g}px`,
        backgroundColor: U.variable(X.IconColor)
    },
    yg = ( () => [`
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ji([`--framer-text-stroke-color`], `initial`)};
            }
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `, `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `, `
        a.framer-text,
        span.framer-text[data-nested-link] {
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            a.framer-text span.framer-text:not([data-text-fill]),
            span.framer-text[data-nested-link],
            span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text,
            code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-nested-link],
            code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
        }
    `, `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${ji([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
        }
    }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${ji([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ji([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            padding-left: 3ch;
            position: relative;
        }
    `, `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            left: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-left: 1ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-left: 2ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-left: 3ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-left: 4ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-left: 5ch;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            left: 0;
            content: "•";
        }
    `, `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `, `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `, `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `])(),
    bg = new Set,
    Sg = [`[data-framer-component-type] { position: absolute; }`],
    Cg = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
    wg = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
    Tg = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
    Eg = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
    Dg = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
    Og = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
    kg = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
    Ag = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
    jg = [`[data-framer-component-type="Text"] { cursor: inherit; }`, `[data-framer-component-text-autosized] * { white-space: pre; }`, Cg, wg, Tg, Eg, Dg, Og, kg, Ag],
    Mg = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
    Ng = ( () => [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${Bh} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`])(),
    Pg = ( () => `
.${Bh} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
    Fg = ( () => `
.${Bh}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Bh}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
    Ig = ( () => `
.${Bh}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Bh}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
    Lg = ( () => [Mg, Pg, ...Ng, Fg, Ig])(),
    Rg = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`],
    zg = [`[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`, `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`],
    Bg = [`[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`, `[data-framer-component-type="NativeScroll"] > * { position: relative; }`, `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`, `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`, `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`],
    Vg = [`[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`],
    Hg = [`[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`],
    Ug = [`[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`],
    Wg = [`[data-framer-cursor="pointer"] { cursor: pointer; }`, `[data-framer-cursor="grab"] { cursor: grab; }`, `[data-framer-cursor="grab"]:active { cursor: grabbing; }`],
    Gg = [`[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`, `[data-framer-generated] * { pointer-events: unset }`],
    Kg = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`],
    qg = [`[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`, `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`, `[data-hide-scrollbars="true"] { scrollbar-width: none; }`],
    Jg = `--framer-will-change-override`,
    Yg = `--framer-will-change-effect-override`,
    Xg = `(background: -webkit-named-image(i))`,
    Zg = `(grid-template-rows: subgrid)`,
    Qg = e => e ? [`body { ${Jg}: none; }`, `@supports ${Xg} and (not ${Zg}) { body { ${Jg}: transform; } }`] : [`body { ${Jg}: none; ${Yg}: none; }`],
    $g = e => e ? Gg : [],
    e_ = [`.svgContainer svg { display: block; }`],
    t_ = e => [...Qg(e), ...Sg, ...jg, ...yg, ...ig, ...Lg, ...Rg, ...zg, ...Bg, ...Hg, ...Vg, ...Ug, ...Wg, ...$g(e), ...e_, ...Kg, ...qg],
    n_ = t_(!1),
    r_ = t_(!0),
    i_ = !1,
    a_ = `optional`,
    o_ = e => e,
    s_ = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
    c_ = Gi(e => s_.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91),
    l_ = d.createContext(void 0),
    u_ = ( () => l_.Provider)(),
    d_ = () => {
        let e = d.useContext(l_);
        return e ?? {}
    }
    ,
    f_ = e => () => {
        rr(e)
    }
    ,
    p_ = () => () => {}
    ,
    m_ = {
        useImageSource(e) {
            return e.src ?? ``
        },
        useImageElement(e, t, n) {
            let r = new Image;
            return r.src = __.useImageSource(e, t, n),
            e.srcSet && (r.srcset = e.srcSet),
            r
        },
        canRenderOptimizedCanvasImage() {
            return !1
        }
    },
    h_ = !1,
    g_ = {
        get(e, t, n) {
            return Reflect.has(e, t) ? Reflect.get(e, t, n) : [`getLogger`].includes(String(t)) ? p_() : f_(h_ ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
        }
    },
    __ = new Proxy(m_,g_),
    v_ = {
        position: `absolute`,
        borderRadius: `inherit`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    y_ = `src`,
    b_ = {
        isImageObject: function(e) {
            return !e || typeof e == `string` ? !1 : y_ in e
        }
    },
    x_ = b === void 0 ? void 0 : b,
    S_ = () => typeof document == `object`,
    C_ = () => x_ && /Chrome/u.test(x_.userAgent) && /Google Inc/u.test(x_.vendor) && !D_(),
    w_ = () => x_ && /Safari/u.test(x_.userAgent) && /Apple Computer/u.test(x_.vendor),
    T_ = () => x_ && /Firefox\/\d+\.\d+$/u.test(x_.userAgent),
    E_ = () => x_ && /FramerX/u.test(x_.userAgent),
    D_ = () => x_ && /Edg\//u.test(x_.userAgent),
    O_ = /iPhone|iPod|iPad/iu,
    k_ = /MacIntel/iu,
    A_ = () => x_ ? O_.test(x_.platform) ? !0 : k_.test(x_.platform) && x_.maxTouchPoints && x_.maxTouchPoints > 2 : !1,
    j_ = () => !1,
    M_ = C_(),
    N_ = typeof document < `u` ? f : O,
    P_ = d.createContext(!1),
    F_ = class {
        constructor() {
            P(this, `sharedResizeObserver`),
            P(this, `callbacks`, new WeakMap),
            this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this))
        }
        updateResizedElements(e) {
            for (let t of e) {
                let e = this.callbacks.get(t.target);
                e && e(t.contentRect)
            }
        }
        observeElementWithCallback(e, t) {
            this.sharedResizeObserver.observe(e),
            this.callbacks.set(e, t)
        }
        unobserve(e) {
            this.sharedResizeObserver.unobserve(e),
            this.callbacks.delete(e)
        }
    }
    ,
    I_ = ( () => S_() ? new F_ : void 0)(),
    L_ = `data-framer-size-compatibility-wrapper`,
    R_ = `0.000001px`,
    z_ = ( () => ` translateZ(${R_})`)(),
    B_ = ( () => E_() || w_() || j_())(),
    V_ = ( () => {
        class e extends n {
            constructor() {
                super(...arguments),
                P(this, `layerElement`, null),
                P(this, `setLayerElement`, e => {
                    this.layerElement = e
                }
                )
            }
            static applyWillChange(e, t, n) {
                e.willChangeTransform && (n ? ya(t) : ba(t))
            }
            shouldComponentUpdate(e, t) {
                return e._needsMeasure || this.state !== t || !ot(this.props, e)
            }
            componentDidUpdate(e) {
                o_(this.props).clip && o_(this.props).radius === 0 && o_(e).radius !== 0 && Sa(this.layerElement, `overflow`, `hidden`, !1)
            }
        }
        return P(e, `defaultProps`, {}),
        e
    }
    )(),
    H_ = e => {
        let t = 0, n, r;
        if (e.length === 0)
            return t;
        for (n = 0; n < e.length; n++)
            r = e.charCodeAt(n),
            t = (t << 5) - t + r,
            t |= 0;
        return t
    }
    ,
    U_ = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: e => {
            let t = kr(e);
            return t ? t.a : 1
        }
        ,
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: e => q.toHex(q(e)).toUpperCase(),
        toHex: e => q.toHexString(q(e)).toUpperCase(),
        toRgb: e => q.toRgb(q(e)),
        toRgbString: e => q.toRgbString(q(e)),
        toHSV: e => q.toHsv(q(e)),
        toHSL: e => q.toHsl(q(e)),
        toHslString: e => q.toHslString(q(e)),
        toHsvString: e => q.toHsvString(q(e)),
        hsvToHSLString: e => q.toHslString(q(_r(e.h, e.s, e.v, e.a))),
        hsvToHexValue: e => q.toHex(q(_r(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: e => q.toHexString(q(_r(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: e => q.toRgbString(q(_r(e.h, e.s, e.v, e.a))),
        hsvToString: e => _r(e.h, e.s, e.v),
        rgbaToString: e => q.toRgbString(q(e)),
        rgbToHexValue: e => q.toHex(q(e)),
        rgbToHexString: e => q.toHexString(q(e)),
        hslToString: e => q.toHslString(q(e)),
        hslToRgbString: e => q.toRgbString(q(e)),
        toColorPickerSquare: e => q.toRgbString(q({
            h: e,
            s: 1,
            l: .5,
            a: 1
        })),
        isValid: e => q(e).isValid !== !1,
        equals: (e, t) => q.isP3String(e) || q.isP3String(t) ? e === t : (typeof e == `string` && (e = q(e)),
        typeof t == `string` && (t = q(t)),
        q.equal(e, t)),
        toHexOrRgbaString: e => {
            let t = q(e);
            return t.a === 1 ? q.toHexString(t) : q.toRgbString(t)
        }
        ,
        toFormatString: e => q.isP3String(e) ? e : q.toRgbString(q(e))
    },
    W_ = /var\(.+\)/u,
    G_ = new Map,
    K_ = [`stops`],
    q_ = [`start`, `end`],
    J_ = [`angle`, `alpha`],
    Y_ = {
        isLinearGradient: e => z(e) && J_.every(t => t in e) && (Aa(e) || ka(e)),
        hash: e => e.angle ^ Oa(e, e.alpha),
        toCSS: (e, t, n) => {
            let r = Da(e, e.alpha)
              , i = t === void 0 ? e.angle : t
              , a = r.map(e => `${n?.(e.value) ?? e.value} ${e.position * 100}%`);
            return `linear-gradient(${i}deg, ${a.join(`, `)})`
        }
    },
    X_ = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`],
    Z_ = {
        isRadialGradient: e => z(e) && X_.every(t => t in e) && (Aa(e) || ka(e)),
        hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Oa(e, e.alpha),
        toCSS: (e, t) => {
            let {alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o} = e
              , s = Da(e, n)
              , c = s.map( (e, n) => {
                let r = s[n + 1]
                  , i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
                return `${t?.(e.value) ?? e.value} ${i * 100}%`
            }
            );
            return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`
        }
    },
    Q_ = [`onClick`, `onDoubleClick`, `onMouse`, `onMouseDown`, `onMouseUp`, `onTapDown`, `onTap`, `onTapUp`, `onPointer`, `onPointerDown`, `onPointerUp`, `onTouch`, `onTouchDown`, `onTouchUp`],
    $_ = ( () => new Set([...Q_, ...Q_.map(e => `${e}Capture`)]))(),
    ev = `overflow`,
    tv = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    },
    nv = new Set([`width`, `height`, `opacity`, `overflow`, `radius`, `background`, `color`, `x`, `y`, `z`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `scale`, `scaleX`, `scaleY`, `skew`, `skewX`, `skewY`, `originX`, `originY`, `originZ`]),
    rv = s(function(e, t) {
        let {name: n, center: r, border: i, _border: a, __portal: o} = e
          , {props: s, children: c} = la(e)
          , l = Va(s)
          , u = da(e)
          , d = Ia(e)
          , f = S(null)
          , p = t ?? f
          , m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` ? !0 : void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": o_(e)[`data-framer-offset-parent-id`]
        };
        !Ha(e) && n && (o_(m)[`data-framer-name`] = n);
        let[h,g] = Ba(s)
          , _ = za(s)
          , v = wi(_);
        r && !(g && !v && fi(_)) ? (l.transformTemplate ||= ua(r),
        Object.assign(m, oa(r))) : l.transformTemplate ||= void 0,
        _a(e, p);
        let b = ra(e)
          , C = w(P_)
          , T = Ua(s, _, g, C)
          , E = Si(D(y, {
            children: [b ? x($i, {
                alt: e.alt ?? ``,
                image: b,
                containerSize: g ?? void 0,
                nodeId: e.id && sa(e.id),
                layoutId: u
            }) : null, c, x(ta, {
                ...a,
                border: i,
                layoutId: u
            })]
        }), T)
          , O = ia(e.as);
        return D(O, {
            ...m,
            ...l,
            layoutId: u,
            style: h,
            ref: p,
            children: [E, o]
        })
    }),
    iv = s(function(e, t) {
        ca();
        let {visible: n=!0} = e;
        return n ? x(rv, {
            ...e,
            ref: t
        }) : null
    }),
    av = `__LAYOUT_TREE_ROOT`,
    ov = d.createContext({
        schedulePromoteTree: () => {}
        ,
        scheduleProjectionDidUpdate: () => {}
        ,
        initLead: () => {}
    }),
    sv = class extends n {
        constructor() {
            super(...arguments),
            P(this, `shouldAnimate`, !1),
            P(this, `transition`),
            P(this, `lead`),
            P(this, `follow`),
            P(this, `scheduledPromotion`, !1),
            P(this, `scheduledDidUpdate`, !1),
            P(this, `scheduleProjectionDidUpdate`, () => {
                this.scheduledDidUpdate = !0
            }
            ),
            P(this, `schedulePromoteTree`, (e, t, n) => {
                this.follow = this.lead,
                this.shouldAnimate = n,
                this.lead = e,
                this.transition = t,
                this.scheduledPromotion = !0
            }
            ),
            P(this, `initLead`, (e, t) => {
                this.follow = this.lead,
                this.lead = e,
                this.follow && t && (this.follow.layoutMaybeMutated = !0)
            }
            ),
            P(this, `sharedLayoutContext`, {
                schedulePromoteTree: this.schedulePromoteTree,
                scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
                initLead: this.initLead
            })
        }
        getSnapshotBeforeUpdate() {
            var e;
            if (!this.scheduledPromotion || !this.lead || !this.follow)
                return null;
            let t = (e = this.lead)?.layoutMaybeMutated && !this.shouldAnimate;
            return this.lead.projectionNodes.forEach(e => {
                var n;
                e?.promote({
                    needsReset: t,
                    transition: this.shouldAnimate ? this.transition : void 0,
                    preserveFollowOpacity: e.options.layoutId === av && !(n = this.follow)?.isExiting
                })
            }
            ),
            this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(),
            this.lead.layoutMaybeMutated = !1,
            this.transition = void 0,
            this.scheduledPromotion = !1,
            null
        }
        componentDidUpdate() {
            var e, t;
            if (!this.lead)
                return null;
            this.scheduledDidUpdate && ((t = (e = this.lead.rootProjectionNode)?.root) == null || t.didUpdate(),
            this.scheduledDidUpdate = !1)
        }
        render() {
            return x(ov.Provider, {
                value: this.sharedLayoutContext,
                children: this.props.children
            })
        }
    }
    ,
    cv = {
        width: `100%`,
        height: `100%`,
        backgroundColor: `none`
    },
    lv = class {
        constructor(e) {
            P(this, `sharedIntersectionObserver`),
            P(this, `callbacks`, new WeakMap),
            this.sharedIntersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this),e)
        }
        intersectionObserverCallback(e, t) {
            for (let n of e) {
                let e = this.callbacks.get(n.target);
                e && e(n, t)
            }
        }
        observeElementWithCallback(e, t) {
            this.sharedIntersectionObserver && (this.sharedIntersectionObserver.observe(e),
            this.callbacks.set(e, t))
        }
        unobserve(e) {
            this.sharedIntersectionObserver && (this.sharedIntersectionObserver.unobserve(e),
            this.callbacks.delete(e))
        }
        get root() {
            var e;
            return (e = this.sharedIntersectionObserver)?.root
        }
    }
    ,
    uv = j(new Map),
    dv = typeof IntersectionObserver > `u` ? xp : Qa,
    fv = Array(100).fill(void 0).map( (e, t) => t * .01),
    pv = d.createContext(null),
    mv = class extends n {
        constructor() {
            super(...arguments),
            P(this, `layoutMaybeMutated`, !1),
            P(this, `projectionNodes`, new Map),
            P(this, `rootProjectionNode`),
            P(this, `isExiting`),
            P(this, `shouldPreserveFollowOpacity`, e => e.options.layoutId === av && !this.props.isExiting),
            P(this, `switchLayoutGroupContext`, {
                register: e => this.addChild(e),
                deregister: e => this.removeChild(e),
                transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
                shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
            })
        }
        componentDidMount() {
            this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout)
        }
        shouldComponentUpdate(e) {
            let {isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: a, sharedLayoutContext: o} = e;
            if (this.isExiting = n,
            t === void 0)
                return !0;
            let s = !this.props.isLead && t
              , c = this.props.isExiting && !n
              , l = s || c
              , u = !!this.props.isLead && !t
              , d = this.props.isOverlayed !== r;
            return (l || u) && this.projectionNodes.forEach(e => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
        }
        addChild(e) {
            let t = e.options.layoutId;
            t && (this.projectionNodes.set(t, e),
            this.setRootChild(e))
        }
        setRootChild(e) {
            if (!this.rootProjectionNode)
                return this.rootProjectionNode = e;
            this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e
        }
        removeChild(e) {
            let t = e.options.layoutId;
            t && this.projectionNodes.delete(t)
        }
        render() {
            return x(se.Provider, {
                value: this.switchLayoutGroupContext,
                children: this.props.children
            })
        }
    }
    ,
    hv = e => {
        let t = d.useContext(ov);
        return x(mv, {
            ...e,
            sharedLayoutContext: t
        })
    }
    ,
    gv = d.createContext(!0),
    _v = j({
        register: () => {}
        ,
        deregister: () => {}
    }),
    vv = ({isCurrent: e, isOverlayed: t, children: n}) => {
        let r = io()
          , i = E(e => {
            if (r.has(e)) {
                console.warn(`NavigationTargetWrapper: already registered`);
                return
            }
            r.set(e, void 0)
        }
        , [r])
          , a = E(e => {
            let t = r.get(e);
            t?.(),
            r.delete(e)
        }
        , [r])
          , o = S({
            register: i,
            deregister: a
        }).current;
        return O( () => (r.forEach( (n, i) => {
            let a = i(e, t);
            r.set(i, yt(a) ? a : void 0)
        }
        ),
        () => {
            r.forEach( (e, t) => {
                e && (e(),
                r.set(t, void 0))
            }
            )
        }
        ), [e, t, r]),
        x(_v.Provider, {
            value: o,
            children: n
        })
    }
    ,
    yv = d.memo(function({isLayeredContainer: e, isCurrent: t, isPrevious: n, isOverlayed: r=!1, visible: i, transitionProps: a, children: o, backdropColor: s, onTapBackdrop: c, backfaceVisible: l, exitBackfaceVisible: u, animation: d, exitAnimation: f, instant: p, initialProps: m, exitProps: h, position: g={
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, withMagicMotion: _, index: v, areMagicMotionLayersPresent: y, id: b, isInitial: C}) {
        let T = Ie()
          , E = w(oe)
          , {persistLayoutIdCache: k} = w(Th)
          , A = S({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: so({}, m, a)
        })
          , ee = S(null)
          , j = E !== null && !E.isPresent;
        t && A.current.wasCurrent === void 0 && k(),
        O( () => {
            if (e || !T)
                return;
            if (j) {
                A.current = {
                    ...A.current,
                    wasBeingRemoved: j
                };
                return
            }
            let {wasPrevious: r, wasCurrent: i} = A.current
              , o = t && !i || !j && A.current.wasBeingRemoved && t
              , s = n && !r
              , c = so(A.current.origins, m, a)
              , l = A.current.wasReset;
            o || s ? (T.stop(),
            T.start({
                zIndex: v,
                ...c,
                ...a
            }),
            l = !1) : l === !1 && (T.stop(),
            T.set({
                zIndex: v,
                ...bv,
                opacity: 0
            }),
            l = !0),
            A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c
            }
        }
        , [t, n, j]);
        let te = p ? {
            type: !1
        } : `velocity`in d ? {
            ...d,
            velocity: 0
        } : d
          , ne = p ? {
            type: !1
        } : f || d
          , re = {
            ...g
        };
        (re.left === void 0 || re.right === void 0) && (re.width = `auto`),
        (re.top === void 0 || re.bottom === void 0) && (re.height = `auto`);
        let ie = co(a) || co(m)
          , ae = ie && (e || t || n) ? 1200 : void 0
          , se = {
            ...bv,
            ...A.current.origins
        }
          , ce = e ? {
            initial: {
                ...se,
                ...m
            },
            animate: {
                ...se,
                ...a,
                transition: te
            },
            exit: {
                ...se,
                ...h,
                transition: d
            }
        } : {
            animate: T,
            exit: {
                ...se,
                ...h,
                transition: ne
            }
        }
          , le = !(j || y === !1)
          , M = !!t && le
          , ue = t && C;
        return D(iv, {
            "data-framer-component-type": `NavigationContainerWrapper`,
            width: `100%`,
            height: `100%`,
            style: {
                position: `absolute`,
                transformStyle: `flat`,
                backgroundColor: `transparent`,
                overflow: `hidden`,
                zIndex: e || j || t && _ ? v : void 0,
                pointerEvents: void 0,
                visibility: i ? `visible` : `hidden`,
                perspective: ae
            },
            children: [e && x(iv, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: {
                    opacity: p && i ? 1 : 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c
            }), x(iv, {
                ...re,
                ...ce,
                transition: {
                    default: te,
                    originX: {
                        type: !1
                    },
                    originY: {
                        type: !1
                    },
                    originZ: {
                        type: !1
                    }
                },
                backgroundColor: `transparent`,
                backfaceVisible: j ? u : l,
                "data-framer-component-type": `NavigationContainer`,
                "data-framer-is-current-navigation-target": !!t,
                style: {
                    pointerEvents: void 0,
                    opacity: ue || e || t && _ ? 1 : 0
                },
                "data-is-present": le ? void 0 : !1,
                ref: ee,
                children: x(pv.Provider, {
                    value: ee,
                    children: x(gv.Provider, {
                        value: M,
                        children: x(vv, {
                            isCurrent: M,
                            isOverlayed: r,
                            children: x(hv, {
                                isLead: t,
                                animatesLayout: !!_,
                                transition: te,
                                isExiting: !le,
                                isOverlayed: r,
                                id: b,
                                children: o
                            })
                        })
                    })
                })
            })]
        })
    }, oo),
    bv = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: .5,
        originY: .5,
        originZ: 0,
        opacity: 1
    },
    xv = class {
        constructor() {
            P(this, `warning`, () => {
                rr(`The Navigator API is only available inside of Framer: https://www.framer.com/`)
            }
            ),
            P(this, `goBack`, () => this.warning()),
            P(this, `instant`, () => this.warning()),
            P(this, `fade`, () => this.warning()),
            P(this, `push`, () => this.warning()),
            P(this, `modal`, () => this.warning()),
            P(this, `overlay`, () => this.warning()),
            P(this, `flip`, () => this.warning()),
            P(this, `customTransition`, () => this.warning()),
            P(this, `magicMotion`, () => this.warning())
        }
    }
    ,
    Sv = new xv,
    Cv = j(Sv),
    wv = {
        Fade: {
            exit: {
                opacity: 0
            },
            enter: {
                opacity: 0
            }
        },
        PushLeft: {
            exit: {
                x: `-30%`
            },
            enter: {
                x: `100%`
            }
        },
        PushRight: {
            exit: {
                x: `30%`
            },
            enter: {
                x: `-100%`
            }
        },
        PushUp: {
            exit: {
                y: `-30%`
            },
            enter: {
                y: `100%`
            }
        },
        PushDown: {
            exit: {
                y: `30%`
            },
            enter: {
                y: `-100%`
            }
        },
        Instant: {
            animation: {
                type: !1
            },
            enter: {
                opacity: 0
            }
        },
        Modal: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                center: !0
            },
            enter: {
                opacity: 0,
                scale: 1.2
            }
        },
        OverlayLeft: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                right: 0,
                top: 0,
                bottom: 0
            },
            enter: {
                x: `100%`
            }
        },
        OverlayRight: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                left: 0,
                top: 0,
                bottom: 0
            },
            enter: {
                x: `-100%`
            }
        },
        OverlayUp: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                bottom: 0,
                left: 0,
                right: 0
            },
            enter: {
                y: `100%`
            }
        },
        OverlayDown: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                top: 0,
                left: 0,
                right: 0
            },
            enter: {
                y: `-100%`
            }
        },
        FlipLeft: {
            backfaceVisible: !1,
            exit: {
                rotateY: -180
            },
            enter: {
                rotateY: 180
            }
        },
        FlipRight: {
            backfaceVisible: !1,
            exit: {
                rotateY: 180
            },
            enter: {
                rotateY: -180
            }
        },
        FlipUp: {
            backfaceVisible: !1,
            exit: {
                rotateX: 180
            },
            enter: {
                rotateX: -180
            }
        },
        FlipDown: {
            backfaceVisible: !1,
            exit: {
                rotateX: -180
            },
            enter: {
                rotateX: 180
            }
        },
        MagicMotion: {
            withMagicMotion: !0
        }
    },
    Tv = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null
    }),
    Ev = gp(bv),
    Dv = d.createContext(void 0),
    Ov = d.createContext(void 0),
    kv = ( () => {
        var e, t, r, i, a, o, s;
        return t = class extends n {
            constructor(t) {
                var n;
                super(t),
                fe(this, r),
                fe(this, e, null),
                P(this, `state`, Tv()),
                fe(this, o, e => {
                    if (!this.props.enabled && this.state.history.length > 0)
                        return;
                    let t = po(this.state, e);
                    if (!t)
                        return;
                    let {skipLayoutAnimation: n} = this.props
                      , r = t.history[t.current]
                      , i = e.type === `add` && e.transition.withMagicMotion || e.type === `forward` && r?.transition.withMagicMotion || e.type === `remove` && !!t.previousTransition
                      , a = () => {
                        var e;
                        this.setState(t),
                        r?.key && ((e = this.context) == null || e.call(this, r.key))
                    }
                    ;
                    n && !i ? n(a) : a()
                }
                ),
                P(this, `goBack`, () => {
                    var t;
                    if (!pe(this, r, a).call(this))
                        return me(this, e, (t = globalThis.event)?.timeStamp || null),
                        this.state.currentOverlay === -1 ? N(this, o).call(this, {
                            type: `remove`
                        }) : N(this, o).call(this, {
                            type: `removeOverlay`
                        })
                }
                );
                let i = this.props.children;
                if (!i || !ni(i) || !ti(i))
                    return;
                let s = {
                    ...wv.Instant
                }
                  , c = (n = i.key)?.toString() || `stack-${this.state.historyItemId + 1}`
                  , l = {
                    type: `add`,
                    key: c,
                    transition: s,
                    component: i
                }
                  , u = po(this.state, l);
                u && (this.state = u)
            }
            componentDidMount() {
                var e;
                let t = this.state.history[this.state.current];
                t && ((e = this.context) == null || e.call(this, t.key))
            }
            UNSAFE_componentWillReceiveProps(e) {
                var t;
                let n = e.children;
                if (!ni(n) || !ti(n))
                    return;
                let i = (t = n.key)?.toString();
                i && (this.state.history.length === 0 ? pe(this, r, s).call(this, n, wv.Instant) : N(this, o).call(this, {
                    type: `update`,
                    key: i,
                    component: n
                }))
            }
            componentWillUnmount() {
                var e, t;
                (t = (e = this.props).resetProjection) == null || t.call(e)
            }
            instant(e) {
                pe(this, r, s).call(this, e, wv.Instant, void 0)
            }
            fade(e, t) {
                pe(this, r, s).call(this, e, wv.Fade, t)
            }
            push(e, t) {
                pe(this, r, s).call(this, e, lo(t), t)
            }
            modal(e, t) {
                pe(this, r, s).call(this, e, wv.Modal, t)
            }
            overlay(e, t) {
                pe(this, r, s).call(this, e, uo(t), t)
            }
            flip(e, t) {
                pe(this, r, s).call(this, e, fo(t), t)
            }
            magicMotion(e, t) {
                pe(this, r, s).call(this, e, wv.MagicMotion, t)
            }
            customTransition(e, t) {
                pe(this, r, s).call(this, e, t)
            }
            render() {
                var e, t, n, a, o;
                let s = pe(this, r, i).call(this, {
                    overCurrentContext: !1
                })
                  , c = pe(this, r, i).call(this, {
                    overCurrentContext: !0
                })
                  , l = Oo(c)
                  , u = c.current > -1
                  , d = this.state.history.length === 1
                  , f = [];
                for (let[r,i] of Object.entries(this.state.containers)) {
                    let c = this.state.containerIndex[r];
                    B(c !== void 0, `Container's index must be registered`);
                    let l = this.state.containerVisualIndex[r];
                    B(l !== void 0, `Container's visual index must be registered`);
                    let p = this.state.containerIsRemoved[r]
                      , m = this.state.history[c]
                      , h = this.state.transitionForContainer[r]
                      , g = c === this.state.current
                      , _ = c === this.state.previous
                      , v = g ? !1 : p
                      , y = (e = m?.transition)?.withMagicMotion || g && !!this.state.previousTransition;
                    f.push(x(yv, {
                        id: r,
                        index: l,
                        isInitial: d,
                        isCurrent: g,
                        isPrevious: _,
                        isOverlayed: u,
                        visible: g || _,
                        position: (t = m?.transition)?.position,
                        instant: Ro(c, s),
                        transitionProps: h,
                        animation: Lo(c, s),
                        backfaceVisible: Fo(c, s),
                        exitAnimation: (n = m?.transition)?.animation,
                        exitBackfaceVisible: (a = m?.transition)?.backfaceVisible,
                        exitProps: (o = m?.transition)?.enter,
                        withMagicMotion: y,
                        areMagicMotionLayersPresent: v ? !1 : void 0,
                        children: x(Wa, {
                            children: Bo({
                                component: i,
                                transition: m?.transition
                            })
                        })
                    }, r))
                }
                let p = this.state.overlayStack.map( (e, t) => x(yv, {
                    isLayeredContainer: !0,
                    isCurrent: t === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: Po(t, c),
                    transitionProps: Io(t, c),
                    instant: Ro(t, c, !0),
                    animation: Lo(t, c),
                    exitProps: e.transition.enter,
                    visible: zo(t, c),
                    backdropColor: Mo(e.transition),
                    backfaceVisible: No(t, c),
                    onTapBackdrop: Vo(e.transition, this.goBack),
                    index: this.state.current + 1 + t,
                    children: Bo({
                        component: e.component,
                        transition: e.transition
                    })
                }, e.key));
                return x(iv, {
                    "data-framer-component-type": `NavigationRoot`,
                    top: 0,
                    left: 0,
                    width: `100%`,
                    height: `100%`,
                    position: `relative`,
                    style: {
                        overflow: `hidden`,
                        backgroundColor: `unset`,
                        pointerEvents: void 0,
                        ...this.props.style
                    },
                    children: x(Cv.Provider, {
                        value: this,
                        children: D(Ov.Provider, {
                            value: d,
                            children: [x(yv, {
                                isLayeredContainer: !0,
                                position: void 0,
                                initialProps: {},
                                instant: !1,
                                transitionProps: ko(l),
                                animation: Ao(l),
                                backfaceVisible: jo(l),
                                visible: !0,
                                backdropColor: void 0,
                                onTapBackdrop: void 0,
                                index: 0,
                                children: x(Jr, {
                                    children: x(sv, {
                                        children: x(te, {
                                            presenceAffectsLayout: !1,
                                            children: f
                                        })
                                    })
                                })
                            }), x(te, {
                                children: p
                            })]
                        })
                    })
                })
            }
        }
        ,
        e = new WeakMap,
        r = new WeakSet,
        i = function(e) {
            let {current: t, previous: n, currentOverlay: r, previousOverlay: i} = this.state;
            return e.overCurrentContext ? {
                current: r,
                previous: i,
                history: this.state.overlayStack
            } : {
                current: t,
                previous: n,
                history: this.state.history
            }
        }
        ,
        a = function() {
            return globalThis.event ? N(this, e) === globalThis.event.timeStamp : !1
        }
        ,
        o = new WeakMap,
        s = function(t, n, i) {
            var s, c;
            if (pe(this, r, a).call(this) || (me(this, e, (s = globalThis.event)?.timeStamp || null),
            !t || !ni(t) || !ti(t)))
                return;
            let l = {
                ...n,
                ...i
            }
              , u = !!l.overCurrentContext;
            if (u)
                return N(this, o).call(this, {
                    type: `addOverlay`,
                    transition: l,
                    component: t
                });
            let d = (c = t.key)?.toString() || `stack-${this.state.historyItemId + 1}`;
            N(this, o).call(this, {
                type: `add`,
                key: d,
                transition: l,
                component: t
            })
        }
        ,
        P(t, `defaultProps`, {
            enabled: !0
        }),
        P(t, `contextType`, Dv),
        t
    }
    )(),
    Av = {
        stiffness: 500,
        damping: 50,
        restDelta: 1,
        type: `spring`
    },
    jv = ge(pp(), 1),
    Mv = ge(pp(), 1),
    Nv = ge(pp(), 1),
    Pv = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    Fv = Symbol(`private`),
    Iv = ( () => {
        function e(e={}, t=!1, n=!0) {
            let r = {
                [Fv]: {
                    makeAnimatables: t,
                    observeAnimatables: n,
                    observers: new Qm,
                    reset() {
                        for (let t in i)
                            if (Pv(i, t)) {
                                let n = Pv(e, t) ? o_(e)[t] : void 0;
                                n === void 0 ? delete i[t] : i[t] = n
                            }
                    },
                    transactions: new Set
                }
            }
              , i = new Proxy(r,Rv);
            return Object.assign(i, e),
            i
        }
        return e.resetObject = e => e[Fv].reset(),
        e.addObserver = (e, t) => e[Fv].observers.add(t),
        e
    }
    )(),
    Lv = class {
        constructor() {
            P(this, `set`, (e, t, n, r) => {
                if (t === Fv)
                    return !1;
                let i = e[Fv], a, o;
                if (ar(n) ? (a = n,
                o = a.get()) : o = n,
                i.makeAnimatables && typeof n != `function` && typeof n != `object` && !a && (a = $m(n)),
                i.observeAnimatables && a) {
                    let e = i.transactions;
                    a.onUpdate({
                        update: (t, n) => {
                            n && e.add(n),
                            i.observers.notify({
                                value: r
                            }, n)
                        }
                        ,
                        finish: t => {
                            e.delete(t) && i.observers.finishTransaction(t)
                        }
                    })
                }
                let s = !1
                  , c = !0
                  , l = o_(e)[t];
                if (l !== void 0) {
                    ar(l) ? (c = l.get() !== o,
                    l.set(o)) : (c = l !== o,
                    o_(e)[t] = o);
                    let n = typeof o == `object` && !!o;
                    (Array.isArray(o) || n) && (c = !0),
                    s = !0
                } else
                    a && (n = a),
                    s = Reflect.set(e, t, n);
                return c && i.observers.notify({
                    value: r
                }),
                s
            }
            ),
            P(this, `get`, (e, t, n) => {
                if (t === Fv)
                    return o_(e)[t];
                let r = Reflect.get(e, t, n);
                return typeof r == `function` ? r.bind(n) : r
            }
            )
        }
        deleteProperty(e, t) {
            let n = Reflect.deleteProperty(e, t);
            return e[Fv].observers.notify({
                value: e
            }),
            n
        }
        ownKeys(e) {
            let t = Reflect.ownKeys(e)
              , n = t.indexOf(Fv);
            return n !== -1 && t.splice(n, 1),
            t
        }
        getOwnPropertyDescriptor(e, t) {
            if (t !== Fv)
                return Reflect.getOwnPropertyDescriptor(e, t)
        }
    }
    ,
    Rv = new Lv,
    zv = `opacity`,
    Bv = ( () => {
        function e(t={}) {
            let n = Iv(t, !1, !1);
            return e.addData(n),
            n
        }
        return e._stores = [],
        e.addData = t => {
            e._stores.push(t)
        }
        ,
        e.reset = () => {
            e._stores.forEach(e => Iv.resetObject(e))
        }
        ,
        e.addObserver = (e, t) => Iv.addObserver(e, t),
        e
    }
    )(),
    Vv = Bv,
    Hv = {
        update: 0
    },
    Uv = d.createContext({
        update: NaN
    }),
    Wv = class extends n {
        constructor() {
            super(...arguments),
            P(this, `observers`, []),
            P(this, `state`, Hv),
            P(this, `taskAdded`, !1),
            P(this, `frameTask`, () => {
                this.setState({
                    update: this.state.update + 1
                }),
                this.taskAdded = !1
            }
            ),
            P(this, `observer`, () => {
                this.taskAdded || (this.taskAdded = !0,
                Sh.addFrameTask(this.frameTask))
            }
            )
        }
        componentWillUnmount() {
            this.observers.map(e => e()),
            Vv.reset()
        }
        render() {
            let {children: e} = this.props;
            return this.observers.map(e => e()),
            this.observers = [],
            Vv._stores.forEach(e => {
                let t = Vv.addObserver(e, this.observer);
                this.observers.push(t)
            }
            ),
            x(Uv.Provider, {
                value: {
                    ...this.state
                },
                children: e
            })
        }
    }
    ,
    Gv = ge(pp(), 1),
    Kv = `__framer__`,
    qv = ( () => Kv.length)(),
    Jv = d.createContext(void 0),
    Yv = d.createContext(void 0),
    Xv = `style[data-framer-css-ssr-minified]`,
    Zv = ( () => {
        var e;
        if (!S_())
            return new Set;
        let t = (e = document.querySelector(Xv))?.getAttribute(`data-framer-components`);
        return t ? new Set(t.split(` `)) : new Set
    }
    )(),
    Qv = `data-framer-css-ssr`,
    $v = (e, t, n) => d.forwardRef( (r, i) => {
        let {sheet: a, cache: o} = d.useContext(Yv) ?? {}
          , s = n;
        if (!S_()) {
            yt(t) && (t = t(J.current()));
            let n = Array.isArray(t) ? t.join(`
`) : t;
            return D(y, {
                children: [x(`style`, {
                    [Qv]: !0,
                    "data-framer-component": s,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }), x(e, {
                    ...r,
                    ref: i
                })]
            })
        }
        return p( () => {
            if (s && Zv.has(s))
                return;
            let e = yt(t) ? t(J.current()) : Array.isArray(t) ? t : t.split(`
`);
            e.forEach(e => e && Mi(e, a, o))
        }
        , []),
        x(e, {
            ...r,
            ref: i
        })
    }
    ),
    ey = d.createContext(void 0),
    ty = `ssr-variant`,
    ny = () => () => {}
    ,
    ry = () => !0,
    iy = () => !1,
    ay = d.forwardRef(function(e, t) {
        let n = es(t)
          , r = d.useContext(ey)
          , i = d.useSyncExternalStore(ny, iy, ry)
          , a = Zr( () => i ? S_() ? 1 : 2 : 0)
          , o = d.useContext(Jv);
        return Ga( () => {
            let {breakpoint: t, overrides: i, children: s, ...c} = e;
            if (!o)
                return console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
                n(s, c);
            let {primaryVariantId: l, variantClassNames: u} = o
              , d = r?.primaryVariantId === l ? r?.variants : void 0;
            switch (a) {
            case 0:
                return n(s, us(t, c, i));
            case 1:
                return rs(i, s, c, u, l, d, n, t);
            case 2:
                return rs(i, s, c, u, l, d, $o, void 0);
            default:
                V(a)
            }
        }
        , [o, r, n, e])
    }),
    oy = ( () => $v(ay, `.${ty} { display: contents }`, `PropertyOverrides`))(),
    sy = `default`,
    cy = new Set([sy]),
    uy = class {
        constructor() {
            P(this, `entries`, new Map),
            fe(this, ly, {})
        }
        set(e, t, n, r) {
            switch (t) {
            case `transformTemplate`:
                B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, {
                    transformTemplate: n,
                    legacy: !0
                });
                break;
            case `initial`:
            case `animate`:
                B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, {
                    [t]: n,
                    legacy: !0
                });
                break;
            default:
                break
            }
        }
        setHash(e, t=sy, n) {
            let r = this.entries.get(e) ?? {}
              , i = r[t] ?? {};
            r[t] = n === null ? null : {
                ...i,
                ...n
            },
            this.entries.set(e, r)
        }
        variantHash(e, t) {
            if (e === t?.primaryVariantId)
                return sy;
            let n = N(this, ly)[e];
            if (n)
                return n;
            let r = t?.variantClassNames[e];
            return r ? N(this, ly)[e] = os(r) : sy
        }
        setAll(e, t=cy, n, r) {
            var i;
            if (n === null) {
                for (let n of t)
                    this.setHash(e, this.variantHash(n, r), null);
                return
            }
            let a = yt(n.transformTemplate) ? (i = n.transformTemplate)?.call(n, {}, fy) : void 0
              , o = n.__framer__presenceInitial ?? n.initial
              , s = n.__framer__presenceAnimate ?? n.animate
              , c = {
                initial: z(o) ? o : void 0,
                animate: z(s) ? s : void 0,
                transformTemplate: L(a) ? a : void 0
            };
            for (let n of t)
                this.setHash(e, this.variantHash(n, r), c)
        }
        clear() {
            this.entries.clear()
        }
        toObject() {
            return Object.fromEntries(this.entries)
        }
    }
    ,
    ly = new WeakMap,
    dy = new uy,
    fy = `__Appear_Animation_Transform__`,
    py = `data-framer-appear-id`,
    my = `data-framer-appear-animation`,
    hy = e => {
        let t = Ui();
        if (t)
            return {
                animate: fs(e.animate) ? e.animate : void 0,
                initial: fs(e.initial) ? e.initial : void 0,
                exit: void 0
            }
    }
    ,
    gy = [`opacity`, `x`, `y`, `scale`, `rotate`, `rotateX`, `rotateY`, `skewX`, `skewY`, `transformPerspective`],
    _y = e => ({
        x: Oe(e?.x ?? 0),
        y: Oe(e?.y ?? 0),
        opacity: Oe(e?.opacity ?? 1),
        scale: Oe(e?.scale ?? 1),
        rotate: Oe(e?.rotate ?? 0),
        rotateX: Oe(e?.rotateX ?? 0),
        rotateY: Oe(e?.rotateY ?? 0),
        skewX: Oe(e?.skewX ?? 0),
        skewY: Oe(e?.skewY ?? 0),
        transformPerspective: Oe(e?.transformPerspective ?? 0)
    }),
    vy = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0
    },
    yy = {
        willChange: `transform`
    },
    Object.freeze(yy),
    by = {},
    Object.freeze(by),
    xy = new Set([`loopEffectEnabled`, `loopTransition`, `loop`, `loopRepeatType`, `loopRepeatDelay`, `loopPauseOffscreen`]),
    Sy = () => {
        let e = S();
        return O( () => () => {
            clearTimeout(e.current)
        }
        , []),
        async t => new Promise(n => {
            e.current = setTimeout( () => {
                n(!0)
            }
            , t * 1e3)
        }
        )
    }
    ,
    Cy = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`]),
    wy = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`]),
    Ty = 1,
    Ey = 4,
    Dy = new Set([`threshold`, `animateOnce`, `opacity`, `targetOpacity`, `x`, `y`, `scale`, `transition`, `rotate`, `rotateX`, `rotateY`, `perspective`, `enter`, `exit`, `animate`, `styleAppearEffectEnabled`, `targets`, `scrollDirection`]),
    Oy = [`animate`, `animate`],
    ky = {
        inputRange: [],
        outputRange: []
    },
    Ay = new Set([`transformViewportThreshold`, `styleTransformEffectEnabled`, `transformTargets`, `spring`, `transformTrigger`]),
    jy = (e, t) => {
        var n;
        let r = (n = e?.[0])?.target;
        return t ? {
            opacity: r?.opacity ?? 1
        } : r
    }
    ,
    My = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: []
    }),
    Ny = [0, 1],
    Py = {
        parallax: Cy,
        styleAppear: Dy,
        styleTransform: Ay,
        loop: xy,
        presence: wy
    },
    Fy = gp(Py),
    Iy = e => e.reduce( (e, t) => e += t, 0),
    Ly = e => e.reduce( (e, t) => e *= t, 1),
    Ry = `current`,
    zy = e => d.forwardRef( (t, n) => {
        var r;
        if (t.__withFX)
            return x(e, {
                ...t,
                animate: void 0,
                initial: void 0,
                exit: void 0,
                ref: n
            });
        let i = hy(t);
        if (i)
            return x(e, {
                ...t,
                ...i,
                ref: n
            });
        let {parallax: a={}, styleAppear: o={}, styleTransform: s={}, presence: c={}, loop: l={}, forwardedProps: u, targetOpacityValue: f, withPerspective: p, inSmartComponent: m=!1} = Ps(t)
          , h = Ya(n)
          , {values: g, style: _} = bs(c, h, m, t.style, t[ke])
          , {values: v, style: y} = _s(a, h, (r = t.style)?.visibility)
          , {values: b, style: S} = Ms(s, h)
          , {values: C, style: w} = Os(o, h)
          , {values: T, style: E} = hs(l, h)
          , D = d.useMemo( () => {
            let e = new ae(f ?? 1);
            return {
                scale: [C.scale, T.scale, g.scale, b.scale],
                opacity: [C.opacity, T.opacity, g.opacity, e, b.opacity],
                x: [C.x, T.x, g.x, b.x],
                y: [C.y, T.y, v.y, g.y, b.y],
                rotate: [C.rotate, T.rotate, g.rotate, b.rotate],
                rotateX: [C.rotateX, T.rotateX, g.rotateX, b.rotateX],
                rotateY: [C.rotateY, T.rotateY, g.rotateY, b.rotateY],
                skewX: [C.skewX, T.skewX, g.skewX, b.skewX],
                skewY: [C.skewY, T.skewY, g.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, C.transformPerspective]
            }
        }
        , [f, b, v, C, T, g]);
        Is(t.style, D);
        let O = Ge(D.scale, Ly)
          , k = Ge(D.opacity, Ly)
          , A = Ge(D.x, Iy)
          , ee = Ge(D.y, Iy)
          , j = Ge(D.rotate, Iy)
          , te = Ge(D.rotateX, Iy)
          , ne = Ge(D.rotateY, Iy)
          , re = Ge(D.skewX, Iy)
          , ie = Ge(D.skewY, Iy)
          , oe = Ge(D.transformPerspective, Iy)
          , {drag: se, dragConstraints: ce} = u;
        pa(se && Fs(ce) ? ce : void 0);
        let le = {
            opacity: k,
            scale: O,
            x: A,
            y: ee,
            rotate: j,
            rotateX: te,
            rotateY: ne,
            skewX: re,
            skewY: ie
        };
        St(p) && (le.transformPerspective = oe);
        let M = Ls(t.animate) ? t.animate : void 0
          , ue = Ls(t.initial) ? t.initial : void 0
          , de = Ls(t.exit) ? t.exit : void 0
          , fe = m && !c.presenceInitial ? {
            initial: ue,
            animate: M,
            exit: de
        } : {};
        return x(e, {
            ...u,
            ...fe,
            __withFX: !0,
            style: {
                ...t.style,
                ...y,
                ...S,
                ...E,
                ...le,
                ...w,
                ..._
            },
            values: g,
            ref: h
        })
    }
    ),
    By = zy,
    Vy = d.createContext({}),
    Hy = d.forwardRef(function({width: e, height: t, y: n, children: r, ...i}, a) {
        let o = d.useMemo( () => ({
            width: e,
            height: t,
            y: n
        }), [e, t, n])
          , s = es(a);
        return x(Vy.Provider, {
            value: o,
            children: s(r, i)
        })
    }),
    Uy = e => d.forwardRef( (t, n) => {
        let r = da(t);
        return x(e, {
            layoutId: r,
            ...t,
            layoutIdKey: void 0,
            duplicatedFrom: void 0,
            ref: n
        })
    }
    ),
    Wy = !1,
    Gy = class extends n {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                error: void 0
            })
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        componentDidCatch(e, t) {
            if (!zs(e))
                return;
            let n = t?.componentStack;
            console.error(`Caught an error in SynchronousSuspenseErrorBoundary:

`, e, `

Component stack:
`, n, `

This error indicates a state update wasn’t wrapped with startTransition. Some of the UI might flash as a result. If you are the author of this website, check recently added custom code, and if the issue persists, report it to the Framer team via https://www.framer.com/contact/.`);
            let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
            It(`published_site_load_recoverable_error`, {
                message: String(e),
                stack: r,
                componentStack: r ? void 0 : n
            })
        }
        render() {
            let e = this.state.error;
            if (e === void 0)
                return this.props.children;
            if (!zs(e))
                throw e;
            return Wy = !0,
            this.props.children
        }
    }
    ,
    Ky = ( () => k === void 0 ? null : new Promise( () => {}
    ))(),
    qy = x(Bs, {}),
    Jy = j(!1),
    Jy.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`,
    Yy = x(Hs, {}),
    Xy = class extends n {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                hasError: !1
            })
        }
        static getDerivedStateFromError() {
            return {
                hasError: !0
            }
        }
        componentDidCatch(e, t) {
            Ws(this.props.getErrorMessage(), t?.componentStack),
            Us(e, t)
        }
        render() {
            let {children: e, fallback: t=Yy} = this.props
              , {hasError: n} = this.state;
            return n ? t : e
        }
    }
    ,
    Zy = class extends n {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                hasError: !1
            })
        }
        componentDidCatch(e, t) {
            let n = t?.componentStack;
            console.error(`Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`, n),
            this.setState({
                hasError: !0
            }),
            Us(e, t)
        }
        render() {
            let {children: e} = this.props
              , {hasError: t} = this.state;
            return t ? null : e
        }
    }
    ,
    Qy = ( () => d.createContext(void 0))(),
    $y = `code-crash:`,
    eb = d.forwardRef( ({children: e, layoutId: t, as: n, scopeId: r, nodeId: i, isAuthoredByUser: a, isModuleExternal: o, inComponentSlot: s, ...c}, l) => {
        let u = Zr( () => t ? `${t}-container` : void 0)
          , f = ia(n)
          , p = d.Children.map(e, e => d.isValidElement(e) ? d.cloneElement(e, {
            layoutId: t
        }) : e)
          , m = ic(p, r, i, a, o, s);
        return x(f, {
            layoutId: u,
            ...c,
            ref: l,
            children: x(P_.Provider, {
                value: !0,
                children: x(Xr, {
                    enabled: !1,
                    children: x(ne, {
                        id: t ?? ``,
                        inherit: `id`,
                        children: m
                    })
                })
            })
        })
    }
    ),
    tb = Uy(eb),
    nb = d.forwardRef( (e, t) => {
        let {as: n, children: r, scopeId: i, nodeId: a, isAuthoredByUser: o, rendersWithMotion: s, isModuleExternal: c, inComponentSlot: l, ...u} = e
          , d = ic(r, i, a, o, c, l)
          , f = e.as ?? `div`;
        if (e.rendersWithMotion) {
            let n = ia(f);
            return x(n, {
                ...u,
                ref: t,
                style: e.style,
                children: d
            })
        } else {
            let n = f
              , {layoutId: r, layoutDependency: i, ...a} = u;
            return x(n, {
                ...a,
                ref: t,
                style: e.style,
                children: d
            })
        }
    }
    ),
    rb = j({
        onRegisterCursors: () => () => {}
        ,
        registerCursors: () => {}
    }),
    ib = `framer-cursor-none`,
    ab = `framer-pointer-events-none`,
    ob = o(function({children: e}) {
        let t = Zr( () => {
            let e = new Set
              , t = {}
              , n = new Map;
            return {
                onRegisterCursors: n => (n(t),
                e.add(n),
                () => e.delete(n)),
                registerCursors: (r, i) => {
                    n.set(i, Object.keys(r)),
                    t = ac(n, t, r);
                    for (let n of e)
                        n(t);
                    return () => {
                        n.delete(i)
                    }
                }
            }
        }
        )
          , n = Ve();
        return D(rb.Provider, {
            value: t,
            children: [e, !n && x(ub, {})]
        })
    }),
    sb = ( () => $v(ob, [`.${ib}, .${ib} * { cursor: none !important; }`, `.${ab}, .${ab} * { pointer-events: none !important; }`], `framer-lib-cursors-host`))(),
    cb = ( () => ({
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 13,
        pointerEvents: `none`
    }))(),
    lb = `data-framer-portal-id`,
    ub = o(function() {
        let {onRegisterCursors: e} = w(rb)
          , [t,n] = ee(!1)
          , r = ze(0)
          , i = ze(0)
          , a = ze(0)
          , o = S(null)
          , s = S({
            cursors: {},
            cursorHash: void 0
        })
          , l = fa();
        f( () => {
            let e = K.matchMedia(`(any-hover: none)`);
            function t(e) {
                e.matches ? c( () => n(!1)) : n(!0)
            }
            return e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
                e.removeEventListener(`change`, t)
            }
        }
        , []),
        O( () => {
            if (!t)
                return;
            let e = 0
              , n = 0;
            function c() {
                r.set(e),
                i.set(n),
                _e(a, 1, {
                    type: `tween`,
                    duration: .2
                })
            }
            let u = () => {
                if (uc(s.current.cursors))
                    return;
                let t = lc(e, n);
                t !== s.current.cursorHash && (s.current.cursorHash = t,
                be.update( () => l()))
            }
            ;
            function d(t) {
                if (t.pointerType === `touch`) {
                    ye(u);
                    return
                }
                be.read(u, !0),
                e = t.clientX,
                n = t.clientY,
                be.update(c)
            }
            function f(e) {
                if (e.target === o.current || !o.current)
                    return;
                let t = new PointerEvent(e.type,{
                    bubbles: !0,
                    cancelable: e.cancelable,
                    pointerType: e.pointerType,
                    pointerId: e.pointerId,
                    composed: e.composed,
                    isPrimary: e.isPrimary,
                    buttons: e.buttons,
                    button: e.button
                });
                be.update( () => {
                    var e;
                    (e = o.current) == null || e.dispatchEvent(t)
                }
                )
            }
            return K.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            be.read(u, !0),
            () => {
                K.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                ye(u)
            }
        }
        , [a, r, i, l, t]),
        O( () => {
            if (!t)
                return;
            function e() {
                _e(a, 0, {
                    type: `tween`,
                    duration: .2
                })
            }
            return document.addEventListener(`mouseleave`, e),
            K.addEventListener(`blur`, e),
            () => {
                document.removeEventListener(`mouseleave`, e),
                K.removeEventListener(`blur`, e)
            }
        }
        , [a, t]),
        f( () => {
            function t(e) {
                s.current.cursors = e,
                s.current.cursorHash = uc(e) ? null : lc(r.get(), i.get()),
                l()
            }
            let n = e(t);
            return () => {
                n(),
                document.body.classList.toggle(ib, !1)
            }
        }
        , [r, i, e, l]);
        let {cursors: u, cursorHash: d} = s.current
          , p = d ? u[d] : null
          , m = oc(p);
        f( () => {
            t && document.body.classList.toggle(ib, m)
        }
        , [m, t]);
        let h = p?.component
          , g = p?.transition ?? {
            duration: 0
        }
          , _ = We(r, g)
          , v = We(i, g)
          , y = Ge( () => {
            var e;
            return _.get() + ((e = p?.offset)?.x ?? 0)
        }
        )
          , b = Ge( () => {
            var e;
            return v.get() + ((e = p?.offset)?.y ?? 0)
        }
        )
          , C = p?.alignment
          , T = p?.placement
          , D = E( (e, t) => `translate(${cc(T, C)}) ${t}`, [C, T]);
        return !t || !p || !h ? null : x(h, {
            transformTemplate: D,
            style: {
                ...cb,
                x: y,
                y: b,
                opacity: a
            },
            globalTapTarget: !0,
            variant: p?.variant,
            ref: o,
            className: ab
        })
    }),
    db = d.forwardRef(function({Component: e, ...t}, n) {
        return e ? x(e, {
            ...t,
            ref: n
        }) : null
    }),
    fb = class extends n {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                error: void 0
            }),
            P(this, `message`, `Made UI non-interactive due to an error`),
            P(this, `messageFatal`, `Fatal error`),
            P(this, `messageReport`, `If you are the author of this website, please report this issue to the Framer team via https://www.framer.com/contact/`)
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        componentDidCatch(e) {
            k.__framer_hadFatalError = !0,
            `cause`in e && (e = e.cause),
            console.error(`${Cp ? this.message : this.messageFatal}. ${this.messageReport}. Error:

`, e);
            let t = Math.random();
            if (t > .5)
                return;
            let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
            It(`published_site_load_error`, {
                message: String(e),
                stack: n
            })
        }
        render() {
            var e, t;
            let n = this.state.error;
            if (!n)
                return this.props.children;
            let r = `cause`in n ? n.cause : n
              , i = /-->/gu
              , a = `--!>`
              , o = Cp && (e = document.getElementById(`main`))?.innerHTML || ``;
            return x(`div`, {
                style: {
                    display: `contents`
                },
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                    __html: `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${r.message.replace(i, a)}". ${this.messageReport}: --><!-- Stack: ${(t = n.stack)?.replace(i, `--!>`)} -->` + o
                }
            })
        }
    }
    ,
    pb = class e {
        constructor(e) {
            this.resolver = e,
            P(this, `status`)
        }
        static is(t) {
            return t instanceof e
        }
        preload() {
            if (this.status) {
                let e = this.status;
                return e.type === `pending` ? e.promise : void 0
            }
            let e = this.resolver().then(e => {
                this.status = {
                    type: `fulfilled`,
                    value: e
                }
            }
            , e => {
                this.status = {
                    type: `rejected`,
                    error: e
                }
            }
            );
            return this.status = {
                type: `pending`,
                promise: e
            },
            e
        }
        read() {
            let e = this.status;
            if (!e)
                throw Error(`Need to call preload() before read()`);
            switch (e.type) {
            case `pending`:
                throw Error(`Need to wait for preload() to resolve`);
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.error;
            default:
                V(e)
            }
        }
        async readAsync() {
            let e = this.preload();
            return e && await e,
            this.read()
        }
        use() {
            let e = this.preload();
            if (e)
                throw e;
            return this.read()
        }
    }
    ,
    mb = `webPageId`,
    hb = 500,
    gb = .9,
    _b = 1.7,
    vb = 4,
    yb = 1 / 0,
    bb = new WeakMap,
    xb = new Set,
    Sb = new Map,
    Cb = !Ap || typeof IntersectionObserver > `u` ? null : gc(),
    wb = Symbol(`noLocale`),
    Tb = new Map,
    Eb = `element`,
    Db = `collection`,
    Ob = `collectionItemId`,
    kb = `pathVariables`,
    Ab = `framer/page-link,`,
    jb = /:([a-z]\w*)/gi,
    Mb = j(void 0),
    Nb = class {
        constructor() {
            P(this, `collectedLinks`, new Map),
            P(this, `nestingInfo`, new Map)
        }
        clear() {
            this.collectedLinks.clear(),
            this.nestingInfo.clear()
        }
        getLinks() {
            let e = new Map;
            for (let[t,n] of this.nestingInfo) {
                let r = this.collectedLinks.get(t);
                B(r, `Outer link not found: ${t}`);
                let i = Array.from(n).map(e => {
                    let t = this.collectedLinks.get(e);
                    return B(t, `Inner link not found: ${e}`),
                    t
                }
                );
                e.set(r, i)
            }
            return e
        }
        collectNestedLink(e, t) {
            if (Sp && !j_() || !e.nodeId || !t.nodeId)
                return;
            this.collectedLinks.set(Lc(e), e),
            this.collectedLinks.set(Lc(t), t);
            let n = this.nestingInfo.get(Lc(e)) ?? new Set;
            n.add(Lc(t)),
            this.nestingInfo.set(Lc(e), n)
        }
    }
    ,
    Pb = new Nb,
    Fb = j(void 0),
    Ib = mc(s(function({children: e, href: t, openInNewTab: n, smoothScroll: i, clickTrackingId: a, relValues: o, preserveParams: s, nodeId: c, scopeId: l, motionChild: u, ...d}, f) {
        let p = lt()
          , m = dt()
          , h = Mc()
          , {activeLocale: g} = En()
          , _ = Wc({
            nodeId: c,
            clickTrackingId: a,
            router: p,
            href: t,
            activeLocale: g
        })
          , v = T( () => {
            if (!t)
                return {};
            let e = hc(t) ? t : Ac(t);
            if (!e)
                return {};
            if (L(e))
                return Jc(e, p, m, {
                    openInNewTab: n,
                    trackLinkClick: _,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: i
                }, h);
            let {routeId: r, href: a, elementId: c, pathVariables: l} = Cc(p, m, e, g, h)
              , u = Fc(n, !0);
            return {
                href: a,
                target: u,
                onClick: qc(p, r, a, _, c, l, i),
                navigate: () => Kc(p, r, c, l, i),
                "data-framer-page-link-current": m && Nc(m, e, h) || void 0
            }
        }
        , [t, p, g, h, n, m, i, _, o, s])
          , y = r(e) && `ref`in e
          , b = Ya(y ? e.ref : void 0);
        Xa(b, e => {
            var n;
            if (e === null)
                return;
            let r = hc(t) ? t : Ac(t);
            if (!r)
                return;
            let i = Ec(r, p, m);
            if (i)
                return (n = Cb)?.(i, e)
        }
        , [m, t, p]);
        let x = e
          , {navigate: S, ...C} = v
          , w = !!S
          , E = es(f);
        return x = E.cloneAsArray(x, e => Yc(e, {
            ...d,
            ...Xc(C, u, w)
        }, b)),
        x = zc(x, l, c, t, v, b),
        x
    })),
    Lb = class extends n {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                error: void 0
            })
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        render() {
            return this.state.error ? null : this.props.children
        }
    }
    ,
    Rb = `framer`,
    zb = 3,
    Bb = 30,
    Vb = 1e4,
    Hb = {
        state: `pending`
    },
    Ub = {
        state: `success`
    },
    Wb = {
        state: `incomplete`
    },
    Gb = {
        state: `complete`
    },
    Kb = {
        state: `error`
    },
    qb = d.createContext(void 0),
    Jb = d.forwardRef(function({action: e, children: t, redirectUrl: n, onSuccess: r, onError: i, onLoading: a, submitTrackingId: o, nodeId: s, ...l}, u) {
        let f = d.useRef(null)
          , p = u ?? f
          , m = lt()
          , h = dt()
          , g = Mc()
          , [_,v] = d.useReducer(il, Wb)
          , {activeLocale: y} = En()
          , b = w(qb)
          , S = d.useRef({
            onSuccess: r,
            onError: i,
            onLoading: a
        });
        S.current = {
            onSuccess: r,
            onError: i,
            onLoading: a
        };
        async function C(e) {
            var t, n;
            if (L(e)) {
                let n = wc(m, e, g);
                if (!n) {
                    sl(e, p);
                    return
                }
                let {routeId: r, elementId: i, pathVariables: a} = n;
                (t = m.navigate) == null || t.call(m, r, i, a);
                return
            }
            B(hc(e), `Expected link to be either a LinkToWebPage or a string`, e);
            let r = await Sc(m, h, e, y, g)
              , {routeId: i, elementId: a, pathVariables: o} = r;
            (n = m.navigate) == null || n.call(m, i, a, o)
        }
        let T = async t => {
            var r, i, a, l, u, d;
            if (t.preventDefault(),
            !e || !b)
                return;
            v({
                type: `submit`
            });
            let f = new FormData(t.currentTarget);
            await Mt({
                priority: `user-blocking`,
                continueAfter: `paint`
            }),
            nl(f, K.document);
            for (let[e,t] of f)
                t instanceof File && f.delete(e);
            try {
                (i = (r = S.current).onLoading) == null || i.call(r),
                rl({
                    router: m,
                    nodeId: s,
                    submitTrackingId: o,
                    activeLocale: y
                }),
                await ll(e, f, b),
                c( () => v({
                    type: `success`
                })),
                (l = (a = S.current).onSuccess) == null || l.call(a),
                n && await C(n)
            } catch (e) {
                c( () => v({
                    type: `error`
                })),
                (d = (u = S.current).onError) == null || d.call(u),
                console.error(e)
            }
        }
          , E = e => {
            let {target: t, currentTarget: n, key: r} = e
              , i = t instanceof HTMLTextAreaElement;
            i || r === `Enter` && n.checkValidity() && (e.preventDefault(),
            T(e))
        }
          , D = async e => {
            let t = e.currentTarget;
            await Mt({
                priority: `background`,
                continueAfter: `paint`
            }),
            c( () => v({
                type: cl(t) ? `incomplete` : `complete`
            }))
        }
        ;
        return x(De.form, {
            ...l,
            onSubmit: al(_) ? T : ol,
            onKeyDown: E,
            onChange: D,
            ref: p,
            children: t(_)
        })
    }),
    Yb = (e, t, n, r, i) => {
        let a = w(qb)
          , o = S()
          , s = S(!0);
        return O( () => {
            let c = async () => {
                var o;
                let s = null;
                if (e?.collectionId && r && n) {
                    let t = await (o = r[e.collectionId])?.call(r)
                      , [a] = Object.values(n);
                    t && typeof a == `string` && (s = await t.getRecordIdBySlug(a, i || void 0) ?? null)
                }
                return fl({
                    abTestId: e?.abTestId,
                    framerSiteId: a ?? null,
                    routeId: e?.abTestingVariantId ?? t,
                    routePath: e?.path,
                    collectionItemId: s,
                    localeCode: i?.code || null
                })
            }
            ;
            (async () => {
                if (o.current = await c(),
                s.current) {
                    s.current = !1;
                    return
                }
                It(`published_site_pageview`, o.current, `eager`)
            }
            )();
            let l = async e => {
                e.persisted && (o.current = await c(),
                It(`published_site_pageview`, o.current, `eager`))
            }
            ;
            return k.addEventListener(`pageshow`, l),
            () => {
                k.removeEventListener(`pageshow`, l)
            }
        }
        , [e, t, n, r, i, a]),
        o
    }
    ,
    Xb = `default`,
    Zb = {
        status: `loading`,
        data: void 0
    },
    Qb = () => {}
    ,
    ax = class e {
        constructor() {
            P(this, `responseValues`, new Map),
            fe(this, $b, new Map),
            fe(this, ex, new Set),
            fe(this, tx, new Map),
            fe(this, nx, new Map),
            fe(this, rx, new Map),
            fe(this, ix, new Map),
            P(this, `persistCache`, Xo( () => {
                let t = {};
                for (let[e,n] of this.responseValues) {
                    if (!n || n.status !== `success`)
                        continue;
                    let r = N(this, tx).get(e);
                    if (!r || r === 0)
                        continue;
                    let i = N(this, nx).get(e);
                    if (!i || i && Ol(i, r))
                        continue;
                    t[e] = [i, r, n.data]
                }
                try {
                    localStorage.setItem(e.cacheKey, JSON.stringify(t))
                } catch {}
            }
            , 500))
        }
        unmount() {
            for (let[e,t] of N(this, ix))
                clearInterval(t),
                N(this, ix).delete(e)
        }
        stopQueryRefetching(e) {
            let t = wl(e)
              , n = N(this, ix).get(t);
            n && (clearInterval(n),
            N(this, ix).delete(t))
        }
        startQueryRefetching(e) {
            let t = wl(e)
              , n = N(this, ix).get(t)
              , r = N(this, tx).get(t);
            if (n || !r)
                return;
            let i = K.setInterval( () => {
                if (document.visibilityState === `hidden`)
                    return;
                let n = N(this, nx).get(t);
                !r || !n || this.fetchWithCache({
                    ...e,
                    cacheDuration: r
                })
            }
            , r);
            N(this, ix).set(t, i)
        }
        hydrateCache() {
            try {
                let t = localStorage.getItem(e.cacheKey);
                if (!t)
                    return;
                let n = JSON.parse(t);
                if (typeof n != `object`)
                    throw Error(`Invalid cache data`);
                for (let e in n) {
                    let t = n[e];
                    if (!Array.isArray(t) || t.length !== 3)
                        throw Error(`Invalid cache data`);
                    let[r,i,a] = t;
                    if (Ol(r, i))
                        continue;
                    N(this, nx).set(e, r),
                    N(this, tx).set(e, i),
                    this.responseValues.set(e, {
                        status: `success`,
                        data: a
                    })
                }
            } catch {
                try {
                    localStorage.removeItem(e.cacheKey)
                } catch {}
            }
        }
        setResponseValue(e, t) {
            this.responseValues.set(e, t),
            this.persistCache();
            let n = N(this, $b).get(e);
            if (n)
                for (let e of n)
                    e()
        }
        async prefetch(e) {
            if (!S_() || !xc(e.url, !1))
                return;
            let t = wl(e);
            N(this, ex).add(t),
            await this.fetchWithCache(e);
            let n = this.getValue(t);
            if (!n || n.status === `loading`)
                throw Error(`Unexpected result status for prefetch`);
            let r = N(this, $b).get(t);
            for (let e of r ?? [])
                e();
            let i = Dl(n, e);
            return e.resultOutputType === `image` && L(i) && await xl(i).catch(Qb),
            i
        }
        async fetchWithCache(e) {
            if (!S_())
                return;
            let t = wl(e)
              , n = N(this, rx).get(t);
            if (n)
                return n;
            let r = N(this, nx).get(t)
              , i = r && Ol(r, e.cacheDuration);
            if (this.responseValues.has(t) && !i)
                return;
            let a = this.responseValues.get(t);
            a || this.setResponseValue(t, Zb);
            let o = async () => {
                try {
                    let n = await fetch(e.url, {
                        method: `GET`,
                        credentials: e.credentials
                    });
                    if (!n.ok) {
                        this.setResponseValue(t, {
                            status: `error`,
                            error: Error(`Invalid Response Status`),
                            data: void 0
                        });
                        return
                    }
                    let r = await n.json();
                    this.setResponseValue(t, {
                        status: `success`,
                        data: r
                    }),
                    N(this, nx).set(t, Date.now())
                } catch (e) {
                    this.setResponseValue(t, {
                        status: `error`,
                        error: e,
                        data: void 0
                    })
                }
            }
              , s = o();
            return N(this, rx).set(t, s),
            s.finally( () => {
                N(this, rx).delete(t)
            }
            ),
            s
        }
        getValue(e, t=!1) {
            if (!(t && !N(this, ex).has(e)))
                return this.responseValues.get(e)
        }
        subscribe(e, t, n=!1) {
            let {url: r, cacheDuration: i} = e;
            if (!xc(r, !1))
                return Qb;
            let a = wl(e)
              , o = N(this, tx).get(a);
            (!o || i < o) && N(this, tx).set(a, i),
            n || (this.startQueryRefetching(e),
            this.fetchWithCache(e));
            let s = N(this, $b).get(a) ?? new Set;
            return s.add(t),
            N(this, $b).set(a, s),
            () => {
                let n = N(this, $b).get(a);
                n && (n.delete(t),
                n.size === 0 && N(this, $b).delete(a),
                N(this, $b).size === 0 && this.stopQueryRefetching(e))
            }
        }
    }
    ,
    $b = new WeakMap,
    ex = new WeakMap,
    tx = new WeakMap,
    nx = new WeakMap,
    rx = new WeakMap,
    ix = new WeakMap,
    P(ax, `cacheKey`, `framer-fetch-client-cache`),
    ox = ax,
    sx = j(void 0),
    cx = j(!0),
    lx = ({children: e, client: t}) => {
        let[n] = ee( () => t ?? new ox)
          , [r,i] = ee(!0);
        return O( () => (n.hydrateCache(),
        c( () => {
            i(!1)
        }
        ),
        () => n.unmount()), [n]),
        x(cx.Provider, {
            value: r,
            children: x(sx.Provider, {
                value: n,
                children: e
            })
        })
    }
    ,
    ux = new WeakMap,
    dx = new WeakMap,
    fx = new WeakMap,
    px = new WeakMap,
    mx = new WeakMap,
    ie.WillChange = ce,
    hx = mc(s(function({links: e, children: t, ...n}, r) {
        let i = lt()
          , {activeLocale: a} = En()
          , o = es(r)
          , s = []
          , c = e.map(e => {
            if (e)
                return L(e) ? Qc(e, i) : Qc(e.href, i, e.implicitPathVariables, e.refKey, (e, t) => {
                    function n(e) {
                        let t = {};
                        for (let n in e) {
                            let r = e[n];
                            B(i.collectionUtils, `collectionUtils should be defined`),
                            B(r, `unresolvedSlug be defined`);
                            let o = _c(r, i.collectionUtils, a)
                              , c = o.preload();
                            if (c)
                                s.push(c);
                            else {
                                let e = o.read();
                                e && (t[n] = e)
                            }
                        }
                        return t
                    }
                    return {
                        path: n(e),
                        hash: n(t)
                    }
                }
                )
        }
        );
        if (s.length > 0)
            throw Promise.allSettled(s);
        let l = t(c);
        return o(l, n)
    })),
    gx = class {
        constructor(e, t) {
            this.collection = e,
            this.locale = t,
            P(this, `schema`),
            P(this, `indexes`, []);
            let n = Hi(e);
            B(n, `Collection does not have properties`);
            let r = {
                id: {
                    type: `string`,
                    isNullable: !1
                }
            }
              , i = Object.entries(n);
            for (let[e,t] of i) {
                if (!t)
                    continue;
                let n = t.type;
                B(n !== `array`, `Array properties are not supported`),
                B(n !== `object`, `Object properties are not supported`),
                r[e] = {
                    type: n,
                    isNullable: !0
                }
            }
            this.schema = r
        }
        getDatabaseItem(e, t) {
            let n = {};
            for (let t in this.schema) {
                let r = e[t];
                if (wt(r))
                    continue;
                let i = this.schema[t];
                if (St(i))
                    continue;
                B(i.type !== `unknown`, `Invalid definition type`),
                n[t] = {
                    type: i.type,
                    value: r
                }
            }
            return {
                pointer: t,
                data: n
            }
        }
        async resolveRichText(e) {
            if (pb.is(e)) {
                let t = e.preload();
                return t && await t,
                e.read()
            }
            return e
        }
        async scanItems() {
            let e = await zl(this.collection, this.locale);
            return e.map( (e, t) => {
                let n = String(t);
                return this.getDatabaseItem(e, n)
            }
            )
        }
        async resolveItems(e) {
            let t = await zl(this.collection, this.locale);
            return e.map(e => {
                let n = Number(e)
                  , r = t[n];
                return B(r, `Can't find collection item`),
                this.getDatabaseItem(r, e)
            }
            )
        }
        compareItems(e, t) {
            return Number(e.pointer) - Number(t.pointer)
        }
    }
    ,
    Z = {
        cast(e, t) {
            switch (t.type) {
            case `array`:
                return Vl(e, t);
            case `boolean`:
                return Ul(e);
            case `color`:
                return Kl(e);
            case `date`:
                return Jl(e);
            case `enum`:
                return Xl(e);
            case `file`:
                return Ql(e);
            case `link`:
                return eu(e);
            case `number`:
                return nu(e);
            case `object`:
                return au(e, t);
            case `responsiveimage`:
                return su(e);
            case `richtext`:
                return lu(e);
            case `string`:
                return pu(e);
            case `vectorsetitem`:
                return du(e);
            case `unknown`:
                return e;
            default:
                V(t, `Unsupported cast`)
            }
        },
        parse(e) {
            return bt(e) ? {
                type: `boolean`,
                value: e
            } : Tt(e) ? {
                type: `date`,
                value: e.toISOString()
            } : R(e) ? {
                type: `number`,
                value: e
            } : L(e) ? {
                type: `string`,
                value: e
            } : xt(e) ? {
                type: `array`,
                value: e.map(Z.parse)
            } : null
        },
        equal(e, t, n) {
            return e?.type === t?.type ? hu(e, t, n) === 0 : !1
        },
        lessThan(e, t, n) {
            return e?.type === t?.type ? hu(e, t, n) < 0 : !1
        },
        lessThanOrEqual(e, t, n) {
            return e?.type === t?.type ? hu(e, t, n) <= 0 : !1
        },
        greaterThan(e, t, n) {
            return e?.type === t?.type ? hu(e, t, n) > 0 : !1
        },
        greaterThanOrEqual(e, t, n) {
            return e?.type === t?.type ? hu(e, t, n) >= 0 : !1
        },
        in(e, t, n) {
            return t?.type === `array` ? t.value.some(t => Z.equal(t, e, n)) : !1
        },
        indexOf(e, t, n) {
            return e?.type === `array` ? e.value.findIndex(e => Z.equal(e, t, n)) : -1
        },
        contains(e, t, n) {
            let r = mu(e)
              , i = mu(t);
            return Ct(r) || Ct(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.includes(i))
        },
        startsWith(e, t, n) {
            let r = mu(e)
              , i = mu(t);
            return Ct(r) || Ct(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.startsWith(i))
        },
        endsWith(e, t, n) {
            let r = mu(e)
              , i = mu(t);
            return Ct(r) || Ct(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.endsWith(i))
        },
        length(e) {
            switch (e?.type) {
            case `array`:
                return e.value.length
            }
            return 0
        },
        stringify(e) {
            if (e === null)
                return `null`;
            switch (e.type) {
            case `array`:
                return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
                return String(e.value);
            case `string`:
                return `'${e.value}'`;
            case `enum`:
                return `'${e.value}' /* Enum */`;
            case `color`:
                return `'${e.value}' /* Color */`;
            case `date`:
                return `'${e.value}' /* Date */`;
            case `richtext`:
                return `RichText`;
            case `vectorsetitem`:
                return `VectorSetItem`;
            case `responsiveimage`:
                return `ResponsiveImage`;
            case `file`:
                return `File`;
            case `link`:
                return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
                return `Object`;
            default:
                V(e)
            }
        }
    },
    _x = {
        type: `unknown`,
        isNullable: !0
    },
    vx = 1e3,
    Q = class e {
        constructor(e) {
            this.network = e
        }
        static estimate(t, n) {
            let r = gu()
              , i = _u()
              , a = t * r + n / i;
            return new e(a)
        }
        static max(t, n) {
            let r = Math.max(t.network, n.network);
            return new e(r)
        }
        static compare(e, t) {
            return e.network < t.network ? -1 : e.network > t.network ? 1 : 0
        }
        add(e) {
            return this.network += e.network,
            this
        }
        toString() {
            return `${this.network}ms`
        }
    }
    ,
    yx = class {
        constructor(e, t) {
            this.id = e,
            this.relational = t,
            P(this, `nodes`, []),
            P(this, `winners`, new Map)
        }
        addNode(e) {
            this.nodes.push(e),
            e.setGroup(this)
        }
        getWinner(e) {
            let t = e.getHash()
              , n = this.winners.get(t);
            if (n)
                return n;
            let r = new bx;
            return this.winners.set(t, r),
            r
        }
        getOptimized(e) {
            let t = this.getWinner(e);
            B(t.node, `Group not optimized`);
            let n = t.node.getOptimized(e);
            return n.setGroup(this),
            n
        }
    }
    ,
    bx = class {
        constructor() {
            P(this, `node`),
            P(this, `cost`, new Q(1 / 0)),
            P(this, `nodes`, [])
        }
        update(e, t) {
            this.nodes.push(e),
            Q.compare(t, this.cost) < 0 && (this.node = e,
            this.cost = t)
        }
    }
    ,
    xx = class {
        constructor(e) {
            this.isSynchronous = e
        }
    }
    ,
    Sx = class extends xx {
        constructor() {
            super(...arguments),
            P(this, `group`)
        }
        getGroup() {
            return B(this.group, `Node must be in a group`),
            this.group
        }
        setGroup(e) {
            B(!this.group, `Node is already in a group`),
            this.group = e
        }
        evaluateSync() {
            let e = this.evaluate(void 0);
            return yu(e)
        }
        evaluateAsync() {
            let e = this.evaluate(void 0);
            return bu(e)
        }
    }
    ,
    Cx = class {
        constructor(e, t) {
            this.data = e,
            this.pointer = t,
            P(this, `cached`)
        }
        resolve() {
            return this.cached ??= this.data.resolveRichText(this.pointer),
            this.cached
        }
    }
    ,
    wx = class {
        constructor(e, t) {
            this.data = e,
            this.pointer = t,
            P(this, `cached`)
        }
        resolve() {
            return B(this.data.resolveVectorSetItem, `Can't resolve vector set item.`),
            this.cached ??= this.data.resolveVectorSetItem(this.pointer),
            this.cached
        }
    }
    ,
    Tx = `index`,
    Ex = class extends Set {
        merge(e) {
            for (let t of e)
                this.add(t)
        }
        equals(e) {
            if (this === e)
                return !0;
            if (this.size !== e.size)
                return !1;
            for (let t of this)
                if (!e.has(t))
                    return !1;
            return !0
        }
        subsetOf(e) {
            if (this === e)
                return !0;
            if (this.size > e.size)
                return !1;
            for (let t of this)
                if (!e.has(t))
                    return !1;
            return !0
        }
        getHash() {
            let e = [];
            for (let t of this)
                e.push(t.id);
            return e.sort( (e, t) => e - t),
            G(this.name, ...e)
        }
    }
    ,
    Dx = class {
        constructor(e, t, n) {
            this.id = e,
            this.name = t,
            this.data = n,
            P(this, `indexes`, new kx),
            P(this, `fields`, new $)
        }
    }
    ,
    Ox = class {
        constructor(e, t, n, r, i, a) {
            for (let o in this.id = e,
            this.data = t,
            this.collection = n,
            this.lookupNodes = r,
            this.constraint = i,
            this.ordering = a,
            P(this, `resolvedFields`, new $),
            t.schema)
                for (let e of n.fields)
                    e.name === o && this.resolvedFields.add(e)
        }
    }
    ,
    kx = class extends Ex {
        constructor() {
            super(...arguments),
            P(this, `name`, `Indexes`)
        }
    }
    ,
    Ax = class {
        constructor(e, t, n, r) {
            this.id = e,
            this.name = t,
            this.definition = n,
            this.collection = r
        }
        getValue(e) {
            B(this.name, `Can only get value of field with a name`);
            let t = e.data[this.name];
            return t?.type === `richtext` ? (B(this.collection, `Rich text field must have a collection`),
            {
                type: `richtext`,
                value: new Cx(this.collection.data,t.value)
            }) : t?.type === `vectorsetitem` ? (B(this.collection, `Vector set item field must have a collection`),
            {
                type: `vectorsetitem`,
                value: new wx(this.collection.data,t.value)
            }) : t ?? null
        }
    }
    ,
    $ = class extends Ex {
        constructor() {
            super(...arguments),
            P(this, `name`, `Fields`)
        }
    }
    ,
    jx = class {
        constructor(e, t=`asc`) {
            this.field = e,
            this.direction = t
        }
        getHash() {
            return G(`OrderingField`, this.field.id, this.direction)
        }
    }
    ,
    Mx = class {
        constructor(e) {
            P(this, `fields`, []),
            e && this.merge(e)
        }
        get length() {
            return this.fields.length
        }
        getHash() {
            return G(`Ordering`, ...this.fields)
        }
        push(e) {
            this.fields.push(e)
        }
        merge(e) {
            this.fields.push(...e.fields)
        }
        equals(e) {
            return this === e ? !0 : this.length === e.length ? this.getHash() === e.getHash() : !1
        }
        providedByFields(e) {
            for (let {field: t} of this.fields) {
                if (e.has(t) || t.name === Tx)
                    continue;
                return !1
            }
            return !0
        }
    }
    ,
    Nx = class {
        constructor(e, t) {
            this.ordering = e,
            this.resolvedFields = t
        }
        getHash() {
            return G(`RequiredProps`, this.ordering, this.resolvedFields)
        }
        get isMinimal() {
            return this.ordering.length === 0 && this.resolvedFields.size === 0
        }
        canProvide(e) {
            return this.canProvideOrdering(e) && this.canProvideResolvedFields(e)
        }
        canProvideOrdering(e) {
            return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering)
        }
        canProvideResolvedFields(e) {
            return this.resolvedFields.size === 0 ? !0 : e.canProvideResolvedFields(this.resolvedFields)
        }
    }
    ,
    Px = class e {
        constructor(e) {
            this.parent = e,
            P(this, `node`),
            P(this, `ordering`),
            P(this, `fields`, [])
        }
        takeNode() {
            let e = this.node;
            return B(e, `Node is missing`),
            this.node = void 0,
            e
        }
        setNode(e) {
            B(!this.node, `Node already set`),
            this.node = e
        }
        setOrdering(e) {
            this.ordering = e
        }
        push() {
            return new e(this)
        }
        replace() {
            return new e(this.parent)
        }
        addField(e) {
            this.fields.push(e)
        }
        addFieldsFromScope(e) {
            for (let t of e.fields)
                this.addField(t)
        }
        resolveField(e, t) {
            var n;
            let r = [];
            for (let n of this.fields) {
                if (n.name !== e || t && n.collectionName !== t)
                    continue;
                r.push(n)
            }
            if (r.length === 1)
                return r[0];
            if (r.length > 1)
                throw Error(`Ambiguous fields`);
            return (n = this.parent)?.resolveField(e, t)
        }
        has(e) {
            var t;
            return this.fields.includes(e) ? !0 : (t = this.parent)?.has(e) ?? !1
        }
        getRequiredOrdering() {
            return this.ordering ?? new Mx
        }
        getRequiredResolvedFields() {
            let e = new $;
            for (let {field: t} of this.fields)
                t.collection && e.add(t);
            return e
        }
        getRequiredProps() {
            let e = this.getRequiredOrdering()
              , t = this.getRequiredResolvedFields();
            return new Nx(e,t)
        }
        getNamedFields() {
            let e = {};
            for (let {name: t, field: n} of this.fields)
                e[t] = n;
            return e
        }
        getSingleField() {
            B(this.fields.length === 1, `Scope must contain exactly one field`);
            let e = this.fields[0];
            return B(e, `Field must exist`),
            e.field
        }
    }
    ,
    Fx = class {
        constructor() {
            P(this, `pointers`, new Map),
            P(this, `values`, new Map)
        }
        getKey() {
            let e = [];
            for (let[t,n] of this.pointers)
                e.push(`${t.id}-${n}`);
            return e.sort().join(`-`)
        }
        addValue(e, t) {
            this.values.set(e, t)
        }
        getValue(e) {
            return this.values.get(e) ?? null
        }
        mergeValues(e) {
            for (let[t,n] of e.values)
                this.addValue(t, n)
        }
        addPointer(e, t) {
            this.pointers.set(e, t)
        }
        getPointer(e) {
            return this.pointers.get(e)
        }
        mergePointers(e) {
            for (let[t,n] of e.pointers)
                this.addPointer(t, n)
        }
        merge(e) {
            this.mergeValues(e),
            this.mergePointers(e)
        }
    }
    ,
    Ix = class e {
        constructor(e, t=[]) {
            this.fields = e,
            this.tuples = t
        }
        push(e) {
            this.tuples.push(e)
        }
        filter(t) {
            let n = this.tuples.filter(t);
            return new e(this.fields,n)
        }
        map(t, n) {
            let r = this.tuples.map(n);
            return new e(t,r)
        }
        sort(t) {
            let n = Array.from(this.tuples).sort(t);
            return new e(this.fields,n)
        }
        slice(t, n) {
            let r = this.tuples.slice(t, n);
            return new e(this.fields,r)
        }
        union(t) {
            let n = new $;
            for (let e of this.fields)
                t.fields.has(e) && n.add(e);
            let r = new Set
              , i = new e(n);
            for (let e of this.tuples) {
                let t = e.getKey();
                r.add(t),
                i.push(e)
            }
            for (let e of t.tuples) {
                let t = e.getKey();
                if (r.has(t))
                    continue;
                i.push(e)
            }
            return i
        }
        intersection(t) {
            let n = new $;
            for (let e of this.fields)
                t.fields.has(e) && n.add(e);
            let r = new Set
              , i = new e(n);
            for (let e of this.tuples) {
                let t = e.getKey();
                r.add(t)
            }
            for (let e of t.tuples) {
                let t = e.getKey();
                if (!r.has(t))
                    continue;
                i.push(e)
            }
            return i
        }
    }
    ,
    Lx = class {
        constructor(e, t) {
            this.input = e,
            this.field = t
        }
        getHash() {
            return G(`ProjectionField`, this.input, this.field.id)
        }
    }
    ,
    Rx = class e extends Sx {
        constructor(e, t, n) {
            let r = e.isSynchronous;
            for (let e of t)
                r &&= e.input.isSynchronous;
            super(r),
            this.input = e,
            this.projections = t,
            this.passthrough = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough)
        }
        getOutputFields() {
            let e = new $;
            e.merge(this.passthrough);
            for (let t of this.projections)
                e.add(t.field);
            return e
        }
        canProvideOrdering(e) {
            let t = new $;
            for (let e of this.projections)
                t.add(e.field);
            for (let {field: n} of e.fields)
                if (t.has(n))
                    return !1;
            return !0
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new $(e.resolvedFields);
            for (let e of this.projections)
                t.merge(e.input.referencedFields),
                t.delete(e.field);
            return new Nx(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = new Q(0);
            for (let t of this.projections) {
                let n = t.input.optimize(e);
                i = Q.max(i, n)
            }
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.projections.map(e => {
                let t = e.input.getOptimized();
                return new Lx(t,e.field)
            }
            );
            return new e(r,i,this.passthrough)
        }
        *evaluate(e) {
            let t = this.getOutputFields()
              , n = yield*this.input.evaluate(e)
              , r = yield*Su(n.tuples.map(t => Su(this.projections.map(n => xu({
                field: n.field,
                value: n.input.evaluate(e, t)
            })))));
            return n.map(t, (e, t) => {
                let n = new Fx;
                n.mergePointers(e);
                for (let t of this.passthrough) {
                    let r = e.getValue(t);
                    n.addValue(t, r)
                }
                let i = r[t];
                B(i, `Projections must exist`);
                for (let {field: e, value: t} of i)
                    n.addValue(e, t);
                return n
            }
            )
        }
    }
    ,
    zx = {
        type: 0
    },
    Bx = class extends xx {
        constructor(e, t, n) {
            super(n),
            this.referencedFields = e,
            this.referencedOuterFields = t,
            this.isSynchronous = n
        }
        evaluateSync() {
            let e = this.evaluate(void 0, void 0);
            return yu(e)
        }
        evaluateAsync() {
            let e = this.evaluate(void 0, void 0);
            return bu(e)
        }
    }
    ,
    Vx = {
        type: 0
    },
    Hx = class {
        constructor(e, t) {
            this.when = e,
            this.then = t
        }
        getHash() {
            return G(`CaseCondition`, this.when, this.then)
        }
    }
    ,
    Ux = class e extends Bx {
        constructor(e, t, n) {
            let r = new $
              , i = new $
              , a = !0;
            e && (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            a &&= e.isSynchronous);
            for (let {when: e, then: n} of t)
                r.merge(e.referencedFields),
                i.merge(e.referencedOuterFields),
                a &&= e.isSynchronous,
                r.merge(n.referencedFields),
                i.merge(n.referencedOuterFields),
                a &&= n.isSynchronous;
            n && (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            a &&= n.isSynchronous),
            super(r, i, a),
            this.input = e,
            this.conditions = t,
            this.otherwise = n,
            P(this, `definition`, {
                type: `unknown`,
                isNullable: !0
            })
        }
        getHash() {
            return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise)
        }
        optimize(e) {
            var t, n;
            (t = this.input) == null || t.optimize(e);
            for (let t of this.conditions)
                t.when.optimize(e),
                t.then.optimize(e);
            return (n = this.otherwise) == null || n.optimize(e),
            new Q(0)
        }
        getOptimized() {
            var t, n;
            let r = (t = this.input)?.getOptimized()
              , i = this.conditions.map(e => {
                let t = e.when.getOptimized()
                  , n = e.then.getOptimized();
                return new Hx(t,n)
            }
            )
              , a = (n = this.otherwise)?.getOptimized();
            return new e(r,i,a)
        }
        *evaluate(e, t) {
            var n, r;
            let {input: i, conditions: a, otherwise: o} = yield*xu({
                input: (n = this.input)?.evaluate(e, t) ?? null,
                conditions: Su(this.conditions.map(n => xu({
                    when: n.when.evaluate(e, t),
                    then: n.then.evaluate(e, t)
                }))),
                otherwise: (r = this.otherwise)?.evaluate(e, t) ?? null
            });
            if (this.input) {
                for (let {when: e, then: t} of a)
                    if (Z.equal(i, e, Vx))
                        return t
            } else
                for (let {when: e, then: t} of a)
                    if (Wl(e))
                        return t;
            return o
        }
    }
    ,
    Wx = class {
        constructor(e, t, n) {
            this.normalizer = e,
            this.query = t,
            this.locale = n,
            P(this, `collectionId`, 0),
            P(this, `indexId`, 0),
            P(this, `fieldId`, 0),
            P(this, `subqueries`, [])
        }
        build() {
            let e = new Px;
            return this.buildQuery(e, this.query)
        }
        buildQuery(e, t) {
            let n = {
                type: `Select`,
                ...t
            };
            return this.buildSelect(e, n)
        }
        buildSelect(e, t) {
            let n = this.buildFrom(e, t.from)
              , r = n.getRequiredOrdering();
            if (t.where) {
                let e = n.takeNode()
                  , r = this.buildExpression(n, t.where)
                  , i = this.normalizer.newRelationalFilter(e, r);
                n.setNode(i)
            }
            let i = [], a = new $, o;
            if (t.orderBy) {
                o = new Mx;
                for (let e of t.orderBy)
                    if (e.type === `Identifier`) {
                        let t = n.resolveField(e.name, e.collection);
                        if (St(t))
                            continue;
                        a.add(t.field);
                        let r = new jx(t.field,e.direction);
                        o.push(r)
                    } else {
                        let t = this.buildExpression(n, e)
                          , r = Du(this.fieldId++)
                          , a = new Ax(r,void 0,t.definition,void 0)
                          , s = new Lx(t,a);
                        i.push(s);
                        let c = new jx(a,e.direction);
                        o.push(c)
                    }
                o.merge(r)
            } else
                o = r;
            let s = this.buildSelectList(n, t.select, a, i);
            if (s.setOrdering(o),
            t.offset) {
                let n = s.takeNode()
                  , r = this.buildExpression(e, t.offset)
                  , i = this.normalizer.newRelationalOffset(n, r, o);
                s.setNode(i)
            }
            if (t.limit) {
                let n = s.takeNode()
                  , r = this.buildExpression(e, t.limit)
                  , i = this.normalizer.newRelationalLimit(n, r, o);
                s.setNode(i)
            }
            return s
        }
        buildSelectList(e, t, n, r) {
            let i = e.push()
              , a = new $(n)
              , o = [...r];
            for (let n of t)
                if (n.type === `Identifier`) {
                    let t = e.resolveField(n.name, n.collection);
                    if (St(t))
                        continue;
                    a.add(t.field),
                    i.addField({
                        ...t,
                        name: n.alias ?? t.name
                    })
                } else {
                    let t = this.buildExpression(e, n);
                    B(n.alias, `Subqueries should have an alias`);
                    let r = Du(this.fieldId++)
                      , a = n.alias
                      , s = new Ax(r,a,t.definition,void 0)
                      , c = new Lx(t,s);
                    o.push(c),
                    i.addField({
                        field: s,
                        name: a
                    })
                }
            let s = e.takeNode()
              , c = this.normalizer.newRelationalProject(s, o, a);
            return i.setNode(c),
            i
        }
        buildFrom(e, t) {
            switch (t.type) {
            case `Collection`:
                return this.buildCollection(e, t);
            case `LeftJoin`:
                return this.buildJoin(e, t);
            default:
                V(t, `Unsupported from type`)
            }
        }
        buildCollection(e, t) {
            let n = e.push()
              , r = Ou(t.data, this.locale)
              , i = t.alias
              , a = Tu(this.collectionId++)
              , o = new Dx(a,i,r);
            for (let[e,t] of Object.entries(r.schema)) {
                let r = Du(this.fieldId++)
                  , a = new Ax(r,e,t,o);
                n.addField({
                    field: a,
                    name: e,
                    collectionName: i
                }),
                o.fields.add(a)
            }
            {
                let e = {
                    type: `number`,
                    isNullable: !1
                }
                  , t = Du(this.fieldId++)
                  , r = new Ax(t,Tx,e,o);
                n.addField({
                    field: r,
                    name: Tx,
                    collectionName: i
                });
                let a = new Mx
                  , s = new jx(r);
                a.push(s),
                n.setOrdering(a)
            }
            for (let e of r.indexes) {
                let t = [];
                for (let r of e.fields) {
                    let e = this.buildExpression(n, r);
                    t.push(e)
                }
                let r;
                e.where && (r = this.buildExpression(n, e.where));
                let i = new Mx
                  , a = Eu(this.indexId++)
                  , s = new Ox(a,e,o,t,r,i);
                o.indexes.add(s)
            }
            let s = this.normalizer.newRelationalScan(o);
            return n.setNode(s),
            n
        }
        buildJoin(e, t) {
            let n = this.buildFrom(e, t.left)
              , r = this.buildFrom(e, t.right)
              , i = new Mx
              , a = n.getRequiredOrdering();
            i.merge(a);
            let o = r.getRequiredOrdering();
            i.merge(o);
            let s = e.push();
            s.addFieldsFromScope(n),
            s.addFieldsFromScope(r),
            s.setOrdering(i);
            let c = this.buildExpression(s, t.constraint), l = n.takeNode(), u = r.takeNode(), d;
            switch (t.type) {
            case `LeftJoin`:
                d = this.normalizer.newRelationalLeftJoin(l, u, c);
                break;
            default:
                V(t.type, `Unsupported join type`)
            }
            return s.setNode(d),
            s
        }
        buildExpression(e, t) {
            switch (t.type) {
            case `Identifier`:
                return this.buildIdentifier(e, t);
            case `LiteralValue`:
                return this.buildLiteralValue(t);
            case `FunctionCall`:
                return this.buildFunctionCall(e, t);
            case `Case`:
                return this.buildCase(e, t);
            case `UnaryOperation`:
                return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
                return this.buildBinaryOperation(e, t);
            case `TypeCast`:
                return this.buildTypeCast(e, t);
            case `Select`:
                throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
                V(t, `Unsupported expression`)
            }
        }
        buildIdentifier(e, t) {
            let n = e.resolveField(t.name, t.collection);
            if (n) {
                let e = !1;
                for (let t of this.subqueries)
                    e ? t.referencedOuterFields.add(n.field) : (e = t.inScope.has(n),
                    e && t.referencedFields.add(n.field));
                return this.normalizer.newScalarVariable(n.field, e)
            }
            return this.normalizer.newScalarConstant(_x, null)
        }
        buildLiteralValue(e) {
            let t = Z.parse(e.value);
            return this.normalizer.newScalarConstant(_x, t)
        }
        buildFunctionCall(e, t) {
            let n = n => {
                let r = t.arguments[n];
                return B(r, `Missing argument`),
                this.buildExpression(e, r)
            }
            ;
            switch (t.functionName) {
            case `CONTAINS`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarContains(e, t)
                }
            case `STARTS_WITH`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarStartsWith(e, t)
                }
            case `ENDS_WITH`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarEndsWith(e, t)
                }
            case `LENGTH`:
                {
                    let e = n(0);
                    return this.normalizer.newScalarLength(e)
                }
            case `INDEX_OF`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarIndexOf(e, t)
                }
            case `ARRAY`:
                {
                    let n = t.arguments[0];
                    return B(n, `Missing argument`),
                    B(n.type === `Select`, `Subqueries require a select expression`),
                    this.buildSubqueryArray(e, n)
                }
            case `FLAT_ARRAY`:
                {
                    let n = t.arguments[0];
                    return B(n, `Missing argument`),
                    B(n.type === `Select`, `Subqueries require a select expression`),
                    this.buildSubqueryFlatArray(e, n)
                }
            default:
                throw Error(`Unsupported function name`)
            }
        }
        buildSubqueryArray(e, t) {
            try {
                let n = new Gx(e);
                this.subqueries.push(n);
                let r = this.buildSelect(e, t)
                  , i = r.takeNode()
                  , a = r.getNamedFields()
                  , o = r.getRequiredOrdering()
                  , s = n.referencedFields
                  , c = n.referencedOuterFields;
                return this.normalizer.newScalarArray(i, a, o, s, c)
            } finally {
                this.subqueries.pop()
            }
        }
        buildSubqueryFlatArray(e, t) {
            try {
                let n = new Gx(e);
                this.subqueries.push(n);
                let r = this.buildSelect(e, t)
                  , i = r.takeNode()
                  , a = r.getSingleField()
                  , o = r.getRequiredOrdering()
                  , s = n.referencedFields
                  , c = n.referencedOuterFields;
                return this.normalizer.newScalarFlatArray(i, a, o, s, c)
            } finally {
                this.subqueries.pop()
            }
        }
        buildCase(e, t) {
            let n;
            t.value && (n = this.buildExpression(e, t.value));
            let r = t.conditions.map(t => {
                let n = this.buildExpression(e, t.when)
                  , r = this.buildExpression(e, t.then);
                return new Hx(n,r)
            }
            ), i;
            return t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
        }
        buildUnaryOperation(e, t) {
            let n = this.buildExpression(e, t.value);
            switch (t.operator) {
            case `not`:
                return this.normalizer.newScalarNot(n);
            default:
                V(t.operator, `Unsupported unary operator`)
            }
        }
        buildBinaryOperation(e, t) {
            let n = this.buildExpression(e, t.left)
              , r = this.buildExpression(e, t.right);
            switch (t.operator) {
            case `and`:
                return this.normalizer.newScalarAnd(n, r);
            case `or`:
                return this.normalizer.newScalarOr(n, r);
            case `==`:
                return this.normalizer.newScalarEquals(n, r);
            case `!=`:
                return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
                return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
                return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
                return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
                return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
                return this.normalizer.newScalarIn(n, r);
            default:
                V(t.operator, `Unsupported binary operator`)
            }
        }
        buildTypeCast(e, t) {
            let n = this.buildExpression(e, t.value);
            switch (t.dataType) {
            case `BOOLEAN`:
                {
                    let e = {
                        type: `boolean`,
                        isNullable: !0
                    };
                    return this.normalizer.newScalarCast(n, e)
                }
            case `DATE`:
                {
                    let e = {
                        type: `date`,
                        isNullable: !0
                    };
                    return this.normalizer.newScalarCast(n, e)
                }
            case `NUMBER`:
                {
                    let e = {
                        type: `number`,
                        isNullable: !0
                    };
                    return this.normalizer.newScalarCast(n, e)
                }
            case `STRING`:
                {
                    let e = {
                        type: `string`,
                        isNullable: !0
                    };
                    return this.normalizer.newScalarCast(n, e)
                }
            default:
                throw Error(`Unsupported data type`)
            }
        }
    }
    ,
    Gx = class {
        constructor(e) {
            this.inScope = e,
            P(this, `referencedFields`, new $),
            P(this, `referencedOuterFields`, new $)
        }
    }
    ,
    Kx = class e extends Sx {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.predicate = t,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return G(`RelationalFilter`, this.inputGroup.id, this.predicate)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering() {
            return !0
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new $(e.resolvedFields);
            return t.merge(this.predicate.referencedFields),
            new Nx(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.predicate.optimize(e);
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.predicate.getOptimized();
            return new e(r,i)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e)
              , n = yield*Su(t.tuples.map(t => this.predicate.evaluate(e, t)));
            return t.filter( (e, t) => {
                let r = n[t] ?? null;
                return Wl(r)
            }
            )
        }
    }
    ,
    qx = class e extends Sx {
        constructor(e, t) {
            super(!1),
            this.index = e,
            this.query = t
        }
        getHash() {
            return G(`RelationalIndexLookup`, this.index.id, ...this.query)
        }
        getOutputFields() {
            return this.index.collection.fields
        }
        canProvideOrdering(e) {
            return e.equals(this.index.ordering)
        }
        canProvideResolvedFields(e) {
            return e.subsetOf(this.index.resolvedFields)
        }
        optimize() {
            let e = this.query.every(e => e.type === `All`);
            return Q.estimate(1, e ? 100 * vx : 50 * vx)
        }
        getOptimized() {
            return new e(this.index,this.query)
        }
        *evaluate() {
            let e = this.index
              , t = e.collection
              , n = this.getOutputFields()
              , r = yield e.data.lookupItems(this.query)
              , i = r.map(n => {
                let r = new Fx;
                for (let i of e.resolvedFields) {
                    let e = i.getValue(n);
                    r.addPointer(t, n.pointer),
                    r.addValue(i, e)
                }
                return r
            }
            );
            return new Ix(n,i)
        }
    }
    ,
    Jx = class e extends Sx {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.left = e,
            this.right = t,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id)
        }
        getOutputFields() {
            let e = new $
              , t = this.leftGroup.relational.outputFields
              , n = this.rightGroup.relational.outputFields;
            for (let r of t)
                n.has(r) && e.add(r);
            return e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e) {
            let t = new Mx;
            return new Nx(t,e.resolvedFields)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(t)
              , a = e.optimizeGroup(this.rightGroup, i);
            return Q.max(r, a)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(t)
              , a = this.rightGroup.getOptimized(i);
            return new e(r,a)
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*xu({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            return t.intersection(n)
        }
    }
    ,
    Yx = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarEquals`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.equal(n, r, zx)
            }
        }
    }
    ,
    Xx = class e extends Sx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            this.left = e,
            this.right = t,
            this.constraint = n,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint)
        }
        getOutputFields() {
            let e = new $;
            return e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e, t) {
            let n = new $
              , r = e.relational.outputFields;
            for (let e of t.resolvedFields)
                r.has(e) && n.add(e);
            for (let e of this.constraint.referencedFields)
                r.has(e) && n.add(e);
            let i = new Mx;
            return new Nx(i,n)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = e.optimizeGroup(this.rightGroup, i)
              , o = this.constraint.optimize(e);
            return Q.max(Q.max(r, a), o)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = this.rightGroup.getOptimized(i)
              , o = this.constraint.getOptimized();
            return new e(r,a,o)
        }
        *evaluateScalarEquals(e, t, n, r, i) {
            let a = new Map;
            for (let e of t.tuples) {
                let t = yield*r.evaluate(i, e)
                  , n = JSON.stringify(t?.value ?? null)
                  , o = a.get(n) ?? [];
                o.push(e),
                a.set(n, o)
            }
            let o = this.getOutputFields()
              , s = new Ix(o);
            for (let t of e.tuples) {
                let e = yield*n.evaluate(i, t)
                  , r = JSON.stringify(e?.value ?? null)
                  , o = a.get(r) ?? [];
                if (o.length === 0)
                    s.push(t);
                else
                    for (let e of o) {
                        let n = new Fx;
                        n.merge(t),
                        n.merge(e),
                        s.push(n)
                    }
            }
            return s
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*xu({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            if (this.constraint instanceof Yx) {
                if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
                if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
            }
            let r = this.getOutputFields()
              , i = new Ix(r);
            for (let r of t.tuples) {
                let t = !1;
                for (let a of n.tuples) {
                    let n = new Fx;
                    n.merge(r),
                    n.merge(a);
                    let o = yield*this.constraint.evaluate(e, n);
                    Wl(o) && (i.push(n),
                    t = !0)
                }
                t || i.push(r)
            }
            return i
        }
    }
    ,
    Zx = class e extends Sx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            this.left = e,
            this.right = t,
            this.constraint = n,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return G(`RelationalRightJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint)
        }
        getOutputFields() {
            let e = new $;
            return e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e, t) {
            let n = new $
              , r = e.relational.outputFields;
            for (let e of t.resolvedFields)
                r.has(e) && n.add(e);
            for (let e of this.constraint.referencedFields)
                r.has(e) && n.add(e);
            let i = new Mx;
            return new Nx(i,n)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = e.optimizeGroup(this.rightGroup, i)
              , o = this.constraint.optimize(e);
            return Q.max(Q.max(r, a), o)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = this.rightGroup.getOptimized(i)
              , o = this.constraint.getOptimized();
            return new e(r,a,o)
        }
        *evaluateScalarEquals(e, t, n, r, i) {
            let a = new Map;
            for (let t of e.tuples) {
                let e = yield*n.evaluate(i, t)
                  , r = JSON.stringify(e?.value ?? null)
                  , o = a.get(r) ?? [];
                o.push(t),
                a.set(r, o)
            }
            let o = this.getOutputFields()
              , s = new Ix(o);
            for (let e of t.tuples) {
                let t = yield*r.evaluate(i, e)
                  , n = JSON.stringify(t?.value ?? null)
                  , o = a.get(n) ?? [];
                if (o.length === 0)
                    s.push(e);
                else
                    for (let t of o) {
                        let n = new Fx;
                        n.merge(e),
                        n.merge(t),
                        s.push(n)
                    }
            }
            return s
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*xu({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            if (this.constraint instanceof Yx) {
                if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
                if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
            }
            let r = this.getOutputFields()
              , i = new Ix(r);
            for (let r of n.tuples) {
                let n = !1;
                for (let a of t.tuples) {
                    let t = new Fx;
                    t.merge(r),
                    t.merge(a);
                    let o = yield*this.constraint.evaluate(e, t);
                    Wl(o) && (i.push(t),
                    n = !0)
                }
                n || i.push(r)
            }
            return i
        }
    }
    ,
    Qx = class e extends Sx {
        constructor(e) {
            super(!1),
            this.collection = e
        }
        getHash() {
            return G(`RelationalScan`, this.collection.id)
        }
        getOutputFields() {
            return this.collection.fields
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields(e) {
            return e.subsetOf(this.collection.fields)
        }
        optimize() {
            return Q.estimate(1, 200 * vx)
        }
        getOptimized() {
            return new e(this.collection)
        }
        *evaluate() {
            let e = this.collection
              , t = this.getOutputFields()
              , n = yield e.data.scanItems()
              , r = n.map(n => {
                let r = new Fx;
                for (let i of t) {
                    let t = i.getValue(n);
                    r.addPointer(e, n.pointer),
                    r.addValue(i, t)
                }
                return r
            }
            );
            return new Ix(t,r)
        }
    }
    ,
    $x = class e extends Sx {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.left = e,
            this.right = t,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id)
        }
        getOutputFields() {
            let e = new $
              , t = this.leftGroup.relational.outputFields
              , n = this.rightGroup.relational.outputFields;
            for (let r of t)
                n.has(r) && e.add(r);
            return e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e) {
            let t = new Mx;
            return new Nx(t,e.resolvedFields)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(t)
              , a = e.optimizeGroup(this.rightGroup, i);
            return Q.max(r, a)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(t)
              , a = this.rightGroup.getOptimized(i);
            return new e(r,a)
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*xu({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            return t.union(n)
        }
    }
    ,
    eS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarAnd`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Wl(n) && Wl(r)
            }
        }
    }
    ,
    tS = class extends Bx {
        constructor(e, t) {
            let n = new $
              , r = new $;
            super(n, r, !0),
            this.definition = e,
            this.value = t
        }
        getHash() {
            return G(`ScalarConstant`, this.definition, this.value)
        }
        optimize() {
            return new Q(0)
        }
        getOptimized() {
            return this
        }
        *evaluate() {
            return this.value
        }
    }
    ,
    nS = {
        type: 0
    },
    rS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarContains`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*xu({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.contains(n, r, nS)
            }
        }
    }
    ,
    iS = {
        type: 0
    },
    aS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarEndsWith`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*xu({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.endsWith(n, r, iS)
            }
        }
    }
    ,
    oS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarGreaterThan`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.greaterThan(n, r, zx)
            }
        }
    }
    ,
    sS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarGreaterThanOrEqual`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.greaterThanOrEqual(n, r, zx)
            }
        }
    }
    ,
    cS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarLessThan`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.lessThan(n, r, zx)
            }
        }
    }
    ,
    lS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarLessThanOrEqual`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.lessThanOrEqual(n, r, zx)
            }
        }
    }
    ,
    uS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarNotEquals`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: !Z.equal(n, r, zx)
            }
        }
    }
    ,
    dS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarOr`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Wl(n) || Wl(r)
            }
        }
    }
    ,
    fS = {
        type: 0
    },
    pS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarStartsWith`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*xu({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.startsWith(n, r, fS)
            }
        }
    }
    ,
    mS = class {
        constructor(e) {
            this.normalizer = e,
            P(this, `memo`),
            this.memo = e.memo
        }
        explore(e) {
            let t = e.getGroup();
            if (e instanceof Xx) {
                let n = new Zx(e.right,e.left,e.constraint);
                this.memo.addRelational(n, t)
            }
            if (e instanceof Kx) {
                if (e.predicate instanceof eS) {
                    let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left)
                      , r = this.normalizer.newRelationalFilter(e.input, e.predicate.right)
                      , i = new Jx(n,r);
                    this.memo.addRelational(i, t)
                }
                if (e.predicate instanceof dS) {
                    let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left)
                      , r = this.normalizer.newRelationalFilter(e.input, e.predicate.right)
                      , i = new $x(n,r);
                    this.memo.addRelational(i, t)
                }
            }
            if (e instanceof Qx)
                for (let n of e.collection.indexes) {
                    if (n.constraint)
                        continue;
                    let e = ku(n.lookupNodes.length)
                      , r = new qx(n,e);
                    this.memo.addRelational(r, t)
                }
            if (e instanceof Kx) {
                for (let n of e.inputGroup.nodes)
                    if (n instanceof Qx)
                        for (let r of n.collection.indexes) {
                            if (e.predicate instanceof Yx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tS && r.data.supportedLookupTypes.includes(`Equals`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `Equals`,
                                    value: e.predicate.right.value
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof uS && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tS && r.data.supportedLookupTypes.includes(`NotEquals`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `NotEquals`,
                                    value: e.predicate.right.value
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof cS && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tS && r.data.supportedLookupTypes.includes(`LessThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `LessThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !1
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof lS && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tS && r.data.supportedLookupTypes.includes(`LessThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `LessThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !0
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof oS && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tS && r.data.supportedLookupTypes.includes(`GreaterThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `GreaterThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !1
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof sS && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tS && r.data.supportedLookupTypes.includes(`GreaterThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `GreaterThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !0
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof rS && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof tS && r.data.supportedLookupTypes.includes(`Contains`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `Contains`,
                                    value: e.predicate.target.value
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof pS && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof tS && r.data.supportedLookupTypes.includes(`StartsWith`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `StartsWith`,
                                    value: e.predicate.target.value
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof aS && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof tS && r.data.supportedLookupTypes.includes(`EndsWith`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `EndsWith`,
                                    value: e.predicate.target.value
                                };
                                let i = new qx(r,n);
                                this.memo.addRelational(i, t)
                            }
                        }
            }
        }
    }
    ,
    hS = class {
        constructor(e) {
            this.outputFields = e
        }
        isCompatible(e) {
            return this.outputFields.equals(e.outputFields)
        }
    }
    ,
    gS = class {
        constructor() {
            P(this, `nodes`, new Map),
            P(this, `groups`, [])
        }
        addGroup(e) {
            let t = vu(this.groups.length)
              , n = new yx(t,e);
            return this.groups.push(n),
            n
        }
        addRelational(e, t) {
            let n = e.getHash()
              , r = this.nodes.get(n);
            if (r)
                return r;
            this.nodes.set(n, e);
            let i = e.getOutputFields()
              , a = new hS(i);
            return t ??= this.addGroup(a),
            t.addNode(e),
            B(a.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
        }
        addScalar(e) {
            let t = e.getHash()
              , n = this.nodes.get(t);
            return n || (this.nodes.set(t, e),
            e)
        }
    }
    ,
    _S = class e extends Sx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.limit = t,
            this.ordering = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return G(`RelationalLimit`, this.inputGroup.id, this.limit)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering(e) {
            return e.equals(this.ordering)
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new $(e.resolvedFields);
            return t.merge(this.limit.referencedFields),
            new Nx(this.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.limit.optimize(e);
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.limit.getOptimized();
            return new e(r,i,this.ordering)
        }
        *evaluate(e) {
            let {input: t, limit: n} = yield*xu({
                input: this.input.evaluate(e),
                limit: this.limit.evaluate(e, void 0)
            })
              , r = ru(n) ?? 1 / 0;
            return r === 1 / 0 ? t : t.slice(0, r)
        }
    }
    ,
    vS = class e extends Sx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.offset = t,
            this.ordering = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return G(`RelationalOffset`, this.inputGroup.id, this.offset)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering(e) {
            return e.equals(this.ordering)
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new $(e.resolvedFields);
            return t.merge(this.offset.referencedFields),
            new Nx(this.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.offset.optimize(e);
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.offset.getOptimized();
            return new e(r,i,this.ordering)
        }
        *evaluate(e) {
            let {input: t, offset: n} = yield*xu({
                input: this.input.evaluate(e),
                offset: this.offset.evaluate(e, void 0)
            })
              , r = ru(n) ?? 0;
            return r === 0 ? t : t.slice(r)
        }
    }
    ,
    yS = class e extends Bx {
        constructor(e, t, n, r, i) {
            super(r, i, e.isSynchronous),
            this.input = e,
            this.namedFields = t,
            this.ordering = n,
            this.referencedFields = r,
            this.referencedOuterFields = i,
            P(this, `inputGroup`),
            P(this, `definition`),
            this.inputGroup = e.getGroup();
            let a = {}
              , o = Object.entries(t);
            for (let[e,t] of o)
                a[e] = t.definition;
            this.definition = {
                type: `array`,
                isNullable: !1,
                definition: {
                    type: `object`,
                    isNullable: !1,
                    definitions: a
                }
            }
        }
        getHash() {
            let e = {}
              , t = Object.entries(this.namedFields);
            for (let[n,r] of t)
                e[n] = r.id;
            return G(`ScalarArray`, this.inputGroup.id, e, this.ordering, this.referencedFields, this.referencedOuterFields)
        }
        getInputRequiredProps() {
            let e = new $
              , t = Object.values(this.namedFields);
            for (let n of t) {
                if (St(n.collection))
                    continue;
                e.add(n)
            }
            return new Nx(this.ordering,e)
        }
        optimize(e) {
            let t = this.getInputRequiredProps()
              , n = e.optimizeGroup(this.inputGroup, t);
            return new Q(0).add(n)
        }
        getOptimized() {
            let t = this.getInputRequiredProps()
              , n = this.inputGroup.getOptimized(t);
            return new e(n,this.namedFields,this.ordering,this.referencedFields,this.referencedOuterFields)
        }
        *evaluate(e, t) {
            let n = new Fx;
            e && n.merge(e),
            t && n.merge(t);
            let r = yield*this.input.evaluate(n)
              , i = Object.entries(this.namedFields);
            return {
                type: `array`,
                value: r.tuples.map(e => {
                    let t = {};
                    for (let[n,r] of i)
                        t[n] = e.getValue(r);
                    return {
                        type: `object`,
                        value: t
                    }
                }
                )
            }
        }
    }
    ,
    bS = class e extends Bx {
        constructor(e, t) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            this.definition = t,
            B(t.isNullable, `Unsupported non-nullable cast`)
        }
        getHash() {
            return G(`ScalarCast`, this.input, this.definition)
        }
        optimize(e) {
            return this.input.optimize(e)
        }
        getOptimized() {
            let t = this.input.getOptimized();
            return new e(t,this.definition)
        }
        *evaluate(e, t) {
            let n = yield*this.input.evaluate(e, t);
            return Z.cast(n, this.definition)
        }
    }
    ,
    xS = class e extends Bx {
        constructor(e, t, n, r, i) {
            super(r, i, e.isSynchronous),
            this.input = e,
            this.field = t,
            this.ordering = n,
            this.referencedFields = r,
            this.referencedOuterFields = i,
            P(this, `inputGroup`),
            P(this, `definition`),
            this.inputGroup = e.getGroup(),
            this.definition = {
                type: `array`,
                isNullable: !1,
                definition: t.definition
            }
        }
        getHash() {
            return G(`ScalarFlatArray`, this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields)
        }
        getInputRequiredProps() {
            let e = new $;
            return St(this.field.collection) || e.add(this.field),
            new Nx(this.ordering,e)
        }
        optimize(e) {
            let t = this.getInputRequiredProps()
              , n = e.optimizeGroup(this.inputGroup, t);
            return new Q(0).add(n)
        }
        getOptimized() {
            let t = this.getInputRequiredProps()
              , n = this.inputGroup.getOptimized(t);
            return new e(n,this.field,this.ordering,this.referencedFields,this.referencedOuterFields)
        }
        *evaluate(e, t) {
            let n = new Fx;
            e && n.merge(e),
            t && n.merge(t);
            let r = yield*this.input.evaluate(n);
            return {
                type: `array`,
                value: r.tuples.map(e => e.getValue(this.field))
            }
        }
    }
    ,
    SS = {
        type: 0
    },
    CS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarIn`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.in(n, r, SS)
            }
        }
    }
    ,
    wS = {
        type: 1
    },
    TS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `number`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarIndexOf`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*xu({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `number`,
                value: Z.indexOf(n, r, wS)
            }
        }
    }
    ,
    ES = class e extends Bx {
        constructor(e) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            P(this, `definition`, {
                type: `number`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarLength`, this.input)
        }
        optimize(e) {
            return this.input.optimize(e)
        }
        getOptimized() {
            let t = this.input.getOptimized();
            return new e(t)
        }
        *evaluate(e, t) {
            let n = yield*this.input.evaluate(e, t);
            return {
                type: `number`,
                value: Z.length(n)
            }
        }
    }
    ,
    DS = class e extends Bx {
        constructor(e) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarNot`, this.input)
        }
        optimize(e) {
            return this.input.optimize(e)
        }
        getOptimized() {
            let t = this.input.getOptimized();
            return new e(t)
        }
        *evaluate(e, t) {
            let n = yield*this.input.evaluate(e, t);
            return {
                type: `boolean`,
                value: !Wl(n)
            }
        }
    }
    ,
    OS = {
        type: 0
    },
    kS = class e extends Bx {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return G(`ScalarNotIn`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*xu({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: !Z.in(n, r, OS)
            }
        }
    }
    ,
    AS = class extends Bx {
        constructor(e, t) {
            B(e.name !== Tx, `Invalid field name`);
            let n = new $
              , r = new $;
            t ? r.add(e) : n.add(e),
            super(n, r, !0),
            this.field = e,
            this.isOuterField = t,
            P(this, `definition`),
            this.definition = e.definition
        }
        getHash() {
            return G(`ScalarVariable`, this.field.id, this.isOuterField)
        }
        optimize() {
            return new Q(0)
        }
        getOptimized() {
            return this
        }
        *evaluate(e, t) {
            return this.isOuterField ? (B(e, `Context must exist`),
            e.getValue(this.field)) : (B(t, `Tuple must exist`),
            t.getValue(this.field))
        }
    }
    ,
    jS = class {
        constructor(e) {
            this.memo = e
        }
        finishRelational(e) {
            return this.memo.addRelational(e)
        }
        newRelationalScan(e) {
            let t = new Qx(e);
            return this.finishRelational(t)
        }
        newRelationalIndexLookup(e, t) {
            let n = new qx(e,t);
            return this.finishRelational(n)
        }
        newRelationalLeftJoin(e, t, n) {
            let r = new Xx(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalRightJoin(e, t, n) {
            return this.newRelationalLeftJoin(t, e, n)
        }
        newRelationalFilter(e, t) {
            if (e instanceof Xx && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
                let n = this.newRelationalFilter(e.left, t);
                return this.newRelationalLeftJoin(n, e.right, e.constraint)
            }
            if (e instanceof Zx && t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)) {
                let n = this.newRelationalFilter(e.right, t);
                return this.newRelationalLeftJoin(e.left, n, e.constraint)
            }
            let n = new Kx(e,t);
            return this.finishRelational(n)
        }
        newRelationalProject(e, t, n) {
            let r = new Rx(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalLimit(e, t, n) {
            if (e instanceof Rx && t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) && n.providedByFields(e.inputGroup.relational.outputFields)) {
                let r = this.newRelationalLimit(e.input, t, n);
                return this.newRelationalProject(r, e.projections, e.passthrough)
            }
            let r = new _S(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalOffset(e, t, n) {
            let r = new vS(e,t,n);
            return this.finishRelational(r)
        }
        finishScalar(e) {
            let t = e instanceof tS;
            if (!t && e.isSynchronous && e.referencedFields.size === 0 && e.referencedOuterFields.size === 0) {
                let t = e.evaluateSync();
                return this.newScalarConstant(e.definition, t)
            }
            return this.memo.addScalar(e)
        }
        removeUnknown(e, t) {
            if (e.definition.type !== `unknown` || t.type === `unknown`)
                return e;
            let n = {
                ...t,
                isNullable: !0
            };
            return this.newScalarCast(e, n)
        }
        newScalarVariable(e, t) {
            let n = new AS(e,t);
            return this.finishScalar(n)
        }
        newScalarConstant(e, t) {
            let n = new tS(e,t);
            return this.finishScalar(n)
        }
        newScalarNot(e) {
            if (e instanceof DS) {
                if (e.input.definition.type === `boolean`)
                    return e.input;
                let t = {
                    type: `boolean`,
                    isNullable: !0
                };
                return this.newScalarCast(e.input, t)
            }
            if (e instanceof Yx)
                return this.newScalarNotEquals(e.left, e.right);
            if (e instanceof uS)
                return this.newScalarEquals(e.left, e.right);
            if (e instanceof cS)
                return this.newScalarGreaterThanOrEqual(e.left, e.right);
            if (e instanceof lS)
                return this.newScalarGreaterThan(e.left, e.right);
            if (e instanceof oS)
                return this.newScalarLessThanOrEqual(e.left, e.right);
            if (e instanceof sS)
                return this.newScalarLessThan(e.left, e.right);
            if (e instanceof eS) {
                let t = this.newScalarNot(e.left)
                  , n = this.newScalarNot(e.right);
                return this.newScalarOr(t, n)
            }
            if (e instanceof dS) {
                let t = this.newScalarNot(e.left)
                  , n = this.newScalarNot(e.right);
                return this.newScalarAnd(t, n)
            }
            let t = new DS(e);
            return this.finishScalar(t)
        }
        newScalarAnd(e, t) {
            let n = new eS(e,t);
            return this.finishScalar(n)
        }
        newScalarOr(e, t) {
            let n = new dS(e,t);
            return this.finishScalar(n)
        }
        newScalarEquals(e, t) {
            let n = e instanceof AS
              , r = t instanceof AS;
            if (r && !n)
                return this.newScalarEquals(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let i = new Yx(e,t);
            return this.finishScalar(i)
        }
        newScalarNotEquals(e, t) {
            let n = e instanceof AS
              , r = t instanceof AS;
            if (r && !n)
                return this.newScalarNotEquals(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let i = new uS(e,t);
            return this.finishScalar(i)
        }
        newScalarLessThan(e, t) {
            let n = e instanceof AS
              , r = t instanceof AS;
            if (r && !n)
                return this.newScalarGreaterThan(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let i = new cS(e,t);
            return this.finishScalar(i)
        }
        newScalarLessThanOrEqual(e, t) {
            let n = e instanceof AS
              , r = t instanceof AS;
            if (r && !n)
                return this.newScalarGreaterThanOrEqual(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let i = new lS(e,t);
            return this.finishScalar(i)
        }
        newScalarGreaterThan(e, t) {
            let n = e instanceof AS
              , r = t instanceof AS;
            if (r && !n)
                return this.newScalarLessThan(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let i = new oS(e,t);
            return this.finishScalar(i)
        }
        newScalarGreaterThanOrEqual(e, t) {
            let n = e instanceof AS
              , r = t instanceof AS;
            if (r && !n)
                return this.newScalarLessThanOrEqual(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let i = new sS(e,t);
            return this.finishScalar(i)
        }
        newScalarIn(e, t) {
            t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
            let n = {
                type: `array`,
                isNullable: !0,
                definition: e.definition
            };
            t = this.removeUnknown(t, n);
            let r = new CS(e,t);
            return this.finishScalar(r)
        }
        newScalarNotIn(e, t) {
            t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
            let n = {
                type: `array`,
                isNullable: !0,
                definition: e.definition
            };
            t = this.removeUnknown(t, n);
            let r = new kS(e,t);
            return this.finishScalar(r)
        }
        newScalarCase(e, t, n) {
            if (e) {
                let n = [];
                for (let {when: r, then: i} of t) {
                    let t = this.removeUnknown(r, e.definition)
                      , a = new Hx(t,i);
                    n.push(a)
                }
                t = n
            }
            let r = new Ux(e,t,n);
            return this.finishScalar(r)
        }
        newScalarContains(e, t) {
            let n = new rS(e,t);
            return this.finishScalar(n)
        }
        newScalarStartsWith(e, t) {
            let n = new pS(e,t);
            return this.finishScalar(n)
        }
        newScalarEndsWith(e, t) {
            let n = new aS(e,t);
            return this.finishScalar(n)
        }
        newScalarLength(e) {
            let t = new ES(e);
            return this.finishScalar(t)
        }
        newScalarIndexOf(e, t) {
            let n = new TS(e,t);
            return this.finishScalar(n)
        }
        newScalarArray(e, t, n, r, i) {
            let a = new yS(e,t,n,r,i);
            return this.finishScalar(a)
        }
        newScalarFlatArray(e, t, n, r, i) {
            let a = new xS(e,t,n,r,i);
            return this.finishScalar(a)
        }
        newScalarCast(e, t) {
            if (e.definition.type === t.type)
                return e;
            let n = new bS(e,t);
            return this.finishScalar(n)
        }
    }
    ,
    MS = class extends Sx {
    }
    ,
    NS = class e extends MS {
        constructor(e, t) {
            super(!1),
            this.input = e,
            this.fields = t,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return G(`EnforcerResolve`, this.inputGroup.id, this.fields)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering() {
            return !0
        }
        canProvideResolvedFields(e) {
            return e.subsetOf(this.fields)
        }
        getInputRequiredProps(e) {
            let t = new $;
            return new Nx(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n);
            return Q.estimate(0, 100 * vx).add(r)
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n);
            return new e(r,this.fields)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e);
            B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
            let n = new Set;
            for (let e of this.fields)
                B(e.collection, `Collection required to resolve field`),
                n.add(e.collection);
            for (let e of t.tuples)
                for (let t of this.fields) {
                    let n = e.getValue(t);
                    n?.type === `richtext` ? (B(n.value instanceof Cx, `Pointer must be wrapped`),
                    n.value.resolve()) : n?.type === `vectorsetitem` && (B(n.value instanceof wx, `Pointer must be wrapped`),
                    n.value.resolve())
                }
            let r = yield Promise.all(Array.from(n).map(async e => {
                let n = [];
                for (let r of t.tuples) {
                    let t = r.getPointer(e);
                    t && n.push(t)
                }
                let r = await e.data.resolveItems(n);
                return B(r.length === n.length, `Invalid number of items`),
                [e, r]
            }
            ));
            return t.map(t.fields, e => {
                let t = new Fx;
                t.merge(e);
                for (let[n,i] of r) {
                    let r = e.getPointer(n);
                    if (!r)
                        continue;
                    let a = i.shift();
                    B(a, `Item not found`),
                    B(a.pointer === r, `Pointer mismatch`);
                    for (let e of n.fields) {
                        let n = e.getValue(a);
                        t.addValue(e, n)
                    }
                }
                return t
            }
            )
        }
    }
    ,
    PS = {
        type: 0
    },
    FS = class e extends MS {
        constructor(e, t) {
            super(e.isSynchronous),
            this.input = e,
            this.ordering = t,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return G(`EnforcerSort`, this.inputGroup.id, this.ordering)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering(e) {
            return e.equals(this.ordering)
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new $(e.resolvedFields);
            for (let {field: e} of this.ordering.fields) {
                if (e.name === Tx || St(e.collection))
                    continue;
                t.add(e)
            }
            let n = new Mx;
            return new Nx(n,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n);
            return new Q(0).add(r)
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n);
            return new e(r,this.ordering)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e);
            return t.sort( (e, t) => {
                for (let {field: n, direction: r} of this.ordering.fields) {
                    let i = r === `asc`;
                    if (n.name === Tx) {
                        let r = n.collection;
                        B(r, `Collection required for sorting`);
                        let a = e.getPointer(r);
                        B(a, `Pointer required for sorting`);
                        let o = {
                            pointer: a,
                            data: {}
                        }
                          , s = t.getPointer(r);
                        B(s, `Pointer required for sorting`);
                        let c = {
                            pointer: s,
                            data: {}
                        }
                          , l = r.data.compareItems(o, c);
                        return i ? l : -l
                    }
                    let a = e.getValue(n)
                      , o = t.getValue(n);
                    if (Z.equal(a, o, PS))
                        continue;
                    if (Ct(a) || Z.lessThan(a, o, PS))
                        return i ? -1 : 1;
                    if (Ct(o) || Z.greaterThan(a, o, PS))
                        return i ? 1 : -1;
                    throw Error(`Invalid comparison`)
                }
                return 0
            }
            )
        }
    }
    ,
    IS = class {
        constructor(e, t) {
            this.query = e,
            this.locale = t,
            P(this, `memo`, new gS),
            P(this, `normalizer`, new jS(this.memo)),
            P(this, `explorer`, new mS(this.normalizer))
        }
        optimize() {
            let e = new Wx(this.normalizer,this.query,this.locale)
              , t = e.build()
              , n = t.takeNode()
              , r = n.getGroup()
              , i = t.getRequiredProps();
            this.optimizeGroup(r, i);
            let a = r.getOptimized(i)
              , o = t.getNamedFields();
            return [a, o]
        }
        optimizeGroup(e, t) {
            let n = e.getWinner(t);
            if (n.node)
                return n.cost;
            let r = e.nodes[0];
            B(r, `Normalized node not found`),
            this.createEnforcer(n, r, t);
            for (let r of e.nodes) {
                if (t.canProvide(r)) {
                    let e = r.optimize(this, t);
                    n.update(r, e)
                }
                t.isMinimal && this.explorer.explore(r)
            }
            return n.cost
        }
        createEnforcer(e, t, n) {
            if (n.resolvedFields.size > 0) {
                let r = new NS(t,n.resolvedFields)
                  , i = r.optimize(this, n);
                e.update(r, i)
            }
            if (n.ordering.length > 0) {
                let r = new FS(t,n.ordering)
                  , i = r.optimize(this, n);
                e.update(r, i)
            }
        }
    }
    ,
    LS = jl(`query-engine`),
    RS = class {
        async query(e, t) {
            LS.debug(`Query:
${Hu(e)}`);
            let n = new IS(e,t)
              , [r,i] = n.optimize()
              , a = await r.evaluateAsync()
              , o = Object.entries(i)
              , s = await Promise.all(a.tuples.map(async e => {
                let t = await Promise.all(o.map(async ([t,n]) => {
                    let r = e.getValue(n)
                      , i = await this.resolveValue(r);
                    return [t, i]
                }
                ));
                return Object.fromEntries(t)
            }
            ));
            return s
        }
        async resolveValue(e) {
            if (e?.type === `richtext`)
                return B(e.value instanceof Cx, `Pointer must be wrapped`),
                e.value.resolve();
            if (e?.type === `vectorsetitem`)
                return B(e.value instanceof wx, `Pointer must be wrapped`),
                e.value.resolve();
            if (e?.type === `array`)
                return Promise.all(e.value.map(async e => this.resolveValue(e)));
            if (e?.type === `object`) {
                let t = Object.entries(e.value)
                  , n = await Promise.all(t.map(async ([e,t]) => {
                    let n = await this.resolveValue(t);
                    return [e, n]
                }
                ));
                return Object.fromEntries(n)
            }
            return e?.value ?? null
        }
    }
    ,
    zS = class {
        constructor(e) {
            this.queryEngine = e,
            P(this, `cache`, new Map)
        }
        get(e, t) {
            let n = Gu(e, t)
              , r = this.cache.get(n);
            if (r)
                return r;
            let i = () => this.queryEngine.query(e, t)
              , a = new pb(i);
            return this.cache.set(n, a),
            a
        }
    }
    ,
    BS = new WeakMap,
    VS = `style[data-framer-breakpoint-css]`,
    HS = `page`,
    US = new RS,
    WS = new zS(US),
    GS = Symbol(`cycle`),
    JS = d.createContext(void 0),
    YS = () => d.useContext(JS),
    XS = {
        Arial: {
            Regular: {
                selector: `Arial`,
                weight: void 0
            },
            Black: {
                selector: `Arial-Black`,
                weight: void 0
            },
            Narrow: {
                selector: `Arial Narrow`,
                weight: void 0
            },
            "Rounded Bold": {
                selector: `Arial Rounded MT Bold`,
                weight: void 0
            }
        },
        Avenir: {
            Book: {
                selector: `Avenir`,
                weight: void 0
            },
            Light: {
                selector: `Avenir-Light`,
                weight: void 0
            },
            Medium: {
                selector: `Avenir-Medium`,
                weight: void 0
            },
            Heavy: {
                selector: `Avenir-Heavy`,
                weight: void 0
            },
            Black: {
                selector: `Avenir-Black`,
                weight: void 0
            }
        },
        "Avenir Next": {
            Regular: {
                selector: `Avenir Next`,
                weight: void 0
            },
            "Ultra Light": {
                selector: `AvenirNext-UltraLight`,
                weight: void 0
            },
            Medium: {
                selector: `AvenirNext-Medium`,
                weight: void 0
            },
            "Demi Bold": {
                selector: `AvenirNext-DemiBold`,
                weight: void 0
            },
            Heavy: {
                selector: `AvenirNext-Heavy`,
                weight: void 0
            }
        },
        "Avenir Next Condensed": {
            Regular: {
                selector: `Avenir Next Condensed`,
                weight: void 0
            },
            "Ultra Light": {
                selector: `AvenirNextCondensed-UltraLight`,
                weight: void 0
            },
            Medium: {
                selector: `AvenirNextCondensed-Medium`,
                weight: void 0
            },
            "Demi Bold": {
                selector: `AvenirNextCondensed-DemiBold`,
                weight: void 0
            },
            Heavy: {
                selector: `AvenirNextCondensed-Heavy`,
                weight: void 0
            }
        },
        Baskerville: {
            Regular: {
                selector: `Baskerville`,
                weight: void 0
            },
            "Semi Bold": {
                selector: `Baskerville-SemiBold`,
                weight: void 0
            }
        },
        "Bodoni 72": {
            Book: {
                selector: `Bodoni 72`,
                weight: void 0
            },
            Oldstyle: {
                selector: `Bodoni 72 Oldstyle`,
                weight: void 0
            },
            Smallcaps: {
                selector: `Bodoni 72 Smallcaps`,
                weight: void 0
            }
        },
        Courier: {
            Regular: {
                selector: `Courier`,
                weight: void 0
            }
        },
        "Courier New": {
            Regular: {
                selector: `Courier New`,
                weight: void 0
            }
        },
        Futura: {
            Medium: {
                selector: `Futura`,
                weight: void 0
            },
            Condensed: {
                selector: `Futura-CondensedMedium`,
                weight: void 0
            },
            "Condensed ExtraBold": {
                selector: `Futura-CondensedExtraBold`,
                weight: void 0
            }
        },
        Georgia: {
            Regular: {
                selector: `Georgia`,
                weight: void 0
            }
        },
        "Gill Sans": {
            Regular: {
                selector: `Gill Sans`,
                weight: void 0
            },
            Light: {
                selector: `GillSans-Light`,
                weight: void 0
            },
            SemiBold: {
                selector: `GillSans-SemiBold`,
                weight: void 0
            },
            UltraBold: {
                selector: `GillSans-UltraBold`,
                weight: void 0
            }
        },
        Helvetica: {
            Regular: {
                selector: `Helvetica`,
                weight: void 0
            },
            Light: {
                selector: `Helvetica-Light`,
                weight: void 0
            },
            Bold: {
                selector: `Helvetica-Bold`,
                weight: void 0
            },
            Oblique: {
                selector: `Helvetica-Oblique`,
                weight: void 0
            },
            "Light Oblique": {
                selector: `Helvetica-LightOblique`,
                weight: void 0
            },
            "Bold Oblique": {
                selector: `Helvetica-BoldOblique`,
                weight: void 0
            }
        },
        "Helvetica Neue": {
            Regular: {
                selector: `Helvetica Neue`,
                weight: void 0
            },
            UltraLight: {
                selector: `HelveticaNeue-UltraLight`,
                weight: void 0
            },
            Thin: {
                selector: `HelveticaNeue-Thin`,
                weight: void 0
            },
            Light: {
                selector: `HelveticaNeue-Light`,
                weight: void 0
            },
            Medium: {
                selector: `HelveticaNeue-Medium`,
                weight: void 0
            },
            Bold: {
                selector: `HelveticaNeue-Bold`,
                weight: void 0
            },
            Italic: {
                selector: `HelveticaNeue-Italic`,
                weight: void 0
            },
            "UltraLight Italic": {
                selector: `HelveticaNeue-UltraLightItalic`,
                weight: void 0
            },
            "Thin Italic": {
                selector: `HelveticaNeue-ThinItalic`,
                weight: void 0
            },
            "Light Italic": {
                selector: `HelveticaNeue-LightItalic`,
                weight: void 0
            },
            "Medium Italic": {
                selector: `HelveticaNeue-MediumItalic`,
                weight: void 0
            },
            "Bold Italic": {
                selector: `HelveticaNeue-BoldItalic`,
                weight: void 0
            },
            "Condensed Bold": {
                selector: `HelveticaNeue-CondensedBold`,
                weight: void 0
            },
            "Condensed Black": {
                selector: `HelveticaNeue-CondensedBlack`,
                weight: void 0
            }
        },
        "Hoefler Text": {
            Regular: {
                selector: `Hoefler Text`,
                weight: void 0
            }
        },
        Impact: {
            Regular: {
                selector: `Impact`,
                weight: void 0
            }
        },
        "Lucida Grande": {
            Regular: {
                selector: `Lucida Grande`,
                weight: void 0
            }
        },
        Menlo: {
            Regular: {
                selector: `Menlo`,
                weight: void 0
            }
        },
        Monaco: {
            Regular: {
                selector: `Monaco`,
                weight: void 0
            }
        },
        Optima: {
            Regular: {
                selector: `Optima`,
                weight: void 0
            },
            ExtraBlack: {
                selector: `Optima-ExtraBlack`,
                weight: void 0
            }
        },
        Palatino: {
            Regular: {
                selector: `Palatino`,
                weight: void 0
            }
        },
        "SF Pro Display": {
            Regular: {
                selector: `__SF-UI-Display-Regular__`,
                weight: 400
            },
            Ultralight: {
                selector: `__SF-UI-Display-Ultralight__`,
                weight: 100
            },
            Thin: {
                selector: `__SF-UI-Display-Thin__`,
                weight: 200
            },
            Light: {
                selector: `__SF-UI-Display-Light__`,
                weight: 300
            },
            Medium: {
                selector: `__SF-UI-Display-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Display-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Display-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Display-Heavy__`,
                weight: 800
            },
            Black: {
                selector: `__SF-UI-Display-Black__`,
                weight: 900
            },
            Italic: {
                selector: `__SF-UI-Display-Italic__`,
                weight: 400
            },
            "Ultralight Italic": {
                selector: `__SF-UI-Display-Ultralight-Italic__`,
                weight: 100
            },
            "Thin Italic": {
                selector: `__SF-UI-Display-Thin-Italic__`,
                weight: 200
            },
            "Light Italic": {
                selector: `__SF-UI-Display-Light-Italic__`,
                weight: 300
            },
            "Medium Italic": {
                selector: `__SF-UI-Display-Medium-Italic__`,
                weight: 500
            },
            "Semibold Italic": {
                selector: `__SF-UI-Display-Semibold-Italic__`,
                weight: 600
            },
            "Bold Italic": {
                selector: `__SF-UI-Display-Bold-Italic__`,
                weight: 700
            },
            "Heavy Italic": {
                selector: `__SF-UI-Display-Heavy-Italic__`,
                weight: 800
            },
            "Black Italic": {
                selector: `__SF-UI-Display-Black-Italic__`,
                weight: 900
            }
        },
        "SF Pro Display Condensed": {
            Regular: {
                selector: `__SF-UI-Display-Condensed-Regular__`,
                weight: 400
            },
            Ultralight: {
                selector: `__SF-UI-Display-Condensed-Ultralight__`,
                weight: 100
            },
            Thin: {
                selector: `__SF-UI-Display-Condensed-Thin__`,
                weight: 200
            },
            Light: {
                selector: `__SF-UI-Display-Condensed-Light__`,
                weight: 300
            },
            Medium: {
                selector: `__SF-UI-Display-Condensed-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Display-Condensed-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Display-Condensed-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Display-Condensed-Heavy__`,
                weight: 800
            },
            Black: {
                selector: `__SF-UI-Display-Condensed-Black__`,
                weight: 900
            }
        },
        "SF Pro Text": {
            Regular: {
                selector: `__SF-UI-Text-Regular__`,
                weight: 400
            },
            Light: {
                selector: `__SF-UI-Text-Light__`,
                weight: 200
            },
            Medium: {
                selector: `__SF-UI-Text-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Text-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Text-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Text-Heavy__`,
                weight: 800
            },
            Italic: {
                selector: `__SF-UI-Text-Italic__`,
                weight: 400
            },
            "Light Italic": {
                selector: `__SF-UI-Text-Light-Italic__`,
                weight: 200
            },
            "Medium Italic": {
                selector: `__SF-UI-Text-Medium-Italic__`,
                weight: 500
            },
            "Semibold Italic": {
                selector: `__SF-UI-Text-Semibold-Italic__`,
                weight: 600
            },
            "Bold Italic": {
                selector: `__SF-UI-Text-Bold-Italic__`,
                weight: 700
            },
            "Heavy Italic": {
                selector: `__SF-UI-Text-Heavy-Italic__`,
                weight: 800
            }
        },
        "SF Pro Text Condensed": {
            Regular: {
                selector: `__SF-UI-Text-Condensed-Regular__`,
                weight: 400
            },
            Light: {
                selector: `__SF-UI-Text-Condensed-Light__`,
                weight: 200
            },
            Medium: {
                selector: `__SF-UI-Text-Condensed-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Text-Condensed-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Text-Condensed-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Text-Condensed-Heavy__`,
                weight: 800
            }
        },
        Tahoma: {
            Regular: {
                selector: `Tahoma`,
                weight: void 0
            }
        },
        Times: {
            Regular: {
                selector: `Times`,
                weight: void 0
            }
        },
        "Times New Roman": {
            Regular: {
                selector: `Times New Roman`,
                weight: void 0
            }
        },
        Trebuchet: {
            Regular: {
                selector: `Trebuchet MS`,
                weight: void 0
            }
        },
        Verdana: {
            Regular: {
                selector: `Verdana`,
                weight: void 0
            }
        }
    },
    ZS = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`
    },
    QS = XS,
    $S = `System Default`,
    eC = class {
        constructor() {
            P(this, `name`, `local`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map),
            P(this, `fontAliasBySelector`, new Map),
            P(this, `fontAliases`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        createFontFamily(e) {
            let t = {
                name: e,
                fonts: [],
                source: this.name
            };
            return this.addFontFamily(t),
            t
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        importFonts() {
            let e = [];
            for (let t of Object.keys(QS)) {
                let n = QS[t];
                if (!n)
                    continue;
                let r = this.createFontFamily(t);
                for (let e of Object.keys(n)) {
                    let t = n[e];
                    if (!t)
                        continue;
                    let {selector: i, weight: a} = t
                      , o = {
                        variant: e,
                        selector: i,
                        weight: a,
                        family: r
                    };
                    r.fonts.push(o)
                }
                e.push(...r.fonts)
            }
            for (let[e,t] of Object.entries(ZS))
                this.addFontAlias(e, t);
            let {fontFamily: t, aliases: n} = this.getSystemFontFamily();
            this.addFontFamily(t);
            for (let[e,t] of n)
                this.addFontAlias(e, t);
            return e.push(...t.fonts),
            e
        }
        addFontAlias(e, t) {
            this.fontAliases.set(e, t),
            this.fontAliasBySelector.set(t, e)
        }
        getSystemFontFamily() {
            let e = `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
              , t = {
                name: $S,
                fonts: [],
                source: this.name
            }
              , n = new Map
              , r = [400, 100, 200, 300, 500, 600, 700, 800, 900]
              , i = [`normal`, `italic`];
            for (let a of i)
                for (let i of r) {
                    let r = jd(i, a)
                      , o = `__SystemDefault-${i}-${a}__`
                      , s = {
                        variant: r,
                        selector: o,
                        style: a,
                        weight: i,
                        family: t
                    };
                    t.fonts.push(s),
                    n.set(o, e)
                }
            return {
                fontFamily: t,
                aliases: n
            }
        }
        getFontAliasBySelector(e) {
            return this.fontAliasBySelector.get(e) || null
        }
        getFontSelectorByAlias(e) {
            return this.fontAliases.get(e) || null
        }
        isFontFamilyAlias(e) {
            return !!(e && /^__.*__$/u.exec(e))
        }
    }
    ,
    tC = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`
    },
    nC = `BI;`,
    rC = class {
        constructor() {
            P(this, `name`, `builtIn`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map),
            P(this, `assetsByFamily`, new Map)
        }
        importFonts(e) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear(),
            this.assetsByFamily.clear();
            let t = [];
            for (let n of e) {
                if (!this.isValidBuiltInFont(n))
                    continue;
                let {properties: e} = n
                  , r = e.font.preferredFamily || e.font.fontFamily
                  , i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion)
                  , a = e.font.openTypeData
                  , o = e.font.variationAxes
                  , s = Array.isArray(o)
                  , c = s ? `variable` : e.font.preferredSubFamily || e.font.fontSubFamily || `regular`
                  , l = {
                    family: i,
                    selector: this.createSelector(r, c, e.font.fontVersion),
                    variant: c,
                    file: n.url,
                    hasOpenTypeFeatures: Fd(a),
                    variationAxes: Id(o),
                    category: e.font.fontCategory,
                    weight: zd(c),
                    style: Vd(c)
                };
                i.fonts.push(l),
                this.assetsByFamily.set(r, n),
                t.push(l)
            }
            for (let e of this.fontFamilies)
                e.fonts.sort( (e, t) => {
                    let n = zd(e.variant)
                      , r = zd(t.variant);
                    return !n || !r ? 1 : n - r
                }
                );
            return t
        }
        static parseVariant(e) {
            let t = Bd(e)
              , n = iC[t]
              , r = Vd(e);
            return {
                weight: n,
                style: r
            }
        }
        getFontBySelector(e, t=!0) {
            let n = this.parseSelector(e);
            if (!n || !t && !this.byFamilyName.get(n.name))
                return;
            let r = this.getFontFamilyByName(n.name);
            if (r)
                return r.fonts.find(t => t.selector === e)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        createFontFamily(e, t, n) {
            let r = this.byFamilyName.get(e);
            if (r && r.version === n)
                return r;
            let i = {
                source: this.name,
                name: e,
                fonts: [],
                foundryName: t,
                version: n
            };
            return this.addFontFamily(i),
            i
        }
        getOpenTypeFeatures(e) {
            var t, n;
            let r = this.assetsByFamily.get(e)
              , i = (n = (t = r?.properties)?.font)?.openTypeData;
            return Fd(i) ? i?.map(e => {
                if (Ld(e))
                    return {
                        tag: e.tag,
                        coverage: e.coverage
                    }
            }
            ) : []
        }
        isValidBuiltInFont(e) {
            var t;
            return !e.mimeType.startsWith(`font/`) || (t = e.properties)?.kind !== `font` || !e.properties.font || !e.properties.font.fontVersion || !e.properties.font.fontFamily ? !1 : `fontFamily`in e.properties.font
        }
        createSelector(e, t, n) {
            return `${nC}${e}/${t}/${n}`
        }
        parseSelector(e) {
            if (!e.startsWith(nC))
                return null;
            let[t,n] = e.split(nC);
            if (n === void 0)
                return null;
            let[r,i,a] = n.split(`/`);
            return !r || !i || !a ? null : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`)
            }
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
    }
    ,
    iC = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        variable: 1e3,
        "variable-italic": 1e3
    },
    aC = `CUSTOM;`,
    oC = class {
        constructor() {
            P(this, `name`, `custom`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map),
            P(this, `assetsByFamily`, new Map)
        }
        importFonts(e) {
            var t, n, r;
            this.fontFamilies.length = 0,
            this.byFamilyName.clear(),
            this.assetsByFamily.clear();
            let i = [];
            for (let a of e) {
                if (!this.isValidCustomFontAsset(a))
                    continue;
                let e = (t = a.properties)?.font.variationAxes
                  , o = Array.isArray(e)
                  , s = Hd(a.name, a.properties)
                  , c = this.createFontFamily(s)
                  , l = (n = a.properties)?.font.openTypeData
                  , u = o ? `variable` : this.inferVariantName(s)
                  , d = {
                    family: c,
                    selector: `${aC}${s}`,
                    variant: u,
                    postscriptName: (r = a.properties)?.font.postscriptName,
                    file: a.url,
                    hasOpenTypeFeatures: Fd(l),
                    variationAxes: Id(e)
                };
                c.fonts.push(d),
                c.owner = a.ownerType === `team` ? `team` : `project`,
                this.assetsByFamily.set(s, a),
                i.push(...c.fonts)
            }
            return i
        }
        isValidCustomFontAsset(e) {
            var t;
            return !e.mimeType.startsWith(`font/`) || (t = e.properties)?.kind !== `font` || !e.properties.font ? !1 : `fontFamily`in e.properties.font
        }
        getOpenTypeFeatures(e) {
            var t, n;
            let r = this.assetsByFamily.get(e)
              , i = (n = (t = r?.properties)?.font)?.openTypeData;
            return Fd(i) ? i?.map(e => {
                if (Ld(e))
                    return {
                        tag: e.tag,
                        coverage: e.coverage
                    }
            }
            ) : []
        }
        inferVariantName(e) {
            let t = [`thin`, `ultra light`, `extra light`, `light`, `normal`, `medium`, `semi bold`, `bold`, `extra bold`, `black`]
              , n = [...t.map(e => `${e} italic`), ...t]
              , r = e.toLowerCase()
              , i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)]
              , a = n.find(e => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
            return a ? a.replace(/^\w|\s\w/gu, e => e.toUpperCase()) : `Regular`
        }
        createFontFamily(e) {
            let t = this.byFamilyName.get(e);
            if (t)
                return t;
            let n = {
                source: this.name,
                name: e,
                fonts: []
            };
            return this.addFontFamily(n),
            n
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        parseSelector(e) {
            if (!e.startsWith(aC))
                return null;
            let t = e.split(aC);
            if (t[1] === void 0)
                return null;
            let n = {
                source: `custom`,
                name: t[1]
            };
            return n
        }
        getFontBySelector(e, t=!0) {
            let n = this.parseSelector(e);
            if (!n || !t && !this.byFamilyName.get(n.name))
                return;
            let r = this.getFontFamilyByName(n.name).fonts
              , i = r.find(e => {
                var t;
                return (t = e.file)?.endsWith(`.woff2`)
            }
            );
            return i || r[0]
        }
        getFontFamilyByName(e) {
            let t = this.byFamilyName.get(e);
            if (t)
                return t;
            let n = {
                source: `custom`,
                name: e,
                fonts: []
            };
            return n.fonts.push({
                selector: `${aC}${e}`,
                variant: this.inferVariantName(e),
                family: n
            }),
            n
        }
    }
    ,
    sC = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`],
    cC = `FS;`,
    lC = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900
    },
    uC = Object.keys(lC),
    dC = ( () => RegExp(`^(?:${[...uC, `italic`, `variable`].join(`|`)})`, `u`))(),
    fC = class e {
        constructor() {
            P(this, `name`, `fontshare`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        static parseVariant(e) {
            let t = e.toLowerCase().split(` `)
              , n = uC.find(e => t.includes(e))
              , r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`
              , i = n && lC[n] || 400
              , a = r === `italic` ? r : `normal`;
            return {
                weight: i,
                style: a
            }
        }
        parseSelector(e) {
            if (!e.startsWith(cC))
                return null;
            let t = e.split(`-`);
            if (t.length !== 2)
                return null;
            let[n,r] = t;
            return !n || !r ? null : {
                name: n.replace(cC, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`)
            }
        }
        static createSelector(e, t) {
            return `${cC}${e}-${t.toLowerCase()}`
        }
        static createMetadataSelector(e) {
            return `${cC}${e}`
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        async importFonts(t, n) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let r = await Kd(`fontshare`)
              , i = [];
            for (let a of t) {
                let t = a.font_styles.filter(e => {
                    let t = e.name.toLowerCase()
                      , n = dC.exec(t);
                    return !(!n || t.split(` `).includes(`wide`))
                }
                )
                  , o = t.map(t => {
                    let n = e.parseVariant(t.name);
                    return {
                        ...n,
                        selector: e.createSelector(a.name, t.name),
                        isVariable: t.is_variable,
                        fontshareVariantName: t.name,
                        file: t.file
                    }
                }
                )
                  , s = e.createMetadataSelector(a.name)
                  , c = n?.[s]
                  , l = a.name
                  , u = this.getFontFamilyByName(l);
                u || (u = {
                    name: l,
                    fonts: [],
                    source: this.name
                },
                this.addFontFamily(u));
                let d = e.createMetadataSelector(a.name)
                  , f = r[d];
                for (let e of o) {
                    let {variantBold: t, variantBoldItalic: n, variantItalic: r, variantVariable: s, variantVariableItalic: l} = Ud(e, o)
                      , d = {
                        family: u,
                        variant: e.fontshareVariantName.toLowerCase(),
                        selector: e.selector,
                        selectorBold: t?.selector,
                        selectorBoldItalic: n?.selector,
                        selectorItalic: r?.selector,
                        selectorVariable: s?.selector,
                        selectorVariableItalic: l?.selector,
                        weight: e.weight,
                        style: e.style,
                        file: e.file,
                        category: Xd(a.category),
                        hasOpenTypeFeatures: f,
                        variationAxes: e.isVariable ? c : void 0
                    };
                    u.fonts.push(d),
                    i.push(d)
                }
            }
            return i
        }
        async getOpenTypeFeatures(t) {
            let n = await qd(`fontshare`)
              , r = e.createMetadataSelector(t);
            return n[r]
        }
    }
    ,
    pC = `Inter`,
    mC = `FR;`,
    hC = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900
    },
    gC = class e {
        constructor() {
            P(this, `name`, `framer`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        addFontFamily(e) {
            let t = {
                name: e,
                fonts: [],
                source: this.name
            };
            return this.fontFamilies.push(t),
            this.byFamilyName.set(t.name, t),
            t
        }
        static getDraftFontPropertiesBySelector(e) {
            if (!e.startsWith(mC) && !e.startsWith(pC))
                return null;
            let t = e.split(`-`)
              , [n,r=``] = t;
            if (!n)
                return null;
            let i = r.includes(`Italic`) ? `italic` : `normal`
              , a = r.replace(`Italic`, ``)
              , o = a && hC[a] || 400;
            return {
                family: n,
                style: i,
                weight: o,
                source: `framer`,
                variant: void 0,
                category: `sans-serif`
            }
        }
        static createMetadataSelector(e) {
            return `${mC}${e}`
        }
        importFonts(t, n) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let r = [];
            return t.forEach(t => {
                let {familyName: i, ...a} = t
                  , o = e.createMetadataSelector(t.familyName)
                  , s = n?.[o]
                  , c = this.getFontFamilyByName(i);
                c ||= this.addFontFamily(i);
                let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic
                  , u = {
                    ...a,
                    family: c,
                    variationAxes: l ? s : void 0
                };
                c.fonts.push(u),
                r.push(u)
            }
            ),
            r
        }
        async getOpenTypeFeatures(t) {
            let n = await qd(`framer`)
              , r = e.createMetadataSelector(t);
            return n[r]
        }
    }
    ,
    _C = `GF;`,
    vC = class e {
        constructor() {
            P(this, `name`, `google`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        static parseVariant(e) {
            if (e === `regular`)
                return {
                    style: `normal`,
                    weight: 400
                };
            let t = /(\d*)(normal|italic)?/u.exec(e);
            if (!t)
                return {};
            let n = parseInt(t[1] || `400`)
              , r = t[2] === `italic` ? `italic` : `normal`;
            return {
                weight: n,
                style: r
            }
        }
        parseSelector(e) {
            if (!e.startsWith(_C))
                return null;
            let t = e.includes(`-variable-`)
              , n = t ? e.split(`-variable-`) : e.split(`-`);
            if (n.length !== 2)
                return null;
            let[r,i] = n;
            return !r || !i ? null : {
                name: r.replace(_C, ``),
                variant: i,
                source: this.name,
                isVariable: t
            }
        }
        static createSelector(e, t, n) {
            return `${_C}${e}-${n ? `variable-` : ``}${t}`
        }
        static createMetadataSelector(e) {
            return `${_C}${e}`
        }
        addFontFamily(e) {
            let t = {
                name: e,
                fonts: [],
                source: this.name
            };
            return this.fontFamilies.push(t),
            this.byFamilyName.set(t.name, t),
            t
        }
        async importFonts(t, n, r) {
            var i;
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let a = await Kd(`google`)
              , o = []
              , s = Qd(t, e => e.family)
              , c = Qd(n, e => e.family);
            for (let t in s) {
                let n = s[t];
                if (!n)
                    continue;
                let l = this.getFontFamilyByName(n.family);
                l ||= this.addFontFamily(n.family);
                let u = n.variants
                  , d = u.map(r => {
                    let i = e.parseVariant(r);
                    return {
                        ...i,
                        googleFontsVariantName: r,
                        selector: e.createSelector(t, r, !1),
                        isVariable: !1,
                        file: n.files[r]
                    }
                }
                )
                  , f = c[t]
                  , p = f?.axes ? f.variants.map(n => {
                    let r = e.parseVariant(n);
                    return {
                        ...r,
                        googleFontsVariantName: n,
                        selector: e.createSelector(t, n, !0),
                        isVariable: !0,
                        file: f.files[n]
                    }
                }
                ) : []
                  , m = e.createMetadataSelector(n.family)
                  , h = r?.[m]
                  , g = [...d, ...p]
                  , _ = g.filter(Ad)
                  , v = e.createMetadataSelector(t)
                  , y = a[v];
                for (let e of g) {
                    let {weight: t, style: r, selector: a, googleFontsVariantName: s} = e
                      , c = Ad(e) ? Ud(e, _) : void 0
                      , {variantBold: u, variantItalic: d, variantBoldItalic: f, variantVariable: p, variantVariableItalic: m} = c ?? {}
                      , g = {
                        family: l,
                        variant: s,
                        selector: a,
                        selectorBold: u?.selector,
                        selectorBoldItalic: f?.selector,
                        selectorItalic: d?.selector,
                        selectorVariable: p?.selector,
                        selectorVariableItalic: m?.selector,
                        weight: t,
                        style: r,
                        category: Zd(n.category),
                        file: (i = e.file)?.replace(`http://`, `https://`),
                        variationAxes: e.isVariable ? h : void 0,
                        hasOpenTypeFeatures: y
                    };
                    l.fonts.push(g),
                    o.push(g)
                }
            }
            return o
        }
        async getOpenTypeFeatures(t) {
            let n = await qd(`google`)
              , r = e.createMetadataSelector(t);
            return n[r]
        }
    }
    ,
    yC = ge(mp(), 1),
    bC = 5e3,
    xC = 3,
    SC = class extends Error {
        constructor(e) {
            super(e),
            this.name = `FontLoadingError`
        }
    }
    ,
    CC = new Map,
    wC = new Map,
    TC = (e, t) => $d(e, t),
    EC = {
        "FR;Inter": [{
            tag: `opsz`,
            minValue: 14,
            maxValue: 32,
            defaultValue: 14,
            name: `Optical size`
        }, {
            tag: `wght`,
            minValue: 100,
            maxValue: 900,
            defaultValue: 400,
            name: `Weight`
        }]
    },
    DC = class {
        constructor() {
            P(this, `enabled`, !1),
            P(this, `bySelector`, new Map),
            P(this, `loadedSelectors`, new Set),
            P(this, `getGoogleFontsListPromise`),
            P(this, `getFontshareFontsListPromise`),
            P(this, `getBuiltInFontsListPromise`),
            P(this, `customFontsImportPromise`, new Promise(e => {
                this.resolveCustomFontsImportPromise = e
            }
            )),
            P(this, `local`),
            P(this, `google`),
            P(this, `fontshare`),
            P(this, `builtIn`),
            P(this, `framer`),
            P(this, `custom`),
            this.local = new eC,
            this.google = new vC,
            this.fontshare = new fC,
            this.framer = new gC,
            this.custom = new oC,
            this.builtIn = new rC,
            this.bySelector = new Map,
            this.importLocalFonts()
        }
        addFont(e) {
            this.bySelector.set(e.selector, e)
        }
        getAvailableFonts() {
            return Array.from(this.bySelector.values())
        }
        importLocalFonts() {
            for (let e of this.local.importFonts())
                this.addFont(e),
                this.loadFont(e)
        }
        async importGoogleFonts() {
            return this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
                let {staticFonts: e, variableFonts: t} = await __.fetchGoogleFontsList()
                  , n = await tf(`google`);
                for (let r of await this.google.importFonts(e, t, n))
                    this.addFont(r);
                return {
                    staticFonts: e,
                    variableFonts: t
                }
            }
            ),
            this.getGoogleFontsListPromise
        }
        async importFontshareFonts() {
            if (!this.getFontshareFontsListPromise) {
                this.getFontshareFontsListPromise = __.fetchFontshareFontsList();
                let e = await this.getFontshareFontsListPromise
                  , t = await tf(`fontshare`);
                for (let n of await this.fontshare.importFonts(e, t))
                    this.addFont(n)
            }
            return this.getFontshareFontsListPromise
        }
        async importBuiltInFonts() {
            if (!this.getBuiltInFontsListPromise) {
                this.getBuiltInFontsListPromise = __.fetchBuiltInFontsList();
                let e = await this.getBuiltInFontsListPromise;
                for (let t of await this.builtIn.importFonts(e))
                    this.addFont(t)
            }
            return this.getBuiltInFontsListPromise
        }
        importFramerFonts(e) {
            let t = tf(`framer`);
            this.framer.importFonts(e, t).forEach(e => {
                this.addFont(e)
            }
            )
        }
        importCustomFonts(e) {
            this.bySelector.forEach( (e, t) => {
                t.startsWith(aC) && this.bySelector.delete(t)
            }
            );
            let t = this.custom.importFonts(e);
            for (let e of t)
                this.addFont(e);
            t.length > 0 && this.resolveCustomFontsImportPromise()
        }
        getFontFamily(e) {
            let t = this[e.source].getFontFamilyByName(e.name);
            return t
        }
        getFontBySelector(e, t=!0) {
            if (e)
                return e.startsWith(aC) ? this.custom.getFontBySelector(e, t) : this.bySelector.get(e)
        }
        getDraftPropertiesBySelector(e) {
            let t = this.getFontBySelector(e);
            if (t)
                return {
                    style: t.style,
                    weight: t.weight,
                    variant: t.variant,
                    family: Nd(t),
                    source: t.family.source,
                    category: t.category
                };
            let n = this.google.parseSelector(e);
            if (n) {
                let e = vC.parseVariant(n.variant);
                if (Ad(e)) {
                    let t = n.isVariable ? Pd(n.name) : n.name;
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: n.variant,
                        family: t,
                        source: `google`,
                        category: void 0
                    }
                }
            }
            let r = this.fontshare.parseSelector(e);
            if (r) {
                let e = fC.parseVariant(r.variant);
                if (Ad(e)) {
                    let t = r.isVariable ? Pd(r.name) : r.name;
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: r.variant,
                        family: t,
                        source: `fontshare`,
                        category: void 0
                    }
                }
            }
            let i = this.builtIn.parseSelector(e);
            if (i) {
                let e = rC.parseVariant(i.variant);
                if (Ad(e)) {
                    let t = i.isVariable ? Pd(i.name) : i.name;
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: i.variant,
                        family: t,
                        source: `builtIn`,
                        category: void 0
                    }
                }
            }
            let a = gC.getDraftFontPropertiesBySelector(e);
            return a || null
        }
        isSelectorLoaded(e) {
            return this.loadedSelectors.has(e)
        }
        async loadFont(e) {
            if (this.isSelectorLoaded(e.selector))
                return 0;
            let t = e.family.source
              , n = Md(e);
            switch (t) {
            case `local`:
                return this.loadedSelectors.add(e.selector),
                1;
            case `framer`:
                if (j_() || await ef(e.family.name, e.style, e.weight),
                n) {
                    if (!e.file)
                        return Promise.reject(`Unable to load font: ${e.selector}`);
                    await TC({
                        family: Nd(e),
                        url: e.file,
                        weight: e.weight,
                        style: e.style,
                        isVariableFont: n
                    }, document)
                }
                return this.loadedSelectors.add(e.selector),
                1;
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
                return e.file ? (await TC({
                    family: Nd(e),
                    url: e.file,
                    weight: e.weight,
                    style: e.style,
                    isVariableFont: n
                }, document),
                this.loadedSelectors.add(e.selector),
                1) : Promise.reject(`Unable to load font: ${e.selector}`);
            default:
                V(t)
            }
        }
        async loadFontsFromSelectors(e) {
            if (!this.enabled)
                return [];
            let t = []
              , n = e.some(e => e.startsWith(cC));
            n && t.push(this.importFontshareFonts().catch(e => {
                rr(`Failed to load Fontshare fonts:`, e)
            }
            ));
            let r = e.some(e => e.startsWith(_C));
            r && t.push(this.importGoogleFonts().catch(e => {
                rr(`Failed to load Google fonts:`, e)
            }
            ));
            let i = e.some(e => e.startsWith(nC));
            i && t.push(this.importBuiltInFonts().catch(e => {
                rr(`Failed to load built-in fonts:`, e)
            }
            ));
            let a = e.some(e => e.startsWith(aC));
            a && t.push(this.customFontsImportPromise.catch(e => {
                rr(`Failed to load custom fonts:`, e)
            }
            )),
            t.length > 0 && await Promise.all(t);
            let o = e.map(e => this.bySelector.get(e)).filter(e => !!e);
            return Promise.allSettled(o.map(e => this.loadFont(e)))
        }
        async loadFonts(e) {
            let t = await this.loadFontsFromSelectors(e)
              , n = t.filter(e => e.status === `fulfilled` && e.value === 1).length;
            return {
                newlyLoadedFontCount: n
            }
        }
        async loadMissingFonts(e, t) {
            let n = e.filter(e => !OC.isSelectorLoaded(e));
            if (n.length === 0)
                return;
            await OC.loadWebFontsFromSelectors(n);
            let r = n.every(e => OC.isSelectorLoaded(e));
            r && t && t()
        }
        async loadWebFontsFromSelectors(e) {
            return this.loadFontsFromSelectors(e)
        }
        get defaultFont() {
            let e = this.getFontBySelector(`Inter`);
            return B(e, `Can’t find Inter font`),
            e
        }
    }
    ,
    OC = new DC,
    kC = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`
    },
    AC = s(function(e, t) {
        let {autoFocus: n, className: r, inputName: i, max: a, min: o, placeholder: s, required: l, step: u, style: d, type: f, maxLength: p, defaultValue: m, autofillEnabled: h, onChange: g, onBlur: _, onInvalid: v, onFocus: y, onValid: b, ...S} = e
          , [C,w] = ee(!!m)
          , [T,D] = ee();
        m !== T && (w(!!m),
        D(m));
        let O = E(async e => {
            await Mt({
                continueAfter: `paint`
            });
            let t = e.target.value;
            g?.(e),
            c( () => w(!!t))
        }
        , [g])
          , k = Ai(b, v, O, _, y);
        if (f === `hidden`)
            return x(De.input, {
                type: `hidden`,
                name: i,
                defaultValue: m
            });
        let A = h === !1 ? kC : void 0;
        return x(De.div, {
            ref: t,
            style: d,
            className: Zo(MC, sg, r),
            ...S,
            children: f === `textarea` ? x(De.textarea, {
                ...A,
                ...k,
                required: l,
                autoFocus: n,
                name: i,
                placeholder: s,
                className: og,
                defaultValue: m,
                maxLength: p
            }, m) : x(De.input, {
                ...A,
                ...k,
                type: f,
                required: l,
                autoFocus: n,
                name: i,
                placeholder: s,
                className: Zo(og, !C && cg),
                defaultValue: m,
                min: o,
                max: a,
                step: u,
                maxLength: p
            }, m)
        })
    }),
    jC = 16,
    MC = `framer-form-text-input`,
    NC = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`,
    PC = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`,
    FC = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`,
    IC = ( () => [...ug, ...pg, ...dg, U(`.${sg}`, {
        boxShadow: U.variable(`--framer-input-box-shadow`),
        borderTopLeftRadius: U.variable(`--framer-input-border-radius-top-left`),
        borderTopRightRadius: U.variable(`--framer-input-border-radius-top-right`),
        borderBottomRightRadius: U.variable(`--framer-input-border-radius-bottom-right`),
        borderBottomLeftRadius: U.variable(`--framer-input-border-radius-bottom-left`),
        background: U.variable(`--framer-input-background`),
        transition: U.variable(`--framer-input-focused-transition`),
        transitionProperty: `background, box-shadow`
    }), U(`.${MC} .${og}::placeholder`, {
        color: U.variable(`--framer-input-placeholder-color`)
    }), U(`.${MC} .${og}[type="date"], .${MC} .${og}[type="time"]`, {
        "-webkit-appearance": `none`,
        appearance: `none`
    }), U(`.${MC} .${og}::-webkit-date-and-time-value`, {
        textAlign: `start`
    }), U(`.${MC} textarea`, {
        display: `flex`,
        resize: U.variable(`--framer-textarea-resize`),
        overflowY: `auto`,
        minHeight: `inherit`,
        maxHeight: `inherit`,
        whiteSpace: `break-spaces`
    }), U(`.${MC} textarea::-webkit-resizer`, {
        background: `no-repeat ${Dt(NC)}`
    }), U(`.${MC} textarea::-webkit-scrollbar`, {
        cursor: `pointer`,
        background: `transparent`
    }), U(`.${MC} textarea::-webkit-scrollbar-thumb:window-inactive`, {
        opacity: 0
    }), U(`.${MC} textarea::-webkit-scrollbar-corner`, {
        background: `none`,
        backgroundColor: `transparent`,
        outline: `none`
    }), U(`.${MC} .${og}::-webkit-datetime-edit`, {
        height: U.variable(`--framer-input-font-line-height`)
    }), U(`.${MC} .${og}.${cg}::-webkit-datetime-edit`, {
        color: U.variable(`--framer-input-placeholder-color`),
        "-webkit-text-fill-color": U.variable(`--framer-input-placeholder-color`),
        overflow: `visible`
    }), U(`.${MC} .${og}[type="date"]::before, .${MC} .${og}[type="time"]::before`, {
        ...vg,
        paddingLeft: `${gg}px`,
        maskPosition: `${gg}px center`,
        backgroundPosition: `${gg}px center`
    }), U(`.${MC} .${og}[type="date"]::before`, {
        maskImage: U.variable(`--framer-input-icon-mask-image`, Dt(PC)),
        backgroundImage: U.variable(`--framer-input-icon-image`)
    }), U(`.${MC} .${og}[type="time"]::before`, {
        maskImage: U.variable(`--framer-input-icon-mask-image`, Dt(FC)),
        backgroundImage: U.variable(`--framer-input-icon-image`)
    }), U(`.${MC} .${og}::-webkit-calendar-picker-indicator`, {
        opacity: 0,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        padding: U.variable(`--framer-input-padding`),
        paddingTop: 0,
        paddingBottom: 0,
        width: `${jC}px`,
        height: `100%`
    }), U(`.${MC}:focus-within, .${MC}.${lg}`, {
        boxShadow: U.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
        background: U.variable(`--framer-input-focused-background`, `--framer-input-background`)
    }), U(`.${MC}:focus-within::after, .${MC}.${lg}::after`, {
        borderColor: U.variable(`--framer-input-focused-border-color`, `--framer-input-border-color`),
        borderStyle: U.variable(`--framer-input-focused-border-style`, `--framer-input-border-style`),
        borderWidth: U.variable(`--framer-input-focused-border-width`, fg)
    })])(),
    LC = $v(AC, IC, `framer-lib-form-plain-text-input`),
    RC = d.forwardRef(function(e, t) {
        let {background: n, children: r, alt: i, draggable: a, style: o, ...s} = e
          , c = {
            ...o
        };
        n && delete c.background;
        let l = ia(e.as);
        return D(l, {
            ...s,
            style: c,
            ref: t,
            children: [n && x($i, {
                image: n,
                alt: i,
                draggable: a
            }), r]
        })
    }),
    zC = /[^\p{Letter}\p{Number}()]+/gu,
    BC = /^-+|-+$/gu,
    HC = ( () => !T_() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)(),
    UC = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi,
    WC = `{{ text-placeholder }}`,
    GC = `rich-text-wrapper`,
    KC = s(function(e, t) {
        let {id: n, name: r, html: i, htmlFromDesign: a, text: o, textFromDesign: s, fonts: c=[], width: l, height: u, left: d, right: f, top: m, bottom: h, center: g, className: _, stylesPresetsClassName: v, visible: y=!0, opacity: b, rotation: C=0, verticalAlignment: E=`top`, isEditable: D=!1, environment: k=J.current, withExternalLayout: A=!1, positionSticky: ee, positionStickyTop: j, positionStickyRight: te, positionStickyBottom: ne, positionStickyLeft: re, __htmlStructure: ie, __fromCanvasComponent: ae=!1, _forwardedOverrideId: oe, _forwardedOverrides: se, _usesDOMRect: ce, children: le, ...M} = e
          , ue = vi()
          , de = da(e)
          , fe = S(null)
          , N = t ?? fe
          , {navigate: pe, getRoute: me} = lt()
          , P = dt();
        Nt(e.preload ?? []),
        _a(e, N);
        let he = w(P_)
          , ge = Rc()
          , F = o
          , _e = oe ?? n;
        if (_e && se) {
            let e = se[_e];
            typeof e == `string` && (F = e)
        }
        let ve = ``;
        if (F) {
            let e = lf(F);
            ve = ie ? ie.replace(WC, e) : `<p>${e}</p>`
        } else if (i)
            ve = i;
        else if (s) {
            let e = lf(s);
            ve = ie ? ie.replace(WC, e) : `<p>${e}</p>`
        } else
            a && (ve = a);
        let ye = Mc()
          , be = T( () => ge || !me || !P ? ve : uf(ve, me, P, ye), [ve, me, P, ye]);
        if (O( () => {
            let e = N.current;
            if (e === null)
                return;
            function t(e) {
                let t = fc(e.target, N.current);
                if (e.metaKey || !pe || !t || t.getAttribute(`target`) === `_blank`)
                    return;
                let n = kc(pe, t, ye);
                n && e.preventDefault()
            }
            return e.addEventListener(`click`, t),
            () => {
                e.removeEventListener(`click`, t)
            }
        }
        , [pe, ye]),
        pf(c, ae, N),
        p( () => {
            Ni()
        }
        , []),
        !y)
            return null;
        let xe = D && k() === J.canvas
          , I = {
            outline: `none`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: ff(E),
            opacity: xe ? 0 : b,
            flexShrink: 0
        }
          , Se = J.hasRestrictions()
          , Ce = hi(e, ue || 0, !1)
          , we = ce && (l === `auto` || u === `auto`)
          , Te = !!e.transformTemplate || !Ce || !Se || ae || we
          , Ee = Te ? e.transformTemplate ?? ua(g) : void 0;
        if (!A) {
            if (Ce && Se && !we) {
                let e = $m.getNumber(C).toFixed(4);
                I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`,
                I.width = Ce.width,
                I.minWidth = Ce.width,
                I.height = Ce.height
            } else
                I.left = d,
                I.right = f,
                I.top = m,
                I.bottom = h,
                I.width = l,
                I.height = u,
                I.rotate = C;
            ee ? (!ge || he) && (I.position = `sticky`,
            I.willChange = `transform`,
            I.zIndex = 1,
            I.top = j,
            I.right = te,
            I.bottom = ne,
            I.left = re) : ge && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`)
        }
        return Yo(e, I),
        Ko(e, I),
        Object.assign(I, e.style),
        x(De.div, {
            id: n,
            ref: N,
            ...M,
            style: I,
            layoutId: de,
            "data-framer-name": r,
            "data-framer-component-type": `DeprecatedRichText`,
            "data-center": g,
            className: Zo(_, v, GC),
            transformTemplate: Ee,
            dangerouslySetInnerHTML: {
                __html: be
            }
        })
    }),
    qC = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`
    },
    JC = ( () => RegExp(`\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`, `gu`))(),
    YC = s(function(e, t) {
        return x(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    XC = De.create(YC),
    ZC = s(function({viewBoxScale: e, viewBox: t, children: n, ...r}, i) {
        return x(XC, {
            ...r,
            ref: i,
            viewBox: t,
            children: x(De.foreignObject, {
                width: `100%`,
                height: `100%`,
                className: `framer-fit-text`,
                transform: `scale(${e})`,
                style: {
                    overflow: `visible`,
                    transformOrigin: `center center`
                },
                children: n
            })
        })
    }),
    QC = [],
    $C = `RichTextContainer`,
    ew = s(function(e, t) {
        let {__fromCanvasComponent: n=!1, _forwardedOverrideId: r, _forwardedOverrides: i, _usesDOMRect: a, anchorLinkOffsetY: o, as: s, bottom: c, center: l, children: u, environment: d=J.current, fonts: f=QC, height: m, isEditable: h=!1, left: g, name: _, opacity: v, positionSticky: y, positionStickyBottom: b, positionStickyLeft: C, positionStickyRight: E, positionStickyTop: D, right: O, rotation: k=0, style: A, _initialStyle: ee, stylesPresetsClassNames: j, text: te, top: ne, verticalAlignment: re=`top`, visible: ie=!0, width: ae, withExternalLayout: oe=!1, viewBox: se, viewBoxScale: ce=1, effect: le, ...M} = e
          , ue = vi()
          , de = Rc()
          , fe = w(P_)
          , N = da(e)
          , pe = S(null)
          , me = t ?? pe;
        _a(e, me),
        pf(f, n, me),
        p( () => {
            Ni()
        }
        , []);
        let P = Sf(le, me)
          , he = T( () => {
            if (u)
                return kf(u, j, te, o, void 0, P.getTokenizer())
        }
        , [u, j, te, o, P]);
        if (!ie)
            return null;
        let ge = h && d() === J.canvas
          , F = {
            outline: `none`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: ff(re),
            opacity: ge ? 0 : v,
            flexShrink: 0
        }
          , _e = {}
          , ve = J.hasRestrictions()
          , ye = hi(e, ue || 0, !1)
          , be = a && (ae === `auto` || m === `auto`)
          , xe = !!e.transformTemplate || !ye || !ve || n || be
          , I = xe ? e.transformTemplate ?? ua(l) : void 0;
        oe || (ye && ve && !be ? (_e.x = ye.x + (R(A?.x) ? A.x : 0),
        _e.y = ye.y + (R(A?.y) ? A.y : 0),
        F.rotate = $m.getNumber(k),
        F.width = ye.width,
        F.minWidth = ye.width,
        F.height = ye.height) : (F.left = g,
        F.right = O,
        F.top = ne,
        F.bottom = c,
        F.width = ae,
        F.height = m,
        F.rotate = k),
        y ? (!de || fe) && (F.position = `sticky`,
        F.willChange = `transform`,
        F.zIndex = 1,
        F.top = D,
        F.right = E,
        F.bottom = b,
        F.left = C) : de && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
        Yo(e, F),
        Ko(e, F),
        Object.assign(F, ee, A, _e),
        N && (M.layout = `preserve-aspect`);
        let Se = ia(e.as)
          , Ce = M[`data-framer-name`] ?? _;
        return L(e.viewBox) ? e.as === void 0 ? x(ZC, {
            ...M,
            ref: me,
            style: F,
            layoutId: N,
            viewBox: se,
            viewBoxScale: ce,
            transformTemplate: I,
            "data-framer-name": Ce,
            "data-framer-component-type": $C,
            children: he
        }) : x(Se, {
            ...M,
            ref: me,
            style: F,
            layoutId: N,
            transformTemplate: I,
            "data-framer-name": Ce,
            "data-framer-component-type": $C,
            children: x(ZC, {
                viewBox: se,
                viewBoxScale: ce,
                style: {
                    width: `100%`,
                    height: `100%`
                },
                children: he
            })
        }) : x(Se, {
            ...M,
            ref: me,
            style: F,
            layoutId: N,
            transformTemplate: I,
            "data-framer-name": Ce,
            "data-framer-component-type": $C,
            children: he
        })
    }),
    tw = s(function({children: e, html: t, htmlFromDesign: n, ...i}, a) {
        let o = t || e || n;
        if (L(o)) {
            !i.stylesPresetsClassName && z(i.stylesPresetsClassNames) && (i.stylesPresetsClassName = Object.values(i.stylesPresetsClassNames).join(` `));
            let e = {
                [L(t) ? `html` : `htmlFromDesign`]: o
            };
            return x(KC, {
                ...i,
                ...e,
                ref: a
            })
        }
        if (!i.stylesPresetsClassNames && L(i.stylesPresetsClassName)) {
            let[e,t,n,r,a] = i.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || r === void 0 || a === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${i.stylesPresetsClassNames}`) : i.stylesPresetsClassNames = {
                h1: e,
                h2: t,
                h3: n,
                p: r,
                a
            }
        }
        return x(ew, {
            ...i,
            ref: a,
            children: r(o) ? o : void 0
        })
    }),
    nw = `framer/asset-reference,`,
    rw = ({id: e, path: t, transform: n, repeat: r, width: i, height: a, offsetX: o, offsetY: s}) => {
        let c = Vf(t);
        return x(`pattern`, {
            id: e,
            width: r ? i : `100%`,
            height: r ? a : `100%`,
            patternContentUnits: r ? void 0 : `objectBoundingBox`,
            patternUnits: r ? `userSpaceOnUse` : void 0,
            x: r ? o : void 0,
            y: r ? s : void 0,
            children: x(`image`, {
                width: r ? i : 1,
                height: r ? a : 1,
                href: c,
                preserveAspectRatio: `none`,
                transform: r ? void 0 : n,
                x: r ? 0 : void 0,
                y: r ? 0 : void 0
            }, c)
        })
    }
    ,
    iw = S_(),
    aw = class {
        constructor(e, t, n, r, i=0) {
            this.id = e,
            this.svg = t,
            this.innerHTML = n,
            this.viewBox = r,
            this.count = i
        }
    }
    ,
    ow = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`,
    sw = class {
        constructor() {
            P(this, `entries`, new Map),
            P(this, `vectorSetItems`, new Map)
        }
        debugGetEntries() {
            return this.entries
        }
        subscribe(e, t, n, r) {
            if (!e || e === ``)
                return ``;
            let i = this.entries.get(e);
            if (!i) {
                n ||= `svg${String(H_(e))}_${String(e.length)}`;
                let a = e, o, s = Uf(e);
                s && (t && Wf(s, n),
                s.id = n,
                o = Yf(s),
                s.removeAttribute(`xmlns`),
                s.removeAttribute(`xlink`),
                s.removeAttribute(`xmlns:xlink`),
                a = s.outerHTML),
                i = this.createDOMElementFor(a, n, o, r),
                this.entries.set(e, i)
            }
            return i.count += 1,
            i.innerHTML
        }
        getViewBox(e) {
            if (!e || e === ``)
                return;
            let t = this.entries.get(e);
            return t?.viewBox
        }
        unsubscribe(e) {
            if (!e || e === ``)
                return;
            let t = this.entries.get(e);
            t && (--t.count,
            !(t.count > 0) && setTimeout( () => this.maybeRemoveEntry(e), 5e3))
        }
        maybeRemoveEntry(e) {
            let t = this.entries.get(e);
            t && (t.count > 0 || (this.entries.delete(e),
            this.removeDOMElement(t)))
        }
        removeDOMElement(e) {
            if (iw) {
                let t = document == null ? void 0 : document.getElementById(e.id);
                t?.remove()
            }
        }
        getOrCreateTemplateContainer() {
            let e = document.getElementById(`svg-templates`);
            if (e)
                return e;
            let t = document.createElement(`div`);
            return t.id = `svg-templates`,
            t.ariaHidden = `true`,
            t.style.cssText = ow,
            document.body.appendChild(t),
            t
        }
        maybeAppendTemplate(e, t) {
            if (document.getElementById(e))
                return;
            let n = document.createElement(`div`);
            n.innerHTML = t;
            let r = n.firstElementChild;
            r && (r.id = e,
            this.getOrCreateTemplateContainer().appendChild(r))
        }
        createDOMElementFor(e, t, n, r) {
            iw && this.maybeAppendTemplate(t, e);
            let i = n ? `0 0 ${n.width} ${n.height}` : void 0
              , a = i ? ` viewBox="${i}"` : ``
              , o = `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`;
            return new aw(t,e,o,i)
        }
        template(e, t) {
            let n = this.vectorSetItems.get(e);
            return n || (this.vectorSetItems.set(e, {
                svg: t,
                count: 0
            }),
            !iw) || this.maybeAppendTemplate(e, t),
            `#${e}`
        }
        subscribeToTemplate(e) {
            let t = this.vectorSetItems.get(e);
            if (t)
                return t.count++,
                () => {
                    let t = this.vectorSetItems.get(e);
                    t && (t.count--,
                    !(t.count > 0) && setTimeout( () => {
                        var t, n;
                        (t = this.vectorSetItems.get(e))?.count || (this.vectorSetItems.delete(e),
                        iw && ((n = document == null ? void 0 : document.getElementById(e)) == null || n.remove()))
                    }
                    , 5e3))
                }
        }
        clear() {
            this.entries.clear()
        }
        generateTemplates() {
            let e = [];
            return e.push(`<div id="svg-templates" style="${ow}" aria-hidden="true">`),
            this.entries.forEach(t => e.push(t.svg)),
            this.vectorSetItems.forEach(t => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
        }
    }
    ,
    cw = new sw,
    lw = ( () => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16
    }))(),
    uw = s(function(e, t) {
        let n = vi()
          , r = da(e)
          , i = d.useRef(null)
          , a = t ?? i
          , o = YS();
        return _a(e, i),
        x(fw, {
            ...e,
            innerRef: a,
            parentSize: n,
            layoutId: r,
            providedWindow: o
        })
    }),
    dw = 5e4,
    fw = ( () => {
        var e;
        return e = class extends V_ {
            constructor() {
                super(...arguments),
                P(this, `container`, d.createRef()),
                P(this, `svgElement`, null),
                P(this, `setSVGElement`, e => {
                    this.svgElement = e,
                    this.setLayerElement(e)
                }
                ),
                P(this, `previouslyRenderedSVG`, ``),
                P(this, `unmountedSVG`, ``)
            }
            static frame(e) {
                return hi(e, e.parentSize || 0)
            }
            get frame() {
                return hi(this.props, this.props.parentSize || 0)
            }
            componentDidMount() {
                if (this.unmountedSVG) {
                    let {svgContentId: e} = this.props
                      , t = e ? `svg${e}` : null;
                    cw.subscribe(this.unmountedSVG, !e, t),
                    this.previouslyRenderedSVG = this.unmountedSVG
                }
                this.props.svgContentId || $f(this.container, this.props)
            }
            componentWillUnmount() {
                cw.unsubscribe(this.previouslyRenderedSVG),
                this.unmountedSVG = this.previouslyRenderedSVG,
                this.previouslyRenderedSVG = ``
            }
            componentDidUpdate(e) {
                if (super.componentDidUpdate(e),
                this.props.svgContentId)
                    return;
                let {fill: t} = this.props;
                b_.isImageObject(t) && b_.isImageObject(e.fill) && t.src !== e.fill.src && Sa(this.svgElement, `fill`, null, !1),
                $f(this.container, this.props)
            }
            collectLayout(e, t) {
                if (this.props.withExternalLayout) {
                    t.width = `100%`,
                    t.height = `100%`,
                    t.aspectRatio = `inherit`;
                    return
                }
                let n = this.frame
                  , {rotation: r, intrinsicWidth: i, intrinsicHeight: a, width: o, height: s} = this.props
                  , c = $m.getNumber(r);
                if (e.opacity = H(this.props.opacity) ? this.props.opacity : 1,
                J.hasRestrictions() && n) {
                    Object.assign(e, {
                        transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                        width: `${n.width}px`,
                        height: `${n.height}px`
                    }),
                    fi(this.props) && (e.position = `absolute`);
                    let r = n.width / (i || 1)
                      , o = n.height / (a || 1);
                    t.transformOrigin = `top left`;
                    let {zoom: s, target: l} = Ch;
                    if (l === J.export) {
                        let e = s > 1 ? s : 1;
                        t.transform = `scale(${r * e}, ${o * e})`,
                        t.zoom = 1 / e
                    } else
                        t.transform = `scale(${r}, ${o})`;
                    i && a && (t.width = i,
                    t.height = a);
                    return
                }
                let {left: l, right: u, top: d, bottom: f} = this.props;
                Object.assign(e, {
                    left: l,
                    right: u,
                    top: d,
                    bottom: f,
                    width: o,
                    height: s,
                    rotate: c
                }),
                Object.assign(t, {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    position: `absolute`
                })
            }
            render() {
                ca();
                let {id: e, visible: t, style: n, fill: r, svg: i, intrinsicHeight: a, intrinsicWidth: o, title: s, description: c, layoutId: l, className: u, variants: d, withExternalLayout: f, innerRef: p, svgContentId: m, height: h, opacity: g, width: _, requiresOverflowVisible: v, ...b} = this.props;
                if (!f && (!t || !e))
                    return null;
                let S = e ?? l ?? `svg`
                  , C = this.frame
                  , w = C || {
                    width: o || 100,
                    height: a || 100
                }
                  , T = {
                    ...n,
                    imageRendering: `pixelated`,
                    flexShrink: 0
                }
                  , E = {};
                this.collectLayout(T, E),
                Wo(this.props, T),
                Yo(this.props, T),
                V_.applyWillChange(this.props, T, !1);
                let O = null;
                if (typeof r == `string` || q.isColorObject(r)) {
                    let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
                    T.fill = e,
                    T.color = e
                } else if (Y_.isLinearGradient(r)) {
                    let t = r
                      , n = `${encodeURI(e || ``)}g ${Y_.hash(t)}`;
                    T.fill = `url(#${n})`;
                    let {stops: i, x1: a, x2: o, y1: s, y2: c} = Nf(t, S);
                    O = x(`svg`, {
                        ref: this.setSVGElement,
                        width: `100%`,
                        height: `100%`,
                        style: {
                            position: `absolute`
                        },
                        role: `presentation`,
                        children: x(`linearGradient`, {
                            id: n,
                            x1: a,
                            x2: o,
                            y1: s,
                            y2: c,
                            children: i.map( (e, t) => x(`stop`, {
                                offset: e.position,
                                stopColor: e.color,
                                stopOpacity: e.alpha
                            }, t))
                        })
                    })
                } else if (Z_.isRadialGradient(r)) {
                    let t = r
                      , n = `${encodeURI(e || ``)}g ${Z_.hash(t)}`;
                    T.fill = `url(#${n})`;
                    let i = Pf(t, S);
                    O = x(`svg`, {
                        ref: this.setSVGElement,
                        width: `100%`,
                        height: `100%`,
                        style: {
                            position: `absolute`
                        },
                        role: `presentation`,
                        children: x(`radialGradient`, {
                            id: n,
                            cy: t.centerAnchorY,
                            cx: t.centerAnchorX,
                            r: t.widthFactor,
                            children: i.stops.map( (e, t) => x(`stop`, {
                                offset: e.position,
                                stopColor: e.color,
                                stopOpacity: e.alpha
                            }, t))
                        })
                    })
                } else if (b_.isImageObject(r)) {
                    let e = zf(r, w, S);
                    e && (T.fill = `url(#${e.id})`,
                    O = x(`svg`, {
                        ref: this.setSVGElement,
                        width: `100%`,
                        height: `100%`,
                        style: {
                            position: `absolute`
                        },
                        role: `presentation`,
                        children: x(`defs`, {
                            children: x(rw, {
                                ...e
                            })
                        })
                    }))
                }
                let k = {
                    "data-framer-component-type": `SVG`
                }
                  , A = !C;
                A && Object.assign(k, oa(this.props.center));
                let ee = !v && !O && !T.fill && !T.background && !T.backgroundImage && i.length < dw && !Xf(i) && !Zf(i)
                  , j = null;
                if (ee)
                    T.backgroundSize = `100% 100%`,
                    T.backgroundImage = Dt(i),
                    cw.unsubscribe(this.previouslyRenderedSVG),
                    this.previouslyRenderedSVG = ``;
                else {
                    let e = m ? `svg${m}` : null
                      , t = cw.subscribe(i, !m, e, v);
                    cw.unsubscribe(this.previouslyRenderedSVG),
                    this.previouslyRenderedSVG = i,
                    Qf(T) && (T.overflow = `hidden`),
                    j = D(y, {
                        children: [O, x(`div`, {
                            className: `svgContainer`,
                            style: E,
                            ref: this.container,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }, b_.isImageObject(r) ? r.src : ``)]
                    })
                }
                let te = ia(this.props.as)
                  , {href: ne, target: re, rel: ie, onClick: ae, onTap: oe} = this.props
                  , se = s || c;
                return D(te, {
                    ...k,
                    ...b,
                    layoutId: l,
                    transformTemplate: A ? ua(this.props.center) : void 0,
                    id: e,
                    ref: p,
                    style: T,
                    className: u,
                    variants: d,
                    tabIndex: this.props.tabIndex,
                    role: se ? `img` : void 0,
                    "aria-label": s,
                    "aria-description": c,
                    "aria-hidden": se ? void 0 : `true`,
                    onTap: oe,
                    onClick: ae,
                    href: ne,
                    target: re,
                    rel: ie,
                    children: [j, x(ep, {})]
                })
            }
        }
        ,
        P(e, `supportsConstraints`, !0),
        P(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: {
                enabled: !0,
                aspectRatio: null
            },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: []
        }),
        P(e, `defaultProps`, {
            ...V_.defaultProps,
            ...e.defaultSVGProps
        }),
        e
    }
    )(),
    pw = 1e3,
    mw = `explicitInter`,
    ae.prototype.addChild = function({transformer: e=e => e}) {
        let t = Oe(e(this.get()));
        return this.onChange(n => t.set(e(n))),
        t
    }
}
);
export {pc as ChildrenCanSuspend, q as Color, Hy as ComponentViewportProvider, tb as Container, Rh as ControlType, Qr as ErrorPlaceholder, Jb as FormContainer, LC as FormPlainTextInput2, Jv as GeneratedComponentContext, fb as GracefullyDegradingErrorBoundary, RC as Image2, db as Instance, u_ as LibraryFeaturesProvider, Ib as Link, Rm as NotFoundError, qt as PageEffectsProvider, kl as PageRoot, Mb as PathVariablesContext, oy as PropertyOverrides2, zS as QueryCache, RS as QueryEngine, J as RenderTarget, hx as ResolveLinks, tw as RichText, uw as SVG, nb as SmartComponentScopedContainer, np as addFonts, Vi as addPropertyControls, r_ as combinedCSSRulesForPreview, Zo as cx, OC as fontStore, my as framerAppearAnimationScriptKey, dy as framerAppearEffects, py as framerAppearIdKey, fy as framerAppearTransformTemplateToken, Qv as framerCSSMarker, rp as getFonts, ip as getFontsFromSharedStyle, tp as getLoadingLazyAtYPosition, Hi as getPropertyControls, dd as getWhereExpressionFromPathVariables, Bn as inferInitialRouteFromPath, hw as init_framer_6HDYDFRL, Ei as installFlexboxGapWorkaroundIfNeeded, Je as lazy, Mn as markHydrationStart, Pb as nestedLinksCollector, Yn as patchRoutesForABTesting, nd as removeHiddenBreakpointLayersV2, cw as sharedSVGManager, On as turnOffReactEventHandling, Ju as useActiveVariantCallback, Rs as useComponentViewport, vt as useCurrentPathVariables, dt as useCurrentRoute, dc as useCustomCursors, Qu as useHydratedBreakpointVariants, no as useIsInCurrentNavigationTarget, Rc as useIsOnFramerCanvas, pd as useLoadMorePaginatedQuery, Dn as useLocaleCode, En as useLocaleInfo, er as useMetadata, od as useOnVariantChange, ld as useQueryData, _t as useRouteElementId, lt as useRouter, Hf as useSVGTemplate, Dd as useVariantState, $v as withCSS, Od as withCodeBoundaryForOverrides, zy as withFX, ds as withOptimizedAppearEffect, cp as withPerformanceMarks, By as withStyleAppearEffect, Mt as yieldToMain};
//# sourceMappingURL=framer.B1FS9TMt.mjs.map
