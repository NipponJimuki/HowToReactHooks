import React from 'react';
import ReactDom from 'react-dom';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

// DOM出力
ReactDom.render(<AddItem />, document.getElementById('content'));
