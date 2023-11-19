import * as React from 'react';
import { Appbar } from 'react-native-paper';

const BarraSuperior = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="PsFotos" />
    <Appbar.Action icon="account" onPress={() => {}} />
  </Appbar.Header>
);

export default BarraSuperior;