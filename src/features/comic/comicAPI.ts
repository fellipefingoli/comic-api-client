import { Comic, ComicLiked } from '../../app/ComicInterface';

export function fetchComic(params: any) {
  return new Promise<{ data: Comic }>((resolve) =>
    setTimeout(() => resolve({
      data: {
        id: 1,
        title: 'Spider-man',
        description: 'A comic book about Spiderman',
        price: 20.0,
        thumbnail: '',
        date: '2021-06-05',
        liked: false,
        type: 'marvel'
      }
    }), 5000)
  );
}

export function likeComic(comicLiked: ComicLiked) {
  return new Promise<{ data: ComicLiked }>((resolve) =>
    setTimeout(() => resolve({
      data: {
        id: 1,
        liked: !comicLiked.liked,
        type: 'marvel'
     }
    }), 2000)
  );
}
