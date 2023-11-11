/* NEXT */
import Link from "next/link"

/* COMPONENT */
export const Footer = () => {
  return (
    <footer className="py-28">
      <div className="flex flex-row items-center gap-5 [&_a]:text-blue-100/40">
        <Link href="https://www.linkedin.com/in/jean-ram/" target="_blank" rel="nofollow noreferrer noopener">Linkedin</Link>
        <Link href="https://twitter.com/arkift_r" target="_blank" rel="nofollow noreferrer noopener">Twitter</Link>
        <Link href="https://github.com/raburuz" target="_blank" rel="nofollow noreferrer noopener">Github</Link>
      </div>
      {/* Build */}
      <p className="mt-6 text-blue-100/20">
        Built with Next.js, MDX, Tailwind and Vercel
      </p>
    </footer>
  )
}
