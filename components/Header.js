import Link from 'next/link';

export default function Header() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/portfolio">Work</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
