import React from 'react';
import TreeMenu from './components/treeMenu'

const menuItems = [
  {
    id: 1,
    title: 'level one',
    children: [],
  },
  {
    id: 2,
    title: 'level one',
    children: [
      {
        id: 21,
        title: 'level two',
        children: [],
      },
    ],
  },
  {
    id: 3,
    title: 'level one',
    children: [
      {
        id: 31,
        title: 'level two',
        children: [
          {
            id: 311,
            title: 'level three',
            children: [
              {
                id: 3111,
                title: 'level four',
                children: [],
              },
              {
                id: 3112,
                title: 'level four',
                children: [
                  {
                    id: 31121,
                    title: 'level five',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <TreeMenu
      menuItems={menuItems}
      iconColor='gray'
      fontColor='black'
      hasLabelIcon
      leftSideLabel
    />
  );
}

export default App;
