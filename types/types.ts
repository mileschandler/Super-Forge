export interface Response<T> {
  data: T;
  error?: Error;
}
