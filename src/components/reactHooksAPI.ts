import React from 'react';

export const useState: <T>(t: T) => [T, (prev: T | ((t: T) => T)) => void] = (React as any)
    .useState;
export const useEffect: <T>(f: () => void, value: T) => void = (React as any).useEffect;

export const useRef: <T>(t?: unknown) => React.RefObject<T> = (React as any).useRef;

export const useMemo: <T>(f: () => void, value: unknown) => T = (React as any).useMemo;

export const useCallback: <T>(f: () => void, value: unknown) => () => T = (React as any)
    .useCallback;

export const useImperativeMethods: <T>(
    ref: React.RefObject<T>,
    f: () => void,
    t: T,
) => void = (React as any).useImperativeMethods;

export const useReducer: <T, A>(
    reducer: (s: T, a: A) => T,
    t: T,
) => [T, (action: A) => void] = (React as any).useReducer;
