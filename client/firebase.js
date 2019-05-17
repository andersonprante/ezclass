import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
})
const database = firebaseApp.database()

const firebase = {
  users: database.ref('Users'),
  classes: database.ref('Class'),
  activities: database.ref('Activities'),
  groups: database.ref('Groups'),
  individualResponse: database.ref('Individual_Response')
  // Confirm_Consensus: database.ref('Confirm_Consensus'),
  // Group_Response: database.ref('Group_Response'),
  // Material: database.ref('Material'),
  // messages: database.ref('Messages'),
  // userStatus: database.ref('User_Status'),
}

export {
  firebase
}
