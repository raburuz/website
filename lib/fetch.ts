const api = process.env.NODE_ENV === "production" ? "https://arkift.com/api" : "http://localhost:3000/api";

/* Fetch */
export const apiClient = async (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response> => {
  return await fetch( api + input , init);
} 