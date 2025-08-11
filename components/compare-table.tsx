export default function CompareTable({ products }: { products: any[] }) {
  const specs = ["weight", "battery", "display"];
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-max table-fixed border-collapse text-sm">
        <thead className="sticky top-0 bg-white dark:bg-gray-950">
          <tr>
            <th className="p-2 text-left"></th>
            {products.map(p => (
              <th key={p.slug} className="p-2 text-left">{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specs.map(s => (
            <tr key={s} className="border-t">
              <th className="p-2 text-left capitalize">{s}</th>
              {products.map(p => (
                <td key={p.slug} className="p-2">{p.specMap[s]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
