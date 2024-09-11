import { Text, SafeAreaView, StyleSheet,View,TextInput,Button,TouchableOpacity,Image } from 'react-native';
export default function Screen1d() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>
     <View style={styles.form}>
       <TextInput
        placeholder="Email"
         placeholderTextColor="black"
        style={styles.input}     
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
      />
      <Button
      style={{
        flex:2
      }}
      color='#E53935'
      title="Login"
      ></Button>
      <View style={{
       marginTop:15
      }}>
      <Text style={styles.p}>When you agree to terms and conditions</Text>
      <Text style={styles.p}>For got your password?</Text>
      <Text style={styles.p}>Or login with</Text>
      </View>
     </View>
     <View
     style={{
       flex:2,
       flexDirection:'row',
       justifyContent:'center',
       alignItem:'center',
       borderRadius:20,
     }}
     >
      <TouchableOpacity
      style={{
        width:70,
        height:30,
        backgroundColor:'#25479B',
        alignItems:'center',
        justifyContent:'center',
      }}
      >
       <Image
    source={require('../assets/iconFacebook')}
    style={styles.icon}
      />
      </TouchableOpacity
     
      > 
       <TouchableOpacity
       style={{
        width:70,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0F8EE0'
      }}
       >
       <Image
    source={require('../assets/iconFacebook')}
    style={styles.icon}
      />
      </TouchableOpacity> 
       <TouchableOpacity
        style={{
        width:70,
        height:30,
        backgroundColor:'#25479B',
        alignItems:'center',
        justifyContent:'center',
      }}
       >
       <Image
    source={require('../assets/iconFacebook')}
    style={styles.icon}
      />
      </TouchableOpacity
      
      > 
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#31AA5230',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform:'uppercase',
    flex:2
  },
  form:{
    flex:7,
    padding:20,
  },
  input:{
    borderColor: 'transparent',
    opacity:0.5,
    outLine:'none',
    backgroundColor:'#C4C4C44D',
    marginBottom:20,
    padding:15,
    fontSize:15,
    fontColor:'black'
  },
  p:{
    textAlign:'center',
    marginBottom:10
  },
  icon:{
    width:20,
    height:20
  }
});