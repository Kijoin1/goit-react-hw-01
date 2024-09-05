import TransactionItem from '../TransactionItem/TransactionItem'
const TransactionHistory = ({items}) => {
  return (
    <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{items.map((item)=>{
<div key={item.id}>
<TransactionItem
    type={item.type}
    amount={item.amount}
    currency={item.currency}
/>
</div>
    })}
  </tbody>
</table>
  )
}

export default TransactionHistory