import Link from "next/dist/client/link";

const textStyle = "md:text-lg font-normal text-black xs:text-xs";
const textListStyle = "md:text-lg font-normal text-black xs:text-xs";
const listStyle = "md:text-lg font-normal text-black list-disc list-outside ml-4 xs:text-xs";
const linkStyle = "md:text-lg font-bold text-darkBlueColor xs:text-xs";
const containerStyle = "flex flex-col px-4 py-3";
const rateLink = "https://finniu.tawk.help/article/%E2%AD%90%C2%BFc%C3%B3mo-consiguen-una-tasa-tan-competitiva";
const capitalLink = "https://finniu.tawk.help/article/%C2%BFcomo-aseguramos-el-capital-de-nuestros-inversionistas";
const teamLink = "/about";
const riskLink = "https://finniu.tawk.help/article/%C2%BFcomo-aseguramos-el-capital-de-nuestros-inversionistas";
const holdingLink = "https://finniu.tawk.help/article/%C2%BFa-d%C3%B3nde-va-el-dinero-de-tu-inversi%C3%B3n";
const calendarLink = "https://calendly.com/finniumeet/30min";
const mapsLink = "https://maps.app.goo.gl/E38iBhrsnSaLvEaD8";


export const questionIdRate = (
    <div className={containerStyle}>
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
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu aseguramos tu capital a través del contrato de administración de capital y con cheque diferido.
        </p>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                El contrato de administración de capital, el cual es un documento legal que asegura el monto de tu inversión. En caso de incumplimiento, puedes hacer valer tus derechos a través de vías legales, este se genera automáticamente a través de la app.
            </li>
        </ul>

        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                El contrato con cheque diferido se otorga a inversiones de montos desde S/.50,000 soles, su función es la misma que el de administración de capital, pero adicional a ello se otorga un cheque por el monto del capital invertido añadiendo una capa adicional de seguridad sobre tu capital.
            </li>
        </ul>

        <div className="h-4"></div>

        <p className={textStyle}>
            Se puede revisar el artículo completo <Link href={capitalLink} className={linkStyle} target="_blank" rel="noopener noreferrer" >aquí.</Link>
        </p>
    </div>
);

export const questionIdTeam = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Puedes ver quién compone nuestro equipo desde la sección de <Link href={teamLink} className={linkStyle}>Nosotros</Link>
        </p>
    </div>
);
export const questionIdClient = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Contamos con más de 350 inversionistas que han depositado su confianza en Finniu a lo largo del tiempo. Con más de 700 inversiones realizadas en nuestros primeros dos años manejando más de S/10 millones, seguimos creciendo y ofreciendo oportunidades seguras y rentables para nuestros inversionistas.
        </p>
    </div>
);
export const questionIdRisk = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Toda inversión conlleva riesgos. Sin embargo, contamos con contratos de mutuo dinerario que respaldan cada inversión y aseguran la devolución del capital al final del plazo. En estos 3 años, hemos cumplido con el 100% de rentabilidad, logrando un historial sólido de cumplimiento. Además, nuestra estrategia de diversificación nos permite mantener un buen equilibrio entre rentabilidad y seguridad, minimizando riesgos y ofreciendo estabilidad a nuestros inversionistas.        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={riskLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>
    </div>
);
export const questionIdHolding = (
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu, diversificamos tu inversión en sectores como alimentos, agroindustria, energía y servicios industriales, maximizando rentabilidad y reduciendo riesgos. Te presentamos las empresas de nuestro holding</p>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                Ento Green SAC: Producción de fertilizantes orgánicos y asesoría agroindustrial.
            </li>
            <p className={textListStyle}>
                RUC: 20606715073
            </p>
        </ul>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                Distribuidora Industrial Carter SAC : Suministros e instalación de maquinaria industrial.
            </li>
            <p className={textListStyle}>
                RUC: 20609766108
            </p>
        </ul>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                Proteína Sostenible SAC: Suplementos alimenticios con certificación de la FDA, bajo las marcas DEMOLITOR y PIRUW.
            </li>
            <p className={textListStyle}>
                RUC: 20605009531
            </p>
        </ul>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                New Energy Corporation SAC: Mantenimiento y construcción dentro de los sectores industrial y energético.
            </li>
            <p className={textListStyle}>
                RUC: 20604850810
            </p>
        </ul>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={holdingLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>

    </div>
);
export const questionIdInformation = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Toda inversión conlleva riesgos. Sin embargo, contamos con contratos de mutuo dinerario que respaldan cada inversión y aseguran la devolución del capital al final del plazo. En estos 3 años, hemos cumplido con el 100% de rentabilidad, logrando un historial sólido de cumplimiento. Además, nuestra estrategia de diversificación nos permite mantener un buen equilibrio entre rentabilidad y seguridad, minimizando riesgos y ofreciendo estabilidad a nuestros inversionistas.
        </p>
    </div>
);
export const questionIdBack = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Finniu ha iniciado recientemente el proceso de inscripción para operar bajo la regulación de la SBS como casa de préstamos y cambio de divisas, y se espera que la resolución se emita en diciembre de 2024. Si bien actualmente, Finniu no está supervisada por la SBS, pero cumple con el marco legal peruano y está autorizada para administrar fondos de inversión privados, donde los inversionistas eligen de manera independiente cómo invertir su dinero.
        </p>
    </div>
);
export const questionIdLocation = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Sí, contamos con oficinas ubicadas en Av. San Luis 2076, San Borja, Lima ¡Nos encantaría recibirte si deseas conocer más sobre Finniu!
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Agenda tu visita en este link: <Link href={calendarLink} className={linkStyle} target="_blank" rel="noopener noreferrer">https://calendly.com/finniumeet/30min</Link>
        </p>
    </div>
);
