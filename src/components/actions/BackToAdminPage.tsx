"use client";

import React from "react";

import { FaArrowLeft, FaHouse } from "react-icons/fa6";

import Button from "./_Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BackToAdminPage = () => {
  const router = useRouter();
  return (
    <>
      <Link href="/api/all" className="btn btn-primary">
        <FaArrowLeft title="retour" />
      </Link>
    </>
  );
};

export default BackToAdminPage;
