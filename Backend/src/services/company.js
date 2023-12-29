const { Op } = require("sequelize");

const { Company } = require("../models/index");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

const companyService = {
  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.company_name = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Company.findAndCountAll({
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
        const data = await Company.findByPk(id);
        if (!data) throw new NotFoundException("Not found comapny!");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  create: (body) =>
    new Promise(async (resolve, reject) => {
      try {
        const company = await Company.findOne({
          where: { company_name: body.companyName },
        });
        if (company)
          throw new BadRequestException(
            `Company ${body?.companyName} already exists`
          );
        const data = await Company.create(body);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  updateById: (id, body) =>
    new Promise(async (resolve, reject) => {
      try {
        const company = await Company.findByPk(id);
        if (!company) throw new NotFoundException("Not found comapny!");

        const data = await Company.update(body, {
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
        const company = await Company.findByPk(id);
        if (!company) throw new NotFoundException("Not found company!");

        const data = await Company.destroy({
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
};

module.exports = companyService;
