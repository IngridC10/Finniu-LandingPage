import Link from "next/dist/client/link";

const textStyle = "text-[16px] font-normal text-black";
const linkStyle = "text-[16px] font-bold text-darkBlueColor underline";
const rateLink = "https://finniu.tawk.help/article/%E2%AD%90%C2%BFc%C3%B3mo-consiguen-una-tasa-tan-competitiva";
const capitalLink = "";
const caterianoLinkedin = "";
const mallquiLinkedin = "";
const deLaVegaLinkedin = "";
const clientLink = "";
const riskLink = "";
const holdingLink = "";
const calendarLink = "";
const mapsLink = "";


export const questionIdRate = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            En Finniu ofrecemos tasas competitivas gracias a nuestra diversificación y a la administración directa de capital en sectores estratégicos del holding, evitando intermediarios bancarios.
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Se puede revisar el artículo completo <Link href={rateLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>
    </div>
);
export const questionCapital = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            En Finniu aseguramos tu capital a través del contrato de administración de capital y con cheque diferido.
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            El contrato de administración de capital, el cual es un documento legal que asegura el monto de tu inversión. En caso de incumplimiento, puedes hacer valer tus derechos a través de vías legales, este se genera automáticamente a través de la app.
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            El contrato con cheque diferido se otorga a inversiones de montos desde S/.50,000 soles, su función es la misma que el de administración de capital, pero adicional a ello se otorga un cheque por el monto del capital invertido añadiendo una capa adicional de seguridad sobre tu capital.
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Se puede revisar el artículo completo <Link href={capitalLink} className={linkStyle}>aquí.</Link>
        </p>
    </div>
);

export const questionIdTeam = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            Renzo Cateriano: <Link href={caterianoLinkedin} className={linkStyle}>Ver Perfil Linkedin</Link>
        </p>
        <div className="h-2"></div>
        <p className={textStyle}>
            Diego Mallqui: <Link href={mallquiLinkedin} className={linkStyle}>Ver Perfil Linkedin</Link>
        </p>
        <div className="h-2"></div>
        <p className={textStyle}>
            Diego De La Vega: <Link href={deLaVegaLinkedin} className={linkStyle}>Ver Perfil Linkedin</Link>
        </p>
    </div>
);
export const questionIdClient = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            Toda inversión conlleva riesgos. Sin embargo, contamos con contratos de mutuo dinerario que respaldan cada inversión y aseguran la devolución del capital al final del plazo. En estos 3 años, hemos cumplido con el 100% de rentabilidad, logrando un historial sólido de cumplimiento. Además, nuestra estrategia de diversificación nos permite mantener un buen equilibrio entre rentabilidad y seguridad, minimizando riesgos y ofreciendo estabilidad a nuestros inversionistas
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={clientLink} className={linkStyle}>aquí.</Link>
        </p>

    </div>
);
export const questionIdRisk = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            Toda inversión conlleva riesgos. Sin embargo, contamos con contratos de mutuo dinerario que respaldan cada inversión y aseguran la devolución del capital al final del plazo. En estos 3 años, hemos cumplido con el 100% de rentabilidad, logrando un historial sólido de cumplimiento. Además, nuestra estrategia de diversificación nos permite mantener un buen equilibrio entre rentabilidad y seguridad, minimizando riesgos y ofreciendo estabilidad a nuestros inversionistas.        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={riskLink} className={linkStyle}>aquí.</Link>
        </p>

    </div>
);
export const questionIdHolding = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            En Finniu, diversificamos tu inversión en sectores como alimentos, agroindustria, energía y servicios industriales, maximizando rentabilidad y reduciendo riesgos. Te presentamos las empresas de nuestro holding</p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Distribuidora Industrial Carter SAC : Suministros e instalación de maquinaria industrial. RUC: 20609766108
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Ento Green SAC: Producción de fertilizantes orgánicos y asesoría agroindustrial. RUC: 20606715073
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Proteína Sostenible SAC: Suplementos alimenticios con certificación de la FDA, bajo las marcas DEMOLITOR y PIRUW. RUC: 20605009531
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            New Energy Corporation SAC: Mantenimiento y construcción dentro de los sectores industrial y energético. RUC: 20604850810
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={holdingLink} className={linkStyle}>aquí.</Link>
        </p>

    </div>
);
export const questionIdInformation = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            Toda inversión conlleva riesgos. Sin embargo, contamos con contratos de mutuo dinerario que respaldan cada inversión y aseguran la devolución del capital al final del plazo. En estos 3 años, hemos cumplido con el 100% de rentabilidad, logrando un historial sólido de cumplimiento. Además, nuestra estrategia de diversificación nos permite mantener un buen equilibrio entre rentabilidad y seguridad, minimizando riesgos y ofreciendo estabilidad a nuestros inversionistas.
        </p>


    </div>
);
export const questionIdBack = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            Finniu ha iniciado recientemente el proceso de inscripción para operar bajo la regulación de la SBS como casa de préstamos y cambio de divisas, y se espera que la resolución se emita en diciembre de 2024. Si bien actualmente, Finniu no está supervisada por la SBS, pero cumple con el marco legal peruano y está autorizada para administrar fondos de inversión privados, donde los inversionistas eligen de manera independiente cómo invertir su dinero.
        </p>
    </div>
);
export const questionIdLocation = (
    <div className="flex flex-col ">
        <p className={textStyle}>
            Sí, contamos con oficinas ubicadas en <Link href={mapsLink} className={linkStyle}>Av. San Luis 2076, San Borja, Lima</Link>  ¡Nos encantaría recibirte si deseas conocer más sobre Finniu!
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Agenda tu visita en este link: <Link href={calendarLink} className={linkStyle}>https://calendly.com/finniumeet/30min</Link>
        </p>

    </div>
);
