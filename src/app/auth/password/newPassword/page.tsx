import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";

export default function SignIn(){
    return(
        <div className="flex flex-col items-center gap-[42px]">

            <span className="text-[30px] font-semibold leading-[37.5px] font-poppins text-[#3ea59f]">Nova senha</span>


            <div className=" w-full flex flex-col gap-[16px]">
                <p className="text-[18px] font-normal leading-[27px] font-poppins text-[#333333]">
                    Insira uma nova senha para a sua conta.
                </p>
                
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-medium leading-[30px] font-poppins text-[#333333]">Nova senha</p>
                    <InputField placeholder="Crie uma senha forte"/>

                    <p className="text-[20px] font-medium leading-[30px] font-poppins text-[#333333]">Confirmar Senha</p>
                    <InputField placeholder="Confirmar senha"/>
                </div>

            </div>

            <div className="flex flex-col w-[80%] gap-[16px]">
                <Button href="/auth" text="Continuar" variant="primary"/>
            </div>
        </div>
        

        
    )
}