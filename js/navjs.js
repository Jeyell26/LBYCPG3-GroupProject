writeToHTML = `
<nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
<ul class="navbar-nav d-flex flex-column mt-5 w-100">
    <li class="nav-item dropdown w-100">
        <a href="#" class="nav-link dropdown-toggle text-light pl-4" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Home
        </a>
        <ul class="dropdown-menu w-100" aria-labelledby="homeDropdown">
            <li><a href="#" class="dropdown-item text-light pl-4 p-2">TITE </a></li>
            <li><a href="#" class="dropdown-item text-light pl-4 p-2">Mission</a></li>
            <li><a href="#" class="dropdown-item text-light pl-4 p-2">Program History</a></li>
        </ul>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Expected Lasallian Graduate Attributes (ELGA)</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Program Educational Objectives (PEO)</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Student Outcomes (SO)</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Curriculum Map</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Recognitions, Accreditations and Assessments</a>
    </li>
    <li class="nav-item dropdown w-100">
        <a href="#" class="nav-link dropdown-toggle text-light pl-4" id="degreeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Degree Programs
        </a>
        <ul class="dropdown-menu w-100" aria-labelledby="degreeDropdown">
            <li><a href="#" class="dropdown-item text-light pl-4 p-2">Undergraduate Programs</a></li>
            <li><a href="#" class="dropdown-item text-light pl-4 p-2">Graduate Programs</a></li>
            <li><a href="#" class="dropdown-item text-light pl-4 p-2">Other Options and Specializations</a></li>
        </ul>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Enrollment and Graduation Statistics</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Department Organizational Structure(PEO)</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Faculty Profile</a>
    </li>
    <li class="nav-item w-100">
        <a href="#" class="nav-link text-light pl-4">Laboratory and Facilities</a>
    </li>
</ul>
</nav>
`
document.getElementById("movingSideBar").innerHTML = writeToHTML;


