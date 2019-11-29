import ApolloClient from 'apollo-boost'

const uri = process.env.REACT_APP_API_URL

const client = new ApolloClient({
  uri
})

export { client }
