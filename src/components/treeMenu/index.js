import React, { useState } from 'react';
import { MenuTreeWrapper, LabelIcon, TreeMenuTitle } from './style';

export default ({data, labelIcon, leftSideLabel, iconColor, fontColor, hasLabelIcon}) => {
  const [menuItems, setMenuItems] = useState(data);
  const [hiddenIds, setHiddenIds] = useState([]);
  const toggle = (id) => {
    if (hiddenIds.indexOf(id) !== -1) {
      setHiddenIds(hiddenIds.filter((hiddenId) => hiddenId !== id));
    } else {
      setHiddenIds(hiddenIds.concat([id]));
    }
  };
  let IDs = [];
  const getChildrenId = (childrenArray) => {
    childrenArray.forEach((item) => {
      IDs.push(item.id);
      if (item.children && item.children.length !== 0) {
        getChildrenId(item.children);
      }
    });
    return IDs;
  };
  const onChangeHandler = (id, status) => {
    const items = JSON.parse(JSON.stringify(menuItems));
    let result = [];
    if (status) {
      result = unChecked(items, id);
    } else {
      result = checked(items, id);
    }
    return setMenuItems(result);
  };

  const checked = (array, id) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array[i].checked = true;
        if (array[i].children && array[i].children.length !== 0) {
          for (let j = 0; j < array[i].children.length; j++) {
            checked(array[i].children, array[i].children[j].id);
          }
        }
      } else {
        checked(array[i].children, id);
      }
    }
    setMenuItems(array);
    return array;
  };
  const unChecked = (array, id) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array[i].checked = false;
      } else {
        unChecked(array[i].children, id);
      }
    }
    setMenuItems(array);
    return array;
  };
  const menuEngine = (menuItems) => {
    return (
      <MenuTreeWrapper>
        <ul className="tree-menu-ul">
          {menuItems.map((item) => {
            console.log(item);
            const status = item.children && item.children.length !== 0 && hiddenIds.indexOf(item.id) === -1;
            const hasChildren = item.children && item.children.length !== 0;
            return (
              <React.Fragment key={item.id}>
                <li className="tree-menu-li">
                  <div className="right-side">
                    {hasChildren && (
                      <i
                        onClick={() => toggle(item.id)}
                        className={`arrow-icon icon-angle-left ${status ? 'show' : 'hide'}`}
                      />
                    )}
                    <input
                      type="checkbox"
                      checked={(item.checked)}
                      onChange={() => onChangeHandler(item.id, item.checked)}
                    />
                    {hasLabelIcon && <LabelIcon className={`sitemap-icon ${labelIcon || 'icon-sitemap'}`} iconColor={iconColor}/>}
                    <TreeMenuTitle fontColor={fontColor}>{item.title}</TreeMenuTitle>
                  </div>
                  {leftSideLabel &&
                  <div className="left-side">
                    <div className="tree-menu-label tree-menu-label-success">ON</div>
                  </div>
                  }
                </li>
                {status && menuEngine(item.children)}
              </React.Fragment>
            );
          })}
        </ul>
      </MenuTreeWrapper>
    );
  };

  return menuEngine(menuItems);
};
