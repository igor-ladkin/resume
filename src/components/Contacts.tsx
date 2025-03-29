function Contacts() {
  return (
    <ul className="text-sm font-light flex flex-col gap-1 md:gap-0 print:gap-0">
      <li>
        email:{" "}
        <a
          href="mailto:ladkin.is@gmail.com"
          target="_blank"
          className="text-blue-500 underline"
        >
          ladkin.is@gmail.com
        </a>
      </li>
      <li>
        github:{" "}
        <a
          href="https://github.com/igor-ladkin"
          target="_blank"
          className="text-blue-500 underline"
        >
          GitHub
        </a>
      </li>
      <li>
        linkedin:{" "}
        <a
          href="https://linkedin.com/in/igor-ladkin"
          target="_blank"
          className="text-blue-500 underline"
        >
          LinkedIn
        </a>
      </li>
      <li>
        phone:{" "}
        <a
          href="tel:+4915120538338"
          target="_blank"
          className="text-blue-500 underline"
        >
          +49 1512 0538338
        </a>
      </li>
      <li>
        location:{" "}
        <a
          href="https://google.com/maps/@53.5632388,9.9176227,12z"
          target="_blank"
          className="text-blue-500 underline"
        >
          Hamburg, Germany
        </a>
      </li>
    </ul>
  );
}

export default Contacts;
