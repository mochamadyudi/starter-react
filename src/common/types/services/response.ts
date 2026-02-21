import {AnyObject} from "@/common/types/global.ts";
import {AxiosResponse} from "axios";

/**
 * Interface representing the basic schema for API responses
 */
export interface IResponseSchema {}

/**
 * Interface for pagination information in list responses
 */
export interface IPagination {
  /** Total number of records */
  total: number;
  /** Current page number */
  page: number;
  /** Number of records per page */
  limit: number;
  /** Maximum number of pages */
  max_page: number;
}

/**
 * Generic interface for API responses
 * @template Entity - Type of the response data, defaults to AnyObject
 */
export interface IResponse<Entity = AnyObject> {
  /** Response schema information */
  schema: IResponseSchema;
  /** Response payload data */
  data: Entity;
}

/**
 * Generic interface for paginated list responses
 * @template Entity - Type of the list items, defaults to AnyObject
 */
export interface IResponseList<Entity = AnyObject> extends IResponse<Entity[]> {
  /** Pagination details */
  pagination: IPagination;
}

/**
 * Type for Axios wrapped API response
 * @template Entity - Type of the response data, defaults to AnyObject
 */
export type IAResponse<Entity = AnyObject> = AxiosResponse<IResponse<Entity>>;

/**
 * Type for Axios wrapped paginated list response
 * @template Entity - Type of the list items, defaults to AnyObject
 */
export type IAResponseList<Entity = AnyObject> = AxiosResponse<
  IResponseList<Entity>
>;
