import { useCallback, useState } from "react";
import { useResolve } from "../dependency-injection/use-resolve";
import { Type } from "../types/type";
import { UseCase } from "../use-case/use-case";
import { UseCaseService } from "../use-case/use-case.service";
import { UseCaseOptions } from "../use-case/use-case-options";

export function useGetUseCase<In = void, Out = void>(
  useCase: Type<UseCase<In, Out>>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Out>();
  const [useCaseService] = useResolve([UseCaseService]);

  const execute = useCallback(
    async (param: In, options?: UseCaseOptions) => {
      setIsLoading(true);
      const response = await useCaseService
        .execute(useCase, param, options)
        .finally(() => setIsLoading(false));
      setResult(response);
    },
    [useCase]
  );

  return { isLoading, execute, result };
}
