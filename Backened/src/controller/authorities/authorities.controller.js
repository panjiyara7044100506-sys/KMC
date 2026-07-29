import db from "../../config/db/db.js";

export async function getIssue(req, res) {
    try {
        const issue = await db.query('SELECT issues.*, users.name,users.email,users.phone,issue_images.image_url FROM issues JOIN users ON issues.user_id = users.id LEFT JOIN issue_images ON issues.id=issue_images.issue_id ORDER BY issues.id ASC')
        if (issue.rows.length === 0) return res.json({ success: false, message: "no issue exist" });

        return res.json({ totalIssues: issue.rows, totalLength: issue.rows.length })
    } catch (err) {
        console.log(err)
        return res.json(err)
    }
}

export async function IssueByDepartName(req, res) {
    const {issue_category} = req.params;
    try {
        const issue = await db.query('SELECT issues.*, users.name,users.email,users.phone,issue_images FROM issues JOIN users ON issues.user_id=users.id LEFT JOIN issue_images ON issues.id = issue_images.issue_id WHERE issues.category = $1 ORDER BY issues.id ASC', [issue_category])
        if (issue.rows.length === 0) return res.json({ success: false, message: "no issue exist" })

        return res.json({ totalIssues: issue.rows, totallength: issue.rows.length })
    } catch (err) {
        console.log(err);
        return res.json(err);
    }
}
export async function fetchAssignmentTable(req,res){
    try{
        const response = await db.query('SELECT * FROM issue_assignments');
        return res.json(response.rows);
    }catch(err){
        console.log(err);
    }
}
export async function updateStatus(req,res) {
    const {newsts,issue_id} = req.body;
    try{
        const response = await db.query('UPDATE issue_assignments SET status=$1 WHERE issue_id=$2 RETURNING*',[newsts,issue_id]);
        if(response.rows.length===0) return res.json({message:"update fail"});

        return res.json({message:"update success",result:response.rows[0]})
    }catch(err){
        console.log(err);
    }
}

// add feild worker
//assign work/(issue to worker dashboard) to particular worker
