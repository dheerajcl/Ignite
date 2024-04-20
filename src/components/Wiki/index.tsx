import { useRouter } from "next/router";
import { useRef } from "react";

const NewTabComponent = () => {
    const { query } = useRouter();
    const messageWindowRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex h-screen w-full flex-col gap-2 overflow-hidden min-h-screen">
            <div className="px-4 py-2">
                <h2 className="text-2xl font-bold text-gray-800">Research with Wikipedia</h2>
            </div>

            <div
                className="hideScrollbar flex flex-1 flex-col gap-3 overflow-auto h-screen"
                ref={messageWindowRef}
            >
                <iframe
                    src="https://wikichat1.streamlit.app/?embed=true" /* Update this URL to your desired iframe source */
                    
                    className="w-full h-screen p-8 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Optionally, add additional components such as a form or other UI elements here */}
        </div>
    );
}

export default NewTabComponent;