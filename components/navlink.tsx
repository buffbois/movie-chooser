import Link from "next/link"

export default function NavLink({ linkClass, linkRoute, children }: { linkClass: string, linkRoute: string, children: React.ReactNode }) {
    return (
        <Link href={linkRoute}>
            <a className={linkClass}>{children}</a>
        </Link>
    )
}