const allCategories = {
  LEAVE: [],
  SCHOLARSHIP: [],
  ASSESSMENT_RETAKE: [],
  OTHERS: [],
  REPETITION_REQUEST: [],
};

const allStatus = {
  REJECTED: [],
  APPROVED: [],
  PENDING: [],
};

const allAssessment = {
  QUIZ: [],
  MID_TERM: [],
  FINAL: [],
};

const allScholarship = {
  FACS: [],
  OTHERS: [],
};

const categories = Object.keys(allCategories);
const status = Object.keys(allStatus);
const assessment = Object.keys(allAssessment);
const scholarship = Object.keys(allScholarship);

module.exports = { categories, status, assessment, scholarship };
