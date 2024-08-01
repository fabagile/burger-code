"use client";

import React, { ReactNode } from "react";

type BtnGroupType = { children: ReactNode; btnSize?: string };

const Actions = ({ children, btnSize }: BtnGroupType) => {
  return <div className={btnSize && `btn-group-${btnSize}`}>{children}</div>;
};

export default Actions;
