import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
    border-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
`;

const Loader = (props) => {
  const { loading } = props;
  return (
    <div className="sweet-loader">
      <ClipLoader
        css={override}
        sizeUnit="px"
        size={80}
        color="#dc3545"
        loading={loading}
      />
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};

export default Loader;
