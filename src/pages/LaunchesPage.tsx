import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React from 'react'

import Launches from '../components/Launches'

const LaunchesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SpaceX Launches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Launches />
      </IonContent>
    </IonPage>
  )
}

export default LaunchesPage
