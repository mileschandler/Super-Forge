import { invoke } from "@forge/bridge";
import { Response } from "../../../../types/types";

export const getText = async (): Promise<Response<string>> => {
  const response = await invoke<Response<string>>("getText");
  return response;
};
