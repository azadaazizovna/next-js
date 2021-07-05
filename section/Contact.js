import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import movie from './images/movil-app.png'
import app1 from './images/app1.png'
import app2 from './images/app2.png'
import { Link } from 'react-scroll'

export default function Contact() {
    return (
        <div className={styles.contactContainer} id='contact'>
            <div className={styles.contact}>
            <div className={styles.img}>
              <Image src={movie} alt='app' />
            </div>

            <div className={styles.contactTitle}>
                <p><span>App</span></p>
                <h1>App is aviable</h1>
                <p>
                    Find our application and dowload it, you can make reservations, food orders, see your deliveries on the way and much more
                </p>
                <div className={styles.appImage}>
                   <div className={styles.appImg}>
                   <Image src={app1} alt='app' />
                   </div>
                   <div className={styles.appImg}>
                   <Image src={app2} alt='app' />
                   </div>
                </div>
            </div>
            </div>

            <div className={styles.icon}>
            <Link to='home' smooth={true} duration={800} ><i className="far fa-caret-square-up"></i></Link>
            </div>
        </div>
    )
}
