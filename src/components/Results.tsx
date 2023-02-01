import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Results = ():JSX.Element => {

  const { infoView, origenToInterValView, originToDestinyValView, interToDestinyValView } = useSelector(state => state.citiesSlice)

  const { origen, inter, destiny, date, passengers } = infoView



  if(origenToInterValView===undefined){
      return(
          <p style={{width:'80%',marginLeft:'10%'}}>
                <Link to="/cities" className='mx-5'>Return Cities </Link>
          </p>
      )       
  }
    



  return (
    <div style={{width:'80%',marginLeft:'10%'}}>

        <hr />

         <p>Origin To Destiny City = {originToDestinyValView} KMs</p>
 
        {inter !== '' &&<>
             <hr />
             <p>Origin To Inter City = {origenToInterValView} KMs</p>
        </>}
    
        {inter !== '' &&<>
             <hr />
             <p>Inter To Destiny City  = {interToDestinyValView} KMs</p>
        </>}

        <hr />



         <p>Origen: {origen} </p>

         {inter !== '' &&
            <p>Inter: {inter}</p>
         }

         <p>Destiny: {destiny}</p> 

         <p>Date: {date}</p>

         <p>Passengers: {passengers}</p>

    </div>
  )
}
