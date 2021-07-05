import Header from "./Header";
import styles from '../../styles/Header.module.css'


export default function MainLayout({ children }) {
    return (
        <div>
            <div className={styles.header}>
               <Header />
            </div>

            <main>
                {children}
            </main>
        </div>
    )
}
