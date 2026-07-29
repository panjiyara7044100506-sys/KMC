import db from "../../config/db/db.js";

export async function fetchALlIssues(req,res){
    try{
        const issues = await db.query('SELECT issues.*, users.name,users.email FROM issues JOIN users ON issues.user_id = users.id');
        return res.json({issuesLength:issues.rows.length,totalIssues:issues.rows})
    }catch(err){
        return res.json(err)
    }
}

export async function delete_users_all_db(req,res){
    try{
        const remove = await db.query('TRUNCATE TABLE users CASCADE')
        if(remove.rows.length===0) return res.json("Deleted successfull")
            return res.json("invslid querry");
    }catch(err){
        console.log(err);
    }
}