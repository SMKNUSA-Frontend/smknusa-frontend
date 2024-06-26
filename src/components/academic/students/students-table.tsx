import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import PaginationTable from "../../feature/pagination-table";
import { Student } from "@/services/api/useQueries/useResidents";

type StudentsTableProps = {
  studentsData?: Student[] | null;
  handleChangeTable: () => void;
};
const StudentsTable = ({
  studentsData,
  handleChangeTable,
}: StudentsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentStudentsData = studentsData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative flex flex-col  overflow-x-auto  lg:rounded-lg border w-full lg:w-[84%]">
      <div className="flex  items-center justify-between mx-4 lg:mx-12 gap-4">
        <div className="flex w-full  items-center justify-between lg:justify-start  gap-4">
          <h1 className="text-sm font-bold text-blue-base  lg:w-fit  my-6">
            Peserta Didik
          </h1>
          <p className="text-xs bg-amber-100 bg-opacity-70 border-yellow px-3 py-0.5 border rounded-full text-yellow-500">
            {studentsData?.length + " " + "orang"}
          </p>
        </div>
        <button onClick={() => handleChangeTable()}>
          <Image
            src={"/assets/icon/candle.svg"}
            alt="candle"
            width={20}
            height={20}
            className="w-6 h-6"
          />
        </button>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr className="border w-full lg:table-row hidden ">
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-yellow  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 "
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              NISN
            </th>

            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Kelas
            </th>
            <th scope="col" className="px-6 py-3">
              Alamat
            </th>
            <th scope="col" className="px-6 py-3">
              TTL
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis Kelamin
            </th>
          </tr>
        </thead>
        <tbody>
          {currentStudentsData?.map((student, index) => (
            <React.Fragment key={index}>
              <tr className="bg-white border flex flex-col md:table-row">
                <td className="w-4  px-6 py-4 lg:p-4 flex items-center md:table-cell">
                  <div className="flex items-center gap-4">
                    <input
                      id={`checkbox-table-${index}`}
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-yellow ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2"
                    />
                    <label
                      htmlFor={`checkbox-table-${index}`}
                      className="block lg:hidden "
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 flex gap-2 items-center md:table-cell lg:justify-start  justify-between ">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">
                    NISN
                  </span>

                  <p>{student.nisn}</p>
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center truncate lg:max-w-[12rem]">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">
                    Name
                  </span>
                  <span className="truncate max-w-[10rem] ">
                    {student.nama}
                  </span>
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">
                    Kelas
                  </span>
                  <span className="lg:w-full text-center text-xs">
                    <p className=" bg-amber-100 bg-opacity-70 border-yellow p-1 border rounded-full text-yellow-500">
                      {student.kelas}
                    </p>
                  </span>
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center truncate lg:max-w-[10rem]">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">
                    Alamat
                  </span>
                  <span className="truncate max-w-[10rem]">
                    {student.alamat}
                  </span>
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">
                    TTL
                  </span>
                  {student.tempat_lahir}, {student.tanggal_lahir}
                </td>
                <td className="px-6 py-4 md:table-cell flex gap-2 justify-between items-center">
                  <span className="block lg:hidden text-sm font-bold text-blue-base">
                    Jenis Kelamin
                  </span>
                  {student.gender === "L" ? "Laki-laki" : "Perempuan"}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <PaginationTable
        totalPosts={studentsData?.length}
        postsPerPage={postsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default StudentsTable;
