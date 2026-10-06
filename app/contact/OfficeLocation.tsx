import { MapPin } from "lucide-react";



export default function OfficeLocation() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-[28px] border border-[var(--light-green)]/25 bg-[var(--surface-cream)] px-7 py-10 text-center shadow-[0_12px_40px_color-mix(in_srgb,var(--primary-brown)_6%,transparent)] sm:flex-row sm:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--primary-green)]">
          <MapPin size={29} strokeWidth={1.6} />
        </div>
        <div>
          <p className="font-serif text-2xl font-semibold text-[var(--primary-brown)]">
            New office location coming soon
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">
            Please contact us by phone or email while we update our office details.
          </p>
        </div>
      </div>
    </section>
  );
}
