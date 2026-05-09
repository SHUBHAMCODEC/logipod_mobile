import { notFound } from "next/navigation";
import jobsData from "@/data/jobs.json";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import JobDetails from "@/components/common/careers/JobDetails";
import JobApplicationForm from "@/components/common/careers/JobApplicationForm";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return jobsData.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = jobsData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Content - Job Details */}
            <div className="flex-1">
              <JobDetails job={job} />
            </div>

            {/* Right Side - Application Form & Sticky CTA */}
            <div className="lg:w-[450px]">
              <div className="sticky top-32 space-y-8">
                {/* Sticky Apply Banner (Desktop) */}
                <div className="hidden lg:block bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-[#272D6D] mb-2">Interested in this role?</h3>
                  <p className="text-gray-500 mb-6 text-sm">Join a team that values innovation and impact in the logistics sector.</p>
                  <a 
                    href="#apply-form"
                    className="w-full py-3 bg-[#272D6D] text-white rounded-xl font-bold hover:bg-[#1A1F4D] transition-colors flex items-center justify-center"
                  >
                    Apply for this position
                  </a>
                </div>

                {/* Application Form */}
                <JobApplicationForm jobTitle={job.title} />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Apply Button (Mobile Only) */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
          <a 
            href="#apply-form"
            className="w-full py-4 bg-[#F26341] text-white rounded-2xl font-bold shadow-2xl shadow-[#F26341]/40 flex items-center justify-center text-lg"
          >
            Apply Now
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
