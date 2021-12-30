import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return (
        <div className='min-h-screen flex bg-purple-300 m-0 sticky top-0 pl-5 pt-3'>
            <h1 className='inline-flex font-cubano text-pink pr-14 m-0 align-middle text-5xl w-full md:w-auto'>MOVIE CHOOSER</h1>
            <div className='bg-purple-300 pl-14 ml-14 top-0 w-screen md:w-full'>
                <nav className='bg-pink align-middle w-screen md:w-auto'>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Home</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Group Stats</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Recommendations</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>My Stats</a>
                    <a className='inline-block font-aktiv absolute right-0 py-3.5 px-7 hover:bg-teal'>Login/Sign-Up</a>
                </nav>
            </div>
        </div>
        
    )
}