import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/user";
import {NextResponse} from 'next/server'

export async function POST(req){
    try {
        await connectMongoDB();
        const {email} = await req.json()
        const account = await User.findOne({email}).select('_id')
        console.log("user : ",account)
        return NextResponse.json({account})
    } catch (error) {
        console.log(error)
    }
}