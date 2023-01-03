import * as util from "node-inspect-extracted";

export const getParamString = (param: unknown) => {
  const type = Object.prototype.toString.call(param);
  if (type === "[object Object]" || type === "[object Array]") {
    return `${util.inspect(param, {
      showHidden: false,
      depth: null,
      colors: true,
    })}`;
  }
  return `${param}`;
};

export const log = (...params: unknown[]) => {
  const str = new Error().stack?.toString();
  const Regexp = /\/(\w|.)+\.(js|ts):\d+:\d+/g;
  const location = Regexp.exec(str?.split("\n")[2] ?? "")?.[0];
  const paramStrings = [];
  for (const param of params) {
    paramStrings.push(getParamString(param));
  }
  console.log(`%c${location}\n${paramStrings.join(" ")}`, "color: green;");
};
