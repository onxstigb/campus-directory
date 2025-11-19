"use client";

import StudentCard from "@/app/components/StudentCard";
import { useTime } from "@/app/hooks/useTime";

const studentData = [
  { name: "Zoie", major: "Philanthropic Leadership", year: "Senior" },
  { name: "Brandon", major: "Health Sciences Pre-PA Track", year: "Junior" },
  { name: "Makayla", major: "Global & International Studies", year: "Junior" },
];

export default function StudentListPage() {
  const { time } = useTime();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Directory</h1>
      <p className="mb-4">Time: {time}</p>
      <div className="grid gap-4">
        {studentData.map((s, i) => (
          <StudentCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}