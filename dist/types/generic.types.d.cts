/**
 * Most generic type definitions are based from tsdef
 */
type Nullable<T> = T | null;
type Undefinable<T> = T | undefined;
type Nilable<T> = T | Nullable<T> | Undefinable<T>;
type MaybeAsyncFn<T, Args extends unknown[] = []> = (...args: Args) => MaybePromisedValue<T>;
type MaybePromisedValue<T> = Promise<T> | T;
type WritableProps<T> = {
    -readonly [P in keyof T]: T[P];
};
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I> ? Array<DeepPartial<I>> : DeepPartial<T[P]>;
};

export type { DeepPartial, MaybeAsyncFn, MaybePromisedValue, Nilable, Nullable, Undefinable, WritableProps };
