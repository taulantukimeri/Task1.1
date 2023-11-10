import React from 'react'
import './DashboardCard.css'








function UserCard({name, description, version,date,button, span, icon, backgroundColor }) {
    const style = {
        backgroundColor: backgroundColor || 'limegreen',
        padding: '7px',
        color: 'white',
      };
  return (
    <div className='Card'>
        <div className='v-date'>
            
            <p>{version}</p>
            <p>{date}</p>
        </div>
    <div className='header'>
        <div className='n-desc'>

            <div className='s-name'>
            {/* <h4 className='span'>{span}</h4> */}
            {/* style={style} */}
            <span className='span' style={style}>{span}</span>
            <div className='n-icon'>
            <img src={icon} className='icon' />
            <h3>{name}</h3>
            </div>
            </div>
            <p>{description}</p>
            </div>
        </div>
        <button>{button}</button>
    
  </div>
  );
}

export default UserCard;