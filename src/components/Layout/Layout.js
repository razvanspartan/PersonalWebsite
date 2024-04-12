import React from "react";
import {Link} from 'react-router-dom';
import './Layout.css'

const Layout = ({children}) =>{
    return (
<div className='mainLayout'>
    <div className='layerOntop'>
        <main>
            {children}
        </main>
    </div>
</div>

)
    ;
}
export default Layout;