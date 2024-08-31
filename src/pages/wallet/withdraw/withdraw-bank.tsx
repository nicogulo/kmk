import { withAuthClient } from '@/hoc/withAuth';
import BankWithdraw from '@/modules/Wallet/components/BankWithdraw';

export default withAuthClient(BankWithdraw);
