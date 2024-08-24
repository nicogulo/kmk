import React from "react"
import dynamic from "next/dynamic"

const lazy = (fn: () => Promise<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>) => {
    return dynamic(() => fn().then((module) => ({ default: module.default })), {
        ssr: true
    })
}

export default lazy
