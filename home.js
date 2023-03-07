/*import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';



const Home = (props) => {

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out');
    props.navigation.navigate('Signin');
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerHeaderText}>Menu</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    height: 80,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    height: 60,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;


///////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;


////////////////////////////////////////////////////////////////////////////////////////////////////

/*
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Home = (props) => {

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out');
    props.navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerHeaderText}>Menu</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    height: 80,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    height: 60,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
*/

//////////////////////////////////////////////////
/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid } from 'react-native';

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    this.drawer.openDrawer();
    setDrawerOpen(true);
  }

  const closeDrawer = () => {
    this.drawer.closeDrawer();
    setDrawerOpen(false);
  }

  return (
    <DrawerLayoutAndroid
      ref={ref => {this.drawer = ref}}
      drawerWidth={300}
      drawerPosition={'left'}
      onDrawerClose={() => setDrawerOpen(false)}
      onDrawerOpen={() => setDrawerOpen(true)}
      renderNavigationView={() => (
        <View style={styles.drawer}>
          <Text style={styles.drawerText}>Menu Item 1</Text>
          <Text style={styles.drawerText}>Menu Item 2</Text>
          <Text style={styles.drawerText}>Menu Item 3</Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <Text style={styles.menuButton} onPress={() => openDrawer()}>
          Menu
        </Text>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1,
  },
  drawer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  drawerText: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default Home;
*/

/////////////////////////////////////

/*
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid } from 'react-native';

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
    setDrawerOpen(false);
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={'left'}
      onDrawerClose={() => setDrawerOpen(false)}
      onDrawerOpen={() => setDrawerOpen(true)}
      renderNavigationView={() => (
        <View style={styles.drawer}>
          <Text style={styles.drawerText}>Menu Item 1</Text>
          <Text style={styles.drawerText}>Menu Item 2</Text>
          <Text style={styles.drawerText}>Menu Item 3</Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <Text style={styles.menuButton} onPress={() => openDrawer()}>
          ...
        </Text>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1,
  },
  drawer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  drawerText: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default Home;
*/

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from "./signin.js";
//import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const navigation = useNavigation();

  const openDrawer = () => {
    drawerRef.current.openDrawer();
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
    setDrawerOpen(false);
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={'left'}
      onDrawerClose={() => setDrawerOpen(false)}
      onDrawerOpen={() => setDrawerOpen(true)}
      renderNavigationView={() => (
        <View style={styles.drawer}>
          <TouchableWithoutFeedback onPress={() => {}}>  
          <Text style={styles.drawerButton}>Categories</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.drawerButton}>Top Offers</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.drawerButton}>Current Offers</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.drawerButton} onPress={() => navigation.navigate('Sign_in')}>Logout</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    >
      <View style={styles.container}>
        <Ionicons
          name="ios-menu"
          size={32}
          color="black"
          style={styles.menuButton}
          onPress={() => openDrawer()}
        />
        
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={() => alert('Discount Code: #nznj12')}>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => alert('Discount Code: #nznj12')}>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => alert('Discount Code: #nznj12')}>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => alert('Discount Code: #nznj12')}>
          
          </TouchableOpacity>
        </View>


      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1,
  },
  drawer: {
    flex: 1,
    backgroundColor: '#F67D64',
    padding: 20,
  },
  drawerText: {
    fontSize: 18,
    paddingVertical: 10,
  },

  drawerButton: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#FFF',
    textAlign: 'center',
    borderRadius: 3,
    marginVertical: 3,
    backgroundColor: '#F67D64',
    
  },

  cardContainer: {
    flexDirection: 'column',
    marginTop: 20,

  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  /*cardText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
*/
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10,
    opacity: 0.8,
  },

});

export default Home;

////////////////////////////////////////////////
/*
1 <Image
          style={styles.cardImage}
          source={require('./assets/levis.png')}
            />

2 <Image
          style={styles.cardImage}
          source={require('./assets/kababjee.jpg')}
            />

3 <Image
          style={styles.cardImage}
          source={require('./assets/ndure.png')}
            />

4 <Image
          style={styles.cardImage}
          source={require('./assets/kfc.png')}
            />

*/