import { useRef } from "react";

const ChatForm = ({setChatHistory}) => {
  const inputRef = useRef(null);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    // Add user message to chat history
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    inputRef.current.value = "";
  }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Message..." className="message-input" required ref={inputRef} />
      <button className="material-symbols-rounded">send</button>
    </form>
  )
}

export default ChatForm