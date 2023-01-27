import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
    await client.owners.createMany({
        skipDuplicates: true,
        data: [
            {
                name: "Isabella Castelhano Mamouros",
                phoneNumber: "(43) 92424-8531",
                CPF: "52798549051",
            },
            {
                name: "Alissa Mourato Cambezes",
                phoneNumber: "(28) 92754-5501",
                CPF: "17986737034",
            },
            {
                name: "Kévin Mendes Sarmento",
                phoneNumber: "(93) 92271-1315",
                CPF: "42454416077",
            },
            {
                name: "Luara Peseiro Roriz",
                phoneNumber: "(66) 92987-7874",
                CPF: "93281527043",
            },
            {
                name: "Angelina Peralta Cachão",
                phoneNumber: "(95) 93891-0048",
                CPF: "91616445017",
            },
        ],
    });

    const owners = await client.owners.findMany();

    await client.pets.createMany({
        data: [
            {
                name: "Topaz",
                age: 2,
                type: "CACHORRO",
                breed: "Pasto belga",
                ownerId: owners[0].id,
            },
            {
                name: "Oliveira",
                age: 2,
                type: "CACHORRO",
                breed: "vira-lata",
                ownerId: owners[1].id,
            },
            {
                name: "Snoopy",
                age: 4,
                type: "CACHORRO",
                breed: "Shih Tzu",
                ownerId: owners[2].id,
            },

            {
                name: "Apache",
                age: 4,
                type: "CACHORRO",
                breed: " Yorkshire",
                ownerId: owners[4].id,
            },
            {
                name: "Mary Jane",
                age: 2,
                type: "CACHORRO",
                breed: "Poodle",
                ownerId: owners[1].id,
            },
            {
                name: "Crawler",
                age: 3,
                type: "CACHORRO",
                breed: " Lhasa apso",
                ownerId: owners[0].id,
            },
            {
                name: "Waltz",
                age: 3,
                type: "CACHORRO",
                breed: " Buldogue francês",
                ownerId: owners[2].id,
            },

            {
                name: "Toke",
                age: 1,
                type: "CACHORRO",
                breed: "Pinscher",
                ownerId: owners[3].id,
            },
            {
                name: "Roland",
                age: 2,
                type: "CACHORRO",
                breed: " Golden retriever",
                ownerId: owners[4].id,
            },
            {
                name: "Benson",
                age: 5,
                type: "CACHORRO",
                breed: " Spitz Alemão",
                ownerId: owners[0].id,
            },
            {
                name: "Alpine",
                age: 3,
                type: "CACHORRO",
                breed: "Maltês",
                ownerId: owners[2].id,
            },
            {
                name: "Wiley",
                age: 4,
                type: "GATO",
                breed: " British Shorthair",
                ownerId: owners[0].id,
            },
            {
                name: "Sahara",
                age: 3,
                type: "GATO",
                breed: " Gato Siamês",
                ownerId: owners[1].id,
            },
            {
                name: "Orchid",
                age: 3,
                type: "GATO",
                breed: " Maine Coon",
                ownerId: owners[3].id,
            },
            {
                name: "Kanye",
                age: 8,
                type: "GATO",
                breed: " Gato Persa",
                ownerId: owners[2].id,
            },
            {
                name: "Glacier",
                age: 5,
                type: "GATO",
                breed: " Himalaia",
                ownerId: owners[3].id,
            },
            {
                name: "Crouton",
                age: 1,
                type: "GATO",
                breed: " Burmese",
                ownerId: owners[4].id,
            },
            {
                name: "Yolo",
                age: 9,
                type: "GATO",
                breed: " Angorá",
                ownerId: owners[4].id,
            },
            {
                name: "Frag",
                age: 4,
                type: "GATO",
                breed: " Sphynx",
                ownerId: owners[3].id,
            },
            {
                name: "Screw",
                age: 1,
                type: "GATO",
                breed: " S Ragdoll",
                ownerId: owners[1].id,
            },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await client.$disconnect();
    });
