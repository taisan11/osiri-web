import { Ans } from "./Ans";
import dict_ja from "../dict/ja";
import dict_en from "../dict/en";

export type res = { input: string[], output: string }[]

//必ず答えはAnsから取得するようにする
export const responses: res = [
    { input: ["あなた", "誰"], output: Ans.Wn },
    { input: ["あなた","名前"], output: Ans.Wn },
    { input:["誰"], output: Ans.Wn },
    { input: ["今日", "天気"], output: Ans.todayweather },
    { input: ["明日", "天気"], output: Ans.tomorrowweather },
];
export function temp_response(input: string,lang:string): res {
    if(lang === "ja"){
        return dict_ja;
    }else if(lang === "en") {
        return dict_en;
    }
    return [];
}