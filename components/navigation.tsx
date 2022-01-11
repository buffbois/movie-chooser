import Link from 'next/link'
import NavLink from './navlink';

export default function Navigation() {

    return (
        <nav role="navigation" aria-label="Page Navigation" className='grid grid-rows-1 grid-cols-4 bg-purple-300 py-5 pl-2 pr-0 sticky top-0 z-50'>
            <div className='col-span-1'>
                <h1 className='inline-block font-cubano text-pink-200 mr-10 align-middle text-5xl min-w-max'>MOVIE CHOOSER</h1>
            </div>
            <div className='col-span-3 bg-pink-200 flex justify-start'>
                <div>
                    <NavLink linkRoute="/">Home</NavLink>
                    <NavLink linkRoute="#">Group Stats</NavLink>
                    <NavLink linkRoute="#">Recommendations</NavLink>
                    <NavLink linkRoute="#">My Stats</NavLink>
                </div>
                <div className='w-perfect flex justify-end'>
                    <NavLink linkRoute="/account">Login/Sign Up</NavLink>
                </div>
            </div >
        </nav >
    )
}
