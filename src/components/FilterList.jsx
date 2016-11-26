import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    width: '100%',
  },
  radioButton: {
    width: 'auto',
    verticalAlign: 'middle',
    marginRight: '5px',
  },
  labelname: {
    marginRight: '20px',
    verticalAlign: 'middle',
  }
};

/**
 * TODO: Displays 3 radio buttons allowing the user to filter the smileys list.
 * You could use material-ui.
 */
export default class FilterList extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeFilter: props.activeFilter,
      disabled: props.disabled,
      filterBy: props.filterBy
    }
  }

  static get propTypes() {
    return {
      /**
       * The active filter. Eg. id, price, size
       * @type {string}
       */
      activeFilter: PropTypes.string,

      /**
       * Whether the filter should be disabled or not
       * @type {boolean}
       */
      disabled: PropTypes.bool,

      /**
       * Callback that should be call to filter the smileys list.
       * @type {(filter: string): void}
       */
      filterBy: PropTypes.func,
    };
  }

  handleChange(event){
    /*this.setState({
      activeFilter: event.target.value,
      disabled: false,
      filterBy: () => filterBy(this.state.activeFilter)
    });*/
    
  }

  render() {
    const { activeFilter, disabled, filterBy } = this.state;

    /*console.log(activeFilter);
    console.log(disabled);
    console.log(filterBy);
    console.log(this.state);

    console.log(activeFilter, disabled, filterBy);*/

    return (
      <div className="layout vertical center-center" style={styles.container}>
        <p>Filter:</p>
        <form>
          <input type="radio" style={styles.radioButton} name="filter" value="id"  onClick={this.handleChange.bind(this)} /><label style={styles.labelname}>ID</label>
          <input type="radio" style={styles.radioButton} name="filter" value="price"  onClick={this.handleChange.bind(this)} /><label style={styles.labelname}>Price</label>
          <input type="radio" style={styles.radioButton} name="filter" value="size"  onClick={this.handleChange.bind(this)} /><label style={styles.labelname}>Size</label>
        </form>
      </div>
    );
  }
}
