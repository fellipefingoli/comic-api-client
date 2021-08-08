import { Comic, ComicLiked } from '../../app/ComicInterface';

export function fetchComicList(params: any) {
  return new Promise<{ data: Comic[] }>((resolve) =>
    setTimeout(() => resolve({
      data: [{
        id: 1,
        title: 'Spider-man',
        description: 'A comic book about Spiderman',
        price: 20.0,
        thumbnail: '',
        date: '2021-06-05',
        liked: false,
        type: 'marvel'
      },
      {
        id: 2,
        title: 'Incridible Hulk',
        description: 'A comic book about Hulk',
        price: 25.1,
        thumbnail: '',
        date: '2021-09-10',
        liked: false,
        type: 'marvel'
      }
    ]
    }), 2000)
  );
}

export function likeComic(comicLiked: ComicLiked) {
  return new Promise<{ data: ComicLiked }>((resolve) => {
    setTimeout(() => resolve({
      data: {
        id: comicLiked.id,
        liked: comicLiked.liked,
        type: 'marvel'
     }
    }), 2000)
    }
  );
}
