import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
import { messageRouter } from '@/modules/messages/server/procedures';
import { projectRouter } from '@/modules/projects/server/procedures';
import { usageRouter } from '@/modules/usage/server/procedures';
export const appRouter = createTRPCRouter({

  messages: messageRouter,
  usage: usageRouter,
  projects: projectRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;