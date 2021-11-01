import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { supabase } from "../services/supabaseClient";



export function Shield({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const session = supabase.auth.session()
        setUser(session?.user ?? null)
        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null)
            }
        )
        return () => {
            listener?.unsubscribe()
        }
    }, [])

    return <div>{children}</div>
}


