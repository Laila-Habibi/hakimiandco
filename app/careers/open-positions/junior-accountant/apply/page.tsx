"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  FileText,
  
  Mail,
  MapPin,
  Phone,
  Upload,
  UserRound,
} from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  province: string;
  linkedin: string;
  website: string;
  experience: string;
  education: string;
  currentEmployer: string;
  currentPosition: string;
  expectedSalary: string;
  startDate: string;
  authorizedToWork: string;
  requiresSponsorship: string;
  motivation: string;
  accountingExperience: string;
  additionalInformation: string;
  declaration: boolean;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  province: "",
  linkedin: "",
  website: "",
  experience: "",
  education: "",
  currentEmployer: "",
  currentPosition: "",
  expectedSalary: "",
  startDate: "",
  authorizedToWork: "",
  requiresSponsorship: "",
  motivation: "",
  accountingExperience: "",
  additionalInformation: "",
  declaration: false,
};

export default function JuniorAccountantApplicationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    if (!formData.authorizedToWork) {
      alert("Please confirm whether you are authorized to work in Canada.");
      return;
    }

    if (!formData.requiresSponsorship) {
      alert("Please confirm whether you require sponsorship.");
      return;
    }

    if (!formData.declaration) {
      alert("Please confirm that the information provided is accurate.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key, String(value));
      });

      submissionData.append("role", "Junior Accountant");
      submissionData.append("resume", resume);

      if (coverLetter) {
        submissionData.append("coverLetter", coverLetter);
      }

      if (certificate) {
        submissionData.append("certificate", certificate);
      }

      /*
        Connect this to your API route later:

        const response = await fetch("/api/applications", {
          method: "POST",
          body: submissionData,
        });

        if (!response.ok) {
          throw new Error("Application submission failed.");
        });
      */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitted(true);
      setFormData(initialFormData);
      setResume(null);
      setCoverLetter(null);
      setCertificate(null);
    } catch (error) {
      console.error(error);
      alert("Your application could not be submitted. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <ApplicationSuccess />;
  }

  return (
    <main className="min-h-screen bg-[#f8f6ef] text-[#554b44]">
      <ApplicationHero />

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_340px]">
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            encType="multipart/form-data"
          >
            <FormSection
              eyebrow="Step 01"
              title="Personal Information"
              description="Tell us how we can contact you."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                  id="firstName"
                  label="First Name"
                  required
                  value={formData.firstName}
                  onChange={(value) => updateField("firstName", value)}
                  icon={UserRound}
                />

                <FormInput
                  id="lastName"
                  label="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(value) => updateField("lastName", value)}
                  icon={UserRound}
                />

                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(value) => updateField("email", value)}
                  icon={Mail}
                />

                <FormInput
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(value) => updateField("phone", value)}
                  icon={Phone}
                />

                <FormInput
                  id="city"
                  label="City"
                  required
                  value={formData.city}
                  onChange={(value) => updateField("city", value)}
                  icon={MapPin}
                />

                <FormSelect
                  id="province"
                  label="Province"
                  required
                  value={formData.province}
                  onChange={(value) => updateField("province", value)}
                  options={[
                    "Ontario",
                    "Alberta",
                    "British Columbia",
                    "Manitoba",
                    "New Brunswick",
                    "Newfoundland and Labrador",
                    "Nova Scotia",
                    "Prince Edward Island",
                    "Quebec",
                    "Saskatchewan",
                    "Northwest Territories",
                    "Nunavut",
                    "Yukon",
                  ]}
                />

                <FormInput
                  id="linkedin"
                  label="LinkedIn Profile"
                  type="url"
                  value={formData.linkedin}
                  onChange={(value) => updateField("linkedin", value)}
                  icon={Mail}
                  placeholder="https://linkedin.com/in/your-name"
                />

                <FormInput
                  id="website"
                  label="Portfolio or Website"
                  type="url"
                  value={formData.website}
                  onChange={(value) => updateField("website", value)}
                  icon={FileText}
                  placeholder="Optional"
                />
              </div>
            </FormSection>

            <FormSection
              eyebrow="Step 02"
              title="Professional Information"
              description="Share details about your education and experience."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormSelect
                  id="experience"
                  label="Years of Experience"
                  required
                  value={formData.experience}
                  onChange={(value) => updateField("experience", value)}
                  options={[
                    "No professional experience",
                    "Less than 1 year",
                    "1–2 years",
                    "3–5 years",
                    "More than 5 years",
                  ]}
                />

                <FormSelect
                  id="education"
                  label="Highest Level of Education"
                  required
                  value={formData.education}
                  onChange={(value) => updateField("education", value)}
                  options={[
                    "High school diploma",
                    "College diploma",
                    "Bachelor's degree",
                    "Postgraduate certificate",
                    "Master's degree",
                    "Other",
                  ]}
                />

                <FormInput
                  id="currentEmployer"
                  label="Current Employer"
                  value={formData.currentEmployer}
                  onChange={(value) => updateField("currentEmployer", value)}
                  icon={BriefcaseBusiness}
                  placeholder="Optional"
                />

                <FormInput
                  id="currentPosition"
                  label="Current Position"
                  value={formData.currentPosition}
                  onChange={(value) => updateField("currentPosition", value)}
                  icon={BriefcaseBusiness}
                  placeholder="Optional"
                />

                <FormInput
                  id="expectedSalary"
                  label="Expected Salary"
                  value={formData.expectedSalary}
                  onChange={(value) => updateField("expectedSalary", value)}
                  icon={FileText}
                  placeholder="Example: $50,000 annually"
                />

                <FormInput
                  id="startDate"
                  label="Available Start Date"
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(value) => updateField("startDate", value)}
                  icon={CalendarDays}
                />
              </div>
            </FormSection>

            <FormSection
              eyebrow="Step 03"
              title="Work Eligibility"
              description="Please confirm your current work authorization."
            >
              <div className="grid gap-6 md:grid-cols-2">
                <RadioGroup
                  legend="Are you legally authorized to work in Canada?"
                  name="authorizedToWork"
                  value={formData.authorizedToWork}
                  onChange={(value) =>
                    updateField("authorizedToWork", value)
                  }
                />

                <RadioGroup
                  legend="Will you require sponsorship now or in the future?"
                  name="requiresSponsorship"
                  value={formData.requiresSponsorship}
                  onChange={(value) =>
                    updateField("requiresSponsorship", value)
                  }
                />
              </div>
            </FormSection>

            <FormSection
              eyebrow="Step 04"
              title="Resume and Documents"
              description="Upload the documents supporting your application."
            >
              <div className="grid gap-5 md:grid-cols-3">
                <FileUpload
                  id="resume"
                  label="Resume"
                  description="PDF or DOCX, maximum 5 MB"
                  required
                  file={resume}
                  onChange={setResume}
                />

                <FileUpload
                  id="coverLetter"
                  label="Cover Letter"
                  description="Optional PDF or DOCX"
                  file={coverLetter}
                  onChange={setCoverLetter}
                />

                <FileUpload
                  id="certificate"
                  label="Certificates"
                  description="Optional PDF or image"
                  file={certificate}
                  onChange={setCertificate}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </FormSection>

            <FormSection
              eyebrow="Step 05"
              title="Application Questions"
              description="Help us learn more about your experience and goals."
            >
              <div className="space-y-5">
                <FormTextarea
                  id="motivation"
                  label="Why would you like to work at Hakimi & Co?"
                  required
                  value={formData.motivation}
                  onChange={(value) => updateField("motivation", value)}
                  placeholder="Tell us what interests you about the firm and this role."
                />

                <FormTextarea
                  id="accountingExperience"
                  label="Tell us about your accounting experience."
                  required
                  value={formData.accountingExperience}
                  onChange={(value) =>
                    updateField("accountingExperience", value)
                  }
                  placeholder="Describe relevant education, internships, software and accounting responsibilities."
                />

                <FormTextarea
                  id="additionalInformation"
                  label="Is there anything else you would like us to know?"
                  value={formData.additionalInformation}
                  onChange={(value) =>
                    updateField("additionalInformation", value)
                  }
                  placeholder="Optional"
                />
              </div>
            </FormSection>

            <div className="rounded-2xl border border-[#80ab7e]/20 bg-white p-6 shadow-[0_12px_35px_rgba(86,116,47,0.06)]">
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  checked={formData.declaration}
                  onChange={(event) =>
                    updateField("declaration", event.target.checked)
                  }
                  className="mt-1 h-5 w-5 shrink-0 rounded border-[#80ab7e] accent-[var(--primary-green)]"
                />

                <span className="text-sm leading-7 text-[#5c5048]">
                  I certify that the information provided in this application
                  is complete and accurate. I understand that false or
                  misleading information may result in the rejection of my
                  application.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--primary-green)] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}

              {!isSubmitting && (
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>
          </form>

          <ApplicationSidebar />
        </div>
      </section>
    </main>
  );
}

function ApplicationHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#80ab7e]/20 bg-[#f8f6ef] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#80ab7e]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-[var(--primary-green)] hover:text-[var(--primary-brown)]"
          >
            Home
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <Link
            href="/careers"
            className="text-[var(--primary-green)] hover:text-[var(--primary-brown)]"
          >
            Careers
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <Link
            href="/careers/open-positions"
            className="text-[var(--primary-green)] hover:text-[var(--primary-brown)]"
          >
            Open Positions
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <Link
            href="/careers/open-positions/junior-accountant"
            className="text-[var(--primary-green)] hover:text-[var(--primary-brown)]"
          >
            Junior Accountant
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <span className="text-[var(--primary-brown)]">Apply</span>
        </div>

        <div className="mt-10 max-w-3xl">
          <Link
            href="/careers/open-positions/junior-accountant"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-green)]"
          >
            <ArrowLeft size={17} />
            Back to Job Details
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
            Career Application
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl">
            Apply for Junior Accountant
          </h1>

          <div className="mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5c5048]">
            Complete the form below to apply for the Junior Accountant
            position. Our recruitment team will review your application and
            contact selected candidates.
          </p>
        </div>
      </div>
    </section>
  );
}

function FormSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#80ab7e]/20 bg-white p-6 shadow-[0_12px_35px_rgba(86,116,47,0.06)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-2xl font-semibold text-[var(--primary-brown)]">
        {title}
      </h2>

      <div className="mt-4 h-[3px] w-12 rounded-full bg-[var(--primary-golden)]" />

      <p className="mt-4 text-sm leading-7 text-[#66574d]">{description}</p>

      <div className="mt-8">{children}</div>
    </section>
  );
}

