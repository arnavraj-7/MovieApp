import mongoose, { Schema } from 'mongoose'

const MovieSchema = new Schema ({
    imdbid: String,
  title: String,
  imdbrating: Number,
  released: Number,
  synopsis: String,
  type: String,
  genre: [String],
  imageurl: [String],

})

const Movie = mongoose.model('Movie', MovieSchema)

export default Movie