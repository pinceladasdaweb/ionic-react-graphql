import React from 'react'
import Missions from './pages/Missions'
import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/missions" exact>
        <Missions />
      </Route>
      <Route path="/" exact>
        <Redirect to="/missions" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
