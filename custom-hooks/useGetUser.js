import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase-client"
import { toast } from "sonner"
import { useUserSession } from "./useUserSession"

export const useGetUser = () => {
    const [profile, setProfile] = useState(null)
    const {loading, session} = useUserSession()

    const userId = session ? session.user.id : null
    console.log('User ID:', userId)

    useEffect(() => {
        if(!userId) return

        const fetchProfile = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()

  if (error) {
    console.error('Profile fetch error:', error)
    toast.error(error.message)
    setProfile(null)
    return
  }

  if (!data) {
    console.warn('No profile found for userId:', userId)
    toast.error('Profile not found')
    setProfile(null)
    return
  }

  console.log('Fetched profile:', data)
  setProfile(data)
}

        fetchProfile()
    },[userId])
    return {profile, session, loading}
}