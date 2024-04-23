import { injectable } from "tsyringe";
import { Middleware } from "./middleware";
import { UseCase } from "../use-case";

@injectable()
export class EmptyMiddleware implements Middleware {
  intercept(params: unknown, next: UseCase): Promise<unknown> {
    return next.handle(params);
  }
}
