import styles from '../styles/App.module.css'
import Image from 'next/image'
import plate1 from './images/plate1.png'
import plate2 from './images/plate2.png'
import plate3 from './images/plate3.png'


export default function App() {
    return (
        <div className={styles.app} id='menu'>
            <div className={styles.item}>
              <div className={styles.img}>
              <Image  src={plate1} alt='food' />
              </div>
              <h1> Barbecue salad </h1> 
              <div className={styles.price}>
              <div className={styles.title} >      
              <p>Delicious dish</p>
              <h3> $22.00 </h3> 
              </div>  
              <i style={{fontSize: '27px', color: '#048654', marginTop: '50px', marginRight: '30px'}} className="fas fa-shopping-cart"></i>
              </div>
            </div>

            <div className={styles.item}>
            <div className={styles.img}>
              <Image  src={plate1} alt='food' />
              </div>
              <h1> Salad with fish</h1>
              <div className={styles.price}>
              <div className={styles.title} >      
              <p>Delicious dish</p>
              <h3> $12.00 </h3> 
              </div>  
              <i style={{fontSize: '27px', color: '#048654', marginTop: '50px', marginRight: '30px'}} className="fas fa-shopping-cart"></i>
              </div>
            </div>

            <div className={styles.item}>
            <div className={styles.img}>
              <Image  src={plate1} alt='food' />
              </div>
              <h1> Spinach salad </h1>
              <div className={styles.price}>
              <div className={styles.title} >      
              <p>Delicious dish</p>
              <h3> $9.50 </h3> 
              </div>  
              <i style={{fontSize: '27px', color: '#048654', marginTop: '50px', marginRight: '30px'}} className="fas fa-shopping-cart"></i>
              </div>
            </div>

            <div className={styles.item}>
            <div className={styles.img}>
              <Image  src={plate1} alt='food' />
              </div>
              <h1> Tomato salad</h1>
              <div className={styles.price}>
              <div className={styles.title} >      
              <p>Delicious dish</p>
              <h3> $20.00 </h3> 
              </div>  
              <i style={{fontSize: '27px', color: '#048654', marginTop: '50px', marginRight: '30px'}} className="fas fa-shopping-cart"></i>
              </div>
            </div>
        </div>
    )
}
