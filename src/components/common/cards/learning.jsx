import React from "react";

import s1 from '../../../assets/students/s1.png'
import s2 from '../../../assets/students/s2.png'
import s3 from '../../../assets/students/s3.png'
import s4 from '../../../assets/students/s4.png'
import s5 from '../../../assets/students/s5.png'
import s6 from '../../../assets/students/s6.png'
import s7 from '../../../assets/students/s7.png'

const LIME = "bg-[#C6F500]";

/* 1. Learning Progress */
export function LearningProgressCard({ value = 55 }) {
  return (
    <div className="w-50 bg-white p-4 rounded-xl text-left">
      <p className="text-sm text-neutral-800">Learning Progress</p>
      <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">
        {value}%
      </p>
      <div
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-100"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full ${LIME}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* 2. Course title + meta */
export function CourseTitleCard({
  title = "UI/UX Design",
  courses = 200,
  students = "1000+",
}) {
  return (
    <div className="bg-white px-4 py-3 rounded-xl text-left">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-.5 flex items-center gap-2 text-xs text-neutral-500 font-extralight">
        <span>{courses} Courses</span>
        <span className="h-1 w-1 rounded-full bg-neutral-400" />
        <span>{students} Students</span>
      </p>
    </div>
  );
}

/* 3. Happy Students */
const AVATAR_COLORS = [
  "bg-neutral-300",
  "bg-pink-300",
  "bg-rose-200",
  "bg-slate-400",
  "bg-amber-200",
  "bg-teal-300",
  "bg-stone-300",
];

export function HappyStudentsCard({
  rating = 4.5,
  reviews = 240,
  avatars = [], // optional: array of image URLs
  extra = "2K+",
  style="bg-white"
}) {
  const items = [s1,s2,s3,s4,s5,s6,s7];
  return (
    <div className={`w-fit ${style} p-3 rounded-xl text-left`}>
      <div className="flex items-baseline gap-2">
        <h3 className="text-lg font-semibold text-neutral-900">
          Happy Students
        </h3>
      </div>
      <p className="mt-0.5 flex items-center text-sm text-neutral-800">
        {rating}
        <span className="text-neutral-400">({reviews})</span>
        <svg
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-[#C6F500]"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
        </svg>
      </p>

      <div className="mt-1 flex items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className={`-ml-3.5 h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white first:ml-0 ${
              typeof item === "string" && item.startsWith("bg-") ? item : "bg-neutral-200"
            }`}
          >
            {typeof item === "string" && !item.startsWith("bg-") && (
              <img src={item} alt="" className="h-full w-full object-cover" />
            )}
          </div>
        ))}
        <div
          className={`-ml-3.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${LIME} text-sm font-bold text-neutral-900`}
        >
          {extra}
        </div>
      </div>
    </div>
  );
}

/* 4. Total Revenue */
export function TotalRevenueCard({
  title = "Total Revenue",
  period = "July 1-28",
  amount = "$120.29",
  change = "+12$",
  progress = 55,
}) {
  return (
    <div className="w-72 rounded-2xl bg-[#0F3DE8] py-4 px-5 text-white">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-xs text-white/70">{period}</p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-3xl font-bold tracking-tight">{amount}</p>
        <span
          className={`rounded-xl ${LIME} px-3 py-1 text-sm font-semibold text-neutral-900`}
        >
          {change}
        </span>
      </div>

      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white">
        <div
          className={`h-full rounded-full ${LIME}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

/* 5. Year to Date */
export function YearToDateCard({
  title = "Year to Date",
  year = "2023",
  amount = "$1,200.38",
  change = "+12$",
}) {
  return (
    <div className="w-44 rounded-2xl bg-[#0F3DE8] p-5 text-white mt-8">
      <p className="text-lg font-semibold leading-tight">{title}</p>
      <p className="text-xs text-white/70">{year}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight">{amount}</p>
      <span
        className={`mt-2 inline-block rounded-2xl ${LIME} px-3 py-1 text-sm font-md text-neutral-900`}
      >
        {change}
      </span>
    </div>
  );
}

/* Preview of all five */
export default function Cards() {
  return (
    <div className="flex min-h-screen flex-col items-start gap-8 bg-neutral-50 p-8">
      <LearningProgressCard />
      <CourseTitleCard />
      <HappyStudentsCard />
      <TotalRevenueCard />
      <YearToDateCard />
    </div>
  );
}