export const datePerse = (date: string): string => {
  const result = new Date(date);
  return result.toLocaleDateString("ru-RU");
};