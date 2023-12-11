"use client"
import { Skeleton } from "@/app/ui/skeleton"
import { Stats } from "@/types"
import { useEffect, useState } from "react"

// This component has been used as a client component for the purpose of displaying table skeleton to mimic a loading state

export const TransparencyStats = ({ data }: { data: Stats[] }) => {
  const [stats, setStats] = useState<Stats[] | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // faked extended time to get data for the purpose of showing table skeleton as a loading state
    setTimeout(() => {
      setStats(data)
    }, 1500)

    // preventing hydration error
    setIsMounted(true)
  }, [data])

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full mt-8">
      <table className="table-auto w-full bg-bkg/90 shadow-md rounded-md text-txt">
        <thead className="bg-orange/70">
          <tr className="text-left h-14 text-sm md:text-lg">
            <th className="rounded-tl-md px-2 md:px-6 lg:w-[380px]">Title</th>
            <th>Last Day</th>
            <th>Last 7 days</th>
            <th>Last 30 days</th>
            <th className="rounded-tr-md">Last 365 days</th>
          </tr>
        </thead>
        {!stats ? (
          // loading skeleton components to mimic loading state
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <tr key={n} className="h-16 w-full p-2">
                <td className="lg:w-[380px] h-16">
                  <Skeleton className="lg:ml-6 md:ml-2 md:w-48 w-full h-6" />
                </td>
                <td className="h-16">
                  <Skeleton className="md:w-16 w-full h-6" />
                </td>
                <td className="h-16">
                  <Skeleton className="md:w-24 w-full h-6" />
                </td>
                <td className="h-16">
                  <Skeleton className="md:w-28 w-full h-6" />
                </td>
                <td className="h-16">
                  <Skeleton className="md:w-32 w-full h-6" />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          // loading data once setTimeout time runs out
          <tbody className="text-lg font-light">
            {stats?.map((item: Stats, rowIndex) => (
              <tr
                key={item.id}
                className="h-16 border-t border-t-orange/10 text-sm md:text-lg hover:bg-muted transition"
              >
                {/* Only the second and third row of body rows need a '$' sign before the figures */}
                {Object.entries(item).map(
                  ([key, value]: [string, string | number | Date], colIndex) =>
                    key !== "id" &&
                    key !== "created_at" && (
                      <td
                        key={`${item.id}-${key}`}
                        className={`${
                          colIndex === 1 && "px-2 md:px-6 text-secondary"
                        } `}
                      >
                        {(rowIndex === 1 || rowIndex === 2) && colIndex > 1
                          ? `$${value}`
                          : String(value)}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}
