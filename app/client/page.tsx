"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function ClientPage() {
  const [isMounted, setIsMounted] = useState(false);

  // for hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();

  if (!isMounted) {
    return null;
  }
  return (
    <main className="flex px-3 flex-col items-center justify-center">
      <h1 className="my-5 text-2xl text-center font-bold">
        Getting and Setting Cookies in Next.js (Client Component)
      </h1>

      <div>
        <h2 className="mt-10 text-center text-3xl font-semibold">Set Cookie</h2>

        <button className="bg-blue-600 rounded-md px-6 py-2  mt-5 text-white">
          Set Cookie
        </button>
      </div>
    </main>
  );
}
