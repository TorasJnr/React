
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count > 0)
            {setCount(count - 1)}
    }
    const handleReset = () => {
        setCount(0)
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">{count}</h1>
            <div className="flex gap-4 items-center justify-center">
                <button
                    onClick={handleIncrement}
                    className="bg-green-500 text-white px-4 py-2"
                >
                    <IoIosAdd />
                </button>
    
                <button
                    onClick={handleDecrement}
                    className="bg-blue-500 text-white px-4 py-2"
                >
                    <FaMinus />
                </button>
    
                <button
                    onClick={handleReset}
                    className="bg-red-500 px-4 py-2 text-white"
                >
                    <RiResetLeftLine/>
                </button>
            </div>
        </div>
    )
}