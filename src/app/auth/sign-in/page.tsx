import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";
import Tittle from "@/app/components/tittle";
import Link from "next/link";

export default function SignIn(){
    return(
        <div className="flex flex-col items-center gap-[56px]">
            <div className=" w-full flex flex-col gap-[16px]">
                <div className="flex items-center gap-[28px]">
                    <Link href="./" passHref className="flex items-center">
                        <button className="bg-[url('/Vector.svg')] min-w-[12px] h-[20px]"/>
                    </Link>
                    <Tittle text='Crie a sua conta'></Tittle>
                </div>
                
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-medium leading-[30px] font-poppins text-[#333333]">Email</p>
                    <InputField placeholder="Insira seu email"/>
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-medium leading-[30px] font-poppins text-[#333333]">Senha</p>
                    <InputField placeholder="Crie uma senha forte"/>
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-medium leading-[30px] font-poppins text-[#333333]">Confirmar Senha</p>
                    <InputField placeholder="Crie uma senha forte"/>
                </div>
            </div>
            <div className="w-[80%]">
                <Button href="./" text="Continuar" variant="primary"/>
            </div>
        </div>
    )
}