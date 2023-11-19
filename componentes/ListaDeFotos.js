import * as React from 'react';
import { List } from 'react-native-paper';

const ListaDeFotos = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="image" />}
  />
);

export default ListaDeFotos;