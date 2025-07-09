export function getPageRange(current: number, total: number): number[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const range = [1];
  if (current > 3) range.push(-1); // -1 代表 Ellipsis

  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) range.push(i);
  }

  if (current < total - 2) range.push(-1);
  range.push(total);
  return range;
}
