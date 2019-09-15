export interface Dict<T> {
  [key: string]: T | undefined;
}

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  mapFunc: (arg: T, idx: number) => S
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dKey, index) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== "undefined") {
      out[dKey] = mapFunc(thisItem, index);
    }
  });
  return out;
}

// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(
  dict: Dict<T>,
  reducer: (val: S, item: T, idx: number) => S,
  init: S
): S {
  let val: S = init;
  Object.keys(dict).forEach((dKey, index) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== "undefined") {
      val = reducer(val, thisItem, index);
    }
    return val;
  });
  return val;
}
