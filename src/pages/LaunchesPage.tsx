import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonMenuButton
} from '@ionic/react'
import React from 'react'

import Launches from '../components/launches/Launches'

const LaunchesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
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
