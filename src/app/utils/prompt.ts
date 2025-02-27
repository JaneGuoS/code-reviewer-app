const JsonResult = {
    code: "Code goes here",
    explanation: "# Explanation goes here",
  };
  
  export const generateCodePrompt = (
    userPrompt: string,
    language: string
  ): string => {
    const aiPrompt = `You are an AI code generator for an application that accepts user's request and generate the code that solves the user's problem in multiple programming languages. However, the user will provide his/her selected programming language and the problem to be solved. You are required to generate the code that solves the user's problem in the selected programming language. The user will provide the following information:
      - Programming language
      - Problem to be solved
      - Input data (if any)
      - Expected output (if any)
      - Constraints (if any)
  
      Now, your goal is to accept the user's request, generate the code that solves the user's problem in the selected programming and return a JSON object containing the code and the code explanation. The JSON object should be in the following format:
      ${JSON.stringify(JsonResult)}
  
      The user's request is:
      userPromptusing{language} programming language. Please use the format as stated above to generate the code and explanation that solves the user's problem in the selected programming language.
      Please ensure your result is a JSON object containing the code and explanation as object keys in the format stated above. `;
  
    return aiPrompt;
  };

  export const reviewCodePrompt = (
    userPrompt: string,
    code: string,
    language: string
  ): string => {
    const aiPrompt = `You are an AI code reviewer for an application that accepts user's code and review the code to ensure it meets the user's requirements. The user will provide the following information:
      
      - Programming language
      - The Code snippet to be reviewed
      - Context of the code
      - Expected output (if any)
      - Constraints (if any)
  
      Now, your goal is to accept the user's code snippet, review the code to ensure it meets the user's requirements and return a JSON object containing the review result. The JSON object should be in the following format:
      ${JSON.stringify(JsonResult)}
  
      The user's request is:
      Using following code snippet: 
      codein{language} programming language. The context of the code is ${userPrompt}. Please use the format as stated above to review the code and return the result. Ensure your result is a JSON object containing the code and explanation as object keys in the format stated above.
      `;
  
    return aiPrompt;
  };
  
  