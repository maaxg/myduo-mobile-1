import React from 'react';
import {View, Text} from 'react-native';
import {Container, Fonts, InputStyle} from '../../styles';
import {Input} from '../atoms';

export interface Props {
  phone: string;
  setPhone: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
}

const SecondSignUpForm: React.FC<Props> = ({
  phone,
  setPhone,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <>
      <View style={Container.container.ROW}>
        <Input
          inputStyle={[InputStyle.input.SIGNUP_SPLIT, {marginRight: '3%'}]}
          placeholder={'Celular'}
          value={phone}
          onChange={(text) => setPhone(text)}
        />
        <Input
          inputStyle={InputStyle.input.SIGNUP_SPLIT}
          placeholder={'Email'}
          value={email}
          onChange={(text) => setEmail(text)}
        />
      </View>
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Senha'}
        value={password}
        onChange={(text) => setPassword(text)}
      />
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Confirmar senha'}
        value={confirmPassword}
        onChange={(text) => setConfirmPassword(text)}
      />
      <View style={{width: '90%'}}>
        <Text style={Fonts.fonts.PRIVACY_POLICY}>
          Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de
          Dados e Política de Cookies. Você poderá receber notificações por SMS
          e cancelar isso quando quiser.
        </Text>
      </View>
    </>
  );
};
export default SecondSignUpForm;
