import "./App.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [text, setText] = useState("Copy this text to clipboard");
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Copy Text to Clipboard</h4>
        </div>

        <div className="card-body">
          <p className="label">Message</p>
          <textarea
            type="text"
            value={text}
            onChange={({ target }) => {
              setText(target.value);
            }}
            placeholder="Enter Message"
            className="text-area"
          />

          {isCopied ? (
            <p className="success-msg">Text copied to clipboard</p>
          ) : null}

          <CopyToClipboard
            text={text}
            onCopy={() => {
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 1000);
            }}
          >
            <button className="btn">COPY</button>
          </CopyToClipboard>

          {/* Copy text to clipbaord using navigator */}
          {/* <button
            onClick={() => {
              navigator.clipboard.writeText(text);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 1100);
            }}
            className="btn"
          >
            COPY
          </button> */}
        </div>
      </div>

      <textarea
        type="text"
        className="text-area"
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default App;
