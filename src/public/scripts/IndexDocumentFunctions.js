/**
 * Index.html functions
 */

function setSizeOfDivPresentation() {
    const divHeight = (window.innerHeight - 210) + "px";
    // console.log("Window.screen: " + divHeight);
    document.getElementById("divPresentation").style.height = divHeight;
}

async function fillSkillsTable() {
    const tbody = document.getElementById("tbodySkills");
    const data = await getSkillsData();

    data.forEach(elem => {
        const tr = document.createElement("TR");
        const skill = document.createElement("TH");
        const level = document.createElement("TD");
        const tools = document.createElement("TD");
        const divProgress = document.createElement("DIV");
        const progress = document.createElement("DIV");

        skill.setAttribute("scope", "row");
        skill.appendChild(document.createTextNode(elem.skill));
    
        divProgress.classList.add("progress");
        progress.classList.add("progress-bar", "bg-success");
        progress.setAttribute("role", "progressbar");
        progress.style.width = elem.level + "%";
        // progress.setAttribute("style", `width: ${elem.level}%`);
        progress.setAttribute("aria-valuenow", "50");
        progress.setAttribute("aria-valuemin", `${elem.level}`);
        progress.setAttribute("aria-valuemax", "100");
        divProgress.appendChild(progress);
        level.appendChild(divProgress);
        
        tools.appendChild(document.createTextNode(elem.tools));

        tr.appendChild(skill);
        tr.appendChild(level);
        tr.appendChild(tools);
        tbody.appendChild(tr);
    });
}

addEventListener("load", function() {
    setSizeOfDivPresentation();
    fillSkillsTable();
});

// add event for change size of div when change page size:
addEventListener("resize", function(event) {
    setSizeOfDivPresentation();
});

async function getSkillsData() {
    return await (await fetch("/json/SkillsData.json")).json();
}

