import React, {useState, useContext} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {ContextProps} from '../../utils/types/user-types';
import {
  ImagesStyles,
  Container,
  InputStyle,
  ButtonStyle,
  Fonts,
  Color,
} from '../../styles';
import {Input, Button} from '../../components/atoms';
import {ScrollView} from 'react-native-gesture-handler';
import {SignUp} from '../../components/organisms';
import {UserContext} from '../../utils/context/user';
import {useNavigation} from '@react-navigation/native';
const Background = require('../../assets/images/background.png');
const ShortLogo = require('../../assets/images/myduo-shortlogo.png');

const Login: React.FC = ({}) => {
  const {navigation} = useNavigation();
  const {signIn} = useContext(UserContext);
  //login state
  const [email, setEmail] = useState<string>('');
  const [password, setPassoword] = useState<string>('');
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false);

  async function login() {
    const loginParams = {
      email: email,
      password: password,
    };
    signIn(loginParams);
    navigation.navigate('Home');
  }
  return (
    <ImageBackground source={Background} style={ImagesStyles.BACKGROUND}>
      <View style={Container.container.GENERAL}>
        <Image source={ShortLogo} style={ImagesStyles.SHORT_LOGO} />
        <ScrollView style={Container.container.FLEX}>
          {!isSignUpVisible ? (
            <View style={Container.container.LOGIN_CONTAINER}>
              <Input
                placeholder={'Email'}
                inputStyle={InputStyle.input.LOGIN}
                value={email}
                onChange={(text) => setEmail(text)}
              />
              <Input
                placeholder={'Password'}
                inputStyle={InputStyle.input.LOGIN}
                value={password}
                onChange={(text) => setPassoword(text)}
                secureTextEntry={true}
              />
              <Button
                description={'Entrar'}
                onPress={() => login()}
                buttonStyle={ButtonStyle.buttons.LOGIN}
                descriptionStyle={Fonts.fonts.GENERAL}
              />
              <View style={Container.container.LINE} />
              <Button
                description={'Esqueceu a senha?'}
                onPress={() => {}}
                descriptionStyle={Fonts.fonts.FORGET_PASSWORD}
              />
              <Button
                testID={'signup-button'}
                textTestID={'signup-text'}
                description={'Criar nova conta'}
                onPress={() => setIsSignUpVisible(true)}
                buttonStyle={ButtonStyle.signUpButtons(Color.STRONG_ORANGE)}
                descriptionStyle={Fonts.fonts.GENERAL}
              />
            </View>
          ) : (
            <SignUp
              isVisible={isSignUpVisible}
              setIsVisible={setIsSignUpVisible}
            />
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default Login;
