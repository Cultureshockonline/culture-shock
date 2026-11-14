
import Link from "next/link";

export default function NBATunnelWatch() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-black px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter md:text-4xl"
          >
            CULTURE SHOCK<span className="text-blue-600">.</span>
          </Link>
          <span className="hidden text-xs font-semibold tracking-widest md:block">
            INDEPENDENT CULTURE JOURNALISM
          </span>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-4 text-xs font-bold tracking-widest text-blue-600">
          SPORTS / FASHION
        </div>

        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          NBA Tunnel Watch: My Top 3 Fits From Opening Week
        </h1>

        
<p className="mb-10 text-sm text-gray-500">
  By Kari Strader | November 14, 2026
</p>


        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Each and every year, we see the NBA tunnel turn into a
            catwalk, giving our favorite athletes a platform to
            express their personal style. However, NBA players
            haven't always had the freedom to wear whatever they
            desired before games. Former NBA commissioner David
            Stern enforced a strict dress code that prohibited
            players from wearing certain types of clothing while
            conducting team or league business.
          </p>

          <p>
            Following Stern's departure in 2014, the league
            gradually adopted a more relaxed approach to its
            dress code under commissioner Adam Silver. Players
            gained greater freedom to incorporate upscale
            streetwear and pieces that reflected their individual
            personalities and creative identities.
          </p>

          <p>
            In today's NBA, the tunnel has become much more than
            a route to the locker room. It has transformed into
            a space where athletes can showcase their creativity,
            experiment with different styles, and bring
            recognition to designers whose work they appreciate.
          </p>

          <p>
            With the 2026–27 NBA season underway, Culture Shock
            takes a look at three standout outfits from the
            opening week of basketball.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-black tracking-tight">
            Shai Gilgeous-Alexander
          </h2>

          <img
            src="/images/shai-tunnel.jpg"
            alt="Shai Gilgeous-Alexander NBA tunnel outfit"
            className="mb-8 h-auto w-full"
          />

          <p className="text-lg leading-relaxed">
            Shai Gilgeous-Alexander has established himself as
            one of the NBA's most recognizable figures in fashion,
            consistently demonstrating an eye for proportions,
            layering, and understated details. During the opening
            week of the 2026–27 NBA season, the Oklahoma City
            Thunder guard delivered another look that reflected
            his distinct approach to personal style. The outfit
            finds its strength in the balance of its proportions
            and contrasting tones, with the subtle flash of color
            from the interior of his jacket adding an unexpected
            element to the ensemble. The wash of his denim
            complements the jacket, while his choice of
            accessories, including layered jewelry, rings, and
            glasses, brings the look together without overwhelming
            it. Rather than relying on loud statement pieces,
            Gilgeous-Alexander allows the silhouette and finer
            details to speak for themselves.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-black tracking-tight">
            Jalen Williams
          </h2>

          <img
            src="/images/jalen-williams-tunnel.jpg"
            alt="Jalen Williams wearing a snakeskin jacket"
            className="mb-8 h-auto w-full"
          />

          <p className="text-lg leading-relaxed">
            While Shai Gilgeous-Alexander embraced a more
            understated approach, his Oklahoma City teammate
            Jalen Williams leaned into bold textures and
            statement accessories. The centerpiece of the look
            is undoubtedly his cropped snakeskin jacket, which
            sits perfectly against the relaxed proportions of
            his baggy denim. The jeans, reminiscent of Japanese
            selvedge denim, add another layer of character
            through their wash and silhouette. Williams keeps
            his accessories cohesive, opting for silver jewelry
            throughout, including his watch, bracelets, and
            necklace, while a subtle pair of Cartier glasses
            adds a refined touch. However, one of the most
            intriguing elements of the outfit is his woven
            Bottega Veneta bag. Its distinctive construction
            and texture complement the snakeskin jacket,
            bringing together an ensemble that balances bold
            statement pieces with carefully considered details.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-black tracking-tight">
            Jalen Green
          </h2>

          <img
            src="/images/jalen-green-tunnel.jpg"
            alt="Jalen Green wearing a colorful patchwork jacket"
            className="mb-8 h-auto w-full"
          />

          <p className="text-lg leading-relaxed">
            Jalen Green showed just how experimental he can be
            with fashion during his opening-week tunnel walk.
            His look embraced bold, vibrant patterns and
            unconventional silhouettes, creating an outfit
            that immediately commanded attention. The centerpiece
            was his patchwork jacket, whose contrasting colors
            and intricate detailing gave the ensemble a distinct
            character. Green paired the jacket with double-waisted
            denim, adding another layer of visual interest
            through its unique construction and relaxed, baggy
            fit. His chunky platform shoes complemented the
            exaggerated proportions of the jeans, bringing
            balance to an outfit that challenged traditional
            approaches to menswear. Rather than allowing the
            statement pieces to compete with one another, Green
            brought them together into a cohesive expression
            of his personal style.
          </p>
        </section>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-lg leading-relaxed">
            As the NBA continues to embrace fashion as a form
            of self-expression, the tunnel has become a space
            where athletes can showcase their individuality
            beyond the basketball court. From carefully
            considered silhouettes to unconventional designs,
            these three looks demonstrate how players are
            continuing to push the boundaries between sports,
            fashion, and culture.
          </p>
        </div>

        <div className="mt-16 border-t border-black pt-6">
          <Link
            href="/"
            className="text-sm font-bold hover:text-blue-600"
          >
            ← BACK TO CULTURE SHOCK
          </Link>
        </div>
      </article>
    </main>
  );
}
