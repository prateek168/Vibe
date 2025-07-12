import { inngest } from "./client";
import { Agent, openai,gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {

    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer. You write readable, maintainable code. You write simple Next.js & React Snippets",
      model: gemini({ model: "gemini-2.0-flash" }),
    });

    const { output } = await codeAgent.run(`write the following snippet : ${event.data.value}`);
    return { output };
  },
);