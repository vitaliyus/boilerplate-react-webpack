/**
 *
 * Goods
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

class Goods extends React.Component {
  componentWillMount() {
    this.props.getGoods();
  }

  renderAllGoods() {
    if (!this.props.goods) {
      return <span>Nothing</span>;
    }

    return this.props.goods.all.map((item, index) => {
      return (<ListItem key={index} primaryText={item.name} leftAvatar={<Avatar src={item.photo} />}
        secondaryText={item.description}
              />);
    });
  }

  renderFavoriteGoods() {
    if (!this.props.goods) {
      return <span>Nothing</span>;
    }

    return this.props.goods.favorite.map((item, index) => {
      return (<ListItem key={index} primaryText={item.name} leftAvatar={<Avatar src={item.photo} />}
        rightIcon={<ActionAddShoppingCart />} secondaryText={item.description}
              />);
    });
  }

  render() {
    return (
      <div className='goods'>
        <List>
          <Subheader>Popular goods</Subheader>
          {this.renderFavoriteGoods()}
        </List>
        <Divider />
        <List>
          <Subheader>All goods</Subheader>
          {this.renderAllGoods()}
        </List>
      </div>
    );
  }
}

Goods.propTypes = {
  style: React.PropTypes.any,
  goods: React.PropTypes.any,
  getGoods: React.PropTypes.func
};

Goods.defaultValue = {
  goods : {
    favorite: [],
    all : []
  }
};

export default connect(modelSelector, containerActions)(Goods);
