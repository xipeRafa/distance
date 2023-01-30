import {useEffect, useState} from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';



export const PostForm = ({postUser, citys}) => {

    const [state, setState]=useState({
        origen: '',
        intermedia: '',
        destino:'',
        fecha:'',
        pasajeros:'0'
    })
console.log('state', state)

    const { origen, intermedia, destino, fecha, pasajeros } = state


    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value })
    }

     

    const onSubmitUsers = (event: any) => {
        event.preventDefault();

        postUser(state)

    }

    const handleSelect=(v)=>{
        state.origen=v.label
        setState({ ...state, origen: v.label })
    }



  return (
    <div className="container login-container fix">
    <div className="row">
        <div className="col-md-6 login-form-1 fixed">
            <h3>latitud</h3>

            <form onSubmit={onSubmitUsers}>

            <CustomAriaLive citys={citys} handleSelect={handleSelect}/>

                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="origen"
                        name="origen"
                        value={origen}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="intermedia"
                        name="intermedia"
                        value={intermedia}
                        onChange={handleInputChange}
                    />
                </div>
                

                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="destino"
                        name="destino"
                        value={destino}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-group mb-2">{/*  */}
                    <input
                        className="form-control"
                        placeholder="fecha"
                        name="fecha"
                        value={fecha}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-group mb-2">
                    <input
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
