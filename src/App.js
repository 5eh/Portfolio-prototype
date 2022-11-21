import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar'

function App() {
    
 
  return <>
 
       <Navbar />
    <div>
      <p>Insert Render from here</p>
      
      
      <div className='nametag'>
      <h1 className='Myname'>WATSON LEWIS-RODRIGUEZ</h1>
      </div> 
        <h1 className='nametagsubheading'>Entrepreneur and Developer</h1>
      


        <div className='quotetag'>
          <p>let watson: human = new Networker({'rating: &quot;a++&quot;'}) watson.networking.execute()</p>
        </div>


      <h2 className='header margintop'>Hello world</h2>
      <div className='container'>
      <p className='paragraph'>I'm Watson, a self-proclaimed entrepreneur looking to build in Web3 through React, and this is my journey getting started!</p>
      <p className='paragraph'>My dream is to master programming and Nomad to Vietnam. </p>
      <p className='paragraph'>Current operation: CoFounding Pigeon DAO LLC, about to change the world with my boy Noah. If you're looking to get involved in Web3, I'd love to help you find the opportunity to do so</p>
     </div>
        <h2 className='header'>Bio</h2>
      <div className='container'>
      <p className='paragraph'>I'm currently working to finishing my Associates in Business Management and then pursuing Computer Programming as a career. I've finished BTEC College in Kingston College (UK) with an IT degree, and now looking to build front end applications for the thrill of it</p>
      <p className='paragraph'>I'm always looking to learn and provide opportunities for aspiring entrepreneurs and developers, if you are needing a gateway to your career, I might have the resources for you! Give me a reach at <span className='email'>watsonlewrod1@gmail.com</span></p>
      </div>
        <h2 className='header'>Socials</h2>
      <div className='socialmedia'>
      <button className='discordbox'><a href='#' target='_blank' className='socialButton discord '>Discord</a></button>
      <button className='linkedinbox'><a href='#works' target='_blank' className='socialButton linkedin '>LinkedIn</a></button>
      <button className='mediumbox'><a href='#' target='_blank' className='socialButton medium '>Medium</a></button>
      </div>
    </div> 
    <Footer />
  </>
}

export default App;
