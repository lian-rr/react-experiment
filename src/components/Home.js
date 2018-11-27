import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Apartments from './Apartments';
import Header from './Header';
import Administration from './Administration';

class Home extends Component {
    render() {
        return (
            <div class="wrapper">
                <Header />
                <main class="container">
                    <Switch>
                        <Route exact path={'/'} component={Apartments} />
                        <Route path={'/home'} component={Apartments} />
                        <Route path={'/administration'} component={Administration} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Home;