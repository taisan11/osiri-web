import { res } from "../chat/chatqa"

const dict_en: res = [
    { input: ["hello"], output: "Hello!" },
    { input: ["good", "morning"], output: "Good morning!" },
    { input: ["good", "afternoon"], output: "Good afternoon!" },
    { input: ["good", "evening"], output: "Good evening!" },
    { input: ["good", "night"], output: "Good night!" },
    { input: ["bye"], output: "Goodbye!" },
    { input: ["how", "are", "you"], output: "I'm fine, thank you. And you?" },
    { input: ["i", "am", "fine"], output: "That's good to hear." },
    { input: ["thank", "you"], output: "You're welcome." },
    { input: ["what", "is", "your", "name"], output: "I'm Osiri." },
    { input: ["who", "are", "you"], output: "I'm Osiri." },
    { input: ["where", "are", "you", "from"], output: "I'm from Japan." },
    { input: ["what", "time", "is", "it"], output: new Date().toLocaleTimeString() },
]
export default dict_en