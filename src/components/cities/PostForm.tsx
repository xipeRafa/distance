import { useState } from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';
import { useLocation } from 'react-router-dom';



export const PostForm = ({postCity, cities, SweetAlertWrong}) => {

    let location = useLocation();

    const [bool, setBool]=useState(true) 

    const [state, setState]=useState({
        origen: '',
        inter: '',
        destiny:'',
        date:'',
        passengers:''
    })


    const { origen, inter, destiny, date, passengers } = state


    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value })

        if(origen.trim() !== '' || inter.trim() !== '' || 
        destiny.trim() !== '' || date.trim() !== '' || passengers.trim() !== '' ){
            console.log('active')
            setBool(false)
        }
    }


  

    const onSubmitCities = (event: any) => {
        event.preventDefault();

        if(origen.trim() === '' || 
            inter.trim() === '' || 
            destiny.trim() === '' || 
            date.trim() === '' || 
            passengers.trim() === '' ){
                
            SweetAlertWrong(['An Empty Field', 'Select the number of passengers'])
            return
        }

        postCity(state)
       
       location.pathname = '/results' 


    }

    const handleSelect=(v)=>{
        setState({ ...state, origen: v.label })
    }

    const handleSelectInter =(v)=>{
        setState({ ...state, inter: v.label })
    }

    const handleSelectDestiny =(v)=>{
        setState({ ...state, destiny: v.label })
     
    }



  return (
    <div className="container login-container">
    <div className="row">
        <div className="col-md-6 login-form-1">

          

            <form onSubmit={onSubmitCities}>
                <CustomAriaLive cities={cities} handleSelect={handleSelect} label='origin' />

                <CustomAriaLive cities={cities} handleSelect={handleSelectInter} label='inter' />

                <CustomAriaLive cities={cities} handleSelect={handleSelectDestiny} label='destiny' />

                <hr />

                <div className="form-group mb-2">{/*  */}
                    <input
                        type='date'
                        className="form-control"
                        placeholder="date"
                        name="date"
                        value={date}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-group mb-2">
                    <input
                         type='number'
                        className="form-control"
                        placeholder="passengers"
                        name="passengers"
                        value={passengers}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="d-grid gap-2">
                    <input type="submit" className="btnSubmitPost" value='Submit' disabled={bool}/>
                </div> 


            </form>
        </div>
    </div>
</div>
  )
}
