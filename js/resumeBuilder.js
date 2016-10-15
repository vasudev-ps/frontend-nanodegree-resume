var name = "Vasudev PS";
var role = "Front End Web Developer";
var html5 = "<img class = 'svg-img' src='https://ohdoylerules.com/content/images/html5.svg'><br> HTML5";
var javascript = "<img class = 'svg-img' src = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'>JavaScript";
var css3 = "<img class = 'svg-img' src='https://ohdoylerules.com/content/images/css3.svg'><br>  CSS3";
var android = "<img class = 'svg-img' src='https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg'><br>Android";

/*to perform animation after page loads*/
$(window).on("load", function() {
    $('.anim2').addClass('anim');
});

var bio = {
    "name": name,
    "role": role,
    "skills": [html5, javascript, css3, android],
    "contacts": {
        "email": "vasudev10@yahoo.com",
        "mobile": "95548541256",
        "github": "vasudev-ps",
        "twitter": "@vasudev_ps",
        "location": "Mangalore"
    },
    "biopic": 'images/me.jpg',
    "welcomeMessage": "Hello Folks! , Welocome. I am a Mangalore Based Web Designer. I Make Things Look Good"
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Front End Web Developer",
        "dates": "2016",
        "location": "Mangalore,India",
        "description": "The work of software engineers, or programmers, varies hugely depending on the organisation and the software being produced. They must apply a high level of technical and mathematical knowledge. There are two distinct areas of expertise: applications and systems."
    }, {
        "employer": "Infotech",
        "title": "System Engineer",
        "dates": "2015",
        "location": "Bangalore,India",
        "description": "The work of software engineers, or programmers, varies hugely depending on the organisation and the software being produced. They must apply a high level of technical and mathematical knowledge. There are two distinct areas of expertise: applications and systems."
    }],
    displayWork: function() {
        for (var job = 0; job < work.jobs.length; job++) {
            var formatedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formatedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formateddate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formatedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formateddescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formatedentry = formatedemployer + formatedtitle;
            $(".work-entry:last").append(formatedentry);
            $(".work-entry:last").append(formateddate);
            $(".work-entry:last").append(formatedlocation);
            $(".work-entry:last").append(formateddescription);
            if (job + 1 != work.jobs.length) {
                $(".work-entry:last").append("<hr>");
            }
        }
    }
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "images": ["images/project1.jpg", "images/project2.jpg"],
        "description": "A website, also written as web site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A web site may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site."
    }, {
        "title": "Online Resume",
        "dates": "2015",
        "images": ["images/project1.jpg", "images/project2.jpg"],
        "description": "Online Resume: A website, also written as web site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A web site may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site."
    }],
};
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formatedtitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formateddate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formateddescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formatedtitle);
        $(".project-entry:last").append(formateddate);
        $(".project-entry:last").append(formateddescription);
        for (var image = 0; image < projects.projects[project].images.length; image++) {
            var formatedimg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formatedimg);
        }
        if (project + 1 != projects.projects.length) {
            $(".project-entry:last").append("<hr>");
        }
    }
};

var education = {
    "schools": [{
        "name": "SIT",
        "degree": "BE",
        "dates": "2012",
        "location": " Mangalore ",
        "major": ["CS"]
    }, {
        "name": "SITM",
        "degree": "FEND",
        "dates": "2012",
        "location": " Mangalore ",
        "major": ["CS"]
    }],
    "onlineCourses": [{
        "school": "UDACITY",
        "title": "FEND",
        "dates": "2016",
        "url": "www.udacity.com"
    }],
    displayEdu: function() {
        for (var school = 0; school < education.schools.length; school++) {
            var formatedschool = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formateddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formateddate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formatedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formatedschool);
            $(".education-entry:last").append(formateddegree);
            $(".education-entry:last").append(formateddate);
            $(".education-entry:last").append(formatedlocation);
            for (var major = 0; major < education.schools[school].major.length; major++) {
                var interMajor = education.schools[school].major[major];
                var formatedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);
                $(".education-entry:last").append(formatedMajor);
            }
            if (school + 1 != education.schools.length) {
                $(".education-entry:last").append("<hr>");
            }
        }
        $(".education-entry:last").append("<hr>");
    },
    displayOnline: function() {
        $("#education").append(HTMLonlineClasses);
        for (var course = 0; course < education.onlineCourses.length; course++) {
            var formatedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            $(".online-entry:last").append(formatedtitle);
            var formatedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".online-entry:last").append(formatedschool);
            var formateddate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".online-entry:last").append(formateddate);
            var formatedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".online-entry:last").append(formatedurl);
            $(".online-entry:last").append("<hr>");
        }
    }
};
var i = 0;
var formatedname = HTMLheaderName.replace("%data%", bio.name);
var formatedrole = HTMLheaderRole.replace("%data%", bio.role);
var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedtwiter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedpic = HTMLbioPic.replace("%data%", bio.biopic);
var formatedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formatedrole);
$("#header").prepend(formatedname);
$("#topContacts").append(formatedmobile);
$("#topContacts").append(formatedemail);
$("#topContacts").append(formatedgithub);
$("#topContacts").append(formatedtwiter);
$("#topContacts").append(formatedlocation);
$("#header").append(formatedpic);
$("#header").append(formatedmsg);
$("#footerContacts").append(formatedmobile);
$("#footerContacts").append(formatedemail);
$("#footerContacts").append(formatedgithub);
$("#footerContacts").append(formatedtwiter);
$("#footerContacts").append(formatedlocation);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    while (i < bio.skills.length) {
        var formatedskill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formatedskill);
        i++;
    }
}

if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    work.displayWork();
}

if (projects.projects.length > 0) {
    projects.display();
}
if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    education.displayEdu();
    if (education.onlineCourses.length > 0) {
        education.displayOnline();
    }
}