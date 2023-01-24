import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function ErrorPage({ e }) {
  return (
    <>
      <div>{e?.status}</div>
      <div>{e?.statusText}</div>
    </>
  );
}

ErrorPage.propTypes = {
  e: PropTypes.shape({}),
}.isRequired;
