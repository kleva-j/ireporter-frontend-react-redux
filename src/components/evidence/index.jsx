/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Evidence = (props) => {
  const { setEvidence } = props;
  const [dataUrl, setDataUrl] = useState('');

  const loadFiles = (event) => {
    if (event.target.files && event.target.files[0]) {
      const { files } = event.target;
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const dataURL = fileReader.result;
        if (file.type.includes('image')) setDataUrl(dataURL);
      };
      if (file) fileReader.readAsDataURL(file);
      setEvidence(files);
    }
  };

  return (
    <>
      <div className="mg-b-lg">
        <label htmlFor="evidence" className="bold">Evidence :</label>
        <br />
        <input type="file" name="evidence" id="evidence" onChange={loadFiles} className="btn file1" accept="image/*" />
      </div>
      <div id="displayEvidence" className="mg-b-lg">
        {dataUrl && <img src={dataUrl} className="mx-width" alt="" />}
      </div>
    </>
  );
};

Evidence.propTypes = {
  setEvidence: PropTypes.func.isRequired
};

export default Evidence;
