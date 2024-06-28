export default function CardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-5">{children}</div>;
}
