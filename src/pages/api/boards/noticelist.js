// pagination을 적용 시키려고 한 boardlist
// router.get('/noticeBoardList', function (req, res, next) {
//     console.log('notice Board List play - pagination1... router')
//     console.log(req.query.page);
//     let data = {
//         limit :req.query.page ? Number(req.query.page) : 0,
//     }
//     boardDAO.pagination1(data,(resp) => {
//         res.json(resp)
//     })
// })

import boardDAO from "./dao";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        console.log('notice board list ... - 게시글 리스트 ');
        let data = {
            limit : req.query.page ? Number(req.query.page) : 0,
        }
        boardDAO.pagination1(data, (resp)=> {
            res.json(resp)
        })
    }
}