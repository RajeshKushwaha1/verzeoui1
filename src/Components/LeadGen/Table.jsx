import React, { useEffect,useState,useRef } from "react";
import styled from "styled-components";
import ArrowDown from "../img/ArrorDown.svg";
import Edit from "../img/Edit.svg";
import Delete from "../img/Delete.svg";
import Refres from "../img/Refres.svg";
import LeftArrow from "../img/LeftArrow.svg";
import Right from "../img/RightArrow.svg";
import Popup from "../LeadGen/PopUp";

const TableMainDiv = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
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
  width: 22%;
  height: 40px;
  padding-left: 1rem;
  outline: none;
  background: #f7f7f7 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  opacity: 1;
  ::placeholder {
    height: 17px;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #585858;
    text-transform: capitalize;
    opacity: 1;
  }
`;

const ImgArrowDown = styled.img`
  cursor: pointer;
  margin-left: -1.5rem;
`;

const ImgEdit = styled.img`
  position: absolute;
  width: 19px;
  height: 19px;
  margin-top: 10px;
  margin-left: 35.25px;
`;
const ImgDelete = styled.img`
  position: absolute;
  width: 16px;
  height: 20px;
  margin-top: 10px;
  margin-left: 70px;
`;
const ImgRefres = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  margin-left: 100px;
`;

const OneToFifty = styled.span`
  width: 91px;
  height: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #585858;
  opacity: 1;
`;

const DivLeftRight = styled.div`
  float: right;
  width: 10rem;
  height: 20px;
  margin-top: 0.7rem;
`;

const ImgLeftArrow = styled.img`
  position: absolute;
  margin-left: 15px;
`;
const ImgRightArrow = styled.img`
  position: absolute;
  margin-left: 60px;
`;

const Tables = styled.table`
  width: 100%;
  height: auto;
  padding-left: 28px;
  padding-right: 28px;
  margin-top: 1rem;
  opacity: 1;
`;

const TheadTh = styled.thead`
  width: 90%;
  height: 56px;
  margin-left: 28px;
`;

const TrTh = styled.tr`
  width: 90%;
  height: 56px;
  margin-left: 28px;
  text-align: left;
  border: 1px solid red !important;
  th {
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #4A4A4A;
    opacity: 1;
  }
  &:hover {
    background-color: #c2d7e2;
  }
`;

const Tbody = styled.tbody`
  width: 1044px;
  height: 56px;
  border: 1px solid black;
`;
const Tr = styled.tr`
  height: 56px;
  &:nth-child(odd) {
    background: #f6f8f9 0% 0% no-repeat padding-box;
  }

  &:hover {
    background-color: #c2d7e2;
  }
`;

const TdTbody = styled.td`
  width: 28%;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  font-style: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #202124;
  opacity: 1;
  text-align: left;
`;

const TdTbodyTime = styled.td`
  width: 28%;
  font-weight: bold;
  font-size: 13px;
  font-style: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
`;

const InputCheckBox = styled.input`
  margin-top: 1rem;
  margin-left: 11px;
  opacity: 1;
  outline: none;
  border: 2px solid white;
`;
const CustDetailEmailDiv = styled.div`
  width: auto;
  margin-top: -2rem;
  margin-left: 2rem;
`;
const InputCheckBoxTH = styled.input`
  margin-top: 0.3rem;
  margin-left: 11px;
  font-weight: 500;
  color: #4A4A4A;
`;
const ThCustomDetail = styled.div`
  margin-top: -1.4rem;
  margin-left: 2rem;
`;

const EmailPara = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: 13px;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #a6adb4;
  opacity: 1;
`;

const UlDropDown = styled.div`
position: absolute;
  overflow: hidden;
  width: 22%;
  margin-top: 0.5rem;
  position: absolute;
  height: 97px;
  list-style: none;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  z-index: 6;
`;

const LiDropDownMainDiv1 = styled.div`
  width: 100%;
  height: 48px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #f6f8f9 22% no-repeat padding-box;
`;

const LiDropDownMainDiv2 = styled.div`
  width: 100%;
  height: 49px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #f6f8f9 0% 0% no-repeat padding-box;
`;

const LiDropDown = styled.p`
  width: auto;
  position: absolute;
  margin-top: 14px;
  margin-left: 27px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #202124;
  opacity: 1;
`;

const TeamPopupDiv = styled.div`
  width: 280px;
  height: 48px;
  border-radius: 6px;
