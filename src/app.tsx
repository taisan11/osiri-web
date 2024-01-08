import { useState } from 'preact/hooks';
import { About } from './about.tsx';
import { Chat } from './chat.tsx';

export function App() {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleSelectChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    setSelectedOption(target.value);
  };
  
  return (
    <>
      <select onChange={handleSelectChange}>
        <option value="1">チャット</option>
        <option value="2">説明</option>
      </select>
  
      {selectedOption === "1" && <Chat/>}
      {selectedOption === "2" && <About/>}
    </>
  );
}