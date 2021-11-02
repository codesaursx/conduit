import { IArticles } from './articles.interface'

export interface IReduxUser {
  isLoggedIn: boolean
  data: IUser
}

export interface IUser {
  id: string
  username: string
  email: string
  password: string
  following: IUser[]
  followers: IUser[]
  articles: IArticles[]
}
