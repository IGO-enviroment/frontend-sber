import { UseQueryOptions } from "@tanstack/react-query";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyObjectType = Record<string, any>;

export type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;

export type AnyFunctionType = (...args: any[]) => any;


export type IQueryOptions<T> = UseQueryOptions<T, Error>;