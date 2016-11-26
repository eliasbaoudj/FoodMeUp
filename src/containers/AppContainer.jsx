import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as SmileysActions from '../actions/smileys';
import * as AdsActions from '../actions/ads';
import * as FiltersActions from '../actions/filters';
import { AppHeader, ProductGrid, FilterList } from '../components';

function mapStateToProps(state) {
  return {
    smileys: state.smileys.get('value').take(state.smileys.get('visible')).toJS(),
    isLoading: state.smileys.get('loading'),
    hasMoreSmileys: !state.smileys.get('complete'),
    ads: state.ads.get('value').toJS(),
    activeFilter: state.filters.get('value'),
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    {},
    bindActionCreators(SmileysActions, dispatch),
    bindActionCreators(AdsActions, dispatch),
    bindActionCreators(FiltersActions, dispatch)
  );
}

@connect(mapStateToProps, mapDispatchToProps)
class AppContainer extends Component {
  static get propTypes() {
    return {
      loadingSize: PropTypes.number,
      displaySize: PropTypes.number,

      smileys: PropTypes.array,
      hasMoreSmileys: PropTypes.bool,
      ads: PropTypes.array,
      isLoading: PropTypes.bool,
      activeFilter: PropTypes.string,

      requestAd: PropTypes.func,
      fetchSmileys: PropTypes.func,
      makeSmileysVisible: PropTypes.func,
      filterAndFetch: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      loadingSize: 100,
      displaySize: 30,
    };
  }

  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
    this.generateAd = this.generateAd.bind(this);
    this.filterBy = this.filterBy.bind(this);
  }

  componentWillMount() {
    const { loadingSize, displaySize, activeFilter, fetchSmileys, makeSmileysVisible } = this.props;

    fetchSmileys(loadingSize, activeFilter)
      .then(() => makeSmileysVisible(loadingSize));

    fetchSmileys(displaySize, activeFilter);
  }

  loadMore() {
    const { displaySize, isLoading, activeFilter, fetchSmileys, makeSmileysVisible } = this.props;

    makeSmileysVisible(displaySize);

    if (isLoading) return;

    fetchSmileys(displaySize, activeFilter);
  }

  generateAd(nb) {
    this.props.requestAd(nb);
  }

  filterBy(kind) {
    const { filterAndFetch, loadingSize } = this.props;

    filterAndFetch(kind, loadingSize);
  }

  render() {
    const { isLoading, smileys, hasMoreSmileys, ads, activeFilter } = this.props;

    return (
      <div className="flex layout vertical">
        <AppHeader />
        <FilterList
          disabled={isLoading}
          activeFilter={activeFilter}
          filterBy={this.filterBy} />
        <div className="flex layout vertical scroll">
          <ProductGrid
            hasMoreProducts={hasMoreSmileys}
            products={smileys}
            ads={ads}
            generateAd={this.generateAd}
            loadMore={this.loadMore} />
        </div>
      </div>
    );
  }
}

export default AppContainer;
