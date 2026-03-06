import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' id='services'>
      <div className="program">
        <img src={program_1} alt="" />
         <p className="text">We create functional and visually appealing interior spaces tailored to your lifestyle and business needs.</p>
       
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>INTERIOR</p>
          </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <p className="text"> Our work precise engineering, and weather-resistant systems suitable for Indian conditions.</p>
       
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>EXTERIOR</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <p className="text">Engineering-focused designs that ensure strength, load capacity, and compliance with safety norms.</p>
       
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>BRIDGE</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
