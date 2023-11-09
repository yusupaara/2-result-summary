import iconreaction from "../images/icon-reaction.svg"
import iconmemory from "../images/icon-memory.svg"
import iconverbal from "../images/icon-verbal.svg"
import iconvisual from "../images/icon-visual.svg"

const detailList = [
    {
        img: iconreaction,
        title: "Reaction",
        score: 80,
        style: "text-primary-red-100 bg-primary-red-50"
    },
    {
        img: iconmemory,
        title: "Memory",
        score: 92,
        style: "text-primary-orange-100 bg-primary-orange-50"
    },
    {
        img: iconverbal,
        title: "Verbal",
        score: 61,
        style: "text-primary-green-100 bg-primary-green-50"
    },
    {
        img: iconvisual,
        title: "Visual",
        score: 72,
        style: "text-primary-blue-100 bg-primary-blue-50"
    }
]

function Resultcard() {
    return (
        <div className="sm:flex min-h-screen justify-center font-hanken sm:bg-neutral-paleblue">
            <div className="sm:grid sm:grid-cols-2 my-auto sm:drop-shadow-sm">
                <div className="bg-gradient-to-b from-gradient-bglight to-gradient-bgdark flex flex-col items-center space-y-6 py-9 rounded-b-3xl sm:rounded-3xl sm:max-w-xs z-10">
                    <div className="text-neutral-paleblue">Your Result</div>
                    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gradient-ccdark to-gradient-cclight h-44 w-44 rounded-full">
                        <div className="text-neutral-white text-6xl font-bold">76</div>
                        <div className="text-neutral-lavender">of 100</div>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="text-neutral-white text-2xl font-normal">Great</div>
                        <div className="text-neutral-lavender max-w-sm mx-11 sm:mx-15">Your scored higher than 65% of the people who have taken these tests</div>
                    </div>
                </div>
                <div className="bg-neutral-white px-7 py-5 space-y-6 sm:pl-10 sm:-translate-x-4 sm:rounded-r-3xl">
                    <div className="text-neutral-darkblue font-bold sm:text-xl sm:pt-4">Summary</div>
                    <div className="space-y-4">
                        {detailList.map((detail, index) => (
                            <div key={index}>
                                <div className={`${detail.style} flex justify-between p-3 font-normal rounded-lg`}>
                                    <div className="inline-flex space-x-3">
                                        <img src={detail.img} alt="icon" />
                                        <div>{detail.title}</div>
                                    </div>
                                    <div className="text-neutral-darkblue">{detail.score} <span className="font-thin text-gray-400"> / 100</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-neutral-darkblue text-neutral-white text-center p-3 rounded-3xl">Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Resultcard;