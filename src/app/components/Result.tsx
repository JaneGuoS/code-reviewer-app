import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import Editor from "@monaco-editor/react";

export default function Result({
  resultContent,
}: {
  resultContent: { code: string; explanation: string; language: string };
}) {
  return (
    <main className='w-full min-h-screen p-4'>
      <div className=' w-full mx-auto border-[1px] border-blue-400 mb-2'>
        <Editor
          height='60vh'
          defaultLanguage={resultContent.language}
          theme='vs-dark'
          defaultValue={resultContent.code}
        />
      </div>

      <div className='min-h-[90vh] p-4 markdown-plain'>
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {resultContent.explanation}
        </Markdown>
      </div>
    </main>
  );
}
