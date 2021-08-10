import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchComicListAsync, likeComicAsync, selectComicList } from './comicListSlice';
import styles from './ComicList.module.scss';
import { Button, Col, Container, Row } from 'react-bootstrap';
import heartOff from './heart_off.png';
import heartOn from './heart_on.png';

export function ComicList() {
  const comicList = useAppSelector(selectComicList);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState({limit: 25, offset: 0})

  useEffect(() => {
    if (comicList.comics.length === 0)
      dispatch(fetchComicListAsync({}));
  }, [])

  useEffect(() => {
    dispatch(fetchComicListAsync(page))
  }, [page])

  const HeartButton = (props: any) => {
    if(props.liked) {
      return <img src={heartOn} />
    } else {
      return <img src={heartOff} />
    }
  }

  const nextPage = () => {
    setPage({...page, offset: (page.offset + page.limit)});
  }

  const previousPage = () => {
    setPage({...page, offset: (page.offset - page.limit)});
  }

  const PaginationButtons = () => {
    return (
      <Container fluid="md" className={styles.pagination}>
        <Row md={4}>
          <Col>
            {page.offset !== 0 && <Button variant="danger" onClick={previousPage}>Previous</Button>}
          </Col>
          <Col xs={6}></Col>
          <Col><Button variant="danger" onClick={nextPage}>Next</Button></Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>
      <PaginationButtons />
      <Container fluid="md">
        <Row md={5}>
          {comicList.comics.map((comic) => (
            <Col className={styles.comic_container}>
              <div className={styles.title}>{comic.title}</div>
              <div><img src={comic.thumbnail} className={styles.thumbnail} /></div>
              <div
                className={styles.heart_button}
                onClick={() => dispatch(likeComicAsync({ id: comic.id, liked: !comic.liked, type: comic.type}))}>
                <HeartButton liked={comic.liked} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <PaginationButtons />
    </div>
  );
}