`;

const Table = () => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [activeBtn, setActiveBtn] = useState("first_btn");
  const checkBoxes=[{}];
  const [selectedAll, setSelectedAll] = useState(false);
  const [selected, setSelected] = useState(false);
  const selectAllRef=useRef();
  const [DataList,setDataList] =useState([
    {
      id: 1,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 2,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 3,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 4,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 5,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    {
      id: 6,
      CustomerDetail: "Anmol agarwal",
      Email: "Anmolagarwal@verzeo.com",
      PhoneNo: "7008276545",
      CreateDate: "04 Apr 2021",
      Time: "7:47 pm",
    },
    // {
    //   id: 6,
    //   CustomerDetail: "Anmol agarwal",
    //   Email: "Anmolagarwal@verzeo.com",
    //   PhoneNo: "7008276545",
    //   CreateDate: "04 Apr 2021",
    //   Time: "7:47 pm",
    // },
    // {
    //   id: 7,
    //   CustomerDetail: "Anmol agarwal",
    //   Email: "Anmolagarwal@verzeo.com",
    //   PhoneNo: "7008276545",
    //   CreateDate: "04 Apr 2021",
    //   Time: "7:47 pm",
    // },
    // {
    //   id: 8,
    //   CustomerDetail: "Anmol agarwal",
    //   Email: "Anmolagarwal@verzeo.com",
    //   PhoneNo: "7008276545",
    //   CreateDate: "04 Apr 2021",
    //   Time: "7:47 pm",
    // },
    // {
    //   id: 9,
    //   CustomerDetail: "Anmol agarwal",
    //   Email: "Anmolagarwal@verzeo.com",
    //   PhoneNo: "7008276545",
    //   CreateDate: "04 Apr 2021",
    //   Time: "7:47 pm",

    // },
  ]);

  const [selectedDataContainer, setSelectedDataContainer] = useState([]);

  useEffect(() => {
    DataList.forEach(el=>{
      el.isSelected=false;
    })
  }, [])

  useEffect(() => {
    //  console.log('selectedDataContainer: ',selectedDataContainer);
  }, [selectedDataContainer])

  const HandleClick = () => {
    setOpen(!open);
  };

  const HandlePopup = () => {
    setPopup(!popup);
  };

  const HandleButtonColor = (val) => {
    setActiveBtn(val);
  };

  const HandleSelectData = (e) =>{
    DataList.forEach((el,id)=>{
      if(Number(e.target.id)===id){
        if(!el.isSelected){
          console.log(el);
          el.isSelected=true;
        }
        else{
          el.isSelected=false;
        }
      }
    })
  }
  
  const selectAllCheckboxes=()=>{
    let localSelectedArr=[];
    if(!selectedAll){
      checkBoxes.forEach((checkbox,index)=>{
        checkbox.checked=true;
        DataList.forEach((el,id)=>{
          if(id===index){
            console.log(el);
            el.isSelected=true;
            localSelectedArr.push(el);
          }
        })
      })
      setSelectedAll(true);
      setSelectedDataContainer(localSelectedArr);
    }
    else{
      checkBoxes.forEach((checkbox,index)=>{
        DataList.forEach((el,id)=>{
          checkbox.checked=false;
          if(id===index){
            el.isSelected=false;
          }
        })
      })
      setSelectedDataContainer([]);
      setSelectedAll(false);
    }
  }

  const deleteSelectedData=()=>{
    selectAllRef.current.checked=false;
    setSelectedAll(false);
    if(selectedDataContainer && selectedDataContainer.length>=1){
      checkBoxes.forEach((checkbox,index)=>{
        selectedDataContainer.forEach((el,id)=>{
          checkbox.checked=false;
          if(id===index){
            if(el.isSelected){
              // checkbox.checked=false;
              // el.isSelected=false;
              setSelectedDataContainer(selectedDataContainer.splice(index,1));
              // selectAllRef.current.checked=false;
            }
          }
        });
      })
    }
    else{
      alert('please select data to delete');
    }
  }

  const handleRefresh=()=>{
    checkBoxes.forEach(checkbox=>{
      checkbox.checked=false;
    })
    setSelectedDataContainer([]);
    selectAllRef.current.checked=false;
    setSelectedAll(false);
  }

  return (
    <>
      <TableMainDiv>
        <TableHeading>Lead Gen</TableHeading>
        <InpEdiDelRefDIv>
          <Input placeholder="Assign To" />

          <ImgArrowDown src={ArrowDown} alt="ArrowDown" onClick={HandleClick} />
          {open && (
            <UlDropDown>
              <LiDropDownMainDiv1
                onClick={() => HandleButtonColor("first_btn")}
                style={{
                  background: `${activeBtn === "first_btn" ? "#e5e9ee" : ""}`,
                }}
              >
                <LiDropDown>Automatically</LiDropDown>
              </LiDropDownMainDiv1>
              <LiDropDownMainDiv2
                onClick={() => HandleButtonColor("second_btn")}
                style={{
                  background: `${activeBtn === "second_btn" ? "#e5e9ee" : ""}`,
                }}
              >
                <TeamPopupDiv onClick={HandlePopup}>
                  <LiDropDown>Team member</LiDropDown>
                </TeamPopupDiv>
              </LiDropDownMainDiv2>
            </UlDropDown>
          )}
          <ImgEdit src={Edit} alt="Edit" />
          <ImgDelete src={Delete} alt="Delete" onClick={deleteSelectedData} />
          <ImgRefres src={Refres} alt="Refres" onClick={handleRefresh} />
          <DivLeftRight>
            <OneToFifty>1 to 50 of 200</OneToFifty>
            <ImgLeftArrow src={LeftArrow} alt="LeftArrow" />
            <ImgRightArrow src={Right} alt="Right" />
          </DivLeftRight>
        </InpEdiDelRefDIv>
        {popup && <Popup />}
        <Tables>
          <TheadTh>
            <TrTh>
              <th>
                <InputCheckBoxTH type="checkbox" onChange={selectAllCheckboxes} ref={selectAllRef} />
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
                    <TdTbody >
                      <InputCheckBox type="checkbox" ref={checkBox=>checkBoxes[index]=checkBox} onClick={HandleSelectData} id={index}/>
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
