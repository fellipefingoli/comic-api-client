export interface Comic {
  id: number,
  title: string,
  description: string,
  price: number,
  thumbnail: string,
  date: string,
  liked: boolean,
  type: 'marvel'
}
export interface ComicList {
  comics: Comic[]
}
export interface ComicLiked {
  id: number,
  liked: boolean,
  type: 'marvel'
}

export interface ComicLikedResponse {
  comic: ComicLiked
}

