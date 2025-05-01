import pg from 'pg';
const { Client } = pg;

const connectionString = 'postgresql://postgres:QeqC8GD8CwjSojrE@fully-stunning-koala.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt';
const client = new Client({
  connectionString: connectionString,
});

async function queryDatabase() {
  try {
   
    await client.connect();

 
    const queryText = 'SELECT * FROM students WHERE first_name = $1';
    const queryParams = ['Andrio'];
    const result = await client.query(queryText, queryParams);

    console.log(result.rows);

  } catch (error) {
    
    console.error('Error executing query:', error);
  } finally {

    await client.end();
  }
}

queryDatabase()
  .then(() => {
    console.log('Query executed successfully, and connection closed.');
  })
  .catch((error) => {
    
    console.error('An error occurred:', error);
  });
