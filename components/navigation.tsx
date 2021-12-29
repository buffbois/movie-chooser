import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>MOVIE CHOOSER</h1>
            <nav className={styles.navcontainer}>
                <a className={styles.item}><span className={styles.box}>Home</span></a>
                <a className={styles.item}><span className={styles.box}>Group Stats</span></a>
                <a className={styles.item}><span className={styles.box}>Recommendations</span></a>
                <a className={styles.item}><span className={styles.box}>My Stats</span></a>
                <a className={styles.item}><span className={styles.box}>Login/Sign-Up</span></a>
            </nav>
        </div>
    )
}