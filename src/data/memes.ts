export type Meme = {
  src: string
  alt: string
  category: string
}

export const memes: Meme[] = [
  // engineer
  { src: "/memes/engineer/500.jpg", alt: "500", category: "engineer" },
  { src: "/memes/engineer/cartoon.jpg", alt: "cartoon", category: "engineer" },
  { src: "/memes/engineer/push-f.JPG", alt: "push-f", category: "engineer" },
  { src: "/memes/engineer/qa.JPG", alt: "qa", category: "engineer" },
  // job
  { src: "/memes/job/client.JPG", alt: "client", category: "job" },
  { src: "/memes/job/job-pro.PNG", alt: "job-pro", category: "job" },
  { src: "/memes/job/newbie.jpg", alt: "newbie", category: "job" },
  { src: "/memes/job/nomoney.jpg", alt: "no money", category: "job" },
  { src: "/memes/job/ok.jpg", alt: "ok", category: "job" },
  // product
  { src: "/memes/product/product.JPG", alt: "product", category: "product" },
  { src: "/memes/product/requirements.JPG", alt: "requirements", category: "product" },
]

export const categories = [...new Set(memes.map((m) => m.category))]
