import {__esmMin as e} from "./rolldown-runtime.DIBZXYM-.mjs";
import {Y as t, ae as n, init_jsx_runtime as r, init_npm_react_18_2 as i, p as a, pe as o, re as s, se as c, x as l} from "./react.BGOYdRaa.mjs";
import {LayoutGroup as u, MotionConfigContext as d, init_framer_motion_5EXT2AMG as f, motion as p} from "./motion.Cp-kJPeu.mjs";
import {ControlType as m, Image2 as h, Instance as g, Link as ee, addFonts as _, addPropertyControls as v, cx as y, getLoadingLazyAtYPosition as b, init_framer_6HDYDFRL as x, useComponentViewport as S, useLocaleInfo as C, useSVGTemplate as w, useVariantState as T, withCSS as E} from "./framer.B1FS9TMt.mjs";
import {Xx_sbLkzD_default as te, init_Xx_sbLkzD as D} from "./irupF5Jxe.DkgNBvl4.mjs";
var O, k, A, j, M, N, P, F, I, L, R, z, B = e( () => {
    r(),
    x(),
    f(),
    i(),
    O = `framer-s9Ols`,
    k = {
        wU9JPioIr: `framer-v-169g3he`
    },
    A = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
        src: e
    } : void 0,
    j = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    },
    M = ({value: e, children: t}) => {
        let n = s(d)
          , r = e ?? n.transition
          , i = c( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return a(d.Provider, {
            value: i,
            children: t
        })
    }
    ,
    N = p.create(l),
    P = ({height: e, id: t, logo: n, width: r, ...i}) => ({
        ...i,
        SYWdo3uYr: n ?? i.SYWdo3uYr ?? {
            alt: ``,
            pixelHeight: 62,
            pixelWidth: 163,
            src: `https://framerusercontent.com/images/04vJJZ3D2ponPv6rzLBq6sf2PZU.svg`
        }
    }),
    F = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    I = t(function(e, t) {
        let r = o(null)
          , i = t ?? r
          , s = n()
          , {activeLocale: c, setLocale: l} = C()
          , d = S()
          , {style: f, className: p, layoutId: m, variant: g, SYWdo3uYr: _, ...v} = P(e)
          , {baseVariant: x, classNames: w, clearLoadingGesture: E, gestureHandlers: te, gestureVariant: D, isLoading: I, setGestureState: L, setVariant: R, variants: z} = T({
            defaultVariant: `wU9JPioIr`,
            ref: i,
            variant: g,
            variantClassNames: k
        })
          , B = F(e, z)
          , V = []
          , H = y(O, ...V);
        return a(u, {
            id: m ?? s,
            children: a(N, {
                animate: z,
                initial: !1,
                children: a(M, {
                    value: j,
                    children: a(ee, {
                        href: {
                            hash: `:E5xbXrjqj`,
                            webPageId: `augiA20Il`
                        },
                        motionChild: !0,
                        nodeId: `wU9JPioIr`,
                        openInNewTab: !1,
                        scopeId: `KuUrcl5x_`,
                        smoothScroll: !0,
                        children: a(h, {
                            ...v,
                            ...te,
                            as: `a`,
                            background: {
                                alt: ``,
                                fit: `fit`,
                                loading: b(d?.y || 0),
                                pixelHeight: 62,
                                pixelWidth: 163,
                                sizes: d?.width || `100vw`,
                                ...A(_),
                                positionX: `center`,
                                positionY: `center`
                            },
                            className: `${y(H, `framer-169g3he`, p, w)} framer-11n6r7`,
                            "data-framer-name": `primary`,
                            layoutDependency: B,
                            layoutId: `wU9JPioIr`,
                            ref: i,
                            style: {
                                ...f
                            }
                        })
                    })
                })
            })
        })
    }),
    L = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-s9Ols.framer-11n6r7, .framer-s9Ols .framer-11n6r7 { display: block; }`, `.framer-s9Ols.framer-169g3he { height: 39px; overflow: visible; position: relative; text-decoration: none; width: 103px; }`],
    R = E(I, L, `framer-s9Ols`),
    z = R,
    R.displayName = `logo`,
    R.defaultProps = {
        height: 39,
        width: 103
    },
    v(R, {
        SYWdo3uYr: {
            __defaultAssetReference: `data:framer/asset-reference,04vJJZ3D2ponPv6rzLBq6sf2PZU.svg?originalFilename=Group+80ghgfd86.svg&preferredSize=auto`,
            __vekterDefault: {
                alt: ``,
                assetReference: `data:framer/asset-reference,04vJJZ3D2ponPv6rzLBq6sf2PZU.svg?originalFilename=Group+80ghgfd86.svg&preferredSize=auto`
            },
            title: `logo`,
            type: m.ResponsiveImage
        }
    }),
    _(R, [{
        explicitInter: !0,
        fonts: []
    }], {
        supportsExplicitInterCodegen: !0
    })
}
), V, H, U, W, G, K, q, J, Y, ne = e( () => {
    r(),
    x(),
    i(),
    V = t(function(e, t) {
        return a(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    H = p.create(V),
    U = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(H, {
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
    W = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 13.5 0 L 4.5 0 C 2.015 0 0 2.015 0 4.5 L 0 13.5 C 0 15.985 2.015 18 4.5 18 L 13.5 18 C 15.985 18 18 15.985 18 13.5 L 18 4.5 C 18 2.015 15.985 0 13.5 0 Z M 9 12.75 C 6.929 12.75 5.25 11.071 5.25 9 C 5.25 6.929 6.929 5.25 9 5.25 C 11.071 5.25 12.75 6.929 12.75 9 C 12.75 11.071 11.071 12.75 9 12.75 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="SuXKGhab5" transform="translate(3 3)" width="18px"/><path d="M 4.5 18 C 2.015 18 0 15.985 0 13.5 L 0 4.5 C 0 2.015 2.015 0 4.5 0 L 13.5 0 C 15.985 0 18 2.015 18 4.5 L 18 13.5 C 18 15.985 15.985 18 13.5 18 Z" fill="transparent" height="18px" id="vvJ8FLDVj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/><path d="M 0 3.75 C 0 1.679 1.679 0 3.75 0 C 5.821 0 7.5 1.679 7.5 3.75 C 7.5 5.821 5.821 7.5 3.75 7.5 C 1.679 7.5 0 5.821 0 3.75 Z" fill="transparent" height="7.5px" id="Q3v7fjWhv" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 8.25)" width="7.5px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="VxeO4Hprj" transform="translate(15.75 6)" width="2.25px"/></svg>`,
    G = ({alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o}) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh
    }),
    K = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, lschgej4H: c, qxTvv_EBh: l, ...u} = G(e)
          , d = w(`942143898`, W);
        return a(U, {
            ...u,
            className: y(`framer-AT1Ex`, r),
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
    q = [`.framer-AT1Ex { aspect-ratio: 1; display: block; width: 24px; }`],
    J = E(K, q, `framer-AT1Ex`),
    J.displayName = `Instagram Logo`,
    Y = J,
    v(J, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Color`,
            type: m.Color
        },
        lschgej4H: {
            defaultValue: 1.5,
            displayStepper: !0,
            hidden: !1,
            max: 6,
            min: 0,
            step: .5,
            title: `Width`,
            type: m.Number
        },
        qxTvv_EBh: {
            defaultValue: 0,
            displayStepper: !0,
            hidden: !1,
            max: 1,
            min: 0,
            step: .1,
            title: `Alpha`,
            type: m.Number
        }
    })
}
), X, re, Z, ie, ae, oe, se, Q, ce, le = e( () => {
    r(),
    x(),
    i(),
    X = t(function(e, t) {
        return a(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    re = p.create(X),
    Z = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(re, {
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
    ie = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="toDPs7Y9O" transform="translate(3 3)" width="18px"/><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill="transparent" height="18px" id="nB8qhy58t" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/><path d="M 3.75 0 L 2.25 0 C 1.007 0 0 1.007 0 2.25 L 0 12.75" fill="transparent" height="12.75px" id="QFOnXWoYe" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 8.25)" width="3.75px"/><path d="M 0 0 L 6 0" fill="transparent" height="1px" id="rOK6Xhani" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 13.5)" width="6px"/></svg>`,
    ae = ({alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o}) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh
    }),
    oe = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, lschgej4H: c, qxTvv_EBh: l, ...u} = ae(e)
          , d = w(`1426455308`, ie);
        return a(Z, {
            ...u,
            className: y(`framer-ojcNP`, r),
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
    se = [`.framer-ojcNP { aspect-ratio: 1; display: block; width: 24px; }`],
    Q = E(oe, se, `framer-ojcNP`),
    Q.displayName = `Facebook Logo`,
    ce = Q,
    v(Q, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Color`,
            type: m.Color
        },
        lschgej4H: {
            defaultValue: 1.5,
            displayStepper: !0,
            hidden: !1,
            max: 6,
            min: 0,
            step: .5,
            title: `Width`,
            type: m.Number
        },
        qxTvv_EBh: {
            defaultValue: 0,
            displayStepper: !0,
            hidden: !1,
            max: 1,
            min: 0,
            step: .1,
            title: `Alpha`,
            type: m.Number
        }
    })
}
);
function ue(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])),
    n
}
var de, fe, pe, me, he, ge, _e, ve, ye, be, $, xe, Se = e( () => {
    r(),
    x(),
    f(),
    i(),
    D(),
    de = {
        EptH6fZjc: {
            hover: !0
        }
    },
    fe = `framer-3x6AT`,
    pe = {
        EptH6fZjc: `framer-v-cmqdzy`
    },
    me = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    },
    he = ({value: e, children: t}) => {
        let n = s(d)
          , r = e ?? n.transition
          , i = c( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return a(d.Provider, {
            value: i,
            children: t
        })
    }
    ,
    ge = p.create(l),
    _e = ({height: e, icon: t, id: n, link: r, width: i, ...a}) => ({
        ...a,
        RhBoiefR8: t ?? a.RhBoiefR8 ?? te,
        YdTA2k7Lp: r ?? a.YdTA2k7Lp
    }),
    ve = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    ye = t(function(e, t) {
        let r = o(null)
          , i = t ?? r
          , s = n()
          , {activeLocale: c, setLocale: l} = C()
          , d = S()
          , {style: f, className: m, layoutId: h, variant: _, RhBoiefR8: v, YdTA2k7Lp: b, ...x} = _e(e)
          , {baseVariant: w, classNames: E, clearLoadingGesture: te, gestureHandlers: D, gestureVariant: O, isLoading: k, setGestureState: A, setVariant: j, variants: M} = T({
            defaultVariant: `EptH6fZjc`,
            enabledGestures: de,
            ref: i,
            variant: _,
            variantClassNames: pe
        })
          , N = ve(e, M)
          , P = []
          , F = y(fe, ...P);
        return a(u, {
            id: h ?? s,
            children: a(ge, {
                animate: M,
                initial: !1,
                children: a(he, {
                    value: me,
                    children: a(ee, {
                        href: b,
                        motionChild: !0,
                        nodeId: `EptH6fZjc`,
                        openInNewTab: !0,
                        scopeId: `HRa_2U6GS`,
                        children: a(p.a, {
                            ...x,
                            ...D,
                            className: `${y(F, `framer-cmqdzy`, m, E)} framer-fgygfz`,
                            "data-framer-name": `primary`,
                            layoutDependency: N,
                            layoutId: `EptH6fZjc`,
                            ref: i,
                            style: {
                                borderBottomLeftRadius: 201,
                                borderBottomRightRadius: 201,
                                borderTopLeftRadius: 201,
                                borderTopRightRadius: 201,
                                ...f
                            },
                            ...ue({
                                "EptH6fZjc-hover": {
                                    "data-framer-name": void 0
                                }
                            }, w, O),
                            children: a(g, {
                                animated: !0,
                                className: `framer-zheq7`,
                                Component: v,
                                layoutDependency: N,
                                layoutId: `MKWP5APPT`,
                                style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`,
                                    "--pgex8v": 1.5,
                                    opacity: .5
                                },
                                variants: {
                                    "EptH6fZjc-hover": {
                                        opacity: 1
                                    }
                                }
                            })
                        })
                    })
                })
            })
        })
    }),
    be = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-3x6AT.framer-fgygfz, .framer-3x6AT .framer-fgygfz { display: block; }`, `.framer-3x6AT.framer-cmqdzy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-3x6AT .framer-zheq7 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`],
    $ = E(ye, be, `framer-3x6AT`),
    xe = $,
    $.displayName = `Elements/social media`,
    $.defaultProps = {
        height: 40,
        width: 40
    },
    v($, {
        RhBoiefR8: {
            defaultValue: {
                identifier: `module:oMiuMYAdxzz5yk7pBqrm/FToqm3dwiHuJofBRASRI/Xx_sbLkzD.js:default`,
                moduleId: `oMiuMYAdxzz5yk7pBqrm`
            },
            setModuleId: `omX0gWFPqDwhaiWwf6ab`,
            title: `Icon`,
            type: m.VectorSetItem
        },
        YdTA2k7Lp: {
            title: `Link`,
            type: m.Link
        }
    }),
    _($, [{
        explicitInter: !0,
        fonts: []
    }], {
        supportsExplicitInterCodegen: !0
    })
}
);
export {xe as HRa_2U6GS_default, z as KuUrcl5x__default, ce as QDC8_m4BS_default, Y as UD0eTfbk__default, Se as init_HRa_2U6GS, B as init_KuUrcl5x_, le as init_QDC8_m4BS, ne as init_UD0eTfbk_};
//# sourceMappingURL=HRa_2U6GS.DId6BZBA.mjs.map
