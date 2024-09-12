export default async function Animals() {
    const animalsResponse = await fetch("http://localhost:4000/api/v1/animals")
    const animals = await animalsResponse.json()

    const assetsResponse = await fetch("http://localhost:4000/api/v1/assets")
    const assets = await assetsResponse.json()

    const assetMap = assets.reduce((map, asset) => {
        map[asset.id] = asset.url;
        return map;
    }, {});

    return (
        <>
            <section className="px-36 py-6 grid gap-6 grid-cols-2">
                {animals.map((animal) => {
                    const assetUrl = assetMap[animal.assetId];

                    return (
                        <div key={animal.id} className="bg-white p-6 rounded shadow-md flex">
                            {assetUrl && (
                                <img src={assetUrl}
                                    className="w-1/2 h-full"
                                />
                            )}
                            <div className="pl-6">
                                <h3 className="text-xl text-black  mb-4">{animal.name}</h3>
                                <p className="text-sm mb-2">{animal.description}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
