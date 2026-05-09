import Footer from "../common/Footer";
import Header from "../common/careers/Header";
import Middle from "../common/careers/Middle";
import Navbar from "../common/Navbar";

import { client } from "@/lib/sanity/client";

async function Careers() {
  const jobs = await client.fetch(`
    *[_type == "job"]{
      _id,
      title,
      slug,
      location,
      type,
      experience,
      description
    }
  `);

  return (
    <>
      <Navbar />
      <Header />
      <Middle jobs={jobs} />
      <Footer />
    </>
  );
}

export default Careers;