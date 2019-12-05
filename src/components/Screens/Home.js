import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {Button, Card} from 'native-base';

import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SectionGrid} from 'react-native-super-grid';

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

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        {this.state.data ? (
          <View style={styles.clinicsWrapper}>
            {this.state.data.map((clinic, i) => {
              return (
                <TouchableOpacity
                  key={clinic.ID}
                  style={styles.clinicButton}
                  onPress={() => {
                    this.props.navigation.navigate('ClinicMenu', {
                      clinicID: clinic.ID,
                      clinicName: clinic.name,
                    });
                  }}>
                  <Icon
                    name={clinic.icon_name}
                    size={50}
                    color={clinic.icon_color}
                  />
                  <Text
                    style={{
                      fontFamily: this.props.theme.PRIMARY_FONT_FAMILY_BOLD,
                      color: this.props.theme.PRIMARY_TEXT_COLOR,
                      fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                    }}>
                    {clinic.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <Text>isloaing...</Text>
        )}
      </View>
    );
  }
}

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

const items = [
  {name: 'TURQUOISE', code: '#1abc9c'},
  {name: 'EMERALD', code: '#2ecc71'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  {name: 'SUN FLOWER', code: '#f1c40f'},
  {name: 'CARROT', code: '#e67e22'},
  {name: 'ALIZARIN', code: '#e74c3c'},
  {name: 'CLOUDS', code: '#ecf0f1'},
  {name: 'CONCRETE', code: '#95a5a6'},
  {name: 'ORANGE', code: '#f39c12'},
  {name: 'PUMPKIN', code: '#d35400'},
  {name: 'POMEGRANATE', code: '#c0392b'},
  {name: 'SILVER', code: '#bdc3c7'},
  {name: 'ASBESTOS', code: '#7f8c8d'},
];

const HomeScreen = props => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const {sqlite} = props;
    sqlite.transaction(tx => {
      tx.executeSql('SELECT * FROM clinic')
        .then(res => {
          let data = [...res[1].rows.raw()];
          setData(data);
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
      {data ? (
        <SectionGrid
          itemDimension={180}
          // staticDimension={300}
          // fixed
          spacing={0}
          sections={[
            {
              title: 'Title1',
              data: data.slice(0, 6),
            },
            // {
            //   title: 'Title2',
            //   data: data.slice(0, 3),
            // },
            // {
            //   title: 'Title3',
            //   data: items.slice(12, 20),
            // },
          ]}
          style={styles.gridView}
          renderItem={({item, section, index}) => {
            console.log(item.icon_name);
            return (
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={() => {
                  // props.navigation.navigate('ClinicMenu', {
                  //   clinicID: item.ID,
                  //   clinicName: item.name,
                  // });
                }}>
                <View style={styles.itemView}>
                  <Icon
                    name={item.icon_name}
                    size={50}
                    color={item.icon_color}
                  />
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
