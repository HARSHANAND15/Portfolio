export default function GradientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-teal-500/20 dark:bg-teal-500/20 rounded-full blur-[100px] animate-[blob1_18s_ease-in-out_infinite] [data-theme=light]:opacity-40" />
      <div className="absolute top-[50%] right-[10%] w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-[100px] animate-[blob2_22s_ease-in-out_infinite]" />
      <div className="absolute bottom-[5%] left-[30%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] animate-[blob3_20s_ease-in-out_infinite]" />
    </div>
  )
}