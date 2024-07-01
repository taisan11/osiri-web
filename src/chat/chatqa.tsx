import dict_ja from "../dict/ja";
import dict_en from "../dict/en";

export type res = { input: string[], output: string }[]

export function response(lang:string): res {
    if(lang === "ja"){
        return dict_ja;
    }else if(lang === "en") {
        return dict_en;
    }
    return [];
}