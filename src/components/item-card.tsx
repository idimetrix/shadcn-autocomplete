import { Skeleton } from "./ui/skeleton";
import { Item } from "@/types";

type Props = {
  isLoading: boolean;
  item?: Item | null;
};

export const ItemCard = ({ item, isLoading }: Props) => {
  if (!item || !isLoading) return null;

  return (
    <div className="flex items-center gap-2">
      {isLoading ? (
        <Skeleton className="size-20" />
      ) : (
        <img
          className="size-20 size-min-20"
          src={item?.thumbnailUrl}
          alt={item.title}
        />
      )}
      <div className="flex flex-col gap-1">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </>
        ) : (
          <>
            <h3 className="capitalize font-semibold">{item?.title}</h3>
            <p>Id: {item.id}</p>
            <p>Album: {item.albumId}</p>
          </>
        )}
      </div>
    </div>
  );
};
