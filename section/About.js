import styles from '../styles/About.module.css'
import Image from 'next/image'
import about from './images/about.jpg'


export default function About() {
    return (
        <div className={styles.about} id='about'>

           <div className={styles.aboutTitle}>
                <p> <span>About Us</span> </p>
                <h1> We cook the best tasty food </h1>
                <p> We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                <button>Explore history</button>
            </div>



            <div className={styles.img}>
                <Image style={{borderRadius: '30px'}} src={about} alt='About.img' />
            </div>
        </div>
    )
}
