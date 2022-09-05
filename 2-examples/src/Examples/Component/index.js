//rfcp

import React from "react";
import PropTypes from "prop-types";
import ColorExam from './ColorFunctional/ColorExam'
import ColorClass from './ColorClass/ColorClass'

function ComponentExample(props) {
  const { textContent } = props;
  return (
    <>
      {/* <ColorExam /> */}
      <ColorClass />
      {/* <div>{textContent}</div> */}
    </>
  );
}

ComponentExample.propTypes = {
  textContent: PropTypes.string,
};
ComponentExample.defaultProps = {
  textContent: "text default",
};

export default ComponentExample;
