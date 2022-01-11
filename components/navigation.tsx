import Link from 'next/link'
import NavLink from './navlink';

export default function Navigation() {

    return (
		<div className="bg-purple-300 w-full py-5 grid grid-rows-6 grid-cols-1 md:grid-rows-1 md:grid-cols-4">
			<div className="col-span-1 md:pr-4 md:pl-4 flex-row justify-center items-center">
				<h1 className="font-cubano text-pink-200 text-5xl">MOVIE CHOOSER</h1>
			</div>
			<div className="row-span-5 md:row-span-1 col-span-1 md:col-span-3">
				<div className="h-full flex items-center">
					<nav role="navigation" aria-label="Page Navigation" className="bg-pink-200 w-full grid grid-rows-5 grid-cols-1 md:grid-rows-1 md:grid-cols-6">
						<NavLink additionalClasses="col-span-1" linkRoute="/">Home</NavLink>
						<NavLink additionalClasses="col-span-1" linkRoute="#">Group Stats</NavLink>
						<NavLink additionalClasses="col-span-1" linkRoute="#">Recommendations</NavLink>
						<NavLink additionalClasses="col-span-1" linkRoute="#">My Stats</NavLink>
						<div className="hidden md:block md:col-span-1"/>
						<NavLink additionalClasses="col-span-1" linkRoute="/account">Login/Sign Up</NavLink>
					</nav>
				</div>
			</div>
		</div>
    )
}
