import type { TableData } from "../types/table";

export interface Contact extends TableData {
  fname: string;
  id: number;
  listToken: string;
  lname: string;
  mail: string;
  phone: string;
  status: "active" | "inactive";
  waphone: string;
}

export const mockContacts: Contact[] = [
  {
    id: 1,
    fname: "Alice",
    lname: "Johnson",
    mail: "alice.j@example.com",
    phone: "+1 555-0101",
    waphone: "+1 555-0101",
    status: "active",
    listToken: "tok_abc123",
  },
  {
    id: 2,
    fname: "Bob",
    lname: "Martinez",
    mail: "bob.m@example.com",
    phone: "+1 555-0102",
    waphone: "+1 555-0102",
    status: "active",
    listToken: "tok_def456",
  },
  {
    id: 3,
    fname: "Carol",
    lname: "Nguyen",
    mail: "carol.n@example.com",
    phone: "", // intentionally empty to test “n/a” render
    waphone: "",
    status: "inactive",
    listToken: "tok_ghi789",
  },
  {
    id: 4,
    fname: "David",
    lname: "Okafor",
    mail: "david.o@example.com",
    phone: "+1 555-0104",
    waphone: "+1 555-0104",
    status: "active",
    listToken: "tok_jkl012",
  },
  {
    id: 5,
    fname: "Emma",
    lname: "Garcia",
    mail: "emma.g@example.com",
    phone: "+1 555-0105",
    waphone: "+1 555-0105",
    status: "inactive",
    listToken: "tok_mno345",
  },
];
