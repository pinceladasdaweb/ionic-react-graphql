import {
  IonRow,
  IonCol,
  IonPage,
  IonGrid,
  IonModal,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonBackButton
} from '@ionic/react'
import { useParams } from 'react-router'
import ImageViewer from '../components/ImageViewer'
import React, { useState, useCallback } from 'react'
import LaunchDetail from '../components/LaunchDetail'
import { useLaunchQuery, Launch } from '../generated/graphql'

const LaunchPage: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { data, loading } = useLaunchQuery({
    variables: { id }
  })

  const [selectedImage, setSelectedImage] = useState('')

  const handleSelectImage = useCallback((url: string) => {
    setSelectedImage(url)
  }, [])

  const handleModalClose = useCallback(() => setSelectedImage(''), [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/launches' />
          </IonButtons>
          <IonTitle>Launch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid fixed>
          <IonRow>
            <IonCol sizeLg='8' offsetLg='2'>
              {loading ? (
                <p>Loading ...</p>
              ) : (
                <LaunchDetail
                  launch={data!.launch as Launch}
                  onSelectImage={handleSelectImage}
                />
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonModal isOpen={!!selectedImage} onDidDismiss={handleModalClose}>
        <ImageViewer src={selectedImage} onClose={handleModalClose} />
      </IonModal>
    </IonPage>
  )
}

export default LaunchPage
