// https://dev.to/squashbugler/using-crud-operations-with-react-swr-for-mutating-rest-api-cache-54kg
// components/use-crud-full.js

import { isArray, isEmpty } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

//
const getObjectDifference = (obj1, obj2) => {
  const diff = Object.keys(obj1).reduce((result, key) => {
    if (!obj2.hasOwnProperty(key)) {
      result.push(key);
    }
    return result;
  }, Object.keys(obj2));

  return Object.fromEntries(
    diff.map((key) => {
      return [key, obj2[key]];
    })
  );
};

export const useCrud = (url, key, fetchOptions) => {
  const [loading, setIsLoading] = useState(true);

  const loadingTimeout = () => {
    setIsLoading(false);
  };

  const fetcher = useCallback(async (url) => {
    const response = await fetch(url);
    return response;
  }, []);

  const { data, error, isValidating, mutate } = useSWR(
    url,
    fetcher,
    fetchOptions
  );

  useEffect(() => {
    if (isValidating) {
      setIsLoading(true);
      return;
    }
    setTimeout(loadingTimeout, 500);
  }, [isValidating]);

  //
  const create = useCallback(
    async (newObject, shouldRevalidate = false) => {
      const response = await fetch(url, {
        body: newObject,
        method: "POST",
      });
      const result = response;
      if (data && mutate) {
        let newData = data;
        if (isArray(data)) {
          newData = data.concat(result);
        }
        await mutate([new Set(newData)], shouldRevalidate);
      }
      return result;
    },
    [url, data, mutate]
  );

  //
  const remove = useCallback(
    async (body, shouldRevalidate = false) => {
      const response = await fetch(url, {
        body,
        method: "DELETE",
      });
      const result = response;
      if (data && mutate) {
        if (isArray(result)) {
          const updatedObjects = [data].filter((current) => {
            const isDeleted = result.find(
              (result) => result[key] === current[key]
            );
            return !isDeleted;
          });
          await mutate(
            result.length === 0 ? [] : updatedObjects,
            shouldRevalidate
          );
        } else {
          const deletedIndex = data.findIndex(
            (object) => object[key] === result[key]
          );
          if (deletedIndex >= 0) {
            const updatedObjects = [data];
            updatedObjects.splice(deletedIndex, 1);
            await mutate(updatedObjects, shouldRevalidate);
          }
        }
      }
      return result;
    },
    [url, data, key, mutate]
  );

  //
  const update = useCallback(
    async (updatedObject, shouldRevalidate = false) => {
      const currentObjectIndex = data.findIndex(
        (object) => object[key] === updatedObject[key]
      );
      const currentObject = data[currentObjectIndex];
      const diff = currentObject
        ? getObjectDifference(currentObject, updatedObject)
        : null;
      if (!diff) {
        throw new Error("Update Failed");
      }
      if (isEmpty(diff)) {
        return currentObject;
      }
      const response = await fetch(url, {
        body: { diff, id },
        method: "PATCH",
      });
      if (data && mutate) {
        const updatedObjects = [data];
        updatedObjects.splice(currentObjectIndex, 1, response);
        await mutate(updatedObjects, shouldRevalidate);
      }
      return response;
    },
    [url, data, mutate, key]
  );

  //
  const memoizedData = useMemo(
    () => (!isEmpty(data) ? filterDeleted(data) : []),
    [data]
  );

  return {
    create,
    fetch: { data: memoizedData, error, loading, mutate },
    remove,
    update,
  };
};
