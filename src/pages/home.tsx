import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <section className="space-y-14">
      {/* Hero Section */}
      <header
        className="relative isolate flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-[#f1ddc9] bg-gradient-to-tr from-[#fff4e6] to-[#ffe7cf] p-8 text-center shadow-sm md:flex-row md:gap-16 md:text-left"
      >
        <div className="flex-[2] space-y-4 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d94828]">
            Fine Dining Excellence
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#26170e] drop-shadow-sm sm:text-5xl">
            {env.appName || "Le Soleil"} <span className="text-[#ff6b4a]">Restaurant</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#6f5b4a] max-w-xl">
            Experience culinary artistry in an elegant, intimate atmosphere. Join us for a journey of flavor showcasing the freshest local ingredients, crafted with passion and creativity.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:gap-3">
            <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828] px-8 py-5 rounded-full font-medium text-lg shadow-sm transition">
              <Link to="#reservation">Reserve a Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf] px-8 py-5 rounded-full font-medium text-lg"
            >
              <Link to="#menu">View Menu</Link>
            </Button>
          </div>
        </div>
        <div className="flex-[1] hidden md:block">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#fed6ae] bg-white">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
              alt="Restaurant main dish"
              className="object-cover h-64 w-96"
            />
          </div>
        </div>
      </header>

      {/* Menu / Food Specialties */}
      <section id="menu" className="max-w-7xl mx-auto space-y-8">
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-[#26170e] sm:text-3xl">Signature Dishes</h2>
          <p className="text-[#6f5b4a] text-base">
            Savor our chef’s creations, blending tradition and innovation for an unforgettable dining experience.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Example Menu Cards */}
          <Card className="border-[#f1ddc9] bg-[#fffaf2] hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#26170e]">Seared Duck Breast</CardTitle>
              <CardDescription className="text-[#d94828] font-semibold">$26</CardDescription>
            </CardHeader>
            <CardContent className="text-[#6f5b4a] text-sm">
              Cherry-port reduction, parsnip purée, roasted root vegetables
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#26170e]">Truffle Risotto</CardTitle>
              <CardDescription className="text-[#d94828] font-semibold">$19</CardDescription>
            </CardHeader>
            <CardContent className="text-[#6f5b4a] text-sm">
              Creamy carnaroli rice, wild mushrooms, shaved black truffle
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#26170e]">Seaside Branzino</CardTitle>
              <CardDescription className="text-[#d94828] font-semibold">$28</CardDescription>
            </CardHeader>
            <CardContent className="text-[#6f5b4a] text-sm">
              Herb-roasted, lemon beurre blanc, charred fennel, microgreens
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#26170e]">Chocolate Fondant</CardTitle>
              <CardDescription className="text-[#d94828] font-semibold">$12</CardDescription>
            </CardHeader>
            <CardContent className="text-[#6f5b4a] text-sm">
              Warm molten chocolate cake, vanilla bean gelato, raspberry coulis
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ambience / Interior */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-[#26170e] sm:text-3xl">A Setting to Remember</h2>
          <p className="text-[#6f5b4a] text-base">
            Delight in the inviting ambience—elegant interiors, candlelit tables, and a warm, welcoming glow.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden border border-[#f1ddc9] bg-[#fffaf2]">
            <img
              className="h-32 w-full object-cover"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=360&q=80"
              alt="Elegant restaurant interior"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#f1ddc9] bg-[#fffaf2]">
            <img
              className="h-32 w-full object-cover"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=360&q=80"
              alt="Candlelit table"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#f1ddc9] bg-[#fffaf2]">
            <img
              className="h-32 w-full object-cover"
              src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=360&q=80"
              alt="Delicate table setting"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#f1ddc9] bg-[#fffaf2]">
            <img
              className="h-32 w-full object-cover"
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=360&q=80"
              alt="Bar area"
            />
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-[#26170e] sm:text-3xl">What Our Guests Say</h2>
          <p className="text-[#6f5b4a] text-base">
            Join hundreds of satisfied diners who love our dedication to perfection.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-[#ecd7be] bg-white shadow-md">
            <CardContent className="p-6 flex flex-col gap-4">
              <blockquote className="text-[#26170e] text-base font-medium">
                “Every bite was a revelation. The service and attention to detail made our anniversary truly special.”
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/67.jpg"
                  alt="Customer testimonial"
                  className="h-10 w-10 rounded-full object-cover border border-[#e7cdb4]"
                />
                <div>
                  <div className="font-semibold text-[#d94828]">Sophia L.</div>
                  <div className="text-xs text-[#6f5b4a]">Local Guide</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[#ecd7be] bg-white shadow-md">
            <CardContent className="p-6 flex flex-col gap-4">
              <blockquote className="text-[#26170e] text-base font-medium">
                “The ambience is unmatched—warm, sophisticated, and inviting. Highly recommended for date night!”
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="Customer testimonial"
                  className="h-10 w-10 rounded-full object-cover border border-[#e7cdb4]"
                />
                <div>
                  <div className="font-semibold text-[#d94828]">James R.</div>
                  <div className="text-xs text-[#6f5b4a]">Food Enthusiast</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[#ecd7be] bg-white shadow-md">
            <CardContent className="p-6 flex flex-col gap-4">
              <blockquote className="text-[#26170e] text-base font-medium">
                “Incredible flavors, artful presentation, and wine pairings that elevated the meal. Will return!”
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/77.jpg"
                  alt="Customer testimonial"
                  className="h-10 w-10 rounded-full object-cover border border-[#e7cdb4]"
                />
                <div>
                  <div className="font-semibold text-[#d94828]">Ricardo V.</div>
                  <div className="text-xs text-[#6f5b4a]">Wine Lover</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location / Contact Section */}
      <section id="reservation" className="max-w-4xl mx-auto space-y-7">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#26170e] sm:text-3xl">
            Visit Us
          </h2>
          <p className="text-[#6f5b4a] text-base">
            1234 Grand Avenue, San Francisco, CA &mdash; (415) 555-1234
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://maps.google.com/?q=1234+Grand+Avenue,+San+Francisco,+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff6b4a] underline hover:text-[#d94828] font-medium transition"
          >
            Get Directions
          </a>
          <span className="hidden sm:inline text-[#e7cdb4]">|</span>
          <a
            href="mailto:reservations@lesoleil.com"
            className="text-[#d94828] underline hover:text-[#26170e] font-medium transition"
          >
            reservations@lesoleil.com
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#ff6b4a] text-white hover:bg-[#d94828] px-8 py-5 rounded-full font-medium text-lg shadow transition"
          >
            <a href="mailto:reservations@lesoleil.com">Book Your Table</a>
          </Button>
        </div>
      </section>
    </section>
  );
}