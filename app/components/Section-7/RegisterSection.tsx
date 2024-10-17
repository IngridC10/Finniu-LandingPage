"use client";

const RegisterSection = () => {
  return (
    <section
      id="register"
      className="w-full h-screen flex justify-center items-center relative"
      style={{
        background: "#051926",
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <iframe
          src="https://finantips.substack.com/embed"
          style={{
            border: "none",
            background: "transparent", // Fondo transparente
            width: "100%", // Tamaño al 50%
            height: "100%",
          }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>

      {/* Estilo para ocultar la marca de Substack */}
      <style jsx>{`
        iframe {
          position: relative;
          z-index: 1;
        }
        iframe::before {
          content: "";
          display: none; /* Esto intenta ocultar la marca de Substack */
        }
      `}</style>
    </section>
  );
};

export default RegisterSection;