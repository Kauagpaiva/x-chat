import ToggleButton from "./ToggleButton";
import DownloadButton from "./downloadButton";

type SidebarProps = {
  toggleSidebar: () => void;
}

const SideBar= ({toggleSidebar}: SidebarProps) => {
  return (
    <div className="bg-zinc-800 h-full p-4 w-[260px] rounded-r-[10px]">
        <div className="flex justify-between">
            <ToggleButton toggleSidebar={toggleSidebar} className="hover:bg-zinc-600 rounded-md p-2"/>
            <DownloadButton className="hover:bg-zinc-600 rounded-md p-2"/>
        </div>
        <h2 className="text-white text-lg mb-4">Sidebar</h2>
        <ul>
            <li className="text-white mb-2">Item 1</li>
            <li className="text-white mb-2">Item 2</li>
            <li className="text-white mb-2">Item 3</li>
        </ul>
    </div>
  );
};

export default SideBar;
