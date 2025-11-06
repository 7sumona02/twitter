import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from '@/components/ui/button'
import { Search } from "lucide-react"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const RightSidebar = () => {
    return (
        <div className='w-[350px] h-screen fixed right-0 p-3 border-l'>
            <div className="w-full">
                <InputGroup>
                    <InputGroupInput placeholder="Search" />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className="space-y-3 mt-10">
                <div className="text-xl font-bold">Subscribe to Premium</div>
                <div>Subscribe to unlock new featuresand if eligible, receive a share of revenue.</div>
                <div className="w-full"><Button>Subscribe</Button></div>
            </div>
            <div className="mt-10">
                <div className="text-xl font-bold">Who to follow</div>
                    <div className="flex w-full max-w-lg flex-col gap-5 mt-5">
                        <Item variant="outline">
                            <ItemMedia>
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/evilrabbit.png" />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Sumona Biswas</ItemTitle>
                                <ItemDescription>@sumona97</ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button
                                    size="sm"
                                    variant="outline"
                                >
                                    Follow
                                </Button>
                            </ItemActions>
                        </Item>
                         <Item variant="outline">
                            <ItemMedia>
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/evilrabbit.png" />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Sam</ItemTitle>
                                <ItemDescription>@sam</ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button
                                    size="sm"
                                    variant="outline"
                                >
                                    Follow
                                </Button>
                            </ItemActions>
                        </Item>
                         <Item variant="outline">
                            <ItemMedia>
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/evilrabbit.png" />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Alex</ItemTitle>
                                <ItemDescription>@alex</ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button
                                    size="sm"
                                    variant="outline"
                                >
                                    Follow
                                </Button>
                            </ItemActions>
                        </Item>
                </div>
            </div>
            </div>
        )
}

            export default RightSidebar