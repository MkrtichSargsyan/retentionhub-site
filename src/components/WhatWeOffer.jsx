"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";

const offers = [
    {
        title: "Risk Management - New Approach",
        image: "/images/risk-management.jpeg",
        points: [
            "Full 7/24/365 bets monitoring",
            "7/24 reactive price corrections",
            "Customers’ Factoring and Segmentation",
            "100% data accuracy",
            "All sports",
            "All events",
            "All market types",
            "Inplay/Pre-Match",
        ],
    },
    {
        title: "Retention Strategy and Setup",
        image: "/images/retention-strategy.jpeg",
        points: [
            "Optimizing your system settings",
            "Sportsbook settings",
            "Casino Settings",
            "Feed Providers’ data settings",
            "Customers’ Factoring and Segmentation",
            "Risk Groups setting",
            "VIP customers' Settings",
        ],
    },
    {
        title: "Business Intelligence",
        image: "/images/business-intelligence.jpeg",
        points: [
            "AI-based BI tools",
            "In-depth data analysis",
            "Full weekly/monthly reporting",
            "Highlighting strengths and weaknesses",
            "Constant competitors' analysis",
            "Suggestive Tendencies Reports",
        ],
    },
];

export default function WhatWeOffer() {
    return (
        <section id="offers" className="relative bg-slate-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">What We Offer</h2>
                <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
                    Comprehensive solutions tailored to boost your iGaming business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {offers.map((offer) => (
                    <Tilt
                        key={offer.title}
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        transitionSpeed={400}
                        gyroscope={true}
                        className="bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Image */}
                        <div className="relative h-56 w-full bg-slate-800">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text content */}
                        <div className="p-6 flex flex-col gap-3">
                            <h3 className="text-xl font-semibold">{offer.title}</h3>
                            <ul className="list-disc list-inside text-slate-300 text-sm md:text-base space-y-1">
                                {offer.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </Tilt>
                ))}
            </div>

            {/* Button */}
            <div className="mt-12 text-center">
                <a
                    href="/all-offers"
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-white shadow-lg hover:shadow-purple-400/50 transition"
                >
                    All Offers
                </a>
            </div>
        </section>
    );
}
