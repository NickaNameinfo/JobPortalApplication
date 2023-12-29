const companyService = require("../services/company");

const courseController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 500,
        orderBy = "companyName",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await companyService.findAll({
        page: +page ? +page : 1,
        limit: +limit ? +limit : 3,
        orderBy,
        sortBy,
        keyword,
      });
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await companyService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.files, req.body, "asdfasdfasd");
    // let inputData = {
    //   ...req.body,
    //   uploadCourse: req?.files?.uploadCourse?.[0]?.path,
    // };
    try {
      const data = await companyService.create(req.body);
      return res.json({ success: true, data });
    } catch (error) {
      return res.json({ success: false, error: "Company create failed." });
    }
  },
  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      // let inputData = {
      //   ...req.body,
      //   uploadCourse: req.files.uploadCourse?.[0]?.path,
      // };
      const data = await companyService.updateById(id, req.body);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await companyService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = courseController;
