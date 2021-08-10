import axios from 'axios';
import { ComicList, ComicLiked, ComicLikedResponse } from '../../app/ComicInterface';

const COMIC_API_URL = 'http://localhost:3000';

export function fetchComicList(params: any) {
  return new Promise<{ data: ComicList }>((resolve) =>
    axios.get('/comics', { params: params, withCredentials: true, baseURL: COMIC_API_URL, headers: {'ACCEPT': 'application/json'} })
      .then((response) => resolve(response))
  );
}

export function fetchCharacterComicList(params: any) {
  return new Promise<{ data: ComicList }>((resolve) => {
    axios.get('/comics/character_comics', { params: params, withCredentials: true, baseURL: COMIC_API_URL, headers: {'ACCEPT': 'application/json'} })
      .then((response) => resolve(response))
  });
}

export function likeComic(comicLiked: ComicLiked) {
  return new Promise<{ data: ComicLikedResponse }>((resolve) => {
    axios.put(`/comics/${comicLiked.id}/like`, comicLiked, { withCredentials: true, baseURL: COMIC_API_URL, headers: {'ACCEPT': 'application/json'} })
      .then((response) => resolve(response))
  });
}
