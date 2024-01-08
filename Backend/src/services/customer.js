const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { Customer, Address } = require("../models/index");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

function omitHash(user) {
  console.log(user, "user12341234");
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}

const customerService = {
  authenticate: (body) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Customer.scope("withHash").findOne({
          where: { userName: body?.userName },
        });
        if (!data) throw new NotFoundException("Not found customer!");
        bcrypt.compare(body.password, data.password, function (err, result) {
          if (result) {
            let secret =
              "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";
            const token = jwt.sign({ sub: data.id }, secret, {
              expiresIn: "1d",
            });
            resolve({ ...omitHash(data.get()), token });
          } else {
            return resolve({ error: true });
          }
        });
      } catch (error) {
        reject(error);
      }
    }),

  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.email = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Customer.findAndCountAll({
          where: query,
          ...queries,
        });

        const res = {
          totalPages: Math.ceil(data?.count / limit),
          totalItems: data?.count,
          data: data?.rows,
        };

        resolve(res);
      } catch (error) {
        reject(error);
      }
    }),
  findById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Customer.findByPk(id, {
          include: [{ model: Address, as: "addresses" }],
        });
        if (!data) throw new NotFoundException("Not found customer!");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  create: (body) =>
    new Promise(async (resolve, reject) => {
      console.log(body, "body2341234213");
      try {
        const existingCustomerByEmail = await Customer.findOne({
          where: { email: body?.email },
        });

        // Check if a customer with the provided userName already exists
        const existingCustomerByUserName = await Customer.findOne({
          where: { userName: body?.userName },
        });

        if (existingCustomerByEmail) {
          throw new BadRequestException(`Email ${body?.email} already exists`);
        }

        if (existingCustomerByUserName) {
          throw new BadRequestException(
            `User Name ${body?.userName} already exists`
          );
        }

        const data = await Customer.create(body, {
          include: [{ model: Address, as: "addresses" }],
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  addNewAddress: (customerId, { city, state, street, zipcode }) =>
    new Promise(async (resolve, reject) => {
      try {
        const customer = await Customer.findByPk(customerId);
        if (!customer) throw new NotFoundException("Not found customer!");

        const data = await Address.create({
          city,
          state,
          street,
          zipcode,
          customerId,
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  updateById: (id, body) =>
    new Promise(async (resolve, reject) => {
      try {
        const customer = await Customer.findByPk(id);
        if (!customer) throw new NotFoundException("Not found customer!");

        const data = await Customer.update(body, {
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  deleteById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const customer = await Customer.findByPk(id);
        if (!customer) throw new NotFoundException("Not found customer!");

        const data = await Customer.destroy({
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  generateOtp: (email) =>
    new Promise(async (resolve, reject) => {
      try {
        const transporter = nodemailer.createTransport({
          host: "mail.ibss.co.in",
          port: 465, // or 465
          secure: true, // or true
          auth: {
            user: "support@ibss.co.in",
            pass: "E!LO%?8bO(Z9",
          },
        });
        console.log(email, "emailemail");

        // async..await is not allowed in global scope, must use a wrapper
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit random OTP

        const info = await transporter.sendMail({
          from: "support@ibss.co.in", // sender address
          to: email, // list of receivers
          subject: "Otp ✔", // Subject line
          text: `Verification Code is ${otp}`, // plain text body
          // html: "<b>Hello world?</b>", // html body
        });
        if (info.messageId) {
          resolve(otp);
        }
      } catch (error) {
        reject(error);
      }
    }),
};

module.exports = customerService;
