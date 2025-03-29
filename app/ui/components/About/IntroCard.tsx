import React from "react";
import { profile } from "@/data";
import Image from "next/image";
import { LiaEnvelopeSolid, LiaGithub, LiaGlobeAmericasSolid, LiaLinkedin } from "react-icons/lia";

export default function IntroCard() {
    const highlightKeywords = (text: string, keywords: string[]) => {
        return text.split(new RegExp(`(${keywords.join("|")})`, "gi")).map((word, i) =>
            keywords.includes(word) ? (
                <span key={i} className="font-semibold">
                    {word}
                </span>
            ) : (
                word
            )
        );
    };

    return (
        <div className="bg-gray-500/10 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col items-center">
                {/* Profile Image*/}
                <div className="w-32 h-32 md:w-40 md:h-40 relative">
                    <Image
                        src={profile.image}
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <LiaGlobeAmericasSolid className="w-6 h-6 text-pink-500" />
                    <p>South America/Peru</p>
                </div>
                <div className="mt-4 flex gap-2">
                    <p className="text-xs border rounded-xl border-white/20 py-1 px-3">English</p>
                    <p className="text-xs border rounded-xl border-white/20 py-1 px-3">Spanish</p>
                    <p className="text-xs border rounded-xl border-white/20 py-1 px-3">Italian</p>
                </div>
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">{profile.name}</h2>
                {/* Profile Links */}
                <div className="flex gap-4 mb-4 justify-center md:justify-start">
                    {profile.linkedin && (
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                            <LiaLinkedin className="w-8 h-8 text-gray-400 hover:text-primary transition" />
                        </a>
                    )}
                    {profile.github && (
                        <a href={profile.github} target="_blank" rel="noopener noreferrer">
                            <LiaGithub className="w-8 h-8 text-gray-400 hover:text-primary transition" />
                        </a>
                    )}
                    {profile.email && (
                        <a href={`mailto:${profile.email}`}>
                            <LiaEnvelopeSolid className="w-8 h-8 text-gray-400 hover:text-primary transition" />
                        </a>
                    )}
                </div>
                <p className="text-primary font-thin">
                    {highlightKeywords(profile.description, [
                        "Laravel",
                        "PHP",
                        "web applications",
                        "process automation",
                        "data management",
                        "APIs",
                        "scalable solutions",
                    ])}
                </p>
            </div>
        </div>
    );
}
