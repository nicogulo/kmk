// import { withAuthClient } from '@/hoc/withAuth';
import { withNonAuthClient } from '@/hoc/withNonAuth';
import Kyc from '@/modules/Profile/Kyc';

export default withNonAuthClient(Kyc);
