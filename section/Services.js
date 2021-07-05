import styles from '../styles/Services.module.css'

export default function Services() {
    return (
        <div className={styles.services} id='services'>
            <div className={styles.item}>
                <i style={{fontSize: '70px', color: '#048654'}} className="fas fa-utensils"></i>
                <h1>Excellent food</h1>
                <p>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>

            <div style={{paddingBottom: '10px'}} className={styles.item}>
                <i style={{fontSize: '73px', color: '#048654'}} className="fas fa-pizza-slice"></i>
                <h1>Fast food</h1>
                <p>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>

            <div className={styles.item}>
                <i style={{fontSize: '70px', color: '#048654'}} className="fas fa-caravan"></i>
                <h1>Delivery</h1>
                <p>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>

            <div style={{paddingBottom: '10px'}} className={styles.item}>
                <i style={{fontSize: '74px', color: '#048654'}} className="fas fa-mug-hot"></i>
                <h1>Best drink</h1>
                <p>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>
        </div>
    )
}
