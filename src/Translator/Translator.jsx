import React, { useState } from "react";
import "./translator.scss";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [outputLang, setOutputLang] = useState("zh");
  const [outputText, setOutputText] = useState("");
  const [isTranslated, setIsTranslated] = useState();

  const clearInput = () => {
    setInputText("");
    setOutputText("");
    setIsTranslated();
  };

  const translate = async () => {
    if (inputText.length === 0) {
      return;
    }
    const options = {
      method: "POST",
      url: process.env.REACT_APP_Base_URL,
      params: {
        "to[0]": `${outputLang}`,
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Keys,
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: [
        {
          Text: `${inputText}`,
        },
      ],
    };

    try {
      const response = await axios.request(options);
      if (response.status !== 200) {
        setIsTranslated(false);
        console.log("there's an error.");
        return;
      }
      setIsTranslated(true);
      console.log(response.data);
      const translatedText = response.data[0].translations[0].text;
      setOutputText(translatedText);
      console.log(translatedText);
    } catch (error) {
      setIsTranslated(false);
      console.error(error);
    }
  };
  return (
    <>
      <section className="translator">
        <div className="row-wrapper">
          <div className="translator-container">
            <form action="submit" className="input-form">
              <textarea
                className="text-box"
                placeholder="I wanna translate..."
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              ></textarea>
            </form>
            <div className="functions">
              <select
                name="languages"
                id="languages"
                className="form-select form-select-sm"
                onChange={(e) => setOutputLang(e.target.value)}
              >
                <option value="zh-tw">Chinese</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
              </select>
              <div className="btn-translate-section">
                <button className="translate-btn" onClick={translate}>
                  Translate
                </button>

                {inputText !== "" && (
                  <button className="clear-btn" onClick={clearInput}>
                    Clear
                  </button>
                )}
              </div>
              <div className="text-box">
                {isTranslated === false ? (
                  <span className="output-placeholder">
                    Translation Failed.
                  </span>
                ) : outputText === "" ? (
                  <span className="output-placeholder">
                    Please slesct a language
                  </span>
                ) : (
                  outputText
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Translator;
