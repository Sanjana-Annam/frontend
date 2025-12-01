import React, {useState} from 'react'
import { api } from '../services/api'


export default function RegistrationModal({onClose, program}){
const [form, setForm] = useState({name:'', phone:'', village:'', program: program?.title || ''})
const [loading, setLoading] = useState(false)
const [message, setMessage] = useState('')


function update(e){ setForm({...form, [e.target.name]: e.target.value }) }


async function submit(e){
e.preventDefault()
if(!form.name || !form.phone) { setMessage('Please fill required fields'); return }
setLoading(true)
try{
const res = await api.registerApplicant(form)
setMessage('Registration successful — ID ' + res.id)
setForm({name:'', phone:'', village:'', program:''})
}catch(err){ setMessage('Registration failed') }
setLoading(false)
}


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
<div className="bg-white rounded-lg p-6 max-w-md w-full">
<div className="flex justify-between items-center">
<h3 className="font-bold">Apply for {program?.title || 'a program'}</h3>
<button onClick={onClose} className="text-gray-500">✕</button>
</div>
<form onSubmit={submit} className="mt-4 space-y-3">
<input name="name" value={form.name} onChange={update} placeholder="Full name" className="w-full border rounded px-3 py-2" />
<input name="phone" value={form.phone} onChange={update} placeholder="Phone / WhatsApp" className="w-full border rounded px-3 py-2" />
<input name="village" value={form.village} onChange={update} placeholder="Village / City" className="w-full border rounded px-3 py-2" />
<div className="flex justify-end gap-3">
<button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
<button type="submit" className="px-4 py-2 bg-primary text-white rounded">{loading? 'Submitting...' : 'Submit'}</button>
</div>
{message && <div className="text-sm text-gray-600">{message}</div>}
</form>
</div>
</div>
)
}