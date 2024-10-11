import Image from "next/image";
import Link from "next/link";
import ToggleButton from "./ToggleButton";

type HeaderProps = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;

}
export default function Header ( {isSidebarOpen, toggleSidebar}: HeaderProps){
    return(
        <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <ToggleButton isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <button>
                    <Image src="/download.svg" alt='download' width={30} height={30}></Image>
                </button>
            </div>

            <div className="flex gap-2">
                <Image src="/logo.png" alt='logo' height={32} width={32}/>
                <h1 className="text-2xl"><b>LOGO</b></h1>
            </div>

            <div className="flex items-center">
                <Link href='/auth'>
                    <button className="flex items-center gap-2">
                        <Image src="/sign-out.svg" alt="sign-out" width={30} height={30}></Image>
                        {/*<Image src="/logo.png" alt='seu perfil' height={32} width={32} className="rounded-[100px]"/>*/}
                    </button>
                </Link>
                
            </div>
        </div>
    )
}