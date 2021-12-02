exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true, 
    specs: ['s.js'], //Name of the Specfile 
    OnPrepare(){
          ({
                project:require('path').join(__dirname,'./tsconfig.json')
          });
    }
  }