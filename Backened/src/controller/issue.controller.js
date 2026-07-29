import db from "../config/db/db.js";

export async function newIssue(req,res) {
    const user_id = req.user.id;
    console.log(user_id)
    const{title,description,category,latitude,longitude,address,priority,image_url}=req.body;
    try{
        const issueExist = await db.query('SELECT * FROM issues WHERE user_id=$1 AND title=$2 AND address=$3',[user_id,title,address]);
        if(issueExist.rows.length>0) return res.json("issue already exist");

        const issue = await db.query('INSERT INTO issues (user_id,title,description,category,latitude,longitude,address,priority) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[user_id,title,description,category,latitude,longitude,address,priority])
        const issue_id = issue.rows[0].id

        const img = await db.query('INSERT INTO issue_images (issue_id,image_url) VALUES($1,$2) RETURNING *',[issue_id,image_url])
        
        //set-in authority-issue assignment table
        const assigned = await db.query('INSERT INTO issue_assignments (issue_id,assigned_to) VALUES($1,$2)',[issue_id,user_id])
        
        return res.json({issue:issue.rows[0],image:img.rows[0]});
    }catch(err){
        console.log(err);
        return res.json({err:err.message})
    }
}

export async function fetchIssue(req,res){
    const user_id = req.user.id;
    try{
            const issues = await db.query('SELECT * FROM issues WHERE user_id=$1',[user_id]);
            if(issues.rows.length===0) return res.json({success:false,message:"no issue exist"});

            return res.json({totalIssues:issues.rows});
    }catch(err){
        console.log(err);
        return res.json(err)
    }
}