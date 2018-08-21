import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Shelf from './Components/Shelf/Shelf';
import Bin from './Components/Bin/Bin';
import AddToBin from './Components/AddToBin/AddToBin';


export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shelf/:id" component={Shelf}/>
        <Route exact path="/shelf/:id/bin/:number" component={Bin}/>
        <Route exact path="/shelf/:id/:number" component={AddToBin}/>
    </Switch>
)