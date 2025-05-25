import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link href={"/"}>
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <p>Home</p>
            <p>Companion</p>
            <p>My journey</p>
            <p>Sign in </p>
        </div>
    </div>
  )
}

export default Navbar