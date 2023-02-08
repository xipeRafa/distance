import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCity } from '../hooks/useCity';
import QRCode from "react-qr-code";

export const Results = ():JSX.Element => {

  const { 
    infoView,
    originToDestinyValView, 
    dateAndPassengersView, 
    inters 
  } = useSelector(state => state.citiesSlice)

  const { dataCityGet, SweetAlert } = useCity()

  const { origen, destiny } = infoView

  useEffect(() => {
    dataCityGet()
    localStorage.done='true'
  }, []) 




  
  if(originToDestinyValView===undefined || originToDestinyValView===null){
    setTimeout(() => {
      localStorage.done='false'
      return(
          <p style={{width:'80%',marginLeft:'10%'}}>
                <Link to="/cities" className='mx-5'>Return Cities </Link>
          </p>
      )
    }, 1000);
          
  } 
    



  return (
    <div style={{width:'80%', marginLeft:'10%'}}>

        <p><b>Origen: </b> {origen?.split("_").join(" ")} </p>

        <p><b>Destiny:</b> {destiny?.split("_").join(" ")}</p> 

        <hr />

         <p><b>Origin To Destiny City</b> = {Number(originToDestinyValView)?.toFixed(3)} KMs</p>
 
        <hr />

         <p><b>Date: </b>{dateAndPassengersView?.date}</p>

         <p><b>Passengers:</b> {dateAndPassengersView?.passengers}</p>

        <hr />

        { 
          Object.keys(inters[0]).map((el, i) => (
            <p key={i}> <b>inter{i+1} - </b> {el.split("_").join(" ")} : {Number(Object.values(inters[0])[i])?.toFixed(3)} KMs </p>
          ))
        }  

        <hr />

        <br />
        <br />

        <button 
              className='btn btn-info' 
              onClick={() => {
                  navigator.clipboard.writeText(window.location.href) 
                  SweetAlert(['Link Copied!!', origen + ' to ' + destiny])
              }}>

            Copy and Share the Link with your Friends 
        </button>

        <div style={{ margin: "60px auto", width: "364px"}}>

          <QRCode
              style={{ height: "auto", width: "100%" }}
              value={window.location.href}
              viewBox={`0 0 256 256`}
              level={'Q'}
          />

        </div>

    </div>
  )
}
