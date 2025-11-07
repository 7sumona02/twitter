import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createTweet, getTweets } from "../services/tweet"

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