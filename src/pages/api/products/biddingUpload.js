import { express } from 'express';
import Router from 'next/router';
//이거 쓰지 말라고 하셨던 것 같음
import multer from 'multer';
import path from 'path';
import productDAO from './dao';
import { NextApiRequest, NextApiResponse } from 'next';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/upload/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const biddingUpload = upload.single('file1');

    biddingUpload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log(err);
        res.json({ status: 500, message: 'error' });
      } else if (err) {
        console.log(err);
        res.json({ status: 500, message: 'error' });
      } else {
        //dao 와 연동해서.. db insert..
        const reqData = req.body;
        console.log(reqData);
        const jsonData = JSON.parse(reqData.inputData);
        console.log(jsonData.email, jsonData.auctionPrice);
        res.json({ status: 200, message: '업로드 완료', data: req.file.filename });
      }
    });
  } else {
    res.status(405).json({ message: '에러:실패' });
  }
}

// 추가 내용 (insert 로직)
export const config = {
  api: {
    bodyParser: false,
  },
};

export const insertHandler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('00', data);
    productDAO.bidding(data, (resp) => {
      res.json(resp);
    });
  } else {
    res.status(405).json({ message: '에러:실패' });
  }
};
