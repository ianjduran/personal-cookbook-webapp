const globalAny:any = global;

import mongoose from 'mongoose'

const MONGO_URI = String(process.env.NEXT_PUBLIC_MONGODB_URI)

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = globalAny.mongoose

if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null }
}

export default async function dbConnect() {
  mongoose.set('strictQuery',false)
  console.log("Connecting to mongodb")
  if (cached.conn) {
    console.log("Already Connected to ", cached.conn.connection.name)
    return cached.conn
  }

  if (!cached.promise) {

    cached.promise = mongoose.connect(MONGO_URI, {
        dbName: "Playground"
    }).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    console.log("Connected to database ", cached.conn.connection.name)
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}
