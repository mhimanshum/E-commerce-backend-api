const { default: mongoose } = require('mongoose');

const dbConnect = () => {
  try {
    const connection = mongoose.connect(process.env.DATABASE_URL);
    console.log('Database Connected Successfully');
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = dbConnect;
