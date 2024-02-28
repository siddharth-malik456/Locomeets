import React from "react";

export default function ServiceImage({ url }) {
  return (
    <div className="flex justify-center bg-slate-100">
      <img src={url} alt="" className="h-96 " />
    </div>
  );
}
