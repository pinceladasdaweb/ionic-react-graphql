import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem
} from '@ionic/react'
import React from 'react'

import { useLaunchesPastQuery } from '../generated/graphql'

const Home: React.FC = () => {
  const { data, loading } = useLaunchesPastQuery()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data && data.launchesPast.map(launch => <IonItem key={launch.id}>
            {launch.mission_name} | {launch.rocket.rocket_name}
          </IonItem>)
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
