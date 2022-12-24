import { Outlet } from 'react-router-dom';
import HeaderPage from './Header-Page'
function MainPage() {
    return ( 
        <div className="w-full h-full flex flex-col relative">
            
            <HeaderPage/>
            <Outlet/>
        </div>
     );
}

export default MainPage;