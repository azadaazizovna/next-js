import styles from '../../styles/Header.module.css'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Header() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className={styles.navContainer}>
            <a href='#' className={styles.navLogo}>Tasty</a>

           
                <div className={styles.navMenu}>
                <ul style={click? {left: '0'} : {left: '100%'}} className={styles.navList}>
                  <li><a href='#'><Link onClick={handleClick} smooth={true} duration={1000} to='home'>Home</Link></a></li>
                  <li><a href='#'><Link onClick={handleClick} smooth={true} duration={1000} to='about'>About</Link></a></li>
                  <li><a href='#'><Link onClick={handleClick} smooth={true} duration={1000} to='services'>Services</Link></a></li>
                  <li><a href='#'><Link onClick={handleClick} smooth={true} duration={1000} to='menu'>Menu</Link></a></li>
                  <li><a href='#'><Link onClick={handleClick} smooth={true} duration={1000} to='contact'>Contact</Link></a></li>
                </ul>

                <div className={styles.icon}>
                  <i onClick={handleClick} className={click ? 'fa fa-times' : 'fa fa-bars'} />
                  </div>
                </div>
        </div>
    )
}
