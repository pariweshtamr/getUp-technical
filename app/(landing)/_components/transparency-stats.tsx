import { fetcher } from "@/app/lib/fetcher"
import { Stats } from "@/types"

export const TransparencyStats = async () => {
  // since all components in next js are server components by default we can directly fetch data from the specified api
  const stats = await fetcher(process.env.API_URL as string)

  return (
    <div className="w-full mt-8">
      <table className="table-auto w-full bg-bkg/90 shadow-md rounded-md text-txt">
        <thead className="bg-orange/20">
          <tr className="text-left h-14 text-sm md:text-lg">
            <th className="rounded-tl-md"></th>
            <th>Last Day</th>
            <th>Last 7 days</th>
            <th>Last 30 days</th>
            <th className="rounded-tr-md">Last 365 days</th>
          </tr>
        </thead>
        <tbody className="text-lg font-light">
          {stats.length > 0 &&
            stats?.map((item: Stats) => (
              <tr
                key={item.id}
                className="h-16 border-t border-t-orange/10 text-sm md:text-lg hover:bg-muted transition"
              >
                <td className="px-2 md:px-6 text-secondary">{item.name}</td>
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
