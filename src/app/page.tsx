"use client";
import GenerateCode from "@/app/components/GenerateCode";
import ReviewCode from "@/app/components/ReviewCode";
import Result from "@/app/components/Result";
import Link from "next/link";
import { useState } from "react";

type ViewType = "generate" | "review" | "result";

export default function Home() {
  const [toggleView, setToggleView] = useState<ViewType>("generate");
  const [resultContent, setResultContent] = useState({
    code: "",
    explanation: "",
    language: "",
  } as ResultType);

  return (
    <main className='w-full min-h-screen'>
      <nav className='w-full h-[10vh] flex items-center justify-between bg-blue-100 px-4 sticky top-0 z-10'>
        <Link href='/' className='text-xl font-bold'>
          CodePilot
        </Link>

        {toggleView === "generate" && (
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer'
            onClick={() => setToggleView("review")}
          >
            Review Code
          </button>
        )}

        {toggleView === "review" && (
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer'
            onClick={() => setToggleView("result")}
          >
            Result
          </button>
        )}

        {toggleView === "result" && (
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer'
            onClick={() => setToggleView("generate")}
          >
            Generate Code
          </button>
        )}
      </nav>

      {toggleView === "generate" && (
        <GenerateCode
          setToggleView={setToggleView}
          setResultContent={setResultContent}
        />
      )}
      {toggleView === "review" && (
        <ReviewCode
          setToggleView={setToggleView}
          setResultContent={setResultContent}
        />
      )}
      {toggleView === "result" && <Result resultContent={resultContent} />}
    </main>
  );
}
