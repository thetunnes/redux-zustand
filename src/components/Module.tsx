import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useStore } from "../zustand-store";

interface Props {
  title: string;
  amountOfLessons: number;
  moduleIndex: number;
}

export function Module({ amountOfLessons, moduleIndex, title }: Props) {

  const { currentLessonIndex, currentModuleIndex, play } = useStore()

  const lessons = useStore(
    (state) => state.course?.modules[moduleIndex].lessons
  );

  return (
    <Collapsible.Root className="group" defaultOpen={currentModuleIndex === moduleIndex}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="h-5 w-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons && lessons.map((lesson, lessonIndex) => (
            <Lesson
              title={lesson.title}
              duration={lesson.duration}
              key={lesson.id}
              onPlay={() => play([moduleIndex, lessonIndex])}
              isCurrent={currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
