const express = require("express");
const FacilityController = require("../controller/facility.controller");

module.exports = () => {
  const api = express.Router();

  api.get("/", async (req, res) => {
    try {
      const { ok, data, message } = await FacilityController.getFacilities();
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(500).json({ ok, message });
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  });

  api.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { ok, data, message } = await FacilityController.getFacility(id);
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(500).json({ ok, message });
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  });

  api.post("/", async (req, res) => {
    try {
      const dataObj = req.body;
      const { ok, data, message } = await FacilityController.createFacility(
        dataObj
      );
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(500).json({ ok, message });
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  });

  api.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const dataObj = req.body;
      const { ok, data, message } = await FacilityController.updateFacility(
        id,
        dataObj
      );
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(500).json({ ok, message });
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  });

  api.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { ok, data, message } = await FacilityController.deleteFacility(id);
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(500).json({ ok, message });
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  });
  return api;
};
