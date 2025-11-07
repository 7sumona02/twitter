'use client'
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase-client"

export const useUserSession = () => {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSession = async () => {
            const {data:{session}} = await supabase.auth.getSession()
            setSession(session)
            setLoading(false)
        }

        const {data:{subscription}} = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession)
        })

        fetchSession()

        return () => subscription.unsubscribe()
    },[])
    return {session, loading}
}