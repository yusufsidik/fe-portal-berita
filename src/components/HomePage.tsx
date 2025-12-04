import { useRef } from "react"

export default function HomePage(){

  const mobileMenu = useRef<HTMLElement>(null);

  const onClickMobileMenuButton = () => {
    mobileMenu.current?.classList.toggle('hidden')
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                {/* logo */}
                <a href="#" className="flex items-center space-x-2 font-bold text-2xl font-display text-brand">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
                  <span>NewsHub</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-brand font-medium transition-colors">Home</a>
                    <a href="#" className="text-gray-700 hover:text-brand font-medium transition-colors">World</a>
                    <a href="#" className="text-gray-700 hover:text-brand font-medium transition-colors">Politics</a>
                    <a href="#" className="text-gray-700 hover:text-brand font-medium transition-colors">Technology</a>
                    <a href="#" className="text-gray-700 hover:text-brand font-medium transition-colors">Sports</a>
                </nav>

                {/* Search & Profile */}
                <div className="flex items-center space-x-4">
                  <div className="hidden md:block relative">
                      <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand" />
                      <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </button>
                  {/* Mobile Menu Button */}
                  <button id="mobile-menu-button" className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={onClickMobileMenuButton}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                  </button>
                </div>
            </div>
        </div>
        {/* Mobile Menu */}
        <nav id="mobile-menu" className="hidden md:hidden bg-white border-t" ref={mobileMenu}>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">World</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Politics</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Technology</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sports</a>
        </nav>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-brand-dark text-white py-2 overflow-hidden">
          <div className="container mx-auto px-4 flex items-center">
              <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded mr-3">BREAKING</span>
              <p className="text-sm truncate">Major scientific breakthrough announced in renewable energy sector, experts say.</p>
          </div>
      </div>

      <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main News Feed */}
              <div className="lg:col-span-3 space-y-8">
                  {/* Featured Article */}
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                      <img src="https://images.unsplash.com/photo-1605745341112-424a33f9c0f1?q=80&w=2070" alt="Featured article image" className="w-full md:w-1/2 h-64 md:h-auto object-cover" />
                      <div className="p-6 flex flex-col justify-between">
                          <div>
                              <a href="#" className="text-xs font-semibold text-brand uppercase tracking-wide">Politics</a>
                              <h2 className="mt-2 text-3xl font-bold font-display leading-tight">Global Leaders Unite for Landmark Climate Summit in Geneva</h2>
                              <p className="mt-3 text-gray-600">In an unprecedented show of unity, world leaders have gathered to discuss actionable strategies to combat the escalating climate crisis...</p>
                          </div>
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                              <span>By Jane Doe</span>
                              <span className="mx-2">&bull;</span>
                              <time dateTime="2024-05-21">May 21, 2024</time>
                          </div>
                      </div>
                  </article>

                  {/* Latest News Grid */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4 border-b-2 border-brand pb-2">Latest News</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* News Card 1 */}
                        <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <img src="https://images.unsplash.com/photo-1620712943543-2fd9c197d798?q=80&w=2070" alt="Tech news" className="w-full h-48 object-cover" />
                            <div className="p-4 flex grow flex-col">
                                <a href="#" className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Technology</a>
                                <h4 className="mt-1 text-lg font-semibold leading-tight">The Rise of AI in Creative Industries: Boon or Bane?</h4>
                                <p className="mt-2 text-sm text-gray-600 grow">Artists and writers debate the impact of generative AI on their work and the future of creativity.</p>
                                <div className="mt-4 text-xs text-gray-500">
                                    <time dateTime="2024-05-20">May 20, 2024</time>
                                </div>
                            </div>
                        </article>
                        {/* News Card 2 */}
                        <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070" alt="Sports news" className="w-full h-48 object-cover" />
                            <div className="p-4 flex grow flex-col">
                                <a href="#" className="text-xs font-semibold text-green-600 uppercase tracking-wide">Sports</a>
                                <h4 className="mt-1 text-lg font-semibold leading-tight">Underdogs Claim Stunning Victory in National Championship</h4>
                                <p className="mt-2 text-sm text-gray-600 grow">In a shocking turn of events, the underdog team defeated the reigning champions in a thrilling final match.</p>
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
                      <h3 className="text-xl font-bold mb-4 border-b-2 border-accent pb-2">Trending Now</h3>
                      <ol className="space-y-3 list-decimal list-inside">
                          <li><a href="#" className="text-gray-700 hover:text-brand font-medium">New Archaeological Discovery Rewrites Ancient History</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-brand font-medium">Stock Market Hits Record High Amid Economic Optimism</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-brand font-medium">Health Watch: The Benefits of a Plant-Based Diet</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-brand font-medium">Travel Guide: Top 10 Hidden Gems in Europe</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-brand font-medium">Film Review: A Masterpiece in Modern Cinema</a></li>
                      </ol>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-brand text-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                      <p className="text-sm mb-4">Get the latest news delivered directly to your inbox.</p>
                      <form className="flex flex-col space-y-3">
                          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
                          <button type="submit" className="bg-white text-brand font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">Subscribe</button>
                      </form>
                  </div>

                  {/* Advertisement Placeholder */}
                  <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-500">
                      <p>Advertisement</p>
                      <div className="mt-4 bg-gray-300 h-32 rounded"></div>
                  </div>
              </aside>
          </div>

          {/* footer */}
          <footer className="bg-gray-900 text-gray-400 mt-16">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-white font-bold mb-3">About Us</h4>
                        <p className="text-sm">NewsHub is your trusted source for breaking news, in-depth analysis, and global perspectives.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3">Categories</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">Politics</a></li>
                            <li><a href="#" className="hover:text-white">Technology</a></li>
                            <li><a href="#" className="hover:text-white">Sports</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                            <a href="#" className="hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    &copy; 2024 NewsHub. All Rights Reserved.
                </div>
            </div>
        </footer>
      </main>
    </>
  )
}