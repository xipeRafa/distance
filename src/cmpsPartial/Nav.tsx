import { Link } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';


export const Nav = ():JSX.Element => {

  const location = useLocation()

  return (
    <div className="navbar navbar-dark bg-black mb-4 px-4">

        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>&nbsp;
            Get Distance From
        </span>

          <div>
            <span>
              {
                location.pathname === '/cities' 
                ? <Link style={{color:"white"}} to="/results" className='mx-5'> Results </Link>
                : <Link style={{color:"white"}} to="/cities" className='mx-5'> Cities </Link>
              }
            </span>
          </div>


    </div>
  )

}



