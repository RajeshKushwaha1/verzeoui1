import React from "react";
import styled from "styled-components";
import verzeologo from "../img/verzeologo.svg";
import ArrowDown from "../img/ArrorDown.svg";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo>
          <img src={verzeologo} alt="verzeologo" />
        </Logo>
        <Text>
          <Circle>A</Circle>
          <p>Anmol agarwal</p>
          <span>
            <img src={ArrowDown} alt="ArrowDown" />
          </span>
        </Text>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: auto;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding-left: 42px;
  padding-right: 42px;
`;
const Logo = styled.div`
  width: 70.56px;
  height: 20.93px;
`;
const Text = styled.div`
  display: flex;
  span {
    width: 20px;
    height: 20px;
    margin-top: 5px;
    img {
      cursor: pointer;
    }
  }
  p {
    height: 17px;
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    font-family: Poppins;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    color: #0b1838;
    margin-left: 11px;
    margin-right: 9px;
    margin-top: 7px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Circle = styled.div`
  width: 30px;
  height: 29px;
  background: #de3da0 0% 0% no-repeat padding-box;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
