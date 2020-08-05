const loggingMiddleWare = (req, res, next) => {
    //console.log("got a request on / of")
    console.log("this happens first(this is in the MW)  ")
    next()
  }

module.exports = loggingMiddleWare