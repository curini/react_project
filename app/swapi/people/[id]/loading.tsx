import { Person, attributeToShow } from "../../_constant/person";
import Skeleton from "@/app/_component/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <Skeleton className="w-[400px] h-[30px] mb-4 mt-2"></Skeleton>
      {attributeToShow.map((value: keyof Person) => (
        <Skeleton key={value} className="w-[100px] mt-2 h-6"></Skeleton>
      ))}
    </div>
  );
}
