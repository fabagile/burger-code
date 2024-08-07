"use client";

import React, { ReactNode } from "react";

type BtnGroupType = { children: ReactNode; btnSize?: string };

const Actions = ({ children, btnSize }: BtnGroupType) => {
  return <>
  {/* <div className={btnSize && `btn-group-${btnSize}`}>{children}</div> */}
  <div className="flex items-center">
    {children}
    {/* <button type="button" class="w-full border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2">
        Left
    </button>
    <button type="button" class="w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2">
        Center
    </button>
    <button type="button" class="w-full border-t border-b border-r text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2">
        Right
    </button> */}
</div>
  </>;
};

export default Actions;
