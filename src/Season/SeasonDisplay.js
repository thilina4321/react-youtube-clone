import AcUnit from '@material-ui/icons/AcUnit'
import HotTub from '@material-ui/icons/HotTub'
import { useEffect, useRef } from 'react';
import './SeasonDisplay.css'

const SeasonDisplay = (props) => {

  const hRef = useRef()
  useEffect(()=>{
      console.log(hRef.current.clientHeight);
  })

  const getSeason = () => {

    let lat = props.lat;
    const month = new Date().getMonth();

    console.log(new Date().toLocaleTimeString());

    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  };

  const seasonConfig = {
      summer:{
          text: 'Burr Its cold',
          icon: <AcUnit color="primary" fontSize="inherit"/>
      },
      winter :{
          text: 'Burr Its hot',
          icon: <HotTub color="error" fontSize="inherit"/>
      }
  }

  const {text, icon} = seasonConfig[getSeason()]
  console.log(getSeason());


  return (
    <div className="season">
        <h1 className="icon__left"> {icon} </h1> 
        <h1 ref={hRef} className="season__text"> {text} </h1>
        <h1 className="icon__right"> {icon} </h1> 
    </div>
  );
};

export default SeasonDisplay;
