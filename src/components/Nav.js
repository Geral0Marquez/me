import Toggle from "../components/Toggle";

export const Nav = ({ setTranslate, translate }) => {

  function handleClick(e) {
    e.preventDefault();
    translate === "es" ? setTranslate("en") : setTranslate("es");
  }

  
  return (
    <div className="nav-fix">
     <div className="nav-f"> 
     <Toggle /></div>

     <div className="toggle-t" onClick={handleClick}>
     <div className="pa">Eng</div>
      <div className="pa right-e">Esp</div>
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={  translate === "es"? { left: "1.5px" } : { right: "3px" }}
      ></div>
    </div>
     
    </div>
  );
}


