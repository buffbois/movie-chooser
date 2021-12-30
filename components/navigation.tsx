import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return (
        <nav className='grid grid-rows-1 grid-cols-4 bg-purple-300 py-5 pl-2 pr-0 sticky top-0 z-50'>
            <div className='col-span-1'>
                <h1 className='inline-block font-cubano text-pink-200 mr-10 align-middle text-5xl min-w-max'>MOVIE CHOOSER</h1>
            </div>
            <div className='col-span-3 bg-pink-200 flex justify-start'>
                <div className=''>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Home</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Group Stats</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Recommendations</a>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>My Stats</a>
                </div>
                <div className='w-perfect flex justify-end'>
                    <a className='inline-block font-aktiv py-3.5 px-7 hover:bg-teal'>Login/Sign-Up</a>
                </div>
            </div>
        </nav>
    )
}
