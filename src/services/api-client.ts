/**
 * Future API service layer.
 * Centralizes fetch logic, error handling, and typed responses.
 */

type FetchOptions = RequestInit & {
  params?: Record<string, string>;
};

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { params, ...init } = options;
  const url = new URL(endpoint, process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
    ...init,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new ApiError(response.statusText, response.status, data);
  }

  return response.json() as Promise<T>;
}
