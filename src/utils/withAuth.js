/* eslint-disable react/display-name */

/* 
BROKEN
  Checks for the presence of the Supabase login token. If not, kicks user out from protected routes.
*/

export default function withAuth(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
}
