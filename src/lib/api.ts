import { Item } from "@/types";

export async function getList(filter: string): Promise<Item[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);

  if (response.ok) {
    const items: Item[] = (await response.json()) as Item[];

    const lowerFilter = filter.toLocaleLowerCase();

    return items
      .filter(
        ({ title }) =>
          !lowerFilter || title.toLocaleLowerCase().includes(lowerFilter),
      )
      .slice(0, 20);
  }

  return [];
}

export async function getDetail(id: string): Promise<Item | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
  );

  if (response.ok) return response.json();

  return null;
}
