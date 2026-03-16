import Skeleton from "../_component/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <Skeleton className="w-32 h-[34px] mb-4 mt-2"></Skeleton>
      <Skeleton className="w-[64px] h-[42px]"></Skeleton>
      <Skeleton className="w-full h-[270px] mb-5 mt-5"></Skeleton>
      <Skeleton className="w-full h-[24px] mb-2 mt-2"></Skeleton>
    </div>
  );
}
