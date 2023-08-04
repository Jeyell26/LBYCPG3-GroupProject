writeToHTML =`
<nav class="navbar" id="topbar">
        <div class="container-fluid">
            <button class="btn" id="menu-btn"> 
                <img src="../res/navbar_burger.svg" width="30" height="30">
            </button>
            <div class="d-flex justify-content-center w-100">
                <table id = "header">
                <tr>
                    <td rowspan="2"><img src="../res/dlsu_logo.png" width="50" height="50"></td>
                    <td>De La Salle University </td>
                </tr>
                <tr>
                    <td>Electronics and Computer Engineering</td>
                </tr>
                </table>
                
            </div>
        </div>
    </nav>

    <nav class="navbar_sidebar navbar-expand d-flex flex-column align-item-start" id="sidebar">

    <ul class="navbar-nav d-flex flex-column w-100">
        <li class="nav-item dropdown w-100">
            <a href="#" class="nav-link dropdown-toggle text-light pl-4" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
            </a>
            <ul class="dropdown-menu w-100" aria-labelledby="homeDropdown">
                <li><a href="index.html#vision" class="dropdown-item text-light pl-4 p-2">Vision </a></li>
                <li><a href="#mission" class="dropdown-item text-light pl-4 p-2">Mission</a></li>
                <li><a href="#progHisto" class="dropdown-item text-light pl-4 p-2">Program History</a></li>
            </ul>
        </li>
        <li class="nav-item w-100">
            <a href="elga.html" class="nav-link text-light pl-4">Expected Lasallian Graduate Attributes (ELGA)</a>
        </li>
        <li class="nav-item w-100">
            <a href="peo.html" class="nav-link text-light pl-4">Program Educational Objectives (PEO)</a>
        </li>
        <li class="nav-item w-100">
            <a href="so.html" class="nav-link text-light pl-4">Student Outcomes (SO)</a>
        </li>
        <li class="nav-item w-100">
            <a href="cmap.html" class="nav-link text-light pl-4">Curriculum Map</a>
        </li>
        <li class="nav-item w-100">
            <a href="raa.html" class="nav-link text-light pl-4">Recognitions, Accreditations and Assessments</a>
        </li>
        <li class="nav-item w-100">
            <a href="degp.html" class="nav-link text-light pl-4">Degree Programs</a>
        </li>
        <li class="nav-item w-100">
            <a href="egs.html" class="nav-link text-light pl-4">Enrollment and Graduation Statistics</a>
        </li>
        <li class="nav-item w-100">
            <a href="dos.html" class="nav-link text-light pl-4">Department Organizational Structure (DOS)</a>
        </li>
        <li class="nav-item w-100">
            <a href="fac.html" class="nav-link text-light pl-4">Faculty Profile</a>
        </li>
        <li class="nav-item w-100">
            <a href="labs.html" class="nav-link text-light pl-4">Laboratory and Facilities</a>
        </li>
        <li class="nav-item w-100">
            <a href="repub.html" class="nav-link text-light pl-4">Research and Publications</a>
        </li>
        <li class="nav-item w-100">
            <a href="cel.html" class="nav-link text-light pl-4">Community Engagement and Linkages</a>
        </li>
        <li class="nav-item w-100">
            <a href="tha.html" class="nav-link text-light pl-4">Thesis Archives</a>
        </li>
        <li class="nav-item w-100">
        <a href="conf.html" class="nav-link text-light pl-4">Conferences</a>
        </li>
        <li class="nav-item w-100">
        <a href="orgs.html" class="nav-link text-light pl-4">Student Organization</a>
        </li>
        <li class="nav-item w-100">
        <a href="le.html" class="nav-link text-light pl-4">Licensure Examination</a>
        </li>
        <li class="nav-item w-100">
        <a href="cpd.html" class="nav-link text-light pl-4">Continuing Professional Development</a>
        </li>
        <li class="nav-item w-100">
        <a href="abof.html" class="nav-link text-light pl-4">Alumni and Board of Advisers</a>
        </li>
        <li class="nav-item w-100">
        <a href="dfap.html" class="nav-link text-light pl-4">Downloadable Forms and Policies</a>
        </li>
        <li class="nav-item w-100">
        <a href="contact.html" class="nav-link text-light pl-4">Contact Us</a>
        </li>
    </ul>
    </nav>
`

document.getElementById("movingSideBar").innerHTML = writeToHTML;

window.onload = function () {
    var menu_btn = document.querySelector("#menu-btn")
        var sidebar = document.querySelector("#sidebar")
        var i = 0;
        // var container = document.querySelector(".my-container")
        menu_btn.addEventListener("click", () => {
            sidebar.classList.toggle("active-nav")
            // container.classList.toggle("active-cont")
            if(i == 0){
                menu_btn.innerHTML = "<img src=\"../res/navbar_close.svg\" width=\"30\" height=\"30\">";
                i = 1;
            }
            else{
                menu_btn.innerHTML = "<img src=\"../res/navbar_burger.svg\" width=\"30\" height=\"30\">";
                i = 0;
            }
            
        })
}
