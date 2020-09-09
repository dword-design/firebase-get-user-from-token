import jwtDecode from 'jwt-decode'

export default async token => {
  const user = token |> jwtDecode |> await
  return {
    ...user,
    email: user.email,
    emailVerified: user.email_verified,
    id: user.user_id,
    token,
  }
}
