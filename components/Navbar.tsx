import Link from "next/link"
import Image from "next/image"
import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link href={"/"}>
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems />
            <SignedOut>
              <SignInButton>
                <button className="btn-signin">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar