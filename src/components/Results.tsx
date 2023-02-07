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


  if(originToDestinyValView===undefined){
      return(
          <p style={{width:'80%',marginLeft:'10%'}}>
                <Link to="/cities" className='mx-5'>Return Cities </Link>
          </p>
      )       
  }
    




  return (
    <div style={{width:'80%', marginLeft:'10%'}}>

        <hr />

         <p>Origin To Destiny City = {originToDestinyValView.toFixed(3)} KMs</p>
 
        <hr />

         <p>Origen: {origen} </p>

         <p>Destiny: {destiny}</p> 

         <p>Date: {dateAndPassengersView?.date}</p>

         <p>Passengers: {dateAndPassengersView?.passengers}</p>


        { 
          Object.keys(inters[0]).map((el, i) => (
            <p key={i}> inter{i+1} - {el} : {Object.values(inters[0])[i]?.toFixed(3)} KMs </p>
          ))
        }  

    </div>
  )
}
