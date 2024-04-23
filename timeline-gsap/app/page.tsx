'use client'
import gsap from "gsap"
import { Draggable } from "gsap/all"
import { useEffect, useRef } from "react"
import Image from 'next/image'
import vector from "../public/images/vector-blue.svg"
import vector02 from "../public/images/vector-blue02.svg"
import vector03 from "../public/images/vector-blue03.svg"
import { SalutationCard } from "./components/SalutationCard" 
import { CardAboutMe } from "./components/CardAboutMe"

export default function Home() {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const areaBtnRef = useRef(null)
  const vectorRef = useRef(null)
  const vectorTwoRed = useRef(null)
  const vectorThreeRef = useRef(null)

  useEffect(() => {

    // a timelime é utilizado para executar animações/chamadas de forma sincronizada e inteligente
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    const dr = gsap.registerPlugin(Draggable)

    const tittle = titleRef.current
    const description = descriptionRef.current
    const areaBtn = areaBtnRef.current
    const vectorOne = vectorRef.current
    const vectorTwo = vectorTwoRed.current
    const vectorThree = vectorThreeRef.current

    tl.fromTo(tittle,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, })
      .fromTo(description,
        { opacity: 0, y: 100, },
        { opacity: 1, y: 0, },
        "-=0.75")
      .fromTo(areaBtn,
        { opacity: 0, x: 100, },
        { opacity: 1, x: 0, }
      )

    Draggable.create(vectorOne, {
      type: "rotation",
      //autoScroll: 40
    })
    Draggable.create(vectorTwo, {
      type: "x",
    })

    Draggable.create(vectorThree, {

    })

  }, [])

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">

      <p className="bg-sky-400 text-white px-5 mb-5 rounded-md w-32">Hello dude!</p>

      <section className="home grid gap-5 grid-cols-1">

        <div className="max-w-7xl">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center" ref={titleRef}>Welcome to <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">nicanico</span> short component workouts <span className="underline decoration-sky-500">(and animations)</span></h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400" ref={descriptionRef}>Here are small lines of code using
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400"> Next.js, Typescript</code> and some <code className="font-mono font-medium text-sky-500 ">libraries (GSAP, Framer Motion, etc)</code>, feel free to enjoy and give feedback on my learning
          </p>
          <div className="flex justify-center mt-6" ref={areaBtnRef}>
            <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none 
          focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
          text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center
          justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20
          dark:hover:bg-sky-400">Get started</button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image className="vector" ref={vectorRef} src={vector} width={100} height={100} alt="" />
          <Image className="vector" ref={vectorTwoRed} src={vector02} width={100} height={100} alt="" />
          <Image className="vector" ref={vectorThreeRef} src={vector03} width={100} height={100} alt="" />
        </div>
      </section>
      <section className="components grid grid-cols-3 gap-4 pt-10">
        <SalutationCard />
        <CardAboutMe />
      </section>
    </main>
  );
}
