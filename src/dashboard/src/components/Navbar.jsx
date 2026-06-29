import { Bell } from "lucide-react"


export default function Navbar() {
    return (
        <>
            <div className="w-full bg-[#0d1117] border-b border-gray-800 px-6 py-3 flex items-center justify-between">

                <div className="flex item-center gap-6">
                    <div>
                        <h1 className="text-white font-semibold text-lg">
                            src
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Analyzed 2m ago
                        </p>
                    </div>

                    <div className="flex gap-5 ml-6">
                        {["Overview", "Commits", "PRs", "Actions"].map((tab, i) => (
                            <button
                                key={i}
                                className={`text-sm ${tab === "Overview"
                                    ? "text-white border-b-2 border-blue-500 pb-1"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">

                    <button className="px-3 py-1 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800">
                        Refresh
                    </button>

                    <button className="px-3 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-700">
                        Sync Repo
                    </button>

                    {/* Bell Icon */}
                    <Bell className="text-gray-400 cursor-pointer" size={18} />

                    {/* Avatar */}
                    <img
                        src="https://i.pravatar.cc/30"
                        alt="profile"
                        className="w-8 h-8 rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </>
    )
}