import {__esmMin as e} from "./rolldown-runtime.DIBZXYM-.mjs";
import {Y as t, ae as n, init_jsx_runtime as r, init_npm_react_18_2 as i, p as a, pe as o, re as s, se as c, u as l, x as u} from "./react.BGOYdRaa.mjs";
import {LayoutGroup as d, MotionConfigContext as f, init_framer_motion_5EXT2AMG as p, motion as m} from "./motion.Cp-kJPeu.mjs";
import {ComponentViewportProvider as h, ControlType as g, ResolveLinks as _, RichText as v, SmartComponentScopedContainer as y, addFonts as b, addPropertyControls as x, cx as S, fontStore as ee, getFonts as C, getFontsFromSharedStyle as w, init_framer_6HDYDFRL as T, useActiveVariantCallback as te, useComponentViewport as ne, useLocaleInfo as E, useRouter as D, useSVGTemplate as O, useVariantState as re, withCSS as k, withFX as A} from "./framer.B1FS9TMt.mjs";
import {init_irupF5Jxe as j, irupF5Jxe_default as ie} from "./irupF5Jxe.DkgNBvl4.mjs";
import {Icon as ae, init_Phosphor as M, init_rOlsEceWf as N, rOlsEceWf_default as P} from "./VvtmXgo2A._eTO9V-A.mjs";
import {className as oe, css as F, fonts as I, init_j3hccNIu_ as se} from "./j3hccNIu_.DVPdJKYu.mjs";
import {className as ce, css as L, fonts as R, init_n7RLEGRKm as le} from "./shared-lib.CkfJ1s8W.mjs";
var ue, de, fe, pe, z, B, me = e( () => {
    r(),
    T(),
    i(),
    ue = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(m.div, {
            ...o,
            layoutId: r,
            ref: t
        }) : a(`div`, {
            ...o,
            ref: t
        })
    }
    ),
    de = ({fill: e, height: t, id: n, width: r, ...i}) => ({
        ...i,
        ezTt3ayMo: e ?? i.ezTt3ayMo ?? `rgb(0, 0, 0)`
    }),
    fe = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, ...c} = de(e);
        return a(ue, {
            ...c,
            className: S(`framer-fIGy1`, r),
            layoutId: i,
            ref: t,
            style: {
                "--21h8s6": s,
                ...n
            }
        })
    }),
    pe = [`.framer-fIGy1 { aspect-ratio: 1; background-color: var(--21h8s6); mask-image: url('data:image/svg+xml,<svg aria-label="Arrow Up Right" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 13.5 0.75 L 13.5 10.5 C 13.5 10.914 13.165 11.25 12.75 11.25 C 12.336 11.25 12 10.914 12 10.5 L 12 2.56 L 1.281 13.281 C 0.988 13.574 0.513 13.574 0.22 13.281 C -0.073 12.988 -0.073 12.512 0.22 12.219 L 10.94 1.5 L 3 1.5 C 2.586 1.5 2.25 1.164 2.25 0.75 C 2.25 0.336 2.586 0 3 0 L 12.75 0 C 13.165 0 13.5 0.336 13.5 0.75 Z" fill="var(--21h8s6, rgb(0,0,0))" height="13.500417071534685px" id="e9ZRAF41a" opacity="1" transform="translate(5.25 5.25)" width="13.500417071534343px"/></svg>'); mask-position: center; mask-repeat: no-repeat; width: 24px; }`],
    z = k(fe, pe, `framer-fIGy1`),
    B = z,
    x(z, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Fill`,
            type: g.Color
        }
    })
}
), he, ge, _e, ve, V, ye, be = e( () => {
    r(),
    T(),
    i(),
    he = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(m.div, {
            ...o,
            layoutId: r,
            ref: t
        }) : a(`div`, {
            ...o,
            ref: t
        })
    }
    ),
    ge = ({fill: e, height: t, id: n, width: r, ...i}) => ({
        ...i,
        ezTt3ayMo: e ?? i.ezTt3ayMo ?? `rgb(0, 0, 0)`
    }),
    _e = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, ...c} = ge(e);
        return a(he, {
            ...c,
            className: S(`framer-fWMLr`, r),
            layoutId: i,
            ref: t,
            style: {
                "--21h8s6": s,
                ...n
            }
        })
    }),
    ve = [`.framer-fWMLr { aspect-ratio: 1; background-color: var(--21h8s6); mask-image: url('data:image/svg+xml,<svg aria-label="Shapes" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.212 3.513 C 5.11 3.206 4.823 3 4.5 3 C 4.177 3 3.891 3.206 3.788 3.513 L 0.038 14.763 C -0.038 14.992 0.001 15.243 0.142 15.439 C 0.283 15.634 0.509 15.75 0.75 15.75 L 8.25 15.75 C 8.491 15.75 8.718 15.634 8.859 15.439 C 9 15.243 9.038 14.992 8.962 14.763 Z M 1.791 14.25 L 4.5 6.122 L 7.209 14.25 Z M 18 4.875 C 18 2.183 15.817 0 13.125 0 C 10.433 0 8.25 2.183 8.25 4.875 C 8.25 7.567 10.433 9.75 13.125 9.75 C 15.816 9.747 17.997 7.566 18 4.875 Z M 9.75 4.875 C 9.75 3.011 11.261 1.5 13.125 1.5 C 14.989 1.5 16.5 3.011 16.5 4.875 C 16.5 6.739 14.989 8.25 13.125 8.25 C 11.261 8.25 9.75 6.739 9.75 4.875 Z M 19.5 11.25 L 11.25 11.25 C 10.836 11.25 10.5 11.586 10.5 12 L 10.5 17.25 C 10.5 17.664 10.836 18 11.25 18 L 19.5 18 C 19.914 18 20.25 17.664 20.25 17.25 L 20.25 12 C 20.25 11.586 19.914 11.25 19.5 11.25 Z M 18.75 16.5 L 12 16.5 L 12 12.75 L 18.75 12.75 Z" fill="var(--21h8s6, rgb(0,0,0))" height="18px" id="h63qvlcJx" opacity="1" transform="translate(1.5 2.25)" width="20.250061094760895px"/></svg>'); mask-position: center; mask-repeat: no-repeat; width: 24px; }`],
    V = k(_e, ve, `framer-fWMLr`),
    ye = V,
    x(V, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Fill`,
            type: g.Color
        }
    })
}
), H, xe, Se, Ce, we, Te, Ee, De, U, W, Oe = e( () => {
    r(),
    T(),
    i(),
    H = `var(--framer-icon-mask)`,
    xe = t(function(e, t) {
        return a(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    Se = m.create(xe),
    Ce = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(Se, {
            ...o,
            layoutId: r,
            ref: t,
            children: i
        }) : a(`svg`, {
            ...o,
            ref: t,
            children: i
        })
    }
    ),
    we = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="RjBoUvnZP" transform="translate(3 3)" width="18px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="H_DiuDuLW" transform="translate(10.875 15.75)" width="2.25px"/><path d="M 3 6 L 3 5.25 C 4.657 5.25 6 4.074 6 2.625 C 6 1.176 4.657 0 3 0 C 1.343 0 0 1.176 0 2.625 L 0 3" fill="transparent" height="6px" id="RWXAz0cuD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 7.5)" width="6px"/><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill="transparent" height="18px" id="mmzn1Nlhi" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/></svg>`,
    Te = ({alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o}) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh
    }),
    Ee = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, lschgej4H: c, qxTvv_EBh: l, ...u} = Te(e)
          , d = O(`1059275922`, we);
        return a(Ce, {
            ...u,
            className: S(`framer-5REFZ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
                "--1m6trwb": l,
                "--21h8s6": s,
                "--pgex8v": c,
                ...n
            },
            viewBox: `0 0 24 24`,
            children: a(`use`, {
                href: d
            })
        })
    }),
    De = [`.framer-5REFZ { -webkit-mask: ${H}; aspect-ratio: 1; display: block; mask: ${H}; width: 24px; }`],
    U = k(Ee, De, `framer-5REFZ`),
    U.displayName = `Question`,
    W = U,
    x(U, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Color`,
            type: g.Color
        },
        lschgej4H: {
            defaultValue: 1.5,
            displayStepper: !0,
            hidden: !1,
            max: 6,
            min: 0,
            step: .5,
            title: `Width`,
            type: g.Number
        },
        qxTvv_EBh: {
            defaultValue: 0,
            displayStepper: !0,
            hidden: !1,
            max: 1,
            min: 0,
            step: .1,
            title: `Alpha`,
            type: g.Number
        }
    })
}
), ke, Ae, je, Me, Ne, Pe, Fe, G, Ie, Le = e( () => {
    r(),
    T(),
    i(),
    ke = t(function(e, t) {
        return a(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    Ae = m.create(ke),
    je = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(Ae, {
            ...o,
            layoutId: r,
            ref: t,
            children: i
        }) : a(`svg`, {
            ...o,
            ref: t,
            children: i
        })
    }
    ),
    Me = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.999 11.223 C 5.999 7.495 9.021 4.473 12.749 4.473 C 12.872 4.473 12.995 4.473 13.118 4.483 L 13.118 4.483 C 12.269 2.102 10.16 0.394 7.654 0.06 C 5.148 -0.275 2.665 0.818 1.221 2.893 C -0.224 4.968 -0.388 7.676 0.795 9.91 L 0.03 12.513 C -0.047 12.776 0.026 13.06 0.22 13.254 C 0.414 13.448 0.698 13.521 0.961 13.444 L 3.561 12.676 C 4.429 13.141 5.39 13.41 6.374 13.462 L 6.374 13.462 C 6.123 12.742 5.996 11.985 5.999 11.223 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.473964841712082px" id="jy1nTKRcn" transform="translate(2.251 3.027)" width="13.117906472763037px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="CPfHM6Ulw" transform="translate(11.25 12)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="yU77oWDVG" transform="translate(16.5 12)" width="2.25px"/><path d="M 6.747 13.5 C 3.713 13.499 1.052 11.472 0.244 8.547 C -0.564 5.621 0.68 2.516 3.284 0.958 C 5.889 -0.6 9.213 -0.229 11.409 1.865 C 13.605 3.96 14.134 7.262 12.701 9.938 L 13.466 12.54 C 13.543 12.803 13.47 13.088 13.276 13.282 C 13.082 13.476 12.798 13.548 12.535 13.471 L 9.935 12.703 C 8.955 13.228 7.859 13.502 6.747 13.5 Z" fill="transparent" height="13.501457030009604px" id="ewgvWJmdX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.253 7.5)" width="13.50080809235591px"/><path d="M 6.376 13.462 C 5.392 13.41 4.432 13.141 3.564 12.676 L 0.961 13.441 C 0.698 13.518 0.414 13.445 0.22 13.251 C 0.026 13.057 -0.047 12.773 0.03 12.51 L 0.793 9.91 C -0.391 7.676 -0.227 4.968 1.218 2.893 C 2.662 0.818 5.145 -0.275 7.651 0.06 C 10.157 0.394 12.266 2.102 13.115 4.483" fill="transparent" height="13.471152341712086px" id="yZBD4GnoP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.254 3.027)" width="13.115093972763036px"/></svg>`,
    Ne = ({alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o}) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh
    }),
    Pe = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, lschgej4H: c, qxTvv_EBh: l, ...u} = Ne(e)
          , d = O(`1167808242`, Me);
        return a(je, {
            ...u,
            className: S(`framer-8CYUA`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
                "--1m6trwb": l,
                "--21h8s6": s,
                "--pgex8v": c,
                ...n
            },
            viewBox: `0 0 24 24`,
            children: a(`use`, {
                href: d
            })
        })
    }),
    Fe = [`.framer-8CYUA { aspect-ratio: 1; display: block; width: 24px; }`],
    G = k(Pe, Fe, `framer-8CYUA`),
    G.displayName = `Wechat Logo`,
    Ie = G,
    x(G, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Color`,
            type: g.Color
        },
        lschgej4H: {
            defaultValue: 1.5,
            displayStepper: !0,
            hidden: !1,
            max: 6,
            min: 0,
            step: .5,
            title: `Width`,
            type: g.Number
        },
        qxTvv_EBh: {
            defaultValue: 0,
            displayStepper: !0,
            hidden: !1,
            max: 1,
            min: 0,
            step: .1,
            title: `Alpha`,
            type: g.Number
        }
    })
}
);
function Re(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])),
    n
}
var ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, K, q, Ze = e( () => {
    r(),
    T(),
    p(),
    i(),
    M(),
    le(),
    ze = C(ae),
    Be = [`SF38uWa4S`, `QAvUnlGpo`, `KlM6KShnm`, `sgguXU_b7`],
    Ve = `framer-OBmSw`,
    He = {
        KlM6KShnm: `framer-v-1xfbp4k`,
        QAvUnlGpo: `framer-v-ujtxsi`,
        SF38uWa4S: `framer-v-gos7jp`,
        sgguXU_b7: `framer-v-1gv79ee`
    },
    Ue = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    },
    We = ({value: e, children: t}) => {
        let n = s(f)
          , r = e ?? n.transition
          , i = c( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return a(f.Provider, {
            value: i,
            children: t
        })
    }
    ,
    Ge = m.create(u),
    Ke = {
        "mobile closed": `KlM6KShnm`,
        "mobile open": `sgguXU_b7`,
        Closed: `SF38uWa4S`,
        Open: `QAvUnlGpo`
    },
    qe = ({content: e, height: t, id: n, title: r, width: i, ...a}) => ({
        ...a,
        aU1_lXl6h: e ?? a.aU1_lXl6h ?? `A waitlist template is a pre-designed webpage where users can sign up to join a waitlist for your product or service.`,
        pNqA5B2sU: r ?? a.pNqA5B2sU ?? `What is a waitlist template?`,
        variant: Ke[a.variant] ?? a.variant ?? `SF38uWa4S`
    }),
    Je = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    Ye = t(function(e, t) {
        let {activeLocale: r, setLocale: i} = E()
          , {style: s, className: c, layoutId: f, variant: p, pNqA5B2sU: g, aU1_lXl6h: _, ...y} = qe(e)
          , {baseVariant: b, classNames: x, clearLoadingGesture: ee, gestureHandlers: C, gestureVariant: w, isLoading: T, setGestureState: D, setVariant: O, variants: k} = re({
            cycleOrder: Be,
            defaultVariant: `SF38uWa4S`,
            variant: p,
            variantClassNames: He
        })
          , A = Je(e, k)
          , {activeVariantCallback: j, delay: ie} = te(b)
          , M = j(async (...e) => {
            D({
                isPressed: !1
            }),
            O(`QAvUnlGpo`)
        }
        )
          , N = j(async (...e) => {
            D({
                isPressed: !1
            }),
            O(`SF38uWa4S`)
        }
        )
          , P = j(async (...e) => {
            D({
                isPressed: !1
            }),
            O(`sgguXU_b7`)
        }
        )
          , oe = j(async (...e) => {
            D({
                isPressed: !1
            }),
            O(`KlM6KShnm`)
        }
        )
          , F = [ce]
          , I = S(Ve, ...F)
          , se = o(null)
          , L = () => b !== `KlM6KShnm`
          , R = n()
          , le = ne();
        return a(d, {
            id: f ?? R,
            children: a(Ge, {
                animate: k,
                initial: !1,
                children: a(We, {
                    value: Ue,
                    children: l(m.div, {
                        ...y,
                        ...C,
                        className: S(I, `framer-gos7jp`, c, x),
                        "data-border": !0,
                        "data-framer-name": `Closed`,
                        "data-highlight": !0,
                        layoutDependency: A,
                        layoutId: `SF38uWa4S`,
                        onTap: M,
                        ref: t ?? se,
                        style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(216, 231, 242, 0.07))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13))`,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            boxShadow: `inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)`,
                            ...s
                        },
                        ...Re({
                            KlM6KShnm: {
                                "data-framer-name": `mobile closed`,
                                onTap: P
                            },
                            QAvUnlGpo: {
                                "data-framer-name": `Open`,
                                onTap: N
                            },
                            sgguXU_b7: {
                                "data-framer-name": `mobile open`,
                                onTap: oe
                            }
                        }, b, w),
                        children: [l(m.div, {
                            className: `framer-vh75hj`,
                            "data-framer-name": `question`,
                            layoutDependency: A,
                            layoutId: `fbZCPRjpe`,
                            children: [a(v, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                    children: a(m.p, {
                                        className: `framer-styles-preset-1kvyxmc`,
                                        "data-styles-preset": `n7RLEGRKm`,
                                        children: `What is a waitlist template?`
                                    })
                                }),
                                className: `framer-6isi5a`,
                                "data-framer-name": `Title`,
                                fonts: [`Inter`],
                                layoutDependency: A,
                                layoutId: `nELOmSGrN`,
                                style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), a(m.div, {
                                className: `framer-8f5n5d`,
                                "data-framer-name": `Close`,
                                layoutDependency: A,
                                layoutId: `RTcJ4CYb7`,
                                children: a(m.div, {
                                    className: `framer-1gd06ur`,
                                    "data-framer-name": `container`,
                                    layoutDependency: A,
                                    layoutId: `xk42MCU86`,
                                    style: {
                                        rotate: 0
                                    },
                                    variants: {
                                        KlM6KShnm: {
                                            rotate: 0
                                        },
                                        QAvUnlGpo: {
                                            rotate: -180
                                        },
                                        sgguXU_b7: {
                                            rotate: -180
                                        }
                                    },
                                    children: a(h, {
                                        children: a(m.div, {
                                            className: `framer-1l2psq6-container`,
                                            layoutDependency: A,
                                            layoutId: `RBBIwNdev-container`,
                                            children: a(ae, {
                                                color: `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`,
                                                height: `100%`,
                                                iconSearch: `House`,
                                                iconSelection: `CaretDown`,
                                                id: `RBBIwNdev`,
                                                layoutId: `RBBIwNdev`,
                                                mirrored: !1,
                                                selectByList: !0,
                                                style: {
                                                    height: `100%`,
                                                    width: `100%`
                                                },
                                                weight: `regular`,
                                                width: `100%`
                                            })
                                        })
                                    })
                                })
                            })]
                        }), L() && a(v, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                                children: a(m.p, {
                                    className: `framer-styles-preset-1kvyxmc`,
                                    "data-styles-preset": `n7RLEGRKm`,
                                    children: `A waitlist template is a pre-designed webpage where users can sign up to join a waitlist for your product or service.`
                                })
                            }),
                            className: `framer-5rvaow`,
                            "data-framer-name": `Content`,
                            fonts: [`Inter`],
                            layoutDependency: A,
                            layoutId: `UaAsyte8F`,
                            style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                filter: `blur(5px)`,
                                opacity: 0,
                                WebkitFilter: `blur(5px)`
                            },
                            text: _,
                            variants: {
                                QAvUnlGpo: {
                                    filter: `blur(0px)`,
                                    opacity: .6,
                                    WebkitFilter: `blur(0px)`
                                },
                                sgguXU_b7: {
                                    filter: `blur(0px)`,
                                    opacity: .6,
                                    WebkitFilter: `blur(0px)`
                                }
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                        }), a(m.div, {
                            className: `framer-8doq4t`,
                            "data-framer-name": `Light`,
                            layoutDependency: A,
                            layoutId: `k9s1LeWf5`,
                            style: {
                                background: `radial-gradient(50% 50% at 7.199999999999999% 6.1%, var(--token-5e357ad1-f56a-4886-be0b-ea13c633f85c, rgba(184, 199, 217, 0.5)) /* {"name":"grey blue"} */ 0%, rgba(4, 7, 13, 0) 100%)`,
                                opacity: .1
                            }
                        })]
                    })
                })
            })
        })
    }),
    Xe = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-OBmSw.framer-k1iivz, .framer-OBmSw .framer-k1iivz { display: block; }`, `.framer-OBmSw.framer-gos7jp { cursor: pointer; height: 48px; overflow: hidden; position: relative; width: 467px; will-change: var(--framer-will-change-override, transform); }`, `.framer-OBmSw .framer-vh75hj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 16px; overflow: hidden; padding: 0px; position: absolute; right: 16px; top: 12px; }`, `.framer-OBmSw .framer-6isi5a { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-OBmSw .framer-8f5n5d { flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }`, `.framer-OBmSw .framer-1gd06ur { flex: none; height: 20px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 20px; }`, `.framer-OBmSw .framer-1l2psq6-container { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }`, `.framer-OBmSw .framer-5rvaow { -webkit-user-select: none; flex: none; height: auto; left: 16px; position: absolute; right: 16px; top: 44px; user-select: none; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }`, `.framer-OBmSw .framer-8doq4t { -webkit-user-select: none; flex: none; height: 306px; left: 0px; overflow: hidden; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 437px; z-index: 1; }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OBmSw .framer-vh75hj { gap: 0px; } .framer-OBmSw .framer-vh75hj > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-OBmSw .framer-vh75hj > :first-child { margin-left: 0px; } .framer-OBmSw .framer-vh75hj > :last-child { margin-right: 0px; } }`, `.framer-OBmSw.framer-v-ujtxsi.framer-gos7jp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 12px 16px 12px 16px; }`, `.framer-OBmSw.framer-v-ujtxsi .framer-vh75hj, .framer-OBmSw.framer-v-ujtxsi .framer-5rvaow, .framer-OBmSw.framer-v-1xfbp4k .framer-vh75hj, .framer-OBmSw.framer-v-1gv79ee .framer-vh75hj, .framer-OBmSw.framer-v-1gv79ee .framer-5rvaow { left: unset; position: relative; right: unset; top: unset; width: 100%; }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OBmSw.framer-v-ujtxsi.framer-gos7jp { gap: 0px; } .framer-OBmSw.framer-v-ujtxsi.framer-gos7jp > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-OBmSw.framer-v-ujtxsi.framer-gos7jp > :first-child { margin-top: 0px; } .framer-OBmSw.framer-v-ujtxsi.framer-gos7jp > :last-child { margin-bottom: 0px; } }`, `.framer-OBmSw.framer-v-1xfbp4k.framer-gos7jp, .framer-OBmSw.framer-v-1gv79ee.framer-gos7jp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 12px; }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OBmSw.framer-v-1xfbp4k.framer-gos7jp { gap: 0px; } .framer-OBmSw.framer-v-1xfbp4k.framer-gos7jp > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-OBmSw.framer-v-1xfbp4k.framer-gos7jp > :first-child { margin-top: 0px; } .framer-OBmSw.framer-v-1xfbp4k.framer-gos7jp > :last-child { margin-bottom: 0px; } }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OBmSw.framer-v-1gv79ee.framer-gos7jp { gap: 0px; } .framer-OBmSw.framer-v-1gv79ee.framer-gos7jp > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-OBmSw.framer-v-1gv79ee.framer-gos7jp > :first-child { margin-top: 0px; } .framer-OBmSw.framer-v-1gv79ee.framer-gos7jp > :last-child { margin-bottom: 0px; } }`, ...L, `.framer-OBmSw[data-border="true"]::after, .framer-OBmSw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`],
    K = k(Ye, Xe, `framer-OBmSw`),
    q = K,
    K.displayName = `Elements/FAQ Item`,
    K.defaultProps = {
        height: 48,
        width: 467
    },
    x(K, {
        variant: {
            options: [`SF38uWa4S`, `QAvUnlGpo`, `KlM6KShnm`, `sgguXU_b7`],
            optionTitles: [`Closed`, `Open`, `mobile closed`, `mobile open`],
            title: `Variant`,
            type: g.Enum
        },
        pNqA5B2sU: {
            defaultValue: `What is a waitlist template?`,
            displayTextArea: !1,
            title: `Title`,
            type: g.String
        },
        aU1_lXl6h: {
            defaultValue: `A waitlist template is a pre-designed webpage where users can sign up to join a waitlist for your product or service.`,
            displayTextArea: !0,
            title: `Content`,
            type: g.String
        }
    }),
    b(K, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }]
    }, ...ze, ...w(R)], {
        supportsExplicitInterCodegen: !0
    })
}
);
function J(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])),
    n
}
var Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, Y, X, pt = e( () => {
    r(),
    T(),
    p(),
    i(),
    Ze(),
    Qe = C(q),
    $e = A(m.div),
    et = [`Edtr6fzPB`, `iFXIUtt7t`],
    tt = `framer-5oO6Z`,
    nt = {
        Edtr6fzPB: `framer-v-ln4err`,
        iFXIUtt7t: `framer-v-18ixqlz`
    },
    rt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 60
    },
    it = {
        damping: 60,
        delay: .7,
        mass: 1,
        stiffness: 320,
        type: `spring`
    },
    at = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    },
    ot = ({value: e, children: t}) => {
        let n = s(f)
          , r = e ?? n.transition
          , i = c( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return a(f.Provider, {
            value: i,
            children: t
        })
    }
    ,
    st = m.create(u),
    ct = {
        mobile: `iFXIUtt7t`,
        primary: `Edtr6fzPB`
    },
    lt = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: ct[r.variant] ?? r.variant ?? `Edtr6fzPB`
    }),
    ut = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    dt = t(function(e, t) {
        let r = o(null)
          , i = t ?? r
          , s = n()
          , {activeLocale: c, setLocale: u} = E()
          , f = ne()
          , {style: p, className: m, layoutId: g, variant: _, ...v} = lt(e)
          , {baseVariant: b, classNames: x, clearLoadingGesture: ee, gestureHandlers: C, gestureVariant: w, isLoading: T, setGestureState: te, setVariant: D, variants: O} = re({
            cycleOrder: et,
            defaultVariant: `Edtr6fzPB`,
            ref: i,
            variant: _,
            variantClassNames: nt
        })
          , k = ut(e, O)
          , A = []
          , j = S(tt, ...A);
        return a(d, {
            id: g ?? s,
            children: a(st, {
                animate: O,
                initial: !1,
                children: a(ot, {
                    value: at,
                    children: l($e, {
                        ...v,
                        ...C,
                        __framer__animate: {
                            transition: it
                        },
                        __framer__animateOnce: !0,
                        __framer__enter: rt,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: S(j, `framer-ln4err`, m, x),
                        "data-framer-name": `primary`,
                        layoutDependency: k,
                        layoutId: `Edtr6fzPB`,
                        ref: i,
                        style: {
                            ...p
                        },
                        ...J({
                            iFXIUtt7t: {
                                "data-framer-name": `mobile`
                            }
                        }, b, w),
                        children: [a(h, {
                            height: 48,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + (((f?.height || 390) - 0 - 304) / 2 + 0 + 0),
                            ...J({
                                iFXIUtt7t: {
                                    y: (f?.y || 0) + 0 + (((f?.height || 312) - 0 - 304) / 2 + 0 + 0)
                                }
                            }, b, w),
                            children: a(y, {
                                className: `framer-1hd0od1-container`,
                                layoutDependency: k,
                                layoutId: `zdAQaCiXj-container`,
                                nodeId: `zdAQaCiXj`,
                                rendersWithMotion: !0,
                                scopeId: `JZtpx7Nmg`,
                                children: a(q, {
                                    aU1_lXl6h: `We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.`,
                                    height: `100%`,
                                    id: `zdAQaCiXj`,
                                    layoutId: `zdAQaCiXj`,
                                    pNqA5B2sU: `What types of processes can you automate?`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: `QAvUnlGpo`,
                                    width: `100%`,
                                    ...J({
                                        iFXIUtt7t: {
                                            variant: `KlM6KShnm`
                                        }
                                    }, b, w)
                                })
                            })
                        }), a(h, {
                            height: 48,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + (((f?.height || 390) - 0 - 304) / 2 + 48 + 16),
                            ...J({
                                iFXIUtt7t: {
                                    y: (f?.y || 0) + 0 + (((f?.height || 312) - 0 - 304) / 2 + 48 + 16)
                                }
                            }, b, w),
                            children: a(y, {
                                className: `framer-uhd167-container`,
                                layoutDependency: k,
                                layoutId: `crxJ1ydLD-container`,
                                nodeId: `crxJ1ydLD`,
                                rendersWithMotion: !0,
                                scopeId: `JZtpx7Nmg`,
                                children: a(q, {
                                    aU1_lXl6h: `Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we’ll automate the rest.`,
                                    height: `100%`,
                                    id: `crxJ1ydLD`,
                                    layoutId: `crxJ1ydLD`,
                                    pNqA5B2sU: `Do I need technical knowledge to use your service?`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: `SF38uWa4S`,
                                    width: `100%`,
                                    ...J({
                                        iFXIUtt7t: {
                                            variant: `KlM6KShnm`
                                        }
                                    }, b, w)
                                })
                            })
                        }), a(h, {
                            height: 48,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + (((f?.height || 390) - 0 - 304) / 2 + 96 + 32),
                            ...J({
                                iFXIUtt7t: {
                                    y: (f?.y || 0) + 0 + (((f?.height || 312) - 0 - 304) / 2 + 96 + 32)
                                }
                            }, b, w),
                            children: a(y, {
                                className: `framer-lmbi3c-container`,
                                layoutDependency: k,
                                layoutId: `oWeDSST6C-container`,
                                nodeId: `oWeDSST6C`,
                                rendersWithMotion: !0,
                                scopeId: `JZtpx7Nmg`,
                                children: a(q, {
                                    aU1_lXl6h: `Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.`,
                                    height: `100%`,
                                    id: `oWeDSST6C`,
                                    layoutId: `oWeDSST6C`,
                                    pNqA5B2sU: `Can you integrate with our existing tools?`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: `SF38uWa4S`,
                                    width: `100%`,
                                    ...J({
                                        iFXIUtt7t: {
                                            variant: `KlM6KShnm`
                                        }
                                    }, b, w)
                                })
                            })
                        }), a(h, {
                            height: 48,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + (((f?.height || 390) - 0 - 304) / 2 + 144 + 48),
                            ...J({
                                iFXIUtt7t: {
                                    y: (f?.y || 0) + 0 + (((f?.height || 312) - 0 - 304) / 2 + 144 + 48)
                                }
                            }, b, w),
                            children: a(y, {
                                className: `framer-1hwchim-container`,
                                layoutDependency: k,
                                layoutId: `io9j_bFtM-container`,
                                nodeId: `io9j_bFtM`,
                                rendersWithMotion: !0,
                                scopeId: `JZtpx7Nmg`,
                                children: a(q, {
                                    aU1_lXl6h: `Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.`,
                                    height: `100%`,
                                    id: `io9j_bFtM`,
                                    layoutId: `io9j_bFtM`,
                                    pNqA5B2sU: `How long does implementation take?`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: `SF38uWa4S`,
                                    width: `100%`,
                                    ...J({
                                        iFXIUtt7t: {
                                            variant: `KlM6KShnm`
                                        }
                                    }, b, w)
                                })
                            })
                        }), a(h, {
                            height: 48,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + (((f?.height || 390) - 0 - 304) / 2 + 192 + 64),
                            ...J({
                                iFXIUtt7t: {
                                    y: (f?.y || 0) + 0 + (((f?.height || 312) - 0 - 304) / 2 + 192 + 64)
                                }
                            }, b, w),
                            children: a(y, {
                                className: `framer-11y11vx-container`,
                                layoutDependency: k,
                                layoutId: `RMiXR9cAd-container`,
                                nodeId: `RMiXR9cAd`,
                                rendersWithMotion: !0,
                                scopeId: `JZtpx7Nmg`,
                                children: a(q, {
                                    aU1_lXl6h: `Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.`,
                                    height: `100%`,
                                    id: `RMiXR9cAd`,
                                    layoutId: `RMiXR9cAd`,
                                    pNqA5B2sU: `Is your AI secure and compliant?`,
                                    style: {
                                        width: `100%`
                                    },
                                    variant: `SF38uWa4S`,
                                    width: `100%`,
                                    ...J({
                                        iFXIUtt7t: {
                                            variant: `KlM6KShnm`
                                        }
                                    }, b, w)
                                })
                            })
                        })]
                    })
                })
            })
        })
    }),
    ft = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-5oO6Z.framer-1b0arvh, .framer-5oO6Z .framer-1b0arvh { display: block; }`, `.framer-5oO6Z.framer-ln4err { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 467px; }`, `.framer-5oO6Z .framer-1hd0od1-container, .framer-5oO6Z .framer-uhd167-container, .framer-5oO6Z .framer-lmbi3c-container, .framer-5oO6Z .framer-1hwchim-container, .framer-5oO6Z .framer-11y11vx-container { flex: none; height: auto; position: relative; width: 100%; }`],
    Y = k(dt, ft, `framer-5oO6Z`),
    X = Y,
    Y.displayName = `Cards/FAQ`,
    Y.defaultProps = {
        height: 390,
        width: 467
    },
    x(Y, {
        variant: {
            options: [`Edtr6fzPB`, `iFXIUtt7t`],
            optionTitles: [`primary`, `mobile`],
            title: `Variant`,
            type: g.Enum
        }
    }),
    b(Y, [{
        explicitInter: !0,
        fonts: []
    }, ...Qe], {
        supportsExplicitInterCodegen: !0
    })
}
);
function Z(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])),
    n
}
var mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Q, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, $, Lt, Rt = e( () => {
    r(),
    T(),
    p(),
    i(),
    me(),
    Oe(),
    Le(),
    se(),
    le(),
    j(),
    pt(),
    N(),
    mt = C(P),
    ht = A(y),
    gt = A(v),
    _t = C(W),
    vt = C(ie),
    yt = A(m.div),
    bt = C(X),
    xt = [`ropW4voL6`, `uIf1HbpyL`, `X350vQjCb`],
    St = `framer-PQCeN`,
    Ct = {
        ropW4voL6: `framer-v-gynq2b`,
        uIf1HbpyL: `framer-v-8vx3fn`,
        X350vQjCb: `framer-v-123nwvn`
    },
    wt = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    },
    Q = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 60
    },
    Tt = {
        damping: 60,
        delay: .3,
        mass: 1,
        stiffness: 320,
        type: `spring`
    },
    Et = {
        damping: 60,
        delay: .4,
        mass: 1,
        stiffness: 320,
        type: `spring`
    },
    Dt = {
        damping: 60,
        delay: .5,
        mass: 1,
        stiffness: 320,
        type: `spring`
    },
    Ot = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 60
    },
    kt = {
        damping: 60,
        delay: .6,
        mass: 1,
        stiffness: 320,
        type: `spring`
    },
    At = ({value: e, children: t}) => {
        let n = s(f)
          , r = e ?? n.transition
          , i = c( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return a(f.Provider, {
            value: i,
            children: t
        })
    }
    ,
    jt = m.create(u),
    Mt = {
        Desktop: `ropW4voL6`,
        Phone: `X350vQjCb`,
        Tablet: `uIf1HbpyL`
    },
    Nt = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: Mt[r.variant] ?? r.variant ?? `ropW4voL6`
    }),
    Pt = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    Ft = t(function(e, t) {
        let r = o(null)
          , i = t ?? r
          , s = n()
          , {activeLocale: c, setLocale: f} = E()
          , p = ne()
          , {style: g, className: b, layoutId: x, variant: ee, ...C} = Nt(e)
          , {baseVariant: w, classNames: T, clearLoadingGesture: te, gestureHandlers: O, gestureVariant: k, isLoading: A, setGestureState: j, setVariant: ae, variants: M} = re({
            cycleOrder: xt,
            defaultVariant: `ropW4voL6`,
            ref: i,
            variant: ee,
            variantClassNames: Ct
        })
          , N = Pt(e, M)
          , F = [ce, oe]
          , I = S(St, ...F)
          , se = D();
        return a(d, {
            id: x ?? s,
            children: a(jt, {
                animate: M,
                initial: !1,
                children: a(At, {
                    value: wt,
                    children: l(m.section, {
                        ...C,
                        ...O,
                        className: S(I, `framer-gynq2b`, b, T),
                        "data-framer-name": `Desktop`,
                        layoutDependency: N,
                        layoutId: `ropW4voL6`,
                        ref: i,
                        style: {
                            backgroundColor: `var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13))`,
                            ...g
                        },
                        ...Z({
                            uIf1HbpyL: {
                                "data-framer-name": `Tablet`
                            },
                            X350vQjCb: {
                                "data-framer-name": `Phone`
                            }
                        }, w, k),
                        children: [l(m.div, {
                            className: `framer-17hwqok`,
                            "data-framer-name": `container`,
                            layoutDependency: N,
                            layoutId: `RfvOdw4FB`,
                            children: [l(m.div, {
                                className: `framer-nuhzrh`,
                                "data-framer-name": `heading`,
                                layoutDependency: N,
                                layoutId: `IMxPXRWJE`,
                                children: [a(h, {
                                    height: 29,
                                    y: (p?.y || 0) + 100 + (((p?.height || 200) - 200 - 689.8) / 2 + 0 + 0) + 0 + 0 + 0 + 0,
                                    ...Z({
                                        uIf1HbpyL: {
                                            y: (p?.y || 0) + 100 + (((p?.height || 763) - 200 - 689.8) / 2 + 0 + 0) + 0 + 0 + 0 + 0
                                        },
                                        X350vQjCb: {
                                            y: (p?.y || 0) + 80 + (((p?.height || 1027) - 160 - 1097.4) / 2 + 0 + 0) + 0 + 0 + 0 + 0
                                        }
                                    }, w, k),
                                    children: a(ht, {
                                        __framer__animate: {
                                            transition: Tt
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-p30tm6-container`,
                                        layoutDependency: N,
                                        layoutId: `acaxUsfsg-container`,
                                        nodeId: `acaxUsfsg`,
                                        rendersWithMotion: !0,
                                        scopeId: `iWR0Rmd6I`,
                                        children: a(P, {
                                            GJdJmFCj5: `FAQ'S`,
                                            height: `100%`,
                                            id: `acaxUsfsg`,
                                            layoutId: `acaxUsfsg`,
                                            v7319IK7C: Ie,
                                            width: `100%`
                                        })
                                    })
                                }), a(gt, {
                                    __framer__animate: {
                                        transition: Et
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    children: a(u, {
                                        children: a(m.h2, {
                                            style: {
                                                "--font-selector": `SW50ZXItTWVkaXVt`,
                                                "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                "--framer-font-size": `44px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230)))`
                                            },
                                            children: l(m.span, {
                                                "data-text-fill": `true`,
                                                style: {
                                                    backgroundImage: `linear-gradient(161deg, var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230)) 51.657657657657666%, var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13)) 166%)`
                                                },
                                                children: [`Frequently Asked `, a(m.span, {
                                                    style: {
                                                        "--font-selector": `R0Y7SW5zdHJ1bWVudCBTZXJpZi1pdGFsaWM=`,
                                                        "--framer-font-family": `"Instrument Serif", "Instrument Serif Placeholder", serif`,
                                                        "--framer-font-style": `italic`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-text-color": `var(--extracted-2ou5c, rgb(228, 233, 242))`
                                                    },
                                                    children: `Questions`
                                                })]
                                            })
                                        })
                                    }),
                                    className: `framer-1a5y742`,
                                    "data-framer-name": `An Exclusive Community for lead generation experts`,
                                    fonts: [`Inter-Medium`, `GF;Instrument Serif-italic`],
                                    layoutDependency: N,
                                    layoutId: `QDYZ2qy4B`,
                                    style: {
                                        "--extracted-1of0zx5": `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`,
                                        "--extracted-2ou5c": `rgb(228, 233, 242)`,
                                        "--framer-paragraph-spacing": `0px`
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Z({
                                        X350vQjCb: {
                                            __framer__styleAppearEffectEnabled: void 0,
                                            children: a(u, {
                                                children: a(m.h2, {
                                                    style: {
                                                        "--font-selector": `SW50ZXItTWVkaXVt`,
                                                        "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                        "--framer-font-size": `32px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230)))`
                                                    },
                                                    children: l(m.span, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                            backgroundImage: `linear-gradient(161deg, var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230)) 51.657657657657666%, var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13)) 166%)`
                                                        },
                                                        children: [`Frequently Asked `, a(m.span, {
                                                            style: {
                                                                "--font-selector": `R0Y7SW5zdHJ1bWVudCBTZXJpZi1pdGFsaWM=`,
                                                                "--framer-font-family": `"Instrument Serif", "Instrument Serif Placeholder", serif`,
                                                                "--framer-font-style": `italic`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `var(--extracted-2ou5c, rgb(228, 233, 242))`
                                                            },
                                                            children: `Questions`
                                                        })]
                                                    })
                                                })
                                            })
                                        }
                                    }, w, k)
                                }), a(gt, {
                                    __framer__animate: {
                                        transition: Dt
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    children: a(u, {
                                        children: a(m.p, {
                                            className: `framer-styles-preset-1kvyxmc`,
                                            "data-styles-preset": `n7RLEGRKm`,
                                            style: {
                                                "--framer-text-alignment": `center`
                                            },
                                            children: `Find quick answers to the most common support questions`
                                        })
                                    }),
                                    className: `framer-10pnc8h`,
                                    "data-framer-name": `Lead Academy is an academy & community dedicated for lead generation experts & students to share information & grow through collaborative efforts.`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `KhqQblbEi`,
                                    style: {
                                        "--framer-paragraph-spacing": `0px`
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Z({
                                        X350vQjCb: {
                                            __framer__styleAppearEffectEnabled: void 0
                                        }
                                    }, w, k)
                                })]
                            }), l(m.div, {
                                className: `framer-pt4nho`,
                                "data-framer-name": `section`,
                                layoutDependency: N,
                                layoutId: `zm8OWB7qb`,
                                children: [l(yt, {
                                    __framer__animate: {
                                        transition: kt
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Ot,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-huzemf`,
                                    "data-border": !0,
                                    "data-framer-name": `Card`,
                                    layoutDependency: N,
                                    layoutId: `jtb14hKos`,
                                    style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(216, 231, 242, 0.07))`,
                                        "--border-left-width": `1px`,
                                        "--border-right-width": `1px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `1px`,
                                        backgroundColor: `var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13))`,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        boxShadow: `inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)`,
                                        transformPerspective: 1200
                                    },
                                    children: [a(m.div, {
                                        className: `framer-19jtzb5`,
                                        "data-framer-name": `Icon container`,
                                        layoutDependency: N,
                                        layoutId: `QKSQ4f936`,
                                        style: {
                                            backgroundColor: `var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13))`,
                                            borderBottomLeftRadius: 8,
                                            borderBottomRightRadius: 8,
                                            borderTopLeftRadius: 8,
                                            borderTopRightRadius: 8,
                                            boxShadow: `inset 0px 1px 1px 0px rgba(207, 231, 255, 0.2)`
                                        },
                                        children: a(W, {
                                            animated: !0,
                                            className: `framer-9o6s0n`,
                                            layoutDependency: N,
                                            layoutId: `ogOu_0gUL`,
                                            style: {
                                                "--1m6trwb": 0,
                                                "--21h8s6": `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`,
                                                "--pgex8v": 1.5
                                            }
                                        })
                                    }), l(m.div, {
                                        className: `framer-18yr6t7`,
                                        "data-framer-name": `Text Container`,
                                        layoutDependency: N,
                                        layoutId: `bTpE1WwkW`,
                                        children: [a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                                children: a(m.p, {
                                                    className: `framer-styles-preset-i6z8by`,
                                                    "data-styles-preset": `j3hccNIu_`,
                                                    style: {
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230)))`
                                                    },
                                                    children: `Still Have Questions?`
                                                })
                                            }),
                                            className: `framer-19i27c7`,
                                            "data-framer-name": `Heading`,
                                            fonts: [`Inter`],
                                            layoutDependency: N,
                                            layoutId: `gq6DfisPq`,
                                            style: {
                                                "--extracted-r6o4lv": `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                                children: a(m.p, {
                                                    className: `framer-styles-preset-1kvyxmc`,
                                                    "data-styles-preset": `n7RLEGRKm`,
                                                    style: {
                                                        "--framer-text-alignment": `center`
                                                    },
                                                    children: `Still have questions? Feel free to get in touch with us today!`
                                                })
                                            }),
                                            className: `framer-1r7c4eh`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [`Inter`],
                                            layoutDependency: N,
                                            layoutId: `t0r4ofrnI`,
                                            style: {
                                                opacity: .6
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })]
                                    }), a(_, {
                                        links: [{
                                            href: {
                                                webPageId: `SoClmKkhe`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                webPageId: `SoClmKkhe`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                webPageId: `SoClmKkhe`
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: e => a(h, {
                                            height: 38,
                                            y: (p?.y || 0) + 100 + (((p?.height || 200) - 200 - 689.8) / 2 + 0 + 0) + 0 + 273.8 + 0 + 20 + 338,
                                            ...Z({
                                                uIf1HbpyL: {
                                                    y: (p?.y || 0) + 100 + (((p?.height || 763) - 200 - 689.8) / 2 + 0 + 0) + 0 + 273.8 + 0 + 20 + 338
                                                },
                                                X350vQjCb: {
                                                    y: (p?.y || 0) + 80 + (((p?.height || 1027) - 160 - 1097.4) / 2 + 0 + 0) + 0 + 259.4 + 0 + 0 + 20 + 338
                                                }
                                            }, w, k),
                                            children: a(y, {
                                                className: `framer-1p5wk12-container`,
                                                layoutDependency: N,
                                                layoutId: `VuItOzX8_-container`,
                                                nodeId: `VuItOzX8_`,
                                                rendersWithMotion: !0,
                                                scopeId: `iWR0Rmd6I`,
                                                children: a(ie, {
                                                    height: `100%`,
                                                    id: `VuItOzX8_`,
                                                    layoutId: `VuItOzX8_`,
                                                    Ou2Q7KKjz: !0,
                                                    PzIhy2eaz: B,
                                                    tIpm2Fclc: `Ask A Question`,
                                                    vabCwIWAm: e[0],
                                                    variant: `t4D1ZEZ0I`,
                                                    width: `100%`,
                                                    ...Z({
                                                        uIf1HbpyL: {
                                                            vabCwIWAm: e[1]
                                                        },
                                                        X350vQjCb: {
                                                            vabCwIWAm: e[2]
                                                        }
                                                    }, w, k)
                                                })
                                            })
                                        })
                                    }), a(m.div, {
                                        className: `framer-ec2l8`,
                                        "data-framer-name": `Light`,
                                        layoutDependency: N,
                                        layoutId: `F8niFainJ`,
                                        style: {
                                            background: `radial-gradient(50% 50% at 93.7% 8.1%, var(--token-5e357ad1-f56a-4886-be0b-ea13c633f85c, rgba(184, 199, 217, 0.5)) 0%, rgba(4, 7, 13, 0) 100%)`,
                                            opacity: .1
                                        }
                                    })]
                                }), a(h, {
                                    height: 390,
                                    width: `min(max((min(min(${p?.width || `100vw`} - 80px, 1200px), 1000px) - 32px) / 1.5, 1px), 600px)`,
                                    y: (p?.y || 0) + 100 + (((p?.height || 200) - 200 - 689.8) / 2 + 0 + 0) + 0 + 273.8 + 0,
                                    ...Z({
                                        uIf1HbpyL: {
                                            y: (p?.y || 0) + 100 + (((p?.height || 763) - 200 - 689.8) / 2 + 0 + 0) + 0 + 273.8 + 0
                                        },
                                        X350vQjCb: {
                                            width: `min(min(min(${p?.width || `100vw`} - 36px, 1200px), 1000px), 600px)`,
                                            y: (p?.y || 0) + 80 + (((p?.height || 1027) - 160 - 1097.4) / 2 + 0 + 0) + 0 + 259.4 + 0 + 448
                                        }
                                    }, w, k),
                                    children: a(y, {
                                        className: `framer-1xxdhr-container`,
                                        "data-framer-name": `FAQs`,
                                        layoutDependency: N,
                                        layoutId: `rCnVi3WGY-container`,
                                        name: `FAQs`,
                                        nodeId: `rCnVi3WGY`,
                                        rendersWithMotion: !0,
                                        scopeId: `iWR0Rmd6I`,
                                        children: a(X, {
                                            height: `100%`,
                                            id: `rCnVi3WGY`,
                                            layoutId: `rCnVi3WGY`,
                                            name: `FAQs`,
                                            style: {
                                                maxWidth: `100%`,
                                                width: `100%`
                                            },
                                            variant: `Edtr6fzPB`,
                                            width: `100%`,
                                            ...Z({
                                                X350vQjCb: {
                                                    variant: `iFXIUtt7t`
                                                }
                                            }, w, k)
                                        })
                                    })
                                })]
                            })]
                        }), a(m.div, {
                            className: `framer-apnut`,
                            "data-framer-name": `border`,
                            layoutDependency: N,
                            layoutId: `t8X8Gk5K9`,
                            style: {
                                background: `radial-gradient(50% 50% at 50% 50%, var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(255, 255, 255, 0.07)) 0%, var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(0, 0, 0)) 100%)`
                            }
                        }), a(m.div, {
                            className: `framer-18g2oyp`,
                            "data-framer-name": `bg shape`,
                            layoutDependency: N,
                            layoutId: `aicIp3UhO`,
                            style: {
                                background: `radial-gradient(50% 50% at 50% 50%, var(--token-98e77689-c0ed-4bec-a0a3-e86d11b001fb, rgba(213, 219, 230, 0.7)) 0%, rgba(4, 7, 13, 0) 100%)`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                opacity: .1,
                                rotate: -13
                            }
                        })]
                    })
                })
            })
        })
    }),
    It = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-PQCeN.framer-1f32y19, .framer-PQCeN .framer-1f32y19 { display: block; }`, `.framer-PQCeN.framer-gynq2b { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 1200px; }`, `.framer-PQCeN .framer-17hwqok { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-PQCeN .framer-nuhzrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`, `.framer-PQCeN .framer-p30tm6-container, .framer-PQCeN .framer-1p5wk12-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-PQCeN .framer-1a5y742 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`, `.framer-PQCeN .framer-10pnc8h, .framer-PQCeN .framer-19i27c7, .framer-PQCeN .framer-1r7c4eh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-PQCeN .framer-pt4nho { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-PQCeN .framer-huzemf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 600px; overflow: hidden; padding: 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`, `.framer-PQCeN .framer-19jtzb5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: min-content; }`, `.framer-PQCeN .framer-9o6s0n { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 32px; }`, `.framer-PQCeN .framer-18yr6t7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-PQCeN .framer-ec2l8 { -webkit-user-select: none; flex: none; height: 306px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; width: 437px; z-index: 1; }`, `.framer-PQCeN .framer-1xxdhr-container { flex: 2 0 0px; height: auto; max-width: 600px; position: relative; width: 1px; }`, `.framer-PQCeN .framer-apnut { bottom: 0px; flex: none; height: 4px; left: 0px; position: absolute; right: 0px; z-index: 1; }`, `.framer-PQCeN .framer-18g2oyp { bottom: -249px; flex: none; height: 499px; left: calc(50.00000000000002% - 793px / 2); pointer-events: none; position: absolute; width: 793px; z-index: 1; }`, `.framer-PQCeN.framer-v-8vx3fn.framer-gynq2b { width: 810px; }`, `.framer-PQCeN.framer-v-8vx3fn .framer-9o6s0n, .framer-PQCeN.framer-v-123nwvn .framer-9o6s0n { height: var(--framer-aspect-ratio-supported, 32px); }`, `.framer-PQCeN.framer-v-123nwvn.framer-gynq2b { padding: 80px 18px 80px 18px; width: 390px; }`, `.framer-PQCeN.framer-v-123nwvn .framer-pt4nho { align-content: center; align-items: center; flex-direction: column; }`, `.framer-PQCeN.framer-v-123nwvn .framer-huzemf, .framer-PQCeN.framer-v-123nwvn .framer-1xxdhr-container { flex: none; width: 100%; }`, ...L, ...F, `.framer-PQCeN[data-border="true"]::after, .framer-PQCeN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`],
    $ = k(Ft, It, `framer-PQCeN`),
    Lt = $,
    $.displayName = `FAQ'S`,
    $.defaultProps = {
        height: 738,
        width: 1200
    },
    x($, {
        variant: {
            options: [`ropW4voL6`, `uIf1HbpyL`, `X350vQjCb`],
            optionTitles: [`Desktop`, `Tablet`, `Phone`],
            title: `Variant`,
            type: g.Enum
        }
    }),
    b($, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
            weight: `500`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
            weight: `500`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
            weight: `500`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
            weight: `500`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
            weight: `500`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
            weight: `500`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
            weight: `500`
        }, {
            family: `Instrument Serif`,
            source: `google`,
            style: `italic`,
            url: `https://fonts.gstatic.com/s/instrumentserif/v4/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }]
    }, ...mt, ..._t, ...vt, ...bt, ...w(R), ...w(I)], {
        supportsExplicitInterCodegen: !0
    })
}
), zt, Bt, Vt, Ht = e( () => {
    T(),
    ee.loadFonts([`GF;Inter-600`, `GF;Inter-900`, `GF;Inter-900italic`, `GF;Inter-600italic`]),
    zt = [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2`,
            weight: `600`
        }, {
            family: `Inter`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYMZ1rib2Bg-4.woff2`,
            weight: `900`
        }, {
            family: `Inter`,
            source: `google`,
            style: `italic`,
            url: `https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTccNxhiJ-Ek-7MeA.woff2`,
            weight: `900`
        }, {
            family: `Inter`,
            source: `google`,
            style: `italic`,
            url: `https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcB9xhiJ-Ek-7MeA.woff2`,
            weight: `600`
        }]
    }],
    Bt = [`.framer-BDLwN .framer-styles-preset-r6b8wq:not(.rich-text-wrapper), .framer-BDLwN .framer-styles-preset-r6b8wq.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-BDLwN .framer-styles-preset-r6b8wq:not(.rich-text-wrapper), .framer-BDLwN .framer-styles-preset-r6b8wq.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-BDLwN .framer-styles-preset-r6b8wq:not(.rich-text-wrapper), .framer-BDLwN .framer-styles-preset-r6b8wq.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],
    Vt = `framer-BDLwN`
}
);
export {ye as VWXKKteE7_default, B as Y4J94WC46_default, Vt as className, Bt as css, zt as fonts, Lt as iWR0Rmd6I_default, Ht as init_PJG2qgIf6, be as init_VWXKKteE7, me as init_Y4J94WC46, Rt as init_iWR0Rmd6I};
//# sourceMappingURL=PJG2qgIf6.CN7A_Tmr.mjs.map
