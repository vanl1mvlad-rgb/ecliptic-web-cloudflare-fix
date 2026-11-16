import type { CSSProperties } from "react";

const giveawayLabel = "УЧАСТВОВАТЬ В РОЗЫГРЫШЕ";

export default function GiveawayCta() {
  return (
    <div className="home-reveal home-reveal--trust mx-auto mb-8 flex justify-center">
      <a
        href="https://t.me/Ecliptic_Store"
        target="_blank"
        rel="noopener noreferrer"
        data-analytics="giveaway_click"
        className="giveaway-cta inline-flex w-full max-w-[360px] items-center justify-center rounded-xl border border-cyan-300/45 bg-slate-950/90 px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_10px_34px_rgba(34,211,238,0.16),inset_0_0_24px_rgba(59,130,246,0.12)] backdrop-blur-md transition hover:border-cyan-200/75 hover:bg-slate-900 hover:shadow-[0_12px_42px_rgba(34,211,238,0.28),inset_0_0_28px_rgba(59,130,246,0.18)] active:scale-[0.98] sm:px-7 sm:py-3 sm:text-sm"
      >
        <span aria-hidden="true" className="giveaway-emoji">🎁</span>
        <span aria-label={giveawayLabel}>
          {Array.from(giveawayLabel).map((character, index) => (
            <span
              key={`${character}-${index}`}
              aria-hidden="true"
              className={character === " " ? "giveaway-letter giveaway-space" : "giveaway-letter"}
              style={{ "--giveaway-letter-index": index } as CSSProperties}
            >
              {character}
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}
