import { container, injectable, injectAll } from "tsyringe";
import { UseCase } from "./use-case";
import { UseCaseHandler } from "./use-case-handler";
import { EmptyMiddleware } from "./middlewares/empty.middleware";
import { Type } from "../types/type";
import { UseCaseOptions } from "./use-case-options";

@injectable()
export class UseCaseService {
  constructor() {}

  async execute<In, Out>(
    useCase: Type<UseCase<In, Out>>,
    param?: In,
    options?: UseCaseOptions
  ): Promise<Out> {
    const requiredOptions = options ?? {
      silentError: false,
    };

    let next = UseCaseHandler.create({
      next: container.resolve(useCase as any),
      options: requiredOptions,
      middleware: container.resolve(EmptyMiddleware),
    });

    return next.handle(param) as Promise<Out>;
  }
}
