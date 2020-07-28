import React from 'react';
import TreeMenu from './components/treeMenu'

const menuItems = [
  {
    id: 1,
    checked: true,
    title: 'level one',
    active: true,
    children: [],
  },
  {
    id: 2,
    checked: false,
    title: 'level one',
    active: true,
    children: [
      {
        id: 21,
        checked: false,
        title: 'level two',
        active: true,
        children: [],
      },
    ],
  },
  {
    id: 3,
    checked: false,
    title: 'level one',
    active: true,
    children: [
      {
        id: 31,
        checked: false,
        title: 'level two',
        active: true,
        children: [
          {
            id: 311,
            checked: false,
            title: 'level three',
            active: false,
            children: [
              {
                id: 3111,
                checked: false,
                title: 'level four',
                active: true,
                children: [],
              },
              {
                id: 3112,
                checked: false,
                title: 'level four',
                active: true,
                children: [
                  {
                    id: 31121,
                    checked: false,
                    title: 'level five',
                    label: 'disable',
                    children: [],
                  },
                ],
              },
              {
                id: 3113,
                checked: false,
                title: 'level four',
                active: false,
                children: [
                  {
                    id: 31131,
                    checked: false,
                    title: 'level four',
                    active: true,
                    children: []
                  }
                ],
              },
              {
                id: 3114,
                checked: false,
                title: 'level four',
                active: true,
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
  const onChange = (data) => {
    console.log(data);
  }
  return (
    <TreeMenu
      data={menuItems}
      iconColor='gray'
      fontColor='black'
      hasItemIcon
      leftSideLabel
      onChange={onChange}
    />
  );
}

export default App;
