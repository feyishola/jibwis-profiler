const FacilityModel = require("../model/facility.model");

class FacilityController {
  async createFacility(dataObj) {
    try {
      const newFacility = new FacilityModel(dataObj);

      const result = await newFacility.save();
      return { ok: true, data: "Created Successfully" };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async getFacilities() {
    try {
      const result = await FacilityModel.find();
      return { ok: true, data: result };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async getFacility(id) {
    try {
      const result = await FacilityModel.findById(id);
      return { ok: true, data: result };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async updateFacility(id, dataObj) {
    try {
      const result = await FacilityModel.findByIdAndUpdate(
        { _id: id },
        dataObj,
        { new: true }
      );
      return { ok: true, data: "Updated Successfully" };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async deleteFacility(id) {
    try {
      const result = await FacilityModel.findByIdAndDelete(id);
      return { ok: true, data: "Deleted Successfully" };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }
}

module.exports = new FacilityController();
