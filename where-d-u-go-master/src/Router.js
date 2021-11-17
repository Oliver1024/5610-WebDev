import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from 'pages/Welcome'
import PlaygroundFreeplay from 'pages/PlaygroundFreeplay'
import PlaygroundNormal from 'pages/PlaygroundNormal'
import Drag from 'pages/Preparation'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/playground-freeplay" component={PlaygroundFreeplay} />
                <Route path="/playground-normal" component={PlaygroundNormal} />
                {/* rememeber to delete test */}
                <Route path="/preparation" component={Drag} />
            </Switch>
        </BrowserRouter>
    )
}