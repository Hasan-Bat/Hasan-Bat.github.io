import './header.css';

var Header = () =>{
        return(<div className='header'>
                <nav className='navbar'>
                        <a href="#one"> One</a>
                        <a href="#two"> Two</a>
                        <a href="#three"> Three</a>
                        <a href="#four"> Four</a>
                        
                </nav>
                <ul className='ulmenu'>
               
                        <li className="dropdown">
                        <a href="#gfd" className="dropbtn">Menu</a>
                        <div className="dropdown-content">
                        <a href="#one"> One</a>
                        <a href="#two"> Two</a>
                        <a href="#three"> Three</a>
                        <a href="#four"> Four</a>
                  
                </div>
                </li>
                </ul>

                

        </div>)

}
export {Header};

/*
                <ul>
               
                <li className="dropdown">
                  <a href="#gfd" className="dropbtn">Menu</a>
                  <a href="#gfd" className='dropbtn' id='menu_dropdown'>Menu</a>
                <div className="dropdown-content">
                        <a href="#one"> One</a>
                        <a href="#two"> Two</a>
                        <a href="#three"> Three</a>
                        <a href="#four"> Four</a>
                  
                </div>
                </li>
                </ul>
                


*/