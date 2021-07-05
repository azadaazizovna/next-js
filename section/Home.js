import styles from '../styles/Home.module.css'
import Image from 'next/image'
import home from './images/home.png'
import { Link } from 'react-scroll'

export default function Home() {
    return (
        <div className={styles.home} id='home'>
            <div className={styles.homeTitle}>
                <h1>Tasty food</h1>
                <p>Try the best food of the week</p>
                <Link to='menu' smooth={true} duration={1000} >
                <button>View Menu</button>
                </Link>
            </div>

            <div className={styles.img}>
            <Image  src={home} alt='Home' />
            </div>
        </div>
    )
}
