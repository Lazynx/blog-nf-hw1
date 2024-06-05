import Link from "next/link"

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center container">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      </svg>
        <span className="sr-only">Blog</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
