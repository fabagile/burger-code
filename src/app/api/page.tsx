import React from "react";

import data from "@/data/products.json";

const ApiPage = () => {
  return <code>{JSON.stringify(data, null, 2)}</code>;
};

export default ApiPage;
