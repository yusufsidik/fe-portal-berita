import DOMPurify from "dompurify"
import { truncate } from "../../utils/truncate"
import { Link } from "react-router";

interface FeaturedArticleProps {
  title: string
  slug?: string
  thumbnail?: string
  content?: string
  isFeatured?: number
  category?: string 
  author?: string
  createdAt?: string
}

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

export default function FeaturedArticle({title, slug, category, thumbnail, content, author, createdAt} : FeaturedArticleProps){
  const featured = {
    title: title,
    slug: slug,
    thumbnail: thumbnail,
    content: content,
    author: author,
    createdAt: createdAt
  }
  return <article className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    <Link 
      to={{
        pathname: `/${slug}`
      }}
      state={{featured}}
    >
      <img
        src={`${IMAGE_URL}/${thumbnail}`}
        alt="Featured article image"
        className="w-full md:w-1/2 h-64 md:h-auto object-cover"
      />
    </Link>
    <div className="p-6 flex flex-col justify-between">
      <div>
        {/* featured category */}
        <a href="#" className="text-xs font-semibold text-brand uppercase tracking-wide">
          {category}
        </a>

        {/* featured title */}
        <h2 className="mt-2 text-3xl font-bold font-display leading-tight">
            {title}
        </h2>
        {/* featured content */}
        <div
          className="mt-3 text-gray-600 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncate(content ,150)  ?? "") }}
        />
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <span>{author}</span>
        <span className="mx-2">&bull;</span>
        <time dateTime="2024-05-21">{createdAt}</time>
      </div>
    </div>
</article>
}