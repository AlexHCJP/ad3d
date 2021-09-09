import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import '../static/global.scss'

function main() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('gray');
    
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 4;
    camera.position.x = 4;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);

    // const light = new THREE.AmbientLight(0xffffff, 0.7);
    // scene.add(light);

    var pointLight = new THREE.PointLight('white');
    pointLight.position.set( 15, 10, 10 );
    pointLight.add(new THREE.Mesh(
            new THREE.SphereGeometry(1, 10, 10),
            new THREE.MeshBasicMaterial({
                color: 'white'
            })));
    pointLight.castShadow = true;
    scene.add(pointLight);


    {
        const mesh = new THREE.Mesh( 
            new THREE.BoxGeometry( 7, 0.1 , 7 ),
            new THREE.MeshStandardMaterial({ color: 0xffffff }));
        mesh.castShadow = true;
        mesh.receiveShadow = true;
            scene.add( mesh );
    }
    {
        const mesh = new THREE.Mesh( 
            new THREE.BoxGeometry( 7, 0.1 , 7 ),
            new THREE.MeshStandardMaterial({ color: 0xf5f }));
        mesh.position.y = 3.5
        mesh.position.x = -3.5
        mesh.rotation.z = Math.PI / 2
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );
    }
    {
        const mesh = new THREE.Mesh( 
            new THREE.BoxGeometry( 2, 2 , 2 ),
            new THREE.MeshStandardMaterial({ color: 0xf5f }));
        mesh.position.y = 2
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );
    }
    // {
    //     const loader = new GLTFLoader();

    //     loader.load( './src/scene.gltf', function ( gltf ) {

    //         scene.add( gltf.scene );

    //     }, undefined, function ( error ) {

    //         console.error( error );

    //     } );
    // }

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );
    
    renderer.render(scene, camera)
}

main();