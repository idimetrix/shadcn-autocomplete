# Autocomplete Demo

Here's another example of how to use shadcn/ui to create a custom autocomplete component.

```tsx
function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["data", searchValue],
    queryFn: () => getList(searchValue),
  });

  return (
    <AutoComplete
      selectedValue={selectedValue}
      onSelectedValueChange={setSelectedValue}
      searchValue={searchValue}
      onSearchValueChange={setSearchValue}
      items={data ?? []}
      // Optional props
      isLoading={isLoading}
      emptyMessage="No items found."
      placeholder="Search items..."
    />
  );
}
```
