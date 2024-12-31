import { makeStyles } from "@fluentui/react-components";
import { PerformanceType } from "../../types/PerformanceCard/PerformanceCard.types";

const generateConicGradient = (fill: boolean, percentage: number, type: PerformanceType): string => {
  let color, backgroundColor;
  if (type === PerformanceType.SUCCESS) {
    color = fill ? '#fff' : '#0E700E';
    backgroundColor = fill ? '#107C10' : '#F1FAF1';
  } else if (type === PerformanceType.FAILURE) {
    color = fill ? '#fff' : '#B10E1C';
    backgroundColor = fill ? '#C50F1F' : '#FDF3F4';
  } else {
    color = '#000';
    backgroundColor = '#fff';
  }
  return `conic-gradient(${color} ${percentage}%, ${backgroundColor} ${percentage}%)`;
};

export const useStyles = (fill: boolean = false, percentage: number = 0, type: PerformanceType = PerformanceType.SUCCESS) => makeStyles({
  root: {
    fontSize: '10px',
    lineHeight: '14px',
    padding: '3px 5px',
    borderRadius: '4px',
    width: 'fit-content',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  [PerformanceType.SUCCESS]: fill ? 
  {
    color: '#fff',
    backgroundColor: '#107C10',
    border: '1px solid #107C10r',
  } :
  {
    color: '#0E700E',
    backgroundColor: '#F1FAF1',
    border: '1px solid #9FD89F',
  }, 
  [PerformanceType.FAILURE]: fill ? {
    color: '#fff',
    backgroundColor: '#C50F1F',
    border: '1px solid #C50F1F',
  } : {
    color: '#B10E1C',
    backgroundColor: '#FDF3F4',
    border: '1px solid #EEACB2',
  },
  pie: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundImage: generateConicGradient(fill, percentage, type),
  }
})();