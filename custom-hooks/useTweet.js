import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createTweet, getTweets } from "../services/tweet"
import { toast } from "sonner"

export const usePostTweet = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:({userId,content,tweetImage}) => createTweet(userId,content,tweetImage),
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tweets']})
        }
    })
}

export const useGetTweets = () => {
    return useQuery({
        queryKey:['tweets'],
        queryFn:getTweets
    })
}

export const deleteTweet = async (tweetId,imagePath) => {
    const {error: deleteError} = await supabase.from('tweets').delete().eq('id',tweetId)

    if(deleteError){
        toast.error(deleteError.message)
        return
    }

    if(imagePath) {
        const {error: imageError} = await supabase.storage.from('tweets-images').remove([imagePath])
        if(imageError){
            toast.error(imageError.message)
            return
        }
    }
}

export const useDeleteTweet = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:({tweetId,imagePath}) => deleteTweet(tweetId,imagePath),
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tweets']})
        }
    })
}