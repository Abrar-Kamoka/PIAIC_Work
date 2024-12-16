import Link from 'next/link';


export default function NavMenue() {
    return (
        <div className="nav-links" id="navLinks">         
            <ul>
                <li><Link href="./home">Home</Link></li>
                <li><Link href="/course">Course</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}