import styles from '@styles/Convert.module.css'

import {useState} from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

import Header from '@components/Header'
import Footer from '@components/Footer';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

const Convert: React.FC = () => {
    const router = useRouter()
    const num : number = parseInt(router.query.slug as string);
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(relativeTime)
    const guessedZone = dayjs.tz.guess()
    const [userTz, setUserTz] = useState(guessedZone);

    const localTime = dayjs.unix(num).tz(userTz);
    const localDateFormatted = localTime.format('dddd MM/DD/YYYY') ;
    const localTimeFormatted = localTime.format('hh:mm A');
    const timeUntil = dayjs.unix(num).fromNow();

    const currentLocalTime = dayjs().tz(userTz).format('hh:mm A');

    const displayTimezone = userTz + " GMT" + dayjs().utcOffset()/60;

    const onChangeTimeZone = (newValue) => {
        setUserTz(newValue);
    }

    return <div>
        <Header/>
        <h1 className={styles.label}>This event will occur at your local time ({displayTimezone}) </h1>
        <div className={styles.date}>{localDateFormatted}</div>
        <div className={styles.time}>{localTimeFormatted}</div>
        <div className={styles.timeUntil}>
            <h2>...which is {timeUntil}</h2>
        </div>
        
        <div className={styles.customTimezone}>
            <h2>Not the right timezone? ({displayTimezone})</h2>
            <p>Pick the correct one below</p>
            <TimezonePicker className={styles.timezonePicker}
                absolute      = {false}
                defaultValue  = {guessedZone}
                placeholder   = "Select timezone..."
                onChange      = {(newValue)=>onChangeTimeZone(newValue)}
                value = {userTz}
            />
            <div className={styles.localTimeBox}>
                Just checking... your local time should be: 
                <div className={styles.localTime}>
                    {currentLocalTime}
                </div>
            </div>
        </div>

        <a href="/">
            Create your own When link here!
        </a>
        <Footer/>
    </div>
}

export default Convert;