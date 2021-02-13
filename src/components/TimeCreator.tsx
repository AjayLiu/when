import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import styles from '@styles/TimeCreator.module.css'

const TimeCreator: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [outputLink, setOutputLink] = useState(`https://when.netlify.app/time?=${time.getTime()}`);

    const onChange = (value) => {
        console.log(value);
        setTime(value);
        const ms = time.getTime();
        setOutputLink(`https://when.netlify.app/time?=${ms}`)
    }

    return (
        <div>
            <div className={styles.picker}>
                <h2>Generate a When link</h2>
                <div>Enter Date and Time:</div>
                <DateTimePicker 
                    minDate={new Date()}
                    onChange={onChange}
                    value={time}
                    disableClock
                />
            </div>

            <div>
                {outputLink}
            </div>
        </div>
    )
}

export default TimeCreator;