type ResultType = {
    code: string;
    explanation: string;
    language: string;
  };
  
  type CodeProps = {
    setToggleView: Dispatch<SetStateAction<"generate" | "review" | "result">>;
    setResultContent: Dispatch<
      SetStateAction<{ code: string; explanation: string; language: string }>
    >;
  };
  