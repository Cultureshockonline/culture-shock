
const stories = [
  {
  category: "MUSIC",
  link: "/articles/glokk40spaz",
  title: "Glokk40Spaz Is Proving That Independence Is Still an Option",
  description: "After his departure from Columbia Records, the Atlanta rapper's continued momentum highlights the possibilities of building a career outside the major-label system.",
image: "/images/glokk.jpeg",
},

{
  category: "FASHION",
  link: "/articles/martine-rose",
  title: "Martine Rose: A New Era for Balenciaga",
  description: "The British-Jamaican designer prepares to lead one of fashion's most recognizable luxury houses.",
  image: "/images/martine-rose.jpg",
},

  
{
  category: "SPORTS",
  link: "/articles/nba-tunnel-watch",
  title: "NBA Tunnel Watch: My Top 3 Fits From Opening Week",
  description: "From experimental silhouettes to carefully considered details, we examine three standout looks from the NBA's opening week.",
  
image: "/images/jalen-williams-tunnel.jpg",

},

];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-black px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-3xl font-black tracking-tighter md:text-5xl">
            CULTURE SHOCK<span className="text-blue-600">.</span>
          </h1>
          <span className="hidden text-xs font-semibold tracking-widest md:block">
            INDEPENDENT CULTURE JOURNALISM
          </span>
        </div>
      </header>

      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto flex max-w-7xl gap-8 text-xs font-bold tracking-widest">
          <a href="#">HOME</a>
          <a href="#music">MUSIC</a>
          <a href="#fashion">FASHION</a>
          <a href="#sports">SPORTS</a>
          <a href="#about">ABOUT</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between border-b-2 border-black pb-3">
          <h2 className="text-sm font-black tracking-widest">THE LATEST</h2>
          <span className="text-xs font-semibold text-blue-600">
            CULTURE MOVES FAST. WE MOVE FIRST.
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <article id="music">
            
              <a href={stories[0].link} className="block overflow-hidden">
  <img
    src={stories[0].image}
    alt="Live music performance"
className="h-80 w-full object-cover md:h-[440px] transition-transform duration-500 ease-out hover:scale-105"
/>
</a>
            <p className="mt-5 text-xs font-bold tracking-widest text-blue-600">
              {stories[0].category}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-5xl">
            
            <a href={stories[0].link} className="transition-colors duration-300 hover:text-blue-600">{stories[0].title}</a>
</h2><p className="mt-4 text-gray-600">{stories[0].description}</p>
            <p className="mt-5 text-xs font-bold">CULTURE SHOCK STAFF</p>
          </article>

          <div className="space-y-8">
            {stories.slice(1).map((story) => (
              
<article
  key={story.category}
  id={story.category.toLowerCase()}
  className="grid gap-5 border-b border-gray-200 pb-8 sm:grid-cols-2"
>
  <a
    href={story.link || "#"}
    className="group block overflow-hidden"
  >
    <img
      src={story.image}
      alt={story.title}
      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </a>

  <div>
    <p className="text-xs font-bold tracking-widest text-blue-600">
      {story.category}
    </p>

    <h3 className="mt-3 text-2xl font-black leading-tight">
      <a
        href={story.link || "#"}
        className="transition-colors duration-300 hover:text-blue-600"
      >
        {story.title}
      </a>
    </h3>

    <p className="mt-3 text-sm text-gray-600">
      {story.description}
    </p>
  </div>
</article>

            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-widest text-blue-400">
            CULTURE SHOCK ORIGINALS
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            THE UNDERGROUND
          </h2>
          <p className="mt-5 max-w-xl text-gray-300">
            Discovering the artists, designers, athletes, and creative voices
            shaping the next generation of culture.
          </p>
          <p className="mt-8 text-sm font-bold text-blue-400">
            MORE COMING SOON
          </p>
        </div>
      </section>

      <footer id="about" className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <h2 className="text-2xl font-black tracking-tighter">
            CULTURE SHOCK<span className="text-blue-600">.</span>
          </h2>
          <p className="text-sm text-gray-500">
            Independent perspectives on music, fashion, sports, and culture.
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-xs text-gray-400">
          © 2026 CULTURE SHOCK. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
