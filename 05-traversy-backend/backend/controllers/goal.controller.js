const errorHandler = require("../middleware/errorMiddleware");
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal.model");
const e = require("express");
/**
 * - Get all goals
 * - method: GET /api/goals
 */
const getGoals = asyncHandler(async (req, res) => {
  try {
    const goals = await Goal.find();

    if (!goals) {
      return res.status(404).json({
        message: "Goals nai mile",
      });
    }
    res.status(200).json({
      message: "Goal get successfully!",
      data: goals,
    });
  } catch (err) {
    console.log(err.message);
  }
});

/**
 * - Set goal
 * - method: POST /api/goals
 */
const setGoal = asyncHandler(async (req, res, next) => {

  const { title, content } = req.body;


  if (!title || !content) {
    return res.status(400).json({
      message: "Enter all field",
    });
  }

  const goalExist = await Goal.findOne({ title: title });

  if (goalExist) {
    return res.status(409).json({
      message: "Goal already exist",
    });
  }

  try {
    const goal = await Goal.create({
      title,
      content,
    });

    res.status(201).json({
      message: "Goal created successfully",
      data: goal,
    });
  } catch (err) {
    console.log("goal error", err.message);
  }
  res.status(201).json({
    message: "Set goal",
  });
});

/**
 * - update goal
 * - method: PUT /api/goals
 */
const updateGoal = asyncHandler(async (req, res) => {
  
  const id = req.params.id;
  const newData = req.body;
  
  try {
    const newGoal = await Goal.findByIdAndUpdate(id,newData,{
      new:true,
      runValidators:true
    })

    res.status(200).json({
      message:"Gaol updated successfully",
      data:newGoal
    })
  } catch (error) {
      console.log(error.message);
      
  }

});

/**
 * - Delete goal
 * - method: DELETE /api/goals
 */
const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    // findByIdAndDelete use karo agar sirf string ID pass kar rahe ho
    const deletedGoal = await Goal.findByIdAndDelete(id);

    // Agar goal nahi mila
    if (!deletedGoal) {
      return res.status(404).json({
        message: "Goal already gone or never existed",
      });
    }

    // Success response bracket ke BAHAR hona chahiye
    return res.status(200).json({
      message: "Goal deleted successfully",
      id: id,
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
