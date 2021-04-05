import React, { useState, useRef, useEffect } from "react";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import styles from "./TimeCreator.module.scss";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const TimeCreator: React.FC = () => {
  const [time, setTime] = useState(() => {
    return new Date();
  });
  const [outputLink, setOutputLink] = useState("");
  const outputLinkRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const [unix, setUnix] = useState(0);
  const onChange = (value) => {
    setTime(value);
    let ms = dayjs(value).unix();
    if (value == null) {
      ms = null;
    }
    setUnix(ms);

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

  dayjs.extend(relativeTime);
  const timeUntil =
    Math.abs(unix - dayjs(new Date()).unix()) > 100
      ? dayjs.unix(unix).fromNow()
      : null;

  return (
    <div>
      <div className={styles.picker}>
        <h2>3 Easy Steps:</h2>
        <h3>1. Enter Date and Time to share (in your local time):</h3>
        <DateTimePicker
          onChange={onChange}
          initialValue={new Date()}
          value={time}
          disableClock
          locale={"en-US"}
        />
        <h3>2. Double Check</h3>
        <div className={styles.timeUntil}>
          {timeUntil ? (
            <p>
              The time entered above is{" "}
              <div className={styles.emphasize}>{timeUntil}</div>, correct?
            </p>
          ) : (
            <p>Looks like you haven't changed the time in Step 1 yet</p>
          )}
        </div>
        <h3>3. Share this link</h3>
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
        <div>
          Your friends will be glad that you saved them a painful and confusing
          time conversion! 😊
        </div>
      </div>
    </div>
  );
};

export default TimeCreator;
