import React, { Component, PropTypes } from 'react';
import { CircularProgress } from 'material-ui';
import pureRender from 'pure-render-decorator';
import InfiniteScroll from 'react-infinite-scroller';

import GridItem from './GridItem';
import AdBanner from './AdBanner';
import Product from './Product';

const styles = {
  container: {
    margin: 10,
  },

};

@pureRender
export default class ProductGrid extends Component {
  static get propTypes() {
    return {
      products: PropTypes.array,
      hasMoreProducts: PropTypes.bool,
      ads: PropTypes.array,

      generateAd: PropTypes.func,
      loadMore: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      products: [],
      hasMoreProducts: true,
      ads: [],
    };
  }

  componentWillReceiveProps() {
    this.requestAds();
  }

  requestAds() {
    const { products, ads, generateAd } = this.props;

    const nbAds = (1 + (products.length / 20)) - ads.length;

    generateAd(nbAds);
  }

  /**
   * TODO: Generates a grid of Product and AdBanner
   *
   * An AdBanner is inserted into the grid after each group of 20 Products.
   * 
   * @return {Product|AdBanner[]} The list of components
   */
  generateGrid() {
    const { products, ads } = this.props;

    // products is an array
    // ads is an array
    let gridArray = [];
    let j = 0;

    for(var i = 0; i < products.length; i++){
      if (i % 20 != 0 || i == 0 ) {
        gridArray.push(products[i]);
      }else{
        gridArray.push(ads[j]);
        gridArray.push(products[i]);
        j++;
      }
    }

    return gridArray;
  }

  renderGridType(obj){
    if(typeof(obj) == "object"){
      return (<Product item={obj} />)
    } else {
      return (<AdBanner id={obj} />)
    }
  }

  render() {
    const { hasMoreProducts, loadMore } = this.props;
    const loader = (
      <div className="layout vertical center-center">
        <div>Loading...</div>
        <CircularProgress />
      </div>
    );

    return (
      <InfiniteScroll
        pageStart={0}
        loader={loader}
        loadMore={loadMore}
        hasMore={hasMoreProducts}
        useWindow={false}
      >

        <div style={styles.container} className="layout horizontal wrap">
          {this.generateGrid().map((c, i) => ( 
            <GridItem key={i} wide={c.type === AdBanner}>
              {this.renderGridType(c)}
            </GridItem>
          ))}
        </div>
        {!hasMoreProducts && <div className="layout vertical center">~ end of catalogue ~</div>}
      </InfiniteScroll>
    );
  }
}
