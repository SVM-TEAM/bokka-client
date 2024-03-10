export * from './dtoPayload';

export interface BaseResponse<T> {
  code: number;
  result: T | T[];
}
