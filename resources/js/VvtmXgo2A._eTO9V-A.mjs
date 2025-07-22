import {__esmMin as e} from "./rolldown-runtime.DIBZXYM-.mjs";
import {Y as t, ae as n, init_jsx_runtime as r, init_npm_react_18_2 as i, npm_react_18_2_exports as a, p as o, pe as s, re as c, se as l, u, ue as ee, x as d, ye as f} from "./react.BGOYdRaa.mjs";
import {LayoutGroup as p, MotionConfigContext as m, init_framer_motion_5EXT2AMG as h, motion as g} from "./motion.Cp-kJPeu.mjs";
import {ComponentViewportProvider as _, ControlType as v, Instance as y, Link as b, RenderTarget as x, RichText as S, SmartComponentScopedContainer as te, addFonts as C, addPropertyControls as w, cx as T, fontStore as E, getFonts as ne, getFontsFromSharedStyle as re, init_framer_6HDYDFRL as D, useComponentViewport as O, useLocaleInfo as k, useSVGTemplate as ie, useVariantState as ae, withCSS as A} from "./framer.B1FS9TMt.mjs";
import {className as j, css as M, fonts as N, init_LC6TE31cM as oe} from "./LC6TE31cM.BvBp4HnT.mjs";
var se, ce, le, ue, de, fe, P, F, I, L = e( () => {
    r(),
    D(),
    i(),
    se = t(function(e, t) {
        return o(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    ce = g.create(se),
    le = t( (e, t) => {
        let {animated: n, layoutId: r, children: i, ...a} = e;
        return n ? o(ce, {
            ...a,
            layoutId: r,
            ref: t,
            children: i
        }) : o(`svg`, {
            ...a,
            ref: t,
            children: i
        })
    }
    ),
    ue = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px"/><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px"/></svg>`,
    de = ({alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o}) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh
    }),
    fe = t(function(e, t) {
        let {style: n, className: r, layoutId: i, variant: a, ezTt3ayMo: s, lschgej4H: c, qxTvv_EBh: l, ...u} = de(e)
          , ee = ie(`2930526878`, ue);
        return o(le, {
            ...u,
            className: T(`framer-NPQf0`, r),
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
            children: o(`use`, {
                href: ee
            })
        })
    }),
    P = [`.framer-NPQf0 { aspect-ratio: 1; display: block; width: 24px; }`],
    F = A(fe, P, `framer-NPQf0`),
    F.displayName = `Star`,
    I = F,
    w(F, {
        ezTt3ayMo: {
            defaultValue: `rgb(0, 0, 0)`,
            hidden: !1,
            title: `Color`,
            type: v.Color
        },
        lschgej4H: {
            defaultValue: 1.5,
            displayStepper: !0,
            hidden: !1,
            max: 6,
            min: 0,
            step: .5,
            title: `Width`,
            type: v.Number
        },
        qxTvv_EBh: {
            defaultValue: 0,
            displayStepper: !0,
            hidden: !1,
            max: 1,
            min: 0,
            step: .1,
            title: `Alpha`,
            type: v.Number
        }
    })
}
), R, z, B, V = e( () => {
    r(),
    i(),
    R = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    },
    z = {
        ...R,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`
    },
    B = t( (e, t) => o(`div`, {
        style: z,
        ref: t
    }))
}
);
function H(e, t, n=``, r, i) {
    let a = l( () => {
        if (n == null || n?.length === 0)
            return null;
        let t = n.toLowerCase().replace(/-|\s/g, ``);
        var r;
        let a = (r = i[t]) ?? pe(e, t);
        return a
    }
    , [r, n])
      , o = t ? r : a;
    return o
}
var U, pe, me = e( () => {
    i(),
    D(),
    U = {
        onClick: {
            type: v.EventHandler
        },
        onMouseDown: {
            type: v.EventHandler
        },
        onMouseUp: {
            type: v.EventHandler
        },
        onMouseEnter: {
            type: v.EventHandler
        },
        onMouseLeave: {
            type: v.EventHandler
        }
    },
    pe = (e, t) => e.find(e => e.toLowerCase().includes(t))
}
), W, he, ge, _e, ve = e( () => {
    ge = e => (W || (W = new Map([[`bold`, e.createElement(e.Fragment, null, e.createElement(`path`, {
        d: `M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z`
    }))], [`duotone`, e.createElement(e.Fragment, null, e.createElement(`path`, {
        d: `M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z`,
        opacity: `0.2`
    }), e.createElement(`path`, {
        d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`
    }))], [`fill`, e.createElement(e.Fragment, null, e.createElement(`path`, {
        d: `M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z`
    }))], [`light`, e.createElement(e.Fragment, null, e.createElement(`path`, {
        d: `M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z`
    }))], [`regular`, e.createElement(e.Fragment, null, e.createElement(`path`, {
        d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`
    }))], [`thin`, e.createElement(e.Fragment, null, e.createElement(`path`, {
        d: `M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z`
    }))]]),
    he = e.forwardRef( (t, n) => e.createElement(`g`, {
        ref: n,
        ...t
    }, W.get(t.weight)))),
    he),
    _e = ge
}
);
function G(e) {
    let {color: t, selectByList: n, iconSearch: r, iconSelection: i, onClick: c, onMouseDown: l, onMouseUp: u, onMouseEnter: d, onMouseLeave: p, weight: m, mirrored: h} = e
      , _ = s(!1)
      , v = H(K, n, r, i, be)
      , [y,b] = f(v === `Home` ? _e(a) : null);
    async function S() {
        try {
            let e = `0.0.57`
              , t = `${ye}${v}.js@${e}`
              , n = await import(t);
            _.current && b(n.default(a))
        } catch {
            _.current && b(null)
        }
    }
    ee( () => (_.current = !0,
    S(),
    () => {
        _.current = !1
    }
    ), [v]);
    let te = x.current() === x.canvas
      , C = te ? o(B, {}) : null;
    return o(g.div, {
        style: {
            display: `contents`
        },
        onClick: c,
        onMouseEnter: d,
        onMouseLeave: p,
        onMouseDown: l,
        onMouseUp: u,
        children: y ? o(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 256 256`,
            style: {
                userSelect: `none`,
                width: `100%`,
                height: `100%`,
                display: `inline-block`,
                fill: t,
                color: t,
                flexShrink: 0,
                transform: h ? `scale(-1, 1)` : void 0
            },
            focusable: `false`,
            color: t,
            children: o(y, {
                color: t,
                weight: m
            })
        }) : C
    })
}
var K, ye, q, be, xe = e( () => {
    r(),
    i(),
    D(),
    h(),
    V(),
    ve(),
    me(),
    K = `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(`.`),
    ye = `https://framer.com/m/phosphor-icons/`,
    q = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`],
    be = K.reduce( (e, t) => (e[t.toLowerCase()] = t,
    e), {}),
    G.displayName = `Phosphor`,
    G.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1
    },
    w(G, {
        selectByList: {
            type: v.Boolean,
            title: `Select`,
            enabledTitle: `List`,
            disabledTitle: `Search`,
            defaultValue: G.defaultProps.selectByList
        },
        iconSelection: {
            type: v.Enum,
            options: K,
            defaultValue: G.defaultProps.iconSelection,
            title: `Name`,
            hidden: ({selectByList: e}) => !e,
            description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`
        },
        iconSearch: {
            type: v.String,
            title: `Name`,
            placeholder: `Menu, Wifi, Box…`,
            hidden: ({selectByList: e}) => e
        },
        color: {
            type: v.Color,
            title: `Color`,
            defaultValue: G.defaultProps.color
        },
        weight: {
            type: v.Enum,
            title: `Weight`,
            optionTitles: q.map(e => e.charAt(0).toUpperCase() + e.slice(1)),
            options: q,
            defaultValue: G.defaultProps.weight
        },
        mirrored: {
            type: v.Boolean,
            enabledTitle: `Yes`,
            disabledTitle: `No`,
            defaultValue: G.defaultProps.mirrored
        },
        ...U
    })
}
), J, Y, X, Se = e( () => {
    D(),
    E.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
    J = [{
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
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `italic`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
            weight: `400`
        }]
    }],
    Y = [`.framer-4LDiz .framer-styles-preset-1u349i7:not(.rich-text-wrapper), .framer-4LDiz .framer-styles-preset-1u349i7.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, #d5dbe6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1279px) and (min-width: 810px) { .framer-4LDiz .framer-styles-preset-1u349i7:not(.rich-text-wrapper), .framer-4LDiz .framer-styles-preset-1u349i7.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, #d5dbe6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-4LDiz .framer-styles-preset-1u349i7:not(.rich-text-wrapper), .framer-4LDiz .framer-styles-preset-1u349i7.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, #d5dbe6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],
    X = `framer-4LDiz`
}
), Ce, we, Te, Ee, De, Oe, ke, Ae, je, Z, Me, Ne = e( () => {
    r(),
    D(),
    h(),
    i(),
    L(),
    Se(),
    Ce = `framer-ZZ7co`,
    we = {
        qDwaIyUEs: `framer-v-zo65t`
    },
    Te = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    },
    Ee = ({value: e, children: t}) => {
        let n = c(m)
          , r = e ?? n.transition
          , i = l( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return o(m.Provider, {
            value: i,
            children: t
        })
    }
    ,
    De = g.create(d),
    Oe = ({content: e, height: t, icon: n, id: r, width: i, ...a}) => ({
        ...a,
        GJdJmFCj5: e ?? a.GJdJmFCj5 ?? `GraduationCap`,
        v7319IK7C: n ?? a.v7319IK7C ?? I
    }),
    ke = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    Ae = t(function(e, t) {
        let r = s(null)
          , i = t ?? r
          , a = n()
          , {activeLocale: c, setLocale: l} = k()
          , ee = O()
          , {style: f, className: m, layoutId: h, variant: _, GJdJmFCj5: v, v7319IK7C: b, ...x} = Oe(e)
          , {baseVariant: te, classNames: C, clearLoadingGesture: w, gestureHandlers: E, gestureVariant: ne, isLoading: re, setGestureState: D, setVariant: ie, variants: A} = ae({
            defaultVariant: `qDwaIyUEs`,
            ref: i,
            variant: _,
            variantClassNames: we
        })
          , j = ke(e, A)
          , M = [X]
          , N = T(Ce, ...M);
        return o(p, {
            id: h ?? a,
            children: o(De, {
                animate: A,
                initial: !1,
                children: o(Ee, {
                    value: Te,
                    children: u(g.div, {
                        ...x,
                        ...E,
                        className: T(N, `framer-zo65t`, m, C),
                        "data-border": !0,
                        "data-framer-name": `primary`,
                        layoutDependency: j,
                        layoutId: `qDwaIyUEs`,
                        ref: i,
                        style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(216, 231, 242, 0.07))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13))`,
                            borderBottomLeftRadius: 60,
                            borderBottomRightRadius: 60,
                            borderTopLeftRadius: 60,
                            borderTopRightRadius: 60,
                            ...f
                        },
                        children: [o(y, {
                            animated: !0,
                            className: `framer-1nserkm`,
                            Component: b,
                            layoutDependency: j,
                            layoutId: `lD59XIpNq`,
                            style: {
                                "--1m6trwb": 1,
                                "--21h8s6": `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`,
                                "--pgex8v": 1.5
                            }
                        }), o(S, {
                            __fromCanvasComponent: !0,
                            children: o(d, {
                                children: o(g.p, {
                                    className: `framer-styles-preset-1u349i7`,
                                    "data-styles-preset": `rerWrmQ65`,
                                    children: `GraduationCap`
                                })
                            }),
                            className: `framer-1x6bqto`,
                            fonts: [`Inter`],
                            layoutDependency: j,
                            layoutId: `xSOJ_ShuV`,
                            style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                        })]
                    })
                })
            })
        })
    }),
    je = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-ZZ7co.framer-1dxqqrl, .framer-ZZ7co .framer-1dxqqrl { display: block; }`, `.framer-ZZ7co.framer-zo65t { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 12px 6px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-ZZ7co .framer-1nserkm { flex: none; height: var(--framer-aspect-ratio-supported, 17px); position: relative; width: 17px; }`, `.framer-ZZ7co .framer-1x6bqto { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, ...Y, `.framer-ZZ7co[data-border="true"]::after, .framer-ZZ7co [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`],
    Z = A(Ae, je, `framer-ZZ7co`),
    Me = Z,
    Z.displayName = `Elements / Badge`,
    Z.defaultProps = {
        height: 29,
        width: 134
    },
    w(Z, {
        GJdJmFCj5: {
            defaultValue: `GraduationCap`,
            displayTextArea: !1,
            title: `Content`,
            type: v.String
        },
        v7319IK7C: {
            defaultValue: {
                identifier: `module:lGjONevu0Qs1ZIO2v8WJ/1BYYnFlgrBf9goxuImJd/dZkd7bSHY.js:default`,
                moduleId: `lGjONevu0Qs1ZIO2v8WJ`
            },
            setModuleId: `omX0gWFPqDwhaiWwf6ab`,
            title: `Icon`,
            type: v.VectorSetItem
        }
    }),
    C(Z, [{
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
    }, ...re(J)], {
        supportsExplicitInterCodegen: !0
    })
}
), Pe, Fe, Q, Ie, Le, Re, ze, Be, Ve, He, $, Ue, We = e( () => {
    r(),
    D(),
    h(),
    i(),
    xe(),
    oe(),
    Pe = ne(G),
    Fe = `framer-4nEOT`,
    Q = {
        exsQBkRGK: `framer-v-1jmy2cj`
    },
    Ie = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: `tween`
    },
    Le = ({value: e, children: t}) => {
        let n = c(m)
          , r = e ?? n.transition
          , i = l( () => ({
            ...n,
            transition: r
        }), [JSON.stringify(r)]);
        return o(m.Provider, {
            value: i,
            children: t
        })
    }
    ,
    Re = g.create(d),
    ze = ({height: e, id: t, width: n, ...r}) => ({
        ...r
    }),
    Be = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    Ve = t(function(e, t) {
        let r = s(null)
          , i = t ?? r
          , a = n()
          , {activeLocale: c, setLocale: l} = k()
          , ee = O()
          , {style: f, className: m, layoutId: h, variant: v, ...y} = ze(e)
          , {baseVariant: x, classNames: C, clearLoadingGesture: w, gestureHandlers: E, gestureVariant: ne, isLoading: re, setGestureState: D, setVariant: ie, variants: A} = ae({
            defaultVariant: `exsQBkRGK`,
            ref: i,
            variant: v,
            variantClassNames: Q
        })
          , M = Be(e, A)
          , N = [j]
          , oe = T(Fe, ...N);
        return o(p, {
            id: h ?? a,
            children: o(Re, {
                animate: A,
                initial: !1,
                children: o(Le, {
                    value: Ie,
                    children: o(b, {
                        href: `https://framer.link/D4dc7gs`,
                        motionChild: !0,
                        nodeId: `exsQBkRGK`,
                        openInNewTab: !0,
                        scopeId: `VvtmXgo2A`,
                        children: u(g.a, {
                            ...y,
                            ...E,
                            className: `${T(oe, `framer-1jmy2cj`, m, C)} framer-59cl8p`,
                            "data-border": !0,
                            "data-framer-name": `Variant 1`,
                            layoutDependency: M,
                            layoutId: `exsQBkRGK`,
                            ref: i,
                            style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgb(213, 219, 230))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, var(--token-5e357ad1-f56a-4886-be0b-ea13c633f85c, rgba(184, 199, 217, 0.5)) 0%, var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255)) 43.4054054054054%)`,
                                borderBottomLeftRadius: 11,
                                borderBottomRightRadius: 11,
                                borderTopLeftRadius: 11,
                                borderTopRightRadius: 11,
                                boxShadow: `0px 0.6021873017743928px 1.083937143193907px -1.25px rgba(61, 61, 61, 0.72), 0px 2.288533303243457px 4.119359945838223px -2.5px rgba(61, 61, 61, 0.64), 0px 10px 18px -3.75px rgba(61, 61, 61, 0.25), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(0, 0, 0, 0.35), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(0, 0, 0, 0.34), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(0, 0, 0, 0.33), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(0, 0, 0, 0.3), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(0, 0, 0, 0.26), 0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)`,
                                ...f
                            },
                            children: [o(_, {
                                children: o(te, {
                                    className: `framer-1ex7xct-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: M,
                                    layoutId: `WLk7FKuvY-container`,
                                    nodeId: `WLk7FKuvY`,
                                    rendersWithMotion: !0,
                                    scopeId: `VvtmXgo2A`,
                                    children: o(G, {
                                        color: `var(--token-162cc6f1-5b31-4c9d-a955-3d5570248c76, rgb(29, 31, 19))`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: `Command`,
                                        id: `WLk7FKuvY`,
                                        layoutId: `WLk7FKuvY`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: {
                                            height: `100%`,
                                            width: `100%`
                                        },
                                        weight: `duotone`,
                                        width: `100%`
                                    })
                                })
                            }), o(S, {
                                __fromCanvasComponent: !0,
                                children: o(d, {
                                    children: o(g.p, {
                                        className: `framer-styles-preset-dmuy5d`,
                                        "data-styles-preset": `LC6TE31cM`,
                                        style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13)))`
                                        },
                                        children: `Edit Landio`
                                    })
                                }),
                                className: `framer-6sajjx`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `HlNS7Mk60`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    "--framer-paragraph-spacing": `0px`
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
    He = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-4nEOT.framer-59cl8p, .framer-4nEOT .framer-59cl8p { display: block; }`, `.framer-4nEOT.framer-1jmy2cj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 14px 8px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-4nEOT .framer-1ex7xct-container { flex: none; height: 18px; position: relative; width: 18px; }`, `.framer-4nEOT .framer-6sajjx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, ...M, `.framer-4nEOT[data-border="true"]::after, .framer-4nEOT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`],
    $ = A(Ve, He, `framer-4nEOT`),
    Ue = $,
    $.displayName = `Get template (can delete this)`,
    $.defaultProps = {
        height: 38,
        width: 124
    },
    C($, [{
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
    }, ...Pe, ...re(N)], {
        supportsExplicitInterCodegen: !0
    })
}
);
export {G as Icon, B as NullState, Ue as VvtmXgo2A_default, X as className, Y as css, I as dZkd7bSHY_default, U as defaultEvents, J as fonts, xe as init_Phosphor, We as init_VvtmXgo2A, L as init_dZkd7bSHY, V as init_icon_nullstate_js_0_7, Ne as init_rOlsEceWf, Se as init_rerWrmQ65, me as init_utils, Me as rOlsEceWf_default, H as useIconSelection};
//# sourceMappingURL=VvtmXgo2A._eTO9V-A.mjs.map
