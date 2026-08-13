export function editTitle(
  title: string,
  newTitle: string
): string {
  const trimmedTitle = newTitle.trim();

  if (!trimmedTitle) {
    return title;
  }

  return trimmedTitle;
}
