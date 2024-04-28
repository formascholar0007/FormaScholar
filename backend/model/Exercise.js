const mongoose = require('mongoose');

const ExerciseSchema = mongoose.Schema({
   exerciseName: {
      type: String,
   },
   chapterId: {
      type: mongoose.Types.ObjectId,
      ref:'Chapter',
      required: true
   },
   subjectId: {
      type: mongoose.Types.ObjectId,
      ref:'Subject',
      required: true
   },
   classId: {
      type: mongoose.Types.ObjectId,
      ref:'Class',
      required: true
   }

}, {
   timestamps: true
});

const ExerciseModel = mongoose.model("Exercise", ExerciseSchema);
module.exports = ExerciseModel;