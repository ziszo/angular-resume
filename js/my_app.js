			var app = angular.module("myResume", ['ngAnimate']);
	    	var ender;
	    	var interval = 0;
	    	var firstPart = 3;
	    	var lastPart = 8;//please set

	    	app.controller("resumeController", function(){
	    		this.firstName = me.basicInfo.firstName;
	    		this.lastName = me.basicInfo.lastName;
	    		this.urls = me.lnks;
	    		this.xp = me.experiences;
	    		this.company = "";
	    		this.avatarClicked = false;
	    		this.part = 1;
	    		this.prevPart = function(thisCtrl){
	    			thisCtrl.part--;
	    			if (thisCtrl.part < firstPart)
	    				thisCtrl.part = firstPart;
	    		};
	    		this.nextPart = function(thisCtrl){
	    			thisCtrl.part++;
	    			if (thisCtrl.part > lastPart)
	    				thisCtrl.part = lastPart;
	    		}
	    	});

	    	app.controller("companyController", function(){
	    		this.name = "";
	    		this.roadTo = function(mainCtrl,thisCtrl){
	    			mainCtrl.company = this.name;
	    			mainCtrl.part = mainCtrl.part + 1;
	    		};

	    		this.getCompanies = function(){
	    			this.request = new XMLHttpRequest();
				   	this.request.open("GET", "companies.json", false);
				   	this.request.send(null);
				   	this.companiesWhoViewed = JSON.parse(request.responseText);
	    		}
	    	});

	    	app.controller("basicInfoController", function(){
	    		this.details = me.basicInfo;
	    	});

	    	app.controller("skillsController", function(){
	    		this.specs = me.skills;
	    		this.range = new Array(3);
	    	});

	    	app.controller("experienceController", function(){
	    		this.about = me.experiences;
	    	});

	    	app.controller("projectsController", function(){
	    		this.showcase = me.projects;
	    		this.skills = me.skills;
	    	});

	    	app.controller("referencesController", function(){
	    		this.persons = me.references;
	    	});

	    	app.controller("madeWithController", function(){
	    		this.wth = me.madeWith;
	    	});