import { useSelector } from 'react-redux';



export const Results = () => {

  const { infoView, origenToInterValView, originToDestinyValView,
     interToDestinyValView } = useSelector(state => state.citysSlice)

const {
  origen,
  inter,
  destiny,
  date,
  passengers,
}= infoView
    
  return (
    <div style={{width:'80%',marginLeft:'10%'}}>
        <hr />
        Origin To Destiny City = {originToDestinyValView} KMs
        <hr />
        Origin To Inter City = {origenToInterValView} KMs
        <hr />
        Inter To Destiny City  = {interToDestinyValView} KMs
        <hr />



         <p> Origen: {origen} </p>

         <p>Inter: {inter}</p>

         <p>Destiny: {destiny}</p> 

         <p> Date: {date}</p>

         <p> Passengers: {passengers}</p>

    </div>
  )
}
