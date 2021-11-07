export type THeaders = {
  api_key: string
  Authorization?: string
  'Content-Type': string
}

export type TResponse<T> = {
  data: TServiceResponse<T>
}

export type TServiceResponse<T> = {
  data: T
  statusCode: number
}
