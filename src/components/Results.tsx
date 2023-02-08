import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCity } from '../hooks/useCity';


export const Results = ():JSX.Element => {

  const { 
    infoView,
    originToDestinyValView, 
    dateAndPassengersView, 
    inters 
  } = useSelector(state => state.citiesSlice)

  const { dataCityGet } = useCity()

  const { origen, destiny } = infoView

  useEffect(() => {
    dataCityGet()
    localStorage.done='true'
  }, []) 


  if(originToDestinyValView===undefined || originToDestinyValView===null){
    localStorage.done='false'
      return(
          <p style={{width:'80%',marginLeft:'10%'}}>
                <Link to="/cities" className='mx-5'>Return Cities </Link>
          </p>
      )       
  }
    



  return (
    <div style={{width:'80%', marginLeft:'10%'}}>

        <hr />

         <p>Origin To Destiny City = {Number(originToDestinyValView)?.toFixed(3)} KMs</p>
 
        <hr />

         <p>Origen: {origen?.split("_").join(" ")} </p>

         <p>Destiny: {destiny?.split("_").join(" ")}</p> 

         <p>Date: {dateAndPassengersView?.date}</p>

         <p>Passengers: {dateAndPassengersView?.passengers}</p>


        { 
          Object.keys(inters[0]).map((el, i) => (
            <p key={i}> inter{i+1} - {el.split("_").join(" ")} : {Number(Object.values(inters[0])[i])?.toFixed(3)} KMs </p>
          ))
        }  

    </div>
  )
}
