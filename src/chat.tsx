import { useState } from 'preact/hooks';
import { Chatlib } from './chat/index';

export function Chat() {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
  
    const handleInputChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      setInputValue(target.value);
    };
  
    const handleClick = () => {
        const result = Chatlib(inputValue);
        setMessage(result);
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