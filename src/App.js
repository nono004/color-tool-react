import './App.css';
import React, { useState } from 'react';
function App() {
  const [inputBackgroundColor, setBackgroundColor] = useState('#0f0a95');
  const [inputFontColor, setFontColor] = useState('#ffffff');
  const [ButtonStyle, setButtonStyle] = useState({ backgroundColor: inputBackgroundColor, color: inputFontColor});

  const setBackgroundColorValue = (e) => {
    setBackgroundColor(e.target.value);
  };

  const setFontColorValue = (e) => {
    setFontColor(e.target.value);
  };

  const ColorChange = () => {
    setButtonStyle({
      backgroundColor: inputBackgroundColor,
      color: inputFontColor,
    });
  };

  return (
    <div className="App">
      <p class = 'title'>配色確認ツール</p>
        <div class='inputBox'>
          <div>
            <p>背景色を入力</p>
            <input type = 'text' value={inputBackgroundColor} onChange={setBackgroundColorValue}/>
          </div>
          <div>
            <p>文字色を入力</p>
            <input type = 'text' value={inputFontColor} onChange={setFontColorValue}/>
          </div>
        </div>
        <div class = 'changeButtonBox'>
          <button onClick={ColorChange} class='changeButton'>色を変更</button>
        </div>
        <div class = 'sampleButtonBox'>
          <button style={ButtonStyle} class = 'sampleButton'>サンプル</button>
        </div>
    </div>
  );
}

export default App;
