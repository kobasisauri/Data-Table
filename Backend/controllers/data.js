const { json } = require("express");
const fs = require("fs");
const path = require("path");

exports.getData = (req, res, next) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  res.status(200).json({ data: data });
};

exports.addData = (req, res, next) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  const dataLength = data.length;

  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  const address = {
    street: req.body.address.street,
    city: req.body.address.city,
  };
  const phone = req.body.phone;
  const id = dataLength + 1;

  data.push({
    id: id,
    name: name,
    email: email,
    gender: gender,
    address: address,
    phone: phone,
  });

  fs.writeFileSync("data.json", JSON.stringify(data));

  res.status(200).json({ data: data });
};

exports.editData = (req, res, next) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedGender = req.body.gender;
  const updatedAddress = {
    street: req.body.address.street,
    city: req.body.address.city,
  };
  const updatedPhone = req.body.phone;
  const id = req.body.id;

  const upadtedData = data.map((item) => {
    if (+item.id === +id) {
      return {
        id: id,
        name: updatedName,
        email: updatedEmail,
        gender: updatedGender,
        address: updatedAddress,
        phone: updatedPhone,
      };
    } else {
      return item;
    }
  });

  fs.writeFileSync("data.json", JSON.stringify(upadtedData));

  res.status(200).json({ data: upadtedData });
};

exports.deleteData = (req, res, next) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  const id = req.body.id;

  const updatedData = data.filter((item) => item.id !== id);

  fs.writeFileSync("data.json", JSON.stringify(updatedData));

  res.status(200).json({ data: updatedData });
};
