"use client"

import{
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { MessagesContainer } from "../components/messages-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/generated/prisma";
import { ProjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";
import { CodeIcon, CrownIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeView } from "@/components/code-view";
import { FileExplorer } from "@/components/file-explorer";
interface Props {
    projectId: string;
}

export const ProjectView = ({projectId}: Props)=>{ 
    const [activeFragment , setActiveFragment] = useState<Fragment | null>(null) 
    const [tabsState , setTabState] = useState<"preview" | "code">("preview");
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
            <ResizableHandle className="hover:bg-primary transition-colors"  />
            <ResizablePanel
                defaultSize={65}
                minSize={50}
            >
                <Tabs
                    className="h-full gap-y-0"
                    defaultValue="preview"
                    value={tabsState}
                    onValueChange={(value)=> setTabState(value as 'preview' | 'code')}
                >   
                    <div className="w-full flex items-center p-2 border-b gap-x-2">
                        <TabsList className="h-8 p-0 rounded-md ">
                            <TabsTrigger value="preview" className="rounded-md">
                                <EyeIcon/> <span>Demo</span>
                            </TabsTrigger>
                            <TabsTrigger value="code" className="rounded-md">
                                <CodeIcon/> <span>Code</span>
                            </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center-center gap-x-2">
                            <Button asChild size="sm" variant="default">
                                    <Link href="/pricing">
                                        <CrownIcon/>Upgrade
                                    </Link>
                            </Button>
                        </div>
                        </div>
                        <TabsContent value="preview">
                            {!!activeFragment && <FragmentWeb data={activeFragment} />}
                        </TabsContent>
                        <TabsContent value="code" className="min-h-0">
                            {!!activeFragment?.files && (
                                <FileExplorer
                                    files={activeFragment.files as {[path :string] : string}}
                                />
                            )}
                        </TabsContent>  
                        </Tabs>

            </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )

 }

