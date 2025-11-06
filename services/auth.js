import { toast } from "sonner"
import { supabase } from "../lib/supabase-client"

export const signUpUser = async (email, password) => {
    const { error } = await supabase.auth.signUp({
        email,
        password,
    })

    if(error) {
        toast.error(error.message)
        return
    }
    toast.success('Check your email to confirm your account')
}

export const signInUser = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if(error) {
        toast.error(error.message)
        return
    }
    toast.success('Welcome back!')
}