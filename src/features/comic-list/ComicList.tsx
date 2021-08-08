import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchComicListAsync, likeComicAsync, selectComicList } from './comicListSlice';
import styles from './Comic.module.css';

export function ComicList() {
  const comicList = useAppSelector(selectComicList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (comicList.comics.length === 0)
      dispatch(fetchComicListAsync({}));
  })

  return (
    <div>
      {comicList.comics.map((comic) => (
        <div>
          <ul>
            <li>{comic.id}</li>
            <li>{comic.title}</li>
            <li>{comic.description}</li>
            <li>{comic.price}</li>
            <li><img src={comic.thumbnail}/></li>
            <li>{comic.date}</li>
            <li>{comic.liked.toString()}</li>
            <li>{comic.type}</li>
            <li><button onClick={() => dispatch(likeComicAsync({ id: comic.id, liked: !comic.liked, type: comic.type}))}>Like</button></li>
          </ul>
        </div>
      ))}
    </div>
  );
}
