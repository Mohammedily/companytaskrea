import React , {Fragment} from 'react';
import './App.css';


function App() {
  return (
    <Fragment className="Fragment">
   <section>
    <div className='content'>
    </div>
    <div className='imagebox'>
   <div className='form'>
    <div className='form1'>
      <p className='p1'>ALREADY MEMBERS</p>
      <p className='p2'>Need help?</p>
    </div>
    <div className='form2'>
      <input className='input' type="text" placeholder='  Enter Your  Username' />
      <input className='input' type="password" placeholder='  Enter Your Password' />
       <button className='sign'>SIGN IN</button>
    </div>
   
    </div>
        <p className='p3'>Don't have an account yet ?</p>
    <p className='p4'>Create an account</p>
    </div>

   </section>
   </Fragment>
  );
}

export default App;
