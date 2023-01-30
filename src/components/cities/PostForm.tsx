import { useState } from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';
import { useLocation } from 'react-router-dom';



export const PostForm = ({postCity, cities, SweetAlertWrong}) => {

    let location = useLocation();

    const [bool, setBool]=useState(true) 

    const [boolInput, setBoolInput]=useState(false) 

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

        if(origen.trim() !== '' || destiny.trim() !== '' || date.trim() !== '' || passengers.trim() !== '' ){
            setBool(false)
        }
    }


  

    const onSubmitCities = (event: any) => {
        event.preventDefault();

        if(origen.trim() === '' || destiny.trim() === '' || date.trim() === '' || passengers.trim() === '' ){
            SweetAlertWrong(['An Empty Field', 'select the number of passengers'])
            return
        }

        postCity(state)
       
       location.pathname = '/results' 

        localStorage.done='true'
    }

    const handleSelect=(v)=>{
        setState({ ...state, origen: v.label })
        origen !== '' || destiny !== '' ? setBoolInput(true) : setBoolInput(false)
    }

    const handleSelectInter =(v)=>{
        setState({ ...state, inter: v.label })
    }

    const handleSelectDestiny =(v)=>{
        setState({ ...state, destiny: v.label })
        origen !== '' || destiny !== '' ? setBoolInput(true) : setBoolInput(false)
    }



  return (
    <div className="container login-container">
    <div className="row">
        <div className="col-md-6 login-form-1 mt-4">

          

            <form onSubmit={onSubmitCities}>
                <CustomAriaLive cities={cities} handleSelect={handleSelect} label='Origin' />

                <CustomAriaLive cities={cities} handleSelect={handleSelectDestiny} label='Destiny' />

                {boolInput &&
                    <CustomAriaLive cities={cities} handleSelect={handleSelectInter} label='Inter' />
                } 

                    

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
                        min='0'
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
