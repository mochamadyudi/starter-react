import Service from "@/services/service.ts";
import {User} from "@/common/repository/user.ts";
import {IAResponse} from "@/common/types/services/response.ts";

/**
 * Service class handling authentication-related API operations.
 * @extends Service<User>
 */
class AuthService extends Service<User> {
  /** Base URL prefix for authentication endpoints */
  prefix = "/api/v1/auth";

  /**
   * Performs user login operation.
   * @returns Promise resolving to API response containing user data or null
   */
  async login(): Promise<IAResponse<User | null>> {
    const response = await this.http.get<IAResponse<User | null>>(
      this.url("login"),
    );
    return response.data;
  }
}

/** Singleton instance of the AuthService */
const authService = new AuthService(null);

export default authService;
