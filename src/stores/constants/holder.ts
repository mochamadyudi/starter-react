export const HOLDER = {
  SET_HOLDER: "@holder/set",
  RESET: "@holder/reset",
  RESET_ALL: "@holder/reset-all",
} as const;

export type HolderActionType = (typeof HOLDER)[keyof typeof HOLDER];
