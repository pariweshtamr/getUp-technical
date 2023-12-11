import { fetcher } from "@/app/lib/fetcher"
import { Stats } from "@/types"

export const TransparencyStats = async () => {
  // since all components in next js are server components by default we can directly fetch data from the specified api
  const stats = await fetcher("https://www.getup.org.au/api/transparency_stats")

  return (
    <div className="w-full mt-6">
      <table className="w-full bg-white/90 shadow-md rounded-md">
        <thead className="text-slate-700 bg-primary/20">
          <tr className="text-left h-14">
            <th className="rounded-tl-md"></th>
            <th>Last Day</th>
            <th>Last 7 days</th>
            <th>Last 30 days</th>
            <th className="rounded-tr-md">Last 365 days</th>
          </tr>
        </thead>
        <tbody className="text-lg font-light">
          {stats.map((item: Stats) => (
            <tr key={item.id} className="h-16">
              <td className="px-6 text-secondary">{item.name}</td>
              <td>{item.day}</td>
              <td>{item.week}</td>
              <td>{item.month}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
