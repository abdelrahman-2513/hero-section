import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { headlines, images, subheadlines } from "../data/heroData";
import logo from "../assets/logo.jpg"; // Make sure this path is correct

export default function Hero() {
    const [headline, setHeadline] = useState(headlines[0]);
    const [subheadline, setSubheadline] = useState(subheadlines[0]);
    const [image, setImage] = useState(images[0]);
    const [loading, setLoading] = useState(false);

    const regenerate = () => {
        setLoading(true);
        setTimeout(() => {
            const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
            setHeadline(rand(headlines));
            setSubheadline(rand(subheadlines));
            setImage(rand(images));
            setLoading(false);
        }, 1800);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">

            <div className="flex-1 text-center md:text-left space-y-6">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-[50px] h-16 aspect-square object-contain rounded-2xl shadow-xl mx-auto md:mx-0"
                />

                <h1
                    className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl text-white"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setHeadline(e.currentTarget.innerText)}
                    style={{ minHeight: "72px" }}
                >
                    {loading ? (
                        <Skeleton width="80%" height={60} baseColor="#4B0082" highlightColor="#A128FF" />
                    ) : (
                        headline
                    )}
                </h1>

                <p
                    className="text-xl md:text-2xl text-white/80"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setSubheadline(e.currentTarget.innerText)}
                    style={{ minHeight: "36px" }}
                >
                    {loading ? (
                        <Skeleton width="90%" height={30} baseColor="#4B0082" highlightColor="#A128FF" />
                    ) : (
                        subheadline
                    )}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "1.5rem" }}>
                    <button className="btn-primary" disabled={loading}>
                        Get Started
                    </button>

                    <button
                        onClick={regenerate}
                        disabled={loading}
                        className={`btn-ai ${loading ? "disabled" : ""}`}
                    >
                        {loading ? "Generating..." : "✨ Regenerate with AI"}
                        {loading && <span className="spinner" />}
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-w-[400px] mx-auto">
                {loading ? (
                    <Skeleton
                        height={400}
                        width="100%"
                        baseColor="#4B0082"
                        highlightColor="#A128FF"
                        style={{ borderRadius: "1rem" }}
                    />
                ) : (
                    <img
                        src={image}
                        alt="Hero Visual"
                        className="w-full h-[400px] object-contain aspect-square rounded-2xl shadow-2xl transition-all hover:scale-105"
                    />
                )}
            </div>
        </div>
    );
}
