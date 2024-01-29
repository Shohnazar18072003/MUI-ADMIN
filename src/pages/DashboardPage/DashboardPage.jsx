import { Carousel } from "antd";

const DashboardPage = () => {
  return (
    <div>
      <h1>
      DashboardPage
      </h1>
      <h2>Our Center</h2>
      <Carousel autoplay>
     <div>
      <h1 style={{backgroundColor: '#2196F3', color:'white', textAlign: 'center', margin:'10px'}}>Kasblarni mutaxasislardan organing</h1>
     </div>
     <div>
      <h1 style={{backgroundColor: '#2196F3', color:'white', textAlign: 'center', margin:'10px'}}>Kasblarni onlayn organing</h1>
     </div>
     <div>
      <h1 style={{backgroundColor: '#2196F3', color:'white', textAlign: 'center', margin:'10px'}}>Kasblarni istalgan nuqtadan organing</h1>
     </div>
     <div>
      <h1 style={{backgroundColor: '#2196F3', color:'white', textAlign: 'center', margin:'10px'}}>Kasblarni ( SHOHNAZAR ) dan organing</h1>
     </div>
      </Carousel>
      
      </div>


  )
}

export default DashboardPage