import react from 'react';

function LoadMore({ onClick }) {
  return (
    <button type="button" name="load" onClick={onClick}>
      Load more
    </button>
  );
}

export { LoadMore };
