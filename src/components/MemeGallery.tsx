import { useState, useRef } from "react"
import type { Meme } from "../data/memes"

type Props = {
  memes: Meme[]
  categories: string[]
}

export default function MemeGallery({ memes, categories }: Props) {
  const [active, setActive] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<Meme | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const filtered = active ? memes.filter((m) => m.category === active) : memes

  const openLightbox = (meme: Meme) => {
    setLightbox(meme)
    dialogRef.current?.showModal()
  }

  const closeLightbox = () => {
    dialogRef.current?.close()
    setLightbox(null)
  }

  const btnBase = "px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer"
  const btnActive = "bg-slate-900 text-white border-slate-900"
  const btnInactive = "text-slate-500 border-slate-200 hover:border-slate-400"

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActive(null)}
          className={`${btnBase} ${!active ? btnActive : btnInactive}`}
        >
          全部
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`${btnBase} ${active === cat ? btnActive : btnInactive}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-16">還沒有梗圖 🙈</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((meme) => (
            <button
              key={meme.src}
              onClick={() => openLightbox(meme)}
              className="aspect-square overflow-hidden rounded-lg bg-slate-100 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src={meme.src}
                alt={meme.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
        onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        className="fixed inset-0 m-0 w-screen h-screen max-w-none max-h-none flex items-center justify-center bg-transparent p-0 border-none backdrop:bg-black/70"
      >
        {lightbox && (
          <div className="relative">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-[90vw] max-h-[90vh] rounded-xl block"
            />
            <button
              onClick={closeLightbox}
              aria-label="關閉"
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
