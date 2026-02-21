import Interceptor from "@/common/configs/interceptor.ts";

/**
 * Generic service class for handling API requests
 * @template Entity - The type of entity this service handles
 */
export default class Service<Entity = any> {
  /** Base URL pqrefix for API endpoints */
  public prefix: string | null = null;
  /** Entity instance associated with this service */
  public entity?: Entity | null;
  /** HTTP interceptor instance for handling requests */
  public interceptor: typeof Interceptor;

  /**
   * Creates an instance of Service
   * @param entity - Optional entity instance to associate with this service
   */
  constructor(entity?: Entity | null) {
    this.entity = entity;
    this.interceptor = Interceptor;
  }

  /**
   * Sets the URL prefix for API endpoints
   * @param prefix - The URL prefix to set
   */
  public set setPrefix(prefix: string | null) {
    this.prefix = prefix;
  }

  /**
   * Gets the current entity instance
   * @returns The current entity instance
   */
  public get getEntity() {
    return this.entity;
  }

  /**
   * Gets the current URL prefix
   * @returns The current URL prefix
   */
  public get getPrefix() {
    return this.prefix;
  }

  /**
   * Gets the HTTP interceptor instance
   * @returns The HTTP interceptor instance
   */
  public get http() {
    return this.interceptor;
  }

  /**
   * Combines the prefix with the provided URL
   * @param url - The URL to combine with the prefix
   * @returns The combined URL string
   */
  public url(url: string): typeof this.prefix & string {
    return [this.prefix, url].join("");
  }
}
