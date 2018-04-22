import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class User extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render() {
    return (
      <h1>user</h1>
    );
  }
};
export default User;
