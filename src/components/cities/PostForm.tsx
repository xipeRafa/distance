import { useState } from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';
import { useNavigate } from 'react-router-dom';

type PropsPostForm = { 
    postCity: Function,
    cities:String[], 
    SweetAlert:Function 
}

export const PostForm = ({postCity, cities, SweetAlert}:PropsPostForm):JSX.Element => {

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
    console.log('state :>> ', state);


    const { origen, destiny, date, passengers } = state



    type Target = {
        target:{
            name:string
            value:string
        }
    }
    
    
    
    type FormElement = React.FormEvent<HTMLFormElement>
  

    const onSubmitCities = (event:FormElement): void => {
        event.preventDefault();

        if(origen.trim() === '' || destiny.trim() === '' || date.trim() === '' || passengers.trim() === '' ){
            SweetAlert(['An Empty Field'])
            return
        }

        if( passengers.includes('e') || passengers.includes('.') || Number(passengers)<1 || Number(passengers)>100){
            SweetAlert(['no mopre that 100 or lees than 0', 'select the Right Number of passengers', 'warning'])
            return
        }
     
        postCity(state)

        setTimeout(() => {
           navigateTo('/results')
        }, 1000);

        localStorage.done='true'
    }




    const handleInputChange = (target:Target): void => {
        const { name, value } = target.target;
        setState({ ...state, [name]: value })
        
        if(origen.trim() !== '' && destiny.trim() !== '' && date.trim() !== ''){
            setBool(false)
           
        }
        if( Number(passengers)>100 ){
            SweetAlert(['no mopre that 100.', 'select the Right Number of passengers', 'warning'])
        }
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
                    <CustomAriaLive cities={cities} handleSelect={handleSelectInter} label='Inter (opcional)' />
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

                {boolInput &&
                <div className="form-group mb-2">
                    <input
                        type='number'
                        min='1'
                        max='100' 
                        //step="any"
                        className="form-control"
                        placeholder="passengers"
                        name="passengers"
                        value={passengers}
                        onChange={handleInputChange}
                    />
                </div>}


                <div className="d-grid gap-2">
                    <input type="submit" className={!bool ? "btnSubmitPost" : "btnSubmitPost2"} value={bool ? 'Disabled':'Send'} disabled={bool}/>
                </div> 


            </form>
        </div>
    </div>
</div>
  )
}
