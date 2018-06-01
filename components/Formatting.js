const Separator = () => (
  <View
    style={{
      width: Dimensions.get('window').width - 100,
      height: 1,
      backgroundColor: '#ccc',
      marginHorizontal: 50,
      marginTop: 15,
      marginBottom: 15,
    }}
  />
);

const Spacer = () => (
  <View
    style={{
      marginBottom: Platform.OS === 'android' ? 20 : 5,
    }}
  />
);
