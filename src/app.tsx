import { useState } from 'preact/hooks';
import { About } from './about.tsx';
import { Chat } from './chat.tsx';

export function App() {
  const [selectedOption, setSelectedOption] = useState("1");
  const [selectedOptionI18n, setSelectedOptionI18n] = useState("1");

  const handleSelectChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    setSelectedOption(target.value);
  };
  const handleSelectChangeI18n = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    setSelectedOptionI18n(target.value);
  };
  
  return (
    <>
      <h1>Osiri</h1>
      <p>{selectedOptionI18n === "1"&&"A○○le社のSiriの様なものです。"}{selectedOptionI18n === "2"&& "like Siri for A○○le company"}</p>
      <select onChange={handleSelectChange}>
        <option value="1">チャット</option>
        <option value="2">説明</option>
      </select>
      <h2>change lang</h2>
      <select onChange={handleSelectChangeI18n}>
        <option value="1">日本語</option>
        <option value="2">English</option>
      </select>
      {selectedOption === "1" && <Chat a={selectedOptionI18n}/>}
      {selectedOption === "2" && <About a={selectedOptionI18n}/>}
    </>
  );
}