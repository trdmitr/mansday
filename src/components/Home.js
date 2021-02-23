import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import Tabletop from "tabletop";
import {withRouter} from "./Modal"

import './sheet.css'

function SeetsData() {
  
    const [data, setData] = useState({}); 
    useEffect(() => {
      
      const publicSpreadsheetUrl = `1mUDT24ittVOp0APlk63-DZBR7V90GNgi7NY8anFYGBs`;
        Tabletop.init({  
          key: publicSpreadsheetUrl,
          simpleUrl: true,
          simpleSheet: true,
          sheetId: 0,
          // endpoint: "https://cors-anywhere.herokuapp.com/"
        }).then(function (data) {
          setData(data);
          console.log("data: ", data)
        });
      }, []);
      
      const moves = Array.from(data);  
      // const proxyUrl: 'https://cors-anywhere.herokuapp.com/';
      return (
        
        <div className="container" >

          <div className="row">
            {moves.map((el) => (
              <div className="card " key={el.Move}>
                
                <img src={el.Image}></img>
                {/* <Link to={`/${el.Move}`}>Читать далее</Link> */}
                <p>{el.Move} </p>
                <audio controls> <source src={el.Cover}/>
                 
                      Your browser does not support the
                      <code>audio</code> element.
                </audio>
                <p> {el.Year} </p>
                {/* <Link
  to={{
    pathname: '/modal/1',
    state: { modal: true }
  }}
>
  Open Modal
</Link> */}
                {/* <p> Rating: {el.Rating}</p> */}
              </div>
            ))}
          </div>


        </div>

      );
}
  export default SeetsData;