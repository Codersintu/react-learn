import {atom, selector} from "recoil"
export const CountAtom=atom({
    key:"countAtom",
    default:0
})


export const EvenSelector=selector({
        key:"EvenSelector",
        get:({get})=>{//getfunction
            const count=get(CountAtom)
            return count % 2 == 0;
        }
     
})

//so basically in that get function we have the access to various atoms 
//and can return the a state which depends on these atoms by doing some logic

