export const ChangeSort = "CHANGE_SORT";
export function changeSort(sort) {
  return {
    sort,
    type: ChangeSort,
  };
}
