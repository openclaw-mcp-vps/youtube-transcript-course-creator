export default function Home() {
  const faqs = [
    {
      q: "Which YouTube playlists are supported?",
      a: "Any public YouTube playlist. Paste the URL and CourseForge fetches all videos, transcripts, and metadata automatically.",
    },
    {
      q: "How does the AI generate the course structure?",
      a: "Our AI analyzes video transcripts to group content into logical modules, generate quizzes, and write concise lesson notes — ready to publish.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn YouTube Videos into{" "}
          <span className="text-[#58a6ff]">Structured Courses</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a YouTube playlist URL. CourseForge uses AI to build organized
          modules, quizzes, and notes — with built-in progress tracking for your
          students.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $11 / mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📋", label: "Auto Module Builder", desc: "AI groups videos into logical lessons" },
          { icon: "🧠", label: "Quiz Generator", desc: "Instant quizzes from transcript content" },
          { icon: "📈", label: "Progress Tracking", desc: "Students track completion per lesson" },
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.label}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-extrabold text-white mb-1">$11<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#58a6ff] font-semibold mb-6">All Features Included</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited playlist imports",
              "AI course structure & quizzes",
              "Student progress dashboard",
              "Exportable course notes",
              "Priority email support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} CourseForge. All rights reserved.
      </footer>
    </main>
  );
}
