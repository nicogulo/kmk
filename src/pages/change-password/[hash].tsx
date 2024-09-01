import ChangePassword from '@/modules/ChangePassword';

export const getStaticPaths = async () => ({
    paths: [],
    fallback: 'blocking'
});

export const getStaticProps = async () => ({
    props: {}
});

export default ChangePassword;
