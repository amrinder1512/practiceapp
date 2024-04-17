import  React from "react";
import { Link } from "react-router-dom";

const Datalist = (props) => {
    const { Amr } = props;
  
    return (
      <div className="datalist">
        {Amr.map((item) => (
          <div key={item.id} className="block">
            <Link to = {`/pagedetails/${item.id}` } style={{textDecoration: 'none'}}>
            <h2>{item.title}</h2>
            <p>Written by : {item.author}</p>
            </Link>
            {/* <button onClick={() => handleDelete(item.id)}>
              Delete the data
            </button> */}
          </div>
        ))}
      </div>
    );
  };
  
  export default Datalist;















