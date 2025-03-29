function Experience() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-slate-800">Experience</h2>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-500">
          Senior Developer / Technical Lead{" "}
          <a
            href="https://wellfound.com"
            className="font-bold text-blue-500 underline"
            target="_blank"
          >
            @ Wellfound / AngelList
          </a>
          <br />
          November 2020 — Present
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Designed and built candidate profile service allowing to search for
            most relevant candidates for your open job position integrated with
            internal and external AI systems. Flexible search using
            ElasticSearch, tight integration with sevelar LLMs, sophisticated
            ranking and caching. We have it all.
          </li>
          <li>
            Lead the team of 4 people building new version of our recruiting
            product. From accepting applications to tracking candidates through
            the interview process.
          </li>
          <li>
            Hosted team workshops and endless videos on app performance and DB
            optimization as well as best practices for building scalable
            applications.
          </li>
        </ul>

        <h3 className="font-semibold text-gray-500">
          Senior Backend Developer{" "}
          <a
            href="https://motiontools.com"
            className="font-bold text-blue-500 underline"
            target="_blank"
          >
            @ MotionTools / M-Tribes
          </a>
          <br />
          June 2019 — November 2020
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Designed and built vehicle sharing product within mobility SaaS
            platform.
          </li>
          <li>
            Designed and built automated billing system supporting multiple
            payment methods.
          </li>
          <li>
            Introduced async communication with a platform by webhooks and
            websockets.
          </li>
          <li>Built configuration management tool to launch new tenants.</li>
          <li>Migrated parts of infrastructure management to Terraform.</li>
        </ul>

        <h3 className="font-semibold text-gray-500">
          Senior Backend Developer{" "}
          <a
            href="https://wundermobility.com"
            className="font-bold text-blue-500 underline"
            target="_blank"
          >
            @ Wunder Mobility
          </a>
          <br />
          November 2018 — June 2019
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Designed and built API for carpool product using GraphQL and
            Phoenix.
          </li>
          <li>
            Improved index schemas, scoring functions and algorithm via
            ElasticSearch for better matching between drivers and passengers.
          </li>
        </ul>

        <h3 className="font-semibold text-gray-500">
          And many more... but they won't fit on one page.
        </h3>
      </div>
    </div>
  );
}

export default Experience;
