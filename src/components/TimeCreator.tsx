import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import styles from '@styles/TimeCreator.module.css'

import dayjs from 'dayjs';

const TimeCreator: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [outputLink, setOutputLink] = useState(`https://when.netlify.app/time?=${Math.floor(time.getTime() / 1000)}`);

    const onChange = (value) => {
        setTime(value);
        const ms = dayjs(value).unix();
        setOutputLink(`https://when.netlify.app/time?=${ms}`)
    }

    return (
        <div>
            <div className={styles.picker}>
                <h2>Generate a link</h2>
                <div>Enter Date and Time to share:</div>
                <DateTimePicker 
                    minDate={new Date()}
                    onChange={onChange}
                    value={time}
                    disableClock
                />
                <div className={styles.output}>
                    <div className={styles.outputBar}>
                        <div>
                            {outputLink}
                        </div>
                        <button>
                            <img src = "img/clipboard.png"></img>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimeCreator;