export const styles = {
  container: "select-none min-h-screen flex flex-col items-center justify-center bg-enem-bg px-4 py-8 overflow-hidden",

  footerContainer: "absolute bottom-4 w-full flex flex-col items-center justify-center py-4 text-slate-500 text-sm animate-fade-in",

  titleMain: "text-4xl md:text-6xl lg:text-6xl text-enem-text text-center tracking-tight mb-2",

  timerGrid: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl animate-fade-in",

  card: {
    wrapper: `
      flex flex-col items-center justify-center
      bg-enem-card/50 backdrop-blur-sm
      border border-white/5
      rounded-2xl
      aspect-square md:aspect-auto md:h-48
      shadow-xl shadow-black/20
      transition-all duration-300 ease-out
      hover:bg-enem-card hover:scale-105 hover:border-enem-accent/30
    `,
    number: "text-5xl md:text-7xl font-mono font-bold text-white tabular-nums tracking-tighter drop-shadow-sm",
    label: "text-xs md:text-sm font-sans font-semibold text-enem-accent uppercase tracking-[0.2em] mt-2 md:mt-4"
  }
};