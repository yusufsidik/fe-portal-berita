export function truncate(text: string = "No text", maxLength: number) : string {
  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
}