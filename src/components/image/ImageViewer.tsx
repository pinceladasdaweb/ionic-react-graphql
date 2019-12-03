import React, { useRef } from 'react'
import {
  IonIcon,
  IonSlide,
  IonTitle,
  IonSlides,
  IonButton,
  IonFooter,
  IonToolbar,
  IonButtons,
  IonContent
} from '@ionic/react'
import styles from './ImageViewer.module.scss'
import { add, remove, close } from 'ionicons/icons'

interface Props {
  src: string
  onClose?: () => void
}

const ImageViewer: React.FC<Props> = props => {
  const { src, onClose = () => null } = props
  const slidesRef = useRef<HTMLIonSlidesElement>(null)
  const options = {
    zoom: {
      maxRatio: 5
    }
  }

  const handleZoom = async (zoomIn: boolean) => {
    const { zoom } = await slidesRef.current!.getSwiper()

    zoomIn ? zoom.in() : zoom.out()
  }

  return (
    <>
      <IonContent className='transparent'>
        {src ? (
          <IonSlides options={options} ref={slidesRef} className={styles.slides}>
            <IonSlide>
              <div className='swiper-zoom-container'>
                <img src={src} alt='Zoom Viewer' />
              </div> 
            </IonSlide>
          </IonSlides>
        ) : null}
      </IonContent>
      <IonFooter>
        <IonToolbar className='transparent'>
          <IonTitle slot='start'>Zoom</IonTitle>
          <IonButtons slot='start'>
            <IonButton color='light' onClick={() => handleZoom(true)}>
              <IonIcon icon={add} slot='icon-only' />
            </IonButton>
            <IonButton color='light' onClick={() => handleZoom(false)}>
              <IonIcon icon={remove} slot='icon-only' />
            </IonButton>
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton color='light' onClick={onClose}>
              <IonIcon icon={close} slot='icon-only' />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </>
  )
}

export default ImageViewer
