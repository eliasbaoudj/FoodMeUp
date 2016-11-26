import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

const GridItem = props => (
  <div
    style={{
      minWidth: props.wide ? '100%' : 'auto',
      margin: 5,
    }}
    className={!props.wide && 'flex'}
  >

    {props.children}

  </div>
);

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
};

export default pureRender(GridItem);
