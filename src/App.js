import {
  lineA,
  lineHA,
  lineKA,
  lineSA,
  lineTA,
  lineMA,
  lineNA,
  lineYA,
  lineWAandLineEN,
} from './kana/hiragana';
import KanaShow from './components/kanaShow';
import { useEffect, useRef, useState } from 'react';
import style from "./App.module.css";

import { ReactComponent as RemakeIcon } from './assets/icon/remake.svg';

const SCOPE = [
  lineA,
  lineHA,
  lineKA,
  lineSA,
  lineTA,
  lineMA,
  lineNA,
  lineYA,
  lineWAandLineEN
]


function App() {
  const [curScope, setCurScope] = useState([...lineA]);
  const getOneKana = () => {
    let idx = Math.floor((Math.random() * curScope.length));
    return curScope[idx]
  }
  const [curKana, setCurKana] = useState(getOneKana());
  const handleNextClicked = () => {


    setCurKana(getOneKana());
  }

  const remakeBtnClick = () => {
    let idx = Math.floor((Math.random() * SCOPE.length));
    const scope = SCOPE[idx];
    setCurScope(scope)
  }

  useEffect(() => {
    setCurKana(getOneKana());
  }, [curScope])

  const PopupKeyUp = (e) => {
    if (e.code === "ArrowRight") {
      handleNextClicked()
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", PopupKeyUp, false)
    return () => {
      //销毁键盘事件
      document.removeEventListener("keyup", PopupKeyUp, false)
    }
  })


  return (
    <div className={style["app"]}>
      <RemakeIcon className={style["remake-icon"]} onClick={remakeBtnClick} />
      <KanaShow kana={curKana.kana} pronunciation={curKana.pronunciation} />
      <div
        className={style["next-btn"]}
        onClick={handleNextClicked}
      >Next</div>
    </div>
  );
}

export default App;
