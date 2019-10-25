import React, {Component} from 'react';
import {Text} from 'react-native';

import {connect} from 'react-redux';

class Sample extends Component {
  render() {
    console.log(this.props.sqlite);
    return <Text>sample</Text>;
  }
}

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sample);
