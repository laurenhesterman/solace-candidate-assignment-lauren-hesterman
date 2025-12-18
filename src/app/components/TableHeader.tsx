interface TableHeaderProps {
  children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <th className="px-6 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
      {children}
    </th>
  );
}
