// import { useState, useEffect, useRef, forwardRef } from "react";
// import dynamic from "next/dynamic";
// //data

// const GlobeTmpl = dynamic(() => import("./Globe"), {
//   ssr: false,
// });
// const Globe = forwardRef((props, ref) => (
//   <GlobeTmpl {...props} forwardRef={ref} />
// ));

// const World = () => {
//   const globeRef = useRef();
//   const earthImg = "//unpkg.com/three-globe/example/img/earth-night.jpg";
//   const backGroundImg = "//unpkg.com/three-globe/example/img/night-sky.png";

//   const [globeReady, setGlobeReady] = useState(false);

//   const startTime = 1000;

//   //   useEffect(() => {
//   //     if (!globeRef.current) {
//   //       return;
//   //     }
//   //     // globeRef.current.controls().enableZoom = false;
//   //     // Auto-rotate
//   //     globeRef.current.controls().autoRotate = true;
//   //     globeRef.current.controls().autoRotateSpeed = 1;
//   //   }, [globeReady]);

//   return (
//     <>
//       <Globe
//         // globeImageUrl={earthImg}
//         ref={globeRef}
//         // backgroundImageUrl={backGroundImg}
//         onGlobeReady={() => setGlobeReady(true)}
//         backgroundColor="rgba(0,0,0,0)"
//         // height={500}
//         hexPolygonMargin={0.7}
//         hexPolygonColor={() => "rgba(255, 255, 255, 1)"}
//         showAtmosphere={true}
//         animateIn={true}
//       />
//     </>
//   );
// };

// export default World;
