import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-simple-toast';









const HeaderAlgo = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
      }}
    >

      <View
        style={{
          marginLeft: 15,
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
          }}
          onPress={() => {
            props.navigation.goBack()
          }}
        >
          <FontAwesome5Icon name='arrow-right' size={25} color='#3e3e3e' />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginLeft: 'auto',
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: 'orange',
            padding: 5,
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >3</Text>
        </View>
      </View>


    </View>

  )
}


const TopText = (props) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          paddingVertical: 50,
          maxWidth: '60%',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: props.theme.PRIMARY_FONT_FAMILY,
            fontSize: props.theme.MAIN_FONT_SIZE + 6,
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  )
}



const SelectAlgo = (props) => {

  const [options, setoptions] = React.useState([])

  React.useEffect(() => {
    let o = props.childs.map(child => {
      return { name: child.name, selected: false }
    })
    setoptions(o)
  }, [])

  return (
    <View
      style={{
        paddingVertical: 10,
      }}
    >
      {
        options.map((option, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  props.changedSelected(index)
                  const o = options.map((oo, ii) => {
                    if (index === ii) {
                      return { ...oo, selected: true }
                    }
                    return { ...oo, selected: false }
                  })
                  setoptions(o)
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#a1a1a1',
                    marginLeft: 10,
                    marginVertical: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    width: '90%',
                  }}
                >
                  <Text
                    style={{
                      maxWidth: '85%',
                      color: 'white',
                      fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                      fontSize: props.theme.MAIN_FONT_SIZE,
                    }}
                  >
                    {option.name}
                  </Text>
                  <View
                    style={{
                      marginLeft: 'auto',
                    }}
                  >
                    <View>
                      {
                        option.selected
                          ?
                          <FontAwesome5Icon name='check-square' solid size={20} color='#36a5ad' />
                          :
                          <FontAwesome5Icon name='square' light size={20} color='#36a5ad' />
                      }
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        })
      }
    </View>
  )
}


const NextButton = (props) => {


  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#32a885',
            marginLeft: 10,
            marginVertical: 5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: '90%',
          }}
        >

          <Text
            style={{
              maxWidth: '85%',
              color: 'white',
              fontFamily: props.theme.PRIMARY_FONT_FAMILY,
              fontSize: props.theme.MAIN_FONT_SIZE,
            }}
          >بعدی</Text>


        </View>
      </TouchableOpacity>

    </View>

  )
}





const AlgorithmScreen = (props) => {

  const [selected, setSelected] = React.useState(-1)


  let diagram = props.navigation.getParam('diagram', { ID: 0, name: 'nan', childs: [] })


  console.log(diagram.childs.length)



  return (

    <ScrollView
      style={{
        flex: 1,
        backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
      }}
    >

      <HeaderAlgo {...props} />



      <TopText {...props} text={diagram.name} />



      <SelectAlgo
        {...props}
        childs={diagram.childs}
        changedSelected={(s) => {
          setSelected(s)
        }}
      />



      <NextButton
        {...props}
        onPress={() => {
          if (selected > -1 && diagram.childs[selected]) {
            props.navigation.push('Algorithm', {
              diagram: diagram.childs[selected]
            })
          }
          else {
            Toast.show('لطفا یک گزینه را انتخاب کنید', Toast.LONG);
          }
        }}
      />



    </ScrollView>

  )
}






AlgorithmScreen.navigationOptions = () => {
  return {
    header: null
  }
}




const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmScreen);
