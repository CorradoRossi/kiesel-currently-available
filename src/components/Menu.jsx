import React, { Component } from 'react';
import styled from 'styled-components';

const SmallMenu = styled.div`
  display: none;
  text-align: left;
  @media (max-width: ${props => props.size}) {
    display: block;
  }
`
const LargeMenu = styled.div`
  display: block;
  text-align: center;
  @media (max-width: ${props => props.size}) {
    display: none;
  }
`
const MenuIcon = ({ onClick, icon }) => (
  <div 
    className="border-0"
    role="button" 
    onClick={onClick}
    onKeyDown={onClick}
    tabIndex="-5"
  >
    {icon}
  </div>
)

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const {
      menu,
      largeMenuClassName,
      smallMenuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton
    } = this.props;
    return (
      <div>
        <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
          {menu}
        </LargeMenu>
        <SmallMenu className={smallMenuClassName} size={changeMenuOn}>
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}
          {this.state.showMenu ? <div>{menu}</div> : null}
        </SmallMenu>
      </div>
    );
  }
}

export default ResponsiveMenu;