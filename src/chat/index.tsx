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
    const segmentsArray = Array.from(iterator1, segment => segment.segment);
    responses
    for (const response of responses) {
        const index = segmentsArray.findIndex((segment, i) => {
            return response.input.every((inputSegment, j) => segmentsArray[i + j] === inputSegment);
        });

        if (index !== -1) {
            return response.output;
        }
    }

    return "すみません。よーわからんのじゃ";
}