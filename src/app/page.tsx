import { useTRPC } from "@/trpc/client";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";
import { getQueryClient,trpc } from "@/trpc/server"
import { Client } from "./client";
import { Suspense } from "react";
const Page = async() => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"Yash" }))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<p>Loading..</p>}>
      <Client/>
    </Suspense>
    </HydrationBoundary>
    
  );
}
export default Page;  