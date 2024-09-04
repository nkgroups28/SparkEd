'use client'

import Company from "@/components/Company";
import Student from "@/components/Student";

export default function MicroScholarship() {
    // const userRole = "Student";
    let userRole = "student";
  return (
    <>
    {userRole === "student"?<Student/>:<Company/>}
    </>
  );
}