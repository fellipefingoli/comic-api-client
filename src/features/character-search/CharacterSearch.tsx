import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './CharacterSearch.module.scss';
import { changeText } from './characterSearchSlice';

export function CharacterSearch() {
  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    if(event.target.value.length > 3)
      dispatch(changeText(event.target.value));
  }

  return (
    <div>
       <Form.Control size="lg" type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
}
