import React from 'react';

function About() {
    return (
        <main className="flex justify-center items-center">
            <div className="rounded-lg p-4 m-4">
                <p className="font-bold mb-4 mb-4">
                    І так, я тільки на початку свого шляху в світі веб-розробки. Навчаючись новим технологіям та мовам програмування, 
                    я відчуваю справжнє захоплення від процесу створення та втілення ідей у реальність. Кожен новий проект для мене - 
                    це можливість рости та розвиватися як фахівця.
                </p>
                <p className="font-bold mb-4 mb-4">
                    Я відзначаюсь своєю старанністю та відданістю. Я вірю, що важливо не тільки досягти мети, але й насолоджуватися 
                    процесом навчання та розвитку. Хоча я тільки починаю свій шлях, я впевнена, що зможу внести цінний вклад у проекти, 
                    над якими працюватиму. Я шукаю можливості, де зможу застосувати свої знання та навички, а також продовжувати вчитися 
                    у досвідчених колег.
                </p>
                <p className="font-bold mb-4">Мої навички:</p>
                <div className="flex justify-around">
                    <img
                        src="/images/html.png"
                        alt="html"
                        className="w-12 h-12"
                    />
                    <img
                        src="/images/css.png"
                        alt="css"
                        className="w-12 h-12"
                    />
                    <img
                        src="/images/sass.png"
                        alt="sass"
                        className="w-12 h-12"
                    />
                    <img
                        src="/images/js.png"
                        alt="js"
                        className="w-12 h-12"
                    />
                    <img
                        src="/images/react.png"
                        alt="react"
                        className="w-12 h-12"
                    />
                </div>
            </div>
        </main>
    )
}

export default About;
