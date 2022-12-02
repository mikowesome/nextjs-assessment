import mariadb from 'mariadb'

export const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5,
    database: process.env.DB_DATABASE
})

export const connectDb = async (query, values = []) => {
    try {
        const connection = await pool.getConnection()
        const result = await connection.query(query, values)
        connection.end()
        return result
    } catch (error) {
        console.log(error)
    }
}
