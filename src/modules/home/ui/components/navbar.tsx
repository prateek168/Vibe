"use client"

import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { UserControl } from "@/components/user-control"

export const Navbar = ()=>{
    return(
        <nav
            className="p-4 transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent"
        >
            <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
             <Image src="/logo.svg" alt="Vibe" width={24} height={24} />
                    <span className="font-semibold text-lg">Vibe</span>
                </Link>
                <SignedOut>
                    <div className="flex gap-2">
                        <SignUpButton >
                            <Button variant="outline" size="sm">
                                Sign Up
                            </Button>
                        </SignUpButton>
                        <SignInButton >
                            <Button  size="sm">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignedIn>
                            <p>TODO: User Control</p>
                        </SignedIn>
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserControl showName />
                </SignedIn>
            </div>
        </nav>
    )
}