"use client";

import { useEffect, useState } from "react";


import { newCategories } from "@/store";
import List from "@/components/products/List";
import { capFirstLetter } from "@/utils/transform";

export default function ProductsPage() {
  const [titles, setTitles] = useState([])
  // const titles = [newCategories.map(cat=>capFirstLetter(cat))]
  // useEffect(()=> setTitles(newCategories.map(cat=>capFirstLetter(cat))),[])
  
  // console.log(titles)

  return  (
    <>
      
      <List />
    </>
  );
}
