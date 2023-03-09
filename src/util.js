export default function formatCurrency(num) {
  return 'Php ' + Number(num.toFixed(1)).toLocaleString() + ' ';
}
