// Simple mock API layer — replace with real endpoints when available
import { programs, mentors } from '../data/sample'


export const api = {
getPrograms() { return new Promise(res => setTimeout(() => res(programs), 400)) },
getMentors() { return new Promise(res => setTimeout(() => res(mentors), 300)) },
registerApplicant(data) {
// Here you'd POST to a backend — for demo we return a success promise
console.log('Registration payload', data)
return new Promise(res => setTimeout(() => res({ status: 'ok', id: Date.now() }), 800))
}
}