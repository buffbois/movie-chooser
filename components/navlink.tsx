import Link from "next/link"
import { useRouter } from 'next/router'

const inactiveClass = "font-aktiv py-5 text-center hover:bg-teal";
const activeClass = "bg-pink-100 " + inactiveClass;

export default function NavLink({ linkRoute, additionalClasses, children }: { linkRoute: string, additionalClasses: string, children: React.ReactNode }) {
    const router = useRouter();
    const selfClass = additionalClasses + " " + (router.pathname == linkRoute ? activeClass : inactiveClass);

    return (
        <Link href={linkRoute}>
            <a className={selfClass}>{children}</a>
        </Link>
    )
}
