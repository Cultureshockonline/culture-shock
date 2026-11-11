
import Link from "next/link";

const sourceLink =
  "text-blue-600 underline underline-offset-2 hover:text-blue-800";

export default function MartineRoseArticle() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b-2 border-black px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter md:text-4xl"
          >
            CULTURE SHOCK<span className="text-blue-600">.</span>
          </Link>
          <span className="hidden text-xs font-bold tracking-widest md:block">
            INDEPENDENT CULTURE JOURNALISM
          </span>
        </div>
      </header>

      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto flex max-w-6xl gap-8 text-xs font-bold tracking-widest">
          <Link href="/">HOME</Link>
          <Link href="/#music">MUSIC</Link>
          <Link href="/#fashion">FASHION</Link>
          <Link href="/#sports">SPORTS</Link>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-5">
          <span className="text-xs font-black tracking-widest text-blue-600">
            FASHION / DESIGNER PROFILE
          </span>
        </div>

        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Martine Rose: A New Era for Balenciaga
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
          The British-Jamaican designer prepares to lead one of fashion&apos;s
          most recognizable luxury houses.
        </p>

        <div className="my-8 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-5">
          <p className="text-xs font-bold tracking-widest">
            By Kari Strader
          </p>
          <p className="text-xs text-gray-500">
            NOVEMBER 11, 2026
          </p>
        </div>

        <img
          src="/images/martine-rose.jpg"
          alt="Portrait of fashion designer Martine Rose"
          className="h-72 w-full object-cover object-center md:h-[460px]"
        />

        <p className="mt-3 text-xs text-gray-500">
          Martine Rose. Photo: Liz Johnson Artur.
        </p>

        <div className="mx-auto mt-12 max-w-2xl space-y-7 text-lg leading-8 text-gray-800">
          <p>
            For nearly two decades, Martine Rose has been building a portfolio
            that has made her{" "}
            <a
              href="https://www.gq.com/story/martine-rose-profile-21"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              one of fashion&apos;s most influential designers.
            </a>{" "}
            Known for her unconventional approach to menswear and deep
            connections to London’s street culture and music scene, Rose has
            helped shape an aesthetic that can be seen throughout contemporary
            fashion.
          </p>

          <p>
            The British Jamaican designer is now set to take on one of the most
            prominent roles in fashion today as the{" "}
            <a
              href="https://www.kering.com/en/news/martine-rose-appointed-creative-director-of-balenciaga/"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              Creative Director of Balenciaga
            </a>
            . Her appointment not only marks a huge milestone in her career,
            it also brings a designer who is known for challenging the
            conventional practices of fashion to the creative forefront of one
            of the most recognizable luxury fashion houses in the world.
          </p>

          <p>
            Martine Rose made her first imprint on the fashion industry in the
            early 2000s when she co-founded the brand{" "}
            <a
              href="https://www.anothermag.com/fashion-beauty/12942/martine-rose-aw20-balenciaga-interview"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              LMNOP
            </a>{" "}
            alongside her close friend and fellow British fashion designer{" "}
            <a
              href="https://system-magazine.com/issues/issue-20/momentum-martine-rose-tamara-rothstein"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              Tamara Rothstein
            </a>
            . The brand lasted roughly 3 years before the two collaborators
            decided to pursue separate creative endeavors. In 2007, Rose
            launched her namesake menswear brand, which drew inspiration from
            the culture surrounding her upbringing in London. Influenced by
            reggae music, nightlife, and the city&apos;s diverse communities,
            Rose began developing a design identity that challenged traditional
            menswear through oversized silhouettes, unconventional
            proportions, and elements of streetwear.
          </p>

          <p>
            As she continued to develop her personal label, Rose’s menswear
            expertise gained the attention of{" "}
            <a
              href="https://www.lvmhprize.com/en/martine-rose-studio-limited"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              Fashion East’s MAN collective
            </a>
            . Fashion East is a nonprofit talent incubator that provides
            emerging British fashion designers with a platform to showcase
            their work. Through the MAN collective, Martine Rose was able to
            gain more exposure within the fashion industry, making a true name
            for herself through her experimental approach to tailoring and
            streetwear. Her designs eventually caught the attention of{" "}
            <a
              href="https://www.vogue.com/article/demna-gvasalia-balenciaga-artistic-director-vetements-cofounder-designer"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              Demna
            </a>
            , Balenciaga’s creative director at the time, who brought Rose on
            as a{" "}
            <a
              href="https://www.vogue.com/article/martine-rose-success-collaborations-balenciaga"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              consultant for Balenciaga&apos;s menswear collection in 2015
            </a>
            .
          </p>

          <p>
            Having previously worked alongside Demna at Balenciaga, Rose
            brings a familiar yet distinct perspective to the fashion
            house&apos;s creative identity. Her new role not only represents
            a significant turning point in her career, it also marks a moment
            in history as she becomes the{" "}
            <a
              href="https://www.vogue.com/article/martine-rose-is-the-new-creative-director-of-balenciaga"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              first woman to lead Balenciaga’s creative direction
            </a>
            . Rose joins fellow designer{" "}
            <a
              href="https://www.vogue.co.uk/article/martine-rose-grace-wales-bonner-opinion"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              Grace Wales Bonner
            </a>{" "}
            as one of the first two Black women to take leadership roles at
            major European luxury fashion houses.
          </p>

          <p>
            Beyond the historical significance, Rose’s move to Balenciaga
            reflects the growing influence of independent designers within
            luxury fashion. After nearly two decades of developing her own
            brand, Rose has established a creative identity that extends
            beyond her collections through{" "}
            <a
              href="https://www.vogue.co.uk/fashion/article/martine-rose-vogue-interview"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLink}
            >
              collaborations with brands like Nike
            </a>{" "}
            and her influence on contemporary menswear. Her arrival at
            Balenciaga illustrates how an independent designer’s vision can
            help shape the direction of an established fashion powerhouse.
          </p>

          <p>
            As a new chapter prepares to begin for Martine Rose, anticipation
            is building around how her creative direction translates to
            Balenciaga’s upcoming collections. Known for her unconventional
            runway productions and having a true gift of being able to draw
            inspiration from everyday environments, Rose can offer a new
            approach to how the brand presents itself. While her first
            collection is yet to be revealed, her history with challenging
            the traditional conventions of fashion offers a glimpse of what
            audiences should expect from this new era in leadership.
          </p>
        </div>

        <div className="mt-16 border-t-2 border-black pt-8">
          <p className="text-xs font-black tracking-widest text-blue-600">
            MORE FROM CULTURE SHOCK
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-lg font-bold underline decoration-blue-600 underline-offset-4 transition-colors hover:text-blue-600"
          >
            Back to the homepage
          </Link>
        </div>
      </article>

      <footer className="bg-black px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            CULTURE SHOCK<span className="text-blue-500">.</span>
          </Link>
          <p className="mt-3 text-sm text-gray-400">
            Independent perspectives on music, fashion, sports, and culture.
          </p>
        </div>
      </footer>
    </main>
  );
}
