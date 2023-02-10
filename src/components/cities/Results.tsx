

import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useCity } from '../../hooks'
import CopyToClipboard from "react-copy-to-clipboard";

export const Results = ():JSX.Element => {

    const[urlState, setUrlState]=useState('')
console.log(urlState)

    const { dataCityGet, originToDestinyValState, infoViewState, dateAndPassengersState, intersState, SweetAlert } = useCity()


    useEffect(() => {
        dataCityGet()
    }, []) 





    if(originToDestinyValState===undefined || originToDestinyValState===null){
        return(
            <p style={{width:'80%',marginLeft:'10%'}}>
                <Link to="/cities" className='mx-5'>No One Results Return to Cities </Link>
            </p>
        )
    } 

    const handleShort =()=>{
        let url = `https://api.shrtco.de/v2/shorten?url=${localStorage.link}`
  
        fetch(url)
          .then(e => e.json())
          .then(e => setUrlState(e.result.full_share_link))
          .catch(error => console.log('handleShort >>>', error))

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
              className='btn btn-info mb-4' 
              onClick={() => {
                  navigator.clipboard.writeText(localStorage.link) 
                  SweetAlert(['Link Copied!!', infoViewState?.origen + ' to ' + infoViewState?.destiny, 'success'])
              }}>

            Copy and Share the Link with your Friends 
        </button>
<br />
         <CopyToClipboard text={urlState}>
            <button onClick={handleShort}  className='btn btn-secondary'>
                Copy Short URL to Clipboard
            </button>
        </CopyToClipboard> 

    </div>
  )
}


