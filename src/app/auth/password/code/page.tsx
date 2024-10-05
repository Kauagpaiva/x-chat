import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";

export default function SignIn(){
    return(
        <div className="flex flex-col items-center gap-[42px]">

            <span className="text-[30px] font-semibold leading-[37.5px] font-poppins text-[#3ea59f]">Digite o código</span>


            <div className=" w-full flex flex-col gap-[16px]">
                <p className="text-[18px] font-normal leading-[27px] font-poppins text-[#333333]">
                    Verifique a caixa de entrada e insira o código de confirmação que enviamos no e-mail cadastrado.
                </p>
                
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-medium leading-[30px] font-poppins text-[#333333]">Insira o código</p>
                    <InputField placeholder="Código"/>
                    
                </div>

            </div>

            <div className="flex flex-col w-[80%] gap-[16px]">
                <Button href="/auth/password/newPassword" text="Continuar" variant="primary"/>
                <Button href="./code" text="Reenviar Código" variant="secundary"/>
            </div>
        </div>
        

        
    )
}