import { NextResponse } from "next/server";
import { TableDatas } from "../../constants/TableDemmydata";
import { TableData } from "../../types/TableData";
export async function GET(request: Request, context: any) {
  console.log("Api call", context);
  console.log("Api call", TableDatas.length);

  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  console.log("🚀 ~ GET ~ page:", page)
  const pageSize = searchParams.get("pageSize") || 10;
  console.log("🚀 ~ GET ~ pageSize:", pageSize)
  const search = searchParams.get("search") || "";
  console.log("🚀 ~ GET ~ search:", search)

  let data: TableData[] = TableDatas;

  if (search && search.trim() !== "") {
    data = data.filter((value) =>
      value.payer.toLowerCase().includes(search.toLowerCase())
    );
  }

  const totalDocuments = TableDatas.length;
  console.log("🚀 ~ GET ~ totalDocuments:", totalDocuments)
  const totalPages = Math.ceil(totalDocuments / Number(pageSize));
  const skip = (Number(page) - 1) * Number(pageSize);

  const paginatedData = data.slice(skip, skip + Number(pageSize));


  const response = {
    totalDocuments,
    totalPages,
    currentPage: Number(page),
    pageSize: Number(pageSize),
    data: paginatedData,
  };

  return NextResponse.json(response);
}
