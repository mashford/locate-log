import { getParamString } from "../src";
import * as util from "node-inspect-extracted";

test("getParamString-Array", () => {
  const arr = [1, "2", { key: "value" }];
  expect(getParamString(arr)).toBe(
    `${util.inspect(arr, {
      showHidden: false,
      depth: null,
      colors: true,
    })}`
  );
});

test("getParamString-String", () => {
  expect(getParamString("str")).toBe("str");
});

test("getParamString-Boolean", () => {
  expect(getParamString(true)).toBe("true");
});

test("getParamString-Number", () => {
  expect(getParamString(-1234567)).toBe("-1234567");
});

test("getParamString-Object", () => {
  const obj = { key: "value" };
  expect(getParamString(obj)).toBe(
    `${util.inspect(obj, {
      showHidden: false,
      depth: null,
      colors: true,
    })}`
  );
});
