export interface Service {
  status: 'init' | 'loading' | 'loaded' | 'error';
  error?: Error;
  payload: [];
}
