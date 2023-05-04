import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './components/navbar';

function Root() {
    return (
        <>
        <ResponsiveAppBar/>
        <Outlet/>
        </>
        )
    }
    
export default Root
    