interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}
export default function ListComponent<T>(props: ListProps<T>) {
  const { items, renderItem } = props;
  return items.map(renderItem);
}
