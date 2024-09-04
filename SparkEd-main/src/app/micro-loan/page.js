'use client'

import Company from "@/components/Company";
import Student from "@/components/Student";

export default function MicroLoan() {
  const userRole = "company";
  return (
    <>
    {userRole === 'student'? <Student/>:<Company/>}
    </>
  );
}