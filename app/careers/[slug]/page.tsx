import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import JobDetails from "@/components/common/careers/JobDetails";
import JobApplicationForm from "@/components/common/careers/JobApplicationForm";
import { ChevronRight } from "lucide-react";

import { client } from "@/lib/sanity/client";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const jobs = await client.fetch(`
    *[_type == "job"]{
      "slug": slug.current
    }
  `);

  return jobs.map((job: { slug: string }) => ({
    slug: job.slug,
  }));
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const job = await client.fetch(
    `
    *[_type == "job" && slug.current == $slug][0]{
      title,
      slug,
      location,
      type,
      experience,
      description,
      about,
      responsibilities,
      requirements,
      benefits
    }
    `,
    {
      slug: slug,
    }
  );

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-40 pb-24 relative overflow-hidden bg-gray-50/50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#F26341]/5 to-transparent blur-[120px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#272D6D]/5 to-transparent blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
            
            {/* Main Content Area */}
            <div className="w-full lg:flex-1 min-w-0">
              <JobDetails job={job} />
            </div>

            {/* Sidebar Area */}
            <aside className="w-full lg:w-[420px] sticky top-36 space-y-8 pb-12 shrink-0">
              <JobApplicationForm jobTitle={job.title} />
            </aside>
          </div>
        </div>

        {/* Mobile Apply Button */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
          <a
            href="#apply-form"
            className="w-full py-4 bg-[#F26341] text-white rounded-2xl font-extrabold shadow-2xl shadow-[#F26341]/40 flex items-center justify-center text-lg active:scale-95 transition-transform"
          >
            Quick Apply
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}