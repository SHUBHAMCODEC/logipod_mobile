import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "4aqhjwqw",
    dataset: "lp_career_db",
    apiVersion: "2026-01-01",
    useCdn: true,
});