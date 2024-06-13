import Link from "next/link";
import SearchAutocomplete from "~/components/autocomplete";

export default function HomePage() {
  return (
    <main className="min-h-screen w-screen">
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="flex max-w-lg flex-col items-center gap-6">
            <h1 className="text-5xl">Lets Cook.</h1>
            <SearchAutocomplete/>
          </div>
        </div>
      </section>
    </main>
  );
}
