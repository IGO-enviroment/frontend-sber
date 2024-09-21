import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null && 'status' in error;
}

export type FetchQueryApiError = FetchBaseQueryError & {
    data: {
      message: string;
    };
};

export function isApiError(error: unknown): error is FetchQueryApiError {
    return isFetchBaseQueryError(error) && typeof error.data === 'object';
}
