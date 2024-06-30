// @ts-nocheck
import { responses } from "./chatqa";
/**
 * チャットライブラリ関数
 * @param naiyou - チャットの内容
 * @returns チャットの応答
 */
export function Chatlib(naiyou: string) {
    const segmenterJa = new Intl.Segmenter('ja', { granularity: 'word' });
    const iterator1 = segmenterJa.segment(naiyou)[Symbol.iterator]();
    const segmentsArray:string[] = Array.from(iterator1, segment => segment.segment);
    let result = "すみません。よーわからんのじゃ";;
    responses.forEach((response) => {
        if (response.input.every(res => segmentsArray.includes(res))){
            result = response.output;
        }
    });
    
    return result;
}