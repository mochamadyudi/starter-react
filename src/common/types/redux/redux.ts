import {AnyObject} from "@/common/types/global.ts";

export type ReduxAction<RecordType = AnyObject> = {
	type: string;
	payload: RecordType | Partial<RecordType>;
};

export type BaseState<State = AnyObject> = {
	collection: any;
} & State;
