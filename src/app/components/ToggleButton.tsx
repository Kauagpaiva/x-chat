import Image from "next/image";

interface ToggleButtonProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    className: string;
  }
  
  const ToggleButton = ({ isOpen, toggleSidebar, className}: ToggleButtonProps) => {
    return (
      <button onClick={toggleSidebar} className={className}>
        <Image src="sidebar.svg" alt="Sidebar Button" width={30} height={30}></Image>
      </button>
    );
  };
  
  export default ToggleButton;
  