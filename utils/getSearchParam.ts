export const getQuery = (
  url: string
): { search: string; page: number; pageSize: number } => {
  const searchParam = new URLSearchParams(url);
  const search = searchParam.get("sr") as string;
  const page = searchParam.get("pg") as unknown as number;
  console.log("🚀 ~ page:", page)
  const pageSize = searchParam.get("pz") as unknown as number;
  return { search, page, pageSize };
};
