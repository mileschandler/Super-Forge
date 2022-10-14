import { invoke } from "@forge/bridge";
import { Response } from "../../../../types/types";

export const getText = async (): Promise<Response<string>> => {
  const response = (await invoke("getText")) as Response<string>;
  return response;
};
