import React from 'react'
import Router from './Router'
import { client } from './apollo'
import { IonApp } from '@ionic/react'
import { ApolloProvider } from '@apollo/react-hooks'

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <IonApp>
      <Router />
    </IonApp>
  </ApolloProvider>
)

export default App
