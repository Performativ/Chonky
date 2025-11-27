import { Logger } from "./logger";
const NOOP_FUNCTION = (...args) => {
  Logger.warn(
    `The "NOOP_FUNCTION" from the constants module was called. This can indicate a bug in one of the components. Supplied args:`,
    args
  );
};
const isPromise = (value) => {
  if (typeof value !== "object" || !value) return false;
  const then = value.then;
  return then && typeof then === "function";
};
const defineFileAction = (action, effect) => {
  if (action.__payloadType !== void 0 && (action.hotkeys || action.button)) {
    const errorMessage = `Invalid definition was provided for file action "${action.id}". Actions that specify hotkeys or buttons cannot define a payload type. If your application requires this functionality, define two actions and chain them using effects.`;
    Logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  action.effect = effect;
  return action;
};
const findElementAmongAncestors = (maybeElement, predicate) => {
  if (!maybeElement) return maybeElement;
  if (predicate(maybeElement)) return maybeElement;
  if (maybeElement.parentElement) {
    return findElementAmongAncestors(maybeElement.parentElement, predicate);
  }
  return null;
};
const elementIsInsideButton = (buttonCandidate) => {
  return !!findElementAmongAncestors(
    buttonCandidate,
    (element) => element.tagName && element.tagName.toLowerCase() === "button"
  );
};
const getValueOrFallback = (value, fallback, desiredType) => {
  if (desiredType) {
    return typeof value === desiredType ? value : fallback;
  }
  return value !== void 0 ? value : fallback;
};
export {
  NOOP_FUNCTION,
  defineFileAction,
  elementIsInsideButton,
  findElementAmongAncestors,
  getValueOrFallback,
  isPromise
};
