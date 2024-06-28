export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "border rounded-xl bg-white shadow-md p-4 flex flex-col gap-5 " +
        className
      }
    >
      {children}
    </div>
  );
}
