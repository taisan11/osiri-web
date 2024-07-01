// @ts-nocheck
import { response } from "./chatqa";
/**
 * チャットライブラリ関数
 * @param naiyou - チャットの内容
 * @returns チャットの応答
 */
export function Chatlib(naiyou: string,lang: string) {
    console.log(lang);
    const segmenterJa = new Intl.Segmenter(lang, { granularity: 'word' });
    const iterator1 = segmenterJa.segment(naiyou)[Symbol.iterator]();
    const segmentsArray:string[] = Array.from(iterator1, segment => segment.segment);
    console.log(segmentsArray);
    let result = lang === "ja" ? "すみません。よーわからんのじゃ" : "Sorry, I don't understand.";
    const dict = response(lang);
    dict.forEach((response) => {
        if (response.input.every(res => segmentsArray.includes(res))){
            result = response.output;
        }
    });
    
    return result;
}