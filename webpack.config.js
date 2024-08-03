module.exports = {
    resolve: {
    fallback: { "http": require.resolve("stream-http") },
    fallback: {
      "https": require.resolve("https-browserify")
  }
  }
    }
    

    
    
