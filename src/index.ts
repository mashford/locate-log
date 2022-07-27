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

export const getLocation = () => {
  const str = new Error().stack?.toString();
  const Regexp = /\/(\w|.)+\.(js|ts):\d+:\d+/g;
  return Regexp.exec(str?.split("\n")[2] ?? "")?.[0];
};

export const log = (...params: unknown[]) => {
  const paramStrings = [];
  for (const param of params) {
    paramStrings.push(getParamString(param));
  }
  console.log(`%c${getLocation()}\n` + paramStrings.join(" "), "color: green;");
};
