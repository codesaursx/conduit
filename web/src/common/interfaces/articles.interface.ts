export interface IArticles {
  id: number
  userId: number
  title: string
  about: string
  content: string
  tags: ITags[]
}

export interface ITags {
  id: number
  articleId: number
  text: string
}
