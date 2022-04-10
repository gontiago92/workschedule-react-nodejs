import React, {useState, useRef} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/myTheme/Header';


function App(props) {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
}

export default App