export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={"bg-gray-300 rounded animate-pulse " + className}></div>
  );
}
