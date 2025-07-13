import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
import { messageRouter } from '@/modules/messages/server/procedures';
import { projectRouter } from '@/modules/projects/server/procedures';
export const appRouter = createTRPCRouter({

  messages: messageRouter,
  projects: projectRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;