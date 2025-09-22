"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Why RETENTION_Hub?",
        answer: `Running an iGaming business is so specific a job, the one where real money pulsates every second. And the most expensive thing is the Customer. You spent so much on affiliates and marketing, and, given the industry is so competitive, they jump to another operator after just a couple of days. That's why Retention is so important, as well as fine-tuning all the settings both on your platform and on your providers' side. We guarantee that your Customers' average lifetime will raise from 50 to 120% - that's exactly what has happened with all the operators we are working with.`,
    },
    {
        question: "Revenue share, fixed fee or both?",
        answer: `We are flexible enough with all kind of models. Our biggest partners usually chose fixed fee, mid-size sportsbooks prefer revshare, but it's up to you and us to discuss what is the best for both parties.`,
    },
    {
        question: "What if I want to start an iGaming business from scratch?",
        answer: `We are here to help. It's a huge challenge and will take time, but we will make sure you start a perfectly fine-tuned turnkey business. We will be next to you since then!`,
    },
    {
        question: "We are unhappy with our current platform. Can we change it?",
        answer: `Yes, we have done it for many our partners, but please mind that it is quite a complicated process. Changing a platform is like a divorce! But in the end, we will make sure it goes as painless as possible. The good news is we never charge for migrations!`,
    },
    {
        question: "We are an existing Casino. How can you help us?",
        answer: `Casino also requires a lot of Risk Management job. Besides, we can do your platform due diligence to help you with some wise suggestions. We can also help you to enlarge your business, adding sportsbook, games, etc.`,
    },
    {
        question: "Is it important on which market we are operating?",
        answer: `We work worldwide, and we know well all types of customers, no matter on which market you operate. Asia and Latin America, Eastern and Western Europe, Africa and Australia - if I wanted to visit all our partners, it would be a trip all around the globe!`,
    },
    {
        question: "Are you familiar with the platform we operate on?",
        answer: `Well, during a decade we exist, we have worked with more than 30 different sportsbook platforms. So the answer is probably yes. But, even if we have never dealt with your platform, it won't take long to get used to it, as the basic functionalities of all platforms are more or less the same.`,
    },
    {
        question: "Will we have our dedicated trading and development team?",
        answer: `All of our partners have their respective dedicated trading teams, no trader works for two partners at the same time. As for the Developers, it depends on the tasks they will develop.`,
    },
    {
        question: "How secure our data will be?",
        answer: `100% secure. We sign all kinds of NDAs necessary. No data shared with us has never been available to any third party, neither has any report or any other information. In fact, we always require only the minimum access to your systems, providing they have that functionality. No, we don't need any non-trading data about your business to do our job.`,
    },
    {
        question: "We are a platform, how can we co-operate?",
        answer: `Sure we can. If you provide your product to many sportsbooks and we can operate from a single platform, it's a win-win. Besides, we can handle everything between us two, without the operator. We have had - and still have - a few such cases.`,
    },
    {
        question: "Can we use just one of your services?",
        answer: `Yes you can! In fact, that's how we started with many of our partners. They ordered just one service, and later switched on the other. So don't hesitate to let us know what exactly bothers you more.`,
    },
    {
        question: "We suffer with our marketing efficiency, what are the solutions here?",
        answer: `Full due diligence of your platform, aportsbook/casino strategies and marketing activities are must. Marketing is never a stand-alone operation, sometimes making small changes in just a few settings gives an unexpected boost. Let's try!`,
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faq" className="relative bg-slate-900 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">FAQ</h2>
                <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
                    Everything you need to know about RetentionHub.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                    <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-black/20 backdrop-blur-md rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                        >
                            <span className="text-lg md:text-xl font-semibold">
                                {faq.question}
                            </span>
                            <span className="text-2xl transition-transform duration-300">
                                {openIndex === idx ? "−" : "+"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="px-6 pb-4 text-slate-300 text-sm md:text-base"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
