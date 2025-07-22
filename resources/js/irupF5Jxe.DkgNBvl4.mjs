import {__esmMin as e} from "./rolldown-runtime.DIBZXYM-.mjs";
import {Y as t, ae as n, init_jsx_runtime as r, init_npm_react_18_2 as i, p as a, pe as o, re as s, se as c, u as l, x as u} from "./react.BGOYdRaa.mjs";
import {LayoutGroup as d, MotionConfigContext as f, init_framer_motion_5EXT2AMG as ee, motion as p} from "./motion.Cp-kJPeu.mjs";
import {ControlType as m, Instance as h, Link as te, RichText as g, addFonts as _, addPropertyControls as v, cx as y, getFontsFromSharedStyle as b, init_framer_6HDYDFRL as x, useComponentViewport as ne, useLocaleInfo as S, useSVGTemplate as C, useVariantState as w, withCSS as T} from "./framer.B1FS9TMt.mjs";
import {className as E, css as D, fonts as O, init_LC6TE31cM as k} from "./LC6TE31cM.BvBp4HnT.mjs";
var A, j, M, N, P, F, I, L, R, z = e( () => {
    r(),
    x(),
    i(),
    A = t(function(e, t) {
        return a(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    j = p.create(A),
    M = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...o} = e;
        return n ? a(j, {
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
    N = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 4.5 0 L 15 16.5 L 10.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="wBdJ15Yu6" transform="translate(4.5 3.75)" width="15px"/><path d="M 0 0 L 4.5 0 L 15 16.5 L 10.5 16.5 Z" fill="transparent" height="16.5px" id="El8uvQLqv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3.75)" width="15px"/><path d="M 6.176 0 L 0 6.794" fill="transparent" height="6.7940624999999955px" id="AHSzdg78i" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 13.456)" width="6.176249999999996px"/><path d="M 6.176 0 L 0 6.794" fill="transparent" height="6.794062499999999px" id="h4GjUNYzh" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.324 3.75)" width="6.176249999999996px"/></svg>`,
    P = ({alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o}) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh
    }),
    F = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: o, ezTt3ayMo: s, lschgej4H: c, qxTvv_EBh: l, ...u} = P(e)
          , d = C(`1688045918`, N);
        return a(M, {
            ...u,
            className: y(`framer-SHPPl`, r),
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
    I = [`.framer-SHPPl { aspect-ratio: 1; display: block; width: 24px; }`],
    L = T(F, I, `framer-SHPPl`),
    L.displayName = `X Logo`,
    R = L,
    v(L, {
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
function re(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])),
    n
}
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, ie = e( () => {
    r(),
    x(),
    ee(),
    i(),
    z(),
    k(),
    B = {
        t4D1ZEZ0I: {
            hover: !0
        },
        VdiD_ZTuf: {
            hover: !0
        }
    },
    V = [`t4D1ZEZ0I`, `VdiD_ZTuf`, `acZX37oY0`, `U5nx7SFOI`],
    H = `framer-YI4ds`,
    U = {
        acZX37oY0: `framer-v-g3bspi`,
        t4D1ZEZ0I: `framer-v-26mb0f`,
        U5nx7SFOI: `framer-v-1r8q8sj`,
        VdiD_ZTuf: `framer-v-3y8mml`
    },
    W = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    },
    G = ({value: e, children: t}) => {
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
    K = p.create(u),
    q = {
        "desktop icon left": `t4D1ZEZ0I`,
        "desktop icon right": `VdiD_ZTuf`,
        "mobile with icon": `acZX37oY0`,
        "mobile without icon": `U5nx7SFOI`
    },
    J = ({height: e, icon: t, id: n, link: r, newTab: i, text: a, width: o, ...s}) => ({
        ...s,
        Ou2Q7KKjz: i ?? s.Ou2Q7KKjz ?? !0,
        PzIhy2eaz: t ?? s.PzIhy2eaz ?? R,
        tIpm2Fclc: a ?? s.tIpm2Fclc ?? `Remix for free`,
        vabCwIWAm: r ?? s.vabCwIWAm,
        variant: q[s.variant] ?? s.variant ?? `t4D1ZEZ0I`
    }),
    Y = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    X = t(function(e, t) {
        let r = o(null)
          , i = t ?? r
          , s = n()
          , {activeLocale: c, setLocale: f} = S()
          , ee = ne()
          , {style: m, className: _, layoutId: v, variant: b, vabCwIWAm: x, PzIhy2eaz: C, tIpm2Fclc: T, Ou2Q7KKjz: D, ...O} = J(e)
          , {baseVariant: k, classNames: A, clearLoadingGesture: j, gestureHandlers: M, gestureVariant: N, isLoading: P, setGestureState: F, setVariant: I, variants: L} = w({
            cycleOrder: V,
            defaultVariant: `t4D1ZEZ0I`,
            enabledGestures: B,
            ref: i,
            variant: b,
            variantClassNames: U
        })
          , R = Y(e, L)
          , z = [E]
          , q = y(H, ...z)
          , X = () => k !== `U5nx7SFOI`;
        return a(d, {
            id: v ?? s,
            children: a(K, {
                animate: L,
                initial: !1,
                children: a(G, {
                    value: W,
                    children: a(te, {
                        href: x,
                        motionChild: !0,
                        nodeId: `t4D1ZEZ0I`,
                        openInNewTab: D,
                        scopeId: `irupF5Jxe`,
                        smoothScroll: !0,
                        children: l(p.a, {
                            ...O,
                            ...M,
                            className: `${y(q, `framer-26mb0f`, _, A)} framer-1xyivzk`,
                            "data-border": !0,
                            "data-framer-name": `desktop icon left`,
                            layoutDependency: R,
                            layoutId: `t4D1ZEZ0I`,
                            ref: i,
                            style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(216, 231, 242, 0.07))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backdropFilter: `blur(5px)`,
                                background: `linear-gradient(180deg, var(--token-f213e283-24d0-40a3-a2dc-bca1da07b971, rgb(20, 20, 20)) 0%, var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(255, 255, 255, 0.07)) 100%)`,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                boxShadow: `inset 0px -0.48174984141951427px 0.48174984141951427px -1.25px rgba(0, 0, 0, 0.68), inset 0px -1.8308266425947657px 1.8308266425947657px -2.5px rgba(0, 0, 0, 0.6), inset 0px -8px 8px -3.75px rgba(0, 0, 0, 0.24)`,
                                WebkitBackdropFilter: `blur(5px)`,
                                ...m
                            },
                            variants: {
                                "t4D1ZEZ0I-hover": {
                                    background: `linear-gradient(0deg, var(--token-f213e283-24d0-40a3-a2dc-bca1da07b971, rgb(20, 20, 20)) 0%, var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(255, 255, 255, 0.07)) 100%)`
                                },
                                "VdiD_ZTuf-hover": {
                                    background: `linear-gradient(0deg, var(--token-f213e283-24d0-40a3-a2dc-bca1da07b971, rgb(20, 20, 20)) 0%, var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(255, 255, 255, 0.07)) 100%)`
                                }
                            },
                            ...re({
                                "t4D1ZEZ0I-hover": {
                                    "data-framer-name": void 0
                                },
                                "VdiD_ZTuf-hover": {
                                    "data-framer-name": void 0
                                },
                                acZX37oY0: {
                                    "data-framer-name": `mobile with icon`
                                },
                                U5nx7SFOI: {
                                    "data-framer-name": `mobile without icon`
                                },
                                VdiD_ZTuf: {
                                    "data-framer-name": `desktop icon right`
                                }
                            }, k, N),
                            children: [X() && a(h, {
                                animated: !0,
                                className: `framer-11dda3b`,
                                Component: C,
                                layoutDependency: R,
                                layoutId: `bXF8XbkvF`,
                                style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255))`,
                                    "--pgex8v": 1.5,
                                    opacity: .8
                                },
                                variants: {
                                    "t4D1ZEZ0I-hover": {
                                        opacity: 1
                                    }
                                }
                            }), a(g, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                    children: a(p.p, {
                                        className: `framer-styles-preset-dmuy5d`,
                                        "data-styles-preset": `LC6TE31cM`,
                                        style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255)))`
                                        },
                                        children: `Remix for free`
                                    })
                                }),
                                className: `framer-1bph33e`,
                                "data-framer-name": `Label`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `ewNzhmOaL`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255))`,
                                    "--framer-paragraph-spacing": `0px`,
                                    opacity: .8
                                },
                                text: T,
                                variants: {
                                    "t4D1ZEZ0I-hover": {
                                        opacity: 1
                                    },
                                    "VdiD_ZTuf-hover": {
                                        opacity: 1
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            })]
                        })
                    })
                })
            })
        })
    }),
    Z = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-YI4ds.framer-1xyivzk, .framer-YI4ds .framer-1xyivzk { display: block; }`, `.framer-YI4ds.framer-26mb0f { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 20px 8px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-YI4ds .framer-11dda3b { flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`, `.framer-YI4ds .framer-1bph33e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-YI4ds.framer-v-3y8mml .framer-11dda3b, .framer-YI4ds.framer-v-3y8mml.hover .framer-1bph33e { order: 1; }`, `.framer-YI4ds.framer-v-3y8mml .framer-1bph33e, .framer-YI4ds.framer-v-3y8mml.hover .framer-11dda3b { order: 0; }`, ...D, `.framer-YI4ds[data-border="true"]::after, .framer-YI4ds [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`],
    Q = T(X, Z, `framer-YI4ds`),
    $ = Q,
    Q.displayName = `secondary button`,
    Q.defaultProps = {
        height: 38,
        width: 158
    },
    v(Q, {
        variant: {
            options: [`t4D1ZEZ0I`, `VdiD_ZTuf`, `acZX37oY0`, `U5nx7SFOI`],
            optionTitles: [`desktop icon left`, `desktop icon right`, `mobile with icon`, `mobile without icon`],
            title: `Variant`,
            type: m.Enum
        },
        vabCwIWAm: {
            title: `Link`,
            type: m.Link
        },
        PzIhy2eaz: {
            defaultValue: {
                identifier: `module:oMiuMYAdxzz5yk7pBqrm/FToqm3dwiHuJofBRASRI/Xx_sbLkzD.js:default`,
                moduleId: `oMiuMYAdxzz5yk7pBqrm`
            },
            setModuleId: `omX0gWFPqDwhaiWwf6ab`,
            title: `Icon`,
            type: m.VectorSetItem
        },
        tIpm2Fclc: {
            defaultValue: `Remix for free`,
            displayTextArea: !1,
            title: `text`,
            type: m.String
        },
        Ou2Q7KKjz: {
            defaultValue: !0,
            title: `New Tab`,
            type: m.Boolean
        }
    }),
    _(Q, [{
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
    }, ...b(O)], {
        supportsExplicitInterCodegen: !0
    })
}
);
export {R as Xx_sbLkzD_default, z as init_Xx_sbLkzD, ie as init_irupF5Jxe, $ as irupF5Jxe_default};
//# sourceMappingURL=irupF5Jxe.DkgNBvl4.mjs.map
