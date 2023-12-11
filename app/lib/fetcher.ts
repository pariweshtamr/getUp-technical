export const fetcher = async (
  url: string,
  method: string = "GET",
  data?: any
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }
  const options: RequestInit = {
    method,
    headers,
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`Could not fetch data! Status:${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("[FETCH ERROR]", error)
    throw error
  }
}
