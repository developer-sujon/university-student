//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Leave } = require('../models');
const { commonService } = require('.');

/**
 * @desc dashboard summary
 * @returns {Promise<[Leave]>}
 */

const dashboardSummary = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    $match: { studentID: ObjectId(studentID) },
  };

  const groupBy = {
    $group: {
      _id: '$status',
      count: { $count: {} },
    },
  };

  return commonService.groupService(Leave, matchQuery, groupBy);
};

module.exports = {
  dashboardSummary,
};
