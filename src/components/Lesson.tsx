import { PlayCircle, Video } from "lucide-react";

interface Props {
  title: string
  duration: string
  onPlay: () => void
  isCurrent?: boolean
}

export function Lesson({ duration, title, onPlay, isCurrent = false }: Props) {

  function handlePlayLesson() {
    onPlay()
  }
  return (
    <button onClick={() => handlePlayLesson()} data-active={isCurrent} className="flex data-[active=false]:hover:text-zinc-100 data-[active=true]:text-emerald-400 items-center gap-3 text-sm text-zinc-400">
       {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" /> 
       ) :  <Video className="w-4 h-4 text-zinc-500" />}
        <span className="">{title}</span>
        <span className="ml-auto font-mono text-xs text-zinc-500">
          {duration}
        </span>
      </button>
  )
}