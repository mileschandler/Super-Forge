import Resolver from "@forge/resolver";
import { Response } from "../types/types";

const resolver = new Resolver();

resolver.define("getText", ({ context }): Response<string> => {
  const accountId = context.accountId;
  console.log(accountId);
  return {
    data: `Hello user: ${accountId}`,
  };
});

export const handler = resolver.getDefinitions();