function FormInput({
  id,
  label,
  value,
  onChange,
  icon: Icon,
  type = "text",
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: typeof UserRound;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[#3d2c22]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--primary-green)]">*</span>
        )}
      </label>

      <div className="relative">
        <Icon
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#789066]"
        />

        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          placeholder={placeholder}
          className="h-14 w-full rounded-lg border border-[#854d1b]/15 bg-white pl-12 pr-4 text-sm text-[#3d210f] outline-none transition placeholder:text-[#948a82] focus:border-[#80ab7e] focus:ring-2 focus:ring-[#80ab7e]/15"
        />
      </div>
    </div>
  );
}

function FormSelect({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[#3d2c22]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--primary-green)]">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          className="h-14 w-full appearance-none rounded-lg border border-[#854d1b]/15 bg-white px-4 pr-11 text-sm text-[#3d210f] outline-none transition focus:border-[#80ab7e] focus:ring-2 focus:ring-[#80ab7e]/15"
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#789066]"
        />
      </div>
    </div>
  );
}

function RadioGroup({
  legend,
  name,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="rounded-xl border border-[#80ab7e]/20 bg-[#fbfaf6] p-5">
      <legend className="px-2 text-sm font-semibold leading-6 text-[#3d2c22]">
        {legend}
      </legend>

      <div className="mt-4 flex gap-6">
        {["Yes", "No"].map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(event) => onChange(event.target.value)}
              className="h-4 w-4 accent-[var(--primary-green)]"
            />

            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function FileUpload({
  id,
  label,
  description,
  file,
  onChange,
  required = false,
  accept = ".pdf,.doc,.docx",
}: {
  id: string;
  label: string;
  description: string;
  file: File | null;
  onChange: (file: File | null) => void;
  required?: boolean;
  accept?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-[#80ab7e]/50 bg-[#fbfaf6] p-5 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#80ab7e]/12 text-[var(--primary-green)]">
        <Upload size={24} />
      </div>

      <label
        htmlFor={id}
        className="mt-4 block cursor-pointer text-sm font-semibold text-[var(--primary-brown)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--primary-green)]">*</span>
        )}
      </label>

      <p className="mt-2 text-xs leading-5 text-[#756c65]">{description}</p>

      <input
        id={id}
        type="file"
        accept={accept}
        required={required}
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
        className="sr-only"
      />

      <label
        htmlFor={id}
        className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-md border border-[var(--primary-green)] px-4 py-2 text-xs font-semibold text-[var(--primary-green)] transition hover:bg-[var(--primary-green)] hover:text-white"
      >
        Choose File
      </label>

      {file && (
        <p className="mt-3 truncate text-xs font-medium text-[var(--primary-green)]">
          {file.name}
        </p>
      )}
    </div>
  );
}

function FormTextarea({
  id,
  label,
  value,
  onChange,
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[#3d2c22]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--primary-green)]">*</span>
        )}
      </label>

      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        rows={6}
        placeholder={placeholder}
        className="w-full resize-none rounded-lg border border-[#854d1b]/15 bg-white px-4 py-4 text-sm leading-7 text-[#3d210f] outline-none transition placeholder:text-[#948a82] focus:border-[#80ab7e] focus:ring-2 focus:ring-[#80ab7e]/15"
      />
    </div>
  );
}

function ApplicationSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <div className="rounded-2xl border border-[#80ab7e]/20 bg-white p-7 shadow-[0_12px_35px_rgba(86,116,47,0.06)]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
          Position Summary
        </p>

        <h2 className="mt-3 font-serif text-2xl font-semibold text-[var(--primary-brown)]">
          Junior Accountant
        </h2>

        <div className="mt-6 space-y-5 border-t border-[#854d1b]/12 pt-6">
          <SidebarDetail
            icon={BriefcaseBusiness}
            label="Department"
            value="Accounting"
          />

          <SidebarDetail
            icon={BriefcaseBusiness}
            label="Employment Type"
            value="Full-time"
          />

          <SidebarDetail
            icon={MapPin}
            label="Location"
            value="Toronto, ON"
          />

          <SidebarDetail
            icon={CalendarDays}
            label="Start Date"
            value="As soon as possible"
          />
        </div>

        <Link
          href="/careers/open-positions/junior-accountant"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-green)]"
        >
          View Job Description
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="rounded-2xl bg-[var(--primary-green)] p-7 text-white">
        <Mail size={30} strokeWidth={1.5} />

        <h2 className="mt-5 font-serif text-2xl font-semibold">
          Questions about applying?
        </h2>

        <p className="mt-3 text-sm leading-7 text-white/80">
          Contact our recruitment team for help with your application.
        </p>

        <a
          href="mailto:careers@hakimiandco.ca"
          className="mt-5 inline-block text-sm font-semibold text-[var(--primary-golden)]"
        >
          careers@hakimiandco.ca
        </a>
      </div>
    </aside>
  );
}

function SidebarDetail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BriefcaseBusiness;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon
        size={19}
        className="mt-1 shrink-0 text-[var(--primary-green)]"
      />

      <div>
        <p className="text-xs text-[#756c65]">{label}</p>
        <p className="mt-1 text-sm font-medium text-[#3d2c22]">{value}</p>
      </div>
    </div>
  );
}

function ApplicationSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f6ef] px-5 py-20">
      <div className="w-full max-w-2xl rounded-3xl border border-[#80ab7e]/20 bg-white px-7 py-14 text-center shadow-[0_18px_50px_rgba(86,116,47,0.10)] sm:px-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
          <Check size={38} strokeWidth={2} />
        </div>

        <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
          Application Submitted
        </p>

        <h1 className="mt-4 font-serif text-3xl font-semibold text-[var(--primary-brown)] sm:text-4xl">
          Thank You for Applying
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#5c5048]">
          Your application for the Junior Accountant role has been received.
          Our recruitment team will review your submission and contact you if
          your experience matches the position.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/careers/open-positions"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--dark-green)]"
          >
            View Other Positions
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--primary-green)] px-6 py-3 text-sm font-semibold text-[var(--primary-green)] transition hover:bg-[var(--primary-green)] hover:text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}