export function formatDate(date: Date): string {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const suffix = getDaySuffix(day);
  const month = formattedDate.toLocaleString("default", { month: "short" });
  const year = formattedDate.getFullYear().toString().slice(-2);

  return `${day}${suffix} ${month} ${year}`;
}

export function formatCompleteDate(date: Date): string {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const suffix = getDaySuffix(day);
  const month = formattedDate.toLocaleString("default", { month: "long" });
  const year = formattedDate.getFullYear().toString();

  return `${day}${suffix} ${month} ${year}`;
}

export function getDaySuffix(day: number): string {
  if (day === 1 || day === 21 || day === 31) {
    return "st";
  } else if (day === 2 || day === 22) {
    return "nd";
  } else if (day === 3 || day === 23) {
    return "rd";
  } else {
    return "th";
  }
}
