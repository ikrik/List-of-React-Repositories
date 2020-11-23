export interface TableColumnDescriptor<T> {
  label: string
  render: (props: T) => React.ReactNode
}
