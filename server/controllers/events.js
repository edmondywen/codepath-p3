import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
      res.status(200).json(results.rows)
    // res.status(200).json({'hey': 'hello'})
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }

const getEventById = async (req, res) => {
    try { 
        const selectQuery = 'SELECT * FROM events WHERE id=$1'
        const results = await pool.query(selectQuery, [req.params.eventId])
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getEventsByLocation = async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM events WHERE location=$1'
    const results = await pool.query(selectQuery, [req.params.locationName])
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(400).json({error: error.message})
  }
}
export default {
    getEvents,
    getEventById,
    getEventsByLocation
}