export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1020] via-[#101a33] to-[#14223f] text-white">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-12">
        <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(7,12,28,0.65)] backdrop-blur">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500">
              <span className="text-lg font-semibold">❤</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">AVF SmartBand</h1>
              <p className="text-sm text-white/60">
                Haemodialysis Access Surveillance
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Email Address
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                <span className="text-white/60">✉️</span>
                <input
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  placeholder="doctor@hospital.com"
                  defaultValue="doctor@hospital.com"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Password
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                <span className="text-white/60">🔒</span>
                <input
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  placeholder="••••••••"
                  defaultValue="••••••••"
                  type="password"
                />
              </div>
            </label>

            <a
              href="/dashboard"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-sm font-semibold shadow-lg shadow-indigo-500/30 transition hover:from-indigo-400 hover:to-violet-400"
            >
              Sign In
            </a>

            <p className="text-center text-xs text-white/40">
              Protected health information. Authorized personnel only.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/50">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Acoustic Bruit Sensing
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Infrared Perfusion Index
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            ML Risk Scoring
          </span>
        </div>
      </main>
    </div>
  );
}
