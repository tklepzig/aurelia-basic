- Blog Articles:
    - http://ilikekillnerds.com/2015/09/aurelia-jspm-deployment-best-practices-unknowns/
    - http://ilikekillnerds.com/2016/02/the-definitive-guide-to-bundling-exporting-in-aurelia/
- Bootstrap not working
- Production server still needs the jspm_packages folder
> Because we’re not bundling all of our dependencies, we will need this folder. But more importantly, we need system.js which is inside of this folder to handle loading everything.  
(from http://ilikekillnerds.com/2015/09/aurelia-jspm-deployment-best-practices-unknowns/)
