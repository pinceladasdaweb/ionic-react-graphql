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

const Mission: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { data, loading } = useLaunchQuery({
    variables: { id }
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/missions' />
          </IonButtons>
          <IonTitle>Mission Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {loading ? <p>Loading ...</p> : <LaunchDetail launch={data!.launch as Launch} />}
      </IonContent>
    </IonPage>
  )
}

export default Mission
