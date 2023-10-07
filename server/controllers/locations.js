import { pool } from '../config/database.js'

const getLocations = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }

const getLocationById = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM locations WHERE id=$1`, [req.params.location])
    console.log(req.params.locationId)
    res.status(200).json(results.rows)
  }
  catch (error){
    res.status(400).json( {error: error.message})
  }
}

export default { 
    getLocations,
    getLocationById
}