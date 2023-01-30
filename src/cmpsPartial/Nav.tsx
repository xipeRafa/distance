import { Link } from 'react-router-dom';

export const Nav = () => {

  return (
    <div className="navbar navbar-dark bg-black mb-4 px-4">

        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>&nbsp;
            latitud
        </span>

          <div>
            <span>
              <Link style={{color:"white"}} to="/cities" className='mx-5'> Cities </Link>
              <Link style={{color:"white"}} to="/results" className='mx-5'> Results </Link>
            </span>
          </div>


    </div>
  )

}



