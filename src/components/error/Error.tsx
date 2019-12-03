import React from 'react'
import {
  IonCard,
  IonItem,
  IonCardTitle,
  IonCardHeader,
  IonCardContent
} from '@ionic/react'
import { ApolloError } from 'apollo-boost'

interface Props {
  error: ApolloError
}

const Error: React.FC<Props> = ({ error }) => (
  <IonCard color='danger'>
    <IonCardHeader>
      <IonCardTitle>{error.name}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <p>{error.message}</p>
    </IonCardContent>
    {error.graphQLErrors.map(({name, message}) => (
      <IonItem key={message} color='danger' lines='none'>
        {name}: {message}
      </IonItem>
    ))}
  </IonCard>
)

export default Error
