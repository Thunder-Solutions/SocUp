import { getURL } from './general';
import { GenericObj } from './types';

export type RequestWithAbort<T> = {
  request: Promise<T>,
  abortController: AbortController,
}

/**
 * A convenient GET call for JSON responses
 */
export const getJSON = <T>(endpoint: string, query: GenericObj<string> = {}): RequestWithAbort<T | string> => {

  // create abort controller to handle cancelled requests
  const abortController = new AbortController();
  const { signal } = abortController;

  // convert the endpoint to a full url with query parameters
  const path = `/api/${endpoint.replace(/^\//, '')}`;
  const params = Object.entries(query).reduce((params, [key, value], idx) => {
    if (idx === 0) params += '?';
    else params += '&';
    params += `${key}=${value}`;
    return params;
  }, '');
  const url = getURL(`${path}${params}`, { relativeTo: 'origin' });
  if (url === null) throw new Error('Invalid URL');

  // wrap the request in a promise to handle cancelled requests
  const request: Promise<T | string> = new Promise((resolve, reject) => {
    const doRequest = async () => {
      if (signal) signal.onabort = () => { reject(new Error('The operation was aborted')); };
      const response = await fetch(url);
      try {
        const json = await response.json();
        if (json.error) {
          console.error(json.message);
          reject(json.error);
        }
        resolve(json);
      } catch (err) {
        console.warn(`Invalid JSON response from ${getURL(url.href)} - Parsing response as plain text instead...`);
        const text = await response.text();
        console.warn(
          {
            details: {
              error: err,
              response: text,
            },
          },
        );
        resolve(text);
      }
    };
    doRequest();
  });

  // synchronously return the promise and abort controller
  return { request, abortController };
};
