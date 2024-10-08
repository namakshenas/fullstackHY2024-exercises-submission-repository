// This part is commented out because we are now using the database

// let persons = [
//     { 
//       "id": "1",
//       "name": "Arto Hellas", 
//       "number": "040-123456"
//     },
//     { 
//       "id": "2",
//       "name": "Ada Lovelace", 
//       "number": "39-44-5323523"
//     },
//     { 
//       "id": "3",
//       "name": "Dan Abramov", 
//       "number": "12-43-234345"
//     },
//     { 
//       "id": "4",
//       "name": "Mary Poppendieck", 
//       "number": "39-23-6423122"
//     }
// ]

// app.get('/info', (request, response) => {
//     response.send(`<p>Phonebook has info for ${persons.length} people</p>
//         <p>${new Date()}</p>`)
// })

// app.get('/api/persons/:id', (request, response) => {
//     const id = request.params.id
//     const person = persons.find(person => person.id === id)
    
//     if (person) {
//       response.json(person)
//     } else {
//       response.status(404).end()
//     }
//   })


// app.get('/api/persons', (request, response) => {
//     response.json(persons)
// })

// app.post('/api/persons', (request, response) => {
//     const body = request.body

//     if (!body.name) {
//         return response.status(400).json({ 
//             error: 'name missing' 
//         })
//     }

//     if (!body.number) {
//         return response.status(400).json({ 
//             error: 'number missing' 
//         })
//     }


//     if (persons.find(person => person.name === body.name)) {
//         return response.status(400).json({ 
//             error: 'name must be unique' 
//         })
//     }

//     const person = {
//         id: String(Math.floor(Math.random() * 1000000)),
//         name: body.name,
//         number: body.number
//     }

//     persons = persons.concat(person)
//     response.json(person)
// })

// app.delete('/api/persons/:id', (request, response) => {
//     const id = request.params.id
//     persons = persons.filter(person => person.id !== id)
//     response.status(204).end()
// })