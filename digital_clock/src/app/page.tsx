'use client';
import { useEffect, useState } from "react";

const Clock = () => {

  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const timer = setInterval(()=>{
      setTime(new Date())
    },1000)
    return () => clearInterval(timer)
  }, [])

  if (!time) {
  return <div className="text-white">Loading...</div>;
}

  const formatTime = time.toLocaleTimeString("en-US",{
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  })

  const [hms, period] = formatTime.split(" ")
  return(
    <div className="bg-[linear-gradient(to_bottom,#ffffff_0%,#000000_100%)] w-screen h-screen">
      <div className="flex justify-center items-center h-full ">
        <div className="border-4 border-white p-10 rounded-lg bg-black bg-opacity-10">
          <div className="flex flex-row justify-center items-center">
            {hms.split(':').map((part,index) => {
              return(
                <span key={index} className="text-5xl text-black font-mono bg-white border-2  p-2 rounded-lg m-2 ">
                {part}
                {index < hms.split(':').length - 1 ? ' ' : ''}
                </span>
              )
            })}
             <div className="text-white ">{period}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default  Clock;