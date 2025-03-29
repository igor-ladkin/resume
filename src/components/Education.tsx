function Education() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold ">Education</h2>
      <div className="flex flex-col gap-2">
        <h3 className="flex flex-col md:flex-row print:flex-row justify-between font-semibold text-gray-500">
          <span>
            Applied Mathematics, Northern Arctic Federal University, Arkhangelsk
          </span>
          <span className="font-light text-gray-500">
            September 2006 — June 2011
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Education;
