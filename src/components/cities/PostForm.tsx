import { useState } from 'react'
import './postForm.css';
import { useNavigate } from 'react-router-dom';

type PropsPostForm = { 
    postCity: Function,
    cities:any, 
    SweetAlert:Function 
    postCitySearch:Function
    dateAndPassengersPost:Function
}

export const PostForm = ({
    postCity, 
    cities, 
    SweetAlert, 
    postCitySearch,
    dateAndPassengersPost }:PropsPostForm):JSX.Element => {
    

    let navigateTo = useNavigate()

    const [bool, setBool]=useState<boolean>(true) 

    const [error, setError]=useState<string>('city never can not find it')

    type State = {
        origen:string,
        inter1:string,
        destiny:string
    } 
    
    type DateAndPassengers = {
        date:string,
        passengers:string
    }

    const [state, setState]=useState<State>({
        origen: '',
        destiny:'',
        inter1: '',
    })


    const [dateAndPassengers, setDateAndPassengers]=useState<DateAndPassengers>({
        date:'',
        passengers:''
    })



    const { origen, destiny, inter1 } = state
    const { date, passengers } = dateAndPassengers

    //2023-02-10
    //var birthday = new Date(1994, 12, 10)
    
    let year = Number(date.slice(0, 4))
    let mont = Number(date.slice(5, 7))
    let day  = Number(date.slice(8,10))
    
    let dateText = new Date(year, mont-1, day)
    let milisecondsDate = new Date().setTime(dateText.getTime())
    
    //console.log('milisecondsDate :>> ', milisecondsDate);

    
    type FormElement = React.FormEvent<HTMLFormElement>
  

    const onSubmitCities = (event:FormElement): void => {
        event.preventDefault();

        if(  origen.trim() === '' || 
            destiny.trim() === '' || 
            passengers.trim() === '' ||
                  date.trim() === '' ||
                  Object.values(state).some(el => el === 'city never can not find it') ){

            SweetAlert(['An Empty Field...'])
            return
        }

        if( passengers.includes('e') || passengers.includes('.') || Number(passengers)<1 || Number(passengers)>100){
            SweetAlert(['no more that 100 or lees than 0', 'select the Right Number of passengers', 'warning'])
            return
        }

        if( Number(passengers)>100 ){
            SweetAlert(['no more that 100.', 'select the Right Number of passengers', 'warning'])
        }  
     
        postCity(state)
        dateAndPassengersPost(dateAndPassengers)

        setTimeout(() => {
           navigateTo('/results')
        }, 1000);

        localStorage.done='true'
    }




    type Target = {
        target:{
            name:string
            value:string
        }
    }
    

    const handleInputChange = (target:Target): void => {
        const { name, value } = target.target;
      
        if(name === 'date' || name === 'passengers'){ 
            setDateAndPassengers({ ...dateAndPassengers, [name]: value })
        }

        if(name !== 'date' && name !== 'passengers'){ 
            setState({ ...state, [name]: value })

            if(value.length > 3 && cities.length === 0){
                setState({ ...state, [name]: error })
            }
            if(value.length > 0){
                postCitySearch(value)
            }
        }
          
        setTimeout(() => {    
            if(origen.trim() !== '' && destiny.trim() !== '' ){
                setBool(false) 
            }
        }, 400);
    }

    const [inters, setInters]=useState([])


     const addObject =()=>{
        let keys = Object.keys(state)
        let newK = 'inter'.concat(keys.length -1)
        state[newK] = ''

        setInters([...inters, [newK]])
    } 


  return (
    <div className="container login-container">
    <div className="row">
        <div className="col-md-6 login-form-1 mt-4">

            { !bool && <>
                <p><button onClick={addObject} className='btn btn-info'>+</button>{' '}add more inter cities </p>
            </>} 
          

            <form onSubmit={onSubmitCities}>
    
                <label>Select your city Origin </label>
                <input 
                    list="origen" 
                    onChange={handleInputChange}  
                    className="form-control mb-2" 
                    name='origen'
                    placeholder="origin"
                    autoComplete='off'
                />
                <span className='text-danger'>
                    {origen.length > 3 && cities.length === 0 ? (origen === 'city never can not find it') && origen : ''}
                </span>

                <datalist id="origen" >
                        {cities.map((city, key) =>
                            <option key={key} value={city} />
                        )}  
                </datalist>






            
                <label>Select your city Destiny </label>        
                <input 
                    list="destiny" 
                    onChange={handleInputChange} 
                    className="form-control mb-2" 
                    name='destiny' 
                    placeholder="destiny"
                    autoComplete='off'
                />
                <span className='text-danger'>
                {destiny.length > 3 && cities.length === 0 ? (destiny === 'city never can not find it') && destiny : ''}
                </span>

                <datalist id="destiny" >
                        {cities.map((city, key) =>
                            <option key={key} value={city} />
                        )}  
                </datalist>


            { !bool && <>
                <label>Select your city Inter (optional) </label>

                <input 
                    list="inter1" 
                    onChange={handleInputChange} 
                    className="form-control mb-2" 
                    name='inter1' 
                    placeholder="inter1"
                    autoComplete='off'
                />
                <span className='text-danger'>
                    {inter1.length > 3 && cities.length === 0 ? (inter1 === 'city never can not find it') && inter1 : ''}
                </span>

                <datalist id="inter1" >
                        {cities.map((city, key) =>
                            <option key={key} value={city} />
                        )}  
                </datalist>



                    
                {inters.flat().map((el, i) => (
                    <div key={i+'@#$'}>
                        <label>Select your city Inter {el} </label>

                        <input 
                            list={el} 
                            onChange={handleInputChange} 
                            className="form-control mb-2" 
                            name={el} 
                            placeholder={el}
                            autoComplete='off'
                        />

                        <span className='text-danger'>
                            {cities.length === 0 && state[el].length > 3 ? (state[el] === 'city never can not find it') && state[el] : ''}
                        </span> 

                        <datalist id={el} >
                            {cities.map((city, key) =>
                                <option key={key} value={city} />
                            )}  
                        </datalist>
                    </div>))
                }
                
            </>} 
                       

                    

                <hr />

                <div className="form-group mb-2">{/*  */}
                    <input
                        type='date'
                        min={new Date().toISOString().split("T")[0]}
                        className="form-control"
                        placeholder="date"
                        name="date"
                        value={date}
                        onChange={handleInputChange}
                    />
                </div>

                { !bool && 
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
                    <input 
                        type="submit" 
                        className={bool ? "btnSubmitPost2" : "btnSubmitPost"} 
                        value={bool ? 'Disabled':'Send'} 
                        disabled={bool}
                    />
                </div> 


            </form>
        </div>
    </div>
</div>
  )
}
