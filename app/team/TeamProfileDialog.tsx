"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const introductions: Record<string, string[]> = {
  "Waiza Hakimi BSc, CPA": [
    "Waiza Hakimi is the Founder and Managing Partner of the firm, bringing over 15 years of public accounting experience and a passion for helping organizations achieve financial clarity, stability, and growth. As a Chartered Professional Accountant (CPA), she provides trusted advisory, audit, and assurance services to organizations across a diverse range of industries.",
    "Throughout her career, Waiza has led and managed assurance engagements for both for-profit and not-for-profit entities, delivering practical insights that strengthen governance, enhance financial reporting, and support strategic decision-making. Her extensive experience includes working with construction, service-based businesses, condominium corporations, social and recreational clubs, and housing co-operatives.",
    "Known for her client-centered approach, Waiza takes the time to understand each organization’s unique challenges and objectives. She combines technical expertise with practical business insight to deliver tailored solutions that promote compliance, operational efficiency, and long-term success.",
    "As the firm's leader, Waiza is committed to building lasting relationships based on integrity, responsiveness, and exceptional service. She works closely with clients to provide the guidance and confidence they need to navigate an evolving business environment and achieve their goals."
  ],
  "Basir Hakimi": [
   "Basir Hakimi serves as the firm's Director of Client Relations, bringing more than 13 years of experience building and strengthening client relationships across the construction and hospitality sectors. Throughout his career, he has developed a strong reputation for fostering trust, understanding client needs, and creating long-term partnerships that drive mutual success.",
   "Basir's expertise lies in connecting with business owners and decision-makers, understanding their unique challenges, and ensuring they receive the support and solutions needed to achieve their goals. His relationship-focused approach, combined with his extensive industry experience, enables him to serve as a trusted point of contact for clients throughout their journey with the firm.",
   "Committed to delivering an exceptional client experience, Basir plays a key role in developing and maintaining lasting relationships while supporting the firm's continued growth and commitment to outstanding service."
  ],
  "Mobeen Amini": [
    "Mobeen Amini is a Junior Accountant with experience supporting basic tax filing and bookkeeping activities. He has experience assisting with the preparation and organization of financial records, bookkeeping tasks, and tax-related documentation. Mobeen is detail-oriented, reliable, and committed to maintaining accurate and organized financial information. He is also eager to continue developing his accounting knowledge and professional skills while supporting clients with their accounting and tax needs."
  ],
  "Laila Habibi":[
      "Laila Habibi is a Software Engineer, Data Analyst, and AI Developer with experience in building digital solutions, analyzing complex data, and applying artificial intelligence to real-world challenges.",
      "Her work in data analytics focuses on transforming raw information into meaningful insights that support better business decisions. She has experience developing interactive dashboards, automating reporting processes, identifying trends and patterns, and presenting findings in a clear and practical way.",
      "In artificial intelligence, Laila has worked on machine learning, predictive analytics, recommendation systems, and computer vision projects. She is particularly interested in using AI to automate processes, solve business problems, and create smarter and more efficient digital experiences.",
      "With experience spanning software development, data analytics, and AI, Laila brings a multidisciplinary approach to creating practical solutions that connect technology with real business needs."
  ]
  
};

type Member = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export default function TeamProfileDialog({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Know more about ${member.name}`}
        className="after:absolute after:inset-0 after:z-10 after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-[var(--primary-green)] mt-5 inline-flex cursor-pointer items-center gap-2 rounded-sm font-regular text-[var(--primary-green)] underline decoration-[var(--primary-golden)] underline-offset-4 hover:text-[var(--dark-green)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-green)]"
      >
        Know more <ArrowRight size={16} aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setOpen(false);
        }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-[var(--light-green)]/30 bg-[var(--surface)] p-0 text-left text-[var(--text-body)] shadow-2xl backdrop:bg-[var(--ink)]/60"
      >
        <div className="relative p-6 sm:p-9">
          <button
            type="button"
            autoFocus
            onClick={() => setOpen(false)}
            aria-label="Close profile"
            className="absolute right-3 top-3 cursor-pointer rounded-full p-2 text-[var(--primary-green)] hover:bg-[var(--surface-green)] focus-visible:outline-2 focus-visible:outline-[var(--primary-green)]"
          >
            <X size={22} />
          </button>
          <div className="flex flex-col gap-5 pr-6 sm:flex-row sm:items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={200}
              className="h-44 w-32 shrink-0 rounded-lg bg-[var(--surface-muted)] object-contain"
            />
            <div>
              <h2 id={titleId} className="font-serif text-2xl font-semibold text-[var(--primary-brown)]">{member.name}</h2>
              <p className="mt-2 font-semibold text-[var(--primary-green)]">{member.role}</p>
              <div className="mt-4 h-[3px] w-14 rounded-full metallic-gold" />
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-7">
            {(introductions[member.name] ?? [member.description]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </dialog>
    </>
  );
}
