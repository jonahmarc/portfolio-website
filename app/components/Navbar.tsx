'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        'href': '/',
        'name': 'Home'
    },
    {
        'href': '/projects',
        'name': 'Projects'
    },
    {
        'href': '/experiences',
        'name': 'Experiences'
    },
    {
        'href': '/contact',
        'name': 'Contact'
    }
]

const Navbar = () => {
    const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center lg:justify-end
            p-8 lg:px-20
            text-xs lg:text-base text-white">
        {navLinks.map( link =>
            <Link key={link.name}
                href={link.href}
                className={`${pathname === link.href ? 'text-sec-light-blue': 'text-pri-light-blue'} px-2 md:px-6`}>
                    {link.name}
            </Link>
        )}
    </nav>
  )
}

export default Navbar