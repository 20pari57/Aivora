import  Sidebar  from "./Sidebar";
import Topbar from "./Topbar";
export default function Layout({childern})
{
    return (
        <div className = "flex h-screen w-full bg-[#09090B] text-white overflow-hidden" >
            <Sidebar />
            <div className="flex-1 overflow-auto">
                <Topbar />
                <main className="flex-1 overflow-y-auto p-8">
                    {childern}
                </main>
                
            </div>
        </div>
    );
}
