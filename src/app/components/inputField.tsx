type InputProps = {
    placeholder: string;
  };

export default function InputField({ placeholder }: InputProps){
    return(
        <input type="text" placeholder={placeholder} className="w-full placeholder-[#333333] hover:bg-zinc-50 border-2 border-color-[#333333] p-[18px] rounded-[16px] text-[20px] font-normal leading-[30px] font-poppins text-[#33333380]"/>
    )
}