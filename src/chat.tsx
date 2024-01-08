import { useState } from 'preact/hooks';

export function Chat() {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
  
    const handleInputChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      setInputValue(target.value);
    };
  
    const handleClick = () => {
      const segmenterJa = new Intl.Segmenter('ja', { granularity: 'word' });
      const iterator1 = segmenterJa.segment(inputValue)[Symbol.iterator]();
      const segmentsArray = Array.from(iterator1, segment => segment.segment);
  
      const index = segmentsArray.findIndex((segment, i) => 
        segment === "あなた" && segmentsArray[i + 1] === "は" && segmentsArray[i + 2] === "誰"
      );
  
      if (index !== -1) {
        setMessage("私の名前はOsiriです");
      } else {
        setMessage("すみません。よーわからんのじゃ");
      }
    };
  
    return (
      <>
        <h2>Chat</h2>
        <input type="text" name="n" id="n" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleClick}>送信</button>
        {message && <p>{message}</p>}
      </>
    );
  }