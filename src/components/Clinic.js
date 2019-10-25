import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

class Clinic extends Component {
  static navigationOptions = {
    title: 'کلینیک‌ها',
  };

  state = {
    data: null,
  };

  componentDidMount() {
    const {sqlite} = this.props;

    sqlite.transaction(tx => {
      tx.executeSql('SELECT * FROM clinic')
        .then(res => {
          this.setState({
            data: [...res[1].rows.raw()],
          });
        })
        .catch(error => {
          console.error('err');
        });
    });
  }

  clinicSelected = id => {
    this.props.navigation.navigate('ClinicMenu', {
      clinicID: id,
    });
  };

  render() {
    return this.state.data ? (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.ID.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => this.clinicSelected(item.ID)}
                style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    ) : (
      <Text>isloaing...</Text>
    );

    // <Text>clinic</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#cccccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
});

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clinic);
