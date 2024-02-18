export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_KEY || "http://localhost:5005/api/v1";
};
