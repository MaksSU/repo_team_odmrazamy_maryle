import { Name } from "./Name";

export function NameLength({ name }){
    const newName = name + " ma " + name.length + " znaków"
    return(
        <div>
            <Name name={newName}/>
        </div>
    )
}