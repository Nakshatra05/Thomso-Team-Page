import React from 'react'
import './TeamMemberCard.css'
import Convenor from './Convenor'
import Co_convener from './MemberCard'
import MemberCard from './MemberCard'

const TeamMemberCard = () => {
  return (
    <div className='container'>
      <Convenor/> 
      <div >
        <div style={{color:'#155AA1',fontSize:'50px', alignItems:'center',textAlign:'center',padding:'40px' }}>Co-Convener</div>
        <div className="co_convener_section">
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          
          
          
        </div>
        
      </div>
      <div >
        <div style={{color:'#155AA1',fontSize:'50px', alignItems:'center',textAlign:'center',padding:'40px' }}>Heads</div>
        <div className="co_convener_section">
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          <Co_convener/>
          
          
        </div>
        
      </div>
      
    </div>
  )
}

export default TeamMemberCard
