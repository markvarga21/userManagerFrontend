import React from "react";

const TableRow = ({
  id,
  userImageUrl,
  name,
  email,
  birthDate,
  placeOfBirth,
  nationality,
  gender,
  address,
  phoneNumber,
  handleEditUser,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="w-10 h-10 rounded-full" src={userImageUrl} alt="Jese" />
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{birthDate}</td>
      <td className="px-6 py-4">{placeOfBirth}</td>
      <td className="px-6 py-4">{nationality}</td>
      <td className="px-6 py-4">{gender}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">{phoneNumber}</td>
      <td className="px-6 py-4">
        <a
          id={id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          onClick={handleEditUser}
        >
          Edit user
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
