import styles from '@styles/Intro.module.css'

const Intro: React.FC = () => {
    return (
        <div>
            <img className={styles.image} src="img/when.png"></img>
            <div className={styles.logoText}>when?</div>
            <div className={styles.conversation}>
                <div className = {styles.sms} > 
                    <div className={styles.left}>
                        ugh! I want to host an event but there are too many timezones!
                    </div>
                </div>
                <div className = {styles.sms} > 
                    <div className={styles.right}>
                        ugh! I want to join an event but I'm too lazy to convert it to my timezone!
                    </div>
                </div>
                <div className = {styles.sms} > 
                    <div className={styles.left}>
                        look no further &#128526;
                        <div className={styles.textLink}>when.netlify.app/time?=42069123</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;