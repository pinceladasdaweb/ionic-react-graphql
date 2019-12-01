import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonBackButton
} from '@ionic/react'
import React from 'react'
import { useParams } from 'react-router'
import LaunchDetail from '../components/LaunchDetail'
import { useLaunchQuery, Launch } from '../generated/graphql'

const LaunchPage: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { data, loading } = useLaunchQuery({
    variables: { id }
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/launches' />
          </IonButtons>
          <IonTitle>Launch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {loading ? <p>Loading ...</p> : <LaunchDetail launch={data!.launch as Launch} />}
      </IonContent>
    </IonPage>
  )
}

export default LaunchPage
