"use client";
import React from "react";
import { academics } from "@/lib/content";

export default function AcademicsGrid() {
  const polySubjects = academics[0].bullets
    .filter((b) => b.includes(":"))
    .map((b) => {
      const [subject, grade] = b.split(":").map((s) => s.trim());
      return { subject, grade };
    });

  const perRow = 4;
  const rows = [];
  for (let i = 0; i < polySubjects.length; i += perRow) {
    rows.push(polySubjects.slice(i, i + perRow));
  }

  return (
    <div className="flex flex-col gap-8">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-8 ${
            row.length < perRow
              ? `grid-cols-${row.length} justify-center place-items-center`
              : "grid-cols-4"
          }`}
        >
          {row.map((item) => (
            <div
              key={item.subject}
              className="w-60 rounded-xl bg-gray-900 p-6 shadow-lg hover:shadow-purple-500/40 transition"
            >
              <div
                className={`font-bold ${
                  item.grade.length > 9
                    ? "text-2xl md:text-3xl"
                    : item.grade.length > 6
                    ? "text-3xl md:text-4xl"
                    : "text-4xl md:text-5xl"
                } bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text text-center`}
              >
                {item.grade}
              </div>
              <div className="mt-2 text-center text-white font-medium">
                {item.subject}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
