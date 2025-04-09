import { openDB } from 'idb';

export const saveCode = async (id, code) => {
	const db = await initDB();
	await db.put('code', { id, code });
	console.log(`Code with ID: ${id} saved.`);
};

export const loadCode = async (id) => {
	const db = await initDB();
	const data = await db.get('code', id);
	return data ? data.code : null;
};

export const deleteCode = async (id) => {
	const db = await initDB();
	await db.delete('code', id);
	console.log(`Code with ID: ${id} deleted.`);
};

export async function loadAllCode(){
	const db = await initDB();
	const allCode = db.getAll('code');
	return allCode;
};