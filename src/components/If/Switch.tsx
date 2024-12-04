import React, { ReactElement } from "react"

import Case from "./Case"
import Default from "./Default"

interface SwitchProps extends React.PropsWithChildren<{}> {}

const Switch: React.FC<SwitchProps> = ({ children }) => {
    let matchingCase: ReactElement | undefined
    let defaultCase: ReactElement | undefined

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) {
            return
        }

        if (!matchingCase && child.type === Case) {
            const { condition } = child.props

            const conditionResult = Boolean(condition)

            if (conditionResult) {
                matchingCase = child
            }
        } else if (!defaultCase && child.type === Default) {
            defaultCase = child
        }
    })

    return matchingCase ?? defaultCase ?? null
}

export default Switch
