export const api_charapters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const result = await response.json()

    return result
}