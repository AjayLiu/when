import { useRouter } from 'next/router'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
export default () => {
    const router = useRouter()
    const num : number = parseInt(router.query.slug as string);
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(relativeTime)
    const guessedZone = dayjs.tz.guess()
    const localTime = dayjs.unix(num).tz(guessedZone);
    const localTimeFormatted = localTime.format('MM/DD/YYYY hh:mm A') 
    const timeUntil = dayjs.unix(num).fromNow();
    return <div>
        <h1>This event will occur at your local time: </h1>
        {localTimeFormatted}
        <h2>Which is</h2>
        {timeUntil}
    </div>
}