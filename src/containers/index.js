import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/header/'
import headerProps from '../components/header/data'
import Home from './home/'
import Colors from './colors/'
import Icons from './icons/'
import Invalid from './invalid/'
import Gallery from './gallery/'
import Nav from '../components/nav/'
import navProps from '../components/nav/data'
import Footer from '../components/footer/'
import footerProps from '../components/footer/data'


// import app styles
// require('../stylus/base.styl')

// require('../stylus/override.styl')

 
const App = () => {
    return (
        <BrowserRouter basename="/ChaoWebCommon-2">
            <div className='bodywrap'>
                {/* render header */}
                <Header {...headerProps} />

                {/* render navigation */}
                <Nav {...navProps} />

                {/* render center content */}
                <div id='center'>
                    <Switch>
                        <Route exact path={navProps.navItems[0].url} component={Home} />
                        <Route path={navProps.navItems[1].url} component={Colors} />
                        <Route path={navProps.navItems[2].url} component={Icons} />
                        <Route path={navProps.navItems[3].url} component={Gallery} />
                        <Route component={Invalid} />
                    </Switch>
                </div>

                {/* render footer */}
                <Footer {...footerProps} />
            </div>
        </BrowserRouter>
    );
}


export default App;