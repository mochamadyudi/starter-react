import {User} from "@/common/repository/user.ts";

export interface StateAuth {
  loading: boolean;
  user: User | null;
  isAuth: boolean;
  token: string | null;
}
