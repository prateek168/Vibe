"use client"

import{
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable"
import { MessagesContainer } from "../components/messages-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/generated/prisma";
import { ProjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";
interface Props {
    projectId: string;
}

export const ProjectView = ({projectId}: Props)=>{ 
    const [activeFragment , setActiveFragment] = useState<Fragment | null>(null) 
    return(
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
                defaultSize={35}
                minSize={20}
                className="flex flex-col min-h-0"
            >
            <Suspense fallback={<p>Loading project...</p>}>
            <ProjectHeader projectId={projectId} />
            </Suspense>
            <Suspense fallback={<p>Loading messages...</p>}> 
            <MessagesContainer 
            activeFragment={activeFragment}
            projectId={projectId}
            setActiveFragment = {setActiveFragment}
            />
            
            </Suspense>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
                defaultSize={65}
                minSize={50}
            >
            {!!activeFragment && <FragmentWeb data={activeFragment} />}
            </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )

 }

