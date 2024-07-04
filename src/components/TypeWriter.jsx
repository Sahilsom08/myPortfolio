import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer"
        ],
        autoStart: true,
        loop: true,
        // deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;