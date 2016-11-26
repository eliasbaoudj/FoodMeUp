import React, { PropTypes, Component } from 'react';
import pureRender from 'pure-render-decorator';
import { Card, CardText, CardHeader } from 'material-ui';
import moment from 'moment';

@pureRender
export default class Product extends Component {
  static get propTypes() {
    return {
      item: PropTypes.shape({
        price: PropTypes.number,
        size: PropTypes.number,
        face: PropTypes.string,
        date: PropTypes.string,
      }),
    };
  }

  computeDate() {
    const { item: { date } } = this.props;

    const momentDate = moment(date);
    const moment7DaysAgo = moment().subtract(7, 'days');

    if (moment7DaysAgo < momentDate) {
      return momentDate.fromNow();
    }

    return momentDate.format('MMM Do YYYY');
  }

  render() {
    const { item: { face, price, size } } = this.props;

    return (
      <Card>
        <CardHeader
          title={face}
          subtitle={this.computeDate()}
          titleStyle={{
            fontSize: size,
            width: 'auto',
            whiteSpace: 'nowrap',
          }}
          subtitleStyle={{
            width: 'auto',
            whiteSpace: 'nowrap',
          }}
          textStyle={{
            height: 75,
            paddingRight: 0,
          }}/>
          
        <CardText
          style={{
            width: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {`Price: $${(price / 100).toFixed(2)}`}
        </CardText>
      </Card>
    );
  }
}
