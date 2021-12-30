import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return (
        <div className='flex bg-purple-300 m-0 sticky top-0 pl-5 py-5'>
            <h1 className='inline-block font-cubano text-pink-200 mr-10 align-middle text-5xl min-w-max'>MOVIE CHOOSER</h1>
            <div className='bg-purple-300 pl-0 ml-0 top-0'>
                <nav className='bg-pink-200 flex flex-row flex-nowrap'>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Home</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Group Stats</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Recommendations</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>My Stats</a>
                    <div className='grow'>
                        <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Login/Sign-Up</a>
                    </div>
                </nav>
            </div>
        </div>

    )
}
