import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { Card, CardTitle, CardHeader, CardMedia } from 'material-ui';

const styles = {
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '80%',
    width: 400,
  },
};

const AdBanner = props => (
  <Card style={styles.card}>
    <CardHeader
      title="A word from our sponsors:"
      subtitle="We hope you like cats"/>
    <CardMedia
      overlay={<CardTitle title="Miaouuu" />}
    >
      <img alt="sponsor" src={`/ad?r=${props.id}`} />
    </CardMedia>
  </Card>
);

AdBanner.propTypes = {
  id: PropTypes.number,
};

export default pureRender(AdBanner);
