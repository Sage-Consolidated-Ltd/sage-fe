import React from "react";
import type { TableItem } from "../store/tablesStore";
import DraggableTableManual from "./DraggableTable";

interface User extends TableItem {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const ExamplePage: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      role: "User",
      status: "Active",
    },
  ]);

  const columns = [
    { key: "name" as const, header: "Name", width: "w-1/4" },
    { key: "email" as const, header: "Email", width: "w-1/4" },
    { key: "role" as const, header: "Role", width: "w-1/4" },
    {
      key: "status" as const,
      header: "Status",
      width: "w-1/4",
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const handleReorder = (reorderedUsers: User[]) => {
    setUsers(reorderedUsers);
    console.log("New order:", reorderedUsers);
    // You can also save to your backend here
  };

  return (
    <div>
      <DraggableTableManual<User>
        columns={columns}
        data={users}
        onReorder={handleReorder}
        className=""
      />

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="font-semibold mb-2">Current Order:</h2>
        <ul className="list-disc pl-5">
          {users.map((user, index) => (
            <li key={user.id} className="text-sm text-gray-700">
              {index + 1}. {user.name} - {user.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExamplePage;
