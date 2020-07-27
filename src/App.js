import React from 'react';
import TreeMenu from './components/treeMenu'

const menuItems = [
  {
    id: 1,
    checked: true,
    title: 'level one',
    children: [],
  },
  {
    id: 2,
    checked: false,
    title: 'level one',
    children: [
      {
        id: 21,
        checked: false,
        title: 'level two',
        children: [],
      },
    ],
  },
  {
    id: 3,
    checked: false,
    title: 'level one',
    children: [
      {
        id: 31,
        checked: false,
        title: 'level two',
        children: [
          {
            id: 311,
            checked: false,
            title: 'level three',
            children: [
              {
                id: 3111,
                checked: false,
                title: 'level four',
                children: [],
              },
              {
                id: 3112,
                checked: false,
                title: 'level four',
                children: [
                  {
                    id: 31121,
                    checked: false,
                    title: 'level five',
                    children: [],
                  },
                ],
              },
              {
                id: 3113,
                checked: false,
                title: 'level four',
                children: [
                  {
                    id: 31131,
                    checked: false,
                    title: 'level four',
                    children: []
                  }
                ],
              },
              {
                id: 3114,
                checked: false,
                title: 'level four',
                children: [],
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
      data={menuItems}
      iconColor='gray'
      fontColor='black'
      hasLabelIcon
      leftSideLabel
    />
  );
}

export default App;
