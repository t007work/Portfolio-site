"use client";
import React from "react";
import { awards } from "@/lib/content";

export default function CredentialsGrid() {
  // Split awards into chunks of 4 per row
  const perRow = 4;
  const rows = [];
  for (let i = 0; i < awards.length; i += perRow) {
    rows.push(awards.slice(i, i + perRow));
  }

  return (
    <div className="flex flex-col gap-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-6 ${
            row.length < perRow
              ? `grid-cols-${row.length} justify-center place-items-center`
              : "grid-cols-4"
          }`}
        >
          {row.map((cred) => (
            <div
              key={cred}
              className="p-6 w-60 rounded-2xl border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 text-center"
            >
              <div className="text-lg font-medium">{cred}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
