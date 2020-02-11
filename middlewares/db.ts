import mongoose from 'mongoose';

export default async () => {
  const DB_URI: string =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/my-corner';
  try {
    if (mongoose.connection.readyState) {
      console.log('Already Connected');
      return;
    }
    await mongoose.connect(DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('DB Connection Established');
  } catch (error) {
    console.log(error);
  }
};
