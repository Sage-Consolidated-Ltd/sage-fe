import React from "react";
import type { ColumnDef, TableData } from "../types/table";
import Table from "../shared/Table";
import type { Contact } from "../utils/testData";

interface ContactsTableProps {
  contacts: Contact[];
  onEdit?: (contact: Contact) => void;
  onDelete?: (contact: Contact) => void;
  isLoading?: boolean; // Add this
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  contacts,
  onEdit,
  onDelete,
  isLoading = false, // Add default value
}) => {
  const columns: ColumnDef<Contact>[] = [
    {
      key: "name",
      header: "Name",
      sortable: true,
      cell: (item) => (
        <div className="text-text-primary">
          {item.fname} {item.lname}
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
      sortable: true,
      cell: (item) => <div className="text-text-primary">{item.mail}</div>,
    },
    {
      key: "phone",
      header: "Phone",
      sortable: true,
      cell: (item) => (
        <div className="text-text-primary">{item.phone || "n/a"}</div>
      ),
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      cell: (item) => (
        <span
          className={`inline-flex items-center px-2 py-1 rounded-lg text-sm ${
            item.status === "active"
              ? "bg-success-50 text-success border border-success"
              : "bg-warning-50 text-warning border border-warning"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "dateJoined",
      header: "Date Joined",
      sortable: true,
      cell: (item) => <div className="text-text-primary">n/a</div>,
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(item);
            }}
            className="text-interactive cursor-pointer"
          >
            edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(item);
            }}
            className="text-danger cursor-pointer"
          >
            delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table<Contact>
      data={contacts}
      columns={columns}
      pageSize={10}
      showHeader={true}
      showFooter={true}
      showCheckboxes={false}
      onRowClick={(contact) => console.log("Clicked:", contact)}
      className="bg-white rounded-3xl tab-shadow py-6"
      isLoading={isLoading}
      skeletonRows={contacts.length > 0 ? contacts.length : 5}
    />
  );
};

export default ContactsTable;
