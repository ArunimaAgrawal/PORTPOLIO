 var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
            
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
            document.body.appendChild(css);
        };

        function smoothScroll(target) {
            var targetSection = document.querySelector(target);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
		 function toggleSkillDetails(skillId) {
            var skillDetails = document.getElementById(skillId + '-details');
            var allSkillDetails = document.querySelectorAll('.skill-details');
            allSkillDetails.forEach(function (item) {
                if (item.id !== skillId + '-details') {
                    item.classList.remove('show-details');
                }
            });
            if (skillDetails.classList.contains('show-details')) {
                skillDetails.classList.remove('show-details');
            } else {
                skillDetails.classList.add('show-details');
            }
        }
		function toggleProjectDetails(projectId) {
        var projectDetails = document.getElementById(projectId + '-details');
        var allProjectDetails = document.querySelectorAll('.project-details');
        
        // Hide all project details except the clicked one
        allProjectDetails.forEach(function(item) {
            if (item.id !== projectId + '-details') {
                item.classList.remove('show-details');
            }
        });
        
        // Toggle visibility of the clicked project details
        if (projectDetails.classList.contains('show-details')) {
            projectDetails.classList.remove('show-details');
        } else {
            projectDetails.classList.add('show-details');
        }
    }
		function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId + '-details');
    var allProjectDetails = document.querySelectorAll('.project-details');
    allProjectDetails.forEach(function (item) {
        if (item.id !== projectId + '-details') {
            item.classList.remove('show-details');
        }
    });
    if (projectDetails.classList.contains('show-details')) {
        projectDetails.classList.remove('show-details');
    } else {
        projectDetails.classList.add('show-details');
    }
}
function downloadResume() {
    // Replace 'resume.pdf' with the actual path to your resume file
    var resumeUrl = 'reciept.pdf';

      window.open(resumeUrl, '_blank');

   
}
window.addEventListener('scroll', function() {
    var aboutMeSection = document.getElementById('about-me');
    var aboutMeInfo = document.querySelector('.about-me-info');

    var sectionTop = aboutMeSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionTop >= 0 && sectionTop <= windowHeight) {
        // Calculate opacity based on scroll position within the section
        var opacity = 1 - Math.max(0, Math.min(1, sectionTop / (windowHeight / 2)));

        // Apply opacity to the element
        aboutMeInfo.style.opacity = opacity;
    } else {
        // Hide the text when the section is not in view
        aboutMeInfo.style.opacity = 0;
    }
});