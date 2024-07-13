"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-white text-center bg-blue-800 h-20 text-xl p-4">
        This is Nextjs framework
      </h1>

      <button className="border-2 bg-slate-700 text-white text-xl p-3">Increment</button>
      <button className="border-2 bg-slate-700 text-white text-xl p-3">Decrement</button>
    </>
  );
}
