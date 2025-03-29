function Experience() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Experience</h2>
      <div className="flex flex-col gap-2">
        <h3 className="grid grid-cols-[35%_30%_35%] font-semibold text-gray-500">
          Senior Developer / Technical Lead
          <a
            href="https://wellfound.com"
            className="font-bold text-blue-500 underline place-self-center"
            target="_blank"
          >
            @ Wellfound / AngelList
          </a>
          <span className="font-light text-gray-500 place-self-end">
            November 2020 — Present
          </span>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Architected and implemented a high-performance candidate profile
            service with sophisticated ElasticSearch capabilities, enabling
            precise talent matching through seamless integration with multiple
            LLM systems and advanced caching strategies.
          </li>
          <li>
            Led a cross-functional team of 4 engineers rebuilding the core
            recruiting platform, focusing on scalability from application
            submission through the entire interview lifecycle.
          </li>
          <li>
            Facilitated technical knowledge sharing through workshops and
            instructional content focused on application performance, database
            optimization techniques, and architectural patterns for scalable
            systems.
          </li>
        </ul>

        <h3 className="grid grid-cols-[35%_30%_35%] font-semibold text-gray-500">
          Senior Backend Developer
          <a
            href="https://motiontools.com"
            className="font-bold text-blue-500 underline place-self-center"
            target="_blank"
          >
            @ MotionTools / M-Tribes
          </a>
          <span className="font-light text-gray-500 place-self-end">
            June 2019 — November 2020
          </span>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Engineered a resilient vehicle sharing platform within a mobility
            SaaS ecosystem, emphasizing service reliability and system
            durability.
          </li>
          <li>
            Developed a robust billing infrastructure supporting multiple
            payment providers with comprehensive billing transaction
            capabilities.
          </li>
          <li>
            Implemented efficient real-time data exchange through webhook and
            websockets integrations, enabling responsive client experiences and
            system interoperability.
          </li>
          <li>
            Created a management system for rapid tenant provisioning, reducing
            operational complexity.
          </li>
          <li>
            Modernized infrastructure management by implementing
            infrastructure-as-code practices with Terraform.
          </li>
        </ul>

        <h3 className="grid grid-cols-[35%_30%_35%] font-semibold text-gray-500">
          Senior Backend Developer
          <a
            href="https://wundermobility.com"
            className="font-bold text-blue-500 underline place-self-center"
            target="_blank"
          >
            @ Wunder Mobility
          </a>
          <span className="font-light text-gray-500 place-self-end">
            November 2018 — June 2019
          </span>
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Designed and built a GraphQL API for the carpool product using
            Phoenix framework, focusing on API performance and customer
            experience.
          </li>
          <li>
            Optimized ElasticSearch query performance through refined index
            schemas and scoring algorithms, significantly enhancing the accuracy
            of driver-passenger matching.
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
