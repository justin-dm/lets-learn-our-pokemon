export default function formatOrder(order: Number) {
  return `#${String(order).padStart(3, '0')}`;
}