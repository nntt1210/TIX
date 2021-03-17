import React from "react";
import UserForm from "../UserForm";
import UserTable from "../UserTable";

export default function UserManagement() {
  console.log("UserManagement");
  return (
    <>
      <UserForm />
      <UserTable />
    </>
  );
}
