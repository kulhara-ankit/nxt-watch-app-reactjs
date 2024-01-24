import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
// If jwt token is undefined, then it routes the user directly to the login page

// And if the user is defined, then it routes the user to the other pages.
// That's why we return other props in the second condition
