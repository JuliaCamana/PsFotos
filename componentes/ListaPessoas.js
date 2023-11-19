import * as React from 'react';
import { List } from 'react-native-paper';

const ListaPessoas = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="account" />}
  />
);

export default ListaPessoas;