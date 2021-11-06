import React from "react";
import styled from "styled-components";
import ArrowDown from "../img/ArrorDown.svg";
import Edit from "../img/Edit.svg";
import Delete from "../img/Delete.svg";
import Refres from "../img/Refres.svg";
import LeftArrow from "../img/LeftArrow.svg";
import Right from "../img/RightArrow.svg";

const TableMainDiv = styled.div`
  width: 1101px;
  height: 100vh;
`;

const TableHeading = styled.h1`
  margin-top: 32px;
  margin-left: 37px;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
`;

const InpEdiDelRefDIv = styled.div`
  height: 40px;
  width: 94.5%;
  margin-top: 18px;
  margin-left: 28px;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  outline: none;
  background: #f7f7f7 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  opacity: 1;
  ::placeholder {
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #585858;
    text-transform: capitalize;
    opacity: 1;
  }
`;

const ImgArrowDown = styled.img`
  margin-left: -1.5rem;
`;

const ImgEdit = styled.img`
  position: absolute;
  margin-top: 10px;
  margin-left: 35.25px;
`;
const ImgDelete = styled.img`
  position: absolute;
  margin-top: 10px;
  margin-left: 70px;
`;
const ImgRefres = styled.img`
  position: absolute;
  margin-top: 10px;
  margin-left: 100px;
`;

const OneToFifty = styled.span`
  width: 91px;
  height: 20px;
  margin-left: 620px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #585858;
  opacity: 1;
`;
const ImgLeftArrow = styled.img`
  position: absolute;
  margin-top: 10px;
  margin-left: 15px;
`;
const ImgRightArrow = styled.img`
  position: absolute;
  margin-top: 10px;
  margin-left: 50px;
`;

const Tables = styled.table`
  width: 1044px;
  height: auto;
  margin-left: 28px;
  margin-top: 1rem; 
  opacity: 1;
`;

const TheadTh = styled.thead`
  width: 1044px;
  height: 56px;
  border: 1px solid black;
`;

const TrTh = styled.tr`
  width: 1044px;
  height: 56px;
  text-align: left;
  border: 1px solid black;
`;

const Tbody = styled.tbody`
  width: 1044px;
  height: 56px;
  border: 1px solid black;
`;
const Tr = styled.tr`
  width: 1044px;
  height: 56px;
  border: 1px solid yellow;
  &:nth-child(odd) {
    background: #F6F8F9 0% 0% no-repeat padding-box;
  }
`;

const TdTbody = styled.td`
  font-weight: 500;
  font-size: 13px;
  font-style: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #202124;
  opacity: 1;
  text-align: left;
 
`;

// tr:nth-child(even) {
//     background-color: #dddddd;
//   }

const TdTbodyTime = styled.td`
  font-weight: bold;
  font-size: 13px;
  font-style: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
`;

const InputCheckBox = styled.input`
  margin-top: 0.5rem;
  margin-left: 11px;
  opacity: 1;
`;

const CustDetailEmailDiv = styled.div`
  width: auto;
  margin-top: -1.8rem;
  margin-left: 2rem;
`;
const InputCheckBoxTH = styled.input`
  margin-top: 0.3rem;
  margin-left: 11px;
`;
const ThCustomDetail = styled.div`
  margin-top: -1.3rem;
  margin-left: 2rem;
`;

const EmailPara = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: 13px;
  font-family: normal normal normal 13px/23px Acumin Pro;
  letter-spacing: 0px;
  color: #a6adb4;
  opacity: 1;
`;

const Table = () => {
  const DataList = [
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
  ];

  return (
    <>
      <TableMainDiv>
        <TableHeading>Lead Gen</TableHeading>
        <InpEdiDelRefDIv>
          <Input placeholder="  Assign To" />
          <ImgArrowDown src={ArrowDown} alt="ArrowDown" />
          <ImgEdit src={Edit} alt="Edit" />
          <ImgDelete src={Delete} alt="Delete" />
          <ImgRefres src={Refres} alt="Refres" />
          <OneToFifty>1 to 50 of 200</OneToFifty>
          <ImgLeftArrow src={LeftArrow} alt="LeftArrow" />
          <ImgRightArrow src={Right} alt="Right" />
        </InpEdiDelRefDIv>
        <Tables>
          <TheadTh>
            <TrTh>
              <th>
                <InputCheckBoxTH type="checkbox" />
                <ThCustomDetail>Customer detail</ThCustomDetail>
              </th>
              <th>Phone no.</th>
              <th>Created date</th>
              <th>Time</th>
            </TrTh>
          </TheadTh>
          <Tbody>
            {DataList &&
              DataList.map((el, index) => {
                return (
                  <Tr key={index}>
                    <TdTbody>
                      <InputCheckBox type="checkbox" />
                      <CustDetailEmailDiv>
                        {el.CustomerDetail}
                        <br />
                        <EmailPara>{el.Email}</EmailPara>
                      </CustDetailEmailDiv>
                    </TdTbody>
                    <TdTbody>{el.PhoneNo}</TdTbody>
                    <TdTbody>{el.CreateDate}</TdTbody>
                    <TdTbodyTime>{el.Time}</TdTbodyTime>
                  </Tr>
                );
              })}
          </Tbody>
        </Tables>
      </TableMainDiv>
    </>
  );
};

export default Table;
