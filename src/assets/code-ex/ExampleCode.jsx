import React from "react";

function ExampleCode() {
  const exampleCode = `
const skillsRef = useRef(null);

const animateCSS = (element, animation, prefix = "animate__") => {
  return new Promise((resolve, reject) => {
    const animationName = \`\${prefix}\${animation}\`;
    element.classList.add(\`\${prefix}animated\`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(\`\${prefix}animated\`, animationName);
      resolve("Animation ended");
    }

    element.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });
};

const handleClick = () => {
  if (skillsRef.current) {
    animateCSS(skillsRef.current, "slideOutLeft");
  }
};`;

  return (
    <>
      <div className="p-10">
        <div>
          <h1>Code Example:</h1>
          <div className="flex justify-center">
            <pre className="bg-gray-700 h-100 overflow-clip overflow-y-scroll w-150 m-5">
                <div className="overflow-clip p-5">
                    <code>
                        {exampleCode}
                    </code>
                </div>
            </pre>
          </div>
          <p>
            This is an example Code: <code>SkillList()</code>
          </p>
        </div>
      </div>
    </>
  );
}

export default ExampleCode;
