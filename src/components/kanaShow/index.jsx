import React, { useEffect, useState } from "react";
import style from "./style.module.css"

const KanaShow = ({ kana, pronunciation }) => {
    const [showPronunciation, setShowPronunciation] = useState(false);
    const getPronunciation = () => {
        setShowPronunciation(true);
    }
    useEffect(() => {
        setShowPronunciation(false)
    }, [kana])

    const PopupKeyUp = (e) => {
        if (e.code === "ArrowUp") {
            getPronunciation()
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
        <div>
            <div className={style["kana-wrapper"]}>{kana}</div>
            <div className={style["answer-area"]}>
                {
                    showPronunciation
                        ? <div className={style["answer"]}>{pronunciation}</div>
                        : <div className={style["show-answer"]} onClick={getPronunciation}>?</div>
                }
            </div>
        </div>
    )
}

export default KanaShow;