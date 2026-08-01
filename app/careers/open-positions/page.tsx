"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Cpu,
  Mail,
  MapPin,
  RefreshCw,
  Search,
  SearchCheck,
  Upload,
  Users,
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  href: string;
  icon: typeof Calculator;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Junior Accountant",
    department: "Accounting",
    location: "Toronto, ON",
    employmentType: "Full-time",
    description:
      "Support financial reporting, account reconciliations and daily accounting operations for our clients.",
    href: "/careers/open-positions/junior-accountant",
    icon: Calculator,
  },
  {
    id: 2,
    title: "Tax Associate",
    department: "Tax Solutions",
    location: "Toronto, ON",
    employmentType: "Full-time",
    description:
      "Assist with tax preparation, compliance, research and advisory services for individuals and businesses.",
    href: "/careers/open-positions/tax-associate",
    icon: ChartNoAxesCombined,
  },
  {
    id: 3,
    title: "Audit Senior",
    department: "Assurance",
    location: "Toronto, ON",
    employmentType: "Full-time",
    description:
      "Lead audit engagements, review financial information and support high-quality assurance service delivery.",
    href: "/careers/open-positions/audit-senior",
    icon: SearchCheck,
  },
  {
    id: 4,
    title: "Payroll Specialist",
    department: "Payroll Solutions",
    location: "Toronto, ON",
    employmentType: "Full-time",
    description:
      "Manage payroll processing, employee records, remittances and regulatory compliance requirements.",
    href: "/careers/open-positions/payroll-specialist",
    icon: Users,
  },
  {
    id: 5,
    title: "Business Analyst",
    department: "Business Advisory",
    location: "Toronto, ON",
    employmentType: "Full-time",
    description:
      "Analyze business data, prepare reports and provide practical insights that support better decisions.",
    href: "/careers/open-positions/business-analyst",
    icon: BriefcaseBusiness,
  },
  {
    id: 6,
    title: "AI Solutions Analyst",
    department: "AI Integration",
    location: "Toronto, ON",
    employmentType: "Full-time",
    description:
      "Identify and implement practical AI solutions that improve efficiency, reporting and client outcomes.",
    href: "/careers/open-positions/ai-solutions-analyst",
    icon: Cpu,
  },
];

const departments = [
  "All Departments",
  ...Array.from(new Set(jobs.map((job) => job.department))),
];

const locations = [
  "All Locations",
  ...Array.from(new Set(jobs.map((job) => job.location))),
];

const employmentTypes = [
  "All Employment Types",
  ...Array.from(new Set(jobs.map((job) => job.employmentType))),
];

export default function OpenPositionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [location, setLocation] = useState("All Locations");
  const [employmentType, setEmploymentType] = useState(
    "All Employment Types",
  );

  const filteredJobs = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        job.title.toLowerCase().includes(normalizedSearch) ||
        job.department.toLowerCase().includes(normalizedSearch) ||
        job.description.toLowerCase().includes(normalizedSearch);

      const matchesDepartment =
        department === "All Departments" ||
        job.department === department;

      const matchesLocation =
        location === "All Locations" || job.location === location;

      const matchesEmploymentType =
        employmentType === "All Employment Types" ||
        job.employmentType === employmentType;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesLocation &&
        matchesEmploymentType
      );
    });
  }, [department, employmentType, location, searchQuery]);

  const resetFilters = () => {
    setSearchQuery("");
    setDepartment("All Departments");
    setLocation("All Locations");
    setEmploymentType("All Employment Types");
  };

  return (
    <main className="overflow-hidden bg-white text-[#554b44]">
      <OpenPositionsHero />

      <section
        id="positions"
        className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <JobFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            department={department}
            setDepartment={setDepartment}
            location={location}
            setLocation={setLocation}
            employmentType={employmentType}
            setEmploymentType={setEmploymentType}
            resetFilters={resetFilters}
          />

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="font-medium text-[var(--primary-brown)]">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1
                ? "Open Position"
                : "Open Positions"}
            </p>

            {(searchQuery ||
              department !== "All Departments" ||
              location !== "All Locations" ||
              employmentType !== "All Employment Types") && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
              >
                <RefreshCw size={15} />
                Clear filters
              </button>
            )}
          </div>

          {filteredJobs.length > 0 ? (
            <div className="mt-6 space-y-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <NoResults resetFilters={resetFilters} />
          )}
        </div>
      </section>

      <ResumeCTA />
    </main>
  );
}

function OpenPositionsHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#80ab7e]/15 bg-[#f8f6ef] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#80ab7e]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 left-12 h-72 w-72 rounded-full bg-[var(--primary-golden)]/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 hidden opacity-10 lg:block">
        <LeafDecoration />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Home
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <Link
            href="/careers"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Careers
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <span className="text-[var(--primary-brown)]">
            Open Positions
          </span>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
            Careers
          </p>

          <div className="mt-4 h-[3px] w-12 rounded-full bg-[var(--primary-golden)]" />

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-6xl lg:text-5xl">
            Open Positions
          </h1>

          <h2 className="mt-4 font-serif text-xl leading-tight text-[var(--primary-green)] sm:text-2xl">
            Build Your Career. Make an Impact.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5c5048]">
            We&apos;re always looking for talented, motivated and passionate
            individuals to join our team. Explore our current opportunities
            and take the next step in your career with Hakimi &amp; Co.
          </p>

        
        </div>
      </div>
    </section>
  );
}

type JobFiltersProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  department: string;
  setDepartment: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  employmentType: string;
  setEmploymentType: (value: string) => void;
  resetFilters: () => void;
};

