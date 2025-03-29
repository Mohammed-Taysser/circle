import axios, { AxiosError } from 'axios';
import i18n from '../core/i18n';

function getErrorMessage(err: unknown) {
  const error = err as AxiosError<ResponseError>;

  if (!error) {
    return null;
  }

  if (axios.isAxiosError(error)) {
    if (error?.message === 'Network Error') {
      return i18n.t('please-check-your-internet-connection-and-try-again');
    }

    if (error?.message === 'Request aborted') {
      return i18n.t('request-had-been-canceled');
    }

    if (
      typeof error?.response?.data?.error === 'object' &&
      typeof error?.response?.data?.error?.message === 'string'
    ) {
      return error?.response?.data?.error?.message;
    }

    if (typeof error?.response?.data?.error === 'string') {
      return error?.response?.data?.error;
    }

    if (typeof error?.response?.data?.error === 'object') {
      return Object.values(error?.response?.data?.error);
    }

    if (Array.isArray(error?.response?.data?.error)) {
      return (error?.response?.data?.error as { message: string }[]).map(
        (error) => error.message,
      );
    }
  }

  return i18n.t('error-has-occurred');
}

export { getErrorMessage };
