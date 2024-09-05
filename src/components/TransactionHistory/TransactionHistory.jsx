import s from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.data}>
      <thead className={s.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.item}>
        {items.map((item) => (
          <tr key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
