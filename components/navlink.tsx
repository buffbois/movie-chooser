import Link from "next/link"
import { useRouter } from 'next/router'

const toggledClass = "bg-pink-100 inline-block font-aktiv py-3.5 px-7 hover:bg-teal";
const untoggledClass = "inline-block font-aktiv py-3.5 px-7 hover:bg-teal";

export default function NavLink({ linkRoute, children }: { linkRoute: string, children: React.ReactNode }) {
    const router = useRouter();
    const selfClass = router.pathname == linkRoute ? toggledClass : untoggledClass;

    return (
        <Link href={linkRoute}>
            <a className={selfClass}>{children}</a>
        </Link>
    )
}
