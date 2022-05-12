import { Accordion } from "./Accordion";
import styled from "styled-components/native";

export const Scedule = ({ isExpanded, scedule, setExpanded }) => {
  const { monday, tuesday, wednesday, tursday, friday, saturday, sunday } =
    scedule;
  return (
    <ListContainer>
      <OpenStatusBox>
        <OpenStatus>Open</OpenStatus>
        {!isExpanded && <TimeOfClothe>Closes at 21:00</TimeOfClothe>}
      </OpenStatusBox>
      <Accordion
        onPress={setExpanded}
        isExpanded={isExpanded}
        heightOfOpenState={350}
      >
        <WorkDayItem style={{ paddingLeft: 30 }}>
          <Day>Monday</Day>
          <Day>{monday.workTime}</Day>
        </WorkDayItem>
        <WorkDayItem style={{ paddingLeft: 30 }}>
          <Day>Tuesday</Day>
          <Day>{tuesday.workTime}</Day>
        </WorkDayItem>
        <WorkDayItem style={{ paddingLeft: 30 }}>
          <Day>Wednesday</Day>
          <Day>{wednesday.workTime}</Day>
        </WorkDayItem>
        <WorkDayItem style={{ paddingLeft: 30 }}>
          <Day>Tursday</Day>
          <Day>{tursday.workTime}</Day>
        </WorkDayItem>
        <WorkDayItem style={{ paddingLeft: 30 }}>
          <Day>Friday</Day>
          <Day>{friday.workTime}</Day>
        </WorkDayItem>
        <WorkDayItem
          dayOff={saturday.dayOff || true}
          style={{ paddingLeft: 30 }}
        >
          <Day dayOff={saturday.dayOff}>Saturday</Day>
          <Day dayOff={saturday.dayOff}>{saturday.workTime}</Day>
        </WorkDayItem>
        <WorkDayItem dayOff={sunday.dayOff} style={{ paddingLeft: 30 }}>
          <Day dayOff={sunday.dayOff}>Sunday</Day>
          <Day dayOff={sunday.dayOff}>{sunday.workTime}</Day>
        </WorkDayItem>
      </Accordion>
    </ListContainer>
  );
};

const ListContainer = styled.View`
  width: 100%;
  border-bottom-width: 1;
  border-bottom-color: #47315a;
  padding-bottom: 10px;
`;

const OpenStatusBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 18px;
  left: 5px;
`;

const OpenStatus = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #6842ff;
  margin-right: 20px;
`;
const TimeOfClothe = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const WorkDayItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => (props.dayOff ? "#d988cd" : "#e6e6e6")};
  padding: 5px;
  padding-right: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Day = styled.Text`
  color: ${(props) => (props.dayOff ? "white" : "#58707c")};
  font-size: 18px;
`;
