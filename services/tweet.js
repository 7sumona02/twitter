import { toast } from "sonner"
import { supabase } from "../lib/supabase-client"

export const createTweet = async (userId, content, tweetImage) => {
    let imageUrl = null
    let imagePath = null
    //handle image upload
    if (tweetImage) {
        const filePath = `${tweetImage.name}-${Date.now()}`

        const { error: imgError } = await supabase.storage.from('tweets-images').upload(filePath, tweetImage)
        if (imgError) {
            toast.error(imgError.message)
        }

        const { data: { publicUrl } } = supabase.storage.from('tweets-images').getPublicUrl(filePath)

        imageUrl = publicUrl
        imagePath = filePath
    }

    //save tweet
    const { error: insertError } = await supabase.from('tweets').insert({
        user_id: userId,
        content: content ? content : null,
        image_url: imageUrl ? imageUrl : null,
        image_path: imagePath ? imagePath : null,
    })

    if (insertError) {
        toast.error(insertError.message)
    }
    toast.success('Tweet posted!')
    return true
}

export const getTweets = async () => {
    const { data,error } = await supabase.from('tweets').select(`*,profiles(id,username,name,avatar_url)`).order('created_at', { ascending: false })

    if(error) {
        toast.error(error.message)
    }
    return data
}