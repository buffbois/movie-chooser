import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return (
        <div className='bg-purple-200 m-0 sticky top-0 p-2'>
            <h1 className='inline-flex font-cubano text-pink p-0 m-0 align-middle text-5xl'>MOVIE CHOOSER</h1>
            <nav className='inline-block bg-pink align-middle ml-5'>
                <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Home</a>
                <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Group Stats</a>
                <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Recommendations</a>
                <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>My Stats</a>
                <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'><span className={styles.box}>Login/Sign-Up</span></a>
            </nav>
        </div >
    )
}