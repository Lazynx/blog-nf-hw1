import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 ">
            <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Blog. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <span className="text-xs underline-offset-4">Made by <i>Vladislav</i></span>
            </nav>
        </div>
    </footer>
  )
}
