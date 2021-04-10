import React, {Component} from 'react'
import Logo from './image/spin3.gif';
import { Link } from 'react-router-dom';

 class Blog extends Component{

  
   render() {
    return (

      <div className='container pt-5'>
        <div className='blog-header'> 
        <h2 className="display-5 font-weight-bold "><Link className='text-white text-decoration-none' to='/'><img 
            style={{width:50}} src={Logo} alt=""/>iCodeTill.xyz</Link></h2>
        </div>
        <div class="row pt-5">
          <>
          <h3>
            
          </h3>
            <div class="col-8 bg-white text-justify text-dark p-5 ">
              <h4 className='p-2 rounded-pill'>Lorem ipsum dolor sit amet consectetur adipisicing elit </h4>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi sit aliquid esse atque provident eius voluptatum reprehenderit ad tempora sequi. Nisi, debitis magnam nesciunt suscipit modi dolor ut eaque commodi eos veniam exercitationem repellat officia placeat ducimus magni dolore nam voluptates animi molestiae odit recusandae, vel tenetur voluptatum incidunt.
              </div>
          </>
          
            <>
              <div class="col-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officiis voluptatem reiciendis fugiat reprehenderit nihil quae odit consequatur exercitationem culpa?</div>
            </>
         
        
      </div>
      </div>
      
    )
   }
 
}

export default Blog
