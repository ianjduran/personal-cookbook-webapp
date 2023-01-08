declare global {
    const mongoose: {
      promise: Promise<Mongoose> | null;
      conn: Mongoose | null;
    };
  }
export {}