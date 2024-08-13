import React from "react"
import dynamic from "next/dynamic"

const lazy = (fn: () => Promise<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>) => {
    if (typeof window === "undefined") {
        return React.lazy(fn)
    }

    return dynamic(() => fn().then((module) => ({ default: module.default })), {
        ssr: false
    })
}

const IconComponents = {
    AlertFill: lazy(() => import("./AlertFill")),
    AlertTriangleFilled: lazy(() => import("./AlertTriangleFilled")),
    ArrowDownFilled: lazy(() => import("./ArrowDownFilled")),
    ArrowLeft: lazy(() => import("./ArrowLeft")),
    ArrowUp: lazy(() => import("./ArrowUp")),
    AudUsd: lazy(() => import("./AudUsd")),
    Bell: lazy(() => import("./Bell")),
    Chat: lazy(() => import("./Chat")),
    ChartGreen: lazy(() => import("./ChartGreen")),
    Checklist: lazy(() => import("./Checklist")),
    ChecklistCircle: lazy(() => import("./ChecklistCircle")),
    ChevronUp: lazy(() => import("./ChevronUp")),
    Copy: lazy(() => import("./Copy")),
    Dollar: lazy(() => import("./Dollar")),
    Download: lazy(() => import("./Download")),
    DownloadFilled: lazy(() => import("./DownloadFilled")),
    EmailIllustration: lazy(() => import("./EmailIllustration")),
    EurGbp: lazy(() => import("./EurGbp")),
    EurUsd: lazy(() => import("./EurUsd")),
    EyeHide: lazy(() => import("./EyeHide")),
    EyeShow: lazy(() => import("./EyeShow")),
    GbpUsd: lazy(() => import("./GbpUsd")),
    Gold: lazy(() => import("./Gold")),
    Home: lazy(() => import("./Home")),
    HomeFilled: lazy(() => import("./HomeFilled")),
    Interuption: lazy(() => import("./Interuption")),
    KeyIllustration: lazy(() => import("./KeyIllustration")),
    Logo: lazy(() => import("./Logo")),
    Logout: lazy(() => import("./Logout")),
    Mail: lazy(() => import("./Mail")),
    MinusCircle: lazy(() => import("./MinusCircle")),
    Menu: lazy(() => import("./Menu")),
    Oil: lazy(() => import("./Oil")),
    Pencil: lazy(() => import("./Pencil")),
    Phone: lazy(() => import("./Phone")),
    PlusCircle: lazy(() => import("./PlusCircle")),
    Question: lazy(() => import("./Question")),
    Stack: lazy(() => import("./Stack")),
    StackFilled: lazy(() => import("./StackFilled")),
    SquareFilled: lazy(() => import("./SquareFilled")),
    Square: lazy(() => import("./Square")),
    TouchHand: lazy(() => import("./TouchHand")),
    Trash: lazy(() => import("./Trash")),
    Upload: lazy(() => import("./Upload")),
    User: lazy(() => import("./User")),
    UserCircle: lazy(() => import("./UserCircle")),
    UserFilled: lazy(() => import("./UserFilled")),
    UsdCad: lazy(() => import("./UsdCad")),
    Wallet: lazy(() => import("./Wallet")),
    WalletFilled: lazy(() => import("./WalletFilled")),
    XCircle: lazy(() => import("./XCircle")),
    XCloseSmall: lazy(() => import("./XCloseSmall")),
    XClose: lazy(() => import("./XClose"))
}

export default IconComponents