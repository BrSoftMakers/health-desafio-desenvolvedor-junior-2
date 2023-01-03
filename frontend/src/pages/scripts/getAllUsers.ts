export default async function getAllUsers() {
    try {
        const req = await fetch("http://localhost:5000/api/usuarios", {
            method: "POST"
        });
        const res = await req.json();
        return res;
        

    }
    catch (error) {

    }
}