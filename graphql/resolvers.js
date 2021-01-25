import {people,getById,getByAge} from './db'
const resolvers = {
    Query:{
        people:()=>people,
        person:(_,{id})=>
          getById(id),
        personAge:(_,{age}) => getByAge(age)
          
    }

}
export default resolvers