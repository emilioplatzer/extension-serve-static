# extension-serve-static
serve-static based on file name extensions
## based on serve-static

All in https://github.com/expressjs/serve-static documentation is working here. 
But extension-serve-static add one mandatory parameter: 

## staticExtensions

*staticExtensions* is a white list of extensions names for serve, this allows something like:

```js
var connect = require('connect')
var serveStatic = require('extension-serve-static')

var app = connect()

// Serve up all folders for images
app.use(extensionServeStatic('/', {
    extensions: ['html', 'htm'], 
    index: 'index.html', 
    staticExtensions: ['', 'html', 'htm', 'png', 'jpg', 'jpeg', 'gif']
})

// Listen
app.listen(3000)
```
