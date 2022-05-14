import { Accordion } from "./Accordion";
import styled from "styled-components/native";
import { timeParser } from "../helpers/timeParser";

export const Scedule = ({ isExpanded, scedule, setExpanded }) => {
  const parseWorkTimePeriod = (day) => {
    const start = timeParser(day.workTime.start);
    const end = timeParser(day.workTime.end);

    return `${start.hours}:${start.minutes} - ${end.hours}:${end.minutes}`;
  };

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
        {scedule.map((day, i) => {
          return (
            <WorkDayItem key={i} code={day.code} dayOff={day.dayOff} style={{ paddingLeft: 30 }}>
              <Day code={day.code} dayOff={day.dayOff}>{day.name}</Day>
              <Day code={day.code} dayOff={day.dayOff}>{!day.dayOff? parseWorkTimePeriod(day): "Day off"}</Day>
            </WorkDayItem>
          );
        })}
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
  background-color: ${(props) => (props.dayOff? '#d988cd' : props.code > 5 ? "#b5179e" : "#e6e6e6")};
  padding: 5px;
  padding-right: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Day = styled.Text`
  color: ${(props) => (props.dayOff || props.code > 5 ? "white" : "#58707c")};
  font-size: 18px;
`;
