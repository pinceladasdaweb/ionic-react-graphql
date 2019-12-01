import React from 'react'
import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'

import LaunchPage from './pages/LaunchPage'
import LaunchesPage from './pages/LaunchesPage'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/launches" exact>
        <LaunchesPage />
      </Route>
      <Route path="/launches/:id" exact>
        <LaunchPage />
      </Route>
      <Route path="/" exact>
        <Redirect to="/launches" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
