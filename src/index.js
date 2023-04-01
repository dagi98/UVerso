import KeyInput from "./KeyInput.js";
import connect from "./Connect.js";



connect.then(() => { });
const keyInput = new KeyInput();

const ratio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040);
const dLight = new THREE.DirectionalLight(0xffffff, 0.6);
dLight.position.set(5, 15, 8); // Inclinar hacia la derecha
light.add(dLight);
scene.add(light);

const geometry = new THREE.BoxGeometry(50, 0.1, 50);
const material = new THREE.MeshPhongMaterial({ color: 0x90ee90 });
const ground = new THREE.Mesh(geometry, material);
renderer.setClearColor(0x87ceeb); //Añadir cielo

scene.add(ground);
camera.position.set(1, 5, 25);

function animate() {

    requestAnimationFrame(animate);
    if (keyInput.isPressed(38)) {
        camera.position.y -= 0.05;
        // camera.position.x+=0.05;  
    }
    if (keyInput.isPressed(40)) {
        camera.position.y += 0.05;

    }
    if (keyInput.isPressed(37)) {
        //camera.position.y-=0.05;
        camera.position.x += 0.05;
    }
    if (keyInput.isPressed(39)) {
        //camera.position.y-=0.05;
        camera.position.x -= 0.05;
    }
    if (keyInput.isPressed(32)) {
        camera.position.z -= 0.05;

    }
    if (keyInput.isPressed(18)) {
        camera.position.z += 0.05;
    }
    camera.lookAt(ground.position);
    renderer.render(scene, camera);
}

window.getCameraY = function () {
    return camera.position.y; // devuelve la posición y de la cámara
}

window.getCameraX = function () {
    return camera.position.x; // devuelve la posición x de la cámara
}

window.getCameraZ = function () {
    return camera.position.z; // devuelve la posición z de la cámara
}


// Crear una instancia de ObjectLoader
const loader = new THREE.ObjectLoader();

// Cargar el archivo .json y añadir el objeto a la escena
loader.load('./model (1).json', function (object) {
    // Obtener el centro del objeto cargado
    const box3 = new THREE.Box3().setFromObject(object);
    const center = box3.getCenter(new THREE.Vector3());
    // Mover el objeto hacia arriba
    // object.position.y += 2;

    // Modificando la posicion
    object.rotation.x += Math.PI;
    object.rotation.y += Math.PI;
    object.scale.set(2, 2, 2);
    object.position.x -= 15;
    object.position.z += 20;

    // Ajustar la posición del objeto para que esté en el centro de la escena
    object.position.sub(center);

    scene.add(object);
});






animate();
/*
connect.then((result) => {
    console.log(result);
    result.buildings.forEach((b, index) => {
        if (index <= result.supply) {
            const BoxGeometry = new THREE.BoxGeometry(3, 3, 3);
            const BoxMaterial = new THREE.MeshPhongMaterial({ color: 0xFF2301 });
            const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
            box.position.set(0, 0, 22);

            scene.add(box);
        }

    });
});*/


/*
connect.then((result) => {
    console.log(result);
    result.buildings.forEach((b, index) => {
        if (index <= result.supply) {
            const BoxGeometry = new THREE.BoxGeometry(3, 3, 3);
            const BoxMaterial = new THREE.MeshPhongMaterial({ color: 0xFF2301 });
            const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
            box.position.set(0, 0, 22);
            box.name = `box_${index}`;
 
            scene.add(box);
        }
    });
});*/

connect.then((result) => {
    console.log(result);
    result.buildings.forEach((b, index) => {
        if (index <= result.supply) {
            const BoxGeometry = new THREE.BoxGeometry(3, 3, 3);
            const BoxMaterial = new THREE.MeshPhongMaterial({ color: 0xFF2301 });
            const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
            box.position.set(0, 0, 22);
            box.name = `box`; 
            scene.add(box);
        }
    });
});

const url = 'http://127.0.0.1:5500/index.html';

function getURLParams(url) {
  const params = {};
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  let match;

  while (match = regex.exec(url)) {
    params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
  }

  return params;
}