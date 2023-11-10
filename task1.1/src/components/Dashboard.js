import React from 'react'
import DashboardCard from './DashboardCard'
import './Dashboard.css'


function Dashboard(){
    const cards = [
        {   
            backgroundColor:'limegreen',
            span:'New',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },

        {
            backgroundColor:'blue',
            span:'Fix',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'fuchsia',
            span:'Improvement',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'limegreen',
            span:'New',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'blue',
            span:'Fix',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'fuchsia',
            span:'Improvement',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'limegreen',
            span:'New',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'blue',
            span:'Fix',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        },
        {
            backgroundColor:'fuchsia',
            span:'Improvement',
            icon:'favicon.ico',
            name:'Kevin Joe',
            description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization',
            version:'3.3.0',
            date:'(14/05/2018)',
            button:'Download'
            
        }
    ]








    // const Dashboard = props =>{
    //     console.log(props)
    //     return (
    //     <div>
    //         <h1>Hello {props.name}</h1>
    //     <p>{props.description}</p>
    //     <button>{props.button}</button>
    //     </div>
    //     )
    // }



  return (
    <div className='Dashboard'>
        <div className='Cards'>
        {cards.map((card, index) => (
            <DashboardCard
                backgroundColor={card.backgroundColor}
                version={card.version}
                date={card.date}
                span={card.span}
                icon={card.icon}
                name={card.name}
                description={card.description}
                button={card.button}
                
            />

          ))}

        </div>

    </div>
  )

  
}

export default Dashboard
