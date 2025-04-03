import axios, { AxiosError } from 'axios';
import i18n from '../core/i18n';

// Define the expected structure of an error response
interface ResponseError {
  error?:
    | string
    | { message?: string }
    | Record<string, any>
    | { message: string }[];
}

function getErrorMessage(err: unknown): string | string[] {
  if (!err) {
    return i18n.t('error-has-occurred');
  }

  const error = err as AxiosError<ResponseError>;

  // Network Issues
  if (error.message === 'Network Error') {
    return i18n.t('please-check-your-internet-connection-and-try-again');
  }

  if (error.message === 'Request aborted') {
    return i18n.t('request-had-been-canceled');
  }

  // Axios Errors
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data;

    if (!responseData) {
      return i18n.t('error-has-occurred');
    }

    const errorContent = responseData.error;

    // Case 1: If it's a string error
    if (typeof errorContent === 'string') {
      return errorContent;
    }

    // Case 2: If it's an object with a `message` property
    if (
      typeof errorContent === 'object' &&
      'message' in errorContent &&
      typeof errorContent.message === 'string'
    ) {
      return errorContent.message;
    }

    // Case 3: If it's a dictionary object (multiple field errors)
    if (typeof errorContent === 'object' && !Array.isArray(errorContent)) {
      return Object.values(errorContent).map(String); // Convert object values to strings
    }

    // Case 4: If it's an array of error messages
    if (Array.isArray(errorContent)) {
      return errorContent.map((e) => {
        if (typeof e === 'string') return e;
        if (
          typeof e === 'object' &&
          'message' in e &&
          typeof e.message === 'string'
        )
          return e.message;
        return JSON.stringify(e); // Fallback for unexpected structures
      });
    }
  }

  return i18n.t('error-has-occurred');
}

export { getErrorMessage };
