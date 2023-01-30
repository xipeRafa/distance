import {useEffect, useState} from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';



export const PostForm = ({postUser, citys}) => {

    const [state, setState]=useState({
        origen: '',
        inter: '',
        destiny:'',
        date:'',
        pasajeros:''
    })
console.log('state', state)

    const { date, pasajeros } = state


    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value })
    }

     

    const onSubmitUsers = (event: any) => {
        event.preventDefault();

        postUser(state)

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
            <h3>latitud</h3>

          

            <form onSubmit={onSubmitUsers}>
                <CustomAriaLive citys={citys} handleSelect={handleSelect} label='origin' />
                <CustomAriaLive citys={citys} handleSelect={handleSelectInter} label='inter' />
                <CustomAriaLive citys={citys} handleSelect={handleSelectDestiny} label='destiny' />


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
                        placeholder="pasajeros"
                        name="pasajeros"
                        value={pasajeros}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="d-grid gap-2">
                    <input type="submit" className="btnSubmitPost" value='Submit' />
                </div> 


            </form>
        </div>
    </div>
</div>
  )
}
