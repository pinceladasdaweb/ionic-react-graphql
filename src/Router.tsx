import React from 'react'
import Home from './pages/Home'
import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/home" component={Home} exact={true} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
