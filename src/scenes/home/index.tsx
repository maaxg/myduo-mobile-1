import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {UserContext} from '../../utils/context/user';
const Home: React.FC = ({}) => {
  const {user} = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <View>
      <Text>Estou em home!</Text>
    </View>
  );
};

export default Home;
