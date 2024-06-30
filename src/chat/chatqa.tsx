import { Ans } from "./Ans";

export const responses: { input: string[], output: string }[] = [
    { input: ["あなた", "誰"], output: Ans.Wn },
    { input: ["あなた","名前"], output: Ans.Wn },
    { input:["誰"], output: Ans.Wn },
    { input:["あなた","天気"], output: "test" },
];