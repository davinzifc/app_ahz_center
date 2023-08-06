export interface ResponseInterface<T> {
  response: T;
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
}
