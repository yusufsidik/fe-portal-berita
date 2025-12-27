import DOMPurify from "dompurify"
// import { truncate } from "../utils/truncate";
import { useParams, useLocation } from "react-router";

export default function NewsDetail(){
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL
  const { slug } = useParams()
  const {state} = useLocation()

  const featured = state?.featured


  return <section className="p-6">
    <div>
      <h3 className="text-2xl font-bold mb-4 border-b-2 border-brand pb-2">
        {featured?.title}
      </h3>
      <img src={`${IMAGE_URL}/${featured?.thumbnail}`} className="w-8/12" alt="image content" />
      <div
        className="mt-3 text-gray-600 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(featured?.content) }}
      />

    </div>
    {slug}
  </section>
}