import { ReactNode } from "react"
import Header from "../components/header"
import TextBar from "../components/textBar"

export default function ChatLayout({ children }: { children: ReactNode }){
    return(
        <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[auto,1fr,auto] gap-2 py-4 px-8">
            <Header/>
            {children}
        </div>
    ) 
}