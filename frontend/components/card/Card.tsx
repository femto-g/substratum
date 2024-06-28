export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-xl bg-white shadow-md p-4">{children}</div>
  );
}
