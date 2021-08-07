import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchComicAsync, likeComicAsync, selectComic } from './comicSlice';
import styles from './Comic.module.css';

export function Comic() {
  const comic = useAppSelector(selectComic);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComicAsync({}));
  })

  return (
    <div>
      <ul>
        <li>{comic.id}</li>
        <li>{comic.title}</li>
        <li>{comic.description}</li>
        <li>{comic.price}</li>
        <li>{comic.thumbnail}</li>
        <li>{comic.date}</li>
        <li>{comic.liked.toString()}</li>
        <li>{comic.type}</li>
        <li><button onClick={() => dispatch(likeComicAsync({ id: comic.id, liked: comic.liked, type: comic.type}))}>Like</button></li>
      </ul>
    </div>
  );
}
