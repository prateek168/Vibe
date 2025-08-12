"use client"

import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { UserControl } from "@/components/user-control"
import { cn } from "@/lib/utils"

export const Navbar = ()=>{


    return(
        <nav
            className={cn(
  "p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-background shadow-md",
  "bg- backdrop-blur-md"
)}

        >
            <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="Vibe" width={24} height={24} />
                        <span className="font-semibold text-lg">Vibe</span>
                    </Link>
                    <Link 
                        href="https://github.com/prateek168/Vibe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 text-sm font-medium"
                    >
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>Star</span>
                    </Link>
                </div>
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