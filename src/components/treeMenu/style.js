import styled from 'styled-components';

export const MenuTreeWrapper = styled.div`
  .tree-menu-ul {
  direction: rtl;
}
.tree-menu-li {
  list-style: none;
  position: relative;
  margin-top: 19px;
  height: 36px;
  .right-side {
    height: 36px;
    display: flex;
    justify-content: flex-start !important;
    align-items: center !important;
    .arrow-icon {
      position: absolute;
      right: -36px;
      top: 0;
      width: 36px;
      min-height: 36px !important;
      box-sizing: border-box;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .left-side {
    position: absolute;
    left: 0;
    top: calc(50% - 18px);
  }
}
.show {
  transform: rotate(-90deg);
  transition: transform 0.2s linear;
}
.hide {
  transform: rotate(0deg);
  transition: transform 0.2s linear;
}
.tree-menu-label {
  height: inherit;
  padding: 8px 20px;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
}
.tree-menu-label-success {
  color: #3dd598;
  background-color: #3DD5980D;
}
.tree-menu-label-warning {
  color: #FF974A;
  background-color: #FF974A0D;
}

`;

export const LabelIcon = styled.i`
  margin: 0 8px !important;
  &:before {
    color: ${props => props.iconColor ? props.iconColor : '#FF974A'};
  }
`;

export const TreeMenuTitle = styled.div`
  color: ${props => props.fontColor ? props.fontColor : '#666666'};
`;