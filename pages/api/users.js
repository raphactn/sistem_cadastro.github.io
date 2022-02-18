export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json([{ name: 'Produto 1' }, { name: 'Produto 2' }, { name: 'Produto 3' }, { name: 'Produto 4' }, { name: 'Produto 5' }, { name: 'Produto 6' }])
    } else if (req.method === 'PUT') {
        res.status(200).json('Mensagem nova')
    }
    else if (req.method === 'PATCH') {
        res.status(200).json('produto adicionado com sucesso')
    }
    else if (req.method === 'DELETE') {
        res.status(200).json('produto Deletado com sucesso')
    }
    else {
        res.status(405).end('Method not allowed')
    }
}