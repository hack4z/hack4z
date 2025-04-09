import { gemini } from './gemini';
import { loginUser, createUser } from './utils';
import  Cookies from 'js-cookie';

export async function aiAction({request}){
	const formData = await request.formData();
	const prompt = formData.get('prompt');
	const res = await gemini(prompt);
	console.log(res)
	return { role: 'assistant', content: res };
}

export async function editorAction({request}){
	const formData = await request.formData();
	const name = formData.get('file');
	return {name: name, code: null, lang: 'python'};
}

export async function helpAction({request}){
	const formData = await request.formData();
	const msg = formData.get('msg');
	return msg;
}

export async function loginAction({request}){
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');
	const res = loginUser(email, password);
	return res;
}

export async function registrationAction({request}){
	const formData = await request.formData();
	const firstName = formData.get('firstName');
	const lastName = formData.get('lastName');
	const email = formData.get('email');
	const password = formData.get('password');
	const residence = formData.get('residence');
	const birthday = formData.get('birthday');
	const phone = formData.get('phoneNumber');
	const user = await createUser(firstName, lastName, email, phone, password, residence, birthday);
	console.log(user);	
	return null;
}