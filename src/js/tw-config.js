// Configuration Tailwind partagée (CDN play)
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  safelist: [
    // Layout & spacing
    'min-h-screen', 'flex', 'items-center', 'bg-gradient-to-br', 'bg-white', 'bg-white/70', 'bg-white/80', 'bg-white/90',
    'bg-white/85', 'bg-white/95', 'bg-slate-50', 'bg-slate-100',
    'bg-brandBlue', 'bg-brandPink', 'bg-brandBlue/10', 'bg-brandBlue/30', 'bg-gradient-to-t',
    'max-w-2xl', 'max-w-3xl', 'max-w-6xl', 'max-w-5xl', 'max-w-4xl', 'mx-auto', 'grid', 'w-full', 'h-full', 'h-52',
    'h-48', 'h-12', 'h-8', 'h-7', 'h-6', 'h-4', 'h-3.5', 'h-1.5', 'w-12', 'w-8', 'w-7', 'w-6', 'w-4', 'w-3.5', 'w-1.5', 'w-px',
    'h-[16rem]', 'h-[20rem]', 'h-[22rem]', 'h-[24rem]', 'h-[28rem]', 'h-[calc(100%-3rem)]', 'h-[calc(100%-4.5rem)]', 'md:h-[30rem]',
    'lg:grid-cols-[1.05fr,0.95fr]', 'lg:grid-cols-[1.02fr,0.98fr]', 'lg:grid-cols-[0.95fr,1.05fr]', 'md:grid-cols-[1.1fr,0.9fr]',
    'md:grid-cols-2', 'sm:grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-3', 'lg:grid-cols-4', 'sm:col-span-2',
    'rounded-3xl', 'rounded-2xl', 'rounded-full', 'rounded-[1.75rem]', 'rounded-[2rem]', 'rounded-[2.5rem]',
    'shadow', 'shadow-md', 'shadow-sm', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-slate-100', 'shadow-slate-200/70', 'shadow-indigo-100', 'shadow-pink-200/50', 'shadow-sky-200/50',
    'border', 'border-white', 'border-white/70', 'border-white/80', 'border-white/90', 'border-slate-100', 'border-brandBlue/20', 'backdrop-blur',
    'p-3', 'p-4', 'p-5', 'p-6', 'p-7', 'p-8', 'px-3', 'px-4', 'px-5', 'px-6', 'px-10', 'py-1', 'py-2', 'py-3', 'py-5', 'py-8', 'py-10', 'py-12',
    'gap-2', 'gap-3', 'gap-4', 'gap-6', 'gap-8', 'space-y-2', 'space-y-3', 'space-y-4', 'space-y-5', 'space-y-6',
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'font-black', 'font-bold', 'font-extrabold', 'font-semibold', 'font-medium', 'font-display', 'font-sans', 'text-center', 'text-left',
    'text-brandBlue', 'text-brandPink', 'text-brandDeep', 'text-slate-500', 'text-slate-600', 'text-white', 'text-white/80', 'leading-relaxed', 'leading-tight',
    'text-[#5f6487]', 'text-[#6b7094]', 'text-[#7c67a2]', 'text-[#726f9b]', 'text-[#62a9f5]', 'text-[#4d4b7f]', 'text-[#7c86cb]', 'text-transparent', 'bg-clip-text', 'leading-[0.92]',
    'tracking-[0.18em]', 'tracking-[0.2em]', 'tracking-[0.24em]', 'tracking-[0.25em]', 'tracking-[0.26em]', 'tracking-[0.28em]', 'tracking-[0.3em]',
    'inline-flex', 'block', 'items-center', 'items-start', 'justify-center', 'justify-between', 'flex-wrap', 'flex-col', 'relative', 'absolute', 'inset-0', 'inset-x-0', 'bottom-0', 'top-6', 'top-16', 'left-6', 'left-8', 'z-10', 'overflow-hidden', 'object-cover', 'shrink-0', 'self-start', 'hidden', 'sm:block', 'md:block',
    'sm:flex-row', 'sm:items-start', 'opacity-0',
    'transition', 'transition-transform', 'duration-200', 'duration-300', 'hover:-translate-y-0.5', 'hover:-translate-y-1', 'group', 'group-hover:scale-105', 'from-black/10', 'from-black/35', 'from-black/40', 'to-transparent',
    'uppercase', 'mt-0.5', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'mt-6', 'mt-8', 'sm:px-10', 'sm:py-10', 'sm:text-3xl', 'sm:text-4xl', 'sm:text-5xl', 'sm:text-lg', 'lg:items-center', 'lg:items-start',
    // Gradients utilisés dans les presets (from / to)
    'from-slate-50', 'to-sky-50',
    'from-white', 'to-slate-50',
    'from-slate-50', 'to-indigo-50',
    'to-slate-100', 'to-pink-50',
    'from-emerald-50', 'to-white', 'to-emerald-50',
    'from-sky-50',
    'from-indigo-50', 'to-amber-50', 'to-indigo-100',
    'to-slate-50',
    'from-rose-50', 'from-amber-50',
    'from-blue-50', 'to-blue-50',
    'from-pink-50', 'to-amber-50',
    'from-lime-50', 'to-lime-50',
    'from-amber-50', 'to-rose-50',
    'to-emerald-50', 'to-sky-50', 'to-rose-50', 'to-amber-50', 'to-pink-50',
    'from-brandBlue/15', 'to-brandPink/20', 'bg-gradient-to-r', 'bg-gradient-to-b', 'from-brandBlue', 'via-brandDeep', 'to-brandPink', 'from-brandDeep', 'via-brandBlue', 'to-brandBlue',
    'from-[#89d7ff]', 'via-[#5fb4ff]', 'to-[#4d9cf2]', 'from-[#ff50d3]', 'via-[#ff2fbf]', 'to-[#d60ab9]'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Nunito', 'Poppins', 'ui-sans-serif']
      },
      colors: {
        brandBlue: '#62a9f5',
        brandPink: '#ff2fbf',
        brandDeep: '#4d4b7f'
      }
    }
  },
  plugins: []
};
