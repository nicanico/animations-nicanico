import React, { useEffect, useRef, useState } from 'react'
import morning from "../../public/images/Morning.svg"
import afternoon from "../../public/images/Evening.svg"
import night from "../../public/images/Night.svg"
import Image from 'next/image';

export const SalutationCard = () => {

  const d: Date = new Date();

  const [salutationImg, setSalutionImg] = useState(morning)
  const [salutationText, setSalutationText] = useState('Morning')
  const [salutationTextCard, setSalutationTextCard] = useState('Congratulations! You are alive for a new day')

  useEffect(() => {

    if (d.getHours() >= 18) {
      setSalutionImg(night)
      setSalutationText('Night')
      setSalutationTextCard('Its a good time to sleep because theres work tomorrow!')
    } else if (d.getHours() >= 12) {
      setSalutionImg(afternoon)
      setSalutationText('Afternoon')
      setSalutationTextCard('Oh what a beautiful afternoon! If I were you, Id take a nap')
    } else if (d.getHours() >= 5) {
      setSalutionImg(morning)
      setSalutationText('Morning')
      setSalutationTextCard('Congratulations! You are alive for a new day')
    }

  }, [])

  return (
    <div className="w-80 h-30 shadow-md bg-slate-50	rounded-lg p-2 flex items-center justify-center gap-x-4 ">
      <Image className="vector" src={salutationImg} width={100} height={100} alt="" />
      <div>
        <p className='font-bold'>Good {salutationText}!</p>
        <span className='text-xs line-clamp-3'>{salutationTextCard}</span>
      </div>
    </div>
  )
}
