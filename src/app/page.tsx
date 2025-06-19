// pages/index.tsx
import Image from "next/image";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiTreeLine } from "react-icons/ri";
import { IoEarthOutline } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import { FaDna } from "react-icons/fa";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { BiMath } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { PiSpinnerBall } from "react-icons/pi";
import { TbTextGrammar } from "react-icons/tb";
import { SiKahoot } from "react-icons/si";
import { PiEyes } from "react-icons/pi";
import { ImSpinner4 } from "react-icons/im";


const juegos = [
  {
    nombre:"Ruleta",
    icon:<ImSpinner4 className="text-2xl mr-4"/>,
    url:"https://es.piliapp.com/random/wheel/"
  },
  {
    nombre:"Pelotas para exposición",
    icon: <PiSpinnerBall className="text-2xl mr-4"/>,
    url:"https://www.online-stopwatch.com/random-name-pickers/crane-machine-name-picker/"
  },
  {
    nombre:"Crucigrama",
    icon:<TbTextGrammar className="text-2xl mr-4"/>,
    url:"https://wordwall.net/es/resource/34334990/juego/crucigrama-facil-para-niños-de-12-años"
  },
  {
    nombre:"Kahoot! (Matemáticas - Multiplicación Básica)",
    icon:<SiKahoot className="text-2xl mr-4"/>,
    url:"https://create.kahoot.it/share/las-tablas-de-multiplicar-ii/bd0530b1-b0a8-4206-a7db-7199e5ec34be"
  },
  {
    nombre:"Kahoot! (Ciencias Naturales - Célula y ADN)",
    icon:<SiKahoot className="text-2xl mr-4"/>,
    url:" https://create.kahoot.it/share/celula-y-adn/68e4a5f7-5356-4bfb-8fbf-4537dcefb04c"
  },
]


const recursos = [
  {
    asignatura: "Ciencias Naturales ",
    sub:"(Medio Ambiente)",
    url: "https://youtu.be/C2bs_Lo6_mQ?si=qzy-oHQ1qbQ8DVPR",
    icon: <RiTreeLine className="text-2xl mr-4"/>
  },
  {
    asignatura: "Historia Universal",
    sub: "(Universal)",
    url: "https://youtu.be/Q3uHYQAFDjk?si=jaK8dcquYjqzlIvB",
     icon: <IoEarthOutline className="text-2xl mr-4"/>
  },
  {
    asignatura: "Química",
    sub:"",
    url: "https://youtu.be/q4kuoZFrUQw?si=czC2GWexwP9EAslB",
     icon: <ImLab className="text-2xl mr-4"/>
  },
  {
    asignatura: "Biología",
    sub:"",
    url: "https://youtu.be/t_kbksviWx8?si=oxeiZ3e3DKWL99Sl",
     icon: <FaDna className="text-2xl mr-4"/>
  },
  {
    asignatura: "Lenguaje - Ortografía",
    sub:"(Ortografía)",
    url: "https://youtu.be/b-A1ZXQUxZ8?feature=shared",
    icon: <RxLetterCaseCapitalize className="text-2xl mr-4"/>
  },
  {
    asignatura: "Matemáticas Básicas",
    sub:"(Básicas)",
    url: "https://youtu.be/Qr98YD4bvXE?si=JRFhbOfD9J162jjD",
     icon: <BiMath className="text-2xl mr-4"/>
  },
  {
    asignatura: "Inglés - Frutas y bebidas",
    sub:"(Frutas y bebidas)",
    url: "https://youtu.be/x9fY1Q-Ms_o?si=W5KezZqWbEc6zz_T",
    icon: <GiFruitBowl className="text-2xl mr-4"/>
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/fondo.jpg')] bg-cover bg-center bg-no-repeat text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4 flex items-center">
          <span><MdOutlineTipsAndUpdates className="text-3xl"/></span>Tips para tus clases dinámicas <span><MdOutlineTipsAndUpdates className="text-3xl"/></span>
        </h1>
        <hr className="mb-6 text-green-600"/>
        <h2 className="text-xl font-bold mb-2">Metacognición:</h2>
        <p className=" mb-4">
          La metacognición es el paso fundamental a la hora de cerrar nuestra clase, por lo que un comecocos con preguntas, podría ser una buena opción para profundizar en los conocimientos de los alumnos y más allá.
          
       
        </p>
        <div className="flex justify-center">
          <Image src="/metacognicion.jpg" alt="metacognicion" width={500} height={500}/>
        </div>
        <div className="my-4">

          <span className="font-extralight italic"> ¿Buscas una web para hacer más dinámicas tus clases?. Visita </span>
            <a
              href="https://wordwall.net/es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 underline"
              >
              Wordwall
            </a>
            .
          </div>
        <p className="mb-6">
          Encontrarás desde ruletas, completar frases, tarjetas flash y más plantillas para compartir tu contenido de manera más lúdica.
          Para agregar información relacionada con tu contenido siempre será necesario mostrar algo interesante pero breve, que permita que los alumnos lo comprendan de manera más fácil, rápida y sencilla.
        </p>

        <p className="mb-6 text-center text-lg font-bold flex items-center">
        Aquí te dejamos algunos videos breves relacionados con asignaturas:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {recursos.map((r) => (
            <a
              key={r.asignatura}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl  hover:shadow-lg transition border-blue-200 border shadow-md shadow-emerald-950 hover:bg-slate-100 cursor-pointer "
            >
              <h2 className="text-lg font-semibold text-blue-900 flex items-center">
                {r.icon} {r.asignatura} 
              </h2>
              <p className="text-sm text-gray-600  flex items-center mt-3">
                <span><MdOndemandVideo className="text-xl mr-2"/></span>Ver video educativo →
              </p>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-center text-xl font-bold">Juegos educativos</h2>
          <p className="mt-3">Usa Juegos o Dinámicas Kahoot, Quizizz, juegos de roles, bingo de conceptos, escape room educativo.</p>
          <p className="mt-2">¡Aquí te dejamos algunos links de plantillas!</p>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 ">
          {juegos.map((j) => (
            <a
              key={j.url}
              href={j.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl  hover:shadow-lg transition border-blue-200 border shadow-md shadow-emerald-950 hover:bg-slate-100 cursor-pointer "
            >
              <h2 className="text-lg font-semibold text-blue-900 flex items-center">
                {j.icon} {j.nombre} 
              </h2>
              <p className="text-sm text-gray-600  flex items-center mt-3">
                <span><PiEyes className="text-xl mr-2"/></span>Ver plantilla →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
