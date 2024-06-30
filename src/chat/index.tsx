// @ts-nocheck
import { responses } from "./chatqa";
/**
 * チャットライブラリ関数
 * @param naiyou - チャットの内容
 * @returns チャットの応答
 */
export function Chatlib(naiyou: string,lang: string) {
    const segmenterJa = new Intl.Segmenter(lang, { granularity: 'word' });
    const iterator1 = segmenterJa.segment(naiyou)[Symbol.iterator]();
    const segmentsArray:string[] = Array.from(iterator1, segment => segment.segment);
    let result = lang === "ja" ? "すみません。よーわからんのじゃ" : "Sorry, I don't understand.";
    responses.forEach((response) => {
        if (response.input.every(res => segmentsArray.includes(res))){
            result = response.output;
        }
    });
    
    return result;
}