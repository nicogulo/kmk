interface DefaultProps extends React.PropsWithChildren<{}> {}

// eslint-disable-next-line react/jsx-no-useless-fragment
const Default: React.FC<DefaultProps> = ({ children }: DefaultProps) => <>{children}</>

export default Default
