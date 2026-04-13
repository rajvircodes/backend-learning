const errorHandler = require('../middleware/errorMiddleware')
const asyncHandler = require('express-async-handler')
/**
 * - Get all goals
 * - method: GET /api/goals
 */
const getGoals = asyncHandler (async( req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});

/**
 * - Set goal
 * - method: POST /api/goals
 */
const setGoal = asyncHandler( async( req, res, next) => {
console.log(req.body.text);

if(!req.body.text){
    res.status(400)
    throw new Error('please bhaiiiii kuch dalo')
}

  res.status(201).json({
    message: "Set goal",
  });
});
/**
 * - update goal
 * - method: PUT /api/goals
 */
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({
    message: "Updated goal",
  });
});

/**
 * - Delete goal
 * - method: DELETE /api/goals
 */
const deleteGoal = asyncHandler( async(req, res) => {
  res.status(200).json({
    message: "Delete goals",
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
