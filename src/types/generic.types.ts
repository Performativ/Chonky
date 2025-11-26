/**
 * Most generic type definitions are based from tsdef
 */

export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;
export type Nilable<T> = T | Nullable<T> | Undefinable<T>;
export type MaybeAsyncFn<T, Args extends unknown[] = []> = (
    ...args: Args
) => MaybePromisedValue<T>;
export type MaybePromisedValue<T> = Promise<T> | T;
export type WritableProps<T> = { -readonly [P in keyof T]: T[P] };
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I>
        ? Array<DeepPartial<I>>
        : DeepPartial<T[P]>;
};
