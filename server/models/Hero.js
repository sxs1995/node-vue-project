const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  title: { type: String }, //称号
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
  scores: {
    difficult: { type: Number }, //难度
    skills: { type: Number }, //技能
    attack: { type: Number }, //攻击
    survive: { type: Number } //生存
  },
  skills: [
    {
      icon: { type: String },
      name: { type: String },
      descrition: { type: String },
      tips: { type: String }
    }
  ],
  product1: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
  product2: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
  usageTips: { type: String }, //使用技巧
  battleTips: { type: String }, //对抗技巧
  teamTips: { type: String }, //团战思路
  partners: [{ hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" }, descrition: String }] //搭档
});

module.exports = mongoose.model("Hero", schema);
