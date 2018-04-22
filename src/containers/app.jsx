import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import localStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      initDone: false
    };
  }

  render() {
    return (
      <div>
        <p>header</p>
        {this.state.initDone ? this.props.children : <div>加载中...</div>}
        <p>footer</p>
      </div>
    );
  }

  componentDidMount() {
    // 从localStorage获取城市
    let cityName = localStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = '北京';
    }

    // 将城市存储到redux中
    this.props.userInfoActionsFromOtherFile.update({
      cityName: cityName
    });
    this.setState({
      initDone: true
    });
  }
};

function mapStateToProps(state) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActionsFromOtherFile: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
