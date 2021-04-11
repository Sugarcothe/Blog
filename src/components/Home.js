import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './image/info.png'

class Home extends Component {

  render() {
    
  return (
    <div className='main-body container'>
      <div className="header row ">
        <div className="col-md-8">
        <div className="Jumbotron ">
           
            <h2 className="display-5 font-weight-bold "><Link className='text-white text-decoration-none' to='/'><img 
            className='img-responsive' style={{width:50}} src={Logo} alt=""/> iCodeTill.xyz</Link></h2>
           
            <p className='display-5'>My Name Is Valentine Eze </p>
            <hr className='bg-light'/>
            <p className='display-5 text-justify  pt-4'>I am a Fullstack Developer/Tech Writer. My stack includes, HTML/CSS (SASS, Bootstrap, Tailwind CSS), React, Node.js, Javascript(Object Oriented Programming; of ES6 ES7 syntax), Express, Database, MongoDb, Testing, CRUD Operation, NPM libraries, Bash, Github, Mysql, Deployment, Figma.</p>
          </div>
          
        <div className="row pt-3">
            <div class="btn-container ">
              <button class="btn btn-3 btn-sm text-light border m-2"><Link className='text-white text-decoration-none' to='/Portfolio'>Portfolio</Link></button>
                </div>
              <div class="btn-container">
                <button class="btn btn-3 btn-sm text-light border m-2"><Link className='text-white text-decoration-none' to='/Blog'>Blog</Link></button>
              </div>
              
            </div>
          </div>        
        
          

        <div className="imago col-sm-3 mt-5">
          <div className='badge'>
              <div className='text'>’Welcome!</div>
          </div>
        </div>
      

      </div>

      {/* footer */}
      <div class="text-center  mt-5 mb-3">
      <small><span className='text-mute pt-2'>© 2021 Copyright <a className='text-warning text-decoration font-weight-bold' href="https://twitter.com/sweetestshuga"> iCodeTill.xyz</a></span></small> 

      </div>
    </div>
    
  )
  }
}

export default Home
