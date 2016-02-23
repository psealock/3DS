'use strict'

const terrainLoader = new THREE.TerrainLoader();
const geometry = new THREE.PlaneGeometry(60, 60, 199, 199);

const width  = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();
const axes = new THREE.AxisHelper(200);
scene.add(axes);

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.y = -200;
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

function addVertices (data) {
	data.forEach((d, i) => {
		geometry.vertices[i].z = d / 65535 * 10;
	});
}

function createMesh (data) {
	addVertices(data);

	var material = new THREE.MeshPhongMaterial({
		color: 0xdddddd, 
		wireframe: true
	});

	const plane = new THREE.Mesh(geometry, material);
	scene.add(plane);

	document.getElementById('webgl').appendChild(renderer.domElement);

	// requestAnimationFrame(render);
	renderer.render(scene, camera);
}

terrainLoader.load('assets/wellington.bin', function (data) {
	createMesh(data);
});