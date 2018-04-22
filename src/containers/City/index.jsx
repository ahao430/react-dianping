import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class City extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render() {
    return (
      <h1>city</h1>
    );
  }
};
export default City;
