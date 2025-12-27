import { useNews } from "../api/useNews";

// ui
import { Loading } from "../components/layout/ui/Loading";
import FeaturedArticle  from "../components/layout/FeaturedArticle";

export default function HomePage() {

    const {data:  news, isLoading: loadingNews, error: errorNews} = useNews();

    if(loadingNews) return <Loading />
    if(errorNews) return <p>Error ...</p>

    const featured = news?.data[0]

    return (
        <>
            {/* Breaking News Ticker */}
            <div className="bg-brand-dark py-2 overflow-hidden">
                <div className="container mx-auto px-4 flex items-center">
                    <span className="bg-accent text-xs font-bold px-2 py-1 rounded mr-3">
                        BREAKING
                    </span>
                    <p className="text-sm truncate">
                        Major scientific breakthrough announced in renewable energy sector,
                        experts say.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main News Feed */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Featured Article */}
                        <FeaturedArticle 
                            title={featured?.title ?? "No Title"}  
                            slug={featured?.slug}  
                            category={featured?.category}
                            thumbnail={featured?.thumbnail}
                            content={featured?.content}
                            author={featured?.author}
                            createdAt={featured?.created_at}
                        />

                        {/* Latest News Grid */}
                        <section>
                            <h3 className="text-2xl font-bold mb-4 border-b-2 border-brand pb-2">
                                Latest News
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                {/* News Card 1 */}
                                <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                                    <img
                                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070"
                                        alt="Tech news"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 flex grow flex-col">
                                        <a
                                            href="#"
                                            className="text-xs font-semibold text-purple-600 uppercase tracking-wide"
                                        >
                                            Technology
                                        </a>
                                        <h4 className="mt-1 text-lg font-semibold leading-tight">
                                            The Rise of AI in Creative Industries: Boon or Bane?
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-600 grow">
                                            Artists and writers debate the impact of generative AI on
                                            their work and the future of creativity.
                                        </p>
                                        <div className="mt-4 text-xs text-gray-500">
                                            <time dateTime="2024-05-20">May 20, 2024</time>
                                        </div>
                                    </div>
                                </article>

                                {/* News Card 2 */}
                                <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                                    <img
                                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070"
                                        alt="Sports news"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 flex grow flex-col">
                                        <a
                                            href="#"
                                            className="text-xs font-semibold text-green-600 uppercase tracking-wide"
                                        >
                                            Sports
                                        </a>
                                        <h4 className="mt-1 text-lg font-semibold leading-tight">
                                            Underdogs Claim Stunning Victory in National Championship
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-600 grow">
                                            In a shocking turn of events, the underdog team defeated
                                            the reigning champions in a thrilling final match.
                                        </p>
                                        <div className="mt-4 text-xs text-gray-500">
                                            <time dateTime="2024-05-19">May 19, 2024</time>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* Trending Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold mb-4 border-b-2 border-accent pb-2">
                                Trending Now
                            </h3>
                            <ol className="space-y-3 list-decimal list-inside">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-brand font-medium"
                                    >
                                        New Archaeological Discovery Rewrites Ancient History
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-brand font-medium"
                                    >
                                        Stock Market Hits Record High Amid Economic Optimism
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-brand font-medium"
                                    >
                                        Health Watch: The Benefits of a Plant-Based Diet
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-brand font-medium"
                                    >
                                        Travel Guide: Top 10 Hidden Gems in Europe
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-brand font-medium"
                                    >
                                        Film Review: A Masterpiece in Modern Cinema
                                    </a>
                                </li>
                            </ol>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-brand text-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold mb-2">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-sm mb-4">
                                Get the latest news delivered directly to your inbox.
                            </p>
                            <form className="flex flex-col space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-brand font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Advertisement Placeholder */}
                        <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-500">
                            <p>Advertisement</p>
                            <div className="mt-4 bg-gray-300 h-32 rounded"></div>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
