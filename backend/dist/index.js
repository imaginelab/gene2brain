// src/index.ts
import express from "express";
import { readdir } from "node:fs/promises";
import { basename } from "node:path";
var data_path = "data/gene2brain_data/";
var files_all = await readdir(data_path + "csv");
var files = files_all;
var all = files.map((file) => basename(file, ".csv"));
var app = express();
app.get("/gene2brain", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.json(all);
});
app.use(express.static("data/gene2brain_data"));
app.listen(3e3, () => {
  console.log("started");
});
