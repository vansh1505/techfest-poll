import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const ThankYou = () => {
    return (
        <div className="thankyou-container flex items-center justify-center min-h-screen text-center p-8 animate-fadeIn">
            <div>
                <h1 className="thankyou-message text-5xl font-extrabold mb-4 animate-pulse pb-px text-white">Thank You!</h1>
                <p className="thankyou-description text-xl opacity-90 mb-8 animate-slideIn pb-px text-white">We appreciate your participation.</p>

                <div className="additional-content mt-8 animate-fadeIn">
                    <p className="text-xl pb-px	text-white">Stay tuned for more updates and events!</p>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
