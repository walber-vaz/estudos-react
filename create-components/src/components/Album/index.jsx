import React from 'react';

function Album(props) {
  const { album } = props;
  return (
    <section>
      <img src={album.image} alt={album.title} />
      <h2>{album.title}</h2>
      <p>{album.releaseDate.year}</p>
      <p>
        Lançamento:
        {`${album.releaseDate.day}/${album.releaseDate.month}/${album.releaseDate.year}`}
      </p>
      <p>Gravadora: {album.others.recordCompany}</p>
      <p>Formatos: {album.others.formats}</p>
    </section>
  );
}

export default Album;