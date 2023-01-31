
import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'
import { errorConsoleCatch } from '../helpers'

import { cityDataPush, origenToInterValView, originToDestinyValView, 
          interToDestinyValView, infoView } from  '../store/slices/citiesSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'



export const useCity = () => {

  const { cities } = useSelector(state => state.citiesSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }

  function SweetAlertWrong(error){
    dispatch(somethingWentWrong([error[0], error[1], 'error']))
}


  

  const dataCityGet = async () => {
    try { 
        const { data } = await axiosApi.get(`/cities`)
        dispatch(cityDataPush(data))
    } catch (error) {
        SweetAlertError(error)
        errorConsoleCatch('datacityGet:',error)
    }  
  }






  const postCity = async (post) => {

    try {

          const { origen, inter, destiny, date, passengers } = post

          const {data}  = await axiosApi.post('/cities', { origen, inter, destiny })

          dispatch(origenToInterValView(data.origenToInterVal))

          dispatch(originToDestinyValView(data.originToDestinyVal))

          dispatch(interToDestinyValView(data.interToDestinyVal))

          dispatch(infoView(post)) 

          dispatch(somethingWentRigth(['Good Travel', origen + ' to ' + destiny, 'success']))
  
      } catch (error) {  
          SweetAlertError(error)
          errorConsoleCatch(error) 
      }  

  }


 




  return {
    dataCityGet,
    postCity,
    SweetAlertWrong,

    //states
    cities,
  }


}