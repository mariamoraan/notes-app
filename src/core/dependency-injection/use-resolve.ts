import { InjectionToken, container } from "tsyringe";

import { Type } from "../types/type";

export function useResolve<T>(types: Type<T>[]): T[] {
  return types.map((x) => container.resolve(x as InjectionToken<T>));
}
