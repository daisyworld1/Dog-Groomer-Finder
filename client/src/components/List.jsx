import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <tr align="center">
    { props.items.map(item => <ListItem item={item}/>)}
  </tr>
)
export default List;