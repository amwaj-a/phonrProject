import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Iphone from './Iphone'

function App() {
  const [Secrren, setSecrren] = useState([])
  const [Secrren2, setSecrren2] = useState([])
  const [m1, setm1] = useState('')
  const [m2, setm2] = useState('')
  const [online, setonline] = useState('online')
  const [online2, setonline2] = useState('online')
  // const hours=()=>{

  //   const hour=new Date().getHours()
  //  const m=new Date().getMinutes()  
  //  return `${date(hour)} : ${date(m)}`
  // }




  return (
    <>
<section>
<h1 className='text-4xl text-center m-9'>Chat </h1>
<p className='text-center m-1 text-xl'>Messaging exchange between two Phones. can use chat dirctly</p>
  <section className='flex justify-center
max-md:flex-col max-md:items-center
   max-sm:gap-8 max-sm:flex-col max-sm:items-center
   max-sm:pt-5 p-9 '>



<Iphone name='Nora'
img={'https://i.pinimg.com/474x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg'}
 bg=' bg-[url(https://i.pinimg.com/474x/93/b7/d6/93b7d66cc72d22bbbd6dcc5479209419.jpg)] '
m1={m1} setm1={setm1} 
online={online}setonline={setonline}
online2={online2}setonline2={setonline2}
Secreen={Secrren}setSecreen={setSecrren}
Secreen2={Secrren2}setSecreen2={setSecrren2}/>


<Iphone name='Amwaj'
border='border-warning'

bg=' bg-[url(https://i.pinimg.com/474x/51/5f/65/515f6598886ba73213ce6268f33ebfe3.jpg)]'
img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s'}
m1={m2} setm1={setm2} 
online={online2}setonline={setonline2}
online2={online}setonline2={setonline}
Secreen={Secrren2}setSecreen={setSecrren2}
Secreen2={Secrren}setSecreen2={setSecrren}/>


</section>
</section>


    </>
  )
}

export default App










