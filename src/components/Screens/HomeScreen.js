import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import HomeHeaderElement from '../elements/Headers/HomeHeaderElement';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = props => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {

    const { sqlite } = props;
    sqlite.transaction(tx => {
      tx.executeSql('SELECT * FROM clinic')
        .then(res => {
          let data = [...res[1].rows.raw()];
          setData(data);
          // setData(null)
        })
        .catch(error => {
          console.error('err');
        });
    });
  }, []);


  return (

    <View
      style={{
        flex: 1,
        backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
      }}>



      {
        data
          ?
          (
            <SectionGrid
              itemDimension={180}
              spacing={0}
              sections={[
                {
                  title: 'Title1',
                  data: data.slice(0),
                },
              ]}
              style={styles.gridView}
              renderItem={({ item, section, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => {
                      props.navigation.navigate('ClinicMenu', {
                        clinicID: item.ID,
                        clinicName: item.name,
                      });
                    }}>
                    <View style={styles.itemView}>
                      <FontAwesome5Icon
                        name={item.icon_name}
                        size={50}
                        color={item.icon_color}
                      />
                      <Text style={[styles.itemName, { fontFamily: props.theme.PRIMARY_FONT_FAMILY }]}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          )
          :
          (
            <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )
      }

    </View>

  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    header: <HomeHeaderElement navigation={navigation} />,
    // title: 'home',
  };
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    margin: 0,
    height: 150,
    borderColor: '#bbb',
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  itemView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
  },
  itemName: {
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
