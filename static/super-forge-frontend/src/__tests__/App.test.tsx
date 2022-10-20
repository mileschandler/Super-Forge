import "jsdom-global/register";
import React from "react";
import { it, describe, expect, vi } from "vitest";
import { shallow } from "enzyme";
import App from "../App";
import { getText } from "../api/handler";
import { Response } from "../../../../types/types";

vi.mock("../api/handler", () => {
  return {
    getText: (): Promise<Response<string>> => {
      return Promise.resolve({
        data: "test-account-id",
      });
    },
  };
});

describe("<App/>", () => {
  it("should render itself", async () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
    expect(wrapper.contains(<h1>⚡Super Forge⚡</h1>)).toBeTruthy();
  });
});
