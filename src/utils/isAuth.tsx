import { supabase } from "services/supabaseClient";

export default async function IsAuth(context) {
    const { user } = await supabase.auth.api.getUserByCookie(context.req)
    if (!user) {
        return false
    } else {
        console.log("User", user)
        return true;
    }
}