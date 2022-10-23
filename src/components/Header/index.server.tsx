import Link from "next/link";

const Header: React.FC = () => (
    <header>
        <nav style={{display: 'grid', gridAutoFlow: 'column', justifyContent: 'flex-start', gap: 8}}>
            <Link href='/'>
                Home
            </Link>
            <Link href='/dashboard/'>
                Dashboard
            </Link>
            <Link href='/profile/'>
                Profile
            </Link>
            <Link href='/about/'>
                About
            </Link>
            <Link href='/product/'>
                Product
            </Link>
            <a href="/parallel/">
                Parallel
            </a>
        </nav>
    </header>
)

export default Header;