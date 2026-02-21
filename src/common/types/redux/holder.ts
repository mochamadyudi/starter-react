import {AnyObject} from "@/common/types/global.ts";

export type HolderSeverityType = "success" | "error" | "warning" | "info";
export type HolderKey =
  | "global:confirm"
  | "global:toast"
  | "global:cancel"
  | "global:loading"
  | "global:modal"
  | "global:notification";

export type CommonHolder = {
  open: boolean;
  onClose: () => void;
};

export type HolderKeyMap = {
  "global:confirm": {
    open: boolean;
    title?: string;
    message?: string;
    label?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    severity?: HolderSeverityType;
    onConfirm?: () => void;
    onCancel?: () => void;
    [key: string]: any;
  };
  "global:cancel": {
    open: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    reason?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  };
  "global:toast": {
    open: boolean;
    onClose: () => void;
    message?: string;
    severity?: "success" | "error" | "warning" | "info";
    duration?: number;
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
  };
  "global:notification": CommonHolder &
    AnyObject & {
      title?: string;
      message?: string;
      unreadCount?: number;
    };
  "global:loading": AnyObject & {
    active: boolean;
    message?: string;
    overlay?: boolean;
  };
  "global:modal": CommonHolder &
    AnyObject & {
      title?: string;
      modalProps?: AnyObject;
      closable?: boolean;
    };
};

export type HolderState<K extends HolderKey> = HolderKeyMap[K];

export interface HolderStateMap extends HolderKeyMap {}
