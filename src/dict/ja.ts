import { res } from "../chat/chatqa"

const Ans = {
    Wn: "私はAIです。私の名前はChatQAです。",
    todayweather: "今日の天気は晴れです。",
    tomorrowweather: "明日の天気は曇りです。"
}

const dict_ja: res = [    { input: ["あなた", "誰"], output: Ans.Wn },
{ input: ["あなた","名前"], output: Ans.Wn },
{ input:["誰"], output: Ans.Wn },
{ input: ["今日", "天気"], output: Ans.todayweather },
{ input: ["明日", "天気"], output: Ans.tomorrowweather },]
export default dict_ja