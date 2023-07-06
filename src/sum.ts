export function sum(numbers: number[]) {
  const total = numbers.reduce((acc, current) => acc + current, 0);
  return total;
}
