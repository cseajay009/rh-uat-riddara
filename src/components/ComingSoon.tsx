import Image from 'next/image'


import RiddaraLogo from '../../public/images/logo-blackbd37.svg';
import RiddaraBackground from '../../public/images/riddara.jpeg';
import IconMenuClose from '../../public/images/icon-menu-close.svg';
import BlackEarth from '../../public/images/earth-black.svg';
import IconRight from '../../public/images/icon-right.svg';
import Youtube from '../../public/images/icons/icon-youtube.svg';
import LinkedIn from '../../public/images/icons/icon-linkin.svg';
import Instagram from '../../public/images/icons/icon-instagram.svg';
import Twitter from '../../public/images/icons/icon-twitter.svg';
import Facebook from '../../public/images/icons/icon-facebook.svg';
import Tiktok from '../../public/images/icons/icons8-tiktok.svg';
import FooterLogo from '../../public/images/logo.svg';
import BacktoTop from '../../public/images/back-to-top.svg';
import BackgroundImage from './BackgroundImage';
export default function ComingSoon() {


  return (
    <div className='site-container-riddara'>



<header className="header">
        
        <div className="header-container">
            <div className="header-left">
                <a className="header-item logo" href="#">     
            <h1 className="header-h1">
            <Image  className="logo-img"  src={RiddaraLogo} alt="Riddara" />
            </h1>
        </a>
        
            </div>
            <div className="header-middle">
            {/**<div className="header-item">
                <a className="header-item-name" href="#">RIDDARA RD6</a>
                <div className="header-underline "></div>
            </div>
            <div className="header-item">
                <a className="header-item-name" href="#">ABOUT RIDDARA</a>
                <div className="header-underline "></div>
            </div>
            <div className="header-item">
                <a className="header-item-name" href="#">NEWSROOM</a>
                <div className="header-underline "></div>
            </div> */}    
            
            <div className="header-item">
                <a className="header-item-name" href="#">Coming Soon</a>
                <div className="header-underline header-underline-current"></div>
            </div>
        
            </div>
        
            
        </div>
            
        
            </header>
<main className="site-main" role="main">

                    {/* home_part_box effects in getting the social icons in the mid of the screen
                     Hence removing it for now, Will come on it later
                    */}
 <div className="background-container-riddara">
 <div className="content-inside-riddara-background">
            <h1 className='coming-soon-text'>Coming Soon</h1>
            
           
 </div>
     

</div>
   {/** End Here */}
                    

      {/* Resting below div in peace to see how next js works with background Images */}
                <div style={{backgroundImage:`url(${RiddaraBackground})`}}>
               
                </div>
        
            </main>

          {/*
          
           
          
          */}


          
<footer className="site-footer">
                    <div className="container">
                <div className="container-topLine"></div>
                <div className="container-content">
                    <div className="container-content-top">
                        <div className="container-content-inner">
                            <div className="container-content-left">
                                    <div className="container-content-item">
        
        <a href="/"> 
        <Image  className="footer-logo"  src={FooterLogo} alt="Riddara" />
                                      
                                        </a>
                                    </div>
                            </div>
                            <div className="container-content-right">
        
                                    <div className="container-menu">
        
                                        <a className="container-menu-item" aria-label="RIDDARA RD6" href="#"> 
                                        RIDDARA RD6
                                        </a>
        
                                    </div>
                                    <div className="container-menu">
        
                                        <a className="container-menu-item" aria-label="ABOUT RIDDARA" href="#"> 
                                        ABOUT RIDDARA
                                        </a>
        
                                    </div>
                                    <div className="container-menu">
        
                                        <a className="container-menu-item" aria-label="NEWSROOM" href="#"> 
                                        NEWSROOM
                                        </a>
        
                                    </div>
                                    <div className="container-menu">
        
                                        <a className="container-menu-item" aria-label="CONTACT US" href="#"> 
                                        CONTACT US
                                        </a>
        
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-content-middle">
                            <div className="container-social">
        <a className="social-icons" href="https://www.youtube.com/@riddara-uae">            
        <Image  className="social-icons-item"  src={Youtube} alt="Youtube" />
           
        </a><a className="social-icons" href="https://www.linkedin.com/company/riddara-uae">            
        <Image  className="social-icons-item"  src={LinkedIn} alt="LinkedIn" />
        
        </a><a className="social-icons" href="https://www.instagram.com/riddara.uae">           
          
            <Image  className="social-icons-item"  src={Instagram} alt="Instagram" />
            
        </a><a className="social-icons" href="#">        
        <Image  className="social-icons-item"  src={Twitter} alt="Twitter" />   
           
        </a>    
        
        <a className="social-icons" target="_blank">        
        <Image  className="social-icons-item"  src={Facebook} alt="Facebook" />   
           
        </a> 
        <a className="social-icons" target="_blank">        
        <Image  className="social-icons-item"  src={Tiktok} alt="Tiktok" />   
           
        </a> 
        
        </div>
        
                    </div>
                    <div className="container-content-bottom">
                        <div className="container-copyright">© 2024 Riddara. All Rights Reserved.</div>
        <div className="container-policy">
        <a href="#" className="href">Cookie Policy</a>
        </div>
                    </div>
                </div>
            </div>
         
        
            </footer>
        



    </div>
  )
}
