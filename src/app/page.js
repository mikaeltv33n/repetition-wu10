import { metadata } from "./layout";

export default async function Home() {
  const aboutsResponse = await fetch("http://localhost:4000/api/v1/abouts");
  const abouts = await aboutsResponse.json();

  const volunteersResponse = await fetch("http://localhost:4000/api/v1/volunteers");
  const volunteers = await volunteersResponse.json();

  const assetsResponse = await fetch("http://localhost:4000/api/v1/assets");
  const assets = await assetsResponse.json();

  metadata.title = "Foreningen for Dyrevelfærd";

  const asset = assets.reduce((map, asset) => {
    map[asset.id] = asset.url;
    return map;
  }, {});

  const assetsAndVolunteers = {
    1: 15,
    2: 14,
    3: 13
  };

  const backgroundImageId = 12

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/background-kittens.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          width: "100vw",
        }}
      >
        <h1 className="text-white text-6xl font-bold text-start pt-20 pl-36">
          Foreningen for Dyrevelfærd
        </h1>
        <p className="text-white text-start text-2xl font-bold pl-36">
          Vi specialisere os i Dyrevelfærd
        </p>
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
        backgroundImage: "url(${backgroundImageId})",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "30vh",
        width: "100vh"
      }}>
          


      </section>
    </>
  );
}
