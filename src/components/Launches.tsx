import React, {
  useState,
  useEffect,
  useCallback
} from 'react'
import { IonButton } from '@ionic/react'

import LaunchesItem from './LaunchesItem'
import { useLaunchesPastQuery, Launch } from '../generated/graphql'


const Launches: React.FC = () => {
  const { data, loading, fetchMore } = useLaunchesPastQuery({
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

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && data.launchesPast.map(launch => (
          <LaunchesItem key={launch.id} launch={launch as Launch} />
        ))
      )}
      {!loading && !finished ? (<IonButton expand="block" onClick={handleLoadMore}>Load more ...</IonButton>) : (null)}
    </>
  )
}

export default Launches
