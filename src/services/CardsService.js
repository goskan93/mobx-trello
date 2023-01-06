class CardsService {
    get = async () => {
        return fetch('http://localhost:3004/cards').then(response =>
            response.json()
        );
    };
    post = async card => {
        return await fetch('http://localhost:3004/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        }).then(response => response.json());
    };
    delete = async cardId => {
        return await fetch(`http://localhost:3004/cards/${cardId}`, {
            method: 'DELETE'
        }).then(response => response.json());
    };
}

export default CardsService;
