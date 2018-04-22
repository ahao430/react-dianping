import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render() {
    return (
      <h1>search</h1>
    );
  }
};
export default Search;
