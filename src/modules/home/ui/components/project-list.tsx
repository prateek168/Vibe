"use client"

import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { useQuery } from "@tanstack/react-query"

import { useTRPC } from "@/trpc/client"
import { Button } from "@/components/ui/button"

export const ProjectsList = () =>{
    const trpc = useTRPC();
    const { data : projects } = useQuery(trpc.projects.getMany.queryOptions());
    
    return(
        <div className="w-full bg-white dark:bg-sidebar rounded-xl p-8 border flex flex-col gap-y-6 sm:gap-y-4">
            <h2 className="text-2xl font-semibold">
                Saved Vibes
            </h2>
        </div>
    )
}