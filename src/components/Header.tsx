import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  if (isCourseLoading) {
    return (
      <div className="animate-pulse flex flex-col gap-1">
        <h1 className="h-4 md:h-6 bg-zinc-700 rounded-lg w-40" />
        <span className="h-3 md:h-4 bg-zinc-700 rounded-lg text-sm text-zinc-400 w-20" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo {currentModule?.title}
      </span>
    </div>
  );
}
