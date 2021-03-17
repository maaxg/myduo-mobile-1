import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, InputStyle} from '../../styles';
import {Input} from '../atoms';

export interface Props {
  name: string;
  setName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  genre: string;
  setGenre: (value: string) => void;
  birthDate: string;
  setBirthDate: (value: string) => void;
}

const SignUpForm: React.FC<Props> = ({
  name,
  setName,
  lastName,
  setLastName,
  genre,
  setGenre,
  birthDate,
  setBirthDate,
}) => {
  return (
    <>
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Nome'}
        value={name}
        onChange={(text) => setName(text)}
      />
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Sobrenome'}
        value={lastName}
        onChange={(text) => setLastName(text)}
      />
      <View style={Container.container.ROW}>
        <Input
          inputStyle={[InputStyle.input.SIGNUP_SPLIT, {marginRight: '3%'}]}
          placeholder={'Gênero'}
          value={genre}
          onChange={(text) => setGenre(text)}
        />
        <Input
          inputStyle={InputStyle.input.SIGNUP_SPLIT}
          placeholder={'Data de nascimento'}
          value={birthDate}
          onChange={(text) => setBirthDate(text)}
        />
      </View>
    </>
  );
};
export default SignUpForm;
