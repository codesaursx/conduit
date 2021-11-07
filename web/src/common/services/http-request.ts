import { THeaders } from '@Interfaces/services/http-request.interface'
import axios, { AxiosResponse } from 'axios'
import { API_KEY, API_URL, MODE, PORT } from '@Config/env.config'

export class HttpRequest {
  private port: number
  private apiUrl: string
  private endpoint: string
  private headers: THeaders

  constructor() {
    this.endpoint = ''
    this.port = PORT
    this.apiUrl = API_URL
    this.headers = {
      api_key: API_KEY,
      'Content-Type': 'application/json'
    }
  }

  protected get<T = unknown>(): Promise<AxiosResponse<T>> {
    return axios.get<T>(this.urlBuilder(), { headers: this.headers })
  }

  protected post<T = unknown>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.post<T>(this.urlBuilder(), data, { headers: this.headers })
  }

  protected put<T = unknown>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.put<T>(this.urlBuilder(), data, { headers: this.headers })
  }

  protected delete<T = unknown>(): Promise<AxiosResponse<T>> {
    return axios.delete<T>(this.urlBuilder(), { headers: this.headers })
  }

  protected configEndpoint(endpoint: string): void {
    this.endpoint = endpoint
  }

  protected addToken(token: string): void {
    this.headers = {
      ...this.headers,
      Authorization: token
    }
  }

  private urlBuilder(): string {
    const port: number | string = MODE === 'dev' ? this.port : ''

    return `${this.apiUrl}${port}/${this.endpoint}`
  }
}
