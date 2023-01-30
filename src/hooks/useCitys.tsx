
import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'
import { errorConsoleCatch } from '../helpers'
import { citysDataPush, origenToInterValView, originToDestinyValView, 
  interToDestinyValView, infoView } from  '../store/slices/citysSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'



export const useCitys = () => {

  const { citys } = useSelector(state => state.citysSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }


  
  const dataCitysGet = async () => {
    try { 
      const { data } = await axiosApi.get(`/cities`)
      dispatch(citysDataPush(data))
    } catch (error) {
        SweetAlertError(error)
        errorConsoleCatch('dataCitysGet:',error)
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
    dataCitysGet,
    postCity,

    //states
    citys,
  }
}
