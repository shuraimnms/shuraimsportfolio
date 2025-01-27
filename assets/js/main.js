// Function to scroll to the selected section
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// 3D Cube Animation Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Function to show project details when clicked
function showProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Project 1: zikrmate",
            description: "A deep dive into interactive 3D animations using Three.js. Users can interact with the scene and see different animations in real-time."
        },
        project2: {
            title: "Project 2: Portfolio Website",
            description: "A personal portfolio built with HTML, CSS, and JavaScript. Includes interactive elements and a beautiful, responsive design."
        }
    };

    // Retrieve the details of the selected project
    const project = projectDetails[projectId];

    // Set the project details into the page
    document.getElementById('project-title').innerHTML = `<h3>${project.title}</h3>`;
    document.getElementById('project-description').innerHTML = `<p>${project.description}</p>`;

    // Show the project details section
    document.getElementById('project-details').style.display = 'block';
}

// Function to close the project details section
function closeProjectDetails() {
    document.getElementById('project-details').style.display = 'none';
}
file:///C:/ProgramData/pbtmp245.html


    const project = projectDetails[projectId];
    alert(`${project.title}\n\n${project.description}`);
}
