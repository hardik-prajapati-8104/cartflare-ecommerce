import { Inngest } from "inngest";
import { connectDB} from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "cartflare-next" });

//inngest function to save cart data to the database
export const syncUserCreation = inngest.createFunction(
    {
    id:'sync-user-from-clerk'
},
{
    event: 'clerk/user.created'
},
async({event}) => {
    const { id, first_name, 
        last_name, email_addresses, 
        image_url } = event.data
        const userData ={
            _id: id,
            name: email_addresses[0].email_address,
            name: first_name + '' + last_name,
            imagerUrl:image_url
        }
        await connectDB()
        await User.create(userData)
}
)

//inngest function to update user data in the database
export const syncUserUpdation = inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    {
         event: 'clerk/user.updated'
    },
    
async({event}) => {
    const { id, first_name, 
        last_name, email_addresses, 
        image_url } = event.data
        const userData ={
            _id: id,
            name: email_addresses[0].email_address,
            name: first_name + '' + last_name,
            imagerUrl:image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
}
)

//inngest function to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
    {
          id:'delete-user-with-clerk'
    },
    {
           event: 'clerk/user.deleted'
    },
    
async({event}) => {
    const { id} = event.data
        await connectDB()
        await User.findByIdAndDelete(id)
}
)