import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Hero() {

    let HERO_OBJECT, MAIN_LIGHT, MOUSE_Y, MOUSE_X, CAMERA;

    useEffect(() => {

        const node = document.getElementById("three_canvas");

        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();

        CAMERA = new THREE.PerspectiveCamera(60, width/ height, 1, 1000 );
        CAMERA.position.z = 50;


        const renderer = new THREE.WebGLRenderer({canvas: node, alpha: true});

        const controls = new OrbitControls(CAMERA, renderer.domElement);

        renderer.setSize( width,height);

    
        // White directional light at half intensity shining from the top.
        MAIN_LIGHT = new THREE.SpotLight( 0xfff0f0, 2 );
        MAIN_LIGHT.position.set(100,100,100);
        scene.add( MAIN_LIGHT );

        // White directional light at half intensity shining from the top.
        let MAIN_LIGHT_2 = new THREE.SpotLight( 0xfff0f0,1);
        MAIN_LIGHT_2.position.set(50,100,-100);
        scene.add( MAIN_LIGHT_2 );

        
        // loading manager
        const manager = new THREE.LoadingManager();
        manager.onLoad = function () {

            console.log( 'Loading completedxxxx!');

            scene.add(HERO_OBJECT);
            renderer.render(scene, CAMERA);
            tick();
            
            const p1 = new Promise((resolve, reject) =>{
                resolve( document.getElementById("loader").style.opacity = 0);
            });
            p1.then(() =>{
                setTimeout(function() { document.getElementById("loader").style.display = "none" } , 1000);
            })
            
       
        };


        document.addEventListener('mousemove', e => {
            MOUSE_Y = e.clientY * .2;
        });


        //const texture = new THREE.TextureLoader().load('/models/earth_color.jpg');

        const textureLoader = new THREE.TextureLoader(manager);

        const texture = textureLoader.load('/models/earth_night_1x.jpg');
        const displacementMap = textureLoader.load('/models/earth_displacement_1x.jpg');
        const normalMap = textureLoader.load('/models/earth_normal_1x.jpg');
        const roughnessMap = textureLoader.load('/models/earth_roughness_1x.jpg');

        const geometry = new THREE.SphereGeometry( 15, 32, 16 );
        
        //const material = new THREE.MeshBasicMaterial( { map: texture } );
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            //displacementMap: displacementMap,
            normalMap: normalMap,
            roughnessMap: roughnessMap
        })


        HERO_OBJECT = new THREE.Mesh( geometry, material );



        function tick() {

            requestAnimationFrame(tick);

            HERO_OBJECT.rotation.y -= 0.0003;
            MAIN_LIGHT.position.set(100 ,100, MOUSE_Y)
            //CAMERA.position.z = MOUSE_Y /2 > 50 ? MOUSE_Y /2 : 50;

            renderer.render(scene, CAMERA);

        };




    }, [])






    return (
    <>  
        <div id="loader">
            
             <img alt="loader_gif" id="gifloader" src="/images/loader.gif"/>
             <div id="progress_bar">
                 <div id="progress"></div>
             </div>
        
        </div>
        
        
        
        <canvas id="three_canvas"></canvas>

    </>
    )
}