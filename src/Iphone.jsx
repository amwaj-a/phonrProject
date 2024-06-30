import React from 'react'
import { useState } from 'react'
// import { PropTypes } from "prop-types";

function Iphone(props) {
const sendMassage=(e)=>{ 
   props.setonline2('online')
  props.setSecreen2([...props.Secreen2,
   
   props.m1.trim()!==''&&
      <span className='bg-white text-black
   px-2 my-1 rounded relative break-all self-end'>{props.m1}
   <small className='text-xs
    text-gray-500 font-light relative right-0  ms-3'>
      {date(new Date().getHours() )  }:
{date(new Date().getMinutes())  }</small>
</span>
   
])
 props.setSecreen([...props.Secreen,
  props.m1.trim()!==''&&
 <span className=' bg-green-200
  text-black px-2 my-1 rounded relative break-all self-start'>{props.m1}
  <small className='text-xs text-gray-500 font-light
 relative right-0  ms-3'>{new Date().getHours()   }:
{new Date().getMinutes()  }</small></span>])
 props.setm1('')
}

const date=(time)=>{
return (time<10?'0':'')+time;

}



  return (
   


<div className={"mockup-phone  m-4 "+ props.border}>
  <div className="camera  "></div> 

  <div id='phone' className="display h-full  ">
    <div className="artboard h-full 
      artboard-demo  phone-1 
      flex flex-col">
    {/* top iphone */}
  <div className='bg-gray-100  
     px-2 text-black 
      w-full max-lg:px-3
      self-start '>
  <div className='flex m-3 max-lg:mx-3 justify-between'>
    <strong className=' text-sm'>
      {date(new Date().getHours())}:{date(new Date().getMinutes())}
      
      </strong>

<strong className='flex gap-1 '>
<ion-icon name="cellular"></ion-icon>
 <ion-icon name="wifi-outline"></ion-icon>
 <ion-icon name="battery-full-outline"></ion-icon> 

 </strong></div>
{/*  info in chat */}
<div className=' ms-3 pb-2 flex justify-between '>
 <div className='flex'>
 <img className=' rounded-full  h-12 w-12 me-3' src={props.img} alt="" />
<div className='flex flex-col justify-center'>
  <strong className='text-sm'> 
    {props.name}</strong>
  <small className='text-xs text-gray-500 font-light'>{props.online}</small>
 </div>
 </div>
 <div className='self-center flex gap-2'>
 <ion-icon style={{fontSize:'1.3rem'}} name="videocam-outline"></ion-icon>
  <ion-icon style={{fontSize:'1.3rem'}} name="call-outline">
    </ion-icon>
    </div>
</div>
</div>    

{/* chat  */}
<div id='chat'  className= 
{'bg-no-repeat overflow-y-auto bg-cover  w-80 h-[80%] '+props.bg}>

 <p  className='max-sm:pe-2 max-md:pe-16 p-2 w-[95%]'>
 {props.Secreen.map((e,i)=>{

    return(
      
<div key={i} className='text-wrap flex flex-col'>{e}</div>
  )
}
  )} 

</p>

</div>

{/* sent */}
<div className='bg-gray-200  ps-3 w-full h-[9%] flex'> 
<textarea onChange={(e)=>{
  props.setonline2('typing..')
  props.setm1(e.target.value)
}}  value={props.m1} type="text"

placeholder='type a message'
className='placeholder:text-sm focus:outline-none
 focus:ring-1
 border-black 
  placeholder:pt-1
bg-white 
focus:border-black text-black ps-3 ml-2 
 mt-2 mb-4 rounded-lg w-60 h-8 max-md:w-40 max-sm:w-60' />

<button onClick={(e)=>{
  
  sendMassage(e)
}} className=' m-2  mb-4  text-sm text-blue-600'>Send</button>

</div>

</div>

</div>

</div>


  )
}
//  Iphone.prototype={
// sty:PropTypes.shape({
//     color:
// })
//  }
export default Iphone

