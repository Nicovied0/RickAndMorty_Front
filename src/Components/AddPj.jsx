// import React from "react";
// import { useHistory ,Link} from "react-router-dom";
// import { postCharacter } from "../redux/actions/actions";
// // import style from "./Styles/Nav.module.css";
// import { useDispatch } from "react-redux";
// import { useState } from "react";

// const AddPj = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   // const episodes = useSelector(e => e.episodes)
//   const [input, setInput] = useState({
//     name: "",
//     species: "",
//     origin: "",
//     image: "",
//     // episode:[]
//   });

//   function handleChange(e) {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   }

// //   function handleSelect(e) {
// //     setInput({
// //         ...input,
// //         episodes: [
// //             ...input.episodes,
// //             e.target.value
// //         ]
// //     });
// // };

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(postCharacter(input));
//     alert("Personaje creado!");
//     setInput({
//       name: "",
//       species: "",
//       origin: "",
//       image: "",
//       // episodes:[]
//     });
//     history.push("/character");
//   }

//   return (
//     <div>
//       <Link to="/home">
//         <button>Volver</button>
//       </Link>
//       <h1>Crea tu personaje</h1>
//       <form
//         onSubmit={(e) => {
//           handleSubmit(e);
//         }}
//       >
//         <div>
//           <label>Nombre:</label>
//           <input
//             type="text"
//             value={input.name}
//             name="name"
//             onChange={(e) => handleChange(e)}
//           ></input>
//         </div>
//         <div>
//           <label>species:</label>
//           <input
//             type="text"
//             value={input.species}
//             name="species"
//             onChange={(e) => handleChange(e)}
//           ></input>
//         </div>
//         <div>
//           <label>origin:</label>
//           <input
//             type="text"
//             value={input.origin}
//             name="origin"
//             onChange={(e) => handleChange(e)}
//           ></input>
//         </div>
//         <div>
//           <label>Image:</label>
//           <input
//             type="text"
//             value={input.image}
//             name="image"
//             onChange={(e) => handleChange(e)}
//           ></input>
//         </div>
//         {/* <select onChange={e => handleSelect(e)}>
//                     {
//                         episodes.map(i => (
//                             <option value={i.name}>{i.name}</option>
//                         ))
//                     }
//                     <ul>
//                         <li>{input.episodes.map(i => i + ", ")}</li>
//                     </ul>
//                 </select> */}

//         <button type="submit">Crear Personaje</button>
//       </form>
//     </div>
//   );
// };

// export default AddPj;
