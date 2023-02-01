import { useState } from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';
import { useNavigate } from 'react-router-dom';

type PropsPostForm = { 
    postCity: Function,
    cities:String[], 
    SweetAlertWrong:Function 
}

export const PostForm = ({postCity, cities, SweetAlertWrong}:PropsPostForm):JSX.Element => {

    let navigateTo = useNavigate()

    const [bool, setBool]=useState<boolean>(true) 

    const [boolInput, setBoolInput]=useState<boolean>(false) 

    type State = {
        origen:string,
        inter:string,
        destiny:string,
        date:string,
        passengers:string
    }

    const [state, setState]=useState<State>({
        origen: '',
        inter: '',
        destiny:'',
        date:'',
        passengers:''
    })


    const { origen, destiny, date, passengers } = state

    type Target = {
        target:React.FormEvent<HTMLFormElement>
        name:string
        value:string
    }
    
    const handleInputChange = (target:Target): void => {
        const { name, value } = target.target;
        setState({ ...state, [name]: value })
        
        if(origen.trim() !== '' || destiny.trim() !== '' || date.trim() !== '' || passengers.trim() !== '' ){
            setBool(false)
        }
    }
    
    
    type FormElement = React.FormEvent<HTMLFormElement>
  

    const onSubmitCities = (event:FormElement): void => {
        event.preventDefault();

        if(origen.trim() === '' || destiny.trim() === '' || date.trim() === '' || passengers.trim() === '' ){
            SweetAlertWrong(['An Empty Field', 'select the number of passengers'])
            return
        }

        postCity(state)

        setTimeout(() => {
           navigateTo('/results')
        }, 1000);

        localStorage.done='true'
    }




    type INP = {
        label:string
    }

    const handleSelect = (v:INP): void => {
        setState({ ...state, origen: v.label })
        origen !== '' || destiny !== '' ? setBoolInput(true) : setBoolInput(false)
    }

    const handleSelectDestiny = (v:INP): void => {
        setState({ ...state, destiny: v.label })
        origen !== '' || destiny !== '' ? setBoolInput(true) : setBoolInput(false)
    }
    

    const handleSelectInter = (v:INP): void => {
        setState({ ...state, inter: v.label })
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
