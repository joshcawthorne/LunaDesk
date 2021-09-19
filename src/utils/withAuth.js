/* eslint-disable react/display-name */
import Cookies from "js-cookie";
import { useRouter } from "next/router";

/* 
  Checks for the presence of the Supabase login token. If not, kicks user out from protected routes.
*/

export default function withAuth(WrappedComponent) {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("supabase.auth.token");

      if (!accessToken) {
        Router.replace("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}
