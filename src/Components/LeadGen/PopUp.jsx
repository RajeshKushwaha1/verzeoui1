import React, { useState } from "react";
import styled from "styled-components";
import Close from "../img/Close.svg";

const PopupContainerDiv = styled.div`
width: 100%;
height: 100%;
position: absolute;
/* display: flex; */
top: 0;
bottom: 0;
left: 0;
right: 0;
 background-color: rgba(0,0,0,.2);
`;

const PopupContainer = styled.div`
  position: relative;
  margin-left: 9rem;
  margin-top: 16rem;
  z-index: 10;
  width: 548px;
  height: 277px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
`;
const Crossbtn = styled.div`
  width: 12.31px;
  height: 12.31px;
  color: #020202;
  float: right;
  padding-top: 16px;
  padding-right: 30px;
  cursor: pointer;
`;
const Team = styled.div`
  height: 23px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.15px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding-left: 53px;
  padding-top: 25px;
`;

const Selector = styled.div`
  form {
    padding-left: 53px;
    padding-top: 40px;
    label {
      font: normal normal normal 11px/15px Poppins;
      letter-spacing: 0.1px;
      color: #000000;
    }
    select {
      width: 447px;
      height: 48px;
      background: #0000000b 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      margin-top: 9px;
      cursor: pointer;
    }
    button {
      width: 302px;
      height: 49px;
      margin-top: 49px;
      margin-left: 70px;
      border: 2px solid #767676;
      border-radius: 4px;
      font: normal normal medium 13px/20px Poppins;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0px;
      color: #414141;
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const Popup = () => {
  const [cross, setCross] = useState(true);

  const HandleCross = () => {
    setCross(!cross);
  };

  return (
    <>
      {cross && (
        <PopupContainerDiv>
        <PopupContainer>
          <Crossbtn>
            <img src={Close} alt="Close" onClick={HandleCross} />
          </Crossbtn>
          <Team>Assign to team member</Team>
          <Selector>
            <form>
              <label for="member">Select member</label>
              <br />
              <select name="team" id="cars">
                <option value="Tech">Tech member</option>
                <option value="opertor">opertor</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <br />
              <button>Create</button>
            </form>
          </Selector>
        </PopupContainer>
        </PopupContainerDiv>
      )}
    </>
  );
};

export default Popup;