function JobFilters({
  searchQuery,
  setSearchQuery,
  department,
  setDepartment,
  location,
  setLocation,
  employmentType,
  setEmploymentType,
  resetFilters,
}: JobFiltersProps) {
  return (
    <div className="grid gap-4 border-b border-[#80ab7e]/25 pb-8 md:grid-cols-2 xl:grid-cols-[1.5fr_0.75fr_0.75fr_0.9fr_auto]">
      <div className="relative">
        <label htmlFor="job-search" className="sr-only">
          Search positions
        </label>

        <Search
          size={19}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7d746d]"
        />

        <input
          id="job-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by job title, keyword or department..."
          className="h-14 w-full rounded-lg border border-[#854d1b]/15 bg-white pl-12 pr-4 text-sm text-[#3d210f] outline-none transition placeholder:text-[#89817a] focus:border-[#80ab7e] focus:ring-2 focus:ring-[#80ab7e]/15"
        />
      </div>

      <FilterSelect
        label="Department"
        value={department}
        onChange={setDepartment}
        options={departments}
      />

      <FilterSelect
        label="Location"
        value={location}
        onChange={setLocation}
        options={locations}
      />

      <FilterSelect
        label="Employment type"
        value={employmentType}
        onChange={setEmploymentType}
        options={employmentTypes}
      />

      <button
        type="button"
        onClick={resetFilters}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold text-[var(--primary-green)] transition hover:bg-[#80ab7e]/10"
      >
        <RefreshCw size={17} />
        Reset
      </button>
    </div>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: FilterSelectProps) {
  return (
    <div className="relative">
      <label className="sr-only">{label}</label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full appearance-none rounded-lg border border-[#854d1b]/15 bg-white px-4 pr-10 text-sm text-[#3d210f] outline-none transition focus:border-[#80ab7e] focus:ring-2 focus:ring-[#80ab7e]/15"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={17}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#66574d]"
      />
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const Icon = job.icon;

  return (
    <article className="group rounded-2xl border border-[#80ab7e]/20 bg-white px-5 py-6 shadow-[0_8px_30px_rgba(133,77,27,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#80ab7e]/45 hover:shadow-[0_16px_40px_rgba(133,77,27,0.10)] sm:px-7">
      <div className="grid items-center gap-6 lg:grid-cols-[1.35fr_0.65fr_auto]">
        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#80ab7e]/12 text-[var(--primary-green)] transition duration-300 group-hover:scale-105 group-hover:bg-[#80ab7e]/20">
            <Icon size={29} strokeWidth={1.6} />
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-[var(--primary-brown)]">
              {job.title}
            </h2>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--primary-green)]">
              <span>{job.department}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--primary-green)]" />
              <span>{job.employmentType}</span>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#5c5048]">
              {job.description}
            </p>
          </div>
        </div>

        <div className="space-y-3 border-[#854d1b]/12 lg:border-l lg:pl-8">
          <div className="flex items-center gap-3 text-sm text-[#4d3a2e]">
            <MapPin
              size={18}
              className="shrink-0 text-[var(--primary-green)]"
            />
            {job.location}
          </div>

          <div className="flex items-center gap-3 text-sm text-[#4d3a2e]">
            <BriefcaseBusiness
              size={18}
              className="shrink-0 text-[var(--primary-green)]"
            />
            {job.employmentType}
          </div>
        </div>

        <Link
          href={job.href}
          className="inline-flex items-center justify-center gap-3 rounded-lg border border-[var(--primary-green)] px-6 py-3 text-sm font-semibold text-[var(--primary-green)] transition duration-300 hover:bg-[var(--primary-green)] hover:text-white"
        >
          View Details

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

function NoResults({ resetFilters }: { resetFilters: () => void }) {
  return (
    <div className="mt-8 rounded-2xl border border-[#80ab7e]/20 bg-[#f8f6ef] px-6 py-14 text-center">
      <Search
        size={38}
        className="mx-auto text-[var(--primary-green)]"
      />

      <h2 className="mt-5 font-serif text-2xl font-semibold text-[var(--primary-brown)]">
        No positions found
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#5c5048]">
        We could not find a position matching your current search and
        filters. Try changing your selections or reset all filters.
      </p>

      <button
        type="button"
        onClick={resetFilters}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--primary-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--dark-green)]"
      >
        <RefreshCw size={17} />
        Reset Filters
      </button>
    </div>
  );
}

function ResumeCTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#80ab7e]/20 bg-[#f8f6ef] px-7 py-10 sm:px-12">
        <div className="pointer-events-none absolute -right-12 -bottom-20 hidden opacity-15 lg:block">
          <LeafDecoration />
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
              <Mail size={36} strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-[var(--primary-brown)] sm:text-3xl">
                Don&apos;t see the right fit?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#5c5048]">
                We&apos;re always interested in hearing from talented people.
              </p>

              <p className="text-sm font-semibold text-[var(--primary-green)]">
                Submit your resume for future opportunities.
              </p>
            </div>
          </div>

          <Link
            href="/contact?subject=Resume Submission"
            className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)] hover:shadow-lg"
          >
            <Upload size={18} />
            Submit Your Resume

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LeafDecoration() {
  return (
    <svg
      width="260"
      height="340"
      viewBox="0 0 260 340"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M34 320C86 268 117 195 128 32"
        stroke="#56742f"
        strokeWidth="2"
      />

      <path
        d="M120 82C82 69 55 46 42 15C83 18 112 44 120 82Z"
        fill="#80ab7e"
      />

      <path
        d="M123 138C164 124 195 96 210 61C166 65 136 96 123 138Z"
        fill="#f5e088"
      />

      <path
        d="M97 198C56 185 27 156 13 119C56 123 87 153 97 198Z"
        fill="#80ab7e"
      />

      <path
        d="M76 260C118 248 150 219 168 184C124 188 92 217 76 260Z"
        fill="#f5e088"
      />
    </svg>
  );
}