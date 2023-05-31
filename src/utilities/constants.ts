import { Constructor } from './types';

/**
 * No operation: a DRY constant for setting default callbacks
 */
export const NOOP = () => {};

/**
 * Empty Values: DRY constants for default values
 */
export const EMPTY = Object.freeze(Object.seal({
  ARR: [],
  BOOL: false,
  EL: globalThis.document?.createElement('div'),
  FN: NOOP,
  NODE: globalThis.document?.createTextNode(''),
  NUM: 0,
  OBJ: {},
  STR: '',
  SYM: Symbol('sym'),
}));

// this is defined outside the `empty` function because it doesn't need to be created more than once
/**
 * Used to associate types with their respective empty values in the `empty(Type)` function below
 */
const emptyMap = new Map();
emptyMap.set(Array, EMPTY.ARR);
emptyMap.set(Boolean, EMPTY.BOOL);
emptyMap.set(globalThis.HTMLElement, EMPTY.EL);
emptyMap.set(Function, EMPTY.FN);
emptyMap.set(globalThis.Node, EMPTY.NODE);
emptyMap.set(Number, EMPTY.NUM);
emptyMap.set(Object, EMPTY.OBJ);
emptyMap.set(String, EMPTY.STR);
emptyMap.set(Symbol, EMPTY.SYM);

/**
 * Gets a default (empty) value for the provided constructor
 */
export const empty = <T>(Type: Constructor<T>): T => emptyMap.get(Type);

/** 
 * RFC 5322 compliant regex for validating email addresses
 * @see https://stackoverflow.com/a/201378
 */
export const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

/**
 * Simplified email regex for html validation
 */
export const htmlEmailRegex = '^.+@.+\.[a-zA-Z]+$';
