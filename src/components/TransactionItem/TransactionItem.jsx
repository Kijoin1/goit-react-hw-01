const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
};

export default TransactionItem;
