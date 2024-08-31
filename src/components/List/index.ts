import Coin from './Coin';

export type ListProps = {
    Coin: typeof Coin;
};

const List: ListProps = {
    Coin
};

List.Coin = Coin;

export default List;
