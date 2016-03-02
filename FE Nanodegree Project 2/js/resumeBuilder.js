 var bio = {
	 "name": "Erich Renken",
	 "role": "Instructional Designer",
	 "contacts": {
		 "mobile": "312-502-8658",
		 "email": "erichrenken@gmail.com",
		 "github": "erichrenken",
		 "twitter": "erich0",
		 "location": "Silver Spring, MD"
	 },
	 "welcomeMessage": "Welcome to my <strike>nightmare</strike> resume",
	 "skills": [
	 	"Online Learning", "Project Management", "LMS Integration"
		],
	"biopic": "https://pbs.twimg.com/profile_images/455695351832256512/xcY2I4jy.jpeg",
	"display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
	for (var s in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[s]);
      $("#skills").append(formattedSkill);
    }
  }
};

var education = {
	"schools": [
		{
			"name": "University of South Carolina",
			"location": "Columbia, SC",
			"degree": "BA",
			"majors": [
				"English"
				],
			"date": 1996,
			"url": "http://www.sc.edu/"
		},
		{
			"name": "Virginia Polytechnic Institute and State University",
			"location": "Blacksburg, VA",
			"degree": "MA",
			"majors": [
				"Instructional Technology"
				],
			"date": 2007,
			"url": "http://www.vt.edu/"
		},
		{
			"name": "Georgia Institute of Technology",
			"location": "Atlanta, GA",
			"degree": "MS",
			"majors": [
				"Computer Science"
				],
			"date": 2017,
			"url": "http://www.gatech.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"date": 2016,
			"url": "http://www.udacity.com/"
		}
	],
	"display": function() {
		for (var s in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[s].name);
			formattedSchool = formattedSchool.replace("#", education.schools[s].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[s].date);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
      		$("#education").append(formattedSchool);
			$("#education").append(formattedDegree);
			$("#education").append(formattedDate);
			$("#education").append(formattedLocation);
			for (var m in education.schools[s].majors) {
      			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors[m]);
      			$("#education").append(formattedMajor);
    		}
		}
		for (var o in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[o].date);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[o].url);
      		$("#education").append(formattedTitle);
			$("#education").append(formattedSchool);
			$("#education").append(formattedDate);
			$("#education").append(formattedURL);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Pinneast Interactive",
			"title": "Courseware Developer",
			"location": "Columbia, SC",
			"dates": "1994-2001",
			"description": "Designed and developed web-based courses for Staples, Dow Chemical, Rational Software, Hardee’s, and others using Flash."
		},
		{
			"employer": "Acadia HCS",
			"title": "Director of Instructional Technology",
			"location": "Columbia, SC",
			"dates": "2001-2006",
			"description": "Led team in designing training courses using Flash and  Dreamweaver  for  AAA  Mid-Atlantic,  Aflac,  Bank  of  America,  Bose,  Darden Restaurants, GameStop, Incredible Pizza Company, and Vans."
		},
		{
			"employer": "National Restaurant Association",
			"title": "Sr. Learning Architect",
			"location": "Chicago, IL",
			"dates": "2006-2011",
			"description": "Overhauled  existing  course  authoring  and  delivery systems,  moving  from  Word scripts  and  individually-created  Flash  screens  to  a  newly-architected,  database-driven authoring tool that utilizes SCORM/AICC, XML, and Flash (built with Flash Builder).  This  work  resulted  in  a  complete  redesign  of  the  ServSafe  line  of products and allowed for faster customization and localization of the courseware."
		},
		{
			"employer": "The Cheesecake Factory",
			"title": "Manager of Instructional Design",
			"location": "Calabasas, CA",
			"dates": "2011-2013",
			"description": "Responsible  for  interviewing  SMEs  to  obtain  content  and  design  storyboards, developing the courseware, and deploying the courses on CheesecakeU (running the Cornerstone OnDemand LMS)."
		},
		{
			"employer": "United Educators",
			"title": "Senior Instructional Designer",
			"location": "Bethesda, MD",
			"dates": "2013-Current",
			"description": "Storyboard, design, develop, and implement online courseware, while conducting group reviews throughout the process. Topics have included Workplace Harassment, Title IX, and Concussion  Prevention. Our 1,300+ member schools have access to these courses."
		}
	],
	"display": function() {
		for (var j in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
      		$("#workExperience").append(formattedEmployer);
			$("#workExperience").append(formattedTitle);
			$("#workExperience").append(formattedLocation);
			$("#workExperience").append(formattedDates);
			$("#workExperience").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Blackjack",
			"dates": "2015",
			"description": "Demo designed to showcase how learners could ask subject matter experts (SME) a question that created a SMS message which was sent to the SME. Once the SME responded to the text message, the learner would receive a visual notification that their question had been answered. This demo does not show the SMS capability as I've disabled my Twilio account, but the course is still fun.",
			"images": ["images/BJ1.png", "images/BJ2.png"],
			"link": "https://dl.dropboxusercontent.com/u/13858457/blackjack%20-%20Storyline%20output/story.html"
		},
		{
			"title": "Heat Illness Prevention",
			"dates": "2014",
			"description": "Course developed to want K-12 athletes and coaches about the dangers of heat illness",
			"images": ["images/HI1.png", "images/HI2.png"],
			"link": "https://dl.dropboxusercontent.com/u/13858457/HeatIllnessPrevention/story.html"
		}
	],
	"display": function() {
		for (var p in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
			formattedTitle = formattedTitle.replace("#", projects.projects[p].link);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
			$("#projects").append(formattedTitle);
			$("#projects").append(formattedDates);
			$("#projects").append(formattedDescription);
			for (var x in projects.projects[p].images) {
      			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[x]);
      			$("#projects").append(formattedImage);
    		}
		}
	}
};
 
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);