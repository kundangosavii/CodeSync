import { useState } from "react"
import { analyzeRepo  } from "../api.js"
export function InputCard() {
    const [repoInput, setRepoInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAnalyze = async () => {
        const value = repoInput.trim();

        if (!value) {
            setError("Enter a GitHub repo URL or local directory path.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            await analyzeRepo(value);
        } catch (err) {
            setError(err?.message || "Failed to analyze repository.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="text-gray-200 no-scrollbar">
                <h2 className="mb-4 text-2xl ml-5 font-bold text-[#edebf3] font-sans">AI Insights</h2>

                <div className="bg-red-500 h-0.5" />

                <div className="mt-3 rounded-xl border border-gray-800 bg-[#0f1020] p-4">
                    <label className="mb-2 block text-sm text-gray-400">
                        GitHub repo URL or local directory path
                    </label>

                    <input
                        type="text"
                        value={repoInput}
                        onChange={(e) => setRepoInput(e.target.value)}
                        placeholder="https://github.com/user/repo or C:\code\repo"
                        className="w-full rounded-lg border border-gray-700 bg-[#080817] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    />

                    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Analyzing..." : "Analyze Repository"}
                    </button>
                </div>
            </div>
        </>
    )
}