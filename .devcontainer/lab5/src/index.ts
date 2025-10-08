import { getUser, createPost, updatePut, updatePatch, deleteUser } from "./servicorest";

async function main() {
    console.log("-inicio da execução-");

    await getUser();
    await createPost();
    await updatePut();
    await updatePatch();
    await deleteUser();

     console.log("-fim da execução-");
}
main().catch((err) => console.error("Erro na execução:", err));