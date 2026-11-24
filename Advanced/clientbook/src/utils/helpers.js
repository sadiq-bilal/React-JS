export const money = (n) => "₹" + n.toLocaleString("en-IN");

export const daysFromNow = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};
