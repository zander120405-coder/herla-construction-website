import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-background text-foreground">
      <div className="flex h-full flex-col">
        <NavBar />

        <main className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1">
            <Hero />
          </div>

          <StatsBar />
        </main>
      </div>
    </div>
  );
}
