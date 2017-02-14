import React from 'react';
import Dropzone from 'react-dropzone';

const Photos = props => {
  return (
    <div className="klatsch-edit-profile-photos container">
      <Dropzone>
        <div>Drop a few files here, to upload your profile pictures.</div>
      </Dropzone>
    </div>
  );
};

Photos.propTypes = {};

export default Photos;