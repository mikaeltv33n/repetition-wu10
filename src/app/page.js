import { metadata } from "./layout";
import Newsletter from "@/components/newsletter";

export default async function Home() {
  const aboutsResponse = await fetch("http://localhost:4000/api/v1/abouts");
  const abouts = await aboutsResponse.json();

  const volunteersResponse = await fetch("http://localhost:4000/api/v1/volunteers");
  const volunteers = await volunteersResponse.json();

  const assetsResponse = await fetch("http://localhost:4000/api/v1/assets");
  const assets = await assetsResponse.json();

  const adoptssResponse = await fetch("http://localhost:4000/api/v1/adoptsections")
  const adopts = await adoptssResponse.json()

  metadata.title = "Foreningen for Dyrevelfærd";

  const asset = assets.reduce((map, asset) => {
    map[asset.id] = asset.url;
    return map;
  }, {})

  const assetsAndVolunteers = {
    1: 15,
    2: 14,
    3: 13
  };

  const firstBackgroundimage = asset[11]
  const secondBackgroundimage = asset[12]
  const thridBackgroundimage = asset[1]

  const adoptId1 = adopts[0]
  const adoptId2 = adopts[1]
  const adoptId3 = adopts[2]

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${firstBackgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          width: "100%",
        }}
      >
        {adoptId1 && (
          <div>
            <h3 className=" text-white text-5xl text-start pt-14 pl-40">{adoptId1.title}</h3>
            <p className="text-white text-start text-lg pl-40">{adoptId1.content}</p>
          </div>
        )}
      </div>

      <article className="px-36 py-6 grid gap-6 grid-cols-3">
        {abouts.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl text-blue-600 mb-4">{item.title}</h3>
            <p className="text-lg">{item.content}</p>
          </div>
        ))}
      </article>

      <section className="px-36 py-6 bg-gray-100">
        <h2 className="text-4xl text-blue-600 font-bold mb-6">Bliv frivillig</h2>
        <div className="grid gap-6 grid-cols-3">
          {volunteers.map((volunteer) => {
            const assetUrl = asset[assetsAndVolunteers[volunteer.id]];
            return (
              <div key={volunteer.id} className="bg-white pb-20 shadow-md">
                <div className="bg-gray-200 py-6 px-4 mb-4 rounded-t">
                  <h3 className="text-xl uppercase text-gray-600">{volunteer.title}</h3>
                </div>
                {assetUrl && (
                  <img
                    src={assetUrl}
                    className="w-full h-auto rounded-t mb-4"
                  />
                )}
                <p className="text-lg px-5">{volunteer.content}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section style={{
        backgroundImage: `url(${secondBackgroundimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50vh",
        width: "100%"
      }}>
        {adoptId2 && (
          <div>
            <h3 className="uppercase text-white text-5xl text-start pt-14 pl-36">{adoptId2.title}</h3>
            <p className="text-white text-start text-lg pl-36">{adoptId2.content}</p>
          </div>
        )}
      </section>
      <Newsletter />
      <section style={{
        backgroundImage: `url(${thridBackgroundimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50vh",
        width: "100%"
      }}>
        {adoptId3 && (
          <div>
            <h3 className="uppercase text-white text-5xl text-start pt-14 pl-36">{adoptId3.title}</h3>
            <p className="text-white text-start text-lg pl-36">{adoptId3.content}</p>
          </div>
        )}
      </section>
    </>
  );
}
