


import { useEffect } from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAlertMessage, somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'
import Swal from 'sweetalert2';
import { Nav } from '../cmpsPartial';
import { Citys, Results } from '../components';


const AppRouter = () => {
/* 
    const dispatch = useDispatch();

    const { sweetAlertMessage } = useSelector(state => state.alertSlice);

     useEffect(() => {
        if (sweetAlertMessage !== undefined) {
           Swal.fire(sweetAlertMessage[0], sweetAlertMessage[1], sweetAlertMessage[2]);
           defaultAlert()
       } 
       console.log('sweetAlertMessage', sweetAlertMessage)
    }, [sweetAlertMessage])  



    function defaultAlert(){
        setTimeout(() => {
            dispatch(clearAlertMessage())
        }, 1000);
    } */




    return (
        <div>
            <Nav />
            <Routes>

                <Route path="/citys" element={<Citys />} />
                <Route path="/results" element={<Results />} />


                <Route path="/*" element={<Navigate to="/citys" />} /> 

            </Routes>
        </div>
    )
}

export default AppRouter

