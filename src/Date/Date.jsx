import Moment from "moment/moment";


const Date = () => {

  const formatDate = Moment().format("MMM Do YYYY")

  return ( 
    <>
    <div className="dateContainer">
      <h1>{formatDate}</h1>
    </div>
    
    </>
  );
}

export default Date;