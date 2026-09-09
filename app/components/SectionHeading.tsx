export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  showUnderline = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  showUnderline?: boolean;
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`max-w-3xl animate-fade-up ${
        isLeft ? "text-left" : "mx-auto text-center"
      }`}
    >
      <p className="text-sm font-bold uppercase tracking-[0.17em] text-[var(--light-green)]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)]">
        {title}
      </h2>

      {showUnderline && (
        <div
          className={`mt-4 h-[3px] w-14 rounded-full metallic-gold ${
            isLeft ? "" : "mx-auto"
          }`}
        />
      )}

      {description && (
        <p
          className={`text-sm leading-7 text-[var(--text-body)] ${
            showUnderline ? "mt-5" : "mt-4"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}