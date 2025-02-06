export class ProdutosAPI {
    uri = "http://127.0.0.1:8000/api/produtos"
    async onGetProduct() {
        try {
            const response = await fetch(this.uri)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            console.log(await response.json());
        }
        catch (error) {
            console.log(error)
        }
    }
}