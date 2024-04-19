import { Error } from "@/types";

export function hasValidationError(
  array: Error[],
  key: string
): Error | undefined {
  const messageObj: Error | undefined = array?.find((obj) =>
    obj.path.some((p) => p === key)
  );

  return messageObj;
}
