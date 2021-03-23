import { useState, useCallback } from "react";

export default function useApi(serviceMethod) {
  const [result, setResult] = useState();
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(undefined);

  const apiCallback = useCallback(
    async (...args) => {
      setError(undefined);
      setFetching(true);
      try {
        const result = await serviceMethod(...args);
        setResult(result.data);
      } catch (error) {
        setError(error);
      }
      setFetching(false);
    },
    [serviceMethod]
  );

  const apiResponse = {
    result,
    error,
    isFetching,
  };
  return [apiResponse, apiCallback];
}
