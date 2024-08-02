'use client'

import React from "react";

import data from "@/data/products.json";
import { redirect } from "next/navigation";

const ApiPage = () => {
  redirect('/api/all')
  // return <code>{JSON.stringify(data, null, 2)}</code>;
};

export default ApiPage;
