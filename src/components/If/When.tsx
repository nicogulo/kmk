interface WhenProps extends React.PropsWithChildren<{}> {
    condition: IfCondition
}

const When: React.FC<WhenProps> = ({ condition, children }: WhenProps) => {
    const conditionResult = Boolean(condition)

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return conditionResult ? <>{children}</> : null
}

export default When
