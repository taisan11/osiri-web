import { Ans } from "./Ans";

//必ず答えはAnsから取得するようにする
export const responses: { input: string[], output: string }[] = [
    { input: ["あなた", "誰"], output: Ans.Wn },
    { input: ["あなた","名前"], output: Ans.Wn },
    { input:["誰"], output: Ans.Wn },
    { input: ["今日", "天気"], output: Ans.todayweather },
    { input: ["明日", "天気"], output: Ans.tomorrowweather },
];
export function temp_response(input: string,lang:string):  { input: string[], output: string }[]|any {
    
}