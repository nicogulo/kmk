interface CaseProps extends React.PropsWithChildren<{}> {
    // eslint-disable-next-line react/no-unused-prop-types
    condition: IfCondition;
}

// eslint-disable-next-line react/jsx-no-useless-fragment
const Case: React.FC<CaseProps> = ({ children }: CaseProps) => <>{children}</>;

export default Case;
