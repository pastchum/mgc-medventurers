const summaryCards = [
  {
    title: "Low Risk",
    count: 24,
    description: "Patients with stable AVF",
    accent: "from-emerald-400 to-emerald-600",
    action: "View Patients",
  },
  {
    title: "Moderate Risk",
    count: 5,
    description: "Schedule ultrasound within 7 days",
    accent: "from-amber-400 to-amber-600",
    action: "View Patients",
  },
  {
    title: "High Risk",
    count: 2,
    description: "Immediate review required",
    accent: "from-rose-500 to-rose-600",
    action: "View Patients",
  },
];

const recentReadings = [
  {
    id: "#10021",
    time: "10:42",
    trend: "-18%",
    trendType: "down",
    perfusion: 0.62,
    risk: "High",
  },
  {
    id: "#10007",
    time: "10:38",
    trend: "+4%",
    trendType: "up",
    perfusion: 0.81,
    risk: "Low",
  },
  {
    id: "#10019",
    time: "10:35",
    trend: "-7%",
    trendType: "down",
    perfusion: 0.7,
    risk: "Moderate",
  },
  {
    id: "#10011",
    time: "10:31",
    trend: "+2%",
    trendType: "up",
    perfusion: 0.77,
    risk: "Low",
  },
];

const riskBadge = (risk: string) => {
  switch (risk) {
    case "High":
      return "bg-rose-500/20 text-rose-300";
    case "Moderate":
      return "bg-amber-500/20 text-amber-300";
    default:
      return "bg-emerald-500/20 text-emerald-300";
  }
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0f1a33] to-[#172748] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500">
              ❤
            </div>
            <div>
              <p className="text-sm font-semibold">AVF SmartBand</p>
              <p className="text-xs text-white/50">
                Real-time AVF monitoring
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right text-xs text-white/60">
              <p className="text-sm font-medium text-white">02:48 PM</p>
              <p>Wednesday, January 14, 2026</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold">
                D
              </span>
              <div className="text-xs">
                <p className="font-semibold">Dr. Demo</p>
                <p className="text-white/50">Nephrologist</p>
              </div>
            </div>
            <button className="rounded-full border border-rose-400/40 px-4 py-2 text-xs text-rose-200 transition hover:border-rose-300/80 hover:text-rose-100">
              Logout
            </button>
          </div>
        </header>

        <section className="mt-8">
          <h1 className="text-2xl font-semibold">Patient Overview</h1>
          <p className="mt-1 text-sm text-white/60">
            Real-time arteriovenous fistula monitoring dashboard
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_40px_rgba(7,12,28,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {card.title}
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full bg-gradient-to-r ${card.accent}`}
                  />
                </div>
                <div className="mt-4 text-4xl font-semibold">
                  {card.count}
                </div>
                <p className="mt-2 text-sm text-white/55">
                  {card.description}
                </p>
                <button className="mt-6 text-sm font-medium text-indigo-300 hover:text-indigo-200">
                  {card.action} →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">Recent Readings</h2>
            <button className="rounded-full border border-indigo-500/40 px-4 py-2 text-xs text-indigo-200 transition hover:border-indigo-400/70 hover:text-indigo-100">
              ↻ Refresh
            </button>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <div className="grid grid-cols-6 gap-4 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/40">
              <div>Patient ID</div>
              <div>Time</div>
              <div>Bruit Trend</div>
              <div>Perfusion Index</div>
              <div>Risk Level</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y divide-white/5">
              {recentReadings.map((reading) => (
                <div
                  key={reading.id}
                  className="grid grid-cols-6 items-center gap-4 px-4 py-4 text-sm"
                >
                  <div className="font-semibold text-white/90">
                    {reading.id}
                  </div>
                  <div className="text-white/70">{reading.time}</div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                        reading.trendType === "up"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-rose-500/20 text-rose-300"
                      }`}
                    >
                      {reading.trendType === "up" ? "▲" : "▼"} {reading.trend}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-indigo-400"
                        style={{ width: `${reading.perfusion * 100}%` }}
                      />
                    </div>
                    <span className="text-white/70">
                      {reading.perfusion.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${riskBadge(
                        reading.risk
                      )}`}
                    >
                      {reading.risk}
                    </span>
                  </div>
                  <div className="text-right text-white/50">⋮</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
