import { IArticles } from './articles.interface'

export interface IUser {
  id: number
  username: string
  email: string
  password: string
  profilePic: string
  bio: string
  following?: IUser[]
  followers?: IUser[]
  articles?: IArticles[]
  favoriteArticles?: IArticles[]
}

export type TSignInUser = Pick<IUser, 'email' | 'password'>
