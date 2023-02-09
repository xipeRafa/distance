

import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCity } from '../../hooks'


export const Results = ():JSX.Element => {


    const { dataCityGet, originToDestinyValState, infoViewState, dateAndPassengersState, intersState, SweetAlert } = useCity()


    useEffect(() => {
        dataCityGet()
    }, []) 





    if(originToDestinyValState===undefined || originToDestinyValState===null){
        return(
            <p style={{width:'80%',marginLeft:'10%'}}>
                <Link to="/cities" className='mx-5'>No One Results, Return to Cities </Link>
            </p>
        )
    } 


  
    



  return (
    <div style={{width:'80%', marginLeft:'10%'}}>

        <p><b>Origen: </b> {infoViewState?.origen?.split("_").join(" ")} </p>

        <p><b>Destiny:</b> {infoViewState?.destiny?.split("_").join(" ")}</p> 

        <hr />

         <p><b>Origin To Destiny City</b> = {Number(originToDestinyValState)?.toFixed(3)} KMs</p>
 
        <hr />

         <p><b>Date: </b>{dateAndPassengersState?.date}</p>

         <p><b>Passengers:</b> {dateAndPassengersState?.passengers}</p>

        <hr />
 
        { 
          Object.keys(intersState[0])?.map((el, i) => {
            if(el === ''){
              return
            }else{
              return <p key={i}> <b>inter{i+1} - </b> {el.split("_").join(" ")} : {Number(Object.values(intersState[0])[i])?.toFixed(3)} KMs </p>
            }
          })
        }   

        <hr />
        <br />
        <br />

        <button 
              className='btn btn-info' 
              onClick={() => {
                  navigator.clipboard.writeText(localStorage.link) 
                  SweetAlert(['Link Copied!!', infoViewState?.origen + ' to ' + infoViewState?.destiny])
              }}>

            Copy and Share the Link with your Friends 
        </button>

    </div>
  )
}


