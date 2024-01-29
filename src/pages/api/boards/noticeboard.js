// router.get('/noticeBoard/:id', function (req, res, next) {
//     const id = req.params.id
//     console.log('notice board 상세보기.. router')
//     boardDAO.noticeBoard(id, (resp) => {
//         res.json(resp)
//     })
// })

import boardDAO from "./dao";

export default async function handler(req, res) {
    if(req.method === 'GET') {
        console.log('notice board router .. 게시글 상세보기');
        const { id } = req.query
        boardDAO.noticeBoard(id, (resp)=> {
            res.json(resp)
        })
        
    }else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        }
}