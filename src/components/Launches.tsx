import React, {
  useState,
  useEffect,
  useCallback
} from 'react'
import {
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonLoading
} from '@ionic/react'

import Error from './Error'
import LaunchesItem from './LaunchesItem'
import { useLaunchesPastQuery, Launch } from '../generated/graphql'


const Launches: React.FC = () => {
  const { data, loading, error, fetchMore } = useLaunchesPastQuery({
    variables: {
      limit: 12,
      offset: 0
    }
  })

  const [offset, setOffset] = useState(0)
  const [limit] = useState(12)
  const [finished, setFinished] = useState(false)

  const handleLoadMore = useCallback(() => {
    setOffset(limit + offset)
  }, [limit, offset])

  useEffect(() => {
    if (offset > 0) {
      fetchMore<'offset'>({
        variables: {
          offset
        },
        updateQuery (previous, { fetchMoreResult }) {
          if (!fetchMoreResult) {
            return previous
          }

          if (fetchMoreResult.launchesPast.length < limit) {
            setFinished(true)
          }

          return {
            ...previous,
            launchesPast: [
              ...previous.launchesPast,
              ...fetchMoreResult.launchesPast
            ]
          }
        }
      })
    }
  }, [fetchMore, limit, offset])

  if (loading) {
    return <IonLoading isOpen={loading} message='Loading...' />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <IonGrid fixed>
      <IonRow>
        {data && data.launchesPast.map(launch => (
          <IonCol key={launch.id} size='12' sizeSm='6' sizeLg='4'>
            <LaunchesItem launch={launch as Launch} />
          </IonCol>
        ))}
      </IonRow>
      {!loading && !finished ? (
        <IonRow>
          <IonCol>
            <IonButton expand="block" onClick={handleLoadMore}>Load more ...</IonButton>
          </IonCol>
        </IonRow>
      ) : (null)}
    </IonGrid>
  )
}

export default Launches
