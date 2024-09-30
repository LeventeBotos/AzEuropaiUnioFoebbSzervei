import { IoLocationSharp, IoPerson } from "react-icons/io5";

export default function Home() {
  const institutions = [
    {
      title: "Európai Bizottság",
      description: `Az Európai Bizottság az EU végrehajtó szerve. Felelős azért, hogy az elfogadott uniós jogszabályokat minden tagállam végrehajtsa.`,
      location: "Brüsszel, Belgium",
      numberOfReps: "27 (1/ tagállam)",
      details: `A Bizottság döntéseit a biztosok testülete hozza meg. Fő feladata a költségvetés végrehajtása, valamint állami támogatások és versenyjogi kérdések kezelése.`,
      image:
        "https://pcdn.hu/articles/images-xl/e/b/_/eb-europai-bizottsag-europai-unio-eu-621467.jpg",
    },
    {
      title: "Európai Parlament",
      description: `Az Európai Parlament az EU törvényhozó szerve, amely közvetlenül választott képviselőkből áll.`,
      location: "Strasbourg, Franciaország (Brüsszel és Luxemburg)",
      numberOfReps: "705 képviselő (2020-tól)",
      details: `A Parlament három fő feladata: jogalkotás, az uniós költségvetés elfogadása és az EU intézményeinek demokratikus ellenőrzése. Minden tagállam a lakosság arányában delegál képviselőket.`,
      image:
        "https://static.euronews.com/articles/stories/07/12/45/00/1200x675_cmsv2_89e6009a-9166-54c2-a72f-d1de0cf9aed6-7124500.jpg",
    },
    {
      title: "Európai Tanács",
      description: `Az Európai Tanács az EU politikai irányvonalait határozza meg. Az állam- vagy kormányfők tanácskozásának legfontosabb fóruma.`,
      location: "Brüsszel, Belgium",
      numberOfReps: "27 állam- vagy kormányfő",
      details: `Az Európai Tanács a hosszú távú stratégiákat határozza meg, például az EU bővítéséről és külpolitikájáról. A döntéseket egyhangúan kell meghozni.`,
      image:
        "https://static.euronews.com/articles/stories/03/90/79/42/1200x675_cmsv2_106278a0-e2b6-5430-b28c-aa9f59946367-3907942.jpg",
    },
    {
      title: "Európai Unió Tanácsa",
      description: `Az Európai Unió Tanácsa (Miniszterek Tanácsa) az uniós jogszabályok elfogadásáért és összehangolásáért felelős.`,
      location: "Brüsszel, Belgium",
      numberOfReps: "27 miniszter (szakterületek szerint)",
      details: `A Tanács tagjai a tagállamok kormányainak miniszterei. A szakterületek szerint változik a tanács összetétele, például külügyek, pénzügyek stb. A döntéshozatal általában minősített többséggel történik.`,
      image:
        "https://admin.oee.hu/upload/pics/news/cover/eu-tanacs1-20211208183136.jpg",
    },
    {
      title: "Európai Központi Bank",
      description: `Az Európai Központi Bank felelős az euró kezeléséért és a monetáris politika meghatározásáért az eurózónában.`,
      location: "Frankfurt, Németország",
      numberOfReps: "6 igazgatósági tag",
      details: `Az EKB fő feladata az árstabilitás biztosítása az eurózónában. Emellett figyelemmel kíséri a bankok működését és pénzügyi stabilitásukat.`,
      image: "https://pcdn.hu/articles/images-xl/e/k/b/ekb-ekb-419258.jpg",
    },
    {
      title: "Európai Bíróság",
      description: `Az Európai Bíróság biztosítja, hogy az uniós jogot egységesen alkalmazzák az összes tagállamban.`,
      location: "Luxemburg",
      numberOfReps: "27 bíró (1/ tagállam)",
      details: `Az Európai Bíróság ítéletei kötelező érvényűek minden tagállamra nézve, és az uniós jog egységes értelmezését szolgálják. A bírák 6 éves időszakra nevezhetők ki.`,
      image:
        "https://ma7media.storage.googleapis.com/sites/default/files/styles/freeform_large_9_2x/s3/2024-05/eueopai-unio-birosaga.jpg?itok=5jDezC2w",
    },
    {
      title: "Európai Számvevőszék",
      description: `Az Európai Számvevőszék feladata az uniós költségvetés ellenőrzése és a pénzügyi szabályok betartásának felügyelete.`,
      location: "Luxemburg",
      numberOfReps: "27 tag (1/ tagállam)",
      details: `A Számvevőszék felügyeli az uniós kiadások hatékonyságát és ellenőrzi, hogy az uniós pénzeszközöket megfelelően használják fel. Jelentéseket készít a pénzügyi irányításról.`,
      image:
        "https://cdn.vg.hu/2021/05/lP6sLQLIYqrav4J0X8tU1sSEbJ4FL5Lwyl5e-7fGt8M/fill/1400/933/no/1/aHR0cDovL2Ntc2Nkbi5hcHAuY29udGVudC5wcml2YXRlL2NvbnRlbnQvNDZhODNkNjAwZmVjNDUzOWE5NDFjNDY4MWY2YzlkNjE.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="bg-[#003399] relative w-full h-96  text-white py-20 text-center">
        <div className=" backdrop-blur-md px-5 absolute h-full flex drop-shadow-2xl flex-col justify-evenly w-full top-0 left-0 right-0 bottom-0 py-20 text-center z-10  ">
          <h1 className=" text-2xl md:text-5xl [text-shadow:_0_3px_0_rgb(0_0_0_/_75%)] font-bold  z-10">
            Az Európai Unió Főbb Szervei
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto z-10">
            az EU legfontosabb intézményei központi szerepet játszanak a
            döntéshozatalban, a pénzügyekben és az uniós jog végrehajtásában.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/810px-Flag_of_Europe.svg.png"
          className="w-full h-full  object-contain absolute top-0 left-0 right-0 bottom-0 z-0"
        />
      </section>

      {/* Institution sections */}
      <section className="container mx-auto py-12 px-4">
        {institutions.map((inst, index) => (
          <div key={index} className="mb-16">
            <div
              className={`flex ${
                index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col items-center lg:items-start lg:space-x-8`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <img
                  src={inst.image || ""}
                  alt={"Kép a " + inst.title + "-ról/ről"}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-96"
                />
              </div>
              {/* Content */}
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">
                  {inst.title}
                </h2>
                <p className="text-gray-700 text-lg ">{inst.description}</p>
                <div className="flex flex-row gap-1 text-gray-700 items-center ">
                  <IoLocationSharp />
                  <p className="text-gray-700 text-lg ">{inst.location}</p>
                </div>
                <div className="flex flex-row text-gray-700 items-center gap-1">
                  <IoPerson />
                  <p className="text-gray-700 text-lg ">{inst.numberOfReps}</p>
                </div>
                <details className="text-gray-600 text-base">
                  <summary className="cursor-pointer underline">
                    További részletek
                  </summary>
                  <p className="mt-2">{inst.details}</p>
                </details>
              </div>
            </div>
          </div>
        ))}
      </section>
      <footer className="bg-black flex flex-col text-center items-center justify-evenly h-60">
        <p>
          Made with ❤️ by{" "}
          <a target="_blank" href="https://crossguard.online">
            Botos Levente
          </a>
        </p>
      </footer>
    </div>
  );
}
