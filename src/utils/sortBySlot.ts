type sortBySlotParam = {
  slot: number
}

export default function sortBySlot(a: sortBySlotParam, b: sortBySlotParam): number {
  if (a.slot < b.slot) return -1;
  if (a.slot > b.slot) return 1;
  return 0;
}
