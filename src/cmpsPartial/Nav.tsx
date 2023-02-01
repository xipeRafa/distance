import { Link } from 'react-router-dom';

export const Nav = ():JSX.Element => {

  return (
    <div className="navbar navbar-dark bg-black mb-4 px-4">

        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>&nbsp;
            Get Distance From
        </span>

          <div>
            <span>
              
              {localStorage.done === 'true' ? <>
                <Link style={{color:"white"}} to="/cities" className='mx-5'> Cities </Link>
                <Link style={{color:"white"}} to="/results" className='mx-5'> Results </Link>
              </>:
                <p style={{color:"white"}} className='mb-0'>Select The Cities</p>
              }
            </span>
          </div>


    </div>
  )

}



