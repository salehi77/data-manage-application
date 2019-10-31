import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  static navigationOptions = {
    title: 'خانه',
  };

  render() {
    console.log(this.props.theme);

    let con = [
      {icon: 'brain', color: '#ff7a93'},
      {icon: 'burn', color: '#73dce6'},
      {icon: 'tooth', color: '#bbbbff'},
      {icon: 'heartbeat', color: '#e63535'},
      {icon: 'first-aid', color: '#5ad182'},
      {icon: 'crutch', color: '#bbaacc'},
      {icon: 'pills', color: '#9762e3'},
      {icon: 'bone', color: '#aaaadd'},
      {icon: 'bone', color: '#aaaadd'},
    ];
    let ale = true;
    return (
      <View>
        {ale ? (
          <View>
            <Text>ddd</Text>
          </View>
        ) : (
          <View>
            <Text>kkk</Text>
          </View>
        )}
      </View>
      // <View
      //   style={[
      //     styles.mainContainer,
      //     {backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR},
      //   ]}>
      //   <View style={styles.clinicsWrapper}>
      //     {con.map((c, i) => {
      //       return (
      //         <View key={i} style={styles.clinicWrapper}>
      //           <TouchableOpacity
      //             style={styles.clinicButton}
      //             onPress={() => console.info('clicked')}>
      //             <Icon name={c.icon} size={50} light color={c.color} />
      //             <Text>{c.icon}</Text>
      //           </TouchableOpacity>
      //         </View>
      //       );
      //     })}
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  clinicsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  clinicWrapper: {margin: 5, width: '30%'},
  clinicButton: {width: '100%', alignItems: 'center'},
});

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
