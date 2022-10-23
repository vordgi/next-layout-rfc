import Link from "next/link";

const Header: React.FC = () => (
    <header>
        <nav style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
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
                <Link href="/parallel/">
                    Parallel
                </Link>
            </div>
            <div>
                <a href="https://github.com/vordgi/next-layout-rfc" target="_blank" rel="noreferrer noopener">
                    Github
                </a>
            </div>
        </nav>
    </header>
)

export default Header;