// import { withAuthClient } from '@/hoc/withAuth';
import { withNonAuthClient } from '@/hoc/withNonAuth';
import Profile from '@/modules/Profile';

export default withNonAuthClient(Profile);
