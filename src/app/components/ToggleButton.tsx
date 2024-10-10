import Image from "next/image";

interface ToggleButtonProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }
  
  const ToggleButton = ({ isOpen, toggleSidebar }: ToggleButtonProps) => {
    return (
      <button
        className="text-white p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        <Image src="sidebar.svg" alt="Sidebar Button" width={30} height={30}></Image>
      </button>
    );
  };
  
  export default ToggleButton;
  