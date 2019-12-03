import React from 'react'
import { client } from './apollo'
import Router from './routes/Router'
import { IonApp } from '@ionic/react'
import Menu from './components/menu/Menu'
import { ApolloProvider } from '@apollo/react-hooks'

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <IonApp>
      <Router>
        <Menu />
      </Router>
    </IonApp>
  </ApolloProvider>
)

export default App
