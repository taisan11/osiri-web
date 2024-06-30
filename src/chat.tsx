import { useState } from 'preact/hooks';
import { Chatlib } from './chat/index';

export function Chat(props: { a: string }) {
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
        <button onClick={handleClick}>{props.a === "1"&&"送信"}{props.a === "2"&&"send"}</button>
        {message && <p>{message}</p>}
      </>
    );
  }