/* eslint-disable react/jsx-no-useless-fragment */
import React, { ReactElement } from "react"

import Else from "./Else"

interface IfProps extends React.PropsWithChildren<{}> {
    condition: IfCondition
}

const If: React.FC<IfProps> = ({ condition, children }: IfProps) => {
    const conditionResult = Boolean(condition)

    return (
        <>
            {(React.Children.toArray(children) as ReactElement[]).find((c) => (c.type !== Else) !== !conditionResult) ||
                null}
        </>
    )
}

export default If
