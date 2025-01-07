"use client";
import Link from 'next/link';
import React, { useRef, useState } from 'react';

const data = [
    {
        text: "Who is going to be Guest ?",
        options: [
            { id: 0, text: "Sam Altman", isCorrect: false },
            { id: 1, text: "N.R.Narayana Murthy", isCorrect: false },
            { id: 2, text: "Dalai Lama", isCorrect: false },
            { id: 3, text: "Vineeta Thakur", isCorrect: true },
        ],
    },
    {
        text: "What are the dates for the tech fest ?",
        options: [
            { id: 0, text: "February", isCorrect: true },
            { id: 1, text: "March ", isCorrect: false },
            { id: 2, text: "April", isCorrect: false },
            { id: 3, text: "May", isCorrect: false },
        ],
    }
];

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [_, setResult] = useState(false);
    let [selectedOption, setSelectedOption] = useState(null);

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return;
            }
            setIndex(index + 1);
            setQuestion(data[index + 1]);
            setLock(false);
            setSelectedOption(null);
        }
    };

    const checkans = (option) => {
        setSelectedOption(option);
        setLock(true);
    };

    return (
        <>
            <div className='flex justify-center items-center flex-col gap-12  h-screen w-screen '>
                <h1 className='text-white text-3xl tracking-wide'></h1>
                <div className='glass-effect text-white p-5 flex flex-col gap-5 rounded-xl'>
                    <h2 className='text-xl'>
                        {index + 1}. {question.text}
                    </h2>
                    <ul className='flex flex-col gap-5'>
                        <li ref={option1} className={`border bg-white/30 backdrop-blur-3xl p-3 rounded-lg cursor-pointer ${selectedOption === 1 ? 'bg-white/50' : ''}`} onClick={(e) => checkans(e, 1)}>
                            {question.options[0].text}
                        </li>
                        <li ref={option2} className={`border p-3 bg-white/30 rounded-lg cursor-pointer ${selectedOption === 2 ? 'bg-white/50' : ''}`} onClick={() => checkans(2)}>
                            {question.options[1].text}
                        </li>
                        <li ref={option3} className={`border p-3 bg-white/30 rounded-lg cursor-pointer ${selectedOption === 3 ? 'bg-white/50' : ''}`} onClick={() => checkans(3)}>
                            {question.options[2].text}
                        </li>
                        <li ref={option4} className={`border p-3 bg-white/30 rounded-lg cursor-pointer ${selectedOption === 4 ? 'bg-white/50' : ''}`} onClick={() => checkans(4)}>
                            {question.options[3].text}
                        </li>
                    </ul>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        {index === 1 ?
                            <Link href={'/thankyou'}>
                                <button
                                    onClick={next}
                                    className={`bg-blue-600 w-fit py-2 px-8 rounded-2xl hover:bg-blue-800 duration-200 ${!lock ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!lock}
                                >
                                    Submit
                                </button>
                            </Link>
                            :
                            <button
                                onClick={next}
                                className={`bg-blue-600 w-fit py-2 px-8 rounded-2xl hover:bg-blue-800 duration-200 ${!lock ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!lock}
                            >
                                Next
                            </button>
                        }
                        <p>
                            {index + 1} of {data.length} Questions
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Quiz;
