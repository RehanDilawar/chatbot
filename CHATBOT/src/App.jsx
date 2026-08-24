import ChatBotIcon from "./components/ChatBotIcon";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">Hello 🖐!<br />How can I help you today?</p>
          </div>
          <div className="message user-message">
            <p className="message-text">I'm looking for a new job</p>
          </div>
        </div>
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-rounded">send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
