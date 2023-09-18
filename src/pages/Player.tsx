import { useEffect } from 'react'
import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Player";
import { Module } from "../components/Module";
import { LoadingModule } from '../components/LoadingModule';
import { useCurrentLesson, useStore } from '../zustand-store';

export function Player() {
  const { course, load } = useStore()

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Aula: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-11/12 md:w-[1100px] flex-col gap-6 ">
        <div className="flex items-center justify-between">
          {/* HEADER */}
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4 " /> Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded border pr-80 border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1 ">
            <Video />
          </div>
          <aside className="absolute divide-y-2 divide-zinc-900 top-0 right-0 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-tract-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules ? course.modules.map((module, i) => (
              <Module
                title={module.title}
                moduleIndex={i}
                amountOfLessons={module.lessons.length}
                key={module.id}
              />
            )) : <LoadingModule />}
          </aside>
        </main>
      </div>
    </div>
  );
}
