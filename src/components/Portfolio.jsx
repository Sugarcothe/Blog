import React from 'react';
import Logo from './image/info.png';
import { Link } from 'react-router-dom';
import PortImage from './image/portImage.jpg';
import Chattapp from './image/chatapp.webp';
import Weather from './image/weather.jpg';
import vibers from './image/chatapp.jpg'

const Portfolio = () => {
  return (
    <div className='container mt-5'>

            <h2 className="display-5 font-weight-bold "><Link className='text-white text-decoration-none' to='/'><img 
            className='img-responsive' style={{width:50}} src={Logo} alt=""/> iCodeTill.xyz</Link></h2>

      <div className="row pt-5 ">
        <div className="col-md-4 image-portfolio">
          <img className='image-portfolio img-responsive p-2 rounded mw-100' src={PortImage} style={{width:450, height:'auto'}} alt=""/>
        </div>

        <div className="col-md-8 text-justify">
          <h3 className='font-weight-bold'>BIO</h3>
          <p className='container-fluid'>I am a self-taught full-stack web-developer with the skill and mindset to it. My skillset in front-end includes using current React.js, JavaScript; Object Oriented Es6 syntax. In back-end I have knowledge of the CRUD operations and as well testing. Also, I AM very much dependable on the use of database and database connections, as well as NPM libraries and functions, and very many more. I can learn more and fast as company demands. I basically create APIs in the backend, test it and consume them in the frontend. I enjoy working both as an individual and as a team.</p>
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


     <>
     <h4 className='justify-content-center'>Projects</h4>
     <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body my-auto">
              <img className='img-responsive' src={Chattapp} style={{width:300, height:'auto'}} alt=""/>
              <h5 className="card-title m-2">Messenger</h5>
              <p className="card-text text-justify">An app built on MERN stack, with form validation and authentication. Built in current ES6 JavaScript syntax. With great logic and methodology.</p>

              <p className="card-text text-justify"> <span className='text-warning '>Technology</span> CRUD Operation, OOP syntax, javascript, Mustache, Bootstrap, Node, Express, MongoDb (NPM library includes, Path, http, express, socket) </p>
              <a href="https://github.com/Sugarcothe/PidginTalk" className="btn m-1 btn-sm border"><i class="fab fa-github"></i></a>
              <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
       
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body my-auto">
              <img className='img-responsive' src={vibers} style={{width:300, height:'auto'}} alt=""/>
              <h5 className="card-title">Social Media</h5>
              <p className="card-text">A MERN fullstack project, with both frontend and fetched it's data from the API I built in the backend.</p>
              <p className="card-text text-justify"> <span className='text-warning '>Technology</span> CRUD Operation, OOP syntax, javascript, Mustache, Bootstrap, Node, Express, MongoDb (NPM library includes, Path, http, express, socket) </p>
              <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-github"></i></a>
              <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
       
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body my-auto">
              <img className='img-responsive' src={Weather} style={{width:300, height:'auto'}} alt=""/>
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">A weather App i built, but consumes external weather API, using axios request. Then handlebars was used to render the HTML/CSS</p>
              <p className="card-text text-justify"> <span className='text-warning '>Technology</span> OOP syntax, javascript, handlebars, async/await, Node, Express (NPM library includes, forecast, geocode) </p>
              <a href="#" className="btn m-1 btn-sm border"><i class="fab fa-github"></i></a>
              <a href="#" className="btn m-1 btn-sm border"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
       
      </div>
     </>
      <hr className='bg-light'/>
      <div className ='container'>
        <div className="card mb-5">
          <div className="card-header text-dark">
            Contact
          </div>
          <div className="card-body">
            <h5 className="card-title">Lets Talk!</h5>
            <p className="card-text">You can easily reach me through my email <span className='text-warning font-weight-bold'>ifeanyivalentine82@gmail.com</span> or phone <span className='text-warning font-weight-bold'>+2347067869822</span></p>
            <a href="#" className="btn btn-primary btn-sm">Email</a>
          </div>
        </div>


        <div class="text-center  my-5">
          <small><span className='text-mute pt-2'>© 2021 Copyright <a className='text-warning text-decoration font-weight-bold' href="https://twitter.com/sweetestshuga"> iCodeTill.xyz</a></span></small> 
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio
