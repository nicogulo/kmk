interface ThenProps extends React.PropsWithChildren<{}> {}

// eslint-disable-next-line react/jsx-no-useless-fragment
const Then: React.FC<ThenProps> = ({ children }: ThenProps) => <>{children}</>

export default Then
