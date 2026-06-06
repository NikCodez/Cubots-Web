import { ArrowRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "/cubots-dark.png";
import ribbon from "@/assets/images/about-bg.png";

import "@/styles/AskCubots.css";

const AskCubots = () => {
  const navigate = useNavigate();

  return (
    <div className="ask-cubots-layout">

      <aside className="ask-sidebar">
        <button className="new-chat-btn">
          <span>+</span>
          New Chat
        </button>

        <button className="search-chat-btn">
          <Search size={18} />
        </button>
      </aside>

      <main className="ask-main">

        <div className="ask-cubots-header">
          <img
            src={logo}
            alt="Cubots"
            className="ask-cubots-logo"
          />

          <button
            className="close-btn"
            onClick={() => navigate("/")}
          >
            <X size={22} />
          </button>
        </div>

        <img
          src={ribbon}
          alt=""
          className="ask-bg-ribbon ask-bg-ribbon-top"
        />

        <div className="ask-content">
          <h1>
            Build faster,
            <span> think deeper.</span>
          </h1>

          <p>
            Engage with our AI chatbot and discover a world of
            boundless creativity
          </p>

          <div className="ask-box">
            <textarea placeholder="Ask anything" />

            <div className="ask-actions">
              <button className="mic-btn">
              </button>

              <button className="send-query-btn">
                {">"}
              </button>
            </div>
          </div>

          <div className="suggestions">
            <h4>Suggestions on what to ask Our AI</h4>

            <div className="suggestion-list">
              <button>
                What can I ask you to do?
              </button>

              <button>
                Which one of my projects is performing the best?
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AskCubots;