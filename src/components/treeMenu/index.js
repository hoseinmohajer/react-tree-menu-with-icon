import React, { useState } from 'react';
import { MenuTreeWrapper, LabelIcon, TreeMenuTitle } from './style';

export default ({menuItems, labelIcon, leftSideLabel, iconColor, fontColor, hasLabelIcon}) => {
  const [hiddenIds, setHiddenIds] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
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
  const onChangeHandler = (id, children) => {
    let childrenIds = [];
    if (children.length !== 0) {
      IDs = [];
      childrenIds = getChildrenId(children);
    }

    if (checkedIds.indexOf(id) !== -1) {
      setCheckedIds(checkedIds.filter((hiddenId) => hiddenId !== id));
    } else {
      const IDs = checkedIds.concat(childrenIds);
      setCheckedIds(IDs.concat([id]));
    }
  };
  const menuEngine = (menuItems) => {
    return (
      <MenuTreeWrapper>
        <ul className="tree-menu-ul">
          {menuItems.map((item) => {
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
                      checked={checkedIds.indexOf(item.id) !== -1}
                      onChange={() => onChangeHandler(item.id, item.children)}
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
