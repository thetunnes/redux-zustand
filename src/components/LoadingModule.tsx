import { ChevronDown } from "lucide-react";

export function LoadingModule() {

  return (
    <section className="group animate-pulse">
    <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
    <div className="flex h-10 w-14 rounded-full items-center justify-center bg-zinc-950 text-xs">
      {/* {moduleIndex + 1} */}
    </div>
    <div className="flex flex-col gap-1 text-left w-full">
      <strong className="text-sm bg-zinc-700 h-4 w-2/3 rounded-md" />
      <span className="text-xs bg-zinc-700 h-4 w-1/3 rounded-md" />
    </div>

    <ChevronDown className="h-5 w-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
  </div>

  <section>
    <nav className="relative flex flex-col gap-4 p-6">
      <p className="w-full h-4 rounded-md bg-zinc-700" />
      <p className="w-full h-4 rounded-md bg-zinc-700" />
      <p className="w-full h-4 rounded-md bg-zinc-700" />
    </nav>
  </section>
    </section>
  )
}