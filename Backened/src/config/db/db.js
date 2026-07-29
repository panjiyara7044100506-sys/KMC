import pg from 'pg'
import { Pool } from 'pg'

const db = new Pool({
    user:"postgres",
    host:"localhost",
    database:"CivicEmergency",
    password:"MILANdatabase",
    port:5432
})

export default db;