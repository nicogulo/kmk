interface ElseProps extends React.PropsWithChildren<{}> {}

// eslint-disable-next-line react/jsx-no-useless-fragment
const Else: React.FC<ElseProps> = ({ children }: ElseProps) => <>{children}</>

export default Else
