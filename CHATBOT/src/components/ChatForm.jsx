import { useRef } from "react";

const ChatForm = ({setChatHistory}) => {
  const inputRef = useRef(null);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    // Add user message to chat history
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    // Add thinking message to chat history
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
    }, 700);
  }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Message..." className="message-input" required ref={inputRef} />
      <button className="material-symbols-rounded">send</button>
    </form>
  )
}

export default ChatForm