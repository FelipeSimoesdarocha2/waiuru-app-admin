// Viacep
export async function getAddress() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_VIACEP_API_URL}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar endereço: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
