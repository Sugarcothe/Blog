import React from 'react';
import Logo from './image/spin3.gif';
import { Link } from 'react-router-dom';
import PortImage from './image/portImage.jpg';
import Chattapp from './image/chatapp.png'

const Portfolio = () => {
  return (
    <div className='container'>

            <h2 className="display-5 pt-5 font-weight-bold "><Link className='text-white text-decoration-none' to='/'><img 
            style={{width:50}} src={Logo} alt=""/>iCodeTill.xyz</Link></h2>

      <div className="row pt-5 ">
        <div className="col-md-5">
          <img className='img-responsive p-2' className='rounded' src={PortImage} style={{width:450}} alt=""/>
        </div>

        <div className="col-md-7 p-2 text-justify">
          <h3 className='font-weight-bold'>BIO</h3>
          <p>I am a self-taught full-stack web-developer with the skill and mindset to it. My skillset in front-end includes using current React.js, JavaScript; Object Oriented Es6 syntax. In back-end I have knowledge of the CRUD operations and as well testing. Also, I AM very much dependable on the use of database and database connections, as well as NPM libraries and functions, and very many more. I can learn more and fast as company demands. I also enjoy working both as an individual and as a team.</p>
          <div className='p-1'>
          <i class="fas fa-layer-group">  FullStack (JavaScript)</i>
          </div>
          <div className='p-2'>
            <i class="fas fa-map-marker-alt">  Lagos, Nigeria</i>
          </div>
          <div className='p-2'>
            <i class="fas fa-phone-volume">  +2347067869822</i>
          </div>
          <div className='p-2'>
          <i class="fas fa-envelope"> ifeanyivalentine82@gmail.com</i>
          </div>
          <div className="row m-4">
          <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-github"> Github</i></a>
          <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-twitter"> Twitter</i></a>
          <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
          </div>
        </div>
         

      </div>
      <hr className='m-5 bg-white'/>


     
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body my-auto">
              <img className='img-responsive' src={Chattapp} style={{width:300}} alt=""/>
              <h5 className="card-title">PidginBox</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-github"></i></a>
              <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
       
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body my-auto">
              <img className='img-responsive' src={Chattapp} style={{width:300}} alt=""/>
              <h5 className="card-title">PidginBox</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-github"></i></a>
              <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
       
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body my-auto">
              <img className='img-responsive' src={Chattapp} style={{width:300}} alt=""/>
              <h5 className="card-title">PidginBox</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-github"></i></a>
              <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Portfolio
