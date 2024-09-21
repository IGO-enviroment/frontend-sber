/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyObjectType = Record<string, any>;

export type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;