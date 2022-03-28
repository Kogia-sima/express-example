#!/usr/bin/env node

import express from 'express';

const app = express();

const port = process.env.PORT || 8718;
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.use(express.static("public"));

// 写真のサンプルデータ
const photoList = [
  {
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo001.jpg"
  },
  {
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo002.jpg"
  }
];

// 写真リストを取得するAPI
app.get("/api/photo/list", (req, res) => {
  res.json(photoList);
});

app.get("/api/photo/:photoId", (req, res) => {
  const id = req.params.photoId;
  let photo = null;

  for (let i = 0; i < photoList.length; i++){
    if (photoList[i].id == id){
      photo = photoList[i];
      break;
    }
  }

  res.json(photo);
});
