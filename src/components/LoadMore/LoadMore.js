import react from 'react';
import { LoadButton } from './LoadMoreStyled';

function LoadMore({ onClick }) {
  return (
    <LoadButton type="button" name="load" onClick={onClick}>
      Load more
    </LoadButton>
  );
}

export { LoadMore };
