import React, { useState, useRef, useEffect } from "react";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import styles from "@styles/TimeCreator.module.css";

import dayjs from "dayjs";

const TimeCreator: React.FC = () => {
  const [time, setTime] = useState(() => {
    return new Date();
  });
  const [outputLink, setOutputLink] = useState("");
  const outputLinkRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const onChange = (value) => {
    setTime(value);
    let ms = dayjs(value).unix();
    if (value == null) {
      ms = null;
    }
    console.log(value);

    setOutputLink(`https://when.netlify.app/convert/${ms || ""}`);
  };

  useEffect(() => {
    onChange(time);
  }, [time]);

  //set copied to false after 3 seconds
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  const onClipboard = (e) => {
    outputLinkRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setIsCopied(true);
  };
  return (
    <div>
      <div className={styles.picker}>
        <h2>Generate a link</h2>
        <h3>Enter Date and Time to share:</h3>
        <DateTimePicker
          onChange={onChange}
          initialValue={new Date()}
          value={time}
          disableClock
          locale={"en-US"}
        />
        <h3>Share this link</h3>
        <div className={styles.output}>
          <div className={styles.outputBar}>
            <textarea
              onFocus={(e) => e.target.select()}
              className={styles.outputLink}
              ref={outputLinkRef}
              value={outputLink}
              readOnly
            ></textarea>
            <div className={styles.clipboardAndAlert}>
              {isCopied && <div className={styles.copiedAlert}>Copied!</div>}
              <button
                className={styles.clipboardButton}
                onClick={(e) => onClipboard(e)}
              >
                <img src="img/clipboard.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCreator;
