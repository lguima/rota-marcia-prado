export function getPaginationRange(
  currentPage: number,
  lastPage: number,
  rangeDelta: number,
) {
  const range = []
  const delta = rangeDelta

  for (let i = 1; i <= lastPage; i++) {
    // Always include first page, last page, and pages around current page
    if (
      i === 1 ||
      i === lastPage ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i)
    } else if (range[range.length - 1] !== '...') {
      // Add ellipsis if it is not already the last item
      range.push('...')
    }
  }

  return range
}
