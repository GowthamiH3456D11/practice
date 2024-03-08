import React from "react";
import {useState , useEffect } from "react";



// export default function App8(){
//     const [count, setcount]=useState(0);
//     console.log("component loaded");
//     return(
//         <>
//         <button onClick={() => setcount ((prevstate)=>prevstate +1)}>click</button>
//         <span>{count}</span>
//         </>
//     )

// }

// export default function App8(){
//     const [runs, setRuns] = useState(0);
//     const [wickets, setWickets] = useState(0);
//     console.log("component loaded");
//     useEffect(() => {
//         console.log("Better luck next time");
//     },[wickets]);
//     return(
//         <>
//         <button onClick={() => setRuns((prevState) => prevState+1 )}>
//             runs({runs})
//             </button>
//             <button onClick={() => setWickets((prevState) => prevState +1)}>
//                 wickets({wickets})
//             </button>
//             </>
//     )
// }


export default function App8() {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    // console.log("Component loaded");
    useEffect(() => {
      if (wickets > 0) console.log(`Wickets:${wickets}.Better Luck Next Time!`);
    }, [wickets]);
  
    useEffect(() => {
      if (runs > 0) console.log(`Good Job! Score:${runs}`);
    }, [runs]);
  
    return (
      <>
        <button onClick={() => setRuns((prevState) => prevState + 1)}>
          Runs({runs})
        </button>
        <button onClick={() => setWickets((prevState) => prevState + 1)}>
          Wickets({wickets})
        </button>
      </>
    );
  }
  