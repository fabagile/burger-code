"use client";

import React from "react";

import { FaArrowLeft, } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BackToAdminPage = () => {
  const router = useRouter();
  return (

    <Link href="/api/all" className="btn btn-primary">
      <FaArrowLeft title="retour" />
    </Link>

  );
};

export default BackToAdminPage;
