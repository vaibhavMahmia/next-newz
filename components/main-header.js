import Link from "next/link"
import { NavLink } from "./nav-link"

export const MainHeader = () => <header id="main-header">
    <div id="logo">
        <Link href="/">NextNews</Link>
    </div>
    <nav>
        <ul>
            <li>
                <NavLink href='/news' label='News' />
            </li>
            <li>
                <NavLink href='/archive' label='Archive' />
            </li>
        </ul>
    </nav>
</header>
