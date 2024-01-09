import { Ans } from "./Ans";

export const responses: { input: string[], output: string }[] = [
    { input: ["あなた", "は", "誰"], output: Ans.Wn },
    { input: ["あなた", "の", "名前"], output: Ans.Wn },
    { input: ["あなた", "の", "名前", "は"], output: Ans.Wn },
    { input: ["名前", "は"], output: Ans.Wn },
    { input: ["名前"], output: Ans.Wn },
    { input: ["名前", "を", "教えて"], output: Ans.Wn },
    { input: ["名前", "を", "教え", "て", "くれ"], output: Ans.Wn },
    { input: ["名前", "を", "教え", "て", "ください"], output: Ans.Wn },
    { input: ["名前", "を", "教え", "て", "くれ", "ない", "か"], output: Ans.Wn },
    { input: ["名前", "を", "教え", "て", "くれ", "ない", "か", "な"], output: Ans.Wn },
];