import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto p-8 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4 text-orange-400">Контакти</h1>
            <p className="mb-8 text-center text-white-700">
                Я завжди відкрита до нових пропозицій та можливостей. Не соромтеся зв'язатися зі мною:
            </p>
          
            <div className="space-y-4">
                <div>
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:example@example.com" className="ml-2 text-indigo-600 hover:text-indigo-800">example@example.com</a>
                </div>
                <div>
                    <span className="font-semibold">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/zolotovskahanna" target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-600 hover:text-indigo-800">yourprofile</a>
                </div>
                <div>
                    <span className="font-semibold">GitHub:</span>
                    <a href="https://github.com/ZolotovskaHanna/zolotovska" target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-600 hover:text-indigo-800">yourusername</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;






